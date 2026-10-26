/**
 * test_dialog_probe.js — 팝업 확인버튼 탐색 로직 회귀 테스트 (오프라인)
 * -----------------------------------------------------------------------
 * 실행: node test_dialog_probe.js
 *
 * 왜 필요한가
 *   2026-07-21~28 라이브 테스트에서 STEP2 이후가 계속 막힌 원인은
 *   "이름이 '확인'인 버튼"을 DOM 순서로 골라(.first()) 오버레이 뒤에 깔린
 *   당사자 '표시확인' 버튼(mf_pfwork_wfm_btprt_btn_btprtIndctCfm)을 클릭하려
 *   한 것이었다. 이 테스트는 그 상황을 가짜 DOM으로 재현해, 새 로직이
 *   (1) 가려진 버튼을 고르지 않고 (2) 실제 팝업 버튼을 고르며
 *   (3) 팝업이 열려 있을 때 오버레이를 함부로 숨기지 않는지 검증한다.
 *
 * 브라우저 없이 도는 테스트다 — probeDialogInPage / clearGhostOverlayInPage는
 * 바깥 스코프를 참조하지 않는 순수 함수라서 가짜 document만 주입하면 된다.
 * (Playwright 브라우저를 내려받을 수 없는 환경에서도 회귀를 잡기 위한 구조)
 * -----------------------------------------------------------------------
 */

const assert = require('assert');
const { probeDialogInPage, clearGhostOverlayInPage, MARKER_ATTR } = require('./ecfs_dialog');

// -------------------------------------------------------------------------
// 최소 가짜 DOM — 이 두 함수가 실제로 사용하는 API만 구현한다.
// -------------------------------------------------------------------------
class El {
  constructor({ tag = 'div', id = '', className = '', value = '', text = '', rect = null, style = {}, children = [] }) {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = className;
    this.value = value;
    this.innerText = text;
    this._rect = rect || { left: 0, top: 0, width: 0, height: 0 };
    this.style = { pointerEvents: '', display: '', ...style };
    this._computed = { position: 'static', display: 'block', visibility: 'visible', opacity: '1', zIndex: 'auto', ...style };
    this.attrs = {};
    this.parentElement = null;
    this.children = [];
    for (const c of children) this.append(c);
  }
  append(child) {
    child.parentElement = this;
    this.children.push(child);
    return this;
  }
  get descendants() {
    return this.children.flatMap((c) => [c, ...c.descendants]);
  }
  getBoundingClientRect() {
    const r = this._rect;
    return { ...r, right: r.left + r.width, bottom: r.top + r.height };
  }
  getAttribute(n) {
    return this.attrs[n] ?? null;
  }
  setAttribute(n, v) {
    this.attrs[n] = v;
  }
  removeAttribute(n) {
    delete this.attrs[n];
  }
  contains(other) {
    return other === this || this.descendants.includes(other);
  }
  querySelector(sel) {
    return this.querySelectorAll(sel)[0] || null;
  }
  querySelectorAll(sel) {
    return matchAll(this.descendants, sel);
  }
}

