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
import imgExtra1 from "@/assets/gilcase-extra-1.png";
import imgExtra2 from "@/assets/gilcase-extra-2.png";
import imgExtra3 from "@/assets/gilcase-extra-3.png";
import imgExtra4 from "@/assets/gilcase-extra-4.png";
import imgExtra5 from "@/assets/gilcase-extra-5.png";
import imgExtra6 from "@/assets/gilcase-extra-6.png";
import imgExtra7 from "@/assets/gilcase-extra-7.png";
import imgExtra8 from "@/assets/gilcase-extra-8.png";
import imgExtra9 from "@/assets/gilcase-extra-9.png";
import imgExtra10 from "@/assets/gilcase-extra-10.png";
import imgExtra11 from "@/assets/gilcase-extra-11.png";
import imgExtra12 from "@/assets/gilcase-extra-12.png";
import imgExtra13 from "@/assets/gilcase-extra-13.png";
import imgExtra14 from "@/assets/gilcase-extra-14.png";
import imgExtra15 from "@/assets/gilcase-extra-15.png";
import imgExtra16 from "@/assets/gilcase-extra-16.png";
import imgExtra17 from "@/assets/gilcase-extra-17.png";
import imgExtra18 from "@/assets/gilcase-extra-18.png";
import imgExtra19 from "@/assets/gilcase-extra-19.png";
import imgExtra20 from "@/assets/gilcase-extra-20.png";
import imgExtra21 from "@/assets/gilcase-extra-21.png";
import imgExtra22 from "@/assets/gilcase-extra-22.png";
import imgExtra23 from "@/assets/gilcase-extra-23.png";
import imgExtra24 from "@/assets/gilcase-extra-24.png";
import imgSobmedida1 from "@/assets/img-sobmedida1.jpg";
import imgSobmedida2 from "@/assets/img-sobmedida2.jpg";
import imgSobmedida3 from "@/assets/img-sobmedida3.jpg";
import imgSobmedida4 from "@/assets/img-sobmedida4.jpg";
import imgSobmedida5 from "@/assets/img-sobmedida5.jpg";
import imgSobmedida6 from "@/assets/img-sobmedida6.jpg";
import imgSobmedida7 from "@/assets/img-sobmedida7.jpg";
import imgSobmedida8 from "@/assets/img-sobmedida8.jpg";
import imgSobmedida9 from "@/assets/img-sobmedida9.jpg";
import imgSobmedida10 from "@/assets/img-sobmedida10.jpg";
import imgSobmedida11 from "@/assets/img-sobmedida11.jpg";
import imgSobmedida12 from "@/assets/img-sobmedida12.jpg";
import imgSobmedida13 from "@/assets/img-sobmedida13.jpg";
import imgSobmedida14 from "@/assets/img-sobmedida14.png";
import imgSup1 from "@/assets/gilcase-suporte-1.png";
import imgSup2 from "@/assets/gilcase-suporte-2.png";
import imgSup3 from "@/assets/gilcase-suporte-3.png";
import imgSup4 from "@/assets/gilcase-suporte-4.png";
import imgSup5 from "@/assets/gilcase-suporte-5.png";
import imgSup6 from "@/assets/gilcase-suporte-6.png";
import imgSup7 from "@/assets/gilcase-suporte-7.png";
import imgSup8 from "@/assets/gilcase-suporte-8.png";
import imgSup9 from "@/assets/gilcase-suporte-9.png";
import imgSup10 from "@/assets/gilcase-suporte-10.png";

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
  { id: "suporte-tv", name: "Pedestal Simples para TV", image: imgSup1, description: "Pedestal para TVs de 32\" a 85\" com base estável e regulagem de altura.", category: "suportes" },
  { id: "suporte-duplo", name: "Pedestal Duplo Reforçado", image: imgSup2, description: "Suporte com duas colunas em aço inox para TVs de grande formato com base robusta.", category: "suportes" },
  { id: "suporte-mesa-inclinada", name: "Mesa Inclinada para Monitor", image: imgSup3, description: "Suporte tipo mesa com inclinação ajustável para monitores e telas touch de grande formato.", category: "suportes" },
  { id: "suporte-mesa-lateral", name: "Suporte Mesa Lateral", image: imgSup4, description: "Mesa com suporte lateral inclinado para telas touch e totens interativos.", category: "suportes" },
  { id: "suporte-mesa-touch", name: "Suporte Mesa Touch Inclinado", image: imgSup5, description: "Suporte com tela inclinada para uso interativo em balcões e pontos de venda.", category: "suportes" },
  { id: "suporte-videowall", name: "Suporte para Videowall", image: imgSup6, description: "Estrutura com quatro colunas em aço inox para videowall 2x2 com base em chapa.", category: "suportes" },
  { id: "suporte-compacto", name: "Pedestal Compacto", image: imgSup7, description: "Pedestal compacto com base curva e regulagem de altura para monitores.", category: "suportes" },
  { id: "suporte-coluna-dupla", name: "Pedestal Coluna Dupla", image: imgSup8, description: "Pedestal com duas colunas em alumínio e base quadrada para TVs profissionais.", category: "suportes" },
  { id: "suporte-teto", name: "Suporte de Teto", image: imgSup9, description: "Suporte pendente para fixação em teto com haste ajustável e suporte VESA.", category: "suportes" },
  { id: "suporte-articulado-pro", name: "Suporte Articulado Pro", image: imgSup10, description: "Pedestal articulado com braços laterais e base quadrada para TVs de grande formato.", category: "suportes" },
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
  
  { id: "case-empilhavel", name: "Case Empilhável", image: imgNew10, description: "Cases com sistema de empilhamento seguro e rodízios para transporte facilitado.", category: "cases" },
  { id: "case-azul", name: "Cases Linha Azul", image: imgNew1, description: "Linha de cases em compensado azul com cantoneiras reforçadas em alumínio.", category: "cases" },
  { id: "projeto-especial", name: "Projeto Especial", image: imgFabricacao, description: "Cases e estruturas especiais sob medida com engenharia dedicada.", category: "sob-medida" },
  { id: "prototipo", name: "Prototipagem 3D", image: imgFabricacao, description: "Projeto 3D e prototipagem antes da fabricação em série.", category: "sob-medida" },
  { id: "producao-serie", name: "Produção em Série", image: imgFabricacao, description: "Fabricação em série com padrão de qualidade e acabamento premium.", category: "sob-medida" },
  { id: "estrutura-metalica", name: "Estrutura Metálica Suspensa", image: imgSobmedida1, description: "Estruturas metálicas suspensas para galpões industriais com treliças e vigas de aço.", category: "sob-medida" },
  { id: "painel-led-suspenso", name: "Painel LED Suspenso", image: imgSobmedida2, description: "Instalação de painéis LED suspensos em estruturas metálicas para eventos e feiras.", category: "sob-medida" },
  { id: "montagem-trelica", name: "Montagem de Treliças para Eventos", image: imgSobmedida3, description: "Montagem de treliças e estruturas de grande porte para eventos com equipe especializada.", category: "sob-medida" },
  { id: "estrutura-videowall", name: "Estrutura para Videowall Suspenso", image: imgSobmedida4, description: "Estruturas sob medida para suporte de videowalls suspensos em feiras e convenções.", category: "sob-medida" },
  { id: "fachada-sob-medida", name: "Fachada Comercial Sob Medida", image: imgSobmedida5, description: "Projetos de fachadas comerciais com estruturas metálicas e revestimentos personalizados.", category: "sob-medida" },
  { id: "fachada-led-comercial", name: "Fachada com Painel LED", image: imgSobmedida6, description: "Fachada comercial com painel LED integrado e revestimento em madeira ripada.", category: "sob-medida" },
  { id: "cubo-led-evento", name: "Cubo LED para Eventos", image: imgSobmedida7, description: "Estrutura em formato de cubo com painéis LED em múltiplas faces para eventos e congressos.", category: "sob-medida" },
  { id: "instalacao-painel-externo", name: "Instalação de Painel Externo", image: imgSobmedida8, description: "Instalação de painéis LED externos com guindaste e estrutura metálica de suporte.", category: "sob-medida" },
  { id: "montagem-estrutura-fachada", name: "Montagem de Estrutura para Fachada", image: imgSobmedida9, description: "Montagem de estrutura metálica para suporte de painéis em fachadas comerciais.", category: "sob-medida" },
  { id: "estrutura-outdoor", name: "Estrutura para Outdoor com Treliças", image: imgSobmedida10, description: "Estrutura metálica com treliças para sustentação de outdoor publicitário de grande formato.", category: "sob-medida" },
  { id: "painel-led-outdoor", name: "Painel LED Outdoor Instalado", image: imgSobmedida11, description: "Painel LED outdoor em funcionamento com estrutura metálica de suporte e alta luminosidade.", category: "sob-medida" },
  { id: "instalacao-videowall-showroom", name: "Instalação Videowall em Showroom", image: imgSobmedida12, description: "Montagem de videowall curvo em showroom automotivo com equipe técnica especializada.", category: "sob-medida" },
  { id: "fachada-concessionaria", name: "Fachada de Concessionária", image: imgSobmedida13, description: "Projeto de fachada iluminada para concessionária com estrutura metálica e letreiro.", category: "sob-medida" },
  { id: "videowall-curvo-showroom", name: "Videowall Curvo em Showroom", image: imgSobmedida14, description: "Videowall curvo de alta resolução instalado em showroom automotivo premium.", category: "sob-medida" },
  { id: "case-compensado-branco", name: "Case Compensado Branco", image: imgExtra1, description: "Case em compensado branco com cantoneiras em alumínio, tampa articulada e divisória interna.", category: "cases" },
  { id: "case-teclado-musical", name: "Case para Teclado Musical", image: imgExtra2, description: "Case profissional para teclado com interior acolchoado e fechos reforçados.", category: "cases" },
  { id: "case-empilhavel-grande", name: "Cases Empilháveis Grande Porte", image: imgExtra3, description: "Conjunto de cases empilháveis para transporte de painéis e equipamentos de grande formato.", category: "cases" },
  { id: "case-rodizio-serralheria", name: "Case com Rodízio Serralheria", image: imgExtra4, description: "Case com rodízio retrátil e logo GilCase, ideal para transporte de ferramentas de serralheria.", category: "cases" },
  { id: "case-phygital", name: "Case para Painel Phygital", image: imgExtra5, description: "Case sob medida para painéis Phygital Solutions com rodízios e proteção reforçada.", category: "cases" },
  { id: "case-tv-grande", name: "Case para TV Grande Formato", image: imgExtra6, description: "Case para TVs de 55\" a 85\" com estrutura reforçada e barra central de proteção.", category: "cases" },
  { id: "case-modular-espuma", name: "Cases Modulares com Espuma", image: imgExtra7, description: "Cases modulares com espuma personalizada para kits de equipamentos diversos.", category: "cases" },
  { id: "case-firma-prop", name: "Case Firma Prop", image: imgExtra8, description: "Case personalizado para a empresa Firma Prop com acabamento premium em compensado preto.", category: "cases" },
  { id: "case-rack-gavetas", name: "Case Rack com Gavetas", image: imgExtra9, description: "Case formato rack com sistema de gavetas deslizantes para organização de equipamentos.", category: "cases" },
  { id: "case-logo-personalizado", name: "Case com Logo Personalizado", image: imgExtra10, description: "Case com impressão de logo do cliente em compensado preto com cantoneiras cromadas.", category: "cases" },
  { id: "case-tv-monitor", name: "Case para TV/Monitor", image: imgExtra11, description: "Case profissional com tampa articulada para TV e monitores de grande formato com proteção interna.", category: "cases" },
  { id: "case-rack-rede", name: "Case Rack de Rede", image: imgExtra12, description: "Case rack com rodízios para equipamentos de rede, switches e nobreaks com ventilação integrada.", category: "cases" },
  { id: "case-armario-vertical", name: "Case Armário Vertical", image: imgExtra13, description: "Case formato armário vertical com rodízios e prateleiras internas para equipamentos médicos e laboratoriais.", category: "cases" },
  { id: "case-grande-compartimentos", name: "Case com Compartimentos", image: imgExtra14, description: "Case grande com divisórias internas removíveis, bolsos na tampa e rodízios reforçados.", category: "cases" },
  { id: "case-ferramentas", name: "Case para Ferramentas", image: imgExtra15, description: "Case profissional para ferramentas com organizador na tampa e compartimento inferior acolchoado.", category: "cases" },
  { id: "case-marca-personalizada", name: "Case Marca Personalizada", image: imgExtra16, description: "Case com identidade visual personalizada da marca do cliente em compensado colorido.", category: "cases" },
  { id: "case-rack-compacto", name: "Case Rack Compacto", image: imgExtra17, description: "Case rack compacto com tampa articulada para equipamentos de áudio e mixers.", category: "cases" },
  { id: "case-cenografico", name: "Cases Cenográficos", image: imgExtra18, description: "Cases cenográficos de grande formato para cenários, letras e peças de comunicação visual.", category: "sob-medida" },
  { id: "case-alca-retratil", name: "Case com Alça Retrátil", image: imgExtra19, description: "Case com alça retrátil tipo mala e prateleiras internas para transporte facilitado.", category: "cases" },
  { id: "case-equipamento-daston", name: "Case para Equipamento Daston", image: imgExtra20, description: "Case sob medida para equipamentos Daston com fixação interna em X e rodízios.", category: "cases" },
  { id: "case-firma-prod", name: "Cases Firma Prod", image: imgExtra21, description: "Kit de cases personalizados para a empresa Firma Prod com acabamento premium e cantoneiras cromadas.", category: "cases" },
  { id: "case-international-school", name: "Kit Cases International School", image: imgExtra22, description: "Conjunto de cases de diversos tamanhos personalizados para International School com logo impresso.", category: "cases" },
  { id: "case-gaveteiro", name: "Case Gaveteiro Vertical", image: imgExtra23, description: "Case vertical com sistema de gavetas deslizantes e rodízios para organização profissional.", category: "cases" },
  { id: "case-empilhavel-pro", name: "Cases Empilháveis Pro", image: imgExtra24, description: "Conjunto de cases empilháveis profissionais com cantoneiras reforçadas e rodízios.", category: "cases" },
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
    wrapperClassName="gilcase-brand"
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
