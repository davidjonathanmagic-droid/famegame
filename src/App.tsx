import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TC6Kl3xQuiz from "./pages/TC6Kl3xQuiz";
import JC2Mw3gResult from "./pages/JC2Mw3gResult";
import Z3U5Bl8tAnswer from "./pages/Z3U5Bl8tAnswer";
import TS7Ue8cReveal from "./pages/TS7Ue8cReveal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Consolidated standalone pages */}
          <Route path="/TC6Kl3x" element={<TC6Kl3xQuiz />} />
          <Route path="/JC2Mw3g" element={<JC2Mw3gResult />} />
          <Route path="/Z3U5Bl8t" element={<Z3U5Bl8tAnswer />} />
          <Route path="/TS7Ue8c" element={<TS7Ue8cReveal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
