// Pos_Fun_013: convert sentence with numbers – S – class 10 manikku start aagum
// Expected: கிளாஸ் 10 மணிக்கு ஸ்டார்ட் ஆகும். Covers: Numbers.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'class 10 manikku start aagum';
const EXPECTED_TAMIL = 'கிளாஸ் 10 மணிக்கு ஸ்டார்ட் ஆகும்';

test('Pos_Fun_013 – convert sentence with numbers', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL);
});
