/**
 * ecfs_automation_server.js — ECFS 자동화 서버 스켈레톤
 * -----------------------------------------------------------------------
 * n8n "ECFS 자동화 트리거" 워크플로우의 "Call Automation Service" 노드가
 * 호출하는 HTTP 서버. 사무실 PC 또는 별도 서버 어디서든
 *   node ecfs_automation_server.js
 * 로 실행할 수 있다. 실행 위치는 이 스크립트가 CDP로 접속할 Chrome과
 * 같은 네트워크(보통 같은 PC)에 있어야 한다 — 인증서 로그인은 그 Chrome
 * 에서 직원이 직접 해야 하기 때문.
 *
 * 흐름:
 *   1) POST /run 요청 수신 → 즉시 202 응답 (n8n 쪽도 fire-and-forget이므로
 *      여기서 오래 기다리게 하면 안 됨)
 *   2) 백그라운드에서 지정된 action(party-input 등) 실행
 *   3) 완료/실패 결과를 n8n "ECFS 자동화 콜백" 웹훅으로 POST
 *
 * Phase 3: /run-full-from-notion으로 Fill engine(ecfs_fill_engine.js) 연동 —
 * Notion 사건 페이지 ID만 넘기면 사건부DB/고객DB/상대방DB에서 당사자 정보를
 * 자동 매핑한다.
 *
 * Phase 4 (안정성/운영): ecfs_audit_log.js로 모든 실행/STEP/재시도/종료를
 * logs/*.jsonl에 영속 기록하고, 최근 실행 결과 스냅샷을 logs/last_state.json
 * 에 저장해 서버 재시작 후에도 GET /last-run으로 조회 가능. 오케스트레이터
 * STEP은 실패 시 1회 자동 재시도 후에도 안 되면 status:'failed'로 반환되고,
 * 서버가 이를 콜백 body의 needsManualReview:true로 변환해 admin 페이지에
 * "수동 확인 필요"를 노출한다. 4_install_service.bat로 Windows 서비스(nssm)
 * 등록 가능 — 서비스 중지 시 SIGTERM을 받아 세션 킵얼라이브를 정리한다.
 *
 * ⚠️ 아직 안 된 것 (알고 있는 갭)
 *   - 동시에 여러 사건을 처리하는 큐가 없다. 지금도 단일 작업이 끝나기
 *     전에 새 요청이 오면 거부한다 (busy 상태 체크) — 사무실 PC 1대·직원
 *     1명이 순차적으로 쓰는 전제라 아직은 문제되지 않지만, 다PC/다직원
 *     구성으로 확장하려면 실제 큐가 필요하다.
 *
 * 이 파일은 같은 폴더의 ecfs_party_input.js 등을 그대로 불러와 쓴다.
 * (배포 시에는 모든 ecfs_*.js 파일을 같은 디렉터리에 함께 두면 된다)
 *
 * 필요 패키지: npm install express playwright
 * 환경변수:
 *   PORT              (기본 3939)
 *   CDP_ENDPOINT       (기본 http://localhost:9222)
 *   CALLBACK_SECRET    (n8n "ECFS 자동화 콜백" 워크플로우의 secret과 반드시 동일해야 함)
 *   NOTION_API_KEY     (/run-full-from-notion 사용 시 필요 — ecfs_notion_client.js 참조)
 *   ECFS_LOG_DIR       (감사 로그 저장 위치, 기본값: 이 스크립트와 같은 폴더의 logs/)
 * -----------------------------------------------------------------------
 */

const express = require('express');
const { attachToExistingBrowser, submitPlaintiffNonMember } = require('./ecfs_party_input');
const { submitClaim } = require('./ecfs_claim_input');
const { submitCivilConsent } = require('./ecfs_civil_consent');
const { submitCaseBasicInfo } = require('./ecfs_case_basic_info');
const { clickTempSave, emergencyTempSaveWithDummy } = require('./ecfs_temp_save');
const { submitEvidenceUpload } = require('./ecfs_evidence_upload');
const { startKeepAlive } = require('./ecfs_session_extend');
const { runFullFlow } = require('./ecfs_orchestrator');
const { buildPayloadFromNotionCase } = require('./ecfs_fill_engine');
const { updatePageProperties, selectValue } = require('./ecfs_notion_client');
const { LOG_DIR, appendAuditEvent, writeLastState, readLastState, readRecentAuditEvents } = require('./ecfs_audit_log');

