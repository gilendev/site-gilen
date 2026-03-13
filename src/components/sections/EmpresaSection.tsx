import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Target, Eye, Shield, Cpu, Factory, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2010", title: "Fundação", description: "Início das operações como Gil Case e Suporte, fabricando cases e estruturas técnicas sob medida." },
  { year: "2014", title: "Expansão", description: "Ampliação do parque fabril e incorporação de novos processos de fabricação industrial." },
  { year: "2018", title: "Marcas Próprias", description: "Lançamento das primeiras marcas próprias, consolidando a identidade no mercado." },
  { year: "2022", title: "GILEN Industrial", description: "Evolução para GILEN Industrial, com novo posicionamento e capacidade produtiva ampliada." },
  { year: "2024", title: "Inovação Contínua", description: "Investimento em tecnologia CNC avançada e engenharia computacional de ponta." },
];

const values = [
  { icon: Target, title: "Precisão", description: "Cada detalhe importa. Trabalhamos com tolerâncias rigorosas e controle de qualidade em todas as etapas." },
  { icon: Eye, title: "Inovação", description: "Buscamos continuamente novas tecnologias e processos para entregar soluções cada vez melhores." },
  { icon: Shield, title: "Confiabilidade", description: "Construímos relações de longo prazo baseadas em entregas consistentes e compromisso com prazos." },
  { icon: Users, title: "Parceria", description: "Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades desde o projeto até a entrega." },
];

const numbers = [
  { value: "10+", label: "Anos de Mercado" },
  { value: "500+", label: "Projetos Entregues" },
  { value: "4", label: "Marcas Próprias" },
  { value: "50+", label: "Clientes Ativos" },
];

const EmpresaSection = () => {
  const heroRef = useRef(null);
  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  const numbersRef = useRef(null);
  const infraRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const historyInView = useInView(historyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const numbersInView = useInView(numbersRef, { once: true, margin: "-100px" });
  const infraInView = useInView(infraRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Banner */}
      <section ref={heroRef} className="py-24 lg:py-32 bg-graphite text-graphite-foreground relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Sobre a Empresa
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Evolução
              <br />
              <span className="text-graphite-foreground/50">Industrial</span>
            </h1>
            <p className="text-lg text-graphite-foreground/60 leading-relaxed max-w-2xl">
              A GILEN Industrial nasce da evolução da GIL Case e Suporte, empresa que ao longo de mais de uma década 
              construiu experiência no desenvolvimento de estruturas técnicas e soluções personalizadas.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-accent-blue/20" />
        <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-accent/20" />
      </section>

      {/* História / Sobre */}
      <section ref={historyRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
                De Cases a Soluções
                <br />
                <span className="text-steel">Industriais Completas</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  A GILEN Industrial nasce da evolução da GIL Case e Suporte, empresa que ao longo de mais de uma década 
                  construiu experiência sólida no desenvolvimento de estruturas técnicas e soluções personalizadas.
                </p>
                <p className="text-justify">
                  Com a expansão da capacidade produtiva e incorporação de novas tecnologias, a empresa evoluiu para um 
                  novo posicionamento industrial, passando a atuar em projetos de maior complexidade e escala.
                </p>
                <p className="text-justify">
                  Hoje a GILEN atua no desenvolvimento, engenharia e fabricação de soluções sob medida, combinando 
                  conhecimento técnico acumulado, processos industriais avançados e experiência prática de campo.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={historyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-muted border-2 border-accent-blue flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent-blue" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-blue">{item.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section ref={numbersRef} className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {numbers.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={numbersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-primary-foreground/60 mt-2 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section ref={valuesRef} className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Nossos Pilares
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              O Que Nos Move
            </h2>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-sm border border-border"
            >
              <div className="w-12 h-12 rounded-sm bg-accent-blue/10 flex items-center justify-center mb-6">
                <Target className="text-accent-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Desenvolver e fabricar soluções industriais sob medida com engenharia de precisão, 
                atendendo às demandas mais complexas do mercado com excelência técnica e compromisso com prazos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-sm border border-border"
            >
              <div className="w-12 h-12 rounded-sm bg-accent-green/10 flex items-center justify-center mb-6">
                <Eye className="text-accent-green" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Ser referência nacional em engenharia e fabricação industrial personalizada, 
                reconhecida pela inovação, qualidade e capacidade de transformar projetos complexos em realidade.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-card p-6 rounded-sm border border-border hover:border-accent-blue/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-accent-blue" size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section ref={infraRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={infraInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
                Infraestrutura
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
                Capacidade
                <br />
                <span className="text-steel">Produtiva</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  Nossa planta industrial é equipada com máquinas CNC de última geração, estações de trabalho 
                  especializadas e áreas dedicadas para montagem e controle de qualidade.
                </p>
                <p className="text-justify">
                  Contamos com uma equipe técnica qualificada e processos otimizados que garantem 
                  eficiência, precisão e agilidade em cada projeto.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Cpu, label: "CNC Avançado" },
                  { icon: Factory, label: "Planta Industrial" },
                  { icon: Award, label: "Controle de Qualidade" },
                  { icon: Users, label: "Equipe Técnica" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={infraInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-muted rounded-sm"
                  >
                    <item.icon className="text-accent-blue shrink-0" size={20} />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={infraInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-graphite to-primary rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 grid-overlay opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center">
                      <Factory className="text-primary-foreground/60" size={36} />
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/40">
                      Planta Industrial
                    </span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/30" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent-blue/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-graphite text-graphite-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Vamos construir juntos?
            </h2>
            <p className="text-graphite-foreground/60 mb-8 max-w-lg mx-auto">
              Entre em contato com nossa equipe de engenharia e descubra como podemos transformar seu projeto em realidade.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
            >
              Fale Conosco
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EmpresaSection;
