/* ============================================================
   민사소송 콘텐츠 데이터 (civil_topics_data.js)
   ============================================================ */

const CIVIL_TOPICS = [

  /* ──────────────────────────────────────────────
     ms-01  민사소송 절차 한눈에 보기
  ────────────────────────────────────────────── */
  {
    id: 'ms-01',
    title: '민사소송 절차 한눈에 보기',
    meta: '분쟁이 생긴 순간부터 판결과 불복까지 — 민사소송이 어떤 단계로 흘러가는지, 어떤 기간을 놓치면 안 되는지 전체 흐름을 한 페이지에 정리했습니다.',
    sections: [

      /* 1 */
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>상대방에게 돈을 받아야 하는데, 소송을 어디서부터 시작해야 할지 모르겠습니다.</li>
  <li>법원에서 서류가 왔는데 전체 절차가 어떻게 흘러가는지 파악하고 싶습니다.</li>
  <li>소송과 지급명령·조정·제소전화해 중 어느 방법이 내 상황에 맞는지 비교하고 싶습니다.</li>
  <li>항소·상소기간처럼 놓치면 안 되는 기간이 무엇인지 한눈에 확인하고 싶습니다.</li>
  <li>소송을 직접 해볼 수 있는지, 법무사 도움이 필요한지 가늠해 보고 싶습니다.</li>
</ul>` },

      /* 2 */
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">민사소송이란</p>
  <p>민사소송은 개인·법인 사이의 권리 분쟁을 법원이 판결로 해결하는 절차입니다.
     소장 제출 → 송달·답변 → 변론·입증 → 판결 → (불복 시 상소)의 흐름으로 진행됩니다.
     <strong>기간을 놓치면 그대로 불리해지는 구조</strong>이므로, 어떤 기간이 언제 시작되는지 파악하는 것이 가장 중요합니다.</p>
</div>
<div class="deadline-banner">
  <div class="dl-icon">⚡</div>
  <div class="dl-text">
    <strong>꼭 지켜야 할 3대 기간</strong>
    <p>① 소장 부본 수령 후 <strong>30일</strong> 이내 — 답변서 제출<br>
       ② 판결정본 수령 후 <strong>2주</strong> 이내 — 항소(상고)<br>
       ③ 지급명령 수령 후 <strong>2주</strong> 이내 — 이의신청</p>
  </div>
</div>` },

      /* 3 */
      { heading: '단계별 흐름', content: `
<div class="section-title"><span class="num">SECTION 02</span> 단계별 흐름</div>

<h3>STEP 0 — 방법 선택: 정식 소송 vs 간이 절차</h3>
<p>금전 청구라면 정식 소송 외에 더 빠른 방법을 먼저 검토합니다.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>절차</th><th>잘 맞는 경우</th><th>특징</th></tr></thead>
<tbody>
<tr><td class="td-key">독촉절차(지급명령)</td><td>금전 청구 + 상대가 다투지 않을 사건</td><td>인지 1/10, 이의 시 소송이행</td></tr>
<tr><td class="td-key">소액사건심판</td><td>소가 3,000만 원 이하</td><td>구술 제소·가족 대리·1회 심리</td></tr>
<tr><td class="td-key">민사조정</td><td>원만한 합의를 원할 때</td><td>신청 인지 1/10, 조정조서 = 확정판결 효력</td></tr>
<tr><td class="td-key">제소전화해</td><td>임대차 명도 등 미리 집행권원 확보</td><td>인지 1/5, 화해조서 = 확정판결 효력</td></tr>
<tr><td class="td-key">정식 민사소송</td><td>다툼이 있거나 증거 심리가 필요한 사건</td><td>3심제, 기판력 있는 판결</td></tr>
</tbody>
</table></div>

<h3>STEP 1 — 소 제기 준비</h3>
<p>어느 법원에 낼지(관할)와 소송목적의 값(소가)을 먼저 정합니다.
소가는 인지액(수수료)과 단독·합의부 관할을 동시에 결정하는 기준입니다.</p>
<div class="info-box"><p>소가가 <strong>5억 원 초과</strong> → 합의부 / <strong>5억 원 이하</strong> → 단독판사 / <strong>3,000만 원 이하 금전</strong> → 소액사건</p></div>

<h3>STEP 2 — 소장 제출</h3>
<p>청구취지·청구원인을 적은 소장에 인지·송달료·첨부서류를 갖춰 법원에 제출합니다.
재판장이 필수 기재사항·인지 흠을 심사하고, 흠이 있으면 보정명령을 내립니다.
⚡ 보정명령에 응하지 않으면 소장이 각하됩니다.</p>

<h3>STEP 3 — 송달과 답변</h3>
<p>소장 부본이 피고에게 송달되어야 절차가 진행됩니다.
피고는 <strong>소장 부본 수령일부터 30일 이내</strong>에 답변서를 제출해야 합니다.
답변서를 내지 않으면 무변론판결(원고 승소)이 선고될 수 있습니다.</p>

<h3>STEP 4 — 변론과 입증</h3>
<p>공개법정에서 양쪽이 주장·증거를 제출하며 다툽니다.
<strong>주장하고 증명하지 않으면 진다</strong>는 변론주의가 적용됩니다.
서증(문서)·증인·사실조회 등으로 다툼 있는 사실을 증명해야 합니다.</p>

<h3>STEP 5 — 판결</h3>
<p>변론이 끝나면 법원이 판결을 선고하고 정본을 당사자에게 송달합니다.
판결정본을 받은 날부터 <strong>2주 이내</strong>에 상소하지 않으면 판결이 확정됩니다.</p>

<h3>STEP 6 — 불복(상소)</h3>
<p>판결에 불복하면 <strong>2주 이내</strong>에 항소(1심→2심), 상고(2심→대법원)합니다.
결정·명령에는 항고, 즉시항고는 고지 후 <strong>1주 이내</strong>입니다.</p>

<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=025700" target="_blank" class="tag-law">📋 민사소송법 제257조 (무변론판결)</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=039600" target="_blank" class="tag-law">📋 민사소송법 제396조 (항소기간)</a>
</div>` },

      /* 4 */
      { heading: '꼭 지켜야 할 기간 한눈에', content: `
<div class="section-title"><span class="num">SECTION 03</span> 꼭 지켜야 할 기간</div>
<div class="tbl-wrap"><table>
<thead><tr><th>무엇을</th><th style="width:14%">기간</th><th>기산점</th></tr></thead>
<tbody>
<tr><td>답변서 제출</td><td class="highlight">30일</td><td>소장 부본을 받은 날부터</td></tr>
<tr><td>항소·상고</td><td class="highlight">2주</td><td>판결정본을 받은 날부터</td></tr>
<tr><td>항소이유서 제출</td><td class="highlight">40일</td><td>항소기록 접수통지를 받은 날부터</td></tr>
<tr><td>상고이유서 제출</td><td class="highlight">20일</td><td>소송기록 접수통지를 받은 날부터</td></tr>
<tr><td>즉시항고</td><td class="highlight">1주</td><td>재판을 고지받은 날부터</td></tr>
<tr><td>지급명령 이의신청</td><td class="highlight">2주</td><td>지급명령을 받은 날부터</td></tr>
<tr><td>이행권고결정 이의신청</td><td class="highlight">2주</td><td>결정서 등본을 받은 날부터</td></tr>
<tr><td>조정을 갈음하는 결정 이의</td><td class="highlight">2주</td><td>결정서 정본을 받은 날부터</td></tr>
<tr><td>제소전화해 불성립 후 소제기신청</td><td class="highlight">2주</td><td>불성립조서 등본을 받은 날부터</td></tr>
</tbody>
</table></div>
<div class="warn-box">
  <span class="warn-title">⚡ 위 기간 대부분은 불변기간입니다</span>
  <p>놓치면 권리를 잃거나 판결이 확정됩니다. 서류를 받으면 즉시 날짜를 계산해 두세요.</p>
</div>` },

      /* 5 */
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 04</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-02"><span class="arrow">›</span> 소장 작성과 접수</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-03"><span class="arrow">›</span> 관할 — 어느 법원에?</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-05"><span class="arrow">›</span> 소장을 받았다면 — 답변서</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-10"><span class="arrow">›</span> 지급명령(독촉절차)</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-11"><span class="arrow">›</span> 소액사건심판</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-12"><span class="arrow">›</span> 민사조정</a>
</div>
<div class="cta-box">
  <h3>내 사건은 어떤 절차가 맞을까요?</h3>
  <p>소송인지 지급명령인지, 단독인지 합의부인지 — 처음 방향을 잘못 잡으면 시간과 비용이 늘어납니다.<br>첫 상담은 무료입니다. 법무사가 상황에 맞는 절차를 함께 정리해 드립니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section">
  <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p>
</div>` }
    ]
  },

  /* ──────────────────────────────────────────────
     ms-02  소장 작성과 접수
  ────────────────────────────────────────────── */
  {
    id: 'ms-02',
    title: '소장 작성과 접수 — 무엇을 갖춰야 하나요?',
    meta: '소장에 들어가야 할 내용, 인지·송달료 납부, 첨부서류, 제출 방법까지 — 소장을 처음 내는 분을 위한 단계별 안내입니다.',
    sections: [

      /* 1 */
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>소송을 시작하려는데 소장에 무엇을 써야 할지 막막합니다.</li>
  <li>인지대(수수료)와 송달료를 어떻게 내고, 무엇을 첨부해야 하는지 모르겠습니다.</li>
  <li>부동산·상속·어음 사건이라 따로 붙여야 할 서류가 있는지 궁금합니다.</li>
  <li>법원에서 "보정명령"을 받았는데 무엇을, 언제까지 해야 하는지 알고 싶습니다.</li>
  <li>방문·우편·전자소송 중 어떤 방법으로 내야 할지 정하고 싶습니다.</li>
</ul>` },

      /* 2 */
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">소장 제출 = 4가지를 함께 갖춰야 합니다</p>
  <p>소장을 낼 때는 <strong>① 소장 본문(필수 기재사항)</strong>, <strong>② 인지(수수료)</strong>,
     <strong>③ 송달료</strong>, <strong>④ 첨부서류</strong>를 함께 갖춰야 합니다.
     흠이 있으면 재판장이 보정명령을 내리고, 기간 내에 보정하지 않으면 소장이 각하됩니다.</p>
</div>
<div class="deadline-banner">
  <div class="dl-icon">⚡</div>
  <div class="dl-text">
    <strong>보정명령을 받으면 즉시 날짜를 확인하세요</strong>
    <p>인지·송달료·기재 흠에 대한 보정명령에 응하지 않으면 소장이 각하됩니다.
       보정기간은 재판장이 정하며, 연장이 자동으로 되지 않습니다.</p>
  </div>
</div>` },

      /* 3 */
      { heading: '단계별 상세 안내', content: `
<div class="section-title"><span class="num">SECTION 02</span> 단계별 상세 안내</div>

<h3>① 소장 본문 — 반드시 들어가야 할 내용</h3>
<p>소장에는 <strong>당사자(원고·피고)와 법정대리인, 청구취지, 청구원인</strong>을 반드시 적어야 합니다.
청구취지는 "피고는 원고에게 금 ○○원을 지급하라"처럼 원하는 판결 결론을,
청구원인은 그 이유를 적습니다. 여기에 사건 표시, 이름·주소·연락처, 작성 날짜, 법원 표시를 적고
기명날인 또는 서명을 해야 합니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=024900" target="_blank" class="tag-law">📋 민사소송법 제249조</a>
</div>

<h3>② 인지(수수료) 납부</h3>
<p>소가(소송목적의 값)에 따라 정해진 인지액을 납부합니다. 현금·신용카드로 납부 가능하며,
납부 후 받은 <strong>영수필확인서를 소장에 첨부</strong>해야 합니다. 이 확인서가 빠지면 접수가 지연됩니다.</p>

<h3>③ 송달료 예납</h3>
<p>법원이 상대방에게 소장을 보내는 데 드는 송달료를 미리 납부(예납)해야 합니다.
예납하지 않으면 보정명령이 내려지고, 응하지 않으면 소장이 각하될 수 있습니다.</p>

<h3>④ 사건 유형별 첨부서류</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:28%">구분</th><th>붙여야 할 서류</th></tr></thead>
<tbody>
<tr><td class="td-key">모든 사건 공통</td><td>소장 부본(피고 수만큼), 소가 산정 자료</td></tr>
<tr><td class="td-key">부동산 관련 소</td><td>등기사항증명서, 토지대장·공시지가확인원·건축물대장</td></tr>
<tr><td class="td-key">친족·상속 관련</td><td>가족관계 기록사항에 관한 증명서</td></tr>
<tr><td class="td-key">어음·수표 사건</td><td>어음 또는 수표 사본</td></tr>
<tr><td class="td-key">법인·단체가 당사자</td><td>대표자·관리인의 자격 증명 서면</td></tr>
<tr><td class="td-key">중요 서증이 있는 경우</td><td>서증 사본 (상대방 수 + 1통)</td></tr>
<tr><td class="td-key">대리 제출 시</td><td>위임장 등 제출권한 소명서류</td></tr>
</tbody>
</table></div>

<h3>⑤ 제출 방법</h3>
<p>소장은 법원 민원실 방문, 우편, 또는 <strong>전자소송(ecfs.scourt.go.kr)</strong>으로 낼 수 있습니다.
전자소송은 시스템에 기록된 때 접수됩니다.
제출대행 권한이 있는 법무사가 당사자를 대신해 제출할 수 있습니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=024800" target="_blank" class="tag-law">📋 민사소송법 제248조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=025400" target="_blank" class="tag-law">📋 민사소송법 제254조</a>
</div>` },

      /* 4 */
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">소장에 반드시 들어가야 하는 내용은 무엇인가요?</div>
  <div class="qna-a">당사자(원고·피고)와 법정대리인, 청구취지, 청구원인이 필수입니다. 청구취지는 원하는 판결의 결론, 청구원인은 그 이유입니다. 여기에 사건 표시, 이름·주소·연락처, 첨부서류 표시, 작성 날짜, 법원 표시를 적고 기명날인 또는 서명해야 합니다. 이 중 하나라도 빠지면 보정명령 대상이 됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">인지대는 어떻게 내나요?</div>
  <div class="qna-a">소가에 따라 정해진 인지액을 현금 또는 신용카드로 납부합니다. 수납은행 방문 외에 인터넷뱅킹, ATM, 카드 납부도 가능합니다. 납부 후 받은 영수필확인서를 소장에 꼭 첨부해야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">부동산 소송에서 추가로 붙여야 할 서류가 있나요?</div>
  <div class="qna-a">부동산에 관한 소는 등기사항증명서를 붙입니다. 소가 산정을 위해 개별공시지가나 시가표준액을 알 수 있는 토지대장등본, 공시지가확인원, 건축물대장등본 등도 함께 제출합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">보정명령을 받았는데 응하지 않으면 어떻게 되나요?</div>
  <div class="qna-a">보정명령에는 기간이 정해집니다. 그 기간 내에 보정하면 처음 낸 때로 소급해 적법해지지만, 인지·송달료 보정명령에 응하지 않으면 소장이 각하될 수 있습니다. 보정명령 자체는 독립하여 항고할 수 없고, 소장각하명령과 함께 다투게 됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">전자소송으로도 제출할 수 있나요?</div>
  <div class="qna-a">네. 전자소송시스템(ecfs.scourt.go.kr)으로 소장을 전자문서로 제출할 수 있고, 시스템에 기록된 때 접수된 것으로 봅니다. 법무사가 당사자를 대신해 제출하는 것도 가능합니다. 국가·지방자치단체 등은 원칙적으로 전자소송으로 내야 합니다.</div>
</div>` },

      /* 5 */
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">기간을 정하지 않은 보정명령은 적법하지 않다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=80마160" target="_blank" class="tag-case">⚖️ 대법원 80마160</a></div>
  <div class="r-body">보정명령을 할 때에는 상당한 기간을 구체적으로 정해야 하며, 보정기간을 지정하지 않은 보정명령은 적법한 명령이라고 할 수 없다고 보았습니다. 보정명령을 받으면 기간이 명시되어 있는지 반드시 확인하세요.</div>
