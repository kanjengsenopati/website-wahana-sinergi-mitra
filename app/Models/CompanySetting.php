<?php

namespace App\Models;

use App\Support\MediaStorage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanySetting extends Model
{
    use HasFactory;

    public const DEFAULT_LOGO_URL = '/images/logo-wsm.jpg';

    protected $guarded = [];

    /**
     * Get the active website logo URL with safe fallback to the default static logo.
     */
    public static function getSiteLogoUrl(): string
    {
        try {
            $raw = static::get('company_logo_url');
            $normalized = MediaStorage::normalizeUrl(is_string($raw) ? $raw : null);

            return $normalized ?: self::DEFAULT_LOGO_URL;
        } catch (\Throwable) {
            return self::DEFAULT_LOGO_URL;
        }
    }

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
            'about' => true,
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
                'badge' => 'SBU Konstruksi Aktif • General Contractor & Civil Engineering',
                'title_line1' => 'Membangun Masa Depan',
                'title_line2' => 'Presisi Konstruksi Nyata',
                'description' => 'Pelaksana konstruksi gedung komersial, gudang industri struktur baja WF, dan rekayasa sipil berstandar SNI. Didukung pengawasan mutu K3 Zero-Accident serta transparansi kurva-S real-time.',
                'cta_primary_text' => 'Konsultasi Proyek Baru',
                'cta_primary_link' => '#inquiry',
                'cta_secondary_text' => 'Lihat Portofolio & Tabel Kontrak',
                'cta_secondary_link' => '#portofolio',
                'slides' => [
                    [
                        'id' => 1,
                        'tag' => 'SBU KONSTRUKSI AKTIF • ISO 9001 & 45001 CERTIFIED',
                        'location' => 'Kawasan Industri Cikarang & Karawang',
                        'caption' => 'Dokumentasi Lapangan: Erection Struktur Baja WF 400 & Inspeksi HSE',
                        'image' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
                        'sector' => 'Konstruksi Gudang, Pabrik & Struktur Baja Bentang Lebar',
                    ],
                    [
                        'id' => 2,
                        'tag' => 'GENERAL CONTRACTOR & ARCHITECTURAL FIT-OUT',
                        'location' => 'Jabodetabek & Jawa Barat',
                        'caption' => 'Dokumentasi Proyek: Konstruksi Gedung Perkantoran & Fasad Komersial',
                        'image' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
                        'sector' => 'Pembangunan Gedung Kantor, Ruko Komersial & Fasilitas Publik',
                    ],
                    [
                        'id' => 3,
                        'tag' => 'ZERO-ACCIDENT K3 CULTURE • SMK3 TERVERIFIKASI',
                        'location' => 'Pengawasan Mutu Terpadu (PROKSI)',
                        'caption' => 'Dokumentasi Tim Engineer: Pengawasan Mutu Beton K-350 & Keselamatan Kerja',
                        'image' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
                        'sector' => 'Manajemen Proyek Berstandar SNI dengan Pelaporan Real-Time',
                    ],
                    [
                        'id' => 4,
                        'tag' => 'CIVIL ENGINEERING & HEAVY INFRASTRUCTURE',
                        'location' => 'Jawa Barat, Banten & Nasional',
                        'caption' => 'Dokumentasi Infrastruktur: Perkerasan Jalan Rigid Pavement & Drainase Kawasan',
                        'image' => 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1800&q=85',
                        'sector' => 'Rekayasa Sipil, Perkerasan Jalan Beton, Pondasi Bore Pile & MEP',
                    ],
                ],
            ],
            'about_data' => [
                'badge' => '• TENTANG CV. WAHANA SINERGI MITRA',
                'title' => 'Kontraktor Umum & Rekayasa Sipil {Berpengalaman & Terpercaya}',
                'subtitle' => 'Dengan dukungan tim insinyur sipil bersertifikat SKA/SKT, peralatan konstruksi modern, serta sistem pemantauan digital PROKSI, kami memastikan setiap tahapan proyek berjalan sesuai spesifikasi teknis SNI, tepat anggaran, dan tepat jadwal.',
                'experience_years' => '12+ Tahun',
                'photo_main_url' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
                'photo_secondary_url' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
                'pillars' => [
                    [
                        'code' => '01',
                        'title' => 'Fokus Kepuasan Klien',
                        'subtitle' => 'Customer Focus & Dedicated PM',
                        'description' => 'Didampingi Project Manager khusus sejak tahap pra-desain hingga masa pemeliharaan selesai.',
                        'icon' => 'Target',
                    ],
                    [
                        'code' => '02',
                        'title' => 'Prioritas Mutu SNI',
                        'subtitle' => 'Lab-Tested Material Quality',
                        'description' => 'Seluruh baja WF, besi beton ulir, dan ready-mix K-350 dilengkapi sertifikat uji laboratorium.',
                        'icon' => 'Award',
                    ],
                    [
                        'code' => '03',
                        'title' => 'Layanan Teknis Prima',
                        'subtitle' => 'Full Engineering & MEP Support',
                        'description' => 'Integrasi pekerjaan sipil, arsitektur, struktur baja, dan instalasi MEP dalam satu komando.',
                        'icon' => 'ThumbsUp',
                    ],
                    [
                        'code' => '04',
                        'title' => 'RAB Transparan & Kompetitif',
                        'subtitle' => 'Auditable Engineering Estimate',
                        'description' => 'Rincian volume dan harga satuan material terbuka tanpa biaya tersembunyi di tengah proyek.',
                        'icon' => 'FileCheck2',
                    ],
                    [
                        'code' => '05',
                        'title' => 'Pengalaman & K3 Teruji',
                        'subtitle' => 'Zero-Accident HSE Culture',
                        'description' => 'Rekam jejak lebih dari 12 tahun menangani proyek industri, pergudangan, dan gedung komersial.',
                        'icon' => 'HardHat',
                    ],
                ],
                'certifications' => [
                    [
                        'code' => 'ISO 9001:2015',
                        'title' => 'Sistem Manajemen Mutu Konstruksi',
                        'issuer' => 'Quality Management System Certified',
                        'desc' => 'Standarisasi pengendalian mutu pengecoran, fabrikasi baja, dan ketepatan gambar kerja DED.',
                        'badgeText' => 'Verified QMS',
                    ],
                    [
                        'code' => 'ISO 45001:2018 & SMK3',
                        'title' => 'Keselamatan & Kesehatan Kerja (K3)',
                        'issuer' => 'Occupational Health & Safety System',
                        'desc' => 'Penerapan wajib APD lengkap, izin kerja risiko tinggi (PTW), dan toolbox meeting harian.',
                        'badgeText' => 'Zero Accident',
                    ],
                    [
                        'code' => 'SBUJK & GAPENSI',
                        'title' => 'Sertifikat Badan Usaha Jasa Konstruksi',
                        'issuer' => 'Anggota Resmi GAPENSI & Terdaftar LPSE',
                        'desc' => 'Legalitas penuh untuk mengikuti tender korporasi swasta nasional, BUMN, dan instansi pemerintah.',
                        'badgeText' => 'Active License',
                    ],
                ],
                'client_sectors' => [
                    ['name' => 'Kawasan Industri & Manufaktur', 'region' => 'Cikarang • Karawang • Bekasi'],
                    ['name' => 'Pergudangan & Cold-Storage Logistik', 'region' => 'Jabodetabek • Subang • Banten'],
                    ['name' => 'Gedung Perkantoran & Ruko Komersial', 'region' => 'Jakarta • Bandung • Jawa Barat'],
                    ['name' => 'Fasilitas Pendidikan & Rumah Sakit', 'region' => 'Jawa Barat • Jawa Tengah • Nasional'],
                    ['name' => 'Infrastruktur Jalan Beton & Drainase', 'region' => 'Kawasan Niaga & Proyek Pemerintah'],
                ],
            ],
            'services_meta' => [
                'badge' => 'Layanan Konstruksi Terpadu',
                'title' => 'Solusi Total Rancang Bangun & {Rekayasa Sipil}',
                'subtitle' => 'Dari perencanaan konseptual, perhitungan struktur tahan gempa, hingga pelaksanaan konstruksi di lapangan dengan standar mutu terjamin.',
            ],
            'estimator_data' => [
                'badge' => 'Kalkulator Biaya Proyek',
                'title' => 'Simulasi Estimasi Rencana {Anggaran Biaya (RAB)}',
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
                'title' => 'Karya Konstruksi Terbukti {Kokoh & Bernilai Tinggi}',
                'subtitle' => 'Jelajahi portofolio proyek selesai dan sedang berjalan yang telah kami kerjakan dengan komitmen mutu tinggi dan ketepatan waktu.',
                'show_project_value' => true,
            ],
            'workflow_data' => [
                'badge' => 'Metodologi Kerja',
                'title' => 'Standar Eksekusi Proyek Yang {Terukur & Akuntabel}',
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
                'title' => 'Kepercayaan Nyata Dari {Para Pemilik Proyek}',
                'subtitle' => 'Ulasan jujur dari para pemimpin perusahaan dan pemilik proyek yang telah mempercayakan pembangunan fasilitas mereka kepada CV. Wahana Sinergi Mitra.',
            ],
            'inquiry_meta' => [
                'badge' => 'Konsultasi Gratis',
                'title' => 'Rencanakan Proyek Impian {Bersama Tim Engineer Kami}',
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
