import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgGato from "@/assets/img-comicpets-gato.jpg";
import imgComedouro from "@/assets/img-comicpets-comedouro.jpg";
import imgBrinquedo from "@/assets/img-comicpets-brinquedo.jpg";
import imgCasinha from "@/assets/img-comicpets-casinha.jpg";

const logoComicpets = "/lovable-uploads/868a8eaf-cc9a-4482-9f91-ff11d7873809.png";

const categories = [
  { id: "arranhadores", title: "Arranhadores & Torres" },
  { id: "comedouros", title: "Comedouros & Bebedouros" },
  { id: "brinquedos", title: "Brinquedos & Acessórios" },
  { id: "casinhas", title: "Casinhas & Abrigos" },
];

const products = [
  { id: "torre-1andar", name: "Torre 1 Andar", image: imgGato, description: "Torre compacta com arranhador em sisal e plataforma acolchoada.", category: "arranhadores" },
  { id: "torre-2andares", name: "Torre 2 Andares", image: imgGato, description: "Torre com dois níveis, tocas e arranhadores em sisal natural.", category: "arranhadores" },
  { id: "torre-3andares", name: "Torre 3 Andares", image: imgGato, description: "Torre grande com três níveis, rede e múltiplos arranhadores.", category: "arranhadores" },
  { id: "arranhador-parede", name: "Arranhador de Parede", image: imgGato, description: "Prateleiras e passarelas para gatos com arranhador integrado.", category: "arranhadores" },
  { id: "comedouro-simples", name: "Comedouro Elevado Simples", image: imgComedouro, description: "Suporte elevado para um pote com design em corte a laser.", category: "comedouros" },
  { id: "comedouro-duplo", name: "Comedouro Elevado Duplo", image: imgComedouro, description: "Suporte para dois potes (água e ração) com altura ergonômica.", category: "comedouros" },
  { id: "bebedouro-fonte", name: "Suporte Bebedouro Fonte", image: imgComedouro, description: "Suporte para bebedouro tipo fonte com design moderno.", category: "comedouros" },
  { id: "brinquedo-circuito", name: "Circuito de Bolinhas", image: imgBrinquedo, description: "Circuito interativo com trilhas para bolinhas em MDF.", category: "brinquedos" },
  { id: "brinquedo-encaixe", name: "Brinquedo de Encaixe", image: imgBrinquedo, description: "Brinquedo de encaixe e desafio para estimulação mental.", category: "brinquedos" },
  { id: "brinquedo-vareta", name: "Varetas Interativas", image: imgBrinquedo, description: "Kit de varetas com penduricalhos para brincadeiras ativas.", category: "brinquedos" },
  { id: "casinha-mdf", name: "Casinha MDF Moderna", image: imgCasinha, description: "Casinha em MDF com design contemporâneo e telhado removível.", category: "casinhas" },
  { id: "casinha-externa", name: "Casinha para Área Externa", image: imgCasinha, description: "Casinha impermeabilizada para uso externo com isolamento térmico.", category: "casinhas" },
  { id: "cama-suspensa", name: "Cama Suspensa", image: imgCasinha, description: "Cama suspensa de parede para gatos com almofada removível.", category: "casinhas" },
];

const ComicpetsProductsPage = () => (
  <BrandProductsLayout
    brandName="COMICPETS"
    logoSrc={logoComicpets}
    logoBgColor="#5C3A1E"
    backTo="/comicpets"
    backLabel="Voltar para Comicpets"
    seoTitle="Produtos Comicpets"
    seoDescription="Arranhadores, comedouros, brinquedos e casinhas para pets."
    seoPath="/comicpets/produtos"
    accentColorClass="bg-accent-blue"
    categories={categories}
    products={products}
  />
);

export default ComicpetsProductsPage;
