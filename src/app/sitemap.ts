import type { MetadataRoute } from 'next';
import { siteUrl } from './_data/seo';

const routes = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/solutions', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/solutions/network-fibre', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/elv-security', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/software-ai', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/motorsport', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
] satisfies Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency,
    priority,
  }));
}
