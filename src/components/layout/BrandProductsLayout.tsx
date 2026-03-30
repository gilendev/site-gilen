import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, X, ShoppingBag, Grid3X3, LayoutGrid, SlidersHorizontal, Eye, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaWhatsapp } from "react-icons/fa";
import BrandNavbar, { BrandNavSection } from "@/components/layout/BrandNavbar";

export interface ProductItem {
  id: string;
  name: string;
  image: string;
  images?: string[];
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
  wrapperClassName?: string;
  categories: ProductCategory[];
  products: ProductItem[];
  navSections: BrandNavSection[];
  heroBanner?: React.ReactNode;
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
  wrapperClassName,
  categories,
  products,
  navSections,
  heroBanner,
}: BrandProductsLayoutProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "todos" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const whatsappMessage = `Olá! Gostaria de saber mais sobre os produtos ${brandName}.`;
  const whatsappUrl = `https://wa.me/5511968756430?text=${encodeURIComponent(whatsappMessage)}`;

  // Mobile: navbar is ~88px (h-14 + h-10), Desktop: ~128px (h-20 + h-12)
  const topOffsetMobile = "88px";
  const topOffsetDesktop = "128px";

  return (
    <div className={cn("min-h-screen bg-background", wrapperClassName)}>
      <SEOHead title={seoTitle} description={seoDescription} path={seoPath} />

      <BrandNavbar
        brandName={brandName}
        logoSrc={logoSrc}
        logoBgColor={logoBgColor}
        backTo={backTo}
        backLabel={backLabel}
        sections={navSections}
      />

      {/* Search Bar */}
      <div className="fixed top-[56px] md:top-[128px] md:top-[128px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-2 flex items-center gap-2 sm:gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2 bg-muted border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X size={14} />
              </button>
            )}
          </div>
          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className={cn(
              "lg:hidden w-9 h-9 flex items-center justify-center rounded-sm border transition-colors",
              mobileFilterOpen ? "bg-accent-blue text-accent-blue-foreground border-accent-blue" : "border-border text-muted-foreground"
            )}
          >
            <Filter size={14} />
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => setViewMode("grid")} className={cn("w-8 h-8 flex items-center justify-center rounded-sm transition-colors", viewMode === "grid" ? "bg-accent-blue text-accent-blue-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              <Grid3X3 size={14} />
            </button>
            <button onClick={() => setViewMode("large")} className={cn("w-8 h-8 flex items-center justify-center rounded-sm transition-colors", viewMode === "large" ? "bg-accent-blue text-accent-blue-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              <LayoutGrid size={14} />
            </button>
          </div>
        </div>

        {/* Mobile category filter strip */}
        {mobileFilterOpen && (
          <div className="lg:hidden border-t border-border/50 overflow-x-auto scrollbar-hide bg-muted/50">
            <div className="flex items-center gap-1.5 px-3 py-2 min-w-max">
              <button
                onClick={() => { setActiveCategory("todos"); setMobileFilterOpen(false); }}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-full transition-all",
                  activeCategory === "todos"
                    ? `${accentColorClass} text-white`
                    : "bg-background border border-border text-muted-foreground"
                )}
              >
                Todos ({products.length})
              </button>
              {categories.map((cat) => {
                const count = products.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setMobileFilterOpen(false); }}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-full transition-all",
                      activeCategory === cat.id
                        ? `${accentColorClass} text-white`
                        : "bg-background border border-border text-muted-foreground"
                    )}
                  >
                    {cat.title} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="pt-[100px] md:pt-[172px] md:pt-[172px] flex min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-172px)]">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-72 shrink-0 sticky top-[172px] h-[calc(100vh-172px)] border-r border-border/50 bg-gradient-to-b from-muted/50 to-background flex-col overflow-y-auto">
          <div className="p-6">
            {/* Brand Hero in Sidebar */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-graphite to-graphite/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--accent-blue)/0.15),transparent_70%)]" />
              <div className="relative z-10">
                <div className={cn("w-12 h-12 rounded-xl overflow-hidden mb-3 ring-2 ring-white/10", !logoBgColor && "bg-white")}
                  style={logoBgColor ? { backgroundColor: logoBgColor } : undefined}>
                  <img src={logoSrc} alt={brandName} className="w-full h-full object-contain p-1" />
                </div>
                <h2 className="text-primary-foreground font-bold text-sm">{brandName}</h2>
                <p className="text-primary-foreground/40 text-xs mt-1">{products.length} produtos disponíveis</p>
              </div>
            </div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
              <SlidersHorizontal size={12} />
              Categorias
            </h3>

            <nav className="flex flex-col gap-1">
              <button
                onClick={() => setActiveCategory("todos")}
                className={cn(
                  "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group",
                  activeCategory === "todos"
                    ? `${accentColorClass} text-white shadow-lg shadow-accent-blue/20`
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                )}
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag size={14} />
                  Todos
                </span>
                <span className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  activeCategory === "todos" ? "bg-white/20" : "bg-muted"
                )}>{products.length}</span>
              </button>
              {categories.map((cat) => {
                const count = products.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group",
                      activeCategory === cat.id
                        ? `${accentColorClass} text-white shadow-lg shadow-accent-blue/20`
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                    )}
                  >
                    {cat.title}
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full",
                      activeCategory === cat.id ? "bg-white/20" : "bg-muted"
                    )}>{count}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sidebar CTA */}
          <div className="mt-auto p-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/20">
              <p className="text-foreground font-semibold text-xs mb-1">Precisa de ajuda?</p>
              <p className="text-muted-foreground text-[11px] mb-3">Fale com um especialista agora</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider rounded-lg text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <FaWhatsapp size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Hero Banner */}
          {heroBanner && (
            <div className="px-3 sm:px-4 lg:px-8 pt-4 sm:pt-6">
              {heroBanner}
            </div>
          )}
          {/* Results header */}
          <div className="px-3 sm:px-4 lg:px-8 py-3 sm:py-5 border-b border-border/50 bg-background sticky top-[100px] md:top-[172px] md:top-[172px] z-30">
            <h1 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
              {activeCategory === "todos"
                ? "Todos os Produtos"
                : categories.find(c => c.id === activeCategory)?.title || "Produtos"}
              <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {filteredProducts.length}
              </span>
            </h1>
          </div>

          {/* Product Grid */}
          <div className="px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 sm:py-24">
                <ShoppingBag className="mx-auto text-muted-foreground/30 mb-4" size={40} />
                <p className="text-muted-foreground font-medium text-sm sm:text-base">Nenhum produto encontrado</p>
                <p className="text-muted-foreground/60 text-xs sm:text-sm mt-1">Tente ajustar o filtro ou a busca</p>
              </div>
            ) : (
              <motion.div
                layout
                className={cn(
                  "grid gap-3 sm:gap-4",
                  viewMode === "grid"
                    ? "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                )}
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      onClick={() => setSelectedProduct(product)}
                      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent-blue/30 hover:shadow-xl hover:shadow-accent-blue/5 transition-all duration-500 cursor-pointer"
                    >
                      {/* Image */}
                      <div className={cn(
                        "relative overflow-hidden bg-gradient-to-br from-muted to-muted/50",
                        viewMode === "large" ? "aspect-[4/3]" : "aspect-square"
                      )}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Quick actions on hover - desktop only */}
                        <div className="hidden sm:flex absolute bottom-3 left-3 right-3 gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/95 backdrop-blur-sm text-graphite text-[11px] font-semibold uppercase tracking-wider rounded-lg hover:bg-white transition-colors"
                          >
                            <Eye size={13} />
                            Detalhes
                          </button>
                          <a
                            href={`https://wa.me/5511968756430?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${product.name} (${brandName})`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center w-10 bg-[#25D366] rounded-lg hover:bg-[#20bd5a] transition-colors"
                          >
                            <FaWhatsapp size={15} className="text-white" />
                          </a>
                        </div>

                        {/* Category tag */}
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/40 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider rounded-md">
                            {categories.find(c => c.id === product.category)?.title}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-3 sm:p-4">
                        <h3 className="text-xs sm:text-sm font-bold text-foreground line-clamp-2 group-hover:text-accent-blue transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 line-clamp-2 leading-relaxed hidden sm:block">
                          {product.description}
                        </p>
                        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border/50 flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] font-semibold text-accent-blue uppercase tracking-wider">
                            Sob consulta
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                            Ver mais <ArrowRight size={9} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </main>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card w-full sm:max-w-3xl sm:rounded-2xl rounded-t-2xl overflow-hidden shadow-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[300px] bg-muted">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider rounded-md">
                      {categories.find(c => c.id === selectedProduct.category)?.title}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue">{brandName}</span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mt-2 leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3 sm:mt-4">
                      {selectedProduct.description}
                    </p>

                    <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <span className="text-muted-foreground">Fabricação sob medida</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <span className="text-muted-foreground">Materiais de alta qualidade</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <span className="text-muted-foreground">Garantia de fábrica</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-border/50 space-y-3">
                    <a
                      href={`https://wa.me/5511968756430?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${selectedProduct.name} (${brandName})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                    >
                      <FaWhatsapp size={16} />
                      Solicitar Orçamento via WhatsApp
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
