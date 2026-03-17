import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, ScanLine, Cog, Monitor, ArrowRight, Cpu, Wrench, Paintbrush, Scissors, Ruler, CheckCircle, Factory, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import imgTecnologia from "@/assets/img-tecnologia.jpg";

const technologies = [
  { icon: ScanLine, title: "CNC de Alta Precisão", description: "Usinagem computadorizada com tolerâncias rigorosas para peças e componentes técnicos." },
  { icon: Monitor, title: "Modelagem Computacional", description: "Projetos desenvolvidos em software CAD/CAM para máxima precisão e visualização prévia." },
  { icon: Cog, title: "Processos Industriais", description: "Linha de produção integrada com processos otimizados para qualidade e eficiência." },
  { icon: Gauge, title: "Controle de Qualidade", description: "Inspeção dimensional e verificação de conformidade em todas as etapas produtivas." },
];

const equipment = [
  {
    icon: Cpu,
    title: "Centro de Usinagem CNC",
    specs: ["Precisão de 0,01mm", "Peças complexas em série", "Materiais diversos (aço, alumínio, inox)"],
  },
  {
    icon: Scissors,
    title: "Corte a Laser",
    specs: ["Alta velocidade e precisão", "Chapas de até 20mm", "Acabamento limpo sem rebarbas"],
  },
  {
    icon: Wrench,
    title: "Dobradeira CNC",
    specs: ["Dobras programáveis", "Ângulos precisos e repetíveis", "Chapas de grande formato"],
  },
  {
    icon: Paintbrush,
    title: "Pintura Eletrostática",
    specs: ["Acabamento uniforme e durável", "Resistência à corrosão", "Variedade de cores e texturas"],
  },
  {
    icon: Factory,
    title: "Soldagem Certificada",
    specs: ["MIG, TIG e eletrodo", "Soldadores qualificados", "Controle de qualidade por ensaio"],
  },
  {
    icon: Ruler,
    title: "Metrologia",
    specs: ["Instrumentos calibrados", "Relatórios dimensionais", "Rastreabilidade de medições"],
  },
];

const processSteps = [
  { number: "01", title: "Projeto", description: "Recebimento do projeto técnico ou desenvolvimento em conjunto com o cliente." },
  { number: "02", title: "Engenharia", description: "Análise de viabilidade, modelagem 3D e planejamento de produção." },
  { number: "03", title: "Fabricação", description: "Execução com tecnologia CNC, corte, dobra, soldagem e montagem." },
  { number: "04", title: "Acabamento", description: "Pintura eletrostática, tratamento de superfície e inspeção final." },
  { number: "05", title: "Entrega", description: "Controle de qualidade, embalagem técnica e logística de entrega." },
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

const TecnologiaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 lg:py-40 bg-graphite overflow-hidden">
        <img src={imgTecnologia} alt="Usinagem CNC de precisão" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 to-graphite/90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue mb-4 block">
              Tecnologia
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
              Fabricação <span className="text-accent-blue">Avançada</span>
            </h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg leading-relaxed">
              Infraestrutura industrial equipada com tecnologia de ponta para transformar projetos complexos em soluções reais.
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Capacidades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pilares <span className="text-steel">Tecnológicos</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card p-8 rounded-sm border border-border hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-sm bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <tech.icon className="text-accent-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{tech.title}</h3>
                <div className="flex-1 flex items-end"><p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p></div>
                <div className="mt-6 w-8 h-0.5 bg-border group-hover:w-16 group-hover:bg-accent-blue transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Detail */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Equipamentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Parque <span className="text-steel">Industrial</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              Equipamentos modernos e processos certificados para atender às mais exigentes especificações técnicas.
            </p>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <SectionBlock key={item.title}>
                <div className="bg-card p-8 rounded-sm border border-border h-full">
                  <div className="w-14 h-14 rounded-full bg-graphite flex items-center justify-center mb-6">
                    <item.icon className="text-accent-blue" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="text-accent-blue shrink-0" size={16} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionBlock className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Fluxo de <span className="text-steel">Produção</span>
            </h2>
          </SectionBlock>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <SectionBlock key={step.number}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-graphite flex items-center justify-center relative z-10">
                      <span className="text-accent-blue font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 z-20">
                        <Zap className="text-accent-blue" size={14} />
                      </div>
                    )}
                  </div>
                </SectionBlock>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1000m²", label: "Área Produtiva" },
              { value: "6+", label: "Tipos de Equipamento" },
              { value: "0,01mm", label: "Precisão CNC" },
              { value: "100%", label: "Controle de Qualidade" },
            ].map((stat) => (
              <SectionBlock key={stat.label}>
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-bold text-accent-blue">{stat.value}</span>
                  <p className="text-primary-foreground/60 text-sm mt-2">{stat.label}</p>
                </div>
              </SectionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="technical-line w-full absolute top-0" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <SectionBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conheça nossa estrutura
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Agende uma visita técnica e veja de perto nossa capacidade industrial.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-accent-blue-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors"
            >
              Agende uma Visita
              <ArrowRight size={16} />
            </Link>
          </SectionBlock>
        </div>
      </section>
    </div>
  );
};

export default TecnologiaSection;
