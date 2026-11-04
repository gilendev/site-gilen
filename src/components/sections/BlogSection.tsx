import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import imgProjeto1 from "@/assets/img-projeto1.jpg";
import imgProjeto2 from "@/assets/img-projeto2.jpg";
import { parametrizzeMedia } from "@/data/parametrizze";

const posts = [
  {
    id: 1,
    title: "CNC na Indústria: Como a Usinagem de Precisão Transforma Projetos",
    excerpt: "Entenda como a tecnologia CNC revoluciona a produção de peças industriais com alta precisão e repetibilidade.",
    image: imgProjeto1,
    date: "15 Mar 2026",
    readTime: "5 min",
    category: "Tecnologia",
  },
  {
    id: 2,
    title: "Cases de Sucesso: Do Briefing ao Produto Final",
    excerpt: "Acompanhe o processo completo de desenvolvimento de um case técnico para equipamentos de áudio profissional.",
    image: imgProjeto2,
    date: "08 Mar 2026",
    readTime: "7 min",
    category: "Cases",
  },
  {
    id: 3,
    title: "Parametrizze: cinco frentes para transformar espaços",
    excerpt: "Painéis, móveis, acústica, stands e projetos especiais: conheça o portfólio de design computacional e fabricação CNC da Parametrizze.",
    image: parametrizzeMedia.especial,
    category: "Portfólio Parametrizze",
    href: "/parametrizze",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-10 md:py-14 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-8"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Notícias & <span className="text-steel">Artigos</span>
            </h2>
          </div>
          <Link
            to="/contato"
            className="mt-4 md:mt-0 text-sm text-accent-blue hover:text-accent-blue/80 flex items-center gap-1 transition-colors"
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border rounded-sm overflow-hidden hover:border-accent-blue/30 transition-colors bg-card"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  {post.date ? (
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  ) : null}
                  {post.readTime ? (
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  ) : null}
                  <span className="text-accent-blue font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-foreground font-semibold text-base mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                {post.href ? (
                  <Link to={post.href} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent-blue hover:text-accent-blue/80">
                    Conhecer o portfólio <ArrowRight size={14} />
                  </Link>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
