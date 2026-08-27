import type { Metadata } from 'next';
import { TechnologyHomePage } from './_components/TechnologyHomePage';

export const metadata: Metadata = {
  title: 'Network, Security, Software & Motorsport Technology Services',
  description:
    'Independent specialist services across network and fibre, ELV and security, custom software, automation and motorsport technology.',
};

export default function TechnologyPage() {
  return <TechnologyHomePage />;
}