const PORT = process.env.PORT || 3939;
const CDP_ENDPOINT = process.env.CDP_ENDPOINT || 'http://localhost:9222';
const CALLBACK_SECRET = process.env.CALLBACK_SECRET || 'LOAS_ECFS_CALLBACK_7d4e9a2b6c1f8e3d5a0b2c4e6f8a1b3c';

// action 이름 → 실행 함수 매핑. 스킬을 추가로 포팅할 때마다 여기에 등록.
const ACTIONS = {
  'civil-consent': async (page, payload) => {
    await submitCivilConsent(page, payload);
    return { message: '전자소송 동의 완료' };
  },
  'party-input': async (page, payload) => {
    await submitPlaintiffNonMember(page, payload);
    return { message: '당사자 입력 완료' };
  },
  'claim-input': async (page, payload) => {
    await submitClaim(page, payload);
    return { message: '신청취지 및 이유 입력 완료' };
  },
  'case-basic-info': async (page, payload) => {
    await submitCaseBasicInfo(page, payload);
    return { message: '사건기본정보 입력 완료' };
  },
  'temp-save': async (page, payload) => {
    const result = payload?.emergency
      ? await emergencyTempSaveWithDummy(page, payload.requiredFieldIds || [])
      : await clickTempSave(page);
    return {
      message: result.dummyInjected ? '⚠️ 더미 임시저장 완료 — 재확인 필요' : '임시저장 완료',
      dummyInjected: !!result.dummyInjected,
    };
  },
  'evidence-upload': async (page, payload) => {
    const result = await submitEvidenceUpload(page, payload);
    return { message: `${payload?.section || ''} 소명/첨부서류 업로드 완료 (${result.uploadedCount}건)` };
  },
  // 'civil-consent'는 위에 이미 등록됨 — 선택자 실측 검증 전까지는
  // 반드시 더미 사건으로만 테스트할 것 (sop.md 4장 참조)
};

let busy = false; // 단순 동시성 제어 — v1은 한 번에 한 작업만
let lastResult = null; // 로컬 테스트용 — 마지막 콜백 결과를 메모리에 보관
let progressLog = []; // 로컬 테스트용 — run-full 진행상황 누적 (재시작 시 초기화)
let keepAliveStop = null; // 세션 킵얼라이브 중지 함수 (attach 시 1회만 시작)

// Phase 4 — 서버 재시작에도 살아남는 "마지막 실행 요약". 시작 시 디스크에서
// 복원해두면, 서비스가 방금 재기동됐어도 admin 페이지가 /last-run으로 직전
// 실행이 성공/실패했는지 바로 확인할 수 있다 (콜백URL 전송 성공 여부와 무관).
let lastRunSummary = readLastState();
if (lastRunSummary) {
  console.log(`[서버 시작] 이전 실행 기록 복원 — 마지막 실행: ${lastRunSummary.savedAt || '(시각 불명)'}, 사건: ${lastRunSummary.사건번호 || lastRunSummary.사건_page_id || '-'}, 결과: ${lastRunSummary.status || (lastRunSummary.success ? 'completed' : 'failed')}`);
}

const app = express();
app.use(express.json());

