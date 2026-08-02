import { useEffect, useRef } from "react";

export default function ParticlesBackground({
  colorRGB = "105, 87, 223", // #6957DF
  linkColorRGB = "159, 122, 234", // #9F7AEA
  accentRGB = "196, 181, 253", // soft light-purple accent for comets/highlights
  density = 4000, // lower = more particles
  maxParticles = 260,
  linkDistance = 95,
  cursorRadius = 170, // how far the cursor influence reaches
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let comets = [];
    let animationId;
    let rafTime = 0;

    const mouse = { x: null, y: null, active: false };

    const rand = (min, max) => Math.random() * (max - min) + min;

    const createParticles = () => {
      const area = width * height;
      const count = Math.min(maxParticles, Math.max(28, Math.floor(area / density)));

      particles = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.16, 0.16),
        vy: rand(-0.16, 0.16),
        r: rand(1.1, 2.8),
        phase: rand(0, Math.PI * 2),
        twinkleSpeed: rand(0.008, 0.02),
      }));
    };

    const spawnComet = () => {
      const fromLeft = Math.random() > 0.5;
      const y = rand(0, height * 0.6);
      comets.push({
        x: fromLeft ? -60 : width + 60,
        y,
        vx: (fromLeft ? 1 : -1) * rand(6, 10),
        vy: rand(1, 2.5),
        life: 1,
      });
    };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      createParticles();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const step = () => {
      rafTime += 1;
      ctx.clearRect(0, 0, width, height);

      // Light purple backdrop wash
      ctx.fillStyle = "#F5F2FF";
      ctx.fillRect(0, 0, width, height);

      // Randomly spawn a shooting-star comet every so often
      if (!prefersReducedMotion && Math.random() < 0.0035) {
        spawnComet();
      }

      // --- Update particle positions + cursor repulsion ---
      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < cursorRadius && dist > 0.01) {
              const force = (1 - dist / cursorRadius) * 0.6;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }
        }

        p.phase += p.twinkleSpeed;
      }

      // --- Connecting lines between nearby particles ---
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDistance) {
            const opacity = 1 - dist / linkDistance;
            ctx.strokeStyle = `rgba(${linkColorRGB}, ${opacity * 0.55})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // --- Glowing tether from nearby particles to the cursor ---
      if (mouse.active) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cursorRadius) {
            const opacity = 1 - dist / cursorRadius;
            ctx.strokeStyle = `rgba(${accentRGB}, ${opacity * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Soft glowing halo around the cursor itself
        const haloGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, cursorRadius * 0.55
        );
        haloGradient.addColorStop(0, `rgba(${accentRGB}, 0.16)`);
        haloGradient.addColorStop(1, `rgba(${accentRGB}, 0)`);
        ctx.fillStyle = haloGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, cursorRadius * 0.55, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- Particles themselves: glow + twinkle ---
      for (const p of particles) {
        const twinkle = 0.75 + Math.sin(p.phase) * 0.25;
        const isNearCursor =
          mouse.active &&
          Math.hypot(p.x - mouse.x, p.y - mouse.y) < cursorRadius;

        const baseColor = isNearCursor ? accentRGB : colorRGB;
        const radius = p.r * (isNearCursor ? 1.4 : 1);

        ctx.save();
        ctx.shadowColor = `rgba(${baseColor}, ${1 * twinkle})`;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, ${twinkle})`;
        ctx.fill();
        ctx.restore();
      }

      // --- Shooting-star comets ---
      comets = comets.filter((c) => c.life > 0);
      for (const c of comets) {
        c.x += c.vx;
        c.y += c.vy;
        c.life -= 0.012;

        const tailX = c.x - c.vx * 4;
        const tailY = c.y - c.vy * 4;

        const cometGradient = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
        cometGradient.addColorStop(0, `rgba(255, 255, 255, ${c.life})`);
        cometGradient.addColorStop(0.4, `rgba(${accentRGB}, ${c.life * 0.7})`);
        cometGradient.addColorStop(1, `rgba(${accentRGB}, 0)`);

        ctx.save();
        ctx.shadowColor = `rgba(${accentRGB}, ${c.life})`;
        ctx.shadowBlur = 12;
        ctx.strokeStyle = cometGradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.restore();
      }

      animationId = requestAnimationFrame(step);
    };

    resize();
    step();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [colorRGB, linkColorRGB, accentRGB, density, maxParticles, linkDistance, cursorRadius]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}