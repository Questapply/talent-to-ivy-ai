
import React from 'react';
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
  return (
    <section id="howitworks" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your 7-Stage Journey to Success</h2>
          <p className="text-lg text-gray-600">
            Our AI guides you through every step of the application process, ensuring nothing is missed.
          </p>
        </div>
        
        <div className="relative">
          {/* Path line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 bg-gray-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {stages.map((stage, index) => (
              <div key={index} className={`md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                    <div className="flex items-center mb-4 justify-between">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                          {stage.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{stage.title}</h3>
                      </div>
                      <span className="text-5xl font-bold text-gray-100">{stage.number}</span>
                    </div>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-1/2 w-5 h-5 rounded-full bg-primary shadow-md z-10 -translate-y-1/2 transform">
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
