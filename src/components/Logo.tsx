
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative h-9 w-9 mr-2">
        {/* Modern minimal logo with gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary rounded-lg rotate-45 shadow-lg"></div>
        <div className="absolute inset-[3px] bg-black rounded-[5px] flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary font-bold">T</span>
        </div>
      </div>
      <span className="font-bold text-xl text-white">Talent<span className="text-cyan-400">AI</span></span>
    </div>
  );
};

export default Logo;
