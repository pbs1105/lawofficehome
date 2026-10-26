/**
 * ecfs_file_payload.js — AI 추출결과 → fill-engine payload 조립·검증
 * -----------------------------------------------------------------------
 * sop_파일기반_추출_계획.md §4[4]~[5] 구현.
 *
 * n8n AI 노드가 03_제출확정자료 텍스트(주민번호는 ⟦주민번호N⟧로 마스킹된 상태)에서
 * 뽑아낸 raw 객체와, ecfs_privacy.maskSsns가 만든 토큰맵을 받아,
 * 서버 /run-full이 그대로 받는 payload( caseBasicInfo·parties·claim·evidence )로
 * 조립하고, 사람이 반드시 확인해야 하는 지점을 warnings로 표시한다.
 *
 * 스키마·검증 규칙은 기존 ecfs_fill_engine.js(Notion 경로)와 동일하게 맞춘다:
 *   - 주민번호 13자리 / 자연인 누락 시 ssnMissing
 *   - 주소는 구조화(시도/시군구/도로명/본번) 안 되면 needsManualAddressSplit
 *   - 피고 법인은 대표자구분·성명 필요(representativeMissing)
 *   - 법인 원고 미지원
 *
 * raw 예시(파일기반 AI 출력):
 * {
 *   caseBasicInfo: { caseName, claimType, litigationValue, courtName },
 *   parties: [
 *     { role:'원고', name, ssnToken:1, address:{시도,시군구,도로명,본번}, contact:{mobile,phone,email} },
 *     { role:'피고', personType:'자연인', name, ssnToken:2, addressRaw:'...', contact:{phone} }
 *   ],
 *   claim: { purposeText, reasonHtml },
 *   evidence: [ ... ]
 * }
 * -----------------------------------------------------------------------
 */

const { resolvePartySsn } = require('./ecfs_privacy');

const STRUCTURED_ADDRESS_KEYS = ['시도', '시군구', '도로명', '본번']; // party_input이 요구하는 최소 구조

// 주소가 구조화 객체(최소 시도+도로명)면 그대로, 아니면 addressRaw + needsManualAddressSplit.
function normalizeAddress(addr) {
  if (addr && typeof addr === 'object' && !Array.isArray(addr)) {
    const has = STRUCTURED_ADDRESS_KEYS.some((k) => addr[k]);
    const enough = addr['시도'] && addr['도로명']; // 최소 요건
    if (enough) return { address: addr };
    // 부분 구조화 — 사람 확인 필요
    return { addressRaw: addr.addressRaw || addr.raw || null, partialAddress: has ? addr : undefined, needsManualAddressSplit: true };
  }
  if (typeof addr === 'string' && addr.trim()) {
    return { addressRaw: addr.trim(), needsManualAddressSplit: true };
  }
  return { addressRaw: null, needsManualAddressSplit: true };
}

