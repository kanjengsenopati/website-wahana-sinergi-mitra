import React, { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  Smartphone, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Layers, 
  BarChart3, 
  HardHat, 
  Laptop, 
  Lock, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import Text from './Typography';

export function ProksiSection({ data = {} }) {
  const [activeTab, setActiveTab] = useState('scurve');

  const badge = data?.badge || 'Teknologi Ekosistem Digital WSM';
  const titlePrefix = data?.title_prefix || 'Ekosistem Aplikasi';
  const titleHighlight = data?.title_highlight || 'PROKSI';
  const titleSuffix = data?.title_suffix || '(Proyek Konstruksi)';
  const subtitle = data?.subtitle || 'Seluruh proyek konstruksi kami diawasi langsung secara real-time berbasis Automated Digitalization. Pemilik proyek (owner) memiliki hak akses mandiri untuk memantau kurva-S harian, jadwal Gantt Chart, kepatuhan K3, dan log foto progres lapangan tanpa manipulasi data.';

  const scurvePlan = data?.scurve_plan || '64.50%';
  const scurveActual = data?.scurve_actual || '68.20%';
  const scurveDeviation = data?.scurve_deviation || '+3.70%';
  const zeroAccidentDays = data?.zero_accident_days || 428;
  const apdCompliance = data?.apd_compliance || '99.8%';
  const ptwActive = data?.ptw_active || 14;

  return (
    <section id="proksi" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <Text.Label className="text-blue-700">
                {badge}
              </Text.Label>
            </div>
          )}

          <Text.H1 className="text-[30px] sm:text-[42px] leading-tight text-slate-900 tracking-[-0.03em]">
            {titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-emerald-600">{titleHighlight}</span> {titleSuffix}
          </Text.H1>

          {subtitle && (
            <Text.Body className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </Text.Body>
          )}
        </div>

        {/* 4 Tabs Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-50/90 p-2 rounded-2xl border border-slate-200/80 mb-8 max-w-5xl mx-auto shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab('scurve')}
            className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
              activeTab === 'scurve'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-700 hover:bg-white hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-[-0.015em]">
              <TrendingUp className={`w-4 h-4 shrink-0 ${activeTab === 'scurve' ? 'text-white' : 'text-blue-600'}`} />
              <span className="truncate">Kurva-S & Gantt Chart</span>
            </div>
            <p className={`text-[11px] mt-1 truncate ${activeTab === 'scurve' ? 'text-blue-100' : 'text-slate-500'}`}>
              Pelacakan Deviasi Progres
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('portal')}
            className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
              activeTab === 'portal'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-700 hover:bg-white hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-[-0.015em]">
              <Laptop className={`w-4 h-4 shrink-0 ${activeTab === 'portal' ? 'text-white' : 'text-emerald-600'}`} />
              <span className="truncate">Portal Klien 24/7</span>
            </div>
            <p className={`text-[11px] mt-1 truncate ${activeTab === 'portal' ? 'text-blue-100' : 'text-slate-500'}`}>
              Akses Mandiri Owner Proyek
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('k3')}
            className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
              activeTab === 'k3'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-700 hover:bg-white hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-[-0.015em]">
              <HardHat className={`w-4 h-4 shrink-0 ${activeTab === 'k3' ? 'text-white' : 'text-amber-500'}`} />
              <span className="truncate">Manajemen K3 Digital</span>
            </div>
            <p className={`text-[11px] mt-1 truncate ${activeTab === 'k3' ? 'text-blue-100' : 'text-slate-500'}`}>
              Zero Accident & Permit Kerja
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('automation')}
            className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
              activeTab === 'automation'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-700 hover:bg-white hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-[-0.015em]">
              <FileText className={`w-4 h-4 shrink-0 ${activeTab === 'automation' ? 'text-white' : 'text-sky-500'}`} />
              <span className="truncate">Automated Reporting</span>
            </div>
            <p className={`text-[11px] mt-1 truncate ${activeTab === 'automation' ? 'text-blue-100' : 'text-slate-500'}`}>
              Laporan Harian & Audit PDF
            </p>
          </button>
        </div>

        {/* Dashboard Mockup Display Screen */}
        <div className="bg-slate-950 text-white rounded-[24px] p-5 sm:p-8 shadow-[0_16px_50px_rgba(15,23,42,0.18)] border border-slate-800 space-y-6 max-w-5xl mx-auto">
          
          {/* TAB 1: KURVA-S & GANTT CHART */}
          {activeTab === 'scurve' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-[-0.015em] block">
                      PROKSI Core Engine • Live Analytics
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-[-0.025em] truncate">
                      S-Curve & Gantt Milestone Progres Struktur
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono shrink-0">
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    Deviasi: {scurveDeviation} (Ahead of Schedule)
                  </span>
                </div>
              </div>

              {/* 4 Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[-0.015em]">Rencana (Plan)</span>
                  <div className="text-lg sm:text-xl font-bold text-slate-200 font-mono mt-0.5">{scurvePlan}</div>
                  <span className="text-[11px] text-slate-500">Target Minggu ke-18</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[-0.015em]">Realisasi (Actual)</span>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono mt-0.5">{scurveActual}</div>
                  <span className="text-[11px] text-emerald-500 font-semibold">{scurveDeviation} Deviasi Positif</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[-0.015em]">Sisa Hari Kontrak</span>
                  <div className="text-lg sm:text-xl font-bold text-sky-400 font-mono mt-0.5">72 Hari</div>
                  <span className="text-[11px] text-slate-500">Target Serah Terima</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[-0.015em]">Jalur Kritis</span>
                  <div className="text-lg sm:text-xl font-bold text-amber-400 font-mono mt-0.5">0 Jalur Kritis</div>
                  <span className="text-[11px] text-emerald-400">Seluruh Fase Terkendali</span>
                </div>
              </div>

              {/* Gantt Chart Breakdown */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-[-0.015em]">
                  <span>Tahapan Pekerjaan Aktif</span>
                  <span>Progres Realisasi</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-bold text-white w-52 truncate">1. Pondasi Bore Pile & Pile Cap</span>
                    <div className="flex-1 w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: '100%' }} />
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px] font-bold sm:w-20 sm:text-right">100% Selesai</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-bold text-white w-52 truncate">2. Erection Kolom & Balok Baja WF 400</span>
                    <div className="flex-1 w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div className="bg-sky-500 h-full rounded-full transition-all duration-500" style={{ width: '88%' }} />
                    </div>
                    <span className="text-sky-400 font-mono text-[11px] font-bold sm:w-20 sm:text-right">88% Aktif</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-bold text-white w-52 truncate">3. Bondek & Pengecoran Lantai 2 (K-350)</span>
                    <div className="flex-1 w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: '52%' }} />
                    </div>
                    <span className="text-amber-400 font-mono text-[11px] font-bold sm:w-20 sm:text-right">52% Berjalan</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PORTAL KLIEN 24/7 */}
          {activeTab === 'portal' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-[-0.015em] block">
                    PROKSI • Client Dedicated Access
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-[-0.025em] truncate">
                    Portal Akses Mandiri Pemilik Proyek (Owner Dashboard)
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5 shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Enkripsi SSL 256-Bit</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Live Progress Feed & Dokumentasi Drone</span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE FEED
                    </span>
                  </div>
                  <div className="h-44 rounded-lg bg-slate-800 overflow-hidden relative border border-slate-700">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=700&q=80" 
                      alt="Proyek Lapangan"
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-950/85 px-2.5 py-1 rounded text-[10px] text-white font-mono flex items-center gap-1.5 border border-slate-700">
                      <span>Camera 01: Zona Struktur Baja WF 400</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Setiap hari kerja pukul 17:00 WIB, tim site engineer mengunggah foto progres lapangan resolusi tinggi lengkap dengan geotagging koordinat GPS.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block mb-3">Dokumen Teknis & Persetujuan Digital</span>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 flex items-center justify-between border border-slate-700">
                        <span className="truncate text-slate-200">📄 BAST Tahap I - Struktur Bawah</span>
                        <span className="text-emerald-400 font-bold shrink-0">Disetujui ✓</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 flex items-center justify-between border border-slate-700">
                        <span className="truncate text-slate-200">📄 Sertifikat Uji Kuat Tekan Beton K-350</span>
                        <span className="text-sky-400 font-bold shrink-0">Terverifikasi ✓</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 flex items-center justify-between border border-slate-700">
                        <span className="truncate text-slate-200">📑 Log Curah Hujan & Laporan Cuaca</span>
                        <span className="text-slate-400 font-bold shrink-0">Tersinkron</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#inquiry"
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Ajukan Permohonan Akses Demo Klien</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MANAJEMEN K3 DIGITAL */}
          {activeTab === 'k3' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-[-0.015em] block">
                    PROKSI • HSE & Safety Module
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-[-0.025em] truncate">
                    Manajemen Keselamatan & Kesehatan Kerja (K3) Digital
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                  Audit Standar ISO 45001 & SMK3
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-[-0.015em] block">Status Zero Accident</span>
                  <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">{zeroAccidentDays} Hari</div>
                  <span className="text-[11px] text-slate-400">Zero Fatality & LTI Terverifikasi</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-[-0.015em] block">Kepatuhan APD Lapangan</span>
                  <div className="text-2xl font-bold text-sky-400 font-mono mt-1">{apdCompliance}</div>
                  <span className="text-[11px] text-slate-400">Inspeksi Harian Pekerja Aktif</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-[-0.015em] block">Izin Kerja Risiko Tinggi (PTW)</span>
                  <div className="text-2xl font-bold text-amber-400 font-mono mt-1">{ptwActive} Izin Aktif</div>
                  <span className="text-[11px] text-slate-400">Pengelasan & Bekerja Ketinggian</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2.5">
                <span className="font-bold text-white block">Log Inspeksi Digital Harian Petugas HSE WSM:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Toolbox Meeting (TBM) harian terverifikasi foto GPS sebelum shift mulai.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pemeriksaan tali baja sling crane dan sertifikat Surat Izin Alat (SIA).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pemasangan safety net & safety harness di pekerjaan elevasi &gt;2 meter.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pemeriksaan berkala ketersediaan APAR dan pos darurat P3K lapangan.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AUTOMATED REPORTING */}
          {activeTab === 'automation' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-[-0.015em] block">
                    PROKSI • Cloud Automation
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-[-0.025em] truncate">
                    Automated Digitalization & Pelaporan Otomatis
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                  Paperless & Tamper-Proof
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Menghilangkan sistem pelaporan manual berbasis kertas yang rawan manipulasi atau keterlambatan. PROKSI mengonsolidasi presensi mandor, volume material yang masuk melalui scan barcode surat jalan, jam kerja alat berat, dan kondisi cuaca menjadi laporan resmi siap cetak (PDF).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                    <span className="text-sky-400 font-bold block mb-1">📊 Auto Daily Report</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Laporan harian otomatis terbit setiap pukul 18:00 WIB dan dikirim langsung ke WhatsApp/Email owner.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                    <span className="text-emerald-400 font-bold block mb-1">📈 S-Curve Deviation Alert</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Peringatan instan apabila terdapat deviasi minus lebih dari 2% agar mitigasi percepatan segera dilakukan.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                    <span className="text-amber-400 font-bold block mb-1">🔒 Immutable Cloud Log</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Data lapangan tersimpan dengan timestamp digital yang tidak dapat diubah oleh pihak mana pun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 3 Pillars Footer in Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 border-t border-slate-100 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base shrink-0">
              01
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-[-0.015em]">Zero Manipulation</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Data lapangan langsung diinput tim site engineer dengan koordinat GPS dan timestamp resmi.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0">
              02
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-[-0.015em]">Early Delay Detection</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Sistem mendeteksi keterlambatan sejak dini pada jalur kritis sehingga proyek selesai tepat waktu.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-base shrink-0">
              03
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-[-0.015em]">Paperless & Transparan</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Owner tidak perlu menunggu rapat bulanan untuk mengetahui kondisi nyata di lokasi proyek.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProksiSection;
