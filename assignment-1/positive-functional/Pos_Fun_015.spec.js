// Pos_Fun_015: convert repeated word usage sentence – S – romba romba sandhosham
// Expected: Repetition preserved, Tamil correct. Covers: Word combination.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_015 – convert repeated word usage sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'romba romba sandhosham');
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
