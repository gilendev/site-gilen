import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendonça",
    role: "Diretor de Operações",
    company: "TechSound Eventos",
    text: "A GILEN transformou nosso projeto em realidade com qualidade excepcional. Os cases fabricados superaram nossas expectativas em durabilidade e acabamento.",
    rating: 5,
  },
  {
    name: "Fernanda Oliveira",
    role: "Arquiteta",
    company: "Studio FO Arquitetura",
    text: "Parceria incrível no desenvolvimento de fachadas paramétricas. A equipe técnica é extremamente competente e o prazo foi cumprido à risca.",
    rating: 5,
  },
  {
    name: "Roberto Dias",
    role: "Gerente de Produção",
    company: "LogiPack Embalagens",
    text: "Trabalhamos com a GILEN há mais de 3 anos. A precisão dos cortes CNC e a qualidade dos acabamentos são referência no mercado.",
    rating: 5,
  },
  {
    name: "Juliana Campos",
    role: "Proprietária",
    company: "Pet House Premium",
    text: "Os produtos da linha Comicpets são fantásticos! Design moderno, acabamento impecável e meus clientes adoram. Recomendo fortemente.",
    rating: 5,
  },
  {
    name: "André Martins",
    role: "Chef Executivo",
    company: "Grill Master Steakhouse",
    text: "As churrasqueiras e equipamentos Gourmetizze elevaram nosso restaurante a outro nível. Qualidade profissional com design diferenciado.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que nossos <span className="text-steel">clientes</span> dizem
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center relative"
        >
          <Quote className="mx-auto text-accent-blue/20 mb-6" size={48} />

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
              ))}
            </div>

            <p className="text-foreground text-lg md:text-xl leading-relaxed italic mb-6">
              "{t.text}"
            </p>

            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-sm">
                {t.role} — {t.company}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-accent-blue" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
