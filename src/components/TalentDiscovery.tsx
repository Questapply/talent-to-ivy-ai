
import React from 'react';
import { Button } from '@/components/ui/button';

const TalentDiscovery = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1974')] bg-cover bg-center opacity-5"></div>
      
      {/* Decorative gradient elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full mix-blend-lighten filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400/10 rounded-full mix-blend-lighten filter blur-3xl opacity-30"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-up order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden card-glass relative animate-float shadow-[0_0_30px_rgba(138,86,255,0.2)] border border-white/5">
              <div className="bg-black p-6 rounded-t-2xl border-b border-white/5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl text-white">AI Talent Assessment</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {[
                    { name: "Analytical Thinking", value: 85 },
                    { name: "Creative Problem Solving", value: 72 },
                    { name: "Communication Skills", value: 68 },
                    { name: "Leadership Potential", value: 79 }
                  ].map((skill, index) => (
                    <div key={index} className="glass-effect p-4 rounded-lg hover:border-white/10 transition-all">
                      <div className="flex justify-between mb-2">
                        <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
                        <p className="text-sm font-semibold text-primary">{skill.value}%</p>
                      </div>
                      <div className="w-full bg-gray-800/50 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-primary/80 to-cyan-400 transition-all duration-1000" 
                          style={{ width: `${skill.value}%`, transition: 'width 1.5s ease-in-out' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-effect p-6 border-t border-white/5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black shrink-0 shadow-md cyan-glow">
                    AI
                  </div>
                  <div className="flex-1 p-4 glass-effect rounded-lg">
                    <p className="text-gray-300">Based on your assessment, you show exceptional talent in analytical thinking and leadership. These skills are highly sought after in fields like Data Science and Business Analytics.</p>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">View Full Assessment</Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 animate-float" style={{animationDelay: "1s"}}>
                <div className="px-2 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-medium border border-green-500/20">Live Analysis</div>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
          </div>
          
          <div className="animate-fade-up order-1 md:order-2" style={{animationDelay: "0.2s"}}>
            <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium border border-primary/20">
              AI-Powered Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Discover Your Hidden Talents with AI
            </h2>
            <p className="text-gray-400 text-lg mb-8">
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
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 font-bold text-sm border border-primary/30">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90 relative overflow-hidden group neon-glow">
              <span className="relative z-10">Discover Your Talents</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentDiscovery;
