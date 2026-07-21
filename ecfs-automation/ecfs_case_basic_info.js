/**
 * ecfs_case_basic_info.js
 * -----------------------------------------------------------------------
 * 전자소송포털(ecfs.scourt.go.kr) 소장 작성 '사건기본정보' 섹션 Playwright 자동화.
 *
 * ✅ 2026-07-21 더미 신규 사건(대여금)으로 실측 검증 완료 — 사건명 설정,
 *   소가 입력, [등록] 클릭까지 실제로 수행해 "등록되었습니다" 팝업 확인함.
 *
 * 실측 결과 스킬 문서와 달랐던 점 (중요):
 *   - 청구구분 라디오는 두 옵션 모두 value="on"으로 동일하다 (Nexacro가
 *     체크 여부를 별도 상태로 관리). value로는 구분 불가 — 반드시
 *     id(#..._input_0 / #..._input_1)로 구분해야 한다.
 *   - 사건명 '기타' 직접입력 필드 실제 ID는 `csBas_ibx_saNm`이다
 *     (스킬 문서의 `csBas_tbx_csNm` 추정은 틀렸음).
 *
 * 실측 ID:
 *   - 법원 드롭다운: mf_pfwork_wfm_csBas_sbx_cortList
 *   - 관할법원찾기 버튼: mf_pfwork_wfm_csBas_btn_searchCort
 *   - 사건명 드롭다운: mf_pfwork_wfm_csBas_sbx_csNmDvs
 *   - 사건명 직접입력(기타 선택 시): mf_pfwork_wfm_csBas_ibx_saNm
 *   - 청구구분 라디오 — 재산권상청구: mf_pfwork_wfm_csBas_rad_clmDvs_input_0
 *   - 청구구분 라디오 — 비재산권상청구: mf_pfwork_wfm_csBas_rad_clmDvs_input_1
 *   - 유형 체크박스(회사/무체재산권 등): mf_pfwork_wfm_csBas_cbx_lwstType_input_0
 *   - 소가 입력 필드: mf_pfwork_wfm_csBas_ibx_vsmlAmt
 *   - 소가산정안내 버튼: mf_pfwork_wfm_csBas_btn_sogaCal
 *   - 등록 버튼: mf_pfwork_wfm_csBas_btn_save
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const SELECTORS = {
  법원드롭다운: 'mf_pfwork_wfm_csBas_sbx_cortList',
  관할법원찾기버튼: 'mf_pfwork_wfm_csBas_btn_searchCort',
  사건명드롭다운: 'mf_pfwork_wfm_csBas_sbx_csNmDvs',
  사건명직접입력: 'mf_pfwork_wfm_csBas_ibx_saNm', // '기타' 선택 시 활성화 (실측 확정)
  청구구분라디오_재산권상: 'mf_pfwork_wfm_csBas_rad_clmDvs_input_0',
  청구구분라디오_비재산권상: 'mf_pfwork_wfm_csBas_rad_clmDvs_input_1',
  유형체크박스: 'mf_pfwork_wfm_csBas_cbx_lwstType_input_0',
  소가필드: 'mf_pfwork_wfm_csBas_ibx_vsmlAmt', // 실측 확정 (기본값)
  등록버튼: 'mf_pfwork_wfm_csBas_btn_save', // 실측 확정 (기본값)
};

async function setSelectValue(page, elementId, value) {
  const ok = await page.evaluate(({ id, val }) => {
    const el = document.getElementById(id);
    if (!el) return false;
    el.value = val;
    el.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }, { id: elementId, val: value });
  if (!ok) throw new Error(`드롭다운 요소를 찾지 못함: #${elementId}`);
  await page.waitForTimeout(500);
}

async function fillViaExecCommand(page, elementId, value) {
  const ok = await page.evaluate(({ id, val }) => {
    const el = document.getElementById(id);
    if (!el) return false;
    el.focus();
    el.select?.();
    document.execCommand('insertText', false, val);
    return true;
  }, { id: elementId, val: value });
  if (!ok) throw new Error(`입력 요소를 찾지 못함: #${elementId}`);
  await page.waitForTimeout(300);
}

// -------------------------------------------------------------------------
// 0단계: 앵커 확인 — '사건기본정보' 섹션 진입 여부
// -------------------------------------------------------------------------
async function waitForSectionAnchor(page, timeoutMs = 15000) {
  await page.getByText('사건기본정보', { exact: false }).first().waitFor({ state: 'visible', timeout: timeoutMs });
}

// -------------------------------------------------------------------------
// 1단계: 법원 선택 (기본값 유지 시 생략 가능)
// -------------------------------------------------------------------------
async function selectCourt(page, courtName) {
  if (!courtName) return; // 기본값(창원지방법원) 유지
  await setSelectValue(page, SELECTORS.법원드롭다운, courtName);
}

// -------------------------------------------------------------------------
// 2단계: 사건명 입력 (목록에 있는 사건명 / '기타' + 직접입력 분기)
// -------------------------------------------------------------------------
const KNOWN_CASE_NAMES = [
  '가등기말소', '건물인도', '공유물분할', '근저당권말소', '소유권이전등기', '소유권말소등기',
  '소유권확인', '손해배상(건)', '손해배상(국)', '손해배상(기)', '손해배상(산)', '손해배상(의)',
  '손해배상(자)', '대여금', '매매대금', '채무부존재확인', '청구이의', '해고무효확인', '회사에 관한 소송',
];

async function fillCaseName(page, caseName) {
  if (KNOWN_CASE_NAMES.includes(caseName)) {
    await setSelectValue(page, SELECTORS.사건명드롭다운, caseName);
    return { mode: 'dropdown', caseName };
  }

  // CASE B: 목록에 없음 → '기타' 선택 후 직접 입력
  await setSelectValue(page, SELECTORS.사건명드롭다운, '기타');

  // '기타' 선택 시 IP 관할 안내 팝업이 자동으로 뜰 수 있음 → 확인 버튼으로 닫기
  // ⚠️ Phase 5에서 발견: 이 화면은 모든 섹션이 한 페이지에 같이 렌더링돼 있어
  // 정규식 /확인/(부분일치)을 쓰면 당사자 섹션의 "사용자정보확인" 버튼까지
  // 걸려 잘못된 요소를 클릭할 수 있다 — exact:true로 정확히 "확인"만 찾는다.
  const confirmBtn = page.getByRole('button', { name: '확인', exact: true });
  const confirmVisible = await confirmBtn.first().isVisible({ timeout: 2000 }).catch(() => false);
  if (confirmVisible) {
    await confirmBtn.first().click();
    await page.waitForTimeout(500);
  }

  await fillViaExecCommand(page, SELECTORS.사건명직접입력, caseName);
  return { mode: 'custom', caseName };
}

// -------------------------------------------------------------------------
// 3단계: 청구구분 선택 + 소가 처리 (핵심 분기)
//   재산권상 청구 → 소가 직접 입력 필요
//   비재산권상 청구 → 소가 자동 설정, 절대 클릭/입력하지 않음 (Read-only)
// -------------------------------------------------------------------------
async function selectClaimTypeAndValue(page, { claimType, litigationValue, lwstTypeCheck = false, sogaFieldId = SELECTORS.소가필드 }) {
  if (claimType !== '재산권상청구' && claimType !== '비재산권상청구') {
    throw new Error(`claimType은 '재산권상청구' 또는 '비재산권상청구'만 허용: ${claimType}`);
  }

  const radioId = claimType === '재산권상청구'
    ? SELECTORS.청구구분라디오_재산권상
    : SELECTORS.청구구분라디오_비재산권상;

  const radio = page.locator(`#${radioId}`);
  const radioCount = await radio.count().catch(() => 0);
  if (radioCount === 0) {
    throw new Error(`청구구분 라디오를 찾지 못함(#${radioId}) — 포털 화면 개편 가능성, 재확인 필요`);
  }
  const alreadyChecked = await radio.isChecked().catch(() => false);
  if (!alreadyChecked) {
    await radio.click();
    await page.waitForTimeout(500);
  }

  if (claimType === '비재산권상청구') {
    // 유형(회사·무체재산권 등) 체크 여부에 따라 소가가 5,000만원/1억원으로 자동 설정됨
    // — 절대 소가 필드를 직접 클릭·입력하지 않는다
    if (lwstTypeCheck) {
      const typeCbx = page.locator(`#${SELECTORS.유형체크박스}`);
      const typeChecked = await typeCbx.isChecked().catch(() => false);
      if (!typeChecked) {
        await typeCbx.click();
        await page.waitForTimeout(500);
      }
    }
    return { claimType, sogaMode: 'auto', lwstTypeCheck };
  }

  // 재산권상 청구 — 소가 직접 입력
  if (!litigationValue) {
    throw new Error('재산권상 청구는 litigationValue(소가)가 필요함');
  }

  const editable = await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (!el) return null;
    return !el.disabled && !el.readOnly;
  }, sogaFieldId);

  if (editable === null) throw new Error(`소가 필드를 찾지 못함: #${sogaFieldId}`);
  if (!editable) throw new Error(`소가 필드가 비활성(Read-only) 상태 — 청구구분 선택이 잘못됐을 가능성: #${sogaFieldId}`);

  await fillViaExecCommand(page, sogaFieldId, String(litigationValue));
  return { claimType, sogaMode: 'manual', litigationValue };
}

// -------------------------------------------------------------------------
// 오케스트레이션
// -------------------------------------------------------------------------
async function submitCaseBasicInfo(page, {
  courtName,          // 생략 시 기본값(창원지방법원) 유지
  caseName,           // 필수, 예: '대여금' 또는 '총회결의무효확인'(목록 외 사건)
  claimType,          // '재산권상청구' | '비재산권상청구'
  litigationValue,    // 재산권상 청구인 경우 필수
  lwstTypeCheck,      // 비재산권상 청구 + 회사/무체재산권 소송인 경우만 true
  sogaFieldId = SELECTORS.소가필드,
  registerButtonSelector = `#${SELECTORS.등록버튼}`,
} = {}) {
  const { safeRegisterClick } = require('./ecfs_safe_register');

  await waitForSectionAnchor(page);
  await selectCourt(page, courtName);
  const caseNameResult = await fillCaseName(page, caseName);
  const claimResult = await selectClaimTypeAndValue(page, { claimType, litigationValue, lwstTypeCheck, sogaFieldId });
  const registerResult = await safeRegisterClick(page, { buttonSelector: registerButtonSelector });

  return { ok: true, caseNameResult, claimResult, registerResult };
}

module.exports = {
  SELECTORS,
  setSelectValue,
  fillViaExecCommand,
  waitForSectionAnchor,
  selectCourt,
  fillCaseName,
  selectClaimTypeAndValue,
  submitCaseBasicInfo,
};
