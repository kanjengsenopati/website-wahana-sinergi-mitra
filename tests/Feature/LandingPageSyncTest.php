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

class LandingPageSyncTest extends TestCase
{
    use RefreshDatabase;

    public function test_landing_page_renders_with_database_ssot_defaults(): void
    {
        // Seed database settings
        CompanySetting::set('hero_stat_projects', '75+');
        CompanySetting::set('hero_stat_value', 'Rp 110+ Miliar');
        CompanySetting::set('company_phone', '+62 812-3456-7890');
        CompanySetting::set('company_email', 'info@wahanasinergimitra.id');
        CompanySetting::set('company_address', 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat');
        CompanySetting::set('company_about', 'Kontraktor pelaksana terpercaya berstandar mutu tinggi.');

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->has('services')
            ->has('projects')
            ->has('testimonials')
            ->has('stats')
            ->has('company')
            ->where('stats.total_projects', '75+')
            ->where('stats.total_value_formatted', 'Rp 110+ Miliar')
            ->where('company.phone', '+62 812-3456-7890')
            ->where('company.email', 'info@wahanasinergimitra.id')
            ->where('company.address', 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat')
            ->where('company.about', 'Kontraktor pelaksana terpercaya berstandar mutu tinggi.')
        );
    }

    public function test_landing_page_reflects_updated_company_settings(): void
    {
        $admin = User::factory()->create(['email' => 'admin@wahanasinergimitra.id']);

        // Update settings via admin panel endpoint
        $updateResponse = $this->actingAs($admin)->post('/admin/settings', [
            'hero_stat_projects' => '150+ Proyek Nasional',
            'hero_stat_value' => 'Rp 320+ Miliar',
            'hero_stat_satisfaction' => '99.8%',
            'hero_stat_safety' => '2.500.000+ Jam Aman',
            'company_phone' => '+62 811-7788-9900',
            'company_email' => 'halo@wahanasinergimitra.id',
            'company_address' => 'Gedung Wisma WSM Lt. 12, Jakarta',
            'company_about' => 'Perusahaan general contractor spesialis struktur baja berat dan pergudangan modern.',
        ]);

        $updateResponse->assertRedirect('/admin');

        // Check that public landing page reflects all updated fields
        $publicResponse = $this->get('/');
        $publicResponse->assertStatus(200);
        $publicResponse->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->where('stats.total_projects', '150+ Proyek Nasional')
            ->where('stats.total_value_formatted', 'Rp 320+ Miliar')
            ->where('stats.client_satisfaction', '99.8%')
            ->where('stats.zero_accident_hours', '2.500.000+ Jam Aman')
            ->where('company.phone', '+62 811-7788-9900')
            ->where('company.email', 'halo@wahanasinergimitra.id')
            ->where('company.address', 'Gedung Wisma WSM Lt. 12, Jakarta')
            ->where('company.about', 'Perusahaan general contractor spesialis struktur baja berat dan pergudangan modern.')
        );
    }

    public function test_public_inquiry_submission_persists_to_database_and_admin_metrics(): void
    {
        $payload = [
            'client_name' => 'Dr. Bambang Suryono',
            'phone_wa' => '081299887766',
            'email' => 'bambang@karyamedika.co.id',
            'project_type' => 'Komersial / Ruko / Kantor',
            'estimated_budget' => 2500000000,
            'building_area_m2' => 850,
            'location' => 'Bekasi Timur',
            'message' => 'Rencana pembangunan klinik pratama 3 lantai.',
        ];

        $response = $this->post('/inquiry', $payload);
        $response->assertRedirect();
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('inquiries', [
            'client_name' => 'Dr. Bambang Suryono',
            'phone_wa' => '081299887766',
            'estimated_budget' => 2500000000,
            'status' => 'Baru',
        ]);

        // Verify admin dashboard reflects this new inquiry
        $admin = User::factory()->create(['email' => 'admin@wahanasinergimitra.id']);
        $adminResponse = $this->actingAs($admin)->get('/admin');
        $adminResponse->assertStatus(200);
        $adminResponse->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Dashboard')
            ->where('metrics.new_inquiries', 1)
            ->where('metrics.total_inquiries', 1)
        );
    }
}
