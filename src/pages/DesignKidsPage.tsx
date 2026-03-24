import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Baby, Shield, Palette, Star, Smile, Box } from "lucide-react";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/img-designkids-hero.jpg";
import imgMesa from "@/assets/img-designkids-mesa.jpg";
import imgEstante from "@/assets/img-designkids-estante.jpg";
import imgBrinquedo from "@/assets/img-designkids-brinquedo.jpg";
import imgDecoracao from "@/assets/img-designkids-decoracao.jpg";
import BrandCarousel from "@/components/BrandCarousel";

const logoDesignkids = "/lovable-uploads/16ad92e4-d27b-4d97-a111-5d128e486b17.png";

const products = [
  {
    image: imgMesa,
    title: "Mesas & Cadeiras",
    description: "Conjuntos de mesa e cadeira infantil com design lúdico, bordas arredondadas e cores vibrantes.",
  },
  {
    image: imgEstante,
    title: "Estantes & Organizadores",
    description: "Estantes com formas criativas para organizar livros, brinquedos e objetos do quarto infantil.",
  },
  {
    image: imgBrinquedo,
    title: "Brinquedos Educativos",
    description: "Quebra-cabeças e brinquedos de encaixe em madeira, estimulando coordenação e criatividade.",
  },
  {
    image: imgDecoracao,
    title: "Decoração Infantil",
    description: "Cabideiros, prateleiras e objetos decorativos com temas lúdicos para quartos infantis.",
  },
];

const features = [
  { icon: Baby, title: "Feito para Crianças", desc: "Todos os produtos são projetados com foco na ergonomia e segurança infantil." },
  { icon: Shield, title: "100% Seguro", desc: "Materiais atóxicos, bordas arredondadas e acabamento sem riscos." },
  { icon: Palette, title: "Cores Vibrantes", desc: "Pintura com tintas ecológicas em cores alegres e estimulantes." },
  { icon: Star, title: "Design Lúdico", desc: "Formas criativas que estimulam a imaginação e o desenvolvimento." },
  { icon: Smile, title: "Ergonomia Infantil", desc: "Alturas e proporções adequadas para cada faixa etária." },
  { icon: Box, title: "Personalização", desc: "Nomes, cores e temas podem ser customizados para cada criança." },
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

const DesignKidsPage = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Design Kids" description="Mobiliário e brinquedos infantis com design lúdico e seguro. Mesas, estantes e decoração para quartos infantis." path="/design-kids" />
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          <Link to="/marcas" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} /> Voltar para GILEN
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm overflow-hidden" style={{ backgroundColor: '#8B7355' }}>
              <img src={logoDesignkids} alt="Design Kids" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-foreground tracking-wider text-sm">DESIGN KIDS</span>
          </div>
          <Link to="/contato" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-steel text-steel-foreground text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-steel/90 transition-colors">
            Orçamento
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
        <img src={imgHero} alt="Mobiliário infantil Design Kids" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-steel mb-4 block">
              By GILEN Industrial
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              DESIGN KIDS
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
              Mobiliário e objetos infantis com design criativo e seguro. Feitos para estimular a imaginação e acompanhar o crescimento.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-steel hover:bg-steel/90 text-steel-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold">
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
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionBlock>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel mb-4 block">Sobre a Marca</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Onde a imaginação ganha <span className="text-steel">forma</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A DESIGN KIDS é a linha da GILEN Industrial dedicada ao universo infantil. Criamos mobiliário, brinquedos e objetos decorativos que combinam design criativo com a segurança que toda família exige.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada peça é fabricada com tecnologia CNC em materiais seguros e atóxicos, com bordas arredondadas e acabamento impecável em cores vibrantes.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "40+", label: "Produtos" },
                  { value: "100%", label: "Seguro" },
                  { value: "Eco", label: "Tintas" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-steel">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SectionBlock>
            <SectionBlock>
              <div className="relative rounded-sm overflow-hidden">
                <img src={imgEstante} alt="Estante infantil criativa" className="w-full h-80 lg:h-[450px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Produto</span>
                  <p className="text-white font-semibold mt-1">Estante árvore CNC</p>
                </div>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <BrandCarousel
        accentColor="bg-steel"
        images={[
          { src: imgMesa, alt: "Mesa infantil" },
          { src: imgEstante, alt: "Estante infantil" },
          { src: imgBrinquedo, alt: "Brinquedo educativo" },
          { src: imgDecoracao, alt: "Decoração infantil" },
          { src: imgHero, alt: "Design Kids produtos" },
          { src: imgMesa, alt: "Conjunto mesa e cadeira" },
          { src: imgEstante, alt: "Organizador infantil" },
          { src: imgBrinquedo, alt: "Quebra-cabeça de madeira" },
          { src: imgDecoracao, alt: "Decoração quarto infantil" },
          { src: imgHero, alt: "Linha infantil" },
        ]}
      />

      {/* Products */}
      <section id="produtos" ref={galleryRef} className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel mb-4 block">Produtos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Linhas de <span className="text-steel">Produtos</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Design criativo e seguro para o mundo dos pequenos.</p>
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
                <div className="absolute top-0 left-0 w-0 h-1 bg-steel group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel mb-4 block">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Por que <span className="text-steel">Design Kids</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <SectionBlock key={feature.title}>
                <div className="p-6 md:p-8 rounded-sm border border-border bg-card hover:border-steel/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-sm bg-steel/10 flex items-center justify-center mb-6">
                    <feature.icon className="text-steel" size={24} />
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
      <section className="py-16 md:py-24 lg:py-32 bg-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel mb-4 block">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Como <span className="text-steel">funciona</span></h2>
          </SectionBlock>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Inspiração", desc: "Você escolhe o tema, cores e personalização desejada." },
              { step: "02", title: "Design", desc: "Criamos o projeto com foco em segurança e ludicidade." },
              { step: "03", title: "Fabricação", desc: "Produzimos com CNC e tintas ecológicas certificadas." },
              { step: "04", title: "Entrega", desc: "Entregamos montado e pronto para alegrar o quarto." },
            ].map((item) => (
              <SectionBlock key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-steel/10 flex items-center justify-center">
                    <span className="text-steel font-bold text-lg">{item.step}</span>
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
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="technical-line w-full absolute top-0" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Crie um mundo especial para seu filho</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Entre em contato e solicite um projeto personalizado para o quarto infantil.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3 bg-steel text-steel-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-steel/90 transition-colors">
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
          <p className="text-primary-foreground/40 text-sm">DESIGN KIDS — Uma marca <Link to="/" className="text-steel hover:underline">GILEN Industrial</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default DesignKidsPage;
