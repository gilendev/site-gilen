import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import BrandNavbar from "@/components/layout/BrandNavbar";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import { gourmetizzeBrand, gourmetizzeLines, gourmetizzeMedia } from "@/data/gourmetizze";

const catalogPath = "/gourmetizze/produtos";
const navSections = [
  { id: "hero", label: "Início" },
  { id: "produtos", label: "Linhas" },
  { id: "catalogo", label: "Catálogo", href: catalogPath },
  { id: "processo", label: "Fabricação" },
  { id: "contato-cta", label: "Contato" },
];

const fabrication = [
  { title: "Corte da chapa", text: "O laser recorta o contorno de cada peça e abre os rasgos que recebem as abas de encaixe." },
  { title: "Montagem do conjunto", text: "No fogareiro, as laterais encaixam entre si. Em outros modelos, dobras, fixadores ou soldas completam a estrutura." },
  { title: "Detalhes do pedido", text: "Medidas, acabamento e componentes, como grelhas e apoios de madeira, são definidos com a equipe no orçamento." },
];

const GourmetizzePage = () => (
  <div className="gourmetizze-brand min-h-screen bg-background text-foreground">
    <SEOHead title="Gourmetizze · Churrasqueiras e braseiros em aço" description={gourmetizzeBrand.description} path="/gourmetizze" ogImage={gourmetizzeBrand.ogImage} />
    <BrandNavbar brandName={gourmetizzeBrand.name} logoSrc={gourmetizzeBrand.logo} logoBgColor="#5C3A1E" backTo="/marcas" backLabel="Marcas GILEN" sections={navSections} whatsappUrl={gourmetizzeBrand.whatsappUrl} />

    <main className="pt-14 md:pt-32">
      <section id="hero" aria-labelledby="gourmetizze-title" className="container mx-auto scroll-mt-14 px-4 pb-10 pt-6 sm:pt-8 md:scroll-mt-32 lg:px-8 lg:py-12">
        <div className="grid items-center gap-7 md:grid-cols-[0.83fr_1.17fr] lg:gap-12">
          <div className="max-w-lg">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gourmet-tone">Gourmetizze por GILEN Industrial</p>
            <h1 id="gourmetizze-title" className="text-balance text-[2.75rem] font-semibold leading-[1.03] tracking-[-0.048em] sm:text-5xl lg:text-6xl xl:text-7xl">Churrasqueiras e braseiros em&nbsp;aço</h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">Da chapa cortada a laser à grelha sobre as brasas. Conheça as peças sob encomenda para cozinhar ao ar livre, na lenha ou no carvão.</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 lg:mt-8">
              <Link to={catalogPath} className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-accent-blue px-5 text-sm font-semibold text-accent-blue-foreground hover:opacity-90">Explorar catálogo <ArrowRight size={17} aria-hidden="true" /></Link>
              <a href={gourmetizzeBrand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-current">Pedir orçamento <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>

          <figure>
            <Link to={catalogPath + "/churrasqueiras?produto=quadrada"} className="group block">
              <img src={gourmetizzeMedia.hero} alt="Churrasqueira quadrada em chapa de aço, com grelha elevada, nicho para lenha e apoios laterais de madeira" width={1536} height={1024} fetchPriority="high" className="aspect-[3/2] w-full rounded-sm bg-muted object-cover" />
              <span className="mt-2 flex items-center justify-between gap-2 text-xs leading-relaxed text-muted-foreground group-hover:text-foreground sm:text-sm">Churrasqueira quadrada com apoios de madeira <ArrowUpRight size={15} aria-hidden="true" /></span>
            </Link>
          </figure>
        </div>
      </section>

      <section id="produtos" aria-labelledby="linhas-title" className="scroll-mt-14 border-y border-border bg-muted/35 md:scroll-mt-32">
        <div className="container mx-auto px-4 py-10 md:py-14 lg:px-8">
          <h2 id="linhas-title" className="mb-6 text-3xl font-semibold tracking-tight md:mb-8 md:text-4xl">Linhas de produtos</h2>
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {gourmetizzeLines.map((line) => (
              <Link key={line.id} to={catalogPath + "/" + line.id} className="group block">
                <div className="overflow-hidden rounded-sm bg-muted">
                  <img src={line.image} alt={line.alt} loading="lazy" decoding="async" width={768} height={512} className="aspect-[3/2] w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{line.title}</h3>
                  <ArrowUpRight size={18} aria-hidden="true" className="shrink-0 text-gourmet-tone" />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{line.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" aria-labelledby="processo-title" className="container mx-auto grid scroll-mt-14 gap-6 px-4 py-12 md:scroll-mt-32 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-16 lg:px-8">
        <div>
          <h2 id="processo-title" className="max-w-md text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Como as peças se encaixam</h2>
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {fabrication.map(({ title, text }) => (
            <div key={title} className="py-4 first:pt-3">
              <dt className="text-base font-semibold">{title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contato-cta" aria-labelledby="orcamento-title" className="scroll-mt-14 border-y border-border bg-muted/40 md:scroll-mt-32">
        <div className="container mx-auto flex flex-col items-start justify-between gap-5 px-4 py-10 sm:flex-row sm:items-center md:py-14 lg:px-8">
          <div>
            <h2 id="orcamento-title" className="text-3xl font-semibold tracking-tight md:text-4xl">Orçamento sob encomenda</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">Envie o modelo que você gostou e as medidas do espaço onde pretende usá-lo.</p>
          </div>
          <a href={gourmetizzeBrand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-sm bg-accent-blue px-5 py-3 text-sm font-semibold text-accent-blue-foreground hover:opacity-90">Falar com a equipe <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </section>
    </main>

    <footer className="container mx-auto flex flex-wrap items-center gap-1 px-4 py-8 pr-24 text-sm text-muted-foreground lg:px-8">
      Gourmetizze, uma marca <Link to="/" className="font-medium text-foreground underline underline-offset-4">GILEN Industrial</Link>
    </footer>
    <WhatsAppButton whatsappUrl={gourmetizzeBrand.whatsappUrl} />
  </div>
);

export default GourmetizzePage;
