import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import { AnimatedBackground } from "./AnimatedBackground";

export function Projects() {
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      title: "ProctorX – Online Examination System",
      description:
        "A secure and scalable online examination platform with automated evaluation and session-based monitoring. Designed to ensure fairness, integrity, and efficiency in digital assessments.",
      image:
        "https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDM4OTA5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "SpringBoot", "MySQL", "RestAPI"],
      githubUrl: "https://github.com/Bavithran100/ProctorXFrontend",
      liveUrl: "https://proctor-x-frontend.vercel.app/",
    },
    {
      title: "Online Health Consultation System",
      description:
        "A role-based healthcare platform for booking doctor appointments, online consultations, and managing medical records securely using Spring Boot and MySQL.",
      image:
        "https://images.unsplash.com/photo-1618902345200-8c3fe6106608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwbGlnaHRzfGVufDF8fHx8MTc3MDQ0NDQyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["SpringBoot", "Thymeleaf", "MySQL", "RestAPI"],
      githubUrl: "https://github.com/Bavithran100/Online-Meeting-App",
      liveUrl: "https://online-meeting-app-2.onrender.com/",
    },
    {
      title: "MindPilot – AI Learning & Question Generator",
      description:
        "A personalized AI-powered assistant designed to guide learning, generate exam questions, and provide clear explanations. Built to support students through interactive conversations, tutoring, and intelligent question generation.",
      image:
        "https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MDQ0NDQyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Groq API", "LLaMA 3.1", "Prompt Engineering"],
      githubUrl: "https://github.com/Bavithran100/ChatBot",
      liveUrl: "https://chat-bot-six-ochre.vercel.app/",
    },
    {
      title: "Stock Track Pro",
      description:
        "A full-stack inventory management system that tracks product stock levels, generates low-stock alerts, and allows CRUD operations through a clean dashboard.<",
      image:
        "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzAzNjMxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Django", "MongoDB", "REST API", "JWT"],
      githubUrl: "https://github.com/Bavithran100/stockapp",
      liveUrl: "https://stockapp-5.onrender.com/",
    },
    // {
    //   title: "Cloud Infrastructure Manager",
    //   description:
    //     "Comprehensive cloud management platform for multi-cloud environments with cost optimization and automated scaling.",
    //   image:
    //     "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMzM4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    //   tags: ["Python", "AWS", "Terraform", "Kubernetes"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
    // {
    //   title: "ML Model Training Platform",
    //   description:
    //     "End-to-end machine learning platform with automated model training, hyperparameter tuning, and deployment pipeline.",
    //   image:
    //     "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDM3MTIzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    //   tags: ["Python", "TensorFlow", "Docker", "MLflow"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-32 bg-[#0a0a0f] relative">
      {/* <AnimatedBackground/> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              Featured Projects
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing my latest work in full-stack development, from concept
              to deployment
            </p>
          </div>

          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-8 scroll-smooth projects-container"
            style={{ scrollbarWidth: "thin" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="glassmorphism rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-all group flex-shrink-0 w-[380px]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-violet-500/10 text-cyan-300 border border-cyan-500/20 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-lg"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white rounded-lg shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            &lt;- Scroll horizontally to see more projects -&gt;
          </p>
        </div>
      </div>
    </section>
  );
}
