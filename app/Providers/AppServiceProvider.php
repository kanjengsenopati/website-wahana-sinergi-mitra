<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\DB;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (config('database.default') === 'sqlite') {
            try {
                DB::statement('PRAGMA journal_mode=WAL;');
            } catch (\Throwable $e) {
                // Ignore if db file not yet initialized
            }
        }
    }
}
