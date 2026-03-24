import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgGato from "@/assets/img-comicpets-gato.jpg";
import imgComedouro from "@/assets/img-comicpets-comedouro.jpg";
import imgBrinquedo from "@/assets/img-comicpets-brinquedo.jpg";
import imgCasinha from "@/assets/img-comicpets-casinha.jpg";

const logoComicpets = "/lovable-uploads/868a8eaf-cc9a-4482-9f91-ff11d7873809.png";

const categories = [
  {
    id: "arranhadores",
    title: "Arranhadores & Torres",
    image: imgGato,
    description: "Torres e arranhadores em madeira com design moderno, funcionais e elegantes para gatos. Estruturas que estimulam o instinto natural de escalar e arranhar.",
    details: [
      "Torres de 1 a 3 andares",
      "Sisal natural de alta durabilidade",
      "Plataformas acolchoadas removíveis",
      "Design moderno que combina com a decoração",
      "Estrutura em MDF reforçado",
      "Personalização de cores e tamanhos",
    ],
  },
  {
    id: "comedouros",
    title: "Comedouros & Bebedouros",
    image: imgComedouro,
    description: "Suportes elevados com design em corte a laser, ergonômicos e estilosos para cães e gatos. Projetados para a altura ideal de alimentação.",
    details: [
      "Suportes elevados em MDF ou metal",
      "Design em corte a laser personalizado",
      "Potes em inox ou cerâmica inclusos",
      "Alturas adequadas para cada porte",
      "Base antiderrapante",
      "Fácil limpeza e manutenção",
    ],
  },
  {
    id: "brinquedos",
    title: "Brinquedos & Acessórios",
    image: imgBrinquedo,
    description: "Brinquedos interativos e acessórios criativos fabricados com materiais seguros e duráveis. Produtos que estimulam a atividade física e mental dos pets.",
    details: [
      "Brinquedos de encaixe e desafio",
      "Circuitos e trilhas para bolinhas",
      "Materiais 100% atóxicos",
      "Design lúdico e colorido",
      "Resistentes a mordidas",
      "Opções para cães e gatos",
    ],
  },
  {
    id: "casinhas",
    title: "Casinhas & Abrigos",
    image: imgCasinha,
    description: "Casinhas com design contemporâneo em madeira e metal, confortáveis e resistentes. Abrigos que combinam estética moderna com o conforto do seu pet.",
    details: [
      "Casinhas em MDF com isolamento térmico",
      "Design contemporâneo e minimalista",
      "Tamanhos para cães e gatos de todos os portes",
      "Telhado removível para limpeza",
      "Pintura atóxica e impermeabilizada",
      "Opções para ambientes internos e externos",
    ],
  },
];

const ComicpetsProductsPage = () => (
  <BrandProductsLayout
    brandName="COMICPETS"
    logoSrc={logoComicpets}
    logoBgColor="#5C3A1E"
    backTo="/comicpets"
    backLabel="Voltar para Comicpets"
    seoTitle="Produtos Comicpets"
    seoDescription="Arranhadores, comedouros, brinquedos e casinhas para pets — conheça os produtos Comicpets."
    seoPath="/comicpets/produtos"
    accentColorClass="bg-accent-blue"
    categories={categories}
  />
);

export default ComicpetsProductsPage;
