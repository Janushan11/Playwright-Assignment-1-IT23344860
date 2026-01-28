// Pos_Fun_008: convert interrogative statement – S – nee enga pora?
// Expected: நீ எங்க போற? Covers: Question form.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'nee enga pora?';
const EXPECTED_TAMIL = 'நீ எங்க போற?';

test('Pos_Fun_008 – convert interrogative statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
