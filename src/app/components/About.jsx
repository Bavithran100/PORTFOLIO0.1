import { createElement, useState } from "react";
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Network,
  Orbit,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const interests = [
  {
    title: "Backend Engineering",
    description: "Reliable services, expressive APIs, and maintainable application architecture.",
    icon: Server,
  },
  {
    title: "Distributed Systems",
    description: "How services coordinate, recover, and remain dependable as systems grow.",
    icon: GitBranch,
  },
  {
    title: "Operating Systems",
    description: "Processes, memory, concurrency, and the foundations beneath applications.",
    icon: Cpu,
  },
  {
    title: "Computer Networks",
    description: "Protocols, request paths, latency, and communication across system boundaries.",
    icon: Network,
  },
  {
    title: "Generative AI",
    description: "Grounded AI applications, RAG pipelines, and useful LLM-powered workflows.",
    icon: BrainCircuit,
  },
  {
    title: "System Design",
    description: "Practical tradeoffs around scale, reliability, data, and service boundaries.",
    icon: Workflow,
  },
  {
    title: "Cloud Infrastructure",
    description: "Containerized delivery, deployment workflows, and production environments.",
    icon: Cloud,
  },
];

const journey = [
  {
    phase: "Foundation",
    title: "Java & problem solving",
    description: "Built programming fluency through Java, OOP, data structures, and algorithms.",
  },
  {
    phase: "Application",
    title: "Backend development",
    description: "Moved into Spring Boot, REST APIs, authentication, and relational data modeling.",
  },
  {
    phase: "Delivery",
    title: "Production thinking",
    description: "Started containerizing applications with Docker and exploring deployment workflows.",
  },
  {
    phase: "Architecture",
    title: "System design",
    description: "Studying scalability, caching, service boundaries, networking, and reliability.",
  },
  {
    phase: "Intelligence",
    title: "AI engineering",
    description: "Exploring generative AI, RAG, and how intelligent features fit into real systems.",
  },
];

const impactAreas = [
  {
    title: "Backend architecture",
    description:
      "Designed modular Spring Boot applications with clear service boundaries and maintainable domain logic.",
    tags: ["Java", "Spring Boot", "Clean Architecture"],
    icon: Blocks,
  },
  {
    title: "API & data design",
    description:
      "Built REST APIs, authentication flows, and database models around practical product requirements.",
    tags: ["REST APIs", "MySQL", "JWT / OAuth2"],
    icon: Database,
  },
  {
    title: "Reliable delivery",
    description:
      "Containerized services and improved repeatability across development and deployment environments.",
    tags: ["Docker", "Nginx", "CI/CD"],
    icon: Container,
  },
  {
    title: "Scalability mindset",
    description:
      "Applied caching, asynchronous thinking, and system design principles while evaluating tradeoffs.",
    tags: ["Redis", "System Design", "Distributed Systems"],
    icon: Orbit,
  },
];

