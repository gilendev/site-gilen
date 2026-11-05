import { Navigate, useParams, useSearchParams } from "react-router-dom";
import BrandProductsLayout from "@/components/layout/BrandProductsLayout";
import BrandHeroBanner from "@/components/BrandHeroBanner";
import { parametrizzeBrand as brand, parametrizzeMedia as media, parametrizzeSolutions as solutions } from "@/data/parametrizze";

const catalogPath = "/parametrizze/produtos";
const categoryPath = (id?: string) => id ? `${catalogPath}/${id}` : catalogPath;
const categories = solutions.map(({ id, title }) => ({ id, title }));
const products = solutions.map((solution) => ({
  id: solution.id,
  name: solution.title,
  category: solution.id,
  description: solution.description,
  image: solution.image,
  imageAlt: solution.alt,
  images: solution.gallery.map(({ src }) => src),
  imageAlts: solution.gallery.map(({ alt }) => alt),
  details: solution.items,
  whatsappUrl: `https://wa.me/${brand.phone}?text=${encodeURIComponent(`Olá! Gostaria de conversar sobre um projeto de ${solution.title.toLocaleLowerCase("pt-BR")} da Parametrizze.`)}`,
}));
const slides = [
  { image: media.hero, title: "Design paramétrico", subtitle: brand.tagline, tag: "PARAMETRIZZE" },
  { image: media.cnc, title: "Fabricação CNC", subtitle: "Da modelagem computacional à usinagem dos componentes sob medida.", tag: "TECNOLOGIA" },
];
const navSections = [
  { id: "hero", label: "Início", href: "/parametrizze" },
  { id: "todos", label: "Todos", href: catalogPath },
  ...categories.map(({ id, title }) => ({ id, label: title, href: categoryPath(id) })),
  { id: "contato-cta", label: "Contato", href: "/contato" },
];

const legacyProductCategories: Record<string, string> = {
  "fachada-comercial": "paineis",
  "fachada-residencial": "paineis",
  "fachada-acm": "paineis",
  "estante-param": "mobiliario",
  "mesa-param": "mobiliario",
  "balcao-param": "mobiliario",
  "painel-decorativo": "paineis",
  "divisoria-ambiente": "paineis",
  "painel-teto": "acustica",
  "corte-mdf": "",
  "corte-acrilico": "",
  "prototipo-cnc": "",
};

const ParametrizzeProductsPage = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const [params] = useSearchParams();
  const category = solutions.find(({ id }) => id === categoria);
  const productId = params.get("produto");
  const product = products.find(({ id }) => id === productId);

  // Keep links to retired catalog entries useful without presenting discontinued models.
  if ((categoria && !category) || (productId !== null && !product) || (category && product && product.category !== category.id)) {
    const next = new URLSearchParams(params);
    const oldCategory = categoria === "fachadas" ? "paineis" : undefined;
    let id = product?.category ?? category?.id ?? oldCategory;
    if (!product && productId !== null) {
      next.delete("produto");
      if (Object.prototype.hasOwnProperty.call(legacyProductCategories, productId)) id = legacyProductCategories[productId];
    }
    return <Navigate replace to={{ pathname: categoryPath(id), search: next.toString() }} />;
  }

  return (
    <BrandProductsLayout
      brandName={brand.name}
      logoSrc={brand.logo}
      logoBgColor="#090909"
      backTo="/parametrizze"
      backLabel="Voltar para Parametrizze"
      seoTitle={category ? `${category.title} · Parametrizze` : "Portfólio Parametrizze"}
      seoDescription={category?.description ?? brand.description}
      seoPath={catalogPath}
      canonicalPath={categoryPath(category?.id)}
      ogImage={brand.ogImage}
      whatsappUrl={brand.whatsappUrl}
      catalogCountLabel="linhas de soluções"
      allProductsLabel="Todas as linhas"
      accentColorClass="bg-accent-blue"
      heroBanner={<BrandHeroBanner slides={slides} />}
      categories={categories}
      products={products}
      navSections={navSections}
    />
  );
};

export default ParametrizzeProductsPage;
