
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";

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
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('../bakgrundHallut.jpg')" }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Pattern overlay with low opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-10 z-20">
          <div className="book-pattern w-full h-full"></div>
        </div>

        {/* Content area (on top of all background layers) */}
        <div className="content-wrapper relative z-30">
          <TopHeading 
            title="Viktiga exempel" 
            subtitle="Projekt och händelser som bör uppmärksammas inom området."
          />
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="section">
       <HArticle/>
      </section>
    </>
  );
};

export default Examples;
