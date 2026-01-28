// Pos_Fun_011: convert plural sentence – S – pasanga school poranga
// Expected: பசங்க ஸ்கூல் போறாங்க. Covers: Plural form.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'pasanga school poranga';
const EXPECTED_TAMIL = 'பசங்க ஸ்கூல் போறாங்க';

test('Pos_Fun_011 – convert plural sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
