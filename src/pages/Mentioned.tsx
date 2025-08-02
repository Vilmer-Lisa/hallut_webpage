import React, { useContext, useEffect, useState } from "react";
import { ArrowRight, Link as LinkIcon, Linkedin, BookOpen} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import { DataContext } from '../strapi-data/ExplorePageProvider'; 
import Loading from "@/strapi-components/loading";

const Mentioned = () => {
  const { ExplorePage } = useContext(DataContext);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    if (ExplorePage) {
      // Slight delay to trigger the fade-in smoothly
      const timeout = setTimeout(() => setFadeIn(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [ExplorePage]);

  if (!ExplorePage) {
    return <Loading />;
  }

  return (
    <>
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
   

    <section>
    <div className="content-wrapper">
    <SectionHeading 
          title= {ExplorePage.articletitle} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-16">
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

    <section className="bg-gradient-to-b from-white to-sage-50">
      <div className="content-wrapper">
        <SectionHeading 
          title={ExplorePage.sciencetitle} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
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
  </div>
  </>
  );
};

export default Mentioned;
