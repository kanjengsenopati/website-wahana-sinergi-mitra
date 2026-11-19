import React from 'react';
import { 
  ClipboardCheck, 
  FileSpreadsheet, 
  ShieldAlert, 
  KeyRound, 
  CheckCircle2,
  HardHat,
  Building,
  Layers,
  Sparkles
} from 'lucide-react';
import Text from './Typography';

const iconMap = {
  ClipboardCheck,
  FileSpreadsheet,
  ShieldAlert,
  KeyRound,
  CheckCircle2,
  HardHat,
  Building,
  Layers,
  Sparkles,
};

const defaultSteps = [
  {
    number: '01',
    title: 'Survei & Analisis Struktur',
    icon: 'ClipboardCheck',
    description: 'Pengukuran topografi, pengujian daya dukung tanah (soil test), dan diskusi kebutuhan spesifikasi teknis.',
  },
  {
    number: '02',
    title: 'DED & Transparansi RAB',
    icon: 'FileSpreadsheet',
    description: 'Pembuatan gambar kerja DED (Detail Engineering Design), jadwal kurva-S, dan kontrak perjanjian kerja mengikat.',
  },
  {
    number: '03',
    title: 'Konstruksi Berstandar K3',
    icon: 'ShieldAlert',
    description: 'Eksekusi lapangan dengan material SNI teruji lab, pengawasan mandor ahli, dan kepatuhan keselamatan zero-accident.',
  },
  {
    number: '04',
    title: 'Handover & Masa Retensi',
    icon: 'KeyRound',
    description: 'Berita acara serah terima resmi (BAST 1 & 2), as-built drawing, serta jaminan garansi pemeliharaan struktural.',
  },
];

export function WorkflowSection({ data = {} }) {
  const badge = data?.badge || '• TATA KELOLA & METODOLOGI KERJA';
  const title = data?.title || 'Standar Eksekusi Proyek Yang {Terukur & Akuntabel}';
  const subtitle = data?.subtitle || 'Kami menerapkan tata kelola konstruksi modern untuk memastikan zero-miscommunication, menghindari biaya membengkak, dan mencapai target serah terima tepat waktu.';
  const rawSteps = (data?.steps && data.steps.length > 0) ? data.steps : defaultSteps;

  const steps = rawSteps.map((step) => ({
    ...step,
    iconComponent: typeof step.icon === 'string' ? (iconMap[step.icon] || ClipboardCheck) : (step.icon || ClipboardCheck),
  }));

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header */}
        <div className="text-center max-w-5xl lg:max-w-6xl mx-auto mb-14">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <Text.Label className="text-blue-700">{badge}</Text.Label>
            </div>
          )}
          <Text.AccentTitle text={title} className="text-[28px] sm:text-[38px] mb-3" />
          {subtitle && (
            <Text.Body className="text-slate-700 max-w-5xl mx-auto">
              {subtitle}
            </Text.Body>
          )}
        </div>

        {/* Dynamic Cards Grid (Rule 1: rounded-[24px], shadow-[0_8px_30px_rgb(0,0,0,0.04)], zero solid border on white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.iconComponent;
            return (
              <div
                key={step.number || idx}
                className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between relative group hover:-translate-y-1 transition-transform duration-300"
              >
                <div>
                  {/* Top-Right Action Cluster & 1-line Header (Rule 2 & 3) */}
                  <div className="flex items-center justify-between gap-2 min-w-0 mb-4">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 flex items-center justify-center shrink-0 transition-colors">
                        <IconComponent className="w-[18px] h-[18px] stroke-[2]" />
                      </div>
                      <Text.H2 title={step.title} singleLine className="text-[15px] group-hover:text-blue-600 transition-colors flex-1 min-w-0">
                        {step.title}
                      </Text.H2>
                    </div>
                    <span className="text-[11px] font-extrabold text-blue-700 bg-blue-600/10 px-2.5 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      {step.number}
                    </span>
                  </div>

                  <Text.Body className="text-[13.5px] text-slate-700 leading-relaxed">
                    {step.description}
                  </Text.Body>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Text.Label className="text-slate-600">
                    FASE 0{idx + 1} / 0{steps.length}
                  </Text.Label>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-600/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>SOP SNI</span>
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

export default WorkflowSection;
