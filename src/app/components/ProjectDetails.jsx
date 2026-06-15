import { createElement } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Lightbulb,
} from "lucide-react";
import { navigate } from "../routing";

function DetailSection({ number, title, children }) {
  return (
    <section className="case-study-section">
      <div className="case-study-section-heading">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-study-section-content">{children}</div>
    </section>
  );
}

function BulletList({ items, icon = Check }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="case-study-list-item">
          {createElement(icon, { size: 15 })}
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function ProjectDetails({ project }) {
  return (
    <main className="case-study-page min-h-screen bg-[#030303] text-white">
      <div
        className="absolute left-1/2 top-20 h-[32rem] w-[42rem] -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-8 sm:pt-12">
        <button
          type="button"
          onClick={() => navigate("/#projects")}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-zinc-400 transition-all hover:border-white/20 hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </button>

        <header className="case-study-enter mt-16 max-w-4xl">
          <span className="project-category-badge">{project.category}</span>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="case-study-link">
              <Github size={16} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="case-study-link case-study-link-primary">
              <ExternalLink size={16} /> Live Demo <ArrowUpRight size={14} />
            </a>
          </div>
        </header>

        <div className="case-study-enter mt-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-2 [animation-delay:100ms]">
          <img
            src={project.image}
            alt={`${project.name} project screenshot`}
            className="max-h-[38rem] w-full rounded-xl object-cover object-top"
          />
        </div>

        <div className="case-study-enter mt-20 [animation-delay:180ms]">
          <DetailSection number="01" title="Project Overview">
            <p>{project.overview}</p>
          </DetailSection>

          <DetailSection number="02" title="Problem Statement">
            <p>{project.problem}</p>
          </DetailSection>

          <DetailSection number="03" title="Architecture">
            <BulletList items={project.architecture} />
          </DetailSection>

          <DetailSection number="04" title="Technology Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span key={technology} className="project-tech-pill">
                  {technology}
                </span>
              ))}
            </div>
          </DetailSection>

          <DetailSection number="05" title="Engineering Challenges">
            <BulletList items={project.challenges} />
          </DetailSection>

          <DetailSection number="06" title="Key Learnings">
            <BulletList items={project.learnings} icon={Lightbulb} />
          </DetailSection>

          <DetailSection number="07" title="Future Improvements">
            <BulletList items={project.improvements} />
          </DetailSection>

          <DetailSection number="08" title="GitHub Repository">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="case-study-link">
              <Github size={16} /> View source code <ArrowUpRight size={14} />
            </a>
          </DetailSection>

          <DetailSection number="09" title="Live Demo">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="case-study-link case-study-link-primary">
              <ExternalLink size={16} /> Open live application <ArrowUpRight size={14} />
            </a>
          </DetailSection>

          {project.systemDesign?.length > 0 && (
            <DetailSection number="10" title="System Design Considerations">
              <BulletList items={project.systemDesign} />
            </DetailSection>
          )}
        </div>
      </div>
    </main>
  );
}
