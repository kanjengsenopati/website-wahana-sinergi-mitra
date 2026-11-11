import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  HardHat, 
  Building 
} from 'lucide-react';
import Text from './Typography';
import ThreeConstructionScene from './ThreeConstructionScene';

export function HeroSection({ stats = {} }) {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#F8FAFC]">
      {/* Full 3D Construction Scene - Left-Focused */}
      <div className="absolute inset-0 z-0">
        <ThreeConstructionScene />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full grid lg:grid-cols-12 gap-8 items-center">
        {/* Spacer for 3D Motion (Left) */}
        <div className="hidden lg:block lg:col-span-6" />

        {/* Text Content Container (Right) */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all">
            
            <Text.H1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.15] text-slate-900 tracking-[-0.03em]">
              <span className="block">Membangun Masa Depan</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-emerald-600">
                Presisi Konstruksi Nyata
              </span>
            </Text.H1>

            <p className="mt-6 text-[16px] sm:text-[18px] text-slate-700 font-medium leading-relaxed tracking-[-0.015em]">
              Eksplorasi mahakarya arsitektur modern dengan rekayasa sipil berstandar tinggi. Pantau progres proyek, mutu beton, dan ketepatan struktur secara real-time.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-8">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>Konsultasi Proyek Baru</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/80 hover:bg-white text-slate-900 font-bold text-[15px] border border-slate-200 transition-all hover:-translate-y-0.5"
              >
                <span>Galeri Portofolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
