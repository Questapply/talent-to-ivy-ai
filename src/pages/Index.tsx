
import React, { useEffect, useRef } from 'react';
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
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Improved reveal animation on scroll
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
    
    // Enhanced particle effect
    const createStars = () => {
      const starsContainer = document.getElementById('stars-container');
      if (!starsContainer) return;
      
      // Clear existing stars
      starsContainer.innerHTML = '';
      
      const count = Math.min(window.innerWidth / 2.5, 150);
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3;
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
    
    // Custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      // Smooth cursor following with slight delay
      setTimeout(() => {
        cursorRef.current!.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }, 50);
    };
    
    const handleMouseDown = () => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.add('cursor-clicked');
    };
    
    const handleMouseUp = () => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.remove('cursor-clicked');
    };
    
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || 
          target.closest('button') || target.closest('a')) {
        cursorRef.current?.classList.add('cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove('cursor-hover');
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('resize', createStars);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Enhanced stars background effect */}
      <div id="stars-container" className="fixed inset-0 z-0 pointer-events-none"></div>
      
      {/* Improved gradient overlay */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(138,86,255,0.15),transparent_70%)]"></div>
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(32,227,178,0.15),transparent_70%)]"></div>
      
      {/* Enhanced grid background */}
      <div className="fixed inset-0 z-0 grid-background pointer-events-none opacity-70"></div>
      
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
      
      {/* Enhanced custom cursor effect */}
      <div 
        ref={cursorRef}
        id="custom-cursor" 
        className="hidden md:flex fixed w-8 h-8 pointer-events-none z-50 items-center justify-center rounded-full"
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute w-full h-full border border-cyan-400/50 rounded-full"></div>
        <div className="absolute w-10 h-10 border border-cyan-400/20 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default Index;
