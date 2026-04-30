import { k1PillarContent, k1SupportingContent, k1BlogContent } from './clusters/k1-automatyzacja-procesow';
import { k2PillarContent, k2SupportingContent, k2BlogContent } from './clusters/k2-no-code';
import { k3PillarContent, k3SupportingContent, k3BlogContent } from './clusters/k3-sprzedaz';
import { k4PillarContent, k4SupportingContent, k4BlogContent } from './clusters/k4-systemy-ai';
import { k5Content, k6BlogContent, k7Content, k7BlogContent, k4AdditionalBlogContent } from './clusters/k5k6k7';
import { k8GEOPillarContent, k8CennikPillarContent, k8SupportingContent } from './clusters/k8-nowe-uslugi';
import type { PageContent } from './clusters/k1-automatyzacja-procesow';

const allContent: Record<string, PageContent> = {
  [k1PillarContent.slug]: k1PillarContent,
  [k2PillarContent.slug]: k2PillarContent,
  [k3PillarContent.slug]: k3PillarContent,
  [k4PillarContent.slug]: k4PillarContent,
  [k8GEOPillarContent.slug]: k8GEOPillarContent,
  [k8CennikPillarContent.slug]: k8CennikPillarContent,
  ...k1SupportingContent,
  ...k2SupportingContent,
  ...k3SupportingContent,
  ...k4SupportingContent,
  ...k5Content,
  ...k1BlogContent,
  ...k2BlogContent,
  ...k3BlogContent,
  ...k4BlogContent,
  ...k4AdditionalBlogContent,
  ...k6BlogContent,
  ...k7Content,
  ...k7BlogContent,
  ...k8SupportingContent,
};

export function getPageContent(slug: string): PageContent | undefined {
  return allContent[slug];
}

export type { PageContent };
