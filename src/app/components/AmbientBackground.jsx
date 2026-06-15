import { m as Motion, useReducedMotion } from "framer-motion";

const blobs = [
  {
    className: "ambient-blob ambient-blob-cyan",
    animate: { x: [0, 70, 20, 0], y: [0, 35, 90, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 30,
  },
  {
    className: "ambient-blob ambient-blob-violet",
    animate: { x: [0, -80, -25, 0], y: [0, 75, 20, 0], scale: [1, 0.95, 1.07, 1] },
    duration: 36,
  },
  {
    className: "ambient-blob ambient-blob-indigo",
    animate: { x: [0, 45, -35, 0], y: [0, -55, 10, 0], scale: [1, 1.06, 0.98, 1] },
    duration: 40,
  },
];

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ambient-background" aria-hidden="true">
      {blobs.map((blob) => (
        <Motion.div
          key={blob.className}
          className={blob.className}
          animate={reduceMotion ? undefined : blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="ambient-grid" />
      <div className="ambient-noise" />
    </div>
  );
}
