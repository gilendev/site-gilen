import { Link } from "react-router-dom";
import logoGilen from "@/assets/logo-gilen.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="technical-line w-full" />

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand */}
          <div>
            <img src={logoGilen} alt="GILEN Industrial" className="h-9 w-auto brightness-0 invert mb-3" />
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Engenharia, precisão e soluções industriais sob medida.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-primary-foreground/80">Navegação</h4>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "Empresa", href: "/empresa" },
                { label: "Soluções", href: "/solucoes" },
                { label: "Projetos", href: "/projetos" },
                { label: "Tecnologia", href: "/tecnologia" },
              ].map((item) => (
                <Link key={item.href} to={item.href} className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Marcas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-primary-foreground/80">Nossas Marcas</h4>
            <div className="flex flex-col gap-1.5">
              {["PARAMETRIZZE", "GOURMETIZZE", "COMICPETS", "DESIGN KIDS"].map((brand) => (
                <span key={brand} className="text-xs text-primary-foreground/50">{brand}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-primary-foreground/80">Contato</h4>
            <div className="flex flex-col gap-1 text-xs text-primary-foreground/50">
              <Link to="/contato" className="hover:text-primary-foreground transition-colors">Fale Conosco</Link>
              <a href="tel:01122413047" className="hover:text-primary-foreground transition-colors">(11) 2241-3047</a>
              <a href="https://wa.me/5511968756430" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">(11) 96875-6430</a>
              <span>contato@gilenindustrial.com.br</span>
              <p className="mt-1 text-primary-foreground/40 text-[10px]">R. Cirene de Oliveira Laet, 815 – Vila Nilo, SP</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[10px] text-primary-foreground/40">© {new Date().getFullYear()} GILEN Industrial. Todos os direitos reservados.</p>
          <p className="text-[10px] text-primary-foreground/40">Engenharia · Precisão · Inovação</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
