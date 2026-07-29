import { useState, useRef } from "react";
import { SendHorizonal } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const [launching, setLaunching] = useState(false);
  const timeoutRef = useRef(null);

  const canSend = !!text.trim();

  const handleSend = () => {
    if (!canSend || launching) return;

    onSend(text);
    setText("");
    setLaunching(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setLaunching(false), 420);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const R = 22;
  const CIRC = 2 * Math.PI * R;
  const cometLen = CIRC * 0.22;
  const cometGap = CIRC - cometLen;

  return (
    <div className="flex items-center gap-3">
      <style>{`
        @keyframes ci-runway-pulse {
          0%, 100% { opacity: 0.25; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes ci-orbit { to { transform: rotate(360deg); } }
        .ci-orbit-group {
          transform-origin: 50% 50%;
          animation: ci-orbit linear infinite;
          animation-duration: ${focused ? "2.2s" : "5s"};
        }
      `}</style>

      {/* Input */}
      <div className="relative flex-1 pb-2.5">
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full rounded-full border bg-white px-5 py-3 text-[15px] text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 shadow-sm"
          style={{
            borderColor: focused ? "#7C3AED" : "#E9D5FF",
            boxShadow: focused
              ? "0 0 0 4px rgba(168,85,247,0.16), 0 1px 2px rgba(0,0,0,0.03)"
              : "0 1px 2px rgba(0,0,0,0.03)",
          }}
        />

        {/* Runway lights — activate on focus, guiding the eye toward send */}
        {/* <div className="pointer-events-none absolute bottom-0 left-5 right-6 flex items-center justify-between">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="h-[3px] w-[3px] rounded-full"
              style={{
                background:
                  i % 3 === 0
                    ? "#22D3EE"
                    : i % 3 === 1
                    ? "#A855F7"
                    : "#7C3AED",
                opacity: focused ? undefined : 0.15,
                animation: focused
                  ? `ci-runway-pulse 1.3s ease-in-out ${i * 0.07}s infinite`
                  : "none",
              }}
            />
          ))}
        </div> */}
      </div>

      {/* Send Button */}
      <div className="relative flex h-[54px] w-[54px] items-center justify-center">
        {/* Comet halo — same family signature, only lit when a message is ready */}
        {canSend && (
          <svg viewBox="0 0 60 60" className="pointer-events-none absolute inset-0 h-full w-full">
            <g className="ci-orbit-group">
              <circle
                cx="30" cy="30" r={R}
                fill="none" stroke="url(#ci-comet)"
                strokeWidth="2" strokeLinecap="round"
                strokeDasharray={`${cometLen} ${cometGap}`}
              />
            </g>
            <defs>
              <linearGradient id="ci-comet" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
                <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F0F9FF" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        )}

        <button
          onClick={handleSend}
          disabled={!canSend}
          aria-label="Send message"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40"
          style={{
            background: "linear-gradient(135deg, #6957DF 0%, #7C3AED 50%, #A855F7 100%)",
            boxShadow: canSend
              ? "0 14px 32px rgba(147,51,234,0.42)"
              : "0 8px 20px rgba(147,51,234,0.2)",
            transform: canSend && !launching ? "translateY(0) scale(1)" : "scale(1)",
          }}
        >
          <SendHorizonal
            size={20}
            className="transition-all duration-300 ease-out group-hover:translate-x-1"
            style={{
              transform: launching
                ? "translate(14px, -12px) rotate(35deg) scale(0.6)"
                : undefined,
              opacity: launching ? 0 : 1,
              transition: launching
                ? "transform 0.42s cubic-bezier(0.3,0,0.7,1), opacity 0.42s ease"
                : "transform 0.3s, opacity 0.2s",
            }}
          />
        </button>
      </div>
    </div>
  );
}