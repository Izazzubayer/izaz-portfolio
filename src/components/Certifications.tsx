
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
    title: "Project Management Specialization",
    issuer: "Microsoft",
    date: "2024",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop",
    description: "This certification demonstrates my proficiency in project management principles, processes, and methodologies. It covers key areas such as team building, stakeholder engagement, process groups, and the application of Agile, hybrid, and predictive approaches to ensure project success.",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/QKJWL5CT24OE"
  },
  {
    id: 2,
    title: "UX Design Specialization",
    issuer: "Microsoft",
    date: "2024",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop",
    description: "Completing a professional certification outside of School helped me deepen my knowledge of user experience (UX) principles, including user research, wireframing, prototyping, visual design, and accessibility. Through self-directed learning, I have also developed a deeper understanding of how Al can enhance design creativity and efficiency, further refining my ability to deliver impactful UX solutions.",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/V4G7DUGZA7J0"
  },
  {
    id: 3,
    title: "Generative AI & LLMS",
    issuer: "Google",
    date: "2024",
    image: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp",
    description: "My knowledge extends to the fundamental principles of LLMs, including their architecture, training processes, and how they generate and interpret human-like text. I am well-versed in the various applications of LLMs, such as natural language understanding, text generation, and conversational Al. This includes exploring their use in diverse fields like customer support, content creation, and data analysis.",
    link: "https://www.coursera.org/account/accomplishments/specialization/BJX0UFHIN4YU"
  },
  {
    id: 4,
    title: "Agile with Atlassian Jira",
    issuer: "International Association of Accessibility Professionals",
    date: "2021",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbRnJ4-vn532EwjpxecGGvBAOcaa0TbpM9B_teMSS93gBxxlUj3lkio9C7UycmbEpoUU&usqp=CAU",
    description: "I recently earned a certification in Agile Project Management using Atlassian Jira through Coursera, aligning perfectly with my skillset as a generalist who thrives across multiple disciplines including design, research, coding, and management. This course deepened my understanding of agile frameworks such as Scrum and Kanban, equipping me with the skills to effectively manage cross-functional teams and projects.",
    link: "https://www.coursera.org/account/accomplishments/verify/TTILFEP41C1G"
  },
  {
    id: 5,
    title: "StormHacks Hackathon",
    issuer: "Simon Fraser University",
    date: "2023",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/321/607/datas/original.png",
    description: "My team& I secured third place out of 93 participants in the StormHacks Hackathon with our HubSFU, an app designed to improve the student experience at Simon Fraser University (SFU). As part of a dedicated team DaisySoft, I helped create a platform that addresses key challenges faced by students, providing them with a centralized hub for essential resources, event management, and academic tools.",
    link: "https://devpost.com/software/hubsfu-by-daisysoft"
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
