/**
 * ecfs_soga.js — 소가(소송목적의 값) 자동 계산
 * -----------------------------------------------------------------------
 * ecfs-litigation-value-calculate 스킬의 법적 로직을 자동화용 순수 함수로 이식.
 *
 * 절대 원칙(스킬과 동일 — 오류 시 인지 보정명령·관할 이송 위험):
 *  1. 목적물의 실제 가액(개별공시지가·건물 시가표준액)은 **절대 추측하지 않는다.** 없으면
 *     법무사가 제공(공시지가확인원·위택스 시가표준액 조회)해야 하며, 없으면 needsConfirmation.
 *  2. 부대청구(이자·지연손해금·위약금·비용)는 소가에 넣지 않는다(민소 §27②). 무엇을 제외했는지 명시.
 *  3. 세부 청구유형별 비율을 임의로 단정하지 않는다. 잘 확립된 유형만 자동 적용하고, 불확실하면
 *     needsConfirmation + 전자소송 [소가산정안내](소송비용계산) 교차확인 권고.
 *  4. 가압류·가처분 인지액은 원칙적으로 정액 1만원(민사소송 등 인지법 §9②). 소가 필드엔 피보전채권액.
 *  5. 최종 확정·[소가산정안내] 교차확인 책임은 법무사에게 있다(조문·예규 개정 가능).
 *
 * 계산식(부동산): 목적물가액 = (개별공시지가총액 또는 건물 시가표준액) × 50/100.
 *                소가 = 목적물가액 × (청구유형별 비율).
 *  - 토지 개별공시지가총액 = ㎡당 개별공시지가 × 면적(㎡)  ← 법무사가 총액으로 제공하거나 아래 필드로 제공.
 *
 * ⚠️ 건물 시가표준액 자체의 산정(건물신축가격기준액×구조/용도/위치지수×잔가율×면적)은 매년 고시되는
 *    지방세 기준이라 이 모듈에서 계산하지 않는다 — 법무사가 위택스 등에서 조회한 값을 입력한다.
 * -----------------------------------------------------------------------
 */

const norm = (s) => String(s || '').replace(/\s+/g, '');
const won = (n) => Math.floor(Number(n) || 0);

// 청구유형별 목적물가액 대비 비율(인지규칙, 잘 확립된 것만). 담보물권은 별도(피담보채권액).
const RATIO_RULES = [
  { ratio: 1, label: '소유권(전부)', keywords: ['소유권이전등기', '소유권보존', '소유권확인', '소유권말소', '진정명의회복'] },
  { ratio: 1 / 2, label: '인도·명도·방해배제', keywords: ['건물인도', '건물명도', '토지인도', '부동산인도', '유체동산인도', '방해배제', '명도'] },
  { ratio: 1 / 2, label: '지상권·전세권·임차권', keywords: ['지상권', '전세권', '임차권'] },
  { ratio: 1 / 3, label: '점유권', keywords: ['점유권', '점유회수'] },
];
const 담보물권_RE = /근저당권|저당권|담보물권|질권/;
const 금전_RE = /대여금|매매대금|물품대금|용역대금|공사대금|양수금|구상금|약정금|임료|부당이득|정산금|분담금|손해배상|보증금|채권/;

/**
 * @param {object} input
 *  @param {'본안'|'가압류'|'가처분'} [input.사건종류='본안']
 *  @param {string} [input.청구유형]     예: '대여금','건물인도','소유권이전등기','근저당권말소'
 *  @param {number} [input.원금]         금전청구 원금(부대청구 제외)
 *  @param {number[]} [input.원금들]     병합 금전청구 원금들
 *  @param {string} [input.부대청구]     참고: 제외되는 이자·지연손해금 등(표시용)
 *  @param {'토지'|'건물'} [input.목적물종류]
 *  @param {number} [input.목적물가액]   개별공시지가총액(토지) 또는 시가표준액(건물) — 법무사 제공
 *  @param {number} [input.개별공시지가] 토지: ㎡당 개별공시지가(면적과 함께 주면 총액 자동계산)
 *  @param {number} [input.면적]        토지 면적
 *  @param {number} [input.피담보채권액]  담보물권 청구 시
 *  @param {number} [input.피보전채권액]  보전처분 시(소가 필드용)
 * @returns {{matched:boolean, 소가?:number, 인지액?:number, 근거?, 제외?, needsConfirmation?, reason?, 교차확인권고?}}
 */
