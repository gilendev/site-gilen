import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import imgCarousel1 from "@/assets/gilcase-carousel-1.png";
import imgCarousel2 from "@/assets/gilcase-carousel-2.png";
import imgCarousel3 from "@/assets/gilcase-carousel-3.png";
import imgCarousel4 from "@/assets/gilcase-carousel-4.png";
import imgCarousel5 from "@/assets/gilcase-carousel-5.png";
import imgCarousel6 from "@/assets/gilcase-carousel-6.png";
import imgCarousel7 from "@/assets/gilcase-carousel-7.png";
import imgCarousel8 from "@/assets/gilcase-carousel-8.png";
import imgCarousel9 from "@/assets/gilcase-carousel-9.png";
import imgCarousel10 from "@/assets/gilcase-carousel-10.png";
import imgNew1 from "@/assets/gilcase-new-1.png";
import imgNew2 from "@/assets/gilcase-new-2.png";
import imgNew3 from "@/assets/gilcase-new-3.png";
import imgNew4 from "@/assets/gilcase-new-4.png";
import imgNew5 from "@/assets/gilcase-new-5.png";
import imgNew6 from "@/assets/gilcase-new-6.png";
import imgNew7 from "@/assets/gilcase-new-7.png";
import imgNew8 from "@/assets/gilcase-new-8.png";
import imgNew9 from "@/assets/gilcase-new-9.png";
import imgNew10 from "@/assets/gilcase-new-10.png";
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
  { id: "case-6mm", name: "Case Compensado 6mm", image: imgCarousel1, description: "Case para materiais leves com compensado de 6mm, espuma personalizada e cantoneiras em alumínio.", category: "cases" },
  { id: "case-10mm", name: "Case Compensado 10mm", image: imgCarousel2, description: "Case para materiais de médio peso com compensado de 10mm, fechos reforçados e espuma interna.", category: "cases" },
  { id: "case-15mm", name: "Case Compensado 15mm", image: imgCarousel3, description: "Case para materiais pesados com compensado de 15mm, rodízios e cantoneiras reforçadas em alumínio.", category: "cases" },
  { id: "case-audio", name: "Case para Áudio", image: imgCarousel4, description: "Cases sob medida para equipamentos de áudio: mesas de som, caixas de som, amplificadores.", category: "cases" },
  { id: "case-video", name: "Case para Vídeo", image: imgCarousel5, description: "Cases projetados para câmeras, monitores, projetores e equipamentos de vídeo profissional.", category: "cases" },
  { id: "case-iluminacao", name: "Case para Iluminação", image: imgCarousel6, description: "Cases para transporte seguro de moving heads, refletores, mesas de luz e acessórios.", category: "cases" },
  { id: "case-instrumento", name: "Case para Instrumentos", image: imgCarousel7, description: "Cases para guitarra, baixo, teclado, bateria e instrumentos musicais diversos.", category: "cases" },
  { id: "case-drone", name: "Case para Drones", image: imgCarousel8, description: "Cases com espuma personalizada para drones e acessórios, garantindo proteção em transporte.", category: "cases" },
  { id: "suporte-tv", name: "Suporte para TV", image: imgSuportes, description: "Pedestal para TVs de 32\" a 85\" com base estável e regulagem de altura.", category: "suportes" },
  { id: "suporte-duplo", name: "Suporte Duplo", image: imgSuportes, description: "Suporte para duas TVs lado a lado, ideal para videowall em eventos e feiras.", category: "suportes" },
  { id: "suporte-triplo", name: "Suporte Triplo", image: imgSuportes, description: "Suporte para três monitores em configuração de videowall com ajuste individual.", category: "suportes" },
  { id: "suporte-led", name: "Suporte para Painel LED", image: imgCarousel9, description: "Estruturas para painéis de LED indoor e outdoor com fixação segura.", category: "suportes" },
  { id: "suporte-articulado", name: "Suporte Articulado", image: imgCarousel10, description: "Pedestal articulado com rodízios para movimentação fácil em eventos.", category: "suportes" },
  { id: "totem-pdv", name: "Totem Autoatendimento", image: imgTotens, description: "Totem para autoatendimento em pontos de venda com integração para tela touch.", category: "totens" },
  { id: "totem-evento", name: "Totem para Eventos", image: imgTotens, description: "Totem portátil para feiras e eventos corporativos com acabamento premium.", category: "totens" },
  { id: "totem-smartphone", name: "Totem Formato Smartphone", image: imgTotens, description: "Design em formato de smartphone com tela touchscreen integrada.", category: "totens" },
  { id: "totem-mesa", name: "Mesa Interativa", image: imgTotens, description: "Mesa interativa com tela widescreen para experiências imersivas.", category: "totens" },
  { id: "case-personalizado", name: "Case Personalizado com Logo", image: imgNew2, description: "Case com impressão personalizada da marca do cliente, acabamento premium em compensado revestido.", category: "cases" },
  { id: "case-bags", name: "Kit Bags e Cases", image: imgNew3, description: "Conjunto de bags e cases para transporte completo de equipamentos audiovisuais.", category: "cases" },
  { id: "case-painel", name: "Case para Painel", image: imgNew4, description: "Case sob medida para painéis de grande formato com estrutura reforçada.", category: "cases" },
  { id: "case-teclado", name: "Case para Teclado e Periféricos", image: imgNew5, description: "Case compacto com espuma personalizada para teclado, mouse e periféricos.", category: "cases" },
  { id: "case-mesa-som", name: "Case para Mesa de Som", image: imgNew6, description: "Case com tampa articulada e espuma interna para mesas de som profissionais.", category: "cases" },
  { id: "case-projetor", name: "Case para Projetor", image: imgNew7, description: "Case robusto para projetores profissionais de grande porte com berço sob medida.", category: "cases" },
  { id: "case-led-cia", name: "Case para Iluminação LED", image: imgNew8, description: "Cases personalizados para equipamentos de LED com espuma ondulada interna.", category: "cases" },
  { id: "case-rack", name: "Case Rack", image: imgNew9, description: "Case formato rack para equipamentos de som e amplificadores com ventilação.", category: "cases" },
  { id: "case-empilhavel", name: "Case Empilhável", image: imgNew10, description: "Cases com sistema de empilhamento seguro e rodízios para transporte facilitado.", category: "cases" },
  { id: "case-azul", name: "Cases Linha Azul", image: imgNew1, description: "Linha de cases em compensado azul com cantoneiras reforçadas em alumínio.", category: "cases" },
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
    navSections={[
      { id: "hero", label: "Início", href: "/gil-cases" },
      { id: "sobre", label: "Sobre", href: "/gil-cases" },
      { id: "galeria", label: "Galeria", href: "/gil-cases" },
      { id: "produtos", label: "Produtos", href: "/gil-cases/produtos" },
      { id: "diferenciais", label: "Diferenciais", href: "/gil-cases" },
      { id: "processo", label: "Processo", href: "/gil-cases" },
      { id: "contato-cta", label: "Contato", href: "/gil-cases" },
    ]}
  />
);

export default GilCasesProductsPage;
