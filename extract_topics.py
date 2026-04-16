import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

base = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\교재스캔(ocr)\외국인 재외국민 부동상등기실무\콘텐츠 외국인등기"
output_file = r"C:\Users\pbaes\OneDrive\바탕 화면\LOAS\homepage(claudeCode)\js\foreign_topics_data.js"

files = [
    "외등_01_법적지위구분.html",
    "외등_02_외국인취득.html",
    "외등_03_토지취득허가.html",
    "외등_04_취득신고.html",
    "외등_05_등록번호.html",
    "외등_06_국적별서류.html",
    "외등_07_외국인처분.html",
    "외등_08_인감대체.html",
    "외등_09_외국인법정상속.html",
    "외등_10_외국인협의분할.html",
    "외등_11_미입국협의.html",
    "외등_12_외국인증여.html",
    "외등_13_근저당.html",
    "외등_14_재외국민개념.html",
    "외등_15_재외국민등록.html",
    "외등_16_재외국민취득.html",
    "외등_17_재외국민처분.html",
    "외등_18_재외국민단독상속.html",
    "외등_19_재외국민공동상속.html",
    "외등_20_재외국민협의분할.html",
    "외등_21_재외국민증여.html",
    "외등_22_경정등기.html",
    "외등_23_변경경정.html",
    "외등_24_대위등기.html",
    "외등_25_아포스티유.html",
    "외등_26_번역공증.html",
    "외등_27_투자이민.html",
]

