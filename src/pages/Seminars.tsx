
import React from "react";
import { Calendar, MapPin, Clock, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";

interface SeminarProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  capacity: string;
  description: string;
  topics: string[];
  featured?: boolean;
}

const seminars: SeminarProps[] = [
  {
    id: 1,
    title: "Strategic Sustainability for Economic Growth",
    date: "June 15, 2023",
    time: "09:00 - 16:00",
    location: "Stockholm Business Center, Stockholm",
    price: "€495",
    capacity: "50 participants",
    description: "A comprehensive workshop on implementing sustainable business practices that drive economic growth and create competitive advantage.",
    topics: [
      "How to develop economic models that incorporate sustainability",
      "Measuring the ROI of sustainability initiatives",
      "Strategies for communicating economic sustainability to stakeholders",
      "Case studies from industry-leading organizations"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Finance: Investment Strategies",
    date: "July 22, 2023",
    time: "13:00 - 17:30",
    location: "Gothenburg Conference Hall, Gothenburg",
    price: "€295",
    capacity: "75 participants",
    description: "This seminar explores how sustainability considerations are reshaping investment decisions and capital allocation in modern markets.",
    topics: [
      "ESG integration in investment analyses",
      "Valuation models for sustainable businesses",
      "Risk assessment frameworks for climate-related financial risks",
      "Green bonds and sustainable finance instruments"
    ]
  },
  {
    id: 3,
    title: "Circular Economy Business Models",
    date: "September 8, 2023",
    time: "10:00 - 15:00",
    location: "Malmö Innovation Center, Malmö",
    price: "€395",
    capacity: "40 participants",
    description: "Learn how circular economy principles can create new revenue streams while reducing costs and environmental impact.",
    topics: [
      "Designing products for circularity",
      "Establishing reverse logistics systems",
      "Creating value from waste streams",
      "Building customer loyalty through circular offerings"
    ]
  },
  {
    id: 4,
    title: "Economic Sustainability for SMEs",
    date: "October 12, 2023",
    time: "09:30 - 16:30",
    location: "Online (Virtual Seminar)",
    price: "€195",
    capacity: "Unlimited",
    description: "A practical seminar designed specifically for small and medium-sized enterprises looking to implement sustainable practices on a limited budget.",
    topics: [
      "Low-cost sustainability initiatives with high ROI",
      "Accessing grants and funding for sustainability projects",
      "Collaborative approaches to sustainability for small businesses",
      "Marketing sustainability to build customer loyalty"
    ]
  }
];

const SeminarCard = ({ seminar }: { seminar: SeminarProps }) => {
  return (
    <div className={`border rounded-lg overflow-hidden ${seminar.featured ? 'border-primary shadow-md' : 'border-sage-100'}`}>
      {seminar.featured && (
        <div className="bg-primary text-white px-4 py-1 text-sm font-medium text-center">
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
          <div className="flex items-start">
            <DollarSign className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <span>{seminar.price}</span>
          </div>
          <div className="flex items-start">
            <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <span>{seminar.capacity}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6">{seminar.description}</p>
        
        <div className="mb-6">
          <h4 className="font-medium mb-3">What You'll Learn:</h4>
          <ul className="space-y-2">
            {seminar.topics.map((topic, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button className="w-full">Register Now</Button>
      </div>
    </div>
  );
};

const Seminars = () => {
  return (
    <>
      {/* Seminars Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
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
      <section className="section">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-6">Custom Workshops for Organizations</h2>
              <p className="text-muted-foreground mb-6">
                We offer tailored workshops designed specifically for your organization's unique challenges and opportunities. Our expert-led sessions provide practical guidance for implementing economic sustainability principles within your specific industry and business context.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                  <div>Customized content for your industry and challenges</div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                  <div>Interactive exercises using real data from your company</div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                  <div>Follow-up support to help implement key learnings</div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                  <div>Available for in-person or virtual delivery</div>
                </div>
              </div>
              
              <Button>Request Information</Button>
            </div>
            
            <div>
              <div className="aspect-square bg-sage-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-sage-50">
        <div className="content-wrapper">
          <SectionHeading title="What Past Attendees Say" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 bg-white rounded-lg shadow-sm">
              <p className="italic mb-6">
                "The workshop provided concrete tools that we've been able to implement immediately. Within three months, we've already seen a return on our investment."
              </p>
              <footer className="font-medium">
                — Sustainability Director, Manufacturing Company
              </footer>
            </blockquote>
            
            <blockquote className="p-6 bg-white rounded-lg shadow-sm">
              <p className="italic mb-6">
                "The practical approach sets these seminars apart from others. Instead of just theory, we walked away with a customized action plan for our business."
              </p>
              <footer className="font-medium">
                — CFO, Retail Corporation
              </footer>
            </blockquote>
            
            <blockquote className="p-6 bg-white rounded-lg shadow-sm">
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

      {/* Call to Action */}
      <section className="section bg-sage-900 text-white">
        <CallToAction 
          title="Ready to enhance your sustainability knowledge?"
          description="Register for one of our upcoming seminars or contact us to discuss custom workshops for your organization."
          buttonText="View All Events"
          buttonLink="/seminars"
          variant="outline"
          className="text-white"
        />
      </section>
    </>
  );
};

export default Seminars;
