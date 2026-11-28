// 직원포털 「처리할 일 목록」 — 노션 읽기 전용 (통합 문서 5부 §3·§6, 2026-11-28)
// 주소: /admin/api/queue?stage=intake  (vercel.json rewrite → /api/admin/queue, middleware 기본 인증 안쪽)
// 비밀값: Vercel 환경변수 NOTION_TOKEN (화면 코드에 넣지 않는다)
// 반환: 사건(상담)번호·고객명이 든 제목, 상태값, 노션 링크만. 연락처·주민번호 등은 읽지도 돌려주지도 않는다.

const NOTION = 'https://api.notion.com/v1';
const CONSULT_DB = '4020ce34-50b8-810b-ba4d-f2a47407a9fa'; // 상담DB
const CASE_DB = '2f70ce34-50b8-8090-a77b-ef2ecdb1d20d'; // 사건부DB
const ACCOUNT_DB = '220478ef-1ced-4fc8-aa11-80f2a64e7ed6'; // 회계DB (문서 1건 = 1행, 관련사건 → 사건부DB)
const DEADLINE_DB = '02864565-80c7-44be-8624-1aa5aec17911'; // 기한DB (행 1개 = 기한 1개)
const DEADLINE_DAYS = 7; // 첫 화면 「기한 임박」: 지난 기한 + 오늘부터 7일 이내

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const prop = (p, k) => (p.properties || {})[k] || {};
const sel = (p, k) => (prop(p, k).select || {}).name || '';
const num = (p, k) => (typeof prop(p, k).number === 'number' ? prop(p, k).number : 0);
const date = (p, k) => (prop(p, k).date || {}).start || '';
const rel = (p, k) => (prop(p, k).relation || []).map((x) => x.id);
const title = (p, k) => (prop(p, k).title || []).map((t) => t.plain_text).join('');
// 담당직원: 사람·선택·텍스트 어느 형식이든 이름만
const who = (p, k) => {
  const v = prop(p, k);
  if (Array.isArray(v.people)) return v.people.map((x) => x.name || '').filter(Boolean).join(', ');
  if (v.select) return v.select.name || '';
  if (Array.isArray(v.multi_select)) return v.multi_select.map((x) => x.name).join(', ');
  if (Array.isArray(v.rich_text)) return v.rich_text.map((t) => t.plain_text).join('');
  return '';
};

const DAY = 86400000;
const daysSince = (iso) => (iso ? Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / DAY)) : null);

// 1 수임 — 상담DB 상태=상담중 인 건만 대상
const INTAKE_QUEUES = [
  { id: 'analysis-failed', label: '분석 실패', todo: '원인 확인 후 노션에서 재분석', test: (r) => r.analysis === '분석실패' },
  { id: 'send-failed', label: '발송 실패', todo: '연락처·채널 확인 후 다시 발송', test: (r) => r.send === '발송실패' },
  { id: 'verify', label: '검증 대기', todo: 'AI 초안 검토·수정 → ✅ 검증완료', test: (r) => r.analysis === '분석완료' && r.verify !== '✅ 검증완료' },
  { id: 'send', label: '발송 대기', todo: '메일·카톡 발송 버튼', test: (r) => r.verify === '✅ 검증완료' && (r.send === '작성중' || r.send === '검토완료') },
  { id: 'supplement', label: '보완자료 도착', todo: '재분석 결과 확인', test: (r) => r.round > 0 && (r.analysis === '분석대기' || r.analysis === '분석중') },
  { id: 'convert', label: '수임 전환 대기', todo: '수임확정이면 사건부DB 전환·폴더 이동, 아니면 미수임종료', test: (r) => r.send === '발송완료' && r.analysis !== '분석대기' && r.analysis !== '분석중' },
];

