import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-100 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Learn Python{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-500 animate-gradient">
                Like a Pro
              </span>{' '}
              With Expert Guidance
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Master Python programming with our comprehensive courses designed for beginners and professionals alike. Join thousands of successful developers who transformed their careers.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a href="#get-started" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-xl transition-all hover-scale flex items-center justify-center">
                Get Started Now
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a href="#courses" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary-600 font-medium py-3 px-8 rounded-xl border-2 border-primary-600 transition-all hover-scale">
                Explore Courses
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center md:justify-start animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className={`w-10 h-10 rounded-full border-2 border-white bg-primary-${index * 100} flex items-center justify-center hover-scale`}>
                    <span className="text-xs font-medium text-white">U{index}</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Join 10,000+ students</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm font-medium text-gray-700">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden p-6 transform transition-all hover-scale">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-600 font-medium">
                  python_intro.py
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                <div className="mb-2 text-blue-400"># Welcome to Python Programming</div>
                <div className="mb-2 opacity-80"><span className="text-purple-400">def</span> <span className="text-yellow-400">greet_student</span>(name):</div>
                <div className="mb-2 ml-4 opacity-80"><span className="text-purple-400">return</span> <span className="text-yellow-400">f</span><span className="text-green-400">"Hello {name}, welcome to Python Master!"</span></div>
                <div className="mb-2 opacity-80"></div>
                <div className="mb-2 opacity-80"><span className="text-purple-400">class</span> <span className="text-blue-400">PythonCourse</span>:</div>
                <div className="mb-2 ml-4 opacity-80"><span className="text-purple-400">def</span> <span className="text-yellow-400">__init__</span>(self, level):</div>
                <div className="mb-2 ml-8 opacity-80">self.level = level</div>
                <div className="mb-2 ml-8 opacity-80">self.enrolled = True</div>
                <div className="mb-2 ml-4 opacity-80"></div>
                <div className="mb-2 ml-4 opacity-80"><span className="text-purple-400">def</span> <span className="text-yellow-400">start_learning</span>(self):</div>
                <div className="mb-2 ml-8 opacity-80"><span className="text-purple-400">print</span>(<span className="text-green-400">"Starting your Python journey!"</span>)</div>
                <div className="mb-2 opacity-80"></div>
                <div className="opacity-80"><span className="text-blue-400">student</span> = <span className="text-yellow-400">greet_student</span>(<span className="text-green-400">"Alex"</span>)</div>
                <div className="opacity-80"><span className="text-blue-400">course</span> = <span className="text-blue-400">PythonCourse</span>(<span className="text-green-400">"Beginner"</span>)</div>
                <div className="opacity-80"><span className="text-blue-400">course</span>.<span className="text-yellow-400">start_learning</span>()</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-full opacity-10 animate-pulse-slow"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;