import React, { useContext, useEffect, useState } from "react";
import { Linkedin, Mail, ArrowRight, Quote} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CitationCard from "@/components/ui/CitationCard";
import { DataContext } from '../strapi-data/AboutMePageProvider'; 
import { Button } from "@/components/ui/button";
import Loading from "@/strapi-components/loading";



const Author = () => {
    const { AboutMePage } = useContext(DataContext);
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
      if (AboutMePage) {
        // Slight delay to trigger the fade-in smoothly
        const timeout = setTimeout(() => setFadeIn(true), 100);
        return () => clearTimeout(timeout);
      }
    }, [AboutMePage]);

    if (!AboutMePage) {
      return <Loading />;
    }
  return (
    <>
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}>
    <section className="relative bg-secondary">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="mx-auto md:col-span-1">
            <div className="aspect-square w-64 md:w-full max-w-xs bg-sage-200 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={AboutMePage.picture?.url 
                ? `${AboutMePage.picture.url}` 
                : ''}
              alt="Book cover"
              className="w-64 rounded"
            />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-3">
            {AboutMePage.name }
            </h1>
            <p className="text-lg text-primary mb-4">
            {AboutMePage.title }
            </p>
            <p className="text-muted-foreground mb-6">
            {AboutMePage.description }
            </p>
              
            <div className="flex flex-col gap-2 md:gap-6 md:flex-row mb-4">
              {/* Citation Card 1 */}
              <CitationCard 
                text= {AboutMePage.quotes[0].quote }      
              />

              {/* Citation Card 2 */}
              <CitationCard 
                text= {AboutMePage.quotes[1].quote }       
              />
            </div>


            <div className="flex space-x-8 w-full justify-center md:justify-start">
              <a 
                href={AboutMePage.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-700 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${AboutMePage.email}`}
                className="text-sage-700 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="content-wrapper">
        <SectionHeading 
          title= {AboutMePage.biography.title}
          align="left"
        />
        
        <div className="prose max-w-none">
          <p>{AboutMePage.biography.textsection1}</p>
          <p className="mt-4">{AboutMePage.biography.textsection2}</p>
          <p className="mt-4">{AboutMePage.biography.textsection3}</p>
          <p className="mt-4">{AboutMePage.biography.textsection4}</p>
          <p className="mt-4">{AboutMePage.biography.textsection5}</p>
          <p className="mt-4">{AboutMePage.biography.textsection6}</p>
        </div>
      </div>
    </section>

    <section className="section-slim bg-white border-b">
      <div className="content-wrapper">
      <SectionHeading 
          title= "Läs min debattartikel i dagens industri!"
          align="left"
        />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <img
              src={AboutMePage.featured?.img.url 
                ? `${AboutMePage.featured.img.url}` 
                : ''}
              alt="Featured Article"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">{AboutMePage.featured.title}</h3>
            <p className="text-muted-foreground">{AboutMePage.featured.description}</p>
            <Button asChild className="group">
              <a href= {AboutMePage.featured.link} target="_blank" rel="noopener noreferrer">
                {AboutMePage.featured.buttontext}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
  </>
  );
};

export default Author;
