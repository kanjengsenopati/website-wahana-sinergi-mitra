<?php

namespace Tests\Feature;

use App\Models\CompanySetting;
use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PortfolioSyncTest extends TestCase
{
    use RefreshDatabase;

    public function test_landing_page_receives_projects_and_company_for_portfolio(): void
    {
        CompanySetting::set('company_phone', '+62 811-3344-5566');

        Project::create([
            'title' => 'Pabrik Petrokimia Modern',
            'slug' => 'pabrik-petrokimia-modern-101',
            'category' => 'Industri',
            'client_name' => 'PT Petro Kimia Farma',
            'location' => 'Cilegon, Banten',
            'project_value' => 45000000000,
            'year' => 2025,
            'status' => 'Berjalan',
            'description' => 'Konstruksi fasilitas pabrik kimia tahan korosi.',
            'order' => 1,
        ]);

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->has('projects', 1)
            ->where('projects.0.title', 'Pabrik Petrokimia Modern')
            ->where('projects.0.category', 'Industri')
            ->where('company.phone', '+62 811-3344-5566')
        );
    }

    public function test_custom_category_created_by_admin_persists_and_reflects_on_portfolio(): void
    {
        $admin = User::factory()->create(['email' => 'admin@wahanasinergimitra.id']);

        // Admin adds project with a new/special category
        $storeResponse = $this->actingAs($admin)->post('/admin/projects', [
            'title' => 'Hanggar Perawatan Helikopter VIP',
            'category' => 'Dirgantara',
            'client_name' => 'Penerbad TNI AD',
            'location' => 'Semarang, Jawa Tengah',
            'project_value' => 28000000000,
            'year' => 2025,
            'status' => 'Berjalan',
            'description' => 'Hanggar struktur baja bentang bebas 60 meter.',
            'order' => 1,
            'is_featured' => true,
        ]);

        $storeResponse->assertRedirect('/admin');

        $this->assertDatabaseHas('projects', [
            'title' => 'Hanggar Perawatan Helikopter VIP',
            'category' => 'Dirgantara',
        ]);

        // Public Landing Page should receive this custom category project
        $landingResponse = $this->get('/');
        $landingResponse->assertStatus(200);
        $landingResponse->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->where('projects.0.category', 'Dirgantara')
            ->where('projects.0.title', 'Hanggar Perawatan Helikopter VIP')
        );
    }
}
