import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Factory, Boxes, Wrench, CheckCircle, Clock, Ruler, Headphones, ArrowRight, Pencil, Box, Cog, Paintbrush, Scissors, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import imgSolucoes from "@/assets/img-solucoes.jpg";

const solutions = [
  {
    icon: Cpu,
    title: "Engenharia",
    description: "Desenvolvimento técnico de soluções industriais e estruturas especializadas.",
    color: "accent-blue",
  },
  {
    icon: Factory,
    title: "Produção Industrial",
    description: "Capacidade produtiva com processos CNC e fabricação de alta precisão.",
    color: "accent-green",
  },
  {
    icon: Boxes,
    title: "Estruturas Personalizadas",
    description: "Projetos estruturais personalizados para aplicações técnicas.",
    color: "accent",
  },
  {
    icon: Wrench,
    title: "Projetos Especiais",
    description: "Soluções desenvolvidas sob medida para demandas complexas.",
    color: "steel",
  },
];

const solutionDetails = [
  {
    icon: Cpu,
    title: "Engenharia",
    description: "Nossa equipe de engenharia desenvolve soluções técnicas completas, desde a concepção até a documentação final do projeto.",
    capabilities: [
      { icon: Pencil, text: "Projeto técnico e detalhamento" },
      { icon: Box, text: "Modelagem 3D e renderização" },
      { icon: Ruler, text: "Análise estrutural e dimensional" },
      { icon: CheckCircle, text: "Documentação técnica completa" },
    ],
  },
  {
    icon: Factory,
    title: "Produção Industrial",
    description: "Planta industrial equipada com tecnologia de ponta para fabricação de alta precisão e acabamento superior.",
    capabilities: [
      { icon: Cog, text: "Usinagem CNC de precisão" },
      { icon: Scissors, text: "Corte a laser e dobra" },
      { icon: Wrench, text: "Soldagem certificada" },
      { icon: Paintbrush, text: "Pintura eletrostática industrial" },
    ],
  },
  {
    icon: Boxes,
    title: "Estruturas Personalizadas",
    description: "Fabricação de estruturas sob medida para as mais diversas aplicações industriais e comerciais.",
    capabilities: [
      { icon: Box, text: "Racks e gabinetes técnicos" },
      { icon: Boxes, text: "Cases para transporte e proteção" },
      { icon: Wrench, text: "Suportes e fixações especiais" },
      { icon: CheckCircle, text: "Painéis e estruturas modulares" },
    ],
  },
  {
    icon: Wrench,
    title: "Projetos Especiais",
    description: "Atendimento personalizado para demandas complexas que exigem soluções únicas e inovadoras.",
    capabilities: [
      { icon: Headphones, text: "Consultoria técnica especializada" },
      { icon: FlaskConical, text: "Prototipagem e validação" },
      { icon: Factory, text: "Produção sob demanda" },
      { icon: CheckCircle, text: "Acompanhamento pós-entrega" },
    ],
  },
];

const differentials = [
  { icon: Ruler, title: "Precisão", desc: "Processos industriais com tolerâncias rigorosas e controle dimensional." },
  { icon: Clock, title: "Prazos", desc: "Compromisso com cronogramas e entregas dentro do prazo acordado." },
  { icon: Cog, title: "Personalização", desc: "Cada projeto é desenvolvido sob medida para a necessidade do cliente." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Acompanhamento completo desde o projeto até a instalação final." },
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

const SolucoesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 lg:py-40 bg-graphite overflow-hidden">
        <img src={imgSolucoes} alt="Corte a laser industrial" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 to-graphite/90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue mb-4 block">
              Soluções
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
              Nossas <span className="text-accent-blue">Soluções</span>
            </h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg leading-relaxed">
              Capacidades industriais completas para transformar seu projeto em realidade — da engenharia à entrega final.
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* Overview Cards */}
      <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Visão Geral
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Capacidades <span className="text-steel">Industriais</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card p-8 rounded-sm border border-border hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-sm bg-${solution.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <solution.icon className={`text-${solution.color}`} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">{solution.description}</p>
                <div className="mt-6 w-8 h-0.5 bg-border group-hover:w-16 group-hover:bg-accent-blue transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Details */}
      {solutionDetails.map((detail, index) => (
        <section
          key={detail.title}
          className={`py-16 md:py-24 lg:py-32 ${index % 2 === 0 ? "bg-muted" : "bg-background"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Icon Side */}
              <SectionBlock className="lg:w-1/3 flex justify-center">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-graphite flex items-center justify-center">
                  <detail.icon className="text-accent-blue" size={40} />
                </div>
              </SectionBlock>

              {/* Content Side */}
              <SectionBlock className="lg:w-2/3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-3 block">
                  {String(index + 1).padStart(2, "0")} — Solução
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {detail.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {detail.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {detail.capabilities.map((cap) => (
                    <div key={cap.text} className="flex items-center gap-3 p-3 rounded-sm bg-card border border-border">
                      <cap.icon className="text-accent-blue shrink-0" size={18} />
                      <span className="text-sm text-foreground">{cap.text}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            </div>
          </div>
        </section>
      ))}

      {/* Differentials */}
      <section className="py-16 md:py-24 lg:py-32 bg-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Por que escolher a <span className="text-accent-blue">GILEN</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {differentials.map((diff) => (
              <SectionBlock key={diff.title}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-blue/10 flex items-center justify-center">
                    <diff.icon className="text-accent-blue" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">{diff.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{diff.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Solicite um orçamento
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Entre em contato e descubra como nossas soluções podem atender às suas necessidades.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-accent-blue-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors"
            >
              Fale Conosco
              <ArrowRight size={16} />
            </Link>
          </SectionBlock>
        </div>
      </section>
    </div>
  );
};

export default SolucoesSection;
