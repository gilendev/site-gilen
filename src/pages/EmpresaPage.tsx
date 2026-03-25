import Layout from "@/components/layout/Layout";
import EmpresaSection from "@/components/sections/EmpresaSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
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
      <TestimonialsSection />
      <CertificationsSection />
      <BlogSection />
    </div>
  </Layout>
);

export default EmpresaPage;
