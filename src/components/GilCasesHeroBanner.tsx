import BrandHeroBanner from "@/components/BrandHeroBanner";

const slides: { image: string; title: string; subtitle: string; tag: string }[] = [];

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
