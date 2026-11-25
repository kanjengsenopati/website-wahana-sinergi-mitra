import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Home, Building2, Warehouse, HeartPulse, GraduationCap, Store, Wrench, Sparkles } from 'lucide-react';
import Text, { formatRupiah } from './Typography';

const iconMap = {
  Home,
  Building2,
  Warehouse,
  HeartPulse,
  GraduationCap,
  Store,
  Wrench,
  Calculator,
  Sparkles,
};

const defaultBuildingOptions = [
  {
    id: 'hunian',
    label: 'Hunian',
    icon: 'Home',
    baseRatePerM2: 4500000,
    description: 'Rumah tinggal, cluster perumahan, struktur beton bertulang & finishing rapi',
  },
  {
    id: 'kantor',
    label: 'Kantor / Ruko / Publik',
    icon: 'Building2',
    baseRatePerM2: 5200000,
    description: 'Gedung kantor, ruko komersial, fasilitas layanan publik & fasad ACP/kaca',
  },
  {
    id: 'gudang',
    label: 'Gudang',
    icon: 'Warehouse',
    baseRatePerM2: 3600000,
    description: 'Struktur baja WF, pelat beton heavy-duty, atap zincalume',
  },
  {
    id: 'kesehatan',
    label: 'Kesehatan',
    icon: 'HeartPulse',
    baseRatePerM2: 6500000,
    description: 'Klinik, rumah sakit, ruang steril, tata udara HVAC & MEP medis',
  },
  {
    id: 'pendidikan',
    label: 'Pendidikan',
    icon: 'GraduationCap',
    baseRatePerM2: 5000000,
    description: 'Sekolah, kampus, laboratorium & aula dengan standar akustik dan K3',
  },
  {
    id: 'komersial_khusus',
    label: 'Komersial Khusus',
    icon: 'Store',
    baseRatePerM2: 5800000,
    description: 'Showroom, hotel, pusat niaga, restoran & bangunan komersial tematik',
  },
  {
    id: 'renovasi_hunian',
    label: 'Renovasi Hunian',
    icon: 'Wrench',
    baseRatePerM2: 2800000,
    description: 'Peremajaan fasad, perluasan ruang, perkuatan struktur & MEP baru',
  },
];

const defaultMaterialTiers = [
  { id: 'standar', name: 'Standar Proyek', multiplier: 1.0, desc: 'Bahan SNI teruji ekonomis' },
  { id: 'premium', name: 'Premium (Rekomendasi)', multiplier: 1.2, desc: 'Brand terkemuka daya tahan tinggi' },
  { id: 'eksklusif', name: 'Eksklusif / Heavy-Duty', multiplier: 1.45, desc: 'Spesifikasi industrial & mewah' },
];

