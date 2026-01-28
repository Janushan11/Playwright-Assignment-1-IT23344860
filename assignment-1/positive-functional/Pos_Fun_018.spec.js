// Pos_Fun_018: Convert reason-based sentence – S – mazhai peyyudhu nala naan pogala
// Expected: மழை பெய்யுது னால நான் போகல. Covers: Complex sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'mazhai peyyudhu nala naan pogala';
const EXPECTED_TAMIL = 'மழை பெய்யுது னால நான் போகல';

test('Pos_Fun_018 – Convert reason-based sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
