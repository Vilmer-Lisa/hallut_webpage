
import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

interface SeminarProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  featured?: boolean;
}

const seminars: SeminarProps[] = [
  {
    id: 1,
    title: "Strategic Sustainability for Economic Growth",
    date: "June 15, 2023",
    time: "09:00 - 16:00",
    location: "Stockholm Business Center, Stockholm",
    description: "A comprehensive workshop on implementing sustainable business practices that drive economic growth and create competitive advantage.",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Finance: Investment Strategies",
    date: "July 22, 2023",
    time: "13:00 - 17:30",
    location: "Gothenburg Conference Hall, Gothenburg",
    description: "This seminar explores how sustainability considerations are reshaping investment decisions and capital allocation in modern markets."
  },
  {
    id: 3,
    title: "Circular Economy Business Models",
    date: "September 8, 2023",
    time: "10:00 - 15:00",
    location: "Malmö Innovation Center, Malmö",
    description: "Learn how circular economy principles can create new revenue streams while reducing costs and environmental impact."
  },
  {
    id: 4,
    title: "Economic Sustainability for SMEs",
    date: "October 12, 2023",
    time: "09:30 - 16:30",
    location: "Online (Virtual Seminar)",
    description: "A practical seminar designed specifically for small and medium-sized enterprises looking to implement sustainable practices on a limited budget."
  }
];

const SeminarCard = ({ seminar }: { seminar: SeminarProps }) => {
  return (
    <div className={`border rounded-lg overflow-hidden ${seminar.featured ? 'border-primary shadow-md' : 'border-border'}`}>
      {seminar.featured && (
        <div className="blue-gradient text-white px-4 py-1 text-sm font-medium text-center">
          Featured Seminar
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium mb-4">{seminar.title}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <span>{seminar.date}</span>
          </div>
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <span>{seminar.time}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <span>{seminar.location}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6">{seminar.description}</p>
        
        <Button className="w-full">Register Now</Button>
      </div>
    </div>
  );
};

const Seminars = () => {
  return (
    <>
      {/* Seminars Hero */}
      <section className="relative bg-secondary pt-16 pb-24">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="blue-pattern w-full h-full"></div>
        </div>
        <div className="content-wrapper">
          <SectionHeading 
            title="Upcoming Seminars & Workshops" 
            subtitle="Join us for in-depth explorations of economic sustainability principles and their practical applications."
          />
        </div>
      </section>

      {/* Featured Seminar */}
      <section className="section">
        <div className="content-wrapper">
          <h2 className="text-2xl font-serif font-medium mb-8">Featured Event</h2>
          
          <div className="max-w-3xl mx-auto">
            <SeminarCard seminar={seminars.find(s => s.featured) || seminars[0]} />
          </div>
        </div>
      </section>

      {/* All Seminars */}
      <section className="section bg-secondary">
        <div className="content-wrapper">
          <h2 className="text-2xl font-serif font-medium mb-8">All Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seminars.filter(s => !s.featured).map(seminar => (
              <SeminarCard key={seminar.id} seminar={seminar} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Workshops */}
      <section className="section blue-gradient text-white">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-6">Custom Workshops for Organizations</h2>
              <p className="text-white/80 mb-6">
                We offer tailored workshops designed specifically for your organization's unique challenges and opportunities. Our expert-led sessions provide practical guidance for implementing economic sustainability principles within your specific industry and business context.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <div>Customized content for your industry and challenges</div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <div>Interactive exercises using real data from your company</div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <div>Follow-up support to help implement key learnings</div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 mt-0.5">✓</div>
                  <div>Available for in-person or virtual delivery</div>
                </div>
              </div>
              
              <Button variant="outline" className="text-white border-white/50 hover:bg-white/10">Request Information</Button>
            </div>
            
            <div>
              <div className="aspect-square bg-white/10 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-serif text-3xl">Håll ut!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="content-wrapper">
          <SectionHeading title="What Past Attendees Say" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 bg-secondary rounded-lg">
              <p className="italic mb-6">
                "The workshop provided concrete tools that we've been able to implement immediately. Within three months, we've already seen a return on our investment."
              </p>
              <footer className="font-medium">
                — Sustainability Director, Manufacturing Company
              </footer>
            </blockquote>
            
            <blockquote className="p-6 bg-secondary rounded-lg">
              <p className="italic mb-6">
                "The practical approach sets these seminars apart from others. Instead of just theory, we walked away with a customized action plan for our business."
              </p>
              <footer className="font-medium">
                — CFO, Retail Corporation
              </footer>
            </blockquote>
            
            <blockquote className="p-6 bg-secondary rounded-lg">
              <p className="italic mb-6">
                "As a small business owner, I was skeptical about whether sustainability could work for us economically. This seminar changed my perspective entirely."
              </p>
              <footer className="font-medium">
                — Owner, Local Service Business
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seminars;
