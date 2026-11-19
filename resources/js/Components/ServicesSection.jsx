import React, { useState } from 'react';
import { 
  Building2, 
  HardHat, 
  Warehouse, 
  Briefcase, 
  Wrench, 
  Hammer, 
  ArrowUpRight, 
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Text from './Typography';

const iconMap = {
  Building2,
  HardHat,
  Warehouse,
  Briefcase,
  Wrench,
  Hammer,
};

const servicePhotos = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
];

const serviceStandards = [
  'SNI 1729 & SNI 2847',
  'Fabrikasi Baja WF Presisi',
  'Garansi Struktur & Retensi',
  'Instalasi Standar PUIL & NFPA',
  'Perkerasan Rigid K-350/K-400',
  'DED & As-Built Drawing Lengkap',
];

export function ServicesSection({ services = [], meta = {} }) {
  const [activeCardId, setActiveCardId] = useState(null);

  const badge = meta?.badge || '• DIVISI & LAYANAN KONSTRUKSI TERPADU';
  const title = meta?.title || 'Mewujudkan Infrastruktur & Bangunan {Berkualitas Tinggi}';
  const subtitle = meta?.subtitle || 'Setiap divisi layanan dikelola oleh tenaga ahli bersertifikat SKA/SKT dengan kepatuhan penuh terhadap standar keselamatan kerja (ISO 45001 / SMK3) dan jaminan mutu struktural.';

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#0B2447] text-white relative overflow-hidden">
      {/* Subtle architectural engineering blueprint pattern overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        
        {/* Section Heading (Jaya Arnikon Royal-Blue Band Vibe) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-bold uppercase tracking-[-0.015em] text-sky-300">
                  {badge}
                </span>
              </div>
            )}
            <Text.AccentTitle
              text={title}
              asBlock
              className="text-[28px] sm:text-[38px] text-white"
              accentClassName="from-sky-300 via-emerald-300 to-emerald-400"
            />
          </div>
          <div className="max-w-md space-y-2">
            {subtitle && (
              <p className="text-[14px] font-medium text-slate-200 tracking-[-0.015em] leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="inline-flex items-center gap-2 text-[12px] font-bold text-amber-300 tracking-[-0.015em]">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Arahkan kursor atau ketuk kartu untuk melihat spesifikasi teknis ➔</span>
            </div>
          </div>
        </div>

        {/* Services 3-Column Photo-Backed Flip/Reveal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Building2;
            const photoUrl = service.image_url || servicePhotos[idx % servicePhotos.length];
            const standardLabel = serviceStandards[idx % serviceStandards.length];
            const isActive = activeCardId === (service.id || idx);

            return (
              <div
                key={service.id || idx}
                onClick={() => setActiveCardId(isActive ? null : (service.id || idx))}
                className="group relative h-[310px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.18)] cursor-pointer select-none"
              >
                {/* FRONT FACE: Real Construction Photography + Navy/Dark Gradient + Single-Line Title */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={photoUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/30" />

                  {/* Front Top Header Bar: Icon + Top-Right Action/Badge Cluster (Rule 3) */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/25">
                      <IconComponent className="w-[18px] h-[18px] stroke-[2]" />
                    </div>
                    <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold tracking-[-0.015em] shadow-sm">
                        {standardLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/90 text-slate-900 text-[11px] font-extrabold tracking-[-0.015em]">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Front Bottom Content: Single-Line Title + Short Preview */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-2">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <h2
                        title={service.title}
                        className="text-[18px] font-bold text-white tracking-[-0.025em] whitespace-nowrap truncate flex-1 min-w-0"
                      >
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-[13px] font-medium text-slate-200 tracking-[-0.015em] line-clamp-2 leading-snug">
                      {service.short_description}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[12px] font-bold text-sky-300 tracking-[-0.015em]">
                      <span>Lihat Spesifikasi Teknis</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* REVEAL / FLIP BACK FACE: Pure White Card adhering strictly to Rule 1, 2, 3 */}
                <div
                  className={`absolute inset-0 bg-white text-slate-800 rounded-[24px] p-7 flex flex-col justify-between transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Single-Line Title + Top-Right Number Cluster (Rule 2 & 3) */}
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-4">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <IconComponent className="w-[18px] h-[18px] stroke-[2]" />
                        </div>
                        <Text.H2
                          title={service.title}
                          singleLine
                          className="text-[16px] text-slate-900 flex-1 min-w-0"
                        >
                          {service.title}
                        </Text.H2>
                      </div>
                      <div className="shrink-0 whitespace-nowrap">
                        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-[-0.015em] bg-blue-600/10 px-2.5 py-1 rounded-full">
                          DIVISI 0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Full Technical Description */}
                    <Text.Body className="text-[13.5px] text-slate-700 line-clamp-4 mb-4 leading-relaxed">
                      {service.full_description || service.short_description}
                    </Text.Body>

                    {/* Technical Deliverable Pills */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold tracking-[-0.015em]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{standardLabel}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold tracking-[-0.015em]">
                        <ShieldCheck className="w-3 h-3 text-blue-600" />
                        <span>Mutu Teruji Lab</span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Card Area */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 min-w-0">
                    <a
                      href="#inquiry"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-colors tracking-[-0.015em]"
                    >
                      <span>Konsultasikan Pekerjaan Ini</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-600/10 px-2.5 py-1 rounded-full shrink-0">
                      Standar SNI
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

export default ServicesSection;
