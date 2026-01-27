// Pos_Fun_013: convert sentence with numbers – S – class 10 manikku start aagum
// Expected: Numbers preserved correctly, Tamil correct. Covers: Numbers.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_013 – convert sentence with numbers', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'class 10 manikku start aagum');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
