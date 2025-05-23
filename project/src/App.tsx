import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyPython from './components/WhyPython';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhyPython />
      <Courses />
      <Testimonials />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;