
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
//import BookName from '../strapi-components/BookPage';
import { DataContext } from '../strapi-data/BookPageProvider'; 


const Book = () => {
  const { BookPage } = useContext(DataContext);
  if (!BookPage) {
    return <div className="p-4">Loading...</div>;
  }
  return (
    <>
      {/* Book Hero */}
      <section className="relative bg-secondary pt-16 pb-24">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="blue-pattern w-full h-full"></div>
        </div>
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-48">
            <div>
      
              <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6">
              {BookPage.BookName}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
              {BookPage.ShortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <a 
                    href="https://timbro.se/forlag/hall-ut-sa-skapar-foretag-en-hallbar-framtid/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Läs mer 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative mx-auto">
            <div className="mx-auto w-full max-w-md shadow-lg">
                <img 
                  src={`http://localhost:1337${BookPage.image.url}`}
                  alt="Descriptive alt text" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Overview */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="Om boken" 
            align="left"
          />
          
          <div className="prose max-w-none">
            <p className="text-lg">
            {BookPage?.paragraph1}
            </p>
            
            <p className="mt-4">
            {BookPage?.paragraph2}
            </p>
            
            <p className="mt-4">
            {BookPage?.paragraph3}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section blue-gradient text-white  flex items-center md:pt-0 md:pb-0">
        <div className="content-wrapper">
        <div className="flex flex-wrap gap-8 mx-4 md:mx-12 lg:mx-32">
            {BookPage.quotes.map((quote, idx) => (
              <div key={idx} className="flex-1 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <blockquote>
                  <div className="flex flex-col items-start justify-between">
                    <p className="text-lg italic mb-4">
                      {quote.quote}
                    </p>
                    <footer className="font-medium text-right">
                      — {quote.author}
                    </footer>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Key Themes */}
      <section className="section-slim bg-secondary">
        <div className="content-wrapper">
          <SectionHeading 
            title="Övergripande teman" 
            subtitle="Viktiga koncept som presenteras i boken"
          />
          <div className={`grid grid-cols-1 md:grid-cols-${BookPage.keythemes.length} gap-8 mt-12`}>
            {BookPage.keythemes.map((theme, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-sm space-y-4">
                <div className="h-12 w-12 blue-gradient text-white rounded-full flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-serif font-medium">{theme.title}</h3>
                <p className="text-muted-foreground">{theme.text}</p> {/* Use the theme.text or theme.description here */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="Innehåll" 
            align="left"
          />
          {BookPage.chapters.map((chapter, idx) => (
          <div className="mt-8 space-y-6">
            <div className="p-5 border-l-4 border-primary hover:bg-secondary transition-colors">
              <h4 className="font-serif text-lg font-medium">Chapter {chapter.chapterNr}: {chapter.name}</h4>
              <p className="text-muted-foreground mt-1">{chapter.description}</p>
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Book;
