import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ArticleProvider from './strapi-data/ArticleProvider.tsx';
import CaseProvider from './strapi-data/CaseProvider.tsx';
import BookPageProvider from './strapi-data/BookPageProvider.tsx';


createRoot(document.getElementById("root")!).render(
  <ArticleProvider>  
    <CaseProvider>  
        <BookPageProvider>  
            <App />
        </BookPageProvider>  
    </CaseProvider>  
  </ArticleProvider>
);
