// Pos_Fun_0010: convert pronoun variation sentence – S – avanga nalaiku varanga
// Expected: Pronoun handled correctly, Tamil correct. Covers: Pronoun variation.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_0010 – convert pronoun variation sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'avanga nalaiku varanga');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
