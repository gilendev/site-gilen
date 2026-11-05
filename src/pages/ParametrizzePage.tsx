import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Cpu, Ruler, Layers, AudioLines, Blocks, Settings } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import BrandCarousel from "@/components/BrandCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import { parametrizzeBrand as brand, parametrizzeMedia as media, parametrizzeSolutions as solutions } from "@/data/parametrizze";

const catalogPath = "/parametrizze/produtos";
const gallery = Array.from(new Map(solutions.flatMap((solution) => solution.gallery).map((image) => [image.src, image])).values());
const features = [
  { icon: Cpu, title: "Design computacional", desc: "A modelagem define a geometria da peça e permite variar suas formas de maneira controlada." },
  { icon: Ruler, title: "Sob medida", desc: "O espaço, as medidas e o uso de cada ambiente orientam as decisões de projeto." },
  { icon: Layers, title: "Superfícies tridimensionais", desc: "A sequência de perfis dá relevo a painéis, mobiliário e elementos arquitetônicos." },
  { icon: AudioLines, title: "Desempenho acústico", desc: "Na linha acústica, a geometria das superfícies ajuda a controlar as reflexões sonoras." },
  { icon: Blocks, title: "Estruturas modulares", desc: "Nos stands, os módulos se adaptam às necessidades de exposição de cada marca." },
  { icon: Settings, title: "Fabricação CNC", desc: "O modelo digital orienta a usinagem dos componentes que dão forma ao conjunto." },
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

const ParametrizzePage = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Parametrizze — Design e produtos paramétricos" description={brand.description} path="/parametrizze" ogImage={brand.ogImage} />
      <BrandNavbar
        brandName={brand.name}
        logoSrc={brand.logo}
        logoBgColor="#090909"
        whatsappUrl={brand.whatsappUrl}
        backTo="/marcas"
        backLabel="Voltar para GILEN"
        sections={[
          { id: "hero", label: "Início" },
          { id: "sobre", label: "Sobre" },
          { id: "galeria", label: "Galeria" },
          { id: "produtos", label: "Produtos", href: catalogPath },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "processo", label: "Processo" },
          { id: "contato-cta", label: "Contato" },
        ]}
      />

      <main>
      {/* Hero */}
      <section id="hero" className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-36">
        <img
          src={media.hero}
          srcSet={media.heroSrcSet}
          sizes="(min-width: 768px) max(100vw, 160vh), max(100vw, 107vh)"
          alt={media.heroAlt}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[68%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue mb-4 block">
              Por GILEN Industrial
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4 md:mb-6">
              {brand.name}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:block text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
              Design paramétrico, engenharia e fabricação CNC. Desenvolvemos painéis, móveis, soluções acústicas, stands e projetos especiais sob medida.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="whatsapp-hover bg-accent-blue hover:bg-accent-blue/90 text-accent-blue-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="whatsapp-icon" size={18} />Solicitar Projeto <ArrowRight className="default-icon ml-2" size={16} /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                <a href="#produtos">Ver Produtos</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="scroll-mt-14 md:scroll-mt-32 py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionBlock>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Sobre a Marca</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Engenharia, estética e <span className="text-steel">desempenho funcional</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Parametrizze desenvolve e fabrica produtos com design paramétrico. A modelagem computacional permite gerar formas inteligentes, variações controladas e alta eficiência produtiva.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Da superfície de um painel à estrutura de um stand, cada solução parte de uma necessidade. A divisão integra personalização sob medida, otimização estrutural e fabricação CNC com precisão industrial.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: solutions.length, label: "Linhas" },
                  { value: "3D", label: "Geometria" },
                  { value: "CNC", label: "Fabricação" },
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
                <img src={media.cnc} loading="lazy" decoding="async" alt="Cabeçote da Router CNC durante a usinagem de uma chapa de madeira" className="w-full h-80 lg:h-[450px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Fabricação</span>
                  <p className="text-white font-semibold mt-1">Do modelo digital à usinagem CNC</p>
                </div>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div id="galeria" className="scroll-mt-14 md:scroll-mt-32">
      <BrandCarousel
        accentColor="bg-accent-blue"
        linkTo={catalogPath}
        title="Galeria de"
        titleAccent="soluções"
        images={gallery}
      />
      </div>

      {/* Products */}
      <section id="produtos" ref={galleryRef} className="scroll-mt-14 md:scroll-mt-32 py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Produtos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Linhas de <span className="text-steel">Produtos</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">{brand.tagline}</p>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div key={solution.id} initial={{ opacity: 0, y: 30 }} animate={galleryInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative rounded-sm overflow-hidden cursor-pointer">
                <Link to={`${catalogPath}/${solution.id}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2">
                  <img src={solution.image} alt={solution.alt} loading="lazy" decoding="async" className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{solution.subtitle}</p>
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-1 bg-accent-blue group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={catalogPath} className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-white font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors">
              Ver Todos os Produtos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="diferenciais" className="scroll-mt-14 md:scroll-mt-32 py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Por que <span className="text-steel">Parametrizze</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
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
      <section id="processo" className="scroll-mt-14 md:scroll-mt-32 py-16 md:py-24 lg:py-32 bg-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Como <span className="text-accent-blue">funciona</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Demanda", desc: "O espaço, o conceito e as necessidades do cliente orientam o desenvolvimento." },
              { step: "02", title: "Modelagem", desc: "A modelagem computacional gera as formas e permite estudar suas variações." },
              { step: "03", title: "Engenharia", desc: "A geometria é ajustada para conciliar desempenho, estética e fabricação." },
              { step: "04", title: "Fabricação CNC", desc: "O modelo digital orienta o corte e a usinagem das peças da solução." },
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
      <section id="contato-cta" className="scroll-mt-14 md:scroll-mt-32 py-24 bg-background relative overflow-hidden">
        <div className="technical-line w-full absolute top-0" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Seu próximo espaço começa com uma ideia.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Conte o que você imagina para seu ambiente, mobiliário ou evento. Vamos conversar sobre uma solução Parametrizze sob medida.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-hover inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-accent-blue-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors">
                <FaWhatsapp className="whatsapp-icon" size={18} />Solicitar Orçamento <ArrowRight className="default-icon" size={16} />
              </a>
              <Link to="/marcas" className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-muted transition-colors">
                <ArrowLeft size={16} /> Voltar para GILEN
              </Link>
            </div>
            <a href={`mailto:${brand.email}`} className="inline-block mt-5 text-sm text-muted-foreground hover:underline">{brand.email}</a>
          </SectionBlock>
        </div>
      </section>

      </main>

      <footer className="py-8 bg-graphite border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary-foreground/40 text-sm">PARAMETRIZZE — Uma marca <Link to="/" className="text-accent-blue hover:underline">GILEN Industrial</Link></p>
        </div>
      </footer>
      <WhatsAppButton whatsappUrl={brand.whatsappUrl} />
    </div>
  );
};

export default ParametrizzePage;
