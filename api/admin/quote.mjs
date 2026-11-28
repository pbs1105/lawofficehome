// 직원포털 「견적 계산」 → 노션 저장 (2026-11-28)
// 주소: POST /admin/api/quote  (vercel.json rewrite → /api/admin/quote, middleware 기본 인증 안쪽)
// 회계DB에 사건 청구 1행(단계=견적, ⚠️ 미검증) + 회계세부항목DB에 항목별 견적금액을 만든다.
// 고객 인적사항·주민번호는 받지도 쓰지도 않는다. 확정금액·입금·증빙은 직원이 노션에서 넣는다.

const NOTION = 'https://api.notion.com/v1';
const CASE_DB = '2f70ce34-50b8-8090-a77b-ef2ecdb1d20d';
const ACCOUNT_DB = '220478ef-1ced-4fc8-aa11-80f2a64e7ed6';
const ITEM_DB = '7a4467f4-0d73-4862-86b4-ebbc8f182e95';
const GROUPS = new Set(['보수', '부가세', '공과금(대납)', '예납금', '기타실비']);
const KINDS = new Set(['보수', '취등록세', '국민주택채권', '인지대', '송달료', '지방교육세', '농어촌특별세', '기타실비']);

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
const txt = (s, n) => String(s == null ? '' : s).slice(0, n);
const rt = (s) => [{ type: 'text', text: { content: txt(s, 1900) } }];

async function notion(token, path, method, body) {
  const res = await fetch(NOTION + path, {
    method,
    headers: { authorization: `Bearer ${token}`, 'notion-version': '2022-06-28', 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`노션 ${method} 실패 (${res.status}) ${txt(j.message, 160)}`);
  return j;
}

export async function POST(request) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return json({ error: 'NOTION_TOKEN 미설정' }, 503);
  let b;
  try { b = await request.json(); } catch { return json({ error: '요청 형식 오류' }, 400); }
  const caseNo = txt(b.caseNo, 20).trim();
  if (!/^\d{6}_\d{2}$/.test(caseNo)) return json({ error: '사건번호 형식 오류(예: 261124_02)' }, 400);
  const items = Array.isArray(b.items) ? b.items.slice(0, 40) : [];
  if (!items.length) return json({ error: '저장할 항목이 없습니다' }, 400);
  for (const it of items) {
    if (!GROUPS.has(it.group)) return json({ error: '구분 값 오류: ' + txt(it.group, 30) }, 400);
    if (it.amount != null && !(typeof it.amount === 'number' && isFinite(it.amount) && it.amount >= 0 && it.amount < 1e13)) return json({ error: '금액 오류: ' + txt(it.label, 40) }, 400);
  }

  try {
    const q = await notion(token, `/databases/${CASE_DB}/query`, 'POST', { page_size: 5, filter: { property: '사건번호-고객명-사건명', title: { starts_with: caseNo } } });
    const hits = q.results || [];
    if (!hits.length) return json({ error: `사건부DB에서 ${caseNo} 사건을 찾지 못했습니다` }, 404);
    if (hits.length > 1) return json({ error: `${caseNo}로 시작하는 사건이 ${hits.length}건입니다 — 사건번호를 확인해 주세요` }, 409);
    const casePage = hits[0];
    const caseTitle = ((casePage.properties['사건번호-고객명-사건명'] || {}).title || []).map((t) => t.plain_text).join('') || caseNo;

    const ex = await notion(token, `/databases/${ACCOUNT_DB}/query`, 'POST', { page_size: 20, filter: { property: '관련사건', relation: { contains: casePage.id } } });
    const existing = (ex.results || []).length;

    const pend = items.filter((i) => i.amount == null).length;
    const date = new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10);
    const acc = await notion(token, '/pages', 'POST', {
      parent: { database_id: ACCOUNT_DB },
      properties: {
        '문서명': { title: rt(`${caseTitle} — 견적 (${txt(b.title, 40)})`) },
        '단계': { select: { name: '견적' } },
        '관련사건': { relation: [{ id: casePage.id }] },
        '검증상태': { select: { name: '⚠️ 미검증' } },
        '비고': { rich_text: rt(`포털 견적 계산 ${date} · 요율표 ${txt(b.ratesVersion, 12)}${pend ? ` · 확정 후 기재 ${pend}건` : ''}`) },
      },
    });

    // 세부항목: 노션 초당 요청 한도를 고려해 3개씩
    for (let i = 0; i < items.length; i += 3) {
      await Promise.all(items.slice(i, i + 3).map((it) => notion(token, '/pages', 'POST', {
        parent: { database_id: ITEM_DB },
        properties: {
          'Name': { title: rt(txt(it.label, 100)) },
          '구분': { select: { name: it.group } },
          ...(KINDS.has(it.kind) ? { '항목명': { select: { name: it.kind } } } : {}),
          '견적금액': { number: it.amount == null ? null : Math.round(it.amount) },
          '상위문서': { relation: [{ id: acc.id }] },
          '요율항목ID': { rich_text: rt((Array.isArray(it.rateIds) ? it.rateIds : []).join(', ')) },
          '비고': { rich_text: rt((it.pending ? `[${txt(it.pending, 60)}] ` : '') + txt(it.formula, 600)) },
        },
      })));
    }
    return json({ ok: true, url: acc.url, caseTitle, items: items.length, existing });
  } catch (e) {
    return json({ error: String(e.message || e) }, 502);
  }
}
