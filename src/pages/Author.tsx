import React from "react";
import { Linkedin, Mail, ArrowRight, Quote} from "lucide-react";
//import Quote from "@/components/ui/AuthorQuote";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CitationCard from "@/components/ui/CitationCard";
import { DataContext } from '../strapi-data/AboutMePageProvider'; 
import { Button } from "@/components/ui/button";
import { useContext } from 'react';


const Author = () => {
   const { AboutMePage } = useContext(DataContext);
    if (!AboutMePage) {
      return <div className="p-4">Loading...</div>;
    }
  return (
    <>
      {/* Author Hero */}
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

      {/* Biography */}
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

      {/* Current Positions */}
      {/*
      <section className="bg-white py-8">
        <div className="content-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-white to-sage-50 shadow-md border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-serif">{AboutMePage.occupation.title}</h3>
                  </div>
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <p className="font-medium">{AboutMePage.occupation.occupation1}</p>
                    <p className="text-muted-foreground">{AboutMePage.occupation.company1}</p>
                  </div>
                </CardContent>
              </Card>
            
              <Card className="bg-gradient-to-br from-white to-sage-50 shadow-md border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-serif">{AboutMePage.voluntary.title}</h3>
                  </div>
                  <Separator className="mb-4" />
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">{AboutMePage.voluntary.position1}</p>
                      <p className="text-muted-foreground">{AboutMePage.voluntary.entity1}</p>
                    </li>
                    <li>
                      <p className="font-medium">{AboutMePage.voluntary.position2}</p>
                      <p className="text-muted-foreground">{AboutMePage.voluntary.entity2}</p>
                    </li>
                    <li>
                    <p className="font-medium">{AboutMePage.voluntary.position3}</p>
                    <p className="text-muted-foreground">{AboutMePage.voluntary.entity3}</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* Featured Article */}
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
                <a href="https://example.com/featured-article" target="_blank" rel="noopener noreferrer">
                  {AboutMePage.featured.buttontext}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;
