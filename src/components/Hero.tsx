
import React from 'react';
import { ArrowDown, FileDown, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center bg-neutral-100/30">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-10 space-y-6 md:space-y-8 mb-12 md:mb-0">
          <h1 className="font-anek text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hello World, I am Izaz.
          </h1>
          
          <h2 className="font-sofia text-lg md:text-xl text-neutral-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Founder @ Beige + Blue | HCI Specialist @ The Kow Company LTD.
          </h2>
          
          <p className="font-sofia text-base md:text-lg text-neutral-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Hello World 👋🏼 I am a certified UX Designer & a Project Manager.
          </p>
          
          <div className="font-sofia text-base text-neutral-700 leading-relaxed space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p>
              I'm a versatile professional with extensive experience in code, research, and design, with a passion for creative pursuits like photography, videography, and social media management. My skill set encompasses various disciplines, including web development, visual design, UX research, interaction design, data organization, prototyping, and front-end development.
            </p>
            <p>
              I've consistently been involved in a wide range of design, development, and research projects, achieving top 3 placements in design sprints and hackathons over the past five years.
            </p>
          </div>
          
          <p className="font-anek text-lg md:text-xl text-neutral-800 italic animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Welcome to my portfolio, brew some coffee, and take a look at my design, development, and research work — let's create something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia">
              <FileDown className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Button variant="outline" className="border-neutral-800 text-neutral-800 hover:bg-neutral-100 font-sofia">
              <Mail className="mr-2 h-4 w-4" /> Get in Touch
            </Button>
          </div>
          
          <div className="hidden md:flex justify-center pt-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <a href="#design" className="text-neutral-500 hover:text-neutral-800 transition-colors">
              <ArrowDown className="h-8 w-8 animate-bounce" />
            </a>
          </div>
        </div>
        
        {/* Right Content - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative w-full max-w-md">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-beige to-soft-blue rounded-full opacity-50 blur-3xl"></div>
            <img 
              src="/lovable-uploads/9344595c-8d1d-46bd-9343-84948f9a4420.png" 
              alt="Izaz Zubayer Illustration" 
              className="w-full h-auto object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
