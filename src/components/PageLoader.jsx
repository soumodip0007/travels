import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";

export default function PageLoader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-orange-500"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          {/* Animated Background Circles */}

          <motion.div
            className="absolute h-[450px] w-[450px] rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute h-[250px] w-[250px] rounded-full bg-orange-300/20 blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              x: [0, 120, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />

          <div className="relative flex flex-col items-center">

            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="rounded-full bg-white p-8 shadow-2xl"
            >
              <Plane
                size={60}
                className="text-sky-600"
              />
            </motion.div>

            <motion.h1
              className="mt-8 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-5xl font-black text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              TravelX
            </motion.h1>

            <motion.p
              className="mt-3 text-lg tracking-[8px] text-white/90 uppercase"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Exploring Paradise...
            </motion.p>

            {/* Loading Dots */}

            <div className="mt-10 flex gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-4 w-4 rounded-full bg-white"
                  animate={{
                    y: [0, -14, 0],
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