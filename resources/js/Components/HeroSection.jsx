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

export function HeroSection({ stats = {}, data = {}, show3D = true }) {
  const badge = data?.badge || '3D Visualisation & Architectural Engineering';
  const titleLine1 = data?.title_line1 || 'Membangun Masa Depan';
  const titleLine2 = data?.title_line2 || 'Presisi Konstruksi Nyata';
  const description = data?.description || 'Eksplorasi mahakarya arsitektur modern dengan rekayasa sipil berstandar tinggi. Pantau progres proyek, mutu beton, dan ketepatan struktur secara real-time.';
  const ctaPrimaryText = data?.cta_primary_text || 'Konsultasi Proyek Baru';
  const ctaPrimaryLink = data?.cta_primary_link || '#inquiry';
  const ctaSecondaryText = data?.cta_secondary_text || 'Galeri Portofolio';
  const ctaSecondaryLink = data?.cta_secondary_link || '#portofolio';

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#F8FAFC]">
      {/* 3D Construction Scene or Architectural Gradient Background */}
      {show3D ? (
        <div className="absolute inset-0 z-0">
          <ThreeConstructionScene />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-200/50" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full grid lg:grid-cols-12 gap-8 items-center">
        {/* Spacer for 3D Motion (Left) */}
        <div className="hidden lg:block lg:col-span-6" />

        {/* Text Content Container (Right) */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all">
            
            {/* Dynamic Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <Text.Label className="text-blue-700">{badge}</Text.Label>
              </div>
            )}

            <Text.H1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.15] text-slate-900 tracking-[-0.03em]">
              <span className="block">{titleLine1}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-emerald-600">
                {titleLine2}
              </span>
            </Text.H1>

            <p className="mt-6 text-[16px] sm:text-[18px] text-slate-700 font-medium leading-relaxed tracking-[-0.015em]">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-8">
              {ctaPrimaryText && (
                <a
                  href={ctaPrimaryLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                >
                  <span>{ctaPrimaryText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {ctaSecondaryText && (
                <a
                  href={ctaSecondaryLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/80 hover:bg-white text-slate-900 font-bold text-[15px] border border-slate-200 transition-all hover:-translate-y-0.5"
                >
                  <span>{ctaSecondaryText}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
