/**
 * ecfs_claim_input.js
 * -----------------------------------------------------------------------
 * 전자소송포털(ecfs.scourt.go.kr) "신청취지 및 이유(청구취지 및 청구원인)"
 * 섹션 Playwright 자동화 파일럿.
 *
 * 근거 문서: ecfs-claim-input SKILL.md (Claude computer-use 스킬에서 실측된
 * DOM ID·CKEditor API·execCommand 패턴을 그대로 이식)
 *
 * ⚠️ Nexacro 절대 금지 사항 (스킬 문서 그대로 유지해야 하는 이유)
 *   - hidden 요소에 scrollIntoView() 호출 금지 → 페이지 이탈 유발.
 *     Playwright locator.scrollIntoViewIfNeeded()도 내부적으로 이 문제를
 *     일으킬 수 있으므로, 이 파일에서는 "보이는 요소"에 대해서만 사용한다.
 *   - window.mf_pfwork_* 전역 객체 직접 참조 금지 (Nexacro 컴포넌트
 *     초기화 로직 우발적 트리거) — 이 파일은 CKEDITOR 전역만 사용하고
 *     mf_pfwork_* 전역은 건드리지 않는다.
 *   - 등록 버튼에 JS .click() 금지 → Playwright locator.click()은 실제
 *     마우스 이벤트를 디스패치하므로 이 문제와 무관 (party-input 모듈과 동일)
 *   - TextArea에서 Tab 키 사용 금지 (들여쓰기 입력됨) — 이 파일은 Tab을
 *     사용하지 않는다.
 *
 * ⚠️ 미검증 상태 — 실제 ecfs.scourt.go.kr 라이브 세션 테스트 필요.
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const MAX_CHARS = 2000;

const FIELD_IDS = {
  신청취지textarea: 'mf_pfwork_wfm_aplyIntntResn_txa_ctt1',
  신청이유CKEditor인스턴스: 'mf_pfwork_wfm_aplyIntntResn_txa_ctt2_',
  등록버튼: 'mf_pfwork_wfm_aplyIntntResn_btn_save',
};

// -------------------------------------------------------------------------
// 0단계: 섹션 이동
// -------------------------------------------------------------------------
async function gotoClaimSection(page) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.getByText('신청취지', { exact: false }).first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  // 좌측 메뉴의 "신청취지 및 이유"(또는 "청구취지 및 청구원인") 클릭
  const menuItem = page.getByText(/신청취지 및 이유|청구취지 및 청구원인/, { exact: false }).first();
  await menuItem.click();
  await page.waitForTimeout(500);
}

// -------------------------------------------------------------------------
// 1단계: 신청취지(청구취지) 입력 — plain textarea, execCommand
// -------------------------------------------------------------------------
async function fillClaimPurpose(page, purposeText, purposeFilePath) {
  if (purposeText && purposeText.length <= MAX_CHARS) {
    const info = await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (!el || el.offsetWidth === 0) return { found: false };
      return { found: true };
    }, FIELD_IDS.신청취지textarea);

    if (!info.found) throw new Error('신청취지 textarea를 찾을 수 없음 — 섹션 진입 여부 확인 필요');

    await page.locator(`#${FIELD_IDS.신청취지textarea}`).click();
    const length = await page.evaluate(({ id, text }) => {
      const el = document.getElementById(id);
      el.focus();
      el.select();
      document.execCommand('insertText', false, text);
      return el.value.length;
    }, { id: FIELD_IDS.신청취지textarea, text: purposeText });

    if (length !== purposeText.length) {
      throw new Error(`신청취지 입력 검증 실패: 입력된 글자수(${length}) != 원본(${purposeText.length})`);
    }
  } else {
    // 2,000자 초과 → 별지 파일 첨부
    if (!purposeFilePath) {
      throw new Error('신청취지가 2,000자를 초과하지만 purposeFilePath가 제공되지 않음');
    }
    await attachSupplementFile(
      page,
      purposeFilePath,
      'button[id*="aplyIntnt"][id*="attachBtn"], [id*="aplyIntntResn"][id*="atch"]',
      '신청취지별지 첨부하기'
    );
  }
}

// -------------------------------------------------------------------------
// 2단계: 신청이유(청구원인) 입력 — CKEditor API (setData)
// -------------------------------------------------------------------------
async function fillClaimReason(page, reasonHtml, reasonFilePath) {
  const plainTextLength = reasonHtml ? reasonHtml.replace(/<[^>]+>/g, '').length : 0;

  if (plainTextLength > MAX_CHARS) {
    if (!reasonFilePath) {
      throw new Error('신청이유가 2,000자를 초과하지만 reasonFilePath가 제공되지 않음');
    }
    await attachSupplementFile(page, reasonFilePath, '[id*="aplyIntntResn"][id*="fileAttach"]', '내용파일 첨부하기');
    return;
  }

  // CKEditor 인스턴스 로딩 대기
  const hasCKE = await page.waitForFunction(() => {
    return typeof CKEDITOR !== 'undefined' && Object.keys(CKEDITOR.instances).length > 0;
  }, { timeout: 10000 }).then(() => true).catch(() => false);

  if (!hasCKE) throw new Error('CKEditor 인스턴스를 찾을 수 없음 (10초 대기 초과)');

  // 에디터 본문(iframe) 클릭 — 포커스 확보. scrollIntoView는 사용하지 않는다.
  const iframe = page.frameLocator('iframe.cke_wysiwyg_frame');
  await iframe.locator('body').click({ timeout: 5000 }).catch(() => {
    // iframe 클릭 실패 시 CKEditor API만으로 진행 (setData는 포커스 없이도 동작 가능)
  });

  const result = await page.evaluate((html) => {
    const instanceName = Object.keys(CKEDITOR.instances)[0];
    const editor = CKEDITOR.instances[instanceName];
    editor.setData(html);
    const textOnly = editor.getData().replace(/<[^>]+>/g, '');
    return { instanceName, length: textOnly.length };
  }, reasonHtml);

  if (result.length === 0 && plainTextLength > 0) {
    throw new Error('CKEditor setData 후 글자수 0 — change 이벤트 미발화 가능성, 재시도 필요');
  }
}

// -------------------------------------------------------------------------
// 별지/내용파일 첨부 — Playwright filechooser 이벤트로 OS 다이얼로그 대체
//   (원본 스킬은 OS 파일탐색기를 키보드로 조작했으나, Playwright는
//    setInputFiles로 그 과정을 완전히 생략할 수 있어 더 안정적이다)
// -------------------------------------------------------------------------
async function attachSupplementFile(page, filePath, buttonSelector, buttonTextFallback) {
  const [chooser] = await Promise.all([
    page.waitForEvent('filechooser', { timeout: 5000 }),
    (async () => {
      const btn = page.locator(buttonSelector).first();
      const count = await btn.count();
      if (count > 0) {
        await btn.click();
      } else if (buttonTextFallback) {
        await page.getByText(buttonTextFallback, { exact: false }).first().click();
      } else {
        throw new Error(`첨부 버튼을 찾을 수 없음: ${buttonSelector}`);
      }
    })(),
  ]);
  await chooser.setFiles(filePath);
  await page.waitForTimeout(1000);
}

// -------------------------------------------------------------------------
// 3단계: 등록 버튼 클릭 (Playwright 실제 클릭)
// -------------------------------------------------------------------------
async function clickRegisterAndVerify(page) {
  const btn = page.locator(`#${FIELD_IDS.등록버튼}`);
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
  await page.waitForTimeout(1500);

  const registered = await page
    .getByText('등록되었습니다', { exact: false })
    .first()
    .waitFor({ state: 'visible', timeout: 5000 })
    .then(() => true)
    .catch(() => false);

  if (registered) {
    // ⚠️ Phase 5: 정규식 부분일치 대신 exact:true — 다른 섹션의 "OO확인" 버튼과
    // 혼동되는 것을 방지 (safe_register.js 상단 주석 참조)
    await page.getByRole('button', { name: '확인', exact: true }).first().click().catch(() => {});
  }
  return { registered };
}

// -------------------------------------------------------------------------
// 오케스트레이션
// -------------------------------------------------------------------------
async function submitClaim(page, { purposeText, purposeFilePath, reasonHtml, reasonFilePath }) {
  await gotoClaimSection(page);
  await fillClaimPurpose(page, purposeText, purposeFilePath);
  await fillClaimReason(page, reasonHtml, reasonFilePath);
  const result = await clickRegisterAndVerify(page);
  if (!result.registered) {
    throw new Error('등록 확인 실패 — 화면 확인 후 수동 개입 필요');
  }
  return result;
}

module.exports = {
  gotoClaimSection,
  fillClaimPurpose,
  fillClaimReason,
  attachSupplementFile,
  clickRegisterAndVerify,
  submitClaim,
  FIELD_IDS,
  MAX_CHARS,
};
