import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { 
  Building2, 
  Mail, 
  Lock, 
  ArrowRight, 
  FolderKanban, 
  SlidersHorizontal, 
  MessageSquareText, 
  AlertCircle, 
  Loader2, 
  ArrowLeft 
} from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <>
      <Head title="Masuk ke Panel Admin Website - CV. Wahana Sinergi Mitra" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 flex items-center justify-center px-5 py-6 sm:p-6 lg:p-8 selection:bg-sky-500 selection:text-white">
        
        {/* Main Split-Card Container */}
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          
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
                    Web Portal &amp; CMS System
                  </span>
                  <h1 className="text-xl font-bold tracking-[-0.03em] truncate">
                    CV. Wahana Sinergi Mitra
                  </h1>
                </div>
              </div>

              {/* Main Pitch */}
              <div className="mt-8 space-y-3">
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.025em]">
                  Portal Manajemen Konten &amp; Publikasi Website
                </h2>
                <p className="text-sky-100/90 text-sm leading-relaxed tracking-[-0.015em]">
                  Pusat kendali konten halaman depan website resmi, pembaruan galeri portofolio proyek, 
                  pengaturan tarif simulator RAB, serta pengelolaan pesan konsultasi dan testimoni klien.
                </p>
              </div>

              {/* 3 Glassmorphic Feature Pills */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-sky-100 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                  <FolderKanban className="w-4 h-4 text-sky-300 shrink-0" />
                  <span className="tracking-[-0.015em]">Manajemen Portofolio Proyek &amp; Layanan Konstruksi</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-sky-100 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span className="tracking-[-0.015em]">Konfigurasi Seksi Landing Page &amp; Simulator RAB</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-sky-100 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                  <MessageSquareText className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="tracking-[-0.015em]">Kotak Masuk Konsultasi (Inquiry) &amp; Testimoni Klien</span>
                </div>
              </div>

            </div>

            {/* Bottom Status Row */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-sky-200 tracking-[-0.015em]">
              <span>Kantor Pusat - Jawa Barat</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Website Resmi Online
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Login Form & Quick Demo Card */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white">
            
            <div>
              
              {/* Form Title & Version Badge */}
              <div className="flex items-center justify-between gap-2 mb-2 min-w-0">
                <div className="min-w-0 flex-1">
                  <h3
                    title="Masuk ke Panel Admin Website"
                    className="text-xl font-bold text-slate-900 tracking-[-0.025em] whitespace-nowrap truncate"
                  >
                    Masuk ke Panel Admin Website
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5 tracking-[-0.015em]">
                    Silakan masukkan kredensial resmi akun pengelola website
                  </p>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 rounded-lg shrink-0 whitespace-nowrap">
                  CMS Website
                </span>
              </div>

              {/* Error Alert Box */}
              {errors.email && (
                <div className="mt-4 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-sm flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-xs uppercase tracking-[-0.015em]">Otentikasi Gagal</p>
                    <p className="text-xs text-rose-700 mt-0.5 tracking-[-0.015em]">{errors.email}</p>
                  </div>
                </div>
              )}

              {/* Authentication Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {/* Email / Username Field */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-[-0.015em] mb-1">
                    Email atau Username Admin
                  </label>
                  <div className="relative">
                    <Mail className="w-[18px] h-[18px] text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      placeholder="misal: admin@wahanasinergimitra.id"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-medium tracking-[-0.015em]"
                    />
                  </div>
                </div>

                {/* Password Field with Show/Hide toggle */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-[-0.015em]">
                      Kata Sandi (Password)
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xs text-sky-600 hover:text-sky-800 font-medium transition-colors tracking-[-0.015em]"
                    >
                      {showPassword ? 'Sembunyikan' : 'Lihat Sandi'}
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-[18px] h-[18px] text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                  className="w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer tracking-[-0.015em]"
                >
                  {processing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Memverifikasi Akun...</span>
                    </>
                  ) : (
                    <>
                      <span>Masuk ke Dashboard Website</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>

            {/* Back to Home Link */}
            <div className="pt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors tracking-[-0.015em]"
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
