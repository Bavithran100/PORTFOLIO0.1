import { Code2, Database, Layers, Palette, Rocket, Zap } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

export function About() {
  const techStack = [
    { icon: Code2, name: "React", color: "text-cyan-400" },
    { icon: Layers, name: "Spring Boot", color: "text-cyan-400"  },
     { icon: Database, name: "MySql/MongoDB", color: "text-cyan-400" },
    { icon: Layers, name: "System Design", color: "text-violet-400"},
    { icon:Rocket, name: "Node.js", color: "text-cyan-400" },
    { icon: Zap, name: "Tailwind", color: "text-violet-400" },
  ];

  return (
    <section id="about" className="py-32 bg-[#0a0a0f] relative">
      <AnimatedBackground/>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              About Me
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glassmorphism p-10 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
              <h3 className="text-3xl text-white mb-6">Hi, I'm Bavithran</h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
    I’m a backend-focused{" "}
    <span className="text-cyan-400">Software Developer</span>{" "}
    with strong experience in building scalable applications using
    <span className="text-cyan-400"> Spring Boot</span>.
    I enjoy designing clean REST APIs and working with databases to
    solve real-world problems.
  </p>

  <p>
    Alongside backend development, I have hands-on experience with
    <span className="text-violet-400"> AIML concepts</span> and enjoy
    applying them where intelligent decision-making adds value.
    I’m currently learning
    <span className="text-violet-400">
      {" "}
      system design and networking
    </span>{" "}
    to better understand how scalable systems work end-to-end.
  </p>

  <p>
    I believe in learning by building. I like exploring how things
    work under the hood — from request flow and API design to
    performance, reliability, and maintainability.
  </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl text-white mb-8 text-center lg:text-left">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all group cursor-pointer"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`${tech.color} group-hover:scale-110 transition-transform`}
                      >
                        <tech.icon size={40} strokeWidth={1.5} />
                      </div>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
