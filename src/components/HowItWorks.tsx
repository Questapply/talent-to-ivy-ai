
import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, School, GraduationCap, FileText, FileCheck, Send, User
} from 'lucide-react';

const stages = [
  {
    number: "01",
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Find Schools",
    description: "Discover schools that match your talents and aspirations.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1974"
  },
  {
    number: "02",
    icon: <School className="h-8 w-8 text-white" />,
    title: "Find Programs",
    description: "Explore programs aligned with your unique strengths.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1974"
  },
  {
    number: "03",
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    title: "Find Professors",
    description: "Connect with professors in your field of interest.",
    image: "https://images.unsplash.com/photo-1581093196277-9f6070e0b9cc?auto=format&fit=crop&q=80&w=1974"
  },
  {
    number: "04",
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Create Resume",
    description: "Build a compelling resume highlighting your talents.",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=1974"
  },
  {
    number: "05", 
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Create SOP",
    description: "Craft a powerful statement of purpose that stands out.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1974"
  },
  {
    number: "06",
    icon: <FileCheck className="h-8 w-8 text-white" />,
    title: "Create LOR",
    description: "Generate impactful letters of recommendation.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1974"
  },
  {
    number: "07",
    icon: <Send className="h-8 w-8 text-white" />,
    title: "Apply Now",
    description: "Submit your applications with confidence.",
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=1974"
  }
];

const HowItWorks = () => {
  const [activeStage, setActiveStage] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRef = useRef<HTMLDivElement>(null);
  
  // Track scroll and update active stage
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      // Calculate which stage is in view
      stageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // If stage is visible in viewport
        if (rect.top < viewportHeight * 0.6 && rect.bottom > 0) {
          setActiveStage(index);
        }
      });
      
      // Move the glowing dot along the timeline
      if (dotRef.current && timelineRef.current) {
        const timelineHeight = timelineRef.current.offsetHeight - 50; // Subtract dot height
        const scrollPercent = activeStage / (stages.length - 1);
        const dotPosition = scrollPercent * timelineHeight;
        dotRef.current.style.transform = `translateY(${dotPosition}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStage]);

  return (
    <section id="howitworks" className="py-24 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,227,178,0.15),transparent_70%)] animate-pulse-gentle"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10">
            <span className="text-glow-white">The 7-Stage Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-text text-shadow-lg">
            Your Journey to Success
          </h2>
          <p className="text-xl text-white/90 font-medium text-shadow-sm">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        {/* Uplinq-style timeline with interactive scrolling */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical timeline line */}
          <div ref={timelineRef} className="hidden lg:block absolute left-[76px] top-12 bottom-12 w-1 bg-gradient-to-b from-cyan-400/30 via-primary/30 to-cyan-400/30 rounded-full glow-sm"></div>
          
          {/* Animated glowing dot that moves along timeline */}
          <div 
            ref={dotRef}
            className="hidden lg:block absolute left-[76px] w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 z-10 transition-transform duration-500 ease-out"
            style={{ transform: 'translateY(0px)', marginLeft: '-1px' }}
          ></div>
          
          {/* Timeline stages */}
          <div className="space-y-24 md:space-y-32">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                ref={(el) => stageRefs.current[index] = el}
                className={`reveal flex flex-col lg:flex-row items-start gap-6 md:gap-12 ${
                  activeStage === index ? 'opacity-100' : 'opacity-50'
                } transition-all duration-500`}
              >
                {/* Left side: Stage number and title */}
                <div className="w-full lg:w-1/3 flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-full border-2 ${
                    activeStage === index 
                      ? 'border-primary text-glow-primary bg-black/80' 
                      : 'border-white/30 bg-black/50'
                  } flex items-center justify-center transition-all duration-300`}>
                    <span className={`text-2xl font-bold ${
                      activeStage === index ? 'text-primary' : 'text-white/70'
                    }`}>
                      {stage.number}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${
                      activeStage === index ? 'text-white text-shadow-md' : 'text-white/70'
                    } transition-all duration-300`}>
                      {stage.title}
                    </h3>
                    <p className={`mt-2 text-base md:text-lg ${
                      activeStage === index ? 'text-white/90' : 'text-white/50'
                    } transition-all duration-300`}>
                      {stage.description}
                    </p>
                  </div>
                </div>
                
                {/* Right side: Digital interface card */}
                <div className={`w-full lg:w-2/3 transform transition-all duration-500 ${
                  activeStage === index ? 'translate-y-0 opacity-100' : 'lg:translate-y-8 opacity-70'
                }`}>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-lg shadow-primary/20">
                    {/* Screen glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(40deg,transparent,rgba(32,227,178,0.3),transparent,rgba(138,86,255,0.3),transparent)] bg-[length:200%_200%] animate-[gradient_8s_ease_infinite]"></div>
                    
                    {/* Content with image background */}
                    <div className="relative p-6 md:p-8">
                      {/* Background image with overlay */}
                      <div className="absolute inset-0 opacity-30">
                        <img 
                          src={stage.image} 
                          alt={stage.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
                      </div>
                      
                      {/* Header with icon */}
                      <div className="relative flex items-center mb-6 gap-4">
                        <div className="w-12 h-12 rounded-lg border border-cyan-400/30 flex items-center justify-center bg-black/70 shadow-md shadow-cyan-400/10">
                          {stage.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white text-shadow-md">{stage.title}</h4>
                      </div>
                      
                      {/* Digital content area */}
                      <div className="relative mt-4">
                        <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-4">
                          <p className="text-base md:text-lg text-white text-shadow-sm">{stage.description}</p>
                          
                          {/* Progress indicators */}
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                              <div className="text-xs text-white/50 mb-1">Progress</div>
                              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                                  style={{ width: `${(index + 1) / stages.length * 100}%` }}
                                ></div>
                              </div>
                              <div className="mt-1 text-xs text-end text-cyan-400">
                                {Math.round((index + 1) / stages.length * 100)}%
                              </div>
                            </div>
                            
                            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-3 flex items-center">
                              <div className="flex-1">
                                <div className="text-xs text-white/50 mb-1">Stage {stage.number}</div>
                                <div className="text-sm text-white font-medium">
                                  {index + 1} of {stages.length} stages
                                </div>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-white/10 flex items-center justify-center">
                                <span className="text-white font-bold">{stage.number}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Glowing bottom border */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-cyan-400/80"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
