import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin, Clock, Facebook, Instagram, Paperclip, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const ContatoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [arquivo, setArquivo] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    nome: "", empresa: "", email: "", telefone: "", mensagem: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "Arquivo muito grande",
          description: "O tamanho máximo é 10MB.",
          variant: "destructive",
        });
        return;
      }
      setArquivo(file);
    }
  };

  const removeFile = () => {
    setArquivo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append("nome", formData.nome.trim());
      body.append("empresa", formData.empresa.trim());
      body.append("email", formData.email.trim());
      body.append("telefone", formData.telefone.trim());
      body.append("mensagem", formData.mensagem.trim());
      if (arquivo) {
        body.append("arquivo", arquivo);
      }

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const functionUrl = `${supabaseUrl}/functions/v1/send-contact-email`;

      const res = await fetch(functionUrl, {
        method: "POST",
        body,
      });

      const data = await res.json();

      if (data?.success) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
        removeFile();
      } else {
        throw new Error(data?.error || "Erro ao enviar mensagem");
      }
    } catch (err: unknown) {
      console.error("Erro ao enviar formulário:", err);
      toast({
        title: "Erro ao enviar",
        description: err instanceof Error ? err.message : "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-10 md:py-14 lg:py-16 bg-background">
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
                    Ligar para nossa equipe
                  </a>
                  <a href="tel:01121437721" className="text-muted-foreground hover:text-foreground transition-colors block">
                    Ligar pelo canal alternativo
                  </a>
                  <a
                    href="https://wa.me/5511971927920?text=Falar%20com%20a%20Gilen%20Industrial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    Fale conosco
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
                    href="https://www.google.com/maps/search/R.+Cirene+de+Oliveira+Laet,+815+-+Vila+Nilo,+São+Paulo+-+SP,+02279-010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    R. Cirene de Oliveira Laet, 815 - Vila Nilo, São Paulo - SP, 02279-010
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
                  href="https://www.facebook.com/share/1J3gRPgThT/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/gilcaseesuportes?igsh=N3huZWJucjBqejk1"
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

              {/* File Upload */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.zip,.rar,.dwg,.dxf,.stp,.step"
                />
                {arquivo ? (
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-md border border-border">
                    <Paperclip className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm text-foreground truncate flex-1">{arquivo.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {(arquivo.size / 1024).toFixed(0)} KB
                    </span>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-3 w-full text-sm text-muted-foreground bg-muted border border-dashed border-border rounded-md hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    <Paperclip className="w-4 h-4" />
                    Anexar documento ou arquivo (máx. 10MB)
                  </button>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-sm uppercase tracking-wider font-semibold w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={16} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={16} />
                    Enviar mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
