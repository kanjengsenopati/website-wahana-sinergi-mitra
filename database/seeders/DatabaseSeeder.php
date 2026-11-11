<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Service;
use App\Models\Project;
use App\Models\Inquiry;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Default Admin User for Filament (/admin)
        User::firstOrCreate(
            ['email' => 'admin@wahanasinergimitra.id'],
            [
                'name' => 'Administrator WSM',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ]
        );

        // 2. Seed Services
        $services = [
            [
                'title' => 'General Contractor & Konstruksi Utama',
                'slug' => 'general-contractor',
                'icon' => 'HardHat',
                'short_description' => 'Pelaksanaan konstruksi skala menengah & besar dengan standar K3 ketat, material bersertifikat, dan manajemen waktu presisi.',
                'full_description' => 'Layanan general contractor menyeluruh mulai dari pekerjaan tanah, struktur pondasi dalam, struktur atas beton bertulang, baja berat, hingga finishing arsitektural bergaransi.',
                'order' => 1,
            ],
            [
                'title' => 'Civil & Structural Engineering',
                'slug' => 'civil-structural-engineering',
                'icon' => 'Building2',
                'short_description' => 'Perhitungan kalkulasi struktur terperinci, soil test, perkuatan struktur eksisting, dan rekayasa teknik sipil bersertifikasi SKA/SKK.',
                'full_description' => 'Didukung insinyur sipil berpengalaman dalam pemodelan software rekayasa terkini guna memastikan integritas gedung tahan gempa dan efisiensi volume material.',
                'order' => 2,
            ],
            [
                'title' => 'Pergudangan & Bangunan Industri',
                'slug' => 'industrial-warehouses',
                'icon' => 'Warehouse',
                'short_description' => 'Konstruksi gudang bentang lebar, pabrik manufaktur, struktur portal baja, lantai beton floor hardener, dan sistem loading dock.',
                'full_description' => 'Spesialisasi kami dalam rancang-bangun kawasan logistik dan industri dengan ketahanan beban lantai tinggi serta sirkulasi operasional optimal.',
                'order' => 3,
            ],
            [
                'title' => 'Gedung Komersial, Ruko & Perkantoran',
                'slug' => 'commercial-buildings',
                'icon' => 'Briefcase',
                'short_description' => 'Pembangunan gedung perkantoran, ruko modern, pusat ritel, dan klinik dengan estetika fasad kontemporer dan fungsionalitas ruang bisnis.',
                'full_description' => 'Mewujudkan ruang komersial yang prestisius, hemat energi, dan ramah pengguna dengan nilai investasi properti yang terus bertumbuh.',
                'order' => 4,
            ],
            [
                'title' => 'Mekanikal, Elektrikal & Plumbing (MEP)',
                'slug' => 'mep-engineering',
                'icon' => 'Wrench',
                'short_description' => 'Instalasi kelistrikan tegangan menengah/rendah, sistem tata udara (HVAC), proteksi kebakaran (hydrant/sprinkler), dan instalasi air bersih/kotor.',
                'full_description' => 'Sistem MEP terintegrasi berstandar SNI dan NFPA menjamin keamanan operasional gedung jangka panjang tanpa risiko korsleting.',
                'order' => 5,
            ],
            [
                'title' => 'Renovasi Skala Besar & Retrofitting',
                'slug' => 'renovation-retrofitting',
                'icon' => 'Hammer',
                'short_description' => 'Pemugaran, perubahan fungsi tata ruang, peremajaan fasad ACP/curtain wall, dan penguatan struktur kolom/balok tanpa mengganggu aktivitas sekitar.',
                'full_description' => 'Transformasi bangunan lama menjadi modern dan kokoh dengan pengawasan ahli untuk meminimalkan down-time operasional perusahaan.',
                'order' => 6,
            ],
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(['slug' => $service['slug']], $service);
        }

        // 3. Seed Projects
        $projects = [
            [
                'title' => 'Logistics Hub & Distribution Center WSM Indramayu',
                'slug' => 'logistics-hub-indramayu',
                'category' => 'Industri',
                'client_name' => 'PT. Sinergi Logistik Nasional',
                'location' => 'Indramayu, Jawa Barat',
                'project_value' => 14850000000,
                'year' => 2025,
                'thumbnail_url' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
                'status' => 'Selesai',
                'description' => 'Pembangunan gudang modern seluas 8.500 m² menggunakan konstruksi baja WF 400 dengan lantai heavy-duty floor hardener beban 5 ton/m².',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Office Tower & Business Center Graha Sinergi',
                'slug' => 'office-tower-graha-sinergi',
                'category' => 'Komersial',
                'client_name' => 'PT. Wahana Mitra Sejahtera',
                'location' => 'Bekasi, Jawa Barat',
                'project_value' => 28500000000,
                'year' => 2024,
                'thumbnail_url' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                'status' => 'Selesai',
                'description' => 'Konstruksi gedung perkantoran 7 lantai dengan fasad double-glazed Low-E glass, lift ganda, dan smart building automation system.',
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Kawasan Hunian Eksklusif Serenade Park Residences',
                'slug' => 'serenade-park-residences',
                'category' => 'Residensial',
                'client_name' => 'Dharma Kirana Properti',
                'location' => 'Bogor, Jawa Barat',
                'project_value' => 19200000000,
                'year' => 2024,
                'thumbnail_url' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
                'status' => 'Selesai',
                'description' => 'Pembangunan mastercluster 32 unit hunian tropis modern 2 lantai lengkap dengan fasilitas clubhouse, saluran drainase bawah tanah, dan jalan paving block K-300.',
                'is_featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Jembatan Penghubung & Akses Kawasan Industri Mitra',
                'slug' => 'jembatan-akses-industri-mitra',
                'category' => 'Infrastruktur',
                'client_name' => 'Pengelola Kawasan Industri Cikarang',
                'location' => 'Cikarang, Bekasi',
                'project_value' => 8750000000,
                'year' => 2025,
                'thumbnail_url' => 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                'status' => 'Selesai',
                'description' => 'Konstruksi jembatan girder beton prategang bentang 40 meter dengan kapasitas beban gandar MST 10 ton untuk lintasan truk kontainer.',
                'is_featured' => true,
                'order' => 4,
            ],
            [
                'title' => 'Renovasi & Re-Fasading Mall Citra Grand Plaza',
                'slug' => 'renovasi-fasad-citra-grand-plaza',
                'category' => 'Komersial',
                'client_name' => 'PT. Retail Persada Mulia',
                'location' => 'Tangerang, Banten',
                'project_value' => 6400000000,
                'year' => 2025,
                'thumbnail_url' => 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80',
                'status' => 'Berjalan',
                'description' => 'Peremajaan fasad eksterior dengan Aluminium Composite Panel (ACP) Seven fire-retardant dan perbaikan canopy drop-off utama seluas 3.200 m².',
                'is_featured' => false,
                'order' => 5,
            ],
            [
                'title' => 'Fasilitas Cold Storage & Pengolahan Hasil Laut',
                'slug' => 'cold-storage-muara-baru',
                'category' => 'Industri',
                'client_name' => 'CV. Samudera Prima Fresh',
                'location' => 'Muara Baru, Jakarta Utara',
                'project_value' => 11200000000,
                'year' => 2023,
                'thumbnail_url' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
                'status' => 'Selesai',
                'description' => 'Rancang bangun cold room suhu -25°C dengan panel insulasi PIR 150mm dan sistem pendingin ammonia ramah lingkungan.',
                'is_featured' => false,
                'order' => 6,
            ],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(['slug' => $project['slug']], $project);
        }

        // 4. Seed Testimonials
        $testimonials = [
            [
                'client_name' => 'Ir. Hendra Wijaya',
                'client_role' => 'Project Director',
                'company_name' => 'PT. Sinergi Logistik Nasional',
                'avatar_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'content' => 'CV. Wahana Sinergi Mitra membuktikan komitmen waktu yang luar biasa. Gudang 8.500 m² kami selesai 3 minggu lebih cepat dari target dengan kualitas beton dan lantai yang memenuhi standar audit multinasional.',
                'rating' => 5,
                'project_name' => 'Logistics Hub Indramayu',
                'order' => 1,
            ],
            [
                'client_name' => 'Bambang Kusumo, S.T.',
                'client_role' => 'Head of Estate Development',
                'company_name' => 'Dharma Kirana Properti',
                'avatar_url' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'content' => 'Transparansi RAB dan laporan progres mingguan WSM sangat rapi dan akuntabel. Kami tidak pernah mengalami over-budget yang tidak terduga. Sangat direkomendasikan untuk proyek komersial dan residensial.',
                'rating' => 5,
                'project_name' => 'Serenade Park Residences',
                'order' => 2,
            ],
            [
                'client_name' => 'Melisa Tanudjaja',
                'client_role' => 'Managing Partner',
                'company_name' => 'PT. Wahana Mitra Sejahtera',
                'avatar_url' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
                'content' => 'Gedung kantor 7 lantai kami dibangun dengan presisi tinggi. Koordinasi tim lapangan sangat komunikatif dan taat protokol keselamatan K3. Nilai investasinya sangat sepadan.',
                'rating' => 5,
                'project_name' => 'Graha Sinergi Office Tower',
                'order' => 3,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::updateOrCreate(['client_name' => $testimonial['client_name']], $testimonial);
        }

        // 5. Seed Sample Inquiry
        Inquiry::firstOrCreate(
            ['phone_wa' => '081299887766'],
            [
                'client_name' => 'Budi Santoso',
                'email' => 'budi.santoso@perusahaan.co.id',
                'project_type' => 'Pabrik & Pergudangan',
                'estimated_budget' => 5000000000,
                'building_area_m2' => 2500,
                'location' => 'Karawang, Jawa Barat',
                'message' => 'Mohon penawaran RAB untuk pembangunan fasilitas workshop baja ringan dan kantor operasional 2 lantai di Karawang Barat.',
                'status' => 'Baru',
                'internal_notes' => 'Leads potensial dari simulasi RAB landing page.',
            ]
        );

        // 6. Seed Default Company Settings
        $defaultSettings = [
            'hero_stat_projects' => '50+',
            'hero_stat_value' => 'Rp 85+ Miliar',
            'hero_stat_satisfaction' => '99.4%',
            'hero_stat_safety' => '1.250.000+ Jam',
            'company_phone' => '+62 812-3456-7890',
            'company_email' => 'info@wahanasinergimitra.id',
            'company_address' => 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia',
            'company_about' => 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya yang melayani pekerjaan gedung komersial, industri pergudangan, infrastruktur jalan/jembatan, dan rekayasa sipil berstandar mutu tinggi.',
        ];

        foreach ($defaultSettings as $key => $val) {
            \App\Models\CompanySetting::set($key, $val);
        }
    }
}
