import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
  Building,
  Building2, 
  HardHat, 
  Warehouse, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Waves,
  Route,
  ArrowLeft, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Navbar } from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';
import Text from '../../Components/Typography';
import { DEFAULT_PROJECT_PLACEHOLDER, resolveImageUrl } from '../../utils/imageUtils';

const iconMap = {
  Building,
  Building2,
  HardHat,
  Warehouse,
  Briefcase,
  Wrench,
  Hammer,
  Waves,
  Route,
};

export default function ServiceDetail({ 
  service = {}, 
  relatedServices = [], 
  relevantProjects = [], 
  company = {} 
}) {
  const IconComponent = iconMap[service.icon] || Building2;

  const cleanPhone = (company?.phone || '+62 812-3456-7890')
    .replace(/\D/g, '')
    .replace(/^0/, '62');

  const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20CV.%20Wahana%20Sinergi%20Mitra,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title || '')}.%20Bisa%20jadwalkan%20survei%20dan%20konsultasi%20RAB?`;

  const fallbackImage = DEFAULT_PROJECT_PLACEHOLDER;
  const serviceDescription = service.full_description || service.short_description;

  const defaultStandards = [
    { title: 'Kepatuhan Spesifikasi Teknis SNI', desc: 'Penggunaan material bersertifikat uji laboratorium (SNI 1729 & SNI 2847) untuk kekuatan struktural maksimal.' },
    { title: 'SOP K3 Zero-Accident (ISO 45001)', desc: 'Penerapan izin kerja risiko tinggi (PTW), pemakaian APD terstandarisasi, dan toolbox meeting harian.' },
    { title: 'Pengawasan Ahli Bersertifikat', desc: 'Setiap tahapan lapangan diawasi langsung oleh Site Engineer dan Quality Control bersertifikat SKA/SKT.' },
    { title: 'Transparansi Kurva-S & Laporan Digital', desc: 'Pemantauan progres volume pekerjaan mingguan secara terbuka melalui sistem PROKSI WSM.' },
  ];

  return (
    <>
      <Head>
        <title>{`${service.title || 'Divisi Layanan'} — CV. Wahana Sinergi Mitra`}</title>
        <meta
          name="description"
          content={serviceDescription || `Spesifikasi teknis dan ruang lingkup pekerjaan ${service.title} oleh CV. Wahana Sinergi Mitra.`}
        />
      </Head>

      <div className="min-h-screen bg-[#F8FAFC] flex flex-col antialiased">
        {/* Main Navbar */}
        <Navbar company={company} />

        {/* Content Area */}
        <main className="flex-1 pt-24 sm:pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-5">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 flex-wrap">
              <Link href="/#beranda" className="hover:text-blue-600 transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/#layanan" className="hover:text-blue-600 transition-colors">
                Divisi Layanan
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-bold truncate max-w-xs sm:max-w-md">
                {service.title}
              </span>
            </nav>

            {/* Back Button */}
            <div className="mb-6">
              <Link
                href="/#layanan"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200/80 shadow-xs transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-slate-600" />
                <span>Kembali ke Seluruh Layanan</span>
              </Link>
            </div>

            {/* Main Detail Container */}
            <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 mb-12">
              
              {/* Service Hero Banner */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-900 overflow-hidden">
                <img
                  key={service.image_url || service.id}
                  src={resolveImageUrl(service.image_url, fallbackImage)}
                  alt={service.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[-0.015em] text-sky-300 block">
                        Divisi Rekayasa Konstruksi Terpadu WSM
                      </span>
                      <h1 className="text-[15px] sm:text-[18px] md:text-[21px] font-bold tracking-[-0.025em] leading-snug">
                        {service.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Body */}
              <div className="p-6 sm:p-10 space-y-8">
                
                {/* Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-[-0.025em]">
                      Ruang Lingkup &amp; Standar Kapabilitas Divisi
                    </h2>
                  </div>

                  <p className="text-sm sm:text-[15px] font-medium text-slate-700 leading-relaxed tracking-[-0.015em]">
                    {serviceDescription || 'Divisi layanan ini berfokus pada eksekusi teknis berkualitas tinggi, terintegrasi dengan perencanaan struktur DED presisi, material bersertifikasi mutu SNI, dan kepatuhan penuh terhadap tata kelola keselamatan kerja.'}
                  </p>
                </div>

                {/* 4 Pillars Standards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {defaultStandards.map((std, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                          {std.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {std.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct CTA Box */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sky-300 text-xs font-bold">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Butuh Konsultasi Teknis &amp; Survei Lapangan?</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold">
                      Diskusikan Kebutuhan {service.title} Bersama Kami
                    </h4>
                    <p className="text-xs text-slate-300 max-w-xl">
                      Dapatkan kalkulasi estimasi anggaran RAB terperinci, jadwal kurva-S, dan rekomendasi material yang efisien dan kokoh.
                    </p>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/30 transition-all inline-flex items-center gap-2.5 shrink-0 self-start sm:self-auto cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hubungi Tim Engineering</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Relevant Projects of this Service */}
            {relevantProjects.length > 0 && (
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-[-0.025em]">
                      Portofolio Proyek Terkait Divisi Ini
                    </h3>
                    <p className="text-xs text-slate-500">
                      Rekam jejak proyek yang telah diselesaikan oleh divisi {service.title}
                    </p>
                  </div>

                  <Link
                    href="/#portofolio"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Buka Semua Proyek</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relevantProjects.map((proj) => (
                    <Link
                      key={proj.id}
                      href={`/proyek/${proj.id}`}
                      className="group bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between border border-slate-100"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                        <img
                          key={proj.thumbnail_url || proj.id}
                          src={resolveImageUrl(proj.thumbnail_url, fallbackImage)}
                          alt={proj.title}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = fallbackImage;
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-800 uppercase tracking-[-0.015em]">
                          {proj.category}
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{proj.location || 'Indonesia'}</span>
                            <span>•</span>
                            <span>{proj.year}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {proj.title}
                          </h4>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-500 uppercase">Nilai Kontrak</span>
                          <Text.Amount value={proj.project_value || 0} className="text-xs font-bold" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Services Navigation Grid */}
            {relatedServices.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 tracking-[-0.025em]">
                  Divisi Layanan Konstruksi Lainnya
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedServices.map((relSrv) => {
                    const RelIcon = iconMap[relSrv.icon] || Building2;
                    return (
                      <Link
                        key={relSrv.id}
                        href={`/layanan/${relSrv.id}`}
                        className="p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-200 transition-all flex items-center gap-3.5 group shadow-xs"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 flex items-center justify-center shrink-0 transition-colors">
                          <RelIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                            {relSrv.title}
                          </h4>
                          <span className="text-[11px] text-slate-500">Lihat Spesifikasi ➔</span>
                        </div>
                      </Link>
                    );
                  })}
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
