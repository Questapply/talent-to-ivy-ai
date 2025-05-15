
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
        
        {/* Updated feature cards to match the Uplinq design with animated elements */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Talent Discovery Card */}
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group hover:border-white/20">
            <div className="p-6 h-64 bg-gradient-to-b from-black to-black/80 relative overflow-hidden">
              {/* Animated talent analysis visualization */}
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-[200px]">
                  {/* Animated skill radar chart */}
                  <div className="relative w-full aspect-square">
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse-gentle"></div>
                    <div className="absolute inset-[15%] border-2 border-primary/30 rounded-full animate-pulse-gentle" style={{animationDelay: "0.5s"}}></div>
                    <div className="absolute inset-[30%] border-2 border-primary/40 rounded-full animate-pulse-gentle" style={{animationDelay: "1s"}}></div>
                    <div className="absolute inset-[45%] border-2 border-primary/50 rounded-full animate-pulse-gentle" style={{animationDelay: "1.5s"}}></div>
                    
                    {/* Animated data points */}
                    <div className="absolute top-[10%] right-[30%] w-3 h-3 bg-primary rounded-full animate-ping" style={{animationDuration: "3s"}}></div>
                    <div className="absolute top-[60%] right-[10%] w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: "2.5s", animationDelay: "0.5s"}}></div>
                    <div className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-primary/80 rounded-full animate-ping" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
                    
                    {/* Central icon */}
                    <div className="absolute inset-[40%] bg-gradient-to-r from-primary to-cyan-400 rounded-full flex items-center justify-center animate-float">
                      <BrainCircuit className="text-black h-5 w-5" />
                    </div>
                    
                    {/* Scan effect overlay */}
                    <div className="absolute inset-0 border-2 border-primary/0 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" style={{animationDuration: "4s"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-white/5">
              <h3 className="text-xl font-bold mb-3 text-white">{features[0].title}</h3>
              <p className="text-gray-400 mb-5">{features[0].description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Streamlined Applications Card */}
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group hover:border-white/20">
            <div className="p-6 h-64 bg-gradient-to-b from-black to-black/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-[200px]">
                  {/* Application process pipeline visualization */}
                  <div className="relative w-full aspect-square">
                    {/* Process stages */}
                    <div className="absolute top-[20%] left-0 right-0 h-3 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary w-full transform -translate-x-full animate-data-stream" style={{animationDuration: "7s", animationIterationCount: "infinite"}}></div>
                    </div>
                    <div className="absolute top-[40%] left-0 right-0 h-3 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 via-primary to-cyan-400 w-full transform -translate-x-full animate-data-stream" style={{animationDuration: "10s", animationDelay: "1s", animationIterationCount: "infinite"}}></div>
                    </div>
                    <div className="absolute top-[60%] left-0 right-0 h-3 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/80 via-cyan-400/80 to-primary/80 w-full transform -translate-x-full animate-data-stream" style={{animationDuration: "8s", animationDelay: "2s", animationIterationCount: "infinite"}}></div>
                    </div>
                    
                    {/* Stage markers */}
                    <div className="absolute top-[20%] left-[10%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center" style={{transform: "translateY(-50%)"}}>
                      <span className="text-primary text-[10px] font-bold">1</span>
                    </div>
                    <div className="absolute top-[20%] left-[40%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center" style={{transform: "translateY(-50%)"}}>
                      <span className="text-primary text-[10px] font-bold">2</span>
                    </div>
                    <div className="absolute top-[20%] left-[70%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center" style={{transform: "translateY(-50%)"}}>
                      <span className="text-primary text-[10px] font-bold">3</span>
                    </div>
                    
                    <div className="absolute top-[40%] left-[25%] w-5 h-5 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center" style={{transform: "translateY(-50%)"}}>
                      <span className="text-cyan-400 text-[10px] font-bold">4</span>
                    </div>
                    <div className="absolute top-[40%] left-[55%] w-5 h-5 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center" style={{transform: "translateY(-50%)"}}>
                      <span className="text-cyan-400 text-[10px] font-bold">5</span>
                    </div>
                    
                    <div className="absolute top-[60%] left-[40%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center" style={{transform: "translateY(-50%)"}}>
                      <span className="text-primary text-[10px] font-bold">6</span>
                    </div>
                    <div className="absolute top-[60%] left-[70%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center" style={{transform: "translateY(-50%)"}}>
                      <span className="text-primary text-[10px] font-bold">7</span>
                    </div>
                    
                    {/* Center icon */}
                    <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-gradient-to-r from-primary to-cyan-400 rounded-full p-2 animate-float">
                        <Rocket className="text-black h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-white/5">
              <h3 className="text-xl font-bold mb-3 text-white">{features[1].title}</h3>
              <p className="text-gray-400 mb-5">{features[1].description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* University Matching Card */}
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group hover:border-white/20">
            <div className="p-6 h-64 bg-gradient-to-b from-black to-black/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-[200px]">
                  {/* University matching visualization */}
                  <div className="relative w-full aspect-square">
                    {/* Central student node */}
                    <div className="absolute left-1/2 top-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full border-2 border-primary flex items-center justify-center z-10 animate-pulse-gentle">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    
                    {/* University nodes */}
                    <div className="absolute left-[10%] top-[20%] w-8 h-8 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDelay: "0.2s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400/30 to-primary/30 animate-pulse-gentle"></div>
                    </div>
                    <div className="absolute left-[80%] top-[25%] w-10 h-10 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDelay: "0.7s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/40 to-cyan-400/40 animate-pulse-gentle"></div>
                    </div>
                    <div className="absolute left-[70%] top-[70%] w-9 h-9 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDelay: "1.2s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400/30 to-primary/30 animate-pulse-gentle"></div>
                    </div>
                    <div className="absolute left-[15%] top-[65%] w-7 h-7 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDelay: "0.9s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/30 to-cyan-400/30 animate-pulse-gentle"></div>
                    </div>
                    
                    {/* Connection lines */}
                    <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <line x1="50" y1="50" x2="15" y2="20" stroke="url(#gradient1)" strokeWidth="1" className="path-style" opacity="0.6" />
                        <line x1="50" y1="50" x2="80" y2="25" stroke="url(#gradient2)" strokeWidth="1" className="path-style" opacity="0.6" />
                        <line x1="50" y1="50" x2="70" y2="70" stroke="url(#gradient1)" strokeWidth="1" className="path-style" opacity="0.6" />
                        <line x1="50" y1="50" x2="15" y2="65" stroke="url(#gradient2)" strokeWidth="1" className="path-style" opacity="0.6" />
                        <defs>
                          <linearGradient id="gradient1" gradientTransform="rotate(45)">
                            <stop offset="0%" stopColor="rgba(138, 86, 255, 0.8)" />
                            <stop offset="100%" stopColor="rgba(32, 227, 178, 0.8)" />
                          </linearGradient>
                          <linearGradient id="gradient2" gradientTransform="rotate(135)">
                            <stop offset="0%" stopColor="rgba(138, 86, 255, 0.8)" />
                            <stop offset="100%" stopColor="rgba(32, 227, 178, 0.8)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Animated pulses to show matching */}
                    <div className="absolute left-1/2 top-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full border border-primary/30 animate-ping opacity-30" style={{animationDuration: "3s"}}></div>
                    <div className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 rounded-full border border-cyan-400/20 animate-ping opacity-20" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-white/5">
              <h3 className="text-xl font-bold mb-3 text-white">{features[2].title}</h3>
              <p className="text-gray-400 mb-5">{features[2].description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
