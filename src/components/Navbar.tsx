
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">QuestApply</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#howitworks" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">How It Works</a>
          <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Benefits</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Testimonials</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary-dark transition-colors">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
