import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgGilcaseCases from "@/assets/img-gilcase-cases.jpg";
import imgGilcaseSuportes from "@/assets/img-gilcase-suportes.jpg";
import imgGilcaseTotens from "@/assets/img-gilcase-totens.jpg";

import imgParametrizzeFachada from "@/assets/img-parametrizze-fachada.jpg";
import imgParametrizzeMobiliario from "@/assets/img-parametrizze-mobiliario.jpg";
import imgParametrizzeDivisoria from "@/assets/img-parametrizze-divisoria.jpg";

import imgGourmetizzeChurrasqueira from "@/assets/img-gourmetizze-churrasqueira.jpg";
import imgGourmetizzeUtensilios from "@/assets/img-gourmetizze-utensilios.jpg";
import imgGourmetizzeEstrutura from "@/assets/img-gourmetizze-estrutura.jpg";

import imgComicpetsCasinha from "@/assets/img-comicpets-casinha.jpg";
import imgComicpetsComedouro from "@/assets/img-comicpets-comedouro.jpg";
import imgComicpetsBrinquedo from "@/assets/img-comicpets-brinquedo.jpg";

import imgDesignkidsMesa from "@/assets/img-designkids-mesa.jpg";
import imgDesignkidsEstante from "@/assets/img-designkids-estante.jpg";
import imgDesignkidsBrinquedo from "@/assets/img-designkids-brinquedo.jpg";

import logoGilCase from "@/assets/logo-gilcase-transparent.png";
const logoParametrizze = "/lovable-uploads/ea1780e5-8545-48a9-aaa9-051f623724db.png";
const logoGourmetizze = "/lovable-uploads/40176074-eed2-4555-94a3-940b9c014213.png";
const logoComicpets = "/lovable-uploads/868a8eaf-cc9a-4482-9f91-ff11d7873809.png";
const logoDesignkids = "/lovable-uploads/16ad92e4-d27b-4d97-a111-5d128e486b17.png";

interface Brand {
  name: string;
  logo: string;
  href: string;
  tagline: string;
  images: string[];
}

const brands: Brand[] = [
  {
    name: "Gil Cases & Suportes",
    logo: logoGilCase,
    href: "/gil-cases",
    tagline: "Cases e suportes profissionais sob medida",
    images: [imgGilcaseCases, imgGilcaseSuportes, imgGilcaseTotens],
  },
  {
    name: "Parametrizze",
    logo: logoParametrizze,
    href: "/parametrizze",
    tagline: "Design paramétrico e fabricação CNC",
    images: [imgParametrizzeFachada, imgParametrizzeMobiliario, imgParametrizzeDivisoria],
  },
  {
    name: "Gourmetizze",
    logo: logoGourmetizze,
    href: "/gourmetizze",
    tagline: "Produtos gourmet em corte a laser",
    images: [imgGourmetizzeChurrasqueira, imgGourmetizzeUtensilios, imgGourmetizzeEstrutura],
  },
  {
    name: "Comicpets",
    logo: logoComicpets,
    href: "/comicpets",
    tagline: "Produtos criativos para o mercado pet",
    images: [imgComicpetsCasinha, imgComicpetsComedouro, imgComicpetsBrinquedo],
  },
  {
    name: "Design Kids",
    logo: logoDesignkids,
    href: "/design-kids",
    tagline: "Mobiliário infantil com design criativo",
    images: [imgDesignkidsMesa, imgDesignkidsEstante, imgDesignkidsBrinquedo],
  },
];

const BrandShowcaseCarousel = () => {
  const [activeBrand, setActiveBrand] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const brand = brands[activeBrand];

  // Auto-rotate images
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeBrand]);

  const handleBrandChange = (index: number) => {
    setActiveBrand(index);
    setActiveImage(0);
  };

  const handlePrev = () => {
    setActiveBrand((prev) => (prev - 1 + brands.length) % brands.length);
    setActiveImage(0);
  };

  const handleNext = () => {
    setActiveBrand((prev) => (prev + 1) % brands.length);
    setActiveImage(0);
  };

  return (
    <section ref={ref} className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Conheça Nossas Marcas
          </h2>
        </motion.div>

        {/* Brand tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 md:gap-3 mb-8 flex-wrap"
        >
          {brands.map((b, i) => (
            <button
              key={b.name}
              onClick={() => handleBrandChange(i)}
              className={`relative px-4 py-2 rounded-sm text-xs md:text-sm font-medium uppercase tracking-wider transition-all duration-300 border ${
                activeBrand === i
                  ? "bg-accent text-accent-foreground border-accent shadow-md"
                  : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {b.name}
            </button>
          ))}
        </motion.div>

        {/* Main showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-stretch"
        >
          {/* Image area */}
          <div className="relative aspect-[16/9] lg:aspect-auto rounded-sm overflow-hidden bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeBrand}-${activeImage}`}
                src={brand.images[activeImage]}
                alt={`${brand.name} - Imagem ${activeImage + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Image dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {brand.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeImage === i
                      ? "bg-accent scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Nav arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Brand info sidebar */}
          <div className="flex flex-col justify-between bg-card border border-border rounded-sm p-6">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBrand}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="w-20 h-20 rounded-sm overflow-hidden mb-4" style={{ backgroundColor: "#8B7355" }}>
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 uppercase">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{brand.tagline}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2 my-5">
              {brand.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-sm overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === i ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <Link
              to={brand.href}
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
            >
              Explorar {brand.name}
              <ChevronRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcaseCarousel;
