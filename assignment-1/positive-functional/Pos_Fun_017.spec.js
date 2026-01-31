// Pos_Fun_017: convert sentence with english technical word – M – naan laptop repair panninen
// Expected: நான் laptop ரிப்பேர் பண்ணினேன் (English technical word retained). Covers: Mixed Tanglish + English.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan laptop repair panninen';
const EXPECTED_TAMIL = 'நான் laptop ரிப்பேர் பண்ணினேன்';

test('Pos_Fun_017 – convert sentence with english technical word', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
