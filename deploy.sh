#!/usr/bin/env bash
# ==============================================================================
# DEPLOYMENT SCRIPT: CV. WAHANA SINERGI MITRA
# Subdomain: website.wahanasinergimitra.id
# Target: VPS (aaPanel / Ubuntu / Debian with Nginx & PHP 8.3)
# Path: /www/wwwroot/website.wahanasinergimitra.id
# ==============================================================================

set -e

echo "🚀 [1/7] Mengaktifkan Maintenance Mode..."
php artisan down || true

echo "📦 [2/7] Mengambil update source code terbaru..."
git pull origin main

echo "⚙️ [3/7] Menginstal dependensi Composer (Production)..."
composer install --no-dev --prefer-dist --optimize-autoloader --no-interaction

echo "🗄️ [4/7] Menjalankan migrasi database SQLite..."
# Pastikan file sqlite ada dan memiliki permission write www-data
touch database/database.sqlite
chmod 775 database
chmod 664 database/database.sqlite
php artisan migrate --force

echo "🔗 [5/7] Memastikan storage symlink terhubung..."
php artisan storage:link || true

echo "⚡ [6/7] Memeriksa aset frontend Vite (Pre-compiled via Git)..."
if [ ! -f "public/build/manifest.json" ]; then
    echo "Manifest belum ada, mencoba compile aset frontend..."
    npm run build || true
fi

echo "🧹 [7/7] Optimasi caching Laravel (Config, Route, View, Filament)..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan filament:optimize || true

echo "🔒 Memperbaiki hak akses direktori storage dan database..."
WEB_USER="www-data"
if id "www" &>/dev/null; then
    WEB_USER="www"
fi
chown -R $WEB_USER:$WEB_USER storage bootstrap/cache database
chmod -R 775 storage bootstrap/cache database

echo "✅ Menonaktifkan Maintenance Mode..."
php artisan up

echo "🎉 Deployment ke website.wahanasinergimitra.id selesai dengan sukses!"
