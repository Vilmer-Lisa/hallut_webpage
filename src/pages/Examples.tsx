
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import HArticle from '../strapi-components/HistoricalArticle';

const Examples = () => {
  const caseStudies = [
    {
      id: 1,
      company: "Nordic Green Logistics",
      title: "Transforming Supply Chain Economics",
      excerpt: "How a logistics company reduced costs by 30% while cutting carbon emissions through investment in sustainable technologies.",
      results: [
        "30% cost reduction over 5 years",
        "45% decrease in carbon emissions",
        "20% improvement in customer satisfaction scores"
      ]
    },
    {
      id: 2,
      company: "EcoTech Solutions",
      title: "Circular Economy as a Profit Driver",
      excerpt: "A technology manufacturer's journey to implementing circular design principles that created new revenue streams and reduced waste costs.",
      results: [
        "15% increase in profit margins",
        "85% waste reduction",
        "Created three new product lines from recovered materials"
      ]
    },
    {
      id: 3,
      company: "Global Retail Group",
      title: "Sustainable Store Operations",
      excerpt: "Implementing energy-efficient technologies and sustainable store design that improved both environmental impact and operational costs.",
      results: [
        "€2.5M annual energy savings",
        "12% reduction in maintenance costs",
        "Customer dwell time increased by 18%"
      ]
    }
  ];

  return (
    <>
      {/* Examples Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div className="content-wrapper">
          <SectionHeading 
            title="Real-World Examples" 
            subtitle="Discover how organizations are implementing the economic sustainability principles outlined in the book."
          />
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="section">
       <HArticle/>
      </section>

      {/* Implementation Framework */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="Implementation Framework" 
            subtitle="A systematic approach to applying these principles in your organization"
            align="left"
          />
          
          <div className="mt-12 relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5 bg-sage-200"></div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:pr-12 md:text-right">
                  <div className="hidden md:block absolute right-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background transform translate-x-1/2"></div>
                  <h3 className="font-serif text-xl font-medium mb-3">1. Economic Assessment</h3>
                  <p className="text-muted-foreground">Evaluate current business operations through the lens of sustainability to identify economic opportunities and risks.</p>
                </div>
                <div className="md:pl-12">
                  <div className="aspect-video bg-sage-50 rounded-lg"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:pr-12 md:text-right order-1 md:order-2">
                  <div className="hidden md:block absolute left-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background transform -translate-x-1/2"></div>
                  <h3 className="font-serif text-xl font-medium mb-3">2. Strategy Integration</h3>
                  <p className="text-muted-foreground">Incorporate sustainability goals into core business strategy rather than treating them as separate initiatives.</p>
                </div>
                <div className="md:pl-12 order-2 md:order-1">
                  <div className="aspect-video bg-sage-50 rounded-lg"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:pr-12 md:text-right">
                  <div className="hidden md:block absolute right-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background transform translate-x-1/2"></div>
                  <h3 className="font-serif text-xl font-medium mb-3">3. Implementation & Measurement</h3>
                  <p className="text-muted-foreground">Execute initiatives with clear metrics that connect sustainability performance to economic outcomes.</p>
                </div>
                <div className="md:pl-12">
                  <div className="aspect-video bg-sage-50 rounded-lg"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:pr-12 md:text-right order-1 md:order-2">
                  <div className="hidden md:block absolute left-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background transform -translate-x-1/2"></div>
                  <h3 className="font-serif text-xl font-medium mb-3">4. Continuous Improvement</h3>
                  <p className="text-muted-foreground">Establish feedback loops to refine strategies based on performance data and emerging opportunities.</p>
                </div>
                <div className="md:pl-12 order-2 md:order-1">
                  <div className="aspect-video bg-sage-50 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-secondary">
        <CallToAction 
          title="Apply These Examples to Your Organization"
          description="Learn how to implement these principles in your specific business context through our workshops and consulting services."
          buttonText="Explore Workshops"
          buttonLink="/seminars"
        />
      </section>
    </>
  );
};

export default Examples;
