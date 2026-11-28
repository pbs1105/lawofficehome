/* LOAS 공과금·보수 계산 엔진 (2단계, 2026-11-28)
 * 단일 출처: tools/rates/rates.json (요율표 1.0, 법무사 승인). 이 파일에는 세율·금액을 적지 않는다.
 * 사용: const calc = LOASCalc.create(rates); const r = calc.quote({ type: 're.buy', ... });
 *  → { type, title, items:[{ code, label, group, kind, amount|null, pending, formula, rateIds, warnings }], totals, warnings }
 * group = 노션 회계세부항목DB 「구분」 값(보수·부가세·공과금(대납)·예납금·기타실비)
 * kind  = 노션 「항목명」 값(보수·취등록세·국민주택채권·인지대·송달료·지방교육세·농어촌특별세·기타실비)
 * 안전 경계: 감면·중과 최종 판단, 채권 할인율, 법원 예납금은 엔진이 정하지 않는다(경고·확정 후 기재로 표시).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LOASCalc = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const floorTo = (v, unit) => Math.floor(v / unit + 1e-9) * unit; // 부동소수 오차 방지
  const won = (v) => Math.floor(v + 1e-9);
  const tax10 = (v) => floorTo(v, 10); // 지방세: 10원 미만 버림
  const fmt = (n) => (n == null ? '-' : Number(n).toLocaleString('ko-KR'));
  const pct = (r) => +(r * 100).toFixed(4) + '%';

  function create(rates) {
    if (!rates || !rates.meta) throw new Error('rates.json이 없습니다');
    const byId = {};
    for (const c of rates.categories) for (const it of c.items) byId[it.id] = it;
    const R = (id) => {
      const it = byId[id];
      if (!it) throw new Error('요율표에 없는 항목: ' + id);
      return it;
    };
    const V = (id) => R(id).value;
    const approved = !!rates.meta.approved;

    // 누진 구간표: [{prevMax,max,base,rate}] — 해당 구간 base + (금액-prevMax)×rate
    function progressive(ranges, amount) {
      const rs = Array.isArray(ranges) ? ranges : ranges.ranges;
      for (const r of rs) {
        const max = r.max === 'Infinity' || r.max == null ? Infinity : r.max;
        if (amount <= max) return { amount: won(r.base + Math.max(0, amount - r.prevMax) * r.rate), range: r };
      }
      throw new Error('구간표 범위 밖');
    }
    const rangeText = (r, label) => fmt(r.base) + '원' + (r.rate ? ' + (' + label + '−' + fmt(r.prevMax) + ')×' + +(r.rate * 10000).toFixed(2) + '/10,000' : '');

    // 국민주택채권 매입액: [min, max, 광역시, 그밖] 시가표준액의 1천분의 n, 1만원 단수 5천원 이상 올림·최저 1만원
    function bondRound(v) {
      if (v <= 0) return 0;
      const r = Math.floor(v / 10000) * 10000 + (v % 10000 >= 5000 ? 10000 : 0);
      return Math.max(r, 10000);
    }
    function bondPurchase(table, value, metro) {
      const t = V('bond.table')[table];
      for (const [min, max, a, b] of t) {
        if (value >= min && (max == null || value < max)) {
          const per = metro ? a : b;
          return { amount: bondRound(value * per / 1000), per };
        }
      }
      return { amount: 0, per: 0 };
    }

    function feeOf(id, filing) {
      const v = V(id);
      const k = filing || 'e-Form';
      if (v[k] == null) throw new Error(id + ': 신청방법 ' + k + ' 수수료 없음');
      return v[k];
    }

    // 결과 조립 도우미
    function builder(type, title) {
      const items = [];
      const warnings = [];
      const add = (o) => {
        const it = Object.assign({ warnings: [], pending: null, rateIds: [] }, o);
        if (it.amount != null) it.amount = Math.round(it.amount);
        items.push(it);
        return it;
      };
      return {
        add,
        warn: (w) => warnings.push(w),
        done() {
          const sum = (g) => items.filter((i) => g.includes(i.group) && i.amount != null).reduce((s, i) => s + i.amount, 0);
          const fee = sum(['보수']);
          if (fee > 0) add({ code: 'vat', label: '보수액의 부가가치세', group: '부가세', kind: '보수', amount: won(fee * 0.1), formula: '보수 합계 ' + fmt(fee) + '원 × 10%', rateIds: [] });
          const totals = {
            보수: sum(['보수']),
            부가세: sum(['부가세']),
            대납: sum(['공과금(대납)', '예납금', '기타실비']),
            합계: sum(['보수', '부가세', '공과금(대납)', '예납금', '기타실비']),
            확정후기재: items.filter((i) => i.amount == null).length,
          };
          if (!approved) warnings.unshift('요율표가 승인되지 않았습니다 — 계산값을 견적에 쓰지 마세요');
          return { type, title, ratesVersion: rates.meta.version, items, totals, warnings };
        },
      };
    }

    // 공통 조각
    function acqTax(b, value, rate, rateId, opt) {
      const amount = tax10(value * rate);
      b.add({ code: 'acq', label: '취득세', group: '공과금(대납)', kind: '취등록세', amount, formula: fmt(value) + '원 × ' + pct(rate), rateIds: [rateId] });
      let eduRate;
      if (opt.heavy) eduRate = (0.04 - 0.02) * 0.2;
      else if (opt.houseBuy) eduRate = rate * 0.5 * 0.2;
      else eduRate = Math.max(0, rate - 0.02) * 0.2;
      b.add({ code: 'edu', label: '지방교육세', group: '공과금(대납)', kind: '지방교육세', amount: tax10(value * eduRate), formula: fmt(value) + '원 × ' + pct(eduRate) + (opt.houseBuy ? ' (유상 주택: 세율×50%×20%)' : opt.heavy ? ' (중과: (4%−2%)×20%)' : ' ((세율−2%)×20%)'), rateIds: ['edu.acq'] });
      if (opt.agriExempt) {
        b.add({ code: 'agri', label: '농어촌특별세', group: '공과금(대납)', kind: '농어촌특별세', amount: 0, formula: '전용 85㎡ 이하 주택 비과세', rateIds: ['agri.acq'] });
      } else {
        const it = b.add({ code: 'agri', label: '농어촌특별세', group: '공과금(대납)', kind: '농어촌특별세', amount: tax10(value * 0.02 * 0.1), formula: fmt(value) + '원 × 2% × 10%', rateIds: ['agri.acq'] });
        if (opt.heavy) it.warnings.push('중과 주택은 농특세가 더 붙습니다 — 직원 확인');
        if (opt.agriNote) it.warnings.push(opt.agriNote);
      }
    }
    function bond(b, table, standardValue, metro, discountRate, label) {
      if (standardValue == null) {
        b.add({ code: 'bond', label: '국민주택채권 (본인부담금)', group: '공과금(대납)', kind: '국민주택채권', amount: null, pending: '시가표준액 확인 후 기재', formula: '시가표준액 미입력', rateIds: ['bond.table'] });
        return 0;
      }
      const p = table === 'mortgage' ? (() => {
        const m = V('bond.table').mortgage;
        if (standardValue < m.min) return { amount: 0, per: 0 };
        return { amount: Math.min(bondRound(standardValue * m.rate / 1000), bondRound(m.cap)), per: m.rate };
      })() : bondPurchase(table, standardValue, metro);
      if (!p.amount) {
        b.add({ code: 'bond', label: '국민주택채권', group: '공과금(대납)', kind: '국민주택채권', amount: 0, formula: '매입 기준 미만 — 매입 없음', rateIds: ['bond.table'] });
        return 0;
      }
      const base = (label || '시가표준액') + ' ' + fmt(standardValue) + '원 × ' + p.per + '/1,000 = 매입액 ' + fmt(p.amount) + '원';
      if (discountRate == null) {
        b.add({ code: 'bond', label: '국민주택채권 (본인부담금)', group: '공과금(대납)', kind: '국민주택채권', amount: null, pending: '매입일 할인율 확인 후 기재', formula: base, rateIds: ['bond.table'] });
      } else {
        b.add({ code: 'bond', label: '국민주택채권 (본인부담금)', group: '공과금(대납)', kind: '국민주택채권', amount: won(p.amount * discountRate), formula: base + ' × 할인율 ' + pct(discountRate), rateIds: ['bond.table'] });
      }
      return p.amount;
    }
    function reFee(b, id, count, filing) {
      const unit = feeOf(id, filing);
      b.add({ code: 'fee', label: '등기신청수수료', group: '공과금(대납)', kind: '기타실비', amount: unit * count, formula: fmt(unit) + '원(' + (filing || 'e-Form') + ') × 부동산 ' + count + '개', rateIds: [id] });
    }
    function reBosu(b, value, count, inp, tableId) {
      const p = progressive(V(tableId || 'bosu.re.base'), value);
      b.add({ code: 'bosu', label: '보수 — 기본보수', group: '보수', kind: '보수', amount: p.amount, formula: rangeText(p.range, '과세표준'), rateIds: [tableId || 'bosu.re.base'] });
      const ap = V('bosu.re.addProperty');
      const extra = Math.max(0, Math.min(count, 10) - 1) * ap['2~10개(1개마다)'] + Math.max(0, count - 10) * ap['10개 초과분(1개마다)'];
      if (extra) b.add({ code: 'bosu.add', label: '보수 — 부동산 추가 가산', group: '보수', kind: '보수', amount: extra, formula: '2~10개 1개마다 ' + fmt(ap['2~10개(1개마다)']) + '원, 10개 초과분 1개마다 ' + fmt(ap['10개 초과분(1개마다)']) + '원 (부동산 ' + count + '개)', rateIds: ['bosu.re.addProperty'] });
      if (inp.foreignRate) {
        const r = Math.min(inp.foreignRate, V('bosu.foreign'));
        const it = b.add({ code: 'bosu.foreign', label: '보수 — 외국인·재외국민 가산', group: '보수', kind: '보수', amount: won(p.amount * r), formula: '기본보수 × ' + pct(r) + ' (100% 이내 재량)', rateIds: ['bosu.foreign'] });
        it.warnings.push('재량 가산 — 위임인에게 사유 설명');
      }
      return p.amount;
    }
    function agency(b, deed, bondAgency) {
      if (deed) b.add({ code: 'agency.deed', label: '대행료 — 등기원인증서 작성·검인·거래신고', group: '보수', kind: '보수', amount: V('bosu.agency.deed'), formula: '건당 ' + fmt(V('bosu.agency.deed')) + '원', rateIds: ['bosu.agency.deed'] });
      if (bondAgency) b.add({ code: 'agency.bond', label: '대행료 — 국민주택채권 매입·즉시매도', group: '보수', kind: '보수', amount: V('bosu.agency.bond'), formula: '건당 ' + fmt(V('bosu.agency.bond')) + '원', rateIds: ['bosu.agency.bond'] });
    }
    function stampTransfer(b, amount, isHouse) {
      if (isHouse && amount <= 100000000) {
        b.add({ code: 'stamp', label: '인지세 (계약서)', group: '공과금(대납)', kind: '인지대', amount: 0, formula: '주택 기재금액 1억 원 이하 비과세', rateIds: ['stamp.transfer'] });
        return;
      }
      for (const [max, t] of V('stamp.transfer')) {
        if (max == null || amount <= max) {
          b.add({ code: 'stamp', label: '인지세 (계약서)', group: '공과금(대납)', kind: '인지대', amount: t, formula: '기재금액 ' + fmt(amount) + '원 구간', rateIds: ['stamp.transfer'] });
          return;
        }
      }
    }
    const regTax = (b, label, amount, formula, rateId) => {
      b.add({ code: 'reg', label, group: '공과금(대납)', kind: '취등록세', amount, formula, rateIds: [rateId] });
      b.add({ code: 'edu.reg', label: '지방교육세(등록분)', group: '공과금(대납)', kind: '지방교육세', amount: tax10(amount * 0.2), formula: fmt(amount) + '원 × 20%', rateIds: ['edu.reg'] });
    };
    const pendingItem = (b, code, label, group, rateId, msg) => b.add({ code, label, group, kind: '기타실비', amount: null, pending: msg || '확정 후 기재', formula: '사무소 기준값 없음(요율표 1.0 결정)', rateIds: [rateId] });
    const manualBosu = (b, inp, label) => {
      if (inp.bosuManual != null) b.add({ code: 'bosu', label: label || '보수', group: '보수', kind: '보수', amount: won(inp.bosuManual), formula: '직원 입력(요율표에 표 없음)', rateIds: [] });
      else b.add({ code: 'bosu', label: label || '보수', group: '보수', kind: '보수', amount: null, pending: '보수 직접 입력', formula: '요율표에 이 사건 보수표 없음', rateIds: [] });
    };
    const need = (inp, keys) => { for (const k of keys) if (inp[k] == null || inp[k] === '') throw new Error('입력 누락: ' + k); };

    // ── 사건 유형 ──
    const TYPES = {
      're.buy': {
        title: '부동산 매매 소유권이전',
        inputs: ['price(취득가액)', 'propertyKind(house|farm|other)', 'standardValue(시가표준액)', 'metro', 'count', 'filing', 'houseUnder85', 'heavy', 'bondDiscountRate', 'foreignRate'],
        run(inp, b) {
          need(inp, ['price', 'propertyKind']);
          const count = inp.count || 1;
          const kind = inp.propertyKind;
          let rate; let rateId;
          if (kind === 'house') {
            rateId = 'acq.house.buy';
            if (inp.heavy) { rate = inp.heavyRate || null; }
            else if (inp.price <= 600000000) rate = V(rateId)['6억 이하'];
            else if (inp.price <= 900000000) rate = Math.round(((inp.price * 2 / 300000000) - 3) / 100 * 10000) / 10000;
            else rate = V(rateId)['9억 초과'];
          } else if (kind === 'farm') { rate = V('acq.farm.buy'); rateId = 'acq.farm.buy'; }
          else { rate = V('acq.other.buy'); rateId = 'acq.other.buy'; }
          if (rate == null) {
            b.add({ code: 'acq', label: '취득세(중과)', group: '공과금(대납)', kind: '취등록세', amount: null, pending: '중과 세율 확인 후 기재', formula: '다주택·법인 중과(지방세법 제13조의2)', rateIds: [rateId], warnings: ['중과 여부·세율은 직원이 판단'] });
          } else {
            acqTax(b, inp.price, rate, rateId, { houseBuy: kind === 'house' && !inp.heavy, heavy: inp.heavy, agriExempt: kind === 'house' && inp.houseUnder85 && !inp.heavy });
            if (kind === 'house') b.warn('감면(생애최초 등)·중과 해당 여부는 직원이 확인합니다');
          }
          const bp = bond(b, kind === 'house' ? 'house' : kind === 'farm' ? 'land' : 'other', inp.standardValue, inp.metro, inp.bondDiscountRate);
          stampTransfer(b, inp.price, kind === 'house');
          reFee(b, 'fee.re', count, inp.filing);
          reBosu(b, inp.price, count, inp);
          agency(b, inp.deedAgency !== false, bp > 0);
          if (kind === 'farm') b.warn('농지취득자격증명 필요 여부 확인');
        },
      },
      're.gift': {
        title: '부동산 증여 소유권이전',
        run(inp, b) {
          need(inp, ['value']);
          const count = inp.count || 1;
          acqTax(b, inp.value, V('acq.gift'), 'acq.gift', { agriExempt: false });
          b.warn('조정대상지역 주택 증여 중과(12%) 해당 여부는 직원이 확인합니다');
          const bp = bond(b, 'gratuitous', inp.standardValue != null ? inp.standardValue : inp.value, inp.metro, inp.bondDiscountRate);
          stampTransfer(b, inp.value, inp.propertyKind === 'house');
          reFee(b, 'fee.re', count, inp.filing);
          reBosu(b, inp.value, count, inp);
          agency(b, inp.deedAgency !== false, bp > 0);
        },
      },
      're.inherit': {
        title: '상속 소유권이전',
        run(inp, b) {
          need(inp, ['value']);
          const count = inp.count || 1;
          const id = 'acq.inherit';
          const rate = inp.farm ? V(id)['농지'] : V(id)['농지 외'];
          acqTax(b, inp.value, rate, id, { agriNote: '자경농지·1가구 1주택 상속 등 농특세 비과세·감면은 직원 확인' });
          const bp = bond(b, 'gratuitous', inp.standardValue != null ? inp.standardValue : inp.value, inp.metro, inp.bondDiscountRate);
          reFee(b, 'fee.re.inherit', count, inp.filing === '전자' ? 'e-Form' : inp.filing);
          reBosu(b, inp.value, count, inp);
          agency(b, false, bp > 0);
          if (inp.filing === '전자') b.warn('상속등기 수수료는 서면·e-Form만 요율표에 있어 e-Form으로 계산했습니다');
        },
      },
      're.mortgage': {
        title: '근저당권 설정',
        run(inp, b) {
          need(inp, ['claim']);
          const count = inp.count || 1;
          const reg = Math.max(tax10(inp.claim * V('reg.mortgage')), V('reg.other'));
          regTax(b, '등록면허세', reg, fmt(inp.claim) + '원(채권최고액) × ' + pct(V('reg.mortgage')) + ' (최저 ' + fmt(V('reg.other')) + '원)', 'reg.mortgage');
          const bp = bond(b, 'mortgage', inp.claim, inp.metro, inp.bondDiscountRate, '채권최고액');
          reFee(b, 'fee.re', count, inp.filing);
          reBosu(b, inp.claim, count, inp, inp.additional ? 'bosu.re.mortgageAdd' : 'bosu.re.base');
          agency(b, false, bp > 0);
          b.warn('은행 근저당은 사무소 정액보수(전자신청) 기준이 따로 있으면 그 금액을 씁니다');
        },
      },
      're.trust': {
        title: '신탁등기(소유권이전 및 신탁)',
        run(inp, b) {
          need(inp, ['value']);
          const count = inp.count || 1;
          b.add({ code: 'acq', label: '취득세', group: '공과금(대납)', kind: '취등록세', amount: 0, formula: '위탁자→수탁자 이전 비과세(지방세법 제9조 제3항)', rateIds: ['acq.trust'] });
          regTax(b, '등록면허세(신탁등기)', V('reg.trust') * count, fmt(V('reg.trust')) + '원 × ' + count + '건', 'reg.trust');
          b.add({ code: 'bond', label: '국민주택채권', group: '공과금(대납)', kind: '국민주택채권', amount: 0, formula: '신탁 이전 매입 제외', rateIds: ['bond.trust'] });
          reFee(b, 'fee.trust', count, inp.filing);
          reBosu(b, inp.value, count, inp);
          b.warn('신탁등기 보수를 기본보수표로 계산했습니다 — 사무소 기준이 다르면 수정');
        },
      },
      're.other': {
        title: '그 밖의 부동산등기(말소·변경 등)',
        run(inp, b) {
          const count = inp.count || 1;
          regTax(b, '등록면허세', V('reg.other') * count, fmt(V('reg.other')) + '원 × ' + count + '건', 'reg.other');
          reFee(b, 'fee.re.other', count, inp.filing);
          manualBosu(b, inp);
        },
      },
      'corp.establish': {
        title: '주식회사 설립',
        run(inp, b) {
          need(inp, ['capital']);
          const rate = inp.nonprofit ? V('reg.corp.nonprofit') : V('reg.corp.establish');
          let reg = Math.max(tax10(inp.capital * rate), V('reg.corp.hq'));
          let f = fmt(inp.capital) + '원 × ' + pct(rate) + ' (최저 ' + fmt(V('reg.corp.hq')) + '원)';
          if (inp.metro) { reg = reg * V('reg.corp.metro'); f += ' × 대도시 중과 3배'; }
          regTax(b, '등록면허세', reg, f, inp.nonprofit ? 'reg.corp.nonprofit' : 'reg.corp.establish');
          if (inp.metro) b.warn('대도시 중과 해당 여부(설립 후 5년 내 대도시 본점 등)는 직원 확인');
          b.add({ code: 'fee', label: '등기신청수수료', group: '공과금(대납)', kind: '기타실비', amount: feeOf('fee.corp.establish', inp.filing), formula: (inp.filing || 'e-Form') + ' 설립', rateIds: ['fee.corp.establish'] });
          const p = progressive(V('bosu.corp.establish'), inp.capital);
          b.add({ code: 'bosu', label: '보수 — 설립', group: '보수', kind: '보수', amount: p.amount, formula: rangeText(p.range, '납입금액'), rateIds: ['bosu.corp.establish'] });
          if (inp.notary) pendingItem(b, 'notary', '정관·의사록 인증 공증료', '기타실비', 'cost.notary', '공증인 수수료 확정 후 기재');
        },
      },
      'corp.capital': {
        title: '자본금 증가(유상증자)',
        run(inp, b) {
          need(inp, ['increase']);
          let reg = Math.max(tax10(inp.increase * V('reg.corp.establish')), V('reg.corp.hq'));
          let f = fmt(inp.increase) + '원 × ' + pct(V('reg.corp.establish')) + ' (최저 ' + fmt(V('reg.corp.hq')) + '원)';
          if (inp.metro) { reg = reg * V('reg.corp.metro'); f += ' × 대도시 중과 3배'; }
          regTax(b, '등록면허세', reg, f, 'reg.corp.establish');
          b.add({ code: 'fee', label: '등기신청수수료', group: '공과금(대납)', kind: '기타실비', amount: feeOf('fee.corp.other', inp.filing), formula: (inp.filing || 'e-Form') + ' 등기 목적 1개', rateIds: ['fee.corp.other'] });
          const p = progressive(V('bosu.corp.capital'), inp.increase);
          b.add({ code: 'bosu', label: '보수 — 자본증가', group: '보수', kind: '보수', amount: p.amount, formula: rangeText(p.range, '증가액'), rateIds: ['bosu.corp.capital'] });
          if (inp.notary) pendingItem(b, 'notary', '의사록 인증 공증료', '기타실비', 'cost.notary', '공증인 수수료 확정 후 기재');
        },
      },
      'corp.change': {
        title: '법인 변경등기(임원변경 등)',
        run(inp, b) {
          const n = inp.purposes || 1;
          regTax(b, '등록면허세', V('reg.corp.other') * n, fmt(V('reg.corp.other')) + '원 × 등기 목적 ' + n + '개', 'reg.corp.other');
          b.add({ code: 'fee', label: '등기신청수수료', group: '공과금(대납)', kind: '기타실비', amount: feeOf('fee.corp.other', inp.filing) * n, formula: fmt(feeOf('fee.corp.other', inp.filing)) + '원(' + (inp.filing || 'e-Form') + ') × ' + n, rateIds: ['fee.corp.other'] });
          manualBosu(b, inp, '보수 — 변경등기');
          if (inp.notary) pendingItem(b, 'notary', '의사록 인증 공증료', '기타실비', 'cost.notary', '공증인 수수료 확정 후 기재');
          b.warn('등록면허세는 등기 목적(사항)마다 계산했습니다 — 같은 신청서의 목적 수를 확인');
        },
      },
      'suit.complaint': {
        title: '민사 소장(지급명령)',
        run(inp, b) {
          need(inp, ['value', 'parties']);
          const v = inp.value;
          let inji = null;
          for (const [max, f] of V('inji.complaint')) {
            if (max == null || v <= max) {
              const m = f.match(/소가×(\d+)\/10000(?:\+([\d,]+))?/);
              inji = v * Number(m[1]) / 10000 + (m[2] ? Number(m[2].replace(/,/g, '')) : 0);
              break;
            }
          }
          const steps = [];
          inji = floorTo(inji, 100); steps.push('100원 미만 버림');
          if (inp.paymentOrder) { inji = floorTo(inji * V('inji.paymentOrder'), 100); steps.push('지급명령 1/10'); }
          if (inp.electronic) { inji = floorTo(inji * V('inji.electronic'), 100); steps.push('전자소송 9/10'); }
          inji = Math.max(inji, 1000);
          b.add({ code: 'inji', label: '인지대', group: '공과금(대납)', kind: '인지대', amount: inji, formula: '소가 ' + fmt(v) + '원 · ' + steps.join(' · ') + ' (최저 1,000원)', rateIds: ['inji.complaint'].concat(inp.paymentOrder ? ['inji.paymentOrder'] : [], inp.electronic ? ['inji.electronic'] : []) });
          if (inp.paymentOrder) {
            b.add({ code: 'song', label: '송달료', group: '공과금(대납)', kind: '송달료', amount: null, pending: '송달료 확정 후 기재', formula: '지급명령 납부 기준이 요율표에 없음', rateIds: ['song.unit'] });
          } else {
            const basis = V('song.basis.civil');
            const times = v <= 30000000 ? basis['가소'] : basis['가합·가단'];
            b.add({ code: 'song', label: '송달료', group: '공과금(대납)', kind: '송달료', amount: inp.parties * times * V('song.unit'), formula: '당사자 ' + inp.parties + '명 × ' + times + '회분 × ' + fmt(V('song.unit')) + '원 (' + (v <= 30000000 ? '소액' : '가합·가단') + ')', rateIds: ['song.basis.civil', 'song.unit'] });
          }
          const tbl = inp.paymentOrder ? V('bosu.litigation').paymentOrder : V('bosu.litigation').ranges;
          const p = progressive(tbl, v);
          b.add({ code: 'bosu', label: inp.paymentOrder ? '보수 — 지급명령 신청서 작성' : '보수 — 소장 작성', group: '보수', kind: '보수', amount: p.amount, formula: rangeText(p.range, '소가'), rateIds: ['bosu.litigation'] });
          if (inp.hardRate) {
            const r = Math.min(inp.hardRate, 2.5);
            const it = b.add({ code: 'bosu.hard', label: '보수 — 고난도 사건 가산', group: '보수', kind: '보수', amount: won(p.amount * r), formula: '기본보수 × ' + pct(r) + ' (250% 이내, 제24조 제2항)', rateIds: ['bosu.litigation'] });
            it.warnings.push('적용 사유와 산정 기준을 위임인에게 설명해야 합니다');
          }
        },
      },
      'enf.provisional': {
        title: '부동산 가압류·가처분 신청',
        run(inp, b) {
          need(inp, ['claim']);
          b.add({ code: 'inji', label: '인지대', group: '공과금(대납)', kind: '인지대', amount: V('inji.provisional'), formula: '정액', rateIds: ['inji.provisional'] });
          const reg = Math.max(tax10(inp.claim * V('reg.provisional')), V('reg.other'));
          regTax(b, '등록면허세(가압류 기입등기)', reg, fmt(inp.claim) + '원(청구금액) × ' + pct(V('reg.provisional')) + ' (최저 ' + fmt(V('reg.other')) + '원)', 'reg.provisional');
          b.add({ code: 'song', label: '송달료', group: '공과금(대납)', kind: '송달료', amount: null, pending: '송달료 확정 후 기재', formula: '보전처분 납부 기준이 요율표에 없음', rateIds: ['song.unit'] });
          manualBosu(b, inp);
          b.warn('등기촉탁 수수료·담보제공(공탁금·보증보험) 비용은 별도');
        },
      },
      'ins.personalRehab': {
        title: '개인회생 신청',
        run(inp, b) {
          need(inp, ['debt', 'creditors']);
          b.add({ code: 'inji', label: '인지대', group: '공과금(대납)', kind: '인지대', amount: V('inji.rehab'), formula: '정액', rateIds: ['inji.rehab'] });
          const times = 10 + inp.creditors * 8;
          b.add({ code: 'song', label: '송달료', group: '공과금(대납)', kind: '송달료', amount: times * V('song.unit'), formula: '(10회 + 채권자 ' + inp.creditors + '명 × 8회) × ' + fmt(V('song.unit')) + '원', rateIds: ['song.personalRehab', 'song.unit'] });
          pendingItem(b, 'court.rehab', '예납 — 회생위원 보수', '예납금', 'court.rehabCommissioner', '법원 예납명령 확정 후 기재');
          const p = progressive(V('bosu.insolvency').rehabilitation, inp.debt);
          b.add({ code: 'bosu', label: '보수 — 개인회생 신청', group: '보수', kind: '보수', amount: p.amount, formula: rangeText(p.range, '채무액'), rateIds: ['bosu.insolvency'] });
        },
      },
      'inh.renounce': {
        title: '상속포기·한정승인 신고',
        run(inp, b) {
          need(inp, ['persons']);
          b.add({ code: 'inji', label: '인지대', group: '공과금(대납)', kind: '인지대', amount: V('gasa.ra') * inp.persons, formula: fmt(V('gasa.ra')) + '원 × 신고인 ' + inp.persons + '명', rateIds: ['gasa.ra'] });
          b.add({ code: 'song', label: '송달료', group: '공과금(대납)', kind: '송달료', amount: inp.persons * 6 * V('song.unit'), formula: '당사자 ' + inp.persons + '명 × 6회분 × ' + fmt(V('song.unit')) + '원', rateIds: ['song.renounce', 'song.unit'] });
          manualBosu(b, inp);
          if (inp.limited) b.warn('한정승인은 청산 절차(공고·배당) 보수를 따로 정합니다');
        },
      },
      'dep.deposit': {
        title: '공탁',
        run(inp, b) {
          need(inp, ['amount']);
          const p = progressive(V('bosu.deposit'), inp.amount);
          b.add({ code: 'bosu', label: '보수 — 공탁', group: '보수', kind: '보수', amount: p.amount, formula: rangeText(p.range, '공탁금'), rateIds: ['bosu.deposit'] });
          if (inp.notices) b.add({ code: 'song', label: '우편료(공탁 통지)', group: '공과금(대납)', kind: '송달료', amount: inp.notices * V('song.deposit'), formula: inp.notices + '회분 × ' + fmt(V('song.deposit')) + '원', rateIds: ['song.deposit'] });
          if (inp.execution) b.warn('집행공탁은 위임인과 협의해 가산보수를 정할 수 있습니다(제19조 제2항)');
        },
      },
    };

    return {
      version: rates.meta.version,
      approved,
      types: Object.keys(TYPES).map((k) => ({ type: k, title: TYPES[k].title })),
      quote(input) {
        const t = TYPES[input && input.type];
        if (!t) throw new Error('알 수 없는 사건 유형: ' + (input && input.type));
        const b = builder(input.type, t.title);
        t.run(input, b);
        return b.done();
      },
      _progressive: progressive,
      _bondRound: bondRound,
    };
  }

  return { create };
});
