import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgProjetosEspeciais from "@/assets/img-projetos-especiais.jpg";
import { ParallaxBg, ScrollReveal, Floating } from "@/components/animations/ScrollAnimations";

const ProjetosEspeciaisSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 text-primary-foreground overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBg speed={0.5} className="absolute inset-0">
        <img
          src={imgProjetosEspeciais}
          alt="Projetos especiais - soldagem industrial"
          className="w-full h-[140%] object-cover"
        />
      </ParallaxBg>
      <div className="absolute inset-0 bg-primary/80" />

      {/* Floating orbital decoration */}
      <div className="hidden md:block absolute left-[-5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10">
        <Floating amplitude={15} duration={6}>
          <div className="absolute inset-0 rounded-full border border-primary-foreground/20" />
          <div className="absolute inset-8 rounded-full border border-accent/20" />
        </Floating>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
              Sob Demanda
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1} scale>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Projetos
              <br />
              <span className="text-primary-foreground/50">Especiais</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <p className="text-primary-foreground/50 leading-relaxed mb-10 text-lg">
              A GILEN Industrial recebe demandas técnicas específicas e desenvolve soluções personalizadas utilizando engenharia aplicada, modelagem computacional e fabricação industrial.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.35}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProjetosEspeciaisSection;
