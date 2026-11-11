import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { 
  Building2, 
  Mail, 
  Lock, 
  ArrowRight, 
  Zap, 
  Database, 
  ShieldCheck, 
  Layers, 
  AlertCircle, 
  Loader2, 
  ArrowLeft 
} from 'lucide-react';

export default function Login({ demoUser = {} }) {
  const [showPassword, setShowPassword] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    email: 'admin@wahanasinergimitra.id',
    password: 'password123',
    remember: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  const handleQuickDemoLogin = () => {
    setData({
      email: demoUser.email || 'admin@wahanasinergimitra.id',
      password: demoUser.password || 'password123',
      remember: true,
    });
    // Auto-submit
    post('/login');
  };

  return (
    <>
      <Head title="Masuk ke Sistem WSM - CV. Wahana Sinergi Mitra" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-sky-500 selection:text-white">
        
        {/* Main Split-Card Container */}
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-2xl shadow-sky-950/10 border border-slate-200/80 overflow-hidden">
          
          {/* Left Column: Branding, Gradient & Glassmorphism Highlights */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 text-white p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient Blur Spheres */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              
              {/* Brand Top Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/20 shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] uppercase tracking-[-0.015em] text-sky-200 font-bold block truncate">
                    ERP & Engineering System
                  </span>
                  <h1 className="text-xl font-bold tracking-tight truncate">
                    WSM Construction
                  </h1>
                </div>
              </div>

              {/* Main Pitch */}
              <div className="mt-8 space-y-3">
                <h2 className="text-2xl font-bold leading-tight">
                  Sistem Operasional Manajemen Konstruksi
                </h2>
                <p className="text-sky-100/90 text-sm leading-relaxed">
                  Platform manajemen terpadu pengawasan proyek sipil, kalkulasi RAB presisi, 
                  kurva-S harian, dan kepatuhan keselamatan kerja (K3) terintegrasi.
                </p>
              </div>

              {/* 3 Glassmorphic Feature Pills */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-sky-100 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                  <Database className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Real Database SQLite Server (WAL Mode)</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-sky-100 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Pemeriksaan Ketat Standar Mutu ISO & K3</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-sky-100 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                  <Layers className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Sinkronisasi RAB, Logistik Lapangan & SPK</span>
                </div>
              </div>

            </div>

            {/* Bottom Status Row */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-sky-200">
              <span>Kantor Pusat - Jawa Barat</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                WSM Live Online
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Login Form & Quick Demo Card */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white">
            
            <div>
              
              {/* Form Title & Version Badge */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Masuk ke Sistem WSM
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Silakan masuk dengan akun terdaftar atau gunakan Demo Login
                  </p>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 rounded-lg shrink-0">
                  WSM v4.2
                </span>
              </div>

              {/* Error Alert Box */}
              {errors.email && (
                <div className="mt-4 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-sm flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-xs uppercase tracking-[-0.015em]">Otentikasi Gagal</p>
                    <p className="text-xs text-rose-700 mt-0.5">{errors.email}</p>
                  </div>
                </div>
              )}

              {/* Authentication Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {/* Email / Username Field */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                    Email atau Username Petugas
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      placeholder="misal: admin@wahanasinergimitra.id"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Password Field with Show/Hide toggle */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em]">
                      Kata Sandi (Password)
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xs text-sky-600 hover:text-sky-800 font-medium transition-colors"
                    >
                      {showPassword ? 'Sembunyikan' : 'Lihat Sandi'}
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={data.password}
                      onChange={(e) => setData('password', e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full mt-2 py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-sky-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {processing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Memverifikasi Akun...</span>
                    </>
                  ) : (
                    <>
                      <span>Masuk ke Dashboard Operasional</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

              {/* Quick Demo Login Section (PortOps Highlight Feature) */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-[-0.015em]">
                      Quick Demo Login (1-Klik)
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    Super Admin
                  </span>
                </div>

                {/* Demo User Card */}
                <div className="bg-gradient-to-r from-sky-50/80 via-blue-50/50 to-indigo-50/80 p-3.5 rounded-2xl border border-sky-300 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-700 text-white flex items-center justify-center font-black text-base shadow-md shadow-sky-600/30 shrink-0">
                      A
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 truncate">
                          {demoUser.name || 'Administrator WSM'}
                        </span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300 shrink-0">
                          {demoUser.role || 'Super Admin WSM'}
                        </span>
                      </div>
                      <span className="text-xs text-slate-600 font-mono block mt-0.5 truncate">
                        {demoUser.email || 'admin@wahanasinergimitra.id'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={processing}
                    onClick={handleQuickDemoLogin}
                    className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 rounded-xl shadow-md shadow-sky-600/25 shrink-0 transition-all cursor-pointer disabled:opacity-50"
                  >
                    1-Klik Masuk
                  </button>
                </div>
              </div>

            </div>

            {/* Back to Home Link */}
            <div className="pt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Landing Page Utama</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
