import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  Calculator,
  Award,
  MapPin
} from 'lucide-react';
import Text from './Typography';

const defaultHeroSlides = [
  {
    id: 1,
    tag: 'SBU KONSTRUKSI AKTIF • ISO 9001 & 45001 CERTIFIED',
    location: 'Kawasan Industri Cikarang & Karawang',
    caption: 'Dokumentasi Lapangan: Erection Struktur Baja WF 400 & Inspeksi HSE',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
    sector: 'Konstruksi Gudang, Pabrik & Struktur Baja Bentang Lebar',
  },
  {
    id: 2,
    tag: 'GENERAL CONTRACTOR & ARCHITECTURAL FIT-OUT',
    location: 'Jabodetabek & Jawa Barat',
    caption: 'Dokumentasi Proyek: Konstruksi Gedung Perkantoran & Fasad Komersial',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
    sector: 'Pembangunan Gedung Kantor, Ruko Komersial & Fasilitas Publik',
  },
  {
    id: 3,
    tag: 'ZERO-ACCIDENT K3 CULTURE • SMK3 TERVERIFIKASI',
    location: 'Pengawasan Mutu Terpadu (PROKSI)',
    caption: 'Dokumentasi Tim Engineer: Pengawasan Mutu Beton K-350 & Keselamatan Kerja',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
    sector: 'Manajemen Proyek Berstandar SNI dengan Pelaporan Real-Time',
  },
  {
    id: 4,
    tag: 'CIVIL ENGINEERING & HEAVY INFRASTRUCTURE',
    location: 'Jawa Barat, Banten & Nasional',
    caption: 'Dokumentasi Infrastruktur: Perkerasan Jalan Rigid Pavement & Drainase Kawasan',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1800&q=85',
    sector: 'Rekayasa Sipil, Perkerasan Jalan Beton, Pondasi Bore Pile & MEP',
  },
];

