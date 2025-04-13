
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        onClick={scrollToTop} 
        size="icon" 
        className="h-12 w-12 rounded-full bg-neutral-800 hover:bg-neutral-700 shadow-md animate-bounce"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default BackToTop;
