import React from 'react';
import { 
  Building2, 
  HardHat, 
  Warehouse, 
  Briefcase, 
  Wrench, 
  Hammer, 
  ArrowUpRight, 
  CheckCircle 
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

export function ServicesSection({ services = [], meta = {} }) {
  const badge = meta?.badge || 'Layanan Komprehensif';
  const title = meta?.title || 'Solusi Konstruksi Terintegrasi Dari Pondasi Hingga Serah Terima';
  const subtitle = meta?.subtitle || 'Setiap proyek dikelola oleh tenaga ahli bersertifikat dengan standar keselamatan kerja (K3) dan garansi pemeliharaan struktural.';

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <Text.Label className="text-blue-700">{badge}</Text.Label>
              </div>
            )}
            <Text.H1 className="text-[28px] sm:text-[38px]">
              {title}
            </Text.H1>
          </div>
          {subtitle && (
            <Text.Body className="max-w-md text-slate-600">
              {subtitle}
            </Text.Body>
          )}
        </div>

        {/* Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id || idx}
                className="bg-white rounded-[24px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header Row: Icon + Title in 1 line with Badge at top-right */}
                  <div className="flex items-center justify-between gap-3 min-w-0 mb-4">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                        <IconComponent className="w-4 h-4 stroke-[2]" />
                      </div>
                      <Text.H2 title={service.title} singleLine className="text-[16px] group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </Text.H2>
                    </div>
                    <div className="shrink-0 whitespace-nowrap">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[-0.015em] bg-slate-100/80 px-2.5 py-0.5 rounded-full">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <Text.Body className="text-[13.5px] text-slate-600 line-clamp-3 mb-4">
                    {service.short_description}
                  </Text.Body>
                </div>

                {/* Bottom Card Area */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between min-w-0">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-700 hover:text-blue-600 transition-colors tracking-[-0.015em]"
                  >
                    <span>Konsultasikan</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full shrink-0">
                    Standar SNI
                  </span>
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
