/** 오프라인 단위 테스트 — determineClaimType */
const assert = require('assert');
const { determineClaimType } = require('./ecfs_claim_type');

let n = 0; const t = (name, fn) => { n++; try { fn(); console.log(`  ✓ ${name}`); } catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; } };

console.log('determineClaimType 테스트');

t('명시 재산권상청구 → 그대로', () => {
  assert.strictEqual(determineClaimType({ claimType: '재산권상청구' }).claimType, '재산권상청구');
});
t('명시 "비재산권상 청구"(띄어쓰기) → 정규화', () => {
  assert.strictEqual(determineClaimType({ claimType: '비재산권상 청구' }).claimType, '비재산권상청구');
});
t('대여금 → 재산권상청구', () => {
  const r = determineClaimType({ 청구유형: '대여금' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.claimType, '재산권상청구');
});
t('건물명도 → 재산권상청구', () => {
  assert.strictEqual(determineClaimType({ 청구유형: '건물명도' }).claimType, '재산권상청구');
});
t('해고무효확인 → 비재산권상청구', () => {
  assert.strictEqual(determineClaimType({ 청구유형: '해고무효확인' }).claimType, '비재산권상청구');
});
t('★ 병합(건물명도 + 총회결의무효확인) → 비재산권상청구', () => {
  const r = determineClaimType({ 청구유형들: ['건물명도', '총회결의무효확인'] });
  assert.strictEqual(r.claimType, '비재산권상청구'); assert.ok(/병합/.test(r.note || ''));
});
t('★ 병합 문자열("대여금 및 해고무효확인") → 비재산권상청구', () => {
  assert.strictEqual(determineClaimType({ 청구유형: '대여금 및 해고무효확인' }).claimType, '비재산권상청구');
});
t('재산권상만 병합(대여금 + 손해배상) → 재산권상청구', () => {
  assert.strictEqual(determineClaimType({ 청구유형들: ['대여금', '손해배상'] }).claimType, '재산권상청구');
});
t('분류 불명 청구유형 → 확인 필요', () => {
  const r = determineClaimType({ 청구유형: '특이한신종청구' });
  assert.strictEqual(r.needsConfirmation, true);
});
t('입력 전무 → 확인 필요', () => {
  assert.strictEqual(determineClaimType({}).needsConfirmation, true);
});

console.log(`총 ${n}개 실행`);
