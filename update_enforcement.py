import re, sys
sys.stdout.reconfigure(encoding='utf-8')

js_file = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\homepage(claudeCode)\js\enforcement_topics_data.js"

with open(js_file, 'r', encoding='utf-8') as f:
    src = f.read()

def replace_entry(src, entry_id, new_entry_text):
    marker = f"    id: '{entry_id}',"
    id_pos = src.find(marker)
    if id_pos == -1:
        print(f"ERROR: {entry_id} not found"); return src
    start = src.rfind('\n  {', 0, id_pos) + 1
    depth, i = 0, start
    while i < len(src):
        c = src[i]
        if c == '{': depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end = i + 1
                had_comma = end < len(src) and src[end] == ','
                if had_comma: end += 1
                # Check if another entry follows (need comma even if currently missing)
                rest = src[end:end+20].lstrip('\n\r ')
                needs_comma = had_comma or rest.startswith('{')
                new_text = new_entry_text + (',' if needs_comma else '')
                print(f"{entry_id}: replacing {end-start} chars with {len(new_text)} chars (comma={'yes' if needs_comma else 'no'})")
                return src[:start] + new_text + src[end:]
        i += 1
    print(f"ERROR: end not found for {entry_id}"); return src

# ─── ef-48 ───────────────────────────────────────────────────────────────────
EF48 = r"""  {
    id: 'ef-48',
    title: '유체동산 강제집행이란? — 판결 후 상대방 물건을 처분하는 방법',
    meta: '채권자가 집행관을 통해 채무자의 동산을 압류·경매하여 채권을 회수하는 절차와 압류금지·압류제한 원칙을 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>법원 판결문·지급명령·공정증서를 받았는데 상대방이 돈을 주지 않는 상황입니다.</li>
          <li>상대방 명의의 부동산은 없거나 이미 담보가 잡혀 있어 다른 방법을 찾고 있습니다.</li>
          <li>상대방의 집이나 사업장에 팔 수 있는 물건(가전제품, 재고 등)이 있어 보입니다.</li>
          <li>강제집행을 어디에 신청해야 하는지, 절차가 어떻게 되는지 전혀 모릅니다.</li>
          <li>어떤 물건이 압류금지 물건인지, 얼마나 있어야 집행 의미가 있는지 알고 싶습니다.</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">한눈에 보는 유체동산 강제집행</span>
          <ul>
            <li>유체동산 강제집행이란, 채권자가 집행관에게 신청하여 채무자가 점유하는 동산(가전·가구·재고 물품 등)을 압류한 뒤 경매로 처분해 돈을 회수하는 제도입니다.</li>
            <li>집행기관은 법원이 아닌 <strong>집행관</strong>이며, 집행관은 독립된 사법기관으로 직접 현장에서 압류를 실시합니다(민사집행법 제188조 제1항).</li>
            <li>판결문·공정증서 등 집행권원이 있으면 상대방 동의 없이 신청할 수 있습니다.</li>
          </ul>
        </div>
        <h3>전체 절차 흐름 — 압류 → 현금화 → 배당</h3>
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
        <h3>④ 압류 제한 원칙</h3>
        <div class="warn-box">
          <div class="warn-title">⚠️ 초과압류금지 (민사집행법 제188조 제2항)</div>
          <p>압류할 목적물의 가액이 집행비용과 청구금액의 합계를 현저히 초과하면 안 됩니다. 1,000만 원 채권을 받기 위해 5억 원짜리 물건을 압류하는 것은 허용되지 않습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 무잉여압류금지 (민사집행법 제188조 제3항)</div>
          <p>압류물을 매각하더라도 집행비용을 공제하고 남는 금액(잉여)이 생기지 않을 것이 분명하면, 집행관은 그 물건을 압류하지 않아야 합니다.</p>
        </div>
        <h3>⑤ 현금화 방법</h3>
        <table>
          <thead><tr><th>방법</th><th>근거</th><th>내용</th></tr></thead>
          <tbody>
            <tr><td><strong>호가경매</strong></td><td>민집 제209조</td><td>집행관이 현장에서 구두로 응찰받아 최고가로 낙찰 — 가장 일반적인 방법</td></tr>
            <tr><td><strong>일괄매각</strong></td><td>민집 제210조</td><td>여러 물건을 개별 매각보다 일괄 매각이 유리한 경우 활용</td></tr>
            <tr><td><strong>특별현금화</strong></td><td>민집 제214조</td><td>유가증권 등 특수한 물건에 대해 법원이 특별히 허가한 방법</td></tr>
          </tbody>
        </table>
        <p>현금화 대금은 집행관이 법원에 제출하고, 이후 배당 절차가 진행됩니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚠️ 알아두셔야 할 한계</div>
          <p>유체동산 강제집행으로 회수할 수 있는 금액은 실제 경매에서 낙찰되는 금액에 한정됩니다. 동산은 감가상각이 빠르고 중고 경매 낙찰가가 매우 낮은 경우가 많아, 채권 전액 회수가 어려울 수 있습니다. 또한 채무자가 생활에 꼭 필요한 물건(압류금지물건, 민집 제195조)은 압류할 수 없으므로, 집행 전에 검토가 필요합니다.</p>
        </div>`
      },
      {
        heading: '자주 하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">판결을 받았으면 바로 집행이 가능한가요?</div>
          <div class="qna-a">
            <p>판결이 확정되거나 가집행 선고가 있는 경우에 강제집행을 신청할 수 있습니다. 그러나 판결문 자체만으로는 집행할 수 없고, 판결을 내린 법원에서 <strong>집행문</strong>을 부여받아야 합니다. 집행문이 부여된 판결 정본을 집행관에게 제출해야 집행 위임이 가능합니다.</p>
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
            <p>집행관은 채무자가 점유하고 있는 물건을 압류합니다. 물건의 실제 소유자가 따로 있다면 그 소유자가 <strong>제3자 이의의 소</strong>(민사집행법 제48조)를 제기하여 압류를 취소시킬 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자가 압류 후에 물건을 빼돌리면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>압류 후에 채무자가 압류된 물건을 임의로 처분하거나 손상·은닉하는 행위는 <strong>강제집행 면탈죄</strong>(형법 제327조)에 해당하여 형사 처벌 대상이 됩니다.</p>
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
      { name: '민사집행법 제188조', desc: '유체동산 강제집행의 집행기관(집행관), 초과압류금지, 무잉여압류금지' },
      { name: '민사집행법 제189조', desc: '유체동산의 범위' },
      { name: '민사집행법 제190조', desc: '배우자 공유 동산 압류' },
      { name: '민사집행법 제195조', desc: '압류금지 물건' },
      { name: '민사집행법 제209조', desc: '호가경매에 의한 현금화' },
      { name: '민사집행법 제214조', desc: '특별현금화' },
      { name: '민사집행법 제28조', desc: '집행문 부여' },
    ],
    forms: []
  }"""

