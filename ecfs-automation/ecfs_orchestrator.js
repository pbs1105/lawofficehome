/**
 * ecfs_orchestrator.js — 소장 작성 전체 흐름(STEP 1~10) 순차 지휘
 * -----------------------------------------------------------------------
 * ecfs-orchestrator 스킬(SKILL.md)의 STEP 1~10을 Node/Playwright로 이식.
 *
 * ⚠️ 이 모듈이 다루지 않는 것 (의도적 범위 제외 — 원본 스킬도 동일)
 *   - STEP 2.0 관할법원 자동 판단, STEP 2.1 소가 자동 계산: 법령 해석과
 *     사실관계 확인이 필요한 "판단" 단계라서 DOM 자동화가 아니다. 이
 *     오케스트레이터를 호출하기 전에 법무사(또는 Claude와의 대화)가 먼저
 *     법원명·소가를 확정해 payload.caseBasicInfo에 담아서 넘겨야 한다.
 *   - STEP 8.5 가압류신청 진술서: Claude/자동화가 문장을 대신 쓰지 않는다.
 *     payload.requiresAffidavit=true인데 아직 작성 확인이 안 됐으면
 *     (payload.affidavitAcknowledged !== true) 첨부서류 업로드 직전에
 *     흐름을 멈추고 'blocked' 상태로 반환한다 — 법무사 확인 후
 *     affidavitAcknowledged: true로 다시 호출해야 이어서 진행된다.
 *
 * ⚠️ 원본 스킬과 의도적으로 다르게 구현한 부분
 *   STEP 5(당사자 완료 후 임시저장, 청구취지/원인엔 더미 텍스트 주입)는
 *   생략했다. CKEditor 필드에 대한 더미 삽입은 Playwright로 검증된 적이
 *   없어 위험이 크고, Node 쪽 세션 킵얼라이브(ecfs_session_extend.js)가
 *   이미 안정적으로 동작하므로 세션 만료 위험도 원본보다 낮다. 대신
 *   당사자 입력(STEP 4)과 청구취지·원인 입력(STEP 6)을 마친 뒤 한 번에
 *   임시저장한다(아래 STEP 7 지점). 안전을 더 원하면 payload.tempSaveAfterParties
 *   =true로 켜서 party 완료 직후 정상 임시저장(더미 없이, 필수 항목 없으면
 *   실패할 수 있음)을 추가로 시도할 수 있다.
 *
 * 각 단계 완료 시 opts.onStep(stepName, status, detail)을 호출한다.
 * status: 'done' | 'retrying' | 'blocked' | 'failed'
 *
 * ⚠️ Phase 4 — STEP 단위 재시도 (안정성/운영)
 *   ecfs_safe_register.js가 [등록] 버튼 클릭 자체는 이미 재시도하지만,
 *   그 앞의 필드 채우기까지 포함한 STEP 전체가 팝업 미검출·일시적 렌더링
 *   지연 등으로 실패하는 경우를 한 겹 더 감싸 방어한다. withStepRetry로
 *   감싼 STEP은 1회 재시도(총 2회 시도) 후에도 실패하면 예외를 그대로
 *   던지고, 기존 catch 블록의 EMERGENCY_TEMP_SAVE로 넘어간다 — "사람에게
 *   이관"은 최종 반환값의 status:'failed'로 표현되고, 서버가 이를 콜백에
 *   needsManualReview:true로 실어 admin 페이지에 노출한다.
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const { submitCivilConsent } = require('./ecfs_civil_consent');
const { submitCaseBasicInfo } = require('./ecfs_case_basic_info');
const { submitPlaintiffNonMember, submitDefendant } = require('./ecfs_party_input');
const { submitClaim } = require('./ecfs_claim_input');
const { clickTempSave, emergencyTempSaveWithDummy } = require('./ecfs_temp_save');
const { submitEvidenceUpload } = require('./ecfs_evidence_upload');
const { extendSessionOnce, startKeepAlive } = require('./ecfs_session_extend');

const RESUME_ORDER = ['civil_consent', 'case_basic_info', 'parties', 'claim', 'evidence', 'temp_save_final'];

function shouldRun(step, resumeFrom) {
  if (!resumeFrom) return true;
  return RESUME_ORDER.indexOf(step) >= RESUME_ORDER.indexOf(resumeFrom);
}

/**
 * 첨부서류 섹션에 "가압류신청 진술서" 안내가 실제로 떠 있는지 확인한다.
 * 사건명만 보고 미리 단정하지 않고, 화면 텍스트로 최종 확인한다는
 * ecfs-orchestrator 원칙을 그대로 따른다.
 */
