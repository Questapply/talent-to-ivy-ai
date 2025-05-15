
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 group">
          <div className="w-7 h-7 rounded-md bg-black/80 flex items-center justify-center backdrop-blur-sm">
            <span className="text-gradient-cyan font-bold text-xl">Q</span>
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(32,227,178,0.8)] animate-pulse"></span>
        </div>
      </div>
      <div className="font-bold text-xl tracking-tight">
        <span className="text-white">Quest</span>
        <span className="text-gradient-cyan">Apply</span>
      </div>
    </div>
  );
};

export default Logo;
