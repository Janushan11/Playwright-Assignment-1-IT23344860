# Playwright-Assignment-1-IT23344860

Assignment-1 tests for **Thanglish-to-Tamil conversion** at [https://tamil.changathi.com/](https://tamil.changathi.com/).  
Scope: accuracy of conversion, stability and usability of the UI.  
No backend API, performance, or security testing.

## Repository

See [repository.txt](repository.txt) for the Git repository link.

---

## Prerequisites

- **Node.js** 18 or newer  
- **npm** (comes with Node.js) or **yarn**

---

## How to install

### 1. Install Node.js and npm

If `node` or `npm` is not recognized in the terminal:

1. Download **Node.js LTS** from [https://nodejs.org](https://nodejs.org) and run the installer.
2. **Close all terminals and Cursor**, then open a **new** terminal (PATH updates only apply to new sessions).
3. Check:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers. If not, restart the PC and try again.

### 2. Install project dependencies

From the **project folder**:

```bash
cd "c:\Users\HP\Documents\GitHub\Playwright-Assignment-1-IT23344860"
npm install
```

### 3. Install Playwright browsers

Install **Chromium** (default) and **Firefox** so you can run tests in both:

```bash
npx playwright install chromium
npx playwright install firefox
```

To install all supported browsers (Chromium, Firefox, WebKit):

```bash
npx playwright install
```

---

## How to run

**Always run commands from the project folder** (the folder that contains `package.json`).

### Run all tests (Chromium + Firefox + Edge)

```bash
npm test
```

Runs 35 tests on **Chromium**, **Firefox**, and **Microsoft Edge** (105 runs total). Takes longer.

### Run on one browser only

| Command | Description |
|--------|-------------|
| `npm run test:chromium` | All tests, **Chromium** only (35 tests) |
| `npm run test:firefox` | All tests, **Firefox** only (35 tests) |
| `npm run test:edge` | All tests, **Microsoft Edge** only (35 tests) |
| `npm run test:chromium:headed` | Chromium, **visible** browser window |
| `npm run test:firefox:headed` | Firefox, **visible** browser window |
| `npm run test:edge:headed` | Microsoft Edge, **visible** browser window |

### Run by test suite

| Command | Description |
|--------|-------------|
| `npm run test:positive` | Positive functional only (24 tests) |
| `npm run test:negative` | Negative functional only (10 tests) |
| `npm run test:ui` | UI tests only (1 test) |

With a specific browser:

- `npm run test:positive:firefox` — positive tests on Firefox  
- `npm run test:negative:firefox` — negative tests on Firefox  
- `npm run test:ui:firefox` — UI test on Firefox  
- `npm run test:positive:edge` — positive tests on Microsoft Edge  
- `npm run test:negative:edge` — negative tests on Microsoft Edge  
- `npm run test:ui:edge` — UI test on Microsoft Edge  

### Run headed (visible browser)

```bash
npm run test:headed
```

Runs all tests with a visible browser (Chromium, Firefox, and Edge). To see only one browser:

```bash
npm run test:chromium:headed
npm run test:firefox:headed
npm run test:edge:headed
```

### Run a single test

```bash
npm run test:pos1
```

Runs `Pos_Fun_001` only. Other single-test scripts: `test:pos2`, `test:pos3`, … `test:pos24` (see `package.json`).

### Alternative: npx (without npm scripts)

```bash
npx playwright test
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=edge
npx playwright test --project=edge --headed
npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js
```

Main test scripts use `NODE_OPTIONS=--no-warnings` so you avoid the Node “NO_COLOR / FORCE_COLOR” warning in Cursor or other IDEs.

---

## Project layout

```
assignment-1/
├── fixtures.js              # Shared helpers (editor, type, output)
├── positive-functional/     # 24 specs – Pos_Fun_001 … Pos_Fun_024
├── negative-functional/     # 10 specs – Neg_Fun_001 … Neg_Fun_010
└── ui-testcases/            # 1 spec  – Pos_UI_001
```

- **Positive functional**: valid Thanglish input → expected Tamil output.  
- **Negative functional**: empty/invalid input → no or partial conversion.  
- **UI**: output clears when input is cleared.

Tests target the main editor (`#transliterateTextarea`). If the site UI changes, update `assignment-1/fixtures.js`.

---

## If you get errors (troubleshooting)

### “npx” or “node” is not recognized

- **Cause:** Node.js is not installed or not on PATH.  
- **Fix:** Install Node.js LTS from [nodejs.org](https://nodejs.org), **close all terminals and Cursor**, open a new terminal, then run `node --version` and `npm install` again from the project folder.

### “Browser not found” / “Executable doesn’t exist”

- **Cause:** Playwright browsers are not installed.  
- **Fix:** From the project folder run:
  ```bash
  npx playwright install chromium
  npx playwright install firefox
  ```

### Editor not found (timeout)

- **Cause:** Site structure or selector changed (e.g. editor inside iframe).  
- **Fix:** Run one test with a visible browser to see what loads:
  ```bash
  npx playwright test assignment-1/positive-functional/Pos_Fun_001.spec.js --headed --project=chromium
  ```
  If the editor is in an iframe, update `assignment-1/fixtures.js` to switch to that frame before using the editor.

### Output empty or still in Thanglish

- **Cause:** Conversion delay or site changed (e.g. separate output element).  
- **Fix:** `fixtures.js` already waits 800 ms after typing. If the site now has a separate output element, change `getOutputText` in `fixtures.js` to read from that element.

### Network / site not loading

- **Cause:** [https://tamil.changathi.com/](https://tamil.changathi.com/) not reachable or slow.  
- **Fix:** Open the URL in a normal browser first. If it’s slow, increase `navigationTimeout` or `actionTimeout` in `playwright.config.js`.

### EPERM / “scandir … WinSAT” (Windows)

- **Cause:** Playwright/Node touching a restricted temp folder.  
- **Fix:** Run from the **project folder**, not from your user folder. If it still happens, use a different temp folder for that session:

  **PowerShell:**
  ```powershell
  cd "c:\Users\HP\Documents\GitHub\Playwright-Assignment-1-IT23344860"
  $env:TEMP = "$env:USERPROFILE\playwright-temp"
  if (-not (Test-Path $env:TEMP)) { New-Item -ItemType Directory -Path $env:TEMP -Force }
  npm test
  ```

  **CMD:**
  ```cmd
  cd /d "c:\Users\HP\Documents\GitHub\Playwright-Assignment-1-IT23344860"
  set TEMP=%USERPROFILE%\playwright-temp
  if not exist "%TEMP%" mkdir "%TEMP%"
  npm test
  ```

### NO_COLOR / FORCE_COLOR warning in terminal

- **Cause:** Both `NO_COLOR` and `FORCE_COLOR` are set (e.g. by Cursor).  
- **Fix:** Harmless. Main npm scripts already use `NODE_OPTIONS=--no-warnings` to hide it. If you use `npx playwright test` directly and see the warning, you can ignore it.

### Some tests fail (e.g. Pos_Fun_012, Pos_Fun_013)

- **Cause:** Site output differs from Excel expected (e.g. place name “jaffna”, numbers “10”).  
- **Fix:** Either update the expected values in the spec to match current site behavior, or treat as known differences until the site is updated.

---

## Alternative ways to run

| Goal | Command |
|-----|--------|
| Only Chromium (faster) | `npm run test:chromium` |
| Only Firefox | `npm run test:firefox` |
| Only Microsoft Edge | `npm run test:edge` |
| Visible Chromium | `npm run test:chromium:headed` |
| Visible Firefox | `npm run test:firefox:headed` |
| Visible Edge | `npm run test:edge:headed` |
| Single test (e.g. Pos_Fun_001) | `npm run test:pos1` |
| Debug with inspector | `npm run test:debug-pos1` |
| Interactive UI mode | `npm run test:open-ui` |

---

## Quick reference

```bash
# Install (once)
npm install
npx playwright install chromium
npx playwright install firefox
npx playwright install msedge

# Run
npm test                    # All tests, Chromium + Firefox + Edge
npm run test:chromium       # Chromium only
npm run test:firefox        # Firefox only
npm run test:edge           # Microsoft Edge only
npm run test:headed         # Visible browser (all three)
npm run test:edge:headed    # Visible Edge
npm run test:pos1           # Single test
```
