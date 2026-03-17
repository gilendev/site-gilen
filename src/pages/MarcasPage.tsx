import Layout from "@/components/layout/Layout";
import MarcasSection from "@/components/sections/MarcasSection";
import SEOHead from "@/components/SEOHead";

const MarcasPage = () => (
  <Layout>
    <SEOHead
      title="Nossas Marcas"
      description="Conheça as marcas GILEN: Parametrizze, Gourmetizze, Comicpets, Design Kids e Gil Cases — soluções industriais especializadas."
      path="/marcas"
    />
    <div className="pt-20">
      <MarcasSection />
    </div>
  </Layout>
);

export default MarcasPage;
