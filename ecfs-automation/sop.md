# 전자소송(ECFS) 자동화 SOP — Claude 비의존 실행 체계

LOAS 법무사 업무 자동화 시스템 — admin 페이지 트리거 기반 ECFS 자동화 표준운영절차

버전: v0.9 (2026-07-21) — `ecfs_dryrun_test_SOP.docx`(v0.1, Claude 컴퓨터 사용 기반 드라이런)를 대체.
v0.1의 실측 검증 결과(DOM ID, 이벤트 처리 방식)는 4장에 그대로 승계했다.
v0.3: Phase 1 스킬 포팅 완료(civil-consent 실측 검증 제외) — 3장·5장·6장 갱신.
v0.4: **Phase 1 전체 완료.** 더미 신규 사건(대여금)에서 civil-consent 체크박스·버튼, case-basic-info 청구구분·소가 필드, evidence-upload 버튼/필드 ID를 Claude in Chrome으로 실측 대조하고 실제로 사건기본정보 등록까지 성공시킴 ("등록되었습니다" 팝업 확인). 인증서 로그인은 법무사가 직접 수행, Claude는 로그인 이후 화면 조작만 담당.
v0.5: **Phase 2 완료.** `ecfs_orchestrator.js`로 STEP 1~10을 한 번에 지휘하는 `/run-full` 엔드포인트 추가. 원고/피고(자연인·법인·비법인) 전체 흐름, 진행상황 콜백, STEP 8.5(가압류신청 진술서) 차단 로직 포함.
v0.6: **Phase 3 완료.** 실제 Notion 사건부DB/고객DB/상대방DB 스키마를 조사해 `ecfs_fill_engine.js`로 당사자 정보 자동 매핑 + `/run-full-from-notion` 엔드포인트 추가. 사건부DB에 이미 있던 "전자소송자동화상태"·"법원사건번호" 필드에 실행 상태를 되쓴다.
v0.7: **Phase 4 완료.** `ecfs_audit_log.js`로 실행/STEP/재시도/종료 이벤트를 파일(JSONL)에 영속 기록하고 마지막 실행 결과를 서버 재시작 후에도 조회 가능(`GET /last-run`, `GET /audit-log`). 오케스트레이터 STEP에 1회 자동 재시도를 추가하고, 재시도까지 실패하면 콜백에 `needsManualReview:true`를 실어 admin 페이지가 "수동 확인 필요"를 표시할 수 있게 함. `4_install_service.bat`(nssm)로 Windows 서비스화, 서비스 중지 시 세션 킵얼라이브를 정리하는 정상 종료 처리 추가.
v0.9: **admin 포털에 실행 화면 통합.** 직원이 개발자용 로컬 테스트 페이지(`test_trigger.html`, JSON textarea 직접 편집) 대신 admin 포털(`admin/portal.html` → 사이드바 "제출 > 전자소송 신청")에서 폼 기반으로 실행할 수 있도록 `admin/전자소송자동신청.html`을 새로 만들고 `js/admin.js`에 라우팅을 연결했다(9장 참조). Notion 사건 페이지 ID(URL 붙여넣기 허용) + 사건기본정보/청구취지·이유 폼 + 소명서류 파일경로 입력만으로 `/run-full-from-notion`을 호출하고, STEP별 진행상황을 스텝퍼로 보여준다. 개별 STEP 재실행(복구용)과 감사로그 조회는 `<details>`로 접어 고급 기능으로 남겨뒀다. admin 페이지가 자동화 서버와 다른 origin에서 열릴 수 있어 서버에 origin 화이트리스트 기반 CORS를 추가했다(`ADMIN_ORIGIN` 환경변수, localhost/127.0.0.1/file://는 기본 허용) — 인증 없는 이 서버에 아무 origin이나 허용하면 직원이 그 사이 방문한 다른 사이트가 실제 사건에 잘못된 데이터를 입력시킬 수 있어 반드시 필요한 제한이다. `test_trigger.html`은 삭제하지 않고 원본 개발자 테스트 도구로 그대로 남겨둔다.
v0.8: **Phase 5 라이브 종단 테스트 1회 실시(진행 중).** 사무실 PC에서 서버+디버그 Chrome을 실제로 구동해 더미 사건에 `/run-full`을 여러 차례 실행하며 실측. 이 과정에서 실제 코드 버그 2건을 발견해 수정: (1) "확인" 버튼을 정규식 부분일치로 찾던 5개 파일이 소장 작성 화면(모든 섹션이 한 페이지에 렌더링됨)의 다른 "OO확인" 버튼과 혼동되는 문제 — exact:true로 수정, (2) 반복 실행 중 유령 모달 배경(`#_modal`)이 이후 클릭을 계속 막는 문제 — 클릭 전 방어 로직 추가. STEP1(전자소송 동의)은 실측 성공 확인, STEP2 이후는 오염된 더미 사건 특유의 문제로 추정되는 모달 이슈에 막혀 미완주 — 새 더미 사건으로 재검증 필요.

---

## 1. 목적 및 배경

기존에는 Claude(컴퓨터 사용/Chrome 확장)가 SOP 스킬 문서를 읽고 화면을 직접 클릭·입력하는 방식으로 ecfs.scourt.go.kr 소장 작성을 자동화했다. 이 문서는 그 자동화를 **Claude 없이** admin 페이지에서 직원이 버튼 클릭만으로 실행할 수 있도록 전환하는 절차와 아키텍처를 정의한다.

목적은 두 가지다.

1. Claude가 매번 화면을 해석·조작하는 대신, 이미 검증된 조작 로직을 Playwright 스크립트로 고정해 **빠르고 재현 가능하게** 실행한다.
2. 인증서 로그인·최종 제출 등 법적 책임이 걸린 지점은 여전히 직원이 직접 수행하도록 **안전 경계를 그대로 유지**한다.

## 2. 전체 아키텍처

```
admin 페이지 (버튼 클릭, 사건 Notion 페이지 ID 전달)
   │
   ▼
로컬 자동화 서버 (사무실 PC, ecfs_automation_server.js)
   │  POST /run-full-from-notion { notion_case_page_id, overrides, 콜백URL }
   │  즉시 202 응답 (fire-and-forget)
   ▼
Fill engine (ecfs_fill_engine.js + ecfs_notion_client.js)
   │  사건부DB → 고객DB(원고)·상대방DB(피고) 관계 조회 → payload 자동 매핑
   │  (법원명·소가·청구취지/원인 등 법적 판단 값은 overrides로 별도 공급)
   ▼
오케스트레이터 (ecfs_orchestrator.js) → Playwright → CDP로 기존 Chrome에 접속
   │  (직원이 인증서로 이미 로그인해 둔 세션)
   ▼
ecfs.scourt.go.kr 화면 조작 (동의 → 사건기본정보 → 당사자 → 청구취지/원인 → 소명서류 → 임시저장)
   │  각 STEP 실패 시 1회 자동 재시도(ecfs_orchestrator.withStepRetry) → 그래도
   │  실패하면 긴급 임시저장 후 종료
   ▼
결과를 콜백URL로 POST(needsManualReview 플래그 포함) + 사건부DB "전자소송자동화상태"·"법원사건번호" 되쓰기
   │  동시에 ecfs_audit_log.js가 logs/audit-*.jsonl(전체 이력)·logs/last_state.json
   │  (마지막 실행 스냅샷)에 영속 기록 — 서버 재시작 후에도 GET /last-run·
   │  GET /audit-log로 조회 가능
   ▼
admin 페이지 / n8n → 상태 갱신, needsManualReview:true인 사건은 "수동 확인 필요"로 표시
```

서버는 `4_install_service.bat`(nssm)로 Windows 서비스 등록해 로그인 없이도 상시 구동할 수 있다 — 인증서 로그인용 Chrome(`2_start_chrome_debug.bat`)은 여전히 직원이 매일 직접 열고 로그인해야 한다(서비스화 대상 아님).

핵심 전제: 인증서 로그인은 자동화 대상이 아니다. 직원이 아침에 Chrome(디버그 모드, `2_start_chrome_debug.bat`)을 열고 인증서로 로그인해 두면, 이후 사건별 실행은 admin 페이지 버튼 → 서버 액션 호출로 처리된다.

n8n을 앞단에 두는 구성(원래 설계)도 여전히 유효하다 — n8n 워크플로우가 `/run-full-from-notion`을 호출하는 HTTP 노드 하나만 있으면 되고, Fill engine 로직 자체는 서버 쪽에 있으므로 n8n 쪽 매핑 로직은 필요 없다.

## 3. 현재 구현 상태 (Phase 0~4 모두 완료)

| 구성 요소 | 상태 | 비고 |
|---|---|---|
| 로컬 서버 (`ecfs_automation_server.js`) | 완료 | `/run`(단일 액션), `/run-full`(STEP 1~10, payload 직접 전달), `/run-full-from-notion`(Notion 사건 ID만 전달), `/health`, `/last-run`, `/audit-log`, 콜백 전송(needsManualReview 포함), busy 플래그, attach 시 세션 킵얼라이브 자동 시작, SIGTERM/SIGINT 정상 종료 |
| 감사 로그 (`ecfs_audit_log.js`) | 완료 (Phase 4) | 실행/STEP/재시도/종료 이벤트를 `logs/audit-YYYY-MM-DD.jsonl`에 append, 마지막 실행 스냅샷을 `logs/last_state.json`에 저장. 서버 재시작에도 살아남음. 오프라인 단위 테스트(기록→읽기) 통과 |
| Notion 클라이언트 (`ecfs_notion_client.js`) | 완료 (라이브 미검증) | REST API로 페이지 조회/속성 갱신. `NOTION_API_KEY` 필요. rich_text 속성 쓰기(`richTextValue`)는 실측 안 됨 |
| Fill engine (`ecfs_fill_engine.js`) | 완료, 매핑 로직 단위 테스트 통과 | 사건부DB+고객DB+상대방DB → payload 자동 매핑. 주소는 자동 분리하지 않고 명시적으로 막음(아래 갭 참조) |
| 오케스트레이터 (`ecfs_orchestrator.js`) | 라이브 부분 검증 (STEP1 성공, STEP2 이후 미완주) | STEP 1~10 순차 실행, resumeFrom으로 중간 재개, STEP 8.5 가압류신청 진술서 차단, 각 STEP 1회 자동 재시도(`withStepRetry`) 후 실패 시 긴급 임시저장. 2026-07-21 라이브 테스트에서 STEP1(전자소송 동의) 종단 성공 확인. STEP2 이후는 유령 모달 배경 문제로 미완주 — 새 더미 사건으로 재검증 필요(6장 Phase 5 참조) |
| Windows 서비스화 (`4_install_service.bat`) | 완료 (라이브 미검증) | nssm 기반 서비스 등록 스크립트. 로그·환경변수 설정 안내 포함. 실제 사무실 PC에서 nssm 설치·서비스 등록·기동까지는 아직 해보지 않음 |
| 당사자 입력 (`ecfs_party_input.js`) | 실측 검증(원고) / 미검증(피고) | 원고 비회원 dry-run 확인. 피고 자연인(`submitDefendant`)은 v0.1 dry-run에서 Claude가 성공시킨 절차를 재현한 것이라 Playwright 재검증 필요 |
| 청구취지·청구원인 (`ecfs_claim_input.js`) | 실측 검증 완료 | textarea execCommand, CKEditor setData 확인 |
| 전자소송 동의 (`ecfs_civil_consent.js`) | 실측 검증 완료 | 동의 체크박스(`mf_pfwork_cbx_agree_input_0`), 당사자작성 버튼(`mf_pfwork_btn_btprt`) 실측 확인. "동의 입증서류 첨부"는 별도 팝업이 아니라 첨부서류 섹션(evidence-upload)에서 처리한다는 사실도 정정함 |
| 사건기본정보 (`ecfs_case_basic_info.js`) | 실측 검증 완료 | 사건명 '기타' 직접입력 필드 ID가 스킬 문서 추정과 달랐던 점, 청구구분 라디오가 value로 구분 안 되는 점(id로 구분해야 함)을 확인해 반영. 더미 사건에 실제로 사건명·소가 입력 후 [등록] → "등록되었습니다" 팝업까지 확인 |
| 세션 킵얼라이브 (`ecfs_session_extend.js`) | 완료 | Node 쪽 setInterval + `/psp/pspsess/extendSesn.on` 직접 호출, 서버 attach 시 자동 시작 |
| 임시저장 (`ecfs_temp_save.js`) | 완료 | 실측 버튼 ID `mf_pfwork_btn_tmpSave` 사용, 긴급 더미 임시저장 fallback 포함 |
| 소명서류·첨부서류 업로드 (`ecfs_evidence_upload.js`) | 버튼/필드 ID 실측 검증 완료 | prvDocmt·atch 섹션의 파일찾기/목록추가/등록/서류명 필드 ID가 실제 DOM과 100% 일치 확인. 그리드 셀 쓰기(파일 업로드 후 서증번호 등 수정)는 빈 그리드라 이번엔 검증 못함 — 첫 실사건 업로드 때 확인 필요 |
| 등록 버튼 공용 유틸 (`ecfs_safe_register.js`) | 완료 (Phase 5에서 2건 수정) | 팝업/그리드행수/필드초기화 3중 검증 + 재시도 로직. "확인" 버튼 exact:true로 수정, 클릭 전 유령 모달 배경 정리(`clearStuckModalIfBlocking`) 추가 — 두 수정 모두 라이브 테스트로 필요성 확인, 후자는 완전한 해결까지는 재검증 필요 |
| 로컬 테스트 페이지 (`test_trigger.html`) | 완료 | 개별 6개 액션 + 전체 흐름(run-full) 진행상황 폴링 + Phase 4 운영/감사 조회(`/last-run`, `/audit-log`) 섹션 |
| 실행 스크립트 (`1_install.bat`, `2_start_chrome_debug.bat`, `3_start_server.bat`, `4_install_service.bat`) | 완료 | 1~3은 수동 실행, 4는 Windows 서비스(nssm) 등록용(선택) |

## 4. dry-run(v0.1)에서 확인된 화면 동작 — 그대로 승계

2026-07 더미 데이터(원고 홍길동/피고 김철수, 대여금 1,000만원) 드라이런으로 확인된 사항. 신규 모듈 포팅 시 아래 규칙을 우선 적용한다.

- 사건명 드롭다운: 마우스 클릭 시 Nexacro 버그 발생 가능 → **JavaScript value 설정 + change 이벤트**로 처리.
- 원고(자연인) 주민번호·이름: 네이티브 value setter는 반영 안 됨 → **`document.execCommand('insertText', ...)`** 필수.
- 청구원인: **CKEditor `setData()`**로 정상 입력, 2,000자 이내면 별지 첨부 불필요.
- 등록 버튼(사건기본정보/당사자/청구취지·원인): 좌표 클릭 방식 정상 동작, `'등록되었습니다'` 팝업으로 성공 여부 검증.
- 세션 킵얼라이브(방식 D, setInterval): 5분 간격 재연장, 즉시 실행 시 HTTP 200 확인.
- 임시저장 버튼: `mf_pfwork_btn_tmpSave` 좌표 클릭 → `'임시저장이 완료되었습니다'` 팝업 확인.
- 미검증(v0.1 범위 밖): 소명서류·첨부서류 업로드(WebSquare2), 가압류·가처분 STEP 8.5 진술서 체크리스트, 관할법원/소가 자동 판단.

## 5. 남은 갭

1. **오케스트레이터 end-to-end 라이브 부분 검증** — 2026-07-21 라이브 테스트로 `/run-full`의 STEP1(전자소송 동의)까지는 실제 더미 사건에서 종단 성공 확인. STEP2(사건기본정보) 이후는 유령 모달 배경 문제(갭 12 참조)로 완주하지 못함 — 새 더미 사건으로 STEP10(최종 임시저장)까지 재검증 필요.
2. **피고 자연인 절차(`submitDefendant`/`fillDefendantNatural`) 미검증** — v0.1 dry-run에서 Claude가 성공시킨 절차를 Playwright로 재현한 것이라 실측 대조 필요 (인격구분 드롭다운 값 '자연인'이 정확한지 등).
3. **evidence-upload 그리드 셀 쓰기 미검증** — 파일을 실제로 업로드해 그리드에 행이 생긴 뒤 서증번호·가지번호·서류명 셀에 triple-click+type이 실제로 반영되는지는 다음 실사건/더미 파일 테스트에서 확인 필요.
4. **의도적으로 자동화하지 않는 영역**: jurisdiction-determine(관할법원 판단), litigation-value-calculate(소가 계산), affidavit-checklist(가압류신청 진술서) — 이 셋은 법적 판단·법무사 직접 작성이 필요한 영역이라 DOM 자동화 대상이 아니다. `/run-full` 호출 전에 법원명·소가는 이미 확정돼 있어야 하고, 진술서가 필요한 사건은 `payload.requiresAffidavit`로 명시해 오케스트레이터가 첨부서류 업로드 직전에 멈추도록 설계했다.
5. **Fill engine 라이브 미검증** — `NOTION_API_KEY` 발급·DB 통합 초대·실제 사건 페이지로 `/run-full-from-notion` 호출을 아직 한 번도 안 해봤다. `updatePageProperties`의 rich_text 쓰기 포맷("법원사건번호" 등)도 미검증.
6. **주소 자동 분리 안 함(의도적)** — 사건부DB 계열은 주소를 한 줄 텍스트로만 갖고 있고, ecfs_party_input.fillAddress는 시도/시군구/도로명/본번 구조화 입력을 요구한다. Fill engine은 이 간극을 자동으로 메우지 않고 `needsManualAddressSplit` 에러로 막는다 — 실사건에 적용하려면 이 부분을 채워줄 방법(직접입력 모드 포팅 또는 admin 폼에서 주소 재입력)이 Phase 4/5에서 필요.
7. **법인 원고 미지원** — `ecfs_party_input.js`가 개인 원고만 지원해서, Fill engine은 원고 주민번호 형식이 아니면(법인등록번호로 추정) 명시적으로 에러를 던지고 멈춘다.
8. ~~**동시성/영속성**~~ — 2026-07-21 Phase 4에서 해소. `ecfs_audit_log.js`가 모든 실행/STEP/재시도/종료를 `logs/*.jsonl`에 영속 기록하고 `logs/last_state.json`에 마지막 실행 스냅샷을 저장해, 서버가 재시작돼도 `GET /last-run`·`GET /audit-log`로 조회할 수 있다. (단, `busy`·in-memory `progressLog`는 여전히 재시작 시 초기화됨 — 이건 의도된 동작으로, 재시작 직후엔 실제로 진행 중인 작업이 없기 때문.) 다PC/다직원 동시 처리를 위한 진짜 큐는 아직 없음(현재는 사무실 PC 1대·순차 처리 전제라 문제 없음).
9. ~~**서버 상시 구동**~~ — 2026-07-21 Phase 4에서 스크립트 완성. `4_install_service.bat`(nssm)로 Windows 서비스 등록 가능, SIGTERM 수신 시 세션 킵얼라이브를 정리하는 정상 종료 처리 추가. **다만 실제 사무실 PC에 nssm을 설치하고 서비스로 등록·기동해보는 것은 아직 안 했다** — Phase 5 파일럿 전에 1회 확인 필요.
10. ~~**STEP 재시도가 실제 오류 상황에서 검증되지 않음**~~ — 2026-07-21 라이브 테스트에서 해소. STEP2 타임아웃 상황에서 `withStepRetry`가 실제로 1회 재시도 후 `status:'failed'`로 전환하고 `EMERGENCY_TEMP_SAVE`로 넘어가는 전체 경로가 실측으로 확인됐다(재시도 자체가 이번에 발견된 모달 버그를 "해결"하진 못했지만, 재시도·이관 메커니즘 자체는 설계대로 동작함).
11. **더미 테스트 사건 정리 필요** — v0.1·Phase 1 dry-run과 이번 Phase 5 라이브 테스트 중 '나의전자소송 → 작성중서류'에 사건명 "대여금"(소가 10,000,000원) 더미 사건이 여러 건 생성·반복 등록 시도됨. 실제 사건이 아니므로 전부 삭제 권장 — 특히 Phase 5에서 반복 등록을 시도한 사건은 위 갭 12의 원인일 수 있어 재사용하지 말고 삭제할 것.
12. **[신규, 미해결] 유령 모달 배경(`#_modal`)이 반복 실행 중 클릭을 계속 차단** — 2026-07-21 라이브 테스트에서 발견. 같은 더미 사건에 `/run-full`을 여러 차례 재시도하자, 화면엔 아무 팝업도 안 보이는데 `#_modal`이 DOM에 남아 사건기본정보 등록·임시저장 클릭이 전부 30초 타임아웃으로 막혔다. `ecfs_safe_register.clearStuckModalIfBlocking`(ESC 키 → 안 되면 표시 숨김)을 클릭 직전에 넣었지만, 넣은 뒤에도 같은 오염된 더미 사건에서는 문제가 재현돼 — 유령 배경이 아니라 반복 등록 시도로 뜨는 **실제 확인/경고 대화상자**일 가능성이 있다. 완전히 새 더미 사건에서 처음부터 재현되는지 아직 확인 못함 — Phase 5 재검증의 최우선 항목.
13. ~~**"확인" 버튼 정규식 부분일치로 인한 오클릭**~~ — 2026-07-21 발견 즉시 수정 완료. `ecfs_case_basic_info.js`·`ecfs_claim_input.js`·`ecfs_party_input.js`·`ecfs_safe_register.js`·`ecfs_temp_save.js` 5개 파일에서 `/확인/` 정규식 부분일치를 `exact:true`로 교체. 소장 작성 화면은 모든 섹션이 한 페이지에 렌더링돼 있어 "사용자정보확인" 같은 다른 버튼과 이름이 겹칠 수 있다는 것이 근본 원인(6장 Phase 5 참조).

## 6. 단계별 실행 계획

### Phase 1 — 나머지 스킬 Playwright 포팅 ✅ 완료 (2026-07-21)

기존 스킬 문서(SKILL.md)에 이미 실측된 DOM ID·API가 충분히 담겨 있던 5개 모듈은 라이브 브라우저 테스트 없이 코드 포팅을 완료했다.

- `ecfs_safe_register.js` — 공용 유틸로 분리, 팝업/그리드행수/필드초기화 3중 검증 + 재시도. Playwright의 `locator.click()`이 스크롤·실제 마우스클릭을 자동 처리하므로 원본 스킬의 좌표 계산 단계는 불필요해짐.
- `ecfs_case_basic_info.js` — 법원·사건명 드롭다운(JS value + change 이벤트), '기타' 사건명 직접입력(execCommand) 실측 반영. 청구구분 라디오 value·소가 필드 ID·등록버튼 셀렉터는 스킬 문서에도 없던 항목이라 TODO로 남김.
- `ecfs_session_extend.js` — 확인된 API(`POST /psp/pspsess/extendSesn.on`)를 Node 쪽 setInterval로 이식. 원본은 페이지 이동 시 킵얼라이브가 초기화됐지만, Node 쪽에 두면 `page.evaluate`가 매번 현재 문서 컨텍스트에서 실행되어 재주입이 불필요해짐(개선).
- `ecfs_temp_save.js` — 실측 버튼 ID(`mf_pfwork_btn_tmpSave`)로 정상 임시저장 구현 + 긴급 더미데이터 fallback(`emergencyTempSaveWithDummy`, 더미 삽입 시 `dummyInjected` 플래그로 admin 페이지에 경고 가능).
- `ecfs_evidence_upload.js` — WebSquare2 그리드 셀 수정(triple-click+type, execCommand 불가 확인됨) 그대로 유지. 단, 파일 업로드는 원본의 MutationObserver+aria-label 우회 대신 Playwright `setInputFiles()`로 단순화(숨김 input에도 직접 동작, OS 파일탐색기 불필요).

**라이브 검증 결과 (2026-07-21, 더미 신규 사건):** 법무사가 인증서로 로그인한 Chrome에 Claude in Chrome으로 접속해 civil-consent·case-basic-info·evidence-upload의 실제 DOM ID를 대조했다.

- civil-consent: 동의 체크박스 `mf_pfwork_cbx_agree_input_0`, 당사자작성 버튼 `mf_pfwork_btn_btprt` 확인. "동의 입증서류 첨부"는 별도 팝업이 아니라 첨부서류(atch) 섹션에서 처리한다는 것도 확인해 로직을 정정함.
- case-basic-info: 사건명 '기타' 직접입력 필드 ID가 스킬 문서 추정(`csBas_tbx_csNm`)과 달리 실제로는 `csBas_ibx_saNm`이었고, 청구구분 라디오는 두 옵션 모두 `value="on"`이라 id로만 구분 가능하다는 것을 발견해 수정. 더미 사건(대여금, 소가 10,000,000원)에 실제로 입력 후 [등록] 클릭 → "등록되었습니다" 팝업까지 확인.
- evidence-upload: prvDocmt·atch 섹션의 파일찾기/목록추가/등록/서류명 필드 ID가 코드와 100% 일치 확인. 단, 그리드 셀 쓰기는 파일을 실제로 올려야 검증 가능해 이번엔 확인하지 못함.

가압류·가처분 진술서(affidavit-checklist)는 자동화 대상이 아니다. admin 화면에 체크리스트만 노출하고, 문장 작성은 법무사가 직접 한다 — 이 원칙은 그대로 유지한다.

### Phase 2 — 오케스트레이션 서버 확장 ✅ 완료 (2026-07-21)

`ecfs_orchestrator.js`의 `runFullFlow(page, payload, opts)`가 ecfs-orchestrator 스킬의 STEP 1~10을 그대로 지휘한다. `ecfs_automation_server.js`에 `POST /run-full` 엔드포인트를 추가해 사건 하나를 통째로 트리거할 수 있다.

**STEP ↔ 코드 매핑**

| STEP | 처리 |
|---|---|
| 1 전자소송 동의 | `submitCivilConsent` |
| 2 사건기본정보 | `submitCaseBasicInfo(payload.caseBasicInfo)` — 법원명·소가는 호출 전에 이미 확정돼 있어야 함(STEP 2.0/2.1은 자동화 대상 아님) |
| 3 세션 킵얼라이브 | 서버가 attach 시 이미 시작해둠 (`ensureKeepAlive`) |
| 4 당사자 루프 | `payload.parties` 배열 순회, role별로 `submitPlaintiffNonMember`/`submitDefendant` 호출, 1명마다 `extendSessionOnce` |
| 5 임시저장(더미) | **생략** — CKEditor 더미 삽입 미검증 위험 + Node 킵얼라이브로 세션 만료 위험 자체가 낮아짐. 필요하면 `payload.tempSaveAfterParties=true`로 선택적 정상 임시저장 시도 가능 |
| 6 청구취지·원인 | `submitClaim(payload.claim)` |
| 7 임시저장 | `clickTempSave` (당사자+청구 모두 채워진 뒤라 더미 불필요) |
| 8 세션 연장 | `extendSessionOnce` |
| 8.5 가압류신청 진술서 | `payload.requiresAffidavit=true`이고 화면에 안내 배너가 실제로 보이는데 `payload.affidavitAcknowledged`가 없으면 흐름을 멈추고 `'blocked'` 반환. 법무사 작성 확인 후 `resumeFrom:'evidence', affidavitAcknowledged:true`로 재호출 |
| 9 소명서류·첨부서류 | `payload.evidence` 배열(섹션별) 순회, `submitEvidenceUpload` |
| 10 최종 임시저장 | `clickTempSave` |

각 STEP 완료/차단/실패 시 `opts.onStep(step, status, detail)`이 호출되고, 서버는 이를 `진행콜백URL`(선택)로 즉시 전달한다. 도중 예외가 나면 `emergencyTempSaveWithDummy`로 긴급 저장을 시도한 뒤 실패로 종료한다. `resumeFrom`으로 중간 지점부터 재개할 수 있어 STEP 8.5 차단이나 세션 문제로 멈췄을 때 처음부터 다시 돌 필요가 없다.

원본 스킬과 달리 STEP 5(더미 임시저장)를 기본 생략한 이유는 6장 서술 참조. STEP 2.0(관할법원)·2.1(소가)·8.5(진술서)는 법적 판단/법무사 작성이 필요해 여전히 자동화 밖이며, 호출 전에 이미 확정된 값을 payload로 넘기는 방식을 유지한다.

### Phase 3 — Fill engine (사건 DB → payload) ✅ 완료 (2026-07-21)

실제 Notion 워크스페이스를 조사해 사건부DB·고객DB·상대방DB 스키마를 확인했다. 특히 사건부DB에 **"전자소송자동화상태"(대기/진행중/완료/실패)와 "법원사건번호" 필드가 이미 만들어져 있었다** — 이 자동화를 염두에 두고 미리 설계돼 있던 것으로 보여, 그대로 상태 write-back 대상으로 사용했다.

**스키마 매핑**

| Notion 필드 | 용도 |
|---|---|
| 사건부DB.신규사건카테고리 | `'민사소송'`이 아니면 Fill engine이 즉시 거부 |
| 사건부DB.고객DB(고객명) relation | → 원고 (고객DB.고객명/주민등록번호/주소(본점)/휴대폰/전화/이메일) |
| 사건부DB.상대방 relation | → 피고 (상대방DB.상대방명/구분(개인·법인)/주민(법인)등록번호/주소/연락처) |
| 사건부DB.전자소송자동화상태 | 실행 시작 시 '진행중', 성공 시 '완료', 실패 시 '실패'로 되쓰기 (best-effort) |
| 사건부DB.법원사건번호 | (아직 미사용 — 법원이 사건번호를 부여하는 시점은 제출 이후라 이 자동화 범위 밖) |

**Fill engine이 절대 추측하지 않는 것** (overrides로 반드시 공급): `caseBasicInfo`(사건명·청구구분·소가·법원명), `claim`(청구취지·청구원인), 당사자 주소의 구조화된 값(시도/시군구/도로명/본번 — Notion엔 한 줄 텍스트로만 있음), 피고가 법인인 경우 대표자구분·성명(상대방DB에 없는 필드). 이 값들이 없으면 `buildPayloadFromCase`가 무엇이 부족한지 구체적으로 알려주는 에러를 던지고 멈춘다 — 조용히 잘못된 값으로 진행하지 않는다.

**엔드포인트**: `POST /run-full-from-notion { notion_case_page_id, overrides, 콜백URL, 진행콜백URL }` — 내부적으로 `buildPayloadFromNotionCase` → `runFullFlow` 순으로 호출한다. `overrides.parties`를 직접 주면 자동 매핑을 완전히 대체할 수 있어(다자 당사자, 법인 원고 등 미지원 케이스 우회용), 자동화 범위를 넘는 사건도 이 엔드포인트 하나로 처리 가능하다.

**설정 필요**: `NOTION_API_KEY` 환경변수(Notion 내부 통합 토큰) + 사건부DB·고객DB·상대방DB 각각에 그 통합을 "연결"로 초대해야 한다(자세한 절차는 `ecfs_notion_client.js` 상단 주석 참조). 이건 사무실 PC에서 1회만 하면 되는 설정이고, 아직 이 문서 작성 시점에는 실제로 발급·연결하지 않았다.

### Phase 4 — 안정성/운영 ✅ 완료 (2026-07-21)

목표 네 가지(감사 로그 영속화, 실패 시 "수동 확인 필요" 표시, STEP 단위 자동 재시도, 서비스화) 모두 코드/스크립트 작성 완료. 실제 사무실 PC에 서비스로 등록해 상시 구동해보는 것은 아직 안 했다(5장 갭 #9 참조).

**1) 감사 로그 영속화 (`ecfs_audit_log.js`)**

기존에는 `busy`·`lastResult`·`progressLog`가 서버 메모리에만 있어서, 서버가 재시작되면(서비스 재기동, PC 재부팅) 직전 실행이 어떻게 끝났는지 통째로 사라졌다. 이제 모든 실행 시작(`run_start`)·STEP 진행(`step`, 재시도 포함)·종료(`run_end`) 이벤트를 `logs/audit-YYYY-MM-DD.jsonl`에 한 줄씩 append하고, 가장 최근 실행 결과는 `logs/last_state.json`에 별도 스냅샷으로 저장한다. `GET /last-run`으로 마지막 실행 결과를, `GET /audit-log?limit=&days=`로 최근 이력을 조회할 수 있다 — admin 페이지가 콜백을 놓쳤거나 서버가 막 재시작됐어도 상태를 확인할 수 있는 안전판이다. DB 대신 파일(JSONL)을 쓴 이유는 이 서버가 사무실 PC 1대에서 단일 프로세스로 동작한다는 전제(동시성 없음, `busy` 플래그로 이미 직렬화)라 파일 append만으로 충분히 견고하고 배포가 단순하기 때문이다.

**2) STEP 단위 자동 재시도 (`ecfs_orchestrator.js`의 `withStepRetry`)**

