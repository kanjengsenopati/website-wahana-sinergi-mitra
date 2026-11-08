import React from 'react';
import ThreeConstructionScene from './components/ThreeConstructionScene';
import CountdownTimer from './components/CountdownTimer';
import { Mail, PhoneCall } from 'lucide-react';

export function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-x-hidden bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Modern Construction Scene (Tower crane, lattice skyscraper, particles & parallax) */}
      <ThreeConstructionScene />

      {/* Subtle Atmospheric Vignette & Contrast Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-gradient from-transparent via-[#070b14]/40 to-[#070b14]/90" />
      <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#070b14]/80 to-transparent pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070b14]/80 to-transparent pointer-events-none z-0" />

      {/* Top Floating Mini Header */}
      <header className="relative z-10 w-full px-5 py-6 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800/80 shadow-lg">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
            <img 
              src="/images/logo-wsm.jpg" 
              alt="Logo CV. Wahana Sinergi Mitra" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[13px] font-bold text-slate-200 tracking-wider">
            CV. WAHANA SINERGI MITRA
          </span>
        </div>

        {/* Discreet Quick Contact Cluster */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:info@wahanasinergimitra.com"
            title="Hubungi Email"
            className="w-9 h-9 rounded-full bg-slate-900/70 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 border border-slate-800 flex items-center justify-center transition-all shadow-md"
          >
            <Mail className="w-4 h-4 stroke-[2]" />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp Kami"
            className="w-9 h-9 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-all shadow-md"
          >
            <PhoneCall className="w-4 h-4 stroke-[2]" />
          </a>
        </div>
      </header>

      {/* Central Viewport Card Container */}
      <main className="relative z-10 flex-1 w-full max-w-4xl px-5 py-6 flex items-center justify-center">
        <div className="w-full relative overflow-hidden rounded-[24px] bg-slate-950/70 backdrop-blur-2xl border border-slate-700/50 p-6 sm:p-12 md:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-center flex flex-col items-center">
          
          {/* Subtle Ambient Glow Blobs behind card */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              Project Development Phase
            </span>
          </div>

          {/* The Single Crisp Headline: Website Sedang Dalam Perencanaan */}
          <h1 className="text-[32px] sm:text-[46px] md:text-[54px] font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-10 sm:mb-12 max-w-2xl drop-shadow-md">
            Website Sedang Dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Perencanaan</span>
          </h1>

          {/* Prominent & Outstanding Countdown Timer */}
          <div className="w-full max-w-3xl">
            <CountdownTimer />
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full px-5 py-5 text-center text-slate-500 text-[12px]">
        <span>© {new Date().getFullYear()} CV. Wahana Sinergi Mitra. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default App;
