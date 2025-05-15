
import React from 'react';
import {
  Search, School, GraduationCap, FileText, Send, User
} from 'lucide-react';

const roadmapData = [
  {
    number: "01",
    title: "Find Schools",
    description: "Discover schools that match your talents and aspirations.",
    icon: <Search className="h-6 w-6 text-cyan-400" />,
    position: "left"
  },
  {
    number: "02",
    title: "Find Programs",
    description: "Explore programs aligned with your unique strengths.",
    icon: <School className="h-6 w-6 text-cyan-400" />,
    position: "right"
  },
  {
    number: "03",
    title: "Find Professors",
    description: "Connect with professors in your field of interest.",
    icon: <GraduationCap className="h-6 w-6 text-cyan-400" />,
    position: "left"
  },
  {
    number: "04",
    title: "Create Resume",
    description: "Build a compelling resume highlighting your talents.",
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    position: "right"
  },
  {
    number: "05",
    title: "Create SOP",
    description: "Craft a powerful statement of purpose that stands out.",
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    position: "left"
  },
  {
    number: "06",
    title: "Create LOR",
    description: "Generate impactful letters of recommendation.",
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    position: "right"
  },
  {
    number: "07",
    title: "Apply Now",
    description: "Submit your applications with confidence.",
    icon: <Send className="h-6 w-6 text-cyan-400" />,
    position: "left"
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
          <div className="inline-block mb-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10">
            <span className="text-glow-white">The 7-Stage Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-text text-shadow-lg">
            Your Journey to Success
          </h2>
          <p className="text-xl text-white/90 font-medium text-shadow-sm">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        {/* Timeline roadmap section */}
        <div className="relative mt-20">
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-primary -translate-x-1/2"></div>
          
          <div className="relative">
            {roadmapData.map((item, index) => (
              <div key={index} className="mb-32 last:mb-0 reveal">
                {/* Timeline dot indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-black"></div>
                </div>
                
                {/* Card positioning based on left/right */}
                <div className={`flex ${item.position === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${item.position === 'right' && 'ml-auto'}`}>
                    {/* Main roadmap card */}
                    <div className="bg-[#0c1118] border border-cyan-400/20 rounded-lg p-6 shadow-lg relative overflow-hidden">
                      {/* Neon glow border effect */}
                      <div className="absolute inset-0 border border-cyan-400/30 rounded-lg pointer-events-none"></div>
                      
                      {/* Circular number badge */}
                      <div className="flex mb-4 items-center">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0a0e15] border border-cyan-400/50 flex items-center justify-center mr-4">
                          <span className="text-cyan-400 text-2xl font-bold">{item.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      
                      {/* Description with icon */}
                      <div className="flex items-start gap-3 mb-6">
                        <div className="rounded-full bg-black/60 w-10 h-10 flex items-center justify-center border border-cyan-400/30">
                          {item.icon}
                        </div>
                        <p className="text-white/80">{item.description}</p>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden mb-4">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                      
                      {/* Status boxes */}
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-black/40 rounded-md p-3">
                          <div className="text-xs text-white/60">Application Status</div>
                          <div className="text-cyan-400 font-medium">In Progress</div>
                          <div className="mt-1 h-1 w-full bg-black/50 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-400/70 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                        <div className="bg-black/40 rounded-md p-3">
                          <div className="text-xs text-white/60">AI Assistance</div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            <span className="text-cyan-400 font-medium">Active</span>
                          </div>
                          <div className="mt-1 text-xs text-white/60">24/7 Support Available</div>
                        </div>
                      </div>
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
