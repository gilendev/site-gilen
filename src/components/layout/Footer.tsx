import { Link } from "react-router-dom";
import logoGilen from "@/assets/logo-gilen.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Technical line */}
      <div className="technical-line w-full" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoGilen} alt="GILEN Industrial" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Engenharia, precisão e soluções industriais sob medida.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Navegação
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Empresa", href: "/empresa" },
                { label: "Soluções", href: "/solucoes" },
                { label: "Projetos", href: "/projetos" },
                { label: "Tecnologia", href: "/tecnologia" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Marcas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Nossas Marcas
            </h4>
            <div className="flex flex-col gap-2">
              {["PARAMETRIZZE", "GOURMETIZZE", "COMICPETS", "DESIGN KIDS"].map((brand) => (
                <span key={brand} className="text-sm text-primary-foreground/50">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contato
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/50">
              <Link to="/contato" className="hover:text-primary-foreground transition-colors">
                Fale Conosco
              </Link>
              <a href="tel:01122413047" className="hover:text-primary-foreground transition-colors">(11) 2241-3047</a>
              <a href="tel:01121437721" className="hover:text-primary-foreground transition-colors">(11) 2143-7721</a>
              <a href="https://wa.me/5511968756430?text=Falar%20com%20a%20Gilen%20Industrial" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">(11) 96875-6430 (WhatsApp)</a>
              <span>contato@gilenindustrial.com.br</span>
              <span>gil@gilcase.com.br</span>
              <p className="mt-2 text-primary-foreground/40 text-xs">R. Cirene de Oliveira Laet, 815 - Vila Nilo, São Paulo - SP, 02279-010</p>
              <p className="text-primary-foreground/40 text-xs">Seg. à Sex. 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} GILEN Industrial. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Engenharia · Precisão · Inovação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
