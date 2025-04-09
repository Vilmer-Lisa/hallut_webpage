
import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, LineChart, Building } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Article from '../strapi-components/article';
import HArticle from '../strapi-components/HistoricalArticle';
import Case from '../strapi-components/case';

const Home = () =>{
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="book-pattern w-full h-full"></div>
        </div>
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 animate-fade-in">
              Håll ut: så skapar företag en hållbar framtid
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A comprehensive guide to building sustainable economic practices in business that benefit both companies and society.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="group">
                <Link to="/book">
                  Explore the Book
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/seminars">
                  Upcoming Seminars
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Book Overview */}
      <section className="section bg-white">
        <div className="content-wrapper">
          <SectionHeading 
            title="Vad är håll ut?" 
            subtitle="Discover how leading companies are implementing sustainable economic practices that drive both profit and positive impact."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-secondary rounded-lg space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 blue-gradient text-white rounded-full flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Värderingar</h3>
              <p className="text-muted-foreground">Learn how sustainable practices can fuel long-term growth and stability in competitive markets.</p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 blue-gradient text-white rounded-full flex items-center justify-center">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Lagar</h3>
              <p className="text-muted-foreground">Explore real-world metrics that demonstrate the economic advantages of sustainable business models.</p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 blue-gradient text-white rounded-full flex items-center justify-center">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Riskhantering</h3>
              <p className="text-muted-foreground">Discover frameworks for implementing sustainability at every level of your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Seminar */}
      
      <section className="section bg-secondary">
        <div className="p-6">
    
        <HArticle/>

        </div>
      </section>
    </>
  );
};

export default Home;
