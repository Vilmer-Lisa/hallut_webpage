import React, { useContext } from 'react';
import { DataContext } from '../strapi-data/ArticleProvider'; 

const Article: React.FC = () => {
  const { articles } = useContext(DataContext);

  return (
    <div className="p-4">
      <ul className="list-disc pl-6">
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Article;
