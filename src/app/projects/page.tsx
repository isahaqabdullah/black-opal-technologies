import { FinalCTA, PageHero, SectionHeading } from '../_components/Primitives';
import { ProjectsFilter } from '../_components/ProjectsFilter';
import { createPageMetadata } from '../_data/seo';

export const metadata = createPageMetadata({
  title: 'Technology Projects',
  description: 'Examples of the operational systems Black Opal Technologies designs and delivers.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Engineered solutions. Proven in the real world."
        description="Our work spans software, AI, connected infrastructure, security and motorsport technology—combining specialist expertise with practical engineering to deliver solutions built for demanding real-world environments."
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
