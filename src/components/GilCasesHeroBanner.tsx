import BrandHeroBanner from "@/components/BrandHeroBanner";
import bannerShow from "@/assets/banner-case-show-new.png";

import bannerBelico from "@/assets/banner-case-belico-new.png";
import bannerCorporativo from "@/assets/banner-case-corporativo-new.png";
import bannerIndustrial from "@/assets/banner-case-industrial.jpg";

const slides = [
  { image: bannerShow, title: "Cases para Shows e Eventos", subtitle: "Proteção profissional para equipamentos de palco, áudio e iluminação", tag: "ENTRETENIMENTO" },
  { image: bannerBelico, title: "Cases Bélicos", subtitle: "Cases táticos de alta resistência para armamentos e equipamentos de defesa", tag: "DEFESA" },
  { image: bannerCorporativo, title: "Cases Corporativos", subtitle: "Soluções para eventos corporativos, feiras e equipamentos audiovisuais", tag: "CORPORATIVO" },
  { image: bannerIndustrial, title: "Cases Industriais", subtitle: "Proteção para instrumentos científicos, eletrônicos e equipamentos sensíveis", tag: "INDUSTRIAL" },
];

const GilCasesHeroBanner = () => <BrandHeroBanner slides={slides} />;

export default GilCasesHeroBanner;
