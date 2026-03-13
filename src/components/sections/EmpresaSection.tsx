import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EmpresaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}>
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Evolução
              <br />
              <span className="text-steel">Industrial</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-justify">
                A GILEN Industrial nasce da evolução da GIL Case e Suporte, empresa que ao longo de mais de uma década construiu experiência no desenvolvimento de estruturas técnicas e soluções personalizadas.
              </p>
              <p className="text-justify">
                Com a expansão da capacidade produtiva e incorporação de novas tecnologias, a empresa evoluiu para um novo posicionamento industrial.
              </p>
              <p className="text-justify">
                Hoje a GILEN atua no desenvolvimento, engenharia e fabricação de soluções sob medida, combinando conhecimento técnico, processos industriais e experiência prática.
              </p>
            </div>
            <Link
              to="/empresa"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 uppercase tracking-wider transition-colors">
              
              Conheça nossa história
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative">
            
            <div className="aspect-[4/3] bg-gradient-to-br from-graphite to-primary rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 grid-overlay opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground/60">G</span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/40">
                    Desde 2010
                  </span>
                </div>
              </div>
              {/* Decorative lines */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent-blue/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default EmpresaSection;