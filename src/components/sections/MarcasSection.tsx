import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const logoParametrizze = "/lovable-uploads/ea1780e5-8545-48a9-aaa9-051f623724db.png";
const logoGourmetizze = "/lovable-uploads/40176074-eed2-4555-94a3-940b9c014213.png";
const logoComicpets = "/lovable-uploads/868a8eaf-cc9a-4482-9f91-ff11d7873809.png";
const logoDesignkids = "/lovable-uploads/16ad92e4-d27b-4d97-a111-5d128e486b17.png";

const brands = [
{
  logo: logoParametrizze,
  name: "PARAMETRIZZE",
  description: "Linha especializada em design paramétrico aplicado a arquitetura, mobiliário e soluções industriais fabricadas com tecnologia CNC.",
  accent: "accent-blue"
},
{
  logo: logoGourmetizze,
  name: "GOURMETIZZE",
  description: "Linha de produtos para o setor gourmet fabricados em corte a laser em metal, incluindo churrasqueiras modulares, utensílios e estruturas para áreas externas.",
  accent: "accent"
},
{
  logo: logoComicpets,
  name: "COMICPETS",
  description: "Linha de produtos criativos e funcionais para o mercado pet.",
  accent: "accent-green"
},
{
  logo: logoDesignkids,
  name: "DESIGN KIDS",
  description: "Linha de mobiliário e objetos infantis com design criativo e seguro.",
  accent: "steel"
}];


const MarcasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-muted relative">
      <div className="technical-line w-full absolute top-0" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6">
          
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Ecossistema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossas Marcas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A GILEN é a plataforma industrial que desenvolve e fabrica múltiplas linhas de produtos especializados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {brands.map((brand, index) =>
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-card p-5 md:p-8 lg:p-10 rounded-sm border border-border hover:border-accent-blue/20 transition-all duration-300 hover:shadow-lg">
            
              <div className="flex items-start gap-5">
              <div className="w-28 h-28 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform overflow-hidden" style={{ backgroundColor: '#8B7355' }}>
                <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
              </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{brand.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default MarcasSection;