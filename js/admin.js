/* ============================================================
   박배선 법무사 사무소 - 내부 포털 JavaScript (admin.js)
   ============================================================ */

'use strict';

/* ============================================================
   1. 인증 모듈
   ============================================================ */
const AUTH_CONFIG = {
  sessionKey: 'bslaw_admin_session',
};

/** 로그인 처리 (실제 인증은 Vercel Edge Middleware에서 처리됨) */
function login(username) {
  if (!username) return false;
  const session = {
    user: username,
    loginTime: new Date().toISOString(),
  };
  localStorage.setItem(AUTH_CONFIG.sessionKey, JSON.stringify(session));
  return true;
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

    if (login(id)) {
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
    id: 'foreign',
    icon: '🌏',
    label: '외국인·재외국민 등기',
    items: [
      { id: 'for-inherit', label: '재외국민·외국인 상속등기' },
      { id: 'for-apostille', label: '아포스티유(Apostille)' },
      { id: 'for-no-reginfo', label: '등기필정보 없는 경우' },
      { id: 'for-disposal', label: '외국인 부동산 처분 안내' },
    ]
  },
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
          { id: 'inh-renounce', label: '상속포기' },
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

  /* ----- 외국인·재외국민 등기 ----- */
  'for-inherit': { type: 'B', title: '재외국민·외국인 상속등기', sections: [
    { heading: '개요 — 내국인·재외국민·외국인 구분', content: '<p>국내 부동산 상속등기를 신청할 때 상속인 또는 피상속인이 <strong>재외국민</strong>이거나 <strong>외국인</strong>인 경우, 절차와 첨부서류가 내국인과 크게 달라집니다. 먼저 당사자 유형을 정확히 파악하는 것이 핵심입니다.</p><table><thead><tr><th>구분</th><th>개념</th><th>등기절차 특징</th></tr></thead><tbody><tr><td><strong>내국인</strong></td><td>대한민국 국적자 (국내 거주)</td><td>일반 상속등기 절차 적용</td></tr><tr><td><strong>재외국민</strong></td><td>대한민국 국적 유지 + 외국 영주권자 또는 외국 장기체류자 (가족관계등록부 존재)</td><td>절차는 내국인과 동일하나 주소증명서류·등록번호 취득이 다름</td></tr><tr><td><strong>외국국적동포</strong></td><td>대한민국 국적 상실 후 외국 국적 취득 (국내거소신고 가능)</td><td>재외동포법상 특례 적용 가능</td></tr><tr><td><strong>외국인</strong></td><td>외국 국적자 (외국인등록 또는 미등록)</td><td>준거법·인감증명·주소증명이 모두 특례 처리</td></tr></tbody></table><div class="info-box">재외국민과 외국인은 법적 지위가 완전히 다릅니다. 가족관계등록부 유무, 주민등록번호 유무로 구분 후 절차를 안내하세요.</div>' },
    { heading: '준거법 — 어느 나라 법으로 상속인을 결정하는가', content: '<div class="key-point"><div class="kp-title">국제사법 제49조 (상속의 준거법)</div><p>상속은 <strong>피상속인의 본국법(사망 당시 국적국 법률)</strong>에 의합니다. 즉, 미국 국적자가 사망하면 미국법에 따라 상속인 범위와 상속분이 결정됩니다.</p></div><table><thead><tr><th>구분</th><th>준거법</th><th>실무상 의미</th></tr></thead><tbody><tr><td>피상속인이 <strong>한국인</strong></td><td>한국 민법</td><td>일반 상속인 순위·상속분 적용</td></tr><tr><td>피상속인이 <strong>미국인</strong></td><td>미국 주(州)법<br>(단, 반정 가능)</td><td>미국법상 상속인이 누구인지 확인 필요</td></tr><tr><td>피상속인이 <strong>일본인</strong></td><td>일본 민법</td><td>일본 상속인 확인서류 필요</td></tr></tbody></table><div class="warn-box"><div class="warn-title">⚠️ 반정(反定) — 미국인 피상속인의 경우 한국법 적용 가능</div><p>미국은 부동산 상속에 관해 <strong>부동산 소재지법(=한국법)</strong>을 준거법으로 지정합니다. 따라서 한국 소재 부동산의 상속에 관한 한, 국제사법 제22조 반정 규정에 따라 한국 민법이 적용될 수 있습니다. 국적에 따라 반정 적용 여부를 확인하세요.</p></div><div class="info-box">등기절차(부동산등기법)는 부동산 소재지인 한국법이 항상 적용됩니다. 준거법이 외국법이더라도 등기 신청 방식·서류 제출은 한국 절차를 따릅니다.</div>' },
    { heading: '법정상속 절차 비교 (상속인·피상속인 유형별)', content: '<p>법정상속(협의분할 없이 법정상속분대로 등기)의 절차는 다음과 같이 비교됩니다.</p><table><thead><tr><th>항목</th><th>내국인 상속인</th><th>재외국민 상속인</th><th>외국인 상속인</th></tr></thead><tbody><tr><td>상속인 확인</td><td>가족관계증명서·기본증명서</td><td>가족관계증명서·기본증명서 (동일)</td><td>본국 발행 가족관계증명서 + 아포스티유</td></tr><tr><td>피상속인 사망 확인</td><td>기본증명서(사망기재)</td><td>기본증명서 (동일)</td><td>본국 사망진단서·공적 사망증명서 + 아포스티유</td></tr><tr><td>주소 증명</td><td>주민등록등본</td><td>재외국민등록부등본 또는 체류국 주소증명 + 공증 (아래 별도 안내)</td><td>외국인등록사실증명 또는 본국 주소증명 + 아포스티유</td></tr><tr><td>등록번호</td><td>주민등록번호</td><td>주민등록번호 또는 부동산등기용등록번호</td><td>외국인등록번호 또는 부동산등기용등록번호</td></tr><tr><td>인감증명</td><td>주소이전 후 발급받은 인감증명서</td><td>재외공관 인감증명 또는 본국 공증으로 대체</td><td>본국 인감증명 또는 본국 공증으로 대체</td></tr></tbody></table>' },
    { heading: '협의분할상속 절차 — 인감증명·공증 처리방법', content: '<p>협의분할상속의 경우 공동상속인 전원의 의사 합치(협의분할협의서)가 필요하며, 각 상속인의 인감증명 또는 이에 갈음하는 공증이 첨부되어야 합니다.</p><div class="key-point"><div class="kp-title">협의분할협의서 작성 원칙</div><p>공동상속인 전원 참여 필수. 2018년 이후 공동상속인 중 1인에게 위임도 가능(공증 또는 인감 날인 위임장 필요). 협의분할협의서에는 취득자·포기자·상속재산 특정 내용이 명시되어야 합니다.</p></div><table><thead><tr><th>상속인 유형</th><th>협의서 서명·날인</th><th>인감증명 대체 방법</th></tr></thead><tbody><tr><td>내국인</td><td>인감도장 날인</td><td>인감증명서 첨부</td></tr><tr><td>재외국민</td><td>서명 또는 인감 날인</td><td>① 재외공관(영사관)의 인감증명 발급<br>② 재류국 공증인 공증 + 아포스티유<br>③ 주한 해당국 공관 공증 (인감제도 있는 경우 본국 인감증명)</td></tr><tr><td>외국인 (인감제도 없는 국가: 미국·캐나다 등)</td><td>서명</td><td>본국 관공서 서명 증명 또는 본국 공증인 공증 + 아포스티유</td></tr><tr><td>외국인 (인감제도 있는 국가: 일본·대만 등)</td><td>인감 날인</td><td>본국 인감증명서 + 아포스티유 (재외공관 확인으로 대체 불가)</td></tr></tbody></table><div class="warn-box"><div class="warn-title">⚠️ 일본·대만 국적자 주의</div><p>일본·대만 등 인감증명제도가 있는 국가의 외국인은 반드시 본국 인감증명서를 제출해야 합니다. 한국 재외공관(대사관·영사관) 확인만으로는 인감증명을 대체할 수 없습니다.</p></div>' },
    { heading: '주소 증명 방법 — 재외국민·외국인 유형별', content: '<table><thead><tr><th>유형</th><th>주소 증명 방법</th><th>비고</th></tr></thead><tbody><tr><td>재외국민 (재외국민등록 O)</td><td>재외국민등록부등본 (재외공관 발급)</td><td>국내 주소 미기재 시 체류국 공증 추가</td></tr><tr><td>재외국민 (재외국민등록 X)</td><td>① 주민등록표등본 (국내주소 있는 경우)<br>② 체류국 주소증명서 + 공증 + 아포스티유<br>③ 체류국 공증인이 주소를 확인한 공증서면</td><td>공증에 아포스티유 필요 (협약 가입국)</td></tr><tr><td>외국인 (국내 외국인등록 O)</td><td>외국인등록사실증명 (출입국관리사무소 발급)</td><td>—</td></tr><tr><td>외국인 (국내 외국인등록 X)</td><td>① 본국 공증인이 주소를 확인한 공증서면 + 아포스티유<br>② 시민권·여권·운전면허증 사본에 원본동일 기재 후 공증</td><td>아포스티유 또는 영사 확인 필수</td></tr></tbody></table><div class="info-box">재외동포(외국국적동포)로서 국내거소신고를 한 경우에는 국내거소신고사실증명서로 주소를 증명합니다.</div>' },
    { heading: '부동산등기용등록번호 취득', content: '<div class="key-point"><div class="kp-title">등록번호가 없는 경우 — 부동산등기용등록번호 발급 필수</div><p>부동산등기 신청서에는 신청인의 주민등록번호(또는 외국인등록번호)를 기재해야 합니다. 이 번호가 없는 경우 별도의 <strong>부동산등기용등록번호</strong>를 발급받아야 합니다.</p></div><table><thead><tr><th>대상자</th><th>발급 기관</th><th>신청 방법</th></tr></thead><tbody><tr><td>주민등록번호 없는 재외국민<br>(외국 영주권자·시민권 미취득자)</td><td>서울중앙지방법원 등기국<br>(전국 유일 발급 기관)</td><td>본인 또는 대리인 방문 신청<br>대리인: 위임장 + 대리인 신분증 지참</td></tr><tr><td>외국인등록번호 없는 외국인<br>(미입국·미등록 외국인)</td><td>서울중앙지방법원 등기국</td><td>동일</td></tr></tbody></table><div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>신청서 작성</h4><p>부동산등기용등록번호 부여신청서 작성 (법원 등기국 비치 양식)</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>첨부서류 제출</h4><p>여권(또는 외국인등록증) 원본·사본, 주소증명서류, 대리 시 위임장</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>등록번호 취득</h4><p>당일 또는 수일 내 발급. 취득 후 등기신청서에 기재.</p></div></div></div><div class="warn-box"><div class="warn-title">⚠️ 서울중앙지방법원만 발급 가능</div><p>부동산등기용등록번호는 전국에서 서울중앙지방법원 등기국만 발급합니다. 의뢰인이 지방 거주 외국인이면 미리 위임장을 받아 사무소에서 대신 신청하는 것을 권장합니다.</p></div>' },
    { heading: '내국인·재외국민·외국인 준비서류 비교표', content: '<p>협의분할상속등기(소유권이전) 기준 주요 서류를 비교합니다.</p><table><thead><tr><th>서류</th><th>내국인</th><th>재외국민</th><th>외국인</th></tr></thead><tbody><tr><td>사망증명</td><td>기본증명서 (사망기재)</td><td>기본증명서 (동일)</td><td>본국 사망증명서 + 아포스티유</td></tr><tr><td>상속인 확인</td><td>가족관계증명서·제적등본</td><td>가족관계증명서·제적등본 (동일)</td><td>본국 발행 가족관계증명서 + 아포스티유</td></tr><tr><td>협의분할협의서</td><td>인감 날인</td><td>서명 또는 인감 날인</td><td>서명 (인감제도 없는 국가) 또는 인감 날인 (인감제도 있는 국가)</td></tr><tr><td>인감증명</td><td>인감증명서</td><td>재외공관 인감증명 또는 체류국 공증</td><td>본국 인감증명 (일본·대만 등) 또는 본국 공증 + 아포스티유 (미국 등)</td></tr><tr><td>주소 증명</td><td>주민등록등본</td><td>재외국민등록부등본 또는 체류국 주소공증</td><td>외국인등록사실증명 또는 본국 주소공증 + 아포스티유</td></tr><tr><td>등록번호</td><td>주민등록번호</td><td>주민등록번호 또는 부동산등기용등록번호</td><td>외국인등록번호 또는 부동산등기용등록번호</td></tr><tr><td>취득세 납부</td><td>취득세 영수필확인서</td><td>동일</td><td>동일</td></tr><tr><td>외국어 문서 번역</td><td>해당 없음</td><td>해당 없음 (한국어 문서)</td><td>한국어 번역문 + 번역문 공증 + 번역문 아포스티유</td></tr></tbody></table>' },
    { heading: '실무 주의사항', content: '<div class="warn-box"><div class="warn-title">⚠️ 반드시 사전 확인할 사항</div><ol><li><strong>피상속인 국적 확인</strong> — 외국인 피상속인이면 준거법이 외국법. 미국인인 경우 반정 가능 여부 검토. 상속인 범위를 본국법으로 파악해야 함.</li><li><strong>상속인 중 외국인·재외국민 여부</strong> — 해당자 수가 많을수록 서류 준비 기간 장기화. 수임 초기에 파악.</li><li><strong>부동산등기용등록번호 미취득자 확인</strong> — 등기신청 전 등록번호를 반드시 취득. 서울중앙지방법원만 발급 가능하므로 일정 여유 필요.</li><li><strong>아포스티유 소요 기간</strong> — 외국에서 발급받은 문서에 대한 아포스티유 처리는 수일~수주 소요. 의뢰인에게 미리 기간을 안내하고 일정을 여유 있게 설정.</li><li><strong>번역문 공증·아포스티유</strong> — 외국어 문서는 한국어 번역문 작성 후 번역문 공증, 번역문 아포스티유까지 3단계가 필요. 원문과 번역문은 각각 별도 신청.</li><li><strong>일본·대만 인감증명 특례</strong> — 재외공관 확인으로 인감증명 대체 불가. 본국 인감증명서 원본 제출 필수.</li><li><strong>협의분할 불성립 시</strong> — 외국인 상속인이 협의에 참여하지 않으면 법정상속 또는 소송(조정)으로 진행해야 함. 의뢰인에게 선택지 안내.</li><li><strong>외국인의 부동산 취득 신고</strong> — 외국인토지법에 따라 취득 후 60일 이내에 시·군·구청에 외국인 부동산 취득신고 필요.</li></ol></div>' },
    { heading: '관련 법령', content: '<div class="law-ref"><h4>관련 법령 및 예규</h4><ul><li><strong>국제사법 제49조</strong> — 상속의 준거법: 피상속인의 본국법에 의함</li><li><strong>국제사법 제22조</strong> — 반정(反定): 외국법이 한국법을 준거법으로 지정하는 경우 한국법 적용</li><li><strong>부동산등기법 제23조</strong> — 등기 신청 (공동 신청 원칙)</li><li><strong>부동산등기규칙 제46조 제8항·제9항</strong> — 외국어 문서의 번역문 첨부 및 아포스티유·영사 확인 의무 (2017.10.1. 시행)</li><li><strong>부동산등기규칙 제60조</strong> — 부동산등기용등록번호 부여 절차</li><li><strong>재외동포의 출입국과 법적 지위에 관한 법률(재외동포법)</strong> — 외국국적동포의 국내 부동산 취득·처분 특례</li><li><strong>외국인토지법 제4조·제6조</strong> — 외국인의 부동산 취득·보유·처분 및 신고 의무</li><li><strong>등기예규 제1778호</strong> — 재외국민·외국인 부동산등기신청절차</li><li><strong>등기예규 제1842호</strong> — 등기필정보 없는 경우의 확인서면 작성 (2025.1.31. 시행)</li><li><strong>가족관계의 등록 등에 관한 법률 제11조</strong> — 재외국민 가족관계등록부 열람·증명 교부</li></ul></div>' },
  ]},

  'for-apostille': { type: 'A', title: '아포스티유(Apostille)', sections: [
    { heading: '개념 및 도입 배경', content: '<p><strong>아포스티유(Apostille)</strong>란 「외국공문서에 대한 인증의 요구를 폐지하는 협약」(1961년 헤이그 협약)에 따라 발급되는 문서 진위 확인서입니다. 협약 가입국끼리는 외국공관의 영사확인 절차 없이 아포스티유가 부착된 문서를 공문서로 인정합니다.</p><div class="key-point"><div class="kp-title">부동산등기에서의 적용 근거</div><p>부동산등기규칙 제46조 제9항(2017.10.1. 시행): 첨부정보가 외국 공문서이거나 외국 공증인이 공증한 문서인 경우, <strong>아포스티유 가입국</strong>은 아포스티유를, <strong>비가입국</strong>은 재외공관 공증담당영사의 확인을 받아야 한다.</p></div><div class="info-box">2017.10.1. 이전에는 외국 공문서를 그대로 제출 가능했으나, 이후부터는 아포스티유 또는 영사확인이 필수입니다. 이 점을 반드시 고객에게 안내하세요.</div>' },
    { heading: '아포스티유 대상 문서', content: '<p>협약 제1조에서 정한 4가지 유형의 문서가 대상입니다.</p><table><thead><tr><th>유형</th><th>해당 문서 예시</th></tr></thead><tbody><tr><td>① 국가기관·법원 관련 당국·공무원 발행 문서</td><td>가족관계증명서, 납세사실증명서, 이혼판결문, 국공립학교 성적증명서</td></tr><tr><td>② 행정문서</td><td>각종 정부기관 발행 서류</td></tr><tr><td>③ 공증인 직무상 작성 증서</td><td>공증받은 계약서, 위임장, 번역문 인증서</td></tr><tr><td>④ 사서증서에 부가된 공적 기술서</td><td>등록사실 기재, 서명 인증 등</td></tr></tbody></table><div class="warn-box"><div class="warn-title">⚠️ 적용 제외</div><ul><li>외교·영사기관이 작성한 문서 (예: 주한 미국대사관 공증 문서)</li><li>상사·세관 사무와 직접 관련된 행정문서</li><li>대한민국과 미수교 + 협약 비가입국 발행 문서</li><li>신분증 원본</li></ul></div>' },
    { heading: '가입국 vs 비가입국 처리 방법', content: '<table><thead><tr><th>구분</th><th>처리 방법</th><th>주요 가입국 예시</th></tr></thead><tbody><tr><td><strong>아포스티유 협약 가입국</strong></td><td>해당 국가의 아포스티유 발행 권한기관(외교부·국무부·법원·교육청 등)에서 발행한 아포스티유 첨부</td><td>미국, 일본, 중국(홍콩·마카오 포함), 영국, 독일, 프랑스, 호주, 캐나다, 러시아, 싱가포르 등 130여 개국</td></tr><tr><td><strong>협약 비가입국</strong></td><td>해당 국가 주재 대한민국 공증담당영사의 확인</td><td>북한, 시리아, 일부 아프리카·중동 국가</td></tr></tbody></table><div class="info-box">국가별 가입 여부는 대한민국 아포스티유 사이트(apostille.go.kr)에서 확인하세요. 2025.3.30 현재 130개국 이상 가입.</div>' },
    { heading: '한국의 아포스티유 발급 기관', content: '<table><thead><tr><th>발급 기관</th><th>담당 문서</th><th>연락처</th></tr></thead><tbody><tr><td><strong>외교부</strong></td><td>법무부 담당 이외의 일반 행정기관 발행 문서 (가족관계증명서, 주민등록등본 등)</td><td>(02) 2100-7600<br>(02) 739-8219</td></tr><tr><td><strong>법무부</strong></td><td>법무부·소속기관(검찰청 포함) 발행 문서, 검찰보존 재판서 등본·초본, <strong>공증문서</strong></td><td>(02) 720-8027</td></tr></tbody></table><div class="key-point"><div class="kp-title">주소</div><p>서울특별시 종로구 종로5길 68, 코리안리빌딩 4층 외교부 영사민원실 (우편번호 03151)</p></div>' },
    { heading: '신청 절차 및 방법', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>사문서는 공증 먼저</h4><p>위임장·계약서 등 사문서는 먼저 국내 공증인 사무소에서 <strong>공증(사서증서 인증)</strong>을 받은 후 아포스티유를 신청해야 합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>신청서 작성</h4><p>아포스티유 신청서(법무부 또는 외교부 양식) 작성. 신청인 인적사항, 대리인 정보, 문서 정보(명칭·제출 대상 국가·발급 기관 등) 기재.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>접수</h4><p>방문 접수(외교부 또는 법무부 창구) 또는 우편 접수. 수수료: 건당 <strong>전자수입인지 1,000원</strong> 첨부.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>발급</h4><p>통상 근무일 기준 <strong>3일 이내</strong> 발급. 직인·서명이 미등록된 경우 3일 초과 가능. 우편 접수 시 7~10일 소요.</p></div></div></div><table style="margin-top:16px"><thead><tr><th>접수 방법</th><th>필요 서류</th><th>소요 기간</th></tr></thead><tbody><tr><td>본인 방문</td><td>신청서, 대상문서, 신분증, 수입인지 1,000원</td><td>3일 이내</td></tr><tr><td>대리인 방문</td><td>신청서, 대상문서, 대리인 신분증, 수입인지 1,000원</td><td>3일 이내</td></tr><tr><td>우편</td><td>신청서, 대상문서, 신분증 사본, 수입인지, 반송봉투(우표 부착)</td><td>7~10일</td></tr></tbody></table>' },
    { heading: '번역문에 대한 아포스티유', content: '<div class="key-point"><div class="kp-title">번역문 처리 절차 (부동산등기규칙 제46조 제8항)</div><p>등기소 제출 첨부정보가 외국어인 경우 번역문을 첨부해야 하며, 번역문에도 별도로 아포스티유 확인이 필요합니다.</p></div><div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>원문 아포스티유 신청</h4><p>원문 공문서에 대한 아포스티유를 해당 발행 국가에서 발급받습니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>번역문 공증</h4><p>번역문을 국내 공증인 사무소에서 공증(사서증서 인증)받습니다. 번역 내용이 원본과 다르지 않음을 신청인 진술로 인증하는 것입니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>번역문 아포스티유 신청</h4><p>공증받은 번역문에 대해 법무부에 아포스티유 확인을 신청합니다. 원문과 번역문은 <strong>각각 별도로</strong> 신청해야 합니다.</p></div></div></div>' },
    { heading: '실무 체크리스트', content: '<div class="warn-box"><div class="warn-title">⚠️ 외국인 관련 등기 접수 전 반드시 확인</div><ol><li>첨부서류 중 외국에서 발행된 문서(공문서·공증문서) 여부 확인</li><li>해당 국가가 아포스티유 협약 가입국인지 확인 → apostille.go.kr</li><li>가입국: 해당 국가의 아포스티유 부착 여부 확인<br>비가입국: 주재 한국 영사 확인 여부 확인</li><li>사문서(위임장, 계약서)는 공증 후 아포스티유 순서 확인</li><li>외국어 문서는 번역문 + 번역문 공증 + 번역문 아포스티유까지 확인</li><li>주한 외국공관(예: 주한 미국대사관)에서 공증받은 문서는 아포스티유 불필요 — 확인 면제 대상</li></ol></div>' },
  ]},

  'for-no-reginfo': { type: 'B', title: '등기필정보 없는 경우', sections: [
    { heading: '업무 개요', content: '<p>외국인 또는 재외국민이 등기의무자로서 권리에 관한 등기를 신청할 때 등기필정보가 없는 경우의 처리 방법입니다(등기예규 제1842호, 2025.1.31. 시행).</p><div class="key-point"><div class="kp-title">3가지 처리 방법</div><ol><li>등기관이 확인조서 작성 (등기의무자 등기소 직접 출석)</li><li>자격자대리인(법무사)이 확인서면 작성 (법무사가 직접 면담)</li><li>신청서 또는 위임장 중 등기의무자 작성부분을 공증받아 제출</li></ol></div>' },
    { heading: '공증의 의미와 대상 서면', content: '<p>법 제51조 단서의 <strong>공증</strong>은 사서증서 인증을 의미합니다. 외국인의 경우 본국 관공서의 증명이나 본국 또는 대한민국 공증을 포함합니다.</p><table><thead><tr><th>상황</th><th>공증 대상 서면</th><th>비고</th></tr></thead><tbody><tr><td>등기의무자가 직접 등기신청</td><td>등기신청서</td><td>—</td></tr><tr><td>법무사 등에게 등기신청 위임</td><td>등기신청위임장</td><td>법무사의 확인서면이 아님에 주의</td></tr><tr><td>타인에게 처분권한 수여</td><td>처분위임장</td><td>"등기필정보가 없다"는 뜻 반드시 기재</td></tr></tbody></table><div class="warn-box"><div class="warn-title">⚠️ 중요 — 공증 시 본인 직접 출석 필수</div><p>공증은 등기소 출석의무를 대신하는 것이므로, 등기의무자 본인이 공증인 앞에 <strong>직접 출석</strong>하여 공증을 받아야 합니다. 대리인이 출석하여 공증받은 경우 등기신청 수리 불가.</p></div>' },
    { heading: '법무사 확인서면 작성 방법', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>등기의무자 직접 면담</h4><p>법무사가 직접 위임인을 면담하여 본인임을 확인합니다. 전화·영상통화 불가 — 반드시 대면 확인.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>신분증 확인 및 사본 첨부</h4><p>주민등록증, 운전면허증, 외국인등록증, 국내거소신고증, 여권 중 하나로 확인. 신분증 사본을 서면에 첨부(모바일 신분증은 신분확인서 별지 첨부).</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>확인서면 작성</h4><p>별지 제1호 양식(개인) 또는 제2호 양식(법인) 사용. [특기사항]란에 면담 일시·장소·상황 기재. [우무인]란에 등기의무자 우무인 날인.</p></div></div></div><div class="info-box">우무인 날인 불가 특별 사정(엄지 절단 등) → 좌무인 날인 후 특기사항 기재. 양 손 무인 모두 불가 → 날인 생략 후 특기사항 기재.</div>' },
  ]},

  'for-disposal': { type: 'B', title: '외국인 부동산 처분 안내', sections: [
    { heading: '업무 개요', content: '<p>외국인이 국내에 입국하지 않고 부동산을 처분하는 경우, 소유권이전등기 신청에 필요한 서면을 미리 안내하고 수령해야 합니다. 본국에 인감증명제도가 있는지 여부에 따라 필요 서류가 달라집니다.</p>' },
    { heading: '인감증명제도 없는 국가 (예: 미국, 캐나다 등)', content: '<table><thead><tr><th>서류</th><th>내용</th></tr></thead><tbody><tr><td>처분위임장</td><td>본인이 서명 + <strong>서명이 본인의 것임을 증명하는 본국 관공서 증명 또는 공증</strong>(아포스티유 또는 영사 확인 포함)</td></tr><tr><td>주소증명서면</td><td>주소를 공증한 서면, 또는 운전면허증·신분증 사본에 원본동일 기재 후 본국 공증 또는 한국 영사관 확인</td></tr><tr><td>성명 변경 시</td><td>변경 전후 동일인임을 증명하는 본국 관공서 증명 또는 공증</td></tr><tr><td>등기필증 분실 시</td><td>처분위임장에 등기권리증 분실 내용 기재</td></tr><tr><td>신분증</td><td>시민권·여권·운전면허증 중 하나의 앞뒤 사본</td></tr></tbody></table>' },
    { heading: '인감증명제도 있는 국가 (예: 일본, 대만 등)', content: '<table><thead><tr><th>서류</th><th>내용</th></tr></thead><tbody><tr><td>처분위임장</td><td>본인 인감 날인 (처분 대상 부동산, 수임인, 위임 행위 종류 및 처분권한 일체 수여 내용 기재 필수)</td></tr><tr><td>인감증명</td><td>본국 관공서 발행 인감증명서 첨부 (재외공관 확인으로 대체 불가)</td></tr><tr><td>주소증명서</td><td>본국 관공서 발행 주소증명서 또는 거주사실증명서</td></tr><tr><td>성명 변경 시</td><td>변경 전후 동일인임을 증명하는 본국 관공서 증명 또는 공증</td></tr><tr><td>등기필증 분실 시</td><td>처분위임장에 등기권리증 분실 내용 기재</td></tr><tr><td>신분증</td><td>시민권·여권·운전면허증 중 하나의 앞뒤 사본</td></tr></tbody></table><div class="warn-box"><div class="warn-title">⚠️ 인감증명 대체 불가</div><p>일본·대만 등 인감증명제도 있는 국가의 경우, 처분위임장에 대한민국 재외공관의 확인을 받는 방법으로는 인감증명을 대신할 수 없습니다.</p></div>' },
    { heading: '공통 주의사항', content: '<div class="key-point"><div class="kp-title">아포스티유 적용 확인</div><p>위 서류 중 외국 공문서 또는 공증문서에는 아포스티유(가입국) 또는 영사 확인(비가입국)이 필요합니다. 안내문 발송 전 반드시 해당 국가의 아포스티유 협약 가입 여부를 확인하고 이를 안내에 포함하세요.</p></div><div class="info-box">실무 팁: 외국인 의뢰인에게는 이메일로 체크리스트와 서류 견본을 함께 발송하면 오류를 줄일 수 있습니다. 발송 전 법무사의 검토를 받으세요.</div>' },
  ]},

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

  'inh-renounce': { type: 'B', title: '상속포기', sections: [
    { heading: '업무 개요', content: '<p>상속포기란 상속인이 상속의 효력을 소급하여 소멸시키는 단독행위입니다. 상속을 포기한 자는 <strong>처음부터 상속인이 아니었던 것으로 봅니다</strong>(민법 제1042조).</p><div class="key-point"><div class="kp-title">상속포기 vs 한정승인 선택 기준</div><table><thead><tr><th>구분</th><th>상속포기</th><th>한정승인</th></tr></thead><tbody><tr><td>효과</td><td>상속인 지위 자체 소멸</td><td>상속재산 한도 내 채무 부담</td></tr><tr><td>적합한 경우</td><td>채무가 재산을 명백히 초과하고 차순위 상속인도 포기할 때</td><td>재산·채무 규모가 불분명하거나 재산이 일부 있을 때</td></tr><tr><td>차순위 영향</td><td>차순위 상속인에게 상속 이전됨</td><td>이전되지 않음</td></tr><tr><td>절차 복잡도</td><td>단순 (신고만)</td><td>복잡 (청산절차 필요)</td></tr></tbody></table></div>' },
    { heading: '법적 근거', content: '<div class="law-ref"><div class="law-ref-title">관련 법령</div><ul><li><strong>민법 제1041조</strong> (포기의 방식) — 상속의 포기는 제1019조 제1항의 기간 내에 가정법원에 신고하여야 한다.</li><li><strong>민법 제1042조</strong> (포기의 소급효) — 상속의 포기는 상속개시된 때에 소급하여 그 효력이 있다.</li><li><strong>민법 제1043조</strong> (포기한 상속인의 순위) — 상속인이 여러 명인 경우 어느 상속인이 포기하면 그 상속분은 다른 상속인의 상속분에 비율로 귀속된다.</li><li><strong>민법 제1019조 제1항</strong> — 상속개시가 있음을 안 날로부터 3개월 이내</li></ul></div>' },
    { heading: '신청 요건 및 기간', content: '<div class="key-point"><div class="kp-title">⏰ 기간 엄수 — 3개월 이내</div><p>상속개시 있음을 안 날(<strong>보통 피상속인 사망일</strong>)로부터 3개월 이내에 가정법원에 신고하여야 합니다. 기간 도과 시 단순승인으로 간주됩니다(민법 제1026조 제2호).</p></div><p>단, 상속인이 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 3개월 내에 알지 못하고 단순승인한 경우에는 그 사실을 안 날로부터 3개월 내에 한정승인을 할 수 있습니다(민법 제1019조 제3항, 특별한정승인).</p>' },
    { heading: '신청 절차', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>상속인 확인 및 상담</h4><p>상속인 범위 확인, 재산·채무 현황 파악, 포기 여부 결정. 차순위 상속인에게 미치는 영향을 반드시 설명합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>관할 가정법원 확인</h4><p>피상속인 최후 주소지를 관할하는 가정법원에 신청합니다.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>서류 준비 및 청구서 작성</h4><p>상속포기 심판청구서 작성. 인지대 1,000원, 송달료 납부.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>가정법원 접수</h4><p>방문 접수 또는 전자소송(ecfs.scourt.go.kr)으로 제출.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">5</div><div class="flow-step-content"><h4>심판 수리</h4><p>통상 1~2주 내 수리 심판문 수령. 법원에 따라 다소 차이 있음.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">6</div><div class="flow-step-content"><h4>심판문 보관 및 안내</h4><p>수리 심판문을 고객에게 교부하고 보관 안내. 필요 시 차순위 상속인의 포기 절차 연속 진행.</p></div></div></div>' },
    { heading: '신청서류 목록', content: '<table><thead><tr><th>서류명</th><th>발급처</th><th>비고</th></tr></thead><tbody><tr><td>상속포기 심판청구서</td><td>직접 작성</td><td>법원 양식 또는 자유 양식</td></tr><tr><td>피상속인 기본증명서</td><td>주민센터·정부24</td><td>일반증명 (사망 기재본)</td></tr><tr><td>피상속인 가족관계증명서</td><td>주민센터·정부24</td><td>상세증명</td></tr><tr><td>피상속인 말소된 주민등록초본</td><td>주민센터·정부24</td><td>전체 주소 이력 포함</td></tr><tr><td>신청인(상속인) 기본증명서</td><td>주민센터·정부24</td><td>—</td></tr><tr><td>신청인 가족관계증명서</td><td>주민센터·정부24</td><td>—</td></tr><tr><td>신청인 주민등록초본</td><td>주민센터·정부24</td><td>—</td></tr><tr><td>인지 1,000원</td><td>법원 내 은행 또는 전자납부</td><td>청구인 1인당</td></tr><tr><td>송달료</td><td>법원 내 은행 또는 전자납부</td><td>신청인 수에 따라 상이</td></tr></tbody></table><div class="info-box">미성년 상속인의 경우 법정대리인(친권자)이 신청. 친권자도 상속인이면 이해충돌로 특별대리인 선임 필요 — 반드시 확인할 것.</div>' },
    { heading: '차순위 상속인 연속 포기', content: '<div class="warn-box"><div class="warn-title">⚠️ 핵심 주의사항 — 차순위 상속인 포기 연쇄 필요</div><p>1순위 상속인이 모두 포기하면 2순위(직계존속), 그마저 없거나 포기하면 3순위(형제자매), 4순위(4촌 이내 방계혈족)로 상속이 이전됩니다.</p><p><strong>실무에서 흔한 실수:</strong> 자녀들만 포기하고 부모님의 포기를 누락하는 경우. 반드시 전체 상속 순위 계통을 확인하고, 연락 가능한 모든 상속인의 포기 진행 여부를 고객에게 안내해야 합니다.</p></div>' },
    { heading: '관련 판례', content: '<div class="case-box"><div class="case-title">대법원 2005. 7. 22. 선고 2003다43681 판결</div><p>상속포기는 상속개시 있음을 안 날로부터 3개월 이내에 가정법원에 신고하여야 하며, 이 기간은 제척기간이므로 연장이나 정지가 없다.</p></div><div class="case-box"><div class="case-title">대법원 2006. 7. 4. 선고 2005다10986 판결</div><p>상속인이 상속채무가 상속재산을 초과한다는 사실을 몰랐고 그 사실을 알지 못한 데 중대한 과실이 없는 경우, 그 사실을 안 날로부터 3개월 내에 한정승인을 할 수 있다(특별한정승인).</p></div>' },
    { heading: '미성년자·특별대리인', content: '<div class="warn-box"><div class="warn-title">⚠️ 미성년 상속인 처리</div><p><strong>상황 1:</strong> 부모(친권자) 중 한 명만 상속인인 경우 → 친권자가 미성년 자녀를 대리하여 포기 신청 가능.</p><p><strong>상황 2:</strong> 부모 모두 상속인인 경우 → 부모와 미성년 자녀의 이해가 상충하므로 특별대리인 선임 필요(민법 제921조). 특별대리인 선임 심판청구를 먼저 진행해야 하므로 <strong>시간이 추가로 필요</strong>함을 고객에게 미리 안내할 것.</p></div>' },
  ]},

  'inh-limited': { type: 'B', title: '한정승인 및 청산절차', sections: [
    { heading: '업무 개요', content: '<p>한정승인은 상속인이 상속으로 인하여 취득할 재산의 한도에서만 피상속인의 채무와 유증을 변제할 것을 조건으로 상속을 승인하는 것입니다(민법 제1028조).</p><div class="key-point"><div class="kp-title">상속포기와의 차이</div><table><thead><tr><th>구분</th><th>한정승인</th><th>상속포기</th></tr></thead><tbody><tr><td>상속인 지위</td><td>유지됨</td><td>소멸 (처음부터 비상속인)</td></tr><tr><td>재산 처리</td><td>직접 청산 절차 진행</td><td>차순위로 이전</td></tr><tr><td>차순위 영향</td><td>없음</td><td>차순위에 상속 이전</td></tr><tr><td>절차 복잡도</td><td>복잡 (공고·청산 필요)</td><td>단순 (신고로 종료)</td></tr><tr><td>적합한 경우</td><td>재산이 일부 있거나 채무 규모 불분명</td><td>채무가 재산을 명백히 초과</td></tr></tbody></table></div>' },
    { heading: '법적 근거', content: '<div class="law-ref"><div class="law-ref-title">관련 법령</div><ul><li><strong>민법 제1028조</strong> (한정승인의 효과) — 한도 내 채무 변제 조건</li><li><strong>민법 제1019조 제1항</strong> — 3개월 이내 신고</li><li><strong>민법 제1019조 제3항</strong> — 특별한정승인 (채무 초과 사실을 나중에 안 경우, 안 날로부터 3개월)</li><li><strong>민법 제1030조</strong> (한정승인의 신고) — 재산목록 첨부 의무</li><li><strong>민법 제1032조</strong> (채권자에 대한 공고·최고) — 수리 후 5일 이내 공고</li><li><strong>민법 제1034조~1039조</strong> — 청산 절차 및 변제 순위</li></ul></div>' },
    { heading: '신청 절차 (1단계: 한정승인 신고)', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>재산·채무 현황 조사</h4><p>피상속인의 적극재산(부동산, 예금, 보험금 등)과 소극재산(대출, 보증채무, 카드채무 등)을 파악합니다. 금융감독원 금융정보조회서비스, 안심상속 원스톱서비스 활용 권장.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>상속재산목록 작성</h4><p>부동산은 등기부등본·공시지가로, 예금은 잔액증명서로 확인. 재산목록을 과소 기재하면 단순승인으로 간주될 수 있으므로 주의.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>한정승인 심판청구 접수</h4><p>피상속인 최후 주소지 관할 가정법원에 접수. 인지 5,000원, 송달료 납부.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>심판 수리</h4><p>통상 2~4주 내 수리 심판문 수령.</p></div></div></div>' },
    { heading: '신청 절차 (2단계: 청산)', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">5</div><div class="flow-step-content"><h4>채권자 공고 및 최고 (수리 후 5일 이내)</h4><p>관보 또는 일간신문에 2개월 이상의 기간을 정하여 채권신고를 최고하는 공고를 냅니다(민법 제1032조).</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">6</div><div class="flow-step-content"><h4>알고 있는 채권자에 개별 최고</h4><p>공고와 별도로 알고 있는 채권자에게 개별적으로 채권신고를 최고합니다(민법 제1032조 제2항). 내용증명 우편 활용.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">7</div><div class="flow-step-content"><h4>공고기간 만료 후 채권 조사</h4><p>공고기간(2개월) 만료 후 신고된 채권과 목록상 채권을 합산하여 변제 순위 확정.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">8</div><div class="flow-step-content"><h4>채권 순위별 변제</h4><p>①우선변제채권(저당권·전세권 등 담보채권) → ②일반채권 → ③유증. 재산이 부족하면 채권액에 비례하여 안분 변제.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">9</div><div class="flow-step-content"><h4>잔여재산 귀속</h4><p>채무 전부 변제 후 잔여재산이 있으면 상속인에게 귀속됩니다.</p></div></div></div>' },
    { heading: '신청서류 목록', content: '<table><thead><tr><th>서류명</th><th>발급처</th><th>비고</th></tr></thead><tbody><tr><td>한정승인 심판청구서</td><td>직접 작성</td><td>상속재산목록 첨부 필수</td></tr><tr><td>상속재산목록</td><td>직접 작성</td><td>적극·소극재산 모두 기재</td></tr><tr><td>피상속인 기본증명서</td><td>주민센터·정부24</td><td>사망 기재, 상세증명</td></tr><tr><td>피상속인 가족관계증명서</td><td>주민센터·정부24</td><td>상세증명</td></tr><tr><td>피상속인 말소된 주민등록초본</td><td>주민센터·정부24</td><td>전체 주소 이력 포함</td></tr><tr><td>신청인(상속인) 기본증명서</td><td>주민센터·정부24</td><td>—</td></tr><tr><td>신청인 가족관계증명서</td><td>주민센터·정부24</td><td>—</td></tr><tr><td>신청인 주민등록초본</td><td>주민센터·정부24</td><td>—</td></tr><tr><td>재산 관련 소명자료</td><td>각 기관</td><td>등기부등본, 잔액증명서 등</td></tr><tr><td>채무 관련 소명자료</td><td>각 기관</td><td>금융채무확인서, 차용증 등</td></tr><tr><td>인지 5,000원 + 송달료</td><td>법원</td><td>—</td></tr></tbody></table>' },
    { heading: '특별한정승인 (민법 제1019조 제3항)', content: '<div class="key-point"><div class="kp-title">특별한정승인이란?</div><p>상속인이 단순승인(법정단순승인 포함)을 한 후, 상속채무가 상속재산을 초과한다는 사실을 <strong>중대한 과실 없이 알지 못한 경우</strong>에는, 그 사실을 <strong>안 날로부터 3개월 이내</strong>에 한정승인을 할 수 있습니다.</p></div><div class="warn-box"><div class="warn-title">⚠️ 특별한정승인 적용 요건 확인사항</div><ol><li>일반 3개월 기간이 경과한 경우에만 적용</li><li>채무 초과 사실을 <strong>몰랐던 정당한 이유</strong>가 있어야 함</li><li>중대한 과실 여부 판단: 피상속인과의 관계, 채무 은닉 여부, 조사 노력 등 종합 고려</li></ol></div>' },
    { heading: '주의사항 및 관련 판례', content: '<div class="warn-box"><div class="warn-title">⚠️ 단순승인 간주 주의 (민법 제1026조)</div><ul><li>상속인이 상속재산을 <strong>처분</strong>한 경우</li><li>3개월 기간 내에 한정승인 또는 포기를 하지 않은 경우</li><li>한정승인 또는 포기 후 상속재산을 <strong>은닉하거나 부정소비</strong>한 경우</li></ul></div><div class="case-box"><div class="case-title">대법원 2010. 3. 25. 선고 2009다77597 판결</div><p>한정승인자가 청산 절차를 이행하지 않고 특정 채권자에게만 변제한 경우, 다른 채권자에 대한 손해배상 책임을 질 수 있다. 청산 절차는 반드시 법정 순서에 따라야 한다.</p></div>' },
  ]},

  'inh-bankrupt': { type: 'B', title: '상속재산 파산', sections: [
    { heading: '업무 개요', content: '<p>상속재산 파산이란 상속재산이 채무를 초과하는 경우 법원에 파산을 신청하여 파산관재인의 관리 하에 채권자들에게 공평하게 배당하는 절차입니다(채무자 회생 및 파산에 관한 법률 제299조 이하).</p><div class="key-point"><div class="kp-title">한정승인 vs 상속재산파산 비교</div><table><thead><tr><th>구분</th><th>한정승인</th><th>상속재산파산</th></tr></thead><tbody><tr><td>근거법</td><td>민법</td><td>채무자 회생 및 파산에 관한 법률</td></tr><tr><td>청산 주체</td><td>상속인 직접 진행</td><td>법원 선임 파산관재인</td></tr><tr><td>채권자 보호</td><td>상대적으로 미흡</td><td>강력 (법원 감독)</td></tr><tr><td>비용</td><td>공고비 등 소액</td><td>신청비 + 파산관재인 보수</td></tr><tr><td>적합한 경우</td><td>채무 규모 작고 직접 처리 가능</td><td>채무 규모 크거나 분쟁 가능성 높을 때</td></tr><tr><td>신청권자</td><td>상속인만</td><td>상속인, 상속채권자, 유증받은 자 등</td></tr></tbody></table></div>' },
    { heading: '법적 근거', content: '<div class="law-ref"><div class="law-ref-title">관련 법령</div><ul><li><strong>채무자 회생 및 파산에 관한 법률 제299조</strong> — 상속재산파산 신청권자</li><li><strong>동법 제300조</strong> — 한정승인과의 관계 (한정승인 후 파산 신청 가능)</li><li><strong>동법 제301조</strong> — 상속재산파산 선고 후 효과</li><li><strong>동법 제382조~제384조</strong> — 파산재단, 파산관재인</li></ul></div>' },
    { heading: '신청 절차', content: '<div class="flow-vertical"><div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-content"><h4>파산신청 결정</h4><p>채무 초과 규모, 채권자 수, 분쟁 가능성 등을 종합하여 한정승인 청산 vs 파산 방식 선택.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-content"><h4>파산신청서 작성 및 접수</h4><p>피상속인 최후 주소지 또는 재산 소재지 관할 지방법원(파산부)에 접수.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-content"><h4>파산선고 및 파산관재인 선임</h4><p>법원이 파산요건을 심사하여 파산 선고. 파산관재인 선임 및 채권신고 기간 지정.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-content"><h4>채권신고 및 조사</h4><p>채권자들이 법원이 정한 기간 내에 채권 신고. 파산관재인이 채권 존부·액수 조사.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">5</div><div class="flow-step-content"><h4>파산재단 환가 및 배당</h4><p>부동산·동산 등 파산재단 현금화 후 채권 순위에 따라 배당.</p></div></div><div class="flow-arrow">↓</div><div class="flow-step"><div class="flow-step-num">6</div><div class="flow-step-content"><h4>파산종결</h4><p>배당 완료 후 파산절차 종결. 잔여 채무 소멸.</p></div></div></div>' },
    { heading: '신청서류 목록', content: '<table><thead><tr><th>서류명</th><th>비고</th></tr></thead><tbody><tr><td>파산신청서</td><td>법원 양식 (상속재산파산 전용)</td></tr><tr><td>상속재산목록 (적극재산)</td><td>부동산등기부등본, 잔액증명서 등 첨부</td></tr><tr><td>상속채무목록 (소극재산)</td><td>금융채무확인서, 차용증 등 첨부</td></tr><tr><td>채권자 목록</td><td>성명, 주소, 채권액 기재</td></tr><tr><td>피상속인 기본증명서·가족관계증명서</td><td>사망 기재본</td></tr><tr><td>신청인 신분증명서류</td><td>—</td></tr><tr><td>한정승인 심판문 (해당 시)</td><td>한정승인 후 파산신청 시 첨부</td></tr><tr><td>신청비용 (인지대 + 예납금)</td><td>파산관재인 보수 포함, 법원마다 상이</td></tr></tbody></table><div class="info-box">파산 예납금은 파산재단 규모에 따라 다르며 통상 수십만~수백만 원. 사전에 관할 법원 파산부에 확인하세요.</div>' },
    { heading: '주의사항', content: '<div class="warn-box"><div class="warn-title">⚠️ 실무 주의사항</div><ul><li>파산선고 후 상속인이 임의로 상속재산 처분 시 파산범죄 해당 가능</li><li>파산예납금 부족 시 신청 기각 — 사전 비용 확인 필수</li><li>상속재산파산은 개인파산과 달리 면책 제도 없음 — 상속인 개인 채무는 별도 처리</li><li>한정승인 청산 중 파산 전환 결정 시, 이미 변제한 금액에 대해 파산관재인이 부인권 행사 가능 — 변제 전 방향 확정 필요</li></ul></div>' },
  ]},
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
