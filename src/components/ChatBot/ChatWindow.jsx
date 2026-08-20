import { useEffect, useRef, useState } from "react";
import chatBotData from "../../data/chatbotData";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickReplies from "./QuickReplies";
import Typing from "./Typing";
import BotAvatar from "./BotAvatar";

const AFFIRMATIONS = [
  "yes",
  "yeah",
  "yup",
  "sure",
  "ok",
  "okay",
  "please",
  "yep",
];

const NEGATIONS = ["no", "nope", "nah", "not now", "no thanks"];

export default function ChatWindow() {
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! Welcome to Riya Tours & Travels.",
    },
    {
      id: 2,
      sender: "bot",
      text: "I'm your AI Travel Assistant. Ask me about our tour packages, pricing, itineraries, sightseeing, inclusions, bookings and more.",
    },
  ]);

  const [typing, setTyping] = useState(false);
  const [lastTopic, setLastTopic] = useState(null);
  const [lastIntent, setLastIntent] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  /*
   * Normalize text
   */
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[?!.,]/g, " ")
      .replace(/\s+/g, " ");
  };

  /*
   * Check affirmation
   */
  const isAffirmation = (text) => {
    const normalized = normalizeText(text);

    return AFFIRMATIONS.some(
      (word) => normalized === word || normalized.startsWith(`${word} `),
    );
  };

  /*
   * Check negation
   */
  const isNegation = (text) => {
    const normalized = normalizeText(text);

    return NEGATIONS.some(
      (word) => normalized === word || normalized.startsWith(`${word} `),
    );
  };

  /*
   * Find package based on package keywords
   */
  const findPackage = (text) => {
    const normalizedText = normalizeText(text);

    let bestMatch = null;
    let bestScore = 0;

    chatBotData.forEach((item) => {
      if (!item.keywords || !Array.isArray(item.keywords)) {
        return;
      }

      let score = 0;

      item.keywords.forEach((keyword) => {
        const normalizedKeyword = normalizeText(keyword);

        if (!normalizedKeyword) return;

        /*
         * Exact phrase gets higher priority
         */
        if (normalizedText.includes(normalizedKeyword)) {
          score += normalizedKeyword.split(" ").length;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    });

    return bestMatch;
  };

  /*
   * Find intent inside a package
   */
  const findIntent = (packageData, text) => {
    if (!packageData?.intents) {
      return null;
    }

    const normalizedText = normalizeText(text);

    let bestIntent = null;
    let bestScore = 0;

    Object.entries(packageData.intents).forEach(([intentName, intentData]) => {
      if (!intentData?.keywords) return;

      let score = 0;

      intentData.keywords.forEach((keyword) => {
        const normalizedKeyword = normalizeText(keyword);

        if (!normalizedKeyword) return;

        if (normalizedText.includes(normalizedKeyword)) {
          score += normalizedKeyword.split(" ").length;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        bestIntent = intentName;
      }
    });

    return bestIntent;
  };

  /*
   * Get overview response
   */
  const getOverviewResponse = (packageData) => {
    if (!packageData) {
      return null;
    }

    /*
     * If overview intent exists,
     * use its response.
     */
    if (packageData.intents?.overview?.response) {
      return packageData.intents.overview.response;
    }

    /*
     * Otherwise generate a short response
     * from summary data.
     */
    const summary = packageData.summary;

    if (!summary) {
      return packageData.fallback || "Please ask me something about this tour.";
    }

    return `${packageData.topic || "Tour Package"}

Duration: ${summary.duration || "Not available"}
Price: ${summary.price || "Please contact Riya Tours & Travels"}
Rating: ${summary.rating || "Not available"}

Destinations:
${summary.destinations || "Please contact Riya Tours & Travels for destination details"}

You can ask me about:
• Price
• Itinerary
• Sightseeing
• Inclusions
• Exclusions
• Booking`;
  };

  /*
   * Get chatbot reply
   */
  const getBotReply = (message) => {
    const text = normalizeText(message);

    /*
     * --------------------------------
     * 1. Handle YES
     * --------------------------------
     */
    if (isAffirmation(text) && lastTopic) {
      if (lastTopic.intents?.[lastIntent]?.followUp) {
        return lastTopic.intents[lastIntent].followUp;
      }

      return getOverviewResponse(lastTopic);
    }

    /*
     * --------------------------------
     * 2. Handle NO
     * --------------------------------
     */
    if (isNegation(text) && lastTopic) {
      setLastTopic(null);
      setLastIntent(null);

      return `No problem.

How can I help you?

• Tour Packages
• Pricing
• Itinerary
• Sightseeing
• Inclusions
• Exclusions
• Booking
• Flights
• Hotels
• Contact Details`;
    }

    /*
     * --------------------------------
     * 3. Find package
     * --------------------------------
     */
    const matchedPackage = findPackage(text);

    /*
     * No package found
     */
    if (!matchedPackage) {
      setLastTopic(null);
      setLastIntent(null);

      return `Sorry, I couldn't understand that.

Please ask me about:

• Tour Packages
• Domestic Tours
• International Tours
• Pricing
• Itinerary
• Sightseeing
• Hotels
• Flights
• Booking
• Contact Details`;
    }

    /*
     * --------------------------------
     * 4. Find intent
     * --------------------------------
     */
    const matchedIntent = findIntent(matchedPackage, text);

    /*
     * Save current topic
     */
    setLastTopic(matchedPackage);
    setLastIntent(matchedIntent);

    /*
     * --------------------------------
     * 5. Specific intent found
     * --------------------------------
     */
    if (matchedIntent) {
      const intentData = matchedPackage.intents?.[matchedIntent];

      if (intentData?.response) {
        return intentData.response;
      }
    }

    /*
     * --------------------------------
     * 6. No specific intent
     * → Return overview
     * --------------------------------
     */
    return getOverviewResponse(matchedPackage);
  };

  /*
   * Handle user message
   */
  const handleSend = (text) => {
    if (!text.trim() || typing) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: reply,
      };

      setTyping(false);

      setMessages((prev) => [...prev, botMessage]);
    }, 700);
  };

  return (
    <div
      className="relative flex h-[min(650px,80vh)] w-[min(390px,90vw)] flex-col overflow-hidden rounded-[30px] border border-white/60 bg-white"
      style={{
        boxShadow:
          "0 24px 70px rgba(105,87,223,0.28), 0 4px 16px rgba(124,58,237,0.12), inset 0 0 0 1px rgba(255,255,255,0.4)",
      }}
    >
      <style>{`
        @keyframes cw-drift {
          0% {
            transform: translateX(-6%);
          }

          100% {
            transform: translateX(6%);
          }
        }

        @keyframes cw-header-shift {
          0%, 100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes cw-orb-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-8px, 10px) scale(1.08);
          }
        }

        @keyframes cw-orb-float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(10px, -6px) scale(0.95);
          }
        }

        @keyframes cw-shadow-breathe {
          0%, 100% {
            box-shadow:
              0 24px 70px rgba(105,87,223,0.28),
              0 4px 16px rgba(124,58,237,0.12);
          }

          50% {
            box-shadow:
              0 26px 80px rgba(124,58,237,0.36),
              0 6px 20px rgba(168,85,247,0.16);
          }
        }

        .cw-shell {
          animation:
            cw-shadow-breathe
            5s ease-in-out infinite;
        }
      `}</style>

      <div className="cw-shell absolute inset-0 rounded-[30px] pointer-events-none" />

      {/* Header */}

      <div
        className="relative z-10 overflow-hidden px-5 pb-5 pt-5"
        style={{
          background:
            "linear-gradient(120deg, #6957DF 0%, #7C3AED 35%, #A855F7 65%, #7C3AED 100%)",
          backgroundSize: "220% 220%",
          animation: "cw-header-shift 7s ease-in-out infinite",
        }}
      >
        <div
          className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-md"
          style={{
            animation: "cw-orb-float 6s ease-in-out infinite",
          }}
        />

        <div
          className="absolute -left-6 bottom-0 h-20 w-20 rounded-full bg-[#22D3EE]/20 blur-xl"
          style={{
            animation: "cw-orb-float-2 8s ease-in-out infinite",
          }}
        />

        <svg
          viewBox="0 0 400 100"
          className="pointer-events-none absolute inset-x-0 top-2 h-full w-[112%] opacity-25"
          style={{
            animation: "cw-drift 9s ease-in-out infinite alternate",
          }}
        >
          <path
            d="M -20 70 Q 200 -10 420 60"
            fill="none"
            stroke="white"
            strokeWidth="1.4"
            strokeDasharray="1 9"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 flex items-center gap-4">
          <BotAvatar />

          <div>
            <h2 className="text-lg font-bold tracking-tight text-white">
              Travel Assistant
            </h2>

            <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />

              <span className="text-xs font-medium tracking-wide text-white/90">
                Online now
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header separator */}

      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

      {/* Messages */}

      <div
        className="relative z-10 flex-1 space-y-4 overflow-y-auto p-5"
        style={{
          background:
            "linear-gradient(180deg, #FBFAFF 0%, #F5F2FF 100%), radial-gradient(circle, rgba(124,58,237,0.10) 1px, transparent 1px)",
          backgroundSize: "auto, 22px 22px",
        }}
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {typing && <Typing />}

        <div ref={bottomRef} />
      </div>

      {/* Quick Replies */}

      <div
        className="relative z-10"
        style={{
          background: "rgba(255,255,255,0.92)",
          borderTop: "1px solid #EDE9FE",
        }}
      >
        <QuickReplies onSelect={handleSend} />
      </div>

      {/* Input */}

      <div
        className="relative z-10 p-4 backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.97)",
          borderTop: "1px solid #EDE9FE",
        }}
      >
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
