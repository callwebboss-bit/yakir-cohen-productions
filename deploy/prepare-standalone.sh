#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/yakir-cohen-productions}"

cd "$APP_DIR"

npm ci
npm run build

mkdir -p .next/standalone/.next
cp -R public .next/standalone/public
cp -R .next/static .next/standalone/.next/static

echo "Standalone build is ready in $APP_DIR/.next/standalone"
