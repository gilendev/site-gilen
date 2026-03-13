import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />

      {/* Orbital decorative elements - inspired by logo ellipses */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]">
        <div className="absolute inset-0 rounded-full border border-accent/10 rotate-12" style={{ borderRadius: '50% / 40%' }} />
        <div className="absolute inset-6 rounded-full border border-accent-green/10 -rotate-6" style={{ borderRadius: '45% / 50%' }} />
        <div className="absolute inset-12 rounded-full border border-accent-blue/10 rotate-3" style={{ borderRadius: '50% / 45%' }} />
        <div className="absolute inset-20 rounded-full border border-primary-foreground/5" style={{ borderRadius: '48% / 42%' }} />
        <div className="absolute inset-28 rounded-full border border-primary-foreground/5 rotate-6" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-accent/10 border border-accent/20 text-accent-foreground mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Engenharia Industrial Avançada
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6"
          >
            GILEN
            <br />
            <span className="font-light text-primary-foreground/70">Industrial</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-primary-foreground/60 mb-4"
          >
            Engenharia, Precisão e Soluções Industriais
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-primary-foreground/40 max-w-xl mb-10 leading-relaxed"
          >
            Projetamos, desenvolvemos e fabricamos soluções industriais com engenharia aplicada e capacidade produtiva avançada.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold"
            >
              <Link to="/solucoes">
                Conheça nossas soluções
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-12 text-sm uppercase tracking-wider font-semibold"
            >
              <Link to="/contato">
                <Phone className="mr-2" size={16} />
                Fale com nossa engenharia
              </Link>
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 pt-8 border-t border-primary-foreground/10 grid grid-cols-3 gap-8"
          >
            {[
              { value: "10+", label: "Anos de Experiência" },
              { value: "500+", label: "Projetos Realizados" },
              { value: "4", label: "Marcas Próprias" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-primary-foreground/40 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
