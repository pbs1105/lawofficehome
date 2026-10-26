/**
 * ecfs_dialog.js — 팝업(대화상자) 탐지·닫기 공용 모듈
 * -----------------------------------------------------------------------
 * ⚠️ 이 파일이 왜 생겼는가 (2026-07-29, Phase 5 재분석)
 *
 * 2026-07-21~28 라이브 테스트에서 STEP2(사건기본정보) 이후가 계속
 * `locator.click: Timeout 30000ms` + `<div id="_modal" class="w2modal_popup">
 * intercepts pointer events`로 막혔다. 이를 "유령 모달 배경 잔류"로 진단하고
 * `clearStuckModalIfBlocking`(빈 오버레이 숨김)으로 방어했지만 해결되지 않았다.
 *
 * 감사로그를 다시 읽어보니 실패한 클릭 대상이 매번
 *   getByRole('button', { name:'확인', exact:true }).first()
 *   → <input value="확인" id="mf_pfwork_wfm_btprt_btn_btprtIndctCfm">
 * 였다. 즉 **오버레이가 유령이 아니라, 우리가 오버레이 "뒤에 깔린" 엉뚱한
 * 버튼을 클릭하려 한 것**이다. 소장 작성 화면은 모든 섹션이 한 페이지에
 * 렌더링되므로 당사자 '표시확인' 버튼(value="확인")이 항상 DOM에 있고,
 * `.first()`가 실제 팝업의 확인 버튼보다 이걸 먼저 집는다. 팝업을 못 닫으니
 * 오버레이가 계속 남고, 그래서 그 다음 STEP의 클릭까지 전부 막혔다.
 * → "유령 모달"은 증상이었고, 원인은 확인 버튼 오선택이다.
 *
 * 근본 대책: 이름(value/텍스트)만으로 고르지 않고, **실제로 클릭 가능한지
 * 히트테스트로 확인**한다. `document.elementFromPoint(버튼 중심)`이 그 버튼
 * 자신을 돌려주면 클릭 가능(= 화면 맨 위에 있는 실제 팝업의 버튼)이고,
 * 오버레이(`#_modal`)를 돌려주면 뒤에 깔린 버튼이므로 후보에서 제외한다.
 * 프레임워크(Nexacro/WebSquare2)의 내부 클래스·ID 추측에 의존하지 않는다.
 *
 * ⚠️ 클릭 자체는 항상 Playwright의 진짜 마우스 클릭(locator.click)을 쓴다.
 * JavaScript `.click()`은 Nexacro 등록 버튼에서 HTTP 500을 유발하므로 금지
 * (ecfs_safe_register.js 상단 주석과 동일 원칙). 이 모듈의 evaluate는
 * "어느 버튼을 눌러야 하는지 표시(data 속성)"만 하고 누르지 않는다.
 * -----------------------------------------------------------------------
 */

// 자동으로 눌러도 안전한 버튼 이름 — "확인"만 기본 허용.
// "예"/"아니오"는 삭제·수정 확인처럼 의미가 갈리는 대화상자에 쓰이므로
// 호출측이 명시적으로 허용해야 한다(안전 원칙: 결과가 갈리는 선택은 사람이).
const DEFAULT_CONFIRM_NAMES = ['확인'];
const MARKER_ATTR = 'data-ecfs-confirm';

/**
 * 현재 화면에 실제로 열려 있는 대화상자를 조사한다.
 * 클릭 가능한 확인 버튼을 찾으면 그 요소에 data-ecfs-confirm="1"을 붙여
 * Playwright가 셀렉터로 집을 수 있게 한다(누르지는 않는다).
 *
 * @returns {Promise<{
 *   found: boolean,           // 클릭 가능한 확인 버튼을 찾았는지
 *   label: string|null,       // 그 버튼 이름
 *   buttonId: string|null,
 *   dialogText: string|null,  // 대화상자 본문 텍스트 (성공/오류 판정·감사로그용)
 *   blocked: Array,           // 이름은 맞지만 무언가에 가려진 버튼들 + 가린 요소
 *   overlays: Array,          // 화면에 떠 있는 오버레이 레이어 정보
 * }>}
 */
