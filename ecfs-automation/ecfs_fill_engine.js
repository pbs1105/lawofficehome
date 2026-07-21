/**
 * ecfs_fill_engine.js — 사건부DB → runFullFlow payload 자동 매핑
 * -----------------------------------------------------------------------
 * sop.md Phase 3. 실제 Notion 스키마(2026-07-21 조사)를 기준으로 작성했다.
 *
 * 사건부DB(collection://2f70ce34-...) 실측 필드:
 *   신규사건카테고리 (부동산등기/법인등기/상속/민사소송/민사집행/기타)
 *   고객DB(고객명) — relation, 상대방 — relation
 *   전자소송자동화상태 (대기/진행중/완료/실패), 법원사건번호 (text)
 *   → 이 두 필드는 이미 ECFS 자동화를 염두에 두고 만들어져 있었다(이번에
 *     처음 발견). 서버가 실행 상태를 이 필드에 되쓰는 것으로 admin 페이지
 *     쪽에서 자연스럽게 진행상황을 보여줄 수 있다.
 *
 * 고객DB 실측 필드: 고객명(이름/상호), 주민(법인)등록번호, 주소(본점),
 *   휴대폰(담당자), 전화(사무실), 이메일
 * 상대방DB 실측 필드: 상대방명(이름/상호), 구분(개인/법인),
 *   주민(법인)등록번호, 주소, 연락처
 *
 * ⚠️ 이 엔진이 절대 추측하지 않고 반드시 overrides로 받아야 하는 것
 *   (전부 법적 판단이 필요하거나 DB 스키마 자체에 없는 값):
 *   - caseBasicInfo: caseName, claimType, litigationValue, courtName
 *     (관할법원·소가 확정은 Phase 2 설계상 STEP 2.0/2.1 — 법무사 판단 영역)
 *   - claim: purposeText, reasonHtml (청구취지·청구원인 — 법무사가 작성)
 *   - evidence: 소명서류 파일 목록
 *   - 당사자 주소의 구조화된 값(시도/시군구/도로명/본번) — 사건부DB 계열은
 *     주소를 한 줄 텍스트로만 들고 있어 자동 분리를 시도하지 않는다(아래 설명)
 *   - 피고가 법인인 경우 대표자구분·대표자성명 (상대방DB에 해당 필드 없음)
 *
 * ⚠️ 아직 지원하지 않는 것
 *   - 법인 원고 — ecfs_party_input.js가 개인 원고(fillPlaintiffNonMember)만
 *     지원한다. 원고가 법인이면 이 함수가 명시적으로 에러를 던진다.
 *   - 원고·피고가 2명 이상 연결된 사건 — 1명씩만 지원(다수는 overrides.parties로
 *     직접 구성해서 우회 가능).
 *
 * 필요 패키지: 없음 (ecfs_notion_client.js만 사용)
 * -----------------------------------------------------------------------
 */

const { getPageProperties } = require('./ecfs_notion_client');

const CASE_FIELDS = {
  고객관계: '고객DB(고객명)',
  상대방관계: '상대방',
  사건카테고리: '신규사건카테고리',
  법원사건번호: '법원사건번호',
  자동화상태: '전자소송자동화상태',
  담당직원: '담당직원',
};

const CUSTOMER_FIELDS = {
  이름: '고객명(이름/상호)',
  주민번호: '주민(법인)등록번호',
  주소: '주소(본점)',
  휴대폰: '휴대폰(담당자)',
  전화: '전화(사무실)',
  이메일: '이메일',
};

const OPPONENT_FIELDS = {
  이름: '상대방명(이름/상호)',
  구분: '구분', // '개인' | '법인'
  주민법인번호: '주민(법인)등록번호',
  주소: '주소',
  연락처: '연락처',
};

const ECFS_ELIGIBLE_CATEGORY = '민사소송';

