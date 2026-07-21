/**
 * ecfs_temp_save.js — 임시저장 (Emergency Temp Save)
 * -----------------------------------------------------------------------
 * ecfs-temp-save 스킬 이식. dry-run(v0.1)에서 실측 확인된 버튼 ID
 * `mf_pfwork_btn_tmpSave`를 사용한다 (SOP STEP 7 실측 완료).
 *
 * ⚠️ 이 모듈은 두 가지 용도로 나뉜다.
 *   1) clickTempSave(page) — 정상 임시저장. 필수 항목이 이미 채워진
 *      상태에서 그냥 저장만 한다. orchestrator의 매 STEP 후 호출.
 *   2) emergencyTempSaveWithDummy(page, ...) — 최후의 보루. 세션 만료
 *      직전 등 예외 상황에서만 쓰며, 빈 필수 필드에 더미 데이터("임시")를
 *      채워 유효성 검사를 통과시킨 뒤 저장한다.
 *      → 이 경로로 저장된 사건은 절대 최종 제출하면 안 되고, 재개 시
 *        반드시 더미 데이터를 정상 데이터로 교체해야 한다. 호출 결과에
 *        dummyInjected: true 플래그가 포함되므로 admin 페이지는 이 사건을
 *        "⚠️ 더미 임시저장 — 재확인 필요" 상태로 표시해야 한다.
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const TEMP_SAVE_BTN_ID = 'mf_pfwork_btn_tmpSave'; // dry-run(v0.1) STEP 7 실측 확인

// -------------------------------------------------------------------------
// 정상 임시저장
// -------------------------------------------------------------------------
async function clickTempSave(page) {
  let target = page.locator(`#${TEMP_SAVE_BTN_ID}`);
  let count = await target.count().catch(() => 0);

  if (count === 0) {
    // 버튼 ID가 화면 개편으로 바뀐 경우 텍스트 기반 폴백
    target = page.locator('button, input[type="button"]').filter({ hasText: '임시저장' });
    count = await target.count().catch(() => 0);
  }
  if (count === 0) {
    throw new Error('[임시저장] 버튼을 찾지 못함 — 실제 DOM 확인 필요');
  }

  // Phase 5에서 발견된 유령 모달 배경 방어 (ecfs_safe_register.js 상단 주석 참조)
  await require('./ecfs_safe_register').clearStuckModalIfBlocking(page);

  await target.first().click();
  await page.waitForTimeout(1500);

  const result = await handleTempSavePopup(page);
  return { ok: true, popup: result };
}

async function handleTempSavePopup(page) {
  // "저장되었습니다." / "입력된 정보를 임시저장하시겠습니까?" 등 → 확인 클릭
  // ⚠️ Phase 5 라이브 테스트에서 발견된 중요 버그: 소장 작성 화면은 당사자
  // 섹션의 "사용자정보확인" 버튼처럼 이름에 "확인"이 들어간 버튼이 팝업과
  // 무관하게 항상 화면에 떠 있다. 정규식 /확인/(부분일치)으로 찾으면 팝업이
  // 뜨지도 않았는데 이 버튼이 "visible"로 잡혀 popupSeen:true로 오판하고,
  // 엉뚱하게 "사용자정보확인" 버튼을 클릭해버리는 사고로 이어질 수 있었다
  // (실제로 STEP2 사건기본정보 등록 직후 이 패턴 때문에 클릭이 멈춘 것을 확인).
  // exact:true로 정확히 "확인"이라는 이름의 버튼만 찾도록 수정.
  const confirmBtn = page.getByRole('button', { name: '확인', exact: true });
  const visible = await confirmBtn.first().isVisible({ timeout: 2000 }).catch(() => false);
  if (!visible) return { popupSeen: false };

  const text = await page.locator('body').innerText().catch(() => '');
  if (/필수 항목을 입력하세요/.test(text)) {
    await confirmBtn.first().click();
    throw new Error('임시저장 거부됨 — 필수 항목 누락 (필요 시 emergencyTempSaveWithDummy 사용)');
  }

  await confirmBtn.first().click();
  await page.waitForTimeout(500);
  return { popupSeen: true };
}

// -------------------------------------------------------------------------
// 예외 상황용 더미 데이터 주입 — 필수 필드가 비어 있을 때만 채운다
// -------------------------------------------------------------------------
const DUMMY_TEXT = '임시';

async function injectDummyIfEmpty(page, elementId, dummyValue = DUMMY_TEXT) {
  return page.evaluate(({ id, val }) => {
    const el = document.getElementById(id);
    if (!el) return { id, found: false };
    if (el.value) return { id, found: true, skipped: true }; // 이미 값 있음 — 건드리지 않음
    el.focus();
    el.select?.();
    document.execCommand('insertText', false, val);
    return { id, found: true, injected: true };
  }, { id: elementId, val: dummyValue });
}

/**
 * 최후의 보루 — 빈 필수 필드에 더미 데이터를 채우고 임시저장한다.
 * ⚠️ 더미 당사자 필드는 절대 [등록] 버튼을 누르지 않는다 (호출측 책임).
 *
 * @param {string[]} requiredFieldIds 채워야 할 수 있는 필수 필드 ID 목록
 *   (예: ['mf_pfwork_wfm_btprt_ibx_btprtNm', 'mf_pfwork_wfm_btprt_ibx_btprtEnrrno', ...])
 */
async function emergencyTempSaveWithDummy(page, requiredFieldIds = []) {
  console.warn('[temp-save] ⚠️ 긴급 더미 임시저장 모드 진입 — 재개 시 반드시 정상 데이터로 교체할 것');

  await page.evaluate(() => {
    if (document.activeElement) document.activeElement.blur();
  }).catch(() => {});

  const injections = [];
  for (const id of requiredFieldIds) {
    const result = await injectDummyIfEmpty(page, id);
    injections.push(result);
    await page.waitForTimeout(200);
  }

  const saveResult = await clickTempSave(page);

  const dummyFieldsInjected = injections.filter((r) => r.injected).map((r) => r.id);
  console.warn('[temp-save] 더미 임시저장 로그', {
    at: new Date().toISOString(),
    dummyFieldsInjected,
  });

  return {
    ...saveResult,
    dummyInjected: dummyFieldsInjected.length > 0,
    dummyFieldsInjected,
    warning: '더미 임시저장 상태 — 재개 시 정상 데이터로 교체 전까지 절대 최종 제출 금지',
  };
}

module.exports = {
  TEMP_SAVE_BTN_ID,
  clickTempSave,
  emergencyTempSaveWithDummy,
  injectDummyIfEmpty,
};
