import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  HardHat, 
  CheckCircle2, 
  Target, 
  ThumbsUp, 
  BadgeCheck, 
  Clock, 
  Building2, 
  ArrowUpRight,
  FileCheck2
} from 'lucide-react';
import Text from './Typography';

const iconMap = {
  Target,
  Award,
  ThumbsUp,
  FileCheck2,
  HardHat,
  ShieldCheck,
  Building2,
};

const defaultPillars = [
  {
    code: '01',
    title: 'Fokus Kepuasan Klien',
    subtitle: 'Customer Focus & Dedicated PM',
    description: 'Didampingi Project Manager khusus sejak tahap pra-desain hingga masa pemeliharaan selesai.',
    icon: Target,
  },
  {
    code: '02',
    title: 'Prioritas Mutu SNI',
    subtitle: 'Lab-Tested Material Quality',
    description: 'Seluruh baja WF, besi beton ulir, dan ready-mix K-350 dilengkapi sertifikat uji laboratorium.',
    icon: Award,
  },
  {
    code: '03',
    title: 'Layanan Teknis Prima',
    subtitle: 'Full Engineering & MEP Support',
    description: 'Integrasi pekerjaan sipil, arsitektur, struktur baja, dan instalasi MEP dalam satu komando.',
    icon: ThumbsUp,
  },
  {
    code: '04',
    title: 'RAB Transparan & Kompetitif',
    subtitle: 'Auditable Engineering Estimate',
    description: 'Rincian volume dan harga satuan material terbuka tanpa biaya tersembunyi di tengah proyek.',
    icon: FileCheck2,
  },
  {
    code: '05',
    title: 'Pengalaman & K3 Teruji',
    subtitle: 'Zero-Accident HSE Culture',
    description: 'Rekam jejak lebih dari 12 tahun menangani proyek industri, pergudangan, dan gedung komersial.',
    icon: HardHat,
  },
];

const defaultCertifications = [
  {
    code: 'ISO 9001:2015',
    title: 'Sistem Manajemen Mutu Konstruksi',
    issuer: 'Quality Management System Certified',
    desc: 'Standarisasi pengendalian mutu pengecoran, fabrikasi baja, dan ketepatan gambar kerja DED.',
    badgeText: 'Verified QMS',
  },
  {
    code: 'ISO 45001:2018 & SMK3',
    title: 'Keselamatan & Kesehatan Kerja (K3)',
    issuer: 'Occupational Health & Safety System',
    desc: 'Penerapan wajib APD lengkap, izin kerja risiko tinggi (PTW), dan toolbox meeting harian.',
    badgeText: 'Zero Accident',
  },
  {
    code: 'SBUJK & GAPENSI',
    title: 'Sertifikat Badan Usaha Jasa Konstruksi',
    issuer: 'Anggota Resmi GAPENSI & Terdaftar LPSE',
    desc: 'Legalitas penuh untuk mengikuti tender korporasi swasta nasional, BUMN, dan instansi pemerintah.',
    badgeText: 'Active License',
  },
];

const defaultClientSectors = [
  { name: 'Kawasan Industri & Manufaktur', region: 'Cikarang • Karawang • Bekasi' },
  { name: 'Pergudangan & Cold-Storage Logistik', region: 'Jabodetabek • Subang • Banten' },
  { name: 'Gedung Perkantoran & Ruko Komersial', region: 'Jakarta • Bandung • Jawa Barat' },
  { name: 'Fasilitas Pendidikan & Rumah Sakit', region: 'Jawa Barat • Jawa Tengah • Nasional' },
  { name: 'Infrastruktur Jalan Beton & Drainase', region: 'Kawasan Niaga & Proyek Pemerintah' },
];

