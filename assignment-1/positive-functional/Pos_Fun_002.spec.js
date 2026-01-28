// Pos_Fun_002: convert present tense sentence – S – naan veetla irukken
// Expected: நான் வீட்ல இருக்கேன் (I am at home). Covers: Daily language usage, present tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan veetla irukken';
const EXPECTED_TAMIL = 'நான் வீட்ல இருக்கேன்';

test('Pos_Fun_002 – convert present tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
