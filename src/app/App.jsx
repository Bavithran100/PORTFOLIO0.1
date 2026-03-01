import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden relative">
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
