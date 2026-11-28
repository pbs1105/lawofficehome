// 직원포털 「입금·증빙 기록」 (2026-11-28)
// GET   /admin/api/payment?caseNo=261124_02  → 그 사건의 회계(청구) 행·입금 행
// POST  /admin/api/payment                    → 입금·증빙DB에 입금 1건 기록(직원 입력값 그대로)
// PATCH /admin/api/payment                    → 증빙 발행 결과(발행완료·승인번호·발행일) 기록
// 입금 확인·발행은 직원이 한다 — 이 함수는 직원이 넣은 값을 노션에 옮길 뿐 판정하지 않는다.
// 고객 주민번호·사업자번호·연락처는 읽지도 돌려주지도 않는다.

const NOTION = 'https://api.notion.com/v1';
const CASE_DB = '2f70ce34-50b8-8090-a77b-ef2ecdb1d20d';
const ACCOUNT_DB = '220478ef-1ced-4fc8-aa11-80f2a64e7ed6';
const PAYMENT_DB = '4260ce34-50b8-8119-8678-eb01c553e1ab';
const METHODS = new Set(['계좌이체', '현금', '카드']);
const KINDS = new Set(['세금계산서', '현금영수증(소득공제)', '현금영수증(지출증빙)', '현금영수증(자진발급)', '카드결제', '발급대상 아님']);
const ISSUE = new Set(['발행대기', '발행완료', '발행실패']);

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
const txt = (s, n) => String(s == null ? '' : s).slice(0, n);
const rt = (s) => [{ type: 'text', text: { content: txt(s, 1900) } }];
const ymd = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s || '')) ? s : null;
const money = (v) => typeof v === 'number' && isFinite(v) && v >= 0 && v < 1e13;
const P = (p, k) => (p.properties || {})[k] || {};
const sel = (p, k) => (P(p, k).select || {}).name || '';
const title = (p, k) => (P(p, k).title || []).map((t) => t.plain_text).join('');
const rich = (p, k) => (P(p, k).rich_text || []).map((t) => t.plain_text).join('');
const num = (p, k) => (typeof P(p, k).number === 'number' ? P(p, k).number : null);
const roll = (p, k) => { const r = P(p, k).rollup || {}; return typeof r.number === 'number' ? r.number : 0; };
const date = (p, k) => (P(p, k).date || {}).start || '';
const fdate = (p, k) => ((P(p, k).formula || {}).date || {}).start || '';
const rel = (p, k) => (P(p, k).relation || []).map((x) => x.id);

