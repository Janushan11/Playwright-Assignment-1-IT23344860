// Pos_Fun_009: convert imperative command – S – inga vaa
// Expected: Command intent preserved, Tamil correct. Covers: Command form.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_009 – convert imperative command', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'inga vaa');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
