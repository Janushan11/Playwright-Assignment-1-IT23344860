@echo off
cd /d "%~dp0"
"%~dp0node_modules\.bin\playwright.cmd" test assignment-1/positive-functional/Pos_Fun_0001.spec.js --project=chromium --debug
pause
