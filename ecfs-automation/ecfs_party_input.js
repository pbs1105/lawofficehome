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
async function attachToExistingBrowser(cdpEndpoint = 'http://localhost:9222') {
  const browser = await chromium.connectOverCDP(cdpEndpoint);
  const context = browser.contexts()[0];
  const page = context.pages().find(p => p.url().includes('ecfs.scourt.go.kr')) || context.pages()[0];
  if (!page) {
    throw new Error('ecfs.scourt.go.kr 탭을 찾지 못했습니다. 직원이 로그인 후 소장 작성 화면을 열어두었는지 확인하세요.');
  }
  return { browser, page };
}

// -------------------------------------------------------------------------
// 1. 앵커 확보 — "당사자 기본정보" 텍스트가 보일 때까지 대기
// -------------------------------------------------------------------------
async function waitForAnchor(page, text = '당사자 기본정보', timeoutMs = 15000) {
  await page.getByText(text, { exact: false }).first().waitFor({ state: 'visible', timeout: timeoutMs });
}

// -------------------------------------------------------------------------
// 2. 당사자 구분 선택 (원고 / 피고 라디오)
// -------------------------------------------------------------------------
async function selectPartyRole(page, role /* '원고' | '피고' */) {
  await page.getByRole('radio', { name: role }).click();
  await page.waitForTimeout(500);
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
    el.focus();
    el.select();
    document.execCommand('insertText', false, val);
  }, { id: elementId, val: value });
}

