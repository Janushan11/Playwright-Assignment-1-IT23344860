// Pos_UI_001: Output clears immediately when input field is cleared
// Input: nan veetuku poren, then clear the entire input field. Expected: empty output. Covers: Clear handling, UI.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_UI_001 – Output clears when input is cleared', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'nan veetuku poren');
  let output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  const editor = await getEditorLocator(page);
  await editor.click({ clickCount: 3 });
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(500);
  output = await getOutputText(page);
  expect(output.trim()).toBe('');
});
