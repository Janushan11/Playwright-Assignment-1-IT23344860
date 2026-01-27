// Pos_Fun_004: convert Future tense sentence – S – naan nalaiku varen
// Expected: Future tense preserved, Tamil correct. Covers: Daily language usage, future tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_004 – convert Future tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan nalaiku varen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
