import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ChatBot from "@/components/ChatBot";
import Index from "./pages/Index";
import EmpresaPage from "./pages/EmpresaPage";
import SolucoesPage from "./pages/SolucoesPage";
import ProjetosPage from "./pages/ProjetosPage";
import TecnologiaPage from "./pages/TecnologiaPage";
import MarcasPage from "./pages/MarcasPage";
import ProjetosEspeciaisPage from "./pages/ProjetosEspeciaisPage";
import ContatoPage from "./pages/ContatoPage";
import ParametrizzePage from "./pages/ParametrizzePage";
import GourmetizzePage from "./pages/GourmetizzePage";
import ComicpetsPage from "./pages/ComicpetsPage";
import DesignKidsPage from "./pages/DesignKidsPage";
import GilCasesPage from "./pages/GilCasesPage";
import GilCasesProductsPage from "./pages/GilCasesProductsPage";
import ParametrizzeProductsPage from "./pages/ParametrizzeProductsPage";
import GourmetizzeProductsPage from "./pages/GourmetizzeProductsPage";
import ComicpetsProductsPage from "./pages/ComicpetsProductsPage";
import DesignKidsProductsPage from "./pages/DesignKidsProductsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" storageKey="gilen-theme">
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/empresa" element={<EmpresaPage />} />
              <Route path="/solucoes" element={<SolucoesPage />} />
              <Route path="/projetos" element={<ProjetosPage />} />
              <Route path="/tecnologia" element={<TecnologiaPage />} />
              <Route path="/marcas" element={<MarcasPage />} />
              <Route path="/projetos-especiais" element={<ProjetosEspeciaisPage />} />
              <Route path="/contato" element={<ContatoPage />} />
              <Route path="/parametrizze" element={<ParametrizzePage />} />
              <Route path="/gourmetizze" element={<GourmetizzePage />} />
              <Route path="/comicpets" element={<ComicpetsPage />} />
              <Route path="/design-kids" element={<DesignKidsPage />} />
              <Route path="/gil-cases" element={<GilCasesPage />} />
              {/* Brand product pages with optional category param */}
              <Route path="/gil-cases/produtos" element={<GilCasesProductsPage />} />
              <Route path="/gil-cases/produtos/:categoria" element={<GilCasesProductsPage />} />
              <Route path="/parametrizze/produtos" element={<ParametrizzeProductsPage />} />
              <Route path="/parametrizze/produtos/:categoria" element={<ParametrizzeProductsPage />} />
              <Route path="/gourmetizze/produtos" element={<GourmetizzeProductsPage />} />
              <Route path="/gourmetizze/produtos/:categoria" element={<GourmetizzeProductsPage />} />
              <Route path="/comicpets/produtos" element={<ComicpetsProductsPage />} />
              <Route path="/comicpets/produtos/:categoria" element={<ComicpetsProductsPage />} />
              <Route path="/design-kids/produtos" element={<DesignKidsProductsPage />} />
              <Route path="/design-kids/produtos/:categoria" element={<DesignKidsProductsPage />} />
              {/* Redirect legacy /totens-interativos to /gil-cases/produtos/totens */}
              <Route path="/totens-interativos" element={<Navigate to="/gil-cases/produtos/totens" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatBot />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
