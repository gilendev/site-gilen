import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Shield, Box, Truck, Wrench, Monitor, Package } from "lucide-react";
import BrandNavbar from "@/components/layout/BrandNavbar";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/img-gilcase-hero.jpg";
import imgCases from "@/assets/img-gilcase-cases.jpg";
import imgSuportes from "@/assets/img-gilcase-suportes.jpg";
import imgTotens from "@/assets/img-gilcase-totens.jpg";
import imgFabricacao from "@/assets/img-gilcase-fabricacao.jpg";
import BrandCarousel from "@/components/BrandCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
// Cases
import imgCaseAzulConjunto from "@/assets/cases/case-azul-conjunto.png";
import imgCaseAmareloKit from "@/assets/cases/case-amarelo-kit.png";
import imgCaseFirmaLed from "@/assets/cases/case-firma-led.png";
import imgCaseRackGavetas1 from "@/assets/cases/case-rack-gavetas-1.png";
import imgCasePainelLed1 from "@/assets/cases/case-painel-led-1.png";
import imgCaseProjetorCinema1 from "@/assets/cases/case-projetor-cinema-1.png";
import imgCaseSerralheria1 from "@/assets/cases/case-serralheria-1.png";
import imgCaseVerticalEquip1 from "@/assets/cases/case-vertical-equip-1.png";
import imgCaseIgrejaAdventista1 from "@/assets/cases/case-igreja-adventista-1.png";
import imgCaseFirmaEspuma from "@/assets/cases/case-firma-espuma.png";
// Suportes
import imgSup1 from "@/assets/gilcase-suporte-1.png";
import imgSup3 from "@/assets/gilcase-suporte-3.png";
import imgSup5 from "@/assets/gilcase-suporte-5.png";
import imgSup7 from "@/assets/gilcase-suporte-7.png";
import imgSup9 from "@/assets/gilcase-suporte-9.png";
import imgSup11 from "@/assets/gilcase-suporte-11.png";
// Totens
import imgTotemDrogal from "@/assets/totens/totem-drogal.png";
import imgTotemNissan from "@/assets/totens/totem-nissan.png";
import imgTotemEletroposto from "@/assets/totens/totem-eletroposto.png";
import imgTotemVarejo from "@/assets/totens/totem-varejo.png";
// Estruturas
import imgFachadaByd from "@/assets/estruturas/fachada-concessionaria-byd-1.jpg";
import imgGeodesica from "@/assets/estruturas/geodesica-led-1.jpg";
import imgPainelClube from "@/assets/estruturas/painel-led-clube-1.jpg";
import imgCilindroLed from "@/assets/estruturas/cilindro-led-evento-1.png";
import imgPainelAeroporto from "@/assets/estruturas/painel-led-aeroporto-1.jpeg";
import imgTruckLed from "@/assets/estruturas/truck-led-1.jpg";

const logoGilCase = "/lovable-uploads/logo-gilcase.jpeg";

const products = [
  {
    image: imgCases,
    title: "Linha de Cases",
    description: "Cases personalizados em compensado de 6, 10 e 15mm para transporte e proteção de equipamentos de áudio, vídeo, iluminação, instrumentos musicais, ferramentas, drones e muito mais.",
    link: "/gil-cases/produtos/cases",
  },
  {
    image: imgSup1,
    title: "Linha de Suportes",
    description: "Pedestais e suportes para TVs, monitores e painéis de LED. Modelos unitários, duplos, triplos e articulados para eventos, videowall e instalações permanentes.",
    link: "/gil-cases/produtos/suportes",
  },
  {
    image: imgTotens,
    title: "Totens Interativos",
    description: "Estruturas para totens interativos com design profissional para pontos de venda, recepções, feiras e eventos corporativos.",
    link: "/gil-cases/produtos/totens",
  },
  {
    image: imgFabricacao,
    title: "Estruturas Metálicas",
    description: "Desenvolvemos cases e estruturas especiais sob medida para necessidades específicas, com acabamento de alta qualidade e materiais nacionais e importados.",
    link: "/gil-cases/produtos/estruturas-metalicas",
  },
];