def strip_tags(html):
    clean = re.sub(r'<[^>]+>', '', html)
    clean = re.sub(r'&amp;', '&', clean)
    clean = re.sub(r'&lt;', '<', clean)
    clean = re.sub(r'&gt;', '>', clean)
    clean = re.sub(r'&nbsp;', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def get_body_content(html):
    """Extract just the main content area (inside .container or body)."""
    # Try to find container div
    m = re.search(r'<div[^>]*class="container"[^>]*>(.*)', html, re.DOTALL)
    if m:
        content = m.group(1)
        # Remove closing </div> at the end (for container)
        # Just return the full match
        return content
    # Fall back to body content
    m = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    if m:
        return m.group(1)
    return html

def extract_title(html):
    # Look in page-header
    m = re.search(r'<header[^>]*>(.*?)</header>', html, re.DOTALL)
    if m:
        h1 = re.search(r'<h1[^>]*>(.*?)</h1>', m.group(1), re.DOTALL)
        if h1:
            return strip_tags(h1.group(1))
    # Direct h1
    m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
    if m:
        return strip_tags(m.group(1))
    return ''

def extract_meta(html):
    # Look for .subtitle in page-header
    m = re.search(r'<p[^>]*class="subtitle"[^>]*>(.*?)</p>', html, re.DOTALL)
    if m:
        return strip_tags(m.group(1))
    # Also try <p class="subtitle"> inside container
    m = re.search(r'class="subtitle"[^>]*>(.*?)</', html, re.DOTALL)
    if m:
        return strip_tags(m.group(1))
    return ''

def extract_checklist(body_html):
    """Find the intro checklist (before first h2 section)."""
    for cls in ['checklist-box', 'checklist']:
        # Find div with matching class
        m = re.search(r'<div[^>]*class="' + cls + r'"[^>]*>', body_html)
        if m:
            tag_end = m.end()
            end_pos = find_matching_div_end(body_html, tag_end)
            return body_html[m.start():end_pos]
    return None

def find_h2_split_sections(body_html, skip_headings):
    """
    Split the body content into sections by h2 tags.
    Returns list of (heading, content_after_h2) tuples.
    """
    sections = []

    # Find all <h2...>...</h2> positions
    h2_pattern = re.compile(r'<h2[^>]*>(.*?)</h2>', re.DOTALL)
    matches = list(h2_pattern.finditer(body_html))

    for i, m in enumerate(matches):
        heading_raw = strip_tags(m.group(1)).strip()
        # Remove leading numbering like "1." "2." etc.
        # heading_clean = re.sub(r'^\d+[.\s]+', '', heading_raw).strip()
        heading_clean = heading_raw
        # Remove leading ✅ emoji
        heading_clean = re.sub(r'^✅\s*', '', heading_clean).strip()

        # Skip unwanted sections
        should_skip = False
        for skip_pat in skip_headings:
            if skip_pat in heading_clean:
                should_skip = True
                break
        if should_skip:
            continue

        # Content is from end of this h2 to start of next h2 (or end of body)
        content_start = m.end()
        if i + 1 < len(matches):
            content_end = matches[i + 1].start()
        else:
            content_end = len(body_html)

        content = body_html[content_start:content_end].strip()

        # Clean up trailing section wrapper artifacts only
        # Handle: content ends with "...real_content</div>\n  </section>\n\n  <!-- ... -->\n  <section>\n    "
        # Step 1: Remove trailing incomplete opening <section> (start of NEXT section wrapper)
        content = re.sub(r'\s*<section[^>]*>\s*$', '', content).strip()
        # Step 2: Remove trailing HTML comment (section separator comment)
        content = re.sub(r'\s*<!--[^>]*-->\s*$', '', content).strip()
        # Step 3: Remove trailing </section> (closing of CURRENT section wrapper)
        content = re.sub(r'\s*</section>\s*$', '', content).strip()
        # Remove leading orphaned section/comment artifacts
        content = re.sub(r'^(\s*<section[^>]*>\s*)+', '', content).strip()

        sections.append({'heading': heading_clean, 'content': content})

    return sections

def find_matching_div_end(content, open_tag_end):
    """Find end of matching </div> given position after opening tag."""
    depth = 1
    i = open_tag_end
    while i < len(content) and depth > 0:
        next_open = content.find('<div', i)
        next_close = content.find('</div>', i)
        if next_open != -1 and (next_close == -1 or next_open < next_close):
            depth += 1
            i = next_open + 4
        elif next_close != -1:
            depth -= 1
            i = next_close + 6
        else:
            break
    return i

# Box classes that represent a law/precedent entry in the laws section
LAW_BOX_CLASSES = [
    'law-box',
    'precedent-box',
    'box-precedent',
    'reference-box',
    'regulation-box',
    'legal-box',
    'case-box',
    'info-box law',
    'info-box',
]

def extract_name_from_box(lb_html):
    """Extract the name/label from a law box. Returns (name, lb_without_label)."""
    # Try law-label div
    m = re.search(r'<div[^>]*class="law-label"[^>]*>(.*?)</div>', lb_html, re.DOTALL)
    if m:
        return strip_tags(m.group(1)).strip(), re.sub(r'<div[^>]*class="law-label"[^>]*>.*?</div>', '', lb_html, flags=re.DOTALL)

    # Try span.law-tag
    m = re.search(r'<span[^>]*class="law-tag"[^>]*>(.*?)</span>', lb_html, re.DOTALL)
    if m:
        return strip_tags(m.group(1)).strip(), re.sub(r'<span[^>]*class="law-tag"[^>]*>.*?</span>', '', lb_html, flags=re.DOTALL)

    # Try h4 (precedent-box, case-box, regulation-box, legal-box style)
    m = re.search(r'<h4[^>]*>(.*?)</h4>', lb_html, re.DOTALL)
    if m:
        return strip_tags(m.group(1)).strip(), re.sub(r'<h4[^>]*>.*?</h4>', '', lb_html, flags=re.DOTALL, count=1)

    # Try h3 (box-precedent/info-box style)
    m = re.search(r'<h3[^>]*>(.*?)</h3>', lb_html, re.DOTALL)
    if m:
        return strip_tags(m.group(1)).strip(), re.sub(r'<h3[^>]*>.*?</h3>', '', lb_html, flags=re.DOTALL, count=1)

    # Try first <strong> element in the box as label
    # Pattern: ...<strong>Name</strong>...<p>...
    m = re.search(r'<strong>(.*?)</strong>', lb_html, re.DOTALL)
    if m:
        name = strip_tags(m.group(1)).strip()
        if len(name) > 3 and '\n' not in name:  # Valid short label
            remaining = lb_html[m.end():]
            return name, remaining

    return None, lb_html


def extract_law_boxes_from_content(content):
    """Extract all law-box items from content, handling multiple box class styles."""
    laws = []
    pos = 0

    while True:
        lb_start = content.find('<div', pos)
        if lb_start == -1:
            break
        tag_end = content.find('>', lb_start)
        if tag_end == -1:
            break
        tag = content[lb_start:tag_end + 1]

        # Check if this div is a law-related box
        is_law_box = any(cls in tag for cls in LAW_BOX_CLASSES)

        if is_law_box:
            i = find_matching_div_end(content, tag_end + 1)
            lb_html = content[lb_start:i]

            name, lb_no_label = extract_name_from_box(lb_html)
            if name:
                # Remove leading 📜 emoji
                name = re.sub(r'^📜\s*', '', name).strip()
                # Get first <p> for description
                p_m = re.search(r'<p[^>]*>(.*?)</p>', lb_no_label, re.DOTALL)
                desc = strip_tags(p_m.group(1)).strip() if p_m else ''
                if name:
                    laws.append({'name': name, 'desc': desc})
            pos = i
        else:
            pos = tag_end + 1

    return laws

def extract_data(fpath):
    html = read_file(fpath)

    title = extract_title(html)
    meta = extract_meta(html)

    body = get_body_content(html)

    # Headings to skip
    skip_headings = ['다음으로 확인할', '관련 업무 링크', '상담 안내', '상담 신청']

    sections = []
    laws = []

    # Check if there's a checklist-box/checklist section (before h2 sections)
    checklist_html = extract_checklist(body)

    # Get all h2-based sections
    h2_sections = find_h2_split_sections(body, skip_headings)

    # Check if first h2 section is the checklist (heading contains 이런 분께)
    has_checklist_h2 = False
    if h2_sections and '이런 분께' in h2_sections[0]['heading']:
        # This h2 section IS the checklist - use its content
        checklist_content = h2_sections[0]['content']
        # Prepend the h2 heading element back as checklist content
        sections.append({'heading': '이런 분께 필요합니다', 'content': checklist_content})
        h2_sections = h2_sections[1:]
        has_checklist_h2 = True
    elif checklist_html:
        sections.append({'heading': '이런 분께 필요합니다', 'content': checklist_html})

    # Add remaining h2 sections
    for sec in h2_sections:
        heading = sec['heading']
        content = sec['content']

        # Extract laws from this section if it's the laws section
        if '판례' in heading or '예규' in heading or '법령' in heading:
            laws = extract_law_boxes_from_content(content)

        sections.append({'heading': heading, 'content': content})

    return title, meta, sections, laws

def js_escape(s):
    """Escape backticks and ${} for JS template literals."""
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s

def format_content_compact(content):
    """Light compaction - remove excessive blank lines."""
    content = re.sub(r'\n{3,}', '\n\n', content)
    return content.strip()

# Build the JS array
all_topics = []

for i, fname in enumerate(files, 1):
    fpath = os.path.join(base, fname)
    title, meta, sections, laws = extract_data(fpath)

    topic = {
        'id': f'fi-{i:02d}',
        'title': title,
        'meta': meta,
        'sections': sections,
        'laws': laws,
    }
    all_topics.append(topic)
    print(f"fi-{i:02d}: {len(sections)} sections, {len(laws)} laws - {title[:50]}", flush=True)

print(f"\nTotal topics: {len(all_topics)}")

# Write JS file
with open(output_file, 'w', encoding='utf-8') as f:
    f.write('const FOREIGN_TOPICS = [\n')

    for idx, topic in enumerate(all_topics):
        f.write('  {\n')
        f.write(f'    id: {repr(topic["id"])},\n')

        # title and meta as double-quoted strings
        title_esc = topic['title'].replace('\\', '\\\\').replace('"', '\\"')
        meta_esc = topic['meta'].replace('\\', '\\\\').replace('"', '\\"')
        f.write(f'    title: "{title_esc}",\n')
        f.write(f'    meta: "{meta_esc}",\n')

        # sections as template literals
        f.write('    sections: [\n')
        for s in topic['sections']:
            heading_esc = js_escape(s['heading'])
            content = format_content_compact(s['content'])
            content_esc = js_escape(content)
            f.write(f'      {{ heading: `{heading_esc}`, content: `{content_esc}` }},\n')
        f.write('    ],\n')

        # laws
        f.write('    laws: [\n')
        for l in topic['laws']:
            name_esc = js_escape(l['name'])
            desc_esc = js_escape(l['desc'])
            f.write(f'      {{ name: `{name_esc}`, desc: `{desc_esc}` }},\n')
        f.write('    ],\n')

        f.write('    forms: [],\n')
        f.write('  }')
        if idx < len(all_topics) - 1:
            f.write(',')
        f.write('\n')

    f.write('];\n')

fsize = os.path.getsize(output_file)
print(f"\nOutput written to: {output_file}")
print(f"File size: {fsize:,} bytes")
