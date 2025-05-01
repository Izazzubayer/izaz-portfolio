
import React from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import WorkTimeline from '@/components/WorkTimeline';
import { Button } from "@/components/ui/button";
import { FileDown, Mail, MapPin, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="w-full md:w-1/3">
              <div className="sticky top-32">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-beige to-soft-blue rounded-full opacity-50 blur-3xl"></div>
                  <img 
                    src="/lovable-uploads/c7483ca3-78a1-4ab1-8cc6-0626e0603ec0.png" 
                    alt="Izaz Zubayer" 
                    className="w-full h-auto rounded-lg relative z-10"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-anek" asChild>
                    <a href="https://drive.google.com/file/d/1NxFpi4ZOZs9iuvd60UAJGFiruqJkWka4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <FileDown className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" className="border-neutral-800 text-neutral-800 hover:bg-neutral-100 font-anek" asChild>
                    <a href="mailto:izazzubayer@gmail.com">
                      <Mail className="mr-2 h-4 w-4" /> Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="font-anek text-4xl md:text-5xl font-bold text-neutral-800 mb-6">About Me</h1>
              
              <div className="mb-8">
                <div className="flex items-center gap-2 text-neutral-600 mb-4 font-anek">
                  <MapPin className="h-4 w-4" />
                  <span>Vancouver, Canada</span>
                </div>
                <p className="font-anek text-lg text-neutral-700 mb-4">
                  I'm Izaz, a multidisciplinary designer and researcher with a passion for creating user-centered digital experiences that make a positive impact.
                </p>
                <p className="font-anek text-lg text-neutral-700 mb-4">
                  With a background spanning UX design, research, and development, I bring a holistic approach to solving complex problems. I believe that great design emerges from deeply understanding users, their contexts, and their needs.
                </p>
                <p className="font-anek text-lg text-neutral-700 mb-4">
                  Throughout my career, I've worked with diverse teams across healthcare, finance, and technology sectors, applying user-centered methodologies to create intuitive, accessible, and delightful experiences.
                </p>
                <p className="font-anek text-lg text-neutral-700">
                  When I'm not designing or coding, you'll find me exploring photography, experimenting with new recipes, or hiking the beautiful trails around Vancouver.
                </p>
              </div>
              
              <section className="mb-16">
                <WorkTimeline />
              </section>
              
              <section className="mb-10">
                <h2 className="font-anek text-2xl font-bold text-neutral-800 mb-6 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" /> Education & Training
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-anek text-xl font-semibold text-neutral-800">Master of Digital Media</h3>
                    <p className="font-anek text-neutral-600">Centre for Digital Media • 2020 - 2021</p>
                    <p className="font-anek text-neutral-700 mt-2">Specialized in UX design, project management, and digital storytelling through collaborative industry projects.</p>
                  </div>
                  <div>
                    <h3 className="font-anek text-xl font-semibold text-neutral-800">Bachelor of Computer Science</h3>
                    <p className="font-anek text-neutral-600">University of British Columbia • 2016 - 2020</p>
                    <p className="font-anek text-neutral-700 mt-2">Focused on human-computer interaction, software engineering, and interactive systems design.</p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="font-anek text-2xl font-bold text-neutral-800 mb-6 flex items-center">
                  <Heart className="mr-2 h-5 w-5" /> Beyond Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Photography enthusiast with a focus on urban landscapes",
                    "Amateur chef experimenting with fusion cuisine",
                    "Outdoor adventurer exploring the Pacific Northwest",
                    "Technology hobbyist building small IoT projects",
                    "Volunteer teaching digital skills to seniors",
                    "Avid reader of science fiction and design theory"
                  ].map((interest, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="font-anek text-neutral-700">{interest}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <BackToTop />
    </div>
  );
};

export default About;
