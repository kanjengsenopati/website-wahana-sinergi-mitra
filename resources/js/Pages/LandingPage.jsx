import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
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
  testimonials = [], 
  stats = {}, 
  company = {},
  visibility = {},
  heroData = {},
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
        <title>General Contractor & Engineering Modern</title>
        <meta
          name="description"
          content="CV. Wahana Sinergi Mitra - Kontraktor umum terpercaya spesialis bangunan gedung komersial, pergudangan industri, konstruksi baja, dan pekerjaan teknik sipil."
        />
      </Head>

      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {/* Sticky Header with Dynamic Nav Filter */}
        <Navbar company={company} visibility={visibility} />

        {/* Hero Section with Hybrid 3D Scene */}
        {visibility?.hero !== false && (
          <HeroSection 
            stats={stats} 
            data={heroData} 
            show3D={visibility?.hero_3d !== false} 
          />
        )}

        {/* Services Showcase */}
        {visibility?.services !== false && (
          <ServicesSection services={services} meta={servicesMeta} />
        )}

        {/* Interactive Cost Estimator (RAB Calculator) */}
        {visibility?.estimator !== false && (
          <CostEstimator data={estimatorData} onApplyToForm={handleApplyEstimate} />
        )}

        {/* Project Portfolio */}
        {visibility?.portfolio !== false && (
          <PortfolioSection projects={projects} company={company} meta={portfolioMeta} />
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

        {/* Footer */}
        {visibility?.footer !== false && (
          <Footer company={company} visibility={visibility} />
        )}
      </div>
    </>
  );
}
