import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

export interface ProductItem {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  icon?: string;
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
  products: ProductItem[];
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
  products,
}: BrandProductsLayoutProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "todos" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const whatsappMessage = `Olá! Gostaria de saber mais sobre os produtos ${brandName}.`;
  const whatsappUrl = `https://wa.me/5511968756430?text=${encodeURIComponent(whatsappMessage)}`;

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
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#20bd5a] transition-colors"
          >
            Orçamento
          </a>
          <div className="sm:hidden w-8" />
        </div>
      </div>

      <div className="pt-14 flex min-h-[calc(100vh-3.5rem)]">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] border-r border-border bg-muted/30 flex-col overflow-y-auto">
          <div className="p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Categorias</h3>
            <nav className="flex flex-col gap-0.5">
              <button
                onClick={() => setActiveCategory("todos")}
                className={cn(
                  "text-left px-3 py-2.5 rounded-sm text-sm font-medium transition-colors flex items-center justify-between",
                  activeCategory === "todos"
                    ? `${accentColorClass} text-white`
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Todos os Produtos
                <span className="text-xs opacity-70">{products.length}</span>
              </button>
              {categories.map((cat) => {
                const count = products.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "text-left px-3 py-2.5 rounded-sm text-sm font-medium transition-colors flex items-center justify-between",
                      activeCategory === cat.id
                        ? `${accentColorClass} text-white`
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {cat.title}
                    <span className="text-xs opacity-70">{count}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sidebar CTA */}
          <div className="mt-auto p-5 border-t border-border">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("block text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-white bg-[#25D366] hover:bg-[#20bd5a]")}
            >
              Solicitar Orçamento
            </a>
          </div>
        </aside>

        {/* Mobile category bar */}
        <div className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-4 h-11">
            <button
              onClick={() => setActiveCategory("todos")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-full transition-colors",
                activeCategory === "todos"
                  ? `${accentColorClass} text-white`
                  : "text-muted-foreground hover:text-foreground bg-muted/50"
              )}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-full transition-colors",
                  activeCategory === cat.id
                    ? `${accentColorClass} text-white`
                    : "text-muted-foreground hover:text-foreground bg-muted/50"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 pt-12 lg:pt-0">
          {/* Search & results header */}
          <div className="px-4 lg:px-8 py-6 border-b border-border bg-muted/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {activeCategory === "todos"
                    ? "Todos os Produtos"
                    : categories.find(c => c.id === activeCategory)?.title || "Produtos"}
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
                </p>
              </div>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 text-sm rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent-blue"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="px-4 lg:px-8 py-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Nenhum produto encontrado.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg hover:border-accent-blue/30 transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {categories.find(c => c.id === product.category)?.title}
                      </span>
                      <h3 className="text-sm font-semibold text-foreground mt-1 line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{product.description}</p>
                      <a
                        href={`https://wa.me/5511968756430?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${product.name} (${brandName})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-1.5 mt-4 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider rounded-sm transition-colors text-white w-full justify-center",
                          "bg-[#25D366] hover:bg-[#20bd5a]"
                        )}
                      >
                        Solicitar Orçamento
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default BrandProductsLayout;