export function HeroSection({ stats = {}, data = {} }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const badge = data?.badge || 'SBU Konstruksi Aktif • General Contractor & Civil Engineering';
  const titleLine1 = data?.title_line1 || 'Membangun Masa Depan';
  const titleLine2 = data?.title_line2 || 'Presisi Konstruksi Nyata';
  const description = data?.description || 'Pelaksana konstruksi gedung komersial, gudang industri struktur baja WF, dan rekayasa sipil berstandar SNI. Didukung pengawasan mutu K3 Zero-Accident serta transparansi kurva-S real-time.';
  const ctaPrimaryText = data?.cta_primary_text || 'Konsultasi Proyek Baru';
  const ctaPrimaryLink = data?.cta_primary_link || '#inquiry';
  const ctaSecondaryText = data?.cta_secondary_text || 'Lihat Portofolio & Tabel Kontrak';
  const ctaSecondaryLink = data?.cta_secondary_link || '#portofolio';

  const slides =
    Array.isArray(data?.slides) && data.slides.length > 0
      ? data.slides
      : defaultHeroSlides;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = slides[activeSlide];

  const statItems = [
    {
      label: 'TOTAL PROYEK TERSELESAIKAN',
      value: stats?.total_projects || '50+ Proyek',
      sub: 'Gedung, Gudang & Infrastruktur',
      icon: Building2,
      accent: 'text-emerald-600',
    },
    {
      label: 'AKUMULASI NILAI KONTRAK',
      value: stats?.total_value_formatted || 'Rp 85+ Miliar',
      sub: 'Rekam Jejak Kontrak Terverifikasi',
      icon: Award,
      accent: 'text-emerald-600',
    },
    {
      label: 'JAM KERJA AMAN (ZERO ACCIDENT)',
      value: stats?.zero_accident_hours || '1.250.000+ Jam',
      sub: 'Kepatuhan Penuh ISO 45001 / SMK3',
      icon: HardHat,
      accent: 'text-blue-600',
    },
    {
      label: 'INDEKS KEPUASAN PEMBERI TUGAS',
      value: stats?.client_satisfaction || '99.4% Puas',
      sub: 'Serah Terima BAST Tepat Waktu',
      icon: ShieldCheck,
      accent: 'text-emerald-600',
    },
  ];

  return (
    <section
      id="beranda"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 overflow-hidden bg-slate-950"
    >
      {/* Full-Bleed Multi-Slide Real Construction Photography Background (PT MKP & Jaya Arnikon Vibe) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image || defaultHeroSlides[index % defaultHeroSlides.length].image}
              alt={slide.caption || 'Proyek Konstruksi CV. Wahana Sinergi Mitra'}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = defaultHeroSlides[index % defaultHeroSlides.length].image;
              }}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Editorial Dark Corporate Scrim for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Main Hero Container (Rule 1: px-5 Safe Area) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full my-auto pt-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Column: Authoritative General Contractor Headline & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Active Slide Tag & Qualification Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[-0.015em] text-sky-300">
                  {badge}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-bold tracking-[-0.015em]">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{currentSlide.location}</span>
              </div>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <Text.H1 className="text-[32px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] text-white tracking-[-0.03em]">
                <span className="block">{titleLine1}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-emerald-400">
                  {titleLine2}
                </span>
              </Text.H1>
              <div className="text-[13px] sm:text-[14px] font-bold text-amber-300 tracking-[-0.015em] flex items-center gap-2 pt-1">
                <HardHat className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fokus Spesialisasi Slide #{activeSlide + 1}: {currentSlide.sector}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-slate-200 font-medium leading-relaxed tracking-[-0.015em] max-w-2xl">
              {description}
            </p>

            {/* Primary & Secondary Corporate Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {ctaPrimaryText && (
                <a
                  href={ctaPrimaryLink}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[14px] sm:text-[15px] tracking-[-0.02em] shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                >
                  <span>{ctaPrimaryText}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              )}
              {ctaSecondaryText && (
                <a
                  href={ctaSecondaryLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-[14px] sm:text-[15px] tracking-[-0.02em] border border-white/25 transition-all hover:-translate-y-0.5"
                >
                  <span>{ctaSecondaryText}</span>
                </a>
              )}
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 backdrop-blur-md text-emerald-300 border border-emerald-400/30 font-bold text-[13px] sm:text-[14px] tracking-[-0.02em] transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Hitung Simulasi RAB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Field Documentation Caption Card & Slider Controls (PT MKP Smart Slider Vibe) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="w-full rounded-[24px] bg-slate-900/80 backdrop-blur-md p-5 border border-white/15 text-white space-y-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              <div className="flex items-center justify-between gap-2 min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-[-0.015em] text-emerald-400 truncate">
                  {currentSlide.tag}
                </span>
                <span className="text-[11px] font-bold text-slate-300 shrink-0 tabular-nums">
                  0{activeSlide + 1} / 0{slides.length}
                </span>
              </div>

              <p className="text-[13px] font-semibold text-white leading-snug tracking-[-0.015em]">
                {currentSlide.caption}
              </p>

              {/* Slide Progress Dots & Arrow Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeSlide
                          ? 'w-7 bg-emerald-400'
                          : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Slide Sebelumnya"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Slide Berikutnya"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Live Corporate Metrics Counter Dock (Rule 1: rounded-[24px], shadow-[0_8px_30px_rgb(0,0,0,0.04)], zero solid border on white cards) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between"
              >
                {/* Top Header Row: 1-Line Label + Top-Right Icon Cluster (Rule 2 & 3) */}
                <div className="flex items-center justify-between gap-2 min-w-0 mb-2">
                  <Text.Label title={item.label} singleLine className="text-slate-600 flex-1 min-w-0">
                    {item.label}
                  </Text.Label>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <IconComponent className="w-[18px] h-[18px] stroke-[2] text-slate-500" />
                  </div>
                </div>

                {/* Bottom Density: Metric Value & Supporting Caption */}
                <div>
                  <div className={`text-[22px] sm:text-[24px] font-extrabold tracking-[-0.03em] tabular-nums whitespace-nowrap ${item.accent}`}>
                    {item.value}
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <Text.Caption className="text-slate-600 truncate">
                      {item.sub}
                    </Text.Caption>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
