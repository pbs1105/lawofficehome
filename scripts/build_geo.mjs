/**
 * build_geo.mjs — GEO(AI 검색 인용)용 정적 페이지 생성기
 *
 * 사용법 (홈페이지 폴더에서):  node scripts/build_geo.mjs
 *
 * 하는 일
 *  1. js/*_topics_data.js 와 js/main.js 의 CONTENT_DATA 를 그대로 읽는다 (원본은 수정하지 않음)
 *  2. 주제마다 서버에서 바로 읽히는 정적 HTML 을 만든다  →  /guide/<분야>/<주제ID>.html
 *     - 페이지별 제목·설명·H1·canonical·공유태그
 *     - 본문에 이미 달린 법령·판례 링크를 모아 "근거 법령·판례" 목록과 스키마(citation)로 표기
 *     - 스키마: LegalService(사무소) · Person(법무사) · Article · BreadcrumbList
 *  3. 목차 페이지  /guide/index.html, /guide/<분야>/index.html
 *  4. sitemap.xml · robots.txt · llms.txt
 *  5. 근거 점검표  admin/geo-report.html (직원 포털 안, 비공개)
 *  6. index.html 의 <head> 에 사무소 스키마·공유태그를, 푸터에 전체 목차 링크를 넣는다 (GEO 표시 구간만 교체)
 *
 * 콘텐츠를 고친 뒤에는 이 스크립트를 다시 실행하고 함께 커밋하면 된다.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = (process.env.SITE_URL || 'https://lawofficehome.vercel.app').replace(/\/$/, '');
const TODAY = new Date().toISOString().slice(0, 10);

const OFFICE = {
  name: '박배선법무사 사무소',
  lawyer: '박배선',
  street: '계동로 233, 403호 (대청동, 마루애빌딩)',
  locality: '김해시',
  region: '경상남도',
  tel: '055-312-9345',
  fax: '055-312-9347',
  email: 'pbaesun@gmail.com',
  areaServed: ['김해시', '경상남도', '부산광역시'],
  knowsAbout: ['상속', '부동산등기', '법인등기', '민사소송', '보전처분', '강제집행', '회생파산', '재외국민·외국인 부동산등기'],
};

/* ---------- 1. 데이터 읽기 ---------- */
const DATA_FILES = [
  'corporation_topics_data.js', 'foreign_topics_data.js', 'preservation_topics_data.js', 'inheritance_topics_data.js',
  'enforcement_topics_data.js', 'civil_topics_data.js', 'insolvency_topics_data.js', 'main.js',
];
const noop = () => {};
const ctx = vm.createContext({
  console,
  window: { addEventListener: noop, location: { search: '' } },
  document: { addEventListener: noop, getElementById: () => null, querySelectorAll: () => [] },
});
for (const f of DATA_FILES) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', f), 'utf8'), ctx, { filename: f });
}
vm.runInContext('this.__GEO = { CATEGORIES, CONTENT_DATA };', ctx);
const { CATEGORIES, CONTENT_DATA } = ctx.__GEO;

/* ---------- 도우미 ---------- */
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = s => String(s ?? '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const cleanLabel = s => stripTags(s).replace(/^[📋⚖️🔖📌\s]+/u, '').trim();
const safeId = s => String(s).replace(/[^A-Za-z0-9_-]/g, '_');
const write = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
};

function buildLawUrl(text) { // main.js 와 같은 규칙
  const trimmed = text.trim();
  const commaIdx = trimmed.indexOf(',');
  const effective = commaIdx > 0 ? trimmed.substring(0, commaIdx).trim() : trimmed;
  const m = effective.match(/^(.+?)\s+(제\d+조)/);
  return m ? `https://www.law.go.kr/법령/${m[1].trim()}/${m[2].trim()}` : null;
}

/** 짝이 맞지 않는 div/section 닫는 태그를 정리한다
 *  (화면에서는 innerHTML 이 알아서 무시하지만, 정적 페이지에서는 본문이 카드 밖으로 빠져나간다) */
function balanceTags(html) {
  let out = String(html);
  for (const tag of ['div', 'section']) {
    let depth = 0;
    out = out.replace(new RegExp(`<${tag}\\b[^>]*>|</${tag}\\s*>`, 'gi'), t => {
      if (t[1] !== '/') { depth++; return t; }
      if (depth === 0) return '';
      depth--; return t;
    });
    out += `</${tag}>`.repeat(depth);
  }
  return out;
}

