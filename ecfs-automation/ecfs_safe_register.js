/**
 * ecfs_safe_register.js — [등록] 버튼 공용 안전 클릭 유틸
 * -----------------------------------------------------------------------
 * ecfs-safe-register 스킬(Claude 컴퓨터 사용 기반)을 Playwright로 이식.
 *
 * 원본 스킬은 Claude가 스크린샷 좌표를 계산해 마우스를 클릭하는 방식이라
 * "스크롤 확보 → 좌표 재계산" 과정이 필요했지만, Playwright의
 * locator.click()은 대상 요소를 직접 찾아 자동으로 뷰포트 안으로 스크롤한
 * 뒤 실제 마우스 이벤트를 발생시키므로 좌표 계산 단계가 필요 없다.
 *
 * 다만 원본 스킬의 핵심 경고 두 가지는 그대로 승계한다.
 *   1) JavaScript `.click()` 절대 금지 — Nexacro/WebSquare2 등록 버튼은
 *      스크립트 click() 호출 시 HTTP 500을 유발할 수 있다. 따라서 이
 *      유틸은 항상 Playwright의 진짜 마우스 클릭(locator.click())만 쓴다.
 *   2) 클릭 후 반드시 결과를 검증한다 — 조용히 실패하는 경우가 있으므로
 *      팝업/그리드 행수/폼 초기화 중 최소 하나로 성공 여부를 확인한다.
 *
 * ⚠️ 2026-07-29 개정 — 팝업 처리 로직을 `ecfs_dialog.js`로 분리했다.
 * 기존에는 `getByRole('button',{name:'확인',exact:true}).first()`로 확인
 * 버튼을 찾았는데, 소장 작성 화면에는 당사자 '표시확인' 버튼
 * (`mf_pfwork_wfm_btprt_btn_btprtIndctCfm`, value="확인")이 팝업과 무관하게
 * 항상 DOM에 있어서 `.first()`가 그 버튼을 집었다. 그 버튼은 팝업 오버레이
 * (`#_modal`) 뒤에 깔려 있으므로 클릭이 30초 타임아웃 나고, 정작 팝업은
 * 닫히지 않아 이후 모든 STEP의 클릭까지 연쇄로 막혔다 — 감사로그에 반복
 * 기록된 STEP2 실패의 실제 원인이다. 이제 `ecfs_dialog.js`가 히트테스트
 * (elementFromPoint)로 "실제로 클릭 가능한" 확인 버튼만 골라 누른다.
 * 자세한 배경은 그 파일 상단 주석 참조.
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const {
  probeDialog,
  closeDialogOnce,
  closeOpenDialogs,
  waitForDialog,
  clearGhostOverlay,
  describeBlockingState,
} = require('./ecfs_dialog');

async function countGridRows(page, gridRowSelector) {
  if (!gridRowSelector) return null;
  try {
    return await page.locator(gridRowSelector).count();
  } catch {
    return null;
  }
}

/**
 * 클릭을 방해할 수 있는 것을 순서대로 치운다.
 *   1) 실제로 열려 있는 대화상자 → 확인을 눌러 정상적으로 닫는다
 *   2) 대화상자는 없는데 남아 있는 빈 오버레이 → pointer-events 차단 해제
 * (1)을 먼저 하는 것이 중요하다. 예전 구현은 (2)만 해서, 팝업이 열려 있는데
 * 배경만 숨기고 팝업은 그대로 남기는 잘못된 상태를 만들었다.
 */
async function clearBlockersBeforeClick(page) {
  const dialogs = await closeOpenDialogs(page, { max: 4 });
  const overlay = await clearGhostOverlay(page);
  return { closedDialogs: dialogs.closedCount, dialogTexts: dialogs.texts, overlay: overlay.reason };
}

/** @deprecated 하위호환용 — 새 코드는 clearBlockersBeforeClick / clearGhostOverlay를 쓴다. */
async function clearStuckModalIfBlocking(page) {
  const r = await clearGhostOverlay(page);
  return r.cleared;
}

