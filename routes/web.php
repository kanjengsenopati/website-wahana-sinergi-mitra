<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LandingPageController;
use Illuminate\Support\Facades\Route;

// Public Landing Page
Route::get('/', [LandingPageController::class, 'index'])->name('home');
Route::post('/inquiry', [LandingPageController::class, 'storeInquiry'])->name('inquiry.store');

// Custom PortOps-Themed Auth
Route::redirect('/admin/login', '/login');
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Dedicated React Inertia Admin Panel (Protected by Auth)
Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');

    // Projects CRUD
    Route::post('/projects', [AdminDashboardController::class, 'storeProject'])->name('projects.store');
    Route::put('/projects/{project}', [AdminDashboardController::class, 'updateProject'])->name('projects.update');
    Route::delete('/projects/{project}', [AdminDashboardController::class, 'deleteProject'])->name('projects.destroy');

    // Services CRUD
    Route::post('/services', [AdminDashboardController::class, 'storeService'])->name('services.store');
    Route::put('/services/{service}', [AdminDashboardController::class, 'updateService'])->name('services.update');
    Route::delete('/services/{service}', [AdminDashboardController::class, 'deleteService'])->name('services.destroy');

    // Inquiries Management
    Route::put('/inquiries/{inquiry}', [AdminDashboardController::class, 'updateInquiry'])->name('inquiries.update');
    Route::delete('/inquiries/{inquiry}', [AdminDashboardController::class, 'deleteInquiry'])->name('inquiries.destroy');

    // Testimonials CRUD
    Route::post('/testimonials', [AdminDashboardController::class, 'storeTestimonial'])->name('testimonials.store');
    Route::put('/testimonials/{testimonial}', [AdminDashboardController::class, 'updateTestimonial'])->name('testimonials.update');
    Route::delete('/testimonials/{testimonial}', [AdminDashboardController::class, 'deleteTestimonial'])->name('testimonials.destroy');

    // Company Settings
    Route::post('/settings', [AdminDashboardController::class, 'updateSettings'])->name('settings.update');

    // SSOT Section Manager (Visibility & Content)
    Route::post('/sections/visibility', [AdminDashboardController::class, 'updateSectionVisibility'])->name('sections.visibility');
    Route::post('/sections/{section}', [AdminDashboardController::class, 'updateSectionContent'])->name('sections.content');

    // Local Storage Image Upload Handler
    Route::post('/upload', [AdminDashboardController::class, 'uploadImage'])->name('upload');
});
