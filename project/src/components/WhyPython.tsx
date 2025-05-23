import React from 'react';
import { TrendingUp, DollarSign, Zap, Globe, Database, Terminal } from 'lucide-react';

interface ReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ReasonCard: React.FC<ReasonProps> = ({ icon, title, description, color }) => {
  return (
    <div className="flex items-start p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyPython: React.FC = () => {
  const reasons = [
    {
      icon: <TrendingUp size={24} className="text-white" />,
      title: "High Demand",
      description: "Python developers are among the most sought-after professionals in the tech industry with salaries averaging $120,000/year.",
      color: "bg-primary-600"
    },
    {
      icon: <Zap size={24} className="text-white" />,
      title: "Easy to Learn",
      description: "Python's clean syntax and readability make it the perfect language for beginners to learn programming concepts quickly.",
      color: "bg-accent-500"
    },
    {
      icon: <Globe size={24} className="text-white" />,
      title: "Versatility",
      description: "From web development to data science, AI, automation, and more - Python can be used for virtually any programming task.",
      color: "bg-secondary-600"
    },
    {
      icon: <Database size={24} className="text-white" />,
      title: "Data Science Powerhouse",
      description: "Python is the leading language for data analysis, machine learning, and AI with powerful libraries like Pandas, NumPy, and TensorFlow.",
      color: "bg-green-600"
    },
    {
      icon: <Terminal size={24} className="text-white" />,
      title: "Strong Community",
      description: "With millions of developers worldwide, you'll always find support, libraries, and resources for any Python project.",
      color: "bg-blue-600"
    },
    {
      icon: <DollarSign size={24} className="text-white" />,
      title: "Career Growth",
      description: "Python skills open doors to the fastest-growing tech fields including AI, machine learning, and data engineering.",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="why-python" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">Why Python?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">The Most In-Demand Programming Language</h2>
            <p className="mt-4 text-lg text-gray-600">
              Python has consistently ranked as the most popular programming language according to the TIOBE index and Stack Overflow surveys. Here's why you should learn Python now:
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4">
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Ranked #1 in popularity for 5+ years</span>
              </div>
              
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Used by Google, NASA, Netflix, and Spotify</span>
              </div>
              
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Powers 80% of machine learning applications</span>
              </div>
              
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>48% growth in Python jobs year over year</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 gap-4 mt-8 md:mt-0">
            {reasons.map((reason, index) => (
              <ReasonCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
                color={reason.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPython;