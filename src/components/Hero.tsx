import React from 'react';
import { ArrowDown, FileDown, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center bg-neutral-100/30">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-10 space-y-6 md:space-y-8 mb-12 md:mb-0">
          <h1 className="font-anek text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            Hello World, I am Izaz.
          </h1>
          
          <h2 style={{
          animationDelay: '0.2s'
        }} className="font-anek text-lg md:text-xl text-neutral-600 animate-fade-in">
            Founder @ Beige + Blue | HCI Specialist @ The Kow Company LTD.
          </h2>
          
          <p style={{
          animationDelay: '0.3s'
        }} className="font-sofia text-base text-neutral-700 animate-fade-in md:text-lg">I build digital brands, craft experience, and innovate solutions.</p>
          
          <div className="font-sofia text-base text-neutral-700 leading-relaxed space-y-4 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <p>I'm a versatile professional with extensive experience in code, research, and design, with a passion for creative pursuits like photography, videography, and social media management. My skill set encompasses various disciplines, including project management, vibe coding, and product design.</p>
            
          </div>
          
          <p style={{
          animationDelay: '0.5s'
        }} className="font-anek bangla text-neutral-800 animate-fade-in text-left md:text-xl text-sm">
            Welcome to my portfolio, brew some coffee, and take a look at my design, development, and research work — let's create something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia" asChild>
              <a href="https://drive.google.com/file/d/1NxFpi4ZOZs9iuvd60UAJGFiruqJkWka4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button variant="outline" className="border-neutral-800 text-neutral-800 hover:bg-neutral-100 font-sofia" asChild>
              <a href="mailto:izazzubayer@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </a>
            </Button>
          </div>
          
          
        </div>
        
        {/* Right Content - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{
        animationDelay: '0.5s'
      }}>
          <div className="relative w-full max-w-md">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-beige to-soft-blue rounded-full opacity-50 blur-3xl"></div>
            <img alt="Izaz Zubayer Illustration" src="/lovable-uploads/c7483ca3-78a1-4ab1-8cc6-0626e0603ec0.png" className="w-full h-auto object-contain relative z-10" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;