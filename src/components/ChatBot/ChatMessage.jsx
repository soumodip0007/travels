import { useRef } from "react";
import { motion } from "framer-motion";
import BotAvatar from "./BotAvatar";

export default function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  // Capture the time once, on arrival — not on every re-render.
  const timeRef = useRef(
    message.timestamp ? new Date(message.timestamp) : new Date()
  );
  const timeLabel = timeRef.current.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      className={`mb-5 flex ${isBot ? "justify-start" : "justify-end"}`}
    >
      <div className={`flex w-full items-end gap-3 ${isBot ? "" : "justify-end"}`}>
        {isBot && (
          <div className="flex h-11 w-11 shrink-0 items-end justify-center">
            <BotAvatar size="small" />
          </div>
        )}

        <div className={`${isBot ? "max-w-[78%]" : "max-w-[75%]"} flex flex-col`}>
          <div
            className={`relative overflow-hidden rounded-3xl px-5 py-3 ${
              isBot
                ? "rounded-bl-md border border-purple-100 text-slate-800 shadow-[0_6px_18px_rgba(105,87,223,0.08)]"
                : "ml-auto rounded-br-md text-white shadow-[0_14px_35px_rgba(147,51,234,0.28)]"
            }`}
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              background: isBot
                ? "#FFFFFF"
                : "linear-gradient(135deg, #6957DF 0%, #7C3AED 55%, #A855F7 100%)",
            }}
          >
            {/* Signal edge — encodes direction: received (left) vs sent (right) */}
            <span
              className={`absolute inset-y-0 w-[3px] ${isBot ? "left-0" : "right-0"}`}
              style={{
                background: isBot
                  ? "linear-gradient(180deg, #22D3EE, #A855F7)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.15))",
              }}
            />

            {!isBot && (
              <motion.span
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
                className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-20deg]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                }}
              />
            )}

            <p
              className="relative whitespace-pre-line break-words text-[15px] font-normal leading-7"
              style={{ color: isBot ? "#1E293B" : "#FFFFFF" }}
            >
              {message.text}
            </p>
          </div>

          <p
            className={`mt-1.5 flex items-center gap-1.5 text-xs text-slate-400 ${
              isBot ? "pl-1.5" : "justify-end pr-1.5"
            }`}
          >
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: isBot ? "#A78BFA" : "#7C3AED" }}
            />
            {timeLabel}
          </p>
        </div>
      </div>
    </motion.div>
  );
}