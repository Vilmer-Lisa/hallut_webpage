import React, { useContext, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DataContext } from '../strapi-data/CaseProvider'; 

const HAlink= () => {
     const { cases } = useContext(DataContext);
  return (
    <section className="py-16 mx-16">
        {cases.map((singleCase) => (
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-econ-primary mb-4">
            {singleCase.title}
            </h2>
            <p className="text-lg font-medium text-econ-dark/80 mb-6">
            {singleCase.subheading}
            </p>
            <Button asChild className="mt-2 group">
              <Link to="/articles" className="flex items-center">
                Läs mer
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={singleCase.image?.url 
                    ? `http://localhost:1337${singleCase.image.url}` 
                    : ''}
                alt="GUSTAVSBERG – FÖREGÅNGARE NÄR DET GÄLLER SOCIALT ANSVAR" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-xs text-gray-600 px-2 py-1 rounded">
                Historisk bild (illustration)
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </section>
  );
};

export default HAlink;