기존에도 `ecfs_safe_register.js`가 [등록] 버튼 클릭 자체는 재시도했지만, 그 앞의 필드 채우기까지 포함한 STEP 전체가 일시적으로 실패하는 경우는 방어되지 않았다. `withStepRetry(stepFn, {retries=1, delayMs=1500, onRetry})`로 STEP 1(동의)·2(사건기본정보)·4(당사자, 1명씩)·6(청구취지·원인)·7/10(임시저장)·9(소명서류 업로드)를 감싸, 실패 시 1.5초 뒤 1회 재시도(총 2회 시도)한다. 재시도 시 `onStep(step, 'retrying', {attempt, message})`이 호출되어 진행콜백·감사로그 양쪽에 남는다. 재시도까지 실패하면 예외를 그대로 던져 기존 `EMERGENCY_TEMP_SAVE` 절차로 넘어간다 — 이 지점이 "자동 재시도 후 사람에게 이관"이 실제로 일어나는 곳이다. `withStepRetry` 자체는 mock 함수로 오프라인 단위 테스트(1회 실패 후 성공 케이스, 재시도까지 모두 실패하는 케이스)를 통과했다.

**3) 실패 시 admin 페이지에 "수동 확인 필요" 표시**

`runFullFlow`의 반환값에 `status: 'completed' | 'blocked' | 'failed'`를 추가했다(`blocked`는 STEP 8.5 진술서 확인처럼 법무사의 정상적인 개입이 필요한 경우, `failed`는 재시도까지 실패한 진짜 오류). 서버는 `status === 'failed'`일 때만 콜백 body와 `lastRunSummary`에 `needsManualReview: true`를 실어 보낸다 — admin 페이지는 이 플래그 하나만 보고 "수동 확인 필요" 배지를 띄우면 된다. `blocked`는 오류가 아니라 법무사가 진술서 작성을 확인하고 재호출해야 하는 정상 흐름이라 `needsManualReview`를 세우지 않는다.

