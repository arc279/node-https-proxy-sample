import puppeteer from "puppeteer"

const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--proxy-server=127.0.0.1:8080'
  ]
});

console.log(browser)

try {
  const page = await browser.newPage();
  const resp = await page.goto('https://example.com/');

  console.log(resp.headers())
  console.log(await resp.text())

} catch (err) {
  console.error(err)
} finally {
  await browser.close();
}

