import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Send, PhoneCall, CheckCircle2, AlertCircle, Building2, MapPin, Mail, MessageSquare } from 'lucide-react';
import Text from './Typography';
import CurrencyInput from './CurrencyInput';

export function InquiryForm({ initialData = {}, company = {}, meta = {} }) {
  const { flash } = usePage().props;

  const badge = meta?.badge || 'Formulir Konsultasi Proyek';
  const title = meta?.title || 'Diskusikan Rencana Konstruksi Anda Bersama Kami';
  const subtitle = meta?.subtitle || 'Konsultasikan kebutuhan teknis, survei lokasi lahan, atau perhitungan RAB Anda. Tim estimator dan insinyur CV. Wahana Sinergi Mitra siap memberikan rekomendasi efisien dan tepat sasaran.';

  const cleanPhone = (company?.phone || '+62 812-3456-7890')
    .replace(/\D/g, '')
    .replace(/^0/, '62');
  const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20CV.%20Wahana%20Sinergi%20Mitra,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi.`;
  const phoneDisplay = company?.phone || '+62 812-3456-7890';
  const emailDisplay = company?.email || 'info@wahanasinergimitra.id';

  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    client_name: '',
    phone_wa: '',
    email: '',
    project_type: initialData.project_type || 'Komersial / Ruko / Kantor',
    building_area_m2: initialData.building_area_m2 || '',
    estimated_budget: initialData.estimated_budget || '',
    location: '',
    message: '',
  });

  // Sync if initialData changes from estimator
  React.useEffect(() => {
    if (initialData.project_type) setData('project_type', initialData.project_type);
    if (initialData.building_area_m2) setData('building_area_m2', initialData.building_area_m2);
    if (initialData.estimated_budget) setData('estimated_budget', initialData.estimated_budget);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/inquiry', {
      preserveScroll: true,
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5">
        
        <div className="bg-white rounded-[24px] p-6 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Context & Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                {badge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <Text.Label className="text-emerald-700">{badge}</Text.Label>
                  </div>
                )}
                <Text.H1 className="text-[28px] sm:text-[36px] mb-3">
                  {title}
                </Text.H1>
                {subtitle && (
                  <Text.Body className="text-slate-600">
                    {subtitle}
                  </Text.Body>
                )}
              </div>

              {/* Quick Contacts */}
              <div className="space-y-3 pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-emerald-50/60 hover:bg-emerald-50 border border-emerald-100 flex items-center gap-4 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Text.Label title="WhatsApp Hotline Resmi" singleLine className="text-emerald-800">
                      WhatsApp Hotline
                    </Text.Label>
                    <div className="text-[14px] font-bold text-slate-900 group-hover:text-emerald-700">
                      {phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${emailDisplay}`}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 flex items-center gap-4 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Text.Label title="Email Korespondensi" singleLine className="text-blue-900">
                      Email Resmi
                    </Text.Label>
                    <div className="text-[14px] font-bold text-slate-900 group-hover:text-blue-700">
                      {emailDisplay}
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Text.Label title="Wilayah Operasional" singleLine className="text-slate-700">
                      Wilayah Operasional
                    </Text.Label>
                    <div className="text-[13px] font-bold text-slate-800">
                      Jabodetabek, Jawa Barat, Banten & Seluruh Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/80">
              
              {/* Success Notification */}
              {(recentlySuccessful || flash?.success) && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-[13.5px] font-semibold leading-relaxed">
                    {flash?.success || 'Terima kasih! Formulir konsultasi proyek Anda telah tersimpan. Tim CV. Wahana Sinergi Mitra akan segera menghubungi Anda.'}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                      Nama Lengkap / Instansi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ir. Budi Santoso"
                      value={data.client_name}
                      onChange={(e) => setData('client_name', e.target.value)}
                      className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-[14px]"
                    />
                    {errors.client_name && (
                      <span className="text-red-500 text-[11px] font-bold mt-1 block">{errors.client_name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={data.phone_wa}
                      onChange={(e) => setData('phone_wa', e.target.value)}
                      className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-[14px]"
                    />
                    {errors.phone_wa && (
                      <span className="text-red-500 text-[11px] font-bold mt-1 block">{errors.phone_wa}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                      Alamat Email (Opsional)
                    </label>
                    <input
                      type="email"
                      placeholder="nama@perusahaan.com"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-[14px]"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-[11px] font-bold mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                      Jenis Kategori Proyek
                    </label>
                    <select
                      value={data.project_type}
                      onChange={(e) => setData('project_type', e.target.value)}
                      className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-[14px]"
                    >
                      <option value="Komersial / Ruko / Kantor">Komersial / Ruko / Kantor</option>
                      <option value="Gudang & Industri">Gudang & Bangunan Industri</option>
                      <option value="Hunian Residensial">Hunian Residensial</option>
                      <option value="Renovasi & Retrofitting">Renovasi & Retrofitting</option>
                      <option value="Pekerjaan Sipil & Infrastruktur">Pekerjaan Sipil & Infrastruktur</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Building Area & Budget (using CurrencyInput) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                      Estimasi Luas Bangunan (m²)
                    </label>
                    <input
                      type="number"
                      placeholder="Contoh: 450"
                      value={data.building_area_m2}
                      onChange={(e) => setData('building_area_m2', e.target.value)}
                      className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                      Estimasi Anggaran / Budget (Rp)
                    </label>
                    <CurrencyInput
                      value={data.estimated_budget}
                      onChange={(val) => setData('estimated_budget', val)}
                      placeholder="500.000.000"
                    />
                  </div>
                </div>

                {/* Row 4: Location */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                    Lokasi Lahan Proyek (Kota / Daerah)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Kawasan Industri MM2100, Cikarang Barat"
                    value={data.location}
                    onChange={(e) => setData('location', e.target.value)}
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-[14px]"
                  />
                </div>

                {/* Row 5: Notes/Message */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[-0.015em] text-slate-700 mb-1.5">
                    Rincian Kebutuhan & Catatan Khusus
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Jelaskan kebutuhan khusus, target mulai pekerjaan, atau dokumen yang sudah dimiliki (misal: tanah sudah bersertifikat, izin PBG)..."
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-[14px]"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] tracking-[-0.02em] shadow-md hover:shadow-blue-600/25 transition-all disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{processing ? 'Mengirim Formulir...' : 'Kirim Pengajuan Proyek'}</span>
                </button>
              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default InquiryForm;