// -------------------------------------------------------------------------
// 주민번호 분리 — '900101-1234567' / '9001011234567' 모두 허용
// -------------------------------------------------------------------------
function splitSsn(raw) {
  if (!raw) return null;
  const digits = String(raw).replace(/[^0-9]/g, '');
  if (digits.length !== 13) return null;
  return { ssnFront: digits.slice(0, 6), ssnBack: digits.slice(6) };
}

/**
 * ⚠️ Notion 주소는 구조화(시도/시군구/도로명/본번)돼 있지 않은 한 줄 텍스트다.
 * ecfs_party_input.fillAddress는 팝업에서 시도/시군구 드롭다운 + 도로명/본번/부번
 * 개별 입력을 받는 구조라 이 텍스트를 그대로 넣을 수 없다. 자동 분리(정규식 등)를
 * 시도하지 않는 이유: 도로명 주소 형식이 다양해 잘못 나뉘면 실제 송달 주소가
 * 틀어질 위험이 첨부파일 업로드 실패 같은 단순 오류보다 훨씬 크다.
 * → addressRaw만 실어 보내고, needsManualAddressSplit=true로 표시한다.
 *   호출측(서버/오케스트레이터 실행 전)이 이 플래그를 보고 법무사에게 구조화된
 *   주소(overrides.parties[i].address)를 요청해야 한다.
 */
function markAddressNeedsReview(rawAddress) {
  return { addressRaw: rawAddress || null, needsManualAddressSplit: true };
}

function mapCustomerToPlaintiff(customerProps) {
  const ssn = splitSsn(customerProps[CUSTOMER_FIELDS.주민번호]);
  const party = {
    role: '원고',
    name: customerProps[CUSTOMER_FIELDS.이름] || null,
    contact: {
      mobile: customerProps[CUSTOMER_FIELDS.휴대폰] || undefined,
      phone: customerProps[CUSTOMER_FIELDS.전화] || undefined,
      email: customerProps[CUSTOMER_FIELDS.이메일] || undefined,
    },
    ...markAddressNeedsReview(customerProps[CUSTOMER_FIELDS.주소]),
  };
  if (ssn) {
    party.ssnFront = ssn.ssnFront;
    party.ssnBack = ssn.ssnBack;
  } else {
    party.ssnMissing = true; // 주민번호 형식이 아님 — 법인 원고일 가능성
  }
  return party;
}

function mapOpponentToDefendant(opponentProps) {
  const isOrg = opponentProps[OPPONENT_FIELDS.구분] === '법인';
  const party = {
    role: '피고',
    personType: isOrg ? '법인' : '자연인',
    contact: opponentProps[OPPONENT_FIELDS.연락처] ? { phone: opponentProps[OPPONENT_FIELDS.연락처] } : undefined,
    ...markAddressNeedsReview(opponentProps[OPPONENT_FIELDS.주소]),
  };
  if (isOrg) {
    party.orgName = opponentProps[OPPONENT_FIELDS.이름] || null;
    party.representativeMissing = true; // 대표자구분·성명은 상대방DB에 없음 — overrides 필수
  } else {
    party.name = opponentProps[OPPONENT_FIELDS.이름] || null;
    const ssn = splitSsn(opponentProps[OPPONENT_FIELDS.주민법인번호]);
    if (ssn) {
      party.ssnFront = ssn.ssnFront;
      party.ssnBack = ssn.ssnBack;
    } else {
      party.ssnMissing = true;
    }
  }
  return party;
}

