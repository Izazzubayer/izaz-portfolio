
import React from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code as CodeIcon } from 'lucide-react';

const codeProjects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    stack: "React, TypeScript, Tailwind CSS",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=80",
    description: "A responsive portfolio website built with modern web technologies to showcase my work and skills.",
    github: "https://github.com/username/portfolio",
    demo: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    stack: "Next.js, Stripe, MongoDB",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80",
    description: "A full-stack e-commerce application with payment processing, product management, and user authentication.",
    github: "https://github.com/username/ecommerce",
    demo: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    stack: "React, Redux, OpenWeather API",
    image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=80",
    description: "An interactive weather application that provides real-time forecasts and historical weather data.",
    github: "https://github.com/username/weather-app",
    demo: "#"
  },
  {
    id: 4,
    title: "Task Management App",
    stack: "Vue.js, Firebase, Vuex",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=80",
    description: "A collaborative task management application with real-time updates and team features.",
    github: "https://github.com/username/task-manager",
    demo: "#"
  },
];

const Code = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-anek text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Coding Projects</h1>
          <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-3xl">Exploring the intersection of design and development through code. These projects demonstrate my technical skills and problem-solving abilities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {codeProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-neutral-200 hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-sofia text-neutral-800">
                    {project.stack}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-anek text-xl">{project.title}</CardTitle>
                  <CardDescription className="font-sofia">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="font-sofia" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <section className="mb-16">
            <h2 className="font-anek text-3xl font-bold text-neutral-800 mb-6">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "SASS"]
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST API", "GraphQL", "Authentication"]
                },
                {
                  category: "Tools & Practices",
                  skills: ["Git", "CI/CD", "Agile", "Testing", "Responsive Design", "Accessibility", "Performance Optimization"]
                }
              ].map((skillSet) => (
                <Card key={skillSet.category} className="border border-neutral-200">
                  <CardHeader>
                    <CardTitle className="font-anek text-xl">{skillSet.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="font-sofia text-neutral-600 space-y-2">
                      {skillSet.skills.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <CodeIcon className="mr-2 h-4 w-4 text-neutral-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
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

export default Code;
