import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check, HelpCircle, Building2, Warehouse, Home, Wrench, Sparkles } from 'lucide-react';
import Text, { formatRupiah } from './Typography';

export function CostEstimator({ onApplyToForm }) {
  const [buildingType, setBuildingType] = useState('komersial');
  const [areaM2, setAreaM2] = useState(350);
  const [materialTier, setMaterialTier] = useState('premium');
  const [floors, setFloors] = useState(2);

  const buildingOptions = [
    {
      id: 'gudang',
      label: 'Gudang & Industri',
      icon: Warehouse,
      baseRatePerM2: 3600000,
      description: 'Struktur baja WF, pelat beton heavy-duty, atap zincalume',
    },
    {
      id: 'komersial',
      label: 'Komersial / Ruko / Kantor',
      icon: Building2,
      baseRatePerM2: 5200000,
      description: 'Struktur beton bertulang, fasad ACP/kaca, partisi rapi',
    },
    {
      id: 'residensial',
      label: 'Hunian Residensial',
      icon: Home,
      baseRatePerM2: 5800000,
      description: 'Kusen aluminium powder coating, granit 60x60, sanitary Toto',
    },
    {
      id: 'renovasi',
      label: 'Renovasi & Retrofitting',
      icon: Wrench,
      baseRatePerM2: 2800000,
      description: 'Peremajaan fasad, perkuatan struktur, utilitas MEP baru',
    },
  ];

  const materialTiers = [
    { id: 'standar', name: 'Standar Proyek', multiplier: 1.0, desc: 'Bahan SNI teruji ekonomis' },
    { id: 'premium', name: 'Premium (Rekomendasi)', multiplier: 1.2, desc: 'Brand terkemuka daya tahan tinggi' },
    { id: 'eksklusif', name: 'Eksklusif / Heavy-Duty', multiplier: 1.45, desc: 'Spesifikasi industrial & mewah' },
  ];

  // Calculation logic
  const calculation = useMemo(() => {
    const selectedType = buildingOptions.find((b) => b.id === buildingType) || buildingOptions[1];
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
      typeName: selectedType.label,
      tierName: selectedTier.name,
    };
  }, [buildingType, areaM2, materialTier, floors]);

  const handleConsultationWhatsApp = () => {
    const message = `Halo CV. Wahana Sinergi Mitra, saya telah melakukan simulasi RAB di website:%0A- Tipe: ${calculation.typeName}%0A- Luas: ${areaM2} m² (%0A- Jumlah Lantai: ${floors})%0A- Spek: ${calculation.tierName}%0A- Estimasi Anggaran: ${formatRupiah(calculation.totalEstimate)}%0A%0AMohon info jadwal survei lokasi dan penyusunan RAB detail. Terima kasih.`;
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <Text.Label className="text-emerald-700">Kalkulator Simulasi Biaya</Text.Label>
          </div>
          <Text.H1 className="text-[28px] sm:text-[38px] mb-3">
            Estimasi Kasar RAB Proyek Anda
          </Text.H1>
          <Text.Body>
            Dapatkan gambaran nilai investasi konstruksi secara transparan berdasarkan luas 
            bangunan dan spesifikasi mutu material berstandar SNI.
          </Text.Body>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#f8fafc] rounded-[24px] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Controls: Form Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Building Type */}
              <div>
                <div className="flex items-center justify-between gap-2 min-w-0 mb-3">
                  <Text.Label title="1. Pilih Kategori Konstruksi" singleLine>
                    1. Pilih Kategori Konstruksi
                  </Text.Label>
                  <Text.Caption>4 Spesialisasi WSM</Text.Caption>
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
                    <Text.Label title="Luas Total Bangunan (m²)" singleLine>
                      2. Luas Bangunan (m²)
                    </Text.Label>
                    <span className="text-[12px] font-bold text-slate-700">{areaM2} m²</span>
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
                    <Text.Label title="Jumlah Lantai" singleLine>
                      3. Jumlah Lantai
                    </Text.Label>
                    <span className="text-[12px] font-bold text-slate-700">{floors} Lantai</span>
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

            {/* Right Summary: Live Result & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm">
              <div className="space-y-5">
                
                {/* Result Header */}
                <div className="flex items-center justify-between gap-2 min-w-0 pb-4 border-b border-slate-100">
                  <div className="min-w-0 flex-1">
                    <Text.Label title="Hasil Kalkulasi Anggaran" singleLine className="text-emerald-700">
                      Hasil Simulasi RAB
                    </Text.Label>
                    <Text.H2 title="Estimasi Investasi Total" singleLine>
                      Estimasi Investasi Konstruksi
                    </Text.H2>
                  </div>
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {/* Big Amount */}
                <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-100">
                  <Text.Caption className="text-slate-600 block mb-1">
                    Estimasi Total Anggaran Kasar ({areaM2} m² • {floors} Lantai)
                  </Text.Caption>
                  <Text.Amount
                    value={calculation.totalEstimate}
                    className="text-[26px] sm:text-[32px] block leading-none mb-2"
                  />
                  <div className="flex items-center justify-between text-[12px] font-semibold text-slate-600 pt-2 border-t border-emerald-200/50">
                    <span>Estimasi Biaya per m²:</span>
                    <span className="text-slate-900">{formatRupiah(calculation.ratePerM2)} / m²</span>
                  </div>
                </div>

                {/* Component Breakdown */}
                <div className="space-y-2.5 pt-1">
                  <Text.Label title="Rincian Komponen Pekerjaan" singleLine className="text-slate-600">
                    Estimasi Rincian Pekerjaan
                  </Text.Label>
                  
                  <div className="flex items-center justify-between text-[13px] py-1 border-b border-slate-100">
                    <span className="text-slate-600">Pekerjaan Struktur (Pondasi & Baja/Beton):</span>
                    <span className="font-bold text-slate-800">{formatRupiah(calculation.structural)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[13px] py-1 border-b border-slate-100">
                    <span className="text-slate-600">Pekerjaan Arsitektur & Finishing:</span>
                    <span className="font-bold text-slate-800">{formatRupiah(calculation.architectural)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[13px] py-1 border-b border-slate-100">
                    <span className="text-slate-600">Instalasi MEP (Mekanikal, Listrik & Plumbing):</span>
                    <span className="font-bold text-slate-800">{formatRupiah(calculation.mep)}</span>
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
