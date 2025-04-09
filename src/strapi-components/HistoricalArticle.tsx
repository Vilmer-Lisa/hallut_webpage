import React, { useContext, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DataContext } from '../strapi-data/CaseProvider'; 

const HistoricalArticle = () => {
     const { cases } = useContext(DataContext);
  return (
    <section className="py-16">
        {cases.map((singleCase) => (
        <div className="container-custom mx-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-econ-primary mb-4">
                {singleCase.title}
                </h2>
                <p className="text-lg font-medium text-econ-dark/80 mb-6">
                {singleCase.subheading}
                </p>
                <Card className="bg-gray-50 border-none shadow-md">
                <CardContent className="pt-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                    {singleCase.paragraph1}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    {singleCase.paragraph2}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    {singleCase.paragraph3}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-2">
                    <li>{singleCase.listitem1}</li>
                    <li>{singleCase.listitem2}</li>
                    <li>{singleCase.listitem3}</li>
                    <li>{singleCase.listitem4}</li>
                    </ul>
                </CardContent>
                </Card>
            </div>
            <div className="order-1 lg:order-2">
                <div className="relative">
                <img 
                    src={singleCase.image?.url 
                        ? `http://localhost:1337${singleCase.image.url}` 
                        : ''}
                    alt="Historical factory with workers" 
                    className="rounded-lg shadow-lg w-full object-cover h-[500px]"
                />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-xs text-gray-600 px-2 py-1 rounded">
                    Gustavsbergs hamn
                </div>
                </div>
            </div>
            </div>
        </div>
      ))}
    </section>
  );
};

export default HistoricalArticle;