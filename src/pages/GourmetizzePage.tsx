import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Flame, Utensils, PanelsTopLeft, Ruler, Scissors, Layers } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import BrandBannerPhoto from "@/components/BrandBannerPhoto";
import BrandCarousel from "@/components/BrandCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import { gourmetizzeBrand, gourmetizzeLines, gourmetizzeMedia } from "@/data/gourmetizze";

const catalogPath = "/gourmetizze/produtos";
const galleryImages = gourmetizzeLines.flatMap((line) =>
  line.products.map((product) => ({ src: product.image, alt: product.alt }))
);
const navSections = [
  { id: "hero", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "galeria", label: "Galeria" },
  { id: "produtos", label: "Produtos", href: catalogPath },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "processo", label: "Processo" },
  { id: "contato-cta", label: "Contato" },
];

const features = [
  { icon: Scissors, title: "Chapa cortada a laser", desc: "O corte define o contorno de cada peça e os rasgos para os encaixes." },
  { icon: Utensils, title: "Preparo no espeto", desc: "Na churrasqueira portátil, os rasgos nas laterais apoiam os espetos sobre as brasas." },
  { icon: Flame, title: "Grelha suspensa", desc: "No braseiro meia-lua, correntes sustentam a grelha redonda sobre a bacia de fogo." },
  { icon: PanelsTopLeft, title: "Apoio de madeira", desc: "Na churrasqueira quadrada, as duas superfícies laterais acomodam os utensílios de preparo." },
  { icon: Layers, title: "Lenha organizada", desc: "No porta-lenha, chapas entrecruzadas formam um berço para acomodar as toras." },
  { icon: Ruler, title: "Peças sob encomenda", desc: "Consulte medidas, componentes e opções de acabamento para o modelo de sua preferência." },
];

const fabrication = [
  { step: "01", title: "Escolha do modelo", desc: "Escolha entre churrasqueira, braseiro, fogareiro e porta-lenha." },
  { step: "02", title: "Orçamento", desc: "Converse com a equipe sobre as medidas, o acabamento e os componentes da peça." },
  { step: "03", title: "Corte da chapa", desc: "O laser recorta as peças de acordo com a geometria de cada modelo." },
  { step: "04", title: "Montagem", desc: "Encaixes, dobras ou uniões completam a estrutura, conforme o desenho escolhido." },
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

const GourmetizzePage = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="gourmetizze-brand min-h-screen bg-background">
      <SEOHead title="Gourmetizze · Churrasqueiras e braseiros em aço" description={gourmetizzeBrand.description} path="/gourmetizze" ogImage={gourmetizzeBrand.ogImage} />
      <BrandNavbar
        brandName={gourmetizzeBrand.name}
        logoSrc={gourmetizzeBrand.logo}
        logoBgColor="#8B7355"
        backTo="/marcas"
        backLabel="Voltar para GILEN"
        sections={navSections}
        whatsappUrl={gourmetizzeBrand.whatsappUrl}
      />

      <main>
      {/* Hero */}
      <section id="hero" className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-36">
        <div className="gourmetizze-hero-photo absolute inset-x-0 bottom-0 top-14 md:top-32">
          <BrandBannerPhoto src={gourmetizzeMedia.hero} backdrop={gourmetizzeMedia.heroBackdrop} alt="Braseiro meia-lua com grelha suspensa por correntes sobre a lenha acesa" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-white mb-4 block">
              Por GILEN Industrial
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4 md:mb-6">
              {gourmetizzeBrand.name}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:block text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
              {gourmetizzeBrand.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="whatsapp-hover bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                <a href={gourmetizzeBrand.whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="whatsapp-icon" size={18} />Solicitar orçamento <ArrowRight className="default-icon ml-2" size={16} /></a>
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Sobre a Marca</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Da chapa de aço <span className="text-steel">às brasas</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Gourmetizze é a marca da GILEN Industrial dedicada ao fogo ao ar livre. Reúne churrasqueiras para grelha ou espeto, lareiras de jardim, braseiros, fogareiros e suportes para lenha.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada modelo parte de uma chapa cortada a laser. Na churrasqueira portátil, os recortes acomodam os espetos. No braseiro meia-lua, um braço curvo sustenta a grelha sobre a lenha.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: galleryImages.length, label: "Modelos" },
                  { value: gourmetizzeLines.length, label: "Linhas" },
                  { value: "Laser", label: "Corte" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SectionBlock>
            <SectionBlock>
              <div className="relative rounded-sm overflow-hidden">
                <img src={gourmetizzeMedia.meiaLua} alt="Braseiro meia-lua com grelha suspensa por correntes" loading="lazy" decoding="async" className="w-full h-80 lg:h-[450px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Braseiros</span>
                  <p className="text-white font-semibold mt-1">Braseiro meia-lua com grelha</p>
                </div>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div id="galeria" className="scroll-mt-14 md:scroll-mt-32">
      <BrandCarousel
        accentColor="bg-accent"
        title="Nossos"
        titleAccent="modelos"
        linkTo={catalogPath}
        images={galleryImages}
      />
      </div>

      {/* Products */}
      <section id="produtos" ref={galleryRef} className="scroll-mt-14 md:scroll-mt-32 py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Produtos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Linhas de <span className="text-steel">Produtos</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Conheça as peças para o preparo na grelha, no espeto ou na panela e os acessórios para a lenha.</p>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gourmetizzeLines.map((line, index) => (
              <motion.div key={line.id} initial={{ opacity: 0, y: 30 }} animate={galleryInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative rounded-sm overflow-hidden cursor-pointer">
                <Link to={`${catalogPath}/${line.id}`} className="block">
                  <img src={line.image} alt={line.alt} loading="lazy" decoding="async" className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{line.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{line.description}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={catalogPath} className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
              Ver Todos os Produtos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="diferenciais" className="scroll-mt-14 md:scroll-mt-32 py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Detalhes dos <span className="text-steel">modelos</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <SectionBlock key={feature.title}>
                <div className="p-6 md:p-8 rounded-sm border border-border bg-card hover:border-accent/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                    <feature.icon className="text-accent" size={24} />
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Como <span className="text-accent">funciona</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {fabrication.map((item) => (
              <SectionBlock key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">{item.step}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Qual modelo combina com a sua área de fogo?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Envie o modelo de sua preferência e as medidas do espaço para solicitar um orçamento.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={gourmetizzeBrand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-hover inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
                <FaWhatsapp className="whatsapp-icon" size={18} />Solicitar orçamento <ArrowRight className="default-icon" size={16} />
              </a>
              <Link to="/marcas" className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-muted transition-colors">
                <ArrowLeft size={16} /> Voltar para GILEN
              </Link>
            </div>
          </SectionBlock>
        </div>
      </section>

      </main>

      <footer className="py-8 bg-graphite border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary-foreground/40 text-sm">GOURMETIZZE — Uma marca <Link to="/" className="text-accent hover:underline">GILEN Industrial</Link></p>
        </div>
      </footer>
      <WhatsAppButton whatsappUrl={gourmetizzeBrand.whatsappUrl} />
    </div>
  );
};

export default GourmetizzePage;
