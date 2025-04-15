
import React, { useState, useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Certification data is a separate array to make it easier to edit
const certifications = [
  {
    id: 1,
    title: "UX Design Professional Certificate",
    issuer: "Google",
    date: "2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=80",
    description: "Completed Google's comprehensive UX design program covering all aspects of the design process.",
    link: "#"
  },
  {
    id: 2,
    title: "Interaction Design Specialist",
    issuer: "Interaction Design Foundation",
    date: "2022",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80",
    description: "Advanced certification in interaction design principles and methodologies.",
    link: "#"
  },
  {
    id: 3,
    title: "Product Management Certification",
    issuer: "Product School",
    date: "2022",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    description: "Specialized training in digital product management and development strategies.",
    link: "#"
  },
  {
    id: 4,
    title: "Web Accessibility Specialist",
    issuer: "International Association of Accessibility Professionals",
    date: "2021",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=80",
    description: "Expert certification in creating accessible digital experiences for all users.",
    link: "#"
  },
  {
    id: 5,
    title: "Design Thinking Practitioner",
    issuer: "IDEO",
    date: "2021",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&auto=format&fit=crop&q=80",
    description: "Certified in human-centered design methodology and problem-solving approaches.",
    link: "#"
  },
  {
    id: 6,
    title: "Agile Project Management",
    issuer: "Scrum Alliance",
    date: "2020",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
    description: "Certification in Agile methodologies and Scrum framework implementation.",
    link: "#"
  },
  {
    id: 7,
    title: "Frontend Development",
    issuer: "freeCodeCamp",
    date: "2020",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&auto=format&fit=crop&q=80",
    description: "Comprehensive certification in modern frontend development technologies.",
    link: "#"
  },
  {
    id: 8,
    title: "UI Animation & Motion Design",
    issuer: "Motional",
    date: "2019",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    description: "Specialized training in creating engaging UI animations and motion designs.",
    link: "#"
  },
  {
    id: 9,
    title: "Research Methods in UX",
    issuer: "Nielsen Norman Group",
    date: "2019",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop&q=80",
    description: "Advanced certification in UX research methodologies and user testing.",
    link: "#"
  }
];

const Certifications = () => {
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = window.setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector('[aria-label="Next slide"]');
        if (nextButton && autoplay) {
          (nextButton as HTMLButtonElement).click();
        }
      }
    }, 3000);
  };

  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay]);

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-neutral-100/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-anek text-3xl md:text-4xl font-bold text-neutral-800 mb-4 animate-fade-in">Certifications</h2>
        <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-2xl animate-fade-in">My professional certifications that have helped me build expertise in UX design, development, and project management.</p>
        
        <div 
          ref={carouselRef}
          className="relative mx-auto" 
          onMouseEnter={() => setAutoplay(false)} 
          onMouseLeave={() => setAutoplay(true)}
        >
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {certifications.map((cert) => (
                <CarouselItem key={cert.id} className="pl-4 md:basis-1/3 lg:basis-1/3">
                  <div className="p-4">
                    <div className="overflow-hidden rounded-lg bg-white shadow-sm border border-neutral-200 cert-card group">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-48 object-cover transition-transform duration-500 cert-image"
                        />
                        <div className="absolute inset-0 bg-neutral-800/0 transition-colors duration-300 group-hover:bg-neutral-800/20"></div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-anek text-xl font-semibold mb-1 text-neutral-800">{cert.title}</h3>
                        <p className="text-neutral-600 text-sm mb-2 font-sofia">{cert.issuer} • {cert.date}</p>
                        <p className="text-neutral-700 text-sm mb-4 font-sofia">{cert.description}</p>
                        <Button variant="outline" size="sm" className="w-full font-sofia text-neutral-800 border-neutral-300" asChild>
                          <a href={cert.link}>
                            <Award className="mr-2 h-4 w-4" /> View Certification
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-800" />
            <CarouselNext className="right-0 bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-800" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
