/**
 * ecfs_audit_log.js — 감사 로그 영속 저장 (Phase 4)
 * -----------------------------------------------------------------------
 * ecfs_automation_server.js는 지금까지 busy·lastResult·progressLog를
 * 메모리에만 들고 있었다 — 서버가 재시작되면(서비스 재기동, PC 재부팅 등)
 * "방금 전 실행이 어떻게 끝났는지"가 통째로 사라진다. Phase 4는 이걸
 * 파일 기반으로 영속화한다.
 *
 * - logs/audit-YYYY-MM-DD.jsonl : 실행 시작/STEP/재시도/종료 이벤트를
 *   한 줄씩 append (JSON Lines). "누가 언제 어떤 사건에 무엇을 실행했는지"
 *   감사 추적용.
 * - logs/last_state.json : 가장 최근 실행 결과 스냅샷. 서버 재시작 직후
 *   admin 페이지가 /last-run을 호출해도 마지막 상태를 볼 수 있게 한다.
 *
 * 별도 DB를 두지 않고 파일로 처리하는 이유: 이 서버는 사무실 PC 1대에서
 * 단일 프로세스로 도는 것을 전제하므로(동시 실행 없음, busy 플래그로
 * 직렬화), 파일 append만으로 충분히 견고하고 배포가 단순하다.
 *
 * 필요 패키지: 없음 (Node 내장 fs만 사용)
 * -----------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');

const LOG_DIR = process.env.ECFS_LOG_DIR || path.join(__dirname, 'logs');

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
}

function todayLogFile() {
  const d = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return path.join(LOG_DIR, `audit-${d}.jsonl`);
}

/**
 * 감사 로그 이벤트 1건 기록.
 * @param {object} event 예: { type:'run_start'|'step'|'run_end'|'error', 사건번호, 사건_page_id, action, step, status, message, detail }
 */
function appendAuditEvent(event) {
  try {
    ensureLogDir();
    const entry = { ...event, at: new Date().toISOString() };
    fs.appendFileSync(todayLogFile(), JSON.stringify(entry) + '\n', 'utf8');
  } catch (e) {
    // 감사 로그 기록 실패는 본 흐름(실제 ECFS 자동화)을 절대 막지 않는다 — 콘솔에만 남긴다.
    console.warn('[감사로그] 기록 실패(무시하고 계속):', e.message);
  }
}

/** 최근 실행 결과 스냅샷 저장 — 서버 재시작 후에도 /last-run이 마지막 상태를 돌려줄 수 있게 함 */
function writeLastState(state) {
  try {
    ensureLogDir();
    fs.writeFileSync(
      path.join(LOG_DIR, 'last_state.json'),
      JSON.stringify({ ...state, savedAt: new Date().toISOString() }, null, 2),
      'utf8'
    );
  } catch (e) {
    console.warn('[감사로그] 상태 스냅샷 저장 실패(무시하고 계속):', e.message);
  }
}

function readLastState() {
  try {
    const p = path.join(LOG_DIR, 'last_state.json');
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.warn('[감사로그] 상태 스냅샷 읽기 실패:', e.message);
    return null;
  }
}

/** 최근 며칠치 로그 파일에서 최신 limit개 이벤트를 시간순으로 반환 (admin 페이지 이력 조회/디버깅용) */
function readRecentAuditEvents(limit = 200, days = 3) {
  ensureLogDir();
  const events = [];
  for (let i = 0; i < days; i += 1) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    const file = path.join(LOG_DIR, `audit-${d}.jsonl`);
    if (!fs.existsSync(file)) continue;
    const lines = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean);
    for (const line of lines) {
      try {
        events.push(JSON.parse(line));
      } catch {
        // 손상된 줄(예: 쓰는 도중 강제종료)은 건너뛴다
      }
    }
  }
  events.sort((a, b) => (a.at < b.at ? -1 : 1));
  return events.slice(-limit);
}

module.exports = {
  LOG_DIR,
  appendAuditEvent,
  writeLastState,
  readLastState,
  readRecentAuditEvents,
};
