
import React from 'react';
import { BrainCircuit, Rocket, GraduationCap, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "AI Talent Discovery",
    description: "Our advanced AI analyzes your skills, interests, and past achievements to identify your unique talents and potential.",
    image: "/lovable-uploads/51903c37-f0ce-4390-9e4d-d1e41d6971b4.png"
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Streamlined Applications",
    description: "Fully automated 7-stage process guides you from school selection to final application submission.",
    image: "/lovable-uploads/d9b42a15-bb67-4584-b8e6-206df0361c99.png"
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "University Matching",
    description: "Connect with top universities that align perfectly with your talents, goals, and academic profile.",
    image: "/lovable-uploads/d4b978f3-6fff-4560-82aa-47871390515d.png"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 opacity-70"></div>
      
      {/* Decorative circles */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-lighten filter blur-3xl opacity-70"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-400/5 rounded-full mix-blend-lighten filter blur-3xl opacity-70"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium border border-primary/20">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Revolutionizing University Applications</h2>
          <p className="text-lg text-gray-400">
            Our AI-powered platform simplifies the entire process, from discovering your talents to securing your admission.
          </p>
        </div>
        
        {/* Updated feature cards to match the Uplinq design */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative rounded-xl overflow-hidden transition-all duration-300 group bg-black border border-white/5"
            >
              {/* Dark overlay with image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-10"></div>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Animated overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-400/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-5">{feature.description}</p>
                
                <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                  Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Decorative border effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-cyan-400/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
