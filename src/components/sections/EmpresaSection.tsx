import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Target, Eye, Shield, Users, Factory, Cog, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import imgEmpresa from "@/assets/img-empresa.jpg";
import imgStatsBg from "@/assets/img-stats-bg.jpg";
import imgCtaBg from "@/assets/img-cta-bg.jpg";
import BrandCarousel from "@/components/BrandCarousel";
import { parametrizzeMedia } from "@/data/parametrizze";
import { gourmetizzeMedia } from "@/data/gourmetizze";
import imgComicpetsGato from "@/assets/img-comicpets-gato.jpg";
import imgComicpetsComedouro from "@/assets/img-comicpets-comedouro.jpg";
import imgDesignkidsMesa from "@/assets/img-designkids-mesa.jpg";
import imgDesignkidsEstante from "@/assets/img-designkids-estante.jpg";
import imgGilcaseCases from "@/assets/img-gilcase-cases.jpg";
import imgGilcaseSuportes from "@/assets/img-gilcase-suportes.jpg";

const timeline = [
{ year: "2010", title: "Fundação", desc: "Nasce a GIL Case e Suporte, focada em estruturas técnicas e cases sob medida." },
{ year: "2015", title: "Expansão", desc: "Ampliação da capacidade produtiva e entrada em novos segmentos de mercado." },
{ year: "2018", title: "Novas Tecnologias", desc: "Incorporação de CNC e processos industriais avançados à linha de produção." },
{ year: "2020", title: "Rebranding GILEN", desc: "Evolução da marca para GILEN Industrial, refletindo o novo posicionamento." },
{ year: "2024", title: "Consolidação", desc: "Consolidação como referência em soluções industriais sob medida." }];

const numbers = [
{ value: "13+", label: "Anos de Mercado" },
{ value: "10000+", label: "Projetos Realizados" },
{ value: "1000m²", label: "Planta Industrial" },
{ value: "50+", label: "Clientes Ativos" }];

const pillars = [
{ icon: Target, title: "Missão", desc: "Desenvolver soluções industriais sob medida com excelência técnica, atendendo às necessidades específicas de cada cliente." },
{ icon: Eye, title: "Visão", desc: "Ser referência nacional em engenharia e fabricação de soluções industriais personalizadas." },
{ icon: Shield, title: "Qualidade", desc: "Compromisso com processos rigorosos de controle de qualidade em todas as etapas de produção." },
{ icon: Users, title: "Pessoas", desc: "Valorizamos nossa equipe técnica especializada, investindo em capacitação e desenvolvimento contínuo." }];

const infrastructure = [
{ icon: Factory, title: "Planta Industrial", desc: "Mais de 1000m² de área produtiva equipada para atender demandas complexas." },
{ icon: Cog, title: "CNC & Usinagem", desc: "Máquinas CNC de última geração para cortes e acabamentos de alta precisão." },
{ icon: Zap, title: "Soldagem & Pintura", desc: "Processos certificados de soldagem e pintura eletrostática industrial." }];

const SectionBlock = ({ children, className = "" }: {children: React.ReactNode;className?: string;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}>
      {children}
    </motion.div>);
};

const EmpresaSection = () => {
  return (
    <div>
      {/* Hero Banner with Image */}
      <section className="relative py-20 md:py-28 lg:py-40 bg-graphite overflow-hidden">
        <img src={imgEmpresa} alt="Fabricação industrial GILEN" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 to-graphite/90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue mb-4 block">
              Sobre a Empresa
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
              Nossa <span className="text-accent-blue">História</span>
            </h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg leading-relaxed">
              Da <span className="text-red-600">GIL Case e Suporte</span> à GILEN Industrial — uma trajetória de evolução, tecnologia e compromisso com a excelência.
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-10 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Trajetória</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Evolução <span className="text-steel">Industrial</span>
            </h2>
          </SectionBlock>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) =>
            <SectionBlock key={item.year} className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-blue -translate-x-1.5 mt-2 z-10" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <span className="text-accent-blue font-bold text-sm">{item.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </SectionBlock>
            )}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-graphite relative overflow-hidden">
        <img src={imgStatsBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-graphite/70" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {numbers.map((stat) =>
            <SectionBlock key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-blue">{stat.value}</div>
                <div className="text-primary-foreground/60 text-sm mt-2 uppercase tracking-wider">{stat.label}</div>
              </SectionBlock>
            )}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-10 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Pilares</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Missão, Visão & <span className="text-steel">Valores</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) =>
            <SectionBlock key={p.title}>
                <div className="p-6 rounded-sm border border-border bg-card hover:border-accent-blue/30 transition-colors h-full">
                  <p.icon className="text-accent-blue mb-4" size={28} />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">{p.desc}</p>
                </div>
              </SectionBlock>
            )}
          </div>
        </div>
      </section>

      {/* Marcas & Produtos Carousel */}
      <BrandCarousel
        subtitle="Nossas Marcas"
        title="Marcas &"
        titleAccent="Produtos"
        images={[
          { src: parametrizzeMedia.cnc, alt: "Fabricação CNC — Parametrizze" },
          { src: gourmetizzeMedia.quadrada, alt: "Churrasqueira dobrável de chapa da Gourmetizze" },
          { src: imgComicpetsGato, alt: "Comicpets - Produtos para gatos" },
          { src: imgDesignkidsMesa, alt: "Design Kids - Mesa infantil" },
          { src: imgGilcaseCases, alt: "Gil Cases - Cases sob medida" },
          { src: parametrizzeMedia.paineis, alt: "Painéis paramétricos — Parametrizze" },
          { src: gourmetizzeMedia.meiaLua, alt: "Braseiro meia-lua com grelha da Gourmetizze" },
          { src: imgComicpetsComedouro, alt: "Comicpets - Comedouro personalizado" },
          { src: imgDesignkidsEstante, alt: "Design Kids - Estante infantil" },
          { src: imgGilcaseSuportes, alt: "Gil Cases - Suportes técnicos" },
          { src: parametrizzeMedia.mobiliario, alt: "Mobiliário paramétrico — Parametrizze" },
          { src: gourmetizzeMedia.fogareiro, alt: "Fogareiro de chapa de encaixe da Gourmetizze" },
        ]}
        accentColor="bg-accent-blue"
      />

      {/* Infrastructure */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Estrutura</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Infraestrutura <span className="text-steel">Produtiva</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructure.map((item) =>
            <SectionBlock key={item.title}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-graphite flex items-center justify-center">
                    <item.icon className="text-accent-blue" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionBlock>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-graphite relative overflow-hidden">
        <img src={imgCtaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-graphite/70" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Vamos construir juntos?
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Entre em contato e descubra como a GILEN pode transformar seu projeto em realidade.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-accent-blue-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors">
              Fale Conosco
              <ArrowRight size={16} />
            </Link>
          </SectionBlock>
        </div>
      </section>
    </div>);
};

export default EmpresaSection;
