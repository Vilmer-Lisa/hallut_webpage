
import React from "react";
import { useContext } from 'react';
import { ArrowRight, Link as LinkIcon, Linkedin, BookOpen} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import { DataContext } from '../strapi-data/ExplorePageProvider'; 


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

const researchResources = [
  {
    id: "resource-1",
    title: "Global Compact Network Sweden",
    description: "Den svenska delen av FN:s Global Compact. Stödjer företag att implementera principer för mänskliga rättigheter, arbetsrätt, miljö och antikorruption.",
    url: "https://globalcompact.se",
    icon: <BookOpen className="h-8 w-8 text-primary" />
  },
  {
    id: "resource-2",
    title: "Swesif - Sveriges forum för hållbara investeringar",
    description: "Ett oberoende nätverk för aktörer som arbetar med ansvarsfulla investeringar. Arbetar med kunskapsspridning och samverkan inom hållbar finans.",
    url: "https://swesif.org",
    icon: <BookOpen className="h-8 w-8 text-primary" />
  },
  {
    id: "resource-3",
    title: "Mistra Center for Sustainable Markets (Misum)",
    description: "Ett forskningscenter med fokus på hållbara marknader och hållbart företagande. Arbetar med akademisk forskning, policyutveckling och företagsdialog.",
    url: "https://www.hhs.se/misum",
    icon: <BookOpen className="h-8 w-8 text-primary" />
  },
  {
    id: "resource-4",
    title: "Almi Hållbar utveckling för ditt företag",
    description: "Råd och stöd för företag som vill arbeta med hållbar utveckling.",
    url: "https://www.almi.se",
    icon: <BookOpen className="h-8 w-8 text-primary" />
  },
  {
    id: "resource-5",
    title: "Företagarna",
    description: "Hållbarhetsportalen med resurser och verktyg för hållbart företagande.",
    url: "https://www.foretagarna.se/driva-eget-foretag/hallbarhetsportalen/",
    icon: <BookOpen className="h-8 w-8 text-primary" />
  }
];

const Mentioned = () => {
  const { ExplorePage } = useContext(DataContext);
     if (!ExplorePage) {
       return <div className="p-4">Loading...</div>;
     }
  return (
    <>
      {/* Examples Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${ExplorePage.bgimage.url})` }}
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
            title= {ExplorePage.title} 
            subtitle={ExplorePage.subheading} 
          />
        </div>
      </section>

      {/* Mentions List */}
      <section>
      <div className="content-wrapper">
      <SectionHeading 
            title= {ExplorePage.articletitle} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {ExplorePage.articles?.map(mention => (
              <article className="group">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <LinkIcon size={20} />
                    {mention.where}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{mention.date}</span>
                </div>
                <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                  <a href={mention.link} target="_blank" rel="noopener noreferrer">
                    {mention.title}
                  </a>
                </h3>
                <p className="text-muted-foreground mt-2 mb-2">{mention.description}</p>
                <p className="text-sm font-medium mb-4">By {mention.author}</p>
                <a 
                  href={mention.link} 
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

      {/* Research Resources */}
      <section className="bg-gradient-to-b from-white to-sage-50">
        <div className="content-wrapper">
          <SectionHeading 
            title={ExplorePage.sciencetitle} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {ExplorePage.sciences?.map(resource => (
            <article className="group">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  {React.cloneElement(<BookOpen className="h-8 w-8 text-primary" />, { className: "w-4 h-4" })}
                </span>
              </div>
              <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </h3>
              <p className="text-muted-foreground mt-2 mb-2">{resource.description}</p>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Besök hemsida
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
