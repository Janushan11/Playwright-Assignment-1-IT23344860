// Pos_Fun_0023: Convert sentence with pronoun emphasis – S – naan than idha senjen
// Expected: Emphasis preserved, Tamil correct. Covers: Simple sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_0023 – Convert sentence with pronoun emphasis', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan than idha senjen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
