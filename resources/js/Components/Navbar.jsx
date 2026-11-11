import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';
import Text from './Typography';

export function Navbar({ company = {} }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanPhone = (company?.phone || '+62 812-3456-7890')
    .replace(/\D/g, '')
    .replace(/^0/, '62');
  const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20CV.%20Wahana%20Sinergi%20Mitra,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi.`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Simulasi RAB', href: '#estimator' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3'
          : 'bg-white/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#beranda" className="flex items-center gap-3 group min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-white p-1 shadow-sm border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
            <img
              src="/images/logo-wsm.jpg"
              alt="Logo CV. Wahana Sinergi Mitra"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[14px] font-extrabold text-slate-900 tracking-[-0.025em] whitespace-nowrap truncate">
              CV. WAHANA SINERGI MITRA
            </span>
            <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-[-0.015em] whitespace-nowrap truncate">
              General Contractor & Engineering
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-slate-700 hover:text-slate-900 hover:bg-white transition-all tracking-[-0.015em]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Admin Link */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/login"
            title="Akses Portal ERP & CMS"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Lock className="w-4 h-4" />
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] font-bold tracking-[-0.02em] shadow-sm hover:shadow-emerald-600/20 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 bg-white rounded-xl shadow-sm border border-slate-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 px-5 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-[14px] font-medium text-slate-800 hover:bg-slate-50 tracking-[-0.015em]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white text-[14px] font-bold tracking-[-0.02em]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </a>
            <a
              href="/login"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-slate-600 text-[13px] font-medium hover:bg-slate-100"
            >
              <Lock className="w-4 h-4" />
              <span>Login Portal WSM</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
