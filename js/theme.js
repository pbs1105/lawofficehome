/* ============================================================
   다크/라이트 모드 전환 (theme.js)
   - <head> 에서 동기 로드해야 화면 깜빡임이 없다
   - <html data-theme-key="..." data-theme-default="system|dark|light">
   - [data-theme-toggle] 버튼이 있으면 그것을 쓰고, 없으면 우하단 버튼을 만든다
   - 다크 CSS(css/dark-*.css)는 scripts/build_dark_css.py 로 생성
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var KEY = root.getAttribute('data-theme-key') || 'theme';
  var DEFAULT = root.getAttribute('data-theme-default') || 'system';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(t) {
    try { localStorage.setItem(KEY, t); } catch (e) { /* 저장 불가 시 이번 방문만 적용 */ }
  }
  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function initial() {
    var s = stored();
    if (s === 'dark' || s === 'light') return s;
    return DEFAULT === 'system' ? systemTheme() : DEFAULT;
  }

  function updateButtons(t) {
    var btns = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < btns.length; i++) {
      // 색만으로 구분하지 않도록 아이콘 + 문구로 다음 상태를 표시
      btns[i].textContent = t === 'dark' ? '☀️ 라이트' : '🌙 다크';
      btns[i].setAttribute('aria-label', t === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
    }
  }

  function apply(t) {
    root.setAttribute('data-theme', t);
    updateButtons(t);
  }

  window.toggleTheme = function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    save(next);
    apply(next);
  };

  apply(initial());

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('[data-theme-toggle]')) {
      var style = document.createElement('style');
      style.textContent =
        '.theme-fab{position:fixed;right:16px;bottom:16px;z-index:900;padding:10px 16px;' +
        'border-radius:999px;font:600 14px/1 "Noto Sans KR",sans-serif;cursor:pointer;' +
        'background:#1e3a5f;color:#fff;border:1px solid rgba(255,255,255,0.25);' +
        'box-shadow:0 4px 16px rgba(0,0,0,0.2);}' +
        '[data-theme="dark"] .theme-fab{background:#2a2f3a;color:#e6e8ec;border-color:#343a46;}';
      document.head.appendChild(style);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'theme-fab';
      btn.setAttribute('data-theme-toggle', '');
      document.body.appendChild(btn);
    }
    var btns = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < btns.length; i++) btns[i].addEventListener('click', window.toggleTheme);
    updateButtons(root.getAttribute('data-theme'));
  });
})();
