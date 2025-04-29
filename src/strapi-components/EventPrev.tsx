import React, { useContext, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DataContext } from '../strapi-data/CaseProvider'; 
import { ArrowRight, TrendingUp, LineChart, Building, Calendar, Clock } from "lucide-react";

const EventPrev= () => {
     const { cases } = useContext(DataContext);
  return (
    <section className="section bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Tech Conference 2024",
                date: "September 15-16, 2024",
                time: "9:00 AM - 5:00 PM",
                image: "/img/kivra.png",
                description: "Join us for the latest insights in technology and innovation."
              },
              {
                title: "Sustainability Summit",
                date: "October 22, 2024",
                time: "10:00 AM - 3:00 PM",
                image: "/img/klot.png",
                description: "Exploring sustainable business practices and future trends."
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="mr-2 w-5 h-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="mr-2 w-5 h-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full"
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

      
      
