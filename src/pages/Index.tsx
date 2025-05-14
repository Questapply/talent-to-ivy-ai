
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TalentDiscovery from '@/components/TalentDiscovery';
import AIAssistant from '@/components/AIAssistant';
import Testimonials from '@/components/Testimonials';
import Universities from '@/components/Universities';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TalentDiscovery />
      <AIAssistant />
      <Universities />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
