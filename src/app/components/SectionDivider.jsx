export function SectionDivider({ variant = "wave" }) {
  if (variant === "spike") {
    return (
      <div className="relative w-full overflow-hidden h-16" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-gradient-wave" />
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 L80,16 L160,40 L240,8 L320,32 L400,16 L480,40 L560,8 L640,32 L720,16 L800,40 L880,8 L960,32 L1040,16 L1120,40 L1200,8 L1280,32 L1360,16 L1440,32 L1440,64 L0,64 Z"
            fill="rgba(34,211,238,0.08)"
          />
          <path
            d="M0,48 L80,32 L160,52 L240,24 L320,48 L400,32 L480,52 L560,24 L640,48 L720,32 L800,52 L880,24 L960,48 L1040,32 L1120,52 L1200,24 L1280,48 L1360,32 L1440,48 L1440,64 L0,64 Z"
            fill="rgba(168,85,247,0.06)"
          />
        </svg>
      </div>
    );
  }

  // Default: gradient line
  return (
    <div className="relative w-full overflow-hidden py-4" aria-hidden="true">
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent animate-pulse" />
        </div>
        <div className="flex justify-center -mt-1.5">
          <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-sm shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
        </div>
      </div>
    </div>
  );
}
