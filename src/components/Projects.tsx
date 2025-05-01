
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Projects data is a separate array to make it easier to edit
const projects = [
  {
    id: 1,
    title: "FinTech Mobile App Redesign",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&auto=format&fit=crop&q=80",
    description: "Complete redesign of a fintech mobile application focusing on usability improvements and simplified user flows.",
    link: "#",
    client: "FinTech Inc.",
    role: "Lead UX Designer",
    team: ["Product Manager", "2 UI Developers", "QA Engineer"],
    timeline: "3 months (Jan-Mar 2025)",
    tools: ["Figma", "Miro", "UserTesting"],
    objective: "To simplify financial management for users through intuitive interface design",
    context: "Users found the previous app difficult to navigate, leading to low engagement rates",
    painPoints: ["Complex transaction history", "Confusing account setup", "Overwhelming dashboard"],
    businessGoals: "Increase user retention by 20% and boost daily active users",
    researchMethods: ["User interviews", "Usability testing", "Analytics review"],
    keyInsights: ["Users preferred simplified views for daily tasks", "Authentication flow needed streamlining"],
    process: "Started with user research, created wireframes, developed interactive prototypes, and conducted iterative testing",
    testingResults: "90% of test users completed key tasks successfully compared to 65% with the old design",
    impact: "Increased user retention by 25% and reduced support tickets by 40%"
  },
  {
    id: 2,
    title: "E-commerce Experience Enhancement",
    category: "User Research & Design",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=80",
    description: "Research-led redesign of an e-commerce platform that increased conversion rates by 24% through improved navigation and checkout flow.",
    link: "#",
    client: "ShopX Online Retail",
    role: "UX Researcher & Designer",
    team: ["Senior UI Designer", "Frontend Engineer", "Product Owner"],
    timeline: "4 months (Sept-Dec 2024)",
    tools: ["Adobe XD", "Hotjar", "Optimizely"],
    objective: "To optimize the shopping journey and increase conversion rates",
    context: "High cart abandonment rates were affecting revenue growth",
    painPoints: ["Complicated checkout process", "Poor product filtering", "Slow load times"],
    businessGoals: "Increase conversion rate by 15% and reduce cart abandonment",
    researchMethods: ["A/B testing", "User session recordings", "Exit surveys"],
    keyInsights: ["Users abandoned checkout when shipping costs were revealed late", "Mobile users struggled with filtering options"],
    process: "Analyzed user behavior data, redesigned critical user journeys, and implemented an optimized checkout flow",
    testingResults: "Reduced average checkout time from 4 minutes to 2.5 minutes",
    impact: "Increased conversion rate by 24% and reduced cart abandonment by 30%"
  }
];

const ProjectDetailDialog = ({ project, open, onOpenChange }) => {
  if (!project) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-anek">{project.title}</DialogTitle>
          <p className="text-neutral-600 font-anek">{project.category}</p>
        </DialogHeader>
        
        {/* Hero Image */}
        <div className="w-full h-64 mb-6 overflow-hidden rounded-md">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Project Overview Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold font-anek mb-4">Project Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <dl className="space-y-2">
                  <div>
                    <dt className="font-semibold font-anek">Client</dt>
                    <dd className="font-anek">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold font-anek">Role</dt>
                    <dd className="font-anek">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold font-anek">Timeline</dt>
                    <dd className="font-anek">{project.timeline}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <dl className="space-y-2">
                  <div>
                    <dt className="font-semibold font-anek">Team</dt>
                    <dd className="font-anek">{project.team && project.team.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold font-anek">Tools Used</dt>
                    <dd className="font-anek">{project.tools && project.tools.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold font-anek">Objective</dt>
                    <dd className="font-anek">{project.objective}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Problem Statement Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold font-anek mb-4">Problem Statement</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="font-anek mb-4">{project.context}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold font-anek mb-2">User Pain Points</h4>
                {project.painPoints && (
                  <ul className="list-disc pl-5 font-anek">
                    {project.painPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div>
                <h4 className="font-semibold font-anek mb-2">Business Goals</h4>
                <p className="font-anek">{project.businessGoals}</p>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Research & Discovery Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold font-anek mb-4">Research & Discovery</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <h4 className="font-semibold font-anek mb-2">Research Methods</h4>
                {project.researchMethods && (
                  <ul className="list-disc pl-5 font-anek">
                    {project.researchMethods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div>
                <h4 className="font-semibold font-anek mb-2">Key Insights</h4>
                {project.keyInsights && (
                  <ul className="list-disc pl-5 font-anek">
                    {project.keyInsights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Design Process Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold font-anek mb-4">Design Process</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="font-anek">{project.process}</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Testing & Results Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold font-anek mb-4">Testing & Validation</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="font-anek">{project.testingResults}</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Impact Section */}
        <section>
          <h3 className="text-xl font-semibold font-anek mb-4">Impact & Results</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="font-anek">{project.impact}</p>
            </CardContent>
          </Card>
        </section>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-anek text-3xl md:text-4xl font-bold text-neutral-800 mb-4 animate-fade-in">UX Projects</h2>
        <p className="font-anek text-lg text-neutral-600 mb-12 max-w-2xl animate-fade-in">Highlights from my UX design portfolio showcasing research-driven and user-centered solutions.</p>
        
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
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-anek text-neutral-800">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-anek text-xl font-semibold mb-2 text-neutral-800">{project.title}</h3>
                <p className="font-anek text-neutral-700 mb-4">{project.description}</p>
                <Button 
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-anek"
                  onClick={() => handleOpenProject(project)}
                >
                  <Eye className="mr-2 h-4 w-4" /> View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <ProjectDetailDialog 
          project={selectedProject}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  );
};

export default Projects;
