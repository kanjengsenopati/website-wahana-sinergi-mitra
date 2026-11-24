import React from 'react';
import { usePage } from '@inertiajs/react';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  PhoneCall,
  Award,
  CheckCircle2,
  Wrench,
  Navigation,
} from 'lucide-react';
import Text from './Typography';
import { DEFAULT_SITE_LOGO, resolveSiteLogoUrl } from '../utils/imageUtils';
import { buildWhatsAppUrl, resolveWorkshopMap } from '../utils/mapUtils';

export function Footer({ company = {}, visibility = {} }) {
  const { site_logo: sharedSiteLogo } = usePage().props || {};
  const logoSrc = resolveSiteLogoUrl(company?.logo_url || sharedSiteLogo);
  const phoneDisplay = company?.phone || '+62 812-3456-7890';
  const phoneLabel = company?.phone_label || 'Hotline Utama / Kantor';
  const phone2Display = (company?.phone_2 || '').trim();
  const phone2Label = company?.phone_2_label || 'Kontak Workshop / Operasional';
  const emailDisplay = company?.email || 'info@wahanasinergimitra.id';
  const addressDisplay = company?.address || 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia';
  const workshopAddressDisplay = (company?.workshop_address || '').trim();
  const aboutDisplay = company?.about || 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya yang melayani pekerjaan gedung komersial, industri pergudangan, infrastruktur jalan/jembatan, dan rekayasa sipil berstandar mutu tinggi di seluruh wilayah Indonesia.';

  const waUrl = buildWhatsAppUrl(phoneDisplay);
  const waUrl2 = buildWhatsAppUrl(
    phone2Display,
    'Halo Tim Workshop CV. Wahana Sinergi Mitra, saya ingin berkonsultasi mengenai kunjungan workshop atau fabrikasi proyek.'
  );
  const fallbackWorkshopMap = resolveWorkshopMap({
    coordinates: company?.workshop_coordinates || '',
    mapUrl: company?.workshop_map_url || '',
    address: workshopAddressDisplay,
  });
  const workshopMapExternalUrl = company?.workshop_map_external_url || fallbackWorkshopMap.externalUrl;

  const quickLinks = [
    { key: 'hero', name: 'Beranda Utama', href: '/#beranda' },
    { key: 'about', name: 'Tentang Kami & Sertifikasi', href: '/#tentang' },
    { key: 'services', name: 'Divisi Layanan Konstruksi', href: '/#layanan' },
    { key: 'portfolio', name: 'Portofolio & Tabel Kontrak', href: '/#portofolio' },
    { key: 'estimator', name: 'Kalkulator Simulasi RAB', href: '/#estimator' },
    { key: 'proksi', name: 'Ekosistem Digital PROKSI', href: '/#proksi' },
    { key: 'workflow', name: 'Metodologi & SOP Kerja', href: '/#keunggulan' },
  ].filter((item) => visibility?.[item.key] !== false);

  return (
    <>
      <footer id="kontak" className="bg-[#0B2447] text-white pt-16 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5">
          
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                  <img
                    key={logoSrc}
                    src={logoSrc}
                    alt="Logo CV. Wahana Sinergi Mitra"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_SITE_LOGO;
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[16px] font-extrabold text-white tracking-[-0.025em] block">
                    CV. WAHANA SINERGI MITRA
                  </span>
                  <span className="text-[11px] font-bold text-sky-300 uppercase tracking-[-0.015em] block">
                    General Contractor & Civil Engineering
                  </span>
                </div>
              </div>

              <p className="text-slate-200 text-[13.5px] font-medium max-w-md leading-relaxed tracking-[-0.015em]">
                {aboutDisplay}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-emerald-300 tracking-[-0.015em]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SBU Konstruksi Aktif</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-sky-300 tracking-[-0.015em]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>ISO 9001 & 45001 SMK3</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-amber-300 tracking-[-0.015em]">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>GAPENSI</span>
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-[12px] font-bold text-sky-300 uppercase tracking-[-0.015em] block">
                Navigasi Korporat
              </span>
              <ul className="space-y-2.5 text-[13.5px] text-slate-200 font-medium tracking-[-0.015em]">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-emerald-300 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/admin" className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1 font-bold text-white">
                    <span>Portal CMS Internal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Office & Workshop Contact */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[12px] font-bold text-sky-300 uppercase tracking-[-0.015em] block">
                Kantor Operasional, Workshop &amp; Kontak Resmi
              </span>
              <ul className="space-y-3 text-[13px] text-slate-200 font-medium tracking-[-0.015em]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="min-w-0">
                    <span className="text-[10.5px] font-bold uppercase tracking-[-0.015em] text-sky-300 block">
                      Alamat Kantor Utama
                    </span>
                    <span className="leading-relaxed block">
                      {addressDisplay}
                    </span>
                  </div>
                </li>

                {workshopAddressDisplay && (
                  <li className="flex items-start gap-3">
                    <Wrench className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                    <div className="min-w-0">
                      <span className="text-[10.5px] font-bold uppercase tracking-[-0.015em] text-sky-300 block">
                        Alamat Workshop
                      </span>
                      <span className="leading-relaxed block">
                        {workshopAddressDisplay}
                      </span>
                      {workshopMapExternalUrl && (
                        <a
                          href={workshopMapExternalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 mt-1 text-[11.5px] font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>Lihat Lokasi Workshop di Google Maps</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </li>
                )}

                <li className="flex items-start gap-3 pt-1">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[10.5px] font-bold uppercase tracking-[-0.015em] text-slate-300 block">
                      {phoneLabel}
                    </span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-300 font-bold transition-colors"
                    >
                      {phoneDisplay} (WhatsApp)
                    </a>
                  </div>
                </li>

                {phone2Display && (
                  <li className="flex items-start gap-3">
                    <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-[10.5px] font-bold uppercase tracking-[-0.015em] text-slate-300 block">
                        {phone2Label}
                      </span>
                      <a
                        href={waUrl2}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-300 font-bold transition-colors"
                      >
                        {phone2Display} (WhatsApp)
                      </a>
                    </div>
                  </li>
                )}

                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`mailto:${emailDisplay}`}
                    className="hover:text-emerald-300 transition-colors truncate"
                  >
                    {emailDisplay}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Bar (padded on desktop to prevent occlusion from floating WhatsApp widget) */}
          <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-3 text-[12px] text-slate-300 font-medium tracking-[-0.015em] lg:pr-56">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-center lg:text-left">
              <span>
                © {new Date().getFullYear()} CV. Wahana Sinergi Mitra. Seluruh Hak Cipta Dilindungi.
              </span>
              <span className="text-slate-500 font-bold hidden sm:inline">|</span>
              <span className="text-slate-300">
                General Contractor, Steel Structure & Civil Engineering — Indonesia
              </span>
            </div>
            <div className="text-slate-300 shrink-0 text-center lg:text-right font-medium">
              Web Design by{' '}
              <a
                href="https://wa.me/6281225129109"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-sky-400 hover:text-sky-300 underline decoration-sky-400/50 underline-offset-2 transition-colors cursor-pointer"
              >
                SENOPATI
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Quick Consultation Widget (PT MKP Inspired) */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        title="Konsultasi Langsung via WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px] tracking-[-0.02em] shadow-[0_8px_30px_rgb(16,185,129,0.35)] hover:-translate-y-0.5 transition-all"
      >
        <PhoneCall className="w-4 h-4 stroke-[2.5]" />
        <span className="hidden sm:inline">Chat Engineer WSM</span>
      </a>
    </>
  );
}

export default Footer;
