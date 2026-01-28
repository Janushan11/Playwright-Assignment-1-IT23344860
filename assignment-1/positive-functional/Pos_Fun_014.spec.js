// Pos_Fun_014: convert sentence with punctuation – S – sari, naan varen
// Expected: சரி, நான் வரேன். Covers: Punctuation.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'sari, naan varen';
const EXPECTED_TAMIL = 'சரி, நான் வரேன்';

test('Pos_Fun_014 – convert sentence with punctuation', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