/**
 * 브라우저 안에서 실행되는 조사 함수 (page.evaluate로 직렬화되어 넘어간다).
 *
 * ⚠️ 이 함수는 **바깥 스코프의 어떤 변수도 참조하지 않는다** — page.evaluate는
 * 함수 소스만 전송하므로 클로저를 쓰면 브라우저에서 ReferenceError가 난다.
 * 동시에, 이렇게 최상위 함수로 분리해 두면 Node에서 가짜 DOM을 주입해
 * 단위 테스트할 수 있다(test_dialog_probe.js 참조) — 실제 포털 로그인 없이
 * "오버레이에 가려진 버튼을 고르지 않는지"를 검증하기 위한 구조다.
 */
function probeDialogInPage({ names, markerAttr }) {
  const norm = (s) => (s || '').replace(/\s+/g, '').trim();
  const wanted = new Set(names.map(norm));

  // 이전 실행이 남긴 표시 제거
  document.querySelectorAll(`[${markerAttr}]`).forEach((el) => el.removeAttribute(markerAttr));

  const describe = (el) => {
    if (!el) return null;
    const cls = typeof el.className === 'string' ? el.className : '';
    return `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${cls ? '.' + cls.trim().split(/\s+/).join('.') : ''}`;
  };

  // 대화상자 컨테이너 추정: 버튼에서 위로 올라가며 position이 fixed/absolute이고
  // 의미 있는 크기를 가진 가장 가까운 조상을 고른다.
  //
  // ⚠️ 이 컨테이너 존재 여부가 "팝업 버튼"과 "페이지에 원래 있는 버튼"을 가르는
  // 결정적 기준이다. 히트테스트만으로는 부족하다 — 팝업이 하나도 안 열린 평상시엔
  // 당사자 '표시확인' 버튼(value="확인")도 당연히 클릭 가능하므로, 그것을 팝업
  // 버튼으로 오인하면 아무 팝업도 없는데 엉뚱한 버튼을 눌러버린다(회귀 테스트
  // test_dialog_probe.js [3]에서 이 위험을 실제로 잡아냈다).
  // 페이지 본문 전체를 감싸는 래퍼를 팝업으로 오인하지 않도록, 소장 작성 폼
  // 앵커(임시저장 버튼)를 품고 있는 컨테이너는 후보에서 제외한다.
  const findDialogBox = (btn) => {
    let el = btn.parentElement;
    let best = null;
    let depth = 0;
    while (el && el !== document.body && depth < 12) {
      const cs = getComputedStyle(el);
      if (cs.position === 'fixed' || cs.position === 'absolute') {
        const r = el.getBoundingClientRect();
        const wrapsMainForm = !!el.querySelector('#mf_pfwork_btn_tmpSave, #mf_pfwork_cbx_agree_input_0');
        if (r.width > 80 && r.height > 40 && !wrapsMainForm) best = el;
      }
      el = el.parentElement;
      depth += 1;
    }
    return best;
  };

  const overlays = Array.from(document.querySelectorAll('#_modal, .w2modal_popup, .w2modal_overlay')).map((el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      selector: describe(el),
      visible: cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && r.height > 0,
      zIndex: cs.zIndex,
      hasContent:
        !!el.querySelector('input,button,a,table,select,textarea') || (el.innerText || '').trim().length > 0,
    };
  });

  const clickables = Array.from(
    document.querySelectorAll('input[type="button"],input[type="submit"],button,a[role="button"]')
  );

  const blocked = [];
  let hit = null;

  for (const btn of clickables) {
    const label = norm(btn.value || btn.innerText || (btn.getAttribute && btn.getAttribute('aria-label')));
    if (!wanted.has(label)) continue;

    const cs = getComputedStyle(btn);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue;
    const r = btn.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;

    const inViewport = r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
    if (!inViewport) {
      // 화면 밖 버튼 — 열린 모달의 버튼일 수 없다(모달은 뷰포트 안에 뜬다).
      blocked.push({ buttonId: btn.id || null, label, reason: 'offscreen' });
      continue;
    }

    const cx = Math.min(Math.max(r.left + r.width / 2, 1), innerWidth - 1);
    const cy = Math.min(Math.max(r.top + r.height / 2, 1), innerHeight - 1);
    const top = document.elementFromPoint(cx, cy);
    const reachable = !!top && (top === btn || btn.contains(top) || top.contains(btn));

    if (!reachable) {
      // 여기가 핵심 — 당사자 '표시확인' 버튼처럼 오버레이 뒤에 깔린 버튼은 제외된다.
      blocked.push({ buttonId: btn.id || null, label, reason: 'covered', blocker: describe(top) });
      continue;
    }

    // 팝업 컨테이너 안의 버튼인지 확인 — 페이지에 원래 있는 '확인' 버튼을
    // 팝업 버튼으로 오인해 함부로 누르지 않기 위한 필수 조건이다.
    const box = findDialogBox(btn);
    if (!box) {
      blocked.push({ buttonId: btn.id || null, label, reason: 'not_in_dialog' });
      continue;
    }

    // 히트테스트 + 팝업 컨테이너 조건을 모두 통과 = 실제로 열린 대화상자의 버튼
    if (!hit) hit = { btn, label, box };
  }

  if (!hit) {
    return { found: false, label: null, buttonId: null, dialogText: null, blocked, overlays };
  }

  hit.btn.setAttribute(markerAttr, '1');
  const dialogText = (hit.box.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 300);

  return { found: true, label: hit.label, buttonId: hit.btn.id || null, dialogText, blocked, overlays };
}

