import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Временно убираем роутинг из-за проблем с react-router-dom v7
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Простая навигация без роутера пока не исправим проблемы с react-router-dom v7
  const currentPath = window.location.pathname;

  let CurrentPage;
  switch (currentPath) {
    case "/about":
      CurrentPage = About;
      break;
    case "/pricing":
      CurrentPage = Pricing;
      break;
    case "/contact":
      CurrentPage = Contact;
      break;
    default:
      CurrentPage = Portfolio;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CurrentPage />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