async function checkAffidavitBannerVisible(page) {
  return page
    .getByText('가압류신청 진술서', { exact: false })
    .first()
    .isVisible()
    .catch(() => false);
}

/**
 * STEP 0 — 실행 전 화면 상태 점검(preflight).
 *
 * ⚠️ 2026-07-29 신규. 감사로그(2026-07-27 1회차)에 STEP1이 15초 타임아웃으로
 * 실패하고 EMERGENCY_TEMP_SAVE까지 "[임시저장] 버튼을 찾지 못함"으로 실패한
 * 기록이 있는데, 이는 **대상 탭이 애초에 전자소송 작성 화면이 아니었다**는 뜻이다.
 * 그런 경우 15초를 기다린 끝에 원인 불명의 타임아웃 메시지만 남으므로, 실행
 * 시작 시점에 화면 상태를 판별해 사람이 바로 조치할 수 있는 메시지를 준다.
 * 동시에 이전 실행이 남긴 팝업을 닫아, 그 팝업 오버레이 때문에 첫 클릭부터
 * 막히는 연쇄 실패를 끊는다.
 */
/**
 * 포털을 건드리기 전에 payload 필수값을 **한 번에 모두** 검증한다.
 *
 * ⚠️ 2026-07-29 실사건에서 드러난 문제: 청구구분이 비어 있는 채로 실행되어
 * 사건명까지 입력한 다음 STEP2 도중에 예외가 났다. 포털에는 반쯤 입력된
 * 상태가 남고, 화면에는 "청구구분을 선택하라"는 말만 반복돼 원인을 알기
 * 어려웠다. 이런 값 문제는 브라우저를 건드리기 전에 걸러야 한다.
 */
function validatePayload(payload = {}) {
  const { normalizeClaimType } = require('./ecfs_case_basic_info');
  const errors = [];
  const resumeFrom = payload.resumeFrom;

  if (shouldRun('case_basic_info', resumeFrom)) {
    const cbi = payload.caseBasicInfo;
    if (!cbi) {
      errors.push('사건기본정보(caseBasicInfo)가 없습니다.');
    } else {
      if (!cbi.caseName || !String(cbi.caseName).trim()) errors.push('사건명(caseName)이 비어 있습니다.');
      const ct = normalizeClaimType(cbi.claimType);
      if (!ct) {
        errors.push(
          `청구구분(claimType)이 올바르지 않습니다 — 받은 값: ${JSON.stringify(cbi.claimType ?? null)}. admin 화면의 「청구구분」이 실제로 선택돼 있는지 확인하세요.`
        );
      } else if (ct === '재산권상청구' && !(Number(cbi.litigationValue) > 0)) {
        errors.push(`재산권상청구인데 소가(litigationValue)가 없습니다 — 받은 값: ${JSON.stringify(cbi.litigationValue ?? null)}`);
      }
    }
  }

  if (shouldRun('parties', resumeFrom)) {
    const parties = payload.parties || [];
    if (parties.length === 0) errors.push('당사자(parties)가 비어 있습니다.');
    parties.forEach((p, i) => {
      if (p.role !== '원고' && p.role !== '피고') {
        errors.push(`당사자[${i}] role이 올바르지 않습니다 — 받은 값: ${JSON.stringify(p.role ?? null)} ('원고' 또는 '피고')`);
      }
    });
  }

  if (shouldRun('claim', resumeFrom)) {
    const c = payload.claim;
    if (!c) errors.push('청구취지·청구원인(claim)이 없습니다.');
    else {
      if (!c.purposeText && !c.purposeFilePath) errors.push('신청취지(purposeText)가 비어 있습니다.');
      if (!c.reasonHtml && !c.reasonFilePath) errors.push('신청이유(reasonHtml)가 비어 있습니다.');
    }
  }

  return errors;
}

