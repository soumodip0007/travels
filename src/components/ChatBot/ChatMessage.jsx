import { motion } from "framer-motion";
import BotAvatar from "./BotAvatar";

export default function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"} mb-5`}
    >
      <div
        className={`flex items-end gap-3 w-full ${
          isBot ? "" : "justify-end"
        }`}
      >
        {/* Bot Avatar */}
        {isBot && (
          <div className="flex h-11 w-11 shrink-0 items-end justify-center">
            <BotAvatar size="small" />
          </div>
        )}

        {/* Message */}
        <div
          className={`${
            isBot ? "max-w-[78%]" : "max-w-[75%]"
          } flex flex-col`}
        >
          <div
            className={`rounded-3xl px-5 py-3 shadow-lg ${
              isBot
                ? "rounded-bl-md border border-sky-100 bg-white text-slate-700"
                : "ml-auto rounded-br-md bg-gradient-to-r from-sky-600 to-orange-500 text-white"
            }`}
          >
            <p className="whitespace-pre-line break-words text-[15px] leading-7">
              {message.text}
            </p>
          </div>

          <p
            className={`mt-1 text-xs text-slate-400 ${
              isBot ? "pl-1 text-left" : "pr-1 text-right"
            }`}
          >
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
}