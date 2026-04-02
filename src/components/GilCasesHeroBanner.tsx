import BrandHeroBanner from "@/components/BrandHeroBanner";
import bannerShow from "@/assets/banner-case-show-new.png";
import bannerHenko1 from "@/assets/banner-case-show-henko1.png";
import bannerHenko2 from "@/assets/banner-case-show-henko2.png";
import bannerHenko3 from "@/assets/banner-case-show-henko3.png";
import bannerHenko4 from "@/assets/banner-case-show-henko4.png";
import bannerHenko5 from "@/assets/banner-case-show-henko5.png";
import bannerHenko6 from "@/assets/banner-case-show-henko6.png";
import bannerBelico from "@/assets/banner-case-belico-new.png";
import bannerCorporativo from "@/assets/banner-case-corporativo-new.png";
import bannerIndustrial from "@/assets/banner-case-industrial.jpg";

const slides = [
  { image: bannerShow, title: "Cases para Shows e Eventos", subtitle: "Proteção profissional para equipamentos de palco, áudio e iluminação", tag: "ENTRETENIMENTO" },
  { image: bannerHenko1, title: "Cases para Produções Musicais", subtitle: "Cases profissionais em ação nos bastidores de grandes shows", tag: "SHOWS" },
  { image: bannerHenko2, title: "Cases para Backstage", subtitle: "Robustez e organização para montagem e desmontagem de palcos", tag: "BACKSTAGE" },
  { image: bannerHenko3, title: "Cases para Turnês", subtitle: "Equipamentos protegidos e prontos para rodar o país", tag: "TURNÊS" },
  { image: bannerHenko4, title: "Cases no Palco", subtitle: "Iluminação profissional e cases prontos para o espetáculo", tag: "PALCO" },
  { image: bannerHenko5, title: "Cases para Grandes Eventos", subtitle: "Soluções robustas para produções de grande porte", tag: "EVENTOS" },
  { image: bannerHenko6, title: "Cases ao Vivo", subtitle: "Presença garantida nos maiores shows do país", tag: "AO VIVO" },
  { image: bannerBelico, title: "Cases Bélicos", subtitle: "Cases táticos de alta resistência para armamentos e equipamentos de defesa", tag: "DEFESA" },
  { image: bannerCorporativo, title: "Cases Corporativos", subtitle: "Soluções para eventos corporativos, feiras e equipamentos audiovisuais", tag: "CORPORATIVO" },
  { image: bannerIndustrial, title: "Cases Industriais", subtitle: "Proteção para instrumentos científicos, eletrônicos e equipamentos sensíveis", tag: "INDUSTRIAL" },
];

const GilCasesHeroBanner = () => <BrandHeroBanner slides={slides} />;

export default GilCasesHeroBanner;
