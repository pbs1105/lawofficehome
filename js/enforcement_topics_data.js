const ENFORCEMENT_TOPICS = [
{
    id: 'ef-1',
    title: '강제집행 처음부터 끝까지',
    meta: '판결 받고 나서 어떻게 하나요?',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
                <ul>
                    <li>법원에서 판결을 받았는데 상대방이 판결에 따르지 않는 경우</li>
                    <li>채무자의 재산을 압류하거나 강제로 회수해야 하는 경우</li>
                    <li>강제집행 절차가 어떻게 진행되는지 알고 싶은 경우</li>
                    <li>집행권원(집행 증서)이 필요한 경우</li>
                    <li>채무자가 재산을 숨기거나 도망치려 할 때 대응하는 방법을 알고 싶은 경우</li>
                    <li>집행 비용과 절차에 대해 궁금한 경우</li>
                </ul>
            </div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
                <h3>강제집행이란?</h3>
                <p>법원의 판결이나 계약서 같은 '집행권원'을 바탕으로, 채무자가 자발적으로 지급하지 않은 금전이나 물건을 국가 기구(법원, 집행관 등)가 강제로 회수하는 법적 절차입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=000100" target="_blank" rel="noopener" title="민사집행법 제1조 — 대법원 종합법률정보">민사집행법 제1조</a></p>
                <p>판결을 받았다고 해서 끝나는 것이 아닙니다. 판결에 따라 상대방이 자발적으로 이행하지 않으면, 강제집행을 신청해서 강제로 회수해야 합니다.</p>
            </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>강제집행이란 무엇인가?</h3>
            <p>강제집행은 채권자(판결을 받은 쪽)가 채무자(판결에 진 쪽)로부터 금전을 받거나 물건을 회수하기 위해 국가의 강제력을 이용하는 절차입니다. 민법상 권리 실현을 위한 최후의 수단이며, 법원과 집행관이 이를 집행합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=000100" target="_blank" rel="noopener" title="민사집행법 제1조 — 대법원 종합법률정보">민사집행법 제1조</a></p>

            <h3>강제집행의 종류</h3>
            <p>강제집행은 대상 재산의 종류에 따라 다음과 같이 구분됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002400" target="_blank" rel="noopener" title="민사집행법 제24조 — 대법원 종합법률정보">민사집행법 제24조</a></p>
            <table>
                <thead><tr><th>집행 종류</th><th>대상</th><th>설명</th></tr></thead>
                <tbody>
                    <tr><td>부동산 강제집행</td><td>토지, 건물 등 부동산</td><td>부동산을 경매에 붙여서 강제 판매합니다. 판매 대금을 채권자에게 분배합니다.</td></tr>
                    <tr><td>동산 강제집행</td><td>자동차, 기계, 가구 등 부동산 외 물건</td><td>동산을 압류한 후 경매하거나 인도받습니다.</td></tr>
                    <tr><td>채권 강제집행</td><td>채무자가 제3자에게 가진 채권</td><td>예: 통장 잔액, 급여, 임대료 수입 등을 압류합니다.</td></tr>
                    <tr><td>기타 재산권 강제집행</td><td>주식, 특허권, 저작권 등</td><td>금융 자산이나 지적재산권을 압류합니다.</td></tr>
                </tbody>
            </table>

            <h3>강제집행 절차 개요</h3>
            <div class="step-box"><p><span class="step-num">1</span><strong>집행권원 준비</strong> — 판결, 화해조서, 지급명령 등 법적 근거</p><p style="margin-top: 12px;">집행권원은 강제집행의 법적 토대입니다. 판결만으로는 부족하며, 법원이 판결이 확정되었음을 인정하는 '집행문'이 필요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 — 대법원 종합법률정보">민사집행법 제56조</a></p></div>
            <div class="step-box"><p><span class="step-num">2</span><strong>집행문 부여</strong> — 판결문에 집행문을 부여받기</p><p style="margin-top: 12px;">판결을 한 법원의 집행관사에 '집행문'을 신청합니다. 집행문은 "이 판결은 확정되었고 강제집행할 수 있다"는 공식 인정서입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800" target="_blank" rel="noopener" title="민사집행법 제28조, 제29조 — 대법원 종합법률정보">민사집행법 제28조, 제29조</a></p></div>
            <div class="step-box"><p><span class="step-num">3</span><strong>강제집행 신청</strong> — 법원에 강제집행을 신청</p><p style="margin-top: 12px;">집행문을 받은 후, 채무자의 재산 위치에 따라 적절한 법원에 강제집행을 신청합니다. 부동산은 부동산 소재지 법원, 동산과 채권은 채무자 주소지 법원입니다.</p></div>
            <div class="step-box"><p><span class="step-num">4</span><strong>집행</strong> — 법원 집행관이 재산 압류 및 매각</p><p style="margin-top: 12px;">집행관은 채무자의 재산을 압류하고, 경매 절차를 통해 매각합니다. 매각 대금에서 집행 비용을 공제한 나머지를 채권자에게 분배합니다.</p></div>

            <h3>집행문이란?</h3>
            <p>집행문(執行文)은 판결이 확정되었고 강제집행이 가능하다는 것을 법원이 공식적으로 인정하는 서류입니다. 판결만으로는 강제집행이 불가능하며, 반드시 집행문이 필요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800" target="_blank" rel="noopener" title="민사집행법 제28조 — 대법원 종합법률정보">민사집행법 제28조</a></p>
            <p>집행문 부여 신청은 판결을 한 법원의 집행관사(또는 등기소)에 합니다. 필요 서류는 판결문, 확정증명서, 신청서 등입니다. 비용은 일반 신청 수수료만 납부하면 됩니다.</p>

            <h3>집행 가능 시기</h3>
            <p>강제집행은 다음 조건을 만족할 때만 신청할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003900" target="_blank" rel="noopener" title="민사집행법 제39조 — 대법원 종합법률정보">민사집행법 제39조</a></p>
            <p><strong>⚡ 판결이 확정된 후에만 강제집행이 가능합니다.</strong> 가집행판결(집행 정지 조건)을 받은 경우는 예외적으로 판결 확정 전에도 집행이 가능합니다. 항소나 상고가 진행 중이면 강제집행을 신청할 수 없습니다.</p>
            <p>또한 집행 신청에는 공소 시효가 없지만, 판결의 집행력이 있어야 합니다. 일반적으로 판결의 집행력은 확정 후 10년입니다.</p>

            <h3>채권자가 알아야 할 주의사항</h3>
            <p>강제집행을 신청하기 전에 다음을 확인하세요:</p>
            <ul>
                <li>판결문 원본 또는 인증본이 있는가?</li>
                <li>판결이 확정되었는가? (항소 기간 만료 또는 상소 기각 확정)</li>
                <li>상대방의 현재 주소와 재산 위치를 파악했는가?</li>
                <li>강제집행 비용(집행관 수수료, 측량비 등)을 준비했는가?</li>
                <li>지급명령을 받은 경우, 지급명령이 확정되었는가?</li>
            </ul>
            <p>특히 채무자의 재산을 미리 파악하는 것이 중요합니다. 강제집행을 신청해도 집행할 재산이 없으면 실질적 회수가 어려울 수 있습니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 판결을 받았으면 바로 강제집행을 신청할 수 있나요?</div><div class="qna-a">A. 아니요. 먼저 판결이 확정되어야 합니다. 항소 기간(14일)이 경과하거나 항소심에서 판결이 확정되어야 강제집행을 신청할 수 있습니다. 또한 집행문 부여를 받은 후에야 강제집행 신청이 가능합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003900" target="_blank" rel="noopener" title="민사집행법 제39조 — 대법원 종합법률정보">민사집행법 제39조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 강제집행에 드는 비용은 누가 부담하나요?</div><div class="qna-a">A. 강제집행 비용은 일단 채권자가 선납합니다. 여기에는 집행관 수수료, 감정료, 측량비 등이 포함됩니다. 그러나 경매 대금에서 이 비용을 공제한 후 채권자에게 분배하므로, 결국 채무자의 재산에서 우선 공제됩니다. 비용은 구체적 상황에 따라 다르므로 미리 집행관사에 문의하세요.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 집행권원이 없으면 강제집행을 할 수 없나요?</div><div class="qna-a">A. 맞습니다. 강제집행을 하려면 반드시 집행권원이 필요합니다. 집행권원에는 확정판결, 항소심 판결, 가집행판결, 화해조서, 지급명령, 공정증서 등이 있습니다. 이 중 하나가 없으면 강제집행을 신청할 수 없습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 — 대법원 종합법률정보">민사집행법 제56조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 부동산 강제집행과 채권 강제집행은 어떻게 다르나요?</div><div class="qna-a">A. 부동산 강제집행은 토지나 건물을 경매하는 절차이며, 시간이 오래 걸리지만 회수 가능성이 높습니다. 채권 강제집행(예: 통장 압류, 급여 압류)은 채무자의 현금이나 수입을 직접 회수하는 방식으로, 더 빠르게 회수할 수 있습니다. 어느 것이 효율적인지는 채무자의 재산 상황에 따라 다릅니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 강제집행 중에 채무자가 항소를 제기할 수 있나요?</div><div class="qna-a">A. 강제집행이 이미 시작된 후에는 항소로 집행을 정지할 수 없습니다. 다만 집행문 부여에 대해 이의신청을 하거나, 집행에 관한 이의신청(집행 절차에 위법이 있다는 주장)을 할 수는 있습니다. 그러나 이 경우도 집행 정지는 예외적입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003400" target="_blank" rel="noopener" title="민사집행법 제34조 — 대법원 종합법률정보">민사집행법 제34조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 집행 신청 후 언제쯤 돈을 받을 수 있나요?</div><div class="qna-a">A. 이는 강제집행의 종류와 채무자의 재산 상황에 따라 크게 다릅니다. 채권(통장, 급여) 강제집행은 수주~수개월, 부동산 경매는 6개월~1년 이상 걸릴 수 있습니다. 경매 절차 중에도 여러 단계(입찰, 매각, 배분)가 있어 시간이 소요됩니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 채무자가 강제집행 중에 파산을 신청하면 어떻게 되나요?</div><div class="qna-a">A. 채무자가 파산을 신청하면 진행 중인 강제집행은 중단됩니다. 파산 절차에서는 모든 채권자가 동등한 지위에서 배당을 받게 됩니다. 따라서 이미 강제집행으로 회수한 분은 제외되지만, 아직 진행 중인 부분은 파산 절차에 편입됩니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h3>강제집행의 범위와 한계</h3><p>대법원은 강제집행이 권리자의 당연한 권리이지만, 채무자의 기본적 생존권을 침해하지 않는 범위 내에서만 가능하다고 해석하고 있습니다. 예를 들어, 최저생계비 수준의 재산이나 일용근로자의 생활비는 압류 대상에서 제외될 수 있습니다.</p></div>
            <div class="ruling-box"><h3>집행문의 필요성</h3><p>대법원은 집행문이 단순한 형식이 아니라 판결의 확정과 집행 가능성을 공식적으로 인정하는 중요한 절차라고 판시했습니다. 집행문 없이 강제집행을 신청하면 신청 자체가 각하되므로, 반드시 먼저 집행문을 부여받아야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800" target="_blank" rel="noopener" title="민사집행법 제28조 — 대법원 종합법률정보">민사집행법 제28조</a></p></div>
            <div class="ruling-box"><h3>가집행판결의 효력</h3><p>가집행판결(집행 정지 조건)을 받은 경우, 판결이 확정되기 전에도 강제집행이 가능합니다. 다만 항소로 인해 가집행 정지 결정이 나올 수 있으므로, 이 경우 집행이 중단될 수 있습니다. 가집행판결의 장점은 빠른 회수이지만, 이후 판결이 뒤바뀔 위험이 있다는 점입니다.</p></div>
            <div class="ruling-box"><h3>집행권원의 확정력</h3><p>강제집행을 하기 위해서는 집행권원이 반드시 필요합니다. 대법원은 집행권원이 없는 청구권(예: 계약금 반환 청구)에 대해서는 강제집행이 불가능하며, 먼저 소송으로 판결을 받아야 한다고 판시했습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 — 대법원 종합법률정보">민사집행법 제56조</a></p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>집행 비용의 확인</h3><p>강제집행에는 상당한 비용이 소요됩니다. 집행관 수수료, 감정료, 측량료, 경매 진행 비용 등이 있습니다. 회수할 재산이 없거나 적으면, 비용 선납이 허사가 될 수 있습니다. 강제집행을 신청하기 전에 반드시 비용을 확인하고 채무자의 재산 여부를 파악하세요.</p></div>
            <div class="warn-box"><h3>상대방 주소 확인의 중요성</h3><p>강제집행을 신청하려면 채무자의 정확한 주소와 재산 위치를 알아야 합니다. 주소가 잘못되면 집행 신청이 제대로 진행되지 않을 수 있습니다. 필요시 주민등록등본이나 등기부를 통해 정확한 주소를 확인하세요.</p></div>
            <div class="warn-box"><h3>시효의 문제</h3><p>판결의 집행력에는 시효가 있습니다. 일반적으로 판결 확정 후 10년이 지나면 강제집행을 신청할 수 없습니다. 따라서 판결을 받은 후 가능한 한 빨리 강제집행을 신청하는 것이 좋습니다.</p></div>
            <div class="warn-box"><h3>채무자 재산 파악의 어려움</h3><p>채무자의 재산을 파악하기 위해 '재산명시신청'을 할 수 있습니다. 이를 통해 채무자가 소유한 부동산, 통장, 차량 등의 정보를 법원을 통해 얻을 수 있습니다. 다만 채무자가 협조하지 않으면 재산 파악에 어려움이 있을 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100" target="_blank" rel="noopener" title="민사집행법 제61조 — 대법원 종합법률정보">민사집행법 제61조</a></p></div>
            <div class="warn-box"><h3>집행관의 역할 이해</h3><p>집행관은 법원의 강제집행을 보조하는 공직자입니다. 집행관에게 직접 돈을 건넨다거나 강제집행을 '취소'해달라고 청탁하는 것은 불법이며 뇌물죄에 해당할 수 있습니다. 모든 절차는 정해진 법적 방식으로 진행되어야 합니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
                <a href="#" class="next-link">집행권원이란</a>
                <a href="#" class="next-link">집행문 부여 신청</a>
                <a href="#" class="next-link">재산명시신청</a>
                <a href="#" class="next-link">부동산 강제집행</a>
                <a href="#" class="next-link">채권 강제집행</a>
                <a href="#" class="next-link">당사자 변동 시 대응</a>
            </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-2',
    title: '집행권원이란',
    meta: '어떤 문서가 있어야 강제집행할 수 있나요?',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
                <ul>
                    <li>법원 판결을 받았는데 강제집행이 가능한지 확인하고 싶은 경우</li>
                    <li>판결 외에 다른 방법(화해, 지급명령, 공정증서)으로 강제집행이 가능한지 알고 싶은 경우</li>
                    <li>어떤 서류가 '집행권원'이 되는지 구분하기 어려운 경우</li>
                    <li>조정 또는 화해조서의 법적 효력을 알고 싶은 경우</li>
                    <li>지급명령의 확정 여부를 확인하고 싶은 경우</li>
                    <li>공정증서가 강제집행이 가능한지 확인하고 싶은 경우</li>
                </ul>
            </div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
                <h3>집행권원이란?</h3>
                <p>집행권원은 강제집행을 신청할 수 있는 법적 근거 문서입니다. 판결뿐만 아니라 화해조서, 지급명령, 공정증서 등도 집행권원이 될 수 있습니다. 집행권원 없이는 절대 강제집행을 신청할 수 없습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 — 대법원 종합법률정보">민사집행법 제56조</a></p>
                <p>중요한 것은 단순히 '문서'가 있는 것이 아니라, 그 문서가 '법적으로 확정된' 상태여야 한다는 점입니다.</p>
            </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>집행권원의 정의와 종류</h3>
            <p>집행권원은 강제집행의 직접적 근거가 되는 공식 문서를 말합니다. 민사집행법 제56조에서는 집행권원의 종류를 명시하고 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 — 대법원 종합법률정보">민사집행법 제56조</a></p>

            <table>
                <thead>
                    <tr>
                        <th>집행권원 종류</th>
                        <th>설명</th>
                        <th>확정 기준</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>확정판결</td>
                        <td>1심 또는 항소심 판결이 항소 기간 경과로 확정된 것</td>
                        <td>항소 기간(14일) 경과 또는 상소 기각</td>
                    </tr>
                    <tr>
                        <td>가집행판결</td>
                        <td>판결이 확정되기 전에 집행을 할 수 있도록 하는 판결</td>
                        <td>판결 선고 시점 (항소 여부와 관계없음)</td>
                    </tr>
                    <tr>
                        <td>화해조서</td>
                        <td>법원 조정 중 당사자들이 합의한 내용을 기록한 문서</td>
                        <td>조정 성립 시점</td>
                    </tr>
                    <tr>
                        <td>지급명령</td>
                        <td>법원이 채무자에게 금전 지급을 명령하는 결정</td>
                        <td>채무자의 이의 없음 또는 이의 기각 확정</td>
                    </tr>
                    <tr>
                        <td>공정증서</td>
                        <td>공증인이 작성한 증서로 '강제집행 인낙' 문구가 있는 것</td>
                        <td>공증 작성 시점 (즉시 강제집행 가능)</td>
                    </tr>
                    <tr>
                        <td>조정조서</td>
                        <td>조정위원회의 조정으로 성립된 내용을 기록한 문서</td>
                        <td>조정 성립 시점</td>
                    </tr>
                    <tr>
                        <td>이행권고결정</td>
                        <td>소액사건심판원이 내린 이행권고 결정</td>
                        <td>항소 기간 경과 또는 항소 기각</td>
                    </tr>
                </tbody>
            </table>

            <h3>각 집행권원별 상세 설명</h3>

            <h3 style="color: #666; font-size: 1rem; margin-top: 32px;">1. 확정판결 및 항소심 판결</h3>
            <p>확정판결은 가장 일반적인 집행권원입니다. 1심 판결을 받은 후 항소하지 않거나, 항소심에서 다시 판결을 받은 경우 그 판결이 확정되면 강제집행이 가능합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 제1항 — 대법원 종합법률정보">민사집행법 제56조 제1항</a></p>
            <p><strong>⚡ 항소 기간은 14일입니다.</strong> 항소 기간이 지나면 판결이 자동으로 확정됩니다. 상고는 판결 확정에 영향을 주지 않습니다. 상고를 제기해도 강제집행은 진행될 수 있습니다.</p>

            <h3 style="color: #666; font-size: 1rem; margin-top: 32px;">2. 가집행판결</h3>
            <p>가집행판결은 판결의 일부(또는 전부)에 대해 '집행 정지 조건'을 붙인 판결입니다. 이 경우 판결이 확정되기 전에도 강제집행을 신청할 수 있는 특권이 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 제2항 — 대법원 종합법률정보">민사집행법 제56조 제2항</a></p>
            <p>그러나 주의할 점은 가집행 중에 채무자가 항소를 제기하면, 항소심에서 가집행 정지 결정이 나올 수 있다는 것입니다. 이 경우 진행 중인 강제집행이 중단됩니다.</p>

            <h3 style="color: #666; font-size: 1rem; margin-top: 32px;">3. 화해조서 (민사소송법 제220조)</h3>
            <p>법원 소송 중 당사자들이 합의하면, 법원이 그 합의 내용을 조서로 작성합니다. 이 화해조서는 그 자체로 강제집행의 근거가 됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=022000" target="_blank" rel="noopener" title="민사소송법 제220조 제1항 — 대법원 종합법률정보">민사소송법 제220조 제1항</a></p>
            <p>화해조서는 판결과 동일한 효력을 가지므로, 화해 성립 직후부터 집행문 부여를 신청할 수 있습니다. 추가적인 확정 절차가 필요 없습니다.</p>

            <h3 style="color: #666; font-size: 1rem; margin-top: 32px;">4. 지급명령</h3>
            <p>지급명령은 법원(민사법정)이 채무자에게 금전을 지급하도록 명령하는 결정입니다. 금액이 적을 때 소송 절차 없이 빠르게 진행되는 제도입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005800" target="_blank" rel="noopener" title="민사집행법 제58조 — 대법원 종합법률정보">민사집행법 제58조</a></p>
            <p><strong>⚡ 지급명령이 강제집행이 되려면 '확정'되어야 합니다.</strong> 채무자가 이의를 제기하지 않으면 지급명령 송달 후 2주일이 지날 때 자동 확정됩니다. 채무자가 이의를 제기하면 일반 소송으로 진행됩니다. 이의가 기각되어야 비로소 강제집행이 가능합니다.</p>

            <h3 style="color: #666; font-size: 1rem; margin-top: 32px;">5. 공정증서</h3>
            <p>공증인이 작성한 증서 중 '강제집행 인낙' 문구가 포함된 것은 강제집행 근거가 됩니다. 예를 들어, 금전 빌려준 내용을 공정증서로 작성할 때 채무자가 "강제집행을 받기로 동의합니다"고 기재하면, 그 증서는 곧바로 강제집행의 근거가 됩니다.</p>
            <p>공정증서는 판결처럼 기간을 기다릴 필요가 없으며, 작성 직후 바로 집행문 부여를 신청할 수 있습니다.</p>

            <h3 style="color: #666; font-size: 1rem; margin-top: 32px;">6. 조정조서 (민사조정법 제29조)</h3>
            <p>법원 외부의 조정위원회(주민센터 등)에서 조정으로 성립된 내용은 조정조서에 기록됩니다. 이 조정조서도 판결과 같은 효력을 가지므로 강제집행의 근거가 될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=213779&joNo=002900" target="_blank" rel="noopener" title="민사조정법 제29조 — 대법원 종합법률정보">민사조정법 제29조</a></p>

            <h3>집행권원이 없는 경우 대처법</h3>
            <p>다음과 같은 경우는 집행권원이 없으므로 강제집행을 할 수 없습니다:</p>
            <ul>
                <li><strong>상대방과의 일반 계약</strong> — 계약서만으로는 강제집행이 불가능합니다. 먼저 소송을 제기해서 판결을 받아야 합니다.</li>
                <li><strong>상대방의 약속</strong> — 구두로 약속하거나 메모, 편지 등은 강제집행의 근거가 될 수 없습니다. 반드시 법적 문서가 필요합니다.</li>
                <li><strong>채권양수기에게 미통지된 채권양도</strong> — 채권을 받은 사람에게 통보하지 않은 상태에서는 강제집행이 어려울 수 있습니다.</li>
            </ul>

            <h3>집행권원 확정의 중요성</h3>
            <p>단순히 판결문이 있다고 해서 집행권원이 되는 것이 아닙니다. 반드시 다음을 확인하세요:</p>
            <ul>
                <li>판결이 최종 확정되었는가? (항소 기간 경과)</li>
                <li>상고가 있는가? (상고가 있어도 강제집행은 가능)</li>
                <li>가집행판결인 경우, 집행 정지 조건이 무엇인가?</li>
                <li>지급명령인 경우, 채무자의 이의 여부</li>
                <li>공정증서인 경우, 강제집행 문구가 명시되어 있는가?</li>
            </ul>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 계약서만으로 강제집행이 가능한가요?</div><div class="qna-a">A. 아니요. 일반 계약서만으로는 강제집행이 불가능합니다. 다만 공증인이 작성한 공정증서에 '강제집행 인낙' 문구가 있다면 가능합니다. 일반 계약서는 먼저 소송을 통해 판결을 받아야 강제집행이 가능합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 — 대법원 종합법률정보">민사집행법 제56조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 항소를 제기한 판결도 강제집행이 되나요?</div><div class="qna-a">A. 항소를 제기한 상태에서도 1심 판결에 기반한 강제집행이 가능합니다. 다만 항소심에서 판결이 뒤바뀔 수 있으므로 위험이 있습니다. 항소 결과를 기다리고 싶다면 항소 결정 후 강제집행을 신청할 수 있습니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 가집행판결은 어떤 경우에 받나요?</div><div class="qna-a">A. 가집행판결은 법원이 판결 시 필요하다고 판단할 때 내립니다. 예를 들어, 채무자가 재산을 숨길 가능성이 높거나 해외로 도망칠 위험이 있을 때 법원이 인정합니다. 당사자가 요청해도 법원이 판단하므로, 필요시 법원에 신청할 수 있습니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 조정조서와 판결은 효력이 같나요?</div><div class="qna-a">A. 네, 동일합니다. 조정조서도 판결과 같은 법적 효력을 가지므로 강제집행이 가능합니다. 다만 조정은 소송보다 빠르고 비용이 적게 드는 장점이 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=213779&joNo=002900" target="_blank" rel="noopener" title="민사조정법 제29조 — 대법원 종합법률정보">민사조정법 제29조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 지급명령이 확정되지 않으면 어떻게 되나요?</div><div class="qna-a">A. 채무자가 지급명령에 이의를 제기하면 일반 소송으로 진행됩니다. 이 경우 판결을 받을 때까지 강제집행을 할 수 없습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005800" target="_blank" rel="noopener" title="민사집행법 제58조 — 대법원 종합법률정보">민사집행법 제58조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 공정증서가 있으면 판결 없이도 강제집행이 가능한가요?</div><div class="qna-a">A. 공정증서에 강제집행 인낙 문구가 있으면 가능합니다. 이는 공정증서 작성 당시 채무자가 "나중에 소송 없이 강제집행을 받겠습니다"라고 동의한 것이기 때문입니다. 다만 공정증서에 이 문구가 없으면 판결이 필요합니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 화해조서는 상대방이 동의하지 않아도 강제집행이 되나요?</div><div class="qna-a">A. 화해는 이미 당사자들의 합의이므로, 나중에 "동의하지 않는다"고 주장할 수 없습니다. 화해조서는 판결과 같으므로, 상대방의 추가 동의 없이도 강제집행이 가능합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=022000" target="_blank" rel="noopener" title="민사소송법 제220조 — 대법원 종합법률정보">민사소송법 제220조</a></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h3>집행권원의 확정력</h3><p>대법원은 집행권원이 반드시 법적으로 '확정된' 상태여야만 강제집행 신청의 기초가 될 수 있다고 명확히 판시했습니다. 단순히 판결문이 있다는 것만으로는 부족하며, 항소 기간 경과 등을 통해 확정되어야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005600" target="_blank" rel="noopener" title="민사집행법 제56조 — 대법원 종합법률정보">민사집행법 제56조</a></p></div>
            <div class="ruling-box"><h3>가집행판결의 집행 정지</h3><p>가집행판결로 강제집행을 진행 중인 경우, 항소심에서 가집행 정지 결정이 나올 수 있습니다. 이 경우 집행관은 즉시 진행 중인 집행을 중단해야 하며, 이미 회수한 금액의 반환 등의 문제가 발생할 수 있습니다.</p></div>
            <div class="ruling-box"><h3>공정증서의 강제집행 인낙</h3><p>공정증서가 강제집행의 근거가 되려면 반드시 '강제집행 인낙' 문구가 명시되어야 합니다. 이 문구가 없으면 공정증서도 판결이 필요합니다. 따라서 공정증서 작성 시 이 문구를 반드시 포함시켜야 합니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>집행권원의 정확한 파악</h3><p>유사해 보이는 문서도 법적으로는 집행권원이 될 수 없을 수 있습니다. 계약서, 영수증, 메모 등은 절대 강제집행의 근거가 될 수 없습니다. 반드시 법원 문서(판결, 조정조서, 화해조서) 또는 공증인 문서(강제집행 인낙 공정증서)여야 합니다.</p></div>
            <div class="warn-box"><h3>지급명령의 확정 여부 확인</h3><p>지급명령을 받은 경우, 반드시 채무자의 이의 여부를 확인하세요. 이의가 제기되었으면 그 소송 결과를 기다려야 합니다. 이의 제기 상태에서는 지급명령의 강제집행이 불가능합니다.</p></div>
            <div class="warn-box"><h3>공정증서 작성 시 주의</h3><p>공정증서로 강제집행을 원한다면, 반드시 작성 시 '강제집행 인낙' 문구를 명시하고 채무자가 서명해야 합니다. 이 문구가 없으면 판결을 받아야 하므로, 공정증서의 이점이 상실됩니다.</p></div>
            <div class="warn-box"><h3>항소와 상고의 차이</h3><p>항소(1심에 대한 불복)는 판결을 확정시키지 못하지만, 상고(항소심에 대한 불복)는 판결의 확정에 영향을 주지 않습니다. 따라서 상고가 있어도 강제집행은 진행될 수 있습니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
                <a href="#" class="next-link">집행문 부여 신청</a>
                <a href="#" class="next-link">강제집행개관</a>
                <a href="#" class="next-link">당사자 변동 시 대응</a>
                <a href="#" class="next-link">지급명령 신청</a>
                <a href="#" class="next-link">법원 조정</a>
                <a href="#" class="next-link">공정증서 작성</a>
            </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-3',
    title: '집행문 부여 신청',
    meta: '집행 전에 반드시 받아야 하는 절차',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
                <ul>
                    <li>판결을 받았는데 집행문을 부여받아야 하는 경우</li>
                    <li>어디에 어떻게 집행문 신청을 해야 할지 모르는 경우</li>
                    <li>필요한 첨부 서류가 무엇인지 확인하고 싶은 경우</li>
                    <li>집행문 부여가 거절되었을 때 대응 방법을 알고 싶은 경우</li>
                    <li>당사자 변동(상속, 회사 합병)으로 승계집행문이 필요한 경우</li>
                    <li>집행문 부여에 얼마나 걸리는지 알고 싶은 경우</li>
                </ul>
            </div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
                <h3>집행문이란?</h3>
                <p>집행문(執行文)은 판결이 최종 확정되었고 강제집행이 가능하다는 것을 법원이 공식적으로 인정하는 서류입니다. 판결만으로는 강제집행이 불가능하며, 반드시 집행문이 필요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800" target="_blank" rel="noopener" title="민사집행법 제28조 — 대법원 종합법률정보">민사집행법 제28조</a></p>
                <p>집행문은 판결의 '확정증'과 같으며, 이것이 있어야 비로소 강제집행 신청을 할 수 있습니다.</p>
            </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>집행문이 필요한 이유</h3>
            <p>집행문은 단순한 형식 절차가 아닙니다. 이것은 다음을 공식적으로 인정하는 중요한 문서입니다: <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800" target="_blank" rel="noopener" title="민사집행법 제28조 — 대법원 종합법률정보">민사집행법 제28조</a></p>
            <ul>
                <li>판결이 최종 확정되었다</li>
                <li>항소 기간이 만료되었거나 항소가 기각되었다</li>
                <li>강제집행할 권리가 있다</li>
                <li>더 이상 판결이 변경될 가능성이 없다</li>
            </ul>

            <h3>집행문 부여 신청 절차</h3>
            <div class="step-box">
                <p><span class="step-num">1</span><strong>신청 기관 확인</strong></p>
                <p style="margin-top: 12px;">판결을 한 법원의 집행관사(또는 등기소)에 신청합니다. 판결법원과 집행문 신청 법원이 같아야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002900" target="_blank" rel="noopener" title="민사집행법 제29조 — 대법원 종합법률정보">민사집행법 제29조</a></p>
            </div>
            <div class="step-box">
                <p><span class="step-num">2</span><strong>필요 서류 준비</strong></p>
                <p style="margin-top: 12px;">판결문 원본 또는 인증본, 확정증명서, 집행문 부여 신청서를 준비합니다.</p>
            </div>
            <div class="step-box">
                <p><span class="step-num">3</span><strong>신청</strong></p>
                <p style="margin-top: 12px;">집행관사에 방문하거나 우편으로 신청합니다. 수수료(신청 수수료)를 함께 납부합니다.</p>
            </div>
            <div class="step-box">
                <p><span class="step-num">4</span><strong>집행문 부여</strong></p>
                <p style="margin-top: 12px;">판결문에 집행문을 부여합니다. 일반적으로 신청일 또는 다음날 부여됩니다.</p>
            </div>
            <div class="step-box">
                <p><span class="step-num">5</span><strong>강제집행 신청</strong></p>
                <p style="margin-top: 12px;">집행문을 받은 후 강제집행을 신청하는 법원에 강제집행 신청서를 제출합니다.</p>
            </div>

            <h3>집행문 부여 기관</h3>
            <p>집행문을 부여하는 기관은 판결을 한 법원의 집행관사(또는 등기소)입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002900" target="_blank" rel="noopener" title="민사집행법 제29조 — 대법원 종합법률정보">민사집행법 제29조</a></p>
            <ul>
                <li><strong>지방법원 판결</strong> — 그 법원의 집행관사</li>
                <li><strong>고등법원 판결</strong> — 고등법원 또는 관할 지방법원의 집행관사</li>
                <li><strong>대법원 판결</strong> — 관할 지방법원의 집행관사</li>
            </ul>
            <p>집행문을 받은 후 강제집행 신청은 다른 법원에 할 수 있습니다. 예를 들어, 서울지방법원에서 판결을 받고 집행문을 받은 후, 부산에 있는 부동산을 집행하려면 부산지방법원에 강제집행을 신청합니다.</p>

            <h3>필요한 첨부서류</h3>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>설명</th>
                        <th>원본/사본</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>판결문</td>
                        <td>판결을 한 법원이 발급한 판결문</td>
                        <td>원본 또는 인증본 (사본 불가)</td>
                    </tr>
                    <tr>
                        <td>확정증명서</td>
                        <td>판결이 최종 확정되었음을 증명하는 서류</td>
                        <td>원본 또는 인증본</td>
                    </tr>
                    <tr>
                        <td>집행문부여신청서</td>
                        <td>소정 양식에 기재한 신청서</td>
                        <td>원본</td>
                    </tr>
                    <tr>
                        <td>신분증사본</td>
                        <td>신청인의 신분 확인용</td>
                        <td>사본</td>
                    </tr>
                    <tr>
                        <td>인감증명서</td>
                        <td>인감 또는 서명 확인용 (필요시)</td>
                        <td>원본</td>
                    </tr>
                </tbody>
            </table>

            <h3>승계집행문</h3>
            <p>당사자(채무자)가 사망하거나 회사가 합병되는 등 당사자 변동이 있으면, 기존 집행문으로는 강제집행이 불가능합니다. 이 경우 '승계집행문'을 신청해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003100" target="_blank" rel="noopener" title="민사집행법 제31조 — 대법원 종합법률정보">민사집행법 제31조</a></p>
            <ul>
                <li><strong>채무자 사망</strong> — 상속인을 특정하고 상속인에 대한 승계집행문을 신청</li>
                <li><strong>회사 합병</strong> — 합병 후 회사에 대한 승계집행문을 신청</li>
                <li><strong>채권양도</strong> — 새로운 채권자에 대한 승계집행문을 신청</li>
            </ul>

            <h3>집행문 부여 거절 시 대응</h3>
            <p>집행문 부여가 거절되는 경우가 있습니다. 이 경우 다음과 같이 대응합니다: <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003400" target="_blank" rel="noopener" title="민사집행법 제34조 — 대법원 종합법률정보">민사집행법 제34조</a></p>
            <ul>
                <li><strong>판결이 확정되지 않은 경우</strong> — 항소 기간을 기다리거나 항소심 결과를 받아야 함</li>
                <li><strong>집행문 이의신청</strong> — 집행문 부여에 이의가 있으면 법원에 이의신청을 할 수 있음</li>
                <li><strong>판결 확인</strong> — 판결문을 다시 확인하고 추가 증거(확정증명서 등)를 제출</li>
            </ul>

            <h3>집행문 없이 강제집행이 가능한 경우</h3>
            <p>예외적으로 집행문 없이 강제집행이 가능한 경우가 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005800" target="_blank" rel="noopener" title="민사집행법 제58조 — 대법원 종합법률정보">민사집행법 제58조</a></p>
            <ul>
                <li><strong>지급명령 (확정된 경우)</strong> — 채무자 이의 없음 후 지급명령 자체로 강제집행 가능</li>
                <li><strong>화해조서</strong> — 판결과 같은 효력이 있어 집행문 필요 없음</li>
                <li><strong>공정증서 (강제집행 인낙 있음)</strong> — 집행문 필요 없음</li>
            </ul>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 집행문 부여는 얼마나 걸리나요?</div><div class="qna-a">A. 일반적으로 신청 당일 또는 다음날 부여됩니다. 매우 빠른 절차이며, 복잡한 심사 없이 판결문이 있으면 즉시 부여됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800" target="_blank" rel="noopener" title="민사집행법 제28조 — 대법원 종합법률정보">민사집행법 제28조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 판결을 받은 지 오래되었는데 집행문을 받을 수 있나요?</div><div class="qna-a">A. 네, 가능합니다. 집행문 부여에 시간 제한이 없습니다. 판결 후 10년이 지나기 전이면 언제든지 집행문을 신청할 수 있습니다. 다만 10년 후에는 판결의 집행력이 소멸됩니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 채무자가 상고를 제기했는데 집행문을 받을 수 있나요?</div><div class="qna-a">A. 네, 가능합니다. 상고는 판결 확정에 영향을 주지 않으므로, 상고가 있어도 집행문을 받을 수 있습니다. 판결이 이미 확정된 상태이기 때문입니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 법무사나 변호사를 통해서만 집행문을 받을 수 있나요?</div><div class="qna-a">A. 아니요. 개인이 직접 집행관사에 방문하거나 우편으로 신청할 수 있습니다. 법무사나 변호사의 도움 없이도 가능합니다. 다만 복잡한 경우(당사자 변동 등)는 전문가 도움이 유리할 수 있습니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 승계집행문은 어떤 경우에 필요한가요?</div><div class="qna-a">A. 원래 판결의 당사자가 변동되었을 때 필요합니다. 예를 들어, 판결에서 '피고'가 기재되어 있는데, 소송 후 그 당사자가 사망했다면, 상속인을 특정하고 상속인 이름으로 승계집행문을 받아야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003100" target="_blank" rel="noopener" title="민사집행법 제31조 — 대법원 종합법률정보">민사집행법 제31조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 집행문 부여에 비용이 드나요?</div><div class="qna-a">A. 네, 신청 수수료가 필요합니다. 일반적으로 적은 금액이지만, 구체적인 비용은 법원에 문의하세요. 비용은 회수 가능 금액에 따라 다를 수 있습니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h3>집행문의 필수성</h3><p>대법원은 "집행문은 단순한 형식적 절차가 아니라 판결의 확정을 공식적으로 확인하는 절차"라고 판시했습니다. 집행문 없이 강제집행을 신청하면 신청 자체가 각하됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800" target="_blank" rel="noopener" title="민사집행법 제28조 — 대법원 종합법률정보">민사집행법 제28조</a></p></div>
            <div class="ruling-box"><h3>당사자 변동과 승계집행문</h3><p>판결 후 당사자가 변동되었으면, 원래 판결에 기재된 당사자 이름으로는 강제집행을 할 수 없습니다. 반드시 새로운 당사자(상속인, 합병 회사 등)에 대한 승계집행문을 신청해야 합니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>판결문의 원본 필수</h3><p>집행문 부여 신청 시 판결문은 반드시 원본 또는 인증본이어야 합니다. 사본으로는 신청할 수 없으므로 미리 확인하세요.</p></div>
            <div class="warn-box"><h3>확정증명서의 필요성</h3><p>판결이 최종 확정되었음을 증명하는 '확정증명서'를 함께 제출해야 합니다. 이 서류가 없으면 집행문 부여가 지연될 수 있습니다.</p></div>
            <div class="warn-box"><h3>시효 관리</h3><p>⚡ 판결의 집행력은 확정 후 10년입니다. 10년이 지나면 강제집행을 신청할 수 없으므로, 판결을 받은 후 충분한 시간 내에 집행문을 받고 강제집행을 신청해야 합니다.</p></div>
            <div class="warn-box"><h3>당사자 변동 확인</h3><p>원래 판결의 당사자가 변동되었으면, 반드시 이를 신고하고 승계집행문을 신청해야 합니다. 당사자 변동을 무시하고 진행하면 집행이 실패할 수 있습니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
                <a href="#" class="next-link">강제집행개관</a>
                <a href="#" class="next-link">집행권원이란</a>
                <a href="#" class="next-link">당사자 변동 시 대응</a>
                <a href="#" class="next-link">부동산 강제집행</a>
                <a href="#" class="next-link">재산명시신청</a>
                <a href="#" class="next-link">집행문 부여 거절 시 대응</a>
            </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-4',
    title: '집행 당사자가 바뀐 경우',
    meta: '상대방이 사망하거나 회사가 합병되면?',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
                <ul>
                    <li>채무자가 사망했는데 강제집행을 계속할 수 있는지 확인하고 싶은 경우</li>
                    <li>채무자 회사가 다른 회사에 합병되었을 때 대응 방법을 알고 싶은 경우</li>
                    <li>당사자 변동이 있을 때 어떤 서류가 필요한지 알고 싶은 경우</li>
                    <li>상속인이 여러 명일 때 강제집행 절차를 알고 싶은 경우</li>
                    <li>채권이 제3자에게 양도된 경우 강제집행이 가능한지 알고 싶은 경우</li>
                    <li>승계집행문이 무엇인지 알고 싶은 경우</li>
                </ul>
            </div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
                <h3>당사자 변동이란?</h3>
                <p>판결에 기재된 당사자(채무자)가 사망하거나 회사가 합병되어 다른 법인으로 변경되는 등의 상황을 말합니다. 이 경우 원래 판결로는 강제집행이 불가능하며, 새로운 당사자에 대한 '승계집행문'을 신청해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003100" target="_blank" rel="noopener" title="민사집행법 제31조 — 대법원 종합법률정보">민사집행법 제31조</a></p>
                <p>당사자 변동이 있어도 채권자의 권리가 자동으로 사라지는 것은 아닙니다. 올바른 절차를 통해 상속인이나 합병 회사 상대로 강제집행을 계속할 수 있습니다.</p>
            </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>당사자 변동의 유형</h3>
            <table>
                <thead>
                    <tr>
                        <th>변동 유형</th>
                        <th>상황</th>
                        <th>대응 방법</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>채무자 사망</td>
                        <td>판결에 기재된 개인이 사망한 경우</td>
                        <td>상속인을 특정하고 상속인 이름으로 승계집행문 신청</td>
                    </tr>
                    <tr>
                        <td>회사 합병</td>
                        <td>채무자 회사가 다른 회사에 합병되거나 자신이 다른 회사로 합병된 경우</td>
                        <td>합병 회사 이름으로 승계집행문 신청</td>
                    </tr>
                    <tr>
                        <td>회사 분할</td>
                        <td>채무자 회사가 분할되어 새로운 회사가 설립된 경우</td>
                        <td>채무 인수 회사를 확인하고 그 회사 이름으로 승계집행문 신청</td>
                    </tr>
                    <tr>
                        <td>채권양도</td>
                        <td>채권자(판결을 받은 사람)가 채권을 제3자에게 양도한 경우</td>
                        <td>새로운 채권자 이름으로 승계집행문 신청</td>
                    </tr>
                    <tr>
                        <td>법명 변경</td>
                        <td>법인의 상호 또는 명칭이 변경된 경우</td>
                        <td>새로운 상호로 승계집행문 신청</td>
                    </tr>
                </tbody>
            </table>

            <h3>승계집행문이란</h3>
            <p>승계집행문은 원래 판결의 당사자가 변동된 경우, 새로운 당사자를 기록하는 집행문입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003100" target="_blank" rel="noopener" title="민사집행법 제31조 — 대법원 종합법률정보">민사집행법 제31조</a></p>
            <p>예를 들어, 원래 판결에 "피고: 김철수"라고 기재되어 있었는데, 김철수가 사망하면 상속인(예: 김영희)을 특정하고 "피고: 김영희"라는 승계집행문을 받아야 합니다.</p>

            <h3>채무자 사망 시 강제집행</h3>
            <p>채무자가 사망한 경우, 다음 절차를 따릅니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003900" target="_blank" rel="noopener" title="민사집행법 제39조 제2항 — 대법원 종합법률정보">민사집행법 제39조 제2항</a></p>
            <ul>
                <li><strong>상속인 확인</strong> — 채무자의 법정 상속인(배우자, 자녀, 부모 등)을 확인합니다.</li>
                <li><strong>호적등본 또는 제적등본 준비</strong> — 상속인을 특정하기 위해 호적등본이 필요합니다.</li>
                <li><strong>상속인 이름으로 승계집행문 신청</strong> — 상속인 중 누가 상속채무를 인수했는지 확인하고, 그 사람 이름으로 승계집행문을 신청합니다.</li>
                <li><strong>강제집행 신청</strong> — 승계집행문을 받은 후 상속인의 재산을 대상으로 강제집행을 신청합니다.</li>
            </ul>
            <p><strong>⚡ 중요: 상속포기와 한정승인</strong> — 상속인이 상속을 포기했거나 한정승인을 한 경우, 채무 상속이 제한될 수 있습니다. 이 경우 강제집행이 어려울 수 있으므로 반드시 확인해야 합니다.</p>

            <h3>회사 합병 시 강제집행</h3>
            <p>채무자 회사가 합병된 경우, 다음과 같이 진행합니다.</p>
            <ul>
                <li><strong>합병 여부 확인</strong> — 등기부등본 또는 법원 기록을 통해 회사가 합병되었는지 확인합니다.</li>
                <li><strong>합병 회사 특정</strong> — 채무를 인수한 회사(존속회사 또는 신설회사)를 특정합니다.</li>
                <li><strong>승계집행문 신청</strong> — 합병 회사 이름으로 승계집행문을 신청합니다.</li>
                <li><strong>강제집행</strong> — 합병 회사의 재산을 대상으로 강제집행을 신청합니다.</li>
            </ul>

            <h3>기판력의 주관적 범위와 승계인</h3>
            <p>판결의 기판력(이미 판결이 난 사건에 대해 다시 소송할 수 없는 효력)은 원래의 당사자에게만 미칩니다. 그러나 승계인(상속인, 합병 회사 등)도 강제집행의 대상이 될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=021800" target="_blank" rel="noopener" title="민사소송법 제218조 제1항 — 대법원 종합법률정보">민사소송법 제218조 제1항</a></p>
            <p>이는 권리의 승계 관계 때문입니다. 채무자의 지위가 상속인에게 당연히 넘어가므로, 강제집행도 상속인 상대로 가능한 것입니다.</p>

            <h3>당사자 변동 확인의 중요성</h3>
            <p>당사자 변동이 있었음에도 이를 무시하고 강제집행을 신청하면 다음 문제가 발생할 수 있습니다:</p>
            <ul>
                <li><strong>집행 신청 각하</strong> — 원래 당사자가 더 이상 존재하지 않으면 집행 신청 자체가 각하될 수 있습니다.</li>
                <li><strong>시간 낭비</strong> — 잘못된 당사자 상대로 집행 절차를 밟으면 나중에 다시 신청해야 합니다.</li>
                <li><strong>시효 문제</strong> — 판결의 집행력은 10년이므로, 당사자 변동 확인에 시간을 쓰다가 시효가 만료될 수 있습니다.</li>
            </ul>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 채무자가 사망했을 때 상속포기한 상속인이 있으면 어떻게 되나요?</div><div class="qna-a">A. 상속포기한 상속인은 채무 상속인이 아니므로, 그 상속인 상대로 강제집행을 할 수 없습니다. 다만 상속포기를 하지 않은 다른 상속인이 있으면 그들 상대로 강제집행이 가능합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003900" target="_blank" rel="noopener" title="민사집행법 제39조 제2항 — 대법원 종합법률정보">민사집행법 제39조 제2항</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 회사가 합병되었는데 합병 회사를 특정하기 어렵습니다. 어떻게 해야 하나요?</div><div class="qna-a">A. 등기부등본을 통해 합병 정보를 확인할 수 있습니다. 등기소에 문의하면 합병 회사(채무 인수 회사)를 특정할 수 있습니다. 필요시 법무사의 도움을 받을 수 있습니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 상속인이 여러 명일 때 모두 상대로 강제집행해야 하나요?</div><div class="qna-a">A. 상속인들이 상속채무를 공동으로 부담하는 경우, 각 상속인의 법정상속분에 따라 개별적으로 강제집행할 수 있습니다. 모두 함께 강제집행해야 하는 것은 아닙니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 채권이 제3자에게 양도되었으면 강제집행이 불가능한가요?</div><div class="qna-a">A. 아니요. 채권이 양도된 경우, 새로운 채권자(양수인) 이름으로 승계집행문을 신청하면 됩니다. 다만 채권양도를 증명해야 하므로, 양도 계약서나 통지장 등을 준비해야 합니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 법인의 상호가 변경되었을 때도 승계집행문이 필요한가요?</div><div class="qna-a">A. 네, 필요합니다. 법인의 상호가 변경되었으면 새로운 상호로 승계집행문을 신청해야 합니다. 등기부등본에 상호 변경 내용이 기록되므로, 이를 제출하면 됩니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 당사자 변동이 있었을 때 원래 판결로 강제집행을 시도하면 어떻게 되나요?</div><div class="qna-a">A. 강제집행 신청이 각하될 가능성이 높습니다. 예를 들어, 사망한 개인 이름으로 부동산 압류를 신청하면, 그 개인이 더 이상 재산권자가 아니므로 신청이 받아들여지지 않습니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h3>상속인에 대한 강제집행</h3><p>대법원은 채무자가 사망한 후 상속인이 채무를 상속받으면, 상속인 상대로 강제집행이 가능하다고 판시했습니다. 이는 상속이 자동적으로 채무 관계를 승계시키기 때문입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003100" target="_blank" rel="noopener" title="민사집행법 제31조, 제39조 제2항 — 대법원 종합법률정보">민사집행법 제31조, 제39조 제2항</a></p></div>
            <div class="ruling-box"><h3>합병 회사의 채무 인수</h3><p>회사 합병의 경우, 채무도 자동으로 합병 회사에 인수됩니다. 따라서 합병 회사 상대로 강제집행이 가능합니다. 다만 분할의 경우는 채무 인수 여부를 확인해야 합니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>상속 관계 확인의 중요성</h3><p>채무자가 사망한 경우, 반드시 호적등본이나 제적등본을 통해 상속인을 확인해야 합니다. 잘못된 사람을 상속인으로 지정하면 강제집행이 실패합니다.</p></div>
            <div class="warn-box"><h3>상속포기 확인</h3><p>⚡ 상속인이 상속포기를 한 경우, 그 상속인은 더 이상 채무를 부담하지 않습니다. 상속포기 신청 기간(3개월) 내에 이를 확인해야 합니다. 상속포기 기간이 지난 후에는 상속 관계가 확정되어 변경할 수 없습니다.</p></div>
            <div class="warn-box"><h3>회사 합병 문서 준비</h3><p>회사 합병이 있었을 때 강제집행을 신청하려면, 합병 사실을 증명하는 등기부등본 또는 법원의 승인 결정서 등을 준비해야 합니다.</p></div>
            <div class="warn-box"><h3>당사자 변동 신고 기한</h3><p>⚡ 당사자 변동 사실을 파악했으면 신속하게 승계집행문을 신청해야 합니다. 판결의 집행력은 10년이므로, 시간을 낭비하면 시효 만료로 강제집행이 불가능할 수 있습니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
                <a href="#" class="next-link">집행문 부여 신청</a>
                <a href="#" class="next-link">강제집행개관</a>
                <a href="#" class="next-link">상속 개요</a>
                <a href="#" class="next-link">재산명시신청</a>
                <a href="#" class="next-link">상속포기</a>
                <a href="#" class="next-link">법인 등기 변경</a>
            </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-5',
    title: '재산명시신청',
    meta: '채무자 재산을 법원을 통해 공개시키는 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
                <ul>
                    <li>강제집행을 하려고 하는데 채무자의 재산을 모르는 경우</li>
                    <li>채무자가 재산을 숨길 가능성이 있는 경우</li>
                    <li>재산명시신청 절차가 무엇인지 알고 싶은 경우</li>
                    <li>채무자가 재산명시 기일에 나타나지 않으면 어떻게 되는지 알고 싶은 경우</li>
                    <li>재산명시 중에 채무자가 거짓 진술을 하면 어떤 벌칙이 있는지 알고 싶은 경우</li>
                    <li>재산명시신청 후 어떤 추가 절차가 있는지 알고 싶은 경우</li>
                </ul>
            </div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
                <h3>재산명시신청이란?</h3>
                <p>재산명시신청은 판결을 받은 채권자가 법원에 신청하여, 법원이 강제적으로 채무자에게 자신의 재산(부동산, 동산, 통장, 차량 등)을 법정에서 공개하게 하는 절차입니다. 판결을 받았지만 채무자의 재산을 모를 때 매우 유용한 제도입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100" target="_blank" rel="noopener" title="민사집행법 제61조 — 대법원 종합법률정보">민사집행법 제61조</a></p>
                <p>강제집행을 하려면 채무자의 재산 위치를 알아야 하는데, 채무자가 재산을 숨기거나 협조하지 않을 때 법원의 강제력으로 재산 공개를 받을 수 있습니다.</p>
            </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>재산명시신청의 의의</h3>
            <p>판결을 받았다고 해서 곧바로 강제집행을 할 수 있는 것은 아닙니다. 채무자가 어떤 재산을 소유하고 있는지 알아야만 그 재산을 압류할 수 있기 때문입니다. 재산명시신청은 이러한 정보를 얻기 위한 절차입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100" target="_blank" rel="noopener" title="민사집행법 제61조 — 대법원 종합법률정보">민사집행법 제61조</a></p>

            <h3>재산명시신청 절차</h3>
            <div class="step-box">
                <p><span class="step-num">1</span><strong>신청</strong></p>
                <p style="margin-top: 12px;">판결을 받은 법원 또는 강제집행 신청 법원에 재산명시신청서를 제출합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100" target="_blank" rel="noopener" title="민사집행법 제61조 — 대법원 종합법률정보">민사집행법 제61조</a></p>
            </div>
            <div class="step-box">
                <p><span class="step-num">2</span><strong>명시기일 지정</strong></p>
                <p style="margin-top: 12px;">법원이 재산명시기일을 정하고 채무자에게 통보합니다. 명시기일은 신청 후 2~3주 정도가 일반적입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006200" target="_blank" rel="noopener" title="민사집행법 제62조 — 대법원 종합법률정보">민사집행법 제62조</a></p>
            </div>
            <div class="step-box">
                <p><span class="step-num">3</span><strong>재산명시기일 진행</strong></p>
                <p style="margin-top: 12px;">정해진 날짜에 채무자가 법정에 출석하여 자신의 재산을 공개합니다. 법원 판사 또는 집행관이 채무자를 신문하고 재산 내용을 기록합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006400" target="_blank" rel="noopener" title="민사집행법 제64조 — 대법원 종합법률정보">민사집행법 제64조</a></p>
            </div>
            <div class="step-box">
                <p><span class="step-num">4</span><strong>재산목록 작성</strong></p>
                <p style="margin-top: 12px;">채무자가 공개한 재산 정보를 재산목록으로 작성합니다. 여기에는 부동산, 동산, 통장, 자동차 등의 정보가 포함됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006300" target="_blank" rel="noopener" title="민사집행법 제63조 — 대법원 종합법률정보">민사집행법 제63조</a></p>
            </div>
            <div class="step-box">
                <p><span class="step-num">5</span><strong>강제집행 신청</strong></p>
                <p style="margin-top: 12px;">재산명시를 통해 얻은 정보를 바탕으로 해당 재산을 대상으로 강제집행을 신청합니다.</p>
            </div>

            <h3>재산명시신청 요건</h3>
            <p>재산명시신청을 하려면 다음 요건을 만족해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100" target="_blank" rel="noopener" title="민사집행법 제61조 — 대법원 종합법률정보">민사집행법 제61조</a></p>
            <ul>
                <li><strong>집행권원이 있어야 함</strong> — 판결, 화해조서, 지급명령, 공정증서 등 강제집행의 근거가 되는 문서</li>
                <li><strong>기간 제한이 있어야 함</strong> — 일반적으로 권리가 발생한 후 5년 이내</li>
                <li><strong>채무자를 특정할 수 있어야 함</strong> — 채무자의 성명, 주소 등이 명확해야 함</li>
            </ul>

            <h3>채무자가 재산명시에 응하지 않으면?</h3>
            <p>채무자가 재산명시기일에 나타나지 않거나 거짓 진술을 하면, 법원은 다음과 같은 제재를 할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 — 대법원 종합법률정보">민사집행법 제68조</a></p>
            <ul>
                <li><strong>기일 재지정</strong> — 채무자가 정당한 사유 없이 불출석하면 기일을 다시 정합니다.</li>
                <li><strong>감치(구금)</strong> — 채무자가 불출석을 반복하거나 거짓 진술을 한 경우, 법원은 채무자를 6개월 이내의 감치(일종의 구금)에 처할 수 있습니다.</li>
                <li><strong>과태료</strong> — 감치 외에 과태료를 부과할 수 있습니다.</li>
            </ul>
            <p><strong>⚡ 감치는 매우 심각한 제재입니다.</strong> 채무자는 감치를 피하기 위해 재산을 공개할 가능성이 높습니다. 이것이 재산명시신청의 강력한 효과입니다.</p>

            <h3>재산목록에 포함되는 내용</h3>
            <p>재산명시 시 채무자가 공개해야 하는 재산 목록은 다음과 같습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006300" target="_blank" rel="noopener" title="민사집행법 제63조 — 대법원 종합법률정보">민사집행법 제63조</a></p>
            <table>
                <thead>
                    <tr>
                        <th>재산 종류</th>
                        <th>구체적 내용</th>
                        <th>확인 방법</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>부동산</td>
                        <td>토지, 건물의 위치, 면적, 소유 여부</td>
                        <td>등기부등본</td>
                    </tr>
                    <tr>
                        <td>자동차</td>
                        <td>차량 종류, 번호, 구매 가격</td>
                        <td>등록증, 자동차세</td>
                    </tr>
                    <tr>
                        <td>금융자산</td>
                        <td>통장 잔액, 예금 금액, 예금처(은행)</td>
                        <td>통장, 계좌 정보</td>
                    </tr>
                    <tr>
                        <td>생명보험</td>
                        <td>보험사, 계약금, 해약환금액</td>
                        <td>보험증권</td>
                    </tr>
                    <tr>
                        <td>급여</td>
                        <td>직장, 월급 금액, 근무처</td>
                        <td>고용계약서, 급여명세서</td>
                    </tr>
                    <tr>
                        <td>주식</td>
                        <td>주식 종류, 수량, 현재 가치</td>
                        <td>증권계좌</td>
                    </tr>
                </tbody>
            </table>

            <h3>재산명시기일의 연기</h3>
            <p>채무자가 정당한 사유로 재산명시기일에 출석할 수 없는 경우, 법원에 연기를 신청할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006500" target="_blank" rel="noopener" title="민사집행법 제65조 — 대법원 종합법률정보">민사집행법 제65조</a></p>
            <p>다만 무분별한 연기 신청은 감치 대상이 될 수 있으므로, 반드시 정당한 사유가 있어야 합니다.</p>

            <h3>재산명시 후의 추가 절차</h3>
            <p>재산명시를 통해 채무자의 재산 정보를 얻은 후, 다음과 같은 절차를 밟습니다.</p>
            <ul>
                <li><strong>강제집행 신청</strong> — 공개된 재산을 대상으로 강제집행 신청</li>
                <li><strong>재산 압류</strong> — 부동산, 동산, 채권 등을 개별 압류</li>
                <li><strong>경매</strong> — 부동산의 경우 경매 진행</li>
                <li><strong>배당</strong> — 회수한 금액을 채권자에게 분배</li>
            </ul>
            <p>재산명시 후에도 채무자가 재산을 은폐하거나 도망치는 경우가 있으므로, 신속한 강제집행이 중요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006900" target="_blank" rel="noopener" title="민사집행법 제69조 — 대법원 종합법률정보">민사집행법 제69조</a></p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 재산명시신청을 여러 번 할 수 있나요?</div><div class="qna-a">A. 네, 가능합니다. 첫 번째 재산명시 이후에도 새로운 재산 정보가 필요하면 추가로 신청할 수 있습니다. 다만 과도한 신청은 남용으로 간주될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006900" target="_blank" rel="noopener" title="민사집행법 제69조 — 대법원 종합법률정보">민사집행법 제69조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 채무자가 거짓으로 "재산이 없습니다"라고 말하면 어떻게 하나요?</div><div class="qna-a">A. 거짓 진술은 위증에 해당할 수 있으며, 감치나 과태료 대상이 됩니다. 또한 실제로 재산이 있다는 증거(통장 거래내역, 등기부등본 등)가 있으면 채무자의 거짓이 적발될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 — 대법원 종합법률정보">민사집행법 제68조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 재산명시신청 후 얼마나 기다려야 하나요?</div><div class="qna-a">A. 신청 후 2~3주 정도면 명시기일이 정해집니다. 법원의 업무량에 따라 다를 수 있으므로, 신청 시 법원에 확인하는 것이 좋습니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 재산명시신청에 비용이 드나요?</div><div class="qna-a">A. 비용이 거의 없거나 매우 적습니다. 신청 수수료와 인지대 정도입니다. 구체적인 비용은 법원에 문의하세요.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 법무사나 변호사 없이 재산명시신청을 할 수 있나요?</div><div class="qna-a">A. 네, 개인이 직접 할 수 있습니다. 다만 전략적으로 재산명시를 활용하거나 법적 문제가 예상되면 전문가 도움이 유리할 수 있습니다.</div></div>
            <div class="qna-item"><div class="qna-q">Q. 재산명시기일에 채무자가 나타나지 않으면 감치가 되나요?</div><div class="qna-a">A. 정당한 사유 없이 불출석하면 감치가 될 수 있습니다. 다만 첫 번째 불출석이면 기일을 다시 정하고, 이후 반복적인 불출석이나 거짓 진술 시 감치가 실행됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 — 대법원 종합법률정보">민사집행법 제68조</a></div></div>
            <div class="qna-item"><div class="qna-q">Q. 배우자의 재산도 재산명시 대상에 포함되나요?</div><div class="qna-a">A. 판결에서 명시된 채무자 개인의 재산만 대상이 됩니다. 배우자의 재산은 별도의 법적 절차가 필요합니다. 다만 부부가 공동 소유한 재산이거나 채무자가 배우자 명의로 재산을 은폐한 경우는 다르게 취급될 수 있습니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h3>재산명시의 필수성</h3><p>대법원은 강제집행을 효과적으로 진행하기 위해 재산명시신청이 매우 중요하다고 판시했습니다. 채무자가 재산을 숨기는 경우가 많으므로, 법원의 강제력을 통해 재산을 공개하게 하는 것은 채권자 보호의 핵심입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100" target="_blank" rel="noopener" title="민사집행법 제61조 — 대법원 종합법률정보">민사집행법 제61조</a></p></div>
            <div class="ruling-box"><h3>감치의 효과</h3><p>대법원은 감치가 실제로 집행되지 않더라도, 그 위협만으로도 채무자가 재산을 공개하게 한다고 인정했습니다. 따라서 법원이 감치를 선언하는 것만으로도 대부분의 채무자가 성실하게 재산을 공개합니다.</p></div>
            <div class="ruling-box"><h3>거짓 진술에 대한 제재</h3><p>재산명시 과정에서의 거짓 진술은 위증에 해당하며, 민사상의 제재(감치, 과태료) 외에 형사상 제재(위증죄)도 받을 수 있습니다. 법원은 거짓 진술을 엄격하게 처벌하고 있습니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>신속한 조치의 중요성</h3><p>⚡ 재산명시신청을 한 후 채무자가 재산을 은폐하거나 도망칠 수 있습니다. 재산명시를 통해 정보를 얻은 후 신속하게 강제집행을 신청해야 합니다. 시간을 낭비하면 채무자가 재산을 해산할 수 있습니다.</p></div>
            <div class="warn-box"><h3>재산명시 정보의 활용</h3><p>재산명시를 통해 얻은 정보는 강제집행에만 사용해야 합니다. 이 정보를 다른 목적으로 공개하거나 사용하면 법적 문제가 발생할 수 있습니다.</p></div>
            <div class="warn-box"><h3>채무자의 전략적 대응</h3><p>채무자는 재산명시 기일 전에 재산을 다른 사람(친구, 친척) 명의로 옮길 수 있습니다. 따라서 재산명시신청 사실을 미리 공개하면 안 되며, 신청 직후 신속한 강제집행이 필수입니다.</p></div>
            <div class="warn-box"><h3>감치의 현실적 효과</h3><p>이론상 감치가 6개월까지 가능하지만, 실무에서는 2~3개월 이내에 채무자가 성실하게 재산을 공개합니다. 감치의 위협 자체가 채무자에게 충분한 압박이 되기 때문입니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
                <a href="#" class="next-link">강제집행개관</a>
                <a href="#" class="next-link">부동산 강제집행</a>
                <a href="#" class="next-link">채권 강제집행</a>
                <a href="#" class="next-link">집행문 부여 신청</a>
                <a href="#" class="next-link">집행권원이란</a>
                <a href="#" class="next-link">당사자 변동 시 대응</a>
            </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-6',
    title: '재산조회 신청',
    meta: '금융기관·관청을 통해 채무자의 숨겨진 재산을 찾는 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>판결을 받았는데 채무자 재산이 어디 있는지 모르는 경우</li>
      <li>재산명시 후에도 채무자가 재산 내역을 충분히 공개하지 않은 경우</li>
      <li>채무자의 금융재산(예금, 주식, 보험 등)을 확인하고 싶은 경우</li>
      <li>채무자 명의 부동산이나 자동차가 있는지 공적 기관을 통해 확인하려는 경우</li>
      <li>채무자가 재산을 숨기거나 이전했다고 의심되는 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 재산조회란</div>
    <p>재산조회는 채권자가 법원을 통해 금융기관·국가기관 등에 채무자의 재산 현황을 조회하도록 요청하는 제도입니다. 채무자 스스로 재산을 신고하는 재산명시와 달리, 제3자 기관에 직접 조회하여 객관적인 재산 내역을 파악할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 — 대법원 종합법률정보">민사집행법 제74조</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 핵심 포인트</div>
    <p>재산조회는 재산명시신청과 함께 또는 그 이후에 신청 가능하며, 법원이 공공기관·금융기관에 직접 조회하기 때문에 채무자가 숨긴 재산도 파악할 수 있습니다. 조회 결과는 강제집행 신청에 직접 활용됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 제1항 — 대법원 종합법률정보">민사집행법 제74조 제1항</a></p>
  </div>`
      },
      {
        heading: '재산조회 제도의 이해',
        content: `<h3>신청 요건</h3>
  <p>재산조회는 금전채권에 기초한 집행권원을 가진 채권자가 다음 중 하나에 해당하는 경우에 신청할 수 있습니다.</p>
  <ul style="margin:12px 0 12px 20px;line-height:2">
    <li>채무자가 재산명시기일에 출석하지 않거나 재산목록 제출을 거부하는 경우</li>
    <li>채무자가 제출한 재산목록이 부실하여 집행채권의 만족을 얻기에 부족한 경우</li>
    <li>재산명시 결과 알게 된 채무자의 재산으로 강제집행이 불가한 경우</li>
  </ul>
  <p>실무에서는 재산명시신청과 재산조회신청을 동시에 제출하는 경우도 많습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 제1항 — 대법원 종합법률정보">민사집행법 제74조 제1항</a></p>

  <h3>조회 가능 기관과 조회 내용</h3>
  <table>
    <thead>
      <tr><th>조회 기관</th><th>조회 내용</th></tr>
    </thead>
    <tbody>
      <tr><td>금융기관 (은행·증권사·보험사 등)</td><td>예금, 적금, 주식, 보험 해약환급금 등</td></tr>
      <tr><td>국토교통부</td><td>부동산(토지·건물) 소유 현황</td></tr>
      <tr><td>지방자치단체 (시·군·구)</td><td>자동차 소유 현황</td></tr>
      <tr><td>국민건강보험공단</td><td>소득 현황 (보험료 납부 내역)</td></tr>
      <tr><td>국세청</td><td>세금 납부 내역, 근로소득 등</td></tr>
    </tbody>
  </table>
  <p>조회 기관의 범위는 대법원규칙으로 정합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 제2항 — 대법원 종합법률정보">민사집행법 제74조 제2항</a></p>

  <h3>신청 절차</h3>
  <div class="step-box"><p><span class="step-num">1</span> <strong>신청서 작성</strong> — 재산조회신청서를 작성하여 집행법원에 제출합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 — 대법원 종합법률정보">민사집행법 제74조</a></p></div>
  <div class="step-box"><p><span class="step-num">2</span> <strong>법원 결정</strong> — 법원이 조회 여부를 결정하고 각 기관에 조회를 의뢰합니다.</p></div>
  <div class="step-box"><p><span class="step-num">3</span> <strong>기관 회신</strong> — 조회를 받은 기관이 법원에 채무자의 재산 현황을 회신합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007500" target="_blank" rel="noopener" title="민사집행법 제75조 — 대법원 종합법률정보">민사집행법 제75조</a></p></div>
  <div class="step-box"><p><span class="step-num">4</span> <strong>결과 통보</strong> — 법원이 채권자에게 조회 결과를 통보합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007600" target="_blank" rel="noopener" title="민사집행법 제76조 — 대법원 종합법률정보">민사집행법 제76조</a></p></div>
  <div class="step-box"><p><span class="step-num">5</span> <strong>강제집행 신청</strong> — 파악된 재산에 대해 강제집행(압류 등)을 신청합니다.</p></div>

  <h3>조회 결과의 이용과 제한</h3>
  <p>재산조회 결과로 파악된 재산 정보는 해당 강제집행의 신청에 활용할 수 있습니다. 다만, 이 정보는 집행 목적 외에 다른 용도로 사용하거나 제3자에게 제공하는 것이 금지됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007700" target="_blank" rel="noopener" title="민사집행법 제77조 — 대법원 종합법률정보">민사집행법 제77조</a></p>

  <h3>첨부서류</h3>
  <table>
    <thead>
      <tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr>
    </thead>
    <tbody>
      <tr><td>재산조회신청서</td><td>법원 양식</td><td>집행법원에 제출</td></tr>
      <tr><td>집행권원 사본 (판결문, 조정조서 등)</td><td>법원</td><td>확정증명 포함</td></tr>
      <tr><td>집행문</td><td>수소법원 사무관</td><td>집행문 부여된 것</td></tr>
      <tr><td>송달증명원</td><td>법원</td><td>채무자에게 송달됐음을 증명</td></tr>
    </tbody>
  </table>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">재산명시와 재산조회는 어떻게 다른가요?</div>
    <div class="qna-a">재산명시는 채무자가 법원에 직접 출석하여 자신의 재산목록을 작성·제출하는 절차입니다. 반면 재산조회는 법원이 금융기관·공공기관에 직접 채무자의 재산 현황을 조회하는 절차입니다. 채무자가 재산을 숨길 우려가 있을 때 재산조회가 더 실효적입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100" target="_blank" rel="noopener" title="민사집행법 제61조, 제74조 — 대법원 종합법률정보">민사집행법 제61조, 제74조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">재산명시를 먼저 해야만 재산조회를 신청할 수 있나요?</div>
    <div class="qna-a">반드시 재산명시를 먼저 거칠 필요는 없습니다. 재산명시 결과가 불충분하거나, 채무자가 재산명시에 응하지 않는 경우 재산조회가 허용됩니다. 실무적으로는 재산명시신청과 재산조회신청을 동시에 제출하는 경우도 많습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 제1항 — 대법원 종합법률정보">민사집행법 제74조 제1항</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">채무자의 은행 계좌를 조회할 수 있나요?</div>
    <div class="qna-a">네, 재산조회 결정이 나면 법원이 금융기관에 조회하여 채무자 명의의 예금·적금·주식·보험 해약환급금 등의 현황을 파악합니다. 채권자가 직접 은행에 조회하는 것이 아니라 법원을 통해 이루어집니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 제2항 — 대법원 종합법률정보">민사집행법 제74조 제2항</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">재산이 없다고 나오면 어떻게 하나요?</div>
    <div class="qna-a">현재 시점에 파악된 재산이 없거나 부족하더라도 향후 채무자에게 재산이 생기면 다시 강제집행을 신청할 수 있습니다. 또한 채무자가 재산을 부당하게 이전했다면 채권자취소권(사해행위취소소송)을 검토할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=040600" target="_blank" rel="noopener" title="민법 제406조 — 대법원 종합법률정보">민법 제406조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">조회 결과는 얼마나 기다려야 하나요?</div>
    <div class="qna-a">기관별로 회신 기간이 다르며, 통상 신청 후 수 주에서 수개월이 소요될 수 있습니다. 조회 결과가 나오면 법원이 채권자에게 통보합니다. 결과를 받은 후 신속하게 강제집행을 신청해야 효과적입니다.</div>
  </div>

  <div class="qna-item">
    <div class="qna-q">재산조회 비용은 어떻게 되나요?</div>
    <div class="qna-a">재산조회 신청 시 인지대와 송달료를 납부해야 합니다. 집행이 성공하면 이 비용을 채무자에게 청구할 수 있습니다. 정확한 비용은 사건의 성격과 조회 기관 수에 따라 달라지므로 법무사와 상담하시기 바랍니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 — 대법원 종합법률정보">민사집행법 제53조</a></div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">재산조회 제도의 취지</div>
    <p>대법원은 재산조회 제도에 대해, 채권자가 집행채권의 만족을 위해 채무자의 재산 소재를 파악하기 어려운 경우 국가기관을 통해 재산 정보를 효율적으로 수집할 수 있도록 마련된 것이라고 해석하고 있습니다. 신청 요건을 갖춘 경우 법원은 적절한 범위 내에서 조회를 허용해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 — 대법원 종합법률정보">민사집행법 제74조</a></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 조회 결과 즉시 활용</div>
    <p>재산조회 결과로 파악한 채무자의 금융계좌나 재산은 <strong>즉시 압류신청</strong>을 해야 합니다. 채무자가 계좌에서 돈을 인출하거나 재산을 처분할 수 있으므로, 조회 결과를 받은 후 빠르게 압류명령 신청을 진행해야 실질적 회수가 가능합니다.</p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 정보의 목적 외 사용 금지</div>
    <p>재산조회를 통해 알게 된 채무자의 개인 재산 정보는 오직 해당 집행 목적에만 사용해야 합니다. 다른 사람에게 알리거나 다른 목적으로 사용하면 법적 제재를 받을 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007700" target="_blank" rel="noopener" title="민사집행법 제77조 제2항 — 대법원 종합법률정보">민사집행법 제77조 제2항</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">ℹ️ 재산명시와 병행 권장</div>
    <p>재산조회만으로는 채무자의 모든 재산을 파악하기 어려울 수 있습니다. 재산명시신청과 재산조회를 함께 진행하면 더 넓은 범위의 재산 정보를 확보할 수 있습니다.</p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_05_재산명시.html" class="next-link">
      <span class="arrow">→</span>
      재산명시신청<br><small>채무자가 스스로 재산을 공개하게 하는 절차</small>
    </a>
    <a href="민집_07_채무불이행자명부.html" class="next-link">
      <span class="arrow">→</span>
      채무불이행자명부<br><small>채무자를 신용불량으로 등재시키는 방법</small>
    </a>
    <a href="민집_01_강제집행개관.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 개관<br><small>강제집행의 전체 흐름 이해</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-7',
    title: '채무불이행자명부',
    meta: '채무자를 신용불량으로 등재시켜 이행을 촉구하는 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>판결을 받았는데 채무자가 계속 변제를 미루는 경우</li>
      <li>재산명시기일에 채무자가 출석하지 않거나 재산목록 제출을 거부한 경우</li>
      <li>채무자에게 사회적 신용 제한이라는 압박을 가하고 싶은 경우</li>
      <li>금융거래나 공공 활동에 제한을 줄 수 있는 법적 수단을 원하는 경우</li>
      <li>채무자가 나중에 변제하겠다며 시간을 끌고 있는 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 채무불이행자명부란</div>
    <p>채무불이행자명부는 법원이 작성·관리하는 공적 장부로, 판결 등을 받고도 변제하지 않는 채무자의 이름을 등재하는 제도입니다. 등재되면 금융거래, 공공입찰 등에서 불이익을 받아 채무자에게 강력한 이행 압박이 됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007200" target="_blank" rel="noopener" title="민사집행법 제72조 — 대법원 종합법률정보">민사집행법 제72조</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 핵심 포인트</div>
    <p>채무불이행자명부 등재는 강제집행과는 별도의 절차이며, 채무자에게 실질적 사회적 압박을 가할 수 있는 유효한 수단입니다. 등재 후 채무가 변제되거나 일정 기간이 지나면 말소할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조, 제73조 — 대법원 종합법률정보">민사집행법 제70조, 제73조</a></p>
  </div>`
      },
      {
        heading: '채무불이행자명부 상세 안내',
        content: `<h3>등재 신청 요건</h3>
  <p>채권자는 다음 중 하나에 해당하는 경우 법원에 채무불이행자명부 등재를 신청할 수 있습니다.</p>
  <ul style="margin:12px 0 12px 20px;line-height:2">
    <li>금전채무 불이행으로 확정된 판결 또는 지급명령 등 집행권원을 가진 경우</li>
    <li>재산명시기일에 채무자가 정당한 이유 없이 출석하지 않은 경우 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 제1항 제1호 — 대법원 종합법률정보">민사집행법 제70조 제1항 제1호</a></li>
    <li>채무자가 재산목록 제출 거부 또는 선서 거부를 한 경우 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 제1항 제2호 — 대법원 종합법률정보">민사집행법 제70조 제1항 제2호</a></li>
    <li>채무자가 거짓 재산목록을 제출한 경우 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 제1항 제3호 — 대법원 종합법률정보">민사집행법 제70조 제1항 제3호</a></li>
    <li>재산명시기일에서 채무자가 재산이 없다고 신고하거나, 명시된 재산으로 집행을 다 마쳐도 채권 변제가 안 되는 경우 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 제1항 제4호 — 대법원 종합법률정보">민사집행법 제70조 제1항 제4호</a></li>
  </ul>

  <h3>등재 결정 절차</h3>
  <p>채권자의 신청을 받은 법원은 채무자를 심문하거나 그 기회를 주어야 합니다. 법원이 등재 결정을 내리면 채무자는 즉시항고를 할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007100" target="_blank" rel="noopener" title="민사집행법 제71조 — 대법원 종합법률정보">민사집행법 제71조</a></p>

  <h3>채무불이행자명부의 내용</h3>
  <p>채무불이행자명부에는 채무자의 성명, 주소, 채무 내용, 등재 사유 등이 기재됩니다. 이 명부는 법원에 비치되며, 일반인도 열람을 신청할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007200" target="_blank" rel="noopener" title="민사집행법 제72조 — 대법원 종합법률정보">민사집행법 제72조</a></p>

  <h3>등재의 효과</h3>
  <p>명부에 등재되면 금융기관은 이를 신용정보로 활용할 수 있어, 채무자는 대출·신용카드 발급 등 금융거래에서 불이익을 받을 수 있습니다. 또한 공공입찰 참여 제한, 영업 허가 심사 등에도 영향을 미칩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=260423&joNo=002500" target="_blank" rel="noopener" title="신용정보의 이용 및 보호에 관한 법률 제25조 — 대법원 종합법률정보">신용정보의 이용 및 보호에 관한 법률 제25조</a></p>

  <div class="case-box">
    <p><strong>사례)</strong> A가 B에게 3,000만 원의 판결을 받았으나 B가 계속 미루는 경우, 재산명시신청과 함께 채무불이행자명부 등재 신청을 병행하면, B가 금융거래 불이익을 우려하여 자발적으로 변제에 나서는 경우가 많습니다.</p>
  </div>

  <h3>말소 방법</h3>
  <p>다음의 경우 채무불이행자명부에서 이름을 말소할 수 있습니다.</p>
  <table>
    <thead>
      <tr><th>말소 사유</th><th>근거 법령</th></tr>
    </thead>
    <tbody>
      <tr><td>채무를 전부 변제한 경우</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007300" target="_blank" rel="noopener" title="민사집행법 제73조 제1항 — 대법원 종합법률정보">민사집행법 제73조 제1항</a></td></tr>
      <tr><td>채권자가 말소 신청을 한 경우</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007300" target="_blank" rel="noopener" title="민사집행법 제73조 제1항 — 대법원 종합법률정보">민사집행법 제73조 제1항</a></td></tr>
      <tr><td>등재 후 10년이 경과한 경우</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007300" target="_blank" rel="noopener" title="민사집행법 제73조 제2항 — 대법원 종합법률정보">민사집행법 제73조 제2항</a></td></tr>
      <tr><td>법원이 직권으로 말소를 결정한 경우</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007300" target="_blank" rel="noopener" title="민사집행법 제73조 제3항 — 대법원 종합법률정보">민사집행법 제73조 제3항</a></td></tr>
    </tbody>
  </table>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">채무불이행자명부와 재산명시는 같이 신청해야 하나요?</div>
    <div class="qna-a">반드시 그런 것은 아닙니다. 재산명시신청을 먼저 하고 그 결과에 따라 채무불이행자명부 등재를 신청할 수도 있고, 별도로 신청할 수도 있습니다. 다만 재산명시기일에서 채무자가 불출석·거부하는 경우가 등재 사유 중 하나이므로, 재산명시 후 등재 신청을 하는 경우가 많습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 — 대법원 종합법률정보">민사집행법 제70조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">등재되면 채무자는 어떤 불이익을 받나요?</div>
    <div class="qna-a">채무불이행자명부에 등재되면 신용정보기관에 제공되어 대출·신용카드 등 금융거래에서 불이익이 생깁니다. 공공입찰 참가 자격에도 영향이 있을 수 있으며, 인터넷 등기소 등을 통해 일반인도 열람할 수 있어 사회적 신용에 상당한 타격을 줍니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007200" target="_blank" rel="noopener" title="민사집행법 제72조 — 대법원 종합법률정보">민사집행법 제72조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">채무를 다 갚으면 명부에서 바로 삭제되나요?</div>
    <div class="qna-a">채무를 전부 변제하면 채권자가 말소 신청을 할 수 있으며, 채무자도 변제 사실을 소명하여 법원에 말소를 신청할 수 있습니다. 법원이 말소 결정을 내리면 명부에서 삭제됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007300" target="_blank" rel="noopener" title="민사집행법 제73조 제1항 — 대법원 종합법률정보">민사집행법 제73조 제1항</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">채무자가 등재 결정에 불복할 수 있나요?</div>
    <div class="qna-a">등재 결정을 내린 법원에 즉시항고를 제기할 수 있습니다. 또한 채무자는 채무의 부존재, 이미 변제했다는 사실 등을 주장하여 등재 취소를 구할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007100" target="_blank" rel="noopener" title="민사집행법 제71조 제3항 — 대법원 종합법률정보">민사집행법 제71조 제3항</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">채무불이행자명부 등재 신청 비용은 어떻게 되나요?</div>
    <div class="qna-a">신청 시 인지대와 송달료를 납부해야 합니다. 집행이 성공하면 이 비용을 채무자에게 청구할 수 있습니다. 정확한 비용은 법무사와 상담하시기 바랍니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 — 대법원 종합법률정보">민사집행법 제53조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">채무자가 재산명시기일에 출석했지만 재산이 없다고 하면 어떻게 하나요?</div>
    <div class="qna-a">채무자가 출석하여 재산이 없다고 신고하더라도, 명시된 재산으로 채권의 만족을 얻기 부족한 경우 채무불이행자명부 등재 신청이 가능합니다. 또한 재산조회를 통해 숨겨진 재산을 파악하는 방법도 병행할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 제1항 제4호 — 대법원 종합법률정보">민사집행법 제70조 제1항 제4호</a></div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">채무불이행자명부 등재의 목적</div>
    <p>대법원은 채무불이행자명부 등재 제도는 금전채무를 이행하지 않는 채무자에게 신용상의 불이익을 줌으로써 채무 이행을 간접적으로 강제하고 거래 상대방에게 신용 정보를 제공하는 데에 그 목적이 있다고 해석하고 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 — 대법원 종합법률정보">민사집행법 제70조</a></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 재산명시 기일 후 신속하게 신청</div>
    <p>재산명시기일에서 채무자가 불출석하거나 거부한 경우, 사유가 발생한 후 빠르게 채무불이행자명부 등재 신청을 해야 합니다. 시간이 지나면 채무자가 재산을 처분할 수 있습니다.</p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 강제집행과 병행 추진</div>
    <p>채무불이행자명부 등재는 채무자에 대한 간접 강제 수단입니다. 실질적인 재산 회수를 위해서는 부동산·예금 압류 등 강제집행과 함께 추진하는 것이 효과적입니다.</p>
  </div>
  <div class="warn-box">
    <div class="warn-title">ℹ️ 10년 후 자동 말소</div>
    <p>채무불이행자명부에 등재된 후 10년이 지나면 자동으로 말소됩니다. 따라서 장기 미수 채권의 경우 강제집행과 병행하여 실질적 회수 방법을 찾는 것이 중요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007300" target="_blank" rel="noopener" title="민사집행법 제73조 제2항 — 대법원 종합법률정보">민사집행법 제73조 제2항</a></p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_05_재산명시.html" class="next-link">
      <span class="arrow">→</span>
      재산명시신청<br><small>채무자가 스스로 재산을 공개하게 하는 절차</small>
    </a>
    <a href="민집_06_재산조회.html" class="next-link">
      <span class="arrow">→</span>
      재산조회<br><small>금융기관을 통해 채무자 재산 찾기</small>
    </a>
    <a href="민집_15_재산은닉.html" class="next-link">
      <span class="arrow">→</span>
      재산명시 위반 대응<br><small>채무자가 재산을 숨길 때 법적 대응</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-8',
    title: '집행에 관한 이의신청',
    meta: '집행 절차가 잘못됐을 때 집행법원에 대응하는 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>집행관이 압류할 수 없는 물건을 압류했다고 판단되는 경우</li>
      <li>집행 절차에 법적인 하자나 위법이 있다고 생각되는 경우</li>
      <li>집행법원의 집행 관련 결정에 이의를 제기하고 싶은 경우</li>
      <li>이미 압류된 재산에 대해 집행 자체가 위법하다고 주장하려는 경우</li>
      <li>집행이의를 해야 하는지 즉시항고를 해야 하는지 모르는 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 집행에 관한 이의신청이란</div>
    <p>집행에 관한 이의신청은 집행기관(집행법원 또는 집행관)의 집행처분이 위법하거나 부당한 경우, 이해관계인이 집행법원에 그 시정을 구하는 절차입니다. 집행권원 자체의 내용에 관한 다툼이 아니라, <strong>집행 절차상의 위법</strong>을 다투는 것입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 제1항 — 대법원 종합법률정보">민사집행법 제16조 제1항</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 핵심 포인트</div>
    <p>집행이의는 기간 제한 없이 언제든지 신청할 수 있으며, 집행법원이 심리합니다. 즉시항고와 달리 원칙적으로 집행을 자동 정지하지 않으므로, 긴급한 경우 별도로 집행정지 신청을 해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조, 제17조 — 대법원 종합법률정보">민사집행법 제16조, 제17조</a></p>
  </div>`
      },
      {
        heading: '집행이의 상세 안내',
        content: `<h3>집행이의의 대상</h3>
  <p>다음과 같은 집행처분이 집행이의의 대상이 됩니다.</p>
  <ul style="margin:12px 0 12px 20px;line-height:2">
    <li>집행법원의 집행 관련 결정 (항고가 허용되지 않는 것) <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 제1항 — 대법원 종합법률정보">민사집행법 제16조 제1항</a></li>
    <li>집행관의 집행처분 (압류, 매각 실시 등) <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 제1항 — 대법원 종합법률정보">민사집행법 제16조 제1항</a></li>
    <li>집행관이 지켜야 할 집행절차 위반</li>
  </ul>

  <h3>집행이의 vs 즉시항고 비교</h3>
  <table>
    <thead>
      <tr><th>구분</th><th>집행에 관한 이의신청</th><th>즉시항고</th></tr>
    </thead>
    <tbody>
      <tr><td>근거 법령</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 — 대법원 종합법률정보">민사집행법 제16조</a></td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001500" target="_blank" rel="noopener" title="민사집행법 제15조 — 대법원 종합법률정보">민사집행법 제15조</a></td></tr>
      <tr><td>대상</td><td>집행법원 결정(불복 불허) + 집행관 처분</td><td>법원의 재판 중 항고 허용된 것</td></tr>
      <tr><td>제기 기간</td><td>기간 제한 없음</td><td>재판 고지일로부터 1주일 이내</td></tr>
      <tr><td>심리 기관</td><td>집행법원</td><td>항고법원</td></tr>
      <tr><td>집행 정지 효력</td><td>원칙적으로 없음 (별도 신청 필요)</td><td>원칙적으로 없음 (별도 신청 필요)</td></tr>
    </tbody>
  </table>

  <h3>이의신청 절차</h3>
  <p>집행이의는 서면 또는 구술로 집행법원에 신청합니다. 구술로 신청하는 경우 법원사무관등이 조서를 작성합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 제1항 — 대법원 종합법률정보">민사집행법 제16조 제1항</a></p>
  <p>법원은 이의신청에 대한 재판을 하기 전에 채권자에게 의견을 진술할 기회를 주어야 합니다. 법원은 이의를 인용하거나 기각하는 결정을 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001700" target="_blank" rel="noopener" title="민사집행법 제17조 — 대법원 종합법률정보">민사집행법 제17조</a></p>

  <h3>집행이의와 청구이의의 차이</h3>
  <p>집행이의는 집행 <strong>절차</strong>의 위법을 다투는 것이고, 청구이의의 소는 집행권원에 표시된 <strong>실체적 권리</strong>(이미 변제했다는 등)를 다투는 것입니다. 집행이의에서는 "돈을 이미 갚았다"는 이유를 주장할 수 없습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조, 제16조 — 대법원 종합법률정보">민사집행법 제44조, 제16조</a></p>

  <div class="ruling-box">
    <div class="ruling-header">집행이의의 범위</div>
    <p>대법원은 집행에 관한 이의신청의 이의 사유는 집행절차상의 위법에 한정되고, 집행권원에 표시된 청구권 자체의 존부나 내용에 관한 주장은 이의 사유가 될 수 없다고 해석하고 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 — 대법원 종합법률정보">민사집행법 제16조</a></p>
  </div>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">집행이의를 신청하면 집행이 자동으로 멈추나요?</div>
    <div class="qna-a">아닙니다. 집행이의를 신청해도 집행은 원칙적으로 계속됩니다. 집행을 일시 정지시키려면 집행이의 신청과 함께 별도로 집행정지 신청을 해야 하고, 법원이 정지 결정을 내려야 멈춥니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조, 제46조 — 대법원 종합법률정보">민사집행법 제16조, 제46조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행이의 기간 제한이 있나요?</div>
    <div class="qna-a">집행에 관한 이의신청은 즉시항고와 달리 기간 제한이 없습니다. 다만 집행절차가 완료된 후에는 이의 이익이 없으므로 실질적으로 의미가 없게 됩니다. 집행이 개시된 후 되도록 빠르게 신청하는 것이 좋습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 — 대법원 종합법률정보">민사집행법 제16조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행이의와 즉시항고를 혼동하는 경우가 많은데, 어떻게 구별하나요?</div>
    <div class="qna-a">간단히 말해, 법원이 특정 처분에 대해 "즉시항고를 할 수 있다"고 명시한 경우에는 즉시항고를 해야 하고, 그러한 규정이 없는 집행법원의 결정이나 집행관의 처분에 대해서는 집행이의를 해야 합니다. 틀린 불복방법을 선택하면 각하될 수 있으므로, 법무사와 확인하는 것이 안전합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001500" target="_blank" rel="noopener" title="민사집행법 제15조, 제16조 — 대법원 종합법률정보">민사집행법 제15조, 제16조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">이미 갚은 돈인데 집행을 당하고 있습니다. 집행이의를 해야 하나요?</div>
    <div class="qna-a">아닙니다. "이미 변제했다"는 주장은 집행권원에 표시된 실체적 권리에 관한 다툼이므로, 청구이의의 소를 제기해야 합니다. 집행이의는 절차상 위법만 다룰 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 — 대법원 종합법률정보">민사집행법 제44조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행이의 결과에 다시 불복할 수 있나요?</div>
    <div class="qna-a">집행이의에 대한 집행법원의 재판에는 원칙적으로 다시 불복하기 어렵습니다. 다만 헌법 위반이나 법률 위반 등 특별한 사정이 있는 경우 특별항고 등의 방법을 검토할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001700" target="_blank" rel="noopener" title="민사집행법 제17조 — 대법원 종합법률정보">민사집행법 제17조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">제3자인데도 집행이의를 신청할 수 있나요?</div>
    <div class="qna-a">집행이의는 집행의 당사자뿐만 아니라 이해관계인도 신청할 수 있습니다. 이해관계인이란 집행절차와 법적으로 이해관계가 있는 사람을 의미합니다. 단, 단순히 경제적 이해관계만 있는 자는 해당되지 않습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 제1항 — 대법원 종합법률정보">민사집행법 제16조 제1항</a></div>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 집행 진행 중 신속한 대응 필수</div>
    <p>집행이의를 신청해도 집행은 계속되므로, 집행을 멈춰야 하는 경우 집행이의 신청과 동시에 <strong>집행정지 신청</strong>을 반드시 함께 해야 합니다. 집행이 완료된 후에는 이의 실익이 없어질 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 이의 사유 확인 필수</div>
    <p>집행이의의 이의 사유는 오직 집행 절차상의 위법에 한합니다. 실체적 권리(채무 소멸, 이행 유예 등)를 다투려면 청구이의의 소를 별도로 제기해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 — 대법원 종합법률정보">민사집행법 제44조</a></p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_09_청구이의.html" class="next-link">
      <span class="arrow">→</span>
      청구이의의 소<br><small>실체적 권리를 다투는 방법</small>
    </a>
    <a href="민집_12_집행정지.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 정지<br><small>집행을 일시적으로 멈추는 방법</small>
    </a>
    <a href="민집_11_집행문이의.html" class="next-link">
      <span class="arrow">→</span>
      집행문 이의<br><small>집행문 자체가 잘못 발급됐을 때</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-9',
    title: '청구이의의 소',
    meta: '이미 갚았는데 또 집행을 당하고 있다면',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>판결이 확정된 후 실제로 채무를 변제했는데 채권자가 또 강제집행을 신청한 경우</li>
      <li>채무를 상계·면제·면책받았는데 집행권원이 남아 있는 경우</li>
      <li>판결이 확정된 이후 새로운 사유로 채무가 소멸했다고 주장하고 싶은 경우</li>
      <li>집행권원에 기재된 이행의무가 조건부였는데 조건이 성취되지 않은 경우</li>
      <li>집행권원상의 권리가 시효로 소멸했다고 생각되는 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 청구이의의 소란</div>
    <p>청구이의의 소는 집행권원에 표시된 채권이 실체적으로 더 이상 존재하지 않거나 행사할 수 없게 됐을 때, 채무자가 강제집행을 배제하기 위해 제기하는 소송입니다. 예를 들어 "판결 이후 돈을 갚았다", "채무를 면제받았다", "시효가 완성됐다" 등의 사유로 제기합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 — 대법원 종합법률정보">민사집행법 제44조</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 핵심 포인트</div>
    <p>청구이의의 소는 반드시 <strong>변론이 종결된 뒤에 생긴 사유</strong>를 주장해야 합니다. 판결 전 이미 있었던 사유(판결 때 이미 채무가 없었다는 주장)는 재심이나 항소를 통해 다퉈야 합니다. 청구이의의 소를 제기하면서 집행정지 신청을 함께 해야 집행이 멈춥니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제2항, 제46조 — 대법원 종합법률정보">민사집행법 제44조 제2항, 제46조</a></p>
  </div>`
      },
      {
        heading: '청구이의의 소 상세 안내',
        content: `<h3>이의 사유</h3>
  <p>청구이의의 소에서 주장할 수 있는 사유는 <strong>집행권원(판결 등)에 표시된 청구권에 관한 이의 사유</strong>여야 합니다. 구체적으로 다음과 같은 사유가 해당됩니다.</p>
  <ul style="margin:12px 0 12px 20px;line-height:2">
    <li>변론종결 후 채무의 변제 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제2항 — 대법원 종합법률정보">민사집행법 제44조 제2항</a></li>
    <li>변론종결 후 채무 면제, 경개, 상계</li>
    <li>변론종결 후 소멸시효 완성 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=016200" target="_blank" rel="noopener" title="민법 제162조 — 대법원 종합법률정보">민법 제162조</a></li>
    <li>집행권원에 정지 조건이 있어 조건이 성취되지 않은 경우</li>
    <li>채권자의 동시이행 의무를 채무자가 이행받지 못한 경우</li>
  </ul>
  <p>판결 확정 <strong>이전</strong>에 이미 존재했던 사유(청구이의 사유로 제출할 수 있었으나 제출하지 않은 것)는 원칙적으로 이의 사유로 삼을 수 없습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제2항 — 대법원 종합법률정보">민사집행법 제44조 제2항</a></p>

  <h3>관할 법원</h3>
  <p>청구이의의 소는 제1심 판결을 내린 법원이 관할합니다. 집행권원이 공정증서인 경우에는 채무자의 주소지 지방법원이 관할합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제1항 — 대법원 종합법률정보">민사집행법 제44조 제1항</a></p>

  <h3>집행정지 신청과의 병행</h3>
  <p>청구이의의 소를 제기하더라도 강제집행이 자동으로 정지되지 않습니다. 집행을 멈추려면 청구이의의 소와 함께 <strong>집행정지 신청</strong>을 별도로 해야 합니다. 법원이 집행정지 결정을 내리면 집행이 임시로 멈춥니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></p>

  <div class="case-box">
    <p><strong>사례)</strong> A가 B에게 1,000만 원의 판결을 받았고, B는 판결 확정 이후 A에게 실제로 1,000만 원을 이체했습니다. 그런데 A가 다시 강제집행을 신청했다면, B는 청구이의의 소를 제기하면서 동시에 집행정지 신청을 하여 집행을 막을 수 있습니다.</p>
  </div>

  <h3>집행이의와 청구이의 비교</h3>
  <table>
    <thead>
      <tr><th>구분</th><th>집행에 관한 이의신청</th><th>청구이의의 소</th></tr>
    </thead>
    <tbody>
      <tr><td>다투는 내용</td><td>집행 절차의 위법</td><td>집행권원상 실체적 권리의 소멸</td></tr>
      <tr><td>절차 형태</td><td>신청 (非소송)</td><td>소송</td></tr>
      <tr><td>근거</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조 — 대법원 종합법률정보">민사집행법 제16조</a></td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 — 대법원 종합법률정보">민사집행법 제44조</a></td></tr>
      <tr><td>관할</td><td>집행법원</td><td>제1심 판결법원</td></tr>
      <tr><td>집행 정지</td><td>별도 신청 필요</td><td>별도 신청 필요</td></tr>
    </tbody>
  </table>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">판결 전에 이미 돈을 갚았는데 청구이의를 제기할 수 있나요?</div>
    <div class="qna-a">판결 전(변론종결 전)에 이미 있었던 사유는 청구이의의 소에서 주장하기 어렵습니다. 변론 중에 이 사유를 주장했어야 했기 때문입니다. 다만 예외적인 경우가 있을 수 있으므로, 법무사와 상담하여 대응 방법을 찾아보시기 바랍니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제2항 — 대법원 종합법률정보">민사집행법 제44조 제2항</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">청구이의의 소를 제기하면 집행이 바로 멈추나요?</div>
    <div class="qna-a">아닙니다. 청구이의의 소를 제기해도 집행은 계속됩니다. 집행을 멈추려면 법원에 집행정지 신청을 별도로 해야 합니다. 집행정지를 위해서는 법원이 정한 담보를 제공해야 하는 경우도 있습니다. 빠른 조치가 필요하므로 소 제기와 동시에 집행정지를 신청하는 것이 중요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">채무 소멸시효가 완성됐는데 집행을 막을 수 있나요?</div>
    <div class="qna-a">채무 소멸시효가 완성된 경우 청구이의의 소를 제기하여 집행을 막을 수 있습니다. 다만 소멸시효 완성은 변론종결 이후에 발생한 것이어야 하고, 시효 완성 주장도 구체적으로 입증해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=016200" target="_blank" rel="noopener" title="민법 제162조, 민사집행법 제44조 — 대법원 종합법률정보">민법 제162조, 민사집행법 제44조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">청구이의의 소와 항소는 어떻게 다른가요?</div>
    <div class="qna-a">항소는 판결이 확정되기 전에 그 판결 자체를 다투는 절차입니다. 반면 청구이의의 소는 판결이 확정된 이후에 판결 이후의 새로운 사유(변제, 면제 등)를 이유로 강제집행을 배제하는 절차입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 — 대법원 종합법률정보">민사집행법 제44조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">공정증서에 기한 강제집행도 청구이의로 막을 수 있나요?</div>
    <div class="qna-a">네, 집행권원이 공정증서인 경우에도 청구이의의 소를 제기할 수 있습니다. 이 경우 관할 법원은 채무자의 주소지 지방법원이 됩니다. 공정증서의 내용에 기재된 청구권이 소멸하거나 행사할 수 없게 된 사유를 주장할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제1항 — 대법원 종합법률정보">민사집행법 제44조 제1항</a></div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">청구이의 사유의 범위</div>
    <p>대법원은 청구이의의 소에서는 변론 종결 뒤에 생긴 이의 사유만을 주장할 수 있고, 이미 변론 당시에 제출할 수 있었던 사유는 허용되지 않는다고 일관되게 판시하고 있습니다. 이는 확정판결의 기판력을 존중하여 집행권원의 실효성을 보장하기 위한 것입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제2항 — 대법원 종합법률정보">민사집행법 제44조 제2항</a> <span class="case-tag"><a class="case-tag" href="https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=2008%EB%8B%A479876" target="_blank" rel="noopener" title="2008다79876 — 대법원 종합법률정보">2008다79876</a></span></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 집행 진행 중 즉시 신청 필수</div>
    <p>강제집행이 완료되기 전에 청구이의의 소 제기와 집행정지 신청을 모두 해야 합니다. 집행이 완료된 후에는 이미 이루어진 집행 자체를 막을 수 없습니다. 시간이 촉박하므로 즉시 법무사와 상담하시기 바랍니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 변론종결 후 발생한 사유만 주장 가능</div>
    <p>판결 확정 이전(변론종결 전)에 이미 존재하던 사유는 청구이의 이유로 주장하기 어렵습니다. 반드시 변론종결 이후에 발생한 사유여야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제44조 제2항 — 대법원 종합법률정보">민사집행법 제44조 제2항</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">ℹ️ 증거 확보 필수</div>
    <p>변제 사실, 면제 합의, 상계 통보 등 채무 소멸 사유를 입증할 증거(이체 영수증, 합의서, 내용증명 등)를 미리 준비해 두어야 합니다.</p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_12_집행정지.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 정지<br><small>청구이의 소 제기 후 집행을 멈추는 방법</small>
    </a>
    <a href="민집_08_집행이의.html" class="next-link">
      <span class="arrow">→</span>
      집행에 관한 이의신청<br><small>절차 위법에 대한 대응</small>
    </a>
    <a href="민집_11_집행문이의.html" class="next-link">
      <span class="arrow">→</span>
      집행문 이의<br><small>집행문 자체의 문제를 다투는 방법</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-10',
    title: '제3자이의의 소',
    meta: '내 물건인데 채무자 것으로 잘못 압류됐을 때',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>내 소유의 물건이나 재산이 채무자 재산으로 오인되어 압류된 경우</li>
      <li>남편/아내의 채무로 인해 본인 명의 재산이 집행 대상이 된 경우</li>
      <li>임대해 준 물건이 세입자(채무자)의 재산으로 압류된 경우</li>
      <li>채무자 명의 재산이지만 실제 소유권이 나에게 있는 경우</li>
      <li>집행 목적물에 대해 소유권 외의 양도담보권, 유치권 등을 갖고 있는 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 제3자이의의 소란</div>
    <p>제3자이의의 소는 강제집행의 목적물에 대하여 소유권이나 그 밖에 양도 또는 인도를 막을 권리를 가진 제3자가 채권자를 상대로 그 강제집행의 불허를 구하는 소송입니다. 집행 당사자가 아닌 제3자가 자신의 실체적 권리를 지키기 위한 수단입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조 제1항 — 대법원 종합법률정보">민사집행법 제48조 제1항</a> <span class="case-tag"><a class="case-tag" href="https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=2014%EB%8B%A4225038" target="_blank" rel="noopener" title="2014다225038 — 대법원 종합법률정보">2014다225038</a></span></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 핵심 포인트</div>
    <p>제3자이의의 소를 제기하면서 동시에 집행정지 신청을 해야 실질적 보호를 받을 수 있습니다. 소유권이나 양도를 막을 권리(저당권, 유치권, 양도담보권 등)가 있으면 신청 가능합니다. 관할 법원은 집행법원 또는 집행법원 소재지 지방법원 합의부입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조 제2항, 제49조 — 대법원 종합법률정보">민사집행법 제48조 제2항, 제49조</a></p>
  </div>`
      },
      {
        heading: '제3자이의의 소 상세 안내',
        content: `<h3>신청 자격 (원고 적격)</h3>
  <p>제3자이의의 소를 제기할 수 있는 사람은 집행 목적물에 대하여 다음과 같은 권리를 가진 제3자입니다.</p>
  <ul style="margin:12px 0 12px 20px;line-height:2">
    <li>소유권 — 집행 목적물의 진짜 소유자 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조 제1항 — 대법원 종합법률정보">민사집행법 제48조 제1항</a></li>
    <li>양도담보권자 — 채무자에게 담보 목적으로 소유권이전한 재산의 원소유자</li>
    <li>유치권자 — 집행 목적물을 점유하며 피담보채권이 있는 자</li>
    <li>그 밖에 양도 또는 인도를 막을 권리를 가진 자 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조 제1항 — 대법원 종합법률정보">민사집행법 제48조 제1항</a></li>
  </ul>
  <p>단순히 채권적 청구권만 가진 경우(임대차 등)에는 원칙적으로 제3자이의의 소를 제기하기 어렵습니다.</p>

  <h3>관할 법원</h3>
  <p>제3자이의의 소는 집행법원이 관할합니다. 집행법원이 지방법원 단독부인 경우에는 지방법원 합의부가 관할합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조 제2항 — 대법원 종합법률정보">민사집행법 제48조 제2항</a></p>

  <h3>집행정지 신청과의 병행</h3>
  <p>제3자이의의 소를 제기해도 강제집행은 자동으로 정지되지 않습니다. 집행을 멈추려면 별도로 집행정지 신청을 해야 하고, 법원이 집행정지 결정을 내려야 실질적 보호를 받을 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004900" target="_blank" rel="noopener" title="민사집행법 제49조 — 대법원 종합법률정보">민사집행법 제49조</a></p>

  <div class="case-box">
    <p><strong>사례)</strong> A(채무자)의 채권자 B가 A 명의 사무실 집기에 대해 강제집행을 실시했습니다. 그런데 그 집기는 실제로 C(제3자)가 A에게 임시 보관을 맡긴 C 소유의 물건이었습니다. C는 제3자이의의 소를 제기하면서 집행정지 신청을 함께 해야 집기를 보호받을 수 있습니다.</p>
  </div>

  <h3>임시 대응 — 집행이의와의 차이</h3>
  <p>집행이 막 시작된 급박한 상황에서는 집행이의신청(민사집행법 제16조)을 통해 임시로 대응하고, 동시에 제3자이의의 소를 준비할 수 있습니다. 집행이의는 집행 절차상 위법을 다루는 신속한 수단이고, 제3자이의의 소는 실체적 권리를 확인받는 본안 소송입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600" target="_blank" rel="noopener" title="민사집행법 제16조, 제48조 — 대법원 종합법률정보">민사집행법 제16조, 제48조</a></p>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">제 물건이 채무자 것으로 오해받아 압류됐습니다. 어떻게 해야 하나요?</div>
    <div class="qna-a">즉시 법무사와 상담하여 제3자이의의 소를 제기하고 동시에 집행정지 신청을 해야 합니다. 집행이 진행 중이라면 매우 급박한 상황이므로 빠른 대응이 필요합니다. 소유권을 입증할 수 있는 서류(매매계약서, 영수증, 등기부등본 등)를 준비하세요. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조, 제49조 — 대법원 종합법률정보">민사집행법 제48조, 제49조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">임차인(세입자)인데 집주인 채무로 집이 경매로 넘어가면 제3자이의를 할 수 있나요?</div>
    <div class="qna-a">임차인은 임차권이라는 채권적 권리를 가지므로, 원칙적으로 제3자이의의 소의 원고가 되기 어렵습니다. 다만 대항력 있는 임차인은 경매 낙찰자에게 임차권을 주장할 수 있는 별도의 보호를 받을 수 있습니다. 구체적 상황에 따라 다르므로 법무사와 상담하세요. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=276291&joNo=000300" target="_blank" rel="noopener" title="주택임대차보호법 제3조, 민사집행법 제48조 — 대법원 종합법률정보">주택임대차보호법 제3조, 민사집행법 제48조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">양도담보로 넘겨준 재산이 채권자에게 압류됐습니다. 제3자이의가 가능한가요?</div>
    <div class="qna-a">양도담보권자(원소유자)는 제3자이의의 소를 제기할 수 있습니다. 다만 양도담보의 경우 외형상 소유권이 채무자(양도인)에게 있으므로, 양도담보 계약 관계를 입증하는 것이 중요합니다. 법원은 이 사안을 신중히 검토합니다.</div>
  </div>

  <div class="qna-item">
    <div class="qna-q">관할 법원이 멀리 있어도 그 법원에 가야 하나요?</div>
    <div class="qna-a">제3자이의의 소는 집행법원 또는 그 소재지 지방법원 합의부의 관할이므로, 원칙적으로 그 법원에 소를 제기해야 합니다. 다만 법무사가 소송을 대리하면 직접 방문하지 않아도 되는 경우가 많습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조 제2항 — 대법원 종합법률정보">민사집행법 제48조 제2항</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행이 완료된 후에는 제3자이의를 할 수 없나요?</div>
    <div class="qna-a">집행이 완료된 후에는 제3자이의의 소를 통해 이미 이루어진 집행을 되돌리기가 매우 어렵습니다. 따라서 집행이 진행 중일 때 신속하게 소를 제기하고 집행정지 신청을 해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004900" target="_blank" rel="noopener" title="민사집행법 제49조 — 대법원 종합법률정보">민사집행법 제49조</a></div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">제3자이의의 소의 원고 적격</div>
    <p>대법원은 제3자이의의 소에서 "양도 또는 인도를 막을 권리"란 소유권뿐만 아니라 목적물의 양도나 인도를 실체법상 저지할 수 있는 물권을 포함하지만, 단순한 채권적 청구권만으로는 원고 적격을 인정하기 어렵다고 해석하고 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800" target="_blank" rel="noopener" title="민사집행법 제48조 제1항 — 대법원 종합법률정보">민사집행법 제48조 제1항</a></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 집행 진행 중 즉시 신청 필수</div>
    <p>집행이 완료되면 제3자이의의 실익이 크게 줄어듭니다. 재산이 압류됐다는 사실을 알게 된 즉시 집행정지 신청과 제3자이의의 소를 동시에 진행해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004900" target="_blank" rel="noopener" title="민사집행법 제49조 — 대법원 종합법률정보">민사집행법 제49조</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 소유권 입증 서류 준비</div>
    <p>제3자이의의 소를 제기하면 소유권 또는 권리를 입증할 책임이 원고(제3자)에게 있습니다. 매매계약서, 영수증, 등기부등본, 점유 사실 등 객관적인 증거를 미리 확보해 두어야 합니다.</p>
  </div>
  <div class="warn-box">
    <div class="warn-title">ℹ️ 집행이의와 병행 가능</div>
    <p>급박한 상황에서는 집행이의신청(민사집행법 제16조)으로 임시 대응하면서 제3자이의의 소를 준비하는 것이 효과적입니다. 두 절차를 병행할 수 있습니다.</p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_12_집행정지.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 정지<br><small>소 제기와 함께 집행을 멈추는 방법</small>
    </a>
    <a href="민집_08_집행이의.html" class="next-link">
      <span class="arrow">→</span>
      집행에 관한 이의신청<br><small>급박한 상황에서의 임시 대응</small>
    </a>
    <a href="민집_09_청구이의.html" class="next-link">
      <span class="arrow">→</span>
      청구이의의 소<br><small>채무자 본인이 집행을 막는 방법</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-11',
    title: '집행문 부여에 대한 이의',
    meta: '집행문 자체가 잘못 발급됐을 때 취소를 구하는 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>집행권원에 표시된 것 이상의 집행문이 발급됐다고 판단되는 경우</li>
      <li>집행 당사자가 아닌 사람에게 집행문이 부여됐다고 생각되는 경우</li>
      <li>집행문 발급 요건이 갖춰지지 않았음에도 집행문이 부여된 경우</li>
      <li>채권자가 집행문 부여를 거절당하여 법원에 집행문 부여를 구하려는 경우</li>
      <li>집행권원상의 청구권이 이미 소멸했는데 집행문이 발급된 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 집행문 관련 3가지 불복 제도</div>
    <p>집행문과 관련하여 민사집행법은 3가지 불복 방법을 두고 있습니다. ① 집행문 부여 <strong>거절</strong>에 대한 이의신청(채권자의 불복), ② 집행문 부여의 소(요건 미비 시 채권자의 소), ③ 집행문 부여에 대한 이의의 소(채무자 등의 불복)입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003300" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제33조, 제34조, 제45조</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 핵심 포인트</div>
    <p>집행문이 <strong>잘못 발급됐다</strong>고 주장하는 쪽(채무자 등)은 집행문 부여에 대한 이의의 소(민사집행법 제45조)를 제기해야 합니다. 집행문 <strong>발급 거절</strong>에 불복하는 쪽(채권자)은 이의신청(제34조)이나 집행문 부여의 소(제33조)를 이용합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003300" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제33조, 제34조, 제45조</a></p>
  </div>`
      },
      {
        heading: '집행문 관련 불복 제도 상세',
        content: `<h3>① 집행문 부여에 관한 이의신청 (채권자의 불복)</h3>
  <p>법원사무관등이 집행문 부여를 거절한 경우, 채권자는 법원에 이의신청을 할 수 있습니다. 법원이 이의를 인용하면 집행문 부여를 명합니다. 이 이의신청은 즉시항고와 달리 기간 제한이 없습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003400" target="_blank" rel="noopener" title="민사집행법 제34조 제1항 — 대법원 종합법률정보">민사집행법 제34조 제1항</a></p>

  <h3>② 집행문 부여의 소 (채권자가 소송으로 집행문 부여를 구하는 경우)</h3>
  <p>집행문 부여에 조건이 성취됐음을 증명해야 하는데(조건부 집행문), 이를 서류로 증명하기 어려운 경우 채권자는 집행문 부여의 소를 제기합니다. 수소법원 또는 채무자 주소지 법원이 관할합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003300" target="_blank" rel="noopener" title="민사집행법 제33조 — 국가법령정보센터">민사집행법 제33조</a></p>

  <h3>③ 집행문 부여에 대한 이의의 소 (채무자 등의 불복)</h3>
  <p>채무자나 이해관계인이 집행문 자체가 위법하게 또는 잘못 발급됐다고 주장할 때 제기하는 소송입니다. 집행권원에 표시된 청구권이 집행문 부여 시점에 이미 소멸했다는 것 등을 주장합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004500" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제45조</a></p>

  <h3>세 가지 제도 비교</h3>
  <table>
    <thead>
      <tr><th>구분</th><th>누가 이용하는가</th><th>이용 상황</th><th>근거</th></tr>
    </thead>
    <tbody>
      <tr><td>집행문 부여 거절에 대한 이의신청</td><td>채권자</td><td>집행문 부여 거절당한 경우</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003400" target="_blank" rel="noopener" title="민사집행법 제34조 — 국가법령정보센터">제34조</a></td></tr>
      <tr><td>집행문 부여의 소</td><td>채권자</td><td>조건 성취를 소송으로 증명</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003300" target="_blank" rel="noopener" title="민사집행법 제33조 — 국가법령정보센터">제33조</a></td></tr>
      <tr><td>집행문 부여에 대한 이의의 소</td><td>채무자·이해관계인</td><td>집행문이 위법하게 발급된 경우</td><td><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004500" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">제45조</a></td></tr>
    </tbody>
  </table>

  <h3>집행문 이의와 청구이의의 차이</h3>
  <p>집행문 부여에 대한 이의의 소(제45조)는 집행문 부여 당시의 사유(청구권 소멸 등)를 다루는 반면, 청구이의의 소(제44조)는 집행권원 성립 이후 변론종결 후에 생긴 사유를 다룹니다. 상황에 따라 두 소송을 함께 제기하는 것도 가능합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제44조, 제45조</a></p>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">집행문 부여에 대한 이의의 소와 청구이의의 소는 어떻게 다른가요?</div>
    <div class="qna-a">청구이의의 소는 "변론종결 후"에 발생한 사유(변제, 면제, 시효 등)를 주장하는 것입니다. 반면 집행문 부여에 대한 이의의 소는 집행문이 발급될 당시 이미 집행문 부여 요건이 갖춰지지 않았다는 것을 다툽니다. 상황에 따라 두 소송을 함께 진행할 수도 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제44조, 제45조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행문 부여를 거절당한 채권자는 어떻게 해야 하나요?</div>
    <div class="qna-a">집행문 부여를 거절당하면 법원에 이의신청을 할 수 있습니다. 이의신청이 받아들여지지 않는 경우에는 집행문 부여의 소를 제기하여 소송을 통해 집행문 부여를 구할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003400" target="_blank" rel="noopener" title="민사집행법 제33조 — 국가법령정보센터">민사집행법 제34조, 제33조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">승계집행문이 잘못 부여됐다고 주장할 수 있나요?</div>
    <div class="qna-a">승계집행문이 적격 없는 자에게 부여됐다면 집행문 부여에 대한 이의의 소 또는 집행문 부여에 관한 이의신청을 통해 다툴 수 있습니다. 승계 사실이 없거나 승계 요건이 갖춰지지 않은 경우가 그 예입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003100" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제31조, 제34조, 제45조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행문 이의의 소를 제기하면 집행이 멈추나요?</div>
    <div class="qna-a">집행문 부여에 대한 이의의 소를 제기해도 집행이 자동으로 정지되지 않습니다. 집행정지를 원한다면 별도로 집행정지 신청을 해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행문이 여러 장 발급됐는데 이의를 제기할 수 있나요?</div>
    <div class="qna-a">집행문은 1개의 집행권원에 대해 원칙적으로 1장 발급이 원칙이며, 두 번째 이후의 집행문을 발급받으려면 요건을 갖춰야 합니다. 요건 없이 여러 장이 발급됐다면 집행문 부여에 관한 이의신청을 통해 이의를 제기할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003400" target="_blank" rel="noopener" title="민사집행법 제34조 — 국가법령정보센터">민사집행법 제34조</a></div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">집행문 부여에 대한 이의의 소의 성격</div>
    <p>대법원은 집행문 부여에 대한 이의의 소는 집행문 부여 요건이 갖춰지지 않았음을 이유로 집행문의 취소를 구하는 소로서, 집행권원에 표시된 실체적 권리에 관한 다툼을 내용으로 하는 청구이의의 소와 구별된다고 해석합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004500" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제45조</a> <span class="case-tag"><a class="case-tag" href="https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=2016%EB%8B%A4268695" target="_blank" rel="noopener" title="2016다268695 — 대법원 종합법률정보">2016다268695</a></span></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 집행 중단이 필요하면 즉시 집행정지 신청</div>
    <p>집행문 이의의 소만으로는 집행이 멈추지 않습니다. 집행 중단이 필요하다면 소 제기와 동시에 집행정지 신청을 해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 적절한 불복방법 선택이 중요</div>
    <p>상황에 따라 집행이의신청, 집행문 부여에 관한 이의신청, 집행문 부여에 대한 이의의 소, 청구이의의 소 중 적절한 방법을 선택해야 합니다. 잘못된 불복방법을 선택하면 각하될 수 있으므로 법무사와 상담하는 것이 안전합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=003300" target="_blank" rel="noopener" title="민사집행법 제45조 — 국가법령정보센터">민사집행법 제33조, 제34조, 제44조, 제45조</a></p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_03_집행문부여.html" class="next-link">
      <span class="arrow">→</span>
      집행문 부여 신청<br><small>집행문을 받는 정상적인 절차</small>
    </a>
    <a href="민집_09_청구이의.html" class="next-link">
      <span class="arrow">→</span>
      청구이의의 소<br><small>실체적 권리를 다투는 방법</small>
    </a>
    <a href="민집_12_집행정지.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 정지<br><small>집행을 일시적으로 멈추는 방법</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-12',
    title: '강제집행 정지·취소',
    meta: '부당한 집행을 일시적으로 멈추거나 완전히 취소하는 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>청구이의의 소를 제기하면서 집행도 일시 중단시키고 싶은 경우</li>
      <li>항소·상고를 제기하면서 가집행 판결에 기한 집행을 멈추고 싶은 경우</li>
      <li>채권자와 화해가 성립되어 집행을 취소하고 싶은 경우</li>
      <li>채무를 변제했다는 영수증 등 서류를 가지고 집행정지를 구하려는 경우</li>
      <li>집행정지와 집행취소의 차이를 이해하고 싶은 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 집행정지란</div>
    <p>집행정지는 강제집행 절차를 일시적으로 멈추는 것을 말합니다. 청구이의의 소 제기, 항소·상고 제기, 변제 사실 증명 등 법이 정한 일정 서류를 법원에 제출하면 집행이 임시로 정지됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 집행취소와의 차이</div>
    <p>집행정지는 집행을 임시로 멈추는 것이고, 집행취소는 이미 실시된 집행처분을 제거하는 것입니다. 예를 들어 채무 변제 서류를 제출하면 집행이 취소(압류 해제 등)될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004700" target="_blank" rel="noopener" title="민사집행법 제47조 — 대법원 종합법률정보">민사집행법 제47조</a></p>
  </div>`
      },
      {
        heading: '집행정지·취소 상세 안내',
        content: `<h3>집행정지 서류의 종류</h3>
  <p>다음과 같은 서류가 집행법원에 제출되면 집행이 정지됩니다.</p>
  <table>
    <thead>
      <tr><th>서류 종류</th><th>상황</th><th>효과</th></tr>
    </thead>
    <tbody>
      <tr><td>집행정지 재판서 (법원 결정)</td><td>청구이의의 소 등 제기 후 법원 결정</td><td>집행 정지</td></tr>
      <tr><td>상소장·항고장 접수 증명</td><td>항소·상고 중 가집행 집행의 경우</td><td>집행 정지</td></tr>
      <tr><td>변제 영수증 또는 채무 면제 증서</td><td>판결 확정 후 변제된 경우</td><td>집행 취소</td></tr>
      <tr><td>집행유예 서류 (채권자 동의서)</td><td>채권자가 집행 유예에 동의한 경우</td><td>집행 정지</td></tr>
    </tbody>
  </table>
  <p>위 서류들은 민사집행법 제49조에서 열거하고 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004900" target="_blank" rel="noopener" title="민사집행법 제49조 — 대법원 종합법률정보">민사집행법 제49조</a></p>

  <h3>청구이의의 소와 집행정지</h3>
  <p>청구이의의 소를 제기하는 것만으로는 집행이 자동 정지되지 않습니다. 법원에 집행정지 신청을 별도로 해야 하고, 법원이 집행정지 결정(담보 조건부인 경우 많음)을 내려야 집행이 멈춥니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 제1항 — 대법원 종합법률정보">민사집행법 제46조 제1항</a></p>

  <h3>담보 제공 의무</h3>
  <p>법원이 집행정지 결정을 내릴 때 담보 제공을 조건으로 할 수 있습니다. 채무자는 법원이 정한 담보를 제공해야 집행이 실제로 정지됩니다. 담보는 현금 공탁이나 지급보증보험 등의 방법으로 제공할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 제2항 — 대법원 종합법률정보">민사집행법 제46조 제2항</a></p>

  <h3>집행취소</h3>
  <p>집행취소는 이미 이루어진 집행처분(압류 등)을 제거하는 것입니다. 채무자가 채무를 변제하거나, 채권자가 집행 취소에 동의하거나, 법원이 집행취소 결정을 내리는 경우에 집행처분이 취소됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004700" target="_blank" rel="noopener" title="민사집행법 제47조 — 대법원 종합법률정보">민사집행법 제47조</a></p>

  <div class="case-box">
    <p><strong>사례)</strong> B는 A(채권자)에 대한 500만 원 판결 이후 실제로 A의 계좌로 500만 원을 이체했습니다. 그런데 A가 또 강제집행을 신청했다면, B는 이체 영수증을 근거로 집행법원에 집행취소를 신청할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004900" target="_blank" rel="noopener" title="민사집행법 제49조 제2호 — 대법원 종합법률정보">민사집행법 제49조 제2호</a></p>
  </div>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">집행정지 신청을 하면 바로 집행이 멈추나요?</div>
    <div class="qna-a">집행정지 신청만으로 집행이 자동으로 멈추지는 않습니다. 법원이 집행정지 결정을 내리면 멈춥니다. 법원이 담보 제공을 조건으로 정지를 허가하는 경우, 담보를 제공한 후에야 실질적으로 정지됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">항소를 제기하면 가집행 집행이 자동으로 멈추나요?</div>
    <div class="qna-a">항소를 제기해도 가집행 집행이 자동으로 정지되지는 않습니다. 집행정지를 원한다면 별도로 집행정지 신청을 해야 하며, 항소법원이 담보 조건부로 집행정지 결정을 내립니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조, 민사소송법 제500조 — 대법원 종합법률정보">민사집행법 제46조, 민사소송법 제500조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">변제 영수증이 있으면 집행이 취소되나요?</div>
    <div class="qna-a">판결 확정 후 변제를 증명하는 영수증이나 면제 서류를 집행법원에 제출하면 집행취소를 신청할 수 있습니다. 법원이 이를 심사하여 취소 여부를 결정합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004900" target="_blank" rel="noopener" title="민사집행법 제49조 제2호 — 대법원 종합법률정보">민사집행법 제49조 제2호</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행정지 담보는 어떻게 마련하나요?</div>
    <div class="qna-a">법원이 정한 담보 금액을 현금으로 공탁하거나, 지급보증보험 증권을 제출하는 방법으로 담보를 제공할 수 있습니다. 담보 금액은 집행 채권액의 일정 비율로 정해지는 경우가 많습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001900" target="_blank" rel="noopener" title="민사집행법 제19조, 제20조 — 대법원 종합법률정보">민사집행법 제19조, 제20조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행이 완료된 후에도 집행정지·취소를 신청할 수 있나요?</div>
    <div class="qna-a">집행이 완료된 후에는 집행정지·취소의 실익이 없습니다. 이미 이루어진 집행을 되돌리려면 청구이의의 소나 부당이득반환소송 등의 방법을 통해야 하는데, 이 경우 매우 어렵습니다. 따라서 집행이 진행 중일 때 신속하게 대응하는 것이 중요합니다.</div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">집행정지의 요건</div>
    <p>대법원은 집행정지는 집행권원의 집행력이 잠정적으로 저지되는 것으로, 집행정지를 위해서는 법이 정한 서류(집행정지 재판, 화해 증서 등)의 제출이 있어야 한다고 해석하고 있습니다. 집행정지 사유가 없다면 집행기관은 집행을 계속해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조, 제49조 — 대법원 종합법률정보">민사집행법 제46조, 제49조</a> <span class="case-tag">2014그553</span></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 집행 완료 전 신속한 대응 필수</div>
    <p>집행이 완료된 후에는 집행정지·취소의 실익이 거의 없습니다. 집행이 진행 중이라면 즉시 집행정지 신청을 해야 합니다. 특히 부동산 경매의 경우 매각이 실시되면 되돌리기 매우 어렵습니다.</p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 단순히 소를 제기한다고 집행이 멈추지 않음</div>
    <p>청구이의의 소, 제3자이의의 소 등을 제기해도 집행은 자동으로 정지되지 않습니다. 반드시 별도의 집행정지 신청을 해야 하며, 법원의 결정이 나야 집행이 실질적으로 정지됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">ℹ️ 담보 제공 준비</div>
    <p>집행정지를 위해 담보 제공이 필요한 경우가 많습니다. 담보 금액을 준비해두어야 집행정지가 신속하게 이루어질 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 제2항 — 대법원 종합법률정보">민사집행법 제46조 제2항</a></p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_09_청구이의.html" class="next-link">
      <span class="arrow">→</span>
      청구이의의 소<br><small>집행정지와 함께 제기하는 본안 소송</small>
    </a>
    <a href="민집_10_제3자이의.html" class="next-link">
      <span class="arrow">→</span>
      제3자이의의 소<br><small>제3자가 집행을 막는 방법</small>
    </a>
    <a href="민집_14_집행담보공탁.html" class="next-link">
      <span class="arrow">→</span>
      집행 담보·공탁<br><small>담보 제공 방법 상세 안내</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-13',
    title: '집행비용',
    meta: '강제집행에 드는 비용의 종류와 부담자',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>강제집행 신청 전에 어떤 비용이 드는지 파악하고 싶은 경우</li>
      <li>집행 비용을 채무자에게 청구할 수 있는지 알고 싶은 경우</li>
      <li>집행 비용을 계산하여 채무자에게 청구하는 방법을 알고 싶은 경우</li>
      <li>집행이 실패했을 때 비용 부담이 어떻게 되는지 알고 싶은 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 집행비용이란</div>
    <p>집행비용이란 강제집행 절차에서 지출되는 비용을 말합니다. 인지대, 송달료, 집행관 수수료, 감정비용 등이 포함됩니다. 원칙적으로 집행비용은 채무자가 부담하며, 집행 과정에서 먼저 채권자가 납부한 후 집행 결과에서 회수할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 — 대법원 종합법률정보">민사집행법 제53조</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 핵심 포인트</div>
    <p>강제집행이 성공하면 채무자로부터 집행비용을 회수할 수 있습니다. 집행비용은 집행채권과 함께 회수하거나, 별도로 집행비용 계산서를 통해 청구할 수 있습니다. 집행이 실패하면 이미 납부한 비용을 회수하기 어려울 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조, 제54조 — 대법원 종합법률정보">민사집행법 제53조, 제54조</a></p>
  </div>`
      },
      {
        heading: '집행비용 상세 안내',
        content: `<h3>집행비용의 종류</h3>
  <table>
    <thead>
      <tr><th>비용 종류</th><th>납부 시기</th><th>비고</th></tr>
    </thead>
    <tbody>
      <tr><td>인지대</td><td>신청 시</td><td>신청서에 첩부</td></tr>
      <tr><td>송달료</td><td>신청 시</td><td>회수분 수 × 단가</td></tr>
      <tr><td>집행관 수수료</td><td>집행 실시 시</td><td>동산압류, 현장 집행 등</td></tr>
      <tr><td>감정비용</td><td>경매 절차 중</td><td>부동산 등 감정 필요 시</td></tr>
      <tr><td>공고비용</td><td>매각 절차 중</td><td>경매 공고 등</td></tr>
      <tr><td>등기신청 수수료</td><td>등기 촉탁 시</td><td>압류등기 등</td></tr>
    </tbody>
  </table>
  <p>집행비용은 집행의 종류에 따라 달라질 수 있으며, 법무사 보수(사무처리비용)도 별도로 발생합니다.</p>

  <h3>집행비용의 부담</h3>
  <p>강제집행에 필요한 비용은 채무자가 부담하는 것이 원칙입니다. 채권자가 먼저 납부하고, 집행 결과 배당 시 최우선으로 회수합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 제1항 — 대법원 종합법률정보">민사집행법 제53조 제1항</a></p>
  <p>집행비용이 집행채권을 초과하는 경우에는 집행을 실시하지 않을 수 있습니다. 경제적 실익이 없는 집행을 방지하기 위한 규정입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 제2항 — 대법원 종합법률정보">민사집행법 제53조 제2항</a></p>

  <h3>집행비용 계산서 제출</h3>
  <p>채권자는 집행에 필요한 비용의 계산서를 집행법원에 제출하여 채무자로부터 회수할 수 있습니다. 계산서에는 지출된 비용의 내역과 금액을 명시해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005500" target="_blank" rel="noopener" title="민사집행법 제55조 — 대법원 종합법률정보">민사집행법 제55조</a></p>

  <h3>집행비용 확정 결정</h3>
  <p>집행이 완료된 후 채무자가 집행비용 액수에 다툼을 제기하는 경우, 법원이 집행비용의 액수를 확정하는 결정을 할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005400" target="_blank" rel="noopener" title="민사집행법 제54조 — 대법원 종합법률정보">민사집행법 제54조</a></p>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">집행비용도 채무자에게 청구할 수 있나요?</div>
    <div class="qna-a">네, 집행비용은 원칙적으로 채무자가 부담합니다. 강제집행이 성공하면 배당 시 집행비용을 먼저 회수할 수 있으며, 별도로 집행비용 계산서를 제출하여 청구할 수도 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 — 대법원 종합법률정보">민사집행법 제53조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행이 실패하면 납부한 비용은 어떻게 되나요?</div>
    <div class="qna-a">집행이 실패하면(재산이 없거나 부족하여 회수 불가) 이미 납부한 집행비용을 채무자로부터 회수하기 어렵습니다. 향후 채무자에게 재산이 생기면 다시 집행을 신청하여 회수를 시도할 수 있습니다.</div>
  </div>

  <div class="qna-item">
    <div class="qna-q">법무사 보수도 집행비용에 포함되나요?</div>
    <div class="qna-a">법무사 보수는 법무사보수규정에 따라 별도로 발생하는 비용입니다. 일부는 집행비용으로 청구할 수 있으나, 전액 회수되지 않을 수 있습니다. 구체적인 내용은 법무사와 상담하시기 바랍니다.</div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행비용이 채권액보다 많으면 어떻게 하나요?</div>
    <div class="qna-a">집행비용이 집행채권액보다 큰 경우 법원은 집행을 실시하지 않을 수 있습니다. 경제적 실익이 없는 집행을 방지하기 위한 규정입니다. 이 경우 다른 방법으로 채권 회수를 도모해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 제2항 — 대법원 종합법률정보">민사집행법 제53조 제2항</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행비용 계산서는 어떻게 제출하나요?</div>
    <div class="qna-a">집행법원에 지출한 비용의 내역서(영수증 등 첨부)와 함께 집행비용 계산서를 제출합니다. 법원이 이를 심사하여 채무자가 부담해야 할 집행비용의 액수를 확정합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005500" target="_blank" rel="noopener" title="민사집행법 제55조 — 대법원 종합법률정보">민사집행법 제55조</a></div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">집행비용의 범위</div>
    <p>대법원은 집행비용에는 집행의 신청과 실시에 필요한 비용이 포함되며, 채권자가 지출한 집행 관련 비용(인지대, 송달료, 집행관 수수료 등)이 이에 해당한다고 해석하고 있습니다. 다만 집행 목적과 관련 없는 비용은 제외됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 — 대법원 종합법률정보">민사집행법 제53조</a></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚠️ 비용 대비 실익 검토 필요</div>
    <p>강제집행 전에 채무자의 재산 현황을 파악하고, 집행비용 대비 회수 가능한 금액을 검토해야 합니다. 재산이 없거나 부족한 채무자에게 무리하게 집행을 진행하면 비용만 낭비할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=005300" target="_blank" rel="noopener" title="민사집행법 제53조 제2항 — 대법원 종합법률정보">민사집행법 제53조 제2항</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">ℹ️ 집행비용도 채권으로 관리</div>
    <p>집행비용도 채무자에 대한 채권이므로, 집행 과정에서 발생한 비용을 정확히 기록해두어야 향후 청구가 가능합니다. 영수증, 납부 확인서 등을 잘 보관하세요.</p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_01_강제집행개관.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 개관<br><small>집행 전체 흐름 이해</small>
    </a>
    <a href="민집_14_집행담보공탁.html" class="next-link">
      <span class="arrow">→</span>
      집행 담보·공탁<br><small>집행 전 담보 제공 방법</small>
    </a>
    <a href="민집_05_재산명시.html" class="next-link">
      <span class="arrow">→</span>
      재산명시신청<br><small>채무자 재산 파악 방법</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-14',
    title: '집행 담보·공탁',
    meta: '강제집행 전에 담보를 제공해야 하는 이유와 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist">
    <ul>
      <li>가집행 판결에 기하여 집행을 하려는데 담보 제공을 요구받은 경우</li>
      <li>집행정지를 위해 법원으로부터 담보 제공을 요구받은 경우</li>
      <li>공탁이 무엇이고 어디에 어떻게 하는지 알고 싶은 경우</li>
      <li>담보를 제공한 후 나중에 어떻게 돌려받는지 알고 싶은 경우</li>
    </ul>
  </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
    <div class="label">▶ 집행 담보란</div>
    <p>집행 담보는 강제집행을 위해 또는 집행정지·취소를 위해 법원이 요구하는 보증입니다. 가집행 판결에 기한 집행 또는 집행정지 시 법원이 담보 제공을 요건으로 할 수 있습니다. 담보는 채무자가 잘못된 집행으로 손해를 입었을 때 보상받기 위한 것입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001900" target="_blank" rel="noopener" title="민사집행법 제19조 — 대법원 종합법률정보">민사집행법 제19조</a></p>
  </div>
  <div class="summary-box">
    <div class="label">▶ 공탁이란</div>
    <p>공탁은 금전이나 유가증권 등을 법원의 공탁소에 맡기는 것입니다. 집행 관련 공탁에는 집행 담보를 위한 공탁, 집행 결과로 받은 금전의 공탁(집행공탁) 등 여러 종류가 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=97969&joNo=000200" target="_blank" rel="noopener" title="공탁법 제2조 — 대법원 종합법률정보">공탁법 제2조</a></p>
  </div>`
      },
      {
        heading: '담보 제공 상세 안내',
        content: `<h3>담보가 필요한 경우</h3>
  <ul style="margin:12px 0 12px 20px;line-height:2">
    <li>가집행 선고 있는 판결에 기하여 집행 시 법원이 담보 제공 요구 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001900" target="_blank" rel="noopener" title="민사집행법 제19조 제1항 — 대법원 종합법률정보">민사집행법 제19조 제1항</a></li>
    <li>집행정지를 신청할 때 법원이 담보 제공 요건 부과 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 제2항 — 대법원 종합법률정보">민사집행법 제46조 제2항</a></li>
    <li>가처분 집행 시 담보 요구 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030100" target="_blank" rel="noopener" title="민사집행법 제301조 — 대법원 종합법률정보">민사집행법 제301조</a></li>
  </ul>

  <h3>담보 제공 방법</h3>
  <p>담보는 다음과 같은 방법으로 제공할 수 있습니다.</p>
  <table>
    <thead>
      <tr><th>담보 종류</th><th>방법</th><th>비고</th></tr>
    </thead>
    <tbody>
      <tr><td>현금 공탁</td><td>공탁소에 현금 공탁</td><td>가장 일반적인 방법</td></tr>
      <tr><td>유가증권 공탁</td><td>국채, 지방채 등을 공탁</td><td>시가로 평가</td></tr>
      <tr><td>지급보증보험</td><td>보증보험회사의 보험증권 제출</td><td>현금 대체 가능</td></tr>
      <tr><td>은행 지급보증서</td><td>금융기관의 지급보증서 제출</td><td>법원 허가 필요</td></tr>
    </tbody>
  </table>
  <p>담보 제공 방법은 법원의 허가를 받아야 하며, 법원이 인정하지 않는 방법으로는 담보를 제공할 수 없습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002000" target="_blank" rel="noopener" title="민사집행법 제20조 — 대법원 종합법률정보">민사집행법 제20조</a></p>

  <h3>담보 공탁 절차</h3>
  <div class="step-box"><p><span class="step-num">1</span> 법원이 담보 제공을 명하는 결정 → 담보 금액 확인</p></div>
  <div class="step-box"><p><span class="step-num">2</span> 공탁소(지방법원)에서 공탁서 작성 및 현금 납입 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=97969&joNo=000500" target="_blank" rel="noopener" title="공탁법 제5조 — 대법원 종합법률정보">공탁법 제5조</a></p></div>
  <div class="step-box"><p><span class="step-num">3</span> 공탁 영수증(공탁서 부본)을 법원에 제출</p></div>
  <div class="step-box"><p><span class="step-num">4</span> 법원의 집행정지 또는 집행 허가 결정</p></div>

  <h3>담보 대체와 취소</h3>
  <p>기존에 제공한 담보를 다른 형태의 담보로 교체(대체)하거나, 담보 사유가 소멸하면 담보 취소를 신청하여 공탁금 등을 회수할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002100" target="_blank" rel="noopener" title="민사집행법 제21조, 제22조 — 대법원 종합법률정보">민사집행법 제21조, 제22조</a></p>

  <h3>집행공탁</h3>
  <p>집행공탁은 채무자의 채권이 압류된 경우 제3채무자가 피압류채권에 해당하는 금액을 공탁소에 납부하는 것입니다. 여러 채권자가 있어 공탁으로 압류를 면탈할 수 있는 경우에도 활용됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=024800" target="_blank" rel="noopener" title="민사집행법 제248조 — 대법원 종합법률정보">민사집행법 제248조</a></p>`
      },
      {
        heading: '자주하는 질문 (Q&amp;A)',
        content: `<div class="qna-item">
    <div class="qna-q">담보는 왜 제공해야 하나요?</div>
    <div class="qna-a">담보는 집행이 나중에 잘못됐음이 밝혀졌을 때 손해를 입은 상대방이 보상을 받을 수 있도록 하기 위한 것입니다. 예를 들어 가집행 판결에 기해 집행했는데 상소심에서 판결이 취소되면 채무자는 이미 집행된 재산을 돌려받아야 하는데, 담보가 그 재원이 됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001900" target="_blank" rel="noopener" title="민사집행법 제19조 — 대법원 종합법률정보">민사집행법 제19조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">담보 금액은 어떻게 정해지나요?</div>
    <div class="qna-a">담보 금액은 법원이 사안에 따라 결정합니다. 일반적으로 집행채권액이나 집행 대상 재산의 가액을 기준으로 정해지며, 구체적인 금액은 법원의 결정문에 나와 있습니다. 금액이 과다하다고 생각되면 이의를 제기할 수 있습니다.</div>
  </div>

  <div class="qna-item">
    <div class="qna-q">공탁한 돈은 언제 돌려받을 수 있나요?</div>
    <div class="qna-a">담보 사유가 소멸하면(예: 소송에서 이겨 담보 필요 없어짐, 집행이 완료됨) 담보 취소 신청을 하여 공탁금을 회수할 수 있습니다. 상대방의 동의나 법원 결정이 필요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002200" target="_blank" rel="noopener" title="민사집행법 제22조 — 대법원 종합법률정보">민사집행법 제22조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">현금이 없으면 담보를 제공할 수 없나요?</div>
    <div class="qna-a">현금 외에도 지급보증보험 증권이나 은행 지급보증서를 담보로 제공할 수 있습니다. 보증보험회사에 보증보험료를 납부하면 보험증권을 발급받아 법원에 제출할 수 있어, 현금 부담을 줄일 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002000" target="_blank" rel="noopener" title="민사집행법 제20조 — 대법원 종합법률정보">민사집행법 제20조</a></div>
  </div>

  <div class="qna-item">
    <div class="qna-q">집행공탁과 일반 담보공탁의 차이는 무엇인가요?</div>
    <div class="qna-a">일반 담보공탁은 채권자 또는 채무자가 법원의 담보 요건을 충족하기 위해 하는 공탁입니다. 집행공탁은 제3채무자가 압류된 채무를 이행하는 방법으로 공탁소에 납부하는 것입니다. 두 공탁 모두 공탁법에 따라 관할 공탁소에서 처리합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=024800" target="_blank" rel="noopener" title="민사집행법 제248조, 공탁법 제2조 — 대법원 종합법률정보">민사집행법 제248조, 공탁법 제2조</a></div>
  </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
    <div class="ruling-header">담보 제공 요건</div>
    <p>대법원은 집행정지를 위한 담보 제공은 잘못된 집행으로 인해 채권자가 입을 손해를 담보하기 위한 것이며, 법원이 제시한 담보 방법 및 금액을 충족해야 집행정지의 효력이 발생한다고 해석하고 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 제2항 — 대법원 종합법률정보">민사집행법 제46조 제2항</a></p>
  </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
    <div class="warn-title">⚡ 담보 제공 기한 준수</div>
    <p>법원이 담보 제공을 명한 경우 기한 내에 담보를 제공해야 합니다. 기한을 넘기면 집행정지 결정이 취소되거나 집행이 재개될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004600" target="_blank" rel="noopener" title="민사집행법 제46조 — 대법원 종합법률정보">민사집행법 제46조</a></p>
  </div>
  <div class="warn-box">
    <div class="warn-title">⚠️ 담보 미회수 주의</div>
    <p>소송이 끝나거나 집행이 완료된 후에 담보 취소 신청을 하지 않으면 공탁금이 장기간 방치될 수 있습니다. 사건 종료 후 반드시 담보 취소 절차를 진행하세요. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002200" target="_blank" rel="noopener" title="민사집행법 제22조 — 대법원 종합법률정보">민사집행법 제22조</a></p>
  </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
    <a href="민집_12_집행정지.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 정지<br><small>담보와 함께 집행을 멈추는 방법</small>
    </a>
    <a href="민집_13_집행비용.html" class="next-link">
      <span class="arrow">→</span>
      집행비용<br><small>강제집행 비용의 종류와 부담</small>
    </a>
    <a href="민집_01_강제집행개관.html" class="next-link">
      <span class="arrow">→</span>
      강제집행 개관<br><small>집행 전체 흐름 이해</small>
    </a>
  </div>`
      },
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-15',
    title: '재산을 숨기는 채무자',
    meta: '재산명시 위반과 법적 대응 방법',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist-box" style="margin-top: 40px;">
        <div class="box-title">📋 이런 분께 필요합니다</div>
        <ul>
            <li>채무자가 법원의 재산명시 기일에 나타나지 않았습니다.</li>
            <li>채무자가 재산목록을 제출했는데 내용이 허위인 것 같습니다.</li>
            <li>채무자가 빚을 피하기 위해 재산을 다른 사람 명의로 돌려놓았습니다.</li>
            <li>채무자를 채무불이행자명부에 등재하거나 추가 제재를 가하고 싶습니다.</li>
            <li>채무자의 재산 은닉 행위에 대해 형사 고소가 가능한지 알고 싶습니다.</li>
            <li>이미 받은 판결이 있는데 채무자가 재산이 없다며 버티고 있습니다.</li>
        </ul>
    </div>`
      },
      {
        heading: '핵심 정리',
        content: `<div class="summary-box">
            채무자가 재산명시 절차에 협조하지 않으면 법원은 <strong>감치(유치장 수용)</strong> 명령을 내릴 수 있습니다. 또한 재산목록을 허위로 작성하거나 선서를 거부하면 <strong>형사처벌(1년 이하 징역·200만원 이하 벌금)</strong>을 받을 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제1항·제4항 — 대법원 종합법률정보">민사집행법 제68조 제1항·제4항</a>
        </div>

        <div class="summary-box">
            채무자가 판결 확정 전후에 재산을 허위로 양도하거나 은닉하면 <strong>강제집행면탈죄</strong>로 형사 고소가 가능합니다. 이는 5년 이하 징역 또는 1,500만원 이하 벌금에 해당하는 중범죄입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=188383&joNo=032700" target="_blank" rel="noopener" title="형법 제327조 — 대법원 종합법률정보">형법 제327조</a>
        </div>

        <div class="summary-box">
            채권자는 채무자가 재산명시 명령에 따르지 않는 경우 법원에 <strong>다시 재산명시 명령(재명시 신청)</strong>을 요청할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006900" target="_blank" rel="noopener" title="민사집행법 제69조 — 대법원 종합법률정보">민사집행법 제69조</a>
        </div>
    </div>

    <!-- ===== 3. 상세 설명 ===== -->`
      },
      {
        heading: '상세 설명',
        content: `<!-- 카드 1: 재산명시 위반의 유형 -->
        <div class="detail-card">
            <div class="card-title">① 재산명시 위반의 세 가지 유형</div>
            <p>채무자가 재산명시 절차에서 의무를 어기는 방식은 크게 세 가지입니다. 첫째, <strong>기일 불출석</strong>입니다. 법원이 지정한 재산명시 기일에 정당한 사유 없이 나타나지 않는 경우입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제1항 — 대법원 종합법률정보">민사집행법 제68조 제1항</a></p>
            <p>둘째, <strong>거짓 재산목록 제출</strong>입니다. 재산목록에 존재하는 재산을 빠뜨리거나 이미 처분한 재산을 그대로 올리는 등 허위 내용을 기재하는 경우입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제4항 — 대법원 종합법률정보">민사집행법 제68조 제4항</a></p>
            <p>셋째, <strong>선서 거부</strong>입니다. 재산목록의 정확성을 맹세하는 선서 자체를 거부하는 경우입니다. 선서 거부는 거짓 목록 제출과 동일하게 형사처벌의 대상이 됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제4항 — 대법원 종합법률정보">민사집행법 제68조 제4항</a></p>
        </div>

        <!-- 카드 2: 감치 제도 -->
        <div class="detail-card">
            <div class="card-title">② 감치 — 유치장에 가두는 제재 수단</div>
            <p>채무자가 재산명시 기일에 정당한 사유 없이 출석하지 않으면, 법원은 채권자의 신청에 의해 또는 직권으로 채무자를 <strong>20일 이내의 감치</strong>에 처할 수 있습니다. 감치란 채무자를 감치시설(유치장)에 유치하는 것으로, 형사처벌과는 별개의 법원 제재 수단입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제1항 — 대법원 종합법률정보">민사집행법 제68조 제1항</a></p>
            <p>감치 결정에 대해 채무자는 즉시항고를 할 수 있습니다. 그러나 감치 결정이 확정되면 집행관이 채무자를 현행범인과 같이 체포하여 유치시설에 인도하게 됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제2항 — 대법원 종합법률정보">민사집행법 제68조 제2항</a></p>
            <p>감치 기간 중이라도 채무자가 재산명시 의무를 이행(출석·목록 제출·선서)하면 법원은 감치를 즉시 종료할 수 있습니다. 이는 감치가 처벌이 아니라 의무 이행을 강제하기 위한 수단이기 때문입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제3항 — 대법원 종합법률정보">민사집행법 제68조 제3항</a></p>
        </div>

        <!-- 카드 3: 형사처벌 -->
        <div class="detail-card">
            <div class="card-title">③ 형사처벌 — 허위 목록 제출·선서 거부</div>
            <p>채무자가 거짓 재산목록을 제출하거나 선서를 거부한 경우에는 감치와는 별도로 <strong>형사처벌</strong>을 받을 수 있습니다. 법정형은 <strong>1년 이하의 징역 또는 200만원 이하의 벌금</strong>입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제4항 — 대법원 종합법률정보">민사집행법 제68조 제4항</a></p>
            <p>이 형사처벌 조항은 친고죄가 아닙니다. 채권자가 고소하지 않더라도 법원이 직권으로 수사기관에 통보할 수 있습니다. 다만 실무에서는 채권자가 고소장을 접수하는 경우가 대부분입니다.</p>
            <p>형사처벌 고소는 검찰청 또는 경찰서에 고소장을 제출하는 방식으로 진행됩니다. 재산명시 기일의 조서, 법원 명령서 등이 주요 증거 자료가 됩니다.</p>
        </div>

        <!-- 카드 4: 재명시 신청 -->
        <div class="detail-card">
            <div class="card-title">④ 재명시 신청 — 다시 재산목록을 요구할 수 있습니다</div>
            <p>채권자는 채무자가 재산명시 명령에 따른 후에도 채무를 변제하지 않는 경우, 채무자가 이전에 명시한 재산으로 집행이 불능이 된 날부터 <strong class="deadline-warning">⚡ 6개월이 지나면</strong> 다시 재산명시를 신청할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006900" target="_blank" rel="noopener" title="민사집행법 제69조 제1항 — 대법원 종합법률정보">민사집행법 제69조 제1항</a></p>
            <p>재명시 신청은 최초 재산명시 신청과 동일한 절차로 진행됩니다. 법원은 채무자에게 다시 재산목록을 제출하고 선서할 것을 명령합니다. 이 역시 채권자의 신청이 있어야 시작됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006900" target="_blank" rel="noopener" title="민사집행법 제69조 제2항 — 대법원 종합법률정보">민사집행법 제69조 제2항</a></p>
            <p>재명시를 통해 새로운 재산이 발견되면 채권자는 즉시 압류 등 강제집행 절차에 착수할 수 있습니다. 채무자의 재산 상황 변화를 지속적으로 파악하는 데 효과적인 수단입니다.</p>
        </div>

        <!-- 카드 5: 강제집행면탈죄 -->
        <div class="detail-card">
            <div class="card-title">⑤ 강제집행면탈죄 — 재산을 숨기면 형사 범죄입니다</div>
            <p>채무자가 강제집행을 피할 목적으로 재산을 <strong>은닉·훼손·허위 양도·허위 채무 부담</strong>하면 강제집행면탈죄가 성립합니다. 법정형은 <strong>5년 이하의 징역 또는 1,500만원 이하의 벌금</strong>으로, 매우 중한 범죄에 해당합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=188383&joNo=032700" target="_blank" rel="noopener" title="형법 제327조 — 대법원 종합법률정보">형법 제327조</a></p>
            <p>강제집행면탈죄의 핵심 요건은 <strong>'강제집행을 피할 목적'</strong>이 있어야 한다는 것입니다. 판결이 확정된 후는 물론, 소송 계속 중에 재산을 처분한 경우에도 이 목적이 인정되면 범죄가 성립합니다.</p>
            <p>대표적인 사례는 다음과 같습니다. 부동산을 가족이나 지인에게 허위로 매도하거나 증여하는 경우, 존재하지 않는 채무를 꾸며내어 재산을 빼돌리는 경우, 현금이나 유가증권을 숨겨두는 경우, 사업체를 폐업시키고 재산만 새 법인으로 이전하는 경우 등이 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=188383&joNo=032700" target="_blank" rel="noopener" title="형법 제327조 — 대법원 종합법률정보">형법 제327조</a></p>
            <p>강제집행면탈죄로 고소하기 위해서는 채무자의 재산 처분 행위가 강제집행을 면하려는 목적이었음을 입증하는 자료(부동산 등기 이력, 계좌 거래 내역, 증인 진술 등)를 준비해야 합니다.</p>
        </div>

        <!-- 카드 6: 채무불이행자명부 등재 연계 -->
        <div class="detail-card">
            <div class="card-title">⑥ 채무불이행자명부 등재와의 연계</div>
            <p>채무자가 재산명시 기일에 불출석하거나, 거짓 재산목록을 제출하거나, 선서를 거부한 경우 채권자는 <strong>채무불이행자명부 등재</strong>도 함께 신청할 수 있습니다. 이 명부에 등재되면 법원 게시판 공고 및 금융기관·행정기관 통보가 이루어집니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 제1항 제2호 — 대법원 종합법률정보">민사집행법 제70조 제1항 제2호</a></p>
            <p>채무불이행자명부에 등재된 채무자는 금융 거래에 심각한 제한을 받게 됩니다. 대출이 어려워지고 신용카드 사용도 제한될 수 있어, 실질적으로 채무 변제를 압박하는 효과가 있습니다.</p>
            <p>명부 등재는 재산명시 위반 사실이 확인된 날부터 <strong class="deadline-warning">⚡ 별도 제척기간 없이</strong> 신청이 가능합니다. 다만 채무자가 채무를 전부 변제하면 말소 신청을 할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007300" target="_blank" rel="noopener" title="민사집행법 제73조 — 대법원 종합법률정보">민사집행법 제73조</a></p>
        </div>

    </div>

    <!-- ===== 4. Q&A ===== -->`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qa-item">
            <div class="qa-q">채무자가 재산명시 기일에 아무 연락도 없이 안 나타났습니다. 어떻게 해야 하나요?</div>
            <div class="qa-a">채무자가 정당한 사유 없이 불출석하면 법원에 <strong>감치 신청</strong>을 할 수 있습니다. 감치 결정이 내려지면 채무자는 20일 이내의 범위에서 유치시설에 수용됩니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제1항 — 대법원 종합법률정보">민사집행법 제68조 제1항</a> 동시에 <strong>채무불이행자명부 등재</strong>도 함께 신청하는 것이 효과적입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007000" target="_blank" rel="noopener" title="민사집행법 제70조 제1항 제2호 — 대법원 종합법률정보">민사집행법 제70조 제1항 제2호</a> 두 가지 신청을 동시에 하면 채무자에게 더 강한 압박이 됩니다.</div>
        </div>

        <div class="qa-item">
            <div class="qa-q">채무자가 제출한 재산목록이 허위인 것 같은데, 이를 증명하려면 어떻게 해야 하나요?</div>
            <div class="qa-a">채무자가 제출한 재산목록과 실제 재산 현황을 비교하는 것이 핵심입니다. 법원의 <strong>재산조회 절차</strong>를 통해 금융기관, 국세청, 지방자치단체 등에 채무자의 재산 보유 현황을 조회할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 — 대법원 종합법률정보">민사집행법 제74조</a> 조회 결과로 재산목록에 없는 재산이 발견되면, 이를 근거로 <strong>허위 재산목록 제출에 대한 형사 고소</strong>를 진행하거나 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제4항 — 대법원 종합법률정보">민사집행법 제68조 제4항</a> 해당 재산에 대한 압류를 바로 신청할 수 있습니다.</div>
        </div>

        <div class="qa-item">
            <div class="qa-q">채무자가 판결 나기 전에 이미 재산을 가족 명의로 돌려놓았습니다. 이것도 형사 고소가 되나요?</div>
            <div class="qa-a">가능합니다. 강제집행면탈죄는 판결 확정 후뿐만 아니라 <strong>소송 계속 중</strong>에 재산을 처분한 경우에도 성립할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=188383&joNo=032700" target="_blank" rel="noopener" title="형법 제327조 — 대법원 종합법률정보">형법 제327조</a> 판결을 예상하고 강제집행을 피하려는 목적으로 재산을 처분했다면 범죄가 성립합니다. 다만 이 '목적'을 입증하는 것이 실무의 관건이므로, 재산 처분 시기와 소송 진행 경과, 처분 가격의 적정성 등을 종합적으로 검토해 고소장을 준비하는 것이 중요합니다.</div>
        </div>

        <div class="qa-item">
            <div class="qa-q">감치 결정이 났는데도 채무자가 도주 중입니다. 어떻게 되나요?</div>
            <div class="qa-a">감치 결정이 확정되면 집행관이 채무자를 체포할 권한을 갖습니다. 채무자가 도주하더라도 감치 결정의 집행은 가능하며, 필요한 경우 경찰의 협조를 받아 신병을 확보할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제2항 — 대법원 종합법률정보">민사집행법 제68조 제2항</a> 채무자의 소재를 파악하기 어렵다면 재산조회를 통해 거소 정보를 확인하거나, 별도로 법원에 재산명시 재신청과 채무불이행자명부 등재를 진행하면서 채무 변제 압박을 지속할 수 있습니다.</div>
        </div>

        <div class="qa-item">
            <div class="qa-q">재산명시 신청을 한 번 했는데 채무자 재산이 없다고 합니다. 얼마 후에 다시 신청할 수 있나요?</div>
            <div class="qa-a">이전 재산명시 절차에서 채무자의 재산으로 집행이 불능이 된 날로부터 <strong class="deadline-warning">⚡ 6개월이 경과</strong>하면 다시 재산명시를 신청(재명시)할 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006900" target="_blank" rel="noopener" title="민사집행법 제69조 제1항 — 대법원 종합법률정보">민사집행법 제69조 제1항</a> 채무자의 재산 상황은 시간이 지남에 따라 변할 수 있으므로, 정기적으로 재명시 신청과 재산조회를 병행하여 추심 기회를 계속 모색하는 것이 좋습니다.</div>
        </div>

        <div class="qa-item">
            <div class="qa-q">강제집행면탈죄로 고소하면 제가 돈을 돌려받을 수 있나요?</div>
            <div class="qa-a">강제집행면탈죄는 형사 사건이므로, 고소 자체가 채무를 직접 회수하는 수단은 아닙니다. 그러나 형사 고소를 통해 채무자에게 심리적·법적 압박을 가할 수 있습니다. 또한 수사 과정에서 은닉 재산이 확인되면 이를 근거로 <strong>민사 사해행위취소소송</strong>을 제기하여 가족 명의로 이전된 재산을 채무자 명의로 되돌린 뒤 강제집행을 할 수 있습니다. 형사 고소와 민사 절차를 병행하는 것이 실질적인 회수 가능성을 높이는 방법입니다.</div>
        </div>

        <div class="qa-item">
            <div class="qa-q">채무자가 폐업을 하고 재산이 없다고 합니다. 정말 방법이 없는 건가요?</div>
            <div class="qa-a">포기하기 전에 몇 가지를 확인할 필요가 있습니다. 폐업 직전에 재산을 처분한 경우 강제집행면탈죄 고소와 사해행위취소소송 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=040600" target="_blank" rel="noopener" title="민법 제406조 — 대법원 종합법률정보">민법 제406조</a>을 검토할 수 있습니다. 또한 사업체가 법인이라면 법인과 개인을 분리한 채 재산을 빼돌린 경우 <strong>법인격 부인론</strong>을 적용하여 대표자 개인 재산에도 집행할 수 있는 가능성이 있습니다. 법원의 재산조회를 통해 금융계좌, 보험, 주식 등을 전방위로 조회해 보는 것이 먼저입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400" target="_blank" rel="noopener" title="민사집행법 제74조 — 대법원 종합법률정보">민사집행법 제74조</a></div>
        </div>

    </div>

    <!-- ===== 5. 판례 ===== -->`
      },
      {
        heading: '관련 판례',
        content: `<div class="case-box">
            <div class="case-num">강제집행면탈죄의 성립 시기 — 판결 확정 전도 포함</div>
            <p>강제집행면탈죄는 강제집행을 당할 구체적 위험이 있는 상태에서 그 집행을 면탈하려는 목적으로 재산을 은닉, 손괴, 허위양도하거나 허위의 채무를 부담하는 행위를 처벌한다. 판결 확정 후뿐만 아니라 채무자가 채무의 존재를 인식하면서 강제집행을 피할 의도로 소송 계속 중에 재산을 처분한 경우에도 이 죄가 성립할 수 있다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=188383&joNo=032700" target="_blank" rel="noopener" title="형법 제327조 — 대법원 종합법률정보">형법 제327조</a> <span class="case-tag"><a class="case-tag" href="https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=2009%EB%8F%84875" target="_blank" rel="noopener" title="2009도875 — 대법원 종합법률정보">2009도875</a></span></p>
        </div>

        <div class="case-box">
            <div class="case-num">감치의 법적 성격 — 의무 이행 강제 수단</div>
            <p>재산명시 의무 위반에 대한 감치는 형사처벌과 달리 채무자의 의무 이행을 강제하기 위한 수단이다. 따라서 감치 기간 중이라도 채무자가 재산명시 의무를 이행하면 법원은 감치를 즉시 종료할 수 있으며, 이미 처벌받은 사안에 대한 재처벌이 아니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제3항 — 대법원 종합법률정보">민사집행법 제68조 제3항</a></p>
        </div>

        <div class="case-box">
            <div class="case-num">허위 재산목록 제출의 해석</div>
            <p>재산명시 절차에서 채무자가 실제로 보유하는 재산을 재산목록에 기재하지 않는 경우, 그것이 의도적 누락임이 인정되면 거짓 재산목록 제출로서 형사처벌의 대상이 된다. 재산을 단순히 기억하지 못했다는 변명만으로는 처벌을 면하기 어렵고, 목록 제출 당시의 실제 재산 보유 현황이 중요한 판단 기준이 된다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제4항 — 대법원 종합법률정보">민사집행법 제68조 제4항</a> <span class="case-tag"><a class="case-tag" href="https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=2007%EB%8F%848153" target="_blank" rel="noopener" title="2007도8153 — 대법원 종합법률정보">2007도8153</a></span></p>
        </div>

        <div class="example-box">
            <div class="ex-title">📌 실무 사례: 형사 고소와 민사 병행의 성과</div>
            <p>채무자 A가 판결 확정 직전 부동산 전부를 배우자 명의로 이전했습니다. 채권자는 강제집행면탈죄로 형사 고소를 하는 동시에 사해행위취소소송을 제기했습니다. 수사 과정에서 이전 거래가 정상적인 매매가 아님이 밝혀졌고, 사해행위취소소송에서도 승소하여 부동산이 채무자 명의로 복귀된 후 채권자가 강제경매를 통해 채권을 회수하였습니다.</p>
        </div>

    </div>

    <!-- ===== 6. 주의사항 ===== -->`
      },
      {
        heading: '주의사항',
        content: `<div class="warning-box">
            <div class="w-title">⚠️ 감치와 형사처벌은 다릅니다</div>
            <p>감치는 의무 이행을 강제하기 위한 법원의 제재이고, 형사처벌은 허위 목록 제출·선서 거부에 대한 별도의 처벌입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006800" target="_blank" rel="noopener" title="민사집행법 제68조 제1항·제4항 — 대법원 종합법률정보">민사집행법 제68조 제1항·제4항</a> 둘은 중복 적용이 가능하므로, 채무자가 감치까지 받고도 의무를 이행하지 않으면 형사 고소까지 이중으로 진행할 수 있습니다.</p>
        </div>

        <div class="warning-box">
            <div class="w-title">⚠️ 재명시 신청의 6개월 요건 확인</div>
            <p>재명시 신청은 집행 불능이 확인된 날로부터 <strong>6개월 이후</strong>에만 가능합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006900" target="_blank" rel="noopener" title="민사집행법 제69조 제1항 — 대법원 종합법률정보">민사집행법 제69조 제1항</a> 6개월이 지나지 않았다면 법원이 신청을 받아들이지 않습니다. 반대로, 6개월이 지났다면 지체 없이 신청하는 것이 채무 회수 기회를 놓치지 않는 방법입니다.</p>
        </div>

        <div class="caution-item">
            <div class="c-title">📌 강제집행면탈죄 고소, 혼자 하기 어렵습니다</div>
            <p>채무자의 재산 은닉이 강제집행면탈죄에 해당하는지는 전문적인 법률 판단이 필요합니다. 고소장 작성, 증거 수집, 사해행위취소소송 동시 진행 등 복잡한 절차가 수반되므로 법률 전문가와 상담하는 것이 중요합니다.</p>
        </div>

        <div class="caution-item">
            <div class="c-title">📌 채권의 소멸시효를 놓치지 마세요</div>
            <p>채권을 회수하지 못하는 동안에도 소멸시효는 진행됩니다. 판결로 확정된 채권의 소멸시효는 10년입니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=016500" target="_blank" rel="noopener" title="민법 제165조 제1항 — 대법원 종합법률정보">민법 제165조 제1항</a> 시효가 완성되기 전에 재산명시, 재산조회 신청 등 시효 중단 조치를 꾸준히 해야 합니다.</p>
        </div>

        <div class="caution-item">
            <div class="c-title">📌 사해행위취소는 별도 소송이 필요합니다</div>
            <p>채무자가 재산을 가족 등에게 이전한 경우, 그 행위를 취소하려면 별도의 <strong>사해행위취소소송</strong>을 제기해야 합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=040600" target="_blank" rel="noopener" title="민법 제406조 — 대법원 종합법률정보">민법 제406조</a> 이 소송도 사해행위를 안 날로부터 <strong class="deadline-warning">⚡ 1년, 행위가 있은 날로부터 5년</strong>의 제척기간이 있으므로 빠른 대응이 필요합니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=040600" target="_blank" rel="noopener" title="민법 제406조 제2항 — 대법원 종합법률정보">민법 제406조 제2항</a></p>
        </div>

    </div>

    <!-- ===== 7. 다음에 확인할 사항 ===== -->`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
            <a href="민집_05_재산명시.html" class="next-link">
                <span class="arrow">→</span>재산명시 신청 절차와 방법
            </a>
            <a href="민집_06_재산조회.html" class="next-link">
                <span class="arrow">→</span>법원을 통한 재산조회 신청
            </a>
            <a href="민집_07_채무불이행자명부.html" class="next-link">
                <span class="arrow">→</span>채무불이행자명부 등재 신청
            </a>
        </div>
    </div>

    <!-- ===== CTA ===== -->`
      },
    ],
    laws: [],
    forms: []
  },
    {
    id: 'ef-16',
    title: '경매개시결정이란 무엇인가',
    meta: '경매개시결정의 의미, 압류 효력, 경매 절차 전체 흐름을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>부동산(집, 토지, 건물)에 경매개시결정이 내려졌다는 통보를 받았다</li>
<li>등기부에 '강제경매개시결정' 또는 '임의경매개시결정'이 기재됐다</li>
<li>경매가 시작되면 앞으로 어떻게 진행되는지 알고 싶다</li>
<li>집이 경매에 넘어가면 언제까지 살 수 있는지 궁금하다</li>
<li>경매를 막거나 늦출 수 있는 방법이 있는지 확인하고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>경매개시결정은 법원이 채권자의 신청을 받아 채무자 소유 부동산을 압류하는 첫 단계입니다.</li>
<li>결정이 내려지면 즉시 등기부에 기재되고, 이 순간부터 채무자는 부동산을 자유롭게 처분할 수 없게 됩니다.</li>
<li>경매는 압류 → 매각 준비 → 입찰 → 낙찰 → 대금납부 → 배당의 순서로 진행되며, 통상 6개월~1년 이상 소요됩니다.</li>
</ul>`
      },
      {
        heading: '경매개시결정이란',
        content: `<p>경매개시결정은 채권자의 경매신청에 따라 법원이 채무자 소유 부동산을 압류하는 결정입니다. 강제경매의 경우 민사집행법 제83조, 임의경매(담보권 실행)의 경우 민사집행법 제268조가 적용됩니다.</p>
<p>법원은 경매신청서를 접수한 날로부터 민집 제80조·제268조에 따라 원칙적으로 <strong>당일</strong> 경매개시결정을 하고, 3일 이내에 해당 부동산 등기부에 경매개시결정 사유를 기입합니다.</p>`
      },
      {
        heading: '압류의 효력',
        content: `<p>경매개시결정이 등기부에 기재되면 그 시점부터 민집 제92조에 따라 압류의 효력이 발생합니다. 압류 이후 채무자가 부동산을 제3자에게 매각하거나 담보로 제공하더라도, 낙찰자는 그 처분 행위에 구속되지 않습니다.</p>`
      },
      {
        heading: '경매 절차 전체 흐름',
        content: `<ol>
<li><strong>경매개시결정 및 압류 등기</strong> — 법원이 결정하고 등기소에 촉탁. 채무자에게 결정문 송달.</li>
<li><strong>배당요구 종기 결정·공고</strong> — 배당받길 원하는 채권자들이 종기 내에 배당요구 신청. 통상 등기 완료일로부터 2~3개월 후.</li>
<li><strong>현황조사·감정평가</strong> — 집행관이 현장 조사, 감정인이 시가 평가 → 최저매각가격 결정.</li>
<li><strong>매각기일 지정·공고</strong> — 입찰일과 매각결정기일 공고.</li>
<li><strong>입찰 실시 및 낙찰자 결정</strong> — 최고가 입찰자가 낙찰 예정자. 매각결정기일에 허가 여부 결정.</li>
<li><strong>낙찰자 대금납부</strong> — 매각허가결정 확정 후 1개월 이내 납부.</li>
<li><strong>배당 및 소유권 이전</strong> — 대금납부 완료 후 채권자들에 대한 배당 실시, 낙찰자 소유권이전등기 촉탁.</li>
</ol>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 경매개시결정을 받으면 즉시 집에서 나가야 하나요?</strong></p>
<p>아닙니다. 경매개시결정은 압류의 의미이지, 즉시 퇴거를 강제하는 것이 아닙니다. 채무자와 그 가족은 낙찰자가 대금을 완납하고 법원에 인도명령을 신청하기 전까지는 계속 거주할 수 있습니다.</p>
<p><strong>Q. 경매 기간 동안 부동산을 팔 수 있나요?</strong></p>
<p>법적으로는 처분할 수 있으나, 압류 이후 이루어진 처분 행위는 낙찰자에게 대항할 수 없습니다(민집 제92조). 현실적으로 매수자를 찾기 어렵습니다.</p>
<p><strong>Q. 경매 도중에 빚을 갚으면 경매가 취소되나요?</strong></p>
<p>채무자가 경매 신청 채권자의 채권 전액을 변제하면 채권자는 경매를 취하할 수 있습니다. 일부 변제만으로는 경매가 중단되지 않습니다.</p>
<p><strong>Q. 경매개시결정 후 등기부에 어떻게 표시되나요?</strong></p>
<p>등기부 갑구에 '강제경매개시결정' 또는 '임의경매개시결정'이 기재됩니다. 경매가 완료되거나 취하·취소되면 해당 등기는 말소됩니다.</p>
<p><strong>Q. 경매가 시작된 후 이사를 준비해야 하는 시점은 언제인가요?</strong></p>
<p>낙찰자가 대금을 납부한 날 소유권이 이전됩니다. 인도명령 결정 후에도 자진 퇴거하지 않으면 강제집행이 이루어집니다. 통상 대금납부 후 2~4개월 내에 이사를 준비하시는 것이 좋습니다.</p>`
      },
      {
        heading: '관련 판례',
        content: `<p>대법원은 강제경매에 의한 매각이 사법상 매매의 성질을 갖지만, 동시에 법원이 소유자의 의사와 관계없이 소유물을 처분하는 공법상 처분으로서의 성질도 갖는다고 판시하였습니다(대판 2012. 11. 15. 2012다69197). 이는 경매 낙찰자가 원시취득에 준하는 강한 소유권을 취득함을 의미하며, 압류 이후 이루어진 처분 행위는 낙찰자에게 대항할 수 없습니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 배당요구 종기</strong> — 경매에서 돈을 받으려는 채권자(임차인 포함)는 법원이 정한 '배당요구 종기'까지 반드시 배당요구를 신청해야 합니다. 종기 이후에는 배당요구가 불가능합니다.</p>
<p><strong>⚠️ 경매 중 임의 처분의 위험</strong> — 압류 이후 부동산을 타인에게 매도하거나 전세·월세 계약을 맺더라도 낙찰자에게 대항할 수 없습니다.</p>
<p><strong>ℹ️ 이중경매 개시결정</strong> — 한 부동산에 여러 채권자가 각각 경매를 신청하면 이중경매개시결정이 이루어집니다. 후행 경매신청자는 별도 배당요구 없이 배당을 받을 수 있습니다(민집 제148조 제1호).</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-17',
    title: '강제경매와 임의경매의 차이',
    meta: '집행권원에 의한 강제경매와 담보권 실행에 의한 임의경매의 차이를 비교합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>내 부동산에 경매가 신청됐는데 강제경매인지 임의경매인지 구분이 안 된다</li>
<li>판결문 없이도 경매를 신청할 수 있는지 궁금하다</li>
<li>저당권·근저당권이 있는 부동산이 경매에 넘어가는 구조를 이해하고 싶다</li>
<li>집행권원(판결문, 공정증서 등)이 있어야 경매를 신청할 수 있는지 알고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>강제경매는 판결문 등 '집행권원'이 있어야만 신청할 수 있는 경매입니다.</li>
<li>임의경매는 저당권·근저당권 등 담보권이 있으면 집행권원 없이도 신청 가능한 경매입니다.</li>
<li>두 경매의 절차는 대부분 동일하지만, 신청 요건과 취소 사유에서 차이가 있습니다.</li>
</ul>`
      },
      {
        heading: '강제경매란',
        content: `<p>강제경매는 채권자가 판결문, 공정증서, 지급명령 등 <strong>집행권원</strong>을 보유한 경우, 그 집행권원에 기하여 채무자 소유 부동산을 강제로 경매하는 절차입니다. 민사집행법 제78조 이하가 적용됩니다.</p>
<p>집행권원의 종류: 확정판결, 가집행선고 있는 판결, 확정된 지급명령, 집행증서(공증 공정증서), 이행권고결정, 화해조서, 조정조서 등(민집 제56조).</p>`
      },
      {
        heading: '임의경매란',
        content: `<p>임의경매는 집행권원 없이도 담보물권(저당권·근저당권·전세권·담보가등기 등)의 실행으로서 부동산을 경매하는 절차입니다. 민사집행법 제264조 이하가 적용됩니다.</p>
<p>은행이나 금융기관이 대출금 미상환을 이유로 저당권을 실행하는 경우가 대표적입니다. 법원에 담보권 존재를 소명하는 서류(등기사항증명서, 채권액 등)만 제출하면 신청 가능합니다.</p>`
      },
      {
        heading: '주요 차이점 비교',
        content: `<table>
<thead><tr><th>구분</th><th>강제경매</th><th>임의경매</th></tr></thead>
<tbody>
<tr><td><strong>근거 법령</strong></td><td>민집 제78조~제162조</td><td>민집 제264조~제270조</td></tr>
<tr><td><strong>신청 요건</strong></td><td>집행권원 필요</td><td>담보권(저당권 등) 필요</td></tr>
<tr><td><strong>신청 서류</strong></td><td>집행력 있는 정본, 집행문, 송달증명원</td><td>등기사항증명서, 채권액 소명 서류</td></tr>
<tr><td><strong>취소 사유</strong></td><td>채무 변제 후 채권자가 취하</td><td>담보권 소멸 시 경매 취소 가능</td></tr>
<tr><td><strong>실무 빈도</strong></td><td>판결 후 미이행 시</td><td>금융권 대출 연체 시 가장 많음</td></tr>
</tbody>
</table>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 집행권원(판결문)이 없어도 경매를 신청할 수 있나요?</strong></p>
<p>네, 저당권·근저당권·전세권·담보가등기 등 담보물권이 있다면 집행권원 없이 임의경매를 신청할 수 있습니다(민집 제264조). 단순 채권자는 먼저 소송으로 판결을 받아야만 강제경매를 신청할 수 있습니다.</p>
<p><strong>Q. 임의경매와 강제경매, 절차는 같은가요?</strong></p>
<p>네, 민사집행법은 임의경매에도 강제경매에 관한 규정을 대부분 준용하도록 규정합니다(민집 제268조). 입찰 방법, 배당요구 절차, 배당 방법 등은 동일합니다.</p>
<p><strong>Q. 채권자가 여럿이면 각자 경매를 신청해야 하나요?</strong></p>
<p>이미 경매가 진행 중이라면, 다른 채권자는 새로 경매를 신청(이중경매)하거나 배당요구를 신청하면 됩니다. 배당요구는 종기 내에만 가능합니다.</p>
<p><strong>Q. 임의경매 시 담보권이 부존재하면 어떻게 되나요?</strong></p>
<p>담보권이 소멸했거나 처음부터 유효하게 성립하지 않은 경우 채무자(소유자)는 법원에 경매 취소를 신청할 수 있습니다(민집 제266조 제1항).</p>
<p><strong>Q. 공정증서(공증된 차용증)만으로도 강제경매를 신청할 수 있나요?</strong></p>
<p>네, '집행력 있는 공정증서'는 집행권원에 해당하므로(민집 제56조 제4호), 소송 없이 바로 강제경매를 신청할 수 있습니다. 일반 차용증은 집행인낙 문구가 없으면 집행권원이 되지 않습니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚠️ 임의경매 취소와 강제경매 취소의 차이</strong> — 임의경매는 담보권 자체가 소멸했음을 증명하면 취소신청이 가능하지만, 강제경매는 집행권원(판결)이 있는 한 원칙적으로 취소가 어렵고 청구이의의 소 등 별도 절차를 밟아야 합니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-18',
    title: '경매 중 채무자의 권리',
    meta: '경매 진행 중 채무자가 행사할 수 있는 법적 권리와 대응 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>내 부동산이 경매에 넘어갔는데 아직 집에 살고 있다</li>
<li>경매 진행 중에 내가 할 수 있는 권리가 있는지 알고 싶다</li>
<li>경매 절차에 이의를 제기할 수 있는 방법이 궁금하다</li>
<li>경매가 부당하다고 생각하는데 법적으로 다툴 수 있는지 확인하고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>경매 중에도 채무자(소유자)는 부동산의 소유자이며, 이해관계인으로서 절차에 참여할 권리가 있습니다.</li>
<li>채무자는 매각허부 결정에 즉시항고를 할 수 있고, 강제경매의 경우 청구이의의 소도 제기할 수 있습니다.</li>
<li>경매가 잘못된 절차로 진행된 경우 집행에 관한 이의 신청이 가능합니다.</li>
</ul>`
      },
      {
        heading: '채무자의 이해관계인 지위',
        content: `<p>경매 목적물의 소유자(채무자)는 민사집행법 제90조에 따라 이해관계인으로서 다음 권리를 갖습니다: 매각물건명세서 등 열람 및 등사, 매각결정기일 출석 및 의견 진술, 매각허부 결정에 대한 즉시항고(민집 제129조).</p>`
      },
      {
        heading: '매각허부 결정에 대한 즉시항고',
        content: `<p>법원이 매각허가 또는 불허가 결정을 하면, 이해관계인은 결정이 고지된 날부터 <strong>1주일 이내</strong>에 즉시항고를 할 수 있습니다(민집 제130조). 항고 사유는 민사집행법 제121조 각 호에 해당하는 경우(예: 법률위반, 부당한 저감 등)입니다.</p>`
      },
      {
        heading: '청구이의의 소 및 집행에 관한 이의',
        content: `<p><strong>청구이의의 소 (강제경매의 경우)</strong>: 강제경매에서 채무자가 집행권원에 표시된 청구권이 소멸했거나 변경됐다고 주장하는 경우 청구이의의 소를 제기할 수 있습니다(민집 제44조). 동시에 집행정지를 신청하면 경매 절차를 잠시 중단시킬 수 있습니다.</p>
<p><strong>집행에 관한 이의 신청</strong>: 경매 절차 자체에 위법이 있는 경우, 채무자는 집행법원에 집행에 관한 이의를 신청할 수 있습니다(민집 제16조). 법원이 이의에 이유가 있다고 판단하면 집행처분을 취소하거나 정지할 수 있습니다.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 경매 중에 법원에 출석해서 의견을 말할 수 있나요?</strong></p>
<p>네, 채무자는 매각결정기일에 출석하여 매각허가에 대한 이의를 진술할 수 있습니다(민집 제120조). 단, 진술할 수 있는 이의 사유는 민사집행법 제121조에 규정된 사항에 한정됩니다.</p>
<p><strong>Q. 판결이 잘못됐다고 생각하는데 경매를 막을 수 있나요?</strong></p>
<p>판결 자체에 문제가 있다면, 청구이의의 소를 제기하거나 재심을 청구할 수 있습니다. 청구이의의 소 제기와 함께 강제집행 정지 신청을 하면 법원이 담보 제공을 조건으로 집행을 정지시켜 줄 수 있습니다.</p>
<p><strong>Q. 경매 도중 부동산 가격이 너무 낮게 책정된 것 같은데 이의를 제기할 수 있나요?</strong></p>
<p>감정평가액이나 최저매각가격에 직접 이의를 제기하는 절차는 없습니다. 다만 감정평가가 명백히 부당한 경우 매각허부 결정에 대한 즉시항고 시 이의 사유로 제출할 수 있습니다.</p>
<p><strong>Q. 채무자도 경매에서 직접 입찰할 수 있나요?</strong></p>
<p>원칙적으로 채무자 본인은 매수신청인이 될 수 없습니다(민집 제113조). 다만 채무자의 가족이나 제3자는 입찰에 참여할 수 있습니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 즉시항고 기간 — 1주일 이내</strong> — 매각허부 결정에 대한 즉시항고는 결정 고지일로부터 1주일 이내에 해야 합니다(민집 제130조). 이 기간이 지나면 더 이상 항고할 수 없습니다.</p>
<p><strong>⚠️ 항고보증금 예납</strong> — 즉시항고를 제기할 때는 최저매각가격의 10분의 1에 해당하는 금액을 항고보증금으로 법원에 공탁해야 합니다(민집 제130조 제3항). 항고가 기각되면 보증금의 일부가 몰수될 수 있습니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-19',
    title: '경매 집행정지 신청',
    meta: '경매 절차를 일시적으로 중단시키는 집행정지 신청 방법과 요건을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>경매가 진행 중인데 절차적으로 위법하다고 생각한다</li>
<li>판결에 이의가 있어 경매를 잠시 멈추고 싶다</li>
<li>담보권(저당권 등)이 소멸했음에도 경매가 계속 진행되고 있다</li>
<li>경매 집행정지 신청 방법과 요건을 알고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>집행정지는 일시적으로 경매 절차를 중단시키는 제도로, 이를 위해서는 법원의 정지 결정 또는 정지 명령이 필요합니다.</li>
<li>강제경매 정지는 청구이의의 소 제기 + 집행정지 신청으로 가능하며, 임의경매 정지는 담보권 부존재를 주장하는 방법이 있습니다.</li>
<li>집행정지를 위해서는 대부분 담보(공탁)를 제공해야 하며, 정지 사유가 소명되어야 합니다.</li>
</ul>`
      },
      {
        heading: '강제경매 집행정지 방법',
        content: `<ol>
<li><strong>청구이의의 소 제기</strong> — 판결 후 발생한 사유(변제, 상계, 소멸시효 완성 등)를 이유로 청구이의의 소를 제기합니다(민집 제44조).</li>
<li><strong>집행정지 신청</strong> — 청구이의의 소와 함께 또는 별도로 법원에 집행정지 신청을 합니다(민집 제45조).</li>
<li><strong>담보 제공</strong> — 법원은 상당한 담보를 제공하게 하고 집행정지 결정을 합니다(민집 제46조).</li>
<li><strong>집행정지 결정서 제출</strong> — 결정서를 집행법원에 제출하면 경매 절차가 정지됩니다.</li>
</ol>`
      },
      {
        heading: '임의경매 집행정지 방법',
        content: `<p>임의경매(담보권 실행)에 대해서는 다음 방법으로 정지 또는 취소를 구할 수 있습니다:</p>
<p>① 담보권의 부존재·소멸을 이유로 한 경매 취소 신청(민집 제266조): 담보권이 처음부터 없었거나 이미 소멸한 경우 직접 취소 신청 가능.</p>
<p>② 청구이의의 소에 준하는 방법으로 집행정지 신청도 가능합니다.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 집행정지 신청을 하면 경매가 즉시 멈추나요?</strong></p>
<p>집행정지 결정이 내려지면 경매 절차는 정지됩니다. 그러나 정지 신청만으로는 즉시 멈추지 않으며 법원의 결정이 필요합니다. 집행정지 결정서를 받으면 즉시 경매 담당 법원에 제출해야 합니다.</p>
<p><strong>Q. 집행정지를 위한 담보는 어느 정도 금액을 공탁해야 하나요?</strong></p>
<p>담보 금액은 법원이 재량으로 정하며, 일반적으로 청구금액의 일정 비율이나 집행 대상 부동산의 가액을 고려하여 결정됩니다.</p>
<p><strong>Q. 경매가 낙찰 후에도 집행정지를 신청할 수 있나요?</strong></p>
<p>낙찰자가 대금을 납부하기 전까지는 집행정지가 가능합니다. 대금납부가 완료되면 소유권이 이전되므로 이후에는 다른 방법을 검토해야 합니다.</p>
<p><strong>Q. 파산신청을 하면 경매가 중단되나요?</strong></p>
<p>채무자 회생 및 파산에 관한 법률에 따라, 파산신청 후 법원이 중지명령을 발령하면 강제집행 절차(경매 포함)가 중지될 수 있습니다. 다만 담보권 실행(임의경매)은 파산절차에서도 별제권으로 계속 진행될 수 있는 경우가 있어 별도 검토가 필요합니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 집행정지는 시간이 생명</strong> — 경매 절차가 진행될수록 집행정지의 실효성은 줄어듭니다. 특히 낙찰 후 대금 납부 전까지만 실효성이 있으므로, 경매가 시작됐을 때 즉시 법무사 또는 변호사와 상담하는 것이 중요합니다.</p>
<p><strong>⚠️ 집행정지 남용 시 손해배상 책임</strong> — 정당한 사유 없이 집행정지를 신청하여 채권자에게 손해를 끼친 경우 손해배상 책임이 발생할 수 있습니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-21',
    title: '강제경매 신청 절차',
    meta: '집행권원이 있는 채권자가 강제경매를 신청하는 절차와 필요 서류를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>판결문, 공정증서 등 집행권원이 있는데 채무자가 돈을 갚지 않는다</li>
<li>채무자 소유 부동산에 강제경매를 신청하고 싶다</li>
<li>강제경매 신청에 필요한 서류와 절차를 알고 싶다</li>
<li>경매 신청 비용이 얼마나 드는지 알고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>강제경매는 집행권원(판결문 등) + 집행문 + 송달증명원을 갖추고 채무자 소유 부동산 소재지 법원에 신청합니다.</li>
<li>신청 접수 당일 법원은 경매개시결정을 하고, 3일 이내에 등기소에 등기 촉탁합니다.</li>
<li>전체 경매 절차는 통상 6개월~1년 이상 소요됩니다.</li>
</ul>`
      },
      {
        heading: '신청 전 체크사항',
        content: `<p>경매 신청 전 다음을 반드시 확인합니다: ① 집행권원의 종류 확인(판결문, 지급명령, 공정증서 등), ② 집행문 부여 신청(집행문이 필요한 경우), ③ 채무자에 대한 집행권원 송달 증명, ④ 채무자 소유 부동산의 등기사항증명서 열람, ⑤ 잉여 가능성 검토(선순위 담보채권과 집행비용을 합한 금액이 최저매각가격을 초과하면 경매가 취소될 수 있음).</p>`
      },
      {
        heading: '신청 단계별 절차',
        content: `<ol>
<li><strong>집행문 부여 신청</strong> — 집행문이 필요한 집행권원(판결문 등)의 경우, 발령 법원의 법원사무관 등에게 집행문 부여를 신청합니다(민집 제28조).</li>
<li><strong>송달증명원 발급</strong> — 집행권원이 채무자에게 적법하게 송달됐음을 증명하는 서류를 발급받습니다.</li>
<li><strong>경매신청서 작성</strong> — 채권자, 채무자, 청구금액, 집행 목적물(부동산 표시)을 기재한 신청서를 작성합니다.</li>
<li><strong>신청서 및 첨부서류 제출</strong> — 부동산 소재지 관할 지방법원 경매계에 접수합니다.</li>
<li><strong>인지대·송달료 납부</strong> — 법원 수납창구에서 납부합니다.</li>
<li><strong>경매개시결정</strong> — 접수 당일 법원이 결정하고, 3일 이내 등기소에 등기 촉탁.</li>
</ol>`
      },
      {
        heading: '첨부서류 목록',
        content: `<table>
<thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>집행력 있는 정본(판결정본 등)</strong></td><td>발령 법원</td><td>집행문이 부여된 것</td></tr>
<tr><td><strong>집행문(필요한 경우)</strong></td><td>발령 법원 사무관</td><td>조건부 집행권원은 조건 성취 소명</td></tr>
<tr><td><strong>송달증명원</strong></td><td>발령 법원</td><td>집행권원 송달일 기재 확인</td></tr>
<tr><td><strong>부동산 등기사항증명서</strong></td><td>등기소·인터넷등기소</td><td>발급일 기준 최신본</td></tr>
<tr><td><strong>채권계산서(해당 시)</strong></td><td>채권자 작성</td><td>원금, 이자, 비용 내역 포함</td></tr>
<tr><td><strong>법인 채권자: 법인등기부등본</strong></td><td>등기소</td><td>대표자 확인용</td></tr>
</tbody>
</table>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 집행문이란 무엇이고 왜 필요한가요?</strong></p>
<p>집행문은 법원이 집행권원(판결문 등)에 집행력이 있음을 공증하는 문서입니다(민집 제28조). 지급명령·이행권고결정 등은 집행문 없이도 강제집행이 가능합니다.</p>
<p><strong>Q. 채무자의 지분만 있는 부동산에도 강제경매를 신청할 수 있나요?</strong></p>
<p>네, 채무자가 부동산의 일부 지분만 소유하는 경우에도 그 지분에 대한 강제경매를 신청할 수 있습니다. 다만 지분 경매는 낙찰가가 낮은 경우가 많습니다.</p>
<p><strong>Q. 부동산 소재지 법원이 아닌 다른 법원에 신청할 수 있나요?</strong></p>
<p>강제경매는 부동산 소재지 관할 지방법원(또는 지원)에 신청해야 합니다(민집 제79조). 관할이 없는 법원에 신청하면 이송 또는 각하 처리됩니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 소멸시효 — 확인 후 신청하세요</strong> — 판결로 확정된 채권의 소멸시효는 10년입니다(민법 제165조). 판결일로부터 10년이 경과하면 채권이 소멸하므로 경매 신청 전 시효를 반드시 확인하세요.</p>
<p><strong>⚠️ 잉여주의 확인</strong> — 경매를 신청하기 전 선순위 담보채권(근저당권 등)과 집행비용의 합계가 부동산 가격을 초과하는지 확인해야 합니다. 남는 금액(잉여)이 없으면 법원이 경매를 취소할 수 있습니다(민집 제102조).</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-22',
    title: '임의경매 신청 절차',
    meta: '저당권·근저당권·전세권 등 담보물권자가 임의경매를 신청하는 절차와 필요 서류를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>저당권·근저당권이 설정된 부동산의 채무자가 원리금을 상환하지 않는다</li>
<li>전세권자로서 전세금을 돌려받지 못해 경매를 신청하려 한다</li>
<li>임의경매 신청에 필요한 서류와 절차를 알고 싶다</li>
<li>담보권 실행 경매와 강제경매의 차이를 알고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>임의경매는 저당권·근저당권·전세권 등 담보물권의 실행으로 신청하는 경매로, 판결(집행권원)이 없어도 됩니다.</li>
<li>담보권이 등기부에 등재되어 있음을 소명하는 서류만 있으면 법원에 신청 가능합니다.</li>
<li>절차 흐름은 강제경매와 동일하며, 민사집행법 제264조~제270조가 적용됩니다.</li>
</ul>`
      },
      {
        heading: '신청 전 체크사항',
        content: `<p>임의경매 신청 전 반드시 확인할 사항: ① 담보권(저당권·근저당권·전세권 등)이 등기부에 현재 유효하게 등재되어 있는가, ② 피담보채권(대출금, 전세금 등)의 변제기가 도래했는가, ③ 채무 불이행 사실(연체 등)이 있는가, ④ 관련 계약서, 약정서가 준비되어 있는가.</p>`
      },
      {
        heading: '신청 단계별 절차',
        content: `<ol>
<li><strong>등기사항증명서 확인</strong> — 담보권이 유효하게 등재된 최신 등기사항증명서 발급.</li>
<li><strong>경매신청서 작성</strong> — 채권자·채무자·목적물 표시·청구금액 기재. 법원 양식 이용.</li>
<li><strong>첨부서류 준비</strong> — 아래 표 참조.</li>
<li><strong>관할 법원 접수</strong> — 부동산 소재지 관할 지방법원 경매계에 제출.</li>
<li><strong>인지대·송달료 납부</strong> — 수납창구 납부 또는 전자납부.</li>
<li><strong>경매개시결정</strong> — 접수 당일 결정, 3일 이내 등기 촉탁(민집 제268조, 제83조).</li>
</ol>`
      },
      {
        heading: '첨부서류 목록',
        content: `<table>
<thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>부동산 등기사항증명서</strong></td><td>등기소·인터넷등기소</td><td>담보권 등재 확인</td></tr>
<tr><td><strong>근저당권 설정계약서 사본</strong></td><td>채권자 보관</td><td>채권최고액 확인</td></tr>
<tr><td><strong>대출약정서·금전소비대차계약서 사본</strong></td><td>채권자 보관</td><td>채무 원인 소명용</td></tr>
<tr><td><strong>연체확인서 또는 채권계산서</strong></td><td>채권자 작성</td><td>원금·이자·비용 내역 포함</td></tr>
<tr><td><strong>전세권 설정계약서 (전세권 경매 시)</strong></td><td>채권자 보관</td><td>전세권 만기·반환 거절 증명</td></tr>
<tr><td><strong>법인: 법인등기부등본</strong></td><td>등기소</td><td>법인 채권자인 경우</td></tr>
</tbody>
</table>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 채무자가 이미 다른 곳에 부동산을 팔았어도 경매를 신청할 수 있나요?</strong></p>
<p>근저당권 설정 이후 부동산이 제3자에게 양도됐더라도, 근저당권은 부동산을 추적하는 물권이므로 현재 소유자의 부동산에 대해 임의경매를 신청할 수 있습니다(민법 제363조).</p>
<p><strong>Q. 채권최고액이 있는 근저당권인데, 실제 채권액이 채권최고액을 초과하면 어떻게 되나요?</strong></p>
<p>근저당권의 피담보채권은 채권최고액을 한도로 보장됩니다(민법 제357조). 초과분은 일반 채권자와 같은 순위로 배당을 요청해야 합니다.</p>
<p><strong>Q. 전세권자도 임의경매를 신청할 수 있나요?</strong></p>
<p>네, 등기된 전세권은 담보물권으로서 전세권자가 직접 임의경매를 신청할 수 있습니다(민법 제318조, 민집 제264조). 전세권의 존속기간이 만료됐고 전세금 반환을 요구했음에도 집주인이 반환하지 않는 경우에 신청 가능합니다.</p>
<p><strong>Q. 임의경매 신청 후 채무자가 채무를 갚겠다고 하면 어떻게 하나요?</strong></p>
<p>경매 신청 후라도 낙찰자가 대금을 납부하기 전이라면 채권자는 언제든지 취하할 수 있습니다. 채무자가 채권 전액(원금·이자·집행비용 포함)을 변제하면 경매를 취하하는 것이 일반적입니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚠️ 담보권 소멸 여부 확인 필수</strong> — 이미 변제 완료된 담보권을 실행하면 법원이 경매를 취소하고(민집 제266조), 채권자는 손해배상 책임을 질 수 있습니다.</p>
<p><strong>ℹ️ 물상보증인 소유 부동산</strong> — 채무자가 아닌 물상보증인의 부동산에도 임의경매 신청이 가능합니다. 이 경우 물상보증인은 채무자에게 구상권을 행사할 수 있습니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-23',
    title: '부동산경매와 가압류',
    meta: '경매개시결정 등기 전후의 가압류권자 지위 차이와 배당 참가 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>채무자의 부동산에 이미 가압류를 해 두었는데, 제3자가 경매를 신청한 경우</li>
<li>타인의 부동산 경매가 진행 중인데 그 부동산에 가압류를 추가로 넣으려는 분</li>
<li>판결(집행권원)이 없는 일반 채권자인데 경매 배당에 참가하고 싶은 분</li>
<li>배당요구종기 전에 가압류를 해야 하는지, 배당요구만 하면 되는지 헷갈리는 분</li>
<li>가압류권자가 경매에서 배당을 받으려면 별도로 무엇을 해야 하는지 확인하고 싶은 분</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<p>부동산 경매에서 가압류권자의 지위는 <strong>경매개시결정 등기를 기준</strong>으로 완전히 달라집니다.</p>
<ul>
<li>경매개시결정 등기 前 가압류 → 별도 배당요구 없이 당연히 배당에 참가합니다.</li>
<li>경매개시결정 등기 後 가압류 → 배당요구종기까지 배당요구를 해야만 배당받을 수 있습니다.</li>
<li>집행권원이 없는 순수한 일반채권자는 배당요구만으로는 경매 배당에 참가할 수 없습니다. 반드시 부동산에 가압류를 등기한 후 배당요구를 해야 배당 자격이 생깁니다.</li>
</ul>`
      },
      {
        heading: '경매개시결정 등기 前·後 가압류권자 지위 비교',
        content: `<table>
<thead><tr><th>구분</th><th>경매개시결정 등기 前 가압류</th><th>경매개시결정 등기 後 가압류</th></tr></thead>
<tbody>
<tr><td><strong>법적 근거</strong></td><td>민집 제148조 제2호</td><td>민집 제148조 제2호 단서</td></tr>
<tr><td><strong>배당요구 필요 여부</strong></td><td>불필요 — 당연 배당 참가</td><td>필요 — 종기까지 배당요구 필수</td></tr>
<tr><td><strong>배당 순위</strong></td><td>안분배당 (채권액 비율)</td><td>일반채권자로서 안분배당</td></tr>
<tr><td><strong>실무 포인트</strong></td><td>법원이 등기부 조회하여 자동 포함</td><td>배당요구종기를 놓치면 완전 배제</td></tr>
</tbody>
</table>`
      },
      {
        heading: '일반채권자가 경매 배당에 참가하는 방법',
        content: `<p>집행권원이 없는 순수 채권자는 아래 중 하나의 방법으로만 경매 배당에 참가할 수 있습니다.</p>
<p><strong>방법 ① 부동산에 가압류를 신청한 후 배당요구</strong></p>
<ol>
<li>가압류 신청 (법원) — 채무자 소유 부동산에 대해 가압류 신청.</li>
<li>가압류 결정 + 등기 촉탁 — 등기부에 가압류 등기.</li>
<li>배당요구종기까지 배당요구 신청 — 경매개시결정 등기 후에 가압류된 경우 필수.</li>
<li>배당기일 전 채권계산서 제출 — 원금, 이자 등을 기재한 채권계산서를 배당기일 3일 전까지 법원에 제출.</li>
</ol>
<p><strong>방법 ② 집행권원을 취득한 후 배당요구</strong></p>
<p>가압류가 본안소송으로 이어져 승소 확정판결(집행권원)을 받은 경우, 집행력 있는 정본으로 배당요구종기까지 배당요구를 할 수 있습니다(민집 제88조 제1호).</p>`
      },
      {
        heading: '가압류권자의 배당 — 안분배당 원칙',
        content: `<p>가압류권자는 저당권자와 달리 <strong>우선변제권이 없습니다</strong>. 저당권자·임금채권자·소액임차인 등이 우선배당을 받고 남은 금액에서 일반채권자들(가압류권자 포함)이 <strong>채권액 비율에 따라 안분배당</strong>을 받습니다.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 경매가 진행 중인 부동산에 지금이라도 가압류를 넣으면 배당을 받을 수 있나요?</strong></p>
<p>배당요구종기 이전이라면 가능합니다. 가압류를 하고 배당요구종기까지 배당요구도 함께 해야 합니다. 배당요구종기가 이미 지난 경우에는 당해 경매 절차에서는 배당을 받을 수 없습니다.</p>
<p><strong>Q. 경매개시결정 등기 전에 가압류를 해 두었는데, 배당요구는 해야 하나요?</strong></p>
<p>경매개시결정 등기 전에 등기된 가압류채권자는 별도의 배당요구 없이도 당연히 배당에 참가합니다(민집 제148조 제2호). 다만 배당기일 전에 채권계산서를 제출해야 합니다.</p>
<p><strong>Q. 가압류를 했는데 배당을 아예 못 받는 경우도 있나요?</strong></p>
<p>네, 저당권자 등 우선채권자의 채권 합계가 배당금을 초과하는 경우, 후순위인 가압류채권자에게 배당될 금액이 남지 않습니다.</p>
<p><strong>Q. 가압류권자가 직접 경매를 신청하려면 어떻게 해야 하나요?</strong></p>
<p>가압류 결정 자체만으로는 경매를 신청할 수 없습니다. 집행권원(확정판결 등)이 필요합니다. 가압류 후 본안소송을 제기하여 승소 확정판결을 받은 다음, 그 판결에 집행문을 부여받아 강제경매를 신청해야 합니다.</p>
<p><strong>Q. 배당요구종기 후에도 가압류를 유지하면 어떤 의미가 있나요?</strong></p>
<p>배당요구종기를 놓쳐 배당을 받지 못하면, 경매가 완료될 때 가압류는 매각에 의해 소멸하는 것이 원칙입니다(민집 제91조). 배당요구종기를 절대로 놓쳐서는 안 됩니다.</p>
<p><strong>Q. 가압류 이후 가압류권자의 채권이 제3자에게 양도되면 어떻게 되나요?</strong></p>
<p>채권양도는 채무자에 대한 통지 또는 채무자의 승낙이 있어야 대항력이 생깁니다(민법 제450조). 가압류는 채권에 부수하는 것이므로 채권 양도 시 가압류에 의한 지위도 함께 이전됩니다.</p>`
      },
      {
        heading: '관련 판례',
        content: `<p>대법원은 경매개시결정 등기 전에 가압류를 한 채권자는 별도의 배당요구 없이도 당연히 배당에 참가할 수 있다고 판시하고 있습니다(민집 제148조 제2호). 반면 경매개시결정 등기 후에 가압류를 한 채권자는 배당요구종기까지 배당요구를 하여야만 배당에 참가할 수 있고, 이 기한을 도과하면 그 경매 절차에서의 배당을 받을 수 없습니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 배당요구종기는 절대 놓치지 마세요</strong> — 경매개시결정 등기 후 가압류를 한 경우, 종기 내 배당요구를 하지 않으면 배당에서 완전히 배제되고 가압류도 매각으로 소멸합니다.</p>
<p><strong>⚠️ 가압류만으로 우선변제는 안 됩니다</strong> — 가압류는 처분금지 보전 수단이지 우선변제권이 아닙니다. 저당권자 등 우선채권자가 많으면 배당이 남지 않을 수 있습니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-24',
    title: '잉여주의 — 경매해도 남는 게 없는 경우',
    meta: '선순위 채권이 많아 경매 매각대금이 남지 않는 경우 경매가 취소될 수 있는 잉여주의를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>채무자 부동산에 이미 근저당권 등 선순위 채권이 많이 있다</li>
<li>경매를 신청해도 내가 받을 돈이 없을 것 같아 걱정이다</li>
<li>잉여주의가 무엇인지, 경매가 취소될 수 있는지 알고 싶다</li>
<li>후순위 채권자로서 배당받을 가능성을 미리 파악하고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>잉여주의란 경매 매각대금이 선순위 채권(압류채권자보다 우선순위의 채권)과 집행비용을 합친 금액을 초과해야만 경매를 진행할 수 있다는 원칙입니다.</li>
<li>남는 금액(잉여)이 없을 것으로 예상되면 법원은 경매를 취소합니다(민집 제102조).</li>
<li>잉여 가능성이 없더라도 채권자가 부족분을 공탁하거나, 최저매각가격을 변경하는 방법으로 경매를 계속 진행시킬 수 있습니다.</li>
</ul>`
      },
      {
        heading: '잉여주의의 의미',
        content: `<p>민사집행법 제102조에 따라, 최저매각가격으로 압류채권자의 채권에 우선하는 모든 부담(선순위 채권)과 집행비용을 변제하면 남을 것이 없겠다고 인정되는 경우, 법원은 압류채권자에게 이를 통지해야 합니다. 이 통지 후 압류채권자가 선순위 채권과 집행비용에 해당하는 금액을 법원에 공탁하지 않으면 경매는 취소됩니다.</p>`
      },
      {
        heading: '선순위 채권의 종류',
        content: `<p>잉여주의에서 말하는 '우선하는 부담'에는 ① 경매개시결정등기 전에 등기된 담보물권(저당권·근저당권·전세권 등), ② 최우선변제 소액임차인의 보증금, ③ 당해세(해당 부동산에 부과된 세금), ④ 집행비용 등이 포함됩니다.</p>`
      },
      {
        heading: '잉여 가능성 사전 파악 방법',
        content: `<p>경매 신청 전 ① 등기사항증명서로 선순위 담보권(채권최고액)을 확인하고, ② 국세·지방세 체납 여부를 확인하며, ③ 인근 시세를 조회하여 잉여 여부를 개략적으로 계산해보는 것이 중요합니다.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 잉여주의는 임의경매에도 적용되나요?</strong></p>
<p>잉여주의(민집 제102조)는 강제경매에 관한 규정이지만, 임의경매에도 준용됩니다(민집 제268조). 다만 임의경매의 신청 채권자(예: 1순위 근저당권자)가 곧 선순위 채권자인 경우에는 잉여주의 문제가 생기지 않는 것이 일반적입니다.</p>
<p><strong>Q. 공탁을 하면 나중에 돌려받을 수 있나요?</strong></p>
<p>잉여주의에 따라 공탁한 금액은 경매 진행 후 실제로 낙찰대금에서 선순위 채권이 충분히 변제되지 않는 경우 해당 채권자에게 지급됩니다. 낙찰가가 높아 공탁금 없이도 선순위 채권이 변제된다면 공탁금은 반환됩니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚠️ 경매 신청 전 잉여 가능성 반드시 확인</strong> — 경매 신청 비용(인지대, 감정비용 등)을 납부했더라도 잉여가 없으면 경매가 취소됩니다. 선순위 채권 합계액이 부동산 시가에 근접하거나 초과하는 경우 경매 신청 실익이 없으므로, 사전에 법무사와 상담하여 잉여 가능성을 검토하세요.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-25',
    title: '경매 배당 순위',
    meta: '경매 낙찰대금이 분배되는 순위 구조와 배당 사례를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>경매 낙찰 대금이 분배되는 순서를 알고 싶다</li>
<li>내가 받을 수 있는 금액이 있는지 미리 파악하고 싶다</li>
<li>임차인, 세금, 근저당권자 중 누가 먼저 배당받는지 궁금하다</li>
<li>소액임차인으로서 최우선변제를 받을 수 있는지 확인하고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>경매 낙찰대금은 일정한 순위에 따라 배당되며, 금액이 모자라면 하위 순위 채권자는 배당을 받지 못합니다.</li>
<li>최우선 변제를 받는 것은 집행비용과 일정 요건의 소액임차인·임금채권이고, 그다음이 담보물권(저당권·전세권 등)입니다.</li>
<li>세금(조세채권)은 담보물권보다 우선하는 경우(당해세)와 그렇지 않은 경우가 있어 복잡합니다.</li>
</ul>`
      },
      {
        heading: '배당 순위 구조',
        content: `<table>
<thead><tr><th>순위</th><th>채권 종류</th><th>근거 법령</th><th>비고</th></tr></thead>
<tbody>
<tr><td><strong>1순위</strong></td><td>집행비용</td><td>민집 제53조</td><td>인지대, 감정비용 등</td></tr>
<tr><td><strong>2순위</strong></td><td>소액임차인 최우선변제 보증금</td><td>주임법 제8조</td><td>일정 금액 이하, 요건 충족 시</td></tr>
<tr><td><strong>3순위</strong></td><td>임금채권 최우선 부분</td><td>근기법 제38조</td><td>최종 3개월분 임금·퇴직금 등</td></tr>
<tr><td><strong>4순위</strong></td><td>당해세(해당 부동산에 부과된 조세)</td><td>국세기본법 제35조</td><td>저당권보다 우선 여부 검토 필요</td></tr>
<tr><td><strong>5순위</strong></td><td>담보물권(저당권·근저당권·전세권)</td><td>민법 제303조, 민집 제91조</td><td>등기 순서에 따른 우선순위</td></tr>
<tr><td><strong>6순위</strong></td><td>우선변제권 있는 임차인(대항력+확정일자)</td><td>주임법 제3조의2</td><td>확정일자 취득 순서 기준</td></tr>
<tr><td><strong>7순위</strong></td><td>일반 조세채권·공과금</td><td>국세기본법 제35조</td><td>법정기일 기준</td></tr>
<tr><td><strong>8순위</strong></td><td>일반 채권자(가압류, 판결 채권자 등)</td><td>민집 제88조</td><td>안분 비례 배당</td></tr>
</tbody>
</table>`
      },
      {
        heading: '배당 사례 및 조세 우선순위',
        content: `<p><strong>배당 사례 (낙찰가 2억 원 가정)</strong>: 집행비용 300만 원 → 소액임차인 최우선변제 2,000만 원 → 1순위 근저당권자 1억 2,000만 원 → 2순위 근저당권자 3,500만 원 → 대항력+확정일자 임차인 나머지 2,200만 원(부족 분은 배당 불가). 이 경우 일반 채권자는 배당을 받지 못합니다.</p>
<p><strong>조세채권과 담보물권의 우선순위</strong>: 조세채권의 법정기일이 담보물권의 등기일보다 빠른 경우에는 조세가 우선하고, 담보물권 등기일이 더 빠른 경우에는 담보물권이 우선합니다(국세기본법 제35조 제1항). 단, 당해세(재산세, 종합부동산세, 취득세 등)는 담보물권보다 항상 우선합니다.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 근저당권과 전세권 중 어느 쪽이 먼저 배당받나요?</strong></p>
<p>등기 순서가 빠른 쪽이 우선합니다. 같은 날 등기된 경우에는 접수 번호가 빠른 것이 우선합니다(민법 제370조, 민집 제91조).</p>
<p><strong>Q. 배당받지 못한 채권은 어떻게 되나요?</strong></p>
<p>경매에서 배당받지 못한 채권은 소멸하지 않고 채무자에 대한 일반 채권으로 남습니다. 다만 담보물권(저당권 등)은 경매로 소멸하므로, 담보물권으로 배당받지 못한 부분은 무담보 채권으로 전환됩니다.</p>
<p><strong>Q. 일반 채권자들이 여럿인 경우 어떻게 배당하나요?</strong></p>
<p>우선순위가 없는 일반 채권자들(가압류 채권자 포함) 사이에서는 안분 비례 원칙에 따라 채권액 비율대로 나눠 배당합니다.</p>
<p><strong>Q. 배당표는 어디서 확인할 수 있나요?</strong></p>
<p>배당표는 배당기일 3일 전까지 법원에 비치되어 이해관계인이 열람할 수 있습니다(민집 제149조). 대법원 경매정보 사이트(www.courtauction.go.kr)에서도 조회 가능합니다.</p>`
      },
      {
        heading: '관련 판례',
        content: `<p>대법원은 배당요구가 필요한 채권자가 배당요구의 종기까지 배당요구를 하지 않으면, 실체법상 우선변제청구권이 있더라도 매각대금에서 배당받을 수 없다고 판시하였습니다(대판 2001. 3. 23. 99다11526). 배당요구 종기는 반드시 지켜야 합니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 배당요구 종기 — 이 날짜를 반드시 확인하세요</strong> — 배당요구를 해야 하는 채권자는 법원이 공고한 배당요구 종기 내에 신청해야 합니다. 이 기간이 지나면 배당받을 권리가 사실상 소멸합니다.</p>
<p><strong>⚠️ 당해세는 담보물권보다 우선</strong> — 재산세, 종합부동산세 등 당해세는 근저당권 등기일과 무관하게 항상 담보물권보다 우선 배당됩니다. 선순위 근저당권자라도 당해세가 많으면 예상보다 적게 배당받을 수 있습니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-26',
    title: '배당요구 신청 절차',
    meta: '경매 배당에 참여하기 위한 배당요구 신청 방법, 기한, 첨부서류를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>경매 중인 부동산에 내 채권이 있는데 배당을 받고 싶다</li>
<li>임차인으로서 보증금을 받으려면 어떤 신청을 해야 하는지 모른다</li>
<li>배당요구 신청 방법과 기한을 알고 싶다</li>
<li>배당요구 없이도 자동으로 배당받을 수 있는지 확인하고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>배당을 받으려면 법원이 정한 배당요구 종기 내에 배당요구 신청을 해야 합니다(민집 제88조).</li>
<li>일부 채권자(선순위 담보권자, 가압류 채권자 등)는 별도 배당요구 없이도 배당을 받지만, 임차인·일반 채권자 등은 반드시 신청해야 합니다.</li>
<li>종기를 넘긴 배당요구는 효력이 없으므로, 경매가 시작됐다는 소식을 들으면 즉시 법원에 확인하세요.</li>
</ul>`
      },
      {
        heading: '배당요구가 필요한 채권자',
        content: `<p>다음에 해당하는 채권자는 배당요구 종기까지 반드시 배당요구를 해야 배당받을 수 있습니다(민집 제88조 제1항):</p>
<ul>
<li>집행력 있는 정본을 가진 채권자(판결, 공정증서 등)</li>
<li>경매개시결정 등기 후 가압류를 한 채권자</li>
<li>민법·상법 등에 의해 우선변제청구권이 있는 채권자 (주택임대차보호법상 임차인 포함)</li>
</ul>
<p><strong>배당요구 없이도 배당받는 채권자</strong>(민집 제148조):</p>
<ul>
<li>경매를 신청한 압류채권자(이중경매신청인 포함)</li>
<li>첫 경매개시결정등기 전에 등기된 가압류채권자</li>
<li>경매개시결정등기 전에 등기된 담보물권자 중 소멸 주의로 소멸하는 권리자</li>
<li>임차권등기명령에 의해 경매개시결정 전에 임차권 등기를 마친 임차인</li>
</ul>`
      },
      {
        heading: '배당요구 신청 단계',
        content: `<ol>
<li><strong>배당요구 종기 확인</strong> — 대법원 경매정보 사이트(www.courtauction.go.kr)나 법원에 직접 문의하여 종기 날짜 확인.</li>
<li><strong>배당요구 신청서 작성</strong> — 사건 번호, 채권 원인, 채권액(원금·이자·비용) 기재. 법원 비치 양식 사용.</li>
<li><strong>첨부서류 준비</strong> — 채권 소명 서류(임대차계약서, 판결문, 차용증 등).</li>
<li><strong>법원 경매계 제출</strong> — 종기 당일까지 접수. 우편 접수 시 종기 당일 도달해야 함.</li>
</ol>`
      },
      {
        heading: '첨부서류 목록',
        content: `<table>
<thead><tr><th>채권자 종류</th><th>주요 첨부서류</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>주택·상가 임차인</strong></td><td>임대차계약서, 주민등록등본, 확정일자 증명</td><td>전입신고일·확정일자 기재 확인</td></tr>
<tr><td><strong>판결 채권자</strong></td><td>집행력 있는 판결 정본, 집행문, 송달증명원</td><td>집행문 부여 여부 확인</td></tr>
<tr><td><strong>가압류 채권자(경매개시결정 후)</strong></td><td>가압류 결정문 사본, 채권액 산정서</td><td>가압류 사건번호 기재</td></tr>
<tr><td><strong>세금 채권(국세·지방세)</strong></td><td>교부청구서</td><td>체납세금 교부청구로 대체 가능</td></tr>
</tbody>
</table>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 배당요구를 일부 금액으로만 신청하면 나중에 추가할 수 있나요?</strong></p>
<p>배당요구 종기 이후에는 배당요구 금액을 추가하거나 확장할 수 없습니다(대판 2001. 3. 23. 99다11526). 따라서 배당요구 시 원금뿐만 아니라 이자, 비용 등 모든 채권액을 포함하여 신청해야 합니다.</p>
<p><strong>Q. 주택임차인인데, 대항력이 있어도 배당요구를 해야 하나요?</strong></p>
<p>네, 주택임차인이 경매에서 보증금을 배당받으려면 배당요구 종기 내에 배당요구를 신청해야 합니다. 대항력이 있더라도 배당요구를 하지 않으면 낙찰자에게 보증금 반환을 요구하는 방식으로 처리될 수 있어 전문가와 상담하여 전략을 정하세요.</p>
<p><strong>Q. 전세권 등기를 한 경우에도 배당요구를 해야 하나요?</strong></p>
<p>최선순위 전세권자는 배당요구를 해야만 경매로 소멸하고 배당을 받을 수 있습니다(민집 제91조 제4항 단서). 배당요구를 하지 않으면 낙찰자가 전세권을 인수하게 됩니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 배당요구 종기 — 단 하루라도 늦으면 배당받지 못합니다</strong> — 배당요구 종기는 법원이 공고로 정하며, 이 날짜를 1일이라도 넘기면 배당요구는 효력이 없습니다(민집 제88조).</p>
<p><strong>⚠️ 임차인의 이중 지위 주의</strong> — 전세권자이면서 동시에 주택임대차보호법상 임차인 지위를 갖는 경우, 임차인으로서 배당요구를 했다 해서 전세권자로서 배당요구까지 한 것으로 볼 수 없습니다. 각 지위별로 별도 배당요구를 고려해야 합니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-27',
    title: '배당이의와 배당이의의 소',
    meta: '배당표에 이의가 있는 경우 배당기일 이의 진술 및 배당이의의 소 제기 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>배당표를 확인했더니 내 배당액이 잘못 계산된 것 같다</li>
<li>다른 채권자가 부당하게 높은 배당을 받는 것을 막고 싶다</li>
<li>배당이의 절차와 배당이의 소송을 어떻게 진행하는지 알고 싶다</li>
<li>배당기일에 출석해야 하는지 궁금하다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>배당표에 이의가 있는 채권자(또는 채무자)는 배당기일에 출석하여 이의를 진술해야 합니다.</li>
<li>배당기일 이의를 제기한 후 <strong>1주일 이내</strong>에 배당이의의 소를 제기해야 이의가 효력을 유지합니다.</li>
<li>소를 제기하지 않으면 배당표는 그대로 확정되므로, 기일 이후 신속하게 소송을 준비해야 합니다.</li>
</ul>`
      },
      {
        heading: '배당이의의 절차 개요',
        content: `<ol>
<li><strong>배당표 열람</strong> — 배당기일 3일 전까지 법원에 비치된 배당표 열람(민집 제149조).</li>
<li><strong>배당기일 출석 및 이의 진술</strong> — 배당기일에 직접 출석하여 구두로 이의를 진술해야 합니다(민집 제151조). 서면만 제출하고 불출석하면 이의가 인정되지 않습니다.</li>
<li><strong>배당이의의 소 제기</strong> — 이의 진술 후 1주일 이내에 배당이의의 소를 법원에 제기해야 합니다(민집 제154조). 소 미제기 시 이의 효력 소멸.</li>
<li><strong>집행공탁</strong> — 법원은 이의 대상 배당금을 공탁하고 소송 결과를 기다립니다(민집 제160조).</li>
<li><strong>판결 확정</strong> — 소송 결과에 따라 공탁금을 해당 채권자에게 지급하거나 반환합니다.</li>
</ol>`
      },
      {
        heading: '이의 사유',
        content: `<p>배당이의를 제기할 수 있는 사유: ① 다른 채권자의 채권 자체가 존재하지 않거나 소멸한 경우, ② 배당 순위나 금액 계산이 잘못된 경우, ③ 허위의 채권으로 배당에 참가한 경우 등.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 배당기일에 출석하지 않으면 이의를 제기할 수 없나요?</strong></p>
<p>원칙적으로 배당이의는 배당기일에 출석하여 이의를 진술해야 합니다(민집 제151조). 단, 채무자의 경우 서면으로도 이의를 제기할 수 있습니다. 채권자는 반드시 직접 출석해야 하므로, 사정이 있다면 대리인(법무사, 변호사)을 선임하여 출석하도록 해야 합니다.</p>
<p><strong>Q. 1주일 안에 소를 제기하지 못하면 어떻게 되나요?</strong></p>
<p>배당기일에 이의를 진술했더라도 1주일 이내에 배당이의의 소를 제기하지 않으면 이의 진술의 효력이 소멸하고 배당표가 확정됩니다(민집 제154조).</p>
<p><strong>Q. 채무자도 배당이의를 제기할 수 있나요?</strong></p>
<p>네, 채무자도 채권자의 채권이 존재하지 않거나 소멸했다는 이유로 배당이의를 제기할 수 있습니다(민집 제151조 제2항). 채무자는 배당기일에 출석하지 않아도 서면으로 이의를 제기할 수 있고, 이의 후 1주일 이내에 청구이의의 소를 제기해야 합니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 배당이의 소 제기 기한 — 배당기일로부터 1주일</strong> — 배당기일에 이의를 진술한 날로부터 1주일 이내에 소를 제기해야 합니다. 이 기간은 불변기간으로 연장되지 않으며, 기간이 지나면 이의 효력이 소멸합니다.</p>
<p><strong>⚠️ 배당기일 출석 필수 (채권자의 경우)</strong> — 채권자는 배당기일에 직접 출석하지 않으면 이의를 제기할 수 없습니다. 사정상 출석이 어려운 경우 반드시 법무사·변호사에게 대리를 맡겨야 합니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-28',
    title: '소액임차인 최우선변제',
    meta: '소액 보증금 임차인이 근저당권보다 먼저 보증금을 배당받을 수 있는 최우선변제 요건을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>세 들어 사는 집이 경매에 넘어가 보증금을 잃을까 걱정이다</li>
<li>소액임차인으로서 다른 채권자보다 먼저 보증금을 받을 수 있는지 알고 싶다</li>
<li>최우선변제금액 기준과 요건이 무엇인지 확인하고 싶다</li>
<li>전입신고와 확정일자 중 어느 것이 더 중요한지 헷갈린다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>소액임차인 최우선변제는 보증금이 일정 금액 이하인 임차인에게 근저당권·담보물권보다 먼저 일정 금액의 보증금을 배당해주는 제도입니다(주임법 제8조).</li>
<li>요건: ① 주택임대차보호법 적용 주택, ② 보증금이 지역별 기준금액 이하, ③ 경매개시결정 등기 전 전입신고 + 점유 유지.</li>
<li>확정일자 없어도 최우선변제는 받을 수 있으나, 확정일자가 있으면 우선변제권도 추가로 행사할 수 있습니다.</li>
</ul>`
      },
      {
        heading: '소액임차인 최우선변제 요건',
        content: `<p>주택임대차보호법 제8조에 따라 소액임차인이 최우선변제를 받으려면 다음 요건이 모두 충족되어야 합니다:</p>
<ol>
<li>주택임대차보호법이 적용되는 주거용 건물에 대한 임대차일 것</li>
<li>임차보증금이 대통령령이 정하는 금액 이하일 것 (지역별 기준 상이)</li>
<li>경매개시결정 등기일 전에 대항력 요건(전입신고 + 점유)을 갖출 것</li>
<li>배당요구 종기까지 배당요구를 할 것</li>
</ol>`
      },
      {
        heading: '지역별 소액임차인 기준 (2023년 개정 기준)',
        content: `<table>
<thead><tr><th>지역</th><th>보증금 기준</th><th>최우선변제 금액</th></tr></thead>
<tbody>
<tr><td><strong>서울특별시</strong></td><td>1억 6,500만 원 이하</td><td>5,500만 원</td></tr>
<tr><td><strong>수도권 과밀억제권역, 세종, 용인, 화성, 김포</strong></td><td>1억 4,500만 원 이하</td><td>4,800만 원</td></tr>
<tr><td><strong>광역시, 안산, 광주(경기), 파주, 이천, 평택</strong></td><td>8,500만 원 이하</td><td>2,800만 원</td></tr>
<tr><td><strong>그 외 지역</strong></td><td>7,500만 원 이하</td><td>2,500만 원</td></tr>
</tbody>
</table>
<p>※ 위 금액은 2023년 개정 기준이며, 임대차 계약 체결 시점이 아닌 담보물권 설정 시점의 금액이 적용될 수 있습니다. 반드시 전문가와 확인하세요.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 보증금 일부만 최우선변제 받고 나머지는 어떻게 되나요?</strong></p>
<p>최우선변제금액(예: 서울 5,500만 원)은 최우선으로 배당받고, 나머지 보증금은 확정일자가 있다면 우선변제권(확정일자 기준 순위)으로 배당받습니다. 확정일자가 없다면 나머지는 일반 채권으로 처리됩니다.</p>
<p><strong>Q. 경매 후 이사한 경우 최우선변제를 받을 수 있나요?</strong></p>
<p>최우선변제를 받으려면 배당기일까지 임차주택을 점유하고 있어야 합니다. 경매개시결정 후 이사를 나가면 대항력과 최우선변제권을 잃을 수 있습니다.</p>
<p><strong>Q. 확정일자 없이도 최우선변제를 받을 수 있나요?</strong></p>
<p>네, 소액임차인 최우선변제는 확정일자 없이도 전입신고와 점유만으로 받을 수 있습니다(주임법 제8조).</p>
<p><strong>소액임차인이 여럿인 경우</strong>: 최우선변제로 지급되는 금액의 합계가 낙찰대금의 2분의 1을 초과할 수 없습니다(주임법 시행령 제11조). 이를 초과하는 경우 각 소액임차인은 채권액에 비례하여 안분 배당받습니다.</p>`
      },
      {
        heading: '관련 판례',
        content: `<p>대법원은 소액임차인 해당 여부는 임대차계약 체결 당시가 아니라 배당 요구 시 또는 배당 기준일 현재의 보증금을 기준으로 판단한다고 판시하고 있습니다. 따라서 계약 체결 후 보증금이 증액된 경우에도 실제 지급한 전체 보증금을 기준으로 소액임차인 여부를 판단합니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 배당요구 종기 내 신청 필수</strong> — 소액임차인도 배당요구 종기 내에 배당요구를 신청해야 합니다. 전입신고와 점유만으로는 자동 배당되지 않습니다.</p>
<p><strong>⚠️ 경매개시결정 전 전입신고 여부 확인</strong> — 전입신고일이 경매개시결정 등기일 이후라면 최우선변제를 받을 수 없습니다. 현재 전입신고가 되어 있는지, 그 날짜가 경매개시결정 전인지 반드시 확인하세요.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-29',
    title: '경매 입찰 참여 절차',
    meta: '경매 부동산에 입찰하는 방법, 보증금 준비, 낙찰 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>경매로 부동산을 낙찰받고 싶은데 어떻게 참여하는지 모른다</li>
<li>기일입찰과 기간입찰의 차이가 궁금하다</li>
<li>입찰 보증금은 얼마나 준비해야 하는지 알고 싶다</li>
<li>낙찰됐다가 취소되면 보증금을 돌려받을 수 있는지 궁금하다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>경매 입찰은 법원에 직접 출석하거나 기간입찰의 경우 우편으로 참여합니다. 채무자 본인은 입찰 불가.</li>
<li>입찰 보증금은 최저매각가격의 10분의 1을 법원에 납부해야 합니다(민집 제113조).</li>
<li>최고가 입찰자가 낙찰 예정자가 되며, 매각결정기일에 법원의 허가 결정 후 낙찰이 확정됩니다.</li>
</ul>`
      },
      {
        heading: '입찰 방법의 종류',
        content: `<table>
<thead><tr><th>구분</th><th>기일입찰</th><th>기간입찰</th></tr></thead>
<tbody>
<tr><td><strong>방법</strong></td><td>정해진 날짜에 법원 출석</td><td>정해진 기간(1주~1개월) 내 우편 또는 직접 제출</td></tr>
<tr><td><strong>입찰 장소</strong></td><td>해당 법원 경매실</td><td>법원 경매계 우편·방문</td></tr>
<tr><td><strong>입찰 결과</strong></td><td>당일 개찰</td><td>기간 종료 후 2일 이내 개찰</td></tr>
<tr><td><strong>주로 사용</strong></td><td>대부분의 부동산 경매</td><td>특수한 경우</td></tr>
</tbody>
</table>`
      },
      {
        heading: '기일입찰 단계별 절차',
        content: `<ol>
<li><strong>매각기일 확인</strong> — 대법원 경매정보(www.courtauction.go.kr)에서 사건번호로 매각기일 확인.</li>
<li><strong>입찰 전 권리분석</strong> — 등기사항증명서, 매각물건명세서, 현황조사보고서, 감정평가서 열람. 인수되는 권리 확인 필수.</li>
<li><strong>입찰보증금 준비</strong> — 최저매각가격의 10%(법원 보관금 수납증명서 또는 자기앞수표로 준비).</li>
<li><strong>입찰표 작성</strong> — 법원 비치 입찰표에 사건번호, 입찰자 정보, 입찰금액 기재. 금액은 한번 제출하면 변경 불가.</li>
<li><strong>입찰봉투 제출</strong> — 입찰표와 보증금을 봉투에 넣어 집행관에게 제출.</li>
<li><strong>개찰 및 최고가 결정</strong> — 집행관이 봉투를 개봉하여 최고가 입찰자 발표. 낙찰되지 않은 경우 보증금은 즉시 반환.</li>
<li><strong>매각결정기일</strong> — 통상 매각기일로부터 1주일 후. 법원의 매각허가 결정.</li>
</ol>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 입찰 보증금은 낙찰이 안 되면 돌려받나요?</strong></p>
<p>네, 낙찰되지 않은 입찰자의 보증금은 개찰 직후 즉시 반환됩니다. 낙찰자가 대금 납부 기한 내에 납부하지 않으면 보증금은 몰수됩니다(민집 제138조).</p>
<p><strong>Q. 대리인이 대신 입찰할 수 있나요?</strong></p>
<p>네, 위임장(인감도장 날인 + 인감증명서 첨부)을 통해 대리인이 입찰할 수 있습니다. 법무사에게 대리를 맡기는 경우도 많습니다.</p>
<p><strong>Q. 최저매각가격보다 낮은 금액으로 입찰해도 되나요?</strong></p>
<p>아닙니다. 입찰가는 반드시 최저매각가격 이상이어야 합니다. 최저매각가격 미만으로 입찰하면 무효 처리됩니다(민집 제114조).</p>
<p><strong>Q. 같은 금액으로 두 명이 입찰하면 어떻게 되나요?</strong></p>
<p>동일한 최고가를 기재한 입찰자가 여럿인 경우, 법원은 그 자리에서 재입찰을 실시합니다(민집 제115조). 재입찰에서도 동일한 경우에는 추첨으로 결정합니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚠️ 권리분석 없이 입찰하면 큰 손해</strong> — 경매 부동산에는 인수되는 권리(유치권, 선순위 전세권 등)가 있을 수 있어, 낙찰 후 예상치 못한 부담이 생길 수 있습니다. 입찰 전 반드시 매각물건명세서와 권리분석을 확인하세요.</p>
<p><strong>⚡ 대금 납부 기한 — 통상 낙찰 허가 확정 후 1개월 이내</strong> — 매각허가결정 확정 후 법원이 지정한 기한 내에 잔금을 납부해야 합니다. 기한 내 미납 시 보증금이 몰수되고 재매각이 진행됩니다(민집 제138조).</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-30',
    title: '낙찰 후 대금납부와 소유권이전',
    meta: '경매 낙찰 후 잔금 납부 절차, 소유권이전등기 촉탁, 취득세 납부를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>경매에서 낙찰됐는데 이제 어떻게 해야 하는지 모른다</li>
<li>대금 납부 방법과 기한이 궁금하다</li>
<li>대금 납부 후 소유권이전등기는 어떻게 되는지 알고 싶다</li>
<li>대출을 받아 낙찰대금을 납부하는 방법이 궁금하다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>매각허가결정 확정 후 법원이 지정한 기한 내에 잔금(낙찰가 - 보증금)을 납부합니다.</li>
<li>대금 납부 완료 즉시 소유권이 낙찰자에게 이전되며, 법원이 등기소에 소유권이전등기를 직권 촉탁합니다(민집 제135조).</li>
<li>납부 기한 내 미납 시 보증금 몰수 및 재매각이 이루어집니다(민집 제138조).</li>
</ul>`
      },
      {
        heading: '대금납부 단계별 절차',
        content: `<ol>
<li><strong>매각허가결정 확정</strong> — 이의·항고 기간(1주일) 경과 후 확정. 즉시 납부 계획 수립.</li>
<li><strong>대금지급기한 통지</strong> — 법원이 낙찰자에게 납부 기한 통지(민집 제142조 제1항).</li>
<li><strong>대출 준비 (필요한 경우)</strong> — 경락잔금 대출을 이용하는 경우, 금융기관과 사전 협의. 금융기관이 법원에 직접 납부하는 방식도 가능.</li>
<li><strong>잔금 납부</strong> — 법원 보관금 수납창구 또는 법원이 지정한 계좌로 납부(낙찰가 - 납부한 보증금).</li>
<li><strong>배당기일 지정·배당 실시</strong> — 대금납부 후 법원이 배당기일을 지정하여 각 채권자에게 배당.</li>
<li><strong>소유권이전등기 촉탁</strong> — 법원이 등기소에 직권으로 소유권이전등기 촉탁(민집 제135조). 낙찰자 별도 신청 불필요.</li>
<li><strong>말소등기 촉탁</strong> — 경매로 소멸하는 근저당권, 압류, 가압류 등 등기도 함께 말소됩니다.</li>
</ol>`
      },
      {
        heading: '첨부서류 (대금 납부 시)',
        content: `<table>
<thead><tr><th>서류명</th><th>준비처</th><th>비고</th></tr></thead>
<tbody>
<tr><td><strong>주민등록등본(개인)</strong></td><td>주민센터·인터넷</td><td>낙찰자 주소 확인용</td></tr>
<tr><td><strong>법인등기부등본(법인)</strong></td><td>등기소</td><td>대표자 확인용</td></tr>
<tr><td><strong>법인 인감증명서(법인)</strong></td><td>등기소</td><td>법인 명의 취득 시</td></tr>
<tr><td><strong>취득세 납부영수증</strong></td><td>시·군·구청</td><td>소유권이전등기 촉탁 위해 필요</td></tr>
</tbody>
</table>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 대금 납부 기한을 연장할 수 있나요?</strong></p>
<p>법원은 낙찰자의 신청에 의해 대금지급기한을 연장할 수 있습니다(민집 제142조 제2항). 연장은 2회까지 가능하며, 1회 연장 시 최대 3개월 범위 내에서 허용됩니다. 연장 신청은 반드시 납부 기한 전에 해야 합니다.</p>
<p><strong>Q. 대금 납부 후 소유권이전등기는 언제 완료되나요?</strong></p>
<p>법원이 등기소에 촉탁하면 통상 수 일 내(5~10일)에 등기가 완료됩니다. 등기 완료 여부는 대법원 인터넷등기소(www.iros.go.kr)에서 확인할 수 있습니다.</p>
<p><strong>Q. 취득세는 언제 납부해야 하나요?</strong></p>
<p>낙찰자(취득자)는 대금 납부일(취득일)로부터 <strong>60일 이내</strong>에 관할 시·군·구에 취득세를 신고·납부해야 합니다(지방세법 제20조). 60일을 초과하면 가산세가 부과됩니다. 취득세 납부영수증은 소유권이전등기 촉탁 전에 법원에 제출해야 합니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 대금 미납 시 보증금 몰수</strong> — 법원이 지정한 기한 내에 잔금을 납부하지 않으면 보증금이 몰수되고 재매각이 결정됩니다(민집 제138조). 대금 납부 계획을 미리 세우고 대출 준비도 사전에 진행하세요.</p>
<p><strong>⚠️ 취득세 과세표준</strong> — 경매 취득 시 취득세 과세표준은 낙찰가(사실상 취득가액)를 기준으로 합니다. 시가표준액보다 낙찰가가 높은 경우 낙찰가가 기준이 됩니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-20',
    title: '경매 취하와 취소의 차이',
    meta: '경매 취하(채권자 철회)와 취소(법원 결정)의 차이 및 요건을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul>
<li>빚을 갚으면 경매가 중단되는지 알고 싶다</li>
<li>경매 취하와 취소가 어떻게 다른지 헷갈린다</li>
<li>경매가 완료되기 전에 경매를 끝낼 수 있는 방법을 찾고 있다</li>
<li>일부만 변제해도 경매를 멈출 수 있는지 궁금하다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<ul>
<li>경매 취하(신청 취하)는 경매를 신청한 채권자가 스스로 신청을 철회하는 것으로, 채무자가 빚을 갚으면 채권자에게 취하를 요청할 수 있습니다.</li>
<li>경매 취소는 법원이 경매를 위법·부당하다고 판단하여 직권으로 또는 신청에 의해 절차를 종료시키는 것입니다.</li>
<li>낙찰자가 대금을 납부한 이후에는 취하나 취소가 불가능합니다.</li>
</ul>`
      },
      {
        heading: '경매 취하',
        content: `<p>경매 취하는 경매를 신청한 채권자가 신청을 철회하는 것입니다(민집 제266조 준용). 채무자가 채권 전액을 변제하거나 채권자와 협의가 이루어지면 채권자는 취하서를 법원에 제출합니다.</p>
<p>중요한 점: 낙찰자가 매각대금을 완납하기 전이라면 취하가 가능하지만, <strong>낙찰자가 대금을 납부한 이후에는 취하할 수 없습니다</strong>(민집 제266조 제2항).</p>`
      },
      {
        heading: '경매 취소',
        content: `<p>경매 취소는 법원이 결정으로 경매 절차를 종료시키는 것입니다. 주요 취소 사유:</p>
<ul>
<li>임의경매에서 담보권이 소멸했거나 존재하지 않는 경우(민집 제266조 제1항)</li>
<li>잉여주의에 따라 최저매각가격이 우선채권 합계를 넘기 어려운 경우(민집 제102조)</li>
<li>경매 신청이 법적으로 부적법한 경우</li>
<li>채무자의 파산선고로 인한 중지 및 취소</li>
</ul>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<p><strong>Q. 경매 신청 채권자 중 일부에게만 변제하면 경매가 취하되나요?</strong></p>
<p>경매를 신청한 채권자에게만 변제해도 그 채권자는 취하할 수 있지만, 다른 채권자가 이중경매를 신청했거나 배당요구를 한 경우 해당 채권자들의 채권도 해결해야 경매가 완전히 종결됩니다.</p>
<p><strong>Q. 낙찰 후에 채무를 갚으면 낙찰이 취소되나요?</strong></p>
<p>낙찰자가 대금을 납부한 이후에는 취하가 불가능합니다(민집 제266조 제2항). 이 단계에서는 소유권이 낙찰자에게 이전되므로 채무를 변제해도 부동산을 되찾을 수 없습니다.</p>
<p><strong>Q. 취하 후 같은 채권자가 다시 경매를 신청할 수 있나요?</strong></p>
<p>네, 경매 취하는 소멸 효과가 없으므로 채권자는 동일한 채권으로 다시 경매를 신청할 수 있습니다. 채권 자체를 변제하거나 채무에 관한 합의가 이루어져야 합니다.</p>
<p><strong>Q. 경매가 취소되면 이미 납부한 경매 관련 비용은 돌려받을 수 있나요?</strong></p>
<p>경매신청 시 납부한 집행비용은 원칙적으로 채무자가 부담합니다. 채권자의 귀책사유로 취소된 경우에는 채권자가 비용을 부담해야 할 수 있습니다.</p>`
      },
      {
        heading: '주의사항',
        content: `<p><strong>⚡ 대금 납부 전까지가 취하의 마지막 기회</strong> — 낙찰자가 대금을 납부하면 소유권이 이전되고 이후에는 취하가 불가능합니다. 경매 절차가 진행될수록 채무자의 선택지는 좁아지므로 조기에 대응하는 것이 중요합니다.</p>
<p><strong>⚠️ 취하 합의 시 서면으로 확인</strong> — 채권자와 구두로 취하를 합의했다가 채권자가 말을 바꾸는 경우가 있습니다. 취하 합의는 반드시 서면으로 작성하고 법원 접수 여부까지 확인해야 합니다.</p>`
      }
    ],
    laws: [],
    forms: []
  },
  {
    id: 'ef-31',
    title: '권리분석 — 인수되는 권리 vs 소멸되는 권리',
    meta: '말소기준권리, 인수·소멸 구분, 선순위 임차인 처리 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>경매 부동산에 근저당권, 전세권, 임차권 등이 있는데 낙찰 후 어떻게 되는지 모른다</li>
      <li>낙찰받으면 내가 인수해야 하는 권리가 있는지 확인하고 싶다</li>
      <li>말소기준권리가 무엇인지 알고 싶다</li>
      <li>선순위 임차인의 보증금을 내가 떠안아야 하는지 궁금하다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>경매에서 낙찰받으면 '말소기준권리'보다 앞서 등기된 권리는 낙찰자가 인수하고, 뒤에 등기된 권리는 대부분 소멸합니다.</li>
        <li>말소기준권리는 통상 가장 선순위의 저당권·근저당권·경매개시결정 등기입니다.</li>
        <li>선순위 임차인이 배당요구를 하지 않으면 임차권이 낙찰자에게 인수될 수 있어 주의가 필요합니다.</li>
      </ul>
    </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>말소기준권리</h3>
    <p>경매에서 말소기준권리는 등기부에서 소멸 여부의 기준이 되는 권리입니다. 주로 ① 저당권·근저당권, ② 담보가등기, ③ 경매개시결정 등기 중 가장 앞선 것이 말소기준권리가 됩니다.</p>
    <p>말소기준권리보다 <strong>후순위</strong>로 등기된 권리(후순위 저당권, 가압류, 임차권 등)는 원칙적으로 경매로 소멸합니다(소멸주의, 민집 제91조 제2항).</p>
    <p>말소기준권리보다 <strong>선순위</strong>로 등기된 권리(선순위 전세권, 선순위 임차권 등)는 원칙적으로 낙찰자가 인수합니다(인수주의).</p>
    <h3>주요 권리별 소멸·인수 여부</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>권리 종류</th><th>말소기준권리보다 선순위</th><th>말소기준권리보다 후순위</th></tr></thead>
      <tbody>
        <tr><td class="highlight">저당권·근저당권</td><td>소멸 (배당 받음)</td><td>소멸 (배당 받음)</td></tr>
        <tr><td class="highlight">전세권</td><td>배당요구 시 소멸, 미요구 시 인수</td><td>소멸</td></tr>
        <tr><td class="highlight">대항력 있는 임차권</td><td>배당요구 시 소멸, 미요구 시 인수</td><td>소멸 (대항력 상실)</td></tr>
        <tr><td class="highlight">가압류</td><td>소멸 (배당 받음)</td><td>소멸</td></tr>
        <tr><td class="highlight">지상권·지역권</td><td>인수</td><td>소멸</td></tr>
        <tr><td class="highlight">유치권</td><td colspan="2">등기 여부 무관하게 인수 (별도 검토 필요)</td></tr>
      </tbody>
    </table></div>
    <div class="case-box">
      <p class="case-title">📋 실제 권리분석 사례</p>
      <p>등기부에 ① 2020년 근저당권 1억 원, ② 2021년 가압류 5,000만 원, ③ 2019년 전세권 8,000만 원이 있는 부동산. 말소기준권리는 2019년 전세권보다 앞서지 않으므로 이 전세권은 선순위로 낙찰자에게 인수될 수 있습니다. 전세권자가 배당요구를 하지 않은 경우, 낙찰자는 8,000만 원 전세권을 인수합니다. 낙찰가 산정 시 이를 반드시 고려해야 합니다.</p>
    </div>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">유치권이 신고된 경우 무조건 인수해야 하나요?</p>
      <div class="qna-a">
        <p>유치권은 등기 여부와 관계없이 원칙적으로 낙찰자가 인수합니다(민법 제320조). 그러나 유치권의 성립 요건(유치권자의 점유, 채권과 물건의 견련성 등)이 충족되지 않은 허위 유치권 신고도 많습니다. 유치권 신고가 있는 경매 물건은 입찰 전 반드시 법무사 또는 변호사의 검토를 받는 것을 권장합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">선순위 임차인이 배당요구를 했는지 어떻게 확인하나요?</p>
      <div class="qna-a">
        <p>매각물건명세서에는 임차인 현황과 배당요구 여부가 기재됩니다. 대법원 경매정보 사이트(www.courtauction.go.kr)에서 사건번호를 검색하면 매각물건명세서를 열람할 수 있습니다. 현황조사보고서에도 실제 임차인 현황이 기재되어 있으므로 두 서류를 함께 검토하세요.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">경매 낙찰 후 근저당권이 자동으로 말소되나요?</p>
      <div class="qna-a">
        <p>네, 경매로 소멸하는 담보물권(근저당권 등)은 낙찰자가 대금을 납부하면 법원이 등기소에 말소등기를 직권 촉탁합니다(민집 제144조). 낙찰자가 별도로 말소 신청할 필요 없이 자동으로 처리됩니다. 다만 인수되는 권리는 말소되지 않습니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚠️ 인수되는 권리를 낙찰가에 반영하세요</p>
      <p>선순위 임차권, 전세권, 지상권 등 인수되는 권리가 있는 경우 그 금액을 낙찰가에서 제외하여 실질 취득 비용을 계산해야 합니다. 인수 부담을 고려하지 않고 낙찰받으면 예상치 못한 손해가 발생합니다.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">⚠️ 유치권 물건은 반드시 전문가 검토</p>
      <p>유치권 신고가 있는 물건은 낙찰 후 유치권자와 다툼이 발생할 수 있습니다. 유치권의 성립 요건을 면밀히 검토하지 않고 낙찰받으면 명도 지연이나 추가 비용이 발생할 수 있습니다.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_19_유치권대응.html" class="next-link"><span class="arrow">→</span><span class="title">유치권 신고 대응</span><span class="desc">유치권 신고 물건 낙찰 시 대처법</span></a>
      <a href="경매_24_현황조사매각명세서.html" class="next-link"><span class="arrow">→</span><span class="title">현황조사보고서 읽는 법</span><span class="desc">입찰 전 필수 서류 이해</span></a>
      <a href="경매_20_임차인대항력.html" class="next-link"><span class="arrow">→</span><span class="title">임차인의 대항력</span><span class="desc">임차인 권리와 낙찰자의 관계</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-32',
    title: '낙찰 후 명도 절차',
    meta: '인도명령·강제집행으로 점유자를 내보내는 방법과 협의 명도 전략을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>경매 부동산을 낙찰받았는데 기존 거주자(채무자, 임차인)가 나가지 않는다</li>
      <li>명도 절차와 인도명령, 강제집행의 차이가 궁금하다</li>
      <li>협의로 이사비를 주고 내보내는 방법이 일반적인지 알고 싶다</li>
      <li>강제 명도까지 걸리는 시간과 비용이 궁금하다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>낙찰자는 대금납부 후 소유자가 되므로 점유자(채무자, 임차인 등)에게 부동산 반환을 요구할 수 있습니다.</li>
        <li>협의가 안 되면 법원에 인도명령을 신청하고, 인도명령 결정 후에도 불응 시 강제집행(강제인도)을 신청합니다.</li>
        <li>명도 전 과정은 통상 대금납부 후 2~6개월 소요됩니다.</li>
      </ul>
    </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>명도 절차 개요</h3>
    <ol class="steps">
      <li><strong>대금납부 후 내용증명 발송</strong> — 낙찰자가 소유권자임을 통보하고 자진 이사 요청. 이사 비용 협의 병행.</li>
      <li><strong>협의 명도</strong> — 점유자와 협상하여 이사비(이전비) 지급 조건으로 자진 이사 유도. 현실적으로 가장 빠르고 저렴한 방법.</li>
      <li><strong>인도명령 신청</strong> — 협의 실패 시 법원에 인도명령 신청(민집 제136조). 대금납부일로부터 6개월 이내 신청해야 합니다.</li>
      <li><strong>인도명령 결정</strong> — 법원이 결정을 내리면 점유자에게 부동산 인도를 명합니다. 통상 신청 후 수 일~2주 내 결정.</li>
      <li><strong>강제집행 신청</strong> — 인도명령 결정에도 불응 시 집행관에게 강제집행(강제인도) 신청.</li>
      <li><strong>강제인도 실시</strong> — 집행관과 낙찰자 또는 대리인이 현장에서 강제로 점유자를 퇴거시키고 물건을 이전.</li>
    </ol>
    <h3>인도명령 신청 대상자</h3>
    <p>인도명령을 신청할 수 있는 점유자의 범위: ① 채무자(소유자), ② 낙찰자에게 대항할 수 없는 임차인(후순위, 배당요구로 보증금을 받은 임차인), ③ 채무자로부터 점유를 이전받은 제3자 등. 낙찰자에게 대항력이 있는 임차인(선순위, 배당 미요구)에 대해서는 인도명령 신청이 불가하고 별도 명도소송이 필요합니다(민집 제136조 제1항).</p>
    <div class="case-box">
      <p class="case-title">📋 실제 사례</p>
      <p>낙찰자 A씨는 대금납부 후 채무자에게 자진 이사를 요청했으나 채무자는 응하지 않았습니다. A씨는 인도명령을 신청하여 10일 후 결정을 받았고, 이후에도 채무자가 나가지 않자 강제집행을 신청했습니다. 집행관과 함께 현장을 방문하여 1개월 후 강제인도가 완료됐습니다.</p>
    </div>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">인도명령과 명도소송의 차이는 무엇인가요?</p>
      <div class="qna-a">
        <p>인도명령은 경매 낙찰자가 신청하는 간이한 절차로, 소송 없이 신속하게(통상 수 주 내) 결정을 받을 수 있습니다(민집 제136조). 명도소송은 일반 민사소송으로 통상 수 개월~1년 이상 소요됩니다. 인도명령을 신청할 수 없는 대항력 있는 임차인에 대해서는 명도소송을 제기해야 합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">인도명령 신청 기한이 있나요?</p>
      <div class="qna-a">
        <p>인도명령은 매각대금을 낸 날로부터 <strong>6개월 이내</strong>에 신청해야 합니다(민집 제136조 제1항 단서). 6개월이 지나면 인도명령을 신청할 수 없고 명도소송을 제기해야 합니다. 대금납부 후 가능한 한 빨리 신청하는 것이 좋습니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">이사비를 주지 않아도 내보낼 수 있나요?</p>
      <div class="qna-a">
        <p>네, 법적으로 낙찰자가 이사비를 지급할 의무는 없습니다. 인도명령 또는 강제집행을 통해 점유자를 퇴거시킬 수 있습니다. 그러나 실무상 협의 명도(이사비 지급)가 강제집행보다 시간과 비용이 적게 드는 경우가 많아 협의를 먼저 시도합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚡ 인도명령 신청 기한 — 대금납부 후 6개월</p>
      <p>대금납부일로부터 6개월이 지나면 인도명령을 신청할 수 없습니다. 점유자와 협의 중이라도 6개월이 가까워지면 인도명령을 먼저 신청해두는 것이 안전합니다.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">⚠️ 대항력 있는 임차인은 명도소송 필요</p>
      <p>선순위 임차인으로서 배당요구를 하지 않은 경우, 낙찰자가 임차권을 인수했으므로 인도명령을 신청할 수 없습니다. 이 경우 임대차 만료 후 명도소송을 제기해야 하며, 기간과 비용이 많이 듭니다.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_18_인도명령신청.html" class="next-link"><span class="arrow">→</span><span class="title">인도명령 신청 절차</span><span class="desc">인도명령 신청 방법과 서류</span></a>
      <a href="경매_20_임차인대항력.html" class="next-link"><span class="arrow">→</span><span class="title">임차인의 대항력</span><span class="desc">어떤 임차인이 낙찰자에게 대항할 수 있는가</span></a>
      <a href="경매_16_권리분석.html" class="next-link"><span class="arrow">→</span><span class="title">권리분석</span><span class="desc">인수되는 권리 사전 확인</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-33',
    title: '인도명령 신청 절차',
    meta: '인도명령 신청서 작성, 첨부서류, 강제인도 집행 절차를 단계별로 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>낙찰 부동산에 점유자가 있어 인도명령을 신청하려 한다</li>
      <li>인도명령 신청 서류와 절차가 궁금하다</li>
      <li>인도명령 결정 후에도 나가지 않으면 어떻게 하는지 알고 싶다</li>
      <li>강제집행(강제인도) 절차가 어떻게 진행되는지 궁금하다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>인도명령은 낙찰자가 대금납부 후 6개월 내에 집행법원에 신청하는 간이 절차입니다(민집 제136조).</li>
        <li>법원의 심문을 거쳐 결정이 나면 즉시항고(1주일 이내)가 없거나 기각되면 결정이 확정됩니다.</li>
        <li>결정 확정 후 집행관에게 강제집행을 신청하면 강제인도가 이루어집니다.</li>
      </ul>
    </div>
    <p>⚡ 인도명령은 대금납부일로부터 <strong>6개월 이내</strong>에 신청해야 합니다(민집 제136조 제1항).</p>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 인도명령 신청 절차</h3>
    <ol class="steps">
      <li><strong>신청서 작성</strong> — 집행법원에 인도명령 신청서 제출. 신청인(낙찰자), 상대방(점유자), 목적물, 신청 취지 기재.</li>
      <li><strong>첨부서류 준비</strong> — 아래 표 참조.</li>
      <li><strong>법원 접수 및 인지대 납부</strong> — 경매 담당 법원 경매계에 접수.</li>
      <li><strong>심문 (필요한 경우)</strong> — 법원이 필요하다고 인정하면 상대방 심문. 단순한 경우 서면 심리로 결정.</li>
      <li><strong>인도명령 결정</strong> — 통상 신청 후 수 일~2주 내 결정. 상대방에게도 결정문 송달.</li>
      <li><strong>즉시항고 기간 경과</strong> — 결정 후 1주일 내 즉시항고가 없으면 확정.</li>
      <li><strong>강제집행 신청</strong> — 결정 확정 후 집행관에게 강제집행 신청 가능.</li>
    </ol>
    <h3>3-2. 첨부서류</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>서류명</th><th>발급기관</th><th>비고</th></tr></thead>
      <tbody>
        <tr><td class="highlight">인도명령 신청서</td><td>신청인 작성</td><td>법원 양식 또는 법무사 작성</td></tr>
        <tr><td class="highlight">매각허가결정문 사본</td><td>집행법원</td><td>경매 사건 확인용</td></tr>
        <tr><td class="highlight">대금납부 영수증</td><td>법원 보관금 수납 영수증</td><td>대금납부일 확인</td></tr>
        <tr><td class="highlight">등기사항증명서</td><td>등기소·인터넷등기소</td><td>소유권이전등기 완료 확인</td></tr>
        <tr><td class="highlight">점유자 확인 자료 (필요 시)</td><td>주민등록등본, 현황조사보고서</td><td>상대방 특정용</td></tr>
      </tbody>
    </table></div>
    <h3>3-3. 강제집행(강제인도) 절차</h3>
    <p>인도명령 결정이 확정되면 낙찰자는 집행관에게 강제집행을 신청합니다. 집행관은 집행 일시를 지정하고, 낙찰자(또는 대리인)와 함께 현장을 방문하여 점유자의 물건을 이전하고 부동산을 낙찰자에게 인도합니다. 이 과정에서 집행비용(집행관 수수료, 이사짐 운반비 등)이 발생하며, 이 비용은 원칙적으로 점유자가 부담합니다.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">인도명령 결정 후 점유자가 즉시항고를 하면 어떻게 되나요?</p>
      <div class="qna-a">
        <p>점유자가 즉시항고를 하면 상급심(항소법원)에서 다시 판단합니다. 즉시항고 기간은 결정 고지일로부터 1주일입니다. 즉시항고가 기각되면 결정이 확정되고 강제집행이 가능해집니다. 즉시항고를 하더라도 별도 집행정지 결정이 없으면 집행은 계속 진행됩니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">점유자의 물건은 강제집행 시 어떻게 처리되나요?</p>
      <div class="qna-a">
        <p>강제집행 시 점유자의 물건은 집행관이 적절한 장소(창고 등)에 보관합니다. 점유자가 일정 기간 내 찾아가지 않으면 집행관이 법원의 허가를 받아 매각 또는 폐기 처리할 수 있습니다. 이 비용은 점유자가 부담하며, 비용을 낙찰자가 선지급한 경우 점유자에게 구상할 수 있습니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">점유자가 이미 이사를 나간 상태면 인도명령이 필요 없나요?</p>
      <div class="qna-a">
        <p>점유자가 자진 이사를 나간 경우에는 인도명령이 필요 없고 열쇠를 인계받아 점유를 취득하면 됩니다. 다만 실제로 이사가 완료됐는지(물건이 모두 반출됐는지) 확인하고, 새 자물쇠로 교체하여 재점유를 방지하세요.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚡ 인도명령 신청 기한 — 대금납부 후 6개월</p>
      <p>6개월이 경과하면 인도명령을 신청할 수 없습니다(민집 제136조 제1항 단서). 협의 중이라도 기한을 초과하면 명도소송으로만 해결해야 합니다.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">⚠️ 자력 구제 금지</p>
      <p>낙찰자가 법적 절차 없이 점유자의 물건을 강제로 치우거나 자물쇠를 임의로 교체하는 행위는 자력구제로서 불법입니다. 반드시 법적 절차를 통해 명도해야 합니다.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_17_낙찰후명도.html" class="next-link"><span class="arrow">→</span><span class="title">낙찰 후 명도 절차</span><span class="desc">협의 명도부터 강제집행까지</span></a>
      <a href="경매_20_임차인대항력.html" class="next-link"><span class="arrow">→</span><span class="title">임차인의 대항력</span><span class="desc">인도명령 신청 가능 여부 판단</span></a>
      <a href="경매_15_대금납부소유권이전.html" class="next-link"><span class="arrow">→</span><span class="title">대금납부와 소유권이전</span><span class="desc">대금납부 절차 확인</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-34',
    title: '유치권 신고와 낙찰자의 대응',
    meta: '유치권 성립 요건 확인, 허위 유치권 판별, 낙찰 후 대응 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>입찰하려는 부동산에 유치권 신고가 있다</li>
      <li>유치권이 성립하는 요건이 무엇인지 알고 싶다</li>
      <li>낙찰 후 유치권자와 어떻게 대응해야 하는지 모른다</li>
      <li>허위 유치권인지 진짜인지 구분하는 방법이 궁금하다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>유치권은 타인의 물건에 관하여 생긴 채권을 가진 자가 그 채권을 변제받을 때까지 물건을 유치하는 권리입니다(민법 제320조).</li>
        <li>경매에서 유치권은 낙찰자가 인수합니다. 즉 낙찰자가 유치권자의 채권을 변제해야 물건을 돌려받을 수 있습니다.</li>
        <li>경매 직전에 설정된 유치권은 허위가 많으므로, 성립 요건 충족 여부를 면밀히 검토해야 합니다.</li>
      </ul>
    </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>유치권의 성립 요건</h3>
    <p>유치권이 유효하게 성립하려면 다음 요건이 모두 충족되어야 합니다(민법 제320조):</p>
    <ol style="padding-left:20px;margin-bottom:14px;">
      <li>타인 소유의 물건·유가증권을 점유할 것 (현실 점유 필요)</li>
      <li>그 물건에 관하여 생긴 채권이 있을 것 (채권과 물건 간 견련성)</li>
      <li>채권의 변제기가 도래했을 것</li>
      <li>점유가 불법행위로 인한 것이 아닐 것</li>
      <li>유치권 배제 특약이 없을 것</li>
    </ol>
    <h3>경매에서 유치권이 문제되는 이유</h3>
    <p>경매 부동산에서 유치권이 신고되는 경우가 많은 이유는, 경매가 시작되면 낙찰가가 낮아지므로 채무자(또는 관련자)가 허위·과장된 유치권을 신고하여 입찰자를 위협하고 낙찰을 방해하는 경우가 있기 때문입니다.</p>
    <div class="case-box">
      <p class="case-title">📋 허위 유치권의 주요 패턴</p>
      <p>① 점유 없이 유치권 신고: 실제로 건물을 점유하지 않으면서 공사 채권을 주장. ② 경매개시결정 후 점유 취득: 압류 효력 발생 이후 점유를 취득한 경우 유치권 불성립(대판 2005. 8. 19. 2005다22688). ③ 채권과 물건 간 견련성 없음: 해당 건물과 무관한 채권을 유치권으로 주장.</p>
    </div>
    <h3>낙찰 후 유치권 대응 방법</h3>
    <p>① 유치권 성립 요건 검토: 점유 여부, 견련성, 점유 취득 시기를 확인합니다. ② 유치권부존재 확인의 소: 유치권이 성립하지 않는다고 판단되면 소송으로 다툽니다. ③ 변제와 합의: 유치권이 성립한다면 채권 금액을 협상하여 조기에 해결합니다.</p>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">경매개시결정 이후에 유치권자가 점유를 취득했다면?</p>
      <div class="qna-a">
        <p>대법원은 경매개시결정으로 압류의 효력이 발생한 후에 채무자가 유치권자에게 목적 부동산의 점유를 이전한 경우, 그 유치권은 경매절차의 매수인(낙찰자)에게 대항할 수 없다고 판시하였습니다(대판 2005. 8. 19. 2005다22688). 따라서 경매개시결정 등기일 이후 점유가 이루어진 유치권은 낙찰자가 인수할 필요가 없습니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">유치권이 신고된 부동산은 입찰하지 않는 것이 좋은가요?</p>
      <div class="qna-a">
        <p>반드시 그런 것은 아닙니다. 유치권 신고가 있더라도 ① 허위로 판명되는 경우, ② 채권 금액이 작아 변제 후에도 수익성이 있는 경우에는 낙찰이 유리할 수 있습니다. 그러나 유치권 성립 여부 판단은 전문적 지식이 필요하므로, 입찰 전 법무사 또는 변호사와 반드시 상담하세요.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">공사업자가 공사대금 미수로 유치권을 주장하는 경우 어떻게 하나요?</p>
      <div class="qna-a">
        <p>건물 신축·수리 공사를 한 업자가 공사대금 미수를 이유로 건물을 유치한다고 주장하는 경우, 채권과 건물 사이의 견련성이 인정될 수 있습니다. 그러나 실제 점유 여부, 공사 범위와 채권액의 적정성 등을 면밀히 확인해야 합니다. 유치권자가 실제로 건물을 점유하고 있는지 현장 확인이 중요합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
      <p class="ruling-header">경매개시결정 후 점유 취득 유치권의 효력</p>
      <p>대법원은 경매개시결정으로 인한 압류의 효력이 발생한 후에 채무자가 점유를 이전하여 성립시킨 유치권은 경매절차의 매수인에게 대항할 수 없다고 판시하였습니다(대판 2005. 8. 19. 2005다22688). 이는 압류의 효력을 보호하기 위한 것입니다.</p>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚠️ 유치권 신고 물건 — 반드시 전문가와 검토</p>
      <p>유치권이 신고된 경매 물건은 낙찰 후 분쟁이 발생할 위험이 높습니다. 입찰 전 현황조사보고서, 매각물건명세서를 통해 유치권 내용을 확인하고, 법무사 또는 변호사와 성립 가능성을 검토하세요.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">⚠️ 입찰가 산정 시 유치권 금액 반영</p>
      <p>유치권이 성립 가능성이 있다면, 유치권 채권 금액을 낙찰가에서 차감하여 실질 취득 비용을 계산해야 합니다. 유치권 금액을 반영하지 않고 낙찰받으면 예상 외 손해가 발생합니다.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_16_권리분석.html" class="next-link"><span class="arrow">→</span><span class="title">권리분석</span><span class="desc">인수·소멸되는 권리 전체 파악</span></a>
      <a href="경매_17_낙찰후명도.html" class="next-link"><span class="arrow">→</span><span class="title">낙찰 후 명도 절차</span><span class="desc">점유자 퇴거 방법</span></a>
      <a href="경매_24_현황조사매각명세서.html" class="next-link"><span class="arrow">→</span><span class="title">현황조사보고서 읽는 법</span><span class="desc">입찰 전 필수 서류 이해</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-35',
    title: '임차인의 대항력',
    meta: '전입신고·확정일자로 대항력을 갖춘 임차인의 권리와 경매에서의 처리 방법을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>세 들어 사는 집이 경매에 넘어갔는데 보증금을 지킬 수 있는지 알고 싶다</li>
      <li>대항력이 있는 임차인과 없는 임차인의 차이가 궁금하다</li>
      <li>낙찰자가 내 보증금을 돌려줘야 하는지 확인하고 싶다</li>
      <li>전입신고와 확정일자가 경매에서 어떤 의미를 갖는지 알고 싶다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>대항력은 임차인이 주택에 대한 자신의 권리를 제3자(낙찰자 등)에게 주장할 수 있는 효력입니다.</li>
        <li>대항력 요건: 주택의 인도(점유) + 주민등록(전입신고) → 다음날 0시부터 대항력 발생(주임법 제3조 제1항).</li>
        <li>대항력 있는 임차인이 배당에서 보증금을 전액 받지 못했다면 그 차액을 낙찰자에게 요구할 수 있습니다.</li>
      </ul>
    </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>대항력의 의미</h3>
    <p>주택임대차보호법 제3조에 따라 임차인이 ① 주택을 실제 인도받아 점유하고 ② 전입신고를 마치면, 그 다음 날 0시부터 대항력이 생깁니다. 대항력이 있으면 주택 소유자가 바뀌더라도(경매 낙찰 포함) 임차인은 임대차 기간 동안 계속 거주할 수 있고, 보증금 반환을 새 소유자에게 요구할 수 있습니다.</p>
    <h3>대항력과 경매의 관계</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>구분</th><th>대항력 있는 임차인 (선순위)</th><th>대항력 없는 임차인 (후순위)</th></tr></thead>
      <tbody>
        <tr><td class="highlight">전입신고 시점</td><td>말소기준권리보다 앞선 날</td><td>말소기준권리보다 늦은 날</td></tr>
        <tr><td class="highlight">배당요구 미신청 시</td><td>임차권 낙찰자에게 인수</td><td>임차권 소멸, 보증금 반환 불가</td></tr>
        <tr><td class="highlight">배당요구 신청 시</td><td>배당 받고 임차권 소멸</td><td>배당 받고 임차권 소멸</td></tr>
        <tr><td class="highlight">배당 부족분</td><td>낙찰자에게 청구 가능</td><td>낙찰자에게 청구 불가</td></tr>
      </tbody>
    </table></div>
    <div class="case-box">
      <p class="case-title">📋 실제 사례 — 대항력 있는 임차인</p>
      <p>A씨는 2020년 1월 아파트에 입주하여 전입신고를 했고(대항력 발생: 2020. 1. 2.), 이후 2020년 3월 은행이 근저당권을 설정했습니다. 아파트가 경매에 넘어갔고 A씨는 배당에서 보증금 1억 원 중 6,000만 원만 받았습니다. 나머지 4,000만 원은 대항력에 기하여 낙찰자에게 인수됐으므로, 낙찰자는 A씨에게 4,000만 원을 지급하거나 A씨의 거주를 인정해야 합니다.</p>
    </div>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">전입신고는 되어 있는데 확정일자가 없다면?</p>
      <div class="qna-a">
        <p>전입신고(대항력)와 확정일자(우선변제권)는 별개입니다. 전입신고만 있고 확정일자가 없다면 대항력은 있지만 우선변제권이 없습니다. 즉 경매에서 배당을 받으려면 순위가 뒤로 밀리고, 배당이 부족하면 낙찰자에게 보증금 잔액을 주장(대항력 행사)해야 합니다. 확정일자는 주민센터나 법원에서 임대차계약서에 날인받을 수 있습니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">경매 중에 이사를 나가도 대항력이 유지되나요?</p>
      <div class="qna-a">
        <p>이사를 나가면 점유 요건이 사라지므로 대항력이 소멸합니다. 대항력을 유지하려면 배당받을 때까지 주택을 점유(거주)하고 전입신고 상태를 유지해야 합니다. 배당 전에 이사를 나가면 보증금을 받지 못한 상태에서 대항력마저 잃게 되어 크게 불리해집니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">보증금을 일부만 배당받은 경우 나머지는 어떻게 받나요?</p>
      <div class="qna-a">
        <p>대항력 있는 임차인이 배당에서 보증금 전액을 받지 못한 경우, 그 미지급 보증금에 대한 임차권은 낙찰자에게 인수됩니다. 따라서 낙찰자는 나머지 보증금을 지급하고 임차인을 퇴거시키거나, 임차 기간 동안 임차인의 거주를 인정해야 합니다. 낙찰자와 협의하여 보증금을 받고 이사하는 것이 일반적입니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚡ 배당요구 종기 내 신청 필수</p>
      <p>대항력이 있더라도 배당을 받으려면 종기 내에 배당요구를 해야 합니다. 배당요구 없이 대항력만 행사하면 임차권이 낙찰자에게 인수되므로, 전략적으로 판단한 후 결정하세요.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">⚠️ 경매 중 이사 금지</p>
      <p>배당받기 전에 이사를 나가면 대항력이 소멸합니다. 반드시 배당을 받은 후 이사하거나, 이사 전에 법무사와 상담하여 권리 보호 방법을 확인하세요.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_22_임차인배당요구.html" class="next-link"><span class="arrow">→</span><span class="title">임차인 배당요구 신청</span><span class="desc">배당받는 방법과 절차</span></a>
      <a href="경매_13_소액임차인최우선변제.html" class="next-link"><span class="arrow">→</span><span class="title">소액임차인 최우선변제</span><span class="desc">보증금 최우선 배당 조건</span></a>
      <a href="경매_23_임대차종료이사.html" class="next-link"><span class="arrow">→</span><span class="title">임대차계약 종료와 이사</span><span class="desc">경매 후 이사 기한과 절차</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-36',
    title: '전세권자의 경매 신청',
    meta: '전세권 등기가 있는 경우 직접 임의경매를 신청하는 절차와 전략을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>전세 계약이 끝났는데 집주인이 전세금을 돌려주지 않는다</li>
      <li>전세권 등기가 되어 있어 직접 경매를 신청할 수 있는지 알고 싶다</li>
      <li>전세권 경매에서 내 보증금을 받을 수 있는지 확인하고 싶다</li>
      <li>전세권 등기가 없는 경우에는 어떻게 해야 하는지 궁금하다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>전세권 등기가 된 전세권자는 전세금 반환이 안 되면 판결 없이 직접 임의경매를 신청할 수 있습니다(민법 제318조, 민집 제264조).</li>
        <li>전세권 등기가 없는 임차인(전입신고·확정일자만 있는 경우)은 직접 경매 신청이 불가능하고, 판결을 먼저 받아야 합니다.</li>
        <li>전세권자로서 경매를 신청하거나 배당요구를 할 때는 전략적 선택이 필요합니다.</li>
      </ul>
    </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>전세권 등기가 있는 경우</h3>
    <p>민법 제318조는 전세권자가 전세금 반환을 받지 못하면 목적물에 대한 경매를 청구할 수 있다고 규정합니다. 이에 따라 전세권자는 판결(집행권원) 없이 전세권 등기만으로 임의경매를 신청할 수 있습니다.</p>
    <p>신청 요건: ① 전세권의 존속기간이 만료됐을 것, ② 전세금 반환을 청구했으나 집주인이 거절했을 것(또는 반환 기일 도과).</p>
    <h3>전세권 등기가 없는 경우</h3>
    <p>주임법상 임차인(전입신고+확정일자, 전세권 등기 없음)은 임의경매를 신청할 수 없습니다. 이 경우 ① 전세금반환청구 소송을 제기하여 판결을 받은 후 강제경매 신청, 또는 ② 이미 경매가 진행 중이라면 배당요구를 신청하는 방법을 이용해야 합니다.</p>
    <h3>전세권자의 배당 전략</h3>
    <p>전세권이 선순위(말소기준권리보다 앞선 경우)인 경우, 전세권자는 ① 경매를 직접 신청하는 방법과 ② 기존 경매에 배당요구를 하는 방법 중 선택할 수 있습니다. 선순위 전세권자가 배당요구를 하면 전세권이 소멸하고 보증금을 배당받을 수 있습니다. 배당요구를 하지 않으면 낙찰자에게 전세권이 인수됩니다.</p>
    <div class="case-box">
      <p class="case-title">📋 실제 사례</p>
      <p>이씨는 2019년 아파트에 전세권 등기를 하고 3억 원의 전세금을 지급했습니다. 2년 후 전세 계약이 만료됐으나 집주인이 자금 문제로 전세금을 반환하지 못했습니다. 이씨는 법원에 전세권에 기한 임의경매를 신청했고, 경매 절차에서 배당요구를 통해 전세금 3억 원을 회수했습니다.</p>
    </div>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">전세권 등기와 주임법상 임차권을 동시에 갖는 경우 어떻게 해야 하나요?</p>
      <div class="qna-a">
        <p>전세권 등기와 주임법상 임차인 지위를 동시에 갖는 경우, 임차인으로서 배당요구를 했다 해도 전세권자로서 배당요구까지 한 것으로 볼 수 없습니다(대판 2010. 6. 24. 2009다40790). 각 지위별로 어떤 방법이 유리한지 계산하고, 법무사와 상담하여 적합한 전략을 선택하는 것이 중요합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">전세권 경매 신청 후 집주인이 전세금을 갚으면 어떻게 되나요?</p>
      <div class="qna-a">
        <p>경매 신청 후라도 집주인이 전세금 전액(원금+비용)을 변제하면 전세권자는 경매를 취하할 수 있습니다. 낙찰자가 대금을 납부하기 전까지는 취하가 가능합니다. 취하 시 경매개시결정 등기가 말소되고 전세권은 계속 유효합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚡ 전세권 존속기간 만료 후 신청 가능</p>
      <p>전세권에 기한 임의경매는 전세권의 존속기간이 만료된 후에 신청해야 합니다. 존속기간 중에는 경매를 신청할 수 없습니다.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">⚠️ 선순위 전세권의 배당요구 여부 신중 결정</p>
      <p>선순위 전세권자가 배당요구를 하면 전세권이 소멸됩니다. 배당요구를 하지 않으면 낙찰자에게 전세권이 인수되어 전세금 반환을 요구할 수 있습니다. 어느 쪽이 유리한지는 낙찰가와 선순위 채권 규모에 따라 다르므로 전문가와 상담하세요.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_07_임의경매신청절차.html" class="next-link"><span class="arrow">→</span><span class="title">임의경매 신청 절차</span><span class="desc">전세권으로 경매 신청하는 방법</span></a>
      <a href="경매_22_임차인배당요구.html" class="next-link"><span class="arrow">→</span><span class="title">임차인 배당요구 신청</span><span class="desc">경매에서 배당받는 방법</span></a>
      <a href="경매_20_임차인대항력.html" class="next-link"><span class="arrow">→</span><span class="title">임차인의 대항력</span><span class="desc">전세권 없는 임차인의 권리</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-37',
    title: '임차인 배당요구 신청',
    meta: '보증금을 받기 위한 배당요구 신청 절차, 서류, 기한을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>세 들어 사는 집이 경매에 넘어가 보증금을 받고 싶다</li>
      <li>임차인으로서 배당요구 신청 방법을 알고 싶다</li>
      <li>전입신고, 확정일자가 경매에서 어떤 역할을 하는지 궁금하다</li>
      <li>배당요구 기한과 신청 서류가 무엇인지 확인하고 싶다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>임차인이 경매에서 보증금을 받으려면 배당요구 종기 내에 법원에 배당요구를 신청해야 합니다.</li>
        <li>전입신고 + 확정일자를 갖춘 임차인은 확정일자 순위에 따라 우선변제를 받을 수 있습니다(주임법 제3조의2).</li>
        <li>배당받지 못한 보증금 잔액이 있다면 대항력(선순위 임차인)에 기하여 낙찰자에게 반환 요구 가능.</li>
      </ul>
    </div>
    <p>⚡ 배당요구 종기는 통상 경매개시결정 등기일로부터 2~3개월 후입니다. 경매가 시작됐다는 소식을 듣는 즉시 법원에 확인하세요.</p>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 임차인 배당요구 신청 절차</h3>
    <ol class="steps">
      <li><strong>배당요구 종기 확인</strong> — 대법원 경매정보(www.courtauction.go.kr)에서 사건번호 검색 또는 법원 직접 문의.</li>
      <li><strong>신청서 작성</strong> — 법원 비치 '권리신고 및 배당요구 신청서' 양식 작성. 채권 원인(임대차보증금), 보증금 액수, 전입신고일, 확정일자 기재.</li>
      <li><strong>첨부서류 준비</strong> — 아래 표 참조.</li>
      <li><strong>법원 경매계 접수</strong> — 배당요구 종기 당일까지 접수. 우편 접수 시 종기 당일 도달 필요.</li>
    </ol>
    <h3>3-2. 첨부서류</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
      <tbody>
        <tr><td class="highlight">임대차계약서 사본</td><td>임차인 보관</td><td>계약 당사자·금액·기간 확인</td></tr>
        <tr><td class="highlight">주민등록등본 (또는 초본)</td><td>주민센터·인터넷</td><td>전입신고일 확인</td></tr>
        <tr><td class="highlight">임대차계약서의 확정일자 확인</td><td>계약서 원본</td><td>주민센터·법원 날인 확인일</td></tr>
        <tr><td class="highlight">권리신고 및 배당요구 신청서</td><td>법원 비치 양식</td><td>전산양식 A3440, A3441</td></tr>
        <tr><td class="highlight">임차권등기명령 결정문 (있는 경우)</td><td>법원</td><td>이미 등기된 경우 첨부</td></tr>
      </tbody>
    </table></div>
    <div class="case-box">
      <p class="case-title">📋 실제 사례</p>
      <p>박씨는 보증금 1억 원, 전입신고 2021. 3. 5., 확정일자 2021. 3. 5.인 임차인입니다. 집이 경매에 넘어가 배당요구 종기(2023. 6. 30.)를 확인하고, 5월 말에 법원에 배당요구 신청서와 임대차계약서, 주민등록등본을 제출했습니다. 배당에서 확정일자 순위에 따라 우선변제를 받아 보증금 전액을 회수했습니다.</p>
    </div>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">확정일자를 늦게 받은 경우 배당에서 불이익을 받나요?</p>
      <div class="qna-a">
        <p>네, 우선변제권은 전입신고일과 확정일자 중 늦은 날을 기준으로 효력이 발생합니다. 예를 들어 전입신고는 빨랐는데 확정일자를 나중에 받은 경우, 확정일자 취득일을 기준으로 우선변제 순위가 결정됩니다. 따라서 임대차계약 체결 즉시 확정일자를 받는 것이 중요합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">임차권등기명령을 받은 경우에도 배당요구를 해야 하나요?</p>
      <div class="qna-a">
        <p>임차권등기명령에 의해 임차권 등기가 첫 경매개시결정 등기 전에 이루어진 경우, 해당 임차인은 별도의 배당요구 없이도 배당받을 채권자에 속합니다(대판 2005. 9. 15. 2005다33039). 그러나 경매개시결정 후 임차권 등기가 된 경우에는 배당요구가 필요합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">배당요구를 했는데 보증금을 전부 받지 못하면 어떻게 되나요?</p>
      <div class="qna-a">
        <p>대항력 있는 임차인(말소기준권리보다 전입신고가 앞선 경우)은 배당받지 못한 잔액에 대해 낙찰자에게 반환을 요구할 수 있습니다. 반면 대항력 없는 임차인은 배당받지 못한 금액에 대해 낙찰자에게 요구할 수 없습니다. 따라서 대항력 유무를 먼저 확인하는 것이 중요합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚡ 배당요구 종기 — 하루라도 늦으면 안 됩니다</p>
      <p>배당요구 종기를 1일이라도 넘기면 배당받을 수 없습니다. 경매 사실을 알자마자 법원 경매정보 사이트나 법원에 종기 날짜를 확인하세요.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">⚠️ 배당요구 전 이사 금지</p>
      <p>배당을 받기 전에 이사하면 대항력이 소멸합니다. 반드시 배당을 받은 후 이사하고, 불가피하게 이사해야 한다면 법무사와 상담하여 임차권등기명령 등을 통해 권리를 보전하는 방법을 확인하세요.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_20_임차인대항력.html" class="next-link"><span class="arrow">→</span><span class="title">임차인의 대항력</span><span class="desc">내 전입신고가 선순위인지 확인</span></a>
      <a href="경매_13_소액임차인최우선변제.html" class="next-link"><span class="arrow">→</span><span class="title">소액임차인 최우선변제</span><span class="desc">소액 보증금 우선 배당 조건</span></a>
      <a href="경매_23_임대차종료이사.html" class="next-link"><span class="arrow">→</span><span class="title">임대차계약 종료와 이사</span><span class="desc">경매 후 이사 기한과 절차</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-38',
    title: '경매 후 임대차 종료와 이사 기한',
    meta: '낙찰 후 임차인 유형별 이사 기한, 대항력 행사 방법, 임차권등기명령을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>세 들어 사는 집이 경매로 낙찰됐는데 언제까지 이사해야 하는지 모른다</li>
      <li>낙찰자가 즉시 나가라고 요구하는데 법적으로 얼마나 버틸 수 있는지 알고 싶다</li>
      <li>이사비(명도비)를 낙찰자에게 요구할 수 있는지 궁금하다</li>
      <li>인도명령을 받으면 바로 강제로 나가야 하는지 알고 싶다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>낙찰자가 대금을 납부하면 소유자가 바뀌므로, 대항력 없는 임차인은 낙찰자의 요구에 따라 이사해야 합니다.</li>
        <li>대항력 있는 임차인은 보증금을 돌려받을 때까지 계속 거주할 수 있는 법적 권리가 있습니다.</li>
        <li>인도명령 결정이 나더라도 즉시항고나 협의를 통해 시간을 벌 수 있습니다.</li>
      </ul>
    </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>이사 기한의 법적 구조</h3>
    <p>낙찰자가 대금을 납부하면 소유권이 이전됩니다. 이후 낙찰자가 인도명령을 신청하면 법원은 채무자 및 대항력 없는 임차인에게 부동산 인도를 명합니다. 인도명령 결정 후에도 불응 시 강제집행이 이루어집니다.</p>
    <h3>임차인 유형별 이사 기한</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>임차인 유형</th><th>이사 기한</th><th>법적 근거</th></tr></thead>
      <tbody>
        <tr><td class="highlight">대항력 없는 임차인</td><td>낙찰자 요구 시 또는 인도명령 확정 후</td><td>민집 제136조</td></tr>
        <tr><td class="highlight">대항력 있는 임차인 (보증금 전액 배당)</td><td>배당 후 낙찰자 요구 시</td><td>주임법 제3조</td></tr>
        <tr><td class="highlight">대항력 있는 임차인 (보증금 미배당)</td><td>낙찰자가 보증금을 지급할 때까지</td><td>주임법 제3조</td></tr>
        <tr><td class="highlight">선순위 전세권자 (배당요구 없음)</td><td>낙찰자가 전세금을 지급할 때까지</td><td>민법 제303조</td></tr>
      </tbody>
    </table></div>
    <div class="case-box">
      <p class="case-title">📋 실제 사례 — 대항력 있는 임차인</p>
      <p>김씨(보증금 1억, 선순위 임차인)는 경매에서 6,000만 원만 배당받았습니다. 낙찰자 A씨가 즉시 이사 요구를 했으나, 김씨는 미배당 보증금 4,000만 원을 A씨에게 요구했습니다. A씨와 협의하여 A씨가 4,000만 원을 지급하는 조건으로 1개월 후 이사하기로 합의했습니다.</p>
    </div>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">인도명령 결정을 받으면 즉시 나가야 하나요?</p>
      <div class="qna-a">
        <p>인도명령 결정에 대해 1주일 이내에 즉시항고를 할 수 있으며, 항고 중에는 일정 기간 집행이 유예될 수 있습니다. 항고가 기각되면 결정이 확정되고, 그 후 낙찰자가 강제집행을 신청하면 통상 수 주~수 개월 내에 강제인도가 이루어집니다. 실무상 인도명령 결정 후 강제집행까지 2~3개월의 여유가 있는 경우가 많습니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">이사비를 요구할 법적 권리가 있나요?</p>
      <div class="qna-a">
        <p>대항력 없는 임차인은 낙찰자에게 이사비를 법적으로 요구할 권리는 없습니다. 그러나 실무상 낙찰자는 빠른 명도를 위해 자발적으로 이사비를 지급하는 경우가 많습니다. 협상을 통해 합리적인 이사비를 받고 이사하는 것이 쌍방에게 유리할 수 있습니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">경매 중 이사를 나가면 보증금은 어떻게 받나요?</p>
      <div class="qna-a">
        <p>이사를 나가면 대항력이 소멸하여 낙찰자에게 보증금 반환 요구가 어려워집니다. 단, 이사 전에 임차권등기명령 신청을 통해 임차권 등기를 마치면 이사 후에도 대항력이 유지됩니다(주임법 제3조의3). 이사가 불가피하다면 반드시 임차권등기명령을 먼저 신청하세요.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚠️ 배당 전 이사 = 대항력 소멸</p>
      <p>배당을 받기 전에 이사하면 대항력이 소멸하여 보증금을 받지 못한 상태에서 법적 권리를 잃게 됩니다. 반드시 배당 후 또는 낙찰자로부터 보증금을 받은 후 이사하세요.</p>
    </div>
    <div class="warn-box">
      <p class="warn-title">ℹ️ 임차권등기명령으로 권리 보전</p>
      <p>부득이하게 이사해야 하는 경우에는 먼저 법원에 임차권등기명령을 신청하여 임차권 등기를 마친 후 이사하면 대항력이 유지됩니다(주임법 제3조의3).</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_20_임차인대항력.html" class="next-link"><span class="arrow">→</span><span class="title">임차인의 대항력</span><span class="desc">대항력 유무와 권리관계</span></a>
      <a href="경매_18_인도명령신청.html" class="next-link"><span class="arrow">→</span><span class="title">인도명령 신청</span><span class="desc">낙찰자가 인도명령을 신청하는 방법</span></a>
      <a href="경매_22_임차인배당요구.html" class="next-link"><span class="arrow">→</span><span class="title">임차인 배당요구 신청</span><span class="desc">보증금을 배당받는 방법</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-39',
    title: '현황조사보고서와 매각물건명세서 읽는 법',
    meta: '입찰 전 필수 서류인 현황조사보고서·매각물건명세서·감정평가서 열람 방법을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
      <li>경매 물건의 현황조사보고서와 매각물건명세서를 어떻게 읽는지 모른다</li>
      <li>입찰 전 꼭 확인해야 할 서류가 무엇인지 알고 싶다</li>
      <li>서류에서 위험 신호를 어떻게 파악하는지 궁금하다</li>
      <li>임차인 현황이나 유치권 정보를 어디서 확인하는지 알고 싶다</li>
    </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
      <p class="label">핵심 요약</p>
      <ul>
        <li>입찰 전 반드시 ① 매각물건명세서, ② 현황조사보고서, ③ 감정평가서를 열람해야 합니다(민집 제105조).</li>
        <li>매각물건명세서에는 임차인 현황, 권리분석, 유치권 신고 여부 등 중요 정보가 담겨 있습니다.</li>
        <li>현황조사보고서는 집행관이 현장 조사를 통해 확인한 실제 점유 상황을 기록한 문서입니다.</li>
      </ul>
    </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>매각물건명세서의 내용</h3>
    <p>법원이 작성하는 매각물건명세서(민집 제105조)에는 다음 정보가 포함됩니다: ① 부동산의 표시, ② 부동산 위의 부담(저당권, 가압류 등), ③ 임차인 현황과 대항력·우선변제권 내용, ④ 배당요구 여부, ⑤ 유치권 신고 여부, ⑥ 법원이 파악한 특이사항.</p>
    <h3>현황조사보고서의 내용</h3>
    <p>집행관이 현장 조사 후 작성하는 현황조사보고서에는: ① 부동산의 현재 점유자(임차인, 채무자 등), ② 임대차 보증금 및 기간, ③ 점유 상황(직접 거주, 임대 등), ④ 내부 상태 및 특이사항이 기재됩니다. 실제 현장 상황을 반영하므로 등기부와 다를 수 있습니다.</p>
    <h3>감정평가서의 내용</h3>
    <p>감정인이 작성하는 감정평가서에는 부동산의 감정가액, 평가 방법, 시세 근거 등이 기재됩니다. 최저매각가격은 감정가액을 기준으로 결정됩니다. 유찰 횟수에 따라 최저가가 낮아지므로, 감정가와 최저가의 차이를 확인하세요.</p>
    <div class="case-box">
      <p class="case-title">📋 열람 방법</p>
      <p>① 대법원 경매정보 사이트(www.courtauction.go.kr): 사건번호로 검색 후 각 서류 열람 가능. ② 법원 열람: 매각기일 1주일 전부터 법원에 비치. ③ 전자열람: PC·모바일에서 언제든지 조회 가능.</p>
    </div>`
      },
      {
        heading: '자주 하는 질문 Q&A',
        content: `<div class="qna-item">
      <p class="qna-q">매각물건명세서에 임차인 정보가 없으면 임차인이 없다는 뜻인가요?</p>
      <div class="qna-a">
        <p>반드시 그런 것은 아닙니다. 집행관 조사 시 임차인이 부재중이거나 임차인이 조사에 협조하지 않은 경우 정보가 누락될 수 있습니다. 현황조사보고서와 매각물건명세서에 임차인이 없더라도, 실제로는 임차인이 거주하는 경우가 있으므로 현장 확인이 중요합니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>
    <div class="qna-item">
      <p class="qna-q">유치권 신고가 '있음'으로 표시된 경우 어떻게 해야 하나요?</p>
      <div class="qna-a">
        <p>유치권 신고가 있는 경우, ① 유치권 신고 내용(신고자, 채권액, 원인)을 확인하고, ② 실제로 건물을 점유하고 있는지 현장에서 확인하며, ③ 성립 요건 충족 여부를 전문가와 검토해야 합니다. 허위 유치권인지 진짜인지에 따라 입찰 전략이 달라집니다.</p>
        <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
      </div>
    </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
      <p class="warn-title">⚠️ 서류만으로는 부족 — 현장 확인 필수</p>
      <p>법원 서류에 기재된 정보는 조사 시점 기준이므로, 현재 상황과 다를 수 있습니다. 입찰 전 현장을 직접 방문하여 점유 상황, 건물 상태, 특이사항을 확인하는 것이 중요합니다.</p>
    </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
      <a href="경매_16_권리분석.html" class="next-link"><span class="arrow">→</span><span class="title">권리분석</span><span class="desc">인수·소멸되는 권리 전체 파악</span></a>
      <a href="경매_25_감정평가최저매각가격.html" class="next-link"><span class="arrow">→</span><span class="title">감정평가와 최저매각가격</span><span class="desc">가격 결정 구조 이해</span></a>
      <a href="경매_14_입찰절차.html" class="next-link"><span class="arrow">→</span><span class="title">경매 입찰 절차</span><span class="desc">입찰에 참여하는 방법</span></a>
    </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-40',
    title: '감정평가와 최저매각가격',
    meta: '경매 감정가·최저매각가격 결정 구조, 유찰 감액 방식, 입찰보증금 계산법을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>경매 물건의 감정가가 시세와 다른 것 같아 의문이 생기셨다면</li>
        <li>최저매각가격이 무엇을 의미하는지 모르겠다면</li>
        <li>유찰 후 가격이 낮아진 물건에 입찰하려는 분</li>
        <li>감정평가 기준일과 현재 시세 차이를 파악하고 싶은 분</li>
        <li>입찰보증금 계산 방법을 확인하고 싶은 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p><strong>감정평가액</strong>은 법원이 선정한 감정인이 경매 개시 결정 이후 특정 시점에 평가한 부동산 가치입니다. 이것이 곧 <strong>최초 최저매각가격</strong>이 됩니다.</p>
        <p>유찰될 때마다 법원이 정한 비율(보통 전회 최저가의 20% 감액)로 <strong>최저매각가격이 낮아집니다</strong>. 즉 3회 유찰된 물건은 감정가의 약 51.2% 수준에서 입찰이 가능합니다.</p>
        <p>입찰보증금은 최저매각가격의 10%이며, 최고가 매수신고 이외의 입찰자는 즉시 반환받습니다.</p>
      </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 감정평가의 법적 근거</h3>
      <p>민사집행법 제97조는 "법원은 감정인에게 부동산을 평가하게 하고 그 평가액을 참작하여 최저매각가격을 정한다"고 규정합니다. 감정인은 법원이 선임하며, 감정 비용은 집행비용으로 처리됩니다.</p>
      <p>감정평가는 경매 개시 결정 이후 이루어지므로, 평가 기준일과 실제 입찰일 사이에 시간적 차이가 발생할 수 있습니다. 이 기간 동안 부동산 시장 상황이 변동되면 감정가와 실제 시세 간의 괴리가 생길 수 있습니다.</p>
      <h3>3-2. 최저매각가격과 유찰 감액 구조</h3>
      <table>
        <tr><th>회차</th><th>최저매각가격</th><th>입찰보증금(10%)</th></tr>
        <tr><td>1회차(최초)</td><td>감정가 100%</td><td>감정가의 10%</td></tr>
        <tr><td>2회차(1회 유찰)</td><td>감정가의 80%</td><td>감정가의 8%</td></tr>
        <tr><td>3회차(2회 유찰)</td><td>감정가의 64%</td><td>감정가의 6.4%</td></tr>
        <tr><td>4회차(3회 유찰)</td><td>감정가의 51.2%</td><td>감정가의 5.12%</td></tr>
      </table>
      <div class="info-box">
        <strong>ℹ️ 법원별 감액 비율 차이</strong><br>
        법원에 따라 감액 비율이 다를 수 있습니다. 일부 법원은 30% 감액을 적용하기도 합니다. 매각물건명세서에서 해당 법원의 감액 비율을 반드시 확인하세요.
      </div>
      <h3>3-3. 실제 사례</h3>
      <div class="case-box">
        <strong>사례: 감정가 5억 원 아파트, 2회 유찰 후 입찰</strong><br>
        감정가 5억 원 → 1회 유찰 후 최저가 4억 원 → 2회 유찰 후 최저가 3억 2천만 원.<br>
        입찰 시 보증금은 3,200만 원(최저가의 10%)을 지참해야 합니다.<br>
        단, 감정 기준일이 1년 전이라면 현재 시세는 별도로 확인이 필요합니다.
      </div>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 감정가가 시세보다 낮게 평가된 것 같은데, 문제가 없나요?</div>
        <div class="qna-a">
          <p>감정평가는 평가 기준일의 시장가치를 기준으로 하므로, 경매 절차가 진행되는 동안 부동산 시세가 상승했다면 감정가가 현 시세보다 낮을 수 있습니다. 이는 법적으로 문제가 없으며, 입찰자 입장에서는 오히려 유리한 상황일 수 있습니다.</p>
          <p>반대로 시세가 하락한 경우 감정가가 시세보다 높게 형성될 수 있어, 유찰이 반복되다가 가격이 조정될 때까지 기다리는 전략이 필요할 수 있습니다. 입찰 전에는 반드시 현재 시세를 별도로 조사해야 합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 입찰보증금을 현금으로만 납부해야 하나요?</div>
        <div class="qna-a">
          <p>입찰보증금은 현금, 법원보관금 납입 영수증, 또는 금융기관이 발행한 보증서(보증보험증권)로 납부할 수 있습니다. 보증서를 이용하면 실제 현금을 대규모로 준비할 필요가 없어 편리합니다.</p>
          <p>최고가 매수신고인으로 결정되지 않은 경우 입찰보증금은 즉시 반환됩니다. 최고가 매수신고인이 대금을 기한 내 납부하지 않으면 입찰보증금은 몰수될 수 있습니다(민사집행법 제138조).</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 최저매각가격보다 낮은 금액으로 입찰하면 어떻게 되나요?</div>
        <div class="qna-a">
          <p>최저매각가격 미만의 입찰은 무효입니다(민사집행법 제121조 제5호). 입찰은 반드시 최저매각가격 이상의 금액으로 하여야 하며, 복수의 입찰자 중 최고가를 제시한 사람이 최고가 매수신고인이 됩니다.</p>
          <p>동일 금액을 제시한 입찰자가 복수인 경우 추가로 최고가 입찰을 진행하며, 이때 응하지 않으면 모두 무효 처리됩니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 유찰이 반복되다 보면 가격이 계속 낮아지나요?</div>
        <div class="qna-a">
          <p>유찰이 반복될수록 최저매각가격은 낮아지지만, 무한정 낮아지지는 않습니다. 잉여주의 원칙(민사집행법 제102조)에 따라 선순위 권리자들을 만족시키기 어려운 수준이 되면 법원이 경매 절차를 취소할 수 있습니다.</p>
          <p>또한 물건에 따라서는 일정 회차 이후 법원이 새로운 감정평가를 명할 수도 있습니다. 특히 장기간 경매가 진행된 물건은 새로운 감정평가 결과로 최저가가 조정될 수 있으므로 유의해야 합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 감정평가서를 미리 열람할 수 있나요?</div>
        <div class="qna-a">
          <p>네, 감정평가서는 법원 경매 기록의 일부로, 법원 경매계에서 열람·복사가 가능합니다. 또한 대법원 법원경매정보 사이트(www.courtauction.go.kr)에서 일정 정보를 온라인으로 확인할 수 있습니다.</p>
          <p>감정평가서에는 평가 기준일, 평가 방법, 해당 부동산의 가격 결정 요인이 상세히 기재되어 있어 입찰 결정에 중요한 자료가 됩니다. 매각물건명세서와 함께 반드시 확인하세요.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 토지와 건물이 함께 경매되는 경우 감정평가는 어떻게 되나요?</div>
        <div class="qna-a">
          <p>토지와 건물이 함께 경매 신청된 경우 일체로 감정평가하여 최저매각가격을 산정합니다. 각각 별도의 등기부등본이 있더라도 하나의 가격으로 평가되어 입찰이 이루어집니다.</p>
          <p>단, 토지와 건물의 소유자가 다른 경우(예: 토지는 A 소유, 건물은 B 소유)에는 각각 별도로 평가될 수 있습니다. 이 경우 법정지상권 문제가 발생할 수 있으므로 매각물건명세서에 표시된 권리관계를 면밀히 검토해야 합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
        <p>법원은 감정인이 제출한 평가액을 참작하여 최저매각가격을 정하는데, 감정평가가 현저히 부당한 경우 법원이 새로운 감정을 명하거나 직권으로 가격을 조정할 수 있습니다. 감정가격이 시세와 현저히 달라 매각허가에 영향을 미칠 경우 이해관계인은 매각허가결정에 대한 즉시항고를 통해 불복할 수 있습니다.</p>
        <p>최저매각가격은 경매 절차의 공정성과 경제성을 위한 기준이며, 입찰자들이 적정한 가격에 낙찰받을 수 있도록 보장하는 기능을 합니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚠️ <strong>감정가 ≠ 시세</strong>: 감정 기준일 이후 시세 변동을 반드시 별도로 확인하세요. 특히 장기간 진행 중인 경매의 경우 감정가와 실제 시세 간 차이가 클 수 있습니다.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>인수되는 권리 있을 수 있음</strong>: 최저매각가격이 낮더라도 매수인이 인수해야 하는 선순위 권리(선순위 임차인의 보증금, 유치권 등)가 있다면 실질 비용은 훨씬 높아집니다. 권리분석 없이 낮은 가격만 보고 입찰하면 위험합니다.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ <strong>현황조사보고서·매각물건명세서 확인 필수</strong>: 입찰 전 이 세 가지 서류를 반드시 확인하고 전문가와 권리분석을 받으세요.</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_16_권리분석.html">📋 권리분석과 말소기준권리</a>
        <a href="경매_14_입찰절차.html">🏷️ 입찰 절차와 방법</a>
        <a href="경매_24_현황조사매각명세서.html">📄 현황조사·매각물건명세서 보는 법</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-41',
    title: '선·후순위 저당권과 배당',
    meta: '저당권 배당 순위, 선후순위 저당권자 간 배당 계산, 당해세 우선 문제를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>부동산에 저당권을 설정하고 대출을 실행한 금융기관·채권자</li>
        <li>선순위 저당권이 있는 부동산을 경매로 취득하려는 매수 희망자</li>
        <li>내 저당권이 몇 순위인지, 배당을 받을 수 있는지 확인하고 싶은 분</li>
        <li>여러 개의 저당권이 설정된 부동산에 추가 저당을 설정한 채권자</li>
        <li>경매 후 배당 결과를 미리 예측하고 싶은 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p>저당권의 배당 순위는 <strong>등기 접수일시</strong>를 기준으로 결정됩니다. 같은 날 접수된 경우 접수 번호가 빠른 것이 우선합니다.</p>
        <p>경매 배당금에서 선순위 저당권이 먼저 배당받고, 남은 금액을 후순위 저당권이 배당받습니다. 남은 배당금이 없으면 후순위 저당권은 배당을 받지 못한 채 소멸됩니다.</p>
        <p>이것이 <strong>경매 입찰 전 권리분석이 중요한 이유</strong>입니다. 선순위 저당권 채권액의 합계가 클수록 낙찰자가 배당받는 금액이 줄어들고, 후순위 권리자는 배당을 받지 못할 위험이 있습니다.</p>
      </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 저당권 배당의 법적 근거</h3>
      <p>민사집행법 제145조는 배당 순서를, 제148조는 배당요구를 할 수 있는 채권자의 범위를 규정합니다. 저당권자는 별도의 배당요구 없이 등기부상 순위에 따라 당연히 배당에 참가할 수 있습니다(민사집행법 제148조 제3호).</p>
      <p>담보권 실행을 위한 경매(임의경매)에서는 담보권자가 신청 채권자이므로 배당에 당연히 참가합니다. 강제경매에서도 등기된 저당권자는 별도 배당요구 없이 배당을 받을 수 있습니다.</p>
      <h3>3-2. 배당 순위와 계산 구조</h3>
      <table>
        <tr><th>순위</th><th>권리 유형</th><th>특징</th></tr>
        <tr><td>1</td><td>집행비용</td><td>가장 먼저 공제</td></tr>
        <tr><td>2</td><td>최우선변제권 소액임차인·최종 임금</td><td>등기 선후 불문하고 우선</td></tr>
        <tr><td>3</td><td>당해세 (해당 부동산 관련 국세·지방세)</td><td>저당권보다 우선하는 경우 있음</td></tr>
        <tr><td>4</td><td>저당권 (등기 순서대로)</td><td>접수일시 기준 선순위 우선</td></tr>
        <tr><td>5</td><td>확정일자 임차인</td><td>저당권과 확정일자 접수 선후로 결정</td></tr>
        <tr><td>6</td><td>일반 채권자</td><td>안분배당</td></tr>
      </table>
      <div class="warn-box">
        <p>⚠️ <strong>당해세 주의</strong>: 해당 부동산에 관해 부과된 국세·지방세는 저당권 설정일보다 법정기일이 늦더라도 저당권에 우선할 수 있습니다(국세기본법 제35조). 이를 간과하면 예상보다 배당액이 줄어들 수 있습니다.</p>
      </div>
      <h3>3-3. 실제 사례</h3>
      <div class="case-box">
        <strong>사례: 경매 배당금 3억 원, 선후순위 저당권 있는 경우</strong><br>
        집행비용 300만 원 공제 → 잔액 2억 9,700만 원.<br>
        1순위 저당권(A은행): 채권액 2억 원 → 2억 원 전액 배당.<br>
        2순위 저당권(B캐피탈): 채권액 2억 원 → 잔액 9,700만 원만 배당, 나머지 1억 300만 원은 미배당.<br>
        B캐피탈은 부족 부분에 대해 채무자에게 별도 청구 가능하지만, 저당권은 소멸합니다.
      </div>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 후순위 저당권자도 배당을 전혀 못 받나요?</div>
        <div class="qna-a">
          <p>배당금이 선순위 채권을 모두 변제하고 남는다면 후순위 저당권자도 배당을 받습니다. 배당은 순위대로 이루어지므로, 배당금이 충분하면 후순위도 일부 또는 전액을 받을 수 있습니다.</p>
          <p>반대로 배당금이 선순위 채권에도 부족한 경우 후순위 저당권자는 아무것도 받지 못하고 저당권만 소멸하게 됩니다. 이런 이유로 후순위 저당 설정 시에는 선순위 채권액과 부동산 가치를 면밀히 검토해야 합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 저당권자가 배당요구를 하지 않으면 배당에서 제외되나요?</div>
        <div class="qna-a">
          <p>등기된 저당권자는 별도의 배당요구 없이도 배당 절차에 당연히 참가할 수 있습니다(민사집행법 제148조 제3호). 법원이 등기부를 조회하여 저당권자에게 배당기일을 통지합니다.</p>
          <p>다만, 저당권자가 배당기일에 채권계산서를 제출하지 않으면 배당에 어려움이 생길 수 있으므로, 법원의 통지를 받으면 배당기일 전에 채권계산서를 반드시 제출하는 것이 좋습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 근저당권의 경우 채권최고액과 실제 채권액 중 어느 것으로 배당받나요?</div>
        <div class="qna-a">
          <p>근저당권은 채권최고액의 범위 내에서 실제 발생한 채권액(원금 + 이자 + 지연손해금)으로 배당받습니다. 채권최고액이 1억 원이더라도 실제 채권이 7천만 원이라면 7천만 원 한도에서만 배당됩니다.</p>
          <p>반대로 실제 채권이 채권최고액을 초과하더라도 채권최고액을 한도로만 배당받을 수 있습니다. 초과 부분에 대해서는 일반 채권자로서 남은 배당금에서 배당받아야 합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 같은 날 접수된 저당권들은 어떻게 순위를 결정하나요?</div>
        <div class="qna-a">
          <p>같은 날 접수된 저당권은 접수 번호(등기 일련번호)가 빠른 것이 우선합니다. 접수 번호까지 동일한 경우(실무상 거의 없음)에는 동순위로 처리하여 배당금을 안분합니다.</p>
          <p>부동산등기법상 같은 날 같은 부동산에 대해 접수 번호가 동일한 저당권 등기는 있을 수 없으므로, 동일 접수번호 저당권 문제는 이론적인 것입니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 저당권이 없는 일반 채권자는 어떻게 배당받나요?</div>
        <div class="qna-a">
          <p>저당권 등 담보권이 없는 일반 채권자는 배당요구를 해야만 배당에 참가할 수 있습니다(민사집행법 제88조). <span class="badge-warn">⚡ 배당요구종기까지</span> 배당요구를 해야 하며, 이를 넘기면 배당에 참가할 수 없습니다.</p>
          <p>일반 채권자 간에는 채권액 비율에 따라 안분배당이 이루어집니다. 먼저 채권을 취득했다고 하여 우선 배당을 받는 것이 아니므로, 다수의 일반 채권자가 있다면 각자의 배당액이 감소합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
        <p>대법원은 근저당권의 피담보채권에 대해, 배당 시점의 실제 잔존 채권액이 채권최고액 이내인 경우 실제 채권액만을 기준으로 배당하여야 한다고 판시하고 있습니다. 채권최고액은 담보의 범위를 정한 것이지 배당 기준이 아닙니다.</p>
        <p>또한 공동저당권의 경우 피담보채권이 하나라면, 각 부동산에서의 배당은 각 부동산가액 비율에 따라 안분하여 부담합니다(민법 제368조 동시배당 원칙). 이로 인해 후순위 저당권자의 대위(민법 제368조 제2항) 문제가 실무에서 빈번히 발생합니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚠️ <strong>당해세 우선 주의</strong>: 해당 부동산에 관련된 재산세, 종합부동산세 등은 저당권보다 우선할 수 있습니다. 배당 예측 시 반드시 확인하세요.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>공동저당권의 복잡성</strong>: 여러 부동산에 걸친 공동저당권이 있는 경우 대위 문제가 발생할 수 있어 배당 계산이 매우 복잡해집니다. 전문가의 검토가 필요합니다.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ 배당 예측을 위해서는 등기부등본, 체납세금 조회, 임차인 현황 등 다각도의 자료 수집이 필요합니다.</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_10_배당순위.html">📊 전체 배당순위 구조</a>
        <a href="경매_11_배당요구신청.html">📋 배당요구 신청 방법</a>
        <a href="경매_12_배당이의.html">⚖️ 배당이의 제기 방법</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-42',
    title: '공유 부동산 경매',
    meta: '공유 지분 경매와 공유물 분할 경매의 차이, 공유자 우선매수권 행사 방법을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>형제·자매와 공동으로 상속받은 부동산 중 일부 지분에 저당권이 설정된 분</li>
        <li>공유자 중 한 명의 지분에 대해 경매가 진행 중인 경우</li>
        <li>공유 부동산의 일부 지분만 낙찰받은 매수인</li>
        <li>공유물 분할 청구 소송을 통한 경매와 지분 경매의 차이를 알고 싶은 분</li>
        <li>공유 부동산 경매에서 다른 공유자의 권리가 어떻게 되는지 궁금한 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p>공유 부동산 경매는 두 가지 유형이 있습니다. 하나는 <strong>공유 지분 경매</strong>(일부 공유자의 지분만 경매), 다른 하나는 <strong>공유물 분할을 위한 경매</strong>(전체 부동산을 경매하여 매각대금 분배)입니다.</p>
        <p>공유 지분 경매에서 낙찰자는 그 지분만을 취득하고, 다른 공유자와의 공유 관계가 계속됩니다. 공유자는 낙찰자가 되기 전에 <strong>우선매수권</strong>을 행사하여 낙찰가로 우선 매수할 수 있습니다(민사집행법 제140조).</p>
        <p>공유물 분할 청구 경매는 법원 판결에 따른 것으로, 전체 부동산이 경매되어 매각대금을 지분 비율대로 분배합니다.</p>
      </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 공유 지분 경매의 법적 근거</h3>
      <p>민법 제263조는 공유자는 공유물 전부를 지분 비율에 따라 사용·수익할 수 있다고 규정합니다. 공유 지분도 재산권이므로 저당권 설정, 경매 신청이 가능합니다.</p>
      <p>민사집행법 제140조는 공유 지분 경매 시 다른 공유자가 최고 입찰가격으로 우선 매수할 수 있는 <strong>공유자 우선매수권</strong>을 보장합니다. 이 권리는 매각기일에 신청해야 하며, 입찰기일 전에 신청할 수 있습니다.</p>
      <h3>3-2. 두 유형 비교</h3>
      <table>
        <tr><th>구분</th><th>공유 지분 경매</th><th>공유물 분할 경매</th></tr>
        <tr><td>경매 대상</td><td>일부 공유자의 지분</td><td>부동산 전체</td></tr>
        <tr><td>발생 원인</td><td>지분에 대한 집행권원 또는 담보권</td><td>공유물 분할 판결</td></tr>
        <tr><td>매각 결과</td><td>낙찰자가 지분 취득 (나머지 공유 관계 유지)</td><td>전체 매각 후 대금 지분 비율 분배</td></tr>
        <tr><td>공유자 우선매수</td><td>가능 (민사집행법 제140조)</td><td>불가</td></tr>
        <tr><td>입찰 매력도</td><td>낮음 (단독 사용 어려움)</td><td>높음 (전체 취득 가능)</td></tr>
      </table>
      <h3>3-3. 실제 사례</h3>
      <div class="case-box">
        <strong>사례: 상속 부동산의 공유 지분 경매</strong><br>
        아버지 사망 후 자녀 A·B·C가 1/3씩 공유 중인 아파트에서 C의 지분에 저당권 실행 경매가 신청되었습니다.<br>
        매각기일에 A가 공유자 우선매수권을 행사하여 최고입찰가(1억 원)로 C의 지분을 매수했습니다.<br>
        결과: A와 B가 각 1/3씩, A가 추가로 1/3을 취득하여 A의 총 지분은 2/3가 되었습니다.
      </div>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 공유 지분을 낙찰받으면 실제로 그 부분을 사용할 수 있나요?</div>
        <div class="qna-a">
          <p>공유 지분 낙찰자는 해당 지분의 공유자가 되어 다른 공유자와 함께 부동산 전체를 지분 비율에 따라 사용할 수 있습니다. 그러나 특정 부분을 독점적으로 사용하려면 다른 공유자의 동의가 필요합니다.</p>
          <p>현실적으로 공유 지분 낙찰은 다른 공유자와의 협의 없이는 활용이 어렵습니다. 이 때문에 일반 입찰자들이 공유 지분 물건을 기피하는 경향이 있어 낙찰가가 낮게 형성되는 경우가 많습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 공유자 우선매수권은 어떻게 행사하나요?</div>
        <div class="qna-a">
          <p>공유자는 매각기일에 출석하여 최고가 입찰자의 입찰가격으로 매수하겠다는 의사를 표시하면 됩니다(민사집행법 제140조 제1항). 사전에 집행법원에 우선매수 신고를 할 수도 있습니다.</p>
          <p>우선매수권을 행사한 공유자는 최고 입찰가로 매수대금을 납부해야 합니다. 대금을 납부하지 않으면 우선매수 신고의 효력이 없어지고, 차순위 매수신고인이나 재입찰 절차로 진행됩니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 공유물 분할을 위한 경매는 어떻게 신청하나요?</div>
        <div class="qna-a">
          <p>공유자 중 일부가 공유물 분할을 원한다면, 다른 공유자들과 협의가 되지 않는 경우 법원에 공유물 분할 청구의 소를 제기할 수 있습니다(민법 제269조). 법원은 현물 분할이 불가능하거나 현저히 불리한 경우 경매에 의한 대금 분할 판결을 내릴 수 있습니다.</p>
          <p>분할 판결 후 공유자 중 1인이 경매를 신청하면 전체 부동산이 경매에 부쳐지고, 매각대금을 지분 비율로 분배합니다. 이 경매에서는 공유자 우선매수권이 적용되지 않습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 공유 지분에 저당권을 설정하면 다른 공유자에게 영향이 있나요?</div>
        <div class="qna-a">
          <p>원칙적으로 공유자 1인이 자신의 지분에 저당권을 설정하는 것은 다른 공유자의 동의 없이도 가능합니다(민법 제263조). 해당 공유자의 지분에만 저당권의 효력이 미치므로, 다른 공유자의 지분에는 영향이 없습니다.</p>
          <p>다만, 지분 경매가 진행되면 낙찰자가 새로운 공유자가 되어 함께 공유하게 되므로 간접적인 영향은 있습니다. 이 때문에 다른 공유자는 우선매수권을 통해 외부인의 진입을 막을 수 있는 것입니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 건물만 공유인 경우와 토지만 공유인 경우의 차이는?</div>
        <div class="qna-a">
          <p>건물과 토지가 각각 다른 사람과 공유인 경우 법정지상권 문제가 발생할 수 있습니다. 특히 토지 지분에 대한 경매에서 낙찰자가 건물 소유자와 다른 사람이 되면 토지 사용에 관한 복잡한 법률 관계가 형성됩니다.</p>
          <p>이런 물건은 권리관계가 복잡하여 입찰 전 반드시 전문가의 검토를 받아야 합니다. 법정지상권의 성립 여부, 지료 청구 가능 여부 등을 사전에 파악하는 것이 필수입니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
        <p>대법원은 공유물 분할 경매에서 각 공유자의 지분에 저당권이 설정되어 있는 경우, 매각대금에서 각 지분에 해당하는 금액을 배당할 때 그 지분에 설정된 저당권자가 우선하여 배당받는다고 판시하고 있습니다. 이때 지분 저당권자와 다른 공유자의 채권자 간 배당 순서도 각자의 지분에 해당하는 매각대금 범위 내에서 결정됩니다.</p>
        <p>공유자 우선매수권은 최고가 매수신고인의 입찰가격으로 행사하는 권리이므로, 공유자가 우선매수를 신청하면 최고가 매수신고인은 매수 자격을 잃게 되고 입찰보증금을 반환받습니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚠️ <strong>공유 지분 입찰의 위험성</strong>: 공유 지분을 낙찰받더라도 독점적 사용이 불가능하여 실질 가치가 낮을 수 있습니다. 다른 공유자가 협조하지 않는 경우 공유물 분할 소송을 별도로 제기해야 합니다.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>우선매수권 행사 기한</strong>: 공유자의 우선매수권 행사는 매각기일에만 가능하므로, 기일 전에 미리 준비해야 합니다.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ 공유 부동산 문제는 상속, 이혼 재산분할 등과 결합되는 경우가 많아 법률관계가 복잡합니다. 경매 전 반드시 전문가 상담을 받으세요.</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_16_권리분석.html">📋 권리분석 기본 방법</a>
        <a href="경매_10_배당순위.html">📊 배당순위 구조</a>
        <a href="경매_15_대금납부소유권이전.html">🏠 낙찰 후 소유권이전 절차</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-43',
    title: '농지·임야 경매 특수요건',
    meta: '농지취득자격증명 발급 요건, 제출 기한, 임야 규제 사항을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>경매로 농지(논, 밭, 과수원 등)를 취득하려는 분</li>
        <li>임야(산림) 경매에 참여를 고려 중인 분</li>
        <li>농지를 낙찰받았지만 소유권이전이 안 되는 상황에 처한 분</li>
        <li>농지취득자격증명 발급 요건을 알고 싶은 분</li>
        <li>농지 경매에서 입찰보증금이 몰수될 위험이 있는지 확인하고 싶은 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p>농지는 원칙적으로 <strong>자기의 농업경영에 이용하거나 이용할 자</strong>만 취득할 수 있습니다(농지법 제6조). 경매로 농지를 낙찰받으려면 <strong>농지취득자격증명(농취증)</strong>을 반드시 제출해야 합니다.</p>
        <p><span class="badge-warn">⚡ 중요</span> 매각결정기일까지 농취증을 제출하지 못하면 매각불허가 결정이 내려지고 입찰보증금이 몰수됩니다. 농취증은 낙찰 후 신청하면 4~7영업일이 소요되므로, 농지 입찰 전 발급 가능 여부를 먼저 확인해야 합니다.</p>
        <p>임야는 농취증이 필요 없으나, 산지관리법상 산지전용허가 등 별도 규제가 적용될 수 있습니다.</p>
      </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 농지 취득의 법적 근거</h3>
      <p>농지법 제6조는 농지 소유 자격을, 제8조는 농지취득자격증명 발급을 규정합니다. 민사집행법 제117조에 따라 경매 매수인도 농지취득자격증명을 제출하여야 합니다.</p>
      <p>농취증 발급 요건: ① 영농 계획이 있는 개인 농업인, ② 농업법인, ③ 한국농어촌공사 등 법령에서 인정하는 자. 도시 거주자라도 주말·체험영농 목적으로는 1,000㎡ 미만의 농지에 한하여 취득 가능합니다.</p>
      <h3>3-2. 농지취득자격증명 관련 주요 사항</h3>
      <table>
        <tr><th>구분</th><th>내용</th></tr>
        <tr><td>신청처</td><td>해당 농지 소재지 읍·면·동 사무소 (시·군·구청 농업담당 부서)</td></tr>
        <tr><td>처리기간</td><td>4일 (농업진흥구역 내 농지는 최대 7일)</td></tr>
        <tr><td>제출기한</td><td>매각결정기일 전까지 (통상 낙찰 후 7일 이내)</td></tr>
        <tr><td>미제출 시</td><td>매각불허가 + 입찰보증금 몰수</td></tr>
        <tr><td>발급 거부 시</td><td>매각불허가 신청 가능 (민사집행법 제121조 제6호)</td></tr>
      </table>
      <div class="warn-box">
        <p>⚠️ <strong>발급 거부 사전 확인 필수</strong>: 농취증 발급이 거부될 수 있는 사유(농업경영 요건 미충족, 투기 우려 지역 등)를 입찰 전에 확인하세요. 낙찰 후 발급 거부 시 보증금을 돌려받을 수 없는 경우가 있습니다.</p>
      </div>
      <h3>3-3. 실제 사례</h3>
      <div class="case-box">
        <strong>사례: 농취증 미제출로 보증금 몰수된 경우</strong><br>
        도시 거주자 甲이 농지(논 2,000㎡) 경매에 입찰하여 최고가 낙찰자가 되었습니다.<br>
        그러나 甲은 영농 계획이 없어 농취증 발급이 거부되었고, 매각결정기일까지 제출하지 못했습니다.<br>
        결과: 법원은 매각불허가 결정을 내렸고, 입찰보증금(최저가의 10%)이 전액 몰수되었습니다.
      </div>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 농취증 발급이 거부되었을 때 입찰보증금을 돌려받을 수 있나요?</div>
        <div class="qna-a">
          <p>원칙적으로 농취증 발급이 거부되면 매각불허가 결정이 내려지고 입찰보증금이 몰수됩니다(민사집행법 제138조). 다만, 농취증 발급 거부가 예측 불가능한 사정에 의한 것이었음을 소명하면 보증금 반환을 구하는 구제 절차가 있으나 쉽지 않습니다.</p>
          <p>따라서 농지 입찰 전 반드시 해당 시·군·구 농업담당 부서에 발급 가능 여부를 미리 확인하는 것이 필수입니다. 현장 방문 또는 전화 문의를 통해 사전 검토를 받으세요.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 법인도 농지를 경매로 취득할 수 있나요?</div>
        <div class="qna-a">
          <p>농업법인(영농조합법인, 농업회사법인)은 농지를 취득할 수 있으며, 농취증 발급 대상입니다. 그러나 일반 상사법인이나 투자 목적의 법인은 농지 취득이 원칙적으로 불가합니다.</p>
          <p>농업법인도 농지의 자경(직접 경작) 요건이 있으므로, 농업법인이 아닌 회사 명의로 농지를 경매 취득하려는 시도는 실패할 가능성이 매우 높습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 임야 경매에도 특별한 제한이 있나요?</div>
        <div class="qna-a">
          <p>임야(산지)는 농취증과 같은 별도의 취득 자격 제한은 없지만, 산지관리법에 따른 규제가 적용됩니다. 특히 <strong>보전산지</strong>로 지정된 임야는 개발 행위에 엄격한 제한이 있어 활용 가능성이 낮습니다.</p>
          <p>임야 경매 입찰 전에 토지이용계획 확인서를 반드시 확인하여 개발제한구역, 보전산지, 공원구역 등 규제 여부를 파악해야 합니다. 규제 구역의 임야는 낮은 가격으로 낙찰받더라도 활용이 어려울 수 있습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 주말·체험영농 목적으로 농지를 취득할 수 있나요?</div>
        <div class="qna-a">
          <p>농업인이 아닌 도시민도 주말·체험영농 목적으로 세대원 전부가 소유하는 농지 합계가 <strong>1,000㎡ 미만</strong>인 경우에 한하여 농지를 취득할 수 있습니다(농지법 제6조 제2항 제3호). 이 경우도 농취증 발급이 필요합니다.</p>
          <p>경매로 1,000㎡를 초과하는 농지를 취득하려면 영농 계획이 있어야 하므로, 단순 투자 목적이라면 해당 물건의 면적을 반드시 확인하세요.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 농지가 이미 공장이나 창고로 사용되고 있는 경우에도 농취증이 필요한가요?</div>
        <div class="qna-a">
          <p>지목이 '전', '답', '과수원'으로 등재되어 있더라도 현황이 농지가 아닌 경우(이미 공장, 창고, 주택 부지 등으로 실제 사용 중)에는 농취증이 필요하지 않을 수 있습니다. 현황조사보고서와 감정평가서를 통해 실제 이용 현황을 확인하세요.</p>
          <p>다만, 법원이 이 판단을 보수적으로 하는 경우도 있으므로, 불확실한 경우에는 입찰 전 집행법원에 문의하거나 법무사와 상담하는 것이 안전합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
        <p>대법원은 경매를 통한 농지 취득에 대해서도 농지법상의 취득 자격 요건이 적용된다고 판시하고 있습니다. 농취증을 제출하지 않은 경우 낙찰허가결정이 있더라도 소유권이전등기를 할 수 없으며, 입찰보증금은 반환되지 않습니다.</p>
        <p>현황이 농지가 아님에도 불구하고 지목이 농지인 경우, 현황 조사를 통해 사실상 농지가 아님이 확인되면 농취증 없이도 매각허가가 가능하다는 취지의 판례가 있으나, 판단은 법원마다 다를 수 있습니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚡ <strong>농취증 제출기한 엄수</strong>: 매각결정기일(통상 낙찰 후 7일)까지 반드시 제출해야 합니다. 기한 초과 시 입찰보증금 몰수.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>사전 발급 가능 여부 확인 필수</strong>: 입찰 전에 해당 시·군·구에 농취증 발급 가능 여부를 문의하세요. 낙찰 후 확인하면 늦습니다.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ 농지 취득 후에도 자경 의무(취득 후 1년 이내 영농 개시)가 있으며, 이를 위반하면 이행강제금이 부과될 수 있습니다(농지법 제62조).</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_14_입찰절차.html">🏷️ 입찰 절차와 방법</a>
        <a href="경매_15_대금납부소유권이전.html">🏠 낙찰 후 소유권이전 절차</a>
        <a href="경매_16_권리분석.html">📋 권리분석 방법</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-44',
    title: '낙찰 후 소유권이전등기 촉탁 절차',
    meta: '대금납부부터 취득세 납부, 소유권이전등기 촉탁 완료까지 단계별 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>경매에서 낙찰(최고가 매수)을 받은 분</li>
        <li>대금납부 후 소유권이전등기 절차를 직접 처리하려는 분</li>
        <li>취득세 납부 기한이 언제인지 확인하고 싶은 분</li>
        <li>경매 낙찰 후 등기부에 어떤 변화가 생기는지 알고 싶은 분</li>
        <li>등기 촉탁과 일반 소유권이전등기의 차이를 알고 싶은 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p>경매로 부동산을 취득하면 <strong>법원이 직접 등기소에 촉탁</strong>하여 소유권이전등기를 해줍니다(민사집행법 제144조). 낙찰자가 직접 등기소에 신청할 필요가 없는 것이 일반 부동산 거래와의 차이점입니다.</p>
        <p><span class="badge-warn">⚡ 취득세</span> 취득세는 잔금납부일(소유권 취득일)로부터 <strong>60일 이내</strong>에 납부해야 합니다(지방세법 제20조). 기한 내 미납 시 가산세가 부과됩니다.</p>
        <p>대금납부 완료 후 법원의 등기 촉탁서가 등기소에 접수되면, 통상 수일 내에 소유권이전등기와 말소 대상 권리의 등기가 동시에 처리됩니다.</p>
      </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 단계별 절차</h3>
      <div class="steps">
        <div class="step">
          <strong>매각허가결정 확정</strong><br>
          낙찰 후 7일의 즉시항고 기간이 지나면 매각허가결정이 확정됩니다. 이해관계인의 즉시항고가 없는 경우 자동 확정됩니다.
        </div>
        <div class="step">
          <strong>대금납부기한 지정</strong><br>
          법원은 확정 후 대금납부기한을 지정합니다. 통상 확정일로부터 1개월 내외입니다. 법원 통지를 반드시 확인하세요.
        </div>
        <div class="step">
          <strong>취득세 납부 (지방세법 제20조)</strong><br>
          잔금납부 전에 취득세를 납부해야 합니다. 위택스(www.wetax.go.kr) 또는 관할 시·군·구청 세무부서에서 납부. 취득세 영수증이 있어야 법원에 대금납부 가능합니다.
        </div>
        <div class="step">
          <strong>대금납부 (잔금 지급)</strong><br>
          법원 지정 계좌에 잔금(낙찰가 - 입찰보증금)을 납부합니다. 납부 후 법원 경매계에서 대금납부증명원을 수령합니다.
        </div>
        <div class="step">
          <strong>소유권이전등기 촉탁 신청</strong><br>
          법원 경매계에 소유권이전등기 촉탁 신청서와 관련 서류를 제출합니다. 법원이 직접 등기소에 촉탁서를 발송합니다.
        </div>
        <div class="step">
          <strong>등기 완료 확인</strong><br>
          인터넷등기소(www.iros.go.kr) 또는 등기소에서 등기부등본을 발급받아 소유권이전 및 말소 대상 권리 삭제를 확인합니다.
        </div>
      </div>
      <h3>3-2. 제출 서류 목록</h3>
      <table>
        <tr><th>서류</th><th>발급처</th><th>비고</th></tr>
        <tr><td>소유권이전등기촉탁신청서</td><td>법원 경매계 (양식 비치)</td><td>필수</td></tr>
        <tr><td>취득세 납부영수증</td><td>위택스 또는 지방자치단체</td><td>필수 — 납부 기한: 취득일로부터 60일</td></tr>
        <tr><td>주민등록등본 (개인) 또는 법인등기사항증명서</td><td>주민센터 / 법원 또는 인터넷등기소</td><td>필수</td></tr>
        <tr><td>인감증명서 (해당 시)</td><td>주민센터</td><td>법인은 대표자 인감증명</td></tr>
        <tr><td>농지취득자격증명 (농지인 경우)</td><td>읍·면·동 사무소</td><td>농지에 한함</td></tr>
      </table>
      <h3>3-3. 비용 안내</h3>
      <p>취득세는 취득가액(낙찰가)을 기준으로 부과되며, 세율은 부동산 종류에 따라 다릅니다. 취득세 외에도 지방교육세, 농어촌특별세가 부과될 수 있습니다. 정확한 세액은 위택스(www.wetax.go.kr) 또는 관할 시·군·구청에서 확인하세요.</p>
      <p>등기신청수수료(등록면허세)는 부동산등기법상 정해진 기준에 따라 납부합니다. 비용 종류: 등록면허세 1회, 지방교육세 1회, 국민주택채권 매입(해당 시). 등기 촉탁이므로 별도의 신청 수수료는 없습니다.</p>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 취득세 납부 기한인 60일을 넘기면 어떻게 되나요?</div>
        <div class="qna-a">
          <p><span class="badge-warn">⚡</span> 취득일(잔금납부일)로부터 60일 이내에 취득세를 신고·납부하지 않으면 신고불성실가산세(20%)와 납부지연가산세(1일 0.022%)가 부과됩니다(지방세법 제53조 내지 제55조). 이는 상당한 금액이 될 수 있으므로 반드시 기한 내 납부하세요.</p>
          <p>취득세는 잔금납부 전에 미리 산정·납부하는 것이 일반적이므로, 대금납부기한이 지정되면 즉시 취득세를 계산하고 납부 준비를 시작하는 것이 좋습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 낙찰 후 바로 소유권이 넘어오나요?</div>
        <div class="qna-a">
          <p>경매에서의 소유권 취득 시점은 <strong>대금을 완납한 때</strong>입니다(민사집행법 제135조). 등기 여부와 관계없이 잔금납부 완료 즉시 법률상 소유권을 취득합니다. 따라서 잔금납부일이 취득세 계산의 기산점이 됩니다.</p>
          <p>등기는 제3자에 대한 대항력을 위한 것으로, 등기가 늦어도 소유권 자체는 이미 취득된 상태입니다. 다만 신속하게 등기를 마쳐야 이후 분쟁을 예방할 수 있습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 경매로 취득하면 기존 저당권 등이 모두 말소되나요?</div>
        <div class="qna-a">
          <p>경매로 인해 말소되는 권리는 말소기준권리(최선순위 저당권·압류·가압류 등) 이후에 설정된 모든 권리입니다. 법원이 소유권이전등기 촉탁과 함께 말소 대상 권리의 말소등기도 동시에 촉탁합니다.</p>
          <p>다만 말소기준권리보다 선순위의 권리(예: 선순위 전세권, 선순위 지상권 등)는 낙찰자가 인수해야 합니다. 이 부분은 입찰 전 권리분석에서 반드시 확인해야 합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 대금납부를 하지 않으면 어떻게 되나요?</div>
        <div class="qna-a">
          <p>납부기한 내에 잔금을 납부하지 않으면 매각허가결정이 취소되고 입찰보증금이 몰수됩니다(민사집행법 제138조 제1항). 입찰보증금은 경매 비용에 충당되고, 부족액은 채무자에게 청구됩니다.</p>
          <p>또한 대금을 납부하지 않은 매수인은 해당 경매 물건의 재매각에서 재입찰이 금지됩니다(민사집행법 제138조 제3항). 잔금 납부 능력을 확인한 후 입찰에 참여하는 것이 중요합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 등기 촉탁이 완료되면 어떻게 확인하나요?</div>
        <div class="qna-a">
          <p>인터넷등기소(www.iros.go.kr)에서 해당 부동산의 등기부등본을 발급받아 확인할 수 있습니다. 소유권자가 낙찰자로 변경되고, 말소 대상 권리들이 삭제된 것을 확인할 수 있습니다.</p>
          <p>등기 완료 여부는 법원 경매계에 전화로 확인하거나, 대법원 법원경매정보 시스템에서 사건 진행 상황을 조회하면 됩니다. 통상 촉탁서 발송 후 3~5영업일 내에 등기가 완료됩니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례 및 예규',
        content: `<div class="ruling-box">
        <p>대법원은 경매에 의한 소유권 취득 시점을 대금완납 시점으로 명확히 하고 있습니다(민사집행법 제135조). 등기는 제3자에 대한 대항력을 갖추기 위한 것으로, 소유권 취득 자체와는 구별됩니다.</p>
        <p>등기 예규에 따라 법원의 경매 촉탁은 소유권이전등기와 말소 촉탁이 동시에 이루어지며, 등기관은 이를 일괄 처리합니다. 이 과정에서 별도의 신청 수수료는 발생하지 않습니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚡ <strong>취득세 60일 기한 엄수</strong>: 잔금납부일(소유권 취득일)로부터 60일 이내에 취득세를 납부하지 않으면 가산세가 부과됩니다.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>농지인 경우 농취증 선제출</strong>: 농지 낙찰 시 대금납부 전에 농지취득자격증명을 먼저 취득하여 법원에 제출해야 합니다.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ 국민주택채권 매입 의무가 있는 경우, 매입 후 즉시 시장 매도하면 실질 비용 부담이 줄어듭니다. 해당 여부는 취득 부동산의 공시가격을 기준으로 결정됩니다.</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_15_대금납부소유권이전.html">💰 대금납부 전 준비사항</a>
        <a href="경매_17_낙찰후명도.html">🏠 낙찰 후 명도 절차</a>
        <a href="경매_16_권리분석.html">📋 권리분석 — 인수되는 권리 확인</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-45',
    title: '강제관리',
    meta: '부동산을 매각하지 않고 임대 수익으로 채권을 회수하는 강제관리 절차와 요건을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>채무자의 부동산을 경매로 팔지 않고 임대료로 채권을 회수하고 싶은 채권자</li>
        <li>강제경매와 강제관리 중 어느 방법이 더 유리한지 비교하고 싶은 분</li>
        <li>채무자가 보유한 수익형 부동산(임대업)에 대해 집행을 고려하는 분</li>
        <li>강제관리 절차와 강제경매를 병행할 수 있는지 알고 싶은 분</li>
        <li>강제관리인이 무엇을 하는지 알고 싶은 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p><strong>강제관리</strong>는 부동산을 매각하지 않고, 법원이 선임한 관리인이 해당 부동산을 관리·운영하여 발생하는 <strong>수익(임대료, 과실 등)으로 채권을 변제</strong>하는 집행 방법입니다(민사집행법 제163조 이하).</p>
        <p>채무자가 보유한 수익성이 높은 부동산(예: 상가, 사무실, 임대 주택)의 경우, 경매로 처분하는 것보다 임대 수익을 통해 채권을 회수하는 것이 더 효율적일 수 있습니다.</p>
        <p>강제경매와 강제관리는 동일한 부동산에 대해 동시에 또는 선택적으로 진행할 수 있습니다.</p>
      </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 강제관리의 법적 근거와 요건</h3>
      <p>민사집행법 제163조는 강제관리를 규정하며, 금전채권의 집행을 위해 부동산에 대해 신청할 수 있다고 명시합니다. 강제경매와 마찬가지로 집행권원(확정판결, 공정증서 등)과 집행문이 필요합니다.</p>
      <p>강제관리 신청을 위해서는 ① 집행권원 및 집행문, ② 부동산 목록, ③ 해당 부동산이 수익을 발생시킨다는 점(임차인 현황, 임대차계약서 등)을 소명해야 합니다.</p>
      <h3>3-2. 강제관리 vs 강제경매 비교</h3>
      <table>
        <tr><th>구분</th><th>강제관리</th><th>강제경매</th></tr>
        <tr><td>채권회수 방법</td><td>부동산 수익(임대료 등)으로 변제</td><td>부동산 매각 대금으로 변제</td></tr>
        <tr><td>소유권 변동</td><td>없음 (채무자 소유 유지)</td><td>있음 (낙찰자에게 이전)</td></tr>
        <tr><td>회수 속도</td><td>느림 (수익 발생에 의존)</td><td>빠름 (매각 즉시)</td></tr>
        <tr><td>적합한 경우</td><td>수익형 부동산, 시세보다 시장가 낮을 때</td><td>채무 금액이 크거나 신속 회수 필요 시</td></tr>
        <tr><td>병행 가능 여부</td><td>강제경매와 동시 신청 가능</td><td>강제관리와 동시 신청 가능</td></tr>
      </table>
      <h3>3-3. 강제관리 절차 개요</h3>
      <p>① 강제관리 신청 → ② 법원의 강제관리 개시 결정 + 관리인 선임 → ③ 관리인이 부동산 점유·관리(임대료 수취) → ④ 관리 수익에서 집행비용·관리비 공제 후 채권자에게 배당 → ⑤ 채권 전액 변제 시 강제관리 종료.</p>
      <p>관리인은 법원이 선임하는 제3자로, 부동산의 임대·관리를 담당합니다. 기존 임차인이 있는 경우 관리인이 임대료를 직접 수취하며, 이를 법원에 보고하고 배당합니다.</p>
      <div class="case-box">
        <strong>사례: 상가 건물 강제관리</strong><br>
        채권자 A는 채무자 B 소유의 상가 건물(월 임대료 500만 원 × 5실 = 2,500만 원)에 대해 3,000만 원 채권의 강제관리를 신청했습니다.<br>
        법원이 관리인을 선임한 후, 관리인이 임대료를 수취하여 집행비용·관리비 공제 후 매월 A에게 배당하여 약 1년 4개월 만에 채권을 전액 회수했습니다.
      </div>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 강제관리와 강제경매를 동시에 신청할 수 있나요?</div>
        <div class="qna-a">
          <p>네, 동일한 부동산에 대해 강제관리와 강제경매를 동시에 신청하거나, 어느 하나를 진행 중에 다른 하나를 추가로 신청할 수 있습니다(민사집행법 제165조). 강제경매로 매각이 이루어지면 강제관리는 종료됩니다.</p>
          <p>실무에서는 경매 절차가 지연되는 동안 강제관리를 통해 임대 수익을 먼저 회수하는 전략을 병행하는 경우가 있습니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 강제관리 중에도 채무자가 부동산을 처분할 수 있나요?</div>
        <div class="qna-a">
          <p>강제관리가 개시되면 채무자는 부동산 관리 권한을 잃고 관리인이 이를 대신합니다. 그러나 강제관리 자체는 소유권 이전을 제한하는 처분금지 효력이 없으므로, 채무자가 부동산을 제3자에게 양도하는 것이 가능합니다.</p>
          <p>이를 방지하려면 가처분(처분금지가처분)이나 강제경매 신청을 통한 압류를 함께 진행하는 것이 필요합니다. 강제관리만으로는 소유권 이전에 대한 완전한 보호가 되지 않음을 유의해야 합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 임차인이 관리인에게 임대료 납부를 거부하면 어떻게 되나요?</div>
        <div class="qna-a">
          <p>강제관리 개시 결정 후 법원은 임차인에게 관리인에게 임대료를 지급하라는 명령을 내립니다(민사집행법 제168조). 임차인이 이를 거부하면 관리인은 법원에 보고하고, 법원이 강제집행 조치를 취할 수 있습니다.</p>
          <p>임차인이 여전히 채무자에게 임대료를 납부한 경우 이중 지급의 위험이 있으므로, 강제관리 개시 결정 사실을 임차인에게 정확히 고지하는 것이 중요합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 수익이 없는 부동산에도 강제관리를 신청할 수 있나요?</div>
        <div class="qna-a">
          <p>강제관리는 수익 발생을 전제로 하므로, 현재 수익이 없거나 공실 상태인 부동산에는 실익이 없습니다. 법원도 수익 발생 가능성이 없는 부동산에 대한 강제관리 신청을 허가하지 않을 수 있습니다.</p>
          <p>수익이 없는 부동산의 채권 집행에는 강제경매가 더 적합합니다. 강제관리 신청 전에 해당 부동산의 임대 현황과 수익 가능성을 먼저 파악하는 것이 중요합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 강제관리 중 관리 비용은 누가 부담하나요?</div>
        <div class="qna-a">
          <p>강제관리에 소요되는 관리 비용(관리인 보수, 유지보수 비용 등)은 집행비용으로서 수익에서 우선 공제됩니다. 신청 채권자는 강제관리 신청 시 예납금을 납부하여야 하며, 이 예납금은 나중에 수익에서 충당됩니다.</p>
          <p>관리 비용이 수익을 초과하면 채권자가 부담해야 하므로, 강제관리 신청 전에 예상 수익 대비 관리 비용을 검토하는 것이 중요합니다.</p>
          <p class='note'>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
        <p>대법원은 강제관리와 강제경매는 서로 독립된 집행 방법이지만 동일 목적(금전채권 만족)을 위한 것이므로, 하나의 채권에 대해 양자를 병행하여 진행하는 것은 허용된다고 판시하고 있습니다. 다만 중복 만족(초과 집행)은 허용되지 않으며, 채권이 만족되면 나머지 집행은 종료됩니다.</p>
        <p>강제관리 개시 결정 이전에 체결된 임대차계약은 관리인이 승계하는 것이 원칙이므로, 기존 임차인은 새로운 관리인 체제에서도 임대차계약의 내용에 따라 부동산을 계속 사용할 수 있습니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚠️ <strong>소유권 이전 제한 없음</strong>: 강제관리만으로는 채무자의 부동산 처분을 막을 수 없습니다. 처분금지가처분이나 강제경매 압류를 함께 진행하세요.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>수익 부족 위험</strong>: 부동산의 수익이 불안정하거나 공실이 많으면 채권 회수가 지연될 수 있습니다. 신청 전 수익 가능성을 충분히 검토하세요.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ 강제관리는 담보권 실행 경매(임의경매)에는 적용되지 않습니다. 담보권자는 강제경매 방법으로 집행해야 합니다.</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_06_강제경매신청절차.html">⚖️ 강제경매 신청 절차</a>
        <a href="경매_02_강제경매vs임의경매.html">🔍 강제경매와 임의경매 비교</a>
        <a href="경매_10_배당순위.html">📊 배당 순위와 구조</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-46',
    title: '형식적경매',
    meta: '공유물분할·유치권에 의한 형식적경매 유형, 절차, 강제경매와의 차이를 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>형제·자매와 공동으로 상속받은 부동산을 처분하고 싶은데 협의가 안 되는 분</li>
        <li>법원의 공유물분할 판결에서 "경매에 의한 분할" 명령을 받으신 분</li>
        <li>유치권자로서 민법 제322조에 따른 유치물 경매를 고려하는 분</li>
        <li>청산 절차·파산 절차에서 재산을 환가해야 하는 경우</li>
        <li>강제경매·임의경매와 형식적경매의 차이가 궁금한 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p><strong>형식적경매</strong>란 채무자에게 채권을 변제받기 위한 목적이 아니라, <strong>법률 규정이나 법원의 명령에 따라 재산을 환가(換價)하여 대금을 분배하거나 다른 법률적 목적을 달성하기 위한 경매</strong>입니다(민사집행법 제274조).</p>
        <p>강제경매·임의경매와의 가장 큰 차이는 <strong>집행권원(판결 등)이나 담보권이 없어도 법원이 경매를 명할 수 있다</strong>는 점입니다. 절차는 강제경매 규정을 준용하지만, 목적은 채무 변제가 아니라 재산의 공정한 환가와 분배에 있습니다.</p>
        <p>가장 흔한 유형은 <strong>공유물분할을 위한 경매</strong>로, 공유 부동산을 현물로 나눌 수 없을 때 법원이 전체를 경매하여 대금을 지분 비율대로 나누도록 명하는 것입니다.</p>
      </div>`
      },
      {
        heading: '형식적경매의 주요 유형',
        content: `<div class="type-grid">
        <div class="type-card">
          <h4>① 공유물분할을 위한 경매</h4>
          <p><strong>법적 근거</strong>: 민법 제269조 제2항, 민사집행법 제274조</p>
          <p><strong>발생 원인</strong>: 공유자 간 현물분할 협의 불성립 또는 현물분할이 불가능한 경우 법원이 경매 분할을 명함</p>
          <p><strong>특징</strong>: 공유자 전원의 지분을 일체로 경매. 매각대금을 지분 비율로 분배. 공유자 우선매수권 적용 안 됨.</p>
        </div>
        <div class="type-card">
          <h4>② 유치권에 의한 경매</h4>
          <p><strong>법적 근거</strong>: 민법 제322조, 민사집행법 제274조</p>
          <p><strong>발생 원인</strong>: 유치권자가 피담보채권의 변제를 받기 위해 유치 중인 물건의 경매를 법원에 청구</p>
          <p><strong>특징</strong>: 집행권원 불필요. 경매 후 배당에서 유치권자는 일반채권자로 참가 (우선변제권 없음). 주로 건설·수리 업자가 사용.</p>
        </div>
        <div class="type-card">
          <h4>③ 청산·파산 절차상 경매</h4>
          <p><strong>법적 근거</strong>: 채무자 회생 및 파산에 관한 법률, 민사집행법 준용</p>
          <p><strong>발생 원인</strong>: 법인 청산, 파산 관재인이 파산재단 재산을 환가하기 위한 경매</p>
          <p><strong>특징</strong>: 파산관재인·청산인이 경매를 신청. 채무자(법인)의 모든 재산을 환가하여 파산채권자에게 배당.</p>
        </div>
        <div class="type-card">
          <h4>④ 기타 법령에 의한 경매</h4>
          <p><strong>법적 근거</strong>: 개별 법령 및 민사집행법 제274조</p>
          <p><strong>예시</strong>: 부재자 재산관리인의 재산 처분을 위한 경매(민법 제25조), 상속재산 관리인의 청산을 위한 경매 등</p>
          <p><strong>특징</strong>: 법원의 허가를 받아 진행. 강제경매 절차 준용.</p>
        </div>
      </div>`
      },
      {
        heading: '강제경매·임의경매와의 비교',
        content: `<table class="diff-table">
        <tr><th>구분</th><th>강제경매</th><th>임의경매</th><th>형식적경매</th></tr>
        <tr><td>신청 근거</td><td>집행권원 (확정판결 등)</td><td>담보권 (저당권 등)</td><td>법률 규정 또는 법원 명령</td></tr>
        <tr><td>목적</td><td>금전채권 변제</td><td>담보권 실행 (채권 회수)</td><td>재산 환가·분배 (채무 변제 아님)</td></tr>
        <tr><td>집행권원 필요</td><td>필요</td><td>불필요</td><td>불필요</td></tr>
        <tr><td>배당 구조</td><td>채권자 배당</td><td>채권자 배당</td><td>공유자 분배 등 (목적에 따라 다름)</td></tr>
        <tr><td>준용 규정</td><td>민집 제79조 이하</td><td>민집 제264조 이하</td><td>민집 제274조 → 강제경매 준용</td></tr>
        <tr><td>대표 사례</td><td>판결 후 채무자 재산 경매</td><td>은행 담보물 경매</td><td>공유물분할·유치권 경매</td></tr>
      </table>
      <div class="info-box">
        <p><strong>ℹ️ 절차는 강제경매 준용</strong>: 형식적경매의 진행 절차(감정평가, 매각기일, 입찰, 낙찰, 대금납부, 소유권이전 등)는 강제경매 규정을 그대로 적용합니다(민사집행법 제274조 제2항). 입찰자 입장에서는 일반 강제경매와 절차상 동일합니다.</p>
      </div>`
      },
      {
        heading: '공유물분할 경매 절차 흐름',
        content: `<p>형식적경매 중 가장 빈번한 공유물분할 경매의 흐름을 단계별로 정리합니다.</p>
      <div class="flow">
        <div class="flow-item">
          <div class="flow-num">1</div>
          <div class="flow-body">
            <strong>공유물분할 청구의 소 제기</strong>
            공유자 중 1인이 다른 공유자를 상대로 법원에 공유물분할 청구의 소 제기(민법 제269조). 협의 불성립 또는 협의 거부 시 소 제기 가능.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">2</div>
          <div class="flow-body">
            <strong>법원의 분할 방법 결정</strong>
            현물분할 가능 시 → 현물분할 판결. 현물분할 불가(성질상 분할 불능, 가액 현저 감소 우려) → <strong>경매에 의한 분할 판결</strong>(민법 제269조 제2항).
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">3</div>
          <div class="flow-body">
            <strong>형식적경매 신청</strong>
            분할 판결 확정 후 공유자 중 1인이 집행법원에 형식적경매 신청. 판결 정본과 확정증명원 첨부.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">4</div>
          <div class="flow-body">
            <strong>경매 진행 (강제경매 준용)</strong>
            감정평가 → 최저매각가격 결정 → 매각기일 공고 → 입찰 → 낙찰 → 대금납부 → 소유권이전.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">5</div>
          <div class="flow-body">
            <strong>매각대금 분배</strong>
            집행비용 공제 후 각 공유자의 지분 비율대로 대금 분배. 각 지분에 설정된 담보권자는 해당 지분에 해당하는 금액에서 우선 배당.
          </div>
        </div>
      </div>
      <div class="case-box">
        <strong>사례: 형제 3인 공유 아파트 형식적경매</strong><br><br>
        아버지 사망 후 자녀 A·B·C가 1/3씩 공유 중인 아파트. A만 매각에 찬성하고 B·C는 반대.<br>
        A가 공유물분할 청구의 소 제기 → 법원이 "경매에 의한 분할" 판결 → A가 형식적경매 신청.<br>
        낙찰가 3억 원 → 집행비용 공제 후 A·B·C 각 1억 원씩 분배.<br>
        <em>단, B의 지분에 저당권(채권액 5,000만 원)이 설정되어 있었다면 → B 분배금에서 저당권자에게 우선 배당 후 잔액을 B에게.</em>
      </div>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 공유물분할 경매에서 공유자도 입찰에 참여할 수 있나요?</div>
        <div class="qna-a">
          <p>네, 공유자도 다른 입찰자와 동일하게 입찰에 참여할 수 있습니다. 다만 공유물분할 경매는 강제경매와 달리 <strong>공유자 우선매수권이 적용되지 않습니다</strong>. 즉, 최고가를 써야만 낙찰받을 수 있습니다.</p>
          <p>공유자가 낙찰받으면 다른 공유자의 지분을 취득하게 되어 단독 소유자가 됩니다. 다른 공유자는 지분에 해당하는 매각대금을 수령합니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 유치권에 의한 경매에서 유치권자는 우선 배당을 받나요?</div>
        <div class="qna-a">
          <p>유치권에 의한 형식적경매에서 유치권자는 <strong>우선변제권이 없습니다</strong>. 저당권자 등 담보권자가 먼저 배당받고, 유치권자는 남은 금액에서 일반채권자로서 안분배당을 받습니다.</p>
          <p>이 때문에 유치권자가 경매로 채권을 충분히 회수하지 못하는 경우가 발생합니다. 유치권에 의한 경매 신청보다는 유치권을 계속 행사하면서 채무자와 협상하는 전략이 실무상 더 유효할 수 있습니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 형식적경매에도 배당요구를 할 수 있나요?</div>
        <div class="qna-a">
          <p>형식적경매의 경우에도 강제경매 규정을 준용하므로, 해당 부동산에 이해관계를 가진 채권자(저당권자, 임차인 등)는 배당요구종기까지 배당요구를 할 수 있습니다.</p>
          <p>다만 형식적경매의 주된 목적은 매각대금의 공유자 간 분배이므로, 각 공유자의 지분에 설정된 담보권자는 해당 지분에 해당하는 매각대금에서 우선 배당을 받고, 나머지가 해당 공유자에게 지급됩니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 공유물분할 소송 없이 바로 형식적경매를 신청할 수 있나요?</div>
        <div class="qna-a">
          <p>공유물분할을 위한 형식적경매는 반드시 법원의 "경매에 의한 분할" 판결이 먼저 있어야 신청할 수 있습니다. 판결 없이 바로 경매를 신청하는 것은 불가능합니다.</p>
          <p>다만 공유자 전원이 경매 분할에 합의한 경우라면, 별도의 소 없이 법원에 협의 분할 경매를 신청하는 방법도 검토할 수 있습니다. 이 경우 전원의 동의 서류를 갖추어 신청합니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 형식적경매 낙찰자가 기존 임차인을 내보낼 수 있나요?</div>
        <div class="qna-a">
          <p>형식적경매도 강제경매 규정을 준용하므로, 말소기준권리 이후의 임차인은 매각으로 소멸합니다. 낙찰자는 인도명령 신청(민사집행법 제136조)으로 명도를 요구할 수 있습니다.</p>
          <p>반면 말소기준권리보다 선순위의 대항력 있는 임차인은 낙찰자가 인수해야 합니다. 입찰 전 권리분석에서 임차인 현황을 반드시 확인하세요.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
        <p>대법원은 공유물분할 청구의 소에서 법원이 경매에 의한 분할을 명하는 것은 현물분할이 불가능하거나 현물분할 시 가액이 현저히 감소할 우려가 있는 경우에 한한다고 판시하고 있습니다(민법 제269조 제2항). 단순히 공유자 간에 분쟁이 있다는 이유만으로 경매 분할을 명하지는 않습니다.</p>
        <p>또한 공유물분할 경매에서 각 공유자의 지분에 저당권이 설정되어 있는 경우, 그 저당권자는 해당 공유자에게 귀속될 매각대금에서 우선 변제받게 됩니다. 전체 매각대금에서 순위 없이 우선 변제받는 것이 아니라 지분별로 안분하여 계산됩니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚠️ <strong>공유물분할 소송 비용과 시간</strong>: 분할 청구 소송 → 판결 확정 → 형식적경매 신청까지 수 년이 소요될 수 있습니다. 조정·협의 분할이 가능하다면 먼저 시도하세요.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>유치권 경매의 한계</strong>: 유치권자는 경매 후 우선변제권이 없어 배당을 충분히 받지 못할 수 있습니다. 유치권 경매 전에 전문가와 배당 가능성을 검토하세요.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ 형식적경매는 입찰자 입장에서 일반 경매와 절차가 동일합니다. 권리분석, 감정가 확인, 임차인 현황 파악 등 일반 경매와 같은 주의가 필요합니다.</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_27_공유부동산경매.html">🏠 공유 부동산 경매 (지분경매)</a>
        <a href="경매_19_유치권대응.html">⚖️ 유치권 성립 요건과 대응</a>
        <a href="경매_10_배당순위.html">📊 배당순위 구조</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  {
    id: 'ef-47',
    title: '자동차에 대한 강제집행',
    meta: '채무자 명의 자동차를 압류·경매하는 절차, 차량 인도 집행, 부동산 경매와의 차이를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
        <li>채무자에게 부동산은 없지만 고가의 자동차가 있어 집행을 고려하는 채권자</li>
        <li>이미 확정판결을 받았는데 채무자가 차량만 가지고 있는 경우</li>
        <li>자동차 경매 절차와 일반 부동산 경매의 차이가 궁금한 분</li>
        <li>자동차를 담보로 대출을 실행한 후 채무자가 연체 중인 경우</li>
        <li>채무자가 차량을 숨기거나 명의를 바꾸려 할 때 대응 방법이 궁금한 분</li>
      </ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
        <p>자동차는 등록이 되어 있어 <strong>부동산에 준하는 강제집행 방법</strong>이 적용됩니다(민사집행법 제187조). 부동산처럼 자동차등록원부에 <strong>압류 등록</strong>을 하고, 집행관이 차량을 <strong>인도받아 보관</strong>한 후 <strong>경매</strong>로 매각합니다.</p>
        <p>핵심 실무 포인트: 압류 등록만으로는 부족하고, 집행관이 차량을 <strong>실제로 점유·인도받아야</strong> 경매를 진행할 수 있습니다. 채무자가 차량을 숨기거나 인도를 거부하면 집행이 지연될 수 있어, 신속한 대응이 중요합니다.</p>
        <p>자동차저당권자(할부금융사 등)는 담보권 실행으로 별도 집행 가능합니다(민사집행법 제264조).</p>
      </div>`
      },
      {
        heading: '자동차 강제집행 절차',
        content: `<div class="flow">
        <div class="flow-item">
          <div class="flow-num">1</div>
          <div class="flow-body">
            <strong>집행권원 및 집행문 취득</strong>
            확정판결, 지급명령(확정), 공정증서(집행력 있는 것) 등 집행권원을 갖추고, 법원에서 집행문을 부여받습니다. 집행권원이 없으면 자동차 압류를 먼저 가압류로 진행해야 합니다.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">2</div>
          <div class="flow-body">
            <strong>자동차 압류 신청 (등록원부 압류)</strong>
            집행법원에 자동차 강제경매 신청서를 제출합니다. 법원이 압류 결정 → 자동차등록원부에 압류 등록(시·군·구청 자동차등록과에 촉탁). 이 단계에서 채무자는 차량을 처분·이전할 수 없게 됩니다.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">3</div>
          <div class="flow-body">
            <strong>집행관의 차량 인도 집행</strong>
            법원의 인도 명령에 따라 집행관이 채무자에게서 차량을 인도받습니다. <span class="badge-warn">⚡ 핵심 단계</span> 채무자가 차량을 점유 중이어야 하며, 차량을 찾지 못하면 집행이 사실상 불가능합니다. 인도받은 차량은 집행관 또는 보관소에 보관됩니다.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">4</div>
          <div class="flow-body">
            <strong>감정평가 및 최저매각가격 결정</strong>
            법원이 선임한 감정인이 차량 시세를 감정합니다. 자동차는 노후도, 주행거리, 사고 이력 등이 반영됩니다. 감정가를 기준으로 최저매각가격 결정.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">5</div>
          <div class="flow-body">
            <strong>매각기일 공고 및 입찰</strong>
            부동산 경매와 동일하게 기일입찰 방식으로 진행됩니다. 입찰보증금은 최저매각가격의 10%. 최고가 매수신고인에게 매각허가결정.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">6</div>
          <div class="flow-body">
            <strong>대금납부 및 소유권이전</strong>
            낙찰자가 잔금납부 → 자동차등록원부에 소유권이전 등록 촉탁 → 낙찰자 앞으로 이전. 취득세 납부(자동차 취득세: 차량 가액의 7%, 경차 4%). 차량은 보관소에서 낙찰자가 인수.
          </div>
        </div>
        <div class="flow-item">
          <div class="flow-num">7</div>
          <div class="flow-body">
            <strong>배당 절차</strong>
            매각대금에서 집행비용(보관료 포함) 공제 → 저당권자·압류채권자 순으로 배당. 잔여금은 채무자에게 반환.
          </div>
        </div>
      </div>`
      },
      {
        heading: '제출 서류 목록',
        content: `<table>
        <tr><th>서류</th><th>발급처</th><th>비고</th></tr>
        <tr><td>집행력 있는 정본 (판결문·지급명령·공정증서)</td><td>법원 (판결문), 공증인 (공정증서)</td><td>집행문 부여 후 제출</td></tr>
        <tr><td>집행문</td><td>제1심 법원 또는 공증인</td><td>필수</td></tr>
        <tr><td>송달증명원</td><td>해당 법원</td><td>판결 등 채무자 송달 확인용</td></tr>
        <tr><td>자동차등록원부 (갑구·을구)</td><td>자동차등록사업소, 인터넷</td><td>채무자 명의 차량 특정</td></tr>
        <tr><td>자동차 강제경매 신청서</td><td>집행법원 (양식 비치)</td><td>차량번호·차대번호·소유자 명기</td></tr>
      </table>
      <div class="info-box">
        <p><strong>ℹ️ 비용 안내</strong>: 자동차 강제집행은 차량 보관료(일 단위 발생)가 추가됩니다. 경매가 장기화될수록 보관료가 매각대금을 잠식할 수 있으므로, 신속한 진행이 중요합니다. 인지대, 송달료, 감정료 등 예납금을 신청 시 납부합니다.</p>
      </div>`
      },
      {
        heading: '자동차 강제집행 vs 부동산 강제경매 비교',
        content: `<table class="diff-table">
        <tr><th>구분</th><th>자동차 강제집행</th><th>부동산 강제경매</th></tr>
        <tr><td>압류 방법</td><td>자동차등록원부 압류 등록</td><td>부동산등기부 압류 등기</td></tr>
        <tr><td>물건 점유</td><td>집행관이 차량 실물 인도받아야 함 (핵심)</td><td>등기부 압류만으로 충분</td></tr>
        <tr><td>감정 기준</td><td>시세·노후도·사고이력·주행거리</td><td>시세·위치·현황</td></tr>
        <tr><td>취득세</td><td>취득가액의 7% (경차 4%)</td><td>부동산 종류별 상이</td></tr>
        <tr><td>소유권이전</td><td>자동차등록원부 이전등록 촉탁</td><td>부동산등기부 이전등기 촉탁</td></tr>
        <tr><td>보관 비용</td><td>발생 (보관소 보관료)</td><td>미발생</td></tr>
        <tr><td>집행 실패 위험</td><td>차량 은닉 시 집행 불가</td><td>상대적으로 낮음</td></tr>
      </table>`
      },
      {
        heading: '자주하는 질문 Q&A',
        content: `<div class="qna-item">
        <div class="qna-q">Q. 채무자가 차량을 숨기면 어떻게 하나요?</div>
        <div class="qna-a">
          <p>압류 등록이 되어 있으면 채무자는 차량을 제3자에게 이전할 수 없습니다. 그러나 차량을 물리적으로 숨겨 집행관의 인도 집행을 피하는 것은 가능합니다.</p>
          <p>이 경우 집행관과 협력하여 차량 소재지(주차장, 직장, 거주지 등)를 파악해야 합니다. 채무자가 차량을 은닉하면 강제집행 방해죄(형법 제323조)가 성립할 수 있으므로, 이를 고지하는 것도 효과적입니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 할부로 구입한 차량(할부금융 설정)도 경매할 수 있나요?</div>
        <div class="qna-a">
          <p>할부금융사가 자동차저당권을 설정해 둔 경우, 강제경매를 신청하면 저당권자(할부금융사)가 선순위로 배당을 받습니다. 채무자가 할부금을 상환 중이라면 잔여 할부금 채권이 선순위 배당을 받아가므로, 채권자 입장에서 배당받을 금액이 거의 없을 수 있습니다.</p>
          <p>입찰자 입장에서도 저당권은 매각으로 소멸하고 저당권자는 배당에서 변제받으므로, 낙찰 후 별도로 할부금을 납부할 필요는 없습니다. 자동차등록원부 을구를 반드시 확인하세요.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 자동차를 경매 낙찰받으면 즉시 사용할 수 있나요?</div>
        <div class="qna-a">
          <p>대금납부 완료 후 소유권이전 등록이 이루어지면 낙찰자 명의의 차량이 됩니다. 보관소에서 차량을 인수하고 자동차보험(의무보험 포함)에 가입한 후 즉시 사용 가능합니다.</p>
          <p>단, 차량 상태를 입찰 전에 반드시 확인해야 합니다. 법원 경매 차량은 보관 기간 동안 관리 소홀로 상태가 나빠지는 경우가 있으며, 낙찰 후에는 하자 담보책임 주장이 어렵습니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 가압류로도 차량을 묶어둘 수 있나요?</div>
        <div class="qna-a">
          <p>네, 집행권원 없이도 <strong>자동차 가압류</strong>를 신청하여 자동차등록원부에 가압류를 등록할 수 있습니다. 이를 통해 채무자가 차량을 처분하는 것을 막을 수 있습니다.</p>
          <p>가압류 단계에서는 차량을 실물로 인도받지 않아도 됩니다(등록원부 가압류만으로 처분 금지). 이후 본안소송에서 승소하여 집행권원을 취득하면 가압류를 본압류로 이행하여 강제경매를 진행합니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 건설기계(포크레인, 굴착기 등)도 같은 방법으로 집행하나요?</div>
        <div class="qna-a">
          <p>네, 건설기계도 민사집행법 제187조에 따라 자동차와 동일한 방법으로 강제집행을 할 수 있습니다. 건설기계등록원부에 압류를 등록하고, 집행관이 인도받아 경매를 진행합니다.</p>
          <p>소형선박(총톤수 20톤 미만)도 동일한 규정이 적용됩니다. 다만 선박의 경우 보관 장소와 비용이 더 복잡할 수 있습니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-q">Q. 채무자가 차량을 제3자에게 매도한 것 같습니다. 어떻게 대응하나요?</div>
        <div class="qna-a">
          <p>압류 등록 전에 제3자에게 이전된 경우라면 강제집행이 어렵습니다. 그러나 채무자가 채권자를 해할 목적으로 재산을 처분했다면 <strong>사해행위취소 소송</strong>(민법 제406조)을 통해 이전을 무효화할 수 있습니다.</p>
          <p>가압류 등록 후에 채무자가 제3자에게 이전을 시도한 경우, 가압류 등록이 되어 있어 제3자 앞으로의 이전등록이 거부됩니다. 따라서 가압류를 신속히 신청하는 것이 중요합니다.</p>
          <p class="note">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
        </div>
      </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
        <p>대법원은 자동차에 대한 강제집행에서 집행관이 차량을 실제로 인도받지 못한 상태에서는 경매 절차를 진행할 수 없다는 입장을 취하고 있습니다. 압류 등록만으로는 부족하고, 물리적 점유 이전이 이루어져야 매각 절차가 가능합니다.</p>
        <p>자동차 압류 후 채무자가 차량을 은닉하거나 훼손한 경우, 강제집행 방해죄(형법 제323조)의 성립 가능성이 인정됩니다. 또한 채무자가 압류된 차량을 무단 사용하여 사고를 낸 경우 불법행위 책임이 문제될 수 있습니다.</p>
      </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
        <p>⚡ <strong>차량 실물 확보가 핵심</strong>: 압류 등록 후 집행관이 차량을 실제로 인도받지 못하면 경매를 진행할 수 없습니다. 채무자의 차량 위치를 미리 파악하고 집행 당일 신속히 인도받는 것이 중요합니다.</p>
      </div>
      <div class="warn-box">
        <p>⚠️ <strong>보관료 누적 주의</strong>: 차량 보관료는 집행비용으로 처리되지만, 보관이 장기화될수록 매각대금에서 공제되는 금액이 커집니다. 신속한 매각 진행이 채권자에게 유리합니다.</p>
      </div>
      <div class="info-box">
        <p>ℹ️ 채무자 명의의 차량 보유 여부는 자동차등록원부(자동차365 사이트 또는 지자체 자동차등록과)에서 조회할 수 있습니다. 필요시 법원을 통한 재산명시·재산조회 신청을 병행하세요.</p>
      </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
        <a href="경매_06_강제경매신청절차.html">⚖️ 강제경매 신청 절차</a>
        <a href="경매_08_부동산경매와가압류.html">🔒 가압류로 재산 묶기</a>
        <a href="경매_10_배당순위.html">📊 배당순위 구조</a>
      </div>`
      }
    ],
    laws: [],
    forms: []
  },

  /* ---- 유체동산 강제집행 (콘텐츠3) ---- */
  {
    id: 'ef-48',
    title: '유체동산 강제집행이란? — 판결 후 상대방 물건을 처분하는 방법',
    meta: '채권자가 집행관을 통해 채무자의 동산을 압류·경매하여 채권을 회수하는 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>법원 판결문·지급명령·공정증서를 받았는데 상대방이 돈을 주지 않는 상황입니다.</li>
          <li>상대방 명의의 부동산은 없거나 이미 담보가 잡혀 있어 다른 방법을 찾고 있습니다.</li>
          <li>상대방의 집이나 사업장에 팔 수 있는 물건(가전제품, 재고 등)이 있어 보입니다.</li>
          <li>강제집행을 어디에 신청해야 하는지, 절차가 어떻게 되는지 전혀 모릅니다.</li>
          <li>집행 신청 전에 어떤 준비가 필요한지 확인하고 싶습니다.</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">한눈에 보는 유체동산 강제집행</span>
          <ul>
            <li>유체동산 강제집행이란, 채권자가 집행관에게 신청하여 채무자가 점유하는 동산(가전·가구·재고 물품 등)을 압류한 뒤 경매로 처분해 돈을 회수하는 제도입니다.</li>
            <li>집행기관은 법원이 아닌 <strong>집행관</strong>이며, 집행관은 독립된 사법기관으로 직접 현장에서 압류를 실시합니다.</li>
            <li>판결문·공정증서 등 집행권원이 있으면 상대방 동의 없이 신청할 수 있고, 신청 후 집행관이 현장에 나가 압류표를 부착하고 경매를 진행합니다.</li>
          </ul>
        </div>
        <h3>전체 절차 흐름</h3>
        <div class="flow">
          <div class="flow-item"><div class="flow-num">①</div><div>집행권원 확보</div></div>
          <div class="flow-item"><div class="flow-num">②</div><div>집행관에게 신청</div></div>
          <div class="flow-item"><div class="flow-num">③</div><div>현장 압류 실시</div></div>
          <div class="flow-item"><div class="flow-num">④</div><div>경매(호가경매)</div></div>
          <div class="flow-item"><div class="flow-num">⑤</div><div>매각대금 수령</div></div>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 집행권원 — 강제집행의 출발점</h3>
        <p>유체동산에 대한 강제집행을 신청하려면 먼저 <strong>집행력 있는 집행권원</strong>이 있어야 합니다. 집행권원이란 국가가 강제집행을 허용한 공문서입니다.</p>
        <table>
          <thead><tr><th>종류</th><th>내용</th><th>비고</th></tr></thead>
          <tbody>
            <tr><td>확정 판결문</td><td>소송에서 이긴 뒤 판결이 확정된 경우</td><td>집행문 부여 필요</td></tr>
            <tr><td>지급명령</td><td>독촉절차로 발령된 지급명령이 확정된 경우</td><td>집행문 부여 필요</td></tr>
            <tr><td>공정증서</td><td>공증인이 작성한 집행인낙 공정증서</td><td>집행문 부여 필요</td></tr>
            <tr><td>가집행 선고부 판결</td><td>판결 미확정이라도 가집행이 선고된 경우</td><td>상소 중에도 집행 가능</td></tr>
            <tr><td>화해조서·조정조서</td><td>법원 조정·화해 성립 후 작성된 조서</td><td>확정판결과 동일 효력</td></tr>
          </tbody>
        </table>
        <p>집행권원이 있더라도 단독으로 집행할 수는 없고, 법원에서 <strong>집행문을 부여받은 정본</strong>을 집행관에게 제출해야 합니다(민사집행법 제28조).</p>
        <h3>② 유체동산의 범위 — 어떤 것이 대상인가</h3>
        <p>민사집행법에서 말하는 '유체동산'은 일반적인 민법상 동산보다 넓은 개념입니다. 민사집행법 제189조에 따르면 다음을 포함합니다.</p>
        <div class="summary-box">
          <span class="label">유체동산 집행 대상</span>
          <ul>
            <li>일반 동산(가전제품·가구·의류·귀금속·재고 물품·현금 등)</li>
            <li>등기할 수 없는 토지의 정착물로서 독립하여 거래의 객체가 되는 것</li>
            <li>토지에서 분리하기 전의 과실로서 1개월 이내에 수확할 수 있는 것</li>
            <li>유가증권으로서 배서가 금지되지 않은 것 — 어음·수표·상품권 등</li>
          </ul>
        </div>
        <h3>③ 집행기관 — 집행관이 직접 실시</h3>
        <p>유체동산 강제집행은 <strong>집행관</strong>이 실시합니다(민사집행법 제188조 제1항). 집행관은 법원 소속의 독립적인 사법기관으로, 채권자가 집행관에게 직접 집행을 위임(신청)하면, 집행관이 현장을 방문하여 압류를 실시하고 이후 경매 절차를 진행합니다.</p>
        <p>부동산 경매와 달리 유체동산 집행은 법원이 아닌 <strong>집행관 사무소에 신청</strong>합니다. 채무자의 주소지나 물건 소재지를 관할하는 지방법원 소속 집행관에게 신청합니다.</p>
        <div class="case-box">
          <div class="case-title">📋 실제 상황 예시</div>
          <p>A씨는 B씨로부터 2,000만 원을 빌려주었는데 B씨가 갚지 않아 소송을 제기하여 승소 판결을 받았습니다. B씨 명의의 부동산은 없고, B씨가 운영하는 음식점에는 냉장고·주방기기·TV 등 집행 가능한 물건이 있습니다. A씨는 판결의 집행문을 받아 B씨 가게 소재지 관할 집행관에게 강제집행을 위임했습니다. 집행관은 현장 방문 후 냉장고·주방기기 등에 압류표를 부착하고 2주 후 호가경매를 진행, A씨는 매각대금에서 채권의 일부를 회수했습니다.</p>
        </div>
        <h3>④ 집행의 효력 발생 시점</h3>
        <p>집행관이 유체동산을 압류한 때부터 압류의 효력이 발생합니다(민사집행법 제188조 제1항). 압류가 이루어지면 채무자는 그 물건을 처분할 수 없게 되고, 제3자가 압류를 무시하고 취득하더라도 보호받지 못합니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚠️ 알아두셔야 할 한계</div>
          <p>유체동산 강제집행으로 회수할 수 있는 금액은 실제 경매에서 낙찰되는 금액에 한정됩니다. 동산은 감가상각이 빠르고 중고 경매 낙찰가가 매우 낮은 경우가 많아, 채권 전액 회수가 어려울 수 있습니다. 또한 채무자가 생활에 꼭 필요한 물건(압류금지물건)은 압류할 수 없으므로, 집행 전에 어떤 물건이 압류 가능한지 검토가 필요합니다.</p>
        </div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">판결을 받았으면 바로 집행이 가능한가요?</div>
          <div class="qna-a">
            <p>판결이 확정되거나 가집행 선고가 있는 경우에 강제집행을 신청할 수 있습니다. 그러나 판결문 자체만으로는 집행할 수 없고, 판결을 내린 법원에서 <strong>집행문</strong>을 부여받아야 합니다. 집행문이 부여된 판결 정본을 '집행력 있는 정본'이라고 하며, 이를 집행관에게 제출해야 집행 위임이 가능합니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">상대방 집이나 가게에 직접 찾아가서 물건을 가져오면 안 되나요?</div>
          <div class="qna-a">
            <p>절대로 안 됩니다. 채권자가 스스로 채무자의 물건을 가져가는 행위는 <strong>강도죄 또는 절도죄</strong>에 해당할 수 있으며, 공무원(집행관)을 통하지 않는 자력구제는 법적으로 금지되어 있습니다. 강제집행은 반드시 집행관을 통해 법이 정한 절차에 따라야 합니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자가 다른 사람 명의 물건이라고 주장하면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>집행관은 채무자가 점유하고 있는 물건을 압류합니다. 물건의 실제 소유자가 따로 있다면 그 소유자가 <strong>제3자 이의의 소</strong>(민사집행법 제48조)를 제기하여 압류를 취소시킬 수 있습니다. 집행관은 압류를 실시하면서 채무자의 점유 여부 등을 합리적으로 확인해야 합니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자가 압류 후에 물건을 빼돌리면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>압류 후에 채무자가 압류된 물건을 임의로 처분하거나 손상·은닉하는 행위는 <strong>강제집행 면탈죄</strong>(형법 제327조)에 해당하여 형사 처벌 대상이 됩니다. 채무자가 물건을 빼돌렸다면 형사 고소와 함께 법무사를 통한 법적 조치를 취하시기 바랍니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자가 집행관이 오는 것을 막으면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>집행관은 강제집행을 위해 채무자의 주거·창고·사무소에 들어갈 수 있으며, 필요한 경우 잠긴 문을 열게 하거나 직접 개방하게 할 권한이 있습니다(민사집행법 제5조). 채무자나 제3자가 집행관의 직무 집행을 방해하면 <strong>공무집행방해죄</strong>가 성립할 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">유체동산 집행만으로 채권 전액을 받을 수 있나요?</div>
          <div class="qna-a">
            <p>현실적으로 동산은 경매에서 시세보다 훨씬 낮은 가격에 낙찰되는 경우가 많아, 채권 전액 회수가 어려울 수 있습니다. 채무자에게 은행 계좌나 급여 채권이 있다면 <strong>채권 압류 및 추심·전부명령</strong>이 더 효과적일 수 있으므로, 법무사와 상담을 통해 가장 효율적인 집행 방법을 찾으시기 바랍니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">집행관의 주의의무와 불법행위 책임</div>
          <p>집행관은 독립·단독의 사법기관으로서 스스로 법령을 해석하고 집행할 권한이 있습니다. 대법원은 "집행관이 당연히 알아야 할 유체동산 집행에 관한 법규나 필요한 지식을 갖추지 못하였고 또한 조사를 게을리하여 법규의 해석을 그르쳐 타인에게 손해를 가하였다면 불법행위가 성립한다"고 판시하였습니다(대판 2003. 9. 26. 2001다52773).</p>
          <p><strong>실무적 의미:</strong> 집행관은 압류금지 물건 여부 등을 직권으로 조사·판단해야 하며, 잘못된 집행으로 손해가 발생하면 국가 배상 청구가 가능합니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">종물의 독립 압류 가부</div>
          <p>대법원은 "종물은 주물의 상용에 이바지하는 관계에 있어야 하고, 주물의 상용에 이바지한다 함은 주물 그 자체의 경제적 효용을 다하게 하는 것을 말하는 것으로서 주물의 소유자나 이용자의 상용에 공여되고 있더라도 주물 그 자체의 효용과 직접 관계가 없는 물건은 종물이 아니다"라고 판시하였습니다(대판 1997. 10. 10. 97다3750).</p>
          <p><strong>실무적 의미:</strong> 부동산에 부속된 물건이라도 주물과 독립적인 거래 대상이 될 수 있으면 유체동산으로 별도 압류가 가능합니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 집행권원 없이 신청 불가</div>
          <p>집행력 있는 정본(판결문에 집행문 부여)이 없으면 집행관에게 집행 위임 자체가 불가능합니다. 집행문을 미리 발급받아 두어야 합니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 채무자 재산 사전 파악 필요</div>
          <p>채무자가 점유하는 물건이 없거나 모두 압류금지 물건이라면 집행을 해도 실효가 없습니다. 미리 채무자의 주소지나 사업장을 확인하고, 집행 가능한 물건이 있는지 판단 후 신청하는 것이 효율적입니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">ℹ️ 부부공유 동산도 압류 가능</div>
          <p>채무자와 배우자의 공유 유체동산으로서 채무자가 점유하거나 배우자와 공동 점유하고 있는 것은, 채무자에 대한 집행권원만으로도 압류할 수 있습니다(민사집행법 제190조).</p>
        </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
          <a href="#" class="next-link" data-target="ef-49">
            <span class="nl-title">압류할 수 있는 물건 vs 압류금지 물건</span>
            <span class="nl-desc">어떤 물건을 압류할 수 있나요?</span>
          </a>
          <a href="#" class="next-link" data-target="ef-50">
            <span class="nl-title">집행관 신청 절차 및 준비서류</span>
            <span class="nl-desc">어떻게 신청하고, 무슨 서류가 필요한가요?</span>
          </a>
          <a href="#" class="next-link" data-target="ef-52">
            <span class="nl-title">매각·배당 — 돈은 어떻게 받나요?</span>
            <span class="nl-desc">경매 후 매각대금 수령 방법</span>
          </a>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제188조', desc: '유체동산 강제집행의 집행기관(집행관)' },
      { name: '민사집행법 제189조', desc: '유체동산의 범위' },
      { name: '민사집행법 제28조', desc: '집행문 부여' },
    ],
    forms: []
  },

  {
    id: 'ef-49',
    title: '압류할 수 있는 물건 vs 압류금지 물건 — 민사집행법 제195조',
    meta: '유체동산 집행에서 압류 가능한 물건과 법으로 보호받는 압류금지 물건 16가지를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>채무자의 집이나 사업장을 방문해 압류할 물건이 있는지 미리 확인하고 싶습니다.</li>
          <li>집행관이 현장에서 "이건 압류 못 합니다"라고 한 이유가 무엇인지 알고 싶습니다.</li>
          <li>채무자가 "이 물건은 법으로 압류가 안 된다"고 주장하는데 사실인지 확인하고 싶습니다.</li>
          <li>어떤 물건을 압류하면 실제로 현금화가 가능한지 판단하고 싶습니다.</li>
          <li>압류금지 물건의 범위를 법원에서 변경할 수 있는지 알고 싶습니다.</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">압류 가능·불가 한눈에 보기</span>
          <ul>
            <li>원칙적으로 채무자가 점유하는 모든 동산은 압류 대상입니다. 그러나 민사집행법 제195조는 채무자의 최저 생활 보장과 직업 유지를 위해 <strong>16가지 유형</strong>의 물건을 압류금지 물건으로 규정합니다.</li>
            <li>압류금지 규정은 <strong>강행규정</strong>이므로 채권자의 동의나 채무자의 동의 여부와 무관하게 집행관이 직권으로 적용해야 합니다.</li>
            <li>압류금지 물건에 해당하더라도, 법원에 신청하면 채권자·채무자 쌍방의 사정을 고려하여 그 범위를 변경(확장 또는 축소)할 수 있습니다(민사집행법 제196조).</li>
          </ul>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 압류 가능 vs 압류금지 물건 비교</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0;">
          <div style="background:#e8f5e9;border:1px solid #1a5c2e;border-radius:8px;padding:18px 20px;">
            <div style="font-size:13px;font-weight:700;color:#1a5c2e;margin-bottom:10px;">압류 가능한 물건 (예시)</div>
            <ul style="list-style:none;padding:0;">
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 냉장고·세탁기·에어컨 등 가전제품 (대체품 있는 경우)</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> TV·컴퓨터 (업무용이 아닌 경우)</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 골동품·귀금속·미술품</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 영업용 재고 물품</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 어음·수표·상품권 등 유가증권</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 현금 (생계비 185만 원 초과분)</li>
            </ul>
          </div>
          <div style="background:#fde8e8;border:1px solid #b00;border-radius:8px;padding:18px 20px;">
            <div style="font-size:13px;font-weight:700;color:#b00;margin-bottom:10px;">압류 금지 물건 (예시)</div>
            <ul style="list-style:none;padding:0;">
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 생활 필수 침구·기구·의복</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 2개월치 식료품·연료·조명재료</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 생계비 현금 185만 원 이하</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 농어업인 필수 농기구·어망 등</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 직업상 필수 도구(재봉기·악기 등)</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 장애인용 보조기구·경형자동차</li>
            </ul>
          </div>
        </div>
        <h3>② 압류금지 물건 16가지 — 민사집행법 제195조</h3>
        <table>
          <thead><tr><th>호</th><th>압류금지 물건 유형</th><th>주요 내용</th></tr></thead>
          <tbody>
            <tr><td>1호</td><td>생활필수품</td><td>채무자·동거 친족의 의복·침구·기구·부엌기구 등 생활필수품</td></tr>
            <tr><td>2호</td><td>식료품·연료·조명재료</td><td>채무자 등의 생활에 필요한 2개월치 식료품·장작·연탄·가스·전기 등</td></tr>
            <tr><td>3호</td><td>생계비 현금</td><td>1개월치 생계비 — 현재 <strong>185만 원</strong> (민사집행법 시행령 제2조)</td></tr>
            <tr><td>4호</td><td>농업용 필수품</td><td>농기구·비료·가축·사료·종자 등</td></tr>
            <tr><td>5호</td><td>어업용 필수품</td><td>고기잡이 도구·어망·미끼·새끼고기 등</td></tr>
            <tr><td>6호</td><td>직업상 필수 도구</td><td>전문직·기술자 등에게 없어서는 안 될 제복·도구 등</td></tr>
            <tr><td>7호</td><td>훈장·명예증표</td><td>채무자 또는 친족이 받은 훈장·포장·기장 등</td></tr>
            <tr><td>8호</td><td>상례·제사·예배용품</td><td>위패·영정·묘비·경전·불단 등</td></tr>
            <tr><td>9호</td><td>족보·선조승배 물건</td><td>족보·가승·사진첩 등</td></tr>
            <tr><td>10호</td><td>도장·문패·간판</td><td>생활·직무에 없어서는 안 될 도장·문패·간판</td></tr>
            <tr><td>11호</td><td>일기장·상업장부</td><td>생활·직업에 없어서는 안 될 일기장·상업장부 등</td></tr>
            <tr><td>12호</td><td>미공표 저작·발명물</td><td>아직 공표되지 않은 저작물·발명 관련 물건</td></tr>
            <tr><td>13호</td><td>교과서·학습용구</td><td>교육·종교기관에서 사용하는 교과서·교리서·학습용구</td></tr>
            <tr><td>14호</td><td>신체보조기구</td><td>안경·보청기·의치·의수족·지팡이·장애보조용 휠체어 등</td></tr>
            <tr><td>15호</td><td>장애인용 경형자동차</td><td>자동차관리법에 따른 장애인용 경형자동차</td></tr>
            <tr><td>16호</td><td>법령상 의무 소방설비 등</td><td>법령에 따라 설비해야 하는 소방설비·경보기구·피난시설 등</td></tr>
          </tbody>
        </table>
        <h3>③ 직업상 필수 도구 (6호) — 실무에서 가장 자주 문제가 되는 항목</h3>
        <div class="case-box">
          <div class="case-title">📋 6호 해당 여부 판단 예시</div>
          <p><strong>해당됨(압류 금지):</strong> 재단사의 재봉기, 음악가의 악기, 의사의 산소호흡기, 사진사의 카메라·약품, 수리업자의 수선 공구, 소규모 음식점·다방 주인의 조리기구(자기 노동이 주인 경우)</p>
          <p><strong>해당 안 됨(압류 가능):</strong> 대규모 공장 소유주의 기계(물적 설비가 주), 스스로 진료 않고 의사를 고용만 하는 병원 경영자, 음식점의 TV·에어컨·음향기기</p>
        </div>
        <h3>④ 생계비 현금 (3호) — 185만 원</h3>
        <p>채무자가 보유한 현금 중 1개월치 생계비에 해당하는 <strong>185만 원</strong>은 압류가 금지됩니다(민사집행법 시행령 제2조). 이 금액을 초과하는 현금은 압류 가능합니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚠️ 압류금지는 강행규정 — 집행관 직권 적용</div>
          <p>압류금지 규정은 당사자 합의로 배제할 수 없는 강행규정입니다. 집행관은 채권자의 신청 내용이나 채무자의 동의 여부와 관계없이 직권으로 압류금지 여부를 조사해야 합니다.</p>
        </div>
        <h3>⑤ 압류금지 범위의 변경 — 법원에 신청 가능</h3>
        <div class="summary-box">
          <span class="label">범위 변경의 두 방향</span>
          <ul>
            <li><strong>확장 (채무자 신청):</strong> 195조상 압류금지 물건이 아니더라도 채무자 생활형편 등을 고려하여 압류금지 물건으로 지정해 달라고 법원에 신청할 수 있습니다.</li>
            <li><strong>축소 (채권자 신청):</strong> 195조상 압류금지 물건이지만 채권자의 사정 등을 고려하여 압류가 가능하도록 해달라고 법원에 신청할 수 있습니다.</li>
          </ul>
        </div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">채무자의 TV·냉장고 같은 가전제품을 압류할 수 있나요?</div>
          <div class="qna-a">
            <p>가전제품은 원칙적으로 압류 대상입니다. 다만 1호의 '생활필수품'에 해당하는지가 문제됩니다. 단 하나밖에 없고 생활에 필수적인 물건이라면 압류가 제한될 수 있지만, 동종의 기능을 하는 물건이 여러 개 있거나 대체 가능하다면 압류가 가능합니다. TV는 일반적으로 생활필수품으로 보기 어려워 압류 대상이 되는 경우가 많습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자가 사업장에서 쓰는 컴퓨터·프린터도 압류할 수 있나요?</div>
          <div class="qna-a">
            <p>채무자가 주로 자기의 정신적·육체적 노동으로 직업이나 영업에 종사하는 경우, 그 업무에 필수적인 컴퓨터·프린터는 6호에 따라 압류가 제한될 수 있습니다. 판단이 어려운 경우에는 집행 전 법무사와 상담하여 전략을 세우는 것이 좋습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">집행관이 압류금지 물건을 실수로 압류했다면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>압류금지 물건에 대한 압류는 당연무효가 아니라, 집행에 관한 이의(민사집행법 제16조)를 통해 법원의 결정으로 취소할 수 있습니다. 이의 신청은 매각 전에 신속히 해야 합니다. 매각된 후에는 매수인이 유효하게 소유권을 취득하므로 물건을 되찾기 어렵습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자의 배우자 명의 물건도 압류할 수 있나요?</div>
          <div class="qna-a">
            <p>민사집행법 제190조는 채무자와 배우자의 공유 유체동산으로서 채무자가 점유하거나 배우자와 공동으로 점유하고 있는 물건은 채무자에 대한 집행권원만으로도 압류할 수 있도록 규정합니다. 집행관은 점유를 기준으로 압류 여부를 판단하므로, 채무자가 점유하는 물건이라면 일단 압류할 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">상품권이나 어음·수표도 압류할 수 있나요?</div>
          <div class="qna-a">
            <p>네, 가능합니다. 민사집행법 제189조 제2항 제3호는 "유가증권으로서 배서가 금지되지 아니한 것"을 유체동산으로 규정합니다. 따라서 어음·수표·상품권·선하증권 등 배서 가능한 유가증권은 집행관이 점유·압류하여 경매할 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">종물의 거래 객체 독립성</div>
          <p>백화점 건물 지하 2층 기계실에 설치된 전화교환설비는 건물의 종물에 해당하므로 건물이 압류된 후에는 독립하여 유체동산 압류 대상이 되지 않습니다(대판 1993. 8. 13. 92다43142). 반면, 괴목·식재된 수목·임야 내 자연석을 조각한 석불 등은 독립하여 거래의 객체가 될 수 있어 유체동산으로 압류할 수 있습니다.</p>
          <p><strong>실무적 의미:</strong> 부동산과 함께 있는 물건이라도 독립하여 거래 가능하면 유체동산으로 별도 압류가 가능하나, 주물인 부동산이 먼저 압류된 후에는 종물은 독립 압류 대상이 되지 않습니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">압류금지 위반 압류의 효력</div>
          <p>대법원은 압류금지 규정을 어긴 경우 그 압류는 당연무효가 아니고 집행에 관한 이의(민사집행법 제16조)에 의해 취소할 수 있을 뿐이라고 하였습니다(대판 2003. 9. 26. 2001다52773). 또한 압류금지 물건이 매각된 때에는 매수인은 유효하게 소유권을 취득한다고 판시하였습니다.</p>
          <p><strong>실무적 의미:</strong> 채무자는 압류금지 물건에 대한 이의를 경매 전에 반드시 제기해야 합니다. 매각 후에는 소유권을 되찾기 어렵습니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 집행 전 현장 파악이 중요합니다</div>
          <p>막상 집행관이 현장에 가도 압류금지 물건밖에 없거나, 이미 물건이 없어진 경우가 많습니다. 사전에 채무자의 사업장이나 주거지에 압류 가능한 물건이 있는지 파악하고 집행 신청을 해야 불필요한 집행 비용 낭비를 막을 수 있습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">ℹ️ 생계비 185만 원은 현금에만 적용</div>
          <p>3호의 생계비 압류 금지는 '현금'에만 적용됩니다. 채무자가 예금·적금·계좌에 보관하는 금전은 채권 집행 방법으로 다루어지며, 별도의 압류금지 규정이 적용됩니다.</p>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제195조', desc: '압류금지 동산' },
      { name: '민사집행법 제196조', desc: '압류금지 동산의 범위 변경' },
      { name: '민사집행법 시행령 제2조', desc: '생계비 압류금지 금액(185만 원)' },
    ],
    forms: []
  },

  {
    id: 'ef-50',
    title: '집행관 신청 절차 및 준비서류 — 유체동산 강제집행',
    meta: '집행 위임 신청부터 현장 압류·경매까지 단계별 절차와 필요 서류를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>판결문(또는 공정증서)을 가지고 있고, 이제 실제로 집행을 신청하려고 합니다.</li>
          <li>집행관이 어디에 있는지, 어떻게 찾아가야 하는지 모릅니다.</li>
          <li>집행 신청에 필요한 서류가 무엇인지 목록을 확인하고 싶습니다.</li>
          <li>신청 후 집행관이 언제 현장에 오는지, 경매는 어떻게 진행되는지 궁금합니다.</li>
          <li>집행 비용이 어느 정도 들며 어떻게 납부하는지 알고 싶습니다.</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">절차 흐름 요약</span>
          <ul>
            <li>유체동산 강제집행은 채권자가 집행관(지방법원 소속)에게 서면으로 집행을 위임(신청)함으로써 시작됩니다(민사집행법 제4조).</li>
            <li>집행관은 신청을 받은 후 수수료·비용 예납을 받고, 채무자 점유 장소로 나가 압류를 실시한 뒤 경매(주로 호가경매)를 진행합니다.</li>
            <li>⚡ <strong>소멸시효 주의:</strong> 집행권원에 기재된 채권의 소멸시효가 완성되기 전에 집행을 신청해야 합니다. 집행 신청은 시효 중단 사유가 됩니다.</li>
          </ul>
        </div>`
      },
      {
        heading: '단계별 상세 절차',
        content: `<div class="flow">
          <div class="flow-item">
            <div class="flow-num">1</div>
            <div>
              <strong>집행문 부여 받기 — 신청 전 반드시 필요</strong>
              <p>판결문·지급명령·공정증서 등 집행권원이 있더라도, <strong>집행문</strong>을 별도로 받아야 집행 신청이 가능합니다(민사집행법 제28조). 판결·지급명령의 경우 판결을 내린 법원의 법원서기관·법원주사보에게, 공정증서는 해당 공증인 사무소에 신청합니다.</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">2</div>
            <div>
              <strong>관할 집행관 확인 및 방문</strong>
              <p>채무자의 주소지 또는 집행할 물건 소재지를 관할하는 지방법원 소속 집행관에게 신청해야 합니다. 집행관 사무소는 해당 지방법원 청사 내에 있습니다.</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">3</div>
            <div>
              <strong>집행 신청서 작성 및 제출</strong>
              <p>유체동산에 대한 강제집행 신청은 반드시 <strong>서면</strong>으로 해야 합니다(민사집행법 제4조). 집행관 사무소에 비치된 '유체동산에 대한 강제집행신청서' 양식을 작성하여 제출합니다.</p>
              <div class="summary-box" style="margin-top:10px;">
                <span class="label">신청서에 기재할 사항</span>
                <ul>
                  <li>채권자·채무자의 성명(상호)·주소·주민등록번호</li>
                  <li>집행권원의 표시 (판결 사건번호 등)</li>
                  <li>청구금액 및 집행 목적물 소재지(채무자 주소)</li>
                  <li>집행 위임의 취지</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">4</div>
            <div>
              <strong>첨부서류 제출 및 비용 예납</strong>
              <p>신청서와 함께 아래 서류를 첨부하고, 집행관이 산정한 수수료 및 비용을 예납해야 합니다(민사집행법 제12조). 예납이 완료되어야 집행 절차가 개시됩니다.</p>
              <table style="margin-top:10px;">
                <thead><tr><th>서류명</th><th>발급 기관</th><th>주의사항</th></tr></thead>
                <tbody>
                  <tr><td>집행력 있는 정본(집행문 부여된 판결·공정증서)</td><td>판결 법원 / 공증인 사무소</td><td>집행문 부여 받은 것이어야 함</td></tr>
                  <tr><td>송달증명원 등</td><td>판결 법원</td><td>채무자에게 판결이 송달되었음을 증명</td></tr>
                  <tr><td>채무자 주소 확인 서류(주민등록초본 등)</td><td>주민센터 / 등기소</td><td>채무자 현재 주소가 정확해야 함</td></tr>
                  <tr><td>위임장(대리인이 신청하는 경우)</td><td>채권자 작성</td><td>법무사 등 대리인이 신청하는 경우</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">5</div>
            <div>
              <strong>집행관의 현장 방문 및 압류 실시</strong>
              <p>집행관은 예납 완료 후 채무자의 주거·사무소·창고 등을 방문하여 채무자가 점유하는 유체동산에 압류표(딱지)를 부착합니다(민사집행법 제188조). 채권자나 대리인은 현장에 동행할 수 있으며, 동행 시 압류 가능한 물건을 직접 확인할 수 있어 효율적입니다.</p>
              <div class="warn-box" style="margin-top:10px;">
                <div class="warn-title">⚠️ 현장 동행을 강력히 권장합니다</div>
                <p>집행관 단독으로 현장에 방문할 경우 압류 가능한 물건을 놓치거나, 채무자의 방해로 집행이 제대로 이루어지지 않는 사례가 있습니다.</p>
              </div>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">6</div>
            <div>
              <strong>호가경매(매각) 진행</strong>
              <p>압류 후 집행관은 매각기일을 정하고 호가경매 또는 입찰의 방법으로 압류물을 매각합니다(민사집행법 제199조). 호가경매는 현장에서 여러 매수 희망자가 가격을 불러 최고가에 낙찰하는 방식입니다.</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">7</div>
            <div>
              <strong>매각대금 교부 또는 배당</strong>
              <p>채권자가 한 명이면 집행관이 매각대금을 채권자에게 직접 교부합니다(민사집행법 제201조 제1항). 채권자가 여럿이거나 배당요구가 있는 경우, 배당협의가 이루어지면 협의에 따라, 협의가 안 되면 집행관이 매각대금을 공탁하고 법원이 배당절차를 진행합니다(민사집행법 제222조).</p>
            </div>
          </div>
        </div>
        <div class="case-box" style="margin-top:24px;">
          <div class="case-title">📋 실제 진행 사례</div>
          <p>C씨는 D씨에 대해 3,000만 원의 확정 판결을 받았습니다. D씨가 돈을 주지 않자, C씨는 판결을 내린 법원에서 집행문을 받아 D씨 사업장(음식점) 소재지 관할 집행관 사무소에 강제집행 신청서를 제출했습니다. 집행관은 수수료 예납 후 날짜를 정해 D씨 음식점에 방문, 냉장고·주방기기·현금(185만 원 초과분)에 압류표를 부착했습니다. 2주 후 매각기일에 호가경매를 진행하여 총 350만 원에 낙찰되었고, 집행비용을 공제한 나머지를 C씨에게 교부했습니다.</p>
        </div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">집행 신청부터 실제 압류까지 얼마나 걸리나요?</div>
          <div class="qna-a">
            <p>집행 신청 후 수수료 예납까지 완료하면, 집행관이 일정을 잡아 현장 방문을 합니다. 일반적으로 신청 후 수일~수 주 내에 현장 방문이 이루어지나, 집행관의 업무량에 따라 달라질 수 있습니다. 압류 후 호가경매까지는 통상 1~2주 정도 소요됩니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자가 이사를 가서 주소를 모르면 어떻게 하나요?</div>
          <div class="qna-a">
            <p>집행관은 신청서에 기재된 주소를 기준으로 방문합니다. 채무자 주소를 모르는 경우에는 채권자가 채무자의 현재 주소를 확인해야 합니다. 채무자가 주소를 숨기거나 이사를 반복하는 경우에는 법원을 통한 재산 명시 명령·재산 조회 신청을 병행하는 것이 효과적입니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">⚡ 집행 신청 기간에 제한이 있나요?</div>
          <div class="qna-a">
            <p>집행권원에 기재된 채권의 <strong>소멸시효</strong>가 완성되기 전에 집행을 신청해야 합니다. 확정 판결에 기한 채권의 소멸시효는 10년이며(민사소송법 제165조), 강제집행 신청(집행 위임)은 소멸시효 중단 사유에 해당합니다(민법 제168조 제2호). ⚡ 이 기간을 넘기면 권리를 잃으므로, 판결 후 오랜 시간이 지났다면 반드시 소멸시효 여부를 먼저 확인하십시오.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">법무사에게 대리 신청을 맡길 수 있나요?</div>
          <div class="qna-a">
            <p>네, 법무사는 유체동산 강제집행 신청에 관한 대리 업무를 수행할 수 있습니다. 법무사에게 위임하면 집행문 부여 신청, 집행관 사무소 방문·서류 제출, 현장 동행, 배당금 수령까지 전 과정을 대리하거나 지원받을 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 가장 흔한 실수 1 — 집행문 없이 신청</div>
          <p>판결문을 가지고 있어도 집행문 부여를 받지 않으면 집행 신청이 수리되지 않습니다. 집행문 부여 신청을 먼저 완료한 후 집행관 사무소를 방문하세요.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 가장 흔한 실수 2 — 채무자 주소 불명확</div>
          <p>신청서에 기재한 주소가 채무자의 현재 주소와 다르면 집행관이 현장에 가도 압류를 실시하지 못할 수 있습니다. 신청 전 반드시 최신 주민등록초본 또는 법인등기부등본으로 현재 주소를 확인하세요.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚡ 소멸시효 10년 — 판결 후에도 관리 필요</div>
          <p>확정 판결 이후 아무 조치를 취하지 않으면 10년 후 소멸시효가 완성됩니다. ⚡ 이 기간을 넘기면 권리를 잃습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">ℹ️ 압류 물건이 없을 때 — 재산명시·재산조회 신청</div>
          <p>집행관이 현장을 방문했는데 압류 가능한 물건이 없거나 채무자가 없는 경우, 집행이 불발될 수 있습니다. 법원에 <strong>재산명시 명령</strong>(민사집행법 제61조) 또는 <strong>재산조회 신청</strong>(민사집행법 제74조)을 통해 채무자의 재산을 파악한 뒤 적합한 집행 방법을 선택하세요.</p>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제4조', desc: '집행 신청 방법(서면)' },
      { name: '민사집행법 제12조', desc: '집행비용의 예납' },
      { name: '민사집행법 제199조', desc: '유체동산의 매각 방법' },
    ],
    forms: []
  },

  {
    id: 'ef-51',
    title: '집행관이 왔을 때 — 채무자의 권리와 합법적인 대응 방법',
    meta: '압류를 막거나 지연할 수 있는 법적 수단인 이의신청·집행정지·범위 변경 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>갑자기 집행관이 찾아와 물건에 압류 딱지를 붙여 당황스럽습니다.</li>
          <li>압류된 물건 중에 생활에 꼭 필요한 것이 있어 되돌려 받고 싶습니다.</li>
          <li>압류된 물건이 내 것이 아니거나, 채무 자체에 문제가 있다고 생각합니다.</li>
          <li>채권자와 협상할 시간을 벌기 위해 집행을 일시적으로 멈출 방법이 있는지 알고 싶습니다.</li>
          <li>집행관이 요구하는 것 중 거부할 수 있는 것과 없는 것을 구분하고 싶습니다.</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">채무자가 할 수 있는 것과 할 수 없는 것</span>
          <ul>
            <li>집행관이 적법한 집행권원(판결문 등)을 가지고 방문하면, 채무자는 <strong>집행 자체를 거부할 수 없습니다.</strong> 방해하면 공무집행방해죄가 됩니다.</li>
            <li>그러나 채무자는 <strong>법이 정한 적법한 방법</strong>으로 집행에 이의를 신청하거나, 집행정지를 신청하거나, 압류금지 범위 변경을 신청할 수 있습니다.</li>
            <li>압류된 물건을 임의로 처분·은닉·손상하면 <strong>형사 처벌</strong>(강제집행 면탈죄, 형법 제327조)을 받을 수 있습니다.</li>
          </ul>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 집행관이 왔을 때 — 즉시 해야 할 것과 하지 말아야 할 것</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0;">
          <div style="background:#e8f5e9;border:1px solid #1a5c2e;border-radius:8px;padding:18px 20px;">
            <div style="font-size:13px;font-weight:700;color:#1a5c2e;margin-bottom:10px;">✔ 합법적으로 할 수 있는 것</div>
            <ul style="list-style:none;padding:0;">
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 신분 확인 (집행관 신분증 확인 요청)</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 어떤 집행권원으로 왔는지 확인</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 압류금지 물건임을 집행관에게 고지</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 제3자 소유 물건임을 소명</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 법무사·변호사에게 즉시 연락</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#1a5c2e;">○</span> 압류 과정 메모·사진 촬영</li>
            </ul>
          </div>
          <div style="background:#fde8e8;border:1px solid #b00;border-radius:8px;padding:18px 20px;">
            <div style="font-size:13px;font-weight:700;color:#b00;margin-bottom:10px;">✕ 절대 하면 안 되는 것</div>
            <ul style="list-style:none;padding:0;">
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 집행관 출입 물리적으로 방해</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 집행관에 대한 폭언·폭행</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 압류표(딱지) 무단 제거·훼손</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 압류된 물건 몰래 처분·은닉·이동</li>
              <li style="font-size:14px;padding:3px 0 3px 18px;position:relative;"><span style="position:absolute;left:0;color:#b00;">✕</span> 집행관에게 거짓말로 소유권 주장</li>
            </ul>
          </div>
        </div>
        <h3>② 압류금지 물건 이의 신청</h3>
        <p>집행관이 민사집행법 제195조의 압류금지 물건을 압류한 경우, 채무자는 <strong>집행에 관한 이의</strong>(민사집행법 제16조)를 압류 실시 법원에 신청하여 해당 압류의 취소를 구할 수 있습니다.</p>
        <div class="summary-box">
          <span class="label">집행에 관한 이의 신청 방법</span>
          <ul>
            <li>신청 기관: 압류를 실시한 집행관 소속 지방법원</li>
            <li>신청 방법: 서면으로 신청 (구두 신청도 가능하나 서면 권장)</li>
            <li>신청 내용: 어떤 물건이 왜 압류금지 물건에 해당하는지 구체적으로 주장·소명</li>
            <li>⚡ 신청 시기: 경매(매각) 전에 신청해야 합니다. 매각된 이후에는 소유권을 되찾기 어렵습니다.</li>
          </ul>
        </div>
        <h3>③ 압류금지 범위 변경 신청 (채무자)</h3>
        <p>법으로 정해진 압류금지 물건이 아니더라도, 채무자의 생활 형편이나 직업상 사정을 고려하여 법원에 <strong>압류금지 범위 확장</strong>을 신청할 수 있습니다(민사집행법 제196조 제1항).</p>
        <h3>④ 집행정지 — 잠시 멈추는 방법</h3>
        <p>집행에 다툼이 있거나 채무자가 즉시 채무를 변제할 준비 중인 경우, 법원에 <strong>집행정지</strong>를 신청하거나 일정 금액의 담보를 공탁하여 집행을 일시 정지시킬 수 있습니다.</p>
        <div class="summary-box">
          <span class="label">집행정지가 인정되는 주요 사유</span>
          <ul>
            <li>집행권원이 상소심에서 취소되거나 변경될 가능성이 있는 경우</li>
            <li>집행 자체에 절차적 하자가 있는 경우</li>
            <li>채무자가 일정 금액을 담보로 공탁하고 집행정지를 신청하는 경우</li>
            <li>청구이의의 소를 제기하면서 가처분으로 집행정지를 구하는 경우</li>
          </ul>
        </div>
        <h3>⑤ 청구이의의 소 — 채무 자체에 다툼이 있을 때</h3>
        <p>판결에서 인정된 채무가 이미 변제되었거나 소멸되었다면, 채무자는 <strong>청구이의의 소</strong>(민사집행법 제44조)를 제기하여 집행권원의 집행력을 배제시킬 수 있습니다.</p>
        <h3>⑥ 제3자 이의의 소 — 압류된 물건이 내 것이 아닐 때</h3>
        <p>압류된 물건의 실제 소유자가 따로 있다면, 그 소유자(제3자)가 직접 <strong>제3자 이의의 소</strong>(민사집행법 제48조)를 제기하여 압류의 취소를 구할 수 있습니다.</p>
        <div class="case-box">
          <div class="case-title">📋 대응 사례</div>
          <p>E씨는 F씨에 대한 판결을 가진 채권자가 보낸 집행관이 찾아와 집에 있는 물건에 압류 딱지를 붙이는 것을 목격했습니다. 냉장고·세탁기 등 가전제품과 함께, E씨가 목수로 일하는 데 꼭 필요한 공구 세트(대체품 없음)에도 딱지가 붙었습니다. E씨는 즉시 법무사에게 연락하여, 공구 세트에 대해 민사집행법 제195조 제6호(직업상 필수 도구)를 이유로 집행에 관한 이의를 법원에 신청했습니다. 법원은 이의를 인정하여 공구 세트에 대한 압류를 취소했습니다.</p>
        </div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">집행관이 왔는데 문을 열어주지 않으면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>집행관은 강제집행을 위해 채무자의 주거·창고·사무소에 들어갈 수 있고, 잠긴 문을 열게 하거나 직접 개방할 수 있습니다(민사집행법 제5조). 채무자가 문을 열어주지 않으면 공무집행방해죄가 성립할 수 있고, 결국 강제로 집행이 이루어질 수 있습니다. 다만 집행관은 야간(일몰 후~일출 전)이나 일요일·공휴일에는 원칙적으로 주거에 들어갈 수 없으며(민사집행법 제6조), 예외적으로 채무자 동의나 법원 허가가 있어야 합니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">이미 빚을 갚았는데 집행관이 왔다면 어떻게 해야 하나요?</div>
          <div class="qna-a">
            <p>채무를 이미 변제했음에도 채권자가 강제집행을 신청한 경우라면 즉시 변제 사실을 집행관에게 고지하고, 변제 증거(영수증·입금 내역·변제 합의서 등)를 제시하세요. 병행하여 법원에 <strong>청구이의의 소</strong>(민사집행법 제44조)를 제기하고 집행정지 가처분을 신청해야 합니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">⚡ 압류된 물건에 이의를 제기하는 기한이 있나요?</div>
          <div class="qna-a">
            <p>집행에 관한 이의 신청 자체에는 별도의 기한이 명시되어 있지 않습니다. 그러나 매각(경매 낙찰)이 이루어지기 전에 신청해야 실효가 있습니다. 압류금지 물건임을 이유로 이의를 제기하여 압류가 취소되더라도, 이미 매각된 경우에는 매수인이 유효하게 소유권을 취득하므로 물건을 되찾기 어렵습니다. ⚡ 이 시점을 넘기면 물건을 회복하기 극히 어렵습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채권자와 합의를 해서 집행을 멈추게 할 수 있나요?</div>
          <div class="qna-a">
            <p>네, 가장 현실적인 해결책입니다. 채무자가 채권자와 변제 합의를 하고 채권자가 집행 취하 의사를 집행관에게 통보하면 집행이 중단됩니다. 합의 내용은 반드시 서면으로 작성하고, 채권자로부터 집행취하서 또는 영수증을 받아 집행관에게 제출하세요.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">압류금지 규정 위반 압류의 효력 — 당연무효 아님</div>
          <p>대법원은 압류금지 규정을 어긴 경우 그 압류는 당연무효가 아니고 집행에 관한 이의(민사집행법 제16조)에 의하여 취소할 수 있을 뿐이라고 판시하였습니다(대판 2003. 9. 26. 2001다52773). 또한 압류금지 물건이 경매에서 매각된 경우 매수인은 유효하게 소유권을 취득한다고 하였습니다.</p>
          <p><strong>실무적 의미:</strong> 채무자는 압류금지 물건에 대한 이의 신청을 경매 전에 반드시 완료해야 합니다. 매각 후에는 물건을 되찾을 수 없습니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">집행관의 직권 조사 의무</div>
          <p>집행관은 압류금지물건인가 여부를 직권으로 조사해야 하며, 채권자의 신청이나 채무자의 동의·승낙 여부에 관계없이 압류금지물건이면 압류를 거부해야 합니다. 집행관이 고의로 압류금지 규정을 어긴 경우에는 직무상 불법행위가 됩니다(대판 2003. 9. 26. 2001다52773).</p>
          <p><strong>실무적 의미:</strong> 집행관이 명백히 압류금지 물건을 압류하는 경우, 채무자는 즉시 이의를 제기하고 필요하면 집행관의 불법행위에 대한 손해배상 청구도 검토할 수 있습니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 압류 딱지를 절대 제거하지 마세요</div>
          <p>압류 딱지를 임의로 떼거나 훼손하는 행위는 강제집행 면탈죄(형법 제327조)가 될 수 있습니다. 압류된 물건에 대해 다툼이 있다면 반드시 법적 절차(이의 신청 등)를 통해야 합니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 압류 물건 처분은 형사 범죄</div>
          <p>압류된 물건을 다른 사람에게 팔거나, 이동·은닉·손상하면 강제집행 면탈죄(형법 제327조)로 2년 이하의 징역 또는 500만 원 이하의 벌금에 처해질 수 있습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚡ 이의 신청은 매각 전에 신속하게</div>
          <p>집행에 관한 이의 신청이나 제3자 이의의 소 제기는 매각(경매 낙찰) 전에 이루어져야 효과가 있습니다. ⚡ 이 시점을 넘기면 권리를 잃습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">ℹ️ 야간·공휴일 집행 제한</div>
          <p>집행관은 일몰 후부터 일출 전까지, 그리고 일요일·공휴일에는 채무자 주거에 들어갈 수 없습니다(민사집행법 제6조). 단, 채무자의 동의 또는 법원의 허가가 있으면 가능합니다.</p>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제16조', desc: '집행에 관한 이의 신청' },
      { name: '민사집행법 제44조', desc: '청구이의의 소' },
      { name: '민사집행법 제48조', desc: '제3자 이의의 소' },
      { name: '형법 제327조', desc: '강제집행 면탈죄' },
    ],
    forms: []
  },

  {
    id: 'ef-52',
    title: '매각·배당 — 유체동산 경매 후 돈은 어떻게 받나요?',
    meta: '호가경매 후 매각대금 교부·배당 절차, 배당요구 방법, 배당이의 기한을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>압류한 물건이 경매에서 낙찰되었는데 돈을 어떻게 받는지 모릅니다.</li>
          <li>채권자가 여러 명인데 매각대금을 어떻게 나눠 받는지 궁금합니다.</li>
          <li>배당요구를 해야 한다는 말을 들었는데 언제까지, 어떻게 해야 하는지 모릅니다.</li>
          <li>경매에서 낙찰 금액이 내 채권보다 적을 때 나머지 채권은 어떻게 되는지 알고 싶습니다.</li>
          <li>배당 결과에 불만이 있을 때 이의를 제기할 수 있는지 궁금합니다.</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">매각대금 처리 — 3가지 경우</span>
          <ul>
            <li><strong>채권자 1인 + 대금으로 전액 변제 가능:</strong> 집행관이 매각대금을 채권자에게 직접 교부합니다(민사집행법 제201조 제1항).</li>
            <li><strong>채권자 여럿 + 대금으로 전액 변제 가능:</strong> 집행관이 각 채권자에게 채권액 교부 후 나머지를 채무자에게 교부합니다(민집규칙 제155조 제1항).</li>
            <li><strong>채권자 여럿 + 대금이 부족한 경우:</strong> 채권자 간 배당협의가 이루어지면 협의대로, 협의 불성립 시 집행관이 매각대금을 공탁하고 법원이 배당절차를 진행합니다(민사집행법 제222조).</li>
          </ul>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 호가경매 — 매각 방법의 기본</h3>
        <p>유체동산의 매각은 원칙적으로 <strong>호가경매</strong> 방식으로 진행됩니다(민집규칙 제145조). 호가경매는 집행관이 매각기일에 현장에서 매수 희망자들의 매수 신청을 받아 최고가에 낙찰하는 방식입니다. 특수한 물건의 경우 법원이 명하는 <strong>특별현금화 방법</strong>을 사용하기도 합니다(민사집행법 제214조).</p>
        <h3>② 매각대금의 교부 — 채권자 1인인 경우</h3>
        <p>채권자가 한 명이고 배당요구나 이중압류가 없으면, 집행관은 압류금전(현금 압류)이나 압류물 매각대금을 채권자에게 직접 교부합니다.</p>
        <div class="summary-box">
          <span class="label">단독 채권자 교부 금액 계산</span>
          <ul>
            <li>매각대금 - 집행비용(집행관 수수료·실비 등) = 채권자에게 교부되는 금액</li>
            <li>교부금액이 채권액보다 적으면 미수령 채권 부분은 여전히 채무자에게 청구할 수 있습니다.</li>
            <li>교부금액이 채권액(원금+이자+비용)을 초과하면 나머지는 채무자에게 반환합니다.</li>
          </ul>
        </div>
        <h3>③ 배당요구 — 다른 채권자가 참여하는 방법</h3>
        <p>압류 채권자 이외의 다른 채권자도 <strong>배당요구</strong>를 하면 매각대금 배당에 참여할 수 있습니다(민사집행법 제217조). 배당요구는 집행관이 정한 <strong>배당요구 종기(終期)</strong>까지 해야 합니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚡ 배당요구는 기한 내에!</div>
          <p>배당요구 종기까지 배당요구를 하지 않으면 해당 집행 절차에서 배당을 받을 수 없습니다(민사집행법 제220조 제1항 제1호). ⚡ 이 기간을 넘기면 배당을 받을 권리를 잃습니다.</p>
        </div>
        <h3>④ 이중압류 — 동일 물건에 여러 채권자가 압류한 경우</h3>
        <p>이미 압류된 유체동산에 다른 채권자가 새로 압류를 신청하면 <strong>이중압류</strong>(민사집행법 제215조)가 됩니다. 이중압류는 선행 압류에 대한 배당요구의 성격을 가지며, 이중압류를 신청한 채권자도 매각대금 배당에 참여할 수 있습니다.</p>
        <h3>⑤ 매각대금이 부족할 때 — 배당협의와 공탁·배당절차</h3>
        <div class="flow">
          <div class="flow-item">
            <div class="flow-num">1</div>
            <div>
              <strong>배당협의 시도</strong>
              <p>집행관이 채권자들 간 합의를 유도. 모든 채권자가 동의하면 협의 내용대로 배당.</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">2</div>
            <div>
              <strong>배당협의 불성립 → 공탁 및 사유신고</strong>
              <p>협의 실패 시 집행관이 매각대금을 공탁하고 법원에 사유신고(민집 제222조).</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">3</div>
            <div>
              <strong>법원의 배당절차 개시</strong>
              <p>집행법원이 배당기일을 지정하고 배당표를 작성. 각 채권자에게 배당기일 통지.</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-num">4</div>
            <div>
              <strong>배당 실시</strong>
              <p>배당기일에 법원이 배당표에 따라 각 채권자에게 배당금 교부. 이의가 없으면 그대로 확정.</p>
            </div>
          </div>
        </div>
        <h3>⑥ 배당 순위 — 누가 먼저 받나</h3>
        <div class="summary-box">
          <span class="label">배당 우선순위 개요</span>
          <ul>
            <li><strong>1순위:</strong> 집행비용(집행관 수수료·실비 등) — 최우선 공제</li>
            <li><strong>2순위:</strong> 질권 등 담보권이 설정된 채권자 (설정 순위에 따라)</li>
            <li><strong>3순위:</strong> 임금·퇴직금 등 최우선 변제권 있는 채권 (근로기준법 등)</li>
            <li><strong>4순위:</strong> 일반 집행채권자 (압류·배당요구 순서에 따라 안분)</li>
          </ul>
        </div>
        <div class="case-box">
          <div class="case-title">📋 배당 계산 예시</div>
          <p>채무자의 물건이 300만 원에 낙찰되었습니다. 집행비용 30만 원을 공제하면 배당 가능 금액은 270만 원입니다. 채권자 A(채권 200만 원)와 채권자 B(채권 150만 원), 총 350만 원의 채권이 있습니다. 배당 가능 금액 270만 원이 부족하므로 채권액 비율로 안분합니다. A는 270만 원 × (200/350) ≒ 154만 원, B는 270만 원 × (150/350) ≒ 116만 원을 배당받습니다. 각자 미수령 채권은 채무자에게 계속 청구할 수 있습니다.</p>
        </div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">경매 낙찰 금액이 채권 전액에 미치지 못하면 나머지는 어떻게 되나요?</div>
          <div class="qna-a">
            <p>매각대금이 채권 전액에 미치지 못하는 경우, 그 부분은 이번 집행 절차에서 회수하지 못합니다. 그러나 채권 자체가 소멸하는 것은 아닙니다. 미회수 채권에 대해서는 채무자의 다른 재산(은행 계좌, 급여, 다른 물건 등)에 대해 별도로 강제집행을 신청할 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">⚡ 배당요구는 언제까지 해야 하나요?</div>
          <div class="qna-a">
            <p>집행관은 매각기일로부터 역산하여 배당요구 종기를 정하고, 이를 이해관계인에게 고지합니다. 배당요구는 이 종기 전에 집행관에게 서면으로 해야 합니다. 종기 이후에는 배당요구가 허용되지 않으며, 해당 집행에서 배당을 받을 수 없습니다. ⚡ 배당요구 종기를 넘기면 그 사건에서 배당을 받을 권리를 잃습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">배당 결과가 불공정하다고 느껴지면 이의를 제기할 수 있나요?</div>
          <div class="qna-a">
            <p>네, 가능합니다. 법원이 진행하는 배당 절차에서 배당기일에 출석한 채권자는 다른 채권자의 채권 또는 채권 순위에 대해 <strong>배당이의</strong>를 제기할 수 있습니다(민사집행법 제256조 이하). 배당이의 후에도 합의가 안 되면 <strong>배당이의의 소</strong>를 제기하여 법원의 최종 결정을 받을 수 있습니다. 이 소송은 배당기일로부터 1주일 이내에 제기해야 합니다(민사집행법 제256조 제1항). ⚡ 이 기간을 넘기면 배당표가 확정되어 이의를 제기할 수 없습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">경매가 유찰되면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>호가경매에서 최저매각가격 이상으로 매수 신청을 하는 사람이 없으면 경매가 유찰됩니다. 집행관은 유찰된 경우 새로운 매각기일을 정하여 다시 경매를 진행합니다. 반복 유찰이 예상되거나, 특정 물건의 경우 법원에 <strong>특별현금화 방법</strong>(민사집행법 제214조)을 신청하여 전문 경매 기관을 통한 매각을 진행할 수도 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '관련 판례 및 실무',
        content: `<div class="ruling-box">
          <div class="ruling-header">배당협의 불성립 시 공탁 의무</div>
          <p>유체동산 집행에서 채권자가 경합하고 배당해야 할 금전이 각 채권자를 만족시키기에 부족하며 채권자 사이에 배당협의가 이루어지지 않은 경우, 집행관은 매각대금을 공탁하여야 하고 집행법원은 배당절차를 개시·진행합니다(민사집행법 제222조, 제252조 제1호).</p>
          <p><strong>실무적 의미:</strong> 집행관이 임의로 특정 채권자에게 유리하게 배당할 수 없으며, 반드시 법원의 배당절차를 거쳐야 합니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">집행관의 불법행위 책임</div>
          <p>집행관은 독립·단독의 사법기관으로서 집행에 필요한 법규 해석 등을 그르쳐 타인에게 손해를 가하면 불법행위 책임을 집니다(대판 2003. 9. 26. 2001다52773). 집행관이 공탁 의무를 위반하거나 배당 절차를 부당하게 진행하는 경우 이에 대한 책임을 물을 수 있습니다.</p>
          <p><strong>실무적 의미:</strong> 집행관의 위법 행위로 손해가 발생한 경우 집행에 관한 이의(민사집행법 제16조) 또는 손해배상 청구를 통해 권리를 구제받을 수 있습니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 동산 경매 낙찰가는 시세보다 훨씬 낮습니다</div>
          <p>유체동산은 부동산과 달리 경매에서 시세의 20~30%에 낙찰되는 경우가 많습니다. 채권 회수 목적의 집행을 계획할 때는 이를 현실적으로 감안해야 합니다. 가전제품·가구 등은 특히 낙찰가가 낮으므로, 집행 비용 대비 실제 회수 가능 금액을 사전에 계산해 보는 것이 좋습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚡ 배당이의 소송 기한 — 배당기일로부터 1주일</div>
          <p>배당기일에서 배당이의를 제기한 경우, 이의의 소를 배당기일로부터 1주일 이내에 제기해야 합니다(민사집행법 제256조 제1항). ⚡ 이 기간을 넘기면 배당표가 확정되어 다툴 수 없습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">ℹ️ 집행 비용도 채무자에게 청구 가능</div>
          <p>강제집행에 소요된 집행비용(집행관 수수료·실비·인지대 등)은 채무자가 부담해야 할 집행채무의 일부로 인정됩니다. 매각대금에서 먼저 공제되며, 부족하면 채무자에게 별도 청구할 수 있습니다.</p>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제199조', desc: '유체동산의 매각 방법(호가경매)' },
      { name: '민사집행법 제201조', desc: '매각대금의 교부' },
      { name: '민사집행법 제217조', desc: '배당요구' },
      { name: '민사집행법 제222조', desc: '배당협의 불성립 시 공탁' },
      { name: '민사집행법 제256조', desc: '배당이의 및 배당이의의 소' },
    ],
    forms: []
  },
  {
    id: 'ef-53',
    title: '채권집행 처음부터 끝까지 — 강제집행 절차 전체 흐름',
    meta: '채무자가 돈을 갚지 않을 때 법원의 도움으로 채무자의 재산을 압류하여 돈을 받는 전체 강제집행 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자가 돈을 갚지 않아서 어떻게 해야 할지 모르겠다</li>
<li>판결문이나 합의서는 있는데 어떤 절차를 거쳐야 하는지 궁금하다</li>
<li>채권집행이 정확히 무엇인지, 그리고 얼마나 오래 걸리는지 알고 싶다</li>
<li>상대방의 재산이 어디에 있는지 모르거나 부동산이 아닌 다른 재산을 집행하려고 한다</li>
<li>채권집행의 전체 흐름을 이해하고 변호사나 법무사와 상담할 준비를 하고 싶다</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>채권집행이란 채무자가 빌린 돈이나 약속한 금전을 갚지 않을 때, 법원의 도움으로 채무자의 재산을 압류하여 돈을 받는 법적 절차입니다.</strong> 판결문이나 공정증서, 조정조서 같은 집행권원이 있어야 시작할 수 있으며, 압류 → 추심/전부 → 배당의 순서로 진행됩니다. 재산이 많은 채권자가 여럿이면 배당 절차를 거쳐 공평하게 나누게 됩니다.</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>채권집행이란 무엇인가</h3>
<p>민사집행법 제188조 이하는 채권, 즉 금전 채권에 대한 강제집행을 규정하고 있습니다. 채무자가 법적 의무대로 돈을 갚지 않을 때 법원의 집행절차를 통해 채무자의 재산을 압류하고 현금화하여 채권을 회수하는 과정입니다.</p>
<div class="summary-box"><p><strong>채권집행의 핵심 요소</strong></p>
<p><strong>1) 집행권원의 존재:</strong> 판결문, 공정증서, 조정조서, 화해조서 등 법적 증명력 있는 문서</p>
<p><strong>2) 압류명령 발부:</strong> 집행법원에 압류명령을 신청하여 채무자의 재산을 법적으로 구속</p>
<p><strong>3) 추심 또는 전부:</strong> 압류한 재산을 현금화하거나 채권에서 직접 회수</p>
<p><strong>4) 배당 또는 충당:</strong> 회수한 돈을 채권자에게 나누어주거나 채무에서 공제</p></div>
<h3>집행 절차 전체 흐름</h3>
<p>채권집행은 다음 단계를 거칩니다: 집행권원 확보 → 집행문 부여 → 압류명령 신청 → 압류명령 발부 → 추심/전부 → 배당</p>
<p><strong>1단계: 집행권원 확보</strong> — 법원의 판결문, 공정증서, 조정조서, 화해조서 등 집행 가능한 문서(민사집행법 제21조)가 있어야 합니다.</p>
<p><strong>2단계: 집행문 부여</strong> — 판결을 받으신 경우 판결 확정 후 집행문을 받아야 합니다.</p>
<p><strong>3단계: 압류명령 신청</strong> — 집행권원과 집행문을 준비한 후 채무자의 주소지 관할 지방법원에 신청합니다(민사집행법 제224조).</p>
<p><strong>4단계: 압류명령 발부 및 송달</strong> — 법원이 채무자와 제3채무자에게 압류명령을 송달하며, 이 시점부터 압류의 효력이 발생합니다.</p>
<p><strong>5단계: 추심 또는 전부</strong> — 추심은 제3채무자로부터 금전을 회수하는 절차이고, 전부는 제3채무자가 직접 채권자에게 지급하도록 하는 절차입니다(민사집행법 제227조, 제234조).</p>
<p><strong>6단계: 배당 절차</strong> — 여러 채권자가 압류한 경우 회수한 돈을 공평하게 나눕니다.</p>
<h3>집행법원과 관할</h3>
<p>민사집행법 제224조에 따라 채무자의 보통재판적(주소지)을 관할하는 지방법원 단독판사가 집행법원입니다. 같은 채무자에 대해 여러 지방법원에 동시에 압류명령을 신청할 수 있으며, 민사집행법 제235조는 이러한 압류의 경합을 다룹니다.</p>
<h3>실제 사례</h3>
<div class="case-box"><h4>사례 1: 금전 채무 사건</h4>
<p>B는 판결문을 받은 후 집행문을 신청합니다. A의 주소지(부산)를 관할하는 부산지방법원에 압류명령을 신청하고, A의 은행 계좌에 압류명령을 송달합니다. 은행은 계좌를 동결하고 B의 추심 신청에 응하여 법원에 공탁합니다.</p></div>
<div class="case-box"><h4>사례 2: 여러 채권자가 있는 경우</h4>
<p>D가 먼저 압류명령을 받으면 C의 계좌 1,500만원이 압류됩니다. E도 압류명령을 신청하면 집행경합이 발생합니다. 1,500만원은 배당 절차를 거쳐 D가 1,000만원, E는 남은 500만원을 받게 됩니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 판결문이 있으면 바로 집행 가능한가요?</p>
<p class="qna-a">판결문만으로는 부족합니다. 판결이 '확정'되어야 하고, 그 다음 집행문을 발급받아야 합니다. 판결 확정 후 2년 이내에 집행을 신청해야 하며, 2년을 넘으면 다시 법원에 신청해야 합니다(민사집행법 제28조, 제30조의2). 공정증서, 조정조서, 화해조서는 집행문 없이 바로 집행 신청이 가능합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 상대방이 재산이 없으면 어떻게 하나요?</p>
<p class="qna-a">시간이 지나 채무자가 새로운 재산을 취득할 때까지 기다린 후 재집행 신청, 급여·임차금 등 정기적 수입 파악, 재산명시절차(민사집행법 제319조 이하)를 통해 채무자에게 재산 상황을 공개하도록 강제할 수 있습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 상대방이 회생이나 파산 신청을 하면 집행이 중단되나요?</p>
<p class="qna-a">네, 중단됩니다. 채무자가 회생절차나 파산절차를 신청하면 강제집행은 중단되어야 합니다. 이 경우 회생절차나 파산절차에 채권자로 참여하여 배당을 받기를 기대해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h4>채권집행에서 중요한 법원의 입장</h4>
<p><strong>1. 집행권원의 범위:</strong> 대법원은 민사집행법 제21조에서 정한 집행권원만이 강제집행의 기초가 될 수 있다고 해석합니다. 일반적인 약속이나 합의서가 있더라도 법원이 인정하는 형태(판결, 공정증서, 조정조서, 화해조서)가 아니면 집행권원이 될 수 없습니다.</p>
<p><strong>2. 압류명령의 효력:</strong> 민사집행법 제223조에 따르면 압류명령이 제3채무자에게 송달되는 때에 효력이 발생합니다.</p>
<p><strong>3. 관할의 중요성:</strong> 관할 없는 법원에서 받은 압류명령은 원칙적으로 무효입니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h4>집행 과정에서 반드시 알아야 할 주의사항</h4>
<p><strong>1. 집행권원 확인:</strong> 일반 계약서나 합의서(공증 없음)는 집행권원이 아닙니다. 판결은 확정판결만 가능합니다.</p>
<p><strong>2. 기한 엄수:</strong> 판결 확정 후 10년, 집행문 신청 기한 2년, 공정증서 10년 등 각 문서별 시간 제한을 반드시 지켜야 합니다.</p>
<p><strong>3. 채무자의 주소 파악:</strong> 채무자의 주소를 잘못 파악하면 관할이 없는 법원에 신청하게 되어 집행이 무효가 될 수 있습니다.</p>
<p><strong>4. 제3채무자 파악:</strong> 은행 계좌가 어디인지, 급여를 받는 직장이 어디인지 등을 미리 조사해야 합니다.</p>
<p><strong>5. 채무자의 이의 대비:</strong> 채무자나 제3채무자가 압류명령에 이의를 제기할 수 있습니다(민사집행법 제240조).</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제188조 이하', desc: '금전채권에 대한 강제집행' },
      { name: '민사집행법 제21조', desc: '집행권원의 종류' },
      { name: '민사집행법 제224조', desc: '채권집행의 관할' },
      { name: '민사집행법 제227조', desc: '압류명령 발부 및 송달' },
      { name: '민사집행법 제234조', desc: '전부명령의 효과' },
      { name: '민사집행법 제235조', desc: '압류의 경합' },
      { name: '민사집행법 제319조', desc: '재산명시절차' },
    ],
    forms: []
  },
  {
    id: 'ef-54',
    title: '집행권원이란 — 어떤 서류가 있어야 강제집행을 할 수 있나',
    meta: '강제집행을 하려면 확정판결, 가집행선고 판결, 화해조서, 조정조서, 공정증서, 지급명령 등 집행권원이 있어야 하며, 대부분 집행문을 받아야 합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>법원에서 나온 판결문이 있는데, 이걸로 바로 압류할 수 있는지 궁금하신 분</li>
<li>상대방과 합의를 했거나 공정증서를 작성했는데 집행할 수 있는지 알고 싶으신 분</li>
<li>지급명령을 신청했거나 받았는데, 다음 단계가 뭔지 모르시는 분</li>
<li>가집행의 선고가 있는 판결이 있는데 먼저 집행할 수 있는지 궁금하신 분</li>
<li>강제집행을 하려고 하는데 어떤 서류를 법원에 제출해야 하는지 알고 싶으신 분</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p>강제집행을 하려면 반드시 '집행권원'이라고 불리는 특정한 서류나 결정이 있어야 합니다. 여기에는 확정 판결, 가집행 선고가 있는 판결, 화해조서, 조정조서, 공정증서, 지급명령 등이 포함됩니다. 대부분의 경우 집행문이라는 추가 증명서를 받아야 하며, 이를 통해서만 법원에 강제집행을 신청할 수 있습니다.</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>집행권원의 의의와 종류</h3>
<p>집행권원이란 강제집행의 기초가 되는 서류 또는 결정을 말합니다. 개인 간의 약속이나 간단한 차용증으로는 강제집행을 할 수 없습니다.</p>
<div class="summary-box"><p><strong>① 확정 판결 (민사집행법 제24조)</strong> — 항소기간(30일)이 지나면 자동으로 확정됩니다. 항소 중이거나 상고 중인 판결로는 아직 집행할 수 없습니다.</p>
<p><strong>② 가집행 선고가 있는 판결 (민사집행법 제24조)</strong> — 판결이 확정되기 전에라도 먼저 이행하라는 결정이 있는 경우입니다. 단, 나중에 판결이 뒤집히면 이행한 금액을 돌려받아야 합니다.</p>
<p><strong>③ 화해조서·조정조서 (민사집행법 제56조)</strong> — 확정 판결과 같은 효력이 있으므로 집행문 없이 곧바로 강제집행을 신청할 수 있습니다.</p>
<p><strong>④ 공정증서 (민사집행법 제56조 제4호)</strong> — 일정한 금액의 지급을 목적으로 하고 채무자가 강제집행을 승낙한다는 뜻이 명확하게 적혀 있어야 합니다.</p>
<p><strong>⑤ 지급명령 (민사소송법 제474조~제491조)</strong> — 채무자가 이의를 제기하지 않으면 명령이 확정되어 집행문 없이 강제집행을 신청할 수 있습니다.</p></div>
<h3>집행문 부여 (민사집행법 제28조~제34조)</h3>
<p>집행문은 집행권원이 정말 존재하고 집행 가능한 상태인지를 법원이 확인해주는 증명서입니다. 확정 판결과 가집행 선고가 있는 판결에는 집행문이 필수입니다. 화해조서·조정조서, 공정증서(강제집행 승낙이 있는 경우), 지급명령은 집행문이 불필요합니다.</p>
<h3>실제 사례</h3>
<div class="case-box"><h4>사례 1: 금전 차용 분쟁</h4>
<p>판결이 확정되면, 법원에 집행문 부여를 신청합니다. 집행문을 받으면 친구의 급여, 예금 등을 압류하는 강제집행을 신청할 수 있습니다.</p></div>
<div class="case-box"><h4>사례 2: 공정증서</h4>
<p>강제집행 승낙 조항이 들어간 공정증서 자체가 곧바로 집행권원이 됩니다. 집행문 없이 바로 법원에 강제집행을 신청할 수 있습니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 공정증서로도 바로 집행할 수 있나요?</p>
<p class="qna-a">네, 그러나 조건이 있습니다. 공정증서가 (1) 일정한 금액의 지급을 목적으로 하고, (2) 채무자가 강제집행을 승낙한다는 뜻이 명확하게 적혀 있어야 합니다. 이 두 조건을 모두 갖춘 공정증서라면 집행문을 받지 않고도 바로 강제집행을 신청할 수 있습니다.<br><small>위 내용은 일반적인 법률 정보이며, 개별 상황에 따라 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 판결이 확정되기 전에도 집행할 수 있나요?</p>
<p class="qna-a">판결문에 '가집행의 선고'가 있다면 가능합니다. 다만 나중에 상급심에서 판결이 뒤집혀 원래 판결이 취소되면, 이미 받은 금액을 돌려주어야 합니다.<br><small>위 내용은 일반적인 법률 정보이며, 개별 상황에 따라 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 집행문은 여러 개 받을 수 있나요?</p>
<p class="qna-a">네, 필요하면 여러 번 집행문을 받을 수 있습니다. 다만 이미 받은 금액에 대해 중복으로 집행문을 받고 집행할 수는 없습니다.<br><small>위 내용은 일반적인 법률 정보이며, 개별 상황에 따라 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h4>판례 1: 공정증서의 강제집행 승낙 요건</h4>
<p>공정증서로 강제집행을 하려면, "강제집행을 승낙한다"는 채무자의 의사가 명확하게 기록되어 있어야 합니다. 단순히 금액을 지급하기로 약속한 것만으로는 부족합니다.</p></div>
<div class="ruling-box"><h4>판례 2: 가집행 선고의 효력</h4>
<p>가집행 선고가 있는 판결은 1심 법원의 판결 내용이 확정되지 않았더라도 강제집행이 가능합니다. 다만 상급심에서 원래 판결이 취소된 경우 이미 받은 금액을 반환해야 합니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h4>주의 1: 집행권원이 없으면 강제집행 불가</h4>
<p>개인 간의 약속, 메모, 문자, 녹음 파일 등은 모두 집행권원이 될 수 없습니다. 소송을 제기하여 판결을 받아야 합니다.</p></div>
<div class="warn-box"><h4>주의 2: 판결 확정 전에는 집행문을 받을 수 없음</h4>
<p>판결이 항소 중이거나 항소 기간이 남아 있다면, 집행문을 신청할 수 없습니다. 단, 가집행의 선고가 있으면 판결이 아직 확정되지 않았어도 집행문을 받을 수 있습니다.</p></div>
<div class="warn-box"><h4>주의 3: 공정증서도 모두 강제집행 가능한 것은 아님</h4>
<p>반드시 (1) 금전, 대체물, 또는 유가증권의 지급을 목적으로 하고, (2) 채무자가 강제집행을 승낙한다는 취지가 명확하게 적혀 있어야 합니다.</p></div>
<div class="warn-box"><h4>주의 4: 집행문의 유효 기간</h4>
<p>집행문으로 강제집행을 신청하려면 판결 확정 후 10년 이내여야 합니다(민법 제162조).</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제24조', desc: '확정 판결 및 가집행선고 판결' },
      { name: '민사집행법 제56조', desc: '화해조서·조정조서·공정증서' },
      { name: '민사소송법 제474조~제491조', desc: '지급명령 절차' },
    ],
    forms: []
  },
  {
    id: 'ef-55',
    title: '재산명시·재산조회 — 상대방 재산을 찾는 법원 제도',
    meta: '채무자의 재산이 어디 있는지 모를 때 법원을 통해 재산명시를 신청하고 공공기관에 재산조회를 요청하는 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자의 재산이 어디에 있는지 모르는 경우</li>
<li>채무자가 재산을 숨기고 있는 것으로 의심되는 경우</li>
<li>압류 전에 채무자의 재산 현황을 파악하고 싶은 경우</li>
<li>강제집행을 위해 채무자의 구체적인 재산 정보가 필요한 경우</li>
<li>채무자가 법원 출석을 거부하는 경우</li>
<li>공공기관으로부터 재산 정보를 직접 조회하고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>재산명시</strong>는 채권자가 법원에 신청하여 채무자로 하여금 재산목록을 제출하도록 강제하는 제도입니다. 불출석이나 불제출 시에는 감치라는 벌칙이 있습니다.</p>
<p><strong>재산조회</strong>는 재산명시가 이행되지 않을 때 법원이 공공기관(세무서, 은행, 보험회사, 주민등록지원 등)에 채무자의 재산 정보를 조회해주는 제도입니다.</p>
<p><strong>법적 근거:</strong> 민사집행법 제61조(재산명시), 제68조(감치), 제74조(재산조회)</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>재산명시 신청 (민사집행법 제61조)</h3>
<p>재산명시는 채권자가 법원에 신청하면, 채무자가 법원에 출석하여 자신의 재산 상황을 명시하도록 하는 절차입니다.</p>
<p><strong>신청 요건:</strong> 집행력 있는 정본(판결문, 조정서, 공정증서 등), 채무 불이행 사실 입증, 채무자의 주소지 관할 지방법원의 강제집행계</p>
<p><strong>신청 절차:</strong> 신청서 작성 및 제출 → 법원에서 채무자에게 소환 통지 → 기일 공시 → 채무자 출석 → 재산목록 작성 → 법원 판사 질문 및 확인 → 조서 작성</p>
<div class="case-box"><p><strong>사례:</strong> A씨는 B씨에게 3,000만원을 빌려줬으나 B씨가 변제하지 않았습니다. A씨는 B씨의 재산이 어디에 있는지 몰라 재산명시 신청을 하였습니다. 법원의 기일에 B씨가 출석하여 은행계좌 3개, 빌라 1채를 보유하고 있다고 밝혔습니다. 이제 A씨는 그 계좌와 부동산을 대상으로 강제집행을 진행할 수 있게 되었습니다.</p></div>
<h3>감치 (민사집행법 제68조)</h3>
<p>채무자가 재산명시 기일에 불출석하거나, 출석하였으나 불성실하게 재산목록을 제출하면 감치라는 벌칙이 적용됩니다. 감치 기간은 1회당 20일 이내, 3회까지(최대 60일) 가능합니다. 개인 채무자에게만 적용됩니다.</p>
<h3>재산조회 (민사집행법 제74조)</h3>
<p>재산명시를 신청했으나 채무자가 불응하거나 불성실하게 응한 경우, 법원이 공공기관에 채무자의 재산 정보를 조회해주는 제도입니다. 조회 대상: 세무서(부동산·차량·금융계좌), 은행권 통합조회(전국 예금계좌), 보험회사, 주민등록지원, 등기소</p>
<div class="case-box"><p><strong>사례:</strong> C씨가 재산명시를 신청했으나 D씨는 기일에 불출석했습니다. C씨는 법원에 재산조회를 신청했고, 법원이 은행권 통합 조회를 실시한 결과 D씨가 □□은행에 1,500만원, ◇◇은행에 800만원의 예금계좌를 보유하고 있음이 밝혀졌습니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 재산명시 신청 후 얼마나 오래 기다려야 하나요?</p>
<p class="qna-a">법원의 업무 부하에 따라 다르지만, 보통 신청 후 1~2개월 내에 재산명시 기일이 정해집니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 채무자가 재산명시 기일에 거짓 재산목록을 제출하면 어떻게 되나요?</p>
<p class="qna-a">거짓 재산목록 제출은 법원 모욕죄에 해당할 수 있으며, 채권자는 거짓이라고 입증하여 추가 감치를 신청할 수 있습니다. 또한 재산조회 신청을 통해 실제 재산을 파악할 수 있습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 감치로 인해 채무자가 구금되면 채무가 소멸되나요?</p>
<p class="qna-a">아니오, 감치는 채무 소멸과 무관한 강제 수단입니다. 채무자는 감치가 풀린 후에도 여전히 채무를 이행해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>대법원 판례:</strong> "재산명시는 채무자의 재산 상황을 파악하여 강제집행의 실효성을 높이기 위한 제도로서, 채무자가 불성실하게 대응하는 경우 감치를 통한 강제는 정당하다."</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>거짓 고소의 위험:</strong> 재산명시 기일에 거짓 진술을 하면 위증죄로 고소될 수 있으며, 이는 형사 처벌을 초래합니다.</p></div>
<div class="warn-box"><p><strong>재산명시의 한계:</strong> 재산명시는 채무자의 임의 신고에 의존하기 때문에, 채무자가 불성실하게 대응하면 효과가 떨어집니다. 이 경우 재산조회를 함께 진행하는 것이 효과적입니다.</p></div>
<div class="warn-box"><p><strong>개인정보 보호:</strong> 재산조회 과정에서 채무자의 개인정보가 여러 공공기관에서 조회됩니다. 조회 결과 정보는 강제집행 목적 외에는 사용할 수 없습니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제61조', desc: '재산명시 신청' },
      { name: '민사집행법 제68조', desc: '감치(불출석·불성실 제출 시 구금)' },
      { name: '민사집행법 제74조', desc: '재산조회' },
    ],
    forms: []
  },
  {
    id: 'ef-56',
    title: '예금·금융채권 압류 — 통장과 금융계좌를 압류하는 방법',
    meta: '채무자의 은행 계좌를 법원 명령으로 동결하고 강제로 받는 가장 일반적인 강제집행 방법으로, 계좌번호 없이도 포괄적 압류 신청이 가능합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자의 은행 예금을 압류하려는 경우</li>
<li>채무자의 계좌번호를 모르는 경우</li>
<li>포괄적 압류 신청 방법을 알고 싶은 경우</li>
<li>예금 압류 후 추심 또는 전부명령으로 돈을 받고 싶은 경우</li>
<li>압류금지 예금의 범위를 알고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p>예금·금융채권 압류는 민사집행법 제223조에 따라 채권자가 법원에 채권압류명령을 신청하고, 법원이 은행(제3채무자)에 채무자의 계좌에서 지급을 금지하도록 명령하는 절차입니다. 계좌번호를 모르더라도 채무자 성명, 생년월일, 주민등록번호로 포괄적 압류 신청이 가능합니다. 압류명령이 은행에 송달되면 계좌가 동결되고, 이후 추심명령이나 전부명령으로 돈을 받습니다.</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>예금 압류 절차</h3>
<p><strong>1단계:</strong> 집행권원(판결문, 조정조서 등), 집행문, 송달증명 준비</p>
<p><strong>2단계:</strong> 채무자의 주소지 관할 법원 또는 은행 소재지 관할 법원에 채권압류명령 신청서 제출</p>
<p><strong>3단계:</strong> 법원 심사 — 법원은 제3채무자(은행)와 채무자를 심문하지 않고 심사</p>
<p><strong>4단계:</strong> 압류명령 발부 — 은행에 채무자에 대한 지급금지 명령, 채무자에게 처분 및 영수금지 명령</p>
<p><strong>5단계:</strong> 효력 발생 — 압류명령이 은행에 송달된 때부터 효력 발생</p>
<p><strong>6단계:</strong> 추심명령 또는 전부명령 신청으로 실제 수령</p>
<div class="case-box"><h4>포괄적 압류 신청</h4>
<p>채무자의 특정 계좌번호를 몰라도 "○○은행에 대한 채무자의 모든 예금채권"으로 포괄적으로 기재하여 신청할 수 있습니다. 다만, 채무자의 거래 은행을 특정해야 합니다.</p></div>
<h3>압류금지 예금</h3>
<p>다음 예금은 법적으로 압류할 수 없습니다: 국민기초생활보장급여, 장애인연금, 기초노령연금, 차상위계층 지원금, 생계지원금 등 사회보장급여 일체. 월 150만원 이하의 예금도 압류금지 대상에 포함됩니다(민사집행법 제246조 제1항 제8호 및 관련 규칙).</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 채무자의 계좌번호를 모르면 압류할 수 없나요?</p>
<p class="qna-a">아니요, 계좌번호 없이도 압류 신청이 가능합니다. 채무자의 성명, 생년월일, 주민등록번호만 알면 "해당 은행 내 채무자 명의의 모든 예금채권"으로 포괄 신청할 수 있습니다. 단, 거래 은행은 특정해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 압류 후 실제로 돈을 받으려면 무엇을 더 해야 하나요?</p>
<p class="qna-a">압류명령만으로는 돈을 받을 수 없습니다. 추심명령(직접 은행에 청구) 또는 전부명령(채권 자체를 이전) 중 하나를 추가로 신청해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 기초생활수급자의 통장도 압류할 수 있나요?</p>
<p class="qna-a">아니요, 기초생활보장급여는 전액 압류금지 대상입니다. 또한 일반 예금도 월 150만원 이하는 압류할 수 없습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>압류명령 효력 시점:</strong> 압류명령이 발부되어도 은행에 송달되기 전에는 효력이 없습니다. 은행에 송달된 날이 압류의 효력 발생일입니다.</p></div>
<div class="warn-box"><p><strong>포괄 압류의 한계:</strong> 포괄 신청 시 채무자의 계좌가 없으면 압류명령은 효력이 없습니다. 사전에 재산조회나 재산명시로 거래 은행을 파악하는 것이 중요합니다.</p></div>
<div class="warn-box"><p><strong>경합 시 공탁:</strong> 다른 채권자도 같은 계좌를 압류한 경우, 은행은 공탁 의무가 발생할 수 있습니다. 이 경우 배당 절차가 진행됩니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제223조', desc: '금전채권에 대한 압류명령' },
    ],
    forms: []
  },
  {
    id: 'ef-57',
    title: '급여 압류와 압류금지채권 — 월급을 얼마까지 압류할 수 있나',
    meta: '급여의 1/2까지만 압류 가능하며, 표준생계비 기준과 기초생활보장급여 전액 압류금지 등 압류금지채권의 범위를 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자의 급여를 압류하려는 채권자</li>
<li>급여를 압류당할 위기에 처한 채무자</li>
<li>압류할 수 있는 급여의 상한선을 알고 싶은 분</li>
<li>기초생활수급자·장애인 등 취약계층의 급여 압류 여부를 알고 싶은 분</li>
<li>압류금지채권의 범위를 정확히 파악하고 싶은 분</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p>급여(임금·월급)에 대한 압류는 민사집행법 제246조에 따라 <strong>급여의 1/2까지만</strong> 압류할 수 있습니다. 나머지 1/2은 생계 보장을 위해 반드시 채무자에게 남겨야 합니다. 다만 급여가 높을수록 압류 가능 금액도 커집니다. 기초생활보장급여, 장애인연금, 노령연금 등 사회보장급여는 전액 압류금지 대상입니다.</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>급여 압류의 기본 원칙 (민사집행법 제246조)</h3>
<div class="summary-box"><p><strong>압류 가능 범위:</strong> 급여의 1/2 이하</p>
<p><strong>압류 불가능 범위:</strong> 급여의 1/2 이상 (생계 보장 목적)</p>
<p><strong>예시:</strong> 월 300만원 급여 → 최대 150만원까지 압류 가능</p></div>
<h3>표준생계비 기준 보호</h3>
<p>1/2 원칙 외에 표준생계비(통계청 기준) 이하의 급여는 압류할 수 없습니다. 2024년 기준 1인 가구 표준생계비는 약 150만원 수준입니다. 따라서 급여가 낮은 경우에는 표준생계비 이하 부분은 압류 불가능합니다.</p>
<h3>압류금지채권의 종류</h3>
<div class="case-box"><h4>전액 압류금지</h4>
<p>국민기초생활보장급여, 장애인연금, 기초노령연금, 차상위계층 지원금, 한부모가족지원금, 아동수당, 양육수당, 재난지원금, 실업급여(일부 제한), 육아휴직급여(일부 제한)</p></div>
<div class="case-box"><h4>1/2 범위 내 압류금지</h4>
<p>근로소득(급여), 사업소득(일정 요건), 퇴직급여</p></div>
<h3>급여 압류 절차</h3>
<p>급여 압류는 회사(고용주)를 제3채무자로 하여 채권압류명령을 신청합니다. 압류명령이 회사에 송달되면, 회사는 채무자에게 압류 금액만큼을 지급하지 않고 법원에 공탁하거나 추심명령에 따라 채권자에게 지급합니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 최저임금 수준의 급여도 압류할 수 있나요?</p>
<p class="qna-a">최저임금 수준의 급여는 표준생계비 이하일 가능성이 높아 대부분 압류금지 대상이 됩니다. 1/2 원칙 적용 시에도 생계가 어려운 경우 법원이 압류범위를 제한할 수 있습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 퇴직금도 압류할 수 있나요?</p>
<p class="qna-a">퇴직급여도 1/2까지만 압류 가능합니다. 단, 퇴직 후 수령 전 상태의 퇴직급여는 임금채권과 동일하게 취급되어 1/2 한도가 적용됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 급여 압류 통보를 받은 회사(고용주)는 어떻게 해야 하나요?</p>
<p class="qna-a">압류명령을 받은 회사는 채무자에게 압류 금액을 지급하면 안 됩니다. 추심명령이 있으면 채권자에게 직접 지급하거나, 경합이 있으면 법원에 공탁해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>압류금지 범위 초과 압류 금지:</strong> 1/2을 초과하여 급여를 압류하면 해당 부분은 무효입니다. 제3채무자(회사)는 이를 거부할 수 있습니다.</p></div>
<div class="warn-box"><p><strong>사회보장급여 압류 절대 불가:</strong> 기초생활보장급여 등 사회보장급여를 압류하면 위법입니다. 이미 압류된 경우 채무자는 즉시 법원에 이의를 신청할 수 있습니다.</p></div>
<div class="warn-box"><p><strong>회사의 공탁 의무:</strong> 경합 채권자가 있을 때 회사가 추심 요청에 바로 응하면 책임 문제가 생길 수 있습니다. 공탁 절차를 거치는 것이 안전합니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제246조', desc: '압류금지채권(급여·사회보장급여)' },
    ],
    forms: []
  },
  {
    id: 'ef-58',
    title: '압류명령 신청 — 채권압류명령 신청 절차와 서류',
    meta: '집행권원, 집행문, 송달증명을 갖추어 법원에 채권압류명령을 신청하는 단계별 절차(STEP 1~5)와 필요 서류를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자가 제3자에게 돈을 빌려준 채권을 받고 싶으신 경우</li>
<li>법원 판결을 얻었는데 채무자의 채권을 강제집행하고 싶으신 경우</li>
<li>채무자의 은행 예금이나 급여, 임차보증금 등을 압류하려는 경우</li>
<li>압류명령 신청 절차와 필요한 서류를 알고 싶으신 경우</li>
<li>압류명령 발령 후 실제 효력이 언제 생기는지 알고 싶으신 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>압류명령의 의의:</strong> 압류명령은 채권자의 신청에 의해 법원이 채무자의 제3채무자에 대한 금전채권을 압류하는 절차입니다. 민사집행법 제223조에 따라 금전채권에 대한 강제집행은 압류명령으로 시작됩니다.</p>
<p><strong>신청 요건:</strong> 집행권원(판결, 조정조서 등), 집행문, 송달증명이 필수입니다.</p>
<p><strong>관할법원:</strong> 민사집행법 제224조에 따라 채무자의 주소지 또는 제3채무자의 소재지 관할 지방법원에 신청합니다.</p>
<p><strong>효력 발생 시점:</strong> 압류명령이 제3채무자에게 송달된 때 압류의 효력이 발생합니다.</p></div>`
      },
      {
        heading: '단계별 절차',
        content: `<div class="case-box"><h4>STEP 1 — 신청 준비</h4>
<p>압류명령을 신청하기 전에 다음 세 가지를 준비합니다: 집행권원(판결, 조정조서 등 집행력 있는 정본), 집행문(법원으로부터 받은 집행가능 확인), 송달증명(판결문 등이 상대방에게 전달되었음을 증명). 이 세 가지를 모두 갖춰야 신청이 가능합니다.</p></div>
<div class="case-box"><h4>STEP 2 — 신청서 작성 및 제출</h4>
<p>관할 집행법원에 압류명령 신청서를 제출합니다: 채권자, 채무자, 제3채무자의 정확한 표시 / 피압류채권의 구체적 특정(예: 삼성은행 ○○지점 예금, 급여채권) / 집행권원과 집행문 첨부 / 송달증명 첨부</p></div>
<div class="case-box"><h4>STEP 3 — 법원 심사</h4>
<p>민사집행법 제226조에 따라 법원은 제3채무자와 채무자를 심문하지 않고 신청을 심사합니다. 심사의 밀행성을 보장하기 위함입니다.</p></div>
<div class="case-box"><h4>STEP 4 — 압류명령 발령 및 송달</h4>
<p>법원이 압류명령을 발령합니다. 민사집행법 제227조에 따라 제3채무자에게 채무자에 대한 지급금지를 명령하고, 채무자에게 채권의 처분 및 영수금지를 명령합니다.</p></div>
<div class="case-box"><h4>STEP 5 — 효력 발생 및 다음 단계</h4>
<p>압류명령이 제3채무자에게 송달되면 효력이 발생합니다. 다음 단계로 추심명령(제3채무자로 하여금 채권자에게 직접 지급하도록 명령) 또는 전부명령(채권을 채권자에게 이전)을 신청합니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 피압류채권을 어떻게 특정해야 하나요?</p>
<p class="qna-a">예금채권의 경우: "○○은행 △△지점 예금계좌 ◇◇◇◇-◇◇-◇◇◇◇명의 예금", 급여채권의 경우: "○○회사로부터 받을 월급 채권". 제3채무자가 명확하게 알아볼 수 있도록 구체적으로 기재해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 압류명령이 발령되면 얼마 후 효력이 생기나요?</p>
<p class="qna-a">압류명령이 발령되는 순간부터 효력이 생기는 것이 아닙니다. 민사집행법 제227조 제3항에 따라 "제3채무자에게 송달된 때"부터 효력이 발생합니다. 일반적으로 법원이 발령 후 1~2주 내에 송달됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 심사에서 기각되면 어떻게 하나요?</p>
<p class="qna-a">압류명령의 신청기각 결정에 대해서는 민사집행법 제227조 제4항에 따라 즉시항고를 할 수 있습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h4>대법원 1980. 2. 12. 선고 79다1615 판결</h4>
<p>채권의 압류효력은 제3채무자에게 송달된 때 발생하며, 압류 당시 채권이 이미 제3자에게 양도되었더라도 송달 후 양도가 취소되어 채권이 원래 채무자에게 복귀한 경우 그 채권은 압류채권자에게 전부되지 않는다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>피압류채권 특정 오류:</strong> 채권을 너무 막연하게 기재하면 신청이 기각될 수 있습니다. 잘못된 예: "○○은행의 예금" / 올바른 예: "삼성은행 강남지점 예금계좌 1002-1234-567890"</p></div>
<div class="warn-box"><p><strong>관할법원 오류:</strong> 민사집행법 제224조에 따라 1순위는 채무자의 주소지 관할 지방법원, 2순위는 제3채무자의 소재지 관할 지방법원입니다. 관할 없는 법원에 신청하면 각하됩니다.</p></div>
<div class="warn-box"><p><strong>필수 첨부서류 누락:</strong> 집행력 있는 정본, 집행문, 송달증명원이 빠지면 신청이 반려됩니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제223조', desc: '금전채권에 대한 압류명령' },
      { name: '민사집행법 제224조', desc: '관할법원' },
      { name: '민사집행법 제226조', desc: '심문 없이 심사(밀행성)' },
      { name: '민사집행법 제227조', desc: '압류명령 발부, 송달, 효력 발생' },
    ],
    forms: []
  },
  {
    id: 'ef-59',
    title: '추심명령 — 압류 후 제3채무자로부터 직접 받는 방법',
    meta: '법원이 채권자에게 제3채무자(은행, 직장 등)로부터 채권을 직접 추심할 권한을 부여하는 강제집행 절차입니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>압류 후 실제로 돈을 받고 싶은 경우</li>
<li>은행에서 돈을 받는 절차를 알고 싶은 경우</li>
<li>추심명령과 전부명령의 차이를 알고 싶은 경우</li>
<li>급여나 다른 채권을 추심하려는 경우</li>
<li>경합 채권자가 있는 경우 공탁 절차를 알고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>추심명령(민사집행법 제229조 제1항):</strong> 법원이 채권자에게 제3채무자(은행, 직장 등)로부터 채권을 직접 추심할 권한을 부여하는 강제집행 절차입니다.</p>
<p><strong>흐름:</strong> ① 압류명령 발령 → ② 추심명령 신청 → ③ 법원 추심명령 발령 → ④ 제3채무자에게 청구 → ⑤ 돈 수령</p>
<p><strong>핵심 개념:</strong> 추심명령은 채권을 채권자에게 이전하는 것이 아니라, 직접 추심할 권한만 부여하는 것입니다. 전부명령과 달리 다른 채권자도 함께 배당받을 수 있습니다.</p></div>`
      },
      {
        heading: '단계별 절차',
        content: `<div class="case-box"><h4>① 압류명령 발령</h4>
<p>먼저 채권자가 법원에 압류신청을 하고, 법원이 압류명령을 발령합니다. 압류명령이 제3채무자(은행, 직장 등)에게 송달되면 압류의 효력이 발생합니다.</p></div>
<div class="case-box"><h4>② 추심명령 신청</h4>
<p>압류 후 실제로 돈을 받기 위해 법원에 추심명령을 신청합니다. 신청서에는 압류명령의 사본, 제3채무자 정보, 추심하려는 금액 등을 기재합니다.</p></div>
<div class="case-box"><h4>③ 법원의 추심명령 발령</h4>
<p>법원이 신청을 검토하고 추심명령을 발령합니다. 추심명령이 제3채무자에게 송달되면 효력이 발생합니다.</p></div>
<div class="case-box"><h4>④ 제3채무자에게 청구</h4>
<p>채권자는 추심명령을 받은 후, 제3채무자(은행, 직장 등)에게 직접 청구합니다.</p></div>
<div class="case-box"><h4>⑤ 돈 수령 또는 추심소송</h4>
<p>제3채무자가 추심명령을 이행하면 채권자가 돈을 받습니다. 만약 제3채무자가 추심명령을 거부하면, 채권자는 법원에 추심소송을 제기할 수 있습니다(민사집행법 제238조).</p></div>`
      },
      {
        heading: '추심명령과 전부명령 비교',
        content: `<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1a2e4a; color:white;"><th style="padding:10px; border:1px solid #ddd;">구분</th><th style="padding:10px; border:1px solid #ddd;">추심명령</th><th style="padding:10px; border:1px solid #ddd;">전부명령</th></tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">법적 성질</td><td style="padding:10px; border:1px solid #ddd;">권한 부여</td><td style="padding:10px; border:1px solid #ddd;">채권 이전</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">무자력 위험</td><td style="padding:10px; border:1px solid #ddd;">채무자 부담</td><td style="padding:10px; border:1px solid #ddd;">채권자 부담</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">다른 채권자</td><td style="padding:10px; border:1px solid #ddd;">함께 배당 가능</td><td style="padding:10px; border:1px solid #ddd;">배제(우선 독점)</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">경합 시</td><td style="padding:10px; border:1px solid #ddd;">공탁 의무 발생</td><td style="padding:10px; border:1px solid #ddd;">전부명령 불허</td></tr>
</tbody></table>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 추심명령과 전부명령, 어느 것이 더 좋은가요?</p>
<p class="qna-a">상황에 따라 다릅니다. 추심명령은 채권자가 직접 받을 수 있어 빠르고, 전부명령은 법원이 중개하여 다른 채권자를 배제할 수 있습니다. 경합 채권자가 있으면 전부명령은 불허되므로 추심명령이 유일한 방법이 됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 제3채무자가 추심명령에 불응하면?</p>
<p class="qna-a">추심소송을 제기하여 법원에서 강제집행을 받을 수 있습니다. 추심소송은 추심명령이 발령된 후 제3채무자가 돈을 지급하지 않을 때 가능합니다(민사집행법 제238조).<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 경합 채권자가 있는 경우 추심한 돈을 바로 가질 수 있나요?</p>
<p class="qna-a">아니요, 경합이 있는 경우 추심명령으로 수령한 금액은 반드시 공탁해야 합니다(민사집행법 제248조 제4항). 공탁 후 배당 절차를 통해 각자의 몫을 받습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>압류명령 효력 확인:</strong> 추심명령을 신청하기 전에 반드시 압류명령이 제3채무자에게 송달되었는지 확인해야 합니다. 송달되지 않으면 추심명령을 신청할 수 없습니다.</p></div>
<div class="warn-box"><p><strong>기한 도과 여부:</strong> 채권의 기한이 도과하지 않으면 추심명령을 신청할 수 없습니다.</p></div>
<div class="warn-box"><p><strong>압류금지채권 확인:</strong> 급여를 추심하는 경우 압류금지채권(1/2 규칙, 표준생계비 등)을 반드시 확인해야 합니다.</p></div>
<div class="warn-box"><p><strong>경합 채권자와의 분쟁:</strong> 여러 채권자가 있을 때 공탁 없이 추심하면 나중에 다른 채권자와 분쟁이 발생할 수 있습니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제229조 제1항', desc: '추심명령' },
      { name: '민사집행법 제236조', desc: '경합 시 제3채무자의 공탁' },
      { name: '민사집행법 제238조', desc: '추심소송' },
    ],
    forms: []
  },
  {
    id: 'ef-60',
    title: '전부명령 — 압류 채권을 내 것으로 이전받는 방법',
    meta: '압류된 채권을 법원 명령으로 채권자에게 직접 이전하는 전부명령의 요건, 효과, 추심명령과의 차이를 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자의 제3자 채권을 압류했는데, 그 채권을 내가 받으려고 합니다</li>
<li>압류된 채권을 추심하는 대신 직접 내 것으로 이전받고 싶습니다</li>
<li>다른 채권자가 있어도 내가 먼저 변제받을 수 있는 방법이 있나요?</li>
<li>제3채무자에게 직접 받는 것과 전부명령의 차이가 무엇인지 알고 싶습니다</li>
<li>전부명령을 받은 후 제3채무자가 돈이 없으면 어떻게 되나요?</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>전부명령이란:</strong> 채무자의 제3자(제3채무자)에 대한 금전채권을 법원의 명령으로 귀하에게 직접 이전하는 제도입니다. 압류, 평가, 현금화, 추심 과정을 거치지 않고, 법원 판단으로 압류된 채권이 그대로 귀하의 것이 되므로, 제3채무자가 변제하면 귀하는 즉시 채권을 회수합니다. 대신 제3채무자가 무자력이면 돈을 받지 못할 위험을 귀하가 부담합니다.</p>
<p><strong>주요 특징:</strong> 우리 민사집행법은 원칙적으로 채권자평등주의를 택합니다. 하지만 전부명령은 이 원칙의 예외로서, 먼저 압류한 채권자에게만 독점적으로 변제받을 기회를 줍니다.</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>전부명령의 요건 (민사집행법 제229조)</h3>
<div class="summary-box"><p><strong>① 압류명령의 존재</strong> — 먼저 제3채무자에 대한 금전채권이 압류되어 있어야 합니다.</p>
<p><strong>② 금전채권일 것</strong> — 대상이 되는 채권은 반드시 금전채권이어야 합니다.</p>
<p><strong>③ 조건부·기한부가 아닐 것</strong> — 채권이 조건이 붙어 있거나 기한이 정해져 있으면 원칙적으로 불가합니다.</p>
<p><strong>④ 경합이 없을 것</strong> — 다른 채권자의 압류(경합)가 있으면 전부명령은 불허됩니다(제229조 제5항).</p></div>
<h3>전부명령의 효과</h3>
<p>전부명령이 확정되면: ① 압류되어 있던 금전채권이 귀하의 소유로 완전히 이전됩니다. ② 제3채무자가 귀하에게 변제하면 원래 채무자의 채무는 소멸합니다. ③ 다른 채권자는 이 채권으로부터 배당받을 수 없습니다.</p>
<h3>전부명령의 위험성 — 제3채무자 무자력</h3>
<div class="warn-box"><p><strong>전부명령을 받으면 제3채무자가 무자력일 위험을 귀하가 모두 부담합니다.</strong> 예를 들어, 채무자의 A 회사에 대한 100만원 채권을 압류하고 전부명령을 받았는데, 법원의 결정이 확정된 직후 A 회사가 파산하면, 귀하는 그 100만원을 받지 못합니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 전부명령과 추심명령 중 어느 것이 유리한가요?</p>
<p class="qna-a">상황에 따라 다릅니다. 제3채무자의 신용이 좋으면 전부명령이 유리합니다. 채권이 귀하의 것이 되어 빠르게 변제받을 수 있기 때문입니다. 반대로 제3채무자의 신용이 불안정하면 추심명령이 낫습니다. 무자력 위험을 채무자가 부담하기 때문입니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 전부명령 후 제3채무자가 돈이 없으면 어떻게 되나요?</p>
<p class="qna-a">법적으로 할 수 있는 것이 없습니다. 전부명령이 확정되면 그 채권은 귀하의 소유가 됩니다. 하지만 제3채무자가 변제할 능력이 없으면 귀하는 돈을 받지 못합니다. 이것이 전부명령의 가장 큰 위험입니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 다른 채권자가 이미 압류했으면 전부명령이 안 되나요?</p>
<p class="qna-a">원칙적으로 경합이 있으면 전부명령은 불허됩니다(민사집행법 제229조 제5항). 대신 공탁 및 배당 절차가 진행됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><h4>대법원 1998. 2. 13. 선고 95다42195 판결</h4>
<p>"전부명령에 의하여 변제의 효과가 발생하고 강제집행절차가 종료한다. 다만 이는 채권의 내용과 범위가 최종적으로 확정되었을 때를 기준으로 한다."</p></div>
<div class="ruling-box"><h4>대법원 1991. 6. 11. 선고 90다17737 판결</h4>
<p>"전부명령이 무효인 경우, 제3채무자가 선의·무과실로 변제했다면 민법 제470조(선의의 채무자)에 따라 변제 효과가 있다."</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>제3채무자 무자력의 위험:</strong> 전부명령의 가장 큰 위험입니다. 제3채무자가 무자력이 되면 귀하는 돈을 받지 못합니다. 전부명령을 신청하기 전에 반드시 제3채무자의 재무 건전성을 충분히 조사해야 합니다.</p></div>
<div class="warn-box"><p><strong>즉시항고와 시간 지연:</strong> 채무자나 다른 채권자가 즉시항고를 제기하면 전부명령의 효력이 발생하지 않고 상급법원 심리를 기다려야 합니다.</p></div>
<div class="warn-box"><p><strong>경합 시 전부명령 불가:</strong> 다른 채권자의 압류가 발생하면 전부명령은 허용되지 않습니다. 이 경우 공탁·배당 절차로 진행됩니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제229조', desc: '전부명령(압류채권의 채권자에 대한 이전)' },
    ],
    forms: []
  },
  {
    id: 'ef-61',
    title: '집행경합 — 여러 채권자가 같은 채권을 압류하면 어떻게 되나',
    meta: '동일 채권에 여러 채권자가 압류하는 집행경합 상황에서 전부명령이 불허되고 공탁·배당 절차로 진행되는 과정을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>은행계좌를 압류했는데 다른 채권자도 같은 계좌를 압류한 경우</li>
<li>급여채권 압류 중 다른 채권자가 추가로 압류를 신청한 경우</li>
<li>전부명령을 신청했는데 다른 채권자의 압류가 발생한 경우</li>
<li>경합 시 배당받는 방법을 알고 싶은 경우</li>
<li>선압류와 후압류의 권리를 비교하고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>집행경합(민사집행법 제235조)이란?</strong> 동일한 제3채무자에 대해 여러 채권자가 같은 채권을 압류하는 상황을 말합니다.</p>
<p><strong>전부명령 불허:</strong> 경합이 있으면 전부명령을 할 수 없습니다(제229조 제5항)</p>
<p><strong>공탁과 배당:</strong> 제3채무자는 압류된 금액을 공탁소에 공탁하고, 각 채권자는 배당 절차에 참여합니다</p>
<p><strong>배당 순위:</strong> 모든 채권자가 동등한 지위를 가지며, 채권의 성질(일반채권, 우선채권 등)에 따라 결정됩니다</p>
<p><strong>추심명령은 가능:</strong> 경합이 있어도 각 채권자가 추심명령을 신청할 수 있으나, 수령 시 공탁 의무가 발생합니다(제248조 제4항)</p></div>`
      },
      {
        heading: '경합 시 처리 절차',
        content: `<div class="case-box"><h4>Step 1: 제3채무자의 공탁</h4>
<p>제3채무자(예: 은행)는 법원에 집행경합 사실을 신고하고, 압류된 금액을 공탁소에 공탁합니다(사유신고, 제248조 제4항).</p></div>
<div class="case-box"><h4>Step 2: 배당요구</h4>
<p>다른 채권자들은 배당요구 기한(보통 2주) 내에 법원에 배당요구 신청서를 제출합니다(제247조).</p></div>
<div class="case-box"><h4>Step 3: 배당기일 지정</h4>
<p>법원은 배당기일을 지정하고 모든 채권자에게 통지합니다(제252조).</p></div>
<div class="case-box"><h4>Step 4: 배당표 작성 및 배당</h4>
<p>법원은 배당표를 작성하여 각 채권자가 받을 배당액을 결정합니다(제270조). 같은 순위의 채권자들은 채권액 비율에 따라 안분됩니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 내가 먼저 압류했는데 다른 채권자가 압류하면 내 몫이 줄어드나요?</p>
<p class="qna-a">네, 배당액이 줄어듭니다. 집행경합이 발생하면 공탁금을 여러 채권자가 나누어 받기 때문입니다. 집행경합에서는 모든 채권자가 동등하므로, 채권의 성질에 따라 배당이 결정됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 전부명령을 신청했는데 경합이 생기면 어떻게 되나요?</p>
<p class="qna-a">전부명령 신청 후 경합이 발생하면 전부명령은 불허됩니다(민사집행법 제229조 제5항). 대신 공탁 및 배당 절차로 진행됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 경합 시 배당 순서는 어떻게 결정되나요?</p>
<p class="qna-a">배당 순서는 압류 순서가 아니라 채권의 성질에 따라 결정됩니다. 1순위: 집행비용 / 2순위: 우선채권(근로자의 임금, 조세채권 등) / 3순위: 일반채권. 같은 순위에 여러 채권자가 있으면, 배당액은 각 채권의 비율에 따라 안분됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>대법원 판례:</strong> "집행경합이 발생한 경우, 전부명령은 불가능하고 공탁 및 배당 절차가 진행된다. 배당 순위는 압류 순서가 아니라 채권의 성질에 따라 결정된다."</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>배당요구 기한을 반드시 지키세요:</strong> 경합이 발생하면 법원은 배당요구 종기를 정합니다(보통 2주). 이 기간 내에 배당요구 신청서를 제출하지 않으면 배당을 받지 못합니다.</p></div>
<div class="warn-box"><p><strong>추심명령 수령 후 공탁 의무:</strong> 경합 상황에서 추심명령으로 수령한 금액은 반드시 공탁해야 합니다. 이를 무시하면 다른 채권자로부터 이의를 받을 수 있습니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제235조', desc: '집행경합' },
      { name: '민사집행법 제229조 제5항', desc: '경합 시 전부명령 불허' },
      { name: '민사집행법 제248조 제4항', desc: '경합 시 제3채무자의 공탁 및 사유신고' },
    ],
    forms: []
  },
  {
    id: 'ef-62',
    title: '배당요구 — 다른 사람이 압류했을 때 나도 배당받는 방법',
    meta: '다른 채권자가 이미 압류한 경우 배당요구 종기 내에 신청하여 배당에 참여하는 절차와 필요 서류를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>다른 채권자가 채무자의 채권(은행계좌, 급여 등)을 압류한 경우</li>
<li>당신도 같은 채무자에 대해 집행권원이 있는 경우</li>
<li>배당요구를 신청해야 하는지 모르겠는 경우</li>
<li>배당요구 기한을 놓치지 않고 싶은 경우</li>
<li>배당요구 절차와 필요 서류를 알고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>배당요구(민사집행법 제247조)란?</strong> 다른 채권자의 압류로 인해 제3채무자의 채권이 공탁된 경우, 당신도 그 공탁금에서 배당을 받기 위해 법원에 신청하는 절차입니다.</p>
<p><strong>기한 필수:</strong> 배당요구 종기(보통 2주)는 절대적 기한입니다. 기한이 지나면 배당을 받지 못합니다.</p>
<p><strong>신청 대상:</strong> 집행권원(판결, 확정조서, 가집행 인가)이 있는 채권자만 가능합니다.</p>
<p><strong>절차 흐름:</strong> 다른 채권자의 압류 → 공탁(제3채무자) → 배당요구 신청(당신) → 배당 실시</p></div>`
      },
      {
        heading: '단계별 절차',
        content: `<div class="case-box"><h4>STEP 1: 배당요구 신청서 작성 및 제출</h4>
<p><strong>시기:</strong> 배당요구 종기(보통 2주) 내<br>
<strong>제출처:</strong> 압류를 담당한 법원 집행관실<br>
<strong>필요 서류:</strong> 배당요구 신청서(법원 양식), 집행권원의 정본 또는 사본, 채권증명 서류, 인감증명서(개인) 또는 사업자등록증 사본(법인)</p></div>
<div class="case-box"><h4>STEP 2: 배당기일 통지 받기</h4>
<p>법원이 배당기일을 지정하고 신청인에게 통지합니다. 보통 배당요구 신청 2~3주 후입니다.</p></div>
<div class="case-box"><h4>STEP 3: 배당기일에 출석(권고)</h4>
<p>채권계산서(채권액, 이자 등을 명시), 집행권원 정본을 제출합니다. 필수는 아니지만, 출석하면 이의가 있을 경우 즉시 제기할 수 있습니다.</p></div>
<div class="case-box"><h4>STEP 4: 배당표 확정 및 배당금 수령</h4>
<p>법원이 각 채권자의 배당액을 계산하여 배당표를 작성합니다. 배당이의 기간은 배당표 공시 후 1주일입니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 배당요구 종기가 지나면 정말 배당을 못 받나요?</p>
<p class="qna-a">네, 절대 못 받습니다. 배당요구 종기는 절대적 기한입니다(민사집행법 제247조). 기한이 지난 후 신청하면 받리되지 않습니다. 배당요구 종기 통지를 받으면 즉시 신청해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 가압류만 해두어도 배당을 받을 수 있나요?</p>
<p class="qna-a">아니요, 불가능합니다. 배당요구를 신청하려면 집행력 있는 집행권원이 필요합니다(민사집행법 제247조). 가압류는 집행권원이 아닙니다. 반드시 확정판결, 확정 조서, 또는 가집행 인가를 받아야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 배당액에 이의가 있으면 어떻게 하나요?</p>
<p class="qna-a">배당표가 공시되면 1주일 내에 배당이의를 제기할 수 있습니다(민사집행법 제278조). 배당이의 후에도 이의가 해결되지 않으면 배당이의의 소(민사집행법 제280조)를 1주일 내에 제기해야 합니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>대법원 판례:</strong> "배당요구 종기는 절대적 기한이므로, 기한 도과 후 배당요구 신청은 받리되지 않는다."</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>배당요구 종기를 절대 놓치지 마세요:</strong> 배당요구 종기는 보통 2주입니다. 기한이 지나면 배당을 받을 수 없습니다. 법원 통지를 받으면 즉시 신청서를 작성하고 필요 서류를 준비하세요.</p></div>
<div class="warn-box"><p><strong>집행권원의 사본이 필요합니다:</strong> 배당요구 신청 시 반드시 집행권원의 정본 또는 인증 사본을 제출해야 합니다. 단순 사본만으로는 불충분합니다.</p></div>
<div class="warn-box"><p><strong>배당기일에는 채권계산서를 제출하세요:</strong> 원금뿐만 아니라 이자, 지연손해금, 소송비용 등을 명시해야 합니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제247조', desc: '배당요구' },
      { name: '민사집행법 제278조', desc: '배당이의' },
      { name: '민사집행법 제280조', desc: '배당이의의 소' },
    ],
    forms: []
  },
  {
    id: 'ef-63',
    title: '집행공탁 — 제3채무자가 돈을 공탁하면 어떻게 되나',
    meta: '제3채무자가 압류된 금액을 법원 공탁소에 맡기는 집행공탁의 의미, 의무공탁과 임의공탁의 차이, 채권자가 공탁금을 받는 절차를 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>은행이나 회사에서 공탁했다는 통보를 받은 경우</li>
<li>압류된 돈이 법원 공탁소에 들어갔다는 통지를 받은 경우</li>
<li>다른 채권자와 함께 공탁금을 나누어야 하는 경우</li>
<li>공탁금을 언제, 어떻게 받을 수 있는지 알고 싶은 경우</li>
<li>제3채무자의 공탁 의무와 효과를 이해하고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>집행공탁(민사집행법 제248조)이란?</strong> 제3채무자(예: 은행, 회사)가 압류된 금액을 법원의 공탁소에 맡기는 행위입니다. 이는 압류 상황에서 제3채무자가 누구에게 지급할지 불명확할 때 발생합니다.</p>
<p><strong>의무공탁:</strong> 압류가 경합된 경우(여러 채권자가 같은 채권을 압류) — 제3채무자는 반드시 공탁해야 함</p>
<p><strong>임의공탁:</strong> 단순 압류인 경우에도 제3채무자가 법적 분쟁을 피하기 위해 공탁 가능</p>
<p><strong>사유신고:</strong> 제3채무자는 공탁 후 반드시 법원에 신고해야 함(제248조 제4항)</p>
<p><strong>채무 소멸:</strong> 제3채무자는 공탁으로 자신의 채무가 소멸 — 법적 책임 해제</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>의무공탁 vs 임의공탁</h3>
<div class="case-box"><h4>의무공탁: 경합이 있는 경우</h4>
<p>채권자 B가 채무자 A의 은행계좌(100만원)를 압류했습니다. 3일 후 채권자 C도 같은 계좌를 압류했습니다. 이제 은행은 누구에게 지급할지 몰라 반드시 공탁해야 합니다(제248조 제1항).</p></div>
<div class="case-box"><h4>임의공탁: 단순 압류인 경우</h4>
<p>채권자 B가 채무자 A의 급여채권(월 300만원)을 압류했습니다. 경합이 없더라도 회사가 법적 분쟁을 예방하기 위해 자발적으로 공탁할 수 있습니다(제248조 제2항).</p></div>
<h3>사유신고 절차</h3>
<p>Step 1: 제3채무자가 공탁소에 돈을 공탁 → Step 2: 공탁소에서 공탁증서 발급 → Step 3: 제3채무자가 법원 집행관실에 사유신고 → Step 4: 법원이 배당요구 종기 통지(보통 2주)</p>
<h3>채권자의 공탁금 수령 절차</h3>
<p>Step 1: 배당요구 종기 확인(보통 2주) → Step 2: 집행권원이 있다면 배당요구 신청 → Step 3: 배당기일 출석(채권계산서 제출) → Step 4: 배당표 확정 → Step 5: 배당금 수령</p>
<div class="case-box"><h4>공탁금 분배 예시</h4>
<p>은행계좌 100만원이 경합으로 공탁되었습니다. 채권자 B의 채권 60만원, 채권자 C의 채권 80만원인 경우: B의 배당액: 100만원 × (60만원 ÷ 140만원) ≈ 42.86만원, C의 배당액: 100만원 × (80만원 ÷ 140만원) ≈ 57.14만원</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 은행(제3채무자)에서 공탁했다는 통보를 받았는데 어떻게 하나요?</p>
<p class="qna-a">법원으로부터 배당요구 종기 통지를 기다리세요(보통 2주 내 도착). 통지를 받으면 배당요구 신청서를 제출해야 합니다. 집행권원(판결, 확정 조서 등)이 있다면 배당요구를 신청할 수 있습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 공탁금은 언제 받을 수 있나요?</p>
<p class="qna-a">공탁금을 받으려면 배당 절차를 거쳐야 합니다. 보통 공탁 통보부터 배당금 수령까지 4~8주가 소요됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 제3채무자가 공탁을 하면 내 채권은 어떻게 되나요?</p>
<p class="qna-a">당신의 채권은 변하지 않습니다. 다만, 제3채무자의 채무는 소멸합니다. A에 대한 집행이 아니라 공탁금의 배당을 통해 받는 것으로 바뀌게 됩니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>대법원 판례:</strong> "제3채무자가 집행경합 상황에서 공탁한 경우, 공탁으로 제3채무자의 채무는 소멸하고, 공탁금의 분배는 배당 절차에 따른다."</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>공탁 통보 후 배당요구 종기를 꼭 확인하세요:</strong> 공탁 통보를 받으면 법원으로부터 배당요구 종기 통지가 곧 도착합니다(보통 2주). 이 기한은 절대적이므로 꼭 지키세요.</p></div>
<div class="warn-box"><p><strong>집행권원이 없으면 배당요구 불가:</strong> 공탁금을 받으려면 집행력 있는 집행권원(판결, 확정 조서 등)이 필수입니다. 가압류나 단순 합의만으로는 배당요구를 할 수 없습니다.</p></div>
<div class="warn-box"><p><strong>배당기일에 정확한 채권계산서를 제출하세요:</strong> 배당기일에 원금, 이자, 지연손해금 등을 명시한 정확한 채권계산서를 제출해야 배당액이 올바르게 계산됩니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제248조', desc: '집행공탁(의무공탁·임의공탁·사유신고)' },
    ],
    forms: []
  },
  {
    id: 'ef-64',
    title: '배당 절차 — 배당기일·배당표·배당이의 완전 정리',
    meta: '공탁금을 배당받기 위한 배당기일부터 배당표 작성, 배당이의, 배당이의의 소까지 전체 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>배당기일에 어떻게 참석하고 무엇을 해야 하는지 모르는 경우</li>
<li>배당표에 이의가 있는 경우</li>
<li>배당이의의 소 기한을 알고 싶은 경우</li>
<li>배당금을 실제로 어떻게 받는지 알고 싶은 경우</li>
<li>채권계산서를 제출하지 않으면 배당을 못 받는지 확인하고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>배당 절차</strong>는 공탁된 금액을 여러 채권자에게 나누어주는 법원 절차입니다. 핵심 기한: ① 채권계산서는 배당기일 전에 반드시 제출, ② 배당이의는 배당표 공시 후 1주일 내, ③ 배당이의의 소는 배당표 확정 또는 배당이의 결정 후 1주일 내 제기(절대 기한).</p></div>`
      },
      {
        heading: '단계별 절차',
        content: `<div class="case-box"><h4>STEP 1~4: 배당기일 지정까지</h4>
<p>제3채무자 공탁 → 사유신고 → 법원이 배당요구 종기 통지 → 채권자의 배당요구 신청 → 배당기일 지정</p></div>
<div class="case-box"><h4>STEP 5: 채권계산서 제출</h4>
<p>배당기일 전에 채권계산서를 반드시 제출해야 합니다. 원금, 이자, 지연손해금, 소송비용 등을 명시합니다. 미제출 시 배당을 받지 못합니다.</p></div>
<div class="case-box"><h4>STEP 6: 배당기일 출석 및 배당표 확인</h4>
<p>법원이 배당표를 작성하여 각 채권자의 배당액을 결정합니다. 배당기일에 출석하면 이의가 있을 경우 즉시 제기할 수 있습니다.</p></div>
<div class="case-box"><h4>STEP 7: 배당이의 (필요 시)</h4>
<p>배당표 공시 후 1주일 내에 배당이의를 제기할 수 있습니다(민사집행법 제278조). 이의가 해결되지 않으면 배당이의의 소를 1주일 내에 제기해야 합니다(제280조). 이 기한은 절대적입니다.</p></div>
<div class="case-box"><h4>STEP 8: 배당금 수령</h4>
<p>배당표 확정 또는 배당이의의 소 결과 후 통상 계좌이체로 배당금을 수령합니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><p class="qna-q">Q. 채권계산서를 제출하지 않으면 어떻게 되나요?</p>
<p class="qna-a">배당을 받지 못합니다. 채권계산서는 당신이 청구할 수 있는 정확한 채권액을 법원에 입증하는 문서입니다. 배당기일 전에 반드시 제출하세요.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 배당표에 이의가 있으면 어떻게 하나요?</p>
<p class="qna-a">배당표 공시 후 1주일 내에 배당이의를 제기하세요(제278조). 배당이의가 받리되지 않으면 배당이의의 소를 1주일 내에 제기할 수 있습니다(제280조).<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>
<div class="qna-item"><p class="qna-q">Q. 배당이의의 소는 언제까지 제기해야 하나요?</p>
<p class="qna-a">배당표 확정 또는 배당이의 결정 후 1주일 이내(민사집행법 제280조). 이 기한은 절대적이므로 절대 놓쳐서는 안 됩니다. 1주일이 지나면 배당액을 다시 변경할 수 없습니다.<br><small>위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다.</small></p></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>대법원 판례:</strong> "배당이의의 소는 배당표 확정 후 1주일 이내에 제기되어야 하며, 이 기한 도과 후 제기된 배당이의의 소는 부적법하다."</p></div>
<div class="ruling-box"><p><strong>대법원 예규:</strong> 채권계산서는 배당기일 전에 반드시 제출되어야 한다. 배당기일 이후 제출은 받리되지 않는다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>배당이의의 소 1주일 기한을 절대 놓치지 마세요:</strong> 배당표 확정 또는 배당이의 결정 후 1주일 내에 배당이의의 소를 제기해야 합니다. 이 기한을 넘으면 절대 배당액을 변경할 수 없습니다.</p></div>
<div class="warn-box"><p><strong>채권계산서를 정확하게 작성하세요:</strong> 원금뿐만 아니라 이자, 지연손해금, 소송비용 등을 정확히 계산하여 제출해야 합니다. 오류가 있으면 배당액이 부정확할 수 있습니다.</p></div>
<div class="warn-box"><p><strong>배당 순위를 이해하세요:</strong> 배당은 채권의 성질에 따라 순위가 결정됩니다. 우선채권(임금, 조세)이 있으면 일반채권보다 먼저 배당받습니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제252조', desc: '배당기일 지정' },
      { name: '민사집행법 제270조', desc: '배당표 작성' },
      { name: '민사집행법 제278조', desc: '배당이의' },
      { name: '민사집행법 제280조', desc: '배당이의의 소(1주일 절대 기한)' },
    ],
    forms: []
  },
  {
    id: 'ef-65',
    title: '그 밖의 재산권 집행 개관 — 압류 가능한 재산의 종류',
    meta: '금전채권·유체동산·부동산 외의 모든 재산권(회원권, 주식, 지식재산권, 전세권, 신탁수익권 등)에 대한 강제집행 개요를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>금전채권, 유체동산, 부동산이 아닌 다른 재산권을 압류하고 싶으신 분</li>
<li>회원권, 주식, 지식재산권 등 특수한 재산권 집행이 필요하신 분</li>
<li>채무자의 숨겨진 재산을 찾아서 집행하고 싶으신 분</li>
<li>채권추심을 위해 모든 재산권 종류를 알고 싶으신 분</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><div class="label">그 밖의 재산권이란?</div>
<p>금전채권, 유체동산, 부동산 외의 모든 재산권을 말합니다(민사집행법 제251조). 이들은 모두 강제집행의 대상이 될 수 있습니다. 회원권, 주식, 지식재산권, 전세권, 신탁수익권 등이 포함되며, 각각 다른 집행절차를 따릅니다.</p>
<div class="label" style="margin-top: 16px;">공통 집행절차</div>
<ul>
<li>법원에 압류명령 신청</li>
<li>압류 효력 발생 (등기기관, 관리단체 등에 통지)</li>
<li>환가 (추심 또는 매각)</li>
<li>배당</li>
</ul></div>`
      },
      {
        heading: '압류 가능한 재산권 종류',
        content: `<div class="table-wrap"><table>
<thead><tr><th>재산권 종류</th><th>예시</th><th>집행 방법</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>회원권</strong></td><td>골프클럽, 콘도미니엄</td><td>법원 압류명령 → 관리단체 통지 → 경매</td><td>유동성 낮음, 환가 시간 오래 걸림</td></tr>
<tr><td><strong>주식·사채</strong></td><td>상장·미상장주식, 회사채</td><td>압류명령 → 증권사 또는 발행사 통지 → 경매</td><td>가격 변동성 있음, 배당금 추심 가능</td></tr>
<tr><td><strong>지식재산권</strong></td><td>특허권, 저작권, 상표권</td><td>등기기관 통지 → 경매 또는 라이선스료 추심</td><td>평가 어려움</td></tr>
<tr><td><strong>전세권·임차보증금</strong></td><td>전세금, 보증금</td><td>임대인을 제3채무자로 압류 → 회수 또는 환가</td><td>선순위 채권 존재 시 순위 주의</td></tr>
<tr><td><strong>신탁수익권</strong></td><td>신탁재산에서의 수익청구권</td><td>수탁자 압류 → 신탁수익 추심</td><td>수탁자 역할 중요, 신탁내용 확인 필수</td></tr>
<tr><td><strong>어음·수표</strong></td><td>환어음, 약속어음, 수표</td><td>압류 후 추심</td><td>만기 도래 확인, 부도 위험</td></tr>
<tr><td><strong>부동산임차권</strong></td><td>건물·토지 임차권</td><td>임대인 통지 → 임차료 추심 또는 임차권 양도</td><td>임대차계약서 확인 필수</td></tr>
</tbody>
</table></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 그 밖의 재산권의 법적 근거</h3>
<div class="case-box"><div class="case-title">민사집행법 제251조</div>
<p>금전채권, 유체동산, 부동산 외의 재산권에 대해서도 강제집행을 할 수 있으며, 이 경우 제1호부터 제3호까지의 규정을 준용한다고 규정하고 있습니다.</p>
<p>이는 채무자가 가지는 모든 경제적 가치를 가진 권리가 압류 대상이 될 수 있음을 의미합니다.</p></div>
<h3>2. 회원권 (골프클럽, 콘도)</h3>
<div class="case-box"><div class="case-title">회원권의 성질과 압류</div>
<p>회원권은 재산적 가치를 가지는 권리로서 강제집행의 대상이 됩니다. <strong>집행 절차:</strong> 법원에 압류명령 신청 → 골프클럽/콘도 관리단체에 압류 통지 → 명의개서 금지 → 경매 절차 진행</p></div>
<h3>3. 주식 및 사채</h3>
<div class="case-box"><div class="case-title">증권의 압류</div>
<p>상장주식과 미상장주식 모두 압류 가능합니다. 상장주식의 경우 증권사에 통지하여 압류 효력을 발생시키고, 미상장주식의 경우 회사에 통지합니다. 환가는 경매를 통한 매각 또는 배당금 추심의 방법이 있습니다.</p></div>
<h3>4. 지식재산권</h3>
<div class="case-box"><div class="case-title">특허권·저작권·상표권 압류</div>
<p>특허청, 저작권위원회 등 등기기관에 압류를 통지하면 이전등기금지 조치가 효력을 발생합니다. 이후 경매절차를 거쳐 환가하거나, 라이선스료를 추심할 수 있습니다.</p></div>
<h3>5. 전세권 및 임차보증금</h3>
<div class="case-box"><div class="case-title">임차인의 권리 압류</div>
<p>채무자가 임차인으로서 가지는 전세금이나 보증금을 압류할 수 있습니다. 이 경우 임대인을 제3채무자로 하여 압류명령을 신청합니다.</p></div>
<h3>6. 신탁수익권</h3>
<div class="case-box"><div class="case-title">신탁수익권과 신탁재산의 구분</div>
<p>신탁재산 자체는 강제집행 불가능하지만, 신탁수익권(수익자가 받을 수익을 청구할 권리)은 압류 가능합니다(신탁법 제58조, 민사집행법 제251조). 수탁자를 제3채무자로 하여 압류명령을 신청하면, 신탁수익을 정기적으로 추심할 수 있습니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 그 밖의 재산권이 모두 압류 가능한가요?</div>
<div class="qna-a"><p>일반적으로 그 밖의 재산권은 모두 압류 가능합니다. 다만, 대체성이 없는 권리(예: 일신전속권), 공익적 성질의 권리(예: 생활보호비 수급권) 등은 압류 불가능할 수 있습니다. 구체적인 상황에서는 전문가 상담이 필요합니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 이미 압류당한 재산권을 다시 압류할 수 있나요?</div>
<div class="qna-a"><p>네, 이미 다른 채권자에 의해 압류된 재산권도 추가 압류가 가능합니다(민사집행법 제251조). 다만, 환가 대금에서는 선행 압류자가 먼저 배당을 받게 됩니다. 추가 압류를 신청할 때는 기존 압류 현황을 확인하고, 배당 순위를 고려하여 진행해야 합니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 재산권의 위치나 존재를 모르면 어떻게 찾나요?</div>
<div class="qna-a"><p>재산권의 위치나 존재를 파악하기 위해 다음과 같은 방법을 사용할 수 있습니다: (1) 채무자 신문을 신청하여 재산 현황을 파악, (2) 특정 기관(금감원, 특허청, 협회 등)에 조회, (3) 법무사의 사전조사. 이 중 채무자 신문과 기관 조회가 가장 효과적입니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 재산권 압류 후 환가까지 어느 정도 시간이 걸리나요?</div>
<div class="qna-a"><p>환가까지의 시간은 재산권의 종류와 시장 상황에 따라 크게 달라집니다. 유동성 높은 재산(주식, 어음)은 1~3개월, 중간 정도(회원권, 저작권 수익)는 3~6개월, 유동성 낮은 재산(지식재산권)은 6개월 이상 소요될 수 있습니다.</p></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><div class="ruling-header">민사집행법 제251조의 적용</div>
<p>회원권, 주식, 지식재산권 등 그 밖의 재산권은 모두 강제집행의 대상이 될 수 있습니다. 대법원은 이들 재산권이 경제적 가치를 가지는 한 강제집행이 가능하다고 판시하고 있습니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 주의</div>
<p><strong>재산권 파악:</strong> 압류 전 해당 재산권의 정확한 위치와 가치를 파악해야 합니다. 부정확한 정보로 압류 신청 시 기각될 수 있습니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제251조', desc: '그 밖의 재산권에 대한 강제집행' },
    ],
    forms: []
  },
  {
    id: 'ef-66',
    title: '골프·콘도 회원권 압류 — 회원권도 압류할 수 있습니다',
    meta: '골프클럽·콘도미니엄 회원권은 민사집행법 제251조의 그 밖의 재산권으로, 압류명령 신청 후 관리단체 통지와 경매를 통해 환가합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자가 골프클럽 또는 콘도미니엄 회원권을 소유하고 있는 경우</li>
<li>회원권을 압류하여 채권 회수를 원하시는 분</li>
<li>회원권 압류 절차와 환가 방법을 알고 싶으신 분</li>
<li>회원권 환가에 걸리는 시간과 주의사항을 궁금해하시는 분</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><div class="label">회원권 압류의 의의</div>
<p>골프클럽이나 콘도미니엄 회원권은 민사집행법 제251조의 "그 밖의 재산권"에 해당하므로 강제집행의 대상이 됩니다. 회원이 보유한 회원자격과 제반 권리를 압류할 수 있으며, 이후 경매 절차를 거쳐 환가합니다.</div>
<div class="label" style="margin-top: 16px;">회원권 압류 절차</div>
<ul>
<li>법원에 회원권 압류명령 신청</li>
<li>법원 승인 및 압류명령 발령</li>
<li>회원권 관리단체에 압류 통지</li>
<li>명의개서 금지 조치</li>
<li>경매 절차로 환가</li>
<li>배당</li>
</ul></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 회원권의 개념 및 법적 성질</h3>
<div class="case-box"><div class="case-title">회원권이란</div>
<p>회원권은 회원이 회원조직(골프클럽, 콘도 등)에 가지는 지위와 이에 수반하는 제반 권리를 말합니다. 회원권은 재산적 가치를 가지는 권리이므로, 상속·양도·담보 제공·강제집행의 대상이 될 수 있습니다.</p></div>
<h3>2. 회원권이 압류 가능한 이유</h3>
<div class="case-box"><div class="case-title">민사집행법상 근거</div>
<p>회원권은 민사집행법 제251조에서 정하는 "그 밖의 재산권"에 해당합니다. 회원권이 압류 가능한 이유는: (1) 경제적 가치를 가짐, (2) 양도 가능함, (3) 금전으로 환가 가능함, (4) 법률에서 명시적으로 인정함 등입니다.</p></div>
<h3>3. 회원권 압류의 절차</h3>
<div class="case-box"><div class="case-title">압류명령 신청에서 배당까지</div>
<p><strong>Step 1: 압류명령 신청</strong> — 법원에 회원권 압류명령 신청서를 제출합니다. 필요한 서류는 신청서, 집행권원, 회원권 명세서 등입니다.</p>
<p><strong>Step 2: 압류명령 발령</strong> — 법원이 압류 가능성을 검토하여 압류명령을 발령합니다. 통상 신청 후 1~2개월 소요됩니다.</p>
<p><strong>Step 3: 관리단체 통지</strong> — 법원이 골프클럽이나 콘도 관리단체에 압류 통지를 합니다. 관리단체는 회원권의 명의변경을 금지합니다.</p>
<p><strong>Step 4: 경매 절차</strong> — 법원이 회원권 경매 절차를 진행합니다. 경매 준비부터 낙찰까지 통상 3~6개월 소요됩니다.</p>
<p><strong>Step 5: 배당</strong> — 경매 대금에서 각 채권자에게 압류 선착 순서대로 배당합니다.</p></div>
<h3>4. 회원권 환가의 특수성</h3>
<div class="case-box"><div class="case-title">회원권 환가의 어려움</div>
<p>회원권의 가장 큰 문제는 유동성이 낮다는 점입니다. 회원권의 시장이 제한적이므로, 경매에서 입찰자가 충분하지 않을 수 있습니다. 이로 인해 예정가격이 실제 시가보다 훨씬 낮아질 수 있습니다.</p></div>
<h3>5. 회원권 압류 전 확인사항</h3>
<div class="case-box"><div class="case-title">사전 확인의 중요성</div>
<p>회원권 압류 신청 전에 반드시 다음사항을 확인해야 합니다:</p>
<ul>
<li>회원권의 존재와 채무자의 회원 자격 여부</li>
<li>회원권의 시장 가치와 현재 가격</li>
<li>관리단체에서 요구하는 절차 및 양도 제약</li>
<li>회원권에 대한 저당권이나 다른 압류의 존재 여부</li>
<li>회원권의 양도 가능성 (양도 금지 특약 여부)</li>
</ul></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 회원권 압류가 실제로 가능한가요?</div>
<div class="qna-a"><p>네, 회원권은 민사집행법 제251조의 "그 밖의 재산권"에 해당하여 충분히 압류 가능합니다. 대법원도 회원권이 강제집행의 대상이 된다고 판시하고 있습니다. 다만, 회원권의 유동성이 낮아서 실제 환가까지 시간이 걸릴 수 있습니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 회원권 압류에 걸리는 시간은 어느 정도인가요?</div>
<div class="qna-a"><p>회원권 압류부터 배당까지 소요되는 시간은 일반적으로: (1) 압류명령 신청에서 발령까지 1~2개월, (2) 경매 준비부터 낙찰까지 3~6개월, (3) 낙찰 후 배당까지 1~2개월. 따라서 전체 소요 시간은 6개월~1년 정도입니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 회원권에 저당권이 설정되어 있으면 어떻게 되나요?</div>
<div class="qna-a"><p>회원권에 저당권이 설정되어 있는 경우, 경매 대금에서 저당권자가 우선 배당을 받게 됩니다. 채권자는 저당권자가 회수한 후 남은 금액에 대해서만 배당을 받을 수 있습니다. 따라서 압류 전에 회원권에 저당권이 설정되어 있는지 반드시 확인해야 합니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 회원권 양도가 금지되어 있으면 압류가 무의미한가요?</div>
<div class="qna-a"><p>회원권에 양도 금지 특약이 있더라도, 강제집행 절차에서는 경매를 통해 환가할 수 있습니다. 다만, 양도 금지 특약이 있으면 경매 가격이 크게 하락할 수 있습니다. 양도 금지 특약이 있는 회원권은 압류 전에 관리단체에 경매 절차 진행 가능 여부를 반드시 확인해야 합니다.</p></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><div class="ruling-header">회원권의 강제집행 대상성</div>
<p>대법원은 회원권이 민사집행법 제251조의 "그 밖의 재산권"에 해당하여 강제집행의 대상이 된다고 판시하였습니다. 회원권은 경제적 가치를 가지는 재산권이며, 양도 가능하고 금전으로 환가할 수 있다는 점에서 강제집행이 가능합니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 주의</div>
<p><strong>사전 확인:</strong> 회원권 압류 전에 반드시 관리단체에 확인하여, 회원권의 존재, 채무자의 회원 자격, 양도 제약 등을 파악해야 합니다.</p>
<p style="margin-top: 12px;"><strong>가치 평가:</strong> 회원권의 시장 가치를 객관적으로 평가하고, 예상 회수액과 비용을 비교 검토해야 합니다.</p>
<p style="margin-top: 12px;"><strong>저당권 확인:</strong> 회원권에 저당권이 설정되어 있으면, 저당권자의 우선 배당을 고려해야 합니다.</p>
<p style="margin-top: 12px;"><strong>환가 기간:</strong> 회원권은 유동성이 낮아서 경매에서 입찰자가 부족할 수 있고, 불낙이 될 수 있다는 점을 염두에 두어야 합니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제251조', desc: '그 밖의 재산권에 대한 강제집행' },
    ],
    forms: []
  },
  {
    id: 'ef-67',
    title: '주식·사채 압류 — 상대방 주식을 압류하는 방법',
    meta: '상장주식은 한국예탁결제원에, 비상장주식은 회사와 채무자에게 압류명령을 송달하며, 환가는 경매나 추심으로 진행합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>상대방이 상장주식을 보유하고 있어 이를 압류하고 싶으신 경우</li>
<li>비상장회사 주식 압류를 고려 중인 경우</li>
<li>회사가 발행한 사채(회사채)를 압류하려는 경우</li>
<li>주식 압류 후 매각·현금화 방법을 알고 싶은 경우</li>
<li>압류 절차와 기간을 미리 파악하고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p>주식은 '금전채권'이 아니라 '그 밖의 재산권'으로 분류되므로 특별한 압류 절차를 따릅니다. 상장주식과 비상장주식은 각각 다른 압류 방식을 사용합니다.</p>
<p>상장주식은 한국예탁결제원에 계좌 압류를 신청하고, 비상장주식은 해당 회사와 채무자에게 압류명령을 송달합니다. 사채도 동일하게 처리됩니다.</p>
<p>민사집행법 제251조, 자본시장법에 근거하며, 압류 후 매각이나 추심을 통해 현금화됩니다.</p></div>`
      },
      {
        heading: '전체 절차 흐름',
        content: `<div class="summary-box"><p><strong>1단계: 주식 유형 파악</strong> (상장 vs 비상장)</p>
<p><strong>2단계: 압류명령 신청</strong> (법원에 신청)</p>
<p><strong>3단계: 압류명령 송달</strong> (예탁결제원/회사/채무자)</p>
<p><strong>4단계: 압류 효력 발생</strong> (송달로 효력 발생)</p>
<p><strong>5단계: 환가 (현금화)</strong> (매각 또는 추심)</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>STEP 1: 주식 유형 파악 (상장 vs 비상장)</h3>
<p><strong>상장주식:</strong> 유가증권시장, 코스닥, 코스피에 등록된 주식입니다. 한국예탁결제원의 전자계좌에 기록되어 있으며, 일반인도 증권사를 통해 쉽게 거래할 수 있습니다.</p>
<p><strong>비상장주식:</strong> 공개되지 않은 회사의 주식으로, 주주명부에 기재되어 있습니다. 중소기업, 스타트업, 패밀리 회사의 주식이 대부분입니다.</p>
<p><strong>사채 (회사채):</strong> 회사가 발행한 채무증권입니다. 상장사채는 상장주식과 동일하게 예탁결제원에서 관리되며, 미등록사채는 채권자(사채권자)와 발행회사에 압류명령을 송달합니다.</p>
<h3>STEP 2: 압류명령 신청</h3>
<p>민사집행법 제224조 제1항에 따라 채무자의 보통재판적이 있는 지방법원에 신청합니다.</p>
<div class="table-wrap"><table>
<thead><tr><th>주식 유형</th><th>송달 대상</th><th>송달 방법</th></tr></thead>
<tbody>
<tr><td>상장주식</td><td>한국예탁결제원, 채무자</td><td>우편 또는 관계인</td></tr>
<tr><td>비상장주식</td><td>채무자(주주), 회사</td><td>우편 또는 관계인</td></tr>
<tr><td>사채</td><td>발행회사, 채무자(사채권자)</td><td>우편 또는 관계인</td></tr>
</tbody>
</table></div>
<h3>STEP 5: 환가 (현금화)</h3>
<p><strong>상장주식의 경우:</strong> 압류된 상장주식은 거래소에서 경매 절차를 통해 매각됩니다. 경매가 성사되면 대금이 법원에 납입되고, 이를 채권자에게 배당합니다.</p>
<p><strong>비상장주식의 경우:</strong> 비상장주식은 시장 거래가 어려우므로, 일반적으로 추심, 매각, 강제 구주 매입 등의 방법을 사용합니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 상장주식과 비상장주식의 압류 절차가 다른 이유는 무엇인가요?</div>
<div class="qna-a"><p>상장주식은 한국예탁결제원이 중앙 관리하기 때문에 예탁결제원에 압류명령을 송달하면 즉시 효력이 발생합니다. 반면 비상장주식은 주주명부에 기재되므로 회사와 채무자 양쪽에 송달해야 압류가 완성됩니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 압류 중에 주식의 배당금이 나오면 어떻게 되나요?</div>
<div class="qna-a"><p>압류된 주식에서 배당금이 발생하면, 그 배당금도 함께 압류됩니다. 배당금은 환가 재원으로 사용되거나 채권자에게 배당됩니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 압류된 주식의 환가에는 얼마나 오래 걸리나요?</div>
<div class="qna-a"><p>상장주식은 일반적으로 3~6개월, 비상장주식은 6개월~1년 이상 소요될 수 있습니다. 정확한 기간은 사건의 복잡성과 법원의 일정에 따라 달라집니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 비상장주식이 있는데 회사가 주주명부에 기재를 거부하면 어떻게 되나요?</div>
<div class="qna-a"><p>압류된 주식은 주주명부에 새로 기재될 수 없다는 원칙이 확립되었습니다. 회사의 거부는 법적 근거가 없으며, 거부하면 법원에 이의를 제기할 수 있습니다.</p></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><div class="ruling-header">비상장주식의 압류와 주주명부 기재</div>
<p>압류된 비상장주식은 주주명부에 새로 기재될 수 없다는 원칙이 확립되었습니다.</p></div>
<div class="ruling-box"><div class="ruling-header">상장주식의 한국예탁결제원 압류</div>
<p>상장주식은 실물 증권이 아니라 예탁결제원의 전자 계좌에만 기록되므로, 예탁결제원에 대한 압류명령 송달만으로 충분합니다(자본시장법).</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 주의</div>
<p><strong>압류 전 주식 존재 확인 필수:</strong> 압류 신청 전에 채무자가 실제로 해당 주식을 보유하고 있는지 확인해야 합니다. 주식이 이미 양도되었으면 압류가 무용지물이 됩니다.</p>
<p style="margin-top: 12px;"><strong>비상장주식의 낮은 현금화율:</strong> 비상장주식은 시장 거래가 어렵고 가치 평가가 어려워, 실제 현금화 시 기대하는 가치를 받지 못할 수 있습니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제251조', desc: '그 밖의 재산권에 대한 강제집행' },
      { name: '민사집행법 제224조', desc: '집행법원의 관할' },
      { name: '자본시장법', desc: '상장주식의 예탁결제원 관리' },
    ],
    forms: []
  },
  {
    id: 'ef-68',
    title: '전세보증금·임차보증금 압류 — 전세 사는 상대방의 재산도 압류 가능',
    meta: '전세보증금·임차보증금은 금전채권이므로 집주인을 제3채무자로 하여 압류명령을 신청하면 채권 회수가 가능합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>상대방이 전세 또는 월세로 살고 있으며, 전세보증금·월세보증금을 압류하고 싶은 경우</li>
<li>상대방이 임차인이고, 집주인(임대인)에게 보증금 반환채권이 있는 경우</li>
<li>보증금이 아직 반환되지 않은 상황을 파악하고 싶은 경우</li>
<li>임대차 계약이 곧 끝나는데 보증금을 압류할 수 있는지 궁금한 경우</li>
<li>압류 시 임차인의 우선변제권이나 대항력과의 관계를 알고 싶은 경우</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p>전세보증금, 월세보증금, 임차보증금은 모두 '금전채권'입니다. 따라서 '금전채권 압류' 절차를 그대로 적용할 수 있습니다.</p>
<p>상대방이 빌려 사는 주택의 집주인(임대인)에게 보증금 반환채권을 압류 신청하면 됩니다. 집주인이 '제3채무자'가 되는 구조입니다.</p>
<p>민사집행법 제223조에 따른 채권 압류이므로, 상대방이 부동산이나 동산을 많이 가지지 않아도 보증금을 통해 채권 회수가 가능합니다.</p></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>전세보증금도 압류 가능한가</h3>
<p>네, 충분히 가능합니다. 전세보증금, 월세보증금, 임차보증금은 모두 '금전채권'으로 분류되기 때문입니다. 민사집행법 제223조는 금전채권에 대한 압류를 규정합니다. 전세보증금 반환채권은 금전을 목적으로 하는 채권이며, 금액이 명확합니다.</p>
<h3>압류 방법과 제3채무자</h3>
<p>전세보증금 압류는 민사집행법 제223조에 따른 일반 채권 압류와 동일한 절차를 따릅니다.</p>
<ul>
<li><strong>채권자:</strong> 당신 (돈을 빌려준 사람)</li>
<li><strong>채무자:</strong> 상대방 (돈을 빌린 사람 = 임차인)</li>
<li><strong>제3채무자:</strong> 집주인 (임대인)</li>
</ul>
<p>임차 중인 경우 보증금 반환채권은 '장래채권'이 됩니다. 민사집행법 제223조는 "현재의 또는 장래의 금전채권"이라고 명시하고 있으므로 장래채권도 압류할 수 있습니다.</p>
<h3>실제 사례</h3>
<div class="case-box"><h4>전세 사는 채무자의 보증금 압류</h4>
<p><strong>상황:</strong> A는 B에게 1,000만 원을 빌렸고, 약속한 날짜에 돈을 돌려받지 못했습니다. B가 알아본 결과, A는 현금이나 예금은 거의 없고, 서울 강남의 전세집에 살고 있으며 보증금이 5,000만 원이었습니다.</p>
<p><strong>압류 신청:</strong> B는 법원에 다음을 신청했습니다: "채무자 A의 집주인을 상대로, A의 보증금 반환채권 5,000만 원을 압류합니다"</p>
<p><strong>결과:</strong> 압류명령이 인가되고, 집주인(제3채무자)에게 송달되었습니다. 집주인은 A의 전세계약이 만료되면 A에게 보증금을 돌려주는 대신, 그 돈 중 일부를 B에게 먼저 지급해야 합니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 상대방이 월세를 내면서 보증금(deposit)이 있으면 그것도 압류할 수 있나요?</div>
<div class="qna-a"><p>네, 할 수 있습니다. 월세 계약에도 보증금이 있는 경우가 많으며, 이것도 "금전채권"이므로 동일하게 압류됩니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 보증금 압류를 신청했는데 집주인이 "이미 다른 채권자에게 압류당했다"고 할 경우는?</div>
<div class="qna-a"><p>여러 채권자가 같은 보증금을 압류한 경우, 선착순으로 배당됩니다. 당신이 먼저 압류명령을 신청했다면 우선권을 가지며, 나중에 신청한 채권자는 배당 순위에서 뒤로 밀립니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 상대방이 전세를 해지하고 다른 곳으로 이사 가면 어떻게 되나요?</div>
<div class="qna-a"><p>이사를 가도 문제없습니다. 당신의 압류명령은 "그 집의 보증금 반환채권"에 대한 것이지, 상대방의 신체나 거주지에 대한 것이 아니기 때문입니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 압류된 보증금에서 실제로 돈을 받으려면 어떤 절차를 더 거쳐야 하나요?</div>
<div class="qna-a"><p>압류 후 다음 단계는 추심명령 또는 배당 절차입니다. 추심명령은 집주인에게 "이 돈을 직접 당신(채권자)에게 주라"는 명령입니다.</p></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><div class="ruling-header">전세보증금 반환채권은 금전채권</div>
<p>전세보증금 반환채권은 금전을 목적으로 하는 채권이므로 민사집행법 제223조의 금전채권 압류 규정을 그대로 적용할 수 있습니다.</p></div>
<div class="ruling-box"><div class="ruling-header">장래채권의 압류</div>
<p>임차 계약이 아직 진행 중이라 보증금 반환채권이 발생하지 않았더라도 (장래채권), 이미 계약이 체결되어 있으므로 압류할 수 있습니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 주의</div>
<p><strong>집주인의 재무 상태 확인:</strong> 집주인이 다른 빚 때문에 파산할 수 있습니다. 압류 전에 집주인의 신용 평가나 재정 상태를 파악하는 것이 좋습니다.</p>
<p style="margin-top: 12px;"><strong>보증금 반환 기한 주의:</strong> 임차인의 우선변제권은 임차 계약 종료 후 6개월 이내에만 인정됩니다. 따라서 압류도 그 전에 진행해야 우선순위에서 유리합니다.</p>
<p style="margin-top: 12px;"><strong>순환 채권 상황:</strong> 상대방이 집주인에게 임차인으로서 채무가 있을 수 있습니다 (예: 연체료, 손해배상). 이 경우 집주인이 상계권을 행사할 수 있어 보증금이 감소할 수 있습니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제223조', desc: '금전채권 압류' },
    ],
    forms: []
  },
  {
    id: 'ef-69',
    title: '특허권·저작권 등 지식재산권 압류 — 지식재산권 강제집행 절차',
    meta: '특허권·실용신안권·상표권·저작권 등 모든 지식재산권은 등기기관에 압류를 통지하고 경매 또는 라이선스료 추심으로 환가합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자가 특허권, 저작권, 상표권 등의 지식재산권을 소유하고 있는 경우</li>
<li>지식재산권을 압류하여 환가하고 싶으신 분</li>
<li>지식재산권 압류의 구체적 절차를 알고 싶으신 분</li>
<li>지식재산권 압류 신청에 필요한 서류를 확인하고 싶으신 분</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><div class="label">지식재산권 압류의 개요</div>
<p>특허권, 실용신안권, 상표권, 저작권 등 모든 지식재산권은 민사집행법 제251조에 따라 강제집행의 대상이 됩니다. 각 지식재산권은 특정 등기기관에 등록되므로, 등기기관에 압류를 통지하면 이전등기금지 조치가 취해집니다.</div>
<div class="label" style="margin-top: 16px;">지식재산권 압류 절차</div>
<ul>
<li>법원에 압류명령 신청</li>
<li>압류명령 발령</li>
<li>등기기관(특허청, 저작권위원회 등)에 통지</li>
<li>이전등기금지 조치</li>
<li>환가(경매 또는 라이선스료 추심)</li>
<li>배당</li>
</ul></div>`
      },
      {
        heading: '압류 대상 지식재산권',
        content: `<div class="table-wrap"><table>
<thead><tr><th>지식재산권</th><th>등기기관</th><th>등록 여부</th><th>환가 방법</th></tr></thead>
<tbody>
<tr><td><strong>특허권</strong></td><td>특허청</td><td>등록 필수</td><td>경매 또는 라이선스료 추심</td></tr>
<tr><td><strong>실용신안권</strong></td><td>특허청</td><td>등록 필수</td><td>경매 또는 라이선스료 추심</td></tr>
<tr><td><strong>상표권</strong></td><td>특허청</td><td>등록 필수</td><td>경매 또는 라이선스료 추심</td></tr>
<tr><td><strong>저작권</strong></td><td>저작권위원회</td><td>등록 선택</td><td>경매 또는 저작권료 추심</td></tr>
<tr><td><strong>디자인권</strong></td><td>특허청</td><td>등록 필수</td><td>경매 또는 라이선스료 추심</td></tr>
</tbody>
</table></div>`
      },
      {
        heading: '단계별 절차',
        content: `<h3>STEP 1: 압류명령 신청</h3>
<div class="case-box"><div class="case-title">법원 신청</div>
<p>채권자가 채무자의 주소지 관할 법원에 압류명령 신청서를 제출합니다. 신청서에는 지식재산권의 종류, 출원/등록 번호, 명칭, 소유자 정보 등을 상세히 기재해야 합니다.</p>
<p>필수 첨부서류: 집행권원(판결문, 조정조서, 공정증서 등), 채무자 신원 확인 자료, 지식재산권 명세서, 수수료 납부 영수증</p></div>
<h3>STEP 2: 압류명령 발령</h3>
<div class="case-box"><div class="case-title">법원의 심사</div>
<p>법원이 신청서를 검토하여 압류 가능성을 판단합니다. 지식재산권의 등록 상태, 채무자의 소유권, 기한 도래 여부 등을 확인합니다. 통상 신청 후 1~2개월 내에 압류명령이 발령됩니다.</p></div>
<h3>STEP 3: 등기기관 통지</h3>
<div class="case-box"><div class="case-title">압류 효력 발생</div>
<p>법원이 해당 등기기관(특허청, 저작권위원회 등)에 압류를 통지합니다. 등기기관은 압류 통지를 받으면 즉시 압류 사실을 등기하고, 지식재산권의 이전등기를 금지합니다.</p>
<p>특허권, 실용신안권, 상표권, 디자인권은 특허청에 통지하고, 저작권은 저작권위원회에 통지합니다.</p></div>
<h3>STEP 4: 환가 절차</h3>
<div class="case-box"><div class="case-title">경매 또는 추심</div>
<p><strong>경매 절차:</strong> 법원이 지식재산권 경매를 진행합니다. 입찰을 통해 낙찰자를 결정하고, 낙찰 후 소유권 이전등기를 진행합니다. 경매 절차는 통상 3~6개월 소요됩니다.</p>
<p><strong>추심 절차:</strong> 지식재산권에서 발생하는 라이선스료, 저작권료 등을 정기적으로 추심하는 방법도 있습니다. 이 경우 지식재산권 자체를 판매하지 않고, 수익만 회수합니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 주의</div>
<p><strong>가치 평가:</strong> 지식재산권은 그 가치 평가가 어려울 수 있으므로, 감정절차가 필요한 경우가 많습니다.</p>
<p style="margin-top: 12px;"><strong>등록 여부 확인:</strong> 저작권의 경우 등록 선택 사항이므로, 미등록 저작권의 압류는 등기기관 통지 없이 진행해야 합니다.</p>
<p style="margin-top: 12px;"><strong>유효 기간:</strong> 특허권 등은 출원일로부터 일정 기간(특허권 20년)만 유효하므로, 만료 여부를 확인해야 합니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제251조', desc: '그 밖의 재산권에 대한 강제집행' },
      { name: '저작권법 제9조', desc: '저작권의 등록' },
    ],
    forms: []
  },
  {
    id: 'ef-70',
    title: '저당권이 있는 채권의 압류 — 물적담보까지 함께 압류하는 방법',
    meta: '채무자가 보유한 채권에 저당권이 설정된 경우 그 채권을 압류하면서 저당권도 함께 압류하여 임의경매로 우선변제받는 방법을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자가 저당권을 설정하여 다른 채무를 담보로 제공한 채권을 보유하고 있는 경우</li>
<li>저당권이 있는 채권을 압류하여 담보권까지 함께 실행하고 싶으신 분</li>
<li>저당권부 채권의 압류 절차를 알고 싶으신 분</li>
<li>임의경매를 통해 담보권을 실행하고 싶으신 분</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><div class="label">저당권부 채권의 의의</div>
<p>채무자가 가진 채권(예: 금전채권, 부동산에 대한 채권)에 저당권이 설정되어 있는 경우, 그 채권을 압류하면서 동시에 저당권도 함께 압류할 수 있습니다(민사집행법 제228조). 이를 통해 일반 채권 압류보다 강력한 권리를 확보할 수 있습니다.</div>
<div class="label" style="margin-top: 16px;">저당권부 채권 압류의 효과</div>
<ul>
<li>피담보채권 압류 시 저당권도 함께 압류</li>
<li>저당권에 기한 담보권 실행(임의경매) 가능</li>
<li>일반 채권 압류보다 우선변제 가능</li>
<li>이전등기를 통한 권리 확보</li>
</ul></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 저당권부 채권의 개념</h3>
<div class="case-box"><div class="case-title">저당권의 성질</div>
<p>저당권은 채무자의 재산에 설정된 담보권으로, 특정 채권(피담보채권)을 담보합니다. 채무자의 채권에 저당권이 설정된 경우, 그 채권을 압류하면서 동시에 저당권도 함께 압류할 수 있으므로, 채권과 담보권을 동시에 확보할 수 있습니다.</p></div>
<h3>2. 저당권부 채권 압류의 법적 근거</h3>
<div class="case-box"><div class="case-title">민사집행법 제228조</div>
<p>민사집행법 제228조는 "저당권이 설정된 채권"을 강제집행의 대상으로 명시하고 있습니다. 이는 채권자가 피담보채권을 압류할 때, 저당권도 함께 이전받을 수 있음을 의미합니다.</p></div>
<h3>3. 저당권부 채권 압류의 절차</h3>
<div class="case-box"><div class="case-title">압류명령 신청에서 환가까지</div>
<p><strong>Step 1: 저당권 확인</strong> — 채권 압류 전에 그 채권에 저당권이 설정되어 있는지 반드시 확인합니다. 등기부등본이나 관련 자료에서 저당권의 존재, 피담보채권의 내용, 저당권자 등을 파악합니다.</p>
<p><strong>Step 2: 압류명령 신청</strong> — 일반 채권 압류와 동일하게 법원에 압류명령을 신청합니다. 다만 신청서에 저당권의 존재를 명시하고, 저당권에 관한 증거를 첨부합니다.</p>
<p><strong>Step 3: 저당권 이전등기 촉탁</strong> — 압류명령 발령 후 법원에 저당권 이전등기를 촉탁합니다. 이를 통해 저당권의 소유자가 변경되며, 새로운 저당권자(채권자)로서 담보권을 행사할 수 있게 됩니다.</p>
<p><strong>Step 4: 환가</strong> — 압류된 채권을 추심하거나, 저당권을 실행하여 임의경매를 진행합니다. 임의경매를 통해 담보물을 매각하고, 매각 대금에서 우선변제를 받습니다.</p></div>
<h3>4. 임의경매의 의의</h3>
<div class="case-box"><div class="case-title">담보권 실행 방법</div>
<p>저당권을 보유한 자는 채무 불이행 시 임의경매를 신청할 수 있습니다. 저당권이 설정된 채권을 압류하여 저당권을 이전받으면, 그 저당권에 기한 임의경매를 신청할 수 있습니다. 임의경매에서 얻은 매각 대금에서 저당권자는 우선변제를 받을 수 있습니다.</p></div>
<h3>5. 일반 채권 압류와의 차이점</h3>
<div class="case-box"><div class="case-title">저당권부 채권 압류의 장점</div>
<ul>
<li><strong>보안성:</strong> 저당권이 있으면 담보물이 확실하므로, 채권 회수 가능성이 높습니다.</li>
<li><strong>우선변제:</strong> 저당권자는 배당 절차에서 다른 채권자보다 우선 배당을 받습니다.</li>
<li><strong>실행 방법:</strong> 채권 추심 외에도 저당권을 실행하여 임의경매 신청이 가능합니다.</li>
<li><strong>회수 기간:</strong> 임의경매는 강제경매보다 빠르게 진행될 수 있습니다.</li>
</ul></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 저당권이 설정된 채권을 압류하면 어떤 이점이 있나요?</div>
<div class="qna-a"><p>저당권이 설정된 채권을 압류하면 다음과 같은 이점이 있습니다: (1) 일반 채권보다 보안성이 높습니다, (2) 우선변제를 받을 수 있습니다, (3) 임의경매를 신청할 수 있습니다, (4) 회수 기간이 짧을 수 있습니다. 따라서 동일한 채권 금액이라면, 저당권이 설정된 채권이 일반 채권보다 훨씬 가치 있습니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 저당권 이전등기를 하면 어떻게 되나요?</div>
<div class="qna-a"><p>저당권 이전등기를 하면, 저당권의 소유자가 변경됩니다. 이전 저당권자의 권리는 소멸하고, 새로운 저당권자(채권자)가 그 저당권을 행사할 수 있게 됩니다. 이후 채권을 압류한 채권자(새로운 저당권자)는 임의경매를 신청하거나 배당 절차에서 우선변제를 받을 수 있습니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 여러 저당권이 설정되어 있으면 어떻게 되나요?</div>
<div class="qna-a"><p>같은 담보물에 여러 저당권이 설정된 경우, 등기 순위에 따라 배당 순서가 결정됩니다. 선순위 저당권자가 먼저 배당을 받고, 후순위 저당권자는 남은 금액에서만 배당을 받습니다. 저당권 이전 전에 등기부등본을 확인하여 선순위 저당권자의 채권액을 파악하고, 실제 배당 가능액을 계산해야 합니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 임의경매는 강제경매보다 빠른가요?</div>
<div class="qna-a"><p>일반적으로 임의경매는 강제경매보다 상대적으로 빠를 수 있습니다. 강제경매는 채무자가 반대할 수 있는 절차가 많고, 이의 제기 등으로 인해 기간이 연장될 수 있습니다. 반면 임의경매는 저당권자의 신청에 따라 진행되므로, 절차가 비교적 간결합니다.</p></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><div class="ruling-header">민사집행법 제228조</div>
<p>저당권이 설정된 채권도 강제집행의 대상이 될 수 있으며, 채권 압류와 동시에 저당권을 이전받을 수 있습니다. 이를 통해 피담보채권에 대한 권리뿐만 아니라 담보권도 동시에 행사할 수 있습니다.</p></div>
<div class="ruling-box"><div class="ruling-header">저당권부 채권 압류와 우선변제</div>
<p>저당권부 채권을 압류한 경우, 그 저당권의 우선변제 효력은 유지됩니다. 따라서 배당 절차에서 저당권자는 다른 일반 채권자보다 우선적으로 배당을 받을 권리가 있습니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 주의</div>
<p><strong>저당권 확인:</strong> 채권에 저당권이 설정되어 있는지, 피담보채권의 내용이 무엇인지, 저당권자가 누구인지를 사전에 명확히 파악해야 합니다.</p>
<p style="margin-top: 12px;"><strong>순위 확인:</strong> 여러 저당권이 설정된 경우 등기 순위를 확인하고, 선순위 저당권자의 채권액을 파악해야 합니다.</p>
<p style="margin-top: 12px;"><strong>담보물 가치:</strong> 담보물(특히 부동산)의 현재 시장 가치를 객관적으로 평가하고, 예상 회수액을 정확히 계산해야 합니다.</p>
<p style="margin-top: 12px;"><strong>등기료 검토:</strong> 저당권 이전등기에 필요한 등기료와 기타 비용을 고려하여, 순회수액을 판단해야 합니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제228조', desc: '저당권이 있는 채권의 압류' },
    ],
    forms: []
  },
  {
    id: 'ef-71',
    title: '신탁재산권 압류 — 신탁수익권과 신탁종료 후 권리의 집행',
    meta: '신탁재산 자체는 강제집행 불가능하나, 신탁수익권과 신탁종료 후의 귀속권리는 압류할 수 있는 대상입니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자가 신탁회사나 은행에 신탁수익권을 가지고 있다는 것을 알았습니다.</li>
<li>채무자의 자산이 신탁으로 묶여 있어 일반 채권집행이 어렵습니다.</li>
<li>채무자가 부동산담보신탁에서 수익자(우선수익자 또는 일반수익자)로 등록되어 있습니다.</li>
<li>신탁이 종료된 후 채무자가 신탁재산을 돌려받을 권리(귀속권리자의 권리)를 가지고 있습니다.</li>
<li>신탁재산 자체는 집행이 안 된다고 하는데, 수익권에 대한 집행이 가능한지 알고 싶습니다.</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p>신탁재산 자체에 대한 강제집행은 원칙적으로 금지됩니다(신탁법 제22조). 그러나 수익자가 가지는 <strong>신탁수익권</strong>은 재산권이므로 집행 대상이 됩니다.</p>
<p>신탁수익권은 <strong>기본적 수익권</strong>과 <strong>구체화된 수익권</strong>으로 나뉘고, 각각 집행방법이 다릅니다. 수탁자(신탁회사·은행)가 제3채무자가 됩니다.</p>
<p>신탁이 종료된 후에는 귀속권리자가 신탁재산에 대한 권리를 갖는데, 이 권리도 채권집행의 대상이 됩니다(신탁법 제101조).</p>
<p>부동산담보신탁에서 채무자가 받을 <strong>잔여재산반환청구권</strong>이나 <strong>소유권이전등기청구권</strong>도 압류 가능합니다.</p></div>
<div class="table-wrap"><table>
<thead><tr><th>집행 대상</th><th>법적 성격</th><th>제3채무자</th><th>집행방법</th></tr></thead>
<tbody>
<tr><td><strong>기본적 수익권</strong> (수익권 자체)</td><td>그 밖의 재산권(민집 제251조)</td><td>수탁자</td><td>압류 + 특별현금화명령(매각명령·양도명령)</td></tr>
<tr><td><strong>구체화된 수익권</strong> (이미 발생한 급부채권)</td><td>금전채권</td><td>수탁자</td><td>압류 + 추심명령 또는 전부명령</td></tr>
<tr><td><strong>귀속권리자의 권리</strong> (신탁종료 후)</td><td>채권(법정신탁 수익자 지위)</td><td>수탁자</td><td>압류 + 추심명령 또는 전부명령</td></tr>
<tr><td><strong>부동산신탁 잔여재산반환청구권·등기청구권</strong></td><td>채권</td><td>수탁자</td><td>압류 + 추심명령 또는 특별현금화명령</td></tr>
</tbody>
</table></div>`
      },
      {
        heading: '상세설명',
        content: `<h3>3-1. 기본 개념과 법적 근거</h3>
<p>신탁이란 위탁자가 수탁자에게 특정 재산을 이전하거나 담보권을 설정하고, 수탁자로 하여금 수익자의 이익을 위하여 그 재산을 관리·처분하게 하는 법률관계입니다(신탁법 제2조). 신탁재산은 수탁자 명의로 이전되므로 수익자의 채권자가 신탁재산 자체에 강제집행하는 것은 금지됩니다(신탁법 제22조 제1항).</p>
<p>그러나 수익자가 보유하는 <strong>신탁수익권</strong>은 재산권이므로 집행 대상에서 제외되지 않습니다. 신탁법은 수익권의 양도성을 명문으로 인정하고 있고(신탁법 제64조·제65조), 수익자의 채권자는 이 수익권에 대해 채권집행의 방법으로 집행할 수 있습니다.</p>
<h3>3-2. 신탁수익권의 종류와 집행방법</h3>
<p><strong>기본적 수익권(수익권 자체):</strong> 수익권의 여러 내용 전체를 포괄하는 권리로서, 현재 확정된 권리이지만 권면액이 없어 추심명령·전부명령은 원칙적으로 허용되지 않습니다. 민사집행법 제251조의 '그 밖의 재산권'으로서, 특별현금화명령(매각명령·양도명령)에 의해 환가합니다.</p>
<p><strong>구체화된 수익권(이미 발생한 급부청구권):</strong> 기본적 수익권에 기하여 수탁자의 지급의무가 이미 구체적으로 발생한 급부청구권입니다. 이행기가 도래한 것은 일반 금전채권과 동일하게 취급됩니다. 채권압류명령 + 추심명령 또는 전부명령 가능합니다.</p>
<h3>3-3. 신탁종료 후의 권리 — 귀속권리자의 지위</h3>
<p>신탁이 종료하면 신탁재산은 잔여재산수익자 또는 귀속권리자에게 귀속됩니다(신탁법 제101조 제1항). 신탁이 종료하더라도 신탁재산이 귀속권리자에게 이전되기 전까지는 신탁은 존속하는 것으로 간주됩니다. 이때 귀속권리자는 수익자로 간주됩니다(귀속권리자를 위한 법정신탁). 따라서 귀속권리자가 갖는 신탁재산인도청구권·소유권이전등기청구권은 신탁수익채권의 형태로 존재하며, 채권집행의 대상이 됩니다.</p>
<h3>3-4. 압류명령 신청 방법</h3>
<div class="summary-box"><div class="label">신탁수익권 압류명령 신청 시 표시 방법</div>
<ul>
<li><strong>기본적 수익권:</strong> "채무자(수익자)가 제3채무자(수탁자)에 대하여 가지는 신탁계약에 의한 신탁수익권(기본적 수익권) 중 청구채권에 이르는 금액"</li>
<li><strong>구체화된 수익권:</strong> "채무자가 제3채무자에 대하여 가지는 신탁계약에 기한 수익금으로서, 매월 말일 수령할 금액의 채권 중 청구채권에 이르는 금액"</li>
<li><strong>귀속권리자의 권리:</strong> "채무자가 제3채무자(수탁자)에 대하여 가지는 신탁계약 종료로 인한 신탁재산인도청구권(또는 소유권이전등기청구권) 중 청구채권에 이르는 금액"</li>
</ul></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 신탁재산에는 집행이 안 된다고 하는데, 신탁수익권도 집행이 안 되는 건가요?</div>
<div class="qna-a"><p>신탁재산 자체에 대한 강제집행은 원칙적으로 금지됩니다(신탁법 제22조 제1항). 그러나 수익자가 가지는 신탁수익권은 전혀 다른 문제입니다. 신탁수익권은 수익자가 수탁자에 대하여 가지는 채권적 권리이고 재산권이므로, 집행 대상이 됩니다. 신탁법 제22조는 신탁재산 자체에 대한 강제집행을 금지하는 것이지, 수익권에 대한 집행을 금지하는 것이 아닙니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 신탁수익권을 압류할 때 제3채무자는 누구인가요?</div>
<div class="qna-a"><p>신탁수익권에 대한 채권압류명령에서 제3채무자는 수탁자입니다. 신탁수익권은 수익자(채무자)가 수탁자(신탁회사·은행 등)에 대하여 가지는 권리이므로, 수탁자를 제3채무자로 하여 압류명령을 신청해야 합니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 기본적 수익권과 구체화된 수익권 중 어느 것을 압류해야 하나요?</div>
<div class="qna-a"><p>두 가지를 함께 표시하여 압류하는 것이 실무상 안전합니다. 기본적 수익권은 수익권 전체를 포괄하는 것이므로 구체화된 수익권도 이에 포함됩니다. 다만 압류결정 효력 발생 전에 이미 구체화된 수익금은 별도로 표시하여 압류하는 것이 바람직합니다. 집행방법도 기본적 수익권은 특별현금화명령, 구체화된 수익권은 추심명령 또는 전부명령으로 달리 적용됩니다.</p></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><div class="ruling-header">대법원 2012. 7. 12. 선고 2010다1272 판결 — 신탁종료 후 법정신탁 성립</div>
<p>신탁이 종료하더라도 신탁재산이 귀속권리자에게 이전되기 전까지는 수탁자는 귀속권리자를 위한 법정신탁의 수탁자로서 신탁재산을 계속 관리할 권한과 의무를 부담하며, 귀속권리자는 신탁수익권 형태로 잔여재산에 대한 권리를 보유합니다.</p></div>
<div class="ruling-box"><div class="ruling-header">대법원 2017. 6. 22. 선고 2014다225809 전원합의체 판결 — 부동산담보신탁 우선수익권의 법적 성질</div>
<p>부동산담보신탁상 우선수익권은 경제적으로 금전채권에 대한 담보로 기능하지만, 금전채권과는 독립한 신탁계약상의 별개의 권리입니다. 금전채권이 제3자에게 양도 또는 전부되었다고 하더라도 우선수익권이 금전채권에 수반하여 제3자에게 이전되는 것은 아닙니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 압류대상 표시의 정확성이 핵심</div>
<p>신탁수익권 압류 시 가장 중요한 것은 압류대상 채권의 정확한 표시입니다. '기본적 수익권'과 '구체화된 수익권'을 혼동하거나 신탁계약의 내용을 정확히 파악하지 못한 채 추심명령을 신청하면 법원이 이를 허가하지 않을 수 있습니다. 특히 기본적 수익권에 대해서는 추심명령이 허용되지 않으므로, 반드시 특별현금화명령(매각명령 또는 양도명령)을 신청해야 합니다.</p></div>
<div class="warn-box"><div class="warn-title">⚠️ 압류금지 수익권 — 부양료·연금신탁</div>
<p>신탁수익권이 실질적으로 민법 제974조에 따른 부양료에 해당하는 경우, 이는 민사집행법 제246조 제1항 제1호의 압류금지채권이 됩니다. 집행 전에 신탁계약서를 검토하여 수익권의 실질적 성격을 파악하는 것이 필요합니다.</p></div>`
      }
    ],
    laws: [
      { name: '신탁법 제22조', desc: '신탁재산에 대한 강제집행 금지' },
      { name: '신탁법 제64조', desc: '수익권의 양도성' },
      { name: '신탁법 제65조', desc: '수익권의 양도 제한' },
      { name: '신탁법 제101조', desc: '신탁종료 후 귀속권리자의 권리' },
      { name: '민사집행법 제251조', desc: '그 밖의 재산권에 대한 강제집행' },
    ],
    forms: []
  },
  {
    id: 'ef-72',
    title: '유체동산 인도청구권 집행 — 물건을 받을 권리도 집행 대상',
    meta: '채무자가 제3자로부터 유체동산을 인도받을 권리(인도청구권)도 강제집행의 대상이 되며, 압류 후 유체동산 집행절차를 준용합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>채무자가 제3자에게 물건 반환을 청구할 권리를 가지고 있는 경우</li>
<li>채무자가 다른 사람에게 빌려준 물건의 반환을 청구하는 권리를 압류하고 싶으신 분</li>
<li>유체동산 인도청구권의 집행 절차를 알고 싶으신 분</li>
<li>인도 불능 시의 손해배상청구권으로 전환하고 싶으신 분</li>
</ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><div class="label">유체동산 인도청구권의 의의</div>
<p>채무자가 제3자에게 가진 물건 반환청구권(예: 대여했던 물건을 돌려받을 권리)도 민사집행법 제243조에 따라 강제집행의 대상이 됩니다. 이러한 권리를 압류하고 집행관의 인도 촉탁을 통해 실제 물건을 받을 수 있습니다.</div>
<div class="label" style="margin-top: 16px;">유체동산 인도청구권 집행 절차</div>
<ul>
<li>압류명령 신청</li>
<li>압류명령 발령</li>
<li>제3자에게 압류 통지</li>
<li>집행관 인도 촉탁</li>
<li>물건 인도 또는 손해배상청구권 전환</li>
</ul></div>`
      },
      {
        heading: '단계별 절차',
        content: `<h3>STEP 1: 압류명령 신청</h3>
<div class="case-box"><div class="case-title">법원 신청</div>
<p>채권자가 채무자의 주소지 관할 법원에 유체동산 인도청구권에 대한 압류명령 신청서를 제출합니다. 신청서에는 채무자, 제3채무자(보유자), 물건의 설명 등을 상세히 기재해야 합니다.</p>
<p><strong>필수 첨부서류:</strong> 집행권원(판결문, 조정조서 등), 채무자·제3자 신원 확인 자료, 물건에 대한 설명서, 인도청구권 존재를 증명하는 자료</p></div>
<h3>STEP 2: 압류명령 발령</h3>
<div class="case-box"><div class="case-title">법원의 심사</div>
<p>법원이 압류명령 신청을 검토하여 인도청구권의 존재 여부, 채무자와 제3자의 관계 등을 확인합니다. 인도청구권이 명확하면 압류명령을 발령합니다. 통상 신청 후 1~2개월 내에 압류명령이 발령됩니다.</p></div>
<h3>STEP 3: 제3채무자(보유자) 통지</h3>
<div class="case-box"><div class="case-title">압류 효력 발생</div>
<p>법원이 물건을 보유하고 있는 제3자에게 압류를 통지합니다. 제3자는 압류 통지를 받으면, 채무자(원래 소유자)에게 물건을 돌려줄 수 없고, 법원의 지시를 기다려야 합니다.</p></div>
<h3>STEP 4: 집행관 인도 촉탁</h3>
<div class="case-box"><div class="case-title">실제 인도 진행</div>
<p>채권자가 법원의 집행관에게 물건의 인도를 촉탁합니다. 집행관은 제3자를 방문하여 물건의 인도를 요구합니다. 제3자가 자발적으로 물건을 인도하면 절차가 완료되고, 거부하면 집행관이 강제로 물건을 회수합니다.</p></div>
<h3>STEP 5: 물건 인도 또는 손해배상</h3>
<div class="case-box"><div class="case-title">최종 처리</div>
<p><strong>물건 인도 가능:</strong> 집행관이 물건을 인수하여 채권자에게 인도합니다.</p>
<p><strong>물건 인도 불능:</strong> 제3자가 물건을 인도할 수 없다면, 손해배상청구권으로 전환되어 손해배상액을 결정하고 그 금액을 추심합니다.</p></div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">Q. 유체동산 인도청구권 집행은 어떤 경우에 효과적인가요?</div>
<div class="qna-a"><p>채무자가 제3자에게 명확한 물건(예: 자동차, 기계, 그림 등)을 빌려주었거나 위탁한 경우, 물건의 위치와 보유자가 명확한 경우, 물건이 현존하고 온전한 상태인 경우에 효과적입니다. 압류 전에 물건의 현재 상태와 보유자의 협력 가능성을 사전에 확인하는 것이 중요합니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 물건이 이미 제3자에게 넘겨졌다면 어떻게 되나요?</div>
<div class="qna-a"><p>압류 후 물건이 이미 다른 사람에게 넘겨진 상태라면, 인도 청구가 불가능하므로 손해배상청구권으로 전환됩니다. 법원이 물건의 가치를 평가하고, 그 금액을 손해배상액으로 결정합니다. 결정된 손해배상액은 추심명령을 통해 제3자로부터 회수하게 됩니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 제3자가 인도를 거부하면 강제로 회수할 수 있나요?</div>
<div class="qna-a"><p>네, 제3자가 인도를 거부하면 집행관이 강제 집행을 진행할 수 있습니다. 집행관은 필요시 경찰의 지원을 요청하여 물건을 강제로 회수할 수 있습니다(민사집행법 제243조). 다만, 물건이 너무 크거나 고정된 상태라면 강제 회수가 실제로 어려울 수 있습니다.</p></div></div>
<div class="qna-item"><div class="qna-q">Q. 인도청구권 집행에 걸리는 시간은 얼마나 되나요?</div>
<div class="qna-a"><p>유체동산 인도청구권 집행에 소요되는 시간은: (1) 압류명령 신청에서 발령까지 1~2개월, (2) 집행관 인도 촉탁 1~2개월, (3) 물건 인도 또는 손해배상액 결정 1~2개월. 따라서 전체 소요 시간은 3~6개월 정도입니다.</p></div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><div class="ruling-header">민사집행법 제243조</div>
<p>유체동산에 대한 인도청구권도 강제집행의 대상이 되며, 집행관은 물건의 인도를 촉탁받아 강제로 회수할 수 있습니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><div class="warn-title">⚠️ 주의</div>
<p><strong>물건 특정:</strong> 물건을 명확히 특정해야 합니다. 물건의 명칭, 규격, 특징, 식별번호 등을 상세히 기재해야 합니다.</p>
<p style="margin-top: 12px;"><strong>제3자 확인:</strong> 물건을 보유하고 있는 제3자의 신원과 주소를 정확히 파악해야 합니다.</p>
<p style="margin-top: 12px;"><strong>인도청구권 증명:</strong> 채무자가 정말로 물건 반환을 청구할 권리를 가지고 있는지 증명하는 자료(대여 계약서 등)가 필요합니다.</p>
<p style="margin-top: 12px;"><strong>현재 상태 확인:</strong> 압류 신청 전에 물건이 아직 제3자에게 있는지, 온전한 상태인지 확인해야 합니다.</p>
<p style="margin-top: 12px;"><strong>손해배상 전환 대비:</strong> 물건 인도가 불가능할 경우를 대비하여, 물건의 객관적 가치를 평가해놓아야 합니다.</p></div>`
      }
    ],
    laws: [
      { name: '민사집행법 제243조', desc: '유체동산 인도청구권의 집행' },
    ],
    forms: []
  }
,
  {
    id: 'ef-73',
    title: '부동산 명도집행 절차',
    meta: '단계별 신청 방법과 필요 서류',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>명도 판결을 받았고 이제 실제로 집행 신청을 해야 한다</li>
<li>집행 신청에 필요한 서류 목록을 알고 싶다</li>
<li>집행관을 선택해야 하는데 어떤 기준으로 선택해야 할지 모른다</li>
<li>집행 진행 과정과 기일 일정을 미리 알고 싶다</li>
<li>집행 비용이 얼마나 드는지, 어떻게 지불하는지 확인하고 싶다</li>
<li>집행 중 중단이나 보정이 필요한 경우가 있는지 알고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><strong>부동산 명도집행의 신청 절차는 크게 4단계입니다:</strong><br>① 집행신청서 작성 및 제출 → ② 집행관 지정 및 위임 → ③ 집행기일 공고 및 이행 명령 → ④ 집행 실시 및 마무리</div>
<h3>절차의 핵심 특징</h3>
<div class="summary-box"><strong>집행관이 주도합니다</strong><br>판사가 아닌 집행관이 직접 현장에 가서 점유 배제와 인도를 진행합니다. 따라서 집행관과의 협력이 매우 중요합니다.</div>
<div class="summary-box"><strong>비용은 사전에 예납합니다</strong><br>집행관 일당, 교통비 등 예상 비용을 먼저 납부하고, 실제 비용 정산은 집행 후에 합니다.</div>
<div class="summary-box"><strong>기일 공고는 필수입니다</strong><br>집행기일 최소 7일 전에 점유자(채무자)에게 통지해야 합니다. 무통지 집행은 절차 위법입니다.</div>`
      },
      {
        heading: '단계별 집행 절차',
        content: `<h3>STEP 1: 집행신청서 작성 및 제출</h3>
<p>판결을 받은 후, 목적물 소재지의 지방법원·지원에 집행신청서를 제출합니다.</p>
<div class="case-box"><h4>언제 신청하나?</h4><p>판결이 확정된 후 가능합니다. 가집행선고가 있는 경우는 항소 중이어도 신청할 수 있습니다.</p></div>
<div class="case-box"><h4>어디에 신청하나?</h4><p>부동산이 소재한 지역의 지방법원 또는 지원의 민사집행계에 신청합니다. 판결을 한 법원이 아닙니다.</p></div>
<div class="case-box"><h4>신청서 작성 시 포함해야 할 사항</h4><ul style="margin-left: 20px; margin-top: 8px;"><li>채권자 및 채무자의 정보 (성명, 주소, 주민번호 뒤 1자리 필수)</li><li>집행권원 (판결문, 조정조서 등)</li><li>목적물의 정확한 표시 (부동산 주소, 도로명 주소, 지번)</li><li>집행을 원하는 구체적 내용 (명도의 경우 "부동산 명도")</li></ul></div>
<h3>STEP 2: 집행관 지정 및 위임</h3>
<p>법원이 집행관을 지정하면, 채권자는 그 집행관에게 집행을 위임합니다.</p>
<div class="case-box"><h4>집행관 선택</h4><p>복수의 집행관이 있는 경우 법원이 지정합니다. 당사자가 특정 집행관을 요청할 수도 있으나, 법원이 최종 결정합니다.</p></div>
<div class="case-box"><h4>비용 예납</h4><p>집행관과 협의하여 예상 비용(일당, 교통비, 경찰 인계요청료 등)을 산정하고 법원에 납부합니다.</p></div>
<h3>STEP 3: 집행기일 공고 및 이행 명령</h3>
<p>집행관이 점유자(채무자)에게 집행기일을 통지하고 이행 명령을 합니다.</p>
<div class="case-box"><h4>공고 방법</h4><p>집행기일 최소 7일 전에 채무자(점유자)에게 우편, 방문 또는 게시로 통지합니다.</p></div>
<div class="case-box"><h4>이행 명령</h4><p>통지에는 "해당 날짜까지 자발적으로 명도하면 강제집행을 진행하지 않는다"는 취지의 이행 명령이 포함됩니다.</p></div>
<div class="warn-box"><strong>기일은 연기될 수 있습니다</strong><br>점유자가 "이행하겠다"는 의사를 보이면 기일이 연기될 수 있습니다. 다만 실제 이행이 없으면 재기일이 지정됩니다.</div>
<h3>STEP 4: 집행 실시</h3>
<p>지정된 집행기일에 집행관이 현장에서 강제집행을 실행합니다.</p>
<div class="case-box"><h4>현장 진행 절차</h4><ul style="margin-left: 20px; margin-top: 8px;"><li>집행관이 현장 도착 → 채무자·점유자에게 집행 권원 확인</li><li>자발적 이행 최후 촉구</li><li>저항 시 경찰 인계요청</li><li>강제로 점유 배제 후 채권자에게 인도</li></ul></div>
<div class="case-box"><h4>동산 처리 (중요)</h4><p>부동산 안에 점유자의 가구·짐이 있는 경우:</p><ul style="margin-left: 20px; margin-top: 8px;"><li>점유자 또는 동거가족이 있으면 동산도 함께 인도</li><li>그들이 없으면 집행관이 통지 후 상당한 기간(보통 10~20일)을 거쳐 매각 또는 보관</li></ul></div>
<div class="case-box"><h4>집행 완료</h4><p>인도가 완료되면 집행관이 인도 조서를 작성합니다. 이것이 집행 완료의 증거가 됩니다.</p></div>
<h3>필요한 서류 정리</h3>
<p>집행신청 시 준비해야 할 서류입니다.</p>
<table><thead><tr><th>서류</th><th>설명</th><th>필수/선택</th></tr></thead><tbody><tr><td>집행신청서</td><td>법원 양식 또는 변호사/법무사 작성</td><td>필수</td></tr><tr><td>집행권원의 정본</td><td>확정판결문, 조정조서, 화해조서 등</td><td>필수</td></tr><tr><td>확정증</td><td>판결이 확정되었음을 증명하는 문서</td><td>필수</td></tr><tr><td>주민등록등본</td><td>채권자·채무자 각 1부</td><td>필수</td></tr><tr><td>부동산 등기사항증명서</td><td>목적물의 정확한 특정을 위해</td><td>필수</td></tr><tr><td>위임장</td><td>법무사·변호사에 위임하는 경우만</td><td>선택</td></tr><tr><td>채권자 지정계좌 통장사본</td><td>집행 후 비용 정산을 위해</td><td>필수</td></tr></tbody></table>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">판결문의 "정본"이 무엇인가요?</div><div class="qna-a">판결문의 공식적인 사본입니다. 판결을 한 법원에 신청하면 발급받을 수 있습니다. 원본 복사본이 아니라 법원 직인이 찍힌 정본이어야 합니다.</div></div>
<div class="qna-item"><div class="qna-q">집행비용을 미리 얼마나 내야 하나요?</div><div class="qna-a">사건의 복잡도에 따라 다릅니다. 집행관과 상담하면 예상 비용을 제시받을 수 있습니다. 비용 종류는 일당, 교통료, 경찰 인계요청료, 동산 매각 수수료 등이 있습니다. 정확한 금액은 집행 후 정산됩니다.</div></div>
<div class="qna-item"><div class="qna-q">변호사나 법무사를 꼭 선임해야 하나요?</div><div class="qna-a">법적으로 필수는 아닙니다. 개인이 직접 신청할 수 있습니다. 다만 서류 작성, 비용 협의, 기일 조율 등이 복잡할 수 있으므로 전문가의 도움을 받으면 편합니다.</div></div>
<div class="qna-item"><div class="qna-q">집행기일이 잡혔는데 다른 일이 생겼으면 기일을 미룰 수 있나요?</div><div class="qna-a">당사자의 사정으로는 어렵습니다. 다만 점유자가 "곧 명도하겠다"는 의사를 보이거나, 법정 사유(예: 점유자의 중병)가 있으면 기일 연기가 가능합니다. 집행관과 협의해야 합니다.</div></div>
<div class="qna-item"><div class="qna-q">집행 당일 점유자가 집에 없으면 어떻게 되나요?</div><div class="qna-a">집행관이 현장에 없으면 일반적으로 집행을 진행하지 않습니다. 다만 점유자가 의도적으로 피하는 경우, 집행관은 부동산에 진입하여 강제로 열어(예: 자물쇠 제거) 인도를 진행할 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">부동산 안의 세입자(임차인)는 따로 내보내야 하나요?</div><div class="qna-a">판결이 임차인을 상대로 내려진 경우 강제집행으로 내보낼 수 있습니다. 다만 임차인이 제3자인 경우는 추가 절차(인도청구소)가 필요할 수 있습니다. 구체적으로는 법무사·변호사 상담이 필요합니다.</div></div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box"><strong>민사집행법 제5조 — 저항 배제 권한</strong><br>"집행관은 필요한 경우 경찰관의 협력을 받아 채무자의 저항을 배제하고 집행을 진행할 수 있다"고 규정하고 있습니다.</div>
<div class="ruling-box"><strong>민사집행규칙 제190조 — 관할</strong><br>"부동산의 인도집행에 관해서는 목적물 소재지의 지방법원이 관할한다"고 규정합니다.</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><strong>기일 통지가 정확하게 전달되어야 합니다</strong><br>통지가 점유자에게 도달하지 않으면 절차 위법이 될 수 있습니다. 주소가 변경되었다면 반드시 집행관에게 알려야 합니다.</div>
<div class="warn-box"><strong>집행 예납금을 선정산하지 마세요</strong><br>비용은 법원에 납부하거나 집행관에게 직접 위임하세요. 개인적으로 점유자와 합의하는 것은 원금 회수를 어렵게 할 수 있습니다.</div>
<div class="warn-box"><strong>집행 중 폭력행사는 절대 금지</strong><br>판결이 있어도 개인이 직접 강제력을 쓰면 폭력범죄로 처벌받습니다. 반드시 집행관을 통해야 합니다.</div>
<div class="warn-box"><strong>집행 완료 후에도 재점유에 대비하세요</strong><br>강제집행 후 점유자가 다시 들어가는 경우가 있습니다. 이 경우 별도의 재집행 신청이 필요합니다.</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<p>부동산 명도집행과 함께 알아두면 좋은 관련 주제들입니다.</p>
<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>
<a href="#" class="next-link">금외집행_02_동산인도_절차형</a>
<a href="#" class="next-link">금외집행_03_대체집행_절차형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제5조', desc: '저항 배제 권한' },
      { name: '민사집행규칙 제190조', desc: '부동산 인도집행 관할' },
    ],
    forms: []
  }
,
  {
    id: 'ef-74',
    title: '부동산 명도집행',
    meta: '판결 받았는데 안 나가요: 내 상황에서 집행이 가능한가요?',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>법원에서 명도 또는 인도 판결을 받았지만 상대방이 이행하지 않는다</li>
<li>임차인이 계약 종료 후에도 부동산을 비워주지 않는다</li>
<li>매도인이 부동산을 팔았지만 여전히 점유하고 있다</li>
<li>점유자가 내가 아닌 제3자(예: 임대차인, 무단점유자)이다</li>
<li>이미 가처분 결정을 받았지만 강제집행이 가능한지 확인하고 싶다</li>
<li>집행관이 집행을 거부했거나 중단했다는 통보를 받았다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><strong>부동산·선박 인도집행이란?</strong><br>법원 판결로 부동산이나 선박의 인도(명도)를 명령받았을 때, 채무자가 자발적으로 이행하지 않으면 집행관이 강제로 채무자의 점유를 배제하고 채권자에게 인도하는 절차입니다.</div>
<h3>집행 가능 여부를 결정하는 3가지 요소</h3>
<div class="summary-box"><strong>1. 집행권원: 유효한 판결 또는 결정이 있는가?</strong><br>명도·인도 판결, 확정 조정조서, 화해조서, 단행가처분 결정 등이 필요합니다. 단순 약속이나 합의서만으로는 불가능합니다.</div>
<div class="summary-box"><strong>2. 집행채무자: 점유를 배제할 수 있는 대상인가?</strong><br>판결 상의 채무자를 배제해야 합니다. 점유자가 제3자인 경우(예: 임차인) 추가 절차가 필요합니다.</div>
<div class="summary-box"><strong>3. 집행 가능성: 법적 장애가 없는가?</strong><br>점유이전금지 가처분이 이미 집행된 경우나 기타 법적 이유로 집행이 불가능한 경우가 있습니다.</div>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 명도집행 vs 인도집행 — 무엇이 다른가?</h3>
<p>법률상 구분은 없으며, 실무에서는 같은 의미로 사용됩니다. 다만 대상의 차이가 있습니다.</p>
<div class="case-box"><strong>명도(명도집행):</strong> 주로 건물, 주택, 토지 등 부동산에서 사용합니다. 예) "이 아파트를 명도하시오"<br><br><strong>인도(인도집행):</strong> 부동산·선박뿐만 아니라 움직이는 물건이나 추상적 대상을 포함할 수 있습니다. 민사집행법 제258조에서는 "부동산·선박"의 인도로 표현합니다.</div>
<h3>2. 유효한 집행권원이 무엇인가?</h3>
<p>명도·인도 판결을 강제집행하려면 다음 중 하나가 필요합니다.</p>
<div class="ruling-box"><strong>① 확정 판결 (명도·인도 판결)</strong><br>지방법원의 판결이 항소심·대법원을 거쳐 확정된 경우. 이것이 가장 강력한 집행권원입니다.<br><br><strong>② 가집행선고부 판결</strong><br>1심 판결 선고 직후 항소를 예상하여 집행을 미리 진행할 수 있도록 하는 판결입니다.<br><br><strong>③ 화해조서·조정조서</strong><br>법원의 조정 또는 화해가 조서로 작성되고 합의된 경우.<br><br><strong>④ 명도단행가처분 결정</strong><br>긴급성이 높은 경우 본안 판결 전에 가처분으로 명도를 명령하는 경우도 있습니다.</div>
<h3>3. 집행관은 누가 지정되나?</h3>
<p>부동산이 소재한 지역의 지방법원 또는 지원에 소속한 집행관이 지정됩니다(민집규칙 제190조). 판결을 한 법원이 아닌 <strong>목적물 소재지</strong>를 기준으로 합니다.</p>
<div class="warn-box"><strong>주의:</strong> 서울 지법에서 판결을 받았더라도 부동산이 부산에 있으면 부산 지법 산하 집행관이 집행합니다.</div>
<h3>4. 점유자가 제3자인 경우는?</h3>
<p>채무자가 부동산을 제3자에게 임차·사용하게 한 경우, 민사집행법 제259조에 따라:</p>
<ul style="margin-left: 20px; margin-top: 10px;"><li><strong>채무자가 제3자에 대해 인도청구권을 가지는 경우:</strong> 집행법원이 그 청구권을 채권자에게 이부합니다.</li><li><strong>채무자가 인도청구권을 가지지 않는 경우:</strong> 제3자를 상대로는 강제집행이 불가능합니다.</li></ul>
<h3>5. 집행이 불가능한 경우</h3>
<div class="warn-box"><strong>점유이전금지 가처분이 이미 집행된 경우</strong><br>대결 2017. 9. 22. 2015그3 판례: 집행관 보관 점유이전금지가처분이 집행된 후에는 그 부동산의 인도 강제집행을 할 수 없습니다.</div>
<p style="margin-top: 16px;">그 외 집행이 불가능한 경우:</p>
<ul style="margin-left: 20px;"><li>집행권원이 확정되지 않은 경우 (상고 진행 중)</li><li>부동산이 경매 진행 중인 경우</li><li>건물이 실제로 철거·멸실되어 인도 자체가 불가능한 경우</li></ul>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">1심 판결 직후 바로 강제집행을 할 수 있나요?</div><div class="qna-a">아닙니다. 원칙적으로 확정 판결이 필요합니다. 다만 판사가 "가집행선고"를 명령한 경우는 항소 중이어도 집행을 진행할 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">합의금을 받으면 집행을 중단할 수 있나요?</div><div class="qna-a">가능합니다. 집행을 신청한 채권자가 언제든 "집행정지신청"을 할 수 있습니다. 다만 집행관의 비용은 이미 발생했을 수 있으므로 확인이 필요합니다.</div></div>
<div class="qna-item"><div class="qna-q">내가 직접 부동산에 가서 점유자를 내보낼 수 있나요?</div><div class="qna-a">안 됩니다. 판결을 받았더라도 직접 강제력을 행사하면 폭력행사죄, 주거침입죄 등으로 고소당할 수 있습니다. 반드시 집행관을 통해야 합니다.</div></div>
<div class="qna-item"><div class="qna-q">점유자가 집행관에 저항하면 어떻게 되나요?</div><div class="qna-a">집행관은 경찰을 인계요청하여 저항을 배제할 수 있습니다(민사집행법 제5조). 집행관의 인계요청에 응하지 않으면 경찰은 "공무집행방해죄"로 점유자를 조사할 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">부동산 안에 점유자의 가구·짐이 많으면 어떻게 하나요?</div><div class="qna-a">점유자가 동거가족이나 그 대리인이 아닌 경우, 동산(가구·짐)은 집행관의 통지 후 상당한 기간을 거쳐 매각하거나 보관합니다(민집 제258조 5항, 6항). 즉시 버리지는 않으며, 점유자에게 회수 기회를 줍니다.</div></div>
<div class="qna-item"><div class="qna-q">집행관이 "이건 강제집행 대상이 아니다"며 거부하면?</div><div class="qna-a">집행관의 거부 처분에 불복할 수 있습니다. 집행법원에 "집행이의의 소"를 제기하여 법원이 집행관의 거부가 정당한지 판단하도록 할 수 있습니다.</div></div>`
      },
      {
        heading: '관련 판례',
        content: `<div class="ruling-box"><strong>대결 2017. 9. 22. 2015그3</strong><br>[집행관 보관 점유이전금지가처분 집행 후 인도 불가]<br><br>집행관 보관 점유이전금지가처분 집행이 이루어진 경우, 그 부동산의 인도 강제집행은 점유이전금지가처분이 해지될 때까지 진행할 수 없습니다.</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><strong>판결 확정까지의 기간이 길 수 있습니다</strong><br>명도소는 상대방이 항소할 수 있고, 항소심에서 다시 심리합니다. 따라서 1년~2년 이상 소요될 수 있습니다.</div>
<div class="warn-box"><strong>강제집행에도 비용이 듭니다</strong><br>집행관 일당, 교통비, 경찰인계요청료, 동산 매각 수수료 등이 발생합니다.</div>
<div class="warn-box"><strong>집행 중 점유자의 반소·항변에 주의</strong><br>집행 과정에서 점유자가 "내가 더 오래 점유했다"는 주장을 할 수 있습니다. 이는 별개의 소송이 될 수 있습니다.</div>
<div class="warn-box"><strong>집행 후에도 재점유 위험</strong><br>강제집행으로 점유자를 배제한 후에도 그가 몰래 다시 들어가는 경우가 있습니다.</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<p>부동산 명도집행과 함께 알아두면 좋은 관련 주제들입니다.</p>
<a href="#" class="next-link">금외집행_02_동산인도_판단형</a>
<a href="#" class="next-link">금외집행_03_대체집행_판단형</a>
<a href="#" class="next-link">금외집행_04_간접강제_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제258조', desc: '부동산·선박의 인도집행' },
      { name: '민사집행법 제259조', desc: '제3자가 점유하는 경우 이부명령' },
      { name: '민사집행법 제5조', desc: '저항 배제' },
      { name: '민사집행규칙 제190조', desc: '관할' },
    ],
    forms: []
  }
,
  {
    id: 'ef-75',
    title: '부동산 명도집행 완전 가이드',
    meta: '상황 판단부터 집행 완료까지 한 눈에 보기',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>판결이 있는데 어떻게 해야 할지 전혀 모른다</li>
<li>내 상황이 명도집행 대상인지 판단이 서지 않는다</li>
<li>집행 절차 전체 흐름을 한눈에 보고 싶다</li>
<li>집행 중 문제가 생겼을 때 대처 방법을 알고 싶다</li>
<li>집행 비용과 서류를 한 번에 정리하고 싶다</li>
<li>점유이전금지가처분과 명도집행의 관계를 이해하고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><strong>부동산 명도집행 완전 가이드</strong><br>판단(가능 여부) → 절차(신청 및 집행) → 문제해결(예외상황 대처)의 3단계로 구성됩니다.</div>`
      },
      {
        heading: 'PART A: 판단 — 집행이 가능한가?',
        content: `<h3>집행 가능 여부 체크리스트</h3>
<ul class="checklist">
<li>유효한 집행권원(판결, 조정, 화해조서 등)이 있는가?</li>
<li>집행 대상이 부동산·선박인가?</li>
<li>점유자가 채무자 또는 이부명령 대상인가?</li>
<li>법적 장애(점유이전금지 가처분 등)가 없는가?</li>
</ul>
<h3>집행권원 종류</h3>
<div class="case-box"><strong>확정 판결:</strong> 가장 강력한 집행권원. 항소심·대법원 확정 후 사용.<br><br><strong>가집행선고부 판결:</strong> 1심 직후, 항소 중에도 집행 가능.<br><br><strong>화해조서·조정조서:</strong> 법원 조정이나 화해가 서면으로 작성된 경우.<br><br><strong>단행가처분 결정:</strong> 긴급 상황에서 본안 판결 전에 명도를 명령하는 가처분.</div>
<h3>점유자가 제3자인 경우</h3>
<p>민사집행법 제259조에 따른 이부명령 절차가 필요합니다. 법원이 채무자의 인도청구권을 채권자에게 이전하고, 제3자가 수락하면 인도받을 수 있습니다.</p>
<h3>집행이 불가능한 경우</h3>
<div class="warn-box">점유이전금지 가처분이 집행된 경우 (대결 2017. 9. 22. 2015그3), 판결이 미확정인 경우, 부동산이 경매 중인 경우에는 집행이 불가능합니다.</div>`
      },
      {
        heading: 'PART B: 절차 — 어떻게 신청하나?',
        content: `<h3>1단계: 집행신청서 제출</h3>
<p><strong>신청처:</strong> 부동산 소재지 지방법원 또는 지원 (민사집행계)</p>
<p><strong>주요 서류:</strong> 집행신청서, 집행권원 정본, 확정증, 주민등록등본, 부동산 등기사항증명서, 채권자 계좌 통장사본</p>
<h3>2단계: 집행관 지정 및 비용 예납</h3>
<p>법원이 집행관을 지정합니다. 채권자는 집행관과 협의하여 예상 비용(일당, 교통비 등)을 예납합니다.</p>
<h3>3단계: 집행기일 공고</h3>
<p>집행관이 점유자에게 집행기일을 7일 전까지 통지합니다. 이행 명령도 함께 포함됩니다.</p>
<h3>4단계: 집행 실시</h3>
<div class="case-box"><strong>현장 진행:</strong> 집행관 도착 → 집행권원 제시 → 자발적 이행 촉구 → 저항 시 경찰 인계요청 → 점유 배제 → 채권자에게 인도 → 인도 조서 작성</div>`
      },
      {
        heading: 'PART C: 문제해결',
        content: `<h3>문제 1: 점유자가 집행 당일 없는 경우</h3>
<p>집행관은 강제 진입(자물쇠 제거 등)을 통해 집행을 진행할 수 있습니다.</p>
<h3>문제 2: 동산(가구·짐)이 많은 경우</h3>
<p>점유자 또는 동거가족이 없으면 집행관이 통지 후 10~20일 내에 매각·보관합니다.</p>
<h3>문제 3: 집행관이 거부한 경우</h3>
<p>집행법원에 "집행이의의 소"를 제기합니다.</p>
<h3>문제 4: 집행 후 재점유</h3>
<p>재집행 신청을 합니다. 반복 재점유는 형사 고소(주거침입죄)도 가능합니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">명도집행과 인도집행의 차이는?</div><div class="qna-a">실무상 구분 없이 사용됩니다. 법적으로는 민사집행법 제258조 "부동산·선박의 인도집행"으로 통일되어 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">가집행선고부 판결로 집행이 가능한가요?</div><div class="qna-a">네, 가능합니다. 가집행선고가 있으면 항소 중에도 집행 신청을 할 수 있습니다. 다만 항소심에서 패소하면 집행 결과를 원상회복해야 합니다.</div></div>
<div class="qna-item"><div class="qna-q">집행 비용은 나중에 돌려받을 수 있나요?</div><div class="qna-a">네. 집행 비용은 원칙적으로 채무자가 부담합니다. 채무자에게 집행 비용 청구 소송을 별도로 제기하거나, 집행 절차 내에서 회수할 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">점유이전금지가처분을 받아두면 집행에 유리한가요?</div><div class="qna-a">네. 소송 중에 미리 점유이전금지가처분을 받아두면, 나중에 본안 판결이 나왔을 때 가처분 집행 기록을 활용하여 새로운 점유자에게도 집행이 가능합니다.</div></div>
<div class="qna-item"><div class="qna-q">제3자가 부동산을 점유하고 있다면?</div><div class="qna-a">이부명령 신청을 통해 채무자의 인도청구권을 이전받은 후 제3자에게 인도를 청구합니다. 제3자가 거부하면 추심의 소를 제기합니다.</div></div>`
      },
      {
        heading: '관련 판례 및 법령',
        content: `<div class="ruling-box"><strong>대결 2017. 9. 22. 2015그3</strong><br>점유이전금지가처분이 집행된 경우 인도집행 불가</div>
<div class="ruling-box"><strong>민사집행법 제258조</strong><br>부동산·선박의 인도집행 근거 규정</div>
<div class="ruling-box"><strong>민사집행법 제259조</strong><br>제3자 점유 시 이부명령 규정</div>
<div class="ruling-box"><strong>민사집행법 제5조</strong><br>집행관의 경찰 원조 요청 권한</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><strong>집행 전 법적 장애를 반드시 확인하세요</strong><br>점유이전금지가처분 여부, 경매 진행 여부, 판결 확정 여부를 먼저 점검하세요.</div>
<div class="warn-box"><strong>직접 강제력을 절대 행사하지 마세요</strong><br>판결이 있어도 개인이 직접 강제력을 행사하면 형사처벌을 받습니다.</div>
<div class="warn-box"><strong>비용 예납을 미리 준비하세요</strong><br>집행 신청 전에 집행관과 상담하여 예상 비용을 파악하고 준비하세요.</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>
<a href="#" class="next-link">금외집행_01_부동산인도_절차형</a>
<a href="#" class="next-link">금외집행_02_동산인도_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제258조', desc: '부동산·선박의 인도집행' },
      { name: '민사집행법 제259조', desc: '제3자 점유 시 이부명령' },
      { name: '민사집행법 제5조', desc: '저항 배제' },
    ],
    forms: []
  }
,
  {
    id: 'ef-76',
    title: '동산 인도집행 절차',
    meta: '신청서 제출부터 물건 받기까지',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>판결이나 합의조서를 받았고, 이제 실제로 물건을 돌려받고 싶음</li>
<li>어디에 언제 어떻게 신청해야 하는지 알고 싶음</li>
<li>필요한 서류가 뭔지 궁금함</li>
<li>제3자가 물건을 가지고 있어서 절차가 더 복잡함</li>
<li>집행 과정에서 뭔가 준비할 게 있는지 알고 싶음</li>
<li>사전에 물건을 찾거나 보호할 방법이 있는지 알고 싶음</li>
</ul>
<div class="summary-box"><strong>한 문장 요약:</strong> 판결이 나면 지방법원 집행관에게 신청서를 내고, 필요한 서류를 첨부하면 됩니다. 제3자가 점유하면 이부명령을 먼저 신청합니다.</div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>두 가지 절차 경로:</strong></p><p style="margin-top: 8px;"><strong>경로 1 — 채무자가 직접 점유</strong><br>지방법원 집행관 → 집행관이 직접 실행<br><br><strong>경로 2 — 제3자가 점유</strong><br>지방법원 (판사) → 이부명령 신청 → 제3자가 거부 시 추심의 소 제기</p></div>
<h3>절차 1: 채무자가 직접 물건을 가지고 있는 경우</h3>
<div class="case-box"><p><strong>단계 1:</strong> 판결 또는 합의조서 준비 (집행권원)<br><strong>단계 2:</strong> 집행 신청서 작성 및 제출 (지방법원 집행관)<br><strong>단계 3:</strong> 채무자 조사 및 물건 위치 파악<br><strong>단계 4:</strong> 집행기일 결정 및 통지<br><strong>단계 5:</strong> 집행관이 현장에서 물건을 수취<br><strong>단계 6:</strong> 채권자에게 물건 인도 (또는 집행관 보관)</p></div>
<h3>절차 2: 제3자가 물건을 가지고 있는 경우</h3>
<div class="case-box"><p><strong>단계 1:</strong> 판결 준비<br><strong>단계 2:</strong> 이부명령 신청 (집행법원 판사에게)<br><strong>단계 3:</strong> 법원이 이부명령 발령<br><strong>단계 4:</strong> 제3자에게 이부명령 통지<br><strong>단계 5:</strong> 제3자가 수락 또는 거부<br><strong>단계 5-1:</strong> 수락하면 → 채권자가 직접 인도 청구<br><strong>단계 5-2:</strong> 거부하면 → 추심의 소 제기 (새로운 소송)</p></div>`
      },
      {
        heading: '상세 절차',
        content: `<h3>1단계: 집행권원 확인</h3>
<p>먼저 아래 중 하나가 있는지 확인하세요:</p>
<ul class="checklist"><li><strong>법원 판결:</strong> 판결문 원본 또는 확정증명원</li><li><strong>합의조서:</strong> 법원이 승인한 합의조서</li><li><strong>공정증서:</strong> 공증사무소에서 공정증서로 작성한 동산 인도 약속</li><li><strong>중재판정:</strong> 중재판정부의 판정서</li></ul>
<div class="warn-box"><p><strong>중요:</strong> 단순 약속서, 메모, 메시지 등으로는 집행을 할 수 없습니다. 반드시 위의 공식 문서 중 하나가 필요합니다.</p></div>
<h3>2단계: 집행 신청</h3>
<p><strong>신청처:</strong> 동산이 있는 지역의 지방법원 또는 지원 (집행관 담당)<br><strong>신청방법:</strong> 집행 신청서 제출 (온라인 또는 직접 방문)<br><strong>필요한 서류:</strong> 아래 표 참조</p>
<table><thead><tr><th>서류명</th><th>개수</th><th>비고</th></tr></thead><tbody><tr><td>집행 신청서</td><td>1부</td><td>지방법원 양식 사용</td></tr><tr><td>판결문 또는 합의조서</td><td>1부</td><td>원본 또는 확정증명원</td></tr><tr><td>채권자 신분증 사본</td><td>1부</td><td>주민등록증 또는 여권</td></tr><tr><td>채무자 주소 확인 자료</td><td>1부</td><td>최신 주민등록등본 또는 등기부등본</td></tr><tr><td>물건 설명 자료</td><td>1부</td><td>사진, 모델명, 특징 등</td></tr><tr><td>위임장 (대리인 신청 시)</td><td>1부</td><td>법무사 위임 시 필수</td></tr></tbody></table>
<h3>3단계: 채무자 조사 및 물건 위치 파악</h3>
<p>집행관이 채무자의 주소, 근무처, 재산 상황 등을 조사합니다.</p>
<div class="summary-box"><p><strong>팁:</strong> 물건이 채무자 직장에 있거나, 친구네 집에 있다는 정보가 있으면 집행관에게 미리 알려주세요. 집행관이 그곳을 먼저 확인할 수 있습니다.</p></div>
<h3>4단계: 집행기일 통지</h3>
<p>집행관이 채무자와 채권자에게 집행 실행 날짜와 시간을 통지합니다. 보통 신청 후 1~2개월 내에 실행됩니다.</p>
<h3>5단계: 집행 실행</h3>
<p>집행기일에 집행관이 채무자 주소지로 가서 물건을 수취합니다. 채무자가 불응하거나 물건을 숨겼으면 집행관이 경찰력을 요청할 수 있습니다.</p>
<h3>6단계: 물건 수령</h3>
<p>집행관이 수취한 물건을 채권자에게 인도합니다. 보관료나 운송료가 발생하면 채권자가 부담합니다.</p>
<h3>제3자 점유 시 추가 절차: 이부명령</h3>
<p><strong>신청처:</strong> 집행법원<br><strong>신청인:</strong> 채권자가 판사에게 직접 신청</p>
<p>이부명령이 발령되면 법원이 제3자에게 "물건을 채권자에게 넘겨주라"는 명령을 보냅니다. 제3자가 따르지 않으면 채권자는 제3자를 상대로 "추심의 소"라는 소송을 제기할 수 있습니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">신청서는 어디서 받나요?</div><div class="qna-a">지방법원 홈페이지에서 다운로드할 수 있습니다. 또는 지방법원 집행관실에 방문하여 받을 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">온라인으로도 신청할 수 있나요?</div><div class="qna-a">네, 법원 민원포털(elis.scourt.go.kr)을 통해 온라인 신청이 가능합니다. 다만 서류는 우편으로 별도 제출해야 할 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">신청 후 언제쯤 집행이 되나요?</div><div class="qna-a">보통 신청 후 1~2개월 내에 집행기일이 정해집니다. 다만 물건의 위치를 찾기 어렵거나 채무자가 도망가면 더 오래 걸릴 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">집행 신청 수수료는 얼마인가요?</div><div class="qna-a">물건의 평가가액에 따라 다릅니다. 일반적으로 평가가액의 1~2% 정도입니다. 구체적 금액은 집행관에게 신청할 때 안내받습니다.</div></div>
<div class="qna-item"><div class="qna-q">제3자가 물건을 가지고 있으면 더 비싼가요?</div><div class="qna-a">네, 이부명령을 신청해야 하므로 추가 비용이 발생합니다. 이부명령 신청 수수료와 이후 추심의 소 소송비가 들 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">집행 과정에서 제 동의가 필요한가요?</div><div class="qna-a">기본적으로 집행관이 알아서 진행하므로 별도 동의가 필요 없습니다. 다만 물건 수령 방법(직접 받을지, 운송업체를 통할지) 등은 미리 상담하는 것이 좋습니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>법리:</strong> 동산 인도집행의 집행관은 집행권원(판결)에 명시된 물건만 수취할 수 있습니다. 판결에 없는 물건을 집행관이 수취하면 그것은 무효입니다. 따라서 집행권원의 기술이 정확하고 명확해야 집행이 원활하게 진행됩니다.</p></div>
<div class="ruling-box"><p><strong>법리:</strong> 이부명령은 제3자에게 물건을 넘겨주도록 명령하는 것이지만, 제3자가 거부하면 강제할 수 없습니다. 대신 채권자가 제3자를 상대로 새로운 소송(추심의 소)을 제기할 수 있습니다.</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>신청서를 정확하게 작성하세요</strong><br>물건의 설명이 부정확하거나 불완전하면 집행관이 물건을 찾을 수 없을 수 있습니다. 구체적으로 기술해야 합니다.</p></div>
<div class="warn-box"><p><strong>판결 확정을 꼭 확인하세요</strong><br>1심 판결의 경우, 항소 기간(2주)이 지났는지 확인해야 합니다. 확정증명원으로 확인할 수 있습니다.</p></div>
<div class="warn-box"><p><strong>판결 후 10년 이내에 신청하세요</strong><br>민사소송법 제206조에 따라 판결 확정 후 10년이 지나면 집행을 할 수 없습니다.</p></div>
<div class="warn-box"><p><strong>물건이 없거나 훼손되었을 때</strong><br>집행 과정에서 물건이 이미 없거나 망가진 상태면 "집행 불능" 결정이 납니다. 이 경우 손해배상 청구로 전환해야 합니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<p>동산 인도 절차에 대해 더 알고 싶으시거나, 다른 집행 방법이 필요한 경우 아래를 확인하세요.</p>
<a href="#" class="next-link">금외집행_02_동산인도_판단형</a>
<a href="#" class="next-link">금외집행_03_대체집행_절차형</a>
<a href="#" class="next-link">금외집행_01_부동산인도_절차형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제257조', desc: '유체동산 인도집행' },
      { name: '민사집행법 제259조', desc: '제3자 점유 시 이부명령' },
    ],
    forms: []
  }
,
  {
    id: 'ef-77',
    title: '물건을 돌려받으라는 판결',
    meta: '강제집행이 가능한가요?',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>법원에서 "물건을 반환하라"는 판결을 받았는데 상대방이 따르지 않음</li>
<li>빌려준 물건이나 임차물품을 돌려달라고 했는데 거부당함</li>
<li>구매한 물건인데 판매자가 넘겨주지 않음</li>
<li>제3자가 나의 물건을 갖고 있어서 돌려받고 싶음</li>
<li>판결 외에 중재 합의, 화해조서 등으로 물건 인도가 정해짐</li>
</ul>
<div class="summary-box"><strong>한 문장 요약:</strong> 특정된 물건의 인도를 명한 판결이나 합의가 있으면, 집행관을 통해 강제로 물건을 받을 수 있습니다.</div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>동산 인도집행</strong>은 법원의 판결이나 합의조서에서 "물건을 인도하라"고 명령한 것을 강제로 실행하는 절차입니다. 민사집행법 제257조가 규정합니다.</p><p style="margin-top: 12px;"><strong>핵심 조건:</strong> 물건이 특정되어야 합니다. "돈으로 대체 가능한 물건"은 안 되고, "바로 그 물건"이어야 합니다.</p></div>
<h3>동산 인도집행의 기본</h3>
<p><strong>집행권원(집행을 하는 근거):</strong><br>• 법원의 동산 인도 판결<br>• 중재판정부의 동산 인도 판정<br>• 법원 승인 합의조서<br>• 화해조서 중 동산 인도 내용<br><br><strong>집행기관:</strong><br>동산이 있는 지역을 관할하는 지방법원 또는 지원의 집행관이 실행합니다.</p>
<h3>특정 동산 vs 불특정물의 구분</h3>
<div class="warn-box"><p><strong>매우 중요:</strong> 동산 인도집행이 가능하려면 물건이 "특정"되어야 합니다.</p></div>
<p><strong>특정 동산 (가능)</strong><br>• "2024년산 LG 냉장고 (모델명 RS29R6000QE), 흰색" (구체적 특징 명시)<br>• 예술작품, 골동품, 명품백 등 개별적 특성이 있는 물건<br><br><strong>불특정물 (불가능)</strong><br>• "쌀 100kg" → 어느 쌀이든 상관없음 (대체물)<br>• "의류 10장" (종류 미정)</p>
<p style="margin-top: 12px;">불특정물인 경우는 <strong>대체집행</strong>이라는 다른 절차를 사용하거나, 금전 손해배상 집행으로 진행해야 합니다.</p>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 채무자가 직접 물건을 점유하는 경우</h3>
<p>채무자가 물건을 자신이 갖고 있는 경우입니다. 집행관이 직접 채무자를 찾아가 물건을 받아서 채권자에게 건네줍니다 (민사집행법 제257조).</p>
<div class="case-box"><p><strong>예시:</strong> 친구에게 500만원을 빌려줄 때 노트북을 담보로 받았는데, 돈을 못 갚아도 노트북을 돌려주지 않음. 법원이 "노트북을 반환하라"는 판결을 내림. → 집행관이 친구 집으로 가서 노트북을 받아 당신에게 건내줍니다.</p></div>
<h3>2. 제3자가 물건을 점유하는 경우</h3>
<p>물건을 갖고 있는 사람이 채무자가 아닌 경우입니다. 이 경우 <strong>이부명령(移付命令)</strong>이라는 특별한 절차를 사용합니다 (민사집행법 제259조). 제3자가 따르지 않으면 추심의 소라는 별도 소송을 통해 강제합니다.</p>
<div class="case-box"><p><strong>예시:</strong> A가 B로부터 판매받은 고급 시계를 아직 받지 못했음. 알아보니 B의 형 C가 시계를 가지고 있음. A가 B를 상대로 소송하여 시계 인도 판결을 받음.</p></div>
<div class="summary-box"><p><strong>기간 제한:</strong> 이부명령을 신청할 때는 원래 집행권원(판결)을 받은 지 10년 이내여야 합니다 (민사소송법 제206조).</p></div>
<h3>3. 집행이 불가능한 경우</h3>
<div class="warn-box"><p><strong>물건이 이미 없어진 경우</strong><br>채무자가 물건을 없애거나 팔아버린 경우, 집행 불능이 됩니다. 이 경우 손해배상 청구로 전환해야 합니다.<br><br><strong>물건이 명확히 특정되지 않은 경우</strong><br>판결 내용이 너무 추상적이면 집행 불능입니다.<br><br><strong>불특정물(대체물)인 경우</strong><br>쌀, 기름, 현금 등은 직접 인도집행이 아니라 대체집행 절차를 써야 합니다.</p></div>
<h3>4. 집행권원으로 인정되는 것</h3>
<p><strong>인정되는 것:</strong><br>• 법원의 제1심 판결 (항소심 판결도 물론 가능)<br>• 중재판정부의 판정<br>• 법원이 승인한 합의조서<br>• 공정증서<br><br><strong>인정되지 않는 것:</strong><br>• 단순 합의서 (법원 승인 없음)<br>• 상대방이 약속했다는 증거만으로는 안 됨</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">내 물건이 맞다는 것을 어떻게 증명하나요?</div><div class="qna-a">판결에 물건이 명확히 기술되어 있어야 합니다. 집행 신청 시 판결문과 함께 물건 사진, 영수증, 구매 기록 등을 제출하면 도움됩니다.</div></div>
<div class="qna-item"><div class="qna-q">판결 후 집행하기까지 얼마나 걸리나요?</div><div class="qna-a">일반적으로 집행 신청 후 1~2개월 내에 집행관이 실행합니다. 물건의 위치를 파악하기 어려우면 더 걸릴 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">제3자가 물건을 주지 않으면 어떻게 되나요?</div><div class="qna-a">이부명령을 받은 후에도 제3자가 거부하면 "추심의 소"를 제기할 수 있습니다. 이것은 채권자가 제3자를 상대로 하는 새로운 소송인데, 승소하면 그 판결로 집행을 진행합니다.</div></div>
<div class="qna-item"><div class="qna-q">물건을 찾지 못하면 (집행 불능) 어떻게 되나요?</div><div class="qna-a">집행 불능 결정이 나면, 채권자는 채무자를 상대로 손해배상 청구를 할 수 있습니다. 물건의 시가를 현금으로 받는 방식입니다.</div></div>
<div class="qna-item"><div class="qna-q">판결이 있었는데 상대방이 계속 무시하면?</div><div class="qna-a">집행관이 실행하는 시점에 물건을 발견하지 못하면 집행이 불능이 될 수 있습니다. 판결 직후 빨리 집행 신청하고, 사전에 물건의 위치를 파악하는 것이 중요합니다.</div></div>
<div class="qna-item"><div class="qna-q">내가 이미 구매한 물건인데 판매자가 주지 않아요. 이것도 가능한가요?</div><div class="qna-a">가능합니다. 먼저 법원에 물건 인도 소송을 제기해야 하고, 판결을 받은 후 집행 신청을 하면 됩니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>법리:</strong> 민사집행법 제257조의 동산 인도집행은 "특정 동산"의 인도를 명한 집행권원이 있어야만 진행됩니다. 불특정물(대체물)에는 직접 인도집행이 적용되지 않으며, 대신 대체집행이나 금전 손해배상으로 진행되어야 합니다.</p></div>
<div class="ruling-box"><p><strong>법리:</strong> 제3자가 점유하는 동산에 대해 이부명령을 신청할 수 없는 경우가 있습니다. 특히 금전채권자들 사이에서 선착처분 우선주의가 적용되어, 먼저 압류한 채권자가 우선순위를 갖습니다 (대결 2017. 9. 22. 2015그3).</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>집행이 불능이 될 수 있습니다</strong><br>집행 신청 시점에 물건이 이미 없거나 판매되었으면 집행관도 물건을 찾을 수 없습니다. 판결이 나오면 가능한 빨리 집행 신청을 해야 합니다.</p></div>
<div class="warn-box"><p><strong>제3자 점유 시 절차가 복잡합니다</strong><br>채무자가 아닌 제3자가 물건을 갖고 있으면, 이부명령 → 제3자 거부 → 추심의 소 등 여러 단계를 거쳐야 합니다.</p></div>
<div class="warn-box"><p><strong>집행권원이 확실해야 합니다</strong><br>판결, 합의조서, 공정증서 등 명확한 집행권원이 있어야 합니다. 단순 약속서나 증거만으로는 안 됩니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>
<a href="#" class="next-link">금외집행_03_대체집행_판단형</a>
<a href="#" class="next-link">금외집행_04_간접강제_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제257조', desc: '동산 인도집행' },
      { name: '민사집행법 제259조', desc: '이부명령' },
    ],
    forms: []
  }
,
  {
    id: 'ef-78',
    title: '동산 인도집행 완전 가이드',
    meta: '상황별 집행 방법과 주의사항',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>법원 판결을 받았지만, 어떻게 진행해야 할지 전혀 모름</li>
<li>제3자가 물건을 가지고 있어서 상황이 복잡함</li>
<li>물건이 특정된 건가, 아니면 불특정물인가 판단이 안 됨</li>
<li>집행 전에 사전에 준비할 사항이 있는지 알고 싶음</li>
<li>집행 과정에서 물건을 못 찾으면 어떻게 해야 할지 알고 싶음</li>
<li>판결 후 얼마나 빨리 신청해야 하는지 알고 싶음</li>
</ul>
<div class="summary-box"><strong>한 문장 요약:</strong> 판결이 나면 우선 상황을 판단(채무자 직접 점유 vs 제3자 점유)한 후, 각각의 절차에 따라 신청하면 집행관이나 법원이 물건을 받도록 강제해 줍니다.</div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><p><strong>동산 인도집행이란:</strong> 법원 판결이나 합의조서에 따라 반드시 특정된 동산이어야 하며, 집행관(또는 법원)의 힘을 빌려 강제로 받는 절차입니다 (민사집행법 제257조, 제259조).</p><p style="margin-top: 12px;"><strong>성공 조건:</strong> ① 집행권원(판결) ② 특정 동산 ③ 신속한 신청 ④ 정확한 물건 설명</p></div>
<h3>먼저 상황을 판단하세요</h3>
<p><strong>상황 A: 채무자가 직접 물건을 가지고 있음</strong></p>
<div class="case-box"><p>판결 → 집행관 신청 → 집행관이 현장에서 수취 → 채권자에게 인도<br><strong>소요 시간:</strong> 신청 후 1~2개월<br><strong>복잡도:</strong> 낮음</p></div>
<p style="margin-top: 16px;"><strong>상황 B: 제3자가 물건을 가지고 있음</strong></p>
<div class="case-box"><p>판결 → 이부명령 신청 (법원) → 제3자 통지 → 수락 (인도) 또는 거부 (추심의 소)<br><strong>소요 시간:</strong> 이부명령 수개월 + 추심의 소 6개월~1년<br><strong>복잡도:</strong> 높음</p></div>`
      },
      {
        heading: '상세설명 (STEP 1~5)',
        content: `<h3>STEP 1: 상황 판단</h3>
<div class="summary-box"><p><strong>체크리스트:</strong><br>□ 물건이 채무자의 집이나 직장에 있는가?<br>□ 물건이 제3자(친구, 형제, 보관소 등)에게 있는가?<br>□ 물건의 정확한 위치가 파악되는가?<br>□ 물건이 여전히 존재하는가?</p></div>
<h3>STEP 2: 집행권원 확인</h3>
<ul class="checklist"><li><strong>법원 판결:</strong> 동산 인도를 명한 판결 (확정 필요)</li><li><strong>합의조서:</strong> 법원이 승인한 합의조서</li><li><strong>공정증서:</strong> 동산 인도를 약속한 공정증서</li><li><strong>중재판정:</strong> 중재판정부의 판정서</li></ul>
<div class="warn-box"><p><strong>판결은 확정되어야 합니다</strong><br>1심 판결은 항소 가능 기간(2주)이 지나야 확정됩니다.</p></div>
<h3>STEP 3: 물건 사전 준비</h3>
<div class="summary-box"><p><strong>준비 사항:</strong><br>□ 물건 사진 (가능하면 여러 각도)<br>□ 물건의 정확한 모델명, 색상, 크기<br>□ 물건의 구매 일자 및 영수증<br>□ 물건의 추정 시가<br>□ 물건의 현재 위치에 대한 정보</p></div>
<h3>STEP 4: 상황별 절차 선택</h3>
<p><strong>상황 A: 채무자가 직접 점유</strong></p>
<div class="case-box"><p><strong>절차:</strong><br>1. 집행 신청서 작성<br>2. 지방법원 집행관에게 제출 (필요 서류: 판결, 신분증, 주소 확인서, 물건 설명)<br>3. 집행관이 채무자 조사<br>4. 집행기일 통지<br>5. 집행관이 현장 방문하여 물건 수취<br>6. 채권자에게 물건 인도</p></div>
<p style="margin-top: 16px;"><strong>상황 B: 제3자가 점유</strong></p>
<div class="case-box"><p><strong>절차:</strong><br>1. 이부명령 신청 (집행법원 판사에게)<br>2. 법원이 제3자의 소재지를 조사<br>3. 이부명령 발령 및 제3자 통지<br>4-1. 제3자가 수락 → 채권자가 제3자에게 물건 인도 청구<br>4-2. 제3자가 거부 → 추심의 소 제기 (새로운 소송)<br>5. 추심의 소 승소 후 판결로 집행</p></div>
<h3>필요한 서류 정리</h3>
<table><thead><tr><th>상황</th><th>필요한 서류</th><th>제출처</th></tr></thead><tbody><tr><td>채무자 직접 점유</td><td>집행신청서, 판결/합의조서, 신분증, 주소확인서, 물건 설명서</td><td>지방법원 집행관</td></tr><tr><td>제3자 점유</td><td>이부명령신청서, 판결, 제3자 신원 정보, 물건 설명서</td><td>집행법원 (판사)</td></tr><tr><td>추심의 소</td><td>소장, 제3자 거부 증거, 물건 설명서, 증거</td><td>지방법원 (민사부)</td></tr></tbody></table>
<h3>STEP 5: 실무 팁</h3>
<p><strong>팁 1: 판결 후 즉시 신청</strong><br>판결이 확정되면 가능한 빨리 집행을 신청하세요. 시간이 지날수록 채무자가 물건을 숨기거나 팔아버릴 가능성이 높습니다.</p>
<p style="margin-top: 12px;"><strong>팁 2: 물건 위치 파악</strong><br>집행 신청 전에 물건이 어디에 있는지 파악하세요. 정보가 있으면 집행관에게 알려주면 집행이 빨라집니다.</p>
<p style="margin-top: 12px;"><strong>팁 3: 물건 보호</strong><br>집행 신청 전에 물건이 손상되거나 이동되는 것을 막기 위해 가처분 신청을 고려할 수 있습니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">우리 상황은 어떤 경우에 해당하나요?</div><div class="qna-a">판결에 명시된 물건이 지금 누구 손에 있는지 확인하면 됩니다. 채무자 손에 있으면 상황 A, 다른 사람 손에 있으면 상황 B입니다.</div></div>
<div class="qna-item"><div class="qna-q">물건이 특정됐는지 어떻게 알 수 있나요?</div><div class="qna-a">판결을 보세요. "구체적 특징이 명시"되어 있으면 특정된 것입니다. 예: "2023년식 LG 냉장고, 모델 RS29R6000QE, 흰색" → 특정됨. "노트북" 또는 "가전제품" → 특정 안 됨.</div></div>
<div class="qna-item"><div class="qna-q">제3자가 물건을 가지고 있으면 시간이 더 오래 걸리나요?</div><div class="qna-a">매우 오래 걸립니다. 이부명령만 수개월, 제3자가 거부하면 추심의 소를 제기해야 하므로 6개월~1년 이상 걸릴 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">판결은 받았는데 상대방이 물건을 없애버렸다면?</div><div class="qna-a">"집행 불능" 결정이 납니다. 이 경우 물건의 시가에 해당하는 손해배상 청구로 전환할 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">집행 과정에서 물건이 손상되면?</div><div class="qna-a">집행관이 최선을 다해 물건을 보호하지만, 집행관의 과실로 손상되었다면 국가배상청구가 가능합니다.</div></div>
<div class="qna-item"><div class="qna-q">판결 후 얼마까지 신청할 수 있나요?</div><div class="qna-a">민사소송법 제206조에 따라 판결 확정 후 10년 이내여야 합니다. 10년이 지나면 집행 신청이 반려됩니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><p><strong>법리:</strong> 동산 인도집행은 "특정된 물건"에만 적용됩니다. 판결에 물건이 추상적으로만 기술되어 있으면 집행관이 어느 물건을 수취해야 하는지 판단할 수 없어 집행이 불가능합니다.</p></div>
<div class="ruling-box"><p><strong>법리:</strong> 제3자가 점유하는 동산에 대해 이부명령을 신청할 수 없는 예외가 있습니다. 특히 금전채권자들이 먼저 압류한 경우, 선착처분 우선주의에 의해 이부명령이 허가되지 않을 수 있습니다 (참고: 대결 2017. 9. 22. 2015그3).</p></div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><p><strong>시간이 생명입니다</strong><br>판결이 나왔으면 가능한 빨리 집행을 신청하세요. 늦을수록 채무자가 물건을 숨기거나 파는 가능성이 높아집니다.</p></div>
<div class="warn-box"><p><strong>물건을 명확히 파악하세요</strong><br>집행 신청 시 물건을 너무 추상적으로 기술하면 집행관도 어느 물건인지 모를 수 있습니다. 구체적으로 기술해야 합니다.</p></div>
<div class="warn-box"><p><strong>제3자 점유는 복잡합니다</strong><br>제3자가 물건을 가지고 있으면 시간이 오래 걸리고 비용도 많이 들 수 있습니다. 이부명령 → 거부 → 추심의 소까지 전 과정이 1년 이상 걸릴 수 있습니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>
<a href="#" class="next-link">금외집행_03_대체집행_판단형</a>
<a href="#" class="next-link">금외집행_04_간접강제_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제257조', desc: '동산 인도집행' },
      { name: '민사집행법 제259조', desc: '이부명령' },
    ],
    forms: []
  }
,
  {
    id: 'ef-79',
    title: '대체집행 절차',
    meta: '수권결정 신청부터 철거 완료까지',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>건물 철거 판결이 확정되었고 이제 실제 집행 절차를 시작하려고 한다</li>
<li>수권결정을 신청하려고 하는데 어떻게 해야 할지 모른다</li>
<li>어느 법원에 신청해야 하고 어떤 서류를 준비해야 하는지 궁금하다</li>
<li>집행관에게 위임하는 절차와 비용 관련 사항을 알고 싶다</li>
<li>집행 중 채무자의 저항이나 방해가 생기면 어떻게 대처하는지 알아야 한다</li>
<li>대체집행비용선지급결정은 어떻게 신청하는지 알고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><strong>대체집행 절차는 5단계입니다:</strong><br>1) 수권결정 신청 → 2) 채무자 심문 → 3) 수권결정 발령 → 4) 집행관 위임 → 5) 실제 작위 실시<br><br><strong>중요 포인트:</strong> 먼저 기존 판결이 '대체성'을 만족하는지 확인하고, 제1심 집행법원에 신청해야 합니다. 채무자 심문은 필수이고, 수권결정이 나면 집행관을 통해 실제 철거·제거를 진행합니다. 비용선지급을 함께 신청하면 채무자가 미리 비용을 내야 합니다.</div>`
      },
      {
        heading: '상세설명',
        content: `<h3>1단계: 판결 확정 및 대체성 검토</h3>
<p>대체집행을 시작하기 전에 먼저 다음을 확인해야 합니다:</p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>본안 판결(건물 철거, 공작물 제거 등)이 확정되었는가?</li><li>그 판결의 채무가 '대체성'을 만족하는가?</li><li>채무자가 자발적으로 이행할 가능성은 없는가?</li></ul>
<h3>2단계: 수권결정 신청</h3>
<p><strong>관할 법원:</strong> 제1심 법원(집행법원)에 신청합니다.</p>
<h3>신청 방법</h3>
<table><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td><strong>신청 형식</strong></td><td>서면 신청 (이의 신청서 또는 수권결정 신청서)</td></tr><tr><td><strong>인지</strong></td><td>인지 2,000원 (2024년 기준)</td></tr><tr><td><strong>첨부 서류</strong></td><td>확정 판결문 사본, 채권자 신분증 사본(법인은 등기부등본), 필요시 채무 내용을 보여주는 사진·도면</td></tr><tr><td><strong>신청 이유</strong></td><td>왜 대체집행이 필요한지, 채무가 대체성을 만족하는지 설명</td></tr></tbody></table>
<h3>신청서 기재 사항</h3>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li><strong>당사자:</strong> 채권자(신청인), 채무자(피신청인)</li><li><strong>기초가 되는 판결:</strong> 판결일, 판결 요지, 확정일</li><li><strong>대체성의 존부:</strong> 왜 이 채무가 대체적인지 설명</li><li><strong>예상 비용:</strong> 철거 비용, 인부비, 장비비 등 대략적 금액</li><li><strong>비용선지급결정 함께 신청</strong> (필요시)</li></ul>
<h3>3단계: 채무자 심문</h3>
<p>법원이 수권결정을 하기 전에 <strong>반드시 채무자를 심문</strong>해야 합니다(민사집행법 제262조). 이는 강제적이며 생략할 수 없습니다.</p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>법원이 날짜를 지정하여 채무자를 불러냄</li><li>채무자가 나타나지 않아도 심문은 진행되고 기록으로 남음</li><li>대체성 존부가 핵심 쟁점</li></ul>
<h3>4단계: 수권결정 발령</h3>
<p>법원이 대체성을 인정하면 다음과 같은 형태의 결정이 나옵니다:</p>
<div class="case-box"><strong>결정 예시:</strong><br>"채권자 ○○는 집행관으로 하여금 피신청인 ××가 소유한 □□시 △△구 건물(지번 000)을 철거하도록 하게 할 수 있다."<br><br>결정의 법적 효력:<br>• 이 결정은 채권자에게 "대체적 작위의 권한"을 부여함<br>• 채무자가 불복하여 즉시항고를 해도 집행은 계속 진행 (민사집행법 제260조 제3항)</div>
<h3>5단계: 비용선지급결정 (함께 신청할 수 있음)</h3>
<p>수권결정 신청 시 또는 그 후에 함께 신청할 수 있습니다.</p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>법원이 예상 비용을 정하고, 채무자에게 그 금액을 내라고 명령</li><li>예상 비용보다 실제 비용이 많으면 추가 청구 가능 (민사집행법 제260조 제2항 단서)</li><li>채무자가 비용을 내지 않으면 채무자의 재산으로 강제집행</li></ul>
<p><strong>비용으로 청구할 수 있는 항목:</strong></p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>집행관 수수료</li><li>철거 용역비</li><li>중장비 비용 (불도저, 포크레인 등)</li><li>인부비</li><li>폐기물 처리비</li><li>현장 안전 관리비</li></ul>
<h3>6단계: 집행관에게 위임 및 대체집행 실시</h3>
<p>수권결정이 나면 채권자가 집행관에게 위임하여 실제 작위를 시작합니다.</p>
<p><strong>채무자의 저항과 대처:</strong></p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li><strong>물리적 저항:</strong> 경찰 원조 신청 (민사집행법 제35조)</li><li><strong>건물 점유자:</strong> 건물 안에 거주자가 있으면 미리 명도 판결이 필요함</li></ul>
<h3>7단계: 비용 청구 및 강제집행</h3>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>채무자가 비용을 내지 않으면 채무자의 동산·부동산으로 강제집행</li><li>실제 비용이 더 많으면 추가로 청구 가능</li></ul>
<h3>필요 서류 체크리스트</h3>
<table><thead><tr><th>서류</th><th>수량</th><th>비고</th></tr></thead><tbody><tr><td>수권결정 신청서</td><td>정본 1부, 부본 1부</td><td>인지 2,000원 부착</td></tr><tr><td>확정 판결문 사본</td><td>정본 1부, 부본 1부</td><td>법원 인증본</td></tr><tr><td>채권자 신분증 사본</td><td>1부</td><td>개인은 주민등록증, 법인은 등기부등본</td></tr><tr><td>건물/공작물 사진</td><td>필요시</td><td>현황 파악용</td></tr><tr><td>토지·건물 등기부등본</td><td>필요시</td><td>소유권 확인용</td></tr><tr><td>비용 산정 자료</td><td>필요시</td><td>철거 비용 견적서 등</td></tr></tbody></table>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">신청서는 어떤 형식으로 작성해야 하나요?</div><div class="qna-a">민사집행법 제260조에 따른 수권결정 신청서이며, 특정한 양식은 없습니다. 신청인(채권자), 피신청인(채무자) 표기, 기초 판결의 내용 및 확정일, 대체성 존부에 관한 법률 주장, 신청의 이유, 신청일을 포함해야 합니다.</div></div>
<div class="qna-item"><div class="qna-q">신청 후 법원 결정까지 얼마나 걸리나요?</div><div class="qna-a">빠르면 1~2개월, 늦으면 3~6개월 정도 소요됩니다. 채무자 심문 일정에 따라 달라지며, 법원의 업무량과 사건 복잡도에 따라서도 변합니다.</div></div>
<div class="qna-item"><div class="qna-q">채무자가 심문에 나오지 않으면 어떻게 되나요?</div><div class="qna-a">채무자가 나오지 않아도 심문은 진행되고, 기록에 "피신청인 불출석"으로 남습니다. 이것이 수권결정 거절의 이유가 되지 않습니다.</div></div>
<div class="qna-item"><div class="qna-q">수권결정이 나온 후 대체집행을 미루면 안 되나요?</div><div class="qna-a">법적으로 미루는 것을 금지하지는 않지만, 실무상 오래 미루면 건물이 더 훼손되거나 제3자가 점유할 수 있습니다. 결정이 나오면 가능한 한 빨리 집행관에게 위임하세요.</div></div>
<div class="qna-item"><div class="qna-q">집행 중 채무자의 생명이 위험할 정도로 저항하면 멈춰야 하나요?</div><div class="qna-a">집행관은 채무자의 신체 안전을 고려해야 합니다. 물리적 저항이 심하면 경찰 원조를 신청하고, 필요시 현장을 떠날 수도 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">비용선지급결정을 받으려면 정확한 비용을 미리 알아야 하나요?</div><div class="qna-a">정확한 비용을 미리 알기 어렵습니다. 철거 전문가의 견적서를 첨부하거나, 대략적인 비용 범위를 제시하면 됩니다. 실제 비용이 더 들면 추가 청구 가능합니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><strong>[민사집행법 제262조]</strong><br>채무자의 필수적 심문: "집행법원은 수권결정을 할 때 채무자를 심문하여야 한다"</div>
<div class="ruling-box"><strong>[민사집행법 제260조 제1항]</strong><br>수권결정 요건: 대체적 작위채무에 대한 채권자는 집행법원에 수권결정을 신청할 수 있습니다.</div>
<div class="ruling-box"><strong>[민사집행법 제260조 제2항]</strong><br>비용선지급결정: 법원은 필요하면 비용 선지급을 명령할 수 있고, 실제 비용이 더 들면 추가 청구 가능합니다(단서).</div>
<div class="ruling-box"><strong>[민사집행법 제260조 제3항]</strong><br>즉시항고의 비효력: 수권결정에 대한 즉시항고는 집행을 정지시키지 않습니다.</div>
<div class="ruling-box"><strong>[민사집행법 제35조]</strong><br>경찰 원조: 집행 중 폭력적 방해가 있으면 경찰에 원조를 요청할 수 있습니다.</div>
<div class="ruling-box"><strong>[대판 2015. 9. 10. 2015다2393]</strong><br>비용선지급 불복은 즉시항고로만 가능: 별소로는 다툰 수 없습니다.</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>1. 신청 전에 판결의 확정을 반드시 확인하세요</h3><p>항소가 진행 중이거나 재심 신청이 남아 있으면 수권결정을 할 수 없습니다.</p></div>
<div class="warn-box"><h3>2. 건물 안에 거주자가 있으면 미리 명도 판결을 받으세요</h3><p>철거할 건물에 다른 사람이 살고 있다면, 대체집행 전에 그 거주자를 상대로 명도 판결을 따로 받아야 합니다.</p></div>
<div class="warn-box"><h3>3. 채무자가 수권결정 후 즉시항고해도 집행을 멈추지 마세요</h3><p>민사집행법 제260조 제3항에서 즉시항고는 집행을 정지시키지 않는다고 명시했습니다.</p></div>
<div class="warn-box"><h3>4. 대체집행비용선지급 결정액이 작으면 실제 비용이 부족할 수 있습니다</h3><p>신청 전에 철거 전문가의 견적을 충분히 검토하고, 법원에 현실적인 금액을 제시하세요.</p></div>
<div class="warn-box"><h3>5. 집행관이 진행을 거부할 수 있는 경우를 대비하세요</h3><p>집행관이 종교, 문화재, 공중 보건상의 이유로 집행을 거부할 수 있습니다. 미리 사항을 확인하세요.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<p>대체집행 절차 후 알아두면 좋은 관련 주제들:</p>
<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>
<a href="#" class="next-link">금외집행_04_간접강제_판단형</a>
<a href="#" class="next-link">금외집행_05_의사표시집행_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제260조 제1항', desc: '수권결정' },
      { name: '민사집행법 제260조 제2항', desc: '비용선지급결정' },
      { name: '민사집행법 제260조 제3항', desc: '즉시항고의 비효력' },
      { name: '민사집행법 제262조', desc: '채무자 필수 심문' },
      { name: '민사집행법 제35조', desc: '경찰 원조' },
    ],
    forms: []
  }
,
  {
    id: 'ef-80',
    title: '대체집행',
    meta: '건물 철거·공작물 제거 판결 받았는데 상대방이 안 해요',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>건물 철거 판결을 받았는데 상대방이 이행하지 않고 있다</li>
<li>공작물 설치 금지 판결이 있는데 상대방이 공작물을 세웠다</li>
<li>건물 축조 금지 판결이 있었는데 상대방이 건물을 지었다</li>
<li>토지인도 판결이 있는데 상대방의 건물/공작물을 철거해야 한다</li>
<li>채무자의 협력 없이 법원 권한으로 강제 이행이 가능한지 궁금하다</li>
<li>간접강제와 대체집행의 차이를 알고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><strong>대체집행이란?</strong> 채무자의 비용으로 채무자 이외의 제3자(또는 채권자)가 채무 내용을 실현하는 강제집행 방법입니다. 건물 철거, 공작물 제거, 포스터 제거 등 다른 사람이 대신할 수 있는 '대체적 작위채무'에만 적용됩니다.<br><br><strong>핵심:</strong> 채무자의 협력이 필요 없고, 다른 사람이 대신할 수 있는 채무라면 법원으로부터 '수권결정'을 받아 대체집행할 수 있습니다.</div>`
      },
      {
        heading: '상세설명',
        content: `<h3>대체성이 있는 경우 (대체집행 가능)</h3>
<h3>1. 건물·공작물 철거</h3>
<div class="case-box"><strong>예시:</strong> A가 B 소유의 토지에 건축금지 판결이 있는데도 건물을 지었다. 법원의 수권결정을 받으면 채권자는 집행관을 통해 그 건물을 철거할 수 있습니다.</div>
<h3>2. 부작위채무 위반결과의 제각</h3>
<p>민법 제389조 제3항에 따라 부작위채무(~하지 말 것) 위반의 결과가 나타났을 때, 그 결과를 제거하는 행위는 대체집행으로 가능합니다.</p>
<div class="case-box"><strong>예시:</strong> "X 건물 신축 금지" 판결이 있었는데 신축되었다면, 법원이 수권하면 채권자가 그 건물을 철거할 수 있습니다.</div>
<h3>3. 포스터 게시 중단 (특정 조건)</h3>
<div class="case-box"><strong>예시:</strong> 신문에 포스터를 게시하지 말아야 하는 채무라면, 제3자인 신문사도 개입할 수 있으므로 대체집행 가능. 하지만 "특정 건물 안에 있는 포스터를 내리시오"인데 그 건물 위치를 채무자만 알면 대체성 없음.</div>
<hr style="margin: 20px 0;">
<h3>대체성이 없는 경우 (간접강제만 가능)</h3>
<h3>1. 반론보도·정정보도</h3>
<div class="warn-box"><strong>주의:</strong> 헌법재판소(1991. 4. 1. 89헌마160)도 "사죄광고는 인격권 침해로 위헌"이라고 판단했으므로, 강제 사죄 광고는 집행 자체가 불가능합니다.</div>
<h3>2. 의사표시 결합 채무</h3>
<div class="case-box"><strong>예시:</strong> "보증인 되기" 판결은 채무자의 인격과 신용에 관한 것이므로 대체집행 불가. 간접강제만 가능.</div>
<h3>3. 예술적·개인적 성격의 채무</h3>
<p>그림 그리기, 연극 출연, 노래 공연 등 개인의 창의성이나 개성이 불가결한 채무는 대체집행 불가능합니다.</p>
<hr style="margin: 20px 0;">
<h3>수권결정 절차 요약</h3>
<table><thead><tr><th>단계</th><th>내용</th></tr></thead><tbody><tr><td><strong>1단계</strong></td><td>채권자가 제1심 법원(집행법원)에 수권결정 신청 (서면 신청, 인지 2,000원)</td></tr><tr><td><strong>2단계</strong></td><td>법원이 채무자를 반드시 심문 (민사집행법 제262조 필요적 심문)</td></tr><tr><td><strong>3단계</strong></td><td>법원이 대체성 판단하여 수권결정 발령</td></tr><tr><td><strong>4단계</strong></td><td>채권자가 집행관에게 위임하여 실제 철거·제거 실시</td></tr><tr><td><strong>5단계</strong></td><td>집행관이 소요된 비용을 청구하고, 필요시 채무자의 동산·부동산으로 강제집행</td></tr></tbody></table>
<h3>대체집행비용선지급결정</h3>
<p>수권결정 신청 시 또는 작위 실시 전에 함께 신청할 수 있습니다. 법원이 예상 비용을 미리 결정하면 채무자는 그 비용을 미리 내야 합니다. 만약 실제 비용이 예상 비용보다 많으면 추가 청구도 가능합니다(민사집행법 제260조 제2항 단서).</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">대체집행과 간접강제의 차이는 무엇인가요?</div><div class="qna-a"><strong>대체집행:</strong> 채무자 대신 제3자가 대신 행위를 하는 방식입니다. 채무자의 협력 없이 작위가 완성됩니다.<br><strong>간접강제:</strong> 채무자가 이행하지 않을 때마다 일정액(배당금)을 지급하도록 강제하는 방식으로, 채무자의 의사를 꺾기 위한 경제적 압박입니다.</div></div>
<div class="qna-item"><div class="qna-q">수권결정에는 채무자 심문이 꼭 필요한가요?</div><div class="qna-a">네, 필수입니다. 민사집행법 제262조는 "집행법원은 수권결정을 할 때 채무자를 심문하여야 한다"고 명시했습니다. 다만 채무자가 출석하지 않아도 심문이 없었다는 이유만으로는 결정이 취소되지 않습니다.</div></div>
<div class="qna-item"><div class="qna-q">건물 철거 수권결정을 받으면 채무자의 저항을 무시하고 철거해도 되나요?</div><div class="qna-a">네, 가능합니다. 집행관은 수권결정이 있으면 채무자의 동의 없이 철거를 진행할 수 있습니다. 단, 채무자가 폭력으로 저항하면 경찰의 원조를 신청할 수 있습니다(민사집행법 제35조).</div></div>
<div class="qna-item"><div class="qna-q">부작위채무 위반 후 그 결과를 제거하는 것도 대체집행인가요?</div><div class="qna-a">네, 맞습니다. 예를 들어 "건물을 짓지 말라"는 판결이 있었는데 건물이 지어진 경우, 그 건물을 철거하는 것은 부작위채무 위반의 결과를 제각하는 대체집행입니다(민법 제389조 제3항).</div></div>
<div class="qna-item"><div class="qna-q">포스터 제거도 대체집행이 되나요?</div><div class="qna-a">게시 장소가 누구나 알 수 있고 접근할 수 있다면 대체집행이 가능합니다. 하지만 게시 장소를 채무자만 알고 있다면 채무자의 협력이 필요하므로 대체성이 없습니다.</div></div>
<div class="qna-item"><div class="qna-q">수권결정이 나와도 채무자가 상소하면 집행을 멈춰야 하나요?</div><div class="qna-a">아닙니다. 민사집행법 제260조 제3항에 따라 수권결정에 대한 즉시항고는 집행을 정지시키지 않습니다.</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><strong>[대결 1990. 12. 27. 90마858]</strong><br>항고 이유 제한: 채무자가 수권결정에 불복하는 항고에서는 대체성 존부만 다툴 수 있고, 본래 강제집행 청구권이 있는지 없는지는 다툴 수 없습니다.</div>
<div class="ruling-box"><strong>[대결 2015. 4. 10. 2012그186]</strong><br>유골함 안치된 봉안시설 철거는 불가: 종교적·윤리적 문제가 있어 대체집행 불가능 판단.</div>
<div class="ruling-box"><strong>[헌재 1991. 4. 1. 89헌마160]</strong><br>강제 사죄광고는 위헌: 신문에 사죄광고를 강제하는 것은 표현의 자유 침해로 위헌 판단.</div>
<div class="ruling-box"><strong>[대판 2015. 9. 10. 2015다2393]</strong><br>대체집행비용선지급결정에 대한 별소는 부적법.</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>1. 대체성 판단이 명확하지 않으면 법원이 거절할 수 있습니다</h3><p>채무가 정말 다른 사람이 대신할 수 있는 것인지 애매하면 수권결정이 나오지 않습니다.</p></div>
<div class="warn-box"><h3>2. 채무자가 즉시항고를 제기해도 집행은 계속됩니다</h3><p>수권결정 후 채무자가 항고하더라도 집행은 멈추지 않습니다(민사집행법 제260조 제3항).</p></div>
<div class="warn-box"><h3>3. 종교·윤리·공중 보건상 문제가 있으면 불가능할 수 있습니다</h3><p>봉안시설 내 유골함이 있는 경우, 문화재·역사유산 등은 대체집행이 제한될 수 있습니다.</p></div>
<div class="warn-box"><h3>4. 대체집행비용 선지급 미납 시 강제집행됩니다</h3><p>법원이 비용 선지급을 명령했는데 채무자가 내지 않으면 그 돈도 강제집행 대상이 됩니다.</p></div>
<div class="warn-box"><h3>5. 건물 철거 시 거주자·임차인 문제를 미리 정리하세요</h3><p>건물 안에 다른 사람이 거주하고 있다면, 철거 전에 건물 명도 판결을 먼저 받거나 거주자와 합의해야 합니다.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<p>대체집행과 함께 알아두면 좋은 다른 집행 방법들:</p>
<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>
<a href="#" class="next-link">금외집행_04_간접강제_판단형</a>
<a href="#" class="next-link">금외집행_05_의사표시집행_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제260조', desc: '대체집행 수권결정' },
      { name: '민사집행법 제262조', desc: '채무자 심문' },
      { name: '민사집행법 제35조', desc: '경찰 원조' },
      { name: '민법 제389조 제3항', desc: '부작위채무 위반결과의 제각' },
      { name: '헌재 1991. 4. 1. 89헌마160', desc: '강제 사죄광고 위헌' },
    ],
    forms: []
  }
,
  {
    id: 'ef-81',
    title: '대체집행 완전 가이드',
    meta: '가능 여부 판단부터 비용 회수까지',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>판결은 받았는데 상대방이 안 하고, 어떤 방법으로 강제할 수 있을지 모른다</li>
<li>건물 철거, 공작물 제거 등 사건이 진행 중이다</li>
<li>대체집행이 가능한지, 간접강제로 가야 하는지 판단이 안 선다</li>
<li>수권결정을 받으려고 하는데 구체적 절차를 알아야 한다</li>
<li>집행 중 발생할 수 있는 문제와 해결 방법을 미리 알고 싶다</li>
<li>비용 관련 사항(선지급, 추가 청구 등)을 이해하고 싶다</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box"><strong>대체집행은 '다른 사람이 대신할 수 있는' 채무에만 가능합니다.</strong><br><br><strong>3가지 핵심 포인트:</strong><br>1) 대체성 판단: 채무자의 협력 없이 제3자가 실현할 수 있는가?<br>2) 절차: 법원의 수권결정 → 채무자 심문 (필수) → 집행관 위임<br>3) 비용: 선지급결정으로 미리 받고, 실비는 나중에 청구 가능<br><br><strong>틀리기 쉬운 점:</strong> 간접강제와 혼동하지 마세요. 간접강제는 경제적 압박(배당금 지급)이고, 대체집행은 실제 작위를 제3자가 대신하는 것입니다.</div>`
      },
      {
        heading: '상세설명',
        content: `<h3>I. 대체성 판단 (가능 여부 결정)</h3>
<h3>1. 대체성의 핵심 기준</h3>
<p>채무가 다음 3가지를 만족하면 대체성이 있습니다:</p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li><strong>타인대체가능성:</strong> 채무자가 아닌 다른 사람이 실현할 수 있는가?</li><li><strong>객관적 작위성:</strong> 의사표시나 감정을 포함하지 않은 객관적 행위인가?</li><li><strong>법률상 가능성:</strong> 법령상 제한이 없는가?</li></ul>
<h3>2. 구체적 판단 사례</h3>
<table><thead><tr><th>채무 내용</th><th>대체성</th><th>이유</th></tr></thead><tbody><tr><td>건물 철거</td><td>있음</td><td>누구나 철거 기술자를 고용할 수 있고, 순수 객관적 행위</td></tr><tr><td>공작물 제거</td><td>있음</td><td>담장, 간판, 울타리 등은 제3자 제거 가능</td></tr><tr><td>부작위 위반 결과 제각</td><td>있음</td><td>축조금지 위반으로 지어진 건물은 철거 가능</td></tr><tr><td>반론보도·정정보도</td><td>없음</td><td>매체의 편집권이 필요하므로 의사표시 결합 채무</td></tr><tr><td>어음 서명·보증 약정</td><td>없음</td><td>의사표시가 필수이며, 신용에 관한 것</td></tr><tr><td>그림 그리기·노래 공연</td><td>없음</td><td>개인의 창의성·개성이 불가결</td></tr><tr><td>전기·가스 공급</td><td>없음</td><td>법률상 특정 사업자만 공급 가능</td></tr></tbody></table>
<hr style="margin: 20px 0;">
<h3>II. 수권결정 절차 (단계별)</h3>
<h3>1단계: 신청 준비</h3>
<p><strong>확인 사항:</strong></p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>기초 판결이 완전히 확정되었는가?</li><li>판결의 채무가 대체성을 만족하는가? → 판례 검토 필수</li><li>예상 비용은 얼마인가? → 철거 업체에 견적 요청</li></ul>
<p><strong>필요 서류:</strong></p>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>수권결정 신청서 (정본 1, 부본 1) + 인지 2,000원</li><li>기초 판결문 사본 (법원 인증본)</li><li>채권자의 신분증 사본 또는 법인등기부등본</li><li>건물·공작물 사진 및 도면 (필요시)</li></ul>
<h3>2단계: 신청</h3>
<p><strong>어디에:</strong> 제1심 법원 (보통 기초 판결을 내린 법원)</p>
<h3>3단계: 채무자 심문 (법원)</h3>
<p>법원이 날짜를 정하여 채무자를 부릅니다(필수). 채무자가 나오지 않아도 심문은 진행됩니다.</p>
<h3>4단계: 수권결정 발령</h3>
<div class="case-box"><strong>결정문 예시:</strong><br>"채권자 ○○는 집행관으로 하여금 피신청인 ××이 소유한 △△시 □□구 건물(지번 000)을 철거하도록 하게 할 수 있다."</div>
<h3>5단계: 비용선지급결정 (동시 또는 별도)</h3>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>법원이 예상 비용을 정함</li><li>채무자가 그 금액을 내야 함</li><li>실제 비용이 더 들면 나중에 추가 청구 가능</li></ul>
<h3>6단계: 집행관 위임 및 실행</h3>
<p>수권결정과 비용선지급결정이 있으면 집행관에게 위임합니다.</p>
<h3>7단계: 비용 청구 및 강제집행</h3>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>채무자가 비용을 내지 않으면 채무자의 재산으로 강제집행</li><li>추가 비용이 필요하면 보정액을 청구</li></ul>
<hr style="margin: 20px 0;">
<h3>III. 집행 중 발생하는 문제와 해결 방법</h3>
<h3>1. 채무자의 물리적 저항</h3>
<p><strong>해결:</strong> 경찰 원조 신청 (민사집행법 제35조)</p>
<h3>2. 건물 내 거주자 문제</h3>
<ul style="margin-left: 20px; margin-bottom: 16px;"><li>선택 1: 미리 명도 판결을 받고 집행</li><li>선택 2: 거주자와 합의하여 이사 기간 확보</li></ul>
<h3>3. 채무자의 즉시항고</h3>
<p><strong>해결:</strong> 집행은 계속 진행 (민사집행법 제260조 제3항)</p>
<hr style="margin: 20px 0;">
<h3>IV. 비용 선지급과 추가 청구</h3>
<div class="summary-box"><strong>비용선지급결정의 전략</strong><br>• 신청 전: 철거 전문가에서 정확한 견적을 받기<br>• 신청 시: 견적서를 첨부하여 합리성 입증<br>• 결정 후: 실제 비용이 더 들면 법원에 추가 청구 신청 가능 (민사집행법 제260조 제2항 단서)</div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item"><div class="qna-q">대체성을 판단하는 가장 중요한 기준은 무엇인가요?</div><div class="qna-a">"채무자의 협력 없이 제3자(또는 채권자)가 할 수 있는가?"입니다. 건물 철거는 누가 할 수 있으므로 대체성 있음. 어음 서명은 채무자의 의사와 신용이 필요하므로 대체성 없음.</div></div>
<div class="qna-item"><div class="qna-q">간접강제와 대체집행의 차이를 쉽게 설명해 주세요.</div><div class="qna-a"><strong>대체집행:</strong> "건물을 철거해라" 판결이 있을 때, 집행관이 직접 철거. 실제 행위 완성.<br><strong>간접강제:</strong> "반론보도를 해라" 판결이 있을 때, 채무자가 하지 않을 때마다 돈을 내라고 압박. 경제적 강압.</div></div>
<div class="qna-item"><div class="qna-q">수권결정을 신청했는데 법원이 거절할 수도 있나요?</div><div class="qna-a">네, 가능합니다. 대체성이 없다고 판단한 경우, 채무 내용이 불분명한 경우, 종교·문화재 등 공익상 이유로 불가능한 경우에 거절할 수 있습니다.</div></div>
<div class="qna-item"><div class="qna-q">부작위채무 위반 결과를 제각하는 것도 대체집행 절차를 따르나요?</div><div class="qna-a">네, 같은 절차입니다. 수권결정 신청 → 채무자 심문 → 수권결정 발령 → 집행관 위임 절차를 따릅니다.</div></div>
<div class="qna-item"><div class="qna-q">비용선지급결정 후 실제 비용이 많이 드는 경우 어떻게 되나요?</div><div class="qna-a">민사집행법 제260조 제2항 단서에 따라 추가 청구가 가능합니다. 채무자가 추가금을 내지 않으면 다시 강제집행합니다.</div></div>
<div class="qna-item"><div class="qna-q">채무자가 수권결정 후 바로 항고하면 집행을 멈춰야 하나요?</div><div class="qna-a">아닙니다. 민사집행법 제260조 제3항에 따라 수권결정에 대한 즉시항고는 집행을 정지시키지 않습니다.</div></div>
<div class="qna-item"><div class="qna-q">건물 안에 다른 사람이 살고 있으면 어떻게 하나요?</div><div class="qna-a">3가지 방법이 있습니다:<br>1) 미리 그 거주자를 상대로 명도 판결을 받고 대체집행 실시<br>2) 거주자와 합의하여 자발적 이사 기간 확보<br>3) 거주자도 당사자에 추가하여 명도 판결 함께 받기</div></div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box"><strong>[대결 1990. 12. 27. 90마858]</strong><br>항고의 범위 제한: 수권결정에 대한 항고에서는 대체성 존부만 다툴 수 있고, 기초 판결의 청구권 존부는 다시 다툴 수 없습니다.</div>
<div class="ruling-box"><strong>[대결 1992. 6. 24. 92마214]</strong><br>채무 이행 입증 불필요: 대체집행 단계에서는 채무자가 채무를 이행하지 않은 사실을 다시 증명할 필요가 없습니다.</div>
<div class="ruling-box"><strong>[대결 2015. 4. 10. 2012그186]</strong><br>봉안시설 철거 불가: 유골함이 있는 봉안시설은 종교적·윤리적 이유로 대체집행이 불가능할 수 있습니다.</div>
<div class="ruling-box"><strong>[헌재 1991. 4. 1. 89헌마160]</strong><br>강제 사죄광고는 위헌: 신문에 사죄 광고를 강제하는 것은 표현의 자유 침해로 위헌입니다.</div>
<div class="ruling-box"><strong>[대판 2015. 9. 10. 2015다2393]</strong><br>비용선지급 결정의 불복: 비용선지급결정에 불복하려면 즉시항고를 해야 하며, 별소는 부적법입니다.</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><h3>1. 기초 판결의 확정을 반드시 확인하세요</h3><p>항소 중이거나 재심 신청이 남아 있으면 수권결정을 받을 수 없습니다.</p></div>
<div class="warn-box"><h3>2. 대체성 판단을 신청 전에 충분히 검토하세요</h3><p>판례와 법리를 미리 검토하지 않고 신청하면 거절될 수 있습니다.</p></div>
<div class="warn-box"><h3>3. 건물 내 거주자나 제3자의 권리를 미리 확인하세요</h3><p>철거할 건물에 다른 사람이 살거나 물건이 있으면 대체집행 중 문제가 생깁니다.</p></div>
<div class="warn-box"><h3>4. 비용 선지급을 너무 낮게 신청하지 마세요</h3><p>나중에 추가 비용을 청구할 수 있지만, 초기에 너무 낮게 결정되면 채무자의 자금 확보가 어려울 수 있습니다.</p></div>
<div class="warn-box"><h3>5. 채무자의 즉시항고에 흔들리지 마세요</h3><p>항고가 집행을 정지시키지 않으므로, 항고가 제기되어도 집행을 계속 진행하면 됩니다.</p></div>
<div class="warn-box"><h3>6. 집행관과의 사전 협조가 중요합니다</h3><p>대체집행의 성패는 집행관의 협력에 달려 있습니다. 신청 전에 집행관과 미리 상담하여 가능 여부를 확인하세요.</p></div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<p>대체집행과 함께 알아두어야 할 관련 주제들:</p>
<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>
<a href="#" class="next-link">금외집행_04_간접강제_판단형</a>
<a href="#" class="next-link">금외집행_05_의사표시집행_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제260조', desc: '대체집행 수권결정 및 비용선지급' },
      { name: '민사집행법 제262조', desc: '채무자 심문' },
      { name: '민사집행법 제35조', desc: '경찰 원조' },
      { name: '민법 제389조 제3항', desc: '부작위채무 위반결과의 제각' },
    ],
    forms: []
  },
  {
    id: 'ef-82',
    title: '간접강제 신청 절차',
    meta: '배상금 결정부터 금전집행까지',
    sections: [
      {
        heading: '당신의 상황을 확인해보세요',
        content: `<ul class="checklist">
<li>판결 또는 가처분 결정이 있는데 상대방이 이행하지 않는다</li>
<li>가처분과 함께 간접강제도 신청하고 싶은데 기간을 모른다</li>
<li>간접강제 신청서를 어디에, 어떻게 제출할지 모른다</li>
<li>배상금을 얼마로 청구해야 할지 결정할 수 없다</li>
<li>간접강제 결정 후 실제 돈을 받는 절차를 알고 싶다</li>
<li>채무자가 배상금을 내다가 중단했을 때 처리 방법이 궁금하다</li>
</ul>`
      },
      {
        heading: '핵심 요약',
        content: `<div class="summary-box">
<p><strong>간접강제 신청 절차는 2가지:</strong></p>
<p style="margin-top: 12px;">1) 판결 후 별도 신청 (원칙)</p>
<p style="margin-top: 12px;">2) 판결절차에서 동시 결정 (예외)</p>
<p style="margin-top: 12px;"><strong>주의: 가처분 고지 후 정확히 2주(14일) 내에 신청해야 합니다.</strong></p>
</div>`
      },
      {
        heading: '신청 절차',
        content: `<h3>1단계: 신청 시기와 관할</h3>
<p><strong>신청 시기:</strong></p>
<ul style="margin-left: 20px;">
<li>판결 후: 판결이 확정되면 언제든 신청 가능</li>
<li>가처분 후: 가처분 고지 후 2주 이내에 신청</li>
<li>조정 후: 조정 성립 후 별도로 신청</li>
</ul>
<h3 style="margin-top: 20px;">2단계: 신청서 작성 및 제출</h3>
<table>
<tr><th>항목</th><th>설명</th></tr>
<tr><td>당사자</td><td>채권자(신청인), 채무자(피신청인)</td></tr>
<tr><td>집행권원</td><td>판결문, 조정서, 가처분 결정 등</td></tr>
<tr><td>이행해야 할 의무</td><td>구체적으로 명시</td></tr>
<tr><td>청구 배상금</td><td>월 배상금 또는 총 배상금</td></tr>
<tr><td>청구 사유</td><td>이행하지 않은 이유, 강제 필요성</td></tr>
</table>
<h3 style="margin-top: 20px;">3단계: 채무자 심문 (제262조)</h3>
<p>법원은 간접강제 결정 전에 반드시 채무자의 의견을 들어야 합니다.</p>
<h3 style="margin-top: 20px;">4단계: 간접강제 결정</h3>
<p><strong>결정 내용:</strong></p>
<ul style="margin-left: 20px;">
<li>이행 의무 내용</li>
<li>의무이행기간</li>
<li>배상금 (월 배상금 또는 총액)</li>
</ul>
<h3 style="margin-top: 20px;">5단계: 집행문 부여</h3>
<p>결정 1개월 이내에 신청 필요</p>
<h3 style="margin-top: 20px;">6단계: 금전집행</h3>
<p>급여, 통장, 부동산 압류</p>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">가처분 고지 후 2주가 지났는데 지금 신청하면 안 되나요?</div>
<div class="qna-a">안 됩니다. 정확히 2주(14일) 이내에 신청해야 합니다. 기간 초과 시 신청 불가입니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">판결 받은 지 1년이 지났는데 지금 신청해도 되나요?</div>
<div class="qna-a">예, 됩니다. 판결 집행 시효는 10년입니다. 다만 의무이행기간 경과 후는 불가합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">신청서에 배상금 금액을 제시하지 않아도 되나요?</div>
<div class="qna-a">기재하지 않아도 신청은 가능하지만, 기재하는 것이 좋습니다. 법원이 참고합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">배상금 결정 후 채무자가 내다가 중단했으면?</div>
<div class="qna-a">금전집행(압류)을 계속 진행합니다. 급여, 통장, 부동산을 압류해 회수합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">채무자가 의무를 이행했으면 배상금은?</div>
<div class="qna-a">그 시점부터 추가 배상금은 발생하지 않습니다. 예: 2개월 후 삭제하면 2개월분만 지급.</div>
</div>
<div class="qna-item">
<div class="qna-q">채무자의 급여가 변경되면 배상금도 변경되나요?</div>
<div class="qna-a">네, 변경될 수 있습니다. (민집규 191조) 변경결정은 미래에만 적용되며 소급하지 않습니다.</div>
</div>`
      },
      {
        heading: '참고 판례',
        content: `<div class="ruling-box">
<p><strong>판결절차에서 동시 간접강제 (부작위채무)</strong> - 대판 2014. 5. 29. 2011다31225</p>
</div>
<div class="ruling-box">
<p><strong>판결절차에서 동시 간접강제 (작위채무)</strong> - 대판 2013. 11. 28. 2013다50367</p>
</div>
<div class="ruling-box">
<p><strong>배상금의 법정 제재금 성격</strong> - 대판 2013. 2. 14. 2012다26398</p>
</div>
<div class="ruling-box">
<p><strong>가처분 고지 후 2주 집행기간</strong> - 대결 2010. 12. 30. 2010마985</p>
</div>`
      },
      {
        heading: '주의할 점',
        content: `<div class="warn-box">
<ul style="margin-left: 20px;">
<li>2주 기간: 가처분 고지 후 정확히 2주 내 신청</li>
<li>의무이행기간: 법원 정한 기간 초과 시 추가 청구 불가</li>
<li>채무자 심문: 법원은 반드시 채무자 의견 청취</li>
<li>배상금 현실성: 지나치게 높으면 법원이 감액</li>
<li>집행문 필수: 간접강제 결정만으로는 금전집행 불가</li>
<li>이행과 배상금 독립: 배상금 낸 후에도 원래 의무 이행 필수</li>
</ul>
</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<a href="#" class="next-link">금외집행_03_대체집행_절차형</a>
<a href="#" class="next-link">금외집행_01_부동산인도_절차형</a>
<a href="#" class="next-link">금외집행_05_의사표시집행_절차형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제261조', desc: '간접강제' },
      { name: '민사집행법 제262조', desc: '채무자 심문' },
    ],
    forms: []
  },
  {
    id: 'ef-83',
    title: '간접강제',
    meta: '상대방이 판결을 무시할 때',
    sections: [
      {
        heading: '당신의 상황을 확인해보세요',
        content: `<ul class="checklist">
<li>판결을 받았지만 상대방이 이행하지 않고 있다</li>
<li>상대방이 회계장부나 거래 서류를 공개하지 않는다</li>
<li>인터넷 게시물 삭제 명령을 받아도 상대방이 삭제하지 않는다</li>
<li>명의개서, 전직금지, 접근금지 등의 의무를 이행하지 않는다</li>
<li>물건을 넘겨주지 않거나 비밀을 누설할 위험이 있다</li>
<li>직접 강제(압류, 전자집행)가 가능한지 확실하지 않다</li>
</ul>`
      },
      {
        heading: '핵심 요약',
        content: `<div class="summary-box">
<p><strong>간접강제</strong>는 판결을 무시하는 채무자에게 <strong>배상금이라는 심리적 압박</strong>을 가해 채무 이행을 유도하는 강제 방법입니다.</p>
<p style="margin-top: 12px;"><strong>핵심:</strong> 물건 인도나 금전 지급처럼 "직접 강제"가 불가능한 채무에만 사용됩니다.</p>
<p style="margin-top: 12px;"><strong>보충성:</strong> 먼저 직접강제나 대체집행이 가능한지 확인해야 합니다.</p>
</div>`
      },
      {
        heading: '간접강제가 가능한 채무',
        content: `<ul style="margin-left: 20px;">
<li>회계장부·서류 열람·등사 허용</li>
<li>인터넷 게시물 삭제</li>
<li>명의개서 절차 이행</li>
<li>전직금지·경업금지의무</li>
<li>비밀누설금지의무</li>
<li>접근금지의무</li>
<li>특허권·저작권 침해금지</li>
<li>공사금지, 방송금지의무</li>
</ul>`
      },
      {
        heading: '간접강제가 불가능한 채무',
        content: `<ul style="margin-left: 20px;">
<li>특정물 인도 (원칙적 불허)</li>
<li>부부 동거의무 (대판 2009. 7. 23.)</li>
<li>혼인의무</li>
<li>예술·학문적 창작</li>
<li>제3자 협력이 필수인 경우</li>
</ul>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">간접강제 결정을 받으려면 집행권원이 있어야 하나요?</div>
<div class="qna-a">네, 반드시 필요합니다. 확정 판결, 조정, 중재판정 등 집행권원이 있어야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">판결받은 지 오래되었는데 지금 간접강제를 신청해도 되나요?</div>
<div class="qna-a">예, 됩니다. 다만 의무이행기간 경과 후에는 신청할 수 없습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">가처분 결정을 받았는데 간접강제도 신청할 수 있나요?</div>
<div class="qna-a">예, 가능합니다. 채권자 고지 후 2주 이내에 신청해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">배상금이 얼마나 되나요?</div>
<div class="qna-a">법원이 재량으로 정합니다. 채무의 성격, 위반 정도, 채무자의 경제 능력 등을 고려합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">배상금과 채무 이행의 관계는?</div>
<div class="qna-a">독립적입니다. 배상금을 내도 원래 의무는 계속 이행해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">간접강제와 직접강제의 차이는?</div>
<div class="qna-a">직접강제는 금전 지급(압류), 간접강제는 배상금으로 압박합니다.</div>
</div>`
      },
      {
        heading: '참고 판례',
        content: `<div class="ruling-box">
<p><strong>특정물 인도의 간접강제 불허</strong> - 대결 2012. 1. 27. 2010마1850</p>
<p style="margin-top: 10px;">특정물 인도는 간접강제 불가입니다.</p>
</div>
<div class="ruling-box">
<p><strong>배상금의 법정 제재금 성격</strong> - 대판 2013. 2. 14. 2012다26398</p>
<p style="margin-top: 10px;">배상금은 법정 제재금과 손해배상 성격을 함께 지닙니다.</p>
</div>
<div class="ruling-box">
<p><strong>부부 동거의무의 간접강제 불허</strong> - 대판 2009. 7. 23. 2009다32454</p>
<p style="margin-top: 10px;">부부 동거의무는 간접강제 불가입니다.</p>
</div>`
      },
      {
        heading: '주의할 점',
        content: `<div class="warn-box">
<ul style="margin-left: 20px;">
<li>보충성 원칙 확인</li>
<li>배상금은 현실적 수준</li>
<li>의무이행기간 내 이행 필수</li>
<li>가처분 2주 기한 주의</li>
<li>배상금과 의무 이행 독립</li>
</ul>
</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<a href="#" class="next-link">금외집행_03_대체집행_판단형</a>
<a href="#" class="next-link">금외집행_05_의사표시집행_판단형</a>
<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제261조', desc: '간접강제' },
    ],
    forms: []
  },
  {
    id: 'ef-84',
    title: '간접강제 완전 가이드',
    meta: '대상 판단부터 배상금 회수까지',
    sections: [
      {
        heading: '당신의 상황을 확인해보세요',
        content: `<ul class="checklist">
<li>판결을 받았지만 상대방이 여전히 이행하지 않는다</li>
<li>내가 청구한 채무가 간접강제 가능한지 확실하지 않다</li>
<li>직접강제와 간접강제 중 어느 것이 유리한지 모르겠다</li>
<li>가처분을 받고 동시에 간접강제를 신청하려고 한다</li>
<li>배상금을 얼마로 청구하는 것이 가장 효과적인지 알고 싶다</li>
<li>배상금을 받은 후 채무자가 의무를 이행했을 때 처리 방법이 궁금하다</li>
</ul>`
      },
      {
        heading: '핵심 요약',
        content: `<div class="summary-box">
<p><strong>간접강제의 3단계 전략:</strong></p>
<p style="margin-top: 12px;">1단계 - 판단: 나의 채무가 간접강제 대상인가?</p>
<p style="margin-top: 12px;">2단계 - 신청: 판결 후 별도 신청 vs 가처분 동시 신청</p>
<p style="margin-top: 12px;">3단계 - 회수: 배상금 결정 후 금전집행으로 강제 회수</p>
<p style="margin-top: 12px;"><strong>핵심:</strong> 배상금은 "심리적 압박" 수단입니다.</p>
</div>`
      },
      {
        heading: '1단계: 간접강제 가능 여부 판단',
        content: `<h3>내 채무가 간접강제 대상인가?</h3>
<h3 style="margin-top: 20px; font-size: 16px; color: #2d4a7a;">OK 간접강제 가능한 채무</h3>
<ul style="margin-left: 20px;">
<li>회계장부·거래서류 열람</li>
<li>인터넷 게시물 삭제</li>
<li>명의개서 절차</li>
<li>전직·경업금지</li>
<li>비밀누설금지</li>
<li>접근금지</li>
<li>권리침해금지</li>
<li>부작위채무</li>
</ul>
<h3 style="margin-top: 24px; font-size: 16px; color: #c05000;">NO 간접강제 불가능한 채무</h3>
<ul style="margin-left: 20px;">
<li>특정물 인도 (원칙 불허)</li>
<li>부부 동거의무</li>
<li>혼인의무</li>
<li>예술·학문 창작</li>
<li>제3자 협력이 필수인 경우</li>
</ul>
<h3 style="margin-top: 24px;">보충성의 원칙 확인</h3>
<div class="case-box">
<p><strong>중요:</strong> 직접강제나 대체집행이 가능하면 간접강제 신청 불가</p>
<p style="margin-top: 10px;">예: 금전 지급은 압류로 직접강제 가능 → 간접강제 불가</p>
<p style="margin-top: 8px;">예: 회계장부 열람은 상대방 협력 필수 → 간접강제 가능</p>
</div>`
      },
      {
        heading: '2단계: 간접강제 신청 절차',
        content: `<h3>신청 시기 선택</h3>
<p><strong>선택지 1: 판결 후 별도 신청 (일반적)</strong></p>
<ul style="margin-left: 20px;">
<li>판결이 확정되면 언제든 신청 가능</li>
<li>충분히 검토 후 신청 가능</li>
<li>배상금 규모를 신중하게 결정</li>
</ul>
<p style="margin-top: 16px;"><strong>선택지 2: 가처분 고지 후 2주 내 신청 (신속)</strong></p>
<ul style="margin-left: 20px;">
<li>기한: 채권자 고지 후 정확히 2주(14일)</li>
<li>신속한 심리적 압박 가능</li>
<li>채무자가 성실히 이행하면 집행기간 정지</li>
</ul>
<div class="warn-box">
<p style="margin: 0;"><strong>주의: 가처분 2주 기한</strong> 이 기간을 놓치면 신청 불가능합니다.</p>
</div>
<h3 style="margin-top: 24px;">신청 절차 흐름도</h3>
<table>
<tr><th>단계</th><th>내용</th><th>소요 기간</th></tr>
<tr><td>1. 신청서 제출</td><td>집행권원, 배상금 근거 제출 (인지 2,000원)</td><td>1일</td></tr>
<tr><td>2. 채무자 심문</td><td>법원이 채무자 의견 청취 (필수)</td><td>1~2주</td></tr>
<tr><td>3. 간접강제 결정</td><td>배상금 결정</td><td>즉시</td></tr>
<tr><td>4. 집행문 부여</td><td>결정 후 1개월 내 신청 (필수)</td><td>2~3일</td></tr>
<tr><td>5. 금전집행</td><td>급여, 통장, 부동산 압류</td><td>수일~수주</td></tr>
</table>`
      },
      {
        heading: '3단계: 배상금 산정 전략',
        content: `<h3>배상금 설정의 핵심</h3>
<p>배상금은 "심리적 압박"의 수단입니다. 너무 높으면 법원이 감액하고, 너무 낮으면 효과가 떨어집니다.</p>
<h3 style="margin-top: 20px;">배상금 산정 기준</h3>
<ul style="margin-left: 20px;">
<li>채무의 성격: 간단한 의무 vs 복잡한 의무</li>
<li>이행 거절의 정도</li>
<li>채무자의 경제력</li>
<li>채권자의 실제 손해</li>
<li>이행 시간</li>
<li>유사 판례의 배상금 수준</li>
</ul>
<h3 style="margin-top: 24px;">배상금 수준 (참고)</h3>
<ul style="margin-left: 20px;">
<li>경미한 위반: 월 30만~100만 원</li>
<li>중간 수준: 월 100만~300만 원</li>
<li>심각한 침해: 월 300만~1,000만 원 이상</li>
</ul>`
      },
      {
        heading: '가처분 동시 신청의 장점',
        content: `<table>
<tr><th>구분</th><th>판결 후 별도 신청</th><th>가처분 + 2주 내 신청</th></tr>
<tr><td>소요 기간</td><td>최소 6개월 이상</td><td>최소 2주</td></tr>
<tr><td>채무자 반응</td><td>판결 무시 상태</td><td>배상금 위협으로 빨리 이행</td></tr>
<tr><td>강제 효과</td><td>중간 정도</td><td>매우 강함 (신속성)</td></tr>
</table>`
      },
      {
        heading: '배상금 회수 전략',
        content: `<h3>강제집행의 3가지 방법</h3>
<ol style="margin-left: 20px;">
<li>급여 압류: 가장 효과적 (월급의 1/2 한도)</li>
<li>통장 압류: 가장 빠름 (수일 내)</li>
<li>부동산 압류: 강력함 (매매 시 강제 판매)</li>
</ol>
<h3 style="margin-top: 24px;">배상금 받은 후 채무자가 이행했을 때</h3>
<p>배상금과 원래 의무는 독립적입니다:</p>
<ul style="margin-left: 20px;">
<li>예: "3개월 내 게시물 삭제, 월 100만 원"</li>
<li>채무자가 2개월 후 삭제 → 2개월분 배상금만 청구</li>
<li>배상금을 받아도 원래 의무는 이행되어야 함</li>
</ul>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">내 채무가 간접강제 대상인지 확실하지 않으면?</div>
<div class="qna-a">법무사와 상담하세요. 채무의 성격, 보충성 원칙 등을 분석하면 판단 가능합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">배상금을 너무 높게 청구하면?</div>
<div class="qna-a">법원이 감액합니다. 현실성, 채무 성격, 채무자 경제력 등을 고려해 결정합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">배상금을 낸 후 원래 의무를 이행하지 않으면?</div>
<div class="qna-a">계속 배상금 압박이 가능합니다. 배상금과 의무 이행은 독립적입니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">특정물 인도는 정말 간접강제가 안 되나요?</div>
<div class="qna-a">원칙적으로 안 됩니다. 대신 대체집행 또는 직접강제를 고려하세요.</div>
</div>
<div class="qna-item">
<div class="qna-q">가처분 동시 신청의 핵심은?</div>
<div class="qna-a">정확히 2주(14일) 내 신청, 의무이행기간 경과 후 불가, 성실 이행 시 집행기간 정지</div>
</div>
<div class="qna-item">
<div class="qna-q">배상금 회수 비용이 많이 드나요?</div>
<div class="qna-a">금전집행은 법원이 주도합니다. 수수료가 있지만 회수액에 비해 충분한 가치가 있습니다.</div>
</div>`
      },
      {
        heading: '참고 판례',
        content: `<div class="ruling-box">
<p><strong>보충성 원칙</strong> - 대결 2012. 1. 27. 2010마1850</p>
</div>
<div class="ruling-box">
<p><strong>판결절차에서 동시 간접강제</strong> - 대판 2013. 11. 28., 대판 2014. 5. 29.</p>
</div>
<div class="ruling-box">
<p><strong>배상금은 법정 제재금</strong> - 대판 2013. 2. 14. 2012다26398</p>
</div>
<div class="ruling-box">
<p><strong>의무이행기간 경과 후 불가</strong> - 대결 2016. 3. 15. 2015마1578</p>
</div>
<div class="ruling-box">
<p><strong>부부 동거의무 불가</strong> - 대판 2009. 7. 23. 2009다32454</p>
</div>`
      },
      {
        heading: '주의할 점',
        content: `<div class="warn-box">
<ul style="margin-left: 20px;">
<li>보충성 확인: 먼저 직접강제나 대체집행이 가능한지 확인</li>
<li>2주 기한: 가처분 고지 후 정확히 2주 내에 신청</li>
<li>의무이행기간: 법원 정한 기간 초과 후 추가 청구 불가</li>
<li>배상금과 이행의 독립성: 배상금과 의무 이행은 별개</li>
<li>현실적 배상금: 채무자 경제력을 고려한 설정</li>
<li>집행문 필수: 간접강제 결정만으로는 금전집행 불가</li>
<li>채무자 심문: 법원은 반드시 채무자의 의견을 청취</li>
</ul>
</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<a href="#" class="next-link">금외집행_03_대체집행_판단형</a>
<a href="#" class="next-link">금외집행_05_의사표시집행_판단형</a>
<a href="#" class="next-link">금외집행_01_부동산인도_판단형</a>`
      }
    ],
    laws: [
      { name: '민사집행법 제261조', desc: '간접강제' },
      { name: '민사집행법 제262조', desc: '채무자 심문' },
    ],
    forms: []
  },
  {
    id: 'ef-85',
    title: '의사표시 집행 절차 — 등기이전 판결 이후 실제 등기까지의 단계',
    meta: '판결이 확정된 후 무조건부와 조건부로 나눠 등기를 신청하는 절차를 단계별로 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>판결은 받았는데 다음 단계가 뭔지 모름</li>
<li>판결이 확정되었을 때 먼저 해야 할 일이 뭔가?</li>
<li>집행문이 필요한지, 어떻게 받는지 궁금함</li>
<li>등기소에 가서 뭘 제출해야 하는지 알고 싶음</li>
<li>서류를 정확히 어떻게 준비해야 하는지 알고 싶음</li>
<li>조건부 판결인데 어떤 절차가 필요한지 궁금함</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
<strong>의사표시 집행 절차는 두 가지로 나뉩니다</strong><br>
판결이 조건부인지 무조건부인지에 따라 다릅니다.
무조건부라면 판결 확정 후 바로 등기신청, 조건부라면 집행문 부여를 받은 후 등기신청합니다.
</div>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 무조건부 의사표시 집행 절차</h3>
<div class="summary-box">
<strong>가장 간단한 경로: 판결 확정 → 등기신청 완료</strong><br>
조건이 없으면 집행문이 불필요합니다.
</div>
<div class="case-box">
<strong>【무조건부 판결의 절차】</strong><br>
<ol style="margin: 10px 0 0 20px;">
<li style="margin-bottom: 8px;"><strong>판결 확정까지 기다리기</strong><br><span style="font-size:14px;color:#666;">⏱ 1심 판결 → 항소기간(2주) → 2심 판결 → 상고기간(2주) → 판결 확정</span></li>
<li style="margin-bottom: 8px;"><strong>판결정본 · 확정증명서 발급받기</strong><br><span style="font-size:14px;color:#666;">판결한 법원에 신청 (방문, 인터넷 민원 이용 가능)</span></li>
<li style="margin-bottom: 8px;"><strong>부동산등기소에 등기신청</strong><br><span style="font-size:14px;color:#666;">필요 서류: 판결정본 + 확정증명서 + 신청서 + 신분증</span></li>
<li><strong>등기 완료</strong><br><span style="font-size:14px;color:#666;">보통 1~3일 후 등기 완료</span></li>
</ol>
</div>
<h3>2. 조건부 의사표시 집행 절차</h3>
<div class="summary-box">
<strong>집행문이 필수인 경로: 판결 확정 → 집행문 부여 → 등기신청</strong><br>
반대급부(예: 잔금 지급) 같은 조건이 있을 때입니다.
</div>
<div class="case-box">
<strong>【조건부 판결의 절차】</strong><br>
<ol style="margin: 10px 0 0 20px;">
<li style="margin-bottom: 8px;"><strong>판결 확정</strong></li>
<li style="margin-bottom: 8px;"><strong>조건 충족 증명 자료 준비</strong><br><span style="font-size:14px;color:#666;">예: 잔금 지급 증거(통장 입금 증명, 영수증 등)</span></li>
<li style="margin-bottom: 8px;"><strong>집행관에게 집행문 부여 신청</strong><br><span style="font-size:14px;color:#666;">필요 서류: 판결정본 + 확정증명서 + 조건충족 증명 자료</span></li>
<li style="margin-bottom: 8px;"><strong>집행문 받기</strong><br><span style="font-size:14px;color:#666;">⏱ 신청 후 보통 1~3일 소요</span></li>
<li style="margin-bottom: 8px;"><strong>부동산등기소에 등기신청</strong><br><span style="font-size:14px;color:#666;">필요 서류: 판결정본 + 확정증명서 + 집행문 부여증 + 신청서</span></li>
<li><strong>등기 완료</strong></li>
</ol>
</div>
<h3>3. 등기신청 필요 서류 (소유권이전등기 기준)</h3>
<table>
<thead><tr><th>서류</th><th>설명</th><th>무조건부</th><th>조건부</th></tr></thead>
<tbody>
<tr><td>판결정본</td><td>판결을 정본으로 발급받은 것</td><td>필수</td><td>필수</td></tr>
<tr><td>확정증명서</td><td>판결이 확정되었음을 증명하는 서류</td><td>필수</td><td>필수</td></tr>
<tr><td>집행문 부여증</td><td>집행관이 발급한 집행문 부여 증명</td><td>불필요</td><td><strong>필수</strong></td></tr>
<tr><td>등기신청서</td><td>등기소 서식에 따라 작성</td><td>필수</td><td>필수</td></tr>
<tr><td>신분증</td><td>신청자의 신분 확인용</td><td>필수</td><td>필수</td></tr>
<tr><td>인감도장 · 인감증명</td><td>법원 판결의 경우 불필요 (부동산등기법 제23조 제4항)</td><td>불필요</td><td>불필요</td></tr>
</tbody>
</table>
<h3>4. 판결정본 · 확정증명서 발급받기</h3>
<div class="case-box">
<strong>어디서 받는가?</strong> 판결한 법원<br>
<strong>어떻게 받는가?</strong><br>
① 방문: 법원의 민원실에 가서 신청<br>
② 인터넷: 대법원 전자민원시스템<br>
③ 우편: 신청서를 우편으로 보내기<br>
<strong>수수료:</strong> 각 1,000원 | <strong>소요 기간:</strong> 보통 1~2일
</div>
<h3>5. 집행문 부여받기 (조건부만 해당)</h3>
<div class="case-box">
<strong>어디서 받는가?</strong> 판결한 법원의 집행관<br>
<strong>필요 서류:</strong> 판결정본, 확정증명서, 조건 충족 증명 자료<br>
<strong>수수료:</strong> 보통 5,000~10,000원 | <strong>소요 기간:</strong> 1~3일
</div>
<h3>6. 가집행선고부 판결과의 차이</h3>
<div class="warn-box">
<strong>⚠ 중요:</strong> 가집행선고가 있는 판결이라도 의사표시 집행(등기)에는 집행력이 없습니다.<br>
반드시 <strong>판결이 최종 확정</strong>되어야만 등기신청이 가능합니다.
</div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
<div class="qna-q">판결정본과 판결등본이 뭐가 다른가요?</div>
<div class="qna-a"><strong>판결정본:</strong> 판사의 서명과 도장이 있는 원본의 사본 (등기신청에 필요)<br><strong>판결등본:</strong> 공증된 사본 (일반적 확인용). 등기신청할 때는 반드시 <strong>판결정본</strong>을 가져가야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">확정증명서를 꼭 받아야 하나요?</div>
<div class="qna-a">네, 반드시 받아야 합니다. 등기소는 확정증명서를 통해 판결이 최종 확정되었다는 것을 확인합니다. 확정증명서 없으면 등기신청이 반려됩니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">집행문을 받는 데 얼마나 걸리나요?</div>
<div class="qna-a">보통 1~3일 소요됩니다. 법원 업무량이 많을 때는 더 걸릴 수 있으므로, 미리 전화로 확인한 후 가는 것이 좋습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">조건부 판결에서 잔금 지급을 증명하려면 뭘 가져가야 하나요?</div>
<div class="qna-a">통장 입금 기록, 입금 영수증, 계약금 영수증, 상대방의 확인 서명 중 하나 이상이 필요합니다. 가장 확실한 것은 통장 입금 기록입니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">등기신청을 대리인을 보내도 되나요?</div>
<div class="qna-a">판결에 의한 등기신청은 대리인도 가능합니다. 다만 대리인에게는 위임장이 필요할 수 있으니 미리 등기소에 확인하는 것이 좋습니다.</div>
</div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
<strong>의사표시 집행 절차의 법적 근거</strong><br>
<strong>민사집행법 제263조</strong>에서 정한 의사표시 집행은 <strong>판결이 확정되는 것만으로 집행이 완료</strong>되는 매우 특수한 집행 형태입니다. 판결이 확정된 이후에는 상대방의 협조 없이도 단독으로 등기신청이 가능합니다. 이는 의사표시 자체가 이미 법원 판결에 의해 대체되었기 때문입니다.
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><strong>⚡ 항소·상고 기간을 정확히 알아야 합니다</strong><br>판결을 받았다고 바로 확정이 아닙니다. 상대방이 항소·상고할 수 있는 기간(각 2주)이 지나야 판결이 확정됩니다. 법원에 확인 후 확정증명서를 신청하세요.</div>
<div class="warn-box"><strong>⚡ 등기신청 서류는 완벽하게 준비하세요</strong><br>부동산등기규칙 제46조를 참고하여 필요한 서류를 정확히 챙기세요. 서류가 부족하면 신청이 반려됩니다. 미리 등기소에 전화해서 확인하는 것이 가장 안전합니다.</div>
<div class="warn-box"><strong>⚡ 조건부 판결이라면 집행문을 빠뜨리지 마세요</strong><br>판결에 "~과 동시에"라는 조건이 있으면 반드시 집행문을 받아야 합니다. 집행문 없이 등기신청하면 반려됩니다.</div>
<div class="warn-box"><strong>⚡ 등기신청은 확정 후 가능한 한 빨리 하세요</strong><br>상대방이 제3자와 거래하거나 다른 권리자가 등기하는 것을 방지하려면 최대한 빨리 신청하세요.</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
<a href="#">의사표시 집행 — 판단형</a>
<a href="#">부동산인도 집행 — 절차형</a>
<a href="#">간접강제 — 절차형</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제263조', desc: '의사표시 집행 — 판결 확정으로 의사표시 간주' },
      { name: '부동산등기법 제23조 제4항', desc: '판결에 의한 단독 등기신청' },
      { name: '부동산등기규칙 제46조', desc: '등기신청 첨부 서류' },
    ],
    forms: []
  },
  {
    id: 'ef-86',
    title: '의사표시 집행 — 등기이전 판결 받았는데 상대방이 안 해준다면',
    meta: '판결 확정만으로 상대방의 협조 없이 등기가 가능한 의사표시 집행의 개념과 적용 대상을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>매도인이 소유권이전등기를 해주지 않음</li>
<li>증여자가 부동산 명의이전 등기를 거부함</li>
<li>전 소유자가 말소등기에 협조하지 않음</li>
<li>채무자가 근저당권 설정을 거부함</li>
<li>상대방이 등기 관련 의사표시를 하지 않음</li>
<li>판결은 받았는데 상대방이 안 움직임</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
<strong>의사표시 집행이란?</strong><br>
판결이 확정되면, 상대방의 동의 없이도 그 판결 자체가 의사표시(등기 신청 등)를 대신하는 것입니다. 법원 강제집행이 아닌 법원 판결만으로 집행이 완료되므로, 가장 간편하고 빠른 집행 방법입니다.
</div>
<p><strong>민법 제389조 제2항</strong>에서는 "채무가 법률행위를 목적으로 한 때, 의사표시에 갈음할 재판"을 인정하고, <strong>민사집행법 제263조</strong>는 이를 구체화하여 판결이 확정되면 의사표시가 있는 것으로 간주합니다.</p>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 의사표시 집행의 특징</h3>
<div class="summary-box">
<strong>다른 집행과의 차이점</strong><br>
<ul style="margin-top:10px;list-style-position:inside;">
<li style="margin-bottom:6px;"><strong>강제집행 불필요:</strong> 집행관이 나가서 강제로 이행하지 않음</li>
<li style="margin-bottom:6px;"><strong>비용 저감:</strong> 집행관 수수료, 강제집행 관련 비용이 없음</li>
<li style="margin-bottom:6px;"><strong>신속한 처리:</strong> 판결 확정 후 등기소에 바로 신청 가능</li>
<li><strong>확정의 중요성:</strong> 가집행선고부 판결로는 의사표시 집행이 불가능</li>
</ul>
</div>
<h3>2. 의사표시 집행의 적용 대상</h3>
<table>
<thead><tr><th>의사표시 채무 종류</th><th>구체적 예시</th></tr></thead>
<tbody>
<tr><td><strong>소유권이전등기 의무</strong></td><td>매매, 증여, 상속 후 협의 불이행으로 인한 등기</td></tr>
<tr><td>근저당권설정등기 의무</td><td>금전채무에 담보로 근저당권 설정</td></tr>
<tr><td>전세권설정등기 의무</td><td>전세 계약 후 전세권 설정</td></tr>
<tr><td>임차권등기 의무</td><td>월세·임차권 등기</td></tr>
<tr><td>법인 임원 변경등기 의무</td><td>법인 대표자 변경 결정 후 등기</td></tr>
<tr><td>계약 해제·해지의 의사표시</td><td>계약의 해제·해지 통지</td></tr>
<tr><td>승낙의 의사표시</td><td>특정 계약에 대한 승낙 의사</td></tr>
</tbody>
</table>
<h3>3. 무조건부 vs 조건부 — 집행문 부여 여부</h3>
<div class="summary-box">
<strong>민사집행법 제263조 제1항 (무조건부)</strong><br>
"판결이 확정된 때에는 의사표시가 있은 것으로 본다" → 판결정본 + 확정증명서만으로 등기 가능
</div>
<div class="summary-box">
<strong>민사집행법 제263조 제2항 (조건부)</strong><br>
"다른 사실에 관련된" 조건부 의사표시 → 조건 성취 증명 후 집행문 부여 필요<br>
예: "피고는 원고로부터 잔금 수령과 동시에 소유권이전등기를 한다"
</div>
<h3>4. 등기 신청의 실무</h3>
<ul style="margin:10px 0 20px 20px;">
<li style="margin-bottom:10px;"><strong>무조건부 판결:</strong> 판결정본 + 확정증명서 → 단독 신청 가능 (부동산등기법 제23조 제4항)</li>
<li style="margin-bottom:10px;"><strong>조건부 판결:</strong> 판결정본 + 확정증명서 + 집행문 부여증 + 반대급부 이행 증명서류</li>
<li><strong>서류 첨부:</strong> 부동산등기규칙 제46조 참조</li>
</ul>
<h3>5. 가집행선고부 판결의 한계</h3>
<div class="warn-box">
<strong>주의:</strong> 가집행선고부 판결도 의사표시 집행에서는 집행력이 없습니다.<br>
반드시 <strong>판결이 확정</strong>되어야만 등기신청이 가능합니다.
</div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
<div class="qna-q">의사표시 집행은 다른 채무에는 쓸 수 없나요?</div>
<div class="qna-a">그렇습니다. 의사표시 집행은 <strong>법률행위를 목적으로 하는 의사표시</strong>에만 적용됩니다. 금전 채무, 동산인도 등은 일반 강제집행이 필요합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">판결이 확정되면 등기소가 자동으로 해주나요?</div>
<div class="qna-a">아닙니다. 실제 등기 신청은 <strong>채권자(이긴 쪽)가 직접</strong> 등기소에 신청해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">집행문이 뭔가요?</div>
<div class="qna-a">집행문은 <strong>조건부 의사표시</strong>인 경우에만 필요한 서류입니다. 조건이 성취되었음을 증명하고 집행관을 통해 집행 가능하다는 인정을 받는 절차입니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">가집행선고부 판결로 먼저 등기할 수 있나요?</div>
<div class="qna-a"><strong>절대 불가능합니다.</strong> 의사표시 집행은 <strong>판결이 완전히 확정</strong>되어야만 가능합니다. 항소심, 상고심을 거쳐 판결이 최종 확정될 때까지 기다려야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">상대방이 등기를 방해하면 어떻게 하나요?</div>
<div class="qna-a">의사표시 집행은 <strong>상대방의 협조가 필요 없습니다.</strong> 판결이 확정되면 채권자가 판결정본과 확정증명서만 가지고 단독으로 등기신청이 가능합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">의사표시 집행에서도 채무자 재산을 조사해야 하나요?</div>
<div class="qna-a">아닙니다. 의사표시 집행은 <strong>채무자의 재산 상태와 무관</strong>합니다. 부동산 등기 같은 경우는 의사표시 자체가 채무이기 때문입니다.</div>
</div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
<strong>의사표시 집행의 핵심 원리</strong><br>
의사표시 집행은 집행기관의 강제력이 아닌, 판결 확정 자체의 법적 효력으로 성립합니다. 판결 확정만으로 의사표시가 있는 것으로 간주되므로 법적 효과가 발생합니다. 이는 민법 제389조 제2항의 취지를 구현한 것입니다.
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><strong>⚡ 가장 흔한 실수: 가집행으로는 등기가 안 됩니다</strong><br>등기는 <strong>판결이 최종 확정</strong>되어야만 가능합니다. 항소기간, 상고기간을 모두 지나 판결이 확정된 후에 등기신청을 하세요.</div>
<div class="warn-box"><strong>⚡ 조건부 판결은 집행문이 필수입니다</strong><br>잔금 지급 조건이 있는 판결은 반드시 집행관을 통해 <strong>집행문</strong>을 받아야 합니다.</div>
<div class="warn-box"><strong>⚡ 필요한 서류를 정확히 챙기세요</strong><br>판결정본, 확정증명서, 필요시 집행문을 정확히 챙겨서 등기소에 가세요.</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
<a href="#">부동산인도 집행 — 판단형</a>
<a href="#">대체집행 — 판단형</a>
<a href="#">간접강제 — 판단형</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제263조', desc: '의사표시 집행 — 판결 확정으로 의사표시 간주' },
      { name: '민법 제389조 제2항', desc: '의사표시에 갈음할 재판' },
      { name: '부동산등기법 제23조 제4항', desc: '판결에 의한 단독 등기신청' },
    ],
    forms: []
  },
  {
    id: 'ef-87',
    title: '의사표시 집행 완전 가이드 — 판결로 등기를 직접 받는 방법',
    meta: '의사표시 집행의 판단부터 절차, 실무까지 한 번에 정리한 완전 가이드입니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<ul class="checklist">
<li>소유권이전등기 판결을 받았는데 어떻게 진행해야 하는가?</li>
<li>판결이 조건부인지 무조건부인지 알 수 없음</li>
<li>집행문이 뭔지, 왜 필요한지 모름</li>
<li>등기신청을 직접 하려고 하는데 어디서부터 시작할지 모름</li>
<li>기간 제한이 있는지, 놓치면 어떻게 되는지 알고 싶음</li>
<li>가집행선고부 판결로 미리 등기할 수 없다는 것을 알았는데 왜 그런지 알고 싶음</li>
</ul>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
<strong>의사표시 집행의 핵심</strong><br>
판결 확정 = 의사표시 완료. 상대방의 협조 없이 판결 확정만으로 등기가 가능합니다. 법원 판결 자체가 "등기하라"는 상대방의 의사를 대신하기 때문입니다.
</div>
<p style="margin-top:16px;"><strong>민법 제389조 제2항</strong>과 <strong>민사집행법 제263조</strong>에서 인정하는 가장 강력한 집행 방법입니다. 강제집행이 아니라 <strong>판결 자체의 법적 효력</strong>이므로, 상대방이 협조하지 않아도, 재산이 없어도 관계없습니다.</p>`
      },
      {
        heading: '상세설명',
        content: `<h3>1. 의사표시 집행 대상 판단</h3>
<div class="summary-box">
<strong>의사표시 집행이 가능한 경우:</strong><br>
소유권이전등기 의무, 근저당권설정등기 의무, 전세권·임차권 등기 의무, 법인 임원 변경등기 의무, 계약 해제·해지의 의사표시
</div>
<div class="warn-box">
<strong>의사표시 집행이 불가능한 경우:</strong><br>
금전 채무(일반 강제집행), 동산인도(동산 집행), 작위 의무(간접강제·대체집행), 부동산 인도(강제집행)
</div>
<h3>2. 판결의 성질 판단: 무조건부 vs 조건부</h3>
<div class="case-box">
<strong>판결문을 읽고 다음을 확인하세요:</strong><br>
"피고는 원고에게 부동산 ○○의 소유권이전등기를 해야 한다" → 조건 없음 = <strong>무조건부</strong><br>
"피고는 원고로부터 잔금 수령과 동시에 소유권이전등기를 해야 한다" → "~과 동시에" = <strong>조건부</strong>
</div>
<h3>3. 무조건부 의사표시 집행 절차</h3>
<table>
<thead><tr><th>순서</th><th>절차</th><th>필요 서류</th><th>소요 시간</th></tr></thead>
<tbody>
<tr><td><strong>1단계</strong></td><td>판결 확정 대기</td><td>-</td><td>항소 2주 + 상고 2주</td></tr>
<tr><td><strong>2단계</strong></td><td>판결정본 · 확정증명서 발급</td><td>신청서, 신분증</td><td>1~2일</td></tr>
<tr><td><strong>3단계</strong></td><td>등기소에 등기신청</td><td>판결정본, 확정증명서, 신청서</td><td>1~3일</td></tr>
<tr><td><strong>4단계</strong></td><td>등기 완료</td><td>-</td><td>즉시</td></tr>
</tbody>
</table>
<h3>4. 조건부 의사표시 집행 절차</h3>
<table>
<thead><tr><th>순서</th><th>절차</th><th>필요 서류</th><th>소요 시간</th></tr></thead>
<tbody>
<tr><td><strong>1단계</strong></td><td>판결 확정</td><td>-</td><td>항소 2주 + 상고 2주</td></tr>
<tr><td><strong>2단계</strong></td><td>판결정본 · 확정증명서 발급</td><td>신청서, 신분증</td><td>1~2일</td></tr>
<tr><td><strong>3단계</strong></td><td>조건 충족 증명</td><td>잔금 지급 증명 등</td><td>즉시</td></tr>
<tr><td><strong>4단계</strong></td><td>집행관에게 집행문 신청</td><td>판결정본, 확정증명서, 조건충족증명</td><td>1~3일</td></tr>
<tr><td><strong>5단계</strong></td><td>등기소에 등기신청</td><td>판결정본, 확정증명서, 집행문, 신청서</td><td>1~3일</td></tr>
<tr><td><strong>6단계</strong></td><td>등기 완료</td><td>-</td><td>즉시</td></tr>
</tbody>
</table>
<h3>5. 소유권이전등기 신청 실무</h3>
<div class="case-box">
<strong>신청 방법:</strong><br>
① 방문: 부동산이 소재하는 등기소 방문<br>
② 인터넷: 대법원 등기소 전자신청<br>
③ 우편: 등기신청서 우편 발송<br>
<br>
<strong>필요 서류:</strong> 판결정본, 확정증명서, 집행문(조건부만), 등기신청서, 신분증<br>
<strong>참고법령:</strong> 부동산등기법 제23조 제4항, 부동산등기규칙 제46조
</div>
<h3>6. 가집행선고부 판결 주의</h3>
<div class="warn-box">
<strong>⚠ 가집행선고부 판결은 의사표시 집행에 효력이 없습니다</strong><br>
판결에 "가집행"이라고 써있어도 등기는 판결이 최종 확정될 때까지 할 수 없습니다.
</div>
<h3>7. 의사표시 집행과 가처분의 병행 전략</h3>
<div class="summary-box">
<strong>판결 진행 중 취할 수 있는 조치:</strong><br>
1차: 소송 제기 + 가처분 신청 (부동산 처분금지가처분)<br>
↓<br>
2차: 판결 확정까지 대기 (항소, 상고 진행)<br>
↓<br>
3차: 판결 확정 + 의사표시 집행 (등기신청)
</div>
<h3>8. 주요 기간 제한</h3>
<div class="warn-box">
<strong>반드시 확인해야 할 기간:</strong><br>
<strong>항소 기간:</strong> 판결 선고일로부터 2주<br>
<strong>상고 기간:</strong> 항소 판결 선고일로부터 2주<br>
<strong>재심 청구:</strong> 판결 확정 후 1년
</div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
<div class="qna-q">내 판결이 의사표시 집행 대상인가요?</div>
<div class="qna-a">판결문에 "피고는 원고에게 (부동산 등)의 (등기 등)의 의사표시를 해야 한다"는 표현이 있으면 의사표시 집행입니다. "피고는 원고에게 금 ○○을 지급하라" 같은 표현이면 일반 강제집행이 필요합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">판결이 확정되는 데 얼마나 걸리나요?</div>
<div class="qna-a">1심 판결 후 항소기간 2주, 항소심 판결 후 상고기간 2주가 필요합니다. 아무도 항소나 상고를 하지 않으면 그 기간이 지난 후 판결이 확정됩니다. 최소 1개월 이상 걸립니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">조건부 판결인지 무조건부인지 어떻게 알 수 있나요?</div>
<div class="qna-a">판결문의 주문 부분에 "~과 동시에", "~을 조건으로", "~을 받는 경우"라는 표현이 있으면 조건부입니다. 이런 표현이 없으면 무조건부입니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">등기 신청 전에 꼭 집행문을 받아야 하나요?</div>
<div class="qna-a"><strong>무조건부:</strong> 집행문 불필요. <strong>조건부:</strong> 반드시 필요. 조건부 판결인데 집행문 없이 등기신청하면 반려됩니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">가집행선고가 있으면 판결 전에 등기할 수 없다는 게 왜 그래요?</div>
<div class="qna-a">가집행은 일반 채무에는 효력이 있지만, 의사표시 집행(등기)에는 효력이 없습니다. 등기의 법적 안정성을 보호하기 위한 것입니다. 판결이 되돌려질 수 있는 상태에서는 등기가 불가능합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">등기 신청서는 어디서 얻나요?</div>
<div class="qna-a">부동산등기소 홈페이지(www.iros.go.kr)에서 다운로드 가능합니다. 또는 해당 등기소 방문 시 서식을 받을 수 있습니다.</div>
</div>`
      },
      {
        heading: '판례 및 법리',
        content: `<div class="ruling-box">
<strong>의사표시 집행의 법적 성질</strong><br>
의사표시 집행은 <strong>강제집행이 아니라 법원 판결의 직접적 효력</strong>입니다. 판결이 확정되면 상대방의 의사표시가 있는 것으로 법적으로 간주되므로, 따로 강제집행 절차가 필요 없습니다. 이는 <strong>민법 제389조 제2항</strong>을 <strong>민사집행법 제263조</strong>에서 구체화한 것입니다. 채권자가 직접 필요한 절차를 진행하면 되고, 채무자가 협조하지 않아도 법적 효력에는 영향이 없습니다.
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box"><strong>⚡ 판결 확정 시점을 놓치지 마세요</strong><br>항소 기간이 지난 후 법원에 <strong>확정증명서</strong>를 신청해야 공식적으로 확정됩니다. 미리 법원에 전화해서 판결의 확정 여부를 확인하세요.</div>
<div class="warn-box"><strong>⚡ 등기신청은 가능한 빨리 하세요</strong><br>상대방이 제3자와 부동산을 거래하거나 다른 채무로 가압류되는 것을 막으려면 최대한 빨리 등기신청을 해야 합니다.</div>
<div class="warn-box"><strong>⚡ 조건부 판결은 조건 증명이 중요합니다</strong><br>잔금을 지급했다면 통장 입금 기록, 영수증 등 <strong>증거</strong>를 꼭 챙기세요. 증거 없이는 집행문을 받을 수 없습니다.</div>
<div class="warn-box"><strong>⚡ 등기신청 서류는 정확히 준비하세요</strong><br>부동산등기규칙 제46조를 참고하고, 미리 등기소에 전화해서 "판결에 의한 소유권이전등기를 신청하려는데 뭐가 필요한가"라고 물어보는 것이 좋습니다.</div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
<a href="#">부동산인도 집행 — 판단형</a>
<a href="#">대체집행 — 판단형</a>
<a href="#">간접강제 — 판단형</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제263조', desc: '의사표시 집행 — 판결 확정으로 의사표시 간주' },
      { name: '민법 제389조 제2항', desc: '의사표시에 갈음할 재판' },
      { name: '부동산등기법 제23조 제4항', desc: '판결에 의한 단독 등기신청' },
      { name: '부동산등기규칙 제46조', desc: '등기신청 첨부 서류' },
    ],
    forms: []
  },
  {
    id: 'ef-88',
    title: '임차인이 나가지 않을 때 — 부동산 명도(인도)집행 절차',
    meta: '계약 종료 후에도 퇴거하지 않는 점유자를 법원 집행으로 내보내는 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>임대차 계약이 종료됐는데 임차인이 퇴거하지 않고 있습니다</li>
<li>명도 소송에서 이겼는데 상대방이 자진 퇴거를 거부합니다</li>
<li>경매로 낙찰받은 부동산에 전 소유자나 점유자가 남아 있습니다</li>
<li>건물을 매수했는데 이전 임차인이 퇴거하지 않아 인도가 안 됩니다</li>
<li>명도 확정판결·조정조서·지급명령이 있는데 집행 방법을 모릅니다</li>
<li>퇴거 요구를 무시하는 점유자를 상대로 강제 조치를 취하고 싶습니다</li>
</ul></div>`
      },
      {
        heading: '부동산 명도집행이란?',
        content: `<div class="summary-box">
<strong>한눈에 보기</strong><br>
▶ 법원의 집행권원(판결문 등)을 받아 집행관이 직접 점유자를 내보내는 절차입니다.<br>
▶ 임차인 명도, 경락 후 인도, 매매 후 인도 등 모든 부동산 점유 이전에 사용됩니다.<br>
▶ 집행에는 반드시 '집행권원 + 집행문 + 송달증명원'이 필요합니다.
</div>
<p>부동산 명도(인도)집행은 <strong>민사집행법 제258조</strong>에 따라 채권자의 신청을 받은 집행관이 직접 부동산에 임하여 점유자를 내보내고 채권자에게 그 부동산을 인도하는 절차입니다.</p>
<p>자력구제(집행권원 없이 직접 잠금장치를 교체하거나 짐을 내놓는 행위 등)는 <strong>형사처벌(주거침입죄, 손괴죄 등)</strong>을 받을 수 있으므로 반드시 법원 집행 절차를 이용해야 합니다.</p>`
      },
      {
        heading: '집행이 가능한지 먼저 확인하세요',
        content: `<div class="summary-box">
<strong>집행 가능 요건</strong><br>
▶ 확정판결, 화해조서, 조정조서, 이행권고결정, 집행증서 중 하나가 있어야 합니다.<br>
▶ 집행문과 송달증명원을 법원에서 발급받아야 합니다.<br>
▶ 경매 낙찰의 경우 매각대금 완납 후 법원의 인도명령을 받을 수 있습니다.
</div>
<h3>집행권원의 종류</h3>
<p>명도집행을 신청하려면 다음 중 하나의 집행권원이 있어야 합니다. (민사집행법 제24조)</p>
<table>
<thead><tr><th>집행권원</th><th>설명</th><th>비고</th></tr></thead>
<tbody>
<tr><td><strong>확정판결</strong></td><td>명도 소송에서 이긴 판결이 확정된 것</td><td>가장 일반적</td></tr>
<tr><td><strong>화해조서·조정조서</strong></td><td>법원 조정·화해가 성립된 조서</td><td>확정판결과 동일한 효력</td></tr>
<tr><td><strong>인도명령</strong></td><td>경매 낙찰 후 법원이 발하는 인도명령</td><td>경락인만 신청 가능</td></tr>
<tr><td><strong>집행증서(공정증서)</strong></td><td>공증을 받은 집행인락 공정증서</td><td>명도 의무 포함된 경우만</td></tr>
</tbody>
</table>
<h3>경매 낙찰자의 인도명령 — 별도 소송 없이 가능</h3>
<p>경매로 부동산을 낙찰받은 경우, 소송 없이 <strong>법원에 인도명령을 신청</strong>할 수 있습니다. (민사집행법 제136조)</p>
<div class="summary-box">
<strong>인도명령 핵심 조건</strong><br>
▶ 신청 기한: 매각대금 완납일로부터 <strong>6개월 이내</strong> 신청해야 합니다.<br>
▶ 대항력 있는 임차인에게는 원칙적으로 인도명령 불가합니다.<br>
▶ 대항력 없는 임차인, 전 소유자, 무단 점유자에게는 인도명령이 가능합니다.
</div>
<div class="warn-box">
<div class="warn-title">⚡ 인도명령 신청 기한 주의</div>
<p>매각대금을 완납한 날로부터 <strong>6개월</strong>이 지나면 인도명령을 신청할 수 없습니다. 이 기간이 지나면 별도로 명도 소송을 제기해야 하므로 시간과 비용이 크게 늘어납니다.</p>
</div>`
      },
      {
        heading: '명도집행 단계별 신청 방법',
        content: `<h3>전체 흐름</h3>
<ol style="margin-left:20px;">
<li style="margin-bottom:12px;"><strong>집행문·송달증명원 발급</strong> — 집행권원(판결문 등) 발급 법원에서 집행문과 송달증명원을 발급받습니다.</li>
<li style="margin-bottom:12px;"><strong>집행관 사무소 방문·신청</strong> — 부동산 소재지를 관할하는 지방법원 집행관 사무소에 명도집행을 신청합니다.</li>
<li style="margin-bottom:12px;"><strong>계고(戒告)</strong> — 집행관이 현장을 방문하여 점유자에게 퇴거를 공식 통보합니다. 통상 1~2주 유예 기간을 줍니다.</li>
<li style="margin-bottom:12px;"><strong>강제 집행</strong> — 계고 기한까지 퇴거하지 않으면 집행관이 다시 방문하여 점유자와 물건을 강제로 퇴거시킵니다.</li>
<li><strong>집행 완료·인도</strong> — 부동산이 채권자에게 인도됩니다.</li>
</ol>
<h3>첨부서류 목록</h3>
<table>
<thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>집행력 있는 정본(판결문 등)</strong></td><td>해당 법원</td><td>집행문이 부기된 것</td></tr>
<tr><td>집행문</td><td>원판결 법원</td><td>단순집행문 또는 조건부집행문 구별</td></tr>
<tr><td>송달증명원</td><td>원판결 법원</td><td>상대방에게 판결이 송달된 증명</td></tr>
<tr><td>부동산 등기사항전부증명서</td><td>등기소</td><td>최신 발급본</td></tr>
<tr><td>채권자 신분증 사본</td><td>—</td><td>법인이면 법인등기사항전부증명서</td></tr>
<tr><td>인도명령 결정문(경매 시)</td><td>경매 진행 법원</td><td>인도명령 신청 후 발급</td></tr>
</tbody>
</table>
<div class="case-box">
<div class="case-title">📋 실제 상담 사례</div>
<p>A씨는 2년간 임대한 오피스텔의 계약이 만료됐으나 임차인 B씨가 퇴거를 거부했습니다. 명도 소송에서 승소 후 집행관에게 명도집행을 신청하였고, 계고 후에도 B씨가 나가지 않자 강제 집행이 실시되어 오피스텔을 돌려받았습니다.</p>
</div>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">명도 소송 없이 바로 집행을 신청할 수 있나요?</div>
<div class="qna-a"><p>집행권원이 이미 있는 경우(판결문, 조정조서, 집행증서 등)에는 바로 집행을 신청할 수 있습니다. 집행권원이 없다면 먼저 명도 소송을 통해 판결을 받아야 합니다. 경매 낙찰자의 경우 인도명령 제도(민사집행법 제136조)를 통해 소송 없이도 집행권원을 취득할 수 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">임차인이 짐을 놔두고 도망갔어요. 짐은 어떻게 하나요?</div>
<div class="qna-a"><p>집행관이 강제 집행을 실시할 때 남겨진 동산은 채권자가 보관하거나 법원이 지정한 창고에 보관됩니다. (민사집행법 제258조 제3항) 점유자가 일정 기간 내에 찾아가지 않으면 법원의 허가를 받아 매각하거나 폐기할 수 있습니다. 임의로 버리거나 처분하면 손해배상 책임이 생길 수 있으므로 반드시 법원 절차를 거쳐야 합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">임차인이 집행 당일 버텨도 강제로 내보낼 수 있나요?</div>
<div class="qna-a"><p>네. 집행관은 저항하는 점유자를 강제로 퇴거시킬 권한이 있습니다. (민사집행법 제5조) 필요한 경우 경찰관의 조력을 요청할 수 있으며, 집행에 저항하는 점유자는 공무집행방해죄로 처벌받을 수 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">명도 판결이 났지만 상대방이 항소했어요. 바로 집행할 수 있나요?</div>
<div class="qna-a"><p>항소가 제기되면 판결이 확정되지 않아 원칙적으로 집행이 불가합니다. 단, 1심 판결에 '가집행선고'가 붙어 있다면 항소 중에도 즉시 강제집행을 신청할 수 있습니다. (민사집행법 제213조)</p></div>
</div>
<div class="qna-item">
<div class="qna-q">상가 임차인도 같은 방법으로 명도집행을 할 수 있나요?</div>
<div class="qna-a"><p>네, 상가건물 임차인에 대한 명도집행도 동일한 절차로 진행됩니다. 다만 상가건물 임대차보호법상 갱신요구권이 있는 임차인의 경우 계약 갱신 거절 사유가 있는지 먼저 확인해야 합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">집행 비용은 어떻게 구성되나요?</div>
<div class="qna-a"><p>명도집행 비용은 집행관 수수료, 인부 비용, 보관료 등으로 구성됩니다. 집행 비용은 원칙적으로 채무자(점유자)에게 청구할 수 있습니다. (민사집행법 제53조)</p></div>
</div>`
      },
      {
        heading: '명도집행 관련 주요 판례',
        content: `<div class="ruling-box">
<div class="ruling-header">점유 보조자에 대한 집행 가능 여부</div>
<p>대법원은 점유자 본인이 아닌 점유 보조자에 대해서도 집행권원에 기한 명도집행이 가능하다고 해석하고 있습니다. 임차인이 다른 사람에게 사용을 허락한 경우에도 집행 대상이 됩니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">경락인의 인도명령과 대항력</div>
<p>대법원은 경매 개시결정 등기 이후에 점유를 시작한 임차인에게는 대항력이 없으므로 경락인의 인도명령 신청이 가능하다고 판시하고 있습니다.</p>
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
<div class="warn-title">⚠️ 자력구제 금지 — 형사 처벌 위험</div>
<p>집행권원 없이 임의로 임차인의 짐을 내놓거나 잠금장치를 교체하는 행위는 주거침입죄·재물손괴죄에 해당할 수 있습니다. 반드시 법원 집행 절차를 이용해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚡ 인도명령 신청 기한 (경매 낙찰자)</div>
<p>경매 낙찰 후 매각대금 완납일로부터 <strong>6개월 이내</strong>에 인도명령을 신청해야 합니다. 이 기한을 놓치면 소송을 새로 제기해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">ℹ️ 집행 전 점유이전금지 가처분 고려</div>
<p>소송 중 임차인이 제3자에게 점유를 넘기면 집행이 어려워질 수 있습니다. 소송 제기와 동시에 '점유이전금지 가처분'을 신청하면 이런 상황을 예방할 수 있습니다.</p>
</div>`
      },
      {
        heading: '다음으로 확인할 내용',
        content: `<div class="next-links">
<a href="#">동산 인도집행 절차</a>
<a href="#">법원 명령을 어기는 상대방 — 간접강제</a>
<a href="#">건물 철거 판결 집행 — 대체집행</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제258조', desc: '부동산 인도집행' },
      { name: '민사집행법 제136조', desc: '경매 낙찰 후 인도명령' },
      { name: '민사집행법 제24조', desc: '집행권원의 종류' },
      { name: '민사집행법 제5조', desc: '집행관의 저항 제압 권한' },
      { name: '민사집행법 제53조', desc: '집행 비용의 채무자 부담' },
    ],
    forms: []
  },
  {
    id: 'ef-89',
    title: '판결을 받았는데 물건을 안 줄 때 — 동산 인도집행 절차',
    meta: '자동차·기계·가구 등 동산을 강제로 돌려받는 법원 집행 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>빌려준 물건(자동차, 기계, 귀중품 등)을 돌려달라는 판결을 받았습니다</li>
<li>상대방이 법원 판결을 무시하고 물건을 계속 점유하고 있습니다</li>
<li>리스·렌탈 계약 종료 후 상대방이 물건 반환을 거부합니다</li>
<li>매매 취소 판결이 났는데 상대방이 물건을 돌려주지 않습니다</li>
<li>물건 인도 조정조서가 있는데 집행 방법을 모릅니다</li>
</ul></div>`
      },
      {
        heading: '동산 인도집행이란?',
        content: `<div class="summary-box">
<strong>한눈에 보기</strong><br>
▶ 자동차·기계·가구 등 '동산(動産)'을 강제로 돌려받는 법원 집행 절차입니다.<br>
▶ 집행관이 직접 현장에서 물건을 채권자에게 인도합니다.<br>
▶ 동산 인도집행은 부동산 명도집행과 달리 '계고' 없이 바로 집행할 수 있습니다.
</div>
<p>동산 인도집행은 <strong>민사집행법 제257조</strong>에 근거합니다. 집행관은 채무자로부터 해당 동산을 빼앗아(탈취하여) 채권자에게 인도하는 방식으로 집행을 완료합니다.</p>
<p>자동차·오토바이·선박(소형)·기계·가전제품·귀금속·유가증권 등 부동산이 아닌 물건 전부가 해당됩니다. 채무자가 물건을 숨기거나 제3자에게 넘기는 경우 집행이 어려워질 수 있어, 집행 전 신속한 신청이 중요합니다.</p>`
      },
      {
        heading: '동산 인도집행 단계별 신청 방법',
        content: `<h3>전체 흐름</h3>
<ol style="margin-left:20px;">
<li style="margin-bottom:12px;"><strong>집행권원 확보</strong> — 확정판결, 조정조서, 화해조서 등 집행권원을 확인합니다.</li>
<li style="margin-bottom:12px;"><strong>집행문·송달증명원 발급</strong> — 원판결 법원에서 집행문과 송달증명원을 발급받습니다.</li>
<li style="margin-bottom:12px;"><strong>집행관 사무소 신청</strong> — 동산 소재지 관할 지방법원 집행관 사무소에 인도집행을 신청합니다.</li>
<li style="margin-bottom:12px;"><strong>물건 소재지 확인·집행</strong> — 집행관이 채무자의 주소·사업장 등을 방문하여 해당 물건을 수색·발견합니다.</li>
<li><strong>채권자에게 인도</strong> — 집행관이 물건을 채권자에게 직접 인도합니다.</li>
</ol>
<div class="warn-box">
<div class="warn-title">ℹ️ 동산 인도집행에는 '계고' 절차가 없습니다</div>
<p>부동산 명도집행과 달리 동산 인도집행은 사전 계고 없이 집행관이 바로 집행할 수 있습니다. (민사집행법 제257조)</p>
</div>
<h3>첨부서류 목록</h3>
<table>
<thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>집행력 있는 정본(판결문 등)</strong></td><td>해당 법원</td><td>집행문이 부기된 것</td></tr>
<tr><td>집행문</td><td>원판결 법원</td><td>인도 대상 물건이 특정되어 있어야 함</td></tr>
<tr><td>송달증명원</td><td>원판결 법원</td><td>상대방 송달 확인</td></tr>
<tr><td>인도할 물건의 특정 자료</td><td>채권자 준비</td><td>차량번호·모델명·일련번호 등</td></tr>
<tr><td>채권자 신분증 사본</td><td>—</td><td>법인이면 법인등기사항전부증명서</td></tr>
<tr><td>물건 소재지 정보</td><td>채권자 준비</td><td>채무자 주소, 보관 예상 장소 등</td></tr>
</tbody>
</table>
<div class="case-box">
<div class="case-title">📋 실제 상담 사례</div>
<p>B씨는 지인에게 업무용 노트북과 외장하드를 빌려주었으나 상대방이 반환을 거부했습니다. 물건 인도 청구 소송에서 승소한 뒤 집행관에게 동산 인도집행을 신청했고, 집행관이 채무자의 주거지를 방문하여 노트북과 외장하드를 현장에서 인도받았습니다.</p>
</div>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">상대방이 물건을 숨겨놓으면 어떻게 하나요?</div>
<div class="qna-a"><p>집행관은 채무자의 주거·사무소 등을 수색할 권한이 있습니다. (민사집행법 제4조) 채무자가 물건을 은닉하거나 제3자에게 무상으로 넘기면 사해행위 취소 소송을 통해 다툴 수 있습니다. 또한 채무자가 물건을 숨기거나 훼손하는 행위는 강제집행면탈죄(형법 제327조)에 해당할 수 있어 형사고소도 가능합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">집행 중 물건이 파손되면 누가 책임지나요?</div>
<div class="qna-a"><p>집행관이 집행 과정에서 물건을 손상시킨 경우 국가배상 청구가 가능합니다. 채무자가 고의로 물건을 파손한 경우 손해배상 청구 및 형사 처벌 대상이 됩니다. 물건의 현 상태를 집행 전에 사진으로 기록해 두면 분쟁 예방에 도움이 됩니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">자동차 인도집행은 어떻게 하나요?</div>
<div class="qna-a"><p>자동차도 동산이므로 동산 인도집행 절차를 따릅니다. 판결문에 차량번호와 차종이 명시되어 있어야 하며, 집행관이 차량 소재지를 확인하여 직접 인도집행을 실시합니다. 채무자가 차량을 빼돌릴 우려가 있다면 유체동산 가압류를 먼저 신청하여 차량을 봉인해 두는 것이 효과적입니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">물건이 제3자에게 넘어간 경우에도 집행할 수 있나요?</div>
<div class="qna-a"><p>판결 확정 후 채무자가 물건을 제3자에게 양도한 경우, 원칙적으로 그 제3자에 대해서는 집행권원의 효력이 미치지 않습니다. 이 경우 사해행위 취소 소송을 통해 물건을 되돌리는 방법을 검토해야 합니다. 판결 확정 직후 신속하게 집행을 신청하는 것이 중요합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">인도받아야 할 물건이 여러 개이고 일부만 찾은 경우는요?</div>
<div class="qna-a"><p>찾은 물건에 대해서는 집행을 완료하고, 나머지 물건은 추가로 수색하거나 채무자를 상대로 다시 집행 신청을 할 수 있습니다. 일부 집행 후 나머지 물건을 돌려받지 못한 손해에 대해서는 금전 배상 청구도 검토할 수 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">집행을 신청하면 얼마나 걸리나요?</div>
<div class="qna-a"><p>동산 인도집행은 집행관 사무소에 신청 후 보통 2~4주 내에 집행이 실시됩니다. 부동산 명도집행과 달리 계고 기간이 없어 더 빠릅니다. 다만 채무자의 소재 불명, 물건의 이동 등으로 인해 집행이 지연될 수 있습니다.</p></div>
</div>`
      },
      {
        heading: '동산 인도집행 관련 주요 판례',
        content: `<div class="ruling-box">
<div class="ruling-header">인도 대상 물건의 특정 요건</div>
<p>대법원은 동산 인도를 명하는 판결의 집행을 위해서는 인도 대상 물건이 집행 시에 특정될 수 있을 정도로 판결 주문에 기재되어야 한다고 판시하고 있습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">채무자의 점유 이전 후 집행 가능 여부</div>
<p>대법원은 집행권원에 표시된 채무자가 판결 확정 전에 점유를 제3자에게 이전한 경우, 그 제3자가 채무자와 특수관계에 있다면 집행이 가능할 수 있다고 보고 있습니다.</p>
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
<div class="warn-title">⚠️ 집행 전 물건 소재 파악이 핵심</div>
<p>동산 인도집행의 성공 여부는 물건의 소재지를 정확히 파악하느냐에 달려 있습니다. 판결 확정 즉시 신속하게 집행 신청을 진행하는 것이 중요합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠️ 물건을 임의로 가져오면 안 됩니다</div>
<p>판결이 있더라도 집행관의 집행 없이 채권자 스스로 물건을 가져오면 절도죄·주거침입죄 등에 해당할 수 있습니다. 반드시 집행관을 통한 공식 집행 절차를 이용해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">ℹ️ 물건이 이미 소비·처분된 경우</div>
<p>채무자가 물건을 이미 소비하거나 처분하여 원상회복이 불가능한 경우, 인도집행 대신 손해배상 청구(금전 집행)로 전환해야 합니다.</p>
</div>`
      },
      {
        heading: '다음으로 확인할 내용',
        content: `<div class="next-links">
<a href="#">부동산 명도집행 절차</a>
<a href="#">법원 명령을 어기는 상대방 — 간접강제</a>
<a href="#">계약 서명·등기 의무 강제집행</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제257조', desc: '동산 인도집행' },
      { name: '민사집행법 제4조', desc: '집행관의 수색 권한' },
      { name: '형법 제327조', desc: '강제집행면탈죄' },
    ],
    forms: []
  },
  {
    id: 'ef-90',
    title: '법원 명령을 무시하는 상대방 — 간접강제(이행강제금) 신청',
    meta: '직접 집행이 불가능한 의무를 금전적 압박으로 이행시키는 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>법원 판결로 상대방에게 '하지 말라'는 의무가 인정됐는데 계속 위반하고 있습니다</li>
<li>판결로 상대방이 어떤 행위를 해야 하는데 이행을 거부합니다</li>
<li>직접 집행관이 강제로 할 수 없는 종류의 의무(부작위·일신전속적 작위 등)입니다</li>
<li>계속되는 위반 행위에 금전적 제재를 가해 이행을 강제하고 싶습니다</li>
<li>특허권 침해, 초상권 침해, 경업금지 위반 등 부작위 의무 위반에 대응하고 싶습니다</li>
</ul></div>`
      },
      {
        heading: '간접강제란 무엇이며 언제 사용하나요?',
        content: `<div class="summary-box">
<strong>한눈에 보기</strong><br>
▶ 집행관이 직접 이행할 수 없는 의무(부작위·일신전속적 작위)에 대해 일정 기간 안에 이행하지 않으면 돈을 내도록 강제하는 제도입니다.<br>
▶ 법원이 '채무자가 의무를 이행하지 않으면 하루에 OO원씩 배상하라'는 결정을 내립니다.<br>
▶ 이 금전적 부담이 이행의 동기가 되어 자발적 이행을 유도합니다.
</div>
<p>간접강제는 <strong>민사집행법 제261조</strong>에 근거합니다. 채무의 성질상 집행관이 직접 이행할 수 없거나(예: '조용히 해라', '경쟁업체에서 일하지 마라'), 대체집행도 허용되지 않는 경우에 법원이 채무자에게 금전 지급의 의무를 부과합니다.</p>
<h3>간접강제가 적용되는 의무의 유형</h3>
<table>
<thead><tr><th>유형</th><th>설명</th><th>예시</th></tr></thead>
<tbody>
<tr><td><strong>부작위 의무</strong></td><td>어떤 행위를 하지 않아야 할 의무</td><td>경업금지, 소음 금지, 특허·저작권 침해 금지</td></tr>
<tr><td><strong>일신전속적 작위 의무</strong></td><td>오직 채무자 본인만이 이행할 수 있는 의무</td><td>특정 예술가의 창작 의무 등</td></tr>
<tr><td><strong>대체 불가능 작위 의무</strong></td><td>제3자가 대신 이행하기 어려운 성질의 의무</td><td>특정 정보의 삭제 요청</td></tr>
</tbody>
</table>
<div class="case-box">
<div class="case-title">📋 실제 상담 사례 — 경업금지 위반</div>
<p>C씨는 미용실을 운영하다 폐업하면서 "반경 500m 이내에서 2년간 동종 영업을 하지 않겠다"는 약정을 맺었습니다. 그러나 6개월 뒤 바로 인근에 새 미용실을 개업했습니다. 전 사업주는 소송을 통해 영업금지 판결을 받고, 간접강제를 신청하여 "판결 이행 전까지 하루에 50만 원씩 배상하라"는 결정을 받았습니다. 이 금전적 압박으로 C씨는 결국 영업을 중단했습니다.</p>
</div>`
      },
      {
        heading: '간접강제 신청 방법',
        content: `<h3>전체 흐름</h3>
<ol style="margin-left:20px;">
<li style="margin-bottom:12px;"><strong>집행권원 확인</strong> — 부작위 또는 작위 의무를 명한 확정판결·조정조서 등이 있어야 합니다.</li>
<li style="margin-bottom:12px;"><strong>간접강제 신청서 작성</strong> — 채권자가 집행권원을 발급한 법원(원심 법원)에 간접강제 신청서를 제출합니다. (민사집행법 제261조 제1항)</li>
<li style="margin-bottom:12px;"><strong>법원 심리·결정</strong> — 법원이 채무자를 심문하거나 서면으로 심리한 뒤 간접강제 결정을 내립니다.</li>
<li style="margin-bottom:12px;"><strong>결정 송달</strong> — 간접강제 결정문이 채무자에게 송달됩니다.</li>
<li><strong>미이행 시 금전 집행</strong> — 결정에서 정한 기간 내에 이행하지 않으면 누적된 배상금액을 강제집행으로 추심합니다.</li>
</ol>
<h3>첨부서류 목록</h3>
<table>
<thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>집행력 있는 정본</strong></td><td>해당 법원</td><td>부작위·작위 의무가 명시된 것</td></tr>
<tr><td>집행문</td><td>원판결 법원</td><td>단순집행문</td></tr>
<tr><td>송달증명원</td><td>원판결 법원</td><td>채무자에게 판결 송달 확인</td></tr>
<tr><td>간접강제 신청서</td><td>채권자 작성</td><td>이행 요구 내용·배상 요청액 기재</td></tr>
<tr><td>위반 사실 입증 자료</td><td>채권자 준비</td><td>채무자가 의무를 이행하지 않은 증거 (사진, 동영상, 녹음 등)</td></tr>
</tbody>
</table>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">간접강제와 손해배상 청구는 어떻게 다른가요?</div>
<div class="qna-a"><p>손해배상은 이미 발생한 손해를 금전으로 배상받는 것이고, 간접강제는 앞으로 의무를 이행하도록 금전적 압박을 가하는 것입니다. 간접강제 배상금은 실제 손해와 무관하게 법원이 정하며, 채무자가 이행을 완료하면 더 이상 발생하지 않습니다. 두 청구는 동시에 진행할 수 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">상대방이 간접강제 결정을 받고도 계속 위반하면 어떻게 되나요?</div>
<div class="qna-a"><p>채무자가 간접강제 결정 이후에도 의무를 이행하지 않으면, 결정에서 정한 배상금이 매일 누적됩니다. 이 누적된 금액은 일반 채권처럼 채무자의 재산에 강제집행(부동산·예금·급여 압류 등)하여 회수할 수 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">소음·악취 등 생활 방해에도 간접강제를 사용할 수 있나요?</div>
<div class="qna-a"><p>소음·악취·진동 등 생활방해 금지 판결을 받은 경우, 상대방이 계속 위반하면 간접강제를 신청할 수 있습니다. 다만 생활방해는 위반 사실의 입증이 까다롭기 때문에 위반 시마다 사진·소음측정치·생활일지 등으로 증거를 남겨두어야 합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">간접강제 결정이 나기까지 얼마나 걸리나요?</div>
<div class="qna-a"><p>간접강제 신청 후 법원의 심리 기간은 사건의 복잡도에 따라 다르지만 통상 1~3개월 정도 소요됩니다. 긴급한 상황에서는 본안 소송과 함께 '가처분'을 먼저 신청하여 즉시 위반 행위를 멈추게 하는 방법도 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">부작위 의무 위반에 간접강제 말고 다른 방법은 없나요?</div>
<div class="qna-a"><p>부작위 의무 위반에 대해서는 간접강제 외에, 위반 행위 자체의 제거를 구하는 원상회복 청구나 대체집행을 함께 활용할 수 있습니다. 또한 위반 행위가 불법행위에 해당하면 손해배상 청구도 병행 가능합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">특허·저작권 침해에도 간접강제를 사용할 수 있나요?</div>
<div class="qna-a"><p>네. 특허권·저작권·상표권 등 지식재산권 침해 금지 판결을 받은 후 상대방이 계속 침해하는 경우 간접강제 신청이 가능합니다. 위반 사실의 지속적 모니터링과 증거 수집이 중요합니다.</p></div>
</div>`
      },
      {
        heading: '간접강제 관련 주요 판례',
        content: `<div class="ruling-box">
<div class="ruling-header">간접강제 배상액 결정 기준</div>
<p>대법원은 간접강제에서 법원이 정할 배상액은 실제 손해액과 반드시 일치할 필요가 없고, 채무자가 의무를 이행하도록 하는 심리적 압박 효과를 달성할 수 있는 금액으로 정하면 된다고 판시하고 있습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">부작위 의무와 간접강제</div>
<p>대법원은 부작위를 명한 판결에 대하여도 채무자가 부작위 의무를 위반하는 경우 간접강제를 인정하고 있습니다. 부작위 의무의 특성상 직접강제나 대체집행이 불가능하므로 간접강제가 사실상 유일한 강제수단이 된다는 점을 판시하고 있습니다.</p>
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
<div class="warn-title">⚠️ 직접집행이 가능한 경우에는 간접강제 불인정</div>
<p>직접집행(부동산 명도·동산 인도)이나 대체집행으로 의무를 이행시킬 수 있는 경우에는 간접강제가 허용되지 않습니다. (민사집행법 제261조 제1항) 자신의 상황이 어떤 집행 방식에 해당하는지 먼저 전문가와 확인해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠️ 위반 사실 입증 자료를 반드시 보관하세요</div>
<p>간접강제 신청 시 채무자가 의무를 이행하지 않고 있다는 사실을 입증해야 합니다. 위반 시마다 사진·동영상·소음 측정 기록·목격자 진술 등을 꼼꼼히 보관하십시오.</p>
</div>
<div class="warn-box">
<div class="warn-title">ℹ️ 긴급한 경우 — 가처분을 먼저 신청하세요</div>
<p>위반 행위로 인한 피해가 급박하게 발생하고 있다면 본안 소송과 별개로 '가처분'을 먼저 신청하여 즉시 위반 행위를 멈추게 할 수 있습니다.</p>
</div>`
      },
      {
        heading: '다음으로 확인할 내용',
        content: `<div class="next-links">
<a href="#">부동산 명도집행 절차</a>
<a href="#">건물 철거 판결 — 대체집행</a>
<a href="#">계약 서명·등기 의무 강제집행</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제261조', desc: '간접강제 — 이행강제금 부과' },
    ],
    forms: []
  },
  {
    id: 'ef-91',
    title: '건물 철거 판결이 났는데 상대방이 안 할 때 — 대체집행 절차',
    meta: '채무자 대신 제3자가 이행하고 비용을 채무자에게 청구하는 대체집행 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>법원이 상대방에게 건물·시설물 철거를 명했는데 상대방이 이행하지 않습니다</li>
<li>담 철거, 구조물 제거, 무단 설치물 제거 판결이 있는데 집행 방법을 모릅니다</li>
<li>판결로 상대방이 공사를 해야 하는데 이행을 거부합니다</li>
<li>채무자의 의무를 제3자가 대신 이행하고 비용을 채무자에게 청구하고 싶습니다</li>
<li>대체집행 수권결정 신청 방법이 궁금합니다</li>
</ul></div>`
      },
      {
        heading: '대체집행이란?',
        content: `<div class="summary-box">
<strong>한눈에 보기</strong><br>
▶ 채무자가 이행해야 할 작위 의무를 채권자나 제3자가 대신 이행하고, 그 비용을 채무자에게 청구하는 집행 방법입니다.<br>
▶ 건물 철거, 담장 철거, 무단 시설물 제거 등 '채무자 본인이 아니어도 이행 가능한 작위'에 적용됩니다.<br>
▶ 법원의 '수권결정'을 받아야 제3자(업체)에게 이행을 위탁할 수 있습니다.
</div>
<p>대체집행은 <strong>민사집행법 제260조</strong>에 근거합니다. 채무자 본인이 직접 이행하지 않아도 제3자가 대신할 수 있는 작위 의무(예: 건물 철거, 구조물 제거, 공사 이행)의 경우, 채권자가 법원의 허가(수권결정)를 받아 제3자로 하여금 이행하게 할 수 있습니다.</p>
<div class="case-box">
<div class="case-title">📋 대체집행의 대표적 사례</div>
<p>D씨는 이웃 E씨가 경계선을 침범하여 담장을 설치한 것에 대해 담장 철거 소송을 제기하여 승소했습니다. E씨가 판결을 무시하고 담장을 철거하지 않자, D씨는 법원에 대체집행 수권결정을 신청했습니다. 수권결정을 받은 D씨는 철거 업체에 담장 철거를 의뢰하고, 그 비용을 E씨에게 청구했습니다.</p>
</div>`
      },
      {
        heading: '대체집행 단계별 신청 방법',
        content: `<h3>전체 흐름</h3>
<ol style="margin-left:20px;">
<li style="margin-bottom:12px;"><strong>집행권원 확보</strong> — 건물 철거·시설물 제거 등 작위를 명한 확정판결·조정조서 등이 있어야 합니다.</li>
<li style="margin-bottom:12px;"><strong>수권결정 신청</strong> — 집행권원을 발급한 법원(제1심 법원)에 대체집행 수권결정을 신청합니다. (민사집행법 제260조 제1항)</li>
<li style="margin-bottom:12px;"><strong>법원 결정</strong> — 법원이 수권결정을 내립니다.</li>
<li style="margin-bottom:12px;"><strong>이행 위탁 및 실시</strong> — 채권자는 수권결정을 근거로 철거업체·시공업체 등 제3자에게 이행을 위탁합니다.</li>
<li style="margin-bottom:12px;"><strong>비용 추산 후 미리 지급명령 신청</strong> — 이행 전에 예상 비용을 산정하여 법원에 비용 미리 지급 명령을 신청할 수 있습니다. (민사집행법 제260조 제2항)</li>
<li><strong>이행 완료 후 비용 청구</strong> — 실제 비용을 채무자에게 청구하며, 채무자가 지급하지 않으면 강제집행으로 회수합니다.</li>
</ol>
<div class="summary-box">
<strong>수권결정이란?</strong><br>
▶ 법원이 채권자에게 "채무자 대신 제3자로 하여금 이행하게 할 권한"을 부여하는 결정입니다.<br>
▶ 수권결정 없이 임의로 제3자에게 이행시키면 채무자에게 비용을 청구할 수 없습니다.<br>
▶ 수권결정 신청은 원심 법원(집행권원 발급 법원)에 합니다.
</div>
<h3>첨부서류 목록</h3>
<table>
<thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>집행력 있는 정본</strong></td><td>해당 법원</td><td>작위 의무가 명시된 것</td></tr>
<tr><td>집행문</td><td>원판결 법원</td><td>단순집행문</td></tr>
<tr><td>송달증명원</td><td>원판결 법원</td><td>채무자 송달 확인</td></tr>
<tr><td>대체집행 수권결정 신청서</td><td>채권자 작성</td><td>이행 내용·예상 비용 기재</td></tr>
<tr><td>이행 미완 입증 자료</td><td>채권자 준비</td><td>채무자가 이행하지 않고 있음을 보여주는 사진·현장 확인서 등</td></tr>
<tr><td>예상 비용 견적서</td><td>업체 발급</td><td>철거·공사 업체의 견적서 (비용 미리 지급 신청 시 필요)</td></tr>
</tbody>
</table>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">건물 전체를 철거하는 것도 대체집행으로 가능한가요?</div>
<div class="qna-a"><p>네, 건물 전체 철거도 대체집행의 대상이 됩니다. 철거 의무는 채무자 본인의 특별한 신체적 행위를 요하지 않으므로 제3자(철거업체)가 대신 이행할 수 있습니다. 다만 건물 규모가 크면 비용이 상당하므로 비용 미리 지급 명령을 활용하거나, 비용을 확보한 뒤 집행하는 것이 현실적입니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">채무자가 철거를 방해하면 어떻게 되나요?</div>
<div class="qna-a"><p>수권결정을 받아 적법하게 대체집행을 실시하는 과정에서 채무자가 이를 방해하면 공무집행방해죄(형법 제136조)에 해당할 수 있습니다. 방해가 예상되는 경우 집행관의 참여를 요청하거나 경찰 입회하에 집행을 진행하는 것이 좋습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">대체집행 비용을 채무자가 안 내면 어떻게 하나요?</div>
<div class="qna-a"><p>대체집행 완료 후 법원에 비용 확정 결정을 신청하고, 이 결정에 집행문을 부여받아 채무자의 재산(부동산, 예금, 급여 등)에 강제집행(금전집행)을 실시하여 회수할 수 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">수권결정을 받기까지 얼마나 걸리나요?</div>
<div class="qna-a"><p>수권결정 신청 후 법원이 결정을 내리기까지 보통 2주~1개월 정도 소요됩니다. 법원이 채무자를 심문하는 경우 더 길어질 수 있습니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">판결에서 명한 내용과 다르게 이행하면 문제가 되나요?</div>
<div class="qna-a"><p>대체집행은 판결주문에서 명한 의무의 내용과 범위 내에서만 이행해야 합니다. 이행 범위를 초과하면 채무자에게 비용을 청구할 수 없고 오히려 불법행위가 됩니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">간접강제와 대체집행을 함께 사용할 수 있나요?</div>
<div class="qna-a"><p>원칙적으로 대체집행이 가능한 작위 의무에 대해서는 간접강제는 허용되지 않습니다. 다만 대체집행으로 해결되지 않는 부분(예: 계속적 부작위 의무 위반)이 있다면 별도로 간접강제를 신청할 수 있습니다.</p></div>
</div>`
      },
      {
        heading: '대체집행 관련 주요 판례',
        content: `<div class="ruling-box">
<div class="ruling-header">대체집행 가능한 의무의 범위</div>
<p>대법원은 대체집행의 대상이 되는 작위 의무는 채무자 본인의 특수한 기술이나 재능을 필요로 하지 않고 제3자가 이행할 수 있는 것이어야 한다고 판시하고 있습니다. 건물 철거, 담장 제거, 토지 정리 등은 대체집행의 전형적인 대상입니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">비용 미리 지급 명령의 요건</div>
<p>대법원은 비용 미리 지급 명령은 대체집행에 필요한 비용을 채권자가 미리 지출하기 어려운 경우에 허용되며, 법원이 비용의 예상 규모와 채무자의 지급 능력을 고려하여 결정한다고 판시하고 있습니다.</p>
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
<div class="warn-title">⚠️ 수권결정 없이는 비용을 청구할 수 없습니다</div>
<p>법원의 수권결정을 받기 전에 임의로 제3자에게 철거·이행을 시키면 채무자에게 비용을 청구할 법적 근거가 없습니다. 반드시 수권결정을 받은 후 대체집행을 실시해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠️ 판결 범위를 초과한 집행은 불법</div>
<p>판결에서 명한 의무의 범위를 초과하여 이행하면 오히려 손해배상 책임이 생깁니다. 업체에 이행을 위탁하기 전 판결 주문의 내용을 정확히 파악하고 명확하게 지시해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">ℹ️ 채무자의 재산 상황을 미리 확인하세요</div>
<p>대체집행 비용을 선부담한 후 채무자에게 청구해도 채무자에게 재산이 없으면 회수가 어렵습니다. 비용 미리 지급 명령 제도를 적극 활용하고, 집행 전에 채무자의 재산을 파악하는 것이 중요합니다.</p>
</div>`
      },
      {
        heading: '다음으로 확인할 내용',
        content: `<div class="next-links">
<a href="#">부동산 명도집행 절차</a>
<a href="#">법원 명령 위반 — 간접강제 신청</a>
<a href="#">계약 서명·등기 의무 강제집행</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제260조', desc: '대체집행 — 수권결정 및 비용 청구' },
    ],
    forms: []
  },
  {
    id: 'ef-92',
    title: '상대방이 등기 협력을 거부합니다 — 의사표시 의무 강제집행',
    meta: '판결 확정만으로 의사표시가 완성되는 특별한 집행 방법으로 등기를 단독 신청하는 방법을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
<li>상대방이 소유권이전등기 서류에 서명·날인을 거부합니다</li>
<li>매매·증여 계약을 체결했는데 상대방이 등기 협력을 안 해 줍니다</li>
<li>법원 판결로 상대방이 소유권이전등기를 해야 하는데 이행하지 않습니다</li>
<li>근저당권 설정이나 말소에 필요한 서류를 상대방이 안 줍니다</li>
<li>계약 이행을 위해 필요한 동의서·위임장 등에 상대방이 서명을 거부합니다</li>
</ul></div>`
      },
      {
        heading: '의사표시 의무 강제집행이란?',
        content: `<div class="summary-box">
<strong>한눈에 보기</strong><br>
▶ 채무자가 해야 할 '의사표시'(서명, 동의, 승낙 등)를 판결 확정 자체로 대체하는 제도입니다.<br>
▶ 판결이 확정되는 순간 채무자의 의사표시가 있었던 것으로 간주됩니다.<br>
▶ 별도의 집행관 집행 없이 법원 판결문만으로 등기·계약을 완성할 수 있습니다.
</div>
<p>의사표시 의무의 강제집행은 <strong>민사집행법 제263조</strong>에 근거합니다. 채무자에게 의사표시를 할 의무(소유권이전등기 서류 작성, 계약서 서명, 동의서 제출 등)가 판결로 확정되면, 그 판결이 확정된 때에 채무자의 의사표시가 있었던 것으로 간주됩니다.</p>
<div class="summary-box">
<strong>이 제도의 핵심 특징</strong><br>
다른 강제집행(명도·인도·대체집행·간접강제)은 모두 판결 확정 후 별도의 집행 신청이 필요합니다. 그러나 의사표시 의무 강제집행은 판결이 확정된 순간 자동으로 집행이 완성됩니다. 별도로 집행관에게 신청하거나 집행관이 현장에 나갈 필요가 없습니다.
</div>
<div class="case-box">
<div class="case-title">📋 실제 상담 사례 — 매도인의 등기 거부</div>
<p>F씨는 G씨로부터 아파트를 매수하고 잔금까지 완납했습니다. 그러나 G씨가 아파트 가격이 올랐다며 소유권이전등기 서류 작성을 거부했습니다. F씨는 소유권이전등기 청구 소송을 제기하여 승소 확정판결을 받았습니다. 판결 확정 후 F씨는 등기소에 확정판결문과 확정증명원을 첨부하여 단독으로 소유권이전등기를 완료했습니다.</p>
</div>`
      },
      {
        heading: '어떤 의무에 이 제도가 적용되나요?',
        content: `<div class="summary-box">
<strong>적용 대상 의무</strong><br>
▶ 소유권이전등기 절차 이행 의무 (매매·증여·판결에 의한 이전)<br>
▶ 근저당권·전세권 설정 또는 말소 등기 협력 의무<br>
▶ 계약서 작성·서명 의무<br>
▶ 동의서·승낙서·위임장 작성 의무<br>
▶ 기타 일정한 의사표시를 해야 할 채무자의 의무
</div>
<p>실무에서 가장 많이 발생하는 사례는 부동산 소유권이전등기입니다. 판결 확정 후 매수인(원고)은 단독으로 등기소에 소유권이전등기를 신청할 수 있습니다. 매도인(피고)의 서명이나 협력 없이도 판결문·확정증명원 등을 첨부하여 등기가 가능합니다.</p>
<h3>조건부 의사표시 — 동시이행 조건이 붙은 경우</h3>
<p>판결주문이 "원고가 잔금 OO원을 지급함과 동시에 소유권이전등기 절차를 이행하라"처럼 동시이행 조건이 붙은 경우, 채권자가 먼저 자신의 의무(잔금 지급 등)를 이행해야만 판결의 효력이 발생합니다. (민사집행법 제263조 제2항) 이 경우에는 채권자가 자신의 의무를 이행하였음을 증명해야 합니다.</p>`
      },
      {
        heading: '판결 확정 후 단독 등기 신청 방법',
        content: `<h3>소유권이전등기 단독 신청 — 첨부서류</h3>
<table>
<thead><tr><th>서류명</th><th>발급기관</th><th>주의사항</th></tr></thead>
<tbody>
<tr><td><strong>판결문(집행력 있는 정본)</strong></td><td>판결 법원</td><td>소유권이전등기 절차 이행을 명하는 것</td></tr>
<tr><td><strong>확정증명원</strong></td><td>판결 법원</td><td>판결이 확정됐음을 증명하는 서류</td></tr>
<tr><td>등기원인 증서(매매계약서 등)</td><td>채권자 보관</td><td>등기원인(매매·증여 등)을 증명</td></tr>
<tr><td>부동산 등기사항전부증명서</td><td>등기소</td><td>최신 발급본</td></tr>
<tr><td>취득세 영수증</td><td>관할 시·군·구청</td><td>등기 신청 전 취득세 납부 필수</td></tr>
<tr><td>채권자(신청인) 신분증·도장</td><td>—</td><td>법인이면 법인 관련 서류</td></tr>
</tbody>
</table>
<div class="warn-box">
<div class="warn-title">ℹ️ 취득세·등록면허세를 먼저 납부해야 합니다</div>
<p>소유권이전등기를 신청하기 전에 취득세(지방세)와 교육세·농어촌특별세(해당 시)를 납부해야 합니다. 등기소에 가기 전 관할 시·군·구청 세무과 또는 위택스(www.wetax.go.kr)에서 납부하시기 바랍니다. 취득세 납부 없이는 등기 신청이 접수되지 않습니다.</p>
</div>
<h3>동시이행 판결의 경우 — 추가 절차</h3>
<p>판결에 동시이행 조건이 붙은 경우, 채권자는 자신의 의무 이행 사실을 법원에 신청하여 집행문(조건부 집행문)을 부여받아야 합니다. (민사집행법 제30조, 제263조 제2항)</p>`
      },
      {
        heading: '자주 묻는 질문',
        content: `<div class="qna-item">
<div class="qna-q">판결문이 있으면 상대방 없이 바로 등기소에 가면 되나요?</div>
<div class="qna-a"><p>원칙적으로 맞습니다. 소유권이전등기를 명하는 확정판결과 확정증명원이 있으면 상대방(채무자)의 협력 없이 채권자 단독으로 등기를 신청할 수 있습니다. 다만 판결에 동시이행 조건이 붙어 있다면 자신의 의무 이행 사실을 먼저 증명해야 하므로, 반드시 판결문 주문 내용을 확인하고 법무사와 상담하시기 바랍니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">근저당권 말소 판결도 단독으로 말소 등기를 신청할 수 있나요?</div>
<div class="qna-a"><p>네. 근저당권 말소 절차 이행을 명하는 확정판결이 있으면 채권자 단독으로 근저당권 말소 등기를 신청할 수 있습니다. 말소 등기 신청 시에는 등록면허세 납부가 필요합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">상대방이 소송 중 부동산을 제3자에게 팔아버리면 어떻게 되나요?</div>
<div class="qna-a"><p>소송 제기와 함께 '처분금지 가처분'을 신청하지 않으면 상대방이 소송 중 부동산을 처분할 수 있고, 이 경우 판결을 받아도 이전등기를 받기 어려워집니다. 소송을 제기할 때 반드시 처분금지 가처분을 동시에 신청하여 부동산에 가처분 등기를 먼저 해두어야 합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">계약서 작성 자체를 거부하는 경우 어떻게 강제할 수 있나요?</div>
<div class="qna-a"><p>예약완결권(민법 제564조)이나 가계약·본계약 체결 의무가 있는데 상대방이 거부하는 경우, 법원에 "계약서 작성 의무 이행"을 명하는 소송을 제기하여 판결을 받으면 됩니다. 판결 확정 시 계약 체결 의사표시가 있었던 것으로 간주됩니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">가등기에 기한 본등기 청구도 같은 방법인가요?</div>
<div class="qna-a"><p>네. 가등기가 마쳐진 부동산에 대해 본등기 청구 소송에서 승소하면, 확정판결을 근거로 가등기에 기한 본등기를 단독으로 신청할 수 있습니다. 가등기 이후에 경료된 중간 등기는 본등기 시 말소될 수 있으므로 주의가 필요합니다.</p></div>
</div>
<div class="qna-item">
<div class="qna-q">상대방이 사망한 경우에도 소송을 제기할 수 있나요?</div>
<div class="qna-a"><p>채무자(등기 의무자)가 사망한 경우, 그 상속인을 상대로 소유권이전등기 청구 소송을 제기해야 합니다. 상속인이 여럿이면 모든 상속인을 피고로 해야 하며, 상속인이 누구인지 확인하기 위해 피상속인의 기본증명서·가족관계증명서 등을 발급받아야 합니다.</p></div>
</div>`
      },
      {
        heading: '의사표시 의무 강제집행 관련 주요 판례',
        content: `<div class="ruling-box">
<div class="ruling-header">판결 확정 시 의사표시 간주 시점</div>
<p>대법원은 의사표시를 명하는 판결이 확정된 때에 채무자의 의사표시가 있었던 것으로 간주된다고 판시하고 있습니다. 판결 확정과 동시에 법률효과(소유권이전 등)가 발생하며 별도의 집행 행위가 필요하지 않습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">동시이행 관계의 판결과 단독 등기 신청</div>
<p>대법원은 동시이행 관계에 있는 판결의 경우 채권자가 자신의 채무를 이행하지 않은 상태에서는 의사표시 간주의 효력이 발생하지 않는다고 판시하고 있습니다. 채권자 스스로 채무를 이행하거나 이행 제공을 증명해야만 단독으로 등기를 신청할 수 있습니다.</p>
</div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
<div class="warn-title">⚡ 소송 제기와 동시에 처분금지 가처분을 신청하세요</div>
<p>소송이 진행되는 동안 상대방이 부동산을 제3자에게 팔거나 근저당권을 설정하면 판결을 받아도 이전등기를 받기 어려워집니다. 소송 제기와 동시에 반드시 부동산 처분금지 가처분을 신청하여 가처분 등기를 해두어야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠️ 판결 주문을 정확히 확인하세요 — 조건 여부</div>
<p>판결 주문에 "동시이행" 조건이 붙어 있는지 반드시 확인해야 합니다. 조건이 있는 경우 추가 절차(조건부 집행문 부여)가 필요합니다. 판결문 주문 내용을 혼자 해석하기 어려운 경우 법무사와 상담하시기 바랍니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">ℹ️ 취득세 납부가 등기 신청의 전제 조건</div>
<p>소유권이전등기를 신청하기 전 취득세·교육세 등을 납부해야 합니다. 취득세 납부를 지연하면 가산세가 부과될 수 있으므로 판결 확정 직후 관할 구청에 문의하거나 법무사를 통해 진행하시기 바랍니다.</p>
</div>`
      },
      {
        heading: '다음으로 확인할 내용',
        content: `<div class="next-links">
<a href="#">부동산 명도집행 절차</a>
<a href="#">법원 명령 위반 — 간접강제 신청</a>
<a href="#">건물 철거 판결 — 대체집행</a>
</div>`
      }
    ],
    laws: [
      { name: '민사집행법 제263조', desc: '의사표시 의무 강제집행 — 판결 확정으로 의사표시 간주' },
      { name: '민사집행법 제30조', desc: '조건부 집행문 부여' },
      { name: '부동산등기법 제23조 제4항', desc: '판결에 의한 단독 등기신청' },
    ],
    forms: []
  }
]
