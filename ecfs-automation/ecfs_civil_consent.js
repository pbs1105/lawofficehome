/**
 * ecfs_civil_consent.js
 * -----------------------------------------------------------------------
 * 전자소송포털(ecfs.scourt.go.kr) "전자소송 등 동의" (민사서류 제출 1단계)
 * Playwright 자동화.
 *
 * ✅ 2026-07-21 더미 신규 사건으로 실측 검증 완료 (Claude in Chrome으로
 *   법무사 로그인 세션에 접속해 실제 DOM ID를 확인 — 인증서 로그인 자체는
 *   법무사가 직접 수행했고, 이후 화면 조작만 확인함).
 *
 * 실측 ID:
 *   - 동의 체크박스: mf_pfwork_cbx_agree_input_0
 *   - [당사자작성] 버튼: mf_pfwork_btn_btprt   (절대 이 값으로만 클릭)
 *   - [대리인작성] 버튼: mf_pfwork_btn_agent   (참고용 — 존재를 확인해
 *     실수로 이 ID를 클릭하지 않도록 하는 방어 로직에 사용)
 *
 * ⚠️ "동의 입증 서류 첨부"에 대한 정정
 *   원본 스킬 문서는 동의 체크 직후 OS 파일탐색기로 전자소송동의서·위임장을
 *   첨부하는 것처럼 기술돼 있었지만, 실측 결과 그런 팝업은 없다. 전자소송
 *   동의서·위임장 등은 [당사자작성] 진입 후 소장 작성 화면의 "첨부서류"
 *   섹션(mf_pfwork_wfm_atch_*)에서 다른 첨부파일과 동일하게 업로드한다.
 *   → 이 파일에서는 첨부 로직을 제거했고, 실제 업로드는
 *     ecfs_evidence_upload.js의 uploadOneFile(page, 'atch', filePath, docName)
 *     를 사용한다 (오케스트레이션 단에서 순서상 나중에 호출).
 *
 * 법무사법 제2조 제1항 근거: 소송 서류 대행 작성은 항상 "당사자작성"
 * (제7호). "대리인작성"은 등기·비송 신청 대리(제6호)에만 해당 —
 * 절대 대리인작성을 선택하지 않는다.
 *
 * ⚠️ 안전 경계: 이 모듈은 "동의 체크 + 당사자작성"까지만 한다.
 * 전자서명·최종 제출은 범위 밖이며 항상 직원이 수동으로 진행한다.
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const SELECTORS = {
  동의체크박스: 'mf_pfwork_cbx_agree_input_0',
  당사자작성버튼: 'mf_pfwork_btn_btprt',
  대리인작성버튼: 'mf_pfwork_btn_agent', // 방어 로직 전용 — 절대 클릭 대상 아님
};

// -------------------------------------------------------------------------
// 1단계: 화면 진입 확인 (앵커)
// -------------------------------------------------------------------------
async function waitForConsentScreen(page, timeoutMs = 15000) {
  await page.locator(`#${SELECTORS.동의체크박스}`).waitFor({ state: 'visible', timeout: timeoutMs });
}

// -------------------------------------------------------------------------
// 2단계: 동의 체크박스 클릭 및 검증 — 실측 ID 사용
// -------------------------------------------------------------------------
async function checkConsentCheckbox(page) {
  const checkbox = page.locator(`#${SELECTORS.동의체크박스}`);
  const count = await checkbox.count().catch(() => 0);
  if (count === 0) {
    throw new Error(`동의 체크박스를 찾지 못함: #${SELECTORS.동의체크박스} — 포털 화면 개편 가능성, 재확인 필요`);
  }

  const alreadyChecked = await checkbox.isChecked().catch(() => false);
  if (!alreadyChecked) {
    await checkbox.click();
    await page.waitForTimeout(500);
  }

  const nowChecked = await checkbox.isChecked().catch(() => false);
  if (!nowChecked) {
    throw new Error('체크박스 클릭 후에도 체크 상태 확인 실패');
  }
}

// -------------------------------------------------------------------------
// 3단계: "당사자작성" 버튼 클릭 — 절대 "대리인작성"(mf_pfwork_btn_agent) 아님
// -------------------------------------------------------------------------
async function clickPartyAuthored(page) {
  const partyBtn = page.locator(`#${SELECTORS.당사자작성버튼}`);
  const count = await partyBtn.count().catch(() => 0);
  if (count === 0) {
    throw new Error(`[당사자작성] 버튼을 찾지 못함: #${SELECTORS.당사자작성버튼}`);
  }
  await partyBtn.click();
  await page.waitForTimeout(1000);
}

// -------------------------------------------------------------------------
// 4단계: 완료 확인 — 왼쪽 메뉴가 "당사자 → 법정대리인" 순인지 확인
//   "대리인" 항목이 보이면 잘못 진입한 것 (대리인작성으로 진행됨)
// -------------------------------------------------------------------------
async function verifyPartyAuthoredFlow(page) {
  const wrongFlow = await page
    .getByText('대리인', { exact: true })
    .first()
    .isVisible()
    .catch(() => false);

  const correctFlow = await page
    .getByText('법정대리인', { exact: false })
    .first()
    .isVisible()
    .catch(() => false);

  if (wrongFlow && !correctFlow) {
    throw new Error(
      '대리인작성으로 잘못 진입된 것으로 보임 — 브라우저 뒤로가기 후 checkConsentCheckbox부터 재처리 필요'
    );
  }
  return { ok: true };
}

// -------------------------------------------------------------------------
// 오케스트레이션
//   동의 입증 서류(전자소송동의서·위임장)는 여기서 첨부하지 않는다.
//   [당사자작성] 진입 후 소장 작성 화면의 "첨부서류" 섹션에서
//   ecfs_evidence_upload.submitEvidenceUpload(page, {section:'atch', ...})
//   로 처리한다.
// -------------------------------------------------------------------------
async function submitCivilConsent(page) {
  await waitForConsentScreen(page);
  await checkConsentCheckbox(page);
  await clickPartyAuthored(page);
  await verifyPartyAuthoredFlow(page);
  return { ok: true };
}

module.exports = {
  SELECTORS,
  waitForConsentScreen,
  checkConsentCheckbox,
  clickPartyAuthored,
  verifyPartyAuthoredFlow,
  submitCivilConsent,
};
