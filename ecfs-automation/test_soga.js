/** 오프라인 단위 테스트 — calculateSoga */
const assert = require('assert');
const { calculateSoga } = require('./ecfs_soga');

let n = 0; const t = (name, fn) => { n++; try { fn(); console.log(`  ✓ ${name}`); } catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; } };

console.log('calculateSoga 테스트');

t('금전(대여금) 원금만 → 소가=원금, 부대청구 제외', () => {
  const r = calculateSoga({ 청구유형: '대여금', 원금: 50000000, 부대청구: '연 12% 지연손해금' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.소가, 50000000);
});
t('금전 병합(원금들 합산)', () => {
  const r = calculateSoga({ 청구유형: '대여금', 원금들: [30000000, 20000000] });
  assert.strictEqual(r.소가, 50000000);
});
t('금전인데 원금 없음 → 확인 필요', () => {
  assert.strictEqual(calculateSoga({ 청구유형: '대여금' }).needsConfirmation, true);
});

t('건물인도 — 시가표준액 제공 → 시가표준액×50%×1/2', () => {
  // 시가표준액 4억 → 목적물가액 2억 → ×1/2 = 1억
  const r = calculateSoga({ 청구유형: '건물인도', 목적물종류: '건물', 목적물가액: 400000000 });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.소가, 100000000);
});
t('건물인도 — 가액 미제공 → 추측 안 함, 확인 필요', () => {
  const r = calculateSoga({ 청구유형: '건물인도', 목적물종류: '건물' });
  assert.strictEqual(r.needsConfirmation, true); assert.ok(r.교차확인권고);
});
t('소유권이전등기 — 목적물가액 전부(비율1)', () => {
  // 시가표준액 2억 → 목적물가액 1억 → ×1 = 1억
  const r = calculateSoga({ 청구유형: '소유권이전등기', 목적물가액: 200000000 });
  assert.strictEqual(r.소가, 100000000);
});
t('토지: ㎡당 공시지가×면적 → 총액×50%×비율', () => {
  // 공시지가 100만/㎡ × 300㎡ = 3억 → ×50% = 1.5억 → 소유권이전등기(×1) = 1.5억
  const r = calculateSoga({ 청구유형: '소유권이전등기', 목적물종류: '토지', 개별공시지가: 1000000, 면적: 300 });
  assert.strictEqual(r.소가, 150000000);
});
t('근저당권말소 — 피담보채권액 기준', () => {
  const r = calculateSoga({ 청구유형: '근저당권말소', 피담보채권액: 144000000 });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.소가, 144000000);
});
t('근저당권말소 — 피담보채권액 미제공 → 확인 필요', () => {
  assert.strictEqual(calculateSoga({ 청구유형: '근저당권말소' }).needsConfirmation, true);
});

t('가압류 — 인지 정액 1만원, 소가=피보전채권액', () => {
  const r = calculateSoga({ 사건종류: '가압류', 피보전채권액: 50000000 });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.인지액, 10000); assert.strictEqual(r.소가, 50000000);
});

t('알 수 없는 청구유형 → 확인 필요 + 교차확인 권고', () => {
  const r = calculateSoga({ 청구유형: '특이한청구' });
  assert.strictEqual(r.needsConfirmation, true); assert.ok(r.교차확인권고);
});

console.log(`총 ${n}개 실행`);
