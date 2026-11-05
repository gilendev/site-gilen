const mediaPath = "/brand-assets/gourmetizze";
const meiaLua = `${mediaPath}/meia-lua.webp`;
const quadrada = `${mediaPath}/quadrada.webp`;

export const gourmetizzeMedia = {
  hero: meiaLua,
  heroBackdrop: `${mediaPath}/jardim-banner.webp`,
  bannerChurrasqueira: `${mediaPath}/banner-churrasqueira.webp`,
  quadrada,
  espetos: `${mediaPath}/espetos.webp`,
  meiaLua,
  fogareiro: `${mediaPath}/fogareiro-de-encaixe.webp`,
  portaLenha: `${mediaPath}/porta-lenha.webp`,
};

const whatsapp = (message: string) => `https://wa.me/5511971927920?text=${encodeURIComponent(message)}`;

export const gourmetizzeBrand = {
  name: "GOURMETIZZE",
  logo: "/brand-assets/logo-gourmetizze.png",
  whatsappUrl: whatsapp("Olá! Gostaria de conversar sobre uma peça sob encomenda da Gourmetizze."),
  email: "contato@gilenindustrial.com.br",
  description: "Churrasqueiras, braseiros de jardim, fogareiros e acessórios para áreas externas. Peças sob encomenda em chapa metálica cortada a laser.",
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
  comTampa: {
    id: "churrasqueira-com-tampa",
    name: "Churrasqueira dobrável com tampa",
    description: "A grelha principal fica sob uma tampa articulada. O compartimento de fogo lateral e a prateleira inferior para lenha integram o mesmo conjunto.",
    image: `${mediaPath}/churrasqueira-com-tampa.webp`,
    alt: "Churrasqueira de aço com tampa aberta, compartimento de fogo lateral e lenha na prateleira inferior",
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

const gardenFirePits: GourmetizzeProduct[] = [
  {
    id: "lareira-com-bancos",
    name: "Lareira redonda com bancos",
    description: "O braseiro central e os quatro bancos compartilham o desenho de lâminas curvas. Os assentos redondos de madeira acompanham o contorno do conjunto.",
    alt: "Braseiro redondo de aço cercado por quatro bancos com assentos de madeira",
  },
  {
    id: "braseiro-royal-flush",
    name: "Braseiro Royal Flush",
    description: "Chapas em formato de cartas de baralho se sobrepõem em leque e formam uma bacia baixa. A luz do fogo atravessa os naipes recortados no aço.",
    alt: "Braseiro baixo com cartas de aço dispostas em leque ao redor do fogo",
  },
  {
    id: "braseiro-granada",
    name: "Braseiro Granada",
    description: "A lareira escultórica tem corpo arredondado, aros horizontais e uma argola lateral. Os vãos amplos entre as peças deixam as chamas à vista.",
    alt: "Lareira de jardim com armação vazada em forma de granada e argola decorativa",
  },
  {
    id: "braseiro-crepusculo",
    name: "Braseiro Chama do Crepúsculo",
    description: "Lâminas curvas se cruzam em torno de uma bacia circular baixa. A trama de losangos permite ver a lenha e as brasas pelas laterais.",
    alt: "Braseiro circular baixo com trama de aço cruzada em losangos",
  },
  {
    id: "lareira-de-jardim",
    name: "Lareira de jardim",
    description: "Lâminas verticais contornam a base e sobem em pontas altas. A abertura frontal em forma de chama emoldura o fogo no centro da peça.",
    alt: "Lareira vertical de jardim com aletas pontiagudas e abertura frontal em forma de chama",
  },
  {
    id: "braseiro-turbo",
    name: "Braseiro Turbo",
    description: "A bacia de fogo se apoia em aletas radiais de aço. Elas se abrem da base até a borda superior, desenhando uma coroa em torno da lenha.",
    alt: "Braseiro baixo em forma de cone aberto com aletas de aço ao redor da borda",
  },
  {
    id: "esfera-com-tampa",
    name: "Bola de fogo com tampa",
    description: "Painéis poligonais formam uma esfera facetada sobre pés de aço. A luz das brasas aparece pelos desenhos de chamas recortados nas faces.",
    alt: "Lareira esférica facetada com recortes em forma de chama e base de aço",
  },
  {
    id: "lareira-fire-drop",
    name: "Lareira Fire Drop",
    description: "O perfil abaulado na base se estreita em direção ao topo. Entre as lâminas verticais, a chama aparece no corpo da peça em forma de gota.",
    alt: "Lareira alta em forma de gota, construída com lâminas verticais de aço",
  },
  {
    id: "esfera-luminosa",
    name: "Braseiro Esfera Luminosa",
    description: "Lâminas largas e arqueadas dão volume à esfera baixa. O topo aberto e os espaços entre as lâminas deixam a lenha e as chamas visíveis.",
    alt: "Braseiro esférico baixo e aberto com largas lâminas curvas de aço",
  },
  {
    id: "calice-octogonal",
    name: "Braseiro Cálice Octogonal",
    description: "Uma taça de oito lados se apoia sobre aletas curvas. Elas se aproximam no centro e se abrem novamente nos pés, formando o pedestal.",
    alt: "Braseiro com bacia octogonal e pedestal estreito de lâminas curvas",
  },
  {
    id: "torre-espiral",
    name: "Lareira Torre Espiral",
    description: "As lâminas inclinadas ligam a base circular ao aro superior mais largo. O desenho em espiral envolve a bacia de fogo na parte alta da torre.",
    alt: "Lareira alta de aço com lâminas diagonais formando uma torre em espiral",
  },
].map((product) => ({ ...product, image: `${mediaPath}/${product.id}.webp` }));

export const gourmetizzeLines: GourmetizzeLine[] = [
  {
    id: "churrasqueiras",
    title: "Churrasqueiras",
    description: "Opções dobráveis ou de encaixe para preparar na grelha ou no espeto.",
    image: products.espetos.image,
    alt: products.espetos.alt,
    products: [products.quadrada, products.espetos, products.comTampa],
  },
  {
    id: "braseiros",
    title: "Braseiros",
    description: "Lareiras e braseiros de aço para jardins e pátios, com estruturas abertas ou vazadas.",
    image: products.meiaLua.image,
    alt: products.meiaLua.alt,
    products: [products.meiaLua, ...gardenFirePits],
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
