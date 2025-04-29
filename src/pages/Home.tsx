
import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, LineChart, Building } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import HAlink from '../strapi-components/HAlink';
import EventPrev from '../strapi-components/EventPrev';
import Journey from "@/strapi-components/journey";
import TheHouse from "@/strapi-components/theHouse";


const Home = () =>{
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
  {/* Background image (bottom layer) */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: "url('../bakgrundHallut.jpg')" }}/>
  <div className="absolute inset-0 bg-black/50 z-10" />
  <div className="absolute inset-0 overflow-hidden opacity-10 z-20">
    <div className="book-pattern w-full h-full"></div>
  </div>
  <div className="content-wrapper relative z-30 w-full">
  <div className="max-w-3xl mx-auto text-center">

  <TopHeading 
    title="Håll ut! Så skapar företag en hållbar framtid" 
    subtitle="A comprehensive guide to building sustainable economic practices in business that benefit both companies and society."
  />

<div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
  {/* First button: white background, black text */}
  <Button asChild size="lg" className="group bg-white text-black hover:text-primary hover:bg-gray-100">
    <Link to="/book">
      Explore the Book
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </Button>

  {/* Second button: white border, white text, transparent background */}
  <Button
  asChild
  size="lg"
  variant="outline"
  className="text-white border-2 border-white bg-transparent hover:text-black hover:bg-white"
>
  <Link to="/events">
    Upcoming events
  </Link>
</Button>
</div>
    </div>
  </div>
</section>

{/*  */}
<section className="bg-white">
  <div className="">
    <Journey />
    <EventPrev />
  </div>
</section>

{/* The house */}
<section className="bg-white">
  <div className="">
    <TheHouse />
  </div>
</section>

      {/* Next Seminar */}
      
      <section className="section bg-secondary">
        <div className="p-6">
    
        <HAlink/>

        </div>
      </section>
    </>
  );
};

export default Home;