const features = [
  { icon: Shield, title: "Proteção Total", desc: "Cases com espuma personalizada e reforços em alumínio para máxima proteção dos seus equipamentos." },
  { icon: Package, title: "Sob Medida", desc: "Todos os produtos são fabricados sob medida, atendendo às dimensões e especificidades de cada equipamento." },
  { icon: Wrench, title: "Acabamento Premium", desc: "Matéria-prima de alta qualidade com fornecedores nacionais e importados, garantindo durabilidade e acabamento impecável." },
  { icon: Monitor, title: "Audiovisual", desc: "Especialistas em soluções para TV, LED, áudio, vídeo, iluminação e instrumentos musicais." },
  { icon: Truck, title: "Transporte Seguro", desc: "Cases projetados para suportar as condições mais adversas de transporte e logística." },
  { icon: Box, title: "+13 Anos de Experiência", desc: "Mais de uma década de especialização na fabricação de cases e suportes profissionais." },
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

const GilCasesPage = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background gilcase-brand">
      <SEOHead title="Gil Cases & Suportes" description="Cases personalizados e suportes profissionais para equipamentos de áudio, vídeo, iluminação e instrumentos musicais. 13+ anos de experiência." path="/gil-cases" />
      <BrandNavbar
        brandName="GIL CASES"
        logoSrc={logoGilCase}
        backTo="/marcas"
        backLabel="Voltar para GILEN"
        sections={[
          { id: "hero", label: "Início" },
          { id: "sobre", label: "Sobre" },
          { id: "galeria", label: "Galeria" },
          { id: "produtos", label: "Produtos", href: "/gil-cases/produtos" },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "processo", label: "Processo" },
          { id: "contato-cta", label: "Contato" },
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-36">
        <img src={imgHero} alt="Cases profissionais Gil Case" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
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
              GIL CASES <br />& SUPORTES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl text-justify"
            >
              Fabricamos cases personalizados para soluções em transporte e segurança de todos os modelos de materiais, com matéria-prima em compensado de 6 e 10mm para materiais de leve e médio peso e de 15mm para materiais pesados.
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
            <SectionBlock className="text-justify">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
                Sobre a Marca
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Especialistas em <span className="text-steel">cases e suportes</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                Com experiência de mais de 13 anos, a GilCase vem se especializando na fabricação de cases e suportes. Todos os produtos possuem acabamento de alta qualidade.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                Contamos com uma equipe de funcionários altamente treinados e qualificados para oferecer produtos com qualidade e excelente custo-benefício.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                Pensando na praticidade e comodidade dos nossos clientes, criamos produtos exclusivos e executamos projetos sob medida e projetos especiais, com os melhores fornecedores de matérias-primas nacionais e importadas.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "13+", label: "Anos" },
                  { value: "10000+", label: "Projetos" },
                  { value: "100%", label: "Sob Medida" },
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
                <img src={imgFabricacao} alt="Fabricação de cases GilCase" className="w-full h-80 lg:h-[450px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Fabricação</span>
                  <p className="text-white font-semibold mt-1">Mão de obra especializada</p>
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
        linkTo="/gil-cases/produtos"
        images={[
          // Cases
          { src: imgCaseAzulConjunto, alt: "Cases azuis profissionais empilhados" },
          { src: imgCaseAmareloKit, alt: "Kit de cases amarelos" },
          { src: imgCaseFirmaLed, alt: "Case para painel LED" },
          { src: imgCaseRackGavetas1, alt: "Case rack com gavetas" },
          { src: imgCasePainelLed1, alt: "Case para painel LED grande formato" },
          { src: imgCaseProjetorCinema1, alt: "Case para projetor de cinema" },
          { src: imgCaseSerralheria1, alt: "Case serralheria profissional" },
          { src: imgCaseVerticalEquip1, alt: "Case vertical para equipamentos" },
          { src: imgCaseIgrejaAdventista1, alt: "Case Igreja Adventista" },
          { src: imgCaseFirmaEspuma, alt: "Case com espuma interna personalizada" },
          // Suportes
          { src: imgSup1, alt: "Suporte profissional para equipamentos" },
          { src: imgSup3, alt: "Suporte técnico sob medida" },
          { src: imgSup5, alt: "Suporte para monitor profissional" },
          { src: imgSup7, alt: "Suporte industrial personalizado" },
          { src: imgSup9, alt: "Suporte para painel LED" },
          { src: imgSup11, alt: "Suporte técnico especial" },
          // Totens
          { src: imgTotemDrogal, alt: "Totem interativo Drogal" },
          { src: imgTotemNissan, alt: "Totem interativo Nissan" },
          { src: imgTotemEletroposto, alt: "Totem para eletroposto" },
          { src: imgTotemVarejo, alt: "Totem interativo para varejo" },
          // Estruturas Metálicas
          { src: imgFachadaByd, alt: "Fachada LED concessionária BYD" },
          { src: imgGeodesica, alt: "Estrutura geodésica LED" },
          { src: imgPainelClube, alt: "Painel LED para clube esportivo" },
          { src: imgCilindroLed, alt: "Cilindro LED para evento" },
          { src: imgPainelAeroporto, alt: "Painel LED aeroporto" },
          { src: imgTruckLed, alt: "Truck LED mídia exterior" },
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
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-justify">
              Cases, suportes, totens interativos e estruturas para todos os segmentos profissionais.
            </p>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-sm overflow-hidden ${product.link ? '' : 'cursor-pointer'}`}
              >
                {product.link && (
                  <Link to={product.link} className="absolute inset-0 z-20" />
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed text-justify">{product.description}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-blue group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gil-cases/produtos" className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-accent-blue-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors">
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
              Por que <span className="text-steel">Gil Case</span>
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
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{feature.desc}</p>
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
              { step: "01", title: "Briefing", desc: "Entendemos suas necessidades de transporte e proteção dos equipamentos." },
              { step: "02", title: "Projeto", desc: "Desenvolvemos o case sob medida com as dimensões e compartimentos ideais." },
              { step: "03", title: "Fabricação", desc: "Produzimos com materiais de alta qualidade e acabamento premium." },
              { step: "04", title: "Entrega", desc: "Entregamos o case pronto para uso, com total segurança para seus equipamentos." },
            ].map((item) => (
              <SectionBlock key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-blue/10 flex items-center justify-center">
                    <span className="text-accent-blue font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed text-justify">{item.desc}</p>
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
              Tenha o melhor case. Tenha um GilCase!
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-justify">
              Entre em contato e solicite um orçamento personalizado para proteger e transportar seus equipamentos com segurança.
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
            GIL CASES E SUPORTES — Uma marca <Link to="/" className="text-accent-blue hover:underline">GILEN Industrial</Link>
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default GilCasesPage;
