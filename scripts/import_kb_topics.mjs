/**
 * import_kb_topics.mjs — 지식베이스(KB)에서 검증된 주제를 홈페이지 데이터 파일에 반영 (스킬 v3 §9-2 ③)
 *
 * 사용: node scripts/import_kb_topics.mjs <KB가 내보낸 JSON> <데이터파일 js> <배열 이름>
 *   예) node scripts/import_kb_topics.mjs ../kb_export/inheritance.json js/inheritance_topics_data.js INHERITANCE_TOPICS
 *
 * - 같은 id 가 있으면 그 주제를 KB 내용으로 바꾸고, 없으면 ORDER 에 정한 자리(없으면 끝)에 넣는다
 * - KB 에 없는 기존 주제는 그대로 둔다 (점진적 보완)
 * - 바꾸기 전 파일은 scripts/backup/ 에 날짜를 붙여 보관한다
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const [jsonPath, dataPath, arrName] = process.argv.slice(2);
if (!jsonPath || !dataPath || !arrName) { console.error('사용: node scripts/import_kb_topics.mjs <json> <data.js> <배열이름>'); process.exit(1); }

// 새 주제를 넣을 자리: 'after' 주제 바로 뒤
const ORDER = {
  'in-26': 'in-04',  // 상속재산 통합조회 → 빚도 상속되나요 뒤
  'in-27': 'in-07',  // 특별한정승인 → 한정승인 절차 뒤
  'in-28': 'in-27',  // 채권자 소송·압류 → 특별한정승인 뒤
  'in-25': 'in-12',  // 오래전 돌아가신 분 명의 땅 → 상속 부동산등기 뒤
};

const src = fs.readFileSync(dataPath, 'utf8');
const ctx = vm.createContext({});
vm.runInContext(`${src};this.__T = ${arrName};`, ctx);
const topics = ctx.__T.map(t => ({ ...t }));
const kb = JSON.parse(fs.readFileSync(jsonPath, 'utf8')).topics;

const report = [];
for (const k of kb) {
  const obj = { id: k.id, title: k.title, meta: k.meta, reviewed: k.reviewed, kb: k.kb, sections: k.sections, laws: k.laws || [], faq: k.faq || [], forms: k.forms || [] };
  const i = topics.findIndex(t => t.id === k.id);
  if (i >= 0) { report.push(`교체 ${k.id} ← ${k.kb}  (종전: ${topics[i].title})`); topics[i] = obj; continue; }
  const after = ORDER[k.id];
  let j = after ? topics.findIndex(t => t.id === after) : -1;
  if (j < 0) j = topics.length - 1;
  topics.splice(j + 1, 0, obj);
  report.push(`추가 ${k.id} ← ${k.kb}  (${k.title})`);
}

// ---- 직렬화 (본문은 템플릿 리터럴로 — 사람이 읽고 고칠 수 있게) ----
const tl = s => '`' + String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
const q = s => JSON.stringify(s ?? '');
function ser(t) {
  const lines = ['  {', `    id: ${q(t.id)},`, `    title: ${q(t.title)},`, `    meta: ${q(t.meta)},`];
  if (t.reviewed) lines.push(`    reviewed: ${q(t.reviewed)},`);
  if (t.kb) lines.push(`    kb: ${q(t.kb)},`);
  if (t.ownCta) lines.push('    ownCta: true,');
  lines.push('    sections: [');
  for (const s of t.sections || []) lines.push(`      { heading: ${q(s.heading)}, content: ${tl(s.content)} },`);
  lines.push('    ],');
  for (const key of Object.keys(t)) {
    if (['id', 'title', 'meta', 'reviewed', 'kb', 'ownCta', 'sections'].includes(key)) continue;
    lines.push(`    ${key}: ${JSON.stringify(t[key], null, 0)},`);
  }
  lines.push('  }');
  return lines.join('\n');
}
const out = `const ${arrName} = [\n${topics.map(ser).join(',\n')}\n];\n`;

// 검증: 다시 읽어서 같은지
const chk = vm.createContext({});
vm.runInContext(`${out};this.__T = ${arrName};`, chk);
if (JSON.stringify(chk.__T) !== JSON.stringify(topics)) { console.error('직렬화 검증 실패 — 파일을 바꾸지 않았습니다.'); process.exit(2); }

const bdir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'backup');
fs.mkdirSync(bdir, { recursive: true });
const stamp = new Date().toISOString().slice(0, 10);
let bfile = path.join(bdir, `${path.basename(dataPath, '.js')}_${stamp}.js`);
for (let n = 2; fs.existsSync(bfile); n++) bfile = path.join(bdir, `${path.basename(dataPath, '.js')}_${stamp}_${n}.js`);   // 같은 날 백업은 덮어쓰지 않는다
fs.writeFileSync(bfile, src, 'utf8');
fs.writeFileSync(dataPath, out, 'utf8');
console.log(report.join('\n'));
console.log(`주제 ${topics.length}개 저장 → ${dataPath} (종전 파일은 scripts/backup/)`);
