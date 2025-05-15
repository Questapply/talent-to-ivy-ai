import React, { useEffect } from 'react';
import { roadmapData } from './roadmap/RoadmapData';
import { Users, Check } from 'lucide-react';

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
    <section id="howitworks" className="py-24 relative overflow-hidden">
      {/* Background transition from black to white */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-white z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10">
            <span className="text-glow-white">The 7-Stage Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-text text-shadow-lg">
            Your Journey to Success
          </h2>
          <p className="text-xl text-white/90 font-medium">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        {/* Timeline roadmap with glass design */}
        <div className="relative mt-24 pb-10">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#20E3B2] to-[#8A56FF] z-0"></div>
          
          {roadmapData.map((item, index) => (
            <div 
              key={index} 
              className={`relative z-10 flex mb-32 last:mb-0 reveal ${
                item.position === "left" ? "flex-row" : "flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot with glowing effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-[#20E3B2] bg-black z-20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-lg">{item.number}</span>
                <div className="absolute w-full h-full rounded-full animate-pulse-gentle opacity-50 border border-[#20E3B2]"></div>
              </div>
              
              {/* Content */}
              <div className={`w-1/2 ${item.position === "left" ? "pr-12" : "pl-12"}`}>
                {/* Empty space for alignment */}
              </div>
              
              <div className={`w-1/2 ${item.position === "left" ? "pl-12" : "pr-12"}`}>
                {/* Glass Card */}
                <div className="rounded-xl p-6 border border-[#20E3B2]/30 shadow-xl relative overflow-hidden backdrop-blur-md bg-black/40 tech-border">
                  {/* Card header with icon and title */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center border border-[#20E3B2]/40 mr-4">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  {/* Card description */}
                  <p className="text-white/80 mb-6">{item.description}</p>
                  
                  {/* Animation area based on roadmap item */}
                  <div className="h-32 bg-black/30 rounded-lg mb-6 flex items-center justify-center p-2 overflow-hidden">
                    {/* Custom animations per roadmap item */}
                    {index === 0 && (
                      <div className="relative w-full h-full">
                        {/* School finder animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-24 h-24">
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin" style={{ animationDuration: '20s' }}></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
                            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full"></div>
                            <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-10 h-10 bg-black/80 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                              <div className="w-6 h-6 text-cyan-400">
                                {item.icon}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Program finder animation */}
                        <div className="grid grid-cols-3 gap-2 w-full h-full">
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-md flex items-center justify-center p-1 backdrop-blur-sm">
                              <div className="text-xs text-cyan-400 opacity-80">
                                {['CS', 'BIO', 'ENG', 'MED', 'ART', 'LAW', 'BUS', 'ECO', 'PSY'][i]}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full animate-pulse-gentle flex items-center justify-center">
                            <div className="w-10 h-10 bg-black/80 rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 text-cyan-400">
                                {item.icon}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="relative w-full h-full">
                        {/* Professor finder animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex space-x-4">
                            {[0, 1, 2].map((i) => (
                              <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-b from-cyan-400/20 to-transparent flex items-center justify-center animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                                <div className="w-10 h-10 rounded-full bg-black/80 flex items-center justify-center">
                                  <div className="w-6 h-6 text-cyan-400">
                                    <Users size={18} />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="absolute bottom-2 w-full text-center text-xs text-cyan-400/80">
                          Connect with leading professors
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="relative w-full h-full">
                        {/* Resume builder animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-24 border border-cyan-400/30 rounded-md bg-black/40 p-2 flex flex-col">
                            <div className="w-full h-2 bg-white/20 rounded-sm mb-2"></div>
                            <div className="w-4/5 h-2 bg-white/20 rounded-sm mb-2"></div>
                            <div className="w-3/4 h-2 bg-white/20 rounded-sm mb-1"></div>
                            <div className="w-5/6 h-2 bg-white/20 rounded-sm mb-2"></div>
                            <div className="w-2/3 h-2 bg-white/20 rounded-sm"></div>
                            <div className="absolute top-0 right-0 w-1 h-full bg-cyan-400/30 animate-pulse-gentle"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 4 && (
                      <div className="relative w-full h-full">
                        {/* SOP builder animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-24 border border-cyan-400/30 rounded-md bg-black/40 p-3 relative">
                            <div className="typing-effect w-full overflow-hidden whitespace-nowrap" style={{animationIterationCount: 'infinite', animationDuration: '4s'}}>
                              <div className="h-2 w-full bg-cyan-400/40 rounded mb-1"></div>
                              <div className="h-2 w-4/5 bg-cyan-400/40 rounded mb-1"></div>
                              <div className="h-2 w-full bg-cyan-400/40 rounded"></div>
                            </div>
                            <div className="absolute bottom-3 left-3 w-2 h-4 bg-cyan-400/80 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 5 && (
                      <div className="relative w-full h-full">
                        {/* LOR animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex space-x-2">
                            <div className="w-20 h-24 border border-cyan-400/30 rounded-md bg-black/40 p-3 relative rotate-[-5deg]">
                              <div className="h-2 w-full bg-white/20 rounded mb-1"></div>
                              <div className="h-2 w-4/5 bg-white/20 rounded mb-1"></div>
                              <div className="h-2 w-full bg-white/20 rounded mb-1"></div>
                              <div className="absolute bottom-3 right-3 w-8 h-5 border-b border-cyan-400/70"></div>
                            </div>
                            <div className="w-20 h-24 border border-cyan-400/30 rounded-md bg-black/40 p-3 relative rotate-[5deg] mt-2">
                              <div className="h-2 w-full bg-white/20 rounded mb-1"></div>
                              <div className="h-2 w-4/5 bg-white/20 rounded mb-1"></div>
                              <div className="h-2 w-full bg-white/20 rounded mb-1"></div>
                              <div className="absolute bottom-3 right-3 w-8 h-5 border-b border-purple-400/70"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 6 && (
                      <div className="relative w-full h-full">
                        {/* Application submission animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-32 h-16">
                            <div className="w-24 h-24 border border-cyan-400/30 rounded-md bg-black/40 absolute left-0 -top-4 rotate-[-5deg] z-10"></div>
                            <div className="w-24 h-24 border border-cyan-400/30 rounded-md bg-black/40 absolute right-0 -top-6 rotate-[5deg] z-20"></div>
                            <div className="w-24 h-24 border border-cyan-400/30 rounded-md bg-black/40 absolute left-4 -top-3 z-30 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center">
                                <Check className="h-5 w-5 text-cyan-400" />
                              </div>
                            </div>
                            <div className="absolute z-40 top-16 left-1/2 transform -translate-x-1/2 flex space-x-1">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style={{animationDelay: '0s'}}></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style={{animationDelay: '0.3s'}}></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style={{animationDelay: '0.6s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Stats information */}
                  <div className="grid grid-cols-2 gap-3">
                    {item.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-black/30 rounded-lg p-3 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          {stat.icon}
                          <span className="text-xs text-white/70 ml-2">{stat.label}</span>
                        </div>
                        <div className="text-cyan-400 text-xl font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional info */}
                  {item.additionalInfo && (
                    <div className="mt-3 text-xs text-white/60">
                      {item.additionalInfo}
                    </div>
                  )}
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-12 h-12 rounded-full bg-gradient-to-r from-[#20E3B2]/5 to-[#8A56FF]/5 blur-xl"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#8A56FF]/5 to-[#20E3B2]/5 blur-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
