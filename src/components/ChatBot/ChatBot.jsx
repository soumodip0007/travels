import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import ChatWindow from "./ChatWindow";

export default function ChatBot({ loading }) {

  if (loading) return null;

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed bottom-24 right-4 z-[9999]"
          >
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-orange-500 text-white shadow-[0_10px_40px_rgba(14,165,233,0.4)]"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Pulse Ring */}
      {!open && (
        <span className="pointer-events-none fixed bottom-8 right-6 z-[9998] h-16 w-16 animate-ping rounded-full bg-sky-400 opacity-30"></span>
      )}
    </>
  );
}