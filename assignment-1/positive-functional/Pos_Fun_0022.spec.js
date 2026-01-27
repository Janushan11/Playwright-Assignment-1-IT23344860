// Pos_Fun_0022: Convert instruction with common action verb – S – indha velai mudichu vaa
// Expected: Action verb handled, command structure converted, Tamil correct. Covers: Command form.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_0022 – Convert instruction with common action verb sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'indha velai mudichu vaa');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
