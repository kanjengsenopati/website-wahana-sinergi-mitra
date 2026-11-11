import React from 'react';
import { ClipboardCheck, FileSpreadsheet, ShieldAlert, KeyRound, ArrowRight } from 'lucide-react';
import Text from './Typography';

export function WorkflowSection() {
  const steps = [
    {
      number: '01',
      title: 'Survei & Analisis Struktur',
      icon: ClipboardCheck,
      description: 'Pengukuran topografi, pengujian daya dukung tanah (soil test), dan diskusi kebutuhan spesifikasi teknis.',
    },
    {
      number: '02',
      title: 'DED & Transparansi RAB',
      icon: FileSpreadsheet,
      description: 'Pembuatan gambar kerja DED (Detail Engineering Design), jadwal kurva-S, dan kontrak perjanjian kerja mengikat.',
    },
    {
      number: '03',
      title: 'Konstruksi Berstandar K3',
      icon: ShieldAlert,
      description: 'Eksekusi lapangan dengan material SNI teruji lab, pengawasan mandor ahli, dan kepatuhan keselamatan zero-accident.',
    },
    {
      number: '04',
      title: 'Handover & Masa Retensi',
      icon: KeyRound,
      description: 'Berita acara serah terima resmi (BAST 1 & 2), as-built drawing, serta jaminan garansi pemeliharaan struktural.',
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <Text.Label className="text-blue-700">Metodologi Kerja</Text.Label>
          </div>
          <Text.H1 className="text-[28px] sm:text-[38px] mb-3">
            Standar Eksekusi Proyek Yang Terukur & Akuntabel
          </Text.H1>
          <Text.Body>
            Kami menerapkan tata kelola konstruksi modern untuk memastikan zero-miscommunication, 
            menghindari biaya membengkak, dan mencapai target serah terima tepat waktu.
          </Text.Body>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform duration-300"
              >
                <div>
                  {/* Top-Right Action Cluster & 1-line Header */}
                  <div className="flex items-center justify-between gap-3 min-w-0 mb-4">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 flex items-center justify-center shrink-0 transition-colors shadow-sm">
                        <IconComponent className="w-4 h-4 stroke-[2]" />
                      </div>
                      <Text.H2 title={step.title} singleLine className="text-[15px] group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </Text.H2>
                    </div>
                    <span className="text-[12px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      {step.number}
                    </span>
                  </div>

                  <Text.Body className="text-[13px] text-slate-600 leading-relaxed">
                    {step.description}
                  </Text.Body>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[-0.015em]">
                    Fase {idx + 1} of 4
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
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
