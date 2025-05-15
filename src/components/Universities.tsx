
import React from 'react';

const universities = [
  { name: "Harvard University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" },
  { name: "Stanford University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" },
  { name: "MIT", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" },
  { name: "UC Berkeley", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" },
  { name: "Princeton University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" },
  { name: "University of Toronto", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" }
];

const Universities = () => {
  return (
    <section id="universities" className="py-16 border-t border-white/10 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,86,255,0.05),transparent_70%)]"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-400">
            Connecting you with top universities worldwide
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {universities.map((university, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 glass-effect rounded-full mx-auto mb-2 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-all">
                <span className="font-bold text-primary text-sm">{university.name.split(' ').map(word => word[0]).join('')}</span>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{university.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;
