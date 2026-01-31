// Neg_Fun_004: Random character sequence input – S – asdfghjkl
// Expected: incorrect output. Covers: Typographical error, robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_004 – Random character sequence input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'asdfghjkl');
  const output = await getOutputText(page);
  const tamilCount = (output.match(/[\u0B80-\u0BFF]/g) || []).length;
  expect(tamilCount).toBeLessThan(20);
});
