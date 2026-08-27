'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { TechnologyFooter } from './TechnologyFooter';
import { TechnologyHeader } from './TechnologyHeader';

export function TechnologyShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('tech-reveal-ready');
    window.scrollTo(0, 0);

    const elements = Array.from(document.querySelectorAll<HTMLElement>('#tech-content .tech-reveal'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || typeof window.IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('tech-reveal-visible'));
      return () => document.documentElement.classList.remove('tech-reveal-ready');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tech-reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        element.classList.add('tech-reveal-visible');
      } else {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('tech-reveal-ready');
    };
  }, [pathname]);

  return (
    <div className="tech-site">
      <TechnologyHeader />
      <main id="tech-content">{children}</main>
      <TechnologyFooter />
    </div>
  );
}
