
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
      <div className="absolute inset-0 bg-gradient opacity-90"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            Step-by-Step Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your 7-Stage Journey to Success</h2>
          <p className="text-lg text-white/80">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        <div className="relative">
          {/* Path line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 bg-white/20 -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-0 relative">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                ref={el => stageRefs.current[index] = el}
                className={`md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} reveal`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className={`glass-effect p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white/25 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                    <div className="flex items-center mb-4 justify-between">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                          {stage.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{stage.title}</h3>
                      </div>
                      <span className="text-5xl font-bold text-white/10">{stage.number}</span>
                    </div>
                    <p className="text-white/80">{stage.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-1/2 w-6 h-6 rounded-full bg-white shadow-md z-10 -translate-y-1/2 transform">
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
