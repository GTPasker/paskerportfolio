
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Showcase from "./pages/Showcase";
import NotFound from "./pages/NotFound";
import AccessibilityPanel from "./components/AccessibilityPanel";
import LanguageAttributeSetter from "./components/LanguageAttributeSetter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageAttributeSetter />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#F6C90E] focus:text-[#3A4750] focus:rounded-md"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AccessibilityPanel />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/showcase" element={<Showcase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
