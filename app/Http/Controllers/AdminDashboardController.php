<?php

namespace App\Http\Controllers;

use App\Models\CompanySetting;
use App\Models\Inquiry;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\User;
use App\Support\MediaStorage;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    /**
     * Display the Dedicated PortOps/WSM Themed Admin Dashboard.
     */
    public function index(): Response
    {
        $projects = Project::orderedForPortfolio()->get();
        $services = Service::orderBy('order')->get();
        $inquiries = Inquiry::orderByDesc('id')->get();
        $testimonials = Testimonial::orderBy('order')->get();
        $users = User::orderByDesc('id')->get();
        $authUser = Auth::user();

        $settings = [
            'company_logo_url' => CompanySetting::get('company_logo_url', ''),
            'hero_stat_projects' => CompanySetting::get('hero_stat_projects', '50+'),
            'hero_stat_value' => CompanySetting::get('hero_stat_value', 'Rp 85+ Miliar'),
            'hero_stat_satisfaction' => CompanySetting::get('hero_stat_satisfaction', '99.4%'),
            'hero_stat_safety' => CompanySetting::get('hero_stat_safety', '1.250.000+ Jam'),
            'company_phone_landline' => CompanySetting::get('company_phone_landline', CompanySetting::DEFAULT_PHONE_LANDLINE),
            'company_phone_landline_label' => CompanySetting::get('company_phone_landline_label', CompanySetting::DEFAULT_PHONE_LANDLINE_LABEL),
            'company_phone' => CompanySetting::get('company_phone', CompanySetting::DEFAULT_PHONE),
            'company_phone_label' => CompanySetting::get('company_phone_label', CompanySetting::DEFAULT_PHONE_LABEL),
            'company_phone_2' => CompanySetting::get('company_phone_2', CompanySetting::DEFAULT_PHONE_2),
            'company_phone_2_label' => CompanySetting::get('company_phone_2_label', CompanySetting::DEFAULT_PHONE_2_LABEL),
            'company_email' => CompanySetting::get('company_email', CompanySetting::DEFAULT_EMAIL),
            'company_address' => CompanySetting::get('company_address', CompanySetting::DEFAULT_ADDRESS),
            'company_workshop_address' => CompanySetting::get('company_workshop_address', CompanySetting::DEFAULT_WORKSHOP_ADDRESS),
            'company_workshop_coordinates' => CompanySetting::get('company_workshop_coordinates', CompanySetting::DEFAULT_WORKSHOP_COORDINATES),
            'company_workshop_map_url' => CompanySetting::get('company_workshop_map_url', ''),
            'company_operating_hours' => CompanySetting::get('company_operating_hours', CompanySetting::DEFAULT_OPERATING_HOURS),
            'company_about' => CompanySetting::get('company_about', CompanySetting::DEFAULT_ABOUT),
        ];

        $metrics = [
            'total_projects' => $projects->count(),
            'total_portfolio_value' => $projects->sum('project_value'),
            'total_inquiries' => $inquiries->count(),
            'new_inquiries' => $inquiries->where('status', 'Baru')->count(),
            'total_services' => $services->count(),
            'total_testimonials' => $testimonials->count(),
        ];

        // SSOT Section Visibility & Dynamic Contents for Section Manager
        $visibility = CompanySetting::getSectionVisibility();
        $sectionData = [
            'hero' => CompanySetting::getSectionData('hero'),
            'about_data' => CompanySetting::getSectionData('about_data'),
            'services_meta' => CompanySetting::getSectionData('services_meta'),
            'estimator_data' => CompanySetting::getSectionData('estimator_data'),
            'portfolio_meta' => CompanySetting::getSectionData('portfolio_meta'),
            'workflow_data' => CompanySetting::getSectionData('workflow_data'),
            'proksi_data' => CompanySetting::getSectionData('proksi_data'),
            'testimonials_meta' => CompanySetting::getSectionData('testimonials_meta'),
            'inquiry_meta' => CompanySetting::getSectionData('inquiry_meta'),
        ];

        return Inertia::render('Admin/Dashboard', [
            'projects' => $projects,
            'projectCategories' => Project::standardCategoryOptions(),
            'services' => $services,
            'inquiries' => $inquiries,
            'testimonials' => $testimonials,
            'settings' => $settings,
            'metrics' => $metrics,
            'visibility' => $visibility,
            'sectionData' => $sectionData,
            'auth_user' => $authUser,
            'users' => $users,
        ]);
    }

    /**
     * PROJECT CRUD
     */
    public function storeProject(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'client_name' => 'nullable|string|max:255',
            'location' => 'required|string|max:255',
            'project_value' => 'nullable|numeric|min:0',
            'year' => 'required|integer|min:1990|max:2050',
            'thumbnail_url' => 'nullable|string',
            'gallery_images' => 'nullable|array|max:12',
            'gallery_images.*' => [
                function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value)) {
                        if (trim($value) === '') {
                            $fail('URL foto galeri tidak boleh kosong.');
                        }
                        return;
                    }
                    if (!is_array($value) || !is_string($value['url'] ?? null) || trim($value['url']) === '') {
                        $fail('Setiap item galeri harus memiliki URL foto yang valid.');
                        return;
                    }
                    if (isset($value['caption']) && (!is_string($value['caption']) || mb_strlen($value['caption']) > 255)) {
                        $fail('Caption foto galeri maksimal 255 karakter.');
                    }
                },
            ],
            'status' => 'required|string|in:Selesai,Berjalan',
            'description' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ], [
            'gallery_images.max' => 'Maksimal 12 foto galeri per proyek.',
        ]);

        $slug = Str::slug($validated['title']) . '-' . rand(100, 999);

        Project::create([
            ...$validated,
            'gallery_images' => MediaStorage::normalizeGalleryItems($request->input('gallery_images', [])),
            'slug' => $slug,
            'is_featured' => $request->boolean('is_featured', true),
            'order' => $request->input('order', 0),
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Proyek baru berhasil ditambahkan.');
    }

    public function updateProject(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'client_name' => 'nullable|string|max:255',
            'location' => 'required|string|max:255',
            'project_value' => 'nullable|numeric|min:0',
            'year' => 'required|integer|min:1990|max:2050',
            'thumbnail_url' => 'nullable|string',
            'gallery_images' => 'nullable|array|max:12',
            'gallery_images.*' => [
                function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value)) {
                        if (trim($value) === '') {
                            $fail('URL foto galeri tidak boleh kosong.');
                        }
                        return;
                    }
                    if (!is_array($value) || !is_string($value['url'] ?? null) || trim($value['url']) === '') {
                        $fail('Setiap item galeri harus memiliki URL foto yang valid.');
                        return;
                    }
                    if (isset($value['caption']) && (!is_string($value['caption']) || mb_strlen($value['caption']) > 255)) {
                        $fail('Caption foto galeri maksimal 255 karakter.');
                    }
                },
            ],
            'status' => 'required|string|in:Selesai,Berjalan',
            'description' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ], [
            'gallery_images.max' => 'Maksimal 12 foto galeri per proyek.',
        ]);

        $updatePayload = [
            ...$validated,
            'is_featured' => $request->boolean('is_featured', $project->is_featured),
            'order' => $request->input('order', $project->order),
        ];

        if ($request->has('gallery_images')) {
            $updatePayload['gallery_images'] = MediaStorage::normalizeGalleryItems($request->input('gallery_images', []));
        }

        $project->update($updatePayload);

        return redirect()->route('admin.dashboard')->with('success', 'Data proyek berhasil diperbarui.');
    }

    public function deleteProject(Project $project)
    {
        $project->delete();

        return redirect()->route('admin.dashboard')->with('success', 'Proyek telah dihapus.');
    }

    /**
     * SERVICE CRUD
     */
    public function storeService(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'required|string|max:50',
            'badge_text' => 'nullable|string|max:80',
            'badge_color' => ['nullable', 'string', 'regex:/^#[0-9A-Fa-f]{6}$/'],
            'image_url' => 'nullable|string',
            'short_description' => 'required|string',
            'full_description' => 'nullable|string',
            'order' => 'integer',
            'is_active' => 'boolean',
        ]);

        $slug = Str::slug($validated['title']);

        Service::create([
            ...$validated,
            'badge_text' => filled($validated['badge_text'] ?? null) ? trim($validated['badge_text']) : null,
            'badge_color' => $validated['badge_color'] ?? '#059669',
            'slug' => $slug,
            'order' => $request->input('order', 0),
            'is_active' => $request->boolean('is_active', true),
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Layanan konstruksi baru berhasil ditambahkan.');
    }

    public function updateService(Request $request, Service $service)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'required|string|max:50',
            'badge_text' => 'nullable|string|max:80',
            'badge_color' => ['nullable', 'string', 'regex:/^#[0-9A-Fa-f]{6}$/'],
            'image_url' => 'nullable|string',
            'short_description' => 'required|string',
            'full_description' => 'nullable|string',
            'order' => 'integer',
            'is_active' => 'boolean',
        ]);

        $service->update([
            ...$validated,
            'badge_text' => filled($validated['badge_text'] ?? null) ? trim($validated['badge_text']) : null,
            'badge_color' => $validated['badge_color'] ?? ($service->badge_color ?: '#059669'),
            'order' => $request->input('order', $service->order),
            'is_active' => $request->boolean('is_active', $service->is_active),
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Layanan berhasil diperbarui.');
    }

    public function deleteService(Service $service)
    {
        $service->delete();

        return redirect()->route('admin.dashboard')->with('success', 'Layanan telah dihapus.');
    }

    /**
     * INQUIRY MANAGEMENT
     */
    public function updateInquiry(Request $request, Inquiry $inquiry)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:Baru,Dihubungi,Negosiasi,Selesai,Batal',
            'internal_notes' => 'nullable|string',
        ]);

        $inquiry->update($validated);

        return redirect()->route('admin.dashboard')->with('success', 'Status pesan/lead berhasil diperbarui.');
    }

    public function deleteInquiry(Inquiry $inquiry)
    {
        $inquiry->delete();

        return redirect()->route('admin.dashboard')->with('success', 'Pesan inquiry telah dihapus.');
    }

    /**
     * TESTIMONIAL CRUD
     */
    public function storeTestimonial(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_role' => 'nullable|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'avatar_url' => 'nullable|string',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'project_name' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        Testimonial::create([
            ...$validated,
            'is_active' => $request->boolean('is_active', true),
            'order' => $request->input('order', 0),
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Testimoni klien berhasil ditambahkan.');
    }

    public function updateTestimonial(Request $request, Testimonial $testimonial)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_role' => 'nullable|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'avatar_url' => 'nullable|string',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'project_name' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        $testimonial->update([
            ...$validated,
            'is_active' => $request->boolean('is_active', $testimonial->is_active),
            'order' => $request->input('order', $testimonial->order),
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Testimoni berhasil diperbarui.');
    }

    public function deleteTestimonial(Testimonial $testimonial)
    {
        $testimonial->delete();

        return redirect()->route('admin.dashboard')->with('success', 'Testimoni telah dihapus.');
    }

    /**
     * SETTINGS UPDATE
     */
    public function updateSettings(Request $request)
    {
        $request->validate([
            'company_logo_url' => 'nullable|string|max:500',
            'company_phone_landline' => 'nullable|string|max:100',
            'company_phone_landline_label' => 'nullable|string|max:100',
            'company_phone' => 'nullable|string|max:100',
            'company_phone_label' => 'nullable|string|max:100',
            'company_phone_2' => 'nullable|string|max:100',
            'company_phone_2_label' => 'nullable|string|max:100',
            'company_email' => 'nullable|email|max:255',
            'company_address' => 'nullable|string|max:500',
            'company_workshop_address' => 'nullable|string|max:500',
            'company_operating_hours' => 'nullable|string|max:255',
            'company_about' => 'nullable|string|max:2000',
            'company_workshop_coordinates' => [
                'nullable',
                'string',
                'max:100',
                function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value) && trim($value) !== '' && CompanySetting::parseCoordinates($value) === null) {
                        $fail('Format koordinat Workshop tidak valid. Gunakan format "Latitude, Longitude" (contoh: -6.300641, 107.148957).');
                    }
                },
            ],
            'company_workshop_map_url' => [
                'nullable',
                'string',
                'max:2000',
                function (string $attribute, mixed $value, \Closure $fail): void {
                    if (is_string($value) && trim($value) !== '' && CompanySetting::sanitizeGoogleMapInput($value) === null) {
                        $fail('Link atau kode embed Google Maps Workshop harus menggunakan tautan HTTPS resmi dari Google Maps.');
                    }
                },
            ],
        ]);

        if ($request->exists('company_logo_url')) {
            $oldLogo = CompanySetting::get('company_logo_url', '');
            $normalizedLogo = MediaStorage::normalizeUrl(
                is_string($request->input('company_logo_url')) ? $request->input('company_logo_url') : null
            ) ?? '';

            CompanySetting::set('company_logo_url', $normalizedLogo, 'branding');
            MediaStorage::deleteUnusedDiff(
                array_values(array_filter([$oldLogo])),
                array_values(array_filter([$normalizedLogo]))
            );
        }

        if ($request->exists('company_workshop_coordinates')) {
            $rawCoords = $request->input('company_workshop_coordinates');
            $parsed = CompanySetting::parseCoordinates(is_string($rawCoords) ? $rawCoords : null);
            CompanySetting::set('company_workshop_coordinates', $parsed ? $parsed['formatted'] : '');
        }

        if ($request->exists('company_workshop_map_url')) {
            $rawMapUrl = $request->input('company_workshop_map_url');
            $sanitizedMapUrl = CompanySetting::sanitizeGoogleMapInput(is_string($rawMapUrl) ? $rawMapUrl : null) ?? '';
            CompanySetting::set('company_workshop_map_url', $sanitizedMapUrl);
        }

        $nullableClearableKeys = [
            'company_phone_landline',
            'company_phone_landline_label',
            'company_phone_label',
            'company_phone_2',
            'company_phone_2_label',
            'company_workshop_address',
        ];
        foreach ($nullableClearableKeys as $key) {
            if ($request->exists($key)) {
                $val = $request->input($key);
                CompanySetting::set($key, is_string($val) ? trim($val) : '');
            }
        }

        $inputs = $request->only([
            'hero_stat_projects',
            'hero_stat_value',
            'hero_stat_satisfaction',
            'hero_stat_safety',
            'company_phone',
            'company_email',
            'company_address',
            'company_operating_hours',
            'company_about',
        ]);

        foreach ($inputs as $key => $val) {
            if ($val !== null) {
                CompanySetting::set($key, $val);
            }
        }

        return redirect()->route('admin.dashboard')->with('success', 'Pengaturan logo, tampilan depan, kontak, alamat & peta Workshop berhasil disimpan.');
    }

    /**
     * LOCAL IMAGE UPLOAD HANDLER
     */
    public function uploadImage(Request $request)
    {
        // Detect PHP-level upload errors (e.g., upload_max_filesize=2M exceeded, no tmp dir, cant write) with clear Indonesian feedback
        if (isset($_FILES['image']['error']) && $_FILES['image']['error'] !== UPLOAD_ERR_OK && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
            $phpError = (int) $_FILES['image']['error'];
            if (in_array($phpError, [UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE], true)) {
                $limitMb = round(MediaStorage::phpMaxUploadBytes() / (1024 * 1024), 1);

                return response()->json([
                    'success' => false,
                    'message' => "Ukuran file melebihi batas upload PHP server ({$limitMb} MB). Harap gunakan gambar yang lebih kecil atau kompres terlebih dahulu.",
                    'errors' => [
                        'image' => ["Ukuran file melebihi batas upload PHP server ({$limitMb} MB)."],
                    ],
                ], 422);
            }

            $phpErrorMessage = match ($phpError) {
                UPLOAD_ERR_PARTIAL => 'File hanya terunggah sebagian. Silakan coba unggah ulang.',
                UPLOAD_ERR_NO_TMP_DIR => 'Direktori sementara (tmp) upload PHP tidak tersedia di server.',
                UPLOAD_ERR_CANT_WRITE => 'Server gagal menulis file upload sementara ke disk.',
                UPLOAD_ERR_EXTENSION => 'Proses upload dihentikan oleh ekstensi PHP di server.',
                default => 'File gagal diunggah ke server. Silakan coba unggah ulang.',
            };

            return response()->json([
                'success' => false,
                'message' => $phpErrorMessage,
                'errors' => [
                    'image' => [$phpErrorMessage],
                ],
            ], 422);
        }

        $request->validate([
            'image' => [
                'required',
                'file',
                'max:5120',
                function (string $attribute, mixed $value, \Closure $fail): void {
                    if (!$value instanceof UploadedFile || !MediaStorage::isSupportedUploadedImage($value)) {
                        $fail('Format gambar yang didukung hanya JPG, PNG, WebP, atau AVIF.');
                    }
                },
            ],
            'folder' => 'nullable|string|in:projects,services,testimonials,general,branding',
        ], [
            'image.required' => 'Harap pilih file gambar terlebih dahulu.',
            'image.file' => 'File yang diunggah harus berupa gambar yang valid.',
            'image.max' => 'Ukuran file gambar maksimal 5 MB.',
            'image.uploaded' => 'File gagal diunggah ke server. Pastikan ukuran file tidak melebihi batas server.',
            'folder.in' => 'Folder tujuan upload tidak valid.',
        ]);

        $folder = $request->input('folder') ?: 'general';
        $file = $request->file('image');

        if (!$file || !$file->isValid()) {
            return response()->json([
                'success' => false,
                'message' => 'File gambar gagal diterima oleh server. Silakan coba unggah ulang.',
                'errors' => [
                    'image' => ['File gambar gagal diterima oleh server.'],
                ],
            ], 422);
        }

        $directory = "uploads/{$folder}";
        $targetDir = storage_path("app/public/{$directory}");
        $extension = MediaStorage::detectImageExtension($file);
        $filename = Str::random(24) . '.' . $extension;
        $targetPath = "{$directory}/{$filename}";

        try {
            $storedPath = false;
            $realPath = $file->getRealPath();
            $useNativeFallback = !class_exists(\finfo::class);

            if (!$useNativeFallback) {
                try {
                    $disk = Storage::disk('public');

                    if (!$disk->makeDirectory($directory)) {
                        Log::error('Image upload failed: unable to create storage directory', [
                            'folder' => $folder,
                            'directory' => $directory,
                            'target_dir' => $targetDir,
                        ]);

                        return response()->json([
                            'success' => false,
                            'message' => 'Gagal menyiapkan direktori penyimpanan gambar di server. Periksa izin tulis folder storage/app/public.',
                        ], 500);
                    }

                    if (is_string($realPath) && $realPath !== '' && is_readable($realPath)) {
                        try {
                            $storedPath = $disk->putFileAs($directory, $file, $filename);
                        } catch (\Throwable $storeException) {
                            if (str_contains($storeException->getMessage(), 'finfo')) {
                                $useNativeFallback = true;
                            } else {
                                Log::warning('Primary image store failed, attempting stream/contents fallback', [
                                    'exception' => $storeException::class,
                                    'message' => $storeException->getMessage(),
                                    'target_path' => $targetPath,
                                ]);
                            }
                            $storedPath = false;
                        }
                    }

                    if ($storedPath === false && !$useNativeFallback) {
                        $pathname = $file->getPathname();
                        if (is_string($pathname) && $pathname !== '' && is_readable($pathname)) {
                            $contents = @file_get_contents($pathname);
                            if ($contents !== false && $disk->put($targetPath, $contents)) {
                                $storedPath = $targetPath;
                            }
                        }
                    }
                } catch (\Throwable $flysystemException) {
                    // Fallback to native filesystem when PHP fileinfo (finfo) is missing on server
                    if (str_contains($flysystemException->getMessage(), 'finfo')) {
                        Log::warning('Flysystem unavailable due to missing finfo extension, falling back to native write', [
                            'message' => $flysystemException->getMessage(),
                            'target_path' => $targetPath,
                        ]);
                        $useNativeFallback = true;
                        $storedPath = false;
                    } else {
                        throw $flysystemException;
                    }
                }
            }

            // Native PHP filesystem fallback (works even when php-fileinfo / finfo class is disabled on VPS)
            if ($storedPath === false && $useNativeFallback) {
                $storedPath = MediaStorage::storeUploadedFileNatively($file, $directory, $filename);
            }

            if ($storedPath === false) {
                Log::error('Image upload failed: storage write returned false', [
                    'folder' => $folder,
                    'filename' => $filename,
                    'target_dir' => $targetDir,
                    'real_path' => $realPath,
                    'pathname' => $file->getPathname(),
                    'has_finfo' => class_exists(\finfo::class),
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'Gagal menyimpan file ke direktori storage server. Periksa izin tulis folder storage/app/public.',
                ], 500);
            }

            return response()->json([
                'success' => true,
                'url' => "/storage/{$storedPath}",
                'filename' => $filename,
            ]);
        } catch (\Throwable $e) {
            Log::error('Image upload failed with unexpected exception', [
                'exception' => $e::class,
                'message' => $e->getMessage(),
                'folder' => $folder,
                'filename' => $filename,
                'target_dir' => $targetDir,
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Gagal menyimpan gambar ke direktori storage server. Periksa izin tulis folder storage/app/public atau log server.',
            ], 500);
        }
    }

    /**
     * UPDATE SECTION VISIBILITY (TOGGLE ON/OFF)
     */
    public function updateSectionVisibility(Request $request)
    {
        $current = CompanySetting::getSectionVisibility();

        if ($request->has('section')) {
            $section = $request->input('section');
            $isVisible = $request->boolean('is_visible');
            $current[$section] = $isVisible;
        } elseif ($request->has('visibility')) {
            $incoming = $request->input('visibility');
            if (is_array($incoming)) {
                $current = array_merge($current, $incoming);
            }
        }

        CompanySetting::setJson('section_visibility', $current);

        return redirect()->back()->with('success', 'Visibilitas seksi landing page berhasil diperbarui.');
    }

    /**
     * UPDATE SECTION CONTENT (SSOT DYNAMIC DATA)
     */
    public function updateSectionContent(Request $request, string $section)
    {
        $allowedSections = [
            'hero',
            'about_data',
            'services_meta',
            'estimator_data',
            'portfolio_meta',
            'workflow_data',
            'proksi_data',
            'testimonials_meta',
            'inquiry_meta',
        ];

        if (!in_array($section, $allowedSections)) {
            return redirect()->back()->withErrors(['section' => 'Seksi tidak valid.']);
        }

        $data = $request->input('data', $request->except(['_token', '_method']));

        $current = CompanySetting::getSectionData($section);
        $oldImageUrls = MediaStorage::extractSectionImageUrls($section, $current);

        $merged = is_array($data) ? array_merge($current, $data) : $current;
        $merged = MediaStorage::normalizeSectionImages($section, $merged);

        CompanySetting::setJson("section_{$section}", $merged);

        $newImageUrls = MediaStorage::extractSectionImageUrls($section, $merged);
        MediaStorage::deleteUnusedDiff($oldImageUrls, $newImageUrls);

        return redirect()->back()->with('success', "Konten seksi {$section} berhasil disimpan.");
    }

    /**
     * SELF USER PROFILE UPDATE
     */
    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'current_password' => 'nullable|string',
            'password' => ['nullable', 'string', 'confirmed', Password::min(8)->mixedCase()->numbers()->symbols()],
        ], [
            'password.min' => 'Kata sandi baru minimal 8 karakter.',
            'password.mixed_case' => 'Kata sandi baru harus mengandung kombinasi huruf besar dan kecil.',
            'password.numbers' => 'Kata sandi baru harus mengandung minimal 1 angka.',
            'password.symbols' => 'Kata sandi baru harus mengandung minimal 1 simbol/karakter khusus.',
            'password.confirmed' => 'Konfirmasi kata sandi baru tidak cocok.',
        ]);

        if (!empty($validated['password'])) {
            if (empty($validated['current_password']) || !Hash::check($validated['current_password'], $user->password)) {
                return back()->withErrors(['current_password' => 'Kata sandi saat ini tidak cocok.']);
            }
            $user->password = Hash::make($validated['password']);
        }

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->save();

        return redirect()->back()->with('success', 'Profil dan informasi akun Anda berhasil diperbarui.');
    }

    /**
     * USER MANAGEMENT CRUD (SUPER ADMIN ONLY)
     */
    public function storeUser(Request $request)
    {
        $currentUser = Auth::user();
        if ($currentUser->role !== 'Super Admin') {
            return redirect()->back()->withErrors(['user' => 'Hanya Super Admin yang diizinkan menambahkan pengguna baru.']);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'role' => 'required|string|in:Super Admin,Editor',
            'password' => ['required', 'string', Password::min(8)->mixedCase()->numbers()->symbols()],
        ], [
            'password.min' => 'Kata sandi minimal 8 karakter.',
            'password.mixed_case' => 'Kata sandi harus mengandung kombinasi huruf besar dan kecil.',
            'password.numbers' => 'Kata sandi harus mengandung minimal 1 angka.',
            'password.symbols' => 'Kata sandi harus mengandung minimal 1 simbol/karakter khusus.',
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'role' => $validated['role'],
            'password' => Hash::make($validated['password']),
            'email_verified_at' => now(),
        ]);

        return redirect()->back()->with('success', "Pengguna {$validated['name']} ({$validated['role']}) berhasil ditambahkan.");
    }

    public function updateUser(Request $request, User $user)
    {
        $currentUser = Auth::user();
        if ($currentUser->role !== 'Super Admin') {
            return redirect()->back()->withErrors(['user' => 'Hanya Super Admin yang diizinkan memperbarui pengguna.']);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'role' => 'required|string|in:Super Admin,Editor',
            'password' => ['nullable', 'string', Password::min(8)->mixedCase()->numbers()->symbols()],
        ], [
            'password.min' => 'Kata sandi minimal 8 karakter.',
            'password.mixed_case' => 'Kata sandi harus mengandung kombinasi huruf besar dan kecil.',
            'password.numbers' => 'Kata sandi harus mengandung minimal 1 angka.',
            'password.symbols' => 'Kata sandi harus mengandung minimal 1 simbol/karakter khusus.',
        ]);

        // If demoting from Super Admin to Editor, ensure at least one other Super Admin exists
        if ($user->role === 'Super Admin' && $validated['role'] !== 'Super Admin') {
            $otherSuperAdmins = User::where('role', 'Super Admin')->where('id', '!=', $user->id)->count();
            if ($otherSuperAdmins === 0) {
                return redirect()->back()->withErrors(['role' => 'Minimal harus ada 1 Super Admin di sistem.']);
            }
        }

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->role = $validated['role'];
        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }
        $user->save();

        return redirect()->back()->with('success', "Data pengguna {$user->name} berhasil diperbarui.");
    }

    public function deleteUser(User $user)
    {
        $currentUser = Auth::user();
        if ($currentUser->role !== 'Super Admin') {
            return redirect()->back()->withErrors(['user' => 'Hanya Super Admin yang diizinkan menghapus pengguna.']);
        }

        if ($user->id === $currentUser->id) {
            return redirect()->back()->withErrors(['user' => 'Anda tidak dapat menghapus akun Anda sendiri.']);
        }

        if ($user->role === 'Super Admin') {
            $otherSuperAdmins = User::where('role', 'Super Admin')->where('id', '!=', $user->id)->count();
            if ($otherSuperAdmins === 0) {
                return redirect()->back()->withErrors(['user' => 'Tidak dapat menghapus Super Admin terakhir.']);
            }
        }

        $userName = $user->name;
        $user->delete();

        return redirect()->back()->with('success', "Akun pengguna {$userName} telah berhasil dihapus.");
    }
}
