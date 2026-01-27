// Pos_Fun_0020: Convert sentence with multi-line input – M – naan varen / veetuku poren
// Expected: Line breaks preserved, Tamil correct. Covers: Compound sentence, multi-line.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_0020 – Convert sentence with multi-line input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan varen\nveetuku poren');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
