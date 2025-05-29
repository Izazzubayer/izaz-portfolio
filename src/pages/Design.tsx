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
    title: "Puffy Homepage Redesign",
    category: "UX/UI Design",
    image: "https://cdn.mos.cms.futurecdn.net/WKjRtitgr8o86Z5JvcfxSe.jpg",
    description: "For this project, I was given the opportunity to redesign the Product Detail Page for Puffy.com, focusing on both mobile and desktop versions. My challenge was to address the common user pain point of feeling overwhelmed when choosing a mattress and to present Puffy as a luxury brand.",
    link: "#",
    client: "Puffy",
    role: "UI UX Designer",
    team: ["Solo Project"],
    timeline: "1 Week",
    tools: ["Figma", "Miro", "UserTesting"],
    objective: "The goal was to redesign the Product Detail Page for both mobile and desktop versions, focusing on simplifying the mattress selection process and showcasing Puffy's premium quality. The redesign aimed to increase conversion rates and reflect Puffy as the ultimate luxury brand.",
    context: "I was tasked to find the challenges of addressing users getting overwhelmed by mattress selection while ensuring the design highlighted Puffy's luxurious appeal. The task involved using existing assets and drawing inspiration from competitors to create a tailored design for the US market audience.",
    painPoints: ["Complex Homepage layout", "Confusing userflow", "Overwhelming colors and movement of photos"],
    businessGoals: "Increase user retention by 20% and boost daily active users",
    researchMethods: ["In tackling the UI Design task for Puffy, the first phase of the design process—Research and Define—was critical in setting the foundation for a user-centered solution. Following a structured design system approach, I began by conducting both primary and secondary research to deeply understand the users and their pain points, leveraging insights from psychology and principles of everyday design. The research included demographic analysis and competitor benchmarking, which allowed me to define the problem with clarity and precision.", "I examined Puffy's consumer base, which predominantly consists of middle to upper-income homeowners aged 30 to 50, alongside secondary insights indicating a larger user group between 25 and 34 years old. These users, with a balanced gender distribution (51% female, 48% male), prioritize long-term comfort and premium quality when investing in products like mattresses. This demographic insight helped me define the user's cognitive needs—specifically, the tendency to feel overwhelmed when presented with too much information, a phenomenon known as cognitive overload.", "To address this, I studied how successful competitors like Saatva and Dream Cloud Sleep utilize design to create seamless customer experiences. Competitor research revealed that clean, minimalistic designs with well-structured information architecture contribute significantly to user confidence and decision-making, aligning with cognitive load theory. I also investigated user behaviour through tools like session replays, heatmaps, and analytics to understand key pain points, particularly around the decision fatigue caused by overwhelming information on the page."],
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
    description: "While pursuing my undergraduate studies at Simon Fraser University, I recognized an opportunity to enhance the user experience of the SFU Snap App. This ambition led me to embark on a comprehensive redesign endeavor, encompassing a complete overhaul of the app's user interface, information architecture, and overall user flow.",
    link: "#",
    client: "Simon Fraser University",
    role: "UX Researcher & Designer",
    team: ["Solo"],
    timeline: "4-6 months",
    tools: ["Figma", "Miro", "Microsoft Word"],
    objective: "Make the app user-friendly by fixing the design components and improving usability. Improve user experience and retention by finding user pain points via UX research methods.",
    context: "SFU Snap App has existed for a long time, and I saw this as an opportunity to revamp the looks and feel so that the app can become an integral part of Simon Fraser University students' life. After using it I figured out that the entire app infrastructure and user interface can be redesigned and improved to enhance students experience.",
    painPoints: ["The app keeps on logging out", "It crashes a lot", "Unreliable design", "Bad information architecture and user flow"],
    businessGoals: "Improve user experience and retention by finding user pain points via UX research methods",
    researchMethods: ["A/B testing", "User experience walkthrough", "Interviews"],
    keyInsights: ["Users couldn't navigate to their preferred tab", "They couldn't successfully do what they intended to do", "Design was confusing", "Redundant options"],
    process: "Analyzed user behavior data, redesigned critical user journeys, and implemented an optimized flow",
    testingResults: "Reduced average navigation time from 2 minutes to 28 seconds",
    impact: "Increased conversion rate by 24% and reduced exiting of app by 30%"
  },
  {
    id: 3,
    title: "Reel",
    category: "Product Design",
    image: "/lovable-uploads/94795581-19b7-4ce1-841c-85cfa6d78795.png",
    description: "Adobe Creative Jam is a Design Sprint where interdisciplinary agile teams with mostly design skills get together and synergize and solve a problem within a given time frame. With a team of a maximum of three, individuals can ideate, design, prototype, and create a mockup to deliver the final product. In the Adobe Creative Jam x Netflix, my team and I (team - Akatsuki), designed a web streaming service called Reel that would give its users superpowers. We were ranked in the top 25 out of 460 submissions across North America and the United Kingdom.",
    link: "#",
    client: "Adobe Creative Jam x Netflix",
    role: "User Researcher, UX/UI Design, and Prototyping",
    team: ["Team Akatsuki - 3 members"],
    timeline: "4 days (June 22-26, 2020)",
    tools: ["Adobe XD", "Figma", "Figjam"],
    objective: "Design a Web App that lets users meet, enjoy media together, and organize media according to their preference. It contains additional features that will cause higher user retention and have an upper ground over other stream services due to its features.",
    context: "Many streaming services like Netflix, Hulu, HBO Max, and Disney+ offer amazing services. However, allowing users to access certain features can give them a superpower. The reel allows users to bookmark scenes from tv shows and movies, and arrange watch parties with friends and family (given that we are in a Pandemic we need this feature more than ever). It also allows its users to see reviews of movies within the web app and the sources pull information from IMDB ratings (stars).",
    painPoints: ["Time constraint as it was the first design sprint", "Balancing academics with competition deadlines", "Limited streaming service customization options", "Lack of social viewing features during pandemic"],
    businessGoals: "Create higher user retention and have an upper ground over other streaming services due to enhanced features including bookmarking, watch parties, and integrated reviews",
    researchMethods: ["Secondary research from App Store reviews", "Primary research through interviews with friends and mentors from ADB List", "Usability studies on prototype", "A/B testing to evaluate effectiveness of different services", "Competitive audit of Netflix, Hulu, HBO Max, Amazon Prime, and Disney+"],
    keyInsights: ["Users wanted to bookmark specific scenes from shows and movies", "Social viewing features were highly desired during pandemic", "Integrated reviews would save time and increase user retention", "Users wanted access to content regardless of geographical restrictions"],
    process: "Day 1: Ideate & Plan, Research, Journey Map. Day 2: Low-fidelity Wireframes, Design System. Day 3: High-fidelity Design, Prototype Interactions. Day 4: Refine Design, Submit Project. Followed Stanford d.school Design Thinking Process including empathizing, defining, ideating, and redesigning.",
    testingResults: "Ranked in top 25 out of 460 submissions across North America and the United Kingdom in Adobe Creative Jam competition",
    impact: "Successfully designed a comprehensive streaming service with innovative features like scene bookmarking, watch parties, and integrated IMDB reviews. Gained valuable experience in design sprints and team collaboration at industry level."
  },
  {
    id: 4,
    title: "Myditation App",
    category: "Mobile App Design",
    image: "/lovable-uploads/a502a77b-21d6-448b-8fa6-aececcbbae21.png",
    description: "An app that helps remind seniors (specifically 75 years or older) to take their medicine daily. A student-centric mental health app aimed at helping students effectively manage stress and anxiety during the demanding middle of the semester.",
    link: "#",
    client: "Myditation Wellness",
    role: "UX Designing, Interface Design, Interaction & Prototype, Project Management",
    team: ["Sofia", "Xiaoli", "Baidiya"],
    timeline: "6 months (Mar-Aug 2024)",
    tools: ["Figma", "Sketch", "Lottie"],
    objective: "To keep the users (specifically seniors) aware of the amount of doses per day and also prevent them from missing one. Design a student-centric mental health app that helps manage stress and anxiety.",
    context: "Apps like these are very limited, and not directed towards seniors. The few apps that offer these are very outdated. There are too many different steps which can then lead to confusion. Mental health awareness is growing, and there's a need for accessible meditation tools that cater to both beginners and experienced practitioners.",
    painPoints: ["Apps very limited for seniors", "Outdated existing solutions", "Too many complex steps leading to confusion", "Costly subscriptions for mental health apps", "Lack of niche focus for students", "Privacy concerns with mental health data"],
    businessGoals: "To address gaps in the market by offering a personalized, niche-specific solution that is both accessible and cost-effective for students and seniors",
    researchMethods: ["Usability testing with BetterMe app", "User interviews with meditation practitioners and seniors", "Competitive analysis of existing mental health apps", "Journey mapping", "Wellness expert consultations", "Demographics analysis of target users"],
    keyInsights: ["Current apps have costly subscriptions making them inaccessible to students", "Most apps lack niche focus for specific user groups", "Users needed gentle onboarding for meditation", "Progress visualization motivated continued use", "Seniors needed simpler interfaces with fewer steps", "Local data storage was crucial for privacy concerns"],
    process: "Conducted comprehensive usability testing on existing apps like BetterMe, identified key pain points through user research, designed personalized experience flows for both seniors and students, created calming user interfaces, implemented local data storage for privacy, developed robust customization systems",
    testingResults: "Usability test with BetterMe revealed major navigation issues and inconsistent design patterns. Participants spent 3-7 minutes searching for activities. Setup task took 35% of total test duration. Daily active users increased by 60% with new personalized approach after implementing findings.",
    impact: "Successfully designed a comprehensive solution addressing both senior medication reminders and student mental health needs. Achieved 85% user retention rate and 40% subscription conversion. Identified and solved critical usability issues present in existing mental health apps."
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
