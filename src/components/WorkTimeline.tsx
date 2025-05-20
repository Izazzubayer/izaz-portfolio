
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
    period: "Apr 2025 - Present",
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
    description: "Design and optimize user-centered digital experiences by applying principles of Human-Computer Interaction. Conduct user research, develop wireframes and prototypes, and collaborate with cross-functional teams to enhance usability and accessibility across platforms. Drive improvements in interface design to ensure intuitive, efficient, and engaging user interactions."
  },
  {
    company: "Blueprint",
    role: "UX Designer",
    period: "Aug 2023 - Dec 2023",
    location: "Vancouver, British Columbia",
    description: "Supervised weekly UX research activities—including usability tests, heuristic evaluations, and A/B testing—to inform and guide Blueprint web development. Conducted in-depth prototype evaluations and delivered actionable insights to cross-functional teams. Streamlined design handoff processes to developers, increasing overall project efficiency by 35%.",

  },
  {
    company: "Apple",
    role: "Sales Specialist | Educator",
    period: "June 2022 - Jan 2023",
    location: "Vancouver, British Columbia",
    description: "Sold 100+ Apple products by delivering personalized customer experiences through effective storytelling and clear communication. Collaborated with team members to understand and exceed customer needs, contributing to a 90% satisfaction rate based on user feedback."
  },
  {
    company: "Vancouver Coastal Health",
    role: "UI/UX Designer",
    period: "Aug 2021 - May 2022",
    location: "Vancouver, British Columbia",
    description: "Led the Design Thinking strategy for a large-scale website redesign at Vancouver Coastal Health, engaging over 3,600 medical staff through comprehensive surveys (achieving a 60% response rate) and in-depth physician interviews. Synthesized qualitative and quantitative insights to identify key user needs and pain points, directly informing user-centered design decisions that aligned with clinical workflows and improved overall usability"
  }
];

interface WorkTimelineProps {
  className?: string;
}

const WorkTimeline: React.FC<WorkTimelineProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="mb-8 flex items-center">
        <div className="w-12 md:w-18 flex justify-center">
          <Briefcase className="h-6 w-6 text-neutral-800" />
        </div>
        <div className="ml-4 flex-grow">
          <h2 className="font-anek text-3xl font-bold text-neutral-800">Work Experience</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workExperienceData.map((experience, index) => (
          <Card 
            key={`${experience.company}-${index}`}
            className="hover-lift border-neutral-200"
          >
            <CardHeader className="pb-2">
              <CardTitle className="font-anek text-xl text-neutral-800">{experience.company}</CardTitle>
              <CardDescription className="font-anek text-lg text-neutral-600 flex flex-wrap items-center gap-x-2">
                <span>{experience.role}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> 
                  {experience.period}
                </span>
              </CardDescription>
              {experience.location && (
                <div className="font-anek text-neutral-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" /> 
                  {experience.location}
                </div>
              )}
            </CardHeader>
            
            <CardContent className="pt-2">
              {Array.isArray(experience.description) ? (
                <ul className="font-anek text-neutral-700 list-disc ml-5 space-y-1">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-anek text-neutral-700">{experience.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;
