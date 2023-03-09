#!/usr/bin/env sh

####################################################
# AppSrc内でビルドする処理を記述するためのシェル
# シェルの実行はレポジトリのルートディレクトリになるため、package.jsonが存在するディレクトリへ移動してからyarnコマンドを実行する
####################################################

set -x

echo "Read the integration_test.sh"
cd ./sample_app/selenium

# Start Next.js application in the background
nohup next dev > /dev/null 2>&1 &
echo "Waiting for server to start..."

sleep 5

# Wait until server is ready
until $(curl --output /dev/null --silent --head --fail http://localhost:3000); do
  printf '.'
  sleep 1
done

echo "Server is ready!"

# Run Selenium tests
node sample_test.ts

# Stop Next.js application
kill $(lsof -t -i :3000 -sTCP:LISTEN) > /dev/null 2>&1
echo "Server stopped."