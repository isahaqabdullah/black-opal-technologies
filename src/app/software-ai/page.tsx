import { Bot, Check, CloudCog, Code2, DatabaseZap, Workflow } from 'lucide-react';
import { FinalCTA, PageHero, SectionHeading, SystemGraphic, TechLink } from '../_components/Primitives';
import { softwareCategories, technologyBasePath, websiteImages } from '../_data/site';
import { createPageMetadata } from '../_data/seo';

export const metadata = createPageMetadata({
  title: 'Software, AI & Automation',
  description: 'Custom software, workflow automation and carefully applied AI for teams with real operational work to improve.',
  path: '/software-ai',
});

const icons = [Code2, Bot, Workflow, DatabaseZap];

export default function SoftwareAiPage() {
  return (
    <>
      <PageHero
        label="Software & AI"
        title="Software that fits the operation—not the other way around"
        description="We build custom applications and automations around your people, data and existing systems, with AI used only where it adds practical value."
        image={websiteImages.aiAutomation}
        breadcrumbs={[{ label: 'Software & AI' }]}
      >
        <TechLink href={`${technologyBasePath}/contact`}>Discuss a Software Project</TechLink>
      </PageHero>

      <section className="tech-section">
        <div className="tech-shell tech-editorial-layout">
          <SectionHeading label="Start with the work" title="Useful software begins with the people who have to use it" />
          <div className="tech-editorial-copy tech-reveal">
            <p>
              Before we discuss features, we learn how the work is done: who is involved, what information they need,
              where delays occur and which exceptions consume the most time. That gives us a clear problem to solve and
              a sensible way to measure whether the software helps.
            </p>
            <p>
              The answer might be a focused internal tool, a customer platform, a SaaS product, an automation or a simple
              integration between systems you already own. We recommend what fits the job, not what creates the longest
              feature list.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-section tech-software-detail-section">
        <div className="tech-shell">
          <SectionHeading label="What we build" title="From focused internal tools to connected customer platforms" />
          <div className="tech-software-detail-grid">
            {softwareCategories.map((category, index) => {
              const Icon = icons[index];
              return (
                <article className="tech-software-detail-card tech-reveal" key={category.title}>
                  <div className="tech-service-overview-topline"><Icon size={25} strokeWidth={1.35} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <h2 className="tech-display">{category.title}</h2>
                  <ul className="tech-check-list">
                    {category.items.map((item) => <li key={item}><Check size={13} aria-hidden="true" /> {item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-section tech-split-section">
        <div className="tech-shell tech-split-layout">
          <SystemGraphic
            label="Practical AI operating model"
            items={['Use case', 'Data boundary', 'Human review', 'Integration', 'Fallback', 'Evaluation']}
            className="tech-split-image"
          />
          <div className="tech-split-copy tech-reveal">
            <span className="tech-kicker">A practical view of AI</span>
            <h2 className="tech-display">Use AI where it improves the work—not because it sounds impressive</h2>
            <p className="tech-copy">
              AI can be valuable for classification, retrieval, summarisation and decision support. It also makes mistakes.
              Before it becomes part of an operational product, we define the task, the data it may use, where a person
              stays in control and what happens when the model is uncertain or unavailable.
            </p>
            <ul className="tech-check-list tech-check-list-large">
              {['Clear task and success criteria', 'Appropriate human oversight', 'Controlled data access', 'Traceable system interfaces', 'Fallback and exception handling', 'Ongoing evaluation and improvement'].map((item) => <li key={item}><Check size={15} aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="tech-section tech-product-flow-section">
        <div className="tech-shell">
          <div className="tech-software-heading"><SectionHeading label="How the system fits together" title="A clear path from source data to a useful action" /><CloudCog size={64} strokeWidth={0.8} aria-hidden="true" /></div>
          <div className="tech-flow" aria-label="Software architecture flow">
            {['Data / Device', 'API / Integration', 'Application Logic', 'AI / Automation', 'Interface', 'User Decision'].map((step, index) => (
              <div className="tech-flow-step tech-reveal" key={step}><span>0{index + 1}</span><strong>{step}</strong></div>
            ))}
          </div>
          <div className="tech-actions"><TechLink href={`${technologyBasePath}/contact`} variant="secondary">Discuss an Automation System</TechLink><TechLink href={`${technologyBasePath}/contact`} variant="text">Start a Software Brief</TechLink></div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
