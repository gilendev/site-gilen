import { useEffect, useId, useRef, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowRight, ChevronRight, Search, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import BrandNavbar from "@/components/layout/BrandNavbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { gourmetizzeBrand, gourmetizzeLines, gourmetizzeProductWhatsApp, type GourmetizzeLine, type GourmetizzeProduct } from "@/data/gourmetizze";
import { cn } from "@/lib/utils";

const catalogPath = "/gourmetizze/produtos";
const navSections = [
  { id: "marca", label: "A marca", href: "/gourmetizze" },
  { id: "catalogo", label: "Catálogo" },
  { id: "contato", label: "Fale sobre seu projeto" },
];
const productIndex = new Map(gourmetizzeLines.flatMap((line) => line.products.map((product) => [product.id, { line, product }] as const)));
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();

const ProductDialog = ({ line, product, onClose }: { line: GourmetizzeLine; product: GourmetizzeProduct; onClose: () => void }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog ref={ref} aria-labelledby={titleId} aria-describedby={descriptionId}
      onClose={() => { if (!ref.current?.open) onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) ref.current?.close(); }}
      className="m-auto max-h-[90dvh] w-11/12 max-w-3xl overflow-y-auto rounded-sm border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/70">
      <div className="relative grid items-center sm:grid-cols-[1.1fr_1fr]">
        <div className="flex aspect-[4/3] items-center justify-center bg-muted sm:aspect-square"><img src={product.image} alt={product.alt} className="h-full w-full object-contain" /></div>
        <div className="p-5 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-3 pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gourmet-tone">{line.title}</p>
          <button type="button" aria-label="Fechar detalhes" onClick={() => ref.current?.close()} className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted"><X size={20} /></button>
        </div>
        <h2 id={titleId} className="text-3xl font-semibold leading-tight tracking-tight">{product.name}</h2>
        <p id={descriptionId} className="mb-5 mt-4 text-base leading-relaxed text-muted-foreground">{product.description}</p>
        <p className="mb-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">Consulte a equipe para definir as medidas e o acabamento do seu pedido.</p>
        <a href={gourmetizzeProductWhatsApp(product.name)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm bg-accent-blue px-5 py-3 text-sm font-semibold text-accent-blue-foreground hover:opacity-90"><FaWhatsapp size={18} /> Solicitar orçamento</a>
        </div>
      </div>
    </dialog>
  );
};

