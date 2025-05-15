
import React from 'react';
import { BrainCircuit, Rocket, GraduationCap, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "AI Talent Discovery",
    description: "Our advanced AI analyzes your skills, interests, and past achievements to identify your unique talents and potential."
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Streamlined Applications",
    description: "Fully automated 7-stage process guides you from school selection to final application submission."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "University Matching",
    description: "Connect with top universities that align perfectly with your talents, goals, and academic profile."
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative card-glass rounded-xl p-8 transition-all duration-300 hover:shadow-xl group card-glow"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-cyan-400/50 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 mb-5">{feature.description}</p>
              
              <a href="#" className="inline-flex items-center text-primary font-medium group-hover:underline">
                Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
