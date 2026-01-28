// Pos_Fun_021: Convert long descriptive paragraph – L
// Input: naan indha website romba neram use pannitu irukken.idhu pala vishayathuku help aagudhu
// Expected:
// நான் இந்த வெப்சைட் ரொம்ப நேரம் உஸ் பண்ணிட்டு இருக்கேன்.இது பல விஷயத்துக்கு ஹெல்ப் ஆகுது
// Covers: L (>300 chars), robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Pos_Fun_021 – Convert long descriptive paragraph', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = 'naan indha website romba neram use pannitu irukken.idhu pala vishayathuku help aagudhu';
  const expected = 'நான் இந்த வெப்சைட் ரொம்ப நேரம் உஸ் பண்ணிட்டு இருக்கேன்.இது பல விஷயத்துக்கு ஹெல்ப் ஆகுது';
  await typeThanglishAndConvert(page, input);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const normalized = output.replace(/\s+/g, ' ').trim();
  const expectedNormalized = expected.replace(/\s+/g, ' ').trim();
  expect(normalized).toBe(expectedNormalized);
});
