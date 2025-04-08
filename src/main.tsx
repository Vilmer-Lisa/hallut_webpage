import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ArticleProvider from './strapi-data/ArticleProvider.tsx';
import CaseProvider from './strapi-data/CaseProvider.tsx';

createRoot(document.getElementById("root")!).render(
  <ArticleProvider>  
    <CaseProvider>  
      <App />
    </CaseProvider>  
  </ArticleProvider>
);
