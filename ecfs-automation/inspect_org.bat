@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ================================================
echo  법인 원고 폼 필드 실측 (사업자/법인등록번호 칸 확인)
echo  ※ ECFS가 '원고 입력' 화면(인격구분=법인)인 상태에서 실행하세요.
echo ================================================
node inspect_org_fields.js
echo.
echo === 결과가 inspect_org_result.txt 에 저장되었습니다 ===
pause
