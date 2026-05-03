#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ef-60, ef-67, ef-68의 '다음에 확인할 사항' 섹션을 추가하는 스크립트
이 파일들은 h4를 사용한 <section id="next">로 구현되어 있어 기존 스크립트에서 누락됨
"""

import re
import os

BASE_DIR = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\교재스캔(ocr)\민사집행\콘텐츠4 채권 등 집행"
JS_FILE = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\homepage(claudeCode)\js\enforcement_topics_data.js"

TARGETS = [
    ('채집금전_08_전부명령.html', 'ef-60'),
    ('채집재산권_03_주식압류.html', 'ef-67'),
    ('채집재산권_04_전세압류.html', 'ef-68'),
]


def extract_next_section(html):
    """<section id="next"> 또는 next-section div에서 '다음에 확인할 사항' 내용 추출"""
    body_m = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL)
    body = body_m.group(1) if body_m else html

    # <section id="next">...</section> 찾기
    next_m = re.search(r'<section[^>]+id=["\']next["\'][^>]*>(.*?)</section>', body, re.DOTALL)
    if next_m:
        content = next_m.group(1).strip()
        return content

    # 다른 패턴: <div class="next-section">...</div>
    next_m = re.search(r'<div[^>]+class=["\'][^"\']*next-section[^"\']*["\']>(.*?)</div>\s*</div>', body, re.DOTALL)
    if next_m:
        return next_m.group(1).strip()

    return None


def add_section_to_js(js_content, ef_id, section_heading, section_content):
    """JS 파일에서 특정 ef_id의 sections 배열 끝에 새 섹션을 추가"""
    escaped_content = section_content.replace('`', '\\`')

    new_section_js = (
        f"      {{\n"
        f"        heading: '{section_heading}',\n"
        f"        content: `{escaped_content}`\n"
        f"      }}"
    )

    # ef_id 항목의 sections 배열 끝 ']' 찾기 (laws: 직전)
    entry_m = re.search(r'id:\s*[\'"]' + re.escape(ef_id) + r'[\'"]', js_content)
    if not entry_m:
        print(f"  [경고] {ef_id} 항목을 찾을 수 없습니다.")
        return js_content

    search_from = entry_m.start()
    # laws: 위치 찾기
    laws_m = re.search(r'\n\s*laws:', js_content[search_from:])
    if not laws_m:
        print(f"  [경고] {ef_id} laws: 를 찾을 수 없습니다.")
        return js_content

    laws_pos = search_from + laws_m.start()

    # laws: 직전에서 ']' 찾기 (sections 배열 닫음)
    # laws: 직전 영역: ...마지막 섹션 내용\n    ],\n    laws:
    pre_laws = js_content[:laws_pos]
    close_bracket_pos = pre_laws.rfind(']')
    if close_bracket_pos == -1:
        print(f"  [경고] {ef_id} sections 배열 닫힘을 찾을 수 없습니다.")
        return js_content

    # ']' 앞에 새 섹션 삽입 (마지막 섹션 끝 ',' 처리)
    # 현재: ...last_section\n    ]
    # 변경: ...last_section,\n    new_section\n    ]
    insert_pos = close_bracket_pos

    # 삽입 위치 앞의 내용 확인 (콤마 필요 여부)
    pre_content = pre_laws[:insert_pos].rstrip()
    if pre_content.endswith('}'):
        # 마지막 섹션 뒤에 콤마 추가 후 새 섹션 삽입
        separator = ',\n'
    else:
        separator = '\n'

    new_js = (
        js_content[:insert_pos] +
        separator + new_section_js + '\n    ' +
        js_content[insert_pos:]
    )
    return new_js


def main():
    with open(JS_FILE, 'r', encoding='utf-8') as f:
        js_content = f.read()

    print("ef-60, ef-67, ef-68 '다음에 확인할 사항' 섹션 추가")

    for html_file, ef_id in TARGETS:
        html_path = os.path.join(BASE_DIR, html_file)
        print(f"\n[{ef_id}] {html_file}")

        with open(html_path, 'r', encoding='utf-8') as f:
            html = f.read()

        next_content = extract_next_section(html)
        if not next_content:
            print("  [경고] next 섹션을 찾을 수 없습니다.")
            continue

        print(f"  next 섹션 내용: {len(next_content)}자")

        js_content = add_section_to_js(js_content, ef_id, '다음에 확인할 사항', next_content)
        print("  [OK] 섹션 추가 완료")

    with open(JS_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"\nJS 파일 저장 완료 ({len(js_content):,} bytes)")


if __name__ == '__main__':
    main()
