import React, { useContext, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DataContext } from '../strapi-data/CaseProvider'; 
import { ArrowRight, TrendingUp, LineChart, Building, Calendar, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";


const EventPrev= () => {
     const { cases } = useContext(DataContext);
  return (
    <section className="py-2 mb-8">
      <SectionHeading 
          title="Kommande evenemang"
        />
  <div className="container mx-auto">
    
  <div className="flex flex-wrap justify-center gap-20">
  {[
    {
      title: "Emma Ihre på Almedalsveckan",
      date: "25 Juni",
      time: "08:15 - 08:45",
      image: "/img/almedalen.png",
      description: "Hur kan företag bidra till en hållbarare värld?"
    },
    {
      title: "Sustainability Summit",
      date: "October 22, 2024",
      time: "10:00 AM - 3:00 PM",
      image: "/img/cc.png",
      description: "Exploring sustainable business practices and future trends."
    }
  ].map((event, index) => (
    <div 
      key={index} 
      className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[320px] md:w-[300px]"
    >
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-40 object-contain"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-1">
          <Calendar className="mr-1.5 w-4 h-4 text-primary" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <Clock className="mr-1.5 w-4 h-4 text-primary" />
          <span>{event.time}</span>
        </div>
        <p className="text-gray-700 text-sm mb-3">{event.description}</p>
        <Button 
          asChild 
          variant="outline" 
          className="w-full text-sm py-2"
        >
          <Link to="/events">More Details</Link>
        </Button>
      </div>
    </div>
  ))}
</div>

  </div>
</section>

  );
};

export default EventPrev;

      
      
