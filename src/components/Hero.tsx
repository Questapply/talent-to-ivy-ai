
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1974')] bg-fixed bg-no-repeat bg-cover opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-gentle" style={{animationDelay: "1s"}}></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 animate-fade-up">
            <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Revolutionary AI for Education
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block mb-2">Discover Your Talents,</span>
              <span className="text-gradient">Unlock Your Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              The first AI platform that identifies your unique talents and connects you to top universities with incredible speed and accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-dark transition-colors relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-up" style={{animationDelay: "0.2s"}}>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden animate-float shadow-[0_20px_50px_rgba(138,86,255,0.15)]">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1970" 
                alt="AI University Application" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              {/* Glass card */}
              <div className="absolute bottom-6 left-6 right-6 card-glass p-5 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold shadow-lg">
                    AI
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">AI Talent Advisor</p>
                    <p className="text-sm text-gray-600 typing-effect">Based on your profile, I've identified your strengths in analytical thinking and creative problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-200 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-50"></div>
            
            {/* Animating badge */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg flex items-center gap-2 animate-float" style={{animationDelay: "1.5s"}}>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium">AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
