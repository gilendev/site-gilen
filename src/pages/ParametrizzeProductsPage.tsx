import { useEffect, useId, useRef, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Mail, Search, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BrandNavbar from "@/components/layout/BrandNavbar";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import { parametrizzeBrand, parametrizzeSolutions } from "@/data/parametrizze";
import { cn } from "@/lib/utils";

const catalogPath = "/parametrizze/produtos";
const navSections = [
  { id: "inicio", label: "A marca", href: "/parametrizze" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contato", label: "Fale sobre seu projeto" },
];

const legacyProductCategories: Record<string, string> = {
  "fachada-comercial": "paineis",
  "fachada-residencial": "paineis",
  "fachada-acm": "paineis",
  "estante-param": "mobiliario",
  "mesa-param": "mobiliario",
  "balcao-param": "mobiliario",
  "painel-decorativo": "paineis",
  "divisoria-ambiente": "paineis",
  "painel-teto": "acustica",
  "corte-mdf": "",
  "corte-acrilico": "",
  "prototipo-cnc": "",
};

const normalizeSearch = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();

type Solution = (typeof parametrizzeSolutions)[number];

const SolutionGallery = ({ solution, onClose }: { solution: Solution; onClose: () => void }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [imageIndex, setImageIndex] = useState(0);
  const images = solution.gallery.length ? solution.gallery : [{ src: solution.image, alt: solution.alt }];
  const currentImage = images[imageIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog?.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
      className="m-auto max-h-[90dvh] w-11/12 max-w-5xl overflow-y-auto rounded-sm border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-7">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-blue">Parametrizze · Portfólio</p>
            <h2 id={titleId} className="text-xl font-semibold md:text-2xl">{solution.title}</h2>
          </div>
          <button
            type="button"
            aria-label="Fechar galeria"
            onClick={() => dialogRef.current?.close()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue"
          >
            <X size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-[1.3fr_1fr]">
          <div className="min-w-0 bg-muted p-3 md:p-5">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm bg-black/5">
              <img src={currentImage.src} alt={currentImage.alt} className="h-full w-full object-contain" />
              {images.length > 1 && (
                <>
                  <button type="button" aria-label="Imagem anterior" onClick={() => setImageIndex((index) => (index - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                    <ChevronLeft size={20} />
                  </button>
                  <button type="button" aria-label="Próxima imagem" onClick={() => setImageIndex((index) => (index + 1) % images.length)} className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            <p aria-live="polite" className="my-3 text-center text-xs text-muted-foreground">Referência {imageIndex + 1} de {images.length}</p>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Referências desta linha">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Ver referência ${index + 1} de ${solution.title}`}
                    aria-pressed={index === imageIndex}
                    onClick={() => setImageIndex(index)}
                    className={cn("h-16 w-20 shrink-0 overflow-hidden rounded-sm border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue", index === imageIndex ? "border-accent-blue" : "border-transparent opacity-65 hover:opacity-100")}
                  >
                    <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col p-5 md:p-7">
            <p className="text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.15em]">Aplicações da linha</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {solution.items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-accent-blue">—</span>{item}</li>)}
            </ul>
            <p className="mb-6 mt-6 text-xs leading-relaxed text-muted-foreground">Referências visuais do portfólio. Soluções desenvolvidas sob medida.</p>
            <a href={parametrizzeBrand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-accent-blue px-4 py-3 text-sm font-semibold text-accent-blue-foreground transition-colors hover:bg-accent-blue/90">
              <FaWhatsapp size={18} /> Conversar sobre esta solução
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const ParametrizzeProductsPage = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const activeSolution = parametrizzeSolutions.find((solution) => solution.id === categoria);
  const legacyProduct = searchParams.get("produto");

  // Preserve inbound links while retiring unsupported products and the old CNC category.
  if (categoria === "fachadas" || categoria === "cnc" || (categoria && !activeSolution) || legacyProduct !== null) {
    let targetCategory = activeSolution?.id || (categoria === "fachadas" ? "paineis" : "");
    if (legacyProduct !== null && Object.prototype.hasOwnProperty.call(legacyProductCategories, legacyProduct)) {
      targetCategory = legacyProductCategories[legacyProduct];
    }
    const remainingParams = new URLSearchParams(searchParams);
    remainingParams.delete("produto");
    const query = remainingParams.toString();
    return <Navigate replace to={`${catalogPath}${targetCategory ? `/${targetCategory}` : ""}${query ? `?${query}` : ""}`} />;
  }

  const normalizedQuery = normalizeSearch(searchQuery);
  const filteredSolutions = parametrizzeSolutions.filter((solution) => {
    const matchesCategory = !categoria || solution.id === categoria;
    const searchableText = normalizeSearch([solution.title, solution.subtitle, solution.description, ...solution.items].join(" "));
    return matchesCategory && searchableText.includes(normalizedQuery);
  });
  const seoPath = activeSolution ? `${catalogPath}/${activeSolution.id}` : catalogPath;

  return (
    <div className="parametrizze-brand min-h-screen bg-background text-foreground">
      <SEOHead
        title={activeSolution ? `${activeSolution.title} · Parametrizze` : "Portfólio Parametrizze"}
        description={activeSolution?.description || "Conheça as soluções Parametrizze: painéis, móveis, acústica, stands e projetos especiais. Design paramétrico e fabricação CNC sob medida."}
        path={seoPath}
        ogImage={parametrizzeBrand.ogImage}
      />
      <BrandNavbar
        brandName={parametrizzeBrand.name}
        logoSrc={parametrizzeBrand.logo}
        logoBgColor="#0b0b0b"
        backTo="/parametrizze"
        backLabel="Voltar para Parametrizze"
        sections={navSections}
        whatsappUrl={parametrizzeBrand.whatsappUrl}
      />

      <main className="pt-14 md:pt-32">
        <section className="border-b border-border bg-muted/40 py-10 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/parametrizze" className="mb-7 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft size={14} /> Conheça a divisão</Link>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-blue">Design paramétrico · GILEN Industrial</p>
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">Portfólio de soluções</h1>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Geometria, engenharia e fabricação digital para transformar ambientes. Explore nossas linhas e encontre possibilidades para o seu projeto.</p>
            </div>
          </div>
        </section>

        <section id="portfolio" aria-label="Linhas do portfólio" className="scroll-mt-20 py-8 md:scroll-mt-36 md:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-6 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <nav aria-label="Filtrar por linha" className="flex flex-wrap gap-2">
                <Link to={catalogPath} onClick={() => setSearchQuery("")} aria-current={!categoria ? "page" : undefined} className={cn("inline-flex min-h-11 items-center rounded-sm border px-4 py-2 text-sm font-medium transition-colors", !categoria ? "border-accent-blue bg-accent-blue text-accent-blue-foreground" : "border-border hover:border-accent-blue hover:text-accent-blue")}>Todas as linhas</Link>
                {parametrizzeSolutions.map((solution) => (
                  <Link key={solution.id} to={`${catalogPath}/${solution.id}`} onClick={() => setSearchQuery("")} aria-current={categoria === solution.id ? "page" : undefined} className={cn("inline-flex min-h-11 items-center rounded-sm border px-4 py-2 text-sm font-medium transition-colors", categoria === solution.id ? "border-accent-blue bg-accent-blue text-accent-blue-foreground" : "border-border hover:border-accent-blue hover:text-accent-blue")}>{solution.title}</Link>
                ))}
              </nav>
              <div className="relative w-full shrink-0 xl:w-64">
                <label htmlFor="parametrizze-search" className="sr-only">Buscar no portfólio</label>
                <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input id="parametrizze-search" type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Buscar no portfólio" className="min-h-11 w-full rounded-sm border border-border bg-background py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50" />
              </div>
            </div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <p aria-live="polite">{filteredSolutions.length} {filteredSolutions.length === 1 ? "linha encontrada" : "linhas encontradas"}</p>
              <p>Referências visuais do portfólio. Soluções desenvolvidas sob medida.</p>
            </div>

            {filteredSolutions.length ? (
              <div className="grid gap-7 md:grid-cols-2 lg:gap-10">
                {filteredSolutions.map((solution) => (
                  <article key={solution.id} className="group flex min-w-0 flex-col overflow-hidden rounded-sm border border-border bg-card">
                    <button type="button" aria-label={`Ver galeria de ${solution.title}`} onClick={() => setSelectedSolution(solution)} className="relative block aspect-[16/10] w-full overflow-hidden bg-muted focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-accent-blue">
                      <img src={solution.image} alt={solution.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]" />
                      <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-sm bg-black/70 px-3 py-2 text-xs font-medium text-white">Explorar referências <ArrowRight size={14} /></span>
                    </button>
                    <div className="flex flex-1 flex-col p-5 md:p-7">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-blue">{solution.subtitle}</p>
                      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{solution.title}</h2>
                      <p className="mb-5 mt-3 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                      <ul className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground" aria-label={`Aplicações de ${solution.title}`}>
                        {solution.items.map((item) => <li key={item} className="flex items-center gap-2"><span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent-blue" />{item}</li>)}
                      </ul>
                      <button type="button" onClick={() => setSelectedSolution(solution)} className="mt-auto flex min-h-11 items-center justify-between gap-3 border-t border-border pt-4 text-left text-sm font-semibold text-accent-blue transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue">Conhecer {solution.title.toLocaleLowerCase("pt-BR")} <ArrowRight size={17} /></button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-sm border border-border bg-muted/40 px-5 py-16 text-center">
                <Search aria-hidden="true" size={28} className="mx-auto mb-4 text-muted-foreground" />
                <h2 className="mb-2 text-xl font-semibold">Nenhuma linha encontrada</h2>
                <p className="mb-6 text-sm text-muted-foreground">Experimente buscar por painéis, móveis, acústica ou stands.</p>
                <Link to={catalogPath} onClick={() => setSearchQuery("")} className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent-blue px-5 py-2 text-sm font-semibold text-accent-blue-foreground">Ver todas as linhas <ArrowRight size={16} /></Link>
              </div>
            )}
          </div>
        </section>

        <section id="contato" className="mt-4 scroll-mt-20 border-t border-border bg-muted/50 py-12 md:scroll-mt-36 md:py-16">
          <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">Seu projeto, novas possibilidades</p>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">Vamos dar forma à sua ideia?</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">Conte o que você imagina para o ambiente, a peça ou a estrutura. A Parametrizze desenvolve soluções a partir das necessidades de cada projeto.</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a href={parametrizzeBrand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-accent-blue px-6 py-3 text-sm font-semibold text-accent-blue-foreground transition-colors hover:bg-accent-blue/90"><FaWhatsapp size={19} /> Solicitar projeto · {parametrizzeBrand.phoneDisplay}</a>
              <a href={`mailto:${parametrizzeBrand.email}`} className="inline-flex items-center gap-2 break-all text-sm text-muted-foreground hover:text-foreground"><Mail size={16} className="shrink-0" />{parametrizzeBrand.email}</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground">PARAMETRIZZE · Divisão de Produtos Paramétricos da <Link to="/" className="font-semibold hover:text-foreground">GILEN Industrial</Link></footer>
      <WhatsAppButton whatsappUrl={parametrizzeBrand.whatsappUrl} />
      {selectedSolution && <SolutionGallery key={selectedSolution.id} solution={selectedSolution} onClose={() => setSelectedSolution(null)} />}
    </div>
  );
};

export default ParametrizzeProductsPage;