</div>
<div class="ruling-card">
  <div class="r-label">인지 흠을 상급심에서도 보정할 수 있다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2002다48719" target="_blank" class="tag-case">⚖️ 대법원 2002다48719</a></div>
  <div class="r-body">원심이 놓친 인지의 미첩부 또는 부족을 상급심에서 발견한 때에는 상급심이 보정을 명할 수 있다고 보았습니다. 다만 인지 흠을 간과하고 한 재판이라도 그 효력 자체가 무효가 되는 것은 아닙니다.</div>
</div>` },

      /* 6 */
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 인지·송달료 보정명령을 놓치면 소장이 각하됩니다</span>
  <p>인지가 부족하거나 송달료가 예납되지 않으면 보정명령이 내려지고, 정해진 기간 내에 보정하지 않으면 소장이 각하될 수 있습니다. 보정명령서를 받으면 기간을 즉시 확인하세요.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 영수필확인서와 부본을 빠뜨리지 마세요</span>
  <p>인지를 현금·카드로 납부했다면 영수필확인서를 반드시 첨부해야 하고, 상대방에게 보낼 소장 부본도 필요한 수만큼 함께 내야 접수·송달이 지연되지 않습니다.</p>
</div>` },

      /* 7 */
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-03"><span class="arrow">›</span> 관할 — 어느 법원에 내야 하나요?</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-04"><span class="arrow">›</span> 소가 산정 방법</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-06"><span class="arrow">›</span> 송달지연 대응</a>
</div>
<div class="cta-box">
  <h3>소장, 빠진 것 없이 제대로 내고 싶으신가요?</h3>
  <p>소장 작성, 인지·송달료 계산, 첨부서류 준비, 전자소송 제출까지<br>직접 처리하기 어려운 부분을 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section">
  <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p>
</div>` }
    ]
  },

  /* ──────────────────────────────────────────────
     ms-03  관할 — 어느 법원에 내야 하나요?
  ────────────────────────────────────────────── */
  {
    id: 'ms-03',
    title: '소송, 어느 법원에 내야 하나요? — 관할',
    meta: '같은 사건이라도 어느 법원에 내느냐에 따라 절차의 빠르기와 부담이 달라집니다. 사물관할(단독·합의부)과 토지관할(지역)을 함께 설명합니다.',
    sections: [

      /* 1 */
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>소송을 준비 중인데 어느 법원에 소장을 내야 할지 모르겠습니다.</li>
  <li>상대방(피고)이 멀리 살고 있어, 꼭 그 동네 법원까지 가야 하는지 궁금합니다.</li>
  <li>부동산 분쟁이라 어느 지역 법원이 맞는지 확인하고 싶습니다.</li>
  <li>계약서에 "○○지방법원을 관할로 한다"는 조항이 있는데 효력이 궁금합니다.</li>
  <li>단독판사 사건과 합의부 사건의 차이, 시·군법원과 지방법원의 차이가 헷갈립니다.</li>
</ul>` },

      /* 2 */
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">관할이란</p>
  <p><strong>관할</strong>이란 "어느 법원이 이 사건을 재판할 권한을 갖는가"를 정해 놓은 규칙입니다.
     소송은 <strong>① 어떤 종류의 법원(단독·합의부, 사물관할)</strong>에,
     <strong>② 어느 지역의 법원(토지관할)</strong>에 낼지를 함께 따져야 합니다.
     잘못 내면 각하되지 않고 이송되지만, 그만큼 시간이 더 걸립니다.</p>
</div>` },

      /* 3 */
      { heading: '관할의 종류', content: `
<div class="section-title"><span class="num">SECTION 02</span> 관할의 종류</div>

<h3>① 사물관할 — 단독판사인가, 합의부인가</h3>
<div class="summary-box">
  <p class="label">소가 기준</p>
  <p>소가(소송목적의 값)가 <strong>5억 원 초과</strong> → 합의부(판사 3명) /
     <strong>5억 원 이하</strong> → 단독판사 /
     <strong>3,000만 원 이하 금전</strong> → 시·군법원(소액사건)</p>
</div>
<p>소가 2억 원 초과 단독사건은 부장판사가 맡으며, 항소심은 고등법원이 담당합니다.
수표금·약속어음금 청구, 금융기관의 대여금·구상금 청구 등은 소가가 5억 원을 넘어도 합의부 대상에서 제외됩니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=002600" target="_blank" class="tag-law">📋 민사소송법 제26조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=002700" target="_blank" class="tag-law">📋 민사소송법 제27조</a>
</div>

<h3>② 토지관할 — 어느 지역 법원인가</h3>
<p>원칙은 <strong>피고의 주소지(보통재판적)</strong>를 관할하는 법원입니다.
사람의 보통재판적은 주소에 따라 정하고, 주소가 없거나 알 수 없으면 거소, 마지막 주소 순으로 정합니다.
법인·단체는 주된 사무소·영업소가 있는 곳이 기준입니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=000200" target="_blank" class="tag-law">📋 민사소송법 제2조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=000300" target="_blank" class="tag-law">📋 민사소송법 제3조</a>
</div>

<h3>특별재판적 — 원고가 선택할 수 있는 추가 법원</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:38%">사건 유형</th><th>낼 수 있는 법원</th></tr></thead>
<tbody>
<tr><td>재산권에 관한 소(돈 받을 소송)</td><td>거소지 또는 <strong>의무이행지</strong>(통상 채권자 주소지)</td></tr>
<tr><td>어음·수표에 관한 소</td><td>그 지급지의 법원</td></tr>
<tr><td>사무소·영업소 업무 관련 소</td><td>사무소·영업소 소재지의 법원</td></tr>
<tr><td>불법행위에 관한 소</td><td>행위지(사고가 난 곳)의 법원</td></tr>
<tr><td>부동산에 관한 소</td><td>부동산 소재지의 법원</td></tr>
<tr><td>상속에 관한 소</td><td>상속개시 당시 피상속인의 보통재판적 소재지</td></tr>
</tbody>
</table></div>
<div class="info-box">
  <p>💡 <strong>돈 받을 소송은 원고 주소지 법원에서도 가능합니다.</strong><br>
  금전채무는 채권자(원고) 주소지에서 갚는 '지참채무'가 원칙(민법 제467조)이므로,
  원고 주소지 법원을 의무이행지로 보아 그곳에 제소할 수 있습니다.
  피고가 멀리 살더라도 반드시 그 동네까지 가야 하는 것은 아닙니다.</p>
</div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=000800" target="_blank" class="tag-law">📋 민사소송법 제8조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=001200" target="_blank" class="tag-law">📋 민사소송법 제12조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=001800" target="_blank" class="tag-law">📋 민사소송법 제18조</a>
</div>

<h3>③ 합의관할 — 계약서의 관할 조항</h3>
<p>당사자는 서면 합의로 제1심 관할법원을 정할 수 있습니다. 합의관할에는
특정 법원에만 관할을 인정하는 <strong>전속적 합의</strong>와 법정관할 외에 다른 법원을 더하는 <strong>부가적 합의</strong>가 있습니다.
법이 정한 전속관할 사건(재심의 소, 독촉절차, 강제집행사건 등)에는 합의관할이 적용되지 않습니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=002900" target="_blank" class="tag-law">📋 민사소송법 제29조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=003100" target="_blank" class="tag-law">📋 민사소송법 제31조</a>
</div>

<h3>④ 변론관할 — 다투지 않으면 생기는 관할</h3>
<p>관할이 없는 법원에 소가 제기되어도, 피고가 관할위반을 항변하지 않고 본안에 변론하면
그 법원이 관할권을 갖게 됩니다. <strong>피고가 관할을 다투려면 본안에 대해 변론하기 전에 관할위반 항변을 해야 합니다.</strong></p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=003000" target="_blank" class="tag-law">📋 민사소송법 제30조</a>
</div>

<h3>⑤ 잘못 낸 경우 — 이송</h3>
<p>관할이 없는 법원에 소를 내도 곧바로 각하되지 않고, 법원이 관할법원으로 <strong>이송</strong>합니다.
이송이 확정되면 소송은 처음부터 이송받은 법원에 계속된 것으로 보므로 시효중단 효력은 유지됩니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=003400" target="_blank" class="tag-law">📋 민사소송법 제34조</a>
</div>` },

      /* 4 */
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">피고가 지방에 사는데, 꼭 그 지역 법원까지 가야 하나요?</div>
  <div class="qna-a">반드시 그렇지는 않습니다. 돈을 받는 재산권 소송은 의무이행지(통상 채권자=원고의 주소지) 법원에도 낼 수 있어, 원고가 자신의 거주지 법원을 선택하는 경우가 많습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">계약서에 "○○지방법원을 관할로 한다"고 적혀 있으면 그대로 따라야 하나요?</div>
  <div class="qna-a">원칙적으로 유효합니다. 다만 전속적 합의인지 부가적 합의인지에 따라 다른 법원을 선택할 여지가 달라지고, 법이 정한 전속관할 사건이라면 합의 자체가 적용되지 않습니다. 약관에 포함된 관할 조항은 무효가 되는 경우도 있으므로 문구를 함께 검토하는 것이 안전합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">관할을 잘못 알고 다른 법원에 내면 소송이 무효가 되나요?</div>
  <div class="qna-a">무효가 되거나 각하되는 것이 아니라, 법원이 관할법원으로 사건을 이송합니다. 이송이 확정되면 처음부터 그 법원에 낸 것으로 봅니다. 다만 절차가 그만큼 늦어지므로 처음부터 맞는 법원에 내는 것이 유리합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">단독판사 사건과 합의부 사건은 무엇이 다른가요?</div>
  <div class="qna-a">판사 1명이 맡는지(단독), 3명이 맡는지(합의부)의 차이입니다. 소가 5억 원 초과면 합의부, 이하면 단독이 원칙입니다. 어느 쪽인지에 따라 항소심 법원도 달라지므로 처음부터 정확히 가늠해야 합니다.</div>
</div>` },

      /* 5 */
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">의무이행지 — 채권 추심을 실제 담당하는 영업소</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2021마6868" target="_blank" class="tag-case">⚖️ 대법원 2021마6868</a></div>
  <div class="r-body">영업에 관한 채무 이행을 구하는 소는, 제소 당시 그 채권의 추심 관련 업무를 실제로 담당하는 채권자의 영업소 소재지 법원에도 낼 수 있다고 보았습니다. 의무이행지가 반드시 본점에 한정되지 않는다는 취지입니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">관할을 만들 목적의 청구 병합은 신의칙 위반</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2011마62" target="_blank" class="tag-case">⚖️ 대법원 2011마62</a></div>
  <div class="r-body">오로지 관할만 발생시킬 목적으로 본래 제소할 의사가 없는 청구를 병합한 것이 명백한 경우에는, 관할선택권의 남용으로서 신의칙에 위배되어 허용되지 않는다고 보았습니다.</div>
</div>` },

      /* 6 */
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 관할위반 항변은 본안 변론 전에</span>
  <p>피고가 관할을 다투려면 본안에 대한 변론·진술을 하기 전에 관할위반을 주장해야 합니다. 이를 놓치고 본안에 변론하면 변론관할이 생겨 이후에는 관할을 다투기 어렵습니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 소가·소송 종류를 잘못 보면 법원 자체가 달라집니다</span>
  <p>소가가 5억 원을 넘는지(단독·합의부), 3,000만 원 이하인지(시·군법원 소액사건)에 따라 맡는 법원이 달라집니다. 처음부터 정확히 산정하세요.</p>
</div>` },

      /* 7 */
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-04"><span class="arrow">›</span> 소가 산정 방법</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-02"><span class="arrow">›</span> 소장 작성과 접수</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-10"><span class="arrow">›</span> 지급명령(독촉절차)</a>
</div>
<div class="cta-box">
  <h3>내 사건의 관할, 헷갈리시나요?</h3>
  <p>소가 산정, 특별재판적 선택, 전속관할 여부 등 직접 판단하기 어려운 부분을 법무사가 함께 정리해 드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section">
  <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p>
