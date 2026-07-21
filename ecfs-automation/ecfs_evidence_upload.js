/**
 * ecfs_evidence_upload.js — 소명서류 / 첨부서류 업로드 + 그리드 셀 수정
 * -----------------------------------------------------------------------
 * ecfs-evidence-upload 스킬 이식. 포털은 WebSquare2 프레임워크 사용
 * (Nexacro 아님) — DataList.setCellData 불가, 그리드 셀은 실제 클릭+타이핑
 * 으로만 값이 반영됨.
 *
 * ⚠️ Claude 컴퓨터 사용 버전과의 핵심 차이
 *   원본 스킬은 파일 input이 동적으로 생성되고 accessibility tree에
 *   노출되지 않아 MutationObserver로 감지 → aria-label 부여 → find 도구로
 *   ref 획득 → file_upload 라는 우회 경로가 필요했다.
 *   Playwright는 `setInputFiles()`를 DOM 셀렉터에 직접 걸 수 있고 화면에
 *   보이지 않는 input에도 동작하며 OS 파일탐색기를 거치지 않는다. 따라서
 *   이 모듈은 "파일찾기 버튼 클릭 → 새로 생긴 input[type=file] 대기 →
 *   setInputFiles" 3단계로 단순화했다.
 *
 * 그리드 셀 수정(triple_click + type)은 원본 스킬 그대로 유지 — Playwright
 * 에서도 이 포털은 execCommand/value setter로는 데이터 모델에 반영되지
 * 않고 화면 초기화 시 사라지므로, 반드시 실제 클릭 후 키보드 입력을 써야
 * 한다 (locator.click({clickCount:3}) + page.keyboard.type).
 *
 * ✅ 2026-07-21 더미 신규 사건에서 버튼/필드 ID 실측 대조 완료.
 *   아래 ID가 실제 DOM과 100% 일치함을 확인함 (SELECTORS 값 변경 없음):
 *   mf_pfwork_wfm_prvDocmt_btn_searchFile, mf_pfwork_wfm_prvDocmt_btn_added_files,
 *   mf_pfwork_wfm_prvDocmt_btn_saveVndcDocmt, mf_pfwork_wfm_prvDocmt_grd_dcmevdLst,
 *   mf_pfwork_wfm_atch_ibxDocNm, mf_pfwork_wfm_atch_btn_searchFile,
 *   mf_pfwork_wfm_atch_btn_addedList, mf_pfwork_wfm_atch_btn_save.
 *   ⚠️ 단, 그리드가 비어 있는 상태(파일 미업로드)에서는 `_cell_{row}_{col}_text`
 *   행이 아직 생성되지 않아 실제 파일 업로드 + 그리드 셀 쓰기까지는 검증하지
 *   못했다. 첫 실사건 업로드 시 결과를 확인해 이 주석을 갱신할 것.
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const { safeRegisterClick } = require('./ecfs_safe_register');

const SELECTORS = {
  prvDocmt: {
    // 소명서류(입증서류) 섹션
    파일찾기버튼: 'mf_pfwork_wfm_prvDocmt_btn_searchFile',
    목록추가버튼: 'mf_pfwork_wfm_prvDocmt_btn_added_files',
    등록버튼: 'mf_pfwork_wfm_prvDocmt_btn_saveVndcDocmt',
    그리드: 'mf_pfwork_wfm_prvDocmt_grd_dcmevdLst',
    그리드행셀렉터: '#mf_pfwork_wfm_prvDocmt_grd_dcmevdLst tr',
  },
  atch: {
    // 첨부서류 섹션 (전자소송동의서, 위임장 등)
    서류명입력: 'mf_pfwork_wfm_atch_ibxDocNm',
    파일찾기버튼: 'mf_pfwork_wfm_atch_btn_searchFile',
    목록추가버튼: 'mf_pfwork_wfm_atch_btn_addedList',
    등록버튼: 'mf_pfwork_wfm_atch_btn_save',
  },
};

// 그리드 컬럼 번호 (prvDocmt 그리드 기준)
const COL = {
  서증부호: 1,
  가지부호: 2,
  서증번호: 3,
  가지번호: 4,
  서류명: 5,
  파일명_읽기전용: 6,
};

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
// [A] 파일 업로드 흐름
// -------------------------------------------------------------------------

/**
 * @param {'prvDocmt'|'atch'} section
 * @param {string} filePath   Windows 절대 경로 (C:\Users\...)
 * @param {string} [docName]  첨부서류(atch)만 필요 — 서류명
 */
