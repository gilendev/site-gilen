import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgChurrasqueira from "@/assets/img-gourmetizze-churrasqueira.jpg";
import imgUtensilios from "@/assets/img-gourmetizze-utensilios.jpg";
import imgEstrutura from "@/assets/img-gourmetizze-estrutura.jpg";
import imgFabricacao from "@/assets/img-gourmetizze-fabricacao.jpg";

const logoGourmetizze = "/lovable-uploads/40176074-eed2-4555-94a3-940b9c014213.png";

const categories = [
  {
    id: "churrasqueiras",
    title: "Churrasqueiras Modulares",
    image: imgChurrasqueira,
    description: "Estações de churrasco em aço inox com design modular, adaptáveis a qualquer espaço externo. Projetadas para alta performance e durabilidade.",
    details: [
      "Aço inox 304 de alta resistência",
      "Design modular expansível",
      "Grelhas removíveis e reguláveis",
      "Compartimentos para carvão e lenha",
      "Opções com defumador integrado",
      "Personalização de tamanho e acabamento",
    ],
  },
  {
    id: "utensilios",
    title: "Utensílios Gourmet",
    image: imgUtensilios,
    description: "Ferramentas e acessórios em metal cortados a laser, com design funcional e acabamento premium. Kits completos para o churrasco perfeito.",
    details: [
      "Espetos, garfos e facas em aço inox",
      "Corte a laser de alta precisão",
      "Cabos em madeira nobre ou polímero",
      "Kits personalizados com gravação",
      "Suportes e organizadores inclusos",
      "Embalagem para presente disponível",
    ],
  },
  {
    id: "estruturas",
    title: "Estruturas para Áreas Externas",
    image: imgEstrutura,
    description: "Pergolados, suportes e estruturas metálicas para espaços gourmet ao ar livre. Projetos sob medida para varandas, jardins e áreas de lazer.",
    details: [
      "Pergolados em aço e madeira",
      "Bancadas e balcões para área gourmet",
      "Suportes para coifas e exaustores",
      "Estruturas para coberturas retráteis",
      "Pintura eletrostática anticorrosiva",
      "Projeto sob medida para cada espaço",
    ],
  },
  {
    id: "corte-laser",
    title: "Corte a Laser em Metal",
    image: imgFabricacao,
    description: "Fabricação de peças e painéis decorativos em metal com corte a laser de alta precisão. Ideal para personalização e projetos exclusivos.",
    details: [
      "Corte a laser em chapas de aço, inox e alumínio",
      "Painéis decorativos para áreas gourmet",
      "Letreiros e logotipos personalizados",
      "Peças de reposição sob medida",
      "Espessuras de 0.5mm a 20mm",
      "Acabamento com pintura ou polimento",
    ],
  },
];

const GourmetizzeProductsPage = () => (
  <BrandProductsLayout
    brandName="GOURMETIZZE"
    logoSrc={logoGourmetizze}
    logoBgColor="#5C3A1E"
    backTo="/gourmetizze"
    backLabel="Voltar para Gourmetizze"
    seoTitle="Produtos Gourmetizze"
    seoDescription="Churrasqueiras modulares, utensílios gourmet, estruturas para áreas externas e corte a laser — conheça os produtos Gourmetizze."
    seoPath="/gourmetizze/produtos"
    accentColorClass="bg-accent-blue"
    categories={categories}
  />
);

export default GourmetizzeProductsPage;
