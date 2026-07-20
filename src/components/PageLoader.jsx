import { motion, AnimatePresence } from "framer-motion";
import { Plane, Cloud } from "lucide-react";

export default function PageLoader({ loading }) {
  // Deterministic-ish particle positions
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  const clouds = [
    { top: "15%", scale: 1.2, duration: 18, delay: 0, opacity: 0.15 },
    { top: "65%", scale: 0.8, duration: 14, delay: 2, opacity: 0.12 },
    { top: "40%", scale: 1.5, duration: 22, delay: 4, opacity: 0.1 },
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Animated shifting gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, #0369a1, #0284c7, #f97316, #0369a1)",
              backgroundSize: "300% 300%",
            }}
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Soft vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

          {/* Drifting clouds */}
          {clouds.map((c, i) => (
            <motion.div
              key={i}
              className="absolute text-white"
              style={{ top: c.top, opacity: c.opacity }}
              initial={{ x: "-20vw" }}
              animate={{ x: "120vw" }}
              transition={{
                duration: c.duration,
                repeat: Infinity,
                delay: c.delay,
                ease: "linear",
              }}
            >
              <Cloud size={90 * c.scale} fill="white" strokeWidth={0} />
            </motion.div>
          ))}

          {/* Glowing pulsing orbs */}
          <motion.div
            className="absolute h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 360],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute h-[280px] w-[280px] rounded-full bg-orange-300/25 blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              x: [0, 140, 0],
              y: [0, -60, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute h-[200px] w-[200px] rounded-full bg-sky-200/20 blur-3xl"
            animate={{
              scale: [0.9, 1.3, 0.9],
              x: [0, -100, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* Twinkling particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white"
              style={{
                width: p.size,
                height: p.size,
                top: `${p.top}%`,
                left: `${p.left}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Plane with trailing glow ghosts */}
            <div className="relative flex items-center justify-center">
              {/* Trail ghosts */}
              {[0.5, 0.35, 0.2].map((op, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white p-8"
                  style={{ opacity: op }}
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, 8, -8, 0],
                    x: [0, -14 * (i + 1), 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.08,
                  }}
                >
                  <Plane size={60} className="text-sky-600" style={{ opacity: 0 }} />
                </motion.div>
              ))}

              {/* Glow ring behind plane */}
              <motion.div
                className="absolute h-28 w-28 rounded-full bg-orange-300/40 blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="relative rounded-full bg-white p-8 shadow-[0_0_50px_rgba(255,255,255,0.6)]"
              >
                <Plane size={60} className="text-sky-600" />
              </motion.div>
            </div>

            {/* Title with shimmer */}
            <motion.h1
              className="relative mt-8 bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-5xl font-black text-transparent"
              style={{ backgroundSize: "200% auto" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundPosition: ["0% center", "200% center"],
              }}
              transition={{
                opacity: { duration: 0.6 },
                y: { duration: 0.6 },
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              TravelX
            </motion.h1>

            {/* Subtitle with letter fade */}
            <motion.p
              className="mt-3 flex text-lg tracking-[8px] text-white/90 uppercase"
              initial="hidden"
              animate="visible"
            >
              {"Exploring Paradise".split("").map((char, i) => (
                <motion.span
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            {/* Progress bar with shimmer */}
            <div className="mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="relative h-full rounded-full bg-gradient-to-r from-white via-orange-200 to-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/50"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  style={{ width: "40%" }}
                />
              </motion.div>
            </div>

            {/* Loading Dots */}
            <div className="mt-8 flex gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-3 w-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  animate={{
                    y: [0, -14, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}