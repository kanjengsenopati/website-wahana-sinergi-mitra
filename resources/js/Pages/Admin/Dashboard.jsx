import React, { useState } from 'react';
import { Head, router, usePage, Link } from '@inertiajs/react';
import { 
  Building2, 
  HardHat, 
  MessageSquareText, 
  Star, 
  SlidersHorizontal, 
  LayoutDashboard, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  LogOut, 
  CheckCircle2, 
  Search, 
  Filter, 
  ArrowLeft, 
  Save, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  FolderKanban, 
  Calendar, 
  Layers, 
  Sparkles,
  PhoneCall,
  Eye,
  EyeOff,
  Calculator,
  Laptop,
  ToggleLeft,
  ToggleRight,
  FileSpreadsheet,
  ClipboardCheck,
  Check,
  Award,
  Users,
  UserCheck,
  UserPlus,
  KeyRound,
  ChevronDown,
  ChevronUp,
  X,
  ShieldAlert,
  User,
  Warehouse,
  Briefcase,
  Wrench,
  Hammer,
  AlertCircle,
  Loader2,
  Images
} from 'lucide-react';
import Text, { formatRupiah, formatThousands } from '../../Components/Typography';
import CurrencyInput from '../../Components/CurrencyInput';
import ImageUploader from '../../Components/ImageUploader';
import MultiImageUploader from '../../Components/MultiImageUploader';
import {
  DEFAULT_PROJECT_PLACEHOLDER,
  DEFAULT_AVATAR_PLACEHOLDER,
  resolveImageUrl,
  normalizeProjectGallery,
  getProjectMediaList,
} from '../../utils/imageUtils';

const iconMap = {
  Building2,
  HardHat,
  Warehouse,
  Briefcase,
  Wrench,
  Hammer,
};

