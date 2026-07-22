import { Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function BotAvatar({ size = "normal" }) {
  const isSmall = size === "small";

  return (
    <motion.div
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-orange-500 shadow-lg ${
        isSmall ? "h-10 w-10" : "h-14 w-14"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500 to-orange-400 opacity-40 blur-md"></div>

      {/* Icon */}
      <Plane
        className="relative z-10 -rotate-45 text-white"
        size={isSmall ? 18 : 26}
      />

      {/* Online Indicator */}
      <span
        className={`absolute bottom-0 right-0 rounded-full border-2 border-white bg-green-500 ${
          isSmall ? "h-3 w-3" : "h-4 w-4"
        }`}
      ></span>
    </motion.div>
  );
}