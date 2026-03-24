import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgCases from "@/assets/img-gilcase-cases.jpg";
import imgSuportes from "@/assets/img-gilcase-suportes.jpg";
import imgTotens from "@/assets/img-gilcase-totens.jpg";
import imgFabricacao from "@/assets/img-gilcase-fabricacao.jpg";

const logoGilCase = "/lovable-uploads/logo-gilcase.jpeg";

const categories = [
  {
    id: "cases",
    title: "Linha de Cases",
    image: imgCases,
    description: "Cases personalizados em compensado de 6, 10 e 15mm para transporte e proteção de equipamentos de áudio, vídeo, iluminação, instrumentos musicais, ferramentas, drones e muito mais. Todos fabricados sob medida com acabamento de alta qualidade.",
    details: [
      "Cases em compensado de 6mm para materiais leves",
      "Cases em compensado de 10mm para médio peso",
      "Cases em compensado de 15mm para materiais pesados",
      "Espuma personalizada para máxima proteção",
      "Cantoneiras e fechos em alumínio reforçado",
      "Rodízios opcionais para fácil transporte",
    ],
  },
  {
    id: "suportes",
    title: "Linha de Suportes",
    image: imgSuportes,
    description: "Pedestais e suportes para TVs, monitores e painéis de LED. Modelos unitários, duplos, triplos e articulados para eventos, videowall e instalações permanentes. Estruturas em aço com acabamento profissional.",
    details: [
      "Suportes unitários para TVs de 32\" a 85\"",
      "Suportes duplos e triplos para videowall",
      "Pedestais articulados com regulagem de altura",
      "Estruturas para painéis de LED indoor e outdoor",
      "Suportes com rodízios para eventos",
      "Instalações permanentes com fixação em parede ou teto",
    ],
  },
  {
    id: "totens",
    title: "Totens Interativos",
    image: imgTotens,
    description: "Estruturas para totens interativos com design profissional para pontos de venda, recepções, feiras e eventos corporativos. Produzimos totens em diversos formatos e tamanhos, com integração para telas touch e sistemas digitais.",
    details: [
      "Totens para autoatendimento e PDV",
      "Totens para feiras e eventos corporativos",
      "Design em formato de smartphone ou tablet",
      "Estruturas para telas de 15\" a 65\"",
      "Acabamento em pintura eletrostática",
      "Opções com rodízios ou fixação no piso",
    ],
  },
  {
    id: "sob-medida",
    title: "Projetos Sob Medida",
    image: imgFabricacao,
    description: "Desenvolvemos cases e estruturas especiais sob medida para necessidades específicas, com acabamento de alta qualidade e materiais nacionais e importados. Projetos personalizados com engenharia dedicada para soluções únicas.",
    details: [
      "Análise técnica das necessidades do equipamento",
      "Projeto 3D antes da fabricação",
      "Materiais nacionais e importados de alta qualidade",
      "Acabamento premium com pintura e adesivagem",
      "Produção unitária ou em série",
      "Acompanhamento do projeto do briefing à entrega",
    ],
  },
];

const GilCasesProductsPage = () => (
  <BrandProductsLayout
    brandName="GIL CASES"
    logoSrc={logoGilCase}
    backTo="/gil-cases"
    backLabel="Voltar para Gil Cases"
    seoTitle="Produtos Gil Cases & Suportes"
    seoDescription="Conheça a linha completa de cases, suportes, totens interativos e projetos sob medida da Gil Cases."
    seoPath="/gil-cases/produtos"
    accentColorClass="bg-accent-blue"
    categories={categories}
  />
);

export default GilCasesProductsPage;
