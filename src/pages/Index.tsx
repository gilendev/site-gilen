import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import EmpresaSection from "@/components/sections/EmpresaSection";
import SolucoesSection from "@/components/sections/SolucoesSection";
import TecnologiaSection from "@/components/sections/TecnologiaSection";
import ProjetosSection from "@/components/sections/ProjetosSection";
import MarcasSection from "@/components/sections/MarcasSection";
import ProjetosEspeciaisSection from "@/components/sections/ProjetosEspeciaisSection";
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
      <EmpresaSection />
      <MarcasSection />
      <TecnologiaSection />
      <ProjetosSection />
      <SolucoesSection />
      <ProjetosEspeciaisSection />
      <ContatoSection />
    </Layout>
  );
};

export default Index;
