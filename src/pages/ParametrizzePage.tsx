import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, Mail, MoveUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import BrandNavbar from "@/components/layout/BrandNavbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { parametrizzeBrand as brand, parametrizzeMedia as media, parametrizzeSolutions as solutions } from "@/data/parametrizze";

const sections = [
  { id: "hero", label: "Início" },
  { id: "sobre", label: "A divisão" },
  { id: "produtos", label: "Linhas" },
  { id: "portfolio", label: "Portfólio", href: "/parametrizze/produtos" },
  { id: "processo", label: "Fabricação" },
  { id: "contato-cta", label: "Contato" },
];

const ParametrizzePage = () => (
  <div className="parametrizze-brand min-h-screen bg-background text-foreground">
    <SEOHead title="Parametrizze — Design e produtos paramétricos" description={brand.description} path="/parametrizze" ogImage={brand.ogImage} />
    <BrandNavbar brandName={brand.name} logoSrc={brand.logo} logoBgColor="#090909" backTo="/marcas" backLabel="Voltar para GILEN" sections={sections} whatsappUrl={brand.whatsappUrl} />
    <main className="pt-14 md:pt-32">
      <section id="hero" className="relative grid lg:grid-cols-[0.9fr_1.1fr] bg-[#24221f] text-white scroll-mt-14 md:scroll-mt-32">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12 lg:py-20">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.23em] text-[#d8b995] mb-7">Parametrizze / GILEN Industrial</p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium leading-[1.08] tracking-tight max-w-lg">Geometria que<br />transforma<br /><span className="text-[#d8b995]">espaços.</span></h1>
          <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed text-white/75">Design paramétrico, engenharia e fabricação CNC. Desenvolvemos painéis, móveis, soluções acústicas, stands e projetos especiais sob medida.</p>
          <div className="mt-9 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4">
            <Link to="/parametrizze/produtos" className="inline-flex items-center justify-center gap-4 px-6 py-3.5 bg-[#e5d2ba] text-[#24221f] font-semibold text-sm hover:bg-white transition-colors">Explorar o portfólio <ArrowRight size={17} /></Link>
            <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-3.5 text-sm text-white border-b border-white/40 hover:border-white transition-colors">Conversar sobre um projeto <MoveUpRight size={15} /></a>
          </div>
          <a href="#sobre" className="mt-12 inline-flex items-center gap-3 text-xs text-white/60 hover:text-white w-fit"><ArrowDown size={14} /> Conheça a divisão</a>
        </div>
        <figure className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[660px]">
          <img src={media.hero} alt="Ambiente com painel ondulado, espelho, poltrona e mesa de formas orgânicas" loading="eager" width="1344" height="768" className="absolute inset-0 w-full h-full object-cover object-center" />
          <figcaption className="absolute bottom-4 right-4 bg-black/60 text-white/90 px-3 py-1.5 text-[10px] tracking-wider uppercase">Design paramétrico</figcaption>
        </figure>
      </section>
      <section id="sobre" className="container mx-auto px-6 lg:px-8 py-16 md:py-24 scroll-mt-24 md:scroll-mt-36">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-5">Divisão de produtos paramétricos</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">Engenharia, estética<br />e desempenho funcional.</h2>
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>A Parametrizze desenvolve e fabrica produtos com design paramétrico. A modelagem computacional permite gerar formas inteligentes, variações controladas e alta eficiência produtiva.</p>
            <p>Essa abordagem une personalização sob medida, otimização estrutural e fabricação CNC com precisão industrial. Da superfície de um painel à estrutura de um stand, a geometria dá forma a cada solução.</p>
            <p className="text-foreground font-medium pt-2">{brand.tagline}</p>
          </div>
        </div>
      </section>
      <section id="produtos" className="bg-muted py-16 md:py-24 scroll-mt-24 md:scroll-mt-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">O que desenvolvemos</p><h2 className="text-3xl md:text-4xl font-medium tracking-tight">Cinco formas de transformar.</h2></div>
            <Link to="/parametrizze/produtos" className="inline-flex items-center gap-3 text-sm font-medium text-accent-blue hover:underline">Ver portfólio completo <ArrowRight size={16} /></Link>
          </div>
          <div className="grid md:grid-cols-6 gap-x-6 gap-y-10">
            {solutions.map((solution, index) => (
              <Link key={solution.id} to={`/parametrizze/produtos/${solution.id}`} className={`group block ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}>
                <div className="relative overflow-hidden aspect-[4/3] bg-border">
                  <img src={solution.image} alt={solution.alt} loading="lazy" decoding="async" width="1344" height="768" className="w-full h-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]" />
                  <span className="absolute top-4 left-4 text-white text-xs bg-black/55 px-2.5 py-1">0{index + 1}</span>
                  <span className="absolute bottom-4 right-4 p-2.5 bg-background text-foreground group-hover:bg-accent-blue group-hover:text-white transition-colors"><MoveUpRight size={18} /></span>
                </div>
                <h3 className="text-2xl font-medium mt-5 mb-2 group-hover:text-accent-blue transition-colors">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.subtitle}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{solution.items.join(" · ")}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-10 pt-5 border-t border-border">Cada solução é desenvolvida sob medida para o seu projeto.</p>
        </div>
      </section>
      <section id="processo" className="py-16 md:py-24 scroll-mt-24 md:scroll-mt-36">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure>
            <img src={media.cnc} alt="Cabeçote da Router CNC durante a usinagem de uma chapa de madeira" width="1536" height="1024" loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" />
            <figcaption className="text-xs text-muted-foreground mt-3">Fabricação CNC / Do modelo digital à forma física.</figcaption>
          </figure>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-5">Design + tecnologia</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6">Da ideia à<br />geometria fabricável.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Cada projeto parte de uma necessidade. Integramos design computacional, engenharia e fabricação para transformar conceitos arquitetônicos e demandas técnicas em soluções paramétricas.</p>
            <ol className="divide-y divide-border border-y border-border">
              {[
                { title: "Demanda e personalização", text: "O espaço, o conceito e as necessidades do cliente orientam o desenvolvimento." },
                { title: "Modelagem computacional", text: "Geometrias e variações são desenvolvidas para unir estética e funcionalidade." },
                { title: "Fabricação CNC", text: "O desenho ganha forma com precisão industrial e eficiência produtiva." },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-5 py-5"><span className="text-sm text-accent-blue pt-0.5">0{index + 1}</span><div><h3 className="font-medium mb-1">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section id="contato-cta" className="bg-[#24221f] text-white py-16 md:py-24 scroll-mt-24 md:scroll-mt-36">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d8b995] mb-5">Vamos criar juntos</p>
            <h2 className="text-3xl md:text-5xl leading-tight font-medium tracking-tight max-w-xl">Seu próximo espaço<br />começa com uma ideia.</h2>
            <p className="text-white/65 mt-6 max-w-lg leading-relaxed">Conte o que você imagina para seu ambiente, mobiliário ou evento. Vamos conversar sobre uma solução Parametrizze sob medida.</p>
          </div>
          <div className="lg:justify-self-end space-y-5">
            <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#e5d2ba] text-[#24221f] px-6 py-4 text-sm font-semibold hover:bg-white transition-colors"><FaWhatsapp size={19} /> Iniciar um projeto <ArrowRight size={16} /></a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-white/80 hover:text-white text-sm break-all"><Mail size={16} className="shrink-0" />{brand.email}</a>
          </div>
        </div>
      </section>
    </main>
    <footer className="container mx-auto px-6 lg:px-8 py-8 pb-24 md:pb-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
      <p>PARAMETRIZZE · Divisão de produtos paramétricos da GILEN Industrial</p>
      <Link to="/marcas" className="inline-flex items-center gap-2 hover:text-foreground"><ArrowLeft size={14} /> Conheça as marcas GILEN</Link>
    </footer>
    <WhatsAppButton whatsappUrl={brand.whatsappUrl} />
  </div>
);

export default ParametrizzePage;