export default function Dashboard({ 
  projects = [], 
  services = [], 
  inquiries = [], 
  testimonials = [], 
  settings = {}, 
  metrics = {},
  visibility = {},
  sectionData = {},
  auth_user = {},
  users = []
}) {
  const { flash, auth, errors = {} } = usePage().props;
  const currentUser = auth_user?.id ? auth_user : (auth?.user || {});
  const [activeTab, setActiveTab] = useState('overview'); // overview, sections, projects, services, inquiries, testimonials, settings, users
  const [activeUploadsCount, setActiveUploadsCount] = useState(0);
  const isAnyImageUploading = activeUploadsCount > 0;
  const handleUploaderBusyChange = React.useCallback((busy) => {
    setActiveUploadsCount((prev) => Math.max(0, prev + (busy ? 1 : -1)));
  }, []);
  const errorMessages = Object.values(errors || {}).filter(Boolean);

  // Profile Modal State
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  // User Management State (Super Admin)
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    role: 'Editor',
    password: '',
  });

  // Password Visibility (Eye) Toggle States
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showUserPassword, setShowUserPassword] = useState(false);

  // Password Security Evaluator
  const evaluatePasswordSecurity = (val = '') => {
    const hasLength = val.length >= 8;
    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasSymbol = /[^A-Za-z0-9]/.test(val);
    const score = [hasLength, (hasUpper && hasLower), hasNumber, hasSymbol].filter(Boolean).length;
    const isValid = hasLength && hasUpper && hasLower && hasNumber && hasSymbol;
    return { hasLength, hasUpper, hasLower, hasNumber, hasSymbol, score, isValid };
  };

  const renderPasswordSecurityChecklist = (password) => {
    if (!password) return null;
    const { hasLength, hasUpper, hasLower, hasNumber, hasSymbol, score } = evaluatePasswordSecurity(password);

    const getStrengthMeta = () => {
      if (score <= 1) return { label: 'Sangat Lemah', color: 'text-rose-500', barColor: 'bg-rose-500' };
      if (score === 2) return { label: 'Cukup', color: 'text-amber-500', barColor: 'bg-amber-500' };
      if (score === 3) return { label: 'Kuat', color: 'text-blue-500', barColor: 'bg-blue-500' };
      return { label: 'Sangat Kuat & Sesuai Standar', color: 'text-emerald-600', barColor: 'bg-emerald-500' };
    };

    const meta = getStrengthMeta();

    return (
      <div className="mt-2.5 space-y-2 animate-in fade-in">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Kekuatan Sandi:</span>
            <span className={`font-bold ${meta.color}`}>{meta.label}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-1">
            <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${score >= 1 ? meta.barColor : 'bg-slate-200'}`} />
            <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${score >= 2 ? meta.barColor : 'bg-slate-200'}`} />
            <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${score >= 3 ? meta.barColor : 'bg-slate-200'}`} />
            <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${score >= 4 ? meta.barColor : 'bg-slate-200'}`} />
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-[11px]">
          <p className="font-bold text-slate-700 tracking-[-0.015em] mb-1">Kriteria Keamanan Sandi Wajib:</p>
          
          <div className={`flex items-center gap-2 transition-colors ${hasLength ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${hasLength ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Minimal <strong>8 digit karakter</strong></span>
          </div>

          <div className={`flex items-center gap-2 transition-colors ${hasUpper ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${hasUpper ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Minimal <strong>1 huruf besar (A-Z)</strong></span>
          </div>

          <div className={`flex items-center gap-2 transition-colors ${hasLower ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${hasLower ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Minimal <strong>1 huruf kecil (a-z)</strong></span>
          </div>

          <div className={`flex items-center gap-2 transition-colors ${hasNumber ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${hasNumber ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Minimal <strong>1 angka (0-9)</strong></span>
          </div>

          <div className={`flex items-center gap-2 transition-colors ${hasSymbol ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${hasSymbol ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Minimal <strong>1 simbol / karakter khusus (!@#$%^&*)</strong></span>
          </div>
        </div>
      </div>
    );
  };

  // Vertical Carousel Accordion State (first item auto-expanded by default)
  const [expandedSection, setExpandedSection] = useState('hero');

  // Dedicated Section Manager & Visibility State
  const [sectionVisibility, setSectionVisibility] = useState(visibility || {});
  const [activeSectionEditor, setActiveSectionEditor] = useState(null); // 'hero', 'estimator', 'workflow', 'proksi', 'services_meta', 'portfolio_meta', 'testimonials_meta', 'inquiry_meta'

  React.useEffect(() => {
    if (visibility) {
      setSectionVisibility(visibility);
    }
  }, [visibility]);

  // Keep Hero & About forms synced when Inertia refreshes sectionData props after saving
  React.useEffect(() => {
    if (sectionData?.hero) {
      setHeroForm((prev) => ({
        ...prev,
        ...sectionData.hero,
        slides: Array.isArray(sectionData.hero.slides) && sectionData.hero.slides.length > 0
          ? sectionData.hero.slides
          : prev.slides,
      }));
    }
    if (sectionData?.about_data) {
      setAboutForm((prev) => ({
        ...prev,
        ...sectionData.about_data,
      }));
    }
  }, [sectionData]);

  // Section Content Forms
  const [heroForm, setHeroForm] = useState({
    badge: sectionData?.hero?.badge || 'SBU Konstruksi Aktif • General Contractor & Civil Engineering',
    title_line1: sectionData?.hero?.title_line1 || 'Membangun Masa Depan',
    title_line2: sectionData?.hero?.title_line2 || 'Presisi Konstruksi Nyata',
    description: sectionData?.hero?.description || 'Pelaksana konstruksi gedung komersial, gudang industri struktur baja WF, dan rekayasa sipil berstandar SNI. Didukung pengawasan mutu K3 Zero-Accident serta transparansi kurva-S real-time.',
    cta_primary_text: sectionData?.hero?.cta_primary_text || 'Konsultasi Proyek Baru',
    cta_primary_link: sectionData?.hero?.cta_primary_link || '#inquiry',
    cta_secondary_text: sectionData?.hero?.cta_secondary_text || 'Lihat Portofolio & Tabel Kontrak',
    cta_secondary_link: sectionData?.hero?.cta_secondary_link || '#portofolio',
    slides: sectionData?.hero?.slides || [
      {
        id: 1,
        tag: 'SBU KONSTRUKSI AKTIF • ISO 9001 & 45001 CERTIFIED',
        location: 'Kawasan Industri Cikarang & Karawang',
        caption: 'Dokumentasi Lapangan: Erection Struktur Baja WF 400 & Inspeksi HSE',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
        sector: 'Konstruksi Gudang, Pabrik & Struktur Baja Bentang Lebar',
      },
      {
        id: 2,
        tag: 'GENERAL CONTRACTOR & ARCHITECTURAL FIT-OUT',
        location: 'Jabodetabek & Jawa Barat',
        caption: 'Dokumentasi Proyek: Konstruksi Gedung Perkantoran & Fasad Komersial',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
        sector: 'Pembangunan Gedung Kantor, Ruko Komersial & Fasilitas Publik',
      },
      {
        id: 3,
        tag: 'ZERO-ACCIDENT K3 CULTURE • SMK3 TERVERIFIKASI',
        location: 'Pengawasan Mutu Terpadu (PROKSI)',
        caption: 'Dokumentasi Tim Engineer: Pengawasan Mutu Beton K-350 & Keselamatan Kerja',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
        sector: 'Manajemen Proyek Berstandar SNI dengan Pelaporan Real-Time',
      },
      {
        id: 4,
        tag: 'CIVIL ENGINEERING & HEAVY INFRASTRUCTURE',
        location: 'Jawa Barat, Banten & Nasional',
        caption: 'Dokumentasi Infrastruktur: Perkerasan Jalan Rigid Pavement & Drainase Kawasan',
        image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1800&q=85',
        sector: 'Rekayasa Sipil, Perkerasan Jalan Beton, Pondasi Bore Pile & MEP',
      },
    ],
  });

  const [aboutForm, setAboutForm] = useState({
    badge: sectionData?.about_data?.badge || '• TENTANG CV. WAHANA SINERGI MITRA',
    title: sectionData?.about_data?.title || 'Kontraktor Umum & Rekayasa Sipil {Berpengalaman & Terpercaya}',
    subtitle: sectionData?.about_data?.subtitle || 'Dengan dukungan tim insinyur sipil bersertifikat SKA/SKT, peralatan konstruksi modern, serta sistem pemantauan digital PROKSI, kami memastikan setiap tahapan proyek berjalan sesuai spesifikasi teknis SNI, tepat anggaran, dan tepat jadwal.',
    experience_years: sectionData?.about_data?.experience_years || '12+ Tahun',
    photo_main_url: sectionData?.about_data?.photo_main_url || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    photo_secondary_url: sectionData?.about_data?.photo_secondary_url || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    pillars: sectionData?.about_data?.pillars || [
      { code: '01', title: 'Fokus Kepuasan Klien', subtitle: 'Customer Focus & Dedicated PM', description: 'Didampingi Project Manager khusus sejak tahap pra-desain hingga masa pemeliharaan selesai.', icon: 'Target' },
      { code: '02', title: 'Prioritas Mutu SNI', subtitle: 'Lab-Tested Material Quality', description: 'Seluruh baja WF, besi beton ulir, dan ready-mix K-350 dilengkapi sertifikat uji laboratorium.', icon: 'Award' },
      { code: '03', title: 'Layanan Teknis Prima', subtitle: 'Full Engineering & MEP Support', description: 'Integrasi pekerjaan sipil, arsitektur, struktur baja, dan instalasi MEP dalam satu komando.', icon: 'ThumbsUp' },
      { code: '04', title: 'RAB Transparan & Kompetitif', subtitle: 'Auditable Engineering Estimate', description: 'Rincian volume dan harga satuan material terbuka tanpa biaya tersembunyi di tengah proyek.', icon: 'FileCheck2' },
      { code: '05', title: 'Pengalaman & K3 Teruji', subtitle: 'Zero-Accident HSE Culture', description: 'Rekam jejak lebih dari 12 tahun menangani proyek industri, pergudangan, dan gedung komersial.', icon: 'HardHat' },
    ],
    certifications: sectionData?.about_data?.certifications || [
      { code: 'ISO 9001:2015', title: 'Sistem Manajemen Mutu Konstruksi', issuer: 'Quality Management System Certified', desc: 'Standarisasi pengendalian mutu pengecoran, fabrikasi baja, dan ketepatan gambar kerja DED.', badgeText: 'Verified QMS' },
      { code: 'ISO 45001:2018 & SMK3', title: 'Keselamatan & Kesehatan Kerja (K3)', issuer: 'Occupational Health & Safety System', desc: 'Penerapan wajib APD lengkap, izin kerja risiko tinggi (PTW), dan toolbox meeting harian.', badgeText: 'Zero Accident' },
      { code: 'SBUJK & GAPENSI', title: 'Sertifikat Badan Usaha Jasa Konstruksi', issuer: 'Anggota Resmi GAPENSI & Terdaftar LPSE', desc: 'Legalitas penuh untuk mengikuti tender korporasi swasta nasional, BUMN, dan instansi pemerintah.', badgeText: 'Active License' },
    ],
    client_sectors: sectionData?.about_data?.client_sectors || [
      { name: 'Kawasan Industri & Manufaktur', region: 'Cikarang • Karawang • Bekasi' },
      { name: 'Pergudangan & Cold-Storage Logistik', region: 'Jabodetabek • Subang • Banten' },
      { name: 'Gedung Perkantoran & Ruko Komersial', region: 'Jakarta • Bandung • Jawa Barat' },
      { name: 'Fasilitas Pendidikan & Rumah Sakit', region: 'Jawa Barat • Jawa Tengah • Nasional' },
      { name: 'Infrastruktur Jalan Beton & Drainase', region: 'Kawasan Niaga & Proyek Pemerintah' },
    ],
  });

  const [estimatorForm, setEstimatorForm] = useState({
    badge: sectionData?.estimator_data?.badge || 'Kalkulator Biaya Proyek',
    title: sectionData?.estimator_data?.title || 'Simulasi Estimasi Rencana Anggaran Biaya (RAB)',
    subtitle: sectionData?.estimator_data?.subtitle || 'Dapatkan estimasi awal biaya pembangunan proyek Anda secara transparan berdasarkan luas bangunan dan spesifikasi mutu material berstandar SNI.',
    rate_gudang: sectionData?.estimator_data?.building_options?.find((b) => b.id === 'gudang')?.baseRatePerM2 || 3600000,
    rate_komersial: sectionData?.estimator_data?.building_options?.find((b) => b.id === 'komersial')?.baseRatePerM2 || 5200000,
    rate_residensial: sectionData?.estimator_data?.building_options?.find((b) => b.id === 'residensial')?.baseRatePerM2 || 5800000,
    rate_renovasi: sectionData?.estimator_data?.building_options?.find((b) => b.id === 'renovasi')?.baseRatePerM2 || 2800000,
  });

  const [workflowForm, setWorkflowForm] = useState({
    badge: sectionData?.workflow_data?.badge || 'Metodologi Kerja',
    title: sectionData?.workflow_data?.title || 'Standar Eksekusi Proyek Yang Terukur & Akuntabel',
    subtitle: sectionData?.workflow_data?.subtitle || 'Kami menerapkan tata kelola konstruksi modern untuk memastikan zero-miscommunication, menghindari biaya membengkak, dan mencapai target serah terima tepat waktu.',
    steps: sectionData?.workflow_data?.steps || [
      { number: '01', title: 'Survei & Analisis Struktur', icon: 'ClipboardCheck', description: 'Pengukuran topografi, pengujian daya dukung tanah (soil test), dan diskusi kebutuhan spesifikasi teknis.' },
      { number: '02', title: 'DED & Transparansi RAB', icon: 'FileSpreadsheet', description: 'Pembuatan gambar kerja DED (Detail Engineering Design), jadwal kurva-S, dan kontrak perjanjian kerja mengikat.' },
      { number: '03', title: 'Konstruksi Berstandar K3', icon: 'ShieldAlert', description: 'Eksekusi lapangan dengan material SNI teruji lab, pengawasan mandor ahli, dan kepatuhan keselamatan zero-accident.' },
      { number: '04', title: 'Handover & Masa Retensi', icon: 'KeyRound', description: 'Berita acara serah terima resmi (BAST 1 & 2), as-built drawing, serta jaminan garansi pemeliharaan struktural.' },
    ],
  });

  const [proksiForm, setProksiForm] = useState({
    badge: sectionData?.proksi_data?.badge || 'Teknologi Ekosistem Digital WSM',
    title_prefix: sectionData?.proksi_data?.title_prefix || 'Ekosistem Aplikasi',
    title_highlight: sectionData?.proksi_data?.title_highlight || 'PROKSI',
    title_suffix: sectionData?.proksi_data?.title_suffix || '(Proyek Konstruksi)',
    subtitle: sectionData?.proksi_data?.subtitle || 'Seluruh proyek konstruksi kami diawasi langsung secara real-time berbasis Automated Digitalization. Pemilik proyek (owner) memiliki hak akses mandiri untuk memantau kurva-S harian, jadwal Gantt Chart, kepatuhan K3, dan log foto progres lapangan tanpa manipulasi data.',
    scurve_plan: sectionData?.proksi_data?.scurve_plan || '64.50%',
    scurve_actual: sectionData?.proksi_data?.scurve_actual || '68.20%',
    scurve_deviation: sectionData?.proksi_data?.scurve_deviation || '+3.70%',
    zero_accident_days: sectionData?.proksi_data?.zero_accident_days || 428,
    apd_compliance: sectionData?.proksi_data?.apd_compliance || '99.8%',
    ptw_active: sectionData?.proksi_data?.ptw_active || 14,
  });

  const [metaForms, setMetaForms] = useState({
    services_meta: {
      badge: sectionData?.services_meta?.badge || 'Layanan Konstruksi Terpadu',
      title: sectionData?.services_meta?.title || 'Solusi Total Rancang Bangun & Rekayasa Sipil',
      subtitle: sectionData?.services_meta?.subtitle || 'Dari perencanaan konseptual, perhitungan struktur tahan gempa, hingga pelaksanaan konstruksi di lapangan dengan standar mutu terjamin.',
    },
    portfolio_meta: {
      badge: sectionData?.portfolio_meta?.badge || 'Portofolio Terpercaya',
      title: sectionData?.portfolio_meta?.title || 'Rekam Jejak Karya Konstruksi & Rekayasa Sipil',
      subtitle: sectionData?.portfolio_meta?.subtitle || 'Jelajahi portofolio proyek selesai dan sedang berjalan yang telah kami kerjakan dengan komitmen mutu tinggi dan ketepatan waktu.',
      show_project_value: sectionData?.portfolio_meta?.show_project_value ?? true,
    },
    testimonials_meta: {
      badge: sectionData?.testimonials_meta?.badge || 'Testimoni Klien',
      title: sectionData?.testimonials_meta?.title || 'Kepercayaan Klien Adalah Tolok Ukur Keberhasilan Kami',
      subtitle: sectionData?.testimonials_meta?.subtitle || 'Ulasan jujur dari para pemimpin perusahaan dan pemilik proyek yang telah mempercayakan pembangunan fasilitas mereka kepada CV. Wahana Sinergi Mitra.',
    },
    inquiry_meta: {
      badge: sectionData?.inquiry_meta?.badge || 'Konsultasi Gratis',
      title: sectionData?.inquiry_meta?.title || 'Rencanakan Proyek Impian Anda Bersama Kami',
      subtitle: sectionData?.inquiry_meta?.subtitle || 'Konsultasikan kebutuhan konstruksi Anda dengan tim engineer ahli kami. Dapatkan analisis kelayakan awal, estimasi biaya akurat, dan jadwal pelaksanaan yang realistis.',
    },
  });

  const handleToggleSection = (sectionKey) => {
    const nextVal = !sectionVisibility[sectionKey];
    setSectionVisibility((prev) => ({ ...prev, [sectionKey]: nextVal }));
    router.post(
      '/admin/sections/visibility',
      { section: sectionKey, is_visible: nextVal },
      { preserveScroll: true, preserveState: true }
    );
  };

  const handleSaveHeroSection = (e) => {
    e.preventDefault();
    if (isAnyImageUploading) return;
    router.post('/admin/sections/hero', { data: heroForm }, { preserveScroll: true });
  };

  const handleSaveAboutSection = (e) => {
    e.preventDefault();
    if (isAnyImageUploading) return;
    router.post('/admin/sections/about_data', { data: aboutForm }, { preserveScroll: true });
  };

  const handleSaveEstimatorSection = (e) => {
    e.preventDefault();
    const updatedOptions = [
      { id: 'gudang', label: 'Gudang & Industri', icon: 'Warehouse', baseRatePerM2: Number(estimatorForm.rate_gudang), description: 'Struktur baja WF, pelat beton heavy-duty, atap zincalume' },
      { id: 'komersial', label: 'Komersial / Ruko / Kantor', icon: 'Building2', baseRatePerM2: Number(estimatorForm.rate_komersial), description: 'Struktur beton bertulang, fasad ACP/kaca, partisi rapi' },
      { id: 'residensial', label: 'Hunian Residensial', icon: 'Home', baseRatePerM2: Number(estimatorForm.rate_residensial), description: 'Kusen aluminium powder coating, granit 60x60, sanitary Toto' },
      { id: 'renovasi', label: 'Renovasi & Retrofitting', icon: 'Wrench', baseRatePerM2: Number(estimatorForm.rate_renovasi), description: 'Peremajaan fasad, perkuatan struktur, utilitas MEP baru' },
    ];
    router.post('/admin/sections/estimator_data', {
      data: {
        badge: estimatorForm.badge,
        title: estimatorForm.title,
        subtitle: estimatorForm.subtitle,
        building_options: updatedOptions,
      }
    }, { preserveScroll: true });
  };

  const handleSaveWorkflowSection = (e) => {
    e.preventDefault();
    router.post('/admin/sections/workflow_data', { data: workflowForm }, { preserveScroll: true });
  };

  const handleSaveProksiSection = (e) => {
    e.preventDefault();
    router.post('/admin/sections/proksi_data', { data: proksiForm }, { preserveScroll: true });
  };

  const handleSaveMetaSection = (metaKey) => {
    router.post(`/admin/sections/${metaKey}`, { data: metaForms[metaKey] }, { preserveScroll: true });
  };

  // Profile Update Handler & Modal Opener
  const openProfileModal = () => {
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
    setProfileForm({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      current_password: '',
      password: '',
      password_confirmation: '',
    });
    setProfileModalOpen(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (profileForm.password) {
      const sec = evaluatePasswordSecurity(profileForm.password);
      if (!sec.isValid) {
        alert('Kata sandi baru harus memenuhi seluruh 5 kriteria keamanan (min. 8 digit, huruf besar, kecil, angka, dan simbol).');
        return;
      }
      if (profileForm.password !== profileForm.password_confirmation) {
        alert('Konfirmasi kata sandi baru tidak cocok dengan kata sandi baru.');
        return;
      }
      if (!profileForm.current_password) {
        alert('Harap masukkan kata sandi saat ini untuk mengonfirmasi perubahan kata sandi.');
        return;
      }
    }

    router.post('/admin/profile', profileForm, {
      preserveScroll: true,
      onSuccess: () => {
        setProfileModalOpen(false);
        setProfileForm((prev) => ({
          ...prev,
          current_password: '',
          password: '',
          password_confirmation: '',
        }));
      },
    });
  };

  // User Management Handlers (Super Admin)
  const openCreateUserModal = () => {
    setEditingUser(null);
    setUserForm({
      name: '',
      email: '',
      role: 'Editor',
      password: '',
    });
    setShowUserPassword(false);
    setUserModalOpen(true);
  };

  const openEditUserModal = (u) => {
    setEditingUser(u);
    setUserForm({
      name: u.name,
      email: u.email,
      role: u.role || 'Editor',
      password: '',
    });
    setShowUserPassword(false);
    setUserModalOpen(true);
  };

  const handleSaveUser = (e) => {
    e.preventDefault();
    if (!editingUser) {
      const sec = evaluatePasswordSecurity(userForm.password);
      if (!sec.isValid) {
        alert('Kata sandi pengguna baru harus memenuhi seluruh 5 kriteria keamanan (min. 8 digit, huruf besar, kecil, angka, dan simbol).');
        return;
      }
    } else if (userForm.password) {
      const sec = evaluatePasswordSecurity(userForm.password);
      if (!sec.isValid) {
        alert('Kata sandi baru pengguna harus memenuhi seluruh 5 kriteria keamanan (min. 8 digit, huruf besar, kecil, angka, dan simbol).');
        return;
      }
    }

    if (editingUser) {
      router.put(`/admin/users/${editingUser.id}`, userForm, {
        preserveScroll: true,
        onSuccess: () => setUserModalOpen(false),
      });
    } else {
      router.post('/admin/users', userForm, {
        preserveScroll: true,
        onSuccess: () => setUserModalOpen(false),
      });
    }
  };

  const handleDeleteUser = (u) => {
    if (confirm(`Apakah Anda yakin ingin menghapus akun pengguna "${u.name}"?`)) {
      router.delete(`/admin/users/${u.id}`, { preserveScroll: true });
    }
  };

  // Dedicated Workspace State for Forms (NO MODAL)
  const [editorMode, setEditorMode] = useState(null); // 'create-project', 'edit-project', 'create-service', 'edit-service', 'create-testimonial', 'edit-testimonial', null
  const [editingItem, setEditingItem] = useState(null);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('All');
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState('Semua');
  const [inquirySearchQuery, setInquirySearchQuery] = useState('');
  const [serviceSearchQuery, setServiceSearchQuery] = useState('');
  const [testimonialSearchQuery, setTestimonialSearchQuery] = useState('');

  // Form States
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'Komersial',
    client_name: '',
    location: '',
    project_value: '',
    year: new Date().getFullYear(),
    thumbnail_url: '',
    gallery_images: [],
    status: 'Selesai',
    description: '',
    is_featured: true,
    order: 0,
  });

  const [serviceForm, setServiceForm] = useState({
    title: '',
    icon: 'Building2',
    image_url: '',
    short_description: '',
    full_description: '',
    order: 0,
    is_active: true,
  });

  const [testimonialForm, setTestimonialForm] = useState({
    client_name: '',
    client_role: '',
    company_name: '',
    avatar_url: '',
    content: '',
    rating: 5,
    project_name: '',
    is_active: true,
    order: 0,
  });

  const [settingsForm, setSettingsForm] = useState({
    hero_stat_projects: settings.hero_stat_projects || '50+',
    hero_stat_value: settings.hero_stat_value || 'Rp 85+ Miliar',
    hero_stat_satisfaction: settings.hero_stat_satisfaction || '99.4%',
    hero_stat_safety: settings.hero_stat_safety || '1.250.000+ Jam',
    company_phone: settings.company_phone || '+62 812-3456-7890',
    company_email: settings.company_email || 'info@wahanasinergimitra.id',
    company_address: settings.company_address || '',
    company_operating_hours: settings.company_operating_hours || 'Senin – Sabtu: 08.00 – 17.00 WIB',
    company_about: settings.company_about || '',
  });

  // Handle Logout
  const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar dari panel admin?')) {
      router.post('/logout');
    }
  };

  // --- PROJECT ACTIONS ---
  const openCreateProject = () => {
    setProjectForm({
      title: '',
      category: 'Komersial',
      client_name: '',
      location: '',
      project_value: '',
      year: new Date().getFullYear(),
      thumbnail_url: '',
      gallery_images: [],
      status: 'Selesai',
      description: '',
      is_featured: true,
      order: 0,
    });
    setEditingItem(null);
    setEditorMode('project');
  };

  const openEditProject = (item) => {
    setProjectForm({
      title: item.title,
      category: item.category,
      client_name: item.client_name || '',
      location: item.location,
      project_value: item.project_value || '',
      year: item.year,
      thumbnail_url: item.thumbnail_url || '',
      gallery_images: normalizeProjectGallery(item.gallery_images),
      status: item.status,
      description: item.description || '',
      is_featured: !!item.is_featured,
      order: item.order || 0,
    });
    setEditingItem(item);
    setEditorMode('project');
  };

  const handleProjectGalleryChange = (updaterOrNext) => {
    setProjectForm((prev) => {
      const current = Array.isArray(prev.gallery_images) ? prev.gallery_images : [];
      const next = typeof updaterOrNext === 'function' ? updaterOrNext(current) : updaterOrNext;
      return { ...prev, gallery_images: Array.isArray(next) ? next : [] };
    });
  };

  const handleSetGalleryAsCover = (galleryIdx) => {
    setProjectForm((prev) => {
      const currentGallery = Array.isArray(prev.gallery_images) ? [...prev.gallery_images] : [];
      const chosen = currentGallery[galleryIdx];
      if (!chosen || !chosen.url) return prev;

      const previousCover = (prev.thumbnail_url || '').trim();
      if (previousCover && previousCover !== chosen.url && previousCover !== DEFAULT_PROJECT_PLACEHOLDER) {
        currentGallery[galleryIdx] = { url: previousCover, caption: '' };
      } else {
        currentGallery.splice(galleryIdx, 1);
      }

      return {
        ...prev,
        thumbnail_url: chosen.url,
        gallery_images: currentGallery,
      };
    });
  };

  const submitProject = (e) => {
    e.preventDefault();
    if (isAnyImageUploading) return;
    if (editingItem) {
      router.put(`/admin/projects/${editingItem.id}`, projectForm, {
        preserveScroll: true,
        onSuccess: () => setEditorMode(null),
      });
    } else {
      router.post('/admin/projects', projectForm, {
        preserveScroll: true,
        onSuccess: () => setEditorMode(null),
      });
    }
  };

  const deleteProject = (id) => {
    if (confirm('Hapus proyek ini dari database? Halaman landing page akan otomatis terupdate.')) {
      router.delete(`/admin/projects/${id}`, { preserveScroll: true });
    }
  };

  // --- SERVICE ACTIONS ---
  const openCreateService = () => {
    setServiceForm({
      title: '',
      icon: 'Building2',
      image_url: '',
      short_description: '',
      full_description: '',
      order: services.length + 1,
      is_active: true,
    });
    setEditingItem(null);
    setEditorMode('service');
  };

  const openEditService = (item) => {
    setServiceForm({
      title: item.title,
      icon: item.icon,
      image_url: item.image_url || '',
      short_description: item.short_description,
      full_description: item.full_description || '',
      order: item.order || 0,
      is_active: !!item.is_active,
    });
    setEditingItem(item);
    setEditorMode('service');
  };

  const submitService = (e) => {
    e.preventDefault();
    if (isAnyImageUploading) return;
    if (editingItem) {
      router.put(`/admin/services/${editingItem.id}`, serviceForm, {
        preserveScroll: true,
        onSuccess: () => setEditorMode(null),
      });
    } else {
      router.post('/admin/services', serviceForm, {
        preserveScroll: true,
        onSuccess: () => setEditorMode(null),
      });
    }
  };

  const deleteService = (id) => {
    if (confirm('Hapus layanan ini dari website?')) {
      router.delete(`/admin/services/${id}`, { preserveScroll: true });
    }
  };

  // --- INQUIRY ACTIONS ---
  const updateInquiryStatus = (id, newStatus) => {
    router.put(`/admin/inquiries/${id}`, { status: newStatus }, { preserveScroll: true });
  };

  const deleteInquiry = (id) => {
    if (confirm('Hapus pesan inquiry ini?')) {
      router.delete(`/admin/inquiries/${id}`, { preserveScroll: true });
    }
  };

  // --- TESTIMONIAL ACTIONS ---
  const openCreateTestimonial = () => {
    setTestimonialForm({
      client_name: '',
      client_role: '',
      company_name: '',
      avatar_url: '',
      content: '',
      rating: 5,
      project_name: '',
      is_active: true,
      order: 0,
    });
    setEditingItem(null);
    setEditorMode('testimonial');
  };

  const openEditTestimonial = (item) => {
    setTestimonialForm({
      client_name: item.client_name,
      client_role: item.client_role || '',
      company_name: item.company_name || '',
      avatar_url: item.avatar_url || '',
      content: item.content,
      rating: item.rating || 5,
      project_name: item.project_name || '',
      is_active: !!item.is_active,
      order: item.order || 0,
    });
    setEditingItem(item);
    setEditorMode('testimonial');
  };

  const submitTestimonial = (e) => {
    e.preventDefault();
    if (isAnyImageUploading) return;
    if (editingItem) {
      router.put(`/admin/testimonials/${editingItem.id}`, testimonialForm, {
        preserveScroll: true,
        onSuccess: () => setEditorMode(null),
      });
    } else {
      router.post('/admin/testimonials', testimonialForm, {
        preserveScroll: true,
        onSuccess: () => setEditorMode(null),
      });
    }
  };

  const deleteTestimonial = (id) => {
    if (confirm('Hapus ulasan testimoni ini?')) {
      router.delete(`/admin/testimonials/${id}`, { preserveScroll: true });
    }
  };

  // --- SETTINGS ACTIONS ---
  const submitSettings = (e) => {
    e.preventDefault();
    router.post('/admin/settings', settingsForm, { preserveScroll: true });
  };

  return (
    <>
      <Head title="Panel Manajemen Operasional & ERP - CV. Wahana Sinergi Mitra" />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex overflow-x-hidden selection:bg-sky-500 selection:text-white">
        
        {/* ======================================================== */}
        {/* SIDEBAR NAVIGATION (PORT-OPS & LOGIN THEME STYLING)     */}
        {/* ======================================================== */}
        <aside className="w-64 lg:w-72 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col justify-between shrink-0 fixed inset-y-0 left-0 z-30 transition-all">
          
          <div>
            {/* Top Brand Block */}
            <div className="p-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-700 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-sky-600/30 shrink-0">
                  WSM
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-white tracking-tight truncate">
                      WSM Core
                    </span>
                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">
                      ERP PRO
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DATABASE ONLINE (WAL)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="p-3.5 space-y-1">
              <button
                type="button"
                onClick={() => { setActiveTab('overview'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'overview' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Ringkasan Operasional</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('sections'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'sections' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Seksi Landing Page</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 shrink-0">
                  10
                </span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('projects'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'projects' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4" />
                  <span>Portofolio Proyek</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {projects.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('services'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'services' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <HardHat className="w-4 h-4" />
                  <span>Layanan Konstruksi</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {services.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('inquiries'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'inquiries' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquareText className="w-4 h-4" />
                  <span>Pesan Masuk (Leads RAB)</span>
                </div>
                {metrics.new_inquiries > 0 ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white animate-pulse">
                    {metrics.new_inquiries} Baru
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {inquiries.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('testimonials'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'testimonials' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Star className="w-4 h-4" />
                  <span>Testimoni Klien</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {testimonials.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('settings'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'settings' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Pengaturan Depan & Kontak</span>
                </div>
              </button>

              {/* User Management Tab (Super Admin / Management) */}
              <button
                type="button"
                onClick={() => { setActiveTab('users'); setEditorMode(null); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[-0.015em] transition-all cursor-pointer ${
                  activeTab === 'users' && !editorMode
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4" />
                  <span>Manajemen Pengguna</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {users.length || 1}
                </span>
              </button>
            </nav>
          </div>

          {/* Bottom Profile & Actions */}
          <div className="p-3.5 border-t border-slate-800 space-y-2">
            <a
              href="/"
              target="_blank"
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                <span>Kunjungi Landing Page</span>
              </div>
              <span className="text-[10px] text-slate-500">Live ↗</span>
            </a>

            <div className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={openProfileModal}
                title="Kelola Profil & Kata Sandi Saya"
                className="flex items-center gap-2.5 min-w-0 text-left hover:opacity-90 transition-opacity cursor-pointer group flex-1"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-700 text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                  {(currentUser?.name || 'A').charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-white truncate group-hover:text-sky-300 transition-colors">
                    {currentUser?.name || 'Administrator WSM'}
                  </div>
                  <div className="text-[10px] text-sky-300 truncate">
                    {currentUser?.role || 'Super Admin'} • Edit Profil
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                title="Keluar dari Panel Admin"
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

        </aside>

        {/* ======================================================== */}
        {/* MAIN CONTENT AREA (DEDICATED FULL-VIEW WORKSPACE)       */}
        {/* ======================================================== */}
        <main className="flex-1 ml-64 lg:ml-72 min-h-screen flex flex-col bg-[#F8FAFC]">
          
          {/* Top Sticky Header Bar */}
          <header className="sticky top-0 z-20 bg-white/85 backdrop-blur-md border-b border-slate-200/80 px-6 py-3.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="text-xs font-semibold text-slate-500">
                WSM Admin <span className="mx-1 text-slate-300">/</span>{' '}
                <span className="text-slate-900 font-bold capitalize">
                  {editorMode ? `Editor ${editorMode}` : (activeTab === 'users' ? 'Manajemen Pengguna' : activeTab)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={openProfileModal}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 text-[11px] font-bold text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-extrabold">
                  {(currentUser?.name || 'A').charAt(0).toUpperCase()}
                </div>
                <span>{currentUser?.name || 'Profil Saya'}</span>
                <span className="px-1.5 py-0.5 rounded text-[9.5px] font-extrabold bg-blue-100 text-blue-800">
                  {currentUser?.role || 'Admin'}
                </span>
              </button>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Production Mode</span>
              </div>
            </div>
          </header>

          {/* Flash & Validation Error Feedback Alerts */}
          {flash?.success && (
            <div className="mx-6 mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between shadow-sm animate-in fade-in">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold tracking-[-0.015em]">{flash.success}</span>
              </div>
            </div>
          )}

          {(flash?.error || errorMessages.length > 0) && (
            <div className="mx-6 mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 shadow-sm animate-in fade-in space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-800 tracking-[-0.015em]">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Gagal Menyimpan Perubahan</span>
              </div>
              {flash?.error && (
                <p className="text-xs font-medium text-rose-700 pl-6 tracking-[-0.015em]">{flash.error}</p>
              )}
              {errorMessages.length > 0 && (
                <ul className="list-disc pl-10 text-xs font-medium text-rose-700 space-y-0.5 tracking-[-0.015em]">
                  {errorMessages.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Dynamic Tab Views & Dedicated Workspace */}
          <div className="p-6 flex-1">
            
            {/* ==================================================== */}
            {/* TAB 1: OVERVIEW & DASHBOARD METRICS                  */}
            {/* ==================================================== */}
            {activeTab === 'overview' && !editorMode && (
              <div className="space-y-6">
                
                {/* Metric Summary Cards (Solid Pure White: rounded-[24px], clean shadow, solid icon squircle) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Card 1: Total Proyek */}
                  <div className="group bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-3">
                      <Text.Label title="Total Proyek Terverifikasi" singleLine className="text-slate-600 font-bold">Total Proyek</Text.Label>
                      <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Building2 className="w-[18px] h-[18px] stroke-[2]" />
                      </div>
                    </div>
                    <div>
                      <Text.Amount value={metrics.total_projects} prefix="" suffix=" Proyek" className="text-[24px] font-extrabold tracking-[-0.03em]" />
                      <div className="flex items-center justify-between gap-2 mt-1.5 pt-1.5 border-t border-slate-100">
                        <Text.Caption className="text-slate-600 font-medium truncate">Dikelola di portofolio</Text.Caption>
                        <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full shrink-0">
                          Portofolio
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Nilai Portofolio */}
                  <div className="group bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-3">
                      <Text.Label title="Total Nilai Kontrak" singleLine className="text-slate-600 font-bold">Nilai Portofolio</Text.Label>
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <TrendingUp className="w-[18px] h-[18px] stroke-[2]" />
                      </div>
                    </div>
                    <div>
                      <Text.Amount value={metrics.total_portfolio_value} className="text-[20px] font-extrabold tracking-[-0.03em]" />
                      <div className="flex items-center justify-between gap-2 mt-1.5 pt-1.5 border-t border-slate-100">
                        <Text.Caption className="text-slate-600 font-medium truncate">Total kontrak terlaksana</Text.Caption>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                          Terverifikasi
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Leads & Pesan RAB */}
                  <div className="group bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-3">
                      <Text.Label title="Pesan Masuk" singleLine className="text-slate-600 font-bold">Leads & Pesan RAB</Text.Label>
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageSquareText className="w-[18px] h-[18px] stroke-[2]" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[24px] font-extrabold text-slate-900 tracking-[-0.03em] tabular-nums flex items-center gap-2">
                        <span>{metrics.total_inquiries}</span>
                        {metrics.new_inquiries > 0 && (
                          <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                            {metrics.new_inquiries} baru
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-1.5 pt-1.5 border-t border-slate-100">
                        <Text.Caption className="text-slate-600 font-medium truncate">Form landing page & RAB</Text.Caption>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
                          Inbound
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Layanan Aktif */}
                  <div className="group bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-2 min-w-0 mb-3">
                      <Text.Label title="Layanan Konstruksi" singleLine className="text-slate-600 font-bold">Layanan Aktif</Text.Label>
                      <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <HardHat className="w-[18px] h-[18px] stroke-[2]" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[24px] font-extrabold text-slate-900 tracking-[-0.03em] tabular-nums">
                        {metrics.total_services} <span className="text-sm font-bold text-slate-600">Layanan</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-1.5 pt-1.5 border-t border-slate-100">
                        <Text.Caption className="text-slate-600 font-medium truncate">Divisi spesialisasi WSM</Text.Caption>
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full shrink-0">
                          Divisi Ahli
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Inquiries Quick Table */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text.H2 title="Leads & Konsultasi Terbaru" singleLine>
                        Leads & Konsultasi Proyek Terbaru
                      </Text.H2>
                      <Text.Caption>Pengajuan RAB dari calon pemilik proyek</Text.Caption>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('inquiries')}
                      className="text-xs font-bold text-sky-600 hover:text-sky-800"
                    >
                      Lihat Semua ({inquiries.length}) →
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 uppercase tracking-[-0.015em] border-y border-slate-100 font-bold text-[11px]">
                        <tr>
                          <th className="py-3 px-4">Nama Calon Klien</th>
                          <th className="py-3 px-4">Kategori Proyek</th>
                          <th className="py-3 px-4">Estimasi Budget</th>
                          <th className="py-3 px-4">Status Prospek</th>
                          <th className="py-3 px-4 text-right">Aksi Cepat</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {inquiries.slice(0, 5).map((inq) => (
                          <tr key={inq.id} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-3 px-4 font-bold text-slate-900">
                              {inq.client_name}
                              <div className="text-[11px] text-slate-400 font-normal">{inq.phone_wa}</div>
                            </td>
                            <td className="py-3 px-4 text-slate-700">{inq.project_type}</td>
                            <td className="py-3 px-4">
                              <Text.Amount value={inq.estimated_budget || 0} className="text-xs" />
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                inq.status === 'Baru' 
                                  ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              }`}>
                                {inq.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <a
                                href={`https://wa.me/${inq.phone_wa.replace(/\D/g, '')}?text=Halo%20${encodeURIComponent(inq.client_name)},%20kami%20dari%20CV.%20Wahana%20Sinergi%20Mitra%20terkait%20konsultasi%20proyek%20${encodeURIComponent(inq.project_type)}.`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold"
                              >
                                <PhoneCall className="w-3 h-3" />
                                <span>WhatsApp</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* ==================================================== */}
            {/* TAB: SECTIONS MANAGEMENT (SSOT & VISIBILITY)          */}
            {/* ==================================================== */}
            {activeTab === 'sections' && (
              <div className="space-y-6">
                {/* Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      <span>Centralized SSOT Manager</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 tracking-[-0.025em]">
                      Konten &amp; Tampilan Landing Page Publik
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Kendalikan visibilitas (ON/OFF) seluruh seksi secara instan dan sesuaikan teks, tarif dasar RAB, metrik teknologi PROKSI, serta alur metodologi kerja tanpa hardcoded.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors shrink-0"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-600" />
                      <span>Buka Web Publik</span>
                    </a>
                  </div>
                </div>

                {/* If an editor is active, display that specific editor workspace */}
                {activeSectionEditor ? (
                  <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveSectionEditor(null)}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                          <Text.Label className="text-blue-600">Editor Konten Seksi</Text.Label>
                          <Text.H2 className="text-[18px]">
                            {activeSectionEditor === 'hero' && 'Seksi Banner Hero Utama & 4 Slide Foto'}
                            {activeSectionEditor === 'about_data' && 'Seksi Tentang Kami, 5 Pilar & Kredibilitas'}
                            {activeSectionEditor === 'estimator' && 'Kalkulator Simulasi Estimasi RAB'}
                            {activeSectionEditor === 'workflow' && 'Seksi Metodologi Kerja & Tahapan Proyek'}
                            {activeSectionEditor === 'proksi' && 'Seksi Ekosistem Aplikasi PROKSI'}
                            {activeSectionEditor === 'services_meta' && 'Header Seksi Layanan Konstruksi'}
                            {activeSectionEditor === 'portfolio_meta' && 'Header Seksi Portofolio Proyek'}
                            {activeSectionEditor === 'testimonials_meta' && 'Header Seksi Testimoni Klien'}
                            {activeSectionEditor === 'inquiry_meta' && 'Header Seksi Formulir Konsultasi'}
                          </Text.H2>
                        </div>
                      </div>
                    </div>

                    {/* HERO EDITOR */}
                    {activeSectionEditor === 'hero' && (
                      <form onSubmit={handleSaveHeroSection} className="space-y-5 max-w-3xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Badge Teks (Overline)
                            </label>
                            <input
                              type="text"
                              value={heroForm.badge}
                              onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Judul Baris 1 (Hitam Pekat)
                            </label>
                            <input
                              type="text"
                              value={heroForm.title_line1}
                              onChange={(e) => setHeroForm({ ...heroForm, title_line1: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Judul Baris 2 (Gradien Aksen Biru-Hijau)
                          </label>
                          <input
                            type="text"
                            value={heroForm.title_line2}
                            onChange={(e) => setHeroForm({ ...heroForm, title_line2: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Deskripsi / Subtitle Hero
                          </label>
                          <textarea
                            rows={3}
                            value={heroForm.description}
                            onChange={(e) => setHeroForm({ ...heroForm, description: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Teks Tombol CTA Utama
                            </label>
                            <input
                              type="text"
                              value={heroForm.cta_primary_text}
                              onChange={(e) => setHeroForm({ ...heroForm, cta_primary_text: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Link Tombol CTA Utama
                            </label>
                            <input
                              type="text"
                              value={heroForm.cta_primary_link}
                              onChange={(e) => setHeroForm({ ...heroForm, cta_primary_link: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Teks Tombol CTA Sekunder
                            </label>
                            <input
                              type="text"
                              value={heroForm.cta_secondary_text}
                              onChange={(e) => setHeroForm({ ...heroForm, cta_secondary_text: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Link Tombol CTA Sekunder
                            </label>
                            <input
                              type="text"
                              value={heroForm.cta_secondary_link}
                              onChange={(e) => setHeroForm({ ...heroForm, cta_secondary_link: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                        </div>

                        {/* 4-Slide Photo Slider Editor */}
                        <div className="pt-5 border-t border-slate-100 space-y-4">
                          <div>
                            <Text.Label className="text-blue-600 block mb-1">
                              Kelola 4 Slide Foto Konstruksi Hero
                            </Text.Label>
                            <Text.Caption className="text-slate-600">
                              Unggah foto proyek lapangan atau masukkan URL gambar beserta caption untuk slider otomatis di bagian Hero.
                            </Text.Caption>
                          </div>

                          <div className="space-y-4">
                            {(heroForm.slides || []).map((slide, sIdx) => (
                              <div key={slide.id || sIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-extrabold text-slate-800">
                                    Slide #{sIdx + 1}
                                  </span>
                                  <span className="text-[11px] font-semibold text-slate-500">
                                    {slide.location || 'Lokasi Proyek'}
                                  </span>
                                </div>

                                <ImageUploader
                                  value={slide.image}
                                  onChange={(url) => {
                                    setHeroForm((prev) => ({
                                      ...prev,
                                      slides: (prev.slides || []).map((item, idx) =>
                                        idx === sIdx ? { ...item, image: url } : item
                                      ),
                                    }));
                                  }}
                                  onUploadingChange={handleUploaderBusyChange}
                                  folder="general"
                                  aspect="landscape"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div>
                                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                      Tag Sertifikasi / Kategori
                                    </label>
                                    <input
                                      type="text"
                                      value={slide.tag || ''}
                                      onChange={(e) => {
                                        const next = [...heroForm.slides];
                                        next[sIdx] = { ...next[sIdx], tag: e.target.value };
                                        setHeroForm({ ...heroForm, slides: next });
                                      }}
                                      className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                      Lokasi / Wilayah
                                    </label>
                                    <input
                                      type="text"
                                      value={slide.location || ''}
                                      onChange={(e) => {
                                        const next = [...heroForm.slides];
                                        next[sIdx] = { ...next[sIdx], location: e.target.value };
                                        setHeroForm({ ...heroForm, slides: next });
                                      }}
                                      className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                      Judul / Caption Dokumentasi
                                    </label>
                                    <input
                                      type="text"
                                      value={slide.caption || ''}
                                      onChange={(e) => {
                                        const next = [...heroForm.slides];
                                        next[sIdx] = { ...next[sIdx], caption: e.target.value };
                                        setHeroForm({ ...heroForm, slides: next });
                                      }}
                                      className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                      Fokus Spesialisasi Slide
                                    </label>
                                    <input
                                      type="text"
                                      value={slide.sector || ''}
                                      onChange={(e) => {
                                        const next = [...heroForm.slides];
                                        next[sIdx] = { ...next[sIdx], sector: e.target.value };
                                        setHeroForm({ ...heroForm, slides: next });
                                      }}
                                      className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="submit"
                            disabled={isAnyImageUploading}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-blue-600/20 cursor-pointer"
                          >
                            {isAnyImageUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            <span>{isAnyImageUploading ? 'Menunggu Upload Selesai...' : 'Simpan Konten Hero'}</span>
                          </button>
                        </div>
                      </form>
                    )}

                    {/* ABOUT & CREDIBILITY EDITOR */}
                    {activeSectionEditor === 'about_data' && (
                      <form onSubmit={handleSaveAboutSection} className="space-y-6 max-w-4xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Badge Overline
                            </label>
                            <input
                              type="text"
                              value={aboutForm.badge}
                              onChange={(e) => setAboutForm({ ...aboutForm, badge: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Pengalaman (Highlight Card)
                            </label>
                            <input
                              type="text"
                              value={aboutForm.experience_years}
                              onChange={(e) => setAboutForm({ ...aboutForm, experience_years: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Judul Utama (Gunakan &#123;kata&#125; untuk highlight gradien)
                          </label>
                          <input
                            type="text"
                            value={aboutForm.title}
                            onChange={(e) => setAboutForm({ ...aboutForm, title: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Paragraf Pendukung / Engineering & PROKSI
                          </label>
                          <textarea
                            rows={3}
                            value={aboutForm.subtitle}
                            onChange={(e) => setAboutForm({ ...aboutForm, subtitle: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-2">
                              Foto Utama Proyek (Kolom Kanan Besar)
                            </label>
                            <ImageUploader
                              value={aboutForm.photo_main_url}
                              onChange={(url) => setAboutForm((prev) => ({ ...prev, photo_main_url: url }))}
                              onUploadingChange={handleUploaderBusyChange}
                              folder="general"
                              aspect="landscape"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-2">
                              Foto Sekunder Inspeksi K3 / HSE
                            </label>
                            <ImageUploader
                              value={aboutForm.photo_secondary_url}
                              onChange={(url) => setAboutForm((prev) => ({ ...prev, photo_secondary_url: url }))}
                              onUploadingChange={handleUploaderBusyChange}
                              folder="general"
                              aspect="landscape"
                            />
                          </div>
                        </div>

                        {/* 5 Pillars */}
                        <div className="pt-4 border-t border-slate-100 space-y-3">
                          <Text.Label className="text-blue-600 block">5 Pilar Keunggulan Eksekusi WSM</Text.Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {(aboutForm.pillars || []).map((pillar, pIdx) => (
                              <div key={pillar.code || pIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                                <span className="text-[11px] font-extrabold text-blue-700">Pilar {pillar.code}</span>
                                <input
                                  type="text"
                                  value={pillar.title}
                                  onChange={(e) => {
                                    const next = [...aboutForm.pillars];
                                    next[pIdx] = { ...next[pIdx], title: e.target.value };
                                    setAboutForm({ ...aboutForm, pillars: next });
                                  }}
                                  placeholder="Judul Pilar"
                                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
                                />
                                <input
                                  type="text"
                                  value={pillar.subtitle}
                                  onChange={(e) => {
                                    const next = [...aboutForm.pillars];
                                    next[pIdx] = { ...next[pIdx], subtitle: e.target.value };
                                    setAboutForm({ ...aboutForm, pillars: next });
                                  }}
                                  placeholder="Subjudul"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                                />
                                <textarea
                                  rows={2}
                                  value={pillar.description}
                                  onChange={(e) => {
                                    const next = [...aboutForm.pillars];
                                    next[pIdx] = { ...next[pIdx], description: e.target.value };
                                    setAboutForm({ ...aboutForm, pillars: next });
                                  }}
                                  placeholder="Deskripsi"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 3 Certifications */}
                        <div className="pt-4 border-t border-slate-100 space-y-3">
                          <Text.Label className="text-emerald-700 block">3 Kartu Sertifikasi & Legalitas</Text.Label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {(aboutForm.certifications || []).map((cert, cIdx) => (
                              <div key={cIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                                <input
                                  type="text"
                                  value={cert.code}
                                  onChange={(e) => {
                                    const next = [...aboutForm.certifications];
                                    next[cIdx] = { ...next[cIdx], code: e.target.value };
                                    setAboutForm({ ...aboutForm, certifications: next });
                                  }}
                                  placeholder="Kode Sertifikasi"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-blue-700"
                                />
                                <input
                                  type="text"
                                  value={cert.title}
                                  onChange={(e) => {
                                    const next = [...aboutForm.certifications];
                                    next[cIdx] = { ...next[cIdx], title: e.target.value };
                                    setAboutForm({ ...aboutForm, certifications: next });
                                  }}
                                  placeholder="Nama Sertifikasi"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
                                />
                                <input
                                  type="text"
                                  value={cert.badgeText}
                                  onChange={(e) => {
                                    const next = [...aboutForm.certifications];
                                    next[cIdx] = { ...next[cIdx], badgeText: e.target.value };
                                    setAboutForm({ ...aboutForm, certifications: next });
                                  }}
                                  placeholder="Badge Status"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-emerald-700"
                                />
                                <textarea
                                  rows={2}
                                  value={cert.desc}
                                  onChange={(e) => {
                                    const next = [...aboutForm.certifications];
                                    next[cIdx] = { ...next[cIdx], desc: e.target.value };
                                    setAboutForm({ ...aboutForm, certifications: next });
                                  }}
                                  placeholder="Keterangan"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 5 Client Sectors */}
                        <div className="pt-4 border-t border-slate-100 space-y-3">
                          <Text.Label className="text-slate-700 block">5 Sektor Industri & Pemberi Tugas</Text.Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {(aboutForm.client_sectors || []).map((sec, idx) => (
                              <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 gap-2">
                                <input
                                  type="text"
                                  value={sec.name}
                                  onChange={(e) => {
                                    const next = [...aboutForm.client_sectors];
                                    next[idx] = { ...next[idx], name: e.target.value };
                                    setAboutForm({ ...aboutForm, client_sectors: next });
                                  }}
                                  placeholder="Nama Sektor"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
                                />
                                <input
                                  type="text"
                                  value={sec.region}
                                  onChange={(e) => {
                                    const next = [...aboutForm.client_sectors];
                                    next[idx] = { ...next[idx], region: e.target.value };
                                    setAboutForm({ ...aboutForm, client_sectors: next });
                                  }}
                                  placeholder="Wilayah Operasional"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-600"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="submit"
                            disabled={isAnyImageUploading}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-blue-600/20 cursor-pointer"
                          >
                            {isAnyImageUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            <span>{isAnyImageUploading ? 'Menunggu Upload Selesai...' : 'Simpan Konten Tentang Kami'}</span>
                          </button>
                        </div>
                      </form>
                    )}

                    {/* ESTIMATOR RAB EDITOR */}
                    {activeSectionEditor === 'estimator' && (
                      <form onSubmit={handleSaveEstimatorSection} className="space-y-5 max-w-3xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Badge Teks
                            </label>
                            <input
                              type="text"
                              value={estimatorForm.badge}
                              onChange={(e) => setEstimatorForm({ ...estimatorForm, badge: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Judul Seksi
                            </label>
                            <input
                              type="text"
                              value={estimatorForm.title}
                              onChange={(e) => setEstimatorForm({ ...estimatorForm, title: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                            <p className="text-[11px] text-slate-500 mt-1">Gunakan <code>{'{kata}'}</code> untuk warna gradien (contoh: <code>Simulasi Estimasi Rencana {'{Anggaran Biaya (RAB)}'}</code>).</p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Subjudul / Deskripsi Seksi
                          </label>
                          <textarea
                            rows={2}
                            value={estimatorForm.subtitle}
                            onChange={(e) => setEstimatorForm({ ...estimatorForm, subtitle: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        <div className="pt-2">
                          <Text.Label className="text-emerald-700 block mb-3">
                            Tarif Dasar Biaya per M2 (Rp) - Digunakan untuk Rumus Perhitungan Otomatis
                          </Text.Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Gudang & Industri (Rp/m²)
                              </label>
                              <CurrencyInput
                                value={estimatorForm.rate_gudang}
                                onChange={(val) => setEstimatorForm({ ...estimatorForm, rate_gudang: val })}
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Komersial / Ruko / Kantor (Rp/m²)
                              </label>
                              <CurrencyInput
                                value={estimatorForm.rate_komersial}
                                onChange={(val) => setEstimatorForm({ ...estimatorForm, rate_komersial: val })}
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Hunian Residensial (Rp/m²)
                              </label>
                              <CurrencyInput
                                value={estimatorForm.rate_residensial}
                                onChange={(val) => setEstimatorForm({ ...estimatorForm, rate_residensial: val })}
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Renovasi & Retrofitting (Rp/m²)
                              </label>
                              <CurrencyInput
                                value={estimatorForm.rate_renovasi}
                                onChange={(val) => setEstimatorForm({ ...estimatorForm, rate_renovasi: val })}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 cursor-pointer"
                          >
                            <Save className="w-4 h-4" />
                            <span>Simpan Tarif & Pengaturan RAB</span>
                          </button>
                        </div>
                      </form>
                    )}

                    {/* WORKFLOW METODOLOGI EDITOR */}
                    {activeSectionEditor === 'workflow' && (
                      <form onSubmit={handleSaveWorkflowSection} className="space-y-5 max-w-3xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Badge Teks
                            </label>
                            <input
                              type="text"
                              value={workflowForm.badge}
                              onChange={(e) => setWorkflowForm({ ...workflowForm, badge: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Judul Seksi
                            </label>
                            <input
                              type="text"
                              value={workflowForm.title}
                              onChange={(e) => setWorkflowForm({ ...workflowForm, title: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                            <p className="text-[11px] text-slate-500 mt-1">Gunakan <code>{'{kata}'}</code> untuk warna gradien (contoh: <code>Standar Eksekusi Proyek Yang {'{Terukur & Akuntabel}'}</code>).</p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Subjudul / Deskripsi Seksi
                          </label>
                          <textarea
                            rows={2}
                            value={workflowForm.subtitle}
                            onChange={(e) => setWorkflowForm({ ...workflowForm, subtitle: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        <div className="space-y-4 pt-2">
                          <Text.Label className="text-blue-700 block">4 Langkah Utama Eksekusi Proyek</Text.Label>
                          {workflowForm.steps.map((st, i) => (
                            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                                  {st.number}
                                </span>
                                <input
                                  type="text"
                                  value={st.title}
                                  onChange={(e) => {
                                    const nextSteps = [...workflowForm.steps];
                                    nextSteps[i] = { ...nextSteps[i], title: e.target.value };
                                    setWorkflowForm({ ...workflowForm, steps: nextSteps });
                                  }}
                                  placeholder="Judul Tahap"
                                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-900"
                                />
                              </div>
                              <textarea
                                rows={2}
                                value={st.description}
                                onChange={(e) => {
                                  const nextSteps = [...workflowForm.steps];
                                  nextSteps[i] = { ...nextSteps[i], description: e.target.value };
                                  setWorkflowForm({ ...workflowForm, steps: nextSteps });
                                }}
                                placeholder="Deskripsi rinci langkah"
                                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 cursor-pointer"
                          >
                            <Save className="w-4 h-4" />
                            <span>Simpan Tahapan Metodologi</span>
                          </button>
                        </div>
                      </form>
                    )}

                    {/* PROKSI ECOSYSTEM EDITOR */}
                    {activeSectionEditor === 'proksi' && (
                      <form onSubmit={handleSaveProksiSection} className="space-y-5 max-w-3xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Badge Teks
                            </label>
                            <input
                              type="text"
                              value={proksiForm.badge}
                              onChange={(e) => setProksiForm({ ...proksiForm, badge: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Highlight Kata Kunci (Warna Gradien)
                            </label>
                            <input
                              type="text"
                              value={proksiForm.title_highlight}
                              onChange={(e) => setProksiForm({ ...proksiForm, title_highlight: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Subjudul / Narasi Ekosistem PROKSI
                          </label>
                          <textarea
                            rows={3}
                            value={proksiForm.subtitle}
                            onChange={(e) => setProksiForm({ ...proksiForm, subtitle: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        <div className="pt-2">
                          <Text.Label className="text-sky-700 block mb-3">Metrik Live Demo Simulator PROKSI</Text.Label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Kurva-S Rencana (Plan)
                              </label>
                              <input
                                type="text"
                                value={proksiForm.scurve_plan}
                                onChange={(e) => setProksiForm({ ...proksiForm, scurve_plan: e.target.value })}
                                placeholder="64.50%"
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Kurva-S Aktual (Real)
                              </label>
                              <input
                                type="text"
                                value={proksiForm.scurve_actual}
                                onChange={(e) => setProksiForm({ ...proksiForm, scurve_actual: e.target.value })}
                                placeholder="68.20%"
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Deviasi Kurva-S
                              </label>
                              <input
                                type="text"
                                value={proksiForm.scurve_deviation}
                                onChange={(e) => setProksiForm({ ...proksiForm, scurve_deviation: e.target.value })}
                                placeholder="+3.70%"
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Hari Kerja Aman (Zero Accident)
                              </label>
                              <input
                                type="number"
                                value={proksiForm.zero_accident_days}
                                onChange={(e) => setProksiForm({ ...proksiForm, zero_accident_days: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Kepatuhan APD Lapangan
                              </label>
                              <input
                                type="text"
                                value={proksiForm.apd_compliance}
                                onChange={(e) => setProksiForm({ ...proksiForm, apd_compliance: e.target.value })}
                                placeholder="99.8%"
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                                Izin Kerja Aktif (PTW)
                              </label>
                              <input
                                type="number"
                                value={proksiForm.ptw_active}
                                onChange={(e) => setProksiForm({ ...proksiForm, ptw_active: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 cursor-pointer"
                          >
                            <Save className="w-4 h-4" />
                            <span>Simpan Metrik PROKSI</span>
                          </button>
                        </div>
                      </form>
                    )}

                    {/* GENERIC META EDITORS (SERVICES, PORTFOLIO, TESTIMONIALS, INQUIRY) */}
                    {['services_meta', 'portfolio_meta', 'testimonials_meta', 'inquiry_meta'].includes(activeSectionEditor) && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSaveMetaSection(activeSectionEditor);
                        }}
                        className="space-y-5 max-w-3xl"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Badge Teks (Overline)
                            </label>
                            <input
                              type="text"
                              value={metaForms[activeSectionEditor]?.badge || ''}
                              onChange={(e) => setMetaForms({
                                ...metaForms,
                                [activeSectionEditor]: { ...metaForms[activeSectionEditor], badge: e.target.value },
                              })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                              Judul Utama Seksi
                            </label>
                            <input
                              type="text"
                              value={metaForms[activeSectionEditor]?.title || ''}
                              onChange={(e) => setMetaForms({
                                ...metaForms,
                                [activeSectionEditor]: { ...metaForms[activeSectionEditor], title: e.target.value },
                              })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                            />
                            <p className="text-[11px] text-slate-500 mt-1">Gunakan <code>{'{kata}'}</code> untuk warna gradien (contoh: <code>Solusi Total Rancang Bangun & {'{Rekayasa Sipil}'}</code>).</p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                            Subjudul / Keterangan Seksi
                          </label>
                          <textarea
                            rows={3}
                            value={metaForms[activeSectionEditor]?.subtitle || ''}
                            onChange={(e) => setMetaForms({
                              ...metaForms,
                              [activeSectionEditor]: { ...metaForms[activeSectionEditor], subtitle: e.target.value },
                            })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                          />
                        </div>

                        {/* Dedicated Toggle for Portfolio Project Value (Visible / Invisible) */}
                        {activeSectionEditor === 'portfolio_meta' && (
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <label className="text-[13px] font-bold text-slate-800">
                                  Tampilkan Kolom Nilai Kontrak (Rp) di Publik &amp; Tabel
                                </label>
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  metaForms.portfolio_meta?.show_project_value !== false
                                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                                    : 'bg-amber-100 text-amber-700 border border-amber-300'
                                }`}>
                                  {metaForms.portfolio_meta?.show_project_value !== false ? 'VISIBLE' : 'INVISIBLE'}
                                </span>
                              </div>
                              <p className="text-[12px] text-slate-500 max-w-xl">
                                Jika aktif (Visible), nominal nilai kontrak dan akumulasi total akan tampil di tabel publik &amp; portofolio. Jika nonaktif (Invisible), kolom nilai proyek disembunyikan untuk menjaga privasi anggaran klien.
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const currentVal = metaForms.portfolio_meta?.show_project_value !== false;
                                setMetaForms({
                                  ...metaForms,
                                  portfolio_meta: {
                                    ...metaForms.portfolio_meta,
                                    show_project_value: !currentVal,
                                  },
                                });
                              }}
                              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                metaForms.portfolio_meta?.show_project_value !== false ? 'bg-emerald-600' : 'bg-slate-300'
                              }`}
                              role="switch"
                              aria-checked={metaForms.portfolio_meta?.show_project_value !== false}
                            >
                              <span
                                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                                  metaForms.portfolio_meta?.show_project_value !== false ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              />
                            </button>
                          </div>
                        )}

                        <div className="pt-4 flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 cursor-pointer"
                          >
                            <Save className="w-4 h-4" />
                            <span>Simpan Pengaturan Header Seksi</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                ) : (
                  /* Vertical Accordion Carousel Deck for Section Manager */
                  <div className="space-y-4 max-w-5xl">
                    {/* Header Controls for Carousel */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                          10
                        </div>
                        <div>
                          <Text.Label className="text-blue-600 block">Vertical Section Carousel</Text.Label>
                          <span className="text-xs font-bold text-slate-800">
                            Struktur Seksi Publik Landing Page (SSOT)
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setExpandedSection(expandedSection ? null : 'hero')}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                        >
                          {expandedSection ? 'Tutup Semua' : 'Buka Seksi #1 (Hero)'}
                        </button>
                        <a
                          href="/"
                          target="_blank"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors"
                        >
                          <span>Lihat Web Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Vertical Cards Deck */}
                    <div className="space-y-3">
                      {[
                        {
                          key: 'hero',
                          title: 'Hero Banner & 4-Slide Foto',
                          subtitle: 'Seksi sambutan paling atas dengan slider 4 foto proyek dan tombol CTA.',
                          description: 'Menampilkan headline utama, narasi keunggulan, 4 foto dokumentasi konstruksi beresolusi tinggi, metrik pencapaian (50+ proyek, Rp 85+ M, 1.25M jam aman), serta tombol WhatsApp konsultasi.',
                          icon: Sparkles,
                          editorKey: 'hero',
                          badge: 'SLIDE DOKUMENTASI & KPI',
                        },
                        {
                          key: 'about',
                          title: 'Tentang Kami & Kredibilitas',
                          subtitle: 'Profil perusahaan, narasi dedikasi, 5 pilar keunggulan, & sertifikasi.',
                          description: 'Seksi kredibilitas korporat: narasi legalitas kontraktor, jam terbang tim engineer SKA/SKT, 5 Pilar Keunggulan, sertifikasi ISO 9001/45001/GAPENSI, dan 5 sektor klien.',
                          icon: Award,
                          editorKey: 'about_data',
                          badge: 'PROFIL & 5 PILAR',
                        },
                        {
                          key: 'services',
                          title: 'Layanan Konstruksi',
                          subtitle: 'Daftar layanan spesialisasi sipil, baja WF, dan rekayasa struktur.',
                          description: 'Showcase layanan berlatar foto proyek royal-blue yang menampilkan standar SNI, sertifikasi material, dan kartu spesifikasi teknis mendalam.',
                          icon: HardHat,
                          editorKey: 'services_meta',
                          badge: 'LAYANAN TERPADU',
                        },
                        {
                          key: 'estimator',
                          title: 'Kalkulator Simulasi RAB',
                          subtitle: 'Perhitungan estimasi biaya otomatis per m2 untuk calon klien.',
                          description: 'Simulator transparan estimasi rencana anggaran biaya (RAB) berdasarkan 4 tipe bangunan (Gudang, Komersial, Residensial, Renovasi) dan 3 tier spesifikasi mutu material.',
                          icon: Calculator,
                          editorKey: 'estimator',
                          badge: 'SIMULATOR INTERAKTIF',
                        },
                        {
                          key: 'portfolio',
                          title: 'Portofolio & Rekam Jejak',
                          subtitle: 'Galeri proyek komersial, pergudangan, perumahan, & tabel kontrak resmi.',
                          description: 'Seksi portofolio dual-mode: galeri visual foto proyek berfilter kategori serta tabel data pengalaman kerja (official contract ledger).',
                          icon: Building2,
                          editorKey: 'portfolio_meta',
                          badge: 'DUAL-MODE PORTOFOLIO',
                        },
                        {
                          key: 'workflow',
                          title: 'Metodologi Kerja',
                          subtitle: 'Tahapan eksekusi proyek 01 s/d 04 berstandar mutu dan K3.',
                          description: 'Menampilkan alur SOP rancang bangun terukur: Survei & Analisis Struktur, DED & Transparansi RAB, Konstruksi K3, hingga Handover & BAST 1-2.',
                          icon: Layers,
                          editorKey: 'workflow',
                          badge: 'METODOLOGI K3',
                        },
                        {
                          key: 'proksi',
                          title: 'Ekosistem Aplikasi PROKSI',
                          subtitle: 'Simulator Kurva-S real-time, Portal Klien 24/7, dan K3 digital.',
                          description: 'Fitur pemantauan proyek digital eksklusif WSM dengan visualisasi deviasi kurva-S, log jam aman K3, dan akuntabilitas pekerjaan lapangan.',
                          icon: Laptop,
                          editorKey: 'proksi',
                          badge: 'DIGITAL ECOSYSTEM',
                        },
                        {
                          key: 'testimonials',
                          title: 'Testimoni Klien',
                          subtitle: 'Ulasan dan tingkat kepuasan dari para pemilik proyek (owner).',
                          description: 'Ulasan nyata dan rekomendasi dari para pimpinan perusahaan mitra yang telah menyelesaikan proyek pembangunan bersama CV. Wahana Sinergi Mitra.',
                          icon: Star,
                          editorKey: 'testimonials_meta',
                          badge: 'KEPUASAN KLIEN',
                        },
                        {
                          key: 'inquiry',
                          title: 'Formulir Konsultasi & Leads',
                          subtitle: 'Formulir pesan konsultasi dan kontak hotline resmi.',
                          description: 'Pintu masuk calon klien mengirimkan brief proyek atau hasil kalkulasi RAB langsung ke tim engineer dan database admin internal.',
                          icon: MessageSquareText,
                          editorKey: 'inquiry_meta',
                          badge: 'LEADS INQUIRY',
                        },
                        {
                          key: 'footer',
                          title: 'Footer Publik & Legalitas',
                          subtitle: 'Informasi legalitas PT/CV, alamat, peta, dan navigasi cepat.',
                          description: 'Blok penutup website resmi yang memuat hak cipta legalitas, kontak hotline, tautan cepat, dan kredit web design.',
                          icon: ShieldCheck,
                          editorKey: null,
                          badge: 'LEGALITAS RESMI',
                        },
                      ].map((sec, sIdx) => {
                        const IconComp = sec.icon;
                        const isVis = sectionVisibility[sec.key] !== false;
                        const isExpanded = expandedSection === sec.key;
                        const num = String(sIdx + 1).padStart(2, '0');

                        return (
                          <div
                            key={sec.key}
                            className={`bg-white rounded-[24px] transition-all duration-300 overflow-hidden ${
                              isExpanded
                                ? 'border-2 border-blue-500/80 shadow-[0_12px_36px_rgb(37,99,235,0.08)] ring-4 ring-blue-500/5'
                                : 'border border-slate-200/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-slate-300'
                            }`}
                          >
                            {/* Card Accordion Header (Always Visible) */}
                            <div
                              onClick={() => setExpandedSection(isExpanded ? null : sec.key)}
                              className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none"
                            >
                              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                                <span
                                  className={`w-8 h-8 rounded-xl font-mono font-black text-xs flex items-center justify-center shrink-0 transition-colors ${
                                    isExpanded
                                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                                      : 'bg-slate-100 text-slate-600'
                                  }`}
                                >
                                  {num}
                                </span>

                                <div
                                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                    isExpanded
                                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                                      : 'bg-blue-50 text-blue-600'
                                  }`}
                                >
                                  <IconComp className="w-5 h-5" />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <Text.H2 title={sec.title} singleLine className="text-[15px] font-extrabold text-slate-900">
                                      {sec.title}
                                    </Text.H2>
                                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                                      #{sec.key}
                                    </span>
                                    <span className="hidden md:inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-700 shrink-0">
                                      {sec.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-600 truncate mt-0.5">
                                    {sec.subtitle}
                                  </p>
                                </div>
                              </div>

                              {/* Right Action Cluster: Live Pill, Toggle Switch & Chevron */}
                              <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                                <span
                                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0 ${
                                    isVis
                                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                      : 'bg-slate-100 text-slate-600 border-slate-200'
                                  }`}
                                >
                                  {isVis ? 'Live di Web' : 'Disembunyikan'}
                                </span>

                                <button
                                  type="button"
                                  onClick={() => handleToggleSection(sec.key)}
                                  title={isVis ? 'Sembunyikan seksi ini' : 'Tampilkan seksi ini'}
                                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                                    isVis ? 'bg-emerald-600' : 'bg-slate-300'
                                  }`}
                                >
                                  <span
                                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                                      isVis ? 'translate-x-5' : 'translate-x-0'
                                    }`}
                                  />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setExpandedSection(isExpanded ? null : sec.key)}
                                  className={`p-1.5 rounded-xl transition-transform duration-300 cursor-pointer ${
                                    isExpanded ? 'text-blue-600 bg-blue-50 rotate-180' : 'text-slate-400 hover:text-slate-600'
                                  }`}
                                >
                                  <ChevronDown className="w-5 h-5" />
                                </button>
                              </div>
                            </div>

                            {/* Card Body (Smooth Expanded Drawer) */}
                            {isExpanded && (
                              <div className="border-t border-slate-100 p-5 sm:p-6 bg-slate-50/60 space-y-4 animate-in fade-in duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <Text.Body className="text-[13.5px] text-slate-700 leading-relaxed max-w-2xl">
                                    {sec.description}
                                  </Text.Body>

                                  <div className="flex items-center gap-2 shrink-0">
                                    <a
                                      href={`/#${sec.key}`}
                                      target="_blank"
                                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors"
                                    >
                                      <span>Pratinjau Seksi</span>
                                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                                    </a>

                                    {sec.editorKey && (
                                      <button
                                        type="button"
                                        onClick={() => setActiveSectionEditor(sec.editorKey)}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                                      >
                                        <Edit3 className="w-3.5 h-3.5" />
                                        <span>Buka Editor Konten</span>
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ==================================================== */}
            {/* TAB 2: PROJECTS MANAGEMENT (LIST & FULL WORKSPACE)   */}
            {/* ==================================================== */}
            {activeTab === 'projects' && !editorMode && (() => {
              const filteredProjectsList = projects.filter((proj) => {
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase();
                return (
                  (proj.title && proj.title.toLowerCase().includes(q)) ||
                  (proj.client_name && proj.client_name.toLowerCase().includes(q)) ||
                  (proj.location && proj.location.toLowerCase().includes(q)) ||
                  (proj.category && proj.category.toLowerCase().includes(q))
                );
              });

              return (
                <div className="space-y-4">
                  
                  {/* List Header & Action */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Portofolio Proyek Konstruksi
                      </h2>
                      <p className="text-xs text-slate-500">
                        Menampilkan {filteredProjectsList.length} dari {projects.length} proyek di database.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Cari proyek / klien / lokasi..."
                          className="pl-9 pr-7 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 w-52 sm:w-64"
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => setSearchQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={openCreateProject}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Tambah Proyek Baru</span>
                      </button>
                    </div>
                  </div>

                  {/* Table of Projects */}
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                    <div className="w-full">
                      <table className="w-full text-left text-xs table-fixed">
                        <thead className="bg-slate-50 text-slate-600 uppercase tracking-[-0.015em] border-b border-slate-100 text-[11px] font-bold">
                          <tr>
                            <th className="py-3.5 px-4 sm:px-5 w-[42%]">Proyek & Klien</th>
                            <th className="py-3.5 px-3 sm:px-4 w-[26%]">Nilai Kontrak & Tahun</th>
                            <th className="py-3.5 px-2 sm:px-3 w-[16%] text-center">Status</th>
                            <th className="py-3.5 px-4 sm:px-5 w-[16%] text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          {filteredProjectsList.length === 0 ? (
                            <tr>
                              <td colSpan={4} className="py-12 px-4 text-center">
                                <div className="max-w-xs mx-auto space-y-2">
                                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                                    <Search className="w-5 h-5" />
                                  </div>
                                  <div className="text-xs font-bold text-slate-800">
                                    {searchQuery ? 'Tidak ada proyek yang sesuai dengan pencarian' : 'Belum ada data proyek di database'}
                                  </div>
                                  <div className="text-[11px] text-slate-500">
                                    {searchQuery ? `Kata kunci "${searchQuery}" tidak ditemukan pada judul, klien, atau lokasi.` : 'Klik tombol "Tambah Proyek Baru" untuk memasukkan proyek pertama.'}
                                  </div>
                                  {searchQuery && (
                                    <button
                                      type="button"
                                      onClick={() => setSearchQuery('')}
                                      className="mt-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                                    >
                                      Reset Pencarian
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ) : (
                            filteredProjectsList.map((proj) => (
                              <tr key={proj.id} className="hover:bg-slate-50/70 transition-colors">
                                <td className="py-3.5 px-4 sm:px-5">
                                  <div className="flex items-center gap-3">
                                    <div className="relative shrink-0">
                                      <img
                                        key={proj.thumbnail_url || proj.id}
                                        src={resolveImageUrl(proj.thumbnail_url)}
                                        alt={proj.title}
                                        onError={(e) => {
                                          e.currentTarget.onerror = null;
                                          e.currentTarget.src = DEFAULT_PROJECT_PLACEHOLDER;
                                        }}
                                        className="w-12 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200/60 shadow-xs"
                                      />
                                      {getProjectMediaList(proj).length > 1 && (
                                        <span className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.2 rounded-full bg-blue-600 text-white text-[9px] font-extrabold shadow-xs tabular-nums">
                                          +{getProjectMediaList(proj).length - 1}
                                        </span>
                                      )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="font-bold text-slate-900 text-xs truncate" title={proj.title}>
                                        {proj.title}
                                      </div>
                                      <div className="text-[11px] text-slate-500 truncate mt-0.5" title={`${proj.client_name || '-'} • ${proj.location || '-'}`}>
                                        <span className="font-medium text-slate-700">{proj.client_name || '-'}</span> • {proj.location || '-'}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3.5 px-3 sm:px-4">
                                  <Text.Amount value={proj.project_value || 0} className="text-xs font-bold" />
                                  <div className="text-[11px] text-slate-500 mt-0.5">
                                    Tahun {proj.year} • <span className="font-medium text-slate-700">{proj.category}</span>
                                  </div>
                                </td>
                                <td className="py-3.5 px-2 sm:px-3 text-center">
                                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                    proj.status === 'Selesai' 
                                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                                  }`}>
                                    {proj.status}
                                  </span>
                                </td>
                                <td className="py-3.5 px-4 sm:px-5 text-right">
                                  <div className="inline-flex items-center justify-end gap-1.5">
                                    <button
                                      type="button"
                                      onClick={() => openEditProject(proj)}
                                      className="p-1.5 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                                      title="Edit Proyek"
                                    >
                                      <Edit3 className="w-4 h-4" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => deleteProject(proj.id)}
                                      className="p-1.5 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                      title="Hapus Proyek"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              );
            })()}

            {/* DEDICATED FULL-VIEW WORKSPACE: PROJECT FORM (NO MODAL) */}
            {editorMode === 'project' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                
                {/* Header with Back Button */}
                <div className="flex items-center justify-between bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setEditorMode(null)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {editingItem ? 'Edit Data Proyek' : 'Tambah Proyek Baru ke Portofolio'}
                      </h2>
                      <p className="text-xs text-slate-500">
                        Perubahan akan langsung tersimpan ke database dan tampil di landing page depan.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    form="project-editor-form"
                    disabled={isAnyImageUploading}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                  >
                    {isAnyImageUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    <span>{isAnyImageUploading ? 'Menunggu Upload...' : 'Simpan Perubahan'}</span>
                  </button>
                </div>

                {/* Form Body Split: Inputs on Left, Realtime Card Preview on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Form (8 Cols) */}
                  <form id="project-editor-form" onSubmit={submitProject} className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Judul Proyek Konstruksi <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                        placeholder="Contoh: Logistics Hub & Distribution Center Indramayu"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Kategori Proyek
                        </label>
                        <select
                          value={projectForm.category}
                          onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                          <option value="Industri">Industri & Pergudangan</option>
                          <option value="Komersial">Komersial & Perkantoran</option>
                          <option value="Residensial">Residensial & Hunian</option>
                          <option value="Infrastruktur">Infrastruktur & Sipil</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Status Pengerjaan
                        </label>
                        <select
                          value={projectForm.status}
                          onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                          <option value="Selesai">Selesai (Completed)</option>
                          <option value="Berjalan">Sedang Berjalan (Ongoing)</option>
                        </select>
                      </div>
                    </div>

                    {/* Nama Klien (1 Kolom Penuh) */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Nama Klien / Perusahaan
                      </label>
                      <input
                        type="text"
                        value={projectForm.client_name}
                        onChange={(e) => setProjectForm({ ...projectForm, client_name: e.target.value })}
                        placeholder="Contoh: Yayasan Wahid Hasyim Semarang / PT. Sinergi Logistik Nasional"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    {/* Alamat / Lokasi Proyek (1 Kolom Penuh - Textarea) */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Alamat / Lokasi Proyek <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={projectForm.location}
                        onChange={(e) => setProjectForm({ ...projectForm, location: e.target.value })}
                        placeholder="Contoh: Jl. Raya Gunungpati Km. 15, Kel. Nongkosawit, Kec. Gunungpati, Kota Semarang, Jawa Tengah"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    {/* Nominal Proyek & Tahun Pengerjaan (Berdampingan) */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                      <div className="sm:col-span-8">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Nilai Kontrak Proyek (Rupiah)
                        </label>
                        <CurrencyInput
                          value={projectForm.project_value}
                          onChange={(val) => setProjectForm({ ...projectForm, project_value: val })}
                          placeholder="14.500.000.000"
                        />
                      </div>

                      <div className="sm:col-span-4">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Tahun Pengerjaan <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="number"
                          required
                          value={projectForm.year}
                          onChange={(e) => setProjectForm({ ...projectForm, year: parseInt(e.target.value, 10) || 2025 })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Foto Sampul Utama Proyek (Thumbnail) <span className="text-rose-500">*</span>
                      </label>
                      <ImageUploader
                        value={projectForm.thumbnail_url}
                        onChange={(url) => setProjectForm((prev) => ({ ...prev, thumbnail_url: url }))}
                        onUploadingChange={handleUploaderBusyChange}
                        folder="projects"
                        aspect="landscape"
                      />
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <MultiImageUploader
                        value={projectForm.gallery_images}
                        onChange={handleProjectGalleryChange}
                        onSetAsCover={handleSetGalleryAsCover}
                        onUploadingChange={handleUploaderBusyChange}
                        folder="projects"
                        maxFiles={12}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Deskripsi Spesifikasi Teknis Proyek
                      </label>
                      <textarea
                        rows={3}
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        placeholder="Jelaskan spesifikasi pondasi, struktur baja, luas bangunan, dan material utama..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setEditorMode(null)}
                        className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        disabled={isAnyImageUploading}
                        className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-sky-600/20 cursor-pointer"
                      >
                        {isAnyImageUploading
                          ? 'Menunggu Upload Selesai...'
                          : (editingItem ? 'Simpan Pembaruan' : 'Tambahkan ke Database')}
                      </button>
                    </div>

                  </form>

                  {/* Right Live Preview Card (4 Cols) */}
                  <div className="lg:col-span-4 space-y-3">
                    <Text.Label className="text-slate-600 block">Live Preview Tampilan Landing Page</Text.Label>
                    
                    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
                      <div className="h-44 bg-slate-100 relative overflow-hidden">
                        <img
                          key={projectForm.thumbnail_url || 'project-preview'}
                          src={resolveImageUrl(projectForm.thumbnail_url)}
                          alt="Preview"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = DEFAULT_PROJECT_PLACEHOLDER;
                          }}
                          className="w-full h-full object-cover"
                        />
                        {getProjectMediaList(projectForm).length > 1 && (
                          <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/75 backdrop-blur-md text-white text-[10px] font-bold tabular-nums">
                            <Images className="w-3 h-3 text-sky-300" />
                            <span>{getProjectMediaList(projectForm).length} Foto</span>
                          </div>
                        )}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-800">
                            {projectForm.category}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${
                            projectForm.status === 'Selesai' ? 'bg-emerald-600' : 'bg-amber-500'
                          }`}>
                            {projectForm.status}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <Text.Caption className="text-slate-500 block">
                          {projectForm.client_name || 'Nama Klien'} • {projectForm.year}
                        </Text.Caption>
                        
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
                            <Building2 className="w-3.5 h-3.5 text-slate-600" />
                          </div>
                          <Text.H2 title={projectForm.title || 'Judul Proyek'} singleLine className="text-[14px]">
                            {projectForm.title || 'Judul Proyek Baru'}
                          </Text.H2>
                        </div>

                        <p className="text-[12px] text-slate-500 line-clamp-2">
                          {projectForm.description || 'Deskripsi proyek konstruksi akan tampil di sini...'}
                        </p>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                          <Text.Label className="text-slate-400">Nilai Kontrak</Text.Label>
                          <Text.Amount value={projectForm.project_value || 0} className="text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* ==================================================== */}
            {/* TAB 3: SERVICES MANAGEMENT                           */}
            {/* ==================================================== */}
            {activeTab === 'services' && !editorMode && (() => {
              const filteredServices = services.filter((srv) => {
                if (!serviceSearchQuery.trim()) return true;
                const q = serviceSearchQuery.toLowerCase();
                return (
                  (srv.title && srv.title.toLowerCase().includes(q)) ||
                  (srv.short_description && srv.short_description.toLowerCase().includes(q))
                );
              });

              return (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Layanan Utama Konstruksi
                      </h2>
                      <p className="text-xs text-slate-500">
                        Menampilkan {filteredServices.length} dari {services.length} divisi layanan aktif.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={serviceSearchQuery}
                          onChange={(e) => setServiceSearchQuery(e.target.value)}
                          placeholder="Cari layanan / deskripsi..."
                          className="pl-9 pr-7 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 w-52 sm:w-64"
                        />
                        {serviceSearchQuery && (
                          <button
                            type="button"
                            onClick={() => setServiceSearchQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={openCreateService}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Tambah Layanan Baru</span>
                      </button>
                    </div>
                  </div>

                  {filteredServices.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                        <HardHat className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-slate-800">
                        {serviceSearchQuery ? 'Tidak ada layanan yang sesuai pencarian' : 'Belum ada data layanan'}
                      </div>
                      {serviceSearchQuery && (
                        <button
                          type="button"
                          onClick={() => setServiceSearchQuery('')}
                          className="mt-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                        >
                          Reset Pencarian
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {filteredServices.map((srv, idx) => {
                        const IconComp = iconMap[srv.icon] || Building2;
                        const cardImg = resolveImageUrl(srv.image_url);

                        return (
                          <div key={srv.id} className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col justify-between hover:shadow-[0_14px_40px_rgb(0,0,0,0.08)] transition-all group">
                            {/* Card Image Banner */}
                            <div className="relative h-40 w-full bg-slate-900 overflow-hidden">
                              <img
                                key={cardImg}
                                src={cardImg}
                                alt={srv.title}
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src = DEFAULT_PROJECT_PLACEHOLDER;
                                }}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                              
                              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-xs">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-extrabold text-sky-300 uppercase tracking-[-0.015em] bg-slate-900/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                                  Divisi 0{srv.order || idx + 1}
                                </span>
                              </div>

                              <div className="absolute top-3.5 right-3.5">
                                <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                                  Urutan: {srv.order || idx + 1}
                                </span>
                              </div>

                              <div className="absolute bottom-3 left-3.5 right-3.5">
                                <h3 className="font-bold text-white text-[14.5px] truncate drop-shadow-sm" title={srv.title}>
                                  {srv.title}
                                </h3>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                              <Text.Body className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                                {srv.short_description}
                              </Text.Body>

                              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ${
                                  srv.is_active ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-500'
                                }`}>
                                  {srv.is_active ? 'Aktif' : 'Non-Aktif'}
                                </span>

                                <div className="flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => openEditService(srv)}
                                    className="p-1.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                                    title="Edit Layanan"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => deleteService(srv.id)}
                                    className="p-1.5 rounded-xl text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                    title="Hapus Layanan"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* DEDICATED FULL-VIEW WORKSPACE: SERVICE FORM (NO MODAL) */}
            {editorMode === 'service' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center justify-between bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setEditorMode(null)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {editingItem ? 'Edit Layanan Konstruksi' : 'Tambah Layanan Baru'}
                      </h2>
                      <p className="text-xs text-slate-500">
                        Kelola judul, ikon arsitektur, dan ringkasan layanan.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    form="service-editor-form"
                    disabled={isAnyImageUploading}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-sky-600/20 cursor-pointer"
                  >
                    {isAnyImageUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    <span>{isAnyImageUploading ? 'Menunggu Upload...' : 'Simpan Layanan'}</span>
                  </button>
                </div>

                {/* Form Body Split: Inputs on Left (8 Cols), Realtime Card Preview on Right (4 Cols) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Form (8 Cols) */}
                  <form id="service-editor-form" onSubmit={submitService} className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Nama Layanan <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={serviceForm.title}
                        onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                        placeholder="Contoh: Civil & Structural Engineering"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Icon Representatif
                        </label>
                        <select
                          value={serviceForm.icon}
                          onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                          <option value="Building2">Building2 (Gedung)</option>
                          <option value="HardHat">HardHat (K3 / Kontraktor)</option>
                          <option value="Warehouse">Warehouse (Pergudangan)</option>
                          <option value="Briefcase">Briefcase (Komersial)</option>
                          <option value="Wrench">Wrench (MEP / Utilitas)</option>
                          <option value="Hammer">Hammer (Renovasi)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Urutan Tampil
                        </label>
                        <input
                          type="number"
                          value={serviceForm.order}
                          onChange={(e) => setServiceForm({ ...serviceForm, order: parseInt(e.target.value, 10) || 0 })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Deskripsi Singkat (Tampil di Kartu) <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={serviceForm.short_description}
                        onChange={(e) => setServiceForm({ ...serviceForm, short_description: e.target.value })}
                        placeholder="Jelaskan ruang lingkup pekerjaan layanan ini secara padat..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    {/* Upload Foto Layanan (Image / Banner) */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Foto Layanan Konstruksi (Image / Banner) <span className="text-rose-500">*</span>
                      </label>
                      <ImageUploader
                        value={serviceForm.image_url}
                        onChange={(url) => setServiceForm((prev) => ({ ...prev, image_url: url }))}
                        onUploadingChange={handleUploaderBusyChange}
                        folder="services"
                        aspect="landscape"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Deskripsi Lengkap Spesifikasi Teknis Divisi (Opsional)
                      </label>
                      <textarea
                        rows={4}
                        value={serviceForm.full_description}
                        onChange={(e) => setServiceForm({ ...serviceForm, full_description: e.target.value })}
                        placeholder="Rincian lengkap ruang lingkup, standar material, dan sertifikasi keahlian divisi..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setEditorMode(null)}
                        className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        disabled={isAnyImageUploading}
                        className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-sky-600/20 cursor-pointer"
                      >
                        {isAnyImageUploading
                          ? 'Menunggu Upload Selesai...'
                          : (editingItem ? 'Simpan Pembaruan' : 'Tambahkan Layanan')}
                      </button>
                    </div>
                  </form>

                  {/* Right Live Preview Card (4 Cols - Mirroring Landing Page Vibe) */}
                  <div className="lg:col-span-4 space-y-3">
                    <Text.Label className="text-slate-600 block">Live Preview Tampilan Landing Page</Text.Label>

                    <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-800 bg-[#0B2447] text-white">
                      <img
                        key={serviceForm.image_url || 'service-preview'}
                        src={resolveImageUrl(serviceForm.image_url)}
                        alt="Preview"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = DEFAULT_PROJECT_PLACEHOLDER;
                        }}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/30" />

                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                        <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                          {(() => {
                            const IconComp = iconMap[serviceForm.icon] || Building2;
                            return <IconComp className="w-4 h-4 stroke-[2]" />;
                          })()}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-xs">
                            STANDAR MUTU &amp; K3
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-white/90 text-slate-900 text-[10px] font-black">
                            0{serviceForm.order || 1}
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                        <h3 className="text-[16px] font-bold text-white tracking-[-0.025em] leading-snug line-clamp-1" title={serviceForm.title}>
                          {serviceForm.title || 'Nama Layanan Baru'}
                        </h3>
                        <p className="text-[12px] text-slate-200 font-medium line-clamp-2 leading-relaxed">
                          {serviceForm.short_description || 'Deskripsi singkat layanan akan tampil di sini...'}
                        </p>
                        <div className="pt-1 flex items-center gap-1 text-[11px] font-bold text-sky-300">
                          <span>Lihat Spesifikasi &amp; Detail Divisi ➔</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 space-y-1">
                      <span className="font-bold flex items-center gap-1 text-blue-800">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        Sinkronisasi Otomatis
                      </span>
                      <p className="text-blue-800 text-[11.5px] leading-relaxed">
                        Foto layanan yang Anda unggah di sini akan langsung tampil pada kartu seksi Layanan di landing page publik dan hero banner halaman khusus detail (/layanan/{'{id}'}).
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* TAB 4: INQUIRIES MANAGEMENT (LEADS & RAB FORM)       */}
            {/* ==================================================== */}
            {activeTab === 'inquiries' && (() => {
              const filteredInquiries = inquiries.filter((inq) => {
                const matchesStatus = inquiryStatusFilter === 'Semua' || inq.status === inquiryStatusFilter;
                if (!matchesStatus) return false;
                if (!inquirySearchQuery.trim()) return true;
                const q = inquirySearchQuery.toLowerCase();
                return (
                  (inq.client_name && inq.client_name.toLowerCase().includes(q)) ||
                  (inq.phone_wa && inq.phone_wa.toLowerCase().includes(q)) ||
                  (inq.email && inq.email.toLowerCase().includes(q)) ||
                  (inq.location && inq.location.toLowerCase().includes(q)) ||
                  (inq.project_type && inq.project_type.toLowerCase().includes(q))
                );
              });

              return (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Pesan Masuk & Pengajuan RAB Calon Klien
                      </h2>
                      <p className="text-xs text-slate-500">
                        Menampilkan {filteredInquiries.length} dari {inquiries.length} data leads masuk.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={inquirySearchQuery}
                          onChange={(e) => setInquirySearchQuery(e.target.value)}
                          placeholder="Cari nama / WA / lokasi..."
                          className="pl-9 pr-7 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 w-52 sm:w-64"
                        />
                        {inquirySearchQuery && (
                          <button
                            type="button"
                            onClick={() => setInquirySearchQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs">
                    {['Semua', 'Baru', 'Dihubungi', 'Negosiasi', 'Selesai', 'Batal'].map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setInquiryStatusFilter(st)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          inquiryStatusFilter === st
                            ? 'bg-sky-600 text-white shadow-sm'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {st}
                        {st === 'Baru' && metrics.new_inquiries > 0 && (
                          <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px]">
                            {metrics.new_inquiries}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 text-slate-600 uppercase tracking-[-0.015em] border-b border-slate-100 text-[11px] font-bold">
                          <tr>
                            <th className="py-3 px-4">Calon Klien</th>
                            <th className="py-3 px-4">Kategori & Luas</th>
                            <th className="py-3 px-4">Estimasi Budget</th>
                            <th className="py-3 px-4">Lokasi & Catatan</th>
                            <th className="py-3 px-4">Status Prospek</th>
                            <th className="py-3 px-4 text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          {filteredInquiries.length === 0 ? (
                            <tr>
                              <td colSpan={6} className="py-12 px-4 text-center">
                                <div className="max-w-xs mx-auto space-y-2">
                                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                                    <MessageSquareText className="w-5 h-5" />
                                  </div>
                                  <div className="text-xs font-bold text-slate-800">
                                    Tidak ada data pesan yang sesuai
                                  </div>
                                  <div className="text-[11px] text-slate-500">
                                    Filter status "{inquiryStatusFilter}" atau pencarian "{inquirySearchQuery}" tidak menghasilkan data.
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => { setInquiryStatusFilter('Semua'); setInquirySearchQuery(''); }}
                                    className="mt-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                                  >
                                    Reset Filter Leads
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            filteredInquiries.map((inq) => (
                              <tr key={inq.id} className="hover:bg-slate-50/60 transition-colors">
                                <td className="py-3 px-4">
                                  <div className="font-bold text-slate-900">{inq.client_name}</div>
                                  <div className="text-[11px] text-slate-600 font-mono mt-0.5">{inq.phone_wa}</div>
                                  {inq.email && <div className="text-[11px] text-slate-500">{inq.email}</div>}
                                </td>
                                <td className="py-3 px-4">
                                  <div className="font-semibold text-slate-800">{inq.project_type}</div>
                                  <div className="text-[11px] text-slate-600">
                                    {inq.building_area_m2 ? `${inq.building_area_m2} m²` : '-'}
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <Text.Amount value={inq.estimated_budget || 0} className="text-xs" />
                                </td>
                                <td className="py-3 px-4 max-w-xs text-slate-700">
                                  <div className="font-semibold text-slate-800">{inq.location || '-'}</div>
                                  <div className="text-[11px] text-slate-600 truncate">{inq.message || inq.internal_notes || '-'}</div>
                                </td>
                                <td className="py-3 px-4">
                                  <select
                                    value={inq.status}
                                    onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                                      inq.status === 'Baru'
                                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                                        : inq.status === 'Dihubungi'
                                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                    }`}
                                  >
                                    <option value="Baru">Baru</option>
                                    <option value="Dihubungi">Dihubungi</option>
                                    <option value="Negosiasi">Negosiasi</option>
                                    <option value="Selesai">Deal Selesai</option>
                                    <option value="Batal">Batal</option>
                                  </select>
                                </td>
                                <td className="py-3 px-4 text-right whitespace-nowrap">
                                  <div className="flex items-center justify-end gap-2">
                                    <a
                                      href={`https://wa.me/${inq.phone_wa.replace(/\D/g, '').replace(/^0/, '62')}?text=Halo%20${encodeURIComponent(inq.client_name)},%20kami%20dari%20CV.%20Wahana%20Sinergi%20Mitra%20terkait%20konsultasi%20proyek%20${encodeURIComponent(inq.project_type)}.`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold"
                                    >
                                      <PhoneCall className="w-3 h-3" />
                                      <span>WhatsApp</span>
                                    </a>

                                    <button
                                      type="button"
                                      onClick={() => deleteInquiry(inq.id)}
                                      className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                                      title="Hapus Pesan"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* ==================================================== */}
            {/* TAB 5: TESTIMONIALS MANAGEMENT                       */}
            {/* ==================================================== */}
            {activeTab === 'testimonials' && !editorMode && (() => {
              const filteredTestimonials = testimonials.filter((t) => {
                if (!testimonialSearchQuery.trim()) return true;
                const q = testimonialSearchQuery.toLowerCase();
                return (
                  (t.client_name && t.client_name.toLowerCase().includes(q)) ||
                  (t.company_name && t.company_name.toLowerCase().includes(q)) ||
                  (t.content && t.content.toLowerCase().includes(q))
                );
              });

              return (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Testimoni & Ulasan Klien
                      </h2>
                      <p className="text-xs text-slate-500">
                        Menampilkan {filteredTestimonials.length} dari {testimonials.length} ulasan klien.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={testimonialSearchQuery}
                          onChange={(e) => setTestimonialSearchQuery(e.target.value)}
                          placeholder="Cari nama klien / isi ulasan..."
                          className="pl-9 pr-7 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 w-52 sm:w-64"
                        />
                        {testimonialSearchQuery && (
                          <button
                            type="button"
                            onClick={() => setTestimonialSearchQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={openCreateTestimonial}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Tambah Testimoni</span>
                      </button>
                    </div>
                  </div>

                  {filteredTestimonials.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                        <Star className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-slate-800">
                        {testimonialSearchQuery ? 'Tidak ada testimoni yang sesuai pencarian' : 'Belum ada data ulasan'}
                      </div>
                      {testimonialSearchQuery && (
                        <button
                          type="button"
                          onClick={() => setTestimonialSearchQuery('')}
                          className="mt-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                        >
                          Reset Pencarian
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {filteredTestimonials.map((t) => (
                        <div key={t.id} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 min-w-0 mb-3">
                              <div className="flex items-center gap-1 text-amber-400">
                                {[...Array(t.rating || 5)].map((_, i) => (
                                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                ))}
                              </div>
                              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                Urutan: {t.order || 0}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 italic line-clamp-3 mb-4">
                              "{t.content}"
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-2 min-w-0">
                              <img
                                key={t.avatar_url || t.id}
                                src={resolveImageUrl(t.avatar_url, DEFAULT_AVATAR_PLACEHOLDER)}
                                alt={t.client_name}
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src = DEFAULT_AVATAR_PLACEHOLDER;
                                }}
                                className="w-8 h-8 rounded-full object-cover shrink-0"
                              />
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-slate-900 truncate">{t.client_name}</div>
                                <div className="text-[10px] text-slate-500 truncate">{t.company_name}</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => openEditTestimonial(t)}
                                className="p-1 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteTestimonial(t.id)}
                                className="p-1 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* DEDICATED FULL-VIEW WORKSPACE: TESTIMONIAL FORM (NO MODAL) */}
            {editorMode === 'testimonial' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center justify-between bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setEditorMode(null)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {editingItem ? 'Edit Testimoni Klien' : 'Tambah Testimoni Baru'}
                      </h2>
                    </div>
                  </div>

                  <button
                    type="submit"
                    form="testimonial-editor-form"
                    disabled={isAnyImageUploading}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs cursor-pointer"
                  >
                    {isAnyImageUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    <span>{isAnyImageUploading ? 'Menunggu Upload...' : 'Simpan Testimoni'}</span>
                  </button>
                </div>

                <form id="testimonial-editor-form" onSubmit={submitTestimonial} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 max-w-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Nama Klien <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={testimonialForm.client_name}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, client_name: e.target.value })}
                        placeholder="Ir. Hendra Wijaya"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Jabatan Klien
                      </label>
                      <input
                        type="text"
                        value={testimonialForm.client_role}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, client_role: e.target.value })}
                        placeholder="Project Director"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Nama Perusahaan
                      </label>
                      <input
                        type="text"
                        value={testimonialForm.company_name}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, company_name: e.target.value })}
                        placeholder="PT. Sinergi Logistik Nasional"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Rating Bintang (1 - 5)
                      </label>
                      <select
                        value={testimonialForm.rating}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: parseInt(e.target.value, 10) || 5 })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                      >
                        <option value="5">⭐⭐⭐⭐⭐ (5 Bintang)</option>
                        <option value="4">⭐⭐⭐⭐ (4 Bintang)</option>
                        <option value="3">⭐⭐⭐ (3 Bintang)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                      Foto Avatar Klien
                    </label>
                    <ImageUploader
                      value={testimonialForm.avatar_url}
                      onChange={(url) => setTestimonialForm((prev) => ({ ...prev, avatar_url: url }))}
                      onUploadingChange={handleUploaderBusyChange}
                      folder="testimonials"
                      aspect="avatar"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                      Isi Testimoni Klien <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={testimonialForm.content}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                      placeholder="Tulis ulasan klien mengenai mutu pengerjaan, ketepatan waktu, dan koordinasi tim WSM..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setEditorMode(null)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      disabled={isAnyImageUploading}
                      className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs cursor-pointer"
                    >
                      {isAnyImageUploading ? 'Menunggu Upload Selesai...' : 'Simpan Testimoni'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ==================================================== */}
            {/* TAB 6: FRONTEND HERO STATS & COMPANY SETTINGS        */}
            {/* ==================================================== */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Pengaturan Angka Hero & Informasi Kontak Depan
                    </h2>
                    <p className="text-xs text-slate-500">
                      Setiap teks dan angka di sini langsung mengubah tampilan di landing page secara real-time.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={submitSettings}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md shadow-sky-600/20"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Pengaturan Depan</span>
                  </button>
                </div>

                <form onSubmit={submitSettings} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 max-w-3xl">
                  
                  {/* Hero Metric Cards Section */}
                  <div>
                    <Text.Label className="text-sky-700 block mb-3">1. Angka Metrik Banner Hero (4 Kartu Depan)</Text.Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Kartu 1: Total Proyek Selesai
                        </label>
                        <input
                          type="text"
                          value={settingsForm.hero_stat_projects}
                          onChange={(e) => setSettingsForm({ ...settingsForm, hero_stat_projects: e.target.value })}
                          placeholder="50+"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Kartu 2: Nilai Portofolio Kontrak
                        </label>
                        <input
                          type="text"
                          value={settingsForm.hero_stat_value}
                          onChange={(e) => setSettingsForm({ ...settingsForm, hero_stat_value: e.target.value })}
                          placeholder="Rp 85+ Miliar"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Kartu 3: Persentase Kepuasan Klien
                        </label>
                        <input
                          type="text"
                          value={settingsForm.hero_stat_satisfaction}
                          onChange={(e) => setSettingsForm({ ...settingsForm, hero_stat_satisfaction: e.target.value })}
                          placeholder="99.4%"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Kartu 4: Jam Kerja Aman K3
                        </label>
                        <input
                          type="text"
                          value={settingsForm.hero_stat_safety}
                          onChange={(e) => setSettingsForm({ ...settingsForm, hero_stat_safety: e.target.value })}
                          placeholder="1.250.000+ Jam"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Contacts Section */}
                  <div className="pt-4 border-t border-slate-100">
                    <Text.Label className="text-sky-700 block mb-3">2. Kontak & Alamat Kantor Resmi</Text.Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Nomor WhatsApp Hotline
                        </label>
                        <input
                          type="text"
                          value={settingsForm.company_phone}
                          onChange={(e) => setSettingsForm({ ...settingsForm, company_phone: e.target.value })}
                          placeholder="+62 812-3456-7890"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Email Resmi
                        </label>
                        <input
                          type="email"
                          value={settingsForm.company_email}
                          onChange={(e) => setSettingsForm({ ...settingsForm, company_email: e.target.value })}
                          placeholder="info@wahanasinergimitra.id"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Jam Operasional (Top Bar Header)
                      </label>
                      <input
                        type="text"
                        value={settingsForm.company_operating_hours}
                        onChange={(e) => setSettingsForm({ ...settingsForm, company_operating_hours: e.target.value })}
                        placeholder="Senin – Sabtu: 08.00 – 17.00 WIB"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Alamat Kantor Utama
                      </label>
                      <input
                        type="text"
                        value={settingsForm.company_address}
                        onChange={(e) => setSettingsForm({ ...settingsForm, company_address: e.target.value })}
                        placeholder="Jl. Sinergi Raya No. 88, Kawasan Niaga Terpadu, Jawa Barat"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end border-t border-slate-100">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md shadow-sky-600/20"
                    >
                      Simpan & Terapkan ke Landing Page
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ==================================================== */}
            {/* TAB 8: USER MANAGEMENT (SUPER ADMIN & EDITORS)       */}
            {/* ==================================================== */}
            {activeTab === 'users' && (
              <div className="space-y-6 max-w-5xl">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-700">
                        AKSES KONTROL CMS
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        • {users.length} Total Akun
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 tracking-[-0.025em]">
                      Manajemen Pengguna &amp; Peran
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Kelola hak akses pengelola website: Super Admin (Akses Penuh) dan Editor (Kelola Konten).
                    </p>
                  </div>

                  {currentUser?.role === 'Super Admin' && (
                    <button
                      type="button"
                      onClick={openCreateUserModal}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer shrink-0"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Tambah Pengguna Baru</span>
                    </button>
                  )}
                </div>

                {/* Non-Super Admin Warning Notice */}
                {currentUser?.role !== 'Super Admin' && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="font-bold">Mode Baca (Editor):</strong> Akun Anda berstatus Editor. Hanya akun <strong>Super Admin</strong> yang memiliki izin menambah, mengubah peran, atau menghapus pengguna. Anda tetap dapat mengedit profil dan kata sandi mandiri Anda melalui menu <strong>Profil Saya</strong>.
                    </div>
                  </div>
                )}

                {/* Users List Table */}
                <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-slate-600 uppercase tracking-[-0.015em]">
                          <th className="py-3.5 px-5">Nama Pengguna & Email</th>
                          <th className="py-3.5 px-4">Peran (Role)</th>
                          <th className="py-3.5 px-4">Status Akun</th>
                          <th className="py-3.5 px-4">Tanggal Dibuat</th>
                          <th className="py-3.5 px-5 text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs">
                        {users.map((u) => {
                          const isSelf = u.id === currentUser?.id;
                          const isSuper = u.role === 'Super Admin';

                          return (
                            <tr key={u.id} className="hover:bg-slate-50/60 transition-colors">
                              <td className="py-4 px-5">
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-xs ${
                                      isSuper
                                        ? 'bg-gradient-to-tr from-emerald-600 to-teal-700 shadow-emerald-600/20'
                                        : 'bg-gradient-to-tr from-sky-600 to-blue-700 shadow-blue-600/20'
                                    }`}
                                  >
                                    {(u.name || 'A').charAt(0).toUpperCase()}
                                  </div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="font-extrabold text-slate-900 truncate">
                                        {u.name}
                                      </span>
                                      {isSelf && (
                                        <span className="px-2 py-0.2 rounded-full text-[9.5px] font-bold bg-blue-100 text-blue-800">
                                          Anda
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-slate-600 text-[11px] font-mono block truncate">
                                      {u.email}
                                    </span>
                                  </div>
                                </div>
                              </td>

                              <td className="py-4 px-4">
                                <span
                                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-extrabold border ${
                                    isSuper
                                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                      : 'bg-sky-50 text-sky-800 border-sky-200'
                                  }`}
                                >
                                  {isSuper ? <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Edit3 className="w-3.5 h-3.5 text-sky-600" />}
                                  <span>{u.role || 'Editor'}</span>
                                </span>
                              </td>

                              <td className="py-4 px-4">
                                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                  <span>Aktif</span>
                                </span>
                              </td>

                              <td className="py-4 px-4 text-slate-600 font-mono text-[11px]">
                                {u.created_at ? new Date(u.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' }) : '-'}
                              </td>

                              <td className="py-4 px-5 text-right">
                                {currentUser?.role === 'Super Admin' ? (
                                  <div className="flex items-center justify-end gap-2">
                                    <button
                                      type="button"
                                      onClick={() => openEditUserModal(u)}
                                      className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                                      title="Edit Pengguna"
                                    >
                                      <Edit3 className="w-4 h-4" />
                                    </button>

                                    {!isSelf ? (
                                      <button
                                        type="button"
                                        onClick={() => handleDeleteUser(u)}
                                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                        title="Hapus Pengguna"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    ) : (
                                      <span className="text-[10px] text-slate-400 font-medium px-2 py-1">
                                        (Akun Anda)
                                      </span>
                                    )}
                                  </div>
                                ) : (
                                  <span className="text-[11px] text-slate-400">-</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* MODAL: PROFIL SAYA (MANDIRI)                         */}
            {/* ==================================================== */}
            {profileModalOpen && (
              <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
                <div className="bg-white rounded-[24px] max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5 animate-in zoom-in-95">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <Text.H2 className="text-base font-extrabold text-slate-900">Profil Saya</Text.H2>
                        <Text.Caption className="text-slate-600">Kelola informasi nama, email, dan kata sandi Anda</Text.Caption>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setProfileModalOpen(false)}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveProfile} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        required
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-blue-600"
                      />
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-3.5">
                      <div>
                        <div className="flex items-center justify-between">
                          <Text.Label className="text-blue-600 block mb-0.5">Ubah Kata Sandi (Opsional)</Text.Label>
                          {profileForm.password && (
                            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                              Live Security Checker
                            </span>
                          )}
                        </div>
                        <Text.Caption className="text-slate-500">Kosongkan jika tidak ingin mengubah kata sandi.</Text.Caption>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Kata Sandi Saat Ini
                        </label>
                        <div className="relative">
                          <input
                            type={showCurrentPassword ? 'text' : 'password'}
                            value={profileForm.current_password}
                            onChange={(e) => setProfileForm({ ...profileForm, current_password: e.target.value })}
                            placeholder="Masukkan kata sandi lama Anda"
                            className="w-full pl-3.5 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            tabIndex={-1}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer p-1"
                            title={showCurrentPassword ? 'Sembunyikan Kata Sandi' : 'Lihat Kata Sandi'}
                          >
                            {showCurrentPassword ? <EyeOff className="w-4 h-4 text-blue-600" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Kata Sandi Baru
                        </label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={profileForm.password}
                            onChange={(e) => setProfileForm({ ...profileForm, password: e.target.value })}
                            placeholder="Kombinasi min. 8 karakter, A-Z, a-z, 0-9, simbol"
                            className="w-full pl-3.5 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            tabIndex={-1}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer p-1"
                            title={showNewPassword ? 'Sembunyikan Kata Sandi' : 'Lihat Kata Sandi'}
                          >
                            {showNewPassword ? <EyeOff className="w-4 h-4 text-blue-600" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        {renderPasswordSecurityChecklist(profileForm.password)}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                          Konfirmasi Kata Sandi Baru
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={profileForm.password_confirmation}
                            onChange={(e) => setProfileForm({ ...profileForm, password_confirmation: e.target.value })}
                            placeholder="Ulangi kata sandi baru"
                            className="w-full pl-3.5 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            tabIndex={-1}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer p-1"
                            title={showConfirmPassword ? 'Sembunyikan Kata Sandi' : 'Lihat Kata Sandi'}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4 text-blue-600" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        {profileForm.password_confirmation && (
                          <div className="mt-1 text-[11px] font-semibold flex items-center gap-1.5">
                            {profileForm.password === profileForm.password_confirmation ? (
                              <span className="text-emerald-600 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Kata sandi konfirmasi cocok
                              </span>
                            ) : (
                              <span className="text-rose-500 flex items-center gap-1">
                                <X className="w-3.5 h-3.5" />
                                Kata sandi konfirmasi tidak cocok
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setProfileModalOpen(false)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        disabled={Boolean(profileForm.password && (!evaluatePasswordSecurity(profileForm.password).isValid || profileForm.password !== profileForm.password_confirmation || !profileForm.current_password))}
                        className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                      >
                        Simpan Profil
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* MODAL: TAMBAH / EDIT PENGGUNA (SUPER ADMIN)          */}
            {/* ==================================================== */}
            {userModalOpen && (
              <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
                <div className="bg-white rounded-[24px] max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5 animate-in zoom-in-95">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <Text.H2 className="text-base font-extrabold text-slate-900">
                          {editingUser ? 'Edit Data Pengguna' : 'Tambah Pengguna Baru'}
                        </Text.H2>
                        <Text.Caption className="text-slate-600">
                          {editingUser ? `Perbarui profil atau kata sandi ${editingUser.name}` : 'Buat akun pengelola website resmi baru'}
                        </Text.Caption>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setUserModalOpen(false)}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveUser} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={userForm.name}
                        onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                        placeholder="misal: Engineer Bagian Sipil"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        required
                        value={userForm.email}
                        onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                        placeholder="misal: editor@wahanasinergimitra.id"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em] mb-1">
                        Peran (Hak Akses)
                      </label>
                      <select
                        value={userForm.role}
                        onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-blue-600"
                      >
                        <option value="Editor">Editor (Kelola Konten & Portofolio)</option>
                        <option value="Super Admin">Super Admin (Akses Penuh + Kelola User)</option>
                      </select>
                      <p className="text-[11px] text-slate-500 mt-1">
                        {userForm.role === 'Super Admin'
                          ? 'Dapat mengelola konten, konfigurasi sistem, dan manajemen user lain.'
                          : 'Hanya dapat memperbarui konten landing page, layanan, proyek, dan testimoni.'}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-[-0.015em]">
                          Kata Sandi {editingUser ? '(Opsional - Isi jika ingin reset)' : '(Wajib)'}
                        </label>
                        {userForm.password && (
                          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                            Live Security Checker
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type={showUserPassword ? 'text' : 'password'}
                          required={!editingUser}
                          value={userForm.password}
                          onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                          placeholder={editingUser ? 'Kosongkan jika tidak ingin diubah' : 'Kombinasi min. 8 karakter, A-Z, a-z, 0-9, simbol'}
                          className="w-full pl-3.5 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowUserPassword(!showUserPassword)}
                          tabIndex={-1}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer p-1"
                          title={showUserPassword ? 'Sembunyikan Kata Sandi' : 'Lihat Kata Sandi'}
                        >
                          {showUserPassword ? <EyeOff className="w-4 h-4 text-blue-600" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {renderPasswordSecurityChecklist(userForm.password)}
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setUserModalOpen(false)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        disabled={Boolean((!editingUser && !evaluatePasswordSecurity(userForm.password).isValid) || (editingUser && userForm.password && !evaluatePasswordSecurity(userForm.password).isValid))}
                        className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                      >
                        {editingUser ? 'Simpan Perubahan' : 'Buat Pengguna'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

          </div>

        </main>

      </div>
    </>
  );
}
