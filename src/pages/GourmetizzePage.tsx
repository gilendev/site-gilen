import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Flame, Utensils, Home, Wrench, Scissors, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/img-gourmetizze-hero.jpg";
import imgChurrasqueira from "@/assets/img-gourmetizze-churrasqueira.jpg";
import imgUtensilios from "@/assets/img-gourmetizze-utensilios.jpg";
import imgEstrutura from "@/assets/img-gourmetizze-estrutura.jpg";
import imgFabricacao from "@/assets/img-gourmetizze-fabricacao.jpg";
import BrandCarousel from "@/components/BrandCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";

const logoGourmetizze = "/lovable-uploads/40176074-eed2-4555-94a3-940b9c014213.png";

const products = [
  {
    image: imgChurrasqueira,
    title: "Churrasqueiras Modulares",
    description: "Estações de churrasco em aço inox com design modular, adaptáveis a qualquer espaço externo.",
  },
  {
    image: imgUtensilios,
    title: "Utensílios Gourmet",
    description: "Ferramentas e acessórios em metal cortados a laser, com design funcional e acabamento premium.",
  },
  {
    image: imgEstrutura,
    title: "Estruturas para Áreas Externas",
    description: "Pergolados, suportes e estruturas metálicas para espaços gourmet ao ar livre.",
  },
  {
    image: imgFabricacao,
    title: "Corte a Laser em Metal",
    description: "Fabricação de peças e painéis decorativos em metal com corte a laser de alta precisão.",
  },
];

const features = [
  { icon: Flame, title: "Alta Resistência", desc: "Produtos fabricados em aço inox e metais resistentes a altas temperaturas." },
  { icon: Utensils, title: "Design Funcional", desc: "Cada peça é projetada para otimizar a experiência gastronômica ao ar livre." },
  { icon: Scissors, title: "Corte a Laser", desc: "Precisão industrial no corte de chapas metálicas para acabamento impecável." },
  { icon: Home, title: "Espaços Externos", desc: "Soluções completas para áreas gourmet, varandas e jardins." },
  { icon: Wrench, title: "Sob Medida", desc: "Projetos personalizados de acordo com o espaço e necessidade do cliente." },
  { icon: Shield, title: "Durabilidade", desc: "Materiais e acabamentos que garantem vida útil prolongada mesmo em intempéries." },
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
    <div className="min-h-screen bg-background">
      <SEOHead title="Gourmetizze" description="Churrasqueiras modulares, utensílios gourmet e estruturas metálicas para áreas externas. Corte a laser em aço inox." path="/gourmetizze" />
      <BrandNavbar
        brandName="GOURMETIZZE"
        logoSrc={logoGourmetizze}
        logoBgColor="#8B7355"
        backTo="/marcas"
        backLabel="Voltar para GILEN"
        sections={[
          { id: "hero", label: "Início" },
          { id: "sobre", label: "Sobre" },
          { id: "galeria", label: "Galeria" },
          { id: "produtos", label: "Produtos", href: "/gourmetizze/produtos" },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "processo", label: "Processo" },
          { id: "contato-cta", label: "Contato" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-36">
        <img src={imgHero} alt="Área gourmet Gourmetizze" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4 block">
              By GILEN Industrial
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              GOURMETIZZE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
              Produtos para o setor gourmet fabricados em corte a laser em metal. Churrasqueiras modulares, utensílios e estruturas para áreas externas.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="whatsapp-hover bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                <Link to="/contato"><FaWhatsapp className="whatsapp-icon" size={18} />Solicitar Projeto <ArrowRight className="default-icon ml-2" size={16} /></Link>
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Sobre a Marca</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O sabor encontra o <span className="text-steel">metal</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A GOURMETIZZE é a linha da GILEN Industrial dedicada ao universo gourmet. Fabricamos churrasqueiras modulares, utensílios e estruturas metálicas para áreas externas com a mesma precisão industrial que aplicamos em nossos projetos técnicos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada produto é cortado a laser e fabricado em aço inox ou aço carbono com acabamento de alta qualidade, garantindo durabilidade e design sofisticado.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "Produtos" },
                  { value: "Inox", label: "Material" },
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
                <img src={imgFabricacao} alt="Corte a laser para produtos gourmet" className="w-full h-80 lg:h-[450px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Fabricação</span>
                  <p className="text-white font-semibold mt-1">Corte a laser em metal</p>
                </div>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div id="galeria">
      <BrandCarousel
        accentColor="bg-accent"
        linkTo="/gourmetizze/produtos"
        images={[
          { src: imgChurrasqueira, alt: "Churrasqueira modular" },
          { src: imgUtensilios, alt: "Utensílios gourmet" },
          { src: imgEstrutura, alt: "Estruturas externas" },
          { src: imgFabricacao, alt: "Corte a laser" },
          { src: imgHero, alt: "Gourmetizze produtos" },
          { src: imgChurrasqueira, alt: "Estação de churrasco" },
          { src: imgUtensilios, alt: "Acessórios gourmet" },
          { src: imgEstrutura, alt: "Pergolado metálico" },
          { src: imgFabricacao, alt: "Fabricação em metal" },
          { src: imgHero, alt: "Linha gourmet" },
        ]}
      />
      </div>

      {/* Products */}
      <section id="produtos" ref={galleryRef} className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Produtos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Linhas de <span className="text-steel">Produtos</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Soluções em metal para transformar sua experiência gourmet ao ar livre.</p>
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
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gourmetizze/produtos" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
              Ver Todos os Produtos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="diferenciais" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Por que <span className="text-steel">Gourmetizze</span></h2>
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
      <section id="processo" className="py-16 md:py-24 lg:py-32 bg-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Como <span className="text-accent">funciona</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Consultoria", desc: "Entendemos seu espaço e estilo de uso para propor a melhor solução." },
              { step: "02", title: "Projeto", desc: "Desenvolvemos o design personalizado com modelagem 3D." },
              { step: "03", title: "Fabricação", desc: "Produzimos com corte a laser e acabamento em aço inox." },
              { step: "04", title: "Entrega", desc: "Entregamos montado e pronto para uso no seu espaço." },
            ].map((item) => (
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
      <section id="contato-cta" className="py-24 bg-background relative overflow-hidden">
        <div className="technical-line w-full absolute top-0" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Monte sua área gourmet dos sonhos</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Entre em contato e solicite um projeto personalizado para seu espaço.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contato" className="whatsapp-hover inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
                <FaWhatsapp className="whatsapp-icon" size={18} />Solicitar Orçamento <ArrowRight className="default-icon" size={16} />
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
          <p className="text-primary-foreground/40 text-sm">GOURMETIZZE — Uma marca <Link to="/" className="text-accent hover:underline">GILEN Industrial</Link></p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default GourmetizzePage;
