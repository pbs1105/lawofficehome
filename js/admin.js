/* ============================================================
   박배선 법무사 사무소 - 내부 포털 JavaScript (admin.js)
   ============================================================ */

'use strict';

/* ============================================================
   1. 인증 모듈
   ============================================================ */
const AUTH_CONFIG = {
  username: 'admin',
  password: 'lawoffice2024',
  sessionKey: 'bslaw_admin_session',
};

/** 로그인 처리 */
function login(username, password) {
  if (username === AUTH_CONFIG.username && password === AUTH_CONFIG.password) {
    const session = {
      user: username,
      loginTime: new Date().toISOString(),
    };
    localStorage.setItem(AUTH_CONFIG.sessionKey, JSON.stringify(session));
    return true;
  }
  return false;
}

/** 인증 확인 (portal.html에서 호출) */
function checkAuth() {
  const session = localStorage.getItem(AUTH_CONFIG.sessionKey);
  if (!session) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

/** 로그아웃 */
function logout() {
  localStorage.removeItem(AUTH_CONFIG.sessionKey);
  window.location.href = 'login.html';
}

/** 로그인 폼 초기화 (login.html에서 호출) */
function initLoginPage() {
  const form = document.getElementById('loginForm');
  const errorEl = document.getElementById('loginError');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('loginId').value.trim();
    const pw = document.getElementById('loginPw').value;

    if (login(id, pw)) {
      window.location.href = 'portal.html';
    } else {
      errorEl.textContent = '아이디 또는 비밀번호가 올바르지 않습니다.';
      errorEl.classList.add('show');
    }
  });
}

/* ============================================================
   2. 사이드바 메뉴 데이터
   ============================================================ */
const ADMIN_MENU = [
  {
    id: 'inheritance',
    icon: '📜',
    label: '상속',
    items: [
      { id: 'inh-start', label: '상속의 개시' },
      { id: 'inh-heir', label: '상속인 (대습상속 / 상속분)' },
      { id: 'inh-effect', label: '상속의 효력' },
      {
        id: 'inh-accept',
        label: '상속의 승인과 포기',
        subItems: [
          { id: 'inh-limited', label: '한정승인 및 청산절차' },
          { id: 'inh-bankrupt', label: '상속재산 파산' },
        ]
      },
      { id: 'inh-reserve', label: '유류분' },
      { id: 'inh-will', label: '유언·유증·유언의 집행' },
      { id: 'inh-preserve', label: '상속인에 의한 소유권보존등기' },
      { id: 'inh-transfer', label: '상속을 원인으로 하는 소유권이전등기' },
      { id: 'inh-correct', label: '상속등기 후의 소유권경정등기' },
      { id: 'inh-by-heir', label: '상속인에 의한 등기' },
      { id: 'inh-will-transfer', label: '유언·유증으로 인한 소유권이전등기' },
      { id: 'inh-foreign', label: '외국인의 상속등기' },
    ]
  },
  {
    id: 'realestate',
    icon: '🏠',
    label: '부동산등기',
    items: [
      { id: 're-sale', label: '매매로 인한 소유권이전등기' },
      { id: 're-gift', label: '증여로 인한 소유권이전등기' },
      { id: 're-mortgage', label: '근저당권 설정등기' },
      { id: 're-lease', label: '전세권 설정등기' },
      { id: 're-cancel', label: '말소등기' },
    ]
  },
  {
    id: 'corporation',
    icon: '🏢',
    label: '법인등기',
    items: [
      { id: 'co-establish', label: '주식회사 설립' },
      { id: 'co-officer', label: '임원 변경' },
      { id: 'co-relocate', label: '본점 이전' },
      { id: 'co-dissolve', label: '해산·청산' },
    ]
  },
  {
    id: 'civil',
    icon: '⚖️',
    label: '민사소송·집행',
    items: [
      { id: 'cv-payment', label: '지급명령 신청' },
      { id: 'cv-auction', label: '부동산 강제경매 신청' },
      { id: 'cv-seizure', label: '채권압류 및 추심' },
    ]
  },
  {
    id: 'calculator',
    icon: '🧮',
    label: '계산기',
    items: [
      { id: 'calc-acq', label: '취득세 계산기' },
      { id: 'calc-reg', label: '등록면허세 계산기' },
      { id: 'calc-fee', label: '법무사 보수 계산기' },
      { id: 'calc-inhtax', label: '상속세 간이 계산기' },
    ]
  },
  {
    id: 'taxrelief',
    icon: '💰',
    label: '지방세 감면',
    items: [
      { id: 'tax-req', label: '감면 요건 정리' },
      { id: 'tax-proc', label: '감면 신청 절차' },
    ]
  },
  {
    id: 'forms',
    icon: '📋',
    label: '서식 자료실',
    items: [
      { id: 'form-list', label: '자주 쓰는 서식 목록' },
    ]
  },
];

/* ============================================================
   3. 콘텐츠 데이터 (A타입: 실체법 / B타입: 절차)
   ============================================================ */