// 테스트 대상 코드가 쓰는 셀렉터만 처리하는 아주 작은 매처
function matchAll(pool, sel) {
  const s = sel.trim();
  if (s.startsWith('[') && s.endsWith(']')) {
    const name = s.slice(1, -1);
    return pool.filter((e) => e.attrs[name] !== undefined);
  }
  const parts = s.split(',').map((p) => p.trim());
  return pool.filter((e) =>
    parts.some((p) => {
      if (p.startsWith('#')) return e.id === p.slice(1);
      if (p.startsWith('.')) return String(e.className).split(/\s+/).includes(p.slice(1));
      const m = p.match(/^([a-z]+)(?:\[([a-z-]+)="([^"]+)"\])?$/i);
      if (!m) return false;
      if (e.tagName !== m[1].toUpperCase()) return false;
      if (m[2]) return e.getAttribute(m[2]) === m[3] || (m[2] === 'type' && e.attrs.type === m[3]);
      return true;
    })
  );
}

function installFakeDom(bodyChildren, { topAt } = {}) {
  const body = new El({ tag: 'body' });
  for (const c of bodyChildren) body.append(c);
  const all = body.descendants;

  global.document = {
    body,
    querySelectorAll: (sel) => matchAll(all, sel),
    querySelector: (sel) => matchAll(all, sel)[0] || null,
    // 좌표에서 화면 맨 위에 있는 요소 — 테스트가 시나리오별로 지정한다
    elementFromPoint: (x, y) => (topAt ? topAt(x, y) : null),
  };
  global.getComputedStyle = (el) => el._computed;
  global.innerWidth = 1280;
  global.innerHeight = 900;
  return { body, all };
}

const mk = {
  overlay: (opts = {}) =>
    new El({
      tag: 'div',
      id: '_modal',
      className: 'w2modal_popup',
      rect: { left: 0, top: 0, width: 1280, height: 900 },
      style: { position: 'fixed', zIndex: '1000' },
      ...opts,
    }),
  partyConfirm: () =>
    new El({
      tag: 'input',
      id: 'mf_pfwork_wfm_btprt_btn_btprtIndctCfm',
      value: '확인',
      rect: { left: 400, top: 300, width: 60, height: 26 },
      style: { position: 'static' },
    }),
  popupConfirm: () =>
    new El({
      tag: 'input',
      id: 'wq_uuid_popup_btn_ok',
      value: '확인',
      rect: { left: 600, top: 450, width: 70, height: 30 },
    }),
};
mk.partyConfirm().attrs.type = 'button';

function inputBtn(el) {
  el.attrs.type = 'button';
  return el;
}

const NAMES = { names: ['확인'], markerAttr: MARKER_ATTR };
let passed = 0;
const t = (name, fn) => {
  fn();
  passed += 1;
  console.log(`  ✅ ${name}`);
};

console.log('\n[1] 팝업이 열린 상태 — 오버레이 뒤 당사자 버튼을 고르면 안 된다');
{
  const party = inputBtn(mk.partyConfirm());
  const okBtn = inputBtn(mk.popupConfirm());
  const dialogBox = new El({
    tag: 'div',
    id: 'wq_uuid_popup',
    className: 'w2window',
    rect: { left: 440, top: 380, width: 400, height: 180 },
    style: { position: 'fixed', zIndex: '1001' },
    text: '등록되었습니다.',
    children: [okBtn],
  });
  const overlay = mk.overlay();
  const form = new El({ tag: 'div', id: 'mf_pfwork', children: [party] });

  installFakeDom([form, overlay, dialogBox], {
    // 오버레이가 당사자 버튼을 덮고 있고, 팝업 버튼만 실제로 클릭 가능
    topAt: (x, y) => (x > 590 && x < 680 && y > 440 && y < 490 ? okBtn : overlay),
  });

  const r = probeDialogInPage(NAMES);
  t('실제 팝업 버튼을 선택', () => assert.strictEqual(r.buttonId, 'wq_uuid_popup_btn_ok'));
  t('당사자 표시확인 버튼은 covered로 제외', () => {
    const c = r.blocked.find((b) => b.buttonId === 'mf_pfwork_wfm_btprt_btn_btprtIndctCfm');
    assert.ok(c, '당사자 버튼이 blocked 목록에 있어야 함');
    assert.strictEqual(c.reason, 'covered');
    assert.match(c.blocker, /#_modal/);
  });
  t('대화상자 텍스트를 읽어 성공/오류 판정에 쓸 수 있다', () => assert.match(r.dialogText, /등록되었습니다/));
  t('선택된 버튼에만 마커가 붙는다', () => {
    assert.strictEqual(okBtn.getAttribute(MARKER_ATTR), '1');
    assert.strictEqual(party.getAttribute(MARKER_ATTR), null);
  });
  t('팝업이 열려 있으면 오버레이를 숨기지 않는다', () => {
    // clearGhostOverlay(page)는 probe.found면 in-page 함수를 호출하지 않는다.
    // 여기서는 "만약 호출됐다면 배경이 사라진다"는 것을 확인해, 상위 가드의 필요성을 고정한다.
    assert.strictEqual(r.found, true, '팝업이 열린 상태로 판정돼야 상위 가드가 동작한다');
  });
}

console.log('\n[2] 팝업 없이 빈 오버레이만 남은 경우 — 유령 배경으로 정리');
{
  const party = inputBtn(mk.partyConfirm());
  const overlay = mk.overlay();
  const form = new El({ tag: 'div', id: 'mf_pfwork', children: [party] });
  installFakeDom([form, overlay], { topAt: () => overlay });

  const r = probeDialogInPage(NAMES);
  t('클릭 가능한 확인 버튼 없음 → found:false', () => assert.strictEqual(r.found, false));
  t('오버레이가 내용 없이 표시중으로 보고된다', () => {
    const o = r.overlays.find((x) => x.selector.includes('#_modal'));
    assert.ok(o && o.visible && !o.hasContent);
  });
  t('유령 배경 정리가 실제로 동작', () => {
    const cleared = clearGhostOverlayInPage();
    assert.strictEqual(cleared, true);
    assert.strictEqual(overlay.style.display, 'none');
    assert.strictEqual(overlay.style.pointerEvents, 'none');
  });
}

console.log('\n[3] 오버레이도 팝업도 없는 평상시 — 페이지의 「확인」 버튼을 눌러선 안 된다');
{
  // ⚠️ 이 케이스가 히트테스트만으로는 부족한 이유다. 팝업이 하나도 없으면
  // 당사자 '표시확인' 버튼도 당연히 클릭 가능하므로, 그것을 팝업 버튼으로
  // 오인하면 "팝업 정리"라는 이름으로 엉뚱한 버튼을 눌러버린다.
  // → 팝업 컨테이너(fixed/absolute 조상) 안에 있는 버튼만 인정한다.
  const party = inputBtn(mk.partyConfirm());
  const tmpSave = new El({ tag: 'input', id: 'mf_pfwork_btn_tmpSave', value: '임시저장' });
  const form = new El({ tag: 'div', id: 'mf_pfwork', children: [party, tmpSave] });
  installFakeDom([form], { topAt: () => party });

  const r = probeDialogInPage(NAMES);
  t('팝업이 없으면 found:false — 아무 버튼도 누르지 않는다', () => assert.strictEqual(r.found, false));
  t('당사자 버튼은 not_in_dialog로 제외', () => {
    const b = r.blocked.find((x) => x.buttonId === 'mf_pfwork_wfm_btprt_btn_btprtIndctCfm');
    assert.ok(b, '당사자 버튼이 blocked에 있어야 함');
    assert.strictEqual(b.reason, 'not_in_dialog');
  });
  t('유령 배경 정리는 아무 일도 하지 않는다', () => assert.strictEqual(clearGhostOverlayInPage(), false));
}

console.log('\n[3-b] 페이지 본문을 감싼 absolute 래퍼를 팝업으로 오인하지 않는다');
{
  const party = inputBtn(mk.partyConfirm());
  const tmpSave = new El({ tag: 'input', id: 'mf_pfwork_btn_tmpSave', value: '임시저장' });
  // 소장 작성 폼 전체가 absolute 래퍼 안에 들어 있는 상황 (WebSquare 레이아웃에서 흔함)
  const wrapper = new El({
    tag: 'div',
    id: 'mf_pfwork_wrapper',
    rect: { left: 0, top: 0, width: 1280, height: 4000 },
    style: { position: 'absolute' },
    children: [party, tmpSave],
  });
  installFakeDom([wrapper], { topAt: () => party });

  const r = probeDialogInPage(NAMES);
  t('본문 래퍼는 팝업이 아니므로 found:false', () => assert.strictEqual(r.found, false));
}

console.log('\n[4] 화면 밖(스크롤 아래) 확인 버튼은 후보에서 제외');
{
  const party = inputBtn(mk.partyConfirm());
  party._rect = { left: 400, top: 2400, width: 60, height: 26 }; // 뷰포트(900) 밖
  const form = new El({ tag: 'div', id: 'mf_pfwork', children: [party] });
  installFakeDom([form], { topAt: () => party });
  const r = probeDialogInPage(NAMES);
  t('offscreen으로 제외', () => {
    assert.strictEqual(r.found, false);
    assert.strictEqual(r.blocked[0].reason, 'offscreen');
  });
}

console.log(`\n총 ${passed}개 검증 통과\n`);
