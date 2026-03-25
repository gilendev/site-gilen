import Layout from "@/components/layout/Layout";
import SolucoesSection from "@/components/sections/SolucoesSection";
import ProjetosEspeciaisSection from "@/components/sections/ProjetosEspeciaisSection";
import SEOHead from "@/components/SEOHead";

const SolucoesPage = () => (
  <Layout>
    <SEOHead
      title="Soluções Industriais"
      description="Soluções industriais sob medida: cases, suportes, totens, mobiliário, churrasqueiras e projetos especiais com precisão técnica."
      path="/solucoes"
    />
    <div className="pt-20">
      <SolucoesSection />
      <ProjetosEspeciaisSection />
    </div>
  </Layout>
);

export default SolucoesPage;
