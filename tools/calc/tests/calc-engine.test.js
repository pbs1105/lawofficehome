// 계산 엔진 검산 — 기대값은 법령·보수표로 손계산(엔진 출력에서 가져오지 않음)
// 실행: node tools/calc/tests/calc-engine.test.js
const path = require('path');
const assert = require('assert');
const rates = require(path.join(__dirname, '../../rates/rates.json'));
const calc = require(path.join(__dirname, '../calc-engine.js')).create(rates);

let pass = 0; let fail = 0;
const amt = (r, code) => { const it = r.items.find((i) => i.code === code); return it ? it.amount : undefined; };
function check(name, input, expect) {
  let r;
  try { r = calc.quote(input); } catch (e) { fail++; console.log('✖', name, '—', e.message); return; }
  const bad = [];
  for (const [code, v] of Object.entries(expect)) {
    const got = code.startsWith('total.') ? r.totals[code.slice(6)] : amt(r, code);
    if (got !== v) bad.push(code + ': 기대 ' + v + ' / 결과 ' + got);
  }
  if (bad.length) { fail++; console.log('✖', name, '\n   ' + bad.join('\n   ')); } else { pass++; console.log('✔', name); }
  return r;
}

// ── 부동산 매매 ──
check('매매 주택 3.5억(85㎡ 이하, 광역시, 시가표준 2억, 할인율 5%)', { type: 're.buy', price: 350000000, propertyKind: 'house', houseUnder85: true, standardValue: 200000000, metro: true, count: 1, filing: 'e-Form', bondDiscountRate: 0.05 },
  { acq: 3500000, edu: 350000, agri: 0, bond: 230000, stamp: 150000, fee: 15000, bosu: 480000, 'agency.deed': 50000, 'agency.bond': 40000, vat: 57000 });
check('매매 주택 7억(6~9억 세율 1.67%)', { type: 're.buy', price: 700000000, propertyKind: 'house', count: 1 },
  { acq: 11690000, edu: 1169000, agri: 1400000, bosu: 740000 });
check('매매 주택 7억 중과 8% — 교육세 280만', { type: 're.buy', price: 700000000, propertyKind: 'house', heavy: true, heavyRate: 0.08, count: 1 },
  { acq: 56000000, edu: 2800000 });
check('매매 주택 중과 세율 미입력 → 확정 후 기재', { type: 're.buy', price: 700000000, propertyKind: 'house', heavy: true, count: 1 },
  { acq: null });
check('매매 주택 1억 이하 인지세 비과세', { type: 're.buy', price: 90000000, propertyKind: 'house', count: 1 },
  { acq: 900000, stamp: 0, bosu: 250000 });
check('매매 토지(그 밖) 3억 부동산 3개', { type: 're.buy', price: 300000000, propertyKind: 'other', count: 3, filing: '전자' },
  { acq: 12000000, edu: 1200000, agri: 600000, fee: 30000, bosu: 440000, 'bosu.add': 60000 });

// ── 증여·상속·근저당·신탁 ──
check('증여 주택 2억(그 밖 지역, 할인율 4%)', { type: 're.gift', value: 200000000, standardValue: 200000000, propertyKind: 'house', metro: false, bondDiscountRate: 0.04 },
  { acq: 7000000, edu: 600000, agri: 400000, bond: 312000, stamp: 150000, fee: 15000, bosu: 350000, vat: 44000 });
check('상속 3억 부동산 2개(시가표준 미입력)', { type: 're.inherit', value: 300000000, count: 2 },
  { acq: 8400000, edu: 480000, agri: 600000, bond: null, fee: 34000, bosu: 440000, 'bosu.add': 30000 });
check('근저당 설정 1.2억(할인율 미입력)', { type: 're.mortgage', claim: 120000000, metro: true },
  { reg: 240000, 'edu.reg': 48000, bond: null, fee: 15000, bosu: 278000, 'agency.bond': 40000, vat: 31800 });
