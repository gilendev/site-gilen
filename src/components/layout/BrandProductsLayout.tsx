import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, X, Eye, Heart, SlidersHorizontal, ChevronRight, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaWhatsapp } from "react-icons/fa";

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
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "todos" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const whatsappMessage = `Olá! Gostaria de saber mais sobre os produtos ${brandName}.`;
  const whatsappUrl = `https://wa.me/5511968756430?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(250,60%,65%)] via-[hsl(260,55%,60%)] to-[hsl(270,50%,55%)]">
      <SEOHead title={seoTitle} description={seoDescription} path={seoPath} />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-4 h-16">
          <Link to={backTo} className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm group shrink-0">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2.5 shrink-0">
            <div className={cn("w-9 h-9 rounded-lg overflow-hidden ring-1 ring-border", !logoBgColor && "bg-white")}
              style={logoBgColor ? { backgroundColor: logoBgColor } : undefined}>
              <img src={logoSrc} alt={brandName} className="w-full h-full object-contain p-0.5" />
            </div>
            <span className="font-bold text-foreground tracking-wide text-sm hidden sm:block">{brandName}</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-muted/50 border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(250,60%,65%)]/40 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/40 hover:text-foreground">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
          >
            <FaWhatsapp size={14} />
            Orçamento
          </a>
        </div>

        {/* Category Pills */}
        <div className="border-t border-border/50 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveCategory("todos")}
                className={cn(
                  "px-5 py-2 text-xs font-semibold whitespace-nowrap rounded-full transition-all border",
                  activeCategory === "todos"
                    ? "bg-[hsl(250,60%,65%)] text-white border-transparent shadow-md shadow-[hsl(250,60%,65%)]/25"
                    : "text-foreground bg-white border-border hover:bg-muted/50"
                )}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-5 py-2 text-xs font-semibold whitespace-nowrap rounded-full transition-all border",
                    activeCategory === cat.id
                      ? "bg-[hsl(250,60%,65%)] text-white border-transparent shadow-md shadow-[hsl(250,60%,65%)]/25"
                      : "text-foreground bg-white border-border hover:bg-muted/50"
                  )}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden">
          <div className="flex min-h-[calc(100vh-12rem)]">
            {/* Sidebar */}
            <aside className="hidden lg:flex w-72 shrink-0 border-r border-border/50 flex-col p-6 overflow-y-auto">
              {/* Categories Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                  <SlidersHorizontal size={14} />
                  Categorias
                </h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveCategory("todos")}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between",
                      activeCategory === "todos"
                        ? "bg-[hsl(250,60%,65%)] text-white"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    <span>Todos os Produtos</span>
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full",
                      activeCategory === "todos" ? "bg-white/20" : "bg-muted text-muted-foreground"
                    )}>{products.length}</span>
                  </button>
                  {categories.map((cat) => {
                    const count = products.filter(p => p.category === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between",
                          activeCategory === cat.id
                            ? "bg-[hsl(250,60%,65%)] text-white"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        )}
                      >
                        <span>{cat.title}</span>
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded-full",
                          activeCategory === cat.id ? "bg-white/20" : "bg-muted text-muted-foreground"
                        )}>{count}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Brand Info */}
              <div className="mb-8 p-4 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/30 border border-border/50">
                <div className={cn("w-12 h-12 rounded-xl overflow-hidden mb-3 ring-1 ring-border", !logoBgColor && "bg-white")}
                  style={logoBgColor ? { backgroundColor: logoBgColor } : undefined}>
                  <img src={logoSrc} alt={brandName} className="w-full h-full object-contain p-1" />
                </div>
                <h4 className="text-sm font-bold text-foreground">{brandName}</h4>
                <p className="text-xs text-muted-foreground mt-1">{products.length} produtos disponíveis</p>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[hsl(250,60%,65%)]/10 to-[hsl(270,50%,55%)]/10 border border-[hsl(250,60%,65%)]/20">
                  <Sparkles size={20} className="text-[hsl(250,60%,65%)] mb-2" />
                  <p className="text-foreground font-bold text-sm mb-1">Precisa de ajuda?</p>
                  <p className="text-muted-foreground text-xs mb-4">Fale com um especialista agora</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-semibold uppercase tracking-wider rounded-xl text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                  >
                    <FaWhatsapp size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="flex-1 min-w-0 p-6">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    {activeCategory === "todos"
                      ? "Todos os Produtos"
                      : categories.find(c => c.id === activeCategory)?.title || "Produtos"}
                  </h1>
                  <p className="text-xs text-muted-foreground mt-1">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
                  </p>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-24">
                  <Search className="mx-auto text-muted-foreground/20 mb-4" size={56} />
                  <p className="text-foreground font-semibold text-lg">Nenhum produto encontrado</p>
                  <p className="text-muted-foreground text-sm mt-1">Tente ajustar o filtro ou a busca</p>
                </div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className="group relative bg-white rounded-2xl border border-border/60 hover:border-[hsl(250,60%,65%)]/30 hover:shadow-xl hover:shadow-[hsl(250,60%,65%)]/8 transition-all duration-400 overflow-hidden"
                      >
                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className={cn(
                            "absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-sm",
                            favorites.has(product.id)
                              ? "bg-[hsl(250,60%,65%)] text-white shadow-[hsl(250,60%,65%)]/30"
                              : "bg-white/90 backdrop-blur-sm text-muted-foreground hover:text-[hsl(250,60%,65%)] hover:bg-white"
                          )}
                        >
                          <Heart size={15} fill={favorites.has(product.id) ? "currentColor" : "none"} />
                        </button>

                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/40 to-muted/20 p-6">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Info */}
                        <div className="p-5">
                          {/* Category Badge */}
                          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(250,60%,65%)] bg-[hsl(250,60%,65%)]/10 rounded-full mb-3">
                            {categories.find(c => c.id === product.category)?.title}
                          </span>

                          <h3 className="text-sm font-bold text-foreground line-clamp-2 mb-2 group-hover:text-[hsl(250,60%,65%)] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                            {product.description}
                          </p>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <a
                              href={`https://wa.me/5511968756430?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${product.name} (${brandName})`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[hsl(250,60%,65%)] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-[hsl(250,55%,55%)] transition-all hover:shadow-lg hover:shadow-[hsl(250,60%,65%)]/25"
                            >
                              <FaWhatsapp size={13} />
                              Pedir Cotação
                            </a>
                            <button
                              onClick={() => setSelectedProduct(product)}
                              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-[hsl(250,60%,65%)] hover:border-[hsl(250,60%,65%)]/30 hover:bg-[hsl(250,60%,65%)]/5 transition-all"
                            >
                              <Eye size={15} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative bg-gradient-to-br from-muted/40 to-muted/20 p-8 flex items-center justify-center">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="max-w-full max-h-80 object-contain" />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-sm"
                  >
                    <X size={16} />
                  </button>
                  <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-[hsl(250,60%,65%)]/10 text-[hsl(250,60%,65%)] text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {categories.find(c => c.id === selectedProduct.category)?.title}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(250,60%,65%)]">{brandName}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mt-2 leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4 text-justify">
                      {selectedProduct.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {["Fabricação sob medida", "Materiais de alta qualidade", "Garantia de fábrica"].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full bg-[hsl(250,60%,65%)] shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                    <a
                      href={`https://wa.me/5511968756430?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${selectedProduct.name} (${brandName})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                    >
                      <FaWhatsapp size={16} />
                      Pedir Cotação via WhatsApp
                    </a>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="w-full py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors"
                    >
                      Voltar ao catálogo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppButton />
    </div>
  );
};

export default BrandProductsLayout;
