
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import WorkTimeline from './WorkTimeline';

const Companies = () => {
  return (
    <section id="companies" className="py-24 px-6 md:px-12 bg-neutral-50">
      <div className="container mx-auto max-w-7xl">
        <WorkTimeline className="mb-12" />
        
        <div className="mt-12 text-center">
          <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-anek" asChild>
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
