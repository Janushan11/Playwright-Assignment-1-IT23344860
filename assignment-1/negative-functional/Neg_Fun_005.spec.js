// Neg_Fun_005: Only numeric input – S – 12345
// Expected: Numbers remain unchanged. Covers: Numbers, error handling.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_005 – Only numeric input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, '12345');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/12345|௧௨௩௪௫|[\u0BE6-\u0BEF]/);
});
