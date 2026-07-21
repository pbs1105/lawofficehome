@echo off
echo ==============================================
echo  DEBUG TEST: plain Chrome launch (no flags)
echo ==============================================
echo.
echo [DEBUG] checking chrome.exe...
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
  echo [DEBUG] found. launching now...
  start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" https://example.com
  echo [DEBUG] start command done.
) else (
  echo [ERROR] chrome.exe not found.
)
echo.
echo Check if a Chrome window opened.
echo Press any key to close this window.
pause
