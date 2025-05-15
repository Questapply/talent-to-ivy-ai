
import React, { useEffect } from 'react';
import { roadmapData } from './roadmap/RoadmapData';
import { Search, School, GraduationCap, FileText, Send } from 'lucide-react';

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
    <section id="howitworks" className="py-24 relative overflow-hidden bg-black">
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
        
        {/* Timeline roadmap based on the reference image */}
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
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#20E3B2] border-4 border-black z-20"></div>
              
              {/* Content */}
              <div className={`w-1/2 ${item.position === "left" ? "pr-12" : "pl-12"}`}>
                {/* Empty space for alignment */}
              </div>
              
              <div className={`w-1/2 ${item.position === "left" ? "pl-12" : "pr-12"}`}>
                {/* Card */}
                <div className="bg-[#0A0E15] rounded-xl p-6 border border-[#20E3B2]/30 shadow-xl relative overflow-hidden">
                  {/* Card header with number and title */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#20E3B2] flex items-center justify-center text-black font-bold mr-3">
                      {item.number}
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  {/* Card content */}
                  <p className="text-white/70 mb-6">{item.description}</p>
                  
                  {/* Progress indicators */}
                  <div className="space-y-4 mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">Application Status</span>
                      <span className="text-sm text-white/80 font-medium">In Progress</span>
                    </div>
                    <div className="w-full bg-[#1A1E27] h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#20E3B2] to-[#8A56FF] rounded-full"
                        style={{ width: `${item.progressValue}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#20E3B2] mr-2"></div>
                        <span className="text-xs text-white/60">AI Support Available</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#8A56FF] mr-2"></div>
                        <span className="text-xs text-white/60">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Minimal animations based on the roadmap item */}
                  <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10">
                    {index === 0 && (
                      <div className="animate-float">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="20" fill="none" stroke="#20E3B2" strokeWidth="1" />
                          <path d="M50,30 L50,70" stroke="#20E3B2" strokeWidth="1" />
                          <path d="M30,50 L70,50" stroke="#20E3B2" strokeWidth="1" />
                          <circle cx="50" cy="50" r="5" fill="#20E3B2" className="animate-pulse-gentle" />
                          <circle cx="40" cy="40" r="3" fill="#8A56FF" className="animate-pulse-gentle" />
                          <circle cx="60" cy="60" r="3" fill="#8A56FF" className="animate-pulse-gentle" />
                        </svg>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="animate-float">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect x="30" y="30" width="40" height="40" fill="none" stroke="#8A56FF" strokeWidth="1" />
                          <line x1="30" y1="40" x2="70" y2="40" stroke="#8A56FF" strokeWidth="1" />
                          <line x1="40" y1="30" x2="40" y2="70" stroke="#8A56FF" strokeWidth="1" />
                          <circle cx="50" cy="50" r="10" fill="none" stroke="#20E3B2" strokeWidth="1" className="animate-pulse-gentle" />
                        </svg>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="animate-float">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="30" r="10" fill="none" stroke="#20E3B2" strokeWidth="1" />
                          <path d="M50,40 L50,60" stroke="#20E3B2" strokeWidth="1" />
                          <path d="M40,70 L60,70" stroke="#20E3B2" strokeWidth="1" />
                          <path d="M30,50 L70,50" stroke="#8A56FF" strokeWidth="1" strokeDasharray="2,2" />
                          <circle cx="30" cy="50" r="3" fill="#8A56FF" className="animate-pulse-gentle" />
                          <circle cx="70" cy="50" r="3" fill="#8A56FF" className="animate-pulse-gentle" />
                        </svg>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="animate-float">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect x="30" y="30" width="40" height="40" fill="none" stroke="#20E3B2" strokeWidth="1" />
                          <line x1="40" y1="40" x2="60" y2="40" stroke="#8A56FF" strokeWidth="1" />
                          <line x1="40" y1="50" x2="60" y2="50" stroke="#8A56FF" strokeWidth="1" />
                          <line x1="40" y1="60" x2="50" y2="60" stroke="#8A56FF" strokeWidth="1" />
                          <circle cx="65" cy="60" r="2" fill="#20E3B2" className="animate-pulse-gentle" />
                        </svg>
                      </div>
                    )}
                    
                    {index === 4 && (
                      <div className="animate-float">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="#8A56FF" strokeWidth="1" />
                          <line x1="40" y1="40" x2="60" y2="40" stroke="#20E3B2" strokeWidth="1" />
                          <line x1="40" y1="50" x2="60" y2="50" stroke="#20E3B2" strokeWidth="1" />
                          <line x1="40" y1="60" x2="50" y2="60" stroke="#20E3B2" strokeWidth="1" />
                          <circle cx="65" cy="35" r="4" fill="none" stroke="#20E3B2" strokeWidth="1" className="animate-pulse-gentle" />
                          <text x="65" y="37" fontSize="5" fill="#20E3B2" textAnchor="middle">AI</text>
                        </svg>
                      </div>
                    )}
                    
                    {index === 5 && (
                      <div className="animate-float">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path d="M30,40 C30,30 70,30 70,40" stroke="#20E3B2" strokeWidth="1" fill="none" />
                          <path d="M30,60 C30,70 70,70 70,60" stroke="#20E3B2" strokeWidth="1" fill="none" />
                          <path d="M30,40 L30,60" stroke="#8A56FF" strokeWidth="1" />
                          <path d="M70,40 L70,60" stroke="#8A56FF" strokeWidth="1" />
                          <circle cx="50" cy="50" r="5" fill="#8A56FF" className="animate-pulse-gentle" />
                        </svg>
                      </div>
                    )}
                    
                    {index === 6 && (
                      <div className="animate-float">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path d="M40,30 L60,30 L70,50 L50,70 L30,50 Z" fill="none" stroke="#20E3B2" strokeWidth="1" />
                          <path d="M50,30 L50,70" stroke="#8A56FF" strokeWidth="1" strokeDasharray="2,2" />
                          <circle cx="50" cy="30" r="3" fill="#8A56FF" />
                          <circle cx="50" cy="70" r="3" fill="#8A56FF" />
                          <circle cx="50" cy="50" r="5" fill="none" stroke="#20E3B2" strokeWidth="1" className="animate-pulse-gentle" />
                        </svg>
                      </div>
                    )}
                  </div>
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
