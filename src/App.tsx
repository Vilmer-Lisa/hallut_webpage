
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Book from "./pages/AboutBook";
import Author from "./pages/Author";
import Mentioned from "./pages/explore";
import Examples from "./pages/Examples";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/strapi-components/ScrollTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/aboutme" element={<Author />} />
            <Route path="/aboutbook" element={<Book />} />
            <Route path="/explore" element={<Mentioned />} />
            <Route path="/activities" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
