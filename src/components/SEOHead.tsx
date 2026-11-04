import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

const BASE_URL = "https://gilenindustrial.com.br";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

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
