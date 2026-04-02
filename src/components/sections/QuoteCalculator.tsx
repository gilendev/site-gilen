import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calculator, ArrowRight, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectTypes = [
  { value: "case", label: "Case / Flight Case", basePrice: 800, unit: "unidade" },
  { value: "suporte", label: "Suporte Técnico", basePrice: 350, unit: "unidade" },
  { value: "totem", label: "Totem Interativo", basePrice: 3500, unit: "unidade" },
  { value: "parametrico", label: "Projeto Paramétrico", basePrice: 5000, unit: "m²" },
  { value: "mobiliario", label: "Mobiliário sob Medida", basePrice: 1200, unit: "peça" },
  { value: "churrasqueira", label: "Equipamento Gourmet", basePrice: 2500, unit: "unidade" },
  { value: "pet", label: "Produto Pet Premium", basePrice: 450, unit: "unidade" },
  { value: "infantil", label: "Mobiliário Infantil", basePrice: 600, unit: "peça" },
];

const materials = [
  { value: "aco-carbono", label: "Aço Carbono", multiplier: 1.0 },
  { value: "inox", label: "Aço Inox", multiplier: 1.6 },
  { value: "aluminio", label: "Alumínio", multiplier: 1.3 },
  { value: "mdf", label: "MDF / Madeira", multiplier: 0.8 },
  { value: "misto", label: "Material Misto", multiplier: 1.2 },
];

const complexities = [
  { value: "simples", label: "Simples", multiplier: 1.0 },
  { value: "medio", label: "Médio", multiplier: 1.5 },
  { value: "complexo", label: "Complexo", multiplier: 2.2 },
];

const QuoteCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [type, setType] = useState("");
  const [material, setMaterial] = useState("");
  const [complexity, setComplexity] = useState("");
  const [qty, setQty] = useState("1");
  const [showResult, setShowResult] = useState(false);

  const calculate = () => {
    const t = projectTypes.find((p) => p.value === type);
    const m = materials.find((p) => p.value === material);
    const c = complexities.find((p) => p.value === complexity);
    if (!t || !m || !c) return { min: 0, max: 0, unit: "" };
    const base = t.basePrice * m.multiplier * c.multiplier * Number(qty || 1);
    return { min: Math.round(base * 0.85), max: Math.round(base * 1.15), unit: t.unit };
  };

  const handleCalculate = () => {
    if (type && material && complexity) setShowResult(true);
  };

  const result = calculate();

  return (
    <section ref={ref} className="py-10 md:py-14 lg:py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
            Simulador
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Calculadora de <span className="text-steel">Orçamento</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Obtenha uma estimativa rápida para o seu projeto. Valores aproximados sujeitos à análise técnica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-sm p-6 md:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                Tipo de Projeto
              </label>
              <Select value={type} onValueChange={(v) => { setType(v); setShowResult(false); }}>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((p) => (
                    <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                Material Principal
              </label>
              <Select value={material} onValueChange={(v) => { setMaterial(v); setShowResult(false); }}>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {materials.map((m) => (
                    <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                Complexidade
              </label>
              <Select value={complexity} onValueChange={(v) => { setComplexity(v); setShowResult(false); }}>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {complexities.map((c) => (
                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                Quantidade
              </label>
              <Input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => { setQty(e.target.value); setShowResult(false); }}
                className="bg-muted border-border"
              />
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!type || !material || !complexity}
            className="w-full bg-accent-blue text-accent-blue-foreground hover:bg-accent-blue/90 h-12 text-sm uppercase tracking-wider font-semibold"
          >
            <Calculator className="mr-2" size={16} />
            Calcular Estimativa
          </Button>

          {showResult && result.min > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 bg-muted rounded-sm border border-accent-blue/20 text-center"
            >
              <CheckCircle className="mx-auto text-accent-blue mb-3" size={28} />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Estimativa de investimento
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                R$ {result.min.toLocaleString("pt-BR")} — R$ {result.max.toLocaleString("pt-BR")}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                *Valores estimados. Para um orçamento preciso, entre em contato com nossa equipe.
              </p>
              <a
                href="https://wa.me/5511968756430?text=Olá!%20Gostaria%20de%20um%20orçamento%20detalhado."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-hover inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-accent-blue text-accent-blue-foreground font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors"
              >
                <FaWhatsapp className="whatsapp-icon" size={16} />
                Solicitar Orçamento Detalhado
                <ArrowRight className="default-icon" size={14} />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
