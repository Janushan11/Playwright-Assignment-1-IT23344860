// Pos_Fun_003: convert past tense sentence – S – naan nethu padichen
// Expected: Past tense preserved, Tamil correct. Covers: Daily language usage, past tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_003 – convert past tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan nethu padichen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