// -------------------------------------------------------------------------
// 사건부DB 페이지 + 관계 페이지(고객/상대방) 조회
// -------------------------------------------------------------------------
async function fetchCaseBundle(casePageId) {
  const caseProps = await getPageProperties(casePageId);

  const customerIds = caseProps[CASE_FIELDS.고객관계] || [];
  const opponentIds = caseProps[CASE_FIELDS.상대방관계] || [];

  if (customerIds.length === 0) {
    throw new Error('사건에 연결된 고객DB 관계가 없음 — 원고 정보를 알 수 없음');
  }
  if (customerIds.length > 1) {
    throw new Error(`고객DB 관계가 ${customerIds.length}개 연결됨 — 이 Fill engine은 원고 1명만 자동 지원 (다수는 overrides.parties로 직접 구성)`);
  }
  if (opponentIds.length > 1) {
    throw new Error(`상대방DB 관계가 ${opponentIds.length}개 연결됨 — 이 Fill engine은 피고 1명만 자동 지원 (다수는 overrides.parties로 직접 구성)`);
  }

  const customerProps = await getPageProperties(customerIds[0]);
  const opponentProps = opponentIds.length === 1 ? await getPageProperties(opponentIds[0]) : null;

  return { casePageId, caseProps, customerProps, opponentProps };
}

// -------------------------------------------------------------------------
// bundle + overrides → runFullFlow payload
// -------------------------------------------------------------------------
function buildPayloadFromCase({ caseProps, customerProps, opponentProps }, overrides = {}) {
  const category = caseProps[CASE_FIELDS.사건카테고리];
  if (category !== ECFS_ELIGIBLE_CATEGORY) {
    throw new Error(`이 사건의 카테고리는 '${category}'로, ECFS 민사소송 자동화 대상('${ECFS_ELIGIBLE_CATEGORY}')이 아님`);
  }

  let parties = overrides.parties;
  if (!parties) {
    const plaintiff = mapCustomerToPlaintiff(customerProps);
    if (plaintiff.ssnMissing) {
      throw new Error('원고 주민번호를 확인할 수 없음(법인 원고는 party-input 모듈 미지원) — overrides.parties로 직접 공급 필요');
    }
    if (plaintiff.needsManualAddressSplit && !overrides.skipAddressCheck) {
      throw new Error(`원고 주소가 자동 분리되지 않음(원문: "${plaintiff.addressRaw}") — overrides.parties[0].address에 구조화된 주소를 채워서 다시 호출할 것`);
    }

    parties = [plaintiff];

    if (opponentProps) {
      const defendant = mapOpponentToDefendant(opponentProps);
      if (defendant.representativeMissing && !overrides.skipRepresentativeCheck) {
        throw new Error('피고(법인) 대표자구분·성명이 없음 — overrides.parties[1]에 representativeType/representativeName을 채워서 다시 호출할 것');
      }
      if (defendant.needsManualAddressSplit && !overrides.skipAddressCheck) {
        throw new Error(`피고 주소가 자동 분리되지 않음(원문: "${defendant.addressRaw}") — overrides.parties[1].address에 구조화된 주소를 채워서 다시 호출할 것`);
      }
      parties.push(defendant);
    }
  }

  if (!overrides.caseBasicInfo) {
    throw new Error('overrides.caseBasicInfo가 필요함 (caseName, claimType, litigationValue, courtName — 법무사가 확정한 값)');
  }
  if (!overrides.claim) {
    throw new Error('overrides.claim이 필요함 (purposeText, reasonHtml — 법무사가 작성)');
  }

  return {
    caseBasicInfo: overrides.caseBasicInfo,
    parties,
    claim: overrides.claim,
    evidence: overrides.evidence || [],
    requiresAffidavit: overrides.requiresAffidavit || false,
    affidavitAcknowledged: overrides.affidavitAcknowledged || false,
    resumeFrom: overrides.resumeFrom,
  };
}

/** 사건 페이지 ID로 바로 payload까지 만드는 편의 함수 */
async function buildPayloadFromNotionCase(casePageId, overrides = {}) {
  const bundle = await fetchCaseBundle(casePageId);
  return buildPayloadFromCase(bundle, overrides);
}

module.exports = {
  CASE_FIELDS,
  CUSTOMER_FIELDS,
  OPPONENT_FIELDS,
  ECFS_ELIGIBLE_CATEGORY,
  splitSsn,
  mapCustomerToPlaintiff,
  mapOpponentToDefendant,
  fetchCaseBundle,
  buildPayloadFromCase,
  buildPayloadFromNotionCase,
};
