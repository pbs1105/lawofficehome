/**
 * ecfs_notion_client.js — Notion REST API 최소 클라이언트
 * -----------------------------------------------------------------------
 * Fill engine(ecfs_fill_engine.js)이 사건부DB/고객DB/상대방DB를 읽고,
 * 완료 후 "전자소송자동화상태"·"법원사건번호"를 되쓰기 위해 사용한다.
 *
 * 이 서버는 Claude(이 대화)와 별개로 사무실 PC에서 독립 실행되므로,
 * Claude의 Notion MCP 연결과는 무관하게 자체 Notion Integration 토큰이
 * 필요하다.
 *
 * 사전 준비:
 *   1) https://www.notion.so/my-integrations 에서 내부 통합(Internal
 *      Integration) 생성 후 토큰 발급
 *   2) 사건부DB·고객DB·상대방DB 각각에서 "연결" 메뉴로 이 통합을 초대
 *      (Notion은 통합을 명시적으로 초대한 DB만 접근 허용)
 *   3) 환경변수로 설정: NOTION_API_KEY=secret_xxx (3_start_server.bat 또는
 *      OS 환경변수에 등록)
 *
 * 필요 패키지: 없음 (Node 18+ 전역 fetch 사용 — ecfs_automation_server.js의
 * notifyCallback과 동일한 방식)
 * -----------------------------------------------------------------------
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

// 사건부DB(제목: "사건번호-고객명-사건명", 사건번호 formula는 YYMMDD_NN).
// 사건번호 → 페이지 id 해석에 사용한다. 워크스페이스가 바뀌면 환경변수로 덮어쓴다.
const CASE_DB_ID = process.env.CASE_DB_ID || '2f70ce34-50b8-8090-a77b-ef2ecdb1d20d';
const CASE_TITLE_PROP = process.env.CASE_TITLE_PROP || '사건번호-고객명-사건명';

function authHeaders() {
  const key = process.env.NOTION_API_KEY;
  if (!key) {
    throw new Error('환경변수 NOTION_API_KEY가 설정되지 않음 — sop.md의 Fill engine 설정 안내 참고');
  }
  return {
    Authorization: `Bearer ${key}`,
    'Notion-Version': NOTION_VERSION,
    'Content-Type': 'application/json',
  };
}

async function getPage(pageId) {
  const res = await fetch(`${NOTION_API_BASE}/pages/${pageId}`, { headers: authHeaders() });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Notion 페이지 조회 실패 (${pageId}): HTTP ${res.status} ${text}`);
  }
  return res.json();
}

async function updatePageProperties(pageId, properties) {
  const res = await fetch(`${NOTION_API_BASE}/pages/${pageId}`, {
    method: 'PATCH',
    headers: authHeaders(),
    body: JSON.stringify({ properties }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Notion 페이지 갱신 실패 (${pageId}): HTTP ${res.status} ${text}`);
  }
  return res.json();
}

/**
 * Notion property 객체(API 원형)를 읽기 쉬운 JS 값으로 평탄화한다.
 * 지원 범위는 이 프로젝트의 사건부DB/고객DB/상대방DB 스키마 기준
 * (title, rich_text, select, multi_select, number, relation, rollup,
 * formula, date, email, phone_number, url, people, created_time).
 */
function extractPropertyValue(prop) {
  if (!prop) return null;
  switch (prop.type) {
    case 'title':
      return (prop.title || []).map((t) => t.plain_text).join('');
    case 'rich_text':
      return (prop.rich_text || []).map((t) => t.plain_text).join('');
    case 'select':
      return prop.select?.name ?? null;
    case 'multi_select':
      return (prop.multi_select || []).map((s) => s.name);
    case 'number':
      return prop.number;
    case 'checkbox':
      return prop.checkbox;
    case 'date':
      return prop.date; // { start, end, time_zone } | null
    case 'email':
      return prop.email;
    case 'phone_number':
      return prop.phone_number;
    case 'url':
      return prop.url;
    case 'relation':
      return (prop.relation || []).map((r) => r.id);
    case 'people':
      return (prop.people || []).map((p) => p.name || p.id);
    case 'formula':
      return extractPropertyValue({ type: prop.formula.type, [prop.formula.type]: prop.formula[prop.formula.type] });
    case 'rollup':
      if (prop.rollup.type === 'array') {
        return (prop.rollup.array || []).map((v) => extractPropertyValue(v));
      }
      return extractPropertyValue({ type: prop.rollup.type, [prop.rollup.type]: prop.rollup[prop.rollup.type] });
    case 'created_time':
      return prop.created_time;
    default:
      return null; // files, status 등 이 프로젝트에서 아직 안 쓰는 타입 — 필요 시 추가
  }
}

