import { Cable, Check, Code2, Flag, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { FinalCTA, PageHero, SectionHeading, SystemGraphic, TechLink } from '../_components/Primitives';
import { TechnologyOfficeCard } from '../_components/TechnologyOfficeCard';
import { differentiators, technologyBasePath, technologyImages } from '../_data/site';

const serviceLines = [
  { icon: Cable, number: '01', title: 'Network & Fibre', copy: 'Wired, wireless and fibre infrastructure designed, installed, tested and documented.' },
  { icon: ShieldCheck, number: '02', title: 'ELV & Security', copy: 'CCTV, access control, audio and monitoring systems delivered for clear operational use.' },
  { icon: Code2, number: '03', title: 'Software & Automation', copy: 'Applications, platforms and automations built around real workflows and information needs.' },
  { icon: Flag, number: '04', title: 'Motorsport Technology', copy: 'Circuit connectivity, race operations, video, timing and driver-facing technology.' },
];

export const metadata: Metadata = {
  title: 'About',
  description: 'How Black Opal Technologies plans, delivers and supports infrastructure, security systems and software.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Black Opal Technologies"
        title="Technology should make the operation easier—not create another problem to manage"
        description="We deliver specialist services across network infrastructure, security systems, software, automation and motorsport technology."
        image={technologyImages.controlRoom}
        breadcrumbs={[{ label: 'About' }]}
      >
        <TechLink href={`${technologyBasePath}/contact`}>Discuss a Project</TechLink>
      </PageHero>

      <section className="tech-section">
        <div className="tech-shell tech-editorial-layout">
          <SectionHeading label="Why we exist" title="Technical work should be clear, usable and properly handed over" />
          <div className="tech-editorial-copy tech-reveal">
            <p>
              Clients should know what is being delivered, why it is needed, how it will be tested and who will support it.
              That applies equally to a fibre installation, a security system, a software product or a motorsport platform.
            </p>
            <p>
              Black Opal Technologies provides focused expertise for each of those requirements. When a project genuinely
              crosses service boundaries, we can also coordinate the interfaces without making integration a condition of engagement.
            </p>
            <TechnologyOfficeCard className="tech-about-office" />
          </div>
        </div>
      </section>

      <section className="tech-section tech-about-pillars-section">
        <div className="tech-shell">
          <SectionHeading
            label="Our service lines"
            title="Four specialist capabilities, available independently"
            description="Clients can engage the service that matches the requirement and add coordination only where it creates value."
          />
          <div className="tech-about-pillar-grid">
            {serviceLines.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="tech-about-pillar tech-reveal" key={pillar.title}>
                  <div><Icon size={26} strokeWidth={1.25} aria-hidden="true" /><span>{pillar.number}</span></div>
                  <h3 className="tech-display">{pillar.title}</h3><p>{pillar.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-section tech-split-section">
        <div className="tech-shell tech-split-layout tech-split-layout-reverse">
          <div className="tech-split-copy tech-reveal">
            <span className="tech-kicker">How we make decisions</span>
            <h2 className="tech-display">Understand the work first. Choose the technology second.</h2>
            <ul className="tech-check-list tech-check-list-large">
              {['Speak to the people who will use and support the system', 'Agree responsibilities before work begins', 'Select products for fit, not familiarity', 'Design for faults, maintenance and future change', 'Test the system against real operating scenarios', 'Leave useful records and a clear support route'].map((item) => <li key={item}><Check size={15} aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
          <SystemGraphic
            label="From first question to long-term support"
            items={['Understand', 'Plan', 'Deliver', 'Test', 'Document', 'Support']}
            className="tech-split-image"
          />
        </div>
      </section>

      <section className="tech-section tech-group-section">
        <div className="tech-shell tech-group-layout">
          <SectionHeading label="Black Opal" title="The technology business within the Black Opal group" />
          <div className="tech-group-copy tech-reveal">
            <p>
              Black Opal Technologies provides network and fibre infrastructure, ELV and security, operational software,
              automation and motorsport technology as distinct services, with systems integration available when required.
            </p>
            <TechLink href={`${technologyBasePath}/contact`} variant="text">Contact Black Opal Technologies</TechLink>
          </div>
        </div>
        <div className="tech-shell tech-values-grid">
          {differentiators.slice(0, 4).map((item, index) => (
            <article className="tech-value-card tech-reveal" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
