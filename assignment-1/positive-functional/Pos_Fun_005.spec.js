// Pos_Fun_005: convert negative statement – S – naan varala
// Expected: Negative sentence correct, Tamil correct. Covers: Daily language usage, negative form.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_005 – convert negative statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan varala');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
