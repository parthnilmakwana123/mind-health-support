@echo off
title Mind Health Support - Local Server
echo ==========================================
echo    Mind Health Support - Starting Server
echo ==========================================
echo.
echo Starting local server on http://localhost:8080
echo.
echo Opening browser...
start http://localhost:8080
echo.
echo Server is running. Keep this window open.
echo Press Ctrl+C to stop the server.
echo ==========================================
echo.
cd /d "%~dp0"
python -m http.server 8080
pause
