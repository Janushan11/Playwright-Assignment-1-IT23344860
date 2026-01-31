// Neg_Fun_008: Sentence with english abbreviation disrupts tamil output – S – avan ID card marandhutan
// Expected: broken tamil output. Covers: Mixed Tanglish + English, robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_008 – English abbreviation disrupts tamil output', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'avan ID card marandhutan');
  const output = await getOutputText(page);
  const hasSubstantialTamil = (output.match(/[\u0B80-\u0BFF]/g) || []).length >= 3;
  expect(hasSubstantialTamil).toBe(true);
});
