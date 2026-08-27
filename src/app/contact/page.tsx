import { Check } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactForm } from '../_components/ContactForm';
import { TechnologyOfficeCard } from '../_components/TechnologyOfficeCard';
import { PageHero, SectionHeading } from '../_components/Primitives';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Speak with Black Opal Technologies about network, fibre, security, software, automation, motorsport or systems-integration work.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Tell us what you need delivered"
        description="Choose the closest specialist service or describe the project in your own words. We will review the requirement and come back with a practical next step."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="tech-section tech-contact-section">
        <div className="tech-shell tech-contact-layout">
          <div className="tech-contact-intro">
            <SectionHeading label="Project enquiry" title="Start with the service, requirement or operating problem" />
            <p className="tech-copy tech-reveal">
              You can approach us for one focused service or a project that spans several technologies. If you already
              have drawings, a specification or an existing-system overview, mention them and we can review those next.
            </p>
            <div className="tech-contact-guidance tech-reveal">
              <strong>What to include</strong>
              <ul>
                <li><Check size={15} aria-hidden="true" /> The service or type of project you need</li>
                <li><Check size={15} aria-hidden="true" /> The site, system, team or workflow involved</li>
                <li><Check size={15} aria-hidden="true" /> Your preferred outcome, location and timing</li>
              </ul>
            </div>
            <TechnologyOfficeCard className="tech-contact-office tech-reveal" />
          </div>
          <div className="tech-contact-form-panel tech-reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
