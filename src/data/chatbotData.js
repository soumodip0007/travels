const chatBotData = [
  // =========================================================
  // GREETINGS
  // =========================================================

  {
    id: 1,
    keywords: [
      "hi",
      "hello",
      "hey",
      "hii",
      "hiii",
      "helo",
      "heyy",
      "good morning",
      "good afternoon",
      "good evening",
      "good night",
      "greetings",
      "hello there",
      "hey there",
    ],
    answer:
      "Hello! Welcome to Riya Tours & Travels. How can I help you today?",
  },

  // =========================================================
  // TOUR PACKAGES
  // =========================================================

  {
    id: 2,
    keywords: [
      "show tour packages",
      "show tour package",
      "tour packages",
      "tour package",
      "packages",
      "package",
      "all packages",
      "show packages",
      "view packages",
      "view package",
      "available packages",
      "available tours",
      "available tour packages",
      "what tours do you have",
      "what packages do you have",
      "which tours are available",
      "which packages are available",
      "tour options",
      "package options",
      "holiday packages",
      "travel packages",
      "holiday tours",
      "travel tours",
    ],
    answer:
      "Sure. Please choose a category:\n\n• Domestic Tours\n• International Tours",
  },

  // =========================================================
  // DOMESTIC TOURS
  // =========================================================

  {
    id: 3,
    keywords: [
      "domestic tour",
      "domestic tours",
      "domestic package",
      "domestic packages",
      "india tour",
      "india tours",
      "india package",
      "india packages",
      "indian tour",
      "indian tours",
      "indian package",
      "indian packages",
      "travel within india",
      "tour within india",
      "holiday in india",
      "holidays in india",
      "places in india",
      "domestic holiday",
      "domestic holidays",
      "show domestic tours",
      "show domestic packages",
      "domestic tour packages",
      "domestic travel packages",
    ],
    type: "category",
    category: "domestic",
  },

  // =========================================================
  // INTERNATIONAL TOURS
  // =========================================================

  {
    id: 4,
    keywords: [
      "international tour",
      "international tours",
      "international package",
      "international packages",
      "foreign tour",
      "foreign tours",
      "foreign package",
      "foreign packages",
      "international holiday",
      "international holidays",
      "international trip",
      "international trips",
      "foreign trip",
      "foreign trips",
      "travel abroad",
      "holiday abroad",
      "overseas tour",
      "overseas tours",
      "overseas package",
      "overseas packages",
      "show international tours",
      "show international packages",
      "international tour packages",
      "international travel packages",
    ],
    type: "category",
    category: "international",
  },

  // =========================================================
  // PRICE
  // =========================================================

  {
    id: 5,
    keywords: [
      "price",
      "prices",
      "pricing",
      "cost",
      "costs",
      "rate",
      "rates",
      "budget",
      "tour price",
      "tour prices",
      "package price",
      "package prices",
      "how much",
      "how much is the tour",
      "how much does it cost",
      "what is the price",
      "what is the cost",
      "what is the package price",
      "tour cost",
      "package cost",
      "total cost",
      "total price",
      "per person price",
      "price per person",
      "cost per person",
      "how much per person",
      "price details",
      "pricing details",
      "package pricing",
      "tour pricing",
      "budget tour",
      "cheap tour",
      "affordable tour",
    ],
    type: "intent",
    intent: "price",
  },

  // =========================================================
  // ITINERARY
  // =========================================================

  {
    id: 6,
    keywords: [
      "itinerary",
      "itineraries",
      "schedule",
      "day wise",
      "daywise",
      "day wise plan",
      "daywise plan",
      "tour plan",
      "travel plan",
      "daily plan",
      "tour schedule",
      "travel schedule",
      "trip schedule",
      "daily itinerary",
      "tour itinerary",
      "trip itinerary",
      "day by day",
      "day by day plan",
      "what happens each day",
      "what will we do each day",
      "show itinerary",
      "show tour plan",
      "show daily plan",
      "show day wise plan",
      "full itinerary",
      "complete itinerary",
      "complete tour plan",
    ],
    type: "intent",
    intent: "itinerary",
  },

  // =========================================================
  // SPECIFIC DAY ITINERARY
  // =========================================================

  {
    id: 7,
    keywords: [
      "day 1",
      "day one",
      "first day",
      "day 2",
      "day two",
      "second day",
      "day 3",
      "day three",
      "day 4",
      "day four",
      "day 5",
      "day five",
      "day 6",
      "day six",
      "day 7",
      "day seven",
      "day 8",
      "day eight",
      "day 9",
      "day nine",
      "day 10",
      "day ten",
      "day 11",
      "day eleven",
      "day 12",
      "day twelve",
      "day 13",
      "day thirteen",
      "what happens on day",
      "what is on day",
      "day details",
    ],
    type: "intent",
    intent: "dayDetails",
  },

  // =========================================================
  // SIGHTSEEING
  // =========================================================

  {
    id: 8,
    keywords: [
      "sightseeing",
      "sightseeing details",
      "places to visit",
      "places covered",
      "tourist places",
      "attractions",
      "what will i see",
      "what can i see",
      "places we visit",
      "places included",
      "tourist attractions",
      "tourist spots",
      "places of interest",
      "show sightseeing",
      "show places",
      "show attractions",
      "what places are covered",
      "which places are included",
      "where will we go",
      "where are we going",
      "tour destinations",
      "destinations",
      "destination details",
    ],
    type: "intent",
    intent: "sightseeing",
  },

  // =========================================================
  // INCLUSIONS
  // =========================================================

  {
    id: 9,
    keywords: [
      "inclusion",
      "inclusions",
      "included",
      "what is included",
      "what's included",
      "package includes",
      "included in package",
      "what does the package include",
      "what does tour include",
      "things included",
      "services included",
      "facilities included",
      "included facilities",
      "included services",
      "is hotel included",
      "is food included",
      "is transport included",
      "is train included",
      "is sightseeing included",
      "show inclusions",
      "tell me inclusions",
    ],
    type: "intent",
    intent: "included",
  },

  // =========================================================
  // EXCLUSIONS
  // =========================================================

  {
    id: 10,
    keywords: [
      "exclusion",
      "exclusions",
      "excluded",
      "what is excluded",
      "what's excluded",
      "not included",
      "package excludes",
      "what does the package exclude",
      "what does tour exclude",
      "things not included",
      "services not included",
      "extra charges",
      "additional charges",
      "additional cost",
      "extra cost",
      "hidden charges",
      "show exclusions",
      "tell me exclusions",
      "what do i have to pay extra",
    ],
    type: "intent",
    intent: "excluded",
  },

  // =========================================================
  // HOTELS
  // =========================================================

  {
    id: 11,
    keywords: [
      "hotel",
      "hotels",
      "hotel details",
      "accommodation",
      "stay",
      "where will i stay",
      "where do we stay",
      "where will we stay",
      "hotel included",
      "is hotel included",
      "hotel accommodation",
      "room",
      "rooms",
      "room details",
      "hotel facilities",
      "hotel category",
      "type of hotel",
      "what hotel",
      "which hotel",
      "stay details",
      "accommodation details",
      "overnight stay",
      "night stay",
      "show hotel details",
    ],
    type: "intent",
    intent: "hotels",
  },

  // =========================================================
  // FLIGHTS
  // =========================================================

  {
    id: 12,
    keywords: [
      "flight",
      "flights",
      "flight details",
      "air ticket",
      "air tickets",
      "flight included",
      "airfare",
      "air travel",
      "is flight included",
      "is flight ticket included",
      "flight ticket",
      "flight tickets",
      "air ticket included",
      "does package include flight",
      "does tour include flight",
      "flight cost",
      "flight price",
      "airfare included",
      "show flight details",
    ],
    type: "intent",
    intent: "flights",
  },

  // =========================================================
  // TRAIN
  // =========================================================

  {
    id: 13,
    keywords: [
      "train",
      "trains",
      "train ticket",
      "train tickets",
      "train included",
      "is train included",
      "railway",
      "rail journey",
      "train journey",
      "train travel",
      "train details",
      "train number",
      "which train",
      "what train",
      "train class",
      "sleeper class",
      "railway ticket",
      "rail ticket",
      "does package include train",
      "is railway ticket included",
    ],
    type: "intent",
    intent: "trains",
  },

  // =========================================================
  // DURATION
  // =========================================================

  {
    id: 14,
    keywords: [
      "duration",
      "how many days",
      "how long",
      "days",
      "nights",
      "tour duration",
      "trip duration",
      "package duration",
      "how many nights",
      "how long is the tour",
      "how long is the trip",
      "number of days",
      "number of nights",
      "total days",
      "total nights",
      "tour length",
      "trip length",
      "how many days is the package",
      "how many nights is the package",
    ],
    type: "intent",
    intent: "duration",
  },

  // =========================================================
  // BOOKING
  // =========================================================

  {
    id: 15,
    keywords: [
      "booking",
      "book",
      "book tour",
      "book package",
      "how to book",
      "booking details",
      "reservation",
      "reserve",
      "reserve tour",
      "reserve package",
      "how can i book",
      "how do i book",
      "i want to book",
      "i want to reserve",
      "can i book",
      "can i reserve",
      "tour booking",
      "package booking",
      "booking process",
      "booking procedure",
      "how does booking work",
      "book my tour",
      "book my trip",
    ],
    type: "intent",
    intent: "booking",
  },

  // =========================================================
  // CONTACT
  // =========================================================

  {
    id: 16,
    keywords: [
      "contact",
      "contact details",
      "contact information",
      "phone",
      "phone number",
      "mobile",
      "mobile number",
      "whatsapp",
      "whatsapp number",
      "call",
      "call you",
      "how can i contact you",
      "how do i contact you",
      "contact you",
      "customer care",
      "customer support",
      "support",
      "support number",
      "enquiry",
      "inquiry",
      "enquire",
      "ask something",
      "talk to someone",
      "talk to agent",
      "speak to agent",
      "travel agent",
      "agent contact",
    ],
    type: "contact",
    answer:
      "For bookings and enquiries, you can contact Riya Tours & Travels by phone or WhatsApp.",
  },

  // =========================================================
  // VISA
  // =========================================================

  {
    id: 17,
    keywords: [
      "visa",
      "visa details",
      "visa requirement",
      "visa requirements",
      "visa needed",
      "do i need visa",
      "is visa required",
      "visa required",
      "visa process",
      "visa assistance",
      "visa support",
      "visa application",
      "visa application process",
      "visa charges",
      "visa cost",
      "visa fee",
      "visa fees",
      "visa documents",
      "documents for visa",
      "visa information",
    ],
    type: "intent",
    intent: "visa",
  },

  // =========================================================
  // MEALS
  // =========================================================

  {
    id: 18,
    keywords: [
      "meal",
      "meals",
      "food",
      "lunch",
      "dinner",
      "breakfast",
      "food included",
      "meal included",
      "meals included",
      "is food included",
      "is breakfast included",
      "is lunch included",
      "is dinner included",
      "food provided",
      "meal provided",
      "what food is included",
      "what meals are included",
      "food details",
      "meal details",
      "meal plan",
      "food arrangement",
      "dining",
    ],
    type: "intent",
    intent: "meals",
  },

  // =========================================================
  // DEPARTURE DATES
  // =========================================================

  {
    id: 19,
    keywords: [
      "departure",
      "departure date",
      "departure dates",
      "travel date",
      "travel dates",
      "available dates",
      "tour dates",
      "trip dates",
      "package dates",
      "when is the tour",
      "when does the tour start",
      "when does the trip start",
      "tour starting date",
      "starting date",
      "start date",
      "available departure",
      "available departure dates",
      "next departure",
      "next tour",
      "next trip",
    ],
    type: "intent",
    intent: "departureDates",
  },

  // =========================================================
  // FACILITIES
  // =========================================================

  {
    id: 20,
    keywords: [
      "facilities",
      "facility",
      "amenities",
      "package facilities",
      "tour facilities",
      "what facilities are available",
      "what amenities are available",
      "package amenities",
      "tour amenities",
      "services",
      "services available",
      "tour services",
      "package services",
      "transport facility",
      "hotel facility",
      "travel facilities",
      "available facilities",
    ],
    type: "intent",
    intent: "facilities",
  },

  // =========================================================
  // OVERVIEW
  // =========================================================

  {
    id: 21,
    keywords: [
      "overview",
      "about package",
      "about tour",
      "tour details",
      "package details",
      "tell me about",
      "tell me more",
      "more information",
      "more info",
      "information about tour",
      "information about package",
      "tour information",
      "package information",
      "describe the tour",
      "describe package",
      "what is this tour",
      "what is this package",
      "give me details",
      "give me information",
      "show details",
    ],
    type: "intent",
    intent: "overview",
  },

  // =========================================================
  // TRANSPORT
  // =========================================================

  {
    id: 22,
    keywords: [
      "transport",
      "transportation",
      "transport included",
      "is transport included",
      "local transport",
      "travel transport",
      "vehicle",
      "car",
      "bus",
      "cab",
      "taxi",
      "pickup",
      "drop",
      "pick up",
      "pick up and drop",
      "transfer",
      "road transfer",
      "transport facility",
      "does package include transport",
    ],
    type: "intent",
    intent: "transport",
  },

  // =========================================================
  // PICKUP / DROP
  // =========================================================

  {
    id: 23,
    keywords: [
      "pickup",
      "pick up",
      "pick-up",
      "drop",
      "drop off",
      "dropoff",
      "pickup and drop",
      "pick up and drop",
      "airport pickup",
      "station pickup",
      "station drop",
      "hotel pickup",
      "hotel drop",
      "transfer service",
      "pickup service",
      "drop service",
    ],
    type: "intent",
    intent: "pickupDrop",
  },

  // =========================================================
  // PAYMENT
  // =========================================================

  {
    id: 24,
    keywords: [
      "payment",
      "payments",
      "pay",
      "how to pay",
      "payment method",
      "payment methods",
      "online payment",
      "cash payment",
      "card payment",
      "upi",
      "upi payment",
      "payment options",
      "how can i pay",
      "can i pay online",
      "advance payment",
      "booking amount",
      "advance amount",
      "payment details",
    ],
    type: "intent",
    intent: "payment",
  },

  // =========================================================
  // CANCELLATION
  // =========================================================

  {
    id: 25,
    keywords: [
      "cancel",
      "cancellation",
      "cancel booking",
      "cancel tour",
      "cancel package",
      "cancellation policy",
      "refund",
      "refund policy",
      "can i cancel",
      "can i cancel my booking",
      "booking cancellation",
      "tour cancellation",
      "money back",
      "refund amount",
      "refund process",
      "cancellation charges",
    ],
    type: "intent",
    intent: "cancellation",
  },

  // =========================================================
  // AGE / CHILDREN
  // =========================================================

  {
    id: 26,
    keywords: [
      "children",
      "child",
      "kids",
      "kid",
      "child price",
      "children price",
      "kids price",
      "child ticket",
      "children ticket",
      "family",
      "family tour",
      "family package",
      "child discount",
      "kids discount",
      "children discount",
      "infant",
      "baby",
    ],
    type: "intent",
    intent: "children",
  },

  // =========================================================
  // SOLO TRAVEL
  // =========================================================

  {
    id: 27,
    keywords: [
      "solo",
      "solo travel",
      "solo trip",
      "solo tour",
      "single traveler",
      "single traveller",
      "travel alone",
      "travelling alone",
      "traveling alone",
      "can i travel alone",
      "single person",
      "one person",
      "individual traveler",
    ],
    type: "intent",
    intent: "solo",
  },

  // =========================================================
  // COUPLE
  // =========================================================

  {
    id: 28,
    keywords: [
      "couple",
      "couples",
      "couple tour",
      "couple package",
      "honeymoon",
      "honeymoon package",
      "honeymoon tour",
      "romantic trip",
      "romantic tour",
      "for couples",
      "couple travel",
      "travel with partner",
    ],
    type: "intent",
    intent: "couple",
  },

  // =========================================================
  // FAMILY
  // =========================================================

  {
    id: 29,
    keywords: [
      "family",
      "family tour",
      "family package",
      "family trip",
      "family vacation",
      "family holiday",
      "tour with family",
      "travel with family",
      "trip with family",
      "family friendly",
      "family friendly tour",
    ],
    type: "intent",
    intent: "family",
  },

  // =========================================================
  // GROUP TOUR
  // =========================================================

  {
    id: 30,
    keywords: [
      "group",
      "group tour",
      "group package",
      "group travel",
      "group trip",
      "travel group",
      "large group",
      "group booking",
      "group booking price",
      "group discount",
      "corporate tour",
      "corporate trip",
      "school trip",
      "college trip",
    ],
    type: "intent",
    intent: "group",
  },

  // =========================================================
  // BEST TOUR
  // =========================================================

  {
    id: 31,
    keywords: [
      "best tour",
      "best package",
      "best tour package",
      "which tour is best",
      "which package is best",
      "suggest a tour",
      "suggest package",
      "recommend a tour",
      "recommend package",
      "which tour should i choose",
      "which package should i choose",
      "help me choose",
      "what do you recommend",
      "tour recommendation",
      "package recommendation",
    ],
    type: "intent",
    intent: "recommendation",
  },

  // =========================================================
  // BUDGET
  // =========================================================

  {
    id: 32,
    keywords: [
      "low budget",
      "cheap package",
      "cheap tour",
      "budget package",
      "budget tour",
      "affordable package",
      "affordable tour",
      "economical tour",
      "economical package",
      "tour under",
      "package under",
      "tour below",
      "package below",
      "best tour under budget",
    ],
    type: "intent",
    intent: "budget",
  },

  // =========================================================
  // DISTANCE
  // =========================================================

  {
    id: 33,
    keywords: [
      "distance",
      "how far",
      "how far is",
      "travel distance",
      "total distance",
      "road distance",
      "distance covered",
      "how much travel",
      "how much distance",
      "distance between places",
    ],
    type: "intent",
    intent: "distance",
  },

  // =========================================================
  // WEATHER
  // =========================================================

  {
    id: 34,
    keywords: [
      "weather",
      "temperature",
      "climate",
      "how is the weather",
      "weather during tour",
      "weather during trip",
      "best weather",
      "weather condition",
      "is it hot",
      "is it cold",
      "will it rain",
      "rain",
      "summer",
      "winter",
      "monsoon",
    ],
    type: "intent",
    intent: "weather",
  },

  // =========================================================
  // BEST TIME
  // =========================================================

  {
    id: 35,
    keywords: [
      "best time",
      "best time to visit",
      "best month",
      "best months",
      "when should i visit",
      "when is the best time",
      "ideal time",
      "ideal month",
      "best season",
      "travel season",
      "tour season",
      "holiday season",
    ],
    type: "intent",
    intent: "bestTime",
  },

  // =========================================================
  // DOCUMENTS
  // =========================================================

  {
    id: 36,
    keywords: [
      "documents",
      "documents required",
      "required documents",
      "travel documents",
      "what documents do i need",
      "documents needed",
      "id proof",
      "identity proof",
      "identity documents",
      "passport",
      "passport required",
      "aadhaar",
      "pan card",
      "voter id",
      "photo id",
    ],
    type: "intent",
    intent: "documents",
  },

  // =========================================================
  // LUGGAGE
  // =========================================================

  {
    id: 37,
    keywords: [
      "luggage",
      "bag",
      "bags",
      "baggage",
      "baggage allowance",
      "luggage allowance",
      "how much luggage",
      "how many bags",
      "luggage limit",
      "bag limit",
      "extra luggage",
      "extra baggage",
    ],
    type: "intent",
    intent: "luggage",
  },

  // =========================================================
  // SAFETY
  // =========================================================

  {
    id: 38,
    keywords: [
      "safe",
      "safety",
      "is it safe",
      "is the tour safe",
      "safe travel",
      "travel safety",
      "security",
      "is it safe for family",
      "is it safe for women",
      "safety arrangements",
    ],
    type: "intent",
    intent: "safety",
  },

  // =========================================================
  // SPECIAL REQUEST
  // =========================================================

  {
    id: 39,
    keywords: [
      "special request",
      "special requests",
      "custom package",
      "custom tour",
      "custom trip",
      "custom itinerary",
      "personalized tour",
      "personalised tour",
      "modify package",
      "change itinerary",
      "customize tour",
      "customise tour",
      "can i customize",
      "can i customise",
      "tailor made tour",
      "tailor made package",
    ],
    type: "intent",
    intent: "customPackage",
  },

  // =========================================================
  // WHATSAPP
  // =========================================================

  {
    id: 40,
    keywords: [
      "whatsapp",
      "whatsapp number",
      "whatsapp contact",
      "whatsapp booking",
      "book through whatsapp",
      "contact through whatsapp",
      "send whatsapp",
      "whatsapp enquiry",
      "whatsapp inquiry",
    ],
    type: "contact",
    intent: "whatsapp",
    answer:
      "You can contact Riya Tours & Travels through WhatsApp for bookings and enquiries.",
  },

  // =========================================================
  // WEBSITE
  // =========================================================

  {
    id: 41,
    keywords: [
      "website",
      "website link",
      "site",
      "website details",
      "tour website",
      "where can i see packages",
      "where can i view packages",
      "show me website",
    ],
    type: "intent",
    intent: "website",
  },

  // =========================================================
  // THANK YOU
  // =========================================================

  {
    id: 42,
    keywords: [
      "thank you",
      "thanks",
      "thank",
      "thanks a lot",
      "thank you so much",
      "many thanks",
      "appreciate it",
      "that's helpful",
      "that is helpful",
      "helpful",
    ],
    answer:
      "You're welcome! If you need any help with tour packages, pricing, itinerary, hotels, sightseeing, or booking, feel free to ask.",
  },

  // =========================================================
  // BYE
  // =========================================================

  {
    id: 43,
    keywords: [
      "bye",
      "goodbye",
      "good bye",
      "see you",
      "see you later",
      "talk to you later",
      "i am leaving",
      "exit",
    ],
    answer:
      "Thank you for contacting Riya Tours & Travels. Have a wonderful day!",
  },

  // =========================================================
  // POSITIVE RESPONSE
  // =========================================================

  {
    id: 44,
    keywords: [
      "yes",
      "yeah",
      "yep",
      "yup",
      "sure",
      "okay",
      "ok",
      "please",
      "of course",
      "sounds good",
      "yes please",
    ],
    type: "affirmation",
  },

  // =========================================================
  // NEGATIVE RESPONSE
  // =========================================================

  {
    id: 45,
    keywords: [
      "no",
      "nope",
      "nah",
      "not now",
      "no thanks",
      "no thank you",
      "not interested",
      "maybe later",
    ],
    type: "negation",
  },

  // =========================================================
  // HELP
  // =========================================================

  {
    id: 46,
    keywords: [
      "help",
      "help me",
      "what can you do",
      "what can i ask",
      "how can you help",
      "what do you know",
      "what information can you provide",
      "options",
      "menu",
      "show options",
    ],
    answer:
      "I can help you with:\n\n• Tour Packages\n• Domestic Tours\n• International Tours\n• Pricing\n• Itinerary\n• Sightseeing\n• Hotels\n• Meals\n• Transport\n• Inclusions\n• Exclusions\n• Booking\n• Payment\n• Contact Details",
  },

  // =========================================================
  // GENERAL TRAVEL QUESTIONS
  // =========================================================

  {
    id: 47,
    keywords: [
      "travel",
      "trip",
      "holiday",
      "vacation",
      "tour",
      "journey",
      "travel plan",
      "holiday plan",
      "vacation plan",
    ],
    answer:
      "I can help you find suitable tour packages. You can ask me about Domestic Tours, International Tours, pricing, itinerary, sightseeing, hotels, inclusions, exclusions, or booking.",
  },

  // =========================================================
  // DIRECT PACKAGE SELECTION
  // =========================================================

  {
    id: 48,
    keywords: [
      "select package",
      "choose package",
      "select a package",
      "choose a package",
      "which package",
      "show me a package",
      "show package",
      "give me package",
      "give package",
      "i want a package",
      "i need a package",
      "i want tour package",
      "i need tour package",
    ],
    type: "packageSelection",
  },
];

export default chatBotData;
