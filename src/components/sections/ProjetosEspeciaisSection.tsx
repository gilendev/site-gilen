import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProjetosEspeciaisSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10" />

      {/* Orbital decoration */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10">
        <div className="absolute inset-0 rounded-full border border-primary-foreground/20" />
        <div className="absolute inset-8 rounded-full border border-accent/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block"
          >
            Sob Demanda
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
          >
            Projetos
            <br />
            <span className="text-primary-foreground/50">Especiais</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/50 leading-relaxed mb-10 text-lg"
          >
            A GILEN Industrial recebe demandas técnicas específicas e desenvolve soluções personalizadas utilizando engenharia aplicada, modelagem computacional e fabricação industrial.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold"
            >
              <Link to="/contato">
                Solicite um orçamento
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjetosEspeciaisSection;
