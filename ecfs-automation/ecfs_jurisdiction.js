/**
 * ecfs_jurisdiction.js — 토지관할(제출법원) 자동 판단
 * -----------------------------------------------------------------------
 * ecfs-jurisdiction-determine 스킬의 법적 로직을 자동화(헤드리스)용 순수 함수로 이식.
 * 원칙(스킬과 동일):
 *  - 법령 규칙으로 관할 "후보"를 도출한다(조문 근거 포함). 사실관계는 추측하지 않는다.
 *  - 후보 법원이 1곳이면 자동 확정, 2곳 이상(경합관할)이면 절대 임의 선택하지 않고
 *    후보를 담아 법무사가 고르게 한다(needsConfirmation).
 *  - 사물관할(단독/합의부·소가)은 대상 아님(청구구분·소가에서 처리). 여기선 토지관할만.
 *
 * 근거 요약(2026 기준, 실제 제출 전 최신 조문 확인은 법무사 책임):
 *  - 본안: 피고 보통재판적(민소 §2·§3·§5), 의무이행지=채권자 주소(재산권·금전, §8),
 *          부동산 소재지(§20), 합의관할(§29, 전속적이면 단일 확정).
 *  - 보전처분(가압류·가처분): 목적물 소재지 또는 본안 관할법원(민집 §278·§303) — 전속관할(합의 배제).
 *
 * ⚠️ 주소→법원 매핑(COURT_JURISDICTION)은 LOAS 주 관할구역인 경남(창원지방법원) 위주의
 *    출발점이다. 다른 지역 주소는 매핑에 없으면 미해결로 반환하고 ECFS "관할법원찾기"로
 *    법무사가 확인하도록 한다. 관할구역 표는 개정될 수 있으니 법무사가 검증·확장할 것.
 *    (창원지법 관할구역 출처: 창원지방법원 공식 사이트, 2026 확인)
 * -----------------------------------------------------------------------
 */

// 시/군/구 → 법원명(ECFS 제출법원 표기). 창원시는 구 단위로 본원/마산지원이 갈린다.
const COURT_JURISDICTION = [
  // 창원지방법원 본원
  { court: '창원지방법원', regions: ['김해시', '창원시 의창구', '창원시 성산구', '창원시 진해구', '의창구', '성산구', '진해구'] },
  // 마산지원
  { court: '창원지방법원 마산지원', regions: ['창원시 마산합포구', '창원시 마산회원구', '마산합포구', '마산회원구', '의령군', '함안군'] },
  // 진주지원
  { court: '창원지방법원 진주지원', regions: ['진주시', '사천시', '하동군', '남해군', '산청군'] },
  // 통영지원
  { court: '창원지방법원 통영지원', regions: ['통영시', '거제시', '고성군'] },
  // 밀양지원
  { court: '창원지방법원 밀양지원', regions: ['밀양시', '창녕군'] },
  // 거창지원
  { court: '창원지방법원 거창지원', regions: ['거창군', '함양군', '합천군'] },
];

/** 주소 문자열에서 관할 법원을 해석. 못 찾으면 null(경남 외 지역 등 → 법무사가 관할법원찾기로 확인). */
function resolveCourtFromAddress(address) {
  if (!address) return null;
  const a = String(address);
  // 더 구체적인(구 단위) 매칭을 먼저 시도하도록, regions를 길이 내림차순으로 검사.
  const flat = [];
  for (const row of COURT_JURISDICTION) for (const r of row.regions) flat.push({ region: r, court: row.court });
  flat.sort((x, y) => y.region.length - x.region.length);
  for (const { region, court } of flat) {
    if (a.includes(region)) return court;
  }
  return null;
}

const 금전재산권_RE = /금전|대여|매매대금|물품대금|용역대금|공사대금|보증금|손해배상|양수금|구상|약정금|재산권/;
const 부동산_RE = /부동산|건물|토지|소유권|인도|명도|이전등기|말소등기|근저당|공유물|지상권|전세권|가등기/;

/**
 * 토지관할(제출법원) 후보를 도출한다.
 * @param {object} facts
 *  @param {'본안'|'가압류'|'가처분'} [facts.사건종류='본안']
 *  @param {string} [facts.피고주소]      피고(채무자·피신청인) 주소/주된 사무소
 *  @param {string} [facts.원고주소]      원고(채권자·신청인) 주소
 *  @param {string} [facts.목적물소재지]  부동산 주소 등(보전처분·부동산 소송 시)
 *  @param {string} [facts.청구유형]      예: '대여금','건물명도','손해배상'
 *  @param {{법원:string, 전속?:boolean}} [facts.관할합의]  계약상 관할합의
 *  @param {string} [facts.제출법원]      법무사가 이미 지정한 법원(있으면 그대로 사용)
 * @returns {{matched:boolean, court?, needsConfirmation?:boolean, candidates:Array, note?, unresolved?:Array}}
 */
