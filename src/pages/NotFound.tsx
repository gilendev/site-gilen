import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  useEffect(() => {
    // Lógica para detectar se o domínio está dentro do path (ex: /gilen.com.br/...)
    const path = location.pathname;
    const domains = ["gilen.com.br", "gil.com.br", "gilenindustrial.com.br"];
    
    for (const domain of domains) {
      if (path.includes(domain)) {
        // Remove o domínio e tudo o que vem antes dele do path
        const newPath = path.split(domain)[1] || "/";
        setRedirectPath(newPath);
        return;
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

export default NotFound;
