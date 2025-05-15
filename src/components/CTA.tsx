
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10"></div>
      
      {/* Dynamic animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,86,255,0.3),transparent_70%)] animate-pulse-gentle"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{animationDelay: "1.5s"}}></div>
      
      {/* Colored dots in corners similar to the image */}
      <div className="absolute top-10 right-10 w-8 h-8 rounded-full bg-purple-500 opacity-60 animate-pulse-gentle"></div>
      <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-cyan-400 opacity-60 animate-pulse-gentle" style={{animationDelay: "1s"}}></div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto card-glass p-10 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(138,86,255,0.15)] reveal">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium border border-white/10 animate-pulse-gentle">
            Get Started Today
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text leading-tight tracking-tight reveal">
            Ready to Transform Your <span className="text-gradient-cyan">University Journey?</span>
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto reveal">
            Join thousands of students who discovered their talents and got accepted to their dream universities with QuestApply.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center reveal">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 group neon-glow px-8 py-6 text-lg">
              <span className="flex items-center font-medium">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
              Watch Demo
            </Button>
          </div>
          
          {/* Enhanced decorative pulsing dots */}
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary animate-pulse-gentle"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-cyan-400 animate-pulse-gentle" style={{animationDelay: "1s"}}></div>
          
          {/* Added glow effect to the card edges */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
