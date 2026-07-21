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
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

/**
 * ⚠️ Phase 5 라이브 테스트에서 발견된 2번째 버그(2026-07-21): 소장 작성 화면에서
 * 팝업을 여러 번 빠르게 열고 닫다 보면(자동화가 필드를 빠르게 채우고 등록을
 * 연타하는 상황), ECFS 포털 자체의 모달 배경(`#_modal`)이 실제 팝업 내용은
 * 사라졌는데 배경 레이어만 화면에 남아 이후의 모든 클릭을 막아버리는 현상이
 * 재현됐다 — 페이지를 눈으로 봐도 아무 팝업이 안 보이는데 클릭은 계속
 * "intercepts pointer events"로 실패한다. Playwright의 클릭 자체가 30초간
 * 멈추므로, 클릭을 시도하기 "전에" 이 유령 배경이 있는지 확인하고 치우는
 * 방어 로직을 추가한다. ESC 키로 안 사라지면(실제 콘텐츠 없는 배경 잔재로
 * 판단되면) 마지막 수단으로 배경 요소만 숨긴다 — 이는 어떤 버튼도 클릭하지
 * 않는 순수 표시 정리이므로 "JavaScript .click() 금지" 원칙과 무관하다.
 * ⚠️ 아직 실사건 환경에서 반복 검증은 안 됨 — 최초 발견 후 1회 임시 조치.
 */
async function clearStuckModalIfBlocking(page) {
  const modal = page.locator('#_modal');
  const count = await modal.count().catch(() => 0);
  if (count === 0) return false;

  const isBlocking = () =>
    modal
      .evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetWidth > 0 && el.offsetHeight > 0;
      })
      .catch(() => false);

  if (!(await isBlocking())) return false;

  await page.keyboard.press('Escape').catch(() => {});
  await page.waitForTimeout(300);

  if (await isBlocking()) {
    // 콘텐츠 없는 유령 배경으로 판단 — 표시만 숨김(버튼 클릭 아님)
    await modal.evaluate((el) => { el.style.display = 'none'; }).catch(() => {});
  }
  return true;
}

async function countGridRows(page, gridRowSelector) {
  if (!gridRowSelector) return null;
  try {
    return await page.locator(gridRowSelector).count();
  } catch {
    return null;
  }
}

async function findVisibleErrorPopup(page, errorPattern = /필수 항목|오류|에러가 발생/) {
  const candidates = page.locator('[id*="popup"], [id*="modal"], [id*="dialog"], [id*="alert"]');
  const count = await candidates.count().catch(() => 0);
  for (let i = 0; i < count; i++) {
    const el = candidates.nth(i);
    const visible = await el.isVisible().catch(() => false);
    if (!visible) continue;
    const text = (await el.innerText().catch(() => '')) || '';
    if (errorPattern.test(text)) {
      return { id: await el.getAttribute('id').catch(() => null), text: text.slice(0, 200) };
    }
  }
  return null;
}

/**
 * ⚠️ Phase 5 라이브 테스트에서 발견된 버그 수정 (2026-07-21)
 * ecfs.scourt.go.kr의 "소장" 작성 화면은 사건기본정보·당사자·청구취지·
 * 청구원인·입증서류·첨부서류 등 모든 섹션이 하나의 긴 페이지에 함께
 * 렌더링된다(좌측 메뉴는 그 안에서의 스크롤 앵커일 뿐, 별도 화면 전환이
 * 아님). 따라서 `getByRole('button', { name: /확인/ })`처럼 정규식으로
 * "확인"을 부분일치시키면, 지금 다루는 팝업과 무관한 "사용자정보확인"
 * (당사자 섹션) 같은 버튼까지 같이 걸려 엉뚱한 요소를 클릭하게 된다.
 * 실제로 사건기본정보 등록 팝업을 닫으려다 당사자 섹션의 "사용자정보확인"
 * 버튼을 클릭 시도해, 모달 배경(#_modal)에 가려 클릭이 30초간 멈추는
 * 현상이 라이브 테스트에서 재현됐다. 정확히 "확인"이라는 이름의 버튼만
 * 골라야 하므로 정규식 대신 exact:true 문자열 매칭을 쓴다.
 */
