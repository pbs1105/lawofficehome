@echo off
echo ==============================================
echo  ECFS Automation Server - Step 2: Debug Chrome
echo ==============================================
echo.
echo A new Chrome window will open with a separate profile.
echo In that window:
echo   1. Log in to ecfs.scourt.go.kr with your certificate
echo   2. Navigate to the document screen you want to test
echo   3. Keep it open, then run 3_start_server.bat
echo.

set CHROME_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"
echo [DEBUG] checking path 1: %CHROME_PATH%
if exist %CHROME_PATH% (
  echo [DEBUG] found chrome.exe at path 1
  goto :found
)

echo [DEBUG] path 1 not found, checking path 2
set CHROME_PATH="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
echo [DEBUG] checking path 2: %CHROME_PATH%
if exist %CHROME_PATH% (
  echo [DEBUG] found chrome.exe at path 2
  goto :found
)

echo [ERROR] chrome.exe not found in either path
goto :end

:found
echo.
echo [DEBUG] launching chrome...
start "" %CHROME_PATH% --remote-debugging-port=9222 --user-data-dir="%TEMP%\ecfs-debug-profile" https://ecfs.scourt.go.kr
echo [DEBUG] start command issued. exit code: %errorlevel%
echo [DEBUG] check if a Chrome window opened.

:end
echo.
echo ==============================================
echo  Done. Press any key to close this window.
echo ==============================================
pause