# ─── ef-58 ───────────────────────────────────────────────────────────────────
EF58 = r"""  {
    id: 'ef-58',
    title: '채권압류명령 신청 — 채무자의 예금·급여·보증금을 압류하는 방법',
    meta: '금전채권에 대한 강제집행 절차, 피압류채권의 5가지 적격 요건, 압류금지채권 상세, 관할법원과 신청 서류를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>채무자가 은행에 예금이 있거나 직장에서 급여를 받고 있는 경우</li>
          <li>채무자가 임대차보증금 반환청구권을 가지고 있는 경우</li>
          <li>법원 판결을 얻었는데 채무자의 채권을 강제집행하고 싶은 경우</li>
          <li>채권압류명령 신청 절차와 필요한 서류를 알고 싶은 경우</li>
          <li>어떤 채권은 압류할 수 없다는 말을 들었는데 그 범위가 궁금한 경우</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">채권집행의 3단계</span>
          <ul>
            <li><strong>1단계 압류:</strong> 법원이 제3채무자에게 채무자에 대한 지급을 금지하고, 채무자에게 채권의 처분을 금지하는 압류명령을 발령합니다(민사집행법 제227조).</li>
            <li><strong>2단계 추심·전부:</strong> 압류 후 추심명령(직접 청구권) 또는 전부명령(채권 이전)을 신청하여 실제로 채권을 회수합니다.</li>
            <li><strong>3단계 변제:</strong> 제3채무자로부터 금전을 수령하거나 배당 절차를 거쳐 채권을 회수합니다.</li>
          </ul>
        </div>
        <h3>관할법원</h3>
        <p>민사집행법 제224조에 따라 <strong>채무자의 주소지</strong> 또는 <strong>제3채무자의 소재지</strong>를 관할하는 지방법원(지원)에 신청합니다. 채권자가 선택할 수 있습니다.</p>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 피압류채권의 5가지 적격 요건</h3>
        <p>모든 금전채권이 압류 대상이 되는 것은 아닙니다. 다음 5가지 요건을 모두 충족해야 압류명령을 신청할 수 있습니다.</p>
        <table>
          <thead><tr><th>요건</th><th>내용</th><th>예시</th></tr></thead>
          <tbody>
            <tr><td>① 책임재산</td><td>집행채무자의 책임재산에 속할 것</td><td>제3자 명의 채권은 불가</td></tr>
            <tr><td>② 재산적 가치</td><td>독립된 재산으로서 재산적 가치가 있을 것</td><td>공법상 의무 이행청구권은 불가</td></tr>
            <tr><td>③ 재판권</td><td>제3채무자에게 대한민국의 재판권이 미칠 것</td><td>외국에 소재하는 제3채무자 — 요건 검토 필요</td></tr>
            <tr><td>④ 양도성</td><td>양도할 수 있을 것 — 일신전속적 채권은 불가</td><td>부양료 채권 자체는 불가(수령액은 가능)</td></tr>
            <tr><td>⑤ 압류금지 비해당</td><td>법률상 압류금지채권이 아닐 것(민집 제246조)</td><td>급여의 1/2 초과분은 압류 불가</td></tr>
          </tbody>
        </table>
        <h3>② 압류금지채권 — 민사집행법 제246조 제1항</h3>
        <p>다음 채권은 법으로 압류가 금지되어 있습니다. 이를 모르고 신청하면 기각됩니다.</p>
        <table>
          <thead><tr><th>호수</th><th>채권 종류</th><th>내용</th></tr></thead>
          <tbody>
            <tr><td>제1호</td><td>부양료·유족부조료</td><td>법령에 따라 지급되는 부양료, 유족부조료 채권</td></tr>
            <tr><td>제2호</td><td>사회보장급여</td><td>구호사업·사회복지사업을 위하여 공여된 금품</td></tr>
            <tr><td>제3호</td><td>병사급료</td><td>병사에게 지급되는 급료</td></tr>
            <tr><td>제4호</td><td>급여채권의 1/2</td><td>급료·연금·봉급 등 급여채권의 2분의 1에 해당하는 금액 (단, 표준적인 가구의 생계비에 미치지 못하면 그 금액까지 보호 — 현재 185만 원)</td></tr>
            <tr><td>제5호</td><td>퇴직금의 1/2</td><td>퇴직금 그 밖에 이와 비슷한 성질을 가진 급여채권의 2분의 1</td></tr>
            <tr><td>제6호</td><td>소액임차보증금</td><td>주택임대차보호법 제8조, 상가건물 임대차보호법 제14조에 따른 보증금 중 일정액</td></tr>
            <tr><td>제7호</td><td>보장성보험금</td><td>생명·상해·질병·사고 등을 원인으로 한 보장성 보험의 보험금, 해약환급금, 만기환급금</td></tr>
          </tbody>
        </table>
        <div class="warn-box">
          <div class="warn-title">⚡ 급여의 절반 이상은 압류 불가 — 핵심 포인트</div>
          <p>급여·봉급의 <strong>2분의 1</strong>은 무조건 압류할 수 없습니다(민사집행법 제246조 제1항 제4호). 다만, 급여 전액이 표준적인 가구의 생계비(현재 185만 원)에 미치지 못하면 그 금액까지 보호됩니다. 이 기간을 넘기면 권리를 잃습니다.</p>
        </div>
        <h3>③ 심사의 밀행성 — 채무자·제3채무자에게 미리 알리지 않음</h3>
        <p>법원은 압류명령 신청을 심사할 때 제3채무자와 채무자를 심문하지 않습니다(민사집행법 제226조). 이는 채무자가 미리 알아채서 재산을 빼돌리는 것을 막기 위한 것입니다. 신청이 접수되면 법원은 서면만으로 심사하여 압류명령을 발령합니다.</p>
        <h3>④ 압류명령의 효력 발생</h3>
        <p>압류명령은 <strong>제3채무자에게 송달된 때</strong>부터 효력이 발생합니다(민사집행법 제227조 제3항). 이 시점부터 제3채무자는 채무자에게 지급을 해서는 안 되고, 채무자는 채권을 처분할 수 없게 됩니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">피압류채권을 어떻게 특정해야 하나요?</div>
          <div class="qna-a">
            <p>예금채권의 경우 "○○은행 ○○지점 예금계좌 000000-00-000000", 급여채권의 경우 "○○회사로부터 받을 월 급여 채권" 등으로 제3채무자가 명확하게 알아볼 수 있도록 구체적으로 기재해야 합니다. 너무 막연하게 기재하면 신청이 기각될 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">압류명령이 발령되면 얼마 후 효력이 생기나요?</div>
          <div class="qna-a">
            <p>압류명령이 발령되는 순간이 아니라, <strong>제3채무자에게 송달된 때</strong>부터 효력이 발생합니다(민사집행법 제227조 제3항). 일반적으로 법원이 발령 후 1~2주 내에 송달됩니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자의 급여 전액을 압류할 수 있나요?</div>
          <div class="qna-a">
            <p>급여 전액 압류는 불가능합니다. 법은 급여의 2분의 1을 반드시 채무자에게 남겨두도록 하고 있습니다(민사집행법 제246조 제1항 제4호). 또한 표준 가구 생계비 수준(현재 185만 원)에 미치지 못하면 그 금액까지 보호됩니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">심사에서 기각되면 어떻게 하나요?</div>
          <div class="qna-a">
            <p>압류명령의 신청기각 결정에 대해서는 민사집행법 제227조 제4항에 따라 <strong>즉시항고</strong>를 할 수 있습니다. 기각 이유를 파악하고 보정한 뒤 재신청하는 방법도 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">압류 후 다음 단계는 무엇인가요?</div>
          <div class="qna-a">
            <p>압류 후에는 <strong>추심명령</strong>(제3채무자로부터 직접 수령할 권한 부여) 또는 <strong>전부명령</strong>(채권을 채권자에게 이전)을 신청해야 실제로 돈을 받을 수 있습니다. 단순 압류만으로는 채무자의 재산에 동결 효과만 발생할 뿐, 돈을 받을 수는 없습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">압류의 효력 발생 시점</div>
          <p>대법원은 "채권의 압류효력은 제3채무자에게 송달된 때 발생하며, 압류 당시 채권이 이미 제3자에게 양도되었더라도 송달 후 양도가 취소되어 채권이 원래 채무자에게 복귀한 경우 그 채권은 압류채권자에게 전부되지 않는다"고 판시하였습니다(대판 1980. 2. 12. 79다1615).</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">급여채권 압류금지 범위</div>
          <p>대법원은 급여채권 2분의 1은 압류금지 채권에 해당하며, 이를 위반한 압류명령은 취소되어야 한다고 판시하였습니다. 실무상 급여를 압류할 때는 반드시 압류금지 부분을 제외하고 신청해야 합니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 피압류채권 특정 오류</div>
          <p>채권을 너무 막연하게 기재하면 신청이 기각될 수 있습니다. "○○은행의 예금"처럼 쓰지 말고 계좌번호까지 기재해야 합니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 관할법원 확인</div>
          <p>민사집행법 제224조에 따라 채무자의 주소지 또는 제3채무자의 소재지 관할 지방법원에 신청해야 합니다. 관할 없는 법원에 신청하면 각하됩니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 필수 첨부서류 누락 주의</div>
          <p>집행력 있는 정본(집행문 부여된 판결문), 송달증명원이 빠지면 신청이 반려됩니다. 미리 법원에서 집행문과 송달증명을 발급받아 두어야 합니다.</p>
        </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
          <a href="#" class="next-link" data-target="ef-59">
            <span class="nl-title">추심명령 — 압류 후 돈을 직접 받는 방법</span>
            <span class="nl-desc">제3채무자로부터 직접 청구하는 절차</span>
          </a>
          <a href="#" class="next-link" data-target="ef-60">
            <span class="nl-title">전부명령 — 채권을 내 것으로 이전하는 방법</span>
            <span class="nl-desc">채권 자체를 채권자에게 이전시키는 절차</span>
          </a>
          <a href="#" class="next-link" data-target="ef-63">
            <span class="nl-title">집행공탁 — 제3채무자가 돈을 공탁하면 어떻게 되나</span>
            <span class="nl-desc">경합이 있을 때 제3채무자의 공탁 절차</span>
          </a>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제223조', desc: '금전채권에 대한 압류명령' },
      { name: '민사집행법 제224조', desc: '관할법원(채무자 주소지 또는 제3채무자 소재지)' },
      { name: '민사집행법 제226조', desc: '심문 없이 심사(밀행성)' },
      { name: '민사집행법 제227조', desc: '압류명령 발부, 송달, 효력 발생, 즉시항고' },
      { name: '민사집행법 제246조', desc: '압류금지채권(급여 1/2, 퇴직금 1/2, 사회보장급여 등)' },
    ],
    forms: []
  }"""

