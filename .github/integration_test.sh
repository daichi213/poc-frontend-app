#!/usr/bin/env sh

####################################################
# AppSrc内でビルドする処理を記述するためのシェル
# シェルの実行はレポジトリのルートディレクトリになるため、package.jsonが存在するディレクトリへ移動してからyarnコマンドを実行する
####################################################
# test
echo "Read the integration_test.sh"
cd ./sample_app

# Start Next.js application in the background
yarn run build
yarn run start > /dev/null 2>&1 &
echo "Next.js is running..."

echo "Run Selenium tests"
cd ./selenium
node sample_test.cjs
echo "Finished Selenium tests"
