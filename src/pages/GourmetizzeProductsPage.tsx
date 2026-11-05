import { Navigate, useParams, useSearchParams } from "react-router-dom";
import BrandHeroBanner from "@/components/BrandHeroBanner";
import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import { gourmetizzeBrand, gourmetizzeLines, gourmetizzeMedia, gourmetizzeProductWhatsApp } from "@/data/gourmetizze";

const brandPath = "/gourmetizze";
const catalogPath = `${brandPath}/produtos`;
const categoryPath = (id?: string) => id ? `${catalogPath}/${id}` : catalogPath;

const categories = gourmetizzeLines.map(({ id, title }) => ({ id, title }));
const details = ["Chapa metálica cortada a laser", "Fabricação sob encomenda", "Medidas e acabamento sob consulta"];
const products = gourmetizzeLines.flatMap((line) => line.products.map((product) => ({
  id: product.id,
  name: product.name,
  description: product.description,
  image: product.image,
  imageAlt: product.alt,
  category: line.id,
  details,
  whatsappUrl: gourmetizzeProductWhatsApp(product.name),
})));
const slides = [
  { image: gourmetizzeMedia.hero, backdrop: gourmetizzeMedia.heroBackdrop, title: "Braseiro meia-lua com grelha", subtitle: "Grelha suspensa por correntes sobre o fogo a lenha.", tag: "BRASEIROS" },
  { image: gourmetizzeMedia.bannerChurrasqueira, title: "Churrasqueiras", subtitle: "Modelos em chapa de aço para preparar na grelha ou no espeto.", tag: "GOURMETIZZE" },
];
const navSections = [
  { id: "hero", label: "Início", href: brandPath },
  { id: "todos", label: "Todos", href: catalogPath },
  ...categories.map(({ id, title }) => ({ id, label: title, href: categoryPath(id) })),
  { id: "contato-cta", label: "Contato", href: "/contato" },
];

const GourmetizzeProductsPage = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const [params] = useSearchParams();
  const activeLine = gourmetizzeLines.find((line) => line.id === categoria);
  const productId = params.get("produto");
  const selected = products.find((product) => product.id === productId);

  // Keep shared product links useful when a category or an old model is no longer in the catalog.
  if (productId !== null && !selected) {
    const remainingParams = new URLSearchParams(params);
    remainingParams.delete("produto");
    return <Navigate replace to={{ pathname: catalogPath, search: remainingParams.toString() }} />;
  }
  if (categoria && (!activeLine || (selected && selected.category !== categoria))) {
    return <Navigate replace to={{ pathname: categoryPath(selected?.category), search: params.toString() }} />;
  }

  return (
    <BrandProductsLayout
      brandName={gourmetizzeBrand.name}
      logoSrc={gourmetizzeBrand.logo}
      logoBgColor="#5C3A1E"
      backTo={brandPath}
      backLabel="Voltar para Gourmetizze"
      seoTitle={activeLine ? `${activeLine.title} · Gourmetizze` : "Produtos Gourmetizze"}
      seoDescription={activeLine?.description ?? gourmetizzeBrand.description}
      catalogCountLabel="modelos no catálogo"
      seoPath={catalogPath}
      canonicalPath={categoryPath(activeLine?.id)}
      ogImage={gourmetizzeBrand.ogImage}
      whatsappUrl={gourmetizzeBrand.whatsappUrl}
      accentColorClass="bg-accent-blue"
      wrapperClassName="gourmetizze-brand"
      heroBanner={<BrandHeroBanner slides={slides} />}
      categories={categories}
      products={products}
      navSections={navSections}
    />
  );
};

export default GourmetizzeProductsPage;