// 유틸: native setter + change 이벤트 (연락처·이메일류 필드)
async function fillViaNativeSetter(page, elementId, value) {
  await page.evaluate(({ id, val }) => {
    const el = document.getElementById(id);
    if (!el) throw new Error(`요소를 찾을 수 없음: ${id}`);
    const nativeSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    nativeSetter.call(el, val);
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
};

async function fillPlaintiffNonMember(page, { name, ssnFront, ssnBack }) {
  // 1. 비회원 체크박스 — 반드시 실제 클릭 (JS로 checked=true 설정 시 이름 필드가 disabled로 남음)
  const checkbox = page.locator(`#${FIELD_IDS.비회원체크박스}`);
  await checkbox.scrollIntoViewIfNeeded();
  await checkbox.click();
  await page.waitForTimeout(500);

  // 검증: 체크됐는지 + 이름 필드 활성화됐는지 확인
  const state = await page.evaluate(() => ({
    checked: document.getElementById('mf_pfwork_wfm_btprt_cbx_nmbrs_input_0')?.checked,
    nameDisabled: document.getElementById('mf_pfwork_wfm_btprt_ibx_btprtNm')?.disabled,
  }));
  if (!state.checked || state.nameDisabled) {
    throw new Error(`비회원 체크박스 처리 실패: ${JSON.stringify(state)}`);
  }

  // 2. 이름·주민번호 — execCommand 방식
  await fillViaExecCommand(page, FIELD_IDS.주민번호앞자리, ssnFront);
  await fillViaExecCommand(page, FIELD_IDS.주민번호뒷자리, ssnBack);
  await fillViaExecCommand(page, FIELD_IDS.이름, name);
}

// -------------------------------------------------------------------------
// 4. 주소 입력 — 우편번호 찾기 팝업 (Playwright popup 이벤트로 새 창 처리)
// -------------------------------------------------------------------------
async function fillAddress(page, { sido, sigungu, roadName, buildingMain, buildingSub }) {
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator(`#${FIELD_IDS.우편번호찾기버튼}`).click(),
  ]);
  await popup.waitForLoadState();

  // 팝업 내부 필드 — 시도/시군구는 드롭다운 value 설정, 도로명/본번/부번은 execCommand
  await popup.evaluate((val) => {
    const el = document.getElementById('mf_pfwork_wfm_btprt_PSP012P01_wframe_sbx_sdcdRdnm');
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, sido);
  await popup.waitForTimeout(500);

  await popup.evaluate((val) => {
    const el = document.getElementById('mf_pfwork_wfm_btprt_PSP012P01_wframe_sbx_sggRdnm');
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, sigungu);
  await popup.waitForTimeout(500);

  await fillViaExecCommand(popup, 'mf_pfwork_wfm_btprt_PSP012P01_wframe_tbx_rdnmRdnm', roadName);
  await fillViaExecCommand(popup, 'mf_pfwork_wfm_btprt_PSP012P01_wframe_tbx_bldNoFsno', buildingMain);
  if (buildingSub) {
    await fillViaExecCommand(popup, 'mf_pfwork_wfm_btprt_PSP012P01_wframe_tbx_bldNoScno', buildingSub);
  }

  await popup.locator('#mf_pfwork_wfm_btprt_PSP012P01_wframe_btn_srchRaddr').click();
  await popup.waitForTimeout(1000);

  // 검색 결과 첫 번째 항목 선택
  await popup.locator('#mf_pfwork_wfm_btprt_PSP012P01_wframe_grd_raddr_button_0_2').click();
  await popup.locator('#mf_pfwork_wfm_btprt_PSP012P01_wframe_tab1_btn_addrDirInpt').click();

  // 팝업이 자동으로 닫히지 않는 경우 대비
  if (!popup.isClosed()) {
    await popup.waitForEvent('close', { timeout: 3000 }).catch(() => {});
  }
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
async function fillDefendantOrg(page, { personType, orgName, representativeType, representativeName }) {
  // 인격 구분 드롭다운
  await page.evaluate((val) => {
    const el = document.getElementById('mf_pfwork_wfm_btprt_sbx_btprtPrsnlDvsCd');
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, personType);

  // 단체명 — 화면 입력
  await fillViaExecCommand(page, FIELD_IDS.이름, orgName);

  // ⚠️ 필수: 등록 직전 Nexacro DataList에 강제 주입 (안 하면 HTTP 500)
  await page.evaluate((name) => {
    const dlt = window.mf_pfwork_wfm_btprt_dlt_btprtListCp;
    if (!dlt) throw new Error('DataList(window.mf_pfwork_wfm_btprt_dlt_btprtListCp)를 찾을 수 없음');
    dlt.setCellData(0, 'btprtNm', name);
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
async function clickRegisterAndVerify(page) {
  const btn = page.locator(`#${FIELD_IDS.등록버튼}`);
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
  await page.waitForTimeout(1500);

  // "등록되었습니다." 팝업 확인 — 텍스트 기반 대기
  const popupConfirmed = await page
    .getByText('등록되었습니다', { exact: false })
    .first()
    .waitFor({ state: 'visible', timeout: 5000 })
    .then(() => true)
    .catch(() => false);

  if (popupConfirmed) {
    // 팝업 확인 버튼 — 역할 기반으로 탐색 (좌표 계산 불필요)
    // ⚠️ Phase 5: 정규식 부분일치 대신 exact:true — 이 화면엔 "사용자정보확인" 같은
    // 다른 "OO확인" 버튼도 같이 떠 있어 부분일치 시 잘못된 버튼을 클릭할 수 있음
    await page.getByRole('button', { name: '확인', exact: true }).first().click().catch(() => {});
  }

  return { registered: popupConfirmed };
}

// -------------------------------------------------------------------------
// 9. 오케스트레이션 — 원고 1명 전체 흐름
// -------------------------------------------------------------------------
async function submitPlaintiffNonMember(page, partyData) {
  await waitForAnchor(page);
  await selectPartyRole(page, '원고');
  await fillPlaintiffNonMember(page, partyData);
  if (partyData.address) await fillAddress(page, partyData.address);
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
  await selectPartyRole(page, '피고');

  if (partyData.personType === '자연인' || !partyData.orgName) {
    await fillDefendantNatural(page, partyData);
  } else {
    await fillDefendantOrg(page, partyData);
  }

  if (partyData.address) await fillAddress(page, partyData.address);
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
  fillPlaintiffNonMember,
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
          email: 'pbs9345@hanmail.net',
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
