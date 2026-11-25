import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import {
  Send,
  PhoneCall,
  CheckCircle2,
  MapPin,
  Mail,
  Wrench,
  Navigation,
  ExternalLink,
  Compass,
} from 'lucide-react';
import Text from './Typography';
import CurrencyInput from './CurrencyInput';
import { buildWhatsAppUrl, resolveWorkshopMap } from '../utils/mapUtils';

export function InquiryForm({ initialData = {}, company = {}, meta = {} }) {
  const { flash } = usePage().props;

  const badge = meta?.badge || 'Formulir Konsultasi Proyek';
  const title = meta?.title || 'Rencanakan Proyek Impian {Bersama Tim Engineer Kami}';
  const subtitle = meta?.subtitle || 'Konsultasikan kebutuhan teknis, survei lokasi lahan, atau perhitungan RAB Anda. Tim estimator dan insinyur CV. Wahana Sinergi Mitra siap memberikan rekomendasi efisien dan tepat sasaran.';

  const phoneDisplay = company?.phone || '+62 812-3456-7890';
  const phoneLabel = company?.phone_label || 'Hotline Utama / Kantor';
  const phone2Display = (company?.phone_2 || '').trim();
  const phone2Label = company?.phone_2_label || 'Kontak Workshop / Operasional';
  const emailDisplay = company?.email || 'info@wahanasinergimitra.id';
  const addressDisplay =
    company?.address || 'Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat, Indonesia';
  const workshopAddressDisplay = (company?.workshop_address || '').trim();

  const waUrl1 = buildWhatsAppUrl(phoneDisplay);
  const waUrl2 = buildWhatsAppUrl(
    phone2Display,
    'Halo Tim Workshop CV. Wahana Sinergi Mitra, saya ingin berkonsultasi mengenai kunjungan workshop atau fabrikasi proyek.'
  );

  const fallbackResolvedMap = resolveWorkshopMap({
    coordinates: company?.workshop_coordinates || '',
    mapUrl: company?.workshop_map_url || '',
    address: workshopAddressDisplay,
  });

  const workshopMapEmbedUrl = company?.workshop_map_embed_url || fallbackResolvedMap.embedUrl;
  const workshopMapExternalUrl = company?.workshop_map_external_url || fallbackResolvedMap.externalUrl;
  const workshopMapIsPrecise =
    typeof company?.workshop_map_is_precise === 'boolean'
      ? company.workshop_map_is_precise
      : fallbackResolvedMap.isPrecise;
  const workshopCoordinatesLabel =
    fallbackResolvedMap.coordinatesLabel || (company?.workshop_coordinates || '').trim();

  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    client_name: '',
    phone_wa: '',
    email: '',
    project_type: initialData.project_type || 'Perkantoran / Komersial',
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
        
        <div className="bg-white rounded-[24px] p-6 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
                <Text.AccentTitle text={title} className="text-[28px] sm:text-[36px] mb-3" />
                {subtitle && (
                  <Text.Body className="text-slate-600">
                    {subtitle}
                  </Text.Body>
                )}
              </div>

              {/* Quick Contacts (2 WhatsApp Numbers, Email & 2 Official Addresses) */}
              <div className="space-y-3 pt-2">
                <a
                  href={waUrl1}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-50 flex items-center gap-3.5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <PhoneCall className="w-[18px] h-[18px] stroke-[2]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <Text.Label title={phoneLabel} singleLine className="text-emerald-800">
                        {phoneLabel}
                      </Text.Label>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600/10 text-emerald-700 text-[10px] font-bold tracking-[-0.015em] shrink-0 whitespace-nowrap">
                        WhatsApp 1
                      </span>
                    </div>
                    <div className="text-[14px] font-bold text-slate-900 group-hover:text-emerald-700 tracking-[-0.015em] truncate">
                      {phoneDisplay}
                    </div>
                  </div>
                </a>

                {phone2Display && (
                  <a
                    href={waUrl2}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-emerald-50/50 hover:bg-emerald-50 flex items-center gap-3.5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <PhoneCall className="w-[18px] h-[18px] stroke-[2]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <Text.Label title={phone2Label} singleLine className="text-teal-800">
                          {phone2Label}
                        </Text.Label>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-600/10 text-emerald-700 text-[10px] font-bold tracking-[-0.015em] shrink-0 whitespace-nowrap">
                          WhatsApp 2
                        </span>
                      </div>
                      <div className="text-[14px] font-bold text-slate-900 group-hover:text-emerald-700 tracking-[-0.015em] truncate">
                        {phone2Display}
                      </div>
                    </div>
                  </a>
                )}

                <a
                  href={`mailto:${emailDisplay}`}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 flex items-center gap-3.5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-[18px] h-[18px] stroke-[2]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Text.Label title="Email Korespondensi" singleLine className="text-blue-900">
                      Email Resmi
                    </Text.Label>
                    <div className="text-[14px] font-bold text-slate-900 group-hover:text-blue-700 tracking-[-0.015em] truncate">
                      {emailDisplay}
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-50 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-[18px] h-[18px] stroke-[2]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Text.Label title="Alamat Kantor Utama" singleLine className="text-slate-700">
                      Alamat Kantor Utama
                    </Text.Label>
                    <div className="text-[13px] font-semibold text-slate-800 leading-snug tracking-[-0.015em] mt-0.5">
                      {addressDisplay}
                    </div>
                  </div>
                </div>

                {workshopAddressDisplay && (
                  <div className="p-4 rounded-2xl bg-blue-50/50 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Wrench className="w-[18px] h-[18px] stroke-[2]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <Text.Label title="Alamat Workshop" singleLine className="text-blue-900">
                          Alamat Workshop
                        </Text.Label>
                        {workshopMapExternalUrl && (
                          <a
                            href={workshopMapExternalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 tracking-[-0.015em] shrink-0 whitespace-nowrap"
                          >
                            <span>Google Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <div className="text-[13px] font-semibold text-slate-800 leading-snug tracking-[-0.015em] mt-0.5">
                        {workshopAddressDisplay}
                      </div>
                    </div>
                  </div>
                )}
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
                      <option value="Gedung">Gedung</option>
                      <option value="Gudang">Gudang</option>
                      <option value="Perkantoran / Komersial">Perkantoran / Komersial</option>
                      <option value="Renovasi">Renovasi</option>
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

        {/* Dedicated Precise Interactive Google Map Card for Alamat Workshop */}
        {workshopMapEmbedUrl && (
          <div className="mt-6 bg-white rounded-[24px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-[18px] h-[18px] stroke-[2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <Text.H2
                    title="Lokasi Alamat Workshop — CV. Wahana Sinergi Mitra"
                    singleLine
                    className="text-[16px] text-slate-900"
                  >
                    Lokasi Alamat Workshop
                  </Text.H2>
                  <Text.Caption className="block text-slate-600 truncate">
                    {workshopAddressDisplay || 'Kawasan Workshop & Fabrikasi CV. Wahana Sinergi Mitra'}
                  </Text.Caption>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0 whitespace-nowrap">
                {workshopMapIsPrecise && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 text-[11px] font-bold tracking-[-0.015em]">
                    <Compass className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pin Lokasi Presisi</span>
                  </span>
                )}
                {workshopCoordinatesLabel && (
                  <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold tabular-nums">
                    {workshopCoordinatesLabel}
                  </span>
                )}
                {workshopMapExternalUrl && (
                  <a
                    href={workshopMapExternalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold tracking-[-0.015em] shadow-sm transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Buka Rute di Google Maps</span>
                  </a>
                )}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-[300px] sm:h-[360px]">
              <iframe
                key={workshopMapEmbedUrl}
                src={workshopMapEmbedUrl}
                title="Peta Lokasi Alamat Workshop CV. Wahana Sinergi Mitra"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <Text.Caption className="text-slate-600">
                <strong className="text-slate-800">Alamat Workshop:</strong>{' '}
                {workshopAddressDisplay || addressDisplay}
              </Text.Caption>
              {(waUrl2 || waUrl1) && (
                <a
                  href={waUrl2 || waUrl1}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-emerald-600 hover:text-emerald-700 tracking-[-0.015em] shrink-0 whitespace-nowrap"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Hubungi {phone2Display ? phone2Label : phoneLabel}</span>
                </a>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default InquiryForm;