export function AboutCredibilitySection({ company = {}, stats = {}, data = {} }) {
  const aboutText =
    company?.about ||
    'CV. Wahana Sinergi Mitra adalah perusahaan penyedia jasa pelaksana konstruksi (General Contractor & Civil Engineering) yang berfokus pada pembangunan gedung komersial, gudang struktur baja WF, pabrik industri, serta infrastruktur jalan dan jembatan berstandar mutu tinggi.';

  const badge = data?.badge || '• TENTANG CV. WAHANA SINERGI MITRA';
  const title = data?.title || 'Kontraktor Umum & Rekayasa Sipil {Berpengalaman & Terpercaya}';
  const subtitle =
    data?.subtitle ||
    'Dengan dukungan tim insinyur sipil bersertifikat SKA/SKT, peralatan konstruksi modern, serta sistem pemantauan digital PROKSI, kami memastikan setiap tahapan proyek berjalan sesuai spesifikasi teknis SNI, tepat anggaran, dan tepat jadwal.';
  const experienceYears = data?.experience_years || `${stats?.years_experience || 12}+ Tahun`;
  const photoMainUrl =
    data?.photo_main_url ||
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80';
  const photoSecondaryUrl =
    data?.photo_secondary_url ||
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80';

  const pillars =
    Array.isArray(data?.pillars) && data.pillars.length > 0 ? data.pillars : defaultPillars;
  const certificationsList =
    Array.isArray(data?.certifications) && data.certifications.length > 0
      ? data.certifications
      : defaultCertifications;
  const clientSectorsList =
    Array.isArray(data?.client_sectors) && data.client_sectors.length > 0
      ? data.client_sectors
      : defaultClientSectors;

  return (
    <section id="tentang" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 space-y-16">
        
        {/* PART 1: ASYMMETRIC 2-COLUMN "TENTANG KAMI" & DRONE/FIELD VISUAL (Jaya Arnikon Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Corporate Narrative & Key Credentials */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <Text.Label className="text-blue-700" singleLine={false}>
                {badge}
              </Text.Label>
            </div>

            <Text.AccentTitle
              text={title}
              asBlock
              className="text-[28px] sm:text-[38px]"
            />

            <Text.Body className="text-[15px] text-slate-700 leading-relaxed">
              {aboutText}
            </Text.Body>

            <Text.Body className="text-[14px] text-slate-700 leading-relaxed">
              {subtitle}
            </Text.Body>

            {/* 3 Quick Highlight Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-[24px] bg-[#F8FAFC] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="flex items-center justify-between gap-2 min-w-0 mb-1">
                  <Text.Label title="Pengalaman Kerja" singleLine className="text-slate-600">
                    DEDIKASI
                  </Text.Label>
                  <CheckCircle2 className="w-[18px] h-[18px] stroke-[2] text-emerald-600 shrink-0" />
                </div>
                <div className="text-[20px] font-extrabold text-slate-900 tracking-[-0.03em] tabular-nums">
                  {experienceYears}
                </div>
                <Text.Caption className="text-slate-600 block mt-0.5">
                  Konstruksi Nasional
                </Text.Caption>
              </div>

              <div className="rounded-[24px] bg-[#F8FAFC] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="flex items-center justify-between gap-2 min-w-0 mb-1">
                  <Text.Label title="Tenaga Ahli Teknik" singleLine className="text-slate-600">
                    TIM ENGINEER
                  </Text.Label>
                  <HardHat className="w-[18px] h-[18px] stroke-[2] text-blue-600 shrink-0" />
                </div>
                <div className="text-[20px] font-extrabold text-slate-900 tracking-[-0.03em] tabular-nums">
                  SKA & SKT
                </div>
                <Text.Caption className="text-slate-600 block mt-0.5">
                  Ahli Struktur & MEP
                </Text.Caption>
              </div>

              <div className="rounded-[24px] bg-[#F8FAFC] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="flex items-center justify-between gap-2 min-w-0 mb-1">
                  <Text.Label title="Garansi Pemeliharaan" singleLine className="text-slate-600">
                    GARANSI
                  </Text.Label>
                  <ShieldCheck className="w-[18px] h-[18px] stroke-[2] text-emerald-600 shrink-0" />
                </div>
                <div className="text-[20px] font-extrabold text-emerald-600 tracking-[-0.03em] tabular-nums">
                  100% Retensi
                </div>
                <Text.Caption className="text-slate-600 block mt-0.5">
                  Jaminan Mutu BAST
                </Text.Caption>
              </div>
            </div>
          </div>

          {/* Right Column: Drone Construction Site & K3 HSE Field Photography Lockup */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-stretch">
              {/* Primary Tall Aerial Site Image */}
              <div className="col-span-7 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative min-h-[340px] group">
                <img
                  src={photoMainUrl}
                  alt="Aerial Proyek Konstruksi CV. Wahana Sinergi Mitra"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold tracking-[-0.015em] shadow-sm">
                    Live Site Execution
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-[-0.015em] text-emerald-300 block">
                    DOKUMENTASI STRUKTUR & CRANE
                  </span>
                  <div className="text-[15px] font-bold tracking-[-0.025em] leading-snug mt-0.5">
                    Pembangunan Struktur Baja & Beton Bertulang Presisi Tinggi
                  </div>
                </div>
              </div>

              {/* Right Stacked Column: HSE Team Photo + Dark Navy Trust Card */}
              <div className="col-span-5 flex flex-col justify-between gap-4">
                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative h-48 group">
                  <img
                    src={photoSecondaryUrl}
                    alt="Tim Engineer & HSE K3 WSM"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[-0.015em] text-amber-300 block">
                      INSPEKSI K3 / HSE
                    </span>
                    <span className="text-[12px] font-bold tracking-[-0.015em] block truncate">
                      Pengawasan Mutu Harian
                    </span>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#0B2447] text-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-2 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-[-0.015em] text-sky-300 truncate">
                      STANDAR MUTU
                    </span>
                    <BadgeCheck className="w-[18px] h-[18px] text-emerald-400 shrink-0" />
                  </div>
                  <div className="my-2">
                    <div className="text-[22px] font-extrabold text-white tracking-[-0.03em] leading-tight">
                      SNI & ISO
                    </div>
                    <p className="text-[12px] text-slate-200 font-medium leading-snug mt-1 tracking-[-0.015em]">
                      Kepatuhan penuh terhadap standar beton SNI 2847 & baja SNI 1729.
                    </p>
                  </div>
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-emerald-300 hover:text-emerald-200 tracking-[-0.015em]"
                  >
                    <span>Jadwalkan Survei</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* PART 2: "WHY YOU SHOULD CHOOSE US" 5-COLUMN ARCHITECTURAL STONE CARDS (PT MKP Style) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <Text.Label className="text-slate-700">WHY YOU SHOULD CHOOSE US</Text.Label>
              </div>
              <Text.H1 className="text-[24px] sm:text-[30px]">
                5 Pilar Keunggulan Eksekusi Konstruksi WSM
              </Text.H1>
            </div>
            <Text.Caption className="text-slate-600">
              Komitmen tata kelola proyek untuk pemilik bisnis, industri, & instansi
            </Text.Caption>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComponent = typeof pillar.icon === 'string'
                ? (iconMap[pillar.icon] || Target)
                : (pillar.icon || Target);
              return (
                <div
                  key={pillar.code || idx}
                  className="rounded-[24px] bg-[#F8F6F2] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon + Top-Right Number Badge (Rule 3) */}
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-[18px] h-[18px] stroke-[2]" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-bold text-slate-600 tracking-[-0.015em] shrink-0">
                        {pillar.code}
                      </span>
                    </div>

                    {/* 1-Line Card Title (Rule 2) */}
                    <div className="min-w-0 mb-1">
                      <Text.H2 title={pillar.title} singleLine className="text-[15px] text-slate-900">
                        {pillar.title}
                      </Text.H2>
                    </div>

                    <Text.Label title={pillar.subtitle} singleLine className="text-blue-700 block mb-2">
                      {pillar.subtitle}
                    </Text.Label>

                    <Text.Body className="text-[13px] text-slate-700 leading-relaxed">
                      {pillar.description}
                    </Text.Body>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <Text.Caption className="text-slate-600 font-semibold">
                      Standar WSM
                    </Text.Caption>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 3: CERTIFICATION & SECTOR TRUST BAND (PT MKP Marble Certification Band Inspired) */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#F4F5F7] via-white to-[#EEF2F6] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Certification Heading */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <Text.Label className="text-emerald-700">SERTIFIKASI & LEGALITAS RESMI</Text.Label>
              </div>
              <Text.H1 className="text-[22px] sm:text-[26px] leading-snug">
                Komitmen Mutu, K3 & Kualifikasi Badan Usaha
              </Text.H1>
              <Text.Body className="text-[13.5px] text-slate-700">
                Kami menjamin keamanan investasi konstruksi Anda melalui kepatuhan terhadap standar manajemen mutu internasional dan sertifikasi jasa konstruksi nasional.
              </Text.Body>
            </div>

            {/* Right 3 Certification Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {certificationsList.map((cert, idx) => (
                <div
                  key={cert.code || idx}
                  className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Code + Top-Right Verified Badge */}
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-2.5">
                      <Text.Label title={cert.code} singleLine className="text-blue-700 flex-1 min-w-0">
                        {cert.code}
                      </Text.Label>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600/10 text-emerald-600 text-[10px] font-bold shrink-0 whitespace-nowrap">
                        {cert.badgeText}
                      </span>
                    </div>

                    <div className="min-w-0 mb-1">
                      <Text.H2 title={cert.title} singleLine className="text-[15px]">
                        {cert.title}
                      </Text.H2>
                    </div>

                    <Text.Caption className="text-slate-600 block mb-2">
                      {cert.issuer}
                    </Text.Caption>

                    <Text.Body className="text-[12.5px] text-slate-700 leading-relaxed">
                      {cert.desc}
                    </Text.Body>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Sectors Strip */}
          <div className="pt-6 border-t border-slate-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <Text.Label className="text-slate-600">
                SEKTOR INDUSTRI & PEMBERI TUGAS YANG KAMI LAYANI
              </Text.Label>
              <Text.Caption className="text-slate-600">
                Cakupan Operasional: Jabodetabek, Jawa Barat, Banten & Seluruh Indonesia
              </Text.Caption>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {clientSectorsList.map((sector, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 min-w-0"
                >
                  <Building2 className="w-[18px] h-[18px] stroke-[2] text-blue-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div
                      title={sector.name}
                      className="text-[12.5px] font-bold text-slate-800 tracking-[-0.015em] whitespace-nowrap truncate"
                    >
                      {sector.name}
                    </div>
                    <Text.Caption className="text-slate-600 block truncate">
                      {sector.region}
                    </Text.Caption>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutCredibilitySection;
