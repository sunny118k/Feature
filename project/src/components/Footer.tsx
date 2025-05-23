import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Python<span className="text-primary-500">Master</span></div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering the next generation of Python developers with comprehensive, 
              accessible, and practical programming education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Python Fundamentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">All Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-sm text-gray-500">
            © 2025 PythonMaster. All rights reserved.
          </div>
          <div className="flex space-x-6 md:justify-end text-sm">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Python and the Python logo are trademarks of the Python Software Foundation</p>
          <div className="flex items-center mt-4 md:mt-0">
            <Mail size={16} className="mr-2" />
            <a href="mailto:info@pythonmaster.com" className="hover:text-primary-400 transition-colors">
              info@pythonmaster.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;