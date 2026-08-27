'use client';

import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { solutionsNavigation, technologyBasePath, technologyNavigation } from '../_data/site';
import { TechnologyLogo } from './TechnologyLogo';

function isCurrentPath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function TechnologyHeader() {
  const pathname = usePathname() ?? '/';
  const headerRef = useRef<HTMLElement>(null);
  const desktopSolutionsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    setSolutionsOpen(false);
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])')?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeMenus = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!headerRef.current?.contains(target) && !mobileMenuRef.current?.contains(target)) {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeMenus);

    return () => {
      document.removeEventListener('pointerdown', closeMenus);
    };
  }, []);

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (mobileOpen) {
          setMobileOpen(false);
          window.requestAnimationFrame(() => mobileToggleRef.current?.focus());
          return;
        }

        if (solutionsOpen) {
          setSolutionsOpen(false);
          window.requestAnimationFrame(() => desktopSolutionsButtonRef.current?.focus());
        }
        return;
      }

      if (event.key !== 'Tab' || !mobileOpen || !mobileMenuRef.current) {
        return;
      }

      const focusable = [
        mobileToggleRef.current,
        ...Array.from(mobileMenuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')),
      ].filter((element): element is HTMLElement => element !== null && element.offsetParent !== null);

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [mobileOpen, solutionsOpen]);

  return (
    <>
      <header className="tech-header" ref={headerRef}>
        <a className="tech-skip-link" href="#tech-content">
          Skip to content
        </a>
        <div className="tech-shell tech-header-inner">
          <TechnologyLogo />

        <nav className="tech-desktop-nav" aria-label="Primary navigation">
          {technologyNavigation.map((item) => {
            const current = isCurrentPath(pathname, item.href);

            if (item.label === 'Solutions') {
              return (
                <div
                  className="tech-nav-solutions"
                  key={item.href}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <span className={`tech-nav-composite${current ? ' is-current' : ''}`}>
                    <Link href={item.href} aria-current={current ? 'page' : undefined}>
                      {item.label}
                    </Link>
                    <button
                      ref={desktopSolutionsButtonRef}
                      type="button"
                      aria-label="Toggle Solutions menu"
                      aria-haspopup="true"
                      aria-expanded={solutionsOpen}
                      aria-controls="tech-solutions-menu"
                      onClick={() => setSolutionsOpen((open) => !open)}
                    >
                      <ChevronDown size={14} aria-hidden="true" />
                    </button>
                  </span>
                  {solutionsOpen ? (
                    <div className="tech-mega" id="tech-solutions-menu">
                      <div className="tech-mega-intro">
                        <span className="tech-kicker">Independent specialist services</span>
                        <p className="tech-display">Choose the capability that matches your project.</p>
                      </div>
                      <div className="tech-mega-links">
                        {solutionsNavigation.map((solution) => (
                          <Link href={solution.href} key={solution.href}>
                            <span>{solution.label}</span>
                            <small>{solution.description}</small>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                href={item.href}
                className={`tech-nav-link${current ? ' is-current' : ''}`}
                aria-current={current ? 'page' : undefined}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

          <Link className="tech-header-cta" href={`${technologyBasePath}/contact`}>
            Discuss a Project
          </Link>

          <button
            ref={mobileToggleRef}
            className="tech-menu-toggle"
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-haspopup="true"
            aria-expanded={mobileOpen}
            aria-controls="tech-mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div
          className="tech-mobile-menu"
          id="tech-mobile-menu"
          ref={mobileMenuRef}
          role="region"
          aria-label="Mobile navigation menu"
        >
          <nav className="tech-shell" aria-label="Mobile navigation">
            {technologyNavigation.map((item) => {
              const current = isCurrentPath(pathname, item.href);

              if (item.label === 'Solutions') {
                return (
                  <div className="tech-mobile-solutions" key={item.href}>
                    <span>
                      <Link href={item.href} aria-current={current ? 'page' : undefined}>
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle Solutions links"
                        aria-haspopup="true"
                        aria-expanded={mobileSolutionsOpen}
                        onClick={() => setMobileSolutionsOpen((open) => !open)}
                      >
                        <ChevronDown size={18} aria-hidden="true" />
                      </button>
                    </span>
                    {mobileSolutionsOpen ? (
                      <div className="tech-mobile-subnav">
                        {solutionsNavigation.map((solution) => (
                          <Link href={solution.href} key={solution.href}>
                            <strong>{solution.label}</strong>
                            <small>{solution.description}</small>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link href={item.href} aria-current={current ? 'page' : undefined} key={item.href}>
                  {item.label}
                </Link>
              );
            })}
            <Link className="tech-mobile-cta" href={`${technologyBasePath}/contact`}>
              Discuss a Project
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