/**
 * 열린 팝업의 '확인'만 클릭한다. 팝업이 없으면 아무것도 누르지 않고 false 반환.
 * (이름이 "확인"인 페이지 내장 버튼은 히트테스트에서 걸러진다.)
 */
async function clickPopupConfirm(page, { timeout = 8000 } = {}) {
  const r = await closeDialogOnce(page, { timeout });
  return r.closed;
}

/** @deprecated 하위호환용 별칭 — clickPopupConfirm과 동일하게 동작한다. */
async function dismissPopupIfPresent(page) {
  return clickPopupConfirm(page);
}

/**
 * 열린 대화상자 텍스트에서 오류 팝업 여부를 판정한다.
 * 예전 구현은 `[id*="popup"]` 류를 훑었지만, 실제 대화상자 컨테이너 ID를
 * 추측에 의존하던 부분이라 이제 히트테스트로 찾은 대화상자 텍스트를 쓴다.
 */
async function findVisibleErrorPopup(page, errorPattern = /필수 항목|입력하세요|선택하세요|오류|에러가 발생|실패/) {
  const probe = await probeDialog(page);
  if (!probe.found || !probe.dialogText) return null;
  if (errorPattern.test(probe.dialogText)) {
    return { id: probe.buttonId, text: probe.dialogText };
  }
  return null;
}

/**
 * 등록 버튼을 안전하게 클릭하고 결과를 검증한다.
 *
 * @param {import('playwright').Page} page
 * @param {object} opts
 * @param {string} opts.buttonSelector      등록 버튼 CSS 셀렉터 (예: '#mf_pfwork_wfm_btprt_btn_btprtSave')
 * @param {number} [opts.settleMs=1200]     클릭 전 안정화 대기 (입력/파일첨부 직후 렌더링 지연 대응)
 * @param {number} [opts.postClickWaitMs=1200] 클릭 후 결과 확인 전 대기
 * @param {RegExp} [opts.successPopupPattern]  성공 팝업 텍스트 패턴
 * @param {string} [opts.gridRowSelector]   등록 성공 시 행이 늘어나는 그리드 row 셀렉터 (선택)
 * @param {string} [opts.resetFieldSelector] 등록 성공 시 비워지는 필드 셀렉터 (선택)
 * @param {number} [opts.maxRetries=2]      실패 시 재시도 횟수
 * @param {number} [opts.clickTimeout=12000] 등록 버튼 클릭 1회 타임아웃
 */
