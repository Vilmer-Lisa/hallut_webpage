import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface ImageData {
  url:string; 
}

interface Case {
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
}

interface DataContextType {
  cases: Case[];
}

export const DataContext = createContext<DataContextType>({ cases: [] });

interface CaseProviderProps {
  children: ReactNode;
}

const CaseProvider: React.FC<CaseProviderProps> = ({ children }) => {
  const [cases, setCases] = useState<Case[]>([]);
  console.log("cases:", cases); 
  useEffect(() => {
    axios
    .get('http://localhost:1337/api/cases?populate=image')
      .then((response) => {
        console.log("Strapi response case:", response.data.data);
        setCases(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ cases }}>
      {children}
    </DataContext.Provider>
  );
};

export default CaseProvider;
