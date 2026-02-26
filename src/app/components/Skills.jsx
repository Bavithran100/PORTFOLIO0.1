export function Skills() {
  const skills = [
    { name: "React / Nodejs", level: 95, category: "frontend" },
    { name: "ReactNative", level: 90, category: "frontend" },
    { name: "SpringBoot", level: 92, category: "backend" },
    { name: "MySQL / MongoDB", level: 88, category: "backend" },
    { name: "AWS / Cloud Services", level: 85, category: "devops" },
    { name: "Docker / Kubernetes", level: 82, category: "devops" },
    { name: "GraphQL / REST APIs", level: 90, category: "backend" },
    { name: "Tailwind / CSS", level: 93, category: "frontend" },
  ];

  const technologies = [
    "React",
     "TypeScript",
    "SpringBoot",
    "MySQL",
    
    // "PostgreSQL",
    "MongoDB",
    "Redis",
    "GraphQL",
    "REST",
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "CI/CD",
    "Tailwind",
    "Render",
    "OAuth2",
    // "Prisma",
    // "Jest",
    "WebSocket",
    "Microservices",
  ];

  return (
    <section id="skills" className="py-32 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-cyan-900/5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              Skills & Expertise
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proficient in modern technologies and frameworks
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glassmorphism p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl text-white mb-8">Core Competencies</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full relative overflow-hidden transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphism p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl text-white mb-8">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 text-gray-300 border border-cyan-500/20 rounded-full hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:scale-105 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {/* <div>
                    <div className="text-3xl text-cyan-400 mb-2">Fresher</div>
                    <div className="text-sm text-gray-400">Years Experience </div>
                  </div> */}
                  <div>
                    <div className="text-3xl text-violet-400 mb-2">5+</div>
                    <div className="text-sm text-gray-400">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-3xl text-cyan-400 mb-2">3+</div>
                    <div className="text-sm text-gray-400">Hackathons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
