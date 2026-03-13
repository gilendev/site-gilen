import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Factory, Boxes, Wrench } from "lucide-react";

const solutions = [
{
  icon: Cpu,
  title: "Engenharia",
  description: "Desenvolvimento técnico de soluções industriais e estruturas especializadas.",
  color: "accent-blue"
},
{
  icon: Factory,
  title: "Produção Industrial",
  description: "Capacidade produtiva com processos CNC e fabricação de alta precisão.",
  color: "accent-green"
},
{
  icon: Boxes,
  title: "Estruturas Personalizadas",
  description: "Projetos estruturais personalizados para aplicações técnicas.",
  color: "accent"
},
{
  icon: Wrench,
  title: "Projetos Especiais",
  description: "Soluções desenvolvidas sob medida para demandas complexas.",
  color: "steel"
}];


const SolucoesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted relative">
      {/* Technical line top */}
      <div className="technical-line w-full absolute top-0" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Soluções
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Capacidades Industriais
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) =>
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-card p-8 rounded-sm border border-border hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            
              <div className={`w-12 h-12 rounded-sm bg-${solution.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <solution.icon className={`text-${solution.color}`} size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">{solution.description}</p>
              <div className="mt-6 w-8 h-0.5 bg-border group-hover:w-16 group-hover:bg-accent-blue transition-all duration-300" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default SolucoesSection;