import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const source = "https://proud-canvas-05b17cf098.strapiapp.com/api"

interface ImageData {
  url:string; 
}

interface Cases {
  id: number;
  title: string;
  subheading: string;
  text: string;
  firstpage: boolean;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  listitem1: string;
  listitem2: string;
  listitem3: string;
  listitem4: string;
  image: ImageData;
  imagedescription: string;
}
interface ExamplesPage {
  title: string; 
  description: string; 
  cases: Cases[]; 
  bgimage: ImageData; 
}

interface DataContextType {
  ExamplesPage: ExamplesPage | null;
}

export const DataContext = createContext<DataContextType>({ ExamplesPage: null });

interface ExamplesProviderProps {
  children: ReactNode;
}

const ExamplesProvider: React.FC<ExamplesProviderProps> = ({ children }) => {
  const [ExamplesPage, setExamplesPage] = useState<ExamplesPage | null>(null);
  console.log("cases:", ExamplesPage); 
  useEffect(() => {
    axios
    .get(`${source}/examples-page?populate[bgimage][populate]=*&populate[cases][populate]=image`)
      .then((response) => {
        console.log("Strapi response case:", response.data.data);
        setExamplesPage(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ ExamplesPage }}>
      {children}
    </DataContext.Provider>
  );
};

export default ExamplesProvider;
