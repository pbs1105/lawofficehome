@echo off
cd /d "%~dp0"
echo ==============================================
echo  ECFS Automation Server - Step 3: Run Server
echo ==============================================
echo.
echo This window shows server logs. Keep it open while testing.
echo Press Ctrl+C in this window to stop the server.
echo.
node ecfs_automation_server.js
pause
