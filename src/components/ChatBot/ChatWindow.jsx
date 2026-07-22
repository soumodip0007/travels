import { useEffect, useRef, useState } from "react";
import chatBotData from "../../data/chatbotData";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickReplies from "./QuickReplies";
import Typing from "./Typing";
import BotAvatar from "./BotAvatar";

const AFFIRMATIONS = ["yes", "yeah", "yup", "sure", "ok", "okay", "please", "yep"];
const NEGATIONS = ["no", "nope", "nah", "not now", "no thanks"];

export default function ChatWindow() {
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hello! Welcome to TravelX.",
    },
    {
      id: 2,
      sender: "bot",
      text: "I'm your AI Travel Assistant. Ask me anything about tours, flights, hotels or bookings.",
    },
  ]);

  const [typing, setTyping] = useState(false);

  // Tracks the last topic the bot successfully answered, so short
  // follow-ups like "yes" / "no" can be understood in context.
  const [lastTopic, setLastTopic] = useState(null);

  // Auto Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const isAffirmation = (text) =>
    AFFIRMATIONS.some((word) => text === word || text.startsWith(word + " "));

  const isNegation = (text) =>
    NEGATIONS.some((word) => text === word || text.startsWith(word + " "));

  const getBotReply = (message) => {
    const text = message.toLowerCase().trim();

    const matched = chatBotData.find((item) =>
      item.keywords.some((keyword) => text.includes(keyword.toLowerCase()))
    );

    // 1. Direct keyword match — answer normally and remember the topic.
    if (matched) {
      setLastTopic(matched);
      return matched.answer;
    }

    // 2. Short affirmation ("yes") following a known topic.
    if (isAffirmation(text) && lastTopic) {
      if (lastTopic.followUp) {
        return lastTopic.followUp;
      }
      return `Great! 😊 Could you tell me a bit more about what you'd like to know regarding ${lastTopic.topic || "that"}? For example, dates, budget, or number of travelers.`;
    }

    // 3. Short negation ("no") following a known topic.
    if (isNegation(text) && lastTopic) {
      setLastTopic(null);
      return "No worries! Is there something else I can help you with? You can ask about Tour Packages, Flights, Hotels, Bus & Car, Domestic or International Tours, Pricing, or Contact Details.";
    }

    // 4. Nothing matched and no context to fall back on.
    setLastTopic(null);
    return "😔 Sorry, I couldn't understand that.\n\nPlease ask me about:\n\n• Tour Packages\n• Flights\n• Hotels\n• Bus & Car\n• Domestic Tours\n• International Tours\n• Pricing\n• Contact Details";
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotReply(text),
      };

      setTyping(false);

      setMessages((prev) => [...prev, botReply]);
    }, 900);
  };

  return (
    <div className="flex h-[min(650px,80vh)] w-[min(390px,90vw)] flex-col overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 p-5">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10"></div>

        <div className="flex items-center gap-4">
          <BotAvatar />

          <div>
            <h2 className="text-lg font-bold text-white">Travel Assistant</h2>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm text-white/90">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-5">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {typing && <Typing />}

        <div ref={bottomRef} />
      </div>

      {/* Quick Replies */}
      <div className="border-t border-slate-200 bg-white px-4 py-3">
        <QuickReplies onSelect={handleSend} />
      </div>

      {/* Input */}
      <div className="border-t border-slate-200 bg-white p-4">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}