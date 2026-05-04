const PRESERVATION_TOPICS = [
  {
    id: 'pv-1',
    title: '가압류란',
    meta: '내가 신청할 수 있는지 모르겠다',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item"><span>빌려준 돈이나 물건값을 받지 못하고 있다</span></div>
                <div class="checklist-item"><span>상대방이 재산을 빼돌릴 것 같다</span></div>
                <div class="checklist-item"><span>소송을 이기더라도 집행할 재산이 없을까 봐 걱정된다</span></div>
                <div class="checklist-item"><span>가압류가 무엇인지, 내가 신청할 수 있는지 모르겠다</span></div>
                <div class="checklist-item"><span>소송 전에 미리 재산을 묶어두고 싶다</span></div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>가압류(假壓留)란</h3>
                <p><strong>금전채권이나 금전으로 환산할 수 있는 채권을 가진 채권자가, 장래의 강제집행을 보전하기 위해 채무자의 재산을 미리 동결시키는 보전처분</strong>입니다.</p>
                <p style="margin-top: 15px;"><strong>법적 근거:</strong> <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027600" target="_blank" rel="noopener">민사집행법 제276조</a></p>
                <p style="margin-top: 15px;"><strong>핵심 특징:</strong></p>
                <ul style="margin-left: 15px; margin-top: 10px;">
                    <li>소송 판결 전에도 신청 가능</li>
                    <li>채무자에게 사전 통지 없이 진행 (밀행성)</li>
                    <li>부동산, 동산, 예금, 급여, 채권 등 다양한 재산에 적용 가능</li>
                    <li>재산의 소유권은 그대로 있지만, 처분과 이전이 제한됨</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<div class="detail-content">
                <h3 style="color: var(--navy); font-size: 1.3em; margin-bottom: 15px; margin-top: 25px;">가압류의 요건</h3>

                <div class="definition-box">
                    <p><strong>① 피보전권리</strong></p>
                    <p style="margin-left: 20px; margin-top: 8px;">금전채권 또는 금전으로 환산할 수 있는 채권이어야 합니다. 물건 반환 청구권, 손해배상청구권도 포함됩니다.</p>
                </div>

                <div class="definition-box">
                    <p><strong>② 청구권의 존재</strong></p>
                    <p style="margin-left: 20px; margin-top: 8px;">청구권이 현존해야 합니다. 조건부 채권이나 장래의 채권도 인정됩니다.</p>
                </div>

                <div class="definition-box">
                    <p><strong>③ 강제집행의 적합성</strong></p>
                    <p style="margin-left: 20px; margin-top: 8px;">나중에 강제집행이 가능해야 합니다. 예: 금전채권은 가능, 근로관계상 지위 회복 청구는 불가능</p>
                </div>

                <div class="definition-box">
                    <p><strong>④ 보전의 필요성</strong> (가장 중요)</p>
                    <p style="margin-left: 20px; margin-top: 8px;">채무자가 재산을 숨기거나 처분할 우려가 있어, 나중에 강제집행이 불가능하거나 현저히 곤란해질 염려가 있어야 합니다. 예를 들어:</p>
                    <ul style="margin-left: 35px; margin-top: 10px;">
                        <li>상대방이 부동산을 팔려고 준비 중</li>
                        <li>상대방의 통장 잔액이 빠르게 감소</li>
                        <li>상대방이 회사를 해산하려고 함</li>
                        <li>상대방의 신용도가 급속도로 악화</li>
                    </ul>
                </div>

                <h3 style="color: var(--navy); font-size: 1.3em; margin-bottom: 15px; margin-top: 30px;">가압류의 효과</h3>
                <p>가압류 결정이 내려지면:</p>
                <ul>
                    <li><strong>부동산의 경우:</strong> 등기부에 "가압류" 등기가 되어 제3자도 알게 됩니다. 채무자의 처분 행위는 가압류 채권자에게 대항할 수 없습니다.</li>
                    <li><strong>동산(물건)의 경우:</strong> 집행관이 현황을 조사하고 처분을 금지합니다.</li>
                    <li><strong>예금·급여의 경우:</strong> 은행이나 고용주에게 지급을 금지합니다. 결정 송달 즉시 효력 발생합니다.</li>
                    <li><strong>채권의 경우:</strong> 제3채무자(은행, 고용주 등)에게 채무자에게 지급하지 말 것을 통지합니다.</li>
                </ul>

                <h3 style="color: var(--navy); font-size: 1.3em; margin-bottom: 15px; margin-top: 30px;">가압류의 절차 개요</h3>
                <p>가압류는 다음과 같은 절차로 진행됩니다:</p>
                <ol>
                    <li>관할법원 결정 — 본안 관할법원 또는 목적물 소재지 법원</li>
                    <li>신청서 작성 및 서류 준비</li>
                    <li>법원 접수, 인지료·송달료 납부</li>
                    <li>법원의 심리 (서면심리 원칙) — 법원이 보전의 필요성을 판단</li>
                    <li>가압류 결정 또는 기각</li>
                    <li>담보 제공 (법원 결정에 따라)</li>
                    <li>집행 (법원이 집행관에 위임 또는 촉탁)</li>
                </ol>

                <h3 style="color: var(--navy); font-size: 1.3em; margin-bottom: 15px; margin-top: 30px;">가압류 대상</h3>
                <p>가압류는 다음과 같은 재산에 설정할 수 있습니다:</p>
                <ul>
                    <li><strong>부동산:</strong> 토지, 건물, 다세대주택, 상업용 건물 등</li>
                    <li><strong>동산:</strong> 자동차, 골동품, 기계 등 (다만 전기, 가스, 수도 등 상수도는 불가)</li>
                    <li><strong>채권:</strong> 예금, 급여, 임대차보증금 반환청구권, 기업 매출채권 등</li>
                    <li><strong>유가증권:</strong> 주식, 채권 등</li>
                </ul>

                <h3 style="color: var(--navy); font-size: 1.3em; margin-bottom: 15px; margin-top: 30px;">가압류의 특징 — 밀행성</h3>
                <p>가압류는 <strong>채무자에게 사전 통지 없이 신청 및 결정</strong>할 수 있습니다. 이를 "밀행성(密行性)"이라 합니다. 왜냐하면:</p>
                <ul>
                    <li>사전 통지 시 채무자가 재산을 빠르게 처분할 수 있기 때문</li>
                    <li>가압류의 효과를 보전하려면 채무자의 불의의 행동을 막아야 하기 때문</li>
                </ul>
                <p style="margin-top: 15px;">다만, 결정 후 본안소송을 제기할 때나 집행 과정에서 채무자는 "이의 신청"으로 가압류의 취소를 요청할 수 있습니다.</p>

                <h3 style="color: var(--navy); font-size: 1.3em; margin-bottom: 15px; margin-top: 30px;">본안소송과의 관계</h3>
                <p>가압류는 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027500" target="_blank" rel="noopener">민사집행법 제275조</a>에 따라 <strong>본안권리가 없거나 보전의 필요성이 없어지면 취소</strong>될 수 있습니다.</p>
                <ul>
                    <li>가압류 신청 후 본안소송을 제기하지 않으면 채무자의 이의 신청으로 취소 가능</li>
                    <li>본안소송에서 패소하면 가압류는 취소됨</li>
                    <li>합의·조정으로 권리가 소멸하면 가압류도 소멸</li>
                </ul>
                <p style="margin-top: 15px;">따라서 <strong>가압류는 잠정적 처분일 뿐이며, 최종적 권리 확정은 본안소송을 통해</strong> 이루어집니다.</p>
            </div>` },
      { heading: '자주하는 질문', content: `<div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>소송에서 이기기 전에도 가압류를 신청할 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>네, 가능합니다.</strong> 가압류는 본안소송 <strong>전</strong>에도 신청할 수 있습니다. 다만, 다음 조건이 필요합니다:</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li>피보전권리(채권)가 존재해야 함 — 빌려준 돈이 있다는 증거 필요 (차용증, 계약서 등)</li>
                        <li>보전의 필요성이 있어야 함 — 상대방이 재산을 처분할 위험이 있어야 함</li>
                    </ul>
                    <p style="margin-top: 15px;">예를 들어, 차용증을 가지고 있으면서 상대방이 재산을 처분하려고 한다면, 소송 제기 전 가압류만 먼저 신청할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>상대방이 이미 재산을 처분했다면 가압류가 의미 없나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>그렇습니다.</strong> 가압류는 재산을 미리 묶어두는 것이므로, 이미 처분된 재산에는 설정할 수 없습니다.</p>
                    <p style="margin-top: 15px;">다만, 다음과 같은 경우는 가능할 수 있습니다:</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li>상대방이 부동산을 팔았지만 아직 대금을 받지 못한 경우 — 그 대금채권에 가압류 설정 가능</li>
                        <li>상대방이 다른 재산은 여전히 보유하고 있는 경우 — 그 재산에 가압류 설정 가능</li>
                    </ul>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류를 신청하면 상대방이 즉시 알게 되나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>아닙니다.</strong> 가압류는 "밀행성"을 원칙으로 합니다. 즉, 채무자(상대방)에게 <strong>사전 통지 없이 진행</strong>됩니다.</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li>가압류 신청 — 상대방은 모름</li>
                        <li>법원 결정 — 상대방은 모름</li>
                        <li>가압류 집행 — 이때 상대방이 처음 알게 됨 (집행관이 통지, 부동산 등기는 공시됨)</li>
                    </ul>
                    <p style="margin-top: 15px;">다만, 결정 후 집행관이 현황조사 등을 하면서 상대방이 의심하거나, 부동산의 경우 등기부를 확인하면 알 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류가 결정되면 재산이 완전히 동결되나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>재산에 따라 다릅니다.</strong></p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li><strong>부동산:</strong> 소유권은 그대로 있으나, 처분(매매, 담보 제공)이 제한됨. 이미 설정된 근저당권이나 신탁 등은 영향을 받지 않음.</li>
                        <li><strong>예금:</strong> 완전히 동결됨. 채무자는 출금 불가. 급여는 법률로 정한 범위(월급의 1/2 초과분) 내에서만 압류 가능.</li>
                        <li><strong>동산:</strong> 집행관의 관리 아래 처분이 제한됨.</li>
                    </ul>
                    <p style="margin-top: 15px;">특히 주의할 점은, 가압류는 "처분금지"일 뿐 "소유권 박탈"이 아니므로, 채무자는 여전히 소유자입니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류를 잘못 신청하면 어떤 책임이 생기나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>손해배상책임</strong>이 발생할 수 있습니다.</p>
                    <p style="margin-top: 15px;"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030300" target="_blank" rel="noopener">민사집행법 제303조</a>에 따르면, <strong>당사자가 보전 신청에 대해 부당함을 알면서 신청했거나, 중대한 과실이 있는 경우</strong> 채무자가 입은 손해를 배상해야 합니다.</p>
                    <p style="margin-top: 15px;">예를 들어:</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li>실제 빌려준 돈이 없는데 거짓으로 신청</li>
                        <li>이미 상환받았는데 신청</li>
                        <li>명백히 회복 불가능할 정도로 부동산 가격이 하락하는 결과 초래</li>
                    </ul>
                    <p style="margin-top: 15px;">따라서 가압류 신청은 신중하게 결정해야 합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>채권액이 적은데도 가압류를 신청할 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>네, 가능합니다.</strong> 법률상 채권액의 최저 한도가 없습니다.</p>
                    <p style="margin-top: 15px;">다만, 실무적으로는:</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li>채권액이 매우 적으면 법원이 "보전의 필요성"이 없다고 판단할 수 있음</li>
                        <li>인지료, 송달료, 담보금 등 비용이 들므로 경제성을 고려해야 함</li>
                        <li>소송 비용(법무사 비용 등)이 회수 가능한 금액보다 많을 수 있음</li>
                    </ul>
                    <p style="margin-top: 15px;">따라서 상황에 맞는 전략을 세우는 것이 중요합니다.</p>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="case-box">
                <h4>가압류의 피보전권리 요건</h4>
                <p>대법원은 가압류의 피보전권리가 반드시 현재 이행기가 도래한 채권이어야 하는 것은 아니며, <strong>조건부 채권이나 장래의 채권도 피보전권리가 될 수 있다</strong>고 판시하고 있습니다.</p>
                <p style="margin-top: 15px;"><strong>의미:</strong> 예를 들어, 조건부 계약(대금 지급 조건)이 아직 실현되지 않았거나, 미래에 발생할 채권(예: 월급 후불 계약의 임금채권)도 가압류의 대상이 될 수 있다는 의미입니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div class="warning-content">
                        <strong>부당한 가압류 시 손해배상책임 발생</strong>
                        <p style="margin-top: 8px;"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030300" target="_blank" rel="noopener">민사집행법 제303조</a>에 따르면, 가압류가 부당하면 채무자에게 손해배상책임이 발생합니다. 특히 가압류 취소 후 이의 신청이 받아들여지거나, 본안소송에서 패소한 경우가 여기에 해당합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div class="warning-content">
                        <strong>가압류 후 본안소송을 제기하지 않으면 취소될 수 있음</strong>
                        <p style="margin-top: 8px;">가압류 결정 후 채무자가 이의 신청을 하면, 본안권리 존부가 밝혀져야 가압류가 유지됩니다. 본안소송을 제기하지 않거나 패소하면 가압류는 <strong>자동 취소</strong>됩니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div class="warning-content">
                        <strong>가압류는 본안권리 확정 필수</strong>
                        <p style="margin-top: 8px;">가압류는 잠정적 처분일 뿐입니다. <strong>최종적 권리 확정은 본안소송</strong>을 통해 이루어져야 합니다. 가압류만으로 재산을 가져갈 수는 없습니다.</p>
                    </div>
                </div>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제276조', desc: '' },
      { name: '민사집행법 제275조', desc: '' },
      { name: '민사집행법 제303조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-2',
    title: '가압류 신청 절차',
    meta: '어떻게 신청해야 하는가',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item"><span>가압류 신청을 결정했는데 절차를 모르겠다</span></div>
                <div class="checklist-item"><span>어떤 법원에 신청해야 하는지 모르겠다</span></div>
                <div class="checklist-item"><span>준비해야 할 서류가 무엇인지 알고 싶다</span></div>
                <div class="checklist-item"><span>신청 후 얼마나 걸리는지 알고 싶다</span></div>
                <div class="checklist-item"><span>법원에서 담보를 요구할 때 어떻게 해야 하는지 모르겠다</span></div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>가압류 신청의 7단계 절차</h3>
                <p>가압류 신청부터 집행까지는 다음과 같이 진행됩니다:</p>
                <ol style="margin: 15px 0 0 20px;">
                    <li><strong>관할법원 결정</strong> — 어느 법원에 신청할지 확인</li>
                    <li><strong>신청서 작성 및 서류 준비</strong> — 필요한 문서 수집</li>
                    <li><strong>법원 접수</strong> — 신청서 제출 및 인지료·송달료 납부</li>
                    <li><strong>법원 심리</strong> — 서면심리 원칙 (법원이 보전의 필요성 판단)</li>
                    <li><strong>가압류 결정 또는 기각</strong> — 법원의 판단</li>
                    <li><strong>담보 제공</strong> — 필요시 (법원 결정에 따라)</li>
                    <li><strong>집행</strong> — 법원이 집행관에 위임 또는 촉탁</li>
                </ol>
            </div>` },
      { heading: '상세설명', content: `<h3>1단계: 관할법원 결정</h3>
            <div class="jurisdiction-box">
                <h4>어느 법원에 신청해야 할까요?</h4>
                <p>가압류는 다음 중 하나의 법원에 신청할 수 있습니다. (선택 가능)</p>
                <p><strong>① 본안의 관할법원</strong> <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027800" target="_blank" rel="noopener">민사집행법 제278조 제1항</a></p>
                <p style="margin-left: 20px; color: #333;">만약 소송이 이미 제기되었다면, 그 소송이 진행 중인 법원.</p>
                <p><strong>② 가압류할 물건이 있는 곳의 지방법원</strong> <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027800" target="_blank" rel="noopener">민사집행법 제278조 제2항</a></p>
                <p style="margin-left: 20px; color: #333;">부동산이면 그 부동산이 있는 지역, 예금이면 은행 지점이 있는 지역.</p>
                <p style="margin-top: 15px;"><strong>선택 방법:</strong> 신청자가 편한 쪽을 선택할 수 있습니다. 다만, 부동산 가압류는 일반적으로 부동산 소재지 법원에 신청합니다.</p>
            </div>

            <h3>2단계: 신청서 작성 및 서류 준비</h3>

            <div class="requirement-box">
                <p><strong>신청서 기재사항</strong> (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=117387&joNo=009200" target="_blank" rel="noopener">민사집행규칙 제92조</a>)</p>
                <p style="margin-top: 10px;">가압류 신청서에는 반드시 다음을 기재해야 합니다:</p>
                <ul style="margin-top: 10px;">
                    <li><strong>당사자:</strong> 채권자와 채무자의 성명, 주소</li>
                    <li><strong>피보전권리의 표시:</strong> 채권의 원인 (예: 금전 대차, 상품 외상 등), 청구금액</li>
                    <li><strong>가압류할 목적물:</strong> 부동산 주소, 계좌번호, 물건의 특정 등</li>
                    <li><strong>보전의 필요성:</strong> 왜 가압류가 필요한지 설명 (상대방의 재산 처분 위험 등)</li>
                </ul>
            </div>

            <div class="requirement-box">
                <p><strong>첨부서류</strong></p>
                <p style="margin-top: 10px;">신청서와 함께 제출해야 할 서류는 다음과 같습니다:</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>발급 기관</th>
                        <th>주의사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>채권자 주민등록초본</strong><br>또는 법인등기부등본</td>
                        <td>주민센터 또는 등기소</td>
                        <td>최근 3개월 이내 발급본<br>(법인은 등기부 필수)</td>
                    </tr>
                    <tr>
                        <td><strong>채무자 주민등록초본</strong><br>또는 법인등기부등본</td>
                        <td>주민센터 또는 등기소</td>
                        <td>주소 확인이 목적<br>법원에서 요청할 수 있음</td>
                    </tr>
                    <tr>
                        <td><strong>피보전권리 소명자료</strong></td>
                        <td>해당 기관</td>
                        <td>차용증, 계약서, 판결문, 공정증서, 외상장 등<br>원본 또는 진정한 사본</td>
                    </tr>
                    <tr>
                        <td><strong>부동산 가압류 시:</strong><br>부동산등기사항전부증명서</td>
                        <td>등기소 또는<br>인터넷등기소<br>(www.iros.go.kr)</td>
                        <td>최신 발급본<br>종류 선택: "전부증명"</td>
                    </tr>
                    <tr>
                        <td><strong>채권 가압류 시:</strong><br>금융거래정보 확인 자료</td>
                        <td>은행 또는<br>채권자 보유 자료</td>
                        <td>계좌번호, 예금주, 은행명<br>명확해야 함</td>
                    </tr>
                </tbody>
            </table>

            <h3>3단계: 법원 접수 및 비용 납부</h3>
            <p>신청서와 서류를 준비한 후 다음을 진행합니다:</p>
            <ul>
                <li><strong>신청 방법:</strong> 직접 방문, 우편, 또는 전자소송(www.ecourt.go.kr) 이용</li>
                <li><strong>제출처:</strong> 선택한 지방법원의 민사집행담당 부서</li>
                <li><strong>인지료:</strong> 1회 납부 (청구금액에 따라 산정)</li>
                <li><strong>송달료:</strong> 수회분 미리 납부 (채무자와 채권자에게 송달하므로 여러 회차)</li>
            </ul>
            <p style="margin-top: 15px;"><strong>비용 조회:</strong> 대법원 전자소송 홈페이지에서 "소송비용 조회" 메뉴를 이용하면 정확한 금액을 확인할 수 있습니다.</p>

            <h3>4단계: 법원 심리</h3>
            <p>법원은 신청서와 제출된 서류를 바탕으로 다음을 판단합니다:</p>
            <ul>
                <li><strong>피보전권리가 있는가:</strong> 빌려준 돈이나 상품값이 정말 있는가?</li>
                <li><strong>보전의 필요성이 있는가:</strong> 상대방이 정말 재산을 처분할 위험이 있는가?</li>
                <li><strong>채무자의 이의:</strong> 채무자가 이의 신청을 했다면 심문 가능</li>
            </ul>
            <p style="margin-top: 15px;"><strong>심리 방식:</strong> 대부분 "서면심리"로 진행되므로 법원에 가지 않아도 됩니다. 다만 법원이 필요하다고 판단하면 심문을 할 수 있습니다.</p>

            <h3>5단계: 가압류 결정 또는 기각</h3>
            <p>법원은 신청을 <strong>인용(결정)</strong>하거나 <strong>기각</strong>합니다.</p>
            <ul>
                <li><strong>인용 (가압류 결정):</strong> 가압류 신청이 승인되었다는 의미. 법원이 결정문을 발부합니다.</li>
                <li><strong>기각:</strong> 가압류 신청이 거부되었다는 의미. 원인을 알려줍니다. 항고(상급 법원 항의) 가능.</li>
            </ul>

            <h3>6단계: 담보 제공 (필요시)</h3>
            <p>법원이 담보 제공을 조건으로 결정할 수 있습니다. (모든 경우는 아님)</p>
            <ul>
                <li><strong>담보 방식:</strong> 현금 공탁 또는 보증보험증권</li>
                <li><strong>담보 금액:</strong> 법원이 결정 (통상 청구금액의 10~20%)</li>
                <li><strong>제공 기한:</strong> 법원이 지정한 기간 내에 제공해야 함</li>
            </ul>

            <h3>7단계: 집행</h3>
            <p>담보 제공 후 법원은 집행관에 가압류 집행을 위임합니다.</p>
            <ul>
                <li><strong>부동산:</strong> 법원이 등기소에 등기 촉탁 (자동)</li>
                <li><strong>동산:</strong> 집행관이 현황조사 및 처분금지 통지</li>
                <li><strong>예금·급여:</strong> 법원이 제3채무자(은행, 고용주)에게 결정문 송달</li>
            </ul>` },
      { heading: '자주하는 질문', content: `<div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>신청 후 결정까지 얼마나 걸리나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>일반적으로 2~4주입니다.</strong></p>
                    <p style="margin-top: 10px;">다만, 법원의 업무량, 제출된 서류의 명확성, 채무자의 이의 신청 여부 등에 따라 달라질 수 있습니다:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>서류가 명확하고 이의가 없으면:</strong> 1~2주</li>
                        <li><strong>보전의 필요성이 불명확하면:</strong> 3~4주</li>
                        <li><strong>채무자가 이의를 제기하면:</strong> 4주 이상</li>
                    </ul>
                    <p style="margin-top: 15px;">긴급한 경우 법원에 "즉시결정" 또는 "수회 기간 단축" 신청이 가능하지만, 인정되지 않을 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>법원이 기각하면 다시 신청할 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>네, 재신청은 가능합니다.</strong> 다만, 다시 신청하기 전에 다음을 고려해야 합니다:</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li><strong>기각 사유를 파악:</strong> 보전의 필요성 부족인지, 피보전권리 부족인지?</li>
                        <li><strong>추가 증거 준비:</strong> 더 확실한 증거(보육권 운영 증거, 재산 처분 의사 증거 등)</li>
                        <li><strong>다른 법원 신청:</strong> 다른 관할 법원에 다시 신청 가능</li>
                        <li><strong>항고:</strong> 기각 결정에 대해 항고(상급 법원에 항의)할 수 있음</li>
                    </ul>
                    <p style="margin-top: 15px;">비용(인지료, 송달료)이 다시 들므로 신중하게 판단해야 합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>전자소송으로 신청할 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>네, 가능합니다.</strong> 대법원 전자소송(www.ecourt.go.kr)에서 신청할 수 있습니다.</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li><strong>장점:</strong> 24시간 신청 가능, 법원 방문 불필요, 진행 상황 온라인 확인</li>
                        <li><strong>단점:</strong> 공인인증서(또는 금융인증서) 필요, 파일 업로드 필요</li>
                        <li><strong>첨부 파일:</strong> 신청서, 서류 모두 스캔하여 PDF로 업로드</li>
                    </ul>
                    <p style="margin-top: 15px;">법무사를 통해 신청하면 전자소송 대리인 자격으로 진행할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>채무자 주소를 모르면 어떻게 하나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>가능한 한 찾아서 기재해야 합니다.</strong> 다음 방법을 시도할 수 있습니다:</p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li><strong>휴대폰, 연락처:</strong> 신청서에 기재 가능</li>
                        <li><strong>주민등록초본 정보:</strong> 가지고 있으면 그대로 기재</li>
                        <li><strong>법원 조회:</strong> 신청 시 "주소 불명" 사유를 설명하면 법원이 배우자 등에게 통보 가능</li>
                        <li><strong>주소 정보 서비스:</strong> 민원24 등에서 일부 조회 가능</li>
                    </ul>
                    <p style="margin-top: 15px;">주소 불명이어도 신청은 가능하나, 송달(통지)에 문제가 생길 수 있으므로 정정 신청을 통해 나중에 주소를 보충할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류 목적물을 잘못 특정하면 어떻게 되나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>집행이 불가능하게 됩니다.</strong></p>
                    <ul style="margin: 15px 0 0 20px;">
                        <li><strong>부동산:</strong> 주소, 지번을 잘못 기재하면 등기 불가</li>
                        <li><strong>예금:</strong> 계좌번호를 잘못 기재하면 은행이 집행을 거부</li>
                        <li><strong>동산:</strong> 물건을 구체적으로 특정하지 못하면 집행관이 거부</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>대처:</strong> 오류를 발견하면 즉시 법원에 신청서 정정을 요청해야 합니다. 법원에서 결정 전이면 수정 가능하고, 결정 후면 정정 신청(환부 후 재신청)이 필요할 수 있습니다.</p>
                </div>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div class="warning-content">
                        <strong>가압류 결정 후 집행은 빨리 해야 함</strong>
                        <p style="margin-top: 8px;">가압류 결정을 받은 후 집행(등기촉탁, 동산조사, 제3채무자 통지)을 지체하면 채무자가 재산을 처분할 수 있습니다. <strong>결정 후 즉시 집행 촉탁</strong>해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div class="warning-content">
                        <strong>목적물 특정이 잘못되면 집행관이 거부</strong>
                        <p style="margin-top: 8px;">부동산 주소를 정확히, 예금 계좌번호를 명확히, 동산을 구체적으로 특정해야 합니다. 불명확하면 집행관이 집행을 거부하므로 재신청이 필요합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div class="warning-content">
                        <strong>가압류 신청서 양식은 법원마다 다를 수 있음</strong>
                        <p style="margin-top: 8px;">각 지방법원마다 기본 양식을 제공하므로, 신청하려는 법원의 홈페이지에서 최신 양식을 다운로드하여 사용해야 합니다.</p>
                    </div>
                </div>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제278조 제1항', desc: '' },
      { name: '민사집행법 제278조 제2항', desc: '' },
      { name: '민사집행규칙 제92조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-3',
    title: '부동산 가압류',
    meta: '상대방 부동산이 팔릴 것 같을 때',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item"><span>상대방이 부동산을 팔거나 담보로 제공할 것 같다</span></div>
                <div class="checklist-item"><span>빌려준 돈이나 물건값을 받지 못하고 있다</span></div>
                <div class="checklist-item"><span>상대방 소유 부동산에 가압류를 설정하고 싶다</span></div>
                <div class="checklist-item"><span>부동산 가압류 절차와 효과가 궁금하다</span></div>
                <div class="checklist-item"><span>가압류 후 상대방이 부동산을 처분하면 어떻게 되는지 모르겠다</span></div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>부동산 가압류의 핵심</h3>
                <p><strong>부동산 가압류</strong>는 채무자 소유의 부동산을 미리 "동결"시켜, 나중에 경매를 통해 채권을 회수하는 보전처분입니다.</p>
                <p style="margin-top: 15px;"><strong>핵심 효과:</strong> 가압류 등기 후 채무자의 처분 행위(매매, 담보 제공)는 가압류 채권자에게 대항할 수 없습니다.</p>
                <p style="margin-top: 15px;"><strong>법적 근거:</strong> <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027600" target="_blank" rel="noopener">민사집행법 제276조 (가압류), 제291조~293조 (부동산 가압류 집행)</a></p>
            </div>` },
      { heading: '상세설명', content: `<h3>부동산 가압류의 요건과 특징</h3>

            <div class="concept-box">
                <h4>① 피보전권리 — 금전채권</h4>
                <p>부동산 가압류는 <strong>금전채권</strong>이 있어야 신청할 수 있습니다. 예:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>빌려준 돈 (금전 차용)</li>
                    <li>상품값, 서비스비 (금액으로 환산 가능한 채권)</li>
                    <li>손해배상금 청구</li>
                </ul>
            </div>

            <div class="concept-box">
                <h4>② 보전의 필요성 — 가장 중요</h4>
                <p>채무자가 부동산을 처분하면 강제집행이 불가능해질 염려가 있어야 합니다. 예:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>상대방이 이미 부동산을 팔려고 준비 중</li>
                    <li>상대방의 재산이 급속도로 감소</li>
                    <li>상대방의 신용도가 악화</li>
                    <li>상대방이 이전에 다른 채권자들을 회피한 경력이 있음</li>
                </ul>
            </div>

            <div class="concept-box">
                <h4>③ 부동산 가압류의 효과</h4>
                <p><strong>가압류 등기가 부동산 등기부에 기재되면:</strong></p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>채무자의 소유권은 그대로 유지됨</li>
                    <li>다만, 처분(매매, 담보 제공)이 제한됨</li>
                    <li>등기부를 확인하면 제3자도 가압류 사실을 알게 됨</li>
                </ul>
                <p style="margin-top: 12px;"><strong>처분의 효력:</strong> 가압류 후 채무자가 제3자에게 부동산을 팔았다면, 그 매매 계약은 가압류 채권자에게 대항할 수 없습니다. 즉, 가압류 채권자는 제3취득자(새 주인)를 상대로도 강제집행을 할 수 있습니다.</p>
            </div>

            <h3>부동산 가압류 절차 (상세)</h3>

            <div style="margin-bottom: 30px;">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <div class="step-title">관할법원 확인</div>
                        <div class="step-desc">
                            부동산이 있는 곳의 지방법원 또는 본안 관할법원 중 선택 가능.
                            예: 서울에 부동산이 있으면 서울중앙지법, 부산에 있으면 부산지법
                        </div>
                    </div>
                </div>

                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <div class="step-title">부동산등기사항전부증명서 준비</div>
                        <div class="step-desc">
                            등기소(인터넷등기소 www.iros.go.kr)에서 발급.
                            주소, 지번, 면적, 현 소유자 확인 필수. 최신 발급본이어야 함.
                        </div>
                    </div>
                </div>

                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <div class="step-title">신청서 작성</div>
                        <div class="step-desc">
                            피보전권리(채권), 부동산 주소·지번·면적, 보전의 필요성 기재.
                            상대방의 신용도 악화, 처분 의사, 재산 감소 등을 구체적으로 설명.
                        </div>
                    </div>
                </div>

                <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <div class="step-title">법원 제출</div>
                        <div class="step-desc">
                            신청서, 부동산등기사항전부증명서, 피보전권리 소명자료(차용증 등) 제출.
                            인지료, 송달료 납부.
                        </div>
                    </div>
                </div>

                <div class="step-item">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <div class="step-title">법원 심리 및 결정</div>
                        <div class="step-desc">
                            법원이 서면으로 보전의 필요성 판단.
                            결정이 내려지면 채권자에게 통지됨.
                        </div>
                    </div>
                </div>

                <div class="step-item">
                    <div class="step-number">6</div>
                    <div class="step-content">
                        <div class="step-title">담보 제공 (필요시)</div>
                        <div class="step-desc">
                            법원이 담보 제공을 조건으로 결정할 수 있음.
                            현금 공탁 또는 보증보험증권으로 제공.
                        </div>
                    </div>
                </div>

                <div class="step-item">
                    <div class="step-number">7</div>
                    <div class="step-content">
                        <div class="step-title">등기촉탁 — 가압류 등기</div>
                        <div class="step-desc">
                            담보 제공 후, 법원이 직접 등기소에 가압류 등기를 촉탁.
                            등기소는 부동산 등기부에 "가압류" 등기를 기재.
                            이때 가압류의 효력이 발생함 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=029300" target="_blank" rel="noopener">민사집행법 제293조</a>).
                        </div>
                    </div>
                </div>
            </div>

            <h3>가압류 후 처분 문제</h3>

            <div class="concept-box">
                <h4>가압류 후 채무자가 부동산을 팔면 어떻게 되나?</h4>
                <p><strong>가압류 후에도 소유권 이전은 가능합니다.</strong> 하지만:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li><strong>대항 불가:</strong> 매매는 가압류 채권자에게 대항할 수 없음</li>
                    <li><strong>제3취득자도 영향:</strong> 새로운 소유자도 가압류의 효력을 받음</li>
                    <li><strong>경매 시 가압류권 우선:</strong> 나중에 경매가 진행되면 가압류 채권자가 먼저 배당 받을 수 있음</li>
                </ul>
                <p style="margin-top: 12px;"><strong>실무:</strong> 가압류 등기가 있는 부동산은 제3자가 구입하려 해도, 그 부동산에 "가압류"가 있다는 것을 알게 되어 거래가 어려워집니다. 따라서 사실상 처분이 제한되는 효과가 있습니다.</p>
            </div>

            <h3>이미 설정된 담보와의 관계</h3>
            <p>상대방 부동산에 이미 근저당권(은행 담보)이 설정되어 있다면?</p>
            <ul>
                <li><strong>가압류는 여전히 가능:</strong> 근저당이 있어도 가압류 설정 가능</li>
                <li><strong>배당 순서:</strong> 근저당권자가 먼저 배당 받고, 남은 금액이 있으면 가압류 채권자가 받음</li>
                <li><strong>부동산 가치 중요:</strong> 부동산 가격이 담보금액보다 훨씬 크면 가압류의 의미가 있음</li>
            </ul>` },
      { heading: '자주하는 질문', content: `<div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류 등기가 되면 상대방이 부동산을 팔 수 없나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>법률상으로는 팔 수 있습니다.</strong> 하지만 <strong>실제로는 팔기 어렵습니다.</strong></p>
                    <p style="margin-top: 10px;">이유는:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>구매자가 등기부를 확인하면 "가압류" 표시를 보게 됨</li>
                        <li>구매자는 불안정한 소유권을 원하지 않으므로 구매를 거절</li>
                        <li>결국 채무자가 부동산을 팔지 못함</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>법적으로는:</strong> 가압류 후에도 매매는 가능하지만, 그 매매 계약은 가압류 채권자에게 대항할 수 없습니다. 즉, 새 소유자도 가압류를 피할 수 없습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>부동산에 이미 담보(근저당)가 설정되어 있으면 가압류가 의미 없나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>상황에 따라 다릅니다.</strong></p>
                    <p style="margin-top: 10px;">부동산 가치가 담보금액보다 크다면:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>경매에서 근저당권자가 먼저 배당</li>
                        <li>남은 금액이 있으면 가압류 채권자가 받을 수 있음</li>
                        <li>따라서 가압류는 의미가 있음</li>
                    </ul>
                    <p style="margin-top: 10px;">부동산 가치가 담보금액 이하라면:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>경매에서 근저당권자가 모든 금액을 가져감</li>
                        <li>가압류 채권자는 받을 돈이 없을 수 있음</li>
                        <li>가압류의 경제적 의미가 제한적</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>결론:</strong> 부동산의 가치를 먼저 파악하고 가압류 여부를 결정해야 합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류 후 경매가 진행되면 얼마를 받을 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>배당 순서에 따라 결정됩니다.</strong></p>
                    <p style="margin-top: 10px;">경매 대금이 나누어지는 순서:</p>
                    <ol style="margin: 10px 0 0 20px;">
                        <li>세금 (국세, 지방세) — 최우선</li>
                        <li>근저당권자 (은행 등) — 등기된 순서대로</li>
                        <li>가압류 채권자 — 등기된 순서대로</li>
                        <li>기타 채권자</li>
                    </ol>
                    <p style="margin-top: 10px;"><strong>예시:</strong></p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>부동산 경매가 : 3억원</li>
                        <li>세금 : 2,000만원</li>
                        <li>근저당권 : 1억 5,000만원</li>
                        <li>가압류 채권자 (당신) : 1억 3,000만원 중 배당 가능</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>주의:</strong> 경매에서 나온 금액이 당신의 채권 전액을 커버하지 못할 수도 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>부동산 소재지가 여러 곳이면 어느 법원에 신청하나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>각 부동산별로 신청해야 합니다.</strong></p>
                    <p style="margin-top: 10px;">예를 들어:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>서울에 주택 1채 → 서울중앙지법에 신청</li>
                        <li>부산에 상가 1채 → 부산지법에 신청</li>
                        <li>인천에 토지 1필지 → 인천지법에 신청</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>수수료:</strong> 각각 신청하면 각각 인지료, 송달료가 들므로 비용이 증가합니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류 등기 비용은 누가 부담하나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>채권자(신청자)가 부담합니다.</strong></p>
                    <p style="margin-top: 10px;">구체적으로:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>법원 인지료:</strong> 청구금액에 따라 산정 (채권자 부담)</li>
                        <li><strong>송달료:</strong> 채무자에게 송달하는 비용 (채권자 부담)</li>
                        <li><strong>등기 촉탁:</strong> 법원이 등기소에 촉탁하므로 추가 비용 없음</li>
                        <li><strong>등기 수수료:</strong> 등기소에서 받는 수수료 (채권자 부담)</li>
                        <li><strong>담보금:</strong> 법원 결정에 따라 필요시 (채권자 부담)</li>
                    </ul>
                    <p style="margin-top: 10px;">나중에 본안소송에서 승소하면, 상대방에게 이 비용을 청구할 수 있습니다 (승소 소송 사건의 비용).</p>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="case-box">
                <h4>가압류 후 제3취득자의 지위</h4>
                <p>대법원은 가압류 후 채무자가 부동산을 제3자에게 처분한 경우에도 가압류의 처분금지 효력은 유지되며, <strong>가압류채권자는 그 부동산에 대하여 강제집행을 할 수 있다</strong>고 판시하고 있습니다.</p>
                <p style="margin-top: 10px;"><strong>의미:</strong> 가압류 후에 새로운 소유자가 생기더라도, 가압류 채권자는 여전히 그 부동산을 대상으로 경매 신청 등의 강제집행을 할 수 있다는 의미입니다. 이것이 가압류의 강력한 효력입니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div class="warning-content">
                        <strong>가압류 결정 후 등기촉탁을 빨리 해야 함</strong>
                        <p style="margin-top: 8px;">가압류 결정을 받은 후 지체하면 채무자가 부동산을 처분할 수 있습니다. <strong>담보 제공 후 즉시 등기 촉탁</strong>을 해야 하며, 법원에 "급속 처리" 요청도 가능합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div class="warning-content">
                        <strong>가압류 금액이 부동산 가치보다 적으면 경매에서 남는 금액이 없을 수 있음</strong>
                        <p style="margin-top: 8px;">부동산에 이미 근저당권 같은 담보가 있다면, 경매에서 근저당권자가 먼저 배당 받습니다. 부동산 가치가 담보금액 이상이어야 가압류 채권자도 배당받을 수 있습니다. <strong>사전에 부동산 가치를 파악하는 것이 중요</strong>합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div class="warning-content">
                        <strong>공동소유 부동산의 경우 채무자의 지분만 가압류 가능</strong>
                        <p style="margin-top: 8px;">부동산이 여러 명의 공동소유라면, 채무자가 소유한 지분(예: 1/2)만 가압류할 수 있습니다. 다른 소유자의 동의가 필요하지는 않습니다 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=022300" target="_blank" rel="noopener">민사집행법 제223조</a> 준용).</p>
                    </div>
                </div>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제276조 (가압류), 제291조~293조 (부동산 가압류 집행)', desc: '' },
      { name: '민사집행법 제293조', desc: '' },
      { name: '민사집행법 제223조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-4',
    title: '예금·급여 가압류',
    meta: '상대방 통장이나 급여를 묶을 수 있는가',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item"><span>상대방이 부동산은 없고 통장이나 급여소득만 있다</span></div>
                <div class="checklist-item"><span>통장의 돈이 빠져나가기 전에 묶어두고 싶다</span></div>
                <div class="checklist-item"><span>급여 가압류가 가능한지, 얼마까지 가능한지 모르겠다</span></div>
                <div class="checklist-item"><span>어느 은행 계좌인지 알아야 하는지 걱정된다</span></div>
                <div class="checklist-item"><span>채권(채무자가 제3자에게 받을 돈)을 가압류하는 방법이 궁금하다</span></div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>채권 가압류란</h3>
                <p><strong>채무자가 제3자(제3채무자)에게 가지는 채권을 가압류하는 것</strong>입니다. 예금, 급여, 임대차보증금 등이 대상입니다.</p>
                <p style="margin-top: 15px;"><strong>법적 근거:</strong> <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=029100" target="_blank" rel="noopener">민사집행법 제291조, 제223조</a> (채권 가압류 규정)</p>
                <p style="margin-top: 15px;"><strong>핵심 효과:</strong> 가압류 결정이 제3채무자(은행, 고용주 등)에게 송달되는 순간, 채무자는 그 금액을 받을 수 없게 됩니다.</p>
            </div>` },
      { heading: '상세설명', content: `<h3>채권 가압류의 개념</h3>
            <div class="concept-box">
                <h4>채권이란?</h4>
                <p>법률적으로 "채권"은 채무자가 제3자에게 가지는 <strong>돈을 받을 권리</strong>를 의미합니다. 예:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li><strong>예금:</strong> 은행에 맡긴 돈</li>
                    <li><strong>급여:</strong> 회사에서 받을 월급</li>
                    <li><strong>임대차보증금:</strong> 임차인이 돌려줄 보증금</li>
                    <li><strong>매출채권:</strong> 고객이 줄 대금</li>
                </ul>
            </div>

            <div class="concept-box">
                <h4>제3채무자란?</h4>
                <p><strong>채무자가 채권을 가지는 상대방</strong>입니다. 예:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>예금의 경우: 은행 (예금을 보관한 은행이 채무자의 돈을 돌려줄 의무)</li>
                    <li>급여의 경우: 고용회사 (매달 급여를 줄 의무)</li>
                    <li>임대차보증금: 임대인 (보증금을 돌려줄 의무)</li>
                </ul>
            </div>

            <h3>채권 가압류의 효과</h3>
            <div class="highlight-box">
                <p><strong>가압류 결정 송달 즉시 효력 발생</strong></p>
                <p style="margin-top: 10px;">부동산 가압류와 달리 "등기"가 필요 없습니다. 법원이 제3채무자에게 결정문을 송달하는 그 순간부터 효력이 발생합니다.</p>
                <p style="margin-top: 10px;"><strong>구체적 효과:</strong></p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>은행에 예금 가압류 → 은행은 결정문 받은 날부터 지급 금지</li>
                    <li>회사에 급여 가압류 → 회사는 결정문 받은 날부터 지급 금지</li>
                    <li>채무자는 그 돈을 받을 수 없음</li>
                </ul>
            </div>

            <h3>급여 가압류의 특별 규정 — 압류금지 범위</h3>
            <p>급여는 생활비이므로, 법률이 정한 범위 내에서만 압류 가능합니다.</p>

            <div class="concept-box">
                <h4>급여 압류금지 범위 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=024600" target="_blank" rel="noopener">민사집행법 제246조 제1항 제4호</a></h4>
                <p><strong>기본 규칙: 급여의 1/2 초과분을 압류할 수 있습니다.</strong></p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>월 급여 500만원 → 250만원까지 압류 가능</li>
                    <li>월 급여 200만원 → 100만원까지 압류 가능</li>
                </ul>
                <p style="margin-top: 15px;"><strong>그러나 예외가 있습니다:</strong></p>
                <p style="margin-top: 10px;"><strong>최저생계비 보장:</strong> 월 급여가 매우 적은 경우(통상 150만원 이하), 최저생계비에 해당하는 금액은 압류할 수 없습니다. 예:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>월 급여 100만원 → 1/2 = 50만원이지만, 생계비 때문에 압류 불가능할 수 있음</li>
                </ul>
                <p style="margin-top: 15px;"><strong>중요:</strong> 법원이 직접 압류 가능 금액을 계산하여 "가압류 금액"으로 결정합니다. 신청자가 요청한 금액 전체가 인용되지 않을 수 있습니다.</p>
            </div>

            <h3>채권 가압류 절차</h3>
            <div style="margin-bottom: 30px;">
                <p><strong>1단계: 제3채무자 특정</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">어느 은행, 어느 지점인지, 계좌번호는 무엇인지 정확히 파악해야 합니다.</p>

                <p style="margin-top: 15px;"><strong>2단계: 신청서 작성</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">제3채무자의 상호, 주소, 계좌번호(또는 고용주 정보) 기재. 급여의 경우 고용 기간, 급여액 등 기재.</p>

                <p style="margin-top: 15px;"><strong>3단계: 법원 접수</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">신청서, 피보전권리 소명자료 제출. 인지료, 송달료 납부.</p>

                <p style="margin-top: 15px;"><strong>4단계: 법원 결정</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">법원이 가압류 금액 결정 (급여는 압류금지 범위 고려).</p>

                <p style="margin-top: 15px;"><strong>5단계: 제3채무자에게 송달</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">법원이 제3채무자에게 결정문 송달. 이 순간부터 지급 금지 효력 발생.</p>

                <p style="margin-top: 15px;"><strong>6단계: 채무자의 이의 신청 (가능)</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">채무자가 이의를 제기하면 법원이 재판. 하지만 통상 이의가 용이하지 않습니다.</p>
            </div>

            <h3>계좌 정보를 모르는 경우</h3>
            <p>상대방의 정확한 계좌번호를 모를 때:</p>
            <ul>
                <li><strong>가압류 단계:</strong> 알고 있는 정보(은행명, 예금주, 지점)만 기재하여 신청. 법원이 검토하여 결정할 수 있습니다.</li>
                <li><strong>강제집행 단계:</strong> 본안소송에서 승소 후 강제집행할 때, "금융정보 조회" 제도를 사용하여 상대방의 계좌 정보를 파악할 수 있습니다.</li>
                <li><strong>실무:</strong> 거래 관계에서 입금받은 계좌, 급여 이체 계좌 등을 파악하여 신청하는 것이 일반적입니다.</li>
            </ul>

            <h3>예금 잔액이 부족한 경우</h3>
            <p>가압류 금액보다 계좌의 잔액이 적으면:</p>
            <ul>
                <li><strong>부분 집행:</strong> 있는 금액만 압류됩니다. 예: 100만원을 가압류했으나 통장에 50만원만 있으면 50만원만 압류됨.</li>
                <li><strong>추후 입금:</strong> 추후 입금되는 금액도 계속 압류 대상이 될 수 있습니다. 급여가 계속 입금되면 그 금액도 압류 범위 내에서 압류됨.</li>
                <li><strong>기간 제한:</strong> 가압류의 효력은 일정 기간 유지됩니다. 본안소송과의 관계에 따라 달라집니다.</li>
            </ul>` },
      { heading: '자주하는 질문', content: `<div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>어느 은행 계좌인지 모르는데 가압류를 할 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>알고 있는 정보만 기재하여 신청 가능합니다.</strong></p>
                    <p style="margin-top: 10px;">예를 들어:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>"OO상호은행 서울지점 예금" — 계좌번호를 모르는 경우</li>
                        <li>"OOO 회사 급여" — 구체 계좌번호를 모르는 경우</li>
                    </ul>
                    <p style="margin-top: 10px;">법원은 이 정보만으로도 가압류 결정을 내릴 수 있습니다. 다만:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>은행이 계좌가 여러 개면 어느 계좌를 압류할지 해석의 여지가 있을 수 있음</li>
                        <li>법원이 "계좌번호 특정 필요"로 결정할 수도 있음</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>더 나은 방법:</strong> 거래 관계에서 얻은 정보(입금받은 계좌번호, 급여 이체 계좌 정보 등)가 있으면 함께 기재하는 것이 좋습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>급여가 많지 않은데 전액 가압류가 가능한가요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>아닙니다. 급여 1/2 초과분만 가능합니다.</strong> 법률로 정해진 제한입니다.</p>
                    <p style="margin-top: 10px;">예시:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>월 급여 200만원 → 최대 100만원 가압류 가능</li>
                        <li>월 급여 150만원 → 최대 75만원 가압류 가능 (단, 최저생계비 고려할 수 있음)</li>
                    </ul>
                    <p style="margin-top: 10px;">또한 <strong>최저생계비를 고려</strong>하여 법원이 압류 범위를 재조정할 수 있습니다:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>월 급여 100만원인 경우 1/2 = 50만원이지만, 생계비로 전액이 필요할 수 있어서 압류 불가능</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>법원이 결정:</strong> 최종적으로 법원이 압류 가능 금액을 결정합니다. 신청자의 요청이 모두 인용되지 않을 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>제3채무자(은행)가 가압류 결정을 무시하면 어떻게 되나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>실무상 거의 없습니다.</strong> 은행이나 회사는 법원 결정을 따릅니다.</p>
                    <p style="margin-top: 10px;">다만:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>은행의 지급 거절:</strong> 은행이 실수로 돈을 지급했다면, 채권자(당신)에게 반환을 요구할 수 있습니다.</li>
                        <li><strong>법적 책임:</strong> 제3채무자가 명백히 결정을 무시하면 법원 모욕죄, 강제집행 거부죄 등의 책임을 질 수 있습니다.</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>실제 문제:</strong> 제3채무자가 무시하는 것보다, 문제는 채무자가 그 돈을 미리 인출했거나, 추후 입금을 거부하는 경우입니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>예금 잔액이 가압류 금액보다 적으면 어떻게 되나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>있는 금액만 압류됩니다.</strong></p>
                    <p style="margin-top: 10px;">예시:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>가압류 결정: 500만원</li>
                        <li>실제 잔액: 300만원</li>
                        <li>결과: 300만원만 압류됨</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>추후 입금:</strong> 다만 예금 통장에 추후 입금되는 금액은:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>가압류 효력이 유지되는 동안 계속 압류 범위 내</li>
                        <li>예를 들어, 급여가 계속 입금되면 그 금액도 압류 범위 내에서 압류됨</li>
                        <li>다만, 가압류 결정의 효력이 언제까지인지는 본안소송과의 관계에 따라 다름</li>
                    </ul>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>여러 은행 계좌를 동시에 가압류할 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>네, 가능합니다.</strong> 알고 있는 여러 계좌를 한 신청서에 기재할 수 있습니다.</p>
                    <p style="margin-top: 10px;">예시:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>신청금액: 1,000만원</li>
                        <li>제1은행 계좌: 300만원 가압류</li>
                        <li>제2은행 계좌: 300만원 가압류</li>
                        <li>제3은행 계좌: 400만원 가압류</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>또는 분리 신청:</strong></p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>각각 별도 신청서로 각 은행에 신청 가능</li>
                        <li>다만, 비용(인지료, 송달료)이 여러 번 들 수 있음</li>
                    </ul>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="case-box">
                <h4>급여 압류금지 범위의 계산 기준</h4>
                <p>대법원은 급여 가압류에서 압류금지 범위 계산은 <strong>세후 실수령액 기준이 아닌 세전 급여를 기준</strong>으로 한다고 판시하고 있습니다.</p>
                <p style="margin-top: 10px;"><strong>의미:</strong> 월 급여 500만원(세전)에서 세금 50만원을 뺀 450만원(실수령액)이 아니라, 원래의 500만원을 기준으로 1/2인 250만원까지만 압류할 수 있다는 의미입니다. 이는 급여 생계비 보호를 위한 판시입니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div class="warning-content">
                        <strong>가압류 결정 이후 제3채무자에게 즉시 송달이 중요</strong>
                        <p style="margin-top: 8px;">법원이 가압류 결정을 내렸어도, 제3채무자(은행, 고용주)에게 결정문이 송달되지 않으면 효력이 발생하지 않습니다. <strong>송달까지가 완성</strong>되어야 지급 금지 효력이 발생합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div class="warning-content">
                        <strong>압류금지 채권을 가압류하면 채무자의 이의 신청으로 취소될 수 있음</strong>
                        <p style="margin-top: 8px;">급여 중 압류금지 범위에 해당하는 부분을 잘못 가압류했다면, 채무자의 이의 신청으로 그 부분은 취소될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=024600" target="_blank" rel="noopener">민사집행법 제246조</a> 규정을 정확히 파악해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div class="warning-content">
                        <strong>채무자의 생계 유지를 위한 최저 금액은 압류할 수 없음</strong>
                        <p style="margin-top: 8px;">급여가 일정 수준 이하인 경우, 법원이 생계비 관점에서 압류를 제한할 수 있습니다. "1/2 초과" 규칙만으로 판단하지 않고, 최종적으로 채무자의 생계 가능 여부를 고려합니다.</p>
                    </div>
                </div>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제291조, 제223조', desc: '' },
      { name: '민사집행법 제246조 제1항 제4호', desc: '' },
      { name: '민사집행법 제246조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-5',
    title: '가압류 담보',
    meta: '법원이 요구하는 담보를 내는 방법',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item"><span>법원에서 가압류 결정을 내렸는데 담보를 제공하라고 한다</span></div>
                <div class="checklist-item"><span>담보금이 얼마인지, 어떻게 내야 하는지 모르겠다</span></div>
                <div class="checklist-item"><span>공탁과 보증보험이 무엇인지 모르겠다</span></div>
                <div class="checklist-item"><span>담보를 빨리 제공해야 하는데 시간이 촉박하다</span></div>
                <div class="checklist-item"><span>담보 제공 후 나중에 돌려받을 수 있는지 모르겠다</span></div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>가압류 담보란</h3>
                <p><strong>법원이 가압류 신청자에게 담보 제공을 명할 수 있으며, 이는 부당한 가압류로 채무자가 입을 수 있는 손해를 보상하기 위한 것입니다.</strong></p>
                <p style="margin-top: 15px;"><strong>법적 근거:</strong> <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028000" target="_blank" rel="noopener">민사집행법 제280조 제2항</a></p>
                <p style="margin-top: 15px;"><strong>핵심:</strong> 모든 가압류에 담보가 필요한 것은 아닙니다. 법원이 필요하다고 판단할 때만 결정에서 "담보 조건"을 부여합니다.</p>
                <p style="margin-top: 15px;"><strong>담보 금액:</strong> 법원이 재량으로 결정 — 통상 청구금액의 10~20% 수준</p>
            </div>` },
      { heading: '상세설명', content: `<h3>가압류 담보의 의미</h3>
            <div class="concept-box">
                <h4>왜 담보를 요구할까?</h4>
                <p>가압류는 본안 판결 전에 진행되는 보전처분이므로, 채권자의 청구권이 확실하지 않을 수 있습니다. 만약 나중에:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>본안소송에서 패소</li>
                    <li>가압류가 부당함을 인정</li>
                    <li>채무자의 이의 신청이 인용</li>
                </ul>
                <p style="margin-top: 15px;">이런 경우 채무자가 가압류로 인해 손해를 입을 수 있습니다 (사업 기회 상실, 신용 훼손, 재산 손실 등). 이 손해를 보상하기 위해 법원이 담보를 요구합니다.</p>
            </div>

            <div class="concept-box">
                <h4>담보 금액은 누가 정하나?</h4>
                <p><strong>법원이 결정합니다.</strong> 신청자가 요청하는 금액이 아니라, 법원이 다음을 고려하여 결정합니다:</p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>청구금액의 규모</li>
                    <li>가압류 대상 재산의 가치</li>
                    <li>채무자가 입을 수 있는 손해의 정도</li>
                    <li>피보전권리의 명확성</li>
                </ul>
                <p style="margin-top: 15px;"><strong>통상:</strong> 청구금액의 10~20% 정도이지만, 법원과 사건에 따라 다릅니다.</p>
            </div>

            <h3>가압류 담보 제공 방법</h3>

            <div class="method-box">
                <div class="method-header">방법 1. 현금 공탁 (일반적)</div>
                <div class="method-content">
                    <p><strong>가장 확실하고 전통적인 방법입니다.</strong></p>
                    <p style="margin-top: 12px;"><strong>절차:</strong></p>
                    <div class="step-item">
                        <strong>1단계: 법원 공탁소 방문</strong><br>
                        <span style="margin-top: 8px; display: block;">신청한 법원의 공탁소(민사과 내 공탁계)를 방문합니다.</span>
                    </div>
                    <div class="step-item">
                        <strong>2단계: 공탁서 작성</strong><br>
                        <span style="margin-top: 8px; display: block;">공탁 담당자에게 가압류 사건번호, 담보금액을 알리고 공탁서를 작성합니다.</span>
                    </div>
                    <div class="step-item">
                        <strong>3단계: 현금 납부</strong><br>
                        <span style="margin-top: 8px; display: block;">결정된 담보금액을 현금으로 지급합니다.</span>
                    </div>
                    <div class="step-item">
                        <strong>4단계: 공탁증서 수령</strong><br>
                        <span style="margin-top: 8px; display: block;">공탁소에서 "공탁증서"를 발급받습니다. 이것이 담보 제공의 증거입니다.</span>
                    </div>
                    <p style="margin-top: 15px;"><strong>장점:</strong> 간단하고 빠름. 법원이 바로 인정.</p>
                    <p style="margin-top: 10px;"><strong>단점:</strong> 많은 현금이 필요. 공탁 후 돌려받을 때까지 기간이 걸림.</p>
                    <p style="margin-top: 10px;"><strong>이자:</strong> 공탁금은 이자를 받지 않습니다.</p>
                </div>
            </div>

            <div class="method-box">
                <div class="method-header">방법 2. 보증보험증권 (현금 부담 없음)</div>
                <div class="method-content">
                    <p><strong>보험회사에서 "보증"을 받는 방법입니다. 현금을 내지 않습니다.</strong></p>
                    <p style="margin-top: 12px;"><strong>절차:</strong></p>
                    <div class="step-item">
                        <strong>1단계: 보증보험회사 선택</strong><br>
                        <span style="margin-top: 8px; display: block;">서울보증보험, 우리손보 등 법원이 인정하는 보증보험회사를 선택합니다.</span>
                    </div>
                    <div class="step-item">
                        <strong>2단계: 신청</strong><br>
                        <span style="margin-top: 8px; display: block;">가압류 사건번호, 담보금액, 당사자 정보를 알리고 보증신청을 합니다. 온라인이나 방문 모두 가능합니다.</span>
                    </div>
                    <div class="step-item">
                        <strong>3단계: 신용도 심사</strong><br>
                        <span style="margin-top: 8px; display: block;">보험회사가 신청자의 신용도를 간단히 확인합니다.</span>
                    </div>
                    <div class="step-item">
                        <strong>4단계: 보증료 납부</strong><br>
                        <span style="margin-top: 8px; display: block;">담보금액의 일정 비율(통상 5~10%)을 보증료로 내고, 증권을 받습니다.</span>
                    </div>
                    <div class="step-item">
                        <strong>5단계: 법원에 제출</strong><br>
                        <span style="margin-top: 8px; display: block;">받은 보증보험증권을 법원에 제출하면 담보 제공 완료입니다.</span>
                    </div>
                    <p style="margin-top: 15px;"><strong>장점:</strong> 현금이 필요 없음. 비용이 적음 (보증료만). 속도가 빠름.</p>
                    <p style="margin-top: 10px;"><strong>단점:</strong> 신용도 심사가 필요. 신용도가 낮으면 거절될 수 있음.</p>
                    <p style="margin-top: 10px;"><strong>비용:</strong> 보증료만 내면 됨. 예: 담보금 1,000만원 × 5% = 50만원</p>
                </div>
            </div>

            <div class="method-box">
                <div class="method-header">방법 3. 유가증권 공탁 (드문 경우)</div>
                <div class="method-content">
                    <p><strong>국채, 지방채 등 법원이 인정하는 유가증권으로 공탁할 수 있습니다.</strong> 다만, 현실적으로 거의 사용되지 않습니다.</p>
                </div>
            </div>

            <h3>담보 제공 기한</h3>
            <p>법원이 결정문에서 <strong>"○월 ○일까지 담보를 제공할 것"</strong>이라고 명시합니다. 이 기한을 넘으면:</p>
            <ul>
                <li>가압류 신청이 "기각" 처리될 수 있음</li>
                <li>담보 제공 없이는 가압류 결정이 효력을 잃을 수 있음</li>
                <li>다시 신청해야 할 수 있음</li>
            </ul>
            <p style="margin-top: 15px;"><strong>따라서 기한 내에 반드시 담보를 제공해야 합니다.</strong> 시간이 부족하면 법원에 "담보 제공 기한 연장" 신청을 할 수 있습니다.</p>

            <h3>담보 취소 및 반환</h3>
            <p>가압류 담보는 영구적이지 않습니다. 다음과 같은 경우 반환됩니다:</p>

            <div class="concept-box">
                <h4>담보 반환의 경우</h4>
                <p><strong>① 본안소송에서 승소한 경우</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">채권자(당신)가 본안소송에서 이기고 강제집행까지 완료하면, 담보의 목적(손해 보상)이 없어지므로 담보는 반환됩니다.</p>

                <p style="margin-top: 15px;"><strong>② 채무자가 손해배상청구를 하지 않은 경우</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">가압류가 취소되었어도, 채무자가 손해배상청구를 하지 않으면 일정 기간 후 반환 가능합니다.</p>

                <p style="margin-top: 15px;"><strong>③ 가압류 신청을 철회한 경우</strong></p>
                <p style="margin-left: 20px; margin-top: 8px;">신청자가 스스로 신청을 철회하면, 채무자에게 손해가 없으므로 담보는 반환됩니다.</p>
            </div>

            <h3>담보 반환 신청 절차</h3>
            <p>담보 반환을 원할 때는:</p>
            <ul>
                <li><strong>증거 준비:</strong> 본안소송 승소 판결문, 강제집행 완료 영수증 등</li>
                <li><strong>담보 반환 신청:</strong> 법원에 "담보 반환 신청"을 제출</li>
                <li><strong>채무자의 손해배상청구 여부 확인:</strong> 채무자가 손해배상청구를 하지 않았는지 확인</li>
                <li><strong>법원 승인:</strong> 법원이 인정하면 공탁소(또는 보험회사)에 반환 명령</li>
                <li><strong>받기:</strong> 공탁소에서 현금을 받거나, 보험료는 반환되지 않음 (손실)</li>
            </ul>

            <h3>담보와 손해배상청구의 관계</h3>
            <p>만약 가압류가 취소되고 채무자가 손해배상청구를 한다면:</p>
            <ul>
                <li><strong>손해배상청구 소송:</strong> 채무자가 별도 소송으로 손해배상을 청구</li>
                <li><strong>담보금 사용:</strong> 법원의 판결에 따라 담보금이 손해배상금으로 사용될 수 있음</li>
                <li><strong>담보 부족:</strong> 손해배상액이 담보금을 초과하면 추가로 배상해야 함</li>
            </ul>
            <p style="margin-top: 15px;"><strong>따라서 부당한 가압류는 피해야 합니다.</strong></p>` },
      { heading: '자주하는 질문', content: `<div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>담보 금액은 어떻게 결정되나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>법원이 재량으로 결정합니다.</strong></p>
                    <p style="margin-top: 10px;">일반적인 기준:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>청구금액의 10~20%:</strong> 가장 일반적</li>
                        <li><strong>낮은 금액:</strong> 피보전권리가 명확하고 보전의 필요성이 뚜렷하면 낮게</li>
                        <li><strong>높은 금액:</strong> 피보전권리가 불명확하거나 보전의 필요성이 약하면 높게</li>
                    </ul>
                    <p style="margin-top: 15px;">예: 100만원을 청구하는 가압류 → 담보 10~20만원</p>
                    <p style="margin-top: 10px;">법원이 결정한 담보금은 결정문에 기재되어 있습니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>담보를 현금으로 내면 이자가 붙나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>아닙니다. 이자가 없습니다.</strong></p>
                    <p style="margin-top: 10px;">공탁금은 순수 보관에 불과하므로 이자가 발생하지 않습니다. 따라서:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>1,000만원을 공탁 → 1년 후에도 1,000만원 그대로</li>
                        <li>이자 수익이 없음 = 실질적 손실 가능성 (물가 상승 등)</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>그러므로 보증보험을 사용하는 것이 경제적일 수 있습니다.</strong> 보증료를 내고도 남은 현금을 활용할 수 있기 때문입니다.</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>보증보험증권은 어디서 받을 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>법원이 인정하는 보증보험회사에서 받을 수 있습니다.</strong></p>
                    <p style="margin-top: 10px;">주요 회사:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>서울보증보험</li>
                        <li>우리손보(구 우리로손해보험)</li>
                        <li>삼성화재 (일부 법원)</li>
                        <li>기타 법원이 승인한 보험회사</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>신청 방법:</strong></p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>직접 방문: 각 회사의 지점 방문</li>
                        <li>온라인: 회사 홈페이지에서 신청 (가능한 경우)</li>
                        <li>전화: 상담을 통해 신청</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>필요 정보:</strong> 가압류 사건번호, 담보금액, 신청자의 신원정보</p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>담보를 제공하지 않으면 가압류 결정이 취소되나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>네, 취소될 수 있습니다.</strong></p>
                    <p style="margin-top: 10px;">법원이 결정에서 "담보 조건"을 부여한 경우:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>지정된 기한 내에 담보 미제공 → 가압류 신청 "기각"</li>
                        <li>담보를 내지 않으면 가압류가 효력을 갖지 못함</li>
                        <li>다시 신청하거나, 항고를 고려해야 함</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>따라서 담보 제공 기한은 반드시 지켜야 합니다.</strong></p>
                </div>
            </div>

            <div class="qa-item">
                <div class="qa-question" onclick="toggleQA(this)">
                    <span>가압류 취소 후 담보는 언제 돌려받을 수 있나요?</span>
                    <span class="qa-toggle">▼</span>
                </div>
                <div class="qa-answer">
                    <p><strong>가압류가 취소되는 경우에 따라 다릅니다.</strong></p>
                    <p style="margin-top: 10px;"><strong>① 본안소송에서 당신이 이기고 강제집행 완료:</strong></p>
                    <ul style="margin: 10px 0 15px 20px;">
                        <li>담보의 목적이 달성됨</li>
                        <li>"담보 반환 신청"을 하면 비교적 빠르게 반환 가능</li>
                        <li>통상 1~2개월</li>
                    </ul>
                    <p><strong>② 가압류가 부당하다고 판단되어 취소:</strong></p>
                    <ul style="margin: 10px 0 15px 20px;">
                        <li>채무자가 손해배상청구를 제기할 수 있음</li>
                        <li>손해배상 소송이 진행되는 동안 담보는 보관</li>
                        <li>소송 결과에 따라 반환 또는 손해배상금으로 사용</li>
                        <li>통상 소송 기간 동안 (수개월~수년)</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>③ 신청자가 스스로 가압류를 철회:</strong></p>
                    <ul style="margin: 10px 0 15px 20px;">
                        <li>채무자에게 손해가 없으므로 빠르게 반환</li>
                        <li>통상 1개월 이내</li>
                    </ul>
                </div>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div class="warning-content">
                        <strong>법원이 지정한 담보 제공 기간 내에 반드시 제공해야 함</strong>
                        <p style="margin-top: 8px;">기한을 넘으면 가압류 신청이 기각될 수 있습니다. 시간이 부족하면 법원에 "기한 연장" 신청을 즉시 해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div class="warning-content">
                        <strong>부당 가압류 시 담보금으로 채무자의 손해를 배상해야 할 수 있음</strong>
                        <p style="margin-top: 8px;">가압류가 부당하면, 담보금이 채무자의 손해배상금으로 사용될 수 있습니다. <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030300" target="_blank" rel="noopener">민사집행법 제303조</a>에 따라 부당한 가압류 신청자는 손해배상책임을 집니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div class="warning-content">
                        <strong>보증보험증권은 현금 공탁보다 비용이 적게 들지만 신용도 확인 필요</strong>
                        <p style="margin-top: 8px;">보증보험회사가 신용도가 낮으면 거절할 수 있습니다. 이 경우 현금 공탁으로 전환해야 합니다.</p>
                    </div>
                </div>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제280조 제2항', desc: '' },
      { name: '민사집행법 제303조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-6',
    title: '가압류를 당했을 때',
    meta: '',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item">
                    <span>갑자기 부동산이나 통장에 가압류가 됐다는 통지를 받았다</span>
                </div>
                <div class="checklist-item">
                    <span>가압류가 무엇이고 어떤 효력이 있는지 모르겠다</span>
                </div>
                <div class="checklist-item">
                    <span>상대방의 채권이 정당한지 의심스럽다</span>
                </div>
                <div class="checklist-item">
                    <span>가압류를 풀 수 있는지, 방법이 무엇인지 모르겠다</span>
                </div>
                <div class="checklist-item">
                    <span>가압류된 재산을 계속 사용할 수 있는지 모르겠다</span>
                </div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>가압류란 무엇인가</h3>
                <ul>
                    <li><strong>가압류는 채권자가 법원에 신청하여 받은 잠정적 처분</strong> → 확정 판결이 아님</li>
                    <li><strong>소유권은 채무자에게 유지</strong> → 다만 처분·이전 행위는 채권자에게 대항 불가</li>
                    <li><strong>채무자의 권리는 3가지</strong> → ①가압류 이의 신청, ②가압류 취소 신청, ③담보 제공에 의한 집행 취소</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<div class="detail-section">
                <h3>가압류가 무엇인가</h3>
                <p>가압류는 채권자가 금전채권의 실현을 위해 법원에 신청하여 얻는 잠정적 강제집행 처분입니다. 채무자의 재산을 미리 묶어두어 판결 후 강제집행을 용이하게 하는 제도입니다.</p>
                <div class="law-reference"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027600" target="_blank" rel="noopener">민사집행법 제276조</a></div>
                <p><strong>핵심: 가압류는 '확정되지 않은 채권'을 보전하기 위한 임시 처분이므로, 반드시 본안 소송을 통해 채권이 확정되어야 합니다.</strong></p>
            </div>

            <div class="detail-section">
                <h3>가압류된 재산의 효력</h3>
                <h4 style="color: #555; margin-top: 15px;">1) 부동산에 가압류가 붙은 경우</h4>
                <ul>
                    <li><strong>등기촉탁</strong>: 부동산등기부에 "가압류" 표시</li>
                    <li><strong>처분 제한</strong>: 소유권 이전, 담보 설정 등이 제한됨</li>
                    <li><strong>하지만 소유권은 유지</strong>: 부동산에 거주·사용 가능</li>
                    <li><strong>경우에 따라 처분 가능</strong>: 경매나 공매로 판매 시 대금을 채권자가 회수</li>
                </ul>

                <h4 style="color: #555; margin-top: 15px;">2) 예금에 가압류가 붙은 경우</h4>
                <ul>
                    <li><strong>제3채무자(은행) 통지</strong>: 은행에 가압류 통지</li>
                    <li><strong>인출 불가</strong>: 채무자가 예금을 인출할 수 없음</li>
                    <li><strong>계속 이자 발생</strong>: 예금의 이자는 일반적으로 계속 발생</li>
                </ul>

                <h4 style="color: #555; margin-top: 15px;">3) 급여에 가압류가 붙은 경우</h4>
                <ul>
                    <li><strong>매월 공제</strong>: 급여 지급 시마다 가압류 범위 내에서 공제</li>
                    <li><strong>생계비 제외</strong>: 최저생계비는 보호받을 수 있음</li>
                </ul>
            </div>

            <div class="detail-section">
                <h3>채무자의 3가지 대응 방법</h3>
                <h4 style="color: #555; margin-top: 15px;">① 가압류 이의 신청</h4>
                <p><strong>근거</strong>: <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028300" target="_blank" rel="noopener">민사집행법 제283조</a></p>
                <p>가압류 결정에 대해 이의를 제기할 수 있습니다.</p>
                <ul>
                    <li>피보전권리가 없음을 소명</li>
                    <li>보전의 필요성이 없음을 소명</li>
                    <li>재판부에서 심문 절차 진행</li>
                    <li>결과: 가압류 결정 취소 또는 유지</li>
                </ul>
                <p style="margin-top: 15px;"><strong>언제 신청?</strong> 가압류 통지를 받은 후 가능 (특정 기간 제한 없음)</p>

                <h4 style="color: #555; margin-top: 20px;">② 담보 제공에 의한 집행 취소</h4>
                <p><strong>근거</strong>: <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028200" target="_blank" rel="noopener">민사집행법 제282조</a></p>
                <p>채무자가 담보(금전, 보증보험)를 제공하면 가압류 집행이 취소됩니다.</p>
                <ul>
                    <li><strong>담보 금액</strong>: 가압류 청구금액 이상</li>
                    <li><strong>방법</strong>: 법원 공탁 또는 보증보험</li>
                    <li><strong>장점</strong>: 가장 신속한 방법</li>
                    <li><strong>주의</strong>: 담보 제공 = 채무 인정이 아님</li>
                </ul>

                <h4 style="color: #555; margin-top: 20px;">③ 사정 변경에 의한 취소</h4>
                <p><strong>근거</strong>: <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028800" target="_blank" rel="noopener">민사집행법 제288조</a></p>
                <p>가압류 이후 상황이 바뀌면 취소를 신청할 수 있습니다.</p>
                <ul>
                    <li>본안 소송에서 채권자가 패소한 경우</li>
                    <li>채무자가 채권자와 합의한 경우</li>
                    <li>채권자가 본안 소송을 제기하지 않은 경우 (⚡ 기간 제한 있음)</li>
                </ul>
            </div>

            <div class="detail-section">
                <h3>가압류 통지 받았을 때 해야 할 일</h3>
                <ol style="margin-left: 20px;">
                    <li><strong>가압류 내용 확인</strong>: 가압류 결정문 읽어보기 (피보전권리, 금액, 대상 재산 확인)</li>
                    <li><strong>법률전문가 상담</strong>: 변호사 또는 법무사와 상담 (이의 신청 여부 검토)</li>
                    <li><strong>신속한 대응</strong>: 가압류에 이의가 있다면 조속히 신청서 제출</li>
                    <li><strong>담보 제공 검토</strong>: 금전적 여유가 있으면 담보 제공으로 즉시 해제 가능</li>
                    <li><strong>본안 대비</strong>: 채권자가 소송을 제기했다면 본안 소송에 적극 대응</li>
                </ol>
            </div>` },
      { heading: '자주 하는 질문', content: `<div class="qa-item question">
                <div class="qa-question">가압류된 부동산에 계속 살 수 있나요?</div>
                <div class="qa-answer">
                    <p>네, 가능합니다. 가압류는 소유권을 뺏는 것이 아니라 처분(판매, 이전)을 제한할 뿐이므로, 계속 거주하거나 사용할 수 있습니다. 다만 그 부동산을 팔거나 담보로 잡힐 수 없습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가압류가 잘못됐다고 생각하는데 어떻게 해야 하나요?</div>
                <div class="qa-answer">
                    <p>가압류 이의 신청(<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028300" target="_blank" rel="noopener">민사집행법 제283조</a>)을 법원에 제출하세요. 상대방의 채권이 존재하지 않거나 가압류할 필요가 없다는 점을 증거로 제시하면 됩니다. 법원이 인정하면 가압류 결정이 취소됩니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">상대방이 소송을 제기하지 않으면 가압류는 언제까지 유지되나요?</div>
                <div class="qa-answer">
                    <p>채권자가 가압류 후 일정 기간 내에(일반적으로 2주) 본안 소송을 제기하거나 기존 소송의 기일을 신청하지 않으면, 채무자는 취소 신청을 할 수 있습니다(<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>). 이를 통해 가압류를 풀 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가압류를 풀기 위해 담보를 제공하면 채권자와 합의한 것이 되나요?</div>
                <div class="qa-answer">
                    <p>아닙니다. 담보 제공은 가압류 집행을 취소하기 위한 절차일 뿐이며, 채무를 인정하거나 합의한 것이 아닙니다. 이후 채권의 정당성을 다투거나 본안 소송을 진행할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가압류 후 그 재산을 팔면 어떻게 되나요?</div>
                <div class="qa-answer">
                    <p>부동산인 경우 등기부에 가압류 표시가 있으므로 일반 판매가 어렵습니다. 강제경매나 공매를 통해 판매하면 그 대금을 채권자가 회수합니다. 따라서 무단 처분은 피하고, 법원의 가압류 해제를 받는 것이 현명합니다.</p>
                </div>
            </div>` },
      { heading: '관련 판례', content: `<div class="ruling-box">
                <span class="ruling-label">대법원 판시 내용</span>
                대법원은 가압류 채무자가 가압류 결정에 이의를 신청하는 경우, 가압류의 피보전권리가 존재하지 않거나 보전의 필요성이 없다는 점을 소명하면 법원은 가압류 결정을 취소하거나 변경할 수 있다고 판시하고 있습니다.
            </div>` },
      { heading: '주의사항', content: `<div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">⚡</span>
                    기간 제한: 신속한 대응이 필요합니다
                </div>
                <p>가압류 이의 신청에는 별도의 기간 제한은 없으나, 시간이 지날수록 사정이 불리해질 수 있으므로 조속히 신청하는 것이 유리합니다. 또한 상대방이 소송을 제기하지 않으면 채무자는 취소 신청이 가능합니다.</p>
            </div>

            <div class="caution-item warning">
                <div class="caution-label">
                    <span class="caution-icon">⚠️</span>
                    잘못된 처리 결과
                </div>
                <p>가압류된 재산을 무단으로 처분하면 강제집행 방해죄(<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=188383&joNo=031100" target="_blank" rel="noopener">형법 제311조</a>)에 해당될 수 있으며, 형사처벌을 받을 가능성이 있습니다. 반드시 법원의 절차를 통해 해제를 진행하세요.</p>
            </div>

            <div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">ℹ️</span>
                    예외 사항
                </div>
                <p>가압류는 본안판결이 아니므로 채무가 법적으로 확정된 것이 아닙니다. 따라서 이의 신청을 통해 가압류 결정 자체를 다툴 수 있고, 본안 소송에서 채무 자체를 부인할 수 있습니다.</p>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="detail-section">
                <ul>
                    <li><strong>본안 소송 준비</strong>: 상대방이 소송을 제기했다면 법원의 소장 등본을 잘 읽고 법률전문가 상담 예약</li>
                    <li><strong>증거 수집</strong>: 채무가 없음을 증명할 증거 수집 (계약서, 영수증, 문자 메시지, 송금 내역 등)</li>
                    <li><strong>담보 제공 검토</strong>: 금전적 여유가 있으면 공탁을 통해 신속히 가압류 해제 가능</li>
                    <li><strong>법무사·변호사 선임</strong>: 가압류 이의 신청이나 본안 소송 대응을 위해 전문가 도움 필요</li>
                    <li><strong>합의 가능성 검토</strong>: 필요하면 상대방과의 합의를 통해 해결 가능성 검토</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제276조', desc: '' },
      { name: '민사집행법 제283조', desc: '' },
      { name: '민사집행법 제282조', desc: '' },
      { name: '민사집행법 제288조', desc: '' },
      { name: '민사집행법 제287조', desc: '' },
      { name: '형법 제311조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-7',
    title: '가압류 취소·해제',
    meta: '',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item">
                    <span>부당하게 가압류를 당해 취소하고 싶다</span>
                </div>
                <div class="checklist-item">
                    <span>채무를 변제했는데 가압류가 그대로 남아 있다</span>
                </div>
                <div class="checklist-item">
                    <span>상대방(채권자)이 본안소송을 제기하지 않아 가압류를 취소하고 싶다</span>
                </div>
                <div class="checklist-item">
                    <span>가압류를 풀기 위해 담보를 제공하는 방법을 알고 싶다</span>
                </div>
                <div class="checklist-item">
                    <span>가압류 이의 신청 절차가 궁금하다</span>
                </div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>가압류 취소·해제의 4가지 방법</h3>
                <ul>
                    <li><strong>방법 1: 가압류 이의 신청</strong> → 피보전권리 없음 또는 보전의 필요성 없음 소명</li>
                    <li><strong>방법 2: 담보 제공에 의한 집행 취소</strong> → 가장 빠른 방법, 공탁이나 보증보험으로 가능</li>
                    <li><strong>방법 3: 사정 변경에 의한 취소</strong> → 본안 패소 또는 채권자의 소송 미제기 시</li>
                    <li><strong>방법 4: 본안소송 판결에 의한 취소</strong> → 채권자가 패소 확정 시</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<div class="detail-section">
                <h3>가압류 취소·해제의 4가지 방법</h3>

                <div class="method-box">
                    <div class="method-number">1</div>
                    <h4>가압류 이의 신청</h4>
                    <div class="law-reference"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028300" target="_blank" rel="noopener">민사집행법 제283조</a></div>
                    <p><strong>개요:</strong> 가압류 결정에 대해 이의를 제기하는 방법입니다.</p>
                    <p><strong>신청 요건:</strong></p>
                    <ul>
                        <li>피보전권리가 없음을 소명 (채권자의 채권이 존재하지 않음)</li>
                        <li>보전의 필요성이 없음을 소명 (가압류할 필요가 없음)</li>
                    </ul>
                    <p><strong>절차:</strong> 신청 → 법원 심문 → 결정 (인가 또는 취소)</p>
                    <p><strong>장점:</strong> 채무 자체를 다툴 수 있음</p>
                    <p><strong>단점:</strong> 시간 소요, 법원의 판단이 필수</p>
                </div>

                <div class="method-box">
                    <div class="method-number">2</div>
                    <h4>담보 제공에 의한 집행 취소</h4>
                    <div class="law-reference"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028200" target="_blank" rel="noopener">민사집행법 제282조</a></div>
                    <p><strong>개요:</strong> 채무자가 담보를 제공하면 가압류 집행이 취소됩니다.</p>
                    <p><strong>담보의 종류:</strong></p>
                    <ul>
                        <li><strong>금전 공탁:</strong> 법원에 가압류 청구금액 이상을 공탁</li>
                        <li><strong>보증보험:</strong> 보증보험사로부터 보증보험증권 취득</li>
                    </ul>
                    <p><strong>담보 금액:</strong> 가압류 청구금액 이상 (정확한 금액은 가압류 결정문 참조)</p>
                    <p><strong>절차:</strong> 담보 제공 → 집행 취소 신청 → 법원 결정 → 가압류 해제</p>
                    <p><strong>장점:</strong> 가장 신속함 (수일 내 완료 가능), 담보 후 본안 대응 가능</p>
                    <p><strong>주의:</strong> 담보 제공 ≠ 채무 인정 (이후 본안에서 채무를 다툰다는 입장 전달 필요)</p>
                </div>

                <div class="method-box">
                    <div class="method-number">3</div>
                    <h4>사정 변경에 의한 취소</h4>
                    <div class="law-reference"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028800" target="_blank" rel="noopener">민사집행법 제288조</a></div>
                    <p><strong>개요:</strong> 가압류 이후 상황이 변하면 취소를 신청할 수 있습니다.</p>
                    <p><strong>취소 사유:</strong></p>
                    <ul>
                        <li>본안 소송에서 채권자가 패소 확정된 경우</li>
                        <li>채무자가 채권자와 합의한 경우</li>
                        <li>채권자가 본안 소송을 제기하지 않은 경우 (⚡ 기간 제한 있음)</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>중요한 기간 제한:</strong> 채권자는 가압류 집행 후 <strong>일정 기간 내</strong>에 본안 소송을 제기하거나 기존 소송의 기일을 신청해야 합니다(<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>). 이를 태만하면 채무자는 취소 신청을 할 수 있습니다.</p>
                    <p><strong>장점:</strong> 사정이 명백하면 신속하게 취소 가능</p>
                </div>

                <div class="method-box">
                    <div class="method-number">4</div>
                    <h4>본안소송 판결에 의한 취소</h4>
                    <p><strong>개요:</strong> 본안에서 채권자가 패소하면 자동으로 또는 신청을 통해 취소됩니다.</p>
                    <p><strong>취소 절차:</strong></p>
                    <ul>
                        <li>법원의 본안 판결에서 채권자가 패소</li>
                        <li>판결이 확정됨</li>
                        <li>채무자의 취소 신청 또는 법원 직권 취소</li>
                    </ul>
                    <p><strong>장점:</strong> 채무를 최종적으로 부인할 수 있음</p>
                    <p><strong>단점:</strong> 시간이 오래 걸림 (수개월 ~ 수년)</p>
                </div>
            </div>

            <div class="detail-section">
                <h3>담보 제공 절차 (가장 신속한 방법)</h3>
                <p>담보 제공에 의한 집행 취소가 가장 빠르고 실제로 많이 사용되는 방법입니다. 절차를 상세히 설명합니다.</p>

                <div class="step-box">
                    <span class="step-number">1단계</span>
                    <h4>가압류 집행 취소 신청서 작성</h4>
                    <p>법원 지정 서식 사용 또는 변호사/법무사 작성</p>
                </div>

                <div class="step-box">
                    <span class="step-number">2단계</span>
                    <h4>담보 제공</h4>
                    <p><strong>공탁:</strong> 가압류 금액을 법원 공탁소에 공탁 또는</p>
                    <p><strong>보증보험:</strong> 보증보험사에서 보증보험증권 취득</p>
                </div>

                <div class="step-box">
                    <span class="step-number">3단계</span>
                    <h4>공탁증서 또는 보증보험증권 제출</h4>
                    <p>취소 신청서와 함께 법원에 제출</p>
                </div>

                <div class="step-box">
                    <span class="step-number">4단계</span>
                    <h4>법원의 집행 취소 결정</h4>
                    <p>법원이 담보 제공을 확인하고 취소 결정</p>
                </div>

                <div class="step-box">
                    <span class="step-number">5단계</span>
                    <h4>가압류 집행 취소</h4>
                    <p><strong>부동산:</strong> 등기부에서 가압류 등기 말소</p>
                    <p><strong>예금:</strong> 제3채무자(은행)에 취소 통지</p>
                    <p><strong>급여:</strong> 채무자 직장에 취소 통지</p>
                </div>
            </div>

            <div class="detail-section">
                <h3>필요한 서류</h3>
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
                            <td>가압류 취소 신청서</td>
                            <td>-</td>
                            <td>직접 작성 또는 전문가 작성</td>
                        </tr>
                        <tr>
                            <td>가압류 결정문 사본</td>
                            <td>해당 법원</td>
                            <td>원본 대조 필요</td>
                        </tr>
                        <tr>
                            <td>공탁증서 또는 보증보험증권</td>
                            <td>공탁소 또는 보증보험사</td>
                            <td>금액 확인 필수</td>
                        </tr>
                        <tr>
                            <td>채무 변제 입증 서류 (해당하는 경우)</td>
                            <td>-</td>
                            <td>영수증, 계좌이체 내역, 합의서 등</td>
                        </tr>
                    </tbody>
                </table>
            </div>` },
      { heading: '자주 하는 질문', content: `<div class="qa-item question">
                <div class="qa-question">채무를 다 갚았는데 채권자가 가압류를 풀어주지 않으면?</div>
                <div class="qa-answer">
                    <p>채무 변제의 증거(영수증, 계좌이체 내역 등)를 준비하여 법원에 집행 취소를 신청하세요. 채무 변제를 증명하면 법원은 가압류를 취소하라고 채권자에게 명령할 수 있습니다. 또는 담보를 제공하여 신속히 해제할 수도 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">담보 제공으로 가압류를 풀면 채무를 인정한 것인가요?</div>
                <div class="qa-answer">
                    <p>아닙니다. 담보 제공은 가압류 집행 절차를 취소하는 것일 뿐입니다. 담보를 제공할 때 '채무를 인정하지 않으면서 집행을 피하기 위해 담보를 제공한다'는 입장을 밝히면, 이후 본안 소송에서 채무를 다툴 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가압류 이의와 취소는 어떻게 다른가요?</div>
                <div class="qa-answer">
                    <p><strong>이의 신청:</strong> 가압류 결정 자체의 정당성을 다투는 것 (피보전권리 없음, 보전의 필요성 없음을 소명)</p>
                    <p><strong>취소 신청:</strong> 가압류 결정 이후 발생한 상황 변화로 취소를 신청하는 것 (채무 변제, 합의, 채권자의 소송 미제기 등)</p>
                    <p>이의는 채권 자체를 다툰다는 의미이고, 취소는 절차적 이유로 해제한다는 의미입니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">여러 개의 가압류가 있으면 각각 취소해야 하나요?</div>
                <div class="qa-answer">
                    <p>네, 각각의 가압류마다 취소 신청서를 작성하여 별도로 신청해야 합니다. 다만 담보 제공의 경우 총 담보 금액이 모든 가압류 청구금액의 합을 초과하면 여러 건을 한 번에 해제할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">법원이 취소 신청을 기각하면 어떻게 되나요?</div>
                <div class="qa-answer">
                    <p>법원의 기각 결정에 불복하여 '항고'를 제기할 수 있습니다. 항고는 법원에 대한 재심 신청이므로, 변호사나 법무사의 도움이 필요합니다. 이의 신청과 달리 취소 신청이 기각되었다는 것은 절차적 사유로 취소할 수 없다는 의미이므로, 다른 방법(이의 신청 등)을 검토해야 합니다.</p>
                </div>
            </div>` },
      { heading: '관련 판례', content: `<div class="ruling-box">
                <span class="ruling-label">대법원 판시 내용</span>
                가압류 집행의 취소 신청에서 담보가 제공되었을 때, 법원은 담보의 충분성을 판단하여 취소 결정을 합니다. 담보의 금액이 가압류 청구금액 이상이면 충분한 담보로 인정되어 집행이 취소됩니다.
            </div>` },
      { heading: '주의사항', content: `<div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">⚡</span>
                    기간 제한: 채권자의 소송 제기 기한
                </div>
                <p>채권자가 가압류 집행 후 일정 기간 내에 본안 소송을 제기하거나 기존 소송의 기일을 신청하지 않으면, 채무자는 취소 신청을 할 수 있습니다(<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>). 이 기간 동안 채권자가 소극적이면 채무자에게 유리합니다.</p>
            </div>

            <div class="caution-item warning">
                <div class="caution-label">
                    <span class="caution-icon">⚠️</span>
                    잘못된 처리 결과
                </div>
                <p>담보 제공으로 집행이 취소되더라도 <strong>가압류 결정 자체는 유효</strong>합니다. 따라서 채권자는 언제든 다시 집행을 신청할 수 있습니다. 근본적인 해결을 위해서는 본안 소송을 진행하거나 가압류 이의를 신청해야 합니다.</p>
            </div>

            <div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">ℹ️</span>
                    예외 사항
                </div>
                <p>가압류 취소 결정이 확정되면 법원이 자동으로 또는 신청에 의해 등기말소나 제3채무자 통지 등의 조치를 합니다. 따라서 취소 결정 후 별도의 조치는 필요 없습니다. 다만 확인 차원에서 등기부를 확인하거나 은행에 연락하는 것이 좋습니다.</p>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="detail-section">
                <ul>
                    <li><strong>담보 제공 검토:</strong> 금전적 여유가 있으면 즉시 담보를 제공하여 가압류를 해제</li>
                    <li><strong>본안 소송 대비:</strong> 가압류가 해제되어도 채권자가 본안 소송을 진행할 수 있으므로 증거 수집</li>
                    <li><strong>가압류 이의 신청 검토:</strong> 채무가 없거나 부당한 경우 이의 신청</li>
                    <li><strong>상대방 연락:</strong> 채무를 변제했거나 합의 가능한 경우 상대방과 협상</li>
                    <li><strong>법률전문가 상담:</strong> 상황에 맞는 최적의 방법을 법무사나 변호사와 검토</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제283조', desc: '' },
      { name: '민사집행법 제282조', desc: '' },
      { name: '민사집행법 제288조', desc: '' },
      { name: '민사집행법 제287조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-8',
    title: '가처분이란 무엇인가',
    meta: '',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item">
                    <span>돈이 아닌 특정 부동산이나 물건에 관한 권리가 침해받고 있다</span>
                </div>
                <div class="checklist-item">
                    <span>상대방의 행위로 나의 법적 지위가 위협받고 있다</span>
                </div>
                <div class="checklist-item">
                    <span>소송까지 기다리기 어려운 긴급한 상황이다</span>
                </div>
                <div class="checklist-item">
                    <span>가처분이 가압류와 어떻게 다른지 모르겠다</span>
                </div>
                <div class="checklist-item">
                    <span>어떤 종류의 가처분을 신청해야 하는지 모르겠다</span>
                </div>
                <div class="checklist-item">
                    <span>긴급하게 상대방의 행동을 멈추게 해야 한다</span>
                </div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>가처분의 핵심</h3>
                <ul>
                    <li><strong>가처분은 특정 물건이나 법률관계를 보전하는 임시 처분</strong> → 금전이 아닌 권리 보전</li>
                    <li><strong>가처분의 2가지 종류</strong> → ①다툼 대상의 가처분(부동산 처분금지 등), ②임시지위 가처분(직위보전, 공사중지 등)</li>
                    <li><strong>피보전권리가 있어야 함</strong> → 특정물에 관한 이행청구권이 필요</li>
                    <li><strong>본안 소송과 함께 진행</strong> → 가처분만으로는 최종 해결이 불가능</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<div class="detail-section">
                <h3>가처분이란 무엇인가</h3>
                <p>가처분은 <strong>금전 이외의 특정 물건이나 법률관계를 보전하기 위해 법원이 내리는 임시 처분</strong>입니다. 소송의 결과가 나올 때까지 현재의 상태를 유지하거나 권리를 임시로 보호하기 위한 제도입니다.</p>
                <div class="law-reference"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조</a></div>
                <p><strong>핵심 특징:</strong> 본안 판결이 나오기 전에 채권자의 권리가 실현 불가능해지거나 현저히 곤란해질 염려가 있을 때 긴급하게 사용하는 임시 처분입니다.</p>
            </div>

            <div class="detail-section">
                <h3>가압류 vs 가처분: 무엇이 다른가</h3>
                <div class="comparison-box">
                    <h4>둘의 차이점</h4>
                    <div class="comparison-row">
                        <div class="comparison-item">
                            <span class="comparison-label">가압류</span>
                            <p>금전채권의 보전을 목적으로 함</p>
                            <p>예: 돈을 빌려준 채권</p>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-label">가처분</span>
                            <p>금전 이외의 특정 물건·권리의 보전을 목적으로 함</p>
                            <p>예: 부동산, 건물, 물건</p>
                        </div>
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-item">
                            <span class="comparison-label">보전 대상</span>
                            <p>금전 채권</p>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-label">보전 대상</span>
                            <p>특정물에 관한 권리 (소유권이전청구권, 명도청구권 등)</p>
                        </div>
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-item">
                            <span class="comparison-label">집행 방법</span>
                            <p>등기, 제3채무자 통지 등</p>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-label">집행 방법</span>
                            <p>다양함 (등기, 점유, 금지 명령 등)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h3>가처분의 두 가지 종류</h3>

                <div class="type-box">
                    <h4>① 다툼의 대상에 관한 가처분 (제300조 제1항)</h4>
                    <p><strong>목적:</strong> 특정 물건·권리에 관한 이행청구권을 보전하는 것</p>
                    <p><strong>피보전권리:</strong> 특정물에 관한 이행청구권</p>
                    <ul>
                        <li>소유권이전청구권 (부동산, 물건의 소유를 요구)</li>
                        <li>명도청구권 (건물이나 토지를 비워달라고 요구)</li>
                        <li>인도청구권 (물건을 반납해달라고 요구)</li>
                        <li>말소등기청구권 (잘못된 등기를 지워달라고 요구)</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>예시:</strong> 매매계약을 했는데 상대방이 다른 사람에게 팔려고 할 때, 임차인이 명도를 거부할 때</p>
                </div>

                <div class="type-box">
                    <h4>② 임시의 지위를 정하기 위한 가처분 (제300조 제2항)</h4>
                    <p><strong>목적:</strong> 쟁점 있는 법률관계에서 현저한 손해나 급박한 위험을 방지하기 위한 것</p>
                    <p><strong>요건:</strong> 현저한 손해 또는 급박한 위험이 있을 것</p>
                    <ul>
                        <li>직위보전 가처분 (직원이 부당 해고되었을 때 직위 유지)</li>
                        <li>공사중지 가처분 (공사 중단)</li>
                        <li>영업금지 가처분 (특정 영업을 멈추도록)</li>
                        <li>배제 가처분 (상대방을 건물에서 내보내기)</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>예시:</strong> 부당해고 분쟁에서 피고용인의 직위를 임시로 보장할 필요가 있을 때, 건물 점거 분쟁에서 점유 상태를 임시로 유지해야 할 때</p>
                </div>
            </div>

            <div class="detail-section">
                <h3>가처분 신청의 요건</h3>
                <h4 style="color: #555; margin-top: 0;">1) 피보전권리 (다툼의 대상에 관한 가처분)</h4>
                <ul>
                    <li><strong>특정물에 관한 이행청구권이어야 함</strong>: 돈이 아닌 물건이나 권리</li>
                    <li><strong>청구권이 현존해야 함</strong>: 매매계약, 임차계약, 명의신탁 관계 등이 있어야 함</li>
                    <li><strong>민사소송으로 보호받을 수 있는 권리</strong>: 행정 처분이나 형사 소송이 아닌 민사상 권리</li>
                    <li><strong>강제집행에 적합한 권리</strong>: 법원이 집행 가능한 권리</li>
                </ul>

                <h4 style="color: #555; margin-top: 20px;">2) 보전의 필요성</h4>
                <ul>
                    <li><strong>다툼의 대상에 관한 가처분:</strong> 상대방이 물건을 처분하면 권리 실행이 불가능해질 염려</li>
                    <li><strong>임시지위 가처분:</strong> 현저한 손해 또는 급박한 위험이 있어야 함</li>
                </ul>

                <h4 style="color: #555; margin-top: 20px;">3) 담보의 필요성</h4>
                <ul>
                    <li>법원이 필요하다고 판단하면 가처분 신청자가 담보(금전)를 제공해야 할 수 있음</li>
                </ul>
            </div>

            <div class="detail-section">
                <h3>가처분의 집행 방법</h3>
                <p>가처분의 종류에 따라 집행 방법이 다릅니다:</p>
                <ul>
                    <li><strong>부동산 처분금지 가처분:</strong> 등기부에 '처분금지 가처분' 등기</li>
                    <li><strong>점유이전금지 가처분:</strong> 집행관이 현장 방문, 고지문 부착</li>
                    <li><strong>영업금지 가처분:</strong> 상대방에게 고지문 전달, 경찰 협조</li>
                    <li><strong>점유 이전 가처분:</strong> 집행관이 점유 상태를 변경</li>
                </ul>
            </div>` },
      { heading: '자주 하는 질문', content: `<div class="qa-item question">
                <div class="qa-question">가처분과 가압류를 동시에 신청할 수 있나요?</div>
                <div class="qa-answer">
                    <p>네, 가능합니다. 예를 들어, 상대방에게 부동산 소유권이전청구권과 금전채권(손해배상청구권)이 모두 있다면, 부동산에 대해 처분금지 가처분을 신청하고 동시에 금전채권에 대해 가압류를 신청할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">임시지위 가처분은 어떤 경우에 인정받을 수 있나요?</div>
                <div class="qa-answer">
                    <p>현저한 손해나 급박한 위험이 있어야 합니다. 예를 들어, 부당해고 분쟁에서 근로자가 급여 지급을 받지 못해 생계가 위협받는 경우, 건물 점거 분쟁에서 현재 점유자가 강제퇴출될 위험이 있는 경우 등입니다. 이를 소명하기 위해서는 충분한 증거가 필요합니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가처분을 신청하면 상대방이 바로 알게 되나요?</div>
                <div class="qa-answer">
                    <p>가처분 신청서가 접수되면 법원이 상대방에게 답변 기회를 주기 위해 송달합니다. 다만 일부 긴급한 경우 채권자의 신청에 따라 상대방에게 통지하기 전에 가처분을 집행할 수도 있습니다(비공개 가처분). 이를 신청하려면 상대방에게 통지하면 권리 보전이 불가능한 특별한 사정을 증명해야 합니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가처분이 인용되면 즉시 효력이 발생하나요?</div>
                <div class="qa-answer">
                    <p>법원이 가처분 결정을 하면 그 결정을 접수한 때부터 효력이 발생합니다. 다만 부동산의 경우 등기를 촉탁해야 실질적 효력이 생기므로, 결정 후 즉시 등기촉탁을 신청해야 합니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가처분 결정 후 본안소송을 꼭 해야 하나요?</div>
                <div class="qa-answer">
                    <p>네, 반드시 해야 합니다. 가처분은 임시 처분이므로 최종적인 권리는 본안소송을 통해서만 확정됩니다. 일정 기간 내에 본안 소송을 제기하거나 기존 소송의 진행을 신청하지 않으면, 상대방의 신청에 따라 가처분이 취소될 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가처분 신청이 기각되면 다시 신청할 수 있나요?</div>
                <div class="qa-answer">
                    <p>법원이 가처분을 기각한 이유가 무엇인지에 따라 다릅니다. 새로운 증거가 생기거나 상황이 크게 달라진 경우라면 다시 신청할 수 있습니다. 다만 같은 이유로 반복 신청하는 것은 일반적으로 인정되지 않습니다.</p>
                </div>
            </div>` },
      { heading: '관련 판례', content: `<div class="ruling-box">
                <span class="ruling-label">대법원 판시 내용</span>
                대법원은 임시의 지위를 정하기 위한 가처분에서 보전의 필요성을 판단할 때 현저한 손해나 급박한 위험이 있는지를 소명 당시의 상황을 기준으로 판단한다고 판시하고 있습니다. 따라서 신청 시점에서의 상황이 중요하며, 법원을 납득시킬 충분한 증거가 필요합니다.
            </div>` },
      { heading: '주의사항', content: `<div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">⚡</span>
                    기간 제한: 본안소송 제기 의무
                </div>
                <p>가처분은 잠정처분이므로 본안소송을 통해 권리를 최종 확정해야 합니다. 가처분 이후 일정 기간 내에 본안 소송을 제기하거나 기존 소송의 기일을 신청하지 않으면, 상대방의 신청에 따라 가처분이 취소될 수 있습니다.</p>
            </div>

            <div class="caution-item warning">
                <div class="caution-label">
                    <span class="caution-icon">⚠️</span>
                    잘못된 처리 결과
                </div>
                <p>부당한 가처분 신청은 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030300" target="_blank" rel="noopener">민사집행법 제303조</a>에 따라 손해배상책임을 초래할 수 있습니다. 근거 없이 상대방의 재산이나 권리를 부당하게 제한하는 가처분을 신청했다면, 나중에 상대방으로부터 손해배상을 청구받을 수 있으므로 신중한 검토가 필요합니다.</p>
            </div>

            <div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">ℹ️</span>
                    예외 사항
                </div>
                <p>가처분은 가압류와 달리 집행 방법이 다양하고 복잡합니다. 부동산의 경우 등기촉탁, 건물 점거 분쟁의 경우 집행관의 현장 방문 등 각각의 상황에 맞는 집행이 필요하므로, 법률전문가와 함께 진행하는 것이 중요합니다.</p>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="detail-section">
                <ul>
                    <li><strong>피보전권리 확인:</strong> 자신의 권리가 가처분 신청의 대상이 되는지 확인 (소유권이전청구권, 명도청구권 등)</li>
                    <li><strong>보전의 필요성 입증:</strong> 상대방이 권리를 침해할 위험이 있다는 증거 수집 (예: 상대방의 매각 의사 표현, 거주자 변경 조짐 등)</li>
                    <li><strong>담보 준비:</strong> 법원이 요구할 수 있는 담보 금액을 미리 파악</li>
                    <li><strong>본안 소송 준비:</strong> 가처분과 동시에 또는 가처분 후 본안 소송을 대비</li>
                    <li><strong>법률전문가 상담:</strong> 가처분 신청의 성공 가능성과 집행 방법에 대해 법무사/변호사와 협의</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제300조', desc: '' },
      { name: '민사집행법 제303조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-9',
    title: '부동산 처분금지 가처분',
    meta: '',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item">
                    <span>부동산에 대한 소유권이전 청구권이 있는데 상대방이 팔려고 한다</span>
                </div>
                <div class="checklist-item">
                    <span>매매계약을 체결했는데 상대방이 다른 사람에게 팔 것 같다</span>
                </div>
                <div class="checklist-item">
                    <span>증여를 약속받았는데 상대방이 처분할 것 같다</span>
                </div>
                <div class="checklist-item">
                    <span>명의신탁 부동산을 돌려받으려는데 상대방이 팔려고 한다</span>
                </div>
                <div class="checklist-item">
                    <span>부동산 등기부에 처분금지 가처분을 설정하는 방법을 알고 싶다</span>
                </div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>부동산 처분금지 가처분의 핵심</h3>
                <ul>
                    <li><strong>목적:</strong> 상대방이 부동산을 처분하는 것을 금지하기 위한 가처분</li>
                    <li><strong>피보전권리:</strong> 부동산에 관한 소유권이전청구권이나 말소등기청구권</li>
                    <li><strong>신청 요건:</strong> 청구권이 존재하고 상대방의 처분 위험이 있어야 함</li>
                    <li><strong>집행 방법:</strong> 부동산등기부에 '처분금지 가처분' 등기</li>
                    <li><strong>효과:</strong> 등기부 표시 이후 처분된 부동산은 가처분 채권자에게 대항 불가</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<div class="detail-section">
                <h3>부동산 처분금지 가처분이란</h3>
                <p>부동산 처분금지 가처분은 <strong>채무자(상대방)가 특정 부동산을 처분(판매, 담보 설정 등)하는 것을 금지하는 가처분</strong>입니다. 부동산에 관한 특정 권리가 있는데 상대방이 부동산을 처분하면 그 권리를 행사할 수 없게 될 염려가 있을 때 신청합니다.</p>
                <div class="law-reference"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조 제1항</a></div>
            </div>

            <div class="detail-section">
                <h3>부동산 처분금지 가처분의 요건</h3>

                <div class="requirement-box">
                    <h4>1) 피보전권리</h4>
                    <p>부동산에 관한 <strong>특정 이행청구권</strong>이 있어야 합니다:</p>
                    <ul>
                        <li><strong>소유권이전청구권:</strong> 부동산의 소유권을 이전해달라는 권리 (매매계약, 증여계약 후)</li>
                        <li><strong>말소등기청구권:</strong> 잘못 붙은 등기를 지워달라는 권리 (명의신탁 관계에서)</li>
                        <li><strong>기타 특정물 청구권:</strong> 법률이 인정하는 다른 특정물 청구권</li>
                    </ul>
                </div>

                <div class="requirement-box">
                    <h4>2) 청구권이 현존할 것</h4>
                    <p>청구권의 존재가 어느 정도 법리상 인정되어야 합니다:</p>
                    <ul>
                        <li>매매계약이나 증여계약 체결되었을 것</li>
                        <li>명의신탁 관계가 성립했을 것</li>
                        <li>법원이 어느 정도 타당성이 있다고 판단할 수 있을 것</li>
                    </ul>
                </div>

                <div class="requirement-box">
                    <h4>3) 보전의 필요성</h4>
                    <p>상대방이 <strong>부동산을 처분하면 권리 실행이 불가능</strong>하거나 <strong>현저히 곤란</strong>해질 염려가 있어야 합니다:</p>
                    <ul>
                        <li>상대방이 부동산을 팔려고 한다는 정황이 있을 것</li>
                        <li>상대방이 타인의 담보로 잡힐 것 같은 위험이 있을 것</li>
                        <li>상대방의 행동이나 말에서 처분 의사가 드러날 것</li>
                    </ul>
                </div>
            </div>

            <div class="detail-section">
                <h3>처분금지 가처분 vs 가압류의 차이</h3>
                <h4 style="margin-top: 0;">처분금지 가처분</h4>
                <ul>
                    <li><strong>목적:</strong> 특정 부동산 자체의 소유권이전을 보전</li>
                    <li><strong>효과:</strong> 등기 이후 처분된 부동산은 가처분 채권자에게 대항 불가</li>
                    <li><strong>본안:</strong> 본안 승소 시 직접 소유권 이전 가능</li>
                </ul>

                <h4 style="margin-top: 20px;">가압류</h4>
                <ul>
                    <li><strong>목적:</strong> 금전채권 보전</li>
                    <li><strong>효과:</strong> 경매를 통한 금전 회수</li>
                    <li><strong>본안:</strong> 금전판결 후 경매 진행</li>
                </ul>

                <p style="margin-top: 20px;"><strong>결론:</strong> 부동산 자체를 받고 싶다면 처분금지 가처분, 금전을 받고 싶다면 가압류를 신청하면 됩니다.</p>
            </div>

            <div class="detail-section">
                <h3>처분금지 가처분의 효력</h3>
                <h4 style="margin-top: 0;">1) 등기부 표시</h4>
                <ul>
                    <li>가처분 결정 후 등기촉탁을 통해 부동산등기부에 '처분금지 가처분' 등기</li>
                    <li>등기부를 열람하는 누구나 이 가처분의 존재를 알 수 있음</li>
                </ul>

                <h4 style="margin-top: 15px;">2) 처분 제한</h4>
                <ul>
                    <li>가처분 등기 이후 소유권 이전이나 담보 설정은 일반적으로 불가능</li>
                    <li>일부 가능한 경우도 있으나 가처분 채권자에게 대항 불가</li>
                </ul>

                <h4 style="margin-top: 15px;">3) 본안 승소 후 말소</h4>
                <ul>
                    <li>본안 소송에서 승소하면 가처분 이후의 등기를 말소할 수 있음</li>
                    <li>예: 가처분 후 상대방이 제3자에게 판 경우, 그 등기를 말소하고 자신 명의로 변경 가능</li>
                </ul>
            </div>` },
      { heading: '자주 하는 질문', content: `<div class="qa-item question">
                <div class="qa-question">처분금지 가처분 등기 후 상대방이 부동산을 팔면 그 등기는 어떻게 되나요?</div>
                <div class="qa-answer">
                    <p>처분금지 가처분이 등기된 후 이루어진 소유권이전등기는 가처분 채권자에 대하여 효력이 없습니다. 즉, 가처분 채권자는 그 등기를 무시하고 본안 승소 후 말소를 요구할 수 있습니다. 따라서 상대방이 팔아도 그 구매자가 자신의 것이 될 수 없습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">처분금지 가처분이 있어도 상대방이 계속 거주할 수 있나요?</div>
                <div class="qa-answer">
                    <p>네, 가능합니다. 처분금지 가처분은 판매나 담보 설정을 금지하는 것이므로, 상대방은 계속 거주하고 사용할 수 있습니다. 거주를 멈추게 하려면 별도의 명도청구 가처분이나 본안 명도 소송이 필요합니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">처분금지 가처분 후 반드시 본안소송을 해야 하나요?</div>
                <div class="qa-answer">
                    <p>네, 반드시 해야 합니다. 가처분은 임시 처분이므로 최종적인 권리는 본안 소송을 통해서만 확정됩니다. 가처분 결정 후 일정 기간 내에 본안 소송을 제기하지 않으면, 상대방의 신청에 따라 가처분이 취소될 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가처분 신청 비용은 어떻게 되나요?</div>
                <div class="qa-answer">
                    <p>가처분 신청 시 법원 인지 (수수료)를 납부해야 합니다. 비용은 청구 금액(부동산 시가)에 따라 달라지며, 일반적으로 수십만 원에서 수백만 원대입니다. 본안에서 승소하면 법원 비용과 변호사 비용을 상대방에게 청구할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">여러 부동산에 처분금지 가처분을 동시에 신청할 수 있나요?</div>
                <div class="qa-answer">
                    <p>네, 가능합니다. 상대방이 여러 부동산에 대한 소유권이전청구권이 있다면, 같은 신청서에 여러 부동산을 기재하거나 별도의 신청서를 작성하여 동시에 신청할 수 있습니다. 법원이 피보전권리와 보전의 필요성을 인정하면 모두 인용될 것입니다.</p>
                </div>
            </div>` },
      { heading: '관련 판례', content: `<div class="ruling-box">
                <span class="ruling-label">대법원 판시 내용</span>
                대법원은 처분금지 가처분 이후에 이루어진 소유권이전등기는 가처분권자에 대하여 효력이 없으나, 그 등기 자체가 무효가 되는 것은 아니라고 판시하고 있습니다. 따라서 본안에서 승소한 가처분권자는 그 이후 등기를 말소하고 자신 명의로 변경할 수 있습니다.
            </div>` },
      { heading: '주의사항', content: `<div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">⚡</span>
                    기간 제한: 신속한 등기촉탁이 필수
                </div>
                <p>가처분 결정 후 등기촉탁을 즉시 해야 합니다. 지체하면 상대방이 미리 처분할 수 있으므로, 판사에게 결정 받은 당일 또는 다음날 등기소에 촉탁하는 것이 중요합니다. 또한 본안 소송을 신속히 진행해야 최종적 권리를 확보할 수 있습니다.</p>
            </div>

            <div class="caution-item warning">
                <div class="caution-label">
                    <span class="caution-icon">⚠️</span>
                    잘못된 처리 결과
                </div>
                <p>부당한 처분금지 가처분 신청은 <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030300" target="_blank" rel="noopener">민사집행법 제303조</a>에 따라 손해배상책임을 초래할 수 있습니다. 피보전권리가 없거나 보전의 필요성이 없는데 신청한 경우, 나중에 상대방으로부터 손해배상을 청구받을 수 있으므로 신중한 검토가 필요합니다.</p>
            </div>

            <div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">ℹ️</span>
                    예외 사항
                </div>
                <p>처분금지 가처분 등기 비용 (등기사항 기재 수수료)는 채권자가 부담합니다. 다만 본안에서 승소하면 등기 비용을 상대방에게 청구할 수 있으므로, 비용이 문제가 되지 않습니다.</p>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="detail-section">
                <ul>
                    <li><strong>부동산 확인:</strong> 등기부를 통해 현재 소유자, 담보 현황 확인</li>
                    <li><strong>피보전권리 입증:</strong> 계약서, 이메일, 문자 등으로 소유권이전청구권 입증</li>
                    <li><strong>보전의 필요성 증거:</strong> 상대방의 처분 의사를 보여주는 증거 수집 (중개소 중개, 구매자 물색 정황 등)</li>
                    <li><strong>본안 소송 대비:</strong> 가처분과 동시에 또는 가처분 직후 본안 소송 제기 준비</li>
                    <li><strong>법률전문가 상담:</strong> 가처분 신청의 성공 가능성과 비용을 법무사/변호사와 검토</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제300조 제1항', desc: '' },
      { name: '민사집행법 제303조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-10',
    title: '점유이전금지 가처분',
    meta: '',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <div class="checklist-item">
                    <span>임차인(세입자)이 명도를 거부하고 있어 소송을 제기하려 한다</span>
                </div>
                <div class="checklist-item">
                    <span>소송 중에 세입자가 다른 사람에게 점유를 넘길 것 같다</span>
                </div>
                <div class="checklist-item">
                    <span>점유자가 바뀌면 소송을 다시 해야 할까 봐 걱정된다</span>
                </div>
                <div class="checklist-item">
                    <span>점유이전금지 가처분이 무엇이고 어떤 효과가 있는지 알고 싶다</span>
                </div>
                <div class="checklist-item">
                    <span>집행관이 건물에 직접 가는 절차가 궁금하다</span>
                </div>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>점유이전금지 가처분의 핵심</h3>
                <ul>
                    <li><strong>목적:</strong> 채무자(점유자)가 현재 점유를 제3자에게 이전하는 것을 금지</li>
                    <li><strong>피보전권리:</strong> 건물·토지 명도청구권</li>
                    <li><strong>보전의 필요성:</strong> 소송 중 점유자가 바뀌면 기판력이 미치지 않음</li>
                    <li><strong>집행 방법:</strong> 집행관이 현장 방문 → 고지문 부착 → 공시</li>
                    <li><strong>효과:</strong> 점유이전 후에도 새로운 점유자에 대해 직접 집행 가능</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<div class="detail-section">
                <h3>점유이전금지 가처분이란</h3>
                <p>점유이전금지 가처분은 <strong>채무자(현재 점유자)가 현재의 점유를 제3자에게 이전하는 것을 금지하는 가처분</strong>입니다. 특히 건물 명도 소송에서 매우 중요한 제도입니다.</p>
                <div class="law-reference"><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조 제1항</a></div>

                <p style="margin-top: 20px;"><strong>왜 필요한가?</strong> 명도 소송은 시간이 걸립니다. 이 기간 동안 세입자가 다른 사람에게 점유를 넘기면, 본안 판결에서 이겼더라도 새로운 점유자에게 직접 집행할 수 없는 문제가 발생합니다. 이를 방지하기 위해 점유이전금지 가처분이 필요합니다.</p>
            </div>

            <div class="detail-section">
                <h3>점유이전금지 가처분의 요건</h3>

                <div class="requirement-box">
                    <h4>1) 피보전권리</h4>
                    <p>건물이나 토지의 <strong>명도청구권</strong>이나 <strong>인도청구권</strong>이 있어야 합니다:</p>
                    <ul>
                        <li>임대차 계약 후 임차인의 명도 의무</li>
                        <li>소유권 분쟁에서 상대방의 점유를 빼앗을 권리</li>
                        <li>무단 점거 상황에서의 명도 청구</li>
                    </ul>
                </div>

                <div class="requirement-box">
                    <h4>2) 보전의 필요성</h4>
                    <p>현재 점유자가 <strong>점유를 이전할 위험</strong>이 있어야 합니다:</p>
                    <ul>
                        <li>점유자가 제3자에게 점유를 넘길 정황이 있을 것</li>
                        <li>소송 중 점유자가 바뀌면 기판력 문제로 새로운 대응 필요</li>
                        <li>점유자가 바뀌는 것 자체가 건물주에게 심각한 손해</li>
                    </ul>
                </div>

                <div class="requirement-box">
                    <h4>3) 추가 고려사항</h4>
                    <ul>
                        <li>명도 소송을 먼저 진행하거나 동시에 가처분 신청</li>
                        <li>집행관의 현장 방문이 가능한 접근성</li>
                    </ul>
                </div>
            </div>

            <div class="detail-section">
                <h3>점유이전금지 가처분의 효과</h3>

                <h4 style="margin-top: 0;">1) 집행관의 고지</h4>
                <ul>
                    <li>집행관이 직접 건물을 방문하여 현재 점유자를 확인</li>
                    <li>고지문을 부착하여 점유이전금지 가처분의 내용 공시</li>
                </ul>

                <h4 style="margin-top: 15px;">2) 공시 효력</h4>
                <ul>
                    <li>고지문 부착 이후 점유가 이전되더라도 그 이전은 가처분 채권자에게 대항 불가</li>
                    <li>새로운 점유자가 건물을 점거했더라도 가처분 채권자는 그 점유자를 상대로 직접 집행 가능</li>
                </ul>

                <h4 style="margin-top: 15px;">3) 본안 집행 용이</h4>
                <ul>
                    <li>본안 명도 판결이 나면 기판력이 모든 점유자에게 미침</li>
                    <li>새로운 점유자라도 점유이전금지 가처분이 있으면 직접 명도 집행 가능</li>
                </ul>
            </div>` },
      { heading: '자주 하는 질문', content: `<div class="qa-item question">
                <div class="qa-question">세입자가 몰래 다른 사람에게 점유를 넘긴 경우 어떻게 되나요?</div>
                <div class="qa-answer">
                    <p>점유이전금지 가처분이 있었다면 그 이전은 무효입니다. 따라서 새로운 점유자가 건물을 점거했더라도, 가처분 채권자는 그 새로운 점유자를 상대로 직접 명도를 청구하고 집행할 수 있습니다. 이것이 점유이전금지 가처분의 가장 큰 장점입니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">가처분 집행 후에도 세입자가 계속 살고 있어도 되나요?</div>
                <div class="qa-answer">
                    <p>네, 가처분은 점유이전만 금지하므로 현재 세입자는 계속 거주할 수 있습니다. 세입자를 내보내려면 명도 소송을 진행해서 명도 판결을 받고 강제집행을 해야 합니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">점유이전금지 가처분을 하지 않으면 명도 소송 판결을 받아도 집행이 안 되나요?</div>
                <div class="qa-answer">
                    <p>네, 집행이 어려워집니다. 소송 중에 점유자가 바뀌면 새로운 점유자는 원래의 소송에 참가하지 않았으므로 기판력이 미치지 않습니다. 따라서 새로운 점유자를 상대로 별도의 명도 소송을 해야 할 수 있습니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">집행관이 방문할 때 세입자가 문을 안 열어주면 어떻게 되나요?</div>
                <div class="qa-answer">
                    <p>집행관이 강제로 문을 열 수는 없지만, 목격자 진술이나 기타 증거를 통해 점유 사실을 확인하고 고지문을 부착할 수 있습니다. 고지문의 부착 자체가 공시 역할을 하므로, 이후 법적 효력이 발생합니다.</p>
                </div>
            </div>

            <div class="qa-item question">
                <div class="qa-question">세입자 여러 명이 있는 경우 모두에 대해 신청해야 하나요?</div>
                <div class="qa-answer">
                    <p>건물 전체에 대한 점유이전금지 가처분이므로 여러 세입자가 있더라도 한 번의 신청으로 충분합니다. 다만 각 세입자의 점유 부분을 명확히 해야 할 경우 추가 설명이 필요할 수 있습니다.</p>
                </div>
            </div>` },
      { heading: '관련 판례', content: `<div class="ruling-box">
                <span class="ruling-label">대법원 판시 내용</span>
                대법원은 점유이전금지 가처분의 집행 후 제3자가 채무자로부터 점유를 이전받은 경우에도 가처분채권자는 그 제3자에 대하여 직접 집행할 수 있다고 판시하고 있습니다. 이는 점유이전금지 가처분의 가장 핵심적인 효력입니다.
            </div>` },
      { heading: '주의사항', content: `<div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">⚡</span>
                    기간 제한: 명도 소송 제기 의무
                </div>
                <p>명도 소송 제기 전에 가처분을 신청해야 실효성이 있습니다. 또한 가처분 후 신속히 명도 소송을 제기하여 본안 판결을 받아야 최종적으로 세입자를 내보낼 수 있습니다. 지체할수록 상대방에게 유리해질 수 있습니다.</p>
            </div>

            <div class="caution-item warning">
                <div class="caution-label">
                    <span class="caution-icon">⚠️</span>
                    잘못된 처리 결과
                </div>
                <p>가처분 집행 전에 점유가 이전된 경우에는 이전받은 자를 상대로 별도의 대응이 필요합니다. 가처분의 효력이 발생한 후에는 그 이전이 무효가 되지만, 그 전에 이전되었다면 법적으로 대응해야 합니다.</p>
            </div>

            <div class="caution-item">
                <div class="caution-label">
                    <span class="caution-icon">ℹ️</span>
                    예외 사항
                </div>
                <p>임차인이 유치권을 주장하는 경우 별도의 법적 검토가 필요합니다. 임차인이 건물주에게 자신의 개선비 등에 대한 채권이 있으면 유치권을 행사할 수 있으므로, 이 경우 명도가 복잡해질 수 있습니다.</p>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="detail-section">
                <ul>
                    <li><strong>건물 확인:</strong> 등기부를 통해 건물 소유자, 현재 상태 확인</li>
                    <li><strong>임대차 계약서:</strong> 있다면 준비, 없으면 명도청구권 입증 증거 수집</li>
                    <li><strong>점유자 파악:</strong> 현재 누가 건물을 점거하고 있는지 정확히 파악</li>
                    <li><strong>점유이전 위험:</strong> 점유자가 다른 사람에게 넘길 위험이 있는지 확인</li>
                    <li><strong>명도 소송 준비:</strong> 가처분과 동시에 명도 소송 제기 준비</li>
                    <li><strong>법률전문가 상담:</strong> 가처분 신청과 명도 소송 전략을 법무사/변호사와 수립</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제300조 제1항', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-11',
    title: '임시지위 가처분',
    meta: '직위·법적 지위를 긴급하게 보전해야 할 때',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <ul>
                    <li>부당하게 이사, 임원 직위에서 해임되거나 직무 정지를 당했다</li>
                    <li>회원권이나 조합원 자격이 부당하게 박탈됐다</li>
                    <li>학교, 단체에서 제명되거나 자격이 정지됐다</li>
                    <li>소송이 끝날 때까지 기다리기 어려운 긴급한 상황이다</li>
                    <li>임시지위 가처분으로 지위를 임시로 회복하고 싶다</li>
                </ul>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>임시지위 가처분이란?</h3>
                <p><strong>쟁점 있는 법적 지위를 임시로 정하는 가처분입니다.</strong></p>
                <p>직위 해제, 이사 해임, 회원권 박탈 등 법적 지위가 위협받을 때 소송이 끝날 때까지 기다리지 않고 임시적으로 그 지위를 회복하거나 보전하기 위한 절차입니다.</p>

                <h3 style="margin-top: 20px;">법적 근거</h3>
                <p><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조 제2항</a> — 임시의 지위를 정하기 위한 가처분</p>

                <h3 style="margin-top: 20px;">주요 특징</h3>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>현존하는 권리관계 + 그에 대한 다툼이 있을 것</li>
                    <li>현저한 손해 또는 급박한 위험 방지가 목적</li>
                    <li>임시적 법률 상태 창설 (본안 판결까지만 유효)</li>
                    <li>다툼 대상 가처분보다 엄격한 심사</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<h3>1. 임시지위 가처분의 개념</h3>
            <p>임시지위 가처분은 <strong>쟁점이 있는 법적 지위에 대해 현저한 손해 또는 급박한 위험을 방지하기 위해 임시적으로 지위를 정하는 가처분</strong>입니다.</p>

            <div class="definition-block">
                <strong>목적</strong>
                <p>쟁점이 있는 법적 지위에 대해, 본안 소송이 진행되는 동안 현저한 손해 또는 급박한 위험을 방지하고, 임시적인 법률 상태를 창설하는 것입니다.</p>
            </div>

            <h3>2. 피보전권리 요건</h3>
            <p>임시지위 가처분이 인용되려면 다음 요건을 모두 충족해야 합니다:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li><strong>현존하는 권리관계</strong> — 실제로 존재하는 권리관계 (이사직, 회원자격 등)</li>
                <li><strong>그에 대한 다툼</strong> — 상대방이 그 권리를 부당하게 침해했다고 주장하는 상황</li>
                <li><strong>청구권의 성립</strong> — 상대방에게 지위 회복을 청구할 법적 근거가 있을 것</li>
            </ul>

            <h3>3. 보전의 필요성 판단</h3>
            <div class="definition-block">
                <strong>현저한 손해</strong>
                <p>단순한 불편함이나 경제적 손실을 넘어서, 직위 박탈로 인한 현저한 경제적·신분적 손해가 있어야 합니다. 예: 이사직 박탈로 인한 주주권 상실, 임금 상실, 신분 침해 등</p>
            </div>

            <div class="definition-block">
                <strong>급박한 위험</strong>
                <p>즉시 대응하지 않으면 회복하기 어려운 상황을 의미합니다. 예: 주주총회 개최 임박으로 이사직 박탈의 효과가 현실화되는 상황</p>
            </div>

            <h3>4. 이사 직무집행정지 가처분</h3>
            <p>가장 전형적인 임시지위 가처분으로, <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=272919&joNo=040800" target="_blank" rel="noopener">상법 제408조의 9</a>, <a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조</a>에 따릅니다.</p>

            <div class="case-example">
                <h4>이사 직무집행정지 가처분의 절차</h4>
                <ol style="margin-left: 20px;">
                    <li>주주총회 결의로 이사 해임 (또는 직무 정지)</li>
                    <li>이사가 해임이 위법하다며 가처분 신청</li>
                    <li>법원의 임시지위 가처분 결정</li>
                    <li>대행자 선임 신청 동시 가능 → 법원이 직무대행자 선임</li>
                    <li>본안 소송 진행</li>
                </ol>
            </div>

            <p><strong>대행자 선임과의 결합:</strong> 이사 직무집행정지 가처분과 동시에 직무대행자 선임을 신청할 수 있습니다. 이 경우 법원이 선임한 대행자가 이사의 직무를 수행하게 됩니다.</p>

            <h3>5. 본안 승소 가능성 (소명)</h3>
            <p>법원은 다음 사항을 종합적으로 판단합니다:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>피보전권리(이사직, 회원자격 등)의 존재 여부</li>
                <li>상대방의 해임이나 박탈이 위법한지 여부</li>
                <li>본안 소송에서 승소할 가능성</li>
                <li>보전의 필요성과 채무자의 불이익을 비교형량</li>
            </ul>

            <h3>6. 담보 제공</h3>
            <p>법원이 가처분을 인정하면서 담보 제공을 조건으로 붙일 수 있습니다. 담보의 액수는 법원이 판단합니다.</p>` },
      { heading: '자주하는 질문', content: `<div class="qna-container">
                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q1. 이사 직무집행정지 가처분은 주주총회 결의도 막을 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>아니요. 임시지위 가처분은 <strong>이미 결의된 해임을 임시로 무효화하는 것이지, 향후 주주총회 결의를 미리 막지는 않습니다.</strong></p>
                        <p>다만 가처분 결정이 나면 법원이 선임한 대행자가 직무를 수행하므로, 실질적으로는 이사 지위가 회복된 상태가 됩니다. 상대방이 다시 주주총회를 소집하려면 현재의 임시지위 가처분이 먼저 취소되어야 합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q2. 임시지위 가처분과 다툼의 대상 가처분은 어떻게 다른가요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p><strong>다툼의 대상 가처분:</strong> 특정물 인도, 소유권이전청구 등 명확한 청구권이 있는 경우입니다. 예: "이 건물을 인도하라"는 명도청구 가처분</p>
                        <p><strong>임시지위 가처분:</strong> 법적 지위 자체가 쟁점인 경우입니다. 예: "나는 여전히 이사다" 또는 "나는 조합원이다"라는 지위 다툼</p>
                        <p>임시지위 가처분이 인정되려면 <strong>현저한 손해 또는 급박한 위험</strong>이 있어야 하므로, 다툼의 대상 가처분보다 심사가 더 엄격합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q3. 가처분이 인용되면 실제로 직위를 바로 회복할 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, 가처분 결정이 확정되면 <strong>임시적으로 직위가 회복됩니다.</strong></p>
                        <p>다만 다음 점들을 주의해야 합니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>가처분은 임시 조치이므로, 본안 소송이 진행되는 동안만 유효합니다</li>
                            <li>본안 소송에서 패소하면 가처분도 함께 취소됩니다</li>
                            <li>가처분 상태에서 대행자가 직무를 수행하는 경우가 많습니다</li>
                        </ul>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q4. 회사가 가처분을 무시하고 제3자를 이사로 선임하면 어떻게 되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>이는 <strong>가처분 결정 불이행</strong>에 해당합니다. 다음 조치를 취할 수 있습니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>간접강제 신청:</strong> 법원에 불이행으로 인한 손해배상 청구</li>
                            <li><strong>직권 중지:</strong> 법원이 회사의 임원 지위 인정을 거부</li>
                            <li><strong>신청인 직무복귀:</strong> 원래의 이사에게 직무 복귀 명령</li>
                        </ul>
                        <p>결과적으로 법원의 결정을 위반한 회사는 막대한 손해배상책임을 지게 됩니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q5. 임시지위 가처분은 언제까지 유효한가요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>임시지위 가처분은 다음 중 먼저 발생하는 시점까지 유효합니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>본안 판결 확정 시 (본안에서 이기면 본집행으로 전환, 지면 취소됨)</li>
                            <li>신청인이 가처분 취소 신청 시</li>
                            <li>채무자가 가처분 이의 신청 후 인용 결정 시</li>
                            <li>법원이 직권으로 취소하는 경우</li>
                        </ul>
                        <p>가장 중요한 것은 <strong>본안 소송을 반드시 진행</strong>해야 한다는 점입니다. 가처분만 받고 본안소송을 하지 않으면 취소될 수 있습니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q6. 개인(직원)의 해고에 대해서도 임시지위 가처분이 가능한가요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>원칙적으로 <strong>매우 제한적입니다.</strong></p>
                        <p>개인 직원의 해고는 재산권 분쟁보다는 근로관계 문제이기 때문에, 일반 민사법원의 가처분 심사 기준과 다릅니다. 다만 다음의 경우에는 가능할 수 있습니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>해고 자체가 명백히 위법하고</li>
                            <li>임금 상실 등 현저한 손해가 있으며</li>
                            <li>임시적 지위 보전이 급박하게 필요한 경우</li>
                        </ul>
                        <p>노동법상 지위 확인 소송이나 임금 청구 소송이 더 일반적입니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="ruling-box">
                <p>"대법원은 이사의 직무집행정지 가처분에서 보전의 필요성은 <strong>단순한 불편함이나 다툼이 있다는 사실만으로는 부족</strong>하고, 현저한 손해나 급박한 위험의 존재를 구체적으로 소명해야 한다고 판시하고 있습니다."</p>
                <p style="margin-top: 15px; color: #555;">이는 임시지위 가처분이 다툼의 대상 가처분보다 훨씬 엄격한 기준으로 심사된다는 것을 의미합니다. 단순히 "이사직이 박탈되었다"는 사실만으로는 부족하며, 그로 인한 현저한 손해(신분 침해, 경제적 손실, 주주권 행사 불가 등)를 구체적으로 입증해야 합니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div>
                        <strong>임시지위 가처분은 잠정처분 — 반드시 본안소송 필수</strong>
                        <p style="margin: 8px 0 0 0;">가처분 결정을 받은 후 반드시 본안소송(임원 지위 확인 소송 등)을 진행해야 합니다. 본안소송 없이는 가처분도 의미가 없으며, 채무자의 취소 신청에 응해야 할 수 있습니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div>
                        <strong>가처분 결정 불이행 시 간접강제</strong>
                        <p style="margin: 8px 0 0 0;">상대방이 가처분 결정을 무시하고 다른 사람을 임원으로 선임하거나 직무를 빼앗으려 하면, 법원의 간접강제 신청으로 불이행 책임을 추궁할 수 있습니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>임시지위 가처분은 본안판결과 동일 효과</strong>
                        <p style="margin: 8px 0 0 0;">임시지위 가처분은 본안판결과 사실상 동일한 법적 효과를 낼 수 있기 때문에, 법원의 심사가 매우 엄격합니다. 따라서 피보전권리와 보전의 필요성을 명확하고 충분하게 소명해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>담보 제공 조건</strong>
                        <p style="margin: 8px 0 0 0;">가처분이 인용되면서 담보 제공을 조건으로 붙을 수 있습니다. 담보는 현금, 보증보험 등으로 제공할 수 있으며, 본안 승소 후 반환됩니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="next-section">
                <h3>임시지위 가처분 신청 후 해야 할 일</h3>
                <ul>
                    <li><strong>가처분 결정 확정 확인:</strong> 이의 신청 기간(법원에 따라 다름) 내에 상대방이 항고했는지 확인</li>
                    <li><strong>본안소송 준비:</strong> 임원 지위 확인 소송, 해임 결의 무효 확인 소송 등 본안소송 제기</li>
                    <li><strong>담보 제공:</strong> 법원이 요구한 담보를 성실히 제공 (기간 내)</li>
                    <li><strong>직무 복귀:</strong> 가처분 확정 후 실제 직무 복귀가 되는지 확인</li>
                    <li><strong>상대방 항고 대비:</strong> 상대방이 항고한 경우 항고심 대리인과 진행 방안 협의</li>
                    <li><strong>본안소송 진행 상황 관리:</strong> 임시지위 가처분과 본안소송의 진행을 동시에 관리</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제300조 제2항', desc: '' },
      { name: '상법 제408조의 9', desc: '' },
      { name: '민사집행법 제300조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-12',
    title: '가처분 이의·취소',
    meta: '부당한 가처분을 당했을 때 대응 방법',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <ul>
                    <li>상대방이 신청한 가처분 결정을 받았는데 이의가 있다</li>
                    <li>피보전권리가 없거나 보전의 필요성이 없다고 생각한다</li>
                    <li>가처분 때문에 재산이나 영업에 큰 피해가 생기고 있다</li>
                    <li>가처분을 빨리 취소하거나 내용을 변경하고 싶다</li>
                    <li>담보를 제공하면 가처분을 풀 수 있는지 알고 싶다</li>
                </ul>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>가처분 이의·취소란?</h3>
                <p><strong>부당한 가처분을 당했을 때 법원에 그 결정의 취소를 요구하는 절차입니다.</strong></p>
                <p>채권자가 신청한 가처분이 피보전권리나 보전의 필요성이 없다면, 채무자(또는 이해관계인)는 이의 신청을 통해 가처분을 취소하도록 법원에 요청할 수 있습니다.</p>

                <h3 style="margin-top: 20px;">법적 근거</h3>
                <p><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030100" target="_blank" rel="noopener">민사집행법 제301조, 제283조 준용</a></p>

                <h3 style="margin-top: 20px;">대응 방법 3가지</h3>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li><strong>가처분 이의 신청:</strong> 법원에 가처분 결정의 취소를 요청</li>
                    <li><strong>가처분 취소 신청:</strong> 사정 변경 등으로 인한 취소</li>
                    <li><strong>담보 제공:</strong> 담보를 제공하여 집행 정지 신청</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<h3>1. 가처분 이의 신청이란?</h3>
            <p>가처분 이의 신청은 <strong>법원의 가처분 결정에 대해 채무자가 법원에 제출하는 이의</strong>입니다.</p>

            <div class="definition-block">
                <strong>목적</strong>
                <p>채무자가 가처분 결정이 피보전권리 또는 보전의 필요성을 결여했다고 주장하여, 법원의 원래 결정을 변경하거나 취소하도록 하는 것입니다.</p>
            </div>

            <h3>2. 가처분 이의 신청의 특징</h3>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li><strong>기간 제한 없음:</strong> 원칙적으로 언제든 신청 가능 (다만 조속히 신청 권장)</li>
                <li><strong>심문 기일 지정:</strong> 법원이 심문 기일을 지정하여 당사자 의견 청취</li>
                <li><strong>원점 재심:</strong> 가처분을 발령한 법원이 처음부터 다시 심사</li>
                <li><strong>불복 가능:</strong> 이의 신청 결정에 불복하면 항고 가능</li>
            </ul>

            <h3>3. 가처분 이의 신청 절차</h3>
            <div class="procedure-steps">
                <ol>
                    <li><strong>이의 신청서 작성:</strong> 이의 사유를 구체적으로 명시한 신청서 작성</li>
                    <li><strong>법원 접수:</strong> 가처분을 발령한 법원에 제출 (접수 수수료 있음)</li>
                    <li><strong>심문 기일 지정:</strong> 법원이 당사자들에게 심문 기일 통지</li>
                    <li><strong>당사자 심문:</strong> 심문 기일에 양쪽 당사자가 출석하여 주장과 소명</li>
                    <li><strong>결정:</strong> 법원이 가처분 인가, 변경, 또는 취소 결정</li>
                    <li><strong>불복:</strong> 결정에 불복하면 항고장 제출 (법원에 따라 기간 다름, 통상 일주일)</li>
                </ol>
            </div>

            <h3>4. 가처분 이의 신청 시 소명 방법</h3>
            <p>채무자가 이의 신청을 통해 소명해야 할 사항:</p>

            <div class="definition-block">
                <strong>피보전권리 부존재 소명</strong>
                <p>채권자가 주장하는 권리(채권)가 실제로 존재하지 않거나, 이미 소멸했다는 점을 증명</p>
                <p>예: 계약서, 합의서, 채권의 소멸을 입증하는 자료 등</p>
            </div>

            <div class="definition-block">
                <strong>보전의 필요성 부존재 소명</strong>
                <p>강제집행이 충분히 가능하거나, 채무자가 재산을 처분할 염려가 없다는 점을 증명</p>
                <p>예: 충분한 재산 현황, 변제 능력 및 의사, 재산 은닉 불가능성 등을 입증하는 자료</p>
            </div>

            <h3>5. 필요한 첨부서류</h3>
            <table>
                <thead>
                    <tr>
                        <th>서류명</th>
                        <th>발급기관</th>
                        <th>용도</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>가처분 이의 신청서</td>
                        <td>-</td>
                        <td>이의 사유 구체적 기재</td>
                    </tr>
                    <tr>
                        <td>가처분 결정문 사본</td>
                        <td>해당 법원 (또는 보유 중)</td>
                        <td>이의의 대상 특정</td>
                    </tr>
                    <tr>
                        <td>피보전권리 부존재 증거</td>
                        <td>-</td>
                        <td>계약서, 합의서, 확인서 등</td>
                    </tr>
                    <tr>
                        <td>보전의 필요성 부존재 증거</td>
                        <td>-</td>
                        <td>부동산등기부, 잔액 증명, 임금명세 등</td>
                    </tr>
                    <tr>
                        <td>대리인 위임장</td>
                        <td>-</td>
                        <td>변호사/법무사 대리 시</td>
                    </tr>
                </tbody>
            </table>

            <h3>6. 다른 대응 방법: 가처분 취소 신청</h3>
            <div class="comparison-box">
                <h4>가처분 취소 신청의 사유</h4>
                <ul style="margin-left: 20px;">
                    <li><strong>사정 변경:</strong> 원래는 보전의 필요성이 있었으나, 나중에 상황이 바뀐 경우</li>
                    <li><strong>본안소송 미제기:</strong> 채권자가 일정 기간 내에 본안소송을 제기하지 않은 경우 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>)</li>
                    <li><strong>담보 제공:</strong> 채무자가 담보를 제공하는 경우 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028200" target="_blank" rel="noopener">민사집행법 제282조 준용</a>)</li>
                </ul>
            </div>

            <h3>7. 담보 제공에 의한 가처분 취소</h3>
            <p>채무자가 <strong>일정액의 담보를 법원에 제공</strong>하면, 법원의 재량으로 가처분 집행을 취소할 수 있습니다. (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030100" target="_blank" rel="noopener">민사집행법 제301조, 제282조 준용</a>)</p>

            <div class="definition-block">
                <strong>담보의 종류</strong>
                <p>현금, 보증보험, 부동산 담보, 기타 채권자가 동의하는 담보</p>
            </div>

            <h3>8. 이의 신청 중 가처분의 효력</h3>
            <p>중요한 점: <strong>이의 신청을 하더라도 가처분의 효력이 자동으로 정지되지는 않습니다.</strong> 따라서:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>이의 신청과 동시에 <strong>가처분 집행 정지 신청</strong>을 할 수 있습니다</li>
                <li>집행 정지 신청이 인용되면 가처분 집행이 일시 중단됩니다</li>
                <li>집행 정지를 위해서는 채무자의 손해를 입을 가능성을 입증해야 합니다</li>
            </ul>` },
      { heading: '자주하는 질문', content: `<div class="qna-container">
                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q1. 가처분 이의 신청을 하면 가처분이 자동으로 정지되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>아니요. <strong>이의 신청 자체로는 가처분이 정지되지 않습니다.</strong></p>
                        <p>가처분이 계속 집행될 수 있으므로, 이의 신청과 함께 <strong>가처분 집행 정지 신청</strong>을 함께 제출해야 합니다. 집행 정지 신청이 인용되면 이의 신청 심문이 진행되는 동안 가처분 집행이 일시 중단됩니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q2. 이의 신청 심문에서 패소하면 다시 다툴 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, 항고할 수 있습니다.</p>
                        <p>이의 신청에서 패소한 경우, 법원의 결정에 대해 <strong>항고</strong>를 제기할 수 있습니다. 항고심에서는 원심 법원의 판단을 다시 검토하며, 새로운 증거를 제출할 수도 있습니다.</p>
                        <p>항고 기간은 보통 결정 통지일부터 일주일(법원마다 상이)이므로, 기한을 놓치지 않도록 주의해야 합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q3. 가처분 이의 신청과 취소 신청은 동시에 할 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, 가능합니다.</p>
                        <p>이의 신청은 "원래부터 요건이 없었다"는 주장이고, 취소 신청은 "나중에 상황이 바뀌었다"는 주장이므로, 두 가지를 동시에 제출할 수 있습니다. 실무에서는 더 강력한 주장을 보강하기 위해 두 가지를 함께 제출하는 경우도 있습니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q4. 채권자가 본안소송을 제기하지 않으면 언제 취소를 신청할 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>가처분 집행 후 <strong>채권자로부터 본안소송 제기 최고를 받은 경우</strong>, 채무자는 그 이후부터 취소를 신청할 수 있습니다. (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>)</p>
                        <p>구체적으로는:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>채권자로부터 본안소송 제기를 최고 받음</li>
                            <li>최고 기간 내(보통 2주~1개월)에 채권자가 본안소송을 제기하지 않음</li>
                            <li>이 경우 채무자는 취소를 신청할 수 있음</li>
                        </ul>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q5. 가처분이 취소되면 채무자가 입은 피해를 보상받을 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>경우에 따라 다릅니다.</p>
                        <p><strong>가처분이 부당하게 발령된 경우</strong> (피보전권리나 보전의 필요성이 없었던 경우), 채무자는 채권자를 상대로 손해배상청구를 할 수 있습니다. 손해배상 범위는:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>가처분으로 인한 직접 손해 (재산 처분 불가로 인한 손실 등)</li>
                            <li>신용 상실, 사업 중단 손해 등 간접 손해</li>
                        </ul>
                        <p>다만 채권자가 선의(진정으로 청구권이 있다고 믿음)로 신청한 경우에는 손해배상 책임이 제한될 수 있습니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="ruling-box">
                <p>"대법원은 가처분 이의 심문에서 <strong>채무자가 피보전권리가 존재하지 않는다는 점을 소명한 경우, 채권자가 그 피보전권리의 존재를 반증하지 못하면 법원은 가처분을 취소해야 한다</strong>고 판시하고 있습니다."</p>
                <p style="margin-top: 15px; color: #555;">이는 이의 신청에서 채무자가 충분한 증거를 제시하면 법원이 가처분을 다시 심사하고 취소할 수 있다는 의미입니다. 따라서 강력한 소명 자료를 준비하는 것이 중요합니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div>
                        <strong>기간 제한 — 본안소송과 연동</strong>
                        <p style="margin: 8px 0 0 0;">채권자가 가처분 집행 후 일정 기간 내에 본안소송을 제기하지 않으면, 채무자는 취소를 신청할 수 있습니다. (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>) 이 기간은 법원의 재량으로 정해지므로 정확히 파악해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div>
                        <strong>이의 신청이 기각되더라도 가처분 집행은 계속됨</strong>
                        <p style="margin: 8px 0 0 0;">이의 신청을 제출했다고 해서 가처분의 효력이 일시적으로 정지되지 않습니다. 따라서 이의 신청과 동시에 가처분 집행 정지 신청을 함께 제출해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>항고 시 가처분 집행 일시 정지 가능</strong>
                        <p style="margin: 8px 0 0 0;">이의 신청에서 패소한 후 항고하면서 동시에 집행 정지 신청을 하면, 항고심 진행 중에 가처분 집행이 일시 정지될 수 있습니다. 다만 이 역시 법원의 재량입니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>담보 제공의 유리함</strong>
                        <p style="margin: 8px 0 0 0;">채무자가 담보를 제공하면 이의 신청의 심리 결과를 기다리지 않고도 가처분 집행을 정지하거나 해제할 수 있습니다. 급박한 상황에서는 담보 제공이 빠른 해결책이 될 수 있습니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="next-section">
                <h3>가처분 이의·취소 신청 후 진행 사항</h3>
                <ul>
                    <li><strong>심문 기일 확인:</strong> 법원으로부터 심문 기일 통지를 받으면 반드시 출석하거나 대리인 선임</li>
                    <li><strong>증거 자료 준비:</strong> 심문 전에 피보전권리 부존재 또는 보전의 필요성 부존재를 소명할 증거 정리</li>
                    <li><strong>집행 정지 신청 동시 제출:</strong> 이의 신청만으로는 집행이 정지되지 않으므로 집행 정지 신청 필수</li>
                    <li><strong>결정문 수령 및 기간 관리:</strong> 결정에 항고하려면 법원별로 정해진 기한 내 항고장 제출</li>
                    <li><strong>항고 선택:</strong> 이의 신청에서 패소하면 빨리 항고할지, 담보 제공할지 판단</li>
                    <li><strong>본안소송 의뢰 준비:</strong> 이의 신청이 성공하면 본안소송으로 최종 승소를 노려야 함</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제301조, 제283조 준용', desc: '' },
      { name: '민사집행법 제287조', desc: '' },
      { name: '민사집행법 제282조 준용', desc: '' },
      { name: '민사집행법 제301조, 제282조 준용', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-13',
    title: '피보전권리',
    meta: '내 채권이 보전처분의 대상이 되는가',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <ul>
                    <li>가압류나 가처분을 신청하려는데 내 권리가 보전 대상인지 모르겠다</li>
                    <li>채권의 종류에 따라 가압류가 되는지 안 되는지 알고 싶다</li>
                    <li>조건부 채권이나 아직 기한이 안 된 채권도 가압류할 수 있는지 궁금하다</li>
                    <li>특정 부동산에 대한 이행청구권이 가처분 대상인지 알고 싶다</li>
                    <li>피보전권리의 요건을 구체적으로 알고 싶다</li>
                </ul>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>피보전권리란?</h3>
                <p><strong>보전처분(가압류·가처분)을 신청하기 위해 채권자가 갖추어야 할 실체적 권리입니다.</strong></p>
                <p>가압류나 가처분은 모든 권리에 대해 인정되는 것이 아니라, 특정한 조건을 충족하는 권리(피보전권리)만 보전 대상이 됩니다.</p>

                <h3 style="margin-top: 20px;">가압류 vs 가처분 피보전권리</h3>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li><strong>가압류:</strong> 금전채권 또는 금전으로 환산할 수 있는 채권 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027600" target="_blank" rel="noopener">민사집행법 제276조</a>)</li>
                    <li><strong>가처분:</strong> 특정물에 관한 이행청구권 또는 다툼 있는 권리관계 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조</a>)</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<h3>1. 피보전권리의 개념</h3>
            <p>피보전권리는 <strong>가압류나 가처분을 신청하기 위한 전제 조건</strong>입니다. 법원이 보전처분을 인정하려면 다음을 확인해야 합니다:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>채권자가 실제로 어떤 권리를 가지고 있는가?</li>
                <li>그 권리가 법적으로 보전 대상이 되는 권리인가?</li>
                <li>그 권리가 실행되지 못할 위험이 있는가?</li>
            </ul>

            <h3>2. 가압류의 피보전권리 요건 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027600" target="_blank" rel="noopener">민사집행법 제276조</a>)</h3>
            <div class="requirement-grid">
                <div class="requirement-card">
                    <h4>요건 1: 금전채권</h4>
                    <p>금전 대여금, 물품대금, 공사대금, 손해배상금 등 금전으로 청구하는 모든 채권이 포함됩니다.</p>
                </div>
                <div class="requirement-card">
                    <h4>요건 2: 금전으로 환산 가능</h4>
                    <p>특정 물건 인도 청구권이라도 그 가치를 금전으로 환산할 수 있으면 가능합니다. (예: 미술품 반환청구권)</p>
                </div>
                <div class="requirement-card">
                    <h4>요건 3: 청구권 성립</h4>
                    <p>청구권이 이미 발생해 있어야 합니다. 완전히 미래의 청구권(아직 계약도 없는)은 불가능합니다.</p>
                </div>
                <div class="requirement-card">
                    <h4>요건 4: 강제집행 적합성</h4>
                    <p>국가나 지방자치단체에 대한 특정 청구권처럼 강제집행이 금지된 권리는 제외됩니다.</p>
                </div>
            </div>

            <h3>3. 조건부·기한부 채권의 가압류</h3>
            <p><strong>아직 지급 기한이 오지 않았거나 조건이 충족되지 않은 채권도 가압류가 가능합니다.</strong></p>

            <div class="definition-block">
                <strong>정지조건부 채권 (조건이 아직 발생하지 않음)</strong>
                <p>예: "건물 철거 후에 500만원을 지급한다"는 계약에서, 철거가 아직 되지 않은 경우에도 가압류 가능 (조건 충족 가능성이 있으면 됨)</p>
            </div>

            <div class="definition-block">
                <strong>기한부 채권 (기한이 아직 도래하지 않음)</strong>
                <p>예: "2026년 3월에 1,000만원을 지급한다"는 채권에서, 지금은 2026년 1월이어도 가압류 가능 (기한이 필연적으로 도래할 것이 확실하면 됨)</p>
            </div>

            <h3>4. 가처분의 피보전권리 요건 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조</a>)</h3>
            <p>가처분은 금전채권이 아닌 다른 권리를 보전합니다:</p>

            <div class="definition-block">
                <strong>다툼의 대상 관련 가처분</strong>
                <p>특정물에 관한 이행청구권 — 소유권이전청구권, 명도청구권, 특정 물건 반환청구권 등</p>
                <p>예: "내 자동차를 반환하라", "부동산 소유권을 이전하라" 등</p>
            </div>

            <div class="definition-block">
                <strong>임시지위 가처분</strong>
                <p>현존하는 권리관계 + 그에 대한 다툼이 있는 경우</p>
                <p>예: 이사직 박탈에 대한 임시지위 회복, 회원권 박탈에 대한 임시 회복 등</p>
            </div>

            <h3>5. 피보전권리가 있는 경우 (예시)</h3>
            <div class="example-list">
                <h4>✅ 가압류 가능한 채권들</h4>
                <ul>
                    <li><span class="ok-mark">✅</span> 금전 대여금 채권</li>
                    <li><span class="ok-mark">✅</span> 물품 구매 대금 청구권</li>
                    <li><span class="ok-mark">✅</span> 공사 대금 채권</li>
                    <li><span class="ok-mark">✅</span> 손해배상청구권</li>
                    <li><span class="ok-mark">✅</span> 임금 채권</li>
                    <li><span class="ok-mark">✅</span> 용역비 청구권</li>
                    <li><span class="ok-mark">✅</span> 기한이 도래하지 않았지만 조건이 충족될 가능성이 있는 채권</li>
                </ul>
            </div>

            <div class="example-list">
                <h4>✅ 가처분 가능한 권리들</h4>
                <ul>
                    <li><span class="ok-mark">✅</span> 부동산 소유권이전청구권</li>
                    <li><span class="ok-mark">✅</span> 명도청구권 (집, 사무실 명도)</li>
                    <li><span class="ok-mark">✅</span> 자동차, 미술품 등 특정물 반환청구권</li>
                    <li><span class="ok-mark">✅</span> 이사직, 임원직 지위 보전 청구권</li>
                    <li><span class="ok-mark">✅</span> 회원권 또는 조합원 자격 보전 청구권</li>
                </ul>
            </div>

            <h3>6. 피보전권리가 없는 경우 (제외 사항)</h3>
            <div class="example-list">
                <h4>❌ 보전 불가능한 경우</h4>
                <ul>
                    <li><span class="ng-mark">❌</span> 특정 물건 인도 청구권 (가압류는 불가, 가처분만 가능)</li>
                    <li><span class="ng-mark">❌</span> 강제집행이 명시적으로 금지된 권리 (특정 공권 청구권 등)</li>
                    <li><span class="ng-mark">❌</span> 이미 소멸한 채권</li>
                    <li><span class="ng-mark">❌</span> 완전히 확정되지 않은 미래 채권 (계약 자체가 없는 경우)</li>
                    <li><span class="ng-mark">❌</span> 조건 충족 가능성이 전혀 없는 정지조건부 채권</li>
                </ul>
            </div>

            <h3>7. 피보전권리의 소명</h3>
            <p>가압류나 가처분을 신청할 때, 채권자는 다음을 소명(증명)해야 합니다:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>피보전권리의 존재: 계약서, 합의서, 영수증, 송금 증거 등</li>
                <li>권리의 내용: 채권액, 기한, 조건 등 명확한 표시</li>
                <li>채권자임을 입증: 계약 당사자임을 보이는 서류</li>
            </ul>

            <div class="definition-block">
                <strong>중요: "소명"은 "완전한 증명"과 다릅니다</strong>
                <p>피보전권리 소명은 고도의 가능성을 보일 수 있으면 족합니다. 완전한 증명(법정증거로 확실히 입증)까지는 필요하지 않습니다.</p>
            </div>` },
      { heading: '자주하는 질문', content: `<div class="qna-container">
                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q1. 아직 기한이 안 된 채권도 가압류 피보전권리가 될 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, 가능합니다. <strong>기한이 도래하지 않았다고 해서 피보전권리가 부정되지는 않습니다.</strong></p>
                        <p>가압류의 목적은 지급 기한이 도래한 후 강제집행을 하지 못하게 되는 것을 미리 방지하는 것이기 때문입니다. 따라서:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>기한부 채권도 그 기한이 필연적으로 도래할 것이 확실하면 가압류 가능</li>
                            <li>조건부 채권도 그 조건이 충족될 가능성이 있으면 가압류 가능</li>
                            <li>예: 계약금 500만원(2026년 3월 지급)도 현재 가압류 가능</li>
                        </ul>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q2. 손해배상청구권이 확정되지 않았는데 가압류할 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>경우에 따라 다릅니다.</p>
                        <p><strong>형사 사건으로 인한 손해배상:</strong> 아직 형사 판결이 나오지 않았다면 피보전권리 자체가 성립하지 않아 가압류 불가능합니다.</p>
                        <p><strong>민사 사건으로 인한 손해배상:</strong> 가압류 신청 당시에 손해배상청구소송이 진행 중이거나 예정되어 있다면, 손해 발생과 인과관계를 소명하여 가압류 가능할 수 있습니다.</p>
                        <p><strong>교통사고 손해배상:</strong> 사고 발생 사실, 피해 내용, 치료비 영수증 등으로 손해를 소명하면 가압류 가능합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q3. 공사대금 채권 중 아직 지급 기한이 안 된 부분도 포함되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, 포함됩니다.</p>
                        <p>예를 들어 공사 대금이 분할 지급 예정이고, 현재 1회차만 지급 기한이 도래했으며 2,3회차는 아직이라면:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>1회차 대금:</strong> 이미 지급 기한 도래 — 당연히 가압류 가능</li>
                            <li><strong>2,3회차 대금:</strong> 기한부 채권 — 기한이 필연적으로 도래할 것이 확실하면 가압류 가능</li>
                        </ul>
                        <p>중요한 것은 <strong>전체 계약 금액이 확정</strong>되어 있고, <strong>지급 일정이 명확</strong>해야 한다는 점입니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q4. 피보전권리가 소명되지 않으면 가압류 신청은 어떻게 되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p><strong>가압류 신청이 기각됩니다.</strong></p>
                        <p>그뿐 아니라 추가 책임이 발생할 수 있습니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>손해배상책임:</strong> 채무자가 부당한 가압류로 입은 손해를 배상해야 할 수 있음</li>
                            <li><strong>경비 부담:</strong> 가압류 집행에 드는 비용을 채무자가 청구할 수 있음</li>
                            <li><strong>신용 악화:</strong> 부당한 가압류 신청 기록이 남을 수 있음</li>
                        </ul>
                        <p>따라서 <strong>확실한 피보전권리가 있을 때만 신청</strong>해야 합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q5. 형사 사건으로 손해배상이 예상되는 경우에도 가압류가 가능한가요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>기본적으로는 <strong>어렵습니다.</strong></p>
                        <p>형사 판결이 나기 전에는 민사 손해배상청구권 자체가 아직 발생하지 않은 것으로 봅니다. 다만 예외적으로:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>형사 판결이 나온 후:</strong> 판결 내용을 바탕으로 손해배상청구권이 발생하면 가압류 가능</li>
                            <li><strong>형사 사건 진행 중:</strong> 손해 사실이 객관적으로 명확하고(예: 교통사고, 장애인 피해), 민사 청구가 함께 진행된다면 가압류 가능성 있음</li>
                        </ul>
                        <p>이 경우 법무사와 상담하여 구체적 판단이 필요합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q6. 연대보증인에 대한 채권도 피보전권리가 되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, 됩니다.</p>
                        <p>주채무자(원래의 채무자)에 대한 채권이 있다면, <strong>연대보증인에 대해서도 동시에 가압류할 수 있습니다.</strong></p>
                        <p>가압류 신청 시:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>주채무자의 재산에 가압류</li>
                            <li>연대보증인의 재산에도 별도로 가압류 신청 가능</li>
                            <li>연대보증인은 원래의 채무관계를 부인할 수 없으므로 피보전권리 입증 용이</li>
                        </ul>
                    </div>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="ruling-box">
                <p>"대법원은 가압류의 피보전권리는 <strong>반드시 이행기(지급 기한)가 도래할 필요가 없으며, 조건부 또는 기한부 채권도 그 채권의 실현이 객관적으로 예측 가능한 경우에는 피보전권리가 될 수 있다</strong>고 판시하고 있습니다."</p>
                <p style="margin-top: 15px; color: #555;">이는 가압류가 미래의 강제집행을 대비하는 절차라는 취지를 반영합니다. 따라서 조건이 충족되거나 기한이 도래할 가능성이 있으면 이미 가압류 신청이 가능하다는 의미입니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div>
                        <strong>피보전권리 없이 신청하면 손해배상책임 발생</strong>
                        <p style="margin: 8px 0 0 0;">피보전권리가 없는 상태에서 가압류나 가처분을 신청하면 법원에서 기각될 뿐만 아니라, 채무자가 입은 손해에 대해 배상해야 할 수 있습니다. 가압류·가처분은 신중하게 신청해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>피보전권리는 소명으로 족함</strong>
                        <p style="margin: 8px 0 0 0;">피보전권리를 입증할 때는 "완전한 증명"까지는 필요하지 않습니다. 고도의 가능성을 보이면 족하므로, 계약서, 합의서 등으로 충분합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>법원은 피보전권리와 보전의 필요성을 동시에 심사</strong>
                        <p style="margin: 8px 0 0 0;">피보전권리가 있어도 보전의 필요성이 없으면 가압류·가처분이 기각될 수 있습니다. 두 요건을 모두 갖추어야 한다는 점을 기억하세요.</p>
                    </div>
                </div>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="next-section">
                <h3>가압류·가처분 신청 전 체크리스트</h3>
                <ul>
                    <li><strong>피보전권리 확인:</strong> 금전채권인가? 특정물 청구권인가? 이미 발생한 권리인가?</li>
                    <li><strong>권리 내용 명확화:</strong> 채권액, 기한, 조건이 명확한가?</li>
                    <li><strong>소명 자료 준비:</strong> 계약서, 합의서, 송금 증거, 메일 등 증거 확보</li>
                    <li><strong>보전의 필요성 검토:</strong> 채무자가 재산을 처분할 염려가 있는가?</li>
                    <li><strong>본안소송 준비:</strong> 가압류·가처분 후 본안소송을 진행할 계획이 있는가?</li>
                    <li><strong>법무사 상담:</strong> 피보전권리 판단이 애매하면 반드시 전문가 상담</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제276조', desc: '' },
      { name: '민사집행법 제300조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-14',
    title: '보전의 필요성',
    meta: '법원이 어떤 때 가압류·가처분을 인정하는가',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <ul>
                    <li>가압류나 가처분을 신청하려는데 법원에서 인정받을 수 있는지 모르겠다</li>
                    <li>보전의 필요성이 무엇인지, 어떻게 소명해야 하는지 모르겠다</li>
                    <li>상대방이 재산을 처분할 것 같다는 근거가 필요한지 모르겠다</li>
                    <li>법원이 보전의 필요성을 어떤 기준으로 판단하는지 알고 싶다</li>
                    <li>보전의 필요성이 부족하면 가압류가 기각될까 봐 걱정된다</li>
                </ul>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>보전의 필요성이란?</h3>
                <p><strong>강제집행이 불가능하거나 현저히 어려워질 위험을 방지하기 위한 법적 필요성입니다.</strong></p>

                <h3 style="margin-top: 20px;">보전의 필요성의 정의</h3>
                <p><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=027700" target="_blank" rel="noopener">민사집행법 제277조</a> — 가압류: "장래의 강제집행이 불가능하거나 현저히 곤란해질 염려"</p>
                <p><a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=030000" target="_blank" rel="noopener">민사집행법 제300조</a> — 가처분: "현상의 변경으로 권리 실행이 불가능하거나 현저히 곤란해질 염려" 또는 "현저한 손해나 급박한 위험"</p>

                <h3 style="margin-top: 20px;">핵심 포인트</h3>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>소명으로 족함 — 완전한 증명까지는 필요 없음</li>
                    <li>신청 당시를 기준으로 판단</li>
                    <li>채무자의 재산 상황, 행동, 변제 의사 등을 종합적으로 고려</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<h3>1. 보전의 필요성의 개념</h3>
            <p>보전의 필요성은 <strong>가압류나 가처분이 필요한 객관적 정황</strong>을 의미합니다. 즉:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>지금 조치를 취하지 않으면 나중에 강제집행이 불가능할 위험이 있는가?</li>
                <li>채무자가 재산을 숨기거나 처분할 가능성이 있는가?</li>
                <li>채무자의 경제 상황이 악화될 가능성이 있는가?</li>
            </ul>

            <h3>2. 가압류의 보전의 필요성 판단 기준</h3>
            <div class="judgment-grid">
                <h4>❶ 채무자의 재산 처분·은닉 가능성</h4>
                <ul>
                    <li>채무자가 이전에 재산을 처분한 전력이 있는가?</li>
                    <li>채무자가 부동산을 매도하려고 광고하고 있는가?</li>
                    <li>채무자가 사업을 정리하고 있는 정황이 있는가?</li>
                    <li>채무자가 자산을 해외로 이전하려 하는가?</li>
                </ul>

                <h4>❷ 채무자의 재산 감소 상황</h4>
                <ul>
                    <li>채무자의 부동산이 경매 중인가?</li>
                    <li>채무자의 급여가 감소하고 있는가?</li>
                    <li>채무자의 회사가 영업난을 겪고 있는가?</li>
                    <li>채무자가 다른 채권자들로부터 많은 채무를 지고 있는가?</li>
                </ul>

                <h4>❸ 채무자의 경제 상황 악화</h4>
                <ul>
                    <li>채무자가 다중 채무자인가?</li>
                    <li>채무자의 신용점수가 낮은가?</li>
                    <li>채무자가 파산 신청을 고려하고 있는가?</li>
                </ul>

                <h4>❹ 채권액 대비 채무자 재산의 부족</h4>
                <ul>
                    <li>청구 채권액이 막대한가?</li>
                    <li>채무자의 확인된 재산이 부족한가?</li>
                    <li>다른 채권자들의 청구가 선행하고 있는가?</li>
                </ul>

                <h4>❺ 채무자의 변제 의사 부족</h4>
                <ul>
                    <li>채무자가 지금까지 변제하지 않았는가?</li>
                    <li>채무자가 변제 약속을 위반했는가?</li>
                    <li>채무자가 채무 존부 자체를 부인하고 있는가?</li>
                </ul>
            </div>

            <h3>3. 보전의 필요성 소명 방법</h3>
            <div class="evidence-box">
                <h4>채무자의 재산 처분·은닉 정황을 보이는 증거</h4>
                <ul>
                    <li>부동산 매매계약서 또는 부동산 중개 광고 화면</li>
                    <li>채무자의 자동차 판매 광고</li>
                    <li>회사 정리 또는 폐쇄 정황 자료</li>
                    <li>해외 이전 자료</li>
                </ul>
            </div>

            <div class="evidence-box">
                <h4>채무자의 경제 악화를 보이는 증거</h4>
                <ul>
                    <li>채무자의 신용 정보 (신용조사회사 조회)</li>
                    <li>다른 채권자의 소장 또는 경매 통지</li>
                    <li>채무자 명의의 부동산 경매 절차 중 공고</li>
                    <li>채무자의 금융거래 정지 사실</li>
                </ul>
            </div>

            <div class="evidence-box">
                <h4>채무자의 변제 불능을 보이는 증거</h4>
                <ul>
                    <li>채무자의 은행 계좌 잔액 증명</li>
                    <li>채무자의 임금 명세표</li>
                    <li>채무자의 신용 카드 사용 정지 통지</li>
                    <li>지금까지의 변제 거부 사실</li>
                </ul>
            </div>

            <h3>4. 보전의 필요성이 인정되지 않는 경우</h3>
            <p>반대로 다음의 경우에는 보전의 필요성이 부정될 수 있습니다:</p>

            <div class="definition-block">
                <strong>채무자에게 충분한 재산이 있는 경우</strong>
                <p>예: 채무자가 명확한 부동산이나 충분한 정기 급여를 받고 있어서, 강제집행이 가능할 것으로 보이는 경우</p>
            </div>

            <div class="definition-block">
                <strong>채무자의 변제 의사와 능력이 있는 경우</strong>
                <p>예: 채무자가 이전 채무를 성실히 변제해온 기록이 있거나, 변제 약속을 지킨 경우</p>
            </div>

            <div class="definition-block">
                <strong>단순한 채무 불이행만으로는 부족한 경우</strong>
                <p>예: 채무자가 지금까지 돈을 주지 않은 것이 사실이지만, 그것이 조직적인 재산 은닉의 결과는 아닌 경우</p>
            </div>

            <h3>5. 가처분에서의 보전의 필요성</h3>
            <p>가처분의 경우, 보전의 필요성의 기준이 조금 다릅니다:</p>

            <div class="definition-block">
                <strong>다툼의 대상 가처분</strong>
                <p>예: 명도청구 가처분 — 현상이 변경되면(예: 세입자가 도망치면) 나중에 집행이 불가능해질 위험</p>
            </div>

            <div class="definition-block">
                <strong>임시지위 가처분</strong>
                <p>현저한 손해나 급박한 위험 — 단순한 불편함이 아니라, 직위 박탈로 인한 신분 침해 등 현저한 손해가 있어야 함</p>
            </div>

            <h3>6. 법원의 비례성 판단</h3>
            <p>중요한 점: 법원은 보전의 필요성과 함께 <strong>채무자의 불이익도 함께 고려</strong>합니다.</p>

            <div class="definition-block">
                <strong>비례성 원칙</strong>
                <p>보전의 필요성이 크더라도, 채무자에게 미칠 불이익(재산 동결, 사업 중단 등)이 너무 크면 가압류·가처분이 거절될 수 있습니다.</p>
                <p>예: 채무액 100만원 대 채무자의 사업 전체를 동결하려는 경우</p>
            </div>` },
      { heading: '자주하는 질문', content: `<div class="qna-container">
                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q1. 상대방이 재산을 처분할 것 같다는 근거가 없어도 가압류를 신청할 수 있나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>기본적으로 <strong>어렵습니다.</strong> 가압류의 목적이 바로 재산 처분을 미리 방지하기 위한 것이기 때문입니다.</p>
                        <p>다만 다음과 같은 경우는 예외입니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>채무자의 경제 상황이 현저히 악화된 경우 (다중 채무, 경매 진행 중 등)</li>
                            <li>채무자가 이전에 재산을 처분한 전력이 있는 경우</li>
                            <li>채무자가 변제를 거부하고 있는 경우</li>
                        </ul>
                        <p>이 경우들도 모두 "근거"가 있어야 합니다. 단순히 "처분할 것 같다"는 추측만으로는 부족합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q2. 보전의 필요성 소명에 실패하면 신청이 기각되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, 기각됩니다.</p>
                        <p>가압류나 가처분을 받으려면 두 가지 조건을 모두 갖추어야 합니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>피보전권리:</strong> 청구할 권리가 있는가?</li>
                            <li><strong>보전의 필요성:</strong> 지금 조치가 필요한가?</li>
                        </ul>
                        <p>이 중 하나라도 부족하면 신청이 기각됩니다. 따라서 보전의 필요성을 충분히 소명하지 못하면 가압류도 받을 수 없습니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q3. 가압류와 가처분에서 보전의 필요성 기준이 다른가요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>기본 개념은 같지만, <strong>구체적 기준은 다릅니다.</strong></p>
                        <p><strong>가압류:</strong> 장래의 강제집행이 불가능하거나 현저히 곤란해질 염려 — 주로 채무자의 재산 감소, 경제 악화 등을 봅니다.</p>
                        <p><strong>가처분:</strong></p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>다툼의 대상: 현상 변경으로 권리 실행 불가능 위험 (예: 세입자 도망)</li>
                            <li>임시지위: 현저한 손해 또는 급박한 위험 (예: 이사직 박탈)</li>
                        </ul>
                        <p>따라서 가처분은 가압류보다 더 구체적이고 개별적인 상황을 고려합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q4. 여러 재산에 가압류를 신청할 때 보전의 필요성은 각각 소명해야 하나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>기본적으로 <strong>한 번의 소명으로 족합니다.</strong></p>
                        <p>보전의 필요성은 개별 재산별로 판단되는 것이 아니라, <strong>채무자 전체의 경제 상황을 기준</strong>으로 판단됩니다.</p>
                        <p>즉:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>채무자가 경제난을 겪고 있다는 것을 소명하면</li>
                            <li>부동산, 자동차, 예금 등 여러 재산에 동시에 가압류를 신청할 수 있습니다</li>
                        </ul>
                        <p>다만 각 재산이 실제로 채무자 명의인지는 각각 확인해야 합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q5. 보전의 필요성이 사라지면 가압류가 자동으로 취소되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>자동으로 취소되지는 않습니다. 하지만 <strong>채무자가 취소를 신청할 수 있습니다.</strong></p>
                        <p>예를 들어:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>원래는 보전의 필요성이 있었으나, 나중에 채무자가 큰 재산을 얻은 경우</li>
                            <li>채무자가 채권자와 합의하여 변제한 경우</li>
                            <li>채무자가 담보를 제공한 경우</li>
                        </ul>
                        <p>이 경우 채무자는 "사정 변경"을 이유로 가압류 취소를 신청할 수 있습니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="ruling-box">
                <p>"대법원은 가압류의 보전의 필요성은 <strong>채무자가 장차 강제집행이 불가능하거나 현저히 곤란할 염려가 있는지를 기준으로 판단하며, 채무자의 재산 상황, 채무자의 행동, 채권액 등을 종합적으로 고려한다</strong>고 판시하고 있습니다."</p>
                <p style="margin-top: 15px; color: #555;">이는 보전의 필요성 판단이 단일한 기준이 아니라, 여러 요소를 종합적으로 고려한다는 의미입니다. 따라서 채무자의 경제 상황, 재산 상황, 변제 의사 등을 다각도에서 입증하는 것이 중요합니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div>
                        <strong>보전의 필요성을 과장하면 손해배상책임 발생</strong>
                        <p style="margin: 8px 0 0 0;">보전의 필요성을 소명할 때 거짓 자료를 제출하거나 과장하면, 채무자가 부당한 가압류로 입은 손해배상을 청구할 수 있습니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>보전의 필요성 판단은 신청 당시를 기준</strong>
                        <p style="margin: 8px 0 0 0;">가압류를 신청할 당시를 기준으로 보전의 필요성을 판단합니다. 나중에 채무자의 상황이 개선되면, 채무자는 "사정 변경"을 이유로 취소를 신청할 수 있습니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>법원은 비례성을 고려</strong>
                        <p style="margin: 8px 0 0 0;">보전의 필요성이 크더라도, 채무자에게 미칠 불이익이 너무 크면 가압류가 거절될 수 있습니다. 따라서 청구 채권액과 채무자의 재산 규모가 균형을 이루어야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>담보 제공의 전략적 활용</strong>
                        <p style="margin: 8px 0 0 0;">보전의 필요성을 소명하기 어려운 경우, 더 큰 담보를 제공하여 법원을 설득할 수 있습니다. 담보액이 크면 보전의 필요성 요건이 완화될 수 있습니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="next-section">
                <h3>가압류·가처분 신청 전 보전의 필요성 검토 체크리스트</h3>
                <ul>
                    <li><strong>채무자의 재산 상황 조사:</strong> 부동산, 자동차, 예금 등 확인 가능한 재산이 있는가?</li>
                    <li><strong>채무자의 경제 상황 확인:</strong> 다른 채권자가 있는가? 경매가 진행 중인가?</li>
                    <li><strong>채무자의 변제 능력·의사 판단:</strong> 지금까지 변제하지 않은 이유는 무엇인가?</li>
                    <li><strong>재산 처분 정황 확인:</strong> 채무자가 최근에 재산을 처분하거나 처분 시도가 있었는가?</li>
                    <li><strong>객관적 증거 수집:</strong> 신용정보, 공고, 광고, 법원 기록 등 객관적 자료</li>
                    <li><strong>법무사 상담:</strong> 보전의 필요성 소명 전략 수립</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제277조', desc: '' },
      { name: '민사집행법 제300조', desc: '' }
    ],
    forms: []
  },
  {
    id: 'pv-15',
    title: '보전처분 후 본안소송',
    meta: '가압류·가처분 이후 무엇을 해야 하는가',
    sections: [
      { heading: '이런 분께 필요합니다', content: `<div class="checklist">
                <ul>
                    <li>가압류를 받아놓고 다음에 무엇을 해야 할지 모르겠다</li>
                    <li>가압류 후 얼마나 빨리 소송을 제기해야 하는지 모르겠다</li>
                    <li>본안소송에서 이기면 가압류가 자동으로 집행으로 이어지는지 모르겠다</li>
                    <li>가압류한 재산으로 어떻게 돈을 받는지 모르겠다</li>
                    <li>가처분 후 본안소송을 하지 않으면 어떻게 되는지 모르겠다</li>
                </ul>
            </div>` },
      { heading: '핵심정리', content: `<div class="summary-box">
                <h3>보전처분과 본안소송의 관계</h3>
                <p><strong>보전처분은 잠정 조치이고, 본안소송이 권리를 확정하는 절차입니다.</strong></p>
                <p>보전처분 후 본안소송을 반드시 제기하고 승소해야 최종적으로 권리를 회수할 수 있습니다.</p>

                <h3 style="margin-top: 20px;">핵심 3가지</h3>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li><strong>본안소송 의무:</strong> 가압류 후 일정 기간 내에 본안소송 제기 필수 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>)</li>
                    <li><strong>순차적 진행:</strong> 가압류 → 본안소송 → 판결 → 집행</li>
                    <li><strong>본안 승소가 최종 조건:</strong> 본안 패소 시 가압류는 취소되고 손해배상책임 발생 가능</li>
                </ul>
            </div>` },
      { heading: '상세설명', content: `<h3>1. 보전처분과 본안소송의 구분</h3>

            <div class="definition-block">
                <strong>보전처분 (가압류·가처분)</strong>
                <p>채무자의 재산을 임시로 동결하여 강제집행이 가능하도록 하는 절차</p>
                <p>특징: 독립적 효력 없음, 임시 조치, 반드시 본안소송과 결합되어야 함</p>
            </div>

            <div class="definition-block">
                <strong>본안소송</strong>
                <p>권리 여부를 최종적으로 확정하는 절차</p>
                <p>특징: 확정판결로 권리 확정, 강제집행의 근거 제공</p>
            </div>

            <h3>2. 가압류 후 본안소송 제기 의무</h3>
            <p><strong>법원은 채권자에게 본안소송 제기를 강제할 수 있습니다.</strong></p>

            <div class="definition-block">
                <strong>본안소송 제기 최고 (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>)</strong>
                <p>채무자가 채권자에게 "본안소송을 제기하라"고 최고할 수 있습니다. 최고를 받은 채권자는 정해진 기간 내(보통 2주~1개월, 법원 재량)에 본안소송을 제기하거나 기존 소송에 기일을 지정해야 합니다.</p>
            </div>

            <div class="definition-block">
                <strong>본안소송 미제기 시 가압류 취소</strong>
                <p>최고를 받고도 기한 내에 본안소송을 제기하지 않으면, 채무자는 가압류 취소를 신청할 수 있습니다. 이 경우 법원은 가압류를 취소합니다.</p>
            </div>

            <h3>3. 보전처분 → 본안소송 → 집행의 전체 흐름</h3>
            <div class="flow-diagram">
                <h4>보전처분과 본안소송의 순차적 진행</h4>
                <div class="flow-step"><span>1단계: 가압류 신청 및 집행 — 채무자의 재산 동결</span></div>
                <div class="flow-step"><span>2단계: 본안소송 제기 — 채권 존부 확정</span></div>
                <div class="flow-step"><span>3단계: 본안 승소 판결 확정 — 채권자의 권리 확정</span></div>
                <div class="flow-step"><span>4단계: 집행문 부여 신청 — 판결을 강제집행 가능하게 함</span></div>
                <div class="flow-step"><span>5단계: 강제집행 (경매, 추심, 전부명령 등) — 가압류 재산으로 집행</span></div>
                <div class="flow-step"><span>6단계: 배당 및 변제 수령 — 최종 권리 회수</span></div>
            </div>

            <h3>4. 본안소송의 종류</h3>
            <p>채권의 종류에 따라 다른 소송을 제기합니다:</p>

            <div class="execution-box">
                <h4>금전채권의 경우</h4>
                <ul>
                    <li><strong>지급명령:</strong> 금액이 명확하고 이의 가능성이 낮으면 지급명령 신청 (간이 절차)</li>
                    <li><strong>민사소송:</strong> 이의가 있거나 복잡한 경우 민사소송 제기</li>
                    <li><strong>소송 흐름:</strong> 소장 제출 → 답변서 제출 → 증거 조사 → 판결 → 항소 (필요 시)</li>
                </ul>
            </div>

            <div class="execution-box">
                <h4>명도청구(부동산 인도)</h4>
                <ul>
                    <li><strong>명도 소송:</strong> 부동산 명도를 청구하는 소송</li>
                    <li><strong>가처분 결합:</strong> 가처분과 함께 본안소송 진행</li>
                </ul>
            </div>

            <h3>5. 가압류를 본집행(강제경매)으로 전환</h3>
            <p>본안 승소 후, 가압류한 재산을 강제집행으로 전환합니다:</p>

            <div class="definition-block">
                <strong>부동산 가압류 → 강제경매</strong>
                <p>부동산에 대한 가압류는 자동으로 강제경매로 이행됩니다. 판결 확정 후 집행문을 받으면 강제경매 신청이 가능합니다.</p>
            </div>

            <div class="definition-block">
                <strong>채권 가압류 → 추심명령·전부명령</strong>
                <p>채권(은행 계좌, 급여 등)에 대한 가압류는 판결 후 추심명령 또는 전부명령을 신청합니다. (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=022900" target="_blank" rel="noopener">민사집행법 제229조</a>)</p>
            </div>

            <div class="definition-block">
                <strong>동산 가압류 → 매각</strong>
                <p>자동차 등 동산의 경우 강제매각 절차를 진행합니다.</p>
            </div>

            <h3>6. 본안소송 기간 중 가압류 유지</h3>
            <p>중요한 점: <strong>본안소송이 진행되는 동안 가압류는 계속 유효합니다.</strong></p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>채무자는 본안소송 진행 중에도 가압류 취소를 신청할 수 있습니다</li>
                <li>채권자는 가압류를 잘 관리해야 합니다 (취소 신청 대비)</li>
                <li>본안 판결 전 합의가 되면 가압류 취소 신청이 필요합니다</li>
            </ul>

            <h3>7. 본안소송에서 패소한 경우</h3>
            <p><strong>매우 심각한 결과가 발생합니다:</strong></p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li><strong>가압류 취소:</strong> 부당한 가압류로 판단되어 취소됨</li>
                <li><strong>손해배상책임:</strong> 채무자가 입은 손해를 배상해야 함</li>
                <li><strong>신용악화:</strong> 부당한 가압류 신청 기록 남음</li>
            </ul>
            <p>따라서 본안 승소 가능성이 충분한 경우에만 보전처분을 신청해야 합니다.</p>

            <h3>8. 가처분 후 본안소송</h3>
            <p>가처분도 동일하게 본안소송이 필수입니다:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>가처분 결정 후 본안소송 (지위확인소송, 명도소송 등) 제기</li>
                <li>본안 판결 확정 시 가처분이 본집행으로 전환</li>
                <li>본안 패소 시 가처분 취소 + 손해배상책임</li>
            </ul>` },
      { heading: '자주하는 질문', content: `<div class="qna-container">
                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q1. 가압류 후 본안소송을 제기하지 않으면 가압류는 언제까지 유지되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>채무자가 본안소송 제기를 최고하고, 그 기한 내에 채권자가 소송을 제기하지 않으면 <strong>가압류가 취소됩니다.</strong></p>
                        <p>구체적으로는:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>채무자가 "본안소송을 제기하라"고 최고 → 채권자에게 통지</li>
                            <li>최고 기한(보통 2주~1개월) 내에 본안소송을 제기하지 않으면</li>
                            <li>채무자가 가압류 취소를 신청 → 법원이 취소 결정</li>
                        </ul>
                        <p>따라서 가압류를 받은 후 가능한 한 빨리 본안소송을 준비하고 제기해야 합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q2. 본안소송에서 이기면 가압류가 자동으로 집행으로 이어지나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>자동으로 이어지지는 않습니다. <strong>추가 절차가 필요합니다:</strong></p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>본안 판결 확정</li>
                            <li>집행문 부여 신청 (판결을 강제집행 가능하게 함)</li>
                            <li>집행문을 받으면 강제집행 신청 가능</li>
                            <li>강제경매, 추심명령 등 집행 진행</li>
                        </ul>
                        <p>다만 가압류한 재산이 이미 동결되어 있기 때문에, 집행이 비교적 빨리 진행될 수 있습니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q3. 가압류한 재산이 여러 개인데 어떤 것부터 집행해야 하나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>채권자의 선택입니다. 하지만 전략적으로 고려해야 합니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>우선순위 기준:</strong> 채권 액수, 집행의 용이성, 경제성 등</li>
                            <li><strong>현금화 속도:</strong> 은행 계좌(빠름) → 자동차(중간) → 부동산(느림)</li>
                            <li><strong>전략:</strong> 안전하고 빠르게 회수 가능한 것부터 집행</li>
                        </ul>
                        <p>예: 은행 계좌에 돈이 충분하면 먼저 추심명령으로 회수하고, 모자란 부분은 부동산 경매로 진행</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q4. 본안소송 중 채무자가 파산 신청을 하면 어떻게 되나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>상황이 복잡해집니다. 다음과 같이 진행됩니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>본안소송 중단:</strong> 채무자 파산으로 인해 소송이 일시 중단될 수 있음</li>
                            <li><strong>가압류 유지:</strong> 가압류한 재산은 파산 재산으로 편입됨</li>
                            <li><strong>채권자 지위:</strong> 채권자는 파산절차에 참여하여 배당받음</li>
                            <li><strong>우선순위:</strong> 보통 일반 채권자로 취급되어, 담보권자나 근로자보다 뒤순위</li>
                        </ul>
                        <p>파산 절차는 매우 복잡하므로, 파산 신청이 예상되면 즉시 법무사와 상담해야 합니다.</p>
                    </div>
                </div>

                <div class="qna-item">
                    <div class="qna-question">
                        <span>Q5. 가처분 후 본안소송에서 패소하면 가처분으로 인한 손해를 배상해야 하나요?</span>
                        <span class="qna-toggle">▼</span>
                    </div>
                    <div class="qna-answer">
                        <p>예, <strong>배상책임이 발생할 수 있습니다.</strong></p>
                        <p>본안소송에서 패소하면 가처분이 부당했다고 판단되어:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>손해배상청구:</strong> 채무자가 가처분으로 입은 손해를 청구</li>
                            <li><strong>손해 범위:</strong> 직접 손해(사업 중단, 명예훼손 등) + 간접 손해</li>
                            <li><strong>과실상계:</strong> 채권자가 선의였다면 손해배상이 제한될 수 있음</li>
                        </ul>
                        <p>따라서 본안 승소 가능성이 충분하지 않으면 가처분 신청을 신중히 결정해야 합니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '판례', content: `<div class="ruling-box">
                <p>"대법원은 <strong>채무자가 채권자에게 본안소송 제기를 최고하였음에도 채권자가 정해진 기간 내에 본안소송을 제기하지 않으면, 보전처분은 취소 요건에 해당한다</strong>고 판시하고 있습니다."</p>
                <p style="margin-top: 15px; color: #555;">이는 가압류나 가처분이 본안소송과 분리될 수 없는 절차라는 의미입니다. 보전처분만 받고 본안소송을 하지 않으면 언제든 취소될 수 있다는 점을 명확히 합니다.</p>
            </div>` },
      { heading: '주의사항', content: `<div class="warning-box">
                <div class="warning-item">
                    <div class="warning-icon">⚡</div>
                    <div>
                        <strong>본안소송 제기 의무 — 기간 내 반드시 제기</strong>
                        <p style="margin: 8px 0 0 0;">채무자로부터 본안소송 제기 최고를 받으면, 반드시 정해진 기간(보통 2주~1개월) 내에 소송을 제기해야 합니다. (<a class="law-tag" href="https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=028700" target="_blank" rel="noopener">민사집행법 제287조</a>) 기한을 놓치면 가압류가 취소될 수 있습니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">⚠️</div>
                    <div>
                        <strong>본안소송에서 패소하면 손해배상책임 발생</strong>
                        <p style="margin: 8px 0 0 0;">본안소송에서 청구권이 없다고 판결되면, 부당한 보전처분으로 인해 채무자가 입은 손해를 배상해야 할 수 있습니다. 손해 범위는 직접 손해뿐만 아니라 간접 손해까지 포함될 수 있습니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>가압류 집행 후 비용 계산 필수</strong>
                        <p style="margin: 8px 0 0 0;">가압류 집행에는 비용(신청 수수료, 집행 경비 등)이 들어갑니다. 본안 승소 후에도 이 비용을 회수해야 하는 점을 고려하여 청구액을 결정해야 합니다.</p>
                    </div>
                </div>

                <div class="warning-item">
                    <div class="warning-icon">ℹ️</div>
                    <div>
                        <strong>가압류 중 합의 시 취소 신청 필요</strong>
                        <p style="margin: 8px 0 0 0;">본안소송 중 상대방과 합의하여 변제받기로 약정했으면, 반드시 가압류 취소를 신청해야 합니다. 그렇지 않으면 채무자가 나중에 가압류 취소를 신청할 수 있습니다.</p>
                    </div>
                </div>
            </div>` },
      { heading: '다음에 확인할 사항', content: `<div class="next-section">
                <h3>가압류 후 본안소송 진행 시 체크리스트</h3>
                <ul>
                    <li><strong>신속한 본안소송 준비:</strong> 가압류 이후 가능한 한 빨리 본안소송 제기 (채무자의 최고 대비)</li>
                    <li><strong>적절한 소송 선택:</strong> 금액이 명확하면 지급명령, 복잡하면 민사소송</li>
                    <li><strong>강력한 증거 확보:</strong> 피보전권리 입증 증거와 같은 자료를 본안소송에 제출</li>
                    <li><strong>가압류 관리:</strong> 본안소송 진행 중 가압류가 유지되도록 관리, 채무자의 취소 신청에 대비</li>
                    <li><strong>합의 시 취소 절차:</strong> 본안소송 중 합의하면 반드시 가압류 취소 신청</li>
                    <li><strong>본안 승소 후 집행:</strong> 판결 확정 후 집행문을 받아 강제경매·추심 등 진행</li>
                    <li><strong>배당 및 회수:</strong> 여러 채권자가 있을 경우 순위 확인 후 배당받음</li>
                </ul>
            </div>` }
    ],
    laws: [
      { name: '민사집행법 제287조', desc: '' },
      { name: '민사집행법 제229조', desc: '' }
    ],
    forms: []
  }
];