import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, publishedProjectCaseStudies } from '../../_data/site';

type ProjectPageProps = { params: Promise<{ projectSlug: string }> };

export function generateStaticParams() {
  return publishedProjectCaseStudies.map((project) => ({ projectSlug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project?.publishedCaseStudy) {
    return {
      title: 'Project Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { projectSlug } = await params;
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project?.publishedCaseStudy) {
    notFound();
  }

  notFound();
}