**4) Windows 서비스화 (`4_install_service.bat`)**

nssm(Non-Sucking Service Manager) 기반으로 `node ecfs_automation_server.js`를 서비스로 등록하는 스크립트를 작성했다. 서비스 stdout/stderr는 `logs/service-*.log`로 로테이션 저장되고, 자동 시작(`SERVICE_AUTO_START`)으로 설정된다. `CALLBACK_SECRET`·`NOTION_API_KEY` 등 환경변수는 nssm이 사용자 환경변수를 자동 상속하지 않으므로 `nssm set ... AppEnvironmentExtra ...`로 별도 주입해야 한다는 점을 스크립트 안내 메시지에 명시했다. 서버 쪽에는 `SIGTERM`/`SIGINT` 핸들러를 추가해 서비스 중지 시 세션 킵얼라이브 `setInterval`을 정리하고 깔끔히 종료하도록 했다. **주의**: 인증서 로그인용 Chrome(`2_start_chrome_debug.bat`)은 이 서비스에 포함되지 않는다 — 여전히 직원이 매일 직접 열고 인증서로 로그인해야 하며, 이 원칙은 안전 원칙(7장)과 동일하게 유지된다.

### Phase 5 — 실사건 파일럿 & 전환 🟡 진행 중 (2026-07-21, 라이브 종단 테스트 1회 실시)

