import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface ImageData {
  url:string; 
}

interface BookPage {
  BookName: string;
  Shortdescription: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  keythemes: string; 
  chapters: string;
  image: ImageData;
}

interface DataContextType {
  BookPages: BookPage[];
}

export const DataContext = createContext<DataContextType>({ BookPages: [] });

interface BookPageProviderProps {
  children: ReactNode;
}

const BookPageProvider: React.FC<BookPageProviderProps> = ({ children }) => {
  const [BookPages, setBookPages] = useState<BookPage[]>([]);
  console.log("BookPages:", BookPages); 
  useEffect(() => {
    axios
    .get('http://localhost:1337/api/BookPage?populate=image')
      .then((response) => {
        console.log("Strapi response BookPage:", response.data.data);
        setBookPages(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching BookPages:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ BookPages }}>
      {children}
    </DataContext.Provider>
  );
};

export default BookPageProvider;
