import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Python<span className="text-accent-500">Master</span></span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Features
            </a>
            <a href="#why-python" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Why Python
            </a>
            <a href="#courses" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Courses
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              FAQ
            </a>

            <a 
              href="#get-started" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#why-python" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Why Python
            </a>
            <a 
              href="#courses" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#get-started" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;