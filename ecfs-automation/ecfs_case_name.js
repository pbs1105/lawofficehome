/**
 * ecfs_case_name.js — 사건명 자동 결정(규칙 매핑 + 애매하면 법무사 확인)
 * -----------------------------------------------------------------------
 * 사건명은 청구의 성질에 따른 "법적 판단"이다. 관할(ecfs_jurisdiction)·소가와 동일하게
 * 명확한 유형은 규칙으로 자동 도출하고, 애매하거나 목록에 없으면 절대 임의로 확정하지
 * 않고 후보를 담아 법무사 확인을 요구한다(needsConfirmation).
 *
 * 근거:
 *  - 사건부호(가합·가단·가소 등)는 「사건별 부호문자의 부여에 관한 예규」(재판예규)로
 *    법원/소가에 따라 ECFS가 자동 부여 → 이 모듈의 대상이 아니다.
 *  - 사건명(대여금·건물인도 등)은 표준 사건명 목록에서 선택한다. 아래 표준 목록
 *    STANDARD_CASE_NAMES는 ecfs_case_basic_info.js의 KNOWN_CASE_NAMES(ECFS 드롭다운
 *    실측 목록)를 그대로 승계한 것으로, 이 목록에 있으면 드롭다운으로, 없으면 '기타'+
 *    직접입력으로 처리된다.
 *
 * ⚠️ 이 매핑표는 LOAS가 자주 다루는 유형 위주의 "출발점"이다. 실제 운영 전 법무사가
 *    「민사사건의 사건별 부호문자 및 사건명 등에 관한 예규」 목록과 대조해 확장·검증할 것.
 * -----------------------------------------------------------------------
 */

// ECFS 사건명 드롭다운 실측 목록(= ecfs_case_basic_info.KNOWN_CASE_NAMES와 동일하게 유지).
const STANDARD_CASE_NAMES = [
  '가등기말소', '건물인도', '공유물분할', '근저당권말소', '소유권이전등기', '소유권말소등기',
  '소유권확인', '손해배상(건)', '손해배상(국)', '손해배상(기)', '손해배상(산)', '손해배상(의)',
  '손해배상(자)', '대여금', '매매대금', '채무부존재확인', '청구이의', '해고무효확인', '회사에 관한 소송',
];

// 규칙 매핑: 청구 유형/키워드 → 표준 사건명.
// keywords 중 하나라도 청구유형·청구요지 텍스트에 포함되면 매칭.
// dropdown:true = STANDARD_CASE_NAMES에 있어 ECFS 드롭다운으로 선택됨(가장 안전).
// dropdown:false = 직접입력('기타') 사건명(표준 표기이지만 드롭다운에 없음).
const CASE_NAME_RULES = [
  { 사건명: '대여금', dropdown: true, keywords: ['대여금', '빌려준 돈', '대여'] },
  { 사건명: '매매대금', dropdown: true, keywords: ['매매대금', '매매 대금'] },
  { 사건명: '물품대금', dropdown: false, keywords: ['물품대금', '물품 대금'] },
  { 사건명: '용역대금', dropdown: false, keywords: ['용역대금', '용역비'] },
  { 사건명: '공사대금', dropdown: false, keywords: ['공사대금', '공사비'] },
  { 사건명: '양수금', dropdown: false, keywords: ['양수금', '채권양수'] },
  { 사건명: '구상금', dropdown: false, keywords: ['구상금', '구상'] },
  { 사건명: '건물인도', dropdown: true, keywords: ['건물인도', '건물명도', '건물 인도', '건물 명도', '명도'] },
  { 사건명: '토지인도', dropdown: false, keywords: ['토지인도', '토지명도', '토지 인도'] },
  { 사건명: '부동산인도', dropdown: false, keywords: ['부동산인도', '부동산 인도'] },
  { 사건명: '공유물분할', dropdown: true, keywords: ['공유물분할', '공유물 분할'] },
  { 사건명: '소유권이전등기', dropdown: true, keywords: ['소유권이전등기', '소유권 이전등기', '이전등기 청구'] },
  { 사건명: '소유권말소등기', dropdown: true, keywords: ['소유권말소', '소유권이전등기말소', '이전등기 말소'] },
  { 사건명: '근저당권말소', dropdown: true, keywords: ['근저당권말소', '근저당권설정등기말소', '근저당 말소'] },
  { 사건명: '가등기말소', dropdown: true, keywords: ['가등기말소', '가등기 말소'] },
  { 사건명: '소유권확인', dropdown: true, keywords: ['소유권확인', '소유권 확인'] },
  { 사건명: '채무부존재확인', dropdown: true, keywords: ['채무부존재', '채무 부존재'] },
  { 사건명: '청구이의', dropdown: true, keywords: ['청구이의'] },
  { 사건명: '제3자이의', dropdown: false, keywords: ['제3자이의', '제삼자이의'] },
  { 사건명: '배당이의', dropdown: false, keywords: ['배당이의'] },
  { 사건명: '사해행위취소', dropdown: false, keywords: ['사해행위', '사해행위취소'] },
  { 사건명: '임대차보증금', dropdown: false, keywords: ['임대차보증금', '보증금반환', '전세보증금'] },
  { 사건명: '해고무효확인', dropdown: true, keywords: ['해고무효'] },
];

