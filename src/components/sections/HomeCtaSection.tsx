import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const HomeCtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--accent-blue)) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Tem um projeto em mente?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/60 mb-8 leading-relaxed">
            Nossa equipe de engenharia está pronta para transformar sua ideia em realidade com precisão industrial.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-12 text-xs md:text-sm uppercase tracking-wider font-semibold"
            >
              <Link to="/contato">
                Solicitar orçamento
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-[#25D366] hover:border-[#25D366] hover:text-white px-8 h-12 text-xs md:text-sm uppercase tracking-wider font-semibold transition-colors"
            >
              <a href="https://wa.me/5511968756430?text=Falar%20com%20a%20Gilen%20Industrial" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2" size={18} />
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCtaSection;
