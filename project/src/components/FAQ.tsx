import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need prior programming experience to start?",
      answer: "No, our beginner courses are designed for absolute beginners with no prior coding experience. We start with the fundamentals and gradually progress to more advanced concepts."
    },
    {
      question: "How long does it take to learn Python?",
      answer: "The time it takes to learn Python depends on your goals and dedication. Our beginner course takes about 4-6 weeks to complete if you study 5-10 hours per week. To become proficient, most students spend 3-6 months learning and practicing regularly."
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer: "Yes, all our courses come with a certificate of completion that you can add to your resume and LinkedIn profile. Our certifications are recognized by many employers in the tech industry."
    },
    {
      question: "What kind of support will I receive during the course?",
      answer: "We provide comprehensive support including 24/7 access to our community forum where you can ask questions, weekly live Q&A sessions with instructors, email support, and code reviews for your projects."
    },
    {
      question: "Can I switch between different courses?",
      answer: "Yes, our subscription plans give you access to multiple courses, and you can switch between them as needed. If you find a course too advanced, you can always step back to a more fundamental course."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not satisfied with your learning experience, you can request a full refund within 30 days of purchase, no questions asked."
    },
    {
      question: "Will I be able to build real projects after taking your courses?",
      answer: "Absolutely! Our courses are project-based, meaning you'll build real-world applications throughout your learning journey. By the end of our beginner course, you'll have built at least 5 practical projects that you can add to your portfolio."
    },
    {
      question: "Can I access the course materials after completing the course?",
      answer: "Yes, you have lifetime access to all course materials, including future updates. Once you purchase a course, it's yours forever."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our Python courses and learning process.
          </p>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-xl transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;