// Neg_Fun_004: Random character sequence input – S – asdfghjkl
// Expected: No Tamil conversion with validation message. Covers: Typographical error, robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_004 – Random character sequence input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'asdfghjkl');
  const output = await getOutputText(page);
  const hasMeaningfulTamil = output.trim().length > 0 && /[\u0B80-\u0BFF]{2,}/.test(output);
  expect(hasMeaningfulTamil).toBe(false);
});
