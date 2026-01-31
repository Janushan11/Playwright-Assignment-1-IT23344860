// Pos_Fun_006: convert compound statement – M – naan market ponen appuram veetuku vandhen
// Expected:
// நான் மார்க்கெட் போனேன்
// அப்புறம் வீட்டுக்கு வந்தேன்
// Covers: Compound sentence, M length.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan market ponen appuram veetuku vandhen';
const EXPECTED_TAMIL = `நான் மார்க்கெட் போனேன்
அப்புறம் வீட்டுக்கு வந்தேன்`;

test('Pos_Fun_006 – convert compound statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const normalized = output.replace(/\s+/g, ' ').trim();
  const expectedNormalized = EXPECTED_TAMIL.replace(/\s+/g, ' ').trim();
  expect(normalized).toBe(expectedNormalized);
});
