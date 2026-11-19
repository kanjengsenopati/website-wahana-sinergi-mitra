import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft, 
  Phone, 
  Award, 
  ShieldCheck, 
  Share2, 
  ExternalLink,
  ChevronRight,
  HardHat,
  Sparkles
} from 'lucide-react';
import { Navbar } from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';
import Text from '../../Components/Typography';

export default function ProjectDetail({ 
  project = {}, 
  relatedProjects = [], 
  company = {},
  portfolioMeta = {} 
}) {
  const showValue = portfolioMeta?.show_project_value !== false;
  const cleanPhone = (company?.phone || '+62 812-3456-7890')
    .replace(/\D/g, '')
    .replace(/^0/, '62');

  const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20CV.%20Wahana%20Sinergi%20Mitra,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(project.title || '')}.%20Bisa%20konsultasi%20mengenai%20spesifikasi%20dan%20anggarannya?`;

  const fallbackImage = '/images/project-placeholder.jpg';
  const isBrokenDefault = !project.thumbnail_url || project.thumbnail_url.includes('1541888946425');
  const validImageUrl = isBrokenDefault ? fallbackImage : project.thumbnail_url;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: `Portofolio Konstruksi: ${project.title} - CV. Wahana Sinergi Mitra`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan proyek berhasil disalin ke clipboard!');
    }
  };

  return (
    <>
      <Head>
        <title>{`${project.title || 'Portofolio Proyek'} — CV. Wahana Sinergi Mitra`}</title>
        <meta
          name="description"
          content={project.description || `Dokumentasi dan spesifikasi teknis ${project.title} yang dikerjakan oleh CV. Wahana Sinergi Mitra berstandar SNI dan K3 Zero-Accident.`}
        />
      </Head>

      <div className="min-h-screen bg-[#F8FAFC] flex flex-col antialiased">
        {/* Main Navbar */}
        <Navbar company={company} />

        {/* Content Area with Top Padding for Fixed Navbar */}
        <main className="flex-1 pt-24 sm:pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-5">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 flex-wrap">
              <Link href="/#beranda" className="hover:text-blue-600 transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/#portofolio" className="hover:text-blue-600 transition-colors">
                Portofolio Proyek
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-bold truncate max-w-xs sm:max-w-md">
                {project.title}
              </span>
            </nav>

            {/* Back Button & Action Cluster */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <Link
                href="/#portofolio"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200/80 shadow-xs transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-slate-600" />
                <span>Kembali ke Portofolio</span>
              </Link>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200/80 shadow-xs transition-colors cursor-pointer"
                title="Bagikan Tautan Proyek"
              >
                <Share2 className="w-4 h-4 text-slate-600" />
                <span className="hidden sm:inline">Bagikan</span>
              </button>
            </div>

            {/* Main Detail Container (PakRT Rule: rounded-[24px], shadow-[0_8px_30px_rgb(0,0,0,0.04)]) */}
            <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 mb-12">
              
              {/* Hero Image Banner with Gradient & Overlay Badges */}
              <div className="relative h-72 sm:h-96 md:h-[420px] w-full bg-slate-900 overflow-hidden">
                <img
                  src={validImageUrl}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                {/* Badges on Hero Image */}
                <div className="absolute top-4 sm:top-6 left-5 right-5 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-sm uppercase tracking-[-0.015em]">
                    {project.category || 'Konstruksi Sipil'}
                  </span>
                  
                  <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm backdrop-blur-md ${
                    project.status === 'Selesai' 
                      ? 'bg-emerald-600/90 text-white' 
                      : 'bg-amber-500/90 text-white'
                  }`}>
                    Status: {project.status || 'Selesai'}
                  </span>
                </div>

                {/* Bottom Overlay Title & Location (Scaled 70/100) */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Diverifikasi Tim Pengawas Rekayasa Sipil WSM</span>
                  </div>
                  <h1 className="text-[15px] sm:text-[18px] md:text-[21px] font-bold tracking-[-0.025em] leading-snug drop-shadow-md">
                    {project.title}
                  </h1>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-10 space-y-8">
                
                {/* 4-Column Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Metric 1: Klien Pemberi Tugas */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[-0.015em] text-slate-500 block mb-0.5">
                        Pemberi Tugas (Klien)
                      </span>
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900 truncate" title={project.client_name || 'Klien Korporasi'}>
                        {project.client_name || 'Klien Korporasi WSM'}
                      </p>
                    </div>
                  </div>

                  {/* Metric 2: Lokasi Pekerjaan */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[-0.015em] text-slate-500 block mb-0.5">
                        Lokasi Pekerjaan
                      </span>
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900 truncate" title={project.location || 'Indonesia'}>
                        {project.location || 'Wilayah Indonesia'}
                      </p>
                    </div>
                  </div>

                  {/* Metric 3: Tahun Pengerjaan */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[-0.015em] text-slate-500 block mb-0.5">
                        Tahun Pelaksanaan
                      </span>
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                        Tahun {project.year || 2025}
                      </p>
                    </div>
                  </div>

                  {/* Metric 4: Nilai Kontrak / Kualifikasi Mutu */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[-0.015em] text-emerald-700 block mb-0.5">
                        {showValue ? 'Nilai Kontrak Terverifikasi' : 'Standar Kualifikasi & Mutu'}
                      </span>
                      {showValue ? (
                        <Text.Amount value={project.project_value || 0} className="text-[16px] sm:text-[18px]" />
                      ) : (
                        <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                          SNI &amp; ISO 45001 Terverifikasi
                        </p>
                      )}
                    </div>
                  </div>

                </div>

                {/* Section: Description & Scope of Work */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-[-0.025em]">
                      Ringkasan Proyek &amp; Ruang Lingkup Rekayasa
                    </h2>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 text-slate-700 text-sm leading-relaxed tracking-[-0.015em] space-y-3 font-medium">
                    <p>
                      {project.description || 'Pekerjaan konstruksi ini dilaksanakan dengan kepatuhan penuh terhadap spesifikasi teknis SNI, standar mutu ISO 9001:2015, dan pengawasan keselamatan kerja K3 Zero-Accident.'}
                    </p>
                    <p className="text-xs text-slate-500">
                      Seluruh tahapan mulai dari survei awal, pengujian tanah (soil investigation), pembuatan gambar Detail Engineering Design (DED), kurva-S progres mingguan, hingga Berita Acara Serah Terima (BAST 1 &amp; 2) didokumentasikan dan dipantau melalui ekosistem digital WSM.
                    </p>
                  </div>
                </div>

                {/* Corporate Guarantee Badges */}
                <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold tracking-[-0.015em]">
                        Jaminan Pemeliharaan Struktural &amp; Retensi
                      </h3>
                      <p className="text-[11px] text-slate-300">
                        Dilindungi masa retensi garansi resmi dan pendampingan Project Manager WSM.
                      </p>
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all inline-flex items-center gap-2 shrink-0 self-start sm:self-auto cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Konsultasi Spek Proyek Ini</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Related Projects Section */}
            {relatedProjects.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-[-0.025em]">
                      Proyek Terkait Lainnya
                    </h3>
                    <p className="text-xs text-slate-500">
                      Eksplorasi referensi portofolio konstruksi serupa dari CV. Wahana Sinergi Mitra
                    </p>
                  </div>

                  <Link
                    href="/#portofolio"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Lihat Semua</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/proyek/${rel.id}`}
                      className="group bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between border border-slate-100"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                        <img
                          src={
                            rel.thumbnail_url && !rel.thumbnail_url.includes('1541888946425')
                              ? rel.thumbnail_url
                              : fallbackImage
                          }
                          alt={rel.title}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = fallbackImage;
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-800 uppercase tracking-[-0.015em]">
                          {rel.category}
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{rel.location || 'Indonesia'}</span>
                            <span>•</span>
                            <span>{rel.year}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {rel.title}
                          </h4>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-500 uppercase">
                            {showValue ? 'Nilai Kontrak' : 'Status'}
                          </span>
                          {showValue ? (
                            <Text.Amount value={rel.project_value || 0} className="text-xs font-bold" />
                          ) : (
                            <span className="text-[11px] font-bold text-emerald-600">Terverifikasi</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>

        {/* Corporate Footer */}
        <Footer company={company} />
      </div>
    </>
  );
}
