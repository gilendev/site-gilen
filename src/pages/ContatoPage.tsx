import Layout from "@/components/layout/Layout";
import ContatoSection from "@/components/sections/ContatoSection";
import QuoteCalculator from "@/components/sections/QuoteCalculator";
import FAQSection from "@/components/sections/FAQSection";
import SEOHead from "@/components/SEOHead";

const ContatoPage = () => (
  <Layout>
    <SEOHead
      title="Contato"
      description="Entre em contato com a GILEN Industrial. Solicite orçamento, tire dúvidas ou agende uma visita. São Paulo - SP."
      path="/contato"
    />
    <div className="pt-20">
      <QuoteCalculator />
      <ContatoSection />
      <FAQSection />
    </div>
  </Layout>
);

export default ContatoPage;
