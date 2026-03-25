import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AnimatedCounters from "@/components/sections/AnimatedCounters";
import HomeServicesSection from "@/components/sections/HomeServicesSection";
import MarcasSection from "@/components/sections/MarcasSection";
import HomeCtaSection from "@/components/sections/HomeCtaSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="GILEN Industrial | Engenharia Industrial sob Medida em São Paulo"
        description="13+ anos de experiência em engenharia industrial. Soluções sob medida com precisão técnica: cases, suportes, totens, mobiliário paramétrico e mais."
        path="/"
      />
      <HeroSection />
      <AnimatedCounters />
      <HomeServicesSection />
      <MarcasSection />
      <HomeCtaSection />
    </Layout>
  );
};

export default Index;
