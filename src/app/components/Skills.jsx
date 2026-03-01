import { AnimatedBackground } from "./AnimatedBackground";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  TrendingUp,
  Trophy,
} from "lucide-react";

export function Skills() {
  const engineeringAreas = [
    {
      icon: Code2,
      iconClass: "text-cyan-400",
      title: "Frontend Engineering",
      skills: ["React", "TypeScript", "Tailwind CSS", "Responsive UI", "State Management"],
    },
    {
      icon: Database,
      iconClass: "text-violet-400",
      title: "Backend Engineering",
      skills: ["Spring Boot", "Node.js", "REST APIs", "MySQL", "MongoDB"],
    },
    {
      icon: Cloud,
      iconClass: "text-cyan-400",
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Render"],
    },
    {
      icon: Cpu,
      iconClass: "text-violet-400",
      title: "System Design",
      skills: ["Microservices", "Scalability", "API Design", "WebSockets", "OAuth2"],
    },
  ];

  const codingProfiles = [
    {
      platform: "GitHub",
      username: "@Bavithran100",
      stats: [
        { label: "Projects", value: "5+" },
        { label: "Tech Focus", value: "Backend + Full Stack" },
        { label: "Status", value: "Active" },
      ],
    },
    {
      platform: "LeetCode",
      username: "@bavithran",
      stats: [
        { label: "Practice", value: "Consistent" },
        { label: "Focus", value: "DSA + Patterns" },
        { label: "Goal", value: "Higher Contest Rank" },
      ],
    },
    {
      platform: "Hackathons",
      username: "Team Participations",
      stats: [
        { label: "Hackathons", value: "3+" },
        { label: "Projects Built", value: "Rapid MVPs" },
        { label: "Strength", value: "Execution Speed" },
      ],
    },
  ];

  const exploring = [
    {
      title: "Advanced System Design",
      description:
        "Designing scalable architectures with better reliability, fault tolerance, and maintainability.",
      topics: ["Load Balancing", "Caching", "Database Scaling", "Observability"],
      icon: Cpu,
    },
    {
      title: "Distributed Systems",
      description:
        "Learning practical distributed patterns for consistency, resilience, and event-driven communication.",
      topics: ["CAP Trade-offs", "Event-Driven Design", "Queues", "Service Coordination"],
      icon: Cloud,
    },
    {
      title: "AI + Backend Integration",
      description:
        "Building intelligent products by combining APIs, prompt workflows, and robust backend systems.",
      topics: ["Prompt Engineering", "RAG Basics", "Agent Workflows", "Production Integrations"],
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 bg-[#0a0a0f] relative overflow-hidden ink-splash-section ink-splash-v4"
    >
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-cyan-900/5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              Skills & Expertise
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Engineering excellence through continuous learning and problem solving
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-4xl text-white mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                Skills & Engineering Strength
              </span>
            </h3>

            <h4 className="text-2xl text-cyan-400 mb-8">Core Engineering Areas</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringAreas.map((area, index) => (
                <div
                  key={index}
                  className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
                >
                  <area.icon className={`${area.iconClass} mb-4`} size={32} />
                  <h5 className="text-xl text-white mb-3">{area.title}</h5>
                  <div className="space-y-2">
                    {area.skills.map((skill, idx) => (
                      <div key={idx} className="text-sm text-gray-400">
                        - {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-4xl text-white mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                Problem Solving & Coding Profiles
              </span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {codingProfiles.map((profile, index) => (
                <div
                  key={index}
                  className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="text-cyan-400" size={28} />
                    <div>
                      <h4 className="text-2xl text-white">{profile.platform}</h4>
                      <p className="text-cyan-400 text-sm">{profile.username}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {profile.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0"
                      >
                        <span className="text-gray-400 text-sm">{stat.label}</span>
                        <span className="text-white font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-4xl text-white mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                Currently Exploring
              </span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {exploring.map((item, index) => (
                <div
                  key={index}
                  className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
                >
                  <item.icon className="text-violet-400 mb-4" size={32} />
                  <h4 className="text-2xl text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-cyan-300 border border-violet-500/20 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
