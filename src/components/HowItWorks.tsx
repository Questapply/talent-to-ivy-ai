
import React from 'react';
import {
  Search, School, GraduationCap, FileText, FileCheck, Send, User
} from 'lucide-react';

const stages = [
  {
    number: "01",
    icon: <Search className="h-6 w-6 text-cyan-400" />,
    title: "Find Schools",
    description: "Discover schools that match your talents and aspirations.",
    position: "left"
  },
  {
    number: "02",
    icon: <School className="h-6 w-6 text-cyan-400" />,
    title: "Find Programs",
    description: "Explore programs aligned with your unique strengths.",
    position: "right"
  },
  {
    number: "03",
    icon: <GraduationCap className="h-6 w-6 text-cyan-400" />,
    title: "Find Professors",
    description: "Connect with professors in your field of interest.",
    position: "left"
  },
  {
    number: "04",
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    title: "Create Resume",
    description: "Build a compelling resume highlighting your talents.",
    position: "right"
  },
  {
    number: "05",
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    title: "Create SOP",
    description: "Craft a powerful statement of purpose that stands out.",
    position: "left"
  },
  {
    number: "06",
    icon: <FileCheck className="h-6 w-6 text-cyan-400" />,
    title: "Create LOR",
    description: "Generate impactful letters of recommendation.",
    position: "right"
  },
  {
    number: "07",
    icon: <Send className="h-6 w-6 text-cyan-400" />,
    title: "Apply Now",
    description: "Submit your applications with confidence.",
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
          
          {/* Timeline stages */}
          <div className="relative z-10">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                className={`reveal flex items-center mb-32 last:mb-0 ${stage.position === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Stage number circle - positioned on timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center z-20">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse-gentle"></div>
                </div>
                
                {/* Content for left side stages */}
                {stage.position === 'left' && (
                  <div className="w-1/2 pr-12 text-right">
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center text-cyan-400 font-bold">
                          {stage.number}
                        </div>
                      </div>
                      <p className="text-white/70 max-w-xs">{stage.description}</p>
                    </div>
                  </div>
                )}
                
                {/* Spacer for center timeline */}
                <div className="w-1/2"></div>
                
                {/* Content for right side stages */}
                {stage.position === 'right' && (
                  <div className="w-1/2 pl-12">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center text-cyan-400 font-bold">
                          {stage.number}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                      </div>
                      <p className="text-white/70 max-w-xs">{stage.description}</p>
                    </div>
                  </div>
                )}

                {/* Stage card - alternating sides */}
                <div className={`absolute ${stage.position === 'left' ? 'right-0' : 'left-0'} w-1/2 flex ${stage.position === 'left' ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                  <div className="w-full max-w-md bg-black/80 border border-cyan-400/20 rounded-lg backdrop-blur-sm p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center border border-cyan-400/40">
                        {stage.icon}
                      </div>
                      <div>
                        <h4 className="text-lg text-white font-semibold">{stage.title}</h4>
                        <p className="text-sm text-white/70">{stage.description}</p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4">
                      <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                    </div>

                    {/* Application status and AI assistance */}
                    <div className="mt-4 flex gap-4">
                      <div className="flex-1 bg-black/40 rounded-md p-3">
                        <div className="text-xs text-white/60">Application Status</div>
                        <div className="text-cyan-400 font-medium">In Progress</div>
                        <div className="mt-1 h-1 w-full bg-black/50 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400/70 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      <div className="flex-1 bg-black/40 rounded-md p-3">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
