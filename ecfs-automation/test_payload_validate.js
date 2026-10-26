/**
 * test_payload_validate.js — 청구구분 정규화 · payload 사전검증 회귀 테스트
 * -----------------------------------------------------------------------
 * 실행: node test_payload_validate.js
 *
 * 왜 필요한가 (2026-07-29 실사건)
 *   admin 화면에서 실행하면 STEP2에서 늘 이렇게 멈췄다:
 *     "claimType은 '재산권상청구' 또는 '비재산권상청구'만 허용: "   ← 값이 비어 있음
 *
 *   원인: 전자소송포털 화면 라벨은 "비재산권상 청구"(띄어쓰기 있음)이고
 *   AI 추출(n8n·Gemini)도 그 문구를 그대로 가져온다. 그런데 admin의 select
 *   옵션값은 "비재산권상청구"(붙여쓰기)라, `select.value = "비재산권상 청구"`가
 *   **조용히 ''로 떨어진다**(HTML select 사양). 사용자는 포털 화면에서 라디오를
 *   아무리 다시 체크해도 소용이 없었다 — 자동화가 그 값을 폼에서 가져오기 때문.
 *
 *   그래서 ① 표기 차이를 흡수하는 정규화와 ② 포털을 건드리기 전에 값을 모두
 *   검증하는 사전검증을 넣었고, 이 테스트가 그 둘을 고정한다.
 * -----------------------------------------------------------------------
 */

const assert = require('assert');
const { normalizeClaimType } = require('./ecfs_case_basic_info');
const { validatePayload } = require('./ecfs_orchestrator');

let passed = 0;
const t = (name, fn) => {
  fn();
  passed += 1;
  console.log(`  ✅ ${name}`);
};

console.log('\n[1] 청구구분 표기 정규화');
{
  t('포털 라벨 그대로("비재산권상 청구")도 인식', () =>
    assert.strictEqual(normalizeClaimType('비재산권상 청구'), '비재산권상청구'));
  t('붙여쓰기 정규값 통과', () => assert.strictEqual(normalizeClaimType('비재산권상청구'), '비재산권상청구'));
  t('재산권상 변형 인식', () => {
    assert.strictEqual(normalizeClaimType('재산권상 청구'), '재산권상청구');
    assert.strictEqual(normalizeClaimType('재산권상의 청구'), '재산권상청구');
    assert.strictEqual(normalizeClaimType(' 재산권상 '), '재산권상청구');
  });
  t('빈 값·미상 값은 추측하지 않고 null', () => {
    assert.strictEqual(normalizeClaimType(''), null);
    assert.strictEqual(normalizeClaimType(null), null);
    assert.strictEqual(normalizeClaimType(undefined), null);
    assert.strictEqual(normalizeClaimType('금전청구'), null);
  });
  t('"비"를 놓쳐 재산권상으로 오분류하지 않는다', () =>
    assert.notStrictEqual(normalizeClaimType('비재산권상 청구'), '재산권상청구'));
}

console.log('\n[2] payload 사전검증 — 포털을 건드리기 전에 걸러낸다');
const validBase = {
  caseBasicInfo: { caseName: '건물명도(인도) 등 청구의 소', claimType: '비재산권상청구' },
  parties: [{ role: '원고', name: '홍길동' }, { role: '피고', name: '김철수' }],
  claim: { purposeText: '피고는 원고에게...', reasonHtml: '<p>사실관계</p>' },
};
{
  t('정상 payload는 오류 없음', () => assert.deepStrictEqual(validatePayload(validBase), []));

  t('이번 사고 재현 — claimType이 빈 문자열이면 잡아낸다', () => {
    const errs = validatePayload({ ...validBase, caseBasicInfo: { caseName: 'x', claimType: '' } });
    assert.strictEqual(errs.length, 1);
    assert.match(errs[0], /청구구분/);
    assert.match(errs[0], /받은 값: ""/); // 받은 값이 메시지에 그대로 보여야 원인 파악이 된다
  });

  t('띄어쓰기 있는 값은 정상으로 통과(정규화 덕분)', () =>
    assert.deepStrictEqual(
      validatePayload({ ...validBase, caseBasicInfo: { caseName: 'x', claimType: '비재산권상 청구' } }),
      []
    ));

  t('재산권상청구인데 소가 없으면 잡아낸다', () => {
    const errs = validatePayload({ ...validBase, caseBasicInfo: { caseName: 'x', claimType: '재산권상청구' } });
    assert.strictEqual(errs.length, 1);
    assert.match(errs[0], /소가/);
  });

  t('비재산권상청구는 소가가 없어도 정상(포털이 자동 설정)', () =>
    assert.deepStrictEqual(
      validatePayload({ ...validBase, caseBasicInfo: { caseName: 'x', claimType: '비재산권상청구' } }),
      []
    ));

  t('여러 문제를 한 번에 모아서 알려준다', () => {
    const errs = validatePayload({ caseBasicInfo: { claimType: null }, parties: [], claim: {} });
    assert.ok(errs.length >= 4, `4건 이상 나와야 함, 실제 ${errs.length}건: ${errs.join(' | ')}`);
    assert.ok(errs.some((e) => /사건명/.test(e)));
    assert.ok(errs.some((e) => /청구구분/.test(e)));
    assert.ok(errs.some((e) => /당사자/.test(e)));
    assert.ok(errs.some((e) => /신청취지/.test(e)));
  });

  t('당사자 role 오타를 잡아낸다', () => {
    const errs = validatePayload({ ...validBase, parties: [{ role: '채권자', name: 'x' }] });
    assert.strictEqual(errs.length, 1);
    assert.match(errs[0], /role/);
  });

  t('resumeFrom으로 건너뛴 단계는 검증하지 않는다', () =>
    assert.deepStrictEqual(
      validatePayload({ resumeFrom: 'evidence', caseBasicInfo: null, parties: [], claim: null }),
      []
    ));
}

console.log(`\n총 ${passed}개 검증 통과\n`);
