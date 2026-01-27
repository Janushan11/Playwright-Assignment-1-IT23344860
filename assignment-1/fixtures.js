// Shared helpers for Thanglish-to-Tamil tests at https://tamil.changathi.com/
// The converter uses a single editable area: type + space triggers conversion. Output is in the same field.

const BASE_URL = 'https://tamil.changathi.com/';

async function getEditorLocator(page) {
  const textbox = page.getByRole('textbox').first();
  const editable = page.locator('[contenteditable="true"]').first();
  const textarea = page.locator('textarea').first();
  const combined = textbox.or(editable).or(textarea);
  await combined.waitFor({ state: 'visible', timeout: 10000 });
  return combined.first();
}

async function typeThanglishAndConvert(page, text) {
  const editor = await getEditorLocator(page);
  await editor.click();
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(100);
  const words = text.trim().split(/\s+/);
  for (const word of words) {
    await editor.type(word, { delay: 50 });
    await editor.press('Space');
    await page.waitForTimeout(200);
  }
  return editor;
}

async function getOutputText(page) {
  const editor = await getEditorLocator(page);
  return (await editor.inputValue()) || (await editor.textContent()) || '';
}

module.exports = { BASE_URL, getEditorLocator, typeThanglishAndConvert, getOutputText };
