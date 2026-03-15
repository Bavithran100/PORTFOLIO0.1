const canvas = document.getElementById("cursor-trail");

if (canvas) {
  const desktopQuery = window.matchMedia("(min-width: 769px) and (pointer: fine)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ctx = canvas.getContext("2d");
  const particles = [];
  const maxParticles = 160;
  const glowPalette = [
    "rgba(34, 211, 238, 0.9)",
    "rgba(56, 189, 248, 0.85)",
    "rgba(99, 102, 241, 0.75)",
  ];
  let animationFrameId = null;
  let devicePixelRatioValue = Math.min(window.devicePixelRatio || 1, 2);
  let isEnabled = false;

  if (!ctx) {
    canvas.style.display = "none";
  } else {
    const resizeCanvas = () => {
      devicePixelRatioValue = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * devicePixelRatioValue;
      canvas.height = window.innerHeight * devicePixelRatioValue;
      ctx.setTransform(devicePixelRatioValue, 0, 0, devicePixelRatioValue, 0, 0);
    };

    const spawnParticle = (x, y) => {
      particles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 3 + 2,
        life: 1,
        decay: Math.random() * 0.018 + 0.02,
        color: glowPalette[Math.floor(Math.random() * glowPalette.length)],
      });

      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }
    };

    const createTrail = (x, y) => {
      const spawnCount = Math.floor(Math.random() * 3) + 3;

      for (let index = 0; index < spawnCount; index += 1) {
        spawnParticle(x, y);
      }
    };

    const drawParticle = (particle) => {
      ctx.save();
      ctx.globalAlpha = particle.life;
      ctx.fillStyle = particle.color;
      ctx.shadowBlur = 18;
      ctx.shadowColor = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const updateParticles = () => {
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.size *= 0.97;
        particle.life -= particle.decay;

        if (particle.life <= 0.03 || particle.size <= 0.35) {
          particles.splice(index, 1);
          continue;
        }

        drawParticle(particle);
      }
    };

    const render = () => {
      if (!isEnabled) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      animationFrameId = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      createTrail(event.clientX, event.clientY);
    };

    const stopTrail = () => {
      isEnabled = false;
      particles.length = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = "none";

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const startTrail = () => {
      if (isEnabled) {
        return;
      }

      isEnabled = true;
      canvas.style.display = "block";
      resizeCanvas();

      if (!animationFrameId) {
        render();
      }
    };

    const syncTrailState = () => {
      if (desktopQuery.matches && !reducedMotionQuery.matches) {
        startTrail();
      } else {
        stopTrail();
      }
    };

    syncTrailState();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    desktopQuery.addEventListener("change", syncTrailState);
    reducedMotionQuery.addEventListener("change", syncTrailState);

    window.addEventListener("beforeunload", () => {
      stopTrail();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handlePointerMove);
      desktopQuery.removeEventListener("change", syncTrailState);
      reducedMotionQuery.removeEventListener("change", syncTrailState);
    });
  }
}
