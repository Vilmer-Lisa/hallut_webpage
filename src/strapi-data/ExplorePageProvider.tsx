import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface DataContextType {
    ExplorePage: ExplorePage | null;
}

//Components
interface Articles {
    title: string;
    description: string; 
    where: string; 
    date: string; 
    author: string; 
    link: string; 
}
interface Sciences {
    title: string;
    description: string;
    link: string; 
}

//The full page
interface ExplorePage {
    title: string;
    subheading: string;
    articletitle: string;
    articles: Articles[]; 
    sciencetitle: string;
    sciences: Sciences[]; 
}

export const DataContext = createContext<DataContextType>({ ExplorePage: null});

interface ExplorePageProviderProps {
  children: ReactNode;
}

const ExplorePageProvider: React.FC<ExplorePageProviderProps> = ({ children }) => {
  const [ExplorePage, setExplorePage] = useState<ExplorePage | null>(null);

  useEffect(() => {
    axios
    .get('http://localhost:1337/api/explore-page?populate=*')
      .then((response) => {
        console.log("Strapi response Explore:", response.data.data);
        setExplorePage(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ ExplorePage }}>
      {children}
    </DataContext.Provider>
  );
};

export default ExplorePageProvider;