// 애매성 그룹: 키워드만으로는 하위 유형을 확정할 수 없어 반드시 법무사가 골라야 하는 것들.
const AMBIGUOUS_GROUPS = [
  {
    trigger: ['손해배상'],
    reason: '손해배상은 원인별로 사건명이 다릅니다((기)일반·(자)자동차·(산)산재·(의)의료·(건)건설·(국)국가배상). 원인을 선택하세요.',
    candidates: ['손해배상(기)', '손해배상(자)', '손해배상(산)', '손해배상(의)', '손해배상(건)', '손해배상(국)'],
  },
];

const norm = (s) => String(s || '').replace(/\s+/g, '');

/**
 * 사건명을 결정한다.
 * @param {object} input
 * @param {string} [input.사건명]     법무사가 이미 지정한 사건명(있으면 그대로 사용)
 * @param {string} [input.청구유형]   예: '대여금', '건물명도'
 * @param {string} [input.청구요지]   신청취지/청구취지 텍스트(키워드 탐지에 사용)
 * @returns {{ caseName?, mode, matched, dropdown?, needsConfirmation?, candidates?, reason?, source }}
 *   - matched=true:  caseName 확정. mode: 'explicit'|'dropdown'|'custom'
 *   - needsConfirmation=true: 후보(candidates) 제시, 법무사가 골라 재실행해야 함
 */
function determineCaseName(input = {}) {
  const explicit = (input.사건명 || '').trim();
  const stdResult = (name, src) => {
    const isStd = STANDARD_CASE_NAMES.includes(name);
    return { caseName: name, matched: true, mode: isStd ? 'dropdown' : 'custom', dropdown: isStd, source: src };
  };
  const hay = norm(`${input.청구유형 || ''} ${input.청구요지 || ''}`);

  // ── 규칙 매핑 우선 적용 ── 청구유형/청구요지가 있으면 표준 사건명을 먼저 도출한다.
  if (hay) {
    // 1) 애매성 그룹(예: 손해배상) — 하위유형이 갈리므로 반드시 법무사 확인.
    for (const g of AMBIGUOUS_GROUPS) {
      if (g.trigger.some((t) => hay.includes(norm(t)))) {
        // 명시 사건명이 그 후보 중 하나면 그대로 채택(법무사가 이미 하위유형을 지정한 것).
        if (explicit && g.candidates.includes(explicit)) return stdResult(explicit, '규칙(애매) 후보 중 법무사 지정');
        return { matched: false, needsConfirmation: true, candidates: g.candidates, reason: g.reason, source: '예규 사건명 목록' };
      }
    }
    // 2) 규칙 매핑
    const hits = CASE_NAME_RULES.filter((r) => r.keywords.some((k) => hay.includes(norm(k))));
    if (hits.length === 1) return stdResult(hits[0].사건명, '규칙 매핑(우선 적용)');
    if (hits.length > 1) {
      if (explicit && hits.some((r) => r.사건명 === explicit)) return stdResult(explicit, '규칙 후보 중 법무사 지정');
      return { matched: false, needsConfirmation: true, candidates: hits.map((r) => r.사건명), reason: '여러 사건명 후보가 매칭됨 — 하나를 선택하세요', source: '규칙 매핑' };
    }
    // hits.length === 0 → 아래 명시 사건명 폴백으로.
  }

  // ── 규칙 무매칭(또는 청구유형 없음) 폴백: 명시된 사건명 사용 ──
  if (explicit) return stdResult(explicit, '법무사 지정');

  // ── 아무 근거도 없음 → 확인 요구 ──
  if (!hay) {
    return { matched: false, needsConfirmation: true, candidates: [], reason: '사건명/청구유형/청구요지 중 아무것도 제공되지 않음 — 법무사가 사건명을 지정해야 함' };
  }
  return { matched: false, needsConfirmation: true, candidates: [], reason: '규칙에 매칭되는 표준 사건명이 없음 — 법무사가 사건명을 직접 지정(사건명검색 참고)', source: '규칙 매핑' };
}

module.exports = {
  STANDARD_CASE_NAMES,
  CASE_NAME_RULES,
  AMBIGUOUS_GROUPS,
  determineCaseName,
};
