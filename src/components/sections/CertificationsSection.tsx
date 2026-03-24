import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, BadgeCheck, Handshake } from "lucide-react";

const certifications = [
  { icon: Shield, title: "ISO 9001", desc: "Sistema de Gestão de Qualidade" },
  { icon: Award, title: "NR-12", desc: "Segurança em Máquinas e Equipamentos" },
  { icon: BadgeCheck, title: "INMETRO", desc: "Conformidade com Normas Técnicas" },
  { icon: Handshake, title: "ABNT", desc: "Padrões Industriais Brasileiros" },
];

const partners = [
  "Embraer", "WEG", "Tramontina", "Siemens", "3M", "Bosch",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-graphite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-graphite to-graphite/95" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Qualidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Certificações & <span className="text-accent-blue">Parceiros</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 border border-primary-foreground/10 rounded-sm hover:border-accent-blue/30 transition-colors"
            >
              <cert.icon className="mx-auto text-accent-blue mb-4" size={36} />
              <h3 className="font-semibold text-primary-foreground text-sm mb-1">{cert.title}</h3>
              <p className="text-primary-foreground/50 text-xs">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40 mb-6">
            Parceiros & Clientes
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((name) => (
              <div
                key={name}
                className="px-6 py-3 border border-primary-foreground/10 rounded-sm text-primary-foreground/50 text-sm font-medium hover:text-accent-blue hover:border-accent-blue/30 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