async function probeDialog(page, { names = DEFAULT_CONFIRM_NAMES } = {}) {
  const empty = { found: false, label: null, buttonId: null, dialogText: null, blocked: [], overlays: [] };
  return page
    .evaluate(probeDialogInPage, { names, markerAttr: MARKER_ATTR })
    .catch(() => empty);
}

/**
 * 열린 대화상자를 하나 닫는다(확인 클릭).
 * @returns {Promise<{closed:boolean, dialogText:string|null, buttonId:string|null, probe:object}>}
 */
async function closeDialogOnce(page, { names = DEFAULT_CONFIRM_NAMES, timeout = 8000 } = {}) {
  const probe = await probeDialog(page, { names });
  if (!probe.found) return { closed: false, dialogText: null, buttonId: null, probe };

  const btn = page.locator(`[${MARKER_ATTR}="1"]`).first();
  try {
    await btn.click({ timeout }); // 진짜 마우스 클릭 (JS .click() 금지 원칙 유지)
  } catch (err) {
    // 클릭 순간 대화상자가 스스로 닫혔을 수도 있으므로 재조사로 판정한다.
    const after = await probeDialog(page, { names });
    if (after.found) {
      return { closed: false, dialogText: probe.dialogText, buttonId: probe.buttonId, probe, error: err.message };
    }
  }
  await page.waitForTimeout(400);
  return { closed: true, dialogText: probe.dialogText, buttonId: probe.buttonId, probe };
}

/**
 * 남아 있는 대화상자를 최대 max개까지 연달아 닫는다.
 * 실행 시작 시점(preflight)과 등록 클릭 직전에 호출해, 이전 단계에서 닫히지
 * 않은 팝업 때문에 이후 클릭이 전부 막히는 연쇄 실패를 끊는다.
 *
 * @returns {Promise<{closedCount:number, texts:string[], remaining:object|null}>}
 */
async function closeOpenDialogs(page, { names = DEFAULT_CONFIRM_NAMES, max = 4, timeout = 6000 } = {}) {
  const texts = [];
  let closedCount = 0;
  for (let i = 0; i < max; i += 1) {
    const r = await closeDialogOnce(page, { names, timeout });
    if (!r.closed) {
      return { closedCount, texts, remaining: r.probe.found ? r.probe : null };
    }
    closedCount += 1;
    if (r.dialogText) texts.push(r.dialogText);
  }
  const last = await probeDialog(page, { names });
  return { closedCount, texts, remaining: last.found ? last : null };
}

/**
 * 열린 대화상자가 나타날 때까지 기다린다(성공 팝업 확인 등에 사용).
 */
async function waitForDialog(page, { names = DEFAULT_CONFIRM_NAMES, timeoutMs = 5000, pollMs = 300 } = {}) {
  const deadline = Date.now() + timeoutMs;
  let last = { found: false };
  while (Date.now() < deadline) {
    last = await probeDialog(page, { names });
    if (last.found) return last;
    await page.waitForTimeout(pollMs);
  }
  return last;
}

