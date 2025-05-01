
import React from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of UX: AI-Driven Design Systems",
    date: "April 10, 2023",
    readTime: "6 min read",
    excerpt: "Exploring how artificial intelligence is transforming design systems and empowering designers to create more user-centered experiences.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
    content: `
      <h2>The Evolution of Design Systems</h2>
      <p>Design systems have become essential tools for creating consistent, scalable, and efficient digital products. As these systems mature, artificial intelligence is beginning to play a pivotal role in their evolution, transforming how designers approach their work.</p>
      
      <h2>AI's Impact on Design Systems</h2>
      <p>AI-powered tools are now capable of generating UI components, suggesting design improvements, and even adapting interfaces in real-time based on user behavior. This paradigm shift is creating more dynamic, personalized experiences while freeing designers to focus on higher-level creative challenges.</p>
      
      <h2>Benefits for Designers and Users</h2>
      <p>For designers, AI integration means increased productivity, elimination of repetitive tasks, and access to data-driven insights that would be impossible to generate manually. For users, the outcomes include more intuitive interfaces, personalized experiences, and products that seem to anticipate their needs.</p>
      
      <h2>The Future Landscape</h2>
      <p>Looking ahead, we can expect AI to become an indispensable design partner rather than a replacement for human creativity. The most successful design systems will be those that effectively balance algorithmic efficiency with human empathy and creative vision.</p>
      
      <h2>Conclusion</h2>
      <p>As AI continues to evolve, its integration into design systems represents one of the most significant shifts in the field since the advent of responsive design. Designers who embrace these tools while maintaining their creative vision will be well-positioned to create truly remarkable user experiences.</p>
    `
  },
  {
    id: 2,
    title: "Designing for Accessibility: Beyond Compliance",
    date: "March 15, 2023",
    readTime: "8 min read",
    excerpt: "Why accessibility should be a core part of the design process, not just a checkbox for compliance, and how it benefits all users.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&auto=format&fit=crop&q=80",
    content: `
      <h2>Accessibility as a Design Principle</h2>
      <p>True accessibility goes beyond checking boxes for legal compliance. When approached as a fundamental design principle, accessibility becomes a catalyst for innovation and improved user experiences for everyone, not just those with disabilities.</p>
      
      <h2>The Business Case</h2>
      <p>Beyond ethical considerations, accessible design makes strong business sense. Accessible products reach larger audiences, improve SEO, drive innovation, and reduce legal risks. Companies that prioritize accessibility often see higher customer satisfaction and loyalty.</p>
      
      <h2>Practical Approaches</h2>
      <p>Integrating accessibility from the beginning of the design process yields better results than retrofitting later. This means considering diverse user needs during research, wireframing with accessibility in mind, and testing with users who have various abilities.</p>
      
      <h2>Common Misconceptions</h2>
      <p>Many designers fear that accessible design means compromising aesthetics or adding complexity. In reality, accessibility constraints often lead to cleaner, more intuitive interfaces that benefit all users, not just those with disabilities.</p>
      
      <h2>Looking Forward</h2>
      <p>As digital products become increasingly central to daily life, accessibility will only grow in importance. The most successful designers will be those who see accessibility not as a burden but as an opportunity to create more inclusive, innovative, and elegant solutions.</p>
    `
  },
  {
    id: 3,
    title: "The Psychology of Color in Digital Interfaces",
    date: "February 28, 2023",
    readTime: "5 min read",
    excerpt: "How color choices impact user perception, emotions, and behavior, with practical guidelines for effective color use in interfaces.",
    image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=600&auto=format&fit=crop&q=80",
    content: `
      <h2>The Science Behind Color Perception</h2>
      <p>Color perception is both physiological and psychological, with deep connections to our emotions, memories, and cultural contexts. In digital interfaces, colors serve not just aesthetic purposes but functional ones, guiding attention and conveying meaning.</p>
      
      <h2>Emotional Impact of Colors</h2>
      <p>Each color evokes distinct emotional responses, though these can vary across cultures. Blue tends to convey trust and stability, which explains its prevalence in corporate and financial applications. Red attracts attention and creates urgency, while green suggests growth and positivity.</p>
      
      <h2>Color in User Navigation</h2>
      <p>Strategic color use helps users navigate interfaces by establishing visual hierarchies and drawing attention to key actions. Color consistency builds familiarity, while controlled contrast ensures users can easily distinguish between elements and understand their relationships.</p>
      
      <h2>Accessibility Considerations</h2>
      <p>Effective color design must account for the 8% of men and 0.5% of women with color vision deficiencies. This means never relying on color alone to convey critical information and maintaining sufficient contrast ratios between text and backgrounds.</p>
      
      <h2>Practical Guidelines</h2>
      <p>Start with a purposeful, limited color palette aligned with your brand and user needs. Use color consistently to reinforce meaning, test your choices with diverse users, and always ensure sufficient contrast for readability.</p>
    `
  },
  {
    id: 4,
    title: "Bridging the Gap: Design and Development Collaboration",
    date: "January 12, 2023",
    readTime: "7 min read",
    excerpt: "Strategies for improving collaboration between designers and developers to create more cohesive and efficient product development cycles.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
    content: `
      <h2>The Traditional Disconnect</h2>
      <p>Historically, designers and developers have worked in silos, with designers creating "pixel-perfect" mockups and developers trying to implement them within technical constraints. This workflow often leads to frustration, rework, and compromised user experiences.</p>
      
      <h2>Early Collaboration</h2>
      <p>The most successful teams involve developers in the design process from the beginning. This ensures technical feasibility is considered during ideation and prevents the creation of designs that are impractical or impossible to implement efficiently.</p>
      
      <h2>Shared Language and Tools</h2>
      <p>Creating a common vocabulary and using tools that facilitate collaboration can dramatically improve outcomes. Design systems serve as a single source of truth, while prototyping tools with code export capabilities help bridge the gap between design and implementation.</p>
      
      <h2>Cross-Disciplinary Understanding</h2>
      <p>Designers benefit from basic coding knowledge, while developers gain from understanding design principles. This mutual understanding builds empathy and enables more productive conversations about tradeoffs and possibilities.</p>
      
      <h2>Iterative Process</h2>
      <p>Replacing the linear handoff model with continuous collaboration throughout the development cycle allows teams to adjust to technical realities and user feedback in real-time, resulting in better products and more efficient workflows.</p>
    `
  },
  {
    id: 5,
    title: "The Role of User Research in Product Strategy",
    date: "December 5, 2022",
    readTime: "9 min read",
    excerpt: "How integrating user research into product strategy leads to more successful products and stronger market positions.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&auto=format&fit=crop&q=80",
    content: `
      <h2>From Assumptions to Insights</h2>
      <p>Too many products are built on assumptions about user needs rather than actual evidence. Integrating user research into product strategy replaces guesswork with meaningful insights that guide decisions across all stages of product development.</p>
      
      <h2>Types of Research for Strategic Decisions</h2>
      <p>Different research methods serve various strategic needs. Exploratory research uncovers opportunities and pain points, concept testing validates ideas before significant investment, and evaluative research refines existing products to better meet user needs.</p>
      
      <h2>Quantitative and Qualitative Balance</h2>
      <p>The most robust product strategies emerge from combining quantitative data (what users do) with qualitative insights (why they do it). Analytics reveal patterns in user behavior, while interviews and usability testing provide the crucial context for those behaviors.</p>
      
      <h2>Research as a Continuous Process</h2>
      <p>Rather than conducting research only at the beginning of a project, successful organizations integrate it throughout the product lifecycle. This ongoing approach allows for continuous refinement based on changing user needs and market conditions.</p>
      
      <h2>Communicating Research Effectively</h2>
      <p>Even the best research has limited impact if stakeholders don't understand or believe the findings. Effective communication of research insights—through storytelling, visualization, and connection to business outcomes—is essential for ensuring research actually influences strategic decisions.</p>
    `
  },
  {
    id: 6,
    title: "Minimalism in UX: Less is More",
    date: "November 18, 2022",
    readTime: "4 min read",
    excerpt: "The principles of minimalist design and how they can improve usability, focus, and overall user experience.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80",
    content: `
      <h2>The Power of Reduction</h2>
      <p>Minimalism in UX is not about making interfaces empty or aesthetically sparse—it's about intentionally reducing elements to only those that serve a clear purpose. This focused approach guides users through experiences with less cognitive load and greater clarity.</p>
      
      <h2>Core Principles</h2>
      <p>Effective minimalist design removes unnecessary elements, emphasizes hierarchy through careful visual weight distribution, leverages negative space to improve comprehension, and uses subtle visual cues rather than explicit instructions whenever possible.</p>
      
      <h2>Common Misconceptions</h2>
      <p>Minimalism doesn't mean hiding necessary functionality or sacrificing clarity for aesthetics. The goal is simplification rather than reduction at all costs—every element should earn its place by serving a clear user need.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Begin with clear user goals and work backward to determine essential elements. Progressive disclosure can hide complexity until needed, while careful typography and deliberate color choices can create visual hierarchy without additional elements.</p>
      
      <h2>Measuring Success</h2>
      <p>The success of minimalist interfaces should be measured by usability metrics rather than visual simplicity alone. Reduced time to completion, higher success rates, and improved user satisfaction indicate truly effective minimalist design.</p>
    `
  }
];

const Thoughts = () => {
  const [selectedPost, setSelectedPost] = React.useState(null);

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
                  <Button 
                    variant="ghost" 
                    className="font-sofia text-neutral-800 p-0 hover:bg-transparent hover:text-neutral-600"
                    onClick={() => setSelectedPost(post)}
                  >
                    <span className="flex items-center">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
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
      
      <Dialog open={selectedPost !== null} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="flex items-center text-sm text-neutral-500 mb-2 font-sofia">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{selectedPost.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <DialogTitle className="font-anek text-2xl md:text-3xl">{selectedPost.title}</DialogTitle>
                <DialogDescription className="font-sofia">{selectedPost.excerpt}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 mb-6">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-60 object-cover rounded-md"
                />
              </div>
              <div 
                className="font-sofia prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h3 className="font-anek font-semibold text-lg mb-2">Share this article</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">Facebook</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <BackToTop />
    </div>
  );
};

export default Thoughts;
