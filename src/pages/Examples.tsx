import React, { useContext, useEffect, useState } from "react";
import TopHeading from "@/components/TopHeading";
import DisplayExamples from '../strapi-components/DisplayExamples';
import { DataContext } from '../strapi-data/CaseProvider';
import Loading from "@/strapi-components/loading";


const Examples = () => {
  const { ExamplesPage } = useContext(DataContext);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    if (ExamplesPage) {
      // Slight delay to trigger the fade-in smoothly
      const timeout = setTimeout(() => setFadeIn(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [ExamplesPage]);

  if (!ExamplesPage) {
    return <Loading />;
  }
  console.log(ExamplesPage);

  return (
    <>
      <div
        className={`transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}>
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
      </div>
    </>
  );
};

export default Examples;
