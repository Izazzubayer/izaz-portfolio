
import React from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of UX: AI-Driven Design Systems",
    date: "April 10, 2023",
    readTime: "6 min read",
    excerpt: "Exploring how artificial intelligence is transforming design systems and empowering designers to create more user-centered experiences.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Designing for Accessibility: Beyond Compliance",
    date: "March 15, 2023",
    readTime: "8 min read",
    excerpt: "Why accessibility should be a core part of the design process, not just a checkbox for compliance, and how it benefits all users.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "The Psychology of Color in Digital Interfaces",
    date: "February 28, 2023",
    readTime: "5 min read",
    excerpt: "How color choices impact user perception, emotions, and behavior, with practical guidelines for effective color use in interfaces.",
    image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=600&auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Bridging the Gap: Design and Development Collaboration",
    date: "January 12, 2023",
    readTime: "7 min read",
    excerpt: "Strategies for improving collaboration between designers and developers to create more cohesive and efficient product development cycles.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "The Role of User Research in Product Strategy",
    date: "December 5, 2022",
    readTime: "9 min read",
    excerpt: "How integrating user research into product strategy leads to more successful products and stronger market positions.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Minimalism in UX: Less is More",
    date: "November 18, 2022",
    readTime: "4 min read",
    excerpt: "The principles of minimalist design and how they can improve usability, focus, and overall user experience.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80",
    link: "#"
  }
];

const Thoughts = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-anek text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Thoughts & Articles</h1>
          <p className="font-sofia text-lg text-neutral-600 mb-12 max-w-3xl">Sharing insights, observations, and perspectives on design, technology, and user experience. These articles reflect my ongoing learning and exploration in the field.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden border border-neutral-200 hover-lift h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <div className="flex items-center text-sm text-neutral-500 mb-2 font-sofia">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="font-anek text-xl">{post.title}</CardTitle>
                  <CardDescription className="font-sofia mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="font-sofia text-neutral-800 p-0 hover:bg-transparent hover:text-neutral-600" asChild>
                    <a href={post.link} className="flex items-center">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <section className="text-center mb-16">
            <h2 className="font-anek text-3xl font-bold text-neutral-800 mb-4">Stay Updated</h2>
            <p className="font-sofia text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">Subscribe to receive notifications when I publish new articles and insights.</p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-md font-sofia focus:outline-none focus:ring-2 focus:ring-neutral-800"
              />
              <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-sofia">
                Subscribe
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <BackToTop />
    </div>
  );
};

export default Thoughts;