async function dismissPopupIfPresent(page, buttonName = '확인') {
  const btn = page.getByRole('button', { name: buttonName, exact: true });
  const count = await btn.count().catch(() => 0);
  if (count === 0) return false;
  const visible = await btn.first().isVisible().catch(() => false);
  if (!visible) return false;
  await btn.first().click();
  await page.waitForTimeout(400);
  return true;
}

/**
 * 등록 버튼을 안전하게 클릭하고 결과를 검증한다.
 *
 * @param {import('playwright').Page} page
 * @param {object} opts
 * @param {string} opts.buttonSelector      등록 버튼 CSS 셀렉터 (예: '#mf_pfwork_wfm_btprt_btn_btprtSave')
 * @param {number} [opts.settleMs=1200]     클릭 전 안정화 대기 (입력/파일첨부 직후 렌더링 지연 대응)
 * @param {number} [opts.postClickWaitMs=1500] 클릭 후 결과 확인 전 대기
 * @param {RegExp} [opts.successPopupPattern]  성공 팝업 텍스트 패턴
 * @param {string} [opts.gridRowSelector]   등록 성공 시 행이 늘어나는 그리드 row 셀렉터 (선택)
 * @param {string} [opts.resetFieldSelector] 등록 성공 시 비워지는 필드 셀렉터 (선택)
 * @param {number} [opts.maxRetries=2]      실패 시 재시도 횟수
 */
async function safeRegisterClick(page, {
  buttonSelector,
  settleMs = 1200,
  postClickWaitMs = 1500,
  successPopupPattern = /등록되었습니다|저장되었습니다|처리되었습니다/,
  gridRowSelector = null,
  resetFieldSelector = null,
  maxRetries = 2,
} = {}) {
  if (!buttonSelector) throw new Error('safeRegisterClick: buttonSelector가 필요함');

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

    // 클릭 시도 전 유령 모달 배경 확인/정리 (Phase 5에서 발견된 버그 방어)
    await clearStuckModalIfBlocking(page);

    // 2~3단계: Playwright locator.click()이 자동 스크롤 + 실제 마우스 클릭 수행
    await btn.first().click();
    await page.waitForTimeout(postClickWaitMs);

    // 4단계: 성공 검증 (팝업 → 그리드 행수 → 필드 초기화 순으로 확인)
    const successPopup = page.getByText(successPopupPattern).first();
    const popupVisible = await successPopup.isVisible().catch(() => false);
    if (popupVisible) {
      await dismissPopupIfPresent(page);
      return { ok: true, method: 'popup', attempt };
    }

    if (gridRowSelector) {
      const afterCount = await countGridRows(page, gridRowSelector);
      if (beforeCount !== null && afterCount !== null && afterCount > beforeCount) {
        return { ok: true, method: 'grid_row_increase', attempt, beforeCount, afterCount };
      }
    }

    if (resetFieldSelector) {
      const val = await page.locator(resetFieldSelector).first().inputValue().catch(() => null);
      if (val === '') {
        return { ok: true, method: 'field_reset', attempt };
      }
    }

    // 5단계: 실패 — 에러 팝업 확인 후 재시도 여부 결정
    const errorPopup = await findVisibleErrorPopup(page);
    if (errorPopup) {
      await dismissPopupIfPresent(page);
      if (attempt > maxRetries) {
        throw new Error(`등록 실패 (에러 팝업): ${errorPopup.text}`);
      }
      continue; // 재시도
    }

    if (attempt > maxRetries) {
      throw new Error('등록 결과를 검증하지 못함 (팝업/그리드/필드 초기화 모두 확인 안 됨) — 화면 직접 확인 필요');
    }
    // 팝업도 없고 화면 변화도 없으면 세션 만료 가능성 — 상위 레이어에서 session-extend 후 재시도하는 것을 권장
  }
}

module.exports = {
  safeRegisterClick,
  countGridRows,
  findVisibleErrorPopup,
  dismissPopupIfPresent,
  clearStuckModalIfBlocking,
};
