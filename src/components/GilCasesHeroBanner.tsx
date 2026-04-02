import BrandHeroBanner from "@/components/BrandHeroBanner";

import bannerShow1 from "@/assets/banner-case-show1.png";
import bannerShow2 from "@/assets/banner-case-show2.png";
import bannerShow3 from "@/assets/banner-case-show3.png";

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
