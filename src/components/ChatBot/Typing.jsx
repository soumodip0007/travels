import { motion } from "framer-motion";
import BotAvatar from "./BotAvatar";

export default function Typing() {
  return (
    <div className="flex items-end gap-3">
      <BotAvatar />

      <div className="rounded-2xl rounded-bl-md border border-sky-100 bg-white px-4 py-3 shadow-md">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-orange-500"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: dot * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}