import BrandHeroBanner from "@/components/BrandHeroBanner";

import bannerShow1 from "@/assets/banner-case-show1.png";
import bannerShow2 from "@/assets/banner-case-show2.png";
import bannerShow3 from "@/assets/banner-case-show3.png";
import bannerBelico1 from "@/assets/banner-case-belico1.png";
import bannerBelico2 from "@/assets/banner-case-belico2.png";
import bannerBelico3 from "@/assets/banner-case-belico3.png";
import bannerBelico4 from "@/assets/banner-case-belico4.png";
import bannerHospitalar1 from "@/assets/banner-case-hospitalar1.png";
import bannerHospitalar2 from "@/assets/banner-case-hospitalar2.png";
import bannerHospitalar3 from "@/assets/banner-case-hospitalar3.png";

const slides = [
  {
    image: bannerShow1,
    title: "Cases para Equipamentos de Som, Luz e Imagem",
    subtitle: "Proteção profissional para seus equipamentos de palco e estúdio",
    tag: "SOM · LUZ · IMAGEM",
  },
  {
    image: bannerShow2,
    title: "Cases para Equipamentos de Som, Luz e Imagem",
    subtitle: "Soluções robustas para turnês, shows e produções ao vivo",
    tag: "SOM · LUZ · IMAGEM",
  },
  {
    image: bannerShow3,
    title: "Cases para Equipamentos de Som, Luz e Imagem",
    subtitle: "Fabricação sob medida com qualidade GilCase",
    tag: "SOM · LUZ · IMAGEM",
  },
  {
    image: bannerBelico1,
    title: "Cases para Uso Militar e Bélico",
    subtitle: "Soluções táticas para comando, controle e comunicações em campo",
    tag: "MILITAR · BÉLICO",
  },
  {
    image: bannerBelico2,
    title: "Cases para Uso Militar e Bélico",
    subtitle: "Armazenamento seguro e transporte de armamento pesado",
    tag: "MILITAR · BÉLICO",
  },
  {
    image: bannerBelico3,
    title: "Cases para Uso Militar e Bélico",
    subtitle: "Organização tática com espuma customizada de alta densidade",
    tag: "MILITAR · BÉLICO",
  },
  {
    image: bannerBelico4,
    title: "Cases para Uso Militar e Bélico",
    subtitle: "Proteção balística e logística para forças de segurança",
    tag: "MILITAR · BÉLICO",
  },
  {
    image: bannerHospitalar1,
    title: "Cases para o Segmento Hospitalar",
    subtitle: "Transporte seguro e rastreável de equipamentos médicos e materiais biológicos",
    tag: "HOSPITALAR · SAÚDE",
  },
  {
    image: bannerHospitalar2,
    title: "Cases para o Segmento Hospitalar",
    subtitle: "Cases sob medida para salas de cirurgia, UTIs e unidades de urgência",
    tag: "HOSPITALAR · SAÚDE",
  },
  {
    image: bannerHospitalar3,
    title: "Cases para o Segmento Hospitalar",
    subtitle: "Proteção profissional para equipamentos hospitalares de alta complexidade",
    tag: "HOSPITALAR · SAÚDE",
  },
];

const GilCasesHeroBanner = () => {
  if (slides.length === 0) {
    return (
      <div className="w-full h-[240px] sm:h-[320px] md:h-[400px] rounded-xl bg-muted flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Banner em atualização...</p>
      </div>
    );
  }
  return <BrandHeroBanner slides={slides} />;
};

export default GilCasesHeroBanner;
