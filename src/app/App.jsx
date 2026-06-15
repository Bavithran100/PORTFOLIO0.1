import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Analytics } from '@vercel/analytics/react';
import { ProjectDetails } from "./components/ProjectDetails";
import { getProjectBySlug } from "./data/projects";
import { AmbientBackground } from "./components/AmbientBackground";
import { SmoothScroll } from "./components/SmoothScroll";
import { LazyMotion, domAnimation } from "framer-motion";

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const projectMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
  const project = projectMatch ? getProjectBySlug(projectMatch[1]) : null;

  if (project) {
    return (
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-[#030303]">
          <Analytics />
          <SmoothScroll />
          <AmbientBackground />
          <ProjectDetails project={project} />
        </div>
      </LazyMotion>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-black overflow-x-hidden relative">
        <Analytics/>
        <SmoothScroll />
        <AmbientBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </LazyMotion>
  );
}
