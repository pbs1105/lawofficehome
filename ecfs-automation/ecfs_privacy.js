/**
 * ecfs_privacy.js — 개인정보(주민번호) 로컬 추출·마스킹·정규화
 * -----------------------------------------------------------------------
 * sop_파일기반_추출_계획.md §4.5 구현.
 *
 * 목적: 03_제출확정자료 텍스트를 외부 AI(n8n AI 노드)에 보내기 전에, 주민번호를
 * 로컬에서 결정적(정규식)으로 추출하고 텍스트에서는 토큰(⟦주민번호N⟧)으로
 * 마스킹한다. 이렇게 하면 주민번호 실값은 외부 LLM으로 나가지 않는다.
 * AI는 마스킹된 텍스트에서 각 당사자가 어떤 토큰을 갖는지(ssnToken: N)만
 * 알려주고, 실제 앞6/뒤7자리는 이 모듈이 로컬 토큰맵에서 되채운다.
 *
 * 순수 함수만 있으며 외부 의존성이 없다(n8n Code 노드에 그대로 붙여 써도 됨).
 * -----------------------------------------------------------------------
 */

// 주민등록번호: 앞 6자리 + (구분자 -, ., 공백 선택) + 뒤 7자리.
// 잘못 나뉜 예("651010. 1910615")도 잡도록 구분자에 '.'과 공백을 포함한다.
const SSN_RE = /(\d{6})\s*[-.\s]?\s*(\d{7})/g;
const SSN_TOKEN_RE = /⟦주민번호(\d+)⟧/g;

// ── 법인등록번호(공개정보) 판별 ─────────────────────────────────────────
// 법인등록번호는 등기부로 누구나 열람 가능한 공개정보이므로 개인정보(주민번호)와 달리
// 마스킹 대상이 아니다. 다만 형식(6-7, 13자리)이 주민번호와 같아 아래 두 신호로 구분한다.

// 앞 6자리가 유효한 생년월일(YYMMDD)인지. 주민번호 앞6자리는 항상 유효한 날짜지만,
// 법인등록번호(등기소코드4+법인구분2)는 대개 날짜가 아니다(예: 184611→'46월', 195511→'55월').
function isBirthDate6(s6) {
  if (!/^\d{6}$/.test(s6)) return false;
  const mm = Number(s6.slice(2, 4));
  const dd = Number(s6.slice(4, 6));
  return mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31;
}

// 13자리 바로 앞(접두)에 오는 법인 상호/‘법인등록번호’ 라벨. 이 뒤의 13자리는 법인등록번호로 본다.
// ⚠️ '주민등록번호'가 여기 걸리면 주민번호가 노출되므로, 라벨은 반드시 '법인등록번호' 전체로만 매칭한다.
const CORP_CONTEXT_RE = /(법인등록번호|주식회사|주식회|\(주\)|㈜|유한회사|유한책임회사|합자회사|합명회사|재단법인|사단법인|의료법인|학교법인|영농조합법인|협동조합)\s*[:：)]?\s*$/;

// (공개정보) 법인등록번호로 판단되면 true → 마스킹 제외.
// front6가 생년월일이 아니면 주민번호일 수 없으므로 법인번호로 보존하고,
// 날짜처럼 보여도 상호/‘법인등록번호’ 라벨 바로 뒤면 법인번호로 보존한다.
// 그 외(유효 날짜 + 법인 맥락 없음)는 주민번호로 간주하여 계속 마스킹한다.
function looksLikeCorpRegNo(front6, precedingText) {
  if (!isBirthDate6(front6)) return true;
  if (CORP_CONTEXT_RE.test(precedingText || '')) return true;
  return false;
}

// 숫자 13자리 → { ssnFront, ssnBack }. 형식 아니면 null.
function normalizeSsn(raw) {
  if (raw == null) return null;
  const digits = String(raw).replace(/[^0-9]/g, '');
  if (digits.length !== 13) return null;
  return { ssnFront: digits.slice(0, 6), ssnBack: digits.slice(6) };
}

// 텍스트에서 주민번호를 모두 찾아 [{ full, ssnFront, ssnBack }] 로 반환.
function extractSsns(text) {
  if (!text) return [];
  const out = [];
  const seen = new Set();
  let m;
  SSN_RE.lastIndex = 0;
  while ((m = SSN_RE.exec(text)) !== null) {
    const front = m[1];
    const back = m[2];
    const preceding = text.slice(Math.max(0, m.index - 24), m.index);
    if (looksLikeCorpRegNo(front, preceding)) continue; // 법인등록번호(공개정보)는 주민번호 아님
    const key = front + back;
    if (seen.has(key)) continue; // 같은 주민번호 중복 제거
    seen.add(key);
    out.push({ full: front + '-' + back, ssnFront: front, ssnBack: back });
  }
  return out;
}

// 텍스트의 주민번호를 ⟦주민번호N⟧ 토큰으로 치환.
// 반환: { masked, tokens } — tokens = { '1': {ssnFront, ssnBack, full}, ... }
// 같은 주민번호는 같은 토큰 번호를 재사용한다.
function maskSsns(text) {
  const tokens = {};
  if (!text) return { masked: text || '', tokens };
  const numByKey = {};
  let next = 1;
  SSN_RE.lastIndex = 0;
  const masked = text.replace(SSN_RE, (whole, front, back, offset, str) => {
    // 법인등록번호는 공개정보 → 마스킹하지 않고 원문 그대로 둔다.
    const preceding = str.slice(Math.max(0, offset - 24), offset);
    if (looksLikeCorpRegNo(front, preceding)) return whole;
    const key = front + back;
    let n = numByKey[key];
    if (!n) {
      n = next++;
      numByKey[key] = n;
      tokens[String(n)] = { ssnFront: front, ssnBack: back, full: front + '-' + back };
    }
    return '⟦주민번호' + n + '⟧';
  });
  return { masked, tokens };
}

// AI가 돌려준 당사자 객체에 ssnToken(숫자)이 있으면 토큰맵에서 실값을 채운다.
// party.ssn(문자열)이 직접 있으면 그걸 정규화해서 쓴다. 둘 다 없으면 ssnMissing=true.
function resolvePartySsn(party, tokens) {
  const p = Object.assign({}, party);
  if (p.ssnFront && p.ssnBack) return p; // 이미 채워져 있음
  // 1) 직접 제공된 주민번호 문자열
  const direct = normalizeSsn(p.ssn || p.주민번호);
  if (direct) {
    p.ssnFront = direct.ssnFront;
    p.ssnBack = direct.ssnBack;
    delete p.ssn; delete p.주민번호;
    return p;
  }
  // 2) 토큰 참조
  const tok = p.ssnToken != null ? tokens[String(p.ssnToken)] : null;
  if (tok) {
    p.ssnFront = tok.ssnFront;
    p.ssnBack = tok.ssnBack;
    delete p.ssnToken;
    return p;
  }
  if (p.personType !== '법인') p.ssnMissing = true; // 자연인인데 주민번호 없음
  return p;
}

module.exports = {
  SSN_RE,
  SSN_TOKEN_RE,
  normalizeSsn,
  extractSsns,
  maskSsns,
  resolvePartySsn,
};
