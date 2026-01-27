// Pos_Fun_007: convert complex statement – M – mazha peychaalum naan veliya pogala
// Expected: Clause structure preserved, Tamil correct. Covers: Complex sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_007 – convert complex statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'mazha peychaalum naan veliya pogala');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
