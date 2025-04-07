import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  [key: string]: any; 
}

interface DataContextType {
  articles: Article[];
}

export const DataContext = createContext<DataContextType>({ articles: [] });

interface ArticleProviderProps {
  children: ReactNode;
}

const ArticleProvider: React.FC<ArticleProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/articles')
      .then((response) => {
        console.log("Strapi response:", response.data.data);
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ articles }}>
      {children}
    </DataContext.Provider>
  );
};

export default ArticleProvider;
