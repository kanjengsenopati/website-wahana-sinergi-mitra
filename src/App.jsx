import React from 'react';
import ThreeConstructionScene from './components/ThreeConstructionScene';
import CountdownTimer from './components/CountdownTimer';
import { Mail, PhoneCall } from 'lucide-react';

export function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Modern Construction Scene (Tower crane, lattice skyscraper, particles & parallax) */}
      <ThreeConstructionScene />

      {/* Subtle Ambient Vignette (Keeps center completely open & illuminated) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#070b14]/50 via-transparent to-[#070b14]/30" />

      {/* Top Floating Mini Header */}
      <header className="relative z-20 w-full px-5 sm:px-8 lg:px-12 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
            <img 
              src="/images/logo-wsm.jpg" 
              alt="Logo CV. Wahana Sinergi Mitra" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[13px] font-bold text-slate-100 tracking-wider drop-shadow-sm">
            CV. WAHANA SINERGI MITRA
          </span>
        </div>

        {/* Discreet Quick Contact Cluster */}
        <div className="flex items-center gap-2.5">
          <a
            href="mailto:info@wahanasinergimitra.com"
            title="Hubungi Email"
            className="w-9 h-9 rounded-full bg-slate-900/60 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-all shadow-md backdrop-blur-sm"
          >
            <Mail className="w-4 h-4 stroke-[2]" />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp Kami"
            className="w-9 h-9 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 flex items-center justify-center transition-all shadow-md backdrop-blur-sm"
          >
            <PhoneCall className="w-4 h-4 stroke-[2]" />
          </a>
        </div>
      </header>

      {/* Main Split Panoramic Content Area (Center Stage 100% Unobstructed for 3D Scene) */}
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-center py-6 sm:py-10">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14 my-auto">
          
          {/* Left Column: Stacked Architectural Bold Typography */}
          <div className="w-full lg:w-auto flex flex-col items-start max-w-xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400 mb-4 sm:mb-6 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase">
                Project Development Phase
              </span>
            </div>

            {/* Giant Stacked Title */}
            <h1 className="flex flex-col font-black tracking-tight leading-[0.92] select-none">
              <span className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                WEBSITE
              </span>
              <span className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-slate-100 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                SEDANG
              </span>
              <span className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-slate-200 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                DALAM
              </span>
              <span className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[80px] xl:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-[0_4px_24px_rgba(6,182,212,0.5)]">
                PERENCANAAN
              </span>
            </h1>
          </div>

          {/* Right Column: 2x2 Grid Ultra-Glassmorphism Countdown Timer */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <CountdownTimer layout="2x2" />
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-20 w-full px-5 sm:px-8 lg:px-12 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[12px]">
        <span>© {new Date().getFullYear()} CV. Wahana Sinergi Mitra. All Rights Reserved.</span>
        <span className="text-slate-400 font-medium tracking-wider uppercase text-[11px]">
          General Contractor & Engineering
        </span>
      </footer>
    </div>
  );
}

export default App;
