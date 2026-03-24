import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  details?: string[];
}

interface BrandProductsLayoutProps {
  brandName: string;
  logoSrc: string;
  logoBgColor?: string;
  backTo: string;
  backLabel: string;
  seoTitle: string;
  seoDescription: string;
  seoPath: string;
  accentColorClass: string;
  categories: ProductCategory[];
}

const BrandProductsLayout = ({
  brandName,
  logoSrc,
  logoBgColor,
  backTo,
  backLabel,
  seoTitle,
  seoDescription,
  seoPath,
  accentColorClass,
  categories,
}: BrandProductsLayoutProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      let current = categories[0]?.id || "";
      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = cat.id;
          }
        }
      }
      setActiveCategory(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={seoTitle} description={seoDescription} path={seoPath} />

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border h-14">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-full">
          <Link to={backTo} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{backLabel}</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className={cn("w-8 h-8 rounded-sm overflow-hidden shrink-0", !logoBgColor && "bg-white")}
              style={logoBgColor ? { backgroundColor: logoBgColor } : undefined}>
              <img src={logoSrc} alt={brandName} className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-foreground tracking-wider text-xs sm:text-sm">{brandName} — Produtos</span>
          </div>
          <Link to="/contato" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-accent-blue text-accent-blue-foreground text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors">
            Orçamento
          </Link>
          <div className="sm:hidden w-8" />
        </div>
      </div>

      <div className="pt-14 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] border-r border-border bg-muted/30 overflow-y-auto">
          <div className="p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Categorias</h3>
            <nav className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className={cn(
                    "text-left px-3 py-2.5 rounded-sm text-sm font-medium transition-colors",
                    activeCategory === cat.id
                      ? `${accentColorClass} text-white`
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {cat.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile category bar */}
        <div className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-4 h-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-sm transition-colors",
                  activeCategory === cat.id
                    ? "text-accent-blue bg-accent-blue/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 lg:pt-0 pt-10">
          {categories.map((cat, index) => (
            <section key={cat.id} id={cat.id} className={cn("py-16 md:py-24 px-4 lg:px-12", index % 2 === 1 && "bg-muted/30")}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-4xl">
                  <span className={cn("text-xs font-semibold uppercase tracking-[0.2em] mb-3 block", `text-accent-blue`)}>
                    {brandName}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{cat.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="rounded-sm overflow-hidden">
                      <img src={cat.image} alt={cat.title} className="w-full h-64 md:h-80 object-cover" />
                    </div>
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-justify">{cat.description}</p>
                      {cat.details && cat.details.length > 0 && (
                        <ul className="space-y-2">
                          {cat.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", accentColorClass)} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        to="/contato"
                        className={cn(
                          "inline-flex items-center gap-2 mt-6 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-white",
                          accentColorClass, `hover:opacity-90`
                        )}
                      >
                        Solicitar Orçamento
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default BrandProductsLayout;
