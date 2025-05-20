import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HomePageProvider from './strapi-data/HomePageProvider.tsx';
import CaseProvider from './strapi-data/CaseProvider.tsx';
import BookPageProvider from './strapi-data/BookPageProvider.tsx';
import ActivityPageProvider from './strapi-data/ActivityPageProvider.tsx';
import AboutMePageProvider from './strapi-data/AboutMePageProvider.tsx';
import ExplorePageProvider from './strapi-data/ExplorePageProvider.tsx';
import FooterProvider from './strapi-data/FooterProvider.tsx';


createRoot(document.getElementById("root")!).render(
  <FooterProvider>
    <ExplorePageProvider>
      <AboutMePageProvider>  
        <ActivityPageProvider>  
          <HomePageProvider>  
            <CaseProvider>  
                <BookPageProvider>  
                    <App />
                </BookPageProvider>  
            </CaseProvider>  
          </HomePageProvider>
        </ActivityPageProvider>  
      </AboutMePageProvider>
    </ExplorePageProvider>  
  </FooterProvider>
);
