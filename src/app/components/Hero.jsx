import { ArrowDown, Github, Linkedin, Mail, FileText, MapPin, GraduationCap, CalendarDays } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedBackground } from "./AnimatedBackground";
import { TypingRotatingText } from "./TypingRotatingText";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const rotatingWords = [
  "Full-Stack Engineer",
  "Spring Boot Backend Developer",
  "System Design Enthusiast",
  "DSA Problem Solver",
  "AI & Backend Integration",
  "Building Scalable Systems"
];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden py-24 lg:py-20">
      <AnimatedBackground/>
      <div className="hero-paint-splashes" aria-hidden="true">
        <img
          src="/image.png"
          alt=""
          className="hero-paint hero-paint-left"
        />
        {/* <img
          src="/image01.png"
          alt=""
          className="hero-paint hero-paint-right"
        /> */}
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px] animate-pulse delay-700"></div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-6  items-center">
          <div className="text-center lg:text-left lg:translate-x-6">
            <div className="mb-5">
              <p className="text-gray-400 text-xl md:text-2xl mb-3">
                Hi, I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-violet-400 animate-fade-in">
                Bavithran Natarajan
              </h1>
              <div className="h-1 w-28 mx-auto lg:mx-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-6"></div>
            </div>

          <h2 className="text-2xl md:text-3xl text-white/90 mb-5 min-h-[40px] md:min-h-[48px] flex items-center justify-center lg:justify-start">
            <TypingRotatingText words={rotatingWords} className="text-cyan-400" />
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-9 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
        I build scalable backend systems with Spring Boot and apply AIML
to real-world problems, while actively learning system design
and networking for production-ready applications.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start flex-wrap mb-10">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white px-6 py-5 text-base rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-violet-500 to-pink-600 hover:from-violet-400 hover:to-pink-500 text-white px-6 py-5 text-base rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              onClick={() => window.open("https://drive.google.com/file/d/1kkRXo_uQL6WwQ1gWp6iT4BOZp-jVGGIY/view?usp=sharing", "_blank")}
              className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white px-6 py-5 text-base rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all"
            >
              <FileText size={20} className="mr-2" />
              View Resume
            </Button>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Bavithran100"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bavithran-n-04b74b333/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
             href="mailto:bavithrannatarajan@gmail.com"
              className="w-11 h-11 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1kkRXo_uQL6WwQ1gWp6iT4BOZp-jVGGIY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

          <div className="w-full max-w-sm mx-auto">
            <div className="rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_45px_rgba(34,211,238,0.18)]">
              <div className="overflow-hidden rounded-[calc(1.5rem-1px)] bg-zinc-950">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-cyan-950 via-zinc-950 to-violet-950">
                  <span className="absolute inset-0 flex items-center justify-center text-8xl font-semibold text-white/10">
                    BN
                  </span>
                  <img
                    src="/public/Portfolio-photo.png"
                    alt="Bavithran Natarajan"
                    className="relative h-full w-full object-cover object-top"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 border-t border-white/10 bg-white/[0.04] px-3 py-4 text-gray-200">
                  <div className="flex items-center justify-center gap-2 border-r border-white/15 px-2">
                    <MapPin size={18} className="shrink-0 text-cyan-400" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">Coimbatore,<br/> India</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 border-r border-white/15 px-2">
                    <GraduationCap size={19} className="shrink-0 text-cyan-400" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">B.E ECE</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-2">
                    <CalendarDays size={18} className="shrink-0 text-cyan-400" />
                    <span className="text-[11px] sm:text-xs leading-tight">Passionate<br />Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/60 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