**목표였던 것**: 더미 데이터로 `/run-full` STEP 1~10 전체(소명서류 업로드 포함, 실제 파일로)를 실제 사무실 PC + 디버그 Chrome + 실제 ECFS 포털에서 종단 실행해보고, 통과하면 실사건 1~2건 파일럿으로 넘어간다.

**실제로 한 것**: 법무사가 사무실 PC에서 `3_start_server.bat`(서버)와 `2_start_chrome_debug.bat`(디버그 Chrome)를 직접 실행하고 인증서로 로그인, 더미 신규 사건(대여금)의 "전자소송 동의" 화면까지 연 상태에서, Claude가 Chrome 확장(별도의 일반 Chrome 탭)으로 `POST /run-full`을 직접 호출해 여러 차례 실행하며 문제를 찾고 그 자리에서 고쳤다. **이 과정에서 실제 코드 버그 2건을 발견해 수정했고, 이 버그 수정은 코드 변경 자체로 가치가 있다** — 아래 정리.

**발견·수정된 버그 1 — "확인" 버튼 부분일치 오매칭 (중대, 5개 파일)**

ecfs.scourt.go.kr의 "소장" 작성 화면은 사건기본정보·당사자·법정대리인·청구취지·청구원인·입증서류·첨부서류 섹션이 **전부 하나의 긴 페이지에 함께 렌더링**되어 있다(좌측 메뉴는 화면 전환이 아니라 그 안에서의 스크롤 앵커일 뿐). 그런데 `ecfs_case_basic_info.js`·`ecfs_claim_input.js`·`ecfs_party_input.js`·`ecfs_safe_register.js`·`ecfs_temp_save.js` 5개 파일이 모두 `page.getByRole('button', { name: /확인/ })`처럼 **정규식 부분일치**로 "확인" 버튼을 찾고 있었다. 이 페이지에는 당사자 섹션의 "사용자정보확인" 버튼처럼 이름에 "확인"이 들어간 버튼이 항상 같이 떠 있어서, 부분일치 검색이 지금 다루는 팝업과 무관한 엉뚱한 버튼을 집어 클릭을 시도하다가 모달 배경(`#_modal`)에 가로막혀 **30초간 멈추는 현상**이 실측으로 재현됐다(사건기본정보 등록 직후, 임시저장 팝업 처리 직후 모두에서 발생). 특히 `ecfs_temp_save.js`의 `handleTempSavePopup`은 이 버튼의 `isVisible()` 여부로 "팝업이 떴는지"를 판단하는 로직이었는데, 이 버튼이 팝업과 무관하게 항상 떠 있다 보니 **임시저장이 성공했는데도 팝업이 뜬 것으로 오판해 엉뚱한 버튼을 클릭할 뻔한** 더 심각한 잠재 위험도 있었다. 5곳 모두 `exact: true`로 정확히 "확인"이라는 이름의 버튼만 찾도록 수정했다. 수정 후 재실행에서 STEP1(전자소송 동의)이 실제로 성공했고, STEP2(사건기본정보)도 이번엔 정확한 등록 버튼(`mf_pfwork_wfm_csBas_btn_save`)을 올바르게 찾아가는 것까지 확인했다(다만 아래 버그 2 때문에 클릭 자체는 계속 막힘).

