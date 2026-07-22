// import { useEffect, useRef, useState } from "react";
// import chatBotData from "../data/chatbotData";

// export default function useChatBot() {
//   const bottomRef = useRef(null);

//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "bot",
//       text: "👋 Hello! Welcome to TravelX.",
//     },
//     {
//       id: 2,
//       sender: "bot",
//       text: "I'm your AI Travel Assistant. Ask me anything about tours, flights, hotels or bookings.",
//     },
//   ]);

//   const [typing, setTyping] = useState(false);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, typing]);

//   const getBotReply = (message) => {
//     const text = message.toLowerCase();

//     const matched = chatBotData.find((item) =>
//       item.keywords.some((keyword) =>
//         text.includes(keyword.toLowerCase())
//       )
//     );

//     return (
//       matched?.answer ||
//       "😔 Sorry, I couldn't understand that.\n\nTry asking about:\n\n• Packages\n• Flights\n• Hotels\n• Bus\n• Car\n• Pricing\n• Contact"
//     );
//   };

//   const sendMessage = (text) => {
//     if (!text.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       sender: "user",
//       text,
//     };

//     setMessages((prev) => [...prev, userMessage]);

//     setTyping(true);

//     setTimeout(() => {
//       setTyping(false);

//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           sender: "bot",
//           text: getBotReply(text),
//         },
//       ]);
//     }, 900);
//   };

//   const clearChat = () => {
//     setMessages([]);
//   };

//   return {
//     messages,
//     typing,
//     sendMessage,
//     clearChat,
//     bottomRef,
//   };
// }