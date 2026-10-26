"""
회생파산 콘텐츠 변환기

rehab-kb/05-public/html 의 단독 HTML 페이지들을 읽어
홈페이지 content.html 이 쓰는 데이터(js/insolvency_topics_data.js)로 바꾼다.
원본을 고친 뒤에는 이 스크립트를 다시 실행할 것:

    python scripts/build_insolvency_topics.py

- 본문은 <h2> 단위로 섹션을 나누고, 원본 스타일은 css/insolvency_content.css(.rehab 범위)로 옮겼다
- 상담 버튼: 온라인상담신청(상담 창) · 전화 · 카톡상담으로 바꾼다
- 페이지 사이 링크는 content.html?cat=insolvency&sub=..&topic=.. 로 바꾸고,
  아직 없는 페이지로 가는 링크는 목록에서 뺀다
"""
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.normpath(os.path.join(ROOT, '..', '..', '법무교재 및 관련파일', '도산법', 'rehab-kb', '05-public', 'html'))
OUT = os.path.join(ROOT, 'js', 'insolvency_topics_data.js')

OFFICE_TEL = '055-312-9345'
KAKAO_URL = 'http://pf.kakao.com/_PZMNn'

# 중분류 → (이름, [파일명]) — 순서가 목차 순서
SUBCATEGORIES = [
    ('ins-guide', '나에게 맞는 절차', ['A01_find-my-procedure.html']),
    ('ins-business', '사업자·법인 회생·파산', [
        'B01_corp-rehab-process.html', 'B02_corp-rehab-cost.html', 'B03_stop-seizure.html',
        'B04_simple-vs-general.html', 'B05_ceo-guarantee.html', 'B06_sole-proprietor.html',
        'B13_ceo-criminal.html', 'B14_guarantee-fund-policy.html',
    ]),
    ('ins-individual', '개인회생·개인파산', [
        'I01_individual-rehab-eligibility.html', 'I03_individual-stop-garnishment.html',
        'I04_individual-rehab-process.html', 'I05_individual-rehab-cost.html',
    ]),
]


def slug_of(fname):
    return fname.split('_', 1)[1].rsplit('.', 1)[0]


def topic_id_of(fname):
    return 'ins-' + fname.split('_', 1)[0].lower()


# slug → (중분류 id, 주제 id)
LINKS = {}
for sub_id, _, files in SUBCATEGORIES:
    for f in files:
        LINKS[slug_of(f)] = (sub_id, topic_id_of(f))


def fix_links(body):
    """./slug.html 링크를 홈페이지 주소로. 없는 페이지로 가는 <li> 는 지운다."""
    def li_sub(m):
        slug = m.group(1)
        if slug not in LINKS:
            return ''
        sub_id, tid = LINKS[slug]
        return '<li><a href="content.html?cat=insolvency&amp;sub=%s&amp;topic=%s">%s</a></li>' % (sub_id, tid, m.group(2))
    body = re.sub(r'<li><a href="\./([\w-]+)\.html">(.*?)</a></li>', li_sub, body)

    def a_sub(m):
        slug = m.group(1)
        if slug not in LINKS:
            return m.group(2)
        sub_id, tid = LINKS[slug]
        return '<a href="content.html?cat=insolvency&amp;sub=%s&amp;topic=%s">%s</a>' % (sub_id, tid, m.group(2))
    return re.sub(r'<a href="\./([\w-]+)\.html">(.*?)</a>', a_sub, body)


def fix_cta(body):
    body = re.sub(r'<a class="btn btn-main" href="/consult\?topic=[\w-]+">.*?</a>',
                  '<button type="button" class="btn btn-main" onclick="openModal()">온라인상담신청</button>', body)
    body = body.replace('href="tel:{{OFFICE_TEL}}">전화 상담</a>',
                        'href="tel:%s">📞 전화 상담</a>' % OFFICE_TEL.replace('-', ''))
    body = body.replace('href="{{KAKAO_URL}}" target="_blank" rel="noopener">카카오톡 상담</a>',
                        'href="%s" target="_blank" rel="noopener">💬 카톡상담</a>' % KAKAO_URL)
    assert '{{' not in body, '치환되지 않은 자리표시자가 남아 있음'
    return body