function normalizeParty(rawParty, tokens, warnings) {
  const roleRaw = rawParty.role || '';
  const isPlaintiff = /원고|채권자|신청인/.test(roleRaw);
  const role = isPlaintiff ? '원고' : '피고';
  let p = { role };

  // 개인/법인
  const isOrg = rawParty.personType === '법인' || !!rawParty.orgName;
  p.personType = isOrg ? '법인' : '자연인';

  if (isOrg) {
    p.orgName = rawParty.orgName || rawParty.name || null;
    p.representativeType = rawParty.representativeType || undefined;
    p.representativeName = rawParty.representativeName || undefined;
    // 법인등록번호(6-7, 13자리)는 주민번호와 형식이 같아 /privacy/mask에서 ⟦주민번호N⟧ 토큰으로 가려진다.
    // 추출 노드는 그 토큰 번호 N을 법인등록번호Token(신규)으로 넘긴다(과거 ssnToken도 하위호환으로 허용).
    // 여기서 로컬 토큰맵으로 실제 13자리를 되채워 corpRegNo(법인등록번호)로 노출한다.
    const corpTok = rawParty.법인등록번호Token != null ? rawParty.법인등록번호Token : rawParty.ssnToken;
    const resolvedOrg = resolvePartySsn({ ssn: rawParty.법인등록번호 || rawParty.ssn, ssnToken: corpTok, ssnFront: rawParty.ssnFront, ssnBack: rawParty.ssnBack }, tokens);
    if (resolvedOrg.ssnFront && resolvedOrg.ssnBack) {
      p.ssnFront = resolvedOrg.ssnFront;
      p.ssnBack = resolvedOrg.ssnBack;
      p.corpRegNo = resolvedOrg.ssnFront + resolvedOrg.ssnBack; // 법인등록번호 13자리(피고 법인 필수, 원고 법인 임의)
    } else if (role === '피고') {
      warnings.push(`피고(법인) '${p.orgName || ''}' 법인등록번호 없음 — ECFS 피고 법인은 법인등록번호가 필수(ibx_crno). 등기부 등에서 확인·입력 필요.`);
    }
    // 사업자등록번호(3-2-5, 10자리) — 법인등록번호와 별개. 법인 원고·채권자는 ECFS 필수.
    const bizRaw = rawParty.사업자등록번호 || rawParty.bizRegNo || rawParty.사업자번호;
    const bizDigits = bizRaw ? String(bizRaw).replace(/[^0-9]/g, '') : '';
    if (bizDigits.length === 10) {
      p.bizRegNo = bizDigits; // party-input이 3-2-5로 분할
    } else if (bizRaw) {
      warnings.push(`${role}(법인) '${p.orgName}' 사업자등록번호 형식오류('${bizRaw}') — 10자리(3-2-5) 확인 필요.`);
    }
    if (role === '원고' && !p.bizRegNo) {
      warnings.push(`법인 원고 '${p.orgName}' 사업자등록번호 없음 — ECFS 법인 원고는 사업자등록번호 필수. 소장에 없으면 법무사가 확인·입력 필요.`);
    }
    // (2026-08) party-input이 법인 원고를 정식 지원한다: 인격구분=법인 + 사업자등록번호(bzno) 필수 입력.
    // 사업자등록번호가 없으면 자동 실행이 등록 단계에서 중단되므로 여기서 명확히 경고한다(위 !p.bizRegNo 경고 참조).
    if (role === '피고' && (!p.representativeType || !p.representativeName)) {
      p.representativeMissing = true;
      warnings.push(`피고(법인) '${p.orgName}'의 대표자구분·성명 누락 — 법무사 확인 필요.`);
    }
  } else {
    p.name = rawParty.name || null;
    p = resolvePartySsn(Object.assign(p, { ssn: rawParty.ssn, ssnToken: rawParty.ssnToken, ssnFront: rawParty.ssnFront, ssnBack: rawParty.ssnBack }), tokens);
    if (p.ssnMissing) {
      warnings.push(`${role} '${p.name || '이름미상'}' 주민번호 누락/형식오류 — 법무사 확인 필요.`);
    }
    delete p.ssn; delete p.ssnToken;
  }

  // 연락처
  if (rawParty.contact && typeof rawParty.contact === 'object') {
    const c = {};
    ['mobile', 'phone', 'email'].forEach((k) => { if (rawParty.contact[k]) c[k] = rawParty.contact[k]; });
    if (Object.keys(c).length) p.contact = c;
  }

  // 주소
  const addr = normalizeAddress(rawParty.address != null ? rawParty.address : rawParty.addressRaw);
  Object.assign(p, addr);
  if (p.needsManualAddressSplit) {
    warnings.push(`${role} '${p.name || p.orgName || '이름미상'}' 주소가 구조화(시도/시군구/도로명/본번)되지 않음 — 법무사가 확인·보정 필요. (원문: "${p.addressRaw || ''}")`);
  }

  return p;
}

