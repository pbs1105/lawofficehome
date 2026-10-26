/**
 * ecfs_claim_input.js
 * -----------------------------------------------------------------------
 * 전자소송포털(ecfs.scourt.go.kr) 취지·원인 섹션 Playwright 자동화.
 *
 * ⚠️ 재판 종류별 레이아웃 차이 (2026-07-29 실측 확정):
 *   - 소장(본안): 청구취지(prpcl) + 청구원인(clmCas)이 별개 섹션 → 등록 버튼 2개(각각 등록).
 *   - 가압류/가처분·지급명령 등 신청서: 신청취지 및 이유(aplyIntntResn) 통합 섹션 → 등록 1개.
 *   명칭만 다르고 실질 동일. 이 파일은 화면에 렌더된 레이아웃을 감지해 양쪽을 모두 처리한다.
 *
 * ⚠️ Nexacro 주의:
 *   - hidden 요소에 scrollIntoView 금지(보이는 요소에만 사용).
 *   - 취지 textarea는 execCommand('insertText'), 원인은 CKEditor setData.
 *   - 등록 버튼은 Playwright locator.click(=실제 마우스 이벤트) → safeRegisterClick으로 통일.
 * -----------------------------------------------------------------------
 */

const MAX_CHARS = 2000;

// 재판 종류별 섹션 구성. purposeTextarea 존재 여부로 현재 레이아웃을 감지한다.
const CLAIM_LAYOUTS = {
  소장: {
    label: '소장(청구취지·청구원인)',
    separate: true, // 취지·원인 각각 별도 등록
    purposeTextarea: 'mf_pfwork_wfm_prpcl_txa_prpclCtt',
    purposeSave: 'mf_pfwork_wfm_prpcl_btn_save',
    purposeAttachText: '청구취지별지 첨부하기',
    reasonEditor: 'mf_pfwork_wfm_clmCas_txa_clmCasCtt_',
    reasonDirectRadio: 'mf_pfwork_wfm_clmCas_rad_input_input_0',
    reasonSave: 'mf_pfwork_wfm_clmCas_btn_save',
    reasonAttachText: '내용파일첨부하기',
  },
  신청: {
    label: '신청서(신청취지 및 이유)',
    separate: false, // 통합 1회 등록
    purposeTextarea: 'mf_pfwork_wfm_aplyIntntResn_txa_ctt1',
    reasonEditor: 'mf_pfwork_wfm_aplyIntntResn_txa_ctt2_',
    save: 'mf_pfwork_wfm_aplyIntntResn_btn_save',
    purposeAttachText: '신청취지별지 첨부하기',
    reasonAttachText: '내용파일 첨부하기',
  },
};

// 하위호환: FIELD_IDS 참조 코드가 있을 수 있어 신청서 기준 기본값 유지.
const FIELD_IDS = {
  신청취지textarea: CLAIM_LAYOUTS.신청.purposeTextarea,
  신청이유CKEditor인스턴스: CLAIM_LAYOUTS.신청.reasonEditor,
  등록버튼: CLAIM_LAYOUTS.신청.save,
};

// -------------------------------------------------------------------------
// 레이아웃 감지
// -------------------------------------------------------------------------
async function detectClaimLayout(page) {
  const which = await page.evaluate((ids) => {
    const has = (id) => !!document.getElementById(id);
    if (has(ids.소장)) return '소장';
    if (has(ids.신청)) return '신청';
    return null;
  }, { 소장: CLAIM_LAYOUTS.소장.purposeTextarea, 신청: CLAIM_LAYOUTS.신청.purposeTextarea }).catch(() => null);
  return which ? CLAIM_LAYOUTS[which] : null;
}