const ADMIN_CONTENT = {

  /* ----- 상속 ----- */
  'inh-start': {
    type: 'A',
    title: '상속의 개시',
    sections: [
      { heading: '개념과 의의', content: '<p>상속이란 자연인이 사망한 경우에 그가 살아있을 때 가지고 있던 재산상의 지위가 법률의 규정에 의하여 다른 사람에게 포괄적으로 승계되는 것을 말합니다.</p><p>상속은 <strong>사망</strong>으로 인하여 개시됩니다(민법 제997조). 여기서 사망이란 자연사망을 말하며, 실종선고에 의한 사망(의제사망), 인정사망도 포함됩니다.</p>' },
      { heading: '법적 근거', content: '<div class="law-ref"><div class="law-ref-title">관련 법령</div><ul><li><strong>민법 제997조</strong> (상속개시의 원인) — 상속은 사망으로 인하여 개시된다.</li><li><strong>민법 제998조</strong> (상속개시의 장소) — 상속은 피상속인의 주소지에서 개시된다.</li><li><strong>민법 제999조</strong> (상속재산의 포괄적 승계) — 상속인은 상속개시된 때로부터 피상속인의 재산에 관한 포괄적 권리의무를 승계한다.</li></ul></div>' },
      { heading: '요건', content: '<ul><li>피상속인의 사망 (자연사망, 실종선고, 인정사망)</li><li>상속능력이 있는 상속인의 존재</li><li>상속결격사유가 없을 것</li></ul><div class="info-box">실종선고의 경우 실종기간(보통실종 5년, 특별실종 1년)이 만료한 때에 사망한 것으로 간주됩니다(민법 제28조).</div>' },
      { heading: '효과', content: '<p>상속이 개시되면 상속인은 <strong>피상속인의 재산에 관한 포괄적 권리의무를 승계</strong>합니다(민법 제1005조). 다만, 피상속인의 일신에 전속한 것은 그러하지 아니합니다.</p><ul><li>적극재산(부동산, 채권 등)과 소극재산(채무)을 모두 승계</li><li>상속개시와 동시에 당연히 발생 (별도의 의사표시 불필요)</li><li>상속인이 수인인 경우 공동상속</li></ul>' },
      { heading: '주의사항 및 판례', content: '<div class="case-box"><div class="case-title">주요 판례</div><p>대법원 2009. 2. 12. 선고 2008다58367 판결 — "상속은 피상속인의 사망에 의해 개시되며, 상속인은 상속개시시부터 피상속인의 재산에 관한 포괄적 권리의무를 승계한다."</p></div><div class="warn-box"><div class="warn-title">⚠️ 실무상 주의사항</div><p>상속개시일(사망일)의 정확한 확인이 중요합니다. 상속세 신고기한, 상속포기·한정승인 기간 등이 모두 상속개시일을 기준으로 산정됩니다.</p></div>' },
    ]
  },

  'inh-heir': {
    type: 'A',
    title: '상속인 (대습상속 / 상속분)',
    sections: [
      { heading: '개념과 의의', content: '<p>상속인이란 피상속인의 사망으로 인하여 재산상의 권리의무를 포괄적으로 승계하는 자를 말합니다.</p><p>민법은 <strong>법정상속인</strong>의 순위를 명확히 규정하고 있습니다.</p>' },
      { heading: '법적 근거', content: '<div class="law-ref"><div class="law-ref-title">법정상속인 순위 (민법 제1000조)</div><ul><li><strong>제1순위:</strong> 피상속인의 직계비속 (자녀, 손자녀 등)</li><li><strong>제2순위:</strong> 피상속인의 직계존속 (부모, 조부모 등)</li><li><strong>제3순위:</strong> 피상속인의 형제자매</li><li><strong>제4순위:</strong> 피상속인의 4촌 이내의 방계혈족</li></ul><p>배우자는 제1순위 또는 제2순위 상속인과 동순위로 공동상속하며, 그들이 없는 경우 단독으로 상속합니다(민법 제1003조).</p></div>' },
      { heading: '대습상속', content: '<p><strong>대습상속</strong>이란 상속인이 될 직계비속 또는 형제자매가 상속개시 전에 사망하거나 결격자가 된 경우에 그 직계비속이 사망하거나 결격된 자의 순위에 갈음하여 상속인이 되는 것을 말합니다(민법 제1001조).</p>' },
      { heading: '법정상속분', content: '<p>같은 순위의 상속인이 수인인 경우에는 그 상속분은 균분입니다(민법 제1009조 제1항).</p><div class="key-point"><div class="kp-title">배우자의 상속분 가산</div><p>배우자의 상속분은 직계비속과 공동으로 상속하는 때에는 직계비속의 상속분의 <strong>5할을 가산</strong>합니다(민법 제1009조 제2항).</p></div>' },
      { heading: '주의사항', content: '<div class="warn-box"><div class="warn-title">⚠️ 주의사항</div><p>상속결격사유(민법 제1004조)에 해당하는 자는 상속인이 될 수 없습니다. 특히 피상속인에 대한 고의적 위해행위, 유언에 대한 부정행위 등이 결격사유에 해당합니다.</p></div>' },
    ]
  },

  'inh-effect': { type: 'A', title: '상속의 효력', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>상속의 효력 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },

  'inh-accept': { type: 'A', title: '상속의 승인과 포기', sections: [
    { heading: '개념과 의의', content: '<p>상속인은 상속개시가 있음을 안 날로부터 <strong>3개월 내</strong>에 단순승인, 한정승인 또는 포기를 할 수 있습니다(민법 제1019조).</p><ul><li><strong>단순승인:</strong> 피상속인의 모든 권리·의무를 무한정 승계</li><li><strong>한정승인:</strong> 상속받은 재산의 한도 내에서만 채무를 변제</li><li><strong>상속포기:</strong> 처음부터 상속인이 아니었던 것으로 봄</li></ul>' },
    { heading: '법적 근거', content: '<div class="law-ref"><div class="law-ref-title">관련 법령</div><ul><li>민법 제1019조 (승인, 포기의 기간)</li><li>민법 제1025조 (단순승인의 효과)</li><li>민법 제1028조 (한정승인의 효과)</li><li>민법 제1042조 (포기의 효과)</li></ul></div>' },
    { heading: '주의사항', content: '<div class="warn-box"><div class="warn-title">⚠️ 기간 엄수</div><p>상속포기와 한정승인은 <strong>상속개시가 있음을 안 날로부터 3개월 이내</strong>에 가정법원에 신고하여야 합니다. 이 기간 내에 신고하지 않으면 단순승인한 것으로 간주됩니다.</p></div>' },
  ]},

  'inh-limited': { type: 'B', title: '한정승인 및 청산절차', sections: [
    { heading: '업무 개요', content: '<p>한정승인은 상속인이 상속으로 인하여 취득할 재산의 한도에서 피상속인의 채무와 유증을 변제할 것을 조건으로 상속을 승인하는 것입니다(민법 제1028조).</p>' },
    { heading: '신청 절차', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>상속재산·채무 조사</h4><p>피상속인의 적극재산과 소극재산을 파악합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>한정승인 심판청구</h4><p>상속개시를 안 날로부터 3개월 이내에 가정법원에 심판청구합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>채권자 공고·최고</h4><p>한정승인 수리 후 5일 이내에 일반 상속채권자와 유증받은 자에 대해 2개월 이상의 기간을 정하여 공고합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>상속재산 청산</h4><p>공고기간 만료 후 채권순위에 따라 변제합니다.</p></div></div></div>' },
    { heading: '신청서류', content: '<ul><li>한정승인 심판청구서</li><li>상속재산목록</li><li>피상속인 기본증명서, 가족관계증명서</li><li>상속인 기본증명서, 가족관계증명서</li><li>피상속인 말소된 주민등록초본</li></ul>' },
    { heading: '유의사항', content: '<div class="warn-box"><div class="warn-title">⚠️ 주의</div><p>한정승인 전 상속재산을 처분하거나 은닉한 경우 단순승인한 것으로 간주될 수 있습니다(민법 제1026조).</p></div>' },
  ]},

  'inh-bankrupt': { type: 'A', title: '상속재산 파산', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>상속재산 파산 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-reserve': { type: 'A', title: '유류분', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>유류분 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-will': { type: 'A', title: '유언·유증·유언의 집행', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>유언·유증·유언의 집행 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-preserve': { type: 'B', title: '상속인에 의한 소유권보존등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>상속인에 의한 소유권보존등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-transfer': { type: 'B', title: '상속을 원인으로 하는 소유권이전등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>상속을 원인으로 하는 소유권이전등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-correct': { type: 'B', title: '상속등기 후의 소유권경정등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>상속등기 후의 소유권경정등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-by-heir': { type: 'B', title: '상속인에 의한 등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>상속인에 의한 등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-will-transfer': { type: 'B', title: '유언·유증으로 인한 소유권이전등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>유언·유증으로 인한 소유권이전등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'inh-foreign': { type: 'B', title: '외국인의 상속등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>외국인의 상속등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },

  /* ----- 부동산등기 ----- */
  're-sale': {
    type: 'B',
    title: '매매로 인한 소유권이전등기',
    sections: [
      { heading: '업무 개요', content: '<p>소유권이전등기는 부동산의 소유권이 매도인에서 매수인에게 이전될 때 이를 등기부에 공시하는 절차입니다. 민법은 부동산 물권의 득실변경은 등기를 하여야 효력이 생긴다고 규정하고 있습니다(민법 제186조).</p>' },
      { heading: '신청 절차', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>매매계약 체결</h4><p>매도인·매수인 간 매매계약서 작성</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>부동산거래신고</h4><p>계약체결일로부터 30일 이내 거래신고</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>취득세 납부</h4><p>잔금지급일로부터 60일 이내 신고·납부</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>등기신청 서류 준비</h4><p>필요서류 일체 준비</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">5</div><div class="flow-step-content"><h4>등기 신청</h4><p>부동산 소재지 관할 등기소에 신청</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">6</div><div class="flow-step-content"><h4>등기완료</h4><p>등기필정보 수령</p></div></div></div>' },
      { heading: '신청서류 목록', content: '<table><thead><tr><th>구분</th><th>서류명</th><th>비고</th></tr></thead><tbody><tr><td>공통</td><td>등기신청서</td><td>법원 양식</td></tr><tr><td>매도인</td><td>부동산매도용 인감증명서</td><td>발급 3개월 이내</td></tr><tr><td>매도인</td><td>주민등록초본</td><td>주소변동사항 포함</td></tr><tr><td>매도인</td><td>등기권리증(등기필증)</td><td>분실 시 확인조서</td></tr><tr><td>매수인</td><td>주민등록초본</td><td>—</td></tr><tr><td>공통</td><td>매매계약서 사본</td><td>거래신고필증 또는 검인</td></tr><tr><td>공통</td><td>부동산거래계약신고필증</td><td>—</td></tr><tr><td>공통</td><td>토지대장·건축물대장</td><td>최근 발급</td></tr></tbody></table>' },
      { heading: '유의사항', content: '<div class="warn-box"><div class="warn-title">⚠️ 인감증명서 주의</div><p>인감증명서는 반드시 <strong>부동산매도용</strong>으로 발급받아야 합니다. 일반 인감증명서는 사용할 수 없으며, 발급일로부터 3개월 이내여야 합니다.</p></div>' },
    ]
  },

  're-gift': { type: 'B', title: '증여로 인한 소유권이전등기', sections: [
    { heading: '업무 개요', content: '<p>증여란 당사자 일방(증여자)이 대가 없이 재산을 상대방(수증자)에게 주는 의사표시를 하고 상대방이 이를 승낙함으로써 성립하는 계약입니다(민법 제554조).</p>' },
    { heading: '신청서류', content: '<ul><li>증여계약서</li><li>증여자 인감증명서 (3개월 이내)</li><li>증여자 주민등록초본</li><li>수증자 주민등록초본</li><li>등기권리증</li><li>토지대장·건축물대장</li><li>취득세 영수필확인서</li></ul>' },
    { heading: '유의사항', content: '<div class="info-box">증여에 의한 취득세율은 3.5%이며, 별도로 증여세가 부과될 수 있으므로 세금 관계를 사전에 확인하여야 합니다.</div>' },
  ]},

  're-mortgage': { type: 'B', title: '근저당권 설정등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>근저당권 설정등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  're-lease': { type: 'B', title: '전세권 설정등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>전세권 설정등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  're-cancel': { type: 'B', title: '말소등기', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>말소등기 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },

  /* ----- 법인등기 ----- */
  'co-establish': { type: 'B', title: '주식회사 설립', sections: [
    { heading: '업무 개요', content: '<p>주식회사 설립은 발기인이 정관을 작성하고, 주식 인수 및 출자 이행 후 설립등기를 함으로써 완료됩니다.</p>' },
    { heading: '신청 절차', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>정관 작성·공증</h4><p>회사의 근본규칙인 정관을 작성하고 공증받습니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>주식 인수·납입</h4><p>발기인이 주식을 인수하고 출자금을 납입합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>이사·감사 선임</h4><p>발기인 총회에서 이사와 감사를 선임합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>설립등기 신청</h4><p>본점 소재지 관할 등기소에 설립등기를 신청합니다.</p></div></div></div>' },
    { heading: '신청서류', content: '<ul><li>설립등기 신청서</li><li>정관 (공증본)</li><li>발기인 총회 의사록</li><li>주금납입 보관증명서</li><li>취임승낙서 (이사, 감사)</li><li>인감신고서</li><li>등록면허세 영수필확인서</li></ul>' },
    { heading: '유의사항', content: '<div class="info-box">자본금 10억원 미만인 경우 발기설립이 가능하며, 이사 1인 이상으로 설립할 수 있습니다. 감사는 자본금 10억원 미만인 경우 선임하지 않을 수 있습니다.</div>' },
  ]},

  'co-officer': { type: 'B', title: '임원 변경', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>임원 변경 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'co-relocate': { type: 'B', title: '본점 이전', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>본점 이전 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'co-dissolve': { type: 'B', title: '해산·청산', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>해산·청산 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },

  /* ----- 민사소송·집행 ----- */
  'cv-payment': { type: 'B', title: '지급명령 신청', sections: [
    { heading: '업무 개요', content: '<p>지급명령이란 금전 그 밖의 대체물이나 유가증권의 일정한 수량의 지급을 목적으로 하는 청구에 대하여 채권자의 일방적 신청에 의하여 채무자를 심문하지 않고 발하는 재판입니다(민사소송법 제462조).</p>' },
    { heading: '신청 절차', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>지급명령 신청서 작성</h4><p>청구취지와 청구원인을 기재합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>법원 접수</h4><p>채무자 주소지 관할 법원에 접수합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>지급명령 발령</h4><p>서류심사 후 지급명령을 발령합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>채무자 송달</h4><p>채무자에게 지급명령 정본이 송달됩니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">5</div><div class="flow-step-content"><h4>이의신청 기간</h4><p>송달 후 2주 이내 이의신청이 없으면 확정됩니다.</p></div></div></div>' },
    { heading: '신청서류', content: '<ul><li>지급명령 신청서</li><li>청구원인 증빙자료</li><li>송달료 납부 영수증</li></ul>' },
    { heading: '유의사항', content: '<div class="info-box">인지대는 소송의 1/10이므로 비용이 저렴하며, 이의신청이 있으면 소송절차로 이행됩니다.</div>' },
  ]},

  'cv-auction': { type: 'B', title: '부동산 강제경매 신청', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>부동산 강제경매 신청 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },
  'cv-seizure': { type: 'B', title: '채권압류 및 추심', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>채권압류 및 추심 관련 업무 내용이 여기에 표시됩니다.</p></div>' }] },

  /* ----- 지방세 감면 ----- */
  'tax-req': { type: 'A', title: '감면 요건 정리', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>지방세 감면 요건 정리 관련 내용이 여기에 표시됩니다.</p></div>' }] },
  'tax-proc': { type: 'B', title: '감면 신청 절차', sections: [{ heading: '📌 내용 준비 중', content: '<div class="placeholder-content"><div class="ph-icon">📌</div><h3>내용 준비 중</h3><p>감면 신청 절차 관련 내용이 여기에 표시됩니다.</p></div>' }] },

  /* ----- 서식 자료실 ----- */
  'form-list': { type: 'B', title: '자주 쓰는 서식 목록', sections: [
    { heading: '서식 목록', content: '<table><thead><tr><th>번호</th><th>서식명</th><th>용도</th></tr></thead><tbody><tr><td>1</td><td>소유권이전등기 신청서</td><td>매매·증여·상속 등</td></tr><tr><td>2</td><td>근저당권 설정등기 신청서</td><td>담보 설정</td></tr><tr><td>3</td><td>법인설립등기 신청서</td><td>주식회사 설립</td></tr><tr><td>4</td><td>지급명령 신청서</td><td>금전채권 독촉</td></tr><tr><td>5</td><td>취득세 신고서</td><td>부동산 취득 시</td></tr><tr><td>6</td><td>상속재산 목록</td><td>한정승인·상속포기 시</td></tr><tr><td>7</td><td>한정승인 심판청구서</td><td>가정법원 제출</td></tr><tr><td>8</td><td>상속포기 심판청구서</td><td>가정법원 제출</td></tr></tbody></table><div class="info-box">서식은 법원행정처 또는 대한법무사협회 홈페이지에서 최신본을 확인할 수 있습니다.</div>' },
  ]},
};

/* ============================================================
   4. 사이드바 렌더링 및 토글
   ============================================================ */

/** 사이드바 메뉴 HTML 생성 */
function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  let html = '';
  ADMIN_MENU.forEach(cat => {
    html += `<div class="sb-category" data-cat="${cat.id}">`;
    html += `<div class="sb-cat-header" onclick="toggleCategory('${cat.id}')">`;
    html += `<span class="sb-icon">${cat.icon}</span>`;
    html += `<span>${cat.label}</span>`;
    html += `<span class="sb-arrow">▶</span>`;
    html += `</div>`;
    html += `<div class="sb-items">`;

    cat.items.forEach(item => {
      if (item.subItems) {
        // 2단계 그룹
        html += `<div class="sb-sub-group" data-sub="${item.id}">`;
        html += `<div class="sb-sub-header" onclick="toggleSubGroup('${item.id}')">`;
        html += `<span>${item.label}</span>`;
        html += `<span class="sb-sub-arrow">▶</span>`;
        html += `</div>`;
        html += `<div class="sb-sub-items">`;
        item.subItems.forEach(sub => {
          html += `<div class="sb-item" data-id="${sub.id}" onclick="navigateTo('${sub.id}')">${sub.label}</div>`;
        });
        html += `</div></div>`;
      } else {
        html += `<div class="sb-item" data-id="${item.id}" onclick="navigateTo('${item.id}')">${item.label}</div>`;
      }
    });

    html += `</div></div>`;
  });

  sidebar.innerHTML = html;
}

/** 카테고리 접기/펼치기 */
function toggleCategory(catId) {
  const cat = document.querySelector(`.sb-category[data-cat="${catId}"]`);
  if (cat) cat.classList.toggle('open');
}

/** 서브그룹 접기/펼치기 */
function toggleSubGroup(subId) {
  const sub = document.querySelector(`.sb-sub-group[data-sub="${subId}"]`);
  if (sub) sub.classList.toggle('open');
}

/** 모바일 사이드바 토글 */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

/* ============================================================
   5. SPA 라우팅 및 콘텐츠 렌더링
   ============================================================ */

let currentPage = 'dashboard';

/** 페이지 이동 */
function navigateTo(pageId) {
  currentPage = pageId;
  window.location.hash = pageId;

  // 사이드바 활성 표시 업데이트
  document.querySelectorAll('.sb-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === pageId);
  });

  // 콘텐츠 렌더링
  if (pageId === 'dashboard') {
    renderDashboard();
  } else if (pageId.startsWith('calc-')) {
    renderCalculator(pageId);
  } else {
    renderContentPage(pageId);
  }

  // 최근 조회 기록 저장
  saveRecentView(pageId);

  // 모바일에서 사이드바 닫기
  closeSidebar();
}

/** 콘텐츠 페이지 렌더링 */
function renderContentPage(pageId) {
  const area = document.getElementById('contentArea');
  const data = ADMIN_CONTENT[pageId];

  if (!data) {
    area.innerHTML = `
      <div class="placeholder-content">
        <div class="ph-icon">📌</div>
        <h3>내용 준비 중</h3>
        <p>해당 항목의 내용이 아직 준비되지 않았습니다.</p>
      </div>`;
    return;
  }

  const typeBadge = data.type === 'A'
    ? '<span class="content-type-badge type-a">A타입 — 실체법</span>'
    : '<span class="content-type-badge type-b">B타입 — 절차</span>';

  const isFav = isFavorite(pageId);
  const favClass = isFav ? 'active' : '';

  let html = `
    <div class="content-header">
      ${typeBadge}
      <h1>${data.title}</h1>
      <button class="fav-toggle ${favClass}" onclick="toggleFavorite('${pageId}')">
        ${isFav ? '⭐ 즐겨찾기 해제' : '☆ 즐겨찾기 추가'}
      </button>
    </div>`;

  data.sections.forEach(sec => {
    html += `
      <div class="content-section">
        <h2>${sec.heading}</h2>
        ${sec.content}
      </div>`;
  });

  area.innerHTML = html;
  area.scrollTop = 0;
}

/* ============================================================
   6. 대시보드
   ============================================================ */

/** 대시보드 렌더링 */
function renderDashboard() {
  const area = document.getElementById('contentArea');

  // 현재 날짜
  const now = new Date();
  const dateStr = now.toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric', weekday:'long' });

  // 즐겨찾기 목록
  const favs = getFavorites();
  let favHtml = '';
  if (favs.length === 0) {
    favHtml = '<div class="fav-empty">즐겨찾기에 추가된 항목이 없습니다.</div>';
  } else {
    favHtml = '<div class="fav-list">';
    favs.forEach(f => {
      const content = ADMIN_CONTENT[f];
      const label = content ? content.title : f;
      favHtml += `<div class="fav-item" onclick="navigateTo('${f}')">${label}</div>`;
    });
    favHtml += '</div>';
  }

  // 최근 조회 목록
  const recents = getRecentViews();
  let recentHtml = '';
  if (recents.length === 0) {
    recentHtml = '<div class="fav-empty">최근 조회한 항목이 없습니다.</div>';
  } else {
    recentHtml = '<div class="recent-list">';
    recents.forEach(r => {
      const content = ADMIN_CONTENT[r.id];
      const label = content ? content.title : r.id;
      recentHtml += `
        <div class="recent-item" onclick="navigateTo('${r.id}')">
          <span>${label}</span>
          <span class="ri-time">${r.time}</span>
        </div>`;
    });
    recentHtml += '</div>';
  }

  // 메모
  const memo = localStorage.getItem('bslaw_memo') || '';

  area.innerHTML = `
    <div class="dash-welcome">
      <h2>안녕하세요, 관리자님 👋</h2>
      <p>${dateStr} — 오늘도 좋은 하루 되세요.</p>
    </div>
    <div class="dashboard-grid">
      <div class="dash-card">
        <h3>⭐ 즐겨찾기</h3>
        ${favHtml}
      </div>
      <div class="dash-card">
        <h3>🕐 최근 조회</h3>
        ${recentHtml}
      </div>
      <div class="dash-card" style="grid-column: 1 / -1;">
        <h3>📝 메모장</h3>
        <textarea class="memo-area" id="memoArea" placeholder="업무 메모를 입력하세요...">${memo}</textarea>
        <div style="display:flex;align-items:center;">
          <button class="memo-save" onclick="saveMemo()">저장</button>
          <span class="memo-saved" id="memoSaved">저장되었습니다 ✓</span>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   7. 즐겨찾기 관리 (localStorage)
   ============================================================ */

function getFavorites() {
  const data = localStorage.getItem('bslaw_favorites');
  return data ? JSON.parse(data) : [];
}

function isFavorite(pageId) {
  return getFavorites().includes(pageId);
}

function toggleFavorite(pageId) {
  let favs = getFavorites();
  if (favs.includes(pageId)) {
    favs = favs.filter(f => f !== pageId);
  } else {
    favs.push(pageId);
  }
  localStorage.setItem('bslaw_favorites', JSON.stringify(favs));
  // 현재 페이지 다시 렌더링
  renderContentPage(pageId);
}

/* ============================================================
   8. 최근 조회 기록 (localStorage)
   ============================================================ */

function getRecentViews() {
  const data = localStorage.getItem('bslaw_recent');
  return data ? JSON.parse(data) : [];
}

function saveRecentView(pageId) {
  if (pageId === 'dashboard') return;

  let recents = getRecentViews();

  // 중복 제거
  recents = recents.filter(r => r.id !== pageId);

  // 맨 앞에 추가
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  recents.unshift({ id: pageId, time: timeStr });

  // 최대 10개
  if (recents.length > 10) recents = recents.slice(0, 10);

  localStorage.setItem('bslaw_recent', JSON.stringify(recents));
}

/* ============================================================
   9. 메모장 (localStorage)
   ============================================================ */

function saveMemo() {
  const memoEl = document.getElementById('memoArea');
  const savedEl = document.getElementById('memoSaved');
  if (!memoEl) return;

  localStorage.setItem('bslaw_memo', memoEl.value);

  // 저장 확인 메시지
  if (savedEl) {
    savedEl.classList.add('show');
    setTimeout(() => savedEl.classList.remove('show'), 2000);
  }
}

/* ============================================================
   10. 계산기
   ============================================================ */

/** 계산기 렌더링 */
function renderCalculator(calcId) {
  const area = document.getElementById('contentArea');

  switch (calcId) {
    case 'calc-acq':  area.innerHTML = buildAcquisitionTaxCalc(); break;
    case 'calc-reg':  area.innerHTML = buildRegistrationTaxCalc(); break;
    case 'calc-fee':  area.innerHTML = buildLawyerFeeCalc(); break;
    case 'calc-inhtax': area.innerHTML = buildInheritanceTaxCalc(); break;
    default:
      area.innerHTML = '<div class="placeholder-content"><div class="ph-icon">🧮</div><h3>계산기 준비 중</h3></div>';
  }
}

/** 취득세 계산기 */
function buildAcquisitionTaxCalc() {
  return `
    <div class="calc-container">
      <h2>🧮 취득세 계산기</h2>
      <div class="calc-group">
        <label for="acqType">취득 유형</label>
        <select id="acqType">
          <option value="house6">주택 (6억 이하)</option>
          <option value="house9">주택 (6억 초과 ~ 9억 이하)</option>
          <option value="house9over">주택 (9억 초과)</option>
          <option value="farm">농지</option>
          <option value="other">기타 부동산</option>
          <option value="gift">증여</option>
        </select>
      </div>
      <div class="calc-group">
        <label for="acqPrice">취득가액 (원)</label>
        <input type="text" id="acqPrice" placeholder="예: 300000000" oninput="formatNumber(this)" />
      </div>
      <button class="calc-btn" onclick="calcAcquisitionTax()">계산하기</button>
      <div id="acqResult"></div>
    </div>`;
}

function calcAcquisitionTax() {
  const type = document.getElementById('acqType').value;
  const priceStr = document.getElementById('acqPrice').value.replace(/,/g, '');
  const price = parseInt(priceStr);
  if (isNaN(price) || price <= 0) {
    alert('취득가액을 올바르게 입력하세요.');
    return;
  }

  let rate = 0;
  switch (type) {
    case 'house6': rate = 0.01; break;
    case 'house9': rate = 0.02; break; // 간이 적용
    case 'house9over': rate = 0.03; break;
    case 'farm': rate = 0.03; break;
    case 'other': rate = 0.04; break;
    case 'gift': rate = 0.035; break;
  }

  const acqTax = Math.round(price * rate);
  const eduTax = Math.round(acqTax * 0.1); // 지방교육세 10%
  const farmTax = (type === 'farm' || type === 'gift') ? 0 : Math.round(acqTax * 0.1); // 농어촌특별세
  const total = acqTax + eduTax + farmTax;

  document.getElementById('acqResult').innerHTML = `
    <div class="calc-result">
      <h3>계산 결과</h3>
      <div class="calc-result-row"><span class="label">취득가액</span><span class="value">${price.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">취득세율</span><span class="value">${(rate * 100).toFixed(1)}%</span></div>
      <div class="calc-result-row"><span class="label">취득세</span><span class="value">${acqTax.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">지방교육세 (10%)</span><span class="value">${eduTax.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">농어촌특별세</span><span class="value">${farmTax.toLocaleString()}원</span></div>
      <div class="calc-result-total"><span class="label">합계</span><span class="value">${total.toLocaleString()}원</span></div>
    </div>
    <div class="info-box" style="margin-top:16px;">※ 본 계산은 간이 계산으로 참고용입니다. 정확한 세액은 관할 시·군·구청에 문의하세요.</div>`;
}

/** 등록면허세 계산기 */
function buildRegistrationTaxCalc() {
  return `
    <div class="calc-container">
      <h2>🧮 등록면허세 계산기</h2>
      <div class="calc-group">
        <label for="regType">등기 유형</label>
        <select id="regType">
          <option value="ownership">소유권이전 (매매)</option>
          <option value="ownership-gift">소유권이전 (증여)</option>
          <option value="ownership-inherit">소유권이전 (상속)</option>
          <option value="mortgage">근저당권 설정</option>
          <option value="lease">전세권 설정</option>
        </select>
      </div>
      <div class="calc-group">
        <label for="regBase">과세표준 (원)</label>
        <input type="text" id="regBase" placeholder="예: 300000000" oninput="formatNumber(this)" />
      </div>
      <button class="calc-btn" onclick="calcRegistrationTax()">계산하기</button>
      <div id="regResult"></div>
    </div>`;
}

function calcRegistrationTax() {
  const type = document.getElementById('regType').value;
  const baseStr = document.getElementById('regBase').value.replace(/,/g, '');
  const base = parseInt(baseStr);
  if (isNaN(base) || base <= 0) {
    alert('과세표준을 올바르게 입력하세요.');
    return;
  }

  let rate = 0;
  switch (type) {
    case 'ownership': rate = 0.02; break;
    case 'ownership-gift': rate = 0.035; break;
    case 'ownership-inherit': rate = 0.008; break;
    case 'mortgage': rate = 0.002; break;
    case 'lease': rate = 0.002; break;
  }

  const regTax = Math.round(base * rate);
  const eduTax = Math.round(regTax * 0.2);
  const total = regTax + eduTax;

  document.getElementById('regResult').innerHTML = `
    <div class="calc-result">
      <h3>계산 결과</h3>
      <div class="calc-result-row"><span class="label">과세표준</span><span class="value">${base.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">등록면허세율</span><span class="value">${(rate * 100).toFixed(1)}%</span></div>
      <div class="calc-result-row"><span class="label">등록면허세</span><span class="value">${regTax.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">지방교육세 (20%)</span><span class="value">${eduTax.toLocaleString()}원</span></div>
      <div class="calc-result-total"><span class="label">합계</span><span class="value">${total.toLocaleString()}원</span></div>
    </div>
    <div class="info-box" style="margin-top:16px;">※ 본 계산은 간이 계산으로 참고용입니다.</div>`;
}

/** 법무사 보수 계산기 */
function buildLawyerFeeCalc() {
  return `
    <div class="calc-container">
      <h2>🧮 법무사 보수 계산기</h2>
      <div class="calc-group">
        <label for="feeType">업무 유형</label>
        <select id="feeType">
          <option value="transfer">소유권이전등기</option>
          <option value="mortgage">근저당권 설정등기</option>
          <option value="corp">법인설립등기</option>
          <option value="payment">지급명령 신청</option>
        </select>
      </div>
      <div class="calc-group">
        <label for="feeBase">기준가액 / 목적물 가액 (원)</label>
        <input type="text" id="feeBase" placeholder="예: 300000000" oninput="formatNumber(this)" />
      </div>
      <button class="calc-btn" onclick="calcLawyerFee()">계산하기</button>
      <div id="feeResult"></div>
    </div>
    <div class="info-box" style="margin-top:16px;">
      <p>법무사 보수는 대한법무사협회의 보수 기준표에 따라 산정되며, 실제 보수는 사안의 난이도에 따라 다를 수 있습니다.</p>
      <p><a href="https://m.kabl.kr/pageview.kabl?mid=kjaa_page_0202_2_m&menu=data&from=index.kabl" target="_blank" style="color: var(--secondary); font-weight:600;">📊 대한법무사협회 보수표 바로가기 →</a></p>
    </div>`;
}

function calcLawyerFee() {
  const type = document.getElementById('feeType').value;
  const baseStr = document.getElementById('feeBase').value.replace(/,/g, '');
  const base = parseInt(baseStr);
  if (isNaN(base) || base <= 0) {
    alert('기준가액을 올바르게 입력하세요.');
    return;
  }

  // 간이 보수 계산 (대한법무사협회 기준표 기반 간소화)
  let fee = 0;
  switch (type) {
    case 'transfer':
      if (base <= 50000000) fee = 100000;
      else if (base <= 100000000) fee = 150000;
      else if (base <= 300000000) fee = 200000;
      else if (base <= 500000000) fee = 300000;
      else fee = 400000;
      break;
    case 'mortgage':
      if (base <= 50000000) fee = 80000;
      else if (base <= 100000000) fee = 100000;
      else if (base <= 300000000) fee = 150000;
      else fee = 200000;
      break;
    case 'corp':
      if (base <= 100000000) fee = 200000;
      else if (base <= 500000000) fee = 300000;
      else fee = 400000;
      break;
    case 'payment':
      if (base <= 10000000) fee = 80000;
      else if (base <= 50000000) fee = 120000;
      else fee = 180000;
      break;
  }

  const vat = Math.round(fee * 0.1);
  const total = fee + vat;

  document.getElementById('feeResult').innerHTML = `
    <div class="calc-result">
      <h3>예상 보수</h3>
      <div class="calc-result-row"><span class="label">기준가액</span><span class="value">${base.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">법무사 보수 (예상)</span><span class="value">${fee.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">부가세 (10%)</span><span class="value">${vat.toLocaleString()}원</span></div>
      <div class="calc-result-total"><span class="label">합계</span><span class="value">${total.toLocaleString()}원</span></div>
    </div>
    <div class="warn-box" style="margin-top:16px;"><div class="warn-title">⚠️ 참고</div><p>본 계산은 간이 예상 금액이며, 실제 보수는 사안의 복잡도, 부동산 수 등에 따라 달라질 수 있습니다.</p></div>`;
}

/** 상속세 간이 계산기 */
function buildInheritanceTaxCalc() {
  return `
    <div class="calc-container">
      <h2>🧮 상속세 간이 계산기</h2>
      <div class="calc-group">
        <label for="inhAsset">상속재산 총액 (원)</label>
        <input type="text" id="inhAsset" placeholder="예: 1000000000" oninput="formatNumber(this)" />
      </div>
      <div class="calc-group">
        <label for="inhDebt">채무 총액 (원)</label>
        <input type="text" id="inhDebt" placeholder="예: 200000000" oninput="formatNumber(this)" />
      </div>
      <div class="calc-group">
        <label for="inhDeduction">공제 유형</label>
        <select id="inhDeduction">
          <option value="500000000">일괄공제 (5억원)</option>
          <option value="1000000000">배우자공제 포함 (10억원)</option>
        </select>
      </div>
      <button class="calc-btn" onclick="calcInheritanceTax()">계산하기</button>
      <div id="inhResult"></div>
    </div>`;
}

function calcInheritanceTax() {
  const assetStr = document.getElementById('inhAsset').value.replace(/,/g, '');
  const debtStr = document.getElementById('inhDebt').value.replace(/,/g, '');
  const deduction = parseInt(document.getElementById('inhDeduction').value);

  const asset = parseInt(assetStr) || 0;
  const debt = parseInt(debtStr) || 0;

  const taxBase = Math.max(0, asset - debt - deduction);

  // 누진세율 적용
  let tax = 0;
  if (taxBase <= 100000000) {
    tax = taxBase * 0.1;
  } else if (taxBase <= 500000000) {
    tax = 10000000 + (taxBase - 100000000) * 0.2;
  } else if (taxBase <= 1000000000) {
    tax = 90000000 + (taxBase - 500000000) * 0.3;
  } else if (taxBase <= 3000000000) {
    tax = 240000000 + (taxBase - 1000000000) * 0.4;
  } else {
    tax = 1040000000 + (taxBase - 3000000000) * 0.5;
  }
  tax = Math.round(tax);

  document.getElementById('inhResult').innerHTML = `
    <div class="calc-result">
      <h3>계산 결과</h3>
      <div class="calc-result-row"><span class="label">상속재산 총액</span><span class="value">${asset.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">채무 총액</span><span class="value">${debt.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">공제액</span><span class="value">${deduction.toLocaleString()}원</span></div>
      <div class="calc-result-row"><span class="label">과세표준</span><span class="value">${taxBase.toLocaleString()}원</span></div>
      <div class="calc-result-total"><span class="label">예상 상속세</span><span class="value">${tax.toLocaleString()}원</span></div>
    </div>
    <div class="info-box" style="margin-top:16px;">※ 본 계산은 간이 계산으로 참고용입니다. 실제 상속세는 다양한 공제 항목과 평가 방법에 따라 달라집니다. 정확한 세액은 세무 전문가와 상담하세요.</div>`;
}

/* ============================================================
   11. 숫자 포맷 헬퍼
   ============================================================ */
function formatNumber(input) {
  let value = input.value.replace(/[^0-9]/g, '');
  if (value) {
    input.value = parseInt(value).toLocaleString();
  }
}

/* ============================================================
   12. 날짜·시간 표시 (포털 헤더)
   ============================================================ */
function updateDateTime() {
  const el = document.getElementById('portalDateTime');
  if (!el) return;

  const now = new Date();
  const str = now.toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'short'
  }) + ' ' + now.toLocaleTimeString('ko-KR', {
    hour: '2-digit', minute: '2-digit'
  });
  el.textContent = str;
}

/* ============================================================
   13. 포털 초기화 (portal.html에서 호출)
   ============================================================ */
function initPortal() {
  // 인증 확인
  if (!checkAuth()) return;

  // 사이드바 렌더링
  renderSidebar();

  // 날짜·시간 업데이트 (1분마다)
  updateDateTime();
  setInterval(updateDateTime, 60000);

  // URL hash에 따라 페이지 로드
  const hash = window.location.hash.replace('#', '');
  if (hash && ADMIN_CONTENT[hash]) {
    navigateTo(hash);
    // 해당 카테고리 열기
    openCategoryForItem(hash);
  } else {
    navigateTo('dashboard');
  }

  // 해시 변경 감지
  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '');
    if (h && h !== currentPage) {
      navigateTo(h);
    }
  });

  // 모바일 오버레이 클릭 시 사이드바 닫기
  const overlay = document.getElementById('sidebarOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // 화면 크기 변경 시
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeSidebar();
  });
}

/** 특정 항목이 속한 카테고리를 자동으로 열기 */
function openCategoryForItem(itemId) {
  ADMIN_MENU.forEach(cat => {
    let found = false;
    cat.items.forEach(item => {
      if (item.id === itemId) found = true;
      if (item.subItems) {
        item.subItems.forEach(sub => {
          if (sub.id === itemId) {
            found = true;
            // 서브그룹도 열기
            const subEl = document.querySelector(`.sb-sub-group[data-sub="${item.id}"]`);
            if (subEl) subEl.classList.add('open');
          }
        });
      }
    });
    if (found) {
      const catEl = document.querySelector(`.sb-category[data-cat="${cat.id}"]`);
      if (catEl) catEl.classList.add('open');
    }
  });
}
