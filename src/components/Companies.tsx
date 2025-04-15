
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const companyList = [
  {
    name: "The Kow Company LTD",
    role: "HCI Specialist",
    period: "2024 - Present",
    description: "Lead UX research and interaction design for enterprise applications focusing on user-centered solutions."
  },
  {
    name: "Beige + Blue",
    role: "Founder",
    period: "2024 - Present",
    description: "Founded and led a design and development studio specializing in creating digital experiences for innovative brands."
  },
  {
    name: "Vancouver Coastal Health",
    role: "User Experience Designer",
    period: "2021 - 2022",
    description: "Designed digital healthcare solutions and interfaces to improve patient experience and clinical workflows."
  }
];

const Companies = () => {
  return (
    <section id="companies" className="py-24 px-6 md:px-12 bg-neutral-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-anek text-3xl md:text-4xl font-bold text-neutral-800 mb-4 animate-fade-in">Work Experience</h2>
        <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-2xl animate-fade-in">Over the years, I've had the privilege of working with diverse teams across several innovative companies.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyList.map((company, index) => (
            <div 
              key={company.name}
              className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 hover-lift"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <h3 className="font-anek text-xl font-semibold text-neutral-800 mb-1">{company.name}</h3>
              <p className="font-sofia text-neutral-600 mb-4">{company.role} • {company.period}</p>
              <p className="font-sofia text-neutral-700 mb-6">{company.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia" asChild>
            <a href="https://www.linkedin.com/in/izazzubayer/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Companies;
