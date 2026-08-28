import { TechnologyHomePage } from './_components/TechnologyHomePage';
import { createPageMetadata, defaultDescription, defaultTitle } from './_data/seo';

export const metadata = createPageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: '/',
  absoluteTitle: true,
});

export default function TechnologyPage() {
  return <TechnologyHomePage />;
}
