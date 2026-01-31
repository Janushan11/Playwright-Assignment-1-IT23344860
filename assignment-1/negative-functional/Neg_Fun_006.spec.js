// Neg_Fun_006: Only special characters input – S – @@##
// Expected: No tamil conversion with validation message / Remain unchanged. Covers: Special characters, error handling.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, getOutputText } = require('../fixtures');

test('Neg_Fun_006 – Only special characters input', async ({ page }) => {
  await page.goto(BASE_URL);
  const editor = await getEditorLocator(page);
  await editor.fill('@@##');
  await page.waitForTimeout(300);
  const output = await getOutputText(page);
  const hasTamil = /[\u0B80-\u0BFF]/.test(output);
  expect(hasTamil).toBe(false);
});
