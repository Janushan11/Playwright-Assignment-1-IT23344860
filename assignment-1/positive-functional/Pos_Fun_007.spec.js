// Pos_Fun_007: convert complex statement – M – mazha peychaalum naan veliya pogala
// Expected: மழை பெய்சாலும் நான் வெளிய போகல. Covers: Complex sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'mazha peychaalum naan veliya pogala';
const EXPECTED_TAMIL = 'மழை பெய்சாலும் நான் வெளிய போகல';

test('Pos_Fun_007 – convert complex statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
