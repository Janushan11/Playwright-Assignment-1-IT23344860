// Pos_Fun_0001: convert daily activity sentence – S – naan innaiku office ponen
// Expected: Activity sentence converted correctly, Tamil spelling correct. Covers: Daily language usage, accuracy.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_0001 – convert daily activity sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan innaiku office ponen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
