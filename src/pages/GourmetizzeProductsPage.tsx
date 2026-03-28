import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import BrandHeroBanner from "@/components/BrandHeroBanner";
import bannerGourm1 from "@/assets/banner-gourmetizze-1.jpg";
import bannerGourm2 from "@/assets/banner-gourmetizze-2.jpg";
import bannerGourm3 from "@/assets/banner-gourmetizze-3.jpg";
import imgChurrasqueira from "@/assets/img-gourmetizze-churrasqueira.jpg";
import imgUtensilios from "@/assets/img-gourmetizze-utensilios.jpg";
import imgEstrutura from "@/assets/img-gourmetizze-estrutura.jpg";
import imgFabricacao from "@/assets/img-gourmetizze-fabricacao.jpg";

const logoGourmetizze = "/lovable-uploads/40176074-eed2-4555-94a3-940b9c014213.png";

const categories = [
  { id: "churrasqueiras", title: "Churrasqueiras Modulares" },
  { id: "utensilios", title: "Utensílios Gourmet" },
  { id: "estruturas", title: "Estruturas Externas" },
  { id: "corte-laser", title: "Corte a Laser" },
];

const products = [
  { id: "churr-modular", name: "Churrasqueira Modular Inox", image: imgChurrasqueira, description: "Estação de churrasco em aço inox 304 com design modular e grelhas removíveis.", category: "churrasqueiras" },
  { id: "churr-compacta", name: "Churrasqueira Compacta", image: imgChurrasqueira, description: "Modelo compacto para varandas e espaços reduzidos com a mesma qualidade.", category: "churrasqueiras" },
  { id: "churr-defumador", name: "Churrasqueira com Defumador", image: imgChurrasqueira, description: "Churrasqueira com defumador integrado para carnes defumadas artesanais.", category: "churrasqueiras" },
  { id: "kit-espetos", name: "Kit de Espetos Inox", image: imgUtensilios, description: "Conjunto de espetos em aço inox com cabos em madeira nobre.", category: "utensilios" },
  { id: "kit-churrasco", name: "Kit Churrasco Completo", image: imgUtensilios, description: "Kit completo com faca, garfo, pegador e espátula em aço inox.", category: "utensilios" },
  { id: "suporte-utens", name: "Suporte para Utensílios", image: imgUtensilios, description: "Suporte organizador em metal cortado a laser para utensílios gourmet.", category: "utensilios" },
  { id: "pergolado", name: "Pergolado Metálico", image: imgEstrutura, description: "Pergolado em aço com pintura eletrostática para áreas gourmet.", category: "estruturas" },
  { id: "bancada-ext", name: "Bancada Externa", image: imgEstrutura, description: "Bancada em aço inox para preparo e apoio em áreas externas.", category: "estruturas" },
  { id: "cobertura", name: "Estrutura para Cobertura", image: imgEstrutura, description: "Estruturas metálicas para coberturas retráteis em áreas gourmet.", category: "estruturas" },
  { id: "painel-metal", name: "Painel Decorativo Metal", image: imgFabricacao, description: "Painéis em metal com corte a laser para decoração de áreas gourmet.", category: "corte-laser" },
  { id: "letreiro", name: "Letreiro Personalizado", image: imgFabricacao, description: "Letreiros e logotipos cortados a laser em aço ou inox.", category: "corte-laser" },
  { id: "peca-reposicao", name: "Peças Sob Medida", image: imgFabricacao, description: "Peças de reposição e componentes cortados a laser sob encomenda.", category: "corte-laser" },
];

const GourmetizzeProductsPage = () => (
  <BrandProductsLayout
    brandName="GOURMETIZZE"
    logoSrc={logoGourmetizze}
    logoBgColor="#5C3A1E"
    backTo="/gourmetizze"
    backLabel="Voltar para Gourmetizze"
    seoTitle="Produtos Gourmetizze"
    seoDescription="Churrasqueiras modulares, utensílios gourmet, estruturas externas e corte a laser."
    seoPath="/gourmetizze/produtos"
    accentColorClass="bg-accent-blue"
    heroBanner={
      <BrandHeroBanner slides={[
        { image: bannerGourm1, title: "Estações Gourmet", subtitle: "Churrasqueiras modulares e áreas gourmet completas em aço inox", tag: "CHURRASQUEIRAS" },
        { image: bannerGourm2, title: "Utensílios Premium", subtitle: "Kit completo de utensílios em aço inox para churrasco profissional", tag: "UTENSÍLIOS" },
        { image: bannerGourm3, title: "Corte a Laser Decorativo", subtitle: "Painéis e peças decorativas em metal com corte a laser de precisão", tag: "CORTE A LASER" },
      ]} />
    }
    categories={categories}
    products={products}
    navSections={[
      { id: "hero", label: "Início", href: "/gourmetizze" },
      { id: "sobre", label: "Sobre", href: "/gourmetizze" },
      { id: "galeria", label: "Galeria", href: "/gourmetizze" },
      { id: "produtos", label: "Produtos", href: "/gourmetizze/produtos" },
      { id: "diferenciais", label: "Diferenciais", href: "/gourmetizze" },
      { id: "processo", label: "Processo", href: "/gourmetizze" },
      { id: "contato-cta", label: "Contato", href: "/gourmetizze" },
    ]}
  />
);

export default GourmetizzeProductsPage;