# ─── ef-63 ───────────────────────────────────────────────────────────────────
EF63 = r"""  {
    id: 'ef-63',
    title: '집행공탁 — 제3채무자가 돈을 공탁하면 어떻게 되나',
    meta: '제3채무자의 권리공탁(임의공탁)·의무공탁·혼합공탁의 구별, 공탁사유신고 절차, 채권자의 공탁금 수령 방법을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>은행이나 회사(제3채무자)에서 공탁했다는 통보를 받은 경우</li>
          <li>압류된 돈이 법원 공탁소에 들어갔다는 통지를 받은 경우</li>
          <li>다른 채권자와 함께 공탁금을 나누어야 하는 경우</li>
          <li>공탁금을 언제, 어떻게 받을 수 있는지 알고 싶은 경우</li>
          <li>제3채무자가 공탁해야 하는 경우와 선택적으로 공탁할 수 있는 경우를 구별하고 싶은 경우</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">집행공탁(민사집행법 제248조) 3가지 유형</span>
          <table>
            <thead><tr><th>유형</th><th>근거</th><th>요건</th><th>성격</th></tr></thead>
            <tbody>
              <tr><td><strong>권리공탁</strong></td><td>제248조 제1항</td><td>압류된 금전채권 — 언제든지</td><td>임의(선택)</td></tr>
              <tr><td><strong>의무공탁 ①</strong></td><td>제248조 제2항</td><td>배당요구서 송달 후 채권자의 청구가 있을 때</td><td>강제(의무)</td></tr>
              <tr><td><strong>의무공탁 ②</strong></td><td>제248조 제3항</td><td>압류가 경합된 경우 — 전액 공탁</td><td>강제(의무)</td></tr>
            </tbody>
          </table>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 권리공탁 — 제248조 제1항 (임의공탁)</h3>
        <p>압류명령을 받은 제3채무자는, 압류에 관련된 금전채권의 전액을 <strong>언제든지</strong> 채무자의 주소지 공탁소에 공탁할 수 있습니다. 의무가 아니라 선택입니다.</p>
        <div class="summary-box">
          <span class="label">권리공탁의 효과</span>
          <ul>
            <li>제3채무자의 채무 소멸 — 법적 책임에서 해방됩니다.</li>
            <li>압류채권자는 공탁금 지급청구권을 취득합니다.</li>
            <li>누구에게 지급할지 불확실할 때 법적 분쟁을 피할 수 있습니다.</li>
          </ul>
        </div>
        <h3>② 의무공탁 ① — 제248조 제2항 (배당요구 후 의무)</h3>
        <p>배당요구서가 제3채무자에게 송달된 경우에 채권자가 청구하면, 제3채무자는 압류된 부분에 해당하는 금액을 <strong>반드시</strong> 공탁하여야 합니다. 청구를 받았음에도 공탁하지 않으면 제3채무자에게 책임이 생깁니다.</p>
        <h3>③ 의무공탁 ② — 제248조 제3항 (압류 경합 시 전액 공탁)</h3>
        <p>압류가 경합된 경우(여러 채권자가 같은 채권을 압류한 경우) 제3채무자는 채권 <strong>전액</strong>을 공탁하여야 합니다. 이는 누구에게 얼마를 지급해야 하는지 법원이 판단하게 하기 위한 절차입니다.</p>
        <h3>④ 공탁사유신고 — 제248조 제4항</h3>
        <p>제3채무자가 공탁을 마친 후에는 <strong>집행법원에 사유를 신고</strong>하여야 합니다. 이 신고가 있으면 법원은 배당요구 종기를 결정합니다. 배당요구 종기가 지나면 그 이후의 배당요구는 효력이 없습니다.</p>
        <div class="flow">
          <div class="flow-item"><div class="flow-num">①</div><div>제3채무자가 공탁소에 공탁</div></div>
          <div class="flow-item"><div class="flow-num">②</div><div>공탁사유신고 (법원에)</div></div>
          <div class="flow-item"><div class="flow-num">③</div><div>법원이 배당요구 종기 결정</div></div>
          <div class="flow-item"><div class="flow-num">④</div><div>채권자들 배당요구</div></div>
          <div class="flow-item"><div class="flow-num">⑤</div><div>배당기일 · 배당금 수령</div></div>
        </div>
        <h3>⑤ 혼합공탁 — 불확지 공탁과 집행공탁의 결합</h3>
        <p>실무에서는 민법 제487조 후단의 <strong>채권자불확지 공탁</strong>(누가 채권자인지 모를 때)과 민사집행법 제248조 제1항의 <strong>집행공탁</strong>을 결합한 혼합공탁을 활용하는 경우가 많습니다. 예를 들어 채권양도 통지와 압류명령이 동시에 도착해 누구에게 지급해야 할지 모를 때 혼합공탁을 합니다.</p>
        <div class="case-box">
          <div class="case-title">사례</div>
          <p>A가 B에게 1,000만 원의 채권을 가지고 있었는데, 같은 날 채권양도통지(양수인 C)와 채권압류명령(채권자 D)이 도착했습니다. B는 C와 D 중 누구에게 지급해야 할지 몰라 혼합공탁(민법 제487조 후단 + 민집 제248조 제1항)을 하고 공탁사유신고를 합니다. 이후 법원의 배당 절차에서 C와 D 중 누가 우선하는지 결정됩니다.</p>
        </div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">은행(제3채무자)에서 공탁했다는 통보를 받았는데 어떻게 하나요?</div>
          <div class="qna-a">
            <p>법원으로부터 배당요구 종기 통지가 도착합니다(공탁사유신고 후 통상 1~2주 내). 종기가 지나기 전에 <strong>배당요구 신청서</strong>를 제출해야 합니다. 집행권원(판결, 확정 조서 등)이 있다면 배당요구를 신청할 수 있습니다. 기한을 놓치면 배당받을 수 없습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">제3채무자가 공탁하면 내 채권은 어떻게 되나요?</div>
          <div class="qna-a">
            <p>당신의 채권 자체는 소멸하지 않습니다. 다만 제3채무자에 대한 청구권이 <strong>공탁금 지급청구권</strong>으로 전환됩니다. 배당 절차를 통해 공탁금에서 분배받게 됩니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">경합이 없어도 제3채무자가 공탁할 수 있나요?</div>
          <div class="qna-a">
            <p>네, 경합이 없어도 제3채무자는 민사집행법 제248조 제1항에 따라 <strong>임의로</strong> 공탁할 수 있습니다(권리공탁). 법적 분쟁을 피하거나 누구에게 지급해야 할지 불확실할 때 활용합니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">공탁금을 언제 받을 수 있나요?</div>
          <div class="qna-a">
            <p>공탁금을 받으려면 배당 절차를 거쳐야 합니다. 배당요구 종기 이후 법원이 배당기일을 지정하고, 배당표를 작성하여 각 채권자에게 배당합니다. 통상 공탁 통보부터 배당금 수령까지 4~8주가 소요됩니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">집행공탁의 효과 — 제3채무자의 면책</div>
          <p>대법원은 "제3채무자가 집행공탁을 하면 그 채무는 소멸하고, 이후 채권자는 공탁금에 대한 배당 절차에 의하여 자신의 몫을 받아야 한다"고 판시하였습니다. 제3채무자는 공탁으로 법적 책임에서 완전히 벗어납니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">혼합공탁의 허용</div>
          <p>대법원은 채권양도와 압류가 경합하는 상황에서 제3채무자가 민법 제487조 후단과 민사집행법 제248조 제1항을 결합한 혼합공탁을 할 수 있다고 판시하였습니다. 이는 제3채무자가 진정한 채권자가 누구인지 모를 때 이중지급의 위험을 피하기 위한 적법한 방법입니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚡ 배당요구 종기 반드시 확인</div>
          <p>공탁 통보를 받으면 법원으로부터 배당요구 종기 통지가 곧 도착합니다. <strong>이 기한은 절대적</strong>이므로 꼭 지켜야 합니다. 기한을 넘기면 배당을 받을 수 없습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 집행권원이 없으면 배당요구 불가</div>
          <p>공탁금을 받으려면 집행력 있는 집행권원(판결, 확정 조서 등)이 필수입니다. 가압류나 단순 합의만으로는 배당요구를 할 수 없습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 채권계산서를 정확하게 제출하세요</div>
          <p>배당기일에 원금, 이자, 지연손해금 등을 명시한 정확한 채권계산서를 제출해야 배당액이 올바르게 계산됩니다.</p>
        </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
          <a href="#" class="next-link" data-target="ef-64">
            <span class="nl-title">배당 절차 — 배당기일·배당표·배당이의</span>
            <span class="nl-desc">공탁금을 배당받는 전체 절차</span>
          </a>
          <a href="#" class="next-link" data-target="ef-58">
            <span class="nl-title">채권압류명령 신청</span>
            <span class="nl-desc">압류명령 신청 절차와 필요 서류</span>
          </a>
          <a href="#" class="next-link" data-target="ef-59">
            <span class="nl-title">추심명령 — 압류 후 직접 받는 방법</span>
            <span class="nl-desc">제3채무자로부터 직접 청구하는 절차</span>
          </a>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제248조 제1항', desc: '권리공탁(임의공탁) — 언제든지 전액 공탁 가능' },
      { name: '민사집행법 제248조 제2항', desc: '의무공탁 — 배당요구서 송달 후 채권자 청구 시' },
      { name: '민사집행법 제248조 제3항', desc: '의무공탁 — 압류 경합 시 채권 전액 공탁' },
      { name: '민사집행법 제248조 제4항', desc: '공탁사유신고 및 배당요구 종기 결정' },
      { name: '민법 제487조 후단', desc: '채권자불확지 공탁(혼합공탁 결합 근거)' },
    ],
    forms: []
  }"""

