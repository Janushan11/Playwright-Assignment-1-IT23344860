// Neg_Fun_002: Only spaces input – S – "  "
// Expected: No output generated. Covers: Formatting (spaces), error handling.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, getOutputText } = require('../fixtures');

test('Neg_Fun_002 – Only spaces input', async ({ page }) => {
  await page.goto(BASE_URL);
  const editor = await getEditorLocator(page);
  await editor.fill('  ');
  await editor.press('Space');
  await page.waitForTimeout(300);
  const output = await getOutputText(page);
  const hasTamil = /[\u0B80-\u0BFF]/.test(output);
  expect(hasTamil).toBe(false);
});
