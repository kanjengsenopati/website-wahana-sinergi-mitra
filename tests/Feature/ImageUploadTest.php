<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
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
}
