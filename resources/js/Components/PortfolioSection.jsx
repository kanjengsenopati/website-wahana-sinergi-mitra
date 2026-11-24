import React, { useState, useMemo } from 'react';
import { Link, router } from '@inertiajs/react';
import { 
  MapPin, 
  ExternalLink, 
  X, 
  Building, 
  LayoutGrid, 
  Table2, 
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import Text from './Typography';
import { DEFAULT_PROJECT_PLACEHOLDER, resolveImageUrl } from '../utils/imageUtils';

export function PortfolioSection({ projects = [], company = {}, meta = {} }) {
  const [activeTab, setActiveTab] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'ledger'
  const [selectedProject, setSelectedProject] = useState(null);

  const badge = meta?.badge || '• PORTOFOLIO & BUKU BESAR PENGALAMAN KERJA';
  const title = meta?.title || 'Karya Konstruksi Terbukti {Kokoh & Bernilai Tinggi}';
  const subtitle = meta?.subtitle || 'Jelajahi dokumentasi visual proyek kami atau beralih ke mode Tabel Data Pengalaman Pekerjaan untuk meninjau daftar kontrak secara terperinci.';

  // Dynamic Categories: Standard Base + Distinct Database Categories
  const categories = useMemo(() => {
    const base = ['Industri', 'Komersial', 'Residensial', 'Infrastruktur'];
    const fromProjects = projects.map((p) => p.category).filter(Boolean);
    return ['All', ...new Set([...base, ...fromProjects])];
  }, [projects]);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const showValue = meta?.show_project_value !== false;

  const totalFilteredValue = useMemo(() => {
    return filteredProjects.reduce((sum, item) => sum + (Number(item.project_value) || 0), 0);
  }, [filteredProjects]);

  const cleanPhone = (company?.phone || '+62 812-3456-7890')
    .replace(/\D/g, '')
    .replace(/^0/, '62');

  return (
    <section id="portofolio" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header & Dual-Mode Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/10 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <Text.Label className="text-emerald-700">{badge}</Text.Label>
              </div>
            )}
            <Text.AccentTitle text={title} className="text-[28px] sm:text-[38px]" />
            {subtitle && (
              <Text.Body className="mt-2 text-slate-700">
                {subtitle}
              </Text.Body>
            )}
          </div>

          {/* Dual-Mode Switcher (Galeri Visual vs Tabel Data Pengalaman Jaya Arnikon Style) */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] self-start lg:self-end shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-bold tracking-[-0.015em] transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Galeri Visual Proyek</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('ledger')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-bold tracking-[-0.015em] transition-all cursor-pointer ${
                viewMode === 'ledger'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Table2 className="w-4 h-4" />
              <span>Tabel Data Pengalaman</span>
            </button>
          </div>
        </div>

        {/* Category Filter Bar + Cumulative Contract Summary */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-[12.5px] font-bold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat === 'All' ? `Semua Kategori (${projects.length})` : cat}
              </button>
            ))}
          </div>

          <div className="bg-white px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-2.5">
            <Text.Label className="text-slate-600">
              {showValue
                ? `TOTAL NILAI KONTRAK (${filteredProjects.length} PAKET):`
                : `TOTAL PENGALAMAN KERJA:`}
            </Text.Label>
            {showValue ? (
              <Text.Amount value={totalFilteredValue} className="text-[15px] sm:text-[16px]" />
            ) : (
              <span className="text-[12.5px] font-bold text-slate-800 bg-slate-100 px-3 py-0.5 rounded-full">
                {filteredProjects.length} Paket Terverifikasi
              </span>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 px-6 rounded-[24px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-600">
              <Building className="w-6 h-6 text-slate-500" />
            </div>
            <div className="max-w-md mx-auto">
              <h3 className="text-slate-800 text-[16px] font-bold tracking-[-0.025em]">
                Belum ada proyek di kategori "{activeTab}"
              </h3>
              <Text.Body className="mt-1 text-slate-600">
                Pilih kategori lain atau klik tombol di bawah untuk melihat seluruh pengalaman konstruksi kami.
              </Text.Body>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('All')}
              className="mt-2 px-5 py-2.5 rounded-full bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Tampilkan Semua Proyek ({projects.length})
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* MODE 1: VISUAL PHOTO CARDS GRID (Rule 1: rounded-[24px], shadow-[0_8px_30px_rgb(0,0,0,0.04)], no solid border on white cards) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item, idx) => (
              <Link
                key={item.id || idx}
                href={`/proyek/${item.id}`}
                className="group bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    key={item.thumbnail_url || item.id}
                    src={resolveImageUrl(item.thumbnail_url)}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_PROJECT_PLACEHOLDER;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  
                  {/* Top-Right Badges */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 shrink-0 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-sm uppercase tracking-[-0.015em]">
                      {item.category}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shadow-sm ${
                      item.status === 'Selesai' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-amber-500 text-white'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Location Pill */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-white text-[12px] font-semibold drop-shadow-md">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-900/80 text-white text-[11px] font-bold shrink-0">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Card Body (Rule 2 & 3: Single-line title + top-right action/badge cluster) */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Top Row inside Card Body: Single-Line Title + Top-Right Icon */}
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-2">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center shrink-0 transition-colors">
                          <Building className="w-[18px] h-[18px] stroke-[2]" />
                        </div>
                        <Text.H2
                          title={item.title}
                          singleLine
                          className="text-[16px] group-hover:text-blue-600 transition-colors flex-1 min-w-0"
                        >
                          {item.title}
                        </Text.H2>
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                        #{idx + 1}
                      </span>
                    </div>

                    <Text.Caption className="text-slate-600 block mb-2 truncate">
                      Pemberi Tugas: <strong className="text-slate-800">{item.client_name || 'Klien Korporasi WSM'}</strong>
                    </Text.Caption>

                    <Text.Body className="text-[13.5px] text-slate-700 line-clamp-2">
                      {item.description}
                    </Text.Body>
                  </div>

                  {/* Bottom Financial / Metric Display */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between min-w-0">
                    <div className="min-w-0">
                      {showValue ? (
                        <>
                          <Text.Label title="Nilai Kontrak Proyek" singleLine className="text-slate-600 block">
                            NILAI KONTRAK PEKERJAAN
                          </Text.Label>
                          <Text.Amount value={item.project_value || 0} className="text-[17px] sm:text-[18px]" />
                        </>
                      ) : (
                        <>
                          <Text.Label title="Status Proyek" singleLine className="text-slate-600 block">
                            STATUS PEKERJAAN
                          </Text.Label>
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 inline-block mt-0.5">
                            Kontrak Terverifikasi
                          </span>
                        </>
                      )}
                    </div>
                    <span className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0">
                      <ExternalLink className="w-[18px] h-[18px] stroke-[2]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* MODE 2: TABEL DATA PENGALAMAN PEKERJAAN (Jaya Arnikon Official Tender Ledger Style) */
          <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            {/* Ledger Top Banner */}
            <div className="bg-[#0B2447] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                  <FileSpreadsheet className="w-[18px] h-[18px] stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-[-0.015em] text-sky-300 block">
                    DATA PENGALAMAN PEKERJAAN RESMI
                  </span>
                  <h3 className="text-[16px] font-bold text-white tracking-[-0.025em] truncate">
                    Daftar Kontrak Konstruksi CV. Wahana Sinergi Mitra
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold tracking-[-0.015em] shrink-0">
                Klik baris proyek untuk melihat detail & foto dokumentasi
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 text-[11px] font-bold uppercase tracking-[-0.015em]">
                    <th className="py-3.5 px-4 text-center w-12">No</th>
                    <th className="py-3.5 px-4 min-w-[320px]">Nama Paket Pekerjaan &amp; Keterangan Lokasi</th>
                    <th className="py-3.5 px-4 min-w-[180px]">Pemberi Tugas / Klien</th>
                    {showValue && (
                      <th className="py-3.5 px-4 text-right min-w-[150px]">Nilai Kontrak (Rp)</th>
                    )}
                    <th className="py-3.5 px-4 text-center w-20">Tahun</th>
                    <th className="py-3.5 px-4 text-center w-28">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[13px] font-medium text-slate-700">
                  {filteredProjects.map((item, idx) => (
                    <tr
                      key={item.id || idx}
                      onClick={() => router.visit(`/proyek/${item.id}`)}
                      className="hover:bg-blue-50/50 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-4 text-center font-bold text-slate-500 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1.5">
                          <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-[13.5px] leading-snug">
                            {item.title}
                          </div>
                          {/* Sub-baris: Bidang (Badge) + Lokasi / Alamat */}
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10.5px] font-bold uppercase tracking-[-0.015em] border border-blue-100">
                              {item.category}
                            </span>
                            {item.location && (
                              <span className="flex items-center gap-1 text-slate-500 text-[11.5px] font-medium">
                                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{item.location}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700">
                        <div className="font-semibold text-slate-800 text-[13px]">
                          {item.client_name || 'Klien Korporasi WSM'}
                        </div>
                      </td>
                      {showValue && (
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <Text.Amount value={item.project_value || 0} className="text-[14.5px]" />
                        </td>
                      )}
                      <td className="py-4 px-4 text-center font-bold text-slate-800 tabular-nums whitespace-nowrap">
                        {item.year}
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            item.status === 'Selesai'
                              ? 'bg-emerald-600/10 text-emerald-600'
                              : 'bg-amber-500/15 text-amber-700'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{item.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-50 border-t border-slate-200">
                    <td colSpan={3} className="py-3.5 px-4 text-right font-bold text-slate-800 text-[12px] uppercase tracking-[-0.015em]">
                      {showValue
                        ? `Total Nilai Kontrak Terfilter (${filteredProjects.length} Paket Pekerjaan):`
                        : `Total Pengalaman Terfilter (${filteredProjects.length} Paket Pekerjaan):`}
                    </td>
                    {showValue && (
                      <td className="py-3.5 px-4 text-right">
                        <Text.Amount value={totalFilteredValue} className="text-[16px]" />
                      </td>
                    )}
                    <td colSpan={2} />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-[24px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative space-y-5">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 relative">
              <img
                key={selectedProject.thumbnail_url || selectedProject.id}
                src={resolveImageUrl(selectedProject.thumbnail_url)}
                alt={selectedProject.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = DEFAULT_PROJECT_PLACEHOLDER;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 text-[11px] font-bold">
                  {selectedProject.category}
                </span>
                <span className="text-[12px] font-semibold text-slate-600">
                  Tahun Pengerjaan {selectedProject.year}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-[-0.025em] leading-snug mb-2">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-[13px] text-slate-700 mb-4 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-blue-600" />
                  {selectedProject.client_name || 'Klien Korporasi WSM'}
                </span>
              </div>
              <Text.Body className="text-[14px] text-slate-700 leading-relaxed mb-6">
                {selectedProject.description}
              </Text.Body>

              <div className="p-4 rounded-2xl bg-slate-50 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <Text.Label className="block text-slate-600">
                    {showValue ? 'NILAI KONTRAK TERVERIFIKASI' : 'STATUS PEKERJAAN'}
                  </Text.Label>
                  {showValue ? (
                    <Text.Amount value={selectedProject.project_value || 0} className="text-[20px]" />
                  ) : (
                    <span className="text-[13px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 inline-block mt-0.5">
                      Kualifikasi Resmi Terverifikasi
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/proyek/${selectedProject.id}`}
                    className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[12px] inline-flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>Halaman Lengkap</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`https://wa.me/${cleanPhone}?text=Halo%20CV.%20Wahana%20Sinergi%20Mitra,%20saya%20tertarik%20dengan%20referensi%20proyek%20${encodeURIComponent(selectedProject.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px] transition-all"
                  >
                    Tanyakan Spek Ini
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
