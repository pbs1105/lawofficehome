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

module.exports = {
  NOTION_API_BASE,
  getPage,
  getPageProperties,
  updatePageProperties,
  extractPropertyValue,
  extractAllProperties,
  selectValue,
  richTextValue,
};
