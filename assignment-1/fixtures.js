// Shared helpers for Thanglish-to-Tamil tests at https://tamil.changathi.com/
// The converter uses a single editable area: type + space triggers conversion. Output is in the same field.

const BASE_URL = 'https://tamil.changathi.com/';

async function getEditorLocator(page) {
  // tamil.changathi.com main editor is #transliterateTextarea; the page also has a contenteditable popup, so target the textarea explicitly
  const mainEditor = page.locator('#transliterateTextarea');
  await mainEditor.waitFor({ state: 'visible', timeout: 10000 });
  return mainEditor;
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
  // Wait for conversion to complete (site converts on space; output may lag)
  await page.waitForTimeout(800);
  return editor;
}

async function getOutputText(page) {
  const editor = await getEditorLocator(page);
  // contenteditable divs: inputValue() is empty; use innerText/textContent via evaluate
  const fromEl = await editor.evaluate((el) => (el.innerText || el.textContent || '').trim());
  if (fromEl) return fromEl;
  return (await editor.inputValue()) || (await editor.textContent()) || '';
}

module.exports = { BASE_URL, getEditorLocator, typeThanglishAndConvert, getOutputText };
