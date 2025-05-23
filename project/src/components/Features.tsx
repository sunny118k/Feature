import React from 'react';
import { Book, Monitor, Award, Users, Clock, Code } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Book size={24} />,
      title: "Comprehensive Curriculum",
      description: "From basics to advanced concepts, our structured curriculum ensures you master Python step by step."
    },
    {
      icon: <Monitor size={24} />,
      title: "Interactive Learning",
      description: "Practice as you learn with our interactive coding environment and real-time feedback system."
    },
    {
      icon: <Users size={24} />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals with years of real-world Python experience."
    },
    {
      icon: <Code size={24} />,
      title: "Project-Based Learning",
      description: "Apply your knowledge to real-world projects that build your portfolio and enhance your resume."
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with lifetime access to course materials and updates."
    },
    {
      icon: <Award size={24} />,
      title: "Industry Certification",
      description: "Earn recognized certifications that prove your Python expertise to potential employers."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">Everything You Need to Master Python</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive platform provides all the tools, resources, and support you need to become a Python expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;