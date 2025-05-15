
import React, { useEffect } from 'react';
import { roadmapData } from './roadmap/RoadmapData';

const HowItWorks = () => {
  // Initialize reveal animation on component mount
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
    revealOnScroll(); // Initial check on mount
    
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <section id="howitworks" className="py-24 relative overflow-hidden bg-[#0A0E15]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,227,178,0.15),transparent_70%)] animate-pulse-gentle"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10">
            <span className="text-glow-white">The 7-Stage Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-text text-shadow-lg">
            Your Journey to Success
          </h2>
          <p className="text-xl text-white/90 font-medium text-shadow-sm">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        {/* Timeline roadmap section - completely redesigned to match the provided images */}
        <div className="relative mt-20">
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#20E3B2] -translate-x-1/2"></div>
          
          <div className="relative">
            {roadmapData.map((item, index) => (
              <div key={index} className="mb-32 last:mb-0 reveal">
                {/* Timeline dot indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(32,227,178,0.7)]"></div>
                </div>
                
                {/* Card positioning based on left/right */}
                <div className={`flex ${item.position === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${item.position === 'right' && 'ml-auto'}`}>
                    {/* Main roadmap card to match the exact provided design */}
                    <div className="relative">
                      {/* Step number circle */}
                      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#0A0E15] border border-[#20E3B2] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(32,227,178,0.4)]">
                        <div className="text-[#20E3B2] text-2xl font-bold">{item.number}</div>
                      </div>
                      
                      {/* Main card */}
                      <div className="bg-[#0A0E15] border border-[#20E3B2]/30 rounded-lg overflow-hidden shadow-lg relative">
                        {/* Cyan border glow */}
                        <div className="absolute inset-0 border border-[#20E3B2]/30 rounded-lg pointer-events-none shadow-[0_0_10px_rgba(32,227,178,0.2)]"></div>
                        
                        {/* Card header */}
                        <div className="p-4 border-b border-[#20E3B2]/20">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        
                        {/* Card content */}
                        <div className="p-4">
                          {/* Icon and description */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="rounded-md bg-[#0F1319] w-12 h-12 flex items-center justify-center border border-[#20E3B2]/20">
                              {item.icon}
                            </div>
                            <p className="text-white/80">{item.description}</p>
                          </div>
                          
                          {/* Progress bar - styling to match exactly the design */}
                          <div className="w-full h-2 bg-[#0F1319] rounded-full overflow-hidden mb-1">
                            <div 
                              className="h-full bg-gradient-to-r from-[#8A56FF] to-[#20E3B2]" 
                              style={{ width: '75%' }}
                            ></div>
                          </div>
                          <div className="text-right text-xs text-[#20E3B2] mb-4">75%</div>
                          
                          {/* Status boxes to match the exact design in images */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0F1319] rounded-md p-3">
                              <div className="text-xs text-white/60">Application Status</div>
                              <div className="text-[#20E3B2] font-medium">In Progress</div>
                              <div className="mt-2 h-1 w-full bg-[#0A0E15] rounded-full overflow-hidden">
                                <div className="h-full bg-[#8A56FF]/70 rounded-full" style={{ width: '40%' }}></div>
                              </div>
                            </div>
                            <div className="bg-[#0F1319] rounded-md p-3">
                              <div className="text-xs text-white/60">AI Assistance</div>
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#20E3B2]"></div>
                                <span className="text-[#20E3B2] font-medium">Active</span>
                              </div>
                              <div className="mt-2 text-xs text-white/60">24/7 Support Available</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Cube Animation Section - Added after roadmap */}
        <div className="mt-24 flex justify-center items-center">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10">
              <span className="text-glow-white">Interactive Experience</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white neon-text">
              Visualize Your Path
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
              Our 3D interactive platform helps you visualize every step of your application journey
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="scene mx-auto mb-20">
            <div className="cube">
              <div className="cube__face cube__face--front">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-[#20E3B2] text-4xl mb-2">01</div>
                  <span className="text-xl text-white">School</span>
                </div>
              </div>
              <div className="cube__face cube__face--back">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-[#20E3B2] text-4xl mb-2">02</div>
                  <span className="text-xl text-white">Program</span>
                </div>
              </div>
              <div className="cube__face cube__face--right">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-[#20E3B2] text-4xl mb-2">03</div>
                  <span className="text-xl text-white">Research</span>
                </div>
              </div>
              <div className="cube__face cube__face--left">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-[#20E3B2] text-4xl mb-2">04</div>
                  <span className="text-xl text-white">Apply</span>
                </div>
              </div>
              <div className="cube__face cube__face--top">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-[#20E3B2] text-4xl mb-2">05</div>
                  <span className="text-xl text-white">Essays</span>
                </div>
              </div>
              <div className="cube__face cube__face--bottom">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-[#20E3B2] text-4xl mb-2">06</div>
                  <span className="text-xl text-white">Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
