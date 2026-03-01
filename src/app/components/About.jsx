import { useState } from "react";
import { GraduationCap, Briefcase, Code2, Award } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

export function About() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "coding", label: "Coding Profiles", icon: Code2 },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  const programmingSkills = [
    { name: "Java" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "C++" },
    { name: "HTML/CSS" },
  ];

  const frameworks = [
    { name: "Spring Boot" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
    { name: "Thymeleaf" },
  ];

  const backendDB = [
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "REST APIs" },
    { name: "OAuth2" },
    { name: "Microservices" },
    { name: "AWS" },
  ];

  const experiences = [
    {
      role: "Backend Developer",
      company: "Project-Based & Hackathon Experience",
      period: "2024 - Present",
      description:
        "Built scalable backend applications with Spring Boot, designed REST APIs, and integrated secure auth/database flows for real-world projects.",
    },
    {
      role: "Full-Stack Developer",
      company: "Personal & Team Projects",
      period: "2023 - Present",
      description:
        "Developed full-stack products with React and backend services, focusing on clean architecture, reliability, and production-ready deployment.",
    },
  ];

  const education = [
    {
      degree: "B.E. in Electronics and Communication Engineering",
      institution: "Sri Eshwar College of Engineering",
      period: "2022 - 2026",
      description:
        "Focused on software development, backend engineering, and problem-solving through projects, hackathons, and continuous learning.",
    },
  ];

  const codingProfiles = [
    {
      platform: "GitHub",
      username: "@Bavithran100",
      primaryMetricLabel: "Projects",
      primaryMetric: "5+",
      secondaryMetricLabel: "Public Repos",
      secondaryMetric: "Growing",
    },
    {
      platform: "Hackathons",
      username: "3+ Participations",
      primaryMetricLabel: "Events",
      primaryMetric: "3+",
      secondaryMetricLabel: "Focus",
      secondaryMetric: "Product + Backend",
    },
  ];

  const certifications = [
    {
      name: "Backend / Java-Spring Learning Certifications",
      issuer: "Online Learning Platforms",
      date: "2024 - 2026",
    },
    {
      name: "Cloud and Deployment Fundamentals",
      issuer: "Hands-on Project Practice",
      date: "2024 - 2026",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-[#0a0a0f] relative overflow-hidden ink-splash-section ink-splash-v2"
    >
      {/* <AnimatedBackground /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              About Me
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="glassmorphism p-10 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
              <h3 className="text-3xl text-white mb-6">Hi, I'm Bavithran</h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a backend-focused <span className="text-cyan-400">Software Developer</span> with
                  strong experience in building scalable applications using <span className="text-cyan-400">Spring Boot</span>.
                  I enjoy designing clean REST APIs and working with databases to solve real-world problems.
                </p>
                <p>
                  Alongside backend development, I have hands-on experience with <span className="text-violet-400">AI/ML concepts</span>
                  and enjoy applying them where intelligent decision-making adds value. I am actively learning
                  <span className="text-violet-400"> system design and networking</span> for production-grade systems.
                </p>
                <p>
                  I believe in learning by building and continuously improving performance, reliability,
                  and maintainability in every project.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 py-2.5 rounded-lg text-sm transition-all inline-flex items-center gap-2 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border-b-2 border-cyan-400"
                          : "text-gray-400 hover:text-white border-b-2 border-transparent"
                      }`}
                    >
                      <Icon size={15} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="glassmorphism p-8 rounded-2xl border border-white/10 min-h-[400px]">
                {activeTab === "skills" && (
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl text-white mb-4">Programming</h4>
                      <div className="flex flex-wrap gap-3">
                        {programmingSkills.map((skill, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all"
                          >
                            <span className="text-gray-300">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl text-white mb-4">Frameworks & Tools</h4>
                      <div className="flex flex-wrap gap-3">
                        {frameworks.map((skill, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all"
                          >
                            <span className="text-gray-300">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl text-white mb-4">Backend & Database</h4>
                      <div className="flex flex-wrap gap-3">
                        {backendDB.map((skill, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all"
                          >
                            <span className="text-gray-300">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-cyan-500 pl-6 pb-6">
                        <div className="flex items-start gap-3 mb-2">
                          <GraduationCap className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                          <div>
                            <h4 className="text-xl text-white mb-1">{edu.degree}</h4>
                            <p className="text-violet-400 mb-2">{edu.institution}</p>
                            <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
                            <p className="text-gray-300">{edu.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-cyan-500 pl-6 pb-6">
                        <div className="flex items-start gap-3 mb-2">
                          <Briefcase className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                          <div>
                            <h4 className="text-xl text-white mb-1">{exp.role}</h4>
                            <p className="text-violet-400 mb-2">{exp.company}</p>
                            <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                            <p className="text-gray-300">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "coding" && (
                  <div className="space-y-4">
                    {codingProfiles.map((profile, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl text-white mb-1">{profile.platform}</h4>
                            <p className="text-cyan-400">{profile.username}</p>
                          </div>
                          <Code2 className="text-violet-400" size={24} />
                        </div>
                        <div className="flex gap-6 text-sm">
                          <div>
                            <p className="text-gray-400">{profile.primaryMetricLabel}</p>
                            <p className="text-white text-lg">{profile.primaryMetric}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">{profile.secondaryMetricLabel}</p>
                            <p className="text-white text-lg">{profile.secondaryMetric}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "certifications" && (
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <Award className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                          <div>
                            <h4 className="text-xl text-white mb-1">{cert.name}</h4>
                            <p className="text-violet-400 mb-2">{cert.issuer}</p>
                            <p className="text-sm text-gray-400">{cert.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
