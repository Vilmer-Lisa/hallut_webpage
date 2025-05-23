
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, Scale, Globe, ArrowRight } from 'lucide-react';

import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
//import BookName from '../strapi-components/BookPage';
import { DataContext } from '../strapi-data/BookPageProvider'; 
import AboutConcept from "@/strapi-components/aboutConcept";
import CitationCard from "@/components/ui/CitationCard";
import { Card, CardContent } from '@/components/ui/card';


const AboutBook = () => {
  const icons = [
    <Book className="h-6 w-6" />,
    <Scale className="h-6 w-6" />,
    <Globe className="h-6 w-6" />
  ];
  
  const { BookPage } = useContext(DataContext);
  if (!BookPage) {
    return <div className="p-4">Loading...</div>;
  }
  return (
    <>
    
    <section className="relative bg-sage-50 overflow-hidden ">

{/* Background image layer */}
<div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{ backgroundImage: `url(${BookPage.bgimage.url})` }}
/>

{/* Semi-transparent black overlay */}
<div className="absolute inset-0 bg-black/50 z-10" />

{/* Book-pattern overlay */}
<div className="absolute inset-0 overflow-hidden opacity-10 z-20">
  <div className="book-pattern w-full h-full" />
</div>

{/* Actual content, on top */}
<div className="relative z-30 content-wrapper !pt-12 !pb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-12 lg:px-24">

  <div className="relative mx-auto order-1 md:order-2">
    <div className="mx-auto w-full max-w-md shadow-lg shadow-white/50 overflow-hidden">
      <img 
        src={BookPage.image.url}
        alt="Descriptive alt text"
        className="w-full object-cover max-w-full"
      />
    </div>
  </div>


    {/* Text and button div */}
    <div className="flex flex-col md:order-1">
      <div>
        <TopHeading 
          title={BookPage.BookName}
          subtitle={BookPage.ShortDescription}
          align="left"
          className="mb-6" 
        />
        <div className="flex flex-col gap-4">
          <span className="text-green-400 text-sm">
            Köp 10, få 20% rabatt!
          </span>
          {/* Button under the green text */}
          <Button asChild size="lg" className="group">
            <a 
              href="https://timbro.se/forlag/hall-ut-sa-skapar-foretag-en-hallbar-framtid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center w-1/2 justify-center mx-auto sm:mx-0"
            >
              Köp boken
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>

  </div>
</div>
</section>

      {/* Book Overview */}
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

      {/* Testimonials */}
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

      {/* Table of Contents */}
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
    </>
  );
};

export default AboutBook;
