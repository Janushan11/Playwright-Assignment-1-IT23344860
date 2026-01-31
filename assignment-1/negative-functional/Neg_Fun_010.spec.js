// Neg_Fun_010: Incorrect tense indicator causes wrong tamil conversion – type future tense then clear entire field
// Expected: After clear, output is empty (no stale Tamil). Covers: Tense variation, robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_010 – Clear entire input after typing', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan nalaiku varen');
  const editor = await getEditorLocator(page);
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(500);
  const output = await getOutputText(page);
  expect(output.trim()).toBe('');
});
