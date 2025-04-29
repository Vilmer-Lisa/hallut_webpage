import React from 'react';
import { Book, Scale, Rocket, Globe, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Quote from '@/components/ui/quote'
import SectionHeading from "@/components/SectionHeading";


const aboutConcept = () => {
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
    <section className="px-4 bg-white py-16">
        <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <SectionHeading 
            title="Bokens huvudteman"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {keyThemes.map((theme, index) => (
              <Card key={index} className="border bg-transparent shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-2 rounded-full mr-3 text-black">
                      {theme.icon}
                    </div>
                    <h4 className="font-medium text-black">{theme.title}</h4>
                  </div>
                  <p className="text-sm text-black">{theme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default aboutConcept;