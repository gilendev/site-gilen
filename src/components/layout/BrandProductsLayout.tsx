import { useState, useRef, useId, useEffect, useCallback } from "react";
import { Link, useSearchParams, useParams, useNavigate } from "react-router-dom";
import { ArrowRight, Search, X, ShoppingBag, Grid3X3, LayoutGrid, SlidersHorizontal, Eye, Filter, ChevronLeft, ChevronRight } from "lucide-react";
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
  imageAlt?: string;
  imageAlts?: string[];
  details?: string[];
  whatsappUrl?: string;
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
  canonicalPath?: string;
  ogImage?: string;
  whatsappUrl?: string;
  catalogCountLabel?: string;
  allProductsLabel?: string;
  accentColorClass: string;
  wrapperClassName?: string;
  categories: ProductCategory[];
  products: ProductItem[];
  navSections: BrandNavSection[];
  heroBanner?: React.ReactNode;
}

const normalizeSearch = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
const defaultDetails = ["Fabricação sob medida", "Materiais de alta qualidade", "Garantia de fábrica"];
const productContact = (product: ProductItem, brand: string) =>
  product.whatsappUrl ?? `https://wa.me/5511971927920?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${product.name} (${brand})`)}`;

const ModalGallery = ({ product, brandName, categories, whatsappUrl, onClose }: {
  product: ProductItem;
  brandName: string;
  categories: ProductCategory[];
  whatsappUrl: string;
  onClose: () => void;
}) => {
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const openerRef = useRef<HTMLElement | null>(null);
  const closeGallery = () => {
    dialogRef.current?.close();
    const opener = openerRef.current;
    const fallback = document.getElementById(`product-details-${product.id}`);
    (opener?.isConnected && opener !== document.body ? opener : fallback)?.focus({ preventScroll: true });
    onClose();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.body.style.overflow;
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <dialog ref={dialogRef} aria-labelledby={titleId} onCancel={(event) => { event.preventDefault(); closeGallery(); }} className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 text-foreground backdrop:bg-transparent">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
      onClick={closeGallery}
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
          <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[300px] bg-muted">
            <img src={allImages[currentImageIndex]} alt={product.imageAlts?.[currentImageIndex] ?? product.imageAlt ?? product.name} className={cn("w-full h-full", product.imageAlt ? "object-contain" : "object-cover")} />
            <button onClick={closeGallery} aria-label="Fechar detalhes" className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
              <X size={16} />
            </button>
            <div className="absolute bottom-3 left-3">
              <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider rounded-md">
                {categories.find(c => c.id === product.category)?.title}
              </span>
            </div>
            {allImages.length > 1 && (
              <>
                <button aria-label="Imagem anterior" onClick={() => setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                  <ChevronLeft size={16} />
                </button>
                <button aria-label="Próxima imagem" onClick={() => setCurrentImageIndex((prev) => (prev + 1) % allImages.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                  <ChevronRight size={16} />
                </button>
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  {allImages.map((_, i) => (
                    <button key={i} aria-label={`Ver imagem ${i + 1}`} aria-pressed={i === currentImageIndex} onClick={() => setCurrentImageIndex(i)} className={cn("w-2 h-2 rounded-full transition-all", i === currentImageIndex ? "bg-white scale-110" : "bg-white/50")} />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="p-5 sm:p-6 md:p-8 flex flex-col">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue">{brandName}</span>
              <h2 id={titleId} className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mt-2 leading-tight">{product.name}</h2>
              <p
                className="text-muted-foreground text-sm leading-relaxed mt-3 sm:mt-4"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                {product.description}
              </p>
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {(product.details ?? defaultDetails).map((detail) => (
                  <div className="flex items-center gap-3 text-sm" key={detail}><div className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" /><span className="text-muted-foreground">{detail}</span></div>
                ))}
              </div>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-border/50 space-y-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20">
                <FaWhatsapp size={16} />
                Solicitar orçamento
              </a>
              <button onClick={closeGallery} className="w-full py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors">Voltar ao catálogo</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </dialog>
  );
};

const ProductCard = ({ product, index, viewMode, brandName, categories, onSelect }: {
  product: ProductItem;
  index: number;
  viewMode: "grid" | "large";
  brandName: string;
  categories: ProductCategory[];
  onSelect: () => void;
}) => {
  const allImages = product.images && product.images.length > 1 ? product.images : [product.image];
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = allImages.length > 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      onClick={onSelect}
      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent-blue/30 hover:shadow-xl hover:shadow-accent-blue/5 transition-all duration-500 cursor-pointer h-full flex flex-col"
    >
      <div className={cn(
        "relative overflow-hidden bg-gradient-to-br from-muted to-muted/50",
        viewMode === "large" ? "aspect-[4/3]" : "aspect-square"
      )}>
        <img
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          src={allImages[imgIndex]}
          alt={product.imageAlts?.[imgIndex] ?? product.imageAlt ?? product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image navigation arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setImgIndex((prev) => (prev - 1 + allImages.length) % allImages.length); }}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setImgIndex((prev) => (prev + 1) % allImages.length); }}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight size={14} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                  className={cn("w-1.5 h-1.5 rounded-full transition-all", i === imgIndex ? "bg-white scale-125" : "bg-white/50")}
                />
              ))}
            </div>
          </>
        )}

        {/* Quick actions on hover - desktop only */}
        <div className="hidden sm:flex absolute bottom-3 left-3 right-3 gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => { e.stopPropagation(); onSelect(); }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/95 backdrop-blur-sm text-graphite text-[11px] font-semibold uppercase tracking-wider rounded-lg hover:bg-white transition-colors"
          >
            <Eye size={13} />
            Detalhes
          </button>
          <a
            href={productContact(product, brandName)}
            aria-label={`Solicitar orçamento de ${product.name}`}
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

      <div className="p-3 sm:p-4 flex flex-1 flex-col">
        <h3 className="text-xs sm:text-sm font-bold text-foreground line-clamp-2 group-hover:text-accent-blue transition-colors">
          <button type="button" id={`product-details-${product.id}`} onClick={(event) => { event.stopPropagation(); onSelect(); }} aria-label={`Ver detalhes: ${product.name}`} aria-haspopup="dialog" className="text-left">{product.name}</button>
        </h3>
        <p
          className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 line-clamp-2 leading-relaxed hidden sm:block"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          {product.description}
        </p>
        <div className="mt-auto pt-2 sm:pt-3 border-t border-border/50 flex items-center justify-between">
          <span className="text-[9px] sm:text-[10px] font-semibold text-accent-blue uppercase tracking-wider">
            Sob consulta
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
            Ver mais <ArrowRight size={9} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const BrandProductsLayout = ({
  brandName,
  logoSrc,
  logoBgColor,
  backTo,
  backLabel,
  seoTitle,
  seoDescription,
  seoPath,
  canonicalPath,
  ogImage,
  whatsappUrl: brandContact,
  catalogCountLabel = "produtos disponíveis",
  allProductsLabel = "Todos os Produtos",
  accentColorClass,
  wrapperClassName,
  categories,
  products,
  navSections,
  heroBanner,
}: BrandProductsLayoutProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoria } = useParams<{ categoria?: string }>();
  const navigate = useNavigate();
  const activeCategory = categories.some((category) => category.id === categoria) ? categoria : "todos";
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const selectedProduct = products.find((product) => product.id === searchParams.get("produto"));

  const handleCategoryChange = (id: string) => {
    setSearchQuery("");
    navigate(id === "todos" ? seoPath : `${seoPath}/${id}`);
  };

  const updateSelectedProduct = useCallback((id?: string) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      if (id) next.set("produto", id);
      else next.delete("produto");
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  const terms = normalizeSearch(searchQuery).trim().split(/\s+/).filter(Boolean);
  const filteredProducts = products.filter((product) => {
    const category = categories.find((item) => item.id === product.category);
    const searchable = normalizeSearch([product.name, product.description, category?.title, ...(product.details ?? [])].join(" "));
    return (activeCategory === "todos" || product.category === activeCategory) && terms.every((term) => searchable.includes(term));
  });

  const whatsappMessage = `Olá! Gostaria de saber mais sobre os produtos ${brandName}.`;
  const whatsappUrl = brandContact ?? `https://wa.me/5511971927920?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={cn("min-h-screen bg-background", wrapperClassName)}>
      <SEOHead title={seoTitle} description={seoDescription} path={canonicalPath ?? seoPath} ogImage={ogImage} />

      <BrandNavbar
        brandName={brandName}
        logoSrc={logoSrc}
        logoBgColor={logoBgColor}
        backTo={backTo}
        backLabel={backLabel}
        whatsappUrl={brandContact}
        sections={navSections}
      />

      {/* Search Bar */}
      <div id="todos" className="fixed top-[56px] md:top-[128px] left-0 right-0 z-[105] bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-2 flex items-center gap-2 sm:gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              aria-label="Buscar produtos"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2 bg-muted border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button aria-label="Limpar busca" onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X size={14} />
              </button>
            )}
          </div>
          {/* Mobile filter button */}
          <button
            aria-label="Filtrar por categoria" aria-expanded={mobileFilterOpen}
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className={cn(
              "lg:hidden w-9 h-9 flex items-center justify-center rounded-sm border transition-colors",
              mobileFilterOpen ? "bg-accent-blue text-accent-blue-foreground border-accent-blue" : "border-border text-muted-foreground"
            )}
          >
            <Filter size={14} />
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <button aria-label="Grade compacta" onClick={() => setViewMode("grid")} className={cn("w-8 h-8 flex items-center justify-center rounded-sm transition-colors", viewMode === "grid" ? "bg-accent-blue text-accent-blue-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              <Grid3X3 size={14} />
            </button>
            <button aria-label="Grade ampliada" onClick={() => setViewMode("large")} className={cn("w-8 h-8 flex items-center justify-center rounded-sm transition-colors", viewMode === "large" ? "bg-accent-blue text-accent-blue-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              <LayoutGrid size={14} />
            </button>
          </div>
        </div>

        {/* Mobile category filter strip */}
        {mobileFilterOpen && (
          <div className="lg:hidden border-t border-border/50 overflow-x-auto scrollbar-hide bg-muted/50">
            <div className="flex items-center gap-1.5 px-3 py-2 min-w-max">
              <button
                onClick={() => { handleCategoryChange("todos"); setMobileFilterOpen(false); }}
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
                    onClick={() => { handleCategoryChange(cat.id); setMobileFilterOpen(false); }}
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
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={cn("w-12 h-12 rounded-xl overflow-hidden mb-3 ring-2 ring-white/10", !logoBgColor && "bg-white")}
                  style={logoBgColor ? { backgroundColor: logoBgColor } : undefined}>
                  <img src={logoSrc} alt={brandName} className="w-full h-full object-contain p-1" />
                </div>
                <h2 className="text-primary-foreground font-bold text-sm">{brandName}</h2>
                <p className="text-primary-foreground/40 text-xs mt-1">{products.length} {catalogCountLabel}</p>
              </div>
            </div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
              <SlidersHorizontal size={12} />
              Categorias
            </h3>

            <nav className="flex flex-col gap-1">
              <button
                onClick={() => handleCategoryChange("todos")}
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
                    onClick={() => handleCategoryChange(cat.id)}
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
                Fale conosco
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
                ? allProductsLabel
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
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                      viewMode={viewMode}
                      brandName={brandName}
                      categories={categories}
                      onSelect={() => updateSelectedProduct(product.id)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </main>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ModalGallery
          key={selectedProduct.id}
          product={selectedProduct}
          brandName={brandName}
          categories={categories}
          whatsappUrl={productContact(selectedProduct, brandName)}
          onClose={() => updateSelectedProduct()}
        />
      )}

      <WhatsAppButton whatsappUrl={brandContact} />
    </div>
  );
};

export default BrandProductsLayout;
