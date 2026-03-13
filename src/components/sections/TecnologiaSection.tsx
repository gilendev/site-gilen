import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, ScanLine, Cog, Monitor } from "lucide-react";

const capabilities = [
{ icon: ScanLine, label: "CNC de Alta Precisão" },
{ icon: Monitor, label: "Modelagem Computacional" },
{ icon: Cog, label: "Processos Industriais" },
{ icon: Gauge, label: "Controle de Qualidade" }];


const TecnologiaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-graphite text-graphite-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1">
            
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) =>
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-graphite-foreground/5 border border-graphite-foreground/10 p-6 rounded-sm hover:bg-graphite-foreground/10 transition-colors">
                
                  <cap.icon className="text-accent-blue mb-3" size={28} />
                  <span className="text-sm font-medium text-graphite-foreground/80">{cap.label}</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2">
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Tecnologia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Fabricação
              <br />
              <span className="text-graphite-foreground/50">Avançada</span>
            </h2>
            <p className="text-graphite-foreground/60 leading-relaxed mb-6 text-justify">
              A GILEN Industrial utiliza tecnologia de fabricação avançada, incluindo processos CNC de alta precisão, modelagem computacional e desenvolvimento técnico especializado.
            </p>
            <p className="text-graphite-foreground/60 leading-relaxed text-justify">
              Nossa estrutura permite transformar projetos complexos em soluções industriais reais.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default TecnologiaSection;