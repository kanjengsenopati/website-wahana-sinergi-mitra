<?php

namespace Tests\Feature;

use App\Models\CompanySetting;
use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use App\Support\MediaStorage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class LogoAndPortfolioCategoriesTest extends TestCase
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

    public function test_default_site_logo_is_shared_across_public_auth_and_admin_pages(): void
    {
        $project = Project::create([
            'title' => 'Gedung Laboratorium Terpadu',
            'slug' => 'gedung-laboratorium-terpadu-101',
            'category' => 'Bangunan Pendidikan',
            'location' => 'Bandung, Jawa Barat',
            'year' => 2025,
            'status' => 'Selesai',
        ]);

        $service = Service::create([
            'title' => 'Konstruksi Gedung',
            'slug' => 'konstruksi-gedung',
            'icon' => 'Building2',
            'short_description' => 'Konstruksi gedung terpadu.',
            'order' => 1,
            'is_active' => true,
        ]);

        // Public landing page & SSR HTML favicon
        $home = $this->get('/');
        $home->assertStatus(200);
        $home->assertSee('<link id="site-favicon" rel="icon" type="image/jpeg" href="/images/logo-wsm.jpg">', false);
        $home->assertInertia(fn (Assert $page) => $page
            ->where('site_logo', CompanySetting::DEFAULT_LOGO_URL)
            ->where('company.logo_url', CompanySetting::DEFAULT_LOGO_URL)
        );

        // Login page
        $this->get('/login')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->where('site_logo', CompanySetting::DEFAULT_LOGO_URL));

        // Project detail & Service detail pages
        $this->get("/proyek/{$project->id}")
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->where('site_logo', CompanySetting::DEFAULT_LOGO_URL)
                ->where('company.logo_url', CompanySetting::DEFAULT_LOGO_URL)
            );

        $this->get("/layanan/{$service->id}")
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->where('site_logo', CompanySetting::DEFAULT_LOGO_URL)
                ->where('company.logo_url', CompanySetting::DEFAULT_LOGO_URL)
            );

        // Admin dashboard
        $this->actingAs($this->admin)->get('/admin')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->where('site_logo', CompanySetting::DEFAULT_LOGO_URL)
                ->where('settings.company_logo_url', '')
            );
    }

    public function test_admin_can_upload_update_replace_and_reset_website_logo_with_auto_cleanup(): void
    {
        Storage::fake('public');

        // 1. Upload first PNG logo to branding folder
        $logo1 = UploadedFile::fake()->image('logo-baru-1.png', 256, 256);
        $upload1 = $this->actingAs($this->admin)->post('/admin/upload', [
            'image' => $logo1,
            'folder' => 'branding',
        ]);

        $upload1->assertStatus(200)->assertJson(['success' => true]);
        $logoUrl1 = $upload1->json('url');
        $this->assertStringStartsWith('/storage/uploads/branding/', $logoUrl1);
        $diskPath1 = MediaStorage::toPublicDiskPath($logoUrl1);
        $this->assertNotNull($diskPath1);
        Storage::disk('public')->assertExists($diskPath1);

        // 2. Save logo1 into company settings
        $this->actingAs($this->admin)->post('/admin/settings', [
            'company_logo_url' => $logoUrl1,
        ])->assertRedirect('/admin');

        $this->assertSame($logoUrl1, CompanySetting::getSiteLogoUrl());
        $this->assertTrue(MediaStorage::isReferencedAnywhere($logoUrl1, $diskPath1));
        $this->assertFalse(MediaStorage::deleteIfUnused($logoUrl1));
        Storage::disk('public')->assertExists($diskPath1);

        // Verify SSR favicon and Inertia props reflect logo1 across pages
        $home = $this->get('/');
        $home->assertStatus(200);
        $home->assertSee("<link id=\"site-favicon\" rel=\"icon\" type=\"image/png\" href=\"{$logoUrl1}\">", false);
        $home->assertInertia(fn (Assert $page) => $page
            ->where('site_logo', $logoUrl1)
            ->where('company.logo_url', $logoUrl1)
        );

        $this->actingAs($this->admin)->get('/admin')
            ->assertInertia(fn (Assert $page) => $page
                ->where('site_logo', $logoUrl1)
                ->where('settings.company_logo_url', $logoUrl1)
            );

        // 3. Upload second logo and replace logo1 -> logo1 must be auto-deleted
        $logo2 = UploadedFile::fake()->image('logo-baru-2.png', 256, 256);
        $upload2 = $this->actingAs($this->admin)->post('/admin/upload', [
            'image' => $logo2,
            'folder' => 'branding',
        ]);
        $upload2->assertStatus(200);
        $logoUrl2 = $upload2->json('url');
        $diskPath2 = MediaStorage::toPublicDiskPath($logoUrl2);
        Storage::disk('public')->assertExists($diskPath2);

        $this->actingAs($this->admin)->post('/admin/settings', [
            'company_logo_url' => $logoUrl2,
        ])->assertRedirect('/admin');

        $this->assertSame($logoUrl2, CompanySetting::getSiteLogoUrl());
        Storage::disk('public')->assertMissing($diskPath1);
        Storage::disk('public')->assertExists($diskPath2);

        // 4. Reset logo to default -> logo2 must be auto-deleted and site_logo falls back to default
        $this->actingAs($this->admin)->post('/admin/settings', [
            'company_logo_url' => '',
        ])->assertRedirect('/admin');

        $this->assertSame(CompanySetting::DEFAULT_LOGO_URL, CompanySetting::getSiteLogoUrl());
        Storage::disk('public')->assertMissing($diskPath2);

        $this->get('/')
            ->assertSee('<link id="site-favicon" rel="icon" type="image/jpeg" href="/images/logo-wsm.jpg">', false)
            ->assertInertia(fn (Assert $page) => $page
                ->where('site_logo', CompanySetting::DEFAULT_LOGO_URL)
                ->where('company.logo_url', CompanySetting::DEFAULT_LOGO_URL)
            );
    }

    public function test_standard_portfolio_categories_include_education_health_and_hospitality(): void
    {
        $expectedValues = [
            'Industri',
            'Komersial',
            'Residensial',
            'Infrastruktur',
            'Bangunan Pendidikan',
            'Bangunan Kesehatan',
            'Bangunan Penginapan',
        ];

        $this->assertSame($expectedValues, Project::standardCategoryValues());

        // Landing page receives all 7 standard categories via SSOT
        $this->get('/')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->has('projectCategories', 7)
                ->where('projectCategories.4.value', 'Bangunan Pendidikan')
                ->where('projectCategories.5.value', 'Bangunan Kesehatan')
                ->where('projectCategories.6.value', 'Bangunan Penginapan')
            );

        // Admin dashboard receives all 7 standard categories via SSOT
        $this->actingAs($this->admin)->get('/admin')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->has('projectCategories', 7)
                ->where('projectCategories.4.value', 'Bangunan Pendidikan')
                ->where('projectCategories.5.value', 'Bangunan Kesehatan')
                ->where('projectCategories.6.value', 'Bangunan Penginapan')
            );
    }

    public function test_admin_can_create_and_update_projects_with_new_portfolio_categories(): void
    {
        $newCategories = [
            'Bangunan Pendidikan',
            'Bangunan Kesehatan',
            'Bangunan Penginapan',
        ];

        foreach ($newCategories as $index => $category) {
            $this->actingAs($this->admin)->post('/admin/projects', [
                'title' => "Proyek {$category} #" . ($index + 1),
                'category' => $category,
                'client_name' => 'Yayasan & Mitra WSM',
                'location' => 'Semarang, Jawa Tengah',
                'project_value' => 12500000000,
                'year' => 2026,
                'status' => 'Selesai',
                'description' => "Pembangunan fasilitas {$category} berstandar SNI.",
                'order' => $index + 1,
                'is_featured' => true,
            ])->assertRedirect('/admin');

            $this->assertDatabaseHas('projects', [
                'title' => "Proyek {$category} #" . ($index + 1),
                'category' => $category,
            ]);
        }

        // Update an existing project to another new category
        $project = Project::where('category', 'Bangunan Pendidikan')->firstOrFail();
        $this->actingAs($this->admin)->put("/admin/projects/{$project->id}", [
            'title' => 'Hotel & Resort Bintang 4',
            'category' => 'Bangunan Penginapan',
            'client_name' => 'PT Pesona Nusantara',
            'location' => 'Yogyakarta',
            'project_value' => 35000000000,
            'year' => 2026,
            'status' => 'Berjalan',
            'description' => 'Konstruksi gedung hotel 6 lantai.',
            'order' => 1,
            'is_featured' => true,
        ])->assertRedirect('/admin');

        $this->assertDatabaseHas('projects', [
            'id' => $project->id,
            'category' => 'Bangunan Penginapan',
        ]);
    }

    public function test_public_inquiry_accepts_new_building_categories(): void
    {
        foreach (['Bangunan Pendidikan', 'Bangunan Kesehatan', 'Bangunan Penginapan'] as $category) {
            $this->post('/inquiry', [
                'client_name' => "Klien {$category}",
                'phone_wa' => '081234567890',
                'email' => 'klien@example.com',
                'project_type' => $category,
                'building_area_m2' => 1200,
                'estimated_budget' => 6000000000,
                'location' => 'Bandung',
                'message' => "Konsultasi pembangunan {$category}.",
            ])->assertRedirect()->assertSessionHas('success');

            $this->assertDatabaseHas('inquiries', [
                'client_name' => "Klien {$category}",
                'project_type' => $category,
            ]);
        }
    }
}
