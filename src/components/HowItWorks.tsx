
import React, { useEffect, useRef } from 'react';
import { 
  Search, School, GraduationCap, FileText, FileCheck, Send, User
} from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

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
        
        {/* Digital timeline inspired by Uplinq */}
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-cyan-400/30 via-primary/30 to-cyan-400/30 rounded-full glow-sm -translate-x-1/2"></div>
          
          <div className="space-y-32">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                ref={el => stageRefs.current[index] = el}
                className={`reveal flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Digital screen */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-lg shadow-primary/20 group">
                    {/* Screen glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(40deg,transparent,rgba(32,227,178,0.3),transparent,rgba(138,86,255,0.3),transparent)] bg-[length:200%_200%] animate-[gradient_8s_ease_infinite]"></div>
                    
                    {/* Content */}
                    <div className="relative p-6 md:p-8">
                      {/* Header with number */}
                      <div className="flex items-center mb-4 gap-4">
                        <div className="w-16 h-16 rounded-full border-2 border-cyan-400/50 flex items-center justify-center bg-black/70 shadow-lg shadow-cyan-400/20">
                          <span className="text-2xl font-bold text-cyan-400 text-glow-cyan">{stage.number}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white text-shadow-md">{stage.title}</h3>
                      </div>
                      
                      {/* Digital content area */}
                      <div className="mt-4">
                        <div className="bg-black/50 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 bg-cyan-400/20 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center border border-cyan-400/30">
                              {stage.icon}
                            </div>
                            <div>
                              <p className="text-lg text-white/90 text-shadow-sm">{stage.description}</p>
                              
                              {/* Interface elements */}
                              <div className="mt-4 flex items-center gap-2">
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-cyan-400 rounded-full"></div>
                                </div>
                                <span className="text-xs text-cyan-400">75%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Digital interface elements */}
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="h-24 bg-gradient-to-br from-black/80 to-gray-900/80 border border-white/10 rounded-lg p-3 flex flex-col justify-between">
                          <div className="text-xs text-white/50">Application Status</div>
                          <div className="text-cyan-400 font-medium">In Progress</div>
                          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-gradient-to-r from-primary to-cyan-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="h-24 bg-gradient-to-br from-black/80 to-gray-900/80 border border-white/10 rounded-lg p-3 flex flex-col justify-between">
                          <div className="text-xs text-white/50">AI Assistance</div>
                          <div className="flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-cyan-400 font-medium">Active</span>
                          </div>
                          <div className="text-xs text-white/50">24/7 Support Available</div>
                        </div>
                      </div>
                      
                      {/* Glowing bottom border */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-cyan-400/80"></div>
                    </div>
                  </div>
                </div>
                
                {/* Center dot for timeline */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 border-4 border-black"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 3D rotating cube visualization */}
        <div className="mt-24 flex justify-center">
          <div className="w-full max-w-xl aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-400/30 blur-3xl rounded-full opacity-50"></div>
            <div className="w-full h-full relative overflow-hidden rounded-2xl flex items-center justify-center">
              <div className="scene">
                <div className="cube">
                  <div className="cube__face cube__face--front">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <User className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                        <div className="text-xl font-bold text-shadow-md">Talent Profile</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--back">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <School className="h-12 w-12 text-primary mx-auto mb-3" />
                        <div className="text-xl font-bold text-shadow-md">University Match</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--right">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <FileText className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                        <div className="text-xl font-bold text-shadow-md">Documents</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--left">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <GraduationCap className="h-12 w-12 text-primary mx-auto mb-3" />
                        <div className="text-xl font-bold text-shadow-md">Admission</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--top">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <Search className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                        <div className="text-xl font-bold text-shadow-md">Discover</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--bottom">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <Send className="h-12 w-12 text-primary mx-auto mb-3" />
                        <div className="text-xl font-bold text-shadow-md">Apply</div>
                      </div>
                    </div>
                  </div>
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