</div>` }
    ]
  },

  /* ──────────────────────────────────────────────
     ms-04  소가(소송목적의 값) 산정
  ────────────────────────────────────────────── */
  {
    id: 'ms-04',
    title: '소가(소송목적의 값)는 어떻게 정하나요?',
    meta: '소가는 인지액(수수료)과 단독·합의부 관할을 동시에 결정하는 기준입니다. 소의 종류마다 계산법이 다르고, 여러 청구가 있으면 합산·흡수·불산입 원칙이 적용됩니다.',
    sections: [

      /* 1 */
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>소송을 준비 중인데 인지대를 정하는 소가를 어떻게 계산하는지 모르겠습니다.</li>
  <li>한 소장에 여러 청구를 넣을 때 금액을 더하는지, 큰 것 하나만 보는지 궁금합니다.</li>
  <li>부동산 인도·등기말소 소송의 소가가 시가 전부인지, 일부인지 헷갈립니다.</li>
  <li>이자·지연손해금도 소가에 포함되는지 확인하고 싶습니다.</li>
  <li>금액을 매기기 어려운 사건(신분·단체 관계 등)은 어떻게 되는지 알고 싶습니다.</li>
</ul>` },

      /* 2 */
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">소가란</p>
  <p><strong>소가(소송목적의 값)</strong>란, 원고가 전부 승소했을 때 직접 받게 될 경제적 이익을 객관적으로 평가해 금액으로 정한 것입니다.
     이 값으로 ① 인지액(수수료)과 ② 사물관할(단독·합의부)이 함께 정해집니다.
     소를 제기한 때를 기준으로 정하며, 이후 사정 변동은 영향이 없습니다.</p>
</div>` },

      /* 3 */
      { heading: '여러 청구가 있을 때 — 합산·흡수·불산입', content: `
<div class="section-title"><span class="num">SECTION 02</span> 복수 청구의 소가 계산</div>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:16%">원칙</th><th style="width:42%">내용</th><th>예시</th></tr></thead>
<tbody>
<tr><td class="td-key highlight">합산</td><td>이익이 서로 별개이면 모두 더한다</td><td>대여금 청구 + 부당이득반환 청구(별개 채권)</td></tr>
<tr><td class="td-key highlight">흡수</td><td>이익이 같거나 겹치면 가장 큰 청구 하나로</td><td>선택적·예비적 병합, 연대채무자 여럿을 함께 상대, 같은 부동산의 이전등기+근저당 말소 병합</td></tr>
<tr><td class="td-key highlight">불산입</td><td>딸린 청구(부대청구)는 넣지 않는다</td><td>원금에 딸린 이자·지연손해금·위약금·비용</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=002700" target="_blank" class="tag-law">📋 민사소송법 제27조</a>
</div>

<h3>소의 종류별 소가 기준</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:56%">소의 종류</th><th>소가</th></tr></thead>
<tbody>
<tr><td>금전지급 청구</td><td class="highlight">청구금액</td></tr>
<tr><td>확인의 소</td><td class="highlight">권리의 가액</td></tr>
<tr><td>물건 인도·방해예방 — 소유권에 기한 경우</td><td class="highlight">목적물 가액의 <strong>1/2</strong></td></tr>
<tr><td>물건 인도 — 점유권에 기한 경우</td><td class="highlight">목적물 가액의 <strong>1/3</strong></td></tr>
<tr><td>물건 인도 — 소유권 이전 계약에 기한 경우</td><td class="highlight">목적물 가액 전부</td></tr>
<tr><td>공유물분할 청구</td><td class="highlight">목적물 가액 × 원고 지분 × 1/3</td></tr>
<tr><td>소유권이전등기 청구</td><td class="highlight">목적물 가액</td></tr>
<tr><td>등기원인 무효·취소에 기한 말소등기 청구</td><td class="highlight">목적물 가액의 <strong>1/2</strong></td></tr>
<tr><td>계약 해지·해제에 기한 말소등기 청구</td><td class="highlight">목적물 가액</td></tr>
<tr><td>가액 산출 불가 재산권 소송·비재산권 소송</td><td class="highlight">5,000만 원 (회사·단체·특허 등은 1억 원)</td></tr>
</tbody>
</table></div>
<p style="font-size:13px;color:#777;">※ 민사소송 등 인지규칙 제12·13조 기준.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=002600" target="_blank" class="tag-law">📋 민사소송법 제26조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=003300" target="_blank" class="tag-law">📋 민사소송법 제33조</a>
</div>` },

      /* 4 */
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">이자나 지연손해금도 소가에 포함되나요?</div>
  <div class="qna-a">원금 청구에 딸린 이자·지연손해금은 부대청구로 보아 소가에 넣지 않습니다. 다만 이자·지연손해금만 따로 독립해 청구하는 경우에는 그 청구금액 자체가 소가가 됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">건물을 비워달라(인도)는 소송의 소가는 건물 시가 전부인가요?</div>
  <div class="qna-a">아닙니다. 소유권에 기한 물건 인도 청구는 목적물 가액의 1/2이 소가입니다. 반면 소유권 이전을 목적으로 하는 계약(매매 등)에 기한 청구는 목적물 가액 전부가 소가가 됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">같은 부동산에 대해 이전등기 + 근저당 말소를 함께 청구하면 소가는 어떻게 되나요?</div>
  <div class="qna-a">두 청구의 경제적 이익이 중복되므로 흡수되어 가장 큰 청구 하나의 값이 소가가 됩니다. 즉 이전등기와 근저당 말소를 합산하지 않습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">소가 계산이 틀리면 어떻게 되나요?</div>
  <div class="qna-a">소가를 잘못 산정해 인지가 부족하면 보정명령이 내려지고, 정해진 기간 내에 보정하지 않으면 소장이 각하될 수 있습니다. 소장에 소가 산정 자료를 빠짐없이 첨부하는 것이 중요합니다.</div>
</div>` },

      /* 5 */
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">여러 등기 말소를 함께 구하면 흡수된다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=98마938" target="_blank" class="tag-case">⚖️ 대법원 98마938</a></div>
  <div class="r-body">소유권보존등기, 근저당권설정등기, 소유권이전등기의 각 말소를 한 소로 구하는 경우, 여러 청구의 경제적 이익이 동일·중복되므로 흡수되어 가장 큰 청구 하나의 가액이 소가가 된다고 보았습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">해고무효확인 + 임금지급을 함께 구하면 다액 기준</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=94마1390" target="_blank" class="tag-case">⚖️ 대법원 94마1390</a></div>
  <div class="r-body">비재산권 소송(해고무효확인)과 그 원인된 사실에서 생기는 재산권 소송(임금지급)을 한 소로 병합한 경우에는 둘 중 다액인 소송목적의 값을 기준으로 인지를 붙인다고 보았습니다.</div>
</div>` },

      /* 6 */
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 소가는 관할까지 좌우합니다</span>
  <p>소가가 5억 원을 넘으면 합의부, 3,000만 원 이하 금전청구면 소액사건입니다. 잘못 산정하면 엉뚱한 법원에 내어 이송으로 시간을 허비하게 됩니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ '계산이 어렵다'고 무조건 5,000만 원은 아닙니다</span>
  <p>가액 산출이 곤란해 보여도 법원은 자료를 조사해 실제 가액을 인정할 수 있습니다. 간주 규정(5,000만·1억 원)은 제한적으로 적용되므로, 처음부터 근거 자료로 정확히 산정하는 것이 안전합니다.</p>
</div>` },

      /* 7 */
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-03"><span class="arrow">›</span> 관할 — 어느 법원에 내야 하나요?</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-02"><span class="arrow">›</span> 소장 작성과 접수</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-09"><span class="arrow">›</span> 소송비용 — 누가 부담하나요?</a>
</div>
<div class="cta-box">
  <h3>소가 계산, 직접 하기 막막하신가요?</h3>
  <p>사건별 소가 산정, 인지액 계산, 부동산 가액 자료 준비까지<br>직접 처리하기 어려운 부분을 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section">
  <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p>
</div>` }
    ]
  },

  /* ──────────────────────────────────────────────
     ms-05  답변서 — 소장을 받았습니다
  ────────────────────────────────────────────── */
  {
    id: 'ms-05',
    title: '소장을 받았습니다 — 답변서 어떻게 써서 내나요?',
    meta: '법원에서 소장 부본이 왔다면 가만히 있으면 안 됩니다. 30일 이내에 답변서를 내지 않으면 변론 한 번 없이 원고 승소 판결이 날 수 있습니다.',
    sections: [

      /* 1 */
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>법원에서 소장 부본과 소송절차 안내서를 받았습니다.</li>
  <li>원고의 주장이 사실과 달라 반박하고 싶습니다.</li>
  <li>돈을 갚았거나 시효가 지났거나 상계할 채권이 있는 등 따질 사정이 있습니다.</li>
  <li>답변서를 언제까지, 어떤 내용으로 내야 하는지 모르겠습니다.</li>
  <li>"무변론판결"이라는 말을 들었는데 무슨 뜻인지 궁금합니다.</li>
</ul>` },

      /* 2 */
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">답변서란</p>
  <p><strong>답변서</strong>란 원고의 소장에 대해 피고가 처음으로 내는 공식 반박 서면입니다.
     소장 부본을 받은 날부터 <strong>30일 이내</strong>에 제출해야 하며,
     내지 않으면 법원은 <strong>변론 없이 원고 승소 판결(무변론판결)</strong>을 선고할 수 있습니다.</p>
</div>
<div class="deadline-banner">
  <div class="dl-icon">⚡</div>
  <div class="dl-text">
    <strong>소장 부본 수령일부터 30일 이내</strong>
    <p>이 기한을 넘기면 원고의 주장을 모두 인정한 것으로 보아(자백간주),
       변론 없이 원고 승소 판결이 날 수 있습니다.</p>
  </div>
</div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=025600" target="_blank" class="tag-law">📋 민사소송법 제256조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=025700" target="_blank" class="tag-law">📋 민사소송법 제257조</a>
</div>` },

      /* 3 */
      { heading: '답변서에 무엇을 적나', content: `
<div class="section-title"><span class="num">SECTION 02</span> 답변서에 적어야 할 내용</div>

<h3>① 청구취지에 대한 답변</h3>
<p>원고가 구하는 결론에 대한 피고의 결론입니다.
보통 <strong>"원고의 청구를 기각한다", "소송비용은 원고가 부담한다"</strong>는 형식으로 적습니다.</p>

<h3>② 청구원인에 대한 답변 (인부)</h3>
<p>원고가 주장하는 사실을 하나하나 짚어 인정하는지(인정), 사실이 아닌지(부인), 모르는지(부지)를 밝힙니다.
인정하지 않는 부분은 <strong>그 사유를 구체적으로 적고 뒷받침 자료를 첨부</strong>해야 합니다.
다투지 않은 사실은 자백한 것으로 간주될 수 있으므로, 사실과 다른 부분은 반드시 "부인"하고 이유를 적어야 합니다.</p>

<h3>③ 항변</h3>
<p>원고 주장이 사실이라 하더라도 피고에게 유리한 별도의 사정을 주장하는 것입니다.</p>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:28%">항변 종류</th><th>내용</th></tr></thead>
<tbody>
<tr><td class="td-key">변제 항변</td><td>이미 갚았다는 주장 — 영수증·계좌이체 내역 등 증거 첨부</td></tr>
<tr><td class="td-key">소멸시효 항변</td><td>채권의 소멸시효 기간이 지났다는 주장</td></tr>
<tr><td class="td-key">상계 항변</td><td>피고도 원고에게 채권이 있어 서로 맞대 소멸시키겠다는 주장</td></tr>
<tr><td class="td-key">동시이행 항변</td><td>원고도 의무를 이행해야 피고가 이행하겠다는 주장</td></tr>
</tbody>
</table></div>

<h3>④ 입증방법과 부본</h3>
<p>주장을 뒷받침하는 증거(계약서·영수증·문자 등)를 함께 냅니다.
답변서·준비서면은 <strong>상대방 수 + 1통</strong>의 부본을 함께 제출해야 합니다.</p>

<h3>무변론판결이 되지 않는 경우</h3>
<p>답변서를 내지 않아도 다음과 같은 경우에는 무변론판결 대신 변론기일이 열립니다.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>예외 사유</th><th>이유</th></tr></thead>
<tbody>
<tr><td>직권조사사항이 있는 사건</td><td>법원이 직권으로 살펴야 할 사항이 있으면 그대로 판결 불가</td></tr>
<tr><td>공시송달로 소장이 송달된 사건</td><td>피고가 실제로 알았다고 보기 어려워 자백간주 불성립</td></tr>
<tr><td>소액사건</td><td>무변론판결 규정이 실무상 배제</td></tr>
<tr><td>지급명령 이의로 소송이 된 사건</td><td>이의로써 이미 다툰 것으로 보아 변론기일 지정</td></tr>
</tbody>
</table></div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 위 예외에 해당해도 반드시 답변서를 내세요</span>
  <p>그것은 피고가 기대할 일이 아니라 법원이 판단할 사정입니다. 기한 내에 다툰다는 취지의 답변서를 내는 것이 가장 확실한 방어입니다.</p>
