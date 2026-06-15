import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { createElement } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { Button } from "./ui/button";
import { TypingRotatingText } from "./TypingRotatingText";

const rotatingRoles = [
  "Backend Engineer",
  "AI Application Builder",
  "System Design Enthusiast",
  "Distributed Systems Learner",
  "Networking Explorer",
  "Operating Systems Enthusiast",
];

const focusAreas = [
  "Spring Boot",
  "Docker",
  "Generative AI",
  "RAG",
  "System Design",
  "Distributed Systems",
  "Networking",
  "Operating Systems",
];

const stats = [
  { value: "350+", label: "LeetCode Problems" },
  { value: "1000+", label: "SkillRack Problems" },
  { value: "5+", label: "Projects Built" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Bavithran100",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bavithran-n-04b74b333/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:bavithrannatarajan@gmail.com",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1kkRXo_uQL6WwQ1gWp6iT4BOZp-jVGGIY/view?usp=sharing",
    icon: FileText,
  },
];

export function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-0 pb-20 pt-28 lg:pb-24 lg:pt-32"
    >
      <AnimatedBackground subtle />
      <div className="absolute inset-0 z-[1] bg-black/55" aria-hidden="true" />
      <div
        className="absolute left-[8%] top-[12%] z-[2] h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.08] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[8%] right-[4%] z-[2] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.09] blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="hero-reveal" style={{ "--hero-delay": "80ms" }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-[0.18em] text-zinc-300 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Software Engineer
              </div>
              <h1 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.05]">
                Bavithran Natarajan
              </h1>
              <h2 className="mt-4 flex min-h-10 items-center justify-center text-xl font-medium tracking-[-0.02em] text-zinc-300 sm:text-2xl lg:justify-start">
                <span className="mr-2 text-zinc-600">I&apos;m a</span>
                <TypingRotatingText
                  words={rotatingRoles}
                  className="text-cyan-300"
                  typingSpeed={70}
                  deletingSpeed={35}
                  pauseTime={1800}
                />
              </h2>
            </div>

            <div
              className="hero-reveal mt-6 max-w-2xl space-y-3 text-base leading-7 text-zinc-400 sm:text-lg"
              style={{ "--hero-delay": "180ms" }}
            >
              <p>
                I build backend systems using Java, Spring Boot, MySQL, and Docker while
                exploring AI applications, distributed systems, networking, and operating
                system internals.
              </p>
              <p>
                Passionate about understanding how modern software works, from LLM-powered
                applications to scalable production architectures.
              </p>
            </div>

            <div
              className="hero-reveal mt-7 max-w-2xl"
              style={{ "--hero-delay": "280ms" }}
            >
              <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                Currently Focused On
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {focusAreas.map((area, index) => (
                  <span
                    key={area}
                    className="hero-tag-reveal rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.07] hover:text-cyan-100"
                    style={{ "--tag-delay": `${380 + index * 55}ms` }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="hero-reveal mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
              style={{ "--hero-delay": "760ms" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group h-11 rounded-lg bg-white px-5 text-sm font-semibold text-black shadow-[0_10px_35px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-[0_14px_40px_rgba(103,232,249,0.16)]"
              >
                View Projects
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="h-11 rounded-lg border border-white/15 bg-white/[0.055] px-5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1kkRXo_uQL6WwQ1gWp6iT4BOZp-jVGGIY/view?usp=sharing",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="h-11 rounded-lg border border-white/10 bg-transparent px-5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] hover:text-cyan-100"
              >
                <FileText />
                View Resume
              </Button>
            </div>

            <div
              className="hero-reveal mt-7 flex justify-center gap-2 lg:justify-start"
              style={{ "--hero-delay": "860ms" }}
            >
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.075] hover:text-cyan-200"
                  aria-label={label}
                >
                  {createElement(icon, {
                    size: 18,
                    className: "transition-transform duration-300 group-hover:scale-105",
                  })}
                </a>
              ))}
            </div>

            <div
              className="hero-reveal mt-6 grid max-w-xl grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-4 text-left"
              style={{ "--hero-delay": "940ms" }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="px-3 first:pl-0 sm:px-5 sm:first:pl-0">
                  <p className="text-sm font-semibold text-white sm:text-base">{value}</p>
                  <p className="mt-0.5 text-[10px] leading-4 text-zinc-500 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-reveal mx-auto w-full max-w-sm"
            style={{ "--hero-delay": "320ms" }}
          >
            <div className="hero-card-float">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-zinc-950">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-cyan-950/60 via-zinc-950 to-violet-950/60">
                    <span className="absolute inset-0 flex items-center justify-center text-8xl font-semibold text-white/[0.04]">
                      BN
                    </span>
                    <img
                      src="/Portfolio-photo.png"
                      alt="Bavithran Natarajan"
                      className="relative h-full w-full object-cover object-top"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                  </div>
                  <div className="grid grid-cols-3 border-t border-white/[0.08] bg-white/[0.025] px-2 py-4 text-zinc-300">
                    <div className="flex flex-col items-center gap-1.5 border-r border-white/10 px-1 text-center">
                      <MapPin size={17} className="text-cyan-300" />
                      <span className="text-[10px] leading-4 sm:text-xs">Coimbatore, India</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 border-r border-white/10 px-1 text-center">
                      <GraduationCap size={18} className="text-cyan-300" />
                      <span className="text-[10px] leading-4 sm:text-xs">B.E ECE</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 px-1 text-center">
                      <CalendarDays size={17} className="text-cyan-300" />
                      <span className="text-[10px] leading-4 sm:text-xs">Systems Thinker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 p-2 text-zinc-600 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:text-zinc-300"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  );
}
