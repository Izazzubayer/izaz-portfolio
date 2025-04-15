
import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Projects data is a separate array to make it easier to edit
const projects = [
  {
    id: 1,
    title: "FinTech Mobile App Redesign",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&auto=format&fit=crop&q=80",
    description: "Complete redesign of a fintech mobile application focusing on usability improvements and simplified user flows.",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Experience Enhancement",
    category: "User Research & Design",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=80",
    description: "Research-led redesign of an e-commerce platform that increased conversion rates by 24% through improved navigation and checkout flow.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-anek text-3xl md:text-4xl font-bold text-neutral-800 mb-4 animate-fade-in">UX Projects</h2>
        <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-2xl animate-fade-in">Highlights from my UX design portfolio showcasing research-driven and user-centered solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 hover-lift group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-sofia text-neutral-800">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-anek text-xl font-semibold mb-2 text-neutral-800">{project.title}</h3>
                <p className="font-sofia text-neutral-700 mb-4">{project.description}</p>
                <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia" asChild>
                  <a href={project.link}>
                    <Eye className="mr-2 h-4 w-4" /> View Project
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
