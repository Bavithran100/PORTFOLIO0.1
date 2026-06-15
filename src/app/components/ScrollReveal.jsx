import { useEffect, useRef, useState } from "react";

const animationClasses = {
  "fade-up": "reveal-fade-up",
  "fade-left": "reveal-fade-left",
  "fade-right": "reveal-fade-right",
  "fade-down": "reveal-fade-down",
  "scale-in": "reveal-scale-in",
  "scale-bounce": "reveal-scale-bounce",
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  threshold = 0.15,
  delay = 0,
  className = "",
  once = true,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setRevealed(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [threshold, once]);

  const animClass = animationClasses[animation] || "reveal-fade-up";

  return (
    <Tag
      ref={ref}
      className={`reveal ${animClass} ${revealed ? "revealed" : ""} ${className}`}
      style={{
        animationDelay: revealed ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
}
