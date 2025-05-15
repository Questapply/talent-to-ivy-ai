
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
        
        {/* Updated feature cards with animations above the title and description */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Talent Discovery Card */}
          <div className="flex flex-col">
            {/* Animation Box */}
            <div className="mb-6 bg-black border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50"></div>
              <div className="relative h-full flex items-center justify-center p-6">
                {/* Enhanced skill radar chart animation */}
                <div className="w-full max-w-[200px]">
                  <div className="relative w-full aspect-square">
                    {/* Enhanced radar circles with more dynamic animations */}
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse-gentle"></div>
                    <div className="absolute inset-[15%] border-2 border-primary/30 rounded-full animate-pulse-gentle" style={{animationDelay: "0.5s", animationDuration: "3s"}}></div>
                    <div className="absolute inset-[30%] border-2 border-primary/40 rounded-full animate-pulse-gentle" style={{animationDelay: "1s", animationDuration: "4s"}}></div>
                    <div className="absolute inset-[45%] border-2 border-primary/50 rounded-full animate-pulse-gentle" style={{animationDelay: "1.5s", animationDuration: "5s"}}></div>
                    
                    {/* Enhanced animated data points with more dynamic effects */}
                    <div className="absolute top-[10%] right-[30%] w-3 h-3 bg-gradient-to-r from-primary to-cyan-400 rounded-full animate-ping" style={{animationDuration: "2s"}}></div>
                    <div className="absolute top-[60%] right-[10%] w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: "2.5s", animationDelay: "0.5s"}}></div>
                    <div className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-gradient-to-r from-primary to-cyan-400/80 rounded-full animate-ping" style={{animationDuration: "3s", animationDelay: "1s"}}></div>
                    <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-primary/80 rounded-full animate-ping" style={{animationDuration: "3.5s", animationDelay: "1.5s"}}></div>
                    
                    {/* Enhanced central icon with more dynamic animation */}
                    <div className="absolute inset-[40%] bg-gradient-to-r from-primary to-cyan-400 rounded-full flex items-center justify-center animate-float" style={{animationDuration: "4s"}}>
                      <BrainCircuit className="text-black h-5 w-5" />
                    </div>
                    
                    {/* Enhanced scan effect overlay with more dynamic animation */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" style={{animationDuration: "3s"}}></div>
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" style={{animationDuration: "3s", animationDelay: "1.5s"}}></div>
                    </div>
                    
                    {/* Added animated connecting lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <line x1="50" y1="50" x2="70" y2="10" stroke="url(#talent-gradient)" strokeWidth="1" strokeDasharray="5,3" className="animate-pulse-gentle" />
                      <line x1="50" y1="50" x2="90" y2="60" stroke="url(#talent-gradient)" strokeWidth="1" strokeDasharray="5,3" className="animate-pulse-gentle" style={{animationDelay: "0.7s"}} />
                      <line x1="50" y1="50" x2="15" y2="80" stroke="url(#talent-gradient)" strokeWidth="1" strokeDasharray="5,3" className="animate-pulse-gentle" style={{animationDelay: "1.4s"}} />
                      <defs>
                        <linearGradient id="talent-gradient" gradientTransform="rotate(45)">
                          <stop offset="0%" stopColor="rgba(138, 86, 255, 0.8)" />
                          <stop offset="100%" stopColor="rgba(32, 227, 178, 0.8)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Added shimmering overlay effect */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(138,86,255,0.15),transparent_70%)]"></div>
            </div>
            
            {/* Title and Description (moved outside of animation box) */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">{features[0].title}</h3>
              <p className="text-gray-400 mb-5">{features[0].description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline group">
                Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Streamlined Applications Card */}
          <div className="flex flex-col">
            {/* Animation Box */}
            <div className="mb-6 bg-black border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50"></div>
              <div className="relative h-full flex items-center justify-center p-6">
                {/* Enhanced application process pipeline visualization */}
                <div className="w-full max-w-[200px]">
                  <div className="relative w-full aspect-square">
                    {/* Enhanced process stages with more dynamic animations */}
                    <div className="absolute top-[20%] left-0 right-0 h-3 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary w-[200%] transform -translate-x-full animate-data-stream" style={{animationDuration: "7s", animationIterationCount: "infinite"}}></div>
                    </div>
                    <div className="absolute top-[40%] left-0 right-0 h-3 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 via-primary to-cyan-400 w-[200%] transform -translate-x-full animate-data-stream" style={{animationDuration: "9s", animationDelay: "1s", animationIterationCount: "infinite"}}></div>
                    </div>
                    <div className="absolute top-[60%] left-0 right-0 h-3 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/80 via-cyan-400/80 to-primary/80 w-[200%] transform -translate-x-full animate-data-stream" style={{animationDuration: "8s", animationDelay: "2s", animationIterationCount: "infinite"}}></div>
                    </div>
                    
                    {/* Enhanced stage markers with pulsing animations */}
                    <div className="absolute top-[20%] left-[10%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center animate-pulse-gentle" style={{transform: "translateY(-50%)", animationDuration: "3s"}}>
                      <span className="text-primary text-[10px] font-bold">1</span>
                    </div>
                    <div className="absolute top-[20%] left-[40%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center animate-pulse-gentle" style={{transform: "translateY(-50%)", animationDuration: "3s", animationDelay: "0.5s"}}>
                      <span className="text-primary text-[10px] font-bold">2</span>
                    </div>
                    <div className="absolute top-[20%] left-[70%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center animate-pulse-gentle" style={{transform: "translateY(-50%)", animationDuration: "3s", animationDelay: "1s"}}>
                      <span className="text-primary text-[10px] font-bold">3</span>
                    </div>
                    
                    <div className="absolute top-[40%] left-[25%] w-5 h-5 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center animate-pulse-gentle" style={{transform: "translateY(-50%)", animationDuration: "3s", animationDelay: "1.5s"}}>
                      <span className="text-cyan-400 text-[10px] font-bold">4</span>
                    </div>
                    <div className="absolute top-[40%] left-[55%] w-5 h-5 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center animate-pulse-gentle" style={{transform: "translateY(-50%)", animationDuration: "3s", animationDelay: "2s"}}>
                      <span className="text-cyan-400 text-[10px] font-bold">5</span>
                    </div>
                    
                    <div className="absolute top-[60%] left-[40%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center animate-pulse-gentle" style={{transform: "translateY(-50%)", animationDuration: "3s", animationDelay: "2.5s"}}>
                      <span className="text-primary text-[10px] font-bold">6</span>
                    </div>
                    <div className="absolute top-[60%] left-[70%] w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center animate-pulse-gentle" style={{transform: "translateY(-50%)", animationDuration: "3s", animationDelay: "3s"}}>
                      <span className="text-primary text-[10px] font-bold">7</span>
                    </div>
                    
                    {/* Enhanced animated data particles */}
                    <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDuration: "2s"}}></div>
                    <div className="absolute top-[40%] left-[40%] w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: "2.5s", animationDelay: "0.7s"}}></div>
                    <div className="absolute top-[60%] left-[55%] w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDuration: "3s", animationDelay: "1.4s"}}></div>
                    
                    {/* Enhanced center icon with floating animation */}
                    <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-gradient-to-r from-primary to-cyan-400 rounded-full p-2 animate-float" style={{animationDuration: "4s"}}>
                        <Rocket className="text-black h-6 w-6" />
                      </div>
                    </div>
                    
                    {/* Added connection lines between stages */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <path d="M15,20 C30,20 25,40 40,40" stroke="rgba(138, 86, 255, 0.5)" strokeWidth="1" fill="none" strokeDasharray="4,2" className="animate-draw" style={{animationDuration: "4s"}}/>
                      <path d="M40,40 C55,40 40,60 55,60" stroke="rgba(32, 227, 178, 0.5)" strokeWidth="1" fill="none" strokeDasharray="4,2" className="animate-draw" style={{animationDuration: "4s", animationDelay: "1s"}}/>
                      <defs>
                        <linearGradient id="process-gradient" gradientTransform="rotate(90)">
                          <stop offset="0%" stopColor="rgba(138, 86, 255, 0.8)" />
                          <stop offset="100%" stopColor="rgba(32, 227, 178, 0.8)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Added shimmering overlay effect */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(32,227,178,0.15),transparent_70%)]"></div>
            </div>
            
            {/* Title and Description (moved outside of animation box) */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">{features[1].title}</h3>
              <p className="text-gray-400 mb-5">{features[1].description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline group">
                Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* University Matching Card */}
          <div className="flex flex-col">
            {/* Animation Box */}
            <div className="mb-6 bg-black border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50"></div>
              <div className="relative h-full flex items-center justify-center p-6">
                {/* Enhanced university matching visualization */}
                <div className="w-full max-w-[200px]">
                  <div className="relative w-full aspect-square">
                    {/* Enhanced central student node with pulsing effect */}
                    <div className="absolute left-1/2 top-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full border-2 border-primary flex items-center justify-center z-10 animate-pulse-gentle" style={{animationDuration: "4s"}}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    
                    {/* Enhanced university nodes with more dynamic animations */}
                    <div className="absolute left-[10%] top-[20%] w-8 h-8 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDuration: "5s", animationDelay: "0.2s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400/30 to-primary/30 animate-pulse-gentle" style={{animationDuration: "3s"}}></div>
                    </div>
                    <div className="absolute left-[80%] top-[25%] w-10 h-10 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDuration: "6s", animationDelay: "0.7s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/40 to-cyan-400/40 animate-pulse-gentle" style={{animationDuration: "4s"}}></div>
                    </div>
                    <div className="absolute left-[70%] top-[70%] w-9 h-9 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDuration: "5.5s", animationDelay: "1.2s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400/30 to-primary/30 animate-pulse-gentle" style={{animationDuration: "3.5s"}}></div>
                    </div>
                    <div className="absolute left-[15%] top-[65%] w-7 h-7 rounded-full bg-black/80 border border-white/20 animate-float" style={{animationDuration: "4.5s", animationDelay: "0.9s"}}>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/30 to-cyan-400/30 animate-pulse-gentle" style={{animationDuration: "3s"}}></div>
                    </div>
                    
                    {/* Enhanced connection lines with better animation */}
                    <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <line x1="50" y1="50" x2="15" y2="20" stroke="url(#gradient1)" strokeWidth="1" className="path-style" opacity="0.6" strokeDasharray="5,3">
                          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                        </line>
                        <line x1="50" y1="50" x2="80" y2="25" stroke="url(#gradient2)" strokeWidth="1" className="path-style" opacity="0.6" strokeDasharray="5,3">
                          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
                        </line>
                        <line x1="50" y1="50" x2="70" y2="70" stroke="url(#gradient1)" strokeWidth="1" className="path-style" opacity="0.6" strokeDasharray="5,3">
                          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3.5s" repeatCount="indefinite" />
                        </line>
                        <line x1="50" y1="50" x2="15" y2="65" stroke="url(#gradient2)" strokeWidth="1" className="path-style" opacity="0.6" strokeDasharray="5,3">
                          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4.5s" repeatCount="indefinite" />
                        </line>
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
                    
                    {/* Enhanced animated pulses to show matching */}
                    <div className="absolute left-1/2 top-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full border border-primary/30 animate-ping opacity-30" style={{animationDuration: "3s"}}></div>
                    <div className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 rounded-full border border-cyan-400/20 animate-ping opacity-20" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
                  </div>
                </div>
              </div>
              
              {/* Added shimmering overlay effect */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(138,86,255,0.15),transparent_70%)]"></div>
            </div>
            
            {/* Title and Description (moved outside of animation box) */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">{features[2].title}</h3>
              <p className="text-gray-400 mb-5">{features[2].description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline group">
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
