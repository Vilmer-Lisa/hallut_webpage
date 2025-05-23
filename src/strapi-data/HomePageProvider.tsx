import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const source = "https://proud-canvas-05b17cf098.strapiapp.com/api"

//Sub-components
interface ImageData {
    url:string; 
}
interface DataContextType {
    HomePage: HomePage | null;
}

//Components
interface cover {
    title: string;
    subheading: string;
    buttontext1: string;
    buttontext2: string;
}
interface themes{
    title: String;
    area1: String;
    text1: String;
    area2: String;
    text2: String;
    area3: String;
    text3: String;

}
interface concept {
    heading: String;
    text: String;
    text2: String;
}
interface house {
    image: ImageData;
    title: String;
    text: String;
}

//The full page
interface HomePage {
    cover: cover;
    themes: themes;
    concept: concept;
    house: house;
    bgimage: ImageData;
}

export const DataContext = createContext<DataContextType>({ HomePage: null});

interface HomePageProviderProps {
  children: ReactNode;
}

const HomePageProvider: React.FC<HomePageProviderProps> = ({ children }) => {
  const [HomePage, setHomePage] = useState<HomePage | null>(null);

  useEffect(() => {
    axios
    .get(`${source}/home-page?populate[bgimage][populate]=*&populate[cover]=*&populate[concept]=*&populate[themes]=*&populate[house][populate]=image`)
      .then((response) => {
        console.log("Strapi response case:", response.data.data);
        setHomePage(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ HomePage }}>
      {children}
    </DataContext.Provider>
  );
};

export default HomePageProvider;