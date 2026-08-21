import { useEffect, useRef, useState } from "react";
import packages from "../../data/packages";
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
      text: "I'm your AI Travel Assistant. Ask me about tour packages, pricing, itineraries, sightseeing, hotels, flights, bookings and more.",
    },
  ]);

  const [typing, setTyping] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState(null);

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
      .replace(/[?!.,:;()[\]{}]/g, " ")
      .replace(/\s+/g, " ");
  };

  /*
   * Affirmation
   */
  const isAffirmation = (text) => {
    const normalized = normalizeText(text);

    return AFFIRMATIONS.some(
      (word) => normalized === word || normalized.startsWith(`${word} `),
    );
  };

  /*
   * Negation
   */
  const isNegation = (text) => {
    const normalized = normalizeText(text);

    return NEGATIONS.some(
      (word) => normalized === word || normalized.startsWith(`${word} `),
    );
  };

  /*
   * Format price
   */
  const formatPrice = (price) => {
    if (!price) {
      return "Price not available";
    }

    return `₹${Number(price).toLocaleString("en-IN")} per person`;
  };

  /*
   * Get first package option
   */
  const getPackageOption = (packageData) => {
    if (!packageData?.packages) {
      return null;
    }

    return Object.values(packageData.packages)[0] || null;
  };

  /*
   * Get duration
   */
  const getDuration = (packageData) => {
    const packageOption = getPackageOption(packageData);

    return packageOption?.duration || "Duration not available";
  };

  /*
   * Get price
   */
  const getPrice = (packageData) => {
    const packageOption = getPackageOption(packageData);

    return formatPrice(packageOption?.price);
  };

  /*
   * -----------------------------------------
   * Find chatbot intent
   * -----------------------------------------
   */
  const findIntent = (text) => {
    const normalizedText = normalizeText(text);

    let bestMatch = null;
    let bestScore = 0;

    chatBotData.forEach((item) => {
      if (!item.keywords) {
        return;
      }

      let score = 0;

      item.keywords.forEach((keyword) => {
        const normalizedKeyword = normalizeText(keyword);

        if (!normalizedKeyword) {
          return;
        }

        if (normalizedText === normalizedKeyword) {
          score += normalizedKeyword.split(" ").length * 5;
        } else if (normalizedText.includes(normalizedKeyword)) {
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
   * -----------------------------------------
   * Find package
   * -----------------------------------------
   */
  const findPackage = (text) => {
    const normalizedText = normalizeText(text);

    let bestMatch = null;
    let bestScore = 0;

    packages.forEach((packageData) => {
      let score = 0;

      /*
       * Package title
       */
      const title = normalizeText(packageData.title);

      if (normalizedText.includes(title)) {
        score += 20;
      }

      /*
       * Slug
       */
      const slug = normalizeText(packageData.slug);

      if (normalizedText.includes(slug)) {
        score += 20;
      }

      /*
       * Location
       */
      if (packageData.location) {
        const locations = packageData.location
          .split("•")
          .map((item) => normalizeText(item));

        locations.forEach((location) => {
          if (location && normalizedText.includes(location)) {
            score += 5;
          }
        });
      }

      /*
       * Individual words from title
       */
      const titleWords = title.split(" ").filter((word) => word.length > 2);

      titleWords.forEach((word) => {
        if (normalizedText.includes(word)) {
          score += 1;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        bestMatch = packageData;
      }
    });

    /*
     * Don't return random package
     */
    if (bestScore < 3) {
      return null;
    }

    return bestMatch;
  };

  /*
   * -----------------------------------------
   * Check if package list requested
   * -----------------------------------------
   */
  const isPackageRequest = (text) => {
    const normalizedText = normalizeText(text);

    const keywords = [
      "show packages",
      "show package",
      "tour packages",
      "tour package",
      "all packages",
      "all tours",
      "show tours",
      "packages",
      "package list",
      "tour list",
    ];

    return keywords.some((keyword) => normalizedText.includes(keyword));
  };

  /*
   * -----------------------------------------
   * Domestic request
   * -----------------------------------------
   */
  const isDomesticRequest = (text) => {
    const normalizedText = normalizeText(text);

    const keywords = [
      "domestic",
      "domestic tour",
      "domestic tours",
      "domestic package",
      "domestic packages",
      "india tour",
      "india tours",
    ];

    return keywords.some((keyword) => normalizedText.includes(keyword));
  };

  /*
   * -----------------------------------------
   * International request
   * -----------------------------------------
   */
  const isInternationalRequest = (text) => {
    const normalizedText = normalizeText(text);

    const keywords = [
      "international",
      "international tour",
      "international tours",
      "international package",
      "international packages",
      "foreign tour",
      "foreign tours",
      "international holiday",
      "international holidays",
    ];

    return keywords.some((keyword) => normalizedText.includes(keyword));
  };

  /*
   * -----------------------------------------
   * Get category packages
   * -----------------------------------------
   */
  const getCategoryPackages = (category) => {
    return packages.filter((packageData) => packageData.category === category);
  };

  /*
   * -----------------------------------------
   * Show category packages
   * -----------------------------------------
   */
  const getCategoryResponse = (category) => {
    const categoryPackages = getCategoryPackages(category);

    if (!categoryPackages.length) {
      return `Currently, no ${
        category === "domestic" ? "domestic" : "international"
      } tour packages are available.`;
    }

    const heading =
      category === "domestic"
        ? "Domestic Tour Packages"
        : "International Tour Packages";

    const packageList = categoryPackages
      .map(
        (packageData, index) =>
          `${index + 1}. ${packageData.title}\n   ${getDuration(packageData)}`,
      )
      .join("\n\n");

    return `${heading}

${packageList}

Please select a package by telling me its name.

For example:
"${categoryPackages[0].title}"`;
  };

  /*
   * -----------------------------------------
   * Show all categories
   * -----------------------------------------
   */
  const getAllPackagesResponse = () => {
    return `Sure. Please choose a category:

• Domestic Tours
• International Tours`;
  };

  /*
   * -----------------------------------------
   * Package overview
   * -----------------------------------------
   */
  const getOverviewResponse = (packageData) => {
    return `${packageData.title}

${packageData.overview}

Duration: ${getDuration(packageData)}

Rating: ${packageData.rating || "Not available"}

Destinations:
${packageData.location}

What would you like to know?

• Price
• Itinerary
• Sightseeing
• Inclusions
• Exclusions
• Hotels
• Flights
• Meals
• Facilities
• Booking`;
  };

  /*
   * -----------------------------------------
   * Price
   * -----------------------------------------
   */
  const getPriceResponse = (packageData) => {
    return `${packageData.title}

Price: ${getPrice(packageData)}

Duration: ${getDuration(packageData)}

The package price is based on the available package option.

Please contact Riya Tours & Travels to confirm the latest availability and final booking price.`;
  };

  /*
   * -----------------------------------------
   * Duration
   * -----------------------------------------
   */
  const getDurationResponse = (packageData) => {
    return `${packageData.title}

Duration: ${getDuration(packageData)}

Destinations:
${packageData.location}`;
  };

  /*
   * -----------------------------------------
   * Itinerary
   * -----------------------------------------
   */
  const getItineraryResponse = (packageData) => {
    const packageOption = getPackageOption(packageData);

    if (!packageOption?.itinerary?.length) {
      return "The itinerary for this package is not available.";
    }

    const itinerary = packageOption.itinerary
      .map(
        (day) =>
          `Day ${day.day}: ${day.title}

${day.description}`,
      )
      .join("\n\n");

    return `${packageData.title}

Duration: ${packageOption.duration}

Day-wise Itinerary:

${itinerary}`;
  };

  /*
   * -----------------------------------------
   * Sightseeing
   * -----------------------------------------
   */
  const getSightseeingResponse = (packageData) => {
    const packageOption = getPackageOption(packageData);

    if (!packageOption?.itinerary?.length) {
      return "Sightseeing details are not available.";
    }

    const sightseeing = packageOption.itinerary
      .filter(
        (day) =>
          day.title?.toLowerCase().includes("sightseeing") ||
          day.description?.toLowerCase().includes("visit"),
      )
      .map(
        (day) =>
          `Day ${day.day}: ${day.title}

${day.description}`,
      )
      .join("\n\n");

    if (!sightseeing) {
      return `This tour covers:

${packageData.location}

Please check the complete itinerary for the detailed sightseeing schedule.`;
    }

    return `${packageData.title}

Sightseeing Details:

${sightseeing}`;
  };

  /*
   * -----------------------------------------
   * Included
   * -----------------------------------------
   */
  const getIncludedResponse = (packageData) => {
    if (!packageData.included?.length) {
      return "Inclusion details are not available.";
    }

    return `${packageData.title}

Included in this package:

${packageData.included.map((item) => `• ${item}`).join("\n")}`;
  };

  /*
   * -----------------------------------------
   * Excluded
   * -----------------------------------------
   */
  const getExcludedResponse = (packageData) => {
    if (!packageData.excluded?.length) {
      return "Exclusion details are not available.";
    }

    return `${packageData.title}

Not included in this package:

${packageData.excluded.map((item) => `• ${item}`).join("\n")}`;
  };

  /*
   * -----------------------------------------
   * Hotels
   * -----------------------------------------
   */
  const getHotelResponse = (packageData) => {
    const accommodation = packageData.included?.find((item) =>
      item.toLowerCase().includes("accommodation"),
    );

    if (accommodation) {
      return `${packageData.title}

Accommodation is included in this package.

• ${accommodation}
• Hotel stay is included according to the tour schedule.

The exact hotel/property may depend on availability.

Please contact Riya Tours & Travels for confirmed hotel details.`;
    }

    return `Specific hotel details for ${packageData.title} are not available in the package information.

Please contact Riya Tours & Travels for hotel details.`;
  };

  /*
   * -----------------------------------------
   * Flights
   * -----------------------------------------
   */
  const getFlightResponse = (packageData) => {
    const flightExcluded = packageData.excluded?.some((item) =>
      item.toLowerCase().includes("flight"),
    );

    if (flightExcluded) {
      return `${packageData.title}

Flight tickets are NOT included in this package.

"Flight ticket" is listed under exclusions.

You can contact Riya Tours & Travels if you need help arranging flights separately.`;
    }

    return `Flight inclusion for ${packageData.title} is not specified in the package information.

Please contact Riya Tours & Travels for confirmation.`;
  };

  /*
   * -----------------------------------------
   * Meals
   * -----------------------------------------
   */
  const getMealResponse = (packageData) => {
    const meals = packageData.included?.filter((item) => {
      const value = item.toLowerCase();

      return (
        value.includes("meal") ||
        value.includes("breakfast") ||
        value.includes("lunch") ||
        value.includes("dinner") ||
        value.includes("tea")
      );
    });

    if (!meals?.length) {
      return `Meal details for ${packageData.title} are not available.`;
    }

    return `${packageData.title}

Meals included:

${meals.map((item) => `• ${item}`).join("\n")}`;
  };

  /*
   * -----------------------------------------
   * Facilities
   * -----------------------------------------
   */
  const getFacilitiesResponse = (packageData) => {
    if (!packageData.facilities?.length) {
      return `Facility details for ${packageData.title} are not available.`;
    }

    return `${packageData.title}

Facilities:

${packageData.facilities.map((facility) => `• ${facility.label}`).join("\n")}`;
  };

  /*
   * -----------------------------------------
   * Booking
   * -----------------------------------------
   */
  const getBookingResponse = (packageData) => {
    return `${packageData.title}

To book this tour, please contact Riya Tours & Travels.

Phone:
+91 89105 55711

WhatsApp:
+91 89105 55711

You can also use the enquiry option on the package page.

Before booking, please confirm:
• Availability
• Travel dates
• Final price
• Hotel availability`;
  };

  /*
   * -----------------------------------------
   * Contact
   * -----------------------------------------
   */
  const getContactResponse = () => {
    return `Riya Tours & Travels

For bookings and enquiries:

Phone:
+91 89105 55711

WhatsApp:
+91 89105 55711

You can contact us for:
• Tour packages
• Pricing
• Booking
• Travel dates
• Hotel details
• Customized requirements`;
  };

  /*
   * -----------------------------------------
   * Visa
   * -----------------------------------------
   */
  const getVisaResponse = (packageData) => {
    if (packageData.category === "domestic") {
      return `${packageData.title}

This is a domestic tour within India.

For Indian citizens, a visa is not required for domestic travel.

Please carry valid government-issued identification.`;
    }

    return `Visa requirements for ${packageData.title} depend on nationality and destination.

Please contact Riya Tours & Travels for visa assistance and current requirements.`;
  };

  /*
   * -----------------------------------------
   * Departure dates
   * -----------------------------------------
   */
  const getDepartureResponse = (packageData) => {
    return `${packageData.title}

Specific departure dates are not currently available in the package information.

Please contact Riya Tours & Travels to confirm:

• Available dates
• Seat availability
• Current price
• Booking status`;
  };

  /*
   * -----------------------------------------
   * Intent response
   * -----------------------------------------
   */
  const getIntentResponse = (packageData, intent) => {
    switch (intent) {
      case "price":
        return getPriceResponse(packageData);

      case "itinerary":
        return getItineraryResponse(packageData);

      case "sightseeing":
        return getSightseeingResponse(packageData);

      case "included":
        return getIncludedResponse(packageData);

      case "excluded":
        return getExcludedResponse(packageData);

      case "hotels":
        return getHotelResponse(packageData);

      case "flights":
        return getFlightResponse(packageData);

      case "duration":
        return getDurationResponse(packageData);

      case "booking":
        return getBookingResponse(packageData);

      case "visa":
        return getVisaResponse(packageData);

      case "meals":
        return getMealResponse(packageData);

      case "departureDates":
        return getDepartureResponse(packageData);

      case "facilities":
        return getFacilitiesResponse(packageData);

      case "contact":
        return getContactResponse();

      case "overview":
      default:
        return getOverviewResponse(packageData);
    }
  };

  /*
   * -----------------------------------------
   * Main chatbot logic
   * -----------------------------------------
   */
  const getBotReply = (message) => {
    const text = normalizeText(message);

    /*
     * -------------------------------------
     * Greeting
     * -------------------------------------
     */
    const greeting = findIntent(text);

    if (greeting?.id === 1) {
      return greeting.answer;
    }

    /*
     * -------------------------------------
     * Thank you
     * -------------------------------------
     */
    if (greeting?.id === 20) {
      return greeting.answer;
    }

    /*
     * -------------------------------------
     * Goodbye
     * -------------------------------------
     */
    if (greeting?.id === 21) {
      return greeting.answer;
    }

    /*
     * -------------------------------------
     * YES
     * -------------------------------------
     */
    if (isAffirmation(text) && selectedPackage) {
      return getOverviewResponse(selectedPackage);
    }

    /*
     * -------------------------------------
     * NO
     * -------------------------------------
     */
    if (isNegation(text)) {
      setSelectedPackage(null);

      return `No problem.

Please choose what you would like to explore:

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
     * -------------------------------------
     * SHOW ALL PACKAGES
     * -------------------------------------
     */
    if (isPackageRequest(text)) {
      setSelectedPackage(null);

      return getAllPackagesResponse();
    }

    /*
     * -------------------------------------
     * DOMESTIC
     * -------------------------------------
     */
    if (isDomesticRequest(text)) {
      setSelectedPackage(null);

      return getCategoryResponse("domestic");
    }

    /*
     * -------------------------------------
     * INTERNATIONAL
     * -------------------------------------
     */
    if (isInternationalRequest(text)) {
      setSelectedPackage(null);

      return getCategoryResponse("international");
    }

    /*
     * -------------------------------------
     * Find package
     * -------------------------------------
     */
    const matchedPackage = findPackage(text);

    /*
     * -------------------------------------
     * Find intent
     * -------------------------------------
     */
    const matchedIntent = findIntent(text);

    /*
     * -------------------------------------
     * Package found
     * -------------------------------------
     */
    if (matchedPackage) {
      setSelectedPackage(matchedPackage);

      /*
       * If user directly asks
       * package + price
       */
      if (matchedIntent?.intent) {
        return getIntentResponse(matchedPackage, matchedIntent.intent);
      }

      /*
       * Otherwise show package
       * overview only
       */
      return getOverviewResponse(matchedPackage);
    }

    /*
     * -------------------------------------
     * Intent without package
     * -------------------------------------
     */
    if (matchedIntent?.type === "intent" && !selectedPackage) {
      return `Please select a tour package first.

Once you select a package, I can provide:

• Price
• Duration
• Itinerary
• Sightseeing
• Inclusions
• Exclusions
• Hotels
• Flights
• Meals
• Facilities
• Booking

You can start by saying "show packages".`;
    }

    /*
     * -------------------------------------
     * Intent with selected package
     * -------------------------------------
     */
    if (matchedIntent?.type === "intent" && selectedPackage) {
      return getIntentResponse(selectedPackage, matchedIntent.intent);
    }

    /*
     * -------------------------------------
     * Contact without package
     * -------------------------------------
     */
    if (matchedIntent?.type === "contact") {
      return getContactResponse();
    }

    /*
     * -------------------------------------
     * Unknown
     * -------------------------------------
     */
    return `Sorry, I couldn't understand that.

Please try one of these:

• Show tour packages
• Domestic tours
• International tours
• Price
• Itinerary
• Sightseeing
• Hotels
• Flights
• Booking
• Contact`;
  };

  /*
   * -----------------------------------------
   * Send message
   * -----------------------------------------
   */
  const handleSend = (text) => {
    if (!text.trim() || typing) {
      return;
    }

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

      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

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

      <div
        className="relative z-10"
        style={{
          background: "rgba(255,255,255,0.92)",
          borderTop: "1px solid #EDE9FE",
        }}
      >
        <QuickReplies onSelect={handleSend} />
      </div>

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
