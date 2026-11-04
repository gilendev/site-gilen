const mediaPath = "/brand-assets/gourmetizze";
const quadrada = `${mediaPath}/quadrada.webp`;

export const gourmetizzeMedia = {
  hero: quadrada,
  quadrada,
  espetos: `${mediaPath}/espetos.webp`,
  meiaLua: `${mediaPath}/meia-lua.webp`,
  fogareiro: `${mediaPath}/fogareiro.webp`,
  portaLenha: `${mediaPath}/porta-lenha.webp`,
};

const whatsapp = (message: string) => `https://wa.me/5511971927920?text=${encodeURIComponent(message)}`;

export const gourmetizzeBrand = {
  name: "GOURMETIZZE",
  logo: "/brand-assets/logo-gourmetizze.png",
  whatsappUrl: whatsapp("Olá! Gostaria de conversar sobre uma peça sob encomenda da Gourmetizze."),
  email: "contato@gilenindustrial.com.br",
  description: "Churrasqueiras, braseiros, fogareiros e acessórios para cozinhar ao ar livre. Peças sob encomenda em chapa metálica cortada a laser.",
  ogImage: `https://gilenindustrial.com.br${gourmetizzeMedia.hero}`,
};

export const gourmetizzeProductWhatsApp = (name: string) => whatsapp(`Olá! Gostaria de um orçamento sob encomenda para a seguinte peça da Gourmetizze: ${name}.`);

export interface GourmetizzeProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface GourmetizzeLine {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  products: GourmetizzeProduct[];
}

const products = {
  quadrada: {
    id: "quadrada",
    name: "Churrasqueira quadrada com apoios de madeira",
    description: "Churrasqueira dobrável com grelha superior e duas mesas laterais de madeira para apoiar utensílios durante o preparo.",
    image: gourmetizzeMedia.quadrada,
    alt: "Churrasqueira quadrada de chapa metálica com grelha superior e apoios laterais de madeira",
  },
  espetos: {
    id: "espetos",
    name: "Churrasqueira portátil para espetos",
    description: "A caixa retangular de chapa tem rasgos nas bordas para acomodar os espetos sobre as brasas. Travas de encaixe unem as laterais.",
    image: gourmetizzeMedia.espetos,
    alt: "Churrasqueira retangular de chapa com rasgos para acomodar espetos e travas nas laterais",
  },
  meiaLua: {
    id: "meia-lua",
    name: "Braseiro meia-lua com grelha",
    description: "Um braço de aço em forma de meia-lua sustenta a grelha redonda por correntes. A lenha queima na bacia logo abaixo.",
    image: gourmetizzeMedia.meiaLua,
    alt: "Braseiro de aço com braço em meia-lua e grelha redonda suspensa por correntes",
  },
  fogareiro: {
    id: "fogareiro",
    name: "Fogareiro desmontável",
    description: "Chapas laterais se encaixam para formar a câmara de fogo. A abertura permite alimentar a lenha e o apoio superior recebe a panela.",
    image: gourmetizzeMedia.fogareiro,
    alt: "Fogareiro de chapas encaixadas com abertura para lenha e apoio superior para panela",
  },
  portaLenha: {
    id: "porta-lenha",
    name: "Suporte de lenha de encaixe",
    description: "Chapas metálicas entrecruzadas formam um berço para organizar a lenha ao lado da área de fogo.",
    image: gourmetizzeMedia.portaLenha,
    alt: "Suporte para lenha formado por chapas metálicas entrecruzadas",
  },
} satisfies Record<string, GourmetizzeProduct>;

export const gourmetizzeLines: GourmetizzeLine[] = [
  {
    id: "churrasqueiras",
    title: "Churrasqueiras",
    description: "Opções dobráveis ou de encaixe para preparar na grelha ou no espeto.",
    image: products.espetos.image,
    alt: products.espetos.alt,
    products: [products.quadrada, products.espetos],
  },
  {
    id: "braseiros",
    title: "Braseiros",
    description: "Peças que reúnem o fogo e o preparo dos alimentos em uma estrutura aberta.",
    image: products.meiaLua.image,
    alt: products.meiaLua.alt,
    products: [products.meiaLua],
  },
  {
    id: "fogareiros",
    title: "Fogareiros",
    description: "Estruturas para cozinhar com panela diretamente sobre o fogo a lenha.",
    image: products.fogareiro.image,
    alt: products.fogareiro.alt,
    products: [products.fogareiro],
  },
  {
    id: "acessorios",
    title: "Acessórios",
    description: "Peças de apoio para organizar a área de fogo ao ar livre.",
    image: products.portaLenha.image,
    alt: products.portaLenha.alt,
    products: [products.portaLenha],
  },
];
