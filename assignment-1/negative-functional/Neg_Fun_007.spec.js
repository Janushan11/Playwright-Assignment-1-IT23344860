// Neg_Fun_007: Joined words without spaces cause incorrect conversion – S – naanveetukuporen
// Expected: Correct tamil sentence with proper word separation (actual: incorrect tamil output). Covers: Word combination, robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_007 – Joined words without spaces', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naanveetukuporen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
