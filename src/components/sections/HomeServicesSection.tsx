import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Factory, Boxes, Wrench } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Engenharia",
    description: "Desenvolvimento técnico de soluções industriais com modelagem 3D e análise estrutural.",
    link: "/solucoes",
    gradient: "from-accent-blue/10 to-accent-blue/5",
    iconColor: "text-accent-blue",
    borderColor: "border-accent-blue/20",
  },
  {
    icon: Factory,
    title: "Produção Industrial",
    description: "Planta equipada com CNC e tecnologia de ponta para fabricação de alta precisão.",
    link: "/tecnologia",
    gradient: "from-accent-green/10 to-accent-green/5",
    iconColor: "text-accent-green",
    borderColor: "border-accent-green/20",
  },
  {
    icon: Boxes,
    title: "Estruturas Personalizadas",
    description: "Projetos estruturais sob medida para aplicações técnicas e comerciais.",
    link: "/projetos",
    gradient: "from-accent/10 to-accent/5",
    iconColor: "text-accent",
    borderColor: "border-accent/20",
  },
  {
    icon: Wrench,
    title: "Projetos Especiais",
    description: "Soluções desenvolvidas sob demanda para necessidades complexas e únicas.",
    link: "/projetos-especiais",
    gradient: "from-steel/10 to-steel/5",
    iconColor: "text-steel",
    borderColor: "border-steel/20",
  },
];

const HomeServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4 block">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Soluções que transformam
            <br />
            <span className="text-steel font-light">a indústria</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link
                to={service.link}
                className={`group block h-full p-6 md:p-8 rounded-lg border ${service.borderColor} bg-gradient-to-br ${service.gradient} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <service.icon className={`w-10 h-10 ${service.iconColor} mb-5`} strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className={`inline-flex items-center text-xs font-medium ${service.iconColor} uppercase tracking-wider`}>
                  Saiba mais
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
