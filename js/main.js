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
    get topics() { return typeof CIVIL_TOPICS !== 'undefined' ? CIVIL_TOPICS : []; }
  },

  /* ---- 보전처분 ---- */
  preservation: {
    label: '보전처분',
    get topics() { return typeof PRESERVATION_TOPICS !== 'undefined' ? PRESERVATION_TOPICS : []; }
  },

  /* ---- 강제집행 ---- */
  enforcement: {
    label: '강제집행',
    get topics() { return typeof ENFORCEMENT_TOPICS !== 'undefined' ? ENFORCEMENT_TOPICS : []; }
  },

    /* ---- 상속 ---- */
  inheritance: {
    label: '상속',
    get topics() { return typeof INHERITANCE_TOPICS !== 'undefined' ? INHERITANCE_TOPICS : []; }
  },
  /* ---- 상속 ---- */
  inheritance: {
    label: '상속',
    get topics() { return typeof INHERITANCE_TOPICS !== 'undefined' ? INHERITANCE_TOPICS : []; }
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

/* ═══════════════════════════════════════════════
   법령·판례 참조 태그 팝업
   ═══════════════════════════════════════════════ */
function buildLawRefPopup() {
  return `
    <div id="lawRefOverlay"></div>
    <div id="lawRefPopup" role="dialog" aria-modal="true">
      <div class="lrp-header" id="lawRefPopupHeader">
        <span class="lrp-title" id="lawRefPopupTitle"></span>
        <button class="lrp-close" id="lawRefPopupClose" aria-label="닫기">✕</button>
      </div>
      <div class="lrp-body">
        <p id="lawRefPopupDesc"></p>
        <a id="lawRefPopupLink" href="#" target="_blank" rel="noopener noreferrer" class="lrp-link" style="display:none">
          원문 확인 →
        </a>
      </div>
    </div>
  `;
}

function showLawRefPopup(btn) {
  const type  = btn.dataset.refType;   // 'law' | 'case'
  const title = btn.dataset.refTitle  || '';
  const desc  = btn.dataset.refDesc   || '';
  const url   = btn.dataset.refUrl    || '';

  const header = document.getElementById('lawRefPopupHeader');
  const titleEl = document.getElementById('lawRefPopupTitle');
  const descEl  = document.getElementById('lawRefPopupDesc');
  const linkEl  = document.getElementById('lawRefPopupLink');
  const overlay = document.getElementById('lawRefOverlay');
  const popup   = document.getElementById('lawRefPopup');

  if (!popup) return;

  // 유형별 스타일 분기
  if (type === 'case') {
    header.className = 'lrp-header case-header';
    if (linkEl) { linkEl.className = 'lrp-link case-link'; }
  } else {
    header.className = 'lrp-header';
    if (linkEl) { linkEl.className = 'lrp-link'; }
  }

  titleEl.textContent = title;
  descEl.textContent  = desc;

  if (url && linkEl) {
    linkEl.href = url;
    linkEl.style.display = 'block';
  } else if (linkEl) {
    linkEl.style.display = 'none';
  }

  overlay.classList.add('active');
  popup.classList.add('active');

  // 닫기 버튼 이벤트 (중복 방지)
  const closeBtn = document.getElementById('lawRefPopupClose');
  if (closeBtn) {
    closeBtn.onclick = closeLawRefPopup;
  }
}

function closeLawRefPopup() {
  const overlay = document.getElementById('lawRefOverlay');
  const popup   = document.getElementById('lawRefPopup');
  if (overlay) overlay.classList.remove('active');
  if (popup)   popup.classList.remove('active');
}

// 오버레이 클릭 시 닫기 (이벤트 위임 방식으로 DOMContentLoaded에서 등록)

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
    activateLawTags(articleEl);
    activateCaseNumbers(articleEl);
    activateCaseTags(articleEl);
  }

  // Render law sidebar
  const lawEl = document.getElementById('lawList');
  if (lawEl) {
    const formsHTML = activeTopic.forms && activeTopic.forms.length > 0
      ? activeTopic.forms.map(f => `
        <div class="form-item">
          <span class="form-icon">📄</span>
          <div><div class="form-name">${f.name}</div><div class="form-size">${f.size}</div></div>
        </div>`).join('')
      : '<p style="font-size:0.82rem;color:var(--text-light);padding:0 20px;">제공 서식 없음</p>';

    lawEl.innerHTML = `
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

/* ── 법령 조문 태그 인라인 클릭 활성화 ─────────────────── */
function buildLawUrl(text) {
  const trimmed = text.trim();
  const commaIdx = trimmed.indexOf(',');
  const effective = commaIdx > 0 ? trimmed.substring(0, commaIdx).trim() : trimmed;
  const match = effective.match(/^(.+?)\s+(제\d+조)/);
  if (!match) return null;
  return `https://www.law.go.kr/법령/${match[1].trim()}/${match[2].trim()}`;
}

