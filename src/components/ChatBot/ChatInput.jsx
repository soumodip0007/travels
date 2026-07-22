import { useState } from "react";
import { SendHorizonal } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-3">

      {/* Input */}

      <div className="relative flex-1">

        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-[15px] text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
        />

      </div>

      {/* Send Button */}

      <button
        onClick={handleSend}
        disabled={!text.trim()}
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-orange-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        <SendHorizonal
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

    </div>
  );
}