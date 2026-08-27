import type { Metadata } from 'next';
import { FinalCTA, PageHero, SectionHeading } from '../_components/Primitives';
import { ProjectsFilter } from '../_components/ProjectsFilter';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Examples of the operational systems Black Opal Technologies designs and delivers.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Examples of the problems we help clients solve"
        description="These representative projects show the kind of operational work we take on across motorsport, infrastructure, software and automation."
        breadcrumbs={[{ label: 'Projects' }]}
      />
      <section className="tech-section tech-projects-page-section">
        <div className="tech-shell">
          <SectionHeading
            label="Representative work"
            title="Explore by capability"
            description="We have kept client details private where required. Each example focuses on the operating problem and the capabilities involved."
          />
          <ProjectsFilter />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
