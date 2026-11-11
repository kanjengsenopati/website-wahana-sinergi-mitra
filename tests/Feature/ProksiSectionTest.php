<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ProksiSectionTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_landing_page_renders_with_inertia_and_proksi_integration()
    {
        $response = $this->get(route('home'));

        $response->assertStatus(200);

        // Verify Inertia response renders LandingPage component
        $response->assertInertia(fn (Assert $page) => $page
            ->component('LandingPage')
            ->has('services')
            ->has('projects')
            ->has('testimonials')
            ->has('stats')
            ->has('company')
        );

        // Verify ProksiSection JSX component source file exists and contains all required features
        $componentPath = resource_path('js/Components/ProksiSection.jsx');
        $this->assertFileExists($componentPath);

        $source = file_get_contents($componentPath);
        $this->assertStringContainsString('PROKSI', $source);
        $this->assertStringContainsString('Proyek Konstruksi', $source);
        $this->assertStringContainsString('Automated Digitalization', $source);
        $this->assertStringContainsString('Kurva-S', $source);
        $this->assertStringContainsString('Gantt Chart', $source);
        $this->assertStringContainsString('Portal Klien', $source);
        $this->assertStringContainsString('Manajemen K3', $source);

        // Verify LandingPage.jsx imports ProksiSection
        $landingPagePath = resource_path('js/Pages/LandingPage.jsx');
        $landingSource = file_get_contents($landingPagePath);
        $this->assertStringContainsString('ProksiSection', $landingSource);

        // Verify Navbar.jsx has navigation link to PROKSI
        $navbarPath = resource_path('js/Components/Navbar.jsx');
        $navbarSource = file_get_contents($navbarPath);
        $this->assertStringContainsString('Sistem PROKSI', $navbarSource);
        $this->assertStringContainsString('#proksi', $navbarSource);
    }
}
