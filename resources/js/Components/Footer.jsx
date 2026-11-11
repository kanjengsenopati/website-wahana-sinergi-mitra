import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Text from './Typography';

export function Footer({ company = {}, visibility = {} }) {
  const cleanPhone = (company?.phone || '+62 812-3456-7890')
    .replace(/\D/g, '')
    .replace(/^0/, '62');
  const waUrl = `https://wa.me/${cleanPhone}`;
  const phoneDisplay = company?.phone || '+62 812-3456-7890';
  const emailDisplay = company?.email || 'info@wahanasinergimitra.id';
  const addressDisplay = company?.address || 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia';
  const aboutDisplay = company?.about || 'Perusahaan penyedia jasa pelaksana konstruksi terpercaya yang melayani pekerjaan gedung komersial, industri pergudangan, infrastruktur jalan/jembatan, dan rekayasa sipil berstandar mutu tinggi di seluruh wilayah Indonesia.';

  const quickLinks = [
    { key: 'hero', name: 'Beranda', href: '#beranda' },
    { key: 'services', name: 'Layanan Konstruksi', href: '#layanan' },
    { key: 'portfolio', name: 'Portofolio Proyek', href: '#portofolio' },
    { key: 'estimator', name: 'Kalkulator Simulasi RAB', href: '#estimator' },
    { key: 'proksi', name: 'Ekosistem PROKSI', href: '#proksi' },
    { key: 'workflow', name: 'Metodologi Kerja', href: '#keunggulan' },
  ].filter((item) => visibility?.[item.key] !== false);

  return (
    <footer id="kontak" className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                <img
                  src="/images/logo-wsm.jpg"
                  alt="Logo CV. Wahana Sinergi Mitra"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[15px] font-extrabold text-white tracking-[-0.02em] block">
                  CV. WAHANA SINERGI MITRA
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-[-0.015em] block">
                  General Contractor & Civil Engineering
                </span>
              </div>
            </div>

            <Text.Body className="text-slate-400 text-[13.5px] max-w-md leading-relaxed">
              {aboutDisplay}
            </Text.Body>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-bold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                SBU Konstruksi Aktif
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-bold text-cyan-400">
                K3 Certified
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[13px] font-bold text-white uppercase tracking-[-0.015em] block">
              Navigasi Cepat
            </span>
            <ul className="space-y-2 text-[13px] text-slate-400 font-medium">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
              <li>
                <a href="/admin" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Portal CMS Internal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Office Contact */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[13px] font-bold text-white uppercase tracking-[-0.015em] block">
              Kantor & Kontak Resmi
            </span>
            <ul className="space-y-3 text-[13px] text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {addressDisplay}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={waUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  {phoneDisplay} (Call / WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`mailto:${emailDisplay}`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {emailDisplay}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-400">
          <span>
            © {new Date().getFullYear()} CV. Wahana Sinergi Mitra. All Rights Reserved.
          </span>
          <span className="text-slate-400 font-medium">
            Staging Domain: website.wahanasinergimitra.id
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
