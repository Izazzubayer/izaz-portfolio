
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior with magnetic effect
    const setupSmoothScroll = () => {
      const sections = document.querySelectorAll('section');
      let isScrolling = false;
      let startY = 0;
      let currentSection = 0;

      const handleWheel = (e: WheelEvent) => {
        if (isScrolling) return;
        
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
        
        if (nextSection !== currentSection) {
          isScrolling = true;
          currentSection = nextSection;
          
          sections[currentSection].scrollIntoView({ behavior: 'smooth' });
          
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
      };

      const handleTouchStart = (e: TouchEvent) => {
        startY = e.touches[0].clientY;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (isScrolling) return;
        
        const currentY = e.touches[0].clientY;
        const direction = startY > currentY ? 1 : -1;
        const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
        
        if (nextSection !== currentSection && Math.abs(startY - currentY) > 50) {
          isScrolling = true;
          currentSection = nextSection;
          
          sections[currentSection].scrollIntoView({ behavior: 'smooth' });
          
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    };

    // Only enable magnetic scrolling on desktop
    if (window.innerWidth >= 1024) {
      const cleanup = setupSmoothScroll();
      return cleanup;
    }
  }, []);

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