async function preflight(page, payload = {}) {
  const { closeOpenDialogs, describeBlockingState } = require('./ecfs_dialog');

  // (1) 값 검증이 먼저 — 브라우저를 건드리기 전에 걸러낸다.
  const valueErrors = validatePayload(payload);
  if (valueErrors.length > 0) {
    const err = new Error(`실행 전 입력값 확인 필요 (포털은 아직 건드리지 않았습니다):\n- ${valueErrors.join('\n- ')}`);
    err.preflightValueError = true; // 포털을 안 건드렸으므로 긴급 임시저장도 하지 않는다
    throw err;
  }

  // 이전 실행이 남긴 팝업 정리 (닫은 팝업 텍스트는 진단 정보로 남긴다)
  const leftovers = await closeOpenDialogs(page, { max: 4 });

  const screen = await page
    .evaluate(() => ({
      url: location.href,
      consent: !!document.getElementById('mf_pfwork_cbx_agree_input_0'),
      drafting: !!document.getElementById('mf_pfwork_btn_tmpSave'),
      title: document.title,
    }))
    .catch(() => ({ url: null, consent: false, drafting: false, title: null }));

  const firstStep = payload.resumeFrom || 'civil_consent';
  const info = {
    ...screen,
    leftoverDialogs: leftovers.closedCount,
    leftoverDialogTexts: leftovers.texts,
    firstStep,
  };

  if (leftovers.remaining) {
    const { summary } = await describeBlockingState(page);
    throw new Error(
      `실행 전 화면에 닫히지 않는 대화상자가 남아 있습니다 — 직원이 화면에서 직접 닫은 뒤 다시 실행하세요. 상태: ${summary}`
    );
  }

  if (firstStep === 'civil_consent') {
    if (!screen.consent) {
      if (screen.drafting) {
        throw new Error(
          '이미 소장 작성 화면이 열려 있습니다(전자소송 동의가 끝난 상태). STEP1을 건너뛰려면 resumeFrom:"case_basic_info"로 실행하세요.'
        );
      }
      throw new Error(
        `전자소송 동의 화면이 아닙니다 — 현재 화면: ${screen.title || '(제목 없음)'} / ${screen.url}. 직원이 "민사 서류 제출 → 소장" 화면을 열어둔 뒤 다시 실행하세요.`
      );
    }
  } else if (!screen.drafting) {
    throw new Error(
      `소장 작성 화면이 아닙니다(resumeFrom:"${firstStep}") — 현재 화면: ${screen.title || '(제목 없음)'} / ${screen.url}. 작성중서류에서 해당 사건을 열어둔 뒤 다시 실행하세요.`
    );
  }

  return info;
}

/**
 * STEP 하나를 실행하고, 실패하면 delayMs만큼 기다렸다가 최대 retries회
 * 재시도한다(기본 1회 재시도 = 총 2회 시도). 재시도 직전 onRetry(err, attempt)를
 * 호출해 진행상황 콜백/감사로그에 'retrying'을 남길 수 있게 한다.
 */
async function withStepRetry(stepFn, { retries = 1, delayMs = 1500, onRetry } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await stepFn();
    } catch (err) {
      lastErr = err;
      if (attempt < retries) {
        if (onRetry) {
          try { onRetry(err, attempt + 1); } catch { /* 콜백 실패는 재시도 자체를 막지 않음 */ }
        }
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }
  throw lastErr;
}