// raw + tokens → { payload, warnings }
function buildPayloadFromExtraction(raw, tokens = {}, opts = {}) {
  const warnings = [];
  if (!raw || typeof raw !== 'object') {
    return { payload: null, warnings: ['추출 결과(raw)가 비어 있음'] };
  }

  // caseBasicInfo
  const cbi = raw.caseBasicInfo || {};
  const caseBasicInfo = {};
  if (cbi.caseName) caseBasicInfo.caseName = cbi.caseName; else warnings.push('caseBasicInfo.caseName(사건명) 누락 — 확인 필요.');
  // ⚠️ 2026-07-29: AI 추출값은 포털 화면 문구를 그대로 가져와 "비재산권상 청구"처럼
  // 띄어쓰기가 들어오는 경우가 많다. 그대로 두면 admin의 select 옵션값
  // ("비재산권상청구")과 매칭되지 않아 선택이 조용히 비워지고, 실행 시
  // "청구구분이 비었다"는 이유로 STEP2 도중 중단된다(실사건에서 발생).
  // 여기서 정규화해 하류로 정상값만 흘려보낸다.
  const { normalizeClaimType } = require('./ecfs_case_basic_info');
  const normalizedClaimType = normalizeClaimType(cbi.claimType);
  if (cbi.claimType && !normalizedClaimType) {
    warnings.push(
      `청구구분(claimType) 추출값 "${cbi.claimType}"을 인식하지 못해 기본값('재산권상청구')으로 두었습니다 — admin 화면에서 반드시 직접 확인하세요.`
    );
  }
  caseBasicInfo.claimType = normalizedClaimType || '재산권상청구';
  if (!cbi.claimType) {
    warnings.push('청구구분(claimType) 미추출 — 기본값 재산권상청구로 두었으니 법무사가 직접 확인하세요.');
  }
  if (cbi.courtName) caseBasicInfo.courtName = cbi.courtName; else warnings.push('caseBasicInfo.courtName(관할법원) 누락 — 법무사 확인 필요(관할 판단 영역).');
  if (caseBasicInfo.claimType === '재산권상청구') {
    if (cbi.litigationValue != null && cbi.litigationValue !== '') {
      caseBasicInfo.litigationValue = Number(String(cbi.litigationValue).replace(/[^0-9.]/g, '')) || 0;
      warnings.push('소가(litigationValue)는 부대청구 불산입 등 법적 판단이 필요 — 법무사 확정 필요.');
    } else {
      warnings.push('재산권상청구인데 소가(litigationValue) 누락 — 법무사 확정 필요.');
    }
  } else if (cbi.lwstTypeCheck) {
    caseBasicInfo.lwstTypeCheck = true;
  }

  // claim
  const claimRaw = raw.claim || {};
  const claim = {
    purposeText: claimRaw.purposeText || '',
    reasonHtml: claimRaw.reasonHtml || '',
  };
  if (!claim.purposeText) warnings.push('claim.purposeText(청구취지) 누락 — 확인 필요.');
  if (!claim.reasonHtml) warnings.push('claim.reasonHtml(청구원인) 누락 — 확인 필요.');

  // parties
  const partiesRaw = Array.isArray(raw.parties) ? raw.parties : [];
  const parties = partiesRaw.map((rp) => normalizeParty(rp, tokens, warnings));
  if (!parties.some((p) => p.role === '원고')) warnings.push('원고가 추출되지 않음 — 확인 필요.');
  if (!parties.some((p) => p.role === '피고')) warnings.push('피고가 추출되지 않음 — 확인 필요.');

  const payload = {
    caseBasicInfo,
    parties,
    claim,
    evidence: Array.isArray(raw.evidence) ? raw.evidence : [],
    requiresAffidavit: !!raw.requiresAffidavit,
    affidavitAcknowledged: false, // 진술서는 항상 법무사가 직접 확인
  };

  return { payload, warnings };
}

module.exports = { buildPayloadFromExtraction, normalizeParty, normalizeAddress };
