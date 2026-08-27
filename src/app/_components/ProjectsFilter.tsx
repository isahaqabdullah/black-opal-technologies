'use client';

import { useMemo, useState } from 'react';
import { projectFilters, publicProjects, technologyBasePath } from '../_data/site';
import { TechLink } from './Primitives';

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>('All');
  const visibleFilters = useMemo(
    () => projectFilters.filter((filter) => filter === 'All' || publicProjects.some((project) => project.categories.includes(filter))),
    [],
  );
  const visibleProjects = useMemo(
    () => publicProjects.filter((project) => activeFilter === 'All' || project.categories.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <div>
      <div className="tech-filter-bar" aria-label="Filter projects">
        {visibleFilters.map((filter) => (
          <button
            type="button"
            key={filter}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="tech-project-grid" aria-live="polite" key={activeFilter}>
        {visibleProjects.map((project, index) => (
          <article className="tech-project-card" key={project.slug}>
            <div className="tech-project-card-visual" aria-hidden="true">
              <span>Representative system</span>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <div><i /><i /><i /></div>
            </div>
            <div className="tech-project-card-copy">
              <div className="tech-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h2 className="tech-display">{project.title}</h2>
              <p className="tech-copy">{project.summary}</p>
              <TechLink href={`${technologyBasePath}/contact`} variant="text">
                Discuss a Similar System
              </TechLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
