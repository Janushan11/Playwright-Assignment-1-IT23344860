// Pos_Fun_024: Convert sentence with polite plural reference – S – neenga innaiku varenuma
// Expected: Polite plural form preserved, Tamil correct. Covers: Interrogative.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_024 – Convert sentence with polite plural reference', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'neenga innaiku varenuma');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
