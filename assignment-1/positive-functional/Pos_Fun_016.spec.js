// Pos_Fun_016: convert joined word input sentence – S – ennapannra
// Expected: என்னபண்ணற. Covers: Joined word, simple sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'ennapannra';
const EXPECTED_TAMIL = 'என்னபண்ணற';

test('Pos_Fun_016 – convert joined word input sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
