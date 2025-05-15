
import React from 'react';
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
        
        {/* The roadmap section */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16 md:space-y-24">
            {stages.map((stage, index) => (
              <div key={index} className="reveal flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                {/* Left side with number and title */}
                <div className="md:w-1/3 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30 flex items-center justify-center text-shadow-md">
                    <span className="text-2xl font-bold text-primary">{stage.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-shadow-md mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-lg text-white/80">
                      {stage.description}
                    </p>
                  </div>
                </div>
                
                {/* Right side with content card */}
                <div className="md:w-2/3">
                  <div className="bg-gradient-to-br from-black/80 to-gray-900/80 rounded-2xl overflow-hidden border border-primary/20 shadow-xl shadow-primary/10">
                    <div className="relative p-6">
                      {/* Background image with overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <img 
                          src={stage.image} 
                          alt={stage.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>
                      </div>
                      
                      {/* Content area */}
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg border border-primary/40 flex items-center justify-center bg-black/60 shadow-lg shadow-primary/5">
                            {stage.icon}
                          </div>
                          <h4 className="text-xl font-bold text-white">{stage.title}</h4>
                        </div>
                        
                        <div className="mt-6 space-y-4">
                          <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                            <p className="text-white/90">{stage.description}</p>
                            
                            {/* Progress indicators */}
                            <div className="mt-6 flex items-center justify-between">
                              <div className="w-full">
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                                    style={{ width: `${(index + 1) / stages.length * 100}%` }}
                                  ></div>
                                </div>
                                <div className="mt-1 flex justify-between text-xs">
                                  <span className="text-white/60">Stage {index + 1} of {stages.length}</span>
                                  <span className="text-cyan-400">
                                    {Math.round((index + 1) / stages.length * 100)}% Complete
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Subtle glow at bottom of card */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
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
