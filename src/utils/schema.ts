import { SITE_URL } from '../config/routes';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WeFutura',
    url: SITE_URL,
    logo: `${SITE_URL}/futura_logo_new.png`,
    description: 'Wdrożenia systemów AI i automatyzacji procesów biznesowych dla firm w Polsce.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@wefutura.com',
      contactType: 'customer service',
      availableLanguage: 'Polish',
    },
    sameAs: [
      'https://www.instagram.com/futurasolutions_/',
      'https://www.facebook.com/profile.php?id=61584275060063',
    ],
  };
}

export function buildServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'WeFutura',
      url: SITE_URL,
    },
    areaServed: 'PL',
    availableLanguage: 'Polish',
  };
}

export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildArticleSchema(title: string, description: string, url: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    publisher: {
      '@type': 'Organization',
      name: 'WeFutura',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/futura_logo_new.png`,
      },
    },
    datePublished,
    inLanguage: 'pl',
  };
}
