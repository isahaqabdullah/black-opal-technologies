import { Cable, Check, CircuitBoard, Flag, Network, ShieldCheck } from 'lucide-react';
import {
  capabilities,
  deliveryProcess,
  integrationCategories,
  integrationFlow,
  publicProjects,
  technologyBasePath,
  typicalEngagements,
  websiteImages,
} from '../_data/site';
import { FinalCTA, ImagePanel, SectionHeading, TechLink } from './Primitives';

const capabilityIcons = {
  network: Cable,
  elv: ShieldCheck,
  software: CircuitBoard,
  motorsport: Flag,
};

const capabilityImages = {
  network: websiteImages.network,
  elv: websiteImages.elv,
  software: websiteImages.software,
  motorsport: websiteImages.motorsport,
};

export function TechnologyHomePage() {
  return (
    <>
      <section className="tech-home-hero">
        <ImagePanel image={websiteImages.hero} priority sizes="100vw" className="tech-home-hero-image" />
        <div className="tech-home-hero-overlay" aria-hidden="true" />
        <div className="tech-shell tech-home-hero-inner">
          <div className="tech-home-hero-copy tech-reveal">
            <span className="tech-kicker">Black Opal Technologies</span>
            <h1 className="tech-display">Technology engineered for real-world performance</h1>
            <div className="tech-hero-lede">
              <p>
                We design and develop high-performance websites, custom web applications, mobile apps, AI-powered solutions
                and intelligent automation.
              </p>
              <p>
                Our technology infrastructure expertise spans network and fibre systems, ELV and security solutions, and
                specialist motorsport technologies—delivered as integrated, reliable and performance-driven solutions.
              </p>
            </div>
            <div className="tech-actions">
              <TechLink href={`${technologyBasePath}/solutions`}>Explore Our Solutions</TechLink>
              <TechLink href={`${technologyBasePath}/contact`} variant="secondary">
                Discuss a Project
              </TechLink>
            </div>
          </div>
          <div className="tech-hero-system-note tech-reveal">
            <span>Specialist services, independently delivered</span>
            <strong>Choose one service or coordinate several when the project requires it</strong>
          </div>
        </div>
      </section>

      <section className="tech-principles" aria-label="Delivery scope">
        <div className="tech-shell tech-principles-grid">
          <span>Survey &amp; design</span>
          <span>Delivery &amp; commissioning</span>
          <span>Handover &amp; support</span>
        </div>
      </section>

      <section className="tech-section tech-capabilities-section">
        <div className="tech-shell">
          <SectionHeading
            label="Specialist services"
            title="Choose the capability your project needs"
            description="Each service can be engaged independently, with its own scope, delivery plan and support route."
          />
          <div className="tech-capability-grid">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[capability.id];
              return (
                <article className="tech-capability-card tech-reveal" key={capability.id}>
                  <ImagePanel
                    image={capabilityImages[capability.id]}
                    className="tech-capability-image"
                    sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 25vw"
                  >
                    <span className="tech-card-number">0{index + 1}</span>
                  </ImagePanel>
                  <div className="tech-capability-copy">
                    <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                    <span className="tech-kicker">{capability.eyebrow}</span>
                    <h3 className="tech-display">{capability.title}</h3>
                    <p className="tech-copy">{capability.description}</p>
                    <ul>
                      {capability.items.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <TechLink href={capability.href} variant="text">
                      {capability.ctaLabel}
                    </TechLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-section tech-engagements-section">
        <div className="tech-shell">
          <div className="tech-engagements-layout">
            <SectionHeading
              label="Typical engagements"
              title="Projects we are equipped to deliver"
              description="Bring us a defined requirement or an operational problem. We will help establish the right scope before delivery begins."
            />
            <div className="tech-engagements-grid">
              {typicalEngagements.map((engagement, index) => (
                <article className="tech-engagement-item tech-reveal" key={engagement.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{engagement.title}</h3>
                    <p>{engagement.description}</p>
                    <ul>
                      {engagement.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section tech-integration-section" id="systems-integration">
        <div className="tech-shell">
          <div className="tech-integration-intro">
            <SectionHeading
              label="Optional systems integration"
              title="When separate systems need to work together"
              description="Some projects need one specialist service. When a project spans networks, devices, software or third-party platforms, we can also define the interfaces, responsibilities and testing needed to connect them reliably."
            />
            <Network size={66} strokeWidth={0.8} aria-hidden="true" />
          </div>
          <div className="tech-flow" aria-label="Systems integration flow">
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

      <section className="tech-section tech-featured-section">
        <div className="tech-shell">
          <SectionHeading
            label="Representative work"
            title="Examples of the systems we deliver"
            description="These examples show the scope of work we take on without disclosing private client information."
          />
          <div className="tech-project-grid tech-home-project-grid">
            {publicProjects.map((project, index) => (
              <article className="tech-project-card tech-reveal" key={project.slug}>
                <div className="tech-project-card-visual" aria-hidden="true">
                  <span>Representative system</span>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <div><i /><i /><i /></div>
                </div>
                <div className="tech-project-card-copy">
                  <div className="tech-project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <h3 className="tech-display">{project.title}</h3>
                  <p className="tech-copy">{project.summary}</p>
                  <TechLink href={`${technologyBasePath}/contact`} variant="text">Discuss a Similar Project</TechLink>
                </div>
              </article>
            ))}
          </div>
          <div className="tech-actions tech-home-project-actions">
            <TechLink href={`${technologyBasePath}/projects`} variant="secondary">Explore Representative Work</TechLink>
          </div>
        </div>
      </section>

      <section className="tech-section tech-process-section">
        <div className="tech-shell">
          <SectionHeading
            label="How we deliver"
            title="A clear route from requirement to handover"
            description="The same disciplined delivery structure applies whether you engage us for one service or a coordinated project."
          />
          <ol className="tech-process-grid">
            {deliveryProcess.map((step) => (
              <li className="tech-process-step tech-reveal" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
