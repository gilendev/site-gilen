import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
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
        poster="https://images.pexels.com/videos/3129671/free-video-3129671.jpg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/60" />

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
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-12 text-sm uppercase tracking-wider font-semibold"
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