/** lsiSeq 고정 링크(개정되면 옛 조문을 가리킴) → 법령명 경로 링크(항상 현행 조문). 표시 문구로 바꿀 수 없는 것은 센다 */
let lsiLeft = 0;
function fixLsiSeq(html) {
  return html.replace(/<a\b([^>]*?)href="([^"]*lsInfoP\.do[^"]*lsiSeq=[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (all, pre, href, post, inner) => {
    const url = buildLawUrl(cleanLabel(inner));
    if (!url) { lsiLeft++; return all; }
    return `<a${pre}href="${esc(url)}"${post}>${inner}</a>`;
  });
}

/** 화면에서 JS가 하던 태그 변환을 미리 해 둔다 (span.law-tag / span.case-tag → 링크) */
function staticize(html) {
  return fixLsiSeq(balanceTags(html))
    .replace(/<span class="([^"]*\blaw-tag\b[^"]*)"([^>]*)>([\s\S]*?)<\/span>/g, (all, cls, rest, inner) => {
      const url = buildLawUrl(stripTags(inner));
      return url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" class="${cls}"${rest}>${inner}</a>` : all;
    })
    .replace(/<span class="([^"]*\bcase-tag\b[^"]*)"([^>]*)>([\s\S]*?)<\/span>/g, (all, cls, rest, inner) =>
      `<a href="https://casenote.kr/search?q=${encodeURIComponent(stripTags(inner))}" target="_blank" rel="noopener noreferrer" class="${cls}"${rest}>${inner}</a>`);
}

/** 본문에 표시된 법령·판례 근거를 모은다 */
function collectSources(html, laws) {
  const out = new Map();
  const add = (label, url, kind) => {
    label = cleanLabel(label);
    if (!label || label.length > 80) return;
    if (!out.has(label)) out.set(label, { label, url: url || null, kind });
  };
  const kindOf = (cls, url, label) => {
    let u = url || '';
    try { u = decodeURI(u); } catch (e) { /* 그대로 */ }
    if (/case|prec|panre/i.test(cls) || /casenote|glaw\.scourt|\/판례\//.test(u)) return '판례';
    if (/예규|선례/.test(cls) || /\/행정규칙\/|admRul/.test(u) || /예규|선례/.test(label || '')) return '예규·선례';
    if (/law\.go\.kr\/(법령|lsInfoP|lsSc)|law\.go\.kr\/LSW/.test(u) || /law-tag/.test(cls) || !u) return '법령';
    return '기관 안내';
  };
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const attrs = m[1];
    const href = (attrs.match(/href="([^"]*)"/) || [])[1] || '';
    const cls = (attrs.match(/class="([^"]*)"/) || [])[1] || '';
    if (/\b(tag-law|law-tag|tag-case|case-tag)\b/.test(cls) || /law\.go\.kr|glaw\.scourt\.go\.kr|casenote\.kr/.test(href)) {
      add(m[2], href.replace(/&amp;/g, '&'), kindOf(cls, href, cleanLabel(m[2])));
    }
  }
  for (const m of html.matchAll(/data-ref-type="([^"]*)"[^>]*?data-ref-title="([^"]*)"(?:[^>]*?data-ref-url="([^"]*)")?/g)) {
    add(m[2], (m[3] || '').replace(/&amp;/g, '&'), m[1] === 'law' ? '법령' : m[1] === 'case' ? '판례' : '예규·선례');
  }
  for (const l of laws || []) add(l.name, buildLawUrl(l.name), '법령');
  const order = { '법령': 0, '예규·선례': 1, '판례': 2, '기관 안내': 3 };
  return [...out.values()].sort((a, b) => order[a.kind] - order[b.kind]);
}