check('근저당 설정 1천만 — 등록면허세 최저 6,000원·채권 없음', { type: 're.mortgage', claim: 10000000 },
  { reg: 20000, bond: 0, bosu: 210000 });
check('신탁등기 부동산 2개', { type: 're.trust', value: 500000000, count: 2, filing: 'e-Form' },
  { acq: 0, reg: 12000, 'edu.reg': 2400, bond: 0, fee: 12000, bosu: 600000, 'bosu.add': 30000 });

// ── 법인 ──
check('주식회사 설립 1억', { type: 'corp.establish', capital: 100000000 },
  { reg: 400000, 'edu.reg': 80000, fee: 28000, bosu: 530000, vat: 53000 });
check('주식회사 설립 1천만 대도시 — 최저세액×3', { type: 'corp.establish', capital: 10000000, metro: true },
  { reg: 337500, 'edu.reg': 67500, bosu: 420000 });
check('증자 3억', { type: 'corp.capital', increase: 300000000 },
  { reg: 1200000, 'edu.reg': 240000, fee: 5000, bosu: 555000 });
check('임원변경 목적 2개(보수 직접 입력 33만)', { type: 'corp.change', purposes: 2, bosuManual: 330000 },
  { reg: 80400, 'edu.reg': 16080, fee: 10000, bosu: 330000, vat: 33000 });

// ── 소송·집행 ──
check('소장 소가 5천만 당사자 2명', { type: 'suit.complaint', value: 50000000, parties: 2 },
  { inji: 230000, song: 169200, bosu: 580000 });
check('지급명령 5천만 — 인지 23,000', { type: 'suit.complaint', value: 50000000, parties: 2, paymentOrder: true },
  { inji: 23000, song: null, bosu: 262000 });
check('전자소송 소액 1천만 당사자 2명', { type: 'suit.complaint', value: 10000000, parties: 2, electronic: true },
  { inji: 45000, song: 112800, bosu: 560000 });
check('소장 고난도 100% 가산', { type: 'suit.complaint', value: 50000000, parties: 2, hardRate: 1 },
  { bosu: 580000, 'bosu.hard': 580000 });
check('부동산 가압류 청구 5천만', { type: 'enf.provisional', claim: 50000000 },
  { inji: 10000, reg: 100000, 'edu.reg': 20000, song: null, bosu: null });

// ── 회생·상속포기·공탁 ──
check('개인회생 채무 8천만 채권자 10명', { type: 'ins.personalRehab', debt: 80000000, creditors: 10 },
  { inji: 30000, song: 507600, 'court.rehab': null, bosu: 1054000, vat: 105400 });
check('상속포기 3명 — 송달료 101,520', { type: 'inh.renounce', persons: 3 },
  { inji: 15000, song: 101520, bosu: null });
check('공탁 2억(정정된 구간)', { type: 'dep.deposit', amount: 200000000 }, { bosu: 275000 });
check('공탁 4억(정정된 구간)', { type: 'dep.deposit', amount: 400000000 }, { bosu: 415000 });

// ── 단수 처리 ──
const br = calc._bondRound;
for (const [v, e] of [[4594000, 4590000], [4595000, 4600000], [3000, 10000], [0, 0]]) {
  try { assert.strictEqual(br(v), e); pass++; console.log('✔ 채권 단수', v, '→', e); } catch (e2) { fail++; console.log('✖ 채권 단수', v, '기대', e, '결과', br(v)); }
}
// 입력 누락은 오류로 막는다
try { calc.quote({ type: 're.buy', propertyKind: 'house' }); fail++; console.log('✖ 입력 누락 미검출'); } catch (e) { pass++; console.log('✔ 입력 누락 검출 —', e.message); }

console.log('\n검산 ' + pass + '건 통과 / ' + fail + '건 실패');
process.exit(fail ? 1 : 0);
