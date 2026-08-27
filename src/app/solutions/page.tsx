import { Cable, Check, CircuitBoard, Flag, Network, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { FinalCTA, PageHero, SectionHeading, SystemGraphic, TechLink } from '../_components/Primitives';
import {
  capabilities,
  deliveryProcess,
  integrationCategories,
  integrationFlow,
  technologyBasePath,
  websiteImages,
} from '../_data/site';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Independent specialist services across network, fibre, ELV, security, software, automation and motorsport technology.',
};

const icons = { network: Cable, elv: ShieldCheck, software: CircuitBoard, motorsport: Flag };

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Our solutions"
        title="Specialist technology services for distinct project needs"
        description="Engage us for network and fibre, ELV and security, software and automation, or motorsport technology. Each service is available independently."
        image={websiteImages.systemsIntegration}
        breadcrumbs={[{ label: 'Solutions' }]}
      >
        <TechLink href={`${technologyBasePath}/contact`}>Discuss a Project</TechLink>
      </PageHero>

      <section className="tech-section">
        <div className="tech-shell tech-editorial-layout">
          <SectionHeading
            label="Choose what you need"
            title="A focused service when the requirement is clear"
          />
          <div className="tech-editorial-copy tech-reveal">
            <p>
              Many projects need one well-defined capability: a fibre upgrade, a CCTV system, a custom application or a
              motorsport operations platform. We scope and deliver that requirement as a complete project in its own right.
            </p>
            <p>
              When the requirement spans several technologies, those services can also be coordinated under a shared plan.
              The engagement model follows the project; clients are not required to purchase an unnecessary bundle.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-section tech-service-overview-section">
        <div className="tech-shell">
          <SectionHeading
            label="What we do"
            title="Four independent service lines"
            description="Each service has a clear scope and can be commissioned separately."
          />
          <div className="tech-service-overview-grid">
            {capabilities.map((capability, index) => {
              const Icon = icons[capability.id];
              return (
                <article className="tech-service-overview-card tech-reveal" key={capability.id}>
                  <div className="tech-service-overview-topline">
                    <Icon size={24} strokeWidth={1.35} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <span className="tech-kicker">{capability.eyebrow}</span>
                  <h2 className="tech-display">{capability.title}</h2>
                  <p className="tech-copy">{capability.description}</p>
                  <ul className="tech-check-list">
                    {capability.items.map((item) => (
                      <li key={item}>
                        <Check size={13} aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                  <TechLink href={capability.href} variant="text">
                    {capability.ctaLabel}
                  </TechLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-section tech-integration-section" id="systems-integration">
        <div className="tech-shell">
          <div className="tech-integration-intro">
            <SectionHeading
              label="Optional systems integration"
              title="Coordination when a project crosses service boundaries"
              description="If devices, networks, applications or third-party platforms need to exchange information, we can document and deliver those interfaces as part of the agreed scope."
            />
            <Network size={66} strokeWidth={0.8} aria-hidden="true" />
          </div>
          <div className="tech-flow" aria-label="Systems integration architecture">
            {integrationFlow.map((step, index) => (
              <div className="tech-flow-step tech-reveal" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <div className="tech-integration-categories tech-reveal">
            {integrationCategories.map((category) => (
              <span key={category}>
                <Check size={13} aria-hidden="true" /> {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-section tech-split-section">
        <div className="tech-shell tech-split-layout">
          <SystemGraphic
            label="End-to-end delivery model"
            items={deliveryProcess.map((step) => step.title)}
            className="tech-split-image"
          />
          <div className="tech-split-copy tech-reveal">
            <span className="tech-kicker">Delivery approach</span>
            <h2 className="tech-display">Every service follows a defined route to handover</h2>
            <ol className="tech-compact-process">
              {deliveryProcess.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
