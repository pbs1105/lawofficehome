@echo off
cd /d "%~dp0"
echo ==============================================
echo  ECFS Automation Server - Step 1: Install
echo ==============================================
echo.
call npm install
if errorlevel 1 (
  echo.
  echo [ERROR] npm install failed. Check that Node.js is installed.
  pause
  exit /b 1
)
echo.
echo Installing Playwright browser components...
call npx playwright install chromium
echo.
echo Install complete. You may close this window.
pause
