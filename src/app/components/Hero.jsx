import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
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
    "Backend Developer (Spring Boot)",
    "System Design Learner",
    "Problem Solver",
    "Tech Enthusiast",
    "API Builder",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-[#0a0a0f] overflow-hidden">
      <AnimatedBackground/>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-gray-400 text-2xl md:text-3xl mb-4">
              Hi, I am
            </p>
            <h1 className="text-6xl md:text-8xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-violet-400 animate-fade-in">
              Bavithran Natarajan
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-8"></div>
          </div>

          <h2 className="text-3xl md:text-4xl text-white/90 mb-6 min-h-[48px] md:min-h-[56px] flex items-center justify-center">
            <TypingRotatingText words={rotatingWords} className="text-cyan-400" />
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        I build scalable backend systems with Spring Boot and apply AIML
to real-world problems, while actively learning system design
and networking for production-ready applications.
          </p>

          <div className="flex gap-6 justify-center flex-wrap mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-violet-500 to-pink-600 hover:from-violet-400 hover:to-pink-500 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              onClick={() => window.open("https://drive.google.com/file/d/1kkRXo_uQL6WwQ1gWp6iT4BOZp-jVGGIY/view?usp=sharing", "_blank")}
              className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all"
            >
              <FileText size={20} className="mr-2" />
              View Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Bavithran100"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bavithran-n-04b74b333/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
             href="mailto:bavithrannatarajan@gmail.com"
              className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1kkRXo_uQL6WwQ1gWp6iT4BOZp-jVGGIY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
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
