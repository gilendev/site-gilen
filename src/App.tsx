import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
