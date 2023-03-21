#!/usr/bin/env bash
# xmllint利用のため
sudo apt -y install libxml2-utils
sudo apt install -y wget unzip

# sudoで実行すること
# google chromeのインストーラを作成
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
# パッケージリストの更新とGoogle Chromeのインストール
sudo apt install -y google-chrome-stable

# chromeのバージョンを取得
chrome_v=$(google-chrome --version | cut -d " " -f 3 | cut -d "." -f 1)

# chromedriverのバージョンを確認
chrome_driver_list=`curl https://chromedriver.storage.googleapis.com/ > /tmp/chrome.v`
chrome_chrome_ver_list=`xmllint --format /tmp/chrome.v | grep Key | grep ${chrome_v} | grep linux | cut -d">" -f2 | cut -d"/" -f1`
chrome_driver_ver=`echo ${chrome_chrome_ver_list} | cut -d" " -f1`

# google-chromeと同じバージョンをwget
sudo wget https://chromedriver.storage.googleapis.com/${chrome_driver_ver}/chromedriver_linux64.zip -P /tmp
sudo unzip /tmp/chromedriver_linux64.zip -d /usr/local/bin
sudo chmod 755 /usr/local/bin/chromedriver
sudo rm -f /tmp/chromedriver_linux64.zip
