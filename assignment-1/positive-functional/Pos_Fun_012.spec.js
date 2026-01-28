// Pos_Fun_012: convert sentence with place name – S – naan jaffna poren
// Expected: நான் ஜபிபின போறேன். Covers: Names/Places (jaffna = ஜபிபின).

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan jaffna poren';
const EXPECTED_TAMIL = 'நான் ஜபிபின போறேன்';

test('Pos_Fun_012 – convert sentence with place name', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
