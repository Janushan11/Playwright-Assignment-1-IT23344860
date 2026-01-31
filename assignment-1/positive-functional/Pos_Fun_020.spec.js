// Pos_Fun_020: Convert sentence with multi-line input – M – naan vaaran / veetuku poren
// Expected: நான் வாறன் வீட்டுக்கு போறேன். Covers: Multi-line input.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan vaaran\nveetuku poren';
const EXPECTED_TAMIL = 'நான் வாறன் வீட்டுக்கு போறேன்';

test('Pos_Fun_020 – Convert sentence with multi-line input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const normalized = output.replace(/\s+/g, ' ').trim();
  const expectedNormalized = EXPECTED_TAMIL.replace(/\s+/g, ' ').trim();
  expect(normalized).toBe(expectedNormalized);
});
