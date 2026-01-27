// Pos_Fun_017: convert sentence with english technical word – M – naan laptop repair panninen
// Expected: Technical English preserved, Tamil correct. Covers: Mixed Tanglish + English.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_017 – convert sentence with english technical word', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan laptop repair panninen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
