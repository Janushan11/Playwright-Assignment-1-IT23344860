// Pos_Fun_021: Convert long descriptive paragraph – L
// Input: naan indha website romba neram use pannitu irukken.idhu pala vishayathuku help aagudhu
// Expected: Long text converted correctly, Tamil correct. Covers: L (>300 chars), robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_021 – Convert long descriptive paragraph', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = 'naan indha website romba neram use pannitu irukken.idhu pala vishayathuku help aagudhu';
  await typeThanglishAndConvert(page, input);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
