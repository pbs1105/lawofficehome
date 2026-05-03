#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
채권 등 집행 콘텐츠 업데이트 스크립트
HTML 파일에서 섹션을 추출하여 enforcement_topics_data.js의 ef-53~ef-72 항목을 교체합니다.
"""

import re
import os
import shutil

BASE_DIR = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\교재스캔(ocr)\민사집행\콘텐츠4 채권 등 집행"
JS_FILE = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\homepage(claudeCode)\js\enforcement_topics_data.js"
BACKUP_FILE = JS_FILE + '.backup'

# HTML파일 → ef-ID 매핑
FILE_MAP = [
    ('채집금전_01_개관.html',       'ef-53', '채권집행 처음부터 끝까지 — 강제집행 절차 전체 흐름'),
    ('채집금전_02_집행권원.html',    'ef-54', '집행권원이란 — 어떤 서류가 있어야 강제집행을 할 수 있나'),
    ('채집금전_03_재산명시.html',    'ef-55', '재산명시·재산조회 — 상대방 재산을 찾는 법원 제도'),
    ('채집금전_04_예금압류.html',    'ef-56', '예금·금융채권 압류 — 통장과 금융계좌를 압류하는 방법'),
    ('채집금전_05_급여압류.html',    'ef-57', '급여 압류와 압류금지채권 — 월급을 얼마까지 압류할 수 있나'),
    ('채집금전_06_압류신청.html',    'ef-58', '압류명령 신청 — 채권압류명령 신청 절차와 서류'),
    ('채집금전_07_추심명령.html',    'ef-59', '추심명령 — 압류 후 제3채무자로부터 직접 받는 방법'),
    ('채집금전_08_전부명령.html',    'ef-60', '전부명령 — 압류 채권을 내 것으로 이전받는 방법'),
    ('채집금전_09_집행경합.html',    'ef-61', '집행경합 — 여러 채권자가 같은 채권을 압류하면 어떻게 되나'),
    ('채집금전_10_배당요구.html',    'ef-62', '배당요구 — 다른 사람이 압류했을 때 나도 배당받는 방법'),
    ('채집금전_11_집행공탁.html',    'ef-63', '집행공탁 — 제3채무자가 돈을 공탁하면 어떻게 되나'),
    ('채집금전_12_배당.html',        'ef-64', '배당 절차 — 배당기일·배당표·배당이의 완전 정리'),
    ('채집재산권_01_개관.html',      'ef-65', '그 밖의 재산권 집행 개관 — 압류 가능한 재산의 종류'),
    ('채집재산권_02_회원권.html',    'ef-66', '골프·콘도 회원권 압류 — 회원권도 압류할 수 있습니다'),
    ('채집재산권_03_주식압류.html',  'ef-67', '주식·사채 압류 — 상대방 주식을 압류하는 방법'),
    ('채집재산권_04_전세압류.html',  'ef-68', '전세보증금·임차보증금 압류 — 전세 사는 상대방의 재산도 압류 가능'),
    ('채집재산권_05_지재권.html',    'ef-69', '특허권·저작권 등 지식재산권 압류 — 지식재산권 강제집행 절차'),
    ('채집재산권_06_저당채권.html',  'ef-70', '저당권이 있는 채권의 압류 — 물적담보까지 함께 압류하는 방법'),
    ('채집재산권_07_신탁재산권.html','ef-71', '신탁재산권 압류 — 신탁수익권과 신탁종료 후 권리의 집행'),
    ('채집재산권_08_인도청구권.html','ef-72', '유체동산 인도청구권 집행 — 물건을 받을 권리도 집행 대상'),
]


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def extract_sections(html):
    """HTML에서 h2 섹션 목록을 추출합니다."""
    sections = []

    # body 내용 추출
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL)
    if not body_match:
        body = html
    else:
        body = body_match.group(1)

    # h2 태그로 분리
    h2_pattern = re.compile(r'<h2[^>]*>(.*?)</h2>', re.DOTALL)
    parts = h2_pattern.split(body)

    for i in range(1, len(parts), 2):
        raw_heading = parts[i]
        # h2 내부의 span 태그 텍스트 제거 (예: <span class="tag">CHECK</span>)
        heading = re.sub(r'<[^>]+>', '', raw_heading).strip()
        # Q&A 특수문자 복원
        heading = heading.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&nbsp;', ' ')

        content = parts[i + 1] if i + 1 < len(parts) else ''

        # CTA 박스, 면책문구 제거 (섹션 끝)
        for stop_pattern in [
            r'<div[^>]+class=["\'][^"\']*cta-box[^"\']*["\']',
            r'<div[^>]+class=["\'][^"\']*disclaimer[^"\']*["\']',
        ]:
            m = re.search(stop_pattern, content, re.DOTALL)
            if m:
                content = content[:m.start()]

        content = content.strip()

        if heading and content:
            sections.append({'heading': heading, 'content': content})

    return sections


def escape_for_js_template(s):
    """JS 템플릿 리터럴에서 사용할 수 있도록 이스케이프합니다."""
    # 백틱 이스케이프 (${...} 패턴은 법령 링크에 없으므로 백틱만 처리)
    return s.replace('`', '\\`')


def build_sections_js(sections):
    """섹션 목록을 JS 배열 문자열로 변환합니다."""
    parts = []
    for sec in sections:
        heading = sec['heading'].replace("'", "\\'")
        content = escape_for_js_template(sec['content'])
        parts.append(
            "      {\n"
            f"        heading: '{heading}',\n"
            f"        content: `{content}`\n"
            "      }"
        )
    return ',\n'.join(parts)


def replace_sections_in_js(js_content, ef_id, new_sections_js):
    """
    JS 파일에서 특정 ef_id 항목의 sections 배열을 교체합니다.
    """
    # 항목 찾기: id: 'ef-XX', ... sections: [ ... ], laws:
    entry_start = re.search(
        r'\{\s*\n\s*id:\s*[\'"]' + re.escape(ef_id) + r'[\'"]',
        js_content
    )
    if not entry_start:
        print(f"  [경고] {ef_id} 항목을 찾을 수 없습니다.")
        return js_content

    # 해당 항목에서 sections: [ ... ] 패턴 찾기 (balanced bracket)
    search_start = entry_start.start()

    # "sections: [" 위치 찾기
    sec_open = js_content.find('sections: [', search_start)
    if sec_open == -1:
        print(f"  [경고] {ef_id} 항목에서 sections를 찾을 수 없습니다.")
        return js_content

    # sections 배열의 닫는 ']' 위치를 찾음 (중첩 대괄호 고려)
    bracket_start = js_content.index('[', sec_open)
    depth = 0
    in_string = False
    string_char = None
    i = bracket_start
    while i < len(js_content):
        ch = js_content[i]
        if in_string:
            if ch == '\\':
                i += 2
                continue
            if ch == string_char:
                in_string = False
        else:
            if ch in ('"', "'", '`'):
                in_string = True
                string_char = ch
            elif ch == '[':
                depth += 1
            elif ch == ']':
                depth -= 1
                if depth == 0:
                    bracket_end = i
                    break
        i += 1
    else:
        print(f"  [경고] {ef_id} sections 배열 끝을 찾을 수 없습니다.")
        return js_content

    # 기존 sections 배열 교체
    old_sections = js_content[bracket_start:bracket_end + 1]
    new_sections = '[\n' + new_sections_js + '\n    ]'

    js_content = js_content[:bracket_start] + new_sections + js_content[bracket_end + 1:]
    return js_content


def main():
    print("=" * 60)
    print("채권 등 집행 콘텐츠 업데이트 시작")
    print("=" * 60)

    # 백업
    if not os.path.exists(BACKUP_FILE):
        shutil.copy2(JS_FILE, BACKUP_FILE)
        print(f"백업 생성: {BACKUP_FILE}")
    else:
        print(f"기존 백업 유지: {BACKUP_FILE}")

    js_content = read_file(JS_FILE)
    print(f"JS 파일 읽기 완료 ({len(js_content):,} 바이트)")
    print()

    success_count = 0
    fail_count = 0

    for html_file, ef_id, title in FILE_MAP:
        html_path = os.path.join(BASE_DIR, html_file)
        print(f"[{ef_id}] {html_file}")

        if not os.path.exists(html_path):
            print(f"  [오류] 파일을 찾을 수 없음: {html_path}")
            fail_count += 1
            continue

        html = read_file(html_path)
        sections = extract_sections(html)

        if not sections:
            print(f"  [경고] 섹션을 찾을 수 없음")
            fail_count += 1
            continue

        headings = [s['heading'] for s in sections]
        print(f"  섹션 {len(sections)}개: {headings}")

        # law-tag/case-tag 수 확인
        full_content = ''.join(s['content'] for s in sections)
        law_count = full_content.count('class="law-tag"')
        case_count = full_content.count('class="case-tag"')
        print(f"  law-tag: {law_count}개, case-tag: {case_count}개")

        new_sections_js = build_sections_js(sections)
        js_content = replace_sections_in_js(js_content, ef_id, new_sections_js)
        success_count += 1
        print(f"  [OK] 완료")

    print()
    print("=" * 60)
    print(f"처리 결과: 성공 {success_count}개, 실패 {fail_count}개")

    # 저장
    with open(JS_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"JS 파일 저장 완료 ({len(js_content):,} 바이트)")
    print("=" * 60)


if __name__ == '__main__':
    main()
