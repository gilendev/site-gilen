import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgCases from "@/assets/img-gilcase-cases.jpg";
import imgSuportes from "@/assets/img-gilcase-suportes.jpg";
import imgTotens from "@/assets/img-gilcase-totens.jpg";
import imgFabricacao from "@/assets/img-gilcase-fabricacao.jpg";

const logoGilCase = "/lovable-uploads/logo-gilcase.jpeg";

const categories = [
  { id: "cases", title: "Linha de Cases" },
  { id: "suportes", title: "Linha de Suportes" },
  { id: "totens", title: "Totens Interativos" },
  { id: "sob-medida", title: "Projetos Sob Medida" },
];

const products = [
  { id: "case-6mm", name: "Case Compensado 6mm", image: imgCases, description: "Case para materiais leves com compensado de 6mm, espuma personalizada e cantoneiras em alumínio.", category: "cases" },
  { id: "case-10mm", name: "Case Compensado 10mm", image: imgCases, description: "Case para materiais de médio peso com compensado de 10mm, fechos reforçados e espuma interna.", category: "cases" },
  { id: "case-15mm", name: "Case Compensado 15mm", image: imgCases, description: "Case para materiais pesados com compensado de 15mm, rodízios e cantoneiras reforçadas em alumínio.", category: "cases" },
  { id: "case-audio", name: "Case para Áudio", image: imgCases, description: "Cases sob medida para equipamentos de áudio: mesas de som, caixas de som, amplificadores.", category: "cases" },
  { id: "case-video", name: "Case para Vídeo", image: imgCases, description: "Cases projetados para câmeras, monitores, projetores e equipamentos de vídeo profissional.", category: "cases" },
  { id: "case-iluminacao", name: "Case para Iluminação", image: imgCases, description: "Cases para transporte seguro de moving heads, refletores, mesas de luz e acessórios.", category: "cases" },
  { id: "case-instrumento", name: "Case para Instrumentos", image: imgCases, description: "Cases para guitarra, baixo, teclado, bateria e instrumentos musicais diversos.", category: "cases" },
  { id: "case-drone", name: "Case para Drones", image: imgCases, description: "Cases com espuma personalizada para drones e acessórios, garantindo proteção em transporte.", category: "cases" },
  { id: "suporte-tv", name: "Suporte para TV", image: imgSuportes, description: "Pedestal para TVs de 32\" a 85\" com base estável e regulagem de altura.", category: "suportes" },
  { id: "suporte-duplo", name: "Suporte Duplo", image: imgSuportes, description: "Suporte para duas TVs lado a lado, ideal para videowall em eventos e feiras.", category: "suportes" },
  { id: "suporte-triplo", name: "Suporte Triplo", image: imgSuportes, description: "Suporte para três monitores em configuração de videowall com ajuste individual.", category: "suportes" },
  { id: "suporte-led", name: "Suporte para Painel LED", image: imgSuportes, description: "Estruturas para painéis de LED indoor e outdoor com fixação segura.", category: "suportes" },
  { id: "suporte-articulado", name: "Suporte Articulado", image: imgSuportes, description: "Pedestal articulado com rodízios para movimentação fácil em eventos.", category: "suportes" },
  { id: "totem-pdv", name: "Totem Autoatendimento", image: imgTotens, description: "Totem para autoatendimento em pontos de venda com integração para tela touch.", category: "totens" },
  { id: "totem-evento", name: "Totem para Eventos", image: imgTotens, description: "Totem portátil para feiras e eventos corporativos com acabamento premium.", category: "totens" },
  { id: "totem-smartphone", name: "Totem Formato Smartphone", image: imgTotens, description: "Design em formato de smartphone com tela touchscreen integrada.", category: "totens" },
  { id: "totem-mesa", name: "Mesa Interativa", image: imgTotens, description: "Mesa interativa com tela widescreen para experiências imersivas.", category: "totens" },
  { id: "projeto-especial", name: "Projeto Especial", image: imgFabricacao, description: "Cases e estruturas especiais sob medida com engenharia dedicada.", category: "sob-medida" },
  { id: "prototipo", name: "Prototipagem 3D", image: imgFabricacao, description: "Projeto 3D e prototipagem antes da fabricação em série.", category: "sob-medida" },
  { id: "producao-serie", name: "Produção em Série", image: imgFabricacao, description: "Fabricação em série com padrão de qualidade e acabamento premium.", category: "sob-medida" },
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
    products={products}
  />
);

export default GilCasesProductsPage;
