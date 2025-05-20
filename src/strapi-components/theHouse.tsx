import React, { useContext, useEffect } from 'react';
import { DataContext } from '../strapi-data/HomePageProvider'; 
import SectionHeading from "@/components/SectionHeading";

const theHouse = () => {
    const { HomePage } = useContext(DataContext);
  
    return (
      <section className="section bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
  
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-xs mb-12">
              {/* Gradient behind image */}
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-64 h-64 bg-gradient-to-r from-primary to-white rounded-full blur-3xl opacity-50"></div>
              </div>
              {/* House Image */}
              <img 
                src={HomePage.house.image?.url 
                  ? `http://localhost:1337${HomePage.house.image.url}` 
                  : ''}
                className="relative z-10 w-full h-80 object-contain"
                alt="House"
              />
            </div>
  
            {/* Title */}
              <SectionHeading 
                title={HomePage.house.title}
                align="center"
              />
  
            {/* Text */}
            <p className="text-md text-gray-700 max-w-4xl mb-12">
              {HomePage.house.text}
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  

export default theHouse;