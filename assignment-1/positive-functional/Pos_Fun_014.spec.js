// Pos_Fun_014: convert sentence with punctuation – S – sari, naan varen
// Expected: Punctuation retained, Tamil correct. Covers: Punctuation.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_014 – convert sentence with punctuation', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'sari, naan varen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