/**
 * @param {import('playwright').Page} page
 * @param {object} payload
 * @param {object} payload.caseBasicInfo   ecfs_case_basic_info.submitCaseBasicInfo 인자
 * @param {Array}  payload.parties         [{ role:'원고'|'피고', ... }]
 * @param {object} payload.claim           ecfs_claim_input.submitClaim 인자
 * @param {Array}  payload.evidence        [{ section:'prvDocmt'|'atch', files:[...], gridEdits? }]
 * @param {boolean}[payload.requiresAffidavit]      가압류·가처분 사건인지
 * @param {boolean}[payload.affidavitAcknowledged]  법무사가 진술서 작성을 확인했는지
 * @param {string} [payload.resumeFrom]   재개 시작 지점 (RESUME_ORDER 중 하나) — 생략 시 처음부터
 * @param {object} [opts]
 * @param {(step:string, status:'done'|'blocked'|'failed', detail?:object) => void} [opts.onStep]
 */
async function runFullFlow(page, payload = {}, opts = {}) {
  const onStep = opts.onStep || (() => {});
  const log = [];
  const report = (step, status, detail) => {
    const entry = { step, status, detail, at: new Date().toISOString() };
    log.push(entry);
    try { onStep(step, status, detail); } catch { /* 콜백 실패는 흐름을 막지 않음 */ }
  };

  // 세션 킵얼라이브가 아직 없으면 여기서도 시작할 수 있게 지원 (서버가 이미 시작했다면 중복 방지는 호출측 책임)
  if (opts.ensureKeepAlive) {
    startKeepAlive(page);
  }

  // STEP 이름을 넘겨 받아 withStepRetry에 'retrying' 리포팅을 자동으로 연결하는 헬퍼
  const retrying = (stepName, fn) =>
    withStepRetry(fn, {
      onRetry: (err, attempt) => report(stepName, 'retrying', { attempt, message: err.message }),
    });

  try {
    // STEP 0 — 화면 상태 점검 + 이전 실행이 남긴 팝업 정리
    if (payload.skipPreflight !== true) {
      const pf = await preflight(page, payload);
      report('STEP0_preflight', 'done', pf);
    }

    if (shouldRun('civil_consent', payload.resumeFrom)) {
      await retrying('STEP1_civil_consent', () => submitCivilConsent(page));
      report('STEP1_civil_consent', 'done');
    }

    if (shouldRun('case_basic_info', payload.resumeFrom)) {
      if (!payload.caseBasicInfo) throw new Error('payload.caseBasicInfo가 필요함 (법원·사건명·소가는 이 함수 호출 전에 확정돼 있어야 함)');
      const r = await retrying('STEP2_case_basic_info', () => submitCaseBasicInfo(page, payload.caseBasicInfo));
      report('STEP2_case_basic_info', 'done', r);
    }

    if (shouldRun('parties', payload.resumeFrom)) {
      const parties = payload.parties || [];
      let i = 0;
      for (const party of parties) {
        i += 1;
        const stepName = `STEP4_party_${i}`;
        await retrying(stepName, async () => {
          if (party.role === '원고') {
            await submitPlaintiffNonMember(page, party);
          } else if (party.role === '피고') {
            await submitDefendant(page, party);
          } else {
            throw new Error(`알 수 없는 당사자 role: ${party.role} ('원고' 또는 '피고'만 허용)`);
          }
        });
        await extendSessionOnce(page); // STEP 4 — 당사자 1명 등록마다 세션 수동 연장
        report(stepName, 'done', { role: party.role, name: party.name || party.orgName });
      }
      report('STEP4_parties', 'done', { count: parties.length });

      if (payload.tempSaveAfterParties) {
        // 선택적 추가 안전장치 — 청구취지/원인이 비어 있으면 실패할 수 있으므로 실패는 무시하고 계속 진행
        await clickTempSave(page).then(
          () => report('STEP5_temp_save_optional', 'done'),
          (err) => report('STEP5_temp_save_optional', 'failed', { message: err.message })
        );
      }
    }

    if (shouldRun('claim', payload.resumeFrom)) {
      if (!payload.claim) throw new Error('payload.claim이 필요함 (purposeText, reasonHtml)');
      const r = await retrying('STEP6_claim_input', () => submitClaim(page, payload.claim));
      report('STEP6_claim_input', 'done', r);

      await retrying('STEP7_temp_save', () => clickTempSave(page)); // STEP 7 — 당사자+청구 완료 후 임시저장 (더미 없이)
      report('STEP7_temp_save', 'done');
    }

    if (shouldRun('evidence', payload.resumeFrom)) {
      await extendSessionOnce(page); // STEP 8 — 업로드 전 즉시 연장
      report('STEP8_session_extend', 'done');

      if (payload.requiresAffidavit && !payload.affidavitAcknowledged) {
        const bannerVisible = await checkAffidavitBannerVisible(page);
        if (bannerVisible) {
          report('STEP8_5_affidavit', 'blocked', {
            message: '가압류신청 진술서 작성 필요 — ecfs-affidavit-checklist로 법무사 확인 후 payload.affidavitAcknowledged=true, resumeFrom="evidence"로 재호출',
          });
          return { ok: false, status: 'blocked', stoppedAt: 'STEP8_5_affidavit', log };
        }
      }

      for (const ev of payload.evidence || []) {
        const stepName = `STEP9_evidence_${ev.section}`;
        const r = await retrying(stepName, () => submitEvidenceUpload(page, ev));
        report(stepName, 'done', r);
      }
    }

    if (shouldRun('temp_save_final', payload.resumeFrom)) {
      await retrying('STEP10_final_temp_save', () => clickTempSave(page)); // STEP 10 — 최종 임시저장
      report('STEP10_final_temp_save', 'done');
    }

    return { ok: true, status: 'completed', log };
  } catch (err) {
    // ⚠️ 2026-07-29: 실패 시 "왜 막혔는지"를 감사로그에 남긴다. 예전에는
    // `locator.click: Timeout 30000ms` 한 줄만 남아서, 어떤 대화상자가 떠 있었고
    // 무엇이 클릭을 가로막았는지 사후에 알 수 없었다(원인 추적이 몇 주 지연된 원인).
    let diagnostics = null;
    try {
      const { describeBlockingState } = require('./ecfs_dialog');
      const { summary } = await describeBlockingState(page);
      const screen = await page
        .evaluate(() => ({ url: location.href, title: document.title }))
        .catch(() => null);
      diagnostics = { blocking: summary, screen };
    } catch { /* 진단 수집 실패가 실패 처리 자체를 막지 않게 한다 */ }

    report('ERROR', 'failed', { message: err.message, trace: err.trace || null, diagnostics });

    // 재시도까지 실패한 뒤 마지막 안전망 — 긴급 임시저장 시도 (원본 스킬의 "오류 발생 시 응급 처치" 절차)
    // 여기서부터는 "사람에게 이관"이 필요한 지점이다 — 반환값의 status:'failed'를 서버가
    // needsManualReview:true로 변환해 admin 페이지에 노출한다.
    let emergencySaved = false;
    if (err.preflightValueError) {
      // 입력값 문제로 실행 자체가 시작되지 않았다 — 포털 화면은 그대로이므로
      // 긴급 임시저장(더미 주입)을 하면 오히려 멀쩡한 화면을 더럽힌다.
      report('EMERGENCY_TEMP_SAVE', 'done', { skipped: true, reason: '입력값 검증 단계에서 중단 — 포털 미조작' });
      return { ok: false, status: 'failed', error: err.message, diagnostics, emergencySaved: false, log };
    }
    try {
      const saveResult = await emergencyTempSaveWithDummy(page, payload.emergencyRequiredFieldIds || []);
      report('EMERGENCY_TEMP_SAVE', 'done', saveResult);
      emergencySaved = true;
    } catch (saveErr) {
      report('EMERGENCY_TEMP_SAVE', 'failed', { message: saveErr.message });
    }

    return { ok: false, status: 'failed', error: err.message, diagnostics, emergencySaved, log };
  }
}

module.exports = {
  RESUME_ORDER,
  checkAffidavitBannerVisible,
  withStepRetry,
  validatePayload,
  preflight,
  runFullFlow,
};
