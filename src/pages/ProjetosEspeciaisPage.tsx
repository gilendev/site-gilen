import Layout from "@/components/layout/Layout";
import ProjetosEspeciaisSection from "@/components/sections/ProjetosEspeciaisSection";
import SEOHead from "@/components/SEOHead";

const ProjetosEspeciaisPage = () => (
  <Layout>
    <SEOHead
      title="Projetos Especiais"
      description="Projetos especiais sob medida da GILEN Industrial: soluções únicas para desafios industriais complexos."
      path="/projetos-especiais"
    />
    <div className="pt-20">
      <ProjetosEspeciaisSection />
    </div>
  </Layout>
);

export default ProjetosEspeciaisPage;
