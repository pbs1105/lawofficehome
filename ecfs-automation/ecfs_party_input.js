/**
 * ecfs_party_input.js
 * -----------------------------------------------------------------------
 * 전자소송포털(ecfs.scourt.go.kr) "당사자 정보 입력" 섹션 Playwright 자동화 파일럿
 *
 * 근거 문서: ecfs-party-input SKILL.md (Claude computer-use 스킬에서 실측된
 * DOM ID·주입 로직을 그대로 이식). 좌표클릭이 아닌 실제 Playwright locator
 * click을 사용하므로 스킬 문서의 "JavaScript .click() 금지" 규칙은 해당 없음
 * — Playwright의 click()은 실제 마우스 이벤트를 디스패치하는 trusted event라
 *   Nexacro가 이를 정상적으로 인식한다.
 *
 * ⚠️ 안전 경계 (LOAS 프로젝트 원칙과 동일하게 유지)
 *   - 인증서 로그인은 이 스크립트가 하지 않는다. 직원이 먼저 수동으로
 *     로그인한 브라우저에 CDP로 "붙는(attach)" 방식만 지원한다.
 *   - 등록(저장) 버튼까지만 자동화한다. 최종 제출·전자서명은 이 스크립트의
 *     범위 밖이며, 항상 직원이 화면에서 최종 확인 후 별도로 진행해야 한다.
 *
 * ⚠️ 미검증 상태
 *   실제 ecfs.scourt.go.kr 라이브 세션에 대해 아직 테스트되지 않았다.
 *   스킬 문서에 기록된 DOM ID·이벤트 패턴을 그대로 옮긴 초안이며,
 *   포털 UI가 스킬 작성 시점 이후 바뀌었을 가능성을 배제할 수 없다.
 *   실행 전 반드시 테스트 사건으로 1회 검증할 것.
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const { chromium } = require('playwright');
// 등록 클릭·팝업 처리는 safeRegisterClick으로 통일 (ecfs_safe_register.js 상단 주석 참조).
// 순환 참조를 피하려고 사용 지점에서 lazy require 한다.

// -------------------------------------------------------------------------
// 0. 브라우저 연결 (직원이 이미 인증서로 로그인해 둔 Chrome에 CDP로 attach)
// -------------------------------------------------------------------------
//
// 사전 준비 (직원 PC에서):
//   1) Chrome을 디버깅 포트로 실행:
//      chrome.exe --remote-debugging-port=9222
//   2) 그 창에서 ecfs.scourt.go.kr에 인증서로 수동 로그인
//   3) 이 스크립트를 그 상태에서 실행
//
// ⚠️ 2026-07-29 개정 — 탭 선택이 잘못될 수 있던 문제를 고쳤다.
// 예전 구현은 (1) `browser.contexts()[0]`만 봐서 다른 컨텍스트(별도 창/프로필)의
// 탭을 놓쳤고, (2) ecfs 탭이 없으면 **엉뚱한 탭(첫 번째 탭)으로 폴백**해서
// 그 탭에서 앵커를 못 찾고 15초 타임아웃 → EMERGENCY_TEMP_SAVE도 "[임시저장]
// 버튼을 찾지 못함"으로 실패하는 흐름이 감사로그(2026-07-27 1회차)에 남아 있다.
// 이제 ecfs 탭만 대상으로 하고, 그중 실제 작성 화면(임시저장 버튼)이나 동의
// 화면(동의 체크박스)이 있는 탭을 우선한다. 없으면 폴백하지 않고 명확히 실패한다.
async function attachToExistingBrowser(cdpEndpoint = 'http://localhost:9222') {
  const browser = await chromium.connectOverCDP(cdpEndpoint);
  const allPages = browser.contexts().flatMap((c) => c.pages());
  const ecfsPages = allPages.filter((p) => p.url().includes('ecfs.scourt.go.kr'));

  if (ecfsPages.length === 0) {
    const opened = allPages.map((p) => p.url()).slice(0, 8).join(', ') || '(열린 탭 없음)';
    throw new Error(
      `ecfs.scourt.go.kr 탭을 찾지 못했습니다. 직원이 인증서로 로그인한 뒤 소장 작성 화면을 열어두었는지 확인하세요. 현재 열린 탭: ${opened}`
    );
  }

  // 작성 화면/동의 화면이 실제로 렌더링된 탭을 우선 선택 (여러 ecfs 탭이 열려 있을 때 오작동 방지)
  for (const p of ecfsPages) {
    const ready = await p
      .evaluate(() => !!document.getElementById('mf_pfwork_btn_tmpSave') || !!document.getElementById('mf_pfwork_cbx_agree_input_0'))
      .catch(() => false);
    if (ready) return { browser, page: p };
  }

  // 어느 탭에도 작성(임시저장)·동의 요소가 렌더되지 않았을 때의 폴백.
  // 이때 무조건 ecfsPages[0]을 잡으면, 먼저 열린 "포털 홈(환영합니다 / index.on)"
  // 탭을 붙잡아 preflight가 "전자소송 동의 화면이 아닙니다"로 오인식하는 문제가 생긴다.
  // → 포털 홈 탭(제목에 '환영합니다' 또는 쿼리스트링 없는 index.on)은 폴백 대상에서 제외하고
  //    소장 작성류 탭(예: index.on?m=PSPA13M01&s=...)을 우선 선택한다.
  const isPortalHome = async (p) => {
    const info = await p
      .evaluate(() => ({ title: document.title || '', hasQuery: location.search.length > 0 }))
      .catch(() => ({ title: '', hasQuery: true }));
    return /환영합니다/.test(info.title) || !info.hasQuery;
  };
  for (const p of ecfsPages) {
    if (!(await isPortalHome(p))) return { browser, page: p };
  }

  return { browser, page: ecfsPages[0] };
}

// -------------------------------------------------------------------------
// 1. 앵커 확보 — "당사자 기본정보" 텍스트가 보일 때까지 대기
// -------------------------------------------------------------------------
async function waitForAnchor(page, text = '당사자 기본정보', timeoutMs = 15000) {
  // 실측(inspect_party_dom.js): 소장 화면은 모든 섹션이 한 페이지에 렌더링되고,
  // 당사자 섹션 표제의 실제 DOM 텍스트가 "당사자기본정보 입력"처럼 공백이 달라
  // getByText('당사자 기본정보')가 영구히 빗나가 15초 타임아웃이 났다(STEP4 반복 실패의 진짜 원인).
  // → 안정적인 당사자 등록 버튼(id)의 등장을 1차 기준으로 삼고, 실패 시 공백을 무시한 텍스트로 폴백한다.
  try {
    await page
      .locator('#mf_pfwork_wfm_btprt_btn_btprtSave')
      .first()
      .waitFor({ state: 'visible', timeout: timeoutMs });
    return;
  } catch (primaryErr) {
    const compact = String(text).replace(/\s+/g, '');
    const re = new RegExp(
      compact.split('').map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s*')
    );
    await page.getByText(re).first().waitFor({ state: 'visible', timeout: 3000 });
  }
}

// -------------------------------------------------------------------------
// 2. 당사자 구분 선택 (원고 / 피고 라디오)
// -------------------------------------------------------------------------
// 본안(원고/피고)·가처분(신청인/피신청인)·가압류(채권자/채무자)는 명칭만 다르고 실질 동일하므로,
// 어느 라벨이 화면에 있든 같은 '쪽'의 라디오를 선택하도록 별칭을 둔다.
const ROLE_ALIASES = {
  원고: ['원고', '신청인', '채권자'],
  피고: ['피고', '피신청인', '채무자'],
};
function rolesFor(role) {
  if (ROLE_ALIASES.원고.includes(role)) return ROLE_ALIASES.원고;
  if (ROLE_ALIASES.피고.includes(role)) return ROLE_ALIASES.피고;
  return [role];
}

async function selectPartyRole(page, role /* '원고'|'피고'|'신청인'|'피신청인'|'채권자'|'채무자' */) {
  const candidates = rolesFor(role);
  for (const name of candidates) {
    const radio = page.getByRole('radio', { name, exact: true }).first();
    if (await radio.count().catch(() => 0)) {
      await radio.click();
      await page.waitForTimeout(500);
      return;
    }
  }
  throw new Error(`당사자 구분 라디오를 찾지 못함: "${role}" (후보: ${candidates.join('/')})`);
}

