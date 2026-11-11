<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    /**
     * Show the custom PortOps-styled login form.
     */
    public function showLoginForm(): mixed
    {
        if (Auth::check()) {
            return redirect('/admin');
        }

        return Inertia::render('Auth/Login', [
            'demoUser' => [
                'name' => 'Administrator WSM',
                'email' => 'admin@wahanasinergimitra.id',
                'role' => 'Super Admin WSM',
                'password' => 'password123',
            ],
        ]);
    }

    /**
     * Handle incoming authentication request.
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $remember = $request->boolean('remember', true);

        if (Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password']], $remember)) {
            $request->session()->regenerate();

            return redirect()->intended('/admin');
        }

        return back()->withErrors([
            'email' => 'Otentikasi gagal. Email atau kata sandi tidak cocok.',
        ])->onlyInput('email');
    }

    /**
     * Handle session logout.
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
