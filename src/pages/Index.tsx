import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      {/* Additional sections would go here */}
    </div>
  );
};

export default Index;
