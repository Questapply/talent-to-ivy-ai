
import React, { useRef, useEffect } from 'react';

const universities = [
  { name: "Harvard University", logo: "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png", abbr: "HU" },
  { name: "Stanford University", logo: "https://1000logos.net/wp-content/uploads/2017/02/Stanford-Logo.png", abbr: "SU" },
  { name: "MIT", logo: "https://1000logos.net/wp-content/uploads/2017/02/MIT-Logo.png", abbr: "MIT" },
  { name: "UC Berkeley", logo: "https://1000logos.net/wp-content/uploads/2022/07/UC-Berkeley-Logo.png", abbr: "UCB" },
  { name: "Princeton University", logo: "https://1000logos.net/wp-content/uploads/2018/03/Princeton-Logo-1.png", abbr: "PU" },
  { name: "University of Toronto", logo: "https://1000logos.net/wp-content/uploads/2018/02/University-of-Toronto-Logo.png", abbr: "UoT" },
  { name: "Oxford University", logo: "https://1000logos.net/wp-content/uploads/2017/03/Oxford-Logo.png", abbr: "OU" },
  { name: "Cambridge University", logo: "https://1000logos.net/wp-content/uploads/2017/02/Cambridge-Logo.png", abbr: "CU" },
  { name: "Yale University", logo: "https://1000logos.net/wp-content/uploads/2017/02/Yale-Logo.png", abbr: "YU" },
  { name: "Columbia University", logo: "https://1000logos.net/wp-content/uploads/2017/02/Columbia-University-Logo.png", abbr: "COU" }
];

const Universities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.2; // Reduced speed for smoother animation
  
  // Animation effect for scrolling the universities horizontally
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clone items for seamless looping
    const originalItems = container.querySelectorAll('.university-item');
    originalItems.forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    });
    
    let animationId: number;
    let scrollPosition = 0;
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="universities" className="py-16 border-t border-white/10 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,86,255,0.05),transparent_70%)]"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-white">
            Connecting you with top universities worldwide
          </h3>
        </div>
        
        {/* Scrolling container */}
        <div className="overflow-x-hidden relative">
          <div 
            ref={containerRef}
            className="flex gap-8 py-4 w-max"
            style={{ overflowX: 'hidden' }}
          >
            {universities.map((university, index) => (
              <div key={index} className="text-center group university-item flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 glass-effect rounded-full mx-auto mb-2 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-all overflow-hidden p-1">
                  <img 
                    src={university.logo} 
                    alt={`${university.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{university.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
