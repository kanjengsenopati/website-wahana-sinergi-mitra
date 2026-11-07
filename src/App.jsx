import React from 'react';
import { Text } from './components/Typography';
import CountdownTimer from './components/CountdownTimer';
import ServiceSummary from './components/ServiceSummary';
import { 
  Building, 
  HardHat, 
  Construction, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock3,
  CalendarCheck
} from 'lucide-react';

export function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-slate-100/90 text-slate-800">
      {/* Background Konstruksi Bangunan dengan Light Overlay Minimalis */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-[0.22] mix-blend-multiply scale-105 filter blur-[0.5px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Subtle Ambient Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-blue-50/70 via-slate-50/90 to-slate-100" />
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Header Sticky Glassmorphism Bar */}
      <header className="sticky top-0 z-30 w-full px-5 py-3.5 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo & Company Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] overflow-hidden bg-white shadow-sm flex items-center justify-center p-0.5">
              <img 
                src="/images/logo-wsm.jpg" 
                alt="Logo CV. Wahana Sinergi Mitra" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block text-[14px] font-bold text-slate-900 tracking-tight leading-none">
                CV. WAHANA SINERGI MITRA
              </span>
              <Text.Label className="text-[10px] text-blue-600 font-semibold tracking-widest mt-0.5">
                General Contractor & Engineering
              </Text.Label>
            </div>
          </div>

          {/* Top-Right Action Cluster & Status Badge */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Text.Label className="text-[11px] text-amber-700 font-bold lowercase first-letter:uppercase tracking-wider">
                Dalam Perencanaan
              </Text.Label>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:info@wahanasinergimitra.com"
                title="Hubungi melalui Email"
                className="w-9 h-9 rounded-[14px] bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-colors shadow-sm"
              >
                <Mail className="w-[18px] h-[18px] stroke-[2]" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                title="Hubungi melalui WhatsApp"
                className="w-9 h-9 rounded-[14px] bg-emerald-600/10 hover:bg-emerald-600 hover:text-white text-emerald-600 flex items-center justify-center transition-colors shadow-sm"
              >
                <PhoneCall className="w-[18px] h-[18px] stroke-[2]" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-5 py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Hero Card Container: 24px Radius, Surface Elevation, Zero Waste Space */}
        <section className="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[24px] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-0">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/5 to-transparent rounded-bl-full pointer-events-none" />

          {/* Top-Right Action Cluster & Status Tag */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 text-blue-600">
              <Construction className="w-[18px] h-[18px] stroke-[2]" />
              <Text.Label className="text-blue-700 tracking-wider">
                Official Launching Soon
              </Text.Label>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500">
                <CalendarCheck className="w-[14px] h-[14px] text-slate-400 stroke-[2]" />
                <Text.Caption className="not-italic text-[11px] font-semibold text-slate-600">
                  Target 2026/2027
                </Text.Caption>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brand & Announcement */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div>
                <Text.Label className="text-slate-400 mb-1.5 block">
                  Pemberitahuan Resmi Perusahaan
                </Text.Label>
                <h1 className="text-[28px] sm:text-[36px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                  Website Masih Dalam <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-4">Perencanaan</span>
                </h1>
              </div>

              <div className="p-4 rounded-[20px] bg-slate-50/80 border border-slate-100/80">
                <Text.H2 className="text-[17px] text-slate-900 mb-1 flex items-center gap-2">
                  <HardHat className="w-[18px] h-[18px] text-amber-500 stroke-[2]" />
                  CV. WAHANA SINERGI MITRA
                </Text.H2>
                <Text.Body className="text-slate-600 text-[14px]">
                  Kami sedang menyempurnakan portal web interaktif, katalog portofolio proyek terintegrasi, dan platform layanan konstruksi kami untuk menghadirkan pengalaman terbaik bagi seluruh mitra dan klien.
                </Text.Body>
              </div>

              {/* Highlight Features */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-[18px] bg-white shadow-sm">
                  <div className="w-8 h-8 rounded-[12px] bg-emerald-600/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <ShieldCheck className="w-[18px] h-[18px] stroke-[2]" />
                  </div>
                  <div>
                    <span className="block text-[13px] font-semibold text-slate-800 leading-tight">Standar K3 & Mutu</span>
                    <Text.Caption className="text-[11px] not-italic text-slate-400">Kualitas Terjamin</Text.Caption>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-[18px] bg-white shadow-sm">
                  <div className="w-8 h-8 rounded-[12px] bg-blue-600/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Building className="w-[18px] h-[18px] stroke-[2]" />
                  </div>
                  <div>
                    <span className="block text-[13px] font-semibold text-slate-800 leading-tight">General Contractor</span>
                    <Text.Caption className="text-[11px] not-italic text-slate-400">Solusi Konstruksi</Text.Caption>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Logo Box & Visual Brand Identity */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group w-full max-w-[320px] aspect-square rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02]">
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <Text.Caption className="not-italic text-[10px] font-bold tracking-wider uppercase">Official</Text.Caption>
                </div>

                <div className="w-48 h-48 flex items-center justify-center mb-2">
                  <img 
                    src="/images/logo-wsm.jpg" 
                    alt="Logo CV. Wahana Sinergi Mitra Contractor" 
                    className="max-h-full max-w-full object-contain drop-shadow-sm"
                  />
                </div>

                <div className="w-full pt-2 border-t border-slate-100">
                  <Text.Label className="text-[10px] text-slate-400">
                    Kemitraan & Solusi Konstruksi Terpercaya
                  </Text.Label>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-slate-200/50" />

          {/* 60 Days Countdown Timer Section */}
          <CountdownTimer />
        </section>

        {/* Contractor Core Services Section */}
        <section>
          <ServiceSummary />
        </section>

        {/* Contact & Consultation Quick Action Banner */}
        <section className="bg-white/80 backdrop-blur-md rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[18px] bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-600/20">
              <Clock3 className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <Text.H2 className="text-[17px] text-slate-900 mb-0.5">
                Membutuhkan Konsultasi atau Penawaran Proyek?
              </Text.H2>
              <Text.Body className="text-[13px] text-slate-500">
                Tim teknis CV. Wahana Sinergi Mitra tetap aktif melayani kebutuhan proyek sipil dan konstruksi Anda.
              </Text.Body>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[16px] bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-semibold transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <PhoneCall className="w-[18px] h-[18px] stroke-[2]" />
              Hubungi Kami
            </a>
          </div>
        </section>

      </main>

      {/* Footer Minimalist */}
      <footer className="relative z-10 w-full px-5 py-6 bg-white/70 backdrop-blur-md border-t border-slate-200/40 text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo-wsm.jpg" 
              alt="WSM Icon" 
              className="w-5 h-5 object-contain rounded"
            />
            <Text.Caption className="not-italic text-[12px] font-medium text-slate-600">
              © {new Date().getFullYear()} CV. Wahana Sinergi Mitra. Hak Cipta Dilindungi.
            </Text.Caption>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <span className="text-slate-400">General Contractor</span>
            <span>•</span>
            <span className="text-slate-400">Civil & Architecture</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">Under Development</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
