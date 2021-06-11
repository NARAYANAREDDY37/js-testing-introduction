const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('George', 23);

  expect(text).toBe('George (23 years old)');
});

test('should output a valid text', () => {
  const text = checkAndGenerate('George', 23);

  expect(text).toBe('George (23 years old)');
});

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    args: ['--window-size= 1920, 1080']
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/index.html');

  await page.click('input#name');
  await page.type('input#name', 'George');
  await page.click('input#age');
  await page.type('input#age', '23');
  await page.click('btnAddUser');
  w;
});
