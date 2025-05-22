import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const source = "https://proud-canvas-05b17cf098.strapiapp.com/api"

//Sub-components
interface ImageData {
    url:string; 
}
interface DataContextType {
    ActivityPage: ActivityPage | null;
}

//Components
interface event {
    title: string;
    description: string;
    who: string;
    location: string;
    image: ImageData;
    date: string;
    startingtime: string;
    endingtime: string;
    link: string;
}

//The full page
interface ActivityPage {
    title1: string;
    events: event[]; 
    title2: string;
}

export const DataContext = createContext<DataContextType>({ ActivityPage: null});

interface ActivityPageProviderProps {
  children: ReactNode;
}

const ActivityPageProvider: React.FC<ActivityPageProviderProps> = ({ children }) => {
  const [ActivityPage, setActivityPage] = useState<ActivityPage | null>(null);

  useEffect(() => {
    axios
    .get( `${source}/activity-page?populate[events][populate]=image`)
      .then((response) => {
        console.log("Strapi response activity:", response.data.data);
        setActivityPage(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ ActivityPage }}>
      {children}
    </DataContext.Provider>
  );
};

export default ActivityPageProvider;