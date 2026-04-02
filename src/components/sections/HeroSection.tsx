import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/video-gilen.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 md:pt-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-sm bg-accent/10 border border-accent/20 text-accent-foreground mb-6 md:mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-accent">
              Engenharia Industrial Avançada
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-4 md:mb-6"
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
            className="text-lg md:text-2xl font-light text-primary-foreground/60 mb-3 md:mb-4"
          >
            Engenharia, Precisão e Soluções Industriais
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block text-sm md:text-lg text-primary-foreground/40 max-w-xl mb-8 md:mb-10 leading-relaxed"
          >
            Projetamos, desenvolvemos e fabricamos soluções industriais com engenharia aplicada e capacidade produtiva avançada.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="whatsapp-hover bg-accent hover:bg-accent/90 text-accent-foreground px-6 md:px-8 h-11 md:h-12 text-xs md:text-sm uppercase tracking-wider font-semibold"
            >
              <Link to="/solucoes">
                <FaWhatsapp className="whatsapp-icon" size={18} />
                Conheça nossas soluções
                <ArrowRight className="default-icon ml-2" size={16} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-[#25D366] hover:border-[#25D366] hover:text-white px-6 md:px-8 h-11 md:h-12 text-xs md:text-sm uppercase tracking-wider font-semibold transition-colors duration-300"
            >
              <a href="https://wa.me/5511968756430?text=Falar%20com%20a%20Gilen%20Industrial" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2" size={18} />
                Fale com o comercial da Gilen
              </a>
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-primary-foreground/10 grid grid-cols-3 gap-4 md:gap-8"
          >
            {[
              { value: "13+", label: "Anos de Experiência" },
              { value: "9000+", label: "Projetos Realizados" },
              { value: "5+", label: "Marcas Próprias" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-primary-foreground/40 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
