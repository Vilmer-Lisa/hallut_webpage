import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Case {
  title: string;
  subheading: string;
  text: string;
  firstpage: boolean;
}

interface DataContextType {
  Cases: Case[];
}

export const DataContext = createContext<DataContextType>({ Cases: [] });

interface CaseProviderProps {
  children: ReactNode;
}

const CaseProvider: React.FC<CaseProviderProps> = ({ children }) => {
  const [Cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/cases')
      .then((response) => {
        console.log("Strapi response:", response.data.data);
        setCases(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ Cases }}>
      {children}
    </DataContext.Provider>
  );
};

export default CaseProvider;
