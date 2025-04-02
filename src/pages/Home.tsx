
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, LineChart, Building } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage-50 to-background min-h-[90vh] flex items-center">
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
            title="The Economics of Sustainability" 
            subtitle="Discover how leading companies are implementing sustainable economic practices that drive both profit and positive impact."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-sage-50 rounded-lg space-y-4">
              <div className="h-12 w-12 bg-sage-100 text-primary rounded-full flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Economic Growth</h3>
              <p className="text-muted-foreground">Learn how sustainable practices can fuel long-term growth and stability in competitive markets.</p>
            </div>
            
            <div className="p-6 bg-sage-50 rounded-lg space-y-4">
              <div className="h-12 w-12 bg-sage-100 text-primary rounded-full flex items-center justify-center">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Data-Driven Insights</h3>
              <p className="text-muted-foreground">Explore real-world metrics that demonstrate the economic advantages of sustainable business models.</p>
            </div>
            
            <div className="p-6 bg-sage-50 rounded-lg space-y-4">
              <div className="h-12 w-12 bg-sage-100 text-primary rounded-full flex items-center justify-center">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Organizational Strategies</h3>
              <p className="text-muted-foreground">Discover frameworks for implementing sustainability at every level of your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-slim bg-secondary">
        <div className="content-wrapper">
          <SectionHeading 
            title="Featured Insights" 
            subtitle="The latest articles exploring sustainable economic practices."
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="group">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                <Link to="/articles/sustainable-profit-models">The Economics of Sustainable Profit Models</Link>
              </h3>
              <p className="text-muted-foreground mt-2">How companies are finding new ways to balance profit with purpose in today's economy.</p>
            </article>
            
            <article className="group">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                <Link to="/articles/measuring-sustainability">Measuring Sustainability: Beyond Financial Metrics</Link>
              </h3>
              <p className="text-muted-foreground mt-2">Innovative approaches to evaluate the true impact of sustainability initiatives on business performance.</p>
            </article>
          </div>
          
          <div className="mt-8 text-right">
            <Button asChild variant="ghost" className="group">
              <Link to="/articles">
                View all articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Next Seminar */}
      <section className="section bg-white">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Next Seminar</h2>
              <h3 className="text-xl font-medium mb-2">Strategic Sustainability for Economic Growth</h3>
              <p className="text-muted-foreground mb-6">
                A comprehensive workshop on implementing sustainable business practices that drive economic growth and create competitive advantage.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-24 font-medium">Date:</div>
                  <div>June 15, 2023</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 font-medium">Time:</div>
                  <div>09:00 - 16:00</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 font-medium">Location:</div>
                  <div>Stockholm Business Center, Strandvägen 7B, Stockholm</div>
                </div>
              </div>
              <Button asChild>
                <Link to="/seminars">Register Now</Link>
              </Button>
            </div>
            
            <div className="bg-sage-50 p-8 rounded-lg">
              <h4 className="text-lg font-medium mb-4">What You'll Learn:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-200 flex items-center justify-center text-primary mr-3 mt-0.5">1</div>
                  <div>How to develop economic models that incorporate sustainability</div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-200 flex items-center justify-center text-primary mr-3 mt-0.5">2</div>
                  <div>Measuring the ROI of sustainability initiatives</div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-200 flex items-center justify-center text-primary mr-3 mt-0.5">3</div>
                  <div>Strategies for communicating economic sustainability to stakeholders</div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sage-200 flex items-center justify-center text-primary mr-3 mt-0.5">4</div>
                  <div>Case studies from industry-leading organizations</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-sage-900 text-white">
        <CallToAction 
          title="Ready to transform your approach to economic sustainability?"
          description="Get your copy of 'Håll ut: så skapar företag en hållbar framtid' and start building a more sustainable and profitable future for your business."
          buttonText="Get the Book"
          buttonLink="https://timbro.se/forlag/hall-ut-sa-skapar-foretag-en-hallbar-framtid/"
          isExternal={true}
          variant="outline"
          className="text-white"
        />
      </section>
    </>
  );
};

export default Home;
