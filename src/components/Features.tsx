
import React from 'react';
import { CheckCircle, BrainCircuit, Rocket, Award, ChevronRight } from 'lucide-react';

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
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "University Matching",
    description: "Connect with top universities that align perfectly with your talents, goals, and academic profile."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionizing University Applications</h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform simplifies the entire process, from discovering your talents to securing your admission.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-5">{feature.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
