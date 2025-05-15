
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1974')] bg-fixed bg-no-repeat bg-cover opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-gentle" style={{animationDelay: "1s"}}></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 animate-fade-up">
            <div className="inline-block mb-3 px-3 py-1 bg-cyan-400/10 rounded-full text-cyan-400 text-sm font-medium border border-cyan-400/20 glow-sm">
              Revolutionary AI for Education
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-shadow-lg">
              <span className="block mb-2 text-white">Discover Your Talents,</span>
              <span className="text-gradient-cyan">Unlock Your Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              The first AI platform that identifies your unique talents and connects you to top universities with incredible speed and accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black transition-colors relative overflow-hidden group cyan-glow">
                <span className="relative z-10 flex items-center font-medium">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-up" style={{animationDelay: "0.2s"}}>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden animate-float shadow-[0_0_30px_rgba(32,227,178,0.3)] card-glow">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1970" 
                alt="AI University Application" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              {/* Glass card */}
              <div className="absolute bottom-6 left-6 right-6 glass-effect p-5 rounded-xl border border-cyan-400/20">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black font-semibold shadow-lg cyan-glow">
                    AI
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white text-shadow-sm">AI Talent Advisor</p>
                    <p className="text-sm text-white/90 typing-effect">Based on your profile, I've identified your strengths in analytical thinking and creative problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-50"></div>
            
            {/* Animating badge */}
            <div className="absolute top-4 right-4 glass-effect px-3 py-2 rounded-full shadow-lg flex items-center gap-2 animate-float" style={{animationDelay: "1.5s"}}>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
