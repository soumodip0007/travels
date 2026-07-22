import { Sparkles } from "lucide-react";

export default function QuickReplies({ replies, onSelect }) {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">

      <div className="mb-3 flex items-center gap-2">

        <Sparkles
          size={16}
          className="text-sky-600"
        />

        <span className="text-sm font-semibold text-slate-700">
          Quick Questions
        </span>

      </div>

      <div className="flex flex-wrap gap-2">

        {replies.map((reply, index) => (
          <button
            key={index}
            onClick={() => onSelect(reply)}
            className="
              rounded-full
              border
              border-sky-200
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-sky-500
              hover:bg-gradient-to-r
              hover:from-sky-600
              hover:to-orange-500
              hover:text-white
              hover:shadow-lg
            "
          >
            {reply}
          </button>
        ))}

      </div>

    </div>
  );
}