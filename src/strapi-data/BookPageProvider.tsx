import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface ImageData {
  url:string; 
}
interface DataContextType {
  BookPage: BookPage | null;
}
interface KeyTheme {
  title: string;
  description: string;
}

interface Chapter {
  title: string;
  content: string;
}

interface BookPage {
  BookName: string;
  ShortDescription: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  keythemes: { title: string; text: string }[];
  chapters: { chapterNr: number; name: string; description: string }[];
  quotes: { quote: string; author: string }[];
  image: ImageData;
}

export const DataContext = createContext<DataContextType>({ BookPage: null});

interface BookPageProviderProps {
  children: ReactNode;
}

const BookPageProvider: React.FC<BookPageProviderProps> = ({ children }) => {
  const [BookPage, setBookPage] = useState<BookPage | null>(null);

  useEffect(() => {
    axios
    .get('http://localhost:1337/api/book-page?populate=*')
      .then((response) => {
        console.log("Strapi response case:", response.data.data);
        setBookPage(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Cases:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ BookPage }}>
      {children}
    </DataContext.Provider>
  );
};

export default BookPageProvider;
