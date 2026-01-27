// Pos_Fun_0012: convert sentence with place name – S – naan jaffna poren
// Expected: Place name converted correctly, Tamil correct. Covers: Names/Places.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_0012 – convert sentence with place name', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan jaffna poren');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
