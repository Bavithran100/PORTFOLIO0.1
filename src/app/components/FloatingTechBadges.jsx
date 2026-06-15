const badges = [
  { label: "React", x: "-15%", y: "5%", anim: "badge-float-1", color: "cyan" },
  { label: "Spring Boot", x: "90%", y: "15%", anim: "badge-float-2", color: "emerald" },
  { label: "Node.js", x: "105%", y: "50%", anim: "badge-float-3", color: "violet" },
  { label: "MySQL", x: "-10%", y: "65%", anim: "badge-float-2", color: "cyan" },
  { label: "Docker", x: "95%", y: "80%", anim: "badge-float-1", color: "emerald" },
  { label: "AWS", x: "50%", y: "-8%", anim: "badge-float-3", color: "violet" },
];

const colorClasses = {
  cyan: "border-cyan-400/30 text-cyan-300 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
  violet: "border-violet-400/30 text-violet-300 bg-violet-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
  emerald: "border-emerald-400/30 text-emerald-300 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.2)]",
};

const animDurations = {
  "badge-float-1": "6s",
  "badge-float-2": "7s",
  "badge-float-3": "8s",
};

export function FloatingTechBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {badges.map((badge, i) => (
        <span
          key={i}
          className="absolute px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm select-none"
          style={{
            left: badge.x,
            top: badge.y,
            animationName: badge.anim,
            animationDuration: animDurations[badge.anim],
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.3}s`,
          }}
        >
          <span className={colorClasses[badge.color]}>
            {badge.label}
          </span>
        </span>
      ))}
    </div>
  );
}

// Inline the badge styles directly in the render to avoid className issues
export function FloatingTechBadgesInline() {
  return (
    <>
      <style>{`
        .ftb-badge {
          position: absolute;
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid;
          backdrop-filter: blur(8px);
          user-select: none;
          pointer-events: none;
          will-change: transform;
        }
        .ftb-cyan { border-color: rgba(34,211,238,0.3); color: #67e8f9; background: rgba(34,211,238,0.1); box-shadow: 0 0 15px rgba(34,211,238,0.2); }
        .ftb-violet { border-color: rgba(168,85,247,0.3); color: #c4b5fd; background: rgba(168,85,247,0.1); box-shadow: 0 0 15px rgba(168,85,247,0.2); }
        .ftb-emerald { border-color: rgba(52,211,153,0.3); color: #6ee7b7; background: rgba(52,211,153,0.1); box-shadow: 0 0 15px rgba(52,211,153,0.2); }
        
        @keyframes ftb-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(12px, -15px) rotate(3deg); }
          50% { transform: translate(-8px, -8px) rotate(-1deg); }
          75% { transform: translate(-10px, -20px) rotate(2deg); }
        }
        @keyframes ftb-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-15px, -12px) rotate(-3deg); }
          50% { transform: translate(10px, -20px) rotate(1deg); }
          75% { transform: translate(12px, -5px) rotate(-2deg); }
        }
        @keyframes ftb-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(18px, 8px) rotate(2deg); }
          50% { transform: translate(-8px, -15px) rotate(-2deg); }
          75% { transform: translate(-15px, 10px) rotate(1deg); }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {badges.map((badge, i) => (
          <span
            key={i}
            className={`ftb-badge ftb-${badge.color}`}
            style={{
              left: badge.x,
              top: badge.y,
              animationName: `ftb-${badge.anim.split("-")[2]}`,
              animationDuration: badge.anim === "badge-float-1" ? "6s" : badge.anim === "badge-float-2" ? "7s" : "8s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {badge.label}
          </span>
        ))}
      </div>
    </>
  );
}
