const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const options = new chrome.Options();
options.addArguments("--headless"); // ヘッドレスモードを有効にする
options.addArguments("--disable-dev-shm-usage");
options.addArguments("--no-sandbox");

const driver = new webdriver.Builder()
  .forBrowser("chrome")
  .withCapabilities(options)
  .usingServer('http://localhost:3001/wd/hub')
  .build();

// テストコードを書く

(async function example() {
  try {
    // 指定されたURLに移動
    await driver.get("http://localhost:3000/");

    // リンク先の要素を検索し、クリックして移動
    const linkElement = await driver.wait(
      driver.until.elementLocated(driver.By.linkText("Next.js!")),
      10000
    ); // 10秒間待機する
    await linkElement.click();

    // 現在のURLを取得し、レスポンスを確認
    const currentUrl = await driver.getCurrentUrl();
    // 結果を出力
    console.log(`Current URL: ${currentUrl}`);

    // ※現在は非推奨なようです。代替のfetchを使います。
    //const httpStatusCode = await driver.executeScript(`
    //const xhr = new XMLHttpRequest();
    //xhr.open('HEAD', window.location.href, false);
    //xhr.send();
    //return xhr.status;
    //`);

    // seleniumにレスポンス取得メソッドがないため、無理やりJSのメソッドを使う
    const httpStatusCode = await driver.executeScript(`
    return fetch(window.location.href, { method: 'HEAD' })
      .then(response => response.status);
    `);

    console.log(`HTTP Status Code: ${httpStatusCode}`);

    // リンク先のページがアクティブであることを確認
    if (currentUrl === "https://nextjs.org/") {
      console.log("Link is active.");
    } else {
      console.log("Link is not active.");
    }

    // HTTPレスポンスが200であることを確認
    if (httpStatusCode === 200) {
      console.log("HTTP response status is 200.");
    } else {
      console.log(`HTTP response status is ${httpStatusCode}.`);
    }
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    try {
      await driver.quit();
    } catch (err) {
      console.error('An error occurred while quitting the driver:', err);
    }
  }
})();
