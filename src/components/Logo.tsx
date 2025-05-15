
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-1">
      <div className="relative">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg rotate-3 transform transition-all duration-300 hover:rotate-6 hover:scale-110">
          <div className="w-6 h-6 rounded-md bg-black/80 flex items-center justify-center">
            <div className="text-cyan-400 font-bold text-xl">Q</div>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(32,227,178,0.8)] animate-pulse"></div>
      </div>
      <div className="font-bold text-xl">
        <span className="text-white">Quest</span>
        <span className="text-gradient-cyan">Apply</span>
      </div>
    </div>
  );
};

export default Logo;