// ---------------------------------------------------------------------------
// CORS — admin 포털 페이지(전자소송자동신청.html)는 이 서버와 다른 origin
// (정적 파일로 열리거나 Vercel 등에 배포됨)에서 fetch로 호출한다. 이 서버는
// 별도 인증 없이 실제 법원 포털에 데이터를 입력하는 액션을 실행하므로,
// 허용 origin은 반드시 admin 페이지가 실제로 열리는 곳으로 한정한다 —
// '*'로 열면 직원이 그 사이 방문한 다른 웹사이트가 몰래 /run-full 등을
// 호출해 실제 사건에 잘못된 데이터를 입력시킬 수 있다(로컬 서버라도 CORS는
// 여전히 유효한 방어선).
// 운영 도메인은 환경변수 ADMIN_ORIGIN(쉼표로 구분, 예:
//   ADMIN_ORIGIN=https://admin.example.com,http://192.168.0.10:5500 )
// 으로 추가한다. localhost/127.0.0.1(모든 포트)와 file://로 직접 연 경우
// (Origin: null)는 기본 허용한다.
// ---------------------------------------------------------------------------
const ADMIN_ORIGIN_ALLOWLIST = (process.env.ADMIN_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const LOCAL_ORIGIN_RE = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

function isAllowedOrigin(origin) {
  if (!origin) return false; // Origin 헤더가 없는 요청(curl 등)은 CORS 대상이 아니므로 아래 미들웨어에서 처리 안 함
  if (origin === 'null') return true; // file://로 admin html을 직접 연 경우
  if (LOCAL_ORIGIN_RE.test(origin)) return true;
  return ADMIN_ORIGIN_ALLOWLIST.includes(origin);
}

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.get('/health', (req, res) => {
  res.json({ ok: true, busy, actions: Object.keys(ACTIONS), keepAliveActive: !!keepAliveStop, lastRunAt: lastRunSummary?.savedAt || null });
});

// ---------------------------------------------------------------------------
// Phase 4 — 감사 로그·마지막 실행 상태 조회 (admin 페이지가 폴링하거나,
// 서버가 막 재시작돼 콜백을 놓쳤을 때 사람이 직접 상태를 확인하는 용도)
// ---------------------------------------------------------------------------
app.get('/last-run', (req, res) => {
  res.json({ ok: true, lastRun: lastRunSummary });
});

app.get('/audit-log', (req, res) => {
  const limit = Math.min(parseInt(req.query.limit, 10) || 200, 1000);
  const days = Math.min(parseInt(req.query.days, 10) || 3, 30);
  res.json({ ok: true, events: readRecentAuditEvents(limit, days) });
});

// ---------------------------------------------------------------------------
// 로컬 테스트 전용 엔드포인트 — 실제 n8n 없이도 test_trigger.html에서
// /run 결과를 곧바로 확인할 수 있도록 한다. n8n 콜백 웹훅과 같은 형식(JSON
// body: 사건_page_id, secret, success, message)을 그대로 받는다.
// ---------------------------------------------------------------------------
app.post('/__test_callback', (req, res) => {
  if (req.body?.secret !== CALLBACK_SECRET) {
    return res.status(403).json({ ok: false, error: 'unauthorized' });
  }
  lastResult = { ...req.body, receivedAt: new Date().toISOString() };
  console.log('[테스트 콜백 수신]', lastResult);
  res.json({ ok: true });
});

app.get('/__last_result', (req, res) => {
  res.json({ ok: true, lastResult });
});

// run-full 진행상황 콜백 — 매 STEP마다 호출됨. /run 시작 시 초기화.
app.post('/__test_progress_callback', (req, res) => {
  if (req.body?.secret !== CALLBACK_SECRET) {
    return res.status(403).json({ ok: false, error: 'unauthorized' });
  }
  progressLog.push({ ...req.body, receivedAt: new Date().toISOString() });
  console.log('[진행상황 수신]', req.body.step, req.body.status);
  res.json({ ok: true });
});

app.get('/__last_progress', (req, res) => {
  res.json({ ok: true, progressLog });
});

app.post('/run', (req, res) => {
  const { action, 사건번호, 사건_page_id, payload, 콜백URL } = req.body || {};

  if (!action || !ACTIONS[action]) {
    return res.status(400).json({ ok: false, error: 'unknown_action', availableActions: Object.keys(ACTIONS) });
  }
  if (!사건_page_id || !콜백URL) {
    return res.status(400).json({ ok: false, error: 'missing_fields', required: ['사건_page_id', '콜백URL'] });
  }
  if (busy) {
    return res.status(409).json({ ok: false, error: 'server_busy', message: '다른 작업이 진행 중입니다. 완료 후 재시도하세요.' });
  }

  // 1) 즉시 202 응답 — n8n을 기다리게 하지 않는다
  res.status(202).json({ ok: true, status: 'accepted', 사건번호, action });

  // 2) 백그라운드 실행 (응답 이후 계속 진행 — fire-and-forget)
  busy = true;
  runAction(action, 사건_page_id, payload || {}, 콜백URL, 사건번호)
    .catch((err) => {
      console.error(`[${사건번호 || 사건_page_id}] 예기치 못한 오류:`, err);
    })
    .finally(() => {
      busy = false;
    });
});

// ---------------------------------------------------------------------------
// /run-full — STEP 1~10 전체 흐름을 한 번에 지휘 (Phase 2, ecfs_orchestrator.js)
// /run과 동일한 fire-and-forget 패턴: 즉시 202 응답 → 백그라운드 실행 →
// 완료/실패를 콜백URL로 통지. 추가로 진행콜백URL이 있으면 매 STEP마다
// 진행상황을 별도로 POST한다 (admin 페이지 실시간 진행률 표시용, 선택적).
// ---------------------------------------------------------------------------
app.post('/run-full', (req, res) => {
  const { 사건번호, 사건_page_id, payload, 콜백URL, 진행콜백URL } = req.body || {};

  if (!사건_page_id || !콜백URL) {
    return res.status(400).json({ ok: false, error: 'missing_fields', required: ['사건_page_id', '콜백URL'] });
  }
  if (!payload?.caseBasicInfo && !payload?.resumeFrom) {
    return res.status(400).json({ ok: false, error: 'missing_payload', message: 'payload.caseBasicInfo가 필요함 (resumeFrom으로 재개하는 경우는 예외)' });
  }
  if (busy) {
    return res.status(409).json({ ok: false, error: 'server_busy', message: '다른 작업이 진행 중입니다. 완료 후 재시도하세요.' });
  }

  res.status(202).json({ ok: true, status: 'accepted', 사건번호, action: 'run-full' });

  progressLog = []; // 새 실행 시작 — 이전 진행 로그 초기화 (로컬 테스트 편의용)
  busy = true;
  runFullAction(사건_page_id, payload || {}, 콜백URL, 진행콜백URL, 사건번호)
    .catch((err) => {
      console.error(`[${사건번호 || 사건_page_id}] run-full 예기치 못한 오류:`, err);
    })
    .finally(() => {
      busy = false;
    });
});

// ---------------------------------------------------------------------------
// /run-full-from-notion — Fill engine (Phase 3, ecfs_fill_engine.js)
// admin 페이지가 사건 Notion 페이지 ID만 넘기면 서버가 사건부DB/고객DB/
// 상대방DB를 조회해 당사자 정보를 자동 매핑한다. 법적 판단이 필요한 값
// (caseBasicInfo, claim 등)은 overrides로 반드시 같이 받아야 한다 —
// ecfs_fill_engine.js의 buildPayloadFromCase 문서 참조.
// 실행 시작/완료/실패를 사건부DB의 "전자소송자동화상태" 필드에 되쓴다
// (best-effort — Notion 쓰기가 실패해도 전체 흐름은 막지 않음).
// ---------------------------------------------------------------------------
app.post('/run-full-from-notion', (req, res) => {
  const { 사건번호, notion_case_page_id, overrides, 콜백URL, 진행콜백URL } = req.body || {};

  if (!notion_case_page_id || !콜백URL) {
    return res.status(400).json({ ok: false, error: 'missing_fields', required: ['notion_case_page_id', '콜백URL'] });
  }
  if (!overrides?.caseBasicInfo || !overrides?.claim) {
    return res.status(400).json({
      ok: false,
      error: 'missing_overrides',
      message: 'overrides.caseBasicInfo, overrides.claim은 법무사 판단 영역이라 Fill engine이 자동 채우지 않음 — 반드시 함께 전달할 것',
    });
  }
  if (busy) {
    return res.status(409).json({ ok: false, error: 'server_busy', message: '다른 작업이 진행 중입니다. 완료 후 재시도하세요.' });
  }

  res.status(202).json({ ok: true, status: 'accepted', 사건번호, action: 'run-full-from-notion' });

  progressLog = [];
  busy = true;
  runFullFromNotionAction(notion_case_page_id, overrides, 콜백URL, 진행콜백URL, 사건번호)
    .catch((err) => {
      console.error(`[${사건번호 || notion_case_page_id}] run-full-from-notion 예기치 못한 오류:`, err);
    })
    .finally(() => {
      busy = false;
    });
});

// ---------------------------------------------------------------------------
// Phase 4 — 공용 헬퍼: STEP 진행상황을 콘솔+진행콜백URL+감사로그 3곳에 동시에
// 남기고, 실행이 끝나면 lastRunSummary를 메모리+디스크에 함께 반영한다.
// ---------------------------------------------------------------------------
function makeStepReporter(action, casePageId, caseNo, progressCallbackUrl) {
  const label = caseNo || casePageId;
  return (step, status, detail) => {
    console.log(`[${label}] ${step} → ${status}`, detail || '');
    appendAuditEvent({ type: 'step', action, 사건번호: caseNo, 사건_page_id: casePageId, step, status, detail });
    if (progressCallbackUrl) {
      notifyCallback(progressCallbackUrl, {
        사건_page_id: casePageId,
        secret: CALLBACK_SECRET,
        step,
        status,
        detail,
      }).catch((e) => console.warn(`[${label}] 진행콜백 실패(무시하고 계속):`, e.message));
    }
  };
}

/**
 * 실행 종료 시점에 lastRunSummary를 메모리+디스크(logs/last_state.json)에
 * 동시에 반영하고, 감사로그에 run_end 이벤트를 남긴다. 서버가 재시작돼도
 * /last-run이 이 값을 그대로 돌려줄 수 있게 하는 것이 Phase 4의 핵심.
 */
function recordRunEnd(summary) {
  lastRunSummary = summary;
  writeLastState(summary);
  appendAuditEvent({ type: 'run_end', ...summary });
}

async function updateNotionStatusSafe(casePageId, statusName) {
  try {
    await updatePageProperties(casePageId, { 전자소송자동화상태: selectValue(statusName) });
  } catch (e) {
    console.warn(`[${casePageId}] Notion 상태 갱신 실패(무시하고 계속) — 수동 확인 필요:`, e.message);
  }
}

async function runFullFromNotionAction(casePageId, overrides, callbackUrl, progressCallbackUrl, caseNo) {
  const label = caseNo || casePageId;
  const action = 'run-full-from-notion';
  appendAuditEvent({ type: 'run_start', action, 사건번호: caseNo, 사건_page_id: casePageId });
  try {
    console.log(`[${label}] run-full-from-notion 시작 — Notion에서 사건 정보 조회 중`);
    await updateNotionStatusSafe(casePageId, '진행중');

    const payload = await buildPayloadFromNotionCase(casePageId, overrides);

    const attached = await attachToExistingBrowser(CDP_ENDPOINT);
    const page = attached.page;
    ensureKeepAlive(page);

    const result = await runFullFlow(page, payload, {
      onStep: makeStepReporter(action, casePageId, caseNo, progressCallbackUrl),
    });

    console.log(`[${label}] run-full-from-notion 종료 — ok:${result.ok} status:${result.status}`);
    // STEP 8.5(가압류신청 진술서)로 블록된 경우는 "실패"가 아니라 여전히 "진행중"으로 남긴다
    await updateNotionStatusSafe(casePageId, result.ok ? '완료' : (result.status === 'blocked' ? '진행중' : '실패'));

    // Phase 4 — 실패(status:'failed')만 "수동 확인 필요"로 표시한다. 'blocked'는
    // 법무사의 정상적인 개입 지점(진술서 확인)이라 오류가 아니다.
    const needsManualReview = result.status === 'failed';

    recordRunEnd({
      action,
      사건번호: caseNo,
      사건_page_id: casePageId,
      success: result.ok,
      status: result.status,
      stoppedAt: result.stoppedAt,
      needsManualReview,
      emergencySaved: result.emergencySaved || false,
      message: result.error || result.stoppedAt || null,
    });

    await notifyCallback(callbackUrl, {
      사건_page_id: casePageId,
      secret: CALLBACK_SECRET,
      success: result.ok,
      status: result.status,
      needsManualReview,
      message: result.ok
        ? '전체 흐름 완료 (STEP 1~10) — 최종 제출 전 반드시 직접 검토할 것'
        : `흐름 중단: ${result.stoppedAt || result.error}${needsManualReview ? ' — 수동 확인 필요' : ''}`,
      stoppedAt: result.stoppedAt,
      log: result.log,
    });
  } catch (err) {
    console.error(`[${label}] run-full-from-notion 실패:`, err.message);
    await updateNotionStatusSafe(casePageId, '실패');
    recordRunEnd({
      action,
      사건번호: caseNo,
      사건_page_id: casePageId,
      success: false,
      status: 'failed',
      needsManualReview: true,
      message: err.message,
    });
    await notifyCallback(callbackUrl, {
      사건_page_id: casePageId,
      secret: CALLBACK_SECRET,
      success: false,
      status: 'failed',
      needsManualReview: true,
      message: `${err.message} — 수동 확인 필요`,
    }).catch((cbErr) => {
      console.error(`[${label}] 콜백 통지 실패 — 수동 확인 필요:`, cbErr.message);
    });
  }
}

async function runFullAction(casePageId, payload, callbackUrl, progressCallbackUrl, caseNo) {
  const label = caseNo || casePageId;
  const action = 'run-full';
  appendAuditEvent({ type: 'run_start', action, 사건번호: caseNo, 사건_page_id: casePageId });
  try {
    console.log(`[${label}] run-full 시작`);
    const attached = await attachToExistingBrowser(CDP_ENDPOINT);
    const page = attached.page;
    ensureKeepAlive(page);

    const result = await runFullFlow(page, payload, {
      onStep: makeStepReporter(action, casePageId, caseNo, progressCallbackUrl),
    });

    console.log(`[${label}] run-full 종료 — ok:${result.ok} status:${result.status}`);
    const needsManualReview = result.status === 'failed';

    recordRunEnd({
      action,
      사건번호: caseNo,
      사건_page_id: casePageId,
      success: result.ok,
      status: result.status,
      stoppedAt: result.stoppedAt,
      needsManualReview,
      emergencySaved: result.emergencySaved || false,
      message: result.error || result.stoppedAt || null,
    });

    await notifyCallback(callbackUrl, {
      사건_page_id: casePageId,
      secret: CALLBACK_SECRET,
      success: result.ok,
      status: result.status,
      needsManualReview,
      message: result.ok
        ? '전체 흐름 완료 (STEP 1~10) — 최종 제출 전 반드시 직접 검토할 것'
        : `흐름 중단: ${result.stoppedAt || result.error}${needsManualReview ? ' — 수동 확인 필요' : ''}`,
      stoppedAt: result.stoppedAt,
      log: result.log,
    });
  } catch (err) {
    console.error(`[${label}] run-full 실패:`, err.message);
    recordRunEnd({
      action,
      사건번호: caseNo,
      사건_page_id: casePageId,
      success: false,
      status: 'failed',
      needsManualReview: true,
      message: err.message,
    });
    await notifyCallback(callbackUrl, {
      사건_page_id: casePageId,
      secret: CALLBACK_SECRET,
      success: false,
      status: 'failed',
      needsManualReview: true,
      message: `${err.message} — 수동 확인 필요`,
    }).catch((cbErr) => {
      console.error(`[${label}] 콜백 통지 실패 — 수동 확인 필요:`, cbErr.message);
    });
  }
}

function ensureKeepAlive(page) {
  if (keepAliveStop) return;
  keepAliveStop = startKeepAlive(page, {
    onResult: (r) => {
      if (!r.ok) console.warn('[세션 킵얼라이브] 실패 — 직원 재로그인 필요할 수 있음:', r);
    },
  });
  console.log('[세션 킵얼라이브] 시작 (5분 간격)');
}

async function runAction(action, casePageId, payload, callbackUrl, caseNo) {
  const label = caseNo || casePageId;
  appendAuditEvent({ type: 'run_start', action, 사건번호: caseNo, 사건_page_id: casePageId });
  try {
    console.log(`[${label}] ${action} 시작`);
    const attached = await attachToExistingBrowser(CDP_ENDPOINT);
    const page = attached.page;

    ensureKeepAlive(page);

    const result = await ACTIONS[action](page, payload);

    console.log(`[${label}] ${action} 완료`);
    recordRunEnd({
      action,
      사건번호: caseNo,
      사건_page_id: casePageId,
      success: true,
      status: 'completed',
      needsManualReview: false,
      message: result?.message || '완료',
    });
    await notifyCallback(callbackUrl, {
      사건_page_id: casePageId,
      secret: CALLBACK_SECRET,
      success: true,
      status: 'completed',
      needsManualReview: false,
      message: result?.message || '완료',
      법원사건번호: result?.법원사건번호 || undefined,
    });
  } catch (err) {
    console.error(`[${label}] ${action} 실패:`, err.message);
    recordRunEnd({
      action,
      사건번호: caseNo,
      사건_page_id: casePageId,
      success: false,
      status: 'failed',
      needsManualReview: true,
      message: err.message,
    });
    await notifyCallback(callbackUrl, {
      사건_page_id: casePageId,
      secret: CALLBACK_SECRET,
      success: false,
      status: 'failed',
      needsManualReview: true,
      message: `${err.message} — 수동 확인 필요`,
    }).catch((cbErr) => {
      // 콜백 자체가 실패하면 최소한 로그로 남긴다 — 직원이 로그를 보고 수동 확인해야 함
      console.error(`[${label}] 콜백 통지 실패 — 수동 확인 필요:`, cbErr.message);
    });
  }
  // 브라우저는 직원이 계속 쓸 수 있어야 하므로 닫지 않는다.
  // (attachToExistingBrowser는 기존 세션에 "붙는" 것뿐, 새로 띄운 게 아님)
}

async function notifyCallback(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`콜백 응답 실패: HTTP ${res.status}`);
  }
}

