import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import imgProjeto1 from "@/assets/img-projeto1.jpg";
import imgProjeto2 from "@/assets/img-projeto2.jpg";
import imgProjeto3 from "@/assets/img-projeto3.jpg";
import imgProjeto4 from "@/assets/img-projeto4.jpg";
import { parametrizzeMedia } from "@/data/parametrizze";

const portfolioCategories = [
  "Todos", "Cases", "Estruturas", "Paramétrico", "Gourmet", "Pet", "Infantil"
];

const portfolioItems = [
  { id: 1, title: "Flight Case 12U Profissional", category: "Cases", image: imgProjeto2, client: "TechSound", year: "2024", desc: "Case profissional para rack 12U com sistema de amortecimento e rodízios." },
  { id: 2, title: "Estrutura Modular para Eventos", category: "Estruturas", image: imgProjeto1, client: "EventoPro", year: "2024", desc: "Sistema modular em aço carbono para montagem rápida de palcos." },
  { id: 3, title: "Painéis Parametrizze", category: "Paramétrico", image: parametrizzeMedia.paineis, reference: "Portfólio Parametrizze", desc: "Referência de painel paramétrico com formas orgânicas. A linha inclui painéis, divisórias, cabeceiras e espelhos desenvolvidos com modelagem computacional e fabricação CNC.", href: "/parametrizze/produtos/paineis" },
  { id: 4, title: "Churrasqueira Premium Inox", category: "Gourmet", image: imgProjeto4, client: "Grill Master", year: "2024", desc: "Churrasqueira profissional em aço inox 304 com sistema rotativo." },
  { id: 5, title: "Arranhador Gato Torre Premium", category: "Pet", image: imgProjeto1, client: "Pet House", year: "2023", desc: "Torre para gatos com acabamento premium e design moderno." },
  { id: 6, title: "Case para Pedalboard Custom", category: "Cases", image: imgProjeto2, client: "MusicPro", year: "2024", desc: "Case sob medida para pedalboard com espuma injetada." },
  { id: 7, title: "Mesa Infantil Montessoriana", category: "Infantil", image: imgProjeto3, client: "Escola Nova Era", year: "2023", desc: "Mesa educativa seguindo princípios Montessori com madeira certificada." },
  { id: 8, title: "Acústica Parametrizze", category: "Paramétrico", image: parametrizzeMedia.acustica, reference: "Portfólio Parametrizze", desc: "Referência da linha de acústica paramétrica, que reúne painéis, difusores e baffles com geometrias desenvolvidas para integrar o tratamento acústico à arquitetura.", href: "/parametrizze/produtos/acustica" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filtered = activeCategory === "Todos"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section ref={ref} className="py-10 md:py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos <span className="text-steel">Projetos</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors ${
                activeCategory === cat
                  ? "bg-accent-blue text-accent-blue-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square rounded-sm overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white/60 text-xs uppercase tracking-wider">{item.reference ?? item.category}{item.year ? ` · ${item.year}` : null}</p>
                <h3 className="text-white font-semibold text-sm mt-1">{item.title}</h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="text-white" size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card max-w-2xl w-full rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span className="text-accent-blue font-semibold uppercase">{selectedItem.reference ?? selectedItem.category}</span>
                {selectedItem.year ? <><span>·</span><span>{selectedItem.year}</span></> : null}
                {selectedItem.client ? <><span>·</span><span>{selectedItem.client}</span></> : null}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{selectedItem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{selectedItem.desc}</p>
              {selectedItem.href ? (
                <Link
                  to={selectedItem.href}
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-accent-blue text-accent-blue-foreground font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors"
                >
                  Conhecer a linha
                </Link>
              ) : (
                <a
                  href="https://wa.me/5511968756430?text=Olá!%20Vi%20o%20projeto%20e%20gostaria%20de%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-accent-blue text-accent-blue-foreground font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors"
                >
                  Quero um projeto similar
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;
