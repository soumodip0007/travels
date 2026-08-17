const chatBotData = [
  {
    "id": 1,
    "keywords": [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good evening"
    ],
    "answer": " Hello! Welcome to TravelX. I'm your virtual travel assistant. How can I help you today?"
  },
  {
    "id": 2,
    "keywords": [
      "tour",
      "package",
      "packages",
      "trip",
      "holiday",
      "vacation"
    ],
    "answer": " We offer Domestic Tours, International Tours, Honeymoon Packages, Family Tours, Adventure Tours and Customized Packages. Which destination are you looking for?"
  },
  {
    "id": 3,
    "keywords": [
      "domestic",
      "india",
      "indian"
    ],
    "answer": " Our domestic destinations include Kashmir, Meghalaya, Goa, Himachal Pradesh, Rajasthan, Kerala, Andaman, Sikkim, South India, Leh Ladakh and many more. Tell me a destination name to know more."
  },
  {
    "id": 4,
    "keywords": [
      "international",
      "abroad",
      "foreign",
      "overseas"
    ],
    "answer": " Our international packages include Nepal, Thailand, Vietnam, Singapore, Malaysia, Sri Lanka, Kazakhstan, Uzbekistan and many more. Tell me a destination name to know more."
  },
  {
    "id": 5,
    "keywords": [
      "ajanta",
      "ajanta ellora mumbai goa",
      "ellora",
      "goa",
      "mumbai"
    ],
    "answer": " Ajanta Ellora Mumbai Goa Tour Package\n\n Explore the highlights of Ajanta Ellora Mumbai Goa with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 6,
    "keywords": [
      "madhya",
      "madhya pradesh",
      "pradesh"
    ],
    "answer": " Madhya Pradesh Tour Package\n\n Explore the highlights of Madhya Pradesh with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 7,
    "keywords": [
      "andaman"
    ],
    "answer": " Andaman Tour Package\n\n Explore the highlights of Andaman with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 8,
    "keywords": [
      "arunachal",
      "arunachal pradesh",
      "pradesh"
    ],
    "answer": " Arunachal Pradesh Tour Package\n\n Explore the highlights of Arunachal Pradesh with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 9,
    "keywords": [
      "ayodhya"
    ],
    "answer": " Ayodhya Tour Package\n\n Explore the highlights of Ayodhya with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 10,
    "keywords": [
      "five",
      "five joytirlinga",
      "joytirlinga"
    ],
    "answer": " Five Joytirlinga Tour Package\n\n Explore the highlights of Five Joytirlinga with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 11,
    "keywords": [
      "himachal",
      "himachal pradesh",
      "pradesh"
    ],
    "answer": " Himachal Pradesh Tour Package\n\n Explore the highlights of Himachal Pradesh with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 12,
    "keywords": [
      "koraput"
    ],
    "answer": " Koraput Tour Package\n\n Explore the highlights of Koraput with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 13,
    "keywords": [
      "nagaland",
      "nagaland tripura",
      "tripura"
    ],
    "answer": " Nagaland Tripura Tour Package\n\n Explore the highlights of Nagaland Tripura with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 14,
    "keywords": [
      "kashmir",
      "offbeat",
      "offbeat kashmir"
    ],
    "answer": " Offbeat Kashmir Tour Package\n\n Explore the highlights of Offbeat Kashmir with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 15,
    "keywords": [
      "darjeeling",
      "pelling",
      "pelling ravangla darjeeling",
      "ravangla"
    ],
    "answer": " Pelling Ravangla Darjeeling Tour Package\n\n Explore the highlights of Pelling Ravangla Darjeeling with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 16,
    "keywords": [
      "rajasthan"
    ],
    "answer": " Rajasthan Tour Package\n\n Explore the highlights of Rajasthan with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 17,
    "keywords": [
      "india",
      "south",
      "south india"
    ],
    "answer": " South India Tour Package\n\n Explore the highlights of South India with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 18,
    "keywords": [
      "ladakh",
      "leh",
      "valley",
      "valley of leh ladakh"
    ],
    "answer": " Valley of Leh Ladakh Tour Package\n\n Explore the highlights of Valley of Leh Ladakh with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 19,
    "keywords": [
      "hyderabad",
      "vizag",
      "vizag hyderabad"
    ],
    "answer": " Vizag Hyderabad Tour Package\n\n Explore the highlights of Vizag Hyderabad with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 20,
    "keywords": [
      "kashmir"
    ],
    "answer": " Kashmir Tour Package\n\n Explore the highlights of Kashmir with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 21,
    "keywords": [
      "hul",
      "kinnaur",
      "kinnaur la hul spiti",
      "spiti"
    ],
    "answer": " Kinnaur La Hul Spiti Tour Package\n\n Explore the highlights of Kinnaur La Hul Spiti with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 22,
    "keywords": [
      "meghalaya"
    ],
    "answer": " Meghalaya Tour Package\n\n Explore the highlights of Meghalaya with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 23,
    "keywords": [
      "india",
      "north",
      "north india"
    ],
    "answer": " North India Tour Package\n\n Explore the highlights of North India with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 24,
    "keywords": [
      "north",
      "north sikkim",
      "sikkim"
    ],
    "answer": " North Sikkim Tour Package\n\n Explore the highlights of North Sikkim with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 25,
    "keywords": [
      "goa"
    ],
    "answer": " Goa Tour Package\n\n Explore the highlights of Goa with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 26,
    "keywords": [
      "karnataka"
    ],
    "answer": " Karnataka Tour Package\n\n Explore the highlights of Karnataka with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 27,
    "keywords": [
      "goa",
      "goa with lakshadweep",
      "lakshadweep",
      "with"
    ],
    "answer": " Goa with Lakshadweep Tour Package\n\n Explore the highlights of Goa with Lakshadweep with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 28,
    "keywords": [
      "kanyakumari",
      "kerala",
      "kerala with kanyakumari",
      "with"
    ],
    "answer": " Kerala with Kanyakumari Tour Package\n\n Explore the highlights of Kerala with Kanyakumari with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 29,
    "keywords": [
      "gujarat"
    ],
    "answer": " Gujarat Tour Package\n\n Explore the highlights of Gujarat with TravelX.\n Customized itinerary\n Hotel & resort options\n Local sightseeing\n Private cab / transport options\n Complete travel assistance\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 30,
    "keywords": [
      "nepal"
    ],
    "answer": " Nepal International Tour Package\n\n Explore Nepal with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 31,
    "keywords": [
      "bangkok",
      "bangkok pattaya phuket",
      "pattaya",
      "phuket"
    ],
    "answer": " Bangkok Pattaya Phuket International Tour Package\n\n Explore Bangkok Pattaya Phuket with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 32,
    "keywords": [
      "bangkok",
      "bangkok, pattaya, phuket & krabi",
      "krabi",
      "pattaya",
      "phuket"
    ],
    "answer": " Bangkok, Pattaya, Phuket & Krabi International Tour Package\n\n Explore Bangkok, Pattaya, Phuket & Krabi with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 33,
    "keywords": [
      "kazakhstan",
      "kazakhstan & uzbekistan",
      "uzbekistan"
    ],
    "answer": " Kazakhstan & Uzbekistan International Tour Package\n\n Explore Kazakhstan & Uzbekistan with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 34,
    "keywords": [
      "vietnam"
    ],
    "answer": " Vietnam International Tour Package\n\n Explore Vietnam with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 35,
    "keywords": [
      "phu",
      "quoc",
      "vietnam",
      "vietnam phu quoc"
    ],
    "answer": " Vietnam Phu Quoc International Tour Package\n\n Explore Vietnam Phu Quoc with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 36,
    "keywords": [
      "srilanka"
    ],
    "answer": " Srilanka International Tour Package\n\n Explore Srilanka with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 37,
    "keywords": [
      "genting",
      "malaysia",
      "singapore",
      "singapore malaysia, genting"
    ],
    "answer": " Singapore Malaysia, Genting International Tour Package\n\n Explore Singapore Malaysia, Genting with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 38,
    "keywords": [
      "malyasia",
      "singapore",
      "thailand",
      "thailand singapore malyasia"
    ],
    "answer": " Thailand Singapore Malyasia International Tour Package\n\n Explore Thailand Singapore Malyasia with TravelX.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact TravelX for the latest package price and availability."
  },
  {
    "id": 39,
    "keywords": [
      "flight",
      "air",
      "plane",
      "airline",
      "flight booking"
    ],
    "answer": " Yes! We provide domestic and international flight booking assistance at competitive prices."
  },
  {
    "id": 40,
    "keywords": [
      "hotel",
      "resort",
      "stay",
      "accommodation"
    ],
    "answer": " We provide Hotel & Resort booking from Budget to Luxury 5-Star properties across India and abroad."
  },
  {
    "id": 41,
    "keywords": [
      "train",
      "rail",
      "railway"
    ],
    "answer": " We can assist you with train ticket booking and complete railway travel planning."
  },
  {
    "id": 42,
    "keywords": [
      "bus",
      "car",
      "cab",
      "taxi",
      "transport"
    ],
    "answer": " We provide Bus Booking, Private Cab, Tempo Traveller and Luxury Car Rental services."
  },
  {
    "id": 43,
    "keywords": [
      "price",
      "cost",
      "budget",
      "cheap",
      "affordable",
      "rate"
    ],
    "answer": " We have travel packages across different budgets. Please tell me your preferred destination, number of travelers and approximate budget."
  },
  {
    "id": 44,
    "keywords": [
      "honeymoon",
      "couple",
      "romantic"
    ],
    "answer": " Popular honeymoon destinations include Kashmir, Manali, Bali, Maldives, Andaman and Switzerland."
  },
  {
    "id": 45,
    "keywords": [
      "family",
      "family tour",
      "family trip"
    ],
    "answer": "‍‍‍ Family packages are available for Kerala, Darjeeling, Sikkim, Rajasthan, Kashmir, Meghalaya and many more destinations."
  },
  {
    "id": 46,
    "keywords": [
      "adventure",
      "trek",
      "trekking",
      "camping",
      "rafting",
      "paragliding",
      "scuba"
    ],
    "answer": " Adventure packages include trekking, river rafting, camping, paragliding, scuba diving and more."
  },
  {
    "id": 47,
    "keywords": [
      "contact",
      "phone",
      "call",
      "number",
      "email"
    ],
    "answer": " Contact us:\n\nPhone: +91 9876543210\nEmail: support@travelx.com"
  },
  {
    "id": 48,
    "keywords": [
      "office",
      "address",
      "location"
    ],
    "answer": " Our office is located in Kolkata, West Bengal. We also provide online travel consultation."
  },
  {
    "id": 49,
    "keywords": [
      "payment",
      "pay",
      "upi",
      "card",
      "emi",
      "net banking"
    ],
    "answer": " We accept UPI, Credit Card, Debit Card, Net Banking and EMI options."
  },
  {
    "id": 50,
    "keywords": [
      "refund",
      "cancel",
      "cancellation",
      "cancellation policy"
    ],
    "answer": " Cancellation and refund policies depend on the selected package. Please contact our support team for detailed information."
  },
  {
    "id": 51,
    "keywords": [
      "visa",
      "passport"
    ],
    "answer": " Visa and passport guidance is available for applicable international destinations. Requirements depend on the destination and traveler profile."
  },
  {
    "id": 52,
    "keywords": [
      "customized",
      "custom",
      "customize",
      "personalized"
    ],
    "answer": " Yes! We can create customized itineraries based on your destination, duration, budget, hotel preference and activities."
  },
  {
    "id": 53,
    "keywords": [
      "best destination",
      "where to go",
      "travel destination"
    ],
    "answer": " Tell me your travel month, budget and whether you prefer mountains, beaches, nature, adventure or sightseeing, and I can suggest suitable destinations."
  },
  {
    "id": 54,
    "keywords": [
      "thanks",
      "thank you",
      "thank"
    ],
    "answer": " You're most welcome! If you have any more questions, feel free to ask. Happy Travels! "
  },
  {
    "id": 55,
    "keywords": [
      "bye",
      "goodbye",
      "see you"
    ],
    "answer": " Thank you for choosing TravelX. Have a wonderful journey! "
  }
]

export default chatBotData;