def wrap(inner):
    return '<div class="rehab">%s</div>' % inner.strip()


def convert(path):
    text = open(path, encoding='utf-8').read()
    body = re.search(r'<main class="wrap">(.*)</main>', text, re.S).group(1)
    title = html.unescape(re.search(r'<h1>(.*?)</h1>', body, re.S).group(1)).strip()
    byline = re.search(r'<div class="byline">(.*?)</div>', body, re.S).group(1).strip()

    body = re.sub(r'<div class="topbar">.*?</button></div>', '', body, count=1, flags=re.S)
    body = re.sub(r'<h1>.*?</h1>', '', body, count=1, flags=re.S)
    body = re.sub(r'<div class="byline">.*?</div>', '', body, count=1, flags=re.S)
    body = fix_cta(fix_links(body))

    sections = []

    # 1) 이런 분께 필요합니다
    m = re.search(r'<section class="box for"><h2[^>]*>(.*?)</h2>(.*?)</section>', body, re.S)
    sections.append({'heading': m.group(1), 'content': wrap('<div class="box for">%s</div>' % m.group(2))})
    body = body[:m.start()] + body[m.end():]

    # 2) 핵심정리
    m = re.search(r'<section class="box summary"><strong>핵심정리</strong>(.*?)</section>', body, re.S)
    sections.append({'heading': '핵심정리', 'content': wrap('<div class="box summary">%s</div>' % m.group(1))})
    body = body[:m.start()] + body[m.end():]

    # 3) 상담 안내(CTA) + 면책 문구 — 마지막 섹션으로
    m = re.search(r'<section class="box cta" id="consult">\s*<h2[^>]*>(.*?)</h2>(.*?)</section>', body, re.S)
    cta_heading, cta_body = m.group(1), m.group(2)
    body = body[:m.start()] + body[m.end():]
    disclaimer = re.search(r'<p class="disclaimer">.*?</p>', body, re.S)
    body = body.replace(disclaimer.group(0), '')

    # 4) 나머지는 <h2> 단위
    parts = re.split(r'<h2>(.*?)</h2>', body)
    assert not parts[0].strip(), '첫 <h2> 앞에 남은 내용: %r' % parts[0][:80]
    for heading, content in zip(parts[1::2], parts[2::2]):
        sections.append({'heading': heading, 'content': wrap(content)})

    sections.append({'heading': cta_heading,
                     'content': wrap('<div class="box cta">%s</div>%s' % (cta_body, disclaimer.group(0)))})

    return {
        'id': topic_id_of(os.path.basename(path)),
        'title': title,
        'meta': byline,
        'ownCta': True,     # 본문에 상담 안내가 있으므로 공통 상담 박스는 생략
        'sections': sections,
    }


def main():
    data = []
    for sub_id, name, files in SUBCATEGORIES:
        data.append({'id': sub_id, 'name': name,
                     'topics': [convert(os.path.join(SRC, f)) for f in files]})
    js = ('/* 자동 생성 파일 — 직접 수정하지 말 것.\n'
          '   원본: rehab-kb/05-public/html\n'
          '   다시 만들기: python scripts/build_insolvency_topics.py */\n'
          'const INSOLVENCY_SUBCATEGORIES = %s;\n' % json.dumps(data, ensure_ascii=False, indent=1))
    with open(OUT, 'w', encoding='utf-8', newline='\n') as f:
        f.write(js)
    n = sum(len(s['topics']) for s in data)
    print('%s: %d topics, %d KB' % (os.path.relpath(OUT, ROOT), n, len(js.encode('utf-8')) // 1024))


if __name__ == '__main__':
    main()