const skillGroups = [
  {
    title: "Backend & Data",
    skills: ["Java", "Spring Boot", "REST APIs", "MySQL", "MongoDB", "Redis", "OAuth2 / JWT"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Docker", "Nginx", "AWS", "CI/CD", "Git & GitHub", "Linux"],
  },
  {
    title: "AI & Application",
    skills: ["Generative AI", "RAG", "React", "Node.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Computer Science Fundamentals",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "OOP",
    ],
  },
];

const tabs = [
  { id: "impact", label: "Engineering Impact", icon: Sparkles },
  { id: "skills", label: "Skills", icon: Code2 },
];

export function About() {
  const [activeTab, setActiveTab] = useState("impact");

  return (
    <section id="about" className="about-section relative overflow-hidden bg-transparent py-28 sm:py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-16 max-w-3xl sm:mb-20">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              Understanding systems,
              <span className="block text-zinc-500">then building them well.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              My work sits where backend engineering meets computer science fundamentals,
              production architecture, and practical AI.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2">
            <ScrollReveal delay={80} className="h-full">
              <article className="about-card group h-full p-7 sm:p-9">
                <div className="about-card-icon">
                  <Braces size={19} />
                </div>
                <p className="about-eyebrow">01 / Who I Am</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-white">
                  A backend-focused builder with systems curiosity.
                </h3>
                <p className="mt-5 leading-7 text-zinc-400">
                  I build backend applications with Java, Spring Boot, MySQL, and Docker.
                  Beyond making features work, I care about the path a request takes, how data
                  moves, where systems fail, and what keeps them maintainable as they grow.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={160} className="h-full">
              <article className="about-card group h-full p-7 sm:p-9">
                <div className="about-card-icon">
                  <Layers3 size={19} />
                </div>
                <p className="about-eyebrow">02 / Engineering Philosophy</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-white">
                  Learn from first principles. Design for reality.
                </h3>
                <p className="mt-5 leading-7 text-zinc-400">
                  Good engineering is thoughtful tradeoffs, clear boundaries, and simple ideas
                  that survive production. I learn by building, measuring, and tracing concepts
                  from operating system internals to distributed application behavior.
                </p>
              </article>
            </ScrollReveal>
          </div>

          <div className="mt-24 sm:mt-28">
            <ScrollReveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="about-eyebrow">03 / Technical Interests</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  The layers I keep exploring
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-zinc-500">
                From low-level foundations to production services and intelligent applications.
              </p>
            </ScrollReveal>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {interests.map(({ title, description, icon }, index) => (
                <ScrollReveal
                  key={title}
                  delay={index * 65}
                  className={index === interests.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""}
                >
                  <article className="about-interest-card group h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="about-interest-icon">{createElement(icon, { size: 18 })}</div>
                      <ArrowUpRight
                        size={15}
                        className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                      />
                    </div>
                    <h4 className="mt-8 text-base font-semibold text-zinc-100">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-24 sm:mt-28">
            <ScrollReveal className="mb-10">
              <p className="about-eyebrow">04 / Journey Timeline</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Building upward from the fundamentals
              </h3>
            </ScrollReveal>

            <div className="relative grid gap-4 md:grid-cols-5">
              <div
                className="absolute left-[10%] right-[10%] top-4 hidden h-px bg-gradient-to-r from-cyan-400/25 via-violet-400/25 to-indigo-400/25 md:block"
                aria-hidden="true"
              />
              {journey.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80}>
                  <article className="group relative border-l border-white/10 pl-5 md:border-l-0 md:pl-0 md:pt-10">
                    <span className="absolute -left-[4.5px] top-0 h-2 w-2 rounded-full border border-cyan-300/50 bg-[#070707] transition-colors duration-300 group-hover:bg-cyan-300 md:left-1/2 md:top-[12px] md:-translate-x-1/2" />
                    <p className="text-[10px] font-semibold tracking-[0.16em] text-zinc-600 uppercase">
                      {item.phase}
                    </p>
                    <h4 className="mt-2 text-sm font-semibold text-zinc-200">{item.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal className="mt-24 sm:mt-28">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30 backdrop-blur-xl">
              <div className="flex flex-wrap gap-2 border-b border-white/[0.08] p-3">
                {tabs.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveTab(id)}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeTab === id
                        ? "bg-white/[0.09] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-300"
                    }`}
                  >
                    {createElement(icon, { size: 15 })}
                    {label}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-7">
                {activeTab === "impact" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {impactAreas.map(({ title, description, tags, icon }, index) => (
                      <article
                        key={title}
                        className="about-tab-card about-tab-reveal"
                        style={{ "--about-tab-delay": `${index * 70}ms` }}
                      >
                        <div className="about-interest-icon">{createElement(icon, { size: 18 })}</div>
                        <h4 className="mt-5 text-lg font-semibold text-white">{title}</h4>
                        <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <span key={tag} className="about-skill-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {skillGroups.map(({ title, skills }, index) => (
                      <article
                        key={title}
                        className="about-tab-card about-tab-reveal"
                        style={{ "--about-tab-delay": `${index * 70}ms` }}
                      >
                        <h4 className="text-sm font-semibold text-zinc-200">{title}</h4>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span key={skill} className="about-skill-pill">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
