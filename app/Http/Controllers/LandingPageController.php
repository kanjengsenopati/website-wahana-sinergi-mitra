<?php

namespace App\Http\Controllers;

use App\Models\CompanySetting;
use App\Models\Inquiry;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
    /**
     * Display the public landing page with dynamic content.
     */
    public function index(): Response
    {
        $services = Service::where('is_active', true)
            ->orderBy('order')
            ->get();

        $projects = Project::orderBy('order')
            ->get();

        $testimonials = Testimonial::where('is_active', true)
            ->orderBy('order')
            ->get();

        // High-level company statistics for hero & trust badges from CompanySetting
        $stats = [
            'total_projects' => CompanySetting::get('hero_stat_projects', '50+'),
            'total_value_formatted' => CompanySetting::get('hero_stat_value', 'Rp 85+ Miliar'),
            'client_satisfaction' => CompanySetting::get('hero_stat_satisfaction', '99.4%'),
            'zero_accident_hours' => CompanySetting::get('hero_stat_safety', '1.250.000+ Jam'),
            'years_experience' => 12,
        ];

        $company = [
            'phone' => CompanySetting::get('company_phone', '+62 812-3456-7890'),
            'email' => CompanySetting::get('company_email', 'info@wahanasinergimitra.id'),
            'address' => CompanySetting::get('company_address', 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia'),
            'operating_hours' => CompanySetting::get('company_operating_hours', 'Senin – Sabtu: 08.00 – 17.00 WIB'),
            'about' => CompanySetting::get('company_about', 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya yang melayani pekerjaan gedung komersial, industri pergudangan, infrastruktur jalan/jembatan, dan rekayasa sipil berstandar mutu tinggi.'),
        ];

        // SSOT Section Visibility & Section Dynamic Contents
        $visibility = CompanySetting::getSectionVisibility();
        $heroData = CompanySetting::getSectionData('hero');
        $aboutData = CompanySetting::getSectionData('about_data');
        $servicesMeta = CompanySetting::getSectionData('services_meta');
        $estimatorData = CompanySetting::getSectionData('estimator_data');
        $portfolioMeta = CompanySetting::getSectionData('portfolio_meta');
        $workflowData = CompanySetting::getSectionData('workflow_data');
        $proksiData = CompanySetting::getSectionData('proksi_data');
        $testimonialsMeta = CompanySetting::getSectionData('testimonials_meta');
        $inquiryMeta = CompanySetting::getSectionData('inquiry_meta');

        return Inertia::render('LandingPage', [
            'services' => $services,
            'projects' => $projects,
            'testimonials' => $testimonials,
            'stats' => $stats,
            'company' => $company,
            'visibility' => $visibility,
            'heroData' => $heroData,
            'aboutData' => $aboutData,
            'servicesMeta' => $servicesMeta,
            'estimatorData' => $estimatorData,
            'portfolioMeta' => $portfolioMeta,
            'workflowData' => $workflowData,
            'proksiData' => $proksiData,
            'testimonialsMeta' => $testimonialsMeta,
            'inquiryMeta' => $inquiryMeta,
        ]);
    }

    /**
     * Store incoming project inquiry or cost estimation form from visitors.
     */
    public function storeInquiry(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'phone_wa' => 'required|string|max:50',
            'email' => 'nullable|email|max:255',
            'project_type' => 'required|string|max:100',
            'estimated_budget' => 'nullable|numeric|min:0',
            'building_area_m2' => 'nullable|integer|min:0',
            'location' => 'nullable|string|max:255',
            'message' => 'nullable|string|max:2000',
        ]);

        $inquiry = Inquiry::create([
            'client_name' => $validated['client_name'],
            'phone_wa' => $validated['phone_wa'],
            'email' => $validated['email'] ?? null,
            'project_type' => $validated['project_type'],
            'estimated_budget' => $validated['estimated_budget'] ?? null,
            'building_area_m2' => $validated['building_area_m2'] ?? null,
            'location' => $validated['location'] ?? null,
            'message' => $validated['message'] ?? null,
            'status' => 'Baru',
            'internal_notes' => 'Dikirim melalui formulir landing page WSM.',
        ]);

        return redirect()->back()->with('success', 'Konsultasi proyek Anda telah berhasil kami terima. Tim engineering CV. Wahana Sinergi Mitra akan segera menghubungi Anda dalam 1x24 jam kerja.');
    }

    /**
     * Display dedicated full page for a specific project portfolio.
     */
    public function showProject(Project $project): Response
    {
        $relatedProjects = Project::where('id', '!=', $project->id)
            ->where(function ($q) use ($project) {
                if ($project->category) {
                    $q->where('category', $project->category);
                }
            })
            ->orWhere('id', '!=', $project->id)
            ->orderBy('order')
            ->take(3)
            ->get();

        $company = [
            'phone' => CompanySetting::get('company_phone', '+62 812-3456-7890'),
            'email' => CompanySetting::get('company_email', 'info@wahanasinergimitra.id'),
            'address' => CompanySetting::get('company_address', 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia'),
            'about' => CompanySetting::get('company_about', 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya yang melayani pekerjaan gedung komersial, industri pergudangan, infrastruktur jalan/jembatan, dan rekayasa sipil berstandar mutu tinggi.'),
        ];

        return Inertia::render('Public/ProjectDetail', [
            'project' => $project,
            'relatedProjects' => $relatedProjects,
            'company' => $company,
        ]);
    }

    /**
     * Display dedicated full page for a specific service division.
     */
    public function showService(Service $service): Response
    {
        $relatedServices = Service::where('id', '!=', $service->id)
            ->where('is_active', true)
            ->orderBy('order')
            ->take(3)
            ->get();

        $relevantProjects = Project::where('category', 'like', "%{$service->title}%")
            ->orWhere('description', 'like', "%{$service->title}%")
            ->take(3)
            ->get();

        if ($relevantProjects->isEmpty()) {
            $relevantProjects = Project::orderBy('order')->take(3)->get();
        }

        $company = [
            'phone' => CompanySetting::get('company_phone', '+62 812-3456-7890'),
            'email' => CompanySetting::get('company_email', 'info@wahanasinergimitra.id'),
            'address' => CompanySetting::get('company_address', 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia'),
            'about' => CompanySetting::get('company_about', 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya yang melayani pekerjaan gedung komersial, industri pergudangan, infrastruktur jalan/jembatan, dan rekayasa sipil berstandar mutu tinggi.'),
        ];

        return Inertia::render('Public/ServiceDetail', [
            'service' => $service,
            'relatedServices' => $relatedServices,
            'relevantProjects' => $relevantProjects,
            'company' => $company,
        ]);
    }
}
