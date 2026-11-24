<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\User;
use App\Support\MediaStorage;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use League\Flysystem\UnableToCreateDirectory;
use Mockery;
use Symfony\Component\Mime\Exception\LogicException as MimeLogicException;
use Tests\TestCase;

class ImageUploadTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
        Storage::fake('public');
    }

    public function test_guest_cannot_upload_image()
    {
        $file = UploadedFile::fake()->image('test.jpg');

        $response = $this->postJson(route('admin.upload'), [
            'image' => $file,
            'folder' => 'projects',
        ]);

        $response->assertStatus(401);
    }

    public function test_authenticated_user_can_upload_valid_image()
    {
        $user = User::factory()->create();

        $file = UploadedFile::fake()->image('new-project.jpg', 1200, 800)->size(1024); // 1MB

        $response = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => $file,
            'folder' => 'projects',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'success',
            'url',
            'filename',
        ]);

        $this->assertTrue($response->json('success'));
        $url = $response->json('url');
        $this->assertStringStartsWith('/storage/uploads/projects/', $url);

        $filename = $response->json('filename');
        Storage::disk('public')->assertExists("uploads/projects/{$filename}");
    }

    public function test_upload_rejects_non_image_files()
    {
        $user = User::factory()->create();

        $file = UploadedFile::fake()->create('document.pdf', 500, 'application/pdf');

        $response = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => $file,
            'folder' => 'projects',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['image']);
    }

    public function test_upload_rejects_oversized_files()
    {
        $user = User::factory()->create();

        $file = UploadedFile::fake()->image('huge-file.jpg')->size(6000); // 6MB > 5MB limit

        $response = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => $file,
            'folder' => 'projects',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['image']);
    }

    public function test_project_can_be_saved_with_uploaded_image_url()
    {
        $user = User::factory()->create();
        $project = Project::first();

        // 1. Simulate image upload
        $file = UploadedFile::fake()->image('project-site.webp', 800, 600);
        $uploadRes = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => $file,
            'folder' => 'projects',
        ]);
        $uploadedUrl = $uploadRes->json('url');

        // 2. Update project with the uploaded local URL
        $updateRes = $this->actingAs($user)->put(route('admin.projects.update', $project), [
            'title' => 'Proyek Konstruksi Modern WSM Updated',
            'category' => 'Industri',
            'client_name' => 'PT. Wahana Mitra',
            'location' => 'Bekasi, Jawa Barat',
            'project_value' => 25000000000,
            'year' => 2026,
            'thumbnail_url' => $uploadedUrl,
            'status' => 'Selesai',
            'description' => 'Konstruksi modern dengan foto yang diunggah langsung.',
        ]);

        $updateRes->assertRedirect(route('admin.dashboard'));

        $this->assertDatabaseHas('projects', [
            'id' => $project->id,
            'thumbnail_url' => $uploadedUrl,
            'title' => 'Proyek Konstruksi Modern WSM Updated',
        ]);

        // 3. Verify landing page renders the uploaded image
        $landingRes = $this->get(route('home'));
        $landingRes->assertStatus(200);
        $landingRes->assertSee(str_replace('/', '\/', $uploadedUrl), false);
    }

    public function test_inertia_admin_shares_fresh_csrf_token_after_login_and_upload_succeeds()
    {
        $user = User::factory()->create([
            'password' => Hash::make('Secret#1234'),
        ]);

        // Login via POST (triggers $request->session()->regenerate())
        $loginRes = $this->post('/login', [
            'email' => $user->email,
            'password' => 'Secret#1234',
        ]);
        $loginRes->assertRedirect('/admin');

        // Visit /admin and verify shared Inertia prop csrf_token matches current session token
        $adminRes = $this->get('/admin');
        $adminRes->assertStatus(200);
        $freshToken = session()->token();
        $adminRes->assertSee($freshToken, false);

        // Immediately upload using the fresh CSRF token
        $file = UploadedFile::fake()->image('post-login.jpg', 640, 480);
        $uploadRes = $this->withHeader('X-CSRF-TOKEN', $freshToken)
            ->postJson(route('admin.upload'), [
                'image' => $file,
                'folder' => 'projects',
            ]);

        $uploadRes->assertStatus(200)->assertJson(['success' => true]);
    }

    public function test_replacing_and_deleting_project_service_testimonial_cleans_orphan_files_safely()
    {
        $user = User::factory()->create();
        $projects = Project::take(2)->get();
        $project1 = $projects[0];
        $project2 = $projects[1];

        // Upload photo A & B
        $urlA = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('a.jpg'),
            'folder' => 'projects',
        ])->json('url');
        $diskA = MediaStorage::toPublicDiskPath($urlA);

        $urlB = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('b.jpg'),
            'folder' => 'projects',
        ])->json('url');
        $diskB = MediaStorage::toPublicDiskPath($urlB);

        // Share photo A across both projects
        $project1->update(['thumbnail_url' => $urlA]);
        $project2->update(['thumbnail_url' => $urlA]);
        Storage::disk('public')->assertExists($diskA);

        // Replace project 1 with photo B -> photo A must stay because project 2 still uses it
        $project1->update(['thumbnail_url' => $urlB]);
        Storage::disk('public')->assertExists($diskA);
        Storage::disk('public')->assertExists($diskB);

        // Replace project 2 with static placeholder -> now photo A is unused and must be deleted
        $project2->update(['thumbnail_url' => '/images/project-placeholder.jpg']);
        Storage::disk('public')->assertMissing($diskA);
        Storage::disk('public')->assertExists($diskB);

        // Delete project 1 -> photo B must be deleted
        $project1->delete();
        Storage::disk('public')->assertMissing($diskB);

        // Service image replacement & deletion cleanup
        $service = Service::first();
        $srvUrl1 = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('srv1.jpg'),
            'folder' => 'services',
        ])->json('url');
        $srvUrl2 = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('srv2.jpg'),
            'folder' => 'services',
        ])->json('url');

        $service->update(['image_url' => $srvUrl1]);
        $service->update(['image_url' => $srvUrl2]);
        Storage::disk('public')->assertMissing(MediaStorage::toPublicDiskPath($srvUrl1));
        Storage::disk('public')->assertExists(MediaStorage::toPublicDiskPath($srvUrl2));

        // Testimonial avatar replacement & deletion cleanup
        $testimonial = Testimonial::first();
        $avUrl1 = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('av1.jpg'),
            'folder' => 'testimonials',
        ])->json('url');
        $testimonial->update(['avatar_url' => $avUrl1]);
        $testimonial->delete();
        Storage::disk('public')->assertMissing(MediaStorage::toPublicDiskPath($avUrl1));
    }

    public function test_section_hero_and_about_image_replacement_cleans_removed_files()
    {
        $user = User::factory()->create();

        $heroOld = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('hero-old.jpg'),
            'folder' => 'general',
        ])->json('url');

        $heroNew = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('hero-new.jpg'),
            'folder' => 'general',
        ])->json('url');

        $this->actingAs($user)->post('/admin/sections/hero', [
            'data' => [
                'slides' => [
                    ['id' => 1, 'image' => $heroOld, 'caption' => 'Old Slide'],
                ],
            ],
        ])->assertRedirect();
        Storage::disk('public')->assertExists(MediaStorage::toPublicDiskPath($heroOld));

        $this->actingAs($user)->post('/admin/sections/hero', [
            'data' => [
                'slides' => [
                    ['id' => 1, 'image' => $heroNew, 'caption' => 'New Slide'],
                ],
            ],
        ])->assertRedirect();

        Storage::disk('public')->assertMissing(MediaStorage::toPublicDiskPath($heroOld));
        Storage::disk('public')->assertExists(MediaStorage::toPublicDiskPath($heroNew));

        // About section cleanup
        $aboutOld = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('about-old.jpg'),
            'folder' => 'general',
        ])->json('url');

        $aboutNew = $this->actingAs($user)->postJson(route('admin.upload'), [
            'image' => UploadedFile::fake()->image('about-new.jpg'),
            'folder' => 'general',
        ])->json('url');

        $this->actingAs($user)->post('/admin/sections/about_data', [
            'data' => ['photo_main_url' => $aboutOld],
        ])->assertRedirect();

        $this->actingAs($user)->post('/admin/sections/about_data', [
            'data' => ['photo_main_url' => $aboutNew],
        ])->assertRedirect();

        Storage::disk('public')->assertMissing(MediaStorage::toPublicDiskPath($aboutOld));
        Storage::disk('public')->assertExists(MediaStorage::toPublicDiskPath($aboutNew));
    }

    public function test_filament_relative_disk_path_is_normalized_on_save()
    {
        $project = Project::first();
        $project->update(['thumbnail_url' => 'uploads/projects/filament-sample.webp']);
        $this->assertSame('/storage/uploads/projects/filament-sample.webp', $project->fresh()->thumbnail_url);

        $service = Service::first();
        $service->update(['image_url' => 'uploads/services/filament-service.webp']);
        $this->assertSame('/storage/uploads/services/filament-service.webp', $service->fresh()->image_url);

        $testimonial = Testimonial::first();
        $testimonial->update(['avatar_url' => 'uploads/testimonials/filament-avatar.webp']);
        $this->assertSame('/storage/uploads/testimonials/filament-avatar.webp', $testimonial->fresh()->avatar_url);
    }

    public function test_storage_fallback_route_blocks_path_traversal()
    {
        $this->assertNull(MediaStorage::resolveSafeStoragePath('../.env'));
        $this->assertNull(MediaStorage::resolveSafeStoragePath('../../.env'));

        $this->get('/storage/../../.env')->assertStatus(404);
    }

    public function test_filament_resource_pages_render_cleanly()
    {
        $user = User::factory()->create(['role' => 'Super Admin']);
        $project = Project::first();

        $this->actingAs($user)->get('/filament/projects')->assertStatus(200);
        $this->actingAs($user)->get("/filament/projects/{$project->id}/edit")->assertStatus(200);
        $this->actingAs($user)->get('/filament/services')->assertStatus(200);
        $this->actingAs($user)->get('/filament/testimonials')->assertStatus(200);
    }

    public function test_real_disk_project_thumbnail_upload_and_replacement_succeeds_end_to_end()
    {
        $user = User::factory()->create();
        $project = Project::first();
        $createdDiskPaths = [];

        // Use the real local 'public' disk instead of Storage::fake('public')
        Storage::forgetDisk('public');

        try {
            // 1. Upload first project thumbnail to real disk
            $upload1 = $this->actingAs($user)->postJson(route('admin.upload'), [
                'image' => UploadedFile::fake()->image('real-proj-1.jpg', 1200, 800),
                'folder' => 'projects',
            ]);

            $upload1->assertStatus(200)->assertJson(['success' => true]);
            $url1 = $upload1->json('url');
            $diskPath1 = MediaStorage::toPublicDiskPath($url1);
            $this->assertNotNull($diskPath1);
            $createdDiskPaths[] = $diskPath1;

            $realFile1 = storage_path('app/public/' . $diskPath1);
            $this->assertFileExists($realFile1);

            // Verify fallback route /storage/{path} serves the real uploaded file cleanly
            $this->get($url1)->assertStatus(200);

            // 2. Save project with first thumbnail
            $this->actingAs($user)->put(route('admin.projects.update', $project), [
                'title' => $project->title,
                'category' => $project->category,
                'client_name' => $project->client_name,
                'location' => $project->location,
                'project_value' => $project->project_value,
                'year' => $project->year,
                'thumbnail_url' => $url1,
                'status' => $project->status,
                'description' => $project->description,
            ])->assertRedirect(route('admin.dashboard'));

            $this->assertSame($url1, $project->fresh()->thumbnail_url);
            $this->assertFileExists($realFile1);

            // 3. Upload replacement thumbnail & update project -> first file is cleaned up, second persists
            $upload2 = $this->actingAs($user)->postJson(route('admin.upload'), [
                'image' => UploadedFile::fake()->image('real-proj-2.webp', 1200, 800),
                'folder' => 'projects',
            ]);

            $upload2->assertStatus(200)->assertJson(['success' => true]);
            $url2 = $upload2->json('url');
            $diskPath2 = MediaStorage::toPublicDiskPath($url2);
            $this->assertNotNull($diskPath2);
            $createdDiskPaths[] = $diskPath2;

            $realFile2 = storage_path('app/public/' . $diskPath2);
            $this->assertFileExists($realFile2);

            $this->actingAs($user)->put(route('admin.projects.update', $project), [
                'title' => $project->title,
                'category' => $project->category,
                'client_name' => $project->client_name,
                'location' => $project->location,
                'project_value' => $project->project_value,
                'year' => $project->year,
                'thumbnail_url' => $url2,
                'status' => $project->status,
                'description' => $project->description,
            ])->assertRedirect(route('admin.dashboard'));

            $this->assertSame($url2, $project->fresh()->thumbnail_url);
            $this->assertFileDoesNotExist($realFile1);
            $this->assertFileExists($realFile2);
        } finally {
            foreach ($createdDiskPaths as $diskPath) {
                $absPath = storage_path('app/public/' . $diskPath);
                if (is_file($absPath)) {
                    @unlink($absPath);
                }
            }
            Storage::fake('public');
        }
    }

    public function test_upload_logs_and_returns_controlled_json_when_directory_creation_throws_under_app_debug_false()
    {
        config(['app.debug' => false]);
        Log::spy();

        $user = User::factory()->create();

        $mockDisk = Mockery::mock(FilesystemAdapter::class);
        $mockDisk->shouldReceive('makeDirectory')
            ->once()
            ->with('uploads/projects')
            ->andThrow(UnableToCreateDirectory::atLocation(
                storage_path('app/public/uploads/projects'),
                'Permission denied'
            ));

        Storage::set('public', $mockDisk);

        try {
            $response = $this->actingAs($user)->postJson(route('admin.upload'), [
                'image' => UploadedFile::fake()->image('thumb.jpg', 800, 600),
                'folder' => 'projects',
            ]);

            $response->assertStatus(500);
            $response->assertJson([
                'success' => false,
            ]);

            $message = $response->json('message');
            $this->assertIsString($message);
            $this->assertNotSame('', trim($message));
            $this->assertNotSame('Server Error', $message);
            $this->assertStringContainsString('storage/app/public', $message);

            Log::shouldHaveReceived('error')->once();
        } finally {
            Storage::fake('public');
        }
    }

    public function test_project_update_succeeds_even_when_orphan_cleanup_throws_storage_exception()
    {
        Log::spy();

        $user = User::factory()->create();
        $project = Project::first();
        $project->updateQuietly(['thumbnail_url' => '/storage/uploads/projects/existing-old-thumb.webp']);

        $mockDisk = Mockery::mock(FilesystemAdapter::class);
        $mockDisk->shouldReceive('exists')
            ->once()
            ->with('uploads/projects/existing-old-thumb.webp')
            ->andThrow(UnableToCreateDirectory::atLocation(
                storage_path('app/public'),
                'Permission denied'
            ));

        Storage::set('public', $mockDisk);

        try {
            $response = $this->actingAs($user)->put(route('admin.projects.update', $project), [
                'title' => 'Proyek Tetap Tersimpan Walau Cleanup Gagal',
                'category' => $project->category,
                'client_name' => $project->client_name,
                'location' => $project->location,
                'project_value' => $project->project_value,
                'year' => $project->year,
                'thumbnail_url' => '/storage/uploads/projects/new-replacement-thumb.webp',
                'status' => $project->status,
                'description' => $project->description,
            ]);

            $response->assertRedirect(route('admin.dashboard'));

            $this->assertDatabaseHas('projects', [
                'id' => $project->id,
                'title' => 'Proyek Tetap Tersimpan Walau Cleanup Gagal',
                'thumbnail_url' => '/storage/uploads/projects/new-replacement-thumb.webp',
            ]);

            Log::shouldHaveReceived('warning')->once();
        } finally {
            Storage::fake('public');
        }
    }

    public function test_upload_handles_null_mime_and_missing_fileinfo_guesser_with_empty_folder_fallback()
    {
        $user = User::factory()->create();

        // Generate a real 1x1 PNG file on temp disk
        $tmpPng = tempnam(sys_get_temp_dir(), 'wsm_png_');
        $pngBytes = base64_decode(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
        );
        file_put_contents($tmpPng, $pngBytes);

        // Subclass UploadedFile simulating missing php-fileinfo (LogicException) and null MIME
        $fileWithoutGuesser = new class($tmpPng, 'photo.unknown', null, UPLOAD_ERR_OK, true) extends UploadedFile {
            public function getMimeType(): ?string
            {
                return null;
            }

            public function guessExtension(): ?string
            {
                throw new MimeLogicException('Unable to guess the MIME type as no guessers are available.');
            }
        };

        try {
            $this->assertTrue(MediaStorage::isSupportedUploadedImage($fileWithoutGuesser));
            $this->assertSame('png', MediaStorage::detectImageExtension($fileWithoutGuesser));

            $response = $this->actingAs($user)->postJson(route('admin.upload'), [
                'image' => $fileWithoutGuesser,
                'folder' => '',
            ]);

            $response->assertStatus(200)->assertJson(['success' => true]);
            $url = $response->json('url');
            $this->assertStringStartsWith('/storage/uploads/general/', $url);
            $this->assertStringEndsWith('.png', $url);

            $filename = $response->json('filename');
            Storage::disk('public')->assertExists("uploads/general/{$filename}");
        } finally {
            @unlink($tmpPng);
        }
    }

    public function test_upload_falls_back_to_stream_contents_put_when_realpath_is_unavailable()
    {
        $user = User::factory()->create();

        $tmpPng = tempnam(sys_get_temp_dir(), 'wsm_real_');
        $pngBytes = base64_decode(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
        );
        file_put_contents($tmpPng, $pngBytes);

        // Simulate getRealPath() returning false (e.g., open_basedir on symlinked tmp) while getPathname() is readable
        $fileWithFalseRealPath = new class($tmpPng, 'fallback.png', 'image/png', UPLOAD_ERR_OK, true) extends UploadedFile {
            public function getRealPath(): string|false
            {
                return false;
            }
        };

        try {
            $response = $this->actingAs($user)->postJson(route('admin.upload'), [
                'image' => $fileWithFalseRealPath,
                'folder' => 'projects',
            ]);

            $response->assertStatus(200)->assertJson(['success' => true]);
            $filename = $response->json('filename');
            Storage::disk('public')->assertExists("uploads/projects/{$filename}");
        } finally {
            @unlink($tmpPng);
        }
    }
}
