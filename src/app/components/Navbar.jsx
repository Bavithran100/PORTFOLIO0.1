import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "skills" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateNavigation = () => {
      setIsScrolled(window.scrollY > 36);

      const scrollAnchor = window.scrollY + window.innerHeight * 0.32;
      let currentSection = navLinks[0].id;

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollAnchor) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
      frameId = 0;
    };

    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/[0.07] bg-[#050505]/82 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
      aria-label="Primary navigation"
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.045] px-3.5 py-1.5 text-xs font-medium text-emerald-200/90 backdrop-blur-md transition-all duration-300 hover:border-emerald-300/25 hover:bg-emerald-300/[0.07] hover:text-emerald-100"
            aria-label="Open to work, scroll to home"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="tracking-wide">Open to Work</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            <div className="mr-3 flex items-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className={`group relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-[1px] h-px origin-left bg-gradient-to-r from-cyan-300 to-violet-300 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Get In Touch
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="nav-mobile-menu mb-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#080808]/95 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/[0.07] text-white"
                      : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-2 flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-50"
            >
              Get In Touch
              <ArrowUpRight size={15} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
