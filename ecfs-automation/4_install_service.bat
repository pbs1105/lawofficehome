@echo off
cd /d "%~dp0"
echo ==============================================
echo  ECFS Automation Server - Step 4: Install as Windows Service
echo ==============================================
echo.
echo This registers ecfs_automation_server.js as a Windows service using
echo NSSM (Non-Sucking Service Manager), so it starts automatically on
echo login/boot instead of needing 3_start_server.bat run manually every day.
echo.
echo Requires: nssm.exe (download from https://nssm.cc/download) placed in
echo this folder, or already available on PATH.
echo Run this script as Administrator.
echo.

set SERVICE_NAME=ECFSAutomation
set SCRIPT_DIR=%~dp0

where nssm >nul 2>nul
if errorlevel 1 (
  if exist "%SCRIPT_DIR%nssm.exe" (
    set NSSM=%SCRIPT_DIR%nssm.exe
  ) else (
    echo [ERROR] nssm.exe not found on PATH or in this folder.
    echo Download it from https://nssm.cc/download, unzip, and copy the
    echo win64\nssm.exe (or win32) into this folder, then run this script again.
    pause
    exit /b 1
  )
) else (
  set NSSM=nssm
)

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] node not found on PATH. Install Node.js first (see 1_install.bat).
  pause
  exit /b 1
)
for /f "delims=" %%i in ('where node') do set NODE_EXE=%%i

if not exist "%SCRIPT_DIR%logs" mkdir "%SCRIPT_DIR%logs"

echo Installing service "%SERVICE_NAME%" ...
%NSSM% install %SERVICE_NAME% "%NODE_EXE%" "%SCRIPT_DIR%ecfs_automation_server.js"
%NSSM% set %SERVICE_NAME% AppDirectory "%SCRIPT_DIR%"
%NSSM% set %SERVICE_NAME% AppStdout "%SCRIPT_DIR%logs\service-stdout.log"
%NSSM% set %SERVICE_NAME% AppStderr "%SCRIPT_DIR%logs\service-stderr.log"
%NSSM% set %SERVICE_NAME% AppRotateFiles 1
%NSSM% set %SERVICE_NAME% AppRotateBytes 10485760
%NSSM% set %SERVICE_NAME% AppRotateOnline 1
%NSSM% set %SERVICE_NAME% Start SERVICE_AUTO_START
%NSSM% set %SERVICE_NAME% AppStopMethodSkip 0
%NSSM% set %SERVICE_NAME% AppStopMethodConsole 3000
%NSSM% set %SERVICE_NAME% AppStopMethodWindow 3000

echo.
echo ==============================================
echo  IMPORTANT: set environment variables before starting the service
echo ==============================================
echo NSSM does not inherit your user environment variables automatically.
echo Set these via the "nssm edit %SERVICE_NAME%" GUI (Environment tab) or
echo by running the following (replace the placeholder values first):
echo.
echo   %NSSM% set %SERVICE_NAME% AppEnvironmentExtra ^
CALLBACK_SECRET=REPLACE_ME ^
NOTION_API_KEY=REPLACE_ME ^
PORT=3939 ^
CDP_ENDPOINT=http://localhost:9222 ^
ADMIN_ORIGIN=https://REPLACE_WITH_ADMIN_DOMAIN
echo.
echo ADMIN_ORIGIN controls which admin page origins may call this server
echo (CORS). localhost/127.0.0.1 and file:// are always allowed; add your
echo deployed admin domain(s) here, comma-separated, or the admin page won't
echo be able to reach this server.
echo.
echo After setting env vars, start the service with either:
echo   %NSSM% start %SERVICE_NAME%
echo or via services.msc (look for "%SERVICE_NAME%").
echo.
echo Logs: %SCRIPT_DIR%logs\service-stdout.log / service-stderr.log
echo Audit log / last run state: %SCRIPT_DIR%logs\audit-*.jsonl, last_state.json
echo.
echo To remove the service later: %NSSM% remove %SERVICE_NAME% confirm
echo.
echo NOTE: the Chrome window with the certificate login (2_start_chrome_debug.bat)
echo is NOT part of this service and still needs to be started/logged into by
echo staff each day — this service only runs the automation HTTP server.
pause
