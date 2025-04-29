import React, { useContext, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DataContext } from '../strapi-data/CaseProvider'; 
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, TrendingUp, LineChart, Building, Calendar, Clock } from "lucide-react";

const theHouse = () => {
     const { cases } = useContext(DataContext);
  return (
    <section className="section bg-white py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">

            <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-full md:w-1/3">
                {/* Background blob centered behind image */}
                <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-64 h-64 bg-gradient-to-r from-primary to-white rounded-full blur-3xl opacity-50"></div>
                </div>

                {/* Image on top */}
                <img 
                src="../huset.png"
                alt="Hållbarhet affärsutveckling"
                className="relative z-10 w-full h-80 object-contain mb-16"
                />
            </div>

            <div className="md:w-2/3 mb-8 md:mr-16">
                <p className="text-m text-gray-700">
                <SectionHeading 
                    title="Hållbar affärsutveckling"
                    align="left"
                />
                Vi fokuserar på att utveckla affärer med hållbarhet i centrum. 
                Genom att kombinera innovation, strategi och miljöhänsyn skapar 
                vi långsiktigt värde för både företag och samhälle.
                </p>
            </div>
            </div>
        </div>
    </section>
  );
};

export default theHouse;