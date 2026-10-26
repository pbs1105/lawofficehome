@echo off
cd /d "%~dp0"
echo ==============================================
echo  ngrok tunnel  ->  localhost:3939
echo  domain: polyphyletically-unhid-selene.ngrok-free.dev
echo ==============================================
echo.
echo (Prereq) ngrok must be installed and authenticated once:
echo    ngrok config add-authtoken YOUR_TOKEN
echo Keep THIS window open while n8n/admin needs the tunnel.
echo ----------------------------------------------
ngrok http --domain=polyphyletically-unhid-selene.ngrok-free.dev 3939
echo.
echo (ngrok exited) If you see an error above, capture it.
pause
