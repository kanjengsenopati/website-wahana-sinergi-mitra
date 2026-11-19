<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasColumn('services', 'image_url')) {
            Schema::table('services', function (Blueprint $table) {
                $table->string('image_url')->nullable()->after('icon');
            });
        }

        // Populate initial high-res construction photography for existing services
        $defaultPhotos = [
            'general-contractor' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
            'civil-structural-engineering' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
            'industrial-warehouses' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
            'commercial-buildings' => 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
            'mep-engineering' => 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80',
            'renovation-retrofitting' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        ];

        foreach ($defaultPhotos as $slug => $photoUrl) {
            DB::table('services')
                ->where('slug', $slug)
                ->where(function ($q) {
                    $q->whereNull('image_url')->orWhere('image_url', '');
                })
                ->update(['image_url' => $photoUrl]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasColumn('services', 'image_url')) {
            Schema::table('services', function (Blueprint $table) {
                $table->dropColumn('image_url');
            });
        }
    }
};
