"""
다크 모드 CSS 자동 생성기

기존 라이트 CSS(와 콘텐츠 데이터 JS의 인라인 style)를 읽어
[data-theme="dark"] 범위의 덮어쓰기 CSS를 만든다.
원본 CSS를 고친 뒤에는 이 스크립트를 다시 실행할 것:

    python scripts/build_dark_css.py

- 공개 화면(public): 밝은 배경은 어둡게, 어두운 글자는 밝게, 채도는 낮춤
- 내부 화면(admin): dark-accessible-ui 토큰으로 스냅 (적록색맹·노안 기준)
"""
import colorsys
import glob
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---------- 출력 대상 ----------
TARGETS = [
    # (출력 파일, 원본 CSS 목록, 인라인 style을 수집할 파일 목록, 모드)
    ('css/dark-public.css', ['css/public.css'], ['index.html', 'js/public.js'], 'public'),
    ('css/dark-style.css', ['css/style.css', 'css/inheritance_content.css'],
     ['content.html', 'blog.html', 'js/main.js'] + sorted(glob.glob(os.path.join(ROOT, 'js', '*_topics_data.js'))),
     'public'),
    ('css/dark-admin.css', ['css/admin.css'], ['admin/portal.html', 'admin/login.html', 'js/admin.js'], 'admin'),
]

SCOPE = '[data-theme="dark"]'

# ---------- 색 파싱 ----------
NAMED = {'white': (255, 255, 255, 1.0), 'black': (0, 0, 0, 1.0)}
COLOR_RE = re.compile(
    r'#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3,4}\b'
    r'|rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*(?:,\s*[\d.%]+\s*)?\)'
    r'|\b(?:white|black)\b'
)
VAR_RE = re.compile(r'var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*))?\)')


def parse_color(s):
    s = s.strip()
    if s.lower() in NAMED:
        return NAMED[s.lower()]
    if s.startswith('#'):
        h = s[1:]
        if len(h) in (3, 4):
            h = ''.join(c * 2 for c in h)
        r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
        a = int(h[6:8], 16) / 255 if len(h) == 8 else 1.0
        return (r, g, b, a)
    nums = re.findall(r'[\d.]+%?', s)
    r, g, b = (float(n) for n in nums[:3])
    a = 1.0
    if len(nums) > 3:
        a = float(nums[3].rstrip('%')) / (100 if nums[3].endswith('%') else 1)
    return (r, g, b, a)


def fmt(rgb, a):
    r, g, b = (max(0, min(255, round(c))) for c in rgb)
    if a >= 0.999:
        return '#%02x%02x%02x' % (r, g, b)
    return 'rgba(%d,%d,%d,%s)' % (r, g, b, ('%.3f' % a).rstrip('0').rstrip('.'))


def to_hls(rgb):
    return colorsys.rgb_to_hls(*(c / 255 for c in rgb))


def from_hls(h, l, s):
    return tuple(c * 255 for c in colorsys.hls_to_rgb(h, max(0, min(1, l)), max(0, min(1, s))))


# ---------- 역할별 변환 ----------
# 공개 화면
def public_bg(rgb, a):
    h, l, s = to_hls(rgb)
    if a < 0.5 and l > 0.85:
        # 흰색 반투명 오버레이 → 그대로 둠(어두운 배경 위에서도 의미 유지)
        return fmt(rgb, a)
    if l > 0.55:
        # 밝은 면 → 어두운 면 (밝을수록 더 어둡게)
        nl = 0.08 + (1 - l) * 0.45
        return fmt(from_hls(h, min(nl, 0.24), s * 0.45), a)
    # 이미 어두운 면(네이비 헤더 등) → 약간 더 어둡고 차분하게
    return fmt(from_hls(h, l * 0.75, s * 0.6), a)


def public_text(rgb, a):
    h, l, s = to_hls(rgb)
    if l < 0.6:
        # 어두운 글자 → 밝은 글자 (어두울수록 더 밝게)
        nl = 0.68 + (0.6 - l) * 0.42
        return fmt(from_hls(h, min(nl, 0.92), s * 0.6), a)
    return fmt(from_hls(h, min(max(l, 0.7), 0.92), s * 0.7), a)


def public_border(rgb, a):
    h, l, s = to_hls(rgb)
    if a < 0.7 and l > 0.85:
        return fmt(rgb, a)
    if l > 0.55:
        return fmt(from_hls(h, 0.2 + (1 - l) * 0.3, s * 0.4), a)
    return fmt(from_hls(h, max(l, 0.25), s * 0.6), a)


