import sys
import re
sys.stdout.reconfigure(encoding='utf-8')

JS_FILE = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\homepage(claudeCode)\js\enforcement_topics_data.js"

# ── 법령 설명 데이터 ──────────────────────────────────────────────────────────
LAW = {
    '민사집행법 제4조': ('유체동산 강제집행 신청(집행 위임)은 반드시 서면으로 해야 합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=000400'),
    '민사집행법 제5조': ('집행관은 강제집행을 위해 잠긴 문을 개방하거나 경찰 원조를 요청할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=000500'),
    '민사집행법 제6조': ('집행관은 일몰 후부터 일출 전 및 일요일·공휴일에는 채무자 주거에 원칙적으로 들어갈 수 없습니다(채무자 동의 또는 법원 허가 필요).', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=000600'),
    '민사집행법 제12조': ('집행관은 집행 개시 전 집행에 필요한 수수료 및 비용을 예납 받을 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001200'),
    '민사집행법 제16조': ('집행절차상 법에 어긋나는 처분에 대해 이해관계인은 집행법원에 이의를 신청할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=001600'),
    '민사집행법 제28조': ('강제집행 개시에는 집행문이 부여된 집행권원 정본이 필요합니다. 판결은 판결법원, 공정증서는 공증인이 집행문을 부여합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=002800'),
    '민사집행법 제44조': ('집행권원에 표시된 청구권이 변제 등으로 소멸한 경우 채무자는 청구이의의 소로 집행력 배제를 구할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004400'),
    '민사집행법 제48조': ('강제집행 목적물에 소유권 등을 주장하는 제3자는 채권자에 대해 이의의 소를 제기하여 집행 배제를 청구할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=004800'),
    '민사집행법 제61조': ('집행권원 있는 채권자는 법원에 채무자의 재산명시 명령을 신청할 수 있습니다. 채무자는 재산목록을 제출하고 선서해야 합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=006100'),
    '민사집행법 제74조': ('법원은 채권자 신청에 의하여 공공기관에 채무자 재산을 조회할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=007400'),
    '민사집행법 제188조': ('유체동산 강제집행은 집행관이 압류표를 부착하여 실시합니다. 초과압류금지·무잉여압류금지 원칙이 적용됩니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=018800'),
    '민사집행법 제189조': ('유체동산에는 일반 동산·등기 불능 부동산 정착물·수확 임박 과실·배서 가능 유가증권이 포함됩니다. 압류물은 원칙적으로 채무자에게 보관시킵니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=018900'),
    '민사집행법 제190조': ('채무자와 배우자의 공유 유체동산으로 채무자가 점유하거나 공동 점유하는 것은 채무자에 대한 집행권원만으로도 압류할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=019000'),
    '민사집행법 제194조': ('채무자 이외의 자가 점유하는 유체동산을 압류하려면 그 점유자의 동의 또는 법원 허가가 필요합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=019400'),
    '민사집행법 제195조': ('생활필수품·식료품·생계비(185만 원)·농어업 도구·직업상 필수 도구 등 16가지 물건은 압류가 금지됩니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=019500'),
    '민사집행법 제196조': ('법원은 채무자 또는 채권자 신청에 의해 압류금지 물건의 범위를 확장하거나 축소할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=019600'),
    '민사집행법 제199조': ('집행관은 매각기일을 정하여 호가경매 또는 입찰 방법으로 압류물을 매각합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=019900'),
    '민사집행법 제201조': ('채권자가 1인이고 배당요구가 없으면 집행관은 매각대금에서 집행비용을 공제한 나머지를 채권자에게 교부합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=020100'),
    '민사집행법 제209조': ('집행관은 호가경매 방식으로 압류물을 현금화합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=020900'),
    '민사집행법 제210조': ('여러 물건의 일괄매각이 개별매각보다 유리한 경우 집행관은 일괄하여 매각할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=021000'),
    '민사집행법 제214조': ('특수한 물건의 현금화에 적합한 다른 방법이 있으면 법원이 특별현금화 방법을 명할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=021400'),
    '민사집행법 제215조': ('이미 압류된 유체동산에 다른 채권자가 새로 압류를 신청하면 이중압류가 되며, 선행 압류에 대한 배당요구 성격을 가집니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=021500'),
    '민사집행법 제217조': ('집행력 있는 정본을 가진 채권자 등은 배당요구 종기까지 배당요구를 하여 매각대금 배당에 참여할 수 있습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=021700'),
    '민사집행법 제220조': ('배당요구 종기까지 배당요구를 하지 않은 채권자는 해당 집행에서 배당을 받을 수 없습니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=022000'),
    '민사집행법 제222조': ('채권자 간 배당협의가 이루어지지 않으면 집행관은 매각대금을 공탁하고 법원에 사유신고를 합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=022200'),
    '민사집행법 제252조': ('배당협의 불성립으로 공탁·사유신고가 이루어진 경우 집행법원은 배당절차를 개시합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=025200'),
    '민사집행법 제256조': ('배당기일에 채권자는 다른 채권자의 채권·순위에 이의를 제기할 수 있습니다. 이의 후 1주일 이내에 배당이의의 소를 제기해야 합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265351&joNo=025600'),
    '민집규칙 제132조의2': ('집행관은 매각기일로부터 역산하여 배당요구 종기를 정하고 이해관계인에게 고지합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=117387&joNo=013200'),
    '민집규칙 제144조': ('집행관이 정하는 최저매각가격에 관한 규정입니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=117387&joNo=014400'),
    '민집규칙 제145조': ('유체동산의 매각은 원칙적으로 호가경매 방식으로 진행됩니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=117387&joNo=014500'),
    '민집규칙 제155조': ('여러 채권자에게 채권액 이상 배당이 가능한 경우 각 채권자에게 채권액을 교부하고 나머지를 채무자에게 반환합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=117387&joNo=015500'),
    '민집규칙 제156조': ('집행관의 공탁 및 사유신고 절차에 관한 규정입니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=117387&joNo=015600'),
    '형법 제327조': ('강제집행 면탈 목적으로 재산을 은닉·손상·허위양도 등을 하면 2년 이하 징역 또는 500만 원 이하 벌금에 처해집니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=188383&joNo=032700'),
    '민사소송법 제165조': ('판결로 확정된 채권은 단기소멸시효 대상도 10년의 소멸시효가 적용됩니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=252393&joNo=016500'),
    '민법 제168조 제2호': ('강제집행(집행 위임)은 소멸시효 중단 사유에 해당합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265307&joNo=016800'),
    '민사집행법 시행령 제2조': ('생계비 압류금지 현금 금액은 185만 원으로 정합니다.', 'https://www.law.go.kr/lsInfoP.do?docType=JO&lsiSeq=265352&joNo=000200'),
}

CASE = {
    '2001다52773': ('집행관은 압류금지 물건 여부를 직권으로 조사해야 합니다. 위반한 압류는 당연무효 아닌 이의신청으로 취소 가능합니다. 매각 후에는 매수인이 유효하게 소유권을 취득합니다(대판 2003. 9. 26.).', 'https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=2001%EB%8B%A452773'),
    '97다3750': ('주물 자체의 효용과 직접 관계없는 물건은 종물이 아닙니다. 부동산과 독립하여 거래 가능하면 유체동산으로 별도 압류가 가능합니다(대판 1997. 10. 10.).', 'https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=97%EB%8B%A43750'),
    '92다43142': ('건물 종물에 해당하는 설비는 건물 압류 후 독립하여 유체동산 압류 대상이 되지 않습니다(대판 1993. 8. 13.).', 'https://www.law.go.kr/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&eventGubun=060101&query=92%EB%8B%A443142'),
}

# ── 각 섹션별 태그 정의 ──────────────────────────────────────────────────────
# (entry_id, heading): ([law_keys], [case_keys])
SECTION_REFS = {
    ('ef-48', '핵심정리'):           (['민사집행법 제188조', '민사집행법 제28조'], []),
    ('ef-48', '상세설명'):           (['민사집행법 제28조', '민사집행법 제189조', '민사집행법 제190조', '민사집행법 제188조', '민사집행법 제5조', '민사집행법 제194조', '민사집행법 제195조', '민사집행법 제209조', '민사집행법 제210조', '민사집행법 제214조'], []),
    ('ef-48', '자주 하는 질문'):     (['민사집행법 제28조', '민사집행법 제48조', '민사집행법 제5조', '형법 제327조'], []),
    ('ef-48', '관련 판례'):          ([], ['2001다52773', '97다3750']),
    ('ef-48', '주의사항'):           (['민사집행법 제195조', '민사집행법 제190조'], []),

    ('ef-49', '핵심정리'):           (['민사집행법 제195조', '민사집행법 제196조'], []),
    ('ef-49', '상세설명'):           (['민사집행법 제195조', '민사집행법 시행령 제2조', '민사집행법 제189조', '민사집행법 제190조', '민사집행법 제196조'], []),
    ('ef-49', '자주 하는 질문'):     (['민사집행법 제190조', '민사집행법 제189조', '민사집행법 제16조'], []),
    ('ef-49', '관련 판례'):          (['민사집행법 제16조'], ['92다43142', '2001다52773']),

    ('ef-50', '핵심정리'):           (['민사집행법 제4조'], []),
    ('ef-50', '단계별 상세 절차'):   (['민사집행법 제28조', '민사집행법 제4조', '민사집행법 제12조', '민사집행법 제188조', '민사집행법 제5조', '민사집행법 제199조', '민사집행법 제201조', '민사집행법 제222조'], []),
    ('ef-50', '자주 하는 질문'):     (['민사소송법 제165조', '민법 제168조 제2호'], []),
    ('ef-50', '주의사항'):           (['민사집행법 제61조', '민사집행법 제74조'], []),

    ('ef-51', '핵심정리'):           (['형법 제327조'], []),
    ('ef-51', '상세설명'):           (['민사집행법 제195조', '민사집행법 제16조', '민사집행법 제196조', '민사집행법 제44조', '민사집행법 제48조'], ['2001다52773']),
    ('ef-51', '자주 하는 질문'):     (['민사집행법 제5조', '민사집행법 제6조', '민사집행법 제44조', '민사집행법 제48조', '형법 제327조'], []),
    ('ef-51', '관련 판례'):          (['민사집행법 제16조'], ['2001다52773']),
    ('ef-51', '주의사항'):           (['형법 제327조', '민사집행법 제6조'], []),

    ('ef-52', '핵심정리'):           (['민사집행법 제201조', '민집규칙 제155조', '민사집행법 제222조'], []),
    ('ef-52', '상세설명'):           (['민집규칙 제145조', '민사집행법 제214조', '민사집행법 제217조', '민사집행법 제215조', '민사집행법 제222조', '민사집행법 제252조'], []),
    ('ef-52', '자주 하는 질문'):     (['민집규칙 제132조의2', '민사집행법 제220조', '민사집행법 제256조', '민사집행법 제214조'], []),
    ('ef-52', '관련 판례 및 실무'):   (['민사집행법 제222조', '민사집행법 제252조', '민사집행법 제16조'], ['2001다52773']),
    ('ef-52', '주의사항'):           (['민사집행법 제256조'], []),
}

# ── 헬퍼 함수 ────────────────────────────────────────────────────────────────
def build_ref_block(law_keys, case_keys):
    tags = []
    for k in law_keys:
        if k in LAW:
            desc, url = LAW[k]
            tags.append(
                f'<button class="law-ref-tag" data-ref-type="law" '
                f'data-ref-title="{k}" data-ref-desc="{desc}" data-ref-url="{url}">{k}</button>'
            )
    for k in case_keys:
        if k in CASE:
            desc, url = CASE[k]
            tags.append(
                f'<button class="case-ref-tag" data-ref-type="case" '
                f'data-ref-title="{k}" data-ref-desc="{desc}" data-ref-url="{url}">{k}</button>'
            )
    if not tags:
        return ''
    inner = '\n  '.join(tags)
    return f'<div class="section-ref-tags">\n  {inner}\n</div>'


def strip_inline_refs(content):
    """괄호 안의 인라인 법령·판례 참조를 제거합니다."""
    patterns = [
        # (민사집행법 제XXX조 제X항 제X호) 형식
        r'\s*\(민사집행법\s+제\d+조(?:의\d+)?(?:\s+제\d+항(?:\s+제\d+호)?)?\)',
        # (민사집행법 시행령 제X조)
        r'\s*\(민사집행법\s+시행령\s+제\d+조(?:[^)]{0,20})?\)',
        # (민집 제XXX조...) 축약형
        r'\s*\(민집\s+제\d+조(?:[^)]{0,30})?\)',
        # (민집규칙 제XXX조...)
        r'\s*\(민집규칙\s+제\d+조(?:[^)]{0,30})?\)',
        # (형법 제XXX조 제X항)
        r'\s*\(형법\s+제\d+조(?:\s+제\d+항)?\)',
        # (민법 제XXX조 제X항)
        r'\s*\(민법\s+제\d+조(?:\s+제\d+항(?:\s+제\d+호)?)?\)',
        # (민사소송법 제XXX조 제X항)
        r'\s*\(민사소송법\s+제\d+조(?:\s+제\d+항)?\)',
        # (대판 XXXX. X. XX. XXXX다XXXXX) 판례 인라인
        r'\s*\(대판\s+\d{4}\.\s*\d+\.\s*\d+\.\s+\d+다\d+\)',
    ]
    for pat in patterns:
        content = re.sub(pat, '', content)
    return content


def find_section_content_range(text, heading, start_pos=0):
    """섹션 heading 다음의 content 백틱 리터럴 범위를 반환합니다.
    Returns: (content_start, content_end, content_str) or (None, None, None)
    """
    h_pattern = re.compile(r"heading:\s*'" + re.escape(heading) + r"'")
    h_match = h_pattern.search(text, start_pos)
    if not h_match:
        return None, None, None

    c_match = re.search(r'content:\s*`', text[h_match.end():h_match.end() + 300])
    if not c_match:
        return None, None, None

    content_start = h_match.end() + c_match.end()  # 여는 백틱 바로 다음

    # 닫는 백틱 찾기 (이스케이프 처리)
    i = content_start
    while i < len(text):
        if text[i] == '\\':
            i += 2
            continue
        if text[i] == '`':
            break
        i += 1

    if i >= len(text):
        return None, None, None

    return content_start, i, text[content_start:i]


def find_entry_range(text, entry_id):
    """entry_id 에 해당하는 {…} 블록의 범위를 반환합니다."""
    marker = f"    id: '{entry_id}',"
    id_pos = text.find(marker)
    if id_pos == -1:
        return None, None
    start = text.rfind('\n  {', 0, id_pos) + 1
    depth, i = 0, start
    while i < len(text):
        c = text[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return start, i + 1
        i += 1
    return None, None


def clear_laws_array(entry_js):
    """laws: [...] → laws: []"""
    return re.sub(r'laws:\s*\[[^\]]*\]', 'laws: []', entry_js, flags=re.DOTALL)


def process_entry(text, entry_id):
    """한 entry 를 처리합니다: 인라인 refs 제거 + 섹션 끝 태그 블록 추가 + laws 비우기"""
    e_start, e_end = find_entry_range(text, entry_id)
    if e_start is None:
        print(f"  ERROR: {entry_id} entry not found")
        return text

    entry_js = text[e_start:e_end]

    # 각 섹션 처리
    for (eid, heading), (law_keys, case_keys) in SECTION_REFS.items():
        if eid != entry_id:
            continue

        cs, ce, content = find_section_content_range(entry_js, heading)
        if cs is None:
            print(f"  WARN: {entry_id} / '{heading}' section not found")
            continue

        # 인라인 참조 제거
        new_content = strip_inline_refs(content)

        # 섹션 끝 태그 블록 추가
        ref_html = build_ref_block(law_keys, case_keys)
        if ref_html:
            new_content = new_content.rstrip() + '\n' + ref_html

        entry_js = entry_js[:cs] + new_content + entry_js[ce:]
        print(f"  {entry_id} / '{heading}': refs stripped, {len(law_keys)+len(case_keys)} tags added")

    # laws: [] 비우기
    entry_js = clear_laws_array(entry_js)

    return text[:e_start] + entry_js + text[e_end:]


# ── 메인 ─────────────────────────────────────────────────────────────────────
with open(JS_FILE, 'r', encoding='utf-8') as f:
    src = f.read()

for entry_id in ['ef-48', 'ef-49', 'ef-50', 'ef-51', 'ef-52']:
    print(f"\nProcessing {entry_id}…")
    src = process_entry(src, entry_id)

with open(JS_FILE, 'w', encoding='utf-8') as f:
    f.write(src)

print("\nDone. Run: node --check js/enforcement_topics_data.js")
