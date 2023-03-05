#!/usr/bin/env sh

####################################################
# AppSrc内でビルドする処理を記述するためのシェル
# シェルの実行はレポジトリのルートディレクトリになるため、package.jsonが存在するディレクトリへ移動してからyarnコマンドを実行する
####################################################

echo "Read the integration_test.sh"
cd ./sample_app/selenium
npm run dev
node sample_test.ts