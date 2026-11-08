import React from 'react';
import ThreeConstructionScene from './components/ThreeConstructionScene';
import CountdownTimer from './components/CountdownTimer';
import { Mail, PhoneCall } from 'lucide-react';

export function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-x-hidden bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Modern Construction Scene (Tower crane, lattice skyscraper, particles & parallax) */}
      <ThreeConstructionScene />

      {/* Subtle Atmospheric Ambient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#070b14]/60 via-transparent to-[#070b14]/40" />

      {/* Top Floating Mini Header */}
      <header className="relative z-10 w-full px-5 py-6 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
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
        <div className="flex items-center gap-2">
          <a
            href="mailto:info@wahanasinergimitra.com"
            title="Hubungi Email"
            className="w-9 h-9 rounded-full bg-slate-900/50 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-all shadow-md backdrop-blur-sm"
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

      {/* Central Viewport Card Container (Ultra-Glassmorphism: semi-transparent, backdrop-blur-md, strong text shadows) */}
      <main className="relative z-10 flex-1 w-full max-w-4xl px-5 py-6 flex items-center justify-center">
        <div className="w-full relative overflow-hidden rounded-[24px] bg-slate-950/25 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 p-6 sm:p-12 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 text-center flex flex-col items-center">
          
          {/* Subtle Ambient Glow Blobs behind card */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              Project Development Phase
            </span>
          </div>

          {/* The Single Crisp Headline with strong drop-shadow: Website Sedang Dalam Perencanaan */}
          <h1 className="text-[32px] sm:text-[46px] md:text-[54px] font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 mb-10 sm:mb-12 max-w-2xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] select-none">
            Website Sedang Dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Perencanaan</span>
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
