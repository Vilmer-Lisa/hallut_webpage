import React, { useContext, useEffect, useState } from "react";
import SubHeading from "@/components/SectionHeading";
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
        <div className="mb-16 mx-8">
          <SubHeading 
            title={ExamplesPage.title}
            subtitle={ExamplesPage.description}
          />
        </div>

       <DisplayExamples/>
      </div>
    </>
  );
};

export default Examples;
