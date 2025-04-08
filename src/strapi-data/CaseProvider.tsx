import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Case {
  id: number;
  title: string;
  subheading: string;
  text: string;
  firstpage: boolean;
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

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/cases')
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