const GourmetizzeProductsPage = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const activeLine = gourmetizzeLines.find((line) => line.id === categoria);
  const productId = params.get("produto");
  const selected = productId ? productIndex.get(productId) : undefined;
  const linePath = (id?: string) => id ? `${catalogPath}/${id}` : catalogPath;
  const searchForProduct = (id?: string) => {
    const next = new URLSearchParams(params);
    if (id) next.set("produto", id);
    else next.delete("produto");
    return next;
  };
  const canonical = linePath(activeLine?.id);

  // Old product links remain shareable; normalize only missing or mismatched destinations.
  if ((categoria && !activeLine) || (activeLine && selected && selected.line.id !== categoria) || (productId !== null && !selected)) {
    const path = productId !== null && !selected ? catalogPath : linePath(selected?.line.id ?? activeLine?.id);
    const search = searchForProduct(selected?.product.id).toString();
    return <Navigate replace to={{ pathname: path, search }} />;
  }

  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const visibleProducts = (activeLine ? [activeLine] : gourmetizzeLines).flatMap((line) =>
    line.products.filter((product) => {
      const text = normalize([line.title, product.name, product.description].join(" "));
      return terms.every((term) => text.includes(term));
    }).map((product) => ({ line, product }))
  );
  const singleResult = visibleProducts.length === 1;

  return (
    <div className="gourmetizze-brand min-h-screen bg-background text-foreground">
      <SEOHead title={activeLine ? `${activeLine.title} · Gourmetizze` : "Catálogo Gourmetizze"} description={activeLine?.description ?? gourmetizzeBrand.description} path={canonical} ogImage={gourmetizzeBrand.ogImage} />
      <BrandNavbar brandName={gourmetizzeBrand.name} logoSrc={gourmetizzeBrand.logo} logoBgColor="#5C3A1E" backTo="/gourmetizze" backLabel="Voltar para Gourmetizze" sections={navSections} whatsappUrl={gourmetizzeBrand.whatsappUrl} />
      <main className="pt-14 md:pt-32">
        <header className="border-b border-border bg-muted/40">
          <div className="container mx-auto px-4 py-8 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Caminho da página" className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/gourmetizze" className="hover:text-foreground">Gourmetizze</Link><ChevronRight size={12} aria-hidden="true" />
              {activeLine ? <><Link to={catalogPath} className="hover:text-foreground">Catálogo</Link><ChevronRight size={12} aria-hidden="true" /><span aria-current="page">{activeLine.title}</span></> : <span aria-current="page">Catálogo</span>}
            </nav>
            <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-16">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{activeLine?.title ?? "Catálogo Gourmetizze"}</h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{activeLine?.description ?? gourmetizzeBrand.description}</p>
            </div>
          </div>
        </header>

        <section id="catalogo" aria-label="Produtos por linha" className="container mx-auto scroll-mt-16 px-4 pb-14 pt-6 md:scroll-mt-36 md:pt-8 lg:px-8">
          <div className="mb-7 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <nav aria-label="Linhas de produtos" className="flex flex-wrap gap-2">
              {[{ id: "", title: "Todas as linhas" }, ...gourmetizzeLines].map(({ id, title }) => {
                const active = (categoria || "") === id;
                return <Link key={id} to={linePath(id)} onClick={() => setQuery("")} aria-current={active ? "page" : undefined} className={cn("inline-flex min-h-11 items-center rounded-sm border px-3.5 py-2 text-sm font-medium transition-colors", active ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50 hover:bg-muted")}>{title}</Link>;
              })}
            </nav>
            <div className="relative w-full xl:w-72">
              <label htmlFor="gourmetizze-busca" className="sr-only">Buscar produtos</label>
              <Search aria-hidden="true" size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input id="gourmetizze-busca" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar produtos" className="min-h-11 w-full rounded-sm border border-border bg-background py-2 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground" />
            </div>
          </div>
          <p role="status" className="sr-only">{visibleProducts.length} {singleResult ? "produto encontrado" : "produtos encontrados"}</p>

          {visibleProducts.length ? (
            <ul className={cn("grid gap-6", !singleResult && "sm:grid-cols-2", visibleProducts.length > 2 && "lg:grid-cols-3")}>
              {visibleProducts.map(({ line, product }, index) => (
                <li key={product.id}>
                  <Link to={{ pathname: canonical, search: searchForProduct(product.id).toString() }} replace aria-haspopup="dialog" aria-label={`Ver detalhes: ${product.name}`} className={cn("group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card text-card-foreground transition-colors hover:border-foreground/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground", singleResult && "md:flex-row")}>
                    <div className={cn("aspect-[4/3] overflow-hidden bg-muted", singleResult && "md:w-1/2 md:max-w-xl")}>
                      <img src={product.image} alt={product.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" className="h-full w-full object-cover" />
                    </div>
                    <div className={cn("flex flex-1 flex-col p-5", singleResult && "md:justify-center md:px-8")}>
                      {!activeLine && <p className="mb-2 text-xs font-medium text-gourmet-tone">{line.title}</p>}
                      <h2 className="text-xl font-semibold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">{product.name}</h2>
                      <p className="mb-5 mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                      <span className={cn("flex items-center justify-between gap-3 text-sm font-semibold text-gourmet-tone", singleResult ? "md:justify-start" : "mt-auto")}>Ver detalhes <ArrowRight size={16} aria-hidden="true" /></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="border-y border-border py-14 text-center"><h2 className="text-xl font-semibold">Nenhum produto encontrado</h2><p className="mt-2 text-sm text-muted-foreground">Tente outro termo ou consulte todas as linhas.</p><Link to={catalogPath} onClick={() => setQuery("")} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4">Ver todos os produtos <ArrowRight size={15} /></Link></div>
          )}
        </section>

        <section id="contato" className="scroll-mt-16 border-t border-border bg-muted/40 md:scroll-mt-36">
          <div className="container mx-auto flex flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
            <div><h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Seu projeto sob encomenda</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">As peças são desenvolvidas sob encomenda. Converse com a equipe sobre as medidas, o acabamento e a forma de montagem.</p></div>
            <a href={gourmetizzeBrand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-sm bg-accent-blue px-6 py-3 text-sm font-semibold text-accent-blue-foreground hover:opacity-90 md:self-auto"><FaWhatsapp size={18} /> Solicitar orçamento</a>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-7 text-center text-xs text-muted-foreground">Gourmetizze · Uma marca <Link to="/" className="font-semibold hover:underline">GILEN Industrial</Link></footer>
      <WhatsAppButton whatsappUrl={gourmetizzeBrand.whatsappUrl} />
      {selected && <ProductDialog key={selected.product.id} {...selected} onClose={() => setParams(searchForProduct(), { replace: true })} />}
    </div>
  );
};

export default GourmetizzeProductsPage;
