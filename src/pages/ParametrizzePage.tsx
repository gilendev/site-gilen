import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Layers, Box, Home, Building, Cpu, Ruler, CheckCircle } from "lucide-react";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/img-parametrizze-hero.jpg";
import imgCnc from "@/assets/img-parametrizze-cnc.jpg";
import imgFachada from "@/assets/img-parametrizze-fachada.jpg";
import imgMobiliario from "@/assets/img-parametrizze-mobiliario.jpg";
import imgDivisoria from "@/assets/img-parametrizze-divisoria.jpg";
import BrandCarousel from "@/components/BrandCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";

const logoParametrizze = "/lovable-uploads/ea1780e5-8545-48a9-aaa9-051f623724db.png";

const products = [
  {
    image: imgFachada,
    title: "Fachadas Paramétrics",
    description: "Revestimentos arquitetônicos com padrões orgânicos e geométricos fabricados em CNC para fachadas comerciais e residenciais.",
  },
  {
    image: imgMobiliario,
    title: "Mobiliário Paramétrico",
    description: "Estantes, mesas e peças de mobiliário com design computacional e formas orgânicas, fabricados sob medida.",
  },
  {
    image: imgDivisoria,
    title: "Painéis & Divisórias",
    description: "Painéis decorativos e divisórias de ambientes com padrões geométricos cortados a laser ou CNC.",
  },
  {
    image: imgCnc,
    title: "Fabricação CNC",
    description: "Produção de peças paramétricass com precisão industrial em diversos materiais: MDF, madeira, metal e acrílico.",
  },
];

const features = [
  { icon: Cpu, title: "Design Computacional", desc: "Cada peça é projetada com algoritmos paramétricos que geram formas únicas e otimizadas." },
  { icon: Layers, title: "Materiais Diversos", desc: "Trabalhamos com MDF, madeira maciça, metais e acrílicos de alta qualidade." },
  { icon: Ruler, title: "Sob Medida", desc: "Todos os projetos são personalizados para as dimensões e necessidades do cliente." },
  { icon: Building, title: "Arquitetura & Interiores", desc: "Soluções para arquitetos, designers de interiores e construtoras." },
  { icon: Box, title: "Prototipagem", desc: "Produzimos protótipos funcionais antes da fabricação em série." },
  { icon: Home, title: "Instalação", desc: "Acompanhamento completo da instalação no local do projeto." },
];

const SectionBlock = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParametrizzePage = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Parametrizze" description="Design paramétrico aplicado à arquitetura e mobiliário. Fachadas, painéis e peças únicas fabricadas com CNC de alta precisão." path="/parametrizze" />
      <BrandNavbar
        brandName="PARAMETRIZZE"
        logoSrc={logoParametrizze}
        logoBgColor="#8B7355"
        backTo="/marcas"
        backLabel="Voltar para GILEN"
        sections={[
          { id: "hero", label: "Início" },
          { id: "sobre", label: "Sobre" },
          { id: "galeria", label: "Galeria" },
          { id: "produtos", label: "Produtos", href: "/parametrizze/produtos" },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "processo", label: "Processo" },
          { id: "contato-cta", label: "Contato" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden pt-24">
        <img src={imgHero} alt="Design paramétrico Parametrizze" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue mb-4 block"
            >
              By GILEN Industrial
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              PARAMETRIZZE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              Design paramétrico aplicado à arquitetura, mobiliário e soluções industriais. Cada peça é única, fabricada com tecnologia CNC de alta precisão.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/90 text-accent-blue-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold"
              >
                <Link to="/contato">
                  Solicitar Projeto
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 h-12 text-sm uppercase tracking-wider font-semibold"
              >
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
                Sobre a Marca
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A arte encontra a <span className="text-steel">engenharia</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A PARAMETRIZZE é a linha da GILEN Industrial especializada em design paramétrico — uma abordagem que utiliza algoritmos computacionais para gerar formas orgânicas, geométricas e funcionais.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                De painéis decorativos a fachadas arquitetônicas, cada projeto é desenvolvido sob medida e fabricado com tecnologia CNC de alta precisão, garantindo acabamento impecável e durabilidade.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "100+", label: "Projetos" },
                  { value: "0,1mm", label: "Precisão" },
                  { value: "5+", label: "Materiais" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-accent-blue">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SectionBlock>
            <SectionBlock>
              <div className="relative rounded-sm overflow-hidden">
                <img src={imgCnc} alt="Fabricação CNC paramétrica" className="w-full h-80 lg:h-[450px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Fabricação</span>
                  <p className="text-white font-semibold mt-1">CNC de alta precisão</p>
                </div>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div id="galeria">
      <BrandCarousel
        accentColor="bg-accent-blue"
        linkTo="/parametrizze/produtos"
        images={[
          { src: imgFachada, alt: "Fachada paramétrica" },
          { src: imgMobiliario, alt: "Mobiliário paramétrico" },
          { src: imgDivisoria, alt: "Painéis e divisórias" },
          { src: imgCnc, alt: "Fabricação CNC" },
          { src: imgHero, alt: "Parametrizze design" },
          { src: imgFachada, alt: "Revestimento paramétrico" },
          { src: imgMobiliario, alt: "Peça de mobiliário" },
          { src: imgDivisoria, alt: "Divisória decorativa" },
          { src: imgCnc, alt: "Usinagem CNC" },
          { src: imgHero, alt: "Projeto paramétrico" },
        ]}
      />
      </div>

      {/* Products */}
      <section id="produtos" ref={galleryRef} className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Produtos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Linhas de <span className="text-steel">Produtos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Do conceito à instalação — soluções paramétricass para arquitetura, interiores e mobiliário.
            </p>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-sm overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-blue group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/parametrizze/produtos" className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-accent-blue-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors">
              Ver Todos os Produtos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="diferenciais" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que <span className="text-steel">Parametrizze</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <SectionBlock key={feature.title}>
                <div className="p-6 md:p-8 rounded-sm border border-border bg-card hover:border-accent-blue/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-sm bg-accent-blue/10 flex items-center justify-center mb-6">
                    <feature.icon className="text-accent-blue" size={24} />
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Como <span className="text-accent-blue">funciona</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Briefing", desc: "Entendemos suas necessidades, medidas e estilo desejado." },
              { step: "02", title: "Design", desc: "Criamos o design paramétrico com modelagem 3D e renderização." },
              { step: "03", title: "Fabricação", desc: "Produzimos com CNC de precisão no material escolhido." },
              { step: "04", title: "Entrega", desc: "Entregamos e instalamos com acompanhamento técnico." },
            ].map((item) => (
              <SectionBlock key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-blue/10 flex items-center justify-center">
                    <span className="text-accent-blue font-bold text-lg">{item.step}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transforme seu espaço com design paramétrico
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Entre em contato e solicite um projeto personalizado para sua obra, escritório ou residência.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-accent-blue-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/marcas"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-muted transition-colors"
              >
                <ArrowLeft size={16} />
                Voltar para GILEN
              </Link>
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-graphite border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            PARAMETRIZZE — Uma marca <Link to="/" className="text-accent-blue hover:underline">GILEN Industrial</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ParametrizzePage;
