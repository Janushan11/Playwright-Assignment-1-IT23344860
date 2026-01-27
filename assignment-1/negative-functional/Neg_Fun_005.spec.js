// Neg_Fun_005: Only numeric input – S – 12345
// Expected: No Tamil conversion with validation message. Covers: Numbers, error handling.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_005 – Only numeric input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, '12345');
  const output = await getOutputText(page);
  const hasTamil = /[\u0B80-\u0BFF]/.test(output);
  expect(hasTamil).toBe(false);
});