/* ---------- 공통 스키마 ---------- */
const officeNode = {
  '@type': 'LegalService',
  '@id': `${SITE}/#office`,
  name: OFFICE.name,
  url: `${SITE}/`,
  telephone: OFFICE.tel,
  faxNumber: OFFICE.fax,
  email: OFFICE.email,
  address: {
    '@type': 'PostalAddress', streetAddress: OFFICE.street, addressLocality: OFFICE.locality,
    addressRegion: OFFICE.region, addressCountry: 'KR',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00',
  }],
  areaServed: OFFICE.areaServed,
  knowsAbout: OFFICE.knowsAbout,
  founder: { '@id': `${SITE}/#lawyer` },
};
const personNode = {
  '@type': 'Person', '@id': `${SITE}/#lawyer`, name: OFFICE.lawyer, jobTitle: '법무사',
  worksFor: { '@id': `${SITE}/#office` }, knowsAbout: OFFICE.knowsAbout,
};
const ld = graph => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  .replace(/</g, '\\u003c')}</script>`;
const crumbs = list => ({
  '@type': 'BreadcrumbList',
  itemListElement: list.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
});

/* ---------- 페이지 틀 ---------- */
function page({ title, description, url, type = 'article', jsonld, body }) {
  return `<!DOCTYPE html>
<html lang="ko" data-theme-key="theme-public" data-theme-default="system">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <base href="/" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${esc(url)}" />
  <meta property="og:type" content="${type}" />
  <meta property="og:site_name" content="${esc(OFFICE.name)}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${esc(url)}" />
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="stylesheet" href="/css/inheritance_content.css?v=1" />
  <link rel="stylesheet" href="/css/insolvency_content.css?v=1" />
  <link rel="stylesheet" href="/css/dark-style.css" />
  <link rel="stylesheet" href="/css/kb_content.css" />
  <style>
    .geo-crumb{font-size:.85rem;margin-bottom:12px;color:var(--text-light)}
    .geo-crumb a{color:inherit}
    .geo-byline{font-size:.85rem;color:var(--text-light);margin-top:8px}
    .geo-sources ul{padding-left:1.2em}
    .geo-sources li{margin:4px 0}
    .geo-sources .kind{display:inline-block;min-width:4.5em;font-size:.8rem;color:var(--text-light)}
    .geo-note{font-size:.85rem;color:var(--text-light);margin-top:12px}
    .geo-toc a{display:block;padding:6px 20px;font-size:.88rem;color:inherit;text-decoration:none}
    .geo-toc a.active{font-weight:700}
    .geo-list li{margin:10px 0}
    .geo-list .m{display:block;font-size:.85rem;color:var(--text-light)}
  </style>
  <script src="/js/theme.js"></script>
  ${jsonld}
</head>
<body id="guidePage">
  <div id="navHolder" data-page="content"></div>
${body}
  <div id="footHolder"></div>
  <div id="modalHolder"></div>
  <script src="/js/main.js?v=12"></script>
</body>
</html>
`;
}

/* ---------- 2. 주제 페이지 ---------- */
const catalog = []; // {cat, topics:[{...}]}
const report = [];

for (const cat of CATEGORIES) {
  const d = CONTENT_DATA[cat.id];
  if (!d) continue;
  const groups = d.subcategories
    ? d.subcategories.map(s => ({ sub: s, topics: s.topics || [] }))
    : [{ sub: null, topics: d.topics || [] }];
  const entry = { cat, label: d.label || cat.name, topics: [] };
  const seen = new Set();
  for (const g of groups) {
    for (const t of g.topics) {
      if (!t || !t.id || seen.has(t.id)) continue;
      seen.add(t.id);
      entry.topics.push({ ...t, sub: g.sub });
    }
  }
  catalog.push(entry);
}

for (const entry of catalog) {
  const { cat, label } = entry;
  const catUrl = `${SITE}/guide/${cat.id}/`;
  for (const t of entry.topics) {
    lsiLeft = 0;
    const rel = `guide/${cat.id}/${safeId(t.id)}.html`;
    const reviewed = /^\d{4}-\d\d-\d\d$/.test(t.reviewed || '') ? t.reviewed : '';
    const modDate = reviewed || TODAY;
    const url = `${SITE}/${rel}`;
    const sectionsHtml = (t.sections || []).map((s, i) =>
      `      <div class="article-section" id="s${i + 1}">\n        <h2>${s.heading}</h2>\n        ${staticize(s.content)}\n      </div>`).join('\n');
    const sources = collectSources(sectionsHtml, t.laws);
    const text = stripTags((t.sections || []).map(s => s.content).join(' '));
    const metaText = stripTags(t.meta);
    // 설명이 짧으면(40자 미만) 본문 앞부분을 이어 붙여 검색·AI 요약에 쓸 만한 길이로 만든다
    const description = (metaText.length >= 40 ? metaText : [metaText, text].filter(Boolean).join(' — ')).slice(0, 155);
    const live = `/content.html?cat=${cat.id}${t.sub ? `&sub=${t.sub.id}` : ''}&topic=${encodeURIComponent(t.id)}`;

    const sourcesHtml = sources.length
      ? `      <section class="article-section geo-sources" id="sources">
        <h2>근거 법령·판례</h2>
        <ul>
