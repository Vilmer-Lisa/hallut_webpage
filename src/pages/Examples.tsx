import React, { useContext, useState } from 'react';
import TopHeading from "@/components/TopHeading";
import DisplayExamples from '../strapi-components/DisplayExamples';
import { DataContext } from '../strapi-data/CaseProvider';

const Examples = () => {
  const { ExamplesPage } = useContext(DataContext);

  if (!ExamplesPage) {
    return <div className="p-4">Loading...</div>;
  }
  return (
    <>
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${ExamplesPage.bgimage.url})` }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 overflow-hidden opacity-10 z-20">
          <div className="book-pattern w-full h-full"></div>
        </div>
        <div className="content-wrapper relative z-30">
          <TopHeading 
            title={ExamplesPage.title}
            subtitle={ExamplesPage.description}
          />
        </div>
      </section>
      <section className="section">
       <DisplayExamples/>
      </section>
    </>
  );
};

export default Examples;