**발견·수정된 버그 2 — 유령 모달 배경 잔류 (원인 미확정, 방어 로직만 추가)**

같은 더미 사건에 반복적으로 `/run-full`을 재시도하는 과정에서, 화면에는 아무 팝업도 안 보이는데 `<div id="_modal" class="w2modal_popup"></div>`가 DOM에 남아 이후의 **모든** 클릭(사건기본정보 등록, 임시저장 등)을 계속 가로막는 현상이 발생했다. 법무사가 직접 화면을 봐도 팝업이 안 보인다고 확인했고, 페이지 새로고침(F5) 직후에는 일시적으로 풀렸지만 재시도를 몇 차례 더 반복하자 다시 막혔다. `ecfs_safe_register.js`에 `clearStuckModalIfBlocking(page)`를 추가해 클릭 시도 전에 이 배경이 실제로 화면을 막고 있는지 확인하고, ESC 키로 안 사라지면 배경 요소의 표시만 숨기는 방어 로직을 `safeRegisterClick`과 `clickTempSave`에 넣었다 — 이 조치 자체는 어떤 버튼도 클릭하지 않는 순수 화면 정리라 "JavaScript `.click()` 금지" 원칙과 무관하다. **다만 이 방어 로직을 넣은 뒤에도 같은 더미 사건에서 문제가 재현**됐는데, 이는 유령 배경이 아니라 **같은 사건기본정보를 반복 등록 시도하면서 뜨는 실제 확인/경고 대화상자**(예: "이미 등록된 사건기본정보를 수정하시겠습니까?" 류)일 가능성이 높다고 판단된다 — 즉, 반복 테스트로 인한 오염된 더미 사건 상태의 부작용일 수 있다는 뜻이다. **완전히 새로운 더미 사건에서 처음 1회 등록 시도만으로도 이 문제가 재현되는지는 아직 확인하지 못했다** — 다음 라이브 테스트에서 반드시 새 더미 사건으로 처음부터 재검증할 것.

