import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname;
    
    // Lista de domínios ou padrões que podem aparecer no path devido a compartilhamento de links
    const domains = ["gilen.com.br", "gil.com.br", "gilenindustrial.com.br", "www.gilen.com.br"];
    
    for (const domain of domains) {
      if (path.includes(domain)) {
        // Extrai tudo o que vem depois do domínio
        // Ex: /www.gilen.com.br/gil-cases/produtos -> /gil-cases/produtos
        const parts = path.split(domain);
        const afterDomain = parts[parts.length - 1];
        
        if (afterDomain && afterDomain !== path) {
          setRedirectPath(afterDomain.startsWith("/") ? afterDomain : "/" + afterDomain);
          return;
        }
      }
    }

    console.error("404 Error: User attempted to access non-existent route:", path);
  }, [location.pathname]);

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Página não encontrada</p>
        <p className="mb-6 text-sm text-muted-foreground max-w-xs mx-auto">
          O link acessado parece estar incorreto ou a página foi movida.
        </p>
        <a href="/" className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Voltar para o Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