function determineJurisdiction(facts = {}) {
  const explicit = (facts.제출법원 || '').trim();
  if (explicit) {
    return { matched: true, court: explicit, candidates: [{ court: explicit, 기준: '법무사 지정', 근거: '-' }], source: '법무사 지정' };
  }

  const 종류 = facts.사건종류 || '본안';
  const 청구 = String(facts.청구유형 || '');
  const 금전 = 금전재산권_RE.test(청구) || facts.재산권 === true;
  const 부동산 = 부동산_RE.test(청구) || facts.부동산 === true;

  const raw = []; // { 기준, 근거, address }
  if (종류 === '가압류' || 종류 === '가처분') {
    // 보전처분: 전속관할(합의 배제). 목적물 소재지 + 본안 관할.
    const 보전조문 = 종류 === '가압류' ? '민사집행법 제278조' : '민사집행법 제303조';
    if (facts.목적물소재지) raw.push({ 기준: '목적물 소재지', 근거: 보전조문, address: facts.목적물소재지 });
    if (facts.피고주소) raw.push({ 기준: '본안 관할(피고 보통재판적)', 근거: `${보전조문} + 민사소송법 제2·3·5조`, address: facts.피고주소 });
    if (금전 && facts.원고주소) raw.push({ 기준: '본안 관할(의무이행지=채권자 주소)', 근거: '민사소송법 제8조', address: facts.원고주소 });
  } else {
    // 본안소송
    if (facts.관할합의 && facts.관할합의.법원 && facts.관할합의.전속) {
      const court = facts.관할합의.법원;
      return { matched: true, court, candidates: [{ court, 기준: '전속적 합의관할', 근거: '민사소송법 제29조' }], note: '전속적 합의관할 — 다른 후보 배제', source: '합의관할' };
    }
    if (facts.피고주소) raw.push({ 기준: '피고 보통재판적', 근거: '민사소송법 제2·3·5조', address: facts.피고주소 });
    if (금전 && facts.원고주소) raw.push({ 기준: '의무이행지(채권자 주소)', 근거: '민사소송법 제8조', address: facts.원고주소 });
    if (부동산 && facts.목적물소재지) raw.push({ 기준: '부동산 소재지', 근거: '민사소송법 제20조', address: facts.목적물소재지 });
    if (facts.관할합의 && facts.관할합의.법원 && !facts.관할합의.전속) raw.push({ 기준: '부가적 합의관할', 근거: '민사소송법 제29조', court: facts.관할합의.법원 });
  }

  if (raw.length === 0) {
    return { matched: false, needsConfirmation: true, candidates: [], reason: '관할 판단에 필요한 사실관계(피고/원고 주소·목적물 소재지·사건종류)가 부족 — 법무사 확인 필요' };
  }

  // 후보에 법원 해석 부여
  const candidates = raw.map((c) => {
    const court = c.court || resolveCourtFromAddress(c.address);
    return { ...c, court: court || null, resolved: !!court };
  });

  const resolved = candidates.filter((c) => c.resolved);
  const unresolved = candidates.filter((c) => !c.resolved);
  const distinctCourts = [...new Set(resolved.map((c) => c.court))];

  // 단일 확정: 해석된 법원이 정확히 1곳이고, 미해결 후보가 없을 때만 자동.
  if (distinctCourts.length === 1 && unresolved.length === 0) {
    return { matched: true, court: distinctCourts[0], candidates, note: `단일 관할(${candidates.map((c) => c.기준).join(', ')})`, source: '법령 규칙' };
  }

  // 그 외(복수 관할 경합 또는 주소 미해결) → 법무사 선택.
  return {
    matched: false,
    needsConfirmation: true,
    candidates,
    unresolved: unresolved.map((c) => ({ 기준: c.기준, 근거: c.근거, address: c.address })),
    reason: distinctCourts.length > 1
      ? '관할이 경합(복수)합니다 — 법무사가 제출법원을 선택하세요'
      : '일부 주소의 관할법원을 자동 해석하지 못했습니다 — ECFS 관할법원찾기로 확인 후 선택하세요',
    source: '법령 규칙',
  };
}

module.exports = {
  COURT_JURISDICTION,
  resolveCourtFromAddress,
  determineJurisdiction,
};