async function notion(token, path, method, body) {
  const res = await fetch(NOTION + path, { method, headers: { authorization: `Bearer ${token}`, 'notion-version': '2022-06-28', 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) { const e = new Error(`노션 ${method} 실패 (${res.status}) ${txt(j.message, 160)}`); e.status = res.status; throw e; }
  return j;
}
const clean = (id) => String(id || '').replace(/-/g, '');

async function findCase(token, caseNo) {
  const q = await notion(token, `/databases/${CASE_DB}/query`, 'POST', { page_size: 5, filter: { property: '사건번호-고객명-사건명', title: { starts_with: caseNo } } });
  const hits = q.results || [];
  if (!hits.length) return { error: `사건부DB에서 ${caseNo} 사건을 찾지 못했습니다`, status: 404 };
  if (hits.length > 1) return { error: `${caseNo}로 시작하는 사건이 ${hits.length}건입니다`, status: 409 };
  return { page: hits[0] };
}

async function caseView(token, casePage) {
  const accs = (await notion(token, `/databases/${ACCOUNT_DB}/query`, 'POST', { page_size: 50, filter: { property: '관련사건', relation: { contains: casePage.id } } })).results || [];
  const out = [];
  for (const a of accs) {
    const pays = (await notion(token, `/databases/${PAYMENT_DB}/query`, 'POST', { page_size: 100, filter: { property: '회계', relation: { contains: a.id } }, sorts: [{ property: '입금일', direction: 'ascending' }] })).results || [];
    out.push({
      id: a.id, url: a.url, title: title(a, '문서명'), stage: sel(a, '단계'),
      quoteTotal: roll(a, '견적합계'), fixedTotal: roll(a, '확정합계'), feeTotal: roll(a, '보수합계'), vatTotal: roll(a, '부가세합계'), paid: roll(a, '입금누계액'),
      payments: pays.map((p) => ({ id: p.id, url: p.url, name: title(p, '입금명'), date: date(p, '입금일'), amount: num(p, '입금액'), method: sel(p, '입금방법'), target: num(p, '증빙대상금액'), kind: sel(p, '증빙종류'), issue: sel(p, '발행상태'), approval: rich(p, '승인번호'), issuedAt: date(p, '발행일'), due: fdate(p, '발급기한') })),
    });
  }
  return out;
}

export async function GET(request) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return json({ error: 'NOTION_TOKEN 미설정' }, 503);
  const caseNo = txt(new URL(request.url).searchParams.get('caseNo'), 20).trim();
  if (!/^\d{6}_\d{2}$/.test(caseNo)) return json({ error: '사건번호 형식 오류(예: 261124_02)' }, 400);
  try {
    const c = await findCase(token, caseNo);
    if (c.error) return json({ error: c.error }, c.status);
    return json({ caseNo, caseTitle: title(c.page, '사건번호-고객명-사건명'), caseUrl: c.page.url, accounts: await caseView(token, c.page) });
  } catch (e) { return json({ error: String(e.message || e) }, 502); }
}

export async function POST(request) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return json({ error: 'NOTION_TOKEN 미설정' }, 503);
  let b; try { b = await request.json(); } catch { return json({ error: '요청 형식 오류' }, 400); }
  const accountId = clean(b.accountId);
  if (!/^[0-9a-f]{32}$/.test(accountId)) return json({ error: '회계 행을 고르세요' }, 400);
  const d = ymd(b.date); if (!d) return json({ error: '입금일 형식 오류' }, 400);
  if (!money(b.amount) || b.amount <= 0) return json({ error: '입금액을 넣으세요' }, 400);
  if (b.target != null && !money(b.target)) return json({ error: '증빙대상금액 오류' }, 400);
  if (!METHODS.has(b.method)) return json({ error: '입금방법 오류' }, 400);
  if (!KINDS.has(b.kind)) return json({ error: '증빙종류 오류' }, 400);
  const issue = b.kind === '발급대상 아님' || b.kind === '카드결제' ? null : (ISSUE.has(b.issue) ? b.issue : '발행대기');
  try {
    // 회계 행이 실제 회계DB 행인지 확인
    const acc = await notion(token, `/pages/${accountId}`, 'GET');
    if (clean((acc.parent || {}).database_id) !== clean(ACCOUNT_DB)) return json({ error: '회계DB 행이 아닙니다' }, 400);
    const name = `${txt(b.caseNo, 12)} ${d} ${Math.round(b.amount).toLocaleString('ko-KR')}원`;
    const page = await notion(token, '/pages', 'POST', {
      parent: { database_id: PAYMENT_DB },
      properties: {
        '입금명': { title: rt(name) },
        '회계': { relation: [{ id: accountId }] },
        '입금일': { date: { start: d } },
        '입금액': { number: Math.round(b.amount) },
        '입금자명': { rich_text: rt(txt(b.payer, 60)) },
        '입금방법': { select: { name: b.method } },
        '증빙대상금액': { number: b.target == null ? null : Math.round(b.target) },
        '증빙종류': { select: { name: b.kind } },
        ...(issue ? { '발행상태': { select: { name: issue } } } : {}),
      },
    });
    return json({ ok: true, id: page.id, url: page.url, name });
  } catch (e) { return json({ error: String(e.message || e) }, e.status === 404 ? 404 : 502); }
}

export async function PATCH(request) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return json({ error: 'NOTION_TOKEN 미설정' }, 503);
  let b; try { b = await request.json(); } catch { return json({ error: '요청 형식 오류' }, 400); }
  const id = clean(b.paymentId);
  if (!/^[0-9a-f]{32}$/.test(id)) return json({ error: '입금 행 오류' }, 400);
  if (!ISSUE.has(b.issue)) return json({ error: '발행상태 오류' }, 400);
  const d = b.issuedAt ? ymd(b.issuedAt) : null;
  if (b.issue === '발행완료' && (!d || !txt(b.approval, 60).trim())) return json({ error: '발행완료는 승인번호와 발행일이 필요합니다' }, 400);
  try {
    const pg = await notion(token, `/pages/${id}`, 'GET');
    if (clean((pg.parent || {}).database_id) !== clean(PAYMENT_DB)) return json({ error: '입금·증빙DB 행이 아닙니다' }, 400);
    await notion(token, `/pages/${id}`, 'PATCH', {
      properties: {
        '발행상태': { select: { name: b.issue } },
        ...(b.approval != null ? { '승인번호': { rich_text: rt(txt(b.approval, 60)) } } : {}),
        ...(d ? { '발행일': { date: { start: d } } } : {}),
        ...(b.issue === '발행실패' ? { '발행오류': { rich_text: rt(txt(b.error, 300)) } } : {}),
      },
    });
    return json({ ok: true });
  } catch (e) { return json({ error: String(e.message || e) }, 502); }
}
