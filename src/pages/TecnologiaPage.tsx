import Layout from "@/components/layout/Layout";
import TecnologiaSection from "@/components/sections/TecnologiaSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import SEOHead from "@/components/SEOHead";

const TecnologiaPage = () => (
  <Layout>
    <SEOHead
      title="Tecnologia"
      description="Tecnologia de ponta: CNC, corte a laser, impressão 3D e design paramétrico para soluções industriais de alta precisão."
      path="/tecnologia"
    />
    <div className="pt-20">
      <TecnologiaSection />
      <CertificationsSection />
    </div>
  </Layout>
);

export default TecnologiaPage;
