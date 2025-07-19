import React, { useContext, useState } from 'react';
import { DataContext } from '../strapi-data/CaseProvider';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const DisplayExamples = () => {
    const { ExamplesPage } = useContext(DataContext);
    const [expandedCases, setExpandedCases] = useState<number[]>([]);

    if (!ExamplesPage) {
      return <div className="p-4">Loading...</div>;
    }

    const toggleExpansion = (id: number) => {
        setExpandedCases(prev => 
        prev.includes(id) 
            ? prev.filter(caseId => caseId !== id) 
            : [...prev, id]
        );
    };

    //console.log(ExamplesPage.cases[0].image.url);
  return (
    <section>
    <div className="space-y-24">
      {ExamplesPage.cases.map((singleCase) => (
        <div className="container-custom mx-8" key={singleCase.id}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-econ-primary mb-4">
                {singleCase.title}
              </h2>
              <p className="text-lg font-small text-econ-dark/80">
                {singleCase.subheading}
              </p>
              
            <Collapsible>
            <div className="relative">
                <div className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                    {singleCase.paragraph1}
                </p>

                <CollapsibleContent>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    {singleCase.paragraph2}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    {singleCase.paragraph3}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-2">
                        {singleCase.listitem1 && <li>{singleCase.listitem1}</li>}
                        {singleCase.listitem2 && <li>{singleCase.listitem2}</li>}
                        {singleCase.listitem3 && <li>{singleCase.listitem3}</li>}
                        {singleCase.listitem4 && <li>{singleCase.listitem4}</li>}
                    </ul>
                </CollapsibleContent>
                </div>

                {/* Gradient overlay when collapsed */}
                {!expandedCases.includes(singleCase.id) && (
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
                )}
            </div>

            <CollapsibleTrigger asChild>
                <Button
                variant="ghost"
                size="sm"
                className="w-full flex items-center justify-center mt-2"
                onClick={() => toggleExpansion(singleCase.id)}
                >
                {expandedCases.includes(singleCase.id) ? (
                    <>Läs mindre <ChevronUp className="ml-1 h-4 w-4" /></>
                ) : (
                    <>Läs mer <ChevronDown className="ml-1 h-4 w-4" /></>
                )}
                </Button>
            </CollapsibleTrigger>
            </Collapsible>

            </div>
            <div className="order-2 lg:order-1">
        
              <div className="relative">
                <img 
                  src={singleCase.image?.url 
                    ? `${singleCase.image.url}` 
                    : ''}
                  alt="Historical factory with workers" 
                  className="rounded-lg shadow-lg w-full object-cover h-[340px]"
                />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-xs text-gray-600 px-2 py-1 rounded">
                {singleCase.imagedescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default DisplayExamples;