# ─── ef-64 ───────────────────────────────────────────────────────────────────
EF64 = r"""  {
    id: 'ef-64',
    title: '배당 절차 — 배당절차 개시 요건과 배당기일·배당이의 완전 정리',
    meta: '동산·채권집행에서 배당절차가 개시되는 요건(민집 252조), 배당기일·배당표·배당이의·배당이의의 소까지 전체 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>집행관이 매각대금을 받았는데 언제 배당이 시작되는지 모르는 경우</li>
          <li>제3채무자가 공탁했다는 통지를 받은 후 다음 절차를 알고 싶은 경우</li>
          <li>배당기일에 어떻게 참석하고 무엇을 해야 하는지 모르는 경우</li>
          <li>배당표에 이의가 있는 경우 어떻게 다투어야 하는지 알고 싶은 경우</li>
          <li>채무자의 파산·회생절차가 집행에 미치는 영향을 알고 싶은 경우</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">배당절차 개시 요건 — 민사집행법 제252조</span>
          <ul>
            <li><strong>제1호:</strong> 집행관이 매각대금을 법원에 제출한 때</li>
            <li><strong>제2호:</strong> 추심채권자 또는 제3채무자가 추심금·채무액을 공탁하거나 법원에 제출한 때</li>
            <li><strong>제3호:</strong> 현금화한 금전을 법원에 제출한 때</li>
          </ul>
        </div>
        <div class="summary-box">
          <span class="label">핵심 기한 요약</span>
          <ul>
            <li>⚡ 채권계산서: 배당기일 <strong>전에 반드시</strong> 제출</li>
            <li>⚡ 배당이의: 배당기일에 출석하여 <strong>그 자리에서</strong> 이의 진술</li>
            <li>⚡ 배당이의의 소: 배당이의 후 <strong>1주일 이내</strong> 제기 (절대 기한)</li>
          </ul>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 배당절차 개시 요건 상세</h3>
        <p>민사집행법 제252조는 동산·채권집행에서 배당절차가 시작되는 시점을 규정합니다. 다음 중 하나에 해당하면 법원은 배당절차를 개시합니다.</p>
        <table>
          <thead><tr><th>호수</th><th>요건</th><th>제출자</th></tr></thead>
          <tbody>
            <tr><td>제1호</td><td>유체동산 매각대금을 법원에 제출</td><td>집행관</td></tr>
            <tr><td>제2호 전단</td><td>추심한 금전을 공탁하거나 법원에 제출</td><td>추심채권자</td></tr>
            <tr><td>제2호 후단</td><td>채무 전액을 공탁하거나 법원에 제출</td><td>제3채무자</td></tr>
            <tr><td>제3호</td><td>그 밖의 방법으로 현금화한 금전을 법원에 제출</td><td>집행관·채권자</td></tr>
          </tbody>
        </table>
        <h3>② 배당절차의 장애사유</h3>
        <p>다음 사유가 있으면 배당절차가 개시되지 않거나 중단됩니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚠️ 집행정지결정</div>
          <p>법원이 집행을 정지하는 결정(집행정지결정)을 하면 배당절차도 함께 정지됩니다. 집행정지결정은 상소심에서의 집행정지 신청 등으로 발령됩니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 파산선고</div>
          <p>채무자에 대해 파산이 선고되면, 파산선고 전에 이미 강제집행이 완료되어 배당까지 끝난 경우가 아니면 강제집행은 파산절차에 흡수됩니다(채무자회생 및 파산에 관한 법률 제382조). 파산관재인이 파산재단을 관리하게 됩니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 회생절차개시결정</div>
          <p>채무자에 대한 회생절차가 개시되면 채무자의 재산에 대한 강제집행은 금지되고, 이미 진행 중인 집행도 중지됩니다. 채권자는 회생절차에서 회생채권자로서 권리를 행사해야 합니다.</p>
        </div>
        <h3>③ 배당절차 흐름</h3>
        <div class="flow">
          <div class="flow-item"><div class="flow-num">①</div><div>배당절차 개시(252조 요건 충족)</div></div>
          <div class="flow-item"><div class="flow-num">②</div><div>배당요구 종기 결정·공고</div></div>
          <div class="flow-item"><div class="flow-num">③</div><div>채권계산서 제출</div></div>
          <div class="flow-item"><div class="flow-num">④</div><div>배당기일 — 배당표 작성</div></div>
          <div class="flow-item"><div class="flow-num">⑤</div><div>배당이의(있는 경우)</div></div>
          <div class="flow-item"><div class="flow-num">⑥</div><div>배당금 수령</div></div>
        </div>
        <h3>④ 배당기일과 배당이의</h3>
        <p>법원은 배당요구 종기 이후 배당기일을 지정하여 채권자들에게 통지합니다. 배당기일에 법원이 배당표를 작성하고, 이에 이의가 있는 채권자는 <strong>배당기일에 출석하여 이의를 진술</strong>해야 합니다(민사집행법 제256조).</p>
        <p>배당이의가 해결되지 않으면 이의를 한 채권자는 배당이의 후 <strong>1주일 이내에 배당이의의 소</strong>를 제기해야 합니다(민사집행법 제280조). 이 기한은 절대적이므로 절대 놓쳐서는 안 됩니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">채권계산서를 제출하지 않으면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>배당을 받지 못합니다. 채권계산서는 당신이 청구할 수 있는 정확한 채권액(원금, 이자, 지연손해금 등)을 법원에 입증하는 문서입니다. 배당기일 <strong>전에 반드시</strong> 제출하세요.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">배당표에 이의가 있으면 어떻게 하나요?</div>
          <div class="qna-a">
            <p>배당기일에 출석하여 그 자리에서 이의를 진술해야 합니다(민사집행법 제256조). 이의가 받아들여지지 않으면 배당이의의 소를 배당이의 후 <strong>1주일 이내</strong>에 제기해야 합니다(제280조). 이 기한은 절대적입니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">채무자가 파산하면 배당을 못 받나요?</div>
          <div class="qna-a">
            <p>파산선고 전에 배당이 완료되었다면 받을 수 있습니다. 그러나 파산선고 후에 배당절차가 진행 중이라면 파산절차로 흡수됩니다. 이 경우 파산관재인에게 채권신고를 하고 파산절차에서 배당을 받아야 합니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">배당이의의 소 1주일 기한을 놓치면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>기한을 도과하면 배당표가 확정되어 더 이상 다툴 수 없습니다. 배당이의의 소는 <strong>배당이의 후 1주일 이내</strong>에 제기해야 하며(민사집행법 제280조), 이 기한은 불변기간으로 법원도 연장해줄 수 없습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">배당이의의 소 기한 도과</div>
          <p>대법원은 "배당이의의 소는 배당표 확정 후 1주일 이내에 제기되어야 하며, 이 기한 도과 후 제기된 배당이의의 소는 부적법하다"고 판시하였습니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">파산선고와 강제집행의 관계</div>
          <p>채무자에 대해 파산선고가 있으면 파산재단에 속하는 재산에 대하여 강제집행을 할 수 없고, 이미 진행 중인 강제집행도 파산절차에 흡수됩니다(채무자회생 및 파산에 관한 법률 제382조). 다만 파산선고 전에 강제집행이 완료된 경우는 제외됩니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚡ 배당이의의 소 1주일 기한 절대 놓치지 마세요</div>
          <p>배당이의 후 1주일 이내에 배당이의의 소를 제기해야 합니다(민사집행법 제280조). 이 기한을 넘기면 절대 배당액을 변경할 수 없습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 채권계산서를 정확하게 작성하세요</div>
          <p>원금뿐만 아니라 이자, 지연손해금, 소송비용 등을 정확히 계산하여 제출해야 합니다. 오류가 있으면 배당액이 부정확할 수 있습니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 채무자의 파산·회생 여부 확인</div>
          <p>집행 도중 채무자가 파산 또는 회생절차에 들어가면 집행이 중단될 수 있습니다. 법원 기록을 주기적으로 확인하거나 법무사와 상담하세요.</p>
        </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
          <a href="#" class="next-link" data-target="ef-63">
            <span class="nl-title">집행공탁 — 제3채무자가 공탁하면 어떻게 되나</span>
            <span class="nl-desc">공탁의 종류와 공탁사유신고 절차</span>
          </a>
          <a href="#" class="next-link" data-target="ef-58">
            <span class="nl-title">채권압류명령 신청</span>
            <span class="nl-desc">압류명령 신청 절차와 필요 서류</span>
          </a>
          <a href="#" class="next-link" data-target="ef-59">
            <span class="nl-title">추심명령 — 압류 후 직접 받는 방법</span>
            <span class="nl-desc">제3채무자로부터 직접 청구하는 절차</span>
          </a>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제252조', desc: '배당절차 개시 요건(각호)' },
      { name: '민사집행법 제256조', desc: '배당기일 출석 및 배당이의 진술' },
      { name: '민사집행법 제270조', desc: '배당표 작성' },
      { name: '민사집행법 제278조', desc: '배당이의' },
      { name: '민사집행법 제280조', desc: '배당이의의 소(1주일 절대 기한)' },
      { name: '채무자회생 및 파산에 관한 법률 제382조', desc: '파산선고와 강제집행 금지' },
    ],
    forms: []
  }"""