// 2 생성 · 3 제출 — 사건부DB 상태가 수임·진행중·제출완료인 건 (상담·종결·미수임종료 제외)
// 추출상태: 대기 / 추출중 / 추출완료(⚠️미검증) / 검증완료 / 오류,  생성상태: 미생성 / 초안생성 / 검토중 / 03확정
const active = (r) => r.state === '수임' || r.state === '진행중';
// 2 생성 — 착수 준비(담당) → 01 서류 추출 → 추출값 검증 → 초안 → 검토. 03확정되면 3 제출로 넘어간다.
const GENERATE_QUEUES = [
  { id: 'no-owner', label: '담당 직원 미지정', todo: '사건부DB 담당직원 지정', test: (r) => active(r) && !r.owner },
  { id: 'extract-error', label: '추출 오류', todo: '작업로그 확인 → 01 서류 정리 후 「추출시작」 다시', test: (r) => active(r) && r.extract === '오류' },
  { id: 'extract-wait', label: '추출 대기', todo: '01 서류를 하위폴더에 정리한 뒤 「추출시작」', test: (r) => active(r) && r.extract === '대기' },
  { id: 'extract-verify', label: '추출값 검증 대기', todo: '추출값DB에서 값 대조 → ✅', test: (r) => active(r) && r.extract.startsWith('추출완료') },
  { id: 'draft-wait', label: '초안 생성 대기', todo: '사무실 PC에서 Fill engine 실행 → 02 초안', test: (r) => active(r) && r.extract === '검증완료' && (!r.generate || r.generate === '미생성') },
  { id: 'review', label: '검토 중', todo: '02 초안 검토 → 03 제출확정자료로 복사 후 「03확정」', test: (r) => active(r) && (r.generate === '초안생성' || r.generate === '검토중') },
];
// 3 제출 — 03확정 → (직원 제출) → 제출완료 → 04 접수증 저장·기한 등록 → 종결
const SUBMIT_QUEUES = [
  { id: 'submit-wait', label: '제출 대기 (03 확정)', todo: '전자소송·이폼 도구로 작성·저장 → 인증서 서명·최종 제출은 담당 직원', test: (r) => active(r) && r.generate === '03확정' },
  { id: 'submitted', label: '제출 완료 — 접수증·기한 확인', todo: '04 폴더에 접수증 저장, 기한DB 등록 확인 후 종결 처리', test: (r) => r.state === '제출완료' },
];
// 첫 화면 「오늘 할 일」에서 빼는 목록(확인용 목록이라 할 일 건수가 아님)
const NOT_TODO = new Set();

async function queryAll(token, dbId, filter) {
  const out = [];
  let cursor;
  for (let i = 0; i < 5; i++) {
    const res = await fetch(`${NOTION}/databases/${dbId}/query`, {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'notion-version': '2022-06-28', 'content-type': 'application/json' },
      body: JSON.stringify({ page_size: 100, filter, ...(cursor ? { start_cursor: cursor } : {}) }),
    });
    if (!res.ok) { const e = new Error(`노션 조회 실패 (${res.status})`); e.status = res.status; throw e; }
    const j = await res.json();
    out.push(...(j.results || []));
    if (!j.has_more) break;
    cursor = j.next_cursor;
  }
  return out;
}

function intakeRow(p) {
  const r = {
    url: p.url,
    title: title(p, '상담번호-고객명-사건명'),
    analysis: sel(p, '분석상태'),
    verify: sel(p, '검증상태'),
    send: sel(p, '발송상태'),
    round: num(p, '보완차수'),
    idleDays: daysSince(p.last_edited_time),
  };
  r.tags = [sel(p, '상담유형'), sel(p, '접수경로'), r.round ? `보완 ${r.round}차` : ''].filter(Boolean);
  r.status = [r.analysis || '-', r.verify || '-', r.send || '-'].join(' · ');
  return r;
}

function caseRow(p) {
  const r = {
    id: p.id.replace(/-/g, ''),
    url: p.url,
    title: title(p, '사건번호-고객명-사건명'),
    state: sel(p, '상태'),
    extract: sel(p, '추출상태'),
    generate: sel(p, '생성상태'),
    owner: who(p, '담당직원'),
    category: sel(p, '신규사건카테고리') || sel(p, '상담유형'),
    idleDays: daysSince(p.last_edited_time),
  };
  r.tags = [r.category, r.owner ? `담당 ${r.owner}` : '담당 미지정'].filter(Boolean);
  r.status = [r.state || '-', '추출 ' + (r.extract || '-'), '생성 ' + (r.generate || '-')].join(' · ');
  return r;
}

// 한국 날짜 기준 오늘(YYYY-MM-DD)과 n일 뒤
const kstDate = (plusDays = 0) => new Date(Date.now() + 9 * 3600000 + plusDays * DAY).toISOString().slice(0, 10);
const daysUntil = (ymd, today) => Math.round((new Date(ymd + 'T00:00:00Z') - new Date(today + 'T00:00:00Z')) / DAY);

