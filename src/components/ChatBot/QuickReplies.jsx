import { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

const DEFAULT_REPLIES = [
  "Show tour packages",
  "Flight prices?",
  "Hotel deals",
  "Contact details",
];

export default function QuickReplies({ replies = DEFAULT_REPLIES, onSelect }) {
  const [open, setOpen] = useState(false);

  if (!replies || replies.length === 0) return null;

  return (
    <div className="bg-gradient-to-b from-[#FBFAFF] to-[#F7F5FF] px-4 py-3">
      <style>{`
        @keyframes qr-rise {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes qr-glow-breathe {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.65; }
        }
        .qr-chip { animation: qr-rise 0.3s cubic-bezier(0.2, 0.7, 0.3, 1) both; }
        .qr-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.32s cubic-bezier(0.2, 0.7, 0.3, 1);
        }
        .qr-panel.qr-open {
          grid-template-rows: 1fr;
        }
        .qr-panel > div { overflow: hidden; }
      `}</style>

      {/* Toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 rounded-xl px-1 py-1 text-left transition-colors duration-200 hover:bg-purple-50/70"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full">
            <span
              className="absolute inset-0 rounded-full blur-[5px]"
              style={{
                background: "linear-gradient(135deg, #A855F7, #67E8F9)",
                animation: "qr-glow-breathe 2.6s ease-in-out infinite",
              }}
            />
            <Sparkles size={15} className="relative z-10 text-[#7C3AED]" />
          </span>
          <span className="text-sm font-semibold text-slate-800">Quick Questions</span>
        </span>

        <ChevronDown
          size={18}
          className="text-slate-400 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Collapsible panel */}
      <div className={`qr-panel ${open ? "qr-open" : ""}`}>
        <div>
          <div className="flex flex-wrap gap-2 pt-3">
            {replies.map((reply, index) => (
              <button
                key={reply}
                onClick={() => onSelect(reply)}
                className="qr-chip group relative overflow-hidden rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-white hover:shadow-[0_12px_28px_rgba(147,51,234,0.32)]"
                style={{ animationDelay: open ? `${index * 60}ms` : "0ms" }}
              >
                <span
                  className="absolute inset-0 -z-10 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
                  style={{ background: "linear-gradient(90deg, #6957DF, #7C3AED, #A855F7)" }}
                />
                <span className="relative">{reply}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}