<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Update legacy dead 404 Unsplash URLs in projects table to local guaranteed asset.
     */
    public function up(): void
    {
        DB::table('projects')
            ->whereNull('thumbnail_url')
            ->orWhere('thumbnail_url', '')
            ->orWhere('thumbnail_url', 'like', '%1541888946425%')
            ->update([
                'thumbnail_url' => '/images/project-placeholder.jpg',
            ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No need to revert to dead URLs
    }
};