# ─── ef-72 ───────────────────────────────────────────────────────────────────
EF72 = r"""  {
    id: 'ef-72',
    title: '유체동산 인도청구권 집행 — 물건을 받을 권리도 집행 대상',
    meta: '채무자가 제3자로부터 유체동산을 인도받을 권리(인도청구권)에 대한 강제집행 절차와 압류명령 내용, 집행관의 인도 역할을 설명합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>채무자가 제3자에게 물건 반환을 청구할 권리를 가지고 있는 경우</li>
          <li>채무자가 다른 사람에게 빌려준 물건의 반환청구권을 압류하고 싶은 경우</li>
          <li>채무자의 동산 인도청구권에 대해 압류·추심 절차를 알고 싶은 경우</li>
          <li>유체동산 인도청구권이 금전채권 집행과 어떻게 다른지 확인하고 싶은 경우</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">유체동산 인도청구권 집행의 의의</span>
          <ul>
            <li>채무자가 제3자에게 가진 유체동산 인도청구권(예: 빌려준 물건을 돌려받을 권리)은 민사집행법 제242조에 따라 강제집행 대상이 됩니다.</li>
            <li>금전채권에 관한 강제집행 규정(민집 제227~240조)을 준용하여 압류명령을 신청합니다.</li>
            <li>압류명령 발령 후 집행관이 제3채무자로부터 물건을 인도받아 채권자에게 인도합니다.</li>
          </ul>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 근거 규정 — 민사집행법 제242조</h3>
        <p>유체물의 인도청구권에 대한 강제집행은 금전채권에 관한 강제집행의 일반규정(민집 제227조~제240조)을 <strong>준용</strong>합니다. 따라서 압류명령 신청, 관할법원, 효력 발생 시점 등은 금전채권 집행과 같은 방식으로 진행됩니다.</p>
        <h3>② 압류명령의 내용 — 민사집행법 제243조 제1항</h3>
        <p>법원이 유체동산 인도청구권에 대한 압류명령을 발령할 때, 그 내용은 다음과 같습니다.</p>
        <div class="summary-box">
          <span class="label">압류명령의 세 가지 금지·명령</span>
          <ul>
            <li>① 제3채무자에 대하여: 채무자에게 유체동산을 인도하는 것을 <strong>금지</strong></li>
            <li>② 채무자에 대하여: 그 인도청구권의 추심 및 처분을 <strong>금지</strong></li>
            <li>③ 제3채무자에게: 그 유체동산을 <strong>집행관에게 인도</strong>하도록 명령</li>
          </ul>
        </div>
        <h3>③ 추심명령 — 민사집행법 제243조 제2항</h3>
        <p>채권자가 추심명령을 신청하면 법원은 채권자에게 집행관을 통해 추심할 권한을 부여합니다. 채권자는 집행관에게 위임하여 제3채무자로부터 물건을 인도받을 수 있습니다.</p>
        <h3>④ 현금화 — 민사집행법 제243조 제3항</h3>
        <p>인도받은 유체동산은 집행관에 의한 매각(경매)의 방법으로 현금화합니다. 즉, 물건 자체를 채권자에게 주는 것이 아니라, 집행관이 물건을 인도받아 경매로 처분하고 그 대금을 채권자에게 배당합니다.</p>
        <div class="case-box">
          <div class="case-title">실제 사례</div>
          <p>A씨는 B씨에게 1,000만 원짜리 기계를 빌려주었습니다. A씨가 C씨에게 500만 원의 채무를 지고 있을 때, C씨는 A씨가 B씨에 대해 가지는 기계 반환청구권(인도청구권)을 압류할 수 있습니다. 법원이 압류명령을 발령하면, B씨는 A씨가 아닌 집행관에게 기계를 인도해야 합니다. 집행관은 기계를 경매하여 그 대금으로 C씨에게 배당합니다.</p>
        </div>
        <h3>⑤ 부동산·선박 인도청구권 — 민사집행법 제244조</h3>
        <p>부동산이나 선박에 대한 인도청구권은 제244조에 따라 부동산 집행(명도집행)에 관한 규정을 준용합니다. 이 경우 집행관이 아닌 법원의 명도집행 절차를 따르며, 채권자의 출석이 필요합니다.</p>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">인도청구권 집행과 금전채권 집행의 차이는 무엇인가요?</div>
          <div class="qna-a">
            <p>금전채권 집행은 제3채무자로부터 금전을 회수하는 것이고, 인도청구권 집행은 제3채무자로부터 물건(유체동산)을 인도받아 경매로 현금화하는 과정이 추가됩니다. 압류명령 단계는 비슷하지만, 이후 집행관이 직접 물건을 수령하고 매각하는 절차가 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">제3채무자가 물건 인도를 거부하면 어떻게 되나요?</div>
          <div class="qna-a">
            <p>제3채무자가 압류명령에도 불구하고 집행관에게 물건을 인도하지 않으면, 채권자는 추심소송을 제기하여 물건 인도를 강제할 수 있습니다(민집 제243조 준용). 물건 인도 자체가 불가능하면 손해배상청구권으로 전환될 수 있습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">인도받은 물건을 채권자가 직접 가질 수 있나요?</div>
          <div class="qna-a">
            <p>아닙니다. 집행관이 물건을 인도받아 경매(매각)로 현금화하고, 그 대금에서 집행비용을 공제한 후 채권자에게 배당합니다(민집 제243조 제3항). 물건 자체를 채권자가 갖는 방식은 법적으로 허용되지 않습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">부동산에 대한 인도청구권도 같은 절차로 집행하나요?</div>
          <div class="qna-a">
            <p>아닙니다. 부동산이나 선박에 대한 인도청구권은 민사집행법 제244조에 따라 부동산 인도집행(명도집행) 규정을 준용합니다. 유체동산 인도청구권(제242~243조)과는 별도의 절차가 적용됩니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">유체동산 인도청구권의 집행 가능성</div>
          <p>대법원은 채무자가 제3자에게 가지는 유체동산 인도청구권도 금전적 가치가 있는 재산권으로서 강제집행의 대상이 된다고 판시하였습니다. 민사집행법 제242조에 따라 금전채권 집행 규정을 준용하여 압류명령을 신청할 수 있습니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 물건 특정 필수</div>
          <p>압류할 유체동산 인도청구권을 신청서에 명확히 특정해야 합니다. 물건의 명칭, 규격, 특징, 수량 등을 상세히 기재해야 합니다. 너무 막연하게 기재하면 신청이 기각됩니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 인도청구권 존재 증명</div>
          <p>채무자가 실제로 물건 반환청구권을 가지고 있는지 증명하는 자료(대여 계약서 등)가 필요합니다. 인도청구권이 없으면 압류 자체가 무효입니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 물건의 현존 확인</div>
          <p>압류 신청 전에 물건이 아직 제3자에게 있는지, 온전한 상태인지 확인하세요. 물건이 멸실되었거나 없다면 집행이 불가능합니다.</p>
        </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
          <a href="#" class="next-link" data-target="ef-58">
            <span class="nl-title">채권압류명령 신청</span>
            <span class="nl-desc">금전채권 압류명령 신청 절차(준용 원칙)</span>
          </a>
          <a href="#" class="next-link" data-target="ef-73">
            <span class="nl-title">부동산 명도집행 절차</span>
            <span class="nl-desc">부동산·선박 인도청구권 집행(244조 준용)</span>
          </a>
          <a href="#" class="next-link" data-target="ef-79">
            <span class="nl-title">금전채권 외의 채권에 기초한 강제집행</span>
            <span class="nl-desc">직접강제·대체집행·간접강제 전체 개관</span>
          </a>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제242조', desc: '유체물 인도청구권 집행 — 금전채권 규정 준용' },
      { name: '민사집행법 제243조 제1항', desc: '압류명령의 내용(제3채무자 인도금지, 집행관 인도 명령)' },
      { name: '민사집행법 제243조 제2항', desc: '추심명령 — 집행관에게 위임' },
      { name: '민사집행법 제243조 제3항', desc: '현금화 — 집행관에 의한 매각' },
      { name: '민사집행법 제244조', desc: '부동산·선박 인도청구권 집행(부동산 규정 준용)' },
    ],
    forms: []
  }"""

