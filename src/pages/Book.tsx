
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";

const Book = () => {
  return (
    <>
      {/* Book Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6">
                Håll ut: så skapar företag en hållbar framtid
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A pioneering work on economic sustainability that bridges theory and practice for businesses of all sizes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <a 
                    href="https://timbro.se/forlag/hall-ut-sa-skapar-foretag-en-hallbar-framtid/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Purchase Book
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/examples">
                    See Case Studies
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative mx-auto">
              <div className="aspect-[3/4] w-full max-w-md bg-sage-200 rounded-lg shadow-lg"></div>
              {/* This would be where the book cover image would go */}
            </div>
          </div>
        </div>
      </section>

      {/* Book Overview */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="About the Book" 
            subtitle="A deep dive into how businesses can thrive by implementing economically sustainable practices."
            align="left"
          />
          
          <div className="prose max-w-none">
            <p className="text-lg">
              "Håll ut: så skapar företag en hållbar framtid" provides a comprehensive framework for understanding and implementing economic sustainability in today's challenging business landscape. Drawing from extensive research and real-world applications, this book offers practical guidance for organizations seeking to balance profitability with long-term sustainability goals.
            </p>
            
            <p className="mt-4">
              The book examines how leading companies have transformed their operations to meet the challenges of climate change, resource scarcity, and changing consumer demands while maintaining strong financial performance. With detailed case studies and actionable strategies, it serves as an essential guide for executives, managers, and entrepreneurs who want to position their businesses for long-term success.
            </p>
            
            <p className="mt-4">
              Each chapter tackles a different aspect of economic sustainability, from developing innovative business models to measuring impact beyond traditional financial metrics. The book emphasizes that true sustainability comes not from isolated initiatives but from systemic changes that embed sustainable thinking into every aspect of operations and strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="section-slim bg-secondary">
        <div className="content-wrapper">
          <SectionHeading 
            title="Key Themes" 
            subtitle="Core concepts explored throughout the book"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-4">
              <div className="h-12 w-12 bg-sage-50 text-primary rounded-full flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Economic Value of Sustainability</h3>
              <p className="text-muted-foreground">How sustainable practices create measurable economic benefits beyond basic cost savings.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-4">
              <div className="h-12 w-12 bg-sage-50 text-primary rounded-full flex items-center justify-center">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Competitive Advantage</h3>
              <p className="text-muted-foreground">Strategies for leveraging sustainability as a differentiation factor in saturated markets.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-4">
              <div className="h-12 w-12 bg-sage-50 text-primary rounded-full flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Stakeholder Engagement</h3>
              <p className="text-muted-foreground">Techniques for aligning various stakeholder interests around sustainable economic goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="Table of Contents" 
            subtitle="A glimpse into the comprehensive coverage of economic sustainability"
            align="left"
          />
          
          <div className="mt-8 space-y-6">
            <div className="p-5 border-l-4 border-sage-200 hover:border-primary transition-colors bg-white">
              <h4 className="font-serif text-lg font-medium">Chapter 1: The Economic Case for Sustainability</h4>
              <p className="text-muted-foreground mt-1">Understanding why sustainable practices are not just good for the planet but essential for long-term business success.</p>
            </div>
            
            <div className="p-5 border-l-4 border-sage-200 hover:border-primary transition-colors bg-white">
              <h4 className="font-serif text-lg font-medium">Chapter 2: Measuring What Matters</h4>
              <p className="text-muted-foreground mt-1">Moving beyond traditional financial metrics to evaluate true economic sustainability.</p>
            </div>
            
            <div className="p-5 border-l-4 border-sage-200 hover:border-primary transition-colors bg-white">
              <h4 className="font-serif text-lg font-medium">Chapter 3: Sustainable Business Models</h4>
              <p className="text-muted-foreground mt-1">Innovative approaches that combine profitability with positive environmental and social impact.</p>
            </div>
            
            <div className="p-5 border-l-4 border-sage-200 hover:border-primary transition-colors bg-white">
              <h4 className="font-serif text-lg font-medium">Chapter 4: Supply Chain Transformation</h4>
              <p className="text-muted-foreground mt-1">Creating resilient and responsible supply networks that minimize risk and maximize value.</p>
            </div>
            
            <div className="p-5 border-l-4 border-sage-200 hover:border-primary transition-colors bg-white">
              <h4 className="font-serif text-lg font-medium">Chapter 5: Financial Strategies for Sustainability</h4>
              <p className="text-muted-foreground mt-1">How to fund sustainability initiatives and demonstrate ROI to investors and stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-sage-50">
        <div className="content-wrapper">
          <SectionHeading title="What Leaders Are Saying" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-lg italic mb-6">
                "A groundbreaking work that finally bridges the perceived gap between economic performance and sustainability. This book provides the roadmap every executive needs."
              </p>
              <footer className="font-medium">
                — CEO, Global Retail Corporation
              </footer>
            </blockquote>
            
            <blockquote className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-lg italic mb-6">
                "The case studies alone make this book worth its weight in gold. A practical guide backed by solid research and real-world applications."
              </p>
              <footer className="font-medium">
                — Chief Sustainability Officer, European Manufacturing Group
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-sage-900 text-white">
        <CallToAction 
          title="Ready to transform your approach to economic sustainability?"
          description="Get your copy of 'Håll ut: så skapar företag en hållbar framtid' and start building a more sustainable and profitable future for your business."
          buttonText="Purchase Now"
          buttonLink="https://timbro.se/forlag/hall-ut-sa-skapar-foretag-en-hallbar-framtid/"
          isExternal={true}
          variant="outline"
          className="text-white"
        />
      </section>
    </>
  );
};

export default Book;
