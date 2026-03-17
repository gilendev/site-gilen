import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import imgProjeto1 from "@/assets/img-projeto1.jpg";
import imgProjeto2 from "@/assets/img-projeto2.jpg";
import imgProjeto3 from "@/assets/img-projeto3.jpg";
import imgProjeto4 from "@/assets/img-projeto4.jpg";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollAnimations";

const categories = [
  "Todos",
  "Estruturas Técnicas",
  "Cases Industriais",
  "Projetos Paramétricos",
  "Projetos Especiais",
];

const projectImages: Record<string, string> = {
  "Estruturas Técnicas": imgProjeto1,
  "Cases Industriais": imgProjeto2,
  "Projetos Paramétricos": imgProjeto3,
  "Projetos Especiais": imgProjeto4,
};

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
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Projetos
          </h2>
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal delay={0.15} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                layout
                className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
              >
                <img
                  src={projectImages[project.category]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs text-primary-foreground/40 uppercase tracking-wider">{project.year} · {project.category}</span>
                  <h3 className="text-sm font-semibold text-primary-foreground mt-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjetosSection;
