<?php

namespace Tests\Feature;

use App\Models\CompanySetting;
use App\Models\Inquiry;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AdminDashboardTest extends TestCase
{
    use RefreshDatabase;

    protected User $adminUser;

    protected function setUp(): void
    {
        parent::setUp();

        $this->adminUser = User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@wahanasinergimitra.id',
        ]);
    }

    public function test_unauthenticated_user_redirected_to_login(): void
    {
        $response = $this->get('/admin');
        $response->assertRedirect('/login');
    }

    public function test_authenticated_admin_can_view_dashboard_with_all_props(): void
    {
        Project::create([
            'title' => 'Pabrik Gudang Logistik',
            'slug' => 'pabrik-gudang-logistik-101',
            'category' => 'Industri',
            'client_name' => 'PT Mega Niaga',
            'location' => 'Bekasi, Jawa Barat',
            'project_value' => 8500000000,
            'year' => 2024,
            'status' => 'Selesai',
            'description' => 'Gudang distribusi terpadu.',
            'is_featured' => true,
            'order' => 1,
        ]);

        Service::create([
            'title' => 'Konstruksi Baja Berat',
            'slug' => 'konstruksi-baja-berat',
            'icon' => 'Building2',
            'short_description' => 'Fabrikasi dan ereksi struktur baja.',
            'full_description' => 'Standar fabrikasi presisi dengan sertifikasi pengelasan.',
            'order' => 1,
            'is_active' => true,
        ]);

        Inquiry::create([
            'client_name' => 'Budi Santoso',
            'phone_wa' => '081234567890',
            'email' => 'budi@example.com',
            'project_type' => 'Gudang',
            'estimated_budget' => 500000000,
            'message' => 'Rencana pembangunan gudang seluas 2000m2.',
            'status' => 'Baru',
        ]);

        Testimonial::create([
            'client_name' => 'Ir. Hendra Kusuma',
            'client_role' => 'Project Director',
            'company_name' => 'PT Astra Graha',
            'content' => 'Pekerjaan sangat tepat waktu dan kualitas struktur prima.',
            'rating' => 5,
            'order' => 1,
            'is_active' => true,
        ]);

        $response = $this->actingAs($this->adminUser)->get('/admin');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Dashboard')
            ->has('projects')
            ->has('services')
            ->has('inquiries')
            ->has('testimonials')
            ->has('settings')
            ->has('metrics')
            ->where('metrics.total_projects', 1)
            ->where('metrics.total_inquiries', 1)
        );
    }

    public function test_admin_can_create_project(): void
    {
        $payload = [
            'title' => 'Pembangunan Hanggar Helipad',
            'category' => 'Infrastruktur',
            'client_name' => 'PT Dirgantara Mitra',
            'location' => 'Bandung, Jawa Barat',
            'project_value' => 12500000000,
            'year' => 2025,
            'status' => 'Berjalan',
            'description' => 'Konstruksi hanggar dengan bentang bebas 40 meter.',
            'is_featured' => true,
            'order' => 1,
        ];

        $response = $this->actingAs($this->adminUser)
            ->post('/admin/projects', $payload);

        $response->assertRedirect('/admin');
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('projects', [
            'title' => 'Pembangunan Hanggar Helipad',
            'project_value' => 12500000000,
            'status' => 'Berjalan',
        ]);
    }

    public function test_admin_can_update_project(): void
    {
        $project = Project::create([
            'title' => 'Proyek Awal',
            'slug' => 'proyek-awal-123',
            'category' => 'Industri',
            'location' => 'Bekasi',
            'project_value' => 5000000000,
            'year' => 2024,
            'status' => 'Berjalan',
        ]);

        $response = $this->actingAs($this->adminUser)
            ->put("/admin/projects/{$project->id}", [
                'title' => 'Proyek Diperbarui',
                'category' => $project->category,
                'client_name' => 'PT Mitra Sejati',
                'location' => $project->location,
                'project_value' => 8500000000,
                'year' => $project->year,
                'status' => 'Selesai',
                'description' => 'Telah rampung 100%.',
                'is_featured' => true,
                'order' => 2,
            ]);

        $response->assertRedirect('/admin');
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('projects', [
            'id' => $project->id,
            'title' => 'Proyek Diperbarui',
            'status' => 'Selesai',
        ]);
    }

    public function test_admin_can_delete_project(): void
    {
        $project = Project::create([
            'title' => 'Proyek Uji Coba Hapus',
            'slug' => 'proyek-uji-coba-hapus-123',
            'category' => 'Industri',
            'location' => 'Bekasi',
            'year' => 2024,
            'status' => 'Selesai',
        ]);

        $response = $this->actingAs($this->adminUser)
            ->delete("/admin/projects/{$project->id}");

        $response->assertRedirect('/admin');
        $this->assertDatabaseMissing('projects', ['id' => $project->id]);
    }

    public function test_admin_can_create_and_update_service(): void
    {
        $storeResponse = $this->actingAs($this->adminUser)
            ->post('/admin/services', [
                'title' => 'Civil & Foundation Works',
                'icon' => 'HardHat',
                'short_description' => 'Pekerjaan pondasi bore pile dan retaining wall berkekuatan tinggi.',
                'full_description' => 'Pondasi dalam, pemancangan tiang pancang, dan dinding penahan tanah.',
                'order' => 5,
                'is_active' => true,
            ]);

        $storeResponse->assertRedirect('/admin');

        $service = Service::where('title', 'Civil & Foundation Works')->first();
        $this->assertNotNull($service);

        $updateResponse = $this->actingAs($this->adminUser)
            ->put("/admin/services/{$service->id}", [
                'title' => 'Civil Foundation & Deep Excavation',
                'icon' => 'HardHat',
                'short_description' => 'Pondasi dan galian dalam standar K3 internasional.',
                'full_description' => 'Pondasi bore pile hingga kedalaman 30 meter.',
                'order' => 1,
                'is_active' => true,
            ]);

        $updateResponse->assertRedirect('/admin');
        $this->assertDatabaseHas('services', [
            'id' => $service->id,
            'title' => 'Civil Foundation & Deep Excavation',
        ]);
    }

    public function test_admin_can_update_inquiry_status_and_delete(): void
    {
        $inquiry = Inquiry::create([
            'client_name' => 'Ahmad Reza',
            'phone_wa' => '082199887766',
            'email' => 'ahmad@example.com',
            'project_type' => 'Gudang Pre-Engineered',
            'estimated_budget' => 1500000000,
            'message' => 'Kebutuhan estimasi RAB gudang logistik.',
            'status' => 'Baru',
        ]);

        $updateResponse = $this->actingAs($this->adminUser)
            ->put("/admin/inquiries/{$inquiry->id}", [
                'status' => 'Dihubungi',
                'internal_notes' => 'Telah dihubungi via WhatsApp penawaran teknis.',
            ]);

        $updateResponse->assertRedirect('/admin');
        $this->assertDatabaseHas('inquiries', [
            'id' => $inquiry->id,
            'status' => 'Dihubungi',
            'internal_notes' => 'Telah dihubungi via WhatsApp penawaran teknis.',
        ]);

        $deleteResponse = $this->actingAs($this->adminUser)
            ->delete("/admin/inquiries/{$inquiry->id}");

        $deleteResponse->assertRedirect('/admin');
        $this->assertDatabaseMissing('inquiries', ['id' => $inquiry->id]);
    }

    public function test_admin_can_update_company_settings_and_reflect_on_landing_page(): void
    {
        $response = $this->actingAs($this->adminUser)
            ->post('/admin/settings', [
                'hero_stat_projects' => '120+ Proyek',
                'hero_stat_value' => 'Rp 250+ Miliar',
                'hero_stat_satisfaction' => '99.9%',
                'hero_stat_safety' => '2.000.000+ Jam Aman',
                'company_phone' => '+62 811-9988-7766',
                'company_email' => 'kontak@wahanasinergimitra.id',
                'company_address' => 'Gedung Sinergi Center Lt. 5, Jakarta Selatan',
                'company_about' => 'Kontraktor spesialis fasilitas industri terkemuka di Indonesia.',
            ]);

        $response->assertRedirect('/admin');

        $this->assertEquals('120+ Proyek', CompanySetting::get('hero_stat_projects'));
        $this->assertEquals('+62 811-9988-7766', CompanySetting::get('company_phone'));

        // Check landing page reflection
        $landingResponse = $this->get('/');
        $landingResponse->assertStatus(200);
        $landingResponse->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->where('stats.total_projects', '120+ Proyek')
            ->where('stats.total_value_formatted', 'Rp 250+ Miliar')
            ->where('company.phone', '+62 811-9988-7766')
            ->where('company.email', 'kontak@wahanasinergimitra.id')
        );
    }
}
