import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Book, Scale, Globe, ArrowRight } from 'lucide-react';
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import { DataContext } from '../strapi-data/BookPageProvider'; 
import CitationCard from "@/components/ui/CitationCard";
import { Card, CardContent } from '@/components/ui/card';
import Loading from "@/strapi-components/loading";


const AboutBook = () => {
    const icons = [
    <Book className="h-6 w-6" />,
    <Scale className="h-6 w-6" />,
    <Globe className="h-6 w-6" />
    ];

    const { BookPage } = useContext(DataContext);
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
      if (BookPage) {
        // Slight delay to trigger the fade-in smoothly
        const timeout = setTimeout(() => setFadeIn(true), 100);
        return () => clearTimeout(timeout);
      }
    }, [BookPage]);

    if (!BookPage) {
      return <Loading />;
    }
    return (
    <>
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
    <section className="relative bg-sage-50 overflow-hidden ">

    {/* Book-pattern overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${BookPage.bgimage.url})` }}/>
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="absolute inset-0 overflow-hidden opacity-10 z-20">
      <div className="book-pattern w-full h-full" />
    </div>
    <div className="relative z-30 content-wrapper !pt-12 !pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-12 lg:px-24 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start order-1 md:order-1">
          <TopHeading 
            title={BookPage.BookName}
            subtitle={BookPage.ShortDescription}
            className="mb-6 text-center md:text-left" 
          />
          <div className="block md:hidden mb-6 w-full max-w-[200px] mx-auto shadow-lg shadow-white/50 overflow-hidden">
            <img 
              src={BookPage.image.url}
              alt="Descriptive alt text"
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start mt-6">
            <span className="text-white text-sm">
              Köp 10, få 20% rabatt!
            </span>
            <Button asChild size="lg" className="group bg-primary text-white">
              <a 
                href="https://timbro.se/forlag/hall-ut-sa-skapar-foretag-en-hallbar-framtid/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              > Köp boken
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
          <div className="relative mx-auto hidden md:block order-2 md:order-2">
            <div className="mx-auto w-full max-w-md shadow-lg shadow-white/50 overflow-hidden">
              <img 
                src={BookPage.image.url}
                alt="Descriptive alt text"
                className="w-full object-cover max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="content-wrapper">
      <SectionHeading 
        title="Om boken" 
        align="left"
      />
      
      <div className="prose max-w-none">
        <p className="">
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

    <section className="py-8 bg-secondary text-white flex items-center md:pt-0 md:pb-0">
    <div className="content-wrapper w-full">
      <div
        className={`flex flex-wrap gap-8 mx-4 md:mx-12 lg:mx-32 ${
          BookPage.quotes.length === 1 ? "justify-center" : ""
        }`}
      >
        {BookPage.quotes.map((quote, idx) => (
          <CitationCard 
            key={idx}
            text={quote.quote}
            author={quote.author}
            large
          />
        ))}
      </div>
    </div>
    </section>

    <section className="px-4 bg-white py-16">
    <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <SectionHeading 
        title="Bokens huvudteman"
        align="center"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {BookPage.keythemes.map((theme, index) => (
          <Card key={index} className="border bg-transparent shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 p-2 rounded-full mr-3 text-black">
                  {icons[index]}
                </div>
                <h4 className="font-medium text-black">{theme.title}</h4>
              </div>
              <p className="text-sm text-black">{theme.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
    </section>

    <section>
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
  </div>
</>
  );
};

export default AboutBook;
