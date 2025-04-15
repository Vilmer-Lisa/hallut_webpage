import React from 'react';
import { Book, Scale, Rocket, Globe, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Quote from '@/components/ui/quote'

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

  const keyThemes = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Hållbarhet i affärsstrategin",
      description: "Hållbarhet som en självklar del av riskanalyser och långsiktig affärsutveckling"
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Balans mellan regler och innovation",
      description: "Navigera genom regeldjungeln för att både växa och göra gott för miljön"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Skapa en meningsfull framtid",
      description: "Lämna efter sig en välmående planet och ett fungerande samhälle"
    }
  ];
  
  return (
    <section className="px-4 bg-white pt-16">
        <div className="max-w-6xl mx-auto">
        

        

            {/* Timeline visualization with sketch-style graphics */}
            <div className="mb-32">
                <h3 className="text-xl font-semibold mb-16 text-gray-800 text-center">Företagens resa mot hållbarhet</h3>
                {/* Sketch-style timeline container */}
                <div className="relative">
                {/* Sketch-style items */}
                <div className="flex flex-col md:flex-row justify-between items-start relative">
                    {timelineSteps.map((step, index) => (
                        <div key={index} className={cn(
                            "flex flex-col items-center text-center mb-12 md:mb-0 relative z-10 w-full md:w-1/3 px-4",
                            index < timelineSteps.length - 1 && "md:pr-4"
                        )}>
                        {/* Sketch-style icon container */}
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
                  
                        {/* Content with sketch-style */}
                        <div className="transform rotate-1">
                            <h4 className="font-semibold mb-2 text-gray-800 text-lg" style={{ fontFamily: 'serif' }}>{step.title}</h4>
                            <p className="text-sm text-gray-600" style={{ maxWidth: '200px', margin: '0 auto' }}>{step.description}</p>
                        </div>
                  
                        {/* Sketch-style arrow */}
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