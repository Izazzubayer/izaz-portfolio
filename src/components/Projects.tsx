
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
    title: "Puffy Homepage Redesign",
    category: "UX/UI Design",
    image: "https://cdn.mos.cms.futurecdn.net/WKjRtitgr8o86Z5JvcfxSe.jpg",
    description: "For this project, I was given the opportunity to redesign the Product Detail Page for Puffy.com, focusing on both mobile and desktop versions. My challenge was to address the common user pain point of feeling overwhelmed when choosing a mattress and to present Puffy as a luxury brand. I aimed to simplify the selection process while emphasizing the premium quality of Puffy's products. By leveraging design assets, analyzing competitor strategies, and adhering to best practices, I created a user-centred design that enhances the overall user experience and drives higher conversion rates.",
    link: "#",
    client: "Puffy",
    role: "UI UX Designer",
    team: ["Solo Project"],
    timeline: "1 Week",
    tools: ["Figma", "Miro", "UserTesting"],
    objective: "The goal was to redesign the Product Detail Page for both mobile and desktop versions, focusing on simplifying the mattress selection process and showcasing Puffy's premium quality. The redesign aimed to increase conversion rates and reflect Puffy as the ultimate luxury brand.",
    context: "I was tasked to find the challenges of addressing users getting overwhelmed by mattress selection while ensuring the design highlighted Puffy's luxurious appeal. The task involved using existing assets and drawing inspiration from competitors to create a tailored design for the US market audience.",
    painPoints: ["Complex Hompage layout", "Confusing userflow", "Overwhelming colors and movement of photos"],
    businessGoals: "Increase user retention by 20% and boost daily active users",
    researchMethods: ["In tackling the UI Design task for Puffy, the first phase of the design process—Research and Define—was critical in setting the foundation for a user-centered solution. Following a structured design system approach, I began by conducting both primary and secondary research to deeply understand the users and their pain points, leveraging insights from psychology and principles of everyday design. The research included demographic analysis and competitor benchmarking, which allowed me to define the problem with clarity and precision.", "I examined Puffy’s consumer base, which predominantly consists of middle to upper-income homeowners aged 30 to 50, alongside secondary insights indicating a larger user group between 25 and 34 years old. These users, with a balanced gender distribution (51% female, 48% male), prioritize long-term comfort and premium quality when investing in products like mattresses. This demographic insight helped me define the user's cognitive needs—specifically, the tendency to feel overwhelmed when presented with too much information, a phenomenon known as cognitive overload.", "To address this, I studied how successful competitors like Saatva and Dream Cloud Sleep utilize design to create seamless customer experiences. Competitor research revealed that clean, minimalistic designs with well-structured information architecture contribute significantly to user confidence and decision-making, aligning with cognitive load theory. I also investigated user behaviour through tools like session replays, heatmaps, and analytics to understand key pain points, particularly around the decision fatigue caused by overwhelming information on the page."],
    defineMethods: ["Chooooot"],
    keyInsights: ["Users preferred simplified views for daily tasks", "Authentication flow needed streamlining"],
    process: "Started with user research, created wireframes, developed interactive prototypes, and conducted iterative testing",
    testingResults: "90% of test users completed key tasks successfully compared to 65% with the old design",
    impact: "Increased user retention by 25% and reduced exiting tab by 40%"
  },
  {
    id: 2,
    title: "SFU Snap App",
    category: "User Research & Design",
    image: "https://www.sfu.ca/content/sfu/carnegie/about/institutions/simon-fraser-university/jcr:content/main_content/image_8.img.640.medium.png/1550784829633.png",
    description: "While pursuing my undergraduate studies at Simon Fraser University, I recognized an opportunity to enhance the user experience of the SFU Snap App. This ambition led me to embark on a comprehensive redesign endeavor, encompassing a complete overhaul of the app's user interface, information architecture, and overall user flow. To ensure the success of this project, I diligently conducted surveys and engaged in thorough user research. This process afforded me invaluable insights into the specific needs and preferences of the student body, enabling me to streamline and simplify the user experience for all.",
    link: "#",
    client: "Simon Fraser University",
    role: "UX Researcher & Designer",
    team: ["Solo"],
    timeline: "4-6 months",
    tools: ["Figma", "Miro", "Microsoft Word"],
    objective: "Make the app user-friendly by fixing the design components and improving usability. Improve user experience and retention by finding user pain points via UX research methods.",
    context: "SFU Snap App has existed for a long time, and I saw this as an opportunity to revamp the looks and feel so that the app can become an integral part of Simon Fraser University students’ life. After using it I figured out that the entire app infrastructure and user interface can be redesigned and improved to enhance students experience.",
    painPoints: ["The app keeps on logging out", "It crashes a lot", "Unreliable design", "Bad information architecture and user flow"],
    researchMethods: ["A/B testing", "User expereince walkthrough", "Interviews"],
    keyInsights: ["Users couldn't navigate to their preferred tab", "They couldn't successfully do what they intended to do", "Design was confusing", "Redundant options"],
    process: "Analyzed user behavior data, redesigned critical user journeys, and implemented an optimized flow",
    testingResults: "Reduced average navigation time from 2 minutes to 28 seconds",
    impact: "Increased conversion rate by 24% and reduced exiting of app by 30%"
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
