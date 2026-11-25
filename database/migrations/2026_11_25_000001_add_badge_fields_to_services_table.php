<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            if (!Schema::hasColumn('services', 'badge_text')) {
                $table->string('badge_text', 100)->nullable()->after('icon');
            }
            if (!Schema::hasColumn('services', 'badge_color')) {
                $table->string('badge_color', 20)->nullable()->default('#059669')->after('badge_text');
            }
        });

        $defaultStandards = [
            'SNI 1729 & SNI 2847',
            'Fabrikasi Baja WF Presisi',
            'Garansi Struktur & Retensi',
            'Instalasi Standar PUIL & NFPA',
            'Perkerasan Rigid K-350/K-400',
            'DED & As-Built Drawing Lengkap',
        ];

        $services = DB::table('services')->orderBy('order')->orderBy('id')->get();
        foreach ($services as $idx => $srv) {
            DB::table('services')
                ->where('id', $srv->id)
                ->update([
                    'badge_text' => $srv->badge_text ?? $defaultStandards[$idx % count($defaultStandards)],
                    'badge_color' => $srv->badge_color ?: '#059669',
                ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $columns = [];
            if (Schema::hasColumn('services', 'badge_text')) {
                $columns[] = 'badge_text';
            }
            if (Schema::hasColumn('services', 'badge_color')) {
                $columns[] = 'badge_color';
            }
            if (!empty($columns)) {
                $table->dropColumn($columns);
            }
        });
    }
};
