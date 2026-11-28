// 직원포털 「처리할 일 목록」 — 노션 읽기 전용 (통합 문서 5부 §3·§6, 2026-11-28)
// 주소: /admin/api/queue?stage=intake  (vercel.json rewrite → /api/admin/queue, middleware 기본 인증 안쪽)
// 비밀값: Vercel 환경변수 NOTION_TOKEN (화면 코드에 넣지 않는다)
// 반환: 사건(상담)번호·고객명이 든 제목, 상태값, 노션 링크만. 연락처·주민번호 등은 읽지도 돌려주지도 않는다.

const NOTION = 'https://api.notion.com/v1';
const CONSULT_DB = '4020ce34-50b8-810b-ba4d-f2a47407a9fa'; // 상담DB
const CASE_DB = '2f70ce34-50b8-8090-a77b-ef2ecdb1d20d'; // 사건부DB

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const prop = (p, k) => (p.properties || {})[k] || {};
const sel = (p, k) => (prop(p, k).select || {}).name || '';
const num = (p, k) => (typeof prop(p, k).number === 'number' ? prop(p, k).number : 0);
const date = (p, k) => (prop(p, k).date || {}).start || '';
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

// 2 관리 · 3 생성 — 사건부DB 상태가 수임·진행중·제출완료인 건 (상담·종결·미수임종료 제외)
// 추출상태: 대기 / 추출중 / 추출완료(⚠️미검증) / 검증완료 / 오류,  생성상태: 미생성 / 초안생성 / 검토중 / 03확정
const active = (r) => r.state === '수임' || r.state === '진행중';
const MANAGE_QUEUES = [
  { id: 'extract-error', label: '추출 오류', todo: '작업로그 확인 → 01 서류 정리 후 「추출시작」 다시', test: (r) => active(r) && r.extract === '오류' },
  { id: 'extract-wait', label: '추출 대기', todo: '01 서류를 하위폴더에 정리한 뒤 「추출시작」', test: (r) => active(r) && r.extract === '대기' },
  { id: 'extract-verify', label: '추출값 검증 대기', todo: '추출값DB에서 값 대조 → ✅', test: (r) => active(r) && r.extract.startsWith('추출완료') },
  { id: 'no-owner', label: '담당 직원 미지정', todo: '사건부DB 담당직원 지정', test: (r) => active(r) && !r.owner },
  { id: 'in-progress', label: '진행 사건 전체', todo: '카테고리·담당별 진행 확인', test: (r) => active(r) },
];
const GENERATE_QUEUES = [
  { id: 'draft-wait', label: '초안 생성 대기', todo: '사무실 PC에서 Fill engine 실행 → 02 초안', test: (r) => active(r) && r.extract === '검증완료' && (!r.generate || r.generate === '미생성') },
  { id: 'review', label: '검토 중', todo: '02 초안 검토 → 03 제출확정자료로 복사 후 「03확정」', test: (r) => active(r) && (r.generate === '초안생성' || r.generate === '검토중') },
  { id: 'confirmed', label: '03 확정 — 제출 준비', todo: '4 제출 메뉴에서 작성 도구 실행(최종 제출은 직원)', test: (r) => active(r) && r.generate === '03확정' },
];

async function queryAll(token, dbId, filter) {
  const out = [];
  let cursor;
  for (let i = 0; i < 5; i++) {
    const res = await fetch(`${NOTION}/databases/${dbId}/query`, {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'notion-version': '2022-06-28', 'content-type': 'application/json' },
      body: JSON.stringify({ page_size: 100, filter, ...(cursor ? { start_cursor: cursor } : {}) }),
    });
    if (!res.ok) throw new Error(`노션 조회 실패 (${res.status})`);
    const j = await res.json();
    out.push(...(j.results || []));
    if (!j.has_more) break;
    cursor = j.next_cursor;
  }
  return out;
}

export async function GET(request) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return json({ error: 'NOTION_TOKEN 미설정 — Vercel 환경변수에 노션 통합 토큰을 넣어 주세요.' }, 503);

  const stage = new URL(request.url).searchParams.get('stage') || 'intake';
  if (!['intake', 'manage', 'generate'].includes(stage)) return json({ error: `아직 만들지 않은 업무입니다: ${stage}` }, 400);

  try {
    let rows, defs;
    if (stage === 'intake') {
      const pages = await queryAll(token, CONSULT_DB, { property: '상태', select: { equals: '상담중' } });
      rows = pages.map((p) => {
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
      });
      defs = INTAKE_QUEUES;
    } else {
      const pages = await queryAll(token, CASE_DB, {
        and: ['상담', '종결', '미수임종료'].map((v) => ({ property: '상태', select: { does_not_equal: v } })),
      });
      rows = pages.map((p) => {
        const r = {
          url: p.url,
          title: title(p, '사건번호-고객명-사건명'),
          state: sel(p, '상태'),
          extract: sel(p, '추출상태'),
          generate: sel(p, '생성상태'),
          owner: who(p, '담당직원'),
          idleDays: daysSince(p.last_edited_time),
        };
        r.tags = [sel(p, '신규사건카테고리') || sel(p, '상담유형'), r.owner ? `담당 ${r.owner}` : '담당 미지정'].filter(Boolean);
        r.status = [r.state || '-', '추출 ' + (r.extract || '-'), '생성 ' + (r.generate || '-')].join(' · ');
        return r;
      });
      defs = stage === 'manage' ? MANAGE_QUEUES : GENERATE_QUEUES;
    }
    const queues = defs.map((q) => {
      const items = rows
        .filter(q.test)
        .sort((a, b) => (b.idleDays ?? 0) - (a.idleDays ?? 0))
        .map(({ url, title: t, tags, status, idleDays }) => ({ url, title: t, tags, status, idleDays }));
      return { id: q.id, label: q.label, todo: q.todo, count: items.length, items };
    });
    return json({ stage, generatedAt: new Date().toISOString(), total: rows.length, queues });
  } catch (e) {
    return json({ error: String(e.message || e) }, 502);
  }
}
