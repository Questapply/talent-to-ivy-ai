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
  return <section id="howitworks" className="py-24 relative overflow-hidden bg-gradient-transition bg-slate-950">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10">
            <span className="text-glow-white">The 7-Stage Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black neon-text text-shadow-lg">
            Your Journey to Success
          </h2>
          <p className="text-xl text-black/90 font-medium">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        {/* Reimagined alternating roadmap steps based on uplinq.com design */}
        <div className="space-y-32 mt-24">
          {roadmapData.slice(0, 6).map((item, index) => <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 reveal`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Content side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className={`text-3xl font-bold mb-3 ${index % 2 === 0 ? 'text-[#20E3B2]' : 'text-[#8A56FF]'}`}>
                  {item.number}. {item.title}
                </h3>
                <p className="text-lg text-black/80 mb-6">
                  {item.description}
                </p>
                
                {/* Progress indicators */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#20E3B2]"></div>
                    <div className="text-sm font-medium text-black/70">Application Status: In Progress</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#8A56FF]"></div>
                    <div className="text-sm font-medium text-black/70">AI Assistance: Active 24/7</div>
                  </div>
                </div>
              </div>
              
              {/* Visual side with enhanced animation */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-[#0A0E15] rounded-xl overflow-hidden border border-[#20E3B2]/30 shadow-lg relative">
                  {index === 0 && <div className="w-full h-full p-8 flex items-center justify-center">
                      {/* Talent Discovery Animation */}
                      <div className="w-full h-full relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#20E3B2" />
                              <stop offset="100%" stopColor="#8A56FF" />
                            </linearGradient>
                          </defs>
                          {/* Brain network visualization */}
                          <g stroke="url(#brain-gradient)" strokeWidth="1.5" fill="none" className="animate-draw">
                            <circle cx="100" cy="100" r="50" opacity="0.6" />
                            <circle cx="100" cy="100" r="65" opacity="0.4" />
                            <circle cx="100" cy="100" r="80" opacity="0.2" />
                            <path d="M60,80 C70,50 130,50 140,80" stroke="#20E3B2" strokeDasharray="5,5" />
                            <path d="M60,120 C70,150 130,150 140,120" stroke="#8A56FF" strokeDasharray="5,5" />
                            <path d="M80,60 C50,70 50,130 80,140" stroke="#20E3B2" strokeDasharray="5,5" />
                            <path d="M120,60 C150,70 150,130 120,140" stroke="#8A56FF" strokeDasharray="5,5" />
                          </g>
                          <g className="animate-pulse-gentle">
                            <circle cx="80" cy="80" r="5" fill="#20E3B2" />
                            <circle cx="120" cy="80" r="5" fill="#8A56FF" />
                            <circle cx="80" cy="120" r="5" fill="#8A56FF" />
                            <circle cx="120" cy="120" r="5" fill="#20E3B2" />
                            <circle cx="100" cy="100" r="8" fill="#FFFFFF" />
                          </g>
                        </svg>
                        <div className="absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-[#20E3B2]/10 to-transparent"></div>
                      </div>
                    </div>}
                  
                  {index === 1 && <div className="w-full h-full p-8 flex items-center justify-center">
                      {/* Application Process Animation */}
                      <div className="w-full h-full relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            <linearGradient id="doc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8A56FF" />
                              <stop offset="100%" stopColor="#20E3B2" />
                            </linearGradient>
                          </defs>
                          <g className="animate-feature-insight-wave">
                            {/* Document stack */}
                            <rect x="50" y="50" width="100" height="130" rx="5" fill="#0F1319" stroke="#8A56FF" strokeWidth="2" />
                            <rect x="55" y="45" width="100" height="130" rx="5" fill="#0F1319" stroke="#20E3B2" strokeWidth="2" />
                            <rect x="60" y="40" width="100" height="130" rx="5" fill="#0F1319" stroke="url(#doc-gradient)" strokeWidth="2" />
                            
                            {/* Document lines */}
                            <line x1="80" y1="70" x2="140" y2="70" stroke="#8A56FF" strokeWidth="2" />
                            <line x1="80" y1="90" x2="140" y2="90" stroke="#20E3B2" strokeWidth="2" />
                            <line x1="80" y1="110" x2="120" y2="110" stroke="#8A56FF" strokeWidth="2" />
                            
                            {/* Status indicator */}
                            <circle cx="140" cy="140" r="15" fill="#20E3B2" opacity="0.3" className="animate-pulse-gentle" />
                            <path d="M130,140 L138,148 L150,133" stroke="#20E3B2" strokeWidth="3" fill="none" />
                          </g>
                          <g className="animate-pulse">
                            <path d="M20,180 L180,180" stroke="#8A56FF" strokeWidth="1" strokeDasharray="5,5" />
                            <circle cx="60" cy="180" r="5" fill="#8A56FF" />
                            <circle cx="100" cy="180" r="5" fill="#20E3B2" />
                            <circle cx="140" cy="180" r="5" fill="#8A56FF" />
                          </g>
                        </svg>
                      </div>
                    </div>}
                  
                  {index === 2 && <div className="w-full h-full p-8 flex items-center justify-center">
                      {/* University Selection Animation */}
                      <div className="w-full h-full relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            <linearGradient id="univ-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#20E3B2" />
                              <stop offset="100%" stopColor="#8A56FF" />
                            </linearGradient>
                          </defs>
                          <g>
                            {/* University building base */}
                            <rect x="40" y="140" width="120" height="20" fill="#0F1319" stroke="url(#univ-gradient)" strokeWidth="2" />
                            
                            {/* Columns and roof */}
                            <rect x="50" y="80" width="10" height="60" fill="#0F1319" stroke="#20E3B2" strokeWidth="1" />
                            <rect x="80" y="80" width="10" height="60" fill="#0F1319" stroke="#20E3B2" strokeWidth="1" />
                            <rect x="110" y="80" width="10" height="60" fill="#0F1319" stroke="#20E3B2" strokeWidth="1" />
                            <rect x="140" y="80" width="10" height="60" fill="#0F1319" stroke="#20E3B2" strokeWidth="1" />
                            <path d="M30,80 L170,80 L100,50 Z" fill="#0F1319" stroke="#8A56FF" strokeWidth="2" />
                            
                            {/* University selection animation */}
                            <circle cx="100" cy="30" r="15" fill="#0F1319" stroke="#8A56FF" strokeWidth="2" className="animate-pulse-gentle" />
                            <g className="animate-feature-data-pulse">
                              <circle cx="60" cy="100" r="8" fill="#0F1319" stroke="#20E3B2" strokeWidth="2" />
                              <circle cx="85" cy="100" r="8" fill="#0F1319" stroke="#8A56FF" strokeWidth="2" />
                              <circle cx="115" cy="100" r="8" fill="#0F1319" stroke="#20E3B2" strokeWidth="2" />
                              <circle cx="140" cy="100" r="8" fill="#0F1319" stroke="#8A56FF" strokeWidth="2" />
                            </g>
                            <path d="M60,100 Q100,70 140,100" fill="none" stroke="url(#univ-gradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-draw" />
                          </g>
                          {/* Selection indicator */}
                          <circle cx="115" cy="100" r="12" fill="none" stroke="#20E3B2" strokeWidth="2" className="animate-pulse" />
                        </svg>
                        <div className="absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-[#8A56FF]/10 to-transparent"></div>
                      </div>
                    </div>}
                  
                  {index === 3 && <div className="w-full h-full p-8 flex items-center justify-center">
                      {/* Essay Writing Animation */}
                      <div className="w-full h-full relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            <linearGradient id="essay-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8A56FF" />
                              <stop offset="100%" stopColor="#20E3B2" />
                            </linearGradient>
                          </defs>
                          {/* Document with writing */}
                          <rect x="40" y="40" width="120" height="150" rx="5" fill="#0F1319" stroke="url(#essay-gradient)" strokeWidth="2" />
                          
                          <g className="animate-feature-insight-wave">
                            <line x1="60" y1="60" x2="140" y2="60" stroke="#8A56FF" strokeWidth="2" />
                            <line x1="60" y1="80" x2="140" y2="80" stroke="#20E3B2" strokeWidth="1" />
                            <line x1="60" y1="100" x2="140" y2="100" stroke="#8A56FF" strokeWidth="1" />
                            <line x1="60" y1="120" x2="120" y2="120" stroke="#20E3B2" strokeWidth="1" />
                            
                            {/* Animated cursor */}
                            <rect x="122" y="115" width="2" height="10" fill="#FFFFFF" className="animate-pulse" />
                          </g>
                          
                          {/* AI assistance */}
                          <g className="animate-pulse-gentle">
                            <circle cx="160" cy="50" r="10" fill="#0F1319" stroke="#20E3B2" strokeWidth="2" />
                            <text x="160" y="54" textAnchor="middle" fill="#20E3B2" fontWeight="bold" fontSize="12">AI</text>
                          </g>
                          <path d="M160,60 Q155,80 120,80" fill="none" stroke="#20E3B2" strokeWidth="1" strokeDasharray="2,2" />
                        </svg>
                      </div>
                    </div>}

                  {index === 4 && <div className="w-full h-full p-8 flex items-center justify-center">
                      {/* Interview Preparation Animation */}
                      <div className="w-full h-full relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            <linearGradient id="interview-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#20E3B2" />
                              <stop offset="100%" stopColor="#8A56FF" />
                            </linearGradient>
                          </defs>
                          {/* Video interview frame */}
                          <rect x="30" y="30" width="140" height="100" rx="5" fill="#0F1319" stroke="url(#interview-gradient)" strokeWidth="2" />
                          
                          <g className="animate-feature-data-pulse">
                            {/* Person silhouette */}
                            <circle cx="100" cy="60" r="15" fill="#8A56FF" opacity="0.7" />
                            <path d="M80,90 Q100,110 120,90" fill="none" stroke="#8A56FF" strokeWidth="2" />
                            
                            {/* AI interview assistant */}
                            <circle cx="50" cy="60" r="10" fill="#20E3B2" opacity="0.5" />
                            <text x="50" y="64" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="8">AI</text>
                          </g>
                          
                          {/* Interview metrics */}
                          <rect x="40" y="140" width="120" height="30" rx="5" fill="#0F1319" stroke="#20E3B2" strokeWidth="1" />
                          <line x1="50" y1="155" x2="80" y2="155" stroke="#8A56FF" strokeWidth="5" strokeLinecap="round" />
                          <line x1="90" y1="155" x2="110" y2="155" stroke="#20E3B2" strokeWidth="5" strokeLinecap="round" />
                          <line x1="120" y1="155" x2="150" y2="155" stroke="#8A56FF" strokeWidth="5" strokeLinecap="round" />
                          
                          <path d="M30,180 Q100,200 170,180" fill="none" stroke="url(#interview-gradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-draw" />
                        </svg>
                        <div className="absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-[#20E3B2]/10 to-transparent"></div>
                      </div>
                    </div>}

                  {index === 5 && <div className="w-full h-full p-8 flex items-center justify-center">
                      {/* Success Celebration Animation */}
                      <div className="w-full h-full relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            <linearGradient id="success-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8A56FF" />
                              <stop offset="100%" stopColor="#20E3B2" />
                            </linearGradient>
                          </defs>
                          
                          {/* Celebration elements */}
                          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#success-gradient)" strokeWidth="2" className="animate-feature-university-rotate" style={{
                      transformOrigin: 'center'
                    }} />
                          
                          <g className="animate-pulse-gentle">
                            {/* Trophy */}
                            <path d="M85,70 L115,70 L115,100 Q100,120 85,100 Z" fill="#0F1319" stroke="#20E3B2" strokeWidth="2" />
                            <rect x="95" y="100" width="10" height="20" fill="#0F1319" stroke="#20E3B2" strokeWidth="1" />
                            <rect x="85" y="120" width="30" height="5" fill="#0F1319" stroke="#20E3B2" strokeWidth="1" />
                            
                            {/* Star bursts */}
                            <path d="M40,40 L45,55 L60,60 L45,65 L40,80 L35,65 L20,60 L35,55 Z" fill="#8A56FF" opacity="0.7" />
                            <path d="M160,40 L165,55 L180,60 L165,65 L160,80 L155,65 L140,60 L155,55 Z" fill="#20E3B2" opacity="0.7" />
                            <path d="M40,160 L45,145 L60,140 L45,135 L40,120 L35,135 L20,140 L35,145 Z" fill="#20E3B2" opacity="0.7" />
                            <path d="M160,160 L165,145 L180,140 L165,135 L160,120 L155,135 L140,140 L155,145 Z" fill="#8A56FF" opacity="0.7" />
                          </g>
                          
                          {/* Success text */}
                          <text x="100" y="160" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="14">ACCEPTED</text>
                        </svg>
                        
                        {/* Confetti effect */}
                        <div className="absolute inset-0">
                          {Array.from({
                      length: 20
                    }).map((_, i) => <div key={i} className="absolute w-2 h-2 rounded-full" style={{
                      backgroundColor: i % 2 === 0 ? '#20E3B2' : '#8A56FF',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3,
                      animation: `feature-data-pulse ${Math.random() * 3 + 2}s infinite`
                    }}></div>)}
                        </div>
                      </div>
                    </div>}
                </div>
              </div>
            </div>)}
        </div>

        {/* 3D Cube Animation Section */}
        <div className="mt-24 py-24 bg-gradient-transition-reverse">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-black text-sm font-medium border border-black/10">
              <span>Interactive Experience</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-black">
              Visualize Your Path
            </h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto mb-12">
              Our 3D interactive platform helps you visualize every step of your application journey
            </p>
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
      </div>
    </section>;
};
export default HowItWorks;