</div>` },

      /* 4 */
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">답변서를 안 내면 정말 그냥 지나요?</div>
  <div class="qna-a">기한 안에 답변서를 내지 않으면 원고 주장을 모두 인정한 것으로 보아, 법원이 변론 없이 원고 승소 판결을 선고할 수 있습니다. 이를 무변론판결이라고 합니다. 다툴 생각이 있다면 반드시 기한 안에 답변서를 내야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">아직 증거가 다 없는데 일단 무엇이라도 내야 하나요?</div>
  <div class="qna-a">네. 모든 증거가 준비되지 않았더라도 우선 원고 청구를 다툰다는 취지의 답변서를 기한 안에 제출하세요. 구체적인 주장과 증거는 이후 준비서면으로 보완할 수 있습니다. 기한을 지켜 무변론판결을 막는 것이 핵심입니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">"인정한다·부인한다·모른다"는 왜 구분해서 적나요?</div>
  <div class="qna-a">원고가 주장한 사실 중 다투지 않는 부분은 증거 없이 인정될 수 있기 때문입니다. 사실과 다른 부분은 분명히 "부인"하고 그 이유를 적어야 원고가 그 사실을 증명할 책임을 지게 됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">답변서는 어떻게 제출하나요?</div>
  <div class="qna-a">법원 민원실 방문, 우편, 전자소송 중 선택할 수 있고, 제출대행 권한이 있는 법무사가 대신 제출할 수도 있습니다. 상대방 수 + 1통의 부본을 함께 내야 하며, 전자소송이라면 시스템으로 제출합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">항변할 사정(변제, 시효, 상계 등)이 있으면 반드시 적어야 하나요?</div>
  <div class="qna-a">네. 이런 항변은 피고에게 유리한 강력한 방어입니다. 제때 주장하지 않으면 나중에 인정받기 어려울 수 있으므로, 답변서 단계부터 빠짐없이 적어야 합니다.</div>
</div>` },

      /* 5 */
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 04</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 30일 기한을 절대 넘기지 마세요</span>
  <p>소장 부본을 받은 즉시 날짜를 계산해 두고, 늦어도 그 안에 다툰다는 취지라도 제출하세요. 기한을 놓치면 자백간주로 무변론판결이 선고될 수 있습니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 다투지 않은 사실은 인정된 것으로 처리됩니다</span>
  <p>원고 주장 가운데 답변서에서 명확히 다투지 않은 사실은 자백한 것으로 보아 증거 없이 인정될 수 있습니다. 사실과 다른 부분은 반드시 항목별로 "부인"하고 이유를 적어야 합니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 송달장소가 바뀌면 법원에 신고하세요</span>
  <p>이사 등으로 주소가 바뀌었는데 신고하지 않으면 종전 주소로 발송되어 받은 것으로 처리될 수 있습니다. 답변 기회를 놓치지 않으려면 즉시 신고해야 합니다.</p>
