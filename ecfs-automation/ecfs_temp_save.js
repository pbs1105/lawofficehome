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

const { clearBlockersBeforeClick, waitForDialog, clickPopupConfirm, describeBlockingState } = require('./ecfs_safe_register');

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

  // 클릭 전 잔존 팝업을 정상적으로 닫고(먼저), 그래도 남은 빈 오버레이만 무력화한다.
  await clearBlockersBeforeClick(page);

  try {
    await target.first().click({ timeout: 12000 });
  } catch (e) {
    await clearBlockersBeforeClick(page);
    try {
      await target.first().click({ timeout: 12000 });
    } catch (e2) {
      const { summary } = await describeBlockingState(page);
      throw new Error(`[임시저장] 버튼 클릭 실패: ${e2.message.split('\n')[0]} — 화면 상태: ${summary}`);
    }
  }
  await page.waitForTimeout(1200);

  const result = await handleTempSavePopup(page);
  return { ok: true, popup: result };
}

/**
 * 임시저장 팝업 처리.
 *
 * ⚠️ 2026-07-29 개정 — 예전 구현의 두 가지 문제를 고쳤다.
 *   1) 팝업 존재 판정을 "이름이 '확인'인 버튼이 보이는가"로 했는데, 이 화면에는
 *      당사자 '표시확인' 버튼(value="확인")이 팝업과 무관하게 항상 떠 있다.
 *      제외 ID를 하드코딩해 막았지만, 같은 종류의 버튼이 하나 더 생기면 다시
 *      깨지는 방식이었다. 이제 히트테스트(elementFromPoint)로 "실제로 화면 맨
 *      위에서 클릭 가능한" 버튼만 팝업 버튼으로 인정한다(ecfs_dialog.js).
 *   2) 필수항목 누락 판정을 페이지 전체 본문 텍스트로 했는데, 그 문구가 화면
 *      어딘가에 안내문으로 있어도 오탐이 난다. 이제 대화상자 본문 텍스트만 본다.
 *
 * 임시저장은 "임시저장하시겠습니까?"(확인) → "저장되었습니다"(확인)처럼 팝업이
 * 연달아 뜰 수 있어, 최대 3개까지 순서대로 처리한다.
 */
async function handleTempSavePopup(page) {
  const seen = [];
  for (let i = 0; i < 3; i += 1) {
    const dialog = await waitForDialog(page, { timeoutMs: i === 0 ? 4000 : 2000 });
    if (!dialog.found) break;

    const text = dialog.dialogText || '';
    seen.push(text);

    if (/필수 항목|입력하세요|선택하세요/.test(text)) {
      await clickPopupConfirm(page); // 거부 팝업은 닫아두고 예외로 이관
      throw new Error(`임시저장 거부됨 — ${text} (필요 시 emergencyTempSaveWithDummy 사용)`);
    }

    await clickPopupConfirm(page);
    await page.waitForTimeout(600);

    if (/저장되었습니다|임시저장이 완료/.test(text)) break;
  }

  return { popupSeen: seen.length > 0, dialogTexts: seen };
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
