import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import EmpresaSection from "@/components/sections/EmpresaSection";
import SolucoesSection from "@/components/sections/SolucoesSection";
import TecnologiaSection from "@/components/sections/TecnologiaSection";
import ProjetosSection from "@/components/sections/ProjetosSection";
import MarcasSection from "@/components/sections/MarcasSection";
import ProjetosEspeciaisSection from "@/components/sections/ProjetosEspeciaisSection";
import ContatoSection from "@/components/sections/ContatoSection";
import AnimatedCounters from "@/components/sections/AnimatedCounters";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import BlogSection from "@/components/sections/BlogSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import QuoteCalculator from "@/components/sections/QuoteCalculator";
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
      <AnimatedCounters />
      <MarcasSection />
      <TecnologiaSection />
      <PortfolioSection />
      <SolucoesSection />
      <TestimonialsSection />
      <ProjetosEspeciaisSection />
      <QuoteCalculator />
      <CertificationsSection />
      <BlogSection />
      <FAQSection />
      <ContatoSection />
    </Layout>
  );
};

export default Index;
