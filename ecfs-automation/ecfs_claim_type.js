/**
 * ecfs_claim_type.js — 청구구분(재산권상/비재산권상) 자동 결정
 * -----------------------------------------------------------------------
 * ECFS 사건기본정보 "청구구분"은 재산권상청구 / 비재산권상청구 둘 중 하나다.
 * 포털 안내·예규 규칙:
 *  - 재산권상의 청구: 경제적 이익(금전·물건·재산권)을 목적으로 하는 청구.
 *  - 비재산권상의 청구: 신분·지위·단체법률관계 등 재산권 이외의 청구.
 *  - ★ 병합: **비재산권상 청구와 재산권상 청구가 병합된 경우에는 '비재산권상 청구'를 선택**한다
 *    (전자소송 화면 안내문). 즉 하나라도 비재산권상이 섞이면 비재산권상청구.
 *
 * 원칙(사건명·관할과 동일): 규칙으로 도출하되, 분류가 불명확하면 임의 확정하지 않고
 * 후보를 담아 법무사 확인(needsConfirmation). 명시된 claimType이 있으면 그대로 사용한다.
 *
 * ⚠️ 유형 분류표는 LOAS 상용 유형 위주 출발점 — 애매한 청구는 목록에서 제외해 '확인 필요'로
 *    돌린다(오분류보다 안전). 법무사가 예규·판례로 확장·검증할 것.
 *
 * ※ 참고: 비재산권상청구를 선택하면 소가는 ECFS가 의제(자동)하므로 litigationValue는
 *   무시된다(소가 처리는 ecfs_case_basic_info.selectClaimTypeAndValue가 담당).
 * -----------------------------------------------------------------------
 */

const norm = (s) => String(s || '').replace(/\s+/g, '');

// 명백한 비재산권상(신분·지위·단체결의 등) — 하나라도 있으면 병합규칙상 비재산권상청구.
const 비재산권상_유형 = [
  '해고무효확인', '징계무효확인', '지위확인', '근로자지위확인',
  '주주총회결의무효', '주주총회결의취소', '총회결의무효확인', '총회결의취소', '이사회결의무효', '이사회결의부존재',
  '회사설립무효', '합병무효', '이혼', '혼인무효', '혼인취소', '친생자관계존부확인', '인지청구', '파양', '입양무효',
];

// 명백한 재산권상(금전·물건·부동산·재산권) — LOAS 상용.
const 재산권상_유형 = [
  '대여금', '매매대금', '물품대금', '용역대금', '공사대금', '양수금', '구상금', '약정금', '임료', '부당이득', '정산금', '분담금',
  '손해배상', '건물인도', '건물명도', '토지인도', '부동산인도', '유체동산인도',
  '소유권이전등기', '소유권말소등기', '이전등기말소', '근저당권말소', '가등기말소', '전세권말소', '지상권말소',
  '공유물분할', '배당이의', '청구이의', '제3자이의', '사해행위취소', '임대차보증금', '보증금반환', '소유권확인', '채무부존재확인',
];

/**
 * 청구구분을 결정한다.
 * @param {object} input
 *  @param {string} [input.claimType]   법무사가 이미 지정('재산권상청구'|'비재산권상청구') — 있으면 그대로
 *  @param {string} [input.청구유형]    단일 또는 병합 문자열(예: '대여금', '건물명도 및 손해배상')
 *  @param {string[]} [input.청구유형들] 병합 청구를 배열로 줄 때
 * @returns {{matched:boolean, claimType?, needsConfirmation?:boolean, candidates?:string[], reason?, note?, source}}
 */
function determineClaimType(input = {}) {
  // 명시값 우선(정규화)
  const explicit = norm(input.claimType);
  if (explicit) {
    if (/^비재산권상청구$|^비재산권상$/.test(explicit)) return { matched: true, claimType: '비재산권상청구', source: '법무사 지정' };
    if (/^재산권상청구$|^재산권상$/.test(explicit)) return { matched: true, claimType: '재산권상청구', source: '법무사 지정' };
    // 알 수 없는 표기 → 확인
    return { matched: false, needsConfirmation: true, candidates: ['재산권상청구', '비재산권상청구'], reason: `claimType 표기 불명(${input.claimType})`, source: '법무사 지정' };
  }

  const items = [].concat(Array.isArray(input.청구유형들) ? input.청구유형들 : [], input.청구유형 ? [input.청구유형] : [])
    .map(String).filter(Boolean);
  if (items.length === 0) {
    return { matched: false, needsConfirmation: true, candidates: ['재산권상청구', '비재산권상청구'], reason: '청구유형/claimType 미제공 — 법무사 확인', source: '규칙' };
  }

  let has재산 = false, has비재산 = false, unknown = false;
  for (const it of items) {
    const s = norm(it);
    const isB = 비재산권상_유형.some((k) => s.includes(norm(k)));
    const isP = 재산권상_유형.some((k) => s.includes(norm(k)));
    if (isB) has비재산 = true;
    if (isP) has재산 = true;
    if (!isB && !isP) unknown = true;
  }

  // ★ 병합 규칙: 비재산권상이 하나라도 섞이면 비재산권상청구(재산권상과 병합돼도).
  if (has비재산) {
    return { matched: true, claimType: '비재산권상청구', note: has재산 ? '재산권상·비재산권상 병합 → 비재산권상(포털 안내/예규)' : '비재산권상', source: '규칙' };
  }
  // 순수 재산권상(분류 불명 성분 없음)
  if (has재산 && !unknown) {
    return { matched: true, claimType: '재산권상청구', source: '규칙' };
  }
  // 분류 불명 성분 있음(비재산권상일 수 있음) → 확인
  return {
    matched: false, needsConfirmation: true, candidates: ['재산권상청구', '비재산권상청구'],
    reason: unknown ? '분류가 불명확한 청구유형이 포함됨 — 법무사가 청구구분을 확인/지정' : '청구유형 분류 불가 — 법무사 확인',
    source: '규칙',
  };
}

module.exports = {
  재산권상_유형,
  비재산권상_유형,
  determineClaimType,
};
