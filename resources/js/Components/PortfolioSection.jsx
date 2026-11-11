import React, { useState, useMemo } from 'react';
import { MapPin, Calendar, ExternalLink, ArrowRight, X, Building, CheckCircle } from 'lucide-react';
import Text, { formatRupiah } from './Typography';

export function PortfolioSection({ projects = [], company = {}, meta = {} }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const badge = meta?.badge || 'Portofolio & Rekam Jejak';
  const title = meta?.title || 'Karya Konstruksi Terbukti {Kokoh & Bernilai Tinggi}';
  const subtitle = meta?.subtitle || '';

  // Dynamic Categories: Standard Base + Distinct Database Categories
  const categories = useMemo(() => {
    const base = ['Industri', 'Komersial', 'Residensial', 'Infrastruktur'];
    const fromProjects = projects.map((p) => p.category).filter(Boolean);
    return ['All', ...new Set([...base, ...fromProjects])];
  }, [projects]);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const cleanPhone = (company?.phone || '+62 812-3456-7890')
    .replace(/\D/g, '')
    .replace(/^0/, '62');

  return (
    <section id="portofolio" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <Text.Label className="text-emerald-700">{badge}</Text.Label>
              </div>
            )}
            <Text.AccentTitle text={title} className="text-[28px] sm:text-[38px]" />
            {subtitle && (
              <Text.Body className="mt-2 text-slate-600">
                {subtitle}
              </Text.Body>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold tracking-[-0.015em] transition-all ${
                  activeTab === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 px-6 rounded-3xl bg-slate-50 border border-dashed border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto text-slate-500 shadow-xs">
              <Building className="w-6 h-6 text-slate-400" />
            </div>
            <div className="max-w-md mx-auto">
              <h3 className="text-slate-800 text-[16px] font-bold">
                Belum ada proyek di kategori "{activeTab}"
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Pilih kategori lain atau klik tombol di bawah untuk melihat seluruh karya konstruksi kami.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('All')}
              className="mt-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 shadow-xs transition-colors cursor-pointer"
            >
              Tampilkan Semua Proyek ({projects.length})
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="group bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.thumbnail_url || 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80'}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  
                  {/* Top-Right Badges */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 shrink-0 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-sm uppercase tracking-[-0.015em]">
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
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-[12px] font-medium drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[240px]">{item.location}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-1.5">
                      <Text.Caption className="text-slate-600 block">
                        {item.client_name || 'Klien Korporasi WSM'} • {item.year}
                      </Text.Caption>
                    </div>
                    
                    <div className="flex items-start gap-2.5 min-w-0 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                        <Building className="w-3.5 h-3.5" />
                      </div>
                      <h3 
                        title={item.title} 
                        className="text-[15px] sm:text-[16px] font-semibold text-slate-800 tracking-[-0.025em] leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </h3>
                    </div>

                    <Text.Body className="text-[13px] text-slate-600 line-clamp-2">
                      {item.description}
                    </Text.Body>
                  </div>

                  {/* Bottom Financial / Metric Display */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between min-w-0">
                    <div className="min-w-0">
                      <Text.Label title="Nilai Kontrak Proyek" singleLine className="text-slate-600 block">
                        Nilai Pekerjaan
                      </Text.Label>
                      <Text.Amount value={item.project_value || 0} className="text-[16px] sm:text-[18px]" />
                    </div>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-500 transition-colors shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-[24px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-5">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={selectedProject.thumbnail_url}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                  {selectedProject.category}
                </span>
                <span className="text-[12px] font-semibold text-slate-500">
                  Tahun Pengerjaan {selectedProject.year}
                </span>
              </div>
              <Text.H1 className="text-[22px] sm:text-[26px] mb-2">
                {selectedProject.title}
              </Text.H1>
              <div className="flex items-center gap-4 text-[13px] text-slate-600 mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-blue-600" />
                  {selectedProject.client_name}
                </span>
              </div>
              <Text.Body className="text-[14px] text-slate-700 leading-relaxed mb-6">
                {selectedProject.description}
              </Text.Body>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <Text.Label className="block text-slate-600">Nilai Kontrak Terverifikasi</Text.Label>
                  <Text.Amount value={selectedProject.project_value || 0} className="text-[20px]" />
                </div>
                <a
                  href={`https://wa.me/${cleanPhone}?text=Halo%20CV.%20Wahana%20Sinergi%20Mitra,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(selectedProject.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px] transition-all"
                >
                  Tanyakan Spek Proyek Ini
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
