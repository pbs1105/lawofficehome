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

const { clickPopupConfirm } = require('./ecfs_safe_register');

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

/**
 * 청구구분 값 정규화.
 *
 * ⚠️ 2026-07-29 실사건에서 발견된 버그의 핵심. 전자소송포털 화면의 라디오
 * 라벨은 "비재산권상 청구"처럼 **띄어쓰기가 있고**, AI 추출(n8n·Gemini)도
 * 화면 문구를 그대로 뽑아 오는 경우가 많다. 그런데 admin 폼의 select 옵션
 * 값은 "비재산권상청구"(붙여쓰기)라, `select.value = "비재산권상 청구"`가
 * **조용히 빈 문자열('')로 떨어진다**(HTML select는 없는 값을 넣으면 값이
 * 비워진다). 그 결과 폼은 claimType:''를 보내고, 서버는 사건명까지 입력한
 * 뒤 여기서 예외를 던져 흐름이 중단됐다 — 화면상으로는 "청구구분을
 * 선택하라"는 말만 반복돼 원인을 알기 어려웠다.
 *
 * 그래서 공백·조사 표기 차이를 흡수해 두 정규값 중 하나로 되돌린다.
 * 인식할 수 없으면 추측하지 않고 null을 반환한다(법적 판단이므로 임의 추정 금지).
 */
const CLAIM_TYPES = ['재산권상청구', '비재산권상청구'];

function normalizeClaimType(raw) {
  if (raw == null) return null;
  const s = String(raw).replace(/\s+/g, '');
  if (!s) return null;
  if (/^비재산권상(의)?(청구)?$/.test(s)) return '비재산권상청구';
  if (/^재산권상(의)?(청구)?$/.test(s)) return '재산권상청구';
  return null;
}

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

  // '기타' 선택 시 IP 관할 안내 팝업이 자동으로 뜰 수 있음 → 확인 버튼으로 닫기.
  // ⚠️ 2026-07-28 실사건에서 재현: 이 화면은 당사자 '표시확인' 버튼(btprtIndctCfm,
  // value="확인")이 항상 떠 있어 getByRole('확인').first()가 그걸 잘못 집고, 유령
  // 배경(#_modal)까지 겹쳐 30초 타임아웃 났다. clickPopupConfirm이 그 당사자 버튼을
  // 제외하고 실제 열린 팝업의 '확인'만(유령 배경 정리 후) 클릭한다. 팝업이 없으면
  // 아무것도 누르지 않는다.
  await clickPopupConfirm(page).catch(() => {});

  await fillViaExecCommand(page, SELECTORS.사건명직접입력, caseName);
  return { mode: 'custom', caseName };
}

