import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, company, imageSrc }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 relative">
      <div className="absolute -top-5 left-8 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
        <Quote size={20} className="text-white" />
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mt-6 mb-8">{content}</p>
      <div className="flex items-center">
        <img 
          src={imageSrc} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      content: "Learning Python through this platform completely changed my career trajectory. Within 6 months of completing the course, I landed a job as a junior data scientist at a tech startup, doubling my previous salary.",
      author: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechVision Inc.",
      imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "As someone with zero programming experience, I was intimidated to start learning to code. The step-by-step approach and amazing support system made Python accessible and even fun! Now I automate tasks at my job daily.",
      author: "Michael Chen",
      role: "Marketing Analyst",
      company: "Global Marketing",
      imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "The project-based learning approach helped me build a portfolio that impressed interviewers. Three companies competed to hire me after I completed the advanced Python course. Best investment in my education ever.",
      author: "Jessica Miller",
      role: "Software Engineer",
      company: "Innovative Solutions",
      imageSrc: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Hear From Our Students
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our students have gone on to work at top companies and build amazing projects with the skills they learned.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>

          {/* Mobile slider */}
          <div className="md:hidden">
            <Testimonial
              content={testimonials[activeIndex].content}
              author={testimonials[activeIndex].author}
              role={testimonials[activeIndex].role}
              company={testimonials[activeIndex].company}
              imageSrc={testimonials[activeIndex].imageSrc}
            />
            
            <div className="flex justify-center mt-8 space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-700 hover:bg-primary-50 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-700 hover:bg-primary-50 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Growing Community of Python Developers</h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">10,000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">25+</div>
              <div className="text-gray-600">Courses</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">92%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">4.9/5</div>
              <div className="text-gray-600">Student Rating</div>
            </div>
          </div>
          
          <a 
            href="#get-started" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-xl transition-all transform hover:scale-105"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;