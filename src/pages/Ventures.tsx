
import React from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const ventures = [
  {
    id: 1,
    title: "Pixel Mango",
    role: "Founder",
    period: "April 2025 - Present",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=80",
    description: "Bridging the gap between small business needs and world-class design. Offering services such as Rebranding, Website design and development, Printing cards and logos, Product photography and more.",
    problem: "Small businesses often struggle to access professional design services due to budget constraints.",
    link: "#"
  },
  {
    id: 2,
    title: "Beige + Blue",
    role: "Founder",
    period: "Nov 2024 - Present",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80",
    description: "Founded a men's polo shirt brand, Conducted market and consumer research to attract the target niche, curating marketing strategies through primary and secondary research methods.",
    problem: "The men's fashion market lacked affordable quality polo shirts with modern design aesthetics.",
    link: "#"
  },
  {
    id: 3,
    title: "The Kow Company",
    role: "HCI Specialist",
    period: "Sept 2024 - Present",
    location: "",
    image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=80",
    description: "Design and optimize user-centered digital experiences by applying principles of Human-Computer Interaction. Conduct user research, develop wireframes and prototypes, and collaborate with cross-functional teams to enhance usability and accessibility across platforms. Drive improvements in interface design to ensure intuitive, efficient, and engaging user interactions.",
    problem: "Enterprise applications often suffer from poor user experience, reducing productivity and satisfaction.",
    link: "#"
  },
  {
    id: 4,
    title: "Blueprint",
    role: "UX Designer",
    period: "Aug 2022 - Present",
    location: "Vancouver, British Columbia",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=80",
    description: "Supervised weekly UX research (usability tests, heuristic evaluations, A/B testing) and prototype evaluations, reporting findings to drive Blueprint web development. Streamlined design handoffs to developers, improving project efficiency by 35%.",
    problem: "Inefficient design-to-development handoff processes were causing delays and miscommunications.",
    link: "#"
  },
  {
    id: 5,
    title: "Vancouver Coastal Health",
    role: "UI UX Designer",
    period: "Aug 2022 - Present",
    location: "Vancouver, British Columbia",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
    description: "Led Design Thinking strategy, engaging 3,600 medical staff via surveys (60% response rate) and targeted physician interviews to inform website redesign.",
    problem: "Healthcare professionals needed a more efficient digital platform to access critical information.",
    link: "#"
  },
];

const Ventures = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-anek text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Ventures</h1>
          <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-3xl">A showcase of my entrepreneurial projects and professional roles. These ventures represent my passion for solving real-world problems through design and innovation.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ventures.map((venture) => (
              <Card key={venture.id} className="overflow-hidden border border-neutral-200 hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={venture.image} 
                    alt={venture.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-sofia text-neutral-800">
                    {venture.role}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-anek text-xl">{venture.title}</CardTitle>
                    <div className="text-sm font-sofia text-neutral-500">{venture.period}</div>
                  </div>
                  {venture.location && (
                    <div className="text-sm font-sofia text-neutral-500">{venture.location}</div>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-sofia text-neutral-600">{venture.description}</p>
                  </div>
                  <div>
                    <h4 className="font-anek text-sm font-semibold text-neutral-800 mb-1">Problem Addressed:</h4>
                    <p className="font-sofia text-sm text-neutral-600">{venture.problem}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia w-full" asChild>
                    <a href={venture.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <BackToTop />
    </div>
  );
};

export default Ventures;