# ─── ef-79 ───────────────────────────────────────────────────────────────────
EF79 = r"""  {
    id: 'ef-79',
    title: '금전채권 외의 채권에 기초한 강제집행 — 직접강제·대체집행·간접강제',
    meta: '판결을 받았는데 상대방이 물건을 주지 않거나 철거를 안 할 때 — 직접강제(동산·부동산 인도), 대체집행(철거·공작물 제거), 간접강제, 의사표시 집행 절차를 안내합니다.',
    sections: [
      {
        heading: '이런 분께 필요합니다',
        content: `<div class="checklist"><ul>
          <li>물건을 돌려주라는 판결을 받았는데 상대방이 이행하지 않는 경우</li>
          <li>건물 철거 판결이 있는데 상대방이 이행하지 않는 경우</li>
          <li>부동산 명도 판결이 있는데 상대방이 나가지 않는 경우</li>
          <li>어떤 방법으로 강제집행을 신청해야 하는지 모르는 경우</li>
          <li>직접강제, 대체집행, 간접강제의 차이를 알고 싶은 경우</li>
        </ul></div>`
      },
      {
        heading: '핵심정리',
        content: `<div class="summary-box">
          <span class="label">금전채권 외의 채권 집행 방법 비교</span>
          <table>
            <thead><tr><th>방법</th><th>적용 대상</th><th>핵심 내용</th><th>근거</th></tr></thead>
            <tbody>
              <tr><td><strong>직접강제</strong></td><td>동산·부동산 인도청구</td><td>집행관이 직접 물건을 빼앗아 채권자에게 인도</td><td>민집 257·258조</td></tr>
              <tr><td><strong>대체집행</strong></td><td>대체적 작위채무(철거 등)</td><td>법원 수권결정 → 제3자가 채무자 대신 이행</td><td>민집 260조</td></tr>
              <tr><td><strong>간접강제</strong></td><td>비대체적 작위·부작위채무</td><td>이행 안 하면 배상금을 지급하도록 압박</td><td>민집 261조</td></tr>
              <tr><td><strong>의사표시 집행</strong></td><td>의사표시 의무</td><td>판결 확정 시 의사표시를 한 것으로 간주</td><td>민집 263조</td></tr>
            </tbody>
          </table>
        </div>`
      },
      {
        heading: '상세설명',
        content: `<h3>① 직접강제 — 동산 인도 (민사집행법 제257조)</h3>
        <p>채무자에게 특정 동산을 채권자에게 인도할 것을 명한 판결이 있는 경우, <strong>집행관</strong>이 직접 채무자로부터 물건을 빼앗아 채권자에게 인도합니다.</p>
        <div class="summary-box">
          <span class="label">동산 인도 집행의 특징</span>
          <ul>
            <li><strong>채권자 출석 불필요:</strong> 채권자가 현장에 없어도 집행관이 독자적으로 진행합니다.</li>
            <li><strong>강제력 사용 가능:</strong> 집행관은 민사집행법 제5조에 따라 잠긴 문 개방, 경찰 원조 요청 등 강제력을 사용할 수 있습니다.</li>
            <li><strong>집행 완료 통지:</strong> 집행 완료 후 채무자에게 집행 종료를 통지합니다.</li>
          </ul>
        </div>
        <h3>② 직접강제 — 부동산·선박 인도 (민사집행법 제258조)</h3>
        <p>부동산이나 선박을 인도할 것을 명한 판결이 있는 경우, 집행관이 채무자(점유자)를 부동산에서 퇴거시키고 채권자에게 인도합니다.</p>
        <div class="warn-box">
          <div class="warn-title">⚠️ 부동산 인도와 동산 인도의 차이</div>
          <p>부동산 인도(명도)는 <strong>채권자의 출석이 필요</strong>합니다(민집 제258조). 동산 인도(제257조)와 달리, 채권자가 직접 현장에 나와 부동산을 인도받아야 합니다.</p>
        </div>
        <div class="case-box">
          <div class="case-title">사례</div>
          <p>A가 B에게 집을 돌려달라는 명도 판결을 받았습니다. B가 이행하지 않으면 A는 집행관에게 명도집행을 신청할 수 있습니다. 집행관이 현장에 가서 B를 퇴거시키고, 현장에 출석한 A에게 집을 인도합니다.</p>
        </div>
        <h3>③ 대체집행 — 건물 철거·공작물 제거 (민사집행법 제260조)</h3>
        <p>채무자 대신 제3자가 채무를 이행하는 방식입니다. 건물 철거, 담장 제거 등 <strong>다른 사람이 대신할 수 있는 대체적 작위채무</strong>에 적용됩니다.</p>
        <div class="flow">
          <div class="flow-item"><div class="flow-num">①</div><div>수권결정 신청(제1심 법원)</div></div>
          <div class="flow-item"><div class="flow-num">②</div><div>채무자 심문(필수)</div></div>
          <div class="flow-item"><div class="flow-num">③</div><div>수권결정 발령</div></div>
          <div class="flow-item"><div class="flow-num">④</div><div>제3자가 대신 이행</div></div>
          <div class="flow-item"><div class="flow-num">⑤</div><div>비용을 채무자에게 청구</div></div>
        </div>
        <p>수권결정 신청 시 <strong>비용선지급결정</strong>을 함께 신청하면, 채무자가 미리 비용을 납부해야 합니다(민집 제260조 제2항). 수권결정에 대한 즉시항고는 집행을 정지시키지 않습니다(제260조 제3항).</p>
        <h3>④ 간접강제 (민사집행법 제261조)</h3>
        <p>채무자가 이행하지 않을 때마다 일정 금액(배상금)을 지급하도록 강제하는 방식입니다. 채무자의 의사가 필수적인 <strong>비대체적 작위채무</strong>(예술 공연, 특수 기술 서비스 등)나 <strong>부작위채무</strong>에 주로 적용됩니다.</p>
        <p>법원은 채무자가 일정 기간 내에 채무를 이행하지 아니하면 그 지연 기간에 따라 일정한 배상을 하도록 명할 수 있습니다. 이후에도 불이행하면 집행권원으로 삼아 배상금을 강제집행합니다.</p>
        <h3>⑤ 의사표시 의무의 집행 (민사집행법 제263조)</h3>
        <p>채무자가 특정 의사표시를 해야 할 의무(예: 소유권이전등기에 필요한 의사표시)를 이행하지 않을 때, 판결이 확정되면 채무자가 그 <strong>의사표시를 한 것으로 간주</strong>됩니다(민집 제263조).</p>
        <div class="case-box">
          <div class="case-title">사례</div>
          <p>매도인 A가 매수인 B에게 소유권이전등기를 해줄 것을 명하는 판결이 확정되었습니다. A가 이행하지 않더라도 판결 확정 즉시 A가 의사표시를 한 것으로 간주되어, B는 단독으로 소유권이전등기를 신청할 수 있습니다. 별도의 집행 절차가 필요 없습니다.</p>
        </div>`
      },
      {
        heading: '자주하는 질문',
        content: `<div class="qna-item">
          <div class="qna-q">직접강제, 대체집행, 간접강제 중 어느 것이 적합한지 어떻게 판단하나요?</div>
          <div class="qna-a">
            <p>판결 내용이 <strong>물건 인도</strong>라면 직접강제(257조·258조), <strong>건물 철거·공작물 제거</strong>라면 대체집행(260조), <strong>다른 사람이 대신할 수 없는 행위</strong>라면 간접강제(261조)를 선택합니다. 의사표시 의무는 판결 확정 시 자동으로 처리됩니다(263조). 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">대체집행 수권결정 신청에 채무자 심문이 꼭 필요한가요?</div>
          <div class="qna-a">
            <p>네, 필수입니다. 민사집행법 제262조는 법원이 수권결정을 할 때 반드시 채무자를 심문하여야 한다고 규정합니다. 채무자가 출석하지 않아도 심문 절차는 진행되고 기록으로 남습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">부동산 명도집행 시 채권자가 반드시 현장에 가야 하나요?</div>
          <div class="qna-a">
            <p>네, 민사집행법 제258조에 따라 부동산 인도(명도)집행에서는 채권자의 출석이 필요합니다. 집행관이 채무자를 퇴거시킨 후 현장에 있는 채권자에게 부동산을 인도합니다. 동산 인도(257조)와 달리 채권자 없이는 집행이 완료되지 않습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-q">소유권이전등기 판결이 확정되면 바로 등기를 신청할 수 있나요?</div>
          <div class="qna-a">
            <p>네. 민사집행법 제263조에 따라 의사표시를 명하는 판결이 확정되면 채무자가 그 의사표시를 한 것으로 간주됩니다. 따라서 채권자는 확정판결문을 가지고 단독으로 소유권이전등기를 신청할 수 있습니다. 별도의 집행 절차가 필요하지 않습니다.</p>
            <p class="disclaimer">위 내용은 일반적인 경우를 기준으로 한 것이며, 개별 사안에 따라 결론이 달라질 수 있습니다. 구체적인 상황은 법무사와 상담하시기 바랍니다.</p>
          </div>
        </div>`
      },
      {
        heading: '판례',
        content: `<div class="ruling-box">
          <div class="ruling-header">대체집행의 대체성 판단</div>
          <p>대법원은 "대체집행은 채무자가 아닌 제3자도 채무의 내용을 실현할 수 있는 대체성이 있는 채무에만 허용된다"고 판시하였습니다. 사죄광고, 예술 공연 등 채무자의 개성이 불가결한 채무는 대체성이 없어 간접강제만 가능합니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">수권결정에 대한 즉시항고</div>
          <p>민사집행법 제260조 제3항에 따라 수권결정에 대한 즉시항고는 집행을 정지시키지 않습니다. 채무자가 즉시항고를 해도 채권자는 대체집행을 계속 진행할 수 있습니다.</p>
        </div>
        <div class="ruling-box">
          <div class="ruling-header">의사표시 판결의 효력 발생 시점</div>
          <p>대법원은 의사표시를 명하는 판결이 확정되면 그때 채무자가 의사표시를 한 것으로 간주되므로, 채권자는 판결 확정 후 즉시 단독으로 등기신청 등을 할 수 있다고 판시하였습니다.</p>
        </div>`
      },
      {
        heading: '주의사항',
        content: `<div class="warn-box">
          <div class="warn-title">⚠️ 판결 내용에 따라 집행 방법이 달라집니다</div>
          <p>판결 주문에서 "인도하라"면 직접강제, "철거하라"면 대체집행이 적용됩니다. 잘못된 방법으로 신청하면 기각됩니다. 법무사와 상담하여 올바른 방법을 선택하세요.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 대체집행 수권결정 전 채무자 심문 필수</div>
          <p>민사집행법 제262조에 따라 수권결정 전 채무자 심문이 반드시 필요합니다. 이 절차를 거치지 않은 수권결정은 위법합니다.</p>
        </div>
        <div class="warn-box">
          <div class="warn-title">⚠️ 부동산 명도집행 시 반드시 현장 출석</div>
          <p>부동산 인도집행(민집 제258조)에서 채권자가 현장에 출석하지 않으면 집행이 완료되지 않습니다. 집행기일 전에 집행관과 일정을 조율하세요.</p>
        </div>`
      },
      {
        heading: '다음에 확인할 사항',
        content: `<div class="next-links">
          <a href="#" class="next-link" data-target="ef-80">
            <span class="nl-title">대체집행 절차 상세</span>
            <span class="nl-desc">수권결정 신청부터 철거 완료까지 단계별 안내</span>
          </a>
          <a href="#" class="next-link" data-target="ef-73">
            <span class="nl-title">부동산 명도집행 절차</span>
            <span class="nl-desc">명도집행 신청 방법과 필요 서류</span>
          </a>
          <a href="#" class="next-link" data-target="ef-72">
            <span class="nl-title">유체동산 인도청구권 집행</span>
            <span class="nl-desc">물건을 받을 권리도 집행 대상</span>
          </a>
        </div>`
      }
    ],
    laws: [
      { name: '민사집행법 제257조', desc: '동산 인도 직접강제(집행관 집행, 채권자 출석 불필요)' },
      { name: '민사집행법 제258조', desc: '부동산·선박 인도 직접강제(채권자 출석 필요)' },
      { name: '민사집행법 제260조', desc: '대체집행 수권결정(비용선지급, 즉시항고 비효력)' },
      { name: '민사집행법 제261조', desc: '간접강제 — 배상금 지급 명령' },
      { name: '민사집행법 제262조', desc: '수권결정 전 채무자 필수 심문' },
      { name: '민사집행법 제263조', desc: '의사표시 의무 집행 — 판결 확정 시 의사표시 간주' },
    ],
    forms: []
  }"""

# ─── 교체 실행 ────────────────────────────────────────────────────────────────
for entry_id, new_text in [
    ('ef-48', EF48),
    ('ef-58', EF58),
    ('ef-63', EF63),
    ('ef-64', EF64),
    ('ef-72', EF72),
    ('ef-79', EF79),
]:
    src = replace_entry(src, entry_id, new_text)

with open(js_file, 'w', encoding='utf-8') as f:
    f.write(src)

print("\n✅ Done — enforcement_topics_data.js updated.")
print(f"File size: {len(src):,} bytes")
