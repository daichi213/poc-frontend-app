const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().addArguments('--headless','--no-sandbox'))
      .build();
  try {
    // ページを開く
    await driver.get('http://localhost:3000/');
    // ページが完全に読み込まれるまで待機する
    await driver.wait(until.titleIs('Welcome to Next.js! | Next.js'));
    // リンクをクリックする
    const link = await driver.findElement(By.partialLinkText('Next.js'));
    await link.click();
    // リンク先がアクティブであることを確認する
    await driver.wait(until.titleIs('The React Framework for Production | Next.js'));
    // レスポンスが200であることを確認する
    const responseCode = await driver.executeScript('return window.performance.getEntries()[0].response.status');
    if (responseCode !== 200) {
      throw new Error(`Expected response code 200, but received ${responseCode}`);
    }
  } finally {
    await driver.quit();
  }
})();
