// Pos_Fun_005: convert negative statement – S – naan varala
// Expected: நான் வரல (I will not come / I don't come). Covers: Daily language usage, negative form.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan varala';
const EXPECTED_TAMIL = 'நான் வரல';

test('Pos_Fun_005 – convert negative statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