function calculateSoga(input = {}) {
  const 종류 = input.사건종류 || '본안';
  const 청구 = norm(input.청구유형 || '');

  // A. 보전처분: 인지 정액 1만원, 소가 필드엔 피보전채권액(원금).
  if (종류 === '가압류' || 종류 === '가처분') {
    const base = input.피보전채권액 != null ? won(input.피보전채권액) : (input.원금 != null ? won(input.원금) : null);
    if (base == null) {
      return { matched: false, needsConfirmation: true, reason: '보전처분: 소가 필드에 넣을 피보전채권액(원금)이 필요 — 법무사 확인', 인지액: 10000 };
    }
    return {
      matched: true, 소가: base, 인지액: 10000,
      근거: '민사소송 등 인지법 §9② — 가압류·가처분 인지 정액 10,000원(임시지위 가처분은 예외). 소가 필드는 피보전채권액(원금).',
      note: '임시의 지위를 정하기 위한 가처분이면 본안 인지액의 1/2(상한 50만원) — 해당 시 법무사 확인.',
    };
  }

  // B. 금전청구: 원금만 합산, 부대청구 제외.
  const 원금목록 = [].concat(Array.isArray(input.원금들) ? input.원금들 : [], input.원금 != null ? [input.원금] : [])
    .map(won).filter((v) => v > 0);
  const 금전청구 = 원금목록.length > 0 || (금전_RE.test(청구) && input.목적물가액 == null && input.개별공시지가 == null);
  if (금전청구) {
    if (원금목록.length === 0) {
      return { matched: false, needsConfirmation: true, reason: '금전청구로 보이나 원금이 없음 — 원금(부대청구 제외)을 제공하세요', source: '민소 §27' };
    }
    const 소가 = 원금목록.reduce((a, b) => a + b, 0);
    return {
      matched: true, 소가,
      근거: `민사소송법 §26·§27① — 원금${원금목록.length > 1 ? '들 합산' : ''}. §27② 부대청구(이자·지연손해금·위약금·비용) 불산입.`,
      제외: input.부대청구 ? [String(input.부대청구)] : [],
    };
  }

  // C. 부동산 등 물건에 관한 소송.
  // C-1. 담보물권(근저당권 등): 소가 = 피담보채권액(목적물가액 한도).
  if (담보물권_RE.test(청구)) {
    if (input.피담보채권액 == null) {
      return { matched: false, needsConfirmation: true, reason: '담보물권(근저당권 등) 청구: 소가는 피담보채권액 기준 — 피담보채권액을 제공하세요', 교차확인권고: true };
    }
    let 소가 = won(input.피담보채권액);
    const 목적물가액 = resolveObjectValue(input);
    if (목적물가액 != null && 목적물가액 < 소가) 소가 = 목적물가액; // 목적물가액 한도
    return { matched: true, 소가, 근거: '담보물권 관련 청구 — 피담보채권액 기준(목적물가액 한도). 세부는 [소가산정안내] 교차확인 권고.', 교차확인권고: true };
  }

  // C-2. 소유권/인도/용익물권 등: 목적물가액 × 비율.
  const rule = RATIO_RULES.find((r) => r.keywords.some((k) => 청구.includes(norm(k))));
  const 목적물가액 = resolveObjectValue(input);
  if (rule) {
    if (목적물가액 == null) {
      return {
        matched: false, needsConfirmation: true,
        reason: `물건에 관한 소송(${rule.label}): 목적물 가액이 필요 — 토지는 개별공시지가(㎡당×면적) 또는 총액, 건물은 시가표준액을 제공하세요(추측 금지)`,
        교차확인권고: true,
      };
    }
    const 소가 = won(목적물가액 * rule.ratio);
    return {
      matched: true, 소가,
      근거: `목적물가액(=공시지가/시가표준액×50%) ${목적물가액.toLocaleString()}원 × ${rule.label} 비율 ${rule.ratio === 0.5 ? '1/2' : rule.ratio === 1 / 3 ? '1/3' : rule.ratio}. 세부 비율은 [소가산정안내] 교차확인 권고.`,
      교차확인권고: true,
    };
  }

  // D. 그 밖 — 자동 확정하지 않고 법무사 확인 + 교차확인 권고.
  return {
    matched: false, needsConfirmation: true,
    reason: '청구유형에 대한 소가 산정 규칙을 자동 확정할 수 없음 — 법무사가 litigationValue를 지정하거나 전자소송 [소가산정안내]로 계산하세요',
    교차확인권고: true,
  };
}

// 목적물가액(=공시지가/시가표준액 × 50%) 해석. 법무사 제공값이 없으면 null(추측하지 않음).
function resolveObjectValue(input) {
  let base = null;
  if (input.목적물가액 != null) base = won(input.목적물가액);
  else if (input.개별공시지가 != null && input.면적 != null) base = won(Number(input.개별공시지가) * Number(input.면적));
  if (base == null) return null;
  return won(base * 0.5); // 인지규칙/예규: 공시지가·시가표준액의 50%
}

module.exports = {
  RATIO_RULES,
  resolveObjectValue,
  calculateSoga,
};