export function CostEstimator({ data = {}, onApplyToForm }) {
  const buildingOptions = useMemo(() => {
    const raw = (data?.building_options && data.building_options.length > 0) 
      ? data.building_options 
      : defaultBuildingOptions;
    return raw.map((item) => ({
      ...item,
      icon: typeof item.icon === 'string' ? (iconMap[item.icon] || Building2) : (item.icon || Building2),
    }));
  }, [data?.building_options]);

  const materialTiers = (data?.material_tiers && data.material_tiers.length > 0)
    ? data.material_tiers
    : defaultMaterialTiers;

  const [buildingType, setBuildingType] = useState('kantor');
  const [areaM2, setAreaM2] = useState(350);
  const [materialTier, setMaterialTier] = useState('premium');
  const [floors, setFloors] = useState(2);

  const badge = data?.badge || 'Kalkulator Simulasi Biaya';
  const title = data?.title || 'Simulasi Estimasi Rencana {Anggaran Biaya (RAB)}';
  const subtitle = data?.subtitle || 'Dapatkan gambaran nilai investasi konstruksi secara transparan berdasarkan luas bangunan dan spesifikasi mutu material berstandar SNI.';

  // Calculation logic
  const calculation = useMemo(() => {
    const selectedType = buildingOptions.find((b) => b.id === buildingType) || buildingOptions[0];
    const selectedTier = materialTiers.find((t) => t.id === materialTier) || materialTiers[1];

    const floorFactor = floors > 1 ? 1 + (floors - 1) * 0.08 : 1.0;
    const baseUnitRate = selectedType.baseRatePerM2 * selectedTier.multiplier * floorFactor;
    const totalEstimate = Math.round(baseUnitRate * (Number(areaM2) || 0));

    // Breakdown components
    const structural = Math.round(totalEstimate * 0.45);
    const architectural = Math.round(totalEstimate * 0.35);
    const mep = Math.round(totalEstimate * 0.20);

    return {
      ratePerM2: Math.round(baseUnitRate),
      totalEstimate,
      structural,
      architectural,
      mep,
      typeIcon: selectedType.icon,
      typeName: selectedType.label,
      tierName: selectedTier.name,
    };
  }, [buildingOptions, materialTiers, buildingType, areaM2, materialTier, floors]);

  const handleConsultationWhatsApp = () => {
    const message = `Halo CV. Wahana Sinergi Mitra, saya telah melakukan simulasi RAB di website:%0A- Kategori Proyek: ${calculation.typeName}%0A- Luas: ${areaM2} m²%0A- Jumlah Lantai: ${floors} Lantai%0A- Spek: ${calculation.tierName}%0A- Estimasi Anggaran: ${formatRupiah(calculation.totalEstimate)}%0A%0AMohon info jadwal survei lokasi dan penyusunan RAB detail. Terima kasih.`;
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl lg:max-w-6xl mx-auto mb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 mb-3">
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
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

        {/* Main Card Container (Rule 1: rounded-[24px], shadow-[0_8px_30px_rgb(0,0,0,0.04)], no solid border on white cards) */}
        <div className="bg-[#f8fafc] rounded-[24px] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Controls: Form Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Building Type */}
              <div>
                <div className="flex items-center justify-between gap-2 min-w-0 mb-3">
                  <Text.Label title="1. Pilih Kategori Konstruksi" singleLine>
                    1. Pilih Kategori Konstruksi
                  </Text.Label>
                  <Text.Caption>{buildingOptions.length} Spesialisasi WSM</Text.Caption>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {buildingOptions.map((opt) => {
                    const IconComponent = opt.icon;
                    const isSelected = buildingType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBuildingType(opt.id)}
                        className={`text-left p-4 rounded-2xl transition-all border ${
                          isSelected
                            ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/10'
                            : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2.5 min-w-0 mb-2">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <Text.H2 title={opt.label} singleLine className="text-[14px]">
                              {opt.label}
                            </Text.H2>
                          </div>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] shrink-0">
                              ✓
                            </span>
                          )}
                        </div>
                        <Text.Caption className="line-clamp-2 block text-slate-600 pl-10">
                          {opt.description}
                        </Text.Caption>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Dimensions & Floors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 min-w-0 mb-2">
                    <Text.Label title="2. Luas Bangunan (m²)" singleLine>
                      2. Luas Bangunan (m²)
                    </Text.Label>
                    <span className="text-[12px] font-bold text-slate-700 shrink-0">{areaM2} m²</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="25"
                    value={areaM2}
                    onChange={(e) => setAreaM2(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 mt-1 font-semibold">
                    <span>50 m²</span>
                    <span>2.500 m²</span>
                    <span>5.000 m²</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 min-w-0 mb-2">
                    <Text.Label title="3. Jumlah Lantai" singleLine>
                      3. Jumlah Lantai
                    </Text.Label>
                    <span className="text-[12px] font-bold text-slate-700 shrink-0">{floors} Lantai</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFloors(f)}
                        className={`py-2.5 rounded-xl font-bold text-[13px] border transition-all ${
                          floors === f
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {f} Lt
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Material Tier */}
              <div>
                <div className="flex items-center justify-between gap-2 min-w-0 mb-2">
                  <Text.Label title="Spesifikasi & Mutu Material" singleLine>
                    4. Kelas Spesifikasi Material
                  </Text.Label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {materialTiers.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setMaterialTier(tier.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        materialTier === tier.id
                          ? 'bg-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/10'
                          : 'bg-white/80 border-slate-200 hover:bg-white'
                      }`}
                    >
                      <div className="font-bold text-[13px] text-slate-900 mb-0.5">{tier.name}</div>
                      <div className="text-[11px] text-slate-600 font-medium">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary: Live Result & Actions (Rule 1: rounded-[24px], shadow-[0_8px_30px_rgb(0,0,0,0.04)], no solid border on white card) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-[24px] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="space-y-5">
                
                {/* Result Header */}
                <div className="flex items-center justify-between gap-2 min-w-0 pb-4 border-b border-slate-100">
                  <div className="min-w-0 flex-1">
                    <Text.Label title="Hasil Simulasi RAB" singleLine className="text-emerald-700">
                      Hasil Simulasi RAB
                    </Text.Label>
                    <Text.H2 title="Estimasi Investasi Konstruksi" singleLine>
                      Estimasi Investasi Konstruksi
                    </Text.H2>
                  </div>
                  <div
                    title={calculation.typeName}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0 whitespace-nowrap max-w-[175px]"
                  >
                    <calculation.typeIcon className="w-4 h-4 shrink-0" />
                    <span className="text-[12px] font-bold tracking-[-0.015em] truncate">
                      {calculation.typeName}
                    </span>
                  </div>
                </div>

                {/* Big Amount */}
                <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-100">
                  <Text.Caption className="text-slate-600 block mb-1">
                    Estimasi Total Anggaran Kasar ({calculation.typeName} • {areaM2} m² • {floors} Lantai)
                  </Text.Caption>
                  <Text.Amount
                    value={calculation.totalEstimate}
                    className="text-[26px] sm:text-[32px] block leading-none mb-2"
                  />
                  <div className="space-y-1.5 pt-2.5 border-t border-emerald-200/50">
                    <div className="flex items-center justify-between gap-2 text-[12px] font-semibold text-slate-600">
                      <span>Kategori Proyek:</span>
                      <span className="text-slate-900 font-bold truncate">{calculation.typeName}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[12px] font-semibold text-slate-600">
                      <span>Estimasi Biaya per m²:</span>
                      <span className="text-slate-900 font-bold tabular-nums">{formatRupiah(calculation.ratePerM2)} / m²</span>
                    </div>
                  </div>
                </div>

                {/* Component Breakdown */}
                <div className="space-y-2.5 pt-1">
                  <Text.Label title="Estimasi Rincian Pekerjaan" singleLine className="text-slate-600">
                    Estimasi Rincian Pekerjaan
                  </Text.Label>
                  
                  <div className="flex items-center justify-between text-[13px] py-1 border-b border-slate-100">
                    <span className="text-slate-600">Pekerjaan Struktur (Pondasi & Baja/Beton):</span>
                    <span className="font-bold text-slate-800 tabular-nums">{formatRupiah(calculation.structural)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[13px] py-1 border-b border-slate-100">
                    <span className="text-slate-600">Pekerjaan Arsitektur & Finishing:</span>
                    <span className="font-bold text-slate-800 tabular-nums">{formatRupiah(calculation.architectural)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[13px] py-1 border-b border-slate-100">
                    <span className="text-slate-600">Instalasi MEP (Mekanikal, Listrik & Plumbing):</span>
                    <span className="font-bold text-slate-800 tabular-nums">{formatRupiah(calculation.mep)}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-600 leading-relaxed">
                  *Simulasi ini merupakan estimasi non-binding. RAB final ditentukan setelah survei tanah, 
                  analisis daya dukung tanah (soil test), dan gambar teknis DED disetujui.
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={handleConsultationWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[14px] tracking-[-0.02em] shadow-md hover:shadow-emerald-600/25 transition-all"
                >
                  <span>Kirim Hasil Simulasi ke WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onApplyToForm && (
                  <button
                    type="button"
                    onClick={() => onApplyToForm({
                      project_type: calculation.typeName,
                      building_area_m2: areaM2,
                      estimated_budget: calculation.totalEstimate,
                    })}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-[13px] transition-colors"
                  >
                    Gunakan Nilai Ini di Formulir Penawaran ↓
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CostEstimator;
