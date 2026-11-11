<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the landing page loads successfully.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * Test submitting an inquiry form saves to sqlite database.
     */
    public function test_submitting_an_inquiry_works_properly(): void
    {
        $payload = [
            'client_name' => 'Ir. Gunawan',
            'phone_wa' => '081234567890',
            'email' => 'gunawan@proyek.id',
            'project_type' => 'Gudang & Bangunan Industri',
            'building_area_m2' => 1200,
            'estimated_budget' => 4500000000,
            'location' => 'Bekasi Barat',
            'message' => 'Rencana pembangunan workshop baja 1200 m2.',
        ];

        $response = $this->post('/inquiry', $payload);

        $response->assertSessionHas('success');
        $this->assertDatabaseHas('inquiries', [
            'client_name' => 'Ir. Gunawan',
            'phone_wa' => '081234567890',
            'estimated_budget' => 4500000000,
        ]);
    }
}
