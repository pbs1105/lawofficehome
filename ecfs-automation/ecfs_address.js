/**
 * ecfs_address.js — 한 줄 도로명 주소 → 구조화(시도/시군구/도로명/본번/부번) 보수적 파서
 * -----------------------------------------------------------------------
 * ECFS 우편번호 검색은 시도·시군구 드롭다운 + 도로명·본번·부번으로 조회한다.
 * Notion 사건DB의 한 줄 주소를 그 형식으로 나눈다. 단, 잘못 나뉘면 송달 주소가
 * 틀어질 위험이 있으므로 **확실히 도로명 주소 형식일 때만 분리**하고, 지번 주소나
 * 형식이 모호하면 절대 추측하지 않고 needsConfirmation을 반환한다(법무사 확인).
 *
 * 인식 규칙: [시도(공식 17개)] [시군구(…시/…군/…구, '…시 …구' 결합)] [읍면동(건너뜀)]
 *            [도로명(…로/…길)] [건물번호(본번[-부번])].
 * 도로명(로/길)이 없으면 지번 주소로 보고 확인 요구.
 * -----------------------------------------------------------------------
 */

const 시도목록 = [
  '서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시',
  '세종특별자치시', '경기도', '강원특별자치도', '강원도', '충청북도', '충청남도',
  '전북특별자치도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도',
];

/**
 * @param {string} raw 한 줄 주소
 * @returns {{matched:true, sido, sigungu, roadName, buildingMain, buildingSub}
 *          | {matched:false, needsConfirmation:true, reason, addressRaw}}
 */
function parseAddress(raw) {
  if (!raw || typeof raw !== 'string') return { matched: false, needsConfirmation: true, reason: '주소가 비어 있음', addressRaw: raw || null };
  const s = raw.replace(/\s+/g, ' ').trim();

  const sido = 시도목록.find((x) => s.startsWith(x));
  if (!sido) return { matched: false, needsConfirmation: true, reason: `시도를 인식하지 못함(공식 시도명으로 시작하지 않음): "${s}"`, addressRaw: s };

  const tokens = s.slice(sido.length).trim().split(' ').filter(Boolean);

  // 시군구: …시/…군/…구. '…시' 다음 '…구'면 결합(예: 창원시 의창구).
  let i = 0;
  if (!tokens[i] || !/(시|군|구)$/.test(tokens[i])) {
    return { matched: false, needsConfirmation: true, reason: `시군구를 인식하지 못함: "${s}"`, addressRaw: s };
  }
  let sigungu = tokens[i]; i += 1;
  if (/시$/.test(sigungu) && tokens[i] && /구$/.test(tokens[i])) { sigungu += ' ' + tokens[i]; i += 1; }

  // 도로명: 로/길로 끝나는 토큰(읍면동은 그 앞에서 건너뜀).
  let roadIdx = -1;
  for (let j = i; j < tokens.length; j += 1) {
    if (/(로|길)$/.test(tokens[j])) { roadIdx = j; break; }
  }
  if (roadIdx === -1) {
    return { matched: false, needsConfirmation: true, reason: `도로명(…로/…길)을 찾지 못함 — 지번 주소이거나 형식 불명: "${s}"`, addressRaw: s };
  }
  const roadName = tokens[roadIdx];

  // 건물번호: 도로명 바로 뒤 토큰이 숫자(본번[-부번]).
  const numTok = tokens[roadIdx + 1] || '';
  const m = numTok.match(/^(\d+)(?:-(\d+))?$/);
  if (!m) {
    return { matched: false, needsConfirmation: true, reason: `건물번호(도로명 뒤 숫자)를 인식하지 못함: "${numTok}" (${s})`, addressRaw: s };
  }

  return { matched: true, sido, sigungu, roadName, buildingMain: m[1], buildingSub: m[2] || '' };
}

module.exports = { 시도목록, parseAddress };
