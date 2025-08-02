import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const source = "https://proud-canvas-05b17cf098.strapiapp.com/api"

interface DataContextType {
    Footer: Footer | null;
}

//The full page
interface Footer {
    title: string;
    description: string;
    quicklinkstitle: string;
    quicklink1: string;
    quicklink2: string;
    quicklink3: string;
    quicklink4: string;
    quicklink5: string;
    contacttitle: string;
    linkedin: string;
    email: string;
    bottomtext: string; 
}

export const DataContext = createContext<DataContextType>({ Footer: null});

interface FooterProviderProps {
  children: ReactNode;
}

const FooterProvider: React.FC<FooterProviderProps> = ({ children }) => {
  const [Footer, setFooter] = useState<Footer | null>(null);

  useEffect(() => {
    axios
    .get(`${source}/bottom-section?populate=*`)
      .then((response) => {
        console.log("Strapi response Footer:", response.data.data);
        setFooter(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ Footer }}>
      {children}
    </DataContext.Provider>
  );
};

export default FooterProvider;