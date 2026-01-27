// Neg_Fun_003: Unsupported language input – S – bonjour comment ca
// Expected: No Tamil conversion with validation message. Covers: Unsupported language, error handling.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_003 – unsupported language input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'bonjour comment ca');
  const output = await getOutputText(page);
  const meaningfulTamil = (output.match(/[\u0B80-\u0BFF]/g) || []).length;
  expect(meaningfulTamil).toBeLessThan(5);
});
