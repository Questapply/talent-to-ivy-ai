
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
    <section id="universities" className="py-12 border-t border-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-500">
            Connecting you with top universities worldwide
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {universities.map((university, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="font-bold text-gray-700 text-sm">{university.name.split(' ').map(word => word[0]).join('')}</span>
              </div>
              <p className="text-sm text-gray-600">{university.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;
