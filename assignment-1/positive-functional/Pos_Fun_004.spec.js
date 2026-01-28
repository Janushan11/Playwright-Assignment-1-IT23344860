// Pos_Fun_004: convert Future tense sentence – S – naan nalaiku varen
// Expected: நான் நாளைக்கு வரேன் (I will come tomorrow). Covers: Daily language usage, future tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan nalaiku varen';
const EXPECTED_TAMIL = 'நான் நாளைக்கு வரேன்';

test('Pos_Fun_004 – convert Future tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
