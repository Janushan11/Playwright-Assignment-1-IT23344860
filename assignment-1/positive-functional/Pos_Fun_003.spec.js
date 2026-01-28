// Pos_Fun_003: convert past tense sentence – S – naan nethu padichen
// Expected: நான் நேத்து படிச்சேன் (I studied yesterday). Covers: Daily language usage, past tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan nethu padichen';
const EXPECTED_TAMIL = 'நான் நேத்து படிச்சேன்';

test('Pos_Fun_003 – convert past tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