// -------------------------------------------------------------------------
// 유틸: Nexacro 바인딩 텍스트 입력 — execCommand('insertText') 방식
//   native value setter는 HTTP 500을 유발하므로 반드시 이 방식을 사용한다.
//   (스킬 문서 핵심 교훈 그대로 이식)
// -------------------------------------------------------------------------
async function fillViaExecCommand(page, elementId, value) {
  await page.evaluate(({ id, val }) => {
    const el = document.getElementById(id);
    if (!el) throw new Error(`요소를 찾을 수 없음: ${id}`);
    // 일부 입력칸(주소검색 모달 등)에서 el.select()가 "Illegal invocation"을 던져 흐름이 죽는 문제 방지 — 안전 가드.
    try { el.focus(); } catch (_) { /* noop */ }
    try { if (typeof el.select === 'function') el.select(); } catch (_) { /* noop */ }
    let ok = false;
    try { ok = document.execCommand('insertText', false, val); } catch (_) { ok = false; }
    if (!ok && 'value' in el) {
      // execCommand가 안 먹는 칸 폴백: 값 직접 설정 + input/change 이벤트
      el.value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, { id: elementId, val: value });
}

// 유틸: native setter + change 이벤트 (연락처·이메일류 필드)
async function fillViaNativeSetter(page, elementId, value) {
  await page.evaluate(({ id, val }) => {
    const el = document.getElementById(id);
    if (!el) throw new Error(`요소를 찾을 수 없음: ${id}`);
    // 요소 종류에 맞는 value setter를 써야 한다. <input>의 setter를 <select>/<textarea>에
    // .call()하면 "Illegal invocation"이 난다(연락처 국번 등 드롭다운에서 발생).
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype
      : el instanceof HTMLSelectElement ? HTMLSelectElement.prototype
      : HTMLInputElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    try {
      if (desc && desc.set) desc.set.call(el, val);
      else el.value = val;
    } catch (_) {
      el.value = val;
    }
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, { id: elementId, val: value });
}

// -------------------------------------------------------------------------
// 3. 원고(채권자·신청인) — 항상 비회원 직접 입력 (예외 없음)
// -------------------------------------------------------------------------
const FIELD_IDS = {
  비회원체크박스: 'mf_pfwork_wfm_btprt_cbx_nmbrs_input_0',
  주민번호앞자리: 'mf_pfwork_wfm_btprt_ibx_btprtEnrrno',
  주민번호뒷자리: 'mf_pfwork_wfm_btprt_ibx_btprtEnrrno2',
  이름: 'mf_pfwork_wfm_btprt_ibx_btprtNm',
  우편번호찾기버튼: 'mf_pfwork_wfm_btprt_btn_findZpcd',
  송달영수인ID: 'mf_pfwork_wfm_btprt_ibx_rcpsElpUserId',
  송달영수인확인버튼: 'mf_pfwork_wfm_btprt_btn_confirmRcpsElpUserId',
  휴대전화국번: 'mf_pfwork_wfm_btprt_sbx_mblTelno',
  휴대전화중간: 'mf_pfwork_wfm_btprt_ibx_mblTelno2',
  휴대전화끝: 'mf_pfwork_wfm_btprt_ibx_mblTelno3',
  전화번호국번: 'mf_pfwork_wfm_btprt_sbx_telno',
  전화번호중간: 'mf_pfwork_wfm_btprt_ibx_telno2',
  전화번호끝: 'mf_pfwork_wfm_btprt_ibx_telno3',
  팩스국번: 'mf_pfwork_wfm_btprt_sbx_workPlcFaxno',
  팩스중간: 'mf_pfwork_wfm_btprt_ibx_workPlcFaxno2',
  팩스끝: 'mf_pfwork_wfm_btprt_ibx_workPlcFaxno3',
  이메일앞: 'mf_pfwork_wfm_btprt_ibx_emlAddr',
  이메일도메인: 'mf_pfwork_wfm_btprt_sbx_emlAddr',
  등록버튼: 'mf_pfwork_wfm_btprt_btn_btprtSave',
  인격구분: 'mf_pfwork_wfm_btprt_sbx_btprtPrsnlDvsCd',
  대표자구분: 'mf_pfwork_wfm_btprt_sbx_rprsStndngNm',
  대표자성명: 'mf_pfwork_wfm_btprt_ibx_orgnzRprsNm',
  // 법인 전용 번호 필드 (2026-08 브라우저 실측 확정)
  //  · 원고 법인: 사업자등록번호(3-2-5)가 필수 → ibx_bzno/2/3 (인격구분=법인 선택 시 노출)
  //  · 피고 법인: 법인등록번호(6-7)가 필수 → ibx_crno/crno2 (cbx_crnoIndctYn 체크 시 노출)
  //  ※ 과거 코드가 쓰던 btprtEnrrno(주민번호 칸)는 법인에서 숨겨져 있어 오답이었다.
  사업자번호앞: 'mf_pfwork_wfm_btprt_ibx_bzno',
  사업자번호중간: 'mf_pfwork_wfm_btprt_ibx_bzno2',
  사업자번호끝: 'mf_pfwork_wfm_btprt_ibx_bzno3',
  법인번호앞: 'mf_pfwork_wfm_btprt_ibx_crno',
  법인번호끝: 'mf_pfwork_wfm_btprt_ibx_crno2',
  법인번호표시체크박스: 'mf_pfwork_wfm_btprt_cbx_crnoIndctYn_input_0',
};

// 비회원 체크박스 — 반드시 실제 클릭 (JS로 checked=true 설정 시 이름 필드가 disabled로 남음)
//    WebSquare 체크박스는 실제 <input>이 가려져 있어 요소 직접 클릭이 토글을 못 하는 경우가 있다.
//    → 오버레이 제거 후, (a)요소클릭 (b)좌표 마우스클릭 (c)감싼 컨테이너 클릭 (d)force클릭 순으로
//      최대 4회 시도하고 매번 검증한다. 성공 기준: checked=true, nameDisabled=false.
async function ensureNonMemberChecked(page) {
  const { clearBlockersBeforeClick } = require('./ecfs_safe_register');
  const checkbox = page.locator(`#${FIELD_IDS.비회원체크박스}`);
  await checkbox.scrollIntoViewIfNeeded();

  const verify = () => page.evaluate(() => ({
    checked: !!document.getElementById('mf_pfwork_wfm_btprt_cbx_nmbrs_input_0')?.checked,
    nameDisabled: !!document.getElementById('mf_pfwork_wfm_btprt_ibx_btprtNm')?.disabled,
  }));

  let state = await verify();
  for (let attempt = 1; attempt <= 4 && (!state.checked || state.nameDisabled); attempt += 1) {
    await clearBlockersBeforeClick(page); // 잔류 팝업/빈 오버레이가 클릭을 가로막지 않도록 먼저 정리
    try {
      if (attempt === 1) {
        await checkbox.click({ timeout: 4000 });
      } else if (attempt === 2) {
        const box = await checkbox.boundingBox();
        if (box) await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      } else if (attempt === 3) {
        await page.locator(`#${FIELD_IDS.비회원체크박스}`).locator('xpath=..').click({ timeout: 4000 });
      } else {
        await checkbox.click({ force: true, timeout: 4000 });
      }
    } catch (_) { /* 이 방식 실패 → 다음 방식으로 */ }
    await page.waitForTimeout(500);
    state = await verify();
  }
  if (!state.checked || state.nameDisabled) {
    throw new Error(`비회원 체크박스 처리 실패(4회 시도): ${JSON.stringify(state)}`);
  }
}

// 법인등록번호(ibx_crno/crno2) 칸을 노출한다. 인격구분=법인이면 사업자등록번호 칸은 기본
// 노출되지만 법인등록번호 칸은 '제출문서에 보임'(cbx_crnoIndctYn)을 켜야 나타난다.
// 실측: JS로 checked만 바꾸면 칸이 안 열릴 수 있어 실제 클릭한다.
async function ensureCorpNoFieldShown(page) {
  const id = FIELD_IDS.법인번호표시체크박스;
  const already = await page.evaluate((i) => !!document.getElementById(i)?.checked, id).catch(() => false);
  if (already) return;
  const cb = page.locator(`#${id}`);
  await cb.scrollIntoViewIfNeeded().catch(() => {});
  try {
    await cb.click({ timeout: 4000 });
  } catch (_) {
    const box = await cb.boundingBox().catch(() => null);
    if (box) await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  }
  await page.waitForTimeout(400);
}

// 원고 자연인 비회원 — 비회원 체크 후 이름·주민번호 입력.
async function fillPlaintiffNonMember(page, { name, ssnFront, ssnBack }) {
  await ensureNonMemberChecked(page);
  await fillViaExecCommand(page, FIELD_IDS.주민번호앞자리, ssnFront);
  await fillViaExecCommand(page, FIELD_IDS.주민번호뒷자리, ssnBack);
  await fillViaExecCommand(page, FIELD_IDS.이름, name);
}

// 원고 법인(단체) 비회원 — 2026-08 브라우저 실측으로 재작성.
// 원고가 법인이면 ECFS는 사업자등록번호(3-2-5)를 필수로 요구한다(법인등록번호는 임의).
//  1) 비회원 체크 → 2) 인격구분=법인 → 3) 사업자등록번호(ibx_bzno/2/3) 필수 입력
//  4) (있으면) 법인등록번호(ibx_crno/crno2, 표시 체크 후) → 5) 상호 → 6) 대표자 → 7) DataList 주입
// bizRegNo(10자리)·corpRegNo(13자리)는 payload에서 온다.
async function fillPlaintiffOrg(page, { orgName, representativeType, representativeName, bizRegNo, corpRegNo, personType = '법인' }) {
  await ensureNonMemberChecked(page);

  // 인격구분 = 법인 (이후 필드가 리셋될 수 있으므로 가장 먼저)
  await page.evaluate((val) => {
    const el = document.getElementById('mf_pfwork_wfm_btprt_sbx_btprtPrsnlDvsCd');
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, personType);
  await page.waitForTimeout(500);

  // 사업자등록번호(3-2-5) — 원고 법인 필수
  const biz = String(bizRegNo || '').replace(/[^0-9]/g, '');
  if (biz.length === 10) {
    await fillViaExecCommand(page, FIELD_IDS.사업자번호앞, biz.slice(0, 3));
    await fillViaExecCommand(page, FIELD_IDS.사업자번호중간, biz.slice(3, 5));
    await fillViaExecCommand(page, FIELD_IDS.사업자번호끝, biz.slice(5));
  } else {
    throw new Error(`원고 법인 '${orgName}' 사업자등록번호 누락/형식오류(값="${bizRegNo || ''}") — ECFS 법인 원고는 사업자등록번호(10자리)가 필수입니다. admin에서 입력 후 재실행하세요.`);
  }

  // 법인등록번호(6-7) — 원고는 임의. 있으면 표시 체크박스를 켜고 입력.
  const corp = String(corpRegNo || '').replace(/[^0-9]/g, '');
  if (corp.length === 13) {
    await ensureCorpNoFieldShown(page);
    await fillViaExecCommand(page, FIELD_IDS.법인번호앞, corp.slice(0, 6));
    await fillViaExecCommand(page, FIELD_IDS.법인번호끝, corp.slice(6));
  }

  // 상호 — 화면 입력
  await fillViaExecCommand(page, FIELD_IDS.이름, orgName);

  // 대표자 구분 + 성명 (드롭다운 변경 시 성명 필드가 초기화되므로 반드시 이 순서)
  if (representativeType) {
    await page.evaluate((val) => {
      const el = document.getElementById('mf_pfwork_wfm_btprt_sbx_rprsStndngNm');
      el.value = val;
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }, representativeType);
  }
  if (representativeName) await fillViaExecCommand(page, FIELD_IDS.대표자성명, representativeName);

  // ⚠️ 필수: 등록 직전 Nexacro DataList에 강제 주입 (상호 + 인격구분 — 안 하면 HTTP 500 위험)
  await page.evaluate((name) => {
    const dlt = window.mf_pfwork_wfm_btprt_dlt_btprtListCp;
    if (dlt) {
      dlt.setCellData(0, 'btprtNm', name);
      try { dlt.setCellData(0, 'btprtPrsnlDvsCd', '법인'); } catch (e) { /* 컬럼 없으면 무시 */ }
    }
  }, orgName);
}

// -------------------------------------------------------------------------
// 4. 주소 입력 — 우편번호 찾기 팝업 (Playwright popup 이벤트로 새 창 처리)
// -------------------------------------------------------------------------
async function fillAddress(page, { sido, sigungu, roadName, buildingMain, buildingSub }) {
  // 실측(감사로그) 확정: 우편번호 찾기는 화면 안 모달 #...PSP012P01(w2popup_window)로 뜬다(새 창 아님).
  // 과거 실패 2종: (1) 검색 결과 행이 안 떠 행 클릭이 30초 타임아웃, (2) 이전 시도의 모달이 안 닫혀
  // 다음 클릭을 가로막음. → 남은 모달 먼저 닫기 → 새로 열기 → 검색 → 결과 행 대기 → 없으면 입력값을
  // 담아 실패(감사로그로 원인 확인) 순으로 재작성.
  const P = 'mf_pfwork_wfm_btprt_PSP012P01_wframe_';
  const MODAL = 'mf_pfwork_wfm_btprt_PSP012P01';
  const ROW = `${P}grd_raddr_button_0_2`;
  const { clearBlockersBeforeClick } = require('./ecfs_safe_register');

  const isVisibleId = (id) => page.evaluate((i) => {
    const el = document.getElementById(i); if (!el) return false;
    const r = el.getBoundingClientRect(); const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.display !== 'none' && s.visibility !== 'hidden';
  }, id).catch(() => false);

  const closeModal = async () => {
    await page.locator(`#${P}btnCloseT1`).click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(300);
    if (await isVisibleId(MODAL)) { await page.keyboard.press('Escape').catch(() => {}); await page.waitForTimeout(300); }
  };

  // 0) 이전 시도에서 남은 주소검색 모달이 열려 있으면 먼저 닫는다(다음 클릭 차단 방지)
  if (await isVisibleId(MODAL)) await closeModal();

  // 1) 우편번호 찾기 열기
  await clearBlockersBeforeClick(page);
  await page.locator(`#${FIELD_IDS.우편번호찾기버튼}`).click();
  for (let i = 0; i < 20 && !(await isVisibleId(MODAL)); i += 1) await page.waitForTimeout(300);
  if (!(await isVisibleId(MODAL))) throw new Error('주소검색 모달이 열리지 않음(우편번호 찾기 클릭 후)');

  // 2) 검색조건 입력 — 시도/시군구는 드롭다운 value, 도로명/본번/부번은 execCommand
  const setSel = (id, v) => page.evaluate(({ i, val }) => {
    const el = document.getElementById(i); if (el) { el.value = val; el.dispatchEvent(new Event('change', { bubbles: true })); }
  }, { i: id, val: v });
  await setSel(`${P}sbx_sdcdRdnm`, sido); await page.waitForTimeout(400);
  await setSel(`${P}sbx_sggRdnm`, sigungu); await page.waitForTimeout(400);
  await fillViaExecCommand(page, `${P}tbx_rdnmRdnm`, roadName);
  await fillViaExecCommand(page, `${P}tbx_bldNoFsno`, buildingMain);
  if (buildingSub) await fillViaExecCommand(page, `${P}tbx_bldNoScno`, buildingSub);

  // 3) 검색
  await page.locator(`#${P}btn_srchRaddr`).click();

  // 4) 결과 행 대기(최대 8초)
  let rowVisible = false;
  for (let i = 0; i < 16; i += 1) {
    rowVisible = await isVisibleId(ROW);
    if (rowVisible) break;
    await page.waitForTimeout(500);
  }

  // 5) 결과 없음 → 검색에 넣은 실제 값과 결과행 수를 담아 실패(감사로그로 확인). 모달은 닫아 다음 시도 보호.
  if (!rowVisible) {
    const diag = await page.evaluate((pfx) => {
      const v = (id) => { const el = document.getElementById(id); return el ? (el.value ?? '') : '(없음)'; };
      const rows = document.querySelectorAll("[id*='grd_raddr'][id*='button']").length;
      return { 시도: v(pfx + 'sbx_sdcdRdnm'), 시군구: v(pfx + 'sbx_sggRdnm'), 도로명: v(pfx + 'tbx_rdnmRdnm'), 본번: v(pfx + 'tbx_bldNoFsno'), 부번: v(pfx + 'tbx_bldNoScno'), 결과행수: rows };
    }, P).catch(() => ({}));
    await closeModal();
    throw new Error(`주소검색 결과 없음 — 입력값 확인 필요: ${JSON.stringify(diag)}`);
  }

  // 6) 첫 결과 선택 → 직접입력확인 → 모달 종료 대기
  await page.locator(`#${ROW}`).click();
  await page.locator(`#${P}tab1_btn_addrDirInpt`).click();
  await page.waitForTimeout(500);
  for (let i = 0; i < 6 && (await isVisibleId(MODAL)); i += 1) await page.waitForTimeout(500);
}

// -------------------------------------------------------------------------
// 5. 송달영수인 입력
// -------------------------------------------------------------------------
async function fillDeliveryRecipient(page, recipientId) {
  await fillViaExecCommand(page, FIELD_IDS.송달영수인ID, recipientId);
  await page.locator(`#${FIELD_IDS.송달영수인확인버튼}`).click();
  await page.waitForTimeout(1000);
}

// -------------------------------------------------------------------------
// 6. 연락처 입력 (native setter + change 이벤트)
// -------------------------------------------------------------------------
async function fillContact(page, { mobile, phone, fax, email }) {
  // 휴대전화: '010-8536-0678' 형식
  if (mobile) {
    const [a, b, c] = mobile.split('-');
    await fillViaNativeSetter(page, FIELD_IDS.휴대전화국번, a);
    await fillViaNativeSetter(page, FIELD_IDS.휴대전화중간, b);
    await fillViaNativeSetter(page, FIELD_IDS.휴대전화끝, c);
  }
  // 전화번호
  if (phone) {
    const [a, b, c] = phone.split('-');
    await fillViaNativeSetter(page, FIELD_IDS.전화번호국번, a);
    await fillViaNativeSetter(page, FIELD_IDS.전화번호중간, b);
    await fillViaNativeSetter(page, FIELD_IDS.전화번호끝, c);
  }
  // 팩스
  if (fax) {
    const [a, b, c] = fax.split('-');
    await fillViaNativeSetter(page, FIELD_IDS.팩스국번, a);
    await fillViaNativeSetter(page, FIELD_IDS.팩스중간, b);
    await fillViaNativeSetter(page, FIELD_IDS.팩스끝, c);
  }
  // 이메일: 'name@domain' 형식
  if (email) {
    const [local, domain] = email.split('@');
    await fillViaNativeSetter(page, FIELD_IDS.이메일앞, local);
    await page.evaluate((d) => {
      const el = document.getElementById('mf_pfwork_wfm_btprt_sbx_emlAddr');
      el.value = d;
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }, domain);
  }
}

// -------------------------------------------------------------------------
// 7. 피고 법인/비법인 전용 절차 (DataList 강제 주입 필수)
// -------------------------------------------------------------------------
async function fillDefendantOrg(page, { personType, orgName, representativeType, representativeName, corpRegNo }) {
  // 인격 구분 드롭다운
  await page.evaluate((val) => {
    const el = document.getElementById('mf_pfwork_wfm_btprt_sbx_btprtPrsnlDvsCd');
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, personType);
  await page.waitForTimeout(500);

  // 법인등록번호(6-7) — 피고 법인 필수. 표시 체크박스를 켜고 입력한다.
  // (피고는 사업자등록번호를 원칙적으로 기재하지 않으므로 bzno는 비운다.)
  const corp = String(corpRegNo || '').replace(/[^0-9]/g, '');
  if (corp.length === 13) {
    await ensureCorpNoFieldShown(page);
    await fillViaExecCommand(page, FIELD_IDS.법인번호앞, corp.slice(0, 6));
    await fillViaExecCommand(page, FIELD_IDS.법인번호끝, corp.slice(6));
  } else {
    throw new Error(`피고 법인 '${orgName}' 법인등록번호 누락/형식오류(값="${corpRegNo || ''}") — ECFS 피고 법인은 법인등록번호(13자리)가 필수입니다. admin에서 입력 후 재실행하세요.`);
  }

  // 단체명 — 화면 입력
  await fillViaExecCommand(page, FIELD_IDS.이름, orgName);

  // ⚠️ 필수: 등록 직전 Nexacro DataList에 강제 주입 (안 하면 HTTP 500)
  await page.evaluate((name) => {
    const dlt = window.mf_pfwork_wfm_btprt_dlt_btprtListCp;
    if (!dlt) throw new Error('DataList(window.mf_pfwork_wfm_btprt_dlt_btprtListCp)를 찾을 수 없음');
    dlt.setCellData(0, 'btprtNm', name);
    try { dlt.setCellData(0, 'btprtPrsnlDvsCd', '법인'); } catch (e) { /* 컬럼 없으면 무시 */ }
  }, orgName);

  // 대표자 구분 + 성명 (드롭다운 변경 시 성명 필드가 초기화되므로 반드시 이 순서 유지)
  await page.evaluate((val) => {
    const el = document.getElementById('mf_pfwork_wfm_btprt_sbx_rprsStndngNm');
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, representativeType);
  await fillViaExecCommand(page, FIELD_IDS.대표자성명, representativeName);
}

// -------------------------------------------------------------------------
// 7-b. 피고 자연인 절차
//   ⚠️ 미검증 상태: SKILL.md에는 "피고 법인/비법인" 절차만 문서화돼 있고
//   자연인 피고 절차는 없다. 다만 v0.1 dry-run(ecfs_dryrun_test_SOP.docx,
//   Claude 컴퓨터 사용 기반)에서 "피고(김철수): 자연인 선택 → 주민번호·
//   이름 execCommand 입력 → 주소 직접입력 → 등록 성공(연락처·이메일
//   비필수)"으로 실제 성공한 이력이 있다. 이 함수는 그 절차를 재현한
//   최선의 추정이며, 인격구분 드롭다운의 정확한 문자열('자연인')은 아직
//   Playwright로 재검증되지 않았다 — 실사건/더미 사건 1회 확인 권장.
// -------------------------------------------------------------------------
async function fillDefendantNatural(page, { name, ssnFront, ssnBack, personTypeValue = '자연인' }) {
  await page.evaluate((val) => {
    const el = document.getElementById('mf_pfwork_wfm_btprt_sbx_btprtPrsnlDvsCd');
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, personTypeValue);
  await page.waitForTimeout(500);

  // 원고와 달리 비회원 체크박스 없음 — 피고는 로그인 계정 개념이 없음
  await fillViaExecCommand(page, FIELD_IDS.주민번호앞자리, ssnFront);
  await fillViaExecCommand(page, FIELD_IDS.주민번호뒷자리, ssnBack);
  await fillViaExecCommand(page, FIELD_IDS.이름, name);
}

// -------------------------------------------------------------------------
// 8. 등록 버튼 클릭 — Playwright 실제 클릭 (trusted event, Nexacro 정상 인식)
// -------------------------------------------------------------------------
// ⚠️ 2026-07-29: 등록 클릭·결과 검증·팝업 닫기를 safeRegisterClick으로 통일했다.
// 예전 구현은 `getByRole('button',{name:'확인',exact:true}).first()`로 팝업 확인
// 버튼을 찾았는데, 이 화면에 항상 떠 있는 당사자 '표시확인' 버튼
// (`mf_pfwork_wfm_btprt_btn_btprtIndctCfm`, value="확인")이 먼저 잡혀서
// 오버레이 뒤의 그 버튼을 클릭하려다 타임아웃 나고, 정작 팝업은 닫히지 않아
// 이후 STEP의 클릭까지 전부 막혔다(감사로그 STEP2 반복 실패의 원인).
// safeRegisterClick은 히트테스트로 "실제로 클릭 가능한" 팝업 버튼만 누른다.
async function clickRegisterAndVerify(page) {
  const { safeRegisterClick, clearGhostOverlay } = require('./ecfs_safe_register');
  try {
    const result = await safeRegisterClick(page, {
      buttonSelector: `#${FIELD_IDS.등록버튼}`,
      resetFieldSelector: `#${FIELD_IDS.이름}`, // 당사자 등록 성공 시 입력 폼이 비워진다
    });
    return { registered: !!result?.ok, detail: result };
  } catch (err) {
    // 오탐 방지: 등록 직후 남은 빈 팝업 오버레이(#_modal 내용없음) 때문에 성공 신호를
    // 못 읽는 경우가 있다. 오버레이를 정리하고 잠시 기다린 뒤 입력 폼(이름)이 비워졌는지
    // 다시 확인해서, 실제로 등록된 경우를 성공으로 인정한다. 여전히 값이 남아 있으면 진짜 실패로 재전파.
    await clearGhostOverlay(page).catch(() => {});
    await page.waitForTimeout(1000);
    const nameVal = await page.locator(`#${FIELD_IDS.이름}`).first().inputValue().catch(() => null);
    if (nameVal === '') {
      return { registered: true, detail: { ok: true, method: 'field_reset_after_overlay_clear' } };
    }
    // 중복 재실행: "이미 등록된 당사자입니다" 팝업이 떴다면 이미 목록에 있으므로 성공(멱등)으로 간주.
    if (Array.isArray(err.trace) && err.trace.some((t) => /이미 등록/.test(t))) {
      return { registered: true, detail: { ok: true, method: 'already_registered' } };
    }
    // 진단: safeRegisterClick의 실행 추적(trace)과 이름칸 잔존값을 오류 메시지에 실어 감사로그로 확인.
    const trace = Array.isArray(err.trace) ? err.trace.join(' ▷ ') : '(trace 없음)';
    err.message = `${err.message} || [이름칸값=${JSON.stringify(nameVal)}] [trace: ${trace}]`;
    throw err;
  }
}

// 당사자 주소를 fillAddress가 쓰는 구조({sido,sigungu,roadName,buildingMain,buildingSub})로 정규화한다.
// run-full(admin 폼)·run-full-from-notion(fill engine) 어느 경로든 원문 한 줄 주소가 있으면 파서로 분리한다.
function resolvePartyAddress(partyData) {
  const a = partyData && partyData.address;
  const { parseAddress } = require('./ecfs_address');
  const asStd = (p) => ({ sido: p.sido, sigungu: p.sigungu, roadName: p.roadName, buildingMain: p.buildingMain, buildingSub: p.buildingSub });

  // (1) 한글 키(시도/시군구/도로명/본번/부번)로 온 경우 — admin 폼이 이 형태로 보낸다.
  //     도로명에 읍면(예: "주촌면 골든루트로129번길")이 섞일 수 있어, 한 줄로 합쳐 파서로 정제한다.
  if (a && typeof a === 'object' && (a.시도 || a.도로명)) {
    const numeric = [a.본번, a.부번].filter((v) => v != null && v !== '').join('-');
    const line = [a.시도, a.시군구, a.도로명, numeric].filter(Boolean).join(' ');
    const p = parseAddress(line);
    if (p.matched) return asStd(p);
    // 파서가 못 잡으면 한글→영문 키 매핑만이라도(빈/불명은 호출측에서 판단)
    return { sido: a.시도 || '', sigungu: a.시군구 || '', roadName: a.도로명 || '', buildingMain: a.본번 || '', buildingSub: a.부번 || '' };
  }

  // (2) 이미 영문 키로 구조화됨
  if (a && typeof a === 'object' && a.roadName && a.sido) {
    // 도로명에 읍면이 섞였을 수 있으니 한 줄로 합쳐 재정제 시도(실패하면 원본).
    const numeric = [a.buildingMain, a.buildingSub].filter((v) => v != null && v !== '').join('-');
    const line = [a.sido, a.sigungu, a.roadName, numeric].filter(Boolean).join(' ');
    const p = parseAddress(line);
    return p.matched ? asStd(p) : a;
  }

  // (3) 문자열/원문 한 줄 주소
  const raw = (typeof a === 'string' ? a : null)
    || (partyData && (partyData.addressRaw || partyData.주소))
    || (a && (a.addressRaw || a.raw || a.원문))
    || null;
  if (raw) {
    const p = parseAddress(raw);
    if (p.matched) return asStd(p);
  }
  return a; // 구조화 실패 → 원본 유지(호출측에서 판단)
}

// 주소를 채우거나, 구조화 실패 시 명확한 진단으로 중단한다.
async function fillAddressOrThrow(page, partyData, roleLabel) {
  const addr = resolvePartyAddress(partyData);
  if (addr && typeof addr === 'object' && addr.roadName && addr.sido) {
    await fillAddress(page, addr);
    return;
  }
  if (partyData && (partyData.address || partyData.addressRaw || partyData.주소)) {
    const got = JSON.stringify(partyData.address ?? partyData.addressRaw ?? partyData.주소);
    throw new Error(
      `${roleLabel} 주소를 구조화하지 못함 — 도로명 주소가 아니거나 payload에 구조화 주소가 없음. 받은 값: ${got}. ` +
      `admin/overrides의 parties[i].address에 {sido,sigungu,roadName,buildingMain}를 넣거나(또는 도로명 원문 주소를 addressRaw로) 재실행하세요.`
    );
  }
  // 주소 자체가 없으면 입력 생략(피고 등 주소 미상 케이스는 상위에서 처리)
}

// -------------------------------------------------------------------------
// 9. 오케스트레이션 — 원고 1명 전체 흐름
// -------------------------------------------------------------------------
async function submitPlaintiffNonMember(page, partyData) {
  await waitForAnchor(page);
  // 앞 STEP(사건기본정보 등록) 팝업의 빈 배경(#_modal)이 남아 라디오 클릭을 가로막는 문제 방지.
  // 실제 팝업이 열려 있으면 먼저 확인으로 닫고, 비어 있는 오버레이만 무력화한다.
  const { clearBlockersBeforeClick } = require('./ecfs_safe_register');
  await clearBlockersBeforeClick(page);
  await selectPartyRole(page, '원고');
  // 자연인(주민등록번호) vs 법인(법인등록번호)은 입력 필드·검증이 다르므로 분기한다.
  const isOrg = partyData.personType === '법인' || (!!partyData.orgName && !partyData.name);
  if (isOrg) {
    await fillPlaintiffOrg(page, partyData);
  } else {
    await fillPlaintiffNonMember(page, partyData);
  }
  await fillAddressOrThrow(page, partyData, '원고');
  if (partyData.deliveryRecipientId) await fillDeliveryRecipient(page, partyData.deliveryRecipientId);
  if (partyData.contact) await fillContact(page, partyData.contact);
  const result = await clickRegisterAndVerify(page);
  if (!result.registered) {
    throw new Error('등록 확인 실패 — 스크린샷/DOM 상태를 확인하고 수동 개입 필요');
  }
  return result;
}

// -------------------------------------------------------------------------
// 10. 오케스트레이션 — 피고 1명 전체 흐름 (자연인 / 법인 / 비법인 분기)
// -------------------------------------------------------------------------
async function submitDefendant(page, partyData) {
  await waitForAnchor(page);
  // 앞 STEP 팝업의 빈 배경(#_modal)이 남아 라디오 클릭을 가로막는 문제 방지.
  const { clearBlockersBeforeClick } = require('./ecfs_safe_register');
  await clearBlockersBeforeClick(page);
  await selectPartyRole(page, '피고');

  if (partyData.personType === '자연인' || !partyData.orgName) {
    await fillDefendantNatural(page, partyData);
  } else {
    await fillDefendantOrg(page, partyData);
  }

  // 피고는 "주소를 모르는 경우" 체크 옵션이 있어, 주소 데이터가 아예 없으면 입력을 생략한다.
  if (partyData.address || partyData.addressRaw || partyData.주소) await fillAddressOrThrow(page, partyData, '피고');
  if (partyData.deliveryRecipientId) await fillDeliveryRecipient(page, partyData.deliveryRecipientId);
  if (partyData.contact) await fillContact(page, partyData.contact); // 피고는 통상 비필수

  const result = await clickRegisterAndVerify(page);
  if (!result.registered) {
    throw new Error('피고 등록 확인 실패 — 스크린샷/DOM 상태를 확인하고 수동 개입 필요');
  }
  return result;
}

module.exports = {
  attachToExistingBrowser,
  waitForAnchor,
  selectPartyRole,
  ensureNonMemberChecked,
  fillPlaintiffNonMember,
  fillPlaintiffOrg,
  fillAddress,
  fillDeliveryRecipient,
  fillContact,
  fillDefendantOrg,
  fillDefendantNatural,
  clickRegisterAndVerify,
  submitPlaintiffNonMember,
  submitDefendant,
  FIELD_IDS,
};

// -------------------------------------------------------------------------
// 실행 예시 (단독 실행 시)
// -------------------------------------------------------------------------
if (require.main === module) {
  (async () => {
    const { browser, page } = await attachToExistingBrowser();
    try {
      await submitPlaintiffNonMember(page, {
        name: '홍길동',
        ssnFront: '900101',
        ssnBack: '1234567',
        address: {
          sido: '경상남도',
          sigungu: '진주시',
          roadName: 'example로',
          buildingMain: '10',
        },
        deliveryRecipientId: 'pbs1105',
        contact: {
          mobile: '010-8536-0678',
          phone: '055-312-9345',
          fax: '055-312-9347',
          email: 'pbaesun@gmail.com',
        },
      });
      console.log('원고 등록 완료');
    } catch (err) {
      console.error('실패:', err.message);
      console.error('→ 직원이 화면을 직접 확인 후 수동으로 이어서 처리하세요.');
    } finally {
      await browser.close();
    }
  })();
}