**검증된 것**: STEP1(전자소송 동의)이 실제 라이브 환경에서 `/run-full`을 통해 성공적으로 완료되는 것을 확인(회차 PHASE5_TEST_3). Phase 4에서 만든 운영 기능들도 전부 실제 실패 상황에서 의도대로 동작하는 것을 확인했다 — STEP 실패 시 1회 자동 재시도 후 `status:'failed'`로 전환, 콜백에 `needsManualReview:true` 반영, 감사로그(`/audit-log`)에 재시도·실패 이벤트 기록, 서버 재시작 후에도 `/last-run`이 직전 실행 결과를 정확히 복원.

**아직 검증 못한 것**: STEP2(사건기본정보) 이후 ~ STEP10(최종 임시저장)까지 이어지는 종단 흐름. 피고 자연인 절차, 청구취지·원인 등록, 소명서류 실제 파일 업로드(테스트용 `테스트증거.pdf` 준비는 완료)는 모두 이 모달 문제에 막혀 이번 회차에서 확인하지 못했다.

**후속 조치 필요**:
1. 이번 테스트로 오염된 더미 사건(사건명 "대여금", 여러 차례 사건기본정보 재등록 시도됨)은 삭제 권장 — '나의전자소송 → 작성중서류'에서 확인.
2. **완전히 새 더미 사건**으로 STEP1부터 다시 종단 테스트 — 모달 문제가 반복 재현되는지, 아니면 오염된 세션에서만 나던 문제였는지 확정.
3. 만약 새 사건에서도 재현되면, `clearStuckModalIfBlocking`을 더 정교하게(모달 안의 실제 텍스트를 읽어 "예"/"확인"/"취소" 중 안전한 선택을 판단하는 방식으로) 보강 필요.
4. 통과하면 실제 사건 1~2건 파일럿(직원 입회)으로 진행.

