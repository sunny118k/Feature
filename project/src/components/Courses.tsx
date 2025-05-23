import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  level: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  level,
  description,
  price,
  features,
  popular = false,
  buttonText
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
      popular 
        ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg relative border-2 border-primary-500'
        : 'bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-md'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <div className={`text-sm font-medium mb-2 ${popular ? 'text-primary-200' : 'text-primary-600'}`}>
          {level}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className={`mb-6 ${popular ? 'text-primary-100' : 'text-gray-600'}`}>
          {description}
        </p>
        
        <div className={`text-3xl font-bold mb-6 ${popular ? 'text-white' : 'text-gray-900'}`}>
          {price}
          <span className={`text-base font-normal ml-1 ${popular ? 'text-primary-200' : 'text-gray-600'}`}>
            /month
          </span>
        </div>
        
        <a
          href="#get-started"
          className={`block text-center py-3 px-6 rounded-xl font-medium transition-all transform hover:scale-105 mb-6 ${
            popular
              ? 'bg-white text-primary-600 hover:bg-gray-100'
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {buttonText}
        </a>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                popular ? 'bg-primary-400 text-white' : 'bg-primary-100 text-primary-600'
              } flex items-center justify-center mt-0.5`}>
                <Check size={12} />
              </div>
              <span className={`ml-3 text-sm ${popular ? 'text-primary-100' : 'text-gray-600'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const courses = [
    {
      title: "Python Fundamentals",
      level: "Beginner",
      description: "Learn Python from scratch with hands-on projects and exercises.",
      price: "$49",
      features: [
        "20+ hours of video content",
        "5 real-world projects",
        "24/7 community support",
        "Certificate of completion",
        "Lifetime access to materials"
      ],
      buttonText: "Start Learning"
    },
    {
      title: "Python Pro Bootcamp",
      level: "Intermediate",
      description: "Dive deeper into Python with advanced concepts and frameworks.",
      price: "$89",
      features: [
        "40+ hours of video content",
        "10 professional projects",
        "1-on-1 mentorship sessions",
        "Industry-recognized certification",
        "Job placement assistance",
        "Resume review service"
      ],
      popular: true,
      buttonText: "Enroll Now"
    },
    {
      title: "Python Mastery",
      level: "Advanced",
      description: "Master advanced Python techniques used by industry professionals.",
      price: "$129",
      features: [
        "60+ hours of specialized content",
        "15 enterprise-level projects",
        "Weekly live coaching calls",
        "Advanced algorithms training",
        "Machine learning modules",
        "Cloud deployment training"
      ],
      buttonText: "Get Advanced"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Courses Designed for Every Skill Level
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you're just starting out or looking to advance your Python skills,
            we have the perfect course for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              level={course.level}
              description={course.description}
              price={course.price}
              features={course.features}
              popular={course.popular}
              buttonText={course.buttonText}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#all-courses" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            View all courses
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;