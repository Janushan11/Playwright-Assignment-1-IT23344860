// Pos_Fun_006: convert compound statement – M – naan market ponen appuram veetuku vandhen
// Expected: Compound structure maintained, Tamil correct. Covers: Compound sentence, M length.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_006 – convert compound statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan market ponen appuram veetuku vandhen');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