## 7. 안전 원칙 (모든 Phase에서 불변)

- 인증서 로그인은 자동화하지 않는다 — 직원이 매번 직접 수행.
- 최종 제출(작성완료 → 제출)·전자서명은 자동화 범위 밖 — 항상 임시저장 상태까지만 자동화하고 직원이 최종 검토 후 제출.
- 원고(채권자·신청인 포함)는 예외 없이 **비회원 직접입력**.
- 전자소송 동의는 반드시 **당사자작성** — 대리인작성 절대 선택 금지 (법무사법 제2조 제1항 제7호 근거).
- 가압류·가처분 신청 진술서는 법무사가 직접 작성 — 자동 생성하지 않는다.
- 모든 등록/제출 액션은 성공 팝업으로 결과를 검증한 뒤에만 다음 단계로 진행한다.

## 8. 검증 계획

1. ~~civil-consent·case-basic-info 실측 선택자 확보~~ — 2026-07-21 완료 (4장·6장 참조).
2. **`/run-full`로 더미 사건 end-to-end 1회 실행** — 원고 1명 + 피고(자연인) 1명 + 청구취지/원인 + (선택) 소명서류까지 이어붙여서 실제로 STEP10까지 도달하는지 확인. 피고 자연인 절차·evidence-upload 그리드 셀 쓰기를 이 테스트에서 함께 확인.
3. 세션 만료·팝업 미검출 등 예외 상황 강제 재현 후 재시도/이관(`resumeFrom`) 로직 확인.
4. STEP 8.5 차단 로직 확인 — 가압류·가처분 더미 사건으로 `requiresAffidavit:true` 설정 후 실제로 흐름이 멈추는지, `affidavitAcknowledged:true`로 재호출 시 이어서 진행되는지 확인.
5. **Fill engine 라이브 연결** — `NOTION_API_KEY` 발급, 사건부DB·고객DB·상대방DB에 통합 초대 → 더미 사건 페이지 1건으로 `/run-full-from-notion` 실제 호출 → payload 매핑 결과가 기대대로 나오는지, "전자소송자동화상태" 필드가 실제로 갱신되는지 확인.
6. **Windows 서비스 등록 라이브 테스트** — 사무실 PC에 nssm 설치 → `4_install_service.bat` 실행 → 환경변수 설정 → 서비스 시작 → `/health` 응답 확인 → PC 재부팅 후 서비스가 자동 기동되는지, `logs/last_state.json`이 재시작 전 상태를 그대로 보여주는지 확인.
7. **재시도·수동확인 흐름 강제 재현** — 일부러 존재하지 않는 selector를 넣거나 네트워크를 잠깐 끊어 STEP을 실패시킨 뒤, `withStepRetry`가 실제로 1회 재시도하는지(콘솔 로그·`/audit-log`의 `status:'retrying'` 이벤트로 확인), 재시도까지 실패하면 콜백에 `needsManualReview:true`가 실리는지 확인.
8. 실사건 파일럿 2건 — 직원 입회, Claude 기반 흐름과 결과 대조.
9. 파일럿 통과 후 admin 페이지 기본 실행 경로로 전환 (Phase 5).

