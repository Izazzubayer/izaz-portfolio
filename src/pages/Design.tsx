
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import Projects from '@/components/Projects';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const designProjects = [
  {
    id: 1,
    title: "Healthcare Portal Redesign",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
    description: "Reimagined the patient experience through a comprehensive redesign of the healthcare portal, focusing on accessibility and ease of use.",
    link: "#",
    client: "MediCare Health Systems",
    role: "Lead UI/UX Designer",
    team: ["Product Manager", "Frontend Developer", "Healthcare Consultant"],
    timeline: "5 months (Feb-Jun 2024)",
    tools: ["Figma", "Maze", "Adobe Illustrator"],
    objective: "To create an accessible, user-friendly healthcare portal that improves patient engagement",
    context: "The existing portal had low adoption rates due to confusing navigation and accessibility issues",
    painPoints: ["Complex appointment scheduling", "Difficult to access test results", "Overwhelming medical terminology"],
    businessGoals: "Increase portal usage by 40% and improve patient satisfaction scores",
    researchMethods: ["Patient interviews", "Accessibility audits", "Stakeholder workshops"],
    keyInsights: ["Older users needed simplified navigation", "Medical terminology needed plain language alternatives"],
    process: "Conducted user research with diverse patient groups, created accessible wireframes, and developed a component library for consistent experience",
    testingResults: "Accessibility score improved from 72% to 96% compliance with WCAG 2.1 standards",
    impact: "Increased portal usage by 65% and reduced call center volume by 40%"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    description: "Created an intuitive mobile banking experience with enhanced security features and personalized financial insights.",
    link: "#",
    client: "NextGen Bank",
    role: "Product Designer",
    team: ["UX Researcher", "iOS Developer", "Android Developer", "Security Specialist"],
    timeline: "6 months (Jul-Dec 2024)",
    tools: ["Sketch", "Principle", "Zeplin"],
    objective: "To create a secure yet user-friendly mobile banking experience that promotes financial wellness",
    context: "Increasing competition from fintech startups was threatening customer retention",
    painPoints: ["Cumbersome authentication process", "Difficulty tracking spending habits", "Limited personalization"],
    businessGoals: "Increase mobile app usage by 30% and boost customer satisfaction ratings",
    researchMethods: ["Competitor analysis", "User surveys", "Usability benchmarking"],
    keyInsights: ["Users wanted biometric authentication options", "Personalized insights were highly valued"],
    process: "Analyzed competitor apps, designed secure authentication flows, and created an innovative financial insights dashboard",
    testingResults: "Reduced authentication time by 60% while maintaining security standards",
    impact: "App store rating increased from 3.2 to 4.7 stars and mobile transactions increased by 45%"
  },
  {
    id: 3,
    title: "E-commerce Experience Enhancement",
    category: "User Research & Design",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=80",
    description: "Research-led redesign of an e-commerce platform that increased conversion rates by 24% through improved navigation and checkout flow.",
    link: "#",
    client: "FashionForward",
    role: "UX Researcher & Designer",
    team: ["Visual Designer", "Frontend Developer", "Marketing Specialist"],
    timeline: "4 months (Aug-Nov 2024)",
    tools: ["Figma", "Hotjar", "Google Analytics"],
    objective: "To optimize the shopping experience and increase conversion rates",
    context: "High cart abandonment rates and low mobile conversions were affecting revenue",
    painPoints: ["Complex checkout process", "Poor product discovery", "Slow loading times on mobile"],
    businessGoals: "Increase conversion rate by 20% and improve mobile sales",
    researchMethods: ["Heatmaps", "User interviews", "Conversion funnel analysis"],
    keyInsights: ["Users abandoned checkout when required to create accounts", "Product filtering was inadequate"],
    process: "Analyzed conversion funnels, redesigned product discovery, and streamlined the checkout process",
    testingResults: "Reduced checkout steps from 5 to 3 without compromising information collection",
    impact: "Increased conversion rate by 24% and boosted mobile sales by 35%"
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    category: "Service Design",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&auto=format&fit=crop&q=80",
    description: "Designed an end-to-end travel booking experience, creating a seamless journey from inspiration to booking confirmation.",
    link: "#",
    client: "Wanderlust Travel",
    role: "Service Designer",
    team: ["UX Designer", "Backend Engineer", "Content Strategist"],
    timeline: "7 months (Jan-Jul 2024)",
    tools: ["Adobe XD", "Miro", "InVision"],
    objective: "To create an inspirational yet practical travel booking experience",
    context: "Users were browsing but not converting due to disconnected inspiration and booking processes",
    painPoints: ["Disconnected browsing and booking experiences", "Information overload", "Limited personalization"],
    businessGoals: "Increase bookings by 25% and improve user engagement metrics",
    researchMethods: ["Customer journey mapping", "Contextual inquiry", "Diary studies"],
    keyInsights: ["Users needed seamless transitions between inspiration and booking", "Personalized recommendations drove engagement"],
    process: "Mapped the entire customer journey, identified opportunity areas, and designed an integrated inspiration-to-booking experience",
    testingResults: "Users completed bookings 40% faster with the new integrated experience",
    impact: "Bookings increased by 32% and time spent in the inspiration phase increased by 45%"
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

const Design = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-anek text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Design Portfolio</h1>
          <p className="font-anek text-lg text-neutral-600 mb-12 max-w-3xl">Showcasing my design projects across various industries. Each project represents a unique challenge and solution developed through a user-centered design process.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {designProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-neutral-200 hover-lift">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-anek text-neutral-800">
                    {project.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-anek text-xl">{project.title}</CardTitle>
                  <CardDescription className="font-anek">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button 
                    className="bg-neutral-800 hover:bg-neutral-700 text-white font-anek"
                    onClick={() => handleOpenProject(project)}
                  >
                    <Eye className="mr-2 h-4 w-4" /> View Project
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <ProjectDetailDialog 
            project={selectedProject}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          />
          
          <section className="mb-16">
            <h2 className="font-anek text-3xl font-bold text-neutral-800 mb-6">Design Process</h2>
            <p className="font-anek text-lg text-neutral-600 mb-8 max-w-3xl">I follow a comprehensive design process that ensures solutions are both user-centered and business-aligned. Each phase is crucial for developing effective design solutions.</p>
            
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
                    <p className="font-anek text-neutral-600">
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
