
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1974')] bg-no-repeat bg-cover opacity-5"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block mb-2">Discover Your Talents,</span>
              <span className="text-gradient">Unlock Your Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              The first AI platform that identifies your unique talents and connects you to top universities with incredible speed and accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-dark transition-colors">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg bg-white shadow-xl overflow-hidden animate-float">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1970" 
                alt="AI University Application" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    AI
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">AI Talent Advisor</p>
                    <p className="text-sm text-gray-600 typing-effect">Based on your profile, I've identified your strengths in analytical thinking and creative problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-light rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
