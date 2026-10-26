/** 오프라인 단위 테스트 — determineJurisdiction / resolveCourtFromAddress */
const assert = require('assert');
const { determineJurisdiction, resolveCourtFromAddress } = require('./ecfs_jurisdiction');

let n = 0; const t = (name, fn) => { n++; try { fn(); console.log(`  ✓ ${name}`); } catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; } };

console.log('determineJurisdiction 테스트');

t('주소 해석: 김해시 → 창원지방법원(본원)', () => {
  assert.strictEqual(resolveCourtFromAddress('경상남도 김해시 주촌면 골든루트로129번길 30'), '창원지방법원');
});
t('주소 해석: 진주시 → 진주지원', () => {
  assert.strictEqual(resolveCourtFromAddress('경상남도 진주시 ...'), '창원지방법원 진주지원');
});
t('주소 해석: 창원시 마산합포구 → 마산지원', () => {
  assert.strictEqual(resolveCourtFromAddress('경상남도 창원시 마산합포구 ...'), '창원지방법원 마산지원');
});
t('주소 해석: 통영시 → 통영지원', () => {
  assert.strictEqual(resolveCourtFromAddress('경상남도 통영시 ...'), '창원지방법원 통영지원');
});
t('주소 해석: 경남 외(서울) → null(미해결)', () => {
  assert.strictEqual(resolveCourtFromAddress('서울특별시 중구 ...'), null);
});

t('본안 대여금 — 피고·원고 모두 김해 → 단일 확정(창원지방법원)', () => {
  const r = determineJurisdiction({ 사건종류: '본안', 청구유형: '대여금', 피고주소: '김해시 삼계동', 원고주소: '김해시 내동' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.court, '창원지방법원');
});

t('본안 대여금 — 피고 김해, 원고 진주 → 경합(복수) 확인 필요', () => {
  const r = determineJurisdiction({ 사건종류: '본안', 청구유형: '대여금', 피고주소: '김해시', 원고주소: '진주시' });
  assert.strictEqual(r.needsConfirmation, true);
  const courts = r.candidates.map((c) => c.court);
  assert.ok(courts.includes('창원지방법원') && courts.includes('창원지방법원 진주지원'));
});

t('본안 건물명도 — 목적물 김해, 피고 통영 → 경합(부동산소재지 vs 피고주소)', () => {
  const r = determineJurisdiction({ 사건종류: '본안', 청구유형: '건물명도', 피고주소: '통영시', 목적물소재지: '김해시 주촌면' });
  assert.strictEqual(r.needsConfirmation, true);
  const courts = r.candidates.map((c) => c.court);
  assert.ok(courts.includes('창원지방법원') && courts.includes('창원지방법원 통영지원'));
});

t('가압류 — 목적물 김해 + 피고 서울(미해결) → 확인 필요(미해결 포함)', () => {
  const r = determineJurisdiction({ 사건종류: '가압류', 청구유형: '대여금', 목적물소재지: '김해시', 피고주소: '서울 중구', 원고주소: '서울 중구' });
  assert.strictEqual(r.needsConfirmation, true);
  assert.ok(r.unresolved.length >= 1); // 서울 주소 미해결
});

t('전속적 합의관할 → 단일 확정', () => {
  const r = determineJurisdiction({ 사건종류: '본안', 청구유형: '대여금', 피고주소: '진주시', 관할합의: { 법원: '서울중앙지방법원', 전속: true } });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.court, '서울중앙지방법원');
});

t('제출법원 명시 → 그대로 사용', () => {
  const r = determineJurisdiction({ 제출법원: '창원지방법원' });
  assert.strictEqual(r.matched, true); assert.strictEqual(r.court, '창원지방법원');
});

t('사실관계 부족 → 확인 필요', () => {
  const r = determineJurisdiction({ 사건종류: '본안', 청구유형: '대여금' });
  assert.strictEqual(r.needsConfirmation, true);
});

console.log(`총 ${n}개 실행`);
