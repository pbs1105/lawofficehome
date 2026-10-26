/** 오프라인 단위 테스트 — parseAddress */
const assert = require('assert');
const { parseAddress } = require('./ecfs_address');

let n = 0; const t = (name, fn) => { n++; try { fn(); console.log(`  ✓ ${name}`); } catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; } };

console.log('parseAddress 테스트');

t('도로명(읍면 포함) — 골든루트로129번길 30', () => {
  const r = parseAddress('경상남도 김해시 주촌면 골든루트로129번길 30');
  assert.strictEqual(r.matched, true);
  assert.strictEqual(r.sido, '경상남도'); assert.strictEqual(r.sigungu, '김해시');
  assert.strictEqual(r.roadName, '골든루트로129번길'); assert.strictEqual(r.buildingMain, '30'); assert.strictEqual(r.buildingSub, '');
});
t('본번-부번 — 서부로1701번안길 58-246', () => {
  const r = parseAddress('경상남도 김해시 주촌면 서부로1701번안길 58-246');
  assert.strictEqual(r.matched, true); assert.strictEqual(r.buildingMain, '58'); assert.strictEqual(r.buildingSub, '246');
});
t('대로 — 김해대로 2401', () => {
  const r = parseAddress('경상남도 김해시 김해대로 2401');
  assert.strictEqual(r.matched, true); assert.strictEqual(r.roadName, '김해대로'); assert.strictEqual(r.buildingMain, '2401');
});
t('서울 중구 — 세종대로 110', () => {
  const r = parseAddress('서울특별시 중구 세종대로 110');
  assert.strictEqual(r.matched, true); assert.strictEqual(r.sido, '서울특별시'); assert.strictEqual(r.sigungu, '중구');
});
t('창원시 의창구 결합', () => {
  const r = parseAddress('경상남도 창원시 의창구 중앙대로 300');
  assert.strictEqual(r.matched, true); assert.strictEqual(r.sigungu, '창원시 의창구'); assert.strictEqual(r.roadName, '중앙대로');
});
t('지번 주소(도로명 없음) → 확인 필요', () => {
  const r = parseAddress('경상남도 김해시 주촌면 선지리 30-11');
  assert.strictEqual(r.matched, false); assert.strictEqual(r.needsConfirmation, true);
});
t('시도 인식 불가 → 확인 필요', () => {
  assert.strictEqual(parseAddress('김해시 김해대로 2401').needsConfirmation, true);
});
t('빈 주소 → 확인 필요', () => {
  assert.strictEqual(parseAddress('').needsConfirmation, true);
});

console.log(`총 ${n}개 실행`);
