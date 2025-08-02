import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LeafIcon} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import Journey from "@/strapi-components/journey";
import TheHouse from "@/strapi-components/theHouse";
import { DataContext } from '../strapi-data/HomePageProvider'; 
import Loading from "@/strapi-components/loading";

const Home = () =>{
  const { HomePage } = useContext(DataContext);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    if (HomePage) {
      // Slight delay to trigger the fade-in smoothly
      const timeout = setTimeout(() => setFadeIn(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [HomePage]);

  if (!HomePage) {
    return <Loading />;
  }
  return (
    <>
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
    {/* Background image (bottom layer) */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${HomePage.bgimage.url})` }}/>
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="absolute inset-0 overflow-hidden opacity-10 z-20">
      <div className="book-pattern w-full h-full"></div>
    </div>
    <div className="content-wrapper relative z-30 w-full">
      <div className="max-w-3xl mx-auto text-center">

      <TopHeading 
        title= {HomePage.cover.title}
        subtitle={HomePage.cover.subheading}
        />

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>

        {/* First button: white background, black text */}
        <Button asChild size="lg" className="group min-w-[200px] bg-white text-black hover:text-primary hover:bg-gray-100">
          <Link to="/book">
          {HomePage.cover.buttontext1}
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>

        {/* Second button: white border, white text, transparent background */}
        <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white min-w-[200px] border-2 border-white bg-transparent hover:text-black hover:bg-white"
          >
          <Link to="/events">
          {HomePage.cover.buttontext2}
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
{/* Value Creation Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <div className="flex justify-center mb-4">
      <img src="../../globe_icon.png" alt="Leaf" className="h-20 w-20" />
    </div>
    <SectionHeading 
      title={<span className="text-primary">{HomePage.concept.heading}</span>}
      align="center"
      />
    <div className="max-w-4xl mx-auto">
      <p className="text-gray-700 leading-relaxed mb-8">
        {HomePage.concept.text}
      </p>
      <p className="text-gray-700 leading-relaxed">
      {HomePage.concept.text2}
      </p>
    </div>
  </div>
</section>

{/*  */}
<section className="bg-white">
    <Journey/>
    <TheHouse />
</section>
</div>

</>

);};

export default Home;
