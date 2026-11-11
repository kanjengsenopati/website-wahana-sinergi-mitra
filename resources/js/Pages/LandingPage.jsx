import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import ServicesSection from '../Components/ServicesSection';
import PortfolioSection from '../Components/PortfolioSection';
import CostEstimator from '../Components/CostEstimator';
import WorkflowSection from '../Components/WorkflowSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import InquiryForm from '../Components/InquiryForm';
import Footer from '../Components/Footer';

export default function LandingPage({ 
  services = [], 
  projects = [], 
  testimonials = [], 
  stats = {}, 
  company = {} 
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
        <title>General Contractor & Engineering Modern</title>
        <meta
          name="description"
          content="CV. Wahana Sinergi Mitra - Kontraktor umum terpercaya spesialis bangunan gedung komersial, pergudangan industri, konstruksi baja, dan pekerjaan teknik sipil."
        />
      </Head>

      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* Sticky Header */}
        <Navbar company={company} />

        {/* Hero Section with Hybrid 3D Scene */}
        <HeroSection stats={stats} />

        {/* Services Showcase */}
        <ServicesSection services={services} />

        {/* Interactive Cost Estimator (RAB Calculator) */}
        <CostEstimator onApplyToForm={handleApplyEstimate} />

        {/* Project Portfolio */}
        <PortfolioSection projects={projects} company={company} />

        {/* Methodology & Workflow */}
        <WorkflowSection />

        {/* Client Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Inquiry & Consultation Form */}
        <InquiryForm company={company} initialData={inquiryInitialData} />

        {/* Footer */}
        <Footer company={company} />
      </div>
    </>
  );
}
