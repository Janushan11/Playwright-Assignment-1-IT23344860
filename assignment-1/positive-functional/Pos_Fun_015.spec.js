// Pos_Fun_015: convert repeated word usage sentence – S – romba romba sandhosham
// Expected: ரொம்ப ரொம்ப சந்தோஷம். Covers: Word combination.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'romba romba sandhosham';
const EXPECTED_TAMIL = 'ரொம்ப ரொம்ப சந்தோஷம்';

test('Pos_Fun_015 – convert repeated word usage sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
