import { useEffect, useRef } from "react";

const orbs = [
  { size: 300, color: "cyan", x: "5%", y: "10%", delay: 0, duration: 8, opacity: 0.08 },
  { size: 200, color: "violet", x: "85%", y: "25%", delay: 0.5, duration: 10, opacity: 0.07 },
  { size: 350, color: "emerald", x: "10%", y: "55%", delay: 1, duration: 12, opacity: 0.05 },
  { size: 250, color: "cyan", x: "90%", y: "60%", delay: 1.5, duration: 9, opacity: 0.07 },
  { size: 180, color: "violet", x: "50%", y: "35%", delay: 2, duration: 7, opacity: 0.06 },
  { size: 280, color: "emerald", x: "45%", y: "80%", delay: 0.8, duration: 11, opacity: 0.05 },
  { size: 160, color: "cyan", x: "70%", y: "15%", delay: 1.2, duration: 8, opacity: 0.08 },
  { size: 220, color: "violet", x: "20%", y: "75%", delay: 0.3, duration: 10, opacity: 0.06 },
];

const colorMap = {
  cyan: "rgba(34, 211, 238, var(--orb-opacity))",
  violet: "rgba(168, 85, 247, var(--orb-opacity))",
  emerald: "rgba(52, 211, 153, var(--orb-opacity))",
};

export function FloatingOrbs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const orbs = container.querySelectorAll(".floating-orb");
      orbs.forEach((orb, i) => {
        const speed = 0.02 + i * 0.005;
        const yOffset = scrollY * speed;
        const xOffset = Math.sin(scrollY * 0.001 + i) * 20;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    const rafScroll = () => {
      handleScroll();
      rafId = requestAnimationFrame(rafScroll);
    };
    rafId = requestAnimationFrame(rafScroll);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="floating-orb absolute rounded-full blur-[80px] will-change-transform"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${colorMap[orb.color].replace("var(--orb-opacity)", String(orb.opacity * 1.2))}, ${colorMap[orb.color].replace("var(--orb-opacity)", "0")})`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
