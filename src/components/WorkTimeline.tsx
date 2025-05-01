
import React, { useEffect, useRef, useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Calendar, Briefcase, MapPin } from 'lucide-react';

type WorkExperience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string | string[];
};

const workExperienceData: WorkExperience[] = [
  {
    company: "Pixel Mango",
    role: "Founder",
    period: "April 2025 - Present",
    location: "Dhaka, Bangladesh",
    description: "Bridging the gap between small business needs and world-class design. Offering services such as Rebranding, Website design and development, Printing cards and logos, Product photography and more."
  },
  {
    company: "Beige + Blue",
    role: "Founder",
    period: "Nov 2024 - Present",
    location: "Dhaka, Bangladesh",
    description: "Founded a men's polo shirt brand, Conducted market and consumer research to attract the target niche, curating marketing strategies through primary and secondary research methods."
  },
  {
    company: "The Kow Company",
    role: "HCI Specialist",
    period: "Sept 2024 - Present",
    description: "Lead UX research and interaction design for enterprise applications focusing on user-centered solutions."
  },
  {
    company: "Blueprint",
    role: "UX Designer",
    period: "Aug 2022 - Present",
    location: "Vancouver, British Columbia",
    description: [
      "Supervised weekly UX research (usability tests, heuristic evaluations, A/B testing) and prototype evaluations, reporting findings to drive Blueprint web development.",
      "Streamlined design handoffs to developers, improving project efficiency by 35%"
    ]
  },
  {
    company: "Vancouver Coastal Health",
    role: "UI UX Designer",
    period: "Aug 2022 - Present",
    location: "Vancouver, British Columbia",
    description: "Led Design Thinking strategy, engaging 3,600 medical staff via surveys (60% response rate) and targeted physician interviews to inform website redesign."
  }
];

interface WorkTimelineProps {
  className?: string;
}

const WorkTimeline: React.FC<WorkTimelineProps> = ({ className }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const { top, height } = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline is in view
      const visibleHeight = Math.min(windowHeight, top + height) - Math.max(0, top);
      const visibleRatio = Math.max(0, Math.min(1, visibleHeight / height));
      
      // Calculate scroll progress based on how much we've scrolled through the timeline
      // Start when the top of the element enters the viewport (top <= windowHeight)
      // End when the bottom of the element exits the viewport (top + height <= 0)
      const scrollPosition = 1 - (top / (windowHeight + height));
      const progress = Math.max(0, Math.min(100, scrollPosition * 100));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={timelineRef} className={`relative ${className}`}>
      {/* Progress Bar */}
      <div className="absolute left-6 md:left-9 top-0 bottom-0 w-0.5 bg-neutral-200">
        <div 
          className="absolute top-0 left-0 w-full bg-neutral-800 transition-all duration-200"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Progress Indicator */}
      <div className="mb-8 flex items-center">
        <div className="w-12 md:w-18 flex justify-center">
          <Briefcase className="h-6 w-6 text-neutral-800" />
        </div>
        <div className="ml-4 flex-grow">
          <h2 className="font-anek text-3xl font-bold text-neutral-800">Work Experience</h2>
          <Progress value={scrollProgress} className="h-2 w-full mt-2" />
        </div>
      </div>
      
      {/* Timeline Items */}
      <div className="space-y-10 md:space-y-16">
        {workExperienceData.map((experience, index) => (
          <div 
            key={`${experience.company}-${index}`}
            className="relative ml-12 md:ml-18 pl-8 animate-fade-in"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            {/* Circle on timeline */}
            <div className="absolute left-[-2.5rem] md:left-[-3.5rem] top-0 w-4 h-4 rounded-full bg-neutral-800 border-4 border-white"></div>
            
            <h3 className="font-anek text-xl font-semibold text-neutral-800">{experience.company}</h3>
            <p className="font-anek text-lg text-neutral-600 flex flex-wrap items-center gap-x-2 mb-1">
              <span>{experience.role}</span> 
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> 
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> 
                {experience.period}
              </span>
            </p>
            
            {experience.location && (
              <p className="font-anek text-neutral-600 mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> 
                {experience.location}
              </p>
            )}
            
            {Array.isArray(experience.description) ? (
              <ul className="font-anek text-neutral-700 list-disc ml-5 space-y-1">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="font-anek text-neutral-700">{experience.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;