## 9. 관련 파일

- `ecfs_automation_server.js` — 로컬 자동화 서버 (`/run` 단일 액션 6개 + `/run-full` 전체 흐름 + `/run-full-from-notion` Notion 연동 + `/last-run`·`/audit-log` 운영 조회, attach 시 세션 킵얼라이브 자동 시작, SIGTERM/SIGINT 정상 종료)
- `ecfs_audit_log.js` — 감사 로그 영속 저장 (Phase 4, JSONL append + 마지막 실행 스냅샷, 오프라인 단위 테스트 통과)
- `ecfs_orchestrator.js` — STEP 1~10 순차 지휘 + STEP 단위 1회 자동 재시도(`withStepRetry`) (Phase 2/4, STEP1 라이브 검증 완료, STEP2 이후 미완주 — 6장 Phase 5 참조)
- `ecfs_notion_client.js` — Notion REST API 클라이언트 (Phase 3, 라이브 미검증, `NOTION_API_KEY` 필요)
- `ecfs_fill_engine.js` — 사건부DB → payload 자동 매핑 (Phase 3, 매핑 로직 단위 테스트 통과)
- `ecfs_civil_consent.js` — 전자소송 동의 (실측 검증 완료)
- `ecfs_party_input.js` — 원고(실측 검증 완료) / 피고 자연인·법인·비법인(`submitDefendant`, 자연인은 미검증)
- `ecfs_claim_input.js` — 실측 검증 완료
- `ecfs_case_basic_info.js` — 사건기본정보 (실측 검증 완료)
- `ecfs_session_extend.js` — 세션 킵얼라이브 (Node 쪽 setInterval)
- `ecfs_temp_save.js` — 임시저장 + 긴급 더미저장 fallback
- `ecfs_evidence_upload.js` — 소명서류·첨부서류 업로드 + 그리드 셀 수정 (버튼/필드 ID 검증 완료, 그리드 셀 쓰기는 미검증)
- `ecfs_safe_register.js` — 등록 버튼 공용 안전 클릭 유틸 (Phase 5: "확인" 버튼 exact 매칭 수정, `clearStuckModalIfBlocking` 방어 로직 추가 — 완전 해결 여부는 재검증 필요)
- `test_trigger.html` — 로컬 수동 테스트 UI (개발자용, 개별 6개 액션 + 전체 흐름 진행상황 폴링 + Phase 4 운영/감사 조회) — 직원용 실행 화면은 아래 admin 페이지 참조
- `../admin/전자소송자동신청.html` (admin 저장소) — 직원용 실행 화면 (Phase 6, 폼 기반 Notion 연동 실행 + 진행 스텝퍼 + 개별 STEP 복구 + 감사로그 조회). `../admin/js/admin.js`(→ 실제 경로 `js/admin.js`) 사이드바 "제출 > 전자소송 신청"(`submit-ecfs`)에서 iframe으로 로드됨
- `1_install.bat`, `2_start_chrome_debug.bat`, `3_start_server.bat` — 실행 스크립트 (수동)
- `4_install_service.bat` — Windows 서비스(nssm) 등록 스크립트 (Phase 4, 선택 사용, 라이브 미검증)
- `logs/` — 감사 로그(`audit-YYYY-MM-DD.jsonl`)·마지막 실행 스냅샷(`last_state.json`)·서비스 stdout/stderr 저장 위치 (Phase 4, 서버 최초 실행 시 자동 생성, 2026-07-21 라이브 테스트로 실전 동작 확인)
- `테스트증거.pdf` — Phase 5 라이브 테스트용 더미 소명서류 파일 (실사건 아님, 필요 없으면 삭제 가능)
- `phase5_pilot_runbook.md` — Phase 5 재검증·실사건 파일럿용 직원 체크리스트 (Claude 없이도 따라 할 수 있는 절차 문서)
