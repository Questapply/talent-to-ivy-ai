
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Check } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Add floating animation effect for elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - heroRect.left;
      const y = e.clientY - heroRect.top;
      
      const moveElements = heroRef.current.querySelectorAll('.move-on-hover');
      
      moveElements.forEach((elem: any, index) => {
        const strength = (index + 1) * 0.01;
        const translateX = (x - heroRect.width / 2) * strength;
        const translateY = (y - heroRect.height / 2) * strength;
        
        elem.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-28 lg:pb-20 min-h-[90vh] flex items-center"
    >
      {/* Improved background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(32,227,178,0.15),transparent_60%)] bg-black"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/lovable-uploads/6e08f316-9fee-4007-81b5-2c62909304ea.png')] bg-no-repeat bg-cover opacity-[0.03]"></div>
      
      {/* Advanced decorative elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-gentle move-on-hover"></div>
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-cyan-400/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-gentle move-on-hover" style={{animationDelay: "1.5s"}}></div>
      <div className="absolute top-[40%] left-[35%] w-64 h-64 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-gentle move-on-hover" style={{animationDelay: "2.3s"}}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Visual area with green border */}
          <div className="flex-1 relative reveal">
            <div className="relative p-3 rounded-2xl overflow-hidden animate-float shadow-[0_0_40px_rgba(32,227,178,0.35)] card-glow" style={{background: "linear-gradient(to right, #033b1a, #0c6a33)"}}>
              <div className="w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden">
                {/* Updated student image to fill the container fully */}
                <img 
                  src="/lovable-uploads/44dd0539-debe-41c8-bea4-26e09cf0a9d8.png" 
                  alt="Students working together" 
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
              
              {/* AI Badge - top right */}
              <div className="absolute top-6 right-6 glass-effect px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-md border border-white/20" style={{backgroundColor: 'rgba(20, 20, 20, 0.7)'}}>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white">AI Powered</span>
              </div>
              
              {/* Success Rate stat - positioned on left side */}
              <div className="absolute top-[25%] -left-16 glass-effect px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border border-white/10 flex items-center gap-3" style={{backgroundColor: 'rgba(20, 20, 20, 0.7)'}}>
                <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/80 font-medium">Success Rate</div>
                  <div className="text-2xl font-bold text-white">98.7%</div>
                </div>
              </div>
              
              {/* Universities stat - positioned on right side */}
              <div className="absolute bottom-[25%] right-6 glass-effect px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border border-white/10 flex items-center gap-3" style={{backgroundColor: 'rgba(20, 20, 20, 0.7)'}}>
                <div className="w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/80 font-medium">Universities</div>
                  <div className="text-2xl font-bold text-white">250+</div>
                </div>
              </div>
              
              {/* AI Talent Advisor UI at bottom */}
              <div className="absolute bottom-6 left-6 right-6 glass-effect p-4 backdrop-blur-md border border-white/10" style={{backgroundColor: 'rgba(20, 20, 20, 0.7)'}}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black shrink-0">
                    AI
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-white text-lg">AI Talent Advisor</span>
                      <span className="px-2 py-0.5 rounded-full text-xs bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">Active</span>
                    </div>
                    <p className="text-sm text-white">Based on your profile, I've identified your strengths in analytical thinking and creative problem solving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content area - right side */}
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 reveal" style={{animationDelay: "0.3s"}}>
            <div className="inline-flex items-center mb-3 px-4 py-1.5 bg-cyan-400/10 rounded-full text-cyan-400 text-sm font-medium border border-cyan-400/20 animate-float shadow-[0_0_15px_rgba(32,227,178,0.3)]">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Revolutionary AI for Education
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-shadow-lg">
              <span className="text-white">Discover Your Talents,</span><br/>
              <span className="text-gradient-cyan">Unlock Your Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              The first AI platform that identifies your unique talents and connects you to top universities with incredible speed and accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:opacity-90 text-black transition-all relative overflow-hidden group min-w-[180px] h-14">
                <span className="relative z-10 flex items-center font-semibold text-base">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium min-w-[180px] h-14 backdrop-blur-sm">
                <span className="mr-2">▶</span> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

