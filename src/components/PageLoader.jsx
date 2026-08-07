import {
  Plane,
  Hotel,
  Camera,
  Ship,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const travelIcons = [Plane, Hotel, Camera, Ship];

const ICON_INTERVAL_MS = 2000 / travelIcons.length;

// Ring geometry for the progress arc that syncs to each icon's turn
const RING_RADIUS = 60;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function PageLoader({ loading }) {
  const [iconIndex, setIconIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIconIndex(0);
      return;
    }

    let cancelled = false;

    const step = () => {
      if (cancelled) return;

      setIconIndex((prev) => (prev + 1) % travelIcons.length);

      // Self-scheduling timeout — can't stack the way setInterval can
      timeoutRef.current = setTimeout(step, ICON_INTERVAL_MS);
    };

    timeoutRef.current = setTimeout(step, ICON_INTERVAL_MS);

    return () => {
      cancelled = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [loading]);

  const ActiveIcon = travelIcons[iconIndex];

  // subtle floating dust, purely decorative
  const dust = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 2,
  }));

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-[#ede9fe] to-[#ddd6fe]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
        >
          {/* Ambient drifting dust for depth */}
          {dust.map((d) => (
            <motion.div
              key={d.id}
              className="absolute rounded-full bg-[#8B7FE8]"
              style={{
                width: d.size,
                height: d.size,
                top: `${d.top}%`,
                left: `${d.left}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: d.duration,
                repeat: Infinity,
                delay: d.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-center text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-[#5B3FD6] via-[#7C5CFF] to-[#B49BFF] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundPosition: ["0% center", "200% center"],
              }}
              transition={{
                opacity: { duration: 0.7 },
                y: { duration: 0.7 },
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
              }}
            >
              Riya Tours & Travels
            </motion.h1>

            <motion.p
              className="mt-3 text-center text-sm md:text-base tracking-[0.35em] uppercase text-[#5B4B8A] font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Explore • Dream • Discover
            </motion.p>

            {/* Icon stays in this one fixed spot — only its content swaps */}
            <div className="relative mt-10 flex items-center justify-center">
              <motion.div
                className="absolute h-44 w-44 rounded-full border border-purple-300/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute h-56 w-56 rounded-full border border-purple-200/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />

              {/* Small orbiting dot marking the outer ring's rotation */}
              <motion.div
                className="absolute h-44 w-44"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#7C5CFF] shadow-[0_0_8px_rgba(124,92,255,0.9)]" />
              </motion.div>

              <motion.div
                className="absolute h-36 w-36 rounded-full bg-purple-300/30 blur-2xl"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.45, 0.8, 0.45],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              {/* Progress ring — fills once per icon, synced to ICON_INTERVAL_MS */}
              <svg
                className="absolute h-[136px] w-[136px] -rotate-90"
                viewBox="0 0 136 136"
              >
                <circle
                  cx="68"
                  cy="68"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="rgba(124,92,255,0.15)"
                  strokeWidth="3"
                />
                <motion.circle
                  key={iconIndex}
                  cx="68"
                  cy="68"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="#7C5CFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: ICON_INTERVAL_MS / 1000, ease: "linear" }}
                />
              </svg>

              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(105,87,223,0.25)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={iconIndex}
                    initial={{ opacity: 0, scale: 0.4, rotateY: -90, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.4, rotateY: 90, filter: "blur(4px)" }}
                    transition={{ duration: 0.18, ease: "easeInOut" }}
                    className="absolute flex items-center justify-center"
                    style={{ perspective: 400 }}
                  >
                    <ActiveIcon size={54} className="text-[#6957DF]" />
                  </motion.div>
                </AnimatePresence>

                {/* Quick flash on every icon change */}
                <motion.div
                  key={`flash-${iconIndex}`}
                  className="pointer-events-none absolute inset-0 rounded-full bg-white"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </div>
            </div>

            <motion.div
              className="mt-8 rounded-2xl border border-white/60 bg-white/50 px-6 py-3 shadow-[0_10px_30px_rgba(105,87,223,0.12)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.p
                className="font-semibold tracking-wide text-[#4C3F73]"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Preparing your next journey...
              </motion.p>
            </motion.div>

            <div className="mt-6 flex gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#6957DF] to-[#A78BFA] shadow-[0_0_16px_rgba(139,92,246,0.55)]"
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}