// ---------------------------------------------------------------------------
// Phase 4 — 정상 종료 처리. Windows 서비스(nssm)가 서비스 중지/재시작을
// 요청하면 SIGTERM을 보낸다. 여기서 세션 킵얼라이브를 먼저 멈춰야 종료
// 도중에도 불필요한 API 호출이 나가지 않는다. (진행 중이던 브라우저 작업은
// 강제로 끊지 않고 프로세스만 종료 — 브라우저 자체는 직원이 계속 쓴다.)
// ---------------------------------------------------------------------------
function shutdown(signal) {
  console.log(`[서버] ${signal} 수신 — 종료 절차 시작`);
  if (keepAliveStop) {
    try {
      keepAliveStop();
      console.log('[세션 킵얼라이브] 중지');
    } catch (e) {
      console.warn('[세션 킵얼라이브] 중지 실패(무시):', e.message);
    }
  }
  process.exit(0);
}
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

app.listen(PORT, () => {
  console.log(`ECFS 자동화 서버 실행 중 — http://localhost:${PORT}`);
  console.log(`CDP 접속 대상: ${CDP_ENDPOINT}`);
  console.log(`등록된 action: ${Object.keys(ACTIONS).join(', ')}`);
  console.log(`감사 로그 디렉터리: ${LOG_DIR}`);
});
