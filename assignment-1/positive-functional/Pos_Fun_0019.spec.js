// Pos_Fun_0019: Convert sentence with extra spaces – S – naan veetuku poren
// Expected: Extra spaces handled, Tamil correct. Covers: Extra spaces sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_0019 – Convert sentence with extra spaces', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan   veetuku   poren');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
