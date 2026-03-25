import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AnimatedCounters from "@/components/sections/AnimatedCounters";
import MarcasSection from "@/components/sections/MarcasSection";
import ContatoSection from "@/components/sections/ContatoSection";
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
      <MarcasSection />
      <ContatoSection />
    </Layout>
  );
};

export default Index;
