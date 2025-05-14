
import React from 'react';
import { Button } from '@/components/ui/button';

const TalentDiscovery = () => {
  return (
    <section className="py-20 bg-gradient">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discover Your Hidden Talents with AI
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Our advanced AI algorithms analyze your skills, interests, and achievements to identify your unique talents and potential. 
              Go beyond traditional assessments and discover what makes you special.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Personalized talent assessments",
                "Skills and personality analysis",
                "Career path recommendations",
                "Strengths and growth opportunities"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center mr-3 font-bold text-sm">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Discover Your Talents
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl relative animate-float">
              <div className="bg-white p-6 rounded-t-lg border-b border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl">AI Talent Assessment</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium mb-2">Analytical Thinking</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium mb-2">Creative Problem Solving</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full w-[72%]"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium mb-2">Communication Skills</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full w-[68%]"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium mb-2">Leadership Potential</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full w-[79%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    AI
                  </div>
                  <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">Based on your assessment, you show exceptional talent in analytical thinking and leadership. These skills are highly sought after in fields like Data Science and Business Analytics.</p>
                  </div>
                </div>
                
                <Button className="w-full">View Full Assessment</Button>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary-light rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentDiscovery;
