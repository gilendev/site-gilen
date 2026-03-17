import Layout from "@/components/layout/Layout";
import EmpresaSection from "@/components/sections/EmpresaSection";
import SEOHead from "@/components/SEOHead";

const EmpresaPage = () => (
  <Layout>
    <SEOHead
      title="A Empresa"
      description="Conheça a GILEN Industrial: 13+ anos de experiência em engenharia industrial, soluções sob medida e precisão técnica em São Paulo."
      path="/empresa"
    />
    <div className="pt-20">
      <EmpresaSection />
    </div>
  </Layout>
);

export default EmpresaPage;
