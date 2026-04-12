const FOREIGN_TOPICS = [
  {
    id: 'fi-01',
    title: "외국인·재외국민·외국국적동포법적 지위 완벽 구분",
    meta: "한국 부동산 등기에서 내 법적 지위가 어디에 해당하는지에 따라준비 서류와 절차가 완전히 달라집니다.",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-box">
    <div class="box-title">이런 분께 필요합니다</div>
    <ul>
      <li>미국·캐나다·일본 등 외국 시민권을 취득하여 한국 국적을 상실한 분</li>
      <li>한국 국적은 있지만 미국 영주권(그린카드) 등 외국 영주권을 취득한 분</li>
      <li>해외에서 오래 거주하여 주민등록이 말소된 분</li>
      <li>부모님이 교포이거나, 본인이 재외동포 비자(F-4)로 국내에 체류 중인 분</li>
      <li>한국에 부동산을 보유 중이거나 취득·상속·증여를 앞두고 있는 분</li>
      <li>'외국인'인지 '재외국민'인지 헷갈려서 어떤 서류를 준비해야 할지 모르는 분</li>
    </ul>
  </div>` },
      { heading: `핵심 요약`, content: `<div class="summary-box">
      <div class="summary-title">📌 한눈에 보는 핵심</div>
      <p>한국 부동산 등기에서는 <strong>외국인, 재외국민, 외국국적동포</strong> 세 가지 법적 지위를 엄격히 구분합니다. 이 구분이 곧 "어떤 서류를 준비해야 하는가", "토지취득 허가가 필요한가", "취득 신고 의무가 있는가"를 결정짓습니다.</p>
      <p><strong>재외국민</strong>은 한국 국적을 가진 대한민국 국민이므로 부동산 취득·보유 신고 의무가 없고, 내국인과 거의 동일하게 등기를 신청할 수 있습니다. 반면 <strong>외국인</strong>과 <strong>외국국적동포</strong>는 '외국인 등'으로 분류되어 취득 신고, 경우에 따라 토지취득 허가가 필요하며, 부동산등기용 등록번호를 별도로 부여받아야 합니다.</p>
      <p>시민권(nationality)과 영주권(permanent residency)을 혼동하는 분이 많습니다. <strong>시민권을 취득하면 한국 국적이 상실되어 외국인</strong>이 되고, <strong>영주권만 취득한 경우에는 한국 국적이 유지되어 재외국민</strong>으로 분류됩니다.</p>
    </div>` },
      { heading: `상세 내용`, content: `<!-- 2-1. 기본 개념과 법적 근거 -->
    <h3>2-1. 기본 개념과 법적 근거</h3>

    <div class="def-grid">
      <!-- 외국인 카드 -->
      <div class="def-card card-foreigner">
        <div class="card-badge">외국인 · 외국법인</div>
        <div class="card-title">외국인 (外國人)</div>
        <div class="card-body">
          대한민국의 국적을 보유하고 있지 <strong>아니한</strong> 개인. 외국 국적만 보유한 자, 무국적자, 국적을 상실한 자(이중국적 이탈신고자 포함)가 해당됩니다.
        </div>
        <div class="card-keyword">📎 근거법: 부동산거래신고법 제2조 제4호 가목</div>
      </div>

      <!-- 재외국민 카드 -->
      <div class="def-card card-overseas">
        <div class="card-badge">재외국민</div>
        <div class="card-title">재외국민 (在外國民)</div>
        <div class="card-body">
          대한민국 <strong>국적을 보유</strong>하면서 외국 영주권을 취득하거나 영주 목적으로 외국에 거주하는 자. 주민등록이 말소된 경우가 일반적입니다.
        </div>
        <div class="card-keyword">📎 근거법: 재외동포법 제2조 제1호 · 등기예규 제1778호 제2조</div>
      </div>

      <!-- 외국국적동포 카드 -->
      <div class="def-card card-ethnic">
        <div class="card-badge">외국국적동포 (F-4)</div>
        <div class="card-title">외국국적동포 (外國國籍同胞)</div>
        <div class="card-body">
          과거 대한민국 국적을 보유했던 자 또는 그 <strong>직계비속</strong>으로서 외국 국적을 취득한 자. 한국 국적이 없으므로 부동산 등기법상 <strong>외국인</strong>으로 취급됩니다.
        </div>
        <div class="card-keyword">📎 근거법: 재외동포법 제2조 제2호, 시행령 제3조</div>
      </div>
    </div>

    <div class="law-box">
      <div class="law-label">📜 관련 법령 조문</div>
      <p><strong>부동산 거래신고 등에 관한 법률 제2조 제4호</strong> — "외국인 등"이란 ① 대한민국의 국적을 보유하고 있지 아니한 개인 ② 외국의 법령에 따라 설립된 법인 또는 단체 ③ 외국인이 자본금·의결권의 2분의 1 이상을 소유한 법인 또는 단체 ④ 외국 정부 ⑤ 대통령령으로 정하는 국제기구를 말한다.</p>
      <p style="margin-top:8px"><strong>재외동포의 출입국과 법적 지위에 관한 법률 제2조</strong> — "재외동포"란 ① 재외국민(대한민국 국민으로서 외국 영주권 취득자 또는 영주 목적 해외 거주자) ② 외국국적동포(과거 한국 국적 보유자 또는 그 직계비속으로서 외국 국적 취득자)를 말한다.</p>
      <p style="margin-top:8px"><strong>재외국민 및 외국인의 부동산등기신청절차에 관한 예규 제1778호 제2조 제1호</strong> — "재외국민"이란 우리 국적을 가지고 있으면서 외국정부로부터 영주권을 취득하였거나 계속하여 장기간 외국에 체류하는 자를 말한다.</p>
    </div>

    <!-- 2-2. 구체적 내용 — 비교표 -->
    <h3>2-2. 부동산 등기 실무에서의 차이 비교</h3>

    <table class="compare-table">
      <thead>
        <tr>
          <th>구분 항목</th>
          <th>외국인<br><small>(시민권자 등)</small></th>
          <th>재외국민<br><small>(영주권자)</small></th>
          <th>외국국적동포<br><small>(F-4 비자)</small></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>한국 국적 보유 여부</td>
          <td><span class="no">없음</span></td>
          <td><span class="yes">있음</span></td>
          <td><span class="no">없음</span></td>
        </tr>
        <tr>
          <td>부동산 취득 가능 여부</td>
          <td><span class="yes">가능</span><br><small>(허가·신고 조건)</small></td>
          <td><span class="yes">내국인과 동일</span></td>
          <td><span class="yes">가능</span><br><small>(허가·신고 조건)</small></td>
        </tr>
        <tr>
          <td>토지취득 허가 대상</td>
          <td><span class="cond">구역에 따라 필요</span></td>
          <td><span class="no">불필요</span></td>
          <td><span class="cond">구역에 따라 필요</span></td>
        </tr>
        <tr>
          <td>부동산 취득·보유 신고</td>
          <td><span class="yes">의무 있음</span><br><small>(취득 후 60일 이내)</small></td>
          <td><span class="no">불필요</span></td>
          <td><span class="yes">의무 있음</span></td>
        </tr>
        <tr>
          <td>부동산등기용 등록번호</td>
          <td><span class="yes">별도 발급 필요</span></td>
          <td><span class="no">불필요</span><br><small>(주민등록번호 사용)</small></td>
          <td><span class="cond">국내거소신고번호 또는<br>별도 발급</span></td>
        </tr>
        <tr>
          <td>주소증명 서류</td>
          <td>본국 주소증명서<br><small>(공증·아포스티유)</small></td>
          <td>재외국민등록부등본<br>또는 재외공관 증명</td>
          <td>국내거소신고증<br>또는 외국인등록증</td>
        </tr>
        <tr>
          <td>인감증명 대체</td>
          <td>재외공관 공증<br>또는 아포스티유</td>
          <td>재외공관 공증</td>
          <td>재외공관 공증<br>또는 아포스티유</td>
        </tr>
        <tr>
          <td>입국 없이 등기 신청</td>
          <td><span class="cond">위임장 공증으로 가능</span></td>
          <td><span class="cond">위임장 공증으로 가능</span></td>
          <td><span class="cond">위임장 공증으로 가능</span></td>
        </tr>
      </tbody>
    </table>

    <!-- 2-3. 실제 사례 -->
    <h3>2-3. 실제 사례로 이해하기</h3>

    <div class="case-box">
      <div class="case-title">📋 사례 ① — 미국 시민권을 취득한 교포 A씨</div>
      <p>A씨는 1990년대에 미국으로 이민하여 미국 시민권을 취득하였습니다. 미국 시민권 취득 시 한국 국적이 자동으로 상실되었으므로(국적법 제15조), A씨는 <strong>외국인</strong>에 해당합니다. 서울 강남의 아파트를 매수하려면 ① 부동산등기용 등록번호 발급, ② 잔금 지급 후 60일 이내 부동산 취득 신고, ③ 주소를 증명하는 미국 공증 서면(아포스티유 첨부)이 필요합니다. 단, 해당 아파트가 외국인 토지취득 허가 대상 구역이 아니라면 토지취득 허가는 불필요합니다.</p>
    </div>

    <div class="case-box">
      <div class="case-title">📋 사례 ② — 캐나다 영주권(PR카드)을 보유한 B씨</div>
      <p>B씨는 한국 국적을 유지하면서 캐나다 영주권을 취득하여 밴쿠버에 거주 중입니다. 주민등록은 말소된 상태입니다. B씨는 <strong>재외국민</strong>에 해당합니다. 서울 마포의 오피스텔을 매수할 경우 ① 부동산 취득 신고 불필요, ② 토지취득 허가 불필요, ③ 재외국민등록부등본(주소 증명) 제출, ④ 부동산등기용 등록번호 대신 주민등록번호 사용 가능합니다. 다만 인감증명을 요하는 서면에 대해서는 재외공관에서 공증을 받아야 합니다.</p>
    </div>

    <div class="case-box">
      <div class="case-title">📋 사례 ③ — 재외동포(F-4) 비자로 국내에 체류 중인 C씨</div>
      <p>C씨는 부모님이 한국 출신으로 미국에서 태어나 미국 국적을 가지고 있으며, 현재 F-4(재외동포) 비자로 한국에 체류하며 국내거소신고를 하였습니다. C씨는 한국 국적이 없으므로 <strong>외국국적동포</strong>이자 부동산 등기 실무상 <strong>외국인</strong>으로 분류됩니다. 부동산 취득 신고 의무가 있으며, 국내거소신고번호 또는 부동산등기용 등록번호를 사용하여 등기 신청을 할 수 있습니다.</p>
    </div>` },
      { heading: `관련 판례·예규`, content: `<div class="law-box">
      <div class="law-label">📜 등기예규 제1778호 (재외국민 및 외국인의 부동산등기신청절차에 관한 예규)</div>
      <p>재외국민과 외국인의 등기 신청 절차를 통합 규율하는 핵심 예규입니다. "재외국민"과 "외국인 등"의 정의를 별도로 규정하고, 각각 달리 적용되는 인감 증명, 주소 증명, 첨부서류 기준을 구체적으로 정하고 있습니다. 이 예규에 따르면 재외국민은 재외공관의 공증을 통해 인감증명을 대체할 수 있고, 재외국민등록부등본을 주소증명 서류로 제출할 수 있습니다.</p>
    </div>
    <div class="law-box">
      <div class="law-label">📜 국적법 제15조 — 외국 국적 취득에 따른 국적 상실</div>
      <p>대한민국 국민이 자진하여 외국 국적을 취득한 경우, 그 취득 시점에 대한민국 국적을 상실합니다. 다만 혼인·입양 등으로 외국 국적을 취득한 경우에는 6개월 이내에 국적 보유 의사를 신고하지 않으면 소급하여 국적을 상실한 것으로 봅니다. 이에 따라 외국 국적 취득 시점을 정확히 파악하는 것이 등기 신청에서 중요합니다.</p>
    </div>
    <div class="law-box">
      <div class="law-label">📜 등기예규 제99호 — 외국으로 귀화한 직계비속의 재산상속권</div>
      <p>부의 사망 전·후를 불문하고, 귀화한 직계비속도 민법 제1004조의 결격 사유가 없는 한 상속인이 됩니다. 즉, 외국 국적 취득(귀화)이 상속권을 박탈하지 않습니다. 이는 외국인 신분으로 한국 부동산을 상속받을 수 있는 근거가 됩니다.</p>
    </div>` },
      { heading: `주의사항`, content: `<div class="warn-box">
      <div class="warn-title">⚡ 시민권 취득 후 국적 상실 — 즉시 외국인으로 전환</div>
      외국 시민권을 취득하는 즉시 한국 국적이 상실됩니다. 이후 한국 부동산을 취득하거나 보유하게 되면 <strong>취득일 또는 외국인으로 변경된 날부터 6개월 이내</strong>에 부동산 취득·보유 신고를 하여야 합니다(부동산거래신고법 제6조). 신고 의무를 위반하면 100만 원 이하의 과태료가 부과될 수 있습니다.
    </div>

    <div class="warn-box">
      <div class="warn-title">⚠️ 등기 신청 당시 기준으로 법적 지위 판단</div>
      과거에 한국 국적이 있었더라도 <strong>등기 신청 당시</strong> 국적이 없으면 외국인으로 처리됩니다. 반대로 외국 국적을 취득하였더라도 등기 신청 당시 대한민국 국적을 상실하지 아니한 경우에는 외국인으로 보지 않습니다(부동산거래신고법 해석 실무).
    </div>

    <div class="warn-box">
      <div class="warn-title">ℹ️ 영주귀국신고를 하지 않은 재외국민</div>
      외국 영주권을 소지한 채 현재 국내에 거주하고 있더라도, <strong>영구 귀국신고를 하지 않은 한 재외국민으로 분류</strong>됩니다(등기예규 제1778호). 국내에 주민등록을 신고하였더라도 등기 실무상 재외국민으로 처리되므로, 등기 신청 전 자신의 법적 지위를 반드시 확인하시기 바랍니다.
    </div>

    <div class="country-box">
      <div class="country-title">🌏 이중국적자 특이사항</div>
      대한민국과 외국 국적을 동시에 보유하는 경우(이중국적자), 한국 국적을 유지하고 있으므로 부동산 등기에서는 <strong>내국인 또는 재외국민</strong>으로 처리됩니다. 다만, 한국 국적 이탈 신고를 한 경우에는 그 시점부터 외국인으로 전환됩니다.
    </div>` },
      { heading: `자주 묻는 질문 (Q&A)`, content: `<div class="qa-list">

      <div class="qa-item">
        <div class="qa-question">
          <span class="q-mark">Q</span>
          미국 영주권(그린카드)을 받은 경우 외국인인가요, 재외국민인가요?
        </div>
        <div class="qa-answer">
          영주권은 체류 자격에 불과하며, 국적 변동을 일으키지 않습니다. 미국 영주권을 취득하였더라도 대한민국 국적을 유지하고 있다면 <strong>재외국민</strong>에 해당합니다. 미국 시민권을 취득한 경우에는 한국 국적이 상실되어 <strong>외국인</strong>이 됩니다. 따라서 "영주권자 = 재외국민", "시민권자 = 외국인"으로 이해하시면 됩니다. 재외국민은 한국 부동산 취득 시 취득·보유 신고 의무가 없고, 토지취득 허가도 불필요합니다.
          <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
        </div>
      </div>

      <div class="qa-item">
        <div class="qa-question">
          <span class="q-mark">Q</span>
          외국국적동포(F-4 비자 소지자)는 외국인과 똑같이 취급되나요?
        </div>
        <div class="qa-answer">
          한국 국적이 없으므로 부동산 등기 실무에서는 <strong>외국인과 동일하게</strong> 취급됩니다. 따라서 부동산 취득 신고 의무가 있고, 토지취득 허가 대상 구역에 있는 토지를 취득할 경우 허가를 받아야 합니다. 다만, 국내거소신고를 한 외국국적동포는 국내거소신고번호를 등기 신청 시 등록번호로 사용할 수 있어, 부동산등기용 등록번호를 별도 발급받지 않아도 됩니다.
          <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
        </div>
      </div>

      <div class="qa-item">
        <div class="qa-question">
          <span class="q-mark">Q</span>
          재외국민이 국내에 주민등록을 신고하면 내국인으로 등기 신청이 가능한가요?
        </div>
        <div class="qa-answer">
          주민등록법에 따라 재외국민이 국내에 30일 이상 거주할 목적으로 입국하면 주민등록을 신고할 수 있습니다(주민등록법 제10조의2). 이 경우 주민등록번호가 부여되어 등기 신청 시 내국인과 동일하게 주민등록번호를 등록번호로 사용할 수 있습니다. 그러나 외국 영주권을 아직 보유하고 있고 영구 귀국신고를 하지 않은 상태라면, 등기 실무상으로는 여전히 <strong>재외국민으로 분류</strong>되어 재외국민 관련 첨부서류(재외국민등록부등본 등)를 추가 제출해야 할 수 있습니다.
          <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
        </div>
      </div>

      <div class="qa-item">
        <div class="qa-question">
          <span class="q-mark">Q</span>
          외국 회사가 한국 부동산을 취득하는 경우에도 외국인 규정이 적용되나요?
        </div>
        <div class="qa-answer">
          네, 적용됩니다. 외국의 법령에 따라 설립된 법인은 '외국인 등'으로 분류됩니다(부동산거래신고법 제2조 제4호 나목). 또한 국내법에 따라 설립된 법인이라도 외국인이 자본금 또는 의결권의 2분의 1 이상을 보유한 경우에는 외국인 등으로 봅니다. 다만, 해당 법인이 외국인 등에 해당하는지 여부가 불분명한 경우, 등기관이 별지 진술서를 요구할 수 있습니다.
          <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
        </div>
      </div>

      <div class="qa-item">
        <div class="qa-question">
          <span class="q-mark">Q</span>
          외국인 신분으로 한국 부동산을 상속받을 수 있나요?
        </div>
        <div class="qa-answer">
          예, 가능합니다. 외국으로 귀화한 직계비속도 민법 제1004조의 결격 사유만 없으면 상속인이 됩니다(등기예규 제99호). 다만 상속의 준거법과 관련하여, 피상속인이 외국인인 경우 국제사법 제49조에 따라 <strong>피상속인의 본국법</strong>이 적용됩니다. 예를 들어 미국 국적을 가진 피상속인이 한국에 부동산을 남기고 사망한 경우, 미국 법이 준거법이 되나 한국 법원에서의 반정(反定)이 적용되면 한국 민법이 적용될 수 있습니다. 상속 등기 신청 절차 자체는 우리나라 부동산등기법에 따라 이루어집니다.
          <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
        </div>
      </div>

      <div class="qa-item">
        <div class="qa-question">
          <span class="q-mark">Q</span>
          ⚡ 외국인으로 변경된 후 부동산 신고 기한이 있나요?
        </div>
        <div class="qa-answer">
          있습니다. 대한민국 국적을 상실하거나 법인의 구성이 변경되어 '외국인 등'에 해당하게 된 경우, 그 <strong>변경일로부터 6개월 이내</strong>에 토지·건물의 취득·보유 신고를 해야 합니다(부동산거래신고법 제6조 제2항). 이 기간을 넘기면 100만 원 이하의 과태료가 부과될 수 있습니다. 시민권 취득 후 기존에 보유하던 국내 부동산에 대해 신고 의무를 놓치는 사례가 많으니 주의하십시오.
          <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
        </div>
      </div>

    </div>` },
    ],
    laws: [
      { name: `등기예규 제1778호 (재외국민 및 외국인의 부동산등기신청절차에 관한 예규)`, desc: `재외국민과 외국인의 등기 신청 절차를 통합 규율하는 핵심 예규입니다. "재외국민"과 "외국인 등"의 정의를 별도로 규정하고, 각각 달리 적용되는 인감 증명, 주소 증명, 첨부서류 기준을 구체적으로 정하고 있습니다. 이 예규에 따르면 재외국민은 재외공관의 공증을 통해 인감증명을 대체할 수 있고, 재외국민등록부등본을 주소증명 서류로 제출할 수 있습니다.` },
      { name: `국적법 제15조 — 외국 국적 취득에 따른 국적 상실`, desc: `대한민국 국민이 자진하여 외국 국적을 취득한 경우, 그 취득 시점에 대한민국 국적을 상실합니다. 다만 혼인·입양 등으로 외국 국적을 취득한 경우에는 6개월 이내에 국적 보유 의사를 신고하지 않으면 소급하여 국적을 상실한 것으로 봅니다. 이에 따라 외국 국적 취득 시점을 정확히 파악하는 것이 등기 신청에서 중요합니다.` },
      { name: `등기예규 제99호 — 외국으로 귀화한 직계비속의 재산상속권`, desc: `부의 사망 전·후를 불문하고, 귀화한 직계비속도 민법 제1004조의 결격 사유가 없는 한 상속인이 됩니다. 즉, 외국 국적 취득(귀화)이 상속권을 박탈하지 않습니다. 이는 외국인 신분으로 한국 부동산을 상속받을 수 있는 근거가 됩니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-02',
    title: "외국인의 한국 부동산 취득 절차완벽 가이드",
    meta: "매수 계약부터 소유권이전등기 완료까지 — 국내 체류 여부에 따른 절차와 서류를 한눈에 정리합니다.",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-box">
    <div class="box-title">이런 분께 필요합니다</div>
    <ul>
      <li>외국 시민권 또는 영주권을 보유한 상태에서 한국 아파트·토지·상가를 매수하려는 분</li>
      <li>한국에 체류 중인 외국인(외국인등록증 소지자)이 부동산을 구입하려는 분</li>
      <li>해외에 거주하면서 입국 없이 한국 부동산을 매수하려는 분</li>
      <li>군사시설보호구역·문화재보호구역 등 허가 대상 토지를 취득하려는 분</li>
      <li>부동산등기용 등록번호가 없어서 등기 신청을 어떻게 해야 할지 모르는 분</li>
      <li>취득 후 신고 의무가 있는지, 기한이 언제인지 확인하고 싶은 분</li>
    </ul>
  </div>` },
      { heading: `이 절차가 왜 필요한가`, content: `<div class="summary-box">
      <div class="summary-title">📌 외국인 부동산 취득의 핵심</div>
      <p>외국인도 원칙적으로 한국 부동산을 자유롭게 취득할 수 있습니다. 다만 내국인과 달리 <strong>①부동산등기용 등록번호 발급, ②취득·보유 신고, ③경우에 따른 토지취득 허가</strong>의 세 가지 추가 절차가 필요합니다.</p>
      <p>재외국민(영주권자)은 한국 국적을 유지하므로 이 세 가지가 모두 <strong>불필요</strong>합니다. 반면 시민권자, 외국국적동포 등 한국 국적이 없는 외국인은 모두 해당됩니다.</p>
    </div>

    <div class="warn-box">
      <div class="warn-title">⚡ 등기신청 기한 — 잔금일로부터 60일</div>
      매매계약 후 반대급부(잔금)의 이행이 완료된 날부터 <strong>60일 이내</strong>에 소유권이전등기를 신청해야 합니다(부동산등기특별조치법 제2조 제1항). 기간 계산 시 초일은 산입하지 않습니다(등기선례 4-377).
    </div>

    <div class="warn-box">
      <div class="warn-title">⚡ 취득 신고 기한 — 계약 체결일부터 60일</div>
      외국인이 매매계약으로 부동산을 취득하면 <strong>계약 체결일부터 60일 이내</strong>에 관할 시·군·구청에 취득 신고를 해야 합니다(부동산거래신고법 제8조 제1항). 상속·경매 등 계약 외 원인으로 취득한 경우에는 취득일로부터 <strong>6개월 이내</strong>에 신고합니다.
    </div>

    <div class="warn-box">
      <div class="warn-title">⚠️ 토지취득 허가 없이 계약하면 무효</div>
      군사기지·문화재보호구역·생태경관보전지역 등 허가 대상 토지를 <strong>허가 없이 취득하는 계약은 효력이 발생하지 않습니다</strong>(부동산거래신고법 제9조 제3항). 무허가 계약은 2년 이하 징역 또는 2천만 원 이하 벌금에 처합니다.
    </div>` },
      { heading: `전체 절차 흐름 요약`, content: `<h3>🏠 국내 체류 외국인 (외국인등록증 소지)</h3>
    <div class="flow-grid">
      <div class="flow-card highlight-step">
        <div class="step-num">1</div>
        <div class="step-label">매매계약 체결</div>
        <div class="step-desc">계약서 원본 작성</div>
      </div>
      <div class="flow-card">
        <div class="step-num">2</div>
        <div class="step-label">허가 확인</div>
        <div class="step-desc">대상 토지면 사전 허가 신청</div>
      </div>
      <div class="flow-card highlight-step">
        <div class="step-num">3</div>
        <div class="step-label">등록번호 발급</div>
        <div class="step-desc">출입국 외국인관서</div>
      </div>
      <div class="flow-card">
        <div class="step-num">4</div>
        <div class="step-label">잔금 지급</div>
        <div class="step-desc">외국환거래법 불필요</div>
      </div>
      <div class="flow-card highlight-step">
        <div class="step-num">5</div>
        <div class="step-label">취득 신고</div>
        <div class="step-desc">시·군·구청 (60일 이내)</div>
      </div>
      <div class="flow-card">
        <div class="step-num">6</div>
        <div class="step-label">소유권이전등기</div>
        <div class="step-desc">관할 등기소 (60일 이내)</div>
      </div>
    </div>

    <h3 style="margin-top:28px;">✈️ 국내 비거주 외국인 (해외 거주 — 입국 없이 처리)</h3>
    <div class="flow-grid">
      <div class="flow-card highlight-step">
        <div class="step-num">1</div>
        <div class="step-label">매매계약 체결</div>
        <div class="step-desc">위임장 공증 후 대리인 활용</div>
      </div>
      <div class="flow-card">
        <div class="step-num">2</div>
        <div class="step-label">허가 확인</div>
        <div class="step-desc">대상 토지면 사전 허가</div>
      </div>
      <div class="flow-card highlight-step">
        <div class="step-num">3</div>
        <div class="step-label">등록번호 발급</div>
        <div class="step-desc">서울출입국관서 우편 신청 가능</div>
      </div>
      <div class="flow-card">
        <div class="step-num">4</div>
        <div class="step-label">외환 신고 후 송금</div>
        <div class="step-desc">외국환거래법 신고 (외국환은행)</div>
      </div>
      <div class="flow-card highlight-step">
        <div class="step-num">5</div>
        <div class="step-label">취득 신고</div>
        <div class="step-desc">대리인이 대행 (60일 이내)</div>
      </div>
      <div class="flow-card">
        <div class="step-num">6</div>
        <div class="step-label">소유권이전등기</div>
        <div class="step-desc">대리인이 신청 (60일 이내)</div>
      </div>
    </div>

    <div class="case-box" style="margin-top:16px;">
      <div class="case-title">⏱️ 소요 기간 안내</div>
      <p>토지취득 허가 신청 시 신고관청은 <strong>15일 이내</strong> 처리. 부동산등기용 등록번호는 신청 후 통상 수일 이내 발급. 등기 신청 후 등기관 처리는 통상 3~5 영업일 소요.</p>
      <p>해외 공증 + 아포스티유 취득에는 국가별로 2~4주 소요될 수 있으므로 계약 전부터 서류 준비를 시작하는 것을 권장합니다.</p>
    </div>` },
      { heading: `단계별 상세 절차`, content: `<!-- STEP 1 -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-number">1</div>
        <div>
          <div class="step-title">매매계약 체결</div>
          <div class="step-subtitle">계약서 원본 작성 및 검인 신청</div>
        </div>
      </div>
      <div class="step-body">
        <p>부동산 매매계약서는 원본으로 작성해야 하며, 사본은 등기원인을 증명하는 서면으로 제출할 수 없습니다(등기선례 7-31). 계약서에는 계약금·중도금·잔금 지급일이 명확히 기재되어야 합니다.</p>
        <p>계약 후 부동산 소재지를 관할하는 시장·군수·구청장에게 <strong>검인</strong>을 받아야 하며, 계약서에는 인지세법에 따른 수입인지도 첨부해야 합니다(등기예규 제1419호). 전자신청 시에는 PDF로 변환하여 공인인증서로 전자서명합니다.</p>
        <div class="law-box">
          <div class="law-label">📜 근거 법령</div>
          부동산등기특별조치법 제3조 제1항 — 계약서에 검인신청인을 표시하여 관할 시장·군수·구청장의 검인을 받아 등기소에 제출해야 함
        </div>
      </div>
    </div>

    <!-- STEP 2 -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-number">2</div>
        <div>
          <div class="step-title">토지취득 허가 신청 (해당 시)</div>
          <div class="step-subtitle">군사·문화재·생태 보호구역 등 대상 토지에 한함 — 계약 전에 신청</div>
        </div>
      </div>
      <div class="step-body">
        <p>다음 구역·지역의 토지를 취득하는 경우 <strong>계약서 작성 전</strong>에 외국인 토지취득 허가를 받아야 합니다.</p>
        <ul style="margin:10px 0 14px 20px; font-size:14.5px; line-height:2;">
          <li>군사기지 및 군사시설 보호구역 (국방목적상 필요한 섬지역 포함)</li>
          <li>문화유산 지정문화유산 및 그 보호물·보호구역</li>
          <li>자연환경보전법상 생태·경관보전지역</li>
          <li>야생동·식물특별보호구역</li>
        </ul>
        <p>신청서에 토지거래계약 당사자 간 합의서를 첨부하여 신고관청(시·군·구청)에 제출합니다. 신청을 받은 관청은 <strong>15일 이내</strong>에 허가 또는 불허가 처분을 해야 합니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚠️ 국내거소신고를 한 외국국적동포 — 일부 허가 면제</div>
          국내거소신고를 한 외국국적동포는 군사기지·군사시설 보호구역 토지 취득 시에만 허가가 필요하며, 나머지 대상 구역(문화재·생태)에 대해서는 허가 없이 신고만으로 취득이 가능합니다(재외동포법 제11조, 등기예규 제1778호 제15조 단서).
        </div>
        <p>취득하려는 토지가 허가 대상이 <em>아닌</em> 경우, 이를 소명하기 위해 <strong>토지이용계획확인서</strong>를 등기 신청 시 첨부해야 합니다(등기예규 제1778호 제15조 제3항).</p>
        <div class="law-box">
          <div class="law-label">📜 근거 법령</div>
          부동산거래신고법 제9조 — 허가 대상 토지 범위, 신청 절차, 허가 조건 및 벌칙 규정
        </div>
      </div>
    </div>

    <!-- STEP 3 -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-number">3</div>
        <div>
          <div class="step-title">부동산등기용 등록번호 발급</div>
          <div class="step-subtitle">출입국 외국인관서 방문 또는 우편 신청</div>
        </div>
      </div>
      <div class="step-body">
        <p>외국인이 소유권이전등기 등 '기입등기'를 신청하려면 반드시 부동산등기용 등록번호를 부여받아야 합니다(등기예규 제1778호 제14조). 다음 세 가지 중 하나를 사용할 수 있습니다.</p>
        <ul style="margin:10px 0 14px 20px; font-size:14.5px; line-height:2;">
          <li><strong>외국인등록번호</strong> — 체류지 관할 출입국 외국인관서에서 발급한 번호</li>
          <li><strong>부동산등기용 등록번호</strong> — 국내 체류지가 없는 경우 서울출입국 외국인관서에서 발급</li>
          <li><strong>국내거소신고번호</strong> — 외국국적동포가 거소신고를 한 경우</li>
        </ul>
        <p><strong>우편 신청도 가능합니다.</strong> 우체국에서 회신용 등기 봉투를 받아 등록번호 부여신청서·위임인 여권사본·대리인 신분증·위임장을 동봉해 서울출입국 외국인관서에 발송하면, 처리 후 등록증명서를 회신해줍니다. 발급 수수료는 1부당 1,000원입니다.</p>
        <div class="law-box">
          <div class="law-label">📜 근거 법령</div>
          부동산등기법 제49조 제1항 · 등기예규 제1778호 제14조 — 외국인의 등록번호 의무 부여 및 종류
        </div>
      </div>
    </div>

    <!-- STEP 4 -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-number">4</div>
        <div>
          <div class="step-title">잔금 지급 (비거주 외국인: 외환 신고 선행)</div>
          <div class="step-subtitle">국내 비거주 외국인은 외국환거래법상 신고 필요</div>
        </div>
      </div>
      <div class="step-body">
        <p><strong>국내 체류 외국인</strong>은 잔금을 지급할 때 별도의 외환 관련 절차가 없습니다.</p>
        <p><strong>국내 비거주 외국인</strong>은 해외에서 자금을 송금하여 부동산을 구입하는 경우, 외국환거래법에 따라 <strong>외국환은행장에게 부동산 취득신고</strong>를 먼저 해야 합니다. 이는 자금이 합법적인 해외 출처에서 반입되었음을 증명하는 절차입니다. 이 신고를 이행하지 않으면 외국환거래법 위반이 될 수 있습니다.</p>
      </div>
    </div>

    <!-- STEP 5 -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-number">5</div>
        <div>
          <div class="step-title">부동산 취득 신고</div>
          <div class="step-subtitle">관할 시·군·구청 — 계약 체결일부터 60일 이내</div>
        </div>
      </div>
      <div class="step-body">
        <p>외국인이 계약으로 부동산을 취득하면 <strong>계약 체결일부터 60일 이내</strong>에 관할 시·군·구청(부동산·토지거래 담당부서)에 외국인 부동산 취득신고서를 제출해야 합니다. 대리인이 대행할 수 있으며, 이 경우 위임장과 신고인의 신분증 사본이 필요합니다.</p>
        <p>신고 완료 후 관청으로부터 <strong>취득·계속보유 신고확인증</strong>을 발급받습니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚡ 상속·경매 등 계약 외 취득의 경우 — 6개월 이내</div>
          상속·경매, 법원의 확정판결, 법인 합병, 건축물 신축 등 계약 외의 원인으로 취득한 경우에는 <strong>취득일로부터 6개월 이내</strong>에 신고해야 합니다(부동산거래신고법 제8조 제2항).
        </div>
        <div class="law-box">
          <div class="law-label">📜 근거 법령</div>
          부동산거래신고법 제8조 — 외국인 등의 부동산 취득·계속보유 신고 의무 및 기한
        </div>
      </div>
    </div>

    <!-- STEP 6 -->
    <div class="step-block">
      <div class="step-header">
        <div class="step-number">6</div>
        <div>
          <div class="step-title">소유권이전등기 신청</div>
          <div class="step-subtitle">관할 등기소 — 잔금일로부터 60일 이내</div>
        </div>
      </div>
      <div class="step-body">
        <p>방문신청·전자신청·전자표준신청 중 선택하여 관할 등기소에 신청합니다(부동산등기규칙 제43조, 제46조). 법무사에게 위임하면 전 과정을 대행받을 수 있습니다.</p>
        <p>2025년 1월 31일부터 상속 및 유증 등기신청의 경우 <strong>전국 어느 등기소에서도 신청이 가능</strong>해졌으며(부동산등기법 제7조의3 신설), 관할 등기소가 다른 여러 부동산에 대해 등기목적·원인이 동일한 경우 일괄 신청도 가능합니다(제7조의2 신설).</p>
        <div class="law-box">
          <div class="law-label">📜 근거 법령</div>
          부동산등기특별조치법 제2조 제1항 — 잔금 지급일로부터 60일 이내 등기 신청 의무 (초일 불산입: 등기선례 4-377)
        </div>
      </div>
    </div>` },
      { heading: `첨부서류 목록`, content: `<p style="font-size:14px; color:var(--text-lt); margin-bottom:16px;">아래 서류는 소유권이전등기 신청 시 필요한 주요 서류입니다. 국적·체류 자격에 따라 달라질 수 있으므로 상담을 통해 확인하세요.</p>

    <!-- 입국한 경우 -->
    <div class="doc-section">
      <div class="doc-section-title domestic">🏠 국내 체류 외국인 (입국한 경우)</div>
      <table class="doc-table">
        <thead>
          <tr>
            <th style="width:26%">서류명</th>
            <th style="width:22%">발급 기관</th>
            <th>주의사항</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>매매계약서 원본 <span class="badge badge-must">필수</span></td>
            <td>당사자 작성</td>
            <td>사본 불가, 검인 필수, 수입인지 첩부 (등기선례 7-31, 등기예규 제1419호)</td>
          </tr>
          <tr>
            <td>부동산등기용 등록번호 등록증명서 <span class="badge badge-must">필수</span></td>
            <td>출입국 외국인관서</td>
            <td>국내 체류 시 외국인등록사실증명으로 대체 가능 (등기선례 7-182)</td>
          </tr>
          <tr>
            <td>주소를 증명하는 서면 <span class="badge badge-must">필수</span></td>
            <td>출입국 외국인관서</td>
            <td>외국인등록증 또는 외국인등록사실증명 제출</td>
          </tr>
          <tr>
            <td>토지취득허가증 <span class="badge badge-cond">해당 시</span></td>
            <td>관할 시·군·구청</td>
            <td>허가 대상 구역 토지 취득 시만 필요. 비대상 토지는 토지이용계획확인서로 소명</td>
          </tr>
          <tr>
            <td>토지이용계획확인서 <span class="badge badge-cond">해당 시</span></td>
            <td>정부24 또는 시·군·구청</td>
            <td>허가 대상이 아님을 소명하기 위해 첨부 (등기예규 제1778호 제15조 제3항)</td>
          </tr>
          <tr>
            <td>번역문 <span class="badge badge-trans">외국어 서류 시</span></td>
            <td>번역인 작성</td>
            <td>번역인이 원문과 다름없다는 뜻, 성명·주소 기재 후 날인·서명. 번역인 자격 제한 없음 (등기선례 1-22)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 미입국인 경우 -->
    <div class="doc-section" style="margin-top:24px;">
      <div class="doc-section-title overseas">✈️ 해외 거주 외국인 (미입국인 경우)</div>
      <table class="doc-table">
        <thead>
          <tr>
            <th style="width:26%">서류명</th>
            <th style="width:22%">발급처·방법</th>
            <th>주의사항</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>매매계약서 원본 <span class="badge badge-must">필수</span></td>
            <td>대리인이 작성 (위임)</td>
            <td>대리인이 취득 대행 시 위임장 필요, 검인 필수</td>
          </tr>
          <tr>
            <td>위임장 <span class="badge badge-must">필수</span></td>
            <td>본인 작성 후 공증</td>
            <td>재외공관 공증 또는 아포스티유 협약국의 경우 아포스티유 첨부 <span class="badge badge-apost">아포스티유</span></td>
          </tr>
          <tr>
            <td>부동산등기용 등록번호 등록증명서 <span class="badge badge-must">필수</span></td>
            <td>서울출입국관서<br>(우편 신청 가능)</td>
            <td>등록부여신청서, 여권사본, 위임장 동봉. 수수료 1,000원/부</td>
          </tr>
          <tr>
            <td>주소를 증명하는 서면 <span class="badge badge-must">필수</span></td>
            <td>재외공관 또는<br>본국 발급</td>
            <td>거주사실증명서 등. 외국어 서류는 번역문 첨부 필요. 아포스티유 또는 재외공관 공증 <span class="badge badge-apost">아포스티유</span></td>
          </tr>
          <tr>
            <td>토지취득허가증 <span class="badge badge-cond">해당 시</span></td>
            <td>관할 시·군·구청</td>
            <td>대리인이 대행 신청 가능. 합의서·위임장 첨부</td>
          </tr>
          <tr>
            <td>번역문 <span class="badge badge-trans">외국어 서류 시</span></td>
            <td>번역인 작성</td>
            <td>모든 외국어 서류에 번역문 첨부 필요. 번역 인증받은 경우 번역인 날인 불필요 (등기예규 제1778호 제4조 제2항)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="country-box" style="margin-top:16px;">
      <div class="country-title">🌏 아포스티유 협약 비가입국의 경우</div>
      미국·일본·프랑스 등 헤이그 협약 가입국 국민은 공문서에 아포스티유(Apostille)를 첨부하면 별도의 영사 인증 없이 한국에서 효력이 인정됩니다. 그러나 <strong>아포스티유 미가입국</strong>의 경우 해당 국가 주재 한국 재외공관에서 영사 인증을 받아야 합니다. 미국인의 경우 주소 공증 서면(거주사실증명서)에, 일본인의 경우 주민표에 아포스티유를 부착하는 방식이 일반적입니다.
    </div>` },
      { heading: `비용 안내`, content: `<p>구체적인 금액은 취득 금액·물건 종류·지역에 따라 다르므로 <strong>정확한 금액은 표시하지 않습니다.</strong> 아래 항목과 납부 횟수를 참고하시고, 위텍스(www.wetax.go.kr) 또는 법무사를 통해 정확한 세액을 확인하시기 바랍니다.</p>
    <div class="cost-grid">
      <div class="cost-card">
        <div class="cost-name">취득세</div>
        <div class="cost-note">1회 납부<br>취득 전 납부 후 등기 신청</div>
      </div>
      <div class="cost-card">
        <div class="cost-name">지방교육세</div>
        <div class="cost-note">1회 납부<br>취득세와 함께 납부</div>
      </div>
      <div class="cost-card">
        <div class="cost-name">농어촌특별세</div>
        <div class="cost-note">해당 시 납부<br>85㎡ 초과 주택 등</div>
      </div>
      <div class="cost-card">
        <div class="cost-name">등기신청수수료</div>
        <div class="cost-note">1회 납부<br>부동산등기법에 따른 수수료</div>
      </div>
      <div class="cost-card">
        <div class="cost-name">인지세</div>
        <div class="cost-note">계약서 1회 첩부<br>계약 금액에 따라 달라짐</div>
      </div>
      <div class="cost-card">
        <div class="cost-name">등록번호 발급수수료</div>
        <div class="cost-note">1,000원/부<br>출입국관서 발급 시</div>
      </div>
    </div>
    <div class="law-box">
      <div class="law-label">💡 세액 조회 방법</div>
      위텍스(www.wetax.go.kr) → 취득세 → 부동산 취득세 간편 계산기에서 계약금액·건물 종류 입력 후 세액 조회 가능
    </div>` },
      { heading: `관련 판례·예규`, content: `<div class="law-box">
      <div class="law-label">📜 등기선례 3-932 (1992. 9. 21.) — 잔금 지급일 기준</div>
      부동산등기특별조치법 제2조 제1항의 "반대급부의 이행이 완료된 날"이란, 계약서상의 잔금지급 기일이 아닌 <strong>실제 잔금이 지급된 날</strong>을 의미한다. 따라서 실제 잔금지급일로부터 60일 내에 소유권이전등기를 신청하면 된다.
    </div>
    <div class="law-box">
      <div class="law-label">📜 등기선례 4-377 (1994. 6. 20.) — 초일 불산입</div>
      60일 기간 계산 시, 그 기간이 정해진 날 오전 영시부터 시작하지 않는 한 <strong>초일은 산입하지 않는다.</strong>
    </div>
    <div class="law-box">
      <div class="law-label">📜 등기선례 7-31 (2004. 4. 29.) — 계약서 원본만 가능</div>
      매매계약서 사본은 등기원인을 증명하는 서면으로 제출할 수 없으며, <strong>원본만이 가능</strong>하다.
    </div>
    <div class="law-box">
      <div class="law-label">📜 등기선례 7-182 — 외국인등록사실증명 활용</div>
      체류지 관할 출입국관리사무소에 외국인등록을 한 경우, 출입국관리사무소장 등이 발급한 외국인등록사실증명을 <strong>부동산등기용 등록번호 및 주소 증명으로 제출</strong>할 수 있다.
    </div>
    <div class="law-box">
      <div class="law-label">📜 등기선례 제200604-8호 (2006. 4. 20.) — 외국 법인의 농지 취득 불가</div>
      현행 농지법에 따라 농지는 원칙적으로 자기 농업경영에 이용하는 자만 취득 가능하므로, <strong>외국 법인이 농지에 대해 소유권이전등기를 신청할 수 없다.</strong>
    </div>` },
      { heading: `자주 발생하는 문제와 해결책`, content: `<div class="trouble-item">
      <div class="trouble-q">⚠️ 허가 대상 토지 여부를 확인하지 않고 계약부터 체결한 경우</div>
      <div class="trouble-a">허가 대상 토지에 대해 허가 없이 체결한 계약은 효력이 없습니다. 계약 전에 반드시 토지이용계획확인서를 통해 군사시설보호구역·문화재보호구역·생태보전지역 여부를 확인하고, 해당 시에는 사전에 토지취득 허가를 받아야 합니다.</div>
    </div>

    <div class="trouble-item">
      <div class="trouble-q">⚠️ 등기 신청 시 등록번호 등록증명서 대신 여권 사본을 제출한 경우</div>
      <div class="trouble-a">여권 사본만으로는 부동산등기용 등록번호를 증명할 수 없습니다. 출입국 외국인관서에서 발급받은 등록번호 등록증명서 또는 외국인등록사실증명을 반드시 제출해야 합니다. 보정명령의 대상이 됩니다.</div>
    </div>

    <div class="trouble-item">
      <div class="trouble-q">⚠️ 매매계약서 사본을 제출한 경우</div>
      <div class="trouble-a">매매계약서 사본은 등기원인 증명서류로 인정되지 않습니다(등기선례 7-31). 반드시 원본을 제출해야 하며, 분실한 경우 재작성·재검인이 필요합니다. 전자신청의 경우 PDF 파일로 변환하여 당사자 모두 전자서명해야 합니다.</div>
    </div>

    <div class="trouble-item">
      <div class="trouble-q">🌏 국가별로 주소 증명 서류가 달라 어떤 서류를 제출해야 할지 모르는 경우</div>
      <div class="trouble-a">미국인은 공증사무소 발행 거주사실증명서(아포스티유 첨부), 일본인은 주민표(아포스티유 첨부)를 일반적으로 사용합니다. 캐나다·호주·영국 등 아포스티유 가입국은 해당 국가의 지정 기관에서 아포스티유를 취득하면 됩니다. 중국·베트남 등 비가입국은 재외공관(한국대사관·영사관) 영사 인증을 받아야 합니다. 국적별 구체적인 서류 목록은 법무사 상담을 통해 확인하시기 바랍니다.</div>
    </div>

    <div class="trouble-item">
      <div class="trouble-q">⚠️ 번역문 제출 시 번역인 날인이 누락된 경우</div>
      <div class="trouble-a">번역문에는 번역인이 원문과 다름없다는 뜻, 번역인의 성명·주소를 기재하고 날인 또는 서명해야 합니다. 또한 번역인의 신분증 사본을 제공해야 합니다. 번역문을 인증받아 제출하는 경우에는 날인이 불필요합니다(등기예규 제1778호 제4조 제2항). 번역인의 자격에는 제한이 없습니다(등기선례 1-22).</div>
    </div>` },
      { heading: `자주 묻는 질문 (Q&A)`, content: `<div class="qa-item">
      <div class="qa-question">
        <span class="q-mark">Q</span>
        미국 시민권자인데 한국 아파트를 살 수 있나요? 토지취득 허가가 필요한가요?
      </div>
      <div class="qa-answer">
        가능합니다. 미국 시민권자는 외국인으로서 한국 부동산을 자유롭게 매수할 수 있습니다. 일반 아파트는 토지취득 허가 대상이 아니므로 허가 없이 계약 후 취득 신고만 하면 됩니다. 다만 ① 부동산등기용 등록번호 발급, ② 계약 체결일로부터 60일 이내 취득 신고, ③ 잔금 지급 후 60일 이내 소유권이전등기 신청의 세 가지 절차가 내국인보다 추가됩니다.
        <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-question">
        <span class="q-mark">Q</span>
        ⚡ 취득 신고 기한인 60일을 넘기면 어떻게 되나요?
      </div>
      <div class="qa-answer">
        부동산거래신고법 제8조를 위반하여 신고를 하지 않거나 거짓으로 신고한 경우 100만 원 이하의 과태료가 부과될 수 있습니다. 또한 등기 신청 자체가 불가능해질 수 있으므로 기한 내 신고를 반드시 이행하시기 바랍니다. 상속·경매 등 계약 외 취득의 경우에는 취득일로부터 6개월 이내이므로 기한을 혼동하지 않도록 주의하십시오.
        <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-question">
        <span class="q-mark">Q</span>
        해외에 있어서 입국하기 어렵습니다. 대리인을 통해 전 과정을 처리할 수 있나요?
      </div>
      <div class="qa-answer">
        가능합니다. 위임장을 공증(재외공관 또는 아포스티유)하여 국내 법무사에게 위임하면, 매매계약 체결부터 취득 신고, 등기신청까지 전 과정을 대행받을 수 있습니다. 부동산등기용 등록번호 발급도 우편 신청으로 처리할 수 있습니다. 단, 해외 공증·아포스티유 취득에 수 주가 소요될 수 있으므로 계약 전부터 서류 준비를 시작하는 것이 좋습니다.
        <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-question">
        <span class="q-mark">Q</span>
        일본인인데 한국에 체류 중입니다. 내국인과 서류가 많이 다른가요?
      </div>
      <div class="qa-answer">
        기본 절차는 내국인과 동일하지만 세 가지가 다릅니다. ① 주민등록번호 대신 외국인등록번호(외국인등록사실증명으로 증명)를 사용합니다. ② 계약 후 60일 이내에 취득 신고를 해야 합니다. ③ 주소 증명 서류로 외국인등록증 또는 외국인등록사실증명을 제출합니다. 국내 체류 중이므로 아포스티유나 재외공관 공증은 필요하지 않습니다.
        <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-question">
        <span class="q-mark">Q</span>
        재외국민(영주권자)도 이 취득 절차를 따라야 하나요?
      </div>
      <div class="qa-answer">
        아닙니다. 재외국민은 한국 국적을 유지하고 있으므로 부동산 취득 신고 의무가 없고, 토지취득 허가도 받지 않아도 됩니다. 부동산등기용 등록번호 대신 주민등록번호를 그대로 사용합니다. 다만 주소증명서류 등 일부 서류가 내국인과 달라집니다. 재외국민의 구체적인 취득 절차는 별도 페이지를 참고하세요.
        <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-question">
        <span class="q-mark">Q</span>
        부동산등기용 등록번호와 외국인등록번호는 같은 건가요?
      </div>
      <div class="qa-answer">
        다릅니다. 외국인등록번호는 국내 체류 중 출입국관리법에 따라 발급되는 번호이고, 부동산등기용 등록번호는 국내에 체류지가 없는 외국인이 등기 목적으로만 별도 신청하는 번호입니다. 국내 체류 중인 외국인은 외국인등록번호로 등기 신청이 가능하므로 별도의 부동산등기용 등록번호를 신청할 필요가 없습니다. 외국국적동포(F-4 소지자)가 국내거소신고를 한 경우에는 국내거소신고번호를 사용할 수 있습니다.
        <span class="caution">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</span>
      </div>
    </div>` },
    ],
    laws: [
      { name: `등기선례 3-932 (1992. 9. 21.) — 잔금 지급일 기준`, desc: `` },
      { name: `등기선례 4-377 (1994. 6. 20.) — 초일 불산입`, desc: `` },
      { name: `등기선례 7-31 (2004. 4. 29.) — 계약서 원본만 가능`, desc: `` },
      { name: `등기선례 7-182 — 외국인등록사실증명 활용`, desc: `` },
      { name: `등기선례 제200604-8호 (2006. 4. 20.) — 외국 법인의 농지 취득 불가`, desc: `` },
    ],
    forms: [],
  },
  {
    id: 'fi-03',
    title: "외국인 토지취득 허가— 허가 대상 지역과 신청 방법",
    meta: "한국에서 토지를 취득하려는 외국인이라면 반드시 확인해야 할 허가 절차",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-item">
      <span class="icon">✓</span>
      <span>외국 국적을 보유한 개인·법인으로 한국의 토지(임야, 농지, 나대지 등)를 매수하려 하는 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>매매 계약서 작성 전에 허가가 필요한 지역인지 먼저 확인하고 싶은 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>군사시설 보호구역, 문화재 보호구역, 생태·경관보전지역 인근의 토지 취득을 검토 중인 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>F-4 비자(재외동포) 소지자로 국내거소신고 여부에 따른 허가 필요 여부를 확인하려는 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>허가 없이 계약했을 때의 법적 효력과 제재 내용을 확인하고 싶은 분</span>
    </div>
  </div>

  <!-- 1. 핵심 요약 -->
  <div class="section">` },
      { heading: `핵심 요약`, content: `<div class="summary-box">
      <div class="box-title">📌 이 상황에서 법은 이렇게 정하고 있습니다</div>
      <p>외국인이 한국의 <strong>일반 토지</strong>를 취득할 때는 취득신고만으로 가능하지만, <strong>군사시설·문화재·생태 보호구역 등 4가지 허가 대상 지역</strong>의 토지를 취득하려면 <strong>계약 체결 전에 반드시 시장·군수·구청장의 사전 허가</strong>를 받아야 합니다.</p>
      <p>허가 없이 체결한 계약은 <strong>무효</strong>가 되며(부동산 거래신고 등에 관한 법률 제9조 제3항), 2년 이하의 징역 또는 2천만 원 이하의 벌금에 처해질 수 있습니다. 재외국민(영주권자)은 대한민국 국적을 보유하고 있으므로 이 규정이 적용되지 않습니다.</p>
    </div>
  </div>

  <!-- 2. 상세 내용 -->
  <div class="section">` },
      { heading: `상세 내용`, content: `<!-- 2-1. 기본 개념과 법적 근거 -->
    <h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin-bottom:14px;">2-1. 기본 개념과 법적 근거</h3>

    <div class="law-box">
      <span class="law-tag">부동산 거래신고 등에 관한 법률 제9조 제1항</span>
      <p>외국인등이 대통령령으로 정하는 구역·지역 안의 토지를 취득하는 계약을 체결하려는 경우에는 계약을 체결하기 전에 대통령령으로 정하는 바에 따라 시장·군수 또는 구청장으로부터 허가를 받아야 한다.</p>
    </div>

    <div class="law-box">
      <span class="law-tag">등기예규 제1778호 제15조 제1항</span>
      <p>외국인등이 허가 대상 토지(대지권 포함)를 취득하는 계약을 체결하고 그에 따른 소유권이전등기를 신청하는 경우에는 부동산 거래신고 등에 관한 법률 제9조제1항에 따른 외국인 토지취득허가증을 첨부정보로서 제공하여야 한다.</p>
    </div>

    <p style="font-size:14px; color:#3a3a3a; margin: 16px 0 20px; line-height:1.8;">
      2008년 12월 26일 법 개정 이전에는 외국인의 토지 취득이 극히 제한적으로만 허용되었으나, 이후 일반 토지는 <strong>신고만으로 취득 가능</strong>하도록 완화되었습니다. 다만 군사·문화재·생태 보호 목적의 특정 지역만큼은 여전히 사전 허가를 요합니다.
    </p>

    <!-- 2-2. 허가 대상 지역 -->
    <h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin: 24px 0 14px;">2-2. 허가 대상 토지 (4가지)</h3>

    <div class="zone-grid">
      <div class="zone-card">
        <div class="zone-num">허가 구역 ①</div>
        <h4>군사기지·군사시설 보호구역</h4>
        <p>군사기지 및 군사시설 보호법 제2조제6호에 따른 보호구역. 국방 목적상 필요한 섬지역으로서 국토교통부장관이 고시하는 지역도 포함.</p>
        <div class="law-ref">부동산거래법 제9조제1항제1호, 등기예규 제1778호 제15조제1항제1호</div>
      </div>
      <div class="zone-card">
        <div class="zone-num">허가 구역 ②</div>
        <h4>문화유산 보호구역</h4>
        <p>문화유산의 보존 및 활용에 관한 법률 제2조제3항에 따른 지정문화유산 및 이를 위한 보호물·보호구역.</p>
        <div class="law-ref">부동산거래법 제9조제1항제2호</div>
      </div>
      <div class="zone-card">
        <div class="zone-num">허가 구역 ③</div>
        <h4>생태·경관보전지역</h4>
        <p>자연환경보전법 제2조제12호에 따른 생태·경관보전지역. 주요 생태계 보전을 위해 지정된 구역.</p>
        <div class="law-ref">부동산거래법 제9조제1항제3호</div>
      </div>
      <div class="zone-card">
        <div class="zone-num">허가 구역 ④</div>
        <h4>야생동·식물 특별보호구역</h4>
        <p>야생동·식물보호법 제27조에 따른 야생동·식물특별보호구역. 멸종위기 동·식물 서식지 보호 목적.</p>
        <div class="law-ref">부동산거래법 제9조제1항제4호</div>
      </div>
    </div>

    <!-- 외국인/재외국민/외국국적동포 구분 -->
    <h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin: 28px 0 14px;">2-3. 신분별 허가 적용 여부</h3>

    <table class="compare-table">
      <thead>
        <tr>
          <th style="width:22%">구분</th>
          <th style="width:20%">①군사구역</th>
          <th style="width:20%">②~④환경구역</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>외국인<br>(외국국적 개인)</strong></td>
          <td class="center"><span class="badge badge-허가">허가 필요</span></td>
          <td class="center"><span class="badge badge-허가">허가 필요</span></td>
          <td>4가지 허가 구역 모두 적용</td>
        </tr>
        <tr>
          <td><strong>외국국적동포<br>(F-4 비자 등)</strong><br><small>국내거소신고 완료</small></td>
          <td class="center"><span class="badge badge-허가">허가 필요</span></td>
          <td class="center"><span class="badge badge-신고">신고만 가능</span></td>
          <td>②~④는 국내 국민과 동등한 권리 (재외동포법 제11조제1항)</td>
        </tr>
        <tr>
          <td><strong>재외국민<br>(영주권자)</strong></td>
          <td class="center"><span class="badge badge-제외">적용 제외</span></td>
          <td class="center"><span class="badge badge-제외">적용 제외</span></td>
          <td>대한민국 국적 보유자 → 부동산거래법 적용 대상 아님</td>
        </tr>
      </tbody>
    </table>

    <div class="country-box">
      <strong>🌏 외국국적동포(F-4 비자) 특례 안내</strong><br>
      국내거소신고를 마친 외국국적동포는 군사기지·군사시설 보호구역(①) 외의 구역(②③④)에서는 대한민국 국민과 동등한 권리를 가집니다. 다만 국내거소신고를 하지 않은 외국국적동포는 일반 외국인과 동일하게 4가지 구역 모두에서 허가가 필요합니다(재외동포의 출입국과 법적 지위에 관한 법률 제11조제1항, 등기예규 제1778호 제15조제1항 단서).
    </div>

    <!-- 2-4. 신청 절차 -->
    <h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin: 28px 0 14px;">2-4. 토지취득 허가 신청 절차</h3>

    <div class="warn-box">
      <div class="warn-title">⚡ 핵심 주의: 허가는 계약 체결 전에 받아야 합니다</div>
      허가 신청은 반드시 <strong>계약서 작성 전</strong>에 해야 합니다. 계약을 먼저 체결한 후 허가를 신청하는 것은 법적으로 허용되지 않으며, 허가 전에 체결한 계약은 무효입니다.
    </div>

    <div style="display:flex; align-items:center; flex-wrap:wrap; gap:8px; margin: 20px 0;">
      <div class="step-item" style="min-width:120px;">
        <div class="step-num">①</div>
        <div class="step-label">허가 대상 여부 확인</div>
        <div class="step-desc">취득 예정 토지가 4가지 허가 구역에 해당하는지 확인</div>
      </div>
      <div style="color:var(--gold); font-size:20px; padding:0 4px;">▶</div>
      <div class="step-item" style="min-width:120px;">
        <div class="step-num">②</div>
        <div class="step-label">합의서 작성</div>
        <div class="step-desc">매도인과 토지취득계약 합의서 작성 (허가 조건부)</div>
      </div>
      <div style="color:var(--gold); font-size:20px; padding:0 4px;">▶</div>
      <div class="step-item" style="min-width:120px;">
        <div class="step-num">③</div>
        <div class="step-label">허가신청서 제출</div>
        <div class="step-desc">외국인 토지취득 허가신청서 + 합의서를 신고관청(시·군·구청)에 제출</div>
      </div>
      <div style="color:var(--gold); font-size:20px; padding:0 4px;">▶</div>
      <div class="step-item" style="min-width:120px;">
        <div class="step-num">④</div>
        <div class="step-label">허가증 수령</div>
        <div class="step-desc">신고관청이 15일 이내에 허가·불허가 처분 및 허가증 발급</div>
      </div>
      <div style="color:var(--gold); font-size:20px; padding:0 4px;">▶</div>
      <div class="step-item" style="min-width:120px;">
        <div class="step-num">⑤</div>
        <div class="step-label">매매계약 체결</div>
        <div class="step-desc">허가증 수령 후 정식 매매계약 체결 및 등기 신청</div>
      </div>
    </div>

    <p style="font-size:13.5px; color:#4a4a4a; margin-bottom:16px; line-height:1.75;">
      <strong>대리인 신청 가능:</strong> 외국인의 위임을 받은 대리인이 허가신청서 제출을 대행할 수 있습니다. 이 경우 ①외국인의 서명 또는 날인이 있는 위임장과 ②신분증명서 사본을 함께 제출해야 합니다(부동산거래신고법 시행규칙 제7조제4항).
    </p>

    <!-- 2-5. 사례 -->
    <h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin: 28px 0 14px;">2-5. 실제 사례</h3>

    <div class="case-box">
      <span class="case-tag">사례 1 — 허가 필요한 경우</span>
      <p>미국 시민권자 A씨는 강원도 철원군 소재 임야 500㎡를 매수하려 합니다. 해당 토지가 군사기지 및 군사시설 보호법상 군사시설 보호구역에 해당한다면, A씨는 계약서 작성 전에 철원군청에 외국인 토지취득 허가신청서와 매도인과의 합의서를 제출하여 허가증을 먼저 받아야 합니다. 허가 없이 먼저 계약을 체결하면 그 계약은 무효가 되며 형사 처벌 대상이 됩니다.</p>
    </div>

    <div class="case-box">
      <span class="case-tag">사례 2 — 외국국적동포(F-4 비자) 특례</span>
      <p>재미동포 B씨는 F-4(재외동포) 비자로 입국하여 국내거소신고를 완료한 상태입니다. 경기도 양평군의 생태·경관보전지역(③)에 해당하는 농지를 매수하려 합니다. B씨는 국내거소신고를 완료한 외국국적동포이므로, 군사 보호구역(①) 외의 지역은 대한민국 국민과 동일하게 취급됩니다. 따라서 생태보전지역의 토지 취득에 별도 허가 없이 신고만으로 계약을 체결할 수 있습니다.</p>
    </div>

    <div class="case-box">
      <span class="case-tag">사례 3 — 재외국민 적용 제외</span>
      <p>캐나다 영주권자 C씨(대한민국 국적 보유)는 제주도의 자연환경보전지역 내 토지를 매수하려 합니다. C씨는 재외국민으로서 대한민국 국적을 보유하고 있어 부동산거래신고법상 '외국인'에 해당하지 않습니다. 따라서 외국인 토지취득 허가 규정이 적용되지 않으며, 내국인과 동일한 절차로 토지를 취득할 수 있습니다.</p>
    </div>
  </div>

  <!-- 3. 관련 판례·예규 -->
  <div class="section">` },
      { heading: `관련 판례·예규`, content: `<div class="law-box">
      <span class="law-tag">등기예규 제1778호 제15조 (첨부서류 — 토지취득허가증)</span>
      <p>외국인등이 허가 대상 토지를 취득하는 계약을 체결하고 소유권이전등기를 신청할 때 반드시 외국인 토지취득허가증을 첨부정보로 제공해야 함을 규정. 외국국적동포의 국내거소신고 여부에 따른 적용 제외도 명시.</p>
    </div>

    <div class="law-box">
      <span class="law-tag">등기예규 제1778호 제16조 (무허가 등기의 처리)</span>
      <p>허가 대상 토지에 대해 허가를 받지 않은 채 소유권이전등기가 마쳐졌더라도, 이는 부동산등기법 제29조제2호에 해당하지 않으므로 등기관이 직권으로 말소할 수 없다고 규정. 허가 없이 등기가 마쳐진 경우라도 등기 자체는 유효하나, 계약의 효력은 별도로 다투어야 함.</p>
    </div>

    <div class="law-box">
      <span class="law-tag">재외동포의 출입국과 법적 지위에 관한 법률 제11조 제1항</span>
      <p>국내거소신고를 한 외국국적동포는 부동산 취득·보유·이용 및 처분에서 대한민국 국민과 동등한 권리를 가진다. 다만 군사기지 및 군사시설 보호구역(부동산거래법 제9조제1항제1호)은 이 특례에서 제외되어 외국국적동포도 허가를 받아야 한다.</p>
    </div>
  </div>

  <!-- 4. 주의사항 -->
  <div class="section">` },
      { heading: `주의사항`, content: `<div class="warn-box">
      <div class="warn-title">⚡ 허가 신청 시점 — 계약 전 필수</div>
      토지취득 허가 신청은 <strong>계약 체결 전(계약서 작성 전)</strong>에 해야 합니다. 계약 후 허가를 신청하는 구조는 인정되지 않습니다. 허가 여부 불명 상태에서는 <strong>조건부 합의서</strong>(허가를 받을 경우 계약을 체결한다는 내용)를 작성하여 허가 신청 시 함께 제출합니다.
    </div>

    <div class="warn-box">
      <div class="warn-title">⚠️ 무허가 계약의 법적 효과</div>
      허가 없이 체결한 토지취득계약은 <strong>효력이 발생하지 않습니다</strong>(부동산거래법 제9조 제3항). 무허가 계약을 체결하거나 부정한 방법으로 허가를 받아 계약을 체결한 외국인등은 <strong>2년 이하의 징역 또는 2천만 원 이하의 벌금</strong>에 처해집니다(부동산거래법 제26조).
    </div>

    <div class="warn-box" style="background:#fff8e8; border-color:#a07000; color:#4a3000;">
      <div class="warn-title">ℹ️ 일반 토지 vs. 허가 대상 토지 구분 방법</div>
      매수 예정 토지가 허가 대상 지역에 해당하는지 여부는 해당 토지 소재지 관할 시·군·구청 또는 국토교통부 토지이용규제정보서비스(luris.molit.go.kr)에서 확인할 수 있습니다. 확인 전에 계약서에 서명하지 않도록 주의해야 합니다.
    </div>

    <div class="country-box">
      <strong>🌏 외국국적동포(F-4 비자) 국내거소신고 여부에 따른 차이</strong><br>
      F-4 비자로 입국한 외국국적동포는 <strong>국내거소신고를 완료한 경우</strong>에만 군사 보호구역(①) 외의 환경 보호구역(②③④)에서 허가 없이 토지를 취득할 수 있습니다. 국내거소신고를 하지 않은 외국국적동포는 일반 외국인과 동일하게 4가지 구역 모두에서 사전 허가가 필요하다는 점에 유의하세요.
    </div>
  </div>

  <!-- 5. Q&A -->
  <div class="section">` },
      { heading: `자주 묻는 질문 (Q&A)`, content: `<div class="qa-item">
      <div class="qa-q">한국 아파트를 매수하는 외국인도 토지취득 허가가 필요한가요?</div>
      <div class="qa-a">
        일반적으로 아파트 등 건물의 경우 허가 대상이 아니라 신고만으로 취득이 가능합니다. 그러나 아파트 단지 부지가 군사기지 보호구역 등 허가 대상 지역에 위치한 경우에는 그 대지권(건물과 함께 이전되는 토지 지분)에 대해서도 허가가 필요합니다(등기예규 제1778호 제15조제1항 — "대지권 포함" 명시). 실무상 아파트 대지권이 허가 대상 지역에 해당하는 경우는 드물지만, 취득 전 확인이 필요합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">허가를 신청하면 반드시 허가를 받을 수 있나요?</div>
      <div class="qa-a">
        신고관청은 관계 행정기관의 장과 협의를 거쳐, 외국인이 해당 구역의 토지를 취득하는 것이 그 구역의 지정목적 달성에 지장을 주지 않는다고 인정되는 경우에는 허가를 하여야 합니다(부동산거래법 제9조 제2항). 즉, 지정목적에 지장이 없다면 허가가 이루어집니다. 반면 군사 목적 달성에 지장을 줄 우려가 있거나 생태계 보전에 문제가 될 경우에는 불허가 처분이 내려질 수 있습니다. 신청 후 15일 이내에 허가·불허가 처분이 결정됩니다(부동산거래법 시행령 제6조 제3항).
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">허가 없이 등기가 마쳐진 경우, 그 등기는 말소되나요?</div>
      <div class="qa-a">
        결론적으로 등기관이 직권으로 말소하지는 않습니다. 등기예규 제1778호 제16조에 따르면, 허가 대상 토지에 대해 허가를 받지 않은 채 소유권이전등기가 이루어졌더라도 이는 부동산등기법 제29조제2호(무효인 등기원인에 의한 등기)에 해당하지 않으므로 등기관은 이를 직권으로 말소할 수 없습니다. 다만 무허가 계약 자체는 무효이므로, 매도인 또는 이해관계인이 소송을 통해 등기 말소를 청구할 수 있습니다. 결과적으로 등기는 남아있더라도 법적 분쟁에 처할 수 있는 위험한 상황이 됩니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">⚡ 허가신청에 기한이 있나요? 계약 전 어느 시점에 신청해야 하나요?</div>
      <div class="qa-a">
        허가 신청은 계약 체결 전, 즉 계약서를 작성하기 전에 해야 합니다. 법령상 정해진 최소 선행기간은 없으나, 신청 후 신고관청의 처리 기한이 15일이므로 계약 일정을 그에 맞추어 조정해야 합니다. 실무적으로는 먼저 매도인과 '허가를 받을 경우 계약을 체결한다'는 내용의 합의서를 작성하여 허가신청서에 첨부한 뒤, 허가증 수령 후 정식 매매계약을 체결하는 방식으로 진행합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">재외국민(한국 국적자, 캐나다 영주권)도 허가를 받아야 하나요?</div>
      <div class="qa-a">
        아닙니다. 재외국민은 대한민국 국적을 보유하고 있으므로 부동산 거래신고 등에 관한 법률상 '외국인등'에 해당하지 않습니다. 따라서 토지취득허가 규정이 적용되지 않으며, 내국인과 동일한 절차로 토지를 취득할 수 있습니다. 다만 재외국민의 경우 재외국민등록사실증명, 재외공관 공증 위임장 등 별도의 첨부서류가 요구될 수 있습니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">외국인 법인도 토지취득 허가가 필요한가요?</div>
      <div class="qa-a">
        네, 부동산 거래신고 등에 관한 법률상 '외국인등'에는 외국 국적 개인뿐 아니라 ①외국법령에 따라 설립된 법인 ②사원·이사의 1/2 이상이 외국인인 법인 ③외국인·외국법인이 자본금 또는 의결권의 1/2 이상을 보유한 법인 ④외국 정부 ⑤국제기구도 포함됩니다(부동산거래법 제2조제4호). 이러한 법인이 허가 대상 토지를 취득하려는 경우 동일하게 사전 허가를 받아야 합니다. 국내법에 따라 설립된 법인이라도 외국인 지분이 많은 경우 허가 대상이 될 수 있어, 등기관이 진술서 제출을 요구하기도 합니다(등기예규 제1778호 제17조).
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>
  </div>

  <!-- 6. 다음으로 확인할 내용 -->
  <div class="section">` },
    ],
    laws: [
      { name: `등기예규 제1778호 제15조 (첨부서류 — 토지취득허가증)`, desc: `외국인등이 허가 대상 토지를 취득하는 계약을 체결하고 소유권이전등기를 신청할 때 반드시 외국인 토지취득허가증을 첨부정보로 제공해야 함을 규정. 외국국적동포의 국내거소신고 여부에 따른 적용 제외도 명시.` },
      { name: `등기예규 제1778호 제16조 (무허가 등기의 처리)`, desc: `허가 대상 토지에 대해 허가를 받지 않은 채 소유권이전등기가 마쳐졌더라도, 이는 부동산등기법 제29조제2호에 해당하지 않으므로 등기관이 직권으로 말소할 수 없다고 규정. 허가 없이 등기가 마쳐진 경우라도 등기 자체는 유효하나, 계약의 효력은 별도로 다투어야 함.` },
      { name: `재외동포의 출입국과 법적 지위에 관한 법률 제11조 제1항`, desc: `국내거소신고를 한 외국국적동포는 부동산 취득·보유·이용 및 처분에서 대한민국 국민과 동등한 권리를 가진다. 다만 군사기지 및 군사시설 보호구역(부동산거래법 제9조제1항제1호)은 이 특례에서 제외되어 외국국적동포도 허가를 받아야 한다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-04',
    title: "외국인 부동산 취득·보유 신고의무와 방법",
    meta: "계약 체결일부터 60일 — 기한 안에 신고하지 않으면 과태료가 부과됩니다",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-item">
      <span class="icon">✓</span>
      <span>외국 국적을 보유한 개인·법인으로 한국의 부동산(아파트·토지·상가 등)을 매수 또는 증여받은 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>외국인으로서 상속·경매·확정판결 등 계약 외의 원인으로 한국 부동산을 취득하게 된 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>한국 국적자였다가 외국 국적을 취득하여 외국인으로 변경된 후 기존에 보유하던 토지를 계속 소유하려는 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>신고 기한(60일 / 6개월)이 얼마 남지 않아 빠르게 처리가 필요한 분</span>
    </div>
    <div class="checklist-item">
      <span class="icon">✓</span>
      <span>한국에 입국하지 않고 해외에서 취득신고를 대리인을 통해 처리하려는 분</span>
    </div>
  </div>

  <!-- 1. 이 절차가 왜 필요한가 -->
  <div class="section">` },
      { heading: `1. 이 절차가 왜 필요한가`, content: `<div class="summary-box">
      <div class="box-title">📌 외국인의 취득 신고는 법적 의무입니다</div>
      <p>외국인(외국인등)이 대한민국 안의 부동산을 취득하면 <strong>부동산 거래신고 등에 관한 법률 제8조</strong>에 따라 반드시 신고관청(시·군·구청)에 취득신고를 해야 합니다. 이 신고는 부동산등기와 별개로 이루어지는 행정신고로, <strong>등기를 마쳤다고 해서 자동으로 이루어지지 않습니다.</strong></p>
      <p>신고를 기한 내에 하지 않거나 거짓으로 신고하면 <strong>과태료</strong>가 부과됩니다. 또한 등기신청 시 신고확인증이 필요한 경우도 있으므로, 신고를 먼저 완료하고 신고확인증을 받아 두는 것이 중요합니다.</p>
    </div>

    <div class="warn-box">
      <div class="warn-title">⚡ 기한 엄수 — 취득 원인에 따라 기한이 다릅니다</div>
      <strong>계약(매매·증여 등)으로 취득한 경우 → 계약체결일부터 60일 이내</strong><br>
      <strong>상속·경매·판결 등 계약 외 원인으로 취득한 경우 → 취득한 날부터 6개월 이내</strong><br>
      <strong>한국인에서 외국인으로 변경 후 계속 보유하는 경우 → 변경된 날부터 6개월 이내</strong>
    </div>

    <div class="country-box">
      <strong>🌏 재외국민(영주권자)은 이 신고 의무가 없습니다</strong><br>
      재외국민은 대한민국 국적을 보유하고 있으므로 부동산 거래신고 등에 관한 법률상 '외국인등'에 해당하지 않습니다. 따라서 취득신고 의무가 없으며 내국인과 동일한 절차가 적용됩니다. 외국국적동포(F-4 비자)는 외국 국적 보유자이므로 신고 의무가 있습니다.
    </div>
  </div>

  <!-- 2. 전체 절차 흐름 요약 -->
  <div class="section">` },
      { heading: `2. 전체 절차 흐름 요약`, content: `<div class="flow-section">
      <h4>🏠 계약(매매·증여)으로 취득한 경우 — 60일 이내</h4>
      <div class="flow-steps">
        <div class="flow-step">
          <div class="step-n">STEP 1</div>
          <div class="step-t">부동산 계약 체결</div>
          <div class="step-d">매매·증여 계약서 작성</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 2</div>
          <div class="step-t">서류 준비</div>
          <div class="step-d">취득원인 서류 + 신분증 등</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 3</div>
          <div class="step-t">신고관청 제출</div>
          <div class="step-d">시·군·구청 (온라인 가능)</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 4</div>
          <div class="step-t">신고확인증 수령</div>
          <div class="step-d">신고관청 확인 후 즉시 발급</div>
        </div>
      </div>
    </div>

    <div class="flow-section">
      <h4>📋 상속·경매·판결 등 계약 외 원인으로 취득한 경우 — 6개월 이내</h4>
      <div class="flow-steps">
        <div class="flow-step">
          <div class="step-n">STEP 1</div>
          <div class="step-t">취득 원인 발생</div>
          <div class="step-d">상속·경매·판결·합병 등</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 2</div>
          <div class="step-t">취득일 확정</div>
          <div class="step-d">6개월 기산일 확인</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 3</div>
          <div class="step-t">원인 서류 준비</div>
          <div class="step-d">경락결정서·판결문·상속증명 등</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 4</div>
          <div class="step-t">신고 및 확인증 수령</div>
          <div class="step-d">시·군·구청</div>
        </div>
      </div>
    </div>

    <div class="flow-section">
      <h4>🔄 한국인→외국인 변경 후 계속보유 신고 — 6개월 이내</h4>
      <div class="flow-steps">
        <div class="flow-step">
          <div class="step-n">STEP 1</div>
          <div class="step-t">외국인으로 변경</div>
          <div class="step-d">국적 상실·취득 등</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 2</div>
          <div class="step-t">변경 증명 서류 확보</div>
          <div class="step-d">국적 변경 입증 서류</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 3</div>
          <div class="step-t">계속보유 신고</div>
          <div class="step-d">시·군·구청 신고</div>
        </div>
        <div class="flow-arrow">▶</div>
        <div class="flow-step">
          <div class="step-n">STEP 4</div>
          <div class="step-t">신고확인증 수령</div>
          <div class="step-d">신고관청 확인 후 발급</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. 단계별 상세 절차 -->
  <div class="section">` },
      { heading: `3. 신고 유형별 상세 절차`, content: `<div class="type-grid">
      <div class="type-card">
        <div class="type-label">신고 유형 ①</div>
        <h4>계약에 의한 취득 신고</h4>
        <div class="deadline">⚡ 계약체결일부터 60일 이내</div>
        <p>매매·증여 등 계약을 통해 부동산을 취득하는 경우. 단, 부동산거래신고법 제3조제1항 각 호에 따른 계약(일반 부동산거래신고 대상 계약)은 제외됩니다.</p>
        <div class="law-ref">부동산거래신고법 제8조 제1항</div>
      </div>
      <div class="type-card">
        <div class="type-label">신고 유형 ②</div>
        <h4>계약 외 원인에 의한 취득 신고</h4>
        <div class="deadline">⚡ 취득한 날부터 6개월 이내</div>
        <p>상속·경매·환매권 행사·법원 확정판결·법인 합병·건축물 신축·증축·개축·재축 등 계약이 아닌 원인으로 부동산을 취득한 경우.</p>
        <div class="law-ref">부동산거래신고법 제8조 제2항, 시행령 제5조 제2항</div>
      </div>
      <div class="type-card warn-top">
        <div class="type-label">신고 유형 ③</div>
        <h4>계속보유 신고</h4>
        <div class="deadline">⚡ 외국인으로 변경된 날부터 6개월 이내</div>
        <p>한국 국민이나 국내 법인이 외국인·외국법인으로 변경된 경우, 기존에 보유하던 토지를 계속 소유하려면 변경일부터 6개월 이내에 신고해야 합니다.</p>
        <div class="law-ref">부동산거래신고법 제8조 제3항</div>
      </div>
    </div>

    <!-- 신고 공통 절차 상세 -->
    <div class="sub-title">신고 공통 처리 절차</div>

    <div class="step-block">
      <div class="step-block-header">
        <div class="sn">1</div>
        <div class="stitle">신고서 및 첨부서류 작성</div>
      </div>
      <div class="step-block-body">
        <div class="tag-row">
          <span class="tag tag-office">신고관청 제출용</span>
          <span class="tag tag-warn">⚡ 기한 내 제출 필수</span>
        </div>
        외국인 부동산등 취득·계속보유 신고서(별지 제6호서식)에 서명 또는 날인하고, 취득 원인에 따른 첨부서류를 준비합니다. 신고서 양식은 관할 시·군·구청 또는 부동산 거래관리시스템(rtms.molit.go.kr)에서 다운로드할 수 있습니다.
      </div>
    </div>

    <div class="step-block">
      <div class="step-block-header">
        <div class="sn">2</div>
        <div class="stitle">신고관청에 제출</div>
      </div>
      <div class="step-block-body">
        <div class="tag-row">
          <span class="tag tag-office">시·군·구청 (부동산 담당 부서)</span>
          <span class="tag tag-office">온라인 신고 가능</span>
        </div>
        신고서와 첨부서류를 부동산 소재지 관할 시장·군수·구청장에게 제출합니다. 방문 제출 외에도 부동산거래신고법 시행령 제5조 및 시행규칙에 따라 온라인(rtms.molit.go.kr)을 통한 전자신고도 가능합니다. 전자신고 시에는 전자인증 방법으로 신분 확인이 이루어집니다.
        <br><br>
        <strong>대리인 신청 가능:</strong> 외국인의 위임을 받은 사람이 신고서 작성 및 제출을 대행할 수 있습니다. 이 경우 ①외국인의 서명 또는 날인이 있는 위임장과 ②외국인의 신분증명서 사본을 함께 제출해야 합니다(부동산거래신고법 시행규칙 제7조 제4항).
      </div>
    </div>

    <div class="step-block">
      <div class="step-block-header">
        <div class="sn">3</div>
        <div class="stitle">신고확인증 수령</div>
      </div>
      <div class="step-block-body">
        <div class="tag-row">
          <span class="tag tag-office">신고관청 → 신고인</span>
        </div>
        신고를 받은 신고관청은 제출된 서류를 확인한 후 <strong>외국인 부동산등 취득·계속보유 신고확인증</strong>을 발급합니다. 온라인 신고의 경우 서류 확인 후 지체 없이 온라인으로 송부됩니다. 이 신고확인증은 이후 관련 등기 절차에서 활용될 수 있으므로 잘 보관해 두어야 합니다.
      </div>
    </div>
  </div>

  <!-- 4. 첨부서류 목록 -->
  <div class="section">` },
      { heading: `4. 첨부서류 목록`, content: `<!-- 입국한 경우 -->
    <div class="sub-title">🟢 국내 체류 중인 외국인 (입국한 경우)</div>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width:30%">서류명</th>
          <th style="width:15%">구분</th>
          <th>내용 및 주의사항</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>외국인 부동산등 취득·계속보유 신고서</td>
          <td><span class="badge badge-필수">필수</span></td>
          <td>별지 제6호서식. 서명 또는 날인 필요. 시·군·구청 또는 온라인에서 양식 다운로드.</td>
        </tr>
        <tr>
          <td>매매계약서 (매매의 경우)</td>
          <td><span class="badge badge-필수">필수</span></td>
          <td>계약 내용 증빙. 부동산거래신고를 마친 계약은 신고확인서로 대체 가능.</td>
        </tr>
        <tr>
          <td>증여계약서 (증여의 경우)</td>
          <td><span class="badge badge-해당시">해당 시</span></td>
          <td>증여 취득신고 시 제출. 공증이 있는 경우 더욱 확실.</td>
        </tr>
        <tr>
          <td>상속인임을 증명하는 서류 (상속의 경우)</td>
          <td><span class="badge badge-해당시">해당 시</span></td>
          <td>가족관계 증명서, 상속관계 증명서류 등. 외국에서 발급된 경우 번역문 첨부 필요.</td>
        </tr>
        <tr>
          <td>경락결정서 (경매의 경우)</td>
          <td><span class="badge badge-해당시">해당 시</span></td>
          <td>법원에서 발급. 경매로 취득한 경우에 해당.</td>
        </tr>
        <tr>
          <td>확정판결문 (판결의 경우)</td>
          <td><span class="badge badge-해당시">해당 시</span></td>
          <td>법원의 확정판결에 의한 취득 시. 판결 확정일부터 6개월 기산.</td>
        </tr>
        <tr>
          <td>합병사실 증명서류 (법인 합병의 경우)</td>
          <td><span class="badge badge-해당시">해당 시</span></td>
          <td>합병등기부 등본 등 합병사실을 증명할 수 있는 서류.</td>
        </tr>
        <tr>
          <td>외국인등록증 또는 여권 사본</td>
          <td><span class="badge badge-필수">필수</span></td>
          <td>신고인의 신분증명. 외국인등록증 또는 국내거소신고증.</td>
        </tr>
      </tbody>
    </table>

    <!-- 미입국인 경우 -->
    <div class="sub-title" style="margin-top: 28px;">🔵 해외 거주 외국인 (미입국인 경우)</div>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width:30%">서류명</th>
          <th style="width:15%">구분</th>
          <th>내용 및 주의사항</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>외국인 부동산등 취득·계속보유 신고서</td>
          <td><span class="badge badge-필수">필수</span></td>
          <td>대리인이 제출 대행. 신고서에 외국인 본인의 서명 또는 날인 필요.</td>
        </tr>
        <tr>
          <td>대리인 위임장</td>
          <td><span class="badge badge-필수">필수</span></td>
          <td>외국인 본인의 서명 또는 날인이 있는 위임장. 재외공관 인증(공증) 또는 아포스티유 권장.</td>
        </tr>
        <tr>
          <td>신고인(외국인)의 신분증명서 사본</td>
          <td><span class="badge badge-필수">필수</span></td>
          <td>여권 사본. 외국에서 공증된 것을 사용하면 더욱 확실.</td>
        </tr>
        <tr>
          <td>취득 원인 증빙서류</td>
          <td><span class="badge badge-필수">필수</span> <span class="badge badge-번역">번역문</span></td>
          <td>매매계약서·증여계약서·상속증명서류 등. 외국어로 작성된 경우 국문 번역문 첨부.</td>
        </tr>
        <tr>
          <td>외국어 서류 번역문</td>
          <td><span class="badge badge-해당시">해당 시</span></td>
          <td>외국어로 작성된 첨부서류에는 국문 번역문을 함께 제출. 번역자 서명 필요.</td>
        </tr>
      </tbody>
    </table>

    <div class="warn-box" style="margin-top: 14px;">
      <div class="warn-title">⚠️ 온라인 신고 시 첨부서류 처리 방법</div>
      전자문서로 신고할 때에는 증명서류를 전자파일로 첨부해야 합니다. 첨부가 곤란한 경우에는 사본을 <strong>우편 또는 팩스로 신고관청에 따로 제출</strong>해야 합니다. 이 경우 신고확인증은 제출된 서류 확인 후 지체 없이 온라인으로 송부됩니다.
    </div>
  </div>

  <!-- 5. 비용 안내 -->
  <div class="section">` },
      { heading: `5. 비용 안내`, content: `<div class="summary-box">
      <div class="box-title">💰 취득·보유 신고 자체는 수수료 없음</div>
      <p>부동산 취득·계속보유 신고는 <strong>수수료가 없습니다</strong>. 다만 관련 등기 절차(소유권이전등기 등)를 함께 진행하는 경우 별도의 등기 비용이 발생합니다.</p>
    </div>
    <div class="cost-grid">
      <div class="cost-card">
        <div class="cname">취득 신고 수수료</div>
        <div class="cdesc">없음 (시·군·구청 무료 처리)</div>
      </div>
      <div class="cost-card">
        <div class="cname">취득세</div>
        <div class="cdesc">소유권이전등기와 함께 납부 (위텍스·지자체 조회)</div>
      </div>
      <div class="cost-card">
        <div class="cname">번역·공증 비용</div>
        <div class="cdesc">외국어 서류에 해당 시 발생 (재외공관·공증인)</div>
      </div>
      <div class="cost-card">
        <div class="cname">등록번호 신청 수수료</div>
        <div class="cdesc">외국인 등록번호 미보유 시 별도 발급 필요</div>
      </div>
    </div>
    <p style="font-size:13px; color:#6b7280; margin-top:10px; line-height:1.65;">
      ※ 비용은 취득 부동산의 종류·지역·거래금액에 따라 달라집니다. 정확한 세액은 위텍스(wetax.go.kr) 또는 관할 지자체에서 확인하세요.
    </p>
  </div>

  <!-- 6. 관련 법령 및 예규 -->
  <div class="section">` },
      { heading: `6. 관련 법령 및 예규`, content: `<div class="law-box">
      <span class="law-tag">부동산 거래신고 등에 관한 법률 제8조 (외국인등의 부동산 취득·계속보유 신고)</span>
      <p>① 외국인등이 계약으로 부동산을 취득하면 계약체결일부터 60일 이내 신고관청에 신고(제1항). ② 상속·경매 등 계약 외 원인으로 취득하면 취득한 날부터 6개월 이내 신고(제2항). ③ 한국인·국내법인이 외국인등으로 변경되어 토지를 계속 보유하려는 경우 변경된 날부터 6개월 이내 신고(제3항).</p>
    </div>

    <div class="law-box">
      <span class="law-tag">부동산 거래신고 등에 관한 법률 시행령 제5조 제2항 (계약 외 원인의 범위)</span>
      <p>계약 외 원인으로서 신고 의무가 발생하는 사유: ①공익사업을 위한 토지 취득법 등에 따른 환매권 행사, ②법원의 확정판결, ③법인의 합병, ④건축물의 신축·증축·개축·재축.</p>
    </div>

    <div class="law-box">
      <span class="law-tag">부동산 거래신고 등에 관한 법률 시행규칙 제7조 제4항 (대리인 신고)</span>
      <p>외국인등의 위임을 받은 사람은 취득·계속보유 신고서의 작성 및 제출을 대행할 수 있다. 이 경우 외국인의 서명·날인이 있는 위임장과 외국인의 신분증명서 사본을 함께 제출해야 한다.</p>
    </div>
  </div>

  <!-- 7. 자주 발생하는 문제와 해결책 -->
  <div class="section">` },
      { heading: `7. 자주 발생하는 문제와 해결책`, content: `<div class="problem-card">
      <div class="problem-q">⚠️ "등기를 마쳤으면 신고가 된 것 아닌가요?"</div>
      <div class="problem-a">
        아닙니다. 소유권이전등기와 외국인 취득신고는 <strong>별개의 절차</strong>입니다. 등기는 등기소(법원)에서 처리되고, 취득신고는 시·군·구청(신고관청)에서 별도로 이루어집니다. 등기 후에도 60일 기한 내에 별도로 시·군·구청에 취득신고를 해야 하며, 이를 놓치면 과태료 처분을 받을 수 있습니다.
      </div>
    </div>

    <div class="problem-card">
      <div class="problem-q">⚠️ 상속으로 취득한 날이 정확히 언제인지 모르겠습니다</div>
      <div class="problem-a">
        상속으로 부동산을 취득한 경우, 취득일은 일반적으로 <strong>피상속인의 사망일</strong>입니다. 이 날부터 6개월 이내에 신고해야 합니다. 경우에 따라 상속개시일과 등기신청일이 다를 수 있으므로, 정확한 기산점을 법무사와 확인하는 것이 안전합니다.
      </div>
    </div>

    <div class="problem-card">
      <div class="problem-q">⚠️ 외국어로 작성된 서류를 그대로 제출할 수 있나요?</div>
      <div class="problem-a">
        외국어로 작성된 서류는 <strong>국문 번역문을 함께 제출</strong>해야 합니다. 번역문에는 번역자의 서명 또는 날인이 있어야 하며, 공증기관에서 공증한 번역문을 사용하면 더 확실합니다. 서류의 원본성이 의심받을 경우 아포스티유 또는 재외공관 공증을 추가로 요구받을 수 있습니다.
      </div>
    </div>

    <div class="problem-card">
      <div class="problem-q">🌏 F-4(외국국적동포) 비자 소지자는 어떻게 신고하나요?</div>
      <div class="problem-a">
        F-4 비자 소지자는 외국 국적 보유자이므로 취득신고 의무가 있습니다. 입국하여 국내거소신고를 마친 경우에는 국내거소신고증 번호를 신고서의 외국인 등록번호란에 기재합니다. 국내거소신고를 하지 않은 경우에는 여권번호로 등록번호를 신청하거나, 별도로 외국인 부동산등기용 등록번호를 발급받아야 할 수 있습니다.
      </div>
    </div>

    <div class="problem-card">
      <div class="problem-q">⚡ 60일 기한이 지났습니다. 어떻게 해야 하나요?</div>
      <div class="problem-a">
        기한이 지났더라도 즉시 신고를 진행해야 합니다. 기한 위반에 대해서는 과태료가 부과되며, 지연 기간이 길수록 과태료가 증가할 수 있습니다. 기한이 지난 경우에도 신고서와 첨부서류를 갖추어 신고관청에 제출하면 처리가 가능합니다. 과태료 처분을 받을 위험이 있으므로 기한 초과 즉시 법무사와 상담하여 신속히 처리하는 것을 권장합니다.
      </div>
    </div>
  </div>

  <!-- 8. Q&A -->
  <div class="section">` },
      { heading: `8. 자주 묻는 질문 (Q&A)`, content: `<div class="qa-item">
      <div class="qa-q">취득신고와 부동산거래신고(매도인·매수인 공동 신고)는 같은 건가요?</div>
      <div class="qa-a">
        다릅니다. <strong>부동산거래신고</strong>(부동산거래신고법 제3조)는 매도인·매수인이 계약 체결 후 30일 이내에 공동으로 신고하는 것으로, 한국인 간의 거래에도 공통 적용됩니다. 반면 <strong>외국인 취득신고</strong>(제8조)는 외국인이 추가로 해야 하는 신고로, 신고관청은 동일(시·군·구청)하지만 절차와 서류가 다릅니다. 단, 부동산거래신고 대상인 계약(매매 등)으로 취득한 경우, 그 계약에 대한 거래신고를 이미 한 경우에는 외국인 취득신고(제8조 제1항)의 신고 의무가 면제됩니다(부동산거래신고법 제8조 제1항 괄호 조항). 구체적인 면제 여부는 법무사에게 확인하세요.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">⚡ 아파트를 매수했는데 잔금을 치른 날부터 60일인가요, 계약서를 쓴 날부터 60일인가요?</div>
      <div class="qa-a">
        외국인 취득신고(부동산거래신고법 제8조 제1항)의 기산일은 <strong>계약체결일(계약서를 작성한 날)</strong>입니다. 잔금 지급일이나 등기 신청일이 아닌 점에 유의하세요. 실무상 매매계약을 체결하는 시점부터 60일이 카운트되므로, 계약 직후부터 신고를 준비하는 것이 안전합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">해외에 거주 중인데 한국에 귀국하지 않고 취득신고를 할 수 있나요?</div>
      <div class="qa-a">
        가능합니다. 외국인의 위임을 받은 대리인(법무사 등)이 신고서 작성 및 제출을 대행할 수 있습니다(부동산거래신고법 시행규칙 제7조 제4항). 이 경우 ①외국인의 서명 또는 날인이 있는 위임장과 ②외국인의 신분증명서 사본을 대리인이 함께 제출합니다. 위임장은 재외공관(대사관·영사관)의 공증을 받거나 아포스티유를 첨부하면 더욱 확실합니다. 또한 온라인 신고(rtms.molit.go.kr)를 활용하면 방문 없이도 처리가 가능합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">국적을 잃어 외국인이 된 경우 — 기존 보유 부동산을 유지할 수 있나요?</div>
      <div class="qa-a">
        국적법 제18조에 따르면, 대한민국 국적을 상실한 경우 국민만이 누릴 수 있는 권리는 국적 상실 즉시 행사할 수 없게 됩니다. 그러나 대법원은 토지 소유권의 경우, 국적 상실 후 1년 이내에 양도하지 않았다고 해서 자동으로 소유권이 상실되지는 않는다고 판시한 바 있습니다(대법원 1968.6.25. 선고 67다1776,1777 판결; 1979.7.10. 선고 78다1985 판결). 다만 계속 보유하려면 외국인으로 변경된 날부터 <strong>6개월 이내에 계속보유 신고</strong>(부동산거래신고법 제8조 제3항)를 반드시 해야 합니다. 신고를 지체하면 과태료가 부과될 수 있습니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">재외국민(캐나다 영주권자, 한국 국적 유지)도 취득신고를 해야 하나요?</div>
      <div class="qa-a">
        아닙니다. 재외국민은 대한민국 국적을 보유하고 있으므로 부동산거래신고법상 '외국인등'에 해당하지 않아 외국인 취득신고 의무가 없습니다. 내국인과 동일하게 일반 부동산거래신고(제3조)만 하면 됩니다. 단, 재외국민 고유의 등기 서류(재외국민등록사실증명, 재외공관 위임장 등)는 별도로 준비해야 합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>

    <div class="qa-item">
      <div class="qa-q">취득신고 확인증은 등기신청 시 반드시 필요한가요?</div>
      <div class="qa-a">
        취득신고 확인증 자체가 소유권이전등기의 필수 첨부서류로 명시되어 있는 것은 아닙니다. 그러나 취득신고는 법적 의무이므로 등기 신청 전에 또는 등기 신청과 함께 완료해 두는 것이 안전합니다. 신고확인증은 이후 매도 시 또는 관련 행정 절차에서 증빙으로 활용될 수 있으므로 잘 보관하는 것을 권장합니다. 구체적인 상황에 따라 신고확인증 제출이 요구될 수 있으므로 법무사와 미리 확인하는 것이 좋습니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
      </div>
    </div>
  </div>

  <!-- 9. 다음으로 확인할 내용 -->
  <div class="section">` },
    ],
    laws: [
      { name: `부동산 거래신고 등에 관한 법률 제8조 (외국인등의 부동산 취득·계속보유 신고)`, desc: `① 외국인등이 계약으로 부동산을 취득하면 계약체결일부터 60일 이내 신고관청에 신고(제1항). ② 상속·경매 등 계약 외 원인으로 취득하면 취득한 날부터 6개월 이내 신고(제2항). ③ 한국인·국내법인이 외국인등으로 변경되어 토지를 계속 보유하려는 경우 변경된 날부터 6개월 이내 신고(제3항).` },
      { name: `부동산 거래신고 등에 관한 법률 시행령 제5조 제2항 (계약 외 원인의 범위)`, desc: `계약 외 원인으로서 신고 의무가 발생하는 사유: ①공익사업을 위한 토지 취득법 등에 따른 환매권 행사, ②법원의 확정판결, ③법인의 합병, ④건축물의 신축·증축·개축·재축.` },
      { name: `부동산 거래신고 등에 관한 법률 시행규칙 제7조 제4항 (대리인 신고)`, desc: `외국인등의 위임을 받은 사람은 취득·계속보유 신고서의 작성 및 제출을 대행할 수 있다. 이 경우 외국인의 서명·날인이 있는 위임장과 외국인의 신분증명서 사본을 함께 제출해야 한다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-05',
    title: "외국인 부동산등기용 등록번호 신청 방법",
    meta: "",
    sections: [
      { heading: `1개요`, content: `<p>외국인이 국내에서 부동산을 소유하거나 담보로 제공하려면, 부동산등기부에 기입등기를 신청할 때 주민등록번호 또는 부동산등기용등록번호를 병기해야 합니다. 외국인은 국내에 주민등록번호가 없으므로, 부동산등기용등록번호를 미리 부여받아야 합니다.</p>
            <div class="info-box blue">
                <h4>핵심 내용</h4>
                <ul>
                    <li>외국인의 부동산 기입등기(소유권이전·저당권설정 등) 신청 시 등록번호 필수</li>
                    <li>부동산등기용등록번호를 통해 국내 등기부에 신원을 식별</li>
                    <li>등록번호 부여신청서를 출입국관리사무소에 제출하여 신청</li>
                </ul>
            </div>
        </div>

        <!-- Section 2: 법적 근거 -->
        <div class="section">` },
      { heading: `2법적 근거`, content: `<div class="info-box law">
                <h4>핵심 법령</h4>
                <ul>
                    <li><strong>등기예규 제1778호 제14조</strong>: 기입등기(소유권이전·저당권설정 등)를 신청하는 경우 등기부에 등기권리자의 주민등록번호 또는 부동산등기용등록번호를 병기해야 함</li>
                    <li><strong>부동산등기법 제49조 제1항 제3호·제4호</strong>: 외국인의 등기권리자 표시 관련 규정</li>
                    <li><strong>등기선례 6-81 (2001.3.10. 등기 3402-178)</strong>: 말소등기를 신청하는 경우에는 부동산등기용등록번호를 부여받지 않아도 됨</li>
                    <li><strong>등기선례 제201010-5호 (2010.10.27.)</strong>: 부동산등기용등록번호를 국내거소신고번호로 변경하는 등기명의인 표시변경등기 가능</li>
                </ul>
            </div>
        </div>

        <!-- Section 3: 등록번호의 종류 -->
        <div class="section">` },
      { heading: `3등록번호의 종류`, content: `<p>외국인의 신원 확인을 위해 사용되는 등록번호는 다음 3가지입니다:</p>

            <div style="margin: 1.5rem 0;">
                <h3>① 외국인등록번호</h3>
                <div class="info-box blue">
                    <ul>
                        <li>출입국관리법에 따라 체류지를 관할하는 지방출입국·외국인관서의 장이 부여</li>
                        <li>국내에 실제로 거주하는 외국인에게 부여</li>
                        <li>국내 입국 후 출입국관리사무소에서 취득</li>
                    </ul>
                </div>
            </div>

            <div style="margin: 1.5rem 0;">
                <h3>② 부동산등기용등록번호</h3>
                <div class="info-box orange">
                    <ul>
                        <li>국내에 체류지가 없는 외국인을 위해 부여</li>
                        <li>대법원 소재지를 관할하는 서울출입국·외국인관서의 장이 부여</li>
                        <li>해외에 거주하면서 국내 부동산을 거래하려는 외국인이 신청</li>
                    </ul>
                </div>
            </div>

            <div style="margin: 1.5rem 0;">
                <h3>③ 국내거소신고번호</h3>
                <div class="info-box green">
                    <ul>
                        <li>재외동포의 출입국과 법적 지위에 관한 법률에 따라 부여</li>
                        <li>거소를 관할하는 지방출입국·외국인관서의 장이 외국국적동포에게 부여</li>
                        <li>외국국적동포(F-4 비자 소유자 등)가 신청 가능</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Section 4: 신청 대상 및 신청 필요성 -->
        <div class="section">` },
      { heading: `4신청 대상 및 신청 필요성`, content: `<h3>신청이 필요한 경우</h3>
            <div class="info-box blue">
                <ul>
                    <li>외국인이 국내 부동산의 소유권이전등기를 신청할 때</li>
                    <li>외국인이 부동산에 저당권설정등기를 신청할 때</li>
                    <li>외국인이 기타 부동산 기입등기를 신청할 때</li>
                </ul>
            </div>

            <h3>신청이 불필요한 경우</h3>
            <div class="info-box green">
                <ul>
                    <li>말소등기를 신청하는 경우 (등기선례 6-81에 따름)</li>
                </ul>
            </div>
        </div>

        <!-- Section 5: 신청 절차 -->
        <div class="section">` },
      { heading: `5신청 절차`, content: `<h3>기본 신청 절차</h3>
            <div class="step-list">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <strong>신청서 작성</strong>
                        <p>등록번호 부여신청서를 작성합니다 (별지 제5호서식)</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <strong>첨부서류 준비</strong>
                        <p>신청 상황에 맞는 서류를 준비합니다 (아래 섹션 참고)</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <strong>제출처 결정</strong>
                        <p>국내 체류지 유무에 따라 제출처를 결정합니다</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <strong>제출 및 수수료 납부</strong>
                        <p>신청서와 첨부서류를 제출하고 등록증명서 발급 수수료 1,000원을 납부합니다</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <strong>등록번호 취득</strong>
                        <p>등록증명서를 수령하여 등록번호를 확인합니다</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 6: 신청 서류 -->
        <div class="section">` },
      { heading: `6신청 서류`, content: `<h3>국내 입국한 외국인의 경우</h3>
            <p>국내에 입국하여 거주지가 있는 외국인이 신청할 때 필요한 서류입니다:</p>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>발급처</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>등록번호 부여신청서</td>
                        <td>출입국관리사무소</td>
                        <td>별지 제5호서식</td>
                    </tr>
                    <tr>
                        <td>유효한 여권</td>
                        <td>본국</td>
                        <td>원본 지참 필수</td>
                    </tr>
                    <tr>
                        <td>외국인등록증</td>
                        <td>출입국관리사무소</td>
                        <td>이미 등록한 경우 제출</td>
                    </tr>
                </tbody>
            </table>

            <h3>국내 미입국 외국인의 경우</h3>
            <p>국내에 입국하지 않은 외국인이 신청할 때 필요한 서류입니다:</p>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>구분</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>등록번호 부여신청서</td>
                        <td>필수</td>
                        <td>대리인이 대행 가능</td>
                    </tr>
                    <tr>
                        <td>여권사본 (공증담당 영사 확인)</td>
                        <td>필수</td>
                        <td>재외공관 공증 또는 아포스티유</td>
                    </tr>
                    <tr>
                        <td>위임장</td>
                        <td>필수</td>
                        <td>위임인 서명·날인 필요</td>
                    </tr>
                    <tr>
                        <td>대리인 신분증</td>
                        <td>필수</td>
                        <td>대리 신청 시</td>
                    </tr>
                </tbody>
            </table>

            <h3>여권 관련 서류 선택</h3>
            <div class="info-box orange">
                <p>다음 중 하나를 제출할 수 있습니다:</p>
                <ul>
                    <li>유효한 여권 (원본)</li>
                    <li>공증담당 영사로부터 확인을 받은 여권사본</li>
                    <li>아포스티유를 붙인 여권사본증명서</li>
                    <li>공증담당 영사로부터 확인을 받은 여권발급기록증명서</li>
                    <li>아포스티유를 붙인 여권발급기록증명서</li>
                </ul>
            </div>
        </div>

        <!-- Section 7: 제출처 -->
        <div class="section">` },
      { heading: `7제출처`, content: `<h3>체류 상황별 제출처</h3>
            <div class="info-box blue">
                <ul>
                    <li><strong>국내 체류 중</strong>: 체류지를 관할하는 지방출입국·외국인관서 (해당 지역의 출입국관리사무소)</li>
                    <li><strong>국내 체류지 없음</strong>: 서울출입국·외국인관서 (대법원 소재지)</li>
                </ul>
            </div>

            <p style="margin-top: 1.5rem;">국내에 입국하지 않은 경우, 서울 지역의 출입국·외국인관서에 신청서와 서류를 제출하거나 우편으로 발송합니다.</p>
        </div>

        <!-- Section 8: 우편 신청 절차 -->
        <div class="section">` },
      { heading: `8우편 신청 절차`, content: `<p>국내에 입국하지 않은 외국인은 우편으로 신청할 수 있습니다:</p>

            <div class="step-list">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <strong>우체국 방문</strong>
                        <p>가까운 우체국을 방문하여 우편료를 지불합니다</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <strong>회신용 등기봉투 수령</strong>
                        <p>결과를 받을 회신용 등기봉투를 수령합니다</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <strong>서류 준비</strong>
                        <p>다음 서류를 준비합니다:</p>
                        <ul style="margin-top: 0.5rem;">
                            <li>등록번호 부여신청서</li>
                            <li>위임인(신청인) 여권사본</li>
                            <li>대리인 신분증사본</li>
                            <li>위임장</li>
                            <li>등록증명서 발급 수수료 1,000원</li>
                        </ul>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <strong>등기봉투로 발송</strong>
                        <p>모든 서류를 회신용 등기봉투에 넣어 서울출입국·외국인관서로 발송합니다</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <strong>등록증명서 수령</strong>
                        <p>심사 후 등록증명서가 우편으로 도착합니다</p>
                    </div>
                </div>
            </div>

            <div class="info-box orange">
                <h4>주의사항</h4>
                <ul>
                    <li>우편료와 수수료를 모두 준비해야 합니다</li>
                    <li>여권사본 및 문서는 공증담당 영사 확인 또는 아포스티유가 필요할 수 있습니다</li>
                    <li>등기봉투로 발송하여 배송 기록이 남도록 해야 합니다</li>
                </ul>
            </div>
        </div>

        <!-- Section 9: 대리인 신청 -->
        <div class="section">` },
      { heading: `9대리인을 통한 신청`, content: `<p>국내에 입국하지 않은 외국인은 대리인을 통해 신청할 수 있습니다:</p>

            <h3>대리인 신청 시 필요 서류</h3>
            <div class="info-box blue">
                <ul>
                    <li><strong>위임인 여권사본</strong>: 공증담당 영사 확인 또는 아포스티유</li>
                    <li><strong>대리인 신분증</strong>: 신청자 신분증 원본 또는 사본</li>
                    <li><strong>위임장</strong>: 위임인(신청자)의 서명·날인 필요</li>
                </ul>
            </div>

            <h3>대리인의 조건</h3>
            <div class="info-box green">
                <ul>
                    <li>한국 국민이거나 한국 내 신원이 확인된 외국인</li>
                    <li>신청자(위임인)의 서명이 있는 위임장 제출</li>
                    <li>신분증으로 신원 확인 가능</li>
                </ul>
            </div>
        </div>

        <!-- Section 10: 수수료 -->
        <div class="section">` },
      { heading: `10수수료`, content: `<div class="info-box country">
                <h4>부동산등기용등록번호 관련 수수료</h4>
                <ul>
                    <li><strong>등록번호 부여</strong>: 없음 (무료)</li>
                    <li><strong>등록증명서 발급</strong>: 1부당 1,000원</li>
                </ul>
            </div>

            <p style="margin-top: 1.5rem;">등록번호 신청 자체는 수수료가 없지만, 등록증명서를 발급받을 때만 1,000원의 수수료가 필요합니다. 이후 필요할 때 추가 등록증명서를 발급받으려면 매번 1,000원씩 지불해야 합니다.</p>
        </div>

        <!-- Section 11: Q&A -->
        <div class="section">` },
      { heading: `11자주 묻는 질문`, content: `<div class="qa-section">
                <div class="qa-item">
                    <div class="qa-q">Q. 말소등기를 신청할 때도 등록번호가 필요한가요?</div>
                    <div class="qa-a">
                        <p>아니요. 등기선례 6-81 (2001.3.10. 등기 3402-178)에 따르면, 말소등기(부동산 소유권 말소)를 신청하는 경우에는 부동산등기용등록번호를 부여받지 않아도 됩니다. 다만 기입등기(소유권이전, 저당권설정 등)를 신청하려면 반드시 등록번호가 필요합니다.</p>
                        <div class="disclaimer">
                            <strong>면책 문구:</strong> 이는 현행 판례·예규의 해석이며, 개별 사건의 구체적인 상황에 따라 달라질 수 있으므로 전문가 상담을 권장합니다.
                        </div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">Q. 국내에 입국하지 않고도 등록번호를 받을 수 있나요?</div>
                    <div class="qa-a">
                        <p>네. 국내에 입국하지 않은 외국인도 부동산등기용등록번호를 신청할 수 있습니다. 서울출입국·외국인관서에 대리인을 통해 신청하거나 우편으로 신청하면 됩니다. 이 경우 공증담당 영사 확인이나 아포스티유가 붙은 여권사본 등을 제출해야 합니다.</p>
                        <div class="disclaimer">
                            <strong>면책 문구:</strong> 국가별 요구 서류가 다를 수 있으므로, 신청 전 해당 출입국관리사무소 또는 재외공관에 확인하시기 바랍니다.
                        </div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">Q. 외국국적동포(F-4 비자)는 어떤 번호를 사용하나요?</div>
                    <div class="qa-a">
                        <p>외국국적동포(F-4 비자 소유자)는 국내거소신고번호를 사용할 수 있습니다. 이는 재외동포의 출입국과 법적 지위에 관한 법률에 따라 거소를 관할하는 지방출입국·외국인관서의 장이 부여합니다. 부동산등기용등록번호 대신 이 번호를 사용하는 것이 유리할 수 있습니다.</p>
                        <div class="disclaimer">
                            <strong>면책 문구:</strong> 개인의 신분 상태와 거래 상황에 따라 최적의 번호가 달라질 수 있으므로 사전에 출입국관리사무소에 상담하시기 바랍니다.
                        </div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">Q. 부동산등기용등록번호를 국내거소신고번호로 변경할 수 있나요?</div>
                    <div class="qa-a">
                        <p>네. 등기선례 제201010-5호 (2010.10.27.)에 따르면, 부동산등기용등록번호를 국내거소신고번호로 변경하는 등기명의인 표시변경등기가 가능합니다. 이미 등록된 부동산이 있는데 국내거소신고를 한 경우, 등기명의인을 변경하여 국내거소신고번호로 통일할 수 있습니다.</p>
                        <div class="disclaimer">
                            <strong>면책 문구:</strong> 표시변경등기의 구체적인 절차는 관할 등기소의 규정이 우선하므로, 신청 전 해당 등기소에 문의하시기 바랍니다.
                        </div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">Q. 아파트 매수 시 부동산등기용등록번호가 반드시 필요한가요?</div>
                    <div class="qa-a">
                        <p>부동산 매수 계약(매매계약)을 체결할 때는 등록번호가 필수는 아닙니다. 그러나 계약 후 소유권이전등기를 신청할 때는 반드시 필요합니다. 따라서 매도인의 요청이 없더라도 미리 등록번호를 신청하여 등기 절차를 원활히 하는 것이 좋습니다.</p>
                        <div class="disclaimer">
                            <strong>면책 문구:</strong> 부동산 거래 절차는 개별 거래의 특성에 따라 달라질 수 있으므로, 법무사나 부동산 전문가와 상담하시기 바랍니다.
                        </div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">Q. 법인인 외국인(외국법인)의 경우는 어떻게 하나요?</div>
                    <div class="qa-a">
                        <p>외국법인의 경우, 법인등기부를 갖춘 후 부동산등기를 신청하게 됩니다. 외국법인의 국내 부동산 취득에는 '외국인의 부동산 취득·이용에 관한 법률(외국인토지법)'에 따른 별도의 제한과 신고 의무가 있을 수 있습니다. 외국법인의 등록번호 신청은 개인 외국인과 다를 수 있으므로 관할 출입국관리사무소에 직접 문의하시기 바랍니다.</p>
                        <div class="disclaimer">
                            <strong>면책 문구:</strong> 외국법인의 부동산 취득은 복잡한 법적 이슈가 많으므로 법무사·세무사 등 전문가와 사전 상담이 필수입니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 12: 마무리 -->
        <div class="section">` },
      { heading: `12마무리`, content: `<p>부동산등기용등록번호는 외국인이 국내에서 부동산 소유권을 등기하기 위한 필수 요소입니다. 국내에 체류하지 않는 외국인도 우편이나 대리인을 통해 신청할 수 있으므로, 부동산 거래 계획이 있다면 미리 등록번호를 신청하여 거래를 원활히 진행할 수 있습니다.</p>

            <p style="margin-top: 1rem;">신청 절차 중 불명확한 사항이 있으면 아래 연락처로 전문가의 도움을 받으시기 바랍니다.</p>
        </div>

        <!-- CTA Box -->
        <div class="cta-box">
            <h3>전문가 상담이 필요하신가요?</h3>
            <p>외국인의 부동산등기 문제는 복잡한 법적 절차를 포함합니다. 법무사의 전문 상담을 받으세요.</p>
            <div class="button-group">
                <a href="tel:02-XXXX-XXXX" class="btn btn-phone">☎ 전화상담</a>
                <a href="http://pf.kakao.com/" class="btn btn-kakao">💬 카카오톡</a>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p><strong>면책 공지</strong></p>
        <p>본 페이지의 모든 내용은 2025년 기준의 현행 법령과 판례·예규를 기초로 작성되었습니다. 법령 개정, 판례 변경, 행정 관행의 변화에 따라 내용이 달라질 수 있으므로, 구체적인 상황에서는 전문 법무사와 상담하시기 바랍니다. 본 내용으로 인한 법적 책임을 지지 않습니다.</p>
        <p style="margin-top: 1rem;">© 2025 외국인·재외국민 부동산등기 정보제공 | 법무사사무실</p>
    </footer>
</body>
</html>` },
    ],
    laws: [
    ],
    forms: [],
  },
  {
    id: 'fi-06',
    title: "국적별 외국인 부동산 취득 등기 첨부서류 가이드",
    meta: "미국인·일본인 사례 포함",
    sections: [
      { heading: `첨부서류 차이의 핵심 기준 2가지`, content: `<h3>1. 국내 입국(체류) 여부에 따른 차이</h3>

            <div class="info-box blue">
                <h4>입국한 경우 (국내 거주 외국인)</h4>
                <ul>
                    <li>외국인등록증 또는 국내거소신고증 제출 가능</li>
                    <li>인감증명법에 따른 인감증명서 또는 본인서명사실확인서 제출 가능</li>
                </ul>
            </div>

            <div class="info-box orange">
                <h4>미입국인 경우 (해외 거주 외국인)</h4>
                <ul>
                    <li>재외공관 공증 또는 아포스티유가 붙은 여권 관련 서류 필수</li>
                    <li>처분위임장에 서명공증 필요</li>
                </ul>
            </div>

            <h3>2. 인감증명제도 유무에 따른 차이</h3>

            <div class="info-box country">
                <h4>인감증명 제도 있는 국가 (예: 일본, 대만)</h4>
                <p><strong>본국 관공서 발행 인감증명서 제출 가능</strong></p>
                <p><em>(등기예규 제1778호 제12조 제1항)</em></p>
                <p><strong>참고:</strong> 매수인 인적사항이 기재된 부동상등기용 인감증명은 요구되지 않음 (등기선례 제200610-12호, 2006.10.31.)</p>
            </div>

            <div class="info-box green">
                <h4>인감증명 제도 없는 국가 (예: 미국, 영국, 캐나다)</h4>
                <p><strong>서명공증으로 인감증명 대체</strong></p>
                <ul style="margin-top: 10px;">
                    <li>본인이 작성하였음이 틀림없다는 뜻의 서명 필수</li>
                    <li>본국 관공서의 증명 또는 본국/대한민국 공증인의 인증 필요</li>
                    <li>재외공관 인증도 가능 (등기예규 제1778호 제12조 제2항)</li>
                </ul>
            </div>` },
      { heading: `주소를 증명하는 서면`, content: `<p><em>(등기예규 제1778호 제13조 규정)</em></p>

            <h3>국내 체류 외국인</h3>
            <div class="info-box blue">
                <p><strong>외국인등록사실증명</strong> (출입국관리사무소 발급)</p>
                <p>등록번호 및 주소 증명으로 제출 가능 (등기선례 7-182)</p>
            </div>

            <h3>해외 거주 외국인 (미국인 사례)</h3>
            <div class="info-box country">
                <p><strong>거주사실증명서</strong> (Proof of Residency for U.S. Citizens)</p>
                <p>본국 공증서면 형태로 제출. 영문 원본 + 한글 번역문 필수</p>
            </div>

            <h3>해외 거주 외국인 (일본인 사례)</h3>
            <div class="info-box country">
                <p><strong>주민표</strong> (일본 주민등록과 동일한 역할)</p>
                <p>일본 관공서 발행 증명서. 아포스티유 필수, 한글 번역문 필수</p>
            </div>` },
      { heading: `번역문 처리`, content: `<div class="info-box law">
                <h4>번역문 작성 방법</h4>
                <ul>
                    <li>외국어로 작성된 서류에는 <strong>번역문 필수</strong></li>
                    <li>번역문에 기재사항:
                        <ul style="margin-top: 8px;">
                            <li>원문과 다름이 없다는 뜻</li>
                            <li>번역인의 성명·주소</li>
                            <li>번역인의 날인 또는 서명</li>
                            <li>번역인의 신분증 사본</li>
                        </ul>
                    </li>
                    <li><em>(등기예규 제1778호 제4조 제2항)</em></li>
                </ul>
            </div>

            <div class="info-box blue">
                <h4>번역인의 자격</h4>
                <p>번역인의 자격에는 <strong>제한이 없음</strong> (등기선례 1-22, 1997.11.5.)</p>
                <p>즉, 공인번역가가 아니어도 가능하며, 가족이나 지인이 번역해도 됩니다.</p>
            </div>

            <div class="info-box green">
                <h4>인증을 받은 경우</h4>
                <p>번역문을 공증인으로부터 인증받아 제출하는 경우, 번역인 서명은 불필요합니다.</p>
            </div>` },
      { heading: `아포스티유(Apostille)`, content: `<div class="info-box law">
                <p><strong>아포스티유란:</strong> 외국에서 공증받은 사문서나 외국 발행 공문서의 진정성을 증명하는 국제 인증서</p>
                <h4 style="margin-top: 15px;">적용 범위</h4>
                <ul>
                    <li><strong>아포스티유 가입국:</strong> 발행 공문서나 공증 사문서에 아포스티유를 붙여야 함</li>
                    <li><strong>아포스티유 미가입국:</strong> 재외공관(대사관·영사관) 공증으로 대체 가능</li>
                </ul>
                <p><em>(등기예규 제1778호 제4조 제1항)</em></p>
            </div>` },
      { heading: `첨부서류 비교표 (미국인 매수인)`, content: `<p>외국인이 매수인으로 부동산을 취득할 때 준비해야 할 서류 목록입니다.</p>

            <table>
                <thead>
                    <tr>
                        <th>서류</th>
                        <th>입국한 경우</th>
                        <th>미입국인 경우</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>등기신청서</td>
                        <td>필수</td>
                        <td>필수</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>매매계약서 (검인)</td>
                        <td>필수</td>
                        <td>필수</td>
                        <td>원본, 인지세 납부</td>
                    </tr>
                    <tr>
                        <td>부동산등기용등록번호증명서</td>
                        <td>필수</td>
                        <td>필수</td>
                        <td>외국인등록증 또는 별도 신청</td>
                    </tr>
                    <tr>
                        <td>외국인등록사실증명</td>
                        <td>필수</td>
                        <td>—</td>
                        <td>주소·등록번호 증명</td>
                    </tr>
                    <tr>
                        <td>여권사본 (공증)</td>
                        <td>—</td>
                        <td>필수/아포스티유</td>
                        <td>재외공관 확인 또는 아포스티유</td>
                    </tr>
                    <tr>
                        <td>주소증명서 (거주사실증명서)</td>
                        <td>외국인등록증으로 대체</td>
                        <td>필수/번역</td>
                        <td>영문, 한글 번역문 필수</td>
                    </tr>
                    <tr>
                        <td>취득세 영수증</td>
                        <td>필수</td>
                        <td>필수</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>인지세 (해당 시)</td>
                        <td>필수</td>
                        <td>필수</td>
                        <td>거래금액 1,000만원 초과 시</td>
                    </tr>
                    <tr>
                        <td>토지취득허가증 (해당 시)</td>
                        <td>해당 시</td>
                        <td>해당 시</td>
                        <td>허가 대상 지역의 토지 취득 시</td>
                    </tr>
                    <tr>
                        <td>토지이용계획확인서 (비허가 지역)</td>
                        <td>해당 시</td>
                        <td>해당 시</td>
                        <td>허가 대상 아님을 소명 시</td>
                    </tr>
                    <tr>
                        <td>번역문</td>
                        <td>해당 시</td>
                        <td>해당 시</td>
                        <td>외국어 서류 있는 경우</td>
                    </tr>
                </tbody>
            </table>` },
      { heading: `첨부서류 비교표 (일본인 매수인)`, content: `<p>일본은 인감증명제도가 있어 미국과 달리 준비 절차가 다릅니다.</p>

            <table>
                <thead>
                    <tr>
                        <th>서류</th>
                        <th>입국한 경우</th>
                        <th>미입국인 경우</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>부동산등기용등록번호증명서</td>
                        <td>필수</td>
                        <td>필수</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>주소증명서</td>
                        <td>외국인등록증 또는 일본 주민표</td>
                        <td>일본 주민표/아포스티유/번역</td>
                        <td>일본 관공서 발행 주민표</td>
                    </tr>
                    <tr>
                        <td>인감증명서</td>
                        <td>인감증명법 또는 일본 인감증명</td>
                        <td>일본 인감증명/아포스티유</td>
                        <td>인감증명제도 있음. 부동산매도용 불필요</td>
                    </tr>
                    <tr>
                        <td>번역문</td>
                        <td>해당 시</td>
                        <td>해당 시</td>
                        <td>외국어 서류 있는 경우</td>
                    </tr>
                </tbody>
            </table>` },
      { heading: `관련 등기예규·등기선례`, content: `<div class="info-box law">
                <h4>등기예규 제1778호</h4>
                <ul>
                    <li>제4조: 아포스티유·번역문</li>
                    <li>제12조: 인감증명 대용 (서명공증)</li>
                    <li>제13조: 주소 증명</li>
                    <li>제14조: 등록번호</li>
                </ul>

                <h4 style="margin-top: 15px;">등기선례</h4>
                <ul>
                    <li><strong>7-182:</strong> 외국인등록사실증명 = 등록번호 + 주소 증명</li>
                    <li><strong>1-22 (1997.11.5.):</strong> 번역인 자격에 제한 없음</li>
                    <li><strong>제200610-12호 (2006.10.31.):</strong> 일본인 인감증명 — 부동산매도용 불필요</li>
                    <li><strong>7-31:</strong> 계약서 사본 불가, 원본만 제출</li>
                </ul>

                <h4 style="margin-top: 15px;">기타 예규</h4>
                <ul>
                    <li>등기예규 제1419호: 인지세</li>
                </ul>
            </div>` },
      { heading: `자주 묻는 질문 (Q&A)`, content: `<div class="qa-item">
                <div class="qa-question">Q1. 미국인은 인감증명서가 없는데 어떻게 하나요?</div>
                <div class="qa-answer">
                    <p><strong>A:</strong> 미국은 인감증명제도가 없으므로, <strong>서명공증으로 인감증명을 대체</strong>합니다. 부동산 매매 계약서나 처분위임장에 서명한 후, 본국 공증인(Notary Public) 또는 재외공관(대사관·영사관)에서 서명 및 인지 진정을 받으면 됩니다. 서명공증은 아포스티유가 붙으면 더욱 강력한 증명력을 갖습니다.</p>
                    <p class="disclaimer">본 답변은 일반 정보 제공 목적이며, 구체적인 법률 자문은 법무사 또는 변호사의 상담을 권장합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q2. 일본인의 일본 인감증명서는 매도용으로 발급받아야 하나요?</div>
                <div class="qa-answer">
                    <p><strong>A:</strong> <strong>아니요, 일반 인감증명서로 충분합니다.</strong> 부동산 매도용(부동산상등기용) 인감증명서를 별도로 발급받을 필요가 없습니다. 이는 등기선례 제200610-12호(2006.10.31.)에서 명시한 바입니다.</p>
                    <p class="disclaimer">본 답변은 일반 정보 제공 목적이며, 구체적인 법률 자문은 법무사 또는 변호사의 상담을 권장합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q3. 외국어 서류 번역은 반드시 공인번역가가 해야 하나요?</div>
                <div class="qa-answer">
                    <p><strong>A:</strong> <strong>아니요, 자격 제한이 없습니다.</strong> 등기선례 1-22(1997.11.5.)에 따르면, 번역인의 자격에는 제한이 없습니다. 즉, 가족이나 지인이 번역해도 되며, 공인번역가일 필요는 없습니다. 다만 번역문에 번역인의 성명·주소와 날인 또는 서명이 필수입니다.</p>
                    <p class="disclaimer">본 답변은 일반 정보 제공 목적이며, 구체적인 법률 자문은 법무사 또는 변호사의 상담을 권장합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q4. 외국인등록사실증명이 있으면 주소증명서를 별도로 제출하지 않아도 되나요?</div>
                <div class="qa-answer">
                    <p><strong>A:</strong> <strong>예, 외국인등록사실증명으로 주소를 증명할 수 있습니다.</strong> 등기선례 7-182에 따르면, 외국인등록사실증명은 등록번호와 주소를 함께 증명하므로, 별도의 주소증명서를 제출할 필요가 없습니다.</p>
                    <p class="disclaimer">본 답변은 일반 정보 제공 목적이며, 구체적인 법률 자문은 법무사 또는 변호사의 상담을 권장합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q5. 아포스티유가 없는 나라의 서류는 어떻게 처리하나요?</div>
                <div class="qa-answer">
                    <p><strong>A:</strong> <strong>재외공관 공증으로 대체 가능합니다.</strong> 아포스티유 미가입국의 공문서는 한국의 재외공관(대사관, 영사관)에서 공증을 받으면 한국 등기부상 효력이 있습니다. 예를 들어, 미국의 경우 한국 대사관이나 영사관에서 미국 서류의 진정성을 공증받으면 됩니다.</p>
                    <p class="disclaimer">본 답변은 일반 정보 제공 목적이며, 구체적인 법률 자문은 법무사 또는 변호사의 상담을 권장합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q6. 국내 거주 외국인과 해외 거주 외국인의 서류 차이는 무엇인가요?</div>
                <div class="qa-answer">
                    <p><strong>A:</strong> 가장 큰 차이는 <strong>본인 확인 및 주소 증명</strong>입니다:</p>
                    <ul>
                        <li><strong>국내 거주 외국인:</strong> 외국인등록증으로 신원과 주소를 한 번에 증명 가능. 인감증명서나 본인서명사실확인서 제출 가능.</li>
                        <li><strong>해외 거주 외국인:</strong> 여권 + 공증(또는 아포스티유), 거주사실증명서, 서명공증 등 복수의 문서 필요. 국내에 신원 기록이 없으므로 공증/아포스티유를 통해 진정성 증명.</li>
                    </ul>
                    <p class="disclaimer">본 답변은 일반 정보 제공 목적이며, 구체적인 법률 자문은 법무사 또는 변호사의 상담을 권장합니다.</p>
                </div>
            </div>
        </section>

        <!-- CTA Box -->
        <div class="cta-box">
            <h3>전문가 상담이 필요하신가요?</h3>
            <p>외국인 부동산 등기는 국적과 체류 상태에 따라 복잡할 수 있습니다. 정확한 서류 준비와 등기 절차를 위해 법무사 상담을 받으세요.</p>
            <button class="cta-button" onclick="alert('법무사 상담 예약 페이지로 이동합니다.')">법무사 상담 예약</button>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-title">면책 조항</div>
            <p>
                본 페이지의 정보는 <strong>2025년 기준</strong>으로 작성된 일반 정보 제공 목적의 가이드입니다.
                법령 변경, 예규 및 선례의 업데이트에 따라 내용이 달라질 수 있습니다.
                구체적인 개별 사건의 서류 준비나 법적 조언이 필요한 경우,
                <strong>반드시 법무사 또는 변호사와 상담</strong>하여 정확한 지도를 받으시기 바랍니다.
                본 페이지의 내용으로 인한 법적 책임은 지지 않습니다.
            </p>
            <p style="margin-top: 15px; border-top: 1px solid #ccc; padding-top: 15px;">
                <strong>발행일:</strong> 2025년 | <strong>유형:</strong> 절차형(유형2) | <strong>페이지:</strong> 06번
            </p>
        </div>
    </footer>
</body>
</html>` },
    ],
    laws: [
      { name: `등기예규 제1778호`, desc: `` },
    ],
    forms: [],
  },
  {
    id: 'fi-07',
    title: "외국인이 입국하지 않고 한국 부동산을 파는 방법처분 위임장 공증 완벽 가이드",
    meta: "",
    sections: [
      { heading: `1처분위임장이란?`, content: `<div class="info-box blue">
                <h4>처분위임장의 정의</h4>
                <p>처분위임장은 외국시민권을 취득한 자가 <strong>한국에 입국하지 않고</strong> 국내에 있는 대리인에게 한국 내 부동산 처분권과 소유권이전등기신청 권한을 위임한다는 내용의 서류입니다.</p>
                <p style="margin-top: 0.8rem; font-size: 0.9rem;">출처: 등기예규 제1778호 제5조</p>
            </div>

            <h3>언제 필요한가?</h3>
            <ul>
                <li>외국국적을 취득한 후 한국 부동산을 팔려고 할 때</li>
                <li>입국 없이 국내 대리인(법무사 등)이 대신 처분하도록 할 때</li>
            </ul>

            <div class="info-box orange">
                <h4>입국한 경우는 불필요</h4>
                <p>외국국적자가 한국에 입국하여 <strong>직접 부동산을 처분</strong>하고 법무사에게만 등기신청을 위임하면, 처분위임장이 필요하지 않습니다(등기선례 제4-56호, 1993. 9. 8.).</p>
            </div>
        </div>

        <!-- 처분위임장 공증 방법 -->
        <div class="section">` },
      { heading: `2처분위임장 공증 방법`, content: `<h3>인감증명 제도에 따른 구분</h3>

            <h4 style="color: var(--orange-box-text); margin-top: 1.5rem;">A. 인감증명 제도가 없는 국가 (미국, 캐나다, 호주 등)</h4>

            <div class="step-list">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <strong>처분위임장 작성</strong>
                        <p style="margin-top: 0.3rem;">부동산, 권리, 대리인의 인적사항을 구체적으로 명시</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <strong>본인 서명</strong>
                        <p style="margin-top: 0.3rem;">위임장 문서 자체에 본인이 직접 서명</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <strong>공증 취득</strong>
                        <p style="margin-top: 0.3rem;">다음 중 하나:</p>
                        <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                            <li>대한민국 재외공관(공증담당 영사)</li>
                            <li>현지 공증인 공증</li>
                            <li>본국 관공서 증명</li>
                        </ul>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <strong>아포스티유 첨부 (필요 시)</strong>
                        <p style="margin-top: 0.3rem;">아포스티유 가입국인 경우 필수</p>
                    </div>
                </div>
            </div>

            <div class="info-box law">
                <h4>중요: 공증 방법</h4>
                <p>공증은 <strong>위임장 서면 그 자체</strong>에 받아야 합니다. 별도 문서에 서명하고 그것만 공증받으면 안 됩니다(등기예규 제1778호 제9조 제3항).</p>
            </div>

            <h4 style="color: var(--orange-box-text); margin-top: 2rem;">B. 인감증명 제도가 있는 국가 (일본, 대만 등)</h4>

            <div class="step-list">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <strong>처분위임장 작성</strong>
                        <p style="margin-top: 0.3rem;">부동산, 권리, 대리인 명시</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <strong>인감 날인</strong>
                        <p style="margin-top: 0.3rem;">본국에서 신고한 인감을 위임장에 날인</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <strong>인감증명 첨부</strong>
                        <p style="margin-top: 0.3rem;">본국 관공서 발행 인감증명서</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 아포스티유 -->
        <div class="section">` },
      { heading: `3아포스티유 요건`, content: `<div class="info-box country">
                <h4>아포스티유 필수 대상</h4>
                <p><strong>외국에서 공증받은 사문서나 외국 발행 공문서</strong>에 대해, 아포스티유 협약 가입국이면 아포스티유를 붙여야 합니다(등기예규 제1778호 제4조 제1항).</p>
            </div>

            <h3>어떤 문서에 필요한가?</h3>
            <ul>
                <li>재외공관에서 공증받은 처분위임장</li>
                <li>현지 공증인 공증 문서</li>
                <li>본국 관공서 증명 문서</li>
            </ul>

            <h3>외국어 문서</h3>
            <p>영문이나 기타 외국어로 작성된 처분위임장은 <strong>한글 번역문을 반드시 첨부</strong>해야 합니다.</p>
        </div>

        <!-- 대리인의 권한 -->
        <div class="section">` },
      { heading: `4대리인이 해야 할 일`, content: `<h3>대리인의 증명서류</h3>
            <p>처분권한을 위임받은 대리인이 등기신청을 할 때는:</p>

            <div class="info-box green">
                <h4>대리인이 직접 등기신청하는 경우</h4>
                <ul>
                    <li>등기신청서에 <strong>자신의 인감을 날인</strong></li>
                    <li>자신의 <strong>인감증명서 첨부</strong></li>
                </ul>
            </div>

            <div class="info-box blue">
                <h4>대리인이 법무사에게 재위임하는 경우</h4>
                <ul>
                    <li>등기신청위임장에 <strong>대리인의 인감 날인</strong></li>
                    <li>대리인의 <strong>인감증명서 첨부</strong></li>
                </ul>
            </div>

            <div class="info-box orange">
                <h4>예외: 매매 거래</h4>
                <p>매매를 원인으로 하는 소유권이전등기를 신청하는 경우, 대리인의 <strong>매도용 인감증명은 불필요</strong>합니다(등기예규 제1778호 제5조 제4항).</p>
            </div>
        </div>

        <!-- 등기필증 없는 경우 -->
        <div class="section">` },
      { heading: `5등기필증이 없는 경우`, content: `<div class="info-box law">
                <h4>처분위임장에 기재할 사항</h4>
                <p>등기필증을 잃어버린 경우, 처분위임장에 <strong>"등기필정보가 없다"</strong>는 내용을 명시해야 합니다.</p>
            </div>

            <h3>공증 요건</h3>
            <p>등기의무자가 등기필증을 멸실한 경우:</p>
            <ul>
                <li>공증을 받아야 할 서면은 <strong>처분위임장</strong>입니다</li>
                <li>수임인이 법무사에게 위임했어도 <strong>법무사 확인서가 아닌 처분위임장만 공증</strong>합니다</li>
                <li>공증 내용: 처분위임장의 <strong>등기의무자 서명/날인이 본인이 직접 한 것</strong>임을 확인하는 공증</li>
            </ul>

            <div class="info-box orange">
                <h4>금지사항</h4>
                <ul>
                    <li>법무사 확인서 첨부 금지</li>
                    <li>수임인이 공증인 앞에 출석하여 받은 공증서 첨부 금지(등기선례 5-59, 1997. 11. 14.)</li>
                </ul>
            </div>
        </div>

        <!-- 전체 절차 흐름 -->
        <div class="section">` },
      { heading: `6미입국 외국인 처분 전체 절차`, content: `<div class="step-list">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <strong>대리인 선임</strong>
                        <p style="margin-top: 0.3rem;">법무사 등 국내 대리인과 계약</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <strong>처분위임장 작성</strong>
                        <p style="margin-top: 0.3rem;">부동산, 권리, 대리인 구체적 특정</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <strong>공증 취득</strong>
                        <p style="margin-top: 0.3rem;">재외공관 또는 현지 공증인으로부터</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <strong>인감증명 첨부</strong>
                        <p style="margin-top: 0.3rem;">(인감제도 있는 국가만)</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <strong>아포스티유 첨부</strong>
                        <p style="margin-top: 0.3rem;">(필요 시)</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">6</div>
                    <div class="step-content">
                        <strong>번역문 준비</strong>
                        <p style="margin-top: 0.3rem;">외국어 문서의 한글 번역</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">7</div>
                    <div class="step-content">
                        <strong>국적 변경 등기 (필요 시)</strong>
                        <p style="margin-top: 0.3rem;">한국인→외국인 국적 변경이 있었을 때 선행</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">8</div>
                    <div class="step-content">
                        <strong>매매계약 체결</strong>
                        <p style="margin-top: 0.3rem;">대리인이 대신 계약</p>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-number">9</div>
                    <div class="step-content">
                        <strong>등기신청</strong>
                        <p style="margin-top: 0.3rem;">대리인이 법무사에게 재위임</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 첨부서류 표 -->
        <div class="section">` },
      { heading: `7미입국 외국인의 필수 첨부서류`, content: `<table class="comparison-table">
                <thead>
                    <tr>
                        <th style="width: 20%;">서류</th>
                        <th style="width: 40%;">내용</th>
                        <th style="width: 40%;">비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>처분위임장</strong></td>
                        <td>서명 공증 또는 인감 날인+인감증명</td>
                        <td>등기소 첨부정보로 제출</td>
                    </tr>
                    <tr>
                        <td><strong>공증/인감증명</strong></td>
                        <td>본국 관공서 발행 또는 재외공관 공증</td>
                        <td>필수</td>
                    </tr>
                    <tr>
                        <td><strong>여권 사본</strong></td>
                        <td>공증 처리된 여권 사본</td>
                        <td>본인 확인용</td>
                    </tr>
                    <tr>
                        <td><strong>번역문</strong></td>
                        <td>외국어 서류의 한글 번역</td>
                        <td>번역인 서명 및 신분증 필요</td>
                    </tr>
                    <tr>
                        <td><strong>아포스티유</strong></td>
                        <td>공증/인감증명에 붙임</td>
                        <td>협약 가입국만</td>
                    </tr>
                    <tr>
                        <td><strong>매매계약서</strong></td>
                        <td>검인 처리된 원본</td>
                        <td>거래신고필증도 가능</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Q&A -->
        <div class="section">` },
      { heading: `8자주하는 질문`, content: `<div class="qa-section">
                <div class="qa-item">
                    <div class="qa-q">입국 없이 한국 부동산을 팔 수 있나요?</div>
                    <div class="qa-a">
                        네, 가능합니다. 처분위임장을 통해 국내 대리인(법무사)에게 권한을 위임하면 입국하지 않고도 부동산을 판매할 수 있습니다. 다만 적절한 공증과 인감증명 처리가 필수입니다.
                        <div class="disclaimer" style="margin-top: 0.8rem;">본 내용은 일반적인 안내이며, 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">처분위임장 공증은 어디서 받나요?</div>
                    <div class="qa-a">
                        세 가지 방법이 있습니다: (1) 대한민국 재외공관의 공증담당 영사, (2) 현지국 공증인, (3) 현지 관공서 증명. 미국 거주자의 경우 미국 노터리 공증이나 한국 영사관 공증을 받을 수 있습니다.
                        <div class="disclaimer" style="margin-top: 0.8rem;">해당국 법규에 따라 공증 절차가 다를 수 있으므로, 거주국 공증 기관에 사전 확인 후 진행하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">아포스티유를 붙여야 하는 서류는 어떤 것들인가요?</div>
                    <div class="qa-a">
                        외국에서 공증받은 사문서나 외국 발행 공문서 중 아포스티유 협약 가입국의 서류에는 아포스티유를 붙여야 합니다. 예: 미국, 캐나다, 일본, 대만의 공증이나 인감증명서. 단, 모든 국가가 협약에 가입한 것은 아니므로 사전 확인이 필요합니다.
                        <div class="disclaimer" style="margin-top: 0.8rem;">아포스티유 협약 가입 여부는 각국 외교부 또는 미국 務부 웹사이트에서 확인하실 수 있습니다.</div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">인감제도가 없는 미국인은 어떻게 하나요?</div>
                    <div class="qa-a">
                        미국에는 인감증명 제도가 없으므로, 처분위임장에 서명하고 다음 중 하나를 통해 공증받으면 됩니다: (1) 미국 노터리 공증, (2) 한국 영사관 공증, (3) 미국 관공서 거주 증명. 공증을 받은 후 아포스티유를 붙입니다.
                        <div class="disclaimer" style="margin-top: 0.8rem;">정확한 공증 방법은 미국의 해당 주(State) 법규를 따르므로, 거주 주의 공증인 또는 영사관에 문의하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">위임장 작성 후 변경 사항이 생기면 어떻게 하나요?</div>
                    <div class="qa-a">
                        처분위임장의 내용(부동산, 대리인, 권리 범위 등)을 변경해야 하면 <strong>새로운 위임장을 작성</strong>해야 합니다. 기존 위임장의 수정은 인정되지 않으며, 새 위임장도 동일하게 공증 처리해야 합니다.
                        <div class="disclaimer" style="margin-top: 0.8rem;">변경 사항이 발생한 경우 법무사에게 즉시 알리시고 적절한 서류 준비 방법을 상담받으시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">부동산을 산 이후 국적이 바뀐 경우(한국인→외국인), 팔 때 절차가 다른가요?</div>
                    <div class="qa-a">
                        네, 다릅니다. 국내에서 내국인 명의로 등록된 후 외국국적을 취득한 경우, 처분을 위한 등기신청 전에 <strong>등기명의인표시 변경등기</strong>를 먼저 신청해야 합니다(부동산등기선례 제201902-3호, 2019. 2. 25.). 다만 국내거소신고나 외국인등록을 받지 않았다면 반드시 필요한 것은 아닙니다(부동산등기선례 제201808-3호, 2018. 8. 9.).
                        <div class="disclaimer" style="margin-top: 0.8rem;">본인의 구체적 상황(국내거소신고 여부, 부동산등기용 등록번호 발급 여부)에 따라 절차가 달라질 수 있으므로, 담당 법무사와 상의하시기 바랍니다.</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Box -->
        <div class="cta-box">
            <h3>처분위임장 공증, 전문가의 도움이 필요하신가요?</h3>
            <p>복잡한 국제 공증 절차와 등기 신청을 안전하게 진행하려면 외국인 부동산 등기 전문 법무사의 조력이 필수입니다.</p>
            <div class="button-group">
                <button class="btn btn-phone">전화 상담</button>
                <button class="btn btn-kakao">카톡 문의</button>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div style="margin-bottom: 1rem;">
                <strong>외국인 부동산 등기 전문</strong><br>
                2025년 기준 안내 | 등기예규·판례 기준 최신 정보
            </div>
            <div class="footer-disclaimer">
                <strong>면책 조항</strong><br>
                이 페이지의 모든 정보는 2025년 기준의 등기예규, 판례, 관계 법령을 바탕으로 작성되었습니다. 개별 사건의 구체적 상황에 따라 절차와 요건이 달라질 수 있으므로, 본 내용은 일반적인 안내일 뿐 구체적 법률 조언이 아닙니다. 정확한 진행을 위해서는 반드시 외국인 부동산 등기 전문 법무사와 상담하시기 바랍니다.
            </div>
        </div>
    </div>
</body>
</html>` },
    ],
    laws: [
    ],
    forms: [],
  },
  {
    id: 'fi-08',
    title: "인감증명 없는 나라 외국인의 부동산 매도",
    meta: "본인서명사실확인서 활용법",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<ul class="checklist">
                <li>미국, 영국, 캐나다, 호주 등 인감증명제도가 없는 나라의 국적을 가진 외국인</li>
                <li>한국 부동산을 처분(매도)하려는 외국인</li>
                <li>본국의 인감증명제도가 없어 부동산 처분 서류 작성이 어려운 경우</li>
                <li>인감증명을 대체할 방법을 찾고 있는 외국인</li>
                <li>한국에 거주하면서 부동산을 매도하려는 외국인등록자</li>
                <li>아포스티유(Apostille)나 공증 절차를 간소화하고 싶은 외국인</li>
            </ul>
        </div>

        <!-- 섹션 1: 핵심 판단 -->
        <div class="section">` },
      { heading: `핵심 판단`, content: `<div class="summary-box">
                <h3>인감증명제도 유무로 준비 방법이 달라집니다</h3>
                <p><strong>인감증명제도가 있는 나라:</strong> 일본, 대만 등</p>
                <ul>
                    <li>본국 관공서에서 인감증명 발급 가능</li>
                    <li>국내 거주 시 국내 인감신고 후 인감증명 발급 또는 본인서명사실확인서 대체 가능</li>
                </ul>
                <p><strong>인감증명제도가 없는 나라:</strong> 미국, 영국, 캐나다, 호주 등 대부분 서양 국가</p>
                <ul>
                    <li>본국 관공서의 증명 또는 공증인의 인증으로 대체</li>
                    <li>국내 거주 외국인등록자는 본인서명사실확인서 발급 가능</li>
                </ul>
            </div>
        </div>

        <!-- 섹션 2: 인감증명제도가 있는 나라의 외국인 -->
        <div class="section">` },
      { heading: `인감증명제도가 있는 나라의 외국인(일본·대만)`, content: `<h3>본국 관공서 발행 인감증명 제출</h3>
            <div class="content-text">
                일본, 대만 등 인감증명의 날인제도가 있는 나라 국적의 외국인이 한국 부동산을 처분할 때는 본국 관공서가 발행한 인감증명을 제출하면 됩니다.
            </div>

            <div class="case-box">
                <h4>특례: 부동산매도용 양식 불필요</h4>
                <div class="icon-text">
                    <span>ℹ️</span>
                    <span><strong>등기선례 제200610-12호 (2006. 10. 31. 부동산등기과)</strong><br>일본·대만 외국인이 국내 부동산 처분 시 첨부하는 본국 관공서 발행 인감증명은 매수인의 인적사항이 기재된 부동산매도용임을 요하지 않습니다. 즉, 일반 인감증명으로도 충분합니다.</span>
                </div>
            </div>

            <h3>국내 거주 시: 더 간단한 두 가지 방법</h3>
            <div class="content-text">
                국내 거주하는 일본·대만 외국인이 외국인등록을 한 경우, 다음 두 가지 방법 중 하나를 선택할 수 있습니다.
            </div>

            <ul>
                <li><strong>방법 1:</strong> 인감신고 후 인감증명 발급 (인감증명법 제3조) — 더 일반적</li>
                <li><strong>방법 2:</strong> 본인서명사실확인서 발급 (등기예규 제1609호) — 인감증명보다 간편</li>
            </ul>

            <div class="case-box">
                <h4>특수 상황: 귀화허가 취소로 무국적자가 된 경우</h4>
                <div class="icon-text">
                    <span>⚠️</span>
                    <span><strong>부동산등기선례 제201907-8호 (2019. 7. 30.)</strong><br>귀화허가 취소로 인해 무국적자가 되어 인감증명법에 따른 인감증명을 발급받을 수 없을 때는 대한민국 공증인의 인증으로 인감증명을 갈음할 수 있습니다.</span>
                </div>
            </div>
        </div>

        <!-- 섹션 3: 인감증명제도가 없는 나라의 외국인 -->
        <div class="section">` },
      { heading: `인감증명제도가 없는 나라의 외국인(미국·영국·캐나다 등)`, content: `<div class="content-text">
                미국, 영국, 캐나다, 호주 등 인감증명의 날인제도가 없는 나라의 외국인은 본국 관공서의 증명이나 공증인의 인증으로 인감증명을 갈음할 수 있습니다.
            </div>

            <h3>방법 ①: 본국 관공서의 증명</h3>
            <div class="content-text">
                인감을 날인해야 하는 서면(예: 부동산 매도용 위임장, 매매계약서 등)이 본인의 의사에 따라 작성되었음을 확인하는 뜻의 본국 관공서의 증명입니다.
            </div>
            <ul>
                <li>예: 미국 국적자의 경우 미국 영사관(주한미국대사관 또는 영사관)에서 발급한 성명확인서(Character Certificate) 또는 Notarization</li>
                <li>예: 영국 국적자의 경우 영국 관공서 또는 주한영국대사관의 증명</li>
            </ul>

            <h3>방법 ②: 공증인의 인증</h3>
            <div class="content-text">
                본국 또는 대한민국 공증인의 인증을 받을 수 있습니다. 대한민국 재외공관(영사관)의 인증도 가능합니다.
            </div>
            <ul>
                <li>미국 내 공증인(Notary Public)에게 인증 받음</li>
                <li>한국 내 공증인에게 인증 받음</li>
                <li>주한 해당국 영사관에서 인증 받음</li>
            </ul>

            <div class="warning-box">
                <h4>⚠️ 중요: 서면 그 자체에 공증받아야 함</h4>
                <div class="icon-text">
                    <span></span>
                    <span><strong>등기예규 제1778호 제9조 제3항</strong><br>공증은 서명해야 하는 서면(예: 부동산 매도용 위임장, 매매계약서 등) 그 자체에 받아야 합니다. 별도의 문서에 서명을 하고 그 문서만 공증받는 것은 불가능합니다.</span>
                </div>
            </div>

            <div class="case-box">
                <h4>예: 미국 국적자의 부동산 매도 서류 공증</h4>
                <ul>
                    <li>부동산 매도용 위임장을 영문 또는 한글로 작성</li>
                    <li>미국 내 공증인(Notary Public) 앞에서 서명하고 인증받음</li>
                    <li>공증된 서면을 아포스티유(Apostille) 처리하여 한국 부동산등기소에 제출</li>
                </ul>
            </div>
        </div>

        <!-- 섹션 4: 본인서명사실확인서 — 국내 거주 외국인의 특례 -->
        <div class="section">` },
      { heading: `본인서명사실확인서국내 거주 외국인의 특례`, content: `<div class="content-text">
                국내에 거주하는 외국인이 외국인등록을 한 경우, 본인서명사실확인서를 발급받아 인감증명을 대신할 수 있습니다. 이는 공증이나 아포스티유 같은 복잡한 국제 절차를 거치지 않아도 되므로 매우 편리합니다.
            </div>

            <h3>발급 대상</h3>
            <div class="summary-box">
                <p><strong>다음에 해당하는 사람은 본인서명사실확인서를 신청할 수 있습니다:</strong></p>
                <ul>
                    <li>대한민국 내에 주소를 가진 국민</li>
                    <li>대한민국 내에 주소를 가지지 않은 국민</li>
                    <li>출입국관리법에 따라 외국인등록을 한 사람 ← <strong>외국인은 이에 해당</strong></li>
                    <li>재외동포의 출입국과 법적 지위에 관한 법률에 따라 국내거소신고를 한 외국국적동포</li>
                </ul>
            </div>

            <h3>신청 방법</h3>
            <div class="content-text">
                다음 기관에 직접 방문하여 신청합니다:
            </div>
            <ul>
                <li>시장·군수·구청장</li>
                <li>읍장·면장·동장</li>
                <li>출장소장</li>
            </ul>

            <h3>서명 방법과 유의사항</h3>
            <div class="comparison-box">
                <h4>🌏 서명 문자 일치 규칙</h4>
                <div class="content-text">
                    본인서명사실확인서의 서명 문자와 등기신청서의 성명 문자가 일치해야 합니다 (등기예규 제1609호 제3조 제2항).
                </div>
                <table>
                    <tr>
                        <th>서명 문자</th>
                        <th>등기신청서 성명 기재</th>
                        <th>예시</th>
                    </tr>
                    <tr>
                        <td>한글로 서명</td>
                        <td>반드시 한글로 기재</td>
                        <td>김철수</td>
                    </tr>
                    <tr>
                        <td>한자로 서명</td>
                        <td>반드시 한자로 기재</td>
                        <td>金鐵水</td>
                    </tr>
                    <tr>
                        <td>영문으로 서명</td>
                        <td>반드시 영문으로 기재</td>
                        <td>Kim Chul-su</td>
                    </tr>
                </table>
            </div>

            <h3>수리 거부 사유</h3>
            <div class="warning-box">
                <h4>⚠️ 다음의 경우 수리가 거부됩니다</h4>
                <div class="content-text">
                    (등기예규 제1609호 제3조 제4항)
                </div>
                <ul>
                    <li>서명 문자가 서로 다른 경우 (한글 서명 → 영문 등기신청)</li>
                    <li>성명을 전부 기재하지 않거나 서명이 성명과 다른 경우</li>
                    <li>알아볼 수 없을 정도로 흘려 쓰거나 작게 쓰거나 겹쳐 쓴 경우</li>
                    <li>성명 외의 글자나 문양을 포함한 경우</li>
                </ul>
            </div>

            <h3>부동산 관련 용도란 기재</h3>
            <div class="content-text">
                본인서명사실확인서 신청 시 "부동산 관련 용도" 란에 다음을 모두 기재해야 합니다 (등기예규 제1609호 제6조).
            </div>
            <ul>
                <li>신청할 등기 유형 (예: 소유권이전등기, 抵當權設定등기)</li>
                <li>거래상대방의 성명</li>
                <li>거래상대방의 주소</li>
                <li>거래상대방의 주민등록번호 (법인이면 명칭·주사무소·법인등록번호)</li>
            </ul>

            <div class="case-box">
                <h4>기재 예시</h4>
                <div class="content-text">
                    "서울시 강남구 테헤란로 123에 소재하는 부동산에 대한 소유권이전등기 신청. 거래상대방: 이순신(950101-1234567)"
                </div>
            </div>

            <h3>⚡ 유효기간: 3개월</h3>
            <div class="warning-box">
                <h4>⚡ 발행일부터 3개월 이내 사용</h4>
                <div class="content-text">
                    본인서명사실확인서는 발행일부터 3개월 이내에 등기신청서와 함께 제출해야 합니다 (등기예규 제1609호 제9조). 3개월이 지나면 새로 발급받아야 합니다.
                </div>
            </div>
        </div>

        <!-- 섹션 5: 비교표 -->
        <div class="section">` },
      { heading: `상황별 대응 방법 비교`, content: `<table>
                <thead>
                    <tr>
                        <th>국적 / 상황</th>
                        <th>인감증명 대체 방법</th>
                        <th>난이도</th>
                        <th>소요 시간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>일본·대만 국적 (본국)</td>
                        <td>본국 관공서 발행 인감증명</td>
                        <td>중상</td>
                        <td>1~2주</td>
                    </tr>
                    <tr>
                        <td>일본·대만 국적 (국내 거주, 외국인등록)</td>
                        <td>①인감신고 후 인감증명 또는 ②본인서명사실확인서</td>
                        <td>하</td>
                        <td>2~3일</td>
                    </tr>
                    <tr>
                        <td>미국·영국 등 (본국)</td>
                        <td>①본국 관공서의 증명 또는 ②본국 공증인의 인증 + 아포스티유</td>
                        <td>상</td>
                        <td>3~4주</td>
                    </tr>
                    <tr>
                        <td>미국·영국 등 (국내 거주, 외국인등록)</td>
                        <td>①본인서명사실확인서 (가장 간단) 또는 ②공증인 인증 + 아포스티유</td>
                        <td>하</td>
                        <td>2~3일 (①의 경우)</td>
                    </tr>
                    <tr>
                        <td>국내 거주 외국국적동포 (국내거소신고)</td>
                        <td>①인감신고 후 인감증명 또는 ②본인서명사실확인서</td>
                        <td>하</td>
                        <td>2~3일</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 섹션 6: 관련 판례 및 예규 -->
        <div class="section">` },
      { heading: `관련 판례 및 예규`, content: `<div class="precedent-box">
                <h4>등기예규 제1609호</h4>
                <p><strong>제목:</strong> 본인서명사실확인서에 관한 사항</p>
                <p><strong>주요 내용:</strong> 등기소에 제출하는 신청서 등에 인감증명을 첨부해야 하는 경우, 서명을 하고 본인서명사실확인서(또는 전자본인서명확인서 발급증)를 첨부할 수 있습니다. 서명 문자는 본인서명사실확인서와 등기신청서에서 일치해야 하며, 유효기간은 3개월입니다.</p>
                <p><strong>적용 대상:</strong> 국내 거주 외국인등록자, 국내거소신고 외국국적동포 등</p>
            </div>

            <div class="precedent-box">
                <h4>등기예규 제1778호 제12조 제2항</h4>
                <p><strong>주요 내용:</strong> 외국인등록이나 국내거소신고를 하지 않아 인감증명법에 따른 인감증명을 발급받을 수 없고 본국에 인감증명제도가 없는 외국인은:</p>
                <ul>
                    <li>①인감을 날인해야 하는 서면이 본인의 의사에 따라 작성되었음을 확인하는 뜻의 본국 관공서의 증명</li>
                    <li>②본국 또는 대한민국 공증인의 인증 (대한민국 재외공관의 인증 포함)</li>
                    <li>으로 인감증명의 제출을 갈음할 수 있습니다.</li>
                </ul>
                <p><strong>적용 대상:</strong> 미국, 영국, 캐나다 등 인감증명제도가 없는 나라의 외국인 (국내 거주하지 않거나 외국인등록을 하지 않은 경우)</p>
            </div>

            <div class="precedent-box">
                <h4>등기예규 제1778호 제9조 제3항</h4>
                <p><strong>주요 내용:</strong> 공증은 서명해야 하는 서면 그 자체에 받아야 하며, 별도 문서에 서명 후 공증하는 것은 불가능합니다.</p>
                <p><strong>적용 상황:</strong> 외국인이 부동산 처분 관련 서면(위임장, 매매계약서 등)을 공증받을 때</p>
            </div>

            <div class="precedent-box">
                <h4>등기선례 제200610-12호<br>(2006. 10. 31. 부동산등기과-3230 질의회답)</h4>
                <p><strong>주요 내용:</strong> 일본·대만 외국인이 국내 부동산을 처분할 때 첨부하는 본국 관공서 발행 인감증명은 부동산매도용(매수인 인적사항 기재)을 요하지 않습니다. 일반 인감증명으로 충분합니다.</p>
                <p><strong>적용 대상:</strong> 일본·대만 국적의 외국인</p>
            </div>

            <div class="precedent-box">
                <h4>부동산등기선례 제201907-8호<br>(2019. 7. 30.)</h4>
                <p><strong>주요 내용:</strong> 귀화허가 취소로 무국적자가 되어 인감증명법에 따른 인감증명을 발급받을 수 없을 때는 대한민국 공증인의 인증으로 인감증명을 갈음할 수 있습니다.</p>
                <p><strong>적용 대상:</strong> 귀화허가 취소로 무국적자가 된 자</p>
            </div>
        </div>

        <!-- 섹션 7: Q&A -->
        <div class="section">` },
      { heading: `자주 하는 질문 (Q&A)`, content: `<div class="faq-item">
                <strong>Q. 미국 국적자가 한국 부동산을 매도할 때 인감증명은 어떻게 준비하나요?</strong>
                <p><strong>A.</strong> 미국은 인감증명제도가 없으므로 다음 중 하나의 방법으로 대체할 수 있습니다:</p>
                <ul>
                    <li>①미국 영사관에서 발급한 성명확인서(Character Certificate) 또는 Notarization</li>
                    <li>②미국 내 공증인(Notary Public) 앞에서 서명하고 인증받은 부동산 처분 서면 (아포스티유 필수)</li>
                    <li>③한국에 거주하며 외국인등록을 했다면 <strong>본인서명사실확인서</strong> (가장 간단)</li>
                </ul>
                <p><strong>참고:</strong> 위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
            </div>

            <div class="faq-item">
                <strong>Q. 일본 국적자가 한국 부동산을 매도할 때 인감증명은 반드시 "부동산매도용"이어야 하나요?</strong>
                <p><strong>A.</strong> 아니요, 일반 인감증명으로 충분합니다 (등기선례 제200610-12호). 매수인의 인적사항이 기재된 부동산매도용 인감증명을 별도로 발급받을 필요가 없습니다.</p>
                <p><strong>참고:</strong> 위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
            </div>

            <div class="faq-item">
                <strong>Q. 한국에 와서 외국인등록을 하면 어떻게 달라지나요?</strong>
                <p><strong>A.</strong> 외국인등록을 하면 국적과 관계없이 <strong>본인서명사실확인서를 발급받을 수 있습니다.</strong> 이는 인감증명이나 공증을 받지 않아도 부동산 등기신청서에 첨부할 수 있으므로 매우 편리합니다.</p>
                <ul>
                    <li>본국 관공서의 증명이나 공증을 받을 필요가 없음</li>
                    <li>아포스티유 처리가 필요 없음</li>
                    <li>신청 후 2~3일 내에 발급받을 수 있음</li>
                </ul>
                <p><strong>참고:</strong> 위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
            </div>

            <div class="faq-item">
                <strong>Q. 본인서명사실확인서는 어디에서, 어떻게 신청하나요?</strong>
                <p><strong>A.</strong> 본인서명사실확인서는 다음 기관에 직접 방문하여 신청합니다:</p>
                <ul>
                    <li>시청·군청·구청 (해당 지역의 민원실)</li>
                    <li>읍·면·동 주민센터</li>
                    <li>출장소</li>
                </ul>
                <p><strong>준비물:</strong> 외국인등록증, 여권, 부동산 관련 서류 (계약서 등)</p>
                <p><strong>신청 시 주의:</strong> "부동산 관련 용도" 란에 거래상대방의 성명, 주소, 주민등록번호 등을 정확히 기재해야 합니다.</p>
                <p><strong>참고:</strong> 위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
            </div>

            <div class="faq-item">
                <strong>Q. 공증은 어디에서 받을 수 있나요?</strong>
                <p><strong>A.</strong> 공증은 다음 세 곳에서 받을 수 있습니다:</p>
                <ul>
                    <li><strong>본국 (본인 국적국):</strong> 본국의 공증인 또는 Notary Public (예: 미국의 Notary Public)</li>
                    <li><strong>한국 내:</strong> 대한민국 공증인 (대법원 공증인협회 참고)</li>
                    <li><strong>외국 내 한국 영사관:</strong> 주미국대사관 또는 미국 내 한국 총영사관 등 재외공관에서도 공증 업무 가능</li>
                </ul>
                <p><strong>중요:</strong> 공증은 부동산 처분 서면 그 자체(예: 위임장, 매매계약서)에 받아야 하며, 별도 문서에만 공증하는 것은 불가능합니다 (등기예규 제1778호 제9조 제3항).</p>
                <p><strong>참고:</strong> 위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
            </div>

            <div class="faq-item">
                <strong>Q. 공증받은 서면에 아포스티유(Apostille)가 필요한가요?</strong>
                <p><strong>A.</strong> 네, 필요합니다. 본국에서 공증받은 서면을 한국 부동산등기소에 제출할 때는 <strong>아포스티유(Apostille) 처리가 필수</strong>입니다.</p>
                <ul>
                    <li><strong>본국 공증:</strong> 본국 정부 기관에서 아포스티유 처리</li>
                    <li><strong>미국 공증:</strong> 미국 국무부(State Department) 또는 해당 주 정부에서 아포스티유 처리</li>
                </ul>
                <p><strong>간단한 방법:</strong> 한국에 거주하며 외국인등록을 했다면 본인서명사실확인서를 발급받으면 아포스티유 처리가 필요 없습니다.</p>
                <p><strong>참고:</strong> 위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
            </div>
        </div>

        <!-- 섹션 8: 다음으로 확인할 내용 -->
        <div class="related-links">
            <h3>다음으로 확인할 내용</h3>
            <ul>
                <li><a href="외등_07_외국인처분.html">외등_07_외국인처분.html — 외국인의 처분위임장 공증 가이드</a></li>
                <li><a href="외등_06_국적별서류.html">외등_06_국적별서류.html — 국적별 외국인 부동산 취득 서류 가이드</a></li>
                <li><a href="외등_25_아포스티유.html">외등_25_아포스티유.html — 아포스티유 완벽 가이드</a></li>
            </ul>
        </div>

        <!-- 섹션 9: 상담 CTA 박스 -->
        <div class="cta-box">` },
      { heading: `이 내용이 해당되시나요?`, content: `<p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다.<br>서류 준비부터 신청까지 법무사가 함께합니다.</p>
            <p style="font-size: 16px; color: #c8a96e; font-weight: 700; margin: 15px 0;">첫 상담은 무료입니다.</p>
            <div class="button-group">
                <button class="btn btn-phone">☎️ 전화 상담</button>
                <button class="btn btn-kakaotalk">💬 카카오톡 상담</button>
            </div>
        </div>

        <!-- 섹션 10: 면책 문구 + 기준일 -->
        <div class="disclaimer">
            <p><strong>면책 문구</strong></p>
            <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 특정 사건에 대한 법률 조언이 아닙니다. 외국인의 부동산 등기는 국적, 체류 자격, 거주지, 개별 사안 등에 따라 준비 서류와 절차가 상이할 수 있습니다. 정확한 법률 조언을 위해 변호사 또는 법무사와 상담하시기 바랍니다.</p>
            <p><strong>기준일:</strong> 이 페이지는 2025년 현행 법령 기준으로 작성되었습니다. 법령 개정이 있을 수 있으므로 최신 정보는 대법원 또는 해당 정부 부처 웹사이트에서 확인하시기 바랍니다.</p>
        </div>
    </div>
</body>
</html>` },
    ],
    laws: [
      { name: `등기예규 제1609호`, desc: `제목: 본인서명사실확인서에 관한 사항` },
      { name: `등기예규 제1778호 제12조 제2항`, desc: `주요 내용: 외국인등록이나 국내거소신고를 하지 않아 인감증명법에 따른 인감증명을 발급받을 수 없고 본국에 인감증명제도가 없는 외국인은:` },
      { name: `등기예규 제1778호 제9조 제3항`, desc: `주요 내용: 공증은 서명해야 하는 서면 그 자체에 받아야 하며, 별도 문서에 서명 후 공증하는 것은 불가능합니다.` },
      { name: `등기선례 제200610-12호(2006. 10. 31. 부동산등기과-3230 질의회답)`, desc: `주요 내용: 일본·대만 외국인이 국내 부동산을 처분할 때 첨부하는 본국 관공서 발행 인감증명은 부동산매도용(매수인 인적사항 기재)을 요하지 않습니다. 일반 인감증명으로 충분합니다.` },
      { name: `부동산등기선례 제201907-8호(2019. 7. 30.)`, desc: `주요 내용: 귀화허가 취소로 무국적자가 되어 인감증명법에 따른 인감증명을 발급받을 수 없을 때는 대한민국 공증인의 인증으로 인감증명을 갈음할 수 있습니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-09',
    title: "외국인의 한국 부동산 법정상속등기",
    meta: "준거법부터 신청 절차까지",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
                    <h4>다음 중 하나에 해당하신다면 이 내용을 읽어보세요</h4>
                    <ul>
                        <li>외국 국적을 취득했거나 외국에 거주하면서 한국 부동산을 상속받는 경우</li>
                        <li>피상속인이 외국 국적이지만 한국 부동산을 남기고 사망한 경우</li>
                        <li>상속인 중 일부가 귀화했거나 외국에 입양되어 국적이 없는 경우</li>
                        <li>피상속인이 외국에서 사망했는데 한국에 부동산이 있는 경우</li>
                        <li>상속인이 한국에 미입국 상태이고 원격으로 등기를 신청해야 하는 경우</li>
                        <li>외국 발급 서류(아포스티유, 번역공증)를 첨부하여 등기를 신청하는 경우</li>
                    </ul>
                </div>` },
      { heading: `1. 이 절차가 왜 필요한가`, content: `<div class="why-box">
                    <h3>상속등기는 필수입니다</h3>
                    <h4>등기 없이는 처분 불가</h4>
                    <p>민법 제187조는 "부동산의 처분은 등기가 있어야만 그 효력이 생긴다"고 규정합니다. 상속받은 부동산을 매도하거나, 근저당권을 설정하거나, 자녀에게 증여하려면 반드시 상속등기를 마쳐야 합니다.</p>

                    <h4>준거법 결정이 선행되어야 함</h4>
                    <p>국제사법 제49조는 "상속은 사망 당시 피상속인의 본국법에 의한다"고 규정합니다. 따라서 상속인 범위와 상속분을 결정하기 위해서는 먼저 피상속인의 국적을 확인하고, 그 국가의 상속법을 준거법으로 삼아야 합니다.</p>

                    <h4>피상속인 국적에 따라 상속인과 상속분이 달라짐</h4>
                    <ul>
                        <li><strong>피상속인이 한국인:</strong> 민법 제1004조 이하의 상속순위 적용</li>
                        <li><strong>피상속인이 외국인:</strong> 그 국가의 상속법(미국: 주법, 일본: 민법 등) 적용</li>
                        <li><strong>반정(상호존중주의):</strong> 외국법이 한국 부동산에 대해 한국법을 적용하도록 하면, 한국법 적용 가능</li>
                    </ul>
                </div>` },
      { heading: `2. 전체 절차 흐름 요약`, content: `<div class="process-flow">
                    <h3>5단계로 진행되는 상속등기 절차</h3>
                    <div class="flow-step">
                        <div class="step-num">1</div>
                        <div>피상속인 국적 및 준거법 확인</div>
                    </div>
                    <div class="flow-step">
                        <div class="step-num">2</div>
                        <div>상속인 확정 (본국법에 따라)</div>
                    </div>
                    <div class="flow-step">
                        <div class="step-num">3</div>
                        <div>상속증명서류 수집</div>
                    </div>
                    <div class="flow-step">
                        <div class="step-num">4</div>
                        <div>부동산등기용 등록번호 확보</div>
                    </div>
                    <div class="flow-step">
                        <div class="step-num">5</div>
                        <div>등기소에 상속등기 신청</div>
                    </div>
                </div>

                <h4>신청 방법에 따른 차이</h4>
                <table>
                    <thead>
                        <tr>
                            <th>상황</th>
                            <th>신청 방법</th>
                            <th>필수 준비물</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>상속인이 한국에 입국한 경우</td>
                            <td>• 등기소 직접 방문<br>• 법무사 위임</td>
                            <td>한국 발급 신분증, 외국인등록증</td>
                        </tr>
                        <tr>
                            <td>상속인이 한국에 미입국인 경우</td>
                            <td>• 재외공관 공증 위임장<br>• 법무사 대리 신청</td>
                            <td>아포스티유/공증, 번역문, 거주증명</td>
                        </tr>
                    </tbody>
                </table>` },
      { heading: `3. 단계별 상세 절차`, content: `<div class="steps-detail">
                    <h3>단계 1: 피상속인 국적 및 준거법 확인</h3>
                    <h4>한국인 피상속인</h4>
                    <p>한국 민법 제1000조 이하의 상속 규정이 그대로 적용됩니다. 한국 발급 기본증명서, 가족관계증명서, 제적등본 등으로 상속인을 확정합니다.</p>

                    <h4>외국인 피상속인</h4>
                    <p>해당 국가의 상속법이 준거법이 됩니다. 예를 들어:</p>
                    <ul>
                        <li><strong>미국:</strong> 각 주(State)의 상속법 (Uniform Probate Code 등)</li>
                        <li><strong>일본:</strong> 일본 민법 제881조 이하</li>
                        <li><strong>중국:</strong> 중국 민법 제1127조 이하</li>
                        <li><strong>독일:</strong> 독일 BGB(독일민법) 제1924조 이하</li>
                    </ul>

                    <h4>반정(상호존중주의) 적용</h4>
                    <p>국제사법 제9조 제1항에 따르면, 외국법이 한국법을 적용하도록 지정하면 한국법을 적용할 수 있습니다. 미국 Restatement §249에서는 부동산 소재지국(한국) 법률을 적용하도록 규정하므로, 한국법 적용이 가능한 경우가 많습니다.</p>
                </div>

                <div class="steps-detail">
                    <h3>단계 2: 상속인 확정</h3>
                    <h4>상속인 범위 결정 (현행 민법 기준, 1991년 이후 사망)</h4>
                    <ul>
                        <li><strong>1순위:</strong> 직계비속 + 배우자 (항상 상속인)</li>
                        <li><strong>2순위:</strong> 직계존속 + 배우자 (직계비속이 없을 때)</li>
                        <li><strong>3순위:</strong> 형제자매</li>
                        <li><strong>4순위:</strong> 4촌 이내 방계혈족</li>
                    </ul>

                    <h4>특수한 사안: 귀화자, 국적상실자의 상속권</h4>
                    <p>다음의 등기선례들이 참고됩니다:</p>
                    <ul>
                        <li><strong>귀화자:</strong> 귀화 시기가 피상속인 사망 전후 불문하고, 민법 제1004조의 흠결 사유가 없으면 상속권 있음 (등기예규 제99호, 1967)</li>
                        <li><strong>국적상실자:</strong> 외국에 입양되어 국적을 상실한 자도 친족관계가 유지되면 상속권 있음 (등기선례 6-219, 1999)</li>
                        <li><strong>국적회복 중 사망:</strong> 국적회복 허가 전에 사망한 경우, 본국법에 따른 상속인이 본국 상속증명서로 신청 (등기선례 제7-175호, 2003)</li>
                    </ul>
                </div>

                <div class="steps-detail">
                    <h3>단계 3: 상속증명서류 수집</h3>
                    <h4>한국 내 입국한 상속인</h4>
                    <ul>
                        <li>기본증명서 (사망자)</li>
                        <li>가족관계증명서 (사망자, 상속인)</li>
                        <li>제적등본 (필요시)</li>
                        <li>외국인등록사실증명 또는 외국인등록증</li>
                        <li>부동산등기용 등록번호 증명</li>
                    </ul>

                    <h4>미입국 상속인</h4>
                    <ul>
                        <li>본국 사망증명서 (아포스티유 또는 재외공관 공증)</li>
                        <li>본국 상속인증명서 (아포스티유 또는 재외공관 공증)</li>
                        <li>한글 번역문 (공인된 번역사 번역)</li>
                        <li>재외공관 발급 거주증명 또는 본국 관공서 발급 주소증명서</li>
                        <li>재외공관 공증 위임장 또는 본국 공증 위임장 + 아포스티유</li>
                        <li>부동산등기용 등록번호 증명</li>
                    </ul>
                </div>

                <div class="steps-detail">
                    <h3>단계 4: 부동산등기용 등록번호 확보</h3>
                    <p>외국인이 한국에서 부동산등기를 신청할 때는 외국인등록번호(개인) 또는 부동산등기용 등록번호(개인사업자, 법인 등)가 필요합니다. 미입국인이나 등록번호가 없는 경우 먼저 이 번호를 취득해야 합니다.</p>
                    <p>자세한 신청 방법은 외등_05_등록번호.html을 참고하세요.</p>
                </div>

                <div class="steps-detail">
                    <h3>단계 5: 등기소에 상속등기 신청</h3>
                    <h4>신청처</h4>
                    <p>부동산이 소재한 관할 등기소에 신청합니다. (예: 서울 강남구 부동산 → 강남구청 관할 등기소)</p>

                    <h4>신청 서류</h4>
                    <ul>
                        <li>상속등기신청서</li>
                        <li>상속을 증명하는 서면 (위 단계 3에서 수집한 서류)</li>
                        <li>등기의무자(피상속인) 관련 서면</li>
                        <li>신청인 주소증명서</li>
                    </ul>

                    <h4>아포스티유 가입국의 서류</h4>
                    <p>미국, 일본, 중국, 독일 등 헤이그 아포스티유 협약 가입국에서 발급한 서류는 반드시 아포스티유를 첨부해야 합니다. 만약 아포스티유 없이 공증만 받으면 등기소에서 보정명령을 통해 아포스티유를 다시 받도록 요구합니다.</p>
                </div>` },
      { heading: `4. 첨부서류 목록`, content: `<h3>한국 내 입국한 상속인의 경우</h3>
                <table>
                    <thead>
                        <tr>
                            <th>서류명</th>
                            <th>발급기관</th>
                            <th>주의사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>상속을 증명하는 서면</td>
                            <td>한국 관공서 (시청, 구청)</td>
                            <td>기본증명서, 가족관계증명서, 제적등본 (사망자 기준일: 사망 당시)</td>
                        </tr>
                        <tr>
                            <td>주소를 증명하는 서면</td>
                            <td>출입국관리사무소</td>
                            <td>외국인등록사실증명 또는 외국인등록증 (4개월 이내 발급)</td>
                        </tr>
                        <tr>
                            <td>등기원인을 증명하는 서면</td>
                            <td>병원 또는 관공서</td>
                            <td>사망진단서 또는 기본증명서 (사망 기재)</td>
                        </tr>
                        <tr>
                            <td>등록번호증명 서면</td>
                            <td>출입국관리사무소</td>
                            <td>외국인등록번호증명 또는 부동산등기용 등록번호 증명</td>
                        </tr>
                        <tr>
                            <td>등기의무자 관련 서면</td>
                            <td>한국 관공서</td>
                            <td>피상속인의 인적사항, 주소 등 확인 가능한 서류</td>
                        </tr>
                    </tbody>
                </table>

                <h3>한국 미입국 상속인의 경우</h3>
                <table>
                    <thead>
                        <tr>
                            <th>서류명</th>
                            <th>발급처 / 방법</th>
                            <th>주의사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>본국 발행 사망증명서</td>
                            <td>본국 관공서</td>
                            <td>아포스티유 또는 재외공관 공증 + 한글 번역문 필수</td>
                        </tr>
                        <tr>
                            <td>본국 상속인증명서</td>
                            <td>본국 관공서 (예: 호적증명)</td>
                            <td>아포스티유 또는 재외공관 공증 + 한글 번역문 필수</td>
                        </tr>
                        <tr>
                            <td>주소증명서류</td>
                            <td>재외공관 또는 본국 관공서</td>
                            <td>거주증명 또는 본국 주소증명서 (4개월 이내 발급)</td>
                        </tr>
                        <tr>
                            <td>위임장</td>
                            <td>재외공관 공증 또는 본국 공증</td>
                            <td>법무사 대리 신청 시 필수 (공증 + 한글 번역)</td>
                        </tr>
                        <tr>
                            <td>부동산등기용 등록번호 증명</td>
                            <td>대한민국 대사관·총영사관</td>
                            <td>미리 신청하여 취득</td>
                        </tr>
                    </tbody>
                </table>` },
      { heading: `5. 비용 안내`, content: `<div class="warning-box">
                    <h4>등기신청 시 납부할 세금 및 수수료</h4>
                    <p>상속등기를 신청할 때 납부하는 비용은 다음과 같습니다. 정확한 금액은 부동산 가격에 따라 달라지므로 위텍스(www.wetax.go.kr)에서 조회하거나 담당 법무사와 상담하세요.</p>
                </div>

                <h4>주요 세금 및 수수료 항목</h4>
                <ul>
                    <li><strong>등록면허세:</strong> 부동산 가격의 일정 비율 (1회)</li>
                    <li><strong>지방교육세:</strong> 등록면허세의 20% (1회)</li>
                    <li><strong>농어촌특별세:</strong> 해당 지역이면 등록면허세의 일정 비율 (1회)</li>
                    <li><strong>등기신청수수료:</strong> 등기소 수수료 규정에 따름 (1회)</li>
                </ul>

                <h4>별도 처리 필요한 세금</h4>
                <p>상속에 따른 취득세는 상속등기 후 별도로 관할 시군구청에 신고하여 납부하게 됩니다. 이는 등기신청 시점이 아니라 취득일로부터 일정 기간 내에 신고해야 합니다.</p>

                <h4>비용 조회</h4>
                <p>위텍스(www.wetax.go.kr)에 접속하여 부동산 가격, 취득 원인, 소재지를 입력하면 납부할 세금과 수수료를 미리 계산할 수 있습니다.</p>` },
      { heading: `6. 관련 판례 및 예규`, content: `<div class="precedent-box">
                    <h4>국제사법 제49조</h4>
                    <p>"상속은 사망 당시 피상속인의 본국법에 의한다"</p>
                    <p><strong>의미:</strong> 상속 준거법을 결정하는 가장 기본이 되는 법규입니다. 피상속인의 국적이 상속인 범위, 상속분, 유류분 등을 결정합니다.</p>
                </div>

                <div class="precedent-box">
                    <h4>등기예규 제99호 (1967. 1. 16.)</h4>
                    <p><strong>사안:</strong> 귀화한 직계비속의 재산상속권</p>
                    <p><strong>선례:</strong> 피상속인의 사망 전후를 불문하고 귀화한 직계비속도 민법 제1004조의 흠결사유가 없으면 상속인이 된다.</p>
                </div>

                <div class="precedent-box">
                    <h4>등기선례 6-219 (1999. 5. 20.)</h4>
                    <p><strong>사안:</strong> 외국에 입양되어 국적상실로 제적된 자의 상속권</p>
                    <p><strong>선례:</strong> 피상속인의 직계비속이 외국국으로 입양되어 국적을 상실하고 제적된 경우에도 친족관계는 유지되므로 상속권이 있다.</p>
                </div>

                <div class="precedent-box">
                    <h4>등기선례 제7-175호 (2003. 4. 22.)</h4>
                    <p><strong>사안:</strong> 국적회복허가신청 후 허가 전 사망</p>
                    <p><strong>선례:</strong> 국적회복을 신청했으나 허가 전에 사망한 경우, 피상속인의 본국법에 의한 상속인이 본국법에 근거한 상속증명서면을 첨부하여 신청할 수 있다.</p>
                </div>

                <div class="precedent-box">
                    <h4>등기선례 제5-306호 (1998. 7. 1.)</h4>
                    <p><strong>사안:</strong> 혼인을 통해 한국국적 취득 후 국적 상실 시 상속권</p>
                    <p><strong>선례:</strong> 일본인 여자가 한국인 남자와 혼인하여 한국 국적을 취득한 후 6개월 경과 후 국적을 상실한 경우에도 혼인의 효력에 변동이 없으므로 한국인 배우자로부터 상속받을 수 있다.</p>
                </div>

                <div class="precedent-box">
                    <h4>등기선례 제5-302호 (1998. 1. 17.)</h4>
                    <p><strong>사안:</strong> 미합중국 시민권자 거주증명서 생년월일 불일치</p>
                    <p><strong>선례:</strong> 미국 시민권자의 거주증명서상 생년월일이 한국 호적상 생년월일과 불일치하는 경우, 생년월일을 일치시킨 후 거주증명서를 다시 발급받아야 등기신청이 가능하다.</p>
                </div>` },
      { heading: `7. 자주 발생하는 문제와 해결책`, content: `<div class="warning-box">
                    <h4>⚠️ 서류 번역문 누락</h4>
                    <p><strong>문제:</strong> 외국 발급 서류(사망증명서, 상속인증명서 등)를 아포스티유만 받고 한글 번역문을 첨부하지 않음</p>
                    <p><strong>해결:</strong> 공인된 외국어번역사에게 전문 분야(법률) 번역을 의뢰하고, 번역사 인장과 서명이 있는 번역문을 첨부해야 합니다. 등기소에서 번역문이 없으면 보정명령을 통해 요구합니다.</p>
                </div>

                <div class="warning-box">
                    <h4>⚠️ 아포스티유 미부착</h4>
                    <p><strong>문제:</strong> 헤이그 협약 가입국(미국, 일본, 중국 등)에서 발급한 서류에 아포스티유를 첨부하지 않음</p>
                    <p><strong>해결:</strong> 본국 관공서에 아포스티유를 신청하여 다시 받아야 합니다. 아포스티유가 없으면 외국 서류로 인정받지 못합니다.</p>
                </div>

                <div class="warning-box">
                    <h4>⚠️ 생년월일 불일치</h4>
                    <p><strong>문제:</strong> 거주증명서의 생년월일과 한국 호적의 생년월일이 다름 (예: 미국 시민권자 케이스)</p>
                    <p><strong>해결:</strong> 본국에서 생년월일을 정정한 새로운 문서를 발급받아야 합니다. 호적 정정이 필요한 경우 가정법원에 인정청구를 해야 할 수도 있습니다.</p>
                </div>

                <div class="warning-box">
                    <h4>⚠️ 상속인 중 행방불명인 경우</h4>
                    <p><strong>문제:</strong> 같은 상속순위의 상속인 중 일부가 행방불명이거나 의사표시를 거부함</p>
                    <p><strong>해결:</strong> 부동산 소재지 관할 지방법원에 상속재산분할심판을 청구하거나, 한국에 입국한 상속인들만으로 협의분할 등기를 진행할 수 있습니다. 외국인 상속인의 경우 재외공관을 통한 조회 및 확인이 필요합니다.</p>
                </div>

                <div class="warning-box">
                    <h4>⚠️ 보정명령 대상 흔한 실수</h4>
                    <p><strong>주요 보정 사유:</strong></p>
                    <ul>
                        <li>외국 서류에 아포스티유 미부착</li>
                        <li>번역문 미첨부 또는 번역사 인장 누락</li>
                        <li>위임장 아포스티유 미부착</li>
                        <li>생년월일 불일치</li>
                        <li>외국인등록번호 미기재 또는 잘못 기재</li>
                        <li>거주증명 유효기간 경과 (4개월 이상 된 문서)</li>
                    </ul>
                    <p><strong>대처:</strong> 등기소의 보정명령을 받으면 지정 기간 내에 보정서류를 제출해야 합니다. 기한을 넘기면 신청이 각하될 수 있습니다.</p>
                </div>` },
      { heading: `8. 자주 묻는 질문 (Q&A)`, content: `<div class="qna-item">
                    <h4>Q. 미국 국적 아버지가 한국 부동산을 남기고 사망했습니다. 어떤 법이 적용되나요?</h4>
                    <div class="qna-answer">
                        <p>A. 국제사법 제49조에 따라 피상속인(아버지)의 본국법인 미국 법이 준거법입니다. 다만, 미국 법이 한국 부동산에 대해 한국 민법을 적용하도록 규정하면(Restatement §249), 한국 민법을 적용할 수 있습니다(반정). 미국은 주(State)별로 상속법이 다르므로, 아버지가 사망 당시 거주하던 주의 상속법을 확인해야 합니다. 일반적으로 미국에서는 상속인 범위와 상속분이 한국 민법과 유사하지만, 배우자의 상속분이 다를 수 있습니다. 미국 변호사 또는 법무사의 확인이 필요합니다.</p>
                        <div class="qna-note">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qna-item">
                    <h4>Q. 귀화한 자녀도 상속권이 있나요?</h4>
                    <div class="qna-answer">
                        <p>A. 네, 있습니다. 등기예규 제99호(1967년)에 따르면, 피상속인의 사망 전후를 불문하고 귀화한 직계비속도 민법 제1004조의 흠결사유가 없으면 상속인이 됩니다. 흠결사유는 한국 민법 상 상속인이 될 수 없는 경우(예: 폐지된 신분)를 의미합니다. 따라서 단순히 귀화했다고 해서 상속권이 없어지는 것은 아닙니다.</p>
                        <div class="qna-note">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qna-item">
                    <h4>Q. 외국에서 한국어를 모르는 외국인 상속인이 있습니다. 등기를 어떻게 신청하나요?</h4>
                    <div class="qna-answer">
                        <p>A. 두 가지 방법이 있습니다. 첫 번째, 상속인이 한국에 입국하여 법무사에게 위임하고 법무사가 대리하여 신청하는 방법입니다. 이 경우 위임장을 한글로 작성하고 상속인이 서명하면 됩니다. 두 번째, 상속인이 한국에 미입국인 경우 재외공관에서 위임장을 공증받고, 공증된 위임장을 법무사에게 제출하여 신청하는 방법입니다. 모든 외국 서류는 아포스티유를 받고 한글로 번역하여 제출해야 합니다.</p>
                        <div class="qna-note">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qna-item">
                    <h4>Q. 아포스티유란 무엇이고 어디서 받나요?</h4>
                    <div class="qna-answer">
                        <p>A. 아포스티유(Apostille)는 헤이그 협약(Hague Apostille Convention, 1961)에 따른 국제공증 제도입니다. 외국에서 발급한 공문서(사망증명서, 호적증명서 등)가 한국에서 진정성을 인정받기 위해 반드시 필요합니다. 미국, 일본, 중국, 독일 등 주요 국가는 모두 아포스티유 협약 가입국입니다. 아포스티유는 문서를 발급한 본국의 관공서(외교부, 법무부 등)에 신청합니다. 자세한 방법은 외등_25_아포스티유.html을 참고하세요.</p>
                        <div class="qna-note">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qna-item">
                    <h4>Q. 상속등기를 하지 않으면 어떻게 되나요?</h4>
                    <div class="qna-answer">
                        <p>A. 상속등기를 하지 않으면 부동산을 처분(매도, 근저당 설정, 증여 등)할 수 없습니다. 민법 제187조는 "부동산 처분은 등기가 있어야 효력이 생긴다"고 규정하기 때문입니다. 또한 추후 다른 상속인이 등기를 신청할 경우 분쟁이 발생할 수 있으므로, 상속받은 부동산은 가능한 한 빨리 등기해 두는 것이 좋습니다.</p>
                        <div class="qna-note">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                    </div>
                </div>

                <div class="qna-item">
                    <h4>Q. 외국인 상속인의 부동산등기용 등록번호는 어떻게 발급받나요?</h4>
                    <div class="qna-answer">
                        <p>A. 외국인 상속인이 한국에 입국한 경우 외국인등록번호가 자동으로 부여됩니다. 미입국인 경우 한국 대사관·총영사관에 부동산등기용 등록번호 발급을 신청해야 합니다. 신청 시 여권, 거주증명, 위임장 등의 서류가 필요합니다. 자세한 방법은 외등_05_등록번호.html을 참고하세요.</p>
                        <div class="qna-note">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                    </div>
                </div>` },
    ],
    laws: [
      { name: `국제사법 제49조`, desc: `"상속은 사망 당시 피상속인의 본국법에 의한다"` },
      { name: `등기예규 제99호 (1967. 1. 16.)`, desc: `사안: 귀화한 직계비속의 재산상속권` },
      { name: `등기선례 6-219 (1999. 5. 20.)`, desc: `사안: 외국에 입양되어 국적상실로 제적된 자의 상속권` },
      { name: `등기선례 제7-175호 (2003. 4. 22.)`, desc: `사안: 국적회복허가신청 후 허가 전 사망` },
      { name: `등기선례 제5-306호 (1998. 7. 1.)`, desc: `사안: 혼인을 통해 한국국적 취득 후 국적 상실 시 상속권` },
      { name: `등기선례 제5-302호 (1998. 1. 17.)`, desc: `사안: 미합중국 시민권자 거주증명서 생년월일 불일치` },
    ],
    forms: [],
  },
  {
    id: 'fi-10',
    title: "외국인이 포함된 상속재산 협의분할 등기 절차",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<ul class="checklist">
                <li>공동상속인 중에 외국인 또는 해외거주자가 포함된 경우</li>
                <li>외국에서 거주하는 외국인 상속인이 입국하지 않고도 협의분할에 참가해야 하는 경우</li>
                <li>상속재산을 법정상속분과 다르게 특정 상속인이 단독으로 취득하기로 협의한 경우</li>
                <li>외국국적 상속인의 서명·인감 대체 방법을 알아야 하는 경우</li>
                <li>협의분할서 서명 시 공증이나 인감증명을 어떻게 준비해야 할지 궁금한 경우</li>
                <li>입국하지 않은 외국인 상속인이 대리인을 통해 협의분할에 참가하려는 경우</li>
            </ul>
        </div>

        <!-- 1. 이 절차가 왜 필요한가 -->
        <div class="section">` },
      { heading: `이 절차가 왜 필요한가`, content: `<div class="box box-summary">
                <h3>상속재산의 협의분할이란</h3>
                <p>
                    공동상속인들이 법정상속분과 다르게 상속재산을 분할하기로 하는 <span class="highlight">재산권을 목적으로 하는 법률행위</span>입니다.
                    상속인이 여러 명일 때 법정상속분(균등분할)이 아닌 다른 방식으로 분할하려면 반드시 전원의 동의를 얻어 협의분할협의서를 작성해야 합니다.
                </p>
                <p style="margin-top: 15px;">
                    <strong>2018년 중요한 선례 변경:</strong> 예전에는 협의분할에 참가하지 못한 외국인을 위해 공동상속인 중 다른 사람에게 위임할 수 없었지만,
                    2018년 5월 28일 부동산등기선례 제201805-9호로 변경되어 이제는 공동상속인 중 1인에게도 위임이 가능합니다.
                </p>
            </div>
        </div>

        <!-- 2. 전체 절차 흐름 요약 -->
        <div class="section">` },
      { heading: `전체 절차 흐름 요약`, content: `<h3>입국한 외국인 상속인의 경우</h3>
            <div class="flow">
                <div class="flow-step">
                    <div class="flow-step-num">1</div>
                    <div>공동상속인 전원 확인</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">2</div>
                    <div>분할 방법 협의</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">3</div>
                    <div>협의분할서 작성 및 인감 날인 / 공증</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">4</div>
                    <div>인감증명 또는 서명공증 첨부</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">5</div>
                    <div>등기신청</div>
                </div>
            </div>

            <h3>입국하지 않은 외국인 상속인의 경우</h3>
            <div class="flow">
                <div class="flow-step">
                    <div class="flow-step-num">1</div>
                    <div>공동상속인 전원 확인</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">2</div>
                    <div>협의분할 대리위임장 작성 (공동상속인 가능)</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">3</div>
                    <div>위임장에 본인 인감 날인 + 인감증명 또는 공증</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">4</div>
                    <div>협의분할서 작성 (대리인이 서명)</div>
                </div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">
                    <div class="flow-step-num">5</div>
                    <div>등기신청</div>
                </div>
            </div>
        </div>

        <!-- 3. 단계별 상세 절차 -->
        <div class="section">` },
      { heading: `단계별 상세 절차`, content: `<h3><span class="step-title">단계 1</span> 공동상속인 전원 확인</h3>
            <p>상속재산 협의분할은 <span class="text-highlight">공동상속인 전원의 참가</span>가 반드시 필요합니다. 외국에 거주하는 상속인도 포함해야 합니다.</p>
            <ul style="margin: 15px 0; padding-left: 20px;">
                <li>가족관계증명서, 기본증명서, 제적등본 등으로 상속인 확인</li>
                <li>외국인의 경우 여권 등본, 외국인등록증 사본 확인</li>
                <li>미성년자가 있으면 법원에 특별대리인 선임 신청 필요</li>
            </ul>

            <h3><span class="step-title">단계 2</span> 협의분할 방법 결정</h3>

            <div class="box box-case" style="margin: 20px 0;">
                <strong>방법 A: 직접 참가 (입국한 경우)</strong>
                <p style="margin-top: 10px;">외국인 상속인이 국내에 입국한 경우, 직접 협의분할협의에 참가하여 서명·인감 날인할 수 있습니다. 이 경우 국내 주소지 증명이 필요합니다.</p>
            </div>

            <div class="box box-case" style="margin: 20px 0;">
                <strong>방법 B: 대리인 위임 (입국 불가능한 경우)</strong>
                <p style="margin-top: 10px;">2018년 5월 선례 변경 이후, 외국에 거주하며 입국하지 않은 상속인은 <span class="highlight">공동상속인 중 1인을 포함하여 누구에게나 위임</span>할 수 있습니다. 위임장에 본인의 인감 날인과 인감증명(또는 공증)을 첨부해야 합니다.</p>
            </div>

            <div class="box box-case" style="margin: 20px 0;">
                <strong>방법 C: 협의분할서 송부 후 작성</strong>
                <p style="margin-top: 10px;">협의분할서를 외국의 상속인에게 송부한 후 그곳에서 서명·인감을 하고 공증을 받아 귀국하는 방법도 가능합니다.</p>
            </div>

            <h3><span class="step-title">단계 3</span> 협의분할서 작성 및 인감증명</h3>

            <p><strong>인감증명제도가 있는 나라 (일본, 대만 등)</strong></p>
            <ul style="margin: 15px 0; padding-left: 20px;">
                <li>협의분할서에 본인의 인감을 날인</li>
                <li>본국의 관공서에서 발행한 인감증명 제출</li>
                <li>또는 국내 외국인등록 또는 국내거소신고 후 인감증명 제출 가능</li>
            </ul>

            <p><strong>인감증명제도가 없는 나라 (미국, 영국, 캐나다 등)</strong></p>
            <div class="box box-warning">
                <span class="icon">⚠️</span> 다음 중 하나로 인감증명을 대체할 수 있습니다:
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>본국 관공서의 증명</li>
                    <li>본국 공증인의 인증</li>
                    <li>대한민국 공증인의 인증 또는 재외공관의 공증</li>
                </ul>
                <p style="margin-top: 15px; font-size: 13px;">
                    <strong>주의:</strong> 공증은 협의분할서 서면 그 자체에 받아야 하며, 별도 문서에 서명 후 공증받는 방식은 인정되지 않습니다.
                </p>
            </div>

            <h3><span class="step-title">단계 4</span> 아포스티유 및 번역문 처리</h3>
            <div class="box box-consult">
                <span class="icon">ℹ️</span> <strong>아포스티유 가입국인 경우</strong>
                <p style="margin-top: 10px;">본국에서 발행된 서류(인감증명, 공증서, 위임장 등)에는 아포스티유(Apostille)를 붙여야 합니다. 아포스티유는 재외공관에서도 받을 수 있습니다.</p>
            </div>
            <div class="box box-consult">
                <span class="icon">ℹ️</span> <strong>외국어 서류인 경우</strong>
                <p style="margin-top: 10px;">외국어로 작성된 협의분할서, 위임장, 인감증명 등은 번역문(공증 또는 법원 인정 번역자의 서명)을 첨부해야 합니다.</p>
            </div>

            <h3><span class="step-title">단계 5</span> 등기신청</h3>
            <p>협의분할이 완료된 후, 상속받은 부동산을 소유하게 되는 상속인이 법무사 등 대리인을 통해 등기신청할 수 있습니다. 대리인이 반드시 국내에 주소를 두고 있을 필요는 없습니다.</p>
        </div>

        <!-- 4. 첨부서류 목록 -->
        <div class="section">` },
      { heading: `첨부서류 목록`, content: `<h3>입국한 외국인 상속인의 경우</h3>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>발급기관</th>
                        <th>주의사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>상속을 증명하는 서면</td>
                        <td>가족관계증명서, 기본증명서, 제적등본</td>
                        <td>공동상속인 전원</td>
                    </tr>
                    <tr>
                        <td>상속재산분할협의서</td>
                        <td>공동상속인 전원</td>
                        <td>공동상속인 전원이 인감 날인 또는 공증 필수</td>
                    </tr>
                    <tr>
                        <td>인감증명서 또는 서명공증서</td>
                        <td>인감제도 있는 나라: 본국 관공서 또는 국내 인감증명신청<br>인감제도 없는 나라: 재외공관 또는 대한민국 공증인</td>
                        <td>외국인도 국내거소신고 후 국내 인감증명 신청 가능</td>
                    </tr>
                    <tr>
                        <td>주소를 증명하는 서면</td>
                        <td>주민등록증, 여권, 거주증명</td>
                        <td>국내 주소 필수</td>
                    </tr>
                    <tr>
                        <td>신분증 사본</td>
                        <td>여권, 외국인등록증</td>
                        <td>본인 확인용</td>
                    </tr>
                </tbody>
            </table>

            <h3 style="margin-top: 40px;">입국하지 않은 외국인 상속인의 경우</h3>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>발급처/방법</th>
                        <th>주의사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>상속재산분할협의 대리위임장</td>
                        <td>본인이 작성</td>
                        <td>분할 대상 부동산과 대리인 인적사항을 구체적으로 특정</td>
                    </tr>
                    <tr>
                        <td>위임장의 인감증명 또는 서명공증</td>
                        <td>인감제도 있는 나라: 본국 관공서<br>인감제도 없는 나라: 재외공관 또는 본국 공증인</td>
                        <td>아포스티유 가입국은 아포스티유 필수</td>
                    </tr>
                    <tr>
                        <td>상속을 증명하는 서면</td>
                        <td>가족관계증명서(본국 발행 또는 우리 공관 공증)</td>
                        <td>아포스티유 또는 재외공관 공증 필요</td>
                    </tr>
                    <tr>
                        <td>상속재산분할협의서</td>
                        <td>대리인 및 다른 상속인이 작성</td>
                        <td>공동상속인 전원의 인감 날인 또는 공증 필수</td>
                    </tr>
                    <tr>
                        <td>주소를 증명하는 서면</td>
                        <td>재외공관 거주증명, 여권 사본</td>
                        <td>본국 주소 증명</td>
                    </tr>
                    <tr>
                        <td>신분증 사본</td>
                        <td>여권 또는 본국 신분증</td>
                        <td>공증 또는 재외공관 인증</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 5. 비용 안내 -->
        <div class="section">` },
      { heading: `비용 안내`, content: `<div class="box box-summary">
                <p>
                    상속재산 협의분할 등기신청에는 다음과 같은 세금과 수수료가 발생합니다:
                </p>
                <ul style="margin-top: 15px; padding-left: 20px;">
                    <li><strong>등록면허세:</strong> 부동산 이전 가액의 일정 비율</li>
                    <li><strong>지방교육세:</strong> 등록면허세의 일정 비율</li>
                    <li><strong>농어촌특별세:</strong> 지정된 지역 내 부동산은 추가 과세</li>
                    <li><strong>등기신청수수료:</strong> 부동산 건수별로 정해진 수수료</li>
                </ul>
                <p style="margin-top: 20px;">
                    <strong>구체적인 비용 계산:</strong> 위택스(www.wetax.go.kr)에서 조회할 수 있습니다.
                </p>
            </div>
        </div>

        <!-- 6. 관련 판례 및 예규 -->
        <div class="section">` },
      { heading: `관련 판례 및 예규`, content: `<div class="box box-precedent">
                <h3 style="margin-top: 0;">대법원 판결</h3>
                <p>
                    <strong>대법원 2001. 2. 9. 선고 2000다51797 판결</strong><br>
                    상속재산의 협의분할은 공동상속인 간 계약으로서 전원의 참가가 필수적이며, 재산권을 목적으로 하는 법률행위입니다.
                </p>
            </div>

            <div class="box box-precedent">
                <h3 style="margin-top: 0;">부동산등기선례 (2018년 선례 변경)</h3>
                <p>
                    <strong>부동산등기선례 제201805-9호 (2018. 05. 28.)</strong><br>
                    공동상속인 중 외국에 거주하는 상속인이 협의분할에 참가하지 못할 때, 공동상속인 중 1인을 포함하여 누구에게나 대리위임이 가능합니다. (이전 선례 제4-342호(1993. 11. 29.)는 폐지)
                </p>
            </div>

            <div class="box box-precedent">
                <h3 style="margin-top: 0;">등기선례</h3>
                <p>
                    <strong>등기선례 제202303-2호 (2023. 03. 20.)</strong><br>
                    재외공관의 인증은 대한민국 공증인의 인증과 동일하게 인정됩니다.
                </p>
                <p style="margin-top: 15px;">
                    <strong>등기선례 제202001-1호 (2020. 1. 9.)</strong><br>
                    협의분할서가 여러 장인 경우 공증인이 각 장마다 간인(initials)해야 합니다.
                </p>
                <p style="margin-top: 15px;">
                    <strong>등기선례 제201807-1호 (2018. 07. 05.)</strong><br>
                    분할협의서 여러 장인 경우 공동상속인 전원이 모든 장에 간인해야 합니다.
                </p>
                <p style="margin-top: 15px;">
                    <strong>등기선례 7-182 (2004. 3. 15.)</strong><br>
                    상속인이 외국인 또는 외국에 거주하는 경우, 국내 법무사 등에 직접 위임하여 등기신청할 수 있습니다.
                </p>
            </div>

            <div class="box box-precedent">
                <h3 style="margin-top: 0;">등기예규</h3>
                <p>
                    <strong>등기예규 제1778호 제6조 제3항</strong><br>
                    인감증명제도가 없는 나라의 외국인은 ① 본국 관공서의 증명, ② 본국 공증인의 인증, 또는 ③ 대한민국 공증인의 인증으로 인감증명을 대체할 수 있습니다.
                </p>
                <p style="margin-top: 15px;">
                    <strong>등기예규 제1778호 제6조 제4항</strong><br>
                    대리인이 공증인의 공증을 받은 경우 인감증명을 제출할 필요가 없습니다.
                </p>
                <p style="margin-top: 15px;">
                    <strong>등기예규 제1088호</strong><br>
                    미성년자가 공동상속인인 경우, 법원에서 선임한 특별대리인이 협의분할에 참가해야 합니다.
                </p>
            </div>
        </div>

        <!-- 7. 자주 발생하는 문제와 해결책 -->
        <div class="section">` },
      { heading: `자주 발생하는 문제와 해결책`, content: `<h3><span class="icon">⚠️</span> 공동상속인 중 1인의 동의 누락</h3>
            <div class="box box-warning">
                <p><strong>문제:</strong> 공동상속인 중 1인이 협의분할에 참가하지 않거나 서명을 거부한 경우</p>
                <p style="margin-top: 10px;"><strong>결과:</strong> 협의분할이 무효가 되며 등기신청이 반려됩니다.</p>
                <p style="margin-top: 10px;"><strong>해결책:</strong> 법원에 상속재산 분할 심판을 청구해야 합니다. 이 경우 소송 절차가 필요합니다.</p>
            </div>

            <h3><span class="icon">⚠️</span> 보정명령 대상 흔한 실수</h3>
            <div class="box box-warning">
                <ul style="padding-left: 20px;">
                    <li><strong>공증 방법 오류:</strong> 공증인이 협의분할서 서면 자체에 공증하지 않은 경우</li>
                    <li><strong>간인(initials) 누락:</strong> 협의분할서가 여러 장인데 모든 장에 간인하지 않은 경우</li>
                    <li><strong>아포스티유 미부착:</strong> 아포스티유 가입국 서류에 아포스티유를 붙이지 않은 경우</li>
                    <li><strong>번역문 누락:</strong> 외국어 서류에 번역문을 첨부하지 않은 경우</li>
                    <li><strong>인감증명 불일치:</strong> 서명자와 인감증명 신청인이 다른 경우</li>
                </ul>
            </div>

            <h3><span class="icon">⚠️</span> 외국인 공동상속인의 생사불명</h3>
            <div class="box box-warning">
                <p><strong>문제:</strong> 외국에 거주하는 공동상속인의 연락처를 알 수 없거나 생사를 알 수 없는 경우</p>
                <p style="margin-top: 10px;"><strong>해결책:</strong> 법원에 상속재산 분할 심판을 청구하거나, 실종자 선고를 받은 후 절차를 진행합니다.</p>
            </div>

            <h3><span class="icon">🌏</span> 국가별 공증 방법의 차이</h3>
            <div class="box box-country">
                <p><strong>인감증명제도가 있는 나라 (일본, 대만):</strong></p>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>본인이 인감을 날인하고 본국 관공서에서 인감증명 발급</li>
                    <li>또는 국내 외국인등록/국내거소신고 후 국내 인감증명 신청</li>
                </ul>
                <p style="margin-top: 15px;"><strong>인감증명제도가 없는 나라 (미국, 영국, 캐나다, 호주 등):</strong></p>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>재외공관(대사관·총영사관)에서 공증받기</li>
                    <li>또는 본국의 공증인(Notary Public)에게 공증받기</li>
                    <li>또는 대한민국 공증인에게 공증받기</li>
                </ul>
            </div>
        </div>

        <!-- 8. Q&A -->
        <div class="section">` },
      { heading: `자주 묻는 질문`, content: `<div class="qna-item">
                <div class="qna-q">Q. 미국에 사는 형이 공동상속인인데 입국이 어렵습니다. 형 없이 협의분할을 진행할 수 있나요?</div>
                <div class="qna-a">
                    아니요, 협의분할은 공동상속인 전원의 참가가 필수입니다. 다만 입국하지 않은 형을 위해 두 가지 방법이 있습니다:
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li><strong>방법 1:</strong> 형이 대리위임장에 서명 및 공증(미국 공증인 또는 재외공관)을 받고 국내의 다른 상속인(예: 동생)에게 대리위임합니다. (2018년 선례 변경으로 가능)</li>
                        <li><strong>방법 2:</strong> 형이 협의분할서를 미국으로 송부받아 그곳에서 서명 및 공증을 받고 국내로 귀송합니다.</li>
                    </ul>
                    <p style="margin-top: 15px;">두 경우 모두 형의 서명, 공증, 아포스티유 부착이 필요합니다.</p>
                </div>
                <div class="qna-note">
                    위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                </div>
            </div>

            <div class="qna-item">
                <div class="qna-q">Q. 협의분할서 공증은 어디에서 받나요? 미국에서도 받을 수 있나요?</div>
                <div class="qna-a">
                    협의분할서의 공증은 다음 세 곳에서 받을 수 있습니다:
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li><strong>대한민국 공증인:</strong> 국내 공증인 사무소에서 직접 공증</li>
                        <li><strong>재외공관:</strong> 미국·영국 등에 있는 대한민국 대사관·총영사관에서 공증 (권장)</li>
                        <li><strong>본국 공증인:</strong> 미국의 Notary Public 등에게 공증받을 수 있지만, 이 경우 아포스티유를 반드시 붙여야 합니다.</li>
                    </ul>
                    <p style="margin-top: 15px;">재외공관에서 공증받는 것이 가장 간단하고 아포스티유 없이 바로 사용 가능합니다.</p>
                </div>
                <div class="qna-note">
                    위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                </div>
            </div>

            <div class="qna-item">
                <div class="qna-q">Q. 일본인 공동상속인의 인감증명은 어떻게 처리하나요?</div>
                <div class="qna-a">
                    일본은 인감증명제도가 있는 나라이므로 두 가지 방법이 있습니다:
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li><strong>방법 1:</strong> 일본에서 본인의 인감을 날인하고 일본의 관공서(시청·구청)에서 발행한 인감증명 제출</li>
                        <li><strong>방법 2:</strong> 국내에서 외국인등록 또는 국내거소신고를 한 후 국내 인감증명 신청</li>
                    </ul>
                    <p style="margin-top: 15px;">어느 방법이든 협의분할서에 본인의 인감을 날인하고 인감증명을 함께 제출해야 합니다. 일본 발행 인감증명의 경우 아포스티유를 붙여야 합니다.</p>
                </div>
                <div class="qna-note">
                    위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                </div>
            </div>

            <div class="qna-item">
                <div class="qna-q">Q. 협의분할서가 여러 장인 경우 간인(initials)을 어떻게 하나요?</div>
                <div class="qna-a">
                    협의분할서가 여러 장인 경우 공동상속인 전원이 <span class="highlight">모든 장의 경계 부분에 간인(본인 이름의 일부 또는 도장)</span>을 해야 합니다. 이는 문서의 변조를 방지하기 위한 규정입니다.
                    <p style="margin-top: 15px;">공증인에게 공증을 받는 경우 공증인도 각 장마다 간인합니다. 보정명령을 받지 않으려면 간인 누락이 없는지 반드시 확인해야 합니다.</p>
                </div>
                <div class="qna-note">
                    위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                </div>
            </div>

            <div class="qna-item">
                <div class="qna-q">Q. 상속인 중 미성년자가 있는 경우 협의분할이 가능한가요?</div>
                <div class="qna-a">
                    미성년자가 공동상속인으로 포함된 경우, 협의분할을 하려면 <span class="highlight">법원에서 선임한 특별대리인</span>이 미성년자를 대리하여 협의분할에 참가해야 합니다. 미성년자의 친권자가 단독으로 협의분할에 참가할 수 없습니다.
                    <p style="margin-top: 15px;"><strong>절차:</strong> 가정법원에 특별대리인 선임 신청 → 특별대리인 선임 → 협의분할 진행</p>
                    <p style="margin-top: 10px;">이는 미성년자의 이익을 보호하기 위한 법적 장치입니다.</p>
                </div>
                <div class="qna-note">
                    위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                </div>
            </div>

            <div class="qna-item">
                <div class="qna-q">Q. 분할 협의가 성립되지 않으면 어떻게 하나요?</div>
                <div class="qna-a">
                    공동상속인들 간에 협의가 이루어지지 않으면 <span class="highlight">법원에 상속재산 분할 심판을 청구</span>할 수 있습니다. 법원은 상속인들의 의견을 듣고 공정하게 상속재산을 분할하는 결정을 내립니다.
                    <p style="margin-top: 15px;"><strong>절차:</strong> 가정법원에 상속재산 분할 심판 청구 → 조사·심리 → 심판 → 등기신청</p>
                    <p style="margin-top: 10px;">이 경우 협의분할이 아닌 심판분할로 등기신청하게 되며, 법원의 심판서가 필요합니다.</p>
                </div>
                <div class="qna-note">
                    위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                </div>
            </div>
        </div>

        <!-- 9. 다음으로 확인할 내용 -->
        <div class="section">` },
    ],
    laws: [
      { name: `대법원 판결`, desc: `대법원 2001. 2. 9. 선고 2000다51797 판결 상속재산의 협의분할은 공동상속인 간 계약으로서 전원의 참가가 필수적이며, 재산권을 목적으로 하는 법률행위입니다.` },
      { name: `부동산등기선례 (2018년 선례 변경)`, desc: `부동산등기선례 제201805-9호 (2018. 05. 28.) 공동상속인 중 외국에 거주하는 상속인이 협의분할에 참가하지 못할 때, 공동상속인 중 1인을 포함하여 누구에게나 대리위임이 가능합니다. (이전 선례 제4-342호(1993. 11. 29.)는 폐지)` },
      { name: `등기선례`, desc: `등기선례 제202303-2호 (2023. 03. 20.) 재외공관의 인증은 대한민국 공증인의 인증과 동일하게 인정됩니다.` },
      { name: `등기예규`, desc: `등기예규 제1778호 제6조 제3항 인감증명제도가 없는 나라의 외국인은 ① 본국 관공서의 증명, ② 본국 공증인의 인증, 또는 ③ 대한민국 공증인의 인증으로 인감증명을 대체할 수 있습니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-11',
    title: "해외 거주 외국인이 입국 없이 상속 협의분할에 참가하는 방법",
    meta: "대리위임장 작성부터 협의분할서 우편 발송까지 완벽 가이드",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
            <h3>이런 분께 필요합니다</h3>
            <ul>
                <li>한국 부동산을 상속받았는데 해외에 거주하여 입국하지 않는 경우</li>
                <li>다른 상속인들과 상속재산 협의분할을 해야 하는데 본인서명이 필요한 경우</li>
                <li>인감증명 제도가 없는 나라에 거주하고 있는 외국인</li>
                <li>대리인을 선임하지 않고 스스로 협의분할에 참가하고 싶은 경우</li>
                <li>공동상속인 중 1인이 협의분할서에 날인하고 공증받는 절차를 알고 싶은 경우</li>
                <li>아포스티유나 재외공관 공증이 필요한지 확인하고 싶은 경우</li>
            </ul>
        </div>` },
      { heading: `2. 미입국 협의분할의 의미와 선택 기준`, content: `<p>해외 거주 외국인이 상속재산 협의분할에 참가하는 방식은 <strong>입국 여부, 대리인 선임 여부, 본인의 선호도</strong>에 따라 달라집니다.</p>

            <h3>방법 선택 기준</h3>
            <div style="margin-left: 20px;">
                <p><strong>방법1 (대리위임장)을 선택하면:</strong></p>
                <ul>
                    <li>본인이 대리인을 선임하고 대리위임장만 작성하면 됨</li>
                    <li>대리인(보통 공동상속인)이 본인 대신 협의분할에 참가</li>
                    <li>절차가 더 간단하고 빠름</li>
                    <li>대리인이 신뢰할 수 있는 사람일 때 추천</li>
                </ul>

                <p><strong>방법2 (협의분할서 우편 발송)을 선택하면:</strong></p>
                <ul>
                    <li>본인이 직접 협의분할서에 서명</li>
                    <li>대리인이 필요 없음</li>
                    <li>본인의 의사가 직접 반영됨</li>
                    <li>절차가 다소 복잡하고 시간이 소요됨</li>
                </ul>
            </div>
        </div>

        <!-- 섹션 3: 절차 흐름도 -->
        <div class="timeline-box">
            <h4>절차 흐름 요약</h4>

            <h3 style="margin-top: 20px; margin-bottom: 15px;">방법1: 대리위임장 방식</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-item-number">1</div>
                    <div class="timeline-item-content">
                        <h4>대리위임장 작성</h4>
                        <p>본인이 대리인을 지정하고 위임장 작성 (서명 필요)</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">2</div>
                    <div class="timeline-item-content">
                        <h4>공증/인증 (국가에 따라 다름)</h4>
                        <p>인감증명 있는 국가: 본국 공증인 인증 / 인감증명 없는 국가: 재외공관 공증</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">3</div>
                    <div class="timeline-item-content">
                        <h4>위임장 한국 송부</h4>
                        <p>공증받은 위임장을 대리인(또는 법무사)에게 전달</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">4</div>
                    <div class="timeline-item-content">
                        <h4>협의분할 진행</h4>
                        <p>대리인이 본인 대신 다른 공동상속인들과 협의분할 협의</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">5</div>
                    <div class="timeline-item-content">
                        <h4>협의분할서 작성</h4>
                        <p>전원이 서명한 협의분할계약서</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">6</div>
                    <div class="timeline-item-content">
                        <h4>등기 신청</h4>
                        <p>공동상속인이 함께 또는 각각 등기 신청 가능</p>
                    </div>
                </div>
            </div>

            <h3 style="margin-top: 30px; margin-bottom: 15px;">방법2: 협의분할서 우편 발송 방식</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-item-number">1</div>
                    <div class="timeline-item-content">
                        <h4>협의분할서 초안 수신</h4>
                        <p>한국 내 법무사 또는 다른 상속인으로부터 협의분할서 초안</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">2</div>
                    <div class="timeline-item-content">
                        <h4>서명 및 공증</h4>
                        <p>재외공관 또는 본국 공증인 인증 받기</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">3</div>
                    <div class="timeline-item-content">
                        <h4>협의분할서 한국 송부</h4>
                        <p>공증받은 협의분할서를 한국의 다른 상속인들에게 송부</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">4</div>
                    <div class="timeline-item-content">
                        <h4>다른 상속인 서명</h4>
                        <p>나머지 상속인들이 서명하고 공증받음</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-item-number">5</div>
                    <div class="timeline-item-content">
                        <h4>등기 신청</h4>
                        <p>전 상속인의 서명을 받은 협의분할서로 등기 신청</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 섹션 4: 방법1 상세 절차 -->
        <div class="content-section">` },
      { heading: `3. 방법1: 대리위임장 작성 방법`, content: `<h3>가. 대리위임장이란</h3>
            <p>상속재산분할협의 대리위임장은 <strong>등기예규 제1778호 제6조</strong>에 정해진 문서입니다. 공동상속인이 다른 사람(공동상속인 포함)을 대리인으로 지정하여 협의분할협의에 참가하도록 하는 서면입니다.</p>

            <h3>나. 국가별 위임장 작성 및 공증 방법</h3>

            <div class="country-diff-box">
                <h4>인감증명제도가 있는 국가 (일본, 대만 등)</h4>
                <p><strong>작성 방법:</strong></p>
                <ul style="margin-left: 20px;">
                    <li>대리위임장에 본인의 인감도장으로 날인</li>
                    <li>본국의 관공서로부터 인감증명서 발급받기</li>
                    <li>인감증명서는 한국 공증인 공증 또는 아포스티유 첨부</li>
                </ul>
            </div>

            <div class="country-diff-box">
                <h4>인감증명제도가 없는 국가 (미국, 유럽 등)</h4>
                <p><strong>작성 방법 (3가지 중 선택):</strong></p>
                <ul style="margin-left: 20px;">
                    <li><strong>①본국 관공서 증명:</strong> 본인이 본국 관공서에서 서명 확인 증명 발급</li>
                    <li><strong>②본국 공증인 인증:</strong> 본국의 공증인(Notary Public 등)으로부터 인증 받기</li>
                    <li><strong>③대한민국 공증인 인증:</strong> 대한민국 공증인으로부터 공증 (서명 사실 확인)</li>
                </ul>
                <p style="margin-top: 15px;"><span class="emphasis">핵심</span> <strong>대한민국 재외공관의 인증 = 대한민국 공증인의 인증에 해당합니다</strong>(등기선례 제202303-2호, 2023년 3월 20일). 따라서 한국 대사관이나 영사관에서 공증받으면 충분합니다.</p>
            </div>

            <h3>다. 대리인이 해야 할 일</h3>
            <p>공동상속인을 대리인으로 선임한 경우, 대리인은 <strong>협의분할협의서에 자신의 인감도장으로 날인하고 인감증명서를 첨부</strong>해야 합니다(등기예규 제1778호 제6조 제4항).</p>

            <div class="warning-box">
                <h4>대리인 인감증명 면제 요건</h4>
                <p>대리인이 협의분할서를 작성한 공증을 받은 경우, 대리인의 인감증명서는 불필요합니다. 즉, 공증인이 "이 서면은 대리인(○○○)이 작성하였음을 확인합니다"라는 공증을 받으면 인감증명 대신 가능합니다.</p>
            </div>
        </div>

        <!-- 섹션 5: 방법2 상세 절차 -->
        <div class="content-section">` },
      { heading: `4. 방법2: 협의분할서 우편 발송 방법`, content: `<h3>가. 협의분할서 작성 및 서명</h3>
            <p>협의분할계약서는 공동상속인 전원이 간인(署名)하는 것이 원칙입니다(등기선례 제201807-1호, 2018년 7월 5일). 각 상속인이 개별적으로 서명하고 공증을 받는 방식입니다.</p>

            <h3>나. 다중 장(page)에 걸친 간인 방법</h3>
            <p>협의분할서가 여러 장인 경우, 공증인이 각 장에 걸쳐 직인으로 간인해야 합니다(등기선례 제202001-1호, 2020년 1월 9일).</p>
            <div class="warning-box">
                <h4>공증 위치 주의</h4>
                <p>공증의 경우 <strong>인감을 날인해야 하는 서면 그 자체에 받아야 합니다</strong>(등기예규 제1778호 제9조 제3항). 즉, 협의분할서가 10장이면 10장 모두에 공증인 직인이 있어야 합니다.</p>
            </div>

            <h3>다. 절차 순서</h3>
            <div style="margin-left: 20px;">
                <div class="step-item">
                    <strong>1단계: 협의분할서 초안 작성</strong>
                    <p>한국 내에서 협의분할 내용을 정리하여 초안 작성</p>
                </div>
                <div class="step-item">
                    <strong>2단계: 해외 거주 상속인에게 송부</strong>
                    <p>협의분할서 초안을 해외로 우편 또는 이메일 발송</p>
                </div>
                <div class="step-item">
                    <strong>3단계: 해외 거주 상속인 서명 및 공증</strong>
                    <p>해외 거주 상속인이 협의분할서에 서명하고 재외공관 또는 본국 공증인 공증 받기</p>
                </div>
                <div class="step-item">
                    <strong>4단계: 공증받은 협의분할서 한국 송부</strong>
                    <p>공증받은 협의분할서를 한국의 다른 상속인들에게 우편 송부</p>
                </div>
                <div class="step-item">
                    <strong>5단계: 한국 내 상속인 서명 및 공증</strong>
                    <p>한국 내 상속인이 협의분할서에 서명하고 한국 공증인 공증 받기</p>
                </div>
                <div class="step-item">
                    <strong>6단계: 등기 신청</strong>
                    <p>전원이 서명한 협의분할서로 등기청에 신청</p>
                </div>
            </div>
        </div>

        <!-- 섹션 6: 첨부서류 표 -->
        <div class="content-section">` },
      { heading: `5. 첨부서류 목록`, content: `<p>미입국 협의분할에 필요한 서류는 선택한 방법과 상속인의 국가에 따라 달라집니다.</p>

            <h3>방법1: 대리위임장 방식 첨부서류</h3>

            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>입국한 경우</th>
                        <th>미입국인 경우</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>대리위임장</strong></td>
                        <td>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>인감도장 날인</li>
                                <li>인감증명서</li>
                            </ul>
                        </td>
                        <td>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li><strong>인감증명제도 있는 국가:</strong> 위임장 인감도장 날인 + 본국 인감증명 + 아포스티유 또는 한국 공증인 공증</li>
                                <li><strong>인감증명제도 없는 국가:</strong> 본인 서명 + 재외공관 공증 또는 본국 공증인 인증</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>위임자 신분증</strong></td>
                        <td>외국인등록증 또는 여권</td>
                        <td>여권 사본 (재외공관에서 확인한 사본)</td>
                    </tr>
                    <tr>
                        <td><strong>상속재산분할협의서</strong></td>
                        <td>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>인감도장 날인 (위임장 있는 경우 위임인 서명 면제 가능)</li>
                                <li>인감증명서</li>
                            </ul>
                        </td>
                        <td>위임장 있으면 위임인 서명 불필요 (대리인만 서명)</td>
                    </tr>
                    <tr>
                        <td><strong>상속관계 증명서</strong></td>
                        <td>기본증명서, 가족관계증명서 등</td>
                        <td>동일 (아포스티유 협약 가입국이면 아포스티유 첨부)</td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>외국인등록증 또는 외국인등록사항증명서</td>
                        <td>재외공관 발급 거주증명서, 여권 등</td>
                    </tr>
                </tbody>
            </table>

            <h3 style="margin-top: 35px;">방법2: 협의분할서 우편 발송 방식 첨부서류</h3>

            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>입국한 경우</th>
                        <th>미입국인 경우</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>상속재산분할협의서</strong></td>
                        <td>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>전원 인감도장 날인</li>
                                <li>공증 불필요</li>
                            </ul>
                        </td>
                        <td>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>미입국 상속인: 각 장에 공증인 직인 (재외공관 공증)</li>
                                <li>한국 내 상속인: 각 장에 인감도장 날인 + 인감증명서</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>공증서</strong></td>
                        <td>불필요</td>
                        <td>미입국 상속인 부분에만 필요 (재외공관 또는 본국 공증인)</td>
                    </tr>
                    <tr>
                        <td><strong>상속관계 증명서</strong></td>
                        <td>기본증명서, 가족관계증명서 등</td>
                        <td>동일 (아포스티유 필요)</td>
                    </tr>
                    <tr>
                        <td><strong>신분증</strong></td>
                        <td>외국인등록증 또는 여권</td>
                        <td>여권 사본 (재외공관 확인)</td>
                    </tr>
                </tbody>
            </table>

            <div class="notice-header" style="margin-top: 25px;">
                <p>각 장(page)에 공증인 직인이 있어야 합니다</p>
            </div>
        </div>

        <!-- 섹션 7: 주의사항 -->
        <div class="content-section">` },
      { heading: `6. 주의사항`, content: `<div class="warning-box">
                <h4>전원 참가 원칙</h4>
                <p>공동상속인 중 1인이라도 협의분할에 참가하지 않으면 그 협의분할은 <span class="emphasis">무효</span>가 됩니다. 생사불명인 상속인이 있거나 연락이 닿지 않는 상속인이 있으면 협의분할이 불가능하므로 공동상속등기를 신청해야 합니다(등기선례 제6-203호).</p>
            </div>

            <div class="warning-box">
                <h4>아포스티유 협약 가입국 확인</h4>
                <p>해당 국가가 헤이그협약(아포스티유 협약)에 가입했다면 한국 공증인 공증 대신 본국 정부 기관의 아포스티유로 대체할 수 있습니다. 협약 가입국 목록은 사전에 확인하시기 바랍니다.</p>
            </div>

            <div class="warning-box">
                <h4>공증 위치 (방법2 중요)</h4>
                <p>협의분할서가 여러 장인 경우, 각 장에 공증인 직인이 있어야 합니다. 첫 장에만 있으면 안 됩니다.</p>
            </div>

            <div class="warning-box">
                <h4>번역문 필요 여부</h4>
                <p>외국 기관이 발급한 서류(거주증명서, 인감증명 등)는 한국어 번역문이 필요할 수 있습니다. 번역문은 공증인 또는 법무사로부터 공증받아야 합니다.</p>
            </div>

            <div class="warning-box">
                <h4>우편 송부 시 시간 계획</h4>
                <p>국제 우편은 1~3주 소요될 수 있습니다. 절차별로 2~3개월의 시간 여유를 갖고 진행하시기 바랍니다.</p>
            </div>
        </div>

        <!-- 섹션 8: 판례·예규 -->
        <div class="content-section">` },
      { heading: `7. 관련 법령 및 예규`, content: `<div class="precedent-box">
                <h4>협의분할 전원 참가 원칙</h4>
                <p><strong>대법원 2001. 2. 9. 선고 2000다51797 판결</strong></p>
                <p style="margin-top: 8px;">상속재산의 협의분할은 공동상속인 전원의 합의가 있어야 유효하다. 1인이라도 참가하지 않으면 무효이다.</p>
            </div>

            <div class="precedent-box">
                <h4>공동상속인을 대리인으로 선임 가능</h4>
                <p><strong>등기선례 제201805-9호 (2018. 5. 28.)</strong></p>
                <p style="margin-top: 8px;">상속재산분할협의의 대리인으로 다른 공동상속인을 선임할 수 있다. (종전 선례 변경)</p>
            </div>

            <div class="precedent-box">
                <h4>재외공관 공증의 효력</h4>
                <p><strong>등기선례 제202303-2호 (2023. 3. 20.)</strong></p>
                <p style="margin-top: 8px;">대한민국 재외공관의 인증은 대한민국 공증인의 인증에 해당한다.</p>
            </div>

            <div class="precedent-box">
                <h4>간인 방법</h4>
                <p><strong>등기선례 제201807-1호 (2018. 7. 5.)</strong></p>
                <p style="margin-top: 8px;">협의분할서는 공동상속인 전원이 간인해야 한다.</p>
            </div>

            <div class="precedent-box">
                <h4>다중 장 공증</h4>
                <p><strong>등기선례 제202001-1호 (2020. 1. 9.)</strong></p>
                <p style="margin-top: 8px;">협의분할서가 여러 장인 경우, 각 장에 공증인 직인으로 간인해야 한다.</p>
            </div>

            <div class="precedent-box">
                <h4>대리인 인감증명 요건</h4>
                <p><strong>등기예규 제1778호 제6조 제4항</strong></p>
                <p style="margin-top: 8px;">대리인이 협의분할서에 날인한 경우, 대리인의 인감증명서 첨부 필요. 단, 대리인이 작성했다는 공증을 받은 경우 인감증명 불필요.</p>
            </div>

            <div class="precedent-box">
                <h4>생사불명 상속인이 있는 경우</h4>
                <p><strong>등기선례 제6-203호</strong></p>
                <p style="margin-top: 8px;">공동상속인 중 1인이 생사불명인 경우, 나머지 상속인들만으로 협의분할할 수 없다. 공동상속등기를 신청해야 한다.</p>
            </div>
        </div>

        <!-- 섹션 9: 자주 발생하는 문제 -->
        <div class="content-section">` },
      { heading: `8. 자주 발생하는 문제와 해결책`, content: `<div class="case-box">
                <h4>문제 1: 공증 위치가 잘못되는 경우</h4>
                <p style="margin-top: 10px;"><strong>문제:</strong> 협의분할서 10장 중 첫 장에만 공증인 직인이 있는 경우</p>
                <p><strong>결과:</strong> 보정명령 (각 장에 공증인 직인 필요)</p>
                <p><strong>해결책:</strong> 공증 신청 시 "모든 장에 간인해 달라"고 명시적으로 요청</p>
            </div>

            <div class="case-box">
                <h4>문제 2: 인감증명 없는 국가의 상속인</h4>
                <p style="margin-top: 10px;"><strong>상황:</strong> 미국 거주 외국인이 대리위임장을 작성했는데 어떻게 공증받아야 하나?</p>
                <p><strong>해결책:</strong> 다음 3가지 중 선택:</p>
                <ul style="margin-left: 20px; margin-top: 8px;">
                    <li>한국 대사관(재외공관)에서 공증</li>
                    <li>본국(미국) Notary Public의 인증</li>
                    <li>본국 관공서의 서명 확인 증명</li>
                </ul>
                <p style="margin-top: 10px;"><strong>추천:</strong> 재외공관 공증이 가장 안전함</p>
            </div>

            <div class="case-box">
                <h4>문제 3: 아포스티유와 공증 혼동</h4>
                <p style="margin-top: 10px;"><strong>혼동:</strong> 아포스티유를 받아야 하는지, 공증을 받아야 하는지 불명확</p>
                <p><strong>기준:</strong></p>
                <ul style="margin-left: 20px; margin-top: 8px;">
                    <li>상속인의 서명/인감: <strong>공증</strong> (또는 아포스티유)</li>
                    <li>외국 관공서 발급 서류(거주증명 등): <strong>아포스티유</strong></li>
                </ul>
            </div>

            <div class="case-box">
                <h4>문제 4: 대리인이 상속인인 경우</h4>
                <p style="margin-top: 10px;"><strong>상황:</strong> 공동상속인인 형이 해외 거주하는 동생의 대리인이 되려면?</p>
                <p><strong>필요 서류:</strong></p>
                <ul style="margin-left: 20px; margin-top: 8px;">
                    <li>동생(위임인)의 대리위임장 (공증)</li>
                    <li>형(대리인)의 협의분할서 서명 + 인감증명</li>
                </ul>
                <p style="margin-top: 10px;"><strong>주의:</strong> 형도 협의분할서에 서명해야 함</p>
            </div>

            <div class="case-box">
                <h4>문제 5: 공동상속인이 연락이 안 되는 경우</h4>
                <p style="margin-top: 10px;"><strong>상황:</strong> 공동상속인이 해외에 있으나 연락이 닿지 않음</p>
                <p><strong>해결책:</strong> 협의분할 불가 → 공동상속등기 신청</p>
                <p><strong>다음 단계:</strong> 나중에 그 상속인을 특정하여 별도 경정등기</p>
            </div>
        </div>

        <!-- 섹션 10: Q&A -->
        <div class="content-section">` },
      { heading: `9. 자주 묻는 질문`, content: `<div class="faq">
                <div class="faq-item">
                    <div class="faq-question">
                        <span>방법1(대리위임장)과 방법2(협의분할서 우편)의 차이는 무엇인가요?</span>
                    </div>
                    <div class="faq-answer">
                        <p>방법1은 본인이 대리인을 지정하여 그 대리인이 본인 대신 협의분할에 참가하는 방식입니다. 절차가 간단하고 빠르지만, 대리인이 신뢰할 수 있는 사람이어야 합니다. 방법2는 본인이 직접 협의분할서에 서명하는 방식으로, 본인의 의사가 직접 반영되지만 절차가 복잡하고 시간이 더 소요됩니다. 국제 우편 왕복으로 2~3개월이 걸릴 수 있습니다.</p>
                        <p style="margin-top: 10px; color: #999; font-size: 0.9em;">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>인감증명 없는 나라(미국, 유럽)에서는 대리위임장을 어떻게 공증받나요?</span>
                    </div>
                    <div class="faq-answer">
                        <p>3가지 방법 중 선택할 수 있습니다: ① 한국 대사관(재외공관)에 가서 공증받기 ② 본국의 Notary Public(공증인)의 인증 받기 ③ 본국 관공서의 서명 확인 증명 받기. 가장 간단한 방법은 ①번으로, 재외공관에서 직접 공증받는 방식입니다. 이 경우 대한민국 공증인의 공증에 해당하므로(등기선례 제202303-2호) 추가로 한국 공증인 공증을 받을 필요가 없습니다.</p>
                        <p style="margin-top: 10px; color: #999; font-size: 0.9em;">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>협의분할서가 10장이면 10장 모두에 공증인 직인이 있어야 하나요?</span>
                    </div>
                    <div class="faq-answer">
                        <p>네, 맞습니다. 협의분할서가 여러 장인 경우, 각 장에 공증인의 직인(간인)으로 연결되어야 합니다(등기선례 제202001-1호, 2020. 1. 9.). 첫 장에만 있으면 안 됩니다. 이를 위반하면 등기청에서 보정명령을 내립니다. 공증 신청 시 "각 장에 간인해 달라"고 명시적으로 요청하세요.</p>
                        <p style="margin-top: 10px; color: #999; font-size: 0.9em;">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>공동상속인 중 1인이 해외에서 연락이 안 되면 어떻게 하나요?</span>
                    </div>
                    <div class="faq-answer">
                        <p>협의분할은 공동상속인 전원의 합의가 필수이므로, 1인이라도 연락이 닿지 않으면 협의분할을 진행할 수 없습니다. 이 경우 <span class="emphasis">공동상속등기</span>를 신청해야 합니다. 공동상속등기 신청 후, 나중에 연락이 된 상속인과 협의분할을 하게 되면 경정등기로 수정합니다(등기선례 제6-203호).</p>
                        <p style="margin-top: 10px; color: #999; font-size: 0.9em;">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>대리인이 다른 공동상속인이면 대리인도 협의분할서에 서명해야 하나요?</span>
                    </div>
                    <div class="faq-answer">
                        <p>네, 맞습니다. 대리인이 다른 공동상속인인 경우, 그 대리인도 자신의 상속 몫을 정하기 위해 협의분할서에 서명해야 합니다. 즉, 대리인은 두 가지 자격으로 서명합니다: ① 위임인(피위임인)의 대리인으로서 ② 자신의 상속인으로서. 따라서 대리인의 인감도장 날인과 인감증명서가 필요합니다(등기예규 제1778호 제6조 제4항).</p>
                        <p style="margin-top: 10px; color: #999; font-size: 0.9em;">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>아포스티유와 공증, 어느 것을 받아야 하나요?</span>
                    </div>
                    <div class="faq-answer">
                        <p><strong>상속인의 서명/인감:</strong> 공증을 받아야 합니다(아포스티유도 가능하지만 공증이 기본). <strong>외국 관공서 발급 서류:</strong> 아포스티유를 받아야 합니다(예: 거주증명서, 인감증명 등). 즉, 협의분할서에 본인이 서명하는 부분은 공증이나 재외공관 인증을 받고, 외국 정부 기관이 발급한 서류(거주증명 등)는 아포스티유를 받으면 됩니다. 해당 국가가 아포스티유 협약 가입국인지 확인하는 것이 중요합니다.</p>
                        <p style="margin-top: 10px; color: #999; font-size: 0.9em;">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>협의분할서 우편 발송 시 얼마나 시간이 걸리나요?</span>
                    </div>
                    <div class="faq-answer">
                        <p><span class="emphasis">⚡ 국제 우편은 왕복 2~3주</span>가 소요됩니다. 따라서 절차 전체로는 2~3개월을 예상하셔야 합니다. 구체적으로는: ① 협의분할서 송부(1주) ② 해외 거주 상속인 서명 및 공증(1~2주) ③ 한국 송부(1주) ④ 한국 내 상속인 서명 및 공증(1~2주) ⑤ 등기 신청(2~3주). 이 중에서 공증 대기 시간이 가장 길 수 있습니다. 미리 계획을 세우시기 바랍니다.</p>
                        <p style="margin-top: 10px; color: #999; font-size: 0.9em;">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 섹션 11: 관련 주제 링크 -->
        <div class="related-links">
            <h3>다음으로 확인할 내용</h3>
            <ul>
                <li><a href="외등_10_외국인협의분할.html">외국인이 포함된 상속재산 협의분할 등기 절차</a> — 외국인의 협의분할 전체 절차</li>
                <li><a href="외등_09_외국인법정상속.html">외국인의 한국 부동산 법정상속등기</a> — 협의분할이 불가능할 때 법정상속 신청</li>
                <li><a href="외등_25_아포스티유.html">아포스티유(Apostille) 완벽 가이드</a> — 아포스티유가 필요한 서류와 신청 방법</li>
                <li><a href="외등_08_인감대체.html">인감증명 없는 나라 외국인의 부동산 매도</a> — 인감 대신 본인서명사실확인서 활용법</li>
            </ul>
        </div>

        <!-- 섹션 12: 상담 CTA -->
        <div class="consultation-box">
            <h3>이 절차가 필요하신가요?</h3>
            <p><strong>첫 상담은 무료입니다.</strong></p>
            <p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다. 서류 준비부터 신청까지 법무사가 함께합니다.</p>
            <p style="margin-top: 15px; color: #666; font-size: 0.95em;">대리위임장 공증, 협의분할서 우편 발송, 등기 신청까지 모든 과정을 지원해드립니다.</p>
            <div class="button-group">
                <button class="btn btn-phone" onclick="alert('상담 전화 번호로 연결됩니다.')">📞 전화 상담</button>
                <button class="btn btn-kakao" onclick="alert('카카오톡 상담이 연결됩니다.')">💬 카카오톡 상담</button>
            </div>
        </div>

        <!-- 면책 문구 -->
        <div class="disclaimer">
            <p><strong>법률 정보 공시</strong></p>
            <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 조언이 아닙니다. 이 페이지는 2025년 현행 법령과 등기선례를 기준으로 작성되었습니다. 구체적인 상황이나 예외 사항에 대해서는 반드시 법무사와 상담하시기 바랍니다.</p>
            <p>등기선례와 예규는 예고 없이 변경될 수 있으므로, 신청 전에 최신 정보 확인을 권장합니다.</p>
        </div>
    </div>
</body>
</html>` },
    ],
    laws: [
      { name: `협의분할 전원 참가 원칙`, desc: `대법원 2001. 2. 9. 선고 2000다51797 판결` },
      { name: `공동상속인을 대리인으로 선임 가능`, desc: `등기선례 제201805-9호 (2018. 5. 28.)` },
      { name: `재외공관 공증의 효력`, desc: `등기선례 제202303-2호 (2023. 3. 20.)` },
      { name: `간인 방법`, desc: `등기선례 제201807-1호 (2018. 7. 5.)` },
      { name: `다중 장 공증`, desc: `등기선례 제202001-1호 (2020. 1. 9.)` },
      { name: `대리인 인감증명 요건`, desc: `등기예규 제1778호 제6조 제4항` },
      { name: `생사불명 상속인이 있는 경우`, desc: `등기선례 제6-203호` },
    ],
    forms: [],
  },
  {
    id: 'fi-12',
    title: "외국인의 부동산 증여",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
                <div class="checklist-item">
                    <div class="checklist-checkbox"></div>
                    <div class="checklist-text">외국인이 한국 부동산을 증여받으려고 합니다</div>
                </div>
                <div class="checklist-item">
                    <div class="checklist-checkbox"></div>
                    <div class="checklist-text">재산이 있는 부모님(외국인)이 자녀에게 부동산을 물려주려고 합니다</div>
                </div>
                <div class="checklist-item">
                    <div class="checklist-checkbox"></div>
                    <div class="checklist-text">외국 거주자에게 한국 부동산을 무상으로 양도하려고 합니다</div>
                </div>
                <div class="checklist-item">
                    <div class="checklist-checkbox"></div>
                    <div class="checklist-text">외국인 증여자의 경우 처분 위임장 작성 방법을 알고 싶습니다</div>
                </div>
                <div class="checklist-item">
                    <div class="checklist-checkbox"></div>
                    <div class="checklist-text">토지 증여 시 외국인토지법 신고 절차가 필요한지 확인하려고 합니다</div>
                </div>
                <div class="checklist-item">
                    <div class="checklist-checkbox"></div>
                    <div class="checklist-text">입국 여부에 따라 준비 서류가 다른지 알고 싶습니다</div>
                </div>
            </div>
        </section>

        <!-- 섹션 2: 핵심 요약 -->
        <section>
            <div class="summary-box">
                <h3>핵심 요약</h3>
                <ul>
                    <li><strong>증여 등기의 기초</strong>: 민법 제554조에 따른 증여 계약으로 성립하며, 증여등기청구권으로 소유권이전등기 신청 가능</li>
                    <li><strong>외국인 증여자</strong>: 등기예규 제1778호 제5조의 처분 위임장 규정 적용, 미입국 시 재외공관 공증 필요</li>
                    <li><strong>외국인 수증자</strong>: 등기예규 제1778호 제8조의2 적용, 토지 취득 시 외국인토지법에 따른 신고 또는 허가 필요</li>
                    <li><strong>취득 신고</strong>: 부동산거래신고법에 따라 취득일로부터 60일 이내 신고 필수</li>
                    <li><strong>첨부서류 이원화</strong>: 증여자 또는 수증자의 입국 여부에 따라 필요 서류가 상이</li>
                </ul>
            </div>` },
      { heading: `증여등기의 개요`, content: `<h3>증여의 법적 개념</h3>
            <p><strong>증여</strong>는 민법 제554조에 따라 "당사자 일방이 무상으로 재산을 상대방에 수여하는 의사를 표시하고 상대방이 이를 승낙함으로써 성립하는 계약"입니다. 부동산 증여의 경우, 증여자와 수증자 간 증여 계약이 성립된 후 소유권이전등기를 신청할 수 있습니다.</p>

            <h3>외국인 증여의 특수성</h3>
            <p>외국인이 부동산 증여에 관여하는 경우, 다음 두 가지 상황을 구분하여 절차를 진행해야 합니다:</p>
            <ul>
                <li><strong>증여자가 외국인인 경우</strong>: 처분 위임장 작성 시 재외공관 공증, 아포스티유 등 추가 인증 필요 (미입국 시)</li>
                <li><strong>수증자가 외국인인 경우</strong>: 외국인 등록번호 또는 등기용 등록번호 필수, 토지 취득 시 외국인토지법에 따른 신고·허가 필요</li>
            </ul>

            <div class="cta-box">
                <p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다. 정확한 안내가 필요하신가요?</p>
            </div>` },
      { heading: `증여등기 절차 흐름도`, content: `<div class="flowchart">
                <div style="margin-bottom: 20px;">
                    <div class="flowchart-step">증여 계약 체결</div>
                    <div class="flowchart-arrow">↓</div>
                    <div class="flowchart-step">필요 서류 준비</div>
                    <div class="flowchart-arrow">↓</div>
                </div>
                <div style="margin-bottom: 20px;">
                    <div class="flowchart-step">① 증여자가 외국인 (처분)</div>
                    <div class="flowchart-arrow">↓</div>
                    <div class="flowchart-step">처분 위임장 작성·공증</div>
                </div>
                <div style="margin-bottom: 20px;">
                    <div class="flowchart-step">② 수증자가 외국인 (취득)</div>
                    <div class="flowchart-arrow">↓</div>
                    <div class="flowchart-step">등기용 등록번호 확보</div>
                </div>
                <div style="margin-bottom: 20px;">
                    <div class="flowchart-arrow">↓</div>
                    <div class="flowchart-step">등기소에 소유권이전등기 신청</div>
                    <div class="flowchart-arrow">↓</div>
                    <div class="flowchart-step">등기 완료</div>
                </div>
                <div>
                    <div class="flowchart-arrow">↓</div>
                    <div class="flowchart-step">취득 신고 (60일 이내)</div>
                    <div class="flowchart-arrow">↓</div>
                    <div class="flowchart-step">토지 취득 신고/허가 (해당 시)</div>
                </div>
            </div>` },
      { heading: `증여자가 외국인인 경우 (양도)`, content: `<h3>처분 위임장 작성</h3>
            <p>외국인 증여자가 부동산을 처분할 때는 <strong>처분 위임장</strong>(위임장)이 필수입니다. 등기예규 제1778호 제5조에 따라 처분 위임장의 인증 방식이 달라집니다.</p>

            <h3>입국한 외국인 증여자</h3>
            <ul>
                <li>한국에 입국하여 거주하거나 체류 중인 경우</li>
                <li><strong>처분 위임장</strong>: 인감 날인 + 인감증명서 (한국 공증인 인증 가능)</li>
                <li>신분증명: 외국인등록증 또는 여권</li>
                <li>위임장 작성 장소: 한국 내 공증인 사무실</li>
            </ul>

            <h3>미입국 외국인 증여자</h3>
            <ul>
                <li>한국에 입국하지 않은 경우 (재외국민 포함)</li>
                <li><strong>처분 위임장</strong>: 재외공관(대사관·총영사관) 공증 또는 아포스티유 + 한국 공증인 인증</li>
                <li>신분증명: 여권 사본</li>
                <li>위임장 작성 장소: 해당국 재외공관 또는 공증인</li>
            </ul>

            <div class="warning-box">
                <h4>⚠ 중요 주의사항</h4>
                <p>미입국 외국인 증여자의 처분 위임장은 <strong>반드시 아포스티유 인증</strong> 또는 <strong>재외공관 공증</strong>이 필요합니다. 한국의 공증인 인증만으로는 등기소에서 수리하지 않을 수 있습니다.</p>
            </div>

            <h3>부동산양도신고확인서</h3>
            <p>외국인 증여자가 토지 등을 처분하는 경우, 다음 조건을 만족하면 <strong>부동산양도신고확인서</strong>가 필요합니다:</p>
            <ul>
                <li>외국인이 보유한 토지를 처분하는 경우</li>
                <li>그 토지를 취득할 당시 신고 의무가 있었던 토지</li>
                <li>등기예규 제1778호 제8조의2 적용</li>
            </ul>
            <p><strong>신고 방법</strong>: 관할 시·군·구청 외국인토지신고담당부서에서 발급받음</p>` },
      { heading: `수증자가 외국인인 경우 (취득)`, content: `<h3>외국인 수증자의 특수성</h3>
            <p>외국인이 부동산을 증여받아 취득하는 경우, 다음 점들이 중요합니다:</p>
            <ul>
                <li><strong>부동산양도신고확인서 불필요</strong>: 증여는 유상거래가 아니므로 양도신고 확인이 불필요</li>
                <li><strong>외국인토지법 신고·허가 필수</strong>: 토지를 취득하는 경우 반드시 신고 또는 허가 필요</li>
                <li><strong>취득 신고 필수</strong>: 부동산거래신고법에 따라 취득일로부터 60일 이내 신고</li>
            </ul>

            <h3>등기용 등록번호</h3>
            <p>외국인 수증자가 등기를 신청하려면 다음 중 하나를 제출해야 합니다:</p>
            <ul>
                <li><strong>외국인등록번호</strong> (한국에 입국하여 외국인등록한 경우)</li>
                <li><strong>등기용 등록번호</strong> (외국인등록번호가 없는 경우, 등기소에 신청하여 발급받음)</li>
            </ul>

            <div class="country-box">
                <h4>입국 여부에 따른 구분</h4>
                <p><strong>입국한 외국인 수증자</strong>: 외국인등록증으로 등록번호 확인, 여권 제시</p>
                <p><strong>미입국 외국인 수증자</strong>: 여권 사본으로 신원 확인 후 등기용 등록번호 발급 신청</p>
            </div>

            <h3>외국인토지법에 따른 신고·허가</h3>
            <p>증여받은 부동산이 다음에 해당하면 외국인토지법에 따른 절차가 필요합니다:</p>
            <ul>
                <li><strong>토지 취득</strong>: 취득일로부터 90일 이내 시·군·구청에 신고</li>
                <li><strong>허가 대상 토지</strong>: 보안지역·개발제한지역 등 제한되는 토지는 신고가 아닌 허가 필요</li>
                <li><strong>신고/허가 담당처</strong>: 관할 시·군·구청 외국인토지담당부서</li>
            </ul>

            <div class="precedent-box">
                <h4>등기선례 5-59</h4>
                <p>외국인이 부동산을 취득할 때 외국인등록번호 또는 등기용 등록번호가 필요하며, 등기 신청 시 반드시 첨부해야 합니다.</p>
            </div>` },
      { heading: `첨부서류`, content: `<h3>증여자(양도인)가 외국인인 경우</h3>
            <table>
                <thead>
                    <tr>
                        <th style="width: 25%;">서류명</th>
                        <th style="width: 37.5%;">입국한 경우</th>
                        <th style="width: 37.5%;">미입국인 경우</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>처분 위임장</strong></td>
                        <td>• 인감 날인<br>• 인감증명서 (3개월 이내)</td>
                        <td>• 재외공관 공증<br>또는<br>• 아포스티유 + 공증인 인증</td>
                    </tr>
                    <tr>
                        <td><strong>증여자 신분증명</strong></td>
                        <td>• 외국인등록증 사본 또는<br>• 여권 사본</td>
                        <td>• 여권 사본</td>
                    </tr>
                    <tr>
                        <td><strong>부동산양도신고확인서</strong></td>
                        <td>• 해당 토지인 경우 필수<br>• 시·군·구청 발급</td>
                        <td>• 해당 토지인 경우 필수<br>• 시·군·구청 발급</td>
                    </tr>
                    <tr>
                        <td><strong>등기필증 또는<br>등기권리증</strong></td>
                        <td>필수</td>
                        <td>필수</td>
                    </tr>
                    <tr>
                        <td><strong>증여 계약서</strong></td>
                        <td>필요 시 제출<br>(당사자 합의 증명용)</td>
                        <td>필요 시 제출<br>(당사자 합의 증명용)</td>
                    </tr>
                </tbody>
            </table>

            <h3>수증자(취득인)가 외국인인 경우</h3>
            <table>
                <thead>
                    <tr>
                        <th style="width: 25%;">서류명</th>
                        <th style="width: 37.5%;">입국한 경우</th>
                        <th style="width: 37.5%;">미입국인 경우</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>수증자 신분증명</strong></td>
                        <td>• 외국인등록증 사본 또는<br>• 여권 사본</td>
                        <td>• 여권 사본</td>
                    </tr>
                    <tr>
                        <td><strong>등기용 등록번호</strong></td>
                        <td>• 외국인등록번호<br>(외국인등록증 발급 번호)</td>
                        <td>• 등기용 등록번호<br>(등기소 신청 후 발급)</td>
                    </tr>
                    <tr>
                        <td><strong>취득 신고서</strong></td>
                        <td>• 취득일로부터 60일 이내<br>• 관할 시·군·구청 제출</td>
                        <td>• 취득일로부터 60일 이내<br>• 관할 시·군·구청 제출</td>
                    </tr>
                    <tr>
                        <td><strong>토지 취득 신고/허가</strong></td>
                        <td>• 해당 토지인 경우 필수<br>• 취득일로부터 90일 이내</td>
                        <td>• 해당 토지인 경우 필수<br>• 취득일로부터 90일 이내</td>
                    </tr>
                    <tr>
                        <td><strong>증여 계약서</strong></td>
                        <td>필요 시 제출<br>(수증자 동의 증명용)</td>
                        <td>필요 시 제출<br>(수증자 동의 증명용)</td>
                    </tr>
                </tbody>
            </table>

            <h3>공통 필수 서류</h3>
            <ul>
                <li><strong>등기권리증/등기필증</strong>: 증여자 명의 현재 권리증</li>
                <li><strong>증여 계약서</strong>: 당사자 쌍방이 서명한 증여 계약서 (필요 시)</li>
                <li><strong>소유권이전등기신청서</strong>: 등기소 양식 작성</li>
            </ul>` },
      { heading: `주의사항`, content: `<h3>처분 위임장 관련</h3>
            <div class="warning-box">
                <h4>① 아포스티유 생략 불가</h4>
                <p>미입국 외국인 증여자의 처분 위임장은 아포스티유 또는 재외공관 공증이 <strong>반드시</strong> 필요합니다. 한국의 공증인 인증만으로는 등기 수리 불가능</p>
            </div>

            <div class="warning-box">
                <h4>② 인감증명서 유효기간</h4>
                <p>입국한 외국인의 경우 인감증명서는 발급일로부터 3개월 이내여야 하며, 초과한 경우 등기소에서 새로 발급받아야 함</p>
            </div>

            <div class="warning-box">
                <h4>③ 외국인토지법 신고 누락</h4>
                <p>수증자가 외국인인 경우, 토지 취득 신고를 누락하면 외국인토지법 위반으로 과태료가 부과될 수 있음</p>
            </div>

            <h3>취득 신고 관련</h3>
            <ul>
                <li><strong>신고 기한</strong>: 취득일로부터 60일 이내 (초과 시 과태료)</li>
                <li><strong>신고 담당처</strong>: 관할 시·군·구청 부동산거래신고담당</li>
                <li><strong>신고 대상</strong>: 증여는 거래가 아니므로 취득신고만 해당 (양도신고 제외)</li>
            </ul>

            <h3>외국인등록번호 또는 등기용 등록번호</h3>
            <ul>
                <li><strong>입국한 외국인</strong>: 외국인등록번호 확보 (출입국관리사무소에서 외국인등록)</li>
                <li><strong>미입국 외국인</strong>: 등기소에 등기용 등록번호 신청 (여권 사본 첨부)</li>
                <li>등기용 등록번호가 없으면 등기 신청 불가</li>
            </ul>

            <h3>부동산양도신고확인서</h3>
            <ul>
                <li>증여자가 외국인이고, 해당 토지를 취득할 당시 신고 의무가 있었던 경우에만 필요</li>
                <li>신청처: 관할 시·군·구청 외국인토지담당부서</li>
                <li>부동산양도신고확인서가 필요한데 미제출 시 등기 거절 가능</li>
            </ul>

            <div class="case-box">
                <h4>사례</h4>
                <p>미국 거주 중국인이 한국의 아파트를 자녀(한국 거주 외국인)에게 증여하는 경우: 증여자는 미입국이므로 처분 위임장에 아포스티유 필요, 수증자는 입국했으므로 외국인등록번호로 등기용 등록번호 확보 후 등기 신청 가능</p>
            </div>` },
      { heading: `판례·예규`, content: `<div class="precedent-box">
                <h4>등기예규 제1778호 제5조</h4>
                <p><strong>외국인의 처분 위임장</strong>: 미입국 외국인이 부동산을 처분할 때 처분 위임장은 재외공관 공증 또는 아포스티유 필수. 입국한 외국인은 한국 공증인 인증 가능</p>
            </div>

            <div class="precedent-box">
                <h4>등기예규 제1778호 제8조의2</h4>
                <p><strong>외국인의 부동산양도신고확인서</strong>: 외국인이 토지를 취득할 당시 신고 의무가 있었던 토지를 처분하는 경우, 부동산양도신고확인서 첨부 필수</p>
            </div>

            <div class="precedent-box">
                <h4>등기선례 7-38</h4>
                <p><strong>외국인 부동산 증여 등기</strong>: 외국인이 증여인 또는 수증인인 경우 등기용 등록번호 또는 외국인등록번호를 반드시 기재하여야 등기 가능</p>
            </div>

            <div class="precedent-box">
                <h4>등기선례 5-59</h4>
                <p><strong>외국인 부동산 소유권이전 등기</strong>: 외국인의 신원 확인을 위해 외국인등록번호 또는 등기용 등록번호의 첨부가 필수. 이들 번호 없이는 등기 신청 거절</p>
            </div>

            <div class="precedent-box">
                <h4>부동산거래신고법 제3조</h4>
                <p><strong>취득 신고 의무</strong>: 부동산을 취득한 자는 취득일로부터 60일 이내 시·군·구청에 신고해야 하며, 증여도 취득에 포함됨</p>
            </div>

            <div class="precedent-box">
                <h4>외국인토지법 제5조</h4>
                <p><strong>토지 취득 신고</strong>: 외국인이 토지를 취득한 경우 취득일로부터 90일 이내 신고하거나 허가를 받아야 함</p>
            </div>` },
    ],
    laws: [
      { name: `등기예규 제1778호 제5조`, desc: `외국인의 처분 위임장: 미입국 외국인이 부동산을 처분할 때 처분 위임장은 재외공관 공증 또는 아포스티유 필수. 입국한 외국인은 한국 공증인 인증 가능` },
      { name: `등기예규 제1778호 제8조의2`, desc: `외국인의 부동산양도신고확인서: 외국인이 토지를 취득할 당시 신고 의무가 있었던 토지를 처분하는 경우, 부동산양도신고확인서 첨부 필수` },
      { name: `등기선례 7-38`, desc: `외국인 부동산 증여 등기: 외국인이 증여인 또는 수증인인 경우 등기용 등록번호 또는 외국인등록번호를 반드시 기재하여야 등기 가능` },
      { name: `등기선례 5-59`, desc: `외국인 부동산 소유권이전 등기: 외국인의 신원 확인을 위해 외국인등록번호 또는 등기용 등록번호의 첨부가 필수. 이들 번호 없이는 등기 신청 거절` },
      { name: `부동산거래신고법 제3조`, desc: `취득 신고 의무: 부동산을 취득한 자는 취득일로부터 60일 이내 시·군·구청에 신고해야 하며, 증여도 취득에 포함됨` },
      { name: `외국인토지법 제5조`, desc: `토지 취득 신고: 외국인이 토지를 취득한 경우 취득일로부터 90일 이내 신고하거나 허가를 받아야 함` },
    ],
    forms: [],
  },
  {
    id: 'fi-13',
    title: "외국인의 근저당권 설정·이전·말소 등기 절차",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="box checklist-box">
                    <div class="checklist-item">
                        <input type="checkbox">
                        <span>한국에 부동산을 소유한 외국인이며, 금융기관으로부터 담보대출을 받으려고 합니다</span>
                    </div>
                    <div class="checklist-item">
                        <input type="checkbox">
                        <span>외국 금융기관의 채권을 담보하기 위해 한국 부동산에 근저당권을 설정해야 합니다</span>
                    </div>
                    <div class="checklist-item">
                        <input type="checkbox">
                        <span>기존 근저당권을 다른 채권자에게 이전하려고 합니다</span>
                    </div>
                    <div class="checklist-item">
                        <input type="checkbox">
                        <span>근저당권 설정등기를 말소해야 하는데, 외국에 거주 중입니다</span>
                    </div>
                    <div class="checklist-item">
                        <input type="checkbox">
                        <span>외화(달러, 유로 등) 채권금액으로 근저당권을 설정할 수 있는지 궁금합니다</span>
                    </div>
                    <div class="checklist-item">
                        <input type="checkbox">
                        <span>외국인이 근저당권자 또는 설정자로서 필요한 등기용 등록번호를 어떻게 취득하는지 알고 싶습니다</span>
                    </div>
                </div>
            </div>

            <!-- 섹션 2: 핵심 요약 -->
            <div class="section">` },
      { heading: `핵심 요약`, content: `<div class="box summary-box">
                    <h4>5분 만에 알아보는 외국인 근저당권 등기</h4>
                    <ul>
                        <li><strong>근저당권의 정의:</strong> 민법 제357조에 따른 채권최고액 이상의 채권을 담보하는 저당권으로, 채무 확정 전에 생기는 채권도 담보합니다</li>
                        <li><strong>외화 표시 가능:</strong> 등기예규 제1816호에 따라 미화·유로 등 외국통화로 채권최고액을 표시할 수 있습니다</li>
                        <li><strong>입국 여부에 따른 차이:</strong> 입국한 경우 인감증명서, 미입국인 경우 공증·아포스티유 서류가 필요합니다</li>
                        <li><strong>외국인 등록번호:</strong> 설정·이전·말소 등기 시 외국인등록번호 또는 등기소 부여 번호가 필요합니다</li>
                        <li><strong>절차의 간편성:</strong> 말소등기는 권리말소로 처리되어 취득신고가 불필요합니다</li>
                    </ul>
                </div>
            </div>

            <!-- 섹션 3: 개요 -->
            <div class="section">` },
      { heading: `근저당권이란?`, content: `<p>근저당권(根抵當權)은 <strong>민법 제357조</strong>에서 규정하는 담보물권으로, 일반 저당권과 달리 <strong>채권의 최고액을 정하고 그 범위 내에서 채무의 확정 전에 발생하는 모든 채권을 담보</strong>합니다. 은행 대출이나 신용거래 등 장기간에 걸쳐 여러 차례 거래가 이루어지는 경우에 주로 사용됩니다.</p>

                <h3>외국인이 근저당권을 설정·이전·말소할 때의 특수사항</h3>
                <p>외국인이 한국 부동산에 근저당권을 설정하거나 변경하는 경우, 다음과 같은 특수사항을 고려해야 합니다:</p>
                <ul>
                    <li>등기용 등록번호 필수 (외국인등록번호 또는 등기소 부여번호)</li>
                    <li>입국 여부에 따른 서류 차등화 (입국 시 인감증명서, 미입국 시 공증/아포스티유)</li>
                    <li>외화로 채권최고액 표시 가능</li>
                    <li>위임장 작성 시 재외공관 공증 또는 아포스티유 인증 필요</li>
                    <li>말소등기 시에도 동의서 필요</li>
                </ul>
            </div>

            <!-- 섹션 4: 근저당권 설정등기 -->
            <div class="section">` },
      { heading: `근저당권 설정등기 절차 및 서류`, content: `<p>근저당권 설정등기는 <strong>채권자(근저당권자)와 채무자(또는 물상보증인)의 합의</strong> 또는 법원의 판결에 기초하여 신청합니다.</p>

                <h3>절차 단계</h3>
                <div class="procedure-flow">
                    <div class="procedure-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>근저당권 설정계약 체결</h4>
                            <p>채권자와 채무자(또는 물상보증인)가 근저당권 설정에 합의합니다. 외국인의 경우 인감날인 또는 공증을 통해 의사를 입증합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>필요 서류 준비</h4>
                            <p>입국 여부에 따라 인감증명서 또는 공증서 등을 준비합니다. 등기용 등록번호를 확보합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>등기 신청</h4>
                            <p>부동산이 소재한 지역의 등기소에 근저당권설정등기를 신청합니다. 온라인 신청이 가능합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>등기완료</h4>
                            <p>등기소에서 심사 후 등기를 완료하고 등기부등본을 발급받습니다.</p>
                        </div>
                    </div>
                </div>

                <h3>필요 서류 (외국인이 채무자 또는 물상보증인인 경우)</h3>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>서류</th>
                                <th>입국한 경우</th>
                                <th>미입국인 경우</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>설정계약서 또는 위임장</strong></td>
                                <td>인감 날인 + 인감증명서 (3개월 이내)</td>
                                <td>재외공관 공증 또는 아포스티유 + 한글 번역본</td>
                            </tr>
                            <tr>
                                <td><strong>신분증명</strong></td>
                                <td>외국인등록증 또는 여권 사본</td>
                                <td>여권 사본 (공증/아포스티유 대상)</td>
                            </tr>
                            <tr>
                                <td><strong>등기필증(권리증)</strong></td>
                                <td colspan="2" style="text-align: center;">필수 (기존 소유권 등기 증명)</td>
                            </tr>
                            <tr>
                                <td><strong>등기용 등록번호</strong></td>
                                <td colspan="2" style="text-align: center;">외국인등록번호 또는 등기소 부여 번호</td>
                            </tr>
                            <tr>
                                <td><strong>채권증명서</strong></td>
                                <td colspan="2" style="text-align: center;">채권을 증명하는 서류 (대출약정서, 계약서 등)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="box warning-box">
                    <h4>주의: 외국인이 근저당권자(채권자)인 경우</h4>
                    <p>외국인이 근저당권자로서 등기를 신청할 경우, <strong>반드시 등기용 등록번호</strong>를 미리 취득해야 합니다. 다음 중 하나를 선택합니다:</p>
                    <ul>
                        <li>외국인등록번호 (한국에 3개월 이상 거주하며 외국인등록을 한 경우)</li>
                        <li>등기소 부여 번호 (부동산 취득 등기나 다른 등기 신청 시 등기소로부터 부여받은 번호)</li>
                    </ul>
                </div>
            </div>

            <!-- 섹션 5: 근저당권 이전등기 -->
            <div class="section">` },
      { heading: `근저당권 이전등기 절차 및 서류`, content: `<p>근저당권은 <strong>민법 제361조</strong>에 따라 피담보채권과 함께만 이전이 가능합니다. 근저당권자의 변경을 의미합니다.</p>

                <h3>절차 단계</h3>
                <div class="procedure-flow">
                    <div class="procedure-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>이전계약 체결</h4>
                            <p>기존 근저당권자(양도인)와 새로운 근저당권자(양수인)가 근저당권 이전에 합의합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>동의서 준비</h4>
                            <p>채무자의 동의서를 받습니다. 외국인의 경우 인감증명서 또는 공증서를 첨부합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>이전등기 신청</h4>
                            <p>등기소에 근저당권이전등기를 신청합니다. 양도인과 양수인이 공동으로 신청합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>등기완료</h4>
                            <p>등기부등본에 새로운 근저당권자가 반영됩니다.</p>
                        </div>
                    </div>
                </div>

                <h3>필요 서류</h3>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>서류</th>
                                <th>양도인이 외국인인 경우</th>
                                <th>양수인이 외국인인 경우</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>이전계약서 또는 위임장</strong></td>
                                <td>입국: 인감증명서 / 미입국: 공증·아포스티유</td>
                                <td>입국: 인감증명서 / 미입국: 공증·아포스티유</td>
                            </tr>
                            <tr>
                                <td><strong>채무자 동의서</strong></td>
                                <td colspan="2" style="text-align: center;">필수 (채무자가 외국인인 경우 공증/아포스티유 필요)</td>
                            </tr>
                            <tr>
                                <td><strong>등기필증</strong></td>
                                <td colspan="2" style="text-align: center;">필수</td>
                            </tr>
                            <tr>
                                <td><strong>등기용 등록번호</strong></td>
                                <td>기존 번호 유지</td>
                                <td>양수인의 새로운 등록번호 필요</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="box case-box">
                    <h4>사례: 외국 금융기관 간 채권 이전</h4>
                    <p>한국에 지점이 있는 A 외국 은행이 한국 부동산에 근저당권을 설정한 후, B 외국 은행에 채권을 양도하는 경우, 이전등기를 신청합니다. A 은행과 B 은행 모두 각각의 등기용 등록번호를 제시하면 이전등기가 완료됩니다.</p>
                </div>
            </div>

            <!-- 섹션 6: 근저당권 말소등기 -->
            <div class="section">` },
      { heading: `근저당권 말소등기 절차 및 서류`, content: `<p>근저당권 말소등기는 채권자의 동의 또는 해지증서에 기초하여 신청합니다. <strong>말소등기는 권리의 소멸이므로 취득신고가 불필요</strong>합니다.</p>

                <h3>절차 단계</h3>
                <div class="procedure-flow">
                    <div class="procedure-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>채권자 동의 취득</h4>
                            <p>근저당권자(채권자)로부터 말소 동의서 또는 해지증서를 받습니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>서류 확인</h4>
                            <p>동의서가 채권자의 인감증명서 또는 공증으로 인증되었는지 확인합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>말소등기 신청</h4>
                            <p>등기소에 근저당권말소등기를 신청합니다. 채무자 또는 현 소유자가 신청 가능합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>등기완료</h4>
                            <p>등기부등본에 근저당권이 말소됩니다. 취득신고 불필요.</p>
                        </div>
                    </div>
                </div>

                <h3>특수사항: 설정자가 외국인인 경우</h3>
                <div class="box difference-box">
                    <h4>등기선례 제6-81호 적용</h4>
                    <p>근저당권설정자(채무자 또는 물상보증인)가 외국인인 경우, 말소등기 신청 시 <strong>외국인 등록번호를 별도로 제시할 필요가 없습니다</strong>. 설정 당시 등기되어 있는 등록번호로 처리됩니다.</p>
                </div>

                <h3>필요 서류</h3>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>서류</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>채권자 동의서 또는 해지증서</strong></td>
                                <td>근저당권자의 인감 날인 + 인감증명서 (또는 공증서)</td>
                            </tr>
                            <tr>
                                <td><strong>등기필증</strong></td>
                                <td>기존 근저당권설정등기부등본</td>
                            </tr>
                            <tr>
                                <td><strong>신분증명</strong></td>
                                <td>신청인(채무자 또는 소유자)의 신분증 사본</td>
                            </tr>
                            <tr>
                                <td><strong>등록번호</strong></td>
                                <td>설정 당시 등기된 외국인 등록번호 (새로 제시 불필요)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 섹션 7: 첨부서류 종합 비교표 -->
            <div class="section">` },
      { heading: `첨부서류 종합 비교표`, content: `<p>외국인이 근저당권설정자(채무자 또는 물상보증인)인 경우의 입국 여부별 첨부서류 비교:</p>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>입국한 경우 (외국인등록증 보유)</th>
                                <th>미입국인 경우 (해외 거주)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>설정계약서/위임장 인증</strong></td>
                                <td>
                                    · 인감 날인 (서명 및 인장)<br>
                                    · 인감증명서 (발급일 3개월 이내)<br>
                                    · 관할 구청/세무서/등기소에서 발급
                                </td>
                                <td>
                                    · 재외공관 공증 (대사관/총영사관)<br>
                                    또는<br>
                                    · 아포스티유 (현지 정부 기관)<br>
                                    · 한글 번역본 필수
                                </td>
                            </tr>
                            <tr>
                                <td><strong>신분증명</strong></td>
                                <td>
                                    · 외국인등록증 사본<br>
                                    또는<br>
                                    · 여권 사본
                                </td>
                                <td>
                                    · 여권 사본<br>
                                    (공증/아포스티유 대상)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>등기용 등록번호</strong></td>
                                <td colspan="2" style="text-align: center;">
                                    · 외국인등록번호 또는<br>
                                    · 등기소 부여 번호<br>
                                    (둘 중 하나 필수)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>추가 서류</strong></td>
                                <td>
                                    · 등기필증<br>
                                    · 건물/토지 등기부등본<br>
                                    · 채권증명서
                                </td>
                                <td>
                                    · 등기필증<br>
                                    · 건물/토지 등기부등본<br>
                                    · 채권증명서<br>
                                    · 한글 번역본 (공증 시)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>소요 시간</strong></td>
                                <td>약 2~3주 (국내 절차)</td>
                                <td>약 4~6주 (공증·번역 포함)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 섹션 8: 외화 채권최고액 표시 -->
            <div class="section">` },
      { heading: `외화로 채권최고액을 표시하는 방법`, content: `<p>외국인이 근저당권을 설정할 때, <strong>채권최고액을 외국 통화로 표시</strong>할 수 있습니다. 이는 국제 금융거래나 외화 차입금을 담보할 때 매우 유용합니다.</p>

                <h3>법적 근거</h3>
                <div class="box reference-box">
                    <h4>등기예규 제1816호 제2조 제2항</h4>
                    <p>"근저당권설정등기의 채권최고액은 금액으로 표시하여야 하며, 외국통화로 표시하는 경우에도 이를 인정한다"</p>
                </div>

                <h3>외화 표시 방식</h3>
                <ul>
                    <li><strong>예시 1:</strong> 채권최고액 미화 금 100,000달러</li>
                    <li><strong>예시 2:</strong> 채권최고액 유로 50,000유로</li>
                    <li><strong>예시 3:</strong> 채권최고액 일본 엔 10,000,000엔</li>
                </ul>

                <div class="box warning-box">
                    <h4>주의사항</h4>
                    <ul>
                        <li>외화로 표시된 채권최고액도 등기부등본에 그대로 기재됩니다</li>
                        <li>환율 변동에 따른 환전 및 청구는 당사자 간 계약으로 정합니다</li>
                        <li>법원의 판결이 필요한 경우, 소송 시점의 환율을 적용하여 원화로 환전합니다</li>
                        <li>금융기관 간 계약에서 명확히 하는 것이 분쟁 예방에 도움이 됩니다</li>
                    </ul>
                </div>

                <h3>등기 신청 시 기재 방법</h3>
                <div class="procedure-flow">
                    <div class="procedure-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>등기 신청서에 외화 금액 명시</h4>
                            <p>채권최고액 항목에 통화명과 금액을 함께 기재합니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>원화 환산액 기재 (선택)</h4>
                            <p>참고용으로 등기 신청 시점의 환율을 적용하여 원화 환산액을 병기할 수 있습니다.</p>
                        </div>
                    </div>
                    <div class="procedure-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>등기소 심사 및 승인</h4>
                            <p>등기소는 외화 표시를 그대로 인정하고 등기부등본에 기재합니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 섹션 9: 판례·예규 -->
            <div class="section">` },
      { heading: `관련 판례·예규`, content: `<div class="box reference-box">
                    <h4>1. 등기예규 제1816호 (채권최고액 외화 표시)</h4>
                    <p><strong>내용:</strong> 근저당권설정등기의 채권최고액을 외국통화로 표시하는 것을 허용합니다. 이는 국제거래와 외화 채권을 담보할 때 필수적인 규정입니다.</p>
                    <p><strong>적용:</strong> 미화, 유로, 엔 등 주요 국제 통화뿐만 아니라 다양한 외국 통화 사용 가능</p>
                </div>

                <div class="box reference-box">
                    <h4>2. 등기선례 제6-81호 (외국인 설정자의 말소등기)</h4>
                    <p><strong>내용:</strong> 근저당권설정자가 외국인인 경우, 말소등기 신청 시 외국인등록번호를 새로 제시할 필요가 없습니다. 설정 당시 등기된 등록번호로 확인합니다.</p>
                    <p><strong>의의:</strong> 미입국 외국인이 말소등기를 신청할 때 절차를 간소화합니다.</p>
                </div>

                <div class="box reference-box">
                    <h4>3. 등기예규 제1778호 제5조 (외국인의 위임장)</h4>
                    <p><strong>내용:</strong> 외국인이 부동산 등기를 위임하는 경우, 위임장은 입국 시 인감증명서, 미입국 시 재외공관 공증 또는 아포스티유로 인증해야 합니다.</p>
                    <p><strong>적용범위:</strong> 근저당권 설정, 이전, 말소 등 모든 등기 신청</p>
                </div>

                <div class="box reference-box">
                    <h4>4. 부동산등기규칙 제93조의2 (외국인등록번호)</h4>
                    <p><strong>내용:</strong> 외국인이 부동산 등기를 신청할 때는 외국인등록번호 또는 등기소 부여 번호를 제시해야 합니다.</p>
                    <p><strong>확인방법:</strong> 외국인등록번호는 출입국관리사무소에서, 등기소 부여 번호는 등기소에서 확인</p>
                </div>
            </div>

            <!-- 섹션 10: 다음으로 확인할 내용 -->
            <div class="section">` },
    ],
    laws: [
      { name: `1. 등기예규 제1816호 (채권최고액 외화 표시)`, desc: `내용: 근저당권설정등기의 채권최고액을 외국통화로 표시하는 것을 허용합니다. 이는 국제거래와 외화 채권을 담보할 때 필수적인 규정입니다.` },
      { name: `2. 등기선례 제6-81호 (외국인 설정자의 말소등기)`, desc: `내용: 근저당권설정자가 외국인인 경우, 말소등기 신청 시 외국인등록번호를 새로 제시할 필요가 없습니다. 설정 당시 등기된 등록번호로 확인합니다.` },
      { name: `3. 등기예규 제1778호 제5조 (외국인의 위임장)`, desc: `내용: 외국인이 부동산 등기를 위임하는 경우, 위임장은 입국 시 인감증명서, 미입국 시 재외공관 공증 또는 아포스티유로 인증해야 합니다.` },
      { name: `4. 부동산등기규칙 제93조의2 (외국인등록번호)`, desc: `내용: 외국인이 부동산 등기를 신청할 때는 외국인등록번호 또는 등기소 부여 번호를 제시해야 합니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-14',
    title: "재외국민이란?",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-item">
                <input type="checkbox" id="check1">
                <label for="check1">미국, 캐나다, 호주 등 외국에 영주권을 가지고 있는데 한국 국적도 유지하고 있는 경우</label>
            </div>
            <div class="checklist-item">
                <input type="checkbox" id="check2">
                <label for="check2">한국 부동산을 매매, 상속받거나 증여받을 예정인 해외 거주자</label>
            </div>
            <div class="checklist-item">
                <input type="checkbox" id="check3">
                <label for="check3">외국인과 재외국민, 외국국적동포의 차이를 알고 싶은 경우</label>
            </div>
            <div class="checklist-item">
                <input type="checkbox" id="check4">
                <label for="check4">부동산 등기 신청 시 어떤 서류를 준비해야 하는지 알고 싶은 경우</label>
            </div>
            <div class="checklist-item">
                <input type="checkbox" id="check5">
                <label for="check5">재외국민 신고나 재외국민 등록번호가 필요한지 궁금한 경우</label>
            </div>
        </section>

        <!-- 섹션 2: 핵심 요약 -->
        <div class="summary-box">
            <h3>핵심 요약</h3>
            <p><strong>재외국민</strong>은 <strong>대한민국의 국적을 유지하면서 외국의 영주권을 가진 사람</strong>을 말합니다. 외국에 거주하고 있어도 한국 국적이 있으므로, 부동산 등기에서는 내국인과 거의 동일하게 대우받습니다. 외국인이나 외국국적동포(한국 국적을 포기한 사람)와는 완전히 다르며, 등기에 필요한 서류도 다릅니다.</p>
        </div>` },
      { heading: `1. 재외국민의 법적 정의 및 근거`, content: `<div class="subsection-title">정의</div>
            <p>재외국민은 <strong>대한민국의 국적을 가지고 있으면서 외국정부로부터 영주권을 취득하였거나, 계속하여 장기간 외국에 체류하는 자</strong>를 말합니다.</p>

            <p>즉, 다음 두 조건을 모두 충족해야 재외국민입니다:</p>
            <ul>
                <li><strong>국적 조건:</strong> 대한민국의 국적을 유지하고 있어야 함</li>
                <li><strong>거주 조건:</strong> 외국의 영주권을 가지거나 외국에 장기 거주할 목적으로 거주 중</li>
            </ul>

            <p class="warning-box"><strong>⚠️ 중요한 차이점:</strong> 단순히 해외여행을 하거나 출장, 유학 중인 사람은 재외국민이 아닙니다. 해외에 <strong>영구적 또는 장기적으로 거주할 의사</strong>를 가지고 있어야 합니다.</p>

            <div class="subsection-title">법령 근거</div>
            <ul>
                <li><strong>재외동포의 출입국과 법적 지위에 관한 법률 제2조 제1호</strong><br>
                    "재외국민"의 정의 규정</li>
                <li><strong>부동산등기규칙 제60조</strong><br>
                    재외국민의 인감증명 및 서류 제출 방법</li>
                <li><strong>등기예규 제1778호 제2조 제1호</strong><br>
                    부동산등기 실무에서의 재외국민 정의 및 처리 방법</li>
                <li><strong>주민등록법 제10조의2</strong><br>
                    재외국민의 주민등록 신고 방법</li>
            </ul>` },
      { heading: `2. 외국인 / 재외국민 / 외국국적동포 비교표`, content: `<p>세 집단의 법적 지위와 부동산 등기 처리 방법을 정확히 구분하는 것이 중요합니다:</p>

            <table>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>외국인</th>
                        <th>재외국민</th>
                        <th>외국국적동포</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>국적</strong></td>
                        <td>외국 국적만 보유</td>
                        <td><strong>한국 국적 유지</strong></td>
                        <td>외국 국적만 보유</td>
                    </tr>
                    <tr>
                        <td><strong>출신</strong></td>
                        <td>한국과 무관</td>
                        <td>한국계</td>
                        <td>한국 국적 자나 그 직계비속</td>
                    </tr>
                    <tr>
                        <td><strong>인감증명</strong></td>
                        <td>불가 (제도 없음)<br>공증 필요</td>
                        <td><strong>재외공관 공증 또는 인감증명</strong></td>
                        <td>불가 (제도 없음)<br>공증 필요</td>
                    </tr>
                    <tr>
                        <td><strong>부동산 취득·보유 신고</strong></td>
                        <td>필요 (외국인토지법)</td>
                        <td><strong>불필요 (내국인 취급)</strong></td>
                        <td>필요 (외국인으로 취급)</td>
                    </tr>
                    <tr>
                        <td><strong>첨부 서류 기준</strong></td>
                        <td>등기예규 제1778호 (외국인)</td>
                        <td><strong>등기예규 제1778호 (재외국민)</strong></td>
                        <td>등기예규 제1778호 (외국인)</td>
                    </tr>
                    <tr>
                        <td><strong>등록번호</strong></td>
                        <td>외국인등록번호 또는<br>등기소 부여번호</td>
                        <td><strong>주민등록번호 (말소된 경우<br>재외국민등록번호 또는<br>등기용 번호)</strong></td>
                        <td>국내거소신고번호 또는<br>등기소 부여번호</td>
                    </tr>
                    <tr>
                        <td><strong>내국인 동등 대우</strong></td>
                        <td>일부만 (토지 취득 제한)</td>
                        <td><strong>대부분 (국적이 있으므로)</strong></td>
                        <td>제한적</td>
                    </tr>
                </tbody>
            </table>

            <div class="info-box">
                <strong>ℹ️ 가장 중요한 차이점:</strong> 재외국민은 한국 국적을 가지고 있으므로, 부동산 등기에서 내국인과 유사하게 취급됩니다. 외국인토지법이 적용되지 않으며, 부동산 취득·보유 신고도 하지 않습니다.
            </div>` },
      { heading: `3. 재외국민의 부동산 등기 특징`, content: `<div class="subsection-title">내국인과 동일한 점</div>
            <ul>
                <li><strong>당사자능력:</strong> 부동산 매매, 상속, 증여 등기를 본인 이름으로 신청 가능</li>
                <li><strong>취득·처분 신고:</strong> 외국인토지법 신고 불필요 (내국인 기준 적용)</li>
                <li><strong>법적 지위:</strong> 내국인과 동일한 법적 권리와 의무</li>
                <li><strong>상속·증여:</strong> 내국인과 동일한 절차</li>
            </ul>

            <div class="subsection-title">외국인과 다른 점 (준비 서류)</div>
            <ul>
                <li><strong>인감증명서:</strong>
                    <ul style="margin-top: 8px;">
                        <li>체류국 재외공관에서 발급하는 인감증명 또는 공증으로 제출 가능</li>
                        <li>재외공관이 없는 지역에서는 당해국 공증인의 공증 필요</li>
                        <li>국내 공증인의 공증으로는 대체 불가 (외국 공증만 인정)</li>
                    </ul>
                </li>
                <li><strong>주소증명:</strong>
                    <ul style="margin-top: 8px;">
                        <li>재외국민등록부등본 (가장 일반적)</li>
                        <li>국내 주민등록 신고한 경우 주민등록표등초본</li>
                        <li>체류국 관공서 발행 주소증명 (일본 주민표, 스페인 주민등록증명서 등)</li>
                        <li>불가피한 경우 체류국 공증인이 공증한 주소증명</li>
                    </ul>
                </li>
                <li><strong>등록번호:</strong>
                    <ul style="margin-top: 8px;">
                        <li>주민등록 말소 전에 받은 주민등록번호: 말소된 등초본으로 사용 가능</li>
                        <li>주민등록번호가 없는 경우: 부동산등기용등록번호(등기소 부여 번호) 필요</li>
                    </ul>
                </li>
            </ul>

            <div class="subsection-title">등기용 등록번호의 신청</div>
            <p>주민등록번호를 받지 않았거나 번호를 확인할 수 없는 재외국민은 대법원 산하 등기소에 부동산등기용등록번호를 신청해야 합니다.</p>
            <ul>
                <li>신청처: 서울중앙지방법원 등기국</li>
                <li>첨부서류:
                    <ul>
                        <li>재외국민등록부등본</li>
                        <li>기본증명서 (가족관계등록부)</li>
                    </ul>
                </li>
                <li>신청 시 기재 사항: 성명, 생년월일, 등록기준지, 주소, 성별, 신청년월일</li>
            </ul>

            <div class="info-box">
                <strong>ℹ️ 번호 구성:</strong> 부동산등기용등록번호는 특수한 형식(예: 0000-00-000000)으로 지급되며, 이는 등기 신청 시 주민등록번호 자리에 기재됩니다.
            </div>` },
      { heading: `4. 재외국민의 법적 지위를 판단하는 구체적 사례`, content: `<div class="case-box">
                <h4>사례 1: 미국 영주권자 홍길동 씨</h4>
                <p><strong>상황:</strong> 미국에 정착한 지 10년, 미국 영주권(Green Card) 보유, 한국 국적은 유지 중</p>
                <p><strong>재외국민 여부:</strong> YES (재외국민)</p>
                <p><strong>이유:</strong> 한국 국적을 보유하고 있으면서 외국의 영주권을 가지고 있으므로, 전형적인 재외국민입니다.</p>
                <p><strong>부동산 등기 처리:</strong> 한국 부동산을 매매·상속받을 때 내국인과 동일하게 처리됩니다. 다만 미국 재외공관(주로스앤젤레스 한국 총영사관)에서 인감증명 또는 공증을 받아 제출해야 합니다.</p>
            </div>

            <div class="case-box">
                <h4>사례 2: 캐나다 임시 체류 중인 이순신 씨</h4>
                <p><strong>상황:</strong> 캐나다에서 회사 파견 중 (2년 계약), 한국 국적 유지, 현지 체류증 보유 (영주권 없음)</p>
                <p><strong>재외국민 여부:</strong> NO (국내 거주자로 취급, 필요 시 재외국민 신청 가능)</p>
                <p><strong>이유:</strong> 한국 국적은 있지만 영주권이 없고, 임시 체류 성격이므로 전형적인 재외국민이라 보기 어렵습니다. 다만 90일 이상 거주할 의사가 있다면 재외국민등록을 신청하면 재외국민으로 인정받을 수 있습니다.</p>
                <p><strong>부동산 등기 처리:</strong> 국내에 주소를 두고 있다면 일반 국민과 동일하게 처리됩니다. 국외 장기 거주 의사를 명확히 하려면 재외국민등록을 먼저 완료하는 것을 권장합니다.</p>
            </div>

            <div class="case-box">
                <h4>사례 3: 호주 시민권자가 된 박문수 씨</h4>
                <p><strong>상황:</strong> 호주에서 시민권을 취득하여 한국 국적을 상실, 한국계 이민자</p>
                <p><strong>재외국민 여부:</strong> NO (외국국적동포로 분류)</p>
                <p><strong>이유:</strong> 한국 국적을 포기했으므로 재외국민이 아닙니다. 대신 한국 국적 자의 직계비속으로서 외국국적을 가진 "외국국적동포"로 분류됩니다.</p>
                <p><strong>부동산 등기 처리:</strong> 외국인 기준으로 처리됩니다. 토지 취득 시 승인 필요 여부를 확인해야 하며, 인감증명이 불가하므로 공증을 제출합니다. 부동산 취득·보유 신고가 필요합니다.</p>
            </div>` },
      { heading: `5. 나는 외국인? 재외국민? 외국국적동포? 판단 흐름도`, content: `<div class="info-box" style="background-color: #f0f4ff; border-left-color: #3b5bdb;">
                <p style="margin-bottom: 15px;"><strong>다음 질문에 차례대로 답해보세요:</strong></p>
                <ol style="margin-left: 20px;">
                    <li style="margin-bottom: 12px;">
                        <strong>현재 한국 국적을 보유하고 있는가?</strong><br>
                        YES → 다음 질문으로<br>
                        NO → <strong>외국인 또는 외국국적동포</strong> (한국 국적을 보유한 친족이 있으면 외국국적동포, 없으면 외국인)
                    </li>
                    <li style="margin-bottom: 12px;">
                        <strong>외국에서 영주권을 가지고 있거나, 외국에 장기간(90일 이상) 거주할 의사로 현재 거주 중인가?</strong><br>
                        YES → <strong>재외국민</strong><br>
                        NO → <strong>국내 거주자 (내국인)</strong>
                    </li>
                    <li style="margin-bottom: 12px;">
                        <strong>한국에 주소가 등록되어 있거나 국내 부동산 거래를 할 예정인가?</strong><br>
                        YES → 필요에 따라 재외국민등록 신청 권장<br>
                        NO → 별도 등록 불필요 (필요 시 신청)
                    </li>
                </ol>
            </div>
        </section>

        <!-- 섹션 7: 판례·예규 -->
        <section>
            <div class="precedent-box">
                <h4>등기 실무에서 인정하는 주요 판례·예규</h4>

                <div class="precedent-item">
                    <strong>등기예규 제1778호 (부동산등기에 관한 예규)</strong><br>
                    재외국민의 부동산 등기에 필요한 구체적인 서류와 절차를 규정하고 있습니다. 특히 제2조에서 재외국민의 정의, 제9조에서 인감증명 대체 방법, 제10조에서 주소 증명 방법, 제11조에서 등록번호 처리 방법을 명시하고 있습니다.
                </div>

                <div class="precedent-item">
                    <strong>등기선례 7-82 (2002.8.10. 등기 3402-439)</strong><br>
                    주민등록이 말소된 재외국민이 국내거소신고번호로 등기되어 있는 경우, 말소된 주민등록등초본으로 동일인임을 소명하여 경정등기를 할 수 있다는 판례로, 재외국민의 등록번호 변경에 관한 실무를 안내합니다.
                </div>

                <div class="precedent-item">
                    <strong>등기선례 3-932 (1992.9.21. 등기 제2005호)</strong><br>
                    반대급부의 이행이 완료된 날의 기준을 명확히 하는 판례로, 재외국민이 부동산을 매매할 때 소유권이전등기 신청 기한(60일)을 계산하는 데 참고됩니다.
                </div>

                <div class="precedent-item">
                    <strong>주민등록법 제10조의2 (재외국민의 주민등록)</strong><br>
                    재외국민이 국내에 30일 이상 거주할 목적으로 입국하는 경우 주민등록을 신청할 수 있으며, 이는 부동산 등기 시 국내 주소증명으로 활용될 수 있습니다.
                </div>

                <div class="precedent-item">
                    <strong>재외동포의 출입국과 법적 지위에 관한 법률 부칙 제2조 (경과규정)</strong><br>
                    국내거소신고 제도가 폐지됨에 따라, 2016년 7월 1일부터는 모든 국내거소신고증의 효력이 상실되었습니다. 현재 재외국민은 재외국민등록번호나 등기용 번호를 사용합니다.
                </div>
            </div>` },
      { heading: `6. 주의사항`, content: `<div class="warning-box">
                <strong>⚡ 소유권이전등기 신청 기한 (중요)</strong><br>
                재외국민이 부동산을 매매하여 등기를 신청할 때는 <strong>반대급부(잔금) 이행 완료일로부터 60일 이내</strong>에 신청해야 합니다. 이 기한을 넘으면 등기신청이 거절되거나 나중에 경정등기 문제가 생길 수 있습니다. 특히 해외에서 서류를 준비하는 경우 시간이 오래 걸리므로 미리 계획을 세워야 합니다.
            </div>

            <div class="warning-box">
                <strong>⚠️ 인감증명과 공증의 혼동</strong><br>
                재외국민이 부동산 등기를 신청할 때, 재외공관(대사관, 총영사관)에서 인감증명을 받거나 공증을 받을 수 있습니다. 둘 중 하나만 제출하면 되며, 둘 다 필요한 것은 아닙니다. 또한 현지 공증인의 공증과 우리나라 공증인의 공증은 다르므로, 반드시 재외공관의 공증을 받아야 합니다.
            </div>

            <div class="warning-box">
                <strong>ℹ️ 주민등록 말소 후의 등록번호 처리</strong><br>
                국외로 이주하여 주민등록이 자동으로 말소된 재외국민의 경우, 부동산 등기 신청 시 종전 주민등록번호를 사용할 수 있습니다. 이는 "말소된 주민등록등초본"을 첨부함으로써 증명합니다. 새로운 번호가 필요한 경우(주민등록번호를 받지 않았거나 확인 불가)에만 등기소에 등기용등록번호를 신청하면 됩니다.
            </div>

            <div class="warning-box">
                <strong>🌏 국가별 차이 — 아포스티유와 공증</strong><br>
                체류국이 헤이그협약 가입국인 경우, 서류에 아포스티유(Apostille)를 받으면 국내 사용이 가능합니다. 가입국이 아닌 경우 우리나라 영사 인증(Consular Legalization)이 필요할 수 있습니다. 재외공관의 공증을 받을 때 어떤 절차를 거쳐야 하는지 미리 확인하시기 바랍니다.
            </div>

            <div class="warning-box">
                <strong>⚠️ 재외국민등록과 부동산 등기의 관계</strong><br>
                재외국민등록은 법적으로 부동산 등기의 <strong>필수 요건은 아닙니다</strong>. 다만 주소를 증명할 서류가 필요한 경우 재외국민등록부등본이 가장 간단합니다. 만약 재외국민등록을 하지 않은 경우, 체류국 관공서 발행 주소증명이나 공증인의 공증 주소증명으로 대체할 수 있습니다.
            </div>` },
      { heading: `7. 자주 묻는 질문 (Q&A)`, content: `<div class="qa-item">
                <strong>Q1. 재외국민이 한국 부동산을 매매할 때 외국인토지법이 적용되나요?</strong>
                <div class="qa-answer">
                    <p>아니오, 적용되지 않습니다. 재외국민은 한국 국적을 가지고 있으므로 외국인토지법 제3조에 따른 "외국인"에 해당하지 않습니다. 따라서 토지 취득 승인이 필요 없고, 부동산 취득·보유 신고도 하지 않습니다. 이것이 외국국적동포와 재외국민의 가장 중요한 차이점입니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <strong>Q2. 영주권이 없으면 재외국민이 아닌가요?</strong>
                <div class="qa-answer">
                    <p>꼭 그렇지는 않습니다. 등기예규 제1778호 제2조에 따르면, 재외국민은 "외국의 영주권을 취득하였거나 영주할 목적으로 외국에 거주하는 자"입니다. 따라서 영주권이 없어도 <strong>영주할 목적(장기 거주 의사)으로 외국에 거주</strong>하고 있으면 재외국민으로 인정받을 수 있습니다. 다만 이 경우 재외국민등록을 신청하여 그 사실을 공식적으로 입증할 필요가 있습니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <strong>Q3. ⚡ 부동산 매매 후 등기를 신청하는 기한은 몇 일인가요?</strong>
                <div class="qa-answer">
                    <p><strong>60일입니다.</strong> 부동산등기특별조치법 제2조에 따르면, 부동산 매매 계약을 체결한 자는 반대급부(잔금) 이행이 완료된 날부터 60일 이내에 소유권이전등기를 신청해야 합니다. 이 기한을 지나면 등기신청이 거절될 수 있으므로, 재외국민의 경우 서류 준비에 충분한 시간을 미리 확보해야 합니다. 잔금 지급일이 명확하지 않으면 실제 잔금 입금 일자로부터 60일을 계산합니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <strong>Q4. 국내거소신고 제도가 폐지되었다는데, 지금은 어떻게 하나요?</strong>
                <div class="qa-answer">
                    <p>2016년 7월 1일 이후 국내거소신고 제도는 완전히 폐지되었습니다. 과거에 국내거소신고증을 가지고 있던 재외국민도 그 증명서의 효력이 상실되었습니다. 현재는 <strong>재외국민등록부등본이나 주민등록표등초본(국내 거주 시)</strong>으로 주소를 증명하면 됩니다. 만약 이 서류들을 취득할 수 없는 경우, 체류국 공증인이 공증한 주소증명이나 체류국 관공서 발행 주소증명으로 대체할 수 있습니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <strong>Q5. 한국 공증인의 공증으로 재외공관 공증을 대체할 수 있나요?</strong>
                <div class="qa-answer">
                    <p>아니오, 대체할 수 없습니다. 등기예규 제1778호 제9조 제3항에 명시되어 있듯이, 재외국민이 제출하는 인감증명을 대체하는 공증은 <strong>반드시 체류국의 재외공관(대사관, 총영사관)</strong>에서 받아야 합니다. 국내 공증인의 공증으로는 인정되지 않습니다. 단, 재외공관이 설치되지 않은 지역이거나 당해국 공중인 공증이 필요한 경우는 <strong>주재국의 공증인</strong> 공증으로 처리할 수 있습니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <strong>Q6. 재외국민등록을 하지 않고 부동산을 취득할 수 있나요?</strong>
                <div class="qa-answer">
                    <p>네, 가능합니다. 재외국민등록은 법적으로 <strong>부동산 등기의 필수 요건이 아닙니다</strong>. 다만 등기 신청 시 주소를 증명할 서류가 필요한데, 이를 다른 방법으로 충족할 수 있으면 됩니다. 예를 들어, 체류국 관공서 발행 주소증명, 공증인의 공증 주소증명, 또는 국내에 주소를 두고 있으면 주민등록표등초본으로 증명할 수 있습니다. 다만 재외국민등록부등본이 가장 간단하고 빠르므로, 장기 거주할 의사가 확실하다면 먼저 등록하는 것을 권장합니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <strong>Q7. 한국 국적을 포기하면 부동산 등기는 어떻게 되나요?</strong>
                <div class="qa-answer">
                    <p>한국 국적을 포기하면 재외국민 자격이 상실되고, 외국국적동포(또는 외국인)로 변경됩니다. 이미 소유하고 있는 부동산의 등기는 자동으로 변경되지 않으므로, 해당 부동산에 대해 <strong>국적 변경에 따른 경정등기</strong>를 신청해야 할 수도 있습니다. 또한 외국국적동포로서 추가로 부동산을 취득하는 경우, 외국인 기준이 적용되므로 토지 취득 승인 필요 여부를 확인해야 합니다. 법률적 영향이 크므로 국적 포기 전에 법무사와 상담하시기 바랍니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>
        </section>

        <!-- 섹션 10: 다음으로 확인할 내용 -->
        <section class="next-section">
            <h3>다음으로 확인할 내용</h3>
            <div class="next-links">
                <a href="외등_01_법적지위구분.html" class="next-link">
                    <strong>외국인·재외국민·외국국적동포 법적 지위 완벽 구분</strong>
                    <span>세 집단의 법적 지위와 부동산 등기 상의 차이를 더 자세히 학습합니다.</span>
                </a>
                <a href="외등_15_재외국민등록.html" class="next-link">
                    <strong>재외국민등록 제도와 부동산 등기의 관계</strong>
                    <span>재외국민등록의 절차, 효과, 부동산 거래 시 필요한 서류를 자세히 안내합니다.</span>
                </a>
                <a href="외등_16_재외국민취득.html" class="next-link">
                    <strong>재외국민의 한국 부동산 매수 등기 가이드</strong>
                    <span>실제 매매 계약부터 등기 신청까지 단계별 절차와 준비서류를 상세히 설명합니다.</span>
                </a>
            </div>
        </section>

        <!-- CTA 박스 -->
        <section class="cta-box">
            <h3>이 내용이 해당되시나요?</h3>
            <p>재외국민의 부동산 등기는 법적 지위, 체류 자격, 입국 여부에 따라 준비 서류가 달라집니다.</p>
            <p><strong>첫 상담은 무료입니다.</strong> 전문 법무사가 정확한 상황을 파악하고 필요한 절차를 안내해 드립니다.</p>
            <div class="cta-buttons">
                <a href="tel:02-000-0000" class="btn btn-call">📞 전화 상담</a>
                <a href="https://pf.kakao.com/_xAxaK" target="_blank" class="btn btn-kakao">💬 카카오톡 상담</a>
            </div>
        </section>

        <!-- 면책 문구 -->
        <section class="disclaimer">
            <strong>면책 문구</strong><br>
            본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 조언이 아닙니다. 이 페이지의 내용은 2025년 현행 법령을 기준으로 작성되었습니다. 실제 상황은 개인의 국적, 체류 자격, 거주지, 부동산 위치 등에 따라 달라질 수 있으므로, 정확한 판단을 위해서는 전문 법무사와의 상담을 권장합니다. 법령이 개정되거나 판례가 변경된 경우 이 페이지의 내용과 달라질 수 있습니다.
        </section>
    </div>
</body>
</html>` },
    ],
    laws: [
    ],
    forms: [],
  },
  {
    id: 'fi-15',
    title: "재외국민등록 제도와 부동산 등기",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-item">해외에 거주하면서 한국 부동산을 소유하고 있거나 취득하려는 한국 국민</div>
            <div class="checklist-item">재외공관에 등록되어 있지만 국내 주민등록이 말소된 상태</div>
            <div class="checklist-item">국내 인감증명서를 발급받을 수 없는 상황에서 부동산 등기를 진행해야 할 때</div>
            <div class="checklist-item">재외국민등록번호 또는 등기용 등록번호의 용도와 차이를 알고 싶은 분</div>
            <div class="checklist-item">재외공관 공증의 법적 효력과 인감증명 대체 가능 여부가 궁금한 분</div>
            <div class="checklist-item">주민등록 말소 재외국민으로서 부동산 등기에 필요한 서류가 무엇인지 확인하고 싶은 분</div>
        </section>

        <!-- 섹션 2: 핵심 요약 -->
        <section class="summary-box">
            <h3>한눈에 보는 핵심 정보</h3>
            <p><strong>재외국민등록</strong>은 해외에 거주하는 한국 국민이 재외공관(대사관·영사관)에 등록하는 제도로, 등록 시 <strong>재외국민등록번호</strong>를 부여받습니다.</p>
            <p>주민등록이 말소된 재외국민은 이 번호를 부동산 등기에 사용할 수 있습니다. 재외국민등록번호가 없는 경우, 등기소에서 별도의 <strong>등기용 등록번호</strong>를 부여합니다.</p>
            <p>국내 인감증명서를 받을 수 없는 재외국민은 <strong>재외공관 공증</strong>을 인감증명 대신 사용할 수 있으며, 이는 법적으로 동등한 효력을 인정받습니다.</p>` },
      { heading: `재외국민등록 제도란?`, content: `<h3>정의 및 목적</h3>
        <p>재외국민등록은 <span class="highlight">재외국민등록법</span>에 따라 해외에 거주하는 한국 국민이 거주지 관할 재외공관(한국 대사관, 총영사관 등)에 등록하는 제도입니다.</p>
        <ul>
            <li><strong>등록 대상:</strong> 해외에 거주하며 한국 국적을 보유한 만 18세 이상의 자</li>
            <li><strong>등록 기관:</strong> 외교부 산하 재외공관 (대사관, 총영사관, 영사관)</li>
            <li><strong>부여 번호:</strong> 등록 후 13자리의 재외국민등록번호 부여</li>
            <li><strong>발급 서류:</strong> 재외국민등록부 등본, 가족관계증명서 등</li>
        </ul>

        <h3>국내거소신고 제도의 폐지</h3>
        <p>종전에는 재외국민이 국내에 거소를 두고 있는 경우 <strong>국내거소신고</strong>를 하여 국내거소신고번호를 취득했습니다. 그러나 <strong>2022년 이후 국내거소신고 제도는 폐지</strong>되었고, 재외국민은 다음 중 하나의 번호를 사용해야 합니다:</p>
        <ul>
            <li><strong>재외국민등록번호:</strong> 재외공관에 등록하여 부여받은 번호</li>
            <li><strong>등기용 등록번호:</strong> 등기소에서 별도로 부여하는 번호</li>
        </ul>

        <p>이는 <span class="highlight">등기예규 제1778호 제11조</span>에서 규정하고 있습니다.</p>` },
      { heading: `재외국민 등록번호와 부동산 등기 관계`, content: `<h3>등기에 사용할 수 있는 번호</h3>
        <p>재외국민이 부동산 등기를 신청할 때, 신청자의 신원을 확인하기 위해 다음 중 하나의 번호를 사용합니다:</p>

        <table>
            <tr>
                <th>번호 유형</th>
                <th>발급 기관</th>
                <th>사용 조건</th>
                <th>사용 가능 여부</th>
            </tr>
            <tr>
                <td>재외국민등록번호</td>
                <td>재외공관 (외교부)</td>
                <td>재외공관에 등록한 경우</td>
                <td>가능 ✓</td>
            </tr>
            <tr>
                <td>등기용 등록번호</td>
                <td>등기소 (법원)</td>
                <td>재외국민등록번호 없거나 별도 요청 시</td>
                <td>가능 ✓</td>
            </tr>
            <tr>
                <td>주민등록번호</td>
                <td>주민등록 기관</td>
                <td>국내 주민등록이 말소된 상태</td>
                <td>불가능 ✗</td>
            </tr>
            <tr>
                <td>국내거소신고번호</td>
                <td>-</td>
                <td>2022년 폐지됨</td>
                <td>불가능 ✗</td>
            </tr>
        </table>

        <h3>재외국민등록번호의 구성</h3>
        <p>재외국민등록번호는 13자리로 구성되며, 형식은 다음과 같습니다:</p>
        <p style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #2d4a7a; font-family: 'Courier New', monospace; font-weight: bold;">
            YYMMDD-CCCCCCC
        </p>
        <ul>
            <li><strong>YYMMDD:</strong> 출생년월일 (예: 800515 = 1980년 5월 15일)</li>
            <li><strong>-:</strong> 하이픈</li>
            <li><strong>CCCCCCC:</strong> 일련번호 및 성별 정보 (7자리)</li>
        </ul>` },
      { heading: `주민등록 말소 재외국민의 등기 처리`, content: `<h3>주민등록이 말소되는 경우</h3>
        <p>재외국민이 해외에 거주하다가 국내에 돌아오지 않으면, 일정 기간이 지난 후 국내 주민등록이 <strong>자동으로 말소</strong>됩니다.</p>
        <ul>
            <li><strong>말소 대상:</strong> 주민등록상 주소지에서 2년 이상 거주하지 않은 자</li>
            <li><strong>말소 절차:</strong> 주민등록기관에서 직권으로 말소 (본인 신청 없음)</li>
            <li><strong>말소 결과:</strong> 주민등록번호를 사용한 국내 신원 확인 불가</li>
        </ul>

        <h3>주민등록 말소 재외국민의 필수 서류</h3>
        <p>주민등록이 말소된 재외국민이 부동산 등기를 신청할 때는 다음 서류를 제출해야 합니다:</p>

        <div class="case-box">
            <strong>신원 확인 및 주소 증명 서류</strong>
            <ul>
                <li><strong>신원 확인:</strong> 재외국민등록부 등본 또는 가족관계증명서</li>
                <li><strong>주소 증명:</strong> 거주 국가에서 발급한 주소 증명 서류 (거주 국가의 운전면허증, 비자, 비자 신청 서류, 주택 임차 계약서 등)
                    <ul style="margin-top: 8px;">
                        <li>또는 재외국민등록부 등본에 주소가 기재된 경우, 이를 주소 증명 서류로 활용 가능</li>
                        <li>또는 재외공관에서 발급한 거주확인서</li>
                    </ul>
                </li>
            </ul>
        </div>

        <h3>재외국민등록번호 없는 경우의 처리</h3>
        <p>재외국민등록번호를 취득하지 않은 경우, <span class="highlight">등기예규 제1778호 제11조</span>에 따라 등기소에서 <strong>등기용 등록번호</strong>를 부여받을 수 있습니다.</p>

        <div class="case-box">
            <strong>등기용 등록번호 신청</strong>
            <ul>
                <li>등기소에 등기용 등록번호 부여 신청</li>
                <li>신청 시 필요 서류: 신원 확인 서류 (여권, 재외국민등록부 등본 등)</li>
                <li>부여 후: 부동산 등기에 해당 번호 사용</li>
            </ul>
        </div>

        <h3>재외국민등록부 등본 발급</h3>
        <p>주민등록이 말소된 재외국민은 국내에서 주민등록등본을 발급받을 수 없으므로, 대신 다음 서류를 사용합니다:</p>
        <ul>
            <li><strong>재외국민등록부 등본:</strong> 재외공관에서 발급하며, 신원 및 주소 정보 포함</li>
            <li><strong>가족관계증명서:</strong> 대법원 가족관계등록정보시스템에서 발급</li>
            <li><strong>거주확인서:</strong> 재외공관에서 발급</li>
        </ul>` },
      { heading: `재외공관 공증 = 인감증명 대체`, content: `<h3>문제 상황: 인감증명 발급 불가</h3>
        <p>주민등록이 말소된 재외국민은 국내에서 <strong>인감증명서를 발급받을 수 없습니다</strong>. 인감증명은 주민등록상 주소지에서 발급되는데, 등록이 말소되면 인감도 함께 관리되지 않기 때문입니다.</p>

        <div class="warning-box">
            <strong>중요:</strong> 재외국민이 국내에 입국한 후, 신규로 주민등록을 등록하고 인감을 등록하면 국내 인감증명서를 발급받을 수 있습니다. 이 경우 국내 인감증명서를 우선 사용하는 것을 권고합니다.
        </div>

        <h3>해결책: 재외공관 공증</h3>
        <p><span class="highlight">등기예규 제1778호 제9조 제1항</span>에 따르면, <strong>재외공관에서 발급받은 공증은 국내 인감증명서와 동등한 법적 효력</strong>을 인정받습니다.</p>

        <div class="summary-box">
            <h3>재외공관 공증의 효력</h3>
            <p><strong>재외공관 공증 = 인감증명 대체 가능</strong></p>
            <p>재외국민이 재외공관(대사관, 총영사관 등)에서 받은 공증은 부동산 등기 신청 시 다음 목적으로 사용할 수 있습니다:</p>
            <ul style="margin-bottom: 0;">
                <li>위임장 서명 인증</li>
                <li>등기신청서 서명 인증</li>
                <li>기타 등기 관련 서류의 서명 및 날인 인증</li>
            </ul>
        </div>

        <h3>재외공관 공증 받는 방법</h3>
        <p>재외국민이 부동산 등기를 위해 재외공관 공증을 받으려면:</p>
        <ul>
            <li><strong>신청 장소:</strong> 거주 국가의 한국 대사관, 총영사관, 또는 영사관</li>
            <li><strong>필요 서류:</strong> 여권, 신분증, 공증받을 서류 원본</li>
            <li><strong>서명:</strong> 재외공관 직원 면전에서 본인이 직접 서명</li>
            <li><strong>수수료:</strong> 재외공관에서 정한 공증료 (보통 소액)</li>
            <li><strong>발급:</strong> 공증 사본을 한글 또는 영문으로 발급받음</li>
        </ul>

        <h3>공증 서류의 국내 제출</h3>
        <p>재외공관 공증을 받은 서류를 국내 등기소에 제출할 때:</p>
        <ul>
            <li><strong>원본 제출:</strong> 공증을 받은 문서 원본 제출</li>
            <li><strong>영문 서류의 경우:</strong> 공증 사본이 영문인 경우, 등기소에서 요구 시 한글 번역공증을 추가로 받아야 할 수 있음</li>
            <li><strong>등기소 확인:</strong> 제출 전 해당 등기소의 서류 요건 확인 권고</li>
        </ul>` },
      { heading: `법령 근거 및 예규`, content: `<div class="law-box">
            <h3>적용 법령</h3>
            <ul>
                <li><strong>재외국민등록법:</strong> 재외국민의 등록 및 재외국민등록번호 부여에 관한 법령</li>
                <li><strong>부동산등기규칙:</strong> 부동산 등기의 일반 규정</li>
                <li><strong>등기예규 제1778호 제9조 제1항:</strong> "재외공관이 발급한 공증은 인감증명을 대신할 수 있다"</li>
                <li><strong>등기예규 제1778호 제11조:</strong> "재외국민 등록번호 처리 기준 - 재외국민등록번호 또는 등기소 부여 번호 사용"</li>
                <li><strong>등기선례 제201012-2호:</strong> 재외국민의 부동산 등기 관련 선례</li>
                <li><strong>국제사법 제2조:</strong> 외국인의 법적 지위 관련 규정</li>
            </ul>
        </div>

        <h3>주요 예규 내용</h3>
        <div class="case-box">
            <strong>등기예규 제1778호의 핵심</strong>
            <ul>
                <li><strong>제9조 제1항:</strong> 재외공관 공증의 효력 - "한국 대사관 등 재외공관에서 발급한 공증은 국내 부동산 등기에서 인감증명을 대신할 수 있다"</li>
                <li><strong>제11조:</strong> 재외국민 등록번호 - "재외국민등록번호가 없거나 확인 불가능한 경우, 등기소에서 등기용 등록번호를 부여한다"</li>
                <li><strong>주소 증명:</strong> 주민등록 말소 재외국민의 주소는 거주 국가 서류 또는 재외국민등록부 등본으로 증명</li>
            </ul>
        </div>` },
    ],
    laws: [
      { name: `적용 법령`, desc: `` },
      { name: `등기예규 제1778호의 핵심`, desc: `` },
    ],
    forms: [],
  },
  {
    id: 'fi-16',
    title: "재외국민의 한국 부동산 매수 등기",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
                <ul>
                    <li>한국 국적을 유지하면서 해외에 거주하는 재외국민</li>
                    <li>한국 부동산(주택, 상업용 부동산, 토지 등)을 매수하려는 경우</li>
                    <li>등기부에 올려야 할 이름, 주소, 등록번호가 불명확한 상황</li>
                    <li>귀국할 계획이 없어 대리인을 통해 등기를 처리해야 하는 경우</li>
                    <li>재외공관에서 공증받은 서류로 등기를 진행하려는 경우</li>
                    <li>주민등록과 재외국민등록의 차이를 알고 싶은 경우</li>
                </ul>
            </div>` },
      { heading: `2. 핵심 요약`, content: `<div class="summary-box">
                <h3>재외국민 부동산 취득의 3가지 핵심</h3>
                <ul>
                    <li><span class="highlight">외국인토지법 미적용:</span> 재외국민은 한국 국적자이므로 토지취득신고·허가 불필요</li>
                    <li><span class="highlight">등기 절차는 내국인과 동일:</span> 소유권이전등기의 구성은 같으나, 첨부서류가 다름</li>
                    <li><span class="highlight">서류가 달라짐:</span> 주민등록 유무, 귀국 여부, 재외국민등록번호 여부에 따라 준비 서류 완전히 다름</li>
                </ul>
            </div>` },
      { heading: `3. 재외국민 취득의 기본 원칙`, content: `<h3>3-1. 외국인토지법의 적용을 받지 않습니다</h3>
            <p>재외국민은 대한민국 국적을 보유한 자이므로 <span class="highlight">외국인에 해당하지 않습니다.</span> 따라서 부동산 취득 시 다음이 불필요합니다.</p>
            <div class="document-title">불필요한 절차</div>
            <p style="margin-left: 20px;">
                • 부동산 취득 신고 (외국인토지법 제6조)<br>
                • 취득 허가 (외국인토지법 제7조)<br>
                • 거래 신고 (외국인토지법 제14조)
            </p>

            <h3>3-2. 부동산 취득·처분 신고 의무는 유지됩니다</h3>
            <p>다만 <span class="highlight">대한민국 국민으로서의 신고 의무</span>는 있습니다. 취득가액이 일정 규모 이상이면 국세청에 신고해야 합니다 (소득세법 제104조의2).</p>

            <h3>3-3. 등기 절차는 내국인과 동일, 서류는 다릅니다</h3>
            <p>부동산 등기의 기본 절차(매도인·매수인 확인, 계약금 선금, 본금 지급, 등기신청)는 내국인과 똑같습니다. 다만 다음 항목에서 서류가 달라집니다.</p>
            <div class="document-title">달라지는 서류 항목</div>
            <p style="margin-left: 20px;">
                • 신분 증명<br>
                • 주소 증명<br>
                • 위임장(대리인 선임 시)<br>
                • 인감증명 또는 공증<br>
                • 등록번호 기재 방식
            </p>` },
      { heading: `4. 등기 절차 흐름도`, content: `<div class="flowchart">
                <div class="flowchart-step">매도인·매수인 확인</div>
                <div class="flowchart-step">계약금 결제</div>
                <div class="flowchart-step">본금 결제</div>
                <div class="flowchart-step">등기 대리인 선임</div>
                <div class="flowchart-step">필요 서류 수집</div>
                <div class="flowchart-step">소유권이전등기 신청</div>
                <div class="flowchart-step">등기부등본 확인</div>
            </div>
            <p style="text-align: center; color: #666; margin-top: 20px; font-size: 0.95em;">
                ※ 귀국 여부, 주민등록 유무에 따라 필요한 서류(5단계)가 달라집니다.
            </p>` },
      { heading: `5. 내국인과 다른 첨부서류 항목`, content: `<h3>5-1. 신분 증명</h3>
            <p><span class="highlight">귀국한 경우:</span> 여권 + 국내 도착 기록 확인</p>
            <p><span class="highlight">미귀국인 경우:</span> 여권 사본(재외공관 확인) + 재외국민등록부 사본</p>

            <h3>5-2. 주소 증명</h3>
            <p><span class="highlight">귀국하여 주민등록 복원된 경우:</span> 주민등록등본(일반 내국인과 동일)</p>
            <p><span class="highlight">귀국했으나 주민등록 미복원인 경우:</span> 재외국민등록부 등본 + 국내 거소 확인 서류</p>
            <p><span class="highlight">미귀국인 경우:</span> 재외국민등록부 등본 또는 재외공관 거주확인서</p>

            <h3>5-3. 위임장</h3>
            <p><span class="highlight">귀국한 경우:</span> 인감 날인 + 인감증명서(일반 내국인과 동일)</p>
            <p><span class="highlight">미귀국인 경우:</span> 재외공관 공증(인감증명 대체, 등기예규 제1778호 제9조 제1항)</p>

            <h3>5-4. 인감증명</h3>
            <p><span class="highlight">귀국한 경우:</span> 국내에서 인감 신고 후 발급</p>
            <p><span class="highlight">미귀국인 경우:</span> 재외공관 공증으로 완전히 대체</p>

            <h3>5-5. 등록번호</h3>
            <p><span class="highlight">주민등록번호 보유:</span> 일반 내국인과 동일하게 주민등록번호 기재</p>
            <p><span class="highlight">주민등록번호 없음:</span> 재외국민등록번호 또는 등기소가 부여하는 번호</p>` },
      { heading: `6. 귀국 여부별 첨부서류 비교표`, content: `<table>
                <thead>
                    <tr>
                        <th>서류 항목</th>
                        <th>귀국한 경우<br>(입국 후 등기)</th>
                        <th>미귀국인 경우<br>(귀국 없이 등기)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>신분증명</strong></td>
                        <td>
                            여권 또는 외국인등록증(입국 확인)<br>
                            또는 운전면허증(주민등록 복원 시)
                        </td>
                        <td>
                            여권 사본(재외공관이 확인)<br>
                            + 재외국민등록부 사본
                        </td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>
                            • 주민등록 복원된 경우:<br>&nbsp;&nbsp;주민등록등본<br>
                            • 주민등록 미복원된 경우:<br>&nbsp;&nbsp;재외국민등록부 등본<br>&nbsp;&nbsp;+ 국내 거소확인 서류
                        </td>
                        <td>
                            재외국민등록부 등본<br>
                            또는<br>
                            재외공관 발급 거주확인서
                        </td>
                    </tr>
                    <tr>
                        <td><strong>위임장</strong></td>
                        <td>
                            인감 날인<br>
                            + 인감증명서
                        </td>
                        <td>
                            재외공관 공증<br>
                            (인감증명 대체)
                        </td>
                    </tr>
                    <tr>
                        <td><strong>인감증명</strong></td>
                        <td>
                            국내에서 인감 신고 후<br>
                            주민센터에서 발급
                        </td>
                        <td>
                            불필요<br>
                            (재외공관 공증이 대체)
                        </td>
                    </tr>
                    <tr>
                        <td><strong>등록번호</strong></td>
                        <td>
                            주민등록번호<br>
                            (말소 시 재외국민등록번호)
                        </td>
                        <td>
                            재외국민등록번호<br>
                            (없으면 등기소 부여)
                        </td>
                    </tr>
                    <tr>
                        <td><strong>매도인 서류</strong></td>
                        <td>
                            일반 내국인과 동일
                        </td>
                        <td>
                            매도인이 내국인이면<br>
                            일반 내국인과 동일
                        </td>
                    </tr>
                </tbody>
            </table>` },
      { heading: `7. 재외국민 등록번호 처리`, content: `<h3>7-1. 등록번호가 꼭 필요한 이유</h3>
            <p>등기부에는 반드시 등록번호(주민등록번호 또는 재외국민등록번호)를 기재해야 합니다. 이는 등기의 법적 효력과 나중의 취급에 직접 영향을 미칩니다.</p>

            <h3>7-2. 세 가지 경우</h3>
            <p><span class="highlight">경우 1: 주민등록번호 보유</span><br>
            귀국하여 주민등록등본을 발급받을 수 있다면 그 주민등록번호를 사용합니다(가장 단순한 경우).</p>

            <p><span class="highlight">경우 2: 재외국민등록번호 보유</span><br>
            해외에서 재외국민등록을 했다면 이미 재외국민등록번호를 갖고 있습니다. 이 번호를 등기부에 기재합니다.</p>

            <p><span class="highlight">경우 3: 등록번호 미보유</span><br>
            주민등록도, 재외국민등록도 하지 않은 상태라면 등기소에서 부여하는 임시 번호를 사용합니다(등기예규 제1778호 제11조).</p>

            <h3>7-3. 등기 이후 등록번호 정정</h3>
            <p>나중에 주민등록이나 재외국민등록을 새로 하게 되면, 번호정정등기를 신청하여 등기부의 등록번호를 수정할 수 있습니다.</p>` },
      { heading: `8. 주의사항`, content: `<div class="warning-box">
                <h4>반드시 확인하세요</h4>
                <ul>
                    <li><span class="highlight">미귀국인은 반드시 대리인 선임:</span> 직접 등기소에 가서 서명할 수 없으므로, 변호사·법무사 또는 신뢰할 수 있는 대리인을 반드시 선임해야 합니다.</li>
                    <li><span class="highlight">재외공관 공증은 정본 필요:</span> 재외공관에서 공증받은 위임장은 반드시 정본(original)이어야 합니다. 사본은 받아들이지 않을 수 있습니다.</li>
                    <li><span class="highlight">주민등록 말소 여부 확인:</span> 귀국했다면 주민등록이 복원되었는지 반드시 확인하세요. 말소 상태로 남아있으면 별도의 서류가 필요합니다.</li>
                    <li><span class="highlight">재외국민등록번호는 13자리:</span> 주민등록번호(주민번호 + 검증문자)와 형식이 다릅니다. 혼동하지 마세요.</li>
                    <li><span class="highlight">계약금 선금은 필수:</span> 재외국민이라 해서 계약금을 건너뛸 수 없습니다. 통상적인 부동산 거래 절차를 따릅니다.</li>
                    <li><span class="highlight">소유권이전등기는 본금 지급 후:</span> 등기소는 본금이 지급되었음을 확인한 후에만 등기를 접수합니다.</li>
                </ul>
            </div>

            <h3>귀국 예정자를 위한 팁</h3>
            <p>귀국 예정이라면 가능한 빨리 귀국하여 주민등록을 복원한 후 등기를 진행하는 것이 가장 단순합니다. 여권, 인감증명 등의 서류 준비가 훨씬 간편하기 때문입니다.</p>` },
      { heading: `9. 관련 판례·예규`, content: `<div class="precedent-box">
                <h4>주요 등기예규</h4>
                <ul>
                    <li><strong>등기예규 제1778호 제9조 제1항:</strong> "재외공관이 공증한 서류는 인감증명을 갈음한다." 미귀국인의 위임장을 공증으로 준비할 때의 근거</li>
                    <li><strong>등기예규 제1778호 제11조:</strong> "재외국민의 등록번호 기재 방식" — 주민등록번호 없을 때 등기소가 부여하는 번호</li>
                    <li><strong>등기선례 7-82:</strong> "재외국민의 부동산 취득에 관한 의견" — 외국인토지법 미적용 원칙</li>
                    <li><strong>등기선례 6-82:</strong> "재외국민 서류 준비에 관한 의견" — 여권 및 재외국민등록부 등본의 활용</li>
                </ul>
            </div>

            <div class="case-box">
                <h4>참고: 판례 경향</h4>
                <p>대법원은 일관되게 재외국민을 국적자로 보아 외국인토지법의 적용을 배제하고 있습니다. 다만 신분증명, 인감 등의 서류는 국내법의 원칙을 따르므로, 가능한 한 정식의 공증이나 영사 확인(apostille)을 받도록 유도하고 있습니다.</p>
            </div>` },
    ],
    laws: [
      { name: `주요 등기예규`, desc: `` },
      { name: `참고: 판례 경향`, desc: `대법원은 일관되게 재외국민을 국적자로 보아 외국인토지법의 적용을 배제하고 있습니다. 다만 신분증명, 인감 등의 서류는 국내법의 원칙을 따르므로, 가능한 한 정식의 공증이나 영사 확인(apostille)을 받도록 유도하고 있습니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-17',
    title: "재외국민 미귀국 처분 — 위임장 공증 완벽 가이드",
    meta: "",
    sections: [
      { heading: `개요: 재외국민 미귀국 처분의 핵심`, content: `<p>재외국민이 해외에서 계속 거주하면서 한국 부동산을 판매하려면, 다음과 같은 법적 요건을 충족해야 합니다.</p>

            <h3>왜 재외공관 공증이 필요한가?</h3>
            <p>한국 부동산 등기는 <strong>인감증명서</strong>를 중심으로 이루어집니다. 그런데 재외국민은 한국에 호적이 없거나 현재 거주하지 않아 국내에서 인감증명을 받을 수 없습니다. 이를 해결하기 위해 재외공관(한국 대사관·영사관)의 공증을 받으면 인감증명서를 대체할 수 있습니다.</p>

            <p><strong>법령 근거:</strong> 등기예규 제1778호 제9조 제1항</p>
            <blockquote style="margin: 1.5em 0; padding: 1em; border-left: 3px solid #c8a96e; background-color: #fdf9f3;">
                "재외국민이 한국 공관에서 인증을 받은 위임장을 제출하는 경우, 인감증명서를 첨부하지 않아도 된다."
            </blockquote>

            <h3>처분의 범위</h3>
            <p>위임장에 명시된 처분 사항은 다음을 포함할 수 있습니다:</p>
            <ul>
                <li>부동산 매도 (소유권이전등기)</li>
                <li>근저당권 설정 및 말소</li>
                <li>경매 낙찰로 인한 소유권이전</li>
                <li>상속 부동산 처분</li>
                <li>기타 처분 행위 일체 (위임장에 명시된 범위 내)</li>
            </ul>` },
      { heading: `처분 절차 흐름도 (단계별)`, content: `<div class="flowchart">
                <div class="flowchart-step">
                    <div class="step-number">1</div>
                    <h4>국내 대리인 선임</h4>
                    <p>신뢰할 수 있는 변호사, 법무사 또는 친인척을 국내 대리인으로 선임합니다. 대리인은 등기 신청 및 인수인계 업무를 담당합니다.</p>
                </div>

                <div class="flowchart-step">
                    <div class="step-number">2</div>
                    <h4>처분 위임장 작성</h4>
                    <p>다음 항목을 포함한 처분 위임장을 작성합니다: 재외국민의 인적사항, 부동산 표시(주소·지번·면적), 처분 내용(예: "서울시 강남구 ○○ 건물 매도 일체"), 대리인 인적사항.</p>
                </div>

                <div class="flowchart-step">
                    <div class="step-number">3</div>
                    <h4>재외공관 공증 신청</h4>
                    <p>체류 국가의 한국 대사관 또는 영사관에 문의하여 위임장 공증 신청 방법을 확인합니다. 국가별·공관별로 절차와 수수료가 다릅니다.</p>
                </div>

                <div class="flowchart-step">
                    <div class="step-number">4</div>
                    <h4>공증 수령 및 우편 송부</h4>
                    <p>재외공관으로부터 공증받은 위임장을 수령합니다. 원본을 국내 대리인에게 우편으로 송부하거나 전자문서로 전달합니다.</p>
                </div>

                <div class="flowchart-step">
                    <div class="step-number">5</div>
                    <h4>첨부서류 준비</h4>
                    <p>등기에 필요한 서류를 준비합니다: 공증받은 위임장, 여권 사본(공증용), 주소 증명서(재외국민등록부 등본 또는 거주확인서), 등기필증(등기권리증), 부동산 실사.</p>
                </div>

                <div class="flowchart-step">
                    <div class="step-number">6</div>
                    <h4>등기 신청</h4>
                    <p>국내 대리인이 관할 부동산등기소에 처분 등기를 신청합니다. 위임장의 공증일로부터 3개월 이내에 신청해야 합니다.</p>
                </div>

                <div class="flowchart-step">
                    <div class="step-number">7</div>
                    <h4>등기 완료</h4>
                    <p>등기가 완료되면 국내 대리인을 통해 완료 사실을 통보받고, 필요시 등기부등본 사본을 요청합니다.</p>
                </div>
            </div>` },
      { heading: `재외공관 공증 위임장 작성 방법`, content: `<h3>기본 원칙</h3>
            <p>재외공관 공증을 받을 위임장은 다음 요건을 충족해야 합니다:</p>
            <ul>
                <li><strong>별도 문서 공증 불가:</strong> 위임장 자체에 공증을 받아야 하며, 별도의 공증문서를 첨부받으면 안 됨 (등기예규 제1778호 제9조 제3항)</li>
                <li><strong>재외공관의 직접 인증:</strong> 대사관·영사관 직원이 직접 위임장 서면에 서명·날인하는 방식</li>
                <li><strong>한글 또는 영문:</strong> 한글이 기본이나, 공관 요청 시 영문도 가능</li>
                <li><strong>유효기간:</strong> 공증일로부터 3개월 유효</li>
            </ul>

            <h3>위임장에 기재해야 할 항목</h3>
            <table>
                <thead>
                    <tr>
                        <th>항목</th>
                        <th>기재 사항</th>
                        <th>예시</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>위임자</strong></td>
                        <td>성명, 생년월일, 국적, 현재 주소</td>
                        <td>홍길동, 1970년 1월 15일생, 대한민국 국적, 미국 뉴욕시 ○○거리 ○○호 거주</td>
                    </tr>
                    <tr>
                        <td><strong>부동산 표시</strong></td>
                        <td>소재지(도로명·지번), 지목, 면적, 건물명(해당 시)</td>
                        <td>서울시 강남구 ○○동 ○○-○○번지, 대지 300㎡, 문제 있을 시 한국 원본 등기부등본으로 정정</td>
                    </tr>
                    <tr>
                        <td><strong>처분 사항</strong></td>
                        <td>구체적 위임 내용 (매도, 근저당 설정 등)</td>
                        <td>상기 부동산의 매도 및 소유권이전등기 신청 일체</td>
                    </tr>
                    <tr>
                        <td><strong>수임인</strong></td>
                        <td>성명, 생년월일, 주소, 신분증 번호</td>
                        <td>김법무사, 1980년 5월 20일생, 서울시 강남구 ○○로 ○○빌딩, 주민등록번호 00000000-0000000</td>
                    </tr>
                    <tr>
                        <td><strong>위임 방식</strong></td>
                        <td>특정 위임 또는 일반 위임 명시</td>
                        <td>상기 부동산 매도에 관한 일체의 행위를 위임함</td>
                    </tr>
                    <tr>
                        <td><strong>작성일자</strong></td>
                        <td>위임장 작성 연월일</td>
                        <td>2026년 4월 7일</td>
                    </tr>
                </tbody>
            </table>

            <h3>작성 시 주의사항</h3>
            <ul>
                <li><strong>정확한 부동산 표시:</strong> 등기부등본상 표시와 정확히 일치해야 함. 불확실하면 한국 등기부등본을 먼저 확인</li>
                <li><strong>위임 범위 명확화:</strong> "매도 일체" 또는 "처분 일체"로 광범위하게 기재 가능</li>
                <li><strong>대리인 신원 확인:</strong> 대리인의 정확한 성명, 생년월일, 신분증 번호(또는 여권번호) 기재</li>
                <li><strong>여러 부동산:</strong> 동시에 여러 부동산을 처분하려면 각 부동산을 개별 기재하거나 "다음 기재 부동산 일체"로 표기 가능</li>
            </ul>

            <h3>재외공관별 공증 신청 방법</h3>
            <p>국가별·공관별로 절차가 상이하므로 다음 정보를 참고하세요:</p>
            <ul>
                <li><strong>미국:</strong> 대사관·총영사관 공증실에서 신청. 사전 예약 필요 (온라인 또는 전화)</li>
                <li><strong>일본:</strong> 대사관·총영사관 민원실에서 신청. 신청자 본인 방문 또는 대리인 신청 가능</li>
                <li><strong>캐나다:</strong> 각 도시 영사관별로 절차 상이. 사전 문의 필수</li>
                <li><strong>중국:</strong> 중국 내 공증사무소 이용 또는 한국 대사관·총영사관 공증</li>
                <li><strong>기타 국가:</strong> 해당 공관 홈페이지 또는 전화로 절차 확인 필요</li>
            </ul>

            <div class="warning-box">
                <h4>주의: 비용 및 기간</h4>
                <p>공증 수수료는 공관별로 상이하며, 발급 기간도 국가·공관에 따라 수일에서 수 주까지 걸릴 수 있습니다. 여름 휴가 시즌이나 공휴일을 고려하여 여유 있게 신청하세요.</p>
            </div>` },
      { heading: `재외공관 공증과 아포스티유: 어떻게 다른가`, content: `<p>재외국민이 미귀국 처분을 하려면 재외공관 공증과 아포스티유를 구분하는 것이 매우 중요합니다. 아포스티유를 받으면 한국 부동산 등기에 사용할 수 없습니다.</p>

            <table>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>재외공관 공증</th>
                        <th>아포스티유 (Apostille)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>발급처</strong></td>
                        <td>한국 대사관, 총영사관, 영사관</td>
                        <td>체류 국가의 정부기관 (외교부, 법무부 등)</td>
                    </tr>
                    <tr>
                        <td><strong>적용 대상</strong></td>
                        <td>한국 국적자 (재외국민)</td>
                        <td>외국인 또는 외국 공공문서</td>
                    </tr>
                    <tr>
                        <td><strong>용도</strong></td>
                        <td>한국 부동산 등기 (인감증명 대체)</td>
                        <td>외국 공문서의 효력 국제 인정 (Hague Convention 적용)</td>
                    </tr>
                    <tr>
                        <td><strong>발급 기간</strong></td>
                        <td>수일~수 주 (공관별 상이)</td>
                        <td>즉시~수일 (발급 기관별 상이)</td>
                    </tr>
                    <tr>
                        <td><strong>비용</strong></td>
                        <td>공관별로 상이 (보통 수만 원~십만 원)</td>
                        <td>국가별로 상이 (보통 $5~$30)</td>
                    </tr>
                    <tr>
                        <td><strong>효력 범위</strong></td>
                        <td>한국 부동산 등기 신청 시에만 유효</td>
                        <td>Hague Convention 가입국에서만 효력 인정</td>
                    </tr>
                </tbody>
            </table>

            <h3>실제 사례: 어떤 경우에 무엇을 받아야 하나?</h3>

            <div class="case-box">
                <h4>사례 1: 재외국민의 한국 부동산 처분</h4>
                <p><strong>상황:</strong> 대한민국 국적의 홍길동이 미국에 거주 중이며 서울의 주택을 판매하려고 함.</p>
                <p><strong>필요 공증:</strong> <strong>재외공관 공증</strong> (미국 내 한국 대사관·총영사관)</p>
                <p><strong>이유:</strong> 한국 부동산 등기는 한국 법에 따르므로, 한국 공관의 공증이 인감증명 대체 역할을 함.</p>
            </div>

            <div class="case-box">
                <h4>사례 2: 외국인이 미국 부동산을 판매하며 한국에 송금</h4>
                <p><strong>상황:</strong> 중국 국적 외국인이 미국 부동산을 판매하고 그 수익금을 한국 은행으로 송금하려고 함.</p>
                <p><strong>필요 공증:</strong> <strong>아포스티유</strong> (미국 정부 기관)</p>
                <p><strong>이유:</strong> 외국 공문서(미국 부동산 양도증명)의 국제적 효력 인정이 필요함.</p>
            </div>

            <div class="case-box">
                <h4>사례 3: 재외국민이 외국에서 한국 상속인을 위임</h4>
                <p><strong>상황:</strong> 재외국민이 외국의 은행에서 "상속인임을 증명"하는 서류를 발급받아 한국에 제출하려고 함.</p>
                <p><strong>필요 공증:</strong> <strong>아포스티유</strong> (외국 은행의 서류인 경우)</p>
                <p><strong>이유:</strong> 외국 기관의 서류이므로 아포스티유로 국제적 효력을 인정받아야 함.</p>
            </div>

            <div class="warning-box">
                <h4>주의: 혼동하면 등기 불가</h4>
                <p>아포스티유만 받고 재외공관 공증을 받지 않으면, 한국 부동산 등기소에서는 이를 인감증명 대체로 인정하지 않아 등기 신청이 반려될 수 있습니다.</p>
            </div>` },
      { heading: `첨부서류 상세 가이드`, content: `<p>부동산 처분 등기 신청 시 제출해야 할 서류는 재외국민이 귀국했는지 여부에 따라 크게 달라집니다.</p>

            <h3>첨부서류 비교표: 귀국한 경우 vs 미귀국인 경우</h3>

            <table>
                <thead>
                    <tr>
                        <th>서류 구분</th>
                        <th>귀국한 재외국민</th>
                        <th>미귀국 재외국민</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>처분 위임장</strong></td>
                        <td>인감 날인 + 인감증명서 (3개월 이내)</td>
                        <td>재외공관 공증 위임장 (3개월 이내)</td>
                    </tr>
                    <tr>
                        <td><strong>신분증명</strong></td>
                        <td>주민등록증 사본 또는 여권 사본</td>
                        <td>여권 사본 (재외공관 공증 시 사용한 것과 동일)</td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>주민등록등본 (3개월 이내)</td>
                        <td>재외국민등록부 등본 (외교부 발급) 또는 재외공관 거주확인서</td>
                    </tr>
                    <tr>
                        <td><strong>인감증명</strong></td>
                        <td>인감증명서 (3개월 이내)</td>
                        <td>재외공관 공증으로 갈음 (별도 인감증명 불필요)</td>
                    </tr>
                    <tr>
                        <td><strong>등기필증 (등기권리증)</strong></td>
                        <td>원본 필요 (부동산등기소에 제출)</td>
                        <td>원본 필요 (대리인이 보관하며 제출)</td>
                    </tr>
                    <tr>
                        <td><strong>매도인 신분증명</strong></td>
                        <td>주민등록증 또는 운전면허증</td>
                        <td>여권 또는 국외여행허가서</td>
                    </tr>
                    <tr>
                        <td><strong>부동산 실사</strong></td>
                        <td>필요 (대리인 또는 본인)</td>
                        <td>대리인이 수행</td>
                    </tr>
                </tbody>
            </table>

            <h3>각 서류별 상세 설명</h3>

            <h4>1. 공증받은 위임장</h4>
            <ul>
                <li><strong>원본:</strong> 재외공관으로부터 직접 받은 원본 (복사본 불가)</li>
                <li><strong>유효 기간:</strong> 공증일로부터 3개월 이내</li>
                <li><strong>내용 확인:</strong> 부동산 표시, 위임자 서명, 공관의 인감·서명 확인</li>
                <li><strong>우편 송부:</strong> 국제배송으로 분실 위험이 있으므로, 가능하면 팩스 또는 이메일로 사본을 먼저 전달받은 후 원본을 등기 신청 시에 제출</li>
            </ul>

            <h4>2. 여권 사본</h4>
            <ul>
                <li><strong>사본 범위:</strong> 여권 첫 페이지(신상정보) + 현재 유효한 비자 페이지 (해당 시)</li>
                <li><strong>인증:</strong> 재외공관 공증 시 사용한 여권과 동일해야 함</li>
                <li><strong>유효 기간:</strong> 유효 여권이어야 함 (만료된 여권 불가)</li>
            </ul>

            <h4>3. 재외국민등록부 등본 또는 거주확인서</h4>
            <ul>
                <li><strong>재외국민등록부 등본:</strong> 외교부 해외동포청에서 발급 (온라인 신청 가능, 우편 수령)</li>
                <li><strong>거주확인서:</strong> 재외공관(대사관·영사관)에서 발급 (신청자 현장 방문 또는 우편 신청)</li>
                <li><strong>발급 기간:</strong> 재외국민등록부 등본 수 주, 거주확인서 수일</li>
                <li><strong>선택:</strong> 둘 중 하나만 제출하면 됨 (둘 다 제출할 필요 없음)</li>
            </ul>

            <h4>4. 등기필증 (등기권리증)</h4>
            <ul>
                <li><strong>원본 필요:</strong> 복사본이나 전자등기부등본은 등기필증 대체 불가</li>
                <li><strong>보관:</strong> 미귀국인 경우, 국내 대리인에게 맡기는 것이 일반적</li>
                <li><strong>분실 시:</strong> 확인서면(등기소 요청) 또는 소유권확인 소송 필요</li>
            </ul>

            <h4>5. 부동산 실사</h4>
            <ul>
                <li><strong>목적:</strong> 현장에서 부동산이 위임장에 기재된 것과 일치하는지 확인</li>
                <li><strong>담당:</strong> 미귀국인 경우 국내 대리인이 수행</li>
                <li><strong>서류:</strong> 사진 첨부 또는 대리인의 확인 서면</li>
            </ul>

            <div class="warning-box">
                <h4>주의: 서류 원본 vs 사본</h4>
                <p>등기 신청 시 인장이 있는 공증 위임장은 반드시 <strong>원본</strong>을 제출해야 합니다. 여권 사본, 주소 증명 등은 사본이어도 되지만, 공증 위임장만은 원본이어야 합니다.</p>
            </div>` },
      { heading: `주의사항`, content: `<h3>공증 유효 기간 엄격하게 준수</h3>
            <p>재외공관 공증의 유효 기간은 공증일로부터 <strong>정확히 3개월</strong>입니다. 3개월을 초과하면 등기소에서 반려되므로, 공증 받은 직후 바로 등기 신청 절차를 시작해야 합니다.</p>

            <h3>위임장 표현의 명확성</h3>
            <p>위임장에 "판매", "처분", "매도" 등 다양한 표현이 쓸 수 있지만, 가장 일반적이고 안전한 표현은 <strong>"상기 부동산의 매도 및 관련된 일체의 행위를 위임함"</strong>입니다. 모호한 표현은 등기소에서 추가 확인을 요청할 수 있습니다.</p>

            <h3>부동산 표시 정확성</h3>
            <p>위임장에 기재된 부동산 표시(주소, 지번, 면적)는 등기부등본의 기재와 완벽하게 일치해야 합니다. 주소 표기가 다르거나 지번이 틀리면 등기 신청이 반려될 수 있습니다.</p>

            <h3>대리인의 선택과 신뢰성</h3>
            <p>미귀국인 경우 국내 대리인이 위임장을 가지고 있으므로, 대리인 선택이 매우 중요합니다. 신뢰할 수 있는 변호사나 법무사를 선임하는 것이 좋습니다.</p>

            <h3>아포스티유와의 혼동</h3>
            <p>재외국민의 부동산 처분은 재외공관 공증이 필수이며, 아포스티유로는 대체할 수 없습니다. 잘못된 서류를 받으면 등기 신청 자체가 불가능합니다.</p>

            <h3>우편 송부 시 분실 대비</h3>
            <p>공증받은 위임장을 국제배송으로 보낼 때는 분실에 대비하여:</p>
            <ul>
                <li>추적 가능한 배송 방식 이용 (DHL, FedEx 등)</li>
                <li>사본을 먼저 팩스 또는 이메일로 전달</li>
                <li>분실 시 재발급을 위해 공관에 재신청 방법 미리 확인</li>
            </ul>

            <h3>여권 갱신 시 주의</h3>
            <p>공증받은 위임장에 사용한 여권을 갱신했다면, 공증 당시의 여권 사본을 첨부해야 하며, 새로운 여권만으로는 부족합니다.</p>

            <h3>부동산 공시지가 또는 감정평가액 확인</h3>
            <p>매도인이 여러 명인 경우, 각자의 지분율을 명확히 기재해야 합니다. 또한 부동산의 현재 시세와 등기부상 공시지가를 비교하여 문제 없는지 확인하세요.</p>

            <h3>근저당권 정리</h3>
            <p>부동산에 근저당권이 설정되어 있다면, 처분(매도) 전에 근저당권을 말소해야 합니다. 매도금이 근저당 채무를 상환하기에 부족하면 등기 신청 자체가 거절될 수 있습니다.</p>
        </section>

        <!-- 섹션 9: 판례·예규 -->
        <section>
            <div class="precedent-box">
                <h3 style="margin-top: 0;">판례 및 예규</h3>

                <h4>1. 등기예규 제1778호 제9조 제1항</h4>
                <p><strong>내용:</strong> "재외국민이 한국 공관(대사관, 총영사관)에서 인증을 받은 위임장을 제출하는 경우, 인감증명서를 첨부하지 않아도 된다."</p>
                <p><strong>의미:</strong> 재외공관 공증이 인감증명의 역할을 완전히 대체함을 명시한 규정.</p>

                <h4>2. 등기예규 제1778호 제9조 제3항</h4>
                <p><strong>내용:</strong> "위임장에 대한 공증은 그 위임장 서면 자체에 대해 받아야 하며, 별도의 공증 문서를 첨부받으면 안 된다."</p>
                <p><strong>의미:</strong> 위임장 위에 직접 공관의 인감·서명이 있어야 하고, 별도의 공증증명서는 인정하지 않음.</p>

                <h4>3. 등기선례 제201012-2호</h4>
                <p><strong>주제:</strong> 재외공관 공증 위임장의 효력 및 유효 기간</p>
                <p><strong>주요 내용:</strong> 공증일로부터 3개월 유효, 등기 신청 시 원본 제출 필수</p>

                <h4>4. 대법원 판례</h4>
                <p><strong>관련 판례:</strong> 대법원 2013다29000, 2014다7890 등에서 재외국민의 부동산 거래 시 위임장 공증의 필수성을 확인하는 판례들이 축적되어 있습니다.</p>

                <h4>5. 외교부 해외동포청 지침</h4>
                <p><strong>내용:</strong> 재외국민등록부 등본 발급 및 거주확인서 발급 관련 행정 해석.</p>
            </div>
        </section>

        <!-- 섹션 10: 다음으로 확인할 내용 -->
        <section class="related-links">
            <h3>다음으로 확인할 내용</h3>
            <p>이 페이지를 읽은 후, 추가로 확인해야 할 관련 가이드들입니다:</p>
            <ul>
                <li><a href="외등_16_재외국민취득.html">외등_16_재외국민취득 — 재외국민의 한국 부동산 매수 등기 가이드</a></li>
                <li><a href="외등_07_외국인처분.html">외등_07_외국인처분 — 외국인 처분 위임장 가이드 (비교 참조용)</a></li>
                <li><a href="외등_25_아포스티유.html">외등_25_아포스티유 — 아포스티유 완벽 가이드</a></li>
                <li><a href="외등_23_변경경정.html">외등_23_변경경정 — 주민등록번호 불일치 시 변경·경정등기</a></li>
                <li><a href="외등_12_근저당말소.html">외등_12_근저당말소 — 처분 전 근저당권 말소 절차</a></li>
                <li><a href="외등_20_등기필증분실.html">외등_20_등기필증분실 — 등기필증 분실 시 확인서면 절차</a></li>
            </ul>
        </section>

        <!-- 섹션 11: 상담 CTA 및 면책 문구 -->
        <section class="cta-box">
            <h3>외국인·재외국민 등기 전문가와 상담하세요</h3>
            <p>이 내용이 해당되시나요?</p>
            <p><strong>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 크게 달라집니다.</strong> 개인의 구체적인 상황에 맞춘 법률 조언이 필요하다면, 전문 법무사와의 상담을 통해 정확한 절차를 확인하세요.</p>
            <p>첫 상담은 무료입니다.</p>
            <button class="cta-button">지금 문의하기</button>
        </section>

        <!-- 면책 문구 -->
        <div class="disclaimer">
            <p><strong>면책 문구</strong></p>
            <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 조언이 아닙니다. 이 페이지의 내용은 2025년 현행 법령 기준으로 작성되었습니다. 법령 변경, 판례 변동, 행정 해석 변경에 따라 내용이 달라질 수 있으므로, 구체적인 상담을 위해서는 전문가(변호사, 법무사)와 직접 문의하시기 바랍니다. 본 정보 이용으로 인한 손실이나 피해에 대해 당사는 책임을 지지 않습니다.</p>
        </div>
    </div>
</body>
</html>` },
    ],
    laws: [
    ],
    forms: [],
  },
  {
    id: 'fi-18',
    title: "재외국민 단독 상속",
    meta: "입국 여부에 따른 상속등기 신청 방법",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<p>다음의 상황 중 해당되는 항목이 있다면 이 페이지를 꼭 읽어보세요.</p>
            <div class="checklist">
                <div class="checklist-item">
                    <input type="checkbox" id="check1">
                    <label for="check1">한국 국적자인데 해외에서 거주 중이고, 한국에 부동산이 있는 경우</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check2">
                    <label for="check2">재외국민으로 등록되어 있고, 한국에 있는 피상속인이 사망한 경우</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check3">
                    <label for="check3">피상속인의 유일한 상속인이며, 입국 여부를 고민하고 있는 경우</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check4">
                    <label for="check4">재외국민등록부 등본으로 상속등기를 신청하려고 하는 경우</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check5">
                    <label for="check5">해외에서 위임장 공증을 받아 대리인을 통해 상속등기를 신청하려고 하는 경우</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check6">
                    <label for="check6">취득세 신고 기한과 상속등기 절차를 함께 정리하고 싶은 경우</label>
                </div>
            </div>
        </section>

        <!-- 섹션 2: 핵심 요약 -->
        <section>
            <div class="summary-box">
                <h3>재외국민 단독 상속이란</h3>
                <p>재외국민 단독 상속은 <span class="emphasis">재외국민이 유일한 상속인인 경우</span>를 말합니다. 이는 형제자매, 자녀 등 다른 상속인이 없는 상황입니다.</p>
                <h3 style="margin-top: 20px;">핵심 포인트</h3>
                <ul>
                    <li><span class="emphasis">상속등기 절차는 내국인과 동일</span>하지만, 첨부서류가 달라집니다.</li>
                    <li><span class="emphasis">입국 여부에 따라</span> 준비해야 할 서류가 완전히 달라집니다.</li>
                    <li><span class="emphasis">재외공관 공증</span>이 필요할 수 있습니다.</li>
                    <li><span class="icon">⚡</span> <span class="emphasis">피상속인 사망 후 6개월 이내</span> 취득세 신고가 필수입니다.</li>
                    <li>재외국민등록번호가 없다면 <span class="emphasis">부동산등기용등록번호를 먼저 부여받아야</span> 합니다.</li>
                </ul>
            </div>` },
      { heading: `재외국민 단독 상속의 법적 지위`, content: `<h3>재외국민의 정의</h3>
            <p>재외국민은 <span class="emphasis">대한민국 국적을 가진 사람</span>입니다. 따라서 외국인이 아니며, <span class="emphasis">상속에 관한 한국 민법이 그대로 적용</span>됩니다.</p>

            <h3>왜 재외국민 상속이 특수한가</h3>
            <p>재외국민은 한국 국적자이므로 상속권은 동일합니다. 그러나 한국에 주소가 없거나 주민등록이 말소되었을 가능성이 높기 때문에, <span class="emphasis">주소 증명과 신원 확인 방법이 다릅니다.</span></p>

            <div class="info-box">
                <h3>알아두기: 외국인·재외국민·외국국적동포의 차이</h3>
                <table>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>국적</th>
                            <th>상속법 적용</th>
                            <th>주소 증명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="emphasis">재외국민</span></td>
                            <td>한국 국적</td>
                            <td>한국 민법 전면 적용</td>
                            <td>재외국민등록부 등본 등</td>
                        </tr>
                        <tr>
                            <td><span class="emphasis">외국인</span></td>
                            <td>외국 국적</td>
                            <td>국제사법 준거 (경우에 따라 원국 법)</td>
                            <td>여권, 외국인등록증 등</td>
                        </tr>
                        <tr>
                            <td><span class="emphasis">외국국적동포</span></td>
                            <td>외국 국적 (취득 또는 유지)</td>
                            <td>국제사법 준거</td>
                            <td>여권, 거주국 증명서 등</td>
                        </tr>
                    </tbody>
                </table>
            </div>` },
      { heading: `상속등기 절차 흐름 (입국 여부별)`, content: `<h3>입국한 재외국민</h3>
            <div class="flow-diagram">
                <div class="flow-step">
                    <div class="flow-step-number">1</div>
                    <div>주민등록 복원 (선택) 또는 현주소 확인</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">2</div>
                    <div>인감 신고 및 인감증명서 발급</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">3</div>
                    <div>상속관계증명서류 수집 (기본증명서, 가족관계증명서, 제적등본)</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">4</div>
                    <div>상속등기 신청 (등기소)</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">5</div>
                    <div>취득세 신고 (지방세청) — 6개월 내</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">6</div>
                    <div>등기 완료</div>
                </div>
            </div>

            <h3>미귀국 재외국민</h3>
            <div class="flow-diagram">
                <div class="flow-step">
                    <div class="flow-step-number">1</div>
                    <div>재외공관에서 위임장 공증 (법무사 방문 불가)</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">2</div>
                    <div>상속관계증명서류 수집 및 해외 공증/아포스티유</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">3</div>
                    <div>주소증명 (재외국민등록부 등본 또는 거주증명)</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">4</div>
                    <div>한국 법무사 대리인이 상속등기 신청</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">5</div>
                    <div>취득세 신고 (지방세청) — 6개월 내</div>
                </div>
                <div class="flow-step">
                    <div class="flow-step-number">6</div>
                    <div>등기 완료</div>
                </div>
            </div>

            <p style="margin-top: 20px; font-size: 14px; color: #6b7280;"><span class="icon">⏱</span>소요 기간: 입국한 경우 2~3주, 미귀국인 경우 3~4주 (서류 수집 기간 제외)</p>` },
      { heading: `귀국한 재외국민의 절차`, content: `<p>한국에 입국하여 거주하고 있거나 재입국한 재외국민의 경우입니다.</p>

            <h3>Step 1: 주민등록 상태 확인</h3>
            <div class="step-box">
                <div class="step-title">주민등록이 복원된 경우</div>
                <p><span class="emphasis">일반 내국인 상속등기와 동일한 절차</span>를 따릅니다. 주민등록번호와 주민등록등본(초본)으로 신청하면 됩니다.</p>
            </div>

            <div class="step-box">
                <div class="step-title">주민등록이 말소된 상태에서 귀국한 경우</div>
                <p>다음 중 하나를 선택할 수 있습니다:</p>
                <ul class="procedure-list">
                    <li><span class="emphasis">주민등록 재등록</span>: 주민센터에서 새로 신고하여 새로운 주민등록번호 발급</li>
                    <li><span class="emphasis">재외국민등록번호 사용</span>: 부동산등기용등록번호 신청 후 사용</li>
                    <li><span class="emphasis">말소된 주민등록번호 사용</span>: 이전 주민등록번호가 있었다면 그 번호로 신청 (재외국민등록부 등본으로 동일인 증명)</li>
                </ul>
            </div>

            <h3>Step 2: 인감 신고 및 인감증명서 발급</h3>
            <p>귀국한 후 다음을 수행해야 합니다:</p>
            <ul class="procedure-list">
                <li>주민센터에서 <span class="emphasis">인감 신고</span> (도장 등록)</li>
                <li>인감이 나온 후 <span class="emphasis">인감증명서 발급</span> (시청 또는 구청)</li>
                <li>최근 3개월 이내 발급한 인감증명서만 유효</li>
            </ul>

            <div class="warning-box">
                <h3>주의: 인감증명서 대체 방법</h3>
                <p>인감증명서가 없으면 <span class="emphasis">본인서명사실확인서</span>로 대체할 수 있습니다. 이 경우 공증사무소에서 발급받으면 되므로, 인감 신고 전에 신청 가능합니다.</p>
            </div>

            <h3>Step 3: 상속관계 증명 서류 수집</h3>
            <p>다음 서류를 발급받아야 합니다:</p>
            <ul class="procedure-list">
                <li><span class="emphasis">피상속인</span>: 기본증명서 (사망 기재), 가족관계증명서 (상세), 제적등본</li>
                <li><span class="emphasis">상속인 (재외국민)</span>: 기본증명서 (상세), 가족관계증명서 (상세)</li>
                <li><span class="emphasis">주소증명</span>: 주민등록등본(초본) 또는 재외국민등록부 등본</li>
            </ul>

            <h3>Step 4: 부동산등기 신청</h3>
            <p>다음 중 하나의 방법을 선택합니다:</p>
            <ul class="procedure-list">
                <li><span class="emphasis">인터넷 신청</span>: 인터넷등기소(www.ros.go.kr)에서 공인인증서 또는 전자서명으로 신청</li>
                <li><span class="emphasis">방문 신청</span>: 해당 등기소를 직접 방문하여 신청서 제출</li>
                <li><span class="emphasis">법무사 대리 신청</span>: 법무사가 대리인으로 신청</li>
            </ul>

            <h3>Step 5: 취득세 신고</h3>
            <div class="warning-box">
                <h3 style="margin-top: 0;">⚡ 기간 제한: 6개월 이내 신고 필수</h3>
                <p><span class="emphasis">피상속인 사망 후 6개월 이내</span>에 취득세를 지방세청에 신고해야 합니다. 이를 초과하면 과태료가 부과됩니다.</p>
                <p><span class="emphasis">신고 방법</span>: 지방세 인터넷 납부시스템(주민세청 웹사이트) 또는 관할 구청 세무과에서 신고</p>
            </div>` },
      { heading: `미귀국 재외국민의 절차`, content: `<p>해외에 거주 중이며 귀국하지 않은 재외국민의 경우입니다. <span class="emphasis">대리인을 통한 신청이 필수</span>입니다.</p>

            <h3>Step 1: 재외공관에서 위임장 공증</h3>
            <p>한국에서 상속등기를 진행할 대리인(주로 법무사)을 선임하고, <span class="emphasis">재외공관(대사관 또는 영사관)에서 위임장을 공증</span>받아야 합니다.</p>

            <div class="info-box">
                <h3>위임장 공증 기준</h3>
                <p><span class="emphasis">법령 근거</span>: 등기예규 제1778호 제9조 제1항</p>
                <ul class="procedure-list">
                    <li>위임장에는 <span class="emphasis">본인의 인감 또는 서명</span>이 있어야 합니다.</li>
                    <li>체류국의 공증인으로부터 공증을 받거나 아포스티유를 받아야 합니다.</li>
                    <li>재외공관 공증이 없으면 <span class="emphasis">한국 국내 공증으로는 인정되지 않습니다.</span></li>
                    <li>귀국 후에 인감증명서로 대체할 수 있습니다.</li>
                </ul>
            </div>

            <h3>Step 2: 상속관계 증명 서류 수집</h3>
            <p>미귀국 상태에서 다음 서류를 수집해야 합니다:</p>
            <ul class="procedure-list">
                <li><span class="emphasis">한국에서 발급받을 서류</span>: 피상속인의 기본증명서, 가족관계증명서, 제적등본 (한국 가족관계등록시스템 온라인 신청 또는 법무사 대리 신청)</li>
                <li><span class="emphasis">해외에서 직접 발급받을 서류</span>: 필요하면 아포스티유 협약국의 서류는 아포스티유 부착</li>
            </ul>

            <h3>Step 3: 상속재산 동의서 공증</h3>
            <p>미귀국 상태에서 상속등기를 진행하려면, <span class="emphasis">상속재산에 대한 동의서를 재외공관에서 공증</span>받아야 할 수 있습니다.</p>
            <ul class="procedure-list">
                <li>이 서류는 <span class="emphasis">본인이 상속등기에 동의한다</span>는 것을 입증합니다.</li>
                <li>법무사가 안내해주는 양식을 사용하여 공증을 받습니다.</li>
            </ul>

            <h3>Step 4: 주소증명 서류</h3>
            <p>미귀국 재외국민의 주소를 증명하려면 다음 중 하나를 제출해야 합니다:</p>
            <ul class="procedure-list">
                <li><span class="emphasis">재외국민등록부 등본</span>: 재외동포청 또는 재외공관에 신청</li>
                <li><span class="emphasis">재외국민 거주사실증명</span>: 재외공관 발급</li>
                <li><span class="emphasis">체류국 관공서 발급 주소증명</span>: 예) 일본의 주민표, 스페인의 주민등록증명서</li>
                <li><span class="emphasis">재외공관 공증 거주증명서</span>: 위 서류를 발급받을 수 없는 경우, 체류국 공증인 공증 필요</li>
            </ul>

            <h3>Step 5: 부동산등기용등록번호 신청 (필요 시)</h3>
            <p><span class="emphasis">주민등록번호가 말소되었으며 재발급받지 않은 경우</span>, 부동산등기용등록번호를 먼저 신청해야 합니다.</p>
            <ul class="procedure-list">
                <li>신청 기관: 서울중앙지방법원 등기국</li>
                <li>필요 서류: 재외국민등록부 등본, 기본증명서</li>
                <li>이는 <span class="emphasis">대리인(법무사)이 대신 신청</span>할 수 있습니다.</li>
            </ul>

            <h3>Step 6: 법무사 대리신청</h3>
            <p>위 모든 서류를 수집한 후, <span class="emphasis">한국의 법무사가 대리인으로 상속등기를 신청</span>합니다.</p>
            <ul class="procedure-list">
                <li>신청 방법: 인터넷 신청 또는 직접 방문</li>
                <li>필수 첨부 서류: 공증 위임장, 상속관계증명서류, 주소증명서, 인감증명서(또는 공증)</li>
            </ul>

            <h3>Step 7: 취득세 신고</h3>
            <div class="warning-box">
                <h3 style="margin-top: 0;">⚡ 기간 제한: 6개월 이내 신고 필수</h3>
                <p>미귀국인 경우에도 <span class="emphasis">피상속인 사망 후 6개월 이내</span> 취득세 신고가 필수입니다.</p>
                <p><span class="emphasis">신고 방법</span>: 법무사가 대리하거나, 직접 한국 지방세청에 신고 가능</p>
            </div>` },
      { heading: `첨부서류 상세 안내`, content: `<h3>입국한 재외국민</h3>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>발급기관</th>
                        <th>주의사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="emphasis">기본증명서 (피상속인)</span></td>
                        <td>대법원 가족관계등록시스템</td>
                        <td>사망 기록이 포함되어야 함 / 발행일 3개월 이내 / 인감증명서 미필요</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">가족관계증명서 (상세)</span></td>
                        <td>대법원 가족관계등록시스템</td>
                        <td>피상속인과 상속인 모두 필요 / 상세본 필수</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">제적등본</span></td>
                        <td>아래 구청 또는 온라인 신청</td>
                        <td>피상속인만 필요 / 필요시 전적전 제적등본도 첨부</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">주민등록등(초)본</span></td>
                        <td>주민센터</td>
                        <td>귀국 후 재등록한 경우만 필요</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">재외국민등록부 등본</span></td>
                        <td>재외동포청 또는 재외공관</td>
                        <td>주민등록이 말소된 경우 필요 / 발행일 3개월 이내</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">인감증명서</span></td>
                        <td>구청 또는 시청</td>
                        <td>발행일 3개월 이내 / 본인서명사실확인서로 대체 가능</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">토지/건물대장등본</span></td>
                        <td>등기소</td>
                        <td>부동산별 1통씩</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">부동산등기용등록번호증명서</span></td>
                        <td>등기소</td>
                        <td>주민등록번호가 없거나 말소된 경우만 필요</td>
                    </tr>
                </tbody>
            </table>

            <h3 style="margin-top: 40px;">미귀국 재외국민</h3>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>발급처 / 방법</th>
                        <th>주의사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="emphasis">기본증명서 (피상속인)</span></td>
                        <td>한국 대법원 가족관계등록시스템 (온라인 신청 또는 법무사 대리)</td>
                        <td>사망 기록 포함 / 발행일 3개월 이내</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">가족관계증명서 (상세)</span></td>
                        <td>한국 대법원 가족관계등록시스템</td>
                        <td>피상속인, 상속인 모두 필요 / 상세본 필수</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">제적등본</span></td>
                        <td>한국 구청 (온라인 신청 또는 법무사 대리)</td>
                        <td>피상속인만 필요</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">위임장</span></td>
                        <td>재외공관 공증 또는 체류국 공증인 공증</td>
                        <td>법무사 양식 사용 / 본인 서명 필수 / <span class="emphasis">아포스티유 협약국이면 아포스티유 부착 필수</span></td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">인감증명서 또는 공증서</span></td>
                        <td>재외공관 공증</td>
                        <td>위임장을 공증받으면 인감증명서 대체 가능</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">재외국민등록부 등본</span></td>
                        <td>재외동포청 또는 재외공관</td>
                        <td>주소증명으로 사용 / 발행일 3개월 이내</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">재외국민 거주사실증명</span></td>
                        <td>재외공관</td>
                        <td>등록부 등본을 발급받을 수 없는 경우 대체</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">체류국 주소증명서</span></td>
                        <td>체류국 관공서 (예: 일본 주민표)</td>
                        <td>체류국의 공증인 공증 또는 아포스티유 필요</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">부동산등기용등록번호증명서</span></td>
                        <td>서울중앙지방법원 등기국 (법무사 대리 신청)</td>
                        <td>주민등록번호가 없는 경우 필수 / 먼저 신청해야 함</td>
                    </tr>
                    <tr>
                        <td><span class="emphasis">상속재산 동의서</span></td>
                        <td>재외공관 공증</td>
                        <td>필요시에만 첨부 / 법무사 안내</td>
                    </tr>
                </tbody>
            </table>

            <div class="warning-box">
                <h3>아포스티유 협약국 확인 필수</h3>
                <p><span class="emphasis">아포스티유(Apostille)</span>는 헤이그 협약 가입국이 발급한 문서에 필요합니다. 체류국이 아포스티유 협약에 가입했는지 확인하고, 가입했다면 재외공관 공증 대신 아포스티유를 받아야 합니다.</p>
                <p><span class="emphasis">확인 방법</span>: 해당국 법원 또는 관공서에 문의 / 한국 대사관 또는 총영사관에 문의</p>
            </div>` },
      { heading: `주의사항 및 주요 포인트`, content: `<h3>주민등록이 말소된 재외국민의 주소 불명</h3>
            <div class="warning-box">
                <p>재외국민등록부 등본을 발급받을 수 없거나 재외공관에서 주소증명을 할 수 없다면, <span class="emphasis">말소된 주민등록표 등본상의 최후 주소</span>로 상속등기를 신청할 수 있습니다. 이때 다음 서류를 첨부해야 합니다:</p>
                <ul class="procedure-list">
                    <li>말소된 주민등록표 등본</li>
                    <li>현 주소를 알 수 없다는 소명자료 (예: 재외동포청의 공문, 재외공관의 협력 불가 공문)</li>
                </ul>
                <p><span class="emphasis">법령 근거</span>: 등기선례 7-74 (2003. 3. 3. 부등 3402-129 질의회답)</p>
            </div>

            <h3>부동산등기용등록번호 필수 신청</h3>
            <div class="warning-box">
                <p>다음 경우에는 반드시 부동산등기용등록번호를 먼저 신청해야 합니다:</p>
                <ul class="procedure-list">
                    <li>주민등록번호가 없는 재외국민</li>
                    <li>주민등록이 말소되었으며 재등록하지 않은 경우</li>
                </ul>
                <p><span class="emphasis">신청 기관</span>: 서울중앙지방법원 등기국 / <span class="emphasis">소요 기간</span>: 3~5일</p>
            </div>

            <h3>취득세 신고 기한 절대 놓치지 말 것</h3>
            <div class="warning-box" style="border-left-color: #c05000; background-color: #fff3e8;">
                <h3 style="color: #c05000; margin-top: 0;">⚡ 6개월 기한 준수 필수</h3>
                <p>상속등기와 취득세 신고는 <span class="emphasis">별개</span>입니다. 등기가 완료되었다고 해서 취득세를 신고하지 않으면 안 됩니다.</p>
                <ul class="procedure-list">
                    <li><span class="emphasis">신고 기한</span>: 피상속인 사망 후 6개월 이내</li>
                    <li><span class="emphasis">초과 시 과태료</span>: 취득세의 10% 이상 가산세</li>
                    <li><span class="emphasis">신고처</span>: 부동산 소재지 관할 구청 세무과 또는 지방세청 인터넷 신청</li>
                </ul>
            </div>

            <h3>공증 위임장의 유효성</h3>
            <div class="info-box">
                <p>미귀국 상태에서 위임장을 공증받을 때 주의할 점:</p>
                <ul class="procedure-list">
                    <li><span class="emphasis">재외공관 공증이 원칙</span>: 한국 내 공증으로는 인정 불가</li>
                    <li><span class="emphasis">아포스티유 협약국인 경우</span>: 재외공관 공증 또는 체류국 공증인 공증 + 아포스티유</li>
                    <li><span class="emphasis">유효 기간</span>: 일반적으로 발행일 3개월 이내 유효</li>
                    <li><span class="emphasis">귀국 후 인감증명서로 대체 가능</span>: 법무사와 상담</li>
                </ul>
            </div>

            <h3>공동상속인이 있는 경우</h3>
            <p>본 페이지는 <span class="emphasis">재외국민이 유일한 상속인</span>인 경우입니다. 공동상속인이 있다면:</p>
            <ul class="procedure-list">
                <li>다른 상속인의 협력이 필요할 수 있습니다.</li>
                <li>협의분할 또는 법정상속분 각자 신청 등을 검토해야 합니다.</li>
                <li><span class="emphasis">법무사 상담이 필수</span>입니다.</li>
            </ul>` },
      { heading: `관련 판례 및 예규`, content: `<div class="info-box">
                <h3>등기예규 제1778호 (재외국민 부동산등기)</h3>
                <ul class="procedure-list">
                    <li><span class="emphasis">제9조</span>: 재외공관 공증 요건 (위임장, 위임권 포기 등)</li>
                    <li><span class="emphasis">제10조</span>: 재외국민 주소증명 방법 (재외국민등록부 등본, 주민등록표 등본, 체류국 발급 서류, 공증 거주증명)</li>
                    <li><span class="emphasis">제11조</span>: 재외국민 부동산등기용등록번호 부여 절차</li>
                </ul>
            </div>

            <div class="info-box">
                <h3>등기선례 7-74 (현주소 불명 처리)</h3>
                <p>"공동상속인 중 일부인 재외국민의 현 주소를 알 수 없을 때는 말소된 주민등록표등본상 최후 주소로 상속등기를 신청할 수 있다."</p>
                <p><span class="emphasis">원문</span>: 2003. 3. 3. 부등 3402-129 질의회답</p>
            </div>

            <div class="info-box">
                <h3>등기선례 제201012-2호 (아포스티유 대체 공증)</h3>
                <p>체류국 관공서 발급 주소증명서에 원본 동일성 공증을 받은 경우, 재외공관 공증과 동일하게 인정될 수 있습니다.</p>
                <p><span class="emphasis">원문</span>: 2010. 12. 6. 부동산등기과-2304 질의회답</p>
            </div>

            <div class="info-box">
                <h3>부동산등기법 제49조 (등록번호 부여 절차)</h3>
                <p>주민등록번호가 없는 재외국민의 경우, 서울중앙지방법원 등기국의 등기관이 부동산등기용등록번호를 부여합니다.</p>
            </div>` },
      { heading: `자주 묻는 질문`, content: `<div class="faq-item">
                <div class="faq-q">귀국했는데 주민등록이 말소되어 있으면 어떻게 하나요?</div>
                <div class="faq-a">
                    <p>주민센터에서 주민등록 재등록을 신청할 수 있습니다. 그러나 상속등기는 말소된 주민등록번호 또는 새로운 부동산등기용등록번호로도 신청 가능하므로, 반드시 재등록할 필요는 없습니다. 상황에 따라 법무사와 상담하여 결정하면 됩니다.</p>
                </div>
                <div class="faq-disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
            </div>

            <div class="faq-item">
                <div class="faq-q">해외에 있으면서 한국의 대리인 없이 혼자 상속등기를 신청할 수 있나요?</div>
                <div class="faq-a">
                    <p>불가능합니다. 미귀국 재외국민은 반드시 한국의 대리인(주로 법무사)을 선임하고, 재외공관에서 위임장을 공증받아야 합니다. 위임장이 없으면 등기소에서 신청을 받지 않습니다.</p>
                </div>
                <div class="faq-disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
            </div>

            <div class="faq-item">
                <div class="faq-q">주민등록번호가 없는데도 상속등기를 신청할 수 있나요?</div>
                <div class="faq-a">
                    <p>직접 신청은 불가능합니다. 먼저 서울중앙지방법원 등기국에 부동산등기용등록번호를 신청하여 발급받은 후, 그 번호로 상속등기를 신청해야 합니다. 이 과정은 법무사가 대리할 수 있으므로, 법무사와 상담하시기 바랍니다.</p>
                </div>
                <div class="faq-disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
            </div>

            <div class="faq-item">
                <div class="faq-q"><span class="icon">⚡</span> 상속등기와 취득세 신고는 같이 해야 하나요?</div>
                <div class="faq-a">
                    <p>아닙니다. 상속등기와 취득세 신고는 별개의 절차입니다. 그러나 취득세 신고는 반드시 <span class="emphasis">피상속인 사망 후 6개월 이내</span>에 해야 하며, 초과하면 과태료가 부과됩니다. 상속등기가 완료되면 즉시 취득세 신고를 진행하는 것이 좋습니다.</p>
                </div>
                <div class="faq-disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
            </div>

            <div class="faq-item">
                <div class="faq-q">재외공관에서 위임장 공증을 못 받았어요. 다른 방법이 있나요?</div>
                <div class="faq-a">
                    <p>체류국이 아포스티유(Apostille) 협약에 가입했다면, 체류국의 공증인으로부터 공증을 받고 아포스티유를 부착하면 됩니다. 협약국이 아닌 경우 반드시 재외공관 공증이 필요합니다. 귀국 후라면 인감증명서로 대체할 수 있습니다.</p>
                </div>
                <div class="faq-disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
            </div>

            <div class="faq-item">
                <div class="faq-q">재외국민등록부 등본을 발급받을 수 없으면 어떻게 하나요?</div>
                <div class="faq-a">
                    <p>다음 순서로 대체 방법을 시도하시기 바랍니다: 1) 재외국민 거주사실증명 신청, 2) 체류국 관공서 발급 주소증명서(예: 주민표), 3) 체류국 공증인이 공증한 거주증명서. 모두 불가능한 경우 법무사와 상담하여 말소된 주민등록표 등본으로 신청하는 방법도 있습니다.</p>
                </div>
                <div class="faq-disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
            </div>

            <div class="faq-item">
                <div class="faq-q">상속등기 신청 후 등기가 완료되는 데 얼마나 걸리나요?</div>
                <div class="faq-a">
                    <p>일반적으로 2~3주 정도 소요됩니다. 다만, 서류가 미비하여 보정명령을 받으면 그 기간이 연장됩니다. 보정 기한(통상 2주)을 초과하면 신청이 반려될 수 있으므로, 첫 신청부터 완벽하게 준비하는 것이 중요합니다.</p>
                </div>
                <div class="faq-disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
            </div>` },
    ],
    laws: [
      { name: `등기예규 제1778호 (재외국민 부동산등기)`, desc: `` },
      { name: `등기선례 7-74 (현주소 불명 처리)`, desc: `"공동상속인 중 일부인 재외국민의 현 주소를 알 수 없을 때는 말소된 주민등록표등본상 최후 주소로 상속등기를 신청할 수 있다."` },
      { name: `등기선례 제201012-2호 (아포스티유 대체 공증)`, desc: `체류국 관공서 발급 주소증명서에 원본 동일성 공증을 받은 경우, 재외공관 공증과 동일하게 인정될 수 있습니다.` },
      { name: `부동산등기법 제49조 (등록번호 부여 절차)`, desc: `주민등록번호가 없는 재외국민의 경우, 서울중앙지방법원 등기국의 등기관이 부동산등기용등록번호를 부여합니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-19',
    title: "공동상속인 중 재외국민이 있을 때법정상속 등기",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
                <h3>이런 분께 필요합니다</h3>
                <ul>
                    <li>상속인 중에 재외국민(해외 거주 한국국적자)이 있는 경우</li>
                    <li>여러 명의 상속인이 한국 부동산을 공동으로 상속받으려고 할 때</li>
                    <li>재외국민 상속인이 귀국했는지 아직 해외에 머물고 있는지에 따라 준비 서류가 다른지 알고 싶을 때</li>
                    <li>공동상속 등기를 신청할 때 누가 신청서에 서명해야 하는지 확인하고 싶을 때</li>
                    <li>재외국민의 인감증명서 문제와 재외공관 공증에 대해 알고 싶을 때</li>
                    <li>다른 상속인이 협력을 거부할 때 혼자서 공동상속 등기를 신청할 수 있는지 확인하고 싶을 때</li>
                </ul>
            </div>` },
      { heading: `공동상속의 기본 원칙`, content: `<h3>공동상속이란</h3>
            <p>상속인이 2명 이상인 경우, 피상속인의 재산을 법정상속분에 따라 지분으로 나누어 공유하는 것입니다. 한국 상속법은 다음과 같은 원칙을 따릅니다.</p>

            <h3>법정상속분</h3>
            <p>민법 제1000조 및 제1009조에 따라 배우자와 자녀, 부모, 형제자매 간의 상속순위와 상속분이 정해집니다. 예를 들어:</p>
            <ul>
                <li>배우자 + 자녀 1명: 배우자 1/2, 자녀 1/2</li>
                <li>배우자 + 자녀 2명: 배우자 1/3, 자녀 각 1/3</li>
                <li>자녀 2명 (배우자 없음): 각 1/2</li>
            </ul>

            <h3>상속인 신청 원칙</h3>
            <p>부동산등기법 제77조 제1항에 따르면:</p>
            <ul>
                <li><strong>공동 신청</strong>: 상속인 전원이 함께 신청</li>
                <li><strong>단독 신청</strong>: 상속인 중 1인이 자신의 법정상속분만 신청 가능 (다른 상속인의 협조 불필요)</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ 중요:</strong> 공동상속 등기는 보존행위입니다. 따라서 상속인 중 1인이 다른 상속인의 협조 없이 법정상속분에 대해 단독으로 신청할 수 있습니다. 이는 해당 상속인의 권리를 보호하는 차원에서 인정됩니다.
            </div>

            <h3>재외국민이 포함된 공동상속의 특수성</h3>
            <p>재외국민 상속인이 포함되면 다음의 추가 요소를 고려해야 합니다:</p>
            <ul>
                <li><strong>법적 지위</strong>: 재외국민은 한국 국적을 유지하면서 외국에 거주하는 사람입니다.</li>
                <li><strong>상속 적용법</strong>: 국제사법 제49조에 따라 상속은 피상속인의 국적지법에 따릅니다. 피상속인이 한국 국적이었으면 한국 민법이 적용됩니다.</li>
                <li><strong>입국 여부</strong>: 재외국민이 귀국했는지 여부에 따라 준비 서류가 달라집니다.</li>
                <li><strong>인감증명</strong>: 귀국하지 않은 재외국민은 한국에서 인감증명서를 받을 수 없으므로 재외공관 공증으로 대체합니다.</li>
            </ul>` },
      { heading: `공동상속 법정상속 등기 절차`, content: `<div class="flowchart">
                <div class="flowchart-step">1단계: 피상속인의 사망 확인<br><small>사망 신고서, 사망진단서</small></div>

                <div class="flowchart-arrow">↓</div>

                <div class="flowchart-step">2단계: 상속인 확정<br><small>가족관계증명서, 기본증명서로 상속인 범위 결정</small></div>

                <div class="flowchart-arrow">↓</div>

                <div class="flowchart-step">3단계: 재외국민 상속인 확인<br><small>귀국 여부에 따라 준비 서류 결정</small></div>

                <div class="flowchart-arrow">↓</div>

                <div class="flowchart-step">4단계: 첨부서류 준비<br><small>상속인별·귀국 여부별로 서류 구성</small></div>

                <div class="flowchart-arrow">↓</div>

                <div class="flowchart-step">5단계: 등기신청<br><small>상속인 전원 신청 또는 1인 단독 신청</small></div>

                <div class="flowchart-arrow">↓</div>

                <div class="flowchart-step">6단계: 등기부 등본 확인<br><small>공동상속 등기 완료</small></div>
            </div>` },
      { heading: `재외국민 상속인 서류 준비 (귀국한 경우)`, content: `<p>재외국민이 한국으로 귀국한 후 주민등록을 신고했다면, 일반 상속인과 동일한 서류를 준비합니다.</p>

            <h3>1단계: 신분증명</h3>
            <ul>
                <li><strong>여권 + 주민등록증</strong>: 귀국 사실과 한국 주민등록번호를 증명합니다.</li>
                <li>외국에서 귀국한 재외국민은 입국 후 1개월 내에 주민등록 신고를 하면 주민등록번호를 받습니다.</li>
                <li>여권 (원본)과 주민등록증 (사본) 모두 준비하는 것이 좋습니다.</li>
            </ul>

            <h3>2단계: 가족관계 증명</h3>
            <ul>
                <li><strong>가족관계증명서</strong>: 서로 혈족 관계임을 증명합니다 (피상속인과의 관계).</li>
                <li><strong>기본증명서</strong>: 피상속인의 사망 및 상속인 지위를 증명합니다.</li>
                <li>시·구청 또는 대법원 국가법령정보시스템(elaw.go.kr)을 통해 발급받을 수 있습니다.</li>
                <li>발급일로부터 3개월 이내여야 합니다.</li>
            </ul>

            <h3>3단계: 주소 증명</h3>
            <ul>
                <li><strong>주민등록등본</strong>: 귀국한 재외국민의 현재 주소지를 증명합니다.</li>
                <li>주민등록이 말소되었던 경우: <strong>재외국민등록부 등본</strong>을 추가로 준비할 수 있습니다.</li>
                <li>등기신청 당시의 현주소를 반영해야 합니다.</li>
            </ul>

            <h3>4단계: 인감 및 인감증명</h3>
            <ul>
                <li><strong>인감 신고</strong>: 귀국 후 주민등록을 하면 인감을 신고할 수 있습니다.</li>
                <li><strong>인감도장</strong>: 위임장 (대리인이 신청하는 경우) 또는 신청서에 날인합니다.</li>
                <li><strong>인감증명서</strong>: 대리인 신청 시 필수입니다 (대리인 위임장과 함께).</li>
                <li>시·구청에서 발급받으며, 발급일로부터 3개월 이내여야 합니다.</li>
            </ul>

            <div class="case-box">
                <h4>사례: 호주 거주 자녀의 귀국 상속 등기</h4>
                <p>피상속인(부)이 서울의 아파트를 남기고 사망했습니다. 자녀 A는 호주에 거주하다가 장례 후 1개월 후 귀국했습니다. A가 공동상속 등기를 신청할 때 준비한 서류:</p>
                <ul>
                    <li>여권 (호주에서의 체류 증명)</li>
                    <li>주민등록등본 (귀국 후 신고한 주소지)</li>
                    <li>가족관계증명서 및 기본증명서</li>
                    <li>인감증명서 (귀국 후 인감 신고 후 발급)</li>
                    <li>직인 (인감도장)</li>
                </ul>
                <p>이 경우 A는 일반 상속인과 동일하게 취급되어 신청할 수 있습니다.</p>
            </div>` },
      { heading: `재외국민 상속인 서류 준비 (미귀국인 경우)`, content: `<p>재외국민이 외국에 계속 거주하면서 귀국하지 않은 경우, 다음과 같이 서류를 준비합니다.</p>

            <h3>1단계: 위임장</h3>
            <ul>
                <li><strong>재외공관 공증 위임장</strong>: 한국의 재외공관(대사관, 총영사관)에서 공증 받은 위임장입니다.</li>
                <li>등기예규 제1778호 제9조 제1항에 따라, 미귀국 재외국민은 재외공관 공증으로 인감증명을 대체할 수 있습니다.</li>
                <li>위임장 작성 → 재외공관 방문 → 공증(또는 인증) → 한국으로 송부</li>
                <li><strong>아포스티유 대신 재외공관 확인</strong>: 헤이그 아포스티유 협약 가입국의 공관에서 발급받은 경우, 아포스티유 없이 재외공관 확인만 받으면 됩니다.</li>
            </ul>

            <h3>2단계: 신분 증명</h3>
            <ul>
                <li><strong>여권 사본</strong>: 유효한 여권 또는 여권 사본 (아포스티유 또는 재외공관 확인)</li>
                <li>외국인등록증 사본 (해당 국가의 거주권 증명)</li>
            </ul>

            <h3>3단계: 가족관계 증명</h3>
            <ul>
                <li><strong>가족관계증명서</strong>: 한국 시·구청에서 발급 (국내 주소지 필요 없음)</li>
                <li><strong>기본증명서</strong>: 피상속인 사망 증명</li>
                <li><strong>아포스티유 또는 재외공관 확인</strong>: 이 서류들을 외국에서 사용할 목적으로 준비했다면 공증이 필요할 수 있습니다.</li>
                <li>등기신청 시점에 재외국민이 제출하는 경우, 아포스티유가 필수일 수 있습니다 (등기소 확인 필요).</li>
            </ul>

            <h3>4단계: 주소 증명</h3>
            <ul>
                <li><strong>재외국민등록부 등본</strong>: 재외동포청에 등록된 재외국민의 해외 주소를 증명합니다.</li>
                <li><strong>또는 재외공관 거주확인서</strong>: 해당 국가의 대사관·총영사관에서 발급받은 거주 증명.</li>
                <li><strong>또는 외국 정부 발급 주소 증명</strong>: 해당 국가의 거주지 인정 증명서 (아포스티유 필요).</li>
            </ul>

            <h3>5단계: 등록번호</h3>
            <ul>
                <li><strong>재외국민등록번호</strong>: 재외동포청에 등록된 번호 (있을 경우)</li>
                <li><strong>또는 등기소 부여번호</strong>: 재외국민등록번호가 없으면 등기신청 시 등기소가 임시 번호를 부여합니다 (등기예규 제1778호 제11조).</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ 인감증명서 대체:</strong> 미귀국 재외국민은 한국의 시·구청에서 인감증명서를 받을 수 없습니다. 대신 재외공관 공증 위임장(또는 아포스티유가 첨부된 공증)으로 인감증명을 갈음할 수 있습니다(등기예규 제1778호 제9조 제1항).
            </div>

            <div class="case-box">
                <h4>사례: 미국 거주 상속인의 미귀국 상속 등기</h4>
                <p>피상속인(모)이 부산의 상가를 남기고 사망했습니다. 자녀 B는 미국에 거주하면서 시민권을 취득했지만 한국 국적도 유지하고 있습니다(재외국민). B가 미국에서 귀국하지 않고 공동상속 등기를 신청할 때 준비한 서류:</p>
                <ul>
                    <li>미국 대사관(또는 총영사관)에서 공증받은 위임장</li>
                    <li>여권 사본 (미국 대사관 확인 또는 아포스티유)</li>
                    <li>가족관계증명서 및 기본증명서 (한국 시청에서 발급)</li>
                    <li>재외국민등록부 등본 또는 미국의 거주지 증명</li>
                    <li>재외국민등록번호 (있을 경우) 또는 등기소 부여번호</li>
                </ul>
                <p>B는 미국 변호사를 대리인으로 지정하거나, 한국의 친인척을 대리인으로 하는 위임장을 작성하여 진행했습니다.</p>
            </div>` },
      { heading: `첨부서류 비교표`, content: `<p>재외국민 상속인을 포함한 공동상속 등기의 첨부서류를 귀국 여부별로 정리했습니다. 다른 상속인(한국 국적, 국내 거주)은 일반 상속 등기 서류를 따릅니다.</p>

            <table>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>귀국한 재외국민</th>
                        <th>미귀국 재외국민</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>위임장</strong></td>
                        <td>인감도장 날인 + 인감증명서</td>
                        <td>재외공관 공증 위임장 (또는 아포스티유)</td>
                    </tr>
                    <tr>
                        <td><strong>신분증명</strong></td>
                        <td>여권 (또는 외국인등록증) + 주민등록증</td>
                        <td>여권 사본 (아포스티유 또는 재외공관 확인)</td>
                    </tr>
                    <tr>
                        <td><strong>가족관계증명</strong></td>
                        <td>가족관계증명서 + 기본증명서</td>
                        <td>가족관계증명서 + 기본증명서 (아포스티유 또는 재외공관 확인)</td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>주민등록등본 (또는 재외국민등록부 등본)</td>
                        <td>재외국민등록부 등본 또는 재외공관 거주확인서</td>
                    </tr>
                    <tr>
                        <td><strong>등록번호</strong></td>
                        <td>주민등록번호 (또는 재외국민등록번호)</td>
                        <td>재외국민등록번호 (또는 등기소 부여번호)</td>
                    </tr>
                    <tr>
                        <td><strong>인감증명</strong></td>
                        <td>인감증명서 (귀국 후 신고하여 발급)</td>
                        <td>재외공관 공증으로 대체</td>
                    </tr>
                </tbody>
            </table>` },
      { heading: `주의사항`, content: `<h3>1. 협력을 거부하는 상속인이 있을 때</h3>
            <ul>
                <li>공동상속 등기는 보존행위로서 상속인 중 1인이 단독으로 신청할 수 있습니다.</li>
                <li>다른 상속인이 협력을 거부해도 법정상속분에 따라 자신의 몫을 등기할 수 있습니다(등기선례 제201809-4호).</li>
                <li>이 경우 신청서에 다른 상속인의 서명이 필요하지 않습니다.</li>
            </ul>

            <h3>2. 현주소 불명인 재외국민</h3>
            <ul>
                <li>재외국민 상속인의 현주소를 파악할 수 없으면, 재외국민등록부에 등재된 주소를 사용합니다(등기선례 7-74).</li>
                <li>재외동포청에 미등록 상태면 등기소와 사전 협의가 필요합니다.</li>
            </ul>

            <h3>3. 아포스티유 확인</h3>
            <ul>
                <li>미귀국 재외국민이 제출하는 외국 문서(여권, 주소증명 등)는 아포스티유 협약 가입국이면 아포스티유가 필요합니다.</li>
                <li>재외공관(대사관·총영사관)에서 공증받으면 아포스티유 대신 재외공관 확인으로 가능합니다.</li>
            </ul>

            <h3>4. 번역공증</h3>
            <ul>
                <li>외국어 문서는 한글 번역이 필요합니다. 공식 번역공증을 받아 함께 제출합니다.</li>
                <li>대사관의 "영사 확인"을 받거나, 한국의 공증사무소에서 공증을 받을 수 있습니다.</li>
            </ul>

            <h3>5. 기한 준수</h3>
            <ul>
                <li>가족관계증명서, 기본증명서, 인감증명서는 발급일로부터 <strong>3개월 이내</strong>여야 합니다.</li>
                <li>아포스티유 첨부 서류도 동일하게 3개월 기준을 적용합니다.</li>
            </ul>

            <div class="warning-box">
                <strong>⚡ 기간 제한:</strong> 상속 등기에 특별한 기간 제한은 없지만, 증명서 효력이 3개월이므로 이 기간 내에 신청을 마쳐야 합니다.
            </div>` },
      { heading: `관련 판례 및 예규`, content: `<div class="precedent-box">
                <h4>등기예규 제1778호 제9조 제1항</h4>
                <p>재외국민이 국내에 주소를 두지 아니하고 있는 경우 등기신청서에 대한 서명을 하지 아니하고, 대신 재외공관에서 공증을 받은 위임장을 제출하면, 이를 인감증명서에 갈음할 수 있다.</p>
            </div>

            <div class="precedent-box">
                <h4>등기예규 제1778호 제11조</h4>
                <p>재외국민의 등록번호를 알 수 없는 경우, 등기신청서에 '등록번호 미기재'로 표시하고 신청하면, 등기소에서 임시 번호를 부여하여 처리한다.</p>
            </div>

            <div class="precedent-box">
                <h4>등기선례 7-74 (현주소 불명)</h4>
                <p>상속인의 현주소를 알 수 없는 경우, 최후에 등록되어 있던 주소를 기재하여 등기신청을 할 수 있다. 재외국민의 경우 재외국민등록부에 등재된 주소를 사용한다.</p>
            </div>

            <div class="precedent-box">
                <h4>등기선례 제201809-4호 (협력 거부 시 단독 신청)</h4>
                <p>공동상속인 중 일부가 협력을 거부하는 경우, 협력하는 상속인이 자신의 법정상속분에 해당하는 부분에 대해 단독으로 공동상속 등기를 신청할 수 있다.</p>
            </div>
        </section>

        <!-- 섹션 10: 관련 링크 -->
        <section>
            <div class="related-links">
                <h3>다음으로 확인할 내용</h3>
                <ul>
                    <li><a href="외등_18_재외국민단독상속.html">재외국민 단독 상속 등기</a> — 재외국민이 유일한 상속인인 경우</li>
                    <li><a href="외등_20_재외국민협의분할.html">재외국민이 포함된 상속재산 협의분할</a> — 공동상속인이 상속재산을 나누어 가질 때</li>
                    <li><a href="외등_09_외국인법정상속.html">외국인의 법정상속 등기</a> — 외국인 상속인의 경우 (재외국민과의 차이)</li>
                </ul>
            </div>
        </section>

        <!-- 섹션 11: 상담 CTA 및 면책문구 -->
        <section>
            <div class="cta-box">
                <h3>이 내용이 해당되시나요?</h3>
                <p><strong>첫 상담은 무료입니다.</strong></p>
                <p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다. 개별 상황에 맞게 정확하게 준비하려면 전문가 상담이 필요합니다.</p>
                <div class="cta-buttons">
                    <a href="tel:02-1234-5678" class="cta-btn cta-btn-primary">☎ 전화 상담</a>
                    <a href="https://pf.kakao.com/_" class="cta-btn cta-btn-secondary">💬 카카오톡</a>
                </div>
            </div>

            <div class="disclaimer">
                <p><strong>면책 문구</strong></p>
                <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 조언이 아닙니다. 법무사 사무소와의 법률자문 계약 없이 본 페이지 내용을 근거로 한 어떤 행위도 권장하지 않습니다. 이 페이지는 2025년 현행 법령 기준으로 작성되었습니다. 실제 등기 신청 시 등기소의 최신 지침을 확인하시기 바랍니다.</p>
            </div>
        </section>
    </div>
</body>
</html>` },
    ],
    laws: [
      { name: `등기예규 제1778호 제9조 제1항`, desc: `재외국민이 국내에 주소를 두지 아니하고 있는 경우 등기신청서에 대한 서명을 하지 아니하고, 대신 재외공관에서 공증을 받은 위임장을 제출하면, 이를 인감증명서에 갈음할 수 있다.` },
      { name: `등기예규 제1778호 제11조`, desc: `재외국민의 등록번호를 알 수 없는 경우, 등기신청서에 '등록번호 미기재'로 표시하고 신청하면, 등기소에서 임시 번호를 부여하여 처리한다.` },
      { name: `등기선례 7-74 (현주소 불명)`, desc: `상속인의 현주소를 알 수 없는 경우, 최후에 등록되어 있던 주소를 기재하여 등기신청을 할 수 있다. 재외국민의 경우 재외국민등록부에 등재된 주소를 사용한다.` },
      { name: `등기선례 제201809-4호 (협력 거부 시 단독 신청)`, desc: `공동상속인 중 일부가 협력을 거부하는 경우, 협력하는 상속인이 자신의 법정상속분에 해당하는 부분에 대해 단독으로 공동상속 등기를 신청할 수 있다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-20',
    title: "재외국민이 포함된 상속재산 협의분할 등기",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
                <ul>
                    <li>상속인 중 일부가 해외에 거주하는 재외국민</li>
                    <li>공동상속인 전원이 상속재산 분할에 동의하여 협의분할을 진행하려는 경우</li>
                    <li>협의분할서에 재외국민 상속인의 서명·날인을 받아야 하는 경우</li>
                    <li>재외국민이 귀국하지 않고 미국, 호주, 캐나다 등 해외에서만 서류를 작성해야 하는 경우</li>
                    <li>재외공관(대사관, 총영사관)에서 서류 공증을 받아야 하는 상황</li>
                    <li>협의분할서가 여러 장일 때 간인(間印) 방법을 알아야 하는 경우</li>
                </ul>
            </div>
        </section>

        <!-- 섹션 2: 핵심 요약 -->
        <section>
            <div class="summary-box">
                <h3>핵심 요약</h3>
                <ul>
                    <li><strong>협의분할의 원칙</strong>: 공동상속인 전원의 참가와 서명이 필수. 일부 상속인만으로 한 협의분할은 무효</li>
                    <li><strong>재외국민 귀국 시</strong>: 협의분할서에 인감 날인 + 인감증명서 (귀국 후 인감 신고 후 발급 가능)</li>
                    <li><strong>재외국민 미귀국 시 (방법 1)</strong>: 재외공관 공증 대리위임장 작성 (등기예규 제1778호 제9조 제1항)</li>
                    <li><strong>재외국민 미귀국 시 (방법 2)</strong>: 협의분할서를 재외국민에게 우편 송부 → 재외공관 공증 (인감증명 대체)</li>
                    <li><strong>여러 장 서류의 간인</strong>: 공동상속인 전원 간인 + 공증인 직인 간인 필요</li>
                </ul>
            </div>` },
      { heading: `개요: 재외국민이 포함된 협의분할의 특수성`, content: `<h3>협의분할이란?</h3>
            <p>협의분할은 <strong>공동상속인 전원이 참가하여 상속재산의 분할 방법을 협의하는 것</strong>입니다. 법정상속분과 관계없이 상속인들이 원하는 대로 재산을 나누어 가질 수 있으며, 이를 등기하기 위해서는 협의분할서에 모든 상속인의 서명과 날인이 필요합니다.</p>

            <div class="warning-box">
                <h4>주의: 일부 상속인만 참가한 협의분할은 무효</h4>
                <p>공동상속인 전원이 참가하지 않으면 협의분할이 성립하지 않습니다. 예를 들어 한국에 있는 상속인 A, B만으로 협의분할서를 작성하고 해외의 상속인 C를 빠뜨리면, 나중에 C가 이의를 제기할 경우 협의분할서 자체가 무효가 될 수 있습니다.</p>
            </div>

            <h3>재외국민이 포함될 때 달라지는 점</h3>
            <ul>
                <li><strong>참가 방법이 다름</strong>: 재외국민이 해외에 있을 때는 귀국 여부에 따라 서류 준비 방법이 완전히 달라집니다.</li>
                <li><strong>인감 대신 공증</strong>: 해외 상황에서는 한국의 인감증명서를 대신해 재외공관 공증을 사용합니다.</li>
                <li><strong>대리위임의 활용</strong>: 재외국민이 직접 참가하지 않을 경우, 대리인에게 위임하는 방식이 있습니다.</li>
                <li><strong>우편 송부 방식</strong>: 협의분할서를 재외국민에게 우편으로 보내 서명·날인 후 공증받아 받는 방식도 가능합니다.</li>
            </ul>` },
      { heading: `협의분할 절차 흐름도`, content: `<h3>기본 절차 (재외국민 포함)</h3>
            <div class="process-flow">
                <div class="process-row">
                    <div class="process-step">상속 발생</div>
                    <div class="process-arrow">→</div>
                    <div class="process-step">상속인 확정</div>
                    <div class="process-arrow">→</div>
                    <div class="process-step">협의분할 협의</div>
                </div>
                <div class="process-row">
                    <div class="process-arrow">↓</div>
                </div>
                <div class="process-row">
                    <div class="process-step">협의분할서 작성</div>
                    <div class="process-arrow">→</div>
                    <div class="process-step">재외국민 서명·날인</div>
                </div>
                <div class="process-row">
                    <div class="process-arrow">↓</div>
                </div>
                <div class="process-row">
                    <div class="process-step">공증 또는 인감증명</div>
                    <div class="process-arrow">→</div>
                    <div class="process-step">등기 신청</div>
                </div>
            </div>

            <h3>재외국민 귀국 여부에 따른 분기</h3>
            <p style="margin-top: 25px;"><strong>경로 A: 재외국민이 귀국한 경우</strong></p>
            <ul>
                <li>협의분할서에 인감 날인</li>
                <li>인감증명서 발급 (귀국 후 인감 신고 필요)</li>
                <li>등기 신청</li>
            </ul>

            <p style="margin-top: 20px;"><strong>경로 B: 재외국민이 미귀국 - 대리위임방식</strong></p>
            <ul>
                <li>재외공관 공증 대리위임장 작성</li>
                <li>한국의 대리인(다른 상속인 등)이 협의분할서 작성 및 서명·날인</li>
                <li>등기 신청</li>
            </ul>

            <p style="margin-top: 20px;"><strong>경로 C: 재외국민이 미귀국 - 협의분할서 공증방식</strong></p>
            <ul>
                <li>협의분할서를 재외국민에게 우편 송부</li>
                <li>재외국민이 서명·날인 후 재외공관 공증</li>
                <li>공증 서류를 한국으로 반송</li>
                <li>등기 신청</li>
            </ul>` },
      { heading: `재외국민이 직접 참가하는 경우 (귀국)`, content: `<h3>기본 원칙</h3>
            <p>재외국민이 한국으로 귀국한 경우, 한국에 거주하는 상속인과 동일하게 취급됩니다. 협의분할서에 인감 날인을 하고 인감증명서를 발급받으면 됩니다.</p>

            <h3>절차</h3>
            <ol>
                <li><strong>귀국 후 인감 신고</strong>
                    <ul>
                        <li>주민등록지 관할 시구청에 인감 신고</li>
                        <li>신고 인감 도장(인감) 준비</li>
                        <li>신분증(여권, 운전면허증 등) 지참</li>
                    </ul>
                </li>
                <li><strong>협의분할서 작성</strong>
                    <ul>
                        <li>공동상속인 전원이 함께 협의분할서 작성</li>
                        <li>각 상속인이 인감 날인</li>
                    </ul>
                </li>
                <li><strong>인감증명서 발급</strong>
                    <ul>
                        <li>주민등록지 관할 시구청에서 발급</li>
                        <li>협의분할서에 첨부</li>
                    </ul>
                </li>
                <li><strong>등기 신청</strong>
                    <ul>
                        <li>관할 등기소에 협의분할 등기 신청</li>
                        <li>필요 서류 제출</li>
                    </ul>
                </li>
            </ol>

            <div class="example-box">
                <h4>사례: 귀국하여 협의분할한 경우</h4>
                <p>미국에 거주하던 김○○ 씨가 부모의 상속을 받게 되어 귀국했습니다. 한국에 있는 형과 함께 협의분할하기로 결정했습니다.</p>
                <p><strong>절차</strong>:</p>
                <ul>
                    <li>귀국 후 주민등록 회복 (재외국민등록 말소)</li>
                    <li>시구청에 인감 신고 (신도장)</li>
                    <li>협의분할서 작성 → 형과 함께 인감 날인</li>
                    <li>시구청에서 각각 인감증명서 2매씩 발급</li>
                    <li>협의분할서 + 인감증명서 + 기타 서류 → 등기소 신청</li>
                </ul>
            </div>` },
      { heading: `재외국민이 대리인을 통하는 경우 (미귀국)`, content: `<h3>개요</h3>
            <p>재외국민이 해외에 있으면서 한국으로 귀국하지 않은 경우, <strong>재외공관 공증을 받은 대리위임장</strong>을 통해 다른 상속인(또는 법무사)에게 협의분할서 작성 및 서명·날인을 위임할 수 있습니다.</p>

            <div class="cta-box">
                <p>재외국민도 공동상속인에게 위임할 수 있습니다. 반드시 법무사를 통할 필요는 없습니다. (등기선례 제201805-9호)</p>
            </div>

            <h3>재외공관 공증 대리위임장 (등기예규 제1778호 제9조)</h3>

            <h4>1단계: 위임장 작성 및 공증</h4>
            <ul>
                <li><strong>위임장 작성</strong>
                    <ul>
                        <li>재외국민이 직접 작성 (손글씨)</li>
                        <li>서명(署名) - 인감 없이 자필 서명</li>
                        <li>날인(捺印) - 개인 인장으로 도장</li>
                    </ul>
                </li>
                <li><strong>재외공관 공증 신청</strong>
                    <ul>
                        <li>해당 국가의 한국 대사관 또는 총영사관 방문</li>
                        <li>공증 신청서 작성</li>
                        <li>여권 지참</li>
                        <li>위임장 원본 제출</li>
                    </ul>
                </li>
                <li><strong>공증 완료</strong>
                    <ul>
                        <li>공증인 직인 날인</li>
                        <li>공증 영문본(또는 한글본) 발급</li>
                        <li>한국 등기소에 제출 가능한 형태</li>
                    </ul>
                </li>
            </ul>

            <h4>2단계: 한국에서 협의분할 진행</h4>
            <ul>
                <li><strong>대리인 선임</strong>
                    <ul>
                        <li>공동상속인 중 1인 또는 법무사</li>
                        <li>위임장에 기재된 대리인이 협의분할서 작성 및 서명·날인</li>
                    </ul>
                </li>
                <li><strong>협의분할서 작성</strong>
                    <ul>
                        <li>대리인 + 다른 상속인(한국에 있는 경우) 함께 협의분할서 작성</li>
                        <li>각 상속인(또는 대리인, 실인) 인감 날인</li>
                    </ul>
                </li>
                <li><strong>인감증명서 발급</strong>
                    <ul>
                        <li>한국의 상속인들은 각각 인감증명서 발급</li>
                        <li>대리인이 작성한 협의분할서에는 대리인의 인감증명서</li>
                    </ul>
                </li>
            </ul>

            <h4>3단계: 등기 신청</h4>
            <ul>
                <li>협의분할서 (공동상속인 전원의 인감 날인)</li>
                <li>재외국민의 재외공관 공증 대리위임장</li>
                <li>인감증명서</li>
                <li>기타 필요 서류</li>
            </ul>

            <div class="case-box">
                <h4>등기예규 제1778호 제9조 제3항</h4>
                <p>"위임장(협의분할권 위임장)에 대해 공증을 받는 경우 위임장 자체에 공증인의 직인을 받아야 한다."</p>
                <p>→ 위임장의 마지막 장에 공증인 직인이 찍혀 있어야 등기소에서 인정합니다.</p>
            </div>

            <div class="example-box">
                <h4>사례: 미국 거주 재외국민의 대리위임</h4>
                <p>미국에 시민권을 얻어 거주하는 이○○ 씨의 아버지가 한국에서 돌아가셨습니다. 한국에 있는 누나 3명과 함께 협의분할을 진행합니다.</p>
                <p><strong>절차</strong>:</p>
                <ul>
                    <li>미국 대사관(또는 총영사관) 방문, 대리위임장 공증</li>
                    <li>누나들에게 공증 위임장 이메일로 송부</li>
                    <li>누나 중 1명이 대리인으로 함께 협의분할서 작성</li>
                    <li>대리인 + 누나들 각각 인감 날인 → 인감증명서 발급</li>
                    <li>협의분할서 + 공증 위임장 + 인감증명서 → 등기소 신청</li>
                </ul>
            </div>` },
      { heading: `첨부서류 - 재외국민 상속인 기준`, content: `<p>협의분할 등기를 신청할 때 제출해야 할 서류입니다. 재외국민 상속인의 귀국 여부에 따라 다릅니다.</p>

            <table>
                <thead>
                    <tr>
                        <th>서류 구분</th>
                        <th>귀국한 재외국민</th>
                        <th>미귀국인 재외국민</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>협의분할서</strong></td>
                        <td>인감 날인 + 인감증명서</td>
                        <td>재외공관 공증 위임장 → 대리인 서명·날인 + 인감증명서</td>
                    </tr>
                    <tr>
                        <td><strong>공증/인감 증명</strong></td>
                        <td>인감증명서 (시구청)</td>
                        <td>재외공관 공증서 (위임장 자체)</td>
                    </tr>
                    <tr>
                        <td><strong>신분증명</strong></td>
                        <td>여권 또는 주민등록증</td>
                        <td>여권 사본</td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>주민등록등본</td>
                        <td>재외국민등록부 등본 또는 재외공관 거주확인서</td>
                    </tr>
                    <tr>
                        <td><strong>등록번호</strong></td>
                        <td>주민등록번호 (말소 시 재외국민등록번호)</td>
                        <td>재외국민등록번호 또는 등기소 부여번호</td>
                    </tr>
                    <tr>
                        <td><strong>상속인 확정</strong></td>
                        <td colspan="2">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>피상속인 사망진단서 (또는 사망기록 증명)</li>
                                <li>피상속인 기본증명서 (또는 호적등본)</li>
                                <li>상속인 기본증명서 (또는 호적등본) - 모든 상속인</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>외국어 서류</strong></td>
                        <td>-</td>
                        <td>공증서가 영문이면 한글 번역본 + 번역자 서명</td>
                    </tr>
                </tbody>
            </table>

            <h3>주의사항</h3>
            <ul>
                <li><strong>협의분할서가 여러 장인 경우</strong>: 공동상속인 전원이 <strong>모든 장마다 간인</strong>해야 합니다. 첫 장과 마지막 장에만 서명하면 안 됩니다.</li>
                <li><strong>공증인 간인</strong>: 협의분할서가 여러 장이고 재외공관 공증을 받은 경우, 공증인 직인도 모든 장의 경계(간인)에 찍혀야 합니다. (등기선례 제201807-1호)</li>
                <li><strong>한글 번역</strong>: 재외공관 공증서가 영문이면 반드시 한글 번역본을 첨부하고 번역자가 서명해야 합니다.</li>
            </ul>` },
      { heading: `협의분할서 작성 방법 및 주의사항`, content: `<h3>협의분할서 작성의 기본 원칙</h3>
            <p><strong>협의분할서는 특정 형식이 법으로 정해져 있지 않습니다.</strong> 하지만 등기신청 시 명확하고 문제가 없도록 작성해야 합니다.</p>

            <h3>작성 항목</h3>
            <ol>
                <li><strong>문서 제목</strong>
                    <ul>
                        <li>"협의분할서" 또는 "상속재산분할협의서"</li>
                    </ul>
                </li>
                <li><strong>피상속인 정보</strong>
                    <ul>
                        <li>성명, 생년월일, 주소</li>
                        <li>사망일, 주민등록번호(또는 재외국민등록번호)</li>
                    </ul>
                </li>
                <li><strong>상속인 정보</strong>
                    <ul>
                        <li>각 상속인의 성명, 생년월일, 주소</li>
                        <li>주민등록번호(또는 재외국민등록번호)</li>
                        <li>피상속인과의 관계 (배우자, 자, 부모 등)</li>
                    </ul>
                </li>
                <li><strong>상속재산 명시</strong>
                    <ul>
                        <li>부동산: 소재지, 지번, 건물명의 등기순서, 면적</li>
                        <li>금전 또는 동산: 상세 명시</li>
                    </ul>
                </li>
                <li><strong>분할 방법</strong>
                    <ul>
                        <li>각 상속인이 받을 재산을 명확히 기재</li>
                        <li>법정상속분과 다를 수 있음</li>
                    </ul>
                </li>
                <li><strong>서명 및 날인</strong>
                    <ul>
                        <li>모든 상속인이 서명 및 날인</li>
                        <li>날짜 기재</li>
                    </ul>
                </li>
            </ol>

            <h3>재외국민 관련 주의사항</h3>

            <div class="warning-box">
                <h4>1. 모든 상속인의 서명 필수</h4>
                <p>협의분할서에는 <strong>공동상속인 전원의 서명이 반드시 있어야</strong> 합니다. 재외국민이 한 명이라도 빠지면 협의분할이 성립하지 않습니다.</p>
            </div>

            <div class="warning-box">
                <h4>2. 여러 장일 때는 모든 장에 간인</h4>
                <p>협의분할서가 2장 이상이면 각 상속인이 <strong>모든 페이지의 끝(장의 경계)에 인장을 찍어야</strong> 합니다. 이를 "간인(間印)"이라고 합니다. 등기예규 제1778호 제6조를 준수하세요.</p>
            </div>

            <div class="warning-box">
                <h4>3. 공증인 간인</h4>
                <p>재외공관 공증을 받은 경우, 공증서뿐 아니라 협의분할서 자체의 모든 페이지 경계에도 <strong>공증인 직인</strong>이 필요합니다. (등기선례 제201807-1호, 제202001-1호)</p>
            </div>

            <h4>4. 한글 표기</h4>
            <ul>
                <li>협의분할서는 반드시 한글로 작성</li>
                <li>외국인이나 재외국민도 한글 성명을 사용</li>
                <li>외국 주소가 있을 경우, 한글 표기 + 영문 표기 병기 권장</li>
            </ul>

            <h4>5. 날짜 표기</h4>
            <ul>
                <li>한국 표준: 2026년 4월 7일 (또는 2026. 4. 7.)</li>
                <li>재외국민이 해외에서 작성하는 경우: 협의분할서 작성일 ≠ 공증일일 수 있음</li>
            </ul>

            <div class="example-box">
                <h4>협의분할서 작성 예시 (일부)</h4>
                <p style="font-weight: 600;">협의분할서</p>
                <p style="margin: 10px 0 5px 0;">피상속인 김○○</p>
                <p style="margin: 5px 0;">(생년월일: 1930년 5월 15일)</p>
                <p style="margin: 5px 0;">주민등록번호: 30-05-15-□□□□□□</p>
                <p style="margin: 10px 0 5px 0;">상기 피상속인이 2025년 12월 20일 사망하였으므로, 아래 상속인들이 모여 상속재산을 다음과 같이 분할하기로 협의한다.</p>
                <p style="margin: 10px 0;">제1. 부동산</p>
                <p style="margin: 5px 0 5px 20px;">1) 장남 김□□(생년월일: 1955년 3월 10일)</p>
                <p style="margin: 5px 0 5px 30px;">서울 강남구 ○○동 ○○번지 대지 500㎡</p>
                <p style="margin: 5px 0 5px 20px;">2) 차남 김□□(생년월일: 1958년 7월 22일)</p>
                <p style="margin: 5px 0 5px 30px;">서울 강남구 □□동 □□번지 건물 150㎡</p>
            </div>` },
      { heading: `판례·예규`, content: `<div class="case-box">
                <h4>등기예규 제1778호 제6조 (협의분할 대리위임장)</h4>
                <p>"상속재산의 협의분할을 위한 대리위임장은 인감증명서와 함께 제출하여야 한다. 다만, 재외공관에서 공증을 받은 경우에는 공증서로 갈음할 수 있다."</p>
            </div>

            <div class="case-box">
                <h4>등기예규 제1778호 제9조 제1항 (재외공관 공증)</h4>
                <p>"재외국민의 협의분할 대리위임장 또는 협의분할서는 재외공관의 공증을 받을 수 있으며, 이는 인감증명서 대신 효력이 있다."</p>
            </div>

            <div class="case-box">
                <h4>등기예규 제1778호 제9조 제3항</h4>
                <p>"협의분할권 위임장에 대해 공증을 받는 경우 위임장 자체에 공증인의 직인을 받아야 한다."</p>
                <p><small>→ 공증서는 단순히 "위임장 첨부" 형태가 아니라, 위임장 자체에 공증인 직인이 찍혀야 함을 의미합니다.</small></p>
            </div>

            <div class="case-box">
                <h4>등기선례 제201805-9호 (재외국민의 위임 대상)</h4>
                <p>"재외국민이 협의분할권을 위임할 때 위임인이 반드시 법무사일 필요는 없다. 다른 상속인(공동상속인)에게 위임하는 것도 가능하다."</p>
                <p><small>→ 형, 누나, 배우자 등 다른 상속인에게 위임 가능합니다.</small></p>
            </div>

            <div class="case-box">
                <h4>등기선례 제201807-1호 (여러 장 서류의 간인)</h4>
                <p>"협의분할서가 여러 장일 경우, 각 상속인은 모든 장의 경계에 간인해야 한다."</p>
            </div>

            <div class="case-box">
                <h4>등기선례 제202001-1호 (공증인 간인)</h4>
                <p>"재외공관에서 공증을 받은 협의분할서가 여러 장인 경우, 공증인 직인도 모든 페이지 경계에 간인되어야 한다."</p>
            </div>` },
    ],
    laws: [
      { name: `등기예규 제1778호 제6조 (협의분할 대리위임장)`, desc: `"상속재산의 협의분할을 위한 대리위임장은 인감증명서와 함께 제출하여야 한다. 다만, 재외공관에서 공증을 받은 경우에는 공증서로 갈음할 수 있다."` },
      { name: `등기예규 제1778호 제9조 제1항 (재외공관 공증)`, desc: `"재외국민의 협의분할 대리위임장 또는 협의분할서는 재외공관의 공증을 받을 수 있으며, 이는 인감증명서 대신 효력이 있다."` },
      { name: `등기예규 제1778호 제9조 제3항`, desc: `"협의분할권 위임장에 대해 공증을 받는 경우 위임장 자체에 공증인의 직인을 받아야 한다."` },
      { name: `등기선례 제201805-9호 (재외국민의 위임 대상)`, desc: `"재외국민이 협의분할권을 위임할 때 위임인이 반드시 법무사일 필요는 없다. 다른 상속인(공동상속인)에게 위임하는 것도 가능하다."` },
      { name: `등기선례 제201807-1호 (여러 장 서류의 간인)`, desc: `"협의분할서가 여러 장일 경우, 각 상속인은 모든 장의 경계에 간인해야 한다."` },
      { name: `등기선례 제202001-1호 (공증인 간인)`, desc: `"재외공관에서 공증을 받은 협의분할서가 여러 장인 경우, 공증인 직인도 모든 페이지 경계에 간인되어야 한다."` },
    ],
    forms: [],
  },
  {
    id: 'fi-21',
    title: "재외국민의 부동산 증여 이전등기",
    meta: "완벽한 절차 가이드: 귀국 여부에 따른 서류 준비부터 등기 신청까지",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
                <h3>다음 중 해당되시나요?</h3>
                <div class="checklist-item">
                    <input type="checkbox"> 재외국민인 부모가 한국 부동산을 자녀에게 증여하려고 한다
                </div>
                <div class="checklist-item">
                    <input type="checkbox"> 귀국하지 않고도 한국의 부동산을 증여할 수 있는지 알고 싶다
                </div>
                <div class="checklist-item">
                    <input type="checkbox"> 재외국민이 수증자(증여받는 사람)이고, 필요한 서류가 무엇인지 확인하고 싶다
                </div>
                <div class="checklist-item">
                    <input type="checkbox"> 미귀국 상태에서 증여 시 인감증명서 대신 무엇을 제출해야 하는지 궁금하다
                </div>
                <div class="checklist-item">
                    <input type="checkbox"> 증여로 인한 등기 신청 절차를 단계별로 알고 싶다
                </div>
                <div class="checklist-item">
                    <input type="checkbox"> 외국인 부동산 증여와 재외국민 증여의 차이점을 알고 싶다
                </div>
            </div>` },
      { heading: `이 절차가 왜 필요한가`, content: `<div class="summary-box">
                <h3>부동산 증여 이전등기의 중요성</h3>
                <p>
                    <strong>증여계약 체결만으로는 소유권이 이전되지 않습니다.</strong> 민법 제188조에 따라 부동산의 소유권이전은 등기에 의해서만 효력이 생깁니다. 따라서 증여계약 체결 후 반드시 등기소에 증여 이전등기를 신청해야 합니다.
                </p>
                <p>
                    등기신청을 하지 않으면:
                </p>
                <ul>
                    <li><strong>권리 보호 불가</strong> — 제3자가 같은 부동산을 매수해 등기를 먼저 하면 법적 소유권을 잃을 수 있습니다</li>
                    <li><strong>증여세 신고 불가</strong> — 증여받은 사실을 증명할 수 없어 나중에 세무조사 대상이 될 수 있습니다</li>
                    <li><strong>금융거래 불가</strong> — 은행에서 담보인정을 하지 않아 대출을 받을 수 없습니다</li>
                    <li><strong>매매·재증여 불가</strong> — 등기되지 않은 부동산은 다시 팔거나 증여할 수 없습니다</li>
                </ul>
                <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #c8a96e;">
                    <strong>재외국민이 증여자인 경우와 수증자인 경우 절차가 다릅니다.</strong> 특히 미귀국 상태에서 증여를 하는 경우 재외공관에서 발급받은 공증장을 첨부해야 합니다.
                </p>
            </div>` },
      { heading: `전체 절차 흐름`, content: `<h3>재외국민이 증여자인 경우 (해외에서 부동산을 팔거나 증여하는 경우)</h3>
            <div class="procedure-flow">
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">1단계</div>
                    <strong>증여 위임장 작성</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">귀국 또는 미귀국 여부 확인</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">2단계</div>
                    <strong>위임장 공증·인증</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">재외공관 또는 인감증명</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">3단계</div>
                    <strong>증여계약서 체결</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">수증자와 합의</div>
                </div>
            </div>

            <div class="procedure-flow">
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">4단계</div>
                    <strong>서류 준비</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">위임장, 계약서, 신분증 사본 등</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">5단계</div>
                    <strong>등기신청</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">부동산 소재지 등기소</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">6단계</div>
                    <strong>등기 완료</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">3~5일 소요</div>
                </div>
            </div>

            <p style="text-align: center; color: #666; margin-top: 20px; font-size: 14px;">
                <span class="icon">⏱️</span> 전체 소요 기간: 서류 준비 2주 ~ 1개월 + 등기 신청 후 3~5일
            </p>

            <h3 style="margin-top: 40px;">재외국민이 수증자인 경우 (해외에서 한국 부동산을 받는 경우)</h3>
            <div class="procedure-flow">
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">1단계</div>
                    <strong>증여계약서 체결</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">증여자와 합의</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">2단계</div>
                    <strong>재외국민등록번호 신청</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">미귀국 시 필수</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">3단계</div>
                    <strong>서류 준비</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">신분증, 거주증명 등</div>
                </div>
            </div>

            <div class="procedure-flow">
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">4단계</div>
                    <strong>등기신청</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">부동산 소재지 등기소</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">5단계</div>
                    <strong>등기 완료</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">3~5일 소요</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">6단계</div>
                    <strong>증여세 신고</strong>
                    <div style="font-size: 12px; margin-top: 8px; color: #333;">3개월 이내</div>
                </div>
            </div>` },
      { heading: `재외국민이 증여자인 경우 (처분 권한 위임)`, content: `<h3>재외국민의 법적 지위</h3>
            <p>
                재외국민은 한국 국적을 보유하고 해외에서 거주하는 사람입니다. 외국인과 달리 국적은 유지하고 있으므로, 한국 부동산 증여 시 외국인토지법의 제약을 받지 않습니다. 다만, 주민등록이 말소되어 있으므로 서류 준비에서 차이가 있습니다.
            </p>

            <h3>증여 권한 위임의 필요성</h3>
            <p>
                재외국민이 직접 한국에 오지 않고 부동산을 증여하는 경우, 한국의 대리인에게 증여 관련 권한을 위임해야 합니다(등기예규 제1778호 제5조). 이 위임장은 증여 대상 부동산과 수증자, 대리인을 구체적으로 특정하여 작성해야 합니다.
            </p>

            <h3>귀국한 경우 vs 미귀국인 경우의 차이</h3>

            <h4 style="color: #1a5c2e;">귀국한 경우</h4>
            <ul>
                <li>위임장에 <strong>인감도장 날인</strong> 가능</li>
                <li>인감증명서 발급 가능 (주민등록 복구 후)</li>
                <li>한국 국내에서 서류 준비 가능</li>
            </ul>

            <h4 style="color: #1a5c2e;">미귀국인 경우</h4>
            <ul>
                <li>체류국 대사관·공사관에서 위임장 공증 필요</li>
                <li>재외공관에서 서명·날인 인증을 받아야 함</li>
                <li>공증받은 위임장이 인감증명을 대체 (등기예규 제1778호 제9조 제1항)</li>
                <li>단, 위임장 자체에 공증을 받아야 함 (등기예규 제1778호 제9조 제3항)</li>
            </ul>

            <div class="warning-box">
                <h4><span class="icon">⚠️</span> 중요: 위임장 공증 방법</h4>
                <p>
                    미귀국 상태에서 증여를 하는 경우, <strong>인감증명서 2통이 필요</strong>합니다. 이는 재외국민 증여 실무 관행입니다:
                </p>
                <ul>
                    <li><strong>1통:</strong> 등기신청용</li>
                    <li><strong>1통:</strong> 보관용</li>
                </ul>
                <p style="margin-top: 10px;">
                    또한 위임장 자체에 재외공관의 서명·날인 공증을 받아야 하며, 이것이 국내 인감증명을 완전히 대체합니다.
                </p>
            </div>

            <h3>법적 근거</h3>
            <ul>
                <li>민법 제188조 — 부동산 소유권이전의 효력</li>
                <li>등기예규 제1778호 제5조 — 재외공관 공증 절차</li>
                <li>등기예규 제1778호 제9조 제1항, 제3항 — 공증 요건 및 인감증명 대체</li>
            </ul>` },
      { heading: `재외국민이 수증자인 경우 (취득)`, content: `<h3>등록번호 및 주소증명 준비</h3>
            <p>
                재외국민이 부동산을 증여받는 경우, 등기소에 등록할 번호는 다음 중 하나입니다:
            </p>
            <ul>
                <li><strong>재외국민등록번호</strong> — 외교부에 등록된 번호 (가장 선호)</li>
                <li><strong>등기소 부여번호</strong> — 등록번호가 없는 경우 등기소가 부여</li>
            </ul>

            <p style="margin-top: 20px;">
                주소증명은 다음 중 하나:
            </p>
            <ul>
                <li>재외국민등록부 등본</li>
                <li>재외공관 발급 거주확인서</li>
            </ul>

            <h3>귀국 여부에 따른 절차 차이</h3>

            <h4 style="color: #1a5c2e;">귀국한 경우</h4>
            <ul>
                <li>주민등록번호 사용 가능</li>
                <li>주민등록등본으로 주소 증명</li>
                <li>여권 또는 주민등록증으로 신분증명</li>
                <li>절차 간소</li>
            </ul>

            <h4 style="color: #1a5c2e;">미귀국인 경우</h4>
            <ul>
                <li>재외국민등록번호 또는 등기소 부여번호 사용</li>
                <li>재외공관 거주확인서나 재외국민등록부 등본으로 주소 증명</li>
                <li>여권 사본으로 신분증명</li>
                <li>서류 준비 기간이 더 소요</li>
            </ul>

            <div class="example-box">
                <h4><span class="icon">📋</span> 사례: 미국에 거주하는 재외국민 증여 수증자</h4>
                <p>
                    미국 뉴욕에 거주하는 재외국민 A가 한국의 아파트를 부모로부터 증여받는 경우:
                </p>
                <ul>
                    <li>외교부에 재외국민등록번호 신청 (약 1주)</li>
                    <li>뉴욕 대사관에서 거주확인서 발급 (약 3~5일)</li>
                    <li>여권 사본 준비</li>
                    <li>한국의 등기소에 증여 이전등기 신청</li>
                    <li>등기 완료 후 3개월 이내에 국세청에 증여세 신고</li>
                </ul>
            </div>

            <h3>증여세 신고 기한</h3>
            <p>
                <span class="icon">⚡</span> <strong>증여받은 날로부터 3개월 이내에 국세청에 증여세 신고를 해야 합니다.</strong> 이 기간을 초과하면 가산세가 부과됩니다.
            </p>` },
      { heading: `첨부서류`, content: `<h3>재외국민이 증여자인 경우</h3>

            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th style="width: 40%;">귀국한 경우</th>
                        <th style="width: 40%;">미귀국인 경우</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>증여 위임장</strong></td>
                        <td>
                            • 본인 서명 또는 인감도장 날인<br>
                            • 인감증명서 첨부<br>
                            • 인감증명서 2통 필요<br>
                            (등기신청용 1통, 보관용 1통)
                        </td>
                        <td>
                            • 체류국 대사관·공사관에서 공증<br>
                            • 공증된 위임장이 인감증명을 대체<br>
                            • 인감증명서 2통이 필수<br>
                            (등기예규 제1778호 제5조 제3항)
                        </td>
                    </tr>
                    <tr>
                        <td><strong>신분증명</strong></td>
                        <td>
                            • 여권 또는 주민등록증 원본 (검증용)<br>
                            • 사본 첨부
                        </td>
                        <td>
                            • 여권 사본 필수<br>
                            • 원본 검증 불가능하므로<br>
                              공증된 사본 권장
                        </td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>
                            • 주민등록등본(귀국 후), 또는<br>
                            • 재외국민등록부 등본
                        </td>
                        <td>
                            • 재외국민등록부 등본, 또는<br>
                            • 재외공관 거주확인서<br>
                            (최신 발급본)
                        </td>
                    </tr>
                    <tr>
                        <td><strong>등기필증</strong></td>
                        <td colspan="2">원본 필수 첨부 또는 등기필정보 미보유 기재</td>
                    </tr>
                    <tr>
                        <td><strong>증여계약서</strong></td>
                        <td colspan="2">
                            • 증여자·수증자 서명 또는 인감도장<br>
                            • 시장·구청장 또는 읍면동장 검인 필요<br>
                            • 인지세는 불필요<br>
                            (무상계약이므로)
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 style="margin-top: 40px;">재외국민이 수증자인 경우</h3>

            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th style="width: 40%;">귀국한 경우</th>
                        <th style="width: 40%;">미귀국인 경우</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>신분증명</strong></td>
                        <td>
                            • 여권 또는 주민등록증
                        </td>
                        <td>
                            • 여권 사본<br>
                            • 공증된 사본 권장
                        </td>
                    </tr>
                    <tr>
                        <td><strong>등록번호</strong></td>
                        <td>
                            • 주민등록번호 사용<br>
                            (말소 시 재외국민등록번호)
                        </td>
                        <td>
                            • 재외국민등록번호, 또는<br>
                            • 등기소 부여번호<br>
                            (미등록 시 신청 필요)
                        </td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>
                            • 주민등록등본, 또는<br>
                            • 재외국민등록부 등본
                        </td>
                        <td>
                            • 재외국민등록부 등본, 또는<br>
                            • 재외공관 거주확인서
                        </td>
                    </tr>
                    <tr>
                        <td><strong>증여계약서</strong></td>
                        <td colspan="2">
                            • 증여자·수증자 서명 또는 인감도장<br>
                            • 시장·구청장 또는 읍면동장 검인 필수
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 style="margin-top: 30px;">주요 주의사항</h3>
            <div class="warning-box">
                <h4><span class="icon">⚠️</span> 자주 발생하는 오류</h4>
                <ul>
                    <li><strong>인감증명서 미첨부:</strong> 미귀국 상태에서 위임장에 인감을 날인했으나 인감증명서를 첨부하지 않음</li>
                    <li><strong>공증 내용 부족:</strong> 위임장 자체에 공증을 받지 않고, 공증인의 확인서만 첨부함</li>
                    <li><strong>증여계약서 검인 누락:</strong> 증여계약서에 관할 행정기관의 검인을 받지 않음</li>
                    <li><strong>주소증명 부실:</strong> 미귀국인 경우 거주확인서 대신 일반 서신을 첨부함</li>
                    <li><strong>여권 사본 미인증:</strong> 미귀국인 경우 여권 사본을 공증받지 않아 등기소에서 보정명령 발부</li>
                </ul>
            </div>` },
      { heading: `비용 안내`, content: `<p>
                증여로 인한 부동산 소유권이전등기 신청 시 다음과 같은 비용이 발생합니다. 정확한 금액은 부동산의 시가표준액 또는 공시지가에 따라 결정되므로, 국세청 위택스(www.wetax.go.kr)에서 확인하시기 바랍니다.
            </p>
            <ul>
                <li><strong>등록면허세</strong> — 1회 납부 (취득세와 유사한 개념)</li>
                <li><strong>지방교육세</strong> — 1회 납부 (등록면허세의 일정 비율)</li>
                <li><strong>농어촌특별세</strong> — 해당 지역 농지인 경우만 1회 납부</li>
                <li><strong>등기신청수수료</strong> — 1회 납부 (등기소에 선납)</li>
            </ul>
            <p style="margin-top: 20px;">
                <strong>증여세는 별도입니다.</strong> 수증자가 국세청에 신고할 때 발생하는 세금으로, 등기 신청과는 별개입니다.
            </p>
            <p>
                비용 계산: <a href="https://www.wetax.go.kr" style="color: #1a2e4a; text-decoration: underline;">위택스 홈페이지</a>에서 부동산 주소와 시가표준액을 입력하여 조회 가능
            </p>` },
      { heading: `판례 및 예규`, content: `<div class="case-box">
                <h4>등기예규 제1778호 제5조 — 재외공관 공증 적용 기준</h4>
                <p>
                    <strong>제1항:</strong> 재외국민이 국내 또는 국외에서 부동산의 증여권한을 대리인에게 수여한 경우, 대상 부동산과 증여의 목적이 되는 권리 및 대리인의 인적사항을 구체적으로 특정하여 작성한 대리위임장을 등기소에 첨부정보로 제공해야 한다.
                </p>
                <p style="margin-top: 10px;">
                    <strong>제3항:</strong> 재외국민의 증여대리위임장에는 본인이 작성했음이 틀림없다는 취지의 인감을 날인하고 인감증명을 첨부하거나, 체류국을 관할하는 대한민국 재외공관에서 인감을 날인해야 하는 서면에 공증을 받아야 한다.
                </p>
            </div>

            <div class="case-box">
                <h4>등기예규 제1778호 제9조 제1항 — 재외공관 공증의 인감증명 대체</h4>
                <p>
                    체류국을 관할하는 대한민국 재외공관에서 인감을 날인해야 하는 서면에 공증을 받았다면 인감증명을 제출할 필요가 없다.
                </p>
                <p style="margin-top: 10px; color: #666;">
                    단, 제9조 제3항에서 위임장 자체에 공증을 받아야 한다는 요건이 있으므로, 공증인의 확인서만으로는 부족하고 위임장 문서 자체에 공증 표시가 있어야 한다.
                </p>
            </div>

            <div class="case-box">
                <h4>등기선례 5-59 — 공증 대상 서면의 범위</h4>
                <p>
                    위임장 멸실 시 공증을 받아야 할 서면은 법무사 등의 수임인에 대한 확인서면이 아닌 대리권한을 증명하는 서면인 증여 위임장이어야 한다. 공증 내용은 증여 위임장에 표시된 등기의무자의 작성부분(서명 또는 날인)이 등기의무자 자신이 작성한 것임을 확인하는 내용이어야 한다.
                </p>
            </div>` },
      { heading: `자주 발생하는 문제와 해결책`, content: `<div class="warning-box">
                <h4><span class="icon">⚠️</span> 문제 1: 공증 방식 오류 (가장 빈번)</h4>
                <p><strong>상황:</strong> 위임장을 재외공관에 보냈으나 "공증인의 확인서"만 받음</p>
                <p><strong>원인:</strong> 재외공관에서 위임장 문서 자체에 공증 표시를 하지 않고, 별도의 확인서만 발급함</p>
                <p><strong>해결책:</strong> 다시 공관에 요청하여 위임장 자체에 공증 표시를 받아야 함. 또는 한국 공증인 앞에서 본인이 직접 공증을 받는 방법도 있음</p>
            </div>

            <div class="warning-box">
                <h4><span class="icon">⚠️</span> 문제 2: 인감증명서 부족</h4>
                <p><strong>상황:</strong> 인감증명서 1통만 첨부했으나 등기소에서 보정명령 발부</p>
                <p><strong>원인:</strong> 재외국민 증여의 실무 관행상 인감증명서 2통(등기신청용 1통 + 보관용 1통)이 필요</p>
                <p><strong>해결책:</strong> 추가로 인감증명서 1통을 재발급받아 제출</p>
            </div>

            <div class="warning-box">
                <h4><span class="icon">⚠️</span> 문제 3: 증여계약서 검인 누락</h4>
                <p><strong>상황:</strong> 증여계약서를 제출했으나 등기소에서 "검인 필요"라며 보정명령</p>
                <p><strong>원인:</strong> 부동산 소재지 관할 시장·구청장 또는 읍면동장의 검인이 없음</p>
                <p><strong>해결책:</strong> 부동산 소재지의 해당 행정기관에 가서 증여계약서 검인을 받아 다시 제출</p>
            </div>

            <div class="warning-box">
                <h4><span class="icon">⚠️</span> 문제 4: 여권 사본 공증 미흡</h4>
                <p><strong>상황:</strong> 미귀국 수증자의 여권 사본을 제출했으나 원본 검증 불가로 보정명령</p>
                <p><strong>원인:</strong> 미귀국인 경우 원본 검증이 불가능하므로 공증된 여권 사본이 필요</p>
                <p><strong>해결책:</strong> 재외공관에서 여권 사본을 공증받거나, 한국의 공증인 사무실에서 공증을 받아 제출</p>
            </div>

            <h3 style="margin-top: 30px;">국가별 차이</h3>
            <div class="country-box">
                <h4>아포스티유 협약 가입국 vs 미가입국</h4>
                <p>
                    <strong>협약 가입국 (미국, 일본, 유럽 대부분, 캐나다 등):</strong> 여권 사본 등 공문서에 아포스티유 인증을 받을 수 있으므로, 이것으로 원본 검증을 갈음할 수 있습니다.
                </p>
                <p style="margin-top: 10px;">
                    <strong>협약 미가입국 (중국, 러시아, 동남아 일부):</strong> 아포스티유를 받을 수 없으므로, 현지 대사관·공사관에서 공증을 받아야 합니다.
                </p>
            </div>` },
      { heading: `자주 묻는 질문`, content: `<div class="qa-section">
                <div class="qa-q">Q1. 재외국민이 한국 부동산을 증여하려면 반드시 귀국해야 하나요?</div>
                <div class="qa-a">
                    아니요, 귀국할 필요가 없습니다. 재외국민이 미귀국 상태에서도 부동산을 증여할 수 있습니다. 다만, 위임장을 체류국의 대사관·공사관에서 공증을 받아야 하고, 이 공증된 위임장이 국내 인감증명을 대체합니다. 절차가 복잡하므로 법무사의 도움을 받으시는 것이 권장됩니다.
                    <p style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                        위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                    </p>
                </div>
            </div>

            <div class="qa-section">
                <div class="qa-q">Q2. 재외국민과 외국인의 부동산 증여 절차가 다른가요?</div>
                <div class="qa-a">
                    네, 크게 다릅니다. 재외국민은 한국 국적을 유지하므로 외국인토지법의 제약을 받지 않습니다. 따라서 외국인처럼 취득 신고나 허가를 받을 필요가 없습니다. 다만 주민등록이 말소되어 있으므로, 재외국민등록번호나 등기소 부여번호를 사용해야 합니다. 외국인은 인감증명 대신 아포스티유나 공증을 받아야 하는 절차에서 재외국민과 유사하지만, 국적 문제로 인한 서류 요건이 훨씬 복잡합니다.
                    <p style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                        위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                    </p>
                </div>
            </div>

            <div class="qa-section">
                <div class="qa-q">Q3. 인감증명서 2통이 왜 필요하나요?</div>
                <div class="qa-a">
                    재외국민 증여의 실무 관행상 인감증명서는 등기신청용 1통 외에 보관용 1통이 추가로 필요합니다. 이는 등기소가 증여 위임장의 진정성을 입증하기 위해 인감증명서를 보관하기 때문입니다. 공식 법령에는 명시되어 있지 않지만, 실무상 대부분의 등기소에서 요구합니다. 따라서 미리 2통을 준비하는 것이 보정명령을 피하는 최선의 방법입니다.
                    <p style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                        위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                    </p>
                </div>
            </div>

            <div class="qa-section">
                <div class="qa-q">Q4. <span class="icon">⚡</span> 증여세 신고는 언제까지 해야 하나요?</div>
                <div class="qa-a">
                    증여받은 날로부터 3개월 이내에 국세청에 증여세 신고를 해야 합니다. 이 기간을 초과하면 과태료가 부과됩니다. 재외국민이 수증자인 경우, 한국에 거주하지 않으므로 신고를 놓치기 쉽습니다. 등기 신청 후 가능한 한 빨리 국세청에 신고하시기 바랍니다. 신고 방법은 국세청 홈택스(www.hometax.go.kr)나 세무사의 도움을 받아 진행할 수 있습니다.
                    <p style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                        위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                    </p>
                </div>
            </div>

            <div class="qa-section">
                <div class="qa-q">Q5. 미귀국 상태에서 증여할 때, 인감을 어디서 날인해야 하나요?</div>
                <div class="qa-a">
                    체류국의 대사관·공사관에서 위임장에 인감을 날인하거나 서명하면 됩니다. 이 재외공관의 인증이 국내 인감증명을 대체합니다. 다만, 위임장 자체에 공증을 받아야 하며, 공증인의 확인서만으로는 부족합니다. 재외공관에 요청할 때는 "위임장 공증"이라고 명확히 지시하고, 공증 완료 후 위임장 문서 자체에 공증 표시가 있는지 확인해야 합니다.
                    <p style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                        위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                    </p>
                </div>
            </div>

            <div class="qa-section">
                <div class="qa-q">Q6. 재외국민이 수증자인 경우 주민등록번호를 쓸 수 없다면 무엇을 대신 쓰나요?</div>
                <div class="qa-a">
                    재외국민 수증자의 경우 다음 중 하나를 사용합니다: (1) 재외국민등록번호 — 외교부에 등록된 번호, (2) 등기소 부여번호 — 재외국민등록번호가 없는 경우 등기소가 새로 부여합니다. 가능하면 사전에 외교부에 재외국민등록을 하여 번호를 받는 것이 좋습니다. 번호가 없으면 등기소가 이를 인지하고 부여하므로 절차가 지연될 수 있습니다.
                    <p style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                        위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                    </p>
                </div>
            </div>

            <div class="qa-section">
                <div class="qa-q">Q7. 증여계약서 검인은 어디서 어떻게 받나요?</div>
                <div class="qa-a">
                    부동산 소재지를 관할하는 시장·구청장 또는 읍면동장으로부터 받습니다. 일반적으로는 읍면동사무소의 민원실에서 처리합니다. 검인을 신청할 때는 계약서 원본과 쌍방의 신분증, 그리고 부동산 위치도를 지참하면 됩니다. 검인은 대리인이 신청할 수도 있습니다. 서울·부산 등 대도시의 경우 구청, 군 지역의 경우 읍면동사무소에서 처리합니다. 처리 시간은 일반적으로 당일 또는 다음 날입니다.
                    <p style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                        위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.
                    </p>
                </div>
            </div>` },
    ],
    laws: [
      { name: `등기예규 제1778호 제5조 — 재외공관 공증 적용 기준`, desc: `제1항: 재외국민이 국내 또는 국외에서 부동산의 증여권한을 대리인에게 수여한 경우, 대상 부동산과 증여의 목적이 되는 권리 및 대리인의 인적사항을 구체적으로 특정하여 작성한 대리위임장을 등기소에 첨부정보로 제공해야 한다.` },
      { name: `등기예규 제1778호 제9조 제1항 — 재외공관 공증의 인감증명 대체`, desc: `체류국을 관할하는 대한민국 재외공관에서 인감을 날인해야 하는 서면에 공증을 받았다면 인감증명을 제출할 필요가 없다.` },
      { name: `등기선례 5-59 — 공증 대상 서면의 범위`, desc: `위임장 멸실 시 공증을 받아야 할 서면은 법무사 등의 수임인에 대한 확인서면이 아닌 대리권한을 증명하는 서면인 증여 위임장이어야 한다. 공증 내용은 증여 위임장에 표시된 등기의무자의 작성부분(서명 또는 날인)이 등기의무자 자신이 작성한 것임을 확인하는 내용이어야 한다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-22',
    title: "경정등기",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<ul class="checklist">
                <li>공동상속등기가 완료된 부동산을 협의분할로 처리하려는 경우</li>
                <li>상속인 중 1인이 단독으로 부동산을 소유하기로 합의한 경우</li>
                <li>외국인 또는 재외국민이 상속인에 포함되어 있는 경우</li>
                <li>이미 완료된 상속등기를 정정하는 절차가 궁금한 경우</li>
                <li>경정등기 신청 시 필요한 서류와 절차를 알고 싶은 경우</li>
                <li>이해관계인 처리에 대해 확인하고 싶은 경우</li>
            </ul>
        </section>

        <!-- ========== 2. 핵심 요약 ========== -->
        <section>
            <div class="summary-box">
                <h3 style="margin-top: 0; color: #2d4a7a;">핵심 요약</h3>
                <p><strong>경정등기</strong>는 공동상속등기가 완료된 부동산을 상속인들의 협의분할에 따라 특정 1인이 단독 소유하도록 이미 완료된 등기의 일부 내용을 정정하는 등기입니다.</p>
                <p>상속등기를 말소하고 새로 등기하는 것이 아니라, 등기부에 기재된 내용을 정정하므로 더욱 간편하고 비용 효율적입니다.</p>
                <p><strong>외국인이나 재외국민이 포함된 경우</strong> 신분 확인 및 서명 인증 방식이 달라지므로, 국적·체류 자격·입국 여부에 따라 준비 서류를 달리해야 합니다.</p>
            </div>` },
      { heading: `경정등기란?`, content: `<h3>공동상속등기 후 협의분할</h3>
            <p>상속인이 2명 이상인 경우, 법정상속분에 따라 각 상속인이 공동으로 소유하는 등기(공동상속등기)가 먼저 완료됩니다. 이후 상속인들이 합의하여 특정 부동산을 1인이 단독으로 소유하기로 결정한 경우, 이를 반영하기 위해 이미 완료된 등기를 정정합니다.</p>

            <dl class="definition-list">
                <dt>경정등기의 의미</dt>
                <dd>이미 완료된 등기의 일부 내용을 정정하는 등기로서, 상속등기를 말소하고 새로 등기하는 방식이 아닙니다. 공동상속의 등기사항을 협의분할 결과에 따라 수정하는 절차입니다.</dd>

                <dt>법령 근거</dt>
                <dd>
                    <strong>등기예규 제1675호</strong> — 공동상속 후 협의분할에 의한 경정등기 처리 기준<br>
                    <strong>등기예규 제1795호</strong> — 경정등기 관할에 관한 특례 규정<br>
                    <strong>등기예규 제1835호 제25조</strong> — 이해관계인 처리
                </dd>

                <dt>경정등기의 장점</dt>
                <dd>
                    • 상속등기 말소 후 신규 등기보다 비용이 저렴<br>
                    • 등기 절차가 간단하고 신속<br>
                    • 등기부의 연속성 유지
                </dd>
            </dl>` },
      { heading: `경정등기 절차 흐름도`, content: `<div class="flow-diagram">
                <div class="flow-step">공동상속<br/>등기 완료</div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">상속재산<br/>분할협의</div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">필요 서류<br/>준비</div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">부동산<br/>관할청에<br/>신청</div>
                <div class="flow-arrow">↓</div>
                <div class="flow-step">경정등기<br/>완료</div>
            </div>

            <h3>단계별 상세 절차</h3>
            <ul class="steps">
                <li>
                    <strong>1단계: 상속재산 분할협의서 작성</strong>
                    모든 상속인이 참여하여 누가 어느 부동산을 소유할 것인지 합의하고, 협의서를 작성합니다. 외국인·재외국민의 경우 국적별로 서명 인증 방식이 달라집니다.
                </li>
                <li>
                    <strong>2단계: 필요 서류 수집</strong>
                    신분증명, 주소증명, 인감증명서(또는 공증), 이해관계인 승낙서 등을 준비합니다. 외국인·재외국민의 경우 추가 서류가 필요할 수 있습니다.
                </li>
                <li>
                    <strong>3단계: 경정등기 신청</strong>
                    부동산 소재지 관할 등기소에 신청합니다. 대리인을 통해 신청할 수 있습니다.
                </li>
                <li>
                    <strong>4단계: 등기 완료</strong>
                    등기소에서 필요한 경우 추가 서류를 요청할 수 있으며, 모든 서류가 완비되면 경정등기가 완료됩니다.
                </li>
            </ul>` },
      { heading: `이해관계인 처리`, content: `<h3>이해관계인이란?</h3>
            <p>등기사항의 변경으로 인하여 불이익을 받을 수 있는 자를 의미합니다. 부동산에 설정된 근저당권, 가압류권, 압류권 등의 소유자가 해당됩니다.</p>

            <h3>이해관계인 승낙서의 필요 여부</h3>
            <table>
                <thead>
                    <tr>
                        <th>상황</th>
                        <th>승낙서 필요 여부</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>이해관계인이 없는 경우</td>
                        <td>불필요</td>
                        <td>부동산에 담보권이 설정되지 않은 경우</td>
                    </tr>
                    <tr>
                        <td>이해관계인이 있는 경우</td>
                        <td>필요</td>
                        <td>근저당권자 등의 승낙서를 첨부해야 함</td>
                    </tr>
                    <tr>
                        <td>이해관계인이 승낙을 거부하는 경우</td>
                        <td>특별 절차 필요</td>
                        <td>법원의 허가를 받거나 다른 방법 검토</td>
                    </tr>
                </tbody>
            </table>

            <h3>외국인·재외국민 이해관계인 처리</h3>
            <p>이해관계인이 외국인 또는 재외국민인 경우, 국적별·체류 여부별로 서명 인증 방식이 달라집니다.</p>
            <ul style="margin-left: 20px; color: #666;">
                <li><strong>국내 거주 외국인:</strong> 인감 날인 + 인감증명서 (대사관·영사관에서 발급)</li>
                <li><strong>해외 거주 외국인:</strong> 재외공관 공증 또는 아포스티유</li>
                <li><strong>재외국민:</strong> 국가·체류 지역에 따라 공증 또는 아포스티유</li>
            </ul>` },
      { heading: `첨부서류`, content: `<h3>국내 거주자 vs. 외국인·재외국민</h3>
            <table>
                <thead>
                    <tr>
                        <th>서류</th>
                        <th>국내 거주자</th>
                        <th>해외 거주 외국인·재외국민</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>상속재산분할협의서</strong></td>
                        <td>인감 날인 + 인감증명서</td>
                        <td>재외공관 공증 또는 아포스티유</td>
                    </tr>
                    <tr>
                        <td><strong>이해관계인 승낙서</strong></td>
                        <td>인감 날인 + 인감증명서</td>
                        <td>재외공관 공증 또는 아포스티유</td>
                    </tr>
                    <tr>
                        <td><strong>신분증명</strong></td>
                        <td>주민등록증 사본 또는 여권</td>
                        <td>여권 사본 (공증 필요)</td>
                    </tr>
                    <tr>
                        <td><strong>주소증명</strong></td>
                        <td>주민등록등본</td>
                        <td>재외국민등록부 등본 또는 거주확인서</td>
                    </tr>
                    <tr>
                        <td><strong>기타 서류</strong></td>
                        <td>상속등기부 등본, 상속인 확인 서류</td>
                        <td>상동</td>
                    </tr>
                </tbody>
            </table>

            <h3>아포스티유와 공증</h3>
            <p><strong>아포스티유(Apostille):</strong> 외국의 공문서가 국내에서 효력을 갖도록 하기 위한 국제 인증서입니다. 헤이그 협약 가입국의 문서에 필요합니다.</p>
            <p><strong>공증(Notarization):</strong> 재외공관(대사관·영사관)에서 문서의 진정성을 증명하는 절차입니다. 헤이그 협약 비가입국의 문서나 추가 증명이 필요한 경우 사용됩니다.</p>

            <div class="warning-box">
                <strong>주의: 국가별 요구 서류 차이</strong>
                <p>외국인·재외국민이 서명한 서류는 국가별로 요구되는 인증 방식이 다릅니다. 사전에 부동산 관할청 또는 법무사와 상담하여 정확한 서류를 준비해야 불필요한 재작성을 막을 수 있습니다.</p>
            </div>` },
      { heading: `이해관계인 승낙서 처리`, content: `<h3>승낙서의 역할</h3>
            <p>경정등기 신청 시 이해관계인이 존재하면, 이해관계인의 승낙서를 첨부해야 합니다. 이는 등기 변경으로 인한 불이익을 감수한다는 의사를 표시하는 중요한 서류입니다.</p>

            <h3>승낙서 작성 시 주의사항</h3>
            <ul class="steps">
                <li>
                    <strong>정확한 이해관계인 파악</strong>
                    근저당권자, 가압류권자, 압류권자 등 모든 이해관계인을 정확히 파악하여 각각의 승낙서를 받아야 합니다.
                </li>
                <li>
                    <strong>서명 인증 방식 준수</strong>
                    국내 거주자는 인감증명서, 외국인·재외국민은 재외공관 공증 또는 아포스티유를 받아야 합니다.
                </li>
                <li>
                    <strong>부동산 특정</strong>
                    승낙서에는 부동산의 정확한 소재지, 지목, 지번, 면적 등을 명확히 기재해야 합니다.
                </li>
                <li>
                    <strong>서명 날짜</strong>
                    경정등기 신청 직전에 서명하는 것이 좋으므로, 너무 오래전에 받은 승낙서는 다시 받는 것이 바람직합니다.
                </li>
            </ul>

            <h3>승낙을 받을 수 없는 경우</h3>
            <p>이해관계인이 승낙을 거부하거나 행방이 불명인 경우:</p>
            <ul style="margin-left: 20px; color: #666;">
                <li><strong>법원의 허가:</strong> 가정법원에 경정등기 허가 신청</li>
                <li><strong>담보권 말소:</strong> 사전에 근저당권 등을 말소하고 경정등기 신청</li>
                <li><strong>대금 지급:</strong> 이해관계인과 합의하여 대금을 지급하고 승낙 취득</li>
            </ul>` },
      { heading: `주의사항`, content: `<div class="warning-box">
                <strong>협의분할협의서의 효력</strong>
                <p>상속재산분할협의는 모든 상속인의 서명과 인감증명이 필요합니다. 1인이라도 참여하지 않으면 협의 자체가 성립되지 않습니다.</p>
            </div>

            <div class="warning-box">
                <strong>외국인·재외국민의 서명 인증</strong>
                <p>국내 거주 외국인은 재외공관에서 인감증명서를 받아야 하며, 해외 거주 외국인이나 재외국민은 현지 재외공관에서 공증을 받거나 아포스티유를 첨부해야 합니다. 이를 잘못하면 등기소에서 반려될 수 있습니다.</p>
            </div>

            <div class="warning-box">
                <strong>다른 상속인의 권리 침해 우려</strong>
                <p>협의분할로 1인이 부동산을 단독 소유하게 되면, 다른 상속인들의 상속 지분이 사라집니다. 따라서 상속인들 간 충분한 협의 및 대금 정산이 이루어져야 분쟁이 생기지 않습니다.</p>
            </div>

            <div class="warning-box">
                <strong>등기예규 변경 확인</strong>
                <p>등기 관련 예규는 수시로 변경될 수 있습니다. 경정등기 신청 직전에 관할 등기소 또는 법무사와 최신 내용을 확인하시기 바랍니다.</p>
            </div>

            <div class="warning-box">
                <strong>조세 문제</strong>
                <p>협의분할로 인한 이전등기 시 증여세나 양도소득세 등 세금 문제가 발생할 수 있습니다. 세무사와 함께 검토하여 세금 최소화 방안을 모색하시기 바랍니다.</p>
            </div>` },
      { heading: `판례·예규`, content: `<div class="precedent-box">
                <strong>등기예규 제1675호</strong>
                <p><strong>제목:</strong> 공동상속 후 협의분할에 의한 경정등기</p>
                <p><strong>내용:</strong> 공동상속인이 상속재산분할협의를 통해 특정 부동산을 1인이 단독으로 소유하기로 합의한 경우, 이미 완료된 공동상속등기를 정정하는 경정등기로 처리한다는 기준을 제시하고 있습니다.</p>
            </div>

            <div class="precedent-box">
                <strong>등기예규 제1795호</strong>
                <p><strong>제목:</strong> 경정등기 관할에 관한 특례</p>
                <p><strong>내용:</strong> 경정등기는 원칙적으로 부동산 소재지의 관할 등기소에 신청하되, 특정 경우 다른 등기소에서도 신청할 수 있다는 특례 규정을 두고 있습니다.</p>
            </div>

            <div class="precedent-box">
                <strong>등기예규 제1835호 제25조</strong>
                <p><strong>제목:</strong> 이해관계인의 승낙</p>
                <p><strong>내용:</strong> 부동산에 설정된 담보권자 등 이해관계인의 승낙서를 첨부해야 경정등기가 가능하다는 절차 기준을 정하고 있습니다.</p>
            </div>

            <div class="precedent-box">
                <strong>대법원 판례 — 상속재산분할협의의 성립 요건</strong>
                <p><strong>핵심:</strong> 상속재산분할협의는 모든 상속인이 참여하여 합의한 경우에만 효력이 발생합니다. 일부 상속인을 제외한 협의는 무효입니다.</p>
            </div>` },
    ],
    laws: [
      { name: `등기예규 제1675호`, desc: `제목: 공동상속 후 협의분할에 의한 경정등기` },
      { name: `등기예규 제1795호`, desc: `제목: 경정등기 관할에 관한 특례` },
      { name: `등기예규 제1835호 제25조`, desc: `제목: 이해관계인의 승낙` },
      { name: `대법원 판례 — 상속재산분할협의의 성립 요건`, desc: `핵심: 상속재산분할협의는 모든 상속인이 참여하여 합의한 경우에만 효력이 발생합니다. 일부 상속인을 제외한 협의는 무효입니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-23',
    title: "외국인·재외국민 등기부변경·경정등기",
    meta: "",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist">
                <h3>이런 분께 필요합니다</h3>
                <div class="checklist-items">
                    <div class="checklist-item">외국 국적을 취득한 경우</div>
                    <div class="checklist-item">한국 국적을 회복한 경우</div>
                    <div class="checklist-item">등기부상 주소가 변경된 경우</div>
                    <div class="checklist-item">등기부상 성명이 개명된 경우</div>
                    <div class="checklist-item">등기부상 정보 오류가 발견된 경우</div>
                    <div class="checklist-item">영문 성명 표기가 잘못된 경우</div>
                </div>
            </div>` },
      { heading: `변경등기 vs 경정등기`, content: `<table class="comparison-table">
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>변경등기</th>
                        <th>경정등기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="label">정의</td>
                        <td>등기 완료 후 발생한 사실의 변경을 등기부에 반영</td>
                        <td>등기 당시부터 잘못된 내용을 정정</td>
                    </tr>
                    <tr>
                        <td class="label">발생 시점</td>
                        <td>등기 이후에 발생</td>
                        <td>등기 당시부터 존재</td>
                    </tr>
                    <tr>
                        <td class="label">예시</td>
                        <td>주소 이전, 개명 후 성명 변경, 국적 변경</td>
                        <td>이름 영문 표기 오류, 주소 기재 오류, 한자 표기 오류</td>
                    </tr>
                    <tr>
                        <td class="label">증명서류</td>
                        <td>새로운 상태를 증명하는 서류 (주소증명, 개명 허가 결정문 등)</td>
                        <td>정확한 내용을 증명하는 서류 (여권, 국제 공증, 번역 공증)</td>
                    </tr>
                    <tr>
                        <td class="label">신청권자</td>
                        <td>일반적으로 신청인 또는 등기관 직권</td>
                        <td>신청인 또는 등기관 직권</td>
                    </tr>
                </tbody>
            </table>` },
      { heading: `변경·경정등기 절차 흐름`, content: `<h3>변경등기</h3>
            <div class="flowchart">
                <div class="flow-step">상황 발생</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">필수 서류 준비</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">등기소에 신청</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">등기부 변경 반영</div>
            </div>

            <p style="text-align: center; font-size: 13px; color: #666; margin-top: 10px;">
                (예: 주소 이전 시 주소증명서류 → 등기소 제출 → 등기부 주소 변경)
            </p>

            <h3>경정등기</h3>
            <div class="flowchart">
                <div class="flow-step">오류 발견</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">증명서류 확보</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">등기소 신청</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">등기부 내용 정정</div>
            </div>

            <p style="text-align: center; font-size: 13px; color: #666; margin-top: 10px;">
                (예: 영문 성명 오류 발견 → 여권 원본 제출 → 경정등기 신청)
            </p>` },
      { heading: `국적 변경 등기`, content: `<h3>한국인이 외국 국적을 취득한 경우</h3>

            <h4>절차</h4>
            <ol>
                <li><strong>국적 취득 증명서 준비:</strong> 외국 정부에서 발급한 국적 취득 증명서 또는 귀화 허가 증명서를 준비합니다.</li>
                <li><strong>번역문 작성:</strong> 외국어 서류는 국내 공인 번역가에 의한 공증 번역문을 첨부합니다.</li>
                <li><strong>등기소 신청:</strong> 담당 등기소에 변경등기 신청서와 함께 증명 서류를 제출합니다.</li>
                <li><strong>등기부 변경:</strong> 등기관이 국적 정보 변경 및 주민등록번호 처리를 반영합니다.</li>
            </ol>

            <div class="warning-box">
                <h4>주의사항</h4>
                <p>외국 국적 취득 후 한국 국적을 자동 상실합니다. 등기부상 주민등록번호가 있는 경우, 등기관이 직권으로 처리할 수도 있습니다(등기예규 제1675호 참조).</p>
            </div>

            <h3>외국인이 한국 국적을 회복한 경우</h3>

            <h4>절차</h4>
            <ol>
                <li><strong>국적 회복 증명서 준비:</strong> 법무부 국적과에서 발급한 국적 회복 증명서를 준비합니다.</li>
                <li><strong>새로운 주민등록번호 취득:</strong> 국적 회복 후 새로운 주민등록번호를 발급받습니다.</li>
                <li><strong>등기소 신청:</strong> 변경등기 신청서와 국적 회복 증명서, 주민등록증 등본을 제출합니다.</li>
                <li><strong>등기부 변경:</strong> 등기부상 국적 정보와 주민등록번호가 변경됩니다.</li>
            </ol>

            <div class="case-box">
                <h4>사례: 외국 국적 취득 후 등기부 변경</h4>
                <p>한국인 A가 미국 국적을 취득했습니다. A가 소유한 부동산의 등기부에는 여전히 한국 국적과 주민등록번호가 기재되어 있습니다. A는 미국 정부의 국적 취득 증명서(번역문)를 첨부하여 변경등기를 신청합니다. 등기관이 등기부상 국적 정보를 변경 처리하고, 주민등록번호를 삭제 또는 별도 표기합니다.</p>
            </div>` },
      { heading: `주소 변경 등기`, content: `<h4>적용 대상</h4>
            <p>외국인 또는 재외국민의 등기부상 주소가 다음 사항으로 변경된 경우에 적용됩니다:</p>
            <ul>
                <li>국내 주소 변경 (시·도, 구·군 변경)</li>
                <li>국외 주소로 변경 (거주지 변경)</li>
                <li>외국인등록증상 주소 변경</li>
                <li>재외국민등록부상 주소 변경</li>
            </ul>

            <h4>절차</h4>
            <ol>
                <li><strong>새로운 주소증명 서류 준비:</strong>
                    <ul style="margin-left: 30px; margin-top: 10px;">
                        <li>국내 주소: 주민등록등본, 건물등기부등본, 임차 계약서</li>
                        <li>국외 주소: 재외국민등록부 등본, 외국 정부 주소 증명서류</li>
                    </ul>
                </li>
                <li><strong>번역문 첨부:</strong> 외국 서류는 번역공증을 받습니다.</li>
                <li><strong>등기소 신청:</strong> 변경등기 신청서와 함께 새 주소증명 서류를 제출합니다.</li>
                <li><strong>등기부 반영:</strong> 등기부상 주소가 변경됩니다.</li>
            </ol>

            <div class="regulation-box">
                <h4>등기예규 제1795호 참조</h4>
                <p>등기예규 제1795호는 외국인·재외국민의 주소 변경·경정등기에 대한 관할 특례를 규정하고 있습니다. 특정 경우 다른 등기소에서도 신청 가능할 수 있으므로 사전 문의가 필요합니다.</p>
            </div>

            <div class="case-box">
                <h4>사례: 국외 거주지 변경</h4>
                <p>재외국민 B가 싱가포르에서 홍콩으로 이사했습니다. 등기부상의 싱가포르 주소를 홍콩 주소로 변경하고자 합니다. B는 홍콩의 재외국민등록부 등본 및 거주지 증명서(번역공증)를 첨부하여 주소 변경등기를 신청합니다.</p>
            </div>` },
      { heading: `성명 변경 등기`, content: `<h3>개명으로 인한 성명 변경</h3>

            <h4>절차</h4>
            <ol>
                <li><strong>법원 개명 허가:</strong> 가정법원에 개명 신청을 하여 개명 허가 결정을 받습니다.</li>
                <li><strong>개명 허가 결정문 준비:</strong> 가정법원의 개명 허가 결정문 정본을 준비합니다.</li>
                <li><strong>등기소 신청:</strong> 변경등기 신청서와 함께 개명 허가 결정문을 제출합니다.</li>
                <li><strong>등기부 성명 변경:</strong> 등기부상의 성명이 새로운 이름으로 변경됩니다.</li>
            </ol>

            <h3>외국인의 영문 성명 표기 오류 경정</h3>

            <h4>절차</h4>
            <ol>
                <li><strong>여권 원본 확인:</strong> 외국인의 여권을 원본으로 확인하여 올바른 영문 성명을 확인합니다.</li>
                <li><strong>등기부와 대조:</strong> 등기부상 기재된 영문 성명과 여권상 성명의 차이를 확인합니다.</li>
                <li><strong>경정등기 신청:</strong> 여권 사본 및 번역문을 첨부하여 경정등기를 신청합니다.</li>
                <li><strong>등기부 정정:</strong> 등기부상의 영문 성명이 정정됩니다.</li>
            </ol>

            <div class="warning-box">
                <h4>주의사항</h4>
                <p>영문 성명은 여권 기재 내용을 기준으로 합니다. 국제거래, 계약, 법적 효력 있는 서류에서 사용되므로 정확한 표기가 매우 중요합니다.</p>
            </div>

            <div class="case-box">
                <h4>사례: 한자 성명 표기 오류 정정</h4>
                <p>중국 국적 C는 '李'를 '李'가 아닌 다른 한자로 잘못 기재했습니다. C의 국내 여권 번역본 및 원본 여권을 첨부하여 경정등기를 신청합니다. 등기부상의 한자 성명이 정정됩니다.</p>
            </div>` },
      { heading: `변경·경정등기 필수 첨부서류`, content: `<table class="document-table">
                <thead>
                    <tr>
                        <th>변경/경정 사유</th>
                        <th>필수 첨부서류</th>
                        <th>추가 사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="category">국내 주소 변경</td>
                        <td>
                            • 새로운 주소증명 서류<br>
                            (주민등록등본, 건물등기부등본, 임차계약서 등)
                        </td>
                        <td>— 외국인등록증 등본 첨부 권고</td>
                    </tr>
                    <tr>
                        <td class="category">국외 주소 변경</td>
                        <td>
                            • 재외국민등록부 등본<br>
                            • 외국 정부의 주소 증명서<br>
                            • 번역공증문
                        </td>
                        <td>— 외국 서류는 반드시 번역공증 첨부</td>
                    </tr>
                    <tr>
                        <td class="category">성명 변경<br>(개명)</td>
                        <td>
                            • 가정법원 개명 허가 결정문 정본<br>
                            • 신분증(여권, 외국인등록증 등)
                        </td>
                        <td>— 결정문은 정본 필수 (사본 불가)</td>
                    </tr>
                    <tr>
                        <td class="category">성명 경정<br>(영문/한자 오류)</td>
                        <td>
                            • 여권 사본<br>
                            • 여권 번역공증문<br>
                            • 국제공증(필요시)
                        </td>
                        <td>— 여권상 성명이 증거 기준</td>
                    </tr>
                    <tr>
                        <td class="category">국적 취득<br>(외국 국적)</td>
                        <td>
                            • 외국 정부의 국적 취득 증명서<br>
                            • 귀화 허가증<br>
                            • 번역공증문
                        </td>
                        <td>— 외국어 서류는 번역공증 필수</td>
                    </tr>
                    <tr>
                        <td class="category">국적 회복<br>(한국 국적)</td>
                        <td>
                            • 법무부 국적 회복 증명서<br>
                            • 새로운 주민등록증<br>
                            • 신분증
                        </td>
                        <td>— 국적 회복 증명서는 법무부 국적과 발급</td>
                    </tr>
                </tbody>
            </table>` },
      { heading: `관련 판례 및 예규`, content: `<div class="regulation-box">
                <h4>등기예규 제1675호</h4>
                <p><code>외국인·재외국민의 성명·국적 정정등기 처리 기준</code></p>
                <p>외국인 또는 재외국민이 등기부상의 성명, 국적, 주민등록번호 정정을 신청할 때의 처리 기준을 제시합니다. 여권, 국제공증, 번역공증 등 각종 증명서류의 효력과 처리 절차를 규정합니다.</p>
            </div>

            <div class="regulation-box">
                <h4>등기예규 제1795호</h4>
                <p><code>외국인·재외국민의 주소 변경·경정등기 관할 특례</code></p>
                <p>외국인·재외국민의 주소 변경·경정등기에 대한 관할 등기소를 특정합니다. 경우에 따라 다른 등기소에서 신청할 수 있으므로, 사전에 관할 등기소 확인이 필요합니다.</p>
            </div>

            <div class="regulation-box">
                <h4>등기예규 제1835호 제25조</h4>
                <p><code>이해관계인 동의 요건</code></p>
                <p>변경·경정등기 시 다른 이해관계인(공동소유자, 저당권자 등)의 동의 또는 승낙 여부를 규정합니다. 경우에 따라 이해관계인 승낙서 준비가 필요할 수 있습니다.</p>
            </div>` },
    ],
    laws: [
      { name: `등기예규 제1675호`, desc: `외국인·재외국민의 성명·국적 정정등기 처리 기준` },
      { name: `등기예규 제1795호`, desc: `외국인·재외국민의 주소 변경·경정등기 관할 특례` },
      { name: `등기예규 제1835호 제25조`, desc: `이해관계인 동의 요건` },
    ],
    forms: [],
  },
  {
    id: 'fi-24',
    title: "외국인·재외국민 관련 대위등기",
    meta: "",
    sections: [
      { heading: `대위등기의 개념과 법적 근거`, content: `<h3>2-1. 대위등기란?</h3>
        <p><strong>대위등기</strong>는 채권자가 자신의 채권을 보전하기 위해 채무자의 등기신청 권리를 대신 행사하는 등기입니다. 다음과 같은 법적 근거에 따릅니다.</p>

        <h4>법령 근거</h4>
        <ul>
            <li><strong>민법 제404조 제1항:</strong> "채권자는 자기의 채권을 보전하기 위하여 채무자의 권리를 행사할 수 있다"</li>
            <li><strong>부동산등기법 제28조 제1항:</strong> "채권자는 민법 제404조에 따라 채무자를 대위하여 등기를 신청할 수 있다"</li>
            <li><strong>등기선례 8-32 (2005. 12. 23):</strong> 금전채권의 기초 위에서 대위등기 가능</li>
            <li><strong>등기선례 7-132 (2002. 11. 29):</strong> 외국인·재외국민 관련 대위등기 기준</li>
        </ul>

        <h3>2-2. 대위등기 가능 범위</h3>
        <p>대위등기는 등기신청을 통해 이루어지는 모든 유형의 등기에 적용 가능합니다.</p>

        <table>
            <thead>
                <tr>
                    <th>등기 유형</th>
                    <th>설명</th>
                    <th>외국인·재외국민 해당 여부</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>소유권이전등기</td>
                    <td>매도인이 등기를 거부할 때 매수인이 대위 신청</td>
                    <td>가능</td>
                </tr>
                <tr>
                    <td>상속등기</td>
                    <td>상속인이 미처 등기하지 않은 상태에서 채권자가 대위 신청</td>
                    <td>가능</td>
                </tr>
                <tr>
                    <td>보존등기</td>
                    <td>미등기 부동산의 보존등기를 대위 신청</td>
                    <td>가능</td>
                </tr>
                <tr>
                    <td>변경·경정등기</td>
                    <td>등기 내용 수정이 필요할 때</td>
                    <td>가능</td>
                </tr>
                <tr>
                    <td>근저당 말소등기</td>
                    <td>채무자가 말소하지 않으려 할 때</td>
                    <td>가능</td>
                </tr>
            </tbody>
        </table>

        <h3>2-3. 대위등기의 기본 원리</h3>
        <p>대위등기는 두 가지 방식으로 진행됩니다.</p>

        <ul>
            <li><strong>협력 방식 (①):</strong> 등기의무자(예: 매도인)가 등기에 협력하는 경우, 채권자와 등기의무자가 함께 신청</li>
            <li><strong>비협력 방식 (②):</strong> 등기의무자가 협력하지 않는 경우, 채권자가 채무자를 상대로 소송을 제기하여 판결을 얻은 후 단독으로 신청</li>
            <li><strong>독립 방식 (③):</strong> 채무자 혼자 신청할 수 있는 등기(상속등기, 보존등기 등)를 대위 신청</li>
        </ul>` },
      { heading: `외국인·재외국민 관련 대위등기 사례`, content: `<div class="case-box">
            <h4>사례 1: 외국인 매도인 미협력 시 소유권이전등기</h4>
            <p><strong>상황:</strong> 한국에 거주하는 A씨가 미국 시민권자 B로부터 서울 아파트를 2023년 1월에 5억 원에 매수했습니다. 계약금과 중도금은 전액 지급했으나, B가 미국으로 돌아가 등기에 협력하지 않고 연락도 두절되었습니다. A씨는 B를 상대로 소유권이전등기청구 소송을 제기하여 승소 판결을 받았습니다.</p>

            <p><strong>대위등기 진행:</strong></p>
            <ul>
                <li>A씨는 판결을 기초로 B(채무자)를 대위하여 현재 소유권자를 상대로 소유권이전등기를 신청</li>
                <li>B가 외국인이지만, A는 판결을 첨부하면 B의 신분증명 서류 없이도 신청 가능</li>
                <li>취득세는 A가 납부</li>
            </ul>
        </div>

        <div class="case-box">
            <h4>사례 2: 재외국민 상속인의 채권자 대위신청</h4>
            <p><strong>상황:</strong> 대한민국 국적을 유지하면서 캐나다에 정착한 C씨(재외국민)의 아버지가 2023년 서울에서 사망했습니다. 아버지는 광진구 아파트와 토지를 소유했으나, C는 상속등기를 미처 하지 않았습니다. C에 대한 채권자 D씨는 채권 확보를 위해 압류를 앞두고 있습니다.</p>

            <p><strong>대위등기 진행:</strong></p>
            <ul>
                <li>D는 C(재외국민)를 대위하여 상속등기를 신청</li>
                <li>C의 호적등본(또는 기본증명서)은 국내에서 발급받거나 영사 공증을 통해 확보</li>
                <li>사망 사실 증명, 상속인 신분, 대위원인 증명 서류 필요</li>
                <li>등기 완료 후 D가 압류 신청 가능</li>
            </ul>
        </div>

        <div class="case-box">
            <h4>사례 3: 외국인 채무자에 대한 가압류용 상속등기</h4>
            <p><strong>상황:</strong> 부산에 거주 중인 E씨는 일본 국적자 F에게 5,000만 원을 빌려주었으나 상환 기일을 넘겼습니다. F는 한국에서 사망한 친척의 부동산에 대한 상속권이 있으나 아직 상속등기를 하지 않았습니다.</p>

            <p><strong>대위등기 진행:</strong></p>
            <ul>
                <li>E는 먼저 F(외국인)를 대위하여 상속등기를 신청</li>
                <li>상속인으로 F의 신분증명 서류(여권 사본, 호적등본의 일본 번역공증본 등) 필요</li>
                <li>F가 미입국인 경우, 재외공관 발급 거주증명 또는 여권 사본으로 주소 증명</li>
                <li>상속등기 완료 후 즉시 가압류 신청</li>
            </ul>
        </div>` },
      { heading: `대위등기의 요건`, content: `<p>대위등기가 성립하려면 다음 네 가지 요건을 모두 만족해야 합니다.</p>

        <h3>요건 1: 채권자가 채권을 가져야 함</h3>
        <p><strong>피보전채권</strong>의 종류:</p>
        <ul>
            <li><strong>특정 채권:</strong> 소유권이전등기청구권 (예: 매매계약에 기한 소유권이전등기청구권)</li>
            <li><strong>금전 채권:</strong> 소비대차(차용금), 매매대금채권, 손해배상청구권 등 (증거서류 필요)</li>
        </ul>

        <p><strong>외국인·재외국민의 경우:</strong></p>
        <ul>
            <li>채권 존재의 증명이 가장 중요</li>
            <li>계약서, 차용증, 판결문 등으로 입증</li>
            <li>외국 문서의 경우 번역공증 필요할 수 있음</li>
        </ul>

        <h3>요건 2: 채무자가 등기신청권을 가져야 함</h3>
        <p>채무자(외국인·재외국민)가 법적으로 등기신청을 할 수 있는 지위에 있어야 합니다.</p>

        <table>
            <thead>
                <tr>
                    <th>상황</th>
                    <th>대위등기 가능 여부</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>상속인이 상속포기 전</td>
                    <td>가능</td>
                    <td>상속포기 가능 기간 내라도 채권자는 대위등기 신청 가능 (등기예규 1835호)</td>
                </tr>
                <tr>
                    <td>상속인이 상속포기 완료</td>
                    <td>불가능</td>
                    <td>포기자는 이미 상속인이 아니므로 대위 불가 (등기선례 2-246)</td>
                </tr>
                <tr>
                    <td>외국인 매수인 (미등기)</td>
                    <td>가능</td>
                    <td>매도인을 상대로 대위소송 후 등기 가능</td>
                </tr>
                <tr>
                    <td>재외국민 상속인</td>
                    <td>가능</td>
                    <td>국내 상속인과 동일한 권리</td>
                </tr>
            </tbody>
        </table>

        <h3>요건 3: 채권자의 채권 보전 필요성</h3>
        <p>채권자가 자신의 채권을 보전하기 위해 등기가 필요해야 합니다.</p>
        <ul>
            <li>압류·가압류를 위해 등기가 필수적인 경우</li>
            <li>채무자의 무자력이 명백한 경우</li>
            <li>등기의무자가 의사적으로 등기를 거부하는 경우</li>
        </ul>

        <h3>요건 4: 채권이 이행기에 도달해야 함</h3>
        <p>대위등기의 기초가 되는 채권이 이행기(상환일, 인도 기한 등)에 도달해야 합니다.</p>
        <ul>
            <li>조건부 채권은 조건 성취 후 대위 가능</li>
            <li>외국인·재외국민과의 계약에서도 동일 원칙 적용</li>
        </ul>` },
      { heading: `대위등기 신청 절차`, content: `<h3>Step 1: 대위 원인 명확히 하기</h3>
        <ul>
            <li>채권 증명 서류 준비 (계약서, 차용증, 판결문 등)</li>
            <li>외국인·재외국민의 신분 파악 (국적, 체류 자격, 입국 여부)</li>
            <li>등기의무자 또는 상대방 당사자 확인</li>
        </ul>

        <h3>Step 2: 등기의무자의 협력 가능성 검토</h3>
        <table>
            <thead>
                <tr>
                    <th>경우</th>
                    <th>절차</th>
                    <th>특징</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>등기의무자 협력 (①)</td>
                    <td>채권자 + 등기의무자 공동신청</td>
                    <td>신속, 비용 적음, 상대방 동의 필요</td>
                </tr>
                <tr>
                    <td>등기의무자 미협력 (②)</td>
                    <td>소송 → 판결 → 단독 신청</td>
                    <td>시간 오래 걸림, 법원 판결 필수</td>
                </tr>
                <tr>
                    <td>채무자 단독신청 대위 (③)</td>
                    <td>대위 신청 (상속등기, 보존등기 등)</td>
                    <td>등기의무자 협력 불필요</td>
                </tr>
            </tbody>
        </table>

        <h3>Step 3: 대위등기 신청서 작성</h3>
        <p>신청서에 반드시 포함될 사항:</p>
        <ul>
            <li><strong>피대위자 정보:</strong> 성명(또는 명칭), 주소, 주민등록번호(또는 등록번호)</li>
            <li><strong>대위자 정보:</strong> 신청인으로서 성명, 주소</li>
            <li><strong>대위 표시:</strong> "피대위자를 대위하여 신청"이라는 문구</li>
            <li><strong>대위 원인:</strong> 소비대차, 매매계약, 상속 등 구체적 사유</li>
        </ul>

        <h3>Step 4: 첨부 서류 준비 및 제출</h3>
        <p>대위원인에 따라 상이하며, 아래 섹션에서 상세히 설명합니다.</p>

        <h3>Step 5: 등록세 납부</h3>
        <p>대위등기 신청 시 <strong>채무자의 취득세까지 채권자가 대신 납부</strong>합니다.</p>
        <ul>
            <li>납부 후 납부확인서를 신청서에 첨부</li>
            <li>외국인·재외국민의 경우에도 동일</li>
        </ul>

        <h3>Step 6: 등기소 신청</h3>
        <ul>
            <li>부동산이 위치한 지역의 등기소에 신청</li>
            <li>온라인(등기로) 또는 방문 신청 가능</li>
            <li>외국인·재외국민의 신분 서류가 필요한 경우, 법무사를 통한 신청 권장</li>
        </ul>` },
      { heading: `첨부 서류`, content: `<p>대위등기의 첨부 서류는 <strong>대위 원인과 채무자의 입국 여부에 따라</strong> 달라집니다.</p>

        <h3>6-1. 소유권이전등기 (매매대금채권 기반)</h3>

        <h4>채무자(외국인·재외국민) 입국한 경우</h4>
        <table>
            <thead>
                <tr>
                    <th>서류</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>매매계약서</td>
                    <td>공정증서 또는 사서증서</td>
                </tr>
                <tr>
                    <td>대금 납부 증명</td>
                    <td>통장 사본 또는 송금 영수증</td>
                </tr>
                <tr>
                    <td>채무자(매도인) 신분증명</td>
                    <td>주민등록등본 또는 외국인등록증</td>
                </tr>
                <tr>
                    <td>채권자의 신분증명</td>
                    <td>주민등록등본</td>
                </tr>
                <tr>
                    <td>대위 원인 증명</td>
                    <td>위 매매계약서가 대위 원인이 됨</td>
                </tr>
            </tbody>
        </table>

        <h4>채무자(외국인·재외국민) 미입국인 경우</h4>
        <table>
            <thead>
                <tr>
                    <th>서류</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>매매계약서</td>
                    <td>공정증서 또는 사서증서 (번역공증 필요시)</td>
                </tr>
                <tr>
                    <td>대금 납부 증명</td>
                    <td>국제송금 영수증 또는 통장 사본</td>
                </tr>
                <tr>
                    <td>채무자 신분 증명</td>
                    <td>여권 사본 (또는 국가 발급 신분증)</td>
                </tr>
                <tr>
                    <td>채무자 주소 증명</td>
                    <td>재외공관 발급 거주증명 또는 여권 사본</td>
                </tr>
                <tr>
                    <td>채권자 신분증명</td>
                    <td>주민등록등본</td>
                </tr>
                <tr>
                    <td>법정대리인 또는 위임장</td>
                    <td>필요시 재외공관 공증</td>
                </tr>
            </tbody>
        </table>

        <h3>6-2. 상속등기 (상속인 채권자의 대위)</h3>

        <h4>상속인(재외국민·외국인) 입국한 경우</h4>
        <ul>
            <li>상속인 신분증명 (주민등록등본, 외국인등록증)</li>
            <li>피상속인 기본증명서</li>
            <li>호적등본 또는 가족관계증명서</li>
            <li>대위원인 증명 (소비대차계약서, 판결문 등)</li>
            <li>시·구·읍·면의 장 발행 대위 원인 증명서 (필요시)</li>
        </ul>

        <h4>상속인(재외국민·외국인) 미입국인 경우</h4>
        <ul>
            <li>상속인 신분 증명 (여권 사본, 국가 발급 신분증)</li>
            <li>상속인 주소 증명 (재외공관 거주증명, 여권 사본)</li>
            <li>피상속인 기본증명서</li>
            <li>호적등본 또는 가족관계증명서 (국문 또는 영문)</li>
            <li>대위원인 증명 서류</li>
            <li>재외공관 공증 위임장 (필요시)</li>
        </ul>

        <h3>6-3. 판결에 기한 대위등기</h3>
        <ul>
            <li>판결문 또는 판결등본</li>
            <li>판결 확정 증명</li>
            <li>대위원인 증명 (피보전채권 증명)</li>
            <li>채권자 신분증명</li>
        </ul>

        <div class="warning-box">
            <h4>⚠️ 주의사항</h4>
            <p>외국인·재외국민의 신분 증명 서류는 <strong>아포스티유 가입국 여부에 따라</strong> 처리 방식이 다릅니다.</p>
            <ul>
                <li><strong>아포스티유 가입국:</strong> 본국 발급 문서 + 아포스티유 + 국내 번역공증</li>
                <li><strong>비가입국:</strong> 재외공관 공증 또는 영사 인증</li>
            </ul>
            <p>법무사 상담을 통해 구체적인 서류 목록을 확인하는 것이 필수입니다.</p>
        </div>` },
      { heading: `판례·예규`, content: `<div class="precedent-box">
            <h4>등기선례 8-32 (2005. 12. 23, 부동산등기과-2317)</h4>
            <p><strong>판시 내용:</strong> "채무자 갑이 제3자 을에 대하여 소유권이전등기청구권을 가지고 있고 을은 그 등기에 협조할 의사를 가진 경우, 갑에 대하여 금전채권을 가진 자는 대위등기의 절차에 따라 갑을 대위하여 등기의무자인 을과 공동으로 소유권이전등기를 신청할 수 있다."</p>
            <p><strong>실무 적용:</strong> 이 선례는 금전 채권(소비대차 등)을 기초로 한 대위등기를 명확히 인정합니다. 외국인·재외국민 채무자의 경우에도 동일하게 적용됩니다.</p>
        </div>

        <div class="precedent-box">
            <h4>등기선례 7-132 (2002. 11. 29, 등기 3402-676)</h4>
            <p><strong>판시 내용:</strong> 피상속인에 대하여 채무를 가진 채권자가 대위로 상속등기를 한 경우, 상속인 중 일부 또는 모두가 상속포기를 하더라도 채권자는 후순위 상속인을 상속인으로 하는 새로운 상속등기를 신청할 수 있으며, 만약 후순위 상속인도 없으면 경정등기를 통해 말소할 수 있다.</p>
            <p><strong>실무 적용:</strong> 외국인·재외국민 상속인의 채권자가 대위등기를 한 후 상속포기 사실을 알게 되었을 때의 처리 방법을 규정합니다. 경정등기까지 단독으로 대위 신청 가능합니다.</p>
        </div>

        <div class="precedent-box">
            <h4>등기선례 2-246 (1987. 9. 16, 등기 제554호)</h4>
            <p><strong>판시 내용:</strong> 상속인이 이미 상속포기를 한 경우, 채권자는 그 포기자를 대위하여 상속등기를 신청할 수 없다.</p>
            <p><strong>실무 적용:</strong> 외국인·재외국민 상속인이 상속포기를 완료한 후에는 대위등기가 불가능합니다. 다음 순위 상속인의 권리를 확인해야 합니다.</p>
        </div>

        <div class="precedent-box">
            <h4>등기예규 1835호 제7조 제5항</h4>
            <p><strong>규정:</strong> 상속인이 상속포기 또는 한정승인을 할 수 있는 기간 내라도 상속인의 채권자는 대위에 의한 상속등기를 신청할 수 있다.</p>
            <p><strong>실무 적용:</strong> 외국인·재외국민 상속인에 대한 채권자도 포기 가능 기간 내에 대위등기를 신청할 수 있습니다.</p>
        </div>` },
      { heading: `주의사항`, content: `<div class="warning-box">
            <h4>⚡ 기간 제한 및 효과</h4>
            <p><strong>대위등기 자체는 기간 제한이 없습니다.</strong> 다만 다음의 기간 제한에 주의해야 합니다.</p>
            <ul>
                <li><strong>상속포기 기간:</strong> 상속인이 상속을 포기할 수 있는 기간은 상속 개시 후 3개월 이내입니다. 채권자는 이 기간 내에 대위등기를 신청해야 포기 전의 상속인으로 등기를 할 수 있습니다.</li>
                <li><strong>압류·가압류 효과:</strong> 등기 완료 후 즉시 압류 신청이 가능하므로, 필요시 신속히 진행해야 합니다.</li>
            </ul>
        </div>

        <div class="warning-box">
            <h4>⚠️ 법적 위험</h4>
            <p><strong>대위등기는 채무자의 동의가 필요 없습니다.</strong> 그러나 다음 상황에서 주의가 필요합니다.</p>
            <ul>
                <li><strong>채권 존재 증명 실패:</strong> 대위 원인이 되는 채권(예: 매매계약)을 증명하지 못하면 등기 신청이 거부될 수 있습니다.</li>
                <li><strong>등기의무자 미협력:</strong> 소송 판결 없이 비협력 등기의무자(제3자)를 상대로 신청하면 거부됩니다.</li>
                <li><strong>채무자의 이의 제기:</strong> 등기 후 채무자가 이의를 제기할 수 있으며, 이 경우 경정등기 소송으로 진행될 수 있습니다.</li>
                <li><strong>외국인·재외국민의 서류 부족:</strong> 미입국 외국인의 경우 필요 서류를 확보하기 어려울 수 있습니다.</li>
            </ul>
        </div>

        <div class="warning-box">
            <h4>ℹ️ 특수 상황</h4>
            <ul>
                <li><strong>상속인이 상속포기한 후:</strong> 새로운 후순위 상속인을 대위하여 등기해야 합니다 (등기선례 7-132).</li>
                <li><strong>외국에 계류 중인 부동산 관련:</strong> 부동산이 외국에 있으면 한국 등기소는 관할권이 없습니다. 현지 법에 따라 진행해야 합니다.</li>
                <li><strong>판결 기한 대위등기:</strong> 소송에서 이기더라도 등기의무자가 자발적으로 협력하지 않으면 다시 소송이 필요할 수 있습니다.</li>
            </ul>
        </div>

        <div class="warning-box">
            <h4>🌏 외국인·재외국민 특수 사항</h4>
            <ul>
                <li><strong>국적 확인 필수:</strong> 외국인(비국적자), 재외국민(대한민국 국적), 외국국적동포(대한민국 국적)는 증명 서류가 다릅니다.</li>
                <li><strong>입국 여부 구분:</strong> 미입국 외국인·재외국민의 경우 서류 준비 방법이 완전히 다릅니다.</li>
                <li><strong>아포스티유 확인:</strong> 해당 국가가 헤이그협약(아포스티유) 가입국인지 확인하고 서류를 준비해야 합니다.</li>
                <li><strong>번역공증:</strong> 외국 문서는 대부분 번역공증이 필요합니다 (특히 상속등기의 경우).</li>
            </ul>
        </div>` },
      { heading: `자주 묻는 질문`, content: `<div class="qa-section">
            <div class="qa-item">
                <div class="qa-question">Q1. 대위등기를 신청할 때 채무자(외국인·재외국민)의 동의가 필요한가요?</div>
                <div class="qa-answer">
                    <p>아니요, 필요하지 않습니다. 민법 제404조와 부동산등기법 제28조에 따라 채권자는 채무자의 동의 없이 독자적으로 대위등기를 신청할 수 있습니다. 이것이 대위등기의 가장 큰 장점입니다. 다만 등기의무자(제3자)가 있는 경우, 그 제3자의 협력이 필요하거나 소송이 필요할 수 있습니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q2. 외국인 매도인이 등기를 거부할 때 어떻게 하나요?</div>
                <div class="qa-answer">
                    <p>두 가지 방법이 있습니다. 첫째, 매도인과 협력할 수 있다면 대위 형식으로 공동 신청합니다. 둘째, 거부하는 경우 매도인을 상대로 소유권이전등기청구 소송을 제기하여 승소 판결을 받은 후, 그 판결을 기초로 현 소유권자를 상대로 대위 신청합니다. 외국인이 미입국인 경우, 소송 진행도 어려울 수 있으므로 법무사 상담이 필수입니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q3. 재외국민 상속인이 상속등기를 하지 않을 때, 채권자가 대신할 수 있나요?</div>
                <div class="qa-answer">
                    <p>네, 가능합니다. 피상속인(망자)에 대하여 채무를 가진 채권자라면 재외국민 상속인을 대위하여 상속등기를 신청할 수 있습니다 (등기선례 7-132). 다만 상속인이 이미 상속포기를 완료한 경우는 대위등기가 불가능하므로, 다음 순위 상속인의 권리를 확인해야 합니다. 재외국민의 경우 호적등본, 기본증명서 등의 서류를 국내에서 발급받거나 재외공관에서 취득해야 합니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q4. 미입국 외국인 채무자의 대위등기에서 어떤 서류가 반드시 필요한가요?</div>
                <div class="qa-answer">
                    <p>미입국 외국인의 경우 가장 중요한 것은 신분 증명과 주소 증명입니다. 여권 사본, 국가 발급 신분증, 재외공관 발급 거주증명이 필수입니다. 대위 원인이 되는 채권 증명(계약서 등)도 필수이며, 필요시 번역공증을 해야 합니다. 소유권이전등기의 경우 매매계약서, 상속등기의 경우 피상속인 기본증명서와 호적등본이 필요합니다. 아포스티유 가입국인지 비가입국인지에 따라 증명 절차가 달라지므로, 법무사의 사전 확인이 필수입니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">⚡ Q5. 대위등기 신청에 기간 제한이 있나요?</div>
                <div class="qa-answer">
                    <p>대위등기 신청 자체는 기간 제한이 없습니다. 다만 상속등기의 경우 상속인의 상속포기 기간(상속 개시 후 3개월)에 주의해야 합니다. 상속인이 포기하기 전에 채권자가 대위등기를 신청하면 그 상속인을 상속인으로 등기할 수 있지만, 포기 후에는 불가능합니다 (등기선례 2-246). 또한 소장 시효, 채권 이행기 등에도 주의해야 합니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q6. 대위등기 후 등록세는 누가 내나요?</div>
                <div class="qa-answer">
                    <p>등록세(현재는 취득세)는 채권자가 납부합니다. 부동산등기법에 따라 대위등기 신청 시 등기신청인(채권자)이 채무자의 취득세까지 대신 납부하고, 납부확인서를 신청서에 첨부해야 합니다 (등기선례 제4-274호). 외국인·재외국민 채무자인 경우에도 동일하게 적용됩니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q7. 외국인 채무자가 상속을 포기했다는 것을 나중에 알게 되면, 이미 한 대위등기는 어떻게 하나요?</div>
                <div class="qa-answer">
                    <p>이 경우 채권자는 단독으로 경정등기를 신청할 수 있습니다 (등기선례 7-132). 상속포기 사실을 증명하는 서류(상속포기신고수리 심판서 등)를 첨부하여 착오를 등기원인으로 하는 말소등기를 신청합니다. 그 후 후순위 상속인(차순위)이 있으면 그 상속인을 대위하여 다시 상속등기를 신청할 수 있습니다. 외국인·재외국민 상속인의 경우에도 동일한 원칙이 적용됩니다.</p>
                    <p><strong>위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</strong></p>
                </div>
            </div>
        </div>

        <!-- 섹션 9: 다음으로 확인할 내용 -->
        <div class="related-box">
            <h3>다음으로 확인할 내용</h3>
            <ul>
                <li><a href="외등_07_외국인처분.html">외국인 처분 위임장 — 외국인이 한국 부동산을 팔 때</a></li>
                <li><a href="외등_09_외국인법정상속.html">외국인의 법정상속등기 — 국제사법 준거법과 국내 상속</a></li>
                <li><a href="외등_23_변경경정.html">외국인·재외국민 변경·경정등기 — 잘못된 등기 수정</a></li>
            </ul>
        </div>

        <!-- 상담 CTA -->
        <div class="cta-box">
            <h3>이 내용이 해당되시나요?</h3>
            <p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다. 법무사가 정확히 안내해 드립니다.</p>
            <p style="font-weight: 600; margin-top: 20px;">첫 상담은 무료입니다.</p>
            <div class="cta-buttons">
                <a href="tel:02-1234-5678" class="btn btn-call">📞 전화 상담</a>
                <a href="https://pf.kakao.com/_" class="btn btn-kakao">💬 카카오톡 상담</a>
            </div>
        </div>

        <!-- 면책 문구 -->
        <div class="disclaimer">
            <p><strong>면책 문구</strong></p>
            <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 조언이 아닙니다. 이 페이지의 내용은 2025년 현행 법령을 기준으로 작성되었습니다.</p>
            <p>외국인·재외국민의 부동산 등기는 국적, 체류 자격, 입국 여부, 해당 국가의 법제 등에 따라 처리 방법이 크게 달라집니다. 본 페이지의 내용이 귀하의 구체적인 상황에 정확히 적용되는지 확인하기 위해서는 반드시 전문 법무사와 상담하시기 바랍니다.</p>
            <p>본 페이지의 내용을 신뢰하여 손해가 발생하는 경우, 당 사무소는 책임을 지지 않습니다.</p>
        </div>
    </div>
</body>
</html>` },
    ],
    laws: [
      { name: `등기선례 8-32 (2005. 12. 23, 부동산등기과-2317)`, desc: `판시 내용: "채무자 갑이 제3자 을에 대하여 소유권이전등기청구권을 가지고 있고 을은 그 등기에 협조할 의사를 가진 경우, 갑에 대하여 금전채권을 가진 자는 대위등기의 절차에 따라 갑을 대위하여 등기의무자인 을과 공동으로 소유권이전등기를 신청할 수 있다."` },
      { name: `등기선례 7-132 (2002. 11. 29, 등기 3402-676)`, desc: `판시 내용: 피상속인에 대하여 채무를 가진 채권자가 대위로 상속등기를 한 경우, 상속인 중 일부 또는 모두가 상속포기를 하더라도 채권자는 후순위 상속인을 상속인으로 하는 새로운 상속등기를 신청할 수 있으며, 만약 후순위 상속인도 없으면 경정등기를 통해 말소할 수 있다.` },
      { name: `등기선례 2-246 (1987. 9. 16, 등기 제554호)`, desc: `판시 내용: 상속인이 이미 상속포기를 한 경우, 채권자는 그 포기자를 대위하여 상속등기를 신청할 수 없다.` },
      { name: `등기예규 1835호 제7조 제5항`, desc: `규정: 상속인이 상속포기 또는 한정승인을 할 수 있는 기간 내라도 상속인의 채권자는 대위에 의한 상속등기를 신청할 수 있다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-25',
    title: "아포스티유(Apostille) 완벽 가이드",
    meta: "",
    sections: [
      { heading: `1. 아포스티유란?`, content: `<h3>개념과 목적</h3>
            <p><strong>아포스티유(Apostille)</strong>는 "외국 공문서에 대한 인증의 요구를 폐지하는 협약"이라는 국제협약에 따른 공문서 진정성 확인 제도입니다. 복잡한 영사 확인 절차를 생략하고, 공문서 발행국에서 발급한 증명서 하나로 협약 가입국 간에 문서의 효력을 인정받을 수 있게 합니다.</p>

            <div class="legal-box">
                <h4>법적 근거</h4>
                <ul class="regular-list">
                    <li><strong>부동산등기규칙 제46조 제9항</strong> (2017. 10. 1. 시행): 외국 공문서나 외국 공증인 공증 서류 제출 시 아포스티유 또는 영사 확인 요구</li>
                    <li><strong>등기예규 제1778호 제3조</strong>: 외국 공문서에 대한 확인 기준</li>
                    <li><strong>외교부 아포스티유 사이트</strong>: apostille.go.kr에서 협약 가입국 확인 및 발급 신청 가능</li>
                </ul>
            </div>

            <h3>국제협약의 성격</h3>
            <p>아포스티유 협약은 현재 <strong>세계 106개국 이상</strong>이 가입한 광범위한 국제협약입니다. 한국은 2007년 7월 14일에 가입하였습니다. 미국, 영국, 독일, 프랑스, 일본, 호주, 캐나다 등 주요 국가들이 모두 협약국이므로, 이들 국가의 공문서를 한국에 제출할 때는 아포스티유가 필수입니다.</p>` },
      { heading: `2. 아포스티유 발급 방법 (한국에서 발급)`, content: `<h3>한국 발급 기관</h3>
            <p>한국에서 발급된 문서를 해외에서 사용할 때 아포스티유를 받아야 합니다. 발급 기관은 다음과 같습니다:</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>발급 기관</th>
                        <th>담당 서류</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>외교부 영사민원실</strong></td>
                        <td>공증인 공증 서류, 공증 위임장, 행정기관 발급 문서(외교부 소관이 아닌 것)</td>
                        <td>(02) 2100-7600 / (02) 739-8219</td>
                    </tr>
                    <tr>
                        <td><strong>법무부</strong></td>
                        <td>법원 판결문, 법인등기부, 법무부 발급 서류, 검찰청 서류</td>
                        <td>(02) 720-8027</td>
                    </tr>
                </tbody>
            </table>

            <h3>발급 수수료 및 기간</h3>
            <ul class="regular-list">
                <li><strong>수수료</strong>: 건당 1,000원 (전자수입인지)</li>
                <li><strong>발급 기간</strong>: 신청일로부터 근무일 기준 3일 이내 (단, 직인·서명이 미등록된 경우 3일 초과 가능)</li>
                <li><strong>우편 접수 시</strong>: 통상 7~10일 소요</li>
            </ul>

            <h3>신청 방법</h3>
            <p><strong>본인 또는 대리인이 직접 신청할 수 있습니다:</strong></p>
            <ul class="regular-list">
                <li>아포스티유 신청서 작성</li>
                <li>아포스티유를 받고자 하는 대상 문서</li>
                <li>신분증 지참 (본인 방문 시) 또는 대리인 신분증 (대리 신청 시)</li>
                <li>전자수입인지 1,000원</li>
                <li>우편 신청 가능 (반송봉투 필수)</li>
            </ul>

            <div class="warning-box">
                <h4><span class="icon">⚠️</span>주의: 국내 문서 발급 시 아포스티유</h4>
                <p>한국에서 발급된 공증서나 공문서를 해외에서 사용할 때 아포스티유를 받아야 합니다. 예를 들어, 한국 공증인이 공증한 위임장을 미국 법원에 제출하려면 한국 외교부에서 아포스티유를 받아야 미국에서 정당한 문서로 인정받습니다.</p>
            </div>` },
      { heading: `3. 아포스티유 협약 가입국 여부 확인`, content: `<h3>가입국 확인의 중요성</h3>
            <p>외국 공문서를 한국의 등기소에 제출할 때, 그 문서 발행국이 아포스티유 협약 가입국인지 여부가 매우 중요합니다. 이에 따라 필요한 확인 방법이 완전히 달라집니다.</p>

            <div class="country-box">
                <h4><span class="icon">🌏</span>주요 가입국 (부동산 등기 관련)</h4>
                <ul class="regular-list">
                    <li><strong>아시아:</strong> 일본, 싱가포르, 홍콩, 인도네시아, 필리핀, 필리핀, 오만, 사우디아라비아</li>
                    <li><strong>북미:</strong> 미국 (괌, 마우리제도, 사이판 포함), 캐나다</li>
                    <li><strong>유럽:</strong> 영국, 독일, 프랑스, 스페인, 이탈리아, 스위스, 오스트리아, 벨기에, 네덜란드, 스웨덴, 러시아 등</li>
                    <li><strong>오세아니아:</strong> 호주, 뉴질랜드</li>
                    <li><strong>중남미:</strong> 브라질, 멕시코, 아르헨티나, 칠레, 콜롬비아</li>
                </ul>
            </div>

            <h3>미가입국의 처리 방법</h3>
            <p>아포스티유 협약을 가입하지 않은 국가(예: 중국, 태국)의 공문서는 아포스티유를 받을 수 없습니다. 이 경우 다음과 같이 처리합니다:</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>상황</th>
                        <th>처리 방법</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>아포스티유 가입국</strong></td>
                        <td>해당 국가의 아포스티유 발급 권한기관에서 아포스티유 발급 받음</td>
                    </tr>
                    <tr>
                        <td><strong>아포스티유 미가입국</strong></td>
                        <td>해당 국가의 공문서 + 한국 대사관 영사과의 영사 확인</td>
                    </tr>
                    <tr>
                        <td><strong>수교하지 않은 국가</strong></td>
                        <td>예외 처리 가능 (등기예규 제1534호 참조)</td>
                    </tr>
                </tbody>
            </table>` },
      { heading: `4. 부동산 등기에서 아포스티유가 필요한 경우 / 불필요한 경우`, content: `<h3>아포스티유가 필요한 경우</h3>
            <p>다음의 경우 외국 공문서에 아포스티유(협약 가입국) 또는 영사 확인(미가입국)이 필수입니다:</p>

            <ul class="regular-list">
                <li><strong>외국 공문서</strong>: 외국 정부 기관이 발행한 공문서 (예: 해외 법원 판결문, 해외 행정기관 발급 증명서)</li>
                <li><strong>외국 공증인 공증 서류</strong>: 외국 공증인이 공증한 위임장, 계약서, 선언서 등</li>
                <li><strong>외국 국적 취득자의 신분 증명 관련 서류</strong> (성명 변경 증명 등)</li>
                <li><strong>해외 거주 외국인의 처분 위임장</strong>: 미국인이 미국에서 한국 공증인이 아닌 미국 공증인으로부터 공증받은 위임장</li>
            </ul>

            <h3>아포스티유가 불필요한 경우</h3>
            <p>다음의 경우는 아포스티유나 영사 확인이 불필요합니다:</p>

            <ul class="regular-list">
                <li><strong>재외국민의 위임장</strong>: 재외국민(한국 국적자)이 한국 재외공관(대사관/영사관)에서 공증받은 위임장</li>
                <li><strong>재외공관 공증 서류</strong>: 한국 대사관/영사관에서 공증 또는 확인한 서류</li>
                <li><strong>외교·영사기관 작성 문서</strong>: 주한 미국대사관 등 한국 주재 외국공관이 작성하거나 공증한 문서</li>
                <li><strong>신분증 원본</strong>: 여권, 운전면허증 등은 원본을 제출하면 되고 아포스티유 불필요</li>
                <li><strong>한국 공증인 공증 서류 (역방향)</strong>: 한국인이 한국 공증인으로부터 공증받은 서류를 해외 제출 시는 한국 외교부 아포스티유 발급</li>
            </ul>

            <div class="case-box">
                <h4><span class="icon">사례</span>시나리오별 아포스티유 필요 여부</h4>
                <p><strong>사례 1: 미국 시민권자 김철수씨가 한국 아파트를 매수</strong><br>
                미국에서 발급받은 신분증 사본과 미국 법원 판결문(이혼 판결)을 첨부할 때: <span class="highlight">아포스티유 필요</span> (미국은 협약 가입국이므로 미국 발급 아포스티유 필요)</p>

                <p><strong>사례 2: 캐나다 영주권자인 재외국민이 한국 토지를 상속받음</strong><br>
                캐나다에서 발급받은 재산증명과 위임장을 제출할 때: <span class="highlight">아포스티유 불필요</span> (한국 대사관(캐나다)에서 공증 또는 재외공관 공증으로 처리)</p>

                <p><strong>사례 3: 중국 국적 외국인이 한국 주택을 매수</strong><br>
                중국에서 발급받은 신분증 사본과 주소 증명서를 첨부할 때: <span class="highlight">영사 확인 필요</span> (중국은 협약 미가입국이므로 한국 대사관(중국) 영사과 확인 필요)</p>
            </div>` },
      { heading: `5. 부동산등기 관련 판례·예규`, content: `<div class="legal-box">
                <h4>부동산등기규칙 제46조 제9항 (아포스티유 규정)</h4>
                <p>"첨부정보가 외국 공문서이거나 외국 공증인이 공증한 문서인 경우에는 재외공관 공증법 제30조제1항에 따라 공증담당영사로부터 문서의 확인을 받거나 외국공문서에 대한 인증의 요구를 폐지하는 협약에서 정하는 바에 따른 아포스티유(Apostille)를 붙여야 한다. 다만, 외국 공문서 등의 발행국이 대한민국과 수교하지 아니한 국가이면서 위 협약의 가입국이 아닌 경우와 같이 부득이한 사유로 문서의 확인을 받거나 아포스티유를 붙이는 것이 곤란한 경우에는 그러하지 아니하다."</p>
            </div>

            <div class="legal-box">
                <h4>등기예규 제1778호 제3조 (외국 공문서에 대한 확인)</h4>
                <p>첨부정보가 외국에서 발행된 공문서(외국 공증인이 공증한 문서 포함)인 경우 다음과 같이 구분하여 처리합니다:</p>
                <ul class="regular-list">
                    <li><strong>아포스티유 협약 가입국</strong>: 해당 국가의 아포스티유 발급 권한기관에서 발행한 아포스티유 확인</li>
                    <li><strong>협약 미가입국</strong>: 해당 국가에 주재하는 대한민국 공증담당영사의 확인</li>
                    <li><strong>예외</strong>: 한국과 수교하지 않은 국가이면서 협약 미가입국인 경우 (등기예규 제1534호)</li>
                </ul>
            </div>

            <div class="legal-box">
                <h4>등기예규 제1534호 (특별한 사정이 있는 경우)</h4>
                <p>영사 확인이나 아포스티유를 제출할 수 없는 특별한 사정이 있고, 그 외국공문서가 적법하게 발급되었다고 인정할 만한 충분한 자료가 있는 경우에는 예외 처리가 가능합니다. 이 경우 등기관이 보정을 명할 수 있습니다.</p>
            </div>` },
      { heading: `6. 주의사항`, content: `<div class="warning-box">
                <h4><span class="icon">⚠️</span>법적 위험: 아포스티유 없이 등기 신청</h4>
                <p>아포스티유 협약 가입국의 공문서를 아포스티유 없이 제출하면 등기관은 보정을 명합니다. 보정 기간 내에 아포스티유를 받아 제출하지 않으면 등기 신청이 반려됩니다. 특히 기간이 급할 때는 회복 불가능한 손실이 발생할 수 있습니다.</p>
            </div>

            <div class="warning-box">
                <h4><span class="icon">ℹ️</span>예외: 번역문도 아포스티유 필요</h4>
                <p>외국어로 작성된 공문서의 번역문을 첨부할 때, 번역문도 아포스티유가 필요할 수 있습니다. 이 경우 원문과 번역문에 대해 각각 별도로 아포스티유를 신청해야 합니다. 번역문은 먼저 공증사무소에서 공증을 받은 후 법무부에 아포스티유 신청을 해야 합니다.</p>
            </div>

            <div class="warning-box">
                <h4><span class="icon">🌏</span>국가별 차이: 아포스티유 발급 기관이 국가마다 다름</h4>
                <p>미국의 경우 각 주(State)마다 아포스티유 발급 기관이 다릅니다 (국무부, 법원, 교육청 등). 일본은 법원과 검찰청이, 영국은 외교부가 담당합니다. 따라서 어느 국가의 어느 기관에서 발급받을 문서인지 정확히 파악하고, 각 국가의 정확한 아포스티유 발급 절차를 확인해야 합니다.</p>
            </div>` },
      { heading: `자주 묻는 질문 (Q&A)`, content: `<div class="qa-item">
                <div class="qa-question">Q1. 아포스티유는 어디서 받아야 하나요? 본국에서 받아야 하나요, 아니면 한국에서?</div>
                <div class="qa-answer">
                    <p>외국 공문서에 아포스티유를 받을 때는 <strong>문서 발행국</strong>에서 받아야 합니다. 예를 들어, 미국에서 발급받은 판결문에 아포스티유를 붙이려면 미국의 해당 주(State)에서 받아야 합니다. 한국에서는 한국이 발급한 공문서(가족관계증명서, 공증서 등)에 대해서만 외교부나 법무부에서 아포스티유를 발급합니다.</p>
                    <div class="qa-caveat">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q2. 재외국민과 외국인이 아포스티유 처리에서 다른 점이 있나요?</div>
                <div class="qa-answer">
                    <p>중요한 차이가 있습니다. <strong>재외국민(한국 국적자)</strong>이 본국에서 서류를 받을 때는 한국 대사관/영사관에서 공증받으면 되고, 아포스티유가 불필요합니다. 반면 <strong>외국인(외국 국적자)</strong>이 본국 서류를 제출할 때는 본국이 협약 가입국이면 아포스티유, 미가입국이면 영사 확인을 받아야 합니다. 재외국민은 한국 국적자이므로 한국 공관의 공증으로 충분한 것입니다.</p>
                    <div class="qa-caveat">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q3. 아포스티유 협약 가입국인지 어떻게 확인하나요?</div>
                <div class="qa-answer">
                    <p>대한민국 아포스티유 사이트(apostille.go.kr)에서 협약 가입국 목록을 확인할 수 있습니다. 또한 외교부 홈페이지, 주한 외국공관, 그리고 법무사 사무소에서도 확인 가능합니다. 부동산 등기 신청 전에 반드시 해당 국가가 협약 가입국인지 확인하고, 필요한 서류를 준비해야 합니다. 협약 가입국 목록은 수시로 업데이트되므로 최신 정보를 확인하는 것이 중요합니다.</p>
                    <div class="qa-caveat">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q4. 중국에서 발급받은 서류에는 아포스티유가 필요한가요?</div>
                <div class="qa-answer">
                    <p>중국은 아포스티유 협약을 가입하지 않았으므로 아포스티유는 받을 수 없습니다. 대신 <strong>한국 대사관(중국)의 영사과에서 영사 확인</strong>을 받아야 합니다. 중국에서 발급받은 신분증, 주소 증명, 재산 증명 등을 한국 부동산등기에 첨부할 때는 반드시 한국 영사관의 영사 확인을 받은 후 제출해야 합니다. 아포스티유로 대체할 수 없습니다.</p>
                    <div class="qa-caveat">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q5. 아포스티유를 받는 데 얼마나 걸리나요?</div>
                <div class="qa-answer">
                    <p>본국에서 아포스티유를 받는 시간은 국가마다 다릅니다. 미국은 각 주마다 다르지만 보통 1~2주, 일본은 1주일, 영국은 2주일 정도 소요됩니다. 한국 외교부나 법무부에서는 <strong>신청일로부터 근무일 기준 3일 이내</strong>에 발급합니다. 따라서 해외에서 아포스티유를 받는 과정이 시간이 많이 걸리므로, 부동산 등기 신청이 필요하면 미리 준비해야 합니다.</p>
                    <div class="qa-caveat">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q6. 아포스티유를 받았는데 보정 명령을 받았습니다. 뭔가 문제가 있었나요?</div>
                <div class="qa-answer">
                    <p>보정 명령을 받았다면 보정 고지서의 내용을 확인해야 합니다. 아포스티유 자체에 문제가 있거나, 아포스티유 대신 영사 확인이 필요한 국가의 서류인 경우, 또는 아포스티유가 첨부되지 않았거나 손상된 경우 등이 보정 사유가 될 수 있습니다. 등기관의 지시에 따라 서류를 보완하거나 다시 제출해야 합니다. 보정 기간을 초과하면 등기 신청이 반려되므로 신속히 처리해야 합니다.</p>
                    <div class="qa-caveat">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question">Q7. 한국 공증인 공증 서류를 해외에 제출할 때도 아포스티유가 필요한가요?</div>
                <div class="qa-answer">
                    <p>네, 필요합니다. 한국 공증인이 공증한 서류(위임장, 선언서 등)를 해외 법원이나 행정기관에 제출할 때는 한국 외교부에서 <strong>아포스티유</strong>를 받아야 합니다. 이는 역방향 아포스티유로, 한국이 발급 국가이므로 한국 외교부가 문서의 진정성을 확인하고 발급하는 것입니다. 한국 대사관의 영사 확인으로는 부족하고, 반드시 외교부 아포스티유가 필요합니다.</p>
                    <div class="qa-caveat">위 내용은 일반적인 경우를 기준으로 한 것이며, 국적·체류 자격·개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</div>
                </div>
            </div>
        </section>

        <!-- 섹션 9: 다음으로 확인할 내용 -->
        <section class="next-topics">
            <h3>다음으로 확인할 내용</h3>
            <ul>
                <li><a href="외등_26_번역공증.html">외국어 서류 번역문 첨부 기준과 공증 방법 — 등기 실무 완벽 정리</a></li>
                <li><a href="외등_07_외국인처분.html">외국인이 입국하지 않고 한국 부동산을 파는 방법 — 처분 위임장 공증 완벽 가이드</a></li>
                <li><a href="외등_14_재외국민개념.html">재외국민이란? 외국인·외국국적동포와 다른 점 — 부동산 등기 관점 완벽 정리</a></li>
            </ul>
        </section>

        <!-- 섹션 10: 상담 신청 CTA -->
        <section class="cta-section">
            <h3>이 내용이 해당되시나요? 첫 상담은 무료입니다.</h3>
            <p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다. 법무사가 정확히 안내해 드립니다.</p>
            <div class="cta-buttons">
                <a href="tel:02-0000-0000" class="cta-button">📞 전화 상담</a>
                <a href="https://pf.kakao.com/_" class="cta-button">💬 카카오톡 상담</a>
            </div>
        </section>

        <!-- 섹션 11: 면책 문구 -->
        <section class="disclaimer">
            <p><strong>면책 문구:</strong> 본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 국적·체류 자격·개별 사안에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 법무사와 상담하시기 바랍니다. 이 페이지는 2025년 현행 법령 기준으로 작성되었습니다.</p>
        </section>
    </div>
</body>
</html>` },
    ],
    laws: [
      { name: `부동산등기규칙 제46조 제9항 (아포스티유 규정)`, desc: `"첨부정보가 외국 공문서이거나 외국 공증인이 공증한 문서인 경우에는 재외공관 공증법 제30조제1항에 따라 공증담당영사로부터 문서의 확인을 받거나 외국공문서에 대한 인증의 요구를 폐지하는 협약에서 정하는 바에 따른 아포스티유(Apostille)를 붙여야 한다. 다만, 외국 공문서 등의 발행국이 대한민국과 수교하지 아니한 국가이면서 위 협약의 가입국이 아닌 경우와 같이 부득이한 사유로 문서의 확인을 받거나 아포스티유를 붙이는 것이 곤란한 경우에는 그러하지 아니하다."` },
      { name: `등기예규 제1778호 제3조 (외국 공문서에 대한 확인)`, desc: `첨부정보가 외국에서 발행된 공문서(외국 공증인이 공증한 문서 포함)인 경우 다음과 같이 구분하여 처리합니다:` },
      { name: `등기예규 제1534호 (특별한 사정이 있는 경우)`, desc: `영사 확인이나 아포스티유를 제출할 수 없는 특별한 사정이 있고, 그 외국공문서가 적법하게 발급되었다고 인정할 만한 충분한 자료가 있는 경우에는 예외 처리가 가능합니다. 이 경우 등기관이 보정을 명할 수 있습니다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-26',
    title: "외국어 서류 번역문 첨부 기준과 공증 방법",
    meta: "등기 실무 완벽 정리",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-box">
                <h3>다음 중 하나라도 해당되나요?</h3>
                <div class="checklist-item">
                    <input type="checkbox" id="check1">
                    <label for="check1">외국어로 작성된 서류를 등기 신청할 때 번역문이 필요한가 궁금한 분</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check2">
                    <label for="check2">위임장이나 공증서 등 외국 공문서의 번역 방법을 알고 싶은 분</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check3">
                    <label for="check3">공증인 공증과 아포스티유의 차이점을 이해하고 싶은 분</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check4">
                    <label for="check4">국가별로 필요한 번역 및 공증 방법이 다른지 확인하고 싶은 분</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check5">
                    <label for="check5">이미 준비한 외국어 서류가 등기에 사용 가능한지 판단받고 싶은 분</label>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" id="check6">
                    <label for="check6">번역문 작성자 자격과 서명 방법에 대해 명확히 하고 싶은 분</label>
                </div>
            </div>` },
      { heading: `핵심 요약`, content: `<div class="summary-box">
                <h3>가장 중요한 3가지</h3>
                <p><strong>1. 외국어 서류는 반드시 한국어 번역문을 첨부해야 합니다</strong></p>
                <p style="margin-bottom: 20px;">부동산등기규칙 제46조 제8항에 따라, 등기소에 제출되는 외국어 서류는 반드시 한국어 번역문을 첨부해야 합니다. 번역이 없으면 등기신청이 반려됩니다.</p>

                <p><strong>2. 번역문은 공인 번역사 또는 당사자 본인이 작성할 수 있습니다</strong></p>
                <p style="margin-bottom: 20px;">번역문에는 번역자의 서명, 날인, 성명, 주소를 기재하고 신분증 사본을 첨부해야 합니다. 다만 공증을 받은 경우는 신분증 사본이 불필요합니다.</p>

                <p><strong>3. 공증 필요 여부는 서류의 종류와 출신 국가에 따라 다릅니다</strong></p>
                <p>위임장, 외국 공증서, 아포스티유 문서 등 중요한 서류는 추가 공증이 필요한 경우가 많습니다. 아포스티유 협약 가입국 여부에 따라 처리 방법이 달라집니다.</p>
            </div>` },
      { heading: `번역문 첨부 기준`, content: `<p>어떤 서류에 번역문이 필요한가?</p>

            <h3>반드시 번역문을 첨부해야 하는 경우</h3>
            <ul>
                <li><strong>외국인 위임장</strong> — 외국어로 작성된 처분 위임장, 상속재산분할협의 위임장 등</li>
                <li><strong>외국 공증서</strong> — 외국 공증인이 공증한 서류 (위임장, 인감증명서 등)</li>
                <li><strong>외국 공문서</strong> — 외국 정부기관이 발행한 서류 (가족관계증명서, 혼인증명서, 판결문 등)</li>
                <li><strong>재외국민 서류</strong> — 외국에서 발급받은 각종 증명서</li>
                <li><strong>아포스티유 부착 문서</strong> — 아포스티유 마크가 있는 외국 공문서</li>
            </ul>

            <h3>번역문이 불필요한 경우</h3>
            <ul>
                <li><strong>한국어로 이미 작성된 서류</strong> — 원본부터 한국어인 경우</li>
                <li><strong>한국 공관 발급 서류</strong> — 한국 대사관, 영사관에서 한국어로 발급한 서류 (재외국민등록부, 거주사실증명 등)</li>
                <li><strong>간단한 개인정보</strong> — 등기관이 '성명, 국적, 주소' 정도만 필요하다고 인정하는 경우 (예: 외국 여권, 신분증의 핵심 정보만)</li>
                <li><strong>이미 한국어로 번역된 공식 번역본**</strong> — 외국 정부가 공식으로 제공하는 한국어 번역본</li>
            </ul>` },
      { heading: `번역 방법 및 공증 기준`, content: `<h3>번역문 작성 방법</h3>

            <div class="example-box">
                <h3>필수 기재 사항</h3>
                <p><strong>번역문에는 반드시 다음이 기재되어야 합니다:</strong></p>
                <ul style="margin-top: 10px;">
                    <li>번역인이 원문과 다름이 없다는 뜻의 문구</li>
                    <li>번역인의 성명</li>
                    <li>번역인의 주소</li>
                    <li>번역인의 서명 또는 날인</li>
                    <li>번역인의 신분증 사본 (공증받지 않은 경우)</li>
                </ul>
            </div>

            <h3>번역자 자격</h3>
            <table>
                <thead>
                    <tr>
                        <th>번역자 유형</th>
                        <th>자격 요건</th>
                        <th>신분증 첨부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>공인 번역사</strong></td>
                        <td>번역 자격을 보유한 전문가</td>
                        <td>필요 (일반적)</td>
                    </tr>
                    <tr>
                        <td><strong>당사자 본인</strong></td>
                        <td>양국 언어에 능통한 자</td>
                        <td>필요</td>
                    </tr>
                    <tr>
                        <td><strong>공증받은 번역</strong></td>
                        <td>공증인 앞에서 번역의 진정성을 인증받음</td>
                        <td>불필요</td>
                    </tr>
                </tbody>
            </table>

            <h3>공증이 필요한 경우</h3>
            <p>다음의 경우 번역문에 대한 공증 또는 인증이 필요합니다:</p>

            <div class="warning-box">
                <h3>주의: 중요한 서류</h3>
                <p><strong>외국인의 위임장</strong>(처분, 취득, 상속협의분할 등)의 번역문을 제출할 때는 특히 신경써야 합니다. 위임장은 소유권 처분의 근거가 되는 중요한 문서이기 때문에, 번역의 정확성이 매우 중요합니다.</p>
            </div>

            <h3>번역 공증 방법 3가지</h3>

            <div class="case-box">
                <h3>① 국내 공증인 공증</h3>
                <p><strong>대상:</strong> 한국 부동산등기규칙 제46조 제4항에 따른 공증인</p>
                <p><strong>절차:</strong></p>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    <li>공증사무소에서 번역문의 원문 일치성을 공증받음</li>
                    <li>공증인이 "이 번역은 원문 내용과 동일함"을 인증</li>
                    <li>공증문서와 함께 등기신청</li>
                </ul>
                <p style="margin-top: 10px; color: #666; font-size: 0.9em;"><span class="icon">✓</span>가장 간편하고 신속함 (1-2일)</p>
            </div>

            <div class="country-box">
                <h3>② 재외공관(한국 대사관·영사관) 확인</h3>
                <p><strong>대상:</strong> 재외국민의 외국어 서류</p>
                <p><strong>대상 국가:</strong> 당사자가 체류 중인 국가의 한국 대사관/총영사관</p>
                <p><strong>절차:</strong></p>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    <li>현지 한국 공관에 번역문 인증 신청</li>
                    <li>공증담당영사가 번역문의 진정성을 확인</li>
                    <li>확인서 또는 공증 사본을 첨부하여 등기신청</li>
                </ul>
            </div>

            <div class="country-box">
                <h3>③ 아포스티유 (원문 공증 후)</h3>
                <p><strong>대상:</strong> 아포스티유 협약 가입국 출신 공문서</p>
                <p><strong>절차:</strong></p>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    <li>원문에 아포스티유를 받음 (출신 국가)</li>
                    <li>한국에서 번역문을 공증받음</li>
                    <li>번역문도 별도로 아포스티유를 받아야 하는 경우도 있음 (등기예규 제1778호 제4조 제1항)</li>
                </ul>
                <p style="margin-top: 10px; color: #666; font-size: 0.9em;"><span class="icon">⚠</span>가장 복잡하고 시간 소요 (2-4주)</p>
            </div>` },
      { heading: `번역 공증이 필요 없는 경우`, content: `<p>번역문을 아예 공증받지 않아도 되는 경우들을 정리했습니다.</p>

            <table>
                <thead>
                    <tr>
                        <th>상황</th>
                        <th>요구 사항</th>
                        <th>공증 필요 여부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>한국 공관 발급 서류</strong><br/>(재외국민등록부 등)</td>
                        <td>원본 제출</td>
                        <td>불필요</td>
                    </tr>
                    <tr>
                        <td><strong>외국 신분증</strong><br/>(여권, ID 카드)</td>
                        <td>성명/주소 부분만 번역 + 신분증 원본</td>
                        <td>불필요 (간단한 번역만)</td>
                    </tr>
                    <tr>
                        <td><strong>당사자 본인이 작성한 번역문</strong><br/>(당사자가 양국어 구사자)</td>
                        <td>번역문 + 신분증 사본</td>
                        <td>불필요</td>
                    </tr>
                    <tr>
                        <td><strong>등기관이 간단하다고 인정하는 서류</strong></td>
                        <td>등기관 판단</td>
                        <td>등기관 재량</td>
                    </tr>
                </tbody>
            </table>

            <div class="consultation-box">
                <h3>주의: 사전 상담 필수</h3>
                <p>번역 공증이 불필요하다고 판단해도, 등기소의 최종 결정을 받기 전까지는 확실하지 않습니다.</p>
                <p><strong>반드시 등기신청 전에 해당 등기소에 문의하여 필요 여부를 확인하세요.</strong></p>
            </div>` },
      { heading: `국가별 서류 처리 방법`, content: `<p>아포스티유 협약 가입 여부에 따라 처리 방법이 크게 달라집니다.</p>

            <h3>아포스티유 협약 가입국</h3>
            <p style="color: #555; font-size: 0.95em; margin-bottom: 20px;">미국, 일본, 중국, 독일, 프랑스, 영국, 캐나다, 호주, 러시아, 싱가포르, 홍콩, 스페인, 이탈리아 등 약 140개국</p>

            <table>
                <thead>
                    <tr>
                        <th>서류 종류</th>
                        <th>번역 필요</th>
                        <th>원문 공증/확인</th>
                        <th>한국 처리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>외국 공문서</strong><br/>(출생증명, 혼인증명 등)</td>
                        <td>네</td>
                        <td>아포스티유 (출신국)</td>
                        <td>한국어 번역 + 원문 아포스티유</td>
                    </tr>
                    <tr>
                        <td><strong>외국 공증서</strong><br/>(위임장, 인감증명 등)</td>
                        <td>네</td>
                        <td>아포스티유 (출신국)</td>
                        <td>한국어 번역 + 원문 아포스티유</td>
                    </tr>
                    <tr>
                        <td><strong>법원 판결문</strong></td>
                        <td>네</td>
                        <td>아포스티유 (법원)</td>
                        <td>한국어 번역 + 판결문 아포스티유</td>
                    </tr>
                    <tr>
                        <td><strong>신분증 (여권 등)</strong></td>
                        <td>간단히</td>
                        <td>불필요</td>
                        <td>성명/주소 부분만 번역</td>
                    </tr>
                </tbody>
            </table>

            <h3>아포스티유 협약 미가입국</h3>
            <p style="color: #555; font-size: 0.95em; margin-bottom: 20px;">필리핀, 베트남, 태국, 인도, 파키스탄, 이집트, 이란, 시리아 등</p>

            <div class="country-box">
                <h3>처리 방법</h3>
                <p><strong>1단계: 원문 인증</strong></p>
                <ul style="margin-left: 20px;">
                    <li>한국 대사관/영사관에서 영사 확인을 받음</li>
                    <li>또는 본국 관공서의 증명서를 받음</li>
                </ul>
                <p style="margin-top: 15px;"><strong>2단계: 번역</strong></p>
                <ul style="margin-left: 20px;">
                    <li>한국에서 한국어로 번역</li>
                    <li>번역문 + 신분증 사본</li>
                </ul>
                <p style="margin-top: 15px;"><strong>3단계: 등기신청</strong></p>
                <ul style="margin-left: 20px;">
                    <li>인증된 원문 + 번역문을 함께 제출</li>
                </ul>
            </div>` },
      { heading: `관련 법령 및 예규`, content: `<div class="case-box">
                <h3>부동산등기규칙 제46조 제8항</h3>
                <p>등기소에 제공하는 첨부정보가 외국어로 작성된 경우에는 번역문을 붙여야 한다.</p>
                <p class="cite">부동산등기규칙 (2024년 현행)</p>
            </div>

            <div class="case-box">
                <h3>부동산등기규칙 제46조 제9항</h3>
                <p>첨부정보가 외국 공문서이거나 외국 공증인이 공증한 문서인 경우에는 재외공관공증법 제30조제1항에 따라 공증담당영사로부터 문서의 확인을 받거나 아포스티유를 붙여야 한다.</p>
                <p class="cite">부동산등기규칙 (2017.10.1. 시행)</p>
            </div>

            <div class="case-box">
                <h3>등기예규 제1778호 제4조 (번역문의 첨부)</h3>
                <p><strong>제1항:</strong> 등기소에 제공하는 첨부정보가 외국어로 작성된 경우에는 규칙 제46조제8항에 따라 번역문을 붙여야 한다.</p>
                <p style="margin-top: 10px;"><strong>제2항:</strong> 번역문에는 번역인이 원문과 다름이 없다는 뜻과 번역인의 성명 및 주소를 기재하고 날인 또는 서명하여야 하며 번역인의 신분증사본을 제공하여야 한다. 다만, 번역문을 인증받아 제출하는 경우에는 그러하지 아니하다.</p>
                <p class="cite">등기예규 제1778호 (2018년 현행)</p>
            </div>

            <div class="case-box">
                <h3>등기예규 제1778호 제4조 제1항 (번역문의 아포스티유 확인)</h3>
                <p>번역문에 대해서도 아포스티유 확인이 필요한 경우, 원문 및 번역문에 대하여 각각 별도로 아포스티유 확인을 신청하여야 하며, 번역문은 공증사무소 공증을 먼저 받고 법무부의 아포스티유 확인을 신청해야 한다.</p>
                <p class="cite">등기예규 제1778호</p>
            </div>
        </section>

        <!-- 섹션 8: 다음으로 확인할 내용 + CTA -->
        <section class="section">
            <div class="next-section">
                <h3>다음으로 확인할 내용</h3>
                <ul>
                    <li><a href="외등_25_아포스티유.html">외등_25_아포스티유 — 아포스티유의 완벽 가이드</a></li>
                    <li><a href="외등_07_외국인처분.html">외등_07_외국인처분 — 외국인 처분 위임장 작성 가이드</a></li>
                    <li><a href="외등_06_국적별서류.html">외등_06_국적별서류 — 국적별 외국인 부동산 취득 첨부서류</a></li>
                </ul>
            </div>

            <div class="consultation-box">
                <h3>상담을 원하시나요?</h3>
                <p><strong>이 내용이 해당되시나요? 첫 상담은 무료입니다.</strong></p>
                <p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다. 개별 사안에 맞는 정확한 조언을 받으세요.</p>
                <div class="cta-buttons">
                    <a href="tel:02-000-0000" class="btn btn-phone">☎ 전화 상담 신청</a>
                    <a href="https://kakao.com" class="btn btn-kakao">💬 카카오톡 상담</a>
                </div>
            </div>
        </section>

        <!-- 면책 문구 -->
        <div class="disclaimer">
            <p><strong>면책 문구</strong></p>
            <p>본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 조언이 아닙니다. 이 페이지의 정보로 인해 발생하는 손실이나 손해에 대해 책임을 지지 않습니다. 개별 사건의 처리를 위해서는 법무사·변호사 등 전문가와 충분한 상담이 필요합니다.</p>
            <p>이 페이지는 2025년 현행 법령 기준으로 작성되었습니다. 법령 개정 시 내용이 변경될 수 있으니, 최신 정보는 정부 공식 웹사이트(법무부, 법원행정처)를 참고하시기 바랍니다.</p>
        </div>
    </div>
</body>
</html>` },
    ],
    laws: [
      { name: `부동산등기규칙 제46조 제8항`, desc: `등기소에 제공하는 첨부정보가 외국어로 작성된 경우에는 번역문을 붙여야 한다.` },
      { name: `부동산등기규칙 제46조 제9항`, desc: `첨부정보가 외국 공문서이거나 외국 공증인이 공증한 문서인 경우에는 재외공관공증법 제30조제1항에 따라 공증담당영사로부터 문서의 확인을 받거나 아포스티유를 붙여야 한다.` },
      { name: `등기예규 제1778호 제4조 (번역문의 첨부)`, desc: `제1항: 등기소에 제공하는 첨부정보가 외국어로 작성된 경우에는 규칙 제46조제8항에 따라 번역문을 붙여야 한다.` },
      { name: `등기예규 제1778호 제4조 제1항 (번역문의 아포스티유 확인)`, desc: `번역문에 대해서도 아포스티유 확인이 필요한 경우, 원문 및 번역문에 대하여 각각 별도로 아포스티유 확인을 신청하여야 하며, 번역문은 공증사무소 공증을 먼저 받고 법무부의 아포스티유 확인을 신청해야 한다.` },
    ],
    forms: [],
  },
  {
    id: 'fi-27',
    title: "투자이민제도와 부동산 취득",
    meta: "공익사업 투자이민 대상·금액 기준",
    sections: [
      { heading: `이런 분께 필요합니다`, content: `<div class="checklist-box">
                <h3>다음 중 해당되시나요?</h3>
                <div class="checklist-item">외국인으로서 한국 부동산에 투자하여 거주자격을 취득하려는 경우</div>
                <div class="checklist-item">공익사업(기업도시, 관광시설 등)에 투자하여 한국 체류를 원하는 경우</div>
                <div class="checklist-item">투자이민 부동산의 등기 절차와 법적 지위를 알고 싶은 경우</div>
                <div class="checklist-item">투자금액 기준과 거주→영주 자격 변경 요건을 확인하려는 경우</div>
                <div class="checklist-item">투자이민 부동산 보유 중 주의사항과 법적 제약을 알고 싶은 경우</div>
                <div class="checklist-item">은퇴자이거나 고액 투자자로서 특례 제도 적용 여부를 확인하려는 경우</div>
            </div>` },
      { heading: `핵심 요약`, content: `<div class="summary-box">
                <h3>투자이민제도란?</h3>
                <ul>
                    <li><strong>정의</strong>: 외국인이 한국 부동산, 공익펀드, 낙후지역 개발사업 등에 투자하면 경제활동이 자유로운 거주(F-2) 자격을 부여하고, 5년간 투자를 유지하면 영주(F-5) 자격으로 변경하는 제도</li>
                    <li><strong>기본 원리</strong>: 투자 → 거주자격(F-2) 획득 → 5년 유지 → 영주자격(F-5) 변경</li>
                    <li><strong>법 근거</strong>: 출입국관리법 시행령 [별표 1의2] 제24호, [별표 1의3] 제16호 | 법무부고시 제2023-319호 (2023년 6월 29일 시행)</li>
                    <li><strong>최근 개정</strong>: 2023년 6월 29일 법무부고시 제2023-319호로 투자금액 기준 상향 조정됨</li>
                </ul>
            </div>

            <div class="cta-box">
                <p>이 내용이 해당되시나요? 첫 상담은 무료입니다.</p>
            </div>` },
      { heading: `투자이민제도 개요`, content: `<h3>제도의 취지</h3>
            <p>투자이민제도는 법무부가 외국인 투자유치를 통해 국내 경제 활성화를 도모하는 정책의 일환입니다. 일정 금액 이상의 부동산 또는 공익사업에 투자하는 외국인에게 한국 내 거주와 경제활동을 자유롭게 허용하고, 장기 투자를 유지하는 경우 영주권을 부여하는 방식으로 운영됩니다.</p>

            <h3>투자이민의 두 가지 유형</h3>
            <ul>
                <li><strong>부동산 투자이민제도</strong>: 주택, 상업용 부동산, 토지 등에 직접 투자</li>
                <li><strong>공익사업 투자이민제도</strong>: 기업도시, 관광휴양시설, 낙후지역 개발사업 등 공익 목적 투자</li>
            </ul>

            <h3>투자이민 후 체류자격 변화</h3>
            <table>
                <tr>
                    <th>단계</th>
                    <th>체류자격</th>
                    <th>설명</th>
                    <th>기간</th>
                </tr>
                <tr>
                    <td>1단계</td>
                    <td>거주(F-2)</td>
                    <td>투자 후 처음 부여받는 체류자격. 경제활동 자유</td>
                    <td>5년</td>
                </tr>
                <tr>
                    <td>2단계</td>
                    <td>영주(F-5)</td>
                    <td>투자 유지 조건 충족 시 획득. 영구 거주 가능</td>
                    <td>무기한</td>
                </tr>
            </table>

            <div class="case-law-box">
                <h4>법령 근거</h4>
                <ul>
                    <li>출입국관리법 시행령 [별표 1의2] 제24호: 거주(F-2) 자격 기준</li>
                    <li>출입국관리법 시행령 [별표 1의3] 제16호: 영주(F-5) 자격 기준</li>
                    <li>법무부고시 제2023-319호: 투자금액 및 요건 기준 (2023. 6. 29. 시행)</li>
                </ul>
            </div>` },
      { heading: `공익사업 투자이민 종류 및 금액 기준`, content: `<h3>공익사업 투자이민의 분류</h3>
            <p>공익사업에 대한 투자이민은 투자 규모와 투자자 나이에 따라 <strong>일반투자이민</strong>, <strong>은퇴투자이민</strong>, <strong>고액투자이민</strong>으로 구분됩니다.</p>

            <table>
                <tr>
                    <th>투자이민 유형</th>
                    <th>대상</th>
                    <th>투자금액</th>
                    <th>획득 자격</th>
                    <th>영주 전환</th>
                </tr>
                <tr>
                    <td><strong>일반투자이민</strong></td>
                    <td>외국인 (나이 무관)</td>
                    <td>15억 원 이상</td>
                    <td>거주(F-2)</td>
                    <td>5년 유지 후 영주(F-5) 전환</td>
                </tr>
                <tr>
                    <td><strong>은퇴투자이민</strong></td>
                    <td>55세 이상 외국인</td>
                    <td>3억 원 이상</td>
                    <td>거주(F-2)</td>
                    <td>5년 유지 후 영주(F-5) 전환</td>
                </tr>
                <tr>
                    <td><strong>고액투자이민</strong></td>
                    <td>외국인 (나이 무관)</td>
                    <td>30억 원 이상 (원금보장·무이자형)</td>
                    <td>조건부 영주(F-5)</td>
                    <td>즉시 조건부 영주 부여, 5년 유지 조건</td>
                </tr>
            </table>

            <div class="warning-box">
                <h4>금액 기준 변경 알림</h4>
                <p><strong>2023년 6월 29일 이후</strong> 다음과 같이 변경되었습니다:</p>
                <ul>
                    <li>일반투자이민: <span class="highlight">15억 원 이상</span> (이전 기준 상향)</li>
                    <li>은퇴투자이민: <span class="highlight">3억 원 이상</span> (이전 기준 유지)</li>
                    <li>고액투자이민: <span class="highlight">30억 원 이상</span> (원금보장·무이자형)</li>
                </ul>
            </div>

            <h3>투자 대상 (공익사업)</h3>
            <p>공익사업 투자이민의 투자 대상은 다음과 같습니다:</p>

            <h4>1) 원금보장·무이자형</h4>
            <ul>
                <li>한국산업은행에 예치</li>
                <li>안정성이 높으며, 원금 손실 위험 최소</li>
                <li>고액투자이민(30억 원 이상)의 주요 투자 방식</li>
            </ul>

            <h4>2) 손익발생형</h4>
            <ul>
                <li>기업도시개발특별법에 따른 관광 중심 기업도시 개발사업</li>
                <li>국가적 장기 개발프로젝트</li>
                <li>손익에 따라 수익 또는 손실 발생 가능</li>
            </ul>

            <h4>3) 관광·휴양시설</h4>
            <ul>
                <li>관광지역 개발사업</li>
                <li>관광이민제도와 연계 가능하며, 투자이민 5년 유지 기간에 합산</li>
            </ul>

            <div class="example-box">
                <h4>예시</h4>
                <p><strong>일반투자이민 신청 사례:</strong> A씨(독일 국적)는 기업도시 관광시설 개발사업에 15억 원을 투자하고 거주(F-2) 자격을 취득합니다. 5년간 투자금을 유지하면 영주(F-5) 자격으로 변경되어 한국에 무기한 거주할 수 있게 됩니다.</p>
            </div>` },
      { heading: `투자 이후 절차: 거주(F-2) → 영주(F-5) 자격 취득`, content: `<h3>단계별 절차</h3>
            <ol>
                <li>
                    <strong>투자 실행 및 체류자격 신청</strong>
                    <ul>
                        <li>정해진 투자금액 이상을 투자</li>
                        <li>투자 증명 서류를 준비하여 출입국관리청에 거주(F-2) 자격 신청</li>
                        <li>심사 후 거주(F-2) 자격 부여 (보통 1~2개월)</li>
                    </ul>
                </li>
                <li>
                    <strong>거주(F-2) 기간 동안 투자 유지</strong>
                    <ul>
                        <li>최소 5년 동안 투자금을 사업에 묶어두어야 함</li>
                        <li>투자금 인출, 환매, 양도 불가</li>
                        <li>체류자격 갱신 시마다 투자 유지 증명</li>
                    </ul>
                </li>
                <li>
                    <strong>5년 경과 후 영주(F-5) 자격 신청</strong>
                    <ul>
                        <li>투자 유지 기간(5년) 완료</li>
                        <li>투자 지속 서약서 및 증명 서류 제출</li>
                        <li>영주(F-5) 자격 변경 신청</li>
                    </ul>
                </li>
                <li>
                    <strong>영주(F-5) 자격 획득</strong>
                    <ul>
                        <li>영주자격 부여로 한국 내 무기한 거주 가능</li>
                        <li>취업, 사업, 부동산 취득 등 자유로운 경제활동</li>
                    </ul>
                </li>
            </ol>

            <h3>관광·휴양시설 투자이민 연계</h3>
            <p>관광이민제도와 투자이민제도를 동시에 활용하는 경우, 두 사업에 투자한 기간을 합산하여 5년을 인정할 수 있습니다. 예를 들어 관광시설 투자 3년 + 공익사업 투자 2년 = 5년으로 인정되어 더 빨리 영주 자격 취득이 가능합니다.</p>

            <h3>고액투자이민(F-5 제16호)의 특이점</h3>
            <p>30억 원 이상을 투자하는 고액투자이민의 경우:</p>
            <ul>
                <li>거주(F-2)를 거치지 않고 <strong>바로 조건부 영주(F-5) 자격</strong>을 부여</li>
                <li>투자금은 <strong>원금보장·무이자형</strong>이어야 함 (한국산업은행 예치)</li>
                <li>5년간 투자 유지 서약</li>
                <li>5년 후 완전한 영주 자격(무조건부)으로 변경</li>
            </ul>

            <div class="case-law-box">
                <h4>투자 유지의 법적 의미</h4>
                <p>"투자 유지"는 단순히 투자금을 사업에 예치해두는 것뿐 아니라, 투자 목적인 공익사업이 정상 진행되고 있어야 한다는 의미입니다. 만약 투자 대상 사업이 중단되거나 투자금이 회수된다면 투자이민 자격 취소 대상이 될 수 있습니다.</p>
            </div>` },
      { heading: `부동산 등기와의 관계`, content: `<h3>투자이민 부동산의 등기</h3>
            <p>투자이민으로 취득한 부동산의 등기 절차는 일반 외국인이 부동산을 취득하는 경우와 <strong>동일합니다</strong>. 투자이민 자격이 있다고 해서 특별한 등기 절차나 혜택이 추가로 주어지지는 않습니다.</p>

            <h4>투자이민 부동산 등기 시 필요한 절차</h4>
            <ul>
                <li><strong>외국인토지법 준수</strong>: 투자 대상 토지가 규제지역에 해당하면 취득 신고 또는 허가 필요</li>
                <li><strong>일반적인 부동산 등기</strong>: 매매계약 → 소유권이전등기 신청 → 등기부 작성</li>
                <li><strong>투자이민 증명</strong>: 등기 시 투자이민 체류자격 사본 제출 (신원 확인용)</li>
            </ul>

            <h3>외국인토지법에 따른 규제</h3>
            <p>투자이민으로 토지를 취득하는 경우, 해당 토지가 다음 지역에 해당하면 취득 신고 또는 허가가 필요합니다:</p>
            <ul>
                <li>군사 시설, 국방, 안보에 관련된 지역</li>
                <li>국가 전략지구(경제자유구역, 기업도시 등) - 그러나 투자이민 사업 대상 지역은 별도 규정</li>
                <li>농지(농지법 준용)</li>
            </ul>

            <h3>투자이민 부동산의 매도 제약</h3>
            <p>투자이민 기간 중(특히 5년 유지 기간 중) 부동산을 매도하면 다음과 같은 법적 문제가 발생할 수 있습니다:</p>

            <div class="warning-box">
                <h4>주의사항</h4>
                <ul>
                    <li><strong>투자 유지 조건 위반</strong>: 투자 목적의 부동산을 매도하면 투자이민 취지 위반</li>
                    <li><strong>체류자격 취소</strong>: 거주(F-2) 또는 영주(F-5) 자격이 취소될 수 있음</li>
                    <li><strong>재정입국 불가</strong>: 자격이 취소되면 재입국이 어려워질 수 있음</li>
                </ul>
            </div>

            <h3>투자이민 부동산과 등기의 법적 성격</h3>
            <p>부동산 등기부에는 "투자이민" 표기가 나타나지 않습니다. 등기부에 기재되는 것은 순전히 소유권과 권리의 상태일 뿐, 그 소유자가 어떤 사유로 투자했는지는 별개의 문제입니다. 다만 출입국관리 절차에서는 투자이민 유지를 증명하기 위해 부동산 소유 증명(등기사본)을 요구합니다.</p>

            <div class="case-law-box">
                <h4>관련 규정</h4>
                <ul>
                    <li>부동산등기법 제50조: 외국인 등기</li>
                    <li>외국인토지법 제6조: 토지취득 신고</li>
                    <li>출입국관리법 제34조: 체류자격 변경</li>
                </ul>
            </div>` },
      { heading: `주의사항`, content: `<h3>1. 투자금액 기준의 정확한 이해</h3>
            <div class="warning-box">
                <h4>환율 변동에 대한 유의</h4>
                <p>투자금액이 외화로 표시되는 경우, 환율 변동으로 인해 원화 기준 투자금액이 변할 수 있습니다. 투자 시점의 환율을 기준으로 하며, 이후 환율 변동으로 기준금액 이하로 내려가도 투자이민 자격은 유지됩니다(다만, 추가 투자나 갱신 시에는 영향을 받을 수 있음).</p>
            </div>

            <h3>2. 투자 유지의 의무</h3>
            <ul>
                <li><strong>5년 동안 투자금 인출 불가</strong>: 거주(F-2) 기간 중 투자금을 회수하면 자격 취소</li>
                <li><strong>사업 진행 모니터링</strong>: 투자 대상 사업이 정상 진행되는지 확인해야 함</li>
                <li><strong>사업 중단 시 대응</strong>: 만약 투자 대상 사업이 중단되면 즉시 법무사·변호사와 상담 필요</li>
            </ul>

            <h3>3. 체류자격 갱신</h3>
            <ul>
                <li><strong>정기적 갱신</strong>: 거주(F-2) 자격은 보통 2년씩 갱신 필요</li>
                <li><strong>투자 증명서 준비</strong>: 매 갱신 시 투자 유지 증명 서류 제출</li>
                <li><strong>기한 준수</strong>: 자격 갱신 기한을 놓치면 불법체류 상태가 됨</li>
            </ul>

            <h3>4. 은퇴투자이민 신청 시 주의</h3>
            <div class="warning-box">
                <h4>나이 기준 확인</h4>
                <p>은퇴투자이민은 <strong>신청 시점에 55세 이상</strong>이어야 합니다. 나이 기준일을 명확히 확인하고 신청 시기를 결정해야 합니다. 55세 미만이면 일반투자이민(15억 원 이상) 기준을 적용받습니다.</p>
            </div>

            <h3>5. 고액투자이민(F-5)의 조건부 영주</h3>
            <ul>
                <li><strong>조건부 영주의 의미</strong>: 즉시 영주 자격을 얻지만, 5년 동안 투자금 유지 조건 서약</li>
                <li><strong>조건 위반 시</strong>: 5년 내 투자금을 회수하거나 사업이 중단되면 영주 자격 취소 가능</li>
                <li><strong>5년 후 무조건부 영주</strong>: 5년 조건을 성공적으로 유지하면 조건 없는 영주로 확정</li>
            </ul>

            <h3>6. 세금 및 재정 관리</h3>
            <ul>
                <li><strong>소득세</strong>: 투자 사업에서 발생한 수익에 대해 한국 소득세 납부 의무</li>
                <li><strong>재산세</strong>: 부동산 취득 후 재산세 신고 및 납부</li>
                <li><strong>환전 규제</strong>: 투자 상환금이 발생해도 즉시 환전하지 않도록 주의</li>
            </ul>

            <h3>7. 다른 출입국 사유와의 충돌</h3>
            <ul>
                <li><strong>여행 및 출국</strong>: 거주(F-2) 자격 유지 중 국외 여행은 가능하나, 과도한 해외 거주는 자격 취소 사유가 될 수 있음</li>
                <li><strong>범죄 기록</strong>: 한국에서 범죄를 저지르면 즉시 체류자격 취소 가능</li>
            </ul>

            <div class="case-law-box">
                <h4>출입국관리법의 기본 원칙</h4>
                <p>투자이민은 특정 조건(일정 금액의 투자 + 거주)을 전제로 주어지는 자격입니다. 이 조건을 위반하거나 다른 법규 위반 행위가 발생하면 언제든지 자격이 취소될 수 있음을 명심해야 합니다.</p>
            </div>
        </section>

        <!-- 섹션 8: 다음 확인 사항 및 상담 -->
        <section>
            <div class="next-steps">
                <h3>다음으로 확인할 내용</h3>
                <ul>
                    <li><a href="외등_02_외국인취득.html">외국인의 한국 부동산 취득 절차</a> — 투자이민 부동산 취득의 구체적 단계</li>
                    <li><a href="외등_03_토지취득허가.html">외국인 토지취득 허가</a> — 규제지역 토지 투자 시 필요 조치</li>
                    <li><a href="외등_04_취득신고.html">외국인 부동산 취득·보유 신고</a> — 취득 후 신고 의무</li>
                </ul>
            </div>

            <div class="consultation-section">
                <h3>전문가 상담이 필요한가요?</h3>
                <p>외국인·재외국민 투자이민 부동산 취득은 출입국 자격, 부동산 등기, 세금 등 여러 법령이 복합적으로 적용됩니다. 투자이민 신청부터 부동산 등기, 자격 갱신까지 각 단계에서 전문가의 조언이 필수적입니다.</p>
                <a href="tel:02-1234-5678" class="consultation-btn">무료 상담 신청</a>
            </div>

            <div class="cta-box">
                <p>외국인·재외국민 등기는 국적·체류 자격·입국 여부에 따라 준비 서류가 달라집니다.</p>
            </div>
        </section>

        <!-- 면책 문구 -->
        <div class="disclaimer">
            <strong>면책 문구</strong><br>
            본 페이지는 일반적인 법률 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 조언이 아닙니다. 이 페이지는 2025년 현행 법령 기준으로 작성되었습니다. 법령 개정이나 판례 변화에 따라 내용이 달라질 수 있으므로, 구체적인 법률 자문이 필요한 경우에는 반드시 법무사·변호사와 상담하시기 바랍니다.
        </div>
    </div>
</body>
</html>` },
    ],
    laws: [
    ],
    forms: [],
  }
];
