import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import ChatWindow from "./ChatWindow";

export default function ChatBot({ loading }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  if (loading) return null;

  const R = 46;
  const CIRC = 2 * Math.PI * R;
  const cometLen = CIRC * 0.18;
  const cometGap = CIRC - cometLen;

  return (
    <>
      <style>{`
        @keyframes cb-orbit { to { transform: rotate(360deg); } }
        @keyframes cb-glow-breathe {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        .cb-orbit-group {
          transform-origin: 50% 50%;
          animation: cb-orbit linear infinite;
          animation-duration: ${hovered || open ? "1.6s" : "4.2s"};
          transition: animation-duration 0.35s ease;
        }
      `}</style>

<<<<<<< HEAD
      {/* Chat Window — bounded size, sits directly above the launcher */}
=======
      {/* Chat Window — sits just above the launcher, no overlap */}
>>>>>>> e87a54627b69eaad22aea437bcf528f0222f1fde
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-28 right-5 z-[9999] origin-bottom-right"
          >
            {/* Soft aurora glow behind the panel */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 80% 100%, rgba(124,58,237,0.35), rgba(34,211,238,0.15) 55%, transparent 75%)",
              }}
            />
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <div
        className="fixed bottom-5 right-5 z-[9999]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && !open && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.18 }}
              className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#1E1033] px-3.5 py-1.5 text-sm font-medium text-white shadow-lg"
            >
              Chat with us
              <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#1E1033]" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative flex h-[76px] w-[76px] items-center justify-center">
          <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full">
            <g className="cb-orbit-group">
              <circle
                cx="50" cy="50" r={R}
                fill="none" stroke="url(#cb-comet-gradient)"
                strokeWidth="2.2" strokeLinecap="round"
                strokeDasharray={`${cometLen} ${cometGap}`}
              />
            </g>
            <defs>
              <linearGradient id="cb-comet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
                <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F0F9FF" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close chat" : "Open chat"}
            className="relative flex h-16 w-16 items-center justify-center rounded-full text-white border border-white/10"
            style={{
              background: "linear-gradient(135deg, #3B1E7A 0%, #7C3AED 45%, #22D3EE 100%)",
              boxShadow: "0 12px 34px rgba(124,58,237,0.42), inset 0 1px 1px rgba(255,255,255,0.25)",
            }}
          >
            <div
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: "linear-gradient(135deg, #A855F7, #67E8F9)",
                animation: "cb-glow-breathe 2.6s ease-in-out infinite",
              }}
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "chat"}
                initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                transition={{ duration: 0.22 }}
                className="relative z-10 flex items-center justify-center"
              >
                {open ? <X size={26} /> : <MessageCircle size={26} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {!open && (
            <span
              className="absolute rounded-full"
              style={{
                bottom: 4, right: 4, width: 14, height: 14,
                background: "#34D399",
                border: "2px solid white",
                boxShadow: "0 0 6px rgba(52,211,153,0.8)",
              }}
            >
              <span
                className="absolute inset-0 rounded-full bg-[#34D399] animate-ping"
                style={{ animationDuration: "1.8s" }}
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
}