${sources.map(s => `          <li><span class="kind">${s.kind}</span>${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a>` : esc(s.label)}</li>`).join('\n')}
        </ul>
        <p class="geo-note">이 글은 위 법령·판례를 근거로 작성한 일반 안내입니다. 개별 사안은 사실관계에 따라 달라질 수 있으니 상담으로 확인하시기 바랍니다.</p>
      </section>`
      : '';

    const siblings = entry.topics.map(o =>
      `<a href="/guide/${cat.id}/${safeId(o.id)}.html"${o.id === t.id ? ' class="active" aria-current="page"' : ''}>${esc(o.title)}</a>`).join('\n        ');

    const body = `  <div class="content-3col">
    <aside class="toc-sidebar">
      <div class="toc-title">${esc(label)}</div>
      <nav class="geo-toc" aria-label="${esc(label)} 주제 목록">
        ${siblings}
      </nav>
    </aside>
    <main class="content-main">
      <article class="content-article">
        <nav class="geo-crumb" aria-label="현재 위치"><a href="/">홈</a> › <a href="/guide/">업무 안내</a> › <a href="/guide/${cat.id}/">${esc(label)}</a> › <span>${esc(t.title)}</span></nav>
        <div class="article-header">
          <h1>${esc(t.title)}</h1>
          <div class="article-meta"><span>📁 ${esc(label)}${t.sub ? ` · ${esc(t.sub.name)}` : ''}</span><span>📖 ${esc(stripTags(t.meta))}</span></div>
          <p class="geo-byline">작성·감수 법무사 ${OFFICE.lawyer} · ${reviewed ? '최종 검토' : '최종 갱신'} <time datetime="${modDate}">${modDate}</time></p>
        </div>
${sectionsHtml}
${sourcesHtml}
${t.ownCta ? '' : `      <div style="margin-top:40px;padding:24px;background:var(--accent);border-radius:var(--radius);text-align:center;">
        <p style="font-weight:600;color:var(--primary);margin-bottom:12px;">더 자세한 내용이 궁금하신가요? 법무사에게 직접 상담받으세요.</p>
        <button class="btn-primary" onclick="openModal()">📞 온라인상담신청</button>
      </div>`}
      </article>
    </main>
    <aside class="law-sidebar">
      <div class="sidebar-consult">
        <h4>전문가 상담</h4>
        <p>${esc(OFFICE.name)}<br>${esc(OFFICE.region)} ${esc(OFFICE.locality)} ${esc(OFFICE.street)}<br>${esc(OFFICE.tel)}</p>
        <button class="btn-white" onclick="openModal()">온라인상담신청</button>
      </div>
      <p style="padding:16px 20px;font-size:.82rem;"><a href="${esc(live)}">목차형 화면으로 보기 →</a></p>
    </aside>
  </div>`;

    const jsonld = ld([
      officeNode, personNode,
      {
        '@type': 'Article', '@id': `${url}#article`, headline: t.title, description,
        inLanguage: 'ko', articleSection: label, url, mainEntityOfPage: url,
        author: { '@id': `${SITE}/#lawyer` }, publisher: { '@id': `${SITE}/#office` },
        dateModified: modDate,
        citation: sources.map(s => ({ '@type': s.kind === '법령' ? 'Legislation' : 'CreativeWork', name: s.label, ...(s.url ? { url: s.url } : {}) })),
      },
      crumbs([
        { name: '홈', url: `${SITE}/` }, { name: '업무 안내', url: `${SITE}/guide/` },
        { name: label, url: catUrl }, { name: t.title, url },
      ]),
      ...((t.faq || []).length ? [{ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : []),
    ]);

    write(rel, page({ title: `${t.title} | ${label} | ${OFFICE.name}`, description, url, jsonld, body }));
    t.__url = url; t.__rel = rel;
    report.push({ cat: label, id: t.id, title: t.title, url: `/${rel}`, sources: sources.length, reviewed, faq: (t.faq || []).length, lsi: lsiLeft, kb: t.kb || '',
      laws: sources.filter(s => s.kind === '법령').length, cases: sources.filter(s => s.kind === '판례').length,
      metaLen: stripTags(t.meta).length, chars: text.length });
  }
}

/* ---------- 3. 목차 페이지 ---------- */
for (const entry of catalog) {
  const { cat, label } = entry;
  const url = `${SITE}/guide/${cat.id}/`;
  const body = `  <main class="content-main" style="max-width:860px;margin:0 auto;padding:32px 20px;">
    <article class="content-article">
      <nav class="geo-crumb" aria-label="현재 위치"><a href="/">홈</a> › <a href="/guide/">업무 안내</a> › <span>${esc(label)}</span></nav>
      <h1>${esc(label)} 업무 안내</h1>
      <p>${esc(OFFICE.name)}(${esc(OFFICE.region)} ${esc(OFFICE.locality)})가 법령·판례를 근거로 정리한 ${esc(label)} 안내 ${entry.topics.length}편입니다.</p>
      <ul class="geo-list">
${entry.topics.map(t => `        <li><a href="/guide/${cat.id}/${safeId(t.id)}.html">${esc(t.title)}</a><span class="m">${esc(stripTags(t.meta))}</span></li>`).join('\n')}
      </ul>
    </article>
  </main>`;
  const jsonld = ld([officeNode, personNode,
    { '@type': 'CollectionPage', '@id': `${url}#page`, name: `${label} 업무 안내`, url, inLanguage: 'ko', about: label, publisher: { '@id': `${SITE}/#office` } },
    crumbs([{ name: '홈', url: `${SITE}/` }, { name: '업무 안내', url: `${SITE}/guide/` }, { name: label, url }])]);
  write(`guide/${cat.id}/index.html`, page({
    title: `${label} 업무 안내 | ${OFFICE.name}`,
    description: `${OFFICE.locality} ${OFFICE.name}의 ${label} 업무 안내 ${entry.topics.length}편 — 법령·판례 근거 표기`,
    url, type: 'website', jsonld, body,
  }));
}
{
  const url = `${SITE}/guide/`;
  const total = catalog.reduce((n, e) => n + e.topics.length, 0);
  const body = `  <main class="content-main" style="max-width:860px;margin:0 auto;padding:32px 20px;">
    <article class="content-article">
      <nav class="geo-crumb" aria-label="현재 위치"><a href="/">홈</a> › <span>업무 안내</span></nav>
      <h1>업무 안내 전체 목차</h1>
      <p>${esc(OFFICE.name)}는 ${esc(OFFICE.region)} ${esc(OFFICE.locality)}에 있는 법무사 사무소입니다. 아래 ${total}편의 안내는 법령·예규·판례를 근거로 법무사 ${OFFICE.lawyer}이 작성·감수했습니다.</p>
${catalog.map(e => `      <h2><a href="/guide/${e.cat.id}/">${e.cat.icon || ''} ${esc(e.label)}</a> <small>(${e.topics.length}편)</small></h2>
      <ul class="geo-list">
${e.topics.map(t => `        <li><a href="/guide/${e.cat.id}/${safeId(t.id)}.html">${esc(t.title)}</a></li>`).join('\n')}
      </ul>`).join('\n')}
    </article>
  </main>`;
  const jsonld = ld([officeNode, personNode,
    { '@type': 'CollectionPage', '@id': `${url}#page`, name: '업무 안내 전체 목차', url, inLanguage: 'ko', publisher: { '@id': `${SITE}/#office` } },
    crumbs([{ name: '홈', url: `${SITE}/` }, { name: '업무 안내', url }])]);
  write('guide/index.html', page({
    title: `업무 안내 전체 목차 | ${OFFICE.name}`,
    description: `${OFFICE.locality} ${OFFICE.name} — 상속·부동산등기·법인등기·민사소송·강제집행·회생파산 안내 ${total}편, 법령·판례 근거 표기`,
    url, type: 'website', jsonld, body,
  }));
}

/* ---------- 4. sitemap · robots · llms ---------- */
{
  const urls = [`${SITE}/`, `${SITE}/blog.html`, `${SITE}/guide/`,
    ...catalog.map(e => `${SITE}/guide/${e.cat.id}/`),
    ...catalog.flatMap(e => e.topics.map(t => t.__url))];
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${esc(encodeURI(decodeURI(u)))}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}
</urlset>
`);
  write('robots.txt', `# ${OFFICE.name}
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${SITE}/sitemap.xml
`);
  write('llms.txt', `# ${OFFICE.name}

> ${OFFICE.region} ${OFFICE.locality}의 법무사 사무소(법무사 ${OFFICE.lawyer}). 상속·부동산등기·법인등기·민사소송·보전처분·강제집행·회생파산 업무를 합니다. 모든 안내는 법령·예규·판례를 근거로 작성하며, 각 페이지 하단에 근거 목록이 있습니다.

- 주소: ${OFFICE.region} ${OFFICE.locality} ${OFFICE.street}
- 전화: ${OFFICE.tel}
- 업무시간: 평일 09:00~18:00

## 업무 안내
${catalog.map(e => `- [${e.label}](${SITE}/guide/${e.cat.id}/): ${e.topics.length}편`).join('\n')}

## 전체 목록
${catalog.map(e => e.topics.map(t => `- [${e.label} — ${t.title}](${t.__url})`).join('\n')).join('\n')}
`);
}

/* ---------- 5. 근거 점검표 (admin, 비공개) ---------- */
{
  const ok = report.filter(r => r.sources > 0).length;
  const rows = report.map(r => {
    const good = r.sources > 0;
    return `<tr class="${good ? 'ok' : 'ng'}"><td class="rail"></td><td class="ic">${good ? '✓' : '✕'}</td><td>${esc(r.cat)}</td><td><a href="${esc(r.url)}" target="_blank">${esc(r.title)}</a><div class="id">${esc(r.id)}</div></td><td class="n">${r.laws}</td><td class="n">${r.cases}</td><td class="n">${r.sources}</td><td class="n${r.metaLen < 20 ? ' warn' : ''}">${r.metaLen}</td><td class="n">${r.chars.toLocaleString()}</td><td>${r.reviewed || '—'}</td><td class="n">${r.faq}</td><td class="n${r.lsi ? ' warn' : ''}">${r.lsi}</td><td>${esc(r.kb)}</td></tr>`;
  }).join('\n');
  write('admin/geo-report.html', `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>GEO 근거 점검표 (${TODAY})</title>
<style>
  body{margin:0;background:#0f1b2e;color:#c3cede;font:14px/1.5 -apple-system,"Malgun Gothic",sans-serif;padding:28px}
  h1{font-size:20px;color:#d6dfeb;margin:0 0 6px} p{margin:4px 0 16px;color:#93a2b8}
  .sum{display:flex;gap:12px;margin:16px 0 20px}
  .card{background:#16253d;border-radius:8px;padding:12px 16px;border-left:4px solid #3a4d6b}
  .card.ok{border-left-color:#2a9d8f} .card.ng{border-left-color:#b5447e}
  .card b{display:block;font-size:22px;color:#d6dfeb}
  table{border-collapse:collapse;width:100%;background:#13213a;border-radius:8px;overflow:hidden}
  th,td{padding:8px 10px;border-bottom:1px solid #22324d;text-align:left;vertical-align:top}
  th{background:#1a2b47;color:#a9b7cb;font-weight:600;position:sticky;top:0}
  td.rail{width:4px;padding:0} tr.ok td.rail{background:#2a9d8f} tr.ng td.rail{background:#b5447e}
  td.ic{width:22px;font-weight:700} tr.ok td.ic{color:#2a9d8f} tr.ng td.ic{color:#c7609a}
  td.n{text-align:right;white-space:nowrap} td.warn{color:#c7609a}
  a{color:#8fb4d9} .id{font-size:12px;color:#6f819b}
  select{background:#16253d;color:#c3cede;border:1px solid #2c3f5e;border-radius:6px;padding:4px 8px}
</style></head><body>
<h1>GEO 근거 점검표</h1>
<p>생성일 ${TODAY} · 본문에 법령·예규·판례 근거가 링크로 표기되었는지 주제별로 점검합니다. ✕ 표시 주제는 근거 표기를 보완해 주세요. 설명(meta) 20자 미만은 자홍색으로 표시합니다.</p>
<div class="sum"><div class="card"><b>${report.length}</b>전체 주제</div><div class="card ok"><b>✓ ${ok}</b>근거 표기 있음</div><div class="card ng"><b>✕ ${report.length - ok}</b>근거 표기 없음</div></div>
<p><label>보기: <select onchange="document.querySelectorAll('tbody tr').forEach(r=>r.style.display=(this.value==='all'||r.classList.contains(this.value))?'':'none')"><option value="all">전체</option><option value="ng">근거 없음만</option><option value="ok">근거 있음만</option></select></label></p>
<table><thead><tr><th></th><th></th><th>분야</th><th>주제</th><th>법령</th><th>판례</th><th>근거 합계</th><th>설명 글자</th><th>본문 글자</th><th>검토일</th><th>FAQ</th><th>lsiSeq 미변환</th><th>KB</th></tr></thead>
<tbody>
${rows}
</tbody></table>
</body></html>
`);
}

/* ---------- 6. index.html 보강 (GEO 표시 구간만 교체) ---------- */
{
  const idxPath = path.join(ROOT, 'index.html');
  let html = fs.readFileSync(idxPath, 'utf8');
  const headBlock = `<!-- GEO:HEAD:START (scripts/build_geo.mjs 가 자동 생성 — 직접 고치지 마세요) -->
  <link rel="canonical" href="${SITE}/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${OFFICE.name}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:title" content="${OFFICE.name} - 김해 상속·부동산등기·법인등기 법무사" />
  <meta property="og:description" content="경남 김해시 ${OFFICE.name}. 상속, 부동산등기, 법인등기, 민사소송, 강제집행, 회생파산 — 법령·판례 근거 업무 안내." />
  <meta property="og:url" content="${SITE}/" />
  ${ld([officeNode, personNode, { '@type': 'WebSite', '@id': `${SITE}/#website`, name: OFFICE.name, url: `${SITE}/`, inLanguage: 'ko', publisher: { '@id': `${SITE}/#office` } }])}
  <!-- GEO:HEAD:END -->`;
  const bodyBlock = `<!-- GEO:H1:START -->
  <h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">${OFFICE.name} — 경남 김해 상속·부동산등기·법인등기 법무사</h1>
  <!-- GEO:H1:END -->`;
  const footBlock = `<!-- GEO:FOOT:START --><li><a href="guide/">📚 업무 안내 전체 목차</a></li><!-- GEO:FOOT:END -->`;

  const replaceOrInsert = (src, start, end, block, anchorRe, where) => {
    const re = new RegExp(`<!-- ${start}[\\s\\S]*?${end} -->`);
    if (re.test(src)) return src.replace(re, block);
    return src.replace(anchorRe, m => where === 'before' ? `${block}\n  ${m}` : `${m}\n  ${block}`);
  };
  html = replaceOrInsert(html, 'GEO:HEAD:START', 'GEO:HEAD:END', headBlock, /<\/head>/, 'before');
  html = replaceOrInsert(html, 'GEO:H1:START', 'GEO:H1:END', bodyBlock, /<body[^>]*>/, 'after');
  html = replaceOrInsert(html, 'GEO:FOOT:START', 'GEO:FOOT:END', footBlock,
    /<li><a href="content\.html\?cat=etc">📁 기타<\/a><\/li>/, 'after');
  fs.writeFileSync(idxPath, html, 'utf8');
}

const total = report.length;
const noSrc = report.filter(r => r.sources === 0).length;
console.log(`GEO 빌드 완료 (${TODAY})`);
console.log(`  주제 페이지 ${total}개 → /guide/`);
console.log(`  근거 표기 있음 ${total - noSrc} / 없음 ${noSrc}`);
console.log(`  sitemap.xml · robots.txt · llms.txt · admin/geo-report.html · index.html 보강`);
