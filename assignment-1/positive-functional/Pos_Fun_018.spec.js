// Pos_Fun_018: Convert reason-based sentence – S – mazhai peyyudhu nala naan pogala
// Expected: Cause-effect meaning preserved, sentence converted correctly. Covers: Complex sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_018 – Convert reason-based sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'mazhai peyyudhu nala naan pogala');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
