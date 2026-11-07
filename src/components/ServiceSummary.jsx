import React from 'react';
import { Text } from './Typography';
import { Building2, Compass, Hammer, Sparkles, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 'SRV-01',
    title: 'Konstruksi Gedung & Komersial',
    description: 'Pembangunan gedung bertingkat, perkantoran, ruko, serta fasilitas komersial dengan standar struktural prima.',
    icon: Building2,
    badge: 'Core Service',
    tag: 'Struktur & Sipil',
  },
  {
    id: 'SRV-02',
    title: 'Pekerjaan Sipil & Infrastruktur',
    description: 'Pengembangan drainase, jalan kawasan, perkerasan beton, pematangan lahan, dan pondasi beban berat.',
    icon: Compass,
    badge: 'Infrastruktur',
    tag: 'Teknik Sipil',
  },
  {
    id: 'SRV-03',
    title: 'Renovasi & Retrofitting',
    description: 'Peremajaan fasad, perkuatan struktur lama, alih fungsi ruangan, dan perbaikan menyeluruh bangunan existing.',
    icon: Hammer,
    badge: 'Remodeling',
    tag: 'Rekondisi',
  },
  {
    id: 'SRV-04',
    title: 'Desain Interior & Fit-Out',
    description: 'Pengerjaan interior arsitektural, partisi custom, plafon akustik, flooring, dan tata pencahayaan modern.',
    icon: Sparkles,
    badge: 'Finishing',
    tag: 'Desain & Ruang',
  },
];

export const ServiceSummary = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <div>
          <Text.Label className="block mb-1 text-blue-600">Keahlian Kontraktor</Text.Label>
          <Text.H2>Layanan Utama Kami</Text.H2>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/10 rounded-full">
          <ShieldCheck className="w-[18px] h-[18px] text-emerald-600 stroke-[2]" />
          <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
            Verified Contractor
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="group relative bg-white/80 backdrop-blur-md rounded-[24px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-pakrt-lg flex flex-col justify-between"
            >
              {/* Top Row: Icon + Title ALIGNED IN 1 ROW, with Action/Badge Cluster on the Right */}
              <div className="flex items-center justify-between gap-3 mb-3">
                {/* Left: Icon & Title in 1 single horizontal row */}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-[14px] bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 flex-shrink-0">
                    <IconComponent className="w-[18px] h-[18px] stroke-[2]" />
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-slate-800 leading-snug truncate">
                    {service.title}
                  </h3>
                </div>

                {/* Right: Badge & ID in the same row */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <Text.Caption className="hidden sm:inline not-italic text-[11px] text-slate-400 font-mono">
                    {service.id}
                  </Text.Caption>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="mb-4 pl-0 sm:pl-[52px]">
                <Text.Body className="text-[13px] text-slate-500 leading-relaxed">
                  {service.description}
                </Text.Body>
              </div>

              {/* Bottom Density - Zero Waste Space */}
              <div className="pt-2.5 border-t border-slate-100/80 flex items-center justify-between">
                <Text.Label className="text-[10px] text-slate-400">
                  {service.tag}
                </Text.Label>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-semibold text-emerald-600">Siap Melayani</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSummary;
