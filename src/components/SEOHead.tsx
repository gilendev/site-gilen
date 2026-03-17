import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

const BASE_URL = "https://gilenindustrial.com.br";
const DEFAULT_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fe2ece24-82cc-471d-b8d6-93a4cb2c8163/id-preview-3da5d6f9--46b727cb-8a3e-4213-8f14-17e8f9c5c12f.lovable.app-1773420971904.png";

const SEOHead = ({ title, description, path = "/", ogImage }: SEOHeadProps) => {
  const fullTitle = path === "/" ? title : `${title} | GILEN Industrial`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
