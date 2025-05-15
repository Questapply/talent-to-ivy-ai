
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-cyan-500/80 opacity-10"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,86,255,0.3),transparent_70%)] animate-pulse-gentle"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto card-glass p-10 rounded-2xl border border-white/10">
          <div className="inline-block mb-3 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium border border-white/10">
            Get Started Today
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your University Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of students who discovered their talents and got accepted to their dream universities with QuestApply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 group neon-glow">
              <span className="flex items-center">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
          
          {/* Decorative pulsing dots */}
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary animate-pulse-gentle"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-cyan-400 animate-pulse-gentle" style={{animationDelay: "1s"}}></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
