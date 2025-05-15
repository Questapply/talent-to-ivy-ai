
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
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.2; // Slower for smoother animation
  
  // Animation effect for scrolling the universities from right to left
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clone items for seamless looping
    const originalItems = container.querySelectorAll('.university-item');
    originalItems.forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    });
    
    // Set initial position
    container.scrollLeft = 0;
    let position = 0;
    
    const scroll = () => {
      position += scrollSpeed;
      
      // Reset when we've scrolled through all original items
      if (position >= container.scrollWidth / 2) {
        // Jump back to start without animation
        position = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = position;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };
    
    animationRef.current = requestAnimationFrame(scroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  // Resume animation when not hovering
  const handleMouseLeave = () => {
    if (!animationRef.current && containerRef.current) {
      const position = containerRef.current.scrollLeft;
      
      const scroll = () => {
        if (!containerRef.current) return;
        
        const newPosition = position + scrollSpeed;
        
        if (newPosition >= containerRef.current.scrollWidth / 2) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft = newPosition;
        }
        
        animationRef.current = requestAnimationFrame(scroll);
      };
      
      animationRef.current = requestAnimationFrame(scroll);
    }
  };

  return (
    <section id="universities" className="py-16 border-t border-white/10 relative bg-[#0A0E15]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,227,178,0.05),transparent_70%)]"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-white">
            Connecting you with top universities worldwide
          </h3>
        </div>
        
        {/* Scrolling container with improved animation */}
        <div 
          className="overflow-x-hidden relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={containerRef}
            className="flex gap-8 py-8 w-max"
            style={{ overflow: 'hidden' }}
          >
            {universities.map((university, index) => (
              <div key={index} className="text-center group university-item flex-shrink-0 transition-all duration-300 hover:scale-110">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 flex items-center justify-center border border-[#20E3B2]/10 group-hover:border-[#20E3B2]/50 transition-all overflow-hidden bg-[#0F1319] p-2">
                  <img 
                    src={university.logo} 
                    alt={`${university.name} logo`}
                    className="w-full h-full object-contain filter brightness-100 group-hover:brightness-110"
                  />
                </div>
                <div className="transform transition-transform group-hover:scale-105 group-hover:-translate-y-1">
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {university.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
