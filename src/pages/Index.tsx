
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
    
    // Create particle effect
    const createStars = () => {
      const starsContainer = document.getElementById('stars-container');
      if (!starsContainer) return;
      
      // Clear existing stars
      starsContainer.innerHTML = '';
      
      const count = Math.min(window.innerWidth / 3, 100);
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2;
        const opacity = Math.random() * 0.8 + 0.2;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = `${opacity}`;
        star.style.animationDuration = `${Math.random() * 50 + 10}s`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        
        starsContainer.appendChild(star);
      }
    };
    
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Stars background effect */}
      <div id="stars-container" className="fixed inset-0 z-0 pointer-events-none"></div>
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(138,86,255,0.15),transparent_70%)]"></div>
      
      {/* Grid background */}
      <div className="fixed inset-0 z-0 grid-background pointer-events-none"></div>
      
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
      
      {/* Custom cursor effect - optional */}
      <div id="custom-cursor" className="hidden md:block fixed w-8 h-8 pointer-events-none z-50 rounded-full border border-primary transition-transform duration-100 ease-out"></div>
    </div>
  );
};

export default Index;
