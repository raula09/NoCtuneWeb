import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
              <Music className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NoCtune
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Download Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
            <a href="#about" className="block hover:text-purple-400 transition-colors">About</a>
            <a href="#pricing" className="block hover:text-purple-400 transition-colors">Pricing</a>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full">
              Download Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}