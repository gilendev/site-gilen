import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Target, Eye, Shield, Users, Factory, Cog, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
{ year: "2010", title: "Fundação", desc: "Nasce a GIL Case e Suporte, focada em estruturas técnicas e cases sob medida." },
{ year: "2015", title: "Expansão", desc: "Ampliação da capacidade produtiva e entrada em novos segmentos de mercado." },
{ year: "2018", title: "Novas Tecnologias", desc: "Incorporação de CNC e processos industriais avançados à linha de produção." },
{ year: "2020", title: "Rebranding GILEN", desc: "Evolução da marca para GILEN Industrial, refletindo o novo posicionamento." },
{ year: "2024", title: "Consolidação", desc: "Consolidação como referência em soluções industriais sob medida." }];


const numbers = [
{ value: "10+", label: "Anos de Mercado" },
{ value: "500+", label: "Projetos Realizados" },
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
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 lg:py-40 bg-graphite overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue mb-4 block">
              Sobre a Empresa
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
              Nossa <span className="text-accent-blue">História</span>
            </h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg leading-relaxed">
              Da GIL Case e Suporte à GILEN Industrial — uma trajetória de evolução, tecnologia e compromisso com a excelência.
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Trajetória</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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
      <section className="py-16 bg-graphite">
        <div className="container mx-auto px-4 lg:px-8">
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
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">Pilares</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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

      {/* Infrastructure */}
      <section className="py-24 lg:py-32 bg-muted">
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
        <div className="absolute inset-0 grid-overlay opacity-10" />
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