/** 오프라인 단위 테스트 — determineCaseName */
const assert = require('assert');
const { determineCaseName } = require('./ecfs_case_name');

let n = 0; const t = (name, fn) => { n++; try { fn(); console.log(`  ✓ ${name}`); } catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; } };

console.log('determineCaseName 테스트');

t('법무사가 사건명 명시(표준) → dropdown', () => {
  const r = determineCaseName({ 사건명: '대여금' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.mode, 'dropdown'); assert.strictEqual(r.caseName, '대여금');
});

t('법무사가 사건명 명시(비표준) → custom', () => {
  const r = determineCaseName({ 사건명: '건물명도(인도) 등 청구의 소' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.mode, 'custom');
});

t('청구유형 대여금 → 대여금(dropdown)', () => {
  const r = determineCaseName({ 청구유형: '대여금' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.caseName, '대여금'); assert.strictEqual(r.dropdown, true);
});

t('청구유형 건물명도 → 건물인도(정식 유형은 확실히 매칭)', () => {
  const r = determineCaseName({ 청구유형: '건물명도' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.caseName, '건물인도');
});

t('자유 텍스트에 조사가 끼면(건물을 인도) 강제 매칭하지 않고 확인 요구(안전)', () => {
  const r = determineCaseName({ 청구요지: '피고는 원고에게 별지 건물을 인도하라' });
  assert.strictEqual(r.needsConfirmation, true); // 오분류보다 확인이 안전
});

t('손해배상 → 애매(후보 6종, 확인 필요)', () => {
  const r = determineCaseName({ 청구유형: '손해배상' });
  assert.strictEqual(r.needsConfirmation, true); assert.ok(r.candidates.includes('손해배상(자)')); assert.ok(r.candidates.length >= 5);
});

t('매칭 없음 → 확인 필요(후보 없음)', () => {
  const r = determineCaseName({ 청구유형: '알수없는특이청구' });
  assert.strictEqual(r.needsConfirmation, true); assert.strictEqual(r.candidates.length, 0);
});

t('입력 전무 → 확인 필요', () => {
  const r = determineCaseName({});
  assert.strictEqual(r.needsConfirmation, true);
});

t('소유권이전등기 청구요지 → 소유권이전등기', () => {
  const r = determineCaseName({ 청구요지: '소유권이전등기 절차를 이행하라' });
  assert.strictEqual(r.caseName, '소유권이전등기');
});

t('규칙 매핑 우선 — 청구유형이 명시 사건명보다 우선', () => {
  const r = determineCaseName({ 사건명: '아무거나커스텀', 청구유형: '대여금' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.caseName, '대여금');
});

t('손해배상 + 하위유형 명시 → 그 하위유형 채택(확인 생략)', () => {
  const r = determineCaseName({ 사건명: '손해배상(자)', 청구유형: '손해배상' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.caseName, '손해배상(자)');
});

t('청구유형 없이 명시 사건명만 → 그대로 사용', () => {
  const r = determineCaseName({ 사건명: '총회결의무효확인' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.mode, 'custom');
});

console.log(`총 ${n}개 실행`);
