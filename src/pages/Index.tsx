
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <Companies />
      <Certifications />
      <Projects />
      <BackToTop />
    </div>
  );
};

export default Index;
