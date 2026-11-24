import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutCredibilitySection from '../Components/AboutCredibilitySection';
import ServicesSection from '../Components/ServicesSection';
import PortfolioSection from '../Components/PortfolioSection';
import CostEstimator from '../Components/CostEstimator';
import WorkflowSection from '../Components/WorkflowSection';
import ProksiSection from '../Components/ProksiSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import InquiryForm from '../Components/InquiryForm';
import Footer from '../Components/Footer';

export default function LandingPage({ 
  services = [], 
  projects = [], 
  projectCategories = [],
  testimonials = [], 
  stats = {}, 
  company = {},
  visibility = {},
  heroData = {},
  aboutData = {},
  servicesMeta = {},
  estimatorData = {},
  portfolioMeta = {},
  workflowData = {},
  proksiData = {},
  testimonialsMeta = {},
  inquiryMeta = {},
}) {
  const [inquiryInitialData, setInquiryInitialData] = useState({});

  const handleApplyEstimate = (data) => {
    setInquiryInitialData(data);
    const formElement = document.getElementById('inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>CV. Wahana Sinergi Mitra — General Contractor & Civil Engineering</title>
        <meta
          name="description"
          content="CV. Wahana Sinergi Mitra - Kontraktor umum terpercaya spesialis bangunan gedung komersial, pergudangan industri, konstruksi baja WF, dan pekerjaan teknik sipil berstandar SNI & ISO."
        />
      </Head>

      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* Sticky Corporate Header with Top Utility Bar */}
        <Navbar company={company} visibility={visibility} />

        {/* Full-Bleed Construction Photo Slider Hero & KPI Counter Dock */}
        {visibility?.hero !== false && (
          <HeroSection 
            stats={stats} 
            data={heroData} 
          />
        )}

        {/* Corporate Credibility: Tentang Kami, 5 Pillars, ISO/SMK3/GAPENSI & Client Sectors */}
        {visibility?.about !== false && (
          <AboutCredibilitySection company={company} stats={stats} data={aboutData} />
        )}

        {/* Deep Royal-Blue Photo-Backed Services Showcase */}
        {visibility?.services !== false && (
          <ServicesSection services={services} meta={servicesMeta} />
        )}

        {/* Dual-Mode Project Portfolio (Visual Grid & Official Contract Ledger Table) */}
        {visibility?.portfolio !== false && (
          <PortfolioSection
            projects={projects}
            projectCategories={projectCategories}
            company={company}
            meta={portfolioMeta}
          />
        )}

        {/* Interactive Cost Estimator (RAB Calculator) */}
        {visibility?.estimator !== false && (
          <CostEstimator data={estimatorData} onApplyToForm={handleApplyEstimate} />
        )}

        {/* Methodology & Workflow */}
        {visibility?.workflow !== false && (
          <WorkflowSection data={workflowData} />
        )}

        {/* PROKSI Digital Ecosystem Showcase */}
        {visibility?.proksi !== false && (
          <ProksiSection data={proksiData} />
        )}

        {/* Client Testimonials */}
        {visibility?.testimonials !== false && (
          <TestimonialsSection testimonials={testimonials} meta={testimonialsMeta} />
        )}

        {/* Inquiry & Consultation Form */}
        {visibility?.inquiry !== false && (
          <InquiryForm company={company} meta={inquiryMeta} initialData={inquiryInitialData} />
        )}

        {/* Footer & Floating WhatsApp Action */}
        {visibility?.footer !== false && (
          <Footer company={company} visibility={visibility} />
        )}
      </div>
    </>
  );
}