function extractAllProperties(page) {
  const out = {};
  for (const [key, prop] of Object.entries(page.properties || {})) {
    out[key] = extractPropertyValue(prop);
  }
  return out;
}

/** 페이지를 조회해 속성만 평탄화된 형태로 바로 반환하는 편의 함수 */
async function getPageProperties(pageId) {
  const page = await getPage(pageId);
  return extractAllProperties(page);
}

/** select 속성 갱신용 헬퍼 — { propertyName: value } 형태로 여러 개 한 번에 구성 */
function selectValue(name) {
  return { select: name ? { name } : null };
}

/** rich_text(우리 프로젝트에서 "text"로 표기된 필드) 속성 갱신용 헬퍼
 *  ⚠️ Notion 공식 API의 실제 타입명은 rich_text다. 라이브 1회 갱신 테스트로
 *  이 프로젝트 필드들이 정말 rich_text인지 확인 필요 (sop.md 갭 참조). */
function richTextValue(content) {
  return { rich_text: content ? [{ type: 'text', text: { content } }] : [] };
}

// -------------------------------------------------------------------------
// 사건번호 → 사건부DB 페이지 조회
// -------------------------------------------------------------------------
async function queryDatabase(databaseId, body) {
  const res = await fetch(`${NOTION_API_BASE}/databases/${databaseId}/query`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(body || {}),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Notion DB 조회 실패 (${databaseId}): HTTP ${res.status} ${text}`);
  }
  return res.json();
}

// 사건번호(YYMMDD_NN, 분기 YYMMDD_NN_NN 등) → { pageId, title, caseNo }
// 제목이 "사건번호-고객명-사건명" 형식이므로, title starts_with로 후보를 좁힌 뒤
// 맨 앞 '-' 이전 토큰이 입력 사건번호와 '정확히' 일치하는 행만 채택한다.
// (사건번호에는 '-'가 없고 '_'만 있으므로 260722_01 과 260722_01_01 을 안전하게 구분한다.)
async function findCaseByNumber(caseNumber) {
  const num = String(caseNumber == null ? '' : caseNumber).trim();
  if (!num) throw new Error('사건번호가 비어 있음');
  const data = await queryDatabase(CASE_DB_ID, {
    filter: { property: CASE_TITLE_PROP, title: { starts_with: num } },
    page_size: 25,
  });
  const rows = (data.results || []).map((p) => {
    const titleArr = (p.properties && p.properties[CASE_TITLE_PROP] && p.properties[CASE_TITLE_PROP].title) || [];
    const title = titleArr.map((x) => x.plain_text).join('');
    return { pageId: p.id, title, caseNo: title.split('-')[0].trim() };
  });
  const exact = rows.filter((r) => r.caseNo === num);
  if (exact.length === 1) return exact[0];
  if (exact.length === 0) {
    throw new Error(`사건번호 '${num}'에 해당하는 사건을 사건부DB에서 찾지 못했습니다. 사건번호를 확인하거나, Notion 통합이 사건부DB에 연결(초대)돼 있는지 확인하세요.`);
  }
  throw new Error(`사건번호 '${num}'에 해당하는 사건이 ${exact.length}건 있습니다 — 사건번호 중복 여부를 Notion에서 확인하세요.`);
}

module.exports = {
  NOTION_API_BASE,
  CASE_DB_ID,
  getPage,
  getPageProperties,
  updatePageProperties,
  extractPropertyValue,
  extractAllProperties,
  selectValue,
  richTextValue,
  queryDatabase,
  findCaseByNumber,
};
