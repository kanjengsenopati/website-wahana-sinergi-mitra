import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import Text from './Typography';
import { DEFAULT_AVATAR_PLACEHOLDER, resolveImageUrl } from '../utils/imageUtils';

export function TestimonialsSection({ testimonials = [], meta = {} }) {
  const badge = meta?.badge || '• TESTIMONI & APRESIASI PEMBERI TUGAS';
  const title = meta?.title || 'Kepercayaan Nyata Dari {Para Pemilik Proyek}';
  const subtitle = meta?.subtitle || 'Simak ulasan langsung dari pimpinan perusahaan, pengembang properti, dan pemilik bisnis yang telah mempercayakan konstruksi bangunannya kepada CV. Wahana Sinergi Mitra.';

  return (
    <section className="py-16 sm:py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl lg:max-w-6xl mx-auto mb-14">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/10 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <Text.Label className="text-emerald-700">{badge}</Text.Label>
            </div>
          )}
          <Text.AccentTitle text={title} className="text-[28px] sm:text-[38px] mb-3" />
          {subtitle && (
            <Text.Body className="text-slate-700 max-w-5xl mx-auto">
              {subtitle}
            </Text.Body>
          )}
        </div>

        {/* 3-Column Grid (Rule 1: rounded-[24px], shadow-[0_8px_30px_rgb(0,0,0,0.04)], no solid border on white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className="bg-white rounded-[24px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between"
            >
              <div>
                {/* Top-Right Action Cluster & Star Rating */}
                <div className="flex items-center justify-between gap-2 min-w-0 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600/10 text-[11px] font-bold text-emerald-600 shrink-0 whitespace-nowrap">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Client</span>
                  </span>
                </div>

                {/* Content */}
                <Text.Body className="text-[14px] text-slate-700 leading-relaxed mb-6">
                  "{t.content}"
                </Text.Body>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3 min-w-0">
                <img
                  key={t.avatar_url || t.id || idx}
                  src={resolveImageUrl(t.avatar_url, DEFAULT_AVATAR_PLACEHOLDER)}
                  alt={t.client_name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = DEFAULT_AVATAR_PLACEHOLDER;
                  }}
                  className="w-11 h-11 rounded-full object-cover shrink-0 shadow-xs"
                />
                <div className="min-w-0 flex-1">
                  <Text.H2 title={t.client_name} singleLine className="text-[15px] text-slate-900">
                    {t.client_name}
                  </Text.H2>
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