async function safeRegisterClick(page, {
  buttonSelector,
  settleMs = 1200,
  postClickWaitMs = 1200,
  successPopupPattern = /등록되었습니다|저장되었습니다|처리되었습니다|수정되었습니다/,
  errorPopupPattern = /필수 항목|입력하세요|선택하세요|오류|에러가 발생|실패/,
  gridRowSelector = null,
  resetFieldSelector = null,
  maxRetries = 2,
  clickTimeout = 12000,
} = {}) {
  if (!buttonSelector) throw new Error('safeRegisterClick: buttonSelector가 필요함');

  const trace = [];

  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    // 1단계: 안정화 — 포커스 해제 후 대기
    await page.evaluate(() => {
      if (document.activeElement) document.activeElement.blur();
    }).catch(() => {});
    await page.waitForTimeout(settleMs);

    const beforeCount = await countGridRows(page, gridRowSelector);

    const btn = page.locator(buttonSelector);
    const btnCount = await btn.count().catch(() => 0);
    if (btnCount === 0) {
      throw new Error(`등록 버튼을 찾지 못함: ${buttonSelector}`);
    }

    // 2단계: 클릭을 막는 요소 정리 — 먼저 열린 팝업을 정상적으로 닫고,
    //         그래도 남은 빈 오버레이만 무력화한다.
    const cleared = await clearBlockersBeforeClick(page);
    if (cleared.closedDialogs > 0) {
      trace.push(`직전 잔존 팝업 ${cleared.closedDialogs}건 닫음: ${cleared.dialogTexts.join(' / ')}`);
    }

    // 3단계: 실제 마우스 클릭 (Playwright가 자동 스크롤 후 클릭)
    let clickError = null;
    try {
      await btn.first().click({ timeout: clickTimeout });
    } catch (e) {
      // 클릭이 막힌 실제 이유를 남긴다 — 예전에는 Timeout 메시지만 남아 추적 불가였다.
      const { summary } = await describeBlockingState(page);
      trace.push(`클릭 1차 실패(${e.message.split('\n')[0]}) — 화면 상태: ${summary}`);
      await clearBlockersBeforeClick(page);
      try {
        await btn.first().click({ timeout: clickTimeout });
      } catch (e2) {
        const after = await describeBlockingState(page);
        clickError = new Error(
          `등록 버튼 클릭 실패(${buttonSelector}): ${e2.message.split('\n')[0]} — 화면 상태: ${after.summary}`
        );
      }
    }
    if (clickError) {
      if (attempt > maxRetries) {
        clickError.trace = trace;
        throw clickError;
      }
      trace.push(`재시도 ${attempt}회차로 진행`);
      continue;
    }

    await page.waitForTimeout(postClickWaitMs);

    // 4단계: 성공 검증 — 등록 결과 팝업을 먼저 확인한다(가장 신뢰도 높음)
    const dialog = await waitForDialog(page, { timeoutMs: 4000 });
    if (dialog.found) {
      const text = dialog.dialogText || '';
      if (successPopupPattern.test(text)) {
        await clickPopupConfirm(page);
        return { ok: true, method: 'popup', attempt, popupText: text, trace };
      }
      if (errorPopupPattern.test(text)) {
        await clickPopupConfirm(page);
        if (attempt > maxRetries) {
          const err = new Error(`등록 실패 (오류 팝업): ${text}`);
          err.trace = trace;
          throw err;
        }
        trace.push(`오류 팝업: ${text} → 재시도`);
        continue;
      }
      // 성공/오류로 분류되지 않는 팝업 — 닫고 다른 방법으로 검증을 이어간다.
      trace.push(`분류되지 않은 팝업: ${text}`);
      await clickPopupConfirm(page);
    } else {
      // 팝업 컨테이너 대신 페이지 본문에 결과 문구가 렌더링되는 경우 대비(폴백)
      const bodyText = await page.locator('body').innerText().catch(() => '');
      if (successPopupPattern.test(bodyText)) {
        return { ok: true, method: 'body_text', attempt, trace };
      }
    }

    if (gridRowSelector) {
      const afterCount = await countGridRows(page, gridRowSelector);
      if (beforeCount !== null && afterCount !== null && afterCount > beforeCount) {
        return { ok: true, method: 'grid_row_increase', attempt, beforeCount, afterCount, trace };
      }
    }

    if (resetFieldSelector) {
      const val = await page.locator(resetFieldSelector).first().inputValue().catch(() => null);
      if (val === '') {
        return { ok: true, method: 'field_reset', attempt, trace };
      }
    }

    if (attempt > maxRetries) {
      const { summary } = await describeBlockingState(page);
      const err = new Error(
        `등록 결과를 검증하지 못함 (팝업/그리드/필드 초기화 모두 확인 안 됨) — 화면 상태: ${summary}`
      );
      err.trace = trace;
      throw err;
    }
    trace.push('결과 검증 실패 — 재시도');
    // 팝업도 없고 화면 변화도 없으면 세션 만료 가능성 — 상위 레이어에서 session-extend 후 재시도하는 것을 권장
  }
}

module.exports = {
  safeRegisterClick,
  countGridRows,
  findVisibleErrorPopup,
  dismissPopupIfPresent,
  clearStuckModalIfBlocking,
  clearBlockersBeforeClick,
  clickPopupConfirm,
  // ecfs_dialog.js 재수출 (호출측이 두 파일을 다 require하지 않아도 되게)
  probeDialog,
  closeOpenDialogs,
  waitForDialog,
  clearGhostOverlay,
  describeBlockingState,
};