function activateLawTags(containerEl) {
  containerEl.querySelectorAll('span.law-tag').forEach(span => {
    const url = buildLawUrl(span.textContent);
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = span.className;
    a.textContent = span.textContent;
    a.title = '법령 조문 보기 (law.go.kr)';
    span.replaceWith(a);
  });
}

function activateCaseNumbers(containerEl) {
  // 사건번호 패턴: 연도(2~4자리) + 사건기호(한글 1~3자) + 일련번호
  // 예: 79다1615, 2010다1272, 2014다225809
  const pattern = /\b(\d{2,4}[가-힣]{1,3}\d+)\b/g;

  function walkNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      pattern.lastIndex = 0;
      if (!pattern.test(text)) return;
      pattern.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, m;
      while ((m = pattern.exec(text)) !== null) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const a = document.createElement('a');
        a.href = `https://casenote.kr/search?q=${encodeURIComponent(m[0])}`;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'case-num-link';
        a.textContent = m[0];
        a.title = '판례 검색 (casenote.kr)';
        frag.appendChild(a);
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'A') {
      Array.from(node.childNodes).forEach(walkNode);
    }
  }

  containerEl.querySelectorAll('.ruling-box').forEach(walkNode);
}

function activateCaseTags(containerEl) {
  containerEl.querySelectorAll('span.case-tag').forEach(span => {
    const caseNum = span.textContent.trim();
    const a = document.createElement('a');
    a.href = `https://casenote.kr/search?q=${encodeURIComponent(caseNum)}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = span.className;
    a.textContent = span.textContent;
    a.title = '판례 검색 (casenote.kr)';
    span.replaceWith(a);
  });
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
    activateLawTags(articleEl);
    activateCaseNumbers(articleEl);
    activateCaseTags(articleEl);
  }

  // Render law sidebar
  const lawEl = document.getElementById('lawList');
  if (lawEl) {
    const formsHTML = activeTopic.forms && activeTopic.forms.length > 0
      ? activeTopic.forms.map(f => `
        <div class="form-item">
          <span class="form-icon">📄</span>
          <div><div class="form-name">${f.name}</div><div class="form-size">${f.size}</div></div>
        </div>`).join('')
      : '<p style="font-size:0.82rem;color:var(--text-light);padding:0 20px;">제공 서식 없음</p>';

    lawEl.innerHTML = `
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
    modalHolder.innerHTML = buildModal() + buildLawRefPopup();
  }

  // 법령·판례 태그 팝업 — 이벤트 위임
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-ref-type]');
    if (btn) {
      e.stopPropagation();
      showLawRefPopup(btn);
      return;
    }
    // 오버레이 클릭 시 닫기
    if (e.target.id === 'lawRefOverlay') {
      closeLawRefPopup();
    }
  });

  // ESC 키로 팝업 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLawRefPopup();
  });

  // Page-specific init
  const bodyId = document.body.id;
  if (bodyId === 'contentPage') initContentPage();
  if (bodyId === 'blogPage') initBlogPage();
});