// -------------------------------------------------------------------------
// 3단계: 청구구분 선택 + 소가 처리 (핵심 분기)
//   재산권상 청구 → 소가 직접 입력 필요
//   비재산권상 청구 → 소가 자동 설정, 절대 클릭/입력하지 않음 (Read-only)
// -------------------------------------------------------------------------
async function selectClaimTypeAndValue(page, { claimType: rawClaimType, litigationValue, lwstTypeCheck = false, sogaFieldId = SELECTORS.소가필드 }) {
  const claimType = normalizeClaimType(rawClaimType);
  if (!claimType) {
    // 받은 값을 따옴표로 감싸 명시한다 — 빈 문자열('')이 넘어온 경우 예전 메시지는
    // "허용: " 로 끝나 원인을 전혀 알 수 없었다.
    throw new Error(
      `청구구분(claimType)이 올바르지 않습니다. 받은 값: ${JSON.stringify(rawClaimType ?? null)} — '재산권상청구' 또는 '비재산권상청구' 중 하나여야 합니다. ` +
        `admin 화면의 「청구구분」 선택값이 비어 있지 않은지 확인하세요(파일 추출값이 "비재산권상 청구"처럼 띄어쓰기가 있으면 선택이 비워집니다).`
    );
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
  courtName,          // 명시되면 그대로 사용(복수관할을 법무사가 고른 결과 포함). 없고 사실관계가 있으면 자동 판단.
  사건종류,           // 선택: '본안'|'가압류'|'가처분' (관할 판단용, 기본 '본안')
  피고주소, 원고주소, 목적물소재지, 관할합의,  // 선택: 관할 자동 판단용 사실관계
  caseName,           // 사건명(있으면 그대로 사용). 없으면 청구유형/청구요지로 자동 결정.
  청구유형,           // 선택: 사건명·관할·청구구분 자동 결정용(예: '대여금','건물명도')
  청구유형들,         // 선택: 병합청구를 배열로(청구구분 병합규칙 판단용)
  청구요지,           // 선택: 자유 텍스트 힌트(확실할 때만 매칭, 애매하면 확인 요구)
  claimType,          // '재산권상청구' | '비재산권상청구' (없으면 청구유형으로 자동 결정)
  litigationValue,    // 재산권상 청구 소가(있으면 그대로 사용). 없으면 아래 값들로 자동 산정.
  // ── 소가 자동 산정용(litigationValue 없을 때) ──
  원금, 원금들, 부대청구,            // 금전청구: 원금(부대청구 제외)
  목적물종류, 목적물가액, 개별공시지가, 면적,  // 부동산: 가액(추측 금지, 법무사 제공)
  피담보채권액, 피보전채권액,        // 담보물권 / 보전처분
  lwstTypeCheck,      // 비재산권상 청구 + 회사/무체재산권 소송인 경우만 true
  sogaFieldId = SELECTORS.소가필드,
  registerButtonSelector = `#${SELECTORS.등록버튼}`,
} = {}) {
  const { safeRegisterClick } = require('./ecfs_safe_register');

  // 사건명 자동 결정(규칙 매핑 우선 + 애매하면 법무사 확인).
  const { determineCaseName } = require('./ecfs_case_name');
  const decided = determineCaseName({ 사건명: caseName, 청구유형, 청구요지 });
  if (!decided.matched) {
    const cand = decided.candidates && decided.candidates.length ? ` 후보: [${decided.candidates.join(', ')}]` : '';
    throw new Error(
      `사건명 확인 필요 — ${decided.reason || '자동 결정 불가'}.${cand} ` +
      `caseBasicInfo.caseName에 확정 사건명을 넣어 재실행하세요(포털을 건드리기 전에 멈춤).`
    );
  }

  // 제출법원(토지관할) 자동 판단. courtName이 명시되면 그대로 사용(법무사의 복수관할 선택 결과 포함).
  // courtName이 없고 주소 등 사실관계가 있으면 법령 규칙으로 판단하고, 복수/미해결이면 후보를 담아 중단.
  let resolvedCourt = courtName;
  const hasJurFacts = !!(피고주소 || 원고주소 || 목적물소재지 || 관할합의);
  if (!courtName && hasJurFacts) {
    const { determineJurisdiction } = require('./ecfs_jurisdiction');
    const jur = determineJurisdiction({ 사건종류, 피고주소, 원고주소, 목적물소재지, 청구유형, 관할합의 });
    if (!jur.matched) {
      const lines = (jur.candidates || []).map((c) => `${c.court || '(미해결)'} — ${c.기준}(${c.근거})`);
      throw new Error(
        `관할법원 확인 필요 — ${jur.reason}.\n후보:\n- ${lines.join('\n- ')}\n` +
        `caseBasicInfo.courtName에 확정 제출법원을 넣어 재실행하세요(포털을 건드리기 전에 멈춤).`
      );
    }
    resolvedCourt = jur.court;
  }

  // 청구구분 자동 결정. claimType이 명시되면 그대로 사용, 없으면 청구유형(들)로 판단.
  // ★ 병합규칙: 비재산권상 청구가 하나라도 섞이면 '비재산권상청구'(포털 안내/예규).
  const { determineClaimType } = require('./ecfs_claim_type');
  const ct = determineClaimType({ claimType, 청구유형, 청구유형들 });
  if (!ct.matched) {
    throw new Error(
      `청구구분 확인 필요 — ${ct.reason}. 후보: [${(ct.candidates || []).join(', ')}] ` +
      `caseBasicInfo.claimType에 '재산권상청구' 또는 '비재산권상청구'를 넣어 재실행하세요(포털을 건드리기 전에 멈춤).`
    );
  }
  const resolvedClaimType = ct.claimType;

  // 소가 자동 산정(재산권상청구 + litigationValue 미제공 시). 부대청구 제외·부동산 가액 추측 금지.
  // 목적물 가액이 없거나 세부 비율이 불확실하면 확인 필요로 멈추고 [소가산정안내] 교차확인을 권고.
  let resolvedSoga = litigationValue;
  if (resolvedClaimType === '재산권상청구' && (litigationValue == null || litigationValue === '')) {
    const { calculateSoga } = require('./ecfs_soga');
    const sg = calculateSoga({ 사건종류, 청구유형, 원금, 원금들, 부대청구, 목적물종류, 목적물가액, 개별공시지가, 면적, 피담보채권액, 피보전채권액 });
    if (!sg.matched) {
      throw new Error(
        `소가 확인 필요 — ${sg.reason}. ${sg.교차확인권고 ? '전자소송 [소가산정안내](소송비용계산)로 교차확인 권장. ' : ''}` +
        `caseBasicInfo.litigationValue에 확정 소가를 넣어 재실행하세요(포털을 건드리기 전에 멈춤).`
      );
    }
    resolvedSoga = sg.소가;
  }

  await waitForSectionAnchor(page);
  await selectCourt(page, resolvedCourt);
  const caseNameResult = await fillCaseName(page, decided.caseName);
  const claimResult = await selectClaimTypeAndValue(page, { claimType: resolvedClaimType, litigationValue: resolvedSoga, lwstTypeCheck, sogaFieldId });
  const registerResult = await safeRegisterClick(page, { buttonSelector: registerButtonSelector });

  return { ok: true, caseNameResult, claimResult, registerResult };
}

module.exports = {
  SELECTORS,
  CLAIM_TYPES,
  normalizeClaimType,
  setSelectValue,
  fillViaExecCommand,
  waitForSectionAnchor,
  selectCourt,
  fillCaseName,
  selectClaimTypeAndValue,
  submitCaseBasicInfo,
};
