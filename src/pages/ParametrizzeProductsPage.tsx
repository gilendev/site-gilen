import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgFachada from "@/assets/img-parametrizze-fachada.jpg";
import imgMobiliario from "@/assets/img-parametrizze-mobiliario.jpg";
import imgDivisoria from "@/assets/img-parametrizze-divisoria.jpg";
import imgCnc from "@/assets/img-parametrizze-cnc.jpg";

const logoParametrizze = "/lovable-uploads/ea1780e5-8545-48a9-aaa9-051f623724db.png";

const categories = [
  {
    id: "fachadas",
    title: "Fachadas Paramétricas",
    image: imgFachada,
    description: "Revestimentos arquitetônicos com padrões orgânicos e geométricos fabricados em CNC para fachadas comerciais e residenciais. Soluções que combinam estética contemporânea com funcionalidade.",
    details: [
      "Padrões orgânicos e geométricos personalizados",
      "Fabricação em CNC com precisão milimétrica",
      "Materiais: MDF, ACM, madeira e compósitos",
      "Projetos para fachadas comerciais e residenciais",
      "Simulação 3D antes da produção",
      "Instalação acompanhada por equipe técnica",
    ],
  },
  {
    id: "mobiliario",
    title: "Mobiliário Paramétrico",
    image: imgMobiliario,
    description: "Estantes, mesas e peças de mobiliário com design computacional e formas orgânicas, fabricados sob medida. Cada peça é única, gerada por algoritmos paramétricos.",
    details: [
      "Estantes com formas orgânicas",
      "Mesas de centro e laterais paramétricas",
      "Balcões e recepções com design exclusivo",
      "Materiais: MDF, madeira maciça e compensado",
      "Personalização de dimensões e acabamento",
      "Produção unitária ou em pequenas séries",
    ],
  },
  {
    id: "paineis",
    title: "Painéis & Divisórias",
    image: imgDivisoria,
    description: "Painéis decorativos e divisórias de ambientes com padrões geométricos cortados a laser ou CNC. Soluções versáteis para interiores comerciais e residenciais.",
    details: [
      "Painéis decorativos para paredes e tetos",
      "Divisórias de ambientes com transparência controlada",
      "Corte a laser ou CNC conforme o material",
      "Padrões personalizáveis por projeto",
      "Opções em MDF, acrílico e metal",
      "Ideal para escritórios, restaurantes e residências",
    ],
  },
  {
    id: "cnc",
    title: "Fabricação CNC",
    image: imgCnc,
    description: "Produção de peças paramétricas com precisão industrial em diversos materiais: MDF, madeira, metal e acrílico. Usinagem computadorizada com tolerâncias rigorosas.",
    details: [
      "Router CNC de alta precisão",
      "Corte, fresagem e gravação",
      "Materiais: MDF, madeira, acrílico, alumínio",
      "Prototipagem rápida e produção em série",
      "Tolerâncias de até 0.1mm",
      "Acabamento com pintura e verniz",
    ],
  },
];

const ParametrizzeProductsPage = () => (
  <BrandProductsLayout
    brandName="PARAMETRIZZE"
    logoSrc={logoParametrizze}
    logoBgColor="#5C3A1E"
    backTo="/parametrizze"
    backLabel="Voltar para Parametrizze"
    seoTitle="Produtos Parametrizze"
    seoDescription="Fachadas paramétricas, mobiliário, painéis decorativos e fabricação CNC — conheça os produtos Parametrizze."
    seoPath="/parametrizze/produtos"
    accentColorClass="bg-accent-blue"
    categories={categories}
  />
);

export default ParametrizzeProductsPage;
