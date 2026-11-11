<?php

namespace Tests\Feature;

use App\Models\CompanySetting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class SectionManagerTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create([
            'email' => 'admin@wahanasinergimitra.id',
        ]);
    }

    public function test_landing_page_renders_with_default_ssot_data_and_visibility(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->has('visibility')
            ->where('visibility.hero', true)
            ->where('visibility.proksi', true)
            ->where('visibility.estimator', true)
            ->where('visibility.workflow', true)
            ->has('heroData')
            ->where('heroData.title_line1', 'Membangun Masa Depan')
            ->has('estimatorData')
            ->has('workflowData')
            ->has('proksiData')
            ->where('proksiData.title_highlight', 'PROKSI')
        );
    }

    public function test_guest_cannot_update_section_visibility_or_content(): void
    {
        $response1 = $this->post('/admin/sections/visibility', [
            'section' => 'proksi',
            'is_visible' => false,
        ]);
        $response1->assertRedirect('/login');

        $response2 = $this->post('/admin/sections/hero', [
            'data' => [
                'title_line1' => 'Hacked Title',
            ],
        ]);
        $response2->assertRedirect('/login');
    }

    public function test_admin_can_toggle_section_visibility(): void
    {
        $this->actingAs($this->admin);

        // Turn OFF PROKSI and Estimator
        $response = $this->post('/admin/sections/visibility', [
            'section' => 'proksi',
            'is_visible' => false,
        ]);
        $response->assertSessionHas('success');

        $visibility = CompanySetting::getSectionVisibility();
        $this->assertFalse($visibility['proksi']);
        $this->assertTrue($visibility['hero']);

        // Check that Landing Page reflects invisible state
        $pageResponse = $this->get('/');
        $pageResponse->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->where('visibility.proksi', false)
            ->where('visibility.hero', true)
        );

        // Turn PROKSI back ON
        $responseOn = $this->post('/admin/sections/visibility', [
            'section' => 'proksi',
            'is_visible' => true,
        ]);
        $responseOn->assertSessionHas('success');

        $visibilityOn = CompanySetting::getSectionVisibility();
        $this->assertTrue($visibilityOn['proksi']);
    }

    public function test_admin_can_update_section_content_ssot(): void
    {
        $this->actingAs($this->admin);

        // Update Hero section content
        $response = $this->post('/admin/sections/hero', [
            'data' => [
                'badge' => 'Teknologi Konstruksi Terdepan',
                'title_line1' => 'Inovasi Rekayasa Sipil',
                'title_line2' => 'Standar Mutu Kelas Dunia',
                'description' => 'Membangun infrastruktur modern dengan akurasi presisi tinggi.',
            ],
        ]);
        $response->assertSessionHas('success');

        $heroData = CompanySetting::getSectionData('hero');
        $this->assertEquals('Inovasi Rekayasa Sipil', $heroData['title_line1']);
        $this->assertEquals('Teknologi Konstruksi Terdepan', $heroData['badge']);

        // Check that public landing page receives updated content
        $pageResponse = $this->get('/');
        $pageResponse->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->where('heroData.title_line1', 'Inovasi Rekayasa Sipil')
            ->where('heroData.title_line2', 'Standar Mutu Kelas Dunia')
        );
    }

    public function test_admin_dashboard_receives_visibility_and_section_data(): void
    {
        $this->actingAs($this->admin);

        $response = $this->get('/admin');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Dashboard')
            ->has('visibility')
            ->has('sectionData')
            ->has('sectionData.hero')
            ->has('sectionData.estimator_data')
            ->has('sectionData.workflow_data')
            ->has('sectionData.proksi_data')
        );
    }
}
