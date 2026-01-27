# Playwright-Assignment-1-IT23344860

Assignment-1 tests for **Thanglish-to-Tamil conversion** at [https://tamil.changathi.com/](https://tamil.changathi.com/).  
Scope: accuracy of conversion, stability and usability of the UI.  
No backend API, performance, or security testing.

## Repository

See [repository.txt](repository.txt) for the Git repository link.

## Prerequisites

- **Node.js** 18+  
- **npm** or **yarn**

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
├── positive-functional/     # 24 specs – Pos_Fun_0001.spec.js … Pos_Fun_0024.spec.js
├── negative-functional/     # 10 specs – Neg_Fun_001.spec.js … Neg_Fun_010.spec.js
└── ui-testcases/           # 1 spec  – Pos_UI_001.spec.js
```

- **Positive functional**: valid Thanglish inputs; expect Tamil output.  
- **Negative functional**: empty, invalid, or edge inputs; expect no/partial conversion or validation.  
- **UI**: output clears when input is cleared.

Tests assume the site’s main editor is a `textbox`, `textarea`, or `[contenteditable="true"]`. If the UI changes, update selectors in `assignment-1/fixtures.js`.
