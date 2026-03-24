import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Heart, PawPrint, Sparkles, Shield, Palette, Box } from "lucide-react";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/img-comicpets-hero.jpg";
import imgGato from "@/assets/img-comicpets-gato.jpg";
import imgComedouro from "@/assets/img-comicpets-comedouro.jpg";
import imgBrinquedo from "@/assets/img-comicpets-brinquedo.jpg";
import imgCasinha from "@/assets/img-comicpets-casinha.jpg";
import BrandCarousel from "@/components/BrandCarousel";

const logoComicpets = "/lovable-uploads/868a8eaf-cc9a-4482-9f91-ff11d7873809.png";

const products = [
  {
    image: imgGato,
    title: "Arranhadores & Torres",
    description: "Torres e arranhadores em madeira com design moderno, funcionais e elegantes para gatos.",
  },
  {
    image: imgComedouro,
    title: "Comedouros & Bebedouros",
    description: "Suportes elevados com design em corte a laser, ergonômicos e estilosos para cães e gatos.",
  },
  {
    image: imgBrinquedo,
    title: "Brinquedos & Acessórios",
    description: "Brinquedos interativos e acessórios criativos fabricados com materiais seguros e duráveis.",
  },
  {
    image: imgCasinha,
    title: "Casinhas & Abrigos",
    description: "Casinhas com design contemporâneo em madeira e metal, confortáveis e resistentes.",
  },
];

const features = [
  { icon: Heart, title: "Amor pelos Pets", desc: "Cada produto é pensado para o bem-estar e conforto dos animais de estimação." },
  { icon: PawPrint, title: "Ergonomia Animal", desc: "Design baseado em estudos de comportamento e necessidades dos pets." },
  { icon: Shield, title: "Materiais Seguros", desc: "Utilizamos apenas materiais atóxicos e seguros para animais." },
  { icon: Palette, title: "Design Criativo", desc: "Produtos que combinam funcionalidade com estética moderna e divertida." },
  { icon: Sparkles, title: "Acabamento Premium", desc: "Pintura e acabamento de alta qualidade para durabilidade e beleza." },
  { icon: Box, title: "Sob Medida", desc: "Projetos personalizados para espaços e necessidades específicas." },
];

const SectionBlock = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
};

const ComicpetsPage = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Comicpets" description="Produtos criativos para pets: arranhadores, comedouros, brinquedos e casinhas com design moderno e materiais seguros." path="/comicpets" />
      <BrandNavbar
        brandName="COMICPETS"
        logoSrc={logoComicpets}
        logoBgColor="#8B7355"
        backTo="/marcas"
        backLabel="Voltar para GILEN"
        sections={[
          { id: "hero", label: "Início" },
          { id: "sobre", label: "Sobre" },
          { id: "galeria", label: "Galeria" },
          { id: "produtos", label: "Produtos" },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "processo", label: "Processo" },
          { id: "contato-cta", label: "Contato" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden pt-24">
        <img src={imgHero} alt="Produtos pet Comicpets" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-green mb-4 block">
              By GILEN Industrial
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              COMICPETS
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
              Produtos criativos e funcionais para o mercado pet. Design, conforto e segurança para cães e gatos.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent-green hover:bg-accent-green/90 text-accent-green-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                <Link to="/contato">Solicitar Projeto <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                <a href="#produtos">Ver Produtos</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionBlock>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green mb-4 block">Sobre a Marca</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Design que cuida de quem você <span className="text-steel">ama</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A COMICPETS é a linha da GILEN Industrial voltada para o mercado pet. Combinamos a expertise industrial com design criativo para criar produtos que melhoram a vida dos animais de estimação e de seus donos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                De arranhadores a comedouros, cada peça é fabricada com materiais seguros e acabamento premium, unindo funcionalidade, diversão e estética.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "30+", label: "Produtos" },
                  { value: "100%", label: "Seguro" },
                  { value: "CNC", label: "Fabricação" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-accent-green">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SectionBlock>
            <SectionBlock>
              <div className="relative rounded-sm overflow-hidden">
                <img src={imgComedouro} alt="Comedouro pet design" className="w-full h-80 lg:h-[450px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Produto</span>
                  <p className="text-white font-semibold mt-1">Design com corte a laser</p>
                </div>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div id="galeria">
      <BrandCarousel
        accentColor="bg-accent-green"
        images={[
          { src: imgGato, alt: "Arranhadores e torres" },
          { src: imgComedouro, alt: "Comedouros pet" },
          { src: imgBrinquedo, alt: "Brinquedos pet" },
          { src: imgCasinha, alt: "Casinhas pet" },
          { src: imgHero, alt: "Comicpets produtos" },
          { src: imgGato, alt: "Torre para gatos" },
          { src: imgComedouro, alt: "Bebedouro elevado" },
          { src: imgBrinquedo, alt: "Acessório pet" },
          { src: imgCasinha, alt: "Casinha de madeira" },
          { src: imgHero, alt: "Linha pet" },
        ]}
      />
      </div>

      {/* Products */}
      <section id="produtos" ref={galleryRef} className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green mb-4 block">Produtos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Linhas de <span className="text-steel">Produtos</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Produtos criativos e seguros para o bem-estar do seu pet.</p>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div key={product.title} initial={{ opacity: 0, y: 30 }} animate={galleryInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative rounded-sm overflow-hidden cursor-pointer">
                <img src={product.image} alt={product.title} className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-green group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/comicpets/produtos" className="inline-flex items-center gap-2 px-8 py-3 bg-accent-green text-white font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-green/90 transition-colors">
              Ver Todos os Produtos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="diferenciais" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green mb-4 block">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Por que <span className="text-steel">Comicpets</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <SectionBlock key={feature.title}>
                <div className="p-6 md:p-8 rounded-sm border border-border bg-card hover:border-accent-green/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-sm bg-accent-green/10 flex items-center justify-center mb-6">
                    <feature.icon className="text-accent-green" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </SectionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="py-16 md:py-24 lg:py-32 bg-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green mb-4 block">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Como <span className="text-accent-green">funciona</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Ideia", desc: "Você nos conta o que precisa para seu pet ou seu espaço." },
              { step: "02", title: "Design", desc: "Criamos o design com foco em segurança e funcionalidade." },
              { step: "03", title: "Fabricação", desc: "Produzimos com CNC e materiais atóxicos certificados." },
              { step: "04", title: "Entrega", desc: "Entregamos pronto para uso, com garantia de qualidade." },
            ].map((item) => (
              <SectionBlock key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-green/10 flex items-center justify-center">
                    <span className="text-accent-green font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato-cta" className="py-24 bg-background relative overflow-hidden">
        <div className="technical-line w-full absolute top-0" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Seu pet merece o melhor design</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Entre em contato e solicite um produto personalizado para seu animal de estimação.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3 bg-accent-green text-accent-green-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-green/90 transition-colors">
                Solicitar Orçamento <ArrowRight size={16} />
              </Link>
              <Link to="/marcas" className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-muted transition-colors">
                <ArrowLeft size={16} /> Voltar para GILEN
              </Link>
            </div>
          </SectionBlock>
        </div>
      </section>

      <footer className="py-8 bg-graphite border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary-foreground/40 text-sm">COMICPETS — Uma marca <Link to="/" className="text-accent-green hover:underline">GILEN Industrial</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default ComicpetsPage;
