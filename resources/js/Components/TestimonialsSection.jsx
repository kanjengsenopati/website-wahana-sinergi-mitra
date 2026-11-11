import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import Text from './Typography';

export function TestimonialsSection({ testimonials = [] }) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <Text.Label className="text-emerald-700">Testimoni Klien</Text.Label>
          </div>
          <Text.H1 className="text-[28px] sm:text-[38px] mb-3">
            Kepercayaan Nyata Dari Para Pemilik Proyek
          </Text.H1>
          <Text.Body>
            Simak ulasan langsung dari pimpinan perusahaan, pengembang properti, dan pemilik bisnis 
            yang telah mempercayakan konstruksi bangunannya kepada CV. Wahana Sinergi Mitra.
          </Text.Body>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className="bg-[#F8FAFC] rounded-[24px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between"
            >
              <div>
                {/* Top-Right Action Cluster & Star Rating */}
                <div className="flex items-center justify-between gap-2 min-w-0 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-bold text-slate-700 border border-slate-200/60 shadow-sm">
                    Verified Client
                  </span>
                </div>

                {/* Content */}
                <Text.Body className="text-[13.5px] text-slate-700 italic leading-relaxed mb-6">
                  "{t.content}"
                </Text.Body>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={t.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'}
                  alt={t.client_name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-[14px] font-bold text-slate-900 truncate">
                    {t.client_name}
                  </div>
                  <Text.Caption className="text-slate-600 block truncate">
                    {t.client_role} {t.company_name ? `• ${t.company_name}` : ''}
                  </Text.Caption>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
