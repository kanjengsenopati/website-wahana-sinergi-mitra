<?php

namespace App\Http\Controllers;

use App\Models\CompanySetting;
use App\Models\Inquiry;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    /**
     * Display the Dedicated PortOps/WSM Themed Admin Dashboard.
     */
    public function index(): Response
    {
        $projects = Project::orderBy('order')->orderByDesc('id')->get();
        $services = Service::orderBy('order')->get();
        $inquiries = Inquiry::orderByDesc('id')->get();
        $testimonials = Testimonial::orderBy('order')->get();

        $settings = [
            'hero_stat_projects' => CompanySetting::get('hero_stat_projects', '50+'),
            'hero_stat_value' => CompanySetting::get('hero_stat_value', 'Rp 85+ Miliar'),
            'hero_stat_satisfaction' => CompanySetting::get('hero_stat_satisfaction', '99.4%'),
            'hero_stat_safety' => CompanySetting::get('hero_stat_safety', '1.250.000+ Jam'),
            'company_phone' => CompanySetting::get('company_phone', '+62 812-3456-7890'),
            'company_email' => CompanySetting::get('company_email', 'info@wahanasinergimitra.id'),
            'company_address' => CompanySetting::get('company_address', 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia'),
            'company_about' => CompanySetting::get('company_about', 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya...'),
        ];

        $metrics = [
            'total_projects' => $projects->count(),
            'total_portfolio_value' => $projects->sum('project_value'),
            'total_inquiries' => $inquiries->count(),
            'new_inquiries' => $inquiries->where('status', 'Baru')->count(),
            'total_services' => $services->count(),
            'total_testimonials' => $testimonials->count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'projects' => $projects,
            'services' => $services,
            'inquiries' => $inquiries,
            'testimonials' => $testimonials,
            'settings' => $settings,
            'metrics' => $metrics,
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
            'year' => 'required|integer|min:2000|max:2030',
            'thumbnail_url' => 'nullable|string',
            'status' => 'required|string|in:Selesai,Berjalan',
            'description' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ]);

        $slug = Str::slug($validated['title']) . '-' . rand(100, 999);

        Project::create([
            ...$validated,
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
            'year' => 'required|integer|min:2000|max:2030',
            'thumbnail_url' => 'nullable|string',
            'status' => 'required|string|in:Selesai,Berjalan',
            'description' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ]);

        $project->update([
            ...$validated,
            'is_featured' => $request->boolean('is_featured', $project->is_featured),
            'order' => $request->input('order', $project->order),
        ]);

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
            'short_description' => 'required|string',
            'full_description' => 'nullable|string',
            'order' => 'integer',
            'is_active' => 'boolean',
        ]);

        $slug = Str::slug($validated['title']);

        Service::create([
            ...$validated,
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
            'short_description' => 'required|string',
            'full_description' => 'nullable|string',
            'order' => 'integer',
            'is_active' => 'boolean',
        ]);

        $service->update([
            ...$validated,
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
        $inputs = $request->only([
            'hero_stat_projects',
            'hero_stat_value',
            'hero_stat_satisfaction',
            'hero_stat_safety',
            'company_phone',
            'company_email',
            'company_address',
            'company_about',
        ]);

        foreach ($inputs as $key => $val) {
            if ($val !== null) {
                CompanySetting::set($key, $val);
            }
        }

        return redirect()->route('admin.dashboard')->with('success', 'Pengaturan tampilan depan dan informasi kontak berhasil disimpan.');
    }

    /**
     * LOCAL IMAGE UPLOAD HANDLER
     */
    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|file|image|mimes:jpeg,png,jpg,webp,avif|max:5120',
            'folder' => 'nullable|string|in:projects,testimonials,general',
        ]);

        $folder = $request->input('folder', 'general');
        $file = $request->file('image');

        // Generate sanitized unique filename
        $extension = $file->getClientOriginalExtension() ?: 'webp';
        $filename = Str::random(24) . '.' . strtolower($extension);

        $path = $file->storeAs("uploads/{$folder}", $filename, 'public');

        return response()->json([
            'success' => true,
            'url' => "/storage/{$path}",
            'filename' => $filename,
        ]);
    }
}
