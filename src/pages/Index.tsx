
import React, { useEffect } from 'react';
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
  // Add reveal animation on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
