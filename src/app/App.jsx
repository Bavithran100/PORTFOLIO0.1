import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Analytics } from '@vercel/analytics/react';
import { ProjectDetails } from "./components/ProjectDetails";
import { getProjectBySlug } from "./data/projects";

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
      <>
        <Analytics />
        <ProjectDetails project={project} />
      </>
    );
  }

  return (
    
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <Analytics/>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
