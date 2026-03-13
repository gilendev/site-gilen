import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  "Todos",
  "Estruturas Técnicas",
  "Cases Industriais",
  "Projetos Paramétricos",
  "Projetos Especiais",
];

const projects = [
  { title: "Estrutura Modular CNC", category: "Estruturas Técnicas", year: "2024" },
  { title: "Case Técnico Industrial", category: "Cases Industriais", year: "2024" },
  { title: "Painel Paramétrico", category: "Projetos Paramétricos", year: "2023" },
  { title: "Sistema de Suporte Custom", category: "Projetos Especiais", year: "2023" },
  { title: "Rack Industrial Modular", category: "Estruturas Técnicas", year: "2023" },
  { title: "Case para Equipamento de Precisão", category: "Cases Industriais", year: "2022" },
  { title: "Revestimento Paramétrico", category: "Projetos Paramétricos", year: "2022" },
  { title: "Protótipo Funcional", category: "Projetos Especiais", year: "2024" },
];

const ProjetosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Projetos
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
              className="group relative aspect-[4/3] bg-gradient-to-br from-graphite to-primary rounded-sm overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 grid-overlay opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs text-primary-foreground/40 uppercase tracking-wider">{project.year} · {project.category}</span>
                <h3 className="text-sm font-semibold text-primary-foreground mt-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosSection;
