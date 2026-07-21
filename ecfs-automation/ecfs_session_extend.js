/**
 * ecfs_session_extend.js — 전자소송포털 세션 킵얼라이브
 * -----------------------------------------------------------------------
 * ecfs-session-extend 스킬의 "방식 D"(JS setInterval 직접 API 호출)를 이식.
 * 확인된 API: POST /psp/pspsess/extendSesn.on, body {dma_param:{rn:<난수>}},
 * 쿠키 인증(credentials:'include'), 성공 시 HTTP 200 + 세션 타이머 30분 리셋.
 *
 * 원본 스킬의 한계: 브라우저 in-page setInterval은 페이지를 새로고침하거나
 * 이동하면 초기화되어 매번 재주입해야 했다. 이 모듈은 setInterval을
 * Playwright page 객체가 아니라 **Node.js 프로세스 쪽**에 둔다.
 * page.evaluate()는 매 호출 시점의 현재 문서 컨텍스트에서 fetch를 실행하므로,
 * 서버가 떠 있는 동안 페이지가 같은 도메인 내에서 이동해도 재주입이 필요 없다.
 * (완전히 다른 origin으로 이동하거나 탭이 닫히면 실패 결과가 반환되며, 그
 * 경우 상위 레이어에서 로그를 보고 사람이 재로그인해야 한다.)
 *
 * 필요 패키지: npm install playwright
 * -----------------------------------------------------------------------
 */

const EXTEND_ENDPOINT = '/psp/pspsess/extendSesn.on';

async function extendSessionOnce(page) {
  try {
    return await page.evaluate(async (endpoint) => {
      const rn = Math.floor(Math.random() * 9999999999999999);
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json;charset=UTF-8' },
          body: JSON.stringify({ dma_param: { rn } }),
        });
        return { ok: res.ok, status: res.status, at: new Date().toISOString() };
      } catch (e) {
        return { ok: false, error: String(e), at: new Date().toISOString() };
      }
    }, EXTEND_ENDPOINT);
  } catch (e) {
    // page.evaluate 자체가 실패 (탭 닫힘, 네비게이션 충돌 등)
    return { ok: false, error: `page.evaluate 실패: ${e.message}`, at: new Date().toISOString() };
  }
}

/**
 * 세션 킵얼라이브를 시작한다. 즉시 1회 실행 후 intervalMs마다 반복.
 * @returns {() => void} stop 함수 — 호출 시 clearInterval
 */
function startKeepAlive(page, { intervalMs = 5 * 60 * 1000, onResult } = {}) {
  let stopped = false;

  const run = async () => {
    if (stopped) return;
    const result = await extendSessionOnce(page);
    if (onResult) onResult(result);
    if (!result.ok) {
      console.warn(`[session-extend] 연장 실패 (${result.status || result.error}) — 재로그인/재확인 필요할 수 있음`);
    }
  };

  run(); // 즉시 1회
  const timer = setInterval(run, intervalMs);

  return () => {
    stopped = true;
    clearInterval(timer);
  };
}

module.exports = {
  EXTEND_ENDPOINT,
  extendSessionOnce,
  startKeepAlive,
};
