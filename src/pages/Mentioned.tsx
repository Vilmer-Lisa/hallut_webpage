
import React from "react";
import { ArrowRight, Link as LinkIcon, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import Di from "../../img/di.png";



const mentions = [
  {
    id: "mention-1",
    title: "Vi vill se modiga företagsledare",
    excerpt: "Vi behöver modiga företagsledare nu. Ledare som ser att det långsiktiga värdet i "
    +"inkludering är större än kortsiktig fruktan för amerikansk kulturkrigspolitik.",
    date: "7 april 2025",
    source: "Dagens industri",
    author: "Heike Erkers & Markus Furuberg", 
    url: "https://www.di.se/debatt/vi-vill-se-modiga-foretagsledare/",
    sourceIcon: <LinkIcon size={20} />
  },
  {
    id: "mention-2",
    title: "Sustainability Models That Actually Work",
    excerpt: "This blog post discusses how the principles from 'Håll ut' can be applied to transform business operations for long-term sustainability.",
    date: "April 22, 2023",
    source: "Economics Today Blog",
    author: "Lars Eriksson",
    url: "https://example.com/blog/sustainability-models",
    sourceIcon: <LinkIcon size={20} />
  },
  {
    id: "mention-3",
    title: "Required Reading for Modern Business Leaders",
    excerpt: "A detailed analysis of why 'Håll ut' should be on every executive's bookshelf in today's challenging business landscape.",
    date: "March 10, 2023",
    source: "LinkedIn",
    author: "Sofia Lindberg",
    url: "https://linkedin.com/post/example2",
    sourceIcon: <LinkIcon size={20} />
  },
  {
    id: "mention-4",
    title: "Balancing Profit and Sustainability",
    excerpt: "This article references 'Håll ut' as a pioneering work that bridges the gap between profitability and sustainable business practices.",
    date: "February 28, 2023",
    source: "Business Sustainability Forum",
    author: "Anders Peterson",
    url: "https://example.com/forum/balancing-profit",
    sourceIcon: <LinkIcon size={20} />
  }
];

const Mentioned = () => {
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
            title="Läs mer" 
            subtitle="Ytterligare läsning för den som vill lära sig mer om området."
          />
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-slim bg-white border-b">
        <div className="content-wrapper">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <img
                src="../emmaDN.jpg"
                alt="Featured Article"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Regelverk får inte försvaga företagens hållbarhetsarbete</h3>
              <p className="text-muted-foreground">
              Företag är en stark samhällskraft, en kraft som både vill och har ett ansvar att ta ansvar för framtiden, 
              men som inte bör försvagas av regelverk som kräver orimliga resurser och ibland leder utvecklingen i fel riktning,
               skriver Emma Ihre, chef för ESG och Public Affairs i Norden, Asmodee.
              </p>
              <Button asChild className="group">
                <a href="https://example.com/featured-article" target="_blank" rel="noopener noreferrer">
                  Läs artikeln i Dagens industri
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentions List */}
      <section className="section">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {mentions.map(mention => (
              <article key={mention.id} className="group">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    {mention.sourceIcon}
                    {mention.source}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{mention.date}</span>
                </div>
                <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                  <a href={mention.url} target="_blank" rel="noopener noreferrer">
                    {mention.title}
                  </a>
                </h3>
                <p className="text-muted-foreground mt-2 mb-2">{mention.excerpt}</p>
                <p className="text-sm font-medium mb-4">By {mention.author}</p>
                <a 
                  href={mention.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read full post
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentioned;
