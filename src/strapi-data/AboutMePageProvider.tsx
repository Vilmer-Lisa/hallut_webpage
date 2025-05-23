import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const source = "https://proud-canvas-05b17cf098.strapiapp.com/api"


//Sub-components
interface ImageData {
    url:string; 
}
interface DataContextType {
    AboutMePage: AboutMePage | null;
}

//Components
interface Quotes {
    quote: string;
    author: string; 
}
interface Biography {
    title: string;
    textsection1: string; 
    textsection2: string; 
    textsection3: string; 
    textsection4: string; 
    textsection5: string; 
    textsection6: string; 
}
interface Featured {
    title: string;
    img: ImageData; 
    heading: string; 
    description: string; 
    buttontext: string; 
    position3: string; 
    entity3: string; 
}

//The full page
interface AboutMePage {
    name: string;
    title: string; 
    description: string;
    quotes: Quotes[]; 
    linkedin: string; 
    email: string; 
    biography: Biography; 
    featured: Featured; 
    picture: ImageData; 
    bgimage: ImageData;
}

export const DataContext = createContext<DataContextType>({ AboutMePage: null});

interface AboutMePageProviderProps {
  children: ReactNode;
}

const AboutMePageProvider: React.FC<AboutMePageProviderProps> = ({ children }) => {
  const [AboutMePage, setAboutMePage] = useState<AboutMePage | null>(null);

  useEffect(() => {
    axios
    .get(`${source}/about-me-page?populate[picture]=true&populate[quotes]=true&populate[biography]=true&populate[featured][populate]=img`)
      .then((response) => {
        console.log("Strapi response AboutMe:", response.data.data);
        setAboutMePage(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ AboutMePage }}>
      {children}
    </DataContext.Provider>
  );
};

export default AboutMePageProvider;