# Playwright-Assignment-1-IT23344860

Assignment-1 tests for **Thanglish-to-Tamil conversion** at [https://tamil.changathi.com/](https://tamil.changathi.com/).  
Scope: accuracy of conversion, stability and usability of the UI.  
No backend API, performance, or security testing.

## Repository

See [repository.txt](repository.txt) for the Git repository link.

## Prerequisites

- **Node.js** 18+  
- **npm** or **yarn**

## Install Node.js and npm (here)

If `npm` or `node` is not recognized:

1. **Install Node.js** (includes npm): [https://nodejs.org](https://nodejs.org)  
   - Download the **LTS** Windows installer, run it, and follow the steps.  
   - **Important:** Close PowerShell/CMD and Cursor completely, then reopen them (or restart the PC). PATH updates only apply to **new** terminals.

2. **In this project folder**, install dependencies:

   ```bash
   cd "c:\Users\NEXA\Documents\GitHub\Playwright-Assignment-1-IT23344860"
   npm install
   ```

3. **Install Playwright browsers** (first time):

   ```bash
   npx playwright install chromium
   ```

## Install dependencies

```bash
npm install
```

Install Playwright browsers (first-time or after bumping @playwright/test):

```bash
npx playwright install chromium
```

## Run tests

- **All tests**
  ```bash
  npm test
  ```

- **Positive functional only** (24 tests)
  ```bash
  npm run test:positive
  ```

- **Negative functional only** (10 tests)
  ```bash
  npm run test:negative
  ```

- **UI tests only** (1 test)
  ```bash
  npm run test:ui
  ```

- **Headed (visible browser)**
  ```bash
  npm run test:headed
  ```

## Layout

```
assignment-1/
├── fixtures.js              # Shared helpers (editor, type, output)
├── positive-functional/     # 24 specs – Pos_Fun_001.spec.js … Pos_Fun_024.spec.js
├── negative-functional/     # 10 specs – Neg_Fun_001.spec.js … Neg_Fun_010.spec.js
└── ui-testcases/           # 1 spec  – Pos_UI_001.spec.js
```

- **Positive functional**: valid Thanglish inputs; expect Tamil output.  
- **Negative functional**: empty, invalid, or edge inputs; expect no/partial conversion or validation.  
- **UI**: output clears when input is cleared.

Tests assume the site’s main editor is a `textbox`, `textarea`, or `[contenteditable="true"]`. If the UI changes, update selectors in `assignment-1/fixtures.js`.

## Why tests might fail (troubleshooting)

If **all** positive/UI tests fail, common causes:

1. **Editor not found (timeout)**  
   The site may use a different structure (e.g. iframe, different selector).  
   - Run one test in headed mode to see what loads:  
     `npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js --headed`  
   - If the editor is in an iframe, add logic in `assignment-1/fixtures.js` to switch to that frame before locating the editor.

2. **Output is empty or still in Thanglish**  
   - Conversion can lag; `fixtures.js` already waits 800 ms after typing.  
   - The site uses a single contenteditable field; `getOutputText` reads via `innerText`/`textContent`. If the site ever splits input/output into two elements, update `getOutputText` to read from the output element.

3. **Network / load**  
   - Ensure [https://tamil.changathi.com/](https://tamil.changathi.com/) loads in a normal browser.  
   - In slow networks, increase `navigationTimeout` or `actionTimeout` in `playwright.config.js`.

4. **See the real error**  
   Run a single test and read the message:  
   `npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js`  
   Check for “Timeout”, “expect(received).toBeTruthy()”, or “locator resolved to …” to know if it’s timing, assertion, or selector-related.

## “npx is not recognized” (PowerShell / CMD)

That means **Node.js is not installed** or not on your PATH.

1. **Install Node.js**  
   - Go to [https://nodejs.org](https://nodejs.org) and download the **LTS** Windows installer.  
   - Run it and complete the setup (default options are fine).  
   - **Close every terminal and Cursor**, then open a **new** PowerShell or CMD and go to the project folder. PATH is updated only for new sessions.

2. **Check it works**  
   In the **new** terminal run:
   ```powershell
   node --version
   npx --version
   ```
   You should see version numbers. If you still get “not recognized”, restart the PC after installing Node.

3. **Run the test**  
   From the project folder:
   ```powershell
   cd "C:\Users\NEXA\Documents\GitHub\Playwright-Assignment-1-IT23344860"
   npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js
   ```
   Or use the npm script:
   ```powershell
   npm run test:pos1
   ```
   (Use `npm run test:debug-pos1` to run Pos_Fun_001 in debug mode with the Playwright inspector.)

## “EPERM: operation not permitted, scandir … WinSAT”

This can happen when Node/Playwright scans `%TEMP%` and hits the restricted `WinSAT` folder.

1. **Always run from the project folder** (not from `C:\Users\NEXA`):
   ```powershell
   cd "C:\Users\NEXA\Documents\GitHub\Playwright-Assignment-1-IT23344860"
   npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js
   ```

2. **If it still happens**, use a different temp folder for that session:
   ```powershell
   cd "C:\Users\NEXA\Documents\GitHub\Playwright-Assignment-1-IT23344860"
   $env:TEMP = "$env:USERPROFILE\playwright-temp"; if (-not (Test-Path $env:TEMP)) { New-Item -ItemType Directory -Path $env:TEMP -Force }; npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js
   ```
   Or in CMD:
   ```cmd
   cd /d "C:\Users\NEXA\Documents\GitHub\Playwright-Assignment-1-IT23344860"
   set TEMP=%USERPROFILE%\playwright-temp
   if not exist "%TEMP%" mkdir "%TEMP%"
   npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js
   ```