/**
 * 진짜 "유령 오버레이"만 무력화한다.
 *
 * ⚠️ 이전 구현의 버그: `#_modal`은 내용이 비어 있는 것이 **정상**이다
 * (대화상자 본문은 형제 요소로 따로 렌더링된다). 그래서 "내용이 비었으면
 * 유령"이라는 판정은 **실제 팝업이 열려 있을 때도 배경을 숨겨버려**,
 * 팝업은 그대로 남은 채 상태만 더 꼬이게 만들었다.
 *
 * 새 판정: 클릭 가능한 대화상자 버튼이 하나라도 있으면(= 팝업이 실제로 열려
 * 있으면) 오버레이는 절대 건드리지 않는다. 팝업이 없는데 오버레이만 남아
 * 클릭을 가로막는 경우에만 pointer-events를 끊는다.
 *
 * @returns {Promise<{cleared:boolean, reason:string}>}
 */
async function clearGhostOverlay(page, { names = DEFAULT_CONFIRM_NAMES } = {}) {
  const probe = await probeDialog(page, { names });
  if (probe.found) {
    return { cleared: false, reason: 'dialog_open' }; // 실제 팝업 있음 — 먼저 닫아야 한다
  }
  const hasVisibleOverlay = probe.overlays.some((o) => o.visible);
  if (!hasVisibleOverlay) return { cleared: false, reason: 'no_overlay' };

  // 내용 있는 오버레이(=실제 대화상자를 담고 있는 레이어)는 제외하고,
  // 비어 있는 배경 레이어만 클릭 통과되도록 무력화한다.
  const cleared = await page.evaluate(clearGhostOverlayInPage).catch(() => false);

  return { cleared, reason: cleared ? 'ghost_overlay_cleared' : 'nothing_to_clear' };
}

/** 브라우저 안에서 실행 — 바깥 스코프 참조 금지 (probeDialogInPage와 같은 이유). */
function clearGhostOverlayInPage() {
  const layers = Array.from(document.querySelectorAll('#_modal, .w2modal_popup, .w2modal_overlay'));
  let n = 0;
  for (const el of layers) {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    const visible = cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && r.height > 0;
    if (!visible) continue;
    const hasContent =
      !!el.querySelector('input,button,a,table,select,textarea') || (el.innerText || '').trim().length > 0;
    if (hasContent) continue;
    el.style.pointerEvents = 'none';
    el.style.display = 'none';
    n += 1;
  }
  return n > 0;
}

/**
 * 클릭이 막혔을 때 원인을 사람이 읽을 수 있는 문장으로 만든다(감사로그·에러 메시지용).
 * 지금까지 감사로그에 `Timeout 30000ms`만 남아 원인 추적이 불가능했던 문제를 보완한다.
 */
async function describeBlockingState(page) {
  const probe = await probeDialog(page, { names: ['확인', '예', '아니오', '취소', '닫기'] });
  const parts = [];
  if (probe.found) {
    parts.push(`열린 대화상자: "${probe.dialogText || '(텍스트 없음)'}" (버튼 ${probe.label}/${probe.buttonId || 'id없음'})`);
  }
  const coveredList = probe.blocked.filter((b) => b.reason === 'covered');
  if (coveredList.length) {
    parts.push(
      `가려진 버튼: ${coveredList.map((b) => `${b.label}(${b.buttonId || 'id없음'})←${b.blocker}`).join(', ')}`
    );
  }
  const visibleOverlays = probe.overlays.filter((o) => o.visible);
  if (visibleOverlays.length) {
    parts.push(
      `표시중 오버레이: ${visibleOverlays.map((o) => `${o.selector}[z=${o.zIndex},내용${o.hasContent ? '있음' : '없음'}]`).join(', ')}`
    );
  }
  if (!parts.length) parts.push('열린 대화상자·오버레이 없음');
  return { summary: parts.join(' | '), probe };
}

module.exports = {
  DEFAULT_CONFIRM_NAMES,
  MARKER_ATTR,
  // 단위 테스트용 노출 (브라우저 안에서 도는 순수 함수 — test_dialog_probe.js가 가짜 DOM으로 검증)
  probeDialogInPage,
  clearGhostOverlayInPage,
  probeDialog,
  closeDialogOnce,
  closeOpenDialogs,
  waitForDialog,
  clearGhostOverlay,
  describeBlockingState,
};
