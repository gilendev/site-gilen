// Content and media from the client-supplied Parametrizze portfolio (November 2026).
// Image provenance is recorded in public/parametrizze/portfolio/sources.json.
const asset = (name: string) => `/parametrizze/portfolio/${name}.webp`;

export const parametrizzeMedia = {
  hero: asset("hero"),
  cnc: asset("cnc"),
  paineis: asset("paineis"),
  painelDecorativo: asset("painel-decorativo"),
  espelho: asset("espelho"),
  divisoria: asset("divisoria"),
  divisoriaDetalhe: asset("divisoria-detalhe"),
  mobiliario: asset("mobiliario"),
  mesa: asset("mesa"),
  poltrona: asset("poltrona"),
  banco: asset("banco"),
  acustica: asset("acustica"),
  difusores: asset("difusores"),
  baffles: asset("baffles"),
  stand: asset("stand"),
  cenografia: asset("cenografia"),
  estrutura: asset("estrutura"),
  especial: asset("especial"),
};

export const parametrizzeBrand = {
  name: "PARAMETRIZZE",
  logo: asset("logo"),
  tagline: "Geometria inteligente. Arquitetura contemporânea.",
  description: "Divisão de produtos paramétricos da GILEN: painéis, móveis, acústica, stands e projetos especiais, desenvolvidos com modelagem computacional e fabricação CNC.",
  phone: "5511971927920",
  phoneDisplay: "(11) 97192-7920",
  email: "contato@gilenindustrial.com.br",
  whatsappUrl: `https://wa.me/5511971927920?text=${encodeURIComponent("Olá! Gostaria de conversar sobre um projeto da Parametrizze.")}`,
  ogImage: "https://gilenindustrial.com.br/parametrizze/portfolio/hero.webp",
};

export interface ParametrizzeSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
  alt: string;
  gallery: { src: string; alt: string }[];
}

export const parametrizzeSolutions: ParametrizzeSolution[] = [
  {
    id: "paineis",
    title: "Painéis",
    subtitle: "Geometria que transforma superfícies.",
    description: "Superfícies tridimensionais, formas orgânicas e padrões desenvolvidos por modelagem computacional. Os painéis paramétricos integram arquitetura, matemática e tecnologia digital em soluções personalizadas para fachadas, interiores e ambientes corporativos.",
    items: ["Painéis", "Divisórias", "Cabeceiras", "Espelhos"],
    image: parametrizzeMedia.paineis,
    alt: "Painel de madeira com superfície ondulada no portfólio Parametrizze",
    gallery: [
      { src: parametrizzeMedia.paineis, alt: "Superfície paramétrica com lâminas de madeira e iluminação" },
      { src: parametrizzeMedia.painelDecorativo, alt: "Painel decorativo de formas orgânicas em uma sala" },
      { src: parametrizzeMedia.divisoria, alt: "Divisória paramétrica junto a uma escada" },
      { src: parametrizzeMedia.divisoriaDetalhe, alt: "Detalhe das lâminas de uma divisória paramétrica" },
      { src: parametrizzeMedia.espelho, alt: "Espelho circular integrado a um painel paramétrico" },
    ],
  },
  {
    id: "mobiliario",
    title: "Móveis",
    subtitle: "Design, funcionalidade e presença arquitetônica.",
    description: "Mobiliário desenvolvido com design computacional e fabricação CNC. Geometrias inteligentes e variações controladas dão forma a peças que unem estética contemporânea, funcionalidade e engenharia, com personalização sob medida.",
    items: ["Mesas", "Cadeiras", "Aparadores", "Bancos", "Linha alta", "Mobiliário sob medida"],
    image: parametrizzeMedia.mobiliario,
    alt: "Ambiente com poltronas, mesa e painel paramétricos do portfólio",
    gallery: [
      { src: parametrizzeMedia.mobiliario, alt: "Composição de móveis paramétricos em uma sala" },
      { src: parametrizzeMedia.mesa, alt: "Mesa paramétrica com base de lâminas curvas" },
      { src: parametrizzeMedia.poltrona, alt: "Poltrona paramétrica de formas orgânicas" },
      { src: parametrizzeMedia.banco, alt: "Assento paramétrico com encosto curvo" },
    ],
  },
  {
    id: "acustica",
    title: "Acústica",
    subtitle: "Forma e controle das reflexões sonoras.",
    description: "Soluções que combinam design computacional, engenharia acústica e fabricação CNC. Superfícies tridimensionais projetadas para controlar reflexões sonoras e criar presença estética em ambientes corporativos, auditórios e espaços contemporâneos.",
    items: ["Difusores", "Absorvedores", "Baffles", "Acoustic C."],
    image: parametrizzeMedia.acustica,
    alt: "Referência de estúdio com tratamento acústico paramétrico em paredes e teto",
    gallery: [
      { src: parametrizzeMedia.acustica, alt: "Soluções acústicas integradas às paredes e ao teto de um estúdio" },
      { src: parametrizzeMedia.difusores, alt: "Painel de geometria tridimensional em ambiente de áudio" },
      { src: parametrizzeMedia.baffles, alt: "Referência de aplicação acústica em teto e paredes" },
    ],
  },
  {
    id: "stands",
    title: "Stands",
    subtitle: "Sua marca em uma experiência espacial.",
    description: "Estruturas modulares e formas arquitetônicas para feiras e eventos. Design paramétrico, engenharia e fabricação CNC permitem variações inteligentes, adaptação a diferentes espaços e personalização, com eficiência construtiva e forte presença visual.",
    items: ["Stands", "Cenografia paramétrica"],
    image: parametrizzeMedia.cenografia,
    alt: "Referência de stand com estrutura paramétrica curva para exposição",
    gallery: [
      { src: parametrizzeMedia.cenografia, alt: "Estrutura paramétrica envolvendo uma área de exposição" },
      { src: parametrizzeMedia.stand, alt: "Stand com balcão e painéis paramétricos" },
      { src: parametrizzeMedia.estrutura, alt: "Estruturas curvas de cenografia paramétrica" },
    ],
  },
  {
    id: "projetos-especiais",
    title: "Projetos especiais",
    subtitle: "Da sua ideia a uma geometria fabricável.",
    description: "Soluções desenvolvidas a partir da demanda específica de cada cliente. Design paramétrico e modelagem computacional transformam ideias, conceitos arquitetônicos e necessidades técnicas em peças únicas, superfícies complexas e estruturas para arquitetura, interiores, eventos e aplicações especiais.",
    items: ["Peças únicas", "Superfícies complexas", "Estruturas personalizadas"],
    image: parametrizzeMedia.especial,
    alt: "Composição do portfólio com móveis, painel e divisória de geometrias distintas",
    gallery: [
      { src: parametrizzeMedia.especial, alt: "Integração de mobiliário, painel e divisória em um ambiente" },
      { src: parametrizzeMedia.mobiliario, alt: "Referência de projeto com peças e superfícies paramétricas sob medida" },
    ],
  },
];
