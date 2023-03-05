const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

const options = new chrome.Options();
options.addArguments('--headless'); // ヘッドレスモードでブラウザを起動する
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

const url = 'http://localhost:3000/';

(async function example() {
  try {
    // URLを開く
    await driver.get(url);

    // リンク先の要素を取得し、アクティブであることを確認する
    const link = await driver.findElement(webdriver.By.linkText('Next.js'));
    const isActive = await link.getAttribute('class').then(classes => classes.includes('active'));
    assert.ok(isActive, 'Link is not active');

    // レスポンスが200であることを確認する
    const statusCode = await driver.executeScript('return window.performance.getEntries()[0].response.status;');
    assert.equal(statusCode, 200, 'Response status code is not 200');

    console.log('Test passed successfully!');
  } catch (error) {
    console.error('Test failed with error:', error);
  } finally {
    await driver.quit();
  }
})();
