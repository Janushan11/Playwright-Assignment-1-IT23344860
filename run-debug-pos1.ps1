# Run Pos_Fun_001.spec.js in Chromium debug mode (no npm in PATH needed)
Set-Location $PSScriptRoot
& "$PSScriptRoot\node_modules\.bin\playwright.cmd" test assignment-1/positive-functional/Pos_Fun_001.spec.js --project=chromium --debug
