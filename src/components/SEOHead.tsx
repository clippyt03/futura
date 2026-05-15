import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config/routes';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schemas?: object[];
}

const SEOHead = ({ title, description, canonical, schemas = [] }: SEOHeadProps) => {
  const canonicalPath = canonical
    ? canonical.startsWith('/')
      ? canonical
      : `/${canonical}`
    : undefined;
  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : undefined;

  return (
    <Helmet>
      <html lang="pl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {canonicalUrl && <link rel="alternate" hrefLang="pl" href={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="WeFutura" />
      <meta property="og:locale" content="pl_PL" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="index, follow" />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
