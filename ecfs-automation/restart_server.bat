@echo off
cd /d "%~dp0"
echo ==============================================
echo  ECFS server FULL restart (kill old + start new)
echo ==============================================
echo.
echo Killing any old server listening on port 3939 ...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3939 ^| findstr LISTENING') do (
  echo   found old server PID %%a - stopping it
  taskkill /F /PID %%a >nul 2>nul
)
timeout /t 2 /nobreak >nul
echo.
echo Starting fresh server (new code loaded). Keep this window open.
echo ----------------------------------------------
node ecfs_automation_server.js
pause