// 기한DB — 처리상태가 대기(또는 비어 있음)이고 기한일이 7일 안에 들어오거나 이미 지난 건
// 노션 통합이 이 DB에 연결되어 있지 않으면 connected:false 로 돌려준다(첫 화면은 그대로 뜬다)
async function deadlineSummary(token, caseTitles) {
  const today = kstDate();
  try {
    const pages = await queryAll(token, DEADLINE_DB, {
      and: [
        { property: '기한일', date: { on_or_before: kstDate(DEADLINE_DAYS) } },
        { or: [{ property: '처리상태', select: { equals: '대기' } }, { property: '처리상태', select: { is_empty: true } }] },
      ],
    });
    const items = pages
      .map((p) => {
        const due = date(p, '기한일').slice(0, 10);
        const caseId = rel(p, '사건')[0];
        return {
          url: p.url,
          title: title(p, '기한명') || '(기한명 없음)',
          caseTitle: (caseId && caseTitles.get(caseId.replace(/-/g, ''))) || '',
          due,
          dday: due ? daysUntil(due, today) : null,
        };
      })
      .filter((d) => d.due)
      .sort((a, b) => a.dday - b.dday);
    return { connected: true, days: DEADLINE_DAYS, count: items.length, overdue: items.filter((d) => d.dday < 0).length, items: items.slice(0, 8) };
  } catch (e) {
    if (e.status === 404 || e.status === 403) return { connected: false, reason: '노션 통합(n8n연결)이 기한DB에 연결되어 있지 않습니다' };
    return { connected: true, error: String(e.message || e) };
  }
}

// 회계 — 회계DB 문서 + 사건부DB(진행·종결)로 4개 목록. 입금 확인·발행·정산 확정은 직원이 노션에서 한다.
const settleOpen = (d) => d.settle !== '정산완료';
const billDoc = (d) => d.docType === '견적서' || d.docType === '공과금내역서';
async function accountQueues(token, casePagesActive) {
  const [docs, closed] = await Promise.all([
    queryAll(token, ACCOUNT_DB, undefined),
    queryAll(token, CASE_DB, { property: '상태', select: { equals: '종결' } }),
  ]);
  const caseInfo = new Map();
  for (const p of [...casePagesActive, ...closed]) caseInfo.set(p.id.replace(/-/g, ''), { title: title(p, '사건번호-고객명-사건명'), state: sel(p, '상태'), url: p.url });
  const drows = docs.map((p) => {
    const cid = (rel(p, '관련사건')[0] || '').replace(/-/g, '');
    const c = caseInfo.get(cid);
    const d = {
      url: p.url,
      title: title(p, '문서명') || '(문서명 없음)',
      docType: sel(p, '문서유형'),
      settle: sel(p, '정산상태'),
      issue: sel(p, '발행상태'),
      caseId: cid,
      caseState: c ? c.state : '',
      idleDays: daysSince(p.last_edited_time),
    };
    d.tags = [d.docType || '유형 미지정', c ? c.title : '사건 미연결'].filter(Boolean);
    d.status = [d.settle || '정산상태 없음', d.issue ? '발행 ' + d.issue : ''].filter(Boolean).join(' · ');
    return d;
  });
  const quoted = new Set(drows.filter((d) => d.docType === '견적서' && d.caseId).map((d) => d.caseId));
  const crows = casePagesActive.map(caseRow).filter(active).filter((r) => !quoted.has(r.id));
  const pick = (rows) => rows.sort((a, b) => (b.idleDays ?? 0) - (a.idleDays ?? 0)).map(({ url, title: t, tags, status, idleDays }) => ({ url, title: t, tags, status, idleDays }));
  const defs = [
    { id: 'quote-wait', label: '견적 대기', todo: '통합계산기로 견적 → 회계DB에 문서유형=견적서로 등록(관련사건 연결)', items: pick(crows) },
    { id: 'deposit-wait', label: '입금 확인 대기', todo: '통장 확인 후 입금액·입금확인자 입력(자동 판정 없음)', items: pick(drows.filter((d) => billDoc(d) && settleOpen(d) && d.caseState !== '종결')) },
    { id: 'issue-wait', label: '발행 대기', todo: '영수증·세금계산서 발행 버튼은 직원이 — 실패는 발행오류 확인', items: pick(drows.filter((d) => d.issue === '발행대기' || d.issue === '발행실패')) },
    { id: 'settle-wait', label: '정산 대기', todo: '종결 사건 — 입금·실비 대조 후 정산상태=정산완료', items: pick(drows.filter((d) => d.caseState === '종결' && settleOpen(d))) },
  ];
  return { total: drows.length, queues: defs.map((q) => ({ id: q.id, label: q.label, todo: q.todo, count: q.items.length, items: q.items })) };
}

