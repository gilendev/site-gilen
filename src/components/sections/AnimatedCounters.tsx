import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Briefcase, Ruler, Users } from "lucide-react";
import imgStatsBg from "@/assets/img-stats-bg.jpg";

const stats = [
  { icon: Calendar, value: 13, suffix: "+", label: "Anos de Mercado" },
  { icon: Briefcase, value: 10000, suffix: "+", label: "Projetos Realizados" },
  { icon: Ruler, value: 1000, suffix: "m²", label: "Planta Industrial" },
  { icon: Users, value: 50, suffix: "+", label: "Clientes Ativos" },
];

const Counter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value]);

  const formatted = value >= 1000 ? display.toLocaleString("pt-BR") : display;

  return (
    <span>
      {formatted}{suffix}
    </span>
  );
};

const AnimatedCounters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 bg-graphite relative overflow-hidden">
      <img src={imgStatsBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-graphite/70" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-2 md:mb-3 text-accent-blue" size={24} />
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent-blue">
                <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-primary-foreground/60 text-[10px] md:text-sm mt-1 md:mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;
