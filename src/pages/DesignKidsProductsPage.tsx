import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import BrandHeroBanner from "@/components/BrandHeroBanner";
import bannerKids1 from "@/assets/banner-designkids-1.jpg";
import bannerKids2 from "@/assets/banner-designkids-2.jpg";
import imgMesa from "@/assets/img-designkids-mesa.jpg";
import imgEstante from "@/assets/img-designkids-estante.jpg";
import imgBrinquedo from "@/assets/img-designkids-brinquedo.jpg";
import imgDecoracao from "@/assets/img-designkids-decoracao.jpg";

const logoDesignkids = "/lovable-uploads/16ad92e4-d27b-4d97-a111-5d128e486b17.png";

const categories = [
  { id: "mesas-cadeiras", title: "Mesas & Cadeiras" },
  { id: "estantes", title: "Estantes & Organizadores" },
  { id: "brinquedos", title: "Brinquedos Educativos" },
  { id: "decoracao", title: "Decoração Infantil" },
];

const products = [
  { id: "mesa-infantil", name: "Mesa Infantil Lúdica", image: imgMesa, description: "Mesa infantil com bordas arredondadas e pintura ecológica colorida.", category: "mesas-cadeiras" },
  { id: "cadeira-infantil", name: "Cadeira Infantil", image: imgMesa, description: "Cadeira ergonômica infantil com encosto e assento acolchoado.", category: "mesas-cadeiras" },
  { id: "conjunto-mesa", name: "Conjunto Mesa + 4 Cadeiras", image: imgMesa, description: "Kit completo com mesa e quatro cadeiras infantis em cores vibrantes.", category: "mesas-cadeiras" },
  { id: "estante-casinha", name: "Estante Casinha", image: imgEstante, description: "Estante em formato de casinha para livros e brinquedos.", category: "estantes" },
  { id: "estante-arvore", name: "Estante Árvore", image: imgEstante, description: "Estante criativa em formato de árvore com prateleiras e nichos.", category: "estantes" },
  { id: "organizador-brinquedos", name: "Organizador de Brinquedos", image: imgEstante, description: "Organizador com caixas coloridas para brinquedos e materiais.", category: "estantes" },
  { id: "quebra-cabeca", name: "Quebra-Cabeça em Madeira", image: imgBrinquedo, description: "Quebra-cabeça temático em MDF com peças grandes e coloridas.", category: "brinquedos" },
  { id: "encaixe-formas", name: "Encaixe de Formas", image: imgBrinquedo, description: "Brinquedo de encaixe geométrico para coordenação motora.", category: "brinquedos" },
  { id: "letras-numeros", name: "Kit Letras e Números", image: imgBrinquedo, description: "Kit de letras e números em MDF para alfabetização lúdica.", category: "brinquedos" },
  { id: "cabideiro-infantil", name: "Cabideiro Infantil", image: imgDecoracao, description: "Cabideiro de parede com formatos divertidos para quarto infantil.", category: "decoracao" },
  { id: "prateleira-nuvem", name: "Prateleira Nuvem", image: imgDecoracao, description: "Prateleira decorativa em formato de nuvem para objetos e livros.", category: "decoracao" },
  { id: "nome-mdf", name: "Nome em MDF Personalizado", image: imgDecoracao, description: "Nome da criança em MDF cortado a laser com pintura personalizada.", category: "decoracao" },
  { id: "regua-crescimento", name: "Régua de Crescimento", image: imgDecoracao, description: "Régua decorativa de parede para acompanhar o crescimento da criança.", category: "decoracao" },
];

const DesignKidsProductsPage = () => (
  <BrandProductsLayout
    brandName="DESIGN KIDS"
    logoSrc={logoDesignkids}
    logoBgColor="#5C3A1E"
    backTo="/design-kids"
    backLabel="Voltar para Design Kids"
    seoTitle="Produtos Design Kids"
    seoDescription="Mesas, estantes, brinquedos educativos e decoração infantil."
    seoPath="/design-kids/produtos"
    accentColorClass="bg-accent-blue"
    heroBanner={
      <BrandHeroBanner slides={[
        { image: bannerKids1, title: "Mobiliário Infantil", subtitle: "Mesas, cadeiras e estantes com design lúdico e seguro para crianças", tag: "MOBILIÁRIO" },
        { image: bannerKids2, title: "Brinquedos Educativos", subtitle: "Quebra-cabeças, encaixes e jogos em MDF para aprendizado divertido", tag: "EDUCAÇÃO" },
      ]} />
    }
    categories={categories}
    products={products}
    navSections={[
      { id: "hero", label: "Início", href: "/design-kids" },
      { id: "sobre", label: "Sobre", href: "/design-kids" },
      { id: "galeria", label: "Galeria", href: "/design-kids" },
      { id: "produtos", label: "Produtos", href: "/design-kids/produtos" },
      { id: "diferenciais", label: "Diferenciais", href: "/design-kids" },
      { id: "processo", label: "Processo", href: "/design-kids" },
      { id: "contato-cta", label: "Contato", href: "/design-kids" },
    ]}
  />
);

export default DesignKidsProductsPage;
