/* ============================================================
   박배선 법무사 사무소 - Main JavaScript
   ============================================================ */

'use strict';

/* ---------- CATEGORY CONFIG ---------- */
const CATEGORIES = [
  { id: 'realestate', name: '부동산등기', icon: '🏠' },
  { id: 'corporation', name: '법인등기',   icon: '🏢' },
  { id: 'lawsuit',       name: '민사소송',   icon: '⚖️' },
  { id: 'preservation', name: '보전처분',   icon: '🛡️' },
  { id: 'enforcement',  name: '강제집행',   icon: '⚡' },
  { id: 'inheritance',  name: '상속',       icon: '📜' },
  { id: 'etc',         name: '기타',       icon: '📁' },
];

/* ============================================================
   CONTENT DATA
   ============================================================ */
const CONTENT_DATA = {

  /* ---- 부동산등기 ---- */
  realestate: {
    label: '부동산등기',
    topics: [
      {
        id: 'rt-1', title: '소유권이전등기 (매매)',
        meta: '매매계약 후 소유권 이전 절차',
        sections: [
          {
            heading: '1. 소유권이전등기란?',
            content: `<p>소유권이전등기는 부동산(토지·건물)의 소유권이 매도인에서 매수인에게 이전될 때 이를 등기부에 공시하는 절차입니다. 우리 민법은 <strong>부동산 물권의 득실변경은 등기를 하여야 효력이 생긴다</strong>고 규정하고 있으므로(민법 제186조), 잔금을 납부했더라도 등기를 마치지 않으면 법률상 소유권자가 될 수 없습니다.</p>
            <p>소유권이전등기는 원칙적으로 매도인(등기의무자)과 매수인(등기권리자)이 공동으로 신청하여야 합니다(부동산등기법 제23조).</p>`
          },
          {
            heading: '2. 필요 서류',
            content: `<table class="doc-table"><thead><tr><th>구분</th><th>서류명</th><th>비고</th></tr></thead><tbody>
              <tr><td>공통</td><td>등기신청서</td><td>법원 양식 사용</td></tr>
              <tr><td>매도인 제출</td><td>부동산매도용 인감증명서</td><td>발급 후 3개월 이내</td></tr>
              <tr><td>매도인 제출</td><td>주민등록초본</td><td>주소 변동사항 포함</td></tr>
              <tr><td>매도인 제출</td><td>등기권리증(등기필증)</td><td>분실 시 확인조서 대체</td></tr>
              <tr><td>매수인 제출</td><td>주민등록초본(법인은 법인등기사항증명서)</td><td>—</td></tr>
              <tr><td>공통</td><td>매매계약서 사본</td><td>거래신고필증 또는 검인</td></tr>
              <tr><td>공통</td><td>부동산거래계약신고필증</td><td>6억원 이상 자금조달계획서</td></tr>
              <tr><td>공통</td><td>토지대장·건축물대장</td><td>최근 발급본</td></tr>
            </tbody></table>
            <div class="warn-box"><div class="warn-title">⚠️ 주의사항</div><p>인감증명서는 <strong>부동산매도용</strong>으로 발급받아야 하며, 일반 인감증명서는 사용할 수 없습니다. 발급일로부터 3개월 이내의 것이어야 합니다.</p></div>`
          },
          {
            heading: '3. 등기 절차',
            content: `<ol class="step-list">
              <li><strong>매매계약 체결</strong> – 매도인·매수인 간 매매계약서 작성</li>
              <li><strong>부동산거래신고</strong> – 계약체결일로부터 30일 이내 거래신고</li>
              <li><strong>취득세 납부</strong> – 잔금지급일로부터 60일 이내 신고·납부</li>
              <li><strong>등기신청 서류 준비</strong> – 위 필요서류 일체 준비</li>
              <li><strong>등기 신청</strong> – 부동산 소재지 관할 등기소에 신청</li>
              <li><strong>등기완료</strong> – 등기권리증(등기필정보) 수령</li>
            </ol>`
          },
          {
            heading: '4. 세금 및 비용',
            content: `<div class="info-box"><div class="info-title">💰 취득세율 (2024년 기준)</div>
              <ul><li>주택(6억 이하): 취득가액의 <strong>1%</strong></li>
              <li>주택(6억 초과 ~ 9억 이하): 취득가액의 <strong>1~3%</strong> (단계별 적용)</li>
              <li>주택(9억 초과): 취득가액의 <strong>3%</strong></li>
              <li>농지: <strong>3%</strong></li>
              <li>그 외 부동산: <strong>4%</strong></li>
              </ul></div>
            <p>이 외에 지방교육세(취득세의 10~20%), 농어촌특별세(취득세의 10% 또는 면제), 등기신청수수료(등록면허세 등)가 별도로 발생합니다.</p>`
          }
        ],
        laws: [
          { name: '민법 제186조', desc: '부동산물권변동의 효력(등기의 효력)' },
          { name: '부동산등기법 제23조', desc: '공동신청주의' },
          { name: '지방세법 제10조', desc: '취득세 과세표준 및 세율' },
          { name: '부동산 거래신고 등에 관한 법률 제3조', desc: '거래신고 의무' },
        ],
        forms: [
          { name: '소유권이전등기 신청서', size: 'PDF' },
          { name: '취득세신고서', size: 'PDF' },
        ]
      },
      {
        id: 'rt-2', title: '증여에 의한 소유권이전등기',
        meta: '무상이전 시 절차 및 세금',
        sections: [
          {
            heading: '1. 증여등기 개요',
            content: `<p>증여란 당사자 일방(증여자)이 대가 없이 재산을 상대방(수증자)에게 주는 의사표시를 하고 상대방이 이를 승낙함으로써 성립하는 계약입니다(민법 제554조). 부동산을 증여받은 경우에도 소유권이전등기를 마쳐야 법률상 소유권자가 됩니다.</p>
            <p>매매와 달리 <strong>부동산거래신고 의무가 없고</strong>, 취득세율이 다르게 적용되며, 증여세가 별도로 부과될 수 있으므로 세금 관계를 사전에 확인하는 것이 중요합니다.</p>`
          },
          {
            heading: '2. 필요 서류',
            content: `<ul><li>증여계약서(또는 증여의향서)</li><li>증여자의 인감증명서(3개월 이내) 및 인감도장</li><li>증여자의 주민등록초본</li><li>수증자의 주민등록초본</li><li>등기권리증(증여자 보유분)</li><li>토지대장 또는 건축물대장</li><li>취득세 영수필확인서</li></ul>`
          },
          {
            heading: '3. 세금',
            content: `<div class="info-box"><div class="info-title">💰 증여 관련 세금</div>
              <ul>
              <li><strong>취득세:</strong> 증여에 의한 취득세율은 <strong>3.5%</strong>(주택은 12% 적용될 수 있음, 1가구 1주택 여부 확인 필요)</li>
              <li><strong>증여세:</strong> 증여재산 공제(배우자 6억원, 직계존비속 5천만원 등) 초과분에 과세</li>
              <li><strong>양도소득세:</strong> 증여자에게는 원칙적으로 발생하지 않음</li>
              </ul></div>
            <div class="warn-box"><div class="warn-title">⚠️ 절세 주의</div><p>부담부증여(채무를 함께 증여하는 경우)는 채무에 해당하는 부분에 대해 증여자에게 양도소득세가 부과될 수 있으니 반드시 전문가와 상담하시기 바랍니다.</p></div>`
          }
        ],
        laws: [
          { name: '민법 제554조', desc: '증여의 의의' },
          { name: '상속세 및 증여세법 제53조', desc: '증여재산 공제' },
          { name: '지방세법 제11조', desc: '증여로 인한 취득세율' },
        ],
        forms: [
          { name: '소유권이전등기 신청서(증여)', size: 'PDF' },
          { name: '증여계약서 양식', size: 'DOCX' },
        ]
      },
      {
        id: 'rt-3', title: '근저당권설정등기',
        meta: '금융기관 대출 시 담보 설정',
        sections: [
          {
            heading: '1. 근저당권이란?',
            content: `<p>근저당권은 채무자 또는 물상보증인이 담보로 제공한 부동산에 대하여, 장래의 불특정 채권을 일정한 한도(채권최고액) 내에서 담보하는 물권입니다(민법 제357조). 일반 저당권과 달리 채권이 일부 변제되어도 등기를 말소하지 않고 계속 이용할 수 있다는 장점이 있습니다.</p>
            <p>금융기관 대출 시 가장 많이 사용되는 담보권 설정 방법으로, <strong>채권최고액은 실제 대출금의 110~130%</strong>로 설정하는 것이 일반적입니다.</p>`
          },
          {
            heading: '2. 필요 서류',
            content: `<ul>
              <li>근저당권설정계약서</li>
              <li>설정자(소유자)의 인감증명서 및 인감도장</li>
              <li>설정자의 주민등록초본</li>
              <li>등기권리증(소유자 보유분)</li>
              <li>토지대장 및 건축물대장</li>
              <li>등기신청수수료 납부영수증</li>
            </ul>`
          },
          {
            heading: '3. 등록면허세',
            content: `<p>근저당권설정등기 시에는 <strong>채권최고액의 0.2%</strong>에 해당하는 등록면허세와 지방교육세(등록면허세의 20%)가 부과됩니다.</p>
            <div class="info-box"><div class="info-title">📌 예시 계산</div><p>채권최고액 1억원 설정 시: 등록면허세 200,000원 + 지방교육세 40,000원 = 합계 240,000원</p></div>`
          }
        ],
        laws: [
          { name: '민법 제357조', desc: '근저당권의 의의' },
          { name: '부동산등기법 제75조', desc: '근저당권설정등기' },
          { name: '지방세법 제28조', desc: '등록면허세' },
        ],
        forms: [{ name: '근저당권설정등기 신청서', size: 'PDF' }]
      },
      {
        id: 'rt-4', title: '전세권설정등기',
        meta: '전세계약 보호를 위한 등기',
        sections: [
          {
            heading: '1. 전세권의 의의',
            content: `<p>전세권은 전세금을 지급하고 타인의 부동산을 점유하여 그 부동산의 용도에 좇아 사용·수익하며, 그 부동산 전부에 대하여 후순위권리자나 기타 채권자보다 전세금의 우선변제를 받을 권리입니다(민법 제303조).</p>
            <p>주택임대차보호법상의 임차권과 달리 <strong>물권으로서 제3자에게도 대항력이 강하며</strong>, 전세금 반환 미이행 시 부동산 경매를 직접 청구할 수 있다는 장점이 있습니다.</p>`
          },
          {
            heading: '2. 전세권 vs 임차권',
            content: `<table class="doc-table"><thead><tr><th>구분</th><th>전세권(등기)</th><th>확정일자 임차권</th></tr></thead><tbody>
              <tr><td>성질</td><td>물권</td><td>채권</td></tr>
              <tr><td>대항력</td><td>강함(등기 순서)</td><td>확정일자 기준</td></tr>
              <tr><td>경매신청</td><td>직접 가능</td><td>소송 후 가능</td></tr>
              <tr><td>비용</td><td>등록세 부담</td><td>확정일자 600원</td></tr>
              <tr><td>대상</td><td>모든 부동산</td><td>주택/상가 한정</td></tr>
            </tbody></table>`
          }
        ],
        laws: [
          { name: '민법 제303조', desc: '전세권의 내용' },
          { name: '민법 제318조', desc: '전세권의 경매청구권' },
          { name: '주택임대차보호법 제3조의2', desc: '확정일자에 의한 우선변제권' },
        ],
        forms: [{ name: '전세권설정등기 신청서', size: 'PDF' }]
      },
      {
        id: 'rt-5', title: '말소등기',
        meta: '근저당권·전세권 등 등기 말소',
        sections: [
          {
            heading: '1. 말소등기란?',
            content: `<p>말소등기는 기존에 마쳐진 등기사항이 실체관계와 일치하지 않게 되었을 때 이를 삭제하는 등기입니다. 대출금을 모두 상환하여 근저당권이 소멸한 경우, 전세기간이 만료된 경우 등에 말소등기를 신청합니다.</p>`
          },
          {
            heading: '2. 필요 서류 (근저당 말소)',
            content: `<ul><li>등기신청서</li><li>말소등기의무자(금융기관 등)의 말소동의서</li><li>금융기관 법인인감증명서 및 등기사항증명서</li><li>해지증서 또는 변제증서</li><li>등기필정보(근저당권자 보유분)</li></ul>`
          }
        ],
        laws: [
          { name: '부동산등기법 제57조', desc: '말소등기 신청' },
          { name: '민법 제369조', desc: '저당권 소멸' },
        ],
        forms: [{ name: '말소등기 신청서', size: 'PDF' }]
      }
    ]
  },

  /* ---- 법인등기 ---- */
  corporation: {
    label: '법인등기',
    topics: [
      {
        id: 'co-1', title: '주식회사 설립등기',
        meta: '법인 설립을 위한 전 과정',
        sections: [
          {
            heading: '1. 주식회사 설립 방법',
            content: `<p>주식회사 설립 방법은 <strong>발기설립</strong>과 <strong>모집설립</strong> 두 가지가 있습니다. 현실적으로 대부분의 소규모 법인은 발기인이 설립 시 발행하는 모든 주식을 인수하는 <strong>발기설립</strong> 방법으로 설립됩니다.</p>
            <p>2009년 상법 개정으로 최저자본금 제도가 폐지되어 <strong>자본금 100원</strong>으로도 설립이 가능합니다.</p>`
          },
          {
            heading: '2. 설립 절차',
            content: `<ol class="step-list">
              <li><strong>상호 결정</strong> – 동일 관할구역 내 동종 영업 법인과 동일 상호 불가. 상호 사전예약 가능</li>
              <li><strong>정관 작성 및 공증</strong> – 절대적 기재사항(목적, 상호, 발행예정주식총수, 1주의 금액, 설립 시 발행하는 주식총수, 본점 소재지, 공고방법, 발기인 성명·주민등록번호·주소) 필수 기재</li>
              <li><strong>주식 인수 및 납입</strong> – 발기인이 주식 인수 후 자본금 납입 (은행 잔고증명서 취득)</li>
              <li><strong>이사·감사 선임</strong> – 발기인 전원의 동의로 선임</li>
              <li><strong>설립등기 신청</strong> – 납입일로부터 2주 이내에 본점 소재지 관할 법원에 신청</li>
            </ol>`
          },
          {
            heading: '3. 필요 서류',
            content: `<ul>
              <li>법인설립등기신청서</li>
              <li>정관(공증인 공증본)</li>
              <li>주식인수증(발기인 전원)</li>
              <li>주금납입보관증명서(은행 발급)</li>
              <li>이사회의사록 또는 창립총회의사록</li>
              <li>대표이사 선임동의서</li>
              <li>취임동의서(이사, 대표이사, 감사)</li>
              <li>각 이사·감사의 인감증명서</li>
              <li>인감신고서</li>
            </ul>`
          },
          {
            heading: '4. 등록면허세',
            content: `<p>납입자본금의 <strong>0.4%</strong>(최소 112,500원)이며, 서울특별시 소재 법인은 <strong>3배 중과세(1.2%)</strong>가 적용됩니다.</p>
            <div class="info-box"><div class="info-title">📌 예시</div><p>자본금 1억원, 서울 소재: 등록면허세 1,200,000원 + 지방교육세 240,000원 + 기타 = 약 150만원 내외</p></div>`
          }
        ],
        laws: [
          { name: '상법 제288조 ~ 제328조', desc: '주식회사 설립에 관한 규정' },
          { name: '상법 제317조', desc: '설립등기 사항' },
          { name: '지방세법 제28조', desc: '등록면허세' },
        ],
        forms: [
          { name: '법인설립등기신청서', size: 'PDF' },
          { name: '정관 표준양식', size: 'DOCX' },
        ]
      },
      {
        id: 'co-2', title: '임원 변경등기',
        meta: '이사·감사·대표이사 변경',
        sections: [
          {
            heading: '1. 임원 변경등기 개요',
            content: `<p>이사, 감사, 대표이사의 취임·사임·중임·해임 등이 있을 때에는 변경사실이 발생한 날로부터 <strong>2주 이내</strong>에 변경등기를 신청하여야 합니다. 2주를 초과하는 경우 과태료가 부과될 수 있습니다.</p>`
          },
          {
            heading: '2. 필요 서류',
            content: `<ul>
              <li>변경등기신청서</li>
              <li>주주총회의사록 또는 이사회의사록 (변경사항에 따라)</li>
              <li>신규 취임 임원의 취임동의서 및 인감증명서</li>
              <li>퇴임 임원의 사임서 (사임의 경우)</li>
              <li>법인인감도장 및 인감증명서</li>
            </ul>`
          }
        ],
        laws: [
          { name: '상법 제383조', desc: '이사의 임기' },
          { name: '상법 제317조', desc: '변경등기 기간' },
        ],
        forms: [{ name: '임원변경등기신청서', size: 'PDF' }]
      },
      {
        id: 'co-3', title: '본점이전등기',
        meta: '법인 주소 변경 시 절차',
        sections: [
          {
            heading: '1. 본점이전등기',
            content: `<p>법인의 본점(주사무소)을 다른 곳으로 이전할 때에는 이전한 날로부터 <strong>2주 이내</strong>(관할 법원이 같은 경우) 또는 새 주소지 관할 법원에 신규 등기를 해야 합니다. 관할 법원이 달라지는 경우에는 구 소재지와 신 소재지 모두에 등기를 신청해야 합니다.</p>`
          },
          {
            heading: '2. 필요 서류',
            content: `<ul>
              <li>이전등기신청서</li>
              <li>이사회의사록(이전 결의)</li>
              <li>법인인감증명서 및 인감도장</li>
              <li>건물임대차계약서 또는 소유권증명서류</li>
            </ul>`
          }
        ],
        laws: [
          { name: '상법 제182조', desc: '본점이전의 등기' },
          { name: '상법 제317조', desc: '변경등기 기간' },
        ],
        forms: [{ name: '본점이전등기신청서', size: 'PDF' }]
      }
    ]
  },

  /* ---- 민사소송 ---- */
  lawsuit: {
    label: '민사소송',
    topics: [
      {
        id: 'ls-1', title: '소장 작성 및 제출',
        meta: '민사소송 개시를 위한 소장',
        sections: [
          {
            heading: '1. 소장이란?',
            content: `<p>소장(訴狀)은 민사소송을 개시하기 위해 원고가 법원에 제출하는 최초의 소송서류입니다. 소장에는 당사자(원고·피고), 청구취지, 청구원인을 명시하여야 하며(민사소송법 제249조), 법원의 관할과 인지액·송달료를 납부하여야 합니다.</p>`
          },
          {
            heading: '2. 소장의 구성',
            content: `<ul>
              <li><strong>당사자</strong>: 원고·피고의 성명(상호), 주소, 연락처 등</li>
              <li><strong>청구취지</strong>: 원고가 구하는 판결의 내용(예: "피고는 원고에게 금 10,000,000원을 지급하라")</li>
              <li><strong>청구원인</strong>: 소를 제기하게 된 사실관계 및 법적 근거</li>
              <li><strong>입증방법</strong>: 증거목록(갑 제1호증 등)</li>
            </ul>`
          },
          {
            heading: '3. 관할법원 및 인지액',
            content: `<div class="info-box"><div class="info-title">📌 관할법원</div>
              <ul>
              <li>소액사건(3,000만원 이하): 피고 주소지 관할 지방법원(시·군법원)</li>
              <li>3,000만원 초과 ~ 1억원 이하: 피고 주소지 지방법원 단독부</li>
              <li>1억원 초과: 피고 주소지 지방법원 합의부 또는 고등법원</li>
              </ul></div>
            <p>인지액은 소가(訴價)에 따라 산정되며, 소가의 약 0.5~1% 수준입니다. 납부는 전자소송 사이트 또는 법원 내 납부창구를 이용합니다.</p>`
          }
        ],
        laws: [
          { name: '민사소송법 제249조', desc: '소장의 기재사항' },
          { name: '민사소송법 제2조', desc: '보통재판적(피고 주소지)' },
          { name: '민사소송 등 인지법', desc: '인지액 산정 기준' },
        ],
        forms: [{ name: '소장 양식(금전청구)', size: 'DOCX' }]
      },
      {
        id: 'ls-2', title: '지급명령 신청',
        meta: '간이·신속한 금전청구 절차',
        sections: [
          {
            heading: '1. 지급명령이란?',
            content: `<p>지급명령은 금전 기타 대체물이나 유가증권의 일정 수량의 지급을 목적으로 하는 청구에 대하여 채권자의 일방적 신청만으로 법원이 신속하게 발부하는 지급명령입니다(민사소송법 제462조). 채무자가 이의하지 않으면 확정판결과 같은 효력을 가집니다.</p>
            <div class="info-box"><div class="info-title">✅ 장점</div><ul><li>인지액이 소액(일반 소송의 1/10)</li><li>채무자가 이의하지 않으면 강제집행 가능</li><li>전자소송으로 간편하게 신청 가능</li></ul></div>`
          },
          {
            heading: '2. 이의신청 처리',
            content: `<p>채무자가 지급명령을 받은 날로부터 <strong>2주 이내</strong>에 이의신청을 하면, 소송 절차로 이행됩니다. 이 경우 추가 인지액을 납부하고 일반 민사소송으로 진행됩니다.</p>`
          }
        ],
        laws: [
          { name: '민사소송법 제462조', desc: '지급명령 신청' },
          { name: '민사소송법 제469조', desc: '이의신청' },
        ],
        forms: [{ name: '지급명령신청서', size: 'DOCX' }]
      }
    ]
  },

  /* ---- 보전처분 ---- */
  preservation: {
    label: '보전처분',
    topics: [
      {
        id: 'pv-1', title: '가압류 신청',
        meta: '채무자 재산 보전조치',
        sections: [
          {
            heading: '1. 가압류란?',
            content: `<p>가압류는 금전채권이나 금전으로 환산할 수 있는 채권의 집행을 보전하기 위하여 채무자의 재산을 미리 압류하여 그 처분을 금지하는 보전처분입니다(민사집행법 제276조). 소송 전 또는 소송 중에 채무자가 재산을 처분하는 것을 방지하기 위해 활용합니다.</p>`
          },
          {
            heading: '2. 담보 제공',
            content: `<p>가압류를 신청하면 법원은 통상 채권금액의 <strong>10~30%</strong>에 해당하는 담보를 제공하도록 명령합니다. 담보는 현금 공탁 또는 보증보험증권으로 제공할 수 있습니다.</p>`
          }
        ],
        laws: [
          { name: '민사집행법 제276조', desc: '가압류의 의의' },
          { name: '민사집행법 제279조', desc: '가압류의 방법' },
        ],
        forms: [{ name: '부동산가압류신청서', size: 'DOCX' }, { name: '채권가압류신청서', size: 'DOCX' }]
      },
      {
        id: 'pv-2', title: '가처분 신청',
        meta: '권리관계 보전을 위한 임시 처분',
        sections: [
          {
            heading: '1. 가처분이란?',
            content: `<p>가처분은 금전채권 이외의 특정물에 대한 청구권이나 권리관계를 보전하기 위하여 현상을 변경하거나 임시의 지위를 정하는 보전처분입니다(민사집행법 제300조). 계쟁물에 관한 가처분과 임시의 지위를 정하기 위한 가처분으로 나뉩니다.</p>`
          },
          {
            heading: '2. 가처분의 종류',
            content: `<table class="doc-table"><thead><tr><th>종류</th><th>내용</th><th>예시</th></tr></thead><tbody>
              <tr><td>계쟁물 가처분</td><td>분쟁 대상 물건의 현상 변경 금지</td><td>부동산 처분금지가처분</td></tr>
              <tr><td>임시의 지위를 정하는 가처분</td><td>다툼 있는 권리관계에 대한 임시 규율</td><td>직위해제 효력정지 가처분, 공사중지 가처분</td></tr>
            </tbody></table>`
          }
        ],
        laws: [
          { name: '민사집행법 제300조', desc: '가처분의 요건' },
          { name: '민사집행법 제301조', desc: '가처분의 방법' },
        ],
        forms: [{ name: '부동산처분금지가처분신청서', size: 'DOCX' }]
      }
    ]
  },

  /* ---- 강제집행 ---- */
  enforcement: {
    label: '강제집행',
    get topics() { return typeof ENFORCEMENT_TOPICS !== 'undefined' ? ENFORCEMENT_TOPICS : []; }
  },

    /* ---- 상속 ---- */
  inheritance: {
    label: '상속',
    topics: [
      {
        id: 'in-01', title: '상속 개관',
        meta: '상속이 시작됐다면 무엇을, 언제까지, 어떤 순서로 해야 하는지 — 전체 흐름을 한 페이지에서 안내합니다.',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ═══ 헤더 ═══════════════════════════════════════════ -->


<!-- ═══ 0. 이런 분께 필요합니다 ════════════════════════════ -->
<section>
<div class="who-needs">
<h2>✓ 이런 분께 필요합니다</h2>
<ul class="inh-checklist">
<li>가족이 최근 사망하여 상속 절차를 처음 시작해야 하는 분</li>
<li>부동산·예금·자동차 등 고인의 재산이 남아 있는 분</li>
<li>빚이 있는지 없는지 아직 파악하지 못한 분</li>
<li>상속인이 여러 명이라 재산을 어떻게 나눌지 막막한 분</li>
<li>유언장이 있다고 들었으나 내용을 아직 확인하지 못한 분</li>
<li>상속 절차 전반의 흐름을 미리 파악하고 싶은 분</li>
</ul>
</div>
</section>
<!-- ═══ 1. 핵심 요약 ══════════════════════════════════════ -->
<section>
<div class="inh-section-title">
<span class="num">SECTION 01</span>
    핵심 요약
  </div>
<div class="summary-box">
<p class="label">핵심 요약</p>
<p>
      상속은 사람이 사망하는 순간 자동으로 시작됩니다. 고인(피상속인)의 재산과 채무가 모두 상속인에게 넘어오며, 이를 그대로 받을지 · 제한적으로 받을지 · 아예 포기할지 결정할 수 있는 기간은 <strong>상속이 시작됐음을 안 날로부터 3개월</strong>입니다 <span class="law-ref">민법 제1019조①</span>. 아무런 신청을 하지 않으면 채무까지 모두 떠안는 '단순승인'으로 확정되므로, 빚이 있는지 없는지와 무관하게 이 흐름을 빠르게 파악하는 것이 중요합니다.
    </p>
</div>
</section>
<!-- ═══ 2. 상세 내용 ═══════════════════════════════════════ -->
<section>
<div class="inh-section-title">
<span class="num">SECTION 02</span>
    상속 전체 흐름 — 개시부터 등기까지
  </div>
<!-- 흐름도 -->
<div class="flow-wrap">
<div class="flow-row">
<div class="flow-step hl">
<div class="step-num">STEP 1</div>
<div class="step-name">상속 개시</div>
<div class="step-law">민법 제997조</div>
</div>
<div class="flow-arrow">›</div>
<div class="flow-step">
<div class="step-num">STEP 2</div>
<div class="step-name">상속인·재산 조사</div>
<div class="step-law">민법 제1019조②</div>
</div>
<div class="flow-arrow">›</div>
<div class="flow-step">
<div class="step-num">STEP 3</div>
<div class="step-name">승인·포기 결정</div>
<div class="step-law">⚡ 3개월 이내</div>
</div>
<div class="flow-arrow">›</div>
<div class="flow-step">
<div class="step-num">STEP 4</div>
<div class="step-name">재산 분할</div>
<div class="step-law">협의 또는 심판</div>
</div>
<div class="flow-arrow">›</div>
<div class="flow-step">
<div class="step-num">STEP 5</div>
<div class="step-name">상속등기</div>
<div class="step-law">민법 제187조</div>
</div>
</div>
</div>
<!-- 2-1 기본 개념 -->
<h3>2-1. 기본 개념과 법적 근거</h3>
<p>
    상속이란 사람이 사망함으로써 그의 재산상 권리와 의무 전부가 일정한 범위의 친족(상속인)에게 포괄적으로 이전되는 것입니다.
    <span class="law-ref">민법 제1005조</span>는 "상속인은 상속이 개시된 때로부터 피상속인의 재산에 관한 포괄적 권리의무를 승계한다"고 규정하며, 단 피상속인의 일신에 전속한 것(예: 국민연금 수급권, 부양청구권 등)은 제외됩니다.
  </p>
<p>
    상속은 <span class="law-ref">민법 제997조</span>에 따라 피상속인의 <strong>사망</strong>으로 개시됩니다. 실종선고(<span class="law-ref">민법 제28조</span>)의 경우 실종기간 만료 시를 사망으로 간주하여 상속이 개시됩니다. 사망과 동시에 상속인은 별도의 신청 없이 법률상 당연히 피상속인의 재산을 취득하나, 부동산은 등기를 마치기 전까지 제3자에게 처분·주장할 수 없습니다(<span class="law-ref">민법 제187조</span>).
  </p>
<!-- 2-2 단계별 -->
<h3>2-2. 단계별 상세 안내</h3>
<table>
<thead>
<tr>
<th style="width:9%">단계</th>
<th style="width:20%">해야 할 일</th>
<th style="width:40%">주요 내용</th>
<th style="width:31%">법령 근거</th>
</tr>
</thead>
<tbody>
<tr>
<td class="td-key">STEP 1</td>
<td><span class="tag tag-b">상속 개시 확인</span></td>
<td>피상속인 사망신고 후 기본증명서·가족관계증명서 발급. 상속개시일(사망일) 확정</td>
<td><span class="law-ref">민법 제997조</span><br/>가족관계등록법 제85조</td>
</tr>
<tr>
<td class="td-key">STEP 2</td>
<td><span class="tag tag-g">상속인 확정</span></td>
<td>가족관계증명서·제적등본으로 법정 상속인 범위 파악. 결격·대습상속 여부 확인</td>
<td><span class="law-ref">민법 제1000조</span> ~ <span class="law-ref">제1004조</span></td>
</tr>
<tr>
<td class="td-key">STEP 3</td>
<td><span class="tag tag-g">재산 조사</span></td>
<td>금감원 상속인 금융거래 조회서비스, 부동산 등기부 열람, 안심상속 원스톱 서비스 활용</td>
<td><span class="law-ref">민법 제1019조②</span></td>
</tr>
<tr>
<td class="td-key">STEP 4</td>
<td><span class="tag tag-r">⚡ 승인·포기 결정</span></td>
<td>단순승인(채무 포함 전부 승계) / 한정승인(재산 한도 내) / 상속포기(전부 거부) 중 선택. <strong>상속개시 있음을 안 날부터 3개월 이내 법원 신고 필수</strong></td>
<td><span class="law-ref">민법 제1019조①</span><br/><span class="law-ref">민법 제1030조</span><br/><span class="law-ref">민법 제1041조</span></td>
</tr>
<tr>
<td class="td-key">STEP 5</td>
<td><span class="tag tag-y">재산 분할</span></td>
<td>상속인 전원 협의 후 분할협의서 작성. 협의 불성립 시 가정법원에 조정·심판 신청</td>
<td><span class="law-ref">민법 제1013조</span></td>
</tr>
<tr>
<td class="td-key">STEP 6</td>
<td><span class="tag tag-b">상속등기</span></td>
<td>부동산: 상속을 원인으로 한 소유권이전등기 신청. 미등기 부동산: 상속인 명의 보존등기</td>
<td><span class="law-ref">민법 제187조</span><br/>부동산등기법 제23조③</td>
</tr>
</tbody>
</table>
<!-- 승인·포기 비교 표 -->
<h3>승인·포기 세 가지 선택지 비교</h3>
<table>
<thead>
<tr>
<th>구분</th>
<th>단순승인</th>
<th>한정승인</th>
<th>상속포기</th>
</tr>
</thead>
<tbody>
<tr>
<td class="td-key">의미</td>
<td>재산·채무 전부 무제한 승계</td>
<td>상속받은 재산 한도 내에서만 채무 변제</td>
<td>상속 자체를 전면 거부</td>
</tr>
<tr>
<td class="td-key">신청 방법</td>
<td>별도 신청 불필요<br/>(3개월 내 아무것도 안 하면 자동 성립)</td>
<td>가정법원에 한정승인 신고서 제출</td>
<td>가정법원에 상속포기 신고서 제출</td>
</tr>
<tr>
<td class="td-key">적합한 경우</td>
<td>재산이 채무보다 확실히 많을 때</td>
<td>재산·채무 규모가 불확실할 때</td>
<td>채무가 재산보다 확실히 많을 때</td>
</tr>
<tr>
<td class="td-key">주의사항</td>
<td>숨겨진 채무 발견 시 본인 재산으로도 변제 의무</td>
<td>청산 절차(공고·변제) 이행 의무 발생</td>
<td>포기자의 다음 순위에 채무가 이전될 수 있음</td>
</tr>
</tbody>
</table>
<!-- 2-3 사례 -->
<h3>2-3. 실제 사례</h3>
<div class="case-box">
<p class="c-label">📋 사례 1 — 재산과 채무가 모두 있는 경우</p>
<p><strong>상황:</strong> 아버지가 사망하셨습니다. 아파트(시가 3억 원) 한 채와 금융권 대출 1억 5,000만 원이 있고, 상속인은 어머니·아들·딸 3명입니다.</p>
<p><strong>판단:</strong> 재산이 채무보다 크므로 단순승인 후 상속 절차를 진행할 수 있습니다. 다만 아버지 명의의 다른 채무(카드론, 연대보증 등)가 없는지 반드시 금융거래 조회를 통해 확인해야 합니다. 재산분할은 어머니 3/7, 아들 2/7, 딸 2/7의 법정상속분 또는 상속인들의 협의로 다르게 정할 수 있습니다.</p>
</div>
<div class="case-box">
<p class="c-label">📋 사례 2 — 채무만 있고 재산이 불분명한 경우</p>
<p><strong>상황:</strong> 어머니가 갑작스럽게 돌아가셨습니다. 집은 없고 금융 채무가 있다고 들었으나 정확한 규모를 모릅니다. 자녀 2명이 상속인입니다.</p>
<p><strong>판단:</strong> 채무 규모가 불확실하므로 <strong>3개월 이내에 한정승인 또는 상속포기 신고를 검토</strong>해야 합니다. 아무런 조치 없이 3개월이 지나면 채무까지 전부 상속받는 단순승인이 되어, 자녀의 개인 재산으로도 채무를 변제해야 할 수 있습니다.</p>
</div>
</section>
<!-- ═══ 5. Q&A ═════════════════════════════════════════ -->
<section>
<div class="inh-section-title">
<span class="num">SECTION 03</span>
    자주 묻는 질문 (Q&amp;A)
  </div>
<div class="qna-item">
<div class="qna-q"><span class="qm">Q</span> 상속이 개시됐는지 몰랐습니다. 3개월이 지났는데 지금이라도 포기가 가능한가요?</div>
<div class="qna-a">
      민법 제1019조 제1항의 3개월 숙려기간은 '상속 개시가 있었음을 안 날'로부터 기산합니다. 단순히 피상속인이 사망한 날이 아니라, 본인이 상속인이 된 사실까지 알게 된 날이 기산점입니다. 먼 친척이 사망하여 선순위 상속인들이 모두 포기한 결과 본인이 상속인이 되었다면, 그 사실을 안 날부터 3개월이 기산됩니다(대법원 2006. 2. 10. 선고 2004다33865 판결). 다만 이를 적용받으려면 자신이 상속인이 된 사실을 알 수 없었던 특별한 사정을 소명해야 하므로, 법무사와의 상담을 통해 가능성을 먼저 확인하시기 바랍니다.
      <p class="disc">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="qm">Q</span> 부동산을 상속받았는데 등기를 꼭 해야 하나요? 하지 않으면 어떻게 되나요?</div>
<div class="qna-a">
      민법 제187조에 따라 상속으로 인한 부동산 취득은 등기 없이도 법률상 당연히 이루어집니다. 그러나 등기를 마치지 않으면 이를 제3자에게 주장할 수 없고, 매각·담보 제공 등 처분 행위도 불가능합니다. 또한 등기 지연 시 취득세 납부기한을 넘겨 가산세가 부과될 수 있습니다(지방세법 제20조). 상속인 중 일부가 추후 사망하거나 분쟁이 발생하면 절차가 훨씬 복잡해지므로, 조속히 처리하는 것이 좋습니다.
      <p class="disc">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="qm">Q</span> ⚡ 상속포기를 하면 나의 자녀에게도 채무가 넘어가나요?</div>
<div class="qna-a">
      상속을 포기한 경우 포기자는 처음부터 상속인이 아니었던 것으로 봅니다(민법 제1042조). 포기자의 직계비속(자녀)은 포기자를 대신하여 대습상속을 하지 않습니다. 따라서 자녀의 조부모가 사망하고 부모(1순위 상속인)가 포기하면, 자녀가 자동으로 상속인이 되지는 않습니다. 다만 피상속인의 직계비속이 모두 포기하면 그 다음 순위인 직계존속이나 형제자매로 채무가 넘어갑니다. 가족 전체가 채무를 피하려면 모든 순위의 상속인이 각각 포기 신고를 해야 합니다.
      <p class="disc">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="qm">Q</span> 유언장이 있으면 법정상속분과 관계없이 유언대로 나눠야 하나요?</div>
<div class="qna-a">
      원칙적으로 유효한 유언이 있으면 유언의 내용에 따라 재산이 분배됩니다(민법 제1073조). 그러나 유언으로도 침해할 수 없는 법정상속인의 최소 몫인 '유류분'이 있습니다(민법 제1112조). 배우자·직계비속의 유류분은 법정상속분의 2분의 1, 직계존속·형제자매는 3분의 1입니다. 유언이 유류분을 침해하면 해당 상속인은 유류분 반환을 청구할 수 있습니다(민법 제1115조). 또한 유언의 방식이 민법이 정한 요건을 갖추지 못하면 유언 자체가 무효가 될 수 있으므로, 유언장의 유효성 확인이 먼저입니다.
      <p class="disc">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="qm">Q</span> 상속인들끼리 합의가 되지 않으면 어떻게 하나요?</div>
<div class="qna-a">
      공동상속인들이 재산 분할에 합의하지 못하면, 가정법원에 '상속재산 분할 심판'을 청구할 수 있습니다(민법 제1013조 제2항). 법원은 상속재산의 종류·성질, 각 상속인의 생활 상황 등을 고려하여 현물분할·가격보상분할·경매 등의 방법으로 분할합니다. 심판 청구 전에 조정을 먼저 신청하는 방법도 있습니다. 합의가 전혀 되지 않으면 부동산은 공유 상태가 지속되어 처분이 어려워지므로, 가능한 한 빠른 시일 내에 전문가의 도움을 받아 절차를 진행하는 것이 좋습니다.
      <p class="disc">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="qm">Q</span> 상속 절차에 드는 비용은 어떻게 되나요?</div>
<div class="qna-a">
      상속 절차의 비용은 크게 세금(취득세, 상속세)과 법원 비용(인지대, 송달료), 등기 비용(등록면허세)으로 나뉩니다. 취득세는 부동산을 상속받을 경우 납부하며, 상속세는 상속재산 전체의 가액이 기준 이상일 때 과세됩니다. 법원에 한정승인·상속포기 신고를 하는 경우에는 인지대와 송달료가 발생합니다. 비용의 구체적인 금액은 상속재산의 종류·규모, 상속인 수에 따라 달라지므로 상담 시 함께 안내받으시기 바랍니다.
      <p class="disc">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
</div>
</div>
</section>
<!-- ═══ 3. 관련 판례 ══════════════════════════════════════ -->
<section>
<div class="inh-section-title">
<span class="num">SECTION 04</span>
    관련 판례
  </div>
<div class="ruling-box">
<p class="r-label">⚖ 판례 1 — 동시사망 추정과 대습상속</p>
<p class="case-num">대법원 2001. 3. 9. 선고 99다13157 판결</p>
<p>항공기 사고로 피상속인과 그 직계비속이 동시에 사망한 것으로 추정되는 경우에도 대습상속이 인정됩니다. 대법원은 민법 제1001조의 '상속개시 전 사망'에는 '상속개시와 동시에 사망한 것으로 추정되는 경우'도 포함된다고 판시하였습니다.</p>
<p class="effect">▸ <strong>실무 영향:</strong> 교통사고 등으로 부모·자녀가 함께 사망한 경우, 손자녀 또는 그 배우자에게 대습상속이 인정되어 상속관계가 예상과 달리 설정될 수 있습니다. 상속 절차 시작 전 가족관계를 정확히 파악하는 것이 중요합니다.</p>
</div>
<div class="ruling-box">
<p class="r-label">⚖ 판례 2 — 생전 상속포기 약정의 효력 없음</p>
<p class="case-num">대법원 1998. 7. 24. 선고 98다9021 판결</p>
<p>피상속인 생전에 "나는 상속을 포기하겠다"고 약정하거나 각서를 작성하였더라도, 상속 개시 후 가정법원에 정해진 절차에 따라 신고하지 않으면 그 약정은 효력이 없습니다. 민법이 정한 절차와 방식을 따른 경우에만 상속포기의 효력이 발생합니다.</p>
<p class="effect">▸ <strong>실무 영향:</strong> 부모님 생전에 구두·서면으로 상속을 포기하겠다고 약속한 경우에도, 사망 후 법적 절차를 밟지 않으면 상속권이 유효하게 유지됩니다.</p>
</div>
<div class="ruling-box">
<p class="r-label">⚖ 판례 3 — 상속채무 초과 사실을 뒤늦게 안 경우 특별한정승인</p>
<p class="case-num">대법원 2006. 2. 10. 선고 2004다33865, 33872 판결</p>
<p>선순위 상속인들이 모두 포기하여 후순위 상속인(손자녀 등)이 상속인이 된 경우, 그 손자녀가 상속인이 되었다는 사실 자체를 알기 어려운 특별한 사정이 있습니다. 이때 3개월 숙려기간의 기산점은 피상속인의 사망일이 아닌, 본인이 상속인이 된 사실을 실제로 안 날입니다.</p>
<p class="effect">▸ <strong>실무 영향:</strong> 나도 모르는 사이에 상속인이 된 경우(선순위 포기 연쇄), 3개월이 지났어도 한정승인이 가능한 경우가 있습니다. 반드시 전문가 상담으로 가능성을 확인해야 합니다.</p>
</div>
</section>
<!-- ═══ 4. 주의사항 ═══════════════════════════════════════ -->
<section>
<div class="inh-section-title">
<span class="num">SECTION 05</span>
    주의사항
  </div>
<div class="warn-box">
<p class="wt">⚡ 3개월 숙려기간 — 가장 중요한 기간 제한</p>
<p>상속 개시가 있었음을 안 날로부터 <strong>3개월 이내</strong>에 단순승인·한정승인·상속포기를 결정해야 합니다 <span class="law-ref">민법 제1019조①</span>. 이 기간을 넘기면 채무를 포함한 모든 것을 그대로 승계하는 단순승인이 됩니다. 가정법원의 허가로 기간 연장이 가능하지만, 신청하지 않으면 자동 연장되지 않습니다.</p>
</div>
<div class="warn-box" style="margin-top:14px;">
<p class="wt">⚠️ 상속재산 처분 행위는 단순승인으로 간주</p>
<p>상속인이 상속재산을 임의로 처분하거나 소비하면, 한정승인·포기 신청 전이더라도 단순승인으로 법정 간주됩니다 <span class="law-ref">민법 제1026조①</span>. 예금 해지, 부동산 매각 등의 행위가 이에 해당할 수 있으므로, 승인·포기 결정 전에는 상속재산을 현상 유지해야 합니다.</p>
</div>
<div class="info-box" style="margin-top:14px;">
<p class="it">ℹ️ 채무를 뒤늦게 발견한 경우 — 특별한정승인</p>
<p>이미 단순승인한 후라도, 상속채무가 상속재산을 초과하는 사실을 <strong>중대한 과실 없이</strong> 숙려기간 내에 알지 못한 경우에는 그 사실을 안 날로부터 3개월 내에 한정승인을 신청할 수 있습니다 <span class="law-ref">민법 제1019조③</span>. 이를 '특별한정승인'이라 합니다.</p>
</div>
<div class="info-box" style="margin-top:14px;">
<p class="it">ℹ️ 상속포기 시 다음 순위 상속인에게 채무 이전 주의</p>
<p>상속을 포기하면 상속 지분이 다음 순위 상속인에게 이전됩니다. 예를 들어 자녀들이 모두 포기하면 피상속인의 부모나 형제자매가 상속인이 되어 채무를 떠안게 됩니다. 채무를 피하려면 모든 순위의 상속인이 각각 포기 신고를 해야 합니다.</p>
</div>
</section>
<!-- ═══ 6. 다음으로 확인할 내용 ══════════════════════════ -->
<section>
<hr class="divider"/>
<div class="inh-section-title" style="margin-top:52px;">
<span class="num">SECTION 06</span>
    다음으로 확인할 내용
  </div>
<div class="next-links">
<a class="next-link" href="상속_02_상속인순위.html">
<p class="nl-tag">STEP 2 · 상속인</p>
<p class="nl-title">상속인 순위 — 누가 얼마나 받는가</p>
<p class="nl-desc">법정상속분과 상속인 순위를 구체적으로 확인합니다.</p>
</a>
<a class="next-link" href="상속_05_포기vs한정승인.html">
<p class="nl-tag">STEP 4 · 승인·포기</p>
<p class="nl-title">포기 vs 한정승인 — 내 상황에 맞는 선택은</p>
<p class="nl-desc">빚이 걱정된다면 여기서 두 선택지를 비교하세요.</p>
</a>
<a class="next-link" href="상속_12_부동산등기개관.html">
<p class="nl-tag">STEP 6 · 등기</p>
<p class="nl-title">상속 부동산 등기 — 무엇을 언제까지</p>
<p class="nl-desc">등기를 해야 하는 시기와 이유를 안내합니다.</p>
</a>
</div>
</section>
<!-- ═══ 7. CTA 박스 ══════════════════════════════════════ -->

<!-- ═══ 8. 면책 문구 ══════════════════════════════════════ -->`
          }
        ],
        laws: [
          { name: '민법 제1019조①', desc: '' },
          { name: '민법 제1005조', desc: '' },
          { name: '민법 제997조', desc: '' },
          { name: '민법 제28조', desc: '' },
          { name: '민법 제187조', desc: '' },
          { name: '민법 제1000조', desc: '' }
        ],
        forms: []
      },
      {
        id: 'in-02', title: '상속인 순위',
        meta: '법정상속인 순위·상속분 · 배우자 특별규정 · 대습상속 완전 정리',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ════════════════════════════════════════
       0. 이런 분께 필요합니다
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 0</span> 이런 분께 필요합니다</h2>
<div class="inh-checklist">
<ul>
<li>가족이 돌아가셨는데 법적으로 누가 상속인인지 확인하고 싶은 분</li>
<li>재혼·이혼 등 복잡한 가족관계에서 상속인 범위가 궁금한 분</li>
<li>배우자와 자녀가 함께 있을 때 각자 얼마를 받는지 알고 싶은 분</li>
<li>먼저 사망한 자녀 대신 손자녀가 상속받을 수 있는지 확인하고 싶은 분</li>
<li>상속인이 재산을 포기했을 때 그 몫이 어떻게 되는지 궁금한 분</li>
<li>상속인으로서 자신의 권리를 정확히 파악하고 싶은 분</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       1. 핵심 요약
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 1</span> 핵심 요약</h2>
<div class="summary-box">
<div class="label">🔑 이것만 기억하세요</div>
<ul>
<li>민법은 혈족을 4개 순위로 나누고, 앞 순위가 있으면 뒷 순위는 상속받지 못합니다.</li>
<li>배우자는 독립된 순위 없이 1·2순위와 공동상속하며, 없으면 단독상속합니다.</li>
<li>배우자는 같은 순위 상속인 각자의 몫에 50%를 더 받습니다(5할 가산).</li>
<li>고의로 피상속인을 해친 자 등은 상속결격으로 처음부터 상속인이 될 수 없습니다.</li>
<li>상속인이 될 자가 먼저 사망·결격된 경우, 그 직계비속·배우자가 대신 상속합니다(대습상속).</li>
<li>상속인이 포기하면 그 몫은 뒷 순위 상속인에게 돌아가며, 손자녀에게 대습상속되지 않습니다.</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       2. 상세 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 2</span> 상세 내용</h2>
<!-- 2-1 기본 개념 -->
<h3>2-1. 법정상속인 순위 <span class="law-tag">민법 제1000조, 제1003조</span></h3>
<p>민법은 피상속인의 사망 시 당연히 상속이 개시되고(민법 제997조), 상속인의 범위와 순위를 법률로 정합니다. 유언이 있더라도 법정상속인의 유류분은 보장됩니다.</p>
<div class="rank-diagram">
<div class="rank-item">
<div class="rank-badge"><span class="num">1</span><span class="unit">순위</span></div>
<div class="rank-content">
<h4>직계비속 (자녀·손자녀·증손자녀)</h4>
<p>가장 가까운 직계비속이 우선합니다. 태아도 상속 순위에 있어 이미 태어난 것으로 봅니다(민법 제1000조 제3항). 양자는 양부모의 직계비속입니다.</p>
</div>
</div>
<div class="rank-spouse">
<div class="rank-badge"><span class="unit">배우자</span></div>
<div class="rank-content">
<h4>배우자 — 1·2순위에 합산, 없으면 단독</h4>
<p>법률상 혼인 관계에 있는 배우자만 해당합니다(민법 제1003조). 사실혼 배우자·이혼한 전 배우자는 제외됩니다. 5할 가산(1.5배)을 적용합니다.</p>
</div>
</div>
<div class="rank-item">
<div class="rank-badge"><span class="num">2</span><span class="unit">순위</span></div>
<div class="rank-content">
<h4>직계존속 (부모·조부모·증조부모)</h4>
<p>1순위(직계비속)가 전혀 없을 때 직계존속이 상속합니다. 가장 가까운 촌수가 우선하며, 같은 촌수는 공동상속합니다.</p>
</div>
</div>
<div class="rank-item">
<div class="rank-badge"><span class="num">3</span><span class="unit">순위</span></div>
<div class="rank-content">
<h4>형제자매</h4>
<p>1·2순위 상속인이 모두 없을 때만 상속합니다. 부모 양쪽이 같은 형제자매(전혈)와 한쪽만 같은 형제자매(반혈) 모두 포함합니다.</p>
</div>
</div>
<div class="rank-item">
<div class="rank-badge"><span class="num">4</span><span class="unit">순위</span></div>
<div class="rank-content">
<h4>4촌 이내 방계혈족</h4>
<p>4촌 이내 방계혈족(삼촌·고모·이모·사촌 등)이 최후 순위입니다. 이들도 없으면 상속인이 없는 경우로서, 국가가 청산 후 잔여재산을 귀속받습니다(민법 제1058조).</p>
</div>
</div>
</div>
<!-- 2-2 법정상속분 -->
<h3>2-2. 법정상속분 계산 <span class="law-tag">민법 제1009조</span></h3>
<p>같은 순위 상속인이 여럿이면 균분상속이 원칙입니다. 배우자는 직계비속 또는 직계존속과 공동상속할 때 그들 각자 몫의 <strong>5할(50%)을 가산</strong>합니다.</p>
<div class="calc-box">
<div class="scenario">예시 ① 배우자 + 자녀 2명</div>
<p style="font-size:14px; color:#555; margin-bottom:10px;">자녀 각 1, 배우자 1.5로 비율 설정 → 합계 3.5</p>
<div class="fraction-row">
<div class="fraction-item spouse-item">
<div class="who">배우자</div>
<div class="frac">3/7</div>
</div>
<div class="fraction-item">
<div class="who">자녀 1</div>
<div class="frac">2/7</div>
</div>
<div class="fraction-item">
<div class="who">자녀 2</div>
<div class="frac">2/7</div>
</div>
</div>
</div>
<div class="calc-box">
<div class="scenario">예시 ② 배우자 + 자녀 3명</div>
<p style="font-size:14px; color:#555; margin-bottom:10px;">자녀 각 1, 배우자 1.5 → 합계 4.5</p>
<div class="fraction-row">
<div class="fraction-item spouse-item">
<div class="who">배우자</div>
<div class="frac">3/9</div>
</div>
<div class="fraction-item">
<div class="who">자녀 1</div>
<div class="frac">2/9</div>
</div>
<div class="fraction-item">
<div class="who">자녀 2</div>
<div class="frac">2/9</div>
</div>
<div class="fraction-item">
<div class="who">자녀 3</div>
<div class="frac">2/9</div>
</div>
</div>
</div>
<div class="calc-box">
<div class="scenario">예시 ③ 직계비속 없음 — 배우자 + 부모</div>
<p style="font-size:14px; color:#555; margin-bottom:10px;">부모 각 1, 배우자 1.5 → 합계 3.5 (부·모 각 1/3.5)</p>
<div class="fraction-row">
<div class="fraction-item spouse-item">
<div class="who">배우자</div>
<div class="frac">3/7</div>
</div>
<div class="fraction-item">
<div class="who">부(父)</div>
<div class="frac">2/7</div>
</div>
<div class="fraction-item">
<div class="who">모(母)</div>
<div class="frac">2/7</div>
</div>
</div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>상황</th>
<th>공동상속인</th>
<th>배우자 몫</th>
<th>나머지 상속인</th>
</tr>
</thead>
<tbody>
<tr>
<td>자녀 1명만 있을 때</td>
<td class="center">배우자 + 자녀 1</td>
<td class="gold center">3/5</td>
<td class="center">자녀 2/5</td>
</tr>
<tr>
<td>자녀 2명 있을 때</td>
<td class="center">배우자 + 자녀 2</td>
<td class="gold center">3/7</td>
<td class="center">자녀 각 2/7</td>
</tr>
<tr>
<td>자녀 4명 있을 때</td>
<td class="center">배우자 + 자녀 4</td>
<td class="gold center">3/11</td>
<td class="center">자녀 각 2/11</td>
</tr>
<tr>
<td>자녀 없고 부모만</td>
<td class="center">배우자 + 부모</td>
<td class="gold center">3/7</td>
<td class="center">부모 각 2/7</td>
</tr>
<tr>
<td>자녀·부모 모두 없음</td>
<td class="center">배우자 단독</td>
<td class="gold center">전부</td>
<td class="center">—</td>
</tr>
</tbody>
</table>
</div>
<!-- 2-3 상속결격 -->
<h3>2-3. 상속결격 <span class="law-tag">민법 제1004조</span></h3>
<p>다음 중 하나에 해당하면 <strong>당연히 상속인 자격을 잃습니다.</strong> 법원의 선고 없이 법률상 효과가 발생하며, 결격 이후의 행위도 소급하여 무효가 됩니다.</p>
<ul class="defect-list">
<li>고의로 직계존속·피상속인·배우자·상속의 선순위자·동순위자를 살해하거나 살해하려 한 자</li>
<li>고의로 직계존속·피상속인·배우자에게 상해를 가하여 사망에 이르게 한 자</li>
<li>사기 또는 강박으로 피상속인의 상속에 관한 유언 또는 유언의 철회를 방해한 자</li>
<li>사기 또는 강박으로 피상속인의 상속에 관한 유언을 하게 한 자</li>
<li>상속에 관한 피상속인의 유언서를 위조·변조·파기·은닉한 자 <span class="badge-red">위변조 포함</span></li>
</ul>
<div class="case-box">
<div class="case-title">📋 사례 — 결격자가 있을 때 상속 어떻게 되나?</div>
<p>아버지가 돌아가셨고, 자녀가 장남(A)·차남(B) 2명입니다. 그런데 장남 A가 아버지의 유언서를 몰래 파기(은닉)한 사실이 밝혀졌습니다.</p>
<p><strong>→</strong> 장남 A는 상속결격자가 됩니다(민법 제1004조 5호). 배우자(어머니)와 차남 B만 공동상속인이 되고, 결격된 A의 몫은 없어집니다.</p>
<p>만약 A에게 자녀(손자녀)가 있다면, 손자녀는 A를 대습하여 A의 몫을 상속받습니다(대습상속, 민법 제1001조).</p>
</div>
<!-- 2-4 대습상속 -->
<h3>2-4. 대습상속 <span class="law-tag">민법 제1001조, 제1003조 제2항</span></h3>
<p>상속인이 될 자(피대습인)가 상속개시 전에 ① 사망하거나 ② 결격된 경우, 그 직계비속과 배우자가 피대습인의 순위에서 피대습인의 상속분을 대신 받습니다.</p>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>대습이 인정되는 경우</th>
<th>대습상속인</th>
<th>비고</th>
</tr>
</thead>
<tbody>
<tr>
<td>직계비속이 상속개시 전 사망·결격</td>
<td>그 직계비속(손자녀 등) + 배우자</td>
<td class="badge-green" style="white-space:nowrap;">무제한 대습</td>
</tr>
<tr>
<td>형제자매가 상속개시 전 사망·결격</td>
<td>그 직계비속(조카 등) + 배우자</td>
<td>1회만 인정</td>
</tr>
<tr>
<td>직계존속이 먼저 사망</td>
<td><span class="badge-red">대습상속 ✕</span></td>
<td>대습 대상 아님</td>
</tr>
<tr>
<td>상속인이 자발적으로 포기</td>
<td><span class="badge-red">대습상속 ✕</span></td>
<td>본위상속으로 처리</td>
</tr>
</tbody>
</table>
</div>
<div class="case-box">
<div class="case-title">📋 사례 — 아들이 먼저 죽은 경우</div>
<p>할아버지(피상속인)가 돌아가셨고, 아들(A)은 1년 전 이미 사망, 딸(B)은 생존해 있습니다. 아들 A에게는 배우자(며느리)와 자녀(손자녀 C)가 있습니다.</p>
<p><strong>→</strong> 아들 A의 자리에는 대습상속인인 손자녀 C와 며느리가 들어와, A가 받을 몫(B의 몫과 동일)을 나누어 받습니다. 며느리는 C의 몫에 5할을 가산한 비율로 받습니다.</p>
</div>
<div class="case-box">
<div class="case-title">📋 사례 — 상속포기와 손자녀</div>
<p>아버지가 돌아가셨고, 아들(A)이 빚이 많아 상속을 포기했습니다. A에게는 자녀(손자녀 B)가 있습니다.</p>
<p><strong>→</strong> 포기는 대습상속 사유가 아닙니다. 손자녀 B는 대습상속인이 되지 않습니다. 대신 다음 순위(아버지의 부모 등)가 상속인이 되거나, 해당 순위도 없으면 다음 순위로 넘어갑니다(대법원 1995.9.26. 선고 95다27769 참조).</p>
</div>
</section>
<!-- ════════════════════════════════════════
       3. 관련 판례
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 3</span> 관련 판례</h2>
<div class="ruling-box">
<div class="ruling-header">대법원 2001.3.9. 선고 99다13157 판결 — 동시사망과 대습상속</div>
<p>부자(父子)가 동시에 사망한 경우, 아들이 아버지보다 먼저 사망한 것으로 처리되어 아들의 자녀(손자녀)에게 대습상속이 인정됩니다.</p>
<p>동시사망의 경우 어느 쪽도 타방을 상속하지 못하고, 피대습인(아들)은 상속개시 전에 사망한 것으로 보아 대습상속이 개시됩니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 1997.11.28. 선고 96다5421 판결 — 형제자매의 범위</div>
<p>형제자매 간 상속(3순위)에 있어서 부모 양쪽이 같은 형제자매(전혈형제)와 한쪽 부모만 같은 형제자매(반혈형제)는 동등한 상속권이 인정됩니다.</p>
<p>구 민법상 비적출자를 제외하던 규정은 위헌으로서 현행 민법에서는 모계(母系) 포함 여부와 무관하게 형제자매에 해당합니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 1995.9.26. 선고 95다27769 판결 — 포기와 대습상속 불인정</div>
<p>상속포기는 상속결격이나 사전 사망과 달리, 대습상속 원인이 되지 않습니다.</p>
<p>상속인이 포기한 경우, 그 포기자의 직계비속은 대습상속인이 되지 아니하고, 나머지 상속인 또는 다음 순위 상속인이 상속합니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 1993.2.12. 선고 92다50755 판결 — 상속결격의 효과</div>
<p>상속결격은 법률 요건의 충족으로 당연히 발생하므로, 별도의 법원 판결을 요하지 않습니다. 결격자가 상속개시 후 상속재산을 취득한 경우에도 소급하여 무효입니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       4. 주의사항
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 4</span> 꼭 확인하세요</h2>
<div class="warn-box">
<div class="warn-title">⚠ 사실혼 배우자는 법정상속인이 아닙니다</div>
<p>오랜 사실혼 관계라도 법률혼(혼인신고)을 하지 않았다면 상속권이 없습니다. 생전에 증여 또는 유언을 통해 재산을 이전받는 방법을 검토해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 이혼한 전 배우자는 상속인이 아닙니다</div>
<p>이혼이 완료되면 상속권은 즉시 소멸합니다. 그러나 이혼 소송 진행 중 상대방이 사망하면 아직 혼인 관계가 유지되므로 상속이 가능합니다. 이혼 시점을 정확히 확인해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 양자와 친생자는 동일한 1순위 상속인</div>
<p>입양된 양자는 양부모의 직계비속으로서 친생자와 동일한 상속분을 갖습니다. 다만, 친양자입양의 경우 친생부모와의 법적 관계가 단절되어, 친생부모의 재산을 상속받지 못합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 상속분은 유언으로 변경할 수 있지만 유류분 한도 내에서</div>
<p>피상속인은 유언으로 특정인에게 재산을 더 주거나 덜 줄 수 있습니다. 그러나 직계비속·직계존속·배우자 등에게는 법정상속분의 일정 비율(유류분)이 보장되므로, 유류분을 침해하는 유언은 유류분반환청구의 대상이 됩니다(민법 제1112조 이하).</p>
</div>
</section>
<!-- ════════════════════════════════════════
       5. Q & A
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 5</span> 자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q1</span>
        아버지가 돌아가셨는데, 어머니·아들·딸이 있습니다. 어머니가 받는 비율은 얼마인가요?
      </div>
<div class="qna-a">
        배우자(어머니)와 자녀(아들·딸) 2명이 공동상속인입니다. 자녀 각자를 1로 볼 때 배우자는 1.5배를 받으므로, 합계 3.5(=1+1+1.5)를 기준으로 어머니는 <strong>1.5/3.5 = 3/7</strong>, 아들은 2/7, 딸은 2/7를 법정상속분으로 갖습니다(민법 제1009조).
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q2</span>
        자녀가 없고 부모도 모두 돌아가셨습니다. 형제자매가 상속인이 되나요?
      </div>
<div class="qna-a">
        네, 1순위(직계비속)와 2순위(직계존속)가 모두 없으므로 형제자매가 3순위 상속인이 됩니다. 배우자가 있다면 배우자가 단독상속합니다. 배우자도 없고 형제자매만 있다면 형제자매가 균분상속합니다(민법 제1000조, 제1003조).
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q3</span>
        아들이 아버지(피상속인)보다 먼저 돌아가셨습니다. 손자녀에게 상속이 가나요?
      </div>
<div class="qna-a">
        네, 이것이 바로 대습상속입니다(민법 제1001조). 아들이 상속개시 전에 사망했으므로, 아들의 자녀(손자녀)와 아들의 배우자(며느리)가 대습상속인이 됩니다. 손자녀와 며느리는 아들이 받았을 몫을 나누어 갖게 되며, 며느리는 손자녀의 5할을 가산합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q4</span>
        아들이 상속을 포기했습니다. 손자녀에게 아들의 몫이 대습상속되나요?
      </div>
<div class="qna-a">
        아닙니다. 포기는 대습상속의 원인이 되지 않습니다(대법원 95다27769). 상속인이 자발적으로 포기하면 처음부터 상속인이 아니었던 것으로 보아, 남은 공동상속인의 상속분이 커지거나 다음 순위 상속인이 상속합니다. 손자녀는 대습상속인이 되지 않습니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q5</span>
        재혼한 배우자의 전 남편 자녀(계자)도 제 재산을 상속받나요?
      </div>
<div class="qna-a">
        법률상 입양 절차 없이 단순히 재혼 배우자의 자녀인 경우, 계자(계모·계부와의 관계)는 상속인이 되지 않습니다. 입양이 이루어진 경우에만 직계비속으로서 1순위 상속인이 됩니다. 입양을 원하지 않는다면, 생전 증여나 유언으로 재산을 줄 수는 있습니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q6</span>
        상속분을 미리 포기하는 약정을 써도 효력이 있나요?
      </div>
<div class="qna-a">
        생전에 "나는 상속을 포기하겠다"는 약정은 법적 효력이 없습니다. 상속포기는 반드시 상속개시(피상속인 사망) 이후 3개월 이내에 가정법원에 신고하는 방식으로만 가능합니다(민법 제1019조). 미리 약정해도 상속 개시 후 법원에 포기 신고를 해야 효력이 발생합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q7</span>
        상속인이 아무도 없으면 재산은 어떻게 되나요?
      </div>
<div class="qna-a">
        4순위 방계혈족까지 포함하여 상속인이 전혀 없으면, 법원이 상속재산관리인을 선임하여 청산합니다. 청산 후 남은 재산은 국가에 귀속됩니다(민법 제1058조). 다만, 특별연고자(사실혼 배우자, 함께 살았던 사람 등)는 가정법원에 상속재산 분여 청구를 할 수 있습니다(민법 제1057조의2).
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
</section>
<!-- ════════════════════════════════════════
       6. 다음으로 확인할 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 6</span> 다음으로 확인할 내용</h2>
<p>상속인 순위와 상속분을 파악했다면, 아래 주제들을 순서대로 확인하시면 좋습니다.</p>
<div class="next-links">
<a class="next-link" href="상속_03_실종선고.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">03번째 페이지</span>
<span class="title">실종된 가족과 상속</span>
</span>
</a>
<a class="next-link" href="상속_04_상속재산범위.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">04번째 페이지</span>
<span class="title">빚도 상속되나요</span>
</span>
</a>
<a class="next-link" href="상속_05_포기vs한정승인.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">05번째 페이지</span>
<span class="title">포기 vs 한정승인 비교</span>
</span>
</a>
<a class="next-link" href="상속_10_유류분.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">10번째 페이지</span>
<span class="title">유류분 — 최소한 받을 권리</span>
</span>
</a>
</div>
</section>
<!-- ════════════════════════════════════════
       7. CTA
  ════════════════════════════════════════ -->
<!-- ════════════════════════════════════════
       8. 면책 문구
  ════════════════════════════════════════ -->
<div class="disclaimer-section">
<p><strong>법적 고지(면책 조항)</strong></p>
<p>이 페이지는 일반적인 법률 정보를 제공할 목적으로 작성되었으며, 법률 자문을 구성하지 않습니다. 개별 사안의 구체적인 사실관계·증거·당사자 관계에 따라 결과가 달라질 수 있으므로, 중요한 결정을 내리기 전에 반드시 자격을 갖춘 법무사·변호사와 상담하시기 바랍니다.</p>
<p>기재된 법령 조문 및 판례는 작성 시점을 기준으로 하며, 이후 법령 개정이나 판례 변경으로 내용이 달라질 수 있습니다. 최신 법령은 국가법령정보센터(law.go.kr)에서 확인하시기 바랍니다.</p>
</div>
</div><!-- /container -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-03', title: '실종선고와 상속',
        meta: '가족이 오랫동안 연락이 없을 때 상속을 어떻게 처리하는가',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ════════════════════════════════════════
       0. 이런 분께 필요합니다
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 0</span> 이런 분께 필요합니다</h2>
<div class="inh-checklist">
<ul>
<li>가족이 수년째 연락이 끊겨 생사를 알 수 없는 분</li>
<li>실종된 가족 명의의 부동산·예금을 상속받거나 정리해야 하는 분</li>
<li>실종된 가족과의 혼인·이혼 관계를 법적으로 정리하고 싶은 분</li>
<li>전쟁·사고 등으로 가족이 행방불명 되었으나 사망신고를 하지 못한 분</li>
<li>실종선고를 받은 가족이 다시 돌아왔을 때 어떻게 해야 하는지 궁금한 분</li>
<li>실종선고와 인정사망의 차이를 명확히 알고 싶은 분</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       1. 핵심 요약
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 1</span> 핵심 요약</h2>
<div class="summary-box">
<div class="label">🔑 이것만 기억하세요</div>
<ul>
<li>생사불명 상태가 <strong>보통실종 5년, 특별실종(전쟁·사고 등) 1년</strong> 이상 지속되면 법원에 실종선고를 신청할 수 있습니다.</li>
<li>실종선고가 확정되면 <strong>실종기간 만료일에 사망한 것으로 간주</strong>되어 그 시점부터 상속이 개시됩니다.</li>
<li>신청은 부재자의 마지막 주소지 관할 <strong>가정법원</strong>에 합니다. 이해관계인(배우자, 1순위 상속인 등)이나 검사가 청구할 수 있습니다.</li>
<li>법원은 6개월 이상의 <strong>공시최고</strong>(공고) 절차를 거쳐 실종을 선고합니다. 신청부터 선고까지 보통 8개월~1년 이상 걸립니다.</li>
<li>실종자가 생존한 사실이 증명되면 <strong>실종선고 취소</strong>를 청구할 수 있고, 취소되면 법률관계는 소급하여 회복됩니다.</li>
<li>인정사망은 관공서가 사망 시기를 인정하는 것으로, 실종선고와 별개의 제도입니다.</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       2. 상세 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 2</span> 상세 내용</h2>
<!-- 2-1 기본 개념 -->
<h3>2-1. 실종선고란 <span class="law-tag">민법 제27조·제28조</span></h3>
<p>실종선고는 장기간 생사불명인 부재자를 법률상 사망한 것으로 간주하여, 그 재산·신분 관계를 정리하는 제도입니다. 상속개시 원인인 '사망'에는 자연사망 외에 실종선고와 인정사망이 포함됩니다(민법 제997조).</p>
<div class="compare-grid">
<div class="compare-card normal">
<div class="card-head">📌 보통실종</div>
<div class="card-body">
<dl>
<dt>적용 상황</dt>
<dd>가출·연락두절 등 일반적 생사불명</dd>
<dt>실종기간</dt>
<dd><strong>최종 소식으로부터 5년</strong></dd>
<dt>사망 간주 시점</dt>
<dd>실종기간 만료일(최종 소식 후 5년이 되는 날)</dd>
<dt>근거</dt>
<dd>민법 제27조 제1항</dd>
</dl>
</div>
</div>
<div class="compare-card special">
<div class="card-head">⚡ 특별실종 (위난실종)</div>
<div class="card-body">
<dl>
<dt>적용 상황</dt>
<dd>전쟁·선박침몰·항공기추락·기타 위난</dd>
<dt>실종기간</dt>
<dd><strong>위난 종료 후 1년</strong></dd>
<dt>사망 간주 시점</dt>
<dd>위난이 종료한 때(전쟁 종지, 침몰 시점 등)</dd>
<dt>근거</dt>
<dd>민법 제27조 제2항</dd>
</dl>
</div>
</div>
</div>
<h3>2-2. 실종선고와 인정사망의 차이</h3>
<p>두 제도 모두 사망에 준하는 효과를 발생시키지만, 성격과 절차가 다릅니다.</p>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>구분</th>
<th>실종선고</th>
<th>인정사망</th>
</tr>
</thead>
<tbody>
<tr>
<td class="bold">근거</td>
<td>민법 제27조·제28조</td>
<td>가족관계등록법 제90조</td>
</tr>
<tr>
<td class="bold">주체</td>
<td>가정법원 (심판)</td>
<td>관공서 (조사·통보)</td>
</tr>
<tr>
<td class="bold">요건</td>
<td>생사불명 + 법정 기간 경과</td>
<td>수난·전란·화재 등 위난 중 사망 확인</td>
</tr>
<tr>
<td class="bold">효과</td>
<td>실종기간 만료 시 사망 <strong>간주</strong></td>
<td>관공서가 인정한 시기에 사망 <strong>추정</strong></td>
</tr>
<tr>
<td class="bold">번복</td>
<td>법원의 실종선고 취소 필요</td>
<td>반증으로 번복 가능</td>
</tr>
</tbody>
</table>
</div>
<!-- 2-3 신청 절차 -->
<h3>2-3. 실종선고 신청 절차 <span class="law-tag">가사소송법 제2조</span></h3>
<div class="flow">
<div class="flow-step">
<div class="flow-left">
<div class="flow-circle">1</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<h4>실종기간 충족 확인</h4>
<p>보통실종은 최종 소식 후 5년, 특별실종은 위난 종료 후 1년이 경과해야 합니다. 기산점이 언제인지를 먼저 정확히 파악합니다.</p>
</div>
</div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-circle">2</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<h4>관할 가정법원 확인</h4>
<p>부재자의 <strong>마지막 주소지를 관할하는 가정법원</strong>에 제출합니다. 마지막 주소를 알 수 없는 경우에는 대법원 소재지(서울가정법원)에 제출합니다(가사소송규칙 제44조).</p>
</div>
</div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-circle">3</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<h4>심판청구서 작성 및 접수</h4>
<p>청구취지·청구원인을 기재한 심판청구서를 작성하고, 아래 서류를 첨부하여 제출합니다. 우편 접수 가능하며, 대리인(법무사·변호사) 위임도 가능합니다.</p>
</div>
</div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-circle">4</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<h4>공시최고 <span class="duration-badge">6개월 이상</span></h4>
<p>법원은 관보·일간신문 게재 및 법원 게시판에 공시최고를 합니다. 공시최고 기일은 공고 종료일부터 <strong>6개월 이후</strong>로 정합니다. 이 기간 동안 부재자 또는 그 생사를 아는 자의 신고가 없으면 실종선고 절차가 진행됩니다.</p>
</div>
</div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-circle">5</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<h4>심리 및 실종선고 심판</h4>
<p>법원은 청구인 심문, 경찰 주민조회, 출입국 사실조회, 건강보험 진료내역 조회 등을 거쳐 실종선고 요건을 심리합니다. 요건이 인정되면 심판으로 실종선고를 합니다. 심판 주문에는 <strong>실종기간 만료일</strong>이 기재됩니다.</p>
</div>
</div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-circle">6</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<h4>실종선고 신고 (확정 후 1개월 이내)</h4>
<p>심판 확정일로부터 <strong>1개월 이내</strong>에 재판서 등본과 확정증명서를 첨부하여 실종자의 등록기준지 또는 신고인의 주소지 시·구·읍·면사무소에 신고합니다. 이로써 가족관계등록부에 사망이 기재됩니다.</p>
</div>
</div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-circle">7</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<h4>상속 개시 — 등기·예금 정리</h4>
<p>실종선고 신고 후 부동산 상속등기, 금융재산 인출 등 실제 상속 절차를 진행합니다. 상속등기 시에는 실종선고심판서 등본 및 확정증명서가 필요합니다.</p>
</div>
</div>
</div>
<!-- 첨부서류 -->
<h3>2-4. 주요 첨부서류</h3>
<div class="doc-list">
<ul>
<li>가족관계증명서 (청구인·사건본인 각 1통)</li>
<li>기본증명서 (사건본인 1통)</li>
<li>주민등록등(초)본 (청구인·사건본인 각 1통)</li>
<li>인우보증서 2인 이상 (청구인 제외, 인감증명서 각 첨부)</li>
<li>미아신고확인서 또는 가출인신고확인서 1통 <span class="opt">(경찰서 발급)</span></li>
<li>기타 생사불명을 소명하는 자료 <span class="opt">(최후 연락일 입증 서류 등)</span></li>
<li>실종선고 취소 청구 시: 실종선고 재판서 등본, 확정증명서, 생존 증명 서류</li>
</ul>
</div>
<!-- 사례 -->
<h3>2-5. 실제 사례</h3>
<div class="case-box">
<div class="case-title">📋 사례 ① — 가출 후 7년째 행방불명</div>
<p>아들(A)이 2017년 초 가출하여 7년째 생사를 알 수 없습니다. 최후 소식은 2017년 3월경입니다. 아버지가 2024년 사망하여 A가 포함된 상속을 처리해야 합니다.</p>
<p><strong>→</strong> 최후 소식 2017년 3월로부터 5년이 지난 2022년 3월에 실종기간이 만료됩니다. 이미 요건을 충족하므로, 아버지의 나머지 상속인(배우자, 다른 형제 등)이 이해관계인으로서 A에 대한 실종선고를 신청할 수 있습니다. 실종선고 확정 후 A는 2022년 3월 사망한 것으로 간주되고, A의 직계비속·배우자가 있다면 대습상속이 적용됩니다.</p>
</div>
<div class="case-box">
<div class="case-title">📋 사례 ② — 선박 사고 후 행방불명</div>
<p>선원인 남편이 2021년 11월 선박 침몰 사고로 행방불명되었습니다. 시신을 찾지 못했으나, 사고 당시 함께 있던 선원들의 사망이 확인되었습니다.</p>
<p><strong>→</strong> 이 경우는 선박실종(특별실종)에 해당합니다. 선박 침몰 시점으로부터 <strong>1년</strong>이 지난 2022년 11월부터 실종선고를 신청할 수 있습니다. 또한, 사망을 입증할 수 있는 정황이 충분하다면 관공서를 통한 <strong>인정사망</strong> 처리도 검토할 수 있습니다.</p>
</div>
<div class="case-box">
<div class="case-title">📋 사례 ③ — 실종선고 후 생환</div>
<p>어머니가 실종선고를 받았고, 그 후 자녀들이 상속을 완료하여 부동산 등기도 마쳤습니다. 그런데 수년 후 어머니가 해외에 생존해 있다는 사실이 밝혀졌습니다.</p>
<p><strong>→</strong> 본인, 이해관계인, 검사가 가정법원에 <strong>실종선고 취소 심판</strong>을 청구할 수 있습니다. 취소 심판이 확정되면 실종선고로 인한 법률관계는 소급 무효가 됩니다. 다만, 선의(사정을 모르고)로 이미 재산을 취득한 제3자에 대해서는 반환 청구가 제한될 수 있습니다(민법 제29조 제1항 단서).</p>
</div>
</section>
<!-- ════════════════════════════════════════
       3. 관련 판례
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 3</span> 관련 판례</h2>
<div class="ruling-box">
<div class="ruling-header">대법원 1994.9.27. 선고 94다21542 판결 — 실종선고 취소 전 상속 효력</div>
<p>실종선고를 받은 자는 실종기간 만료 시에 사망한 것으로 간주됩니다. 따라서 이후 실종선고를 취소해야 할 사유가 발생하더라도, <strong>실제로 실종선고가 취소되지 않는 한</strong>, 임의로 사망 시점을 달리 정하여 이미 개시된 상속 관계를 부정하거나 변경할 수 없습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 1992.4.14. 자 92스4·92스5·92스6 결정 — 이해관계인의 범위</div>
<p>실종선고를 청구할 수 있는 이해관계인은 그 실종선고로 인하여 신분상 또는 재산상의 이해관계를 가지는 자에 한합니다. 부재자가 사망할 경우 제1순위 상속인이 따로 있어 제2순위 상속인에 불과한 자는, 특별한 사정이 없는 한 실종선고 이해관계인이 될 수 없습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 1986.10.10. 자 86스20 결정 — 간접적 이해관계인 청구 불가</div>
<p>부재자의 자매로서 제2순위 상속인인 자는, 실종선고 여부에 따라 상속지분에 차이가 생긴다고 하더라도 이는 사망 간주 시기에 따른 간접적인 영향에 불과하여, 실종선고 청구 이해관계인에 해당하지 않습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 1970.3.10. 선고 69다2103 판결 — 실종선고 효력의 확정성</div>
<p>실종선고의 심판이 확정되면 선고가 취소되지 않는 한 본인의 생존 기타 반증을 들어서 선고의 효과를 다툴 수 없습니다. 실종선고의 효력을 뒤집으려면 반드시 법원에 실종선고 취소 심판을 청구하여야 합니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       4. 주의사항
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 4</span> 꼭 확인하세요</h2>
<div class="warn-box">
<div class="warn-title">⚠ 실종기간 기산점을 정확히 파악해야 합니다</div>
<p>보통실종의 5년은 <strong>'최종 소식이 있었던 날'</strong>부터 기산합니다. 마지막으로 연락했거나 행방이 확인된 날짜를 문자·통화기록·목격자 진술 등으로 소명해야 합니다. 기산점이 불분명하면 청구가 기각될 수 있습니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 공시최고 기간 중 부재자가 스스로 신고할 수 있습니다</div>
<p>공시최고 기일까지 부재자 본인이 생존 신고를 하거나, 생사를 아는 자가 신고하면 실종선고 절차가 종료됩니다. 따라서 실종선고 신청 전에 실제로 생사를 확인하기 어려운 상황인지를 먼저 검토해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 실종선고 취소 시 선의 취득자 보호</div>
<p>실종선고가 취소되면 원칙적으로 법률관계가 소급하여 회복됩니다. 그러나 실종선고를 믿고 재산을 취득한 <strong>선의의 제3자</strong>에게는 원상회복을 청구할 수 없는 경우가 있습니다(민법 제29조 제1항 단서). 이미 상속재산을 처분한 경우라면 법적 검토가 필요합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 실종선고는 상속목적으로만 사용할 수 없습니다</div>
<p>상속 처리를 위해 실종선고를 이용하더라도, 실종선고는 신분관계(혼인 해소 등)에도 영향을 미칩니다. 상속만을 위해 실종선고를 신청하는 경우 가족 전체의 법적 관계에 미치는 영향을 종합적으로 검토해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 실종선고와 무관하게 법원이 사망 사실을 인정할 수도 있습니다</div>
<p>수난·전란·화재 등에서 사망이 고도로 개연성 있는 경우, 법원은 인정사망이나 실종선고 제도에 의하지 않고 사망사실을 직접 인정하는 판결을 내릴 수 있습니다. 재판 과정에서 사망의 증거가 충분히 확보되어 있다면 이 방법도 고려할 수 있습니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       5. Q & A
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 5</span> 자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q1</span>
        아버지가 7년 전 가출하신 후 연락이 없습니다. 지금 실종선고 신청이 가능한가요?
      </div>
<div class="qna-a">
        보통실종의 경우 최후 소식으로부터 5년이 경과하면 요건을 충족합니다. 7년 전이라면 이미 실종기간을 초과하므로 즉시 신청이 가능합니다. 다만, '최후 소식이 있었던 날'을 소명할 수 있어야 합니다. 가출 신고서, 마지막 연락 기록 등을 미리 준비하시고 가정법원에 청구하시기 바랍니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q2</span>
        실종선고가 나면 그 시점부터 상속이 시작되나요, 아니면 신고한 날부터인가요?
      </div>
<div class="qna-a">
        상속 개시 시점은 실종선고를 받은 날이나 신고일이 아닙니다. <strong>실종기간 만료일(사망 간주일)</strong>이 기준입니다(민법 제28조). 예를 들어 최후 소식이 2018년 3월이면 2023년 3월이 실종기간 만료일이 되고, 이 날에 사망한 것으로 간주되어 그 시점부터 상속이 개시됩니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q3</span>
        실종선고 신청은 누가 할 수 있나요? 형제자매도 가능한가요?
      </div>
<div class="qna-a">
        이해관계인과 검사가 청구할 수 있습니다. 이해관계인이란 실종선고로 인해 신분상·재산상 이익을 직접 얻는 자를 말합니다. 배우자, 직계비속(1순위 상속인)은 가능합니다. 그러나 형제자매(3순위)처럼 1순위 상속인이 따로 있어 순위에서 밀리는 경우, 법원은 이해관계인 자격을 인정하지 않을 수 있습니다. 형제자매가 유일한 상속인이라면 신청 가능합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q4</span>
        실종선고를 받으면 배우자는 재혼할 수 있나요?
      </div>
<div class="qna-a">
        네. 실종선고로 배우자가 사망한 것으로 간주되므로 혼인 관계가 해소됩니다. 따라서 남은 배우자는 법적으로 재혼할 수 있습니다. 다만, 실종선고가 취소되면 종전 혼인 관계가 부활하는 문제가 생길 수 있으므로, 재혼 후 실종자가 생환하는 경우에는 복잡한 법적 문제가 발생합니다. 이 경우 실종선고 취소 및 재혼 유지 여부를 법원이 결정합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q5</span>
        실종선고 신청 후 선고까지 얼마나 걸리나요?
      </div>
<div class="qna-a">
        실종선고 절차에서 공시최고 기간만 최소 6개월 이상이 소요됩니다. 여기에 접수·심리·심판 고지·확정까지 더하면 통상 <strong>8개월~1년 이상</strong> 걸립니다. 법원별, 사건의 복잡도별로 차이가 있습니다. 서두를 경우 사전에 서류를 완벽히 준비하여 보완 요청 없이 접수되도록 하는 것이 중요합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q6</span>
        실종선고 후 상속받은 부동산 등기는 어떻게 하나요?
      </div>
<div class="qna-a">
        실종선고 심판이 확정되면 ①실종선고 신고(가족관계등록부 사망 기재)를 마친 후, ②실종선고 심판서 등본과 확정증명서를 첨부하여 부동산 소재지 관할 등기소에 상속등기를 신청합니다. 상속등기 신청서 외에 가족관계증명서, 상속인 전원의 인감증명서, 부동산 관련 서류 등이 필요합니다. 상속인이 여럿이면 협의분할 후 분할 결과에 따라 등기합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
</section>
<!-- ════════════════════════════════════════
       6. 다음으로 확인할 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 6</span> 다음으로 확인할 내용</h2>
<p>실종선고로 상속이 개시되면, 아래 내용을 순서대로 확인하시면 됩니다.</p>
<div class="next-links">
<a class="next-link" href="상속_04_상속재산범위.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">04번째 페이지</span>
<span class="title">빚도 상속되나요</span>
</span>
</a>
<a class="next-link" href="상속_05_포기vs한정승인.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">05번째 페이지</span>
<span class="title">포기 vs 한정승인 비교</span>
</span>
</a>
<a class="next-link" href="상속_12_부동산등기개관.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">12번째 페이지</span>
<span class="title">상속 부동산 등기 개관</span>
</span>
</a>
<a class="next-link" href="상속_02_상속인순위.html">
<span class="arrow">←</span>
<span class="link-text">
<span class="num">02번째 페이지</span>
<span class="title">상속인 순위 다시 보기</span>
</span>
</a>
</div>
</section>
<!-- ════════════════════════════════════════
       7. CTA
  ════════════════════════════════════════ -->
<!-- ════════════════════════════════════════
       8. 면책 문구
  ════════════════════════════════════════ -->
<div class="disclaimer-section">
<p><strong>법적 고지(면책 조항)</strong></p>
<p>이 페이지는 일반적인 법률 정보를 제공할 목적으로 작성되었으며, 법률 자문을 구성하지 않습니다. 개별 사안의 구체적인 사실관계·증거·당사자 관계에 따라 결과가 달라질 수 있으므로, 중요한 결정을 내리기 전에 반드시 자격을 갖춘 법무사·변호사와 상담하시기 바랍니다.</p>
<p>기재된 법령 조문 및 판례는 작성 시점을 기준으로 하며, 이후 법령 개정이나 판례 변경으로 내용이 달라질 수 있습니다. 최신 법령은 국가법령정보센터(law.go.kr)에서 확인하시기 바랍니다.</p>
</div>
</div><!-- /container -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-04', title: '상속재산의 범위',
        meta: '적극재산·소극재산·상속 제외 항목 · 재산조사 방법 완전 정리',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ════════════════════════════════════════
       0. 이런 분께 필요합니다
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 0</span> 이런 분께 필요합니다</h2>
<div class="inh-checklist">
<ul>
<li>부모님이 돌아가셨는데 빚이 있다는 말을 들어 막막한 분</li>
<li>상속을 받으면 구체적으로 무엇이, 어디까지 승계되는지 알고 싶은 분</li>
<li>보증을 섰던 피상속인의 보증채무가 자녀에게 상속되는지 궁금한 분</li>
<li>생명보험금·퇴직금이 상속재산에 포함되는지 확인하고 싶은 분</li>
<li>피상속인의 재산 내역을 어디서 어떻게 조회해야 하는지 모르는 분</li>
<li>상속을 받기 전, 재산과 채무를 먼저 파악하여 포기·한정승인 여부를 결정하려는 분</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       1. 핵심 요약
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 1</span> 핵심 요약</h2>
<div class="summary-box">
<div class="label">🔑 이것만 기억하세요</div>
<ul>
<li>상속은 피상속인의 재산과 채무를 <strong>포괄적으로 승계</strong>합니다. 재산만 골라 받을 수 없습니다(민법 제1005조).</li>
<li>빚(소극재산)도 상속됩니다. 대출·보증채무·세금 체납액·카드 채무까지 모두 포함됩니다.</li>
<li><strong>생명보험금·사망퇴직금·유족연금</strong>은 상속재산이 아닙니다. 각 수익자·유족에게 직접 귀속됩니다.</li>
<li><strong>일신전속권</strong>(이혼청구권, 부양청구권 등 본인만 행사 가능한 권리)은 상속되지 않습니다.</li>
<li>채무가 많으면 <strong>상속 개시를 안 날로부터 3개월 이내</strong>에 포기 또는 한정승인을 해야 합니다(민법 제1019조).</li>
<li>정부24 '사망자 재산조회 통합처리' 서비스를 이용하면 금융·부동산·세금·자동차를 한 번에 조회할 수 있습니다.</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       2. 상세 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 2</span> 상세 내용</h2>
<!-- 2-1 포괄승계 원칙 -->
<h3>2-1. 포괄승계의 원칙 <span class="law-tag">민법 제1005조</span></h3>
<p>상속인은 상속이 개시된 때로부터 피상속인의 재산에 관한 <strong>포괄적 권리의무</strong>를 승계합니다. 상속인이 원하든 원하지 않든, 좋은 재산만 골라 받거나 특정 채무만 거부하는 것은 허용되지 않습니다. 재산을 받으려면 채무도 함께 승계해야 하며, 채무를 피하려면 상속 전부를 포기해야 합니다.</p>
<p>단, 상속인의 고유재산을 채무 변제에 무한정 사용하고 싶지 않다면 <strong>한정승인</strong>(상속재산 범위 내에서만 채무 변제)을 선택할 수 있습니다.</p>
<!-- 2-2 재산의 3가지 분류 -->
<h3>2-2. 상속재산의 세 가지 분류</h3>
<div class="asset-grid">
<div class="asset-card plus">
<div class="ac-head">➕ 적극재산 (상속 O)</div>
<div class="ac-body">
<ul>
<li>부동산 (토지·건물)</li>
<li>예금·적금·주식·펀드</li>
<li>임차보증금 반환청구권</li>
<li>대여금 채권</li>
<li>자동차·귀금속·동산</li>
<li>지식재산권(저작권 등)</li>
<li>손해배상청구권 (재산상)</li>
</ul>
</div>
</div>
<div class="asset-card minus">
<div class="ac-head">➖ 소극재산 (상속 O)</div>
<div class="ac-body">
<ul>
<li>금융기관 대출금</li>
<li>보증채무</li>
<li>신용카드 미납금</li>
<li>국세·지방세 체납액</li>
<li>임금·퇴직금 미지급</li>
<li>손해배상채무</li>
<li>임대차 보증금 반환채무</li>
</ul>
</div>
</div>
<div class="asset-card none">
<div class="ac-head">✕ 상속 제외 항목</div>
<div class="ac-body">
<ul>
<li>생명보험금 (수익자 직접취득)</li>
<li>사망퇴직금·유족연금</li>
<li>이혼청구권 (일신전속)</li>
<li>부양청구권 (일신전속)</li>
<li>호주 지위 (폐지)</li>
<li>사용대차상 사용·수익권</li>
<li>재판상 이혼 소송계속권</li>
</ul>
</div>
</div>
</div>
<!-- 2-3 보증채무 -->
<h3>2-3. 보증채무는 상속된다 <span class="law-tag">민법 제1005조</span></h3>
<p>피상속인이 타인의 채무에 보증인이 된 경우, 그 <strong>보증채무도 상속인에게 그대로 승계</strong>됩니다. 피상속인 사망 후 주채무자가 채무를 이행하지 않으면, 채권자는 상속인에게 보증책임을 청구할 수 있습니다. 이 경우 단순승인한 상속인은 자신의 고유재산으로도 변제해야 할 수 있습니다.</p>
<p>보증채무의 존재를 몰랐다가 나중에 알게 된 경우, 상속채무가 상속재산을 초과하는 사실을 <strong>중대한 과실 없이 알지 못했다면</strong>, 그 사실을 안 날로부터 3개월 이내에 <strong>특별한정승인</strong>을 신청할 수 있습니다(민법 제1019조 제3항).</p>
<!-- 2-4 생명보험금·퇴직금 -->
<h3>2-4. 생명보험금·사망퇴직금은 상속재산이 아닙니다</h3>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>항목</th>
<th>상속재산 포함?</th>
<th>근거·귀속</th>
<th>주의사항</th>
</tr>
</thead>
<tbody>
<tr>
<td class="bold">생명보험금</td>
<td class="no center">아님</td>
<td>보험계약상 수익자에게 직접 귀속</td>
<td>수익자가 상속인이라도 고유재산으로 취득</td>
</tr>
<tr>
<td class="bold">사망퇴직금</td>
<td class="no center">아님</td>
<td>근로기준법상 유족에게 직접 지급</td>
<td>유류분 계산 시 특별수익으로 산입될 수 있음</td>
</tr>
<tr>
<td class="bold">유족연금</td>
<td class="no center">아님</td>
<td>각 연금법상 수급권자에게 귀속</td>
<td>상속포기해도 유족연금은 수령 가능</td>
</tr>
<tr>
<td class="bold">사망보험금 (수익자=상속인)</td>
<td class="no center">아님</td>
<td>수익자의 고유재산</td>
<td>채무 변제 의무 없음, 상속채권자 압류 불가</td>
</tr>
</tbody>
</table>
</div>
<div class="case-box">
<div class="case-title">📋 핵심 포인트 — 상속포기 후 보험금 수령 가능</div>
<p>상속을 포기하더라도 <strong>생명보험금·유족연금·사망퇴직금</strong>은 받을 수 있습니다. 이 항목들은 상속재산이 아니라 수익자·유족의 고유재산으로 귀속되기 때문입니다. 따라서 빚이 많아 상속을 포기하는 경우에도 이 항목들은 별도로 수령하면 됩니다.</p>
</div>
<!-- 2-5 재산조사 방법 -->
<h3>2-5. 피상속인 재산·채무 조사 방법</h3>
<p>상속 승인 또는 포기를 결정하기 전에 반드시 재산과 채무를 조사해야 합니다. 상속인은 승인·포기 전에 상속재산을 조사할 수 있습니다(민법 제1019조 제2항).</p>
<div class="inquiry-cards">
<div class="inq-card">
<div class="inq-title">🏛 정부24 통합조회 <span style="font-size:11px; color:#888; font-weight:400;">(주민센터·시·구청)</span></div>
<ul>
<li>금융거래내역 (예금·대출·보험·주식)</li>
<li>국세 및 지방세 체납·미납·환급액</li>
<li>연금 가입 여부 (국민·공무원·사학·군인연금)</li>
<li>자동차 소유 내역</li>
<li>토지 소유 내역</li>
<li>공제회 가입 여부 (건설근로자 등)</li>
</ul>
</div>
<div class="inq-card">
<div class="inq-title">🏦 금융감독원 금융민원센터</div>
<ul>
<li>은행·저축은행 예금·대출</li>
<li>보험계약 (생명·손해보험)</li>
<li>증권계좌·펀드</li>
<li>신용카드 관련 채무</li>
<li>상속인 등에 대한 금융거래조회 신청</li>
<li>금감원 본원 1층 또는 각 지원 방문</li>
</ul>
</div>
<div class="inq-card">
<div class="inq-title">🏠 등기 관련 조회</div>
<ul>
<li>대법원 인터넷등기소: 부동산 소유 여부</li>
<li>등기사항전부증명서 발급 (담보·가압류 확인)</li>
<li>지자체 세무과: 재산세 부과 내역</li>
<li>자동차등록사업소: 자동차 소유 확인</li>
</ul>
</div>
<div class="inq-card">
<div class="inq-title">📋 기타 채무 확인</div>
<ul>
<li>신용정보회사 (나이스·올크레딧): 신용정보 조회</li>
<li>법원 전자소송: 피상속인 관련 소송 확인</li>
<li>국민건강보험공단: 보험료 체납 여부</li>
<li>피상속인 주변인(지인·거래처) 문의</li>
<li>사용 중인 공인인증서·인터넷뱅킹 확인</li>
</ul>
</div>
</div>
<!-- 2-6 사례 -->
<h3>2-6. 실제 사례로 이해하기</h3>
<div class="calc-box">
<div class="scenario">사례 ① 재산이 채무보다 많은 경우 — 단순승인</div>
<div class="calc-row">
<span class="label">아파트 시세</span>
<span class="val-plus">＋ 3억 원</span>
</div>
<div class="calc-row">
<span class="label">예금·주식</span>
<span class="val-plus">＋ 5,000만 원</span>
</div>
<div class="calc-row">
<span class="label">은행 대출</span>
<span class="val-minus">－ 1억 원</span>
</div>
<div class="calc-row">
<span class="label">신용카드 미납</span>
<span class="val-minus">－ 500만 원</span>
</div>
<div class="calc-row total-row">
<span class="label" style="font-weight:700;">순(純) 상속재산</span>
<span class="val-total">≈ 2억 4,500만 원</span>
</div>
<p style="font-size:13.5px; color:#555; margin-top:12px; margin-bottom:0;">→ 적극재산이 소극재산보다 크므로 단순승인이 유리합니다. 채무는 상속재산으로 변제하고 나머지를 상속인이 나눕니다.</p>
</div>
<div class="calc-box">
<div class="scenario">사례 ② 채무가 재산보다 많은 경우 — 포기·한정승인 검토</div>
<div class="calc-row">
<span class="label">예금</span>
<span class="val-plus">＋ 2,000만 원</span>
</div>
<div class="calc-row">
<span class="label">은행 대출</span>
<span class="val-minus">－ 5,000만 원</span>
</div>
<div class="calc-row">
<span class="label">보증채무 (나중에 발견)</span>
<span class="val-minus">－ 3,000만 원</span>
</div>
<div class="calc-row total-row">
<span class="label" style="font-weight:700;">순(純) 상속재산</span>
<span class="val-minus">－ 6,000만 원 (초과채무)</span>
</div>
<p style="font-size:13.5px; color:#555; margin-top:12px; margin-bottom:0;">→ 채무가 재산을 초과합니다. 상속을 포기하거나 한정승인을 하여 본인 재산을 지켜야 합니다. 보증채무를 몰랐다면 <strong>특별한정승인</strong>(그 사실을 안 날로부터 3개월)도 가능합니다.</p>
</div>
<div class="case-box">
<div class="case-title">📋 사례 ③ — 부모님 보증채무를 모르고 단순승인했을 때</div>
<p>어머니가 돌아가신 후 부동산 등기를 하고 단순승인 처리를 마쳤습니다. 그런데 3개월 후 지인의 3,000만 원 보증인이 어머니였다는 사실이 밝혀졌습니다.</p>
<p><strong>→</strong> 상속채무가 상속재산을 초과하는 사실을 <strong>중대한 과실 없이 알지 못한 경우</strong>, 그 사실을 안 날부터 3개월 이내에 특별한정승인을 신청할 수 있습니다(민법 제1019조 제3항). 다만 이 기회를 놓치면 보증채무에 대해 무한책임을 질 수 있으므로 빠른 법적 조치가 필요합니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       3. 관련 판례
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 3</span> 관련 판례</h2>
<div class="ruling-box">
<div class="ruling-header">대법원 — 보증채무의 상속 (상속채무 포괄승계)</div>
<p>상속인은 피상속인의 모든 재산상 권리의무를 포괄적으로 승계하므로(민법 제1005조), 피상속인이 부담한 보증채무도 상속인에게 당연히 이전됩니다. 상속인이 보증채무의 존재를 몰랐다고 하여도 상속의 효력에는 영향이 없습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 — 생명보험금의 상속재산 제외 (수익자 고유재산)</div>
<p>생명보험계약에서 보험수익자가 지정된 경우, 보험금청구권은 보험수익자의 고유재산으로서 상속재산을 구성하지 않습니다. 따라서 상속포기를 한 경우에도 수익자로 지정된 상속인은 보험금을 수령할 수 있습니다.</p>
<p>다만 생명보험금은 상속재산 분할에서 특별수익으로 고려되거나, 유류분 계산 시 산입될 수 있습니다(대법원 2022.3.17. 선고 2020다267620 참조).</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 — 재판상 이혼청구권의 비상속성</div>
<p>재판상 이혼청구권은 부부 일신전속의 권리이므로, 이혼소송 계속 중 배우자 일방이 사망한 경우 상속인이 그 소송절차를 수계할 수 없습니다. 이혼소송은 당사자 사망과 동시에 종료됩니다. 생존 배우자는 유책 배우자라도 상속권이 있습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">헌법재판소 1998.8.27. 96헌가22 결정 — 특별한정승인 신설 계기</div>
<p>상속인이 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 알지 못하고 3개월의 고려기간이 지난 경우까지 단순승인의 효과를 강제하는 것은 헌법에 위배됩니다. 이 결정을 계기로 민법 제1019조 제3항의 특별한정승인 제도가 신설되었습니다(2002년 민법 개정).</p>
</div>
</section>
<!-- ════════════════════════════════════════
       4. 주의사항
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 4</span> 꼭 확인하세요</h2>
<div class="warn-box">
<div class="warn-title">⚠ 3개월의 고려기간은 모두에게 동시에 진행됩니다</div>
<p>상속 포기·한정승인의 기간은 <strong>상속개시가 있음을 안 날로부터 3개월</strong>입니다(민법 제1019조). 이 기간을 지나치면 단순승인이 되어 채무를 무한으로 책임져야 합니다. 재산 조사에 시간이 걸리더라도 기간 자체는 멈추지 않습니다. 조사가 길어질 것 같다면 우선 <strong>한정승인 또는 포기 신청을 먼저 해두는 것</strong>이 안전합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 상속재산을 처분하면 단순승인으로 간주됩니다</div>
<p>상속인이 상속재산을 처분(매각·증여·소비 등)하면 단순승인한 것으로 봅니다(민법 제1026조 제1호). 고려기간 중이라도 예금을 인출하거나 부동산을 처분하면 이후 한정승인이나 포기가 불가능해집니다. 재산 처분은 반드시 결정 이후에 해야 합니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 선순위 상속인이 포기하면 후순위가 상속인이 됩니다</div>
<p>자녀 전원이 상속을 포기하면 그 채무는 소멸하지 않습니다. 2순위인 부모(조부모)가 새로운 상속인이 됩니다. 가족 전체가 채무를 피하려면 모든 순위의 상속인이 순서에 맞게 포기해야 합니다. 이 과정을 법무사에게 일괄 위임하면 누락 없이 처리할 수 있습니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 상속재산과 상속인 고유재산은 혼동 전까지 별도입니다</div>
<p>단순승인 후에는 상속재산과 상속인의 고유재산이 합쳐져 채권자가 어느 재산에 대해서도 강제집행을 할 수 있습니다. 한정승인을 하면 상속채권자는 상속재산에 대해서만 권리를 주장할 수 있어 상속인의 고유재산이 보호됩니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       5. Q & A
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 5</span> 자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q1</span>
        아버지가 돌아가셨는데 빚이 많다고 합니다. 상속을 포기하면 빚을 안 갚아도 되나요?
      </div>
<div class="qna-a">
        네, 상속을 포기하면 아버지의 채무를 승계하지 않습니다. 다만, 상속 개시를 안 날로부터 <strong>3개월 이내</strong>에 가정법원에 상속포기 신고를 해야 합니다. 이 기간을 놓치면 단순승인이 되어 채무까지 모두 승계됩니다. 재산도 아무것도 받지 못하므로, 채무가 재산보다 훨씬 많을 때 선택하는 방법입니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q2</span>
        생명보험 수익자가 저(자녀)로 지정되어 있습니다. 상속을 포기해도 보험금을 받을 수 있나요?
      </div>
<div class="qna-a">
        네, 받을 수 있습니다. 생명보험금은 상속재산이 아니라 보험계약에 따라 <strong>수익자의 고유재산</strong>으로 귀속됩니다. 따라서 상속을 포기하더라도 보험수익자로 지정된 경우에는 보험금 청구가 가능합니다. 마찬가지로 유족연금·사망퇴직금도 상속포기와 무관하게 수령할 수 있습니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q3</span>
        돌아가신 아버지가 보증인이셨는데, 그 보증채무가 저한테 상속되나요?
      </div>
<div class="qna-a">
        네, 원칙적으로 보증채무도 상속됩니다. 피상속인의 재산·채무는 포괄 승계되므로, 보증 지위도 상속인에게 이전됩니다. 주채무자가 이행하지 않으면 채권자는 상속인에게 보증채무 이행을 청구할 수 있습니다. 보증채무를 몰랐다면 그 사실을 안 날로부터 3개월 이내 <strong>특별한정승인</strong>을 검토하십시오.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q4</span>
        피상속인의 재산이 얼마인지 어떻게 알 수 있나요?
      </div>
<div class="qna-a">
        사망자의 재산을 한 번에 조회하는 방법은 두 가지입니다. 첫째, <strong>정부24(gov.kr) 또는 가까운 주민센터</strong>에서 '사망자 재산조회 통합처리 신청'을 하면 금융·토지·자동차·세금 체납 등을 한 번에 조회할 수 있습니다. 둘째, <strong>금융감독원 금융민원센터</strong>에서 상속인 대상 금융거래조회를 신청하면 예금·보험·대출 내역을 확인할 수 있습니다. 부동산은 대법원 인터넷등기소에서 별도 확인합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q5</span>
        상속재산을 부동산만 받고 빚은 안 받겠다고 할 수 있나요?
      </div>
<div class="qna-a">
        아닙니다. 상속은 포괄승계이므로 특정 재산만 골라 받는 것은 원칙적으로 허용되지 않습니다. 좋은 재산만 선택하려면 가정법원의 허가 없이는 불가능합니다. 채무를 피하면서 일부 재산을 확보하고 싶다면 <strong>한정승인</strong>(상속재산 범위 내 채무 변제 후 남은 재산 취득)을 활용하는 것이 현실적입니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q6</span>
        이미 상속 등기를 마쳤는데, 나중에 빚이 발견되었습니다. 어떻게 해야 하나요?
      </div>
<div class="qna-a">
        등기를 마쳤더라도 반드시 단순승인이 확정된 것은 아닙니다. <strong>상속채무가 상속재산을 초과한다는 사실을 중대한 과실 없이 알지 못했다면</strong>, 그 사실을 안 날로부터 3개월 이내에 특별한정승인(민법 제1019조 제3항)을 신청할 수 있습니다. 다만, 이미 상속재산을 소비하거나 제3자에게 처분한 경우에는 단순승인 간주(민법 제1026조)에 해당할 수 있으므로 즉시 전문가와 상담하시기 바랍니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
</section>
<!-- ════════════════════════════════════════
       6. 다음으로 확인할 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 6</span> 다음으로 확인할 내용</h2>
<p>상속재산 범위를 파악했다면, 채무 대처 방법을 바로 확인하세요.</p>
<div class="next-links">
<a class="next-link" href="상속_05_포기vs한정승인.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">05번째 페이지</span>
<span class="title">포기 vs 한정승인 비교</span>
</span>
</a>
<a class="next-link" href="상속_06_상속포기절차.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">06번째 페이지</span>
<span class="title">상속포기 절차와 서류</span>
</span>
</a>
<a class="next-link" href="상속_07_한정승인절차.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">07번째 페이지</span>
<span class="title">한정승인 절차와 청산</span>
</span>
</a>
<a class="next-link" href="상속_02_상속인순위.html">
<span class="arrow">←</span>
<span class="link-text">
<span class="num">02번째 페이지</span>
<span class="title">상속인 순위 다시 보기</span>
</span>
</a>
</div>
</section>
<!-- ════════════════════════════════════════
       7. CTA
  ════════════════════════════════════════ -->
<!-- ════════════════════════════════════════
       8. 면책 문구
  ════════════════════════════════════════ -->
<div class="disclaimer-section">
<p><strong>법적 고지(면책 조항)</strong></p>
<p>이 페이지는 일반적인 법률 정보를 제공할 목적으로 작성되었으며, 법률 자문을 구성하지 않습니다. 개별 사안의 구체적인 사실관계·증거·당사자 관계에 따라 결과가 달라질 수 있으므로, 중요한 결정을 내리기 전에 반드시 자격을 갖춘 법무사·변호사와 상담하시기 바랍니다.</p>
<p>기재된 법령 조문 및 판례는 작성 시점을 기준으로 하며, 이후 법령 개정이나 판례 변경으로 내용이 달라질 수 있습니다. 최신 법령은 국가법령정보센터(law.go.kr)에서 확인하시기 바랍니다.</p>
</div>
</div><!-- /container -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-05', title: '승인·포기 선택 기준',
        meta: '단순승인·한정승인·상속포기 3가지 선택지 완전 비교',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ⚡ 기간 마감 배너 -->
<div class="deadline-banner">
<div class="icon">⏰</div>
<div class="text">
<strong>기간 주의 — 상속개시를 안 날로부터 3개월 이내</strong>
<p>이 기간을 넘기면 자동으로 단순승인이 됩니다. 채무가 많은 경우 돌이킬 수 없으니 반드시 기간 내에 결정하세요(민법 제1019조).</p>
</div>
</div>
<!-- ════════════════════════════════════════
       0. 이런 분께 필요합니다
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 0</span> 이런 분께 필요합니다</h2>
<div class="inh-checklist">
<ul>
<li>가족이 돌아가셨는데 빚이 있어 상속을 받을지 말지 고민 중인 분</li>
<li>상속포기와 한정승인 중 어느 것이 내 상황에 유리한지 판단하고 싶은 분</li>
<li>재산도 있고 채무도 있어서 득이 될지 실이 될지 모르는 분</li>
<li>3개월 기한이 다가오는데 아직 결정을 못 한 분</li>
<li>포기를 신청했는데 나중에 재산이 더 발견될까 걱정되는 분</li>
<li>상속포기 후 자녀(손자녀)에게 채무가 이어질까 불안한 분</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       1. 핵심 요약
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 1</span> 핵심 요약</h2>
<div class="summary-box">
<div class="label">🔑 이것만 기억하세요</div>
<ul>
<li><strong>단순승인</strong>: 아무것도 안 하면 자동. 재산·채무 전부 무한 승계. 채무 초과 시 내 재산까지 변제해야 합니다.</li>
<li><strong>한정승인</strong>: 상속재산 범위 내에서만 채무 변제. 남은 재산은 상속인에게. 단, 법원 신고와 청산 절차가 필요합니다.</li>
<li><strong>상속포기</strong>: 처음부터 상속인이 아닌 것으로 처리. 재산도, 채무도 없음. 선순위 전원 포기 시 후순위로 이어집니다.</li>
<li>3가지 모두 <strong>상속개시를 안 날로부터 3개월 이내</strong>에 결정해야 합니다(민법 제1019조).</li>
<li>상속재산을 처분하면 선택권을 잃고 <strong>자동 단순승인</strong>이 됩니다(민법 제1026조 제1호).</li>
<li>나중에 채무가 추가로 발견된 경우, <strong>특별한정승인</strong>(그 사실을 안 날로부터 3개월)이 가능할 수 있습니다(민법 제1019조 제3항).</li>
</ul>
</div>
</section>
<!-- ════════════════════════════════════════
       2. 상세 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 2</span> 상세 내용</h2>
<!-- 2-1 세 가지 선택지 -->
<h3>2-1. 세 가지 선택지 한눈에 비교</h3>
<div class="choice-grid">
<div class="choice-card simple">
<div class="cc-head">단순승인</div>
<div class="cc-badge">3개월 내 아무 행동 안 하면 자동</div>
<div class="cc-body">
<dl>
<dt>의미</dt>
<dd>피상속인의 재산·채무를 제한 없이 모두 승계</dd>
<dt>채무 책임</dt>
<dd>채무가 재산보다 많아도 본인 고유재산으로 무한 변제</dd>
<dt>신고 필요?</dt>
<dd>불필요 (자동 성립)</dd>
<dt>언제 유리?</dt>
<dd>적극재산이 소극재산보다 확실히 많을 때</dd>
</dl>
</div>
</div>
<div class="choice-card limited">
<div class="cc-head">한정승인</div>
<div class="cc-badge">재산목록 첨부 후 가정법원 신고</div>
<div class="cc-body">
<dl>
<dt>의미</dt>
<dd>상속재산 한도 내에서만 채무 변제, 초과분 책임 없음</dd>
<dt>채무 책임</dt>
<dd>상속으로 얻은 재산 내에서만 책임, 고유재산 보호</dd>
<dt>신고 필요?</dt>
<dd>3개월 내 가정법원 신고 + 재산목록 제출</dd>
<dt>언제 유리?</dt>
<dd>재산과 채무 비율이 불확실하거나, 재산 일부라도 남길 때</dd>
</dl>
</div>
</div>
<div class="choice-card waive">
<div class="cc-head">상속포기</div>
<div class="cc-badge">3개월 내 가정법원 신고</div>
<div class="cc-body">
<dl>
<dt>의미</dt>
<dd>처음부터 상속인이 아니었던 것으로 처리</dd>
<dt>채무 책임</dt>
<dd>없음. 단, 후순위 상속인으로 이어질 수 있음</dd>
<dt>신고 필요?</dt>
<dd>3개월 내 가정법원 신고 (재산목록 불필요)</dd>
<dt>언제 유리?</dt>
<dd>채무가 훨씬 많고 남길 재산이 거의 없을 때</dd>
</dl>
</div>
</div>
</div>
<!-- 2-2 선택 판단 기준 -->
<h3>2-2. 내 상황에 맞는 선택 판단하기</h3>
<div class="decision-flow">
<div class="df-title">🧭 상황별 선택 흐름 — 아래 순서대로 확인하세요</div>
<div class="df-step">
<div class="df-q">
<span class="q-num">Q1</span>
          피상속인의 재산과 채무를 이미 조사했나요?
        </div>
<div class="df-ans">
<span class="ans-tag no">아직 조사 전</span>
<span style="font-size:13px; color:#666;">→ 우선 정부24·금융감독원으로 조회 후 결정. 기간이 촉박하면 먼저 한정승인 신청 후 조사.</span>
</div>
</div>
<div class="df-step">
<div class="df-q">
<span class="q-num">Q2</span>
          적극재산이 소극재산(채무)보다 <strong>확실히 많고</strong> 은닉채무가 없을 가능성이 높나요?
        </div>
<div class="df-ans">
<span class="ans-tag yes">그렇다</span>
<span style="font-size:13px; color:#666;">→ 단순승인이 유리. 아무것도 안 해도 자동 성립됩니다.</span>
<span class="ans-tag no">불확실하다</span>
<span style="font-size:13px; color:#666;">→ Q3으로</span>
</div>
</div>
<div class="df-step">
<div class="df-q">
<span class="q-num">Q3</span>
          재산이 조금이라도 남아서 받고 싶거나, 채무 규모가 재산과 비슷한가요?
        </div>
<div class="df-ans">
<span class="ans-tag ok">재산 일부라도 남기고 싶다</span>
<span style="font-size:13px; color:#666;">→ <strong>한정승인</strong>. 청산 후 남는 재산을 받습니다.</span>
<span class="ans-tag go">재산이 거의 없고 채무만 있다</span>
<span style="font-size:13px; color:#666;">→ Q4으로</span>
</div>
</div>
<div class="df-step">
<div class="df-q">
<span class="q-num">Q4</span>
          선순위 상속인이 모두 포기할 경우 후순위(부모·형제 등)가 채무 부담을 질 수 있나요?
        </div>
<div class="df-ans">
<span class="ans-tag go">후순위도 채무가 오지 않도록 하고 싶다</span>
<span style="font-size:13px; color:#666;">→ <strong>전 순위 순차 포기</strong>. 모든 순위가 포기해야 채무 소멸(국가 귀속).</span>
<span class="ans-tag ok">나만 포기하면 충분하다</span>
<span style="font-size:13px; color:#666;">→ <strong>상속포기</strong>. 단, 후순위가 채무를 받는 상황 확인 필요.</span>
</div>
</div>
<div class="df-step">
<div class="df-q">
<span class="q-num">Q5</span>
          3개월 기간이 이미 지났거나 임박했나요?
        </div>
<div class="df-ans">
<span class="ans-tag warn">기간 지남·임박</span>
<span style="font-size:13px; color:#666;">→ 나중에 채무를 알았다면 <strong>특별한정승인</strong>(그 사실을 안 날로부터 3개월) 검토. 즉시 전문가 상담 필요.</span>
</div>
</div>
</div>
<!-- 2-3 상세 비교표 -->
<h3>2-3. 항목별 상세 비교표</h3>
<div class="table-wrap">
<table>
<thead>
<tr>
<th class="th-item">비교 항목</th>
<th class="th-simple">단순승인</th>
<th class="th-limited">한정승인</th>
<th class="th-waive">상속포기</th>
</tr>
</thead>
<tbody>
<tr>
<td class="item">근거</td>
<td>민법 제1025조<br/>제1026조</td>
<td>민법 제1028조<br/>제1030조</td>
<td>민법 제1041조<br/>제1042조</td>
</tr>
<tr>
<td class="item">재산 취득</td>
<td class="good center">전부 취득</td>
<td class="mid center">청산 후 잔여분</td>
<td class="bad center">없음</td>
</tr>
<tr>
<td class="item">채무 책임</td>
<td class="bad">무한책임<br/>(고유재산 포함)</td>
<td class="mid">상속재산 한도<br/>(고유재산 보호)</td>
<td class="good center">없음</td>
</tr>
<tr>
<td class="item">법원 신고</td>
<td class="good center">불필요</td>
<td class="bad center">필요<br/>(재산목록 첨부)</td>
<td class="bad center">필요</td>
</tr>
<tr>
<td class="item">청산 절차</td>
<td class="good center">없음</td>
<td class="bad">공고·변제·청산 필요<br/>(복잡)</td>
<td class="good center">없음</td>
</tr>
<tr>
<td class="item">후순위 영향</td>
<td class="good center">없음</td>
<td class="good center">없음</td>
<td class="bad">후순위 상속인에게<br/>채무 이전 가능</td>
</tr>
<tr>
<td class="item">생명보험금</td>
<td class="good center">수령 가능</td>
<td class="good center">수령 가능</td>
<td class="good center">수령 가능</td>
</tr>
<tr>
<td class="item">나중에 채무 발견</td>
<td class="bad">고유재산으로<br/>무한 변제</td>
<td class="mid">상속재산 한도로<br/>제한됨</td>
<td class="good center">관계없음<br/>(이미 포기)</td>
</tr>
<tr>
<td class="item">취소 가능?</td>
<td class="center" colspan="3" style="color:#666;">수리 후에는 원칙적으로 취소 불가 (사기·강박 등 예외적 사유만 가능)</td>
</tr>
</tbody>
</table>
</div>
<!-- 2-4 법정단순승인 위험 -->
<h3>2-4. 이것을 하면 자동으로 단순승인이 됩니다 <span class="law-tag">민법 제1026조</span></h3>
<p>다음 행위를 하면 법원에 신고를 하기 전이라도 <strong>단순승인이 확정</strong>되어 한정승인·포기를 할 수 없게 됩니다. 반드시 결정 전까지는 피해야 합니다.</p>
<div class="danger-list">
<div class="dl-head">⛔ 법정단순승인 사유 — 절대 피해야 할 행위</div>
<ul>
<li>
<span class="num">1</span>
<span><strong>상속재산 처분행위</strong> — 피상속인 명의 예금 인출, 부동산 매도·증여, 상속재산 소비 등 재산의 현상이나 가치를 변경하는 일체의 행위 (민법 제1026조 제1호). 포기 신청 후라도 <u>법원 수리 전</u> 처분하면 단순승인이 됩니다.</span>
</li>
<li>
<span class="num">2</span>
<span><strong>3개월 기간 내 아무 행동 안 함</strong> — 상속개시를 안 날로부터 3개월이 지나면 자동으로 단순승인됩니다(민법 제1026조 제2호). 단, 채무 초과 사실을 중대한 과실 없이 몰랐다면 특별한정승인 가능.</span>
</li>
<li>
<span class="num">3</span>
<span><strong>한정승인·포기 후 재산 은닉·부정소비·허위 재산목록 제출</strong> — 한정승인 또는 포기를 했더라도 이후 재산을 숨기거나 부정하게 소비하거나 재산목록을 허위로 기재하면 단순승인으로 간주됩니다(민법 제1026조 제3호).</span>
</li>
</ul>
</div>
<!-- 2-5 특별한정승인 -->
<h3>2-5. 기간을 놓쳤거나 나중에 채무가 발견된 경우 — 특별한정승인</h3>
<div class="special-box">
<div class="sp-title">🛡 특별한정승인 <span style="font-weight:400; font-size:12px; color:#666;">(민법 제1019조 제3항)</span></div>
<p>상속인이 <strong>중대한 과실 없이</strong> 상속채무가 상속재산을 초과하는 사실을 알지 못하고 단순승인(또는 법정단순승인)을 한 경우, <strong>그 사실을 안 날로부터 3개월 이내</strong>에 한정승인을 신청할 수 있습니다.</p>
<p>'중대한 과실'이란 상속인의 나이·직업·피상속인과의 관계·동거 여부 등을 고려하여 상속재산 관리의무를 현저히 결여한 경우를 말합니다. 단순히 재산조사를 게을리한 것만으로는 중대한 과실로 보기 어렵습니다.</p>
<p><strong>이 제도를 활용할 수 있는 대표 상황:</strong> 단순승인 후 보증채무·은행 대출이 추가 발견된 경우, 피상속인의 금융거래를 전혀 몰랐던 경우, 후순위 상속인으로서 선순위 포기 이후 비로소 상속인이 된 경우.</p>
</div>
<!-- 2-6 사례 -->
<h3>2-6. 실제 사례로 이해하기</h3>
<div class="case-box">
<div class="case-title">📋 사례 ① — 재산이 확실히 많은 경우 (단순승인)</div>
<p>아버지가 돌아가셨고, 시세 4억 원의 아파트와 1억 원의 예금을 남기셨습니다. 대출은 8,000만 원입니다. 재산 합계 5억, 채무 8,000만 원으로 적극재산이 확실히 많습니다.</p>
<p><strong>→</strong> 단순승인이 유리합니다. 3개월 내 아무 행동도 하지 않으면 자동 단순승인됩니다. 이후 상속등기 및 예금 해지 절차를 진행하면 됩니다.</p>
</div>
<div class="case-box">
<div class="case-title">📋 사례 ② — 재산과 채무 비율이 불분명한 경우 (한정승인)</div>
<p>어머니가 남기신 재산은 작은 토지(시세 2,000만 원), 채무는 은행 대출 1,500만 원인데, 보증채무가 있다는 말을 들었습니다. 보증 규모가 얼마인지 확인 중입니다.</p>
<p><strong>→</strong> 불확실한 상황에서는 한정승인이 안전합니다. 한정승인 신청 후 청산 절차에서 보증채무가 드러나더라도, 상속재산(토지 2,000만 원) 한도 내에서만 책임집니다. 본인 고유재산은 보호됩니다.</p>
</div>
<div class="case-box">
<div class="case-title">📋 사례 ③ — 채무만 남겨진 경우 (상속포기·순차 포기)</div>
<p>아버지가 재산 없이 3,000만 원의 대출만 남기고 돌아가셨습니다. 상속인은 어머니(배우자), 아들(A), 딸(B), 그리고 친조부모가 있습니다.</p>
<p><strong>→</strong> 어머니·A·B가 모두 포기하면 채무는 친조부모(2순위)에게 이전됩니다. 조부모도 포기해야 3순위(형제자매)로 이어집니다. 채무를 완전히 소멸시키려면 <strong>모든 순위의 상속인이 순서대로 포기</strong>해야 합니다. 대법원 예규에 따라 선순위 포기 전에 후순위도 미리 포기 신고를 할 수 있습니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       3. 관련 판례
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 3</span> 관련 판례</h2>
<div class="ruling-box">
<div class="ruling-header">대법원 1998.7.24. 선고 98다9021 판결 — 생전 포기 약정의 무효</div>
<p>유류분을 포함한 상속의 포기는 상속이 개시된 후 일정한 기간 내에만 가능하고 가정법원에 신고하는 등 일정한 절차와 방식을 따라야만 효력이 있습니다. 따라서 <strong>상속개시 전에 한 상속포기 약정은 효력이 없습니다.</strong> 사망 전에 "포기하겠다"는 각서를 작성했더라도 상속개시 후 법원에 신고하지 않으면 유효한 포기가 아닙니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 2010.4.29. 선고 2009다84936 판결 — 처분 후 포기 신고의 효력</div>
<p>상속인이 가정법원에 상속포기 신고를 하였더라도 이를 수리하는 법원 심판이 고지되기 이전에 상속재산을 처분하였다면, 이는 단순승인 간주 사유(민법 제1026조 제1호)에 해당합니다. 그 후 상속포기 신고가 수리되더라도 상속포기로서의 효력이 없습니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 2006.2.10. 선고 2004다33865 판결 — 3개월 기산점</div>
<p>상속개시 있음을 안 날이라 함은 상속인이 <strong>피상속인의 사망 사실과 자기가 상속인이 되었음을 안 날</strong>을 말합니다. 상속재산의 유무를 안 날이나 상속포기 제도를 안 날을 의미하지 않습니다. 선순위 상속인의 포기로 본인이 뒤늦게 상속인이 된 경우에는 그 사실을 안 날이 기산점입니다.</p>
</div>
<div class="ruling-box">
<div class="ruling-header">대법원 2002.11.8. 선고 2002다21882 판결 — 특별한정승인의 소급 적용</div>
<p>헌법재판소의 1998년 96헌가22 결정 이후, 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 알지 못하고 단순승인한 경우에 대해 특별한정승인 제도가 소급 적용됩니다. 개정 민법 부칙의 경과조치 범위에 포함되지 않더라도, 위헌성이 제거된 개정 민법 규정이 적용됩니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       4. 주의사항
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 4</span> 꼭 확인하세요</h2>
<div class="warn-box">
<div class="warn-title">⚠ 한정승인은 신청만 하면 끝이 아닙니다 — 청산 절차 필수</div>
<p>한정승인이 수리된 후에는 5일 이내 채권자에 대한 공고·최고를 해야 하고, 변제 순서(유치권→질권→저당권→우선변제권→일반채권 순)에 따라 청산해야 합니다. 이 절차를 지키지 않으면 상속채권자에게 손해배상 책임이 생길 수 있습니다. 부동산이 있는 경우 법원경매 절차가 필요할 수 있어 복잡도가 높습니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 포기 후 수리 심판 전에는 상속재산에 손대지 마세요</div>
<p>포기 신고서를 제출했더라도 법원 수리 심판이 고지되기 전까지는 상속재산을 처분하거나 인출하면 안 됩니다. 이 경우 법정단순승인이 성립하여 포기 효력이 소멸합니다(대법원 2009다84936). 포기 신고 수리 통지를 받은 후에 비로소 재산을 정리하세요.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 미성년 자녀가 있는 경우 법정대리인이 함께 신고해야 합니다</div>
<p>미성년자 상속인이 있는 경우, 3개월의 숙려기간은 <strong>법정대리인(친권자·후견인)이 상속개시 사실을 안 날</strong>부터 기산합니다(민법 제1020조). 부모가 포기하더라도 미성년 자녀의 포기는 별도로 법정대리인이 신청해야 합니다. 이때 이해충돌이 있으면 특별대리인 선임이 필요할 수 있습니다.</p>
</div>
<div class="warn-box">
<div class="warn-title">⚠ 한 번 수리된 한정승인·포기는 취소할 수 없습니다</div>
<p>법원이 한정승인 또는 포기를 수리한 후에는 숙려기간 내라도 취소할 수 없습니다(민법 제1024조). 단, 사기·강박·제한능력자의 동의 없는 신고 등 의사표시 하자가 있는 경우에는 취소 가능하며, 취소는 추인할 수 있는 날로부터 3개월, 한정승인·포기한 날로부터 1년 내에 해야 합니다.</p>
</div>
</section>
<!-- ════════════════════════════════════════
       5. Q & A
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 5</span> 자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q1</span>
        포기와 한정승인 중 어느 것을 선택해야 할지 모르겠습니다. 일단 한정승인을 하면 안전한가요?
      </div>
<div class="qna-a">
        네, 채무 규모가 불확실한 경우 <strong>한정승인이 더 안전한 선택</strong>입니다. 한정승인을 하면 최소한 상속재산 범위 내에서만 책임지므로 고유재산은 보호됩니다. 만약 재산이 채무보다 많다면 청산 후 남은 재산을 받을 수도 있습니다. 단, 법원 신고와 이후 청산 절차가 필요합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q2</span>
        아버지 명의 통장에서 장례비용을 인출했는데, 이게 단순승인이 되나요?
      </div>
<div class="qna-a">
        법원 실무상 <strong>장례비·상속세·공과금 납부 등 상속재산 보존을 위한 행위</strong>는 상속재산의 처분행위로 보지 않는 경향이 있습니다. 그러나 이를 초과하여 예금을 인출하거나 피상속인의 채권을 추심하면 처분행위에 해당하여 단순승인으로 간주될 수 있습니다. 판단이 명확하지 않은 경우 반드시 법무사·변호사와 상담 후 결정하세요.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q3</span>
        자녀들이 모두 포기하면 빚이 손자녀에게 넘어가나요?
      </div>
<div class="qna-a">
        자녀 전원이 상속포기를 하면 손자녀는 대습상속인이 되지 않습니다(상속포기는 대습상속 원인이 아님). 대신 2순위(조부모)가 새로운 상속인이 됩니다. 따라서 손자녀에게 채무가 직접 이전되지는 않지만, 조부모·형제자매 등 후순위 상속인이 채무를 떠안게 됩니다. 후순위까지 채무를 피하려면 모든 순위의 상속인이 순서대로 포기해야 합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q4</span>
        3개월이 지났는데 나중에 큰 빚이 발견되었습니다. 방법이 없나요?
      </div>
<div class="qna-a">
<strong>특별한정승인</strong>(민법 제1019조 제3항)을 검토하세요. 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 알지 못하고 단순승인한 경우, 그 사실을 안 날로부터 3개월 이내에 한정승인 신청이 가능합니다. '중대한 과실'은 엄격하게 해석되므로, 보증채무처럼 피상속인이 숨긴 경우나 후순위로 뒤늦게 상속인이 된 경우에는 인정 가능성이 높습니다. 즉시 전문가와 상담하시기 바랍니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q5</span>
        공동상속인 중 일부는 포기, 나머지는 한정승인을 해도 되나요?
      </div>
<div class="qna-a">
        네, 공동상속인 각자가 독립적으로 단순승인·한정승인·포기를 선택할 수 있습니다. 포기한 상속인의 몫은 다른 상속인의 상속분 비율에 따라 귀속됩니다. 일부가 한정승인하면 한정승인한 상속인은 상속재산 범위 내에서만 책임지고, 단순승인한 상속인은 무한책임을 집니다. 혼재된 경우 청산 절차가 복잡해지므로 전문가와 함께 진행하는 것이 좋습니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q6</span>
        한정승인을 하면 상속세도 내야 하나요?
      </div>
<div class="qna-a">
        한정승인을 하더라도 상속세 과세 대상이 되는 재산이 있으면 원칙적으로 상속세를 신고해야 합니다. 다만, 상속세는 상속받은 재산의 가액을 기준으로 부과되므로 채무가 많아 순재산이 거의 없다면 실제 납부세액이 없거나 적을 수 있습니다. 상속세 신고 기한은 상속개시일이 속하는 달의 말일부터 <strong>6개월 이내</strong>입니다. 한정승인과 상속세 신고를 함께 진행해야 합니다.
        <div class="disclaimer">위 내용은 일반적인 경우를 안내한 것으로, 실제 상황에 따라 결과가 달라질 수 있습니다. 구체적인 사안은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
</section>
<!-- ════════════════════════════════════════
       6. 다음으로 확인할 내용
  ════════════════════════════════════════ -->
<section>
<h2><span class="tag">STEP 6</span> 다음으로 확인할 내용</h2>
<p>선택을 결정했다면, 각 절차 페이지에서 구체적인 신청 방법을 확인하세요.</p>
<div class="next-links">
<a class="next-link" href="상속_06_상속포기절차.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">06번째 페이지</span>
<span class="title">상속포기 절차와 서류</span>
</span>
</a>
<a class="next-link" href="상속_07_한정승인절차.html">
<span class="arrow">→</span>
<span class="link-text">
<span class="num">07번째 페이지</span>
<span class="title">한정승인 절차와 청산</span>
</span>
</a>
<a class="next-link" href="상속_04_상속재산범위.html">
<span class="arrow">←</span>
<span class="link-text">
<span class="num">04번째 페이지</span>
<span class="title">상속재산 범위 다시 보기</span>
</span>
</a>
<a class="next-link" href="상속_02_상속인순위.html">
<span class="arrow">←</span>
<span class="link-text">
<span class="num">02번째 페이지</span>
<span class="title">상속인 순위 확인</span>
</span>
</a>
</div>
</section>
<!-- ════════════════════════════════════════
       7. CTA
  ════════════════════════════════════════ -->
<!-- ════════════════════════════════════════
       8. 면책 문구
  ════════════════════════════════════════ -->
<div class="disclaimer-section">
<p><strong>법적 고지(면책 조항)</strong></p>
<p>이 페이지는 일반적인 법률 정보를 제공할 목적으로 작성되었으며, 법률 자문을 구성하지 않습니다. 개별 사안의 구체적인 사실관계·증거·당사자 관계에 따라 결과가 달라질 수 있으므로, 중요한 결정을 내리기 전에 반드시 자격을 갖춘 법무사·변호사와 상담하시기 바랍니다.</p>
<p>기재된 법령 조문 및 판례는 작성 시점을 기준으로 하며, 이후 법령 개정이나 판례 변경으로 내용이 달라질 수 있습니다. 최신 법령은 국가법령정보센터(law.go.kr)에서 확인하시기 바랍니다.</p>
</div>
</div><!-- /container -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-06', title: '상속포기',
        meta: '가정법원 신고부터 수리 심판까지 — 단계별 완전 안내',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ── 헤더 ── -->

<!-- ── 기간 경고 배너 ── -->
<div style="max-width:860px;margin:0 auto;padding:0 20px;">
<div class="deadline-banner">
<div class="dl-icon">⏰</div>
<div class="dl-body">
<strong>상속포기 신고 기한 — 사망일로부터 3개월 이내</strong>
<p>상속포기는 상속개시 있음을 안 날로부터 <strong>3개월</strong> 내에 가정법원에 신고해야 합니다(민법 제1019조 제1항). 기한을 넘기면 단순승인으로 간주되어 모든 빚을 떠안게 됩니다. 지금 즉시 진행 여부를 결정하시기 바랍니다.</p>
</div>
</div>
</div>
<main>
<!-- ── 0. 이런 분께 ── -->
<section id="for-whom">
<h2>이런 분께 이 안내가 필요합니다</h2>
<ul class="check-list">
<li>가족이 사망하여 상속이 개시되었으나, 재산보다 빚이 더 많다고 판단하시는 분</li>
<li>상속포기를 결정했고, 구체적으로 어떤 서류를 준비하고 어디에 내야 하는지 알고 싶으신 분</li>
<li>본인뿐 아니라 자녀(미성년자 포함)도 함께 포기해야 하는 상황인 분</li>
<li>차순위 상속인으로서, 선순위 상속인이 이미 포기한 후 나에게 상속이 넘어올 상황인 분</li>
<li>3개월 기한 내에 어떻게 처리해야 하는지 절차 전반이 궁금하신 분</li>
</ul>
</section>
<!-- ── 1. 핵심 요약 ── -->
<section id="summary">
<h2>핵심 요약</h2>
<div class="summary-box">
<div class="summary-title">📋 상속포기 절차 핵심 포인트</div>
<ul>
<li><strong>신고 기한:</strong> 상속개시 있음을 안 날로부터 3개월 이내 가정법원에 신고</li>
<li><strong>관할 법원:</strong> 피상속인(망자)의 마지막 주소지 관할 가정법원</li>
<li><strong>효과:</strong> 소급하여 처음부터 상속인이 아니었던 것으로 간주 (민법 제1042조)</li>
<li><strong>연쇄 효과 주의:</strong> 포기하면 다음 순위 상속인에게 상속이 이전 → 가족 모두 함께 검토 필요</li>
<li><strong>미성년자 포함 시:</strong> 법정대리인(부모) 모두의 인감증명서가 필요</li>
<li><strong>제출 방식:</strong> 청구서 + 첨부서류 → 가정법원 접수 → 심리(서면심리 원칙) → 수리 심판</li>
</ul>
</div>
<div class="effect-grid">
<div class="effect-card blue">
<div class="ec-label">포기의 법적 성질</div>
<div class="ec-title">상속권의 포기</div>
<div class="ec-body">상속인의 일방적 의사표시로, 상대방의 동의 없이도 유효하게 성립합니다.</div>
</div>
<div class="effect-card green">
<div class="ec-label">소급 효력</div>
<div class="ec-title">상속개시 시점으로 소급</div>
<div class="ec-body">포기가 수리되면 처음부터 상속인이 아니었던 것으로 처리됩니다(민법 제1042조).</div>
</div>
<div class="effect-card orange">
<div class="ec-label">연쇄 이전</div>
<div class="ec-title">다음 순위로 상속 이전</div>
<div class="ec-body">단독상속인이 포기하면 다음 순위 상속인이 상속인이 됩니다(민법 제1043조).</div>
</div>
<div class="effect-card purple">
<div class="ec-label">공동상속인 중 1인 포기</div>
<div class="ec-title">잔여 상속인 비례 귀속</div>
<div class="ec-body">1인이 포기한 몫은 나머지 공동상속인의 법정상속분 비율대로 나뉩니다.</div>
</div>
</div>
</section>
<!-- ── 2. 절차 흐름도 ── -->
<section id="flow">
<h2>한눈에 보는 상속포기 절차 흐름도</h2>
<div class="flow-wrap">
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">1</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">상속 여부 파악 및 결정</div>
<div class="fc-sub">망인의 재산(적극재산)과 채무(소극재산)를 조회하고, <em>포기·한정승인·단순승인</em> 중 선택합니다.<br/>재산 조회: 금융감독원 상속인 금융거래 조회, 안심상속원스톱서비스(행안부), 국세청 체납세금 조회</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">2</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">청구서 작성</div>
<div class="fc-sub">「상속포기 신고서」를 작성합니다. 청구취지: <em>"청구인들이 망 ○○○의 재산상속을 포기하는 신고는 이를 수리한다"</em><br/>청구인(상속포기 신고인), 상대방(없음), 사건 본인(피상속인 및 상속인 기재)</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">3</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">첨부서류 준비</div>
<div class="fc-sub">가족관계증명서·기본증명서·제적등본·인감증명서 등 필요 서류를 수집합니다.<br/>미성년자의 경우 <em>법정대리인(부모 전원)의 인감증명서</em>가 추가로 필요합니다.</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">4</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">관할 가정법원 접수</div>
<div class="fc-sub"><em>피상속인의 마지막 주소지 관할 가정법원</em>에 청구서와 첨부서류를 제출합니다.<br/>피상속인의 주소가 외국인 경우: 대법원 소재지 가정법원(서울가정법원)에 제출합니다.</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">5</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">법원 심리 (서면 심리 원칙)</div>
<div class="fc-sub">가정법원은 서류를 검토합니다. 대부분 별도 출석 없이 서면 심리로 진행됩니다.<br/>보정이 필요한 경우 법원에서 보정 명령을 내립니다.</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">6</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">수리 심판 및 확정</div>
<div class="fc-sub">법원이 상속포기 신고를 수리하는 심판을 내립니다.<br/>심판서 정본 + 확정증명서를 수령합니다. 이후 채권자에게 심판서 등본을 제시할 수 있습니다.</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">7</div>
</div>
<div class="flow-content">
<div class="fc-title">차순위 상속인 확인 및 고지</div>
<div class="fc-sub">포기로 인해 다음 순위 상속인에게 상속이 이전됩니다.<br/><em>차순위 상속인도 3개월 기한 내에 포기 여부를 결정</em>해야 하므로, 빠른 고지가 필요합니다.<br/>차순위 상속인은 선순위 포기 심판서 등본 및 확정증명서를 함께 제출합니다.</div>
</div>
</div>
</div>
</section>
<!-- ── 3. 단계별 상세 설명 ── -->
<section id="step-detail">
<h2>단계별 상세 설명</h2>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-num-badge">1</div>
<div class="step-title">상속 재산 조회 — 포기 전 반드시 확인하세요</div>
</div>
<div class="step-detail-body">
<p>상속포기는 한 번 수리되면 취소할 수 없습니다. 포기를 결정하기 전에 망인의 재산 현황을 정확하게 파악하는 것이 중요합니다.</p>
<ul>
<li><strong>금융거래 조회:</strong> 금융감독원 상속인 금융거래 조회 서비스 신청 (은행·보험·증권 등 일괄 조회)</li>
<li><strong>안심상속 원스톱 서비스:</strong> 주민센터 또는 정부24 → 부동산·금융·채무·국세 등 종합 조회</li>
<li><strong>부동산 확인:</strong> 망인 명의 토지·건물 등기부 열람 (법원 인터넷등기소)</li>
<li><strong>채무 확인:</strong> 국세 체납(국세청), 지방세 체납(위택스), 건강보험료(건강보험공단)</li>
</ul>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-num-badge">2</div>
<div class="step-title">청구서 작성 — 기재 방법과 유의사항</div>
</div>
<div class="step-detail-body">
<p>상속포기 신고서는 가정법원 민원실 또는 대한법원 사이트에서 양식을 구할 수 있습니다.</p>
<ul>
<li><strong>사건 구분:</strong> 가사비송 라류 사건 (인지액 청구인 1인당 규정 금액)</li>
<li><strong>청구취지 기재례:</strong> "청구인들이 망 이○화의 재산상속을 포기하는 신고는 이를 수리한다"</li>
<li><strong>청구인:</strong> 상속포기를 하려는 상속인 전원 또는 일부 기재</li>
<li><strong>피상속인 표시:</strong> 성명, 주민등록번호, 최후 주소, 사망일 기재</li>
<li><strong>미성년자인 경우:</strong> 청구인란에 '법정대리인 ○○○'으로 기재</li>
</ul>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-num-badge">3</div>
<div class="step-title">법원 접수 및 심리 — 어디에 어떻게 내나요</div>
</div>
<div class="step-detail-body">
<p>청구서와 첨부서류를 준비했다면, 관할 가정법원 민원접수처에 직접 방문하거나 우편으로 제출할 수 있습니다.</p>
<ul>
<li><strong>관할:</strong> 피상속인의 마지막 주소지 관할 가정법원 <span class="law-cite">가사소송법 제44조</span></li>
<li><strong>해외 주소:</strong> 대법원 소재지 가정법원(서울가정법원)에 제출</li>
<li><strong>심리 방식:</strong> 서면심리 원칙 — 별도 출석 없이 서류 검토로 진행</li>
<li><strong>보정 명령:</strong> 서류 누락 시 법원이 보정 명령을 내리며, 보정 기간 내 보완 필요</li>
</ul>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-num-badge">4</div>
<div class="step-title">수리 심판 이후 — 확정 후 처리 사항</div>
</div>
<div class="step-detail-body">
<p>법원이 상속포기 신고를 수리하면 심판서 정본을 교부받습니다. 이후 다음 사항을 처리합니다.</p>
<ul>
<li><strong>확정증명서 발급:</strong> 심판 확정 후 확정증명서 신청 → 채권자 대응 시 제시</li>
<li><strong>채권자 대응:</strong> 상속포기 심판서 등본·확정증명서를 채권자에게 제시하여 청구 차단</li>
<li><strong>차순위 상속인 고지:</strong> 포기로 인해 다음 순위로 상속이 이전되므로 신속히 통지</li>
<li><strong>차순위 포기 서류:</strong> 차순위 상속인이 신고 시 선순위 포기 심판서 등본+확정증명서 첨부 <span class="law-cite">예규 제3조</span></li>
</ul>
</div>
</div>
</section>
<!-- ── 4. 준비 서류 ── -->
<section id="documents">
<h2>준비 서류 목록</h2>
<div class="doc-section">
<div class="doc-section-title">📁 피상속인(망자) 관련 서류</div>
<ul class="doc-list">
<li>가족관계증명서 (피상속인) 1통</li>
<li>기본증명서 (피상속인) 1통</li>
<li>말소자 주민등록표등본 (피상속인) 1통</li>
<li>제적등본 (피상속인) 1통</li>
</ul>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 상속인(포기 신고인) 관련 서류</div>
<ul class="doc-list">
<li>가족관계증명서 (상속인) 각 1통</li>
<li>기본증명서 (상속인) 각 1통</li>
<li>주민등록표등본 (상속인) 각 1통</li>
<li>인감증명서 (상속인) 각 1통</li>
</ul>
<div class="doc-note">
<strong>미성년자 포함 시 추가 서류:</strong> 법정대리인(부모) 전원의 인감증명서 각 1통이 추가로 필요합니다. 부 또는 모 한쪽만의 인감으로는 부족합니다.
    </div>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 직계비속이 아닌 경우 추가 서류</div>
<ul class="doc-list">
<li>가계도 (피상속인과의 관계를 나타내는 도표) 1통</li>
</ul>
<div class="doc-note">
      형제자매, 직계존속 등 직계비속이 아닌 상속인이 신고할 경우, 피상속인과의 친족 관계를 명시한 가계도를 첨부합니다.
    </div>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 차순위 상속인이 신고하는 경우 추가 서류</div>
<ul class="doc-list">
<li>선순위 상속인의 상속포기 심판서 등본</li>
<li>선순위 상속인의 상속포기 확정증명서</li>
</ul>
<div class="doc-note">
      선순위 상속인 전원이 포기한 후 차순위 상속인이 신고할 경우, 선순위의 포기가 확정되었음을 증명하는 서류를 함께 제출합니다. 선순위와 차순위 상속인은 동시에 신고도 가능합니다(예규 제3조).
    </div>
</div>
</section>
<!-- ── 5. 비용 안내 ── -->
<section id="cost">
<h2>비용 안내</h2>
<p>상속포기 신고는 가사비송 라류 사건으로 처리되며, 법원 수수료가 발생합니다. 아래 항목별로 비용이 산정됩니다. 정확한 금액은 법원 접수 시 확인하거나 법무사에게 문의하시기 바랍니다.</p>
<table class="cost-table">
<thead>
<tr>
<th>항목</th>
<th>산정 기준</th>
<th>비고</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>인지액</strong></td>
<td>청구인 1인당 일정 금액<br/>(가사비송 라류 기준)</td>
<td>청구인 수에 비례하여 증가</td>
</tr>
<tr>
<td><strong>송달료</strong></td>
<td>회당 단가 × 6회 × 청구인 수</td>
<td>접수 시 납부 (예납금 형식)</td>
</tr>
<tr>
<td><strong>법무사 보수</strong></td>
<td>법무사 보수 규정에 따름</td>
<td>청구서 작성·접수 대리 시</td>
</tr>
<tr>
<td><strong>서류 발급 비용</strong></td>
<td>각 증명서 발급 수수료</td>
<td>주민센터·법원 민원실 발급 시</td>
</tr>
</tbody>
</table>
<div class="cost-note">※ 이 안내에는 정확한 금액을 기재하지 않습니다. 법원 수수료는 사건 규모 및 청구인 수에 따라 달라질 수 있으므로, 법원 민원실 또는 법무사 사무실에 문의하여 정확한 금액을 확인하시기 바랍니다.</div>
</section>
<!-- ── 8. Q&A ── -->
<section id="qa">
<h2>자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>상속포기를 하면 망인의 모든 채무가 없어지는 건가요?</div>
<div class="qna-a">
<p>그렇지 않습니다. 상속포기는 포기한 사람에게만 효력이 있고, 채무 자체가 소멸하는 것은 아닙니다. 포기한 상속인에게는 채무 청구를 할 수 없지만, 다음 순위 상속인이 상속을 받게 되면 그 상속인이 채무를 부담하게 됩니다.</p>
<p>모든 상속인이 최종적으로 포기하는 경우, 상속재산은 국가에 귀속됩니다(민법 제1058조). 이때는 채권자가 상속재산 청산 절차를 통해 변제를 받게 됩니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다. 개별 사안에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>사망한 사실을 늦게 알았는데, 3개월이 이미 지났습니다. 어떻게 하나요?</div>
<div class="qna-a">
<p>기한 계산의 기준은 "상속개시 있음을 안 날"입니다. 사망 사실을 뒤늦게 알았다면, 그 인식 시점으로부터 3개월이 기산됩니다. 다만, 법원에 청구할 때 상속 개시 사실을 알게 된 시점을 소명하는 자료를 반드시 첨부해야 합니다.</p>
<p>만약 이미 3개월이 경과하여 상속포기가 불가능한 상황이라면, 나중에 채무의 존재를 알게 된 경우 특별한정승인(민법 제1019조 제3항)도 검토해볼 수 있습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>형제 중 저만 포기할 수 있나요? 다른 형제도 같이 해야 하나요?</div>
<div class="qna-a">
<p>공동상속인 중 일부만 포기하는 것도 가능합니다. 포기한 상속인의 상속분은 나머지 상속인들의 법정상속분 비율에 따라 귀속됩니다.</p>
<p>다만, 나머지 형제들이 더 많은 채무를 부담하게 될 수 있으므로, 포기 전에 가족 간에 충분한 협의를 하는 것이 바람직합니다. 각자의 상황에 맞게 포기 또는 한정승인을 선택할 수 있습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>어린 자녀(미성년)도 상속포기를 할 수 있나요?</div>
<div class="qna-a">
<p>미성년 자녀도 상속포기를 할 수 있습니다. 다만 미성년자는 단독으로 법률행위를 할 수 없으므로, 법정대리인인 부모가 대리하여 신고를 해야 합니다. 이때 부모 전원의 인감증명서가 필요합니다.</p>
<p>단, 부모 중 한 사람이 이미 사망하여 없거나, 부모가 미성년자와 이해관계가 충돌하는 경우(예: 부모는 포기하고 자녀만 상속받는 경우)에는 특별대리인을 선임해야 합니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>부산에 살고 있는데, 망인의 주소는 서울입니다. 어느 법원에 내야 하나요?</div>
<div class="qna-a">
<p>상속포기 신고는 신청인(상속인)의 주소지가 아닌, 피상속인(망인)의 마지막 주소지를 관할하는 가정법원에 제출해야 합니다. 망인의 주소가 서울이라면 서울가정법원에 제출합니다.</p>
<p>직접 방문이 어려운 경우 우편으로 제출하는 것도 가능합니다. 다만 기한이 촉박한 경우 법무사에게 대리를 의뢰하거나, 직접 방문하여 접수 처리가 정확히 이루어지도록 하는 것이 안전합니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>수리 기간은 얼마나 걸리나요?</div>
<div class="qna-a">
<p>법원에 따라 다르지만, 서류에 문제가 없다면 통상 2~4주 이내에 수리 심판이 내려집니다. 보정(서류 보완) 명령이 있으면 그만큼 지연될 수 있습니다.</p>
<p>심판서가 나오면 확정증명서도 별도로 신청하여 발급받습니다. 이 확정증명서가 있어야 채권자에게 공식적으로 포기 사실을 주장할 수 있습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
</section>
<!-- ── 6. 관련 판례 ── -->
<section id="rulings">
<h2>관련 판례</h2>
<div class="ruling-card">
<div class="ruling-cite">대법원 1998. 7. 24. 선고 98다9021 판결</div>
<div class="ruling-text">상속포기는 가정법원에 신고하고 그 수리 심판이 있어야 효력이 발생하며, 상속인들 사이의 사적 합의로써 상속을 포기하였다는 약정은 법률상 상속포기의 효력이 없다.</div>
<div class="ruling-point">실무 포인트: 가족 간 "내가 포기할게"라고 말하거나 서면에 서명한 것만으로는 상속포기의 효력이 없습니다. 반드시 가정법원의 수리 심판이 있어야 합니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2004. 7. 9. 선고 2003다48524 판결</div>
<div class="ruling-text">상속포기의 신고가 수리된 이상 이를 취소하는 것은 원칙적으로 허용되지 않으며, 사기·강박·착오에 의한 경우에 한하여 민법의 의사표시 규정에 따라 취소를 주장할 수 있다.</div>
<div class="ruling-point">실무 포인트: 수리된 상속포기는 사실상 취소가 불가능합니다. 포기 전에 재산 현황을 충분히 조사하고 신중하게 결정해야 합니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2009. 5. 14. 선고 2009다84936 판결</div>
<div class="ruling-text">상속포기 신고를 하지 않은 채 상속재산에 관한 처분행위를 하였다면 민법 제1026조 제1호에 따른 법정단순승인이 성립하고, 이후 상속포기 신고를 하더라도 이미 성립한 단순승인의 효력을 번복할 수 없다.</div>
<div class="ruling-point">실무 포인트: 상속재산을 조금이라도 처분(인출, 사용 등)하면 법정단순승인이 성립합니다. 포기 예정이라면 절대 상속재산에 손대지 마십시오.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 1995. 9. 26. 선고 95다27769 판결</div>
<div class="ruling-text">상속포기는 상속의 개시 있음을 안 날로부터 3개월 이내에 해야 하나, 이 기간을 넘긴 경우에도 상속채무의 존재를 인식하지 못하고 있었던 데에 정당한 이유가 있는 때에는 특별한정승인을 주장할 수 있다.</div>
<div class="ruling-point">실무 포인트: 3개월 기한을 넘긴 경우에도 특별한정승인(민법 제1019조 제3항) 요건 충족 여부를 검토해볼 수 있습니다.</div>
</div>
</section>
<!-- ── 7. 주의사항 ── -->
<section id="warnings">
<h2>주의사항</h2>
<div class="warn-card">
<div class="warn-title">⚠️ 상속재산 처분 절대 금지 — 법정단순승인 위험</div>
<p>포기를 결정한 경우, 포기 수리 전까지 망인의 재산을 절대 처분하거나 사용해서는 안 됩니다. 상속재산을 처분하면 법정단순승인(민법 제1026조 제1호)이 성립하여 포기 의사가 있어도 모든 채무를 승계하게 됩니다.</p>
<ul>
<li>처분 금지 행위 예시: 예금 인출 및 사용, 부동산 처분·점유, 채권 행사, 채무 일부 변제</li>
<li>장례비 등 필요 비용은 상속재산 관리의 범위 내에서 인정될 수 있으나, 법원 해석에 따라 다를 수 있습니다.</li>
</ul>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 3개월 기한 경과 시 소명 필요</div>
<p>피상속인 사망일로부터 3개월이 지난 후 청구하는 경우, 상속개시 사실을 언제 알았는지를 소명하는 자료가 필요합니다. 단순히 기한이 지났다는 이유만으로 각하될 수 있으므로, 상속 개시 인식 시점을 입증할 수 있는 서류(연락 기록, 사실 확인서 등)를 준비하십시오.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 차순위 상속인에게 즉시 고지하세요</div>
<p>상속포기가 확정되면 다음 순위 상속인에게 상속이 이전됩니다. 차순위 상속인도 동일한 3개월 기한 내에 포기 여부를 결정해야 하므로, 포기 수리 후 신속하게 차순위자에게 통보해야 합니다.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 미성년 자녀의 포기 — 이해충돌 여부 확인</div>
<p>부모와 미성년 자녀 모두 상속인인 경우, 부 또는 모가 포기하고 자녀만 상속받는 상황이 생기면 이해충돌 문제가 발생할 수 있습니다. 이 경우 자녀를 위한 특별대리인 선임 절차가 필요할 수 있으므로 전문가와 상의하시기 바랍니다.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 포기 후에도 채권자가 연락하는 경우</div>
<p>상속포기 수리 심판이 확정되면 채권자에게 심판서 등본과 확정증명서를 제시하여 채권 행사를 차단할 수 있습니다. 채권자가 계속 청구한다면 법률 전문가를 통해 대응하시기 바랍니다.</p>
</div>
</section>
<!-- ── 9. 다음으로 확인할 내용 ── -->
<section id="navigation">
<h2>다음으로 확인할 내용</h2>
<div class="nav-cards">
<a class="nav-card prev" href="상속_05_선택기준.html">
<div class="nc-dir">← 이전 페이지</div>
<div class="nc-title">상속포기·한정승인<br/>내 상황에 맞는 선택은</div>
<div class="nc-desc">포기와 한정승인 중 어떤 선택이 유리한지 아직 결정하지 못하셨다면, 이 페이지를 먼저 확인하세요.</div>
</a>
<a class="nav-card next" href="상속_07_한정승인.html">
<div class="nc-dir">다음 페이지 →</div>
<div class="nc-title">한정승인<br/>절차와 청산 방법</div>
<div class="nc-desc">상속포기 대신 한정승인을 선택하셨다면, 청구서 작성부터 청산 절차까지 안내합니다.</div>
</a>
</div>
</section>
<!-- ── 10. CTA ── -->
<section id="cta">
</section>
<!-- ── 11. 면책 ── -->
<section id="disclaimer">
<div class="disclaimer-box">
<strong>【법적 면책 고지】</strong><br/>
    이 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 특정 사안에 대한 법률 조언이 아닙니다. 상속포기의 구체적인 요건·효과·절차는 개별 사안에 따라 달리 판단될 수 있으며, 최신 법령 및 판례와 다를 수 있습니다. 실제 상속 사건 처리 시에는 반드시 법무사 또는 변호사의 전문적인 법률 상담을 받으시기 바랍니다. 이 안내 내용에 의존하여 발생한 결과에 대해 법무사 사무소는 책임을 지지 않습니다.
  </div>
</section>
</main>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-07', title: '한정승인',
        meta: '재산 한도 내 변제 — 신고부터 채권자 청산까지 완전 안내',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ── 헤더 ── -->

<!-- ── 기간 경고 배너 ── -->
<div style="max-width:860px;margin:0 auto;padding:0 20px;">
<div class="deadline-banner">
<div class="dl-icon">⏰</div>
<div class="dl-body">
<strong>한정승인 신고 기한 — 사망일로부터 3개월 이내</strong>
<p>한정승인은 상속개시 있음을 안 날로부터 <strong>3개월</strong> 내에 가정법원에 신고해야 합니다(민법 제1019조 제1항). 단, 뒤늦게 채무 초과 사실을 알게 된 경우라면 <strong>특별한정승인</strong>(민법 제1019조 제3항)을 검토하시기 바랍니다.</p>
</div>
</div>
</div>
<main>
<!-- ── 0. 이런 분께 ── -->
<section id="for-whom">
<h2>이런 분께 이 안내가 필요합니다</h2>
<ul class="check-list">
<li>망인의 재산과 채무 중 어느 쪽이 더 많은지 불확실하여, 일단 재산 한도 내에서만 책임지는 방식을 선택하려는 분</li>
<li>상속포기 시 다음 순위 상속인에게 채무가 이전되는 것을 원치 않아 한정승인을 선택하려는 분</li>
<li>한정승인 신고 후 실제 청산 절차(채권자 공고·배당)를 어떻게 진행하는지 궁금하신 분</li>
<li>3개월 기한이 이미 지났으나 최근 뒤늦게 채무 초과 사실을 알게 된 분 (특별한정승인 검토)</li>
<li>망인 명의의 부동산이 있어 한정승인 후 등기 및 경매 절차가 필요한 분</li>
</ul>
</section>
<!-- ── 1. 핵심 요약 ── -->
<section id="summary">
<h2>핵심 요약</h2>
<div class="summary-box">
<div class="summary-title">📋 한정승인 핵심 포인트</div>
<ul>
<li><strong>의의:</strong> 상속으로 취득한 재산의 한도에서만 피상속인의 채무를 변제하는 조건부 상속 승인 (민법 제1028조)</li>
<li><strong>효과:</strong> 채무 초과분은 상속인의 고유재산으로 변제할 의무 없음 — 상속인으로서의 지위는 유지</li>
<li><strong>신고 기한:</strong> 상속개시 있음을 안 날로부터 3개월 이내 (민법 제1019조 제1항)</li>
<li><strong>필수 첨부:</strong> 청구서 + <em>상속재산목록</em> (적극재산·소극재산 모두 기재) → 목록 없으면 각하</li>
<li><strong>청산 의무:</strong> 수리 후 5일 내에 채권자에게 공고하고, 2개월 이상 채권신고 기간 운영 → 배당변제</li>
<li><strong>실무 선택:</strong> 공동상속인 중 1인만 한정승인, 나머지는 상속포기 — 연쇄 이전 방지에 효과적</li>
</ul>
</div>
<h3>한정승인 vs 상속포기 — 한눈에 비교</h3>
<table class="compare-table">
<thead>
<tr>
<th>구분</th>
<th class="td-limited">한정승인</th>
<th class="td-waive">상속포기</th>
</tr>
</thead>
<tbody>
<tr>
<td>상속인 지위</td>
<td class="td-limited">유지 (상속인으로 남음)</td>
<td class="td-waive">소멸 (처음부터 상속인 아님)</td>
</tr>
<tr>
<td>채무 책임</td>
<td class="td-limited">상속재산 한도 내에서만 부담</td>
<td class="td-waive">전혀 없음</td>
</tr>
<tr>
<td>재산 취득</td>
<td class="td-limited">채무 변제 후 잔여분 취득 가능</td>
<td class="td-waive">없음</td>
</tr>
<tr>
<td>차순위 이전</td>
<td class="td-limited">없음 (상속인 지위 유지)</td>
<td class="td-waive">있음 (다음 순위로 이전)</td>
</tr>
<tr>
<td>청산 절차</td>
<td class="td-limited">필요 (공고·채권자 최고·배당)</td>
<td class="td-waive">불필요</td>
</tr>
<tr>
<td>재산목록 제출</td>
<td class="td-limited">필수 (없으면 각하)</td>
<td class="td-waive">불필요</td>
</tr>
</tbody>
</table>
<div class="special-box">
<div class="sp-title">🔮 특별한정승인 — 3개월이 지난 경우의 구제책</div>
<ul>
<li><strong>요건:</strong> 상속채무가 상속재산을 초과하는 사실을 <em>중대한 과실 없이</em> 3개월 내에 알지 못하고 단순승인이 된 경우</li>
<li><strong>기한:</strong> 채무 초과 사실을 안 날로부터 3개월 이내 (민법 제1019조 제3항)</li>
<li><strong>소명자료:</strong> 채무 초과 사실을 언제 알았는지 입증할 자료 필요 (소장 사본, 채권자 독촉장, 송달증명서 등)</li>
<li><strong>주의:</strong> 3개월 기한이 경과한 경우에도 신고 자체를 포기하지 말고 전문가와 상담하시기 바랍니다.</li>
</ul>
</div>
</section>
<!-- ── 2. 절차 흐름도 ── -->
<section id="flow">
<h2>한눈에 보는 한정승인 절차 흐름도</h2>
<div class="flow-wrap">
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">1</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">상속재산 조회 및 목록 작성</div>
<div class="fc-sub">금융거래 조회·부동산 등기·세금 체납 등 망인의 적극재산과 소극재산(채무)을 빠짐없이 조사합니다.<br/><em>재산목록은 적극재산과 소극재산 모두 포함해야 하며, 고의 누락 시 단순승인 간주</em> <span class="law-cite">민법 제1026조 제3호</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">2</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">청구서 및 상속재산목록 작성</div>
<div class="fc-sub">한정승인 심판청구서에 상속재산목록을 첨부합니다.<br/>청구취지 기재례: <em>"청구인이 피상속인 망 ○○○의 재산을 상속함에 있어 별지 상속재산목록을 첨부하여서 한 한정승인 신고는 이를 수리한다"</em></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">3</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">첨부서류 준비</div>
<div class="fc-sub">가족관계증명서·기본증명서·주민등록표등본·인감증명서·상속재산목록 등 필요 서류를 수집합니다.<br/>미성년자 포함 시 <em>법정대리인(부모 전원) 인감증명서</em> 추가 필요</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">4</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">관할 가정법원 접수</div>
<div class="fc-sub"><em>피상속인의 마지막 주소지 관할 가정법원</em>에 청구서·첨부서류 제출<br/>피상속인 주소가 외국인 경우: 대법원 소재지 가정법원(서울가정법원)</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">5</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">법원 심리 (서면 심리 원칙)</div>
<div class="fc-sub">가정법원이 형식적 요건을 검토합니다. 보정 명령이 있으면 기한 내 보완해야 합니다.<br/>상속재산목록 미첨부로 보정 불응 시 → 각하 <span class="law-cite">가사소송규칙 제75조</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">6</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">수리 심판 및 확정</div>
<div class="fc-sub">법원이 한정승인을 수리하는 심판을 내립니다. 심판서 정본·확정증명서 수령<br/>수리심판은 요건 충족 인정 → <em>효력 확정이 아님</em> (최종 효력은 민사소송에서 결정)</div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">7</div>
</div>
<div class="flow-content">
<div class="fc-title">청산 절차 개시</div>
<div class="fc-sub">수리 후 <em>5일 내</em> 채권자에게 공고, <em>2개월 이상</em> 채권신고 기간 운영, 채권계산서 최고, 배당표 작성, 배당변제 실시 <span class="law-cite">민법 제1032조</span></div>
</div>
</div>
</div>
</section>
<!-- ── 3. 단계별 상세 설명 ── -->
<section id="step-detail">
<h2>단계별 상세 설명</h2>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-num-badge">1</div>
<div class="step-title">상속재산목록 작성 — 한정승인의 핵심 서류</div>
</div>
<div class="step-detail-body">
<p>상속재산목록은 한정승인의 필수 첨부서류입니다. 목록이 없으면 보정 불응 시 각하됩니다. 작성 시 다음 원칙을 지키십시오.</p>
<ul>
<li><strong>적극재산(상속재산):</strong> 부동산(등기사항증명서), 예금(잔액증명서), 자동차(등록원부), 주식·유가증권, 보증금 등 교환가치 있는 모든 재산 포함</li>
<li><strong>소극재산(상속채무):</strong> 대출금, 카드빚, 보증채무, 세금 체납, 개인채무 등 채권자·채무종류·금액 기재</li>
<li><strong>누락 금지:</strong> 소액 채권이나 추심 가능성이 낮은 채권도 반드시 포함. 고의로 누락하면 단순승인 간주 <span class="law-tag">민법 제1026조 제3호</span></li>
<li><strong>소명자료:</strong> 적극재산(등기부·통장잔액증명), 소극재산(부채증명서·소장 사본) 함께 제출</li>
<li><strong>자동차 포함:</strong> 자동차는 적극재산란에 기재하되 해당 채무(할부·근저당)는 소극재산란에 별도 기재</li>
</ul>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-num-badge">2</div>
<div class="step-title">특별한정승인 — 단순승인 후에도 가능한 구제</div>
</div>
<div class="step-detail-body">
<p>3개월 기한 내에 한정승인을 하지 못하여 단순승인이 된 경우라도, 다음 요건을 충족하면 특별한정승인을 할 수 있습니다.</p>
<ul>
<li><strong>요건:</strong> 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 3개월 기간 내에 알지 못하고 단순승인(법정단순승인 포함)이 된 경우</li>
<li><strong>기한:</strong> 채무 초과 사실을 <em>안 날로부터 3개월</em> 이내 <span class="law-tag">민법 제1019조 제3항</span></li>
<li><strong>소명자료:</strong> 채무 초과 사실을 알게 된 경위를 입증할 자료 (채권자의 소장 접수일, 독촉장 수령일 확인 가능한 송달증명서 등)</li>
<li><strong>협의분할 후에도 가능:</strong> 이미 상속재산을 협의분할로 처분한 경우에도 특별한정승인이 허용됩니다 (대법원 2006. 1. 26. 선고 2003다29562)</li>
<li><strong>주의:</strong> 특별한정승인의 3개월 기한은 제척기간으로, 추후 보완이 불가능합니다.</li>
</ul>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-num-badge">3</div>
<div class="step-title">공동상속인 중 1인만 한정승인하는 실무 전략</div>
</div>
<div class="step-detail-body">
<p>실무에서 가장 많이 사용하는 방법입니다. 상속인 중 1인이 한정승인을 하여 상속인 지위를 유지하고, 나머지 상속인은 모두 상속포기를 합니다.</p>
<ul>
<li><strong>효과:</strong> 포기한 상속인들은 채무 부담이 없고, 한정승인한 1인이 상속재산 한도 내에서 청산을 담당합니다.</li>
<li><strong>차순위 이전 방지:</strong> 공동상속인 중 1인이 한정승인을 유지하므로 다음 순위(형제자매, 직계존속 등)로 상속이 이전되지 않습니다.</li>
<li><strong>하나의 청구서로 가능:</strong> 한정승인과 상속포기를 하나의 청구서에 함께 신청할 수 있습니다.</li>
</ul>
</div>
</div>
</section>
<!-- ── 청산 절차 상세 ── -->
<section id="liquidation">
<h2>한정승인 후 청산 절차</h2>
<p>한정승인 심판이 수리된 이후에는 상속재산을 청산하는 절차를 이행해야 합니다. 청산을 이행하지 않으면 채권자에게 책임을 질 수 있습니다.</p>
<div class="liquidation-flow">
<div class="liq-step">
<div class="liq-badge">①</div>
<div class="liq-body">
<div class="liq-title">채권자 공고 — 수리 후 5일 이내</div>
<div class="liq-desc">
          한정승인이 수리된 날로부터 <em>5일 이내</em>에 일간신문에 1회 이상 공고합니다. 공고에는 채권신고 기간(최소 2개월 이상)을 명시하고, 기간 내 미신고 시 청산에서 제외됨을 표시해야 합니다. <span class="liq-law">민법 제1032조</span>
</div>
</div>
</div>
<div class="liq-arrow">↓</div>
<div class="liq-step">
<div class="liq-badge">②</div>
<div class="liq-body">
<div class="liq-title">알고 있는 채권자에게 개별 최고</div>
<div class="liq-desc">
          공고와 별도로, 알고 있는 채권자에게는 내용증명으로 채권신고 최고를 해야 합니다. 알고 있는 채권자는 신고기간 내 미신고라도 청산에서 제외할 수 없습니다. <em>배당변제 시점</em>에 알게 된 채권자도 포함됩니다. <span class="liq-law">민법 제89조 준용</span>
</div>
</div>
</div>
<div class="liq-arrow">↓</div>
<div class="liq-step">
<div class="liq-badge">③</div>
<div class="liq-body">
<div class="liq-title">채권계산서 제출 최고 — 1주 이내</div>
<div class="liq-desc">
          채권신고기간 만료 후, 배당에 참가하는 채권자 전원에게 내용증명으로 원금·이자·비용 등 채권계산서를 <em>1주 이내</em>에 제출하도록 최고합니다. 압류채권자, 가압류채권자, 배당요구채권자 모두 포함합니다.
        </div>
</div>
</div>
<div class="liq-arrow">↓</div>
<div class="liq-step">
<div class="liq-badge">④</div>
<div class="liq-body">
<div class="liq-title">부동산이 있는 경우 — 상속등기 후 경매 신청</div>
<div class="liq-desc">
          망인 명의의 부동산이 있다면 한정승인자 명의로 상속을 원인으로 한 소유권이전등기를 마친 후, 한정승인자가 직접 경매신청을 해야 합니다. 경매 대금이 상속재산에 해당하며 채권자에게 배당됩니다. <span class="liq-law">등기선례 제200612-4호</span>
</div>
</div>
</div>
<div class="liq-arrow">↓</div>
<div class="liq-step">
<div class="liq-badge">⑤</div>
<div class="liq-body">
<div class="liq-title">배당표 작성 및 배당변제</div>
<div class="liq-desc">
          신고기간 내 신고한 채권자와 알고 있는 채권자를 대상으로 <em>채권액 비율로 배당변제</em>합니다. <span class="liq-law">민법 제1034조 제1항</span><br/>
          신고기간 내 미신고하고 한정승인자가 알지 못한 채권자 → 잔여재산이 있는 경우에만 변제 <span class="liq-law">민법 제1039조</span><br/>
          배당 완료 후 잔여재산이 있으면 상속인이 취득합니다.
        </div>
</div>
</div>
</div>
<div class="warn-card" style="margin-top:20px;">
<div class="warn-title">⚠️ 배분할 재산이 없는 경우에도 절차는 이행해야 합니다</div>
<p>상속재산이 거의 없거나 채권자에게 배분할 것이 없는 경우에도, 원칙적으로 공고와 채권자 통지 절차를 이행해야 합니다. 이를 생략하면 추후 분쟁 발생 시 불리할 수 있습니다. 다만 현실적으로 재산이 전혀 없다면 이를 통지하는 방식으로 절차를 마무리합니다.</p>
</div>
</section>
<!-- ── 4. 상속재산목록 작성 안내 ── -->
<section id="asset-list">
<h2>상속재산목록 — 항목별 기재 안내</h2>
<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
<th style="background:#e8f5e9;color:#1a5c2e;border:1px solid #c8e6c9;padding:10px 14px;text-align:left;font-size:14px;">적극재산 (상속재산)</th>
<th style="background:#fdecea;color:#8b1a1a;border:1px solid #f5c6cb;padding:10px 14px;text-align:left;font-size:14px;">소극재산 (상속채무)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #c8e6c9;background:#f5faf5;padding:10px 14px;font-size:14px;vertical-align:top;">
<ul style="margin:0;padding-left:1.2em;">
<li>부동산 (토지·건물, 등기사항증명서 첨부)</li>
<li>예금·적금 (통장잔액증명서 첨부)</li>
<li>자동차 (자동차등록원부 첨부)</li>
<li>주식·유가증권·회원권</li>
<li>보증금 (임대차계약서 등)</li>
<li>대여금·보험금 등 금전채권</li>
</ul>
</td>
<td style="border:1px solid #f5c6cb;background:#fef9f9;padding:10px 14px;font-size:14px;vertical-align:top;">
<ul style="margin:0;padding-left:1.2em;">
<li>금융기관 대출금 (부채증명서 첨부)</li>
<li>카드 미결제금 (카드사 채무확인서)</li>
<li>개인 채무 (차용증, 판결문 등)</li>
<li>연대보증채무</li>
<li>자동차 할부금·근저당채무</li>
<li>세금 체납액 (국세·지방세)</li>
</ul>
</td>
</tr>
</tbody>
</table>
<div class="doc-note" style="margin-top:12px;">
<strong>고의 누락 금지:</strong> 재산목록에 고의로 기재하지 않은 재산이 있으면 단순승인을 한 것으로 간주됩니다(민법 제1026조 제3호). 적극재산과 소극재산 모두 빠짐없이 기재하십시오.
  </div>
</section>
<!-- ── 5. 준비 서류 ── -->
<section id="documents">
<h2>준비 서류 목록</h2>
<div class="doc-section">
<div class="doc-section-title">📁 피상속인(망자) 관련 서류</div>
<ul class="doc-list">
<li>가족관계증명서 (피상속인) 1통</li>
<li>기본증명서 (피상속인) 1통</li>
<li>말소자 주민등록표등본 (피상속인) 1통</li>
<li>제적등본 (피상속인) 1통</li>
</ul>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 상속인 관련 서류</div>
<ul class="doc-list">
<li>가족관계증명서 (상속인) 각 1통</li>
<li>기본증명서 (상속인) 각 1통</li>
<li>주민등록표등본 (상속인) 각 1통</li>
<li>인감증명서 (상속인) 각 1통</li>
</ul>
<div class="doc-note"><strong>미성년자 포함 시:</strong> 법정대리인(부모) 전원의 인감증명서 각 1통이 추가로 필요합니다.</div>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 직계비속이 아닌 경우 추가</div>
<ul class="doc-list">
<li>가계도 1통</li>
</ul>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 한정승인 필수 첨부 서류</div>
<ul class="doc-list">
<li>상속재산목록 (적극재산·소극재산 모두 기재)</li>
<li>상속재산목록 부본 1통</li>
<li>소명자료 (등기부·잔액증명·부채증명서 등)</li>
<li>납부서 (인지·송달료)</li>
</ul>
<div class="doc-note"><strong>특별한정승인의 경우 추가:</strong> 채무 초과 사실을 알게 된 시점을 소명하는 자료 (소장 사본, 독촉장, 송달증명서 등)를 첨부해야 합니다.</div>
</div>
</section>
<!-- ── 6. 비용 안내 ── -->
<section id="cost">
<h2>비용 안내</h2>
<p>한정승인 신고는 가사비송 라류 사건으로 처리됩니다. 법원 수수료는 청구인 수와 첨부 내용에 따라 달라질 수 있으므로 정확한 금액은 법원 접수 시 확인하시기 바랍니다.</p>
<table class="cost-table">
<thead>
<tr><th>항목</th><th>산정 기준</th><th>비고</th></tr>
</thead>
<tbody>
<tr>
<td><strong>인지액</strong></td>
<td>사건본인(상속인) 1인당 일정 금액<br/>(가사비송 라류 기준)</td>
<td>청구인 수에 비례</td>
</tr>
<tr>
<td><strong>송달료</strong></td>
<td>당사자 수 × 회당 단가 × 6회분</td>
<td>접수 시 예납</td>
</tr>
<tr>
<td><strong>재산목록 경정신청 비용</strong></td>
<td>인지 일정 금액 + 송달료</td>
<td>목록 수정이 필요한 경우</td>
</tr>
<tr>
<td><strong>신문 공고 비용</strong></td>
<td>일간신문 공고료</td>
<td>청산 절차 진행 시</td>
</tr>
<tr>
<td><strong>법무사 보수</strong></td>
<td>법무사 보수 규정에 따름</td>
<td>대리 신청 시</td>
</tr>
</tbody>
</table>
<div class="cost-note">※ 이 안내에는 정확한 금액을 기재하지 않습니다. 사건 규모·청구인 수에 따라 달라질 수 있으므로 법원 민원실 또는 법무사 사무실에 문의하시기 바랍니다.</div>
</section>
<!-- ── 9. Q&A ── -->
<section id="qa">
<h2>자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>한정승인을 하면 채무를 전혀 갚지 않아도 되나요?</div>
<div class="qna-a">
<p>그렇지 않습니다. 한정승인을 하면 상속으로 얻은 재산의 한도 내에서 채무를 변제해야 합니다. 상속재산이 1억 원이고 채무가 2억 원이라면, 1억 원 한도 내에서 채무를 이행하면 나머지 1억 원에 대해서는 상속인의 고유재산으로 변제할 의무가 없습니다.</p>
<p>단, 청산 절차(채권자 공고·배당)를 이행해야 이 한정 책임이 보장됩니다. 청산 절차 없이 임의로 처분하면 문제가 생길 수 있습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다. 개별 사안에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>3개월이 이미 지났습니다. 방법이 없나요?</div>
<div class="qna-a">
<p>3개월이 지났더라도 포기하지 마십시오. 채무 초과 사실을 뒤늦게 알게 된 경우 특별한정승인(민법 제1019조 제3항)을 활용할 수 있습니다. 채무 초과 사실을 알게 된 날로부터 3개월 이내에 신고해야 하므로, 신속히 법무사나 변호사에게 상담을 받으시기 바랍니다.</p>
<p>다만, 채무 초과 사실을 중대한 과실 없이 알지 못하였어야 한다는 요건이 있으므로, 사실관계를 면밀히 검토해야 합니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>상속재산에 부동산이 있는데, 어떻게 처리해야 하나요?</div>
<div class="qna-a">
<p>부동산이 있는 경우, 한정승인 수리 후 먼저 한정승인자 명의로 상속등기(소유권이전등기)를 마쳐야 합니다. 그 이후에 경매신청을 하여 부동산을 매각하고, 그 대금으로 채권자에게 배당변제합니다.</p>
<p>이 과정에서 취득세가 발생합니다. 또한 경매 비용도 상속재산에서 공제되므로 비용 계획을 세워두시기 바랍니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>채권자가 소송을 제기했는데, 한정승인을 하면 소송에서 이길 수 있나요?</div>
<div class="qna-a">
<p>한정승인이 수리되었다고 해서 소송이 자동으로 기각되지는 않습니다. 채권자의 소송이 진행 중이라면, 법원에 한정승인 수리 사실을 담은 답변서를 반드시 제출해야 합니다. 한정승인이 유효하게 성립된 경우, 판결 주문에 '상속재산의 한도 내에서 이행하라'는 취지가 명시됩니다.</p>
<p>이 경우 판결 금액이 상속재산을 초과하더라도, 상속인의 고유재산에는 강제집행을 할 수 없게 됩니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>공동상속인 중 1인만 한정승인하고 나머지가 포기하면, 채무는 그 1인이 다 부담하나요?</div>
<div class="qna-a">
<p>한정승인한 1인은 상속재산의 한도 내에서만 채무를 부담합니다. 포기한 상속인들은 처음부터 상속인이 아닌 것으로 간주되므로 채무를 부담하지 않습니다.</p>
<p>한정승인자는 상속재산 전체를 관리하고 청산 절차를 진행하게 됩니다. 결과적으로 청산 후 잔여재산이 있으면 한정승인자가 이를 취득할 수 있습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>한정승인 신고 후 목록에서 빠진 재산을 발견했습니다. 어떻게 하나요?</div>
<div class="qna-a">
<p>이미 수리된 한정승인의 상속재산목록을 보완할 필요가 있다면 <strong>상속재산목록 경정신청</strong>을 법원에 제출할 수 있습니다. 경정신청서에 수정된 목록을 첨부하면 됩니다.</p>
<p>단, 고의로 누락한 것이 아닌 경우에는 단순승인으로 간주되지 않습니다. 다만 추후 채권자와의 분쟁에서 고의성을 다투는 상황이 생길 수 있으므로, 경정신청을 통해 목록을 정확하게 유지하는 것이 바람직합니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
</section>
<!-- ── 7. 관련 판례 ── -->
<section id="rulings">
<h2>관련 판례</h2>
<div class="ruling-card">
<div class="ruling-cite">대법원 2018. 11. 9. 선고 2015다75308 판결</div>
<div class="ruling-text">한정승인자가 배당변제를 받을 수 있는 '알고 있는 채권자' 해당 여부는 채권신고의 최고를 하는 시점이 아니라 <strong>배당변제를 하는 시점</strong>을 기준으로 판단하여야 한다. 따라서 최고 시에는 알지 못했더라도 배당변제 전까지 알게 된 채권자에게는 배당변제를 해야 한다.</div>
<div class="ruling-point">실무 포인트: 배당 직전에 알게 된 채권자라도 배당 대상에 포함해야 합니다. 채권자 목록을 지속적으로 업데이트하십시오.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2006. 1. 26. 선고 2003다29562 판결</div>
<div class="ruling-text">상속인들이 상속재산 협의분할을 통해 이미 상속재산을 처분한 경우라도, 상속채무 초과사실을 중대한 과실 없이 알지 못하였다면 민법 제1019조 제3항에 의한 특별한정승인이 허용된다. 협의분할로 인해 한정승인 효력이 없다고 할 수 없다.</div>
<div class="ruling-point">실무 포인트: 이미 상속재산을 처분(협의분할)했더라도 특별한정승인의 가능성은 열려 있습니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2007. 4. 12. 선고 2005두9491 판결</div>
<div class="ruling-text">한정승인에 의하여 부동산을 상속받은 자에게는 취득세 납부의무가 있다. 부동산취득세는 소유권이전의 형식에 의한 부동산취득의 모든 경우를 포함하므로, 한정승인으로 상속받은 경우에도 취득세를 납부하여야 한다.</div>
<div class="ruling-point">실무 포인트: 부동산이 있는 경우 한정승인자 명의로 이전등기 시 취득세가 발생합니다. 비용 계획 시 반드시 포함하십시오.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2021. 2. 25. 선고 2017다289651 판결</div>
<div class="ruling-text">상속인이 단순승인을 하거나 법정단순승인된 후 한정승인신고를 하여 수리심판을 받은 경우, 해당 한정승인이 민법 제1019조 제3항의 요건을 갖춘 특별한정승인으로서 유효한지 여부를 법원이 심리·판단하여야 한다. 수리심판은 효력을 확정하는 것이 아니다.</div>
<div class="ruling-point">실무 포인트: 수리심판을 받았다고 해서 한정승인의 효력이 완전히 확정되는 것은 아닙니다. 채권자가 소송으로 다툴 수 있으므로 요건을 충실히 갖추어야 합니다.</div>
</div>
</section>
<!-- ── 8. 주의사항 ── -->
<section id="warnings">
<h2>주의사항</h2>
<div class="warn-card">
<div class="warn-title">⚠️ 재산목록 고의 누락 — 단순승인으로 간주됩니다</div>
<p>한정승인 신고 후에도 재산목록에 고의로 기재하지 않은 재산이 발견되면 단순승인한 것으로 간주됩니다(민법 제1026조 제3호). 조금이라도 의심스러운 재산과 채무는 모두 목록에 포함하는 것이 안전합니다.</p>
<p>재산목록에 기재하지 않은 재산을 나중에 발견하면 <strong>재산목록 경정신청</strong>을 통해 보완할 수 있습니다. 이미 수리된 한정승인의 효력이 취소되지는 않습니다.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 채권자 소송을 받은 경우 반드시 답변서 제출</div>
<p>한정승인 수리 후 망인의 채권자가 상속채무 이행을 구하는 소송을 제기한 경우, 법원에 한정승인·특별한정승인을 했다는 사실을 담은 <strong>답변서를 반드시 제출</strong>해야 합니다. 답변서를 제출하지 않으면 한정승인의 이익을 주장하지 않은 것으로 처리될 수 있습니다.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 청산 전 상속재산 처분 금지</div>
<p>한정승인 수리 후 청산 절차를 거치기 전에 상속재산을 임의로 처분하면, 채권자에 대한 배당이 감소하여 법적 책임을 질 수 있습니다. 청산 절차(공고 → 배당)가 완료되기 전까지 상속재산을 보존·관리해야 합니다(민법 제1022조).</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 부동산 취득세 및 상속세 납부 의무</div>
<p>한정승인으로 부동산을 상속받아 이전등기를 하는 경우, 취득세 납부 의무가 발생합니다(대법원 2005두9491). 또한 상속재산이 상속세 과세기준을 초과하면 상속세도 신고·납부해야 합니다. 청산 비용에 세금을 반드시 포함하여 계획하십시오.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 보증채무는 한정승인으로 소멸하지 않습니다</div>
<p>피상속인의 채무에 보증인이 있는 경우, 상속인이 한정승인을 하더라도 보증인의 책임은 그대로 유지됩니다. 보증인이 보증채무를 변제한 경우 구상권을 청산 절차에서 행사할 수 있습니다.</p>
</div>
</section>
<!-- ── 10. 다음으로 확인할 내용 ── -->
<section id="navigation">
<h2>다음으로 확인할 내용</h2>
<div class="nav-cards">
<a class="nav-card prev" href="상속_06_상속포기.html">
<div class="nc-dir">← 이전 페이지</div>
<div class="nc-title">상속포기<br/>절차와 준비서류</div>
<div class="nc-desc">한정승인 대신 상속포기를 선택하려는 경우 이 페이지를 확인하세요.</div>
</a>
<a class="nav-card next" href="상속_08_다음페이지.html">
<div class="nc-dir">다음 페이지 →</div>
<div class="nc-title">다음 주제로 이어집니다</div>
<div class="nc-desc">상속등기 절차 및 이후 단계로 이어집니다.</div>
</a>
</div>
</section>
<!-- ── 11. CTA ── -->
<section id="cta">
</section>
<!-- ── 면책 ── -->
<section id="disclaimer">
<div class="disclaimer-box">
<strong>【법적 면책 고지】</strong><br/>
    이 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 특정 사안에 대한 법률 조언이 아닙니다. 한정승인의 구체적인 요건·효과·청산 절차는 개별 사안에 따라 달리 판단될 수 있으며, 최신 법령 및 판례와 다를 수 있습니다. 실제 한정승인 사건 처리 시에는 반드시 법무사 또는 변호사의 전문적인 법률 상담을 받으시기 바랍니다. 이 안내 내용에 의존하여 발생한 결과에 대해 법무사 사무소는 책임을 지지 않습니다.
  </div>
</section>
</main>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-08', title: '상속분',
        meta: '법정상속분 공식부터 대습상속까지 한눈에 확인하는 실전 계산 안내',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ══ 헤더 ══ -->

<!-- ══ 0. 이런 분께 ══ -->
<section id="target">
<h2 class="sec-title">이런 분께 도움이 됩니다</h2>
<ul class="target-list">
<li>피상속인이 사망하여 내가 얼마를 상속받는지 궁금한 분</li>
<li>배우자·자녀·부모 등 여러 상속인이 있어 계산이 복잡한 분</li>
<li>대습상속(손자녀·조카)이 발생하여 비율 계산이 어려운 분</li>
<li>유언이 없는 경우 법정상속분이 어떻게 결정되는지 알고 싶은 분</li>
<li>협의 분할 전에 법적 기준 상속분을 미리 파악하고 싶은 분</li>
<li>상속분을 두고 다른 상속인과 분쟁 중인 분</li>
</ul>
</section>
<!-- ══ 1. 핵심 요약 ══ -->
<section id="summary">
<h2 class="sec-title">핵심 요약</h2>
<div class="summary-box">
<h3>📌 법정상속분 3가지 핵심 원칙</h3>
<p><strong>① 동순위 균분 원칙</strong> — 같은 순위의 상속인(예: 자녀들)은 <strong>모두 동등하게</strong> 나눕니다. 성별·기혼 여부와 무관합니다.</p>
<p><strong>② 배우자 5할 가산 원칙</strong> — 배우자는 자녀(직계비속) 또는 부모(직계존속)와 함께 상속받을 때 그 상속분의 <strong>1.5배</strong>를 받습니다.</p>
<p><strong>③ 대습상속 원칙</strong> — 상속인이 먼저 사망한 경우, 그 자녀(손자녀·손녀 등)가 <strong>원래 상속인이 받았을 몫을 그대로</strong> 이어받습니다.</p>
</div>
<div class="formula-box">
<div class="formula">
      배우자 : 자녀(또는 부모) = <span class="spouse-highlight">1.5</span> : 1 : 1 : …<br/>
<small>→ 자녀 2명이면 배우자 3/7, 자녀 각 2/7</small>
</div>
<div class="formula-note">근거 법령: 민법 제1009조(법정상속분), 제1010조(대습상속분)</div>
</div>
</section>
<!-- ══ 2. 상세 내용 ══ -->
<section id="detail">
<h2 class="sec-title">상세 내용</h2>
<!-- 상속분의 의의 -->
<h3 class="sub-title">상속분의 의의와 종류</h3>
<p class="detail-text">상속분이란 공동상속인 각각이 상속재산 전체에 대해 갖는 배당 비율을 말합니다. 크게 두 가지로 나뉩니다.</p>
<div class="type-grid">
<div class="type-card">
<div class="type-name">① 지정상속분</div>
<div class="type-desc">피상속인이 <strong>유언</strong>으로 상속분을 달리 지정한 경우입니다. 유류분을 침해하지 않는 범위 내에서 법정상속분보다 우선 적용됩니다. <span class="law-ref">민법 제1012조</span></div>
</div>
<div class="type-card primary">
<div class="type-name">② 법정상속분 (가장 중요)</div>
<div class="type-desc">유언이 없거나 지정이 없는 부분에 대해 <strong>법률</strong>이 정한 비율입니다. 실무에서 가장 많이 적용됩니다. <span class="law-ref">민법 제1009조</span></div>
</div>
</div>
<!-- 현행 법정상속분 계산법 -->
<h3 class="sub-title">현행 법정상속분 계산법 <span class="law-ref">민법 제1009조</span></h3>
<p class="detail-text">1991년 1월 1일 민법 개정 이후 현재까지 적용되는 기준입니다.</p>
<table class="calc-table">
<thead>
<tr>
<th>상속인 구성</th>
<th>배우자</th>
<th>자녀(또는 부모) 각</th>
<th>전체 합계</th>
</tr>
</thead>
<tbody>
<tr>
<td>배우자 + 자녀 1명</td>
<td class="ratio spouse-highlight">3/5</td>
<td class="ratio">2/5</td>
<td class="fraction">1.5 : 1</td>
</tr>
<tr>
<td>배우자 + 자녀 2명</td>
<td class="ratio spouse-highlight">3/7</td>
<td class="ratio">2/7</td>
<td class="fraction">1.5 : 1 : 1</td>
</tr>
<tr>
<td>배우자 + 자녀 3명</td>
<td class="ratio spouse-highlight">3/9 (=1/3)</td>
<td class="ratio">2/9</td>
<td class="fraction">1.5 : 1 : 1 : 1</td>
</tr>
<tr>
<td>자녀만 3명 (배우자 없음)</td>
<td class="ratio">—</td>
<td class="ratio">1/3</td>
<td class="fraction">1 : 1 : 1</td>
</tr>
<tr>
<td>배우자 + 부모(직계존속) 2명</td>
<td class="ratio spouse-highlight">3/5</td>
<td class="ratio">1/5</td>
<td class="fraction">1.5 : 1 : 1</td>
</tr>
<tr>
<td>배우자만 (자녀·부모 없음)</td>
<td class="ratio spouse-highlight">전부 (1)</td>
<td class="ratio">—</td>
<td class="fraction">단독 상속</td>
</tr>
</tbody>
</table>
<p class="detail-text">
    ※ 배우자 상속분 계산 공식: 전체를 「배우자 1.5 : 다른 상속인 1인당 1」로 놓고 비율을 구합니다.<br/>
    예) 배우자 + 자녀 2명 → 1.5 + 1 + 1 = 3.5 = 7/2 → 배우자 1.5/3.5 = <strong>3/7</strong>, 자녀 각 1/3.5 = <strong>2/7</strong>
</p>
<!-- 구체적 계산 사례 -->
<h3 class="sub-title">실전 계산 사례</h3>
<div class="case-example">
<div class="case-label">사례 1 — 기본: 배우자 + 자녀</div>
<p>甲(피상속인) 사망 당시 상속인: 배우자 乙, 자녀 A</p>
<div class="calc-result">乙(배우자) = 3/5, A(자녀) = 2/5 → 자산 1억 원이면 乙 6,000만 원, A 4,000만 원</div>
</div>
<div class="case-example">
<div class="case-label">사례 2 — 자녀가 먼저 사망한 경우(대습상속)</div>
<p>甲(피상속인) 사망 시 자녀 A가 이미 사망 → A의 배우자 B와 자녀 C, D가 대습상속인</p>
<p>甲의 상속인: 배우자 乙, 대습상속인 B·C·D (A의 몫 2/5를 B, C, D가 나눔)</p>
<div class="calc-result">乙 = 3/5 / B(A의 배우자) = 2/5 × 3/7 = 6/35 / C·D 각 = 2/5 × 2/7 = 4/35<br/>※ B·C·D의 내부 비율은 乙·A 상속과 동일하게 1.5 : 1 : 1</div>
</div>
<div class="case-example">
<div class="case-label">사례 3 — 재혼 후 전혼 자녀 포함</div>
<p>甲(피상속인) 사망 / 재혼 배우자 乙, 전혼 자녀 A, 재혼 후 자녀 B (총 3명)</p>
<div class="calc-result">乙 = 3/7, A = 2/7, B = 2/7 → 전혼·재혼 자녀 구분 없이 동일 비율 적용</div>
</div>
<!-- 대습상속분 -->
<h3 class="sub-title">대습상속분 <span class="law-ref">민법 제1010조</span></h3>
<div class="daesup-box">
<div class="daesup-title">💡 대습상속이란?</div>
<p>상속이 개시되기 전에 <strong>상속인(자녀, 형제자매)</strong>이 이미 사망하거나 상속 결격이 된 경우, 그 <strong>직계비속(자녀의 자녀 등) 또는 배우자</strong>가 사망한 상속인의 순위를 이어받아 상속에 참가하는 것입니다.</p>
<p style="margin-top:10px;">대습상속인이 받는 상속분은 <strong>피대습자(사망한 상속인)가 받았을 상속분과 동일</strong>합니다. 대습상속인이 여러 명이면 그 몫을 다시 법정상속분 비율로 나눕니다.</p>
</div>
<!-- 연혁 -->
<h3 class="sub-title">법정상속분 연혁</h3>
<div class="history-timeline">
<div class="history-item">
<div class="year">1960 ~ 1978년</div>
<div class="hist-desc">호주상속인에 5할 가산 / 여성 상속분은 남성의 1/2 또는 1/4로 차별 적용</div>
</div>
<div class="history-item">
<div class="year">1979 ~ 1990년</div>
<div class="hist-desc">호주 가산 폐지 / <strong>배우자(처)</strong>에게 5할 가산 신설 / 여성 균분 원칙 도입</div>
</div>
<div class="history-item current">
<div class="year">1991년 1월 1일 ~ 현재 ★ 현행</div>
<div class="hist-desc">성별·기혼 여부 불문 동순위 균분 / 배우자 5할 가산 유지 / 민법 제1009조</div>
</div>
</div>
</section>
<!-- ══ 5. Q&A ══ -->
<section id="qa">
<h2 class="sec-title">자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q1</span>
      배우자와 자녀 3명이 있을 때 내 상속분은 어떻게 되나요?
    </div>
<div class="qna-a">
      배우자 1.5 + 자녀 1 + 자녀 1 + 자녀 1 = 4.5로 놓고 계산합니다. 배우자는 1.5/4.5 = <strong>1/3 (33.3%)</strong>, 자녀 각각은 1/4.5 = <strong>2/9 (22.2%)</strong>가 됩니다. 재산이 9억 원이라면 배우자 3억 원, 자녀 각 2억 원씩 법정상속분이 됩니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 특별수익, 기여분, 채무 등 개별 사정에 따라 달라질 수 있으므로 구체적 사안은 법무사·변호사에게 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q2</span>
      자녀가 한 명도 없고 부모도 사망했습니다. 배우자가 전부 상속받나요?
    </div>
<div class="qna-a">
      네, 맞습니다. 직계비속(자녀·손자녀)이 없고 직계존속(부모·조부모)도 없다면, 배우자가 <strong>단독으로 전부 상속</strong>받습니다. 형제자매가 있더라도 배우자가 단독 상속인이 되므로 형제자매에게는 법정상속분이 없습니다. <span class="law-ref">민법 제1009조 제2항</span>
<div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 개별 사안의 구체적 판단은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q3</span>
      형제 중 한 명이 생전에 아버지로부터 많은 돈을 받았습니다. 이 경우 제 상속분이 더 늘어나나요?
    </div>
<div class="qna-a">
      사전 증여가 <strong>특별수익</strong>에 해당하면, 해당 금액을 상속재산에 더해서 계산한 후(상속재산 + 특별수익 = 간주상속재산) 법정상속분을 적용합니다. 특별수익을 받은 상속인은 그만큼 덜 받게 됩니다. 단, 어떤 증여가 특별수익인지는 분쟁이 잦고 가정법원의 판단이 필요할 수 있습니다. <span class="law-ref">민법 제1008조</span>
<div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 특별수익 해당 여부 및 금액 산정은 법무사·변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q4</span>
      아들과 딸의 상속분이 다른가요? 결혼한 딸과 미혼 아들은요?
    </div>
<div class="qna-a">
<strong>아닙니다.</strong> 1991년 이후 현행 민법은 성별·혼인 여부와 무관하게 동순위 상속인은 동등한 비율로 상속받습니다. 아들과 딸, 결혼한 딸과 미혼 아들, 모두 <strong>동일한 상속분</strong>을 가집니다. 과거의 성별 차별 규정은 현행법에서 폐지되었습니다. <span class="law-ref">민법 제1009조 제1항</span>
<div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 개별 사안의 구체적 판단은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q5</span>
      제 아버지(상속인)가 할아버지보다 먼저 돌아가셨습니다. 저는 할아버지 재산을 상속받을 수 있나요?
    </div>
<div class="qna-a">
      네, <strong>대습상속</strong>에 해당합니다. 아버지가 상속 개시 전에 사망했으므로, 귀하는 아버지의 법정상속분을 그대로 이어받아 할아버지의 상속인이 됩니다. 아버지에게 다른 형제·자매가 있다면, 귀하가 받는 몫은 아버지가 받았을 상속분에 한합니다. <span class="law-ref">민법 제1001조, 제1010조</span>
<div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 대습상속 여부 및 범위는 구체적 사안에 따라 다를 수 있으므로 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q6</span>
      법정상속분과 다르게 분할할 수 있나요?
    </div>
<div class="qna-a">
      네, 가능합니다. 법정상속분은 기본 기준일 뿐, 상속인 전원이 동의하면 <strong>협의분할</strong>을 통해 어떤 비율로도 나눌 수 있습니다. 예를 들어 배우자에게 모든 재산을 몰아주거나, 특정 자녀가 부동산을 단독으로 취득하는 것도 가능합니다. 다만 협의분할 후에는 변경이 어려우므로 신중하게 결정하고, 필요하다면 분할협의서 작성 시 법무사의 도움을 받으시기 바랍니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 협의분할의 효력 및 세금 관련 사항은 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
</section>
<!-- ══ 3. 관련 판례 ══ -->
<section id="ruling">
<h2 class="sec-title">관련 판례</h2>
<div class="ruling-card">
<div class="ruling-id">대법원 1995. 3. 10. 선고 94다16571 판결</div>
<div class="ruling-summary">배우자의 법정상속분 5할 가산에 관한 기준 판결로, 직계비속과 공동 상속 시 배우자 상속분은 직계비속 1인의 상속분의 1.5배가 된다는 점을 명확히 확인하였습니다.</div>
<div class="ruling-point">실무 포인트: 배우자 가산은 동순위 상속인이 1명이든 5명이든 동일하게 '다른 1인 몫의 1.5배'로 계산됩니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 2001. 3. 9. 선고 99다13157 판결</div>
<div class="ruling-summary">대습상속에서 피대습자(사망한 자녀)가 받았을 상속분을 그대로 대습상속인이 취득하며, 대습상속인 내부의 비율도 피대습자 기준으로 다시 법정상속분 규정을 적용한다고 판시하였습니다.</div>
<div class="ruling-point">실무 포인트: 사망한 자녀의 배우자·자녀 간에도 1.5 : 1 비율이 그대로 적용됩니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 2007. 7. 26. 선고 2006다83796 판결</div>
<div class="ruling-summary">협의분할 전 법정상속분에 따른 공유 지분 등기가 이루어진 경우, 상속인들이 별도 협의 없이 법정상속분을 주장할 수 있으며 이는 권리 남용이 아니라고 판시하였습니다.</div>
<div class="ruling-point">실무 포인트: 법정상속분 기준의 등기 후 협의분할 시 상속세·취득세 등 세금 문제 검토 필요.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 2015. 10. 29. 선고 2013다60753 판결</div>
<div class="ruling-summary">유언으로 특정 상속인에게 전 재산을 유증한 경우에도 다른 상속인의 유류분(법정상속분의 1/2 또는 1/3)은 침해할 수 없다고 판시하여, 지정상속분과 유류분의 관계를 명확히 하였습니다.</div>
<div class="ruling-point">실무 포인트: 지정상속분(유언)이 있어도 다른 상속인의 유류분 반환청구를 고려해야 합니다.</div>
</div>
</section>
<!-- ══ 4. 주의사항 ══ -->
<section id="caution">
<h2 class="sec-title">주의사항</h2>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">법정상속분 ≠ 실제 취득 금액</div>
<div class="warn-desc">법정상속분은 협의분할이 이루어지지 않을 경우의 법적 비율입니다. 상속인 전원의 협의로 자유롭게 달리 분할할 수 있으며, 특별수익(사전증여·유증)이 있으면 구체적 상속분이 달라집니다.</div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">특별수익(사전 증여·유증)은 상속분에 반영</div>
<div class="warn-desc">피상속인이 생전에 특정 상속인에게 증여하거나 유언으로 유증한 경우, 이를 상속분에 포함시켜 계산(특별수익 공제)합니다. 단, 특별수익 해당 여부는 분쟁 원인이 되므로 전문가 확인이 필요합니다. <span class="law-ref">민법 제1008조</span></div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">기여분은 별도 청구 절차 필요</div>
<div class="warn-desc">피상속인의 재산 증가·유지에 기여한 상속인은 기여분을 인정받을 수 있습니다. 하지만 기여분은 상속인 전원의 협의 또는 가정법원 심판으로만 정해지며, 자동으로 적용되지 않습니다. <span class="law-ref">민법 제1008조의2</span></div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">인지·친생자 확인은 상속분 산정 전에 해결해야</div>
<div class="warn-desc">비혼 자녀(혼외자)는 인지 또는 친생자 확인 판결이 있어야 상속인 지위를 가집니다. 사망 후 친자 분쟁이 발생하면 상속분 계산 자체가 달라질 수 있으므로, 사전에 가족관계 확인이 필요합니다.</div>
</div>
</div>
</section>
<!-- ══ 6. 다음으로 확인할 내용 ══ -->
<section id="next">
<h2 class="sec-title">다음으로 확인할 내용</h2>
<div class="nav-grid">
<a class="nav-card" href="상속_07_한정승인.html">
<div class="nav-dir">◀ 이전</div>
<div class="nav-title">한정승인 — 절차와 청산방법</div>
<div class="nav-desc">채무가 재산을 초과할 우려가 있을 때, 상속받은 재산 한도로만 채무를 갚는 방법과 청산 절차</div>
</a>
<a class="nav-card" href="상속_09_유류분.html">
<div class="nav-dir">다음 ▶</div>
<div class="nav-title">유류분 — 최소 보장 상속분</div>
<div class="nav-desc">유언이나 증여로 상속에서 배제되었을 때, 법이 보장하는 최소 상속분 반환청구 방법</div>
</a>
</div>
</section>
<!-- ══ 7. CTA ══ -->
<section id="cta">
<div class="cta-section">
<h3>상속분 계산이 복잡하거나 분쟁이 예상되신다면</h3>
<p>특별수익·기여분·대습상속이 얽힌 경우 계산이 매우 복잡해질 수 있습니다.<br/>
    법무사와 함께 정확한 상속분을 산정하고, 협의분할 또는 조정 방법을 미리 준비하세요.</p>
<a class="cta-btn" href="#">무료 상담 신청하기</a>
</div>
</section>
<!-- ══ 면책 ══ -->`
          }
        ],
        laws: [
          { name: '민법 제1012조', desc: '' },
          { name: '민법 제1009조', desc: '' },
          { name: '민법 제1010조', desc: '' },
          { name: '민법 제1008조', desc: '' },
          { name: '민법 제1008조의2', desc: '' },
          { name: '민법 제1009조 제2항', desc: '' }
        ],
        forms: []
      },
      {
        id: 'in-09', title: '특별수익',
        meta: '사전 증여·유증이 내 상속분에 어떻게 반영되는지, 간병과 기여는 어떻게 보호받는지 안내합니다',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ══ 헤더 ══ -->

<!-- ══ 0. 이런 분께 ══ -->
<section id="target">
<h2 class="sec-title">이런 분께 도움이 됩니다</h2>
<ul class="target-list">
<li>다른 형제자매가 생전에 부모로부터 많은 증여를 받아 불공평하다고 느끼는 분</li>
<li>피상속인이 사망 전에 특정 상속인에게 유증(유언 증여)을 한 경우</li>
<li>부모를 오랫동안 직접 모시며 부양·간병한 상속인이 더 받을 수 있는지 궁금한 분</li>
<li>사업 자금·주택 구입 자금 등을 미리 받은 자녀가 있는 경우 상속분을 알고 싶은 분</li>
<li>협의분할 전 구체적 상속분을 정확히 계산하고 싶은 분</li>
<li>상속 분쟁 중 특별수익 또는 기여분 인정 여부를 확인해야 하는 분</li>
</ul>
</section>
<!-- ══ 1. 핵심 요약 ══ -->
<section id="summary">
<h2 class="sec-title">핵심 요약</h2>
<div class="summary-box">
<h3>📌 두 가지 상속분 조정 제도</h3>
<p><strong>특별수익</strong> — 피상속인이 특정 상속인에게 생전에 준 증여·유증은 <strong>상속분의 선급(先給)</strong>으로 취급합니다. 이미 받은 만큼을 제하고 상속받습니다. <span class="law-ref">민법 제1008조</span></p>
<p><strong>기여분</strong> — 피상속인을 특별히 부양하거나 재산 유지·증가에 기여한 상속인은 <strong>법정상속분보다 추가</strong>로 받을 수 있습니다. <span class="law-ref">민법 제1008조의2</span></p>
<p>두 제도 모두 <strong>공동상속인 사이의 공평</strong>을 위한 것입니다. 상속인 전원의 협의 또는 가정법원 심판으로 결정됩니다.</p>
</div>
<!-- 두 제도 비교 카드 -->
<div class="compare-grid">
<div class="compare-card toksu">
<span class="card-badge">특별수익</span>
<div class="card-title">생전증여·유증 반영</div>
<div class="card-law">민법 제1008조</div>
<ul>
<li>생전증여 또는 유증을 받은 경우</li>
<li>상속재산에 가산 후 상속분 비율 적용</li>
<li>이미 받은 금액만큼 상속에서 공제</li>
<li>가액 평가: 상속개시 시 기준 원칙</li>
<li>분쟁 시 가정법원 심판 가능</li>
</ul>
</div>
<div class="compare-card kibyo">
<span class="card-badge">기여분</span>
<div class="card-title">특별 부양·기여 인정</div>
<div class="card-law">민법 제1008조의2</div>
<ul>
<li>장기간 동거 간병·부양한 경우</li>
<li>사업수행에 노무·재산 기여한 경우</li>
<li>기여분 공제 후 상속재산으로 계산</li>
<li>기여분은 가정법원 심판 또는 협의</li>
<li>자동 인정 아님 — 반드시 주장해야</li>
</ul>
</div>
</div>
</section>
<!-- ══ 2. 상세 내용 ══ -->
<section id="detail">
<h2 class="sec-title">상세 내용</h2>
<!-- ─ 특별수익 ─ -->
<h3 class="sub-title">① 특별수익 — 생전증여·유증의 처리 <span class="law-ref">민법 제1008조</span></h3>
<p class="detail-text">
    공동상속인 중에 피상속인으로부터 <strong>재산의 증여 또는 유증</strong>을 받은 사람이 있는 경우, 그 수증재산이 자기의 상속분에 달하지 못한 때에는 그 부족한 부분의 한도에서만 상속분이 있습니다. 이를 <strong>특별수익자의 상속분</strong>이라 합니다.
  </p>
<h4 class="sub-sub">특별수익에 해당하는 경우</h4>
<p class="detail-text">
    어떤 생전증여가 특별수익인지는 피상속인의 자산·수입·생활수준·가정 상황 등을 참작하여, 해당 증여가 <strong>장차 돌아갈 상속재산 중 그 몫의 일부를 미리 준 것</strong>인지 여부로 판단합니다.<br/>
    대표적인 예: 혼인·분가 자금, 주택 구입 자금, 사업 밑천, 유언에 의한 유증 등.<br/>
    단, <strong>생명보험금·사망퇴직금·유족연금</strong>은 상속재산에 포함되지 않지만 특별수익에는 해당합니다.
  </p>
<h4 class="sub-sub">특별수익 계산 공식</h4>
<div class="formula-section">
<div class="formula-title">
<span class="badge">계산식</span> 구체적 상속분 산정 (특별수익자가 있는 경우)
    </div>
<div class="formula-body">
      간주 상속재산 = 현존 상속재산 + 생전증여 합계액<br/>
      ↓<br/>
      구체적 상속분 = 간주 상속재산 × 법정상속분율 − 특별수익 가액<br/>
      ↓<br/>
      상속 이익 = 구체적 상속분 + 특별수익 가액
    </div>
<div class="formula-note">※ 유증은 이미 상속재산 안에 포함되어 있으므로 별도 가산 불필요 / 가액 평가 기준: 상속개시 시</div>
</div>
<h4 class="sub-sub">특별수익 계산 사례</h4>
<div class="case-example">
<div class="case-label">사례 — 생전증여·유증이 있는 경우</div>
<p>甲(피상속인) 사망 / 상속재산 8,500만원 / 상속인: 배우자 처, 장남, 장녀, 차남</p>
<p>① 장남: 혼인 자금으로 생전증여 500만원 수령</p>
<p>② 차남: 유언으로 유증 900만원 (상속재산 내 포함)</p>
<p>법정상속분율: 처 3/9 · 장남 2/9 · 장녀 2/9 · 차남 2/9</p>
<p>간주 상속재산 = 8,500 + 500(생전증여) = <strong>9,000만원</strong> (유증 900만원은 이미 8,500만원 안에 포함)</p>
<table class="calc-table-mini">
<thead>
<tr>
<th>상속인</th>
<th>간주상속재산×비율</th>
<th>특별수익 공제</th>
<th>구체적 상속분</th>
<th>상속 이익</th>
</tr>
</thead>
<tbody>
<tr>
<td>처</td>
<td>9,000 × 3/9 = 3,000만원</td>
<td>−0</td>
<td>3,000만원</td>
<td>3,000만원</td>
</tr>
<tr>
<td>장남</td>
<td>9,000 × 2/9 = 2,000만원</td>
<td>−500만원</td>
<td>1,500만원</td>
<td>2,000만원</td>
</tr>
<tr>
<td>장녀</td>
<td>9,000 × 2/9 = 2,000만원</td>
<td>−0</td>
<td>2,000만원</td>
<td>2,000만원</td>
</tr>
<tr>
<td>차남</td>
<td>9,000 × 2/9 = 2,000만원</td>
<td>−900만원</td>
<td>1,100만원</td>
<td>2,000만원</td>
</tr>
<tr>
<td colspan="3"><strong>합계</strong></td>
<td><strong>7,600만원</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<div class="calc-result">※ 특별수익이 있어도 최종 상속 이익은 모두 2,000만원으로 공평하게 됩니다. 장남의 구체적 상속분(실제 취득액)은 1,500만원입니다.</div>
</div>
<h4 class="sub-sub">특별수익에서 제외될 수 있는 경우</h4>
<p class="detail-text">
    증여가 상속인의 <strong>특별한 부양·기여에 대한 대가</strong>의 의미를 포함하고 있다면, 그 한도에서 특별수익에서 제외할 수 있습니다. 단, 유류분제도를 형해화시키지 않도록 신중하게 판단해야 합니다.
    <span class="law-ref">대법원 2022다230083</span>
</p>
<!-- ─ 기여분 ─ -->
<h3 class="sub-title">② 기여분 — 특별 부양·기여에 대한 보상 <span class="law-ref">민법 제1008조의2</span></h3>
<div class="kibyo-box">
<div class="kibyo-title">💜 기여분이란?</div>
<p>공동상속인 중에 상당한 기간 동거·간호 그 밖의 방법으로 피상속인을 <strong>특별히 부양</strong>하거나, 피상속인의 재산의 <strong>유지 또는 증가에 특별히 기여</strong>한 자가 있을 때, 그 기여를 법정상속분과 별도로 인정하여 상속분을 추가하는 제도입니다.</p>
<p>기여분은 상속인 전원의 협의 또는 <strong>가정법원의 심판</strong>을 통해서만 확정됩니다. 법정상속분이 자동으로 늘어나지는 않습니다.</p>
</div>
<h4 class="sub-sub">기여분이 인정되는 유형</h4>
<ul class="kibyo-types">
<li>
<div class="type-name">장기간 동거·간호</div>
      간병인 고용이 필요한 상황에서 직접 수년 이상 요양간호를 수행한 경우
    </li>
<li>
<div class="type-name">사업 노무 제공</div>
      피상속인의 사업체에서 무보수 또는 적은 급여로 장기간 노동력을 제공한 경우
    </li>
<li>
<div class="type-name">무이자 금전 대여</div>
      피상속인의 사업·생활을 위해 본인 자금을 무이자로 빌려준 경우
    </li>
<li>
<div class="type-name">재산 증여·사용 대차</div>
      피상속인에게 부동산 무상 사용 제공, 재산 증여 등으로 재산 유지에 기여한 경우
    </li>
</ul>
<h4 class="sub-sub">기여분이 인정되지 않는 경우</h4>
<p class="detail-text">
    통상 가족 간에 기대되는 수준의 부양(일반적 공양)은 기여분으로 인정되지 않습니다. 또한 상속을 포기한 자, 상속분을 양도한 자, 상속결격자, <strong>사실혼 배우자, 상속인의 배우자</strong>(며느리, 사위 등)는 기여분을 청구할 수 없습니다.
  </p>
<h4 class="sub-sub">기여분 계산 공식</h4>
<div class="formula-section">
<div class="formula-title">
<span class="badge" style="background: var(--kibyo-bd);">계산식</span> 구체적 상속분 산정 (기여분이 있는 경우)
    </div>
<div class="formula-body">
      기여분 공제 상속재산 = 상속재산 − 기여분 가액<br/>
      ↓<br/>
      기여자 상속분 = 기여분 공제 상속재산 × 법정상속분율 + 기여분<br/>
      ↓<br/>
      다른 상속인 상속분 = 기여분 공제 상속재산 × 법정상속분율
    </div>
<div class="formula-note">※ 기여분은 상속재산 가액에서 유증의 가액을 공제한 액을 초과할 수 없습니다 (민법 제1008조의2 제3항)</div>
</div>
<h4 class="sub-sub">기여분 계산 사례</h4>
<div class="case-example">
<div class="case-label">사례 — 장남이 기여분을 인정받은 경우</div>
<p>甲(피상속인) 사망 / 상속재산 1,200만원 / 상속인: 배우자 처, 장남, 차남</p>
<p>장남이 피상속인의 사업에 장기 노무 제공 → 기여분 300만원 인정</p>
<p>법정상속분율: 처 3/9 · 장남 2/9 · 차남 2/9</p>
<table class="calc-table-mini">
<thead>
<tr>
<th>상속인</th>
<th>기여공제재산(900만원)×비율</th>
<th>기여분 가산</th>
<th>구체적 상속분</th>
</tr>
</thead>
<tbody>
<tr>
<td>처</td>
<td>900 × 3/9 = 300만원</td>
<td>—</td>
<td>300만원</td>
</tr>
<tr>
<td>장남 (기여자)</td>
<td>900 × 2/9 = 200만원</td>
<td>+300만원</td>
<td><strong>500만원</strong></td>
</tr>
<tr>
<td>차남</td>
<td>900 × 2/9 = 200만원</td>
<td>—</td>
<td>200만원</td>
</tr>
<tr>
<td colspan="3"><strong>합계</strong></td>
<td><strong>1,000만원</strong></td>
</tr>
</tbody>
</table>
<div class="calc-result">기여분 공제 상속재산 1,200 − 300 = 900만원 → 장남 상속이익 500만원 (기여분이 없었다면 267만원)</div>
</div>
</section>
<!-- ══ 5. Q&A ══ -->
<section id="qa">
<h2 class="sec-title">자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q1</span>
      오빠가 결혼할 때 부모님께 3억 원짜리 아파트를 받았습니다. 이게 특별수익이 되나요?
    </div>
<div class="qna-a">
      주택 구입 자금이나 분가를 위한 부동산 증여는 특별수익에 해당할 가능성이 높습니다. 단, 부모님의 자산 규모·생활수준을 고려했을 때 해당 증여가 상속재산 중 몫의 일부를 미리 준 것으로 볼 수 있어야 합니다. 특별수익으로 인정되면, 상속재산에 3억 원을 합산한 뒤 법정상속분율로 나누고 오빠의 상속분에서 3억 원을 공제합니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 특별수익 해당 여부와 가액 산정은 구체적 사안에 따라 다를 수 있으므로 법무사·변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q2</span>
      특별수익이 법정상속분보다 많을 경우는 어떻게 되나요?
    </div>
<div class="qna-a">
      수증재산(받은 금액)이 이미 법정상속분을 초과한 경우, 그 상속인의 구체적 상속분은 <strong>0원</strong>이 됩니다. 다만 이미 받은 금액을 돌려줄 의무(초과분 반환 의무)는 원칙적으로 없습니다. 하지만 유류분을 침해했다면 다른 상속인이 유류분 반환청구를 할 수 있습니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 초과특별수익과 유류분 문제는 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q3</span>
      부모님을 10년간 모시며 직장도 그만뒀습니다. 기여분을 얼마나 받을 수 있나요?
    </div>
<div class="qna-a">
      기여분의 액수는 정해진 공식이 없습니다. 기여의 시기·방법·정도, 상속재산 규모 등을 종합하여 상속인 전원이 협의하거나 가정법원이 재량으로 결정합니다. 직장을 그만두고 장기간 동거·간호했다면 기여분이 인정될 가능성이 높지만, 통상적 부양의무 수준을 넘었다는 것을 구체적으로 입증해야 합니다. 간병 일지, 의료비 영수증, 가족 진술 등이 증거로 활용됩니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 기여분 금액 판단은 사안마다 다르므로 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q4</span>
      특별수익과 기여분이 동시에 적용되는 경우는 어떻게 계산하나요?
    </div>
<div class="qna-a">
      두 제도를 순서대로 적용합니다. ① 먼저 기여분을 공제하여 기여분 공제 상속재산을 산정합니다. ② 그 기여분 공제 상속재산에 생전증여를 합산하여 간주 상속재산을 구합니다. ③ 간주 상속재산에 법정상속분율을 곱한 뒤, 각 상속인의 특별수익 가액을 공제합니다. ④ 기여자는 여기에 기여분을 가산합니다. 계산이 복잡하므로 반드시 전문가의 도움을 받으시기 바랍니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 동시 적용 시 계산은 법무사·변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q5</span>
      20년 전 부모님으로부터 받은 증여도 특별수익으로 포함되나요?
    </div>
<div class="qna-a">
      특별수익 규정(민법 제1008조)에는 시효 제한이 없어 <strong>시기에 관계없이</strong> 모든 생전증여가 원칙적으로 포함될 수 있습니다. 다만 오래된 증여의 가액 평가(상속개시 시 기준)가 어려운 경우, 물가 변동을 반영하여 산정합니다. 반면 유류분에서는 원칙적으로 상속 개시 전 1년 내 증여만 해당되므로 특별수익과 유류분의 적용 범위가 다릅니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 특별수익 시기 문제는 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q6</span>
      형제들이 기여분을 인정해주지 않아 협의가 안 됩니다. 어떻게 해야 하나요?
    </div>
<div class="qna-a">
      상속인 간 기여분 협의가 되지 않으면, <strong>가정법원에 기여분 결정 심판</strong>을 청구할 수 있습니다. 이 심판은 상속재산분할 심판 청구가 있는 경우 또는 가정법원이 인정하는 경우에 할 수 있습니다. 기여 사실을 입증할 증거(의료기록, 간병 일지, 영수증, 목격자 진술 등)를 미리 확보해두는 것이 중요합니다. <span class="law-ref">민법 제1008조의2 제2항</span>
<div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 기여분 심판 청구 절차는 법무사·변호사와 상담하시기 바랍니다.</div>
</div>
</div>
</section>
<!-- ══ 3. 관련 판례 ══ -->
<section id="ruling">
<h2 class="sec-title">관련 판례</h2>
<div class="ruling-card">
<div class="ruling-id">대법원 1998. 12. 8. 선고 97므513, 520, 97스12 판결</div>
<div class="ruling-summary">특별수익 해당 여부의 판단기준을 제시한 기준 판결입니다. 어떤 생전증여가 특별수익인지는 피상속인의 생전 자산·수입·생활수준·가정상황을 참작하고, 해당 증여가 장차 상속인에게 돌아갈 상속재산 중 그 몫의 일부를 미리 주는 것으로 볼 수 있는지에 따라 결정한다고 판시하였습니다.</div>
<div class="ruling-point">실무 포인트: 단순한 생활비 지원·교육비는 특별수익이 아닐 수 있지만, 주택 구입 자금·사업 자금 등은 특별수익으로 볼 가능성이 높습니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 1995. 3. 10. 선고 94다16571 판결</div>
<div class="ruling-summary">특별수익자가 있는 경우 구체적 상속분의 계산 방법을 확립한 판결입니다. 상속개시 당시 재산에 생전증여 가액을 가산한 간주 상속재산에 법정상속분율을 곱한 후, 특별수익 가액을 공제하는 방법에 의한다고 판시하였습니다.</div>
<div class="ruling-point">실무 포인트: 가산의 기초가 되는 재산은 적극재산 전액입니다. 채무(소극재산)는 포함하지 않습니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 2022. 3. 17. 선고 2021다230083, 230090 판결</div>
<div class="ruling-summary">생전증여에 상속인의 특별한 부양·기여에 대한 대가 의미가 포함된 경우 특별수익에서 제외할 수 있다고 판시하였습니다. 다만 그 판단은 당사자 의사, 부양·기여의 구체적 내용과 정도, 증여 목적물의 종류 및 가액 등을 종합적으로 고려하여야 하며, 유류분제도를 형해화시키지 않도록 신중해야 한다고 하였습니다.</div>
<div class="ruling-point">실무 포인트: 간병을 이유로 한 증여 전부가 자동으로 특별수익에서 제외되지는 않으며, 법원의 판단이 필요합니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">서울가정법원 2006. 5. 12.자 2005느합77 심판</div>
<div class="ruling-summary">기여분 인정 요건에 관하여, 공동상속인 사이의 공평을 위해 상속분을 조정해야 할 필요가 있을 만큼 피상속인을 특별히 부양하였거나, 상속재산의 유지 또는 증가에 특별히 기여하였다는 사실이 인정되어야 한다고 판시하였습니다.</div>
<div class="ruling-point">실무 포인트: 통상적인 가족 간 공양이나 일반적 부양의무 이행만으로는 기여분이 인정되지 않습니다. 특별성 입증이 핵심입니다.</div>
</div>
</section>
<!-- ══ 4. 주의사항 ══ -->
<section id="caution">
<h2 class="sec-title">주의사항</h2>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">특별수익은 자동 공제되지 않습니다</div>
<div class="warn-desc">특별수익의 해당 여부와 가액은 상속인 전원의 협의 또는 가정법원 심판을 통해 결정됩니다. 협의가 이루어지지 않으면 소송·심판을 통해야 하며, 입증 책임은 특별수익을 주장하는 상속인에게 있습니다.</div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">기여분도 자동 인정이 아닙니다</div>
<div class="warn-desc">기여분은 기여한 상속인이 직접 청구해야 하며, 가정법원에 심판을 청구하거나 다른 상속인 전원의 동의를 받아야 합니다. 오랫동안 부모를 모셨더라도 기여분 청구 절차를 밟지 않으면 법정상속분만 받습니다. 기여분 심판은 상속재산분할 심판 청구가 있을 때 함께 청구합니다.</div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">며느리·사위는 기여분 대상이 아닙니다</div>
<div class="warn-desc">상속인이 아닌 사람(며느리, 사위, 사실혼 배우자 등)은 아무리 오래 간병하고 기여해도 민법상 기여분을 청구할 수 없습니다. 다만 부당이득 반환청구나 용역비 청구는 별도로 가능할 수 있으므로 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">상속포기자는 특별수익·기여분 모두 적용 제외</div>
<div class="warn-desc">상속을 포기하면 처음부터 상속인이 아니었던 것과 같이 되므로, 포기자에게는 특별수익 공제 규정이 적용되지 않습니다. 따라서 특별수익을 많이 받은 상속인이 상속을 포기하면, 그 포기자의 특별수익이 유류분 계산에서 달리 취급될 수 있습니다.</div>
</div>
</div>
</section>
<!-- ══ 6. 다음으로 확인할 내용 ══ -->
<section id="next">
<h2 class="sec-title">다음으로 확인할 내용</h2>
<div class="nav-grid">
<a class="nav-card" href="상속_08_상속분.html">
<div class="nav-dir">◀ 이전</div>
<div class="nav-title">상속분 계산 — 내 상속분은 얼마지</div>
<div class="nav-desc">법정상속분 공식, 배우자·자녀·부모 간 비율, 대습상속 계산 방법</div>
</a>
<a class="nav-card" href="상속_10_유류분.html">
<div class="nav-dir">다음 ▶</div>
<div class="nav-title">유류분 — 최소 보장 상속분</div>
<div class="nav-desc">유언이나 증여로 상속에서 배제되었을 때 법이 보장하는 최소 상속분과 반환청구 방법</div>
</a>
</div>
</section>
<!-- ══ 7. CTA ══ -->
<section id="cta">
<div class="cta-section">
<h3>특별수익·기여분 분쟁, 혼자 해결하기 어려우시다면</h3>
<p>증거 수집 방법, 가정법원 심판 청구 절차,<br/>
    협의분할서 작성까지 법무사가 함께합니다.</p>
<a class="cta-btn" href="#">무료 상담 신청하기</a>
</div>
</section>
<!-- ══ 면책 ══ -->`
          }
        ],
        laws: [
          { name: '민법 제1008조', desc: '' },
          { name: '민법 제1008조의2', desc: '' },
          { name: '대법원 2022다230083', desc: '' },
          { name: '민법 제1008조의2 제2항', desc: '' }
        ],
        forms: []
      },
      {
        id: 'in-10', title: '상속재산 분할',
        meta: '공동상속인들이 재산을 나누는 세 가지 방법과 각 절차 실무 안내',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ══ 헤더 ══ -->

<!-- ══ 0. 이런 분께 ══ -->
<section id="target">
<h2 class="sec-title">이런 분께 도움이 됩니다</h2>
<ul class="target-list">
<li>상속이 개시된 후 다른 상속인들과 재산을 어떻게 나눌지 모르는 분</li>
<li>협의분할서를 작성해야 하는데 어떤 내용이 들어가야 하는지 궁금한 분</li>
<li>형제자매 간에 분할 방법에 대한 의견이 달라 협의가 어려운 분</li>
<li>상속인 중 한 명이 연락이 되지 않거나 협의를 거부하는 분</li>
<li>부동산·예금·주식 등 재산 종류에 따라 어떻게 분할할지 모르는 분</li>
<li>이미 분할된 상속재산에 문제가 생겨 재분할을 검토 중인 분</li>
</ul>
</section>
<!-- ══ 1. 핵심 요약 ══ -->
<section id="summary">
<h2 class="sec-title">핵심 요약</h2>
<div class="summary-box">
<h3>📌 상속재산분할의 세 가지 경로</h3>
<p><strong>① 협의분할</strong> — 공동상속인 전원의 합의로 원하는 방식대로 나눕니다. 가장 빠르고 유연합니다.</p>
<p><strong>② 조정</strong> — 협의가 안 될 때 가정법원에 조정을 신청합니다. 중립적인 조정위원이 도와 합의를 이끌어냅니다.</p>
<p><strong>③ 심판</strong> — 조정에서도 합의가 안 되면 법원이 분할 방법을 직접 결정합니다.</p>
</div>
<div class="path-grid">
<div class="path-card step1">
<div class="path-num">1</div>
<div class="path-title">협의분할</div>
<div class="path-desc">상속인 전원의 동의로 자유롭게 분할. 법정상속분과 달리 정해도 됨.</div>
<div class="path-law">민법 제1013조</div>
</div>
<div class="path-card step2">
<div class="path-num">2</div>
<div class="path-title">가정법원 조정</div>
<div class="path-desc">협의 실패 시 가정법원 조정 신청. 조정 성립 시 심판과 동일 효력.</div>
<div class="path-law">가사소송법 제49조</div>
</div>
<div class="path-card step3">
<div class="path-num">3</div>
<div class="path-title">가정법원 심판</div>
<div class="path-desc">조정 불성립 시 법원이 분할 방법 결정. 최후의 수단.</div>
<div class="path-law">가사소송법 제2조</div>
</div>
</div>
</section>
<!-- ══ 2. 상세 내용 ══ -->
<section id="detail">
<h2 class="sec-title">상세 내용</h2>
<!-- 분할의 의의 -->
<h3 class="sub-title">상속재산분할이란?</h3>
<p class="detail-text">
    상속이 개시되면 공동상속인들은 상속재산 전체를 공유하는 상태가 됩니다. 상속재산분할이란 이 <strong>공유 상태를 해소하여 각 상속인에게 구체적인 재산을 귀속시키는 절차</strong>입니다. 분할은 상속개시 즉시 청구할 수 있으며, 분할을 완료해야 비로소 부동산 등기 이전, 예금 해지, 주식 명의 변경 등이 가능해집니다.
  </p>
<p class="detail-text">
    분할의 대상은 상속재산 중 <strong>적극재산</strong>(부동산·예금·주식 등)입니다. 채무(소극재산)는 별도의 분할 절차 없이 법정상속분에 따라 당연히 분할됩니다. 유언으로 분할 방법이 정해진 경우에는 유언이 우선하며, 피상속인은 유언으로 <strong>5년 이내</strong>의 분할 금지를 정할 수도 있습니다. <span class="law-ref">민법 제1012조</span>
</p>
<!-- 협의분할 -->
<h3 class="sub-title">① 협의분할 <span class="law-ref">민법 제1013조</span></h3>
<p class="detail-text">
    공동상속인 전원이 합의하면 법정상속분이나 유언의 내용과 무관하게 어떤 방식으로든 분할할 수 있습니다. <strong>전원의 동의가 반드시 필요</strong>하며, 한 명이라도 빠지면 협의분할이 성립하지 않습니다. 협의 내용을 서면(협의분할서·분할협의서)으로 작성하여 부동산 등기·금융기관 제출 등에 활용합니다.
  </p>
<h4 class="sub-sub">협의분할서 필수 기재 사항</h4>
<div class="inh-checklist">
<div class="cl-title">📝 협의분할서 체크리스트</div>
<ul>
<li>피상속인의 성명, 주민등록번호, 사망일, 최후 주소<span class="note">가족관계증명서·기본증명서로 확인</span></li>
<li>공동상속인 전원의 성명, 주민등록번호, 주소<span class="note">일부라도 빠지면 무효</span></li>
<li>분할 대상 재산의 목록 (부동산은 소재지·지번·면적, 예금은 계좌번호·금액 등)<span class="note">분할 후 등기·이전에 기재된 내용이 그대로 사용됨</span></li>
<li>각 상속인별 취득 재산 내역 (누가 무엇을 어느 지분으로 취득하는지)<span class="note">법정상속분과 달리 정해도 무방</span></li>
<li>상속인 전원의 서명 또는 기명날인<span class="note">부동산 등기 신청 시 인감도장 + 인감증명서 필요</span></li>
</ul>
</div>
<h4 class="sub-sub">미성년자 또는 부재 상속인이 있는 경우</h4>
<p class="detail-text">
    상속인 중 미성년자가 있고 법정대리인(친권자)도 공동상속인인 경우, 이해충돌이 발생하므로 법정대리인이 미성년 자녀를 대리할 수 없습니다. 이 경우 가정법원에 <strong>특별대리인 선임</strong>을 신청해야 합니다. 행방불명 상속인이 있다면 가정법원의 <strong>부재자 재산관리인 선임</strong> 또는 실종선고 후 분할을 진행할 수 있습니다.
  </p>
<!-- 분할의 방법 -->
<h3 class="sub-title">분할의 방법 — 현물·대상·경매</h3>
<div class="method-grid">
<div class="method-card">
<div class="method-name">현물분할</div>
<p>재산을 실물 그대로 나누는 방법. 토지·건물을 분할하거나 각 상속인이 특정 재산을 단독 취득.</p>
</div>
<div class="method-card">
<div class="method-name">대상분할 (가액분할)</div>
<p>특정 상속인이 재산을 전부 취득하고, 나머지 상속인에게는 상속분 해당 금액을 현금으로 지급.</p>
</div>
<div class="method-card">
<div class="method-name">경매분할</div>
<p>현물분할이 불가능하거나 현저히 불이익한 경우, 재산을 경매하여 그 대금을 상속분 비율로 분배.</p>
</div>
</div>
<table class="method-table">
<thead>
<tr>
<th>분할 방법</th>
<th>적합한 재산</th>
<th>장점</th>
<th>단점</th>
</tr>
</thead>
<tbody>
<tr>
<td>현물분할</td>
<td>토지, 여러 부동산, 예금·주식 복수</td>
<td>신속, 비용 절감</td>
<td>지분 불균형 발생 가능</td>
</tr>
<tr>
<td>대상분할</td>
<td>단독 부동산, 사업체</td>
<td>분쟁 최소화</td>
<td>취득자 현금 준비 필요</td>
</tr>
<tr>
<td>경매분할</td>
<td>협의 불가 시 모든 재산</td>
<td>강제 실현 가능</td>
<td>시가보다 낮은 낙찰가 위험</td>
</tr>
</tbody>
</table>
<!-- 조정·심판 절차 -->
<h3 class="sub-title">② 가정법원 조정 &amp; ③ 심판 절차</h3>
<div class="compare-2col">
<div class="col-card mediation">
<span class="cc-badge">조정</span>
<div class="cc-title">가정법원 조정</div>
<ul>
<li>협의 결렬 시 가정법원에 <strong>조정신청</strong></li>
<li>조정전치주의 적용 — 심판 전 조정이 원칙</li>
<li>조정위원(판사·전문가)이 합의를 중재</li>
<li>성립 시: 재판상 화해와 동일한 효력</li>
<li>불성립 시: 자동으로 심판으로 이행</li>
<li>비용: 심판보다 상대적으로 저렴</li>
</ul>
</div>
<div class="col-card trial">
<span class="cc-badge">심판</span>
<div class="cc-title">가정법원 심판</div>
<ul>
<li>조정 불성립 시 법원이 <strong>직권으로 분할</strong> 결정</li>
<li>특별수익·기여분 함께 심판 가능</li>
<li>법원이 현물·대상·경매 방법 선택 결정</li>
<li>심판 확정 시 등기신청에 직접 사용 가능</li>
<li>항고 → 재항고 가능 (즉시항고 2주)</li>
<li>마류 가사비송사건 <span style="font-size:12px;color:#666;">(가사소송법 제2조)</span></li>
</ul>
</div>
</div>
<h4 class="sub-sub">심판 청구 절차 개요</h4>
<div class="proc-flow">
<div class="proc-step">
<div class="proc-circle">1</div>
<div class="proc-content">
<div class="ps-title">관할 가정법원 확인</div>
<p>피상속인의 마지막 주소지 가정법원(또는 상속 부동산 소재지)에 신청합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-circle">2</div>
<div class="proc-content">
<div class="ps-title">조정 신청 또는 심판 청구서 작성</div>
<p>청구인·상대방(피고) 목록, 분할 대상 재산 목록, 희망 분할 방법을 기재합니다. 기여분·특별수익 청구를 병합할 수 있습니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-circle">3</div>
<div class="proc-content">
<div class="ps-title">인지·송달료 납부 및 접수</div>
<p>재산 가액에 따른 인지대와 당사자 수 기준 송달료를 납부합니다. 가족관계증명서·기본증명서·재산 관련 서류를 첨부합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-circle">4</div>
<div class="proc-content">
<div class="ps-title">심문·조정 기일 진행</div>
<p>법원은 당사자를 심문하고 재산 조사(금융정보조회·감정)를 실시합니다. 조정이 성립하면 종료됩니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-circle">5</div>
<div class="proc-content">
<div class="ps-title">심판 확정 → 등기 신청</div>
<p>심판 확정 후 심판서 정본을 첨부하여 부동산 등기·금융기관 이전 등을 진행합니다. 항고 기간(2주)이 지나면 확정됩니다.</p>
</div>
</div>
</div>
<!-- 분할의 효과 -->
<h3 class="sub-title">분할의 효과 — 소급효와 등기</h3>
<div class="effect-box">
<div class="eb-title">✅ 분할의 소급효</div>
<p>상속재산분할의 효력은 <strong>상속 개시 시(피상속인 사망 시)로 소급</strong>합니다. 따라서 협의분할 후 부동산 등기의 원인은 협의분할일이지만, 효력은 피상속인 사망일부터 발생한 것으로 봅니다. <span class="law-ref">민법 제1015조</span></p>
<p>단, 분할 전에 제3자가 이해관계를 취득한 경우(상속인이 지분을 담보로 제공하는 등)에는 소급효로써 제3자에게 대항할 수 없습니다. 그러므로 상속등기 후 신속하게 협의분할을 진행해야 합니다.</p>
</div>
<div class="effect-box">
<div class="eb-title">📋 분할 후 등기 원인 기재</div>
<p><strong>협의분할의 경우:</strong> 등기원인 = "협의분할로 인한 상속" / 원인일자 = 협의분할일</p>
<p><strong>심판·조정의 경우:</strong> 등기원인 = "○○법원 확정판결(또는 조정)에 의한 상속" / 원인일자 = 심판 확정일</p>
<p>상속등기 후 협의분할로 변경하는 경우에는 <strong>소유권경정등기</strong>를 신청합니다. 단, 가압류 등 이해관계인이 생긴 경우 별도 조치가 필요합니다.</p>
</div>
</section>
<!-- ══ 5. Q&A ══ -->
<section id="qa">
<h2 class="sec-title">자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q1</span>
      형이 협의분할에 협조하지 않습니다. 어떻게 해야 하나요?
    </div>
<div class="qna-a">
      상속인 중 한 명이 협의를 거부하거나 연락이 되지 않으면 협의분할이 성립하지 않습니다. 이 경우 가정법원에 <strong>상속재산분할 조정을 신청</strong>할 수 있습니다. 조정에서도 합의가 되지 않으면 법원이 심판을 통해 분할 방법을 결정합니다. 조정·심판 절차에는 통상 수개월이 소요됩니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 구체적인 절차는 법무사·변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q2</span>
      법정상속분보다 많이 가져가는 협의분할도 유효한가요?
    </div>
<div class="qna-a">
      네, 유효합니다. 협의분할에서는 상속인 전원이 동의한다면 <strong>법정상속분과 전혀 다르게 나눌 수 있습니다</strong>. 예를 들어 배우자에게 모든 재산을 주거나, 특정 자녀가 부동산을 전부 취득하는 것도 가능합니다. 다만 다른 상속인의 유류분을 침해하는 경우 유류분 반환청구 문제가 발생할 수 있습니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 유류분 관련 문제는 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q3</span>
      미성년 자녀가 있을 때 협의분할은 어떻게 하나요?
    </div>
<div class="qna-a">
      친권자(예: 어머니)와 미성년 자녀가 모두 상속인인 경우, 친권자가 자녀를 대리하면 이해충돌이 발생합니다. 이때는 가정법원에 <strong>특별대리인 선임을 신청</strong>해야 하며, 특별대리인이 미성년 자녀를 대리하여 협의분할에 참여합니다. 신청 후 결정까지 통상 수 주가 소요됩니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 구체적인 절차는 전문가와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q4</span>
      협의분할이 완료된 후에 숨겨진 상속재산이 발견되었습니다. 어떻게 해야 하나요?
    </div>
<div class="qna-a">
      기존 협의분할에 포함되지 않은 새로운 상속재산이 발견된 경우, 해당 재산에 대해 <strong>다시 협의분할</strong>을 할 수 있습니다. 기존 분할 협의가 전체 재산을 포괄하여 효력이 있다고 볼 수 있는 특별한 사정이 없는 한, 미포함 재산은 다시 공유 상태에 있으므로 별도 분할 절차가 필요합니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 개별 사안은 법무사·변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q5</span>
      상속재산분할 심판을 신청하면 비용이 얼마나 드나요?
    </div>
<div class="qna-a">
      심판 청구 시 비용은 크게 ① 인지대(재산 가액 기준), ② 송달료(당사자 수 × 5,200원 × 15회), ③ 감정료(부동산 감정 시)로 구성됩니다. 인지대는 공유물분할청구 기준(목적물 가액 × 공유지분 비율 × 1/3)에 준하여 산정됩니다. 전문가(법무사·변호사) 보수는 별도입니다. 사건이 복잡할수록 비용과 기간이 증가합니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 정확한 비용은 법원 또는 전문가에게 문의하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-label">Q6</span>
      협의분할서에 서명했는데 나중에 취소할 수 있나요?
    </div>
<div class="qna-a">
      원칙적으로 협의분할은 계약이므로 일방적인 취소가 어렵습니다. 다만, ① 사기·강박에 의한 의사표시는 취소할 수 있고, ② 착오에 의한 경우에도 중요 부분의 착오라면 취소 가능성이 있습니다. 단순히 불리하게 합의했다는 사정이나 후회만으로는 취소가 인정되지 않습니다. 협의서 서명 전 내용을 충분히 이해하는 것이 중요합니다.
      <div class="qa-disclaimer">※ 위 내용은 일반적인 법률 정보 안내입니다. 취소 가능 여부는 구체적 사안에 따라 달라지므로 법무사·변호사와 상담하시기 바랍니다.</div>
</div>
</div>
</section>
<!-- ══ 3. 관련 판례 ══ -->
<section id="ruling">
<h2 class="sec-title">관련 판례</h2>
<div class="ruling-card">
<div class="ruling-id">대법원 2001. 6. 29. 선고 2001다28299 판결</div>
<div class="ruling-summary">상속재산 분할협의는 공동상속인 전원이 참가하여야 하며, 일부 상속인이 빠진 분할협의는 무효라고 판시하였습니다. 또한 분할협의 후 다른 상속인이 출현한 경우 기존 협의가 소급 무효가 됩니다.</div>
<div class="ruling-point">실무 포인트: 상속인 조사를 철저히 한 후 협의분할에 착수해야 합니다. 특히 혼외자·입양자 등의 존재 여부를 반드시 확인하세요.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 2004. 7. 8. 선고 2002다73203 판결</div>
<div class="ruling-summary">분할협의 후 협의 내용이 사기나 강박에 의한 것이었다면 취소할 수 있으나, 단순히 법정상속분보다 불리하게 합의했다는 사정만으로는 취소 사유가 되지 않는다고 판시하였습니다.</div>
<div class="ruling-point">실무 포인트: 분할협의서에 서명하기 전 반드시 내용을 충분히 이해한 후 서명하세요. 서명 후에는 단순 불만으로는 취소가 어렵습니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 2009. 2. 26. 선고 2008다89712 판결</div>
<div class="ruling-summary">상속재산분할 협의 후 합의한 내용대로 등기가 이루어졌다면, 나중에 특별수익이나 기여분 주장을 이유로 분할 협의의 효력을 다시 다툴 수 없다고 판시하였습니다. 협의분할은 기여분·특별수익을 전제로 한 구체적 상속분을 반영한 최종 합의이기 때문입니다.</div>
<div class="ruling-point">실무 포인트: 기여분·특별수익 주장은 협의분할 합의 전에 반드시 정리하고, 이를 협의서에 반영해야 합니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-id">대법원 1995. 4. 7. 선고 94다11835 판결</div>
<div class="ruling-summary">상속재산 협의분할은 피상속인의 사망으로 공동 상속된 재산에 대해 공동상속인들이 합의로 그 귀속을 정하는 것이고, 그 효력은 상속개시 시에 소급하여 발생한다고 판시하였습니다. 또한 협의분할에 의한 등기 후 재분할하는 경우에도 최초 상속등기에 소급하여 효력이 미침을 확인하였습니다.</div>
<div class="ruling-point">실무 포인트: 협의분할서 작성 후 등기까지의 기간이 길어지면 그 사이에 상속인의 채무로 가압류 등이 들어올 수 있으므로 신속한 등기가 중요합니다.</div>
</div>
</section>
<!-- ══ 4. 주의사항 ══ -->
<section id="caution">
<h2 class="sec-title">주의사항</h2>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">상속인 전원의 동의 없이는 협의 무효</div>
<div class="warn-desc">상속인 중 한 명이라도 동의하지 않으면 협의분할은 성립하지 않습니다. 사전에 상속인 범위를 정확히 파악하는 것이 중요합니다. 이미 사망한 상속인의 경우 그 상속인의 상속인도 참여해야 합니다.</div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">협의분할 후 재분할 시 세금 주의</div>
<div class="warn-desc">일단 협의분할로 상속등기가 완료된 후 재분할(소유권경정등기)을 하는 경우, 취득세 등 세금이 추가로 부과될 수 있습니다. 특히 가압류·근저당 등 이해관계인이 생긴 후에는 재분할이 어려워지므로 처음부터 신중하게 협의해야 합니다.</div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">심판 청구 전 조정 신청이 원칙</div>
<div class="warn-desc">상속재산분할 심판은 조정전치주의가 적용됩니다. 즉, 먼저 가정법원에 조정을 신청해야 하고, 조정이 불성립된 경우에 심판으로 이행됩니다. 조정 없이 바로 심판을 청구하는 것은 원칙적으로 허용되지 않습니다.</div>
</div>
</div>
<div class="warn-box">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<div class="warn-title">상속채무(빚)는 분할 대상이 아닙니다</div>
<div class="warn-desc">상속채무는 협의분할의 대상이 아니며, 법정상속분에 따라 당연히 분할됩니다. 상속인들이 내부적으로 특정인이 채무를 부담하기로 합의해도 채권자에게는 대항할 수 없습니다. 채무 문제는 한정승인·상속포기(개시 후 3개월 이내)로 해결해야 합니다.</div>
</div>
</div>
</section>
<!-- ══ 6. 다음으로 확인할 내용 ══ -->
<section id="next">
<h2 class="sec-title">다음으로 확인할 내용</h2>
<div class="nav-grid">
<a class="nav-card" href="상속_09_특별수익.html">
<div class="nav-dir">◀ 이전</div>
<div class="nav-title">생전증여와 상속분 — 특별수익·기여분</div>
<div class="nav-desc">사전 증여가 내 상속분에 어떻게 반영되는지, 간병 기여는 어떻게 인정받는지 안내</div>
</a>
<a class="nav-card" href="상속_11_유류분.html">
<div class="nav-dir">다음 ▶</div>
<div class="nav-title">유류분 — 최소 보장 상속분</div>
<div class="nav-desc">유언이나 증여로 상속에서 배제되었을 때 법이 보장하는 최소 상속분 반환청구 방법</div>
</a>
</div>
</section>
<!-- ══ 7. CTA ══ -->
<section id="cta">
<div class="cta-section">
<h3>상속재산분할, 합의가 어려우시다면</h3>
<p>협의분할서 작성, 특별대리인 선임 신청,<br/>
    가정법원 조정·심판 청구까지 법무사가 함께합니다.</p>
<a class="cta-btn" href="#">무료 상담 신청하기</a>
</div>
</section>
<!-- ══ 면책 ══ -->`
          }
        ],
        laws: [
          { name: '민법 제1012조', desc: '' },
          { name: '민법 제1013조', desc: '' },
          { name: '민법 제1015조', desc: '' }
        ],
        forms: []
      },
      {
        id: 'in-11', title: '분할협의',
        meta: '상속인들이 합의로 재산을 나누는 가장 빠른 방법입니다.협의서 한 장을 제대로 작성해야 등기까지 한 번에 마칩니다.',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ===== HEADER ===== -->
<!-- ===== HERO ===== -->

<div class="page-wrap">
<!-- ===== 01. 이런 분께 ===== -->
<section class="section">
<h2 class="inh-section-title">이런 분께 도움이 됩니다
    <span class="sub">해당 상황을 확인하세요</span>
</h2>
<div class="target-grid">
<div class="target-item">
<div class="target-icon">🏠</div>
<div class="target-text">상속인 여러 명이 부동산을 공동으로 상속받았는데, 한 사람 명의로 등기하고 싶은 분</div>
</div>
<div class="target-item">
<div class="target-icon">✍️</div>
<div class="target-text">협의분할서를 어떻게 작성해야 하는지, 어떤 서류가 필요한지 모르는 분</div>
</div>
<div class="target-item">
<div class="target-icon">🔄</div>
<div class="target-text">이미 공동상속 등기를 마쳤는데 협의분할로 지분을 바꾸고 싶은 분 (경정등기)</div>
</div>
<div class="target-item">
<div class="target-icon">👶</div>
<div class="target-text">상속인 중에 미성년자나 피성년후견인이 포함되어 있어 특별대리인 선임이 필요한 분</div>
</div>
<div class="target-item">
<div class="target-icon">⚡</div>
<div class="target-text">협의분할 후 등기까지 한 번에 처리하고 싶은 분</div>
</div>
<div class="target-item">
<div class="target-icon">⚠️</div>
<div class="target-text">해외거주 상속인이 있어 절차가 복잡할 것 같아 걱정되는 분</div>
</div>
</div>
</section>
<!-- ===== 02. 핵심 요약 ===== -->
<section class="section">
<h2 class="inh-section-title">핵심 요약
    <span class="sub">꼭 알아야 할 3가지 원칙</span>
</h2>
<div class="summary-box">
<h3>🔑 협의분할의 3원칙</h3>
<ul class="summary-points">
<li>
<div class="pt-num">1</div>
<div><strong>상속인 전원 참여</strong> — 단 한 명이라도 빠지면 협의분할 자체가 무효입니다. 협의서에는 모든 상속인이 자필서명(또는 날인)하고, 각자의 인감증명서를 첨부해야 합니다.</div>
</li>
<li>
<div class="pt-num">2</div>
<div><strong>등기원인일자 = 피상속인 사망일</strong> — 협의서를 언제 작성했든 상관없이, 상속등기의 등기원인일자는 항상 피상속인이 사망한 날입니다. 단, 경정등기는 협의분할일이 기준입니다.</div>
</li>
<li>
<div class="pt-num">3</div>
<div><strong>소급효 있으나 제3자에게는 대항 불가</strong> — 협의분할 효력은 상속개시(사망) 시점으로 소급하지만(민법 제1015조), 그 사이에 지분에 가압류·근저당 등이 설정되었다면 협의분할로 제3자에게 대항할 수 없습니다.</div>
</li>
</ul>
<div class="summary-note">
      📌 <strong>핵심 한 줄 요약:</strong> 상속인 전원이 도장 찍고, 인감증명서 가져오면, 사망일 기준으로 등기 신청 가능합니다.
    </div>
</div>
</section>
<!-- ===== 03. 절차 흐름도 ===== -->
<section class="section">
<h2 class="inh-section-title">절차 흐름도
    <span class="sub">협의분할 등기까지 7단계</span>
</h2>
<div class="proc-flow">
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">1</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">사전 준비</span>
<h4>상속인 확정 및 상속재산 파악</h4>
<p>가족관계증명서·제적등본으로 법정상속인 전원을 확인합니다. 부동산은 등기사항전부증명서로, 금융재산은 금융거래정보 요청으로 파악합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">2</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">특수 상황 확인</span>
<h4>미성년자·금치산자 여부 확인 → 특별대리인 선임</h4>
<p>미성년 상속인이 있고, 그 친권자도 상속인인 경우에는 이해충돌로 특별대리인 선임이 필요합니다. 가정법원에 특별대리인 선임심판을 청구합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">3</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">협의</span>
<h4>분할 방법 협의 — 상속인 전원 합의</h4>
<p>누가 어느 재산을 얼마나 취득할지 상속인 전원이 협의합니다. 법정상속분과 다르게 분할하는 것도 가능합니다. 협의 결과를 문서화합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">4</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">서류 작성</span>
<h4>협의분할서 작성 → 인감날인 · 인감증명 징구</h4>
<p>협의분할서에 피상속인 정보, 상속재산 목록, 분할 내용을 기재하고, 상속인 전원이 인감을 날인합니다. 협의서가 여러 장이면 상속인 전원이 간인해야 합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">5</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">서류 수집</span>
<h4>첨부서류 일체 준비</h4>
<p>신분관계 서류(가족관계증명서, 기본증명서, 제적등본 등), 부동산 서류(등기사항전부증명서, 토지·건물대장 등), 협의분할서 관련 서류(인감증명서 등)를 준비합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">6</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">등기 신청</span>
<h4>관할 등기소 신청 (등기원인일자 = 피상속인 사망일)</h4>
<p>부동산 소재지 관할 등기소에 협의분할에 의한 상속등기를 신청합니다. 등기원인은 "협의분할에 의한 상속", 등기원인일자는 피상속인의 사망일입니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">7</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">완료</span>
<h4>등기 완료 → 등기사항전부증명서 확인</h4>
<p>등기 처리 후(통상 3~7 영업일) 등기사항전부증명서를 발급받아 분할 내용대로 등기되었는지 확인합니다.</p>
</div>
</div>
</div>
</section>
<!-- ===== 04. 단계별 상세 ===== -->
<section class="section">
<h2 class="inh-section-title">단계별 상세 안내
    <span class="sub">각 단계에서 꼭 확인해야 할 내용</span>
</h2>
<div class="detail-accordion">
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">1</div>
<h4>협의분할서 작성 요령</h4>
</div>
<div class="detail-body">
<p>협의분할서는 특정 양식이 법으로 정해져 있지 않지만, 다음 사항을 반드시 포함해야 합니다.</p>
<ul>
<li><strong>피상속인 표시</strong> — 성명, 주민등록번호, 최후 주소, 사망일자</li>
<li><strong>상속인 전원 표시</strong> — 각자의 성명·주민등록번호·주소, 피상속인과의 관계</li>
<li><strong>상속재산 목록</strong> — 부동산은 등기부상 표시와 동일하게 (소재지번, 지목/구조, 면적 등)</li>
<li><strong>분할 내용</strong> — 누가 어떤 재산을 단독 취득 또는 공유 취득하는지 명확하게</li>
<li><strong>작성일자 및 상속인 전원 인감 날인</strong></li>
</ul>
<div class="highlight">
          📋 협의서 상 주소와 인감증명서 상 주소가 다른 경우, 동일인임을 증명하는 서면(주민등록초본 등)을 별도로 첨부해야 합니다.
        </div>
<div class="warn-inline">
          ⚠️ 여러 장으로 된 협의분할서는 공동상속인 전원이 간인(페이지 사이에 도장)해야 합니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">2</div>
<h4>협의분할서 작성 예시</h4>
</div>
<div class="detail-body">
<div class="sample-box">
<h4>상속재산 협의분할서</h4>
<div class="sample-body">
<p>피상속인 망 김○○ (생년월일: ○○○○. ○○. ○○. / 주민등록번호: ○○○○○○-○○○○○○○)</p>
<p>최후 주소: 서울특별시 ○○구 ○○로 ○○○, ○○○호</p>
<p>사망일자: ○○○○년 ○○월 ○○일</p>
<br/>
<p>위 망인의 상속인들은 다음과 같이 상속재산을 분할하기로 협의합니다.</p>
<br/>
<p><strong>[상속재산 목록]</strong></p>
<p>서울특별시 ○○구 ○○로 ○○, ○○○호 [○○아파트 ○동 ○○○호]</p>
<p>건물 철근콘크리트조 ○층 중 ○○.○○㎡</p>
<br/>
<p><strong>[분할 내용]</strong></p>
<p>위 부동산 전부를 상속인 이○○ (처)이 단독으로 취득한다.</p>
</div>
<div class="sample-sign">
<p>○○○○년 ○○월 ○○일</p>
<br/>
<p>상속인 이○○ (처) 주민등록번호: — 주소: — 인감 ⑩</p>
<p>상속인 김○○ (장남) 주민등록번호: — 주소: — 인감 ⑩</p>
<p>상속인 김○○ (장녀) 주민등록번호: — 주소: — 인감 ⑩</p>
</div>
<div class="sample-note">
            ※ 위는 예시이며 실제 작성 시 법무사 등 전문가의 검토를 받으시기 바랍니다.
          </div>
</div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">3</div>
<h4>등기원인 및 등기원인일자</h4>
</div>
<div class="detail-body">
<ul>
<li><strong>등기원인:</strong> "협의분할에 의한 상속" (법정상속등기의 "상속"과 구별)</li>
<li><strong>등기원인일자:</strong> 피상속인의 <strong>사망일</strong> (협의서 작성일이 아님)</li>
<li>협의분할의 효력은 상속개시 시점으로 소급하므로(민법 제1015조), 협의서 작성일이 아닌 사망일이 원인일자가 됩니다.</li>
</ul>
<div class="highlight">
          📌 예: 피상속인이 2024년 3월 5일 사망, 협의서를 2024년 9월 10일에 작성한 경우<br/>
          → 등기원인일자: 2024년 3월 5일
        </div>
<div class="warn-inline">
          ⚠️ 다만, 기존 법정상속 등기를 협의분할로 변경하는 <strong>경정등기</strong>의 경우에는, 등기원인일자가 협의분할일(협의서 작성일)이 됩니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">4</div>
<h4>미성년 상속인 — 특별대리인 선임</h4>
</div>
<div class="detail-body">
<ul>
<li>미성년 상속인의 친권자도 상속인인 경우, 이해관계가 충돌하므로 친권자가 미성년자를 대리할 수 없습니다.</li>
<li>이 경우 가정법원에 특별대리인 선임심판을 청구합니다.</li>
<li>선임된 특별대리인이 미성년자를 대리하여 협의분할에 참여합니다.</li>
<li>등기 신청 시 특별대리인 선임 심판서 사본 + 그 특별대리인의 인감증명서를 첨부해야 합니다.</li>
</ul>
<div class="highlight">
          💡 미성년자가 상속인이더라도, 그 친권자(부 또는 모)가 상속인이 아닌 경우에는 친권자가 그대로 대리 가능합니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">5</div>
<h4>경정등기 — 공동상속 등기 후 협의분할 변경</h4>
</div>
<div class="detail-body">
<p>이미 법정상속분에 따라 공동상속 등기를 마친 후에도, 상속인 전원이 협의하면 협의분할에 의한 소유권경정등기가 가능합니다.</p>
<div class="kyeong-grid">
<div class="kyeong-card">
<div class="kyeong-head blue">등기권리자</div>
<div class="kyeong-body">경정 후 지분이 늘어나는(또는 단독 취득하는) 상속인</div>
</div>
<div class="kyeong-card">
<div class="kyeong-head green">등기의무자</div>
<div class="kyeong-body">경정 후 지분이 줄어드는(또는 포기하는) 상속인</div>
</div>
<div class="kyeong-card">
<div class="kyeong-head gray">등기원인일자</div>
<div class="kyeong-body">협의분할일 (= 협의서 작성일)</div>
</div>
<div class="kyeong-card">
<div class="kyeong-head red">이해관계인 있을 때</div>
<div class="kyeong-body">가압류권자 등 제3자가 있으면, 그의 승낙서 또는 이에 대항할 수 있는 재판서를 첨부해야 합니다.</div>
</div>
</div>
<div class="warn-inline">
          ⚠️ 공동상속 지분에 가압류·근저당 등이 설정된 후에 협의분할을 하더라도, 그 이해관계인에게는 소급효를 주장할 수 없습니다(민법 제1015조 단서).
        </div>
</div>
</div>
</div>
</section>
<!-- ===== 05. 준비 서류 ===== -->
<section class="section">
<h2 class="inh-section-title">준비 서류
    <span class="sub">협의분할에 의한 상속등기 신청 시</span>
</h2>
<div class="docs-grid">
<div class="docs-card">
<div class="docs-card-head">① 신분관계 서류</div>
<div class="docs-card-body">
<ul>
<li>피상속인의 출생부터 사망까지의 제적등본·가족관계증명서 <span class="docs-required">필수</span></li>
<li>피상속인의 기본증명서 (사망 기재) <span class="docs-required">필수</span></li>
<li>상속인 전원의 가족관계증명서 <span class="docs-required">필수</span></li>
<li>상속인 전원의 기본증명서</li>
<li>상속인 전원의 주민등록등본 (또는 초본)</li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">② 부동산 서류</div>
<div class="docs-card-body">
<ul>
<li>등기사항전부증명서 (말소사항 포함) <span class="docs-required">필수</span></li>
<li>토지대장 (토지인 경우)</li>
<li>건물대장 또는 집합건물대장 (건물인 경우)</li>
<li>토지·건물 도면 (필요 시)</li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">③ 협의분할 관련 서류</div>
<div class="docs-card-body">
<ul>
<li>상속인 전원이 날인한 협의분할서 <span class="docs-required">필수</span></li>
<li>상속인 전원의 인감증명서 <span class="docs-required">필수</span></li>
<li>상속인 인감증명서 발급 후 3개월 이내 사용 권장</li>
<li>협의서 주소 ≠ 인감증명 주소 시: 동일인 확인 서면(주민등록초본)</li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">④ 특수 상황 서류</div>
<div class="docs-card-body">
<ul>
<li>미성년자 있을 때: 특별대리인 선임 심판서 사본 + 특별대리인 인감증명</li>
<li>해외거주 상속인: 재외공관 공증 서명 또는 아포스티유 인증</li>
<li>경정등기 시 이해관계인 있으면: 이해관계인 승낙서 + 인감증명</li>
<li>상속포기자 있는 경우: 상속포기 심판 확정증명서</li>
</ul>
</div>
</div>
<div class="docs-note">
<strong>⚠️ 인감증명서 발급 시 주의사항:</strong> 상속인의 인감증명서는 부동산 거래 등 특정 목적으로 발급받아야 하며, 발급 후 3개월 이내에 사용하는 것을 권장합니다. 협의분할서의 주소와 인감증명서의 주소가 다를 경우 주민등록초본 등 동일인 확인 서면을 별도로 준비해야 합니다.
    </div>
</div>
</section>
<!-- ===== 06. 비용 안내 ===== -->
<section class="section">
<h2 class="inh-section-title">비용 안내
    <span class="sub">대략적인 비용 항목 (금액은 개별 상담 필요)</span>
</h2>
<div class="cost-table-wrap">
<table class="cost-table">
<thead>
<tr>
<th>비용 항목</th>
<th>내용</th>
<th>납부 대상</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>취득세 · 지방교육세</strong></td>
<td>상속 원인 취득세 (농지: 2.3%, 농지 외: 2.8% 등 — 재산 종류·지역에 따라 상이)</td>
<td>지방자치단체</td>
</tr>
<tr>
<td><strong>국민주택채권 매입</strong></td>
<td>부동산 시가표준액에 따라 매입 후 즉시 매도 가능 (실질 비용은 매도 할인율)</td>
<td>주택도시기금</td>
</tr>
<tr>
<td><strong>등록면허세 · 지방교육세</strong></td>
<td>부동산 1건당 정액 (시가표준액 기준)</td>
<td>지방자치단체</td>
</tr>
<tr>
<td><strong>등기신청 수수료</strong></td>
<td>인터넷 등기 신청 시 일부 감면</td>
<td>법원 (수입인지)</td>
</tr>
<tr>
<td><strong>서류 발급 수수료</strong></td>
<td>등기사항전부증명서, 가족관계증명서 등 각 서류별 정해진 수수료</td>
<td>법원·행정기관</td>
</tr>
<tr>
<td><strong>법무사 보수</strong></td>
<td>법무사 보수 기준에 따라 산정 (부동산 가액·건수 등 고려)</td>
<td>법무사 사무소</td>
</tr>
<tr>
<td><strong>특별대리인 선임 비용</strong> (해당 시)</td>
<td>가정법원 심판 신청비용 (인지대 등)</td>
<td>법원</td>
</tr>
</tbody>
</table>
</div>
<div class="cost-note">
    💡 <strong>상속 취득세 감면:</strong> 1가구 1주택자로 소형 주택(공시가격 기준)을 상속받는 경우 취득세 감면 혜택이 있을 수 있습니다. 지방세특례제한법 요건을 확인하세요. 정확한 비용은 법무사 상담을 통해 견적을 받으시기 바랍니다.
  </div>
</section>
<!-- ===== 09. Q&A ===== -->
<section class="section">
<h2 class="inh-section-title">자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna">
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">협의분할에서 한 상속인이 재산을 전혀 받지 않아도 되나요?</span>
</div>
<div class="qna-a">
<p>네, 가능합니다. 대법원 판례(94다11835)에 따르면 상속인 전원이 합의한다면 법정상속분과 전혀 다른 내용의 분할도 유효합니다. 즉, 일부 상속인이 아무것도 취득하지 않고 모두 포기하는 내용의 협의분할도 전원이 합의하면 효력이 있습니다. 다만 이 경우 상속채무는 여전히 법정상속분에 따라 부담하게 되므로 유의해야 합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">해외에 거주하는 상속인이 있는 경우 어떻게 해야 하나요?</span>
</div>
<div class="qna-a">
<p>해외거주 상속인도 협의분할에 참여해야 합니다. 이 경우 그 나라 소재 한국 공관(대사관·영사관)에서 서명 인증을 받거나, 해당 국가에서 공증을 받은 후 아포스티유(Apostille) 인증을 받아야 합니다. 국가에 따라 절차가 다르므로, 미리 주재국 공관이나 법무사를 통해 확인하는 것이 좋습니다. 또한 현지 공증 서류는 국문 번역·공증도 필요할 수 있습니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">이미 공동상속 등기를 마쳤는데 나중에 협의분할로 변경할 수 있나요?</span>
</div>
<div class="qna-a">
<p>네, 가능합니다. 이미 법정상속분대로 공동상속 등기를 한 후에도 상속인 전원의 합의로 협의분할을 하고 소유권경정등기를 신청할 수 있습니다. 이 경우 경정등기의 등기원인일자는 피상속인의 사망일이 아닌 협의분할을 한 날(협의서 작성일)이 됩니다. 다만 기존 등기된 지분에 제3자(가압류권자, 근저당권자 등)의 권리가 설정되어 있다면, 그 이해관계인의 승낙을 받아야 경정등기가 가능합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">협의분할서 없이 구두 합의만으로도 효력이 있나요?</span>
</div>
<div class="qna-a">
<p>민법상 협의분할 자체의 성립에는 특별한 방식이 요구되지 않으므로 이론상 구두 합의도 법적 효력이 있을 수 있습니다. 그러나 실무에서 등기신청을 하려면 부동산등기규칙 제60조제1항제6호에 따라 반드시 서면으로 된 협의분할서와 상속인 전원의 인감증명서를 첨부해야 합니다. 구두 합의만으로는 등기를 신청할 수 없고, 나중에 분쟁이 생겨도 입증이 어렵습니다. 반드시 서면으로 작성하세요.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">상속인 중 한 명이 연락이 되지 않아 협의분할이 어렵습니다. 어떻게 해야 하나요?</span>
</div>
<div class="qna-a">
<p>협의분할은 상속인 전원의 합의가 필요하므로, 연락되지 않는 상속인이 있으면 협의분할 자체가 어렵습니다. 이 경우 다음 방법을 검토할 수 있습니다. ① 부재자 재산관리인 선임 심판을 통해 관리인이 협의에 참여하게 하거나, ② 법원에 상속재산분할 심판(또는 조정)을 청구하여 법원이 분할 내용을 결정하게 하는 방법이 있습니다. 상황에 따라 적합한 방법을 법무사·변호사와 상담하시기 바랍니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">협의분할을 취소하거나 다시 변경할 수 있나요?</span>
</div>
<div class="qna-a">
<p>대법원 판례(2004다42765)에 따르면, 협의분할을 합의 해제하고 재협의하는 것은 공동상속인 전원의 합의에 의해서만 가능합니다. 즉, 다시 변경하려면 처음 협의 때와 마찬가지로 상속인 전원이 다시 합의해야 합니다. 또한 협의분할에 사기·강박 등 민법상 의사표시의 하자가 있는 경우에는 취소할 수도 있으나, 이는 엄격한 요건을 충족해야 하며 법원에서 다퉈야 합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
</div>
</section>
<!-- ===== 07. 관련 판례 ===== -->
<section class="section">
<h2 class="inh-section-title">관련 판례
    <span class="sub">협의분할에 관한 주요 대법원 판례</span>
</h2>
<div class="rulings">
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 2001. 6. 29. 선고 2001다28299 판결</span>
<span class="ruling-court">민사2부</span>
</div>
<div class="ruling-title">협의분할의 소급효와 제3자 보호</div>
<div class="ruling-body">
        상속재산 분할협의는 상속이 개시된 때에 소급하여 효력이 있지만, 제3자의 권리를 해하지 못한다(민법 제1015조). 공동상속인 중 일부가 자신의 상속분을 처분한 후 이루어진 협의분할은 그 처분을 받은 제3자에게는 효력을 주장할 수 없다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 공동상속인이 법정상속분을 먼저 처분(매도·담보 제공 등)한 후 협의분할을 하더라도, 그 취득자나 담보권자에게는 소급효를 주장할 수 없습니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 2004. 10. 28. 선고 2004다42765 판결</span>
<span class="ruling-court">민사2부</span>
</div>
<div class="ruling-title">협의분할의 취소 — 전원 합의 없이 일부만으로 재협의 불가</div>
<div class="ruling-body">
        상속재산 분할협의가 이루어진 후 이를 합의 해제하고 새로운 분할협의를 하거나 분할협의를 취소·해제하는 것은 공동상속인 전원의 합의에 의해서만 가능하다. 일부 상속인만의 합의에 의한 재협의는 나머지 상속인에게 효력이 없다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 협의분할 후 마음이 바뀌어 내용을 바꾸려면, 처음처럼 상속인 전원이 다시 합의해야 합니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 2002. 4. 26. 선고 2000다8878 판결</span>
<span class="ruling-court">민사3부</span>
</div>
<div class="ruling-title">협의분할서의 진정성립 — 인감 날인의 의미</div>
<div class="ruling-body">
        협의분할서에 상속인의 인감도장이 날인되어 있고 인감증명서가 첨부되어 있는 경우, 그 문서는 원칙적으로 진정하게 성립된 것으로 추정된다. 이를 부정하는 자가 날인의 진정성을 다투어 입증하여야 한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 인감 날인과 인감증명서 첨부가 협의서의 법적 효력을 뒷받침하는 핵심입니다. 단순 자필서명만으로는 실무상 등기신청에 사용하기 어렵습니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 1995. 4. 7. 선고 94다11835 판결</span>
<span class="ruling-court">민사1부</span>
</div>
<div class="ruling-title">협의분할의 자유 — 법정상속분과 다른 분할 가능</div>
<div class="ruling-body">
        공동상속인들은 피상속인의 유언에 의하여 금지되지 않는 한, 언제든지 그 협의에 의하여 상속재산을 분할할 수 있다. 협의분할은 법정상속분에 구속되지 않으며, 상속인 중 일부에게 전부를 취득하게 하거나 법정상속분과 전혀 다르게 분할하는 것도 유효하다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 상속인 전원이 합의하면, 법정상속분과 완전히 다른 내용으로도 분할이 가능합니다. 예를 들어, 자녀들이 모두 포기하고 배우자가 전부 취득하는 것도 유효합니다.
      </div>
</div>
</div>
</section>
<!-- ===== 08. 주의사항 ===== -->
<section class="section">
<h2 class="inh-section-title">주의사항
    <span class="sub">협의분할 시 반드시 확인하세요</span>
</h2>
<div class="warns">
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<h4>상속인 1명이라도 빠지면 협의 자체가 무효</h4>
<p>법정상속인 전원이 참여해야 합니다. 특히 피상속인의 전혼 자녀, 인지된 혼외자, 태아 등을 빠뜨리지 않도록 반드시 제적등본 전체를 확인해야 합니다. 상속인 조사를 소홀히 하면 나중에 빠진 상속인으로부터 분할무효 주장을 받을 수 있습니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">🔍</div>
<div class="warn-content">
<h4>상속채무도 함께 확인하세요</h4>
<p>협의분할로 적극재산만 나눈다고 해서 상속채무가 사라지지 않습니다. 상속채무는 법정상속분에 따라 각 상속인에게 자동 분배되며, 채권자는 협의분할 내용과 무관하게 법정상속분대로 각 상속인에게 청구할 수 있습니다. 채무가 많다면 한정승인 또는 상속포기를 먼저 검토하세요.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">🚫</div>
<div class="warn-content">
<h4>제3자 권리가 설정된 부동산은 협의 전 반드시 확인</h4>
<p>공동상속된 부동산에 가압류·가처분·근저당 등이 설정되어 있는 경우, 해당 이해관계인의 승낙이 없으면 경정등기가 불가합니다. 또한 분할협의의 소급효도 이러한 제3자에게는 주장할 수 없습니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⏰</div>
<div class="warn-content">
<h4>증여세·상속세 신고 기한도 함께 확인하세요</h4>
<p>법정상속분을 초과하여 취득하는 상속인은 증여세 과세 대상이 될 수 있습니다(초과분에 대해). 또한 상속세 신고기한(상속개시일부터 6개월, 외국에 주소 둔 경우 9개월)을 놓치지 않도록 주의해야 합니다. 세무사와도 함께 상담하시기 바랍니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">📝</div>
<div class="warn-content">
<h4>협의분할 후 등기를 미루지 마세요</h4>
<p>협의분할서를 작성하고도 등기를 미루는 경우, 그 사이에 다른 상속인의 채권자가 상속인의 법정상속분에 대해 강제집행을 신청할 수 있습니다. 협의분할 후 가능한 빠른 시일 내에 등기를 마치는 것이 안전합니다.</p>
</div>
</div>
</div>
</section>
<!-- ===== 10. 다음으로 ===== -->
<section class="section">
<h2 class="inh-section-title">다음으로 확인할 내용</h2>
<div class="next-cards">
<a class="next-card" href="상속_10_상속재산분할.html">
<div class="nc-num">◀ PAGE 10</div>
<h4>상속재산분할 협의·조정·심판</h4>
<p>협의가 되지 않을 때 조정·심판으로 진행하는 방법을 확인하세요.</p>
</a>
<a class="next-card" href="상속_12_등기신청.html">
<div class="nc-num">PAGE 12 ▶</div>
<h4>상속등기 신청 실무</h4>
<p>협의분할 완료 후 실제 등기소에 신청하는 절차를 확인하세요.</p>
</a>
<a class="next-card" href="상속_08_상속분.html">
<div class="nc-num">◀ PAGE 08</div>
<h4>상속분 계산</h4>
<p>내 법정상속분이 얼마인지 먼저 확인하고 협의에 임하세요.</p>
</a>
<a class="next-card" href="상속_09_특별수익.html">
<div class="nc-num">◀ PAGE 09</div>
<h4>특별수익·기여분</h4>
<p>생전증여가 있었다면 협의 전 특별수익·기여분 계산이 필요합니다.</p>
</a>
</div>
</section>
<!-- ===== 11. CTA ===== -->
<section class="section" id="cta">
<div class="cta-point">
<span class="cp-icon">✍️</span>
<span class="cp-text">협의분할서 작성</span>
</div>
<div class="cta-point">
<span class="cp-icon">🏛️</span>
<span class="cp-text">등기 신청 대리</span>
</div>
<div class="cta-point">
<span class="cp-icon">💬</span>
<span class="cp-text">무료 초기 상담</span>
</div>
</div>
<a class="cta-btn" href="tel:0000000000">☎ 무료 상담 신청하기</a>
<p class="cta-sub">전화·방문·이메일 상담 가능 · 평일 9:00 – 18:00</p>
</div>
</section>
<!-- ===== 면책 ===== -->
<section class="section">
<div class="disclaimer">
<strong>법적 고지 (면책 조항)</strong><br/>
    이 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 법률 자문이 아닙니다.
    개별 사안의 구체적인 사실관계 및 법령 해석에 따라 결론이 달라질 수 있습니다.
    실제 법률 문제에 대해서는 반드시 자격 있는 법무사 또는 변호사와 직접 상담하시기 바랍니다.
    본 정보를 참고하여 발생한 결과에 대해 작성자는 책임을 지지 않습니다.
    법령은 개정될 수 있으므로 최신 법령을 확인하시기 바랍니다.
  </div>
</section>
</div><!-- /page-wrap -->
<!-- ===== FOOTER ===== -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-12', title: '상속등기 개관',
        meta: '취득세 신고 · 상속등기 · 협의분할 — 3가지 핵심 절차 완전 안내',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ===== HEADER ===== -->
<!-- ===== HERO ===== */
<div class="hero">
  <div class="page-wrap">
    <div class="hero-badge">STEP 12 · 판단 안내</div>
    <h1>상속 부동산등기<br>무엇을, 언제까지 해야 할까</h1>
    <p>상속인은 사망과 동시에 소유권을 취득하지만, 처분·담보 제공 등을 하려면<br>
       반드시 등기를 마쳐야 합니다. 등기의 종류와 절차를 한눈에 정리합니다.</p>
    <div class="hero-meta">
      <span>근거: 민법 제187조 · 부동산등기법 제23조</span>
      <span>단독 신청 가능</span>
      <span>기간 제한 없음</span>
    </div>
  </div>
</div>

<div class="page-wrap">

<!-- ===== 01. 이런 분께 ===== -->
<section class="section">
<h2 class="inh-section-title">이런 분께 도움이 됩니다
    <span class="sub">해당 상황을 확인하세요</span>
</h2>
<div class="target-grid">
<div class="target-item">
<div class="target-icon">🏠</div>
<div class="target-text">부모님이 돌아가셨는데 부동산 명의를 어떻게 바꿔야 하는지 모르는 분</div>
</div>
<div class="target-item">
<div class="target-icon">📋</div>
<div class="target-text">상속등기를 언제까지 해야 하는지, 안 하면 어떻게 되는지 걱정되는 분</div>
</div>
<div class="target-item">
<div class="target-icon">👥</div>
<div class="target-text">상속인이 여러 명인데 공동등기를 해야 하는지, 1인 명의로 할 수 있는지 알고 싶은 분</div>
</div>
<div class="target-item">
<div class="target-icon">🔍</div>
<div class="target-text">법정상속등기와 협의분할 등기의 차이가 무엇인지 궁금한 분</div>
</div>
<div class="target-item">
<div class="target-icon">📜</div>
<div class="target-text">등기 신청에 어떤 서류가 필요한지 전체적인 그림을 먼저 파악하고 싶은 분</div>
</div>
<div class="target-item">
<div class="target-icon">🏗️</div>
<div class="target-text">아직 등기가 없는(미등기) 부동산을 상속받아 처음으로 등기해야 하는 분</div>
</div>
</div>
</section>
<!-- ===== 02. 핵심 요약 ===== -->
<section class="section">
<h2 class="inh-section-title">핵심 요약
    <span class="sub">상속등기의 3가지 원칙</span>
</h2>
<div class="summary-box">
<h3>🔑 상속등기, 이것만 기억하세요</h3>
<ul class="summary-points">
<li>
<div class="pt-num">1</div>
<div><strong>등기 없이도 소유권은 취득됩니다</strong> — 피상속인이 사망하는 순간 법률상 당연히 상속인에게 소유권이 이전됩니다(민법 제187조). 그러나 그 부동산을 팔거나 담보로 제공하려면 반드시 상속등기를 먼저 마쳐야 합니다.</div>
</li>
<li>
<div class="pt-num">2</div>
<div><strong>상속인 단독으로 신청합니다</strong> — 매매나 증여 등기와 달리 상속등기는 등기권리자(상속인)가 혼자 신청할 수 있습니다(부동산등기법 제23조 제3항). 협력해 줄 사람이 없어도 됩니다.</div>
</li>
<li>
<div class="pt-num">3</div>
<div><strong>법정 기한은 없지만, 미루면 불이익이 생깁니다</strong> — 상속등기를 하지 않아도 벌칙은 없습니다. 그러나 등기를 미루는 동안 다른 상속인의 채권자가 법정상속분에 강제집행할 수 있습니다. 가능한 한 빨리 등기하는 것이 안전합니다.</div>
</li>
</ul>
<div class="summary-note">
      📌 <strong>핵심 한 줄 요약:</strong> 사망과 동시에 소유권은 내 것, 하지만 팔거나 담보 잡으려면 등기부터 먼저.
    </div>
</div>
</section>
<!-- ===== 03. 상세 내용 ===== -->
<section class="section">
<h2 class="inh-section-title">상세 내용
    <span class="sub">상속등기의 종류 · 신청인 · 등기원인 · 첨부서류</span>
</h2>
<div class="detail-prose">
<!-- 상속등기의 종류 -->
<div class="detail-block">
<div class="detail-block-head">① 상속등기의 종류</div>
<div class="detail-block-body">
<div class="type-grid">
<div class="type-card">
<div class="type-card-head">
<span class="type-badge">가장 일반적</span>
</div>
<h4>법정상속등기</h4>
<p>상속인 전원이 법정상속분에 따라 공동으로 등기. 협의 없이 가장 빠르게 처리 가능. 추후 협의분할로 경정등기 가능.</p>
<p class="law-ref">등기원인: "상속"</p>
</div>
<div class="type-card">
<div class="type-card-head">
<span class="type-badge">상속인 합의 시</span>
</div>
<h4>협의분할에 의한 상속등기</h4>
<p>상속인 전원이 협의하여 특정인 단독 취득 또는 다른 비율로 취득. 협의분할서 + 인감증명서 필요.</p>
<p class="law-ref">등기원인: "협의분할에 의한 상속"</p>
</div>
<div class="type-card">
<div class="type-card-head">
<span class="type-badge">유언이 있을 때</span>
</div>
<h4>유언에 의한 상속등기 / 유증등기</h4>
<p>피상속인이 유언으로 특정 재산을 지정한 경우. 유언장(공정증서 또는 검인) 첨부 필요. 포괄유증은 상속인이, 특정유증은 수증자가 신청.</p>
<p class="law-ref">등기원인: "유증" 또는 "상속"</p>
</div>
<div class="type-card">
<div class="type-card-head">
<span class="type-badge">미등기 부동산</span>
</div>
<h4>상속인에 의한 소유권보존등기</h4>
<p>아직 등기부가 없는 부동산(대장에만 있는)을 처음으로 등기. 토지대장·건축물대장에 피상속인이 최초 소유자로 등록된 경우.</p>
<p class="law-ref">근거: 부동산등기법 제65조 제1호</p>
</div>
</div>
<div class="highlight-box" style="margin-top:14px;">
          💡 <strong>어떤 등기를 선택할지 모르겠다면:</strong> 상속인 간 협의가 완료되어 있으면 협의분할에 의한 상속등기를, 협의가 안 됐으면 일단 법정상속등기를 먼저 마친 후 나중에 경정등기를 하는 방법도 있습니다.
        </div>
</div>
</div>
<!-- 신청인 -->
<div class="detail-block">
<div class="detail-block-head">② 신청인 — 누가 신청하나요?</div>
<div class="detail-block-body">
<div class="applicant-diagram">
<div class="app-row">
<div class="app-label">원칙: 단독 신청</div>
<div class="app-content">상속인(등기권리자)이 혼자 신청 가능. 등기의무자(피상속인)가 이미 사망하여 현존하지 않기 때문.</div>
<div class="app-law">법 제23조 제3항</div>
</div>
<div class="app-row">
<div class="app-label">공동상속: 1인 가능</div>
<div class="app-content">공동상속인 중 1인이 '보존행위'로서 나머지 상속인 전원을 포함하여 신청 가능. 단, 신청서에 공동상속인 전원을 표시해야 함.</div>
<div class="app-law">민법 제265조 단서</div>
</div>
<div class="app-row">
<div class="app-label">일부만의 등기: 불허</div>
<div class="app-content">공동상속인 중 일부가 협력하지 않더라도 나머지 일부만의 상속지분에 대한 등기는 신청할 수 없음. 전원의 지분을 신청해야 함.</div>
<div class="app-law">예규 제535호</div>
</div>
<div class="app-row">
<div class="app-label">협의분할·포기 후</div>
<div class="app-content">상속재산 분할협의 또는 상속포기에 의해 특정 상속인만 취득한 경우, 그 취득자만이 신청인이 됨. 포기자는 신청인이 될 수 없음.</div>
<div class="app-law">선례 2-246</div>
</div>
</div>
</div>
</div>
<!-- 등기원인 및 등기원인일자 -->
<div class="detail-block">
<div class="detail-block-head">③ 등기원인 및 등기원인일자</div>
<div class="detail-block-body">
<p style="margin-bottom:14px;">등기원인은 상속이 <strong>언제 개시되었느냐</strong>에 따라 달라집니다. 구민법·신민법·현행 민법으로 법이 바뀌면서 용어도 달라졌습니다.</p>
<div class="history-bar">
<div class="history-row">
<div class="history-period">구민법 시행 당시<br/>(1960. 1. 1. 이전)</div>
<div class="history-content"><code>"호주상속"</code> 또는 <code>"유산상속"</code> (호주 아닌 가족의 재산인 경우)</div>
</div>
<div class="history-row">
<div class="history-period">신민법 시행 후<br/>1991. 1. 1. 이전</div>
<div class="history-content"><code>"재산상속"</code></div>
</div>
<div class="history-row">
<div class="history-period">1991. 1. 1. 이후<br/>(현행)</div>
<div class="history-content"><code>"상속"</code></div>
</div>
<div class="history-row">
<div class="history-period">협의분할 시<br/>(현행)</div>
<div class="history-content"><code>"협의분할에 의한 상속"</code></div>
</div>
<div class="history-row">
<div class="history-period">절가(絶家) 재산 귀속</div>
<div class="history-content"><code>"권리귀속"</code></div>
</div>
</div>
<div class="highlight-box">
          📌 <strong>등기원인일자:</strong> 협의분할을 하더라도 등기원인일자는 항상 <strong>피상속인의 사망일</strong>입니다(예규 제438호). 협의서를 언제 작성했는지는 무관합니다. 단, 대습상속의 경우도 피상속인(피대습자가 아닌 최종 피상속인)의 사망일이 기준입니다.
        </div>
</div>
</div>
<!-- 첨부서류 -->
<div class="detail-block">
<div class="detail-block-head">④ 주요 첨부서류 개요</div>
<div class="detail-block-body">
<div class="checklist-group">
<div class="checklist-section">
<h4>공통 서류 (모든 상속등기 공통)</h4>
<ul class="checklist-items">
<li>피상속인의 기본증명서 (사망 기재) <span class="req-badge">필수</span></li>
<li>피상속인의 가족관계증명서 <span class="req-badge">필수</span></li>
<li>피상속인의 친양자입양관계증명서 <span class="req-badge">필수</span></li>
<li>피상속인의 제적등·초본 (2007. 12. 31. 이전 사망 시) <span class="req-badge">필수</span></li>
<li>상속인의 주민등록등·초본 (등기명의인이 되는 상속인만) <span class="req-badge">필수</span></li>
<li>등기사항전부증명서, 토지대장·건축물대장 <span class="req-badge">필수</span></li>
</ul>
</div>
<div class="checklist-section">
<h4>협의분할 시 추가 서류</h4>
<ul class="checklist-items">
<li>상속인 전원이 날인한 협의분할서 <span class="req-badge">필수</span></li>
<li>상속인 전원의 인감증명서 <span class="req-badge">필수</span></li>
<li>특별대리인 선임 시: 선임 심판서 사본 + 특별대리인 인감증명 <span class="cond-badge">해당 시</span></li>
</ul>
</div>
<div class="checklist-section">
<h4>상속포기자가 있는 경우</h4>
<ul class="checklist-items">
<li>상속포기 심판서 정본 <span class="req-badge">필수</span></li>
</ul>
</div>
<div class="checklist-section">
<h4>동일인 확인이 필요한 경우</h4>
<ul class="checklist-items">
<li>피상속인의 등기기록 표시 ≠ 기본증명서 표시 시: 동일인임을 증명하는 서면 <span class="cond-badge">해당 시</span></li>
<li>협의분할서 주소 ≠ 인감증명 주소 시: 주민등록초본 등 동일인 확인 서면 <span class="cond-badge">해당 시</span></li>
</ul>
</div>
</div>
<div class="highlight-box">
          ⏱️ <strong>서류 유효기간:</strong> 가족관계등록사항별증명서(기본증명서, 가족관계증명서 등) 및 제적등·초본은 발행일부터 <strong>3개월 이내</strong>의 것을 사용해야 합니다(부동산등기규칙 제62조).
        </div>
</div>
</div>
<!-- 상속등기 vs 법정상속 vs 협의분할 비교 -->
<div class="detail-block">
<div class="detail-block-head">⑤ 상속등기 유형별 비교</div>
<div class="detail-block-body">
<div class="compare-table-wrap">
<table class="compare-table">
<thead>
<tr>
<th>항목</th>
<th>법정상속등기</th>
<th>협의분할<br/>상속등기</th>
<th>소유권보존등기<br/>(미등기 부동산)</th>
</tr>
</thead>
<tbody>
<tr>
<td>등기원인</td>
<td>"상속"</td>
<td>"협의분할에 의한 상속"</td>
<td>등기원인 불필요</td>
</tr>
<tr>
<td>신청인</td>
<td>상속인 중 1인 가능</td>
<td>취득 상속인</td>
<td>상속인 (단독)</td>
</tr>
<tr>
<td>협의서 필요</td>
<td><span class="cross">✗</span></td>
<td><span class="check">✓ (전원 인감)</span></td>
<td><span class="cross">✗</span></td>
</tr>
<tr>
<td>결과</td>
<td>공동상속인 공유</td>
<td>협의대로 취득</td>
<td>상속지분대로 최초 등기</td>
</tr>
<tr>
<td>추후 경정등기</td>
<td><span class="check">✓ 가능</span></td>
<td><span class="check">✓ 가능 (재협의)</span></td>
<td><span class="check">✓ 가능</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>
<!-- ===== 06. Q&A ===== -->
<section class="section">
<h2 class="inh-section-title">자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna">
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">상속등기를 안 하면 어떻게 되나요? 법적 제재가 있나요?</span>
</div>
<div class="qna-a">
<p>법적으로 상속등기를 반드시 해야 하는 기간이나 이를 어겼을 때의 과태료 등 제재 규정은 현재 없습니다. 그러나 등기를 하지 않으면 그 부동산을 팔거나 담보로 제공할 수 없습니다. 또한 등기를 미루는 동안 다른 상속인의 채권자가 법정상속분에 가압류·압류를 할 수 있어, 나중에 협의분할을 해도 그 채권자에게는 대항하기 어려워집니다. 실무상으로는 가능한 한 빨리 등기하는 것을 강력히 권장합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">상속인이 저 혼자인데, 어떤 등기를 신청해야 하나요?</span>
</div>
<div class="qna-a">
<p>상속인이 단 한 명인 경우에는 협의분할이나 법정상속분 문제가 없으므로 단순히 "상속"을 원인으로 하는 소유권이전등기를 신청하면 됩니다. 이때 등기원인일자는 피상속인의 사망일입니다. 필요한 서류는 피상속인의 기본증명서, 가족관계증명서, 친양자입양관계증명서, 제적등본(해당 시)과 신청인(상속인)의 주민등록등·초본 등입니다. 상속인이 혼자임을 확인할 수 있는 서류들이 핵심입니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">상속인 중 한 명이 협조를 안 합니다. 그 사람 몫은 제외하고 제 지분만 먼저 등기할 수 없나요?</span>
</div>
<div class="qna-a">
<p>아니요, 불가능합니다. 공동상속의 경우 일부 상속인의 지분만을 별도로 신청하는 '일부 상속등기'는 허용되지 않습니다(예규 제535호). 협조하지 않는 상속인의 지분까지 포함한 전체 공동상속 등기를 신청해야 합니다. 다른 상속인의 협조가 없더라도 공동상속인 중 1인이 전원의 지분을 포함한 법정상속분 등기를 신청할 수 있습니다(보존행위, 민법 제265조 단서). 다만 협의분할을 위해서는 전원의 협의가 필요하므로, 협조하지 않는 상속인이 있다면 법원에 조정·심판을 청구하는 방법을 검토하세요.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">피상속인의 등기부 주소와 제적등본의 주소가 달라서 동일인 확인이 어렵습니다.</span>
</div>
<div class="qna-a">
<p>등기부상 피상속인과 제적등본·기본증명서상 피상속인의 성명, 주소 등이 달라도(성명 상이, 창씨명 기재, 번지 누락 등의 경우), 별도로 표시변경등기나 경정등기를 먼저 하지 않아도 됩니다. 대신 두 공부상 명의인이 동일인임을 증명하는 서면(시·구·읍·면장의 서면 또는 이를 인정함에 충분한 서면)을 첨부하면 곧바로 상속등기를 신청할 수 있습니다(선례 2-259, 3-396). 실무상으로는 말소된 주민등록표초본, 인감증명이 있는 보증서 등이 사용되기도 합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">아직 등기가 없는 부동산(대장에만 있는 미등기 부동산)을 상속받았는데 어떻게 해야 하나요?</span>
</div>
<div class="qna-a">
<p>미등기 부동산은 소유권이전등기가 아닌 소유권보존등기를 신청해야 합니다. 토지대장·건축물대장에 피상속인이 최초 소유자로 등록되어 있으면, 그 상속인이 직접 자기 명의로 소유권보존등기를 신청할 수 있습니다(부동산등기법 제65조 제1호). 이때는 등기원인과 등기원인일자를 기재할 필요가 없고, 대신 대장 정보와 상속을 증명하는 서면을 첨부합니다. 여러 대(代)에 걸쳐 상속된 경우에도 최후 상속인이 직접 자기 명의로 보존등기를 신청할 수 있습니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">대습상속인이 등기를 신청할 때 등기원인일자는 언제로 해야 하나요?</span>
</div>
<div class="qna-a">
<p>대습상속에서 등기원인일자는 피대습자(먼저 사망한 부·모 등)의 사망일이 아니라, <strong>피상속인(조부·조모 등 최종 상속 원인이 된 분)의 사망일</strong>을 기재합니다. 대습상속은 대습상속인이 피대습자의 권리를 승계하는 것이 아니라, 자기 고유의 권리로서 직접 피상속인의 재산을 취득하기 때문입니다. 재대습상속(손이 사망하여 증손이 대습상속하는 경우)의 경우에도 마찬가지로 최종 피상속인의 사망일이 기준이 됩니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 개별 상황에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
</div>
</section>
<!-- ===== 04. 판례 ===== -->
<section class="section">
<h2 class="inh-section-title">관련 판례
    <span class="sub">상속등기에 관한 주요 대법원 판례</span>
</h2>
<div class="rulings">
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 1995. 2. 22. 자 94마2116 결정</span>
<span class="ruling-court">민사3부</span>
</div>
<div class="ruling-title">등기관의 형식적 심사권 — 확정판결과 다른 상속분 신청 각하</div>
<div class="ruling-body">
        등기신청인이 산정한 상속분이 관련 소송의 확정판결에서도 인정되었더라도, 그 판결의 기판력은 등기관의 형식적 심사권에는 미치지 않는다. 따라서 상속을 증명하는 정보와 관계 법령에 의해 인정되는 상속지분과 다른 내용으로 상속등기를 신청하면, 등기관은 그 신청을 각하하여야 한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 상속등기에서 지분 계산이 법령상 상속분과 다르면 등기관이 각하합니다. 법정상속분과 다른 비율로 등기하려면 반드시 협의분할서 등 증명 서면을 첨부해야 합니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 1990. 10. 29. 자 90마772 결정</span>
<span class="ruling-court">특별부</span>
</div>
<div class="ruling-title">법정상속분과 다른 지분 신청 시 각하</div>
<div class="ruling-body">
        법정상속분과 다른 비율로 상속등기를 신청하는 경우에는 그 지분이 법정상속분과 다르게 변동된 사실을 증명하는 정보(분할협의서, 분할심판서 정본 등)를 제공하여야 하고, 이를 제공하지 않는 경우 등기관은 그 등기신청을 각하한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 협의분할서 없이 단순히 "○분의 ○으로 등기해달라"고 신청하면 각하됩니다. 지분 변동의 근거 서류가 반드시 있어야 합니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 2006. 4. 20. 선고 2005다75910 판결</span>
<span class="ruling-court">전원합의체</span>
</div>
<div class="ruling-title">상속등기 미경료 상태에서 제3자 강제집행의 효력</div>
<div class="ruling-body">
        상속을 원인으로 한 소유권이전등기를 경료하지 않은 상태에서도, 피상속인의 채권자가 아닌 상속인의 고유 채권자가 상속인의 법정상속분에 대해 강제집행을 신청하는 것은 허용된다. 상속은 등기 없이도 소유권을 취득하게 하므로(민법 제187조), 상속인의 지분에 대한 강제집행도 가능하다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 상속등기를 미루면, 그 사이에 상속인의 채권자가 법정상속분에 강제집행(가압류, 압류 등)을 신청할 수 있습니다. 빠른 상속등기가 중요한 이유입니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 2009. 2. 19. 선고 2008다45828 전원합의체 판결</span>
<span class="ruling-court">전원합의체</span>
</div>
<div class="ruling-title">부동산 이중상속등기와 우선순위</div>
<div class="ruling-body">
        상속에 의한 소유권 취득은 등기 없이도 효력이 생기므로(민법 제187조), 상속인은 상속등기를 경료하지 않고도 그 부동산의 소유자이다. 그러나 부동산등기법에 따른 공시원칙상, 등기를 경료한 자가 제3자에 대한 관계에서 권리를 주장할 수 있다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 내부적으로는 소유권자이지만, 등기를 하지 않으면 제3자에게 완전한 권리를 주장하기 어려운 상황이 생길 수 있습니다. 등기는 빠를수록 안전합니다.
      </div>
</div>
</div>
</section>
<!-- ===== 05. 주의사항 ===== -->
<section class="section">
<h2 class="inh-section-title">주의사항
    <span class="sub">상속등기 신청 전 반드시 확인하세요</span>
</h2>
<div class="warns">
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<h4>등기를 미루면 채권자가 강제집행할 수 있습니다</h4>
<p>상속등기를 하지 않아도 법적 벌칙은 없습니다. 그러나 등기를 미루는 사이에 상속인의 채권자가 그 상속인의 법정상속분에 대해 가압류·압류 등 강제집행을 신청할 수 있습니다. 그렇게 되면 나중에 협의분할을 해도 그 채권자에게는 대항하기 어렵습니다. 가능한 한 빨리 상속등기를 마치는 것이 안전합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">🔍</div>
<div class="warn-content">
<h4>상속인 전원을 빠뜨리지 마세요</h4>
<p>공동상속의 경우 신청서에 공동상속인 전원을 표시해야 합니다. 전혼 자녀, 인지된 혼외자, 친양자 등을 놓치지 않도록 피상속인의 기본증명서, 가족관계증명서, 친양자입양관계증명서, 제적등본을 모두 확인해야 합니다. 상속인 일부를 빠뜨린 채 신청하면 등기관이 각하하거나, 나중에 분쟁의 원인이 됩니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">📅</div>
<div class="warn-content">
<h4>서류 유효기간을 확인하세요 (3개월)</h4>
<p>가족관계등록사항별증명서(기본증명서, 가족관계증명서 등) 및 제적등·초본은 발급일로부터 3개월 이내의 것을 사용해야 합니다(부동산등기규칙 제62조). 등기 신청 직전에 서류를 발급받거나, 발급일을 꼭 확인하세요. 기간이 지난 서류는 다시 발급받아야 합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">📝</div>
<div class="warn-content">
<h4>피상속인 표시 불일치 시 별도 증명 서면 필요</h4>
<p>등기부상 피상속인의 성명·주소 등 표시가 기본증명서 등 가족관계등록 서류와 다른 경우(성명 상이, 창씨명 기재, 주소 번지 누락 등), 두 서류의 명의인이 동일인임을 증명하는 서면을 별도로 첨부해야 합니다. 이 경우 표시변경·경정등기 없이 곧바로 상속등기 신청이 가능합니다(선례 2-259).</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">💰</div>
<div class="warn-content">
<h4>상속세·취득세 신고 기한도 함께 챙기세요</h4>
<p>상속등기와 별도로 상속세 신고(상속개시일부터 6개월, 해외 거주 시 9개월)와 부동산 취득에 따른 취득세 신고(취득일부터 60일) 기한이 있습니다. 상속등기를 늦게 한다고 해서 세금 신고 기한이 미뤄지지 않으니, 세무사·법무사와 함께 일정을 조율하세요.</p>
</div>
</div>
</div>
</section>
<!-- ===== 07. 다음으로 ===== -->
<section class="section">
<h2 class="inh-section-title">다음으로 확인할 내용</h2>
<div class="next-cards">
<a class="next-card" href="상속_11_분할협의.html">
<div class="nc-num">◀ PAGE 11</div>
<h4>협의분할서 작성과 절차</h4>
<p>협의분할 등기를 위한 협의서 작성 방법과 준비 서류를 확인하세요.</p>
</a>
<a class="next-card" href="상속_13_등기신청.html">
<div class="nc-num">PAGE 13 ▶</div>
<h4>상속등기 신청 실무</h4>
<p>등기소에 실제로 신청하는 구체적인 방법과 순서를 확인하세요.</p>
</a>
<a class="next-card" href="상속_10_상속재산분할.html">
<div class="nc-num">◀ PAGE 10</div>
<h4>상속재산분할 협의·조정·심판</h4>
<p>상속인 간 협의가 안 될 때 법원을 통한 해결 방법을 확인하세요.</p>
</a>
<a class="next-card" href="상속_08_상속분.html">
<div class="nc-num">◀ PAGE 08</div>
<h4>상속분 계산</h4>
<p>법정상속분이 얼마인지, 공동등기 시 지분 표시를 어떻게 하는지 확인하세요.</p>
</a>
</div>
</section>
<!-- ===== 08. CTA ===== -->
<section class="section" id="cta">
<div class="cta-point">
<span class="cp-icon">🏛️</span>
<span class="cp-text">등기 신청 대리</span>
</div>
<div class="cta-point">
<span class="cp-icon">🔍</span>
<span class="cp-text">상속인 조사</span>
</div>
<div class="cta-point">
<span class="cp-icon">💬</span>
<span class="cp-text">무료 초기 상담</span>
</div>
</div>
<a class="cta-btn" href="tel:0000000000">☎ 무료 상담 신청하기</a>
<p class="cta-sub">전화·방문·이메일 상담 가능 · 평일 9:00 – 18:00</p>
</div>
</section>
<!-- ===== 면책 ===== -->
<section class="section">
<div class="disclaimer">
<strong>법적 고지 (면책 조항)</strong><br/>
    이 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 법률 자문이 아닙니다.
    개별 사안의 구체적인 사실관계 및 법령 해석에 따라 결론이 달라질 수 있습니다.
    실제 법률 문제에 대해서는 반드시 자격 있는 법무사 또는 변호사와 직접 상담하시기 바랍니다.
    본 정보를 참고하여 발생한 결과에 대해 작성자는 책임을 지지 않습니다.
    법령은 개정될 수 있으므로 최신 법령을 확인하시기 바랍니다.
  </div>
</section>
<!-- /page-wrap -->
<!-- ===== FOOTER ===== -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-13', title: '상속 이전등기',
        meta: '가장 자주 처리하는 상속등기의 전 과정입니다.신청인 확정부터 등기 완료까지 단계별로 안내합니다.',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ===== HEADER ===== -->
<!-- ===== HERO ===== -->

<div class="page-wrap">
<!-- ===== 01. 이런 분께 ===== -->
<section class="section">
<h2 class="inh-section-title">이런 분께 도움이 됩니다
    <span class="sub">해당 상황을 확인하세요</span>
</h2>
<div class="target-grid">
<div class="target-item">
<div class="target-icon">🏠</div>
<div class="target-text">이미 등기된 부동산을 상속받아 명의를 변경해야 하는 분</div>
</div>
<div class="target-item">
<div class="target-icon">📋</div>
<div class="target-text">법정상속등기와 협의분할 등기 중 어떤 방식으로 신청할지 결정해야 하는 분</div>
</div>
<div class="target-item">
<div class="target-icon">👥</div>
<div class="target-text">공동상속인이 여러 명인데 지분 표시를 어떻게 해야 하는지 모르는 분</div>
</div>
<div class="target-item">
<div class="target-icon">📝</div>
<div class="target-text">취득세 신고부터 등기 완료까지 전체 절차를 한눈에 파악하고 싶은 분</div>
</div>
<div class="target-item">
<div class="target-icon">🔄</div>
<div class="target-text">이미 법정상속 등기를 마쳤는데 협의분할로 경정하고 싶은 분</div>
</div>
<div class="target-item">
<div class="target-icon">⚡</div>
<div class="target-text">등기 신청 후 처리 기간과 이후 확인 방법을 알고 싶은 분</div>
</div>
</div>
</section>
<!-- ===== 02. 핵심 요약 ===== -->
<section class="section">
<h2 class="inh-section-title">핵심 요약
    <span class="sub">소유권이전등기 3가지 핵심 포인트</span>
</h2>
<div class="summary-box">
<h3>🔑 반드시 기억할 3가지</h3>
<ul class="summary-points">
<li>
<div class="pt-num">1</div>
<div><strong>상속인이 단독 신청합니다</strong> — 매매·증여와 달리 상속등기는 의무자(피상속인)가 없으므로 등기권리자(상속인)가 단독으로 신청합니다. 공동상속인 중 1인이 전원을 위해 신청할 수도 있습니다(민법 제265조 단서). 단, 신청서에는 공동상속인 전원을 반드시 표시해야 합니다.</div>
</li>
<li>
<div class="pt-num">2</div>
<div><strong>등기원인일자 = 피상속인 사망일</strong> — 협의분할을 하더라도, 등기원인일자는 항상 피상속인이 사망한 날입니다(예규 제438호). 협의서 작성일·신청일이 아닙니다. 경정등기의 경우에만 협의분할일이 기준이 됩니다.</div>
</li>
<li>
<div class="pt-num">3</div>
<div><strong>지분 표시는 법정상속분이 원칙</strong> — 공동상속 시 각 상속인의 지분을 반드시 기재해야 하며, 법정상속분과 다른 비율로 신청하려면 협의분할서 등 증명서류를 첨부해야 합니다. 증명서류 없이 다른 지분으로 신청하면 등기관이 각하합니다.</div>
</li>
</ul>
<div class="summary-note">
      📌 <strong>핵심 한 줄 요약:</strong> 상속인 혼자 신청, 사망일이 원인일자, 법정상속분대로 지분 기재 — 이 세 가지만 지키면 됩니다.
    </div>
</div>
</section>
<!-- ===== 03. 절차 흐름도 ===== -->
<section class="section">
<h2 class="inh-section-title">절차 흐름도
    <span class="sub">상속 소유권이전등기 8단계</span>
</h2>
<div class="proc-flow">
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">1</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">사전 확인</span>
<h4>피상속인 사망 확인 · 부동산 현황 파악</h4>
<p>피상속인의 사망 사실을 기본증명서로 확인하고, 등기사항전부증명서로 해당 부동산의 소유명의인·근저당·가압류 등 현황을 파악합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">2</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">상속인 확정</span>
<h4>법정상속인 전원 확인 — 빠뜨림 없이</h4>
<p>기본증명서·가족관계증명서·친양자입양관계증명서·제적등본을 통해 상속인 전원을 확정합니다. 전혼 자녀, 인지된 혼외자, 특별수익자 등을 빠뜨리지 않도록 피상속인의 전 생애 기록을 확인합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">3</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">방식 결정</span>
<h4>등기 방식 결정 — 법정상속 또는 협의분할</h4>
<p>상속인 전원이 합의하면 협의분할 등기를, 합의가 어렵거나 우선 등기를 마쳐야 하면 법정상속분대로 등기합니다.</p>
<div class="branch-box">
<strong>▸ 법정상속등기</strong>: 법정상속분(배우자 1.5, 자녀 각 1)대로 공동등기 → 추후 경정등기 가능<br/>
<strong>▸ 협의분할등기</strong>: 협의분할서 + 인감증명 필요 → 한 번에 원하는 명의로 등기
        </div>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">4</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag alt">협의 시</span>
<h4>협의분할서 작성 · 인감 날인 (협의분할 선택 시)</h4>
<p>상속인 전원이 참여한 협의분할서를 작성하고 인감도장을 날인합니다. 미성년 상속인이 있으면 특별대리인 선임이 필요합니다. 협의서 여러 장이면 전원 간인 필수.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">5</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">서류 수집</span>
<h4>첨부서류 일체 수집 — 유효기간 3개월 확인</h4>
<p>가족관계등록사항별증명서는 발급일부터 3개월 이내 것만 사용 가능합니다. 등기 신청 직전에 수집하거나 발급일을 꼭 확인하세요.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">6</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag warn">세금 선납</span>
<h4>취득세 신고·납부 → 국민주택채권 매입</h4>
<p>등기 신청 전에 부동산 소재지 시·군·구청에 취득세를 신고하고 납부합니다. 이후 국민주택채권을 매입하고 즉시 할인 매도하여 영수증을 준비합니다. 세금 납부 전 등기 신청은 불가합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">7</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">등기 신청</span>
<h4>관할 등기소 신청 (방문 또는 온라인)</h4>
<p>부동산 소재지 관할 등기소에 신청합니다. 방문 외에도 인터넷등기소(e-form)를 통해 온라인 신청도 가능합니다(일부 수수료 감면). 등기원인은 "상속" 또는 "협의분할에 의한 상속", 등기원인일자는 피상속인의 사망일.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">8</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag alt">완료 확인</span>
<h4>등기 완료 → 등기사항전부증명서 확인</h4>
<p>처리 완료(통상 3~7 영업일) 후 등기사항전부증명서를 발급받아 소유권이 정확히 이전되었는지 확인합니다. 지분 표시·등기원인일자·주소 등을 꼼꼼히 검토하세요.</p>
</div>
</div>
</div>
</section>
<!-- ===== 04. 단계별 상세 ===== -->
<section class="section">
<h2 class="inh-section-title">단계별 상세 안내
    <span class="sub">각 단계에서 꼭 확인할 내용</span>
</h2>
<div class="detail-accordion">
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">1</div>
<h4>신청인 — 누가, 어떻게 신청하나요?</h4>
</div>
<div class="detail-body">
<ul>
<li><strong>원칙: 상속인 단독 신청</strong> — 상속은 등기의무자(피상속인)가 사망하여 현존하지 않으므로 등기권리자(상속인)가 단독으로 신청합니다(법 제23조 제3항).</li>
<li><strong>공동상속인 1인 신청 가능</strong> — 공동상속인 중 1인이 보존행위로서 나머지 전원을 포함해 신청할 수 있습니다. 이때 신청서에 공동상속인 전원을 표시해야 합니다(선례 5-276).</li>
<li><strong>일부 상속등기 불가</strong> — 협조하지 않는 상속인이 있어도 그 지분을 제외한 나머지만으로 신청하는 일부 상속등기는 허용되지 않습니다(예규 제535호).</li>
<li><strong>포기·분할 후</strong> — 상속포기 또는 협의분할로 특정 상속인만 취득한 경우, 그 취득자만 신청합니다. 포기자는 신청인이 될 수 없습니다(선례 2-246).</li>
</ul>
<div class="case-inline">
          📌 피상속인이 원인행위를 완료한 뒤 등기 신청을 하지 않고 사망한 경우(예: 매도계약 체결 후 사망), 그 상속인이 하는 등기신청(법 제27조)은 공동신청에 의합니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">2</div>
<h4>등기원인 · 등기원인일자 정리</h4>
</div>
<div class="detail-body">
<ul>
<li><strong>1991. 1. 1. 이후 개시된 상속</strong> → 등기원인: <strong>"상속"</strong></li>
<li><strong>1960. 1. 1. ~ 1990. 12. 31. 개시된 상속</strong> → 등기원인: <strong>"재산상속"</strong></li>
<li><strong>1960. 1. 1. 이전 구민법 시행 당시</strong> → 등기원인: <strong>"호주상속"</strong> 또는 <strong>"유산상속"</strong></li>
<li><strong>협의분할을 한 경우</strong> → 등기원인: <strong>"협의분할에 의한 상속"</strong></li>
<li><strong>등기원인일자</strong> → 항상 <strong>피상속인의 사망일</strong> (협의서 작성일·신청일 아님, 예규 제438호)</li>
<li><strong>대습상속의 경우</strong> → 피대습자의 사망일이 아닌 <strong>최종 피상속인의 사망일</strong>을 기재</li>
</ul>
<div class="highlight">
          💡 <strong>2개의 등기원인이 있는 경우</strong>(예: 상속인 중 1인이 상속 개시 후 사망) — 먼저 개시된 원인과 연월일을 기재하고, 후에 개시된 상속원인은 신청인 표시란에 별도 기재합니다(예규 제57호).
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">3</div>
<h4>지분 표시 방법</h4>
</div>
<div class="detail-body">
<p>수인의 공동상속인을 위해 신청하는 경우, 상속지분을 반드시 기재해야 하며 지분이 동일한 경우에도 마찬가지입니다. 분모는 지분 합계, 분자는 각자의 상속분으로 표시합니다.</p>
<div class="share-table-wrap">
<table class="share-table">
<thead>
<tr>
<th>상속인 구성</th>
<th>배우자 지분</th>
<th>자녀1 지분</th>
<th>자녀2 지분</th>
<th>표시 예</th>
</tr>
</thead>
<tbody>
<tr>
<td>배우자 + 자녀 1명</td>
<td>5분의 3</td>
<td>5분의 2</td>
<td>—</td>
<td>5/3 : 5/2</td>
</tr>
<tr>
<td>배우자 + 자녀 2명</td>
<td>5분의 3</td>
<td>5분의 1</td>
<td>5분의 1</td>
<td>5/3 : 5/1 : 5/1</td>
</tr>
<tr>
<td>배우자 + 자녀 3명</td>
<td>3분의 1.5</td>
<td colspan="2" style="text-align:center;">각 3분의 1</td>
<td>→ 6/3 : 6/2 : 6/2로 통분</td>
</tr>
<tr>
<td>자녀 3명 (배우자 없음)</td>
<td>—</td>
<td>3분의 1</td>
<td>3분의 1</td>
<td>3/1 : 3/1 : 3/1</td>
</tr>
</tbody>
</table>
</div>
<div class="warn-inline">
          ⚠️ 법정상속분과 다른 지분으로 신청하는 경우 협의분할서 등 증명서류를 첨부하지 않으면 등기관이 각하합니다(대법원 90마772 결정).
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">4</div>
<h4>취득세 신고·납부 절차</h4>
</div>
<div class="detail-body">
<ul>
<li><strong>신고 기한</strong>: 상속 취득일(사망일)부터 6개월 이내 (해외 거주 시 9개월)</li>
<li><strong>신고처</strong>: 부동산 소재지 시·군·구청 세무과 (위택스 온라인 신고 가능)</li>
<li><strong>세율</strong>: 농지 2.3%, 농지 외 주택·건물·토지 2.8% (표준세율 기준, 지방교육세 포함)</li>
<li><strong>1세대 1주택 감면</strong>: 일정 요건 충족 시 감면 혜택 적용 가능 (지방세특례제한법 확인)</li>
<li>취득세 납부 영수증은 등기 신청 시 첨부서류입니다.</li>
</ul>
<div class="highlight">
          💡 취득세 신고는 등기 신청과 별도로 먼저 처리해야 합니다. 취득세 납부 없이는 등기 신청이 접수되지 않습니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">5</div>
<h4>등기 신청서 작성 및 제출</h4>
</div>
<div class="detail-body">
<ul>
<li><strong>등기의 목적</strong>: "소유권이전"</li>
<li><strong>등기원인</strong>: "○○○○년 ○○월 ○○일 상속" (또는 "협의분할에 의한 상속")</li>
<li><strong>신청 방법</strong>: ① 관할 등기소 방문 신청 ② 인터넷등기소(iros.go.kr) e-form 온라인 신청</li>
<li><strong>관할 등기소</strong>: 부동산 소재지를 관할하는 등기소</li>
<li><strong>처리 기간</strong>: 통상 접수일로부터 3~7 영업일 (온라인 신청 시 더 빠를 수 있음)</li>
</ul>
<div class="record-box">
<span class="record-title">📋 등기기록례 — 협의분할에 의한 상속</span>
<table class="record-table">
<thead>
<tr>
<th>순위번호</th>
<th>등기목적</th>
<th>접수</th>
<th>등기원인</th>
<th>권리자 및 기타사항</th>
</tr>
</thead>
<tbody>
<tr>
<td>2</td>
<td>소유권이전</td>
<td>2024년 9월 10일<br/>제8500호</td>
<td>2024년 3월 5일<br/>협의분할에 의한 상속</td>
<td>소유자 김○○ 720101-XXXXXXX<br/>서울특별시 ○○구 ○○로 ○○</td>
</tr>
</tbody>
</table>
</div>
<div class="case-inline">
          ※ 협의분할에 의한 상속 시 등기원인일자(2024년 3월 5일)는 피상속인의 사망일이며, 등기 접수일(2024년 9월 10일)과 다릅니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">6</div>
<h4>경정등기 — 법정상속 후 협의분할로 변경</h4>
</div>
<div class="detail-body">
<ul>
<li>법정상속분대로 등기를 마친 후에도 상속인 전원의 합의로 협의분할에 의한 소유권경정등기를 신청할 수 있습니다(예규 제1421호).</li>
<li><strong>등기권리자</strong>: 경정 후 지분이 늘어나거나 단독 취득하는 상속인</li>
<li><strong>등기의무자</strong>: 경정 후 지분이 줄어들거나 포기하는 상속인</li>
<li><strong>경정등기의 등기원인</strong>: "협의분할로 인한 상속"</li>
<li><strong>경정등기의 등기원인일자</strong>: <strong>협의분할일</strong> (= 협의서 작성일, 피상속인 사망일이 아님)</li>
<li>이해관계인(가압류권자, 근저당권자 등)이 있으면 승낙서 또는 대항 재판서 등본 첨부 필요.</li>
<li>경정등기 후 이해관계인의 등기는 등기관이 직권으로 말소하거나 경정합니다.</li>
</ul>
<div class="warn-inline">
          ⚠️ 공동상속인 중 1인이 사망한 뒤에는 경정등기가 불가합니다. 이 경우 별도의 지분이전등기 절차가 필요합니다(선례 6-202).
        </div>
</div>
</div>
</div>
</section>
<!-- ===== 05. 준비 서류 ===== -->
<section class="section">
<h2 class="inh-section-title">준비 서류
    <span class="sub">상속 소유권이전등기 신청 시 첨부서류</span>
</h2>
<div class="docs-grid">
<div class="docs-card">
<div class="docs-card-head">① 신분관계 서류 (피상속인)</div>
<div class="docs-card-body">
<ul>
<li>기본증명서 (사망 기재) <span class="req-badge">필수</span></li>
<li>가족관계증명서 <span class="req-badge">필수</span></li>
<li>친양자입양관계증명서 <span class="req-badge">필수</span></li>
<li>제적등본 (2007. 12. 31. 이전 사망 시) <span class="req-badge">필수</span></li>
<li>피상속인의 주민등록말소초본 <span class="cond-badge">동일인 확인 필요 시</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">② 신분관계 서류 (상속인)</div>
<div class="docs-card-body">
<ul>
<li>등기명의인이 되는 상속인의 주민등록등·초본 <span class="req-badge">필수</span></li>
<li>기타 상속인의 가족관계증명서 (상속 범위 확인용)</li>
<li>재외국민 상속인: 재외국민등록부등본 또는 재외공관 확인서 <span class="cond-badge">해당 시</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">③ 부동산 서류</div>
<div class="docs-card-body">
<ul>
<li>등기사항전부증명서 (말소사항 포함) <span class="req-badge">필수</span></li>
<li>토지대장 (토지인 경우)</li>
<li>건물대장 또는 집합건물대장 (건물·아파트인 경우)</li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">④ 세금 관련 서류</div>
<div class="docs-card-body">
<ul>
<li>취득세 납부 영수증 (OCR 용지) <span class="req-badge">필수</span></li>
<li>국민주택채권 매입 영수증 <span class="req-badge">필수</span></li>
<li>등기신청 수수료 납부 영수증 <span class="req-badge">필수</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">⑤ 협의분할 시 추가 서류</div>
<div class="docs-card-body">
<ul>
<li>상속인 전원이 날인한 협의분할서 <span class="req-badge">필수</span></li>
<li>상속인 전원의 인감증명서 <span class="req-badge">필수</span></li>
<li>미성년 상속인 있을 때: 특별대리인 선임 심판서 + 인감증명 <span class="cond-badge">해당 시</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">⑥ 특수 상황 서류</div>
<div class="docs-card-body">
<ul>
<li>상속포기자 있을 때: 상속포기 심판서 정본 <span class="cond-badge">해당 시</span></li>
<li>특별수익자 있을 때: 상속분 없음 확인서 + 인감증명 <span class="cond-badge">해당 시</span></li>
<li>경정등기 이해관계인: 승낙서 또는 대항 재판서 등본 <span class="cond-badge">해당 시</span></li>
<li>상속결격자 있을 때: 판결 등본 <span class="cond-badge">해당 시</span></li>
</ul>
</div>
</div>
<div class="docs-note">
<strong>⏱️ 서류 유효기간:</strong> 가족관계등록사항별증명서(기본증명서·가족관계증명서·친양자입양관계증명서) 및 제적등·초본은 발급일로부터 <strong>3개월 이내</strong>의 것만 유효합니다(부동산등기규칙 제62조). 등기 신청 직전에 발급받거나 발급일을 반드시 확인하세요.
    </div>
</div>
</section>
<!-- ===== 06. 비용 안내 ===== -->
<section class="section">
<h2 class="inh-section-title">비용 안내
    <span class="sub">상속 소유권이전등기 주요 비용 항목</span>
</h2>
<div class="cost-table-wrap">
<table class="cost-table">
<thead>
<tr>
<th>비용 항목</th>
<th>산정 기준</th>
<th>납부 대상</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>취득세</strong></td>
<td>농지 2.3%, 농지 외(주택·토지·건물) 2.8% (지방교육세 포함, 시가표준액 기준)</td>
<td>시·군·구청</td>
</tr>
<tr>
<td><strong>농어촌특별세</strong></td>
<td>취득세액의 10% (감면 적용 시 감면액의 20%)</td>
<td>시·군·구청</td>
</tr>
<tr>
<td><strong>국민주택채권 매입</strong></td>
<td>시가표준액 구간별 매입의무액 — 즉시 매도 가능 (할인율만큼 실질 비용 발생)</td>
<td>주택도시기금</td>
</tr>
<tr>
<td><strong>등기신청 수수료</strong></td>
<td>부동산 1건당 정액 (인터넷 신청 시 일부 감면)</td>
<td>법원 (수입인지)</td>
</tr>
<tr>
<td><strong>서류 발급 비용</strong></td>
<td>기본증명서·가족관계증명서 각 1,000원, 등기사항전부증명서 1,200원 등</td>
<td>법원·행정기관</td>
</tr>
<tr>
<td><strong>법무사 보수</strong></td>
<td>부동산 가액·건수 등에 따라 법무사 보수 기준 산정</td>
<td>법무사 사무소</td>
</tr>
<tr>
<td><strong>특별대리인 선임 비용</strong> (해당 시)</td>
<td>가정법원 심판 신청비용 (인지대·송달료 등)</td>
<td>법원</td>
</tr>
</tbody>
</table>
</div>
<div class="cost-note">
    💡 <strong>취득세 신고 기한 주의:</strong> 상속 취득에 따른 취득세 신고 기한은 상속개시일(사망일)로부터 6개월(해외 거주 시 9개월)입니다. 기한 내 신고·납부하지 않으면 가산세가 부과됩니다. 정확한 세금은 세무사 또는 법무사와 상담하여 산출하시기 바랍니다.
  </div>
</section>
<!-- ===== 09. Q&A ===== -->
<section class="section">
<h2 class="inh-section-title">자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna">
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">상속인 중 1명이 해외에 있는데도 등기 신청이 가능한가요?</span>
</div>
<div class="qna-a">
<p>가능합니다. 공동상속인 중 1인이 보존행위로서 나머지 전원의 지분을 포함하여 단독으로 법정상속 등기를 신청할 수 있습니다. 이 경우 해외 상속인의 협조 없이도 신청이 가능합니다. 단, 신청서에는 해외 상속인의 정보도 포함해야 하며, 그의 주소를 증명하는 정보로 재외국민거주사실증명서나 말소된 주민등록등본 등을 사용할 수 있습니다. 협의분할 등기를 원한다면 해외 상속인의 서명 인증(재외공관 공증 또는 아포스티유)이 별도로 필요합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">피상속인이 등기부상 이름과 실제 가족관계증명서 상 이름이 다릅니다. 어떻게 해야 하나요?</span>
</div>
<div class="qna-a">
<p>성명 상이, 창씨명 기재, 번지 누락 등 표시 차이가 있는 경우에도 별도의 표시변경등기나 경정등기를 먼저 하지 않아도 됩니다. 두 공부상 명의인이 동일인임을 증명하는 서면(시·구·읍·면장의 확인서, 또는 이를 인정함에 충분한 서면)을 첨부하면 곧바로 상속등기 신청이 가능합니다(선례 2-259). 동일인 확인 서면으로는 말소된 주민등록표초본, 법무사가 작성한 보증서 등이 사용되기도 합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">등기 신청 후 처리까지 얼마나 걸리나요?</span>
</div>
<div class="qna-a">
<p>일반적으로 접수일로부터 3~7 영업일 내에 처리됩니다. 다만 등기소의 업무량, 보정(서류 보완) 여부에 따라 달라질 수 있습니다. 인터넷등기소(iros.go.kr)를 통한 온라인 신청 시 조금 더 빠를 수 있습니다. 등기 완료 여부는 인터넷등기소에서 사건번호로 조회하거나, 등기사항전부증명서를 발급받아 확인할 수 있습니다. 등기 완료 후에는 등기필정보(등기필증)가 발행되므로 잘 보관하시기 바랍니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">실종선고를 받은 피상속인의 부동산은 어떻게 등기하나요?</span>
</div>
<div class="qna-a">
<p>실종선고의 경우 등기원인은 "상속"이며, 등기원인일자는 실종기간만료일입니다(민법 제28조). 첨부서류로 일반 상속을 증명하는 서류 외에 실종선고심판정본을 첨부해야 합니다. 다만 이미 가족관계등록부(구 호적부)가 실종선고에 따라 정리되어 있다면 심판정본 첨부 없이도 가능합니다(선례 5-302). 실종기간이 구법 시행 중에 만료되었더라도 실종선고가 신민법 시행 후에 선고된 경우에는 상속순위·상속분은 신민법을 적용합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">등기 신청 후 서류에 오류가 발견됐습니다. 어떻게 하나요?</span>
</div>
<div class="qna-a">
<p>등기 신청 후 등기관이 서류를 검토하는 과정에서 보정(補正) 사항이 있으면 통보가 옵니다. 보정 기간 내에 서류를 보완하지 않으면 각하될 수 있습니다. 이미 등기가 완료된 후 내용에 오류(표시 오기 등)가 있으면 등기명의인 표시변경등기 또는 경정등기를 별도로 신청해야 합니다. 등기 완료 후에는 즉시 등기사항전부증명서를 발급받아 내용이 정확한지 확인하는 것이 중요합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">상속인이 상속을 포기했는데, 포기한 사람의 자녀(손자)가 대신 상속받을 수 있나요?</span>
</div>
<div class="qna-a">
<p>아닙니다. 상속포기는 대습상속의 원인이 되지 않습니다. 대습상속은 상속인이 상속개시 전에 사망하거나 상속결격된 경우에만 발생합니다(민법 제1001조). 상속을 포기한 사람의 자녀는 그 포기의 효력에 의해 상속권을 취득하지 못합니다. 따라서 포기자의 자녀는 등기신청의 신청인이 될 수 없습니다. 포기자가 있으면 나머지 상속인들의 상속분이 법정상속분대로 귀속됩니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
</div>
</section>
<!-- ===== 07. 관련 판례 ===== -->
<section class="section">
<h2 class="inh-section-title">관련 판례
    <span class="sub">상속 소유권이전등기 관련 주요 대법원 판례</span>
</h2>
<div class="rulings">
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 1990. 10. 29. 자 90마772 결정</span>
<span class="ruling-court">특별부</span>
</div>
<div class="ruling-title">법정상속분과 다른 지분 신청 → 등기관 각하</div>
<div class="ruling-body">
        법정상속분과 다른 비율로 상속등기를 신청하는 경우 그 변동을 증명하는 정보(협의분할서, 심판서 정본 등)를 제공하지 않으면, 등기관은 신청을 각하하여야 한다. 등기관의 심사권은 형식적 심사에 한하므로 당사자 간의 합의나 내부 사정은 고려되지 않는다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 지분 변동의 근거가 없으면 무조건 각하입니다. 협의분할서와 인감증명서는 등기 신청 전에 반드시 준비하세요.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 1995. 2. 22. 자 94마2116 결정</span>
<span class="ruling-court">민사3부</span>
</div>
<div class="ruling-title">확정판결 상의 상속분과 다른 신청도 각하 대상</div>
<div class="ruling-body">
        신청인이 산정한 상속분이 소송의 확정판결에서 인정되었더라도, 그 판결의 기판력은 등기관의 형식적 심사권에는 미치지 않는다. 등기관은 상속을 증명하는 정보와 관계 법령에 의해 인정되는 상속지분과 다른 내용으로 신청된 상속등기를 각하하여야 한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 소송에서 이겼더라도 등기관은 독립적으로 판단합니다. 법령상 정확한 상속분대로 신청해야 합니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 선례 5-276 (등기선례)</span>
<span class="ruling-court">대법원 등기예규</span>
</div>
<div class="ruling-title">공동상속인 1인의 보존행위로서 전원 지분 신청 허용</div>
<div class="ruling-body">
        공동상속인 중 1인이 민법 제265조 단서에서 규정하는 공유물의 보존행위로서 상속인 모두를 위해 상속등기를 신청할 수 있다. 이 경우 등기신청서에는 공동상속인 전원을 표시하여야 한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 다른 상속인의 협조 없이도 혼자 전원 지분을 포함한 등기를 신청할 수 있습니다. 단, 이는 보존행위로 협의분할 내용을 반영하는 것은 아닙니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">대법원 선례 6-202 (등기선례)</span>
<span class="ruling-court">대법원 등기예규</span>
</div>
<div class="ruling-title">법정상속 등기 완료 후 공동상속인 중 1인 사망 시 경정등기 불가</div>
<div class="ruling-body">
        피상속인의 사망으로 그 소유 부동산에 관하여 법정상속지분에 의한 등기가 마쳐진 후 공동상속인 중 1인이 사망하였다면, 그 상속등기에 대해서는 상속재산분할협의에 의한 소유권경정등기를 할 수 없다. 이 경우에는 별도의 지분이전등기 절차에 의해야 한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 법정상속 등기 후에 상속인 중 1인이 사망하면 경정등기 불가. 협의분할이 있으면 상속등기 마치기 전에 처리하거나, 등기 후라면 별도 지분이전 절차를 밟아야 합니다.
      </div>
</div>
</div>
</section>
<!-- ===== 08. 주의사항 ===== -->
<section class="section">
<h2 class="inh-section-title">주의사항
    <span class="sub">신청 전 반드시 확인하세요</span>
</h2>
<div class="warns">
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<h4>일부 등기는 절대 안 됩니다</h4>
<p>공동상속인 중 일부가 협조하지 않거나 행방불명인 경우에도, 나머지 상속인들만의 지분에 대한 일부 상속등기는 허용되지 않습니다(예규 제535호). 반드시 공동상속인 전원의 지분을 포함하여 신청해야 합니다. 행방불명자의 경우 말소된 주민등록등·초본을 첨부하여 최후 주소지로 표시할 수 있습니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">📅</div>
<div class="warn-content">
<h4>서류 유효기간 3개월 — 등기 직전 발급 권장</h4>
<p>가족관계등록사항별증명서와 제적등·초본은 발급일부터 3개월 이내 것만 사용 가능합니다(등기규칙 제62조). 서류 수집을 미리 해두었다가 3개월이 지나면 다시 발급받아야 하므로, 등기 신청 일정에 맞춰 가능한 한 신청 직전에 발급받는 것이 좋습니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">🔍</div>
<div class="warn-content">
<h4>친양자·입양 여부를 꼭 확인하세요</h4>
<p>2010년 6월 30일부터 양자의 가족관계증명서 부모란에 양부모만 기재하고 친생부모는 입양관계증명서에만 기록됩니다. 따라서 2순위 이하 상속인 확인 시에는 입양관계증명서를 반드시 확인해야 합니다. 친양자 입양 시 입양 전 친족관계가 종료되므로, 친양자 입양 시점과 피상속인의 사망 시점을 비교하여 상속인 범위를 정확히 확정해야 합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">🏗️</div>
<div class="warn-content">
<h4>미등기 부동산은 소유권이전등기가 아닌 보존등기입니다</h4>
<p>대장에만 존재하고 아직 등기부가 없는 미등기 부동산은 소유권이전등기를 신청하는 것이 아니라 소유권보존등기를 신청해야 합니다. 법적 근거 조항(부동산등기법 제65조)과 신청 서류가 다르므로, 부동산이 등기된 것인지 미등기인지를 먼저 확인하세요.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">💰</div>
<div class="warn-content">
<h4>취득세 신고 기한 놓치면 가산세 부과</h4>
<p>취득세 신고 기한(상속개시일부터 6개월)을 놓치면 무신고 가산세(세액의 20%)와 납부 지연 가산세가 부과됩니다. 등기를 늦게 하더라도 취득세 신고 기한은 별도로 진행됩니다. 상속 발생 후 세무사·법무사와 함께 조기에 상담하여 기한을 관리하세요.</p>
</div>
</div>
</div>
</section>
<!-- ===== 10. 다음으로 ===== -->
<section class="section">
<h2 class="inh-section-title">다음으로 확인할 내용</h2>
<div class="next-cards">
<a class="next-card" href="상속_12_등기개관.html">
<div class="nc-num">◀ PAGE 12</div>
<h4>상속등기 개관</h4>
<p>등기의 종류·신청인·등기원인 전체 개요를 확인하세요.</p>
</a>
<a class="next-card" href="상속_14_보존등기.html">
<div class="nc-num">PAGE 14 ▶</div>
<h4>상속인에 의한 소유권보존등기</h4>
<p>미등기 부동산을 처음으로 등기하는 절차를 확인하세요.</p>
</a>
<a class="next-card" href="상속_11_분할협의.html">
<div class="nc-num">◀ PAGE 11</div>
<h4>협의분할서 작성과 절차</h4>
<p>협의분할 등기 전에 협의서 작성 방법을 확인하세요.</p>
</a>
<a class="next-card" href="상속_08_상속분.html">
<div class="nc-num">◀ PAGE 08</div>
<h4>상속분 계산</h4>
<p>공동등기 시 지분 계산의 기준이 되는 법정상속분을 확인하세요.</p>
</a>
</div>
</section>
<!-- ===== 11. CTA ===== -->
<section class="section" id="cta">
<div class="cta-point">
<span class="cp-icon">📋</span>
<span class="cp-text">서류 준비 대행</span>
</div>
<div class="cta-point">
<span class="cp-icon">🏛️</span>
<span class="cp-text">등기 신청 대리</span>
</div>
<div class="cta-point">
<span class="cp-icon">💬</span>
<span class="cp-text">무료 초기 상담</span>
</div>
</div>
<a class="cta-btn" href="tel:0000000000">☎ 무료 상담 신청하기</a>
<p class="cta-sub">전화·방문·이메일 상담 가능 · 평일 9:00 – 18:00</p>
</div>
</section>
<!-- ===== 면책 ===== -->
<section class="section">
<div class="disclaimer">
<strong>법적 고지 (면책 조항)</strong><br/>
    이 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 법률 자문이 아닙니다.
    개별 사안의 구체적인 사실관계 및 법령 해석에 따라 결론이 달라질 수 있습니다.
    실제 법률 문제에 대해서는 반드시 자격 있는 법무사 또는 변호사와 직접 상담하시기 바랍니다.
    본 정보를 참고하여 발생한 결과에 대해 작성자는 책임을 지지 않습니다.
    법령은 개정될 수 있으므로 최신 법령을 확인하시기 바랍니다.
  </div>
</section>
</div><!-- /page-wrap -->
<!-- ===== FOOTER ===== -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-14', title: '상속 보존등기',
        meta: '등기부가 아직 없는 부동산을 상속받았다면 소유권이전등기가 아닌소유권보존등기가 필요합니다. 대장에서 등기부 개설까지 안내합니다.',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ===== HEADER ===== -->
<!-- ===== HERO ===== -->

<div class="page-wrap">
<!-- ===== 01. 이런 분께 ===== -->
<section class="section">
<h2 class="inh-section-title">이런 분께 도움이 됩니다
    <span class="sub">해당 상황을 확인하세요</span>
</h2>
<div class="target-grid">
<div class="target-item">
<div class="target-icon">🗺️</div>
<div class="target-text">토지대장·건축물대장에는 피상속인 명의로 되어 있는데 등기부가 없는 부동산을 상속받은 분</div>
</div>
<div class="target-item">
<div class="target-icon">🏚️</div>
<div class="target-text">오래된 농지·임야·단독주택 등 등기가 한 번도 된 적 없는 부동산을 물려받은 분</div>
</div>
<div class="target-item">
<div class="target-icon">📜</div>
<div class="target-text">대장상 소유자가 조부·증조부 등 여러 세대 전 선대 이름으로 되어 있어 처리가 막막한 분</div>
</div>
<div class="target-item">
<div class="target-icon">🔍</div>
<div class="target-text">소유권보존등기와 소유권이전등기의 차이를 몰라서 어떤 절차를 밟아야 하는지 모르는 분</div>
</div>
<div class="target-item">
<div class="target-icon">📋</div>
<div class="target-text">대장상 소유자 표시가 가족관계등록부와 달라 동일인 증명이 필요한 분</div>
</div>
<div class="target-item">
<div class="target-icon">⚡</div>
<div class="target-text">미등기 부동산을 팔거나 담보로 제공하려면 어떻게 해야 하는지 알고 싶은 분</div>
</div>
</div>
</section>
<!-- ===== 02. 핵심 요약 ===== -->
<section class="section">
<h2 class="inh-section-title">핵심 요약
    <span class="sub">소유권보존등기 3가지 핵심 원칙</span>
</h2>
<!-- 이전등기 vs 보존등기 비교 -->
<div style="margin-bottom:20px;">
<div style="background:#f0f4fb;border-radius:8px;padding:12px 16px;font-size:0.85rem;color:#2d4a7a;font-weight:700;margin-bottom:10px;">
      ⚠️ 먼저 확인하세요 — 이미 등기부가 있는 부동산이라면 이 페이지가 아닌 <a href="상속_13_이전등기.html">소유권이전등기(PAGE 13)</a>를 참고하세요.
    </div>
<div class="vs-grid">
<div class="vs-col">
<div class="vs-head blue">소유권이전등기</div>
<div class="vs-body">이미 등기부가 존재하는 부동산의 소유자 명의를 변경</div>
</div>
<div class="vs-col">
<div class="vs-head green">소유권보존등기 ← 이 페이지</div>
<div class="vs-body">등기부가 아직 없는 미등기 부동산에 처음으로 등기를 개설</div>
</div>
<div class="vs-row">
<div class="vs-row-label">등기원인</div>
<div class="vs-row-val mid">"상속" 기재</div>
<div class="vs-row-val">기재 불필요</div>
</div>
<div class="vs-row">
<div class="vs-row-label">근거법령</div>
<div class="vs-row-val mid">법 제23조 제3항</div>
<div class="vs-row-val">법 제65조 제1호</div>
</div>
<div class="vs-row">
<div class="vs-row-label">기본서류</div>
<div class="vs-row-val mid">등기사항전부증명서</div>
<div class="vs-row-val">토지·건축물대장</div>
</div>
</div>
</div>
<div class="summary-box">
<h3>🔑 보존등기 3원칙</h3>
<ul class="summary-points">
<li>
<div class="pt-num">1</div>
<div><strong>대장이 기본 — 등기부가 아직 없습니다</strong> — 소유권보존등기는 토지대장·임야대장·건축물대장에 피상속인이 최초 소유자로 등록된 경우에 상속인이 신청합니다(법 제65조 제1호). 등기원인과 등기원인일자는 신청정보에 기재할 필요가 없습니다(규칙 제121조 제1항).</div>
</li>
<li>
<div class="pt-num">2</div>
<div><strong>여러 세대를 건너뛰어도 최후 상속인이 직접 신청합니다</strong> — 대장상 최초 소유자로부터 여러 차례 상속이 이루어졌어도, 현재의 최후 상속인이 중간 단계 없이 바로 자기 명의로 보존등기를 신청할 수 있습니다.</div>
</li>
<li>
<div class="pt-num">3</div>
<div><strong>대장과 가족관계등록부 표시가 달라도 됩니다</strong> — 대장상 피상속인 표시(성명·주소 등)가 가족관계등록부와 달라도, 동일인임을 증명하는 서면을 별도로 첨부하면 됩니다(선례 2-216). 먼저 표시변경등기를 할 필요가 없습니다.</div>
</li>
</ul>
<div class="summary-note">
      📌 <strong>핵심 한 줄 요약:</strong> 대장에서 내 이름 확인 → 상속 증명 서류 준비 → 단독 신청으로 등기부 개설.
    </div>
</div>
</section>
<!-- ===== 03. 절차 흐름도 ===== -->
<section class="section">
<h2 class="inh-section-title">절차 흐름도
    <span class="sub">미등기 부동산 보존등기 7단계</span>
</h2>
<div class="proc-flow">
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">1</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">사전 확인</span>
<h4>미등기 여부 확인 — 대장 열람</h4>
<p>부동산이 '미등기' 상태인지 먼저 확인합니다. 토지는 토지대장·임야대장, 건물은 건축물대장을 열람하여 피상속인이 최초 소유자로 등록되어 있는지 확인합니다. 인터넷 정부24 또는 해당 행정기관 방문으로 열람 가능합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">2</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">상속인 확정</span>
<h4>법정상속인 전원 확인 — 세대 간 연결 포함</h4>
<p>피상속인의 기본증명서·가족관계증명서·친양자입양관계증명서·제적등본으로 상속인을 확정합니다. 수십 년 전 사망한 선대의 상속이라면 중간 대(代) 상속관계도 모두 증명해야 합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">3</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag warn">특수 확인</span>
<h4>대장 표시 ↔ 가족관계등록부 표시 일치 여부 확인</h4>
<p>대장상 피상속인의 성명·주소 등이 가족관계등록부와 다를 경우, 동일인 증명 서면을 별도로 준비해야 합니다. 피상속인의 주민등록번호가 누락된 경우에도 별도 소명자료가 필요합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">4</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">협의 시</span>
<h4>상속방식 결정 (법정상속 또는 협의분할)</h4>
<p>공동상속인 전원이 합의하면 협의분할서를 작성하여 특정 1인 명의로 보존등기를 신청할 수 있습니다. 합의가 없으면 법정상속분대로 공동 보존등기를 신청합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">5</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag">서류 수집</span>
<h4>첨부서류 일체 수집</h4>
<p>대장 정보, 상속을 증명하는 서류(기본증명서·가족관계증명서 등), 부동산 표시 증명 서류, 도면(구분건물의 경우)을 준비합니다. 서류 유효기간(3개월)에 유의합니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">6</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag warn">세금 선납</span>
<h4>취득세 신고·납부 → 국민주택채권 매입</h4>
<p>등기 신청 전 취득세를 신고·납부하고 국민주택채권을 매입합니다. 납부 영수증은 등기 신청 시 첨부서류입니다.</p>
</div>
</div>
<div class="proc-step">
<div class="proc-step-left">
<div class="step-circle">7</div>
<div class="step-line"></div>
</div>
<div class="proc-step-right">
<span class="step-tag green">등기 신청</span>
<h4>관할 등기소 신청 — 등기부 새로 개설</h4>
<p>부동산 소재지 관할 등기소에 단독으로 신청합니다. 등기의 목적은 "소유권보존", 신청근거규정은 "부동산등기법 제65조제1호"를 기재합니다. 등기원인과 등기원인일자는 기재 불필요(규칙 제121조 제1항).</p>
</div>
</div>
</div>
</section>
<!-- ===== 04. 단계별 상세 ===== -->
<section class="section">
<h2 class="inh-section-title">단계별 상세 안내
    <span class="sub">각 단계에서 꼭 확인할 내용</span>
</h2>
<div class="detail-accordion">
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">1</div>
<h4>신청 자격 — 누가 신청할 수 있나요?</h4>
</div>
<div class="detail-body">
<p>부동산등기법 제65조는 소유권보존등기를 신청할 수 있는 자를 열거하고 있습니다. 상속인에게 해당하는 경우는 제1호입니다.</p>
<div class="eligibility-table-wrap">
<table class="eligibility-table">
<thead>
<tr>
<th>신청 가능 자</th>
<th>근거</th>
<th>비고</th>
</tr>
</thead>
<tbody>
<tr>
<td>대장 최초 소유자의 상속인</td>
<td>법 제65조 제1호</td>
<td><span class="ok-badge">가능</span> — 이 페이지 해당</td>
</tr>
<tr>
<td>대장 최초 소유자의 포괄승계인(합병·분할 등)</td>
<td>법 제65조 제1호</td>
<td><span class="ok-badge">가능</span></td>
</tr>
<tr>
<td>확정판결로 소유권 증명하는 자</td>
<td>법 제65조 제2호</td>
<td><span class="ok-badge">가능</span></td>
</tr>
<tr>
<td>포괄유증을 받은 수증자</td>
<td>법 제65조 제1호 (개정 후)</td>
<td><span class="ok-badge">가능</span> — 직접 자기 명의 신청</td>
</tr>
<tr>
<td>대장에 이름이 없는 특정유증 수증자</td>
<td>—</td>
<td><span class="no-badge">불가</span> — 상속인 보존 후 이전 절차</td>
</tr>
</tbody>
</table>
</div>
<div class="case-inline">
          📌 상속인이 여러 명인 경우에도 공동상속의 보존행위(민법 제265조 단서)로서 상속인 중 1인이 전원을 위해 신청할 수 있습니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">2</div>
<h4>신청정보 — 등기원인 기재 불필요</h4>
</div>
<div class="detail-body">
<ul>
<li><strong>등기의 목적</strong>: "소유권보존"</li>
<li><strong>신청근거규정</strong>: "부동산등기법 제65조제1호" (반드시 기재)</li>
<li><strong>등기원인·등기원인일자</strong>: 기재 불필요 (규칙 제121조 제1항) — 소유권이전등기와의 가장 큰 차이점</li>
<li><strong>신청인</strong>: 등기명의인이 될 상속인 (단독 신청 가능)</li>
<li>공동상속의 경우 상속지분을 표시하여 신청 (법정상속분 또는 협의분할 내용대로)</li>
</ul>
<div class="highlight">
          💡 <strong>소유권이전등기와 핵심 차이:</strong> 소유권보존등기에서는 등기원인(예: "상속")과 등기원인일자(예: 사망일)를 신청정보에 기재하지 않아도 됩니다. 대장 정보 자체가 등기원인을 증명하는 정보이기 때문입니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">3</div>
<h4>첨부서류 — 대장 + 상속 증명 서류</h4>
</div>
<div class="detail-body">
<p>소유권보존등기 신청 시에는 크게 두 종류의 서류가 필요합니다.</p>
<div class="daejang-grid">
<div class="daejang-card">
<h5>① 소유자임을 증명하는 정보</h5>
<ul>
<li>토지대장 정보 (토지인 경우)</li>
<li>임야대장 정보 (임야인 경우)</li>
<li>건축물대장 정보 (건물인 경우)</li>
<li>상속인임을 증명하는 서면 (기본증명서, 가족관계증명서, 친양자입양관계증명서, 제적등본 등)</li>
</ul>
</div>
<div class="daejang-card">
<h5>② 부동산 표시를 증명하는 정보</h5>
<ul>
<li>토지대장 정보 또는 임야대장 정보</li>
<li>건축물대장 정보</li>
<li>구분건물(아파트 등): 건물 소재도, 층별 평면도 — 단, 건축물대장 정보 제공 시 불필요(규칙 제121조 제3항·제4항)</li>
</ul>
</div>
</div>
<div class="highlight" style="margin-top:12px;">
          💡 이전등기와 달리 등기필정보(등기필증)는 이 단계에서는 존재하지 않으므로 첨부 불필요합니다. 등기기록이 처음 개설되는 단계이기 때문입니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">4</div>
<h4>여러 세대 상속 — 최후 상속인이 직접 신청</h4>
</div>
<div class="detail-body">
<p>대장상 최초 소유자로부터 여러 차례 상속이 이루어진 경우에도, 현재의 최후 상속인이 중간 단계(조부·부의 이름)를 거치지 않고 직접 자기 명의로 보존등기를 신청할 수 있습니다.</p>
<ul>
<li>예: 대장상 최초 소유자 갑(증조부) → 을(조부) 상속 → 을 사망 → 병(부친)이 을을 상속하여 소유 → 병 사망 → 병의 상속인 정(본인)이 직접 보존등기 신청 가능</li>
<li>이 경우 갑→을→병→정으로 이어지는 상속관계 전체를 증명하는 서면이 필요합니다.</li>
</ul>
<div class="case-inline">
          📌 선례 3-351: 공유 미등기토지의 공유자들 중 일부(갑·을)의 상속인이 전원 사망하고 나머지(병)의 상속인만 생존한 경우, 병의 상속인들이 갑·을의 지분까지 귀속된 사실을 증명하는 서면과 함께 전체 보존등기를 신청할 수 있습니다.
        </div>
</div>
</div>
<div class="detail-item">
<div class="detail-head">
<div class="detail-num">5</div>
<h4>특수 상황별 처리 방법</h4>
</div>
<div class="detail-body">
<div class="special-cases">
<div class="special-case">
<div class="sc-head">
<span class="sc-badge">선례 2-216</span>
<h5>대장 표시 ≠ 가족관계등록부 표시인 경우</h5>
</div>
<p>대장상 피상속인의 성명·주소 등이 가족관계등록부와 다른 경우, 표시변경등기를 먼저 할 필요 없이 두 공부의 명의인이 동일인임을 증명하는 서면을 함께 첨부하면 됩니다. 실무상 주민등록표초본, 시·구·읍·면장의 확인서 등이 사용됩니다.</p>
</div>
<div class="special-case">
<div class="sc-head">
<span class="sc-badge">선례 2-206</span>
<h5>대장상 번지 일부 누락 + 제적부 소실로 상속인 확인 불가</h5>
</div>
<p>대장의 소유자 주소 기재 일부(번지)가 누락된 데다 피상속인의 제적부까지 소실된 경우, 동일인임을 증명하는 보증서만으로는 보존등기를 신청할 수 없습니다. 이 경우 추가적인 소명 방법을 법무사와 함께 검토해야 합니다.</p>
</div>
<div class="special-case">
<div class="sc-head">
<span class="sc-badge">선례 8-155</span>
<h5>대장상 주민등록번호 누락인 경우</h5>
</div>
<p>주민등록법 시행 이전에 사망하여 주민등록번호를 등록하지 못한 경우에도, 토지대장·상속인임을 증명하는 서면·주소를 증명하는 서면을 첨부하여 상속인 명의로 보존등기를 신청할 수 있습니다. 신청인이 대장상 소유자의 상속인과 동일인인지는 등기관이 판단합니다.</p>
</div>
<div class="special-case">
<div class="sc-head">
<span class="sc-badge">선례 5-267</span>
<h5>대장상 공동상속인 중 1인 명의로 이전등록 된 경우</h5>
</div>
<p>대장상 최초 소유자의 공동상속인 중 1인 명의로 상속을 원인으로 하는 소유권이전등록이 이미 되어 있는 경우, 대장등본만으로 그 1인 명의 보존등기를 신청할 수 없습니다. 반드시 공동상속인 전원 명의의 보존등기를 신청하거나, 협의분할서·인감증명 등을 첨부하여 1인 단독 명의 보존등기를 신청해야 합니다.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- ===== 05. 준비 서류 ===== -->
<section class="section">
<h2 class="inh-section-title">준비 서류
    <span class="sub">소유권보존등기 신청 시 첨부서류 목록</span>
</h2>
<div class="docs-grid">
<div class="docs-card">
<div class="docs-card-head">① 대장 서류 (소유자·부동산 표시 증명)</div>
<div class="docs-card-body">
<ul>
<li>토지대장 등본 (토지·임야인 경우) <span class="req-badge">필수</span></li>
<li>임야대장 등본 (임야인 경우) <span class="req-badge">필수</span></li>
<li>건축물대장 등본 (건물인 경우) <span class="req-badge">필수</span></li>
<li>집합건물대장 등본 (아파트·연립 등) <span class="req-badge">필수</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">② 상속인임을 증명하는 서류 (피상속인)</div>
<div class="docs-card-body">
<ul>
<li>기본증명서 (사망 기재) <span class="req-badge">필수</span></li>
<li>가족관계증명서 <span class="req-badge">필수</span></li>
<li>친양자입양관계증명서 <span class="req-badge">필수</span></li>
<li>제적등본 (2007. 12. 31. 이전 사망 시) <span class="req-badge">필수</span></li>
<li>중간 세대 상속 시: 각 대(代)별 상속 증명 서면 연결 <span class="req-badge">필수</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">③ 신청인(상속인) 관련 서류</div>
<div class="docs-card-body">
<ul>
<li>등기명의인이 될 상속인의 주민등록등·초본 <span class="req-badge">필수</span></li>
<li>대리 신청 시: 위임장 + 대리인 신분증</li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">④ 동일인 확인 서류 (해당 시)</div>
<div class="docs-card-body">
<ul>
<li>대장 표시 ≠ 가족관계등록부 표시 시: 동일인 확인 서면 (주민등록초본, 시·구청장 확인서 등) <span class="cond-badge">해당 시</span></li>
<li>주민등록번호 없는 경우: 주소를 증명하는 서면 <span class="cond-badge">해당 시</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">⑤ 협의분할 시 추가 서류</div>
<div class="docs-card-body">
<ul>
<li>상속인 전원이 날인한 협의분할서 <span class="cond-badge">협의분할 시</span></li>
<li>상속인 전원의 인감증명서 <span class="cond-badge">협의분할 시</span></li>
<li>미성년 상속인 있을 때: 특별대리인 선임 심판서 + 인감증명 <span class="cond-badge">해당 시</span></li>
</ul>
</div>
</div>
<div class="docs-card">
<div class="docs-card-head">⑥ 세금·기타 서류</div>
<div class="docs-card-body">
<ul>
<li>취득세 납부 영수증 (OCR 용지) <span class="req-badge">필수</span></li>
<li>국민주택채권 매입 영수증 <span class="req-badge">필수</span></li>
<li>등기신청 수수료 납부 영수증 <span class="req-badge">필수</span></li>
<li>구분건물 시: 건물 소재도, 층별 평면도 <span class="cond-badge">건축물대장 미제출 시</span></li>
</ul>
</div>
</div>
<div class="docs-note">
<strong>⏱️ 서류 유효기간:</strong> 가족관계등록사항별증명서(기본증명서·가족관계증명서·친양자입양관계증명서) 및 제적등·초본은 발급일로부터 <strong>3개월 이내</strong>의 것을 사용해야 합니다(부동산등기규칙 제62조). 여러 세대에 걸친 상속이라면 각 세대별 서류를 모두 3개월 이내에 발급받아야 하므로, 등기 신청 일정에 맞춰 한꺼번에 수집하는 것이 좋습니다.
    </div>
</div>
</section>
<!-- ===== 06. 비용 안내 ===== -->
<section class="section">
<h2 class="inh-section-title">비용 안내
    <span class="sub">소유권보존등기 주요 비용 항목</span>
</h2>
<div class="cost-table-wrap">
<table class="cost-table">
<thead>
<tr>
<th>비용 항목</th>
<th>산정 기준</th>
<th>납부 대상</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>취득세</strong></td>
<td>농지 2.3%, 농지 외 2.8% (지방교육세 포함, 시가표준액 기준)</td>
<td>시·군·구청</td>
</tr>
<tr>
<td><strong>농어촌특별세</strong></td>
<td>취득세액의 10%</td>
<td>시·군·구청</td>
</tr>
<tr>
<td><strong>국민주택채권 매입</strong></td>
<td>시가표준액 구간별 매입의무액 (즉시 할인 매도 가능)</td>
<td>주택도시기금</td>
</tr>
<tr>
<td><strong>등기신청 수수료</strong></td>
<td>부동산 1건당 정액</td>
<td>법원 (수입인지)</td>
</tr>
<tr>
<td><strong>대장 발급 수수료</strong></td>
<td>토지대장·건축물대장 각 500원 (열람), 발급 시 별도</td>
<td>행정기관</td>
</tr>
<tr>
<td><strong>가족관계등록증명 발급</strong></td>
<td>기본증명서 등 각 1,000원 / 제적등본 별도</td>
<td>법원·행정기관</td>
</tr>
<tr>
<td><strong>법무사 보수</strong></td>
<td>부동산 가액·건수·복잡도에 따라 법무사 보수 기준 산정</td>
<td>법무사 사무소</td>
</tr>
</tbody>
</table>
</div>
<div class="cost-note">
    💡 <strong>오래된 미등기 부동산 주의:</strong> 수십 년간 방치된 미등기 농지·임야는 토지 시가표준액이 낮아 세금 부담이 크지 않은 경우도 있습니다. 그러나 상속인 확정과 동일인 증명 등 서류 준비 과정이 복잡하므로 법무사와 함께 처음부터 진행하는 것을 권장합니다.
  </div>
</section>
<!-- ===== 09. Q&A ===== -->
<section class="section">
<h2 class="inh-section-title">자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna">
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">조부 명의의 미등기 농지를 손자인 제가 상속받았습니다. 어떻게 신청하나요?</span>
</div>
<div class="qna-a">
<p>대장상 최초 소유자인 조부로부터 현재 손자인 신청인까지의 상속관계를 증명하는 서면 전체를 첨부하면, 중간 단계(조부→부친)를 거치지 않고 손자 명의로 직접 보존등기를 신청할 수 있습니다. 구체적으로는 조부의 사망과 그 상속인(부친)을 증명하는 서류, 부친의 사망과 그 상속인(손자)을 증명하는 서류가 모두 필요합니다. 중간 세대별로 기본증명서·가족관계증명서·제적등본을 모두 준비해야 하므로 법무사에게 의뢰하는 것이 좋습니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">대장에는 아버지 이름이지만 성명 한 글자가 달라요. 어떻게 해야 하나요?</span>
</div>
<div class="qna-a">
<p>대장상 피상속인의 성명과 기본증명서(가족관계등록부)의 성명이 다른 경우, 별도의 표시변경등기 없이도 두 서류의 명의인이 동일인임을 증명하는 서면을 함께 첨부하면 보존등기를 신청할 수 있습니다(선례 2-216). 동일인 증명 서면으로는 시·구·읍·면장의 확인서, 말소된 주민등록표초본(성명 변경 이력 확인 가능), 법무사 보증서+인감증명 등이 사용됩니다. 어떤 서면이 적합한지는 구체적 사안에 따라 담당 등기관이 판단하므로, 미리 해당 등기소에 확인하거나 법무사와 상담하세요.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">미등기 부동산에 대해 일부 상속인은 상속을 포기했습니다. 어떻게 신청하나요?</span>
</div>
<div class="qna-a">
<p>상속포기를 한 상속인이 있는 경우, 가정법원의 상속포기 심판서 정본을 첨부하여 포기하지 않은 나머지 상속인들 명의로 보존등기를 신청할 수 있습니다. 상속포기자는 신청인이 될 수 없고 신청서에도 표시하지 않습니다. 포기자를 제외한 상속인들의 지분이 법정상속분에 따라 재배분된 결과를 반영하여 지분을 표시하면 됩니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">미등기 부동산을 보존등기 없이 바로 팔 수는 없나요?</span>
</div>
<div class="qna-a">
<p>팔 수는 있지만(사적 계약은 가능), 매수인에게 소유권을 이전하는 등기는 보존등기 없이는 불가능합니다. 미등기 상태로는 매수인이 완전한 소유권을 취득하지 못하므로 실질적으로 거래가 이루어지지 않습니다. 매도 전에 반드시 보존등기를 먼저 마친 후 소유권이전등기로 이어가는 절차를 밟아야 합니다. 법무사에게 의뢰하면 보존등기와 이전등기를 연달아 처리하여 전체 절차를 한 번에 진행할 수 있습니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">제적부가 소실되어 피상속인의 상속인을 증명하는 서류를 발급받을 수 없습니다.</span>
</div>
<div class="qna-a">
<p>제적등·초본을 발급받을 수 없는 경우, 관할 구청장의 소실(멸실) 증명서 및 다른 상속인이 존재하지 않는다는 취지의 나머지 공동상속인 연서의 진술서를 제출하면, 나머지 서류(기본증명서, 가족관계증명서, 친양자입양관계증명서 등)만으로 보존등기를 신청할 수 있습니다(예규 제409호, 선례 5-287). 다만 제적등본상 다른 상속인이 있을 것으로 보이는 특별한 사정이 없어야 하며, 이에 대한 판단은 담당 등기관이 합니다. 복잡한 사안이므로 법무사와 함께 진행하는 것을 권장합니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q">
<span class="q-badge">Q</span>
<span class="q-text">보존등기를 마친 후 바로 매도하려면 어떻게 하나요?</span>
</div>
<div class="qna-a">
<p>보존등기 완료 후 매도는 일반적인 부동산 매매 절차와 동일합니다. 매매계약 체결 → 잔금 지급 → 소유권이전등기 신청 순서로 진행합니다. 이때 매도인(상속인)에게는 보존등기 시 발급된 등기필정보(등기필증)가 있어야 하며, 이를 이전등기 시 활용합니다. 법무사에게 의뢰하면 보존등기와 이전등기(매도)를 연속으로 처리하여 시간과 비용을 절감할 수 있습니다.</p>
<div class="qa-disclaimer">※ 위 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 따라 결과가 달라질 수 있습니다. 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
</div>
</section>
<!-- ===== 07. 관련 판례 ===== -->
<section class="section">
<h2 class="inh-section-title">관련 판례 및 선례
    <span class="sub">상속인 보존등기 관련 주요 등기선례</span>
</h2>
<div class="rulings">
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">등기선례 3-351</span>
<span class="ruling-court">대법원 등기예규</span>
</div>
<div class="ruling-title">공유 미등기토지 — 일부 공유자에게만 상속인이 있는 경우</div>
<div class="ruling-body">
        이미 사망한 갑·을·병 3인 공유의 미등기토지에서, 갑과 을의 상속인 전원이 상속인 없이 사망하고 병의 상속인만 생존하고 있다면, 갑·을의 공유지분은 법정절차에 따라 병의 상속인들에게 귀속된다. 병의 상속인들은 대장등본, 자신들의 상속 증명 서면, 갑·을의 상속인 전원이 상속인 없이 사망하였음을 증명하는 서면을 첨부하여 전체 토지에 대해 보존등기를 신청할 수 있다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 공유 미등기토지에서 일부 공유자 계통에 상속인이 전혀 없어 최종적으로 1인에게 귀속되는 경우, 그 1인이 전체 지분에 대한 보존등기를 신청할 수 있습니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">등기선례 2-216</span>
<span class="ruling-court">대법원 등기예규</span>
</div>
<div class="ruling-title">대장 표시 ≠ 가족관계등록부 — 동일인 증명 서면 첨부로 보존등기 가능</div>
<div class="ruling-body">
        토지대장상 피상속인 명의로 등록된 미등기 토지에 관하여 상속인이 보존등기를 신청할 때, 대장상 소유자인 피상속인의 표시가 가족관계등록에 관한 증명서 등의 피상속인 명의와 다른 경우에는, 양 공부상의 명의인이 동일인임을 증명함에 충분한 서면도 함께 첨부하여야 한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 대장상 성명이나 주소가 다르더라도 별도 경정등기 없이 동일인 증명 서면 하나만으로 해결됩니다. 말소된 주민등록초본, 시·구청장 확인서 등을 활용하세요.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">등기선례 5-267</span>
<span class="ruling-court">대법원 등기예규</span>
</div>
<div class="ruling-title">대장상 공동상속인 중 1인 명의로 이전등록된 경우 보존등기 절차</div>
<div class="ruling-body">
        대장상 최초 소유명의인의 공동상속인 중 1인 명의로 상속을 원인으로 하는 소유권이전등록이 되어 있는 미등기 건물에 대한 소유권보존등기는, 당해 건축물대장등본만을 첨부하여 대장상 1인 명의로 신청할 수 없다. 공동상속인들을 공유자로 하는 보존등기를 신청하거나, 협의분할서 및 공동상속인 전원의 인감증명을 함께 첨부하여 1인 단독 명의로 신청해야 한다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 대장의 이전등록은 등기부의 근거가 되지 않습니다. 반드시 상속관계를 증명하는 서류를 통해 공동상속인 전원의 관계를 명확히 해야 합니다.
      </div>
</div>
<div class="ruling-card">
<div class="ruling-meta">
<span class="ruling-no">등기선례 2-206</span>
<span class="ruling-court">대법원 등기예규</span>
</div>
<div class="ruling-title">번지 누락 + 제적부 소실 → 보증서만으로 보존등기 불가</div>
<div class="ruling-body">
        대장상의 소유자 표시 중 주소기재의 일부(번지)가 누락되어 있을 뿐 아니라 피상속인의 제적부가 소실되어 상속인을 확인할 수 없는 경우라면, 대장상의 소유자와 소실된 제적부상의 피상속인이 동일인임을 증명하는 보증서를 첨부하더라도 그것만으로는 상속인 명의의 소유권보존등기를 신청할 수 없다.
      </div>
<div class="ruling-point">
        ▶ 실무 포인트: 제적부 소실 + 주소 불명이 겹친 경우에는 보증서만으로는 부족합니다. 판결, 확인심판 등 추가적인 법적 수단이 필요할 수 있습니다. 법무사와 상담하세요.
      </div>
</div>
</div>
</section>
<!-- ===== 08. 주의사항 ===== -->
<section class="section">
<h2 class="inh-section-title">주의사항
    <span class="sub">보존등기 신청 전 반드시 확인하세요</span>
</h2>
<div class="warns">
<div class="warn-item">
<div class="warn-icon">🔍</div>
<div class="warn-content">
<h4>먼저 등기부가 있는지 없는지 확인하세요</h4>
<p>간혹 대장에는 미등기로 나오지만 실제 등기부가 존재하는 경우가 있습니다. 반드시 인터넷등기소(iros.go.kr) 또는 등기소 방문을 통해 등기부 존재 여부를 먼저 확인하세요. 등기부가 있으면 소유권보존등기가 아닌 소유권이전등기를 신청해야 합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">📜</div>
<div class="warn-content">
<h4>여러 세대 상속이라면 각 세대별 서류를 모두 준비하세요</h4>
<p>대장상 최초 소유자로부터 현재 상속인까지 여러 세대에 걸쳐 상속된 경우, 각 세대별 상속관계를 빠짐없이 증명해야 합니다. 예를 들어 증조부→조부→부→본인이라면 각 단계마다 사망 사실과 상속인을 증명하는 서류(기본증명서, 가족관계증명서, 제적등본 등)가 필요합니다. 서류 준비가 복잡해지므로 법무사에게 의뢰하는 것이 효율적입니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">📋</div>
<div class="warn-content">
<h4>주민등록표는 상속 증명 서면이 될 수 없습니다</h4>
<p>주민등록표에 사망으로 기재되어 있더라도, 기본증명서(가족관계등록부) 또는 제적등본에 사망으로 기재되지 않으면 주민등록표를 상속 증명 서면으로 사용할 수 없습니다(선례 5-213). 이 경우 먼저 가족관계등록부에 사망처리를 하여 기본증명서와 주민등록표를 일치시킨 후 보존등기를 신청해야 합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">🏗️</div>
<div class="warn-content">
<h4>건물 도면 준비를 잊지 마세요 (구분건물의 경우)</h4>
<p>구분건물(아파트·연립 등)의 소유권보존등기를 신청하는 경우, 건축물대장 정보를 제출하면 도면(소재도·층별 평면도)은 별도 첨부가 불필요합니다(규칙 제121조 제3항·제4항). 그러나 건축물대장 정보를 제출하지 않는 경우에는 도면을 반드시 첨부해야 합니다. 실무상 건축물대장을 항상 제출하므로 대부분의 경우 도면은 불필요합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-content">
<h4>종중 족보는 상속 증명 서면이 될 수 없습니다</h4>
<p>종중의 족보는 상속인임을 증명하는 별도 서면으로 인정되지 않습니다(선례 6-209). 종중 토지의 경우에도 반드시 공적 서류(제적등본, 기본증명서, 가족관계증명서 등)로 상속관계를 증명해야 합니다. 오래된 종중 토지는 상속관계 증명이 특히 어렵기 때문에, 전문가와 함께 대안을 검토하세요.</p>
</div>
</div>
</div>
</section>
<!-- ===== 10. 다음으로 ===== -->
<section class="section">
<h2 class="inh-section-title">다음으로 확인할 내용</h2>
<div class="next-cards">
<a class="next-card" href="상속_13_이전등기.html">
<div class="nc-num">◀ PAGE 13</div>
<h4>상속 소유권이전등기</h4>
<p>이미 등기부가 있는 부동산의 상속등기 절차를 확인하세요.</p>
</a>
<a class="next-card" href="상속_15_외국인등기.html">
<div class="nc-num">PAGE 15 ▶</div>
<h4>외국인·재외국민 상속등기</h4>
<p>피상속인 또는 상속인이 외국인·재외국민인 경우의 특수 절차를 확인하세요.</p>
</a>
<a class="next-card" href="상속_12_등기개관.html">
<div class="nc-num">◀ PAGE 12</div>
<h4>상속등기 개관</h4>
<p>이전등기와 보존등기 등 상속등기 전체 종류를 확인하세요.</p>
</a>
<a class="next-card" href="상속_11_분할협의.html">
<div class="nc-num">◀ PAGE 11</div>
<h4>협의분할서 작성</h4>
<p>보존등기를 협의분할 방식으로 신청하려면 협의서 작성 방법을 먼저 확인하세요.</p>
</a>
</div>
</section>
<!-- ===== 11. CTA ===== -->
<section class="section" id="cta">
<div class="cta-point">
<span class="cp-icon">📜</span>
<span class="cp-text">상속관계 증명</span>
</div>
<div class="cta-point">
<span class="cp-icon">🏛️</span>
<span class="cp-text">등기 신청 대리</span>
</div>
<div class="cta-point">
<span class="cp-icon">💬</span>
<span class="cp-text">무료 초기 상담</span>
</div>
</div>
<a class="cta-btn" href="tel:0000000000">☎ 무료 상담 신청하기</a>
<p class="cta-sub">전화·방문·이메일 상담 가능 · 평일 9:00 – 18:00</p>
</div>
</section>
<!-- ===== 면책 ===== -->
<section class="section">
<div class="disclaimer">
<strong>법적 고지 (면책 조항)</strong><br/>
    이 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 법률 자문이 아닙니다.
    개별 사안의 구체적인 사실관계 및 법령 해석에 따라 결론이 달라질 수 있습니다.
    실제 법률 문제에 대해서는 반드시 자격 있는 법무사 또는 변호사와 직접 상담하시기 바랍니다.
    본 정보를 참고하여 발생한 결과에 대해 작성자는 책임을 지지 않습니다.
    법령은 개정될 수 있으므로 최신 법령을 확인하시기 바랍니다.
  </div>
</section>
</div><!-- /page-wrap -->
<!-- ===== FOOTER ===== -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-15', title: '상속 경정등기',
        meta: '이미 마쳐진 상속등기를 협의분할·재판 등으로 바로잡는 절차',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ===== HEADER ===== -->

<!-- ===== 이런분께 ===== -->

<section>
<span class="section-label">이런 분께</span>
<h2>이런 경우에 경정등기가 필요합니다</h2>
<div class="target-grid">
<div class="target-card">
<div class="icon">📋</div>
<strong>법정상속분 등기 후 협의분할</strong>
      채권자 대위 등으로 법정상속분대로 등기가 먼저 됐는데, 이후 상속인끼리 협의로 분할하고 싶은 분
    </div>
<div class="target-card">
<div class="icon">🔄</div>
<strong>협의분할 후 재협의</strong>
      협의분할에 의한 상속등기를 마쳤으나 공동상속인 전원이 합의하여 다시 분할 내용을 변경하고 싶은 분
    </div>
<div class="target-card">
<div class="icon">❌</div>
<strong>상속포기·결격 누락 등기</strong>
      상속포기 사실을 모르고 등기가 완료됐거나, 상속결격·친생자관계부존재 판결이 이후 확정된 분
    </div>
<div class="target-card">
<div class="icon">⚖️</div>
<strong>재판·조정으로 분할 확정</strong>
      협의 대신 가정법원의 조정·심판·판결로 상속재산 분할이 확정되어 기존 등기를 바로잡아야 하는 분
    </div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 핵심요약 ===== -->
<section>
<span class="section-label">핵심요약</span>
<h2>경정등기 핵심 정보 한눈에</h2>
<div class="summary-box">
<h3>📌 반드시 기억할 3가지</h3>
<div class="sum-row"><span class="sum-key">등기 성격</span><span class="sum-val">소유권경정등기 (부기등기 방식으로 기록) — 이전등기가 아닙니다</span></div>
<div class="sum-row"><span class="sum-key">등기원인</span><span class="sum-val">"협의분할로 인한 <em>(재산)상속</em>" 또는 "○○법원 확정판결(화해·인낙)에 의한 <em>(재산)상속</em>"</span></div>
<div class="sum-row"><span class="sum-key">등기원인일자</span><span class="sum-val"><em>피상속인 사망일이 아닌 협의분할일</em> (재판에 의한 경우 확정일)</span></div>
<div class="sum-row"><span class="sum-key">신청인</span><span class="sum-val">권리 <em>취득</em>자 = 등기권리자 / 권리 <em>상실</em>자 = 등기의무자 (공동신청)</span></div>
<div class="sum-row"><span class="sum-key">허용 근거</span><span class="sum-val">예규 제1421호 — 상속등기에서 폭넓게 경정 허용</span></div>
</div>
<div class="highlight-box">
<strong>⚠️ 경정등기 vs 이전등기 혼동 주의</strong><br/>
    협의분할 후 바로잡는 등기는 <strong>소유권이전등기가 아니라 소유권경정등기</strong>입니다.
    경정등기는 기존 상속등기를 소급하여 수정하는 것이므로, 취득세 등 과세 방식도 다릅니다.
  </div>
</section>
<div class="divider"></div>
<!-- ===== 절차흐름도 ===== -->
<section>
<span class="section-label">절차흐름도</span>
<h2>소유권경정등기 절차 흐름</h2>
<div class="flow-wrap">
<div class="flow-steps">
<div class="flow-step">
<div class="snum">1</div>
<div class="sico">🔍</div>
<div class="stit">경정 사유 확인</div>
<div class="sdesc">협의분할·재판·<br/>상속인 변동 여부</div>
</div>
<div class="flow-step">
<div class="snum">2</div>
<div class="sico">📝</div>
<div class="stit">협의 또는 재판</div>
<div class="sdesc">상속인 전원 협의서<br/>또는 확정판결</div>
</div>
<div class="flow-step">
<div class="snum">3</div>
<div class="sico">🏦</div>
<div class="stit">이해관계인 확인</div>
<div class="sdesc">가압류·근저당 등<br/>승낙서 확보</div>
</div>
<div class="flow-step">
<div class="snum">4</div>
<div class="sico">💰</div>
<div class="stit">취득세 신고</div>
<div class="sdesc">추가 취득분에 대해<br/>취득세 납부</div>
</div>
<div class="flow-step">
<div class="snum">5</div>
<div class="sico">📦</div>
<div class="stit">서류 준비</div>
<div class="sdesc">협의분할서·인감<br/>·상속서류 일체</div>
</div>
<div class="flow-step">
<div class="snum">6</div>
<div class="sico">🏛️</div>
<div class="stit">등기 신청</div>
<div class="sdesc">관할 등기소<br/>공동신청</div>
</div>
<div class="flow-step">
<div class="snum">7</div>
<div class="sico">✅</div>
<div class="stit">등기 완료</div>
<div class="sdesc">부기등기·직권<br/>말소·경정 처리</div>
</div>
</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 단계별 상세 ===== -->
<section>
<span class="section-label">단계별 상세</span>
<h2>경정등기 절차 상세 안내</h2>
<!-- 블록 1: 경정등기 허용 사례 -->
<div class="step-block">
<h3><span class="step-num-badge">①</span>경정등기가 허용되는 구체적 사례</h3>
<p style="font-size:14px;color:#555;margin-bottom:4px;">상속등기에서의 경정등기는 예규 제1421호에 따라 다음 경우에 폭넓게 허용됩니다.</p>
<div class="case-grid">
<div class="case-item">
<div class="ci-tag">선례 6-411</div>
<div class="ci-head">친생자관계부존재 확인</div>
        상속등기 후 공동상속인 중 1인에 대한 친생자관계부존재확인 판결이 확정되어 가족관계등록부가 정리된 경우
      </div>
<div class="case-item">
<div class="ci-tag">선례 6-213</div>
<div class="ci-head">실종선고심판 확정</div>
        상속등기 후 공동상속인 중 1인에게 실종선고심판이 확정된 경우
      </div>
<div class="case-item">
<div class="ci-tag">선례 3-460</div>
<div class="ci-head">상속포기 누락 등기</div>
        공동상속인 중 일부가 상속포기를 하였으나 이를 간과한 채 상속포기 전의 공동상속인 전원 명의로 잘못 등기된 경우
      </div>
<div class="case-item">
<div class="ci-tag">실무관행</div>
<div class="ci-head">상속인 누락 등기</div>
        공동상속인 중 일부가 누락된 채 상속등기가 경료된 경우 — 경정등기로 바로잡을 수 있음
      </div>
</div>
</div>
<!-- 블록 2: 신청인 + 등기원인 -->
<div class="step-block">
<h3><span class="step-num-badge">②</span>신청인 구성과 등기원인·원인일자</h3>
<table class="applicant-table">
<thead>
<tr><th>구분</th><th>해당자</th><th>역할</th></tr>
</thead>
<tbody>
<tr>
<td class="role">등기권리자</td>
<td>협의분할로 소유권을 <strong>취득</strong>하는 상속인</td>
<td>신청인으로 서명·날인</td>
</tr>
<tr>
<td class="role">등기의무자</td>
<td>협의분할로 소유권을 <strong>상실</strong>하는 상속인</td>
<td>인감증명 첨부 필수</td>
</tr>
</tbody>
</table>
<div class="cause-box">
<div class="cb-row"><span class="cb-key">등기원인</span><span class="cb-val">"협의분할로 인한 <em>(재산)상속</em>"<br/>또는 "○○지방법원 확정판결(화해·인낙)에 의한 <em>(재산)상속</em>"</span></div>
<div class="cb-row"><span class="cb-key">등기원인일자</span><span class="cb-val"><span class="red">협의분할일</span> (피상속인 사망일이 아님!)<br/>재판의 경우: 확정일 또는 화해·인낙 성립일</span></div>
<div class="cb-row"><span class="cb-key">등기 방식</span><span class="cb-val">기존 등기의 원인은 변경하지 않고, <strong>권리자 사항만 부기등기 방식으로 경정</strong></span></div>
</div>
</div>
<!-- 블록 3: 이해관계인 처리 -->
<div class="step-block">
<h3><span class="step-num-badge">③</span>경정등기 전 이해관계인이 있는 경우 처리</h3>
<div class="interest-grid">
<div class="interest-item">
<div class="ii-tag">지분 이전된 경우</div>
<div class="ii-title">상속등기 후 공동상속인 1인이 지분을 타인에게 이전한 경우</div>
        협의분할 소급효는 있으나 제3자에게 대항 불가. <strong>먼저 그 소유권이전등기를 정당한 말소사유로 말소한 후</strong> 경정등기를 신청해야 합니다 (선례 5-542).
      </div>
<div class="interest-item">
<div class="ii-tag">가압류·근저당이 있는 경우</div>
<div class="ii-title">상속인 지분에 가압류 등 이해관계 등기가 있는 경우</div>
        지분을 <strong>상실하는 상속인의 등기</strong>에 가압류 등이 있으면 이해관계 있는 제3자(가압류권자)의 <strong>승낙서 또는 이에 대항할 수 있는 재판서 등본</strong>을 첨부해야 합니다. 승낙서 첨부 시 등기관이 해당 가압류등기를 <strong>직권으로 말소</strong>합니다 (선례 8-198).
      </div>
<div class="interest-item">
<div class="ii-tag">공동상속인 1인이 사망한 경우</div>
<div class="ii-title">법정상속분 등기 후 공동상속인 중 1인이 사망한 경우</div>
<strong>상속등기 완료 후</strong> 공동상속인 1인이 사망하면 협의분할에 의한 경정등기는 <strong>불가</strong>합니다 (선례 6-202). 이 경우 사망자의 상속인과 나머지 공동상속인 사이에 <strong>지분이전등기</strong> 방식으로 처리해야 합니다.
      </div>
</div>
</div>
<!-- 블록 4: 등기기록례 -->
<div class="step-block">
<h3><span class="step-num-badge">④</span>상속등기 후 협의분할에 의한 경정등기 기록례</h3>
<p style="font-size:13px;color:#666;">기존 상속등기(순위 1번)에 부기등기(2번) 방식으로 경정됩니다.</p>
<div class="record-box">
<div class="rb-title">【갑 구】소유권에 관한 사항</div>
<table>
<thead>
<tr><th>순위번호</th><th>등기목적</th><th>접수</th><th>등기원인</th><th>권리자 및 기타사항</th></tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>소유권이전</td>
<td>2009년 3월 5일<br/>제3500호</td>
<td>2009년 2월 23일<br/>상속</td>
<td>공유자<br/>지분 2분의 1 이일남<br/>지분 2분의 1 이이남</td>
</tr>
<tr class="highlight-row">
<td>1-1<br/>(부기)</td>
<td>1번소유권<br/>경정</td>
<td>2010년 7월 4일<br/>제6500호</td>
<td>2010년 6월 29일<br/><strong>협의분할로 인한 상속</strong></td>
<td>공유자<br/>지분 2분의 1 이일남<br/>지분 2분의 1 이이남</td>
</tr>
</tbody>
</table>
<div class="note">※ 경정등기는 기존 등기의 원인을 수정하지 않고, 권리자 사항만 부기등기로 기재합니다.</div>
</div>
</div>
<!-- 블록 5: 재협의에 의한 경정등기 -->
<div class="step-block">
<h3><span class="step-num-badge">⑤</span>협의분할 후 재협의에 의한 경정등기</h3>
<p style="font-size:14px;">협의분할에 의한 상속등기를 마친 뒤, 공동상속인 전원이 다시 합의하여 분할 내용을 변경하는 경정등기도 허용됩니다 (예규 제1421호, 선례 8-199).</p>
<div class="renego-box">
<h4>🔄 재협의 경정등기 요건</h4>
<ul style="list-style:none;font-size:13px;line-height:1.9;">
<li>✔ 공동상속인 <strong>전원이 참여</strong>하여 기존 분할계약을 해제하고 새로 협의</li>
<li>✔ 등기기록상 이해관계인의 <strong>동의(승낙서)</strong>가 있을 것</li>
<li>✔ 재협의도 공동상속인 범위 내에서만 가능</li>
<li class="warn">✘ 공동상속인 중 1인이 사망한 후에는 재협의에 의한 경정도 불가 (선례 6-202 유추)</li>
</ul>
</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 준비서류 ===== -->
<section>
<span class="section-label">준비서류</span>
<h2>경정등기 신청에 필요한 서류</h2>
<div class="doc-grid">
<div class="doc-card">
<div class="dc-icon">📄</div>
<div class="dc-title">상속재산분할협의서</div>
<span class="required">필수</span>
      상속인 전원이 참여하여 작성한 협의서. 여러 장이면 공동상속인 전원의 간인 필요 (선례 3-43)
      <div class="dc-note">재판의 경우: 판결·화해·인낙 정본</div>
</div>
<div class="doc-card">
<div class="dc-icon">🔏</div>
<div class="dc-title">인감증명서</div>
<span class="required">필수</span>
      협의분할서에 날인한 상속인 전원의 인감증명 (규칙 제60조 제1항 제6호)
      <div class="dc-note">유효기간 3개월 이내 발급분 (규칙 제62조)</div>
</div>
<div class="doc-card">
<div class="dc-icon">👨‍👩‍👧‍👦</div>
<div class="dc-title">상속증명서류</div>
<span class="required">필수</span>
      가족관계증명서, 기본증명서, 제적등·초본 등 (발급일로부터 3개월 이내)
      <div class="dc-note">피상속인과 모든 상속인의 관계 증명</div>
</div>
<div class="doc-card">
<div class="dc-icon">📋</div>
<div class="dc-title">이해관계인 승낙서</div>
      해당 시 필수
      지분을 상실하는 상속인의 지분에 가압류·근저당 등이 있는 경우 이해관계인 승낙서 또는 대항 재판서 등본
      <div class="dc-note">이해관계인 인감증명 함께 필요</div>
</div>
<div class="doc-card">
<div class="dc-icon">🪪</div>
<div class="dc-title">신청인 신분·주소 증명</div>
<span class="required">필수</span>
      등기명의인이 될 상속인의 주민등록등·초본
      <div class="dc-note">등기명의인이 아닌 상속인은 불필요</div>
</div>
<div class="doc-card">
<div class="dc-icon">💳</div>
<div class="dc-title">취득세 납부영수증</div>
<span class="required">필수</span>
      협의분할로 법정상속분을 초과 취득하는 부분에 대한 취득세 신고·납부 영수증
      <div class="dc-note">초과 취득분에 대해서만 과세</div>
</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 비용안내 ===== -->
<section>
<span class="section-label">비용안내</span>
<h2>경정등기 관련 비용</h2>
<table class="cost-table">
<thead>
<tr><th>항목</th><th>기준 및 세율</th><th>비고</th></tr>
</thead>
<tbody>
<tr>
<td><strong>취득세</strong></td>
<td>초과 취득분 과세표준 × 3.5%<br/>(상속 특례세율 0.8% 아님)</td>
<td>법정상속분 초과분에 대해서만</td>
</tr>
<tr>
<td><strong>지방교육세</strong></td>
<td>취득세액 × 20%</td>
<td>취득세 신고 시 함께 납부</td>
</tr>
<tr>
<td><strong>등록면허세</strong></td>
<td>부동산 1건당 6,000원<br/>(정액)</td>
<td>경정등기는 정액 부과</td>
</tr>
<tr>
<td><strong>지방교육세</strong><br/><span class="note">(등록면허세분)</span></td>
<td>등록면허세 × 20% = 1,200원</td>
<td>—</td>
</tr>
<tr>
<td><strong>등기신청수수료</strong></td>
<td>부동산 1건당 15,000원</td>
<td>전자신청 시 13,000원</td>
</tr>
<tr>
<td><strong>인감증명서 발급</strong></td>
<td>1통 600원</td>
<td>상속인 수만큼 필요</td>
</tr>
<tr>
<td><strong>법무사 보수</strong></td>
<td>대법원 법무사 보수 기준에 따름</td>
<td>부동산 가액 및 난이도에 따라 산정</td>
</tr>
</tbody>
</table>
<div class="cost-note">
    ⚠️ <strong>취득세 주의:</strong> 경정등기로 법정상속분을 <strong>초과하여 취득</strong>하는 부분은 상속 특례세율(0.8%)이 아닌 일반 취득세율(3.5%)이 적용될 수 있습니다. 반드시 관할 시·군·구청 세무과에 확인하세요.
  </div>
</section>
<div class="divider"></div>
<!-- ===== Q&A ===== -->
<section>
<span class="section-label">자주 묻는 질문</span>
<h2>Q &amp; A</h2>
<div class="qna-item">
<div class="qna-q">Q. 경정등기와 소유권이전등기는 어떻게 다른가요?</div>
<div class="qna-a">경정등기는 기존 상속등기의 내용(권리자 지분 등)이 처음부터 잘못됐다는 전제 하에 이를 소급하여 수정하는 등기입니다. 반면 소유권이전등기는 새로운 원인(매매·증여 등)으로 소유권이 이전되는 것입니다. 협의분할은 상속 당시로 소급하는 효력이 있으므로, 이미 마쳐진 상속등기를 분할 내용대로 바로잡는 것은 경정등기를 사용합니다. 부기등기 방식으로 기록되어 기존 등기 순위를 유지한다는 점도 다릅니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 가압류가 설정된 지분을 경정등기로 없앨 수 있나요?</div>
<div class="qna-a">직접 없애는 것은 아니지만, 경정등기 신청 시 가압류권자의 승낙서를 첨부하면 등기관이 직권으로 가압류등기를 말소합니다 (선례 8-198). 가압류권자가 승낙서 제공을 거부한다면, 가압류권자를 상대로 소송을 제기하여 '경정등기에 대항할 수 없다'는 확정판결을 받아 그 등본을 첨부하는 방법을 사용할 수 있습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 상속등기를 마치기 전에 한 공동상속인이 사망하면 어떻게 되나요?</div>
<div class="qna-a">상속등기를 마치기 <strong>전</strong>에 공동상속인 중 1인이 사망한 경우라면, 그 상속인의 상속인(손자녀 등)과 나머지 공동상속인이 피상속인의 재산에 대한 협의분할을 하여 상속등기를 신청할 수 있습니다 (선례 7-178). 그러나 상속등기가 <strong>완료된 후</strong>에 1인이 사망한 경우라면, 경정등기는 불가하고 사망자의 지분에 대해 별도의 상속절차를 진행해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 협의분할로 단독 취득했는데 나중에 다시 변경할 수 있나요?</div>
<div class="qna-a">공동상속인 전원이 합의하고, 등기기록상 이해관계인의 동의가 있다면 재협의에 의한 경정등기도 가능합니다 (선례 8-199). 다만 공동상속인 중 1인이 이미 사망하였다면 재협의에 의한 경정등기는 더 이상 불가합니다. 이해관계인이 이미 생긴 경우에도 그 동의를 받아야 하므로, 사실상 재협의가 어려울 수 있습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 단독으로 경정등기 신청을 할 수 있나요?</div>
<div class="qna-a">원칙적으로 경정등기는 <strong>권리를 취득하는 자(등기권리자)와 권리를 잃는 자(등기의무자)의 공동신청</strong>이 원칙입니다 (예규 제613호). 다만 확정판결(승소)을 받은 경우에는 판결 정본으로 승소자 단독 신청이 가능합니다. 상속인 간 협의가 이루어지지 않는다면 먼저 가정법원에 상속재산분할 심판을 청구하는 방법을 고려해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 경정등기를 하면 기존 상속등기의 순위는 어떻게 되나요?</div>
<div class="qna-a">소유권경정등기는 부기등기 방식으로 기록됩니다. 예를 들어 기존 상속등기가 순위 1번이면, 경정등기는 "1-1번"으로 기재됩니다. 이렇게 되면 경정된 내용은 원래 상속등기(순위 1번)의 순위를 그대로 유지하게 됩니다. 즉, 경정등기의 효력은 소급하여 최초 상속등기 시점에 미칩니다.</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 판례·선례 ===== -->
<section>
<span class="section-label">관련 판례·선례</span>
<h2>실무에서 중요한 판례와 선례</h2>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">선례 5-542</span>
<span class="rc-title">지분 이전 후 경정등기 방법</span>
</div>
<div class="rc-body">
      상속등기 후 공동상속인 중 1인이 그 지분을 타인에게 이전한 경우, 협의분할로 인한 소유권경정등기를 하기 위해서는 먼저 그 소유권이전등기를 정당한 말소사유에 의하여 말소한 후 경정등기를 신청해야 한다.
    </div>
<div class="rc-result">💡 경정등기의 소급효는 제3자에게 대항하지 못하므로, 제3자 등기를 먼저 정리해야 함</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">선례 8-198</span>
<span class="rc-title">가압류 있는 지분의 경정등기</span>
</div>
<div class="rc-body">
      법정상속분대로 상속등기가 된 뒤 그 상속인 중 1인의 지분에 가압류등기가 된 경우, 협의분할에 따른 경정등기로 그 지분이 상실·감소될 때에는 가압류권자의 승낙서 또는 이에 대항할 수 있는 재판서 등본을 첨부하여야 한다. 승낙서 등이 첨부되면 등기관은 해당 가압류등기를 직권으로 말소 또는 경정한다.
    </div>
<div class="rc-result">💡 가압류권자의 협조 없이는 경정등기 불가 — 실무상 협상이 필요</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">선례 8-199</span>
<span class="rc-title">재협의에 의한 경정등기 허용</span>
</div>
<div class="rc-body">
      협의분할에 의한 상속등기 후 상속인 전원의 협의로 상속인 중 갑·을 공유를 갑 단독소유로 하는 소유권경정등기는 허용된다. 이를 근거로 갑에서 을로의 경정, 또는 공동상속인 구성을 변경하는 재협의에 의한 경정등기도 허용된다.
    </div>
<div class="rc-result">💡 상속재산분할협의 해제 후 재협의가 가능하기 때문에 경정 허용 — 단, 등기기록상 이해관계인 동의 필요</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">선례 6-202</span>
<span class="rc-title">상속인 1인 사망 후 경정 불가</span>
</div>
<div class="rc-body">
      피상속인 사망으로 그 소유 부동산에 관하여 법정상속지분에 의한 등기가 마쳐진 후 공동상속인 중 1인이 사망하였다면, 그 상속등기에 대하여는 상속재산분할협의에 의한 소유권경정등기는 할 수 없다.
    </div>
<div class="rc-result">💡 상속등기 후 상속인 사망 시, 사망자의 상속인과 나머지 상속인 사이에 지분이전등기로 처리</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 주의사항 ===== -->
<section>
<span class="section-label">주의사항</span>
<h2>경정등기 시 반드시 확인할 사항</h2>
<ul class="warn-list">
<li>
<strong>⚠️ 등기원인일자는 협의분할일입니다</strong>
      소유권경정등기의 등기원인일자는 반드시 <strong>협의분할일</strong>로 기재해야 합니다. 피상속인의 사망일로 잘못 기재하면 등기관이 각하합니다. 재판의 경우에는 판결 확정일(또는 화해·인낙 성립일)이 원인일자입니다.
    </li>
<li>
<strong>⚠️ 경정등기는 이전등기가 아닙니다</strong>
      협의분할로 단독 취득하더라도 새 소유권이전등기가 아니라 기존 등기의 권리자 사항을 부기등기 방식으로 수정하는 것입니다. 등기신청 시 "소유권경정등기"로 신청하고 이전등기와 혼동하지 않아야 합니다.
    </li>
<li>
<strong>⚠️ 이해관계인 승낙서는 필수 확인</strong>
      지분을 상실하는 상속인의 지분에 가압류·근저당·전세권 등이 설정되어 있으면, 이해관계인의 승낙 없이는 경정등기가 수리되지 않습니다. 사전에 등기부 전부사항증명서를 확인하고, 이해관계인과 협의해야 합니다.
    </li>
<li>
<strong>⚠️ 상속인 1인 사망 후 경정등기 불가</strong>
      법정상속분대로 등기가 완료된 후 공동상속인 중 1인이 사망하면 협의분할에 의한 경정등기는 할 수 없습니다 (선례 6-202). 이 경우 사망한 상속인의 상속인들과 나머지 공동상속인 사이에 지분이전등기를 검토해야 합니다.
    </li>
<li>
<strong>⚠️ 취득세 과세 방식 확인</strong>
      경정등기로 법정상속분을 초과하여 취득하는 부분에 대해서는 상속 특례세율(0.8%)이 아닌 다른 세율이 적용될 수 있습니다. 반드시 관할 세무부서에 사전 문의하여 과세 방식을 확인한 후 취득세를 납부하세요.
    </li>
</ul>
</section>
<div class="divider"></div>
<!-- ===== 다음으로 ===== -->
<section>
<span class="section-label">다음으로</span>
<h2>이어서 알아볼 내용</h2>
<div class="next-card">
<div class="nc-icon">🌏</div>
<div class="nc-text">
<strong>PAGE 16 · 외국인·재외국민 상속등기</strong>
<span>외국국적 상속인 또는 재외국민이 포함된 경우의 상속등기 절차와 특수한 서류 준비 방법을 안내합니다.</span>
</div>
<div class="nc-arrow">›</div>
</div>
</section>
<!-- ===== CTA ===== -->

<div class="cta-section">
<h2>경정등기, 혼자 하기 어려우시죠?</h2>
<p>이해관계인 확인, 이전된 지분 정리, 취득세 계산까지 — 경정등기는 단순해 보여도 선결 문제가 복잡합니다.<br/>법무사가 상황을 정확히 파악하고 최선의 방법을 안내해 드립니다.</p>
<a class="cta-btn" href="tel:0000000000">📞 전화 상담 예약</a>
<a class="cta-btn outline" href="#">💬 온라인 문의</a>
</div>
</div>
</div><!-- /container -->
<!-- ===== 면책 ===== -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-16', title: '상속인에 의한 등기',
        meta: '계약 후 등기 전 피상속인이 사망한 경우 — 상속등기 없이 바로 처리하는 특례 (부동산등기법 제27조)',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ===== HEADER ===== -->


<!-- ===== 이런분께 ===== -->
<section>
<span class="section-label">이런 분께</span>
<h2>이런 상황이라면 이 페이지를 확인하세요</h2>
<div class="target-grid">
<div class="target-card">
<div class="icon">🏠</div>
<strong>매도인이 사망한 경우</strong>
      부동산을 매수하였는데 소유권이전등기 완료 전에 매도인이 사망한 분 — 매도인의 상속인과 공동으로 등기 가능
    </div>
<div class="target-card">
<div class="icon">👤</div>
<strong>매수인이 사망한 경우</strong>
      피상속인이 생전에 부동산을 매수하였으나 소유권이전등기를 마치지 못하고 사망한 경우 — 상속인이 매도인과 함께 직접 등기
    </div>
<div class="target-card">
<div class="icon">⏳</div>
<strong>취득시효 완성 후 사망</strong>
      피상속인이 시효취득을 완성한 뒤 등기 전에 사망한 경우 — 상속인 명의로 바로 이전등기 가능
    </div>
<div class="target-card">
<div class="icon">📜</div>
<strong>증여·교환 등 기타 원인</strong>
      매매 외에도 증여, 교환, 제한물권 설정 등 피상속인 생전에 원인행위가 발생하고 등기 전에 사망한 모든 경우
    </div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 핵심요약 ===== -->
<section>
<span class="section-label">핵심요약</span>
<h2>상속인에 의한 등기 — 핵심 포인트</h2>
<div class="summary-box">
<h3>📌 3가지 핵심</h3>
<div class="sum-row"><span class="sum-key">근거 조항</span><span class="sum-val">부동산등기법 제27조 — 포괄승계인에 의한 등기신청 특례</span></div>
<div class="sum-row"><span class="sum-key">가장 큰 장점</span><span class="sum-val"><em>상속등기 생략 가능</em> — 피상속인 명의에서 최종 취득자 명의로 직접 이전</span></div>
<div class="sum-row"><span class="sum-key">등기원인</span><span class="sum-val">"상속"이 아닌 <em>피상속인과 상대방 간의 원인</em> (매매, 증여, 취득시효 등)</span></div>
<div class="sum-row"><span class="sum-key">신청방식</span><span class="sum-val"><em>공동신청 원칙</em> — 상속인 + 거래 상대방 (또는 그 상속인)</span></div>
<div class="sum-row"><span class="sum-key">요건</span><span class="sum-val">①피상속인 <em>생전</em>에 등기원인 발생 + ②등기원인 발생 <em>후</em> 상속 개시</span></div>
</div>
<div class="law-cite">
<strong>📖 부동산등기법 제27조 (포괄승계인에 의한 등기신청)</strong>
    등기원인이 발생한 후에 등기권리자나 등기의무자에 관하여 상속이나 그 밖의 포괄승계가 있는 경우 상속인이나 그 밖의 포괄승계인이 그 등기를 신청할 수 있다.
  </div>
</section>
<div class="divider"></div>
<!-- ===== 상속등기와 비교 ===== -->
<section>
<span class="section-label">상속등기와 구별</span>
<h2>상속등기 vs 상속인에 의한 등기</h2>
<p style="font-size:14px;color:#555;">두 제도는 이름이 비슷하지만 성격·절차·첨부서류가 전혀 다릅니다. 혼동에 주의하세요.</p>
<div style="overflow-x:auto;">
<table class="compare-table">
<thead>
<tr>
<th>구분</th>
<th>일반 상속등기</th>
<th>상속인에 의한 등기<br/>(법 제27조)</th>
</tr>
</thead>
<tbody>
<tr>
<td>등기원인</td>
<td>"상속"</td>
<td class="diff">매매·증여·취득시효 등<br/>피상속인 생전의 원인행위</td>
</tr>
<tr>
<td>신청방식</td>
<td>상속인 단독신청</td>
<td class="diff">상속인 + 상대방 공동신청</td>
</tr>
<tr>
<td>등기원인증명</td>
<td>상속증명서면<br/>(제적부, 가족관계증명서 등)</td>
<td class="diff">피상속인 생전 계약서 등<br/>+ 상속증명서면 추가</td>
</tr>
<tr>
<td>등기필정보</td>
<td>제공 불필요</td>
<td class="diff">피상속인 취득 시 등기필정보<br/>제공 필요</td>
</tr>
<tr>
<td>인감증명</td>
<td>협의분할 시 상속인 전원<br/>(단독상속 시 불필요)</td>
<td class="diff">등기의무자가 된 상속인<br/>전원의 인감증명</td>
</tr>
<tr>
<td>상속등기 선행</td>
<td>—</td>
<td class="diff">불필요 (생략 가능)<br/>피상속인→취득자 직접 이전</td>
</tr>
</tbody>
</table>
</div>
</section>
<div class="divider"></div>
<!-- ===== 절차흐름도 ===== -->
<section>
<span class="section-label">절차흐름도</span>
<h2>상속인에 의한 등기 절차 흐름</h2>
<div class="flow-wrap">
<div class="flow-steps">
<div class="flow-step">
<div class="snum">1</div>
<div class="sico">🔍</div>
<div class="stit">요건 확인</div>
<div class="sdesc">피상속인 생전<br/>등기원인 발생 여부</div>
</div>
<div class="flow-step">
<div class="snum">2</div>
<div class="sico">📄</div>
<div class="stit">원인서류 확인</div>
<div class="sdesc">피상속인 명의<br/>매매계약서 등</div>
</div>
<div class="flow-step">
<div class="snum">3</div>
<div class="sico">👨‍👩‍👧</div>
<div class="stit">상속인 확정</div>
<div class="sdesc">협의분할 여부<br/>등기의무자/권리자</div>
</div>
<div class="flow-step">
<div class="snum">4</div>
<div class="sico">💰</div>
<div class="stit">취득세 신고</div>
<div class="sdesc">최종 취득자<br/>취득세 납부</div>
</div>
<div class="flow-step">
<div class="snum">5</div>
<div class="sico">📦</div>
<div class="stit">서류 준비</div>
<div class="sdesc">원인서류+상속<br/>증명+인감 등</div>
</div>
<div class="flow-step">
<div class="snum">6</div>
<div class="sico">🏛️</div>
<div class="stit">공동 신청</div>
<div class="sdesc">상속인 + 상대방<br/>관할 등기소</div>
</div>
<div class="flow-step">
<div class="snum">7</div>
<div class="sico">✅</div>
<div class="stit">등기 완료</div>
<div class="sdesc">피상속인→취득자<br/>직접 이전 기록</div>
</div>
</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 단계별 상세 ===== -->
<section>
<span class="section-label">단계별 상세</span>
<h2>신청 요건·신청인·첨부정보 상세 안내</h2>
<!-- 블록 1: 적용 요건 -->
<div class="step-block">
<h3><span class="step-num-badge">①</span>법 제27조가 적용되는 요건</h3>
<ul class="req-list">
<li>
<strong>요건 1 — 피상속인 생전에 등기원인이 발생할 것</strong>
        피상속인이 생존 당시에 상대방과 사이에 권리변동의 원인이 되는 법률행위(매매·증여·교환 등)나 법률사실(시효취득 완성 등)이 이미 발생해야 합니다. 법률행위에는 채권행위뿐만 아니라 물권의 포기 같은 물권행위도 포함됩니다.
      </li>
<li>
<strong>요건 2 — 등기원인 발생 후 상속이 개시될 것</strong>
        등기원인이 먼저 발생한 뒤 피상속인이 사망해야 합니다. 등기원인이 피상속인의 사망 이후에 발생한 경우에는 법 제27조를 적용할 수 없고, 먼저 상속등기를 마친 후 별도로 해당 등기를 신청해야 합니다.
      </li>
</ul>
</div>
<!-- 블록 2: 케이스 다이어그램 -->
<div class="step-block">
<h3><span class="step-num-badge">②</span>상속 발생 위치별 신청인 구성</h3>
<p style="font-size:13px;color:#666;">사망한 당사자가 누구냐에 따라 등기의무자와 등기권리자가 달라집니다.</p>
<div class="case-diagram">
<div class="case-box">
<div class="cb-head"><span class="case-icon">🏷️</span>매도인(갑)이 사망한 경우</div>
<div class="arrow-row">
<span class="person dead">매도인 갑 (사망)</span>
<span class="arr">→</span>
<span class="person heir">갑의 상속인 A</span>
</div>
<div class="arrow-row">
<span class="person heir">A (등기의무자)</span>
<span class="arr">+</span>
<span class="person buyer">매수인 을 (등기권리자)</span>
</div>
<div class="note">갑의 상속인 A가 등기의무자로서 을과 공동신청</div>
</div>
<div class="case-box">
<div class="cb-head"><span class="case-icon">🛒</span>매수인(을)이 사망한 경우</div>
<div class="arrow-row">
<span class="person dead">매수인 을 (사망)</span>
<span class="arr">→</span>
<span class="person heir">을의 상속인 B</span>
</div>
<div class="arrow-row">
<span class="person">매도인 갑 (등기의무자)</span>
<span class="arr">+</span>
<span class="person heir">B (등기권리자)</span>
</div>
<div class="note">을의 상속인 B가 등기권리자로서 매도인 갑과 공동신청</div>
</div>
<div class="case-box">
<div class="cb-head"><span class="case-icon">⚖️</span>양방 모두 사망한 경우</div>
<div class="arrow-row">
<span class="person heir">갑의 상속인 A</span>
<span class="arr">+</span>
<span class="person heir">을의 상속인 B</span>
</div>
<div class="note">A(등기의무자) + B(등기권리자) 공동신청 — 양측 상속인 전원 참여 원칙</div>
</div>
<div class="case-box">
<div class="cb-head"><span class="case-icon">📝</span>협의분할로 단독상속한 경우</div>
<div class="arrow-row">
<span class="person heir">단독상속인</span>
<span class="arr">만</span>
<span class="person buyer">등기의무자</span>
</div>
<div class="note">공동상속인 간 협의분할이 이루어지면, 단독상속인만이 등기의무자 또는 등기권리자가 됨 (선례 5-206, 7-179)</div>
</div>
</div>
</div>
<!-- 블록 3: 시효취득 특이사례 -->
<div class="step-block">
<h3><span class="step-num-badge">③</span>취득시효 완성 시점과 처리 방법</h3>
<p style="font-size:14px;">시효취득의 경우 완성 시점이 피상속인 사망 전인지 후인지에 따라 절차가 달라집니다.</p>
<table class="tokyu-table">
<thead>
<tr><th>시효취득 완성 시점</th><th>처리 방법</th><th>선행 상속등기</th></tr>
</thead>
<tbody>
<tr>
<td><strong>피상속인 사망 전</strong><br/>취득시효 완성</td>
<td class="ok">법 제27조 적용 가능<br/>피상속인 명의에서 취득자 명의로 <strong>직접</strong> 이전등기</td>
<td class="ok">불필요 (생략 가능)</td>
</tr>
<tr>
<td><strong>피상속인 사망 후</strong><br/>취득시효 완성</td>
<td class="no">법 제27조 적용 불가<br/>먼저 상속인 앞으로 상속등기 후 취득시효를 원인으로 한 이전등기</td>
<td class="no">선행 필수</td>
</tr>
</tbody>
</table>
<div style="background:#fff8ee;border:1px solid var(--gold);border-radius:5px;padding:10px 14px;margin-top:10px;font-size:13px;">
      📌 <strong>선례 5-378</strong>: 피상속인 생존 시 시효취득 완성 → 갑은 상속등기 없이 피상속인 명의에서 직접 자기 명의로 이전등기 가능<br/>
      📌 <strong>선례 4-408</strong>: 피상속인 사망 후 시효취득 완성 → 상속인 앞으로 상속등기 먼저, 그 다음 취득시효 이전등기
    </div>
</div>
<!-- 블록 4: 신청정보 & 첨부정보 -->
<div class="step-block">
<h3><span class="step-num-badge">④</span>신청정보 및 첨부정보</h3>
<p style="font-size:14px;font-weight:700;color:var(--navy);">신청정보 — 등기원인·원인일자 기재</p>
<ul style="font-size:14px;line-height:1.9;padding-left:18px;margin-bottom:14px;">
<li>등기원인: "상속"이 아닌 <strong>피상속인 생전 원인행위</strong> 그대로 기재 (예: 매매, 증여, 취득시효)</li>
<li>등기원인일자: 매매계약일, 증여계약일, 시효완성일 등</li>
<li>등기필정보: <strong>피상속인이 부동산 취득 시 교부받은 등기필정보</strong> 제공</li>
</ul>
<p style="font-size:14px;font-weight:700;color:var(--navy);">첨부정보 — 6가지</p>
<ul class="attach-list">
<li>
<span class="al-num">①</span>
<div class="al-body">
<strong>등기원인증명서 (피상속인 명의)</strong>
          매매계약서·증여계약서 등 피상속인과 상대방 사이에 작성된 서면을 제공.
          <span class="warn">상속인 명의로 작성된 것은 등기원인증명서로 인정되지 않음 (선례 1-67)</span>
</div>
</li>
<li>
<span class="al-num">②</span>
<div class="al-body">
<strong>상속을 증명하는 정보</strong>
          제적등·초본, 가족관계증명서, 기본증명서 등 상속인임을 증명하는 서면 — 상속 이외의 원인이 등기원인이지만 상속이 전제되므로 반드시 첨부
          <span class="al-note">유효기간: 발급일로부터 3개월 (등기규칙 제62조)</span>
</div>
</li>
<li>
<span class="al-num">③</span>
<div class="al-body">
<strong>등기의무자 상속인 전원의 인감증명</strong>
          피상속인의 인감증명이 아닌 <strong>등기의무자가 된 상속인 모두</strong>의 인감증명을 첨부
        </div>
</li>
<li>
<span class="al-num">④</span>
<div class="al-body">
<strong>피상속인의 구 등기필증 (등기필정보)</strong>
          피상속인이 부동산 취득 당시 교부받은 구 등기필증을 제공 (법 부칙 제2조)
        </div>
</li>
<li>
<span class="al-num">⑤</span>
<div class="al-body">
<strong>피상속인 주소증명 (해당 시)</strong>
          등기기록상 피상속인 주소와 제적부상 주소가 다른 경우 말소된 주민등록등·초본으로 동일인 증명
        </div>
</li>
<li>
<span class="al-num">⑥</span>
<div class="al-body">
<strong>농지취득자격증명 (농지인 경우)</strong>
          피상속인이 매수한 농지의 경우 상속인 명의의 농지취득자격증명 필요
          <span class="al-note">※ 순수 상속은 농지취득자격증명 불필요, 상속인에 의한 등기는 필요 (선례 3-837, 5-714)</span>
</div>
</li>
</ul>
</div>
<!-- 블록 5: 단독신청 (판결) -->
<div class="step-block">
<h3><span class="step-num-badge">⑤</span>상대방이 협력을 거부할 경우 — 판결에 의한 단독신청</h3>
<p style="font-size:14px;">공동신청이 원칙이나, 상대방(또는 그 상속인)이 등기신청에 협력하지 않으면 소를 제기하여 승소 후 단독으로 신청할 수 있습니다.</p>
<div style="background:#fff3e8;border:1px solid #c05000;border-radius:6px;padding:14px 18px;margin-top:10px;font-size:14px;">
<strong style="color:#c05000;">⚠️ 중요: 상속인 전원을 피고로 해야 합니다</strong><br/>
      상속인이 등기신청에 협력하지 않을 경우, <strong>상속인 전원을 피고로 하여</strong> 소유권이전등기 소송을 제기해야 합니다. 상속인 3인 중 2인만을 피고로 하여 승소한 경우에는 그 판결만으로 피상속인 명의에서 직접 이전등기를 신청할 수 없습니다 (선례 1-194).
    </div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 준비서류 ===== -->
<section>
<span class="section-label">준비서류</span>
<h2>신청에 필요한 주요 서류</h2>
<div class="doc-grid">
<div class="doc-card">
<div class="dc-icon">📋</div>
<div class="dc-title">등기원인증명서</div>
<span class="required">필수 (피상속인 명의)</span>
      피상속인과 거래 상대방 사이에 체결된 매매계약서, 증여계약서 등
      <div class="dc-note">상속인 명의 재작성 불가</div>
</div>
<div class="doc-card">
<div class="dc-icon">👨‍👩‍👧</div>
<div class="dc-title">상속증명서류</div>
<span class="required">필수</span>
      제적등·초본, 가족관계증명서, 기본증명서 등 상속인임을 증명하는 서면 일체
      <div class="dc-note">발급일로부터 3개월 이내</div>
</div>
<div class="doc-card">
<div class="dc-icon">🔏</div>
<div class="dc-title">상속인 인감증명</div>
<span class="required">필수</span>
      등기의무자가 된 상속인 전원의 인감증명 — 피상속인 인감증명 아님
      <div class="dc-note">협의분할 시 분할서 + 인감 함께</div>
</div>
<div class="doc-card">
<div class="dc-icon">🗝️</div>
<div class="dc-title">구 등기필증</div>
<span class="required">필수</span>
      피상속인이 부동산 취득 시 교부받은 등기필정보 (구 등기필증)
      <div class="dc-note">분실 시 확인조서 또는 공증 대체</div>
</div>
<div class="doc-card">
<div class="dc-icon">🪪</div>
<div class="dc-title">주소증명서류</div>
<span class="required">필수</span>
      취득자(등기권리자)의 주민등록등·초본
      <div class="dc-note">피상속인 주소 불일치 시 말소등본 추가</div>
</div>
<div class="doc-card">
<div class="dc-icon">💳</div>
<div class="dc-title">취득세 납부영수증</div>
<span class="required">필수</span>
      최종 취득자의 취득세 신고·납부 영수증
      <div class="dc-note">농지인 경우 농지취득자격증명 추가</div>
</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 비용안내 ===== -->
<section>
<span class="section-label">비용안내</span>
<h2>주요 비용 항목</h2>
<table class="cost-table">
<thead>
<tr><th>항목</th><th>기준 및 세율</th><th>비고</th></tr>
</thead>
<tbody>
<tr>
<td><strong>취득세</strong></td>
<td>원인에 따라 상이 (매매: 1~3%, 증여: 3.5% 등)</td>
<td>상속 특례세율(0.8%) 적용 안됨</td>
</tr>
<tr>
<td><strong>지방교육세</strong></td>
<td>취득세액 × 20%</td>
<td>취득세 신고 시 함께</td>
</tr>
<tr>
<td><strong>농어촌특별세</strong></td>
<td>해당 시 취득세액 × 10%</td>
<td>85㎡ 초과 등 해당 시</td>
</tr>
<tr>
<td><strong>등록면허세</strong></td>
<td>과세표준 × 0.8% (소유권이전)<br/>또는 설정금액 × 0.2% (근저당 등)</td>
<td>원인·등기 종류에 따라 상이</td>
</tr>
<tr>
<td><strong>등기신청수수료</strong></td>
<td>부동산 1건당 15,000원</td>
<td>전자신청 시 13,000원</td>
</tr>
<tr>
<td><strong>인감증명서 발급</strong></td>
<td>1통 600원</td>
<td>상속인 수만큼 필요</td>
</tr>
<tr>
<td><strong>법무사 보수</strong></td>
<td>대법원 법무사 보수 기준에 따름</td>
<td>부동산 가액 및 난이도에 따라 산정</td>
</tr>
</tbody>
</table>
</section>
<div class="divider"></div>
<!-- ===== Q&A ===== -->
<section>
<span class="section-label">자주 묻는 질문</span>
<h2>Q &amp; A</h2>
<div class="qna-item">
<div class="qna-q">Q. 상속인에 의한 등기와 일반 상속등기를 함께 할 수 없나요?</div>
<div class="qna-a">법 제27조에 의한 상속인에 의한 등기의 핵심 장점이 바로 상속등기를 생략할 수 있다는 것입니다. 피상속인 명의에서 최종 취득자(매수인 또는 그 상속인) 명의로 직접 이전등기가 이루어집니다. 불필요하게 상속등기를 먼저 하고 이전등기를 별도로 진행할 필요가 없어 비용과 시간을 절약할 수 있습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 매도인이 사망했는데 매도인의 자녀 중 한 명만 협력합니다. 그 지분만 이전등기할 수 있나요?</div>
<div class="qna-a">아닙니다. 상속인에 의한 등기는 피상속인 명의에서 직접 이전되는 것이므로, 등기의무자 지위를 가진 상속인 전원이 참여해야 합니다. 일부 상속인의 지분만 이전하는 것은 허용되지 않습니다 (선례 1-194). 협력하지 않는 상속인이 있다면 소송을 통해 상속인 전원을 피고로 하는 판결을 받아야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 피상속인이 매수한 부동산인데 상속인들이 협의분할로 1인이 단독 취득합니다. 어떻게 처리하나요?</div>
<div class="qna-a">공동상속인 간에 협의분할이 이루어진 경우, 단독으로 상속받은 사람만이 등기권리자로서 매도인과 공동으로 소유권이전등기를 신청할 수 있습니다 (선례 5-206, 7-179). 이때 협의분할서와 상속인 전원의 인감증명도 첨부정보로 제공해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 매매 계약서를 분실했는데 어떻게 해야 하나요?</div>
<div class="qna-a">등기원인증명서는 반드시 피상속인과 상대방이 작성한 원본이어야 합니다. 분실한 경우 상속인이 새로 계약서를 작성해도 등기원인증명서로 인정되지 않습니다 (선례 1-67). 이 경우 상대방(또는 그 상속인)을 피고로 하여 소유권이전등기를 명하는 확정판결을 받아 그 정본으로 신청하는 방법을 검토해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 피상속인이 교환계약을 체결하였는데 등기 전에 사망했습니다. 법 제27조가 적용되나요?</div>
<div class="qna-a">네, 적용됩니다. 법 제27조는 매매뿐 아니라 교환, 증여, 기타 물권 설정 등 피상속인 생존 당시에 발생한 모든 등기원인에 적용됩니다. 교환계약서(피상속인 명의)를 등기원인증명서로 첨부하고, 상속을 증명하는 서면과 상속인 인감증명 등을 함께 제출하면 됩니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 회사가 합병된 경우에도 법 제27조가 적용되나요?</div>
<div class="qna-a">네, 법 제27조는 "상속이나 그 밖의 포괄승계"를 포함합니다. 합병으로 소멸한 회사가 합병 전에 매수한 부동산에 대해서는 합병 후 존속하는 회사와 매도인의 공동신청으로 직접 존속 회사 명의로 소유권이전등기를 신청할 수 있습니다 (선례 4-374). 이때 합병을 증명하는 서류(합병등기사항증명서 등)를 첨부해야 합니다.</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 판례·선례 ===== -->
<section>
<span class="section-label">관련 판례·선례</span>
<h2>실무에서 중요한 판례와 선례</h2>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">대법원 1997. 11. 28.</span>
<span class="rc-title">상속인에 의한 등기의 유효성 확인</span>
</div>
<div class="rc-body">
      (선고 95다51991 판결) 등기원인이 이미 존재하고 있으나 아직 등기신청을 하지 않고 있는 동안에 등기권리자 또는 등기의무자에 관하여 상속이 개시된 경우, 피상속인이 살아 있다면 그가 신청하였을 등기를 상속인이 법 제27조의 규정에 따라 신청하는 때에는 그 등기를 무효라고 할 수 없다.
    </div>
<div class="rc-result">💡 법 제27조에 의한 상속인 등기신청이 유효함을 대법원이 명시적으로 확인한 판결</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">선례 1-194</span>
<span class="rc-title">상속인 일부 피고 판결로는 등기 신청 불가</span>
</div>
<div class="rc-body">
      피상속인 소유 부동산이 생존 시 매매가 이루어지고 소유권이전등기 전에 상속이 개시된 경우, 상속인 3인 중 2인만을 상대로 그들의 상속지분만에 관하여 이전등기를 명하는 판결을 받은 경우에는 그 판결만으로는 피상속인 명의에서 원고 명의로 직접 이전등기를 신청할 수 없다.
    </div>
<div class="rc-result">💡 단독신청(판결)을 위해서는 반드시 상속인 전원을 피고로 해야 함</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">선례 1-67</span>
<span class="rc-title">등기원인증명서는 피상속인 명의여야 함</span>
</div>
<div class="rc-body">
      상속인에 의한 등기신청 시 제출하는 등기원인을 증명하는 정보는 피상속인과 상대방 사이에서 작성된 것이어야 하고, 상속인 명의로 작성된 것은 등기원인을 증명하는 정보가 될 수 없다.
    </div>
<div class="rc-result">💡 계약서를 분실했다고 상속인이 새로 작성하여 제출해서는 안 됨</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">선례 3-837 · 5-714</span>
<span class="rc-title">농지 상속인에 의한 등기 시 농지취득자격증명 필요</span>
</div>
<div class="rc-body">
      피상속인이 매수한 농지에 대하여 공동상속인들이 매도인과 공동으로(또는 승소판결로) 소유권이전등기를 신청하는 경우에는 등기권리자인 공동상속인 명의의 농지취득자격증명을 제공하여야 한다. 순수 상속에 의한 농지 취득과 달리 취급된다.
    </div>
<div class="rc-result">💡 농지를 상속인에 의한 등기로 처리할 때 농지취득자격증명 발급 여부를 미리 확인할 것</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 주의사항 ===== -->
<section>
<span class="section-label">주의사항</span>
<h2>반드시 확인해야 할 사항</h2>
<ul class="warn-list">
<li>
<strong>⚠️ 등기원인이 피상속인 사망 전에 발생해야 합니다</strong>
      매매계약 등의 원인행위가 반드시 피상속인 생존 중에 이루어져야 합니다. 사망 이후에 원인이 발생한 경우(예: 사망 후 시효취득 완성)에는 법 제27조를 적용할 수 없고, 먼저 상속등기를 마친 후 별도 등기를 진행해야 합니다.
    </li>
<li>
<strong>⚠️ 등기원인증명서는 반드시 피상속인 명의 서류여야 합니다</strong>
      계약서 등 등기원인을 증명하는 서류는 피상속인과 상대방이 서명한 원본이어야 합니다. 분실 등을 이유로 상속인이 새로 작성한 계약서는 등기원인증명서로 인정되지 않습니다 (선례 1-67). 원본을 반드시 보존해야 합니다.
    </li>
<li>
<strong>⚠️ 인감증명은 피상속인이 아닌 상속인의 것을 준비하세요</strong>
      피상속인은 이미 사망하였으므로 인감증명 발급이 불가합니다. 등기의무자가 된 상속인 전원의 인감증명을 새로 발급받아야 합니다. 피상속인의 생전 인감증명서를 잘못 제출하는 경우가 있으니 주의하세요.
    </li>
<li>
<strong>⚠️ 농지인 경우 농지취득자격증명이 필요합니다</strong>
      상속을 원인으로 농지를 취득하는 일반 상속등기와 달리, 상속인에 의한 등기(법 제27조)로 농지를 취득하는 경우에는 반드시 농지취득자격증명을 발급받아야 합니다. 농지 여부를 사전에 확인하세요.
    </li>
<li>
<strong>⚠️ 판결로 단독신청 시 상속인 전원을 피고로 해야 합니다</strong>
      상대방 상속인이 협력을 거부하여 소송을 제기하는 경우, 반드시 그 상속인 전원을 피고로 하여야 합니다. 일부 상속인만을 피고로 하여 받은 판결로는 법 제27조에 의한 등기를 신청할 수 없습니다 (선례 1-194).
    </li>
</ul>
</section>
<div class="divider"></div>
<!-- ===== 다음으로 ===== -->
<section>
<span class="section-label">다음으로</span>
<h2>이어서 알아볼 내용</h2>
<div class="next-card">
<div class="nc-icon">📜</div>
<div class="nc-text">
<strong>PAGE 17 · 유언 및 유증으로 인한 소유권이전등기</strong>
<span>피상속인이 유언을 남긴 경우 — 유증을 원인으로 한 소유권이전등기의 절차와 요건을 안내합니다.</span>
</div>
<div class="nc-arrow">›</div>
</div>
</section>
<!-- ===== CTA ===== -->
<div class="cta-section">
<h2>계약 후 사망 — 등기 어떻게 해야 할지 막막하시죠?</h2>
<p>피상속인의 생전 거래를 정리하는 등기는 서류 구성이 복잡합니다.<br/>법무사가 사실관계를 확인하고 최적의 등기 방법을 안내해 드립니다.</p>
<a class="cta-btn" href="tel:0000000000">📞 전화 상담 예약</a>
<a class="cta-btn outline" href="#">💬 온라인 문의</a>
</div>
</div><!-- /container -->
<!-- ===== 면책 ===== -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-17', title: '유언의 효력',
        meta: '민법이 정한 5가지 방식 중 하나를 갖추지 못하면 유언은 무효 — 방식별 요건을 정확히 확인하세요',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ===== HEADER ===== -->


<!-- ===== 이런분께 ===== -->
<section>
<span class="section-label">이런 분께</span>
<h2>이런 경우에 꼭 확인하세요</h2>
<div class="target-grid">
<div class="target-card">
<div class="icon">📝</div>
<strong>손수 쓴 유언장이 있는 분</strong>
      자필로 유언장을 작성했는데 연월일·주소·날인이 모두 갖춰져 있는지 확신이 없는 분
    </div>
<div class="target-card">
<div class="icon">🏥</div>
<strong>입원 중 유언을 남긴 경우</strong>
      병상에서 급하게 작성된 유언장 — 구수증서 또는 공정증서 방식 요건이 충족됐는지 검토 필요
    </div>
<div class="target-card">
<div class="icon">📜</div>
<strong>유언장을 발견한 상속인</strong>
      피상속인이 남긴 유언장의 효력을 먼저 확인해야 유증 등기 등 후속 절차를 진행할 수 있는 분
    </div>
<div class="target-card">
<div class="icon">🔄</div>
<strong>유언을 새로 작성하거나 변경할 분</strong>
      기존 유언의 내용을 바꾸거나 철회하려는 분 — 방식과 철회 방법을 사전에 파악해야 하는 분
    </div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 핵심요약 ===== -->
<section>
<span class="section-label">핵심요약</span>
<h2>유언 효력의 핵심 3원칙</h2>
<div class="summary-box">
<div class="sum-row"><span class="sum-key">요식행위</span><span class="sum-val">민법이 정한 <em>5가지 방식 중 하나</em>를 엄격히 갖추지 않으면 무효 (민법 제1060조)</span></div>
<div class="sum-row"><span class="sum-key">효력발생</span><span class="sum-val">유언자 <em>사망 시부터</em> 효력 발생 — 유언장 작성 시점부터가 아님 (민법 제1073조)</span></div>
<div class="sum-row"><span class="sum-key">유언능력</span><span class="sum-val">만 <em>17세 이상</em>이고 유언 당시 <em>의사능력</em>이 있어야 유효 (민법 제1061조)</span></div>
<div class="sum-row"><span class="sum-key">철회 자유</span><span class="sum-val">유언자는 언제든지 <em>자유롭게 철회</em> 가능 — 철회 포기 약정은 무효 (민법 제1108조)</span></div>
<div class="sum-row"><span class="sum-key">대리 불가</span><span class="sum-val">유언은 본인의 일신전속적 행위 — <em>대리인을 통한 유언은 무효</em></span></div>
</div>
<div class="info-box">
<strong>📌 유언방식은 5가지</strong>: 자필증서 · 녹음 · 공정증서 · 비밀증서 · 구수증서<br/>
    방식 불비 → <strong style="color:#c05000;">전부 무효</strong>. 아래에서 각 방식의 요건을 꼼꼼히 확인하세요.
  </div>
</section>
<div class="divider"></div>
<!-- ===== 상세내용 ===== -->
<section>
<span class="section-label">상세내용</span>
<h2>5가지 유언 방식별 요건 상세</h2>
<!-- ① 자필증서 -->
<h3>① 자필증서에 의한 유언 — 가장 많이 사용, 가장 많이 무효</h3>
<div class="method-grid">
<div class="method-card">
<div class="mc-head">
<div class="mc-num">1</div>
<div>
<div class="mc-title">자필증서 유언</div>
<div class="mc-sub">민법 제1066조 · 증인 불필요</div>
</div>
</div>
<div class="mc-body">
<div class="req-row"><span class="req-icon">✓</span><span><strong>전문(全文) 자서</strong> — 컴퓨터·타자기·대필 전부 무효. 외국어·약자 사용은 가능</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">작성 연월일 자서</strong> — 연·월만 쓰고 일 누락 시 무효 (대법원 2009다9768)</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>주소 자서</strong> — 주민등록상 주소 아니어도 무방, 봉투에 기재해도 유효</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>성명 자서</strong> — 호·예명도 가능, 동일인 식별 가능하면 이름만도 유효</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>날인</strong> — 타인 대신 날인 가능, 무인(지장)도 유효</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">변경 시</strong>: 삽입·삭제 부분을 자서하고 날인해야 유효</span></div>
<span class="badge">사후 검인 신청 필요</span>
</div>
</div>
<div class="method-card">
<div class="mc-head">
<div class="mc-num">2</div>
<div>
<div class="mc-title">녹음에 의한 유언</div>
<div class="mc-sub">민법 제1067조 · 증인 1인 이상</div>
</div>
</div>
<div class="mc-body">
<div class="req-row"><span class="req-icon">✓</span><span><strong>유언자 구술</strong> — 유언의 취지·성명·연월일을 직접 구술</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">증인 참여·구술</strong> — 유언이 유언자 것임과 자신의 성명을 구술하여 녹음. 증인 없으면 무효</span></div>
<div class="req-row"><span class="req-icon">✓</span><span>증인은 1인 이상이면 충분 (다수견해)</span></div>
<span class="badge">사후 검인 신청 필요</span>
</div>
</div>
<div class="method-card">
<div class="mc-head">
<div class="mc-num">3</div>
<div>
<div class="mc-title">공정증서에 의한 유언</div>
<div class="mc-sub">민법 제1068조 · 증인 2인 이상 · 가장 안전</div>
</div>
</div>
<div class="mc-body">
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">증인 2인 이상</strong> 참여 — 1인만 참여하면 무효 (대법원 94다13695)</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">유언자가 공증인 면전에서 구수</strong> — 말로써 표현해야 함. 손짓·고개 끄덕임만으로는 구수 인정 불가 (대법원 2002다35386)</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>공증인 필기·낭독</strong> — 사무원 대리 집필 무방</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>유언자·증인 승인 후 서명 또는 기명날인</strong></span></div>
<div class="req-row"><span class="req-icon">✓</span><span>출장 공증 가능, 원본은 공증인사무소에 20년 보관</span></div>
<span class="badge nogold">✅ 검인 절차 불필요 — 바로 집행 가능</span>
</div>
</div>
<div class="method-card">
<div class="mc-head">
<div class="mc-num">4</div>
<div>
<div class="mc-title">비밀증서에 의한 유언</div>
<div class="mc-sub">민법 제1069조 · 증인 2인 이상</div>
</div>
</div>
<div class="mc-body">
<div class="req-row"><span class="req-icon">✓</span><span><strong>증서에 필자 성명 기재</strong> — 내용 자필 불필요, 대필 가능</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>엄봉(봉인)·날인</strong> — 유언자 본인이 봉인</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">2인 이상 증인 면전</strong>에서 유언서임을 표시</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>봉서 표면에 제출연월일</strong> 기재 + 유언자·증인 서명·기명날인</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">5일 이내</strong> 공증인 또는 법원서기에게 제출하여 <strong class="warn-text">확정일자</strong> 받을 것</span></div>
<span class="badge">사후 검인 신청 필요</span>
</div>
</div>
<div class="method-card full">
<div class="mc-head">
<div class="mc-num">5</div>
<div>
<div class="mc-title">구수증서에 의한 유언 — 급박한 상황 전용</div>
<div class="mc-sub">민법 제1070조 · 증인 2인 이상 · 보충적 방식</div>
</div>
</div>
<div class="mc-body" style="display:grid;grid-template-columns:1fr 1fr;gap:0 24px;">
<div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">질병·급박한 사유</strong>로 보통방식 불가한 경우에만 사용 가능 (부상·전염병·조난 등)</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">2인 이상 증인</strong> 참여 — 1인이면 무효</span></div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>증인 중 1인에게 유언 취지 구수</strong></span></div>
</div>
<div>
<div class="req-row"><span class="req-icon">✓</span><span><strong>구수받은 자가 필기·낭독</strong> 후 유언자와 증인이 정확함 승인·서명날인</span></div>
<div class="req-row"><span class="req-icon warn">!</span><span><strong class="warn-text">급박한 사유 종료 후 7일 이내</strong> 가정법원에 검인 신청 — 기간 도과 시 무효 (대법원 94스16)</span></div>
</div>
</div>
</div>
</div>
<!-- 5방식 비교표 -->
<h3>5가지 방식 한눈에 비교</h3>
<div style="overflow-x:auto;">
<table class="method-compare">
<thead>
<tr>
<th style="text-align:left;">요건 항목</th>
<th>①자필증서</th>
<th>②녹음</th>
<th>③공정증서</th>
<th>④비밀증서</th>
<th>⑤구수증서</th>
</tr>
</thead>
<tbody>
<tr><td>전문 자서</td><td class="ok">●</td><td class="no">—</td><td class="no">—</td><td class="no">—</td><td class="no">—</td></tr>
<tr><td>연월일 기재</td><td class="ok">●</td><td class="ok">●</td><td class="ok">●</td><td class="opt">봉서표면</td><td class="ok">●</td></tr>
<tr><td>주소 자서</td><td class="ok">●</td><td class="no">—</td><td class="no">—</td><td class="no">—</td><td class="no">—</td></tr>
<tr><td>성명 기재</td><td class="ok">●</td><td class="ok">●</td><td class="ok">●</td><td class="ok">●</td><td class="ok">●</td></tr>
<tr><td>날인</td><td class="ok">●</td><td class="no">—</td><td class="opt">서명가능</td><td class="ok">●</td><td class="opt">서명가능</td></tr>
<tr><td>증인 수</td><td class="opt">불필요</td><td class="num">1인 이상</td><td class="num">2인 이상</td><td class="num">2인 이상</td><td class="num">2인 이상</td></tr>
<tr><td>공증인 참여</td><td class="no">—</td><td class="no">—</td><td class="ok">●</td><td class="opt">확정일자</td><td class="no">—</td></tr>
<tr><td>검인 필요</td><td class="ok">필요</td><td class="ok">필요</td><td class="no">불필요</td><td class="ok">필요</td><td class="ok">필요</td></tr>
<tr><td>사용 조건</td><td class="opt">자유</td><td class="opt">자유</td><td class="opt">자유</td><td class="opt">자유</td><td style="color:#c05000;font-weight:700;font-size:12px;">급박한 경우만</td></tr>
</tbody>
</table>
</div>
<!-- 유효성 자가진단 체크리스트 -->
<h3>내 유언장의 유효성 자가진단</h3>
<p style="font-size:14px;color:#555;">작성한 유언장의 방식을 선택하고 아래 항목을 모두 충족하는지 확인하세요. <strong>하나라도 빠지면 전체 무효</strong>가 될 수 있습니다.</p>
<div class="checklist-wrap">
<div class="checklist-box">
<div class="cl-head"><span class="cl-badge">자필증서</span> 유언장 체크리스트</div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">처음부터 끝까지 내 손으로 직접 씀<span class="fatal">컴퓨터·타자기·대필 → 무효</span></div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">작성 연·월·일을 모두 자서<span class="fatal">연월만 쓰고 일 누락 → 무효</span></div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">주소를 직접 씀 (봉투 기재도 가능)</div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">성명을 직접 씀 (호·예명 가능)</div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">날인 (무인·타인 대신 날인 가능)</div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">수정 시 수정 부분에도 자서·날인</div></div>
</div>
<div class="checklist-box">
<div class="cl-head"><span class="cl-badge">공정증서</span> 유언장 체크리스트</div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">공증인 면전에서 <strong>말로</strong> 유언 취지 구수<span class="fatal">손짓·고개만 → 무효</span></div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">증인 2인 이상 참여<span class="fatal">1인만 → 무효</span></div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">공증인이 필기하고 낭독함</div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">유언자·증인이 정확함 승인 후 서명 또는 기명날인</div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">공증인이 부기·서명날인</div></div>
<div class="check-item must"><div class="ci-box"></div><div class="ci-text">증인은 결격자가 아님</div></div>
</div>
</div>
<!-- 증인 결격자 -->
<h3>증인 결격자 — 이 사람이 증인이면 유언 전체가 무효</h3>
<div class="disqual-grid">
<div class="disqual-card">
<div class="dc-icon">👦</div>
<div class="dc-name">미성년자</div>
<div class="dc-desc">법정대리인 동의가 있어도 절대 불가</div>
</div>
<div class="disqual-card">
<div class="dc-icon">⚖️</div>
<div class="dc-name">금치산자·한정치산자</div>
<div class="dc-desc">의사능력 회복·동의가 있어도 절대 불가</div>
</div>
<div class="disqual-card">
<div class="dc-icon">💰</div>
<div class="dc-name">유언으로 이익 받는 자</div>
<div class="dc-desc">수유자(수증자) 본인</div>
</div>
<div class="disqual-card">
<div class="dc-icon">💑</div>
<div class="dc-name">수유자의 배우자</div>
<div class="dc-desc">이익을 받는 자의 배우자</div>
</div>
<div class="disqual-card">
<div class="dc-icon">👪</div>
<div class="dc-name">수유자의 직계혈족</div>
<div class="dc-desc">부모·자녀·조부모 등</div>
</div>
<div class="disqual-card disqual-ok">
<div class="dc-icon">✅</div>
<div class="dc-name">결격 아닌 자</div>
<div class="dc-desc">후순위상속인, 유언집행자, 유언으로 이익을 잃는 자 — 증인 가능 (대법원 97다57733)</div>
</div>
</div>
<!-- 유언의 철회 -->
<h3>유언의 철회 — 마지막 의사가 항상 우선합니다</h3>
<div class="revoke-grid">
<div class="revoke-card">
<strong>임의철회</strong>
      유언자는 언제든지 이전 유언과 다른 방식으로도 유언을 철회할 수 있습니다. 유언증서를 고의로 파기해도 철회로 봅니다. <em style="color:#888;font-size:12px;">단, 공정증서 유언은 원본이 남아 있으므로 정본 파기만으로는 철회되지 않음</em>
</div>
<div class="revoke-card">
<strong>전후 유언의 저촉 (법정철회)</strong>
      두 개의 유언이 저촉될 경우 뒤의 유언이 앞의 유언을 철회한 것으로 봅니다 (민법 제1109조). 즉 가장 나중에 작성된 유언이 우선합니다.
    </div>
<div class="revoke-card">
<strong>생전행위와의 저촉 (법정철회)</strong>
      유언 후 유언자가 그 목적물을 생전에 처분(매매·증여 등)한 경우, 저촉 범위 내에서 유언은 철회된 것으로 봅니다.
    </div>
<div class="revoke-card">
<strong>유언증서 파훼 (법정철회)</strong>
      유언자가 고의로 유언증서를 파기한 경우 파기된 부분의 유언은 철회된 것으로 봅니다. 단, 분실·멸실로는 철회되지 않습니다 (대법원 96다21119).
    </div>
</div>
</section>
<div class="divider"></div>
<!-- ===== Q&A ===== -->
<section>
<span class="section-label">자주 묻는 질문</span>
<h2>Q &amp; A</h2>
<div class="qna-item">
<div class="qna-q">Q. 컴퓨터로 내용을 작성하고 서명·날인만 손으로 했는데 유효한가요?</div>
<div class="qna-a">자필증서 유언으로는 무효입니다. 자필증서 유언은 유언의 전문(全文)을 유언자가 직접 손으로 써야 하므로, 컴퓨터로 내용을 작성하고 서명만 손으로 한 경우에는 방식 불비로 무효입니다. 단, 이 경우에도 작성된 서면을 봉인하여 비밀증서 유언의 요건(증인 2인, 5일 내 확정일자 등)을 갖추면 비밀증서 유언으로는 유효할 수 있습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 자필유언장에 날짜를 "2024년 봄"이라고 써도 되나요?</div>
<div class="qna-a">판례는 날짜가 특정 가능하면 된다고 봅니다. "만 70세 생일", "조부 기일" 등 날짜를 특정할 수 있는 표현은 유효합니다. 그러나 "2024년 봄"과 같이 날짜를 특정하기 어려운 표현은 무효가 될 가능성이 높습니다. 분쟁을 막으려면 반드시 "○○○○년 ○○월 ○○일"로 명확하게 기재하는 것이 안전합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 공정증서 유언에서 증인은 누구나 될 수 있나요?</div>
<div class="qna-a">민법 제1072조에서 정한 결격자(미성년자, 금치산자·한정치산자, 유언으로 이익 받는 자·그 배우자·직계혈족)가 아닌 한 누구나 증인이 될 수 있습니다. 나머지 상속인, 유언집행자, 후순위상속인도 증인이 될 수 있습니다. 다만 공증인법에 의한 결격자(공증인의 친족·피고용인 등)도 주의해야 합니다. 가장 안전한 방법은 수유자와 완전히 무관한 성인 2인을 확보하는 것입니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 이미 작성한 유언을 나중에 바꾸고 싶은데 어떻게 해야 하나요?</div>
<div class="qna-a">유언자는 언제든지 자유롭게 유언을 철회하거나 새 유언을 작성할 수 있습니다. 방법은 두 가지입니다. ① 새 유언장을 작성하면서 "이전 유언을 모두 철회한다"고 명시하거나, ② 저촉 내용을 담은 새 유언을 작성하면 저촉 부분의 이전 유언은 자동 철회됩니다. 이전 유언장 원본을 고의로 파기하는 것도 철회가 됩니다(단, 공정증서 유언의 정본 파기는 철회 효력 없음).</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 공정증서 유언은 나중에 검인 받을 필요 없나요?</div>
<div class="qna-a">네, 맞습니다. 공정증서에 의한 유언은 공정력이 인정되므로 사후에 별도의 검인 절차 없이 바로 집행할 수 있습니다. 반면 자필증서·녹음·비밀증서·구수증서에 의한 유언은 유언자 사망 후 지체 없이 가정법원에 검인 신청을 해야 합니다. 이것이 공정증서 유언의 가장 큰 실무적 장점입니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 유언장 내용대로 부동산 등기를 하려면 어떤 절차가 필요한가요?</div>
<div class="qna-a">유증을 원인으로 한 소유권이전등기를 진행해야 합니다. 공정증서 유언은 검인 없이 바로 진행 가능하고, 자필증서 등 기타 방식은 가정법원의 검인을 먼저 받아야 합니다. 유언집행자가 지정된 경우에는 유언집행자가 등기신청을 하고, 그렇지 않은 경우에는 상속인이 합의하여 진행합니다. 자세한 절차는 다음 페이지(유증 등기)에서 안내합니다.</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 판례 ===== -->
<section>
<span class="section-label">관련 판례</span>
<h2>유언 효력에 관한 중요 판례</h2>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">대법원 2009. 5. 14.</span>
<span class="rc-title">일자 누락 자필유언 무효</span>
</div>
<div class="rc-body">
      (선고 2009다9768 판결) 자필유언증서의 연월일은 유언능력의 유무를 판단하거나 다른 유언증서와 유언 성립의 선후를 결정하는 기준일이 되므로 작성일을 특정할 수 있게 기재하여야 한다. 따라서 연·월만 기재하고 <strong>일(日)의 기재가 없는 자필유언증서는 효력이 없다.</strong>
</div>
<div class="rc-result">💡 실무에서 가장 많이 발생하는 무효 사유 — "2024년 3월"만 쓰고 날짜를 쓰지 않으면 무효</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">대법원 1994. 12. 22.</span>
<span class="rc-title">공정증서 유언 — 증인 1인은 무효</span>
</div>
<div class="rc-body">
      (선고 94다13695 판결) 공증사무실에서 유언장에 인증을 받았으나 증인 2명의 참여가 없고 자서된 것도 아니라면, 그 유언장은 공정증서에 의한 유언도 될 수 없고 자필증서 유언도 될 수 없다.
    </div>
<div class="rc-result">💡 공정증서 유언의 증인은 반드시 2인 이상 — 공증인 사무직원은 증인으로 카운트되지 않을 수 있으므로 반드시 외부 증인 2인 확보</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">대법원 2002. 9. 24.</span>
<span class="rc-title">손짓·고개만으로는 구수 인정 안 됨</span>
</div>
<div class="rc-body">
      (선고 2002다35386 판결) 공정증서 유언에서 '구수'는 말로써 유언 내용을 전달하는 것을 뜻한다. 뇌질환 등으로 대화할 수 없어 공증인이 친족으로부터 내용을 전해 듣고 유언자에게 '그렇소?'라고 물어 단순히 <strong>손짓·발짓·고개만 끄덕였다면 구수로 볼 수 없다.</strong>
</div>
<div class="rc-result">💡 의식이 불명확한 상태에서 작성된 공정증서 유언은 효력이 없을 수 있음 — 녹음유언 또는 사전에 건강할 때 공정증서 유언을 작성해야</div>
</div>
<div class="ruling-card">
<div class="rc-meta">
<span class="rc-badge">대법원 1999. 11. 26.</span>
<span class="rc-title">후순위상속인은 증인 결격자 아님</span>
</div>
<div class="rc-body">
      (선고 97다57733 판결) 유언증인의 결격사유는 민법 제1072조에서 정한 바에 한하며, 후순위상속인·유언으로 이익을 잃는 자·유언집행자 등은 증인 결격자가 아니므로 증인이 될 수 있다.
    </div>
<div class="rc-result">💡 결격자의 범위는 법이 명시한 자로 한정 — 수유자(이익 받는 자)의 배우자·직계혈족은 결격, 나머지 상속인은 가능</div>
</div>
</section>
<div class="divider"></div>
<!-- ===== 주의사항 ===== -->
<section>
<span class="section-label">주의사항</span>
<h2>유언 작성 시 반드시 확인할 사항</h2>
<ul class="warn-list">
<li>
<strong>⚠️ 날짜에서 '일(日)'을 빠뜨리면 무효입니다</strong>
      자필증서 유언에서 "2024년 3월"처럼 월까지만 쓰고 날짜를 기재하지 않으면 작성일을 특정할 수 없어 무효입니다. 반드시 연·월·일을 모두 직접 기재하세요. "만 70세 생일", "조부 기일" 처럼 날짜를 특정할 수 있는 표현도 유효합니다.
    </li>
<li>
<strong>⚠️ 컴퓨터로 작성한 유언장은 자필증서로 인정되지 않습니다</strong>
      한글, MS Word 등으로 출력한 문서는 자필증서 유언의 요건을 갖추지 못합니다. 타자기·컴퓨터·대필이 포함된 경우 전부 무효입니다. 컴퓨터로 작성하려면 반드시 공정증서 또는 비밀증서 방식을 이용하세요.
    </li>
<li>
<strong>⚠️ 유언으로 이익 받는 자의 가족이 증인이면 무효입니다</strong>
      재산을 받게 되는 사람(수유자)은 물론 그의 배우자와 직계혈족도 증인이 될 수 없습니다. 공정증서 작성 시 "친한 가족 지인"을 증인으로 삼았다가 나중에 무효 주장을 받는 사례가 많습니다. 수유자와 무관한 독립적인 증인 2인을 확보하세요.
    </li>
<li>
<strong>⚠️ 구수증서는 7일 이내에 검인을 신청해야 합니다</strong>
      급박한 사유가 종료된 날로부터 7일 이내에 가정법원에 검인을 신청해야 하며, 이 기간을 넘기면 무효입니다. 급박한 상황이 종료된 직후 즉시 조치해야 합니다.
    </li>
<li>
<strong>⚠️ 유언장이 여러 개라면 가장 나중 것이 우선합니다</strong>
      내용이 저촉되는 복수의 유언이 있는 경우, 나중에 작성된 유언이 앞의 유언을 철회한 것으로 봅니다. 이전 유언을 명시적으로 철회하지 않아도 됩니다. 유언장 작성일자가 유언 우선순위를 결정하므로 날짜가 더욱 중요합니다.
    </li>
</ul>
</section>
<div class="divider"></div>
<!-- ===== 다음으로 ===== -->
<section>
<span class="section-label">다음으로</span>
<h2>이어서 알아볼 내용</h2>
<div class="next-card">
<div class="nc-icon">🏠</div>
<div class="nc-text">
<strong>PAGE 18 · 유증을 원인으로 하는 소유권이전등기</strong>
<span>유언장이 유효하다면 다음 단계 — 유증을 원인으로 부동산 소유권이전등기를 신청하는 절차와 서류를 안내합니다.</span>
</div>
<div class="nc-arrow">›</div>
</div>
</section>
<!-- ===== CTA ===== -->
<div class="cta-section">
<h2>유언장이 유효한지 확인이 필요하신가요?</h2>
<p>방식 불비로 유언이 무효가 되면 법정상속으로 처리됩니다.<br/>유언장 작성 전 상담부터, 발견된 유언장의 효력 검토까지 도와드립니다.</p>
<a class="cta-btn" href="tel:0000000000">📞 전화 상담 예약</a>
<a class="cta-btn outline" href="#">💬 온라인 문의</a>
</div>
</div><!-- /container -->
<!-- ===== 면책 ===== -->`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-18', title: '유증등기',
        meta: '유언장으로 부동산을 받았다면? — 유증 등기의 절차와 핵심 쟁점',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ────────────────────── HEADER ────────────────────── -->

<!-- ────────────────────── 1. 이런분께 ────────────────────── -->
<section>

<p class="sec-label">Section 01</p>
<h2 class="sec-title">이런 분께 필요한 안내입니다</h2>
<div class="target-grid">
<div class="target-card"><strong>유언장에서 부동산을 받은 분</strong>돌아가신 분(유증자)이 남긴 유언장에 부동산 상속을 받도록 지정되었으나, 등기 절차를 모르는 수증자</div>
<div class="target-card"><strong>상속인이 유증 이행을 거부하는 경우</strong>수증자인데 상속인들이 등기에 협조하지 않아 단독으로 진행하고 싶은 분</div>
<div class="target-card"><strong>유언집행자로 지정된 분</strong>유언장에서 유언집행자로 지정되어 유증 등기를 처리해야 하는 분</div>
<div class="target-card"><strong>포괄유증과 특정유증을 구분하고 싶은 분</strong>"재산 전부를 준다"와 "특정 아파트를 준다"는 등기 방법이 다릅니다</div>
</div>
</div>
</section>
<!-- ────────────────────── 2. 핵심요약 ────────────────────── -->
<section>

<p class="sec-label">Section 02</p>
<h2 class="sec-title">핵심 요약 — 한눈에 보기</h2>
<div class="summary-box">
<h3>유증 등기의 핵심 원칙</h3>
<div class="summary-row"><span class="s-key">등기원인</span><span class="s-val">"○년 ○월 ○일 유증" — 원인일자는 유증자(유언자)의 <strong>사망일</strong></span></div>
<div class="summary-row"><span class="s-key">신청방법</span><span class="s-val">수증자(등기권리자) + 유언집행자 또는 상속인(등기의무자) <strong>공동신청 원칙</strong></span></div>
<div class="summary-row"><span class="s-key">선행등기</span><span class="s-val">상속등기 없이 유증자 → 수증자로 직접 이전 가능 (상속등기가 이미 된 경우는 상속인 → 수증자 이전)</span></div>
<div class="summary-row"><span class="s-key">유언검인</span><span class="s-val">공정증서 유언 외에는 가정법원 <strong>검인 필요</strong> (검인조서 등본 첨부)</span></div>
<div class="summary-row"><span class="s-key">기간 제한</span><span class="s-val">없음 — 단, 채무超過 우려 시 유증 포기는 유언자 사망 후 3개월 내 고려</span></div>
</div>
<!-- 포괄유증 vs 특정유증 비교표 -->
<table class="legacy-compare">
<colgroup><col style="width:20%"/><col style="width:40%"/><col style="width:40%"/></colgroup>
<thead>
<tr><th>구분</th><th><span class="tag-포괄">포괄적 유증</span></th><th><span class="tag-특정">특정적 유증</span></th></tr>
</thead>
<tbody>
<tr><td>의의</td><td>재산 전부 또는 일정 비율을 유증 (예: "재산의 1/2을 ○○에게")</td><td>특정 재산만 유증 (예: "서울 ○○ 아파트를 ○○에게")</td></tr>
<tr><td>법적 효력</td><td>물권적 효력 (민법 §1078) — 상속인과 동일 권리의무 취득, 사망과 동시에 취득</td><td>채권적 효력 — 이행청구권만 취득, 별도 이전행위 필요</td></tr>
<tr><td>등기 의무자</td><td>유언집행자 또는 상속인 (공동신청)</td><td>유언집행자 또는 상속인 (공동신청)</td></tr>
<tr><td>미등기 부동산</td><td>수증자 명의로 직접 보존등기 가능 (부동산등기법 §65)</td><td>먼저 상속인 명의 보존등기 후 → 수증자에게 이전</td></tr>
<tr><td>농지취득자격증명</td><td>불필요 (예규 제1415호)</td><td>상속인이 수증자이면 불필요, 제3자이면 필요</td></tr>
<tr><td>유류분 침해</td><td colspan="2">등기관은 형식적 심사권만 가지므로 유류분 침해 여부와 무관하게 등기 수리 (선례 2-329)</td></tr>
</tbody>
</table>
</div>
</section>
<!-- ────────────────────── 3. 절차흐름도 ────────────────────── -->
<section>

<p class="sec-label">Section 03</p>
<h2 class="sec-title">절차 흐름도</h2>
<div class="flow-wrap">
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">1</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">유언자 사망 — 유언 내용 확인</div>
<div class="flow-desc">유언의 존재와 방식(자필·공정증서 등)을 확인합니다. 공정증서 유언이 아니면 검인 절차가 필요합니다.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">2</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">유언 검인 (공정증서 유언은 생략)</div>
<div class="flow-desc">자필증서·녹음·비밀증서 유언 → 가정법원에 검인 신청 → 검인기일 출석 → 검인조서 등본 수령. 구수증서는 검인심판서 등본 첨부.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">3</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">유언집행자 확정</div>
<div class="flow-desc">유언에 유언집행자가 지정되어 있으면 그 사람이 집행. 없으면 상속인 전원이 법정 유언집행자. 필요시 가정법원에 선임 신청.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">4</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">서류 준비 — 수증자 · 집행자 공동 준비</div>
<div class="flow-desc">등기신청서, 유언장(검인조서 포함), 유언집행자 증명 서류, 수증자 주민등록등본, 취득세 영수증 등을 준비합니다.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">5</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">취득세 납부 (시·군·구청)</div>
<div class="flow-desc">유증 취득 — 증여세율(3.5%) 적용. 주택 수·조정지역 여부에 따라 중과세율 적용 가능. 농어촌특별세·지방교육세 병과.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">6</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">등기 신청 — 관할 등기소 접수</div>
<div class="flow-desc">수증자와 유언집행자(또는 상속인)가 공동신청. 방문 또는 전자신청 가능. 이미 상속등기가 된 경우 상속인이 의무자로 신청.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">7</div>
</div>
<div class="flow-body">
<div class="flow-title">등기 완료 — 등기사항증명서 확인</div>
<div class="flow-desc">등기관 심사 후 완료. 등기사항증명서에 소유권이전 내용과 원인("○년 ○월 ○일 유증") 기재 확인.</div>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 4. 단계별 상세 ────────────────────── -->
<section>

<p class="sec-label">Section 04</p>
<h2 class="sec-title">단계별 상세 안내</h2>
<!-- STEP 1: 유언집행자 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">1</div>
<h3>유언집행자 — 누가 등기의무자가 되는가</h3>
</div>
<p style="font-size:14px;color:#444;margin-bottom:14px;">유증 등기에서 등기의무자는 <strong>유언집행자</strong>입니다. 유언집행자가 없거나 선임되지 않은 경우 상속인 전원이 법정 유언집행자로서 의무자가 됩니다.</p>
<div class="exec-grid">
<div class="exec-card">
<div class="exec-type">① 지정유언집행자</div>
<div class="exec-name">유언으로 지정</div>
<div class="exec-desc">유언장에서 직접 지정된 집행자. 제3자도 가능. 별도 법원 선임 불필요.</div>
<div class="exec-note">취임 거부·사망 시 가정법원에 선임 신청</div>
</div>
<div class="exec-card">
<div class="exec-type">② 법정유언집행자</div>
<div class="exec-name">상속인 전원</div>
<div class="exec-desc">유언집행자 지정이 없는 경우 상속인 전원이 집행. 과반수 동의로 신청 불가 — 전원 참여 원칙.</div>
<div class="exec-note">상속인이 수증자인 경우도 동일</div>
</div>
<div class="exec-card">
<div class="exec-type">③ 선임유언집행자</div>
<div class="exec-name">가정법원 선임</div>
<div class="exec-desc">집행자 부재 또는 결격 시 이해관계인이 가정법원에 선임 신청. 심판서 등본이 자격 증명.</div>
<div class="exec-note">선임심판서 등본을 첨부정보로 제출</div>
</div>
</div>
<div class="cause-box" style="margin-top:14px;">
<h4>📌 유언집행자 수인(數人)인 경우 — 예규 제1024호, 선례 5-329</h4>
<div class="cause-row"><span class="c-label">원칙</span><span>유언집행자 전원이 공동으로 직무 수행</span></div>
<div class="cause-row"><span class="c-label">예외</span><span>유언에서 과반수 동의로 결정하도록 정한 경우, 과반수 이상의 동의를 증명하면 과반수만으로 신청 가능</span></div>
</div>
</div>
<!-- STEP 2: 검인 절차 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">2</div>
<h3>유언 검인 — 방식별 처리</h3>
</div>
<p style="font-size:14px;color:#444;margin-bottom:14px;">유언의 방식에 따라 검인 필요 여부와 첨부 서류가 달라집니다. 검인 없이 등기를 신청하면 <strong>각하 사유</strong>가 됩니다.</p>
<table class="confirm-table">
<thead>
<tr><th>유언 방식</th><th>검인 필요 여부</th><th>첨부 서류</th></tr>
</thead>
<tbody>
<tr><td>자필증서 유언</td><td><span class="badge-yes">검인 필요</span></td><td>가정법원 검인조서 등본</td></tr>
<tr><td>녹음 유언</td><td><span class="badge-yes">검인 필요</span></td><td>가정법원 검인조서 등본</td></tr>
<tr><td>비밀증서 유언</td><td><span class="badge-yes">검인 필요</span></td><td>가정법원 검인조서 등본</td></tr>
<tr><td>공정증서 유언</td><td><span class="badge-no">검인 불필요</span></td><td>공정증서 원본 또는 정본</td></tr>
<tr><td>구수증서 유언</td><td><span class="badge-yes">검인심판 필요</span></td><td>검인심판서 등본 (확정증명서 포함)</td></tr>
</tbody>
</table>
<div class="cause-box" style="margin-top:14px;">
<h4>⚠️ 검인의 의미</h4>
<div class="cause-row"><span class="c-label">검인이란</span><span>유언의 위변조를 방지하기 위한 보존·확인 절차. 유언의 유효성을 법원이 인정하는 것이 아님</span></div>
<div class="cause-row"><span class="c-label">등기관 심사</span><span>검인 여부만 형식적으로 심사 — 유언이 실질적으로 유효한지는 심사하지 않음</span></div>
</div>
</div>
<!-- STEP 3: 등기원인 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">3</div>
<h3>등기원인과 원인일자</h3>
</div>
<div class="cause-box">
<h4>등기원인 기재 방법</h4>
<div class="cause-row"><span class="c-label">등기원인</span><span>"○년 ○월 ○일 유증"</span></div>
<div class="cause-row"><span class="c-label">원인일자 원칙</span><span>유증자(유언자)의 <strong>사망일</strong></span></div>
<div class="cause-row"><span class="c-label">조건부 유증</span><span>조건이 붙은 유증이라면 — <strong>조건 성취일</strong></span></div>
<div class="cause-row"><span class="c-label">등기필정보</span><span>유증자가 권리를 취득할 당시의 등기필정보 제공 (예규 제1024호)</span></div>
</div>
</div>
<!-- STEP 4: 선행 상속등기 여부 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">4</div>
<h3>상속등기 선행 여부 — 두 가지 경우</h3>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
<div style="background:#e8f0fb;border-radius:8px;padding:16px 16px;font-size:14px;">
<strong style="display:block;color:var(--navy);margin-bottom:8px;">📌 상속등기 전 (원칙)</strong>
          유증자 명의 그대로인 경우<br/><br/>
<span style="font-weight:700;">유증자 → 수증자</span>로 직접 소유권이전등기 신청.<br/>
          상속인 명의로 상속등기 불필요.
        </div>
<div style="background:#fef3e0;border-radius:8px;padding:16px 16px;font-size:14px;">
<strong style="display:block;color:#7a4000;margin-bottom:8px;">⚠️ 상속등기 완료 후</strong>
          이미 상속인 명의로 상속등기가 된 경우<br/><br/>
<span style="font-weight:700;">상속인 → 수증자</span>로 이전등기 신청.<br/>
          상속인이 의무자로서 신청에 참여.
        </div>
</div>
</div>
<!-- STEP 5: 미등기 부동산 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">5</div>
<h3>미등기 부동산 — 포괄·특정유증 처리 차이</h3>
</div>
<div class="unreg-grid">
<div class="unreg-card 포괄">
<strong>포괄적 유증 (물권적 효력)</strong>
          수증자는 상속인과 동일한 지위 취득.<br/>
          → <strong>수증자 명의로 직접 보존등기 가능</strong><br/>
          (부동산등기법 제65조 1호)
        </div>
<div class="unreg-card 특정">
<strong>특정적 유증 (채권적 효력)</strong>
          수증자는 이행청구권만 가짐.<br/>
          → 먼저 <strong>상속인 명의로 보존등기</strong> 후<br/>
          수증자에게 이전등기 신청
        </div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 5. 준비서류 ────────────────────── -->
<section>

<p class="sec-label">Section 05</p>
<h2 class="sec-title">준비 서류</h2>
<div class="doc-category">
<div class="doc-cat-title">공통 필수 서류</div>
<div class="doc-grid">
<div class="doc-card">
<div class="doc-name">등기신청서 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">등기소 양식 또는 대법원 인터넷등기소 작성</div>
</div>
<div class="doc-card">
<div class="doc-name">유언장 원본 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">공정증서는 정본 또는 원본; 기타 방식은 원본</div>
</div>
<div class="doc-card">
<div class="doc-name">유증자(유언자) 기본증명서·가족관계증명서 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">사망 사실 확인용; 상세 기본증명서(사망 기재) 필요</div>
</div>
<div class="doc-card">
<div class="doc-name">수증자 주민등록등본 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">현재 주소 및 주민등록번호 확인</div>
</div>
<div class="doc-card">
<div class="doc-name">취득세 납부 영수증 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">시·군·구청에서 납부 후 납부확인서 수령</div>
</div>
<div class="doc-card">
<div class="doc-name">등기필정보 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">유증자가 소유권을 취득할 당시의 등기필정보 (예규 제1024호)</div>
</div>
</div>
</div>
<div class="doc-category">
<div class="doc-cat-title">검인 관련 서류 (방식별)</div>
<div class="doc-grid">
<div class="doc-card">
<div class="doc-name">검인조서 등본 <span class="doc-req req-조건">자필·녹음·비밀</span></div>
<div class="doc-note">가정법원 검인 절차 완료 후 수령. 원본대조필 날인 필요</div>
</div>
<div class="doc-card">
<div class="doc-name">검인심판서 등본 + 확정증명서 <span class="doc-req req-조건">구수증서</span></div>
<div class="doc-note">가정법원 검인심판 확정 후 수령</div>
</div>
</div>
</div>
<div class="doc-category">
<div class="doc-cat-title">유언집행자 관련 서류</div>
<div class="doc-grid">
<div class="doc-card">
<div class="doc-name">선임심판서 등본 <span class="doc-req req-조건">선임집행자</span></div>
<div class="doc-note">가정법원 유언집행자 선임 심판서; 확정증명서 포함</div>
</div>
<div class="doc-card">
<div class="doc-name">인감증명서 <span class="doc-req req-필수">집행자</span></div>
<div class="doc-note">유언집행자 또는 상속인(법정집행자)의 인감증명서; 매도용 아님</div>
</div>
<div class="doc-card">
<div class="doc-name">상속인 전원의 인감증명서 <span class="doc-req req-조건">법정집행자</span></div>
<div class="doc-note">집행자 미지정 시 상속인 전원 참여; 전원 인감 필요</div>
</div>
<div class="doc-card">
<div class="doc-name">농지취득자격증명 <span class="doc-req req-조건">특정유증+제3자</span></div>
<div class="doc-note">포괄유증·상속인에게의 특정유증은 불필요 (예규 제1415호); 제3자에 대한 특정유증 시 농지라면 필요</div>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 6. 비용 안내 ────────────────────── -->
<section>

<p class="sec-label">Section 06</p>
<h2 class="sec-title">비용 안내</h2>
<table class="fee-table">
<thead><tr><th>항목</th><th>기준</th><th>비고</th></tr></thead>
<tbody>
<tr><td>취득세</td><td>과세표준의 3.5% (증여세율)</td><td>유증은 증여세율 적용; 1주택 이하 비조정지역 기준. 중과 주의</td></tr>
<tr><td>지방교육세</td><td>취득세의 20%</td><td>취득세와 동시 납부</td></tr>
<tr><td>농어촌특별세</td><td>취득세의 10% (감면 시 20%)</td><td>해당하는 경우</td></tr>
<tr><td>등록면허세</td><td>0원</td><td>소유권이전은 취득세에 통합, 별도 없음</td></tr>
<tr><td>교육세(지방)</td><td>취득세 병과분에 포함</td><td>-</td></tr>
<tr><td>국민주택채권 매입</td><td>시가표준액 × 요율</td><td>주택 규모·지역에 따라 요율 차이</td></tr>
<tr><td>등기신청수수료</td><td>15,000원 (대법원규칙)</td><td>인터넷 신청 시 일부 감면</td></tr>
<tr><td>가정법원 검인 신청</td><td>인지대 1,000원 + 송달료</td><td>검인이 필요한 유언 방식에 해당 시</td></tr>
<tr><td>법무사 보수</td><td>대한법무사협회 보수규정</td><td>부동산 가액에 따라 산정</td></tr>
</tbody>
</table>
<p class="fee-note">※ 취득세율은 취득 시점과 주택 보유 수, 조정대상지역 여부에 따라 달라질 수 있습니다.<br/>
    ※ 유증을 받는 수증자가 상속인이 아닌 제3자인 경우, 상속이 아닌 일반 취득으로 간주되어 별도 세율이 적용될 수 있습니다.</p>
</div>
</section>
<!-- ────────────────────── 9. Q&A ────────────────────── -->
<section>

<p class="sec-label">Section 09</p>
<h2 class="sec-title">자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">유언장에 "내 재산 전부를 ○○에게 준다"고 했는데, 어떻게 다른가요?</div>
<div class="qna-a">이는 <strong>포괄적 유증</strong>으로, 수증자는 유언자 사망과 동시에 상속인과 동일한 권리와 의무를 취득합니다(민법 제1078조). 특정 부동산이 아닌 재산 전부나 일정 비율을 받는 것입니다. 반면 "특정 아파트만 준다"고 하면 특정적 유증으로, 별도의 이전 절차가 필요한 채권적 청구권을 취득합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">상속인들이 등기에 도장을 찍어주지 않습니다. 어떻게 해야 하나요?</div>
<div class="qna-a">유언장에 유언집행자가 지정되어 있다면 상속인의 협조 없이 유언집행자와 수증자가 공동신청할 수 있습니다. 유언집행자가 없는데 상속인들이 거부한다면, 법원에 유언집행자 선임 신청을 하거나, 상속인들을 상대로 등기절차 이행 소송을 제기하는 방법이 있습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">유언장이 자필로 작성된 것인데, 공증을 받지 않았습니다. 사용할 수 있나요?</div>
<div class="qna-a">자필증서 유언은 공증이 필요 없습니다. 다만 가정법원에서 <strong>검인</strong> 절차를 받아야 합니다. 검인은 유언장의 위변조 방지를 위한 것으로, 검인 후 받은 검인조서 등본을 등기 신청 시 첨부해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">유증자가 사망하기 전에 먼저 등기할 수 있나요?</div>
<div class="qna-a">아닙니다. 유증은 유언자의 <strong>사망</strong>으로 효력이 발생합니다. 유언자가 생존 중에는 언제든지 유언을 철회할 수 있으므로, 사망 전에는 유증을 원인으로 하는 등기를 신청할 수 없습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">유증을 포기하고 싶습니다. 어떻게 해야 하나요?</div>
<div class="qna-a">수증자는 유증을 포기할 수 있습니다(민법 제1074조). 단, 포기는 유언자의 사망 후에 해야 합니다. 특정적 유증의 포기는 의무자에게 의사표시만 하면 되지만, 포괄적 유증의 경우 상속 포기에 준하는 효과가 있어 법원에 신고해야 합니다. 유증받은 재산에 채무가 과다한 경우 포기를 검토하십시오.</div>
</div>
<div class="qna-item">
<div class="qna-q">유증받은 부동산에 근저당권이 설정되어 있습니다. 어떻게 되나요?</div>
<div class="qna-a">유증은 유언자 사망 당시 상태 그대로 이전됩니다. 근저당권이 설정된 부동산을 유증받으면 해당 채무도 같이 인수하는 것과 마찬가지이므로, 유증을 받기 전에 부동산등기사항증명서를 발급받아 담보 설정 현황을 꼭 확인하십시오. 채무 부담이 크다면 유증 포기도 고려해야 합니다.</div>
</div>
</div>
</section>
<!-- ────────────────────── 7. 판례 ────────────────────── -->
<section>

<p class="sec-label">Section 07</p>
<h2 class="sec-title">관련 판례 및 선례</h2>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제5-327호</div>
<div class="ruling-summary">유증을 원인으로 하는 소유권이전등기를 신청할 때는 수증자와 유언집행자(유언집행자가 없는 때에는 상속인)가 공동신청하여야 하며, 수증자가 단독으로 신청할 수 없다. 등기원인은 "유증"이고, 등기원인일자는 유증자의 사망일이다.</div>
<span class="ruling-point">공동신청 원칙 · 원인일자</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제6-249호</div>
<div class="ruling-summary">유언집행자가 있음에도 수증자가 상속인을 등기의무자로 하여 단독으로 등기신청을 하는 것은 허용되지 않는다. 유언집행자가 존재하는 경우에는 반드시 유언집행자가 의무자로 참여하여야 한다.</div>
<span class="ruling-point">유언집행자 우선 원칙</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제5-329호</div>
<div class="ruling-summary">유언집행자가 수인인 경우, 유언에서 과반수의 결의로 직무를 처리하도록 정하였다면 과반수 이상의 유언집행자가 동의하였음을 증명하는 서면을 첨부하여 과반수 이상이 신청인으로 등기신청을 할 수 있다.</div>
<span class="ruling-point">복수 집행자 처리</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제2-329호</div>
<div class="ruling-summary">유증 등기를 신청받은 등기관은 당해 유증이 유류분을 침해하는지 여부에 대하여 심사할 권한이 없으므로, 유류분을 침해하는 유증이라 하더라도 등기 신청이 적법한 이상 이를 수리하여야 한다.</div>
<span class="ruling-point">유류분 침해와 등기수리</span>
</div>
</div>
</section>
<!-- ────────────────────── 8. 주의사항 ────────────────────── -->
<section>

<p class="sec-label">Section 08</p>
<h2 class="sec-title">반드시 확인할 주의사항</h2>
<div class="warn-list">
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>검인 없는 유언장으로 등기 불가</strong>
<p>공정증서 유언이 아닌데 검인을 받지 않은 유언장으로 등기 신청을 하면 각하됩니다. 검인 기일에는 원본 유언장을 반드시 지참해야 하며, 검인조서 등본을 수령하는 데 수 주가 걸릴 수 있으므로 일정을 미리 계획하십시오.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>취득세는 증여세율(3.5%) 적용 — 상속세율이 아님</strong>
<p>유증은 법적으로 상속이 아닌 증여와 유사하게 취급되어 취득세율 3.5%가 적용됩니다. 다주택자·조정대상지역에서는 중과세율이 적용될 수 있으므로 납부 전 세무사와 상담하는 것이 권장됩니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>유류분 침해 유증도 등기는 수리 — 그러나 분쟁 위험 존재</strong>
<p>등기관은 유류분 침해 여부를 심사하지 않으므로 일단 등기는 됩니다. 그러나 다른 상속인이 유류분반환청구 소송을 제기하면 나중에 등기가 말소될 수 있습니다. 유류분 문제가 있는 경우 법적 조언을 먼저 구하십시오.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>특정유증에서 농지는 농지취득자격증명 필요</strong>
<p>제3자에 대한 특정유증으로 농지를 받는 경우, 농지취득자격증명을 발급받아 첨부해야 합니다(예규 제1415호). 단, 포괄유증이나 상속인에 대한 특정유증은 불필요합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>상속인이 협조를 거부해도 유언집행자가 있으면 단독 가능</strong>
<p>상속인들이 등기에 협조하지 않더라도, 유언집행자가 지정되어 있다면 수증자와 유언집행자가 공동으로 신청할 수 있습니다. 유언집행자도 없다면 수증자가 상속인을 상대로 협조 의무 이행을 구하는 소송을 제기해야 합니다.</p>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 10. 다음으로 ────────────────────── -->
<section>

<p class="sec-label">Section 10</p>
<h2 class="sec-title">다음으로 확인할 내용</h2>
<div class="next-links">
<a class="next-card" href="상속_17_유언효력.html">
<div class="next-dir">← 이전 페이지</div>
<div class="next-title">유언의 방식과 효력</div>
<div class="next-desc">이 유언장이 유효한가? 5가지 방식별 요건 확인</div>
</a>
<a class="next-card" href="#">
<div class="next-dir">다음 페이지 →</div>
<div class="next-title">상속재산 분할과 등기</div>
<div class="next-desc">협의분할·조정분할·심판분할 이후 등기 절차</div>
</a>
</div>
</div>
</section>
<!-- ────────────────────── 11. CTA ────────────────────── -->
<section>


</section>
<!-- ────────────────────── 면책 ────────────────────── -->
<div class="disclaimer">
  본 페이지는 일반적인 법률 정보 제공을 목적으로 작성되었으며, 개별 사안에 대한 법률 조언이 아닙니다.<br/>
  구체적인 사안은 반드시 법무사 또는 변호사와 상담하시기 바랍니다.<br/>
  법령 및 예규는 개정될 수 있으므로 최신 정보를 확인하십시오.<br/>
  © 2025 법무사 사무소. All rights reserved.
</div>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-19', title: '실종 후 등기',
        meta: '오랫동안 연락이 끊긴 가족의 재산 — 실종선고와 상속등기의 모든 것',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ────────────────────── HEADER ────────────────────── -->

<!-- ────────────────────── 1. 이런분께 ────────────────────── -->
<section>

<p class="sec-label">Section 01</p>
<h2 class="sec-title">이런 분께 필요한 안내입니다</h2>
<div class="target-grid">
<div class="target-card"><strong>수십 년째 연락이 끊긴 가족의 부동산이 있는 경우</strong>부재자가 실종선고를 받아 사망으로 간주되었고, 그 명의의 부동산에 대해 상속등기를 해야 하는 분</div>
<div class="target-card"><strong>실종선고심판을 받았거나 진행 중인 경우</strong>가정법원에서 실종선고심판을 받은 뒤 등기 절차를 어떻게 진행해야 하는지 모르는 분</div>
<div class="target-card"><strong>이미 상속등기가 완료된 후 실종선고가 난 경우</strong>공동상속인 중 1인이 나중에 실종선고심판을 받아 등기를 경정해야 하는 상황의 상속인</div>
<div class="target-card"><strong>실종선고 취소 후 등기 문제가 생긴 경우</strong>실종선고를 받은 사람이 살아 있는 것으로 밝혀져 실종선고가 취소된 경우 등기 처리가 궁금한 분</div>
</div>
</div>
</section>
<!-- ────────────────────── 2. 핵심요약 ────────────────────── -->
<section>

<p class="sec-label">Section 02</p>
<h2 class="sec-title">핵심 요약 — 한눈에 보기</h2>
<div class="summary-box">
<h3>실종선고 등기의 핵심 원칙</h3>
<div class="summary-row"><span class="s-key">등기원인</span><span class="s-val">"상속" — 등기원인은 실종선고가 아닌 <strong>상속</strong>으로 기재</span></div>
<div class="summary-row"><span class="s-key">원인일자</span><span class="s-val"><strong>실종기간 만료일</strong> (민법 제28조 — 실종기간 만료 시 사망으로 간주)</span></div>
<div class="summary-row"><span class="s-key">등기기록 표시</span><span class="s-val">"○년 ○월 ○일 재산상속(○년 ○월 ○일 실종선고)" 형식으로 병기 (예규 제57호)</span></div>
<div class="summary-row"><span class="s-key">신청인</span><span class="s-val">상속인이 단독신청 (일반 상속등기와 동일)</span></div>
<div class="summary-row"><span class="s-key">추가 첨부서류</span><span class="s-val">실종선고심판정본 — 단, 가족관계등록부가 이미 정리된 경우 불필요 (선례 5-302)</span></div>
<div class="summary-row"><span class="s-key">기간 제한</span><span class="s-val">없음</span></div>
</div>
<!-- 보통실종 vs 특별실종 -->
<div class="miss-grid">
<div class="miss-card ordinary">
<div class="miss-type ordinary">보통실종 (민법 제27조 제1항)</div>
<div class="miss-name">일반 부재 — 5년</div>
<div class="miss-row"><span class="miss-label">기간</span><span>생사불명 <strong>5년</strong></span></div>
<div class="miss-row"><span class="miss-label">사유</span><span>원인 없이 오랫동안 연락·소재 불명</span></div>
<div class="miss-row"><span class="miss-label">사망간주</span><span>실종기간(5년) 만료 시점</span></div>
<div class="miss-row"><span class="miss-label">신청권자</span><span>이해관계인 또는 검사</span></div>
</div>
<div class="miss-card special">
<div class="miss-type special">특별실종 (민법 제27조 제2항)</div>
<div class="miss-name">위난 상황 — 1년</div>
<div class="miss-row"><span class="miss-label">기간</span><span>위난 종료 후 <strong>1년</strong></span></div>
<div class="miss-row"><span class="miss-label">사유</span><span>전쟁, 선박 침몰, 항공기 추락, 기타 사망 원인이 될 위난</span></div>
<div class="miss-row"><span class="miss-label">사망간주</span><span>위난이 종료한 후 1년의 만료 시점</span></div>
<div class="miss-row"><span class="miss-label">신청권자</span><span>이해관계인 또는 검사</span></div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 3. 절차흐름도 ────────────────────── -->
<section>

<p class="sec-label">Section 03</p>
<h2 class="sec-title">절차 흐름도</h2>
<div class="flow-wrap">
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">1</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">실종선고 심판 확정 (가정법원)</div>
<div class="flow-desc">이해관계인(상속인 등) 또는 검사가 가정법원에 실종선고를 청구 → 공시최고 → 심판 → 확정. 심판정본과 확정증명서를 수령합니다.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">2</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">가족관계등록부(구 호적) 정리 여부 확인</div>
<div class="flow-desc">실종선고에 따라 가족관계등록부가 정리되었는지 확인합니다. 정리된 경우 심판정본 첨부 불필요(선례 5-302). 미정리 시에는 심판정본 첨부 필요.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">3</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">상속인 범위 및 상속분 확정</div>
<div class="flow-desc">실종기간 만료일(사망간주일)을 기준으로 상속인 범위 확정. 실종선고가 신민법 시행 후라면 신민법 상속규정 적용(민법 부칙 제25조).</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">4</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">서류 준비 — 상속인 단독 신청 서류 일체</div>
<div class="flow-desc">일반 상속등기 서류 + 실종선고심판정본(가족관계등록부 미정리 시). 등기원인일자(실종기간만료일)를 정확히 기재.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">5</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">취득세 납부 (시·군·구청)</div>
<div class="flow-desc">상속으로 인한 취득이므로 상속 취득세율 적용 (무주택 1주택: 0.8~2.8%, 무주택 2주택 이상·공시가 수억 초과 등에 따라 달라짐). 납부확인서 수령.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">6</div>
<div class="flow-arrow"></div>
</div>
<div class="flow-body">
<div class="flow-title">등기 신청 — 관할 등기소 접수</div>
<div class="flow-desc">부동산 소재지 관할 등기소에 접수. 방문 또는 전자신청. 등기원인: "상속" / 등기원인일자: 실종기간 만료일.</div>
</div>
</div>
<div class="flow-step">
<div class="flow-node">
<div class="flow-circle">7</div>
</div>
<div class="flow-body">
<div class="flow-title">등기 완료 — 등기사항증명서 확인</div>
<div class="flow-desc">등기기록에 "○년 ○월 ○일 재산상속(○년 ○월 ○일 실종선고)" 형식으로 기재됨을 확인합니다.</div>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 4. 단계별 상세 ────────────────────── -->
<section>

<p class="sec-label">Section 04</p>
<h2 class="sec-title">단계별 상세 안내</h2>
<!-- STEP 1: 실종선고 절차 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">1</div>
<h3>실종선고 심판 — 가정법원 절차</h3>
</div>
<p style="font-size:14px;color:#444;margin-bottom:16px;">실종선고는 가정법원의 심판으로 확정됩니다. 등기를 하기 위해서는 심판정본과 확정증명서가 필요합니다.</p>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;">
<div style="background:var(--proc-bg);border-radius:8px;padding:14px 12px;text-align:center;font-size:13px;">
<div style="font-weight:700;color:var(--navy);margin-bottom:6px;">① 청구</div>
<div style="color:#444;">이해관계인<br/>또는 검사가<br/>가정법원에<br/>청구</div>
</div>
<div style="background:var(--proc-bg);border-radius:8px;padding:14px 12px;text-align:center;font-size:13px;">
<div style="font-weight:700;color:var(--navy);margin-bottom:6px;">② 공시최고</div>
<div style="color:#444;">6개월 이상<br/>공시최고 기간<br/>부재자에게<br/>출현 기회 부여</div>
</div>
<div style="background:var(--proc-bg);border-radius:8px;padding:14px 12px;text-align:center;font-size:13px;">
<div style="font-weight:700;color:var(--navy);margin-bottom:6px;">③ 심판</div>
<div style="color:#444;">공시최고 기간<br/>만료 후 부재자<br/>미출현 시<br/>실종선고 심판</div>
</div>
<div style="background:var(--proc-bg);border-radius:8px;padding:14px 12px;text-align:center;font-size:13px;">
<div style="font-weight:700;color:var(--navy);margin-bottom:6px;">④ 확정</div>
<div style="color:#444;">심판 확정 후<br/>심판정본 +<br/>확정증명서<br/>수령</div>
</div>
</div>
<div style="background:#e8f5e9;border-left:4px solid var(--case-bd);border-radius:6px;padding:14px 16px;font-size:13px;color:#333;">
<strong style="display:block;color:var(--navy);margin-bottom:6px;">📌 실종선고 효과 소급 (민법 제28조)</strong>
        실종선고를 받은 자는 <strong>실종기간이 만료한 때</strong>에 사망한 것으로 봅니다. 법원의 심판이 난 날이 아니라, 실종기간 만료일에 사망한 것으로 소급 적용됩니다.
      </div>
</div>
<!-- STEP 2: 등기원인 기재례 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">2</div>
<h3>등기원인과 등기기록 기재례 (예규 제57호)</h3>
</div>
<p style="font-size:14px;color:#444;margin-bottom:14px;">실종선고로 인한 상속등기는 등기원인을 "상속"으로, 원인일자를 실종기간만료일로 기재하되, 실종선고일을 괄호 안에 병기합니다.</p>
<div class="record-box">
<h4>등기기록 기재례 (예규 제57호)</h4>
<div class="record-example">
          등기원인: 1959년 1월 5일 재산상속<br/>
          (괄호 병기: 1964년 1월 5일 실종선고)
        </div>
<div class="record-note">
          → 1959. 1. 5.이 실종기간 만료일(사망간주일), 1964. 1. 5.이 법원의 실종선고일<br/>
          → 등기원인일자는 항상 실종기간 만료일, 실종선고일은 괄호 안 부기
        </div>
</div>
<div style="background:var(--summary-bg);border-radius:8px;padding:16px;margin-top:12px;font-size:14px;">
<strong style="display:block;color:var(--navy);margin-bottom:8px;">구법·신법 적용 원칙 (민법 부칙 제25조, 선례 8-185)</strong>
        실종기간이 <strong>구법(개정 전 민법) 시행 기간에 만료</strong>된 경우라도, <strong>실종선고가 신법 시행 이후</strong>에 이루어졌다면 → 상속순위·상속분 등은 <strong>신법(현행 민법)</strong>을 적용합니다.<br/><br/>
        예: 1955. 7. 15. 실종기간 만료 → 1979. 9. 16. 실종선고<br/>
        → 등기원인일자: 1955. 7. 15. (구법 시행기간 중 만료일)<br/>
        → 상속인·상속분 결정: 현행 민법(1979년 당시 시행 민법) 적용
      </div>
</div>
<!-- STEP 3: 첨부정보 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">3</div>
<h3>실종선고심판정본 — 첨부 여부 판단</h3>
</div>
<p style="font-size:14px;color:#444;margin-bottom:14px;">일반 상속등기의 첨부서류 외에 <strong>실종선고심판정본</strong>이 추가로 필요합니다. 다만 가족관계등록부가 이미 정리된 경우에는 예외입니다.</p>
<div class="attach-split">
<div class="attach-card need">
<strong>📄 심판정본 필요 — 원칙</strong>
          가족관계등록부(구 호적)에 실종선고 사실이 아직 정리되지 않은 경우.<br/><br/>
          실종선고심판정본 + 확정증명서를 첨부정보로 제공.
        </div>
<div class="attach-card noneed">
<strong>✔️ 심판정본 불필요 — 예외 (선례 5-302)</strong>
          실종선고에 따라 가족관계등록부(구 호적부)가 이미 정리된 경우.<br/><br/>
          가족관계증명서 등에서 실종 사실이 확인되므로 심판정본 별도 제출 불필요.
        </div>
</div>
</div>
<!-- STEP 4: 실종선고 취소 시 처리 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">4</div>
<h3>실종선고 취소 — 생존 사실이 밝혀진 경우</h3>
</div>
<p style="font-size:14px;color:#444;margin-bottom:14px;">실종선고를 받은 사람이 살아 있거나 실종선고와 다른 시점에 사망한 것이 밝혀지면 가정법원에 실종선고 취소 심판을 청구할 수 있습니다(민법 제29조).</p>
<div class="cancel-flow">
<h4>⚠️ 실종선고 취소 시 등기 처리</h4>
<div class="cancel-step"><div class="cs-num">1</div><span>가정법원에 실종선고 취소 심판 청구 → 확정</span></div>
<div class="cancel-step"><div class="cs-num">2</div><span>실종선고를 직접원인으로 상속받은 자(또는 그 상속인)에게 재산 반환 청구 가능 (민법 제29조)</span></div>
<div class="cancel-step"><div class="cs-num">3</div><span>반환 청구 범위: 현재 이익이 있는 한도 내에서 반환 (선의 취득자는 이익 현존 한도)</span></div>
<div class="cancel-step"><div class="cs-num">4</div><span>제3자 보호: 실종선고를 믿고 <strong>선의로 재산을 취득한 제3자</strong>에게는 취소 효력 대항 불가</span></div>
</div>
<div style="font-size:13px;color:#555;margin-top:10px;line-height:1.6;">
        ※ 실종선고 취소 후 말소등기 또는 재이전등기가 필요한 경우, 구체적 상황에 따라 처리 방법이 달라지므로 법무사 상담을 받는 것이 권장됩니다.
      </div>
</div>
<!-- STEP 5: 상속등기 후 실종선고 확정 -->
<div class="step-block">
<div class="step-block-head">
<div class="step-num">5</div>
<h3>이미 상속등기 완료 후 공동상속인 일부에게 실종선고 확정된 경우</h3>
</div>
<p style="font-size:14px;color:#444;margin-bottom:14px;">공동상속인 전원 명의로 상속등기가 완료된 이후에 그 중 1인에 대해 실종선고심판이 확정된 경우에는 <strong>소유권경정등기</strong>를 신청합니다(선례 6-213).</p>
<div style="background:var(--case-bg);border-left:4px solid var(--case-bd);border-radius:6px;padding:14px 16px;font-size:14px;color:#333;">
<strong style="display:block;color:var(--navy);margin-bottom:6px;">처리 방법 — 선례 6-213</strong>
        실종선고심판 확정 후 → 해당 실종자의 상속지분이 재조정됨 → 등기상 지분 변경을 위한 <strong>소유권경정등기</strong> 신청.<br/>
        첨부서류: 실종선고심판정본 + 확정증명서, 변경된 상속분 증명 서류
      </div>
</div>
</div>
</section>
<!-- ────────────────────── 5. 준비서류 ────────────────────── -->
<section>

<p class="sec-label">Section 05</p>
<h2 class="sec-title">준비 서류</h2>
<div class="doc-category">
<div class="doc-cat-title">일반 상속등기 공통 서류</div>
<div class="doc-grid">
<div class="doc-card">
<div class="doc-name">등기신청서 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">등기소 양식 또는 대법원 인터넷등기소 작성. 등기원인: "상속", 원인일자: 실종기간 만료일</div>
</div>
<div class="doc-card">
<div class="doc-name">기본증명서(상세) <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">실종자(피상속인)의 상세 기본증명서 — 실종선고 및 사망 의제 기재 확인</div>
</div>
<div class="doc-card">
<div class="doc-name">가족관계증명서 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">실종자(피상속인)의 가족관계증명서 — 상속인 확인</div>
</div>
<div class="doc-card">
<div class="doc-name">상속인 전원 주민등록등본 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">상속인 현재 주소 및 주민등록번호 확인</div>
</div>
<div class="doc-card">
<div class="doc-name">취득세 납부 영수증 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">시·군·구청 납부 후 납부확인서 첨부</div>
</div>
<div class="doc-card">
<div class="doc-name">상속인 전원 인감증명서 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">협의분할 시 필요; 법정분할 단독신청 시 법정상속분에 따름</div>
</div>
</div>
</div>
<div class="doc-category">
<div class="doc-cat-title">실종선고 관련 추가 서류</div>
<div class="doc-grid">
<div class="doc-card">
<div class="doc-name">실종선고심판정본 + 확정증명서 <span class="doc-req req-조건">미정리 시</span></div>
<div class="doc-note">가족관계등록부가 아직 정리되지 않은 경우 제출. 가정법원에서 발급. 정리된 경우 불필요 (선례 5-302)</div>
</div>
<div class="doc-card">
<div class="doc-name">상속포기심판정본 <span class="doc-req req-조건">포기자 있는 경우</span></div>
<div class="doc-note">상속인 중 포기자가 있는 경우 첨부</div>
</div>
<div class="doc-card">
<div class="doc-name">협의분할서 <span class="doc-req req-조건">협의분할 시</span></div>
<div class="doc-note">상속인 전원 인감 날인; 법정분할 외 분할 시 필요</div>
</div>
<div class="doc-card">
<div class="doc-name">부동산등기사항증명서 <span class="doc-req req-필수">필수</span></div>
<div class="doc-note">대상 부동산 현황 및 권리관계 확인용</div>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 6. 비용 안내 ────────────────────── -->
<section>

<p class="sec-label">Section 06</p>
<h2 class="sec-title">비용 안내</h2>
<table class="fee-table">
<thead><tr><th>항목</th><th>기준</th><th>비고</th></tr></thead>
<tbody>
<tr><td>취득세</td><td>공시가격 기준 0.8~2.8%</td><td>상속 취득세율 적용 — 유증과 달리 상속세율 적용. 1주택 이하·무주택 등에 따라 감면 가능</td></tr>
<tr><td>지방교육세</td><td>취득세의 20%</td><td>취득세 병과</td></tr>
<tr><td>농어촌특별세</td><td>취득세의 10%</td><td>해당 시</td></tr>
<tr><td>국민주택채권 매입</td><td>시가표준액 × 요율</td><td>주택 규모·지역별 요율 상이</td></tr>
<tr><td>등기신청수수료</td><td>15,000원</td><td>대법원 규칙 기준</td></tr>
<tr><td>가정법원 실종선고 신청비용</td><td>인지대 + 관보 공고료 + 송달료</td><td>관보 공고료는 수만 원 수준; 법원마다 상이</td></tr>
<tr><td>법무사 보수</td><td>대한법무사협회 보수규정</td><td>법원 신청 + 등기 일괄 의뢰 가능</td></tr>
</tbody>
</table>
<p class="fee-note">※ 실종선고 신청은 가정법원 가사비송 사건으로 처리되며, 공시최고 기간(6개월 이상)이 필요하므로 전체 절차에 상당한 시간이 소요됩니다.<br/>
    ※ 취득세 감면 요건(1세대 1주택 등) 충족 여부에 따라 실제 세액이 크게 달라질 수 있으므로, 신고 전 세무사 확인을 권장합니다.</p>
</div>
</section>
<!-- ────────────────────── 9. Q&A ────────────────────── -->
<section>

<p class="sec-label">Section 09</p>
<h2 class="sec-title">자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">실종선고를 받은 사람 명의의 부동산이 있습니다. 상속인이 여럿인데 어떻게 등기하나요?</div>
<div class="qna-a">일반 상속등기와 동일하게 처리합니다. 법정상속분대로 등기하거나, 상속인 전원이 협의분할 후 협의분할서를 첨부하여 특정 상속인 명의로 등기할 수 있습니다. 추가로 실종선고심판정본(가족관계등록부 미정리 시)을 첨부하면 됩니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">실종선고를 받은 사람이 살아서 돌아왔습니다. 등기는 어떻게 되나요?</div>
<div class="qna-a">가정법원에 실종선고 취소 심판을 청구하여 확정받아야 합니다(민법 제29조). 취소 확정 후 실종선고를 직접원인으로 재산을 취득한 자(상속인 등)에게 반환 청구를 할 수 있습니다. 다만 선의로 재산을 취득한 제3자에게는 취소 효력을 주장하지 못하는 경우가 있으므로 법무사 또는 변호사와 상담하십시오.</div>
</div>
<div class="qna-item">
<div class="qna-q">실종선고 없이 수십 년째 연락이 끊긴 상태인데 등기할 수 있나요?</div>
<div class="qna-a">실종선고 없이는 그 사람이 법적으로 생존한 것으로 처리되므로 상속등기를 할 수 없습니다. 반드시 가정법원에 실종선고 심판을 먼저 받아야 합니다. 실종선고 신청은 이해관계인(상속인 등)이 가정법원에 직접 신청하거나 법무사·변호사에게 의뢰할 수 있습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">실종기간이 만료된 지 오래되었는데, 이제 와서 실종선고 신청이 가능한가요?</div>
<div class="qna-a">네, 가능합니다. 실종선고 신청에는 별도의 제척기간이 없으므로 실종기간 만료 후 언제든지 신청할 수 있습니다. 오래된 사건일수록 생사불명 사실을 입증하는 서류(마지막 주소지 확인, 각종 공적 기록 등)를 충분히 준비하는 것이 중요합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">상속등기 후 공동상속인 중 1인이 실종선고를 받았습니다. 어떻게 해야 하나요?</div>
<div class="qna-a">이미 공동상속인 전원 명의로 상속등기가 완료된 경우, 그 중 1인에 대해 실종선고심판이 확정되면 해당 상속인의 지분 처리를 위해 소유권경정등기를 신청할 수 있습니다(선례 6-213). 실종된 상속인의 지분은 그 상속인의 상속인(재상속인)에게 귀속되므로 재상속인들의 참여가 필요합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">북한 지역에 있는 상속인의 경우 실종선고가 가능한가요?</div>
<div class="qna-a">군사분계선 이북지역에 주소를 둔 경우 일반 실종선고 대신 「부재선고 등에 관한 특별조치법」에 따른 부재선고를 받을 수 있습니다. 상속인 전원이 이북 지역에 있어 부재선고 심판이 확정된 경우에는 이를 기반으로 다른 방법에 의한 상속등기가 허용됩니다(선례 7-191).</div>
</div>
</div>
</section>
<!-- ────────────────────── 7. 판례 ────────────────────── -->
<section>

<p class="sec-label">Section 07</p>
<h2 class="sec-title">관련 판례 및 선례</h2>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제5-302호</div>
<div class="ruling-summary">실종선고에 따라 가족관계등록부(구 호적부)가 정리되어 있는 경우에는 그 실종선고에 따른 상속등기 신청 시 실종선고심판정본을 첨부정보로 제공할 필요가 없다.</div>
<span class="ruling-point">심판정본 불필요 요건</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제8-185호</div>
<div class="ruling-summary">1955. 7. 15. 실종기간이 만료된 자에 대하여 1979. 9. 16. 실종선고가 있었다면, 실종선고로 인한 재산상속의 순위·상속분 기타 상속에 관하여는 민법 부칙(1977. 12. 31. 법률 제3051호) 제5항 및 민법 부칙(1958. 2. 22. 법률 제471호) 제25조 제2항에 의하여, 1960. 1. 1.부터 시행된 민법의 규정이 적용된다.</div>
<span class="ruling-point">구법·신법 적용 기준</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제6-213호</div>
<div class="ruling-summary">공동상속인 전원 앞으로 상속등기가 경료된 후 그 공동상속인 중 1인에 대하여 실종선고심판이 확정된 경우에는, 이를 원인으로 하는 소유권경정등기를 신청할 수 있다.</div>
<span class="ruling-point">사후 실종선고와 경정등기</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">등기선례 제7-191호</div>
<div class="ruling-summary">피상속인의 상속인 전원이 군사분계선 이북지역에 등재(또는 등록)된 경우라도 부재선고 등에 관한 특별조치법에 의한 부재선고심판이 확정된 때에는 다른 상속인에 의한 상속등기를 허용한다.</div>
<span class="ruling-point">이북 상속인 전원 부재선고 특례</span>
</div>
</div>
</section>
<!-- ────────────────────── 8. 주의사항 ────────────────────── -->
<section>

<p class="sec-label">Section 08</p>
<h2 class="sec-title">반드시 확인할 주의사항</h2>
<div class="warn-list">
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>등기원인은 "실종선고"가 아닌 반드시 "상속"</strong>
<p>실종선고로 인한 등기이지만, 등기원인 란에는 "상속"을 기재합니다. "실종선고"는 등기기록 기재례에서 괄호 안에 부기할 뿐입니다. 등기원인일자는 법원의 심판일이 아닌 실종기간 만료일을 기재해야 합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>실종기간 만료일을 정확히 특정해야 합니다</strong>
<p>실종기간 만료일이 등기원인일자이자 사망간주일이 됩니다. 보통실종은 생사불명이 된 날로부터 5년째 되는 날, 특별실종은 위난 종료 후 1년이 되는 날이 만료일입니다. 법원 심판문에 이 날짜가 기재되어 있으니 반드시 확인하십시오.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>구법·신법 상속 규정 혼용에 주의</strong>
<p>실종기간이 구법 시행 중에 만료되었더라도 실종선고가 신민법 시행 이후에 이루어졌다면 상속순위·상속분 등은 신민법을 적용합니다(민법 부칙 제25조). 오래된 실종 사건에서 구법 규정을 잘못 적용하는 오류에 주의하십시오.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>실종선고 취소 가능성을 고려한 재산 처분</strong>
<p>실종선고 후 상속을 받았더라도 나중에 실종선고가 취소될 수 있습니다. 취소 시 실종자에게 재산을 반환해야 할 의무가 생길 수 있으므로, 상속받은 부동산을 처분하기 전에 취소 가능성이 없는지 신중히 검토하시기 바랍니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>실종선고 신청에는 상당한 시간 소요</strong>
<p>가정법원의 실종선고 절차는 공시최고 기간(최소 6개월)을 포함하여 통상 1년 이상 소요될 수 있습니다. 부동산을 긴급히 처리해야 하는 경우 시간 계획을 미리 세우십시오. 법무사에게 법원 신청 단계부터 의뢰하면 절차를 효율적으로 진행할 수 있습니다.</p>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 10. 다음으로 ────────────────────── -->
<section>

<p class="sec-label">Section 10</p>
<h2 class="sec-title">다음으로 확인할 내용</h2>
<div class="next-links">
<a class="next-card" href="상속_18_유증등기.html">
<div class="next-dir">← 이전 페이지</div>
<div class="next-title">유증으로 인한 소유권이전등기</div>
<div class="next-desc">유언장에 의해 부동산을 받은 경우의 등기 절차</div>
</a>
<a class="next-card" href="#">
<div class="next-dir">다음 페이지 →</div>
<div class="next-title">유류분반환으로 인한 소유권이전등기</div>
<div class="next-desc">침해된 유류분 반환 청구와 이전등기 절차</div>
</a>
</div>
</div>
</section>
<!-- ────────────────────── 11. CTA ────────────────────── -->
<section>


</section>
<!-- ────────────────────── 면책 ────────────────────── -->
<div class="disclaimer">
  본 페이지는 일반적인 법률 정보 제공을 목적으로 작성되었으며, 개별 사안에 대한 법률 조언이 아닙니다.<br/>
  구체적인 사안은 반드시 법무사 또는 변호사와 상담하시기 바랍니다.<br/>
  법령 및 예규는 개정될 수 있으므로 최신 정보를 확인하십시오.<br/>
  © 2025 법무사 사무소. All rights reserved.
</div>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-20', title: '유류분',
        meta: '유류분 — 피상속인이 마음대로 처분해도 상속인이 돌려받을 수 있는 법정 최소 상속분',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ────────────────────── HEADER ────────────────────── -->

<!-- ────────────────────── 1. 이런분께 ────────────────────── -->
<section>

<p class="sec-label">Section 01</p>
<h2 class="sec-title">이런 분께 필요한 안내입니다</h2>
<div class="target-grid">
<div class="target-card"><strong>유언으로 재산을 거의 못 받은 상속인</strong>돌아가신 분이 유언장으로 재산 대부분을 특정인에게 주었고, 나는 아무것도 또는 너무 조금 받은 경우</div>
<div class="target-card"><strong>생전 증여로 상속재산이 남아 있지 않은 경우</strong>피상속인이 생전에 특정 상속인이나 제3자에게 모든 재산을 증여하여 상속받을 재산이 없는 경우</div>
<div class="target-card"><strong>내 유류분이 얼마인지 계산하고 싶은 분</strong>법정상속분과 유류분의 차이, 정확한 유류분 비율이 얼마인지 확인하고 싶은 분</div>
<div class="target-card"><strong>유류분 반환 등기를 해야 하는 상속인·수증자</strong>유류분 반환 합의 또는 소송 판결 후 소유권이전등기 절차를 진행해야 하는 분</div>
</div>
</div>
</section>
<!-- ────────────────────── 2. 핵심요약 ────────────────────── -->
<section>

<p class="sec-label">Section 02</p>
<h2 class="sec-title">핵심 요약 — 한눈에 보기</h2>
<div class="deadline-banner">
<div class="icon">⏰</div>
<div>
<h4>유류분반환청구권 — 기간을 놓치면 영구 소멸</h4>
<p><strong>단기:</strong> 상속 개시 및 유류분 침해 사실을 안 날로부터 <strong style="color:#c0392b;">1년</strong> 이내 행사해야 합니다.<br/>
<strong>장기:</strong> 그 사실을 몰랐더라도 상속 개시일(사망일)로부터 <strong style="color:#c0392b;">10년</strong>이 지나면 소멸합니다 (민법 제1117조).</p>
</div>
</div>
<div class="summary-box">
<h3>유류분의 핵심 원칙</h3>
<div class="summary-row"><span class="s-key">의의</span><span class="s-val">상속인에게 법이 보장하는 최소한의 상속분. 피상속인이 유언·증여로 침해해도 반환 청구 가능</span></div>
<div class="summary-row"><span class="s-key">근거</span><span class="s-val">민법 제1112조~제1118조</span></div>
<div class="summary-row"><span class="s-key">반환 상대방</span><span class="s-val">유증받은 자, 증여받은 자 및 그 상속인 (유류분 침해한 공동상속인 포함)</span></div>
<div class="summary-row"><span class="s-key">등기원인</span><span class="s-val">"유류분반환" / 원인일자: 반환청구 의사표시일 (소 제기 시: 소장 송달일)</span></div>
<div class="summary-row"><span class="s-key">농지취득자격증명</span><span class="s-val">불필요 (선례 5-741)</span></div>
</div>
<!-- 유류분 비율 카드 -->
<p style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px;">유류분 비율 — 상속인 유형별 (민법 제1112조)</p>
<div class="ratio-grid">
<div class="ratio-card">
<div class="ratio-who">1순위 · 공동상속</div>
<div class="ratio-name">직계비속</div>
<div class="ratio-value">1/2</div>
<div class="ratio-base">법정상속분의 1/2</div>
</div>
<div class="ratio-card">
<div class="ratio-who">1순위 · 공동상속</div>
<div class="ratio-name">배우자</div>
<div class="ratio-value">1/2</div>
<div class="ratio-base">법정상속분의 1/2</div>
</div>
<div class="ratio-card">
<div class="ratio-who">2순위 (직계비속 없을 때)</div>
<div class="ratio-name">직계존속</div>
<div class="ratio-value">1/3</div>
<div class="ratio-base">법정상속분의 1/3</div>
</div>
<div class="ratio-card">
<div class="ratio-who">3순위</div>
<div class="ratio-name">형제자매</div>
<div class="ratio-value">1/3</div>
<div class="ratio-base">법정상속분의 1/3</div>
<div class="ratio-no">* 실무상 거의 침해 인정 어려움</div>
</div>
</div>
<div style="background:#f5f5f5;border-radius:6px;padding:12px 16px;font-size:13px;color:#666;margin-top:8px;">
      ⚠️ 4촌 이내 방계혈족(3·4촌)은 유류분권 없음 / 상속결격자·상속포기자도 유류분권 소멸
    </div>
</div>
</section>
<!-- ────────────────────── 3. 상세내용 ────────────────────── -->
<section>

<p class="sec-label">Section 03</p>
<h2 class="sec-title">상세 내용</h2>
<!-- ① 유류분 산정 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin-bottom:14px;">① 유류분액 계산 방법 (민법 제1113조)</h3>
<div class="formula-box">
<h4>유류분 산정 기초재산과 나의 유류분액</h4>
<div class="formula-wrap">
<div class="f-line" style="margin-bottom:12px;">
<span style="font-weight:700;color:var(--navy);min-width:80px;">기초재산</span>
<span class="f-op">=</span>
<span class="f-item">적극상속재산</span>
<span class="f-op">+</span>
<span class="f-item">1년 내 증여액</span>
<span class="f-op">+</span>
<span class="f-item">악의적 1년 이전 증여</span>
<span class="f-op">+</span>
<span class="f-item">상속인 특별수익액</span>
<span class="f-op">−</span>
<span class="f-item minus">상속채무</span>
</div>
<div style="border-top:1px dashed #c8d4ea;margin:10px 0;"></div>
<div class="f-line">
<span style="font-weight:700;color:#1b5e20;min-width:80px;">나의 유류분액</span>
<span class="f-op">=</span>
<span style="color:#555;font-size:13px;">(기초재산</span>
<span class="f-op">×</span>
<span class="f-item">나의 유류분율</span>
<span class="f-op">)</span>
<span class="f-op">−</span>
<span class="f-item minus">내가 받은 수증액·특별수익</span>
<span class="f-op">=</span>
<span class="f-item result">청구 가능한 유류분 부족액</span>
</div>
</div>
<div class="formula-note">
        ※ 증여재산 산입 범위: 상속개시 전 1년 내 증여는 원칙 포함. 1년 이전이더라도 당사자 쌍방이 유류분권리자에게 손해를 가할 것을 알고 한 증여(악의)는 포함됩니다 (민법 제1114조).<br/>
        ※ 상속인의 특별수익(생전 증여받은 것)은 1년 이전 것이라도 모두 산입됩니다 (민법 제1118조, 제1008조).
      </div>
</div>
<!-- ② 반환청구 순서 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin:28px 0 14px;">② 반환청구 순서 — 유증 먼저, 증여는 후순위 (민법 제1116조)</h3>
<p style="font-size:14px;color:#444;margin-bottom:14px;">반환받아야 할 대상이 여럿인 경우, 반드시 유증부터 반환을 받고 그래도 부족한 경우에만 증여에 대해 반환청구를 할 수 있습니다.</p>
<div class="order-flow">
<div class="order-item first">
<div class="order-num">먼저 청구</div>
<div class="order-name">유증</div>
<div class="order-desc">유언으로 특정인에게 준 재산<br/>(사인증여도 이에 준함)</div>
</div>
<div class="order-arrow">→</div>
<div class="order-item">
<div class="order-num">부족 시 추가 청구</div>
<div class="order-name">증여</div>
<div class="order-desc">생전에 무상으로 준 재산<br/>최근 것부터 소급하여 청구</div>
</div>
<div class="order-arrow">→</div>
<div class="order-item" style="background:var(--case-bg);border-color:var(--case-bd);">
<div class="order-num">결과</div>
<div class="order-name">유류분 충족</div>
<div class="order-desc">법정 최소 몫 보장<br/>초과분은 청구 불가</div>
</div>
</div>
<div style="background:#e8f5e9;border-left:4px solid var(--case-bd);border-radius:6px;padding:12px 16px;font-size:13px;color:#333;margin-top:8px;">
      📌 사인증여(사망을 조건으로 한 증여)는 유증에 준하여 취급합니다 (대법원 2001. 11. 30. 선고 2000다6947 판결).
    </div>
<!-- ③ 소멸시효 타임라인 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin:28px 0 14px;">③ 소멸시효 — 절대 놓치면 안 됩니다 (민법 제1117조)</h3>
<div class="timeline-wrap">
<div style="position:relative;height:60px;">
<div class="timeline-bar" style="top:24px;">
<div class="tl-seg-10yr"></div>
<span class="tl-marker m1">1년 시효</span>
<span class="tl-marker m10">10년 시효</span>
<span class="tl-label l0">상속개시(사망)</span>
<span class="tl-label l1" style="bottom:-22px;left:9.09%;transform:translateX(-50%);">안 날부터 1년</span>
<span class="tl-label l10">상속개시 후 10년</span>
</div>
</div>
<div class="timeline-legend" style="margin-top:36px;">
<div class="tl-leg-card short">
<strong>단기소멸시효 — 1년</strong>
          상속 개시 사실과 반환해야 할 증여·유증을 <strong>안 날</strong>로부터 1년 이내 행사하지 않으면 소멸.<br/>
<span style="font-size:11px;color:#7a0000;margin-top:4px;display:block;">"알았다"는 단순히 사망 사실을 아는 것이 아닌, 유류분이 침해되었다는 사실까지 인식한 때.</span>
</div>
<div class="tl-leg-card long">
<strong>장기소멸시효 — 10년</strong>
          침해 사실을 몰랐더라도 상속 개시일(사망일)로부터 10년이 경과하면 절대적으로 소멸.<br/>
<span style="font-size:11px;color:#7a4000;margin-top:4px;display:block;">판례는 1년, 10년 모두 소멸시효로 봄 (대법원 93다3595). 소멸시효 중단 가능.</span>
</div>
</div>
</div>
<!-- ④ 자가진단 체크리스트 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin:28px 0 14px;">④ 내 유류분이 침해되었는지 자가진단</h3>
<div class="checklist-wrap">
<h4>다음 항목 중 해당되는 것이 있으신가요?</h4>
<div class="check-item"><div class="check-box"></div><span class="check-text">나는 피상속인의 직계비속(자녀·손자녀), 배우자, 직계존속, 또는 형제자매다</span></div>
<div class="check-item"><div class="check-box"></div><span class="check-text">피상속인이 유언으로 특정인에게 재산의 상당 부분을 유증했다</span></div>
<div class="check-item"><div class="check-box"></div><span class="check-text">피상속인이 생전에 특정인에게 재산을 증여하여 남은 재산이 거의 없다</span></div>
<div class="check-item"><div class="check-box"></div><span class="check-text">내가 상속받은 재산이 법정상속분의 1/2(직계비속·배우자) 또는 1/3(직계존속·형제자매)에 미치지 못한다</span></div>
<div class="check-item"><div class="check-box"></div><span class="check-text">피상속인의 사망(상속개시)을 안 날로부터 아직 1년이 경과하지 않았다</span></div>
<div class="check-result">
        ✅ 위 항목 <strong>전체 해당</strong>: 유류분 반환 청구를 검토할 수 있습니다. 법무사·변호사와 구체적인 계산 및 전략을 상담하십시오.<br/>
        ⚠️ <strong>5번 항목만 미해당</strong>: 단기소멸시효(1년)가 지났더라도, 상속개시 후 10년이 지나지 않았다면 아직 청구 가능 여부를 점검해야 합니다.
      </div>
</div>
<!-- ⑤ 등기절차 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin:28px 0 14px;">⑤ 유류분반환으로 인한 소유권이전등기 절차</h3>
<p style="font-size:14px;color:#444;margin-bottom:12px;">유류분 반환에 합의하거나 소송으로 판결을 받은 후 등기를 신청합니다.</p>
<div class="mini-flow">
<div class="mini-step">반환청구 의사표시<br/>(협의 또는 소 제기)</div>
<div class="mini-arrow">→</div>
<div class="mini-step">합의서 작성<br/>또는 판결 확정</div>
<div class="mini-arrow">→</div>
<div class="mini-step">취득세 납부</div>
<div class="mini-arrow">→</div>
<div class="mini-step">등기 신청<br/>(공동신청)</div>
</div>
<div class="record-box">
<h4>등기 기재 사항</h4>
<div class="record-row"><span class="r-label">등기원인</span><span>"유류분반환"</span></div>
<div class="record-row"><span class="r-label">원인일자</span><span>반환청구 의사표시일 / 소장 송달일 (소 제기한 경우)</span></div>
<div class="record-row"><span class="r-label">등기목적</span><span>소유권일부이전 또는 소유권이전 (반환 범위에 따라)</span></div>
<div class="record-row"><span class="r-label">신청방법</span><span>유류분권리자(권리자) + 유증·증여받은 자(의무자) 공동신청</span></div>
<div class="record-row"><span class="r-label">첨부서류</span><span>유증인 경우: 유언증서 + 유류분반환협의서 / 증여인 경우: 증여계약서 + 유류분반환계약서 / 판결인 경우: 판결문</span></div>
<div class="record-row"><span class="r-label">농지</span><span>농지취득자격증명 불필요 (선례 5-741, 5-199)</span></div>
</div>
<div style="background:#f0f8f0;border-left:4px solid var(--case-bd);border-radius:6px;padding:14px 16px;font-size:13px;color:#333;margin-top:4px;">
      📌 등기기록례: [갑구] 소유권일부이전 / 2010년 2월 5일 유류분반환 / 공유자 지분 3분의 1 이도령 500124-XXXXXXX
    </div>
</div>
</section>
<!-- ────────────────────── 6. Q&A ────────────────────── -->
<section>

<p class="sec-label">Section 06</p>
<h2 class="sec-title">자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">아버지가 돌아가시기 2년 전에 형에게 아파트를 증여했습니다. 유류분 청구가 가능한가요?</div>
<div class="qna-a">원칙적으로 상속개시 전 1년 이전의 증여는 유류분 산정에 포함되지 않습니다(민법 제1114조). 그러나 증여 당사자 쌍방이 유류분권리자에게 손해를 가할 것을 알고 증여한 경우(악의)에는 1년 이전 증여도 포함됩니다. 또한, 상속인에 대한 특별수익(생전 증여)은 기간 제한 없이 모두 산입됩니다. 구체적인 상황을 전문가와 확인해보시기 바랍니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">유류분 반환은 반드시 소송을 해야 하나요?</div>
<div class="qna-a">반드시 소송을 해야 하는 것은 아닙니다. 유류분 침해를 한 상대방이 협의에 응한다면 협의로 해결하고 유류분반환협의서(또는 계약서)를 작성하여 등기할 수 있습니다. 다만 협의가 이루어지지 않는 경우 소를 제기해야 하며, 이때 소장 송달일이 등기원인일자가 됩니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">유류분을 반환받으면 부동산 전체를 돌려받을 수 있나요?</div>
<div class="qna-a">반드시 그런 것은 아닙니다. 유류분은 "부족한 한도"에서만 반환을 청구할 수 있습니다. 따라서 부동산 전체가 아니라 부족한 유류분만큼의 지분을 반환받는 것이 원칙입니다. 예를 들어 유류분 부족액이 부동산 가치의 3분의 1이라면 3분의 1 지분만 이전등기됩니다. 원물 반환이 어려운 경우 가액(금전)으로 반환받는 방법도 있습니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">유언장이 없고 오빠가 사전에 집을 증여받아 나는 아무것도 못 받았습니다.</div>
<div class="qna-a">유류분 제도는 유언이 있는 경우뿐만 아니라 생전 증여로 인해 유류분이 침해된 경우에도 적용됩니다. 오빠에게 생전 증여된 재산이 상속개시 전 1년 내의 것이라면(또는 악의적 증여이거나 특별수익이라면) 유류분 산정에 포함됩니다. 기간 제한(1년/10년)을 확인하고 빠르게 전문가와 상담하십시오.</div>
</div>
<div class="qna-item">
<div class="qna-q">유류분반환청구 소송에서 이겼습니다. 등기는 어떻게 하나요?</div>
<div class="qna-a">판결이 확정되면 판결문(확정증명서 포함)을 첨부하여 유류분권리자(원고)가 단독으로 등기 신청할 수 있습니다. 등기원인은 "유류분반환", 원인일자는 소장 송달일입니다. 판결 주문에 소유권이전등기 절차 이행 명령이 포함된 경우 그 판결문으로 등기 신청이 가능합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">내용증명을 보내면 소멸시효가 멈추나요?</div>
<div class="qna-a">내용증명(유류분반환청구 의사표시)을 발송하면 소멸시효 중단 효과가 있습니다(민법상 최고). 다만 최고 후 6개월 이내에 소 제기 등 법적 절차를 취하지 않으면 소멸시효 중단 효과가 상실됩니다. 따라서 내용증명 발송 후 반드시 6개월 이내에 소 제기나 조정 신청 등 확실한 조치를 취해야 합니다.</div>
</div>
</div>
</section>
<!-- ────────────────────── 4. 판례 ────────────────────── -->
<section>

<p class="sec-label">Section 04</p>
<h2 class="sec-title">관련 판례</h2>
<div class="ruling-card">
<div class="ruling-cite">대법원 1993. 4. 13. 선고 92다3595 판결 / 93다3595 판결</div>
<div class="ruling-summary">유류분반환청구권의 단기(1년) 소멸시효는 소멸시효이며, 장기(10년) 기간도 소멸시효기간이다. 따라서 그 권리행사의 의사표시로 소멸시효의 진행이 중단될 수 있다. (단, 다수설은 10년을 제척기간으로 봄)</div>
<span class="ruling-point">소멸시효 성격</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2006. 11. 10. 선고 2006다46346 판결</div>
<div class="ruling-summary">유류분반환청구권을 행사할 때 증여 또는 유증을 받은 공동상속인이 수인인 때에는, 각자가 자기 고유의 유류분액을 초과한 가액의 비율에 따라 반환청구를 할 수 있다. 공동상속인 아닌 제3자에 대하여는 그 증여 또는 유증받은 재산 가액을 기준으로 비율에 따라 반환청구 가능.</div>
<span class="ruling-point">복수의 반환의무자 처리</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2002. 4. 26. 선고 2000다8878 판결</div>
<div class="ruling-summary">유류분반환청구권의 행사로 반환해야 할 재산이 타인에게 양도된 경우, 그 양수인이 양도 당시 유류분권리자를 해함을 알았던 때에는 양수인에 대하여도 그 재산의 반환을 청구할 수 있다.</div>
<span class="ruling-point">제3 양수인에 대한 반환청구</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2010. 5. 27. 선고 2009다93992 판결</div>
<div class="ruling-summary">유류분반환청구권은 그 행사 여부가 유류분권리자의 인격적 이익을 위하여 자유로운 의사결정에 맡겨진 일신전속권이므로, 유류분권리자에게 권리행사의 확정적 의사가 있다고 인정되지 않는 한 원칙적으로 채권자대위권의 목적이 될 수 없다.</div>
<span class="ruling-point">일신전속성 · 채권자대위 불가</span>
</div>
</div>
</section>
<!-- ────────────────────── 5. 주의사항 ────────────────────── -->
<section>

<p class="sec-label">Section 05</p>
<h2 class="sec-title">반드시 확인할 주의사항</h2>
<div class="warn-list">
<div class="warn-item">
<div class="warn-icon">⏰</div>
<div class="warn-text">
<strong>기간 제한이 가장 중요합니다 — 1년/10년</strong>
<p>유류분 침해 사실을 안 날로부터 1년, 상속 개시일로부터 10년이 경과하면 청구권이 영구 소멸합니다. 시효 중단을 위해서는 내용증명 발송 또는 소 제기를 서둘러야 합니다. 기간이 임박한 경우 즉시 법률 전문가의 도움을 받으시기 바랍니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>상속을 포기하면 유류분권도 함께 소멸합니다</strong>
<p>상속포기를 한 상속인은 상속권 자체를 잃으므로 유류분권도 동시에 소멸합니다. 유류분 반환 청구를 하고 싶다면 상속을 포기하면 안 됩니다. 한정승인은 상속을 수용한 것이므로 유류분권이 유지됩니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>형제자매의 유류분은 2025년 이후 폐지 결정</strong>
<p>헌법재판소는 2024년 형제자매의 유류분 조항(민법 제1112조 제4호)을 헌법불합치 결정하였습니다. 해당 조항은 2025년 말까지 입법 개정이 예정되어 있으며, 개정 후에는 형제자매는 유류분권을 행사할 수 없게 됩니다. 현재 진행 중인 청구는 변경된 법 적용 시점을 반드시 확인하십시오.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>유류분 침해 여부는 등기관이 심사하지 않습니다</strong>
<p>등기관은 유류분 침해 여부를 형식적으로 심사하지 않으므로, 유류분을 침해하는 유증·증여에 의한 등기라도 일단 수리됩니다. 그러나 나중에 유류분 소송에서 패소하면 등기가 말소될 수 있으니 유류분 침해 여부를 사전에 꼼꼼히 검토하십시오.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>유류분 계산은 전문가 도움이 필수적입니다</strong>
<p>기초재산 산정 시 생전 증여 기간(1년 규정 예외 포함), 특별수익 인정 범위, 채무 공제 방법 등이 복잡하게 얽혀 있습니다. 정확한 계산 없이 청구하면 과소 또는 과다 청구로 불이익이 생길 수 있으므로 법무사 또는 변호사와 함께 진행하는 것이 안전합니다.</p>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 7. 다음으로 ────────────────────── -->
<section>

<p class="sec-label">Section 07</p>
<h2 class="sec-title">다음으로 확인할 내용</h2>
<div class="next-links">
<a class="next-card" href="상속_19_실종후등기.html">
<div class="next-dir">← 이전 페이지</div>
<div class="next-title">실종선고 후 소유권이전등기</div>
<div class="next-desc">오랫동안 연락이 끊긴 가족의 부동산 처리</div>
</a>
<a class="next-card" href="#">
<div class="next-dir">다음 페이지 →</div>
<div class="next-title">상속재산의 분리</div>
<div class="next-desc">상속재산과 상속인 고유재산을 분리하는 절차</div>
</a>
</div>
</div>
</section>
<!-- ────────────────────── 8. CTA ────────────────────── -->
<section>


</section>
<!-- ────────────────────── 면책 ────────────────────── -->
<div class="disclaimer">
  본 페이지는 일반적인 법률 정보 제공을 목적으로 작성되었으며, 개별 사안에 대한 법률 조언이 아닙니다.<br/>
  구체적인 사안은 반드시 법무사 또는 변호사와 상담하시기 바랍니다.<br/>
  형제자매 유류분 관련 헌법불합치 결정(2024년) 이후 법령 개정 내용을 반드시 최신 정보로 확인하십시오.<br/>
  © 2025 법무사 사무소. All rights reserved.
</div>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-21', title: '상속회복청구',
        meta: '정당한 상속인임에도 상속재산을 침해당했다면 — 상속회복청구권으로 권리를 되찾을 수 있습니다',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ────────────────────── HEADER ────────────────────── -->

<!-- ────────────────────── 1. 이런분께 ────────────────────── -->
<section>

<p class="sec-label">Section 01</p>
<h2 class="sec-title">이런 분께 필요한 안내입니다</h2>
<div class="target-grid">
<div class="target-card"><strong>다른 사람이 내 상속지분을 차지한 경우</strong>정당한 상속인임에도 불구하고 다른 상속인 또는 제3자가 상속재산을 점유하고 있는 상황의 상속인</div>
<div class="target-card"><strong>호적 위조 등으로 상속에서 배제된 경우</strong>허위 호적이나 위조 문서에 의해 상속인으로 인정받지 못하고 상속에서 배제된 분</div>
<div class="target-card"><strong>상속결격자가 상속재산을 취득한 경우</strong>민법상 상속결격 사유에 해당하는 자가 상속재산을 취득하여, 진정 상속인이 권리를 빼앗긴 상황</div>
<div class="target-card"><strong>유언 위조 등으로 수증자가 부동산을 가져간 경우</strong>위조된 유언장 등에 의해 제3자가 상속재산을 가져갔고, 진정한 상속인이 이를 되찾고 싶은 경우</div>
</div>
</div>
</section>
<!-- ────────────────────── 2. 핵심요약 ────────────────────── -->
<section>

<p class="sec-label">Section 02</p>
<h2 class="sec-title">핵심 요약 — 한눈에 보기</h2>
<div class="deadline-banner">
<div class="icon">⏰</div>
<div>
<h4>상속회복청구권 — 제척기간을 놓치면 영구 소멸 (민법 제999조 제2항)</h4>
<p><strong>단기:</strong> 상속권 침해를 안 날로부터 <strong style="color:#c0392b;">3년</strong> 이내 행사해야 합니다.<br/>
<strong>장기:</strong> 침해행위가 있은 날로부터 <strong style="color:#c0392b;">10년</strong>이 경과하면 절대적으로 소멸합니다.<br/>
<span style="font-size:12px;color:#888;">※ 통설·판례: 두 기간 모두 제척기간 (소멸시효 중단 불가, 기간 내 소 제기 필수)</span></p>
</div>
</div>
<div class="summary-box">
<h3>상속회복청구권의 핵심 원칙 (민법 제999조)</h3>
<div class="summary-row"><span class="s-key">의의</span><span class="s-val">상속권이 참칭상속권자로 인해 침해된 경우, <strong>진정상속인</strong>이 상속재산의 반환을 청구하는 권리</span></div>
<div class="summary-row"><span class="s-key">청구권자</span><span class="s-val">진정상속인 또는 그 법정대리인. 대습상속인도 포함</span></div>
<div class="summary-row"><span class="s-key">상대방</span><span class="s-val">참칭상속인(상속권 없이 상속재산을 점유하는 자) 및 그로부터 재산을 취득한 제3자</span></div>
<div class="summary-row"><span class="s-key">청구 내용</span><span class="s-val">상속재산 반환 및 이전등기 청구. 공동상속인 사이에도 적용</span></div>
<div class="summary-row"><span class="s-key">등기원인</span><span class="s-val">"상속회복" / 원인일자: 상속개시일 (판결에 의한 등기 시 판결 확정일 아님)</span></div>
<div class="summary-row"><span class="s-key">절차</span><span class="s-val">협의 → 공동신청 / 불협조 시 → 소 제기 → 판결 확정 → 단독신청</span></div>
</div>
<!-- 진정상속인 vs 참칭상속인 -->
<div class="vs-grid">
<div class="vs-card left">
<div class="vs-head left-h">청구권자 (원고)</div>
<div class="vs-name">진정상속인</div>
<ul class="vs-list">
<li>법정상속인 — 직계비속, 배우자, 직계존속, 형제자매</li>
<li>유언에 의한 상속인</li>
<li>대습상속인</li>
<li>포괄수증자 (판례: 제척기간 유추 적용)</li>
</ul>
</div>
<div class="vs-card right">
<div class="vs-head right-h">상대방 (피고)</div>
<div class="vs-name">참칭상속인</div>
<ul class="vs-list">
<li>상속결격자임에도 상속재산을 취득한 자</li>
<li>상속인이 아닌데 상속인으로 등기한 자</li>
<li>위조·변조 서류로 상속재산을 취득한 자</li>
<li>위 참칭상속인으로부터 재산을 취득한 제3자</li>
</ul>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 3. 상세내용 ────────────────────── -->
<section>

<p class="sec-label">Section 03</p>
<h2 class="sec-title">상세 내용</h2>
<!-- ① 성립 요건 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin-bottom:14px;">① 상속회복청구권의 성립 요건</h3>
<div class="req-grid">
<div class="req-card">
<div class="req-num">1</div>
<div class="req-title">진정한 상속인의 존재</div>
<div class="req-desc">청구인이 법률에 의해 인정되는 정당한 상속인이어야 합니다. 상속포기자·결격자는 해당 없음.</div>
</div>
<div class="req-card">
<div class="req-num">2</div>
<div class="req-title">상속권의 침해</div>
<div class="req-desc">참칭상속인이 상속재산을 점유·처분하여 진정상속인의 상속권을 실질적으로 침해한 사실이 있어야 합니다.</div>
</div>
<div class="req-card">
<div class="req-num">3</div>
<div class="req-title">제척기간 준수</div>
<div class="req-desc">침해를 안 날로부터 3년, 침해행위 있은 날로부터 10년 이내 소 제기. 기간 도과 시 소멸.</div>
</div>
</div>
<!-- ② 상속회복청구 vs 일반 소송 비교 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin:28px 0 14px;">② 상속회복청구권과 일반 민사소송의 차이</h3>
<p style="font-size:14px;color:#444;margin-bottom:14px;">상속재산을 되찾는 방법으로 상속회복청구(민법 제999조)와 일반 소유권에 기한 청구(물권적 청구권)가 있습니다. 판례는 상속회복청구권을 독자적·포괄적 청구권으로 인정합니다.</p>
<table class="compare-table">
<colgroup><col style="width:22%"/><col style="width:39%"/><col style="width:39%"/></colgroup>
<thead>
<tr><th>구분</th><th>상속회복청구권 (민법 §999)</th><th>일반 소유권에 기한 청구</th></tr>
</thead>
<tbody>
<tr><td>근거</td><td>민법 제999조 — 상속권 침해 포괄적 구제</td><td>민법 제213조 — 소유권에 기한 물권적 청구권</td></tr>
<tr><td>청구 범위</td><td>상속재산 전체에 대한 포괄적 회복</td><td>개별 물건마다 별도 청구</td></tr>
<tr><td>기간 제한</td><td>침해를 안 날 <strong>3년</strong> / 침해행위 <strong>10년</strong> (제척기간)</td><td>소유권 자체는 시효 없음 (등기청구권은 10년)</td></tr>
<tr><td>공동상속인 간 적용</td><td>적용됨 — 전원합의체 판결로 확립</td><td>별개 청구 가능하나 상속회복청구권 제척기간 적용</td></tr>
<tr><td>제3자 취득 효과</td><td>참칭상속인으로부터 취득한 제3자에게도 청구 가능 (악의의 제3자)</td><td>선의취득 성립 시 대항 불가</td></tr>
<tr><td>등기 방법</td><td>협의 시 공동신청 / 판결 시 단독신청</td><td>판결 또는 협의에 의한 이전등기</td></tr>
</tbody>
</table>
<div style="background:#e8f5e9;border-left:4px solid var(--case-bd);border-radius:6px;padding:12px 16px;font-size:13px;color:#333;margin-top:4px;">
      📌 판례(대법원 1991. 12. 24. 전원합의체 90다5740): 공동상속인 사이에서도 상속회복청구권이 적용되며, 일반 소유권에 기한 청구를 하더라도 상속회복청구권의 제척기간이 적용된다.
    </div>
<!-- ③ 소멸 제척기간 타임라인 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin:28px 0 14px;">③ 제척기간 — 절대로 놓쳐서는 안 됩니다</h3>
<div class="timeline-wrap">
<div style="position:relative;height:60px;">
<div class="tl-bar-outer" style="top:24px;">
<div class="tl-fill-10"></div>
<span class="tl-mk m3">3년 제척기간</span>
<span class="tl-mk m10">10년 제척기간</span>
<span class="tl-lbl l0">침해행위 / 침해를 안 날</span>
<span class="tl-lbl l3" style="bottom:-22px;left:23.08%;transform:translateX(-50%);">안 날 + 3년</span>
<span class="tl-lbl l10">침해행위 + 10년</span>
</div>
</div>
<div class="tl-legend" style="margin-top:36px;">
<div class="tl-leg short">
<strong>단기 제척기간 — 3년</strong>
          상속권 침해 사실을 <strong>안 날</strong>로부터 3년 이내 소를 제기해야 합니다.<br/>
<span style="font-size:11px;color:#7a0000;margin-top:4px;display:block;">"안 날"이란 침해 사실 자체를 구체적으로 인식한 날. 단순히 사망을 안 날이 아님.</span>
</div>
<div class="tl-leg long">
<strong>장기 제척기간 — 10년</strong>
          침해 사실을 몰랐더라도 <strong>침해행위가 있은 날</strong>로부터 10년이 지나면 절대 소멸.<br/>
<span style="font-size:11px;color:#7a4000;margin-top:4px;display:block;">제척기간이므로 중단·정지 없음. 소를 제기해야만 기간 내 행사로 인정.</span>
</div>
</div>
</div>
<!-- ④ 등기 절차 -->
<h3 style="font-family:'Noto Serif KR',serif;font-size:17px;color:var(--navy);margin:28px 0 14px;">④ 상속회복으로 인한 소유권이전등기 절차</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;">
<div style="background:var(--case-bg);border-left:4px solid var(--case-bd);border-radius:8px;padding:16px;font-size:14px;">
<strong style="display:block;color:var(--navy);margin-bottom:8px;">협의에 의한 회복 (합의 성립 시)</strong>
        진정상속인과 참칭상속인이 상속회복에 합의 →<br/>
        공동신청으로 이전등기
      </div>
<div style="background:var(--warn-bg);border-left:4px solid var(--warn-bd);border-radius:8px;padding:16px;font-size:14px;">
<strong style="display:block;color:#7a3000;margin-bottom:8px;">판결에 의한 회복 (불협조 시)</strong>
        법원에 상속회복청구 소 제기 →<br/>
        승소 판결 확정 → 단독신청
      </div>
</div>
<div class="flow-mini">
<div class="flow-mini-step">상속권 침해 확인</div>
<div class="flow-mini-arrow">→</div>
<div class="flow-mini-step">소 제기<br/>(가정법원 합의부)</div>
<div class="flow-mini-arrow">→</div>
<div class="flow-mini-step">승소 판결 확정</div>
<div class="flow-mini-arrow">→</div>
<div class="flow-mini-step">이전등기 단독신청</div>
</div>
<div class="record-box" style="margin-top:14px;">
<h4>등기 기재 사항</h4>
<div class="record-row"><span class="r-label">등기원인</span><span>"상속회복"</span></div>
<div class="record-row"><span class="r-label">원인일자</span><span>상속개시일 (피상속인 사망일) — 판결 확정일이 아님</span></div>
<div class="record-row"><span class="r-label">신청방법</span><span>협의 시: 진정상속인(권리자) + 참칭상속인(의무자) 공동신청 / 판결 시: 단독신청</span></div>
<div class="record-row"><span class="r-label">첨부서류</span><span>판결문(확정증명서 포함) 또는 상속회복협의서 / 상속관계 증명서류 / 취득세 납부 영수증</span></div>
<div class="record-row"><span class="r-label">관할법원</span><span>상속회복청구 소 → 가정법원 합의부 전속관할</span></div>
</div>
</div>
</section>
<!-- ────────────────────── 6. Q&A ────────────────────── -->
<section>

<p class="sec-label">Section 06</p>
<h2 class="sec-title">자주 묻는 질문</h2>
<div class="qna-item">
<div class="qna-q">오빠가 혼자 상속등기를 해버렸습니다. 내 지분을 돌려받을 수 있나요?</div>
<div class="qna-a">공동상속인 중 1인이 다른 상속인의 동의 없이 단독으로 상속등기를 한 경우, 다른 상속인은 상속회복청구권을 행사하여 자신의 지분에 해당하는 소유권이전등기를 청구할 수 있습니다. 다만 침해를 안 날로부터 3년, 침해행위(등기일)로부터 10년 이내에 소를 제기해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">상속회복청구와 유류분반환청구의 차이는 무엇인가요?</div>
<div class="qna-a">상속회복청구는 상속인이 자신의 상속권 자체가 부당하게 침해된 경우(예: 상속결격자가 재산을 취득, 허위 등기 등)에 하는 청구입니다. 유류분반환청구는 피상속인이 유언이나 증여로 상속인에게 법이 보장하는 최소 몫(유류분)을 남기지 않은 경우에 행사하는 청구입니다. 두 청구권은 요건과 기간(상속회복 3/10년, 유류분 1/10년)이 다르므로 상황에 맞는 청구를 선택해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">참칭상속인이 이미 부동산을 제3자에게 팔았습니다. 어떻게 되나요?</div>
<div class="qna-a">참칭상속인으로부터 부동산을 취득한 제3자가 악의(참칭 사실을 알았던 경우)라면 그 제3자에게도 반환을 청구할 수 있습니다. 반면 제3자가 선의인 경우에는 물권변동 법리(선의취득 등)에 따라 진정상속인의 권리 회복이 제한될 수 있습니다. 이 경우 참칭상속인을 상대로 손해배상을 청구하는 방법을 고려해야 합니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">오래된 일이라 10년이 지났을 것 같습니다. 그래도 청구할 수 있나요?</div>
<div class="qna-a">침해행위가 있은 날로부터 10년이 경과하면 상속회복청구권은 절대적으로 소멸합니다. 이 경우 상속회복청구 자체는 불가능합니다. 다만 일반 민사법상 다른 청구권(부당이득반환 등)이 가능한지 여부는 별개로 검토해볼 수 있으므로 전문가 상담을 받아보시기 바랍니다.</div>
</div>
<div class="qna-item">
<div class="qna-q">북한에 있는 상속인도 상속회복청구를 할 수 있나요?</div>
<div class="qna-a">남북이산가족 특례법에 따라 북한주민도 남한 내 부동산에 대해 상속권이 인정되면 민법 제999조에 따른 상속회복청구를 할 수 있습니다(특례법 제11조). 북한주민의 상속회복청구 사건은 가정법원 합의부의 전속관할입니다. 구체적인 요건과 절차는 남북이산가족 관련 특례법을 확인하십시오.</div>
</div>
<div class="qna-item">
<div class="qna-q">판결로 이겼습니다. 등기는 어떻게 신청하나요?</div>
<div class="qna-a">상속회복청구 소송에서 승소 판결이 확정되면 확정판결문(확정증명서 포함)을 첨부하여 진정상속인이 단독으로 등기를 신청할 수 있습니다. 등기원인은 "상속회복", 원인일자는 상속개시일(사망일)입니다. 취득세를 납부한 후 해당 부동산 소재지 관할 등기소에 신청합니다.</div>
</div>
</div>
</section>
<!-- ────────────────────── 4. 판례 ────────────────────── -->
<section>

<p class="sec-label">Section 04</p>
<h2 class="sec-title">관련 판례</h2>
<div class="ruling-card">
<div class="ruling-cite">대법원 1991. 12. 24. 선고 90다5740 전원합의체 판결</div>
<div class="ruling-summary">공동상속인 사이에서도 상속회복청구권이 적용된다. 공동상속인 중 1인이 다른 공동상속인의 상속지분을 침해한 경우에도 민법 제999조의 상속회복청구권이 성립하며, 이 경우 일반 소유권에 기한 청구를 하더라도 상속회복청구권의 제척기간이 적용된다.</div>
<span class="ruling-point">공동상속인 간 적용 · 제척기간 적용 범위</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2006. 5. 25. 선고 2006다71095 판결</div>
<div class="ruling-summary">상속결격자도 참칭상속인에 해당한다. 상속결격 사유가 있는 자가 상속인으로서 상속재산을 점유하는 경우, 진정상속인은 민법 제999조에 의한 상속회복청구를 할 수 있다.</div>
<span class="ruling-point">참칭상속인의 범위 — 상속결격자 포함</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 1993. 3. 23. 선고 92다51503 판결</div>
<div class="ruling-summary">상속회복청구권의 단기 제척기간 기산점인 "침해를 안 날"이란 자신이 진정한 상속인임을 알고 동시에 자기의 상속권이 침해되어 있다는 사실을 구체적으로 인식한 날을 의미한다. 단순히 피상속인의 사망을 안 날이 기산점이 되는 것이 아니다.</div>
<span class="ruling-point">제척기간 기산점 — "안 날"의 의미</span>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2001. 10. 12. 선고 2000다22942 판결</div>
<div class="ruling-summary">포괄적 유증에 기인한 청구권에는 상속회복청구권의 제척기간이 유추 적용된다. 포괄수증자의 법적 지위는 상속인과 거의 차이가 없으므로, 포괄수증자를 상대로 한 청구도 상속회복청구권에 준하여 제척기간을 준수해야 한다.</div>
<span class="ruling-point">포괄수증자에 대한 제척기간 유추 적용</span>
</div>
</div>
</section>
<!-- ────────────────────── 5. 주의사항 ────────────────────── -->
<section>

<p class="sec-label">Section 05</p>
<h2 class="sec-title">반드시 확인할 주의사항</h2>
<div class="warn-list">
<div class="warn-item">
<div class="warn-icon">⏰</div>
<div class="warn-text">
<strong>제척기간 — 소멸시효와 달리 중단·정지 없습니다</strong>
<p>상속회복청구권의 3년·10년 기간은 소멸시효가 아닌 <strong>제척기간</strong>입니다. 소멸시효는 내용증명 발송 등으로 중단할 수 있지만, 제척기간은 중단이 불가능합니다. 반드시 기간 내에 직접 <strong>소를 제기</strong>해야만 권리를 보전할 수 있습니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>공동상속인 사이에서도 제척기간이 적용됩니다</strong>
<p>형제·자매나 다른 공동상속인이 내 지분을 무단으로 가져간 경우에도 상속회복청구권의 제척기간이 적용됩니다(대법원 전원합의체). 단순한 소유권 이전등기 청구나 부당이득 반환청구를 제기해도 제척기간이 경과했다면 기각됩니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>참칭상속인으로부터 취득한 선의의 제3자는 보호될 수 있습니다</strong>
<p>참칭상속인이 상속재산을 제3자에게 처분한 경우, 그 제3자가 <strong>선의</strong>(참칭 사실을 몰랐던)인 때에는 진정상속인이 그 제3자에게 반환을 청구하기 어려울 수 있습니다. 악의의 제3자에게는 청구 가능합니다. 상황에 따라 변호사와 상담이 필요합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>가정법원 합의부의 전속관할 사건입니다</strong>
<p>상속회복청구 소송은 일반 민사법원이 아닌 <strong>가정법원 합의부</strong>에 제기해야 합니다. 일반 법원에 제기하면 관할 위반으로 각하될 수 있습니다. 남북이산가족 관련 상속회복청구도 동일합니다.</p>
</div>
</div>
<div class="warn-item">
<div class="warn-icon">⚠️</div>
<div class="warn-text">
<strong>상속포기자는 상속회복청구권을 행사할 수 없습니다</strong>
<p>상속을 포기한 사람은 상속인의 지위를 잃으므로 상속회복청구권도 소멸합니다. 반면 한정승인은 상속을 수용한 것이므로 상속회복청구권이 유지됩니다. 상속포기를 한 뒤 뒤늦게 상속재산 침해를 알게 된 경우에는 청구권 행사가 어렵습니다.</p>
</div>
</div>
</div>
</div>
</section>
<!-- ────────────────────── 7. 다음으로 ────────────────────── -->
<section>

<p class="sec-label">Section 07</p>
<h2 class="sec-title">다음으로 확인할 내용</h2>
<div class="next-links">
<a class="next-card" href="상속_20_유류분.html">
<div class="next-dir">← 이전 페이지</div>
<div class="next-title">유류분 — 최소 상속 몫 보장</div>
<div class="next-desc">유언장이 있어도 보장받는 법정 최소 상속분</div>
</a>
<a class="next-card" href="#">
<div class="next-dir">다음 페이지 →</div>
<div class="next-title">상속재산의 분리</div>
<div class="next-desc">상속재산과 상속인의 고유재산 분리 절차</div>
</a>
</div>
</div>
</section>
<!-- ────────────────────── 8. CTA ────────────────────── -->
<section>


</section>
<!-- ────────────────────── 면책 ────────────────────── -->
<div class="disclaimer">
  본 페이지는 일반적인 법률 정보 제공을 목적으로 작성되었으며, 개별 사안에 대한 법률 조언이 아닙니다.<br/>
  구체적인 사안은 반드시 법무사 또는 변호사와 상담하시기 바랍니다.<br/>
  법령 및 판례는 개정·변경될 수 있으므로 최신 정보를 확인하십시오.<br/>
  © 2025 법무사 사무소. All rights reserved.
</div>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-22', title: '외국인 상속',
        meta: '국적별 준거법 · 증명서류 · 부동산등기용등록번호까지 한눈에',
        sections: [
          {
            heading: '전체 내용',
            content: `<main>
<!-- 1. 이런 분께 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 01</span>이런 분께 필요한 정보입니다
  </h2>
<div class="target-cards">
<div class="target-card">
<div class="icon">🌏</div>
<p>외국인이 한국의 부동산을 상속받아 등기를 해야 하는 경우</p>
</div>
<div class="target-card">
<div class="icon">🏠</div>
<p>피상속인(망인)이 외국인이고 한국에 부동산을 남긴 경우</p>
</div>
<div class="target-card">
<div class="icon">📋</div>
<p>어느 나라 법이 적용되는지, 어떤 서류를 준비해야 하는지 궁금한 경우</p>
</div>
<div class="target-card">
<div class="icon">🔢</div>
<p>외국인 등기명의인으로서 부동산등기용등록번호 발급이 필요한 경우</p>
</div>
</div>
</section>
<!-- 2. 핵심요약 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 02</span>핵심요약
  </h2>
<div class="summary-box">
<ul>
<li><strong>준거법 원칙</strong> — 국제사법 제49조에 따라 <strong>피상속인의 본국법(사망 당시 국적국 법)</strong>이 적용됩니다(상속통일주의).</li>
<li><strong>반정(反定)에 의한 한국법 적용</strong> — 미국·영국·프랑스·중국 등은 부동산 소재지법주의를 채택하므로, 한국 소재 부동산 상속에는 <strong>반정으로 한국법이 적용</strong>됩니다.</li>
<li><strong>부동산등기용등록번호</strong> — 외국인이 등기명의인이 되려면 출입국관리사무소(또는 재외공관)에서 <strong>부동산등기용등록번호</strong>를 발급받아야 합니다.</li>
<li><strong>외국어 서류</strong> — 외국어로 된 서면에는 반드시 <strong>번역문을 첨부</strong>해야 합니다(부동산등기규칙 제46조 제8항).</li>
<li><strong>기간 제한 없음</strong> — 외국인 상속등기 자체에 별도의 청구기간 제한은 없으나, 상속받을 권리(상속회복청구권 등)는 별개로 기간 제한이 있을 수 있습니다.</li>
</ul>
</div>
</section>
<!-- 3. 상세내용 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 03</span>상세내용
  </h2>
<!-- 3-1. 준거법 결정 흐름도 -->
<div class="flow-chart">
<h3>⚖️ 상속 준거법 결정 흐름</h3>
<div class="flow-row">
<div class="flow-node gold">피상속인 사망</div>
<div class="flow-arrow">→</div>
<div class="flow-node">국적 확인</div>
</div>
<div class="flow-indent" style="margin-top:10px;">
<div class="flow-row">
<div class="flow-label">한국 국적 포함(이중국적)</div>
<div class="flow-arrow">→</div>
<div class="flow-node green">한국법 적용</div>
</div>
<div class="flow-row" style="margin-top:8px;">
<div class="flow-label">무국적</div>
<div class="flow-arrow">→</div>
<div class="flow-node gray">상거소지법 적용</div>
</div>
<div class="flow-row" style="margin-top:8px;">
<div class="flow-label">외국 국적(단일)</div>
<div class="flow-arrow">→</div>
<div class="flow-node">본국법 원칙 적용</div>
</div>
</div>
<div style="margin-top:14px; padding-left:10px;">
<p style="font-size:13px; color:#5a6475; margin-bottom:10px;">본국법 적용 시: 그 나라가 <strong>부동산 소재지법주의</strong>를 채택하면?</p>
<div class="flow-row">
<div class="flow-node gray" style="font-size:12px;">미국·영국·프랑스·중국</div>
<div class="flow-arrow">→</div>
<div class="flow-label">반정(反定)</div>
<div class="flow-arrow">→</div>
<div class="flow-node green">한국법 적용</div>
</div>
<div class="flow-row" style="margin-top:8px;">
<div class="flow-node gray" style="font-size:12px;">일본·독일·대만</div>
<div class="flow-arrow">→</div>
<div class="flow-label">상속통일주의</div>
<div class="flow-arrow">→</div>
<div class="flow-node red" style="font-size:12px;">본국법 적용</div>
</div>
</div>
<p style="font-size:12px; color:#7a8090; margin-top:14px; padding-top:10px; border-top:1px dashed #c2d0e8;">
      * 국제사법 제49조 제1항: 상속은 사망 당시 피상속인의 본국법에 의한다.<br/>
      * 단, 피상속인이 유언으로 상거소지법 또는 부동산소재지법을 선택한 경우 그 법에 의함(동조 제2항).
    </p>
</div>
<!-- 3-2. 국가별 카드 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin-bottom:16px;">🗂 국가별 준거법 및 주요 증명서류</h3>
<div class="country-grid">
<div class="country-card japan">
<div class="cc-head">
        🇯🇵 일본
        <span class="badge-bonguk">본국법 적용</span>
</div>
<div class="cc-body">
<div class="cc-row">
<span class="cc-lbl">준거법</span>
<span class="cc-val">일본 민법 (상속통일주의 — 반정 없음)</span>
</div>
<div class="cc-row">
<span class="cc-lbl">증명서류</span>
<span class="cc-val">
            호적등(초)본, 제적등본 등 일본 관공서 발행 서류.<br/>
            일본어 서면이므로 번역문 첨부 필수.
          </span>
</div>
<div class="cc-row">
<span class="cc-lbl">특이사항</span>
<span class="cc-val">일본 호적에 상속 관계가 기재되므로 상속증명에 호적 활용.</span>
</div>
</div>
</div>
<div class="country-card usa">
<div class="cc-head">
        🇺🇸 미국
        <span class="badge-hangguk">반정→한국법</span>
</div>
<div class="cc-body">
<div class="cc-row">
<span class="cc-lbl">준거법</span>
<span class="cc-val">Restatement §249 — 부동산 소재지법주의 → 반정으로 한국법 적용</span>
</div>
<div class="cc-row">
<span class="cc-lbl">증명서류</span>
<span class="cc-val">
            관공서 발행 상속증명서 + 공증된 서면.<br/>
            미국에는 인감제도 없으므로 서명인감증명 대신 공증서면으로 대체.
          </span>
</div>
<div class="cc-row">
<span class="cc-lbl">특이사항</span>
<span class="cc-val">주(State)마다 상속법 상이 — 사망지·주소지 주법 확인 필요.</span>
</div>
</div>
</div>
<div class="country-card china">
<div class="cc-head">
        🇨🇳 중국
        <span class="badge-hangguk">반정→한국법</span>
</div>
<div class="cc-body">
<div class="cc-row">
<span class="cc-lbl">준거법</span>
<span class="cc-val">중국 섭외민사법률관계법 제31조 — 부동산 소재지법주의 → 반정으로 한국법 적용</span>
</div>
<div class="cc-row">
<span class="cc-lbl">증명서류</span>
<span class="cc-val">
            중국 본국 정부기관 또는 주한중국대사관 발행 증명서.<br/>
            아포스티유 또는 한국 영사 인증 필요.
          </span>
</div>
</div>
</div>
<div class="country-card taiwan">
<div class="cc-head">
        🇹🇼 대만(중화민국)
        <span class="badge-bonguk">본국법 적용</span>
</div>
<div class="cc-body">
<div class="cc-row">
<span class="cc-lbl">준거법</span>
<span class="cc-val">중화민국 민법 (상속통일주의 — 반정 없음)</span>
</div>
<div class="cc-row">
<span class="cc-lbl">증명서류</span>
<span class="cc-val">
            주한타이페이대표부 증명 호적(제적)등본.<br/>
            繁體字 서면이므로 번역문 첨부 필수.
          </span>
</div>
</div>
</div>
<div class="country-card germany">
<div class="cc-head">
        🇩🇪 독일
        <span class="badge-bonguk">본국법 적용</span>
</div>
<div class="cc-body">
<div class="cc-row">
<span class="cc-lbl">준거법</span>
<span class="cc-val">독일 민법 (상속통일주의 — 반정 없음)</span>
</div>
<div class="cc-row">
<span class="cc-lbl">증명서류</span>
<span class="cc-val">
            사망증명서 + 상속증명서(Erbschein).<br/>
            독일어 서면이므로 번역문 첨부 필수.
          </span>
</div>
</div>
</div>
<div class="country-card uk">
<div class="cc-head">
        🇬🇧 영국
        <span class="badge-hangguk">반정→한국법</span>
</div>
<div class="cc-body">
<div class="cc-row">
<span class="cc-lbl">준거법</span>
<span class="cc-val">영국 국제사법 — 부동산 소재지법주의 → 반정으로 한국법 적용</span>
</div>
<div class="cc-row">
<span class="cc-lbl">증명서류</span>
<span class="cc-val">
            사망증명서 + Grant of Probate(유언검인서) 또는 Letters of Administration(상속관리서).<br/>
            영사 인증 및 번역문 첨부.
          </span>
</div>
</div>
</div>
<div class="country-card france">
<div class="cc-head">
        🇫🇷 프랑스
        <span class="badge-hangguk">반정→한국법</span>
</div>
<div class="cc-body">
<div class="cc-row">
<span class="cc-lbl">준거법</span>
<span class="cc-val">프랑스 국제사법 — 부동산 소재지법주의 → 반정으로 한국법 적용</span>
</div>
<div class="cc-row">
<span class="cc-lbl">증명서류</span>
<span class="cc-val">
            본국 정부기관 발행 증명서.<br/>
            아포스티유 인증 및 번역문 첨부.
          </span>
</div>
</div>
</div>
</div><!-- /country-grid -->
<!-- 3-3. 부동산등기용등록번호 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">🔢 부동산등기용등록번호 발급</h3>
<div class="info-box">
    외국인이 <strong>등기명의인</strong>이 되기 위해서는 반드시 <strong>부동산등기용등록번호</strong>를 등기신청서에 기재해야 합니다.<br/>
    주민등록번호가 없는 외국인을 위한 별도 식별번호로, 출입국관리사무소 또는 재외공관에서 발급합니다.
  </div>
<div class="proc-box">
<h3>발급 절차</h3>
<div class="proc-steps">
<div class="proc-step">
<div class="pnum">1</div>
<div class="ptext"><strong>신청 기관 확인</strong> — 국내 거주 외국인은 거주지 관할 출입국관리사무소, 국외 거주 외국인은 주한 한국 재외공관에 신청합니다.</div>
</div>
<div class="proc-step">
<div class="pnum">2</div>
<div class="ptext"><strong>필요 서류 준비</strong> — 여권 사본, 외국인등록증(국내 거주자), 본국 주소증명 서류(해외 거주자).</div>
</div>
<div class="proc-step">
<div class="pnum">3</div>
<div class="ptext"><strong>등록번호 발급</strong> — 13자리 부동산등기용등록번호 발급. 외국국적동포(재외동포)는 국내거소신고번호로 대체 가능 (선례 5-116).</div>
</div>
<div class="proc-step">
<div class="pnum">4</div>
<div class="ptext"><strong>행방불명 시 특례</strong> — 등록번호 발급 대상자가 행방불명인 경우, 그 소명을 하면 등록번호 없이도 신청 가능 (선례 7-80).</div>
</div>
<div class="proc-step">
<div class="pnum">5</div>
<div class="ptext"><strong>등기신청</strong> — 발급받은 등록번호를 등기신청서 및 위임장에 기재하여 관할 등기소에 제출합니다.</div>
</div>
</div>
</div>
<!-- 3-4. 주소증명 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">📍 외국인의 주소 증명 방법</h3>
<div class="branch-grid">
<div class="branch-card">
<div class="bh">🏠 한국에 거주하는 외국인</div>
<ul>
<li>외국인등록사실증명서 (출입국관리사무소 발급)</li>
<li>외국인등록증 사본</li>
<li>재외동포 — 국내거소신고사실증명서</li>
</ul>
</div>
<div class="branch-card">
<div class="bh">✈️ 해외에 거주하는 외국인</div>
<ul>
<li>본국 관공서 발행 주소증명서</li>
<li>주소가 기재된 공증서면</li>
<li>한국 재외공관(영사)의 주소 확인 서면</li>
<li>※ 예규 제1393호에 따른 방법으로 증명</li>
</ul>
</div>
</div>
<!-- 3-5. 외국어 서류 번역 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">📄 외국어 서류 번역 요건</h3>
<div class="warn-box">
<div class="w-title">⚠️ 번역문 첨부 의무 (부동산등기규칙 제46조 제8항)</div>
<ul>
<li>외국어로 작성된 서면에는 반드시 <strong>번역문을 첨부</strong>해야 합니다.</li>
<li>번역은 전문 번역인이 하거나, 번역인이 번역의 정확성을 확인한 서면이어야 합니다.</li>
<li>한국어 번역문에 번역자의 서명 또는 날인이 있어야 인정됩니다.</li>
<li>공증된 번역문일 경우 가장 신뢰도가 높으며, 등기관의 보정 요구를 최소화할 수 있습니다.</li>
</ul>
</div>
<!-- 3-6. 첨부정보 종합표 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">📋 신청 시 첨부 서류 종합</h3>
<div class="tbl-wrap">
<table>
<thead>
<tr>
<th>서류 종류</th>
<th>내용</th>
<th>비고</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>상속증명 서류</strong></td>
<td>본국 관공서 발행 사망증명서, 상속관계 증명서류 (호적, 상속증명서 등)</td>
<td>번역문 첨부 필수</td>
</tr>
<tr>
<td><strong>부동산등기용등록번호 증명</strong></td>
<td>출입국관리사무소 발급 등록번호 확인서 또는 외국인등록증</td>
<td>등기명의인이 되는 경우 필수</td>
</tr>
<tr>
<td><strong>주소증명</strong></td>
<td>외국인등록사실증명서(국내) 또는 본국 주소증명 공증서면(국외)</td>
<td>번역문 첨부 필수</td>
</tr>
<tr>
<td><strong>인감·서명 증명</strong></td>
<td>인감제도 없는 나라는 공증된 서명증명서로 대체</td>
<td>미국 등 해당</td>
</tr>
<tr>
<td><strong>아포스티유 / 영사인증</strong></td>
<td>헤이그 협약국은 아포스티유, 비협약국은 한국 재외공관 영사 인증</td>
<td>공문서 진정성 확인</td>
</tr>
<tr>
<td><strong>준거법 적용 증명</strong></td>
<td>외국법 내용 증명(법원, 법무부, 전문가 의견서 등)</td>
<td>본국법 적용 시 필요할 수 있음</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- 6. Q&A -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 04</span>자주 묻는 질문 (Q&amp;A)
  </h2>
<div class="qna-item">
<div class="qna-q">Q. 외국인이 한국 부동산을 상속받으면 반드시 등기해야 하나요?</div>
<div class="qna-a">
      상속등기는 의무 사항은 아니지만, 등기하지 않으면 제3자에게 상속으로 인한 권리 취득을 대항할 수 없습니다.
      또한 이후 매각·담보 설정 등 처분을 위해서도 등기가 선행되어야 합니다. 실무적으로는 상속받은 후
      가능한 한 빠른 시일 내에 등기하는 것이 권장됩니다.
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 한국에 한 번도 오지 않고도 상속등기를 할 수 있나요?</div>
<div class="qna-a">
      가능합니다. 한국에 거주하는 법무사에게 위임장(공증 포함)을 작성하여 대리 신청할 수 있습니다.
      위임장은 공증인의 공증을 받아야 하며, 해외에서 작성하는 경우 아포스티유 인증 또는 한국 영사의 확인을 받아야 합니다.
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 미국 국적 피상속인인데 유언장이 있는 경우 어떻게 되나요?</div>
<div class="qna-a">
      미국인은 반정으로 한국법이 적용되므로, 한국 민법상의 유언 방식과 효력이 원칙적으로 적용됩니다.
      다만, 국제사법 제50조에 따라 유언 방식은 행위지법(유언 작성지법) 등에 의할 수도 있습니다.
      유언장의 진정성 입증을 위해 공증 및 아포스티유 인증이 필요할 수 있으며, 복잡한 경우에는
      전문 법무사 또는 변호사의 조력을 받는 것이 좋습니다.
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 피상속인이 일본 국적이면 일본 상속법이 적용되나요? 일본법에서 상속분이 다를 수 있나요?</div>
<div class="qna-a">
      네, 일본인 피상속인의 경우 반정 없이 <strong>일본 민법</strong>이 적용됩니다. 일본 민법의 상속분은
      한국 민법과 유사한 부분도 있지만 차이도 있습니다(예: 일본은 배우자 1/2, 자녀 1/2 분할).
      일본법 내용을 증명하는 서면을 등기 신청 시 함께 제출해야 할 수 있으며,
      일본 호적서류를 통해 상속관계를 소명합니다.
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 부동산등기용등록번호 발급에 시간이 얼마나 걸리나요?</div>
<div class="qna-a">
      출입국관리사무소에 직접 방문하여 신청하는 경우 당일 또는 수일 내에 발급받을 수 있는 경우가 많습니다.
      해외 재외공관을 통하는 경우 우편 등의 사정으로 시간이 더 소요될 수 있습니다.
      등기 신청 전에 미리 발급받아 두는 것이 좋으며, 발급이 지연되면 전체 등기 일정에 영향을 줍니다.
    </div>
</div>
</section>
<!-- 4. 판례 및 선례 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 05</span>관련 판례 · 선례
  </h2>
<div class="ruling-card">
<div class="r-label">선례 5-116</div>
<div class="r-title">외국국적동포의 국내거소신고번호로 등록번호 대체</div>
<div class="r-body">
      재외동포의 출입국과 법적 지위에 관한 법률에 따라 국내거소신고를 한 외국국적동포는
      부동산등기용등록번호 대신 <strong>국내거소신고번호</strong>를 사용하여 등기신청을 할 수 있다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">선례 7-80</div>
<div class="r-title">등록번호 발급 대상자 행방불명 시의 처리</div>
<div class="r-body">
      부동산등기용등록번호를 발급받아야 할 외국인이 <strong>행방불명</strong>된 경우에는
      그 소명을 하면 등록번호 없이도 상속등기 신청을 할 수 있다.
      이는 상속인이 부지의 사유로 등기를 진행하지 못하는 경우를 방지하기 위한 특례이다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">선례 5-332</div>
<div class="r-title">미국 국적자의 상속등기 — 반정 적용</div>
<div class="r-body">
      미국 국제사법(Restatement §249)은 부동산 상속에 관하여 <strong>부동산 소재지법</strong>을
      준거법으로 채택하고 있으므로, 미국인 피상속인이 남긴 한국 소재 부동산 상속에 관하여는
      반정에 의하여 한국법이 적용된다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">선례 5-333</div>
<div class="r-title">미국 국적자의 상속 — 인감증명 대체</div>
<div class="r-body">
      미국에는 인감제도가 없으므로, 미국 국적자의 등기신청에 필요한 인감증명은
      관공서 발행 상속증명서 또는 <strong>공증서면</strong>으로 대체할 수 있다.
      서명의 진정성은 공증을 통해 확인한다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">선례 6-225</div>
<div class="r-title">중국 국적자의 상속등기 — 증명서류 인증</div>
<div class="r-body">
      중국 국적자의 상속등기 신청 시 제출하는 본국 정부기관 또는 주한중국대사관 발행 증명서는
      <strong>한국 재외공관 또는 권한 있는 기관의 인증</strong>을 받아야 한다.
      중국어로 된 서면에는 번역문을 첨부해야 한다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">선례 7-171</div>
<div class="r-title">외국인 주소 증명 — 공증서면 허용</div>
<div class="r-body">
      국외에 거주하는 외국인의 주소 증명은 본국 관공서 발행 서면 외에
      <strong>공증인의 공증을 받은 서면</strong>으로도 할 수 있다 (예규 제1393호 참조).
      등기신청서의 주소 기재와 일치해야 한다.
    </div>
</div>
</section>
<!-- 5. 주의사항 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 06</span>주의사항
  </h2>
<div class="warn-box">
<div class="w-title">⚠️ 이중국적자 — 한국법 우선 적용</div>
<p>
      피상속인이 한국 국적을 포함한 이중국적자인 경우, 국제사법 제16조에 따라
      <strong>가장 밀접한 관련이 있는 국가의 법</strong>이 적용되며, 한국 국적이 포함되어 있으면
      <strong>한국법이 우선 적용</strong>됩니다.
    </p>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 아포스티유 협약 여부 확인 필수</div>
<p>
      외국 공문서의 진정성 확인 방법은 해당 국가가 헤이그 아포스티유 협약 가입국인지에 따라 다릅니다.
    </p>
<ul>
<li><strong>협약 가입국</strong>: 아포스티유 인증으로 충분 (한국 재외공관 인증 불필요)</li>
<li><strong>비협약국</strong>: 한국 재외공관(영사)의 인증 또는 현지 공증 + 영사 확인 필요</li>
</ul>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 준거법 내용의 증명 책임</div>
<p>
      외국법(본국법)이 준거법으로 적용되는 경우, 등기관은 그 외국법의 내용을 직권으로 알 수 없습니다.
      신청인이 <strong>외국법의 내용을 증명하는 서면</strong>(해당국 법전, 법무부 확인서, 변호사 의견서 등)을
      첨부해야 할 수 있으며, 이를 게을리하면 보정 또는 각하 사유가 됩니다.
    </p>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 상속포기 · 한정승인도 본국법 기준</div>
<p>
      상속포기나 한정승인의 허용 여부 및 방법도 원칙적으로 <strong>준거법(본국법 또는 반정에 의한 한국법)</strong>에 따릅니다.
      반정으로 한국법이 적용되는 경우에는 한국 민법상의 상속포기·한정승인 절차(가정법원)를 따릅니다.
    </p>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 외국인의 토지 취득 제한 규정 별도 확인</div>
<p>
      외국인 토지법 등에 의한 외국인의 토지 취득 제한 규정은 상속등기와 별개로 적용될 수 있습니다.
      상속으로 인한 취득은 허가 대상에서 제외되는 경우가 많으나, 취득 후 <strong>신고 의무</strong>가 있는 경우도 있으므로
      해당 법령을 반드시 확인하십시오.
    </p>
</div>
</section>
<!-- 7. 다음으로 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 07</span>다음으로 확인할 내용
  </h2>
<div class="next-box">
<h3>관련 페이지</h3>
<div class="next-links">
<a class="next-link" href="상속_01_개요.html">
<span class="arrow">▶</span>
        상속등기 전체 개요 — 처음이라면 여기서 시작하세요
      </a>
<a class="next-link" href="상속_03_협의분할.html">
<span class="arrow">▶</span>
        협의분할에 의한 상속등기 — 상속인 간 합의로 나누는 방법
      </a>
<a class="next-link" href="상속_18_유증등기.html">
<span class="arrow">▶</span>
        유증으로 인한 소유권이전등기 — 유언에 의한 재산 이전
      </a>
<a class="next-link" href="상속_21_상속회복.html">
<span class="arrow">▶</span>
        상속회복청구 — 빼앗긴 상속재산 되찾기
      </a>
</div>
</div>
</section>
<!-- 8. CTA -->
<section>
</section>
<!-- 면책 -->
<section>
<p class="disclaimer">
    본 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.
    외국인 상속등기는 국적, 피상속인의 본국법 내용, 관련 조약 등 개별 사정에 따라 결론이 달라질 수 있습니다.
    구체적인 사안에 대해서는 반드시 자격 있는 법무사 또는 변호사의 상담을 받으시기 바랍니다.
    법령 및 선례는 개정·변경될 수 있으므로, 최신 정보를 확인하시기 바랍니다.
  </p>
</section>
</main>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-23', title: '상속인 부존재',
        meta: '법률상 상속인이 없어도 — 사실혼 배우자·요양간호인이 재산을 받는 방법',
        sections: [
          {
            heading: '전체 내용',
            content: `<main>
<!-- 1. 이런분께 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 01</span>이런 분께 필요한 정보입니다
  </h2>
<div class="target-cards">
<div class="target-card">
<div class="icon">💑</div>
<p>사망한 분과 수년간 함께 살았지만 혼인신고를 하지 못한 사실혼 배우자</p>
</div>
<div class="target-card">
<div class="icon">🏥</div>
<p>오랫동안 망인을 곁에서 돌봐 드렸으나 법률상 상속인이 아닌 경우</p>
</div>
<div class="target-card">
<div class="icon">👨‍👩‍👧</div>
<p>사실상의 양친자 관계였으나 입양신고가 되어 있지 않은 경우</p>
</div>
<div class="target-card">
<div class="icon">🏛️</div>
<p>상속인 없이 사망한 분의 재산이 국가에 귀속되기 전에 권리를 주장하고 싶은 경우</p>
</div>
</div>
</section>
<!-- 2. 핵심요약 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 02</span>핵심요약
  </h2>
<div class="summary-box">
<ul>
<li><strong>상속인 부존재</strong> — 법률상 상속인이 전혀 없거나 상속인의 존부가 불분명할 때, 법원이 상속재산관리인을 선임하고 청산 절차를 진행합니다.</li>
<li><strong>특별연고자 재산분여</strong> — 사실혼배우자, 요양·간호인 등 피상속인과 특별한 연고가 있던 자는 법원에 재산분여를 청구할 수 있습니다(민법 제1057조의2).</li>
<li><strong>청구 기한</strong> — 상속인 수색공고 기간 만료 후 <strong>2개월 이내</strong>에 가정법원에 재산분여를 청구해야 합니다. 이 기간을 놓치면 더 이상 청구할 수 없습니다.</li>
<li><strong>원시취득</strong> — 분여받은 재산은 상속이 아닌 원시취득이므로 상속채무는 승계되지 않습니다.</li>
<li><strong>잔여재산 국가귀속</strong> — 특별연고자가 없거나 분여 후 남은 재산은 국가에 귀속됩니다(민법 제1058조).</li>
</ul>
</div>
</section>
<!-- 3. 상세내용 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 03</span>상세내용
  </h2>
<!-- 청구기한 배너 -->
<div class="deadline-banner">
<div class="icon">⏳</div>
<div class="text">
<strong>재산분여 청구 기한을 놓치지 마세요!</strong><br/>
      상속인 수색공고 기간(1년 이상)이 만료된 후 <strong>2개월 이내</strong>에 가정법원에 재산분여 심판을 청구해야 합니다(민법 제1057조의2 제1항). 이 기간이 지나면 분여를 청구할 수 없습니다.
    </div>
</div>
<!-- 3-1. 전체 흐름도 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin-bottom:16px;">📋 상속인 부존재 시 전체 처리 흐름</h3>
<div class="flow-chart">
<div class="flow-timeline">
<!-- 1단계 -->
<div class="ft-row">
<div class="ft-left">
<div class="ft-label">사망 후<br/>즉시</div>
<div class="ft-law">민법 §1053</div>
</div>
<div class="ft-center">
<div class="ft-dot"></div>
<div class="ft-line"></div>
</div>
<div class="ft-right">
<div class="ft-box">
<strong>상속재산관리인 선임 공고</strong><br/>
            이해관계인·검사의 청구 → 가정법원이 관리인 선임 후 즉시 공고
          </div>
</div>
</div>
<!-- 2단계 -->
<div class="ft-row">
<div class="ft-left">
<div class="ft-label">공고 후<br/>3개월 경과</div>
<div class="ft-law">민법 §1056</div>
</div>
<div class="ft-center">
<div class="ft-dot"></div>
<div class="ft-line"></div>
</div>
<div class="ft-right">
<div class="ft-box">
<strong>채권신고 공고</strong> (2개월 이상)<br/>
            관리인이 상속채권자·유증받은 자에게 채권신고 요청 → 채무 청산
          </div>
</div>
</div>
<!-- 3단계 -->
<div class="ft-row">
<div class="ft-left">
<div class="ft-label">채권신고<br/>기간 경과</div>
<div class="ft-law">민법 §1057</div>
</div>
<div class="ft-center">
<div class="ft-dot"></div>
<div class="ft-line"></div>
</div>
<div class="ft-right">
<div class="ft-box">
<strong>상속인 수색공고</strong> (1년 이상)<br/>
            법원이 "1년 이상의 기간 내에 상속권을 주장하라"고 공고<br/>
            → 기간 내 아무도 나타나지 않으면 <strong>상속인 부존재 확정</strong>
</div>
</div>
</div>
<!-- 4단계 분기 -->
<div class="ft-row">
<div class="ft-left">
<div class="ft-label">수색공고<br/>만료 후 2월</div>
<div class="ft-law">민법 §1057의2</div>
</div>
<div class="ft-center">
<div class="ft-dot gold"></div>
<div class="ft-line"></div>
</div>
<div class="ft-right">
<div class="ft-box gold-box">
<strong>특별연고자 재산분여 청구 가능 기간</strong><br/>
            수색공고 만료 후 <strong>2개월 이내</strong>에 가정법원에 청구
            <div class="ft-branch" style="margin-top:10px;">
<div class="ft-branch-item">
<div class="bh">✅ 분여 인용</div>
                상속재산 전부 또는 일부를 분여받아 소유권이전등기
              </div>
<div class="ft-branch-item">
<div class="bh">❌ 청구 없음/기각</div>
                잔여 상속재산은 국가에 귀속
              </div>
</div>
</div>
</div>
</div>
<!-- 5단계 -->
<div class="ft-row">
<div class="ft-left">
<div class="ft-label">최종</div>
<div class="ft-law">민법 §1058</div>
</div>
<div class="ft-center">
<div class="ft-dot green"></div>
</div>
<div class="ft-right">
<div class="ft-box green-box">
<strong>잔여재산 국가귀속</strong><br/>
            특별연고자 없거나 분여 후 남은 재산 → 국가(관리청: 기획재정부) 귀속
          </div>
</div>
</div>
</div><!-- /flow-timeline -->
</div>
<!-- 3-2. 상속인 부존재 유형 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">❓ 상속인 부존재에 해당하는 경우</h3>
<div class="info-box">
<ul style="padding-left:18px; margin:0;">
<li style="margin-bottom:8px;"><strong>신원불명의 자가 사망</strong>한 경우</li>
<li style="margin-bottom:8px;"><strong>가족관계등록부상 상속인이 없는</strong> 경우 (혼인·자녀 없이 사망)</li>
<li style="margin-bottom:8px;">상속인 <strong>전원이 상속을 포기</strong>하여 상속인이 없게 된 경우</li>
<li style="margin-bottom:0;"><strong>⚠️ 해당 없음</strong>: 상속인의 존재는 분명하나 <strong>행방·생사가 불분명</strong>한 경우 → 이는 부재자 재산관리 문제로 별도 처리</li>
</ul>
</div>
<!-- 3-3. 특별연고자 3가지 유형 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">🤝 특별연고자로 인정받는 3가지 유형</h3>
<div class="yongo-grid">
<div class="yongo-card">
<div class="yh">① 함께 생활한 자</div>
<div class="yb">
<ul>
<li>사실혼 배우자</li>
<li>사실상의 양친 또는 양자</li>
<li>인지되지 않은 혼외자</li>
<li>계모자 관계</li>
</ul>
<p style="font-size:12px; color:#5a6475; margin-top:8px; margin-bottom:0;">추상적 친족 촌수가 아닌, 실질적·구체적 공동생활로 판단</p>
</div>
</div>
<div class="yongo-card">
<div class="yh">② 요양·간호한 자</div>
<div class="yb">
<ul>
<li>상속인이 아닌 친족</li>
<li>가까운 지인·이웃</li>
<li>피상속인을 특별히 돌본 자</li>
</ul>
<p style="font-size:12px; color:#5a6475; margin-top:8px; margin-bottom:0;">요양·간호의 동기는 묻지 않음. 반드시 생계 동거일 필요 없음</p>
</div>
</div>
<div class="yongo-card">
<div class="yh">③ 기타 특별 연고자</div>
<div class="yb">
<ul>
<li>정신적·물질적 밀접 관계</li>
<li>법인 또는 법인 아닌 사단도 가능</li>
<li>과거 연고도 인정 가능</li>
</ul>
<p style="font-size:12px; color:#5a6475; margin-top:8px; margin-bottom:0;">피상속인의 의사에 합치할 정도의 특별 관계 — 법원이 재량으로 판단</p>
</div>
</div>
</div>
<!-- 3-4. 재산분여 효과 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">⚖️ 재산분여 인용 시 효과</h3>
<div class="effect-grid">
<div class="effect-card good">
<div class="eh">✅ 받을 수 있는 것</div>
<ul>
<li>청산 후 남은 상속재산의 <strong>전부 또는 일부</strong></li>
<li>소유권이전등기를 통한 권리 취득</li>
<li><strong>원시취득</strong> — 깨끗한 권원으로 취득</li>
</ul>
</div>
<div class="effect-card limit">
<div class="eh">⚠️ 부담하지 않는 것</div>
<ul>
<li>피상속인의 <strong>상속채무는 승계되지 않음</strong></li>
<li>상속채권자·수증자가 분여받은 자에게 변제 청구 불가</li>
<li>상속인이 아니므로 세금 등 별도 확인 필요</li>
</ul>
</div>
</div>
<!-- 3-5. 등기 절차 -->
<h3 style="font-family:'Noto Serif KR',serif; font-size:16px; color:var(--navy); margin:24px 0 14px;">📝 등기 신청 정보</h3>
<!-- 특별연고자 분여 등기 -->
<div class="reg-box">
<h4>① 특별연고자에 대한 분여 등기</h4>
<table class="reg-table">
<thead>
<tr>
<th style="width:110px;">항목</th>
<th>내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>등기원인</strong></td>
<td>민법 제1057조의2의 규정에 의한 심판</td>
</tr>
<tr>
<td><strong>원인일자</strong></td>
<td>가정법원의 심판 <strong>확정일</strong></td>
</tr>
<tr>
<td><strong>신청인</strong></td>
<td>특별연고자(등기권리자) + 상속재산관리인(등기의무자) 공동 신청</td>
</tr>
<tr>
<td><strong>첨부서류</strong></td>
<td>① 상속인 부존재를 증명하는 서면(가족관계증명서 등)<br/>② 상속재산관리인 선임심판서<br/>③ 재산분여 확정심판 등본</td>
</tr>
<tr>
<td><strong>관리인 정보</strong></td>
<td>등기신청 시 상속재산관리인에 관한 정보도 제공 필요</td>
</tr>
</tbody>
</table>
</div>
<!-- 기록례 분여 -->
<div class="record-box">
<div class="rt">[등기기록례] 특별연고자 분여 등기</div>
<table>
<tr>
<td class="rhead">등기목적</td>
<td class="rhead">접수</td>
<td class="rhead">등기원인</td>
<td class="rhead">권리자</td>
</tr>
<tr>
<td>소유권이전</td>
<td>2014년 5월 4일<br/>제35이호</td>
<td>2010년 4월 5일<br/>민법 제1057조의2의<br/>규정에 의한 심판</td>
<td>소유자 이도령<br/>501241-056407<br/>서울특별시 중구 회현동 7</td>
</tr>
</table>
</div>
<!-- 상속인 부존재 확정 등기(공유지분) -->
<div class="reg-box" style="margin-top:16px;">
<h4>② 상속인 부존재로 인한 공유지분 귀속 등기</h4>
<table class="reg-table">
<thead>
<tr>
<th style="width:110px;">항목</th>
<th>내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>적용 상황</strong></td>
<td>피상속인이 공유지분을 소유하고 있을 때 — 그 지분은 다른 공유자에게 귀속(민법 제267조)</td>
</tr>
<tr>
<td><strong>등기원인</strong></td>
<td>상속인부존재 확정</td>
</tr>
<tr>
<td><strong>원인일자</strong></td>
<td>상속인 수색공고 기간의 <strong>다음 날</strong></td>
</tr>
<tr>
<td><strong>신청인</strong></td>
<td>다른 공유자(등기권리자) + 상속재산관리인(등기의무자) 공동 신청</td>
</tr>
<tr>
<td><strong>첨부서류</strong></td>
<td>① 상속인 부존재 확정 증명서면<br/>② 상속재산관리인 선임심판서</td>
</tr>
</tbody>
</table>
</div>
<!-- 국가귀속 등기 -->
<div class="reg-box" style="margin-top:16px;">
<h4>③ 상속재산 국가귀속 등기</h4>
<table class="reg-table">
<thead>
<tr>
<th style="width:110px;">항목</th>
<th>내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>등기원인</strong></td>
<td>권리귀속</td>
</tr>
<tr>
<td><strong>원인일자</strong></td>
<td>전 소유자의 <strong>사망일자</strong></td>
</tr>
<tr>
<td><strong>신청인</strong></td>
<td>국가(관리청: 기획재정부) + 상속재산관리인 공동 신청</td>
</tr>
<tr>
<td><strong>첨부서류</strong></td>
<td>① 상속인 부존재 확정 서면<br/>② 상속재산관리인 선임심판서<br/>③ 상속인 수색공고 확인 서면</td>
</tr>
<tr>
<td><strong>특이사항</strong></td>
<td>국가는 적극재산만 취득. 채무 부담 없음. 특허권·저작권 등 무체재산권은 귀속되지 않고 소멸.</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- 6. Q&A -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 04</span>자주 묻는 질문 (Q&amp;A)
  </h2>
<div class="qna-item">
<div class="qna-q">Q. 사실혼 배우자인데 상속인이 없어요. 재산을 받을 수 있나요?</div>
<div class="qna-a">
      네, 가능성이 있습니다. 사실혼 배우자는 민법 제1057조의2에서 말하는 "피상속인과 생계를 같이 하고 있던 자"에 해당하여 특별연고자로 인정될 수 있습니다. 다만 법원이 연고 사실과 상당성을 인정해야 하므로, 동거 기간, 생계 공동체 여부, 혼인 의사 등을 뒷받침하는 증거를 충분히 준비해야 합니다. 상속인 수색공고 기간 만료 후 2개월 이내에 가정법원에 재산분여 심판을 청구하세요.
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 수년간 망인을 혼자 간병했습니다. 특별연고자가 될 수 있나요?</div>
<div class="qna-a">
      인정받을 가능성이 있습니다. 법은 "피상속인을 요양·간호한 자"를 특별연고자의 한 유형으로 명시하고 있으며, 요양이나 간호의 동기는 묻지 않습니다. 간호 기간, 병원 동행 기록, 비용 지출 내역, 피상속인과의 관계 등을 입증하는 자료를 준비하여 법원에 청구하시기 바랍니다.
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 상속인 수색공고가 언제 끝났는지 어떻게 알 수 있나요?</div>
<div class="qna-a">
      가정법원 사건번호를 통해 확인하거나, 상속재산관리인에게 직접 문의할 수 있습니다. 또한 법원의 공고는 관보나 법원 게시판에 게재되므로, 해당 법원의 게시판 또는 전자소송 시스템을 통해 확인할 수도 있습니다. 피상속인의 사망 사실을 안 경우에는 즉시 관련 진행 상황을 조회하는 것이 좋습니다.
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 재산분여를 받아도 피상속인의 빚을 갚아야 하나요?</div>
<div class="qna-a">
      아닙니다. 특별연고자는 상속인이 아니기 때문에 상속채무를 승계하지 않습니다. 법원에 의해 재산분여가 결정되면 청산 후 남은 재산의 전부 또는 일부를 원시취득하게 되며, 상속채권자나 수증자는 특별연고자에게 변제 청구를 할 수 없습니다(민법 제1057조의2 제2항 취지).
    </div>
</div>
<div class="qna-item">
<div class="qna-q">Q. 상속인이 1명이라도 있으면 특별연고자 제도를 이용할 수 없나요?</div>
<div class="qna-a">
      맞습니다. 특별연고자에 대한 재산분여 제도는 법률상 상속인이 전혀 없거나 상속인의 존부가 불분명한 경우에만 적용됩니다. 법률상 상속인이 한 명이라도 상속을 승인하면 상속재산 전부가 그 상속인에게 귀속되므로, 이 제도를 이용할 수 없습니다. 상속인 전원이 상속을 포기한 경우에는 활용 가능합니다.
    </div>
</div>
</section>
<!-- 4. 판례 및 선례 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 05</span>관련 판례 · 선례
  </h2>
<div class="ruling-card">
<div class="r-label">대법원 1977. 1. 11. 선고 76다184·185 판결</div>
<div class="r-title">상속재산관리인은 반드시 친족일 필요 없음</div>
<div class="r-body">
      가정법원이 선임하는 상속재산관리인은 피상속인의 친족에 한하지 않는다.
      관리인의 직무는 상속재산의 보존·청산이므로, 법원이 적합한 자를 자유롭게 선임할 수 있다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">대법원 1976. 12. 28. 선고 76다797 판결</div>
<div class="r-title">상속재산관리인의 당사자적격</div>
<div class="r-body">
      상속재산관리인은 장래 나타날 상속인·포괄수증자의 법정대리인 지위에 서게 되므로,
      상속재산에 관한 소송에서 <strong>정당한 당사자적격</strong>이 있다.
      관리인을 피고로 하여 상속재산에 관한 소송을 진행할 수 있다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">선례 2-340</div>
<div class="r-title">제적등본만으로는 상속인 부존재 증명 불충분</div>
<div class="r-body">
      법원의 허가에 의하여 말소된 제적등본만으로는 재산상속인이 없다는 공적 증명이 될 수 없다.
      반드시 민법 제1053조·제1057조 등에 의한 <strong>청산 절차를 거쳐 상속인 부존재가 확정된 후</strong>에야
      공유지분귀속등기를 신청할 수 있다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">선례 4-651</div>
<div class="r-title">등기된 부동산의 국가귀속 — 민법 절차에 의해야</div>
<div class="r-body">
      등기되어 있는 무주 부동산을 국유재산으로 취득하기 위해서는 국유재산법 제12조 제3항이 아닌,
      민법 제1053조부터 제1058조에서 규정한 <strong>상속인 부존재 청산 절차에 의하여</strong>
      국가에 귀속시켜야 한다.
    </div>
</div>
<div class="ruling-card">
<div class="r-label">민법 제1059조 취지</div>
<div class="r-title">국가귀속 후 상속채권자의 변제청구 불가</div>
<div class="r-body">
      잔여 상속재산이 국가에 귀속된 후에는 변제받지 못한 상속채권자 또는 유증받은 자는
      <strong>국가에 대하여 변제를 청구하지 못한다</strong>(민법 제1059조).
      국가는 적극재산만을 원시취득하는 것이지, 채무를 승계하는 것이 아니기 때문이다.
    </div>
</div>
</section>
<!-- 5. 주의사항 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 06</span>주의사항
  </h2>
<div class="warn-box">
<div class="w-title">⚠️ 2개월 청구 기한 — 절대적 제한</div>
<p>
      특별연고자의 재산분여 청구는 <strong>상속인 수색공고 기간 만료 후 2개월 이내</strong>에만 할 수 있습니다(민법 제1057조의2 제1항). 이 기간은 불변기간에 준하여 해석되므로, 기간이 지나면 어떠한 사유가 있더라도 청구가 허용되지 않습니다. 실제로 수색공고 기간이 언제 만료되는지 미리 확인해 두어야 합니다.
    </p>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 재산분여는 법원의 재량 — 반드시 인용되지 않음</div>
<p>
      특별연고자로 인정될 만한 사정이 있더라도, 법원이 재산분여의 <strong>상당성</strong>을 인정해야만 심판이 이루어집니다. 연고관계의 내용과 친밀도, 간호의 정도, 상속재산의 종류 등 모든 사정이 종합 고려됩니다. 법원이 청구를 기각하거나 일부만 분여할 수도 있습니다.
    </p>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 공유 부동산 — 다른 공유자에게 귀속</div>
<p>
      피상속인이 다른 사람과 공유하고 있는 부동산의 지분은 일반적인 국가귀속 규정(민법 제1058조)과 달리, 민법 제267조에 따라 <strong>다른 공유자에게 귀속</strong>됩니다. 특별연고자가 이를 주장하기 위해서는 별도의 주의가 필요합니다.
    </p>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 상속재산관리인 선임이 전제 조건</div>
<p>
      특별연고자 재산분여 등기를 신청하려면 반드시 <strong>상속재산관리인이 선임</strong>되어 있어야 합니다. 관리인이 등기의무자로서 공동 신청해야 하며, 관리인 선임 심판서를 첨부해야 합니다. 관리인 선임 전에는 분여 등기를 신청할 수 없습니다.
    </p>
</div>
<div class="warn-box">
<div class="w-title">⚠️ 상속세와 취득세 — 별도 확인 필요</div>
<p>
      특별연고자의 재산분여는 상속이 아닌 원시취득이지만, 세법상 취급이 다를 수 있습니다. 분여받는 재산에 대한 취득세 및 증여세·상속세 적용 여부를 반드시 사전에 세무사 등 전문가와 확인하시기 바랍니다.
    </p>
</div>
</section>
<!-- 7. 다음으로 -->
<section>
<h2 class="inh-section-title">
<span class="num">SECTION 07</span>다음으로 확인할 내용
  </h2>
<div class="next-box">
<h3>관련 페이지</h3>
<div class="next-links">
<a class="next-link" href="상속_02_상속인순위.html">
<span class="arrow">▶</span>
        법정 상속인 순위 — 누가 상속인인지 먼저 확인하세요
      </a>
<a class="next-link" href="상속_06_상속포기.html">
<span class="arrow">▶</span>
        상속포기 — 상속인 전원 포기 시 상속인 부존재가 됩니다
      </a>
<a class="next-link" href="상속_20_유류분.html">
<span class="arrow">▶</span>
        유류분 — 상속인이 있을 때 최소한의 상속 몫 보장
      </a>
<a class="next-link" href="상속_24_상속재산파산.html">
<span class="arrow">▶</span>
        상속재산파산 — 상속재산이 채무 초과인 경우
      </a>
</div>
</div>
</section>
<!-- 8. CTA -->
<section>
</section>
<!-- 면책 -->
<section>
<p class="disclaimer">
    본 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.
    특별연고자 해당 여부와 재산분여 가능성은 구체적 사실관계에 따라 달라질 수 있으므로,
    반드시 자격 있는 법무사 또는 변호사의 상담을 받으시기 바랍니다.
    법령 및 판례·선례는 개정·변경될 수 있으므로 최신 정보를 확인하시기 바랍니다.
  </p>
</section>
</main>`
          }
        ],
        laws: [],
        forms: []
      },
      {
        id: 'in-24', title: '상속재산 파산',
        meta: '파산관재인을 통한 공정한 법정 청산 — 회생법원 절차 완전 안내',
        sections: [
          {
            heading: '전체 내용',
            content: `<!-- ── 헤더 ── -->

<main>
<!-- ── 0. 이런 분께 ── -->
<section id="for-whom">
<h2>이런 분께 이 안내가 필요합니다</h2>
<ul class="check-list">
<li>망인의 채무가 재산을 크게 초과하고, 채권자 수도 많아 상속인이 직접 청산하기 부담스러운 분</li>
<li>한정승인을 받았으나 상속재산에 부동산이 많거나 청산 절차가 지나치게 복잡한 분</li>
<li>법원이 선임한 파산관재인에게 청산 전반을 맡겨 공정하고 안전하게 마무리하고 싶은 분</li>
<li>상속재산 파산을 통해 상속채권자와 상속인의 채권자를 법적으로 분리하고 싶은 분</li>
<li>한정승인·상속포기 외의 세 번째 청산 선택지가 있다는 것을 처음 알게 된 분</li>
</ul>
</section>
<!-- ── 1. 핵심 요약 ── -->
<section id="summary">
<h2>핵심 요약</h2>
<div class="summary-box">
<div class="summary-title">📋 상속재산 파산 핵심 포인트</div>
<ul>
<li><strong>의의:</strong> 채무초과 망인의 상속재산에 대해 법원이 선임한 파산관재인이 청산하는 절차 (채무자회생법 제299조)</li>
<li><strong>신청 기관:</strong> 가정법원이 아닌 <em>회생법원</em> (서울은 서울회생법원)</li>
<li><strong>신청 자격:</strong> 상속채권자, 유증 받은 자, 상속인, 상속재산관리인, 유언집행자</li>
<li><strong>특징:</strong> 상속재산과 상속인의 고유재산이 법적으로 분리 → 상속인의 고유재산 보호</li>
<li><strong>한정승인과의 차이:</strong> 한정승인은 상속인이 직접 청산(임의변제) / 파산은 파산관재인이 청산(법정절차)</li>
<li><strong>기간 제한:</strong> 별도의 신청 기한 없음 (한정승인·상속포기의 3개월 기한 불적용)</li>
</ul>
</div>
<h3>상속채무 청산 3가지 방법 비교</h3>
<div class="compare-grid">
<div class="cg-card blue">
<div class="cg-label">방법 1</div>
<div class="cg-title">한정승인</div>
<div class="cg-body">
<ul>
<li>관할: 가정법원</li>
<li>청산 주체: 상속인 직접</li>
<li>방식: 임의변제 (형식적 경매)</li>
<li>기한: 3개월 이내</li>
<li>비용: 상대적으로 적음</li>
<li>복잡도: 상속인 부담 있음</li>
</ul>
</div>
</div>
<div class="cg-card green">
<div class="cg-label">방법 2</div>
<div class="cg-title">상속포기</div>
<div class="cg-body">
<ul>
<li>관할: 가정법원</li>
<li>청산 주체: 없음 (포기)</li>
<li>방식: 상속 자체 거부</li>
<li>기한: 3개월 이내</li>
<li>비용: 가장 적음</li>
<li>차순위 이전 위험 있음</li>
</ul>
</div>
</div>
<div class="cg-card purple">
<div class="cg-label">방법 3</div>
<div class="cg-title">상속재산 파산</div>
<div class="cg-body">
<ul>
<li>관할: 회생법원</li>
<li>청산 주체: 파산관재인</li>
<li>방식: 법정 파산 절차</li>
<li>기한: 제한 없음</li>
<li>비용: 상대적으로 높음</li>
<li>복잡도: 전문가 처리</li>
</ul>
</div>
</div>
</div>
<h3>상속재산 파산이 유리한 경우 / 불리한 경우</h3>
<div class="when-box good">
<div class="wb-title">✅ 파산 절차가 유리한 경우</div>
<ul>
<li>채권자 수가 많고 채무 관계가 복잡하여 상속인이 직접 청산하기 어려운 경우</li>
<li>상속재산에 부동산이 다수 포함되어 있고 변제 순서에 분쟁이 예상되는 경우</li>
<li>상속인의 채권자가 상속재산에 집행하려는 시도를 차단하고 싶은 경우</li>
<li>상속인이 청산 실수로 인한 법적 책임을 피하고 싶은 경우 (파산관재인이 처리)</li>
<li>한정승인 후 청산이 너무 복잡해 파산으로 전환하려는 경우</li>
</ul>
</div>
<div class="when-box bad">
<div class="wb-title">⚠️ 파산 절차보다 한정승인이 유리한 경우</div>
<ul>
<li>상속재산 규모가 작고 채권자 수가 적어 상속인이 직접 청산할 수 있는 경우</li>
<li>파산 절차 비용(파산관재인 보수 등)이 상속재산보다 과다해질 우려가 있는 경우</li>
<li>신속하게 청산을 마무리하고 싶고 절차 간소화를 원하는 경우</li>
</ul>
</div>
</section>
<!-- ── 2. 절차 흐름도 ── -->
<section id="flow">
<h2>한눈에 보는 상속재산 파산 절차 흐름도</h2>
<div class="flow-wrap">
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">1</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">파산원인 확인 — 채무초과 여부 파악</div>
<div class="fc-sub">망인의 상속재산(적극재산)과 채무(소극재산)를 조사하여 채무초과 여부를 확인합니다. 채무초과가 파산의 기본 요건입니다. <span class="law-cite">채무자회생법 제299조</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">2</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">파산신청서 작성 및 제출 — 회생법원</div>
<div class="fc-sub">파산신청서, 상속재산목록, 채권자 목록, 상속관계 증빙서류를 준비하여 <em>회생법원</em>에 신청합니다. 서울의 경우 서울회생법원에 제출합니다. <span class="law-cite">채무자회생법 제300조</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">3</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">파산선고 및 파산관재인 선임</div>
<div class="fc-sub">법원이 파산 요건을 심리한 후 <em>파산선고</em>를 내리고, 파산관재인을 선임합니다. 파산선고 이후 상속재산에 대한 관리·처분 권한은 파산관재인에게 이전됩니다. <span class="law-cite">채무자회생법 제309조</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">4</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">파산재단 구성 — 상속재산 확정</div>
<div class="fc-sub">파산관재인이 상속재산 전체를 조사하여 <em>파산재단</em>을 구성합니다. 파산재단은 상속인의 고유재산과 엄격히 분리됩니다. <span class="law-cite">채무자회생법 제382조</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">5</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">채권자 신고 및 채권 조사</div>
<div class="fc-sub">법원이 채권신고 기간을 정하여 공고합니다. 알려진 채권자에게는 개별 통지합니다. 신고된 채권은 파산관재인이 조사하여 확정합니다. <span class="law-cite">채무자회생법 제447조~제464조</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">6</div>
<div class="flow-line"></div>
</div>
<div class="flow-content">
<div class="fc-title">파산재단 환가 및 배당</div>
<div class="fc-sub">파산관재인이 상속재산을 환가(매각)하고, 확정된 채권에 따라 법정 순위대로 배당합니다. <em>담보권자 → 우선채권자(조세 등) → 일반파산채권자</em> 순으로 배당됩니다. <span class="law-cite">채무자회생법 제476조~제500조</span></div>
</div>
</div>
<div class="flow-gap"></div>
<div class="flow-step">
<div class="flow-left">
<div class="flow-num">7</div>
</div>
<div class="flow-content">
<div class="fc-title">파산절차 종결</div>
<div class="fc-sub">배당이 완료되면 파산절차가 종결됩니다. 잔여 채무는 소멸하지 않지만, 상속인의 고유재산으로는 집행할 수 없게 됩니다. 상속채권자는 파산재단으로만 변제받습니다. <span class="law-cite">채무자회생법 제538조</span></div>
</div>
</div>
</div>
</section>
<!-- ── 3. 단계별 상세 설명 ── -->
<section id="step-detail">
<h2>단계별 상세 설명</h2>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-badge">1</div>
<div class="step-title">파산신청 자격 — 누가 신청할 수 있나</div>
</div>
<div class="step-detail-body">
<p>상속재산 파산은 다음 중 어느 한 명이 신청할 수 있습니다.</p>
<div class="applicant-grid" style="margin-top:12px;">
<div class="ap-card">
<div class="ap-icon">👤</div>
<div class="ap-name">상속인</div>
<div class="ap-desc">한정승인 후 또는 직접 신청 가능</div>
</div>
<div class="ap-card">
<div class="ap-icon">💳</div>
<div class="ap-name">상속채권자</div>
<div class="ap-desc">채무변제를 받지 못한 채권자</div>
</div>
<div class="ap-card">
<div class="ap-icon">📜</div>
<div class="ap-name">유증 받은 자</div>
<div class="ap-desc">유언으로 재산을 받을 사람</div>
</div>
<div class="ap-card">
<div class="ap-icon">🏛️</div>
<div class="ap-name">상속재산관리인</div>
<div class="ap-desc">법원이 선임한 관리인</div>
</div>
<div class="ap-card">
<div class="ap-icon">✍️</div>
<div class="ap-name">유언집행자</div>
<div class="ap-desc">유언을 집행하는 자</div>
</div>
</div>
<p style="margin-top:12px;">한정승인을 한 이후에도 파산신청이 가능합니다. 실무에서는 상속인이 한정승인 수리 후 청산 절차가 복잡할 경우 파산으로 전환하는 사례가 있습니다.</p>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-badge">2</div>
<div class="step-title">관할 법원 — 반드시 회생법원에 신청</div>
</div>
<div class="step-detail-body">
<p>상속재산 파산은 가정법원이 아닌 회생법원(파산법원)에 신청합니다.</p>
<ul>
<li><strong>관할:</strong> 상속이 개시된 당시 피상속인의 주소지를 관할하는 지방법원 본원 합의부 (회생법원) <span class="law-tag">채무자회생법 제3조 제8항·제9항</span></li>
<li><strong>서울:</strong> 서울회생법원 (서울가정법원과 별개)</li>
<li><strong>지방:</strong> 각 지방법원 파산부 또는 합의부</li>
<li><strong>협업 체계:</strong> 2017년 7월부터 서울가정법원이 한정승인 수리심판서 송달 시 파산제도 안내문을 함께 발송하고 있습니다.</li>
</ul>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-badge">3</div>
<div class="step-title">파산관재인의 역할 — 청산의 중심</div>
</div>
<div class="step-detail-body">
<p>파산선고 후 법원이 선임한 파산관재인이 청산 전 과정을 담당합니다.</p>
<ul>
<li><strong>재산 조사·목록 작성:</strong> 파산재단에 속하는 상속재산 전체를 조사하여 목록화</li>
<li><strong>재산 관리·보전:</strong> 상속재산이 유출되거나 훼손되지 않도록 관리</li>
<li><strong>채권자 관리:</strong> 신고된 채권 조사, 채권자 집회 주재</li>
<li><strong>재산 환가:</strong> 부동산·동산 매각, 채권 추심 등을 통해 현금화</li>
<li><strong>배당 실시:</strong> 법정 순위에 따라 채권자에게 배당</li>
<li><strong>보고·감독:</strong> 법원에 주기적으로 업무 보고, 법원의 감독 하에 운영</li>
</ul>
<p>파산관재인은 통상 변호사 또는 법무사가 선임되며, 그 보수는 파산재단에서 지출됩니다.</p>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-badge">4</div>
<div class="step-title">재산 분리 효과 — 상속인 고유재산 보호</div>
</div>
<div class="step-detail-body">
<p>상속재산 파산의 핵심 효과는 상속재산과 상속인 고유재산의 법적 분리입니다.</p>
<ul>
<li><strong>상속채권자:</strong> 파산재단(상속재산)에서만 변제받을 수 있으며, 상속인의 고유재산에 대해서는 집행 불가</li>
<li><strong>상속인의 채권자:</strong> 파산채권자에서 배제 <span class="law-tag">채무자회생법 제438조</span> → 상속재산에서 배당받지 못함</li>
<li><strong>분리 효과:</strong> 한정승인의 경우 상속인이 직접 분리를 유지해야 하는 반면, 파산 시에는 법적으로 자동 분리됨</li>
<li><strong>상속인 보호:</strong> 파산 후 잔여 채무에 대해 상속인이 책임지지 않아도 됨 (파산재단 한도 내 처리)</li>
</ul>
</div>
</div>
<div class="step-detail">
<div class="step-detail-header">
<div class="step-badge">5</div>
<div class="step-title">배당 우선순위 — 채권자 변제 순서</div>
</div>
<div class="step-detail-body">
<p>파산재단의 배당은 다음 법정 순서에 따라 진행됩니다.</p>
<ol>
<li><strong>재단채권 (최우선):</strong> 파산절차 비용, 파산관재인 보수, 파산재단 관리·처분 비용 <span class="law-tag">채무자회생법 제473조</span></li>
<li><strong>담보권자:</strong> 상속재산에 설정된 저당권·전세권·질권 등 담보권에 기한 채권 (목적물 한도)</li>
<li><strong>우선채권:</strong> 조세(상속세·취득세 등), 공과금, 근로자 임금채권 등</li>
<li><strong>일반 파산채권:</strong> 담보 없는 일반 채권자 (채권액 비율로 배당)</li>
<li><strong>후순위 파산채권:</strong> 이자·벌금 등</li>
</ol>
<p>배당 후 잔여재산이 있으면 상속인에게 귀속됩니다. 재산이 부족하면 하위 순위 채권자는 변제를 받지 못할 수 있습니다.</p>
</div>
</div>
</section>
<!-- ── 4. 준비 서류 ── -->
<section id="documents">
<h2>준비 서류 목록</h2>
<p>파산신청서에는 상속관계 증빙서류와 재산·채무 현황 서류를 첨부합니다. 한정승인 서류와 일부 겹치지만, 채권자 목록과 재산목록이 특히 중요합니다.</p>
<div class="doc-section">
<div class="doc-section-title">📁 상속관계 증빙서류</div>
<ul class="doc-list">
<li>가족관계증명서 (피상속인·상속인) 각 1통</li>
<li>기본증명서 (피상속인·상속인) 각 1통</li>
<li>말소자 주민등록표등본 (피상속인) 1통</li>
<li>주민등록표등본 (상속인) 1통</li>
<li>제적등본 각 1통</li>
</ul>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 상속재산 현황 서류</div>
<ul class="doc-list">
<li>상속재산목록 (적극·소극재산 포함)</li>
<li>부동산 등기사항증명서</li>
<li>예금잔액증명서 (각 금융기관)</li>
<li>자동차등록원부</li>
<li>주식·유가증권 잔고증명</li>
<li>상속인 금융거래조회 결과</li>
</ul>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 채무 관련 서류</div>
<ul class="doc-list">
<li>채권자 목록 (채권자명·채무금액·채무종류 포함)</li>
<li>채무확인서 또는 부채증명서 (금융기관 발급)</li>
<li>판결문 또는 지급명령 정본 (있는 경우)</li>
<li>세금 체납 확인서 (국세·지방세)</li>
</ul>
<div class="doc-note"><strong>채권자 목록이 핵심:</strong> 파산신청 시 알려진 채권자를 가능한 한 빠짐없이 기재해야 합니다. 누락된 채권자는 추후 별도로 권리를 주장할 수 있으며, 분쟁의 원인이 됩니다.</div>
</div>
<div class="doc-section">
<div class="doc-section-title">📁 신청인 관련 서류 (상속인이 신청하는 경우)</div>
<ul class="doc-list">
<li>인감증명서 (상속인) 1통</li>
<li>한정승인 수리심판서 등본 (한정승인 후 신청 시)</li>
<li>한정승인 확정증명서 (동)</li>
</ul>
</div>
</section>
<!-- ── 5. 비용 안내 ── -->
<section id="cost">
<h2>비용 안내</h2>
<p>상속재산 파산은 한정승인보다 절차가 복잡하여 비용이 더 많이 발생합니다. 주요 비용 항목은 아래와 같습니다.</p>
<table class="cost-table">
<thead>
<tr><th>항목</th><th>내용</th><th>비고</th></tr>
</thead>
<tbody>
<tr>
<td><strong>신청 인지액</strong></td>
<td>파산신청에 따른 법원 수수료</td>
<td>법원 규정에 따름</td>
</tr>
<tr>
<td><strong>파산관재인 보수</strong></td>
<td>파산재단에서 지출 (재산 규모에 비례)</td>
<td>법원이 결정</td>
</tr>
<tr>
<td><strong>파산재단 관리 비용</strong></td>
<td>재산 보전·관리 비용</td>
<td>재단채권으로 최우선 변제</td>
</tr>
<tr>
<td><strong>공고 비용</strong></td>
<td>파산선고·채권신고 공고 (신문 등)</td>
<td>재단비용으로 처리</td>
</tr>
<tr>
<td><strong>변호사·법무사 보수</strong></td>
<td>신청 대리 및 절차 지원</td>
<td>별도 협의</td>
</tr>
</tbody>
</table>
<div class="cost-note">
    ※ 파산 비용은 파산재단(상속재산)에서 먼저 공제됩니다. 상속재산이 파산 비용에도 미치지 못할 경우에는 파산 절차 자체가 진행되기 어려울 수 있습니다. 신청 전에 비용 대비 실익을 전문가와 면밀히 검토하시기 바랍니다.
  </div>
</section>
<!-- ── 8. Q&A ── -->
<section id="qa">
<h2>자주 묻는 질문 (Q&amp;A)</h2>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>한정승인과 상속재산 파산 중 어느 것을 선택해야 하나요?</div>
<div class="qna-a">
<p>채무 규모가 작고 채권자가 적은 경우 한정승인이 비용·절차 면에서 유리합니다. 반면 채권자가 많거나 부동산 등 복잡한 재산이 있고 변제 순서에 분쟁이 예상된다면 파산을 통해 파산관재인에게 맡기는 것이 더 안전합니다.</p>
<p>두 제도를 단계적으로 활용하는 것도 가능합니다. 먼저 한정승인을 받아 상속재산 보전을 확보한 뒤, 청산 과정에서 복잡성이 커지면 파산으로 전환할 수 있습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다. 개별 사안에 대해서는 법무사 또는 변호사와 상담하시기 바랍니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>상속재산 파산을 신청하면 상속인의 신용에 영향이 있나요?</div>
<div class="qna-a">
<p>상속재산 파산은 '사람'이 아닌 '재산'에 대한 파산입니다. 따라서 상속인 개인의 신용정보나 파산 기록에는 영향을 주지 않습니다. 개인파산(채무자 파산)과는 근본적으로 다른 절차이므로 신용불량 등록 등의 불이익이 없습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>3개월이 지났어도 파산 신청이 가능한가요?</div>
<div class="qna-a">
<p>네, 가능합니다. 상속재산 파산에는 한정승인·상속포기와 같은 3개월의 신청 기한이 없습니다. 다만, 3개월이 지나 단순승인이 된 이후에 파산을 신청하면 상속인이 이미 상속채무를 전부 승계한 상태이므로, 파산재단의 범위와 효력에 대해 전문가와 먼저 상담하는 것이 중요합니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>채권자가 파산을 신청할 수도 있나요?</div>
<div class="qna-a">
<p>네, 상속채권자도 상속재산 파산을 신청할 수 있습니다(채무자회생법 제299조). 채권자 입장에서는 파산관재인을 통해 공정하게 채권을 회수할 수 있고, 다른 채권자와의 변제 경쟁에서 법적 보호를 받을 수 있습니다.</p>
<p>상속인이 한정승인 후 청산 절차를 이행하지 않거나 청산이 불공정하게 진행되고 있다고 판단하는 채권자는 직접 파산을 신청하는 방법을 검토해볼 수 있습니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>파산 절차 중에 새로운 상속재산이 발견되면 어떻게 되나요?</div>
<div class="qna-a">
<p>파산선고 이후 새로 발견된 상속재산도 파산재단에 귀속됩니다. 파산관재인에게 즉시 보고해야 하며, 파산관재인이 해당 재산을 환가하여 채권자 배당에 포함시킵니다.</p>
<p>상속인이 파산재단에 속하는 재산을 고의로 은닉하거나 훼손하면 법적 책임을 질 수 있으므로, 발견 즉시 파산관재인에게 신고하는 것이 중요합니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
<div class="qna-item">
<div class="qna-q"><span class="q-badge">Q</span>상속재산이 거의 없어 파산 비용도 충당이 안 될 것 같습니다. 어떻게 하나요?</div>
<div class="qna-a">
<p>파산재단이 파산 비용(재단채권)을 충당하기에도 부족한 경우, 법원은 파산폐지 결정을 내릴 수 있습니다. 이 경우 파산 절차 자체가 조기에 종료됩니다.</p>
<p>이런 상황이라면 상속재산 파산보다는 상속포기 또는 한정승인이 더 현실적인 선택일 수 있습니다. 전문가에게 상담하여 비용 대비 효과를 먼저 확인하시기 바랍니다.</p>
<div class="qa-disclaimer">※ 이 답변은 일반적인 법률 정보 제공을 목적으로 하며, 구체적인 사안에 대한 법률 조언이 아닙니다.</div>
</div>
</div>
</section>
<!-- ── 6. 관련 판례 ── -->
<section id="rulings">
<h2>관련 판례</h2>
<div class="ruling-card">
<div class="ruling-cite">대법원 2003. 11. 14. 선고 2003다30968 판결</div>
<div class="ruling-text">한정승인에 의하여 상속재산이 한정상속인의 고유재산으로부터 분리·독립되고 일종의 파산적 청산절차를 밟게 되는 점을 종합하면, 한정상속인의 채권자는 상속재산에 대하여 집행할 수 없고, 상속채권자는 한정상속인의 채권자들의 상속재산에 대한 집행에 대하여 제3자 이의의 소로써 이를 저지할 수 있다.</div>
<div class="ruling-point">실무 포인트: 한정승인과 파산 모두 상속채권자와 상속인의 채권자를 분리하는 효과가 있습니다. 상속채권자는 상속인의 채권자가 상속재산에 집행하려 할 때 이의를 제기할 수 있습니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2021. 9. 15. 선고 2021다224446 판결</div>
<div class="ruling-text">상속채권자는 상속인이 상속승인·포기를 하지 않은 동안에도 상속인을 상대로 상속재산에 관한 가압류결정을 받아 집행할 수 있다. 그 후 상속인이 상속포기를 하더라도 이미 발생한 가압류의 효력에는 영향이 없고, 해당 채권자는 파산 등의 절차에서 가압류채권자로서 배당을 받을 수 있다.</div>
<div class="ruling-point">실무 포인트: 파산신청 전에 채권자가 가압류를 집행한 경우에도 파산 배당 절차에서 적법하게 배당을 받을 수 있습니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">헌법재판소 1998. 8. 27. 96헌가22 결정 (관련 법령 개정 계기)</div>
<div class="ruling-text">상속채무가 상속재산을 초과하는 경우 상속인을 보호하지 않는 구 민법 제1026조 제2호는 헌법불합치 결정을 받았다. 이로 인해 2002년 특별한정승인 제도(민법 제1019조 제3항)가 신설되었고, 상속재산 파산 제도의 중요성이 부각되었다.</div>
<div class="ruling-point">실무 포인트: 상속채무 청산 제도 전반(한정승인·파산)은 상속인 보호를 위한 헌법적 요청에서 발전해 왔습니다.</div>
</div>
<div class="ruling-card">
<div class="ruling-cite">대법원 2018. 11. 9. 선고 2015다75308 판결 (한정승인 관련 준용)</div>
<div class="ruling-text">한정승인자가 알고 있는 채권자에 해당하는지 여부는 배당변제를 하는 시점을 기준으로 판단한다. 파산 절차에서도 이 원칙이 준용되어, 파산관재인이 알게 된 채권자에게는 배당을 해야 한다.</div>
<div class="ruling-point">실무 포인트: 파산 절차에서도 나중에 알게 된 채권자를 배당에서 임의로 제외할 수 없습니다. 채권자 파악을 소홀히 하면 추후 분쟁이 생길 수 있습니다.</div>
</div>
</section>
<!-- ── 7. 주의사항 ── -->
<section id="warnings">
<h2>주의사항</h2>
<div class="warn-card">
<div class="warn-title">⚠️ 가정법원이 아닌 회생법원에 신청해야 합니다</div>
<p>상속재산 파산은 가정법원(한정승인·상속포기)이 아닌 회생법원에 신청합니다. 서울의 경우 서울회생법원, 지방의 경우 해당 지방법원 파산부에 접수해야 합니다. 신청 법원을 혼동하면 각하 처분을 받을 수 있습니다.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 파산 비용이 상속재산을 초과하는 경우</div>
<p>파산재단의 재산이 파산 절차 비용(파산관재인 보수, 공고비 등)에도 미치지 못할 경우, 법원은 파산폐지 결정을 내릴 수 있습니다. 이 경우 절차가 진행되지 않으므로, 신청 전에 반드시 비용 대비 실익을 전문가와 확인하십시오.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 파산 후에도 잔여 채무는 소멸하지 않습니다</div>
<p>파산재단으로 변제를 받지 못한 채권자의 채권이 소멸하는 것은 아닙니다. 다만, 상속인의 고유재산에는 집행할 수 없습니다. 잔여 채무는 법적으로 남아 있지만 실질적으로 집행이 제한됩니다.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 한정승인과 파산을 병행하거나 전환할 수 있습니다</div>
<p>한정승인을 받은 후에도 청산 과정이 복잡해지면 추가로 상속재산 파산을 신청할 수 있습니다. 또한 처음부터 파산 절차를 선택하는 것도 가능합니다. 어느 방법이 더 유리한지는 재산 규모·채권자 수·비용을 종합하여 판단해야 합니다.</p>
</div>
<div class="warn-card">
<div class="warn-title">⚠️ 전문가 조력이 반드시 필요한 절차입니다</div>
<p>상속재산 파산은 채무자 회생 및 파산에 관한 법률에 따른 복잡한 법원 절차입니다. 한정승인보다 훨씬 전문적인 지식이 요구되므로, 변호사 또는 규모 있는 법무사사무소의 도움을 받아 진행하는 것이 필수적입니다.</p>
</div>
</section>
<!-- ── 9. 다음으로 확인할 내용 ── -->
<section id="navigation">
<h2>다음으로 확인할 내용</h2>
<div class="nav-cards">
<a class="nav-card prev" href="상속_07_한정승인.html">
<div class="nc-dir">← 관련 페이지</div>
<div class="nc-title">한정승인<br/>절차와 청산 방법</div>
<div class="nc-desc">파산 대신 한정승인으로 직접 청산을 진행하려면 이 페이지를 확인하세요.</div>
</a>
<a class="nav-card next" href="상속_06_상속포기.html">
<div class="nc-dir">관련 페이지 →</div>
<div class="nc-title">상속포기<br/>절차와 준비서류</div>
<div class="nc-desc">파산·한정승인 대신 상속 자체를 포기하는 방법을 알고 싶다면 이 페이지를 참고하세요.</div>
</a>
</div>
</section>
<!-- ── 10. CTA ── -->
<section id="cta">
</section>
<!-- ── 11. 면책 ── -->
<section id="disclaimer">
<div class="disclaimer-box">
<strong>【법적 면책 고지】</strong><br/>
    이 페이지의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 특정 사안에 대한 법률 조언이 아닙니다. 상속재산 파산의 구체적인 요건·효과·절차는 개별 사안에 따라 달리 판단될 수 있으며, 최신 법령 및 판례와 다를 수 있습니다. 실제 상속재산 파산 신청 시에는 반드시 변호사 또는 법무사의 전문적인 법률 상담을 받으시기 바랍니다. 이 안내 내용에 의존하여 발생한 결과에 대해 법무사 사무소는 책임을 지지 않습니다.
  </div>
</section>
</main>`
          }
        ],
        laws: [],
        forms: []
      }
    ]
  },

  /* ---- 기타 ---- */
  etc: {
    label: '기타',
    subcategories: [
      {
        id: 'foreign-realestate',
        name: '외국인등기 부동산등기',
        get topics() { return typeof FOREIGN_TOPICS !== 'undefined' ? FOREIGN_TOPICS : []; }
      },
      {
        id: 'etc-general',
        name: '기타 일반',
        topics: [
          {
            id: 'et-1', title: '내용증명',
            meta: '법적 효력 있는 의사표시',
            sections: [
              {
                heading: '1. 내용증명이란?',
                content: `<p>내용증명은 발송인이 수신인에게 어떠한 내용의 문서를 발송하였는지를 우체국에서 공적으로 증명하는 우편 서비스입니다. 법적으로 내용증명 자체가 강제력을 가지는 것은 아니지만, <strong>의사표시를 한 사실과 내용을 공증</strong>하는 역할을 합니다.</p>
                <div class="info-box"><div class="info-title">✅ 주요 활용 사례</div><ul>
                <li>계약 해제·해지 통보</li><li>대금 지급 독촉</li><li>임대차계약 갱신거절 통보</li>
                <li>소멸시효 중단</li><li>임금 체불 독촉</li></ul></div>`
              },
              {
                heading: '2. 작성 방법',
                content: `<p>내용증명은 동일한 문서를 <strong>3부</strong> 작성하여, 1부는 우체국 보관, 1부는 발송인 보관, 1부는 수신인에게 발송합니다. 문서의 형식에는 특별한 제한이 없으나, 발신인·수신인 정보, 발송 일자, 구체적인 내용이 포함되어야 합니다.</p>`
              }
            ],
            laws: [
              { name: '우편법 시행규칙 제25조', desc: '내용증명 취급 방법' },
              { name: '민법 제174조', desc: '소멸시효 중단(최고)' },
            ],
            forms: [{ name: '내용증명 양식', size: 'DOCX' }]
          },
          {
            id: 'et-2', title: '공정증서',
            meta: '공증인이 작성하는 공문서',
            sections: [
              {
                heading: '1. 공정증서란?',
                content: `<p>공정증서는 공증인(공증인가 법무법인 또는 공증담당변호사)이 당사자의 촉탁에 의해 법률행위나 사실을 증명하기 위해 작성하는 공문서입니다. 특히 <strong>집행인낙 문언이 포함된 공정증서</strong>는 별도의 소송 없이 집행권원으로 사용할 수 있어 실무상 매우 유용합니다.</p>`
              },
              {
                heading: '2. 공정증서의 효력',
                content: `<ul>
                  <li><strong>증거력</strong>: 진정성립이 추정되어 강력한 증거력</li>
                  <li><strong>집행력</strong>: 집행인낙 문언 포함 시 판결 없이 강제집행 가능</li>
                  <li><strong>소멸시효 연장</strong>: 공정증서상 채권의 소멸시효는 10년</li>
                </ul>`
              }
            ],
            laws: [
              { name: '공증인법 제2조', desc: '공증인의 직무' },
              { name: '민사집행법 제56조 제4호', desc: '공정증서의 집행권원' },
            ],
            forms: [{ name: '금전소비대차 공정증서 양식', size: 'DOCX' }]
          },
          {
            id: 'et-3', title: '확정일자',
            meta: '임차인 보호를 위한 날짜 확인',
            sections: [
              {
                heading: '1. 확정일자란?',
                content: `<p>확정일자란 임대차계약서가 작성된 날짜를 법적으로 확인받아, 이후 위·변조된 날짜가 아님을 증명받는 제도입니다. 주택임대차보호법상 임차인이 <strong>전입신고 + 확정일자</strong>를 갖추면 후순위 채권자나 담보권자보다 우선하여 보증금을 변제받을 수 있습니다.</p>`
              },
              {
                heading: '2. 확정일자 받는 방법',
                content: `<ul>
                  <li>주민센터 방문 신청 (수수료 600원)</li>
                  <li>인터넷 등기소 온라인 신청 (전자계약서 한정)</li>
                  <li>공증사무소 방문</li>
                </ul>
                <div class="info-box"><div class="info-title">📌 전월세신고제</div><p>2021년 6월부터 보증금 6,000만원 초과 또는 월세 30만원 초과 임대차계약은 계약 체결 후 30일 이내에 신고하여야 하며, 신고 완료 시 확정일자가 자동 부여됩니다.</p></div>`
              }
            ],
            laws: [
              { name: '주택임대차보호법 제3조의2', desc: '우선변제권' },
              { name: '주택임대차보호법 제6조의3', desc: '임대차 신고제' },
            ],
            forms: []
          }
        ]
      }
    ]
  }
};

/* ============================================================
   BLOG DATA
   ============================================================ */
const BLOG_DATA = [
  // 부동산등기
  {
    id: 'b1', category: 'realestate', catLabel: '부동산등기',
    date: '2025-02-15',
    question: '아파트 매매 후 잔금을 냈는데, 등기 없이 그냥 살면 안 되나요?',
    preview: '잔금을 납부했더라도 등기를 마치지 않으면 법적 소유권자가 아닙니다...',
    answer: `<p>잔금을 지급했더라도 <strong>부동산 소유권은 등기를 완료해야만 이전됩니다</strong>(민법 제186조). 등기 없이 거주할 경우 매도인이 동일한 부동산을 제3자에게 다시 매도하거나 담보로 제공하면, 제3자가 먼저 등기를 마치는 경우 귀하는 소유권을 잃게 될 수도 있습니다.</p>
    <p>또한 등기를 지연할수록 취득세 가산세가 부과됩니다. 취득세 신고·납부 기한은 <strong>잔금지급일로부터 60일 이내</strong>이므로, 이를 초과하면 20%의 가산세가 추가됩니다.</p>
    <ul><li>매매 후 지체 없이 법무사에게 의뢰하여 등기를 완료하세요.</li><li>일반적으로 잔금일 당일 또는 다음날 등기 신청이 이루어집니다.</li></ul>`,
  },
  {
    id: 'b2', category: 'realestate', catLabel: '부동산등기',
    date: '2025-01-20',
    question: '집을 자녀에게 증여하면 세금이 얼마나 나오나요?',
    preview: '증여세, 취득세 등 여러 세금이 발생하며 공제 한도를 잘 활용하면 절세가 가능합니다...',
    answer: `<p>부동산 증여 시 발생하는 세금은 크게 세 가지입니다.</p>
    <ul>
    <li><strong>증여세</strong>: 증여재산에서 공제액을 차감한 후 세율 적용. 직계존비속간 공제 한도는 5,000만원(미성년자 2,000만원). 예: 5억원짜리 주택을 자녀에게 증여 시 4억 5천만원이 과세표준 → 약 8천만원 이상의 증여세 발생</li>
    <li><strong>취득세</strong>: 증여로 인한 취득 시 취득가액의 3.5% (주택의 경우 별도 세율 적용 가능)</li>
    <li><strong>지방교육세·농어촌특별세</strong>: 취득세에 부과</li>
    </ul>
    <p>절세를 위해서는 장기간에 걸쳐 분할 증여하거나, 부담부증여(채무 포함 증여) 등 다양한 방법을 검토할 수 있습니다. 반드시 전문가 상담을 통해 최적의 방법을 선택하세요.</p>`,
  },
  {
    id: 'b3', category: 'realestate', catLabel: '부동산등기',
    date: '2025-01-05',
    question: '전세를 살고 있는데 전세권설정등기와 확정일자 중 무엇이 더 유리한가요?',
    preview: '두 방법 모두 보증금 보호를 위한 수단이지만 효력과 비용 면에서 차이가 있습니다...',
    answer: `<p>두 방법의 핵심 차이는 다음과 같습니다.</p>
    <ul>
    <li><strong>전세권설정등기</strong>: 물권으로 등기부에 공시됨. 임대인 동의 없이 제3자에게 전전세 가능. 전세금 미반환 시 직접 경매 신청 가능. 단, 등록세 비용 부담 있음.</li>
    <li><strong>전입신고+확정일자</strong>: 비용이 사실상 무료(600원). 대항력과 우선변제권 획득. 그러나 경매 배당금 회수 위해 소송이 필요한 경우도 있음.</li>
    </ul>
    <p>일반적인 주거 임대차에서는 <strong>전입신고+확정일자</strong>로 충분히 보호받을 수 있습니다. 단, 상가 임차나 임대인이 개인인 경우 채권 회수 위험이 높다면 전세권설정을 검토할 수 있습니다.</p>`,
  },
  // 법인등기
  {
    id: 'b4', category: 'corporation', catLabel: '법인등기',
    date: '2025-02-20',
    question: '1인 주식회사 설립이 가능한가요? 필요한 최소 자본금은 얼마인가요?',
    preview: '1인 주식회사 설립이 가능하며, 자본금 제한도 없어졌습니다...',
    answer: `<p>네, <strong>1인 주식회사 설립이 가능합니다</strong>. 2011년 상법 개정으로 1인이 모든 주식을 보유하고 이사를 겸임하는 형태의 1인 주식회사를 설립할 수 있습니다.</p>
    <p>자본금 최저한도 역시 2009년 이후 폐지되어 이론적으로 100원으로도 설립이 가능합니다. 다만, 거래 신뢰도와 실제 사업 영위를 위해 최소 <strong>1,000만원~1억원</strong> 이상으로 설정하는 것이 일반적입니다.</p>
    <ul>
    <li>1인 주식회사는 이사 1명 + 감사 1명 이상이 원칙(자본금 10억 미만 시 감사 생략 가능)</li>
    <li>공증은 자본금 10억 이상인 경우에만 필수 (미만은 생략 가능)</li>
    </ul>`,
  },
  {
    id: 'b5', category: 'corporation', catLabel: '법인등기',
    date: '2025-01-15',
    question: '대표이사가 바뀌면 언제까지 등기해야 하나요?',
    preview: '변경사실 발생 후 2주 이내에 등기를 완료해야 합니다...',
    answer: `<p>대표이사 변경등기는 변경사실이 생긴 날(임기만료, 사임, 주주총회 결의일 등)로부터 <strong>2주 이내</strong>에 본점 소재지 관할 법원에 신청해야 합니다(상법 제317조).</p>
    <p>2주를 초과하여 늦게 등기하는 경우 <strong>과태료</strong>가 부과됩니다(100만원 이하). 또한 변경 전 대표이사 명의로 체결된 계약은 효력이 있으나, 변경 후에도 등기가 되어 있지 않으면 거래 상대방이 선의인 경우 구 대표이사가 체결한 계약도 유효하게 될 수 있어 법적 위험이 있습니다.</p>`,
  },
  {
    id: 'b6', category: 'corporation', catLabel: '법인등기',
    date: '2024-12-28',
    question: '법인을 설립할 때 주식회사와 유한회사 중 어느 것이 유리한가요?',
    preview: '목적과 규모에 따라 다르며, 각 회사 형태의 장단점이 있습니다...',
    answer: `<p>두 회사 형태의 주요 차이점입니다.</p>
    <ul>
    <li><strong>주식회사</strong>: 주식 발행으로 자본 조달 용이, 상장 가능, 공시 의무 있음. 이해관계자 많은 사업에 적합.</li>
    <li><strong>유한회사</strong>: 사원수 50인 이하, 결산공고 불필요, 정관 변경 간편. 비공개·소규모 사업에 적합.</li>
    </ul>
    <p>외부 투자 유치나 추후 상장을 고려한다면 주식회사가 유리하고, 소수 파트너와의 내부 사업 운영이 목적이라면 유한회사가 간편할 수 있습니다.</p>`,
  },
  // 민사소송
  {
    id: 'b7', category: 'lawsuit', catLabel: '민사소송',
    date: '2025-02-10',
    question: '소액사건은 직접 소송을 제기할 수 있나요? 변호사나 법무사가 꼭 필요한가요?',
    preview: '소액사건은 본인이 직접 소송을 제기할 수 있습니다. 하지만 법무사의 도움이 도움이 됩니다...',
    answer: `<p>민사소송은 본인이 직접 수행할 수 있으며, 변호사나 법무사를 반드시 선임해야 하는 것은 아닙니다. 특히 <strong>소액사건심판법</strong>이 적용되는 3,000만원 이하 사건은 절차가 간소화되어 있어 비전문가도 비교적 쉽게 진행할 수 있습니다.</p>
    <p>다만, 다음의 경우 전문가 도움이 권장됩니다:</p>
    <ul>
    <li>사실관계나 법률관계가 복잡한 경우</li>
    <li>상대방이 법률 전문가를 선임한 경우</li>
    <li>증거 확보 및 소장 작성에 자신이 없는 경우</li>
    </ul>
    <p>법무사는 소장 작성, 증거 정리, 서류 제출 등을 도와드릴 수 있으며 변호사 선임비용보다 합리적입니다.</p>`,
  },
  {
    id: 'b8', category: 'lawsuit', catLabel: '민사소송',
    date: '2025-01-25',
    question: '돈을 빌려준 사람이 갚지 않으면 어떻게 해야 하나요?',
    preview: '지급명령 신청부터 강제집행까지 단계적으로 법적 조치를 취할 수 있습니다...',
    answer: `<p>금전 채권 회수를 위한 단계별 방법입니다.</p>
    <ol>
    <li><strong>내용증명 발송</strong>: 먼저 상환을 촉구하는 내용증명을 발송하여 자발적 변제를 유도합니다.</li>
    <li><strong>지급명령 신청</strong>: 증거가 명확하다면 소액·신속한 지급명령 신청을 합니다. 채무자가 이의하지 않으면 2~3개월 내 확정됩니다.</li>
    <li><strong>민사소송 제기</strong>: 지급명령에 이의가 제기되거나 증거 다툼이 있는 경우 본소 제기가 필요합니다.</li>
    <li><strong>강제집행</strong>: 판결 확정 후 채무자의 부동산, 예금, 급여 등에 강제집행을 신청합니다.</li>
    </ol>
    <p>차용증 등 증거가 있다면 빠른 해결이 가능합니다. 법무사 상담을 통해 최적의 방법을 선택하세요.</p>`,
  },
  {
    id: 'b9', category: 'lawsuit', catLabel: '민사소송',
    date: '2025-01-10',
    question: '소멸시효가 지난 채권도 받을 수 있나요?',
    preview: '소멸시효가 완성된 채권은 채무자가 항변하면 청구가 어렵습니다...',
    answer: `<p>소멸시효가 완성된 채권은 채무자가 <strong>소멸시효 완성의 항변</strong>을 제기하면 법원에서 청구가 인용되지 않습니다. 주요 채권의 소멸시효는 다음과 같습니다.</p>
    <ul>
    <li>일반 민사채권: 10년</li>
    <li>상사채권: 5년</li>
    <li>판결로 확정된 채권: 10년</li>
    <li>임금·퇴직금: 3년</li>
    </ul>
    <p>단, 채무자가 소멸시효를 알면서도 일부 변제하거나 이행을 약속한 경우에는 <strong>시효 이익의 포기</strong>로 보아 청구가 가능할 수 있습니다. 이미 시효가 임박한 채권은 즉시 소송을 제기하거나 지급명령 신청으로 시효를 중단시켜야 합니다.</p>`,
  },
  // 강제집행
  {
    id: 'b10', category: 'enforcement', catLabel: '강제집행',
    date: '2025-02-05',
    question: '판결을 받았는데 상대방이 재산이 없다고 합니다. 어떻게 해야 하나요?',
    preview: '재산명시신청 및 재산조회 제도를 활용하여 채무자의 재산을 파악할 수 있습니다...',
    answer: `<p>채무자가 재산이 없다고 주장하더라도 다음 제도를 활용할 수 있습니다.</p>
    <ul>
    <li><strong>재산명시신청</strong>: 집행력 있는 채무명의가 있다면 법원에 재산명시신청을 하여 채무자로 하여금 재산목록을 제출하도록 할 수 있습니다. 허위 신고 시 형사처벌 대상이 됩니다.</li>
    <li><strong>재산조회신청</strong>: 법원이 금융기관, 국세청, 건강보험공단 등에 채무자의 재산을 조회합니다. 은행 예금, 급여, 부동산, 차량 정보 등을 확인할 수 있습니다.</li>
    <li><strong>채무불이행자 명부 등재</strong>: 채무자의 신용 제재를 통해 자발적 변제를 유도합니다.</li>
    </ul>
    <p>재산 확인 후 부동산 경매, 예금 압류, 급여 압류 등 적절한 집행 방법을 선택할 수 있습니다.</p>`,
  },
  {
    id: 'b11', category: 'enforcement', catLabel: '강제집행',
    date: '2025-01-18',
    question: '임차인이 퇴거를 거부하면 강제로 내보낼 수 있나요?',
    preview: '명도소송을 통해 판결을 받아 강제집행(강제퇴거)을 신청할 수 있습니다...',
    answer: `<p>임차인이 계약 만료 후 퇴거를 거부하는 경우 강제퇴거를 위해서는 다음 절차가 필요합니다.</p>
    <ol>
    <li><strong>명도소송 제기</strong>: 임대인이 원고가 되어 임차인을 상대로 건물명도(인도) 청구 소송을 제기합니다.</li>
    <li><strong>판결 확정</strong>: 통상 3~6개월 소요됩니다. 임차인이 다투지 않으면 더 빨리 확정될 수 있습니다.</li>
    <li><strong>강제집행 신청</strong>: 확정판결 또는 가집행선고부 판결을 받은 후 법원 집행관에게 강제집행을 신청합니다.</li>
    </ol>
    <p>경매 낙찰 후 임차인이 퇴거를 거부하는 경우에는 별도로 <strong>인도명령 신청</strong>을 통해 더 빠른 강제집행이 가능합니다.</p>`,
  },
  // 상속
  {
    id: 'b12', category: 'inheritance', catLabel: '상속',
    date: '2025-02-12',
    question: '부모님이 돌아가셨는데 빚이 재산보다 많습니다. 어떻게 해야 하나요?',
    preview: '상속포기 또는 한정승인을 통해 부모님의 빚을 물려받지 않을 수 있습니다...',
    answer: `<p>부모님의 빚이 재산보다 많다면 반드시 <strong>상속포기 또는 한정승인</strong>을 검토하세요.</p>
    <p><strong>상속포기</strong>: 상속 자체를 포기하여 채무를 전혀 부담하지 않습니다. 단, 포기한 경우 다음 순위 상속인(형제자매 등)에게 채무가 이전될 수 있으므로 형제자매도 함께 포기를 검토해야 합니다.</p>
    <p><strong>한정승인</strong>: 상속받은 재산 한도 내에서만 채무를 변제합니다. 부채가 재산보다 확실히 많을 때, 또는 재산·채무 규모가 불분명할 때 유리합니다.</p>
    <div style="background:#fff3cd;border-left:4px solid #ffc107;padding:12px 16px;border-radius:4px;margin-top:12px;"><strong>⚠️ 기간 주의:</strong> 상속개시(사망)를 안 날로부터 <strong>3개월 이내</strong>에 가정법원에 신고해야 합니다. 이를 넘기면 단순승인으로 간주되어 채무 전부를 부담하게 됩니다.</div>`,
  },
  {
    id: 'b13', category: 'inheritance', catLabel: '상속',
    date: '2025-01-28',
    question: '유언장이 없는 경우 재산은 어떻게 나눠야 하나요?',
    preview: '유언이 없으면 법정상속분에 따라 나누거나 상속인 간 협의로 분할합니다...',
    answer: `<p>유언장이 없는 경우 상속재산 분할 방법은 두 가지입니다.</p>
    <ul>
    <li><strong>협의분할</strong>: 상속인 전원이 합의하여 각자의 몫을 자유롭게 결정합니다. 법정상속분에 구애받지 않으며, 한 명이 모든 재산을 받을 수도 있습니다. 협의서를 작성하고 각자 인감을 날인하여야 합니다.</li>
    <li><strong>법정상속분</strong>: 협의가 이루어지지 않는 경우 법정상속분에 따라 각자의 지분을 취득합니다(공유 상태).</li>
    </ul>
    <p>부동산은 협의분할협의서 작성 후 상속등기를 진행해야 각자의 명의로 이전됩니다. 현금 및 금융재산은 금융기관에 상속서류를 제출하여 분배받습니다.</p>`,
  },
  {
    id: 'b14', category: 'inheritance', catLabel: '상속',
    date: '2025-01-05',
    question: '유류분이란 무엇이며, 유류분 반환청구를 할 수 있나요?',
    preview: '유류분은 법이 보장하는 최소한의 상속분으로, 침해 시 반환을 청구할 수 있습니다...',
    answer: `<p>유류분이란 상속인이 유언이나 증여에도 불구하고 법적으로 최소한 확보할 수 있는 상속분의 비율입니다.</p>
    <ul>
    <li>직계비속·배우자: 법정상속분의 <strong>1/2</strong></li>
    <li>직계존속·형제자매: 법정상속분의 <strong>1/3</strong></li>
    </ul>
    <p>피상속인이 특정 상속인이나 제3자에게 증여·유증하여 유류분이 침해된 경우, 침해된 상속인은 수증자를 상대로 <strong>유류분 반환청구</strong>를 할 수 있습니다. 청구는 유류분 침해를 안 날로부터 1년, 또는 상속개시로부터 10년 이내에 하여야 합니다.</p>`,
  },
  // 기타
  {
    id: 'b15', category: 'etc', catLabel: '기타',
    date: '2025-02-18',
    question: '내용증명을 받았습니다. 어떻게 대응해야 하나요?',
    preview: '내용증명은 법적 강제력이 없지만 무시하면 소송으로 이어질 수 있습니다...',
    answer: `<p>내용증명 자체는 법적 강제력이 없습니다. 다만, 무시할 경우 상대방이 실제 소송을 제기하거나 가압류를 신청할 수 있습니다.</p>
    <p>수신한 내용증명에 대한 대응 방법:</p>
    <ul>
    <li><strong>내용이 사실이고 이행이 가능한 경우</strong>: 가급적 협의하여 분쟁을 조기에 해결하는 것이 비용 절감에 유리합니다.</li>
    <li><strong>내용에 이의가 있는 경우</strong>: 반박 내용증명을 발송하거나 법률전문가의 도움을 받아 대응 전략을 수립하세요.</li>
    <li><strong>부당한 요구인 경우</strong>: 법적 근거 없는 요구는 이행할 의무가 없으며, 전문가 상담 후 대응하세요.</li>
    </ul>
    <p>내용증명을 받으면 당황하지 말고, 전문가에게 내용을 검토받고 대응 방법을 결정하는 것이 현명합니다.</p>`,
  },
  {
    id: 'b16', category: 'etc', catLabel: '기타',
    date: '2025-01-22',
    question: '공정증서를 작성하면 재판 없이 바로 집행이 가능한가요?',
    preview: '집행인낙 문언이 포함된 공정증서는 별도 소송 없이 강제집행이 가능합니다...',
    answer: `<p>네, <strong>집행인낙(執行認諾) 문언</strong>이 포함된 공정증서는 확정판결과 동일한 집행력을 가지므로, 별도의 소송 없이 바로 강제집행을 신청할 수 있습니다(민사집행법 제56조 제4호).</p>
    <p>집행인낙 문언이란, 채무자가 "채무불이행 시 즉시 강제집행을 당하여도 이의가 없다"는 내용을 공정증서에 기재하는 것입니다.</p>
    <p><strong>공정증서 활용 사례:</strong></p>
    <ul>
    <li>금전소비대차(차용증 공증)</li>
    <li>임대차계약 공증(보증금 반환 보장)</li>
    <li>분할변제 약정</li>
    </ul>
    <p>공정증서는 공증인가 법무법인 또는 법무사를 통해 작성할 수 있습니다.</p>`,
  },
];

/* ============================================================
   NAVBAR BUILDER
   ============================================================ */
function buildNavbar(activePage) {
  const catLinks = CATEGORIES.map(cat => {
    const data = CONTENT_DATA[cat.id];
    let dropItems = '';
    if (data && data.subcategories) {
      dropItems = data.subcategories.map(s =>
        `<a href="content.html?cat=${cat.id}&sub=${s.id}">${s.name}</a>`
      ).join('');
    } else if (data && data.topics) {
      dropItems = data.topics.map(t =>
        `<a href="content.html?cat=${cat.id}&topic=${t.id}">${t.title}</a>`
      ).join('');
    }
    return `
      <li class="nav-item">
        <a href="content.html?cat=${cat.id}" class="nav-link">
          ${cat.icon} ${cat.name} <span class="arrow">▾</span>
        </a>
        <div class="dropdown">${dropItems}</div>
      </li>`;
  }).join('');

  return `
    <nav class="navbar">
      <div class="container nav-inner">
        <a href="index.html" class="nav-logo">
          <div class="logo-icon">⚖</div>
          <div>
            <span class="logo-sub">법무사 사무소</span>
            <div class="logo-main">박배선 법무사</div>
          </div>
        </a>
        <ul class="nav-menu" id="navMenu">
          <li class="nav-item">
            <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">홈</a>
          </li>
          ${catLinks}
          <li class="nav-item">
            <a href="blog.html" class="nav-link ${activePage === 'blog' ? 'active' : ''}">전문가 Q&A</a>
          </li>
        </ul>
        <div class="nav-cta">
          <button class="btn-primary" onclick="openModal()">📞 상담신청</button>
        </div>
        <button class="nav-burger" id="navBurger" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;
}

/* ============================================================
   FOOTER BUILDER
   ============================================================ */
function buildFooter() {
  const navLinks = CATEGORIES.map(cat =>
    `<li><a href="content.html?cat=${cat.id}">${cat.icon} ${cat.name}</a></li>`
  ).join('');

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo-text">
              <div class="logo-icon">⚖</div>
              박배선 법무사 사무소
            </div>
            <div class="info-row"><span class="label">주소</span><span>서울특별시 서초구 서초대로 123, 4층 (서초동)</span></div>
            <div class="info-row"><span class="label">전화</span><span>02-1234-5678</span></div>
            <div class="info-row"><span class="label">팩스</span><span>02-1234-5679</span></div>
            <div class="info-row"><span class="label">이메일</span><span>info@bslaw.kr</span></div>
            <div class="info-row"><span class="label">운영</span><span>평일 09:00~18:00 (토요일 09:00~13:00)</span></div>
            <div class="info-row"><span class="label">등록</span><span>법무사등록번호 제2024-서초-001호</span></div>
          </div>
          <div class="footer-nav">
            <div class="footer-nav-title">업무 안내</div>
            <ul>${navLinks}
              <li><a href="blog.html">📝 전문가 Q&A</a></li>
            </ul>
          </div>
          <div class="footer-consult">
            <h3>📞 상담신청</h3>
            <p style="font-size:0.83rem;color:rgba(255,255,255,0.65);margin-bottom:18px;line-height:1.7;">
              고객 유형을 선택하시면 맞춤 상담 신청 양식으로 연결됩니다.
            </p>
            <a href="${CONSULT_URLS.personal}" target="_blank" class="footer-consult-btn">
              <span class="footer-consult-btn-icon">👤</span>
              <div>
                <div class="footer-consult-btn-title">개인고객 상담신청</div>
                <div class="footer-consult-btn-sub">신청 주체가 개인(자연인)이신 경우</div>
              </div>
              <span style="margin-left:auto;opacity:0.7;">→</span>
            </a>
            <a href="${CONSULT_URLS.corporate}" target="_blank" class="footer-consult-btn">
              <span class="footer-consult-btn-icon">🏢</span>
              <div>
                <div class="footer-consult-btn-title">법인고객 상담신청</div>
                <div class="footer-consult-btn-sub">신청 주체가 법인(회사·단체)인 경우</div>
              </div>
              <span style="margin-left:auto;opacity:0.7;">→</span>
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="footer-bottom">
          <span>© 2025 박배선 법무사 사무소. All rights reserved.</span>
          <div style="display:flex;gap:16px;">
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
          </div>
        </div>
      </div>
    </footer>`;
}

/* ============================================================
   MODAL
   ============================================================ */
const CONSULT_URLS = {
  personal:  'https://n8npark.app.n8n.cloud/form/abd1f9d0-4ae9-428c-949d-a8bd1e90a12c',
  corporate: 'https://n8npark.app.n8n.cloud/form/92ea9eaf-074c-474a-b48c-3c30198101f4',
};

function buildModal() {
  return `
    <div class="modal-overlay" id="consultModal" onclick="closeModalOutside(event)">
      <div class="modal-box modal-box--select">
        <div class="modal-header">
          <div>
            <h2>⚖️ 상담신청</h2>
            <p>고객 유형을 선택하시면 해당 신청 양식으로 이동합니다.</p>
          </div>
          <button class="modal-close" onclick="closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <div class="consult-type-grid">

            <button class="consult-type-card" onclick="goToConsult('personal')">
              <div class="consult-type-icon">👤</div>
              <div class="consult-type-name">개인고객</div>
              <div class="consult-type-desc">
                <p>상담신청 주체가 <strong>개인(자연인)</strong></p>
                <span class="consult-type-note">※ 법인등기, 부동산등기, 민사소송, 민사집행, 상속 등 모든 업무 상담가능</span>
              </div>
              <div class="consult-type-btn">상담 신청하기 →</div>
            </button>

            <button class="consult-type-card" onclick="goToConsult('corporate')">
              <div class="consult-type-icon">🏢</div>
              <div class="consult-type-name">법인고객</div>
              <div class="consult-type-desc">
                <p>상담신청 주체가 <strong>법인(단체)</strong></p>
                <span class="consult-type-note">※ 법인등기, 부동산등기, 민사소송, 민사집행, 상속 등 모든 업무 상담가능</span>
              </div>
              <div class="consult-type-btn">상담 신청하기 →</div>
            </button>

          </div>
          <p class="privacy-note" style="margin-top:20px;">
            선택하시면 해당 고객 유형의 상담 신청 양식으로 이동합니다.<br>
            전화 문의: <strong>02-1234-5678</strong> (평일 09:00~18:00)
          </p>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   MODAL FUNCTIONS
   ============================================================ */
function openModal() {
  document.getElementById('consultModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('consultModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('consultModal')) closeModal();
}
function goToConsult(type) {
  window.open(CONSULT_URLS[type], '_blank');
  closeModal();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const burger = document.getElementById('navBurger');
  menu.classList.toggle('open');
  burger.classList.toggle('open');
}
// Close mobile menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const menu = document.getElementById('navMenu');
    const burger = document.getElementById('navBurger');
    if (menu) menu.classList.remove('open');
    if (burger) burger.classList.remove('open');
  }
});

/* ============================================================
   CONTENT PAGE LOGIC
   ============================================================ */
function initContentPage() {
  const params = new URLSearchParams(window.location.search);
  let catId = params.get('cat') || 'realestate';
  let subId  = params.get('sub');
  let topicId = params.get('topic');

  const data = CONTENT_DATA[catId];
  if (!data) { catId = 'realestate'; }

  // Render category tabs
  const tabsEl = document.getElementById('catTabs');
  if (tabsEl) {
    tabsEl.innerHTML = CATEGORIES.map(cat => `
      <button class="cat-tab ${cat.id === catId ? 'active' : ''}"
        onclick="switchCategory('${cat.id}')">
        <span class="tab-icon">${cat.icon}</span> ${cat.name}
      </button>`).join('');
  }

  // Render TOC & content
  if (data && data.subcategories) {
    renderSubcategoryContent(catId, subId, topicId);
  } else {
    renderCategoryContent(catId, topicId);
  }
}

function switchCategory(catId) {
  const data = CONTENT_DATA[catId];
  let newUrl = `content.html?cat=${catId}`;
  if (data && data.subcategories) {
    newUrl += `&sub=${data.subcategories[0].id}`;
  }
  window.history.pushState({}, '', newUrl);
  initContentPage();
  window.scrollTo(0, 0);
}

/* ── 중분류(subcategory) 렌더링 ─────────────────────────────── */
function renderSubcategoryContent(catId, selectedSubId, selectedTopicId) {
  const data = CONTENT_DATA[catId];
  if (!data || !data.subcategories) return;

  const activeSub = data.subcategories.find(s => s.id === selectedSubId) || data.subcategories[0];
  const topics = activeSub.topics;
  const activeTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  // Update category tabs
  document.querySelectorAll('.cat-tab').forEach(btn => {
    const isActive = btn.getAttribute('onclick').includes(`'${catId}'`);
    btn.classList.toggle('active', isActive);
  });

  // Render TOC with subcategory tabs + topic list
  const tocEl = document.getElementById('tocList');
  if (tocEl) {
    const subTabsHTML = data.subcategories.map(s => `
      <button class="sub-tab ${s.id === activeSub.id ? 'active' : ''}"
        onclick="switchSubCategory('${catId}','${s.id}')">
        ${s.name}
      </button>`).join('');

    const topicsHTML = topics.map(t => `
      <button class="toc-item ${t.id === activeTopic.id ? 'active' : ''}"
        onclick="selectSubTopic('${catId}','${activeSub.id}','${t.id}')">
        ${t.title}
      </button>`).join('');

    tocEl.innerHTML = `
      <div class="sub-tabs">${subTabsHTML}</div>
      <div class="toc-topic-list">${topicsHTML}</div>`;
  }

  // Render breadcrumb
  const bcEl = document.getElementById('pageBreadcrumb');
  if (bcEl) {
    bcEl.innerHTML = `
      <a href="index.html">홈</a>
      <span class="sep">›</span>
      <a href="content.html?cat=${catId}">${data.label}</a>
      <span class="sep">›</span>
      <a href="content.html?cat=${catId}&sub=${activeSub.id}">${activeSub.name}</a>
      <span class="sep">›</span>
      <span>${activeTopic.title}</span>`;
  }

  // Render article
  const articleEl = document.getElementById('articleContent');
  if (articleEl) {
    const sectionsHTML = activeTopic.sections.map(s => `
      <div class="article-section">
        <h2>${s.heading}</h2>
        ${s.content}
      </div>`).join('');

    articleEl.innerHTML = `
      <div class="article-header">
        <h1>${activeTopic.title}</h1>
        <div class="article-meta">
          <span>📁 ${data.label} › ${activeSub.name}</span>
          <span>📖 ${activeTopic.meta}</span>
        </div>
      </div>
      ${sectionsHTML}
      <div style="margin-top:40px;padding:24px;background:var(--accent);border-radius:var(--radius);text-align:center;">
        <p style="font-weight:600;color:var(--primary);margin-bottom:12px;">더 자세한 내용이 궁금하신가요? 법무사에게 직접 상담받으세요.</p>
        <button class="btn-primary" onclick="openModal()">📞 무료 상담 신청</button>
      </div>`;
  }

  // Render law sidebar
  const lawEl = document.getElementById('lawList');
  if (lawEl) {
    const lawsHTML = activeTopic.laws && activeTopic.laws.length > 0
      ? activeTopic.laws.map(l => `
        <div class="law-item">
          <div class="law-name">📋 ${l.name}</div>
          <div class="law-desc">${l.desc}</div>
        </div>`).join('')
      : '<p style="font-size:0.82rem;color:var(--text-light);padding:0 20px;">관련 법령 없음</p>';

    const formsHTML = activeTopic.forms && activeTopic.forms.length > 0
      ? activeTopic.forms.map(f => `
        <div class="form-item">
          <span class="form-icon">📄</span>
          <div><div class="form-name">${f.name}</div><div class="form-size">${f.size}</div></div>
        </div>`).join('')
      : '<p style="font-size:0.82rem;color:var(--text-light);padding:0 20px;">제공 서식 없음</p>';

    lawEl.innerHTML = `
      <div class="law-section">
        <div class="law-section-title">관련 법령</div>
        ${lawsHTML}
      </div>
      <div class="law-section">
        <div class="law-section-title">참고 서식</div>
        ${formsHTML}
        <a class="fee-table-btn" href="https://m.kabl.kr/pageview.kabl?mid=kjaa_page_0202_2_m&menu=data&from=index.kabl" target="_blank" rel="noopener noreferrer">📊 법무사 보수표 보기</a>
      </div>
      <div class="sidebar-consult">
        <h4>전문가 상담</h4>
        <p>서류 준비부터 등기까지<br>전 과정을 도와드립니다.</p>
        <button class="btn-white" onclick="openModal()">상담 신청</button>
      </div>`;
  }
}

function switchSubCategory(catId, subId) {
  const newUrl = `content.html?cat=${catId}&sub=${subId}`;
  window.history.pushState({}, '', newUrl);
  renderSubcategoryContent(catId, subId, null);
  window.scrollTo(0, 0);
}

function selectSubTopic(catId, subId, topicId) {
  const newUrl = `content.html?cat=${catId}&sub=${subId}&topic=${topicId}`;
  window.history.pushState({}, '', newUrl);
  renderSubcategoryContent(catId, subId, topicId);
  window.scrollTo(0, 0);
}

/* ── 단순 카테고리(subcategory 없음) 렌더링 ─────────────────── */
function renderCategoryContent(catId, selectedTopicId) {
  const data = CONTENT_DATA[catId];
  if (!data) return;

  const topics = data.topics;
  const activeTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  // Update tabs
  document.querySelectorAll('.cat-tab').forEach(btn => {
    const isActive = btn.getAttribute('onclick').includes(`'${catId}'`);
    btn.classList.toggle('active', isActive);
  });

  // Render TOC
  const tocEl = document.getElementById('tocList');
  if (tocEl) {
    tocEl.innerHTML = topics.map((t, i) => `
      <button class="toc-item ${t.id === activeTopic.id ? 'active' : ''}"
        onclick="selectTopic('${catId}','${t.id}')">
        ${t.title}
      </button>
      ${i < topics.length - 1 && i % 2 === 1 ? '<div class="toc-sep"></div>' : ''}
    `).join('');
  }

  // Render header breadcrumb
  const bcEl = document.getElementById('pageBreadcrumb');
  if (bcEl) {
    bcEl.innerHTML = `
      <a href="index.html">홈</a>
      <span class="sep">›</span>
      <a href="content.html?cat=${catId}">${data.label}</a>
      <span class="sep">›</span>
      <span>${activeTopic.title}</span>`;
  }

  // Render article
  const articleEl = document.getElementById('articleContent');
  if (articleEl) {
    const sectionsHTML = activeTopic.sections.map(s => `
      <div class="article-section">
        <h2>${s.heading}</h2>
        ${s.content}
      </div>`).join('');

    articleEl.innerHTML = `
      <div class="article-header">
        <h1>${activeTopic.title}</h1>
        <div class="article-meta">
          <span>📁 ${data.label}</span>
          <span>📖 ${activeTopic.meta}</span>
        </div>
      </div>
      ${sectionsHTML}
      <div style="margin-top:40px;padding:24px;background:var(--accent);border-radius:var(--radius);text-align:center;">
        <p style="font-weight:600;color:var(--primary);margin-bottom:12px;">더 자세한 내용이 궁금하신가요? 법무사에게 직접 상담받으세요.</p>
        <button class="btn-primary" onclick="openModal()">📞 무료 상담 신청</button>
      </div>`;
  }

  // Render law sidebar
  const lawEl = document.getElementById('lawList');
  if (lawEl) {
    const lawsHTML = activeTopic.laws && activeTopic.laws.length > 0
      ? activeTopic.laws.map(l => `
        <div class="law-item">
          <div class="law-name">📋 ${l.name}</div>
          <div class="law-desc">${l.desc}</div>
        </div>`).join('')
      : '<p style="font-size:0.82rem;color:var(--text-light);padding:0 20px;">관련 법령 없음</p>';

    const formsHTML = activeTopic.forms && activeTopic.forms.length > 0
      ? activeTopic.forms.map(f => `
        <div class="form-item">
          <span class="form-icon">📄</span>
          <div><div class="form-name">${f.name}</div><div class="form-size">${f.size}</div></div>
        </div>`).join('')
      : '<p style="font-size:0.82rem;color:var(--text-light);padding:0 20px;">제공 서식 없음</p>';

    lawEl.innerHTML = `
      <div class="law-section">
        <div class="law-section-title">관련 법령</div>
        ${lawsHTML}
      </div>
      <div class="law-section">
        <div class="law-section-title">참고 서식</div>
        ${formsHTML}
        <a class="fee-table-btn" href="https://m.kabl.kr/pageview.kabl?mid=kjaa_page_0202_2_m&menu=data&from=index.kabl" target="_blank" rel="noopener noreferrer">📊 법무사 보수표 보기</a>
      </div>
      <div class="sidebar-consult">
        <h4>전문가 상담</h4>
        <p>서류 준비부터 등기까지<br>전 과정을 도와드립니다.</p>
        <button class="btn-white" onclick="openModal()">상담 신청</button>
      </div>`;
  }
}

function selectTopic(catId, topicId) {
  const newUrl = `content.html?cat=${catId}&topic=${topicId}`;
  window.history.pushState({}, '', newUrl);
  renderCategoryContent(catId, topicId);
  window.scrollTo(0, 0);
}

/* ============================================================
   BLOG PAGE LOGIC
   ============================================================ */
function initBlogPage() {
  const params = new URLSearchParams(window.location.search);
  const initCat = params.get('cat') || 'all';

  renderBlogFilters(initCat);
  renderBlogPosts(initCat);
}

function renderBlogFilters(activeCat) {
  const counts = { all: BLOG_DATA.length };
  CATEGORIES.forEach(c => {
    counts[c.id] = BLOG_DATA.filter(p => p.category === c.id).length;
  });

  const filtersEl = document.getElementById('blogFilters');
  if (!filtersEl) return;

  const allTab = `<button class="filter-tab ${activeCat === 'all' ? 'active' : ''}"
    onclick="filterBlog('all')">전체 <span class="filter-count">${counts.all}</span></button>`;
  const catTabs = CATEGORIES.map(cat => `
    <button class="filter-tab ${activeCat === cat.id ? 'active' : ''}"
      onclick="filterBlog('${cat.id}')">
      ${cat.icon} ${cat.name} <span class="filter-count">${counts[cat.id] || 0}</span>
    </button>`).join('');

  filtersEl.innerHTML = allTab + catTabs;
}

function filterBlog(catId) {
  renderBlogFilters(catId);
  renderBlogPosts(catId);
  const newUrl = catId === 'all' ? 'blog.html' : `blog.html?cat=${catId}`;
  window.history.pushState({}, '', newUrl);
}

function renderBlogPosts(catId) {
  const posts = catId === 'all' ? BLOG_DATA : BLOG_DATA.filter(p => p.category === catId);
  const gridEl = document.getElementById('blogGrid');
  if (!gridEl) return;

  if (posts.length === 0) {
    gridEl.innerHTML = `<div class="no-results"><div class="no-icon">🔍</div><h3>게시물이 없습니다.</h3><p>다른 카테고리를 선택해보세요.</p></div>`;
    return;
  }

  gridEl.innerHTML = posts.map(post => `
    <div class="blog-card" id="card-${post.id}">
      <div class="blog-card-header">
        <div class="blog-card-tag">${post.catLabel}</div>
        <div class="blog-card-q">${post.question}</div>
        <div class="blog-card-preview">${post.preview}</div>
      </div>
      <div class="blog-card-footer">
        <span class="blog-card-date">📅 ${post.date}</span>
        <span class="blog-card-expand" onclick="toggleAnswer('${post.id}')">
          답변 보기 <span id="arrow-${post.id}">▼</span>
        </span>
      </div>
      <div class="blog-card-answer" id="answer-${post.id}">
        <div class="answer-label"></div>
        ${post.answer}
        <div class="answer-consult">
          <p>더 자세한 상담이 필요하신가요?</p>
          <button onclick="openModal()">무료 상담 신청</button>
        </div>
      </div>
    </div>`).join('');
}

function toggleAnswer(postId) {
  const answerEl = document.getElementById(`answer-${postId}`);
  const arrowEl = document.getElementById(`arrow-${postId}`);
  const isExpanded = answerEl.classList.contains('expanded');
  answerEl.classList.toggle('expanded');
  arrowEl.textContent = isExpanded ? '▼' : '▲';
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar
  const navHolder = document.getElementById('navHolder');
  if (navHolder) {
    const page = navHolder.dataset.page || 'home';
    navHolder.innerHTML = buildNavbar(page);
  }

  // Inject footer
  const footHolder = document.getElementById('footHolder');
  if (footHolder) {
    footHolder.innerHTML = buildFooter();
  }

  // Inject modal
  const modalHolder = document.getElementById('modalHolder');
  if (modalHolder) {
    modalHolder.innerHTML = buildModal();
  }

  // Page-specific init
  const bodyId = document.body.id;
  if (bodyId === 'contentPage') initContentPage();
  if (bodyId === 'blogPage') initBlogPage();
});
