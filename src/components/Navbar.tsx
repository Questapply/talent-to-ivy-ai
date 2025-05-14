
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">QuestApply</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Features</a>
          <a href="#howitworks" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
          <a href="#universities" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Universities</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 relative overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container px-4 mx-auto py-4 flex flex-col space-y-4">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2">Features</a>
          <a href="#howitworks" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2">Testimonials</a>
          <a href="#universities" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2">Universities</a>
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full">
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