// -------------------------------------------------------------------------
// 0단계: 섹션으로 스크롤(모든 섹션이 한 페이지에 렌더되므로 좌측 메뉴 클릭 불필요)
// -------------------------------------------------------------------------
async function gotoClaimSection(page, layout) {
  const id = (layout || CLAIM_LAYOUTS.신청).purposeTextarea;
  const txa = page.locator(`#${id}`);
  try {
    await txa.first().waitFor({ state: 'attached', timeout: 10000 });
    await txa.first().scrollIntoViewIfNeeded().catch(() => {});
  } catch (_) {
    await page.getByText(/신청취지|청구취지/, { exact: false }).first().click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
}

// -------------------------------------------------------------------------
// 1단계: 취지(청구취지/신청취지) 입력 — plain textarea, execCommand
// -------------------------------------------------------------------------
async function fillClaimPurpose(page, layout, purposeText, purposeFilePath) {
  const id = layout.purposeTextarea;
  if (purposeText && purposeText.length <= MAX_CHARS) {
    const found = await page.evaluate((i) => {
      const el = document.getElementById(i);
      return !!(el && el.offsetWidth > 0);
    }, id);
    if (!found) throw new Error(`취지 textarea를 찾을 수 없음(${id}) — 섹션/레이아웃 확인 필요`);

    await page.locator(`#${id}`).click();
    const length = await page.evaluate(({ i, text }) => {
      const el = document.getElementById(i);
      el.focus();
      try { if (typeof el.select === 'function') el.select(); } catch (_) { /* noop */ }
      let ok = false;
      try { ok = document.execCommand('insertText', false, text); } catch (_) { ok = false; }
      if (!ok) {
        el.value = text;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
      return el.value.length;
    }, { i: id, text: purposeText });

    if (length !== purposeText.length) {
      throw new Error(`취지 입력 검증 실패: 입력글자수(${length}) != 원본(${purposeText.length})`);
    }
  } else {
    if (!purposeFilePath) throw new Error('취지가 2,000자를 초과하지만 purposeFilePath가 제공되지 않음');
    await attachSupplementFile(page, purposeFilePath, '', layout.purposeAttachText);
  }
}

// -------------------------------------------------------------------------
// 2단계: 원인(청구원인/신청이유) 입력 — CKEditor setData
// -------------------------------------------------------------------------
async function fillClaimReason(page, layout, reasonHtml, reasonFilePath) {
  const plainLen = reasonHtml ? reasonHtml.replace(/<[^>]+>/g, '').length : 0;

  if (plainLen > MAX_CHARS) {
    if (!reasonFilePath) throw new Error('원인이 2,000자를 초과하지만 reasonFilePath가 제공되지 않음');
    await attachSupplementFile(page, reasonFilePath, '', layout.reasonAttachText);
    return;
  }

  // 소장 청구원인은 "직접입력" 라디오가 선택돼야 CKEditor가 활성화됨(기본 on이지만 안전 차원에서 선택).
  if (layout.reasonDirectRadio) {
    await page.locator(`#${layout.reasonDirectRadio}`).check({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(300);
  }

  const hasCKE = await page.waitForFunction(
    () => typeof CKEDITOR !== 'undefined' && Object.keys(CKEDITOR.instances).length > 0,
    { timeout: 10000 }
  ).then(() => true).catch(() => false);
  if (!hasCKE) throw new Error('CKEditor 인스턴스를 찾을 수 없음 (10초 대기 초과)');

  // 에디터 본문(iframe) 클릭으로 포커스 확보(실패해도 setData는 동작 가능).
  await page.frameLocator('iframe.cke_wysiwyg_frame').locator('body').first().click({ timeout: 5000 }).catch(() => {});

  const result = await page.evaluate(({ html, editorId }) => {
    const keys = Object.keys(CKEDITOR.instances);
    const name = keys.includes(editorId) ? editorId : keys[0];
    const editor = CKEDITOR.instances[name];
    editor.setData(html);
    return { name, length: editor.getData().replace(/<[^>]+>/g, '').length };
  }, { html: reasonHtml, editorId: layout.reasonEditor });

  if (result.length === 0 && plainLen > 0) {
    throw new Error('CKEditor setData 후 글자수 0 — change 이벤트 미발화 가능성, 재시도 필요');
  }
}

// -------------------------------------------------------------------------
// 별지/내용파일 첨부 — Playwright filechooser로 OS 다이얼로그 대체
// -------------------------------------------------------------------------
async function attachSupplementFile(page, filePath, buttonSelector, buttonTextFallback) {
  const [chooser] = await Promise.all([
    page.waitForEvent('filechooser', { timeout: 5000 }),
    (async () => {
      if (buttonSelector) {
        const btn = page.locator(buttonSelector).first();
        if (await btn.count()) { await btn.click(); return; }
      }
      if (buttonTextFallback) { await page.getByText(buttonTextFallback, { exact: false }).first().click(); return; }
      throw new Error(`첨부 버튼을 찾을 수 없음: ${buttonSelector || buttonTextFallback}`);
    })(),
  ]);
  await chooser.setFiles(filePath);
  await page.waitForTimeout(1000);
}

// -------------------------------------------------------------------------
// 3단계: 섹션 등록(safeRegisterClick으로 통일)
// -------------------------------------------------------------------------
async function registerSection(page, buttonId) {
  const { safeRegisterClick } = require('./ecfs_safe_register');
  const result = await safeRegisterClick(page, { buttonSelector: `#${buttonId}` });
  return { registered: !!result?.ok, detail: result };
}

// 하위호환용(신청서 통합 등록 버튼)
async function clickRegisterAndVerify(page) {
  return registerSection(page, FIELD_IDS.등록버튼);
}

// -------------------------------------------------------------------------
// 오케스트레이션 — 레이아웃 감지 후 소장(2회 등록) / 신청서(1회 등록) 분기
// -------------------------------------------------------------------------
async function submitClaim(page, { purposeText, purposeFilePath, reasonHtml, reasonFilePath }) {
  const layout = await detectClaimLayout(page);
  if (!layout) throw new Error('청구취지/신청취지 섹션을 찾지 못함 — 문서작성 화면인지 확인 필요');

  await gotoClaimSection(page, layout);

  // 1) 취지 입력
  await fillClaimPurpose(page, layout, purposeText, purposeFilePath);
  // 소장은 청구취지를 먼저 등록해야 하므로 여기서 등록.
  if (layout.separate) {
    const r1 = await registerSection(page, layout.purposeSave);
    if (!r1.registered) {
      const t = r1.detail && Array.isArray(r1.detail.trace) ? r1.detail.trace.join(' ▷ ') : '';
      throw new Error(`청구취지 등록 확인 실패 ${t}`);
    }
  }

  // 2) 원인 입력
  await fillClaimReason(page, layout, reasonHtml, reasonFilePath);

  // 3) 등록 (소장: 청구원인 등록 / 신청: 통합 등록)
  const r2 = await registerSection(page, layout.separate ? layout.reasonSave : layout.save);
  if (!r2.registered) {
    const t = r2.detail && Array.isArray(r2.detail.trace) ? r2.detail.trace.join(' ▷ ') : '';
    throw new Error(`${layout.separate ? '청구원인' : '신청취지·이유'} 등록 확인 실패 ${t}`.trim());
  }

  return { registered: true, layout: layout.label };
}

module.exports = {
  CLAIM_LAYOUTS,
  detectClaimLayout,
  gotoClaimSection,
  fillClaimPurpose,
  fillClaimReason,
  attachSupplementFile,
  registerSection,
  clickRegisterAndVerify,
  submitClaim,
  FIELD_IDS,
  MAX_CHARS,
};
