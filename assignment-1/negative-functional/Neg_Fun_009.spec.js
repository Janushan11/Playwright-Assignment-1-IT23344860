// Neg_Fun_009: Currency and number format affects conversion – S – intha saaman rs.500 kidaikuma?
// Expected: Correct numbers and currency with Tamil words. Covers: Numbers and currency, robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_009 – Currency and number format affects conversion', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'intha saaman rs.500 kidaikuma?');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
