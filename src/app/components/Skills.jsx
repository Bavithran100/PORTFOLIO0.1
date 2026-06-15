import { createElement } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  CircleDot,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  Gauge,
  Layers3,
  Network,
  Rocket,
  Server,
  Trophy,
  Users,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const engineeringProfile = [
  {
    title: "Backend Engineering",
    description: "Building reliable application services, APIs, and data workflows.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "MongoDB", "JWT"],
    icon: Server,
  },
  {
    title: "AI Engineering",
    description: "Connecting language models to useful, grounded application experiences.",
    technologies: ["Generative AI", "RAG", "Groq API", "LLaMA", "Prompt Engineering"],
    icon: BrainCircuit,
  },
  {
    title: "Systems & Infrastructure",
    description: "Understanding deployment, communication, and scalable system behavior.",
    technologies: ["Docker", "AWS", "Nginx", "CI/CD", "System Design", "Distributed Systems"],
    icon: Network,
  },
  {
    title: "Computer Science Foundations",
    description: "Strengthening the fundamentals beneath production software.",
    technologies: ["Data Structures", "Algorithms", "Operating Systems", "Networks", "DBMS", "OOP"],
    icon: Cpu,
  },
];

const experiences = [
  {
    type: "Research Internship",
    organization: "CSIR Chennai",
    duration: "Research Experience",
    description:
      "Worked on an IoT-enabled prosthetic hand using IMU sensors, 3D-printed components, and embedded systems. Built gesture-controlled hand movements capable of performing multiple actions using sensor data.",
    technologies: ["IMU Sensors", "IoT", "Arduino", "3D Printing", "Embedded Systems"],
    learnings: [
      "Sensor Integration",
      "Hardware Software Communication",
      "Research Workflow",
      "Rapid Prototyping",
      "Team Collaboration",
    ],
    icon: FlaskConical,
  },
  {
    type: "Hackathon",
    organization: "Creatathon",
    duration: "Time-Bound Team Build",
    description:
      "Collaborated with a team to design, build, and present a working solution within limited time constraints.",
    technologies: ["Rapid Development", "Product Design", "Technical Presentation"],
    learnings: [
      "Team Collaboration",
      "Problem Solving",
      "Product Thinking",
      "Communication",
      "Rapid Development",
    ],
    icon: Users,
  },
];

const problemSolvingMetrics = [
  { value: "350+", label: "LeetCode Problems", context: "Algorithms and patterns", icon: Code2 },
  { value: "1000+", label: "SkillRack Problems", context: "Consistent programming practice", icon: Gauge },
  { value: "351", label: "Bronze Medals", context: "SkillRack achievements", icon: Trophy },
  { value: "1606", label: "Contest Rating", context: "LeetCode contests", icon: Layers3 },
];

const roadmap = [
  {
    status: "Completed",
    description: "Core tools used to build and deliver backend applications.",
    topics: ["Spring Boot", "Docker", "REST APIs", "MySQL"],
    icon: Check,
    className: "roadmap-completed",
  },
  {
    status: "Currently Learning",
    description: "The foundations and tradeoffs behind reliable software systems.",
    topics: ["System Design", "Distributed Systems", "Operating Systems", "Networking"],
    icon: CircleDot,
    className: "roadmap-current",
  },
  {
    status: "Next",
    description: "Infrastructure and platform capabilities for production scale.",
    topics: ["Redis", "Kafka", "Kubernetes", "AWS"],
    icon: Rocket,
    className: "roadmap-next",
  },
];

function ExperienceCard({ experience }) {
  return (
    <article className="engineering-experience-card group h-full">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="engineering-profile-icon">{createElement(experience.icon, { size: 18 })}</div>
        <span className="engineering-type-badge">{experience.type}</span>
      </div>

      <h4 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-white">
        {experience.organization}
      </h4>
      <p className="mt-1 text-xs font-medium tracking-wide text-zinc-600">{experience.duration}</p>
      <p className="mt-5 text-sm leading-7 text-zinc-400">{experience.description}</p>

      <div className="mt-7">
        <p className="engineering-label">Technologies Used</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span key={technology} className="engineering-pill">
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 border-t border-white/[0.07] pt-6">
        <p className="engineering-label">Key Learnings</p>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {experience.learnings.map((learning) => (
            <div key={learning} className="flex items-start gap-2 text-xs leading-5 text-zinc-500">
              <Check size={12} className="mt-1 shrink-0 text-cyan-300" />
              {learning}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="engineering-section relative overflow-hidden bg-[#030303] py-28 sm:py-32"
    >
      <div
        className="absolute -left-40 top-[12%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.055] blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-44 bottom-[12%] h-[38rem] w-[38rem] rounded-full bg-violet-500/[0.055] blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-16 max-w-3xl sm:mb-20">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              Engineering Profile & Journey
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              Learning through systems,
              <span className="block text-zinc-500">research, and real builds.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              A view of the engineering capabilities I am developing, the environments where I
              have applied them, and the direction I am growing next.
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal className="mb-9">
              <p className="engineering-label">01 / Engineering Profile</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Capabilities across the software stack
              </h3>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2">
              {engineeringProfile.map(({ title, description, technologies, icon }, index) => (
                <ScrollReveal key={title} delay={index * 70} className="h-full">
                  <article className="engineering-profile-card group h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="engineering-profile-icon">{createElement(icon, { size: 18 })}</div>
                      <ArrowUpRight
                        size={15}
                        className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                      />
                    </div>
                    <h4 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-white">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {technologies.map((technology) => (
                        <span key={technology} className="engineering-pill">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-24 sm:mt-28">
            <ScrollReveal className="mb-9">
              <p className="engineering-label">02 / Engineering Journey</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Experience beyond the code editor
              </h3>
            </ScrollReveal>

            <div className="grid gap-5 lg:grid-cols-2">
              {experiences.map((experience, index) => (
                <ScrollReveal key={`${experience.type}-${experience.organization}`} delay={index * 90} className="h-full">
                  <ExperienceCard experience={experience} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-24 sm:mt-28">
            <ScrollReveal className="mb-9">
              <p className="engineering-label">03 / Problem Solving Journey</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Consistency measured over time
              </h3>
            </ScrollReveal>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {problemSolvingMetrics.map(({ value, label, context, icon }, index) => (
                <ScrollReveal key={label} delay={index * 65} className="h-full">
                  <article className="engineering-metric-card h-full">
                    <div className="engineering-profile-icon">{createElement(icon, { size: 17 })}</div>
                    <p className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                    <p className="mt-2 text-sm font-semibold text-zinc-300">{label}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-600">{context}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-24 sm:mt-28">
            <ScrollReveal className="mb-9">
              <p className="engineering-label">04 / Current Learning Roadmap</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Building depth in deliberate stages
              </h3>
            </ScrollReveal>

            <div className="grid gap-4 lg:grid-cols-3">
              {roadmap.map(({ status, description, topics, icon, className }, index) => (
                <ScrollReveal key={status} delay={index * 80} className="h-full">
                  <article className={`engineering-roadmap-card ${className} h-full`}>
                    <div className="flex items-center gap-3">
                      <div className="engineering-roadmap-icon">{createElement(icon, { size: 16 })}</div>
                      <h4 className="text-sm font-semibold text-white">{status}</h4>
                    </div>
                    <p className="mt-5 text-sm leading-6 text-zinc-500">{description}</p>
                    <div className="mt-6 grid gap-2">
                      {topics.map((topic) => (
                        <div key={topic} className="engineering-roadmap-topic">
                          <Database size={12} />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
