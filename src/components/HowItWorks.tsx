
import React, { useEffect, useRef } from 'react';
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
            The 7-Stage Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-text">Your Journey to Success</h2>
          <p className="text-xl text-white/90 font-medium">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical timeline with glowing connections */}
          <div className="hidden md:block absolute left-[75px] top-0 bottom-0 w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 via-primary/30 to-cyan-400/30 rounded-full glow-sm"></div>
          </div>
          
          <div className="space-y-20 md:space-y-28 relative">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                ref={el => stageRefs.current[index] = el}
                className="reveal"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start">
                  {/* Number circle with glow effect */}
                  <div className="hidden md:flex relative">
                    <div className="w-[150px] h-[150px] rounded-full border-2 border-cyan-400/40 flex items-center justify-center z-10 bg-black">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-cyan-400/20 blur-md"></div>
                      <div className="text-5xl font-bold text-white relative z-10">{stage.number}</div>
                    </div>
                    
                    {/* Glowing dot on timeline */}
                    <div className="absolute left-[75px] top-[75px] -ml-2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 z-20"></div>
                  </div>
                  
                  {/* Content box */}
                  <div className="flex-1 md:pl-12">
                    <div className="card-glass p-0 rounded-2xl border border-cyan-400/20 transition-all duration-500 hover:border-cyan-400/40 group overflow-hidden">
                      {/* Image background */}
                      <div className="relative h-40 md:h-60 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-10"></div>
                        <img 
                          src={stage.image} 
                          alt={stage.title} 
                          className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                        />
                        
                        {/* Mobile number display */}
                        <div className="absolute top-4 left-4 z-20 md:hidden">
                          <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center bg-black/70 shadow-lg shadow-cyan-400/30">
                            <span className="text-xl font-bold text-white">{stage.number}</span>
                          </div>
                        </div>
                        
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="flex items-center mb-2">
                            <div className="bg-cyan-400/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center shadow-lg border border-cyan-400/30 neon-glow">
                              {stage.icon}
                            </div>
                            <h3 className="text-2xl font-bold ml-4 text-white">{stage.title}</h3>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="p-6 bg-black/80 backdrop-blur-md">
                        <p className="text-white/90 text-lg">{stage.description}</p>
                      </div>
                      
                      {/* Glowing edge */}
                      <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-500 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-cyan-400/50 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 3D rotating cube visualization - represents the AI processing */}
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
                        <div className="text-xl font-bold">Talent Profile</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--back">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <School className="h-12 w-12 text-primary mx-auto mb-3" />
                        <div className="text-xl font-bold">University Match</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--right">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <FileText className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                        <div className="text-xl font-bold">Documents</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--left">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <GraduationCap className="h-12 w-12 text-primary mx-auto mb-3" />
                        <div className="text-xl font-bold">Admission</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--top">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <Search className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                        <div className="text-xl font-bold">Discover</div>
                      </div>
                    </div>
                  </div>
                  <div className="cube__face cube__face--bottom">
                    <div className="flex items-center justify-center h-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className="text-white text-center p-4">
                        <Send className="h-12 w-12 text-primary mx-auto mb-3" />
                        <div className="text-xl font-bold">Apply</div>
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
