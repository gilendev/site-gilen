import { useMemo } from "react";
import { useParams } from "react-router-dom";
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
import bannerSuporte1 from "@/assets/banner-suporte1.png";
import bannerSuporte2 from "@/assets/banner-suporte2.png";
import bannerSuporte3 from "@/assets/banner-suporte3.png";
import bannerTotem1 from "@/assets/banner-totem1.png";
import bannerTotem2 from "@/assets/banner-totem2.png";
import bannerTotem3 from "@/assets/banner-totem3.png";
import bannerEstrutura1 from "@/assets/banner-estrutura1.png";
import bannerEstrutura2 from "@/assets/banner-estrutura2.png";
import bannerEstrutura3 from "@/assets/banner-estrutura3.png";

const casesSlides = [
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

const suportesSlides = [
  {
    image: bannerSuporte1,
    title: "Suportes Técnicos para Monitores e Painéis",
    subtitle: "Pedestais, suportes de teto e articulados para instalações profissionais",
    tag: "SUPORTES · PEDESTAIS",
  },
  {
    image: bannerSuporte2,
    title: "Suportes Industriais e Corporativos",
    subtitle: "Soluções VESA, suportes de parede e mesa para ambientes de alta performance",
    tag: "SUPORTES · VESA",
  },
  {
    image: bannerSuporte3,
    title: "Suportes para Videowall e Digital Signage",
    subtitle: "Estruturas robustas para montagem de painéis de grande formato",
    tag: "SUPORTES · VIDEOWALL",
  },
];

const totensSlides = [
  {
    image: bannerTotem1,
    title: "Totens Interativos para Varejo e Corporativo",
    subtitle: "Soluções digitais de autoatendimento, informação e carregamento para pontos de venda",
    tag: "TOTENS · VAREJO",
  },
  {
    image: bannerTotem2,
    title: "Totens LED e Digital Signage",
    subtitle: "Painéis verticais de alta resolução para comunicação visual e mídia indoor",
    tag: "TOTENS · LED · SIGNAGE",
  },
  {
    image: bannerTotem3,
    title: "Totens Personalizados para Grandes Marcas",
    subtitle: "Projetos sob medida para concessionárias, redes de varejo e eventos corporativos",
    tag: "TOTENS · SOB MEDIDA",
  },
];

const estruturasSlides = [
  {
    image: bannerEstrutura1,
    title: "Estruturas Metálicas para Painéis LED",
    subtitle: "Fachadas, painéis suspensos e domos geodésicos com engenharia sob medida",
    tag: "ESTRUTURAS · FACHADAS · LED",
  },
  {
    image: bannerEstrutura2,
    title: "Estruturas para Lazer, Esporte e Eventos",
    subtitle: "Painéis LED para piscinas, clubes esportivos e instalações cilíndricas 360°",
    tag: "ESTRUTURAS · ESPORTE · LAZER",
  },
  {
    image: bannerEstrutura3,
    title: "Mídia Exterior e Videowalls Curvos",
    subtitle: "Truck LED, vitrines de luxo e videowalls curvos para concessionárias e varejo",
    tag: "ESTRUTURAS · MÍDIA · VIDEOWALL",
  },
];

const allSlides = [...casesSlides, ...suportesSlides, ...totensSlides, ...estruturasSlides];

const GilCasesHeroBanner = () => {
  const { categoria } = useParams<{ categoria?: string }>();

  const slides = useMemo(() => {
    if (categoria === "cases") return casesSlides;
    if (categoria === "suportes") return suportesSlides;
    if (categoria === "totens") return totensSlides;
    if (categoria === "estruturas-metalicas") return estruturasSlides;
    return allSlides;
  }, [categoria]);

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