const intakePages = (token) => queryAll(token, CONSULT_DB, { property: '상태', select: { equals: '상담중' } });
const casePages = (token) => queryAll(token, CASE_DB, {
  and: ['상담', '종결', '미수임종료'].map((v) => ({ property: '상태', select: { does_not_equal: v } })),
});

function buildQueues(defs, rows) {
  return defs.map((q) => {
    const items = rows
      .filter(q.test)
      .sort((a, b) => (b.idleDays ?? 0) - (a.idleDays ?? 0))
      .map(({ url, title: t, tags, status, idleDays }) => ({ url, title: t, tags, status, idleDays }));
    return { id: q.id, label: q.label, todo: q.todo, count: items.length, items };
  });
}

// 단계별 「할 일」 건수 — 같은 건이 두 목록에 걸쳐도 한 번만 센다
const todoCount = (defs, rows) => rows.filter((r) => defs.some((q) => !NOT_TODO.has(q.id) && q.test(r))).length;

export async function GET(request) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return json({ error: 'NOTION_TOKEN 미설정 — Vercel 환경변수에 노션 통합 토큰을 넣어 주세요.' }, 503);

  const stage = new URL(request.url).searchParams.get('stage') || 'intake';
  if (!['intake', 'generate', 'submit', 'account', 'overview', 'summary'].includes(stage)) return json({ error: `아직 만들지 않은 업무입니다: ${stage}` }, 400);

  try {
    const generatedAt = new Date().toISOString();
    if (stage === 'summary') {
      // 첫 화면용 — 건수만 돌려준다(제목·링크 없음)
      const [ip, cp] = await Promise.all([intakePages(token), casePages(token)]);
      const irows = ip.map(intakeRow);
      const crows = cp.map(caseRow);
      const stages = [
        { id: 'intake', label: '1 접수', page: 'queue-intake', todo: todoCount(INTAKE_QUEUES, irows), total: irows.length, totalLabel: '진행 중 상담' },
        { id: 'generate', label: '2 생성', page: 'queue-generate', todo: todoCount(GENERATE_QUEUES, crows), total: crows.filter(active).length, totalLabel: '수임·진행중 사건' },
        { id: 'submit', label: '3 제출', page: 'queue-submit', todo: todoCount(SUBMIT_QUEUES, crows), total: crows.filter((r) => active(r) || r.state === '제출완료').length, totalLabel: '진행 사건' },
      ];
      let acc;
      try { acc = await accountQueues(token, cp); } catch (e) { acc = { error: String(e.message || e) }; }
      if (acc.queues) {
        const ids = new Set(acc.queues.flatMap((q) => q.items.map((i) => i.url)));
        stages.push({ id: 'account', label: '회계', page: 'queue-account', todo: ids.size, total: acc.total, totalLabel: '회계 문서' });
      }
      const caseTitles = new Map(cp.map((p) => [p.id.replace(/-/g, ''), title(p, '사건번호-고객명-사건명')]));
      const deadlines = await deadlineSummary(token, caseTitles);
      const byCat = {};
      for (const r of crows) byCat[r.category || '미분류'] = (byCat[r.category || '미분류'] || 0) + 1;
      return json({
        stage, generatedAt,
        todayTodo: stages.reduce((n, s) => n + s.todo, 0) + (deadlines.count || 0),
        consultations: irows.length,
        cases: crows.length,
        byCategory: Object.entries(byCat).sort((a, b) => b[1] - a[1]).map(([label, count]) => ({ label, count })),
        stages,
        deadlines,
      });
    }
    if (stage === 'intake') {
      const rows = (await intakePages(token)).map(intakeRow);
      return json({ stage, generatedAt, total: rows.length, queues: buildQueues(INTAKE_QUEUES, rows) });
    }
    if (stage === 'account') {
      const acc = await accountQueues(token, await casePages(token));
      return json({ stage, generatedAt, total: acc.total, queues: acc.queues });
    }
    const rows = (await casePages(token)).map(caseRow);
    if (stage === 'overview') {
      // 진행 사건 전체 — 상태별로 묶어 보여준다
      const defs = ['수임', '진행중', '제출완료'].map((st) => ({ id: 'state-' + st, label: st, todo: '카테고리·담당별 진행 확인', test: (r) => r.state === st }));
      return json({ stage, generatedAt, total: rows.length, queues: buildQueues(defs, rows) });
    }
    const defs = stage === 'generate' ? GENERATE_QUEUES : SUBMIT_QUEUES;
    return json({ stage, generatedAt, total: rows.length, queues: buildQueues(defs, rows) });
  } catch (e) {
    return json({ error: String(e.message || e) }, 502);
  }
}
