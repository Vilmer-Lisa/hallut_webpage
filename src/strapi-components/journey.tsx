import React from 'react';
import { Book, Scale, Rocket, Globe, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionHeading from "@/components/SectionHeading";


const journey = () => {
  const timelineSteps = [
    {
      icon: <Book className="h-8 w-8" />,
      title: "Fokus på ekonomisk vinst",
      description: "Traditionell företagsstrategi med ekonomiskt resultat som huvudmål"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Hållbarhet som strategi",
      description: "Hållbarhet integreras i affärsmodellen och riskanalyser"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Reglering och ansvar",
      description: "Balansera regelverk med innovation för en hållbar framtid"
    }
  ];
  
  return (
    <section className="px-4 bg-white pt-16">
        <div className="max-w-6xl mx-auto">
            <div className="mb-32">
                <SectionHeading 
                  title="Företagens resa mot hållbarhet" 
                />
                <div className="relative">
                <div className="flex flex-col md:flex-row justify-between items-start relative">
                    {timelineSteps.map((step, index) => (
                        <div key={index} className={cn(
                            "flex flex-col items-center text-center mb-12 md:mb-0 relative z-10 w-full md:w-1/3 px-4",
                            index < timelineSteps.length - 1 && "md:pr-4"
                        )}>
                        <div className="bg-white p-3 rounded-full border border-gray-800 mb-4 relative transform rotate-1 shadow-sm" 
                            style={{
                                borderWidth: '1.5px',
                                borderStyle: 'solid',
                                borderRadius: '50%',
                                boxShadow: '2px 2px 0px rgba(0,0,0,0.1)'
                            }}>
                            <div className="transform -rotate-1">
                            {step.icon}
                            </div>
                        </div>
                        <div className="transform rotate-1">
                            <h4 className="font-semibold mb-2 text-gray-800 text-lg" style={{ fontFamily: 'serif' }}>{step.title}</h4>
                            <p className="text-sm text-gray-600" style={{ maxWidth: '200px', margin: '0 auto' }}>{step.description}</p>
                        </div>
                        {index < timelineSteps.length - 1 && (
                            <div className="hidden md:block absolute -right-3 top-24 transform -translate-y-1/2 z-20">
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-2">
                                    <path d="M0 10H36M36 10L28 2M36 10L28 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{strokeDasharray: '1, 0'}} />
                                </svg>
                            </div>
                        )}
                </div>
              ))}      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default journey;