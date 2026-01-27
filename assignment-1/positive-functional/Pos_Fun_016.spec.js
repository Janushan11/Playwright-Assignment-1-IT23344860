// Pos_Fun_016: convert joined word input sentence – S – ennapannra
// Expected: Tamil spelling correct. Covers: Joined word, simple sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_016 – convert joined word input sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'ennapannra');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
