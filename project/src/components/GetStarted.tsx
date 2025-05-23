import React, { useState } from 'react';

const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    goal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thanks for your interest! An advisor will contact you shortly.');
  };

  return (
    <section id="get-started" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-primary-800 text-primary-200 text-sm font-medium px-3 py-1 rounded-full">
              Start Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
              Ready to Become a Python Master?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Fill out the form to schedule a free consultation with one of our Python experts. 
              We'll help you choose the right learning path based on your goals and experience.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Schedule a Consultation</h3>
                  <p className="mt-1 text-gray-300">Talk to our Python experts about your goals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Get a Personalized Plan</h3>
                  <p className="mt-1 text-gray-300">Receive a learning roadmap tailored to your needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Start Learning</h3>
                  <p className="mt-1 text-gray-300">Begin your Python journey with expert guidance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Book Your Free Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3 border"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3 border"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3 border"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Programming Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3 border"
                  >
                    <option value="beginner">Beginner (No Experience)</option>
                    <option value="some">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
                    What's your goal with Python?
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3 border"
                    placeholder="I want to build web applications, automate tasks, etc."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>
              
              <p className="mt-4 text-xs text-gray-500">
                By submitting this form, you agree to our <a href="#" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;