# 내부 화면: dark-accessible-ui 토큰
ADMIN_BG = ['#0f1115', '#181b22', '#2a2f3a']
ADMIN_TEXT = ['#e6e8ec', '#cfd3da', '#c5c9d1', '#a9afba', '#8b93a1']
ADMIN_BORDER = ['#2a2f3a', '#343a46']


def _rgb(hexs):
    return parse_color(hexs)[:3]


def admin_bg(rgb, a):
    h, l, s = to_hls(rgb)
    if a < 0.5 and l > 0.85:
        return fmt(rgb, a)
    if s > 0.35 and 0.25 < l < 0.75:
        # 강조색 면 → 채도·명도 40% 낮춤 (#ff6d5a → #a3564c 비율)
        return fmt(from_hls(h, l * 0.6, s * 0.4), a)
    if l > 0.985:
        tok = ADMIN_BG[1]          # 흰 카드 → 카드
    elif l > 0.55:
        tok = ADMIN_BG[0]          # 연회색 페이지 → 페이지
    elif l > 0.3 or s > 0.25:
        tok = ADMIN_BG[2]          # 네이비 헤더·버튼 → 한 단계 밝은 면
    else:
        tok = ADMIN_BG[1]
    return fmt(_rgb(tok), a)


def admin_text(rgb, a):
    h, l, s = to_hls(rgb)
    if s > 0.35 and 0.2 < l < 0.8:
        # 강조 글자 → 채도 낮추고 읽히는 밝기로
        return fmt(from_hls(h, max(0.72, min(l, 0.8)), s * 0.55), a)
    # 2026-10-27 사용자 요청 "조금 더 밝게" → 본문·약함 글자를 표에서 한 칸씩 밝게
    if l < 0.2 or l > 0.92:
        tok = ADMIN_TEXT[0]        # 제목·흰 글자
    elif l < 0.35:
        tok = ADMIN_TEXT[1]        # 본문
    else:
        tok = ADMIN_TEXT[2]        # 약함
    return fmt(_rgb(tok), a)


def admin_border(rgb, a):
    h, l, s = to_hls(rgb)
    if a < 0.7 and l > 0.85:
        return fmt(rgb, a)
    if s > 0.35 and 0.25 < l < 0.75:
        return fmt(from_hls(h, l * 0.7, s * 0.45), a)
    return fmt(_rgb(ADMIN_BORDER[1] if l > 0.8 else ADMIN_BORDER[0]), a)


ROLES = {
    'public': {'bg': public_bg, 'text': public_text, 'border': public_border},
    'admin': {'bg': admin_bg, 'text': admin_text, 'border': admin_border},
}


def role_of(prop):
    p = prop.lower()
    if p in ('color', 'fill', 'stroke', 'caret-color', 'text-decoration-color',
             '-webkit-text-fill-color', 'column-rule-color'):
        return 'text'
    if p.startswith('background'):
        return 'bg'
    if p.startswith('border') or p.startswith('outline'):
        return 'border'
    if p in ('box-shadow', 'text-shadow'):
        return 'shadow'
    return None


# ---------- 변수 해석 ----------
def collect_vars(css):
    out = {}
    for m in re.finditer(r'(--[\w-]+)\s*:\s*([^;{}]+);', css):
        out.setdefault(m.group(1), m.group(2).strip())
    return out


def resolve_vars(value, vars_, depth=0):
    if depth > 5:
        return value

    def sub(m):
        name, fallback = m.group(1), m.group(2)
        if name in vars_:
            return resolve_vars(vars_[name], vars_, depth + 1)
        return fallback if fallback else m.group(0)
    return VAR_RE.sub(sub, value)


def transform_value(prop, value, mode, vars_):
    role = role_of(prop)
    if role is None or role == 'shadow':
        return None
    resolved = resolve_vars(value, vars_)
    if not COLOR_RE.search(resolved):
        return None
    fn = ROLES[mode][role]

    def sub(m):
        r, g, b, a = parse_color(m.group(0))
        return fn((r, g, b), a)
    new = COLOR_RE.sub(sub, resolved)
    return new


# ---------- CSS 파서 (블록 단위) ----------
def strip_comments(css):
    return re.sub(r'/\*.*?\*/', '', css, flags=re.S)


def split_blocks(css):
    """(prelude, body) 목록. 중첩 @media 는 body 를 다시 파싱."""
    i, n, out = 0, len(css), []
    while i < n:
        j = css.find('{', i)
        if j < 0:
            break
        semi = css.find(';', i)
        if 0 <= semi < j and css[i:semi].strip().startswith('@'):
            i = semi + 1        # @import 등
            continue
        prelude = css[i:j].strip()
        depth, k = 1, j + 1
        while k < n and depth:
            if css[k] == '{':
                depth += 1
            elif css[k] == '}':
                depth -= 1
            k += 1
        out.append((prelude, css[j + 1:k - 1]))
        i = k
    return out


def scope_selector(sel):
    parts = []
    for s in sel.split(','):
        s = s.strip()
        if not s:
            continue
        if s.startswith(':root') or s.startswith('html'):
            head = ':root' if s.startswith(':root') else 'html'
            parts.append(head + SCOPE + s[len(head):])
        else:
            parts.append(SCOPE + ' ' + s)
    return ', '.join(parts)


def convert_decls(body, mode, vars_):
    decls = []
    for d in body.split(';'):
        if ':' not in d:
            continue
        prop, val = d.split(':', 1)
        prop, val = prop.strip(), val.strip()
        if prop.startswith('--'):
            continue
        important = '!important' in val
        val = val.replace('!important', '').strip()
        new = transform_value(prop, val, mode, vars_)
        if new is not None:
            decls.append('%s: %s%s' % (prop, new, ' !important' if important else ''))
    return decls


def convert_css(css, mode, vars_):
    out = []
    for prelude, body in split_blocks(css):
        if prelude.startswith('@media') or prelude.startswith('@supports'):
            inner = convert_css(body, mode, vars_)
            if inner.strip():
                out.append('%s {\n%s}\n' % (prelude, inner))
        elif prelude.startswith('@'):
            continue        # @keyframes, @font-face 등
        else:
            decls = convert_decls(body, mode, vars_)
            if decls:
                out.append('%s { %s; }\n' % (scope_selector(prelude), '; '.join(decls)))
    return ''.join(out)


# ---------- 인라인 style ----------
INLINE_RE = re.compile(r'style=\\?["\']([^"\']*)')


def convert_inline(paths, mode, vars_):
    seen, out = set(), []
    for p in paths:
        full = p if os.path.isabs(p) else os.path.join(ROOT, p)
        if not os.path.exists(full):
            continue
        text = open(full, encoding='utf-8').read()
        for m in INLINE_RE.finditer(text):
            for d in m.group(1).split(';'):
                if ':' not in d or '${' in d:
                    continue
                raw = d.strip()
                prop, val = raw.split(':', 1)
                prop = prop.strip()
                if role_of(prop) in (None, 'shadow') or raw in seen:
                    continue
                new = transform_value(prop, val.strip(), mode, vars_)
                if new is None:
                    continue
                seen.add(raw)
                sel = SCOPE + ' [style*="%s"]' % raw.replace('"', '\\"')
                out.append('%s { %s: %s !important; }\n' % (sel, prop, new))
    return ''.join(out)


BASE = {
    'public': (
        ':root%s { color-scheme: dark; }\n' % SCOPE +
        'html%s body { background: #12161d; color: #dde1e7; }\n' % SCOPE +
        '%s img:not([src$=".svg"]) { filter: brightness(0.88); }\n' % SCOPE
    ),
    'admin': (
        ':root%s { color-scheme: dark; }\n' % SCOPE +
        'html%s body { background: #0f1115; color: #cfd3da; }\n' % SCOPE +
        '%s input::placeholder, %s textarea::placeholder { color: #a9afba; opacity: 0.8; }\n' % (SCOPE, SCOPE) +
        '%s :focus-visible { outline-color: #8b7cf6; }\n' % SCOPE
    ),
}


def main():
    for out_path, css_paths, inline_paths, mode in TARGETS:
        css_all = ''
        for p in css_paths:
            css_all += strip_comments(open(os.path.join(ROOT, p), encoding='utf-8').read()) + '\n'
        vars_ = collect_vars(css_all)
        body = convert_css(css_all, mode, vars_)
        inline = convert_inline(inline_paths, mode, vars_)
        header = ('/* 자동 생성 파일 — 직접 수정하지 말 것.\n'
                  '   원본: %s\n   다시 만들기: python scripts/build_dark_css.py */\n\n'
                  % ', '.join(css_paths))
        with open(os.path.join(ROOT, out_path), 'w', encoding='utf-8', newline='\n') as f:
            f.write(header + BASE[mode] + '\n' + body + '\n/* ---- 인라인 style ---- */\n' + inline)
        print('%s: %d rules' % (out_path, (body + inline).count('{')))


if __name__ == '__main__':
    main()
