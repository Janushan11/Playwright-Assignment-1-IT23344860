// Pos_Fun_001: convert daily activity sentence – S – naan innaiku office ponen
// Expected: நான் இன்னைக்கு ஆபீஸ் போனேன் (I went to office today). Covers: Daily language usage, accuracy.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan innaiku office ponen';
const EXPECTED_TAMIL = 'நான் இன்னைக்கு ஆபீஸ் போனேன்';

test('Pos_Fun_001 – convert daily activity sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
