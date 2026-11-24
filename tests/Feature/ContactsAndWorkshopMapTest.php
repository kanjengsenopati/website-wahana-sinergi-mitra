<?php

namespace Tests\Feature;

use App\Models\CompanySetting;
use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ContactsAndWorkshopMapTest extends TestCase
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

    public function test_default_dual_contacts_dual_addresses_and_precise_workshop_map_are_shared(): void
    {
        $project = Project::create([
            'title' => 'RS Umum Daerah Modern',
            'slug' => 'rs-umum-daerah-modern-201',
            'category' => 'Bangunan Kesehatan',
            'location' => 'Semarang',
            'year' => 2026,
            'status' => 'Selesai',
        ]);

        $service = Service::create([
            'title' => 'Konstruksi Baja',
            'slug' => 'konstruksi-baja',
            'icon' => 'Warehouse',
            'short_description' => 'Fabrikasi struktur baja WF.',
            'order' => 1,
            'is_active' => true,
        ]);

        foreach (['/', "/proyek/{$project->id}", "/layanan/{$service->id}"] as $url) {
            $this->get($url)
                ->assertStatus(200)
                ->assertInertia(fn (Assert $page) => $page
                    ->where('company.phone', CompanySetting::DEFAULT_PHONE)
                    ->where('company.phone_label', CompanySetting::DEFAULT_PHONE_LABEL)
                    ->where('company.phone_2', CompanySetting::DEFAULT_PHONE_2)
                    ->where('company.phone_2_label', CompanySetting::DEFAULT_PHONE_2_LABEL)
                    ->where('company.address', CompanySetting::DEFAULT_ADDRESS)
                    ->where('company.workshop_address', CompanySetting::DEFAULT_WORKSHOP_ADDRESS)
                    ->where('company.workshop_coordinates', CompanySetting::DEFAULT_WORKSHOP_COORDINATES)
                    ->where('company.workshop_map_is_precise', true)
                );
        }

        $this->actingAs($this->admin)->get('/admin')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->where('settings.company_phone_2', CompanySetting::DEFAULT_PHONE_2)
                ->where('settings.company_workshop_address', CompanySetting::DEFAULT_WORKSHOP_ADDRESS)
                ->where('settings.company_workshop_coordinates', CompanySetting::DEFAULT_WORKSHOP_COORDINATES)
            );
    }

    public function test_admin_can_update_two_contacts_two_addresses_and_precise_gps_coordinates(): void
    {
        $response = $this->actingAs($this->admin)->post('/admin/settings', [
            'company_phone' => '+62 811-1000-2000',
            'company_phone_label' => 'Kantor Pusat & Tender',
            'company_phone_2' => '+62 812-3000-4000',
            'company_phone_2_label' => 'Workshop Fabrikasi Baja',
            'company_email' => 'kontak@wahanasinergimitra.id',
            'company_address' => 'Jl. Pemuda No. 10, Semarang Tengah',
            'company_workshop_address' => 'Kawasan Industri Terboyo Blok C-15, Semarang',
            'company_workshop_coordinates' => '-6.956421, 110.465312',
            'company_workshop_map_url' => '',
        ]);

        $response->assertRedirect('/admin');

        $expectedEmbed = 'https://maps.google.com/maps?q=' . rawurlencode('-6.956421, 110.465312') . '&hl=id&z=17&output=embed';
        $expectedExternal = 'https://www.google.com/maps/search/?api=1&query=' . rawurlencode('-6.956421, 110.465312');

        $this->get('/')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->where('company.phone', '+62 811-1000-2000')
                ->where('company.phone_label', 'Kantor Pusat & Tender')
                ->where('company.phone_2', '+62 812-3000-4000')
                ->where('company.phone_2_label', 'Workshop Fabrikasi Baja')
                ->where('company.address', 'Jl. Pemuda No. 10, Semarang Tengah')
                ->where('company.workshop_address', 'Kawasan Industri Terboyo Blok C-15, Semarang')
                ->where('company.workshop_coordinates', '-6.956421, 110.465312')
                ->where('company.workshop_map_embed_url', $expectedEmbed)
                ->where('company.workshop_map_external_url', $expectedExternal)
                ->where('company.workshop_map_is_precise', true)
            );
    }

    public function test_admin_can_paste_google_maps_iframe_embed_snippet_and_place_url_with_pin(): void
    {
        // 1. Pasting full <iframe> snippet extracts the clean HTTPS Google Maps embed URL
        $iframeSnippet = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123!2d110.465312!3d-6.956421" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

        $this->actingAs($this->admin)->post('/admin/settings', [
            'company_workshop_coordinates' => '',
            'company_workshop_map_url' => $iframeSnippet,
        ])->assertRedirect('/admin');

        $expectedSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123!2d110.465312!3d-6.956421';
        $this->assertSame($expectedSrc, CompanySetting::get('company_workshop_map_url'));

        $profile = CompanySetting::getCompanyProfile();
        $this->assertSame($expectedSrc, $profile['workshop_map_embed_url']);
        $this->assertTrue($profile['workshop_map_is_precise']);

        // 2. Pasting Google Maps place URL containing exact !3d...!4d... pin coordinates
        $placeUrl = 'https://www.google.com/maps/place/Workshop+WSM/@-6.956000,110.465000,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!8m2!3d-6.956421!4d110.465312!16s%2Fg%2F11abc';
        $this->actingAs($this->admin)->post('/admin/settings', [
            'company_workshop_coordinates' => '',
            'company_workshop_map_url' => $placeUrl,
        ])->assertRedirect('/admin');

        $profileFromPlace = CompanySetting::getCompanyProfile();
        $this->assertTrue($profileFromPlace['workshop_map_is_precise']);
        $this->assertStringContainsString(rawurlencode('-6.956421, 110.465312'), $profileFromPlace['workshop_map_embed_url']);
        $this->assertSame($placeUrl, $profileFromPlace['workshop_map_external_url']);
    }

    public function test_invalid_coordinates_and_untrusted_map_urls_are_rejected(): void
    {
        // Out-of-range coordinates rejected
        $this->actingAs($this->admin)
            ->post('/admin/settings', [
                'company_workshop_coordinates' => '999.123, 250.456',
            ])
            ->assertSessionHasErrors(['company_workshop_coordinates']);

        // Untrusted non-Google URL / XSS attempt rejected
        $this->actingAs($this->admin)
            ->post('/admin/settings', [
                'company_workshop_map_url' => 'https://evil.example.com/phishing',
            ])
            ->assertSessionHasErrors(['company_workshop_map_url']);

        $this->actingAs($this->admin)
            ->post('/admin/settings', [
                'company_workshop_map_url' => '<iframe src="javascript:alert(1)"></iframe>',
            ])
            ->assertSessionHasErrors(['company_workshop_map_url']);
    }
}
