import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgFachada from "@/assets/img-parametrizze-fachada.jpg";
import imgMobiliario from "@/assets/img-parametrizze-mobiliario.jpg";
import imgDivisoria from "@/assets/img-parametrizze-divisoria.jpg";
import imgCnc from "@/assets/img-parametrizze-cnc.jpg";

const logoParametrizze = "/lovable-uploads/ea1780e5-8545-48a9-aaa9-051f623724db.png";

const categories = [
  { id: "fachadas", title: "Fachadas Paramétricas" },
  { id: "mobiliario", title: "Mobiliário Paramétrico" },
  { id: "paineis", title: "Painéis & Divisórias" },
  { id: "cnc", title: "Fabricação CNC" },
];

const products = [
  { id: "fachada-comercial", name: "Fachada Comercial", image: imgFachada, description: "Revestimento paramétrico para fachadas comerciais com padrões geométricos em CNC.", category: "fachadas" },
  { id: "fachada-residencial", name: "Fachada Residencial", image: imgFachada, description: "Fachadas paramétricas para residências com design orgânico e contemporâneo.", category: "fachadas" },
  { id: "fachada-acm", name: "Fachada em ACM", image: imgFachada, description: "Revestimentos em ACM com corte CNC para fachadas de alto padrão.", category: "fachadas" },
  { id: "estante-param", name: "Estante Paramétrica", image: imgMobiliario, description: "Estantes com formas orgânicas geradas por algoritmos paramétricos.", category: "mobiliario" },
  { id: "mesa-param", name: "Mesa Paramétrica", image: imgMobiliario, description: "Mesas de centro e laterais com design computacional único.", category: "mobiliario" },
  { id: "balcao-param", name: "Balcão de Recepção", image: imgMobiliario, description: "Balcões e recepções com design paramétrico exclusivo sob medida.", category: "mobiliario" },
  { id: "painel-decorativo", name: "Painel Decorativo", image: imgDivisoria, description: "Painéis decorativos com padrões geométricos cortados a laser ou CNC.", category: "paineis" },
  { id: "divisoria-ambiente", name: "Divisória de Ambientes", image: imgDivisoria, description: "Divisórias com transparência controlada para separação de ambientes.", category: "paineis" },
  { id: "painel-teto", name: "Painel de Teto", image: imgDivisoria, description: "Painéis paramétricos para teto com design acústico e decorativo.", category: "paineis" },
  { id: "corte-mdf", name: "Corte CNC em MDF", image: imgCnc, description: "Usinagem de peças em MDF com precisão de até 0.1mm.", category: "cnc" },
  { id: "corte-acrilico", name: "Corte CNC em Acrílico", image: imgCnc, description: "Corte e fresagem em acrílico para peças decorativas e funcionais.", category: "cnc" },
  { id: "prototipo-cnc", name: "Prototipagem CNC", image: imgCnc, description: "Protótipos funcionais em diversos materiais antes da produção em série.", category: "cnc" },
];

const ParametrizzeProductsPage = () => (
  <BrandProductsLayout
    brandName="PARAMETRIZZE"
    logoSrc={logoParametrizze}
    logoBgColor="#5C3A1E"
    backTo="/parametrizze"
    backLabel="Voltar para Parametrizze"
    seoTitle="Produtos Parametrizze"
    seoDescription="Fachadas paramétricas, mobiliário, painéis decorativos e fabricação CNC."
    seoPath="/parametrizze/produtos"
    accentColorClass="bg-accent-blue"
    categories={categories}
    products={products}
    navSections={[
      { id: "hero", label: "Início", href: "/parametrizze" },
      { id: "sobre", label: "Sobre", href: "/parametrizze" },
      { id: "galeria", label: "Galeria", href: "/parametrizze" },
      { id: "produtos", label: "Produtos", href: "/parametrizze/produtos" },
      { id: "diferenciais", label: "Diferenciais", href: "/parametrizze" },
      { id: "processo", label: "Processo", href: "/parametrizze" },
      { id: "contato-cta", label: "Contato", href: "/parametrizze" },
    ]}
  />
);

export default ParametrizzeProductsPage;
