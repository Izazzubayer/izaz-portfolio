
import React from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';

const designProjects = [
  {
    id: 1,
    title: "Healthcare Portal Redesign",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
    description: "Reimagined the patient experience through a comprehensive redesign of the healthcare portal, focusing on accessibility and ease of use.",
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    description: "Created an intuitive mobile banking experience with enhanced security features and personalized financial insights.",
    link: "#"
  },
  {
    id: 3,
    title: "E-commerce Experience Enhancement",
    category: "User Research & Design",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=80",
    description: "Research-led redesign of an e-commerce platform that increased conversion rates by 24% through improved navigation and checkout flow.",
    link: "#"
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    category: "Service Design",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&auto=format&fit=crop&q=80",
    description: "Designed an end-to-end travel booking experience, creating a seamless journey from inspiration to booking confirmation.",
    link: "#"
  },
];

const Design = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-anek text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Design Portfolio</h1>
          <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-3xl">Showcasing my design projects across various industries. Each project represents a unique challenge and solution developed through a user-centered design process.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {designProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-neutral-200 hover-lift">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-sofia text-neutral-800">
                    {project.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-anek text-xl">{project.title}</CardTitle>
                  <CardDescription className="font-sofia">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia" asChild>
                    <a href={project.link}>
                      <Eye className="mr-2 h-4 w-4" /> View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <section className="mb-16">
            <h2 className="font-anek text-3xl font-bold text-neutral-800 mb-6">Design Process</h2>
            <p className="font-sofia text-lg text-neutral-600 mb-8 max-w-3xl">I follow a comprehensive design process that ensures solutions are both user-centered and business-aligned. Each phase is crucial for developing effective design solutions.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Research', 'Ideation', 'Prototyping', 'Testing'].map((phase, index) => (
                <Card key={phase} className="border border-neutral-200">
                  <CardHeader>
                    <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <span className="font-anek text-xl font-bold text-neutral-800">{index + 1}</span>
                    </div>
                    <CardTitle className="font-anek text-xl">{phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sofia text-neutral-600">
                      {index === 0 && "Understanding user needs through interviews, surveys, and observation."}
                      {index === 1 && "Generating innovative solutions through sketching and collaborative workshops."}
                      {index === 2 && "Creating interactive mockups to visualize and refine the solution."}
                      {index === 3 && "Validating designs with real users to ensure effectiveness and usability."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <BackToTop />
    </div>
  );
};

export default Design;
