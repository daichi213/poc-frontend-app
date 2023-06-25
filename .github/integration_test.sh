#!/usr/bin/env sh

##################  Description  ###################
# Seleniumを使用した統合テスト
####################################################

#####################  引数  #######################
# ビルド資材が格納されているディレクトリのパス
BUILD_FILES_PATH=$1
####################################################

# Start Next.js application in the background
echo "########## Integration Test ##########"
# cd ./sample_app
# yarn run start > /dev/null 2>&1 &
# echo "Next.js is running..."

cd ./sample_app
echo "Run Selenium tests"
cd ./selenium
node sample_test.cjs
echo "Finished Selenium tests"
