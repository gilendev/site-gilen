import Layout from "@/components/layout/Layout";
import ProjetosSection from "@/components/sections/ProjetosSection";
import SEOHead from "@/components/SEOHead";

const ProjetosPage = () => (
  <Layout>
    <SEOHead
      title="Projetos"
      description="Portfólio de projetos industriais da GILEN: cases, suportes, totens, mobiliário paramétrico e soluções sob medida."
      path="/projetos"
    />
    <div className="pt-20">
      <ProjetosSection />
    </div>
  </Layout>
);

export default ProjetosPage;
