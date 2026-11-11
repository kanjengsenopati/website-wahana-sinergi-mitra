<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanySetting extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get a setting by key with a fallback value.
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        $setting = static::where('key', $key)->first();

        return $setting ? $setting->value : $default;
    }

    /**
     * Get a JSON setting by key with a fallback array.
     */
    public static function getJson(string $key, array $default = []): array
    {
        $raw = static::get($key);
        if ($raw === null || $raw === '') {
            return $default;
        }

        $decoded = json_decode($raw, true);
        return is_array($decoded) ? array_merge($default, $decoded) : $default;
    }

    /**
     * Set a setting value.
     */
    public static function set(string $key, mixed $value, string $group = 'general'): static
    {
        return static::updateOrCreate(
            ['key' => $key],
            ['value' => $value, 'group' => $group]
        );
    }

    /**
     * Set a JSON setting value.
     */
    public static function setJson(string $key, array $value, string $group = 'sections'): static
    {
        return static::set($key, json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), $group);
    }

    /**
     * Get default visibility map for all public landing page sections.
     */
    public static function getDefaultSectionVisibility(): array
    {
        return [
            'hero' => true,
            'hero_3d' => true,
            'services' => true,
            'estimator' => true,
            'portfolio' => true,
            'workflow' => true,
            'proksi' => true,
            'testimonials' => true,
            'inquiry' => true,
            'footer' => true,
        ];
    }

    /**
     * Get section visibility merged with defaults.
     */
    public static function getSectionVisibility(): array
    {
        return static::getJson('section_visibility', static::getDefaultSectionVisibility());
    }

    /**
     * Get default data for a section.
     */
    public static function getDefaultSectionData(string $section): array
    {
        $defaults = [
            'hero' => [
                'badge' => '3D Visualisation & Architectural Engineering',
                'title_line1' => 'Membangun Masa Depan',
                'title_line2' => 'Presisi Konstruksi Nyata',
                'description' => 'Eksplorasi mahakarya arsitektur modern dengan rekayasa sipil berstandar tinggi. Pantau progres proyek, mutu beton, dan ketepatan struktur secara real-time.',
                'cta_primary_text' => 'Konsultasi Proyek Baru',
                'cta_primary_link' => '#inquiry',
                'cta_secondary_text' => 'Galeri Portofolio',
                'cta_secondary_link' => '#portofolio',
            ],
            'services_meta' => [
                'badge' => 'Layanan Konstruksi Terpadu',
                'title' => 'Solusi Total Rancang Bangun & Rekayasa Sipil',
                'subtitle' => 'Dari perencanaan konseptual, perhitungan struktur tahan gempa, hingga pelaksanaan konstruksi di lapangan dengan standar mutu terjamin.',
            ],
            'estimator_data' => [
                'badge' => 'Kalkulator Biaya Proyek',
                'title' => 'Simulasi Estimasi Rencana Anggaran Biaya (RAB)',
                'subtitle' => 'Dapatkan estimasi awal biaya pembangunan proyek Anda secara transparan berdasarkan kategori bangunan, luas lantai, dan kelas material standar SNI.',
                'building_options' => [
                    ['id' => 'gudang', 'label' => 'Gudang & Industri', 'baseRatePerM2' => 3600000, 'description' => 'Struktur baja WF, pelat beton heavy-duty, atap zincalume'],
                    ['id' => 'komersial', 'label' => 'Komersial / Ruko / Kantor', 'baseRatePerM2' => 5200000, 'description' => 'Struktur beton bertulang, fasad ACP/kaca, partisi rapi'],
                    ['id' => 'residensial', 'label' => 'Hunian Residensial', 'baseRatePerM2' => 5800000, 'description' => 'Kusen aluminium powder coating, granit 60x60, sanitary Toto'],
                    ['id' => 'renovasi', 'label' => 'Renovasi & Retrofitting', 'baseRatePerM2' => 2800000, 'description' => 'Peremajaan fasad, perkuatan struktur, utilitas MEP baru'],
                ],
                'material_tiers' => [
                    ['id' => 'standar', 'name' => 'Standar Proyek', 'multiplier' => 1.0, 'desc' => 'Bahan SNI teruji ekonomis'],
                    ['id' => 'premium', 'name' => 'Premium (Rekomendasi)', 'multiplier' => 1.2, 'desc' => 'Brand terkemuka daya tahan tinggi'],
                    ['id' => 'eksklusif', 'name' => 'Eksklusif / Heavy-Duty', 'multiplier' => 1.45, 'desc' => 'Spesifikasi industrial & mewah'],
                ],
            ],
            'portfolio_meta' => [
                'badge' => 'Portofolio Terpercaya',
                'title' => 'Rekam Jejak Karya Konstruksi & Rekayasa Sipil',
                'subtitle' => 'Jelajahi portofolio proyek selesai dan sedang berjalan yang telah kami kerjakan dengan komitmen mutu tinggi dan ketepatan waktu.',
            ],
            'workflow_data' => [
                'badge' => 'Metodologi Kerja',
                'title' => 'Standar Eksekusi Proyek Yang Terukur & Akuntabel',
                'subtitle' => 'Kami menerapkan tata kelola konstruksi modern untuk memastikan zero-miscommunication, menghindari biaya membengkak, dan mencapai target serah terima tepat waktu.',
                'steps' => [
                    ['number' => '01', 'title' => 'Survei & Analisis Struktur', 'icon' => 'ClipboardCheck', 'description' => 'Pengukuran topografi, pengujian daya dukung tanah (soil test), dan diskusi kebutuhan spesifikasi teknis.'],
                    ['number' => '02', 'title' => 'DED & Transparansi RAB', 'icon' => 'FileSpreadsheet', 'description' => 'Pembuatan gambar kerja DED (Detail Engineering Design), jadwal kurva-S, dan kontrak perjanjian kerja mengikat.'],
                    ['number' => '03', 'title' => 'Konstruksi Berstandar K3', 'icon' => 'ShieldAlert', 'description' => 'Eksekusi lapangan dengan material SNI teruji lab, pengawasan mandor ahli, dan kepatuhan keselamatan zero-accident.'],
                    ['number' => '04', 'title' => 'Handover & Masa Retensi', 'icon' => 'KeyRound', 'description' => 'Berita acara serah terima resmi (BAST 1 & 2), as-built drawing, serta jaminan garansi pemeliharaan struktural.'],
                ],
            ],
            'proksi_data' => [
                'badge' => 'Teknologi Ekosistem Digital WSM',
                'title_prefix' => 'Ekosistem Aplikasi',
                'title_highlight' => 'PROKSI',
                'title_suffix' => '(Proyek Konstruksi)',
                'subtitle' => 'Seluruh proyek konstruksi kami diawasi langsung secara real-time berbasis Automated Digitalization. Pemilik proyek (owner) memiliki hak akses mandiri untuk memantau kurva-S harian, jadwal Gantt Chart, kepatuhan K3, dan log foto progres lapangan tanpa manipulasi data.',
                'scurve_plan' => '64.5%',
                'scurve_actual' => '68.2%',
                'scurve_deviation' => '+3.7%',
                'zero_accident_days' => 428,
                'apd_compliance' => '99.8%',
                'ptw_active' => 14,
            ],
            'testimonials_meta' => [
                'badge' => 'Testimoni Klien',
                'title' => 'Kepercayaan Klien Adalah Tolok Ukur Keberhasilan Kami',
                'subtitle' => 'Ulasan jujur dari para pemimpin perusahaan dan pemilik proyek yang telah mempercayakan pembangunan fasilitas mereka kepada CV. Wahana Sinergi Mitra.',
            ],
            'inquiry_meta' => [
                'badge' => 'Konsultasi Gratis',
                'title' => 'Rencanakan Proyek Impian Anda Bersama Kami',
                'subtitle' => 'Konsultasikan kebutuhan konstruksi Anda dengan tim engineer ahli kami. Dapatkan analisis kelayakan awal, estimasi biaya akurat, dan jadwal pelaksanaan yang realistis.',
            ],
        ];

        return $defaults[$section] ?? [];
    }

    /**
     * Get section data merged with defaults.
     */
    public static function getSectionData(string $section): array
    {
        return static::getJson("section_{$section}", static::getDefaultSectionData($section));
    }
}