</div>` },

      /* 6 */
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-06"><span class="arrow">›</span> 송달 — 서류가 전달되는 과정</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-07"><span class="arrow">›</span> 변론과 준비서면</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-08"><span class="arrow">›</span> 증거 — 입증과 서증</a>
</div>
<div class="cta-box">
  <h3>소장을 받고 어떻게 답해야 할지 막막하신가요?</h3>
  <p>청구원인 인부, 항변 구성, 증거 정리부터 기한 내 제출까지<br>답변서 작성을 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section">
  <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p>
</div>` }
    ]
  }


  /* ──────────────────────────────────────────────
     ms-06  송달지연 대응
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-06',
    title: '송달이 안 됩니다 — 송달지연 대응',
    meta: '소장을 내도 상대방에게 서류가 전달(송달)되어야 재판이 진행됩니다. 송달이 막히면 절차 전체가 멈춥니다. 지연 사유별 대응법과 효력 발생 시기를 정리했습니다.',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>소장을 낸 지 한참인데 송달이 안 되어 재판이 진행되지 않습니다.</li>
  <li>"주소보정명령"을 받았는데 무엇을, 언제까지 해야 하는지 모르겠습니다.</li>
  <li>상대방이 일부러 우편을 받지 않는 것 같아 답답합니다.</li>
  <li>피고의 주소를 알 수 없는데도 소송을 진행할 수 있는지 궁금합니다.</li>
  <li>전자소송에서 송달이 "언제" 된 것으로 보는지 알고 싶습니다.</li>
</ul>` },
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">송달이란</p>
  <p><strong>송달</strong>이란 법원이 소송서류를 정해진 방식으로 당사자에게 전달하는 절차입니다.
  소장 부본이 피고에게 송달되어야 답변·변론이 시작되므로, <strong>송달이 막히면 절차 전체가 멈춥니다.</strong>
  대부분의 지연은 피고 이사·부재·주소불명에서 비롯되며, 주소보정 → 재송달 → 발송송달 → 공시송달 순으로 단계를 밟습니다.</p>
</div>` },
      { heading: '송달 방법과 불능 시 처리', content: `
<div class="section-title"><span class="num">SECTION 02</span> 송달 방법과 불능 시 처리</div>

<h3>송달의 원칙과 변형</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:22%">방법</th><th>내용</th></tr></thead>
<tbody>
<tr><td class="td-key">교부송달 (원칙)</td><td>송달장소에서 받을 사람 본인에게 직접 교부</td></tr>
<tr><td class="td-key">보충송달</td><td>본인 부재 시 동거인·사무원·피용자(사리 분별 가능자)에게 교부</td></tr>
<tr><td class="td-key">유치송달</td><td>정당한 이유 없이 수령 거부 시 그 자리에 두는 방법</td></tr>
<tr><td class="td-key">발송송달</td><td>보충·유치송달도 안 될 때 등기우편으로 발송 — <strong>발송한 때</strong> 효력 발생</td></tr>
<tr><td class="td-key">공시송달</td><td>주소를 전혀 알 수 없을 때 법원 게시 — 게시 후 <strong>2주</strong> 경과 시 효력</td></tr>
<tr><td class="td-key">전자송달</td><td>전자소송 등재 후 통지 — 확인 시 또는 통지일부터 <strong>1주</strong> 경과 시 효력</td></tr>
</tbody>
</table></div>

<h3>불능 사유별 처리 단계</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:28%">불능 사유</th><th style="width:28%">처리</th><th>실무 대응</th></tr></thead>
<tbody>
<tr><td>이사·주소변경</td><td class="highlight">주소보정명령 → 재송달</td><td>최근 주민등록초본 발급 후 새 주소 제출</td></tr>
<tr><td>수취인 부재·폐문부재</td><td class="highlight">재송달</td><td>야간·휴일 특별송달 신청으로 시간 바꿔 재시도</td></tr>
<tr><td>보충·유치송달 불가</td><td class="highlight">발송송달</td><td>종전 주소로 등기우편 발송 — 보낸 때 효력 발생</td></tr>
<tr><td>주소 전혀 불명</td><td class="highlight">공시송달</td><td>주민등록초본·불거주확인서·경찰 소재수사 결과 소명</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=018600" target="_blank" class="tag-law">📋 민사소송법 제186조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=018700" target="_blank" class="tag-law">📋 민사소송법 제187조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=019400" target="_blank" class="tag-law">📋 민사소송법 제194조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=019600" target="_blank" class="tag-law">📋 민사소송법 제196조</a>
</div>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">주소보정명령을 받았어요. 무엇을 해야 하나요?</div>
  <div class="qna-a">피고의 최근 주민등록초본을 발급받아 새 주소를 법원에 제출합니다. 전입신고가 안 되어 있으면 가족관계증명서, 근친자의 불거주확인서, 경찰서 소재수사 촉탁 등으로 보완합니다. 제출이 빠를수록 재송달이 앞당겨집니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">상대방이 일부러 우편을 안 받으면 어떻게 되나요?</div>
  <div class="qna-a">수취인 부재·폐문부재로 불능되면 야간·휴일 특별송달로 재시도합니다. 그래도 안 되면 종전 주소로 등기우편 발송(발송송달)을 할 수 있습니다. 발송송달은 보낸 때에 송달된 것으로 보므로 상대방이 실제로 받지 않아도 절차가 진행됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">피고 주소를 전혀 모르면 소송을 못 하나요?</div>
  <div class="qna-a">할 수 있습니다. 주소·거소·근무장소 어느 것도 알 수 없으면 공시송달로 진행합니다. 다만 "찾으려고 상당히 노력했으나 알 수 없었다"는 점을 주민등록초본·불거주확인서 등으로 소명해야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">전자소송에서는 송달이 언제 된 건가요?</div>
  <div class="qna-a">전자문서가 시스템에 등재되고 그 사실이 통지되면, 받을 사람이 확인한 때 송달된 것으로 봅니다. 통지일부터 1주 안에 확인하지 않으면 1주가 지난 날에 송달된 것으로 간주됩니다. 알림(이메일·문자)을 받으면 즉시 확인하는 것이 좋습니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">보충송달은 수령대행인에게 교부한 때 효력 발생</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2018다229984" target="_blank" class="tag-case">⚖️ 대법원 2018다229984</a></div>
  <div class="r-body">적법한 보충송달은 동거인 등 수령대행인에게 교부한 때 효력이 발생하고, 본인에게 실제로 전달된 때가 아닙니다. 본인이 내용을 몰랐더라도 송달은 유효합니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">실제 거주지라면 주민등록 주소가 아니어도 유효</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2000마5732" target="_blank" class="tag-case">⚖️ 대법원 2000마5732</a></div>
  <div class="r-body">받을 사람이 동거인과 실제로 거주하는 곳에서 보충송달이 이루어졌다면, 그 장소가 주민등록상 주소가 아니더라도 부적법한 송달이 아니라고 보았습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">이해가 대립하는 양쪽을 같은 사람이 대신 받으면 무효</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2020므11658" target="_blank" class="tag-case">⚖️ 대법원 2020므11658</a></div>
  <div class="r-body">이혼하는 부부의 화해권고결정 정본을 성년 자녀가 양쪽 몫을 동시에 대신 받은 경우, 특별한 사정이 없는 한 그 보충송달은 무효라고 보았습니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 송달장소를 바꾸면 반드시 법원에 신고하세요</span>
  <p>이사 등으로 주소가 바뀌고도 신고하지 않으면, 법원은 종전 주소로 발송송달을 할 수 있고 이는 보낸 때 송달된 것으로 봅니다. 즉시 송달장소 변경신고를 해야 불이익을 피합니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 공시송달 판결은 추후보완 항소로 뒤집힐 수 있습니다</span>
  <p>주소 찾기 노력이 부실한 채 공시송달로 받은 판결은, 상대방이 책임 없이 송달을 몰랐음을 들어 추후보완 항소로 다툴 수 있습니다. 소명자료를 충분히 갖춰 신중하게 진행해야 합니다.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-05"><span class="arrow">›</span> 답변서 작성</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-07"><span class="arrow">›</span> 변론과 준비서면</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-19"><span class="arrow">›</span> 의사표시의 공시송달</a>
</div>
<div class="cta-box">
  <h3>송달이 막혀 재판이 멈춰 있나요?</h3>
  <p>주소보정 자료 준비, 특별송달·발송송달·공시송달 신청까지 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

  /* ──────────────────────────────────────────────
     ms-07  변론과 준비서면
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-07',
    title: '변론과 준비서면 — 법정에서 무엇을 하나요?',
    meta: '변론은 공개법정에서 주장과 증거를 펼치는 재판의 중심 무대입니다. "주장하고 증명하지 않으면 진다"는 변론주의와, 변론 전에 내는 준비서면 작성법을 함께 정리했습니다.',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>변론기일 통지를 받았는데 법정에서 무엇이 오가는지 막막합니다.</li>
  <li>"주장하지 않으면 진다"는 말의 의미를 정확히 알고 싶습니다.</li>
  <li>내가 다투지 않으면 상대방 주장이 그대로 인정되는지 궁금합니다.</li>
  <li>법원에서 "준비서면을 제출하라"는 안내를 받았습니다.</li>
  <li>주장과 증거를 언제까지 내야 불이익이 없는지 확인하고 싶습니다.</li>
</ul>` },
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">변론주의 — 가장 중요한 원칙</p>
  <p>민사소송에서 <strong>사실과 증거를 모으고 내는 책임은 당사자에게</strong> 있습니다.
  주장하지 않은 사실은 없는 것으로 취급되고(주장책임), 다투지 않은 사실은 그대로 인정되며(자백간주),
  증거도 당사자가 신청해야 합니다. <strong>"주장하고 증명하지 않으면 진다"</strong>가 출발점입니다.</p>
</div>
<div class="summary-box" style="margin-top:12px;">
  <p class="label">준비서면이란</p>
  <p>변론에서 진술하려는 사항을 기일 전에 미리 적어 법원에 내는 서면입니다.
  <strong>새로운 공격방어방법을 담은 준비서면은 기일 7일 전까지</strong> 상대방에게 송달될 수 있도록 제출해야 합니다.</p>
</div>` },
      { heading: '변론의 원칙과 준비서면 작성', content: `
<div class="section-title"><span class="num">SECTION 02</span> 변론 원칙과 준비서면</div>

<h3>변론을 지배하는 핵심 원칙</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:26%">원칙</th><th>뜻</th></tr></thead>
<tbody>
<tr><td class="td-key">변론주의</td><td>사실과 증거의 수집·제출 책임은 당사자에게 — 주장·증명하지 않으면 불리</td></tr>
<tr><td class="td-key">처분권주의</td><td>소송을 시작할지, 무엇을 청구할지, 끝낼지를 당사자가 정함</td></tr>
<tr><td class="td-key">구술심리주의</td><td>변론은 말로 함 — 서면에 적은 것도 기일에 진술해야 자료가 됨</td></tr>
<tr><td class="td-key">적시제출주의</td><td>공격방어방법은 소송 정도에 맞춰 적절한 시기에 — 늦으면 각하될 수 있음</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=013400" target="_blank" class="tag-law">📋 민사소송법 제134조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=014600" target="_blank" class="tag-law">📋 민사소송법 제146조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=014900" target="_blank" class="tag-law">📋 민사소송법 제149조</a>
</div>

<h3>자백과 자백간주</h3>
<p>상대방이 인정한 사실(재판상 자백)과 다투지 않아 인정된 것으로 간주되는 사실(자백간주)에 대해서는
법원이 증거로 달리 판단할 수 없습니다. 자백의 대상은 <strong>'사실'</strong>에 한하고,
법률 해석·평가에 관한 진술은 자백 대상이 아닙니다. 간접사실에 대한 자백도 법원을 구속하지 않습니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=028800" target="_blank" class="tag-law">📋 민사소송법 제288조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=015000" target="_blank" class="tag-law">📋 민사소송법 제150조</a>
</div>

<h3>준비서면 기재사항</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:28%">구분</th><th>내용</th></tr></thead>
<tbody>
<tr><td class="td-key">실질적 (필수)</td><td>공격방어방법 — 자기 주장을 이유 있게 하는 사실과 근거</td></tr>
<tr><td class="td-key">실질적 (필수)</td><td>상대방 주장에 대한 인부(인정·부지·부인) — 항목별로 명확히</td></tr>
<tr><td class="td-key">형식적 (부수)</td><td>당사자·사건 표시, 날짜, 법원 표시, 기명날인 또는 서명</td></tr>
</tbody>
</table></div>
<div class="info-box">
  <p>💡 <strong>분량·형식 기준</strong>: A4, 12pt 이상, 원칙적으로 <strong>30쪽 이내</strong>.
  새 주장을 담은 준비서면은 <strong>기일 7일 전까지</strong> 상대방에게 도달되게 제출해야 합니다.
  늦으면 적시제출주의 위반으로 그 주장이 각하될 수 있습니다.</p>
</div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=027200" target="_blank" class="tag-law">📋 민사소송법 제272조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=027300" target="_blank" class="tag-law">📋 민사소송법 제273조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=027600" target="_blank" class="tag-law">📋 민사소송법 제276조</a>
</div>

<h3>제출 여부에 따른 효과</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:30%">상황</th><th>효과</th></tr></thead>
<tbody>
<tr><td>준비서면을 미리 낸 경우</td><td>상대방이 기일에 불출석해도 그 사실을 주장할 수 있고, 상대방이 다투지 않으면 자백간주</td></tr>
<tr><td>준비서면에 적지 않은 경우</td><td>상대방 불출석 기일에는 그 사실을 변론에서 주장할 수 없음</td></tr>
</tbody>
</table></div>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">상대방 주장을 가만히 두면 어떻게 되나요?</div>
  <div class="qna-a">다투지 않은 사실은 자백 또는 자백간주로 그대로 인정되어, 법원이 증거로 달리 판단할 수 없습니다. 사실과 다른 부분은 변론(또는 답변서·준비서면)에서 분명히 "부인"하고 그 이유를 밝혀야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">기일 직전에 준비서면을 내도 되나요?</div>
  <div class="qna-a">권하지 않습니다. 새로운 주장을 담은 준비서면은 기일 7일 전까지 상대방에게 도달될 수 있도록 미리 내야 합니다. 너무 늦게 내면 소송을 지연시켰다는 이유로 비용을 물거나 그 주장이 각하될 수 있습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">증거는 법원이 알아서 찾아주나요?</div>
  <div class="qna-a">아닙니다. 다툼이 있는 사실의 증거는 당사자가 신청한 증거에서 얻는 것이 원칙입니다. 법원이 직권으로 증거를 조사하는 것은 당사자의 증거로 심증이 서지 않는 경우에 한해 보충적으로만 허용됩니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">누가 주장했든 변론에 나오면 된다 — 주장공통의 원칙</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=96다25548" target="_blank" class="tag-case">⚖️ 대법원 96다25548</a></div>
  <div class="r-body">어떤 주요사실이 변론에서 주장되었으면 충분하고, 그것을 어느 쪽 당사자가 주장했는지는 문제 되지 않습니다. 상대방이 한 진술이라도 자신에게 유리하면 그 사실을 판결 기초로 삼을 수 있습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">간접사실에 대한 자백은 법원을 구속하지 않는다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=99다35737" target="_blank" class="tag-case">⚖️ 대법원 99다35737</a></div>
  <div class="r-body">자백의 구속력은 주요사실에 한하고, 간접사실에 대한 자백은 법원이나 당사자를 구속하지 않습니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 새 주장은 기일 7일 전까지 도달되게 내세요</span>
  <p>새로운 공격방어방법을 담은 준비서면은 기일 7일 전까지 상대방에게 송달될 수 있도록 제출해야 합니다. 늦으면 그 주장이 각하되거나 지연 비용을 부담할 수 있습니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 유리한 사실도 주장·증명하지 않으면 소용없습니다</span>
  <p>아무리 진실이어도 변론에서 주장하지 않은 사실은 판결에 반영되지 않고, 증거도 스스로 내야 합니다. 핵심 사실과 증거를 빠짐없이 정리해 제출하세요.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-08"><span class="arrow">›</span> 증거 — 입증과 서증</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-09"><span class="arrow">›</span> 판결과 확정</a>
</div>
<div class="cta-box">
  <h3>변론기일을 앞두고 무엇을 준비할지 막막하신가요?</h3>
  <p>쟁점 정리, 주장 구성, 준비서면 작성, 기일 대응까지 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

  /* ──────────────────────────────────────────────
     ms-08  증거 — 입증과 서증
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-08',
    title: '증거, 어떻게 제출하나요? — 입증과 서증',
    meta: '아무리 옳은 주장이라도 증거로 뒷받침하지 못하면 인정받기 어렵습니다. 누가 증명해야 하는지, 문서·녹음·사실조회를 어떻게 쓰는지 정리했습니다.',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>내 주장을 어떤 증거로 뒷받침해야 할지 모르겠습니다.</li>
  <li>다툼이 있는 사실을 "누가" 증명해야 하는지 궁금합니다.</li>
  <li>계약서·차용증을 증거로 내려는데 상대방이 위조라고 할까 봐 걱정됩니다.</li>
  <li>도장이 찍혀 있으면 그 문서가 인정되는지, 상대방 몰래 녹음한 통화를 쓸 수 있는지 알고 싶습니다.</li>
  <li>상대방이나 기관이 가진 자료를 확보하고 싶습니다.</li>
</ul>` },
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">증명책임 — "주장하는 사람이 증명한다"</p>
  <p>자기에게 유리한 사실은 그것을 주장하는 쪽이 증명해야 합니다.
  돈을 빌려줬다는 사람은 대여 사실을, 갚았다는 사람은 변제 사실을 각자 증명해야 합니다.
  끝내 증명되지 않으면 그 증명책임을 진 쪽이 집니다.</p>
</div>` },
      { heading: '증거방법 종류와 서증의 힘', content: `
<div class="section-title"><span class="num">SECTION 02</span> 증거방법과 서증</div>

<h3>증거방법의 종류</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:24%">증거방법</th><th>설명</th></tr></thead>
<tbody>
<tr><td class="td-key">서증 (문서)</td><td>계약서·차용증·영수증·문자·카톡 출력물 — 가장 흔하고 강력한 증거</td></tr>
<tr><td class="td-key">증인</td><td>사건을 보고 들은 제3자의 증언</td></tr>
<tr><td class="td-key">당사자신문</td><td>당사자 본인에게 직접 묻고 답하게 하는 방법</td></tr>
<tr><td class="td-key">감정</td><td>전문가의 판단(필적·시가·의학 감정 등)</td></tr>
<tr><td class="td-key">사실조회</td><td>공공기관·회사·은행 등에 사실을 조회해 회신받는 방법</td></tr>
</tbody>
</table></div>

<h3>서증의 두 단계 — 진정성립 먼저</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:22%">단계</th><th>내용</th></tr></thead>
<tbody>
<tr><td class="td-key highlight">1단계: 형식적 증거력</td><td>그 문서가 작성명의인의 의사로 작성된 진짜 문서인지(진정성립) — 인정 안 되면 내용을 따질 것도 없이 증거 불가</td></tr>
<tr><td class="td-key highlight">2단계: 실질적 증거력</td><td>진정성립 인정 후, 그 내용이 다투는 사실 증명에 얼마나 유용한지 법관이 자유심증으로 판단</td></tr>
</tbody>
</table></div>

<h3>도장(인장)이 찍혀 있다면 — 2단의 추정</h3>
<p>문서에 찍힌 도장 자국이 <strong>작성명의인의 인장에 의한 것이 맞다면</strong>,
본인 의사로 날인한 것으로 사실상 추정되고, 그에 따라 <strong>문서 전체의 진정성립이 추정</strong>됩니다.
"내 도장이지만 내가 찍은 게 아니다"고 주장하는 쪽이 도용 사정을 반증해야 합니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=035800" target="_blank" class="tag-law">📋 민사소송법 제358조</a>
</div>

<h3>처분문서의 강한 힘</h3>
<p>계약서처럼 법률행위 자체가 그 문서로 이루어진 <strong>처분문서</strong>는,
진정성립이 인정되면 특별한 사정이 없는 한 그 내용대로 계약이 있었던 것으로 인정됩니다.
이를 뒤집으려면 상대방이 분명하고 수긍할 만한 반증을 들어야 할 만큼 증거력이 강합니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=035600" target="_blank" class="tag-law">📋 민사소송법 제356조</a>
</div>

<h3>녹음 증거 — 되는 것과 안 되는 것</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:44%">상황</th><th>증거능력</th></tr></thead>
<tbody>
<tr><td>내가 상대방과 나눈 대화를 상대방 몰래 녹음</td><td class="highlight">✅ 증거능력 있음 (대화 당사자의 녹음)</td></tr>
<tr><td>내가 끼지 않은 남들의 대화를 몰래 녹음·청취</td><td style="color:#c05000;font-weight:700;">❌ 불법감청 — 증거능력 없음</td></tr>
<tr><td>전화통화에서 한쪽 동의만 받고 제3자가 녹음</td><td style="color:#c05000;font-weight:700;">❌ 불법감청 — 증거능력 없음</td></tr>
</tbody>
</table></div>

<h3>상대방·기관 자료 확보 방법</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:28%">방법</th><th>언제 쓰나</th></tr></thead>
<tbody>
<tr><td class="td-key">사실조회</td><td>관공서·회사·은행 등이 보유한 사실(거래내역·재직 여부·통신내역 등) 확인</td></tr>
<tr><td class="td-key">문서송부촉탁</td><td>제출의무가 없는 특정 문서를 가진 곳에 그 문서를 보내달라고 촉탁</td></tr>
<tr><td class="td-key">문서제출명령</td><td>제출의무가 있는 문서를 상대방·제3자에게 제출을 명령</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=029400" target="_blank" class="tag-law">📋 민사소송법 제294조 (사실조회)</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=034300" target="_blank" class="tag-law">📋 민사소송법 제343조 (문서제출명령)</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=020200" target="_blank" class="tag-law">📋 민사소송법 제202조 (자유심증)</a>
</div>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">상대방이 "그 문서는 내가 쓴 게 아니다"라고 하면 어떻게 되나요?</div>
  <div class="qna-a">사문서는 상대방이 진정성립을 부인하면 제출한 쪽이 증명해야 합니다. 다만 본인·대리인의 서명이나 날인·무인이 있으면 진정성립이 추정되므로, 그때는 부인하는 쪽이 위조·도용 등을 반증해야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">문자·카톡·이메일도 증거가 되나요?</div>
  <div class="qna-a">됩니다. 문서(서증)의 일종으로 출력하거나 파일로 제출할 수 있습니다. 다만 누가 작성·발신한 것인지가 다투어지면 이를 뒷받침할 자료가 필요할 수 있습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">상대방 은행 계좌내역도 확보할 수 있나요?</div>
  <div class="qna-a">금융거래정보는 법원의 사실조회나 제출명령이라는 정해진 절차를 통해 필요한 범위에서 확보할 수 있습니다. 막연한 요청이 아니라 사건과의 관련성과 대상을 구체적으로 특정해야 채택됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">증거는 언제까지 내야 하나요?</div>
  <div class="qna-a">소장·답변서 단계부터 사본을 첨부해 이른 시기에 내는 것이 원칙입니다. 재판장이 증거신청기간을 정하면 그 기간 안에 내야 하고, 늦게 내면 받아들여지지 않을 수 있습니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">처분문서는 진정성립되면 그 법률행위가 인정된다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=96다50520" target="_blank" class="tag-case">⚖️ 대법원 96다50520</a></div>
  <div class="r-body">처분문서의 진정성립이 인정되면 특별한 사정이 없는 한 그 기재 내용이 되는 법률행위(계약 등)가 있었던 것으로 증명된 것으로 보아야 한다고 판단했습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">대화 당사자의 비밀녹음은 증거능력이 있다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=99다1789" target="_blank" class="tag-case">⚖️ 대법원 99다1789</a></div>
  <div class="r-body">어느 일방이 상대방과의 대화를 비밀리에 녹음한 녹음테이프도 증거능력이 있다고 보았습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">한쪽 동의만 받은 제3자 녹음은 증거능력 없다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2021다236999" target="_blank" class="tag-case">⚖️ 대법원 2021다236999</a></div>
  <div class="r-body">전화통화 당사자 일방의 동의만 받고 제3자가 그 통화 내용을 녹음한 것은 불법감청에 해당하여 통신비밀보호법에 따라 증거능력이 없다고 보았습니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 증거는 이른 단계에 신청·제출하세요</span>
  <p>집중심리 원칙상 증거신청에도 시기 제한이 있습니다. 뒤늦게 내면 받아들여지지 않을 수 있으니, 핵심 증거는 소장·답변서 단계부터 정리해 제출하는 것이 안전합니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 위법하게 모은 증거는 독이 될 수 있습니다</span>
  <p>내가 끼지 않은 남들의 대화를 몰래 녹음하는 등 불법으로 수집한 증거는 증거능력이 없을 뿐 아니라, 별도의 법적 책임을 질 수도 있습니다.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-09"><span class="arrow">›</span> 판결과 확정</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-07"><span class="arrow">›</span> 변론과 준비서면</a>
</div>
<div class="cta-box">
  <h3>어떤 증거를 어떻게 준비해야 할지 막막하신가요?</h3>
  <p>증명책임 판단, 증거 수집·정리, 사실조회 신청까지 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

  /* ──────────────────────────────────────────────
     ms-09  판결과 확정
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-09',
    title: '판결, 어떻게 나고 언제 확정되나요?',
    meta: '판결은 선고로 효력이 생기고, 상소기간이 지나면 확정됩니다. 각하·기각의 차이, 확정판결의 기판력·집행력, 판결경정까지 한 페이지에 정리했습니다.',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>곧 판결 선고를 앞두고 절차가 어떻게 마무리되는지 알고 싶습니다.</li>
  <li>"각하"와 "기각"이 어떻게 다른지 궁금합니다.</li>
  <li>판결이 언제 "확정"되고, 확정되면 무엇이 달라지는지 알고 싶습니다.</li>
  <li>판결문을 받았는데 언제까지 항소해야 하는지 확인하고 싶습니다.</li>
  <li>판결문에 이름이나 지번이 잘못 적혔어요. 다시 재판해야 하나요?</li>
</ul>` },
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">판결이란</p>
  <p>판결은 법원이 변론을 거쳐 사건에 종지부를 찍는 재판입니다.
  <strong>선고로 성립·효력이 생기고</strong>, 더는 상소로 다툴 수 없게 되면 <strong>확정</strong>되어
  기판력·집행력 등 강한 효력이 발생합니다.</p>
</div>
<div class="deadline-banner">
  <div class="dl-icon">⚡</div>
  <div class="dl-text">
    <strong>판결정본 수령일부터 2주 이내 항소(상고)</strong>
    <p>이 기간을 놓치면 판결이 확정되어 더 이상 다툴 수 없게 됩니다.</p>
  </div>
</div>` },
      { heading: '판결의 종류와 효력', content: `
<div class="section-title"><span class="num">SECTION 02</span> 판결의 종류와 효력</div>

<h3>각하 vs 기각 — 헷갈리기 쉬운 차이</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:20%">결과</th><th>의미</th><th>소송 재제기</th></tr></thead>
<tbody>
<tr><td class="td-key">각하</td><td>소송요건이 갖춰지지 않아 내용을 따지지 않고 문을 닫는 것 (소송판결)</td><td>흠을 보완해 다시 소를 낼 여지가 있는 경우 있음</td></tr>
<tr><td class="td-key">기각</td><td>내용을 따져 본 결과 청구에 이유가 없다고 판단 (본안판결)</td><td>기판력이 생겨 같은 사항 재소 원칙적 불가</td></tr>
<tr><td class="td-key">인용</td><td>청구에 이유가 있다고 판단 — 원고 승소 (본안판결)</td><td>—</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=020000" target="_blank" class="tag-law">📋 민사소송법 제200조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=020100" target="_blank" class="tag-law">📋 민사소송법 제201조</a>
</div>

<h3>판결의 성립과 선고</h3>
<p>변론이 끝나면 법원이 판결 내용을 정하고 판결서를 작성한 뒤 <strong>선고</strong>합니다.
선고기일은 원칙적으로 변론종결일부터 <strong>2주 이내</strong>이며, 공개법정에서 합니다.
선고 후 <strong>판결정본을 당사자에게 송달</strong>하는데, 이 송달이 상소기간 계산의 출발점입니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=020800" target="_blank" class="tag-law">📋 민사소송법 제208조</a>
</div>

<h3>확정 시기</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:40%">확정되는 때</th><th>예</th></tr></thead>
<tbody>
<tr><td>선고와 동시에</td><td>상소할 수 없는 판결(대법원 상고심 판결)</td></tr>
<tr><td>상소기간이 지나면</td><td>2주의 상소기간 내에 상소하지 않은 때</td></tr>
<tr><td>상소를 거두면</td><td>상소를 취하하거나 상소권을 포기한 때</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=049800" target="_blank" class="tag-law">📋 민사소송법 제498조</a>
</div>

<h3>확정판결의 효력</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:22%">효력</th><th>내용</th></tr></thead>
<tbody>
<tr><td class="td-key">기판력</td><td>확정판결에서 판단된 권리관계는 같은 당사자 사이에 다시 다툴 수 없음</td></tr>
<tr><td class="td-key">집행력</td><td>"피고는 원고에게 ○○원을 지급하라" 등 이행판결을 근거로 강제집행 가능</td></tr>
<tr><td class="td-key">형성력</td><td>이혼·공유물분할 같은 형성판결이 확정되면 그 내용대로 권리관계가 직접 변동</td></tr>
</tbody>
</table></div>

<h3>판결문에 오류가 있을 때 — 판결의 경정</h3>
<p>이름·지번·계산 등 <strong>분명한 오류</strong>가 있으면, 판결 내용을 실질적으로 바꾸지 않는 범위에서
법원이 결정으로 바로잡습니다(판결경정). 당사자의 잘못으로 생긴 오기(부동산 지번 오기 등)도 경정할 수 있습니다.
재판을 다시 할 필요가 없습니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=021100" target="_blank" class="tag-law">📋 민사소송법 제211조</a>
</div>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">판결이 확정되면 무엇이 달라지나요?</div>
  <div class="qna-a">더 이상 상소로 다툴 수 없게 되고, 기판력(같은 사항 재소 불가)·집행력(강제집행 가능)·형성력(법률관계 변동) 같은 효력이 생깁니다. 강제집행이나 등기·신고를 위해 판결확정증명서를 발급받을 수 있습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">승소판결로 바로 돈을 받을 수 있나요?</div>
  <div class="qna-a">이행판결이 확정되면 그 판결을 집행권원으로 삼아 상대방 재산에 강제집행(압류 등)을 할 수 있습니다. 상대방이 스스로 이행하지 않으면 별도의 강제집행 절차를 밟아야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">판결문에 이름이나 지번이 잘못 적혔어요. 다시 재판해야 하나요?</div>
  <div class="qna-a">아닙니다. 계산이나 기재의 분명한 잘못은 판결경정 신청으로 바로잡을 수 있습니다. 판결 내용을 실질적으로 바꾸는 것이 아니라 명백한 오류를 정정하는 것이어서 재판을 다시 할 필요가 없습니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">판결 확정은 정본의 적법한 송달을 전제로 한다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=97다10345" target="_blank" class="tag-case">⚖️ 대법원 97다10345</a></div>
  <div class="r-body">판결의 확정은 판결정본이 적법하게 송달되었을 것을 전제로 합니다. 송달이 부적법하면 상소기간이 진행하지 않아 확정도 미뤄질 수 있습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">당사자 잘못으로 생긴 기재 오류도 경정할 수 있다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=90그17" target="_blank" class="tag-case">⚖️ 대법원 90그17</a></div>
  <div class="r-body">법원의 과실이 아니라 당사자가 소제기 때 목적물의 지번 등을 잘못 표시해 판결에 그대로 적힌 경우에도, 판결경정으로 바로잡을 수 있다고 보았습니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 상소기간 2주를 절대 놓치지 마세요</span>
  <p>판결에 불복하려면 판결정본을 받은 날부터 2주 안에 항소(상고)해야 합니다. 이 기간이 지나면 판결이 확정되어 기판력이 생기고 더 이상 다툴 수 없습니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 승소판결만으로 끝이 아닙니다</span>
  <p>이행판결로 돈을 받으려면 상대방이 스스로 갚지 않을 경우 별도의 강제집행이 필요합니다. 판결확정증명서를 발급받아 집행 준비를 해 두세요.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-11"><span class="arrow">›</span> 항소·상고 — 판결에 불복</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-10"><span class="arrow">›</span> 소송비용 — 누가 부담하나요?</a>
</div>
<div class="cta-box">
  <h3>판결을 앞두고 있거나 판결문을 받으셨나요?</h3>
  <p>판결 내용 검토, 상소 여부 판단, 확정증명·강제집행 준비, 판결경정 신청까지 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

  /* ──────────────────────────────────────────────
     ms-10  소송비용
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-10',
    title: '소송비용 — 누가 얼마나 부담하나요?',
    meta: '원칙은 "진 쪽이 부담"이지만, 실제로 돌려받는 범위와 절차는 따로 정해져 있습니다. 변호사보수 산입 한도, 소송비용액 확정절차, 소송구조까지 정리했습니다.',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>이기면 들인 비용을 상대방에게 받을 수 있는지 궁금합니다.</li>
  <li>변호사보수도 소송비용으로 돌려받을 수 있는지 확인하고 싶습니다.</li>
  <li>판결문에 "소송비용은 피고가 부담한다"고 적혔는데 어떻게 받는지 모르겠습니다.</li>
  <li>일부만 이긴 경우 비용이 어떻게 나뉘는지 알고 싶습니다.</li>
  <li>소송비용이 부담스러워 도움받을 방법이 있는지 궁금합니다.</li>
</ul>` },
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">소송비용 부담 원칙</p>
  <p><strong>소송비용은 패소한 당사자가 부담하는 것이 원칙</strong>입니다.
  다만 실제로 돌려받는 범위는 법이 정한 한도 안에서 정해지고,
  구체적 금액은 판결 후 별도 절차(소송비용액 확정신청)로 확정합니다.</p>
</div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=009800" target="_blank" class="tag-law">📋 민사소송법 제98조</a>
</div>` },
      { heading: '소송비용 구성과 부담 절차', content: `
<div class="section-title"><span class="num">SECTION 02</span> 구성과 절차</div>

<h3>소송비용에 들어가는 것</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:26%">구분</th><th>예</th></tr></thead>
<tbody>
<tr><td class="td-key">재판비용</td><td>인지액(수수료), 송달료, 증인·감정·사실조회 등 증거조사 비용</td></tr>
<tr><td class="td-key">당사자비용</td><td>변호사보수, 서류 작성·제출 비용, 출석 비용</td></tr>
</tbody>
</table></div>

<h3>변호사보수 산입 한도</h3>
<p>실제로 지급한 변호사보수가 그대로 전액 상환되는 것은 아닙니다.
<strong>실제 지급액과 규칙상 기준액 중 적은 금액</strong>이 소송비용으로 산입되며,
소송물 가액이 커질수록 산입 비율이 낮아지는 구조입니다.
성공보수도 일정 요건에서 산입될 수 있습니다.</p>

<h3>부담 원칙 — 상황별 정리</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:36%">상황</th><th>부담</th></tr></thead>
<tbody>
<tr><td>한쪽이 완전히 진 경우</td><td>패소한 당사자가 전부 부담</td></tr>
<tr><td>일부만 이긴 경우</td><td>법원이 정한 비율로 각자 분담</td></tr>
<tr><td>화해로 끝난 경우</td><td>특별히 정하지 않으면 각자 부담</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=010100" target="_blank" class="tag-law">📋 민사소송법 제101조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=010600" target="_blank" class="tag-law">📋 민사소송법 제106조</a>
</div>

<h3>두 단계 절차</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:28%">단계</th><th>내용</th></tr></thead>
<tbody>
<tr><td class="td-key highlight">1단계 — 부담의 재판</td><td>사건을 끝내는 판결에서 "누가, 어떤 비율로" 부담할지 직권으로 정함. 판결 주문의 "소송비용은 피고가 부담한다"가 이것. <strong>구체적 금액은 이 단계에서 정하지 않음</strong></td></tr>
<tr><td class="td-key highlight">2단계 — 소송비용액 확정</td><td>판결 후 제1심 법원에 <strong>소송비용액 확정신청</strong>을 해 실제 금액을 확정. 비용 내역을 소명해야 하며, 확정결정으로 강제집행 가능</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=010400" target="_blank" class="tag-law">📋 민사소송법 제104조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=011000" target="_blank" class="tag-law">📋 민사소송법 제110조</a>
</div>

<h3>비용이 부담스러울 때 — 소송구조</h3>
<p>자금 능력이 부족한 사람은 법원에 <strong>소송구조</strong>를 신청해 인지대·송달료·변호사보수 등의 납입을
유예·면제받을 수 있습니다. 자금능력과 승소 가능성을 심사합니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=012800" target="_blank" class="tag-law">📋 민사소송법 제128조</a>
</div>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">판결문에 "소송비용은 피고가 부담한다"고만 적혔는데 금액은요?</div>
  <div class="qna-a">판결은 누가 부담할지(부담의 재판)만 정하고 구체적 금액은 정하지 않습니다. 실제 액수는 판결 후에 제1심 법원에 소송비용액 확정신청을 해서 별도로 확정받아야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">이겨도 변호사보수 전액을 돌려받지 못하나요?</div>
  <div class="qna-a">그렇습니다. 변호사보수는 산입 규칙의 한도까지만 소송비용으로 인정됩니다. 실제 지급액과 차이가 날 수 있으니 비용 회수 범위를 미리 가늠해 두는 것이 좋습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">소송비용을 감당하기 어려우면 방법이 없나요?</div>
  <div class="qna-a">소송구조를 신청할 수 있습니다. 자금능력이 부족하고 패소가 명백하지 않으면, 인지대·송달료·변호사보수 등의 납입을 유예받거나 면제받을 수 있습니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">성공보수도 산입 대상이 될 수 있다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2022마7361" target="_blank" class="tag-case">⚖️ 대법원 2022마7361</a></div>
  <div class="r-body">소송위임 보수계약에서 성공보수를 산입 규칙에 따라 산입할 보수로 한다는 취지로 약정한 경우, 그 성공보수도 소송비용에 산입할 변호사보수로 볼 수 있다고 판단했습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">변론·심문 없는 보전사건은 변호사보수 산입 불가</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2010마181" target="_blank" class="tag-case">⚖️ 대법원 2010마181</a></div>
  <div class="r-body">가압류·가처분 신청사건이 변론이나 심문 없이 진행된 경우에는 대심적 구조가 아니어서, 변호사보수를 소송비용에 산입할 수 없다고 보았습니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚠️ 금액은 "확정신청"을 해야 정해집니다</span>
  <p>판결만으로는 받을 금액이 정해지지 않습니다. 제1심 법원에 소송비용액 확정신청을 해야 구체적 액수가 확정되고 집행도 가능해집니다. 신청하지 않으면 정산이 이루어지지 않습니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 지출 내역은 증빙을 남겨두세요</span>
  <p>당사자비용과 변호사보수는 영수증 등 증빙으로 소명해야 인정됩니다. 소송 진행 중 지출한 비용의 자료를 잘 보관해 두세요.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-09"><span class="arrow">›</span> 판결과 확정</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-04"><span class="arrow">›</span> 소가 산정 방법</a>
</div>
<div class="cta-box">
  <h3>소송비용이 걱정되거나 회수하고 싶으신가요?</h3>
  <p>예상 비용 안내, 소송비용액 확정신청, 소송구조 신청까지 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

  /* ──────────────────────────────────────────────
     ms-11  항소·상고
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-11',
    title: '판결에 불복하려면 — 항소·상고·항고',
    meta: '1심에서 졌다고 끝이 아닙니다. 정해진 기간 안에 상소하면 상급법원에서 다시 판단받을 수 있습니다. 기간과 절차가 엄격하므로 판결정본을 받으면 즉시 날짜를 계산해야 합니다.',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>1심 판결 결과에 불복해 다시 다투고 싶습니다.</li>
  <li>판결문을 받았는데 언제까지 항소·상고해야 하는지 알고 싶습니다.</li>
  <li>항소와 상고, 항고가 어떻게 다른지 궁금합니다.</li>
  <li>내가 항소하면 오히려 더 불리해질 수 있는지 걱정됩니다.</li>
  <li>대법원까지 가면 사실관계를 다시 따져 주는지 알고 싶습니다.</li>
</ul>` },
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">상소란</p>
  <p>자기에게 불이익한 재판을 <strong>확정 전에</strong> 상급법원에 취소·변경해 달라고 구하는 불복신청입니다.
  우리 민사소송은 <strong>3심제</strong>로, 판결에 대한 불복은 항소(1심→2심)와 상고(2심→대법원),
  결정·명령에 대한 불복은 항고로 나뉩니다.</p>
</div>
<div class="deadline-banner">
  <div class="dl-icon">⚡</div>
  <div class="dl-text">
    <strong>판결정본 수령일부터 2주 이내 항소(상고) — 불변기간</strong>
    <p>이 기간을 놓치면 판결이 확정되어 더 이상 다툴 수 없습니다.</p>
  </div>
</div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=039600" target="_blank" class="tag-law">📋 민사소송법 제396조</a>
</div>` },
      { heading: '항소·상고·항고 상세', content: `
<div class="section-title"><span class="num">SECTION 02</span> 세 가지 상소</div>

<div class="tbl-wrap"><table>
<thead><tr><th style="width:16%">종류</th><th>대상</th><th style="width:28%">어디로</th><th>기간</th></tr></thead>
<tbody>
<tr><td class="td-key">항소</td><td>제1심 종국판결</td><td>제2심(지방법원 합의부·고등법원)</td><td>2주</td></tr>
<tr><td class="td-key">상고</td><td>제2심 판결</td><td>대법원</td><td>2주</td></tr>
<tr><td class="td-key">즉시항고</td><td>결정·명령</td><td>상급법원</td><td>1주</td></tr>
</tbody>
</table></div>

<h3>항소 절차</h3>
<p><strong>항소장은 판결을 한 제1심법원에 제출</strong>합니다(항소법원이 아닙니다).
항소장을 낸 뒤 항소기록 접수통지를 받으면, 그날부터 <strong>40일 이내에 항소이유서를 제출</strong>해야 하며,
기간 내에 내지 않으면 항소가 각하될 수 있습니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=039700" target="_blank" class="tag-law">📋 민사소송법 제397조</a>
</div>

<h3>상고 — 대법원의 법률심</h3>
<p>상고심은 사실을 다시 따지지 않는 <strong>법률심</strong>입니다.
판결에 영향을 미친 법령 위반이 있어야 하며, 상고이유서는 소송기록 접수통지 후 <strong>20일 이내</strong>에 제출해야 합니다.
그마저도 <strong>심리불속행</strong>으로 본안 심리 없이 기각되는 경우가 많아, 사실상 2심에서 분쟁이 마무리되는 구조입니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=042300" target="_blank" class="tag-law">📋 민사소송법 제423조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=042400" target="_blank" class="tag-law">📋 민사소송법 제424조</a>
</div>

<h3>불이익변경금지 — 항소하면 더 나빠지나요?</h3>
<p>원칙적으로 <strong>항소한 사람의 불복 범위를 넘어 더 불리하게 제1심판결을 바꿀 수는 없습니다</strong>(불이익변경금지).
다만 상대방도 항소하거나 <strong>부대항소</strong>를 한 경우에는 결과가 더 불리해질 수 있습니다.
부대항소는 항소기간이 지났어도 항소심 변론종결 전까지 할 수 있습니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=041500" target="_blank" class="tag-law">📋 민사소송법 제415조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=039000" target="_blank" class="tag-law">📋 민사소송법 제390조</a>
</div>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">항소장만 내면 되나요?</div>
  <div class="qna-a">아닙니다. 항소장을 낸 뒤 항소기록 접수통지를 받으면 그날부터 40일 이내에 항소이유서를 제출해야 합니다. 기간 내에 내지 않으면 항소가 각하될 수 있으니 통지서를 받으면 즉시 날짜를 계산하세요.</div>
</div>
<div class="qna-item">
  <div class="qna-q">대법원에 가면 사실관계를 다시 봐 주나요?</div>
  <div class="qna-a">상고심은 법률심이라 사실관계를 다시 심리하지 않습니다. 판결에 영향을 미친 법령 위반이 있어야 하고, 그마저도 심리불속행으로 기각되는 경우가 많습니다. 새 증거로 사실을 다투려면 2심까지 충실히 해야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">내가 항소하면 오히려 더 불리해질 수 있나요?</div>
  <div class="qna-a">원칙적으로 그렇지 않습니다. 불이익변경금지에 따라 항소한 사람의 불복 범위를 넘어 더 불리하게 바꿀 수 없습니다. 다만 상대방도 항소하거나 부대항소를 하면 결과가 나빠질 수 있으니 상대방의 대응도 함께 고려해야 합니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">불이익 여부는 판결 주문을 기준으로 본다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2020다207765" target="_blank" class="tag-case">⚖️ 대법원 2020다207765</a></div>
  <div class="r-body">항소의 이익이 있는지는 판결 주문을 표준으로 판단해야 합니다. 주문상 전부 승소한 사람은 원칙적으로 항소할 수 없습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">부대항소는 항소기간이 지나도 할 수 있다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2011다91777" target="_blank" class="tag-case">⚖️ 대법원 2011다91777</a></div>
  <div class="r-body">피항소인은 항소심 변론종결 전까지 부대항소를 할 수 있습니다. 상대방만 항소했다고 안심할 수 없는 이유입니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 항소·상고는 2주, 즉시항고는 1주</span>
  <p>판결정본을 받은 날부터 2주(항소·상고), 결정 고지부터 1주(즉시항고) 안에 해야 합니다. 모두 불변기간이라 넘기면 재판이 확정됩니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 항소이유서 40일·상고이유서 20일을 놓치지 마세요</span>
  <p>항소장·상고장을 냈더라도, 이유서를 기간 내에 내지 않으면 각하·기각됩니다. 접수통지서를 받으면 바로 날짜를 계산하세요.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-09"><span class="arrow">›</span> 판결과 확정</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-07"><span class="arrow">›</span> 변론과 준비서면</a>
</div>
<div class="cta-box">
  <h3>판결에 불복하려는데 기간이 촉박하신가요?</h3>
  <p>항소·상고 가능성 검토, 항소장·이유서 작성, 기간 관리까지 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

  /* ──────────────────────────────────────────────
     ms-12  지급명령(독촉절차)
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-12',
    title: '지급명령으로 빠르게 받아내기 — 독촉절차',
    meta: '소송 없이 인지의 1/10만으로 집행권원을 얻을 수 있는 절차입니다. 채무자가 이의하면 정식 소송으로 넘어가고 나머지 인지를 추가 납부해야 합니다.',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>빌려준 돈·물품대금·공사대금 등을 빠르게 받아내고 싶습니다.</li>
  <li>상대방이 채무 자체는 다투지 않을 것 같습니다.</li>
  <li>지급명령을 신청했는데 채무자가 이의를 했습니다.</li>
  <li>이의가 들어오면 비용을 얼마나 더 내야 하는지 궁금합니다.</li>
  <li>지급명령을 받았는데(채무자) 어떻게 대응해야 할지 모르겠습니다.</li>
</ul>` },
      { heading: '핵심 요약', content: `
<div class="section-title"><span class="num">SECTION 01</span> 핵심 요약</div>
<div class="summary-box">
  <p class="label">독촉절차란</p>
  <p>금전·대체물·유가증권 지급 청구에 대해 간이·신속하게 <strong>집행권원</strong>을 얻는 절차입니다.
  법원이 채무자 심문 없이 <strong>지급명령</strong>을 내리고, 채무자가 2주 안에 이의하지 않으면 확정됩니다.
  인지는 정식 소장의 <strong>10분의 1</strong>만 냅니다.</p>
</div>
<div class="deadline-banner">
  <div class="dl-icon">⚡</div>
  <div class="dl-text">
    <strong>(채무자) 지급명령 수령일부터 2주 이내 이의신청</strong>
    <p>이 기간을 넘기면 확정되어 강제집행을 당할 수 있습니다.</p>
  </div>
</div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=046200" target="_blank" class="tag-law">📋 민사소송법 제462조</a>
</div>` },
      { heading: '절차 흐름과 이의 후 처리', content: `
<div class="section-title"><span class="num">SECTION 02</span> 절차 흐름</div>

<div class="tbl-wrap"><table>
<thead><tr><th style="width:10%">단계</th><th>내용</th></tr></thead>
<tbody>
<tr><td class="td-key">1</td><td><strong>신청</strong> — 채무자 주소지 지방법원에 신청서 제출. 정식 소장 인지의 <strong>1/10</strong>만 납부. 전자독촉 가능</td></tr>
<tr><td class="td-key">2</td><td><strong>발령</strong> — 법원이 서면심사만으로 지급명령 발령 후 양쪽에 송달</td></tr>
<tr><td class="td-key">3</td><td><strong>2주 이내 이의 여부</strong> — 채무자는 수령일부터 2주 이내 이의신청 가능</td></tr>
<tr><td class="td-key">4-A</td><td><strong>[이의 없음] 확정</strong> — 확정판결과 같은 효력. <strong>집행문 없이</strong> 정본으로 바로 강제집행 신청 가능. 단기소멸시효 채권은 <strong>10년</strong>으로 연장</td></tr>
<tr><td class="td-key">4-B</td><td><strong>[이의 있음] 소송이행</strong> — 채권자는 나머지 인지 <strong>9/10 보정</strong> + 송달료 추가 납부. 보정 미이행 시 신청서 각하</td></tr>
</tbody>
</table></div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=046900" target="_blank" class="tag-law">📋 민사소송법 제469조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=047200" target="_blank" class="tag-law">📋 민사소송법 제472조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=047400" target="_blank" class="tag-law">📋 민사소송법 제474조</a>
</div>

<h3>확정된 지급명령의 한계 — 기판력 없음</h3>
<div class="info-box">
  <p>확정된 지급명령은 집행력은 있지만 <strong>기판력은 인정되지 않습니다.</strong>
  채무자는 나중에 청구이의의 소로 지급명령 발령 전의 사유(채무 불성립·무효 등)까지 들어 다툴 수 있습니다.</p>
</div>

<h3>다툼이 예상될 때는 처음부터 소 제기를</h3>
<p>채무자가 이의할 것이 분명하면 어차피 소송으로 넘어가 인지·송달료를 추가로 내고 시간도 더 걸립니다.
또한 채무자 주소가 불분명한 경우 독촉절차에서는 원칙적으로 공시송달을 할 수 없어 소송절차로 회부됩니다.
다툼이 예상되거나 주소가 불명확하면 처음부터 정식 소를 제기하는 편을 검토하세요.</p>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 03</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">채무자가 이의하면 채권자는 비용을 더 내야 하나요?</div>
  <div class="qna-a">네. 지급명령은 정식 소장 인지의 1/10만 내고 신청하는데, 이의로 소송이 되면 나머지 9/10에 해당하는 인지를 보정하고 송달료도 추가로 내야 합니다. 법원이 보정명령을 보내면 정해진 기간 안에 납부해야 합니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">(채무자) 지급명령을 받았어요. 어떻게 하나요?</div>
  <div class="qna-a">받은 날부터 2주 이내에 이의신청을 하세요. "지급명령에 응할 수 없다"는 취지만 밝히면 충분하고, 인지·송달료도 들지 않습니다. 이 기간을 넘기면 확정되어 강제집행을 당할 수 있습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">지급명령이 확정되면 바로 집행할 수 있나요?</div>
  <div class="qna-a">네. 확정된 지급명령은 확정판결과 같은 효력을 가지며, 집행문을 따로 받지 않고 정본만으로 강제집행을 신청할 수 있습니다. 단기소멸시효 채권도 확정으로 시효가 10년으로 연장됩니다. 다만 기판력은 없어 채무자가 청구이의의 소로 다툴 여지는 남습니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 04</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">확정된 지급명령은 소멸시효를 10년으로 연장한다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2009다39530" target="_blank" class="tag-case">⚖️ 대법원 2009다39530</a></div>
  <div class="r-body">단기소멸시효에 걸리는 채권이라도 지급명령으로 확정되면 그 소멸시효 기간이 10년으로 연장된다고 보았습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">확정된 지급명령에는 기판력이 없다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2006다73966" target="_blank" class="tag-case">⚖️ 대법원 2006다73966</a></div>
  <div class="r-body">확정된 지급명령은 확정판결과 같은 집행력은 있지만 기판력은 인정되지 않습니다. 채무자는 발령 전의 사유로도 청구이의의 소를 제기할 수 있습니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 05</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 이의가 들어오면 인지·송달료 보정을 제때 하세요 (채권자)</span>
  <p>이의로 소송이 이행되면 법원이 보정명령을 보냅니다. 정해진 기간 안에 보정하지 않으면 지급명령신청서가 각하됩니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚡ 이의신청은 2주 안에 (채무자)</span>
  <p>지급명령을 받은 날부터 2주가 지나면 확정되어 강제집행을 당할 수 있습니다. 다툴 사정이 있다면 기간 안에 반드시 이의신청을 하세요. 이유는 나중에 소송에서 밝히면 됩니다.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 06</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-13"><span class="arrow">›</span> 소액사건심판</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-03"><span class="arrow">›</span> 관할 — 어느 법원에 내야 하나요?</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-09"><span class="arrow">›</span> 판결과 확정</a>
</div>
<div class="cta-box">
  <h3>지급명령 신청부터 이의 대응까지 도움이 필요하신가요?</h3>
  <p>신청서 작성, 이의 후 인지·송달료 보정, 소송이행 대응까지 법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

  /* ──────────────────────────────────────────────
     ms-13  소액사건·민사조정·제소전화해
  ────────────────────────────────────────────── */
  ,{
    id: 'ms-13',
    title: '소송 없이 빠르게 — 소액사건·조정·제소전화해',
    meta: '정식 소송 대신 더 빠르고 저렴하게 분쟁을 해결하는 세 가지 방법을 비교합니다. 소액사건심판(3천만 원 이하), 민사조정(합의), 제소전화해(미리 집행권원 확보).',
    sections: [
      { heading: '이런 분께 필요합니다', content: `
<ul class="checklist">
  <li>3천만 원 이하 소액 분쟁을 간단하고 빠르게 해결하고 싶습니다.</li>
  <li>소송까지 가지 않고 원만하게 합의로 분쟁을 끝내고 싶습니다.</li>
  <li>임대차 계약 종료 시 건물 인도를 미리 확실히 해 두고 싶습니다.</li>
  <li>이행권고결정을 받았는데(피고) 어떻게 대응해야 할지 모르겠습니다.</li>
  <li>"조정을 갈음하는 결정"을 받았는데 어떻게 해야 하는지 궁금합니다.</li>
</ul>` },
      { heading: '세 가지 간이절차 비교', content: `
<div class="section-title"><span class="num">SECTION 01</span> 세 가지 간이절차 비교</div>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:22%">절차</th><th>잘 맞는 경우</th><th style="width:30%">인지·비용</th><th style="width:22%">효력</th></tr></thead>
<tbody>
<tr><td class="td-key">소액사건심판</td><td>소가 3,000만 원 이하 금전 청구</td><td>정식 소송과 동일한 인지, 구술 제소 가능</td><td>판결 = 확정판결 효력</td></tr>
<tr><td class="td-key">민사조정</td><td>양보로 원만히 끝내고 싶을 때</td><td>정식 소장 인지의 <strong>1/10</strong></td><td>조정조서 = 확정판결 효력</td></tr>
<tr><td class="td-key">제소전화해</td><td>합의 내용을 미리 집행권원화 (임대차 명도 등)</td><td>정식 소장 인지의 <strong>1/5</strong></td><td>화해조서 = 확정판결 효력</td></tr>
</tbody>
</table></div>` },
      { heading: '소액사건심판', content: `
<div class="section-title"><span class="num">SECTION 02</span> 소액사건심판</div>
<div class="summary-box">
  <p class="label">소액사건이란</p>
  <p>소를 제기할 때 소가가 <strong>3,000만 원 이하</strong>인 금전·대체물·유가증권 지급 청구가 소액사건입니다.
  구술 제소, 배우자·직계혈족·형제자매의 소송대리, 한 번의 변론기일 원칙, 판결이유 생략 등 여러 특례가 있습니다.</p>
</div>

<h3>이행권고결정 — 변론 없이 빠르게</h3>
<p>소액사건이 접수되면 법원이 직권으로 피고에게 이행권고결정을 내릴 수 있습니다.
피고는 결정서 등본 수령일부터 <strong>2주 이내</strong>에 서면으로 이의신청을 할 수 있습니다.
이의하면 정식 변론절차로, 이의하지 않으면 확정되어 집행문 없이 바로 강제집행이 가능합니다.</p>
<div class="warn-box">
  <span class="warn-title">⚡ 이행권고결정 이의신청은 2주 이내</span>
  <p>기간을 넘기면 확정되어 강제집행을 당할 수 있습니다. 이의 시에는 답변서도 함께 제출해야 합니다.</p>
</div>

<h3>소액사건의 상고 제한</h3>
<p>소액사건은 ① 헌법 위반 여부·법령 해석의 부당, ② 대법원 판례에 상반되는 판단을 한 경우에만 상고할 수 있습니다.
단순한 법령 위반은 상고이유가 되지 않아, 사실상 1심·2심에서 분쟁이 마무리되는 구조입니다.
<strong>1심부터 주장·증거를 충실히 준비하는 것이 그만큼 더 중요합니다.</strong></p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=008800" target="_blank" class="tag-law">📋 민사소송법 제88조</a>
</div>` },
      { heading: '민사조정', content: `
<div class="section-title"><span class="num">SECTION 03</span> 민사조정</div>
<div class="summary-box">
  <p class="label">민사조정이란</p>
  <p>중립적인 제3자(조정담당판사 또는 조정위원회)가 당사자에게 상호 양보를 권유·주선해
  합의로 분쟁을 해결하는 제도입니다. 절차가 간이하고 비용이 적으며,
  조정이 성립하면 그 조정조서는 <strong>확정판결과 같은 효력</strong>을 가집니다.</p>
</div>

<h3>조정 시작 방법</h3>
<p>처음부터 법원에 조정을 신청하거나, 이미 소송 중인 사건을 법원이 결정으로 조정에 회부합니다.
신청 인지는 같은 청구로 소송할 때 인지액의 <strong>1/10</strong> 수준으로 저렴합니다.
조정이 불성립되어 소송으로 이행되면 나머지 9/10를 보정하게 됩니다.</p>

<h3>"조정을 갈음하는 결정"(강제조정)</h3>
<p>합의가 안 되더라도 법원은 직권으로 적절한 해결안을 담은 결정을 할 수 있습니다.
당사자가 <strong>결정서 정본 수령일부터 2주 이내에 이의하지 않으면 확정</strong>되어 확정판결과 같은 효력을 가집니다.
이의하면 결정은 효력을 잃고 사건은 소송으로 넘어갑니다.</p>
<div class="warn-box">
  <span class="warn-title">⚡ 강제조정 결정에 이의하려면 2주 이내</span>
  <p>기간을 넘기면 결정대로 확정됩니다. 내용에 동의할 수 없으면 즉시 이의신청을 하세요.</p>
</div>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=022000" target="_blank" class="tag-law">📋 민사소송법 제220조</a>
</div>` },
      { heading: '제소전화해', content: `
<div class="section-title"><span class="num">SECTION 04</span> 제소전화해</div>
<div class="summary-box">
  <p class="label">제소전화해란</p>
  <p>소제기 전 <strong>지방법원 단독판사 앞에서 화해를 성립</strong>시켜 집행권원을 확보하는 절차입니다.
  성립한 화해조서는 <strong>확정판결과 같은 효력</strong>을 가집니다.
  임대차 계약 종료 시 건물 인도, 분할변제 약정 등에 자주 활용됩니다.
  인지는 정식 소장의 <strong>1/5</strong>입니다.</p>
</div>

<h3>자주 활용하는 사례</h3>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:30%">사례</th><th>화해조항 핵심</th></tr></thead>
<tbody>
<tr><td class="td-key">상가·주택 임대차 명도</td><td>"임대차 종료일에 건물을 인도한다. 동시에 보증금을 반환한다."</td></tr>
<tr><td class="td-key">금전채무 분할변제</td><td>"○○원을 매월 말일 ○○원씩 지급, 1회라도 지체하면 기한의 이익 상실"</td></tr>
<tr><td class="td-key">부동산 명도 합의</td><td>일정 기일까지 부동산을 비워 인도하기로 합의한 내용</td></tr>
</tbody>
</table></div>

<h3>화해조항 작성 시 주의사항</h3>
<div class="warn-box">
  <span class="warn-title">⚠️ 강행법규 위반 조항은 무효</span>
  <p>차임 1회 연체 즉시 인도 조항(민법 제640·652조 위반), 정산 없는 가등기담보 본등기 조항(가등기담보법 위반) 등은 무효가 될 수 있고 준재심 사유조차 되지 않습니다.</p>
</div>
<div class="info-box" style="margin-top:12px;">
  <p>💡 <strong>목적물·이행기·조건을 정확히 특정하세요.</strong><br>
  부동산은 지번·면적으로, 건물 일부 인도는 도면을 첨부해 부분을 특정해야 합니다.
  이행기나 조건이 모호하면 강제집행이 불가능해집니다.</p>
</div>

<h3>화해가 안 된 경우</h3>
<p>불성립조서 등본을 받은 날부터 <strong>2주 이내</strong>에 소제기신청을 하면 정식 소송으로 넘어갑니다.
이때 신청인은 인지의 나머지 4/5를 보정합니다.</p>
<div class="ref-tags">
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=038500" target="_blank" class="tag-law">📋 민사소송법 제385조</a>
  <a href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=038800" target="_blank" class="tag-law">📋 민사소송법 제388조</a>
</div>` },
      { heading: '자주하는 질문', content: `
<div class="section-title"><span class="num">SECTION 05</span> 자주하는 질문</div>
<div class="qna-item">
  <div class="qna-q">소액사건에서 가족이 대신 재판해 줄 수 있나요?</div>
  <div class="qna-a">소액사건에서는 당사자의 배우자·직계혈족·형제자매가 법원 허가 없이 소송대리인이 될 수 있습니다. 신분관계와 위임관계를 서면으로 증명하면 됩니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">조정이 성립하면 판결처럼 효력이 있나요?</div>
  <div class="qna-a">네. 성립한 조정조서는 확정판결과 같은 효력을 가집니다. 상대방이 이행하지 않으면 별도 소송 없이 그 조서로 강제집행을 할 수 있습니다.</div>
</div>
<div class="qna-item">
  <div class="qna-q">제소전화해가 성립하면 나중에 되돌릴 수 있나요?</div>
  <div class="qna-a">매우 어렵습니다. 화해조서는 확정판결과 같은 효력이어서 준재심에 의하지 않고는 다툴 수 없습니다. 불리한 조항이 들어가지 않도록 성립 전에 충분히 검토하세요.</div>
</div>
<div class="qna-item">
  <div class="qna-q">"1회 차임 연체 시 즉시 나간다"는 조항을 넣어도 되나요?</div>
  <div class="qna-a">위험합니다. 차임 연체에 관한 임차인 보호 규정에 어긋나는 조항으로 무효가 될 수 있고, 이런 강행법규 위반은 준재심 사유조차 되지 않습니다. 처음부터 넣지 않는 것이 안전합니다.</div>
</div>` },
      { heading: '⚖ 참고 판례', content: `
<div class="section-title"><span class="num">SECTION 06</span> 참고 판례</div>
<div class="ruling-card">
  <div class="r-label">확정된 이행권고결정에는 기판력이 없다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2006다34190" target="_blank" class="tag-case">⚖️ 대법원 2006다34190</a></div>
  <div class="r-body">확정된 이행권고결정은 집행력은 갖지만 기판력은 인정되지 않으므로, 청구이의의 소 등으로 다투어야 합니다(준재심 불가).</div>
</div>
<div class="ruling-card">
  <div class="r-label">제소전화해조서는 준재심에 의하지 않고는 다툴 수 없다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=92다8521" target="_blank" class="tag-case">⚖️ 대법원 92다8521</a></div>
  <div class="r-body">제소전화해조서도 확정판결과 같은 효력을 가지므로, 준재심의 소에 의하지 않고는 그 효력을 다툴 수 없다고 보았습니다.</div>
</div>
<div class="ruling-card">
  <div class="r-label">형성판결의 효력은 조정(합의)으로 만들 수 없다</div>
  <div class="r-title"><a href="https://glaw.scourt.go.kr/wsjo/panre/sjo060.do?q=2023다256577" target="_blank" class="tag-case">⚖️ 대법원 2023다256577</a></div>
  <div class="r-body">청구이의의 소처럼 형성판결의 효력을 개인 사이의 합의(조정)로 창설할 수 없으므로, 같은 내용으로 조정이 이루어져도 판결을 받은 것과 같은 효력은 생기지 않습니다.</div>
</div>` },
      { heading: '⚡ 주의사항', content: `
<div class="section-title"><span class="num">SECTION 07</span> 꼭 주의하세요</div>
<div class="warn-box">
  <span class="warn-title">⚡ 소액사건 — 한 번의 변론으로 끝날 수 있습니다</span>
  <p>소액사건은 되도록 한 차례 변론기일로 심리를 마칩니다. 첫 기일에 필요한 증거를 모두 낼 수 있도록 미리 준비해야 불리하지 않습니다.</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚡ 제소전화해 — 불성립 시 소제기신청은 2주 안에</span>
  <p>화해가 안 되어 소송으로 가려면 불성립조서 등본을 받은 날부터 2주 이내에 소제기신청을 해야 합니다(불변기간).</p>
</div>
<div class="warn-box" style="margin-top:12px;">
  <span class="warn-title">⚠️ 제소전화해 조항은 성립 전에 충분히 검토하세요</span>
  <p>화해조서는 한번 성립하면 준재심에 의하지 않고는 다툴 수 없습니다. 강행법규 위반 조항이 없는지, 목적물이 정확히 특정되었는지 미리 확인하세요.</p>
</div>` },
      { heading: '다음에 확인할 사항', content: `
<div class="section-title"><span class="num">SECTION 08</span> 다음에 확인할 사항</div>
<div class="next-links">
  <a class="next-link" href="?cat=lawsuit&topic=ms-12"><span class="arrow">›</span> 지급명령(독촉절차)</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-01"><span class="arrow">›</span> 민사소송 절차 한눈에 보기</a>
  <a class="next-link" href="?cat=lawsuit&topic=ms-09"><span class="arrow">›</span> 판결과 확정</a>
</div>
<div class="cta-box">
  <h3>어떤 방법이 내 상황에 맞는지 판단이 어려우신가요?</h3>
  <p>소액사건·조정·제소전화해·지급명령 중 최적의 절차 선택부터 신청서 작성까지<br>법무사가 도와드립니다. 첫 상담은 무료입니다.</p>
  <a href="tel:[전화번호]" class="cta-btn">📞 전화 상담</a>
</div>
<div class="disclaimer-section"><p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 그 결과를 보장하지 않습니다. 구체적인 사건은 사실관계에 따라 결론이 달라질 수 있으므로 반드시 전문가와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령을 기준으로 작성되었습니다.</p></div>` }
    ]
  }

]; // end CIVIL_TOPICS
