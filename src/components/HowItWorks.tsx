
import React, { useEffect, useRef } from 'react';
import { 
  Search, School, GraduationCap, User, FileText, FileCheck, Send
} from 'lucide-react';

const stages = [
  {
    number: 1,
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Find Schools",
    description: "Discover schools that match your talents and aspirations."
  },
  {
    number: 2,
    icon: <School className="h-8 w-8 text-white" />,
    title: "Find Programs",
    description: "Explore programs aligned with your unique strengths."
  },
  {
    number: 3,
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    title: "Find Professors",
    description: "Connect with professors in your field of interest."
  },
  {
    number: 4,
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Create Resume",
    description: "Build a compelling resume highlighting your talents."
  },
  {
    number: 5, 
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Create SOP",
    description: "Craft a powerful statement of purpose that stands out."
  },
  {
    number: 6,
    icon: <FileCheck className="h-8 w-8 text-white" />,
    title: "Create LOR",
    description: "Generate impactful letters of recommendation."
  },
  {
    number: 7,
    icon: <Send className="h-8 w-8 text-white" />,
    title: "Apply Now",
    description: "Submit your applications with confidence."
  }
];

const HowItWorks = () => {
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    stageRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    // Animate the connector path
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      
      pathRef.current.style.strokeDasharray = length.toString();
      pathRef.current.style.strokeDashoffset = length.toString();
      
      const animatePath = () => {
        pathRef.current!.style.transition = 'stroke-dashoffset 2s ease-in-out';
        pathRef.current!.style.strokeDashoffset = '0';
      };
      
      setTimeout(animatePath, 500);
    }
    
    return () => {
      stageRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="howitworks" className="py-24 relative bg-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/90"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,86,255,0.15),transparent_50%)] animate-pulse-gentle"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10">
            Step-by-Step Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white neon-text">Your 7-Stage Journey to Success</h2>
          <p className="text-lg text-white/80">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Path line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 -translate-x-1/2">
            <svg 
              width="4" 
              height="100%" 
              className="absolute top-0 left-0"
              viewBox="0 0 4 2000"
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d="M2,0 Q2,1000 2,2000"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                className="path-style"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8a56ff" />
                  <stop offset="50%" stopColor="#20E3B2" />
                  <stop offset="100%" stopColor="#8a56ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="space-y-16 md:space-y-32 relative">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                ref={el => stageRefs.current[index] = el}
                className={`md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} reveal`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className={`glass-effect p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-primary/30 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                    <div className="flex items-center mb-4 justify-between">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="bg-primary/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center shadow-lg border border-primary/30 neon-glow">
                          {stage.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{stage.title}</h3>
                      </div>
                      <span className="text-5xl font-bold text-white/10">{stage.number}</span>
                    </div>
                    <p className="text-white/80">{stage.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-1/2 w-6 h-6 rounded-full bg-black shadow-md z-10 -translate-y-1/2 transform border border-primary/50">
                    <div className="absolute inset-1 rounded-full bg-primary animate-pulse"></div>
                    {index % 2 === 0 ? 
                      <div className="absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2"></div> : 
                      <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
                    }
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
