<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PortfolioAutoSortTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create([
            'name' => 'Super Admin WSM',
            'email' => 'admin@wahanasinergimitra.id',
            'role' => 'Super Admin',
        ]);
    }

    public function test_portfolio_auto_sorts_by_newest_year_then_ongoing_status_then_newest_id(): void
    {
        // Deliberately assign conflicting manual `order` values to prove year auto-sort takes precedence
        $oldest2019 = Project::create([
            'title' => 'Gudang Lama 2019',
            'slug' => 'gudang-lama-2019',
            'category' => 'Industri',
            'location' => 'Bekasi',
            'year' => 2019,
            'status' => 'Selesai',
            'order' => 1,
        ]);

        $completed2025First = Project::create([
            'title' => 'Klinik 2025 Selesai A',
            'slug' => 'klinik-2025-selesai-a',
            'category' => 'Bangunan Kesehatan',
            'location' => 'Semarang',
            'year' => 2025,
            'status' => 'Selesai',
            'order' => 2,
        ]);

        $completed2025Second = Project::create([
            'title' => 'Kampus 2025 Selesai B',
            'slug' => 'kampus-2025-selesai-b',
            'category' => 'Bangunan Pendidikan',
            'location' => 'Bandung',
            'year' => 2025,
            'status' => 'Selesai',
            'order' => 50,
        ]);

        $ongoing2025 = Project::create([
            'title' => 'Hotel 2025 Berjalan',
            'slug' => 'hotel-2025-berjalan',
            'category' => 'Bangunan Penginapan',
            'location' => 'Yogyakarta',
            'year' => 2025,
            'status' => 'Berjalan',
            'order' => 99,
        ]);

        $newest2026 = Project::create([
            'title' => 'Gedung 2026 Terbaru',
            'slug' => 'gedung-2026-terbaru',
            'category' => 'Komersial',
            'location' => 'Jakarta',
            'year' => 2026,
            'status' => 'Selesai',
            'order' => 100,
        ]);

        $middle2022 = Project::create([
            'title' => 'Jalan Beton 2022',
            'slug' => 'jalan-beton-2022',
            'category' => 'Infrastruktur',
            'location' => 'Karawang',
            'year' => 2022,
            'status' => 'Selesai',
            'order' => 0,
        ]);

        $expectedOrder = [
            $newest2026->title,          // 2026 (terkini -> paling atas)
            $ongoing2025->title,         // 2025 Berjalan (sebelum Selesai di tahun sama)
            $completed2025Second->title, // 2025 Selesai (id lebih baru)
            $completed2025First->title,  // 2025 Selesai (id lebih lama)
            $middle2022->title,          // 2022
            $oldest2019->title,          // 2019 (paling lama -> paling bawah)
        ];

        // 1. Public Landing Page
        $this->get('/')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->has('projects', 6)
                ->where('projects.0.title', $expectedOrder[0])
                ->where('projects.1.title', $expectedOrder[1])
                ->where('projects.2.title', $expectedOrder[2])
                ->where('projects.3.title', $expectedOrder[3])
                ->where('projects.4.title', $expectedOrder[4])
                ->where('projects.5.title', $expectedOrder[5])
            );

        // 2. Admin Dashboard
        $this->actingAs($this->admin)->get('/admin')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->has('projects', 6)
                ->where('projects.0.title', $expectedOrder[0])
                ->where('projects.1.title', $expectedOrder[1])
                ->where('projects.2.title', $expectedOrder[2])
                ->where('projects.3.title', $expectedOrder[3])
                ->where('projects.4.title', $expectedOrder[4])
                ->where('projects.5.title', $expectedOrder[5])
            );
    }

    public function test_updating_project_year_automatically_moves_its_portfolio_position(): void
    {
        $projA = Project::create([
            'title' => 'Proyek A',
            'slug' => 'proyek-a',
            'category' => 'Komersial',
            'location' => 'Jakarta',
            'year' => 2025,
            'status' => 'Selesai',
        ]);

        $projB = Project::create([
            'title' => 'Proyek B',
            'slug' => 'proyek-b',
            'category' => 'Komersial',
            'location' => 'Bandung',
            'year' => 2020,
            'status' => 'Selesai',
        ]);

        // Initially Proyek A (2025) is first, Proyek B (2020) is second
        $this->get('/')
            ->assertInertia(fn (Assert $page) => $page
                ->where('projects.0.title', 'Proyek A')
                ->where('projects.1.title', 'Proyek B')
            );

        // Update Proyek B year from 2020 to 2027 -> must jump automatically to #1
        $this->actingAs($this->admin)->put("/admin/projects/{$projB->id}", [
            'title' => 'Proyek B',
            'category' => 'Komersial',
            'location' => 'Bandung',
            'year' => 2027,
            'status' => 'Selesai',
        ])->assertRedirect('/admin');

        $this->get('/')
            ->assertInertia(fn (Assert $page) => $page
                ->where('projects.0.title', 'Proyek B')
                ->where('projects.1.title', 'Proyek A')
            );

        $this->actingAs($this->admin)->get('/admin')
            ->assertInertia(fn (Assert $page) => $page
                ->where('projects.0.title', 'Proyek B')
                ->where('projects.1.title', 'Proyek A')
            );
    }

    public function test_related_and_service_projects_also_follow_auto_sort_by_year(): void
    {
        $current = Project::create([
            'title' => 'Proyek Utama',
            'slug' => 'proyek-utama',
            'category' => 'Industri',
            'location' => 'Cikarang',
            'year' => 2024,
            'status' => 'Selesai',
        ]);

        Project::create([
            'title' => 'Industri Lama 2020',
            'slug' => 'industri-lama-2020',
            'category' => 'Industri',
            'location' => 'Bekasi',
            'year' => 2020,
            'status' => 'Selesai',
        ]);

        Project::create([
            'title' => 'Industri Baru 2026',
            'slug' => 'industri-baru-2026',
            'category' => 'Industri',
            'location' => 'Karawang',
            'year' => 2026,
            'status' => 'Selesai',
        ]);

        $this->get("/proyek/{$current->id}")
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->where('relatedProjects.0.title', 'Industri Baru 2026')
                ->where('relatedProjects.1.title', 'Industri Lama 2020')
            );

        $service = Service::create([
            'title' => 'Industri',
            'slug' => 'layanan-industri',
            'icon' => 'Warehouse',
            'short_description' => 'Konstruksi fasilitas industri.',
            'order' => 1,
            'is_active' => true,
        ]);

        $this->get("/layanan/{$service->id}")
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->where('relevantProjects.0.title', 'Industri Baru 2026')
                ->where('relevantProjects.1.title', 'Proyek Utama')
                ->where('relevantProjects.2.title', 'Industri Lama 2020')
            );
    }
}
