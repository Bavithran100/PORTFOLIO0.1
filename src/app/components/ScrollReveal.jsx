import { m as Motion, useReducedMotion } from "framer-motion";

const directions = {
  "fade-up": { x: 0, y: 22 },
  "fade-left": { x: -22, y: 0 },
  "fade-right": { x: 22, y: 0 },
  "fade-down": { x: 0, y: -22 },
  "scale-in": { x: 0, y: 8, scale: 0.985 },
  "scale-bounce": { x: 0, y: 8, scale: 0.975 },
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  threshold = 0.12,
  delay = 0,
  className = "",
  once = true,
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = Motion[as] || Motion.div;
  const initial = reduceMotion ? false : { opacity: 0, ...directions[animation] };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
