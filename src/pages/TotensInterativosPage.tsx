import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Monitor, Smartphone, Zap, Store, Star, Settings } from "lucide-react";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";


import imgTotemDrogal from "@/assets/totens/totem-drogal.png";
import imgTotemEletroposto from "@/assets/totens/totem-eletroposto.png";
import imgTotemSmartphone from "@/assets/totens/totem-smartphone.png";
import imgTotemLed from "@/assets/totens/totem-led-portrait.png";
import imgTotemSignage from "@/assets/totens/totem-digital-signage.png";
import imgTotemPainel from "@/assets/totens/totem-painel-led.png";
import imgTotemVarejo from "@/assets/totens/totem-varejo.png";
import imgTotemNissan from "@/assets/totens/totem-nissan.png";

const logoGilCase = "/lovable-uploads/logo-gilcase.jpeg";

const gallery = [
  { image: imgTotemDrogal, title: "Totem Digital Drogal", desc: "Totem de sinalização digital vertical para redes de farmácias com tela LED de alta resolução e estrutura em aço." },
  { image: imgTotemEletroposto, title: "Totem Eletroposto", desc: "Estrutura para estações de carregamento elétrico com painel frontal perfurado e acabamento em pintura eletrostática." },
  { image: imgTotemSmartphone, title: "Totem Interativo Smartphone", desc: "Totem com design inspirado em smartphone, ideal para recepções, clínicas e pontos de atendimento interativo." },
  { image: imgTotemLed, title: "Painel LED Portrait", desc: "Totem com painel LED de alta definição em formato vertical, perfeito para vitrines e ambientes de alto impacto visual." },
  { image: imgTotemSignage, title: "Totem Digital Signage Pedestal", desc: "Totem pedestal com tela digital para conteúdos dinâmicos em lobbies, shoppings e espaços corporativos." },
  { image: imgTotemPainel, title: "Totem Painel LED com Base", desc: "Estrutura vertical com painel LED integrado e base em madeira, ideal para lojas e ambientes de varejo." },
  { image: imgTotemVarejo, title: "Totem LED Varejo", desc: "Totem digital para campanhas de varejo com tela LED de grande formato e base robusta em aço." },
  { image: imgTotemNissan, title: "Totem Interativo Nissan", desc: "Totem touchscreen personalizado para concessionária Nissan com logotipo integrado e tela interativa." },
];

const features = [
  { icon: Monitor, title: "Telas HD & 4K", desc: "Suporte para telas de alta resolução em diversos tamanhos e formatos." },
  { icon: Smartphone, title: "Touchscreen", desc: "Interatividade total com telas sensíveis ao toque para experiência do usuário." },
  { icon: Store, title: "PDV & Varejo", desc: "Soluções completas para pontos de venda, recepções e vitrines digitais." },
  { icon: Zap, title: "Plug & Play", desc: "Instalação rápida com suporte a diversas mídias e conectividade." },
  { icon: Settings, title: "Sob Medida", desc: "Totens projetados e fabricados conforme as necessidades de cada cliente." },
  { icon: Star, title: "Acabamento Premium", desc: "Materiais de alta qualidade com pintura eletrostática e detalhes impecáveis." },
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

const TotensInterativosPage = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Totens Interativos | Gil Cases & Suportes"
        description="Totens interativos, painéis digitais e pedestais para pontos de venda, eventos, clínicas e varejo. Fabricação sob medida com acabamento premium."
        path="/totens-interativos"
      />

      <BrandNavbar
        brandName="TOTENS INTERATIVOS"
        logoSrc={logoGilCase}
        backTo="/gil-cases"
        backLabel="Voltar para Gil Cases"
        sections={[
          { id: "hero", label: "Início" },
          { id: "galeria", label: "Galeria" },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "contato-cta", label: "Contato" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-36 bg-graphite">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue mb-4 block"
              >
                Gil Cases & Suportes
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6"
              >
                TOTENS <br />
                <span className="text-accent-blue">INTERATIVOS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg text-justify"
              >
                Estruturas para totens interativos com design profissional para pontos de venda, recepções, feiras, eventos corporativos, clínicas, hospitais e muito mais.
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
                    Solicitar Orçamento
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 h-12 text-sm uppercase tracking-wider font-semibold"
                >
                  <a href="#galeria">Ver Galeria</a>
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="w-64 h-64 rounded-sm border border-border/30 bg-white/5 flex items-center justify-center">
                <p className="text-white/30 text-sm text-center px-4">Novas imagens em breve</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" ref={galleryRef} className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Galeria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos <span className="text-steel">Totens</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-justify">
              Conheça nossa linha de totens interativos, painéis digitais e pedestais para diversos segmentos.
            </p>
          </SectionBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-card rounded-sm overflow-hidden border border-border hover:border-accent-blue/30 transition-colors"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{item.desc}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-blue group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="diferenciais" className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que nossos <span className="text-steel">totens</span>
            </h2>
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

      {/* CTA */}
      <section id="contato-cta" className="py-24 bg-background relative overflow-hidden">
        <div className="technical-line w-full absolute top-0" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transforme a experiência do seu público
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Entre em contato e solicite um orçamento para seu totem interativo personalizado.
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
                to="/gil-cases"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-muted transition-colors"
              >
                <ArrowLeft size={16} />
                Voltar para Gil Cases
              </Link>
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-graphite border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            TOTENS INTERATIVOS — Uma linha <Link to="/gil-cases" className="text-accent-blue hover:underline">Gil Cases & Suportes</Link> | <Link to="/" className="text-accent-blue hover:underline">GILEN Industrial</Link>
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default TotensInterativosPage;
