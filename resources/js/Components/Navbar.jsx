import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { 
  PhoneCall, 
  Menu, 
  X, 
  ShieldCheck, 
  Lock, 
  Mail, 
  Clock, 
  Award,
  CheckCircle2
} from 'lucide-react';
import Text from './Typography';
import { DEFAULT_SITE_LOGO, resolveSiteLogoUrl } from '../utils/imageUtils';

export function Navbar({ company = {}, visibility = {} }) {
  const { site_logo: sharedSiteLogo } = usePage().props || {};
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoSrc = resolveSiteLogoUrl(company?.logo_url || sharedSiteLogo);
  const phoneDisplay = company?.phone || '+62 812-3456-7890';
  const emailDisplay = company?.email || 'info@wahanasinergimitra.id';
  const operatingHours = company?.operating_hours || 'Senin – Sabtu: 08.00 – 17.00 WIB';

  const cleanPhone = phoneDisplay
    .replace(/\D/g, '')
    .replace(/^0/, '62');
  const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20CV.%20Wahana%20Sinergi%20Mitra,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi.`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allNavLinks = [
    { key: 'hero', name: 'BERANDA', href: '/#beranda' },
    { key: 'about', name: 'TENTANG KAMI', href: '/#tentang' },
    { key: 'services', name: 'LAYANAN', href: '/#layanan' },
    { key: 'portfolio', name: 'PORTOFOLIO', href: '/#portofolio' },
    { key: 'estimator', name: 'SIMULASI RAB', href: '/#estimator' },
    { key: 'proksi', name: 'SISTEM PROKSI', href: '/#proksi' },
    { key: 'workflow', name: 'METODOLOGI', href: '/#keunggulan' },
    { key: 'inquiry', name: 'KONTAK', href: '/#inquiry' },
  ];

  const navLinks = allNavLinks.filter((item) => visibility?.[item.key] !== false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Corporate Top Utility Bar (PT MKP Inspired) */}
      <div
        className={`bg-slate-950 text-white border-b border-slate-800/80 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 py-0 opacity-0 border-none' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-medium tracking-[-0.015em]">
          <div className="flex items-center gap-4 min-w-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-bold">{phoneDisplay}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`mailto:${emailDisplay}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-sky-400 transition-colors truncate"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{emailDisplay}</span>
            </a>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{operatingHours}</span>
            </span>
          </div>

          {/* Institutional Certification Badges */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-bold text-[10px] tracking-[-0.015em]">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>ISO 9001:2015</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/15 text-sky-300 font-bold text-[10px] tracking-[-0.015em]">
              <ShieldCheck className="w-3 h-3 text-sky-400" />
              <span>ISO 45001 / SMK3</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 font-bold text-[10px] tracking-[-0.015em]">
              <Award className="w-3 h-3 text-amber-400" />
              <span>SBU & GAPENSI</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header Bar with Dynamic Seamless Dark Glass to Frosted White Transition */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl border-b border-slate-200/50 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2.5'
            : 'bg-slate-950/75 backdrop-blur-xl border-b border-white/10 text-white shadow-[0_8px_30px_rgb(0,0,0,0.25)] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-3">
          {/* Brand Logo Lockup + Milestone Trust Emblem */}
          <a href="#beranda" className="flex items-center gap-3 group shrink-0">
            <div
              className={`w-10 h-10 rounded-2xl p-1 shadow-sm flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-all ${
                scrolled
                  ? 'bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                  : 'bg-white border border-white/30 shadow-md'
              }`}
            >
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
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[14px] sm:text-[15px] font-extrabold tracking-[-0.03em] whitespace-nowrap transition-colors ${
                    scrolled ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  CV. WAHANA SINERGI MITRA
                </span>
                <span
                  className={`hidden 2xl:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-[-0.015em] shrink-0 transition-colors ${
                    scrolled
                      ? 'bg-blue-600/10 text-blue-700 border border-blue-200/60'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                  }`}
                >
                  12+ THN
                </span>
              </div>
              <span
                className={`text-[10.5px] font-bold uppercase tracking-[-0.015em] whitespace-nowrap transition-colors ${
                  scrolled ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                General Contractor & Civil Engineering
              </span>
            </div>
          </a>

          {/* Desktop Corporate Nav Items with Refined Micro-Pills & Dynamic Active Line */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-[11.5px] font-bold tracking-[-0.015em] whitespace-nowrap transition-all group ${
                  scrolled
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/80'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full ${
                    scrolled ? 'bg-blue-600' : 'bg-sky-400'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Cluster & Portal Access */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="/login"
              title="Akses Portal ERP & CMS Internal"
              className={`p-2.5 rounded-full transition-all ${
                scrolled
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/60'
                  : 'text-slate-200 hover:text-white hover:bg-white/15 border border-white/20'
              }`}
            >
              <Lock className="w-[17px] h-[17px] stroke-[2]" />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-[13px] font-bold tracking-[-0.02em] shadow-md hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 stroke-[2]" />
              <span>Konsultasi Proyek</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-2xl transition-colors ${
              scrolled
                ? 'text-slate-700 hover:text-slate-900 bg-slate-100'
                : 'text-white hover:bg-white/20 bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-5 py-4 space-y-2 shadow-2xl transition-colors ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 text-slate-800'
              : 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 text-white'
          }`}
        >
          <div className="grid grid-cols-2 gap-1.5 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-2xl text-[12px] font-bold tracking-[-0.015em] transition-colors ${
                  scrolled
                    ? 'text-slate-800 hover:bg-blue-50 hover:text-blue-600'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className={`pt-3 border-t flex flex-col gap-2 ${scrolled ? 'border-slate-100' : 'border-white/10'}`}>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-[13px] font-bold tracking-[-0.02em] shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Hotline WhatsApp</span>
            </a>
            <a
              href="/login"
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl text-[12px] font-bold transition-colors ${
                scrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Login Portal CMS Internal</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
