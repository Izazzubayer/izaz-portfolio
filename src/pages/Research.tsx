
import React from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, BarChart, Search } from 'lucide-react';

const researchProjects = [
  {
    id: 1,
    title: "Healthcare User Experience Study",
    methodology: "Mixed Methods",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
    description: "An in-depth study of patient interactions with healthcare portals, identifying key pain points and opportunities for improvement.",
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking Usability Testing",
    methodology: "User Testing",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    description: "Conducted usability testing with 25 participants to evaluate the effectiveness of a new mobile banking interface.",
    link: "#"
  },
  {
    id: 3,
    title: "E-commerce Customer Journey Mapping",
    methodology: "Contextual Inquiry",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=80",
    description: "Mapped the customer journey for an e-commerce platform, identifying key touchpoints and emotional responses.",
    link: "#"
  },
  {
    id: 4,
    title: "Accessibility Audit",
    methodology: "Heuristic Evaluation",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&auto=format&fit=crop&q=80",
    description: "Conducted a comprehensive accessibility audit of a government website, providing recommendations for WCAG 2.1 compliance.",
    link: "#"
  },
];

const researchMethods = [
  {
    icon: <Users className="h-6 w-6 text-neutral-700" />,
    name: "User Interviews",
    description: "In-depth conversations with users to understand their needs, behaviors, and pain points."
  },
  {
    icon: <Search className="h-6 w-6 text-neutral-700" />,
    name: "Usability Testing",
    description: "Observing users as they interact with products to identify usability issues and areas for improvement."
  },
  {
    icon: <BarChart className="h-6 w-6 text-neutral-700" />,
    name: "Survey Research",
    description: "Collecting quantitative data from larger user groups to identify patterns and preferences."
  },
  {
    icon: <FileText className="h-6 w-6 text-neutral-700" />,
    name: "Contextual Inquiry",
    description: "Observing and interviewing users in their natural environment to understand real-world usage."
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-anek text-4xl md:text-5xl font-bold text-neutral-800 mb-6">UX Research</h1>
          <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-3xl">My research work focuses on understanding user needs and behaviors to inform design decisions. I employ various methodologies to gather insights that drive user-centered solutions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {researchProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-neutral-200 hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-sofia text-neutral-800">
                    {project.methodology}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-anek text-xl">{project.title}</CardTitle>
                  <CardDescription className="font-sofia">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia" asChild>
                    <a href={project.link}>
                      <FileText className="mr-2 h-4 w-4" /> View Case Study
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <section className="mb-16">
            <h2 className="font-anek text-3xl font-bold text-neutral-800 mb-6">Research Methods</h2>
            <p className="font-sofia text-lg text-neutral-600 mb-8 max-w-3xl">I employ various research methodologies to gather comprehensive insights about users and their needs.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchMethods.map((method) => (
                <Card key={method.name} className="border border-neutral-200">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {method.icon}
                    </div>
                    <CardTitle className="font-anek text-xl">{method.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sofia text-neutral-600 text-center">{method.description}</p>
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

export default Research;
