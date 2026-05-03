#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

BASE = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\교재스캔(ocr)\민사집행\콘텐츠4 채권 등 집행"

def extract_sections(html):
    sections = []
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL)
    body = body_match.group(1) if body_match else html
    h2_pattern = re.compile(r'<h2[^>]*>(.*?)</h2>', re.DOTALL)
    parts = h2_pattern.split(body)
    for i in range(1, len(parts), 2):
        raw_heading = parts[i]
        heading = re.sub(r'<[^>]+>', '', raw_heading).strip()
        heading = heading.replace('&amp;', '&')
        content = parts[i + 1] if i + 1 < len(parts) else ''
        for stop_pattern in [
            r'<div[^>]+class=["\'][^"\']*cta-box[^"\']*["\']',
            r'<div[^>]+class=["\'][^"\']*disclaimer[^"\']*["\']',
        ]:
            m = re.search(stop_pattern, content, re.DOTALL)
            if m:
                content = content[:m.start()]
        content = content.strip()
        label = heading + (' [EMPTY]' if not content else f' ({len(content)} chars)')
        sections.append(label)
    return sections

import os
fnames = [
    '채집금전_08_전부명령.html',
    '채집재산권_03_주식압류.html',
    '채집재산권_04_전세압류.html',
    '채집금전_06_압류신청.html',
]
for fname in fnames:
    path = os.path.join(BASE, fname)
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    sections = extract_sections(html)
    print(f'\n{fname}:')
    for s in sections:
        print(f'  {s}')
