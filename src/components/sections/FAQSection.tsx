import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quais tipos de projetos a GILEN atende?",
    a: "Atendemos uma ampla gama de projetos industriais: cases e suportes técnicos, totens interativos, mobiliário paramétrico, estruturas metálicas sob medida, equipamentos gourmet, produtos pet e mobiliário infantil — sempre com engenharia personalizada.",
  },
  {
    q: "Qual o prazo médio de fabricação?",
    a: "O prazo varia conforme a complexidade do projeto. Projetos simples podem ser entregues em 5 a 10 dias úteis, enquanto projetos especiais ou de grande porte podem levar de 15 a 30 dias. Fornecemos um cronograma detalhado após a aprovação do orçamento.",
  },
  {
    q: "Vocês atendem todo o Brasil?",
    a: "Sim! Embora nossa planta industrial esteja localizada em São Paulo, realizamos entregas e instalações em todo o território nacional, com logística dedicada para garantir a integridade dos produtos.",
  },
  {
    q: "Como funciona o processo de orçamento?",
    a: "O processo é simples: envie seu projeto ou necessidade pelo formulário de contato ou WhatsApp. Nossa equipe técnica analisa a demanda, elabora um estudo de viabilidade e retorna com um orçamento detalhado, geralmente em até 48 horas úteis.",
  },
  {
    q: "Quais materiais vocês trabalham?",
    a: "Trabalhamos com aço carbono, aço inox, alumínio, MDF, acrílico, polímeros e materiais compostos. Cada projeto recebe a especificação de material mais adequada para sua aplicação.",
  },
  {
    q: "Vocês fazem projetos sob medida a partir de desenhos técnicos?",
    a: "Sim! Aceitamos desenhos técnicos em formatos como DWG, DXF, STEP e PDF. Caso não tenha um projeto pronto, nossa equipe de engenharia pode desenvolver o projeto do zero conforme suas necessidades.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-10 md:py-14 lg:py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Perguntas <span className="text-steel">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-sm px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-medium text-sm md:text-base hover:text-accent-blue transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
