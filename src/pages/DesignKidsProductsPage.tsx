import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgMesa from "@/assets/img-designkids-mesa.jpg";
import imgEstante from "@/assets/img-designkids-estante.jpg";
import imgBrinquedo from "@/assets/img-designkids-brinquedo.jpg";
import imgDecoracao from "@/assets/img-designkids-decoracao.jpg";

const logoDesignkids = "/lovable-uploads/16ad92e4-d27b-4d97-a111-5d128e486b17.png";

const categories = [
  {
    id: "mesas-cadeiras",
    title: "Mesas & Cadeiras",
    image: imgMesa,
    description: "Conjuntos de mesa e cadeira infantil com design lúdico, bordas arredondadas e cores vibrantes. Mobiliário ergonômico projetado para a faixa etária de 2 a 10 anos.",
    details: [
      "Bordas arredondadas para segurança",
      "Alturas adequadas para cada faixa etária",
      "Pintura com tintas ecológicas e atóxicas",
      "Cores vibrantes e personalizáveis",
      "MDF reforçado de alta durabilidade",
      "Conjuntos de 2 a 6 cadeiras",
    ],
  },
  {
    id: "estantes",
    title: "Estantes & Organizadores",
    image: imgEstante,
    description: "Estantes com formas criativas para organizar livros, brinquedos e objetos do quarto infantil. Design que estimula a autonomia e organização das crianças.",
    details: [
      "Formatos lúdicos: casinha, árvore, nuvem",
      "Alturas acessíveis para crianças",
      "Fixação segura na parede",
      "Nichos e prateleiras removíveis",
      "Cores personalizáveis",
      "Ideal para método Montessori",
    ],
  },
  {
    id: "brinquedos",
    title: "Brinquedos Educativos",
    image: imgBrinquedo,
    description: "Quebra-cabeças e brinquedos de encaixe em madeira, estimulando coordenação motora e criatividade. Produtos que unem diversão e aprendizado.",
    details: [
      "Quebra-cabeças temáticos em madeira",
      "Jogos de encaixe e empilhamento",
      "Letras e números para alfabetização",
      "Materiais 100% atóxicos e certificados",
      "Estimulam coordenação motora fina",
      "Embalagem para presente disponível",
    ],
  },
  {
    id: "decoracao",
    title: "Decoração Infantil",
    image: imgDecoracao,
    description: "Cabideiros, prateleiras e objetos decorativos com temas lúdicos para quartos infantis. Peças que transformam o ambiente em um espaço mágico.",
    details: [
      "Cabideiros com formatos divertidos",
      "Prateleiras decorativas temáticas",
      "Letras e nomes personalizados em MDF",
      "Régua de crescimento decorativa",
      "Luminárias em corte a laser",
      "Personalização com nome da criança",
    ],
  },
];

const DesignKidsProductsPage = () => (
  <BrandProductsLayout
    brandName="DESIGN KIDS"
    logoSrc={logoDesignkids}
    logoBgColor="#5C3A1E"
    backTo="/design-kids"
    backLabel="Voltar para Design Kids"
    seoTitle="Produtos Design Kids"
    seoDescription="Mesas, estantes, brinquedos educativos e decoração infantil — conheça os produtos Design Kids."
    seoPath="/design-kids/produtos"
    accentColorClass="bg-accent-blue"
    categories={categories}
  />
);

export default DesignKidsProductsPage;
