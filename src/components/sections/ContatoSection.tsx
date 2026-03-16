import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContatoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "", empresa: "", email: "", telefone: "", mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4 block">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Fale com nossa
              <br />
              <span className="text-steel">Engenharia</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Entre em contato com nossa equipe técnica para discutir seu projeto ou solicitar um orçamento personalizado.
            </p>

            {/* Contact Details */}
            <div className="space-y-5 text-sm">
              {/* Phones */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Central de Atendimento</p>
                  <a href="tel:01122413047" className="text-muted-foreground hover:text-foreground transition-colors block">
                    (11) 2241-3047
                  </a>
                  <a href="tel:01121437721" className="text-muted-foreground hover:text-foreground transition-colors block">
                    (11) 2143-7721
                  </a>
                  <a
                    href="https://wa.me/5511968756430?text=Falar%20com%20a%20Gilen%20Industrial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    (11) 96875-6430 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">E-mail</p>
                  <a href="mailto:contato@gilenindustrial.com.br" className="text-muted-foreground hover:text-foreground transition-colors block">
                    contato@gilenindustrial.com.br
                  </a>
                  <a href="mailto:gil@gilcase.com.br" className="text-muted-foreground hover:text-foreground transition-colors block">
                    gil@gilcase.com.br
                  </a>
                  <a href="mailto:contato@gilcase.com.br" className="text-muted-foreground hover:text-foreground transition-colors block">
                    contato@gilcase.com.br
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Localização</p>
                  <a
                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x94cef5b5af7743b7:0x44ce65bb59315a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    R. Flor de Ouro, 335 - Vila Nova Galvão, São Paulo - SP, 02281-010
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Horário de Atendimento</p>
                  <p className="text-muted-foreground">Segunda à Sexta, das 8h às 18h</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.facebook.com/GilCaseeSuportes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/GilCaseeSuportes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                  className="bg-muted border-border"
                />
                <Input
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="bg-muted border-border"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted border-border"
                />
                <Input
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="bg-muted border-border"
                />
              </div>
              <Textarea
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                required
                rows={5}
                className="bg-muted border-border"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold w-full sm:w-auto"
              >
                <Send className="mr-2" size={16} />
                Enviar mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
