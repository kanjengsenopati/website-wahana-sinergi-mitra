<?php

namespace App\Models;

use App\Support\MediaStorage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanySetting extends Model
{
    use HasFactory;

    public const DEFAULT_LOGO_URL = '/images/logo-wsm.jpg';

    public const DEFAULT_PHONE_LANDLINE = '024-7xxxx';

    public const DEFAULT_PHONE_LANDLINE_LABEL = 'Telepon Kantor / Kabel';

    public const DEFAULT_PHONE = '+62 812-3456-7890';

    public const DEFAULT_PHONE_LABEL = 'Hotline Utama / Kantor';

    public const DEFAULT_PHONE_2 = '+62 813-2233-4455';

    public const DEFAULT_PHONE_2_LABEL = 'Kontak Workshop / Operasional';

    public const DEFAULT_EMAIL = 'info@wahanasinergimitra.id';

    public const DEFAULT_OPERATING_HOURS = 'Senin – Sabtu: 08.00 – 17.00 WIB';

    public const DEFAULT_ADDRESS = 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia';

    public const DEFAULT_WORKSHOP_ADDRESS = 'Jl. Industri Fabrikasi No. 12, Kawasan Workshop & Gudang Baja WSM, Jawa Barat, Indonesia';

    public const DEFAULT_WORKSHOP_COORDINATES = '-6.300641, 107.148957';

    public const DEFAULT_ABOUT = 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya yang melayani pekerjaan gedung komersial, industri pergudangan, infrastruktur jalan/jembatan, dan rekayasa sipil berstandar mutu tinggi.';

    private const ALLOWED_GOOGLE_MAP_HOSTS = [
        'google.com',
        'www.google.com',
        'maps.google.com',
        'maps.app.goo.gl',
        'goo.gl',
    ];

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
     * Parse and validate a GPS coordinate string ("lat, lng" or "lat lng").
     *
     * @return array{lat: float, lng: float, formatted: string}|null
     */
    public static function parseCoordinates(?string $raw): ?array
    {
        if (!is_string($raw)) {
            return null;
        }

        $trimmed = trim($raw);
        if ($trimmed === '') {
            return null;
        }

        if (!preg_match('/^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,;\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/', $trimmed, $matches)) {
            return null;
        }

        $lat = (float) $matches[1];
        $lng = (float) $matches[2];

        if ($lat < -90.0 || $lat > 90.0 || $lng < -180.0 || $lng > 180.0) {
            return null;
        }

        return [
            'lat' => $lat,
            'lng' => $lng,
            'formatted' => $matches[1] . ', ' . $matches[2],
        ];
    }

    /**
     * Extract a safe Google Maps URL from either a plain URL or an <iframe> embed snippet.
     * Returns null when non-empty input is not a valid HTTPS Google Maps URL.
     */
    public static function sanitizeGoogleMapInput(?string $raw): ?string
    {
        if (!is_string($raw)) {
            return '';
        }

        $trimmed = trim($raw);
        if ($trimmed === '') {
            return '';
        }

        // If admin pasted full <iframe ... src="..."> snippet, extract src attribute
        if (stripos($trimmed, '<iframe') !== false) {
            if (preg_match('/\bsrc\s*=\s*["\']([^"\']+)["\']/i', $trimmed, $matches)) {
                $trimmed = html_entity_decode(trim($matches[1]), ENT_QUOTES | ENT_HTML5, 'UTF-8');
            } else {
                return null;
            }
        }

        $parts = parse_url($trimmed);
        if (!is_array($parts)) {
            return null;
        }

        $scheme = strtolower((string) ($parts['scheme'] ?? ''));
        $host = strtolower((string) ($parts['host'] ?? ''));

        if ($scheme !== 'https' || $host === '') {
            return null;
        }

        $isAllowedHost = in_array($host, self::ALLOWED_GOOGLE_MAP_HOSTS, true)
            || preg_match('/^(?:www\.|maps\.)?google\.[a-z]{2,3}(?:\.[a-z]{2})?$/', $host) === 1;

        if (!$isAllowedHost) {
            return null;
        }

        // Restrict goo.gl shortlinks specifically to /maps paths
        if ($host === 'goo.gl' && !str_starts_with((string) ($parts['path'] ?? ''), '/maps')) {
            return null;
        }

        return $trimmed;
    }

    /**
     * Extract exact pin coordinates from a Google Maps URL (!3d...!4d..., @lat,lng, or query params).
     *
     * @return array{lat: float, lng: float, formatted: string}|null
     */
    public static function extractCoordinatesFromGoogleMapUrl(?string $url): ?array
    {
        if (!is_string($url) || trim($url) === '') {
            return null;
        }

        // 1. Exact place pin (!3dLAT!4dLNG) - highest precision in Google Maps URLs
        if (preg_match('/!3d(-?\d{1,2}\.\d+)!4d(-?\d{1,3}\.\d+)/', $url, $matches)) {
            return self::parseCoordinates($matches[1] . ', ' . $matches[2]);
        }

        // 2. Query parameter (?q=lat,lng or &query=lat,lng or &ll=lat,lng or &destination=lat,lng)
        if (preg_match('/[?&](?:q|query|ll|destination)=(-?\d{1,2}\.\d+)(?:,|%2C|\+)(-?\d{1,3}\.\d+)/i', $url, $matches)) {
            return self::parseCoordinates($matches[1] . ', ' . $matches[2]);
        }

        // 3. Viewport center (@lat,lng)
        if (preg_match('/@(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/', $url, $matches)) {
            return self::parseCoordinates($matches[1] . ', ' . $matches[2]);
        }

        return null;
    }

    /**
     * Resolve embeddable and external Google Maps URLs for the Workshop location.
     *
     * @return array{embed_url: string, external_url: string, coordinates_formatted: string, is_precise: bool}
     */
    public static function resolveWorkshopMap(?string $coordinates, ?string $mapUrl, ?string $address): array
    {
        $parsedCoords = self::parseCoordinates($coordinates);
        $cleanMapUrl = self::sanitizeGoogleMapInput($mapUrl);
        if ($cleanMapUrl === null) {
            $cleanMapUrl = '';
        }

        $isEmbedUrl = $cleanMapUrl !== '' && str_contains(strtolower($cleanMapUrl), '/maps/embed');
        $isShortLink = $cleanMapUrl !== '' && preg_match('#^https://(?:maps\.app\.goo\.gl|goo\.gl/maps)/#i', $cleanMapUrl) === 1;
        $urlCoords = self::extractCoordinatesFromGoogleMapUrl($cleanMapUrl);
        $effectiveCoords = $parsedCoords ?? $urlCoords;

        $embedUrl = '';
        $isPrecise = false;

        if ($isEmbedUrl) {
            $embedUrl = $cleanMapUrl;
            $isPrecise = true;
        } elseif ($effectiveCoords !== null) {
            $coordQuery = rawurlencode($effectiveCoords['formatted']);
            $embedUrl = "https://maps.google.com/maps?q={$coordQuery}&hl=id&z=17&output=embed";
            $isPrecise = true;
        } elseif (is_string($address) && trim($address) !== '') {
            $addrQuery = rawurlencode(trim($address));
            $embedUrl = "https://maps.google.com/maps?q={$addrQuery}&hl=id&z=16&output=embed";
            $isPrecise = false;
        }

        $externalUrl = '';
        if ($cleanMapUrl !== '' && !$isEmbedUrl) {
            $externalUrl = $cleanMapUrl;
        } elseif ($effectiveCoords !== null) {
            $coordQuery = rawurlencode($effectiveCoords['formatted']);
            $externalUrl = "https://www.google.com/maps/search/?api=1&query={$coordQuery}";
        } elseif (is_string($address) && trim($address) !== '') {
            $addrQuery = rawurlencode(trim($address));
            $externalUrl = "https://www.google.com/maps/search/?api=1&query={$addrQuery}";
        }

        return [
            'embed_url' => $embedUrl,
            'external_url' => $externalUrl,
            'coordinates_formatted' => $effectiveCoords['formatted'] ?? '',
            'is_precise' => $isPrecise,
            'is_short_link_without_coords' => $isShortLink && $parsedCoords === null,
        ];
    }

    /**
     * Get the complete SSOT company profile (2 contacts, 2 addresses, precise Workshop Google Map, & logo).
     */
    public static function getCompanyProfile(): array
    {
        $workshopAddress = (string) static::get('company_workshop_address', self::DEFAULT_WORKSHOP_ADDRESS);
        $workshopCoordinates = (string) static::get('company_workshop_coordinates', self::DEFAULT_WORKSHOP_COORDINATES);
        $workshopMapUrl = (string) static::get('company_workshop_map_url', '');
        $resolvedMap = self::resolveWorkshopMap($workshopCoordinates, $workshopMapUrl, $workshopAddress);

        return [
            'logo_url' => self::getSiteLogoUrl(),
            'phone_landline' => (string) static::get('company_phone_landline', self::DEFAULT_PHONE_LANDLINE),
            'phone_landline_label' => (string) static::get('company_phone_landline_label', self::DEFAULT_PHONE_LANDLINE_LABEL),
            'phone' => (string) static::get('company_phone', self::DEFAULT_PHONE),
            'phone_label' => (string) static::get('company_phone_label', self::DEFAULT_PHONE_LABEL),
            'phone_2' => (string) static::get('company_phone_2', self::DEFAULT_PHONE_2),
            'phone_2_label' => (string) static::get('company_phone_2_label', self::DEFAULT_PHONE_2_LABEL),
            'email' => (string) static::get('company_email', self::DEFAULT_EMAIL),
            'operating_hours' => (string) static::get('company_operating_hours', self::DEFAULT_OPERATING_HOURS),
            'address' => (string) static::get('company_address', self::DEFAULT_ADDRESS),
            'workshop_address' => $workshopAddress,
            'workshop_coordinates' => $workshopCoordinates,
            'workshop_map_url' => $workshopMapUrl,
            'workshop_map_embed_url' => $resolvedMap['embed_url'],
            'workshop_map_external_url' => $resolvedMap['external_url'],
            'workshop_map_is_precise' => $resolvedMap['is_precise'],
            'about' => (string) static::get('company_about', self::DEFAULT_ABOUT),
        ];
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
                    [
                        'id' => 'gedung',
                        'label' => 'Gedung',
                        'icon' => 'Building',
                        'baseRatePerM2' => 5500000,
                        'description' => 'Struktur beton bertulang, fasilitas publik, pendidikan & bertingkat',
                    ],
                    [
                        'id' => 'gudang',
                        'label' => 'Gudang',
                        'icon' => 'Warehouse',
                        'baseRatePerM2' => 3600000,
                        'description' => 'Struktur baja WF, pelat beton heavy-duty, atap zincalume',
                    ],
                    [
                        'id' => 'komersial',
                        'label' => 'Perkantoran / Komersial',
                        'icon' => 'Building2',
                        'baseRatePerM2' => 5200000,
                        'description' => 'Struktur beton bertulang, fasad ACP/kaca, partisi rapi',
                    ],
                    [
                        'id' => 'renovasi',
                        'label' => 'Renovasi',
                        'icon' => 'Wrench',
                        'baseRatePerM2' => 2800000,
                        'description' => 'Peremajaan fasad, perkuatan struktur, utilitas MEP baru',
                    ],
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
        $defaults = static::getDefaultSectionData($section);
        $data = static::getJson("section_{$section}", $defaults);

        if ($section === 'estimator_data') {
            $data = static::normalizeEstimatorData($data, $defaults);
        }

        return $data;
    }

    /**
     * Normalize legacy 4-category estimator_data in DB into the 6 canonical project categories
     * with representative icons while preserving any custom saved rates.
     */
    protected static function normalizeEstimatorData(array $data, array $defaults): array
    {
        $defaultOptions = $defaults['building_options'] ?? [];
        $savedById = [];
        foreach ($data['building_options'] ?? [] as $opt) {
            if (is_array($opt) && ! empty($opt['id'])) {
                $savedById[(string) $opt['id']] = $opt;
            }
        }

        $normalized = [];
        foreach ($defaultOptions as $defaultOpt) {
            $id = $defaultOpt['id'];
            $saved = $savedById[$id] ?? [];
            $rate = isset($saved['baseRatePerM2']) && is_numeric($saved['baseRatePerM2']) && (float) $saved['baseRatePerM2'] > 0
                ? (int) $saved['baseRatePerM2']
                : $defaultOpt['baseRatePerM2'];

            $normalized[] = [
                'id' => $id,
                'label' => $defaultOpt['label'],
                'icon' => $defaultOpt['icon'],
                'baseRatePerM2' => $rate,
                'description' => $defaultOpt['description'],
            ];
        }

        $data['building_options'] = $normalized;
        if (empty($data['material_tiers'])) {
            $data['material_tiers'] = $defaults['material_tiers'] ?? [];
        }

        return $data;
    }
}
