import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { navigate } from "../routing";
import { ScrollReveal } from "./ScrollReveal";

function ProjectCard({ project }) {
  const projectPath = `/projects/${project.slug}`;

  return (
    <article className="project-grid-card group flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08]">
        <img
          src={project.image}
          alt={`${project.name} project screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top opacity-75 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
        <span className="project-category-badge absolute left-4 top-4">{project.category}</span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-500">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((technology) => (
            <span key={technology} className="project-tech-pill">
              {technology}
            </span>
          ))}
        </div>

        <a
          href={projectPath}
          onClick={(event) => {
            event.preventDefault();
            navigate(projectPath);
          }}
          className="group/link mt-auto flex items-center justify-between border-t border-white/[0.07] pt-6 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
        >
          View Case Study
          <ArrowUpRight
            size={16}
            className="text-zinc-600 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-cyan-300"
          />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="projects-section relative overflow-hidden bg-transparent py-28 sm:py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-14 max-w-3xl sm:mb-16">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              Engineering Portfolio
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              Systems built around
              <span className="block text-zinc-500">real engineering decisions.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Explore the architecture, technical challenges, and lessons behind each project.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 75} className="h-full">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