async function uploadOneFile(page, section, filePath, docName) {
  const sel = SELECTORS[section];
  if (!sel) throw new Error(`알 수 없는 section: ${section} (prvDocmt | atch만 허용)`);

  if (section === 'atch') {
    if (!docName) throw new Error('첨부서류 업로드는 docName(서류명)이 필요함');
    // 서류명은 파일찾기 클릭 전에 입력해야 함 (안 그러면 다음 파일 서류명과 뒤섞임)
    await fillViaExecCommand(page, sel.서류명입력, docName);
  }

  const searchBtn = page.locator(`#${sel.파일찾기버튼}`);
  const btnCount = await searchBtn.count().catch(() => 0);
  if (btnCount === 0) throw new Error(`파일찾기 버튼을 찾지 못함: #${sel.파일찾기버튼}`);

  // 클릭 시점 이전에 존재하던 file input 개수를 기록해, 새로 생긴 것만 골라낸다
  const beforeInputCount = await page.locator('input[type="file"]').count().catch(() => 0);
  await searchBtn.click();

  const fileInput = page.locator('input[type="file"]').nth(beforeInputCount); // 새로 추가된 요소
  await fileInput.waitFor({ state: 'attached', timeout: 5000 }).catch(async () => {
    // fallback: 마지막 file input 사용
  });
  const target = (await fileInput.count().catch(() => 0)) > 0
    ? fileInput
    : page.locator('input[type="file"]').last();

  await target.setInputFiles(filePath);
  await page.waitForTimeout(800);

  const addBtn = page.locator(`#${sel.목록추가버튼}`);
  const addCount = await addBtn.count().catch(() => 0);
  if (addCount === 0) throw new Error(`[목록에 추가] 버튼을 찾지 못함: #${sel.목록추가버튼}`);
  await addBtn.first().click();
  await page.waitForTimeout(800);

  return { ok: true, section, filePath, docName };
}

async function uploadFiles(page, section, files /* [{filePath, docName?}] */) {
  const results = [];
  for (const f of files) {
    results.push(await uploadOneFile(page, section, f.filePath, f.docName));
  }
  return results;
}

async function registerUploadedFiles(page, section) {
  const sel = SELECTORS[section];
  if (!sel) throw new Error(`알 수 없는 section: ${section}`);
  return safeRegisterClick(page, {
    buttonSelector: `#${sel.등록버튼}`,
    gridRowSelector: section === 'prvDocmt' ? sel.그리드행셀렉터 : null,
    settleMs: 1500,   // 파일첨부 직후 렌더링 지연 대응
    postClickWaitMs: 2000,
  });
}

// -------------------------------------------------------------------------
// [B] 그리드 셀 수정 (서증번호 / 가지번호 / 서류명) — prvDocmt 전용
// -------------------------------------------------------------------------

function gridCellSelector(row, col) {
  return `#${SELECTORS.prvDocmt.그리드}_cell_${row}_${col}_text`;
}

/**
 * triple-click으로 셀 전체 선택 후 키보드로 값을 입력한다.
 * execCommand/value setter는 화면에만 반영되고 등록 시 초기화되므로 사용 금지.
 */
async function editGridCell(page, row, col, value) {
  const cell = page.locator(gridCellSelector(row, col));
  const count = await cell.count().catch(() => 0);
  if (count === 0) throw new Error(`그리드 셀을 찾지 못함: row=${row}, col=${col}`);

  await cell.first().click({ clickCount: 3 });
  await page.keyboard.press('Control+A').catch(() => {});
  await page.keyboard.type(String(value));
  await page.waitForTimeout(200);

  // blur로 값 확정 (다음 셀 클릭 전 반영 보장)
  await page.evaluate(() => { if (document.activeElement) document.activeElement.blur(); }).catch(() => {});
}

/**
 * @param {Array<{row:number, seq?:string, gaji?:string, name?:string}>} edits
 */
async function editGridCells(page, edits) {
  for (const e of edits) {
    if (e.seq !== undefined) await editGridCell(page, e.row, COL.서증번호, e.seq);
    if (e.gaji !== undefined) await editGridCell(page, e.row, COL.가지번호, e.gaji);
    if (e.name !== undefined) await editGridCell(page, e.row, COL.서류명, e.name);
  }
}

async function readGridRow(page, row) {
  return page.evaluate(({ gridId, row }) => {
    const get = (col) => document.getElementById(`${gridId}_cell_${row}_${col}_text`)?.value ?? null;
    return { row, seq: get(3), gaji: get(4), name: get(5), file: get(6) };
  }, { gridId: SELECTORS.prvDocmt.그리드, row });
}

// -------------------------------------------------------------------------
// 오케스트레이션
// -------------------------------------------------------------------------

/**
 * @param {'prvDocmt'|'atch'} section
 * @param {Array<{filePath:string, docName?:string}>} files
 * @param {Array<{row:number, seq?:string, gaji?:string, name?:string}>} [gridEdits] prvDocmt 전용
 */
async function submitEvidenceUpload(page, { section, files, gridEdits } = {}) {
  if (!section || !Array.isArray(files) || files.length === 0) {
    throw new Error('section과 files가 필요함');
  }

  await uploadFiles(page, section, files);

  if (section === 'prvDocmt' && Array.isArray(gridEdits) && gridEdits.length > 0) {
    await editGridCells(page, gridEdits);
  }

  const registerResult = await registerUploadedFiles(page, section);
  return { ok: true, section, uploadedCount: files.length, registerResult };
}

module.exports = {
  SELECTORS,
  COL,
  uploadOneFile,
  uploadFiles,
  registerUploadedFiles,
  editGridCell,
  editGridCells,
  readGridRow,
  submitEvidenceUpload,
};
