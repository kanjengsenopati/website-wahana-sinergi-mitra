<?php

namespace App\Http\Controllers;

use App\Models\CompanySetting;
use App\Models\Inquiry;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
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
        $users = User::orderByDesc('id')->get();
        $authUser = Auth::user();

        $settings = [
            'hero_stat_projects' => CompanySetting::get('hero_stat_projects', '50+'),
            'hero_stat_value' => CompanySetting::get('hero_stat_value', 'Rp 85+ Miliar'),
            'hero_stat_satisfaction' => CompanySetting::get('hero_stat_satisfaction', '99.4%'),
            'hero_stat_safety' => CompanySetting::get('hero_stat_safety', '1.250.000+ Jam'),
            'company_phone' => CompanySetting::get('company_phone', '+62 812-3456-7890'),
            'company_email' => CompanySetting::get('company_email', 'info@wahanasinergimitra.id'),
            'company_address' => CompanySetting::get('company_address', 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia'),
            'company_operating_hours' => CompanySetting::get('company_operating_hours', 'Senin – Sabtu: 08.00 – 17.00 WIB'),
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
            'company_operating_hours',
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
        $merged = is_array($data) ? array_merge($current, $data) : $current;

        CompanySetting::setJson("section_{$section}", $merged);

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
            'password' => 'nullable|string|min:8|confirmed',
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
            'password' => 'required|string|min:8',
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
            'password' => 'nullable|string|min:8',
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
