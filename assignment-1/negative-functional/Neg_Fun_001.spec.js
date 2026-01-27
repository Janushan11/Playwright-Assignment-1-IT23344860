// Neg_Fun_001: Empty input – S – (Empty input field)
// Expected: No Tamil conversion with validation message. Covers: Empty input, error handling.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, getOutputText } = require('../fixtures');

test('Neg_Fun_001 – Empty input', async ({ page }) => {
  await page.goto(BASE_URL);
  const editor = await getEditorLocator(page);
  await editor.clear();
  await editor.blur();
  const output = await getOutputText(page);
  expect(output.trim()).toBe('');
});
