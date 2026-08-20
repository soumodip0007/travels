const chatBotData = [
  {
    id: 1,

    topic: "Ajanta Ellora Mumbai Goa",

    keywords: [
      "ajanta ellora mumbai goa",
      "ajanta ellora mumbai goa tour",
      "ajanta ellora",
      "ajanta",
      "ellora",
      "ajanta caves",
      "ellora caves",
      "aurangabad",
      "chhatrapati sambhaji nagar",
      "mumbai mahabaleshwar goa",
      "ajanta goa package",
      "ajanta ellora package",
      "ajanta ellora hotels",
      "ajanta ellora train",
      "ajanta ellora transport",
      "mahabaleshwar",
      "mumbai",
      "goa",
    ],

    summary: {
      duration: "12 Nights / 13 Days",
      price: "₹33,500 per person",
      rating: "Domestic Tour",
      destinations:
        "Ajanta • Ellora • Aurangabad • Mumbai • Mahabaleshwar • Goa",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "package price",
          "tour price",
        ],

        response:
          "Ajanta Ellora Mumbai Goa Tour Package costs ₹33,500 per person.\n\nDuration: 12 Nights / 13 Days\nCategory: Domestic Tour\n\nFor the latest price and availability, please contact Riya Tours & Travels.",
      },

      duration: {
        keywords: ["duration", "how many days", "how long", "days", "nights"],

        response:
          "Ajanta Ellora Mumbai Goa Tour is a 12 Nights / 13 Days package.\n\nThe tour covers Ajanta, Ellora, Aurangabad, Mumbai, Mahabaleshwar and Goa.",
      },

      overview: {
        keywords: [
          "overview",
          "about",
          "details",
          "package details",
          "tour details",
          "tell me about",
        ],

        response:
          "Ajanta Ellora Mumbai Goa is a 12 Nights / 13 Days domestic tour covering:\n\n• Ajanta\n• Ellora\n• Aurangabad\n• Mumbai\n• Mahabaleshwar\n• Goa\n\nThe tour combines caves, heritage monuments, temples, hill stations, beaches and city sightseeing.\n\nPrice: ₹33,500 per person.",
      },

      destinations: {
        keywords: [
          "destination",
          "destinations",
          "places",
          "route",
          "tour route",
          "where",
          "locations",
        ],

        response:
          "Tour Route:\n\nHowrah → Bhusaval → Ajanta → Ellora → Aurangabad → Mumbai → Mahabaleshwar → Pune → Goa → Kolkata\n\nMain destinations:\nAjanta, Ellora, Aurangabad, Mumbai, Mahabaleshwar and Goa.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places to visit",
          "attractions",
          "tourist places",
          "what will i see",
          "places covered",
        ],

        response:
          "Major attractions covered in the tour include:\n\n• Ajanta Caves\n• Ellora Caves\n• Grishneshwar Jyotirlinga\n• Bibi Ka Maqbara\n• Panchakki\n• Chhatrapati Shivaji Maharaj Museum\n• Gateway of India\n• Marine Drive\n• Taraporewala Aquarium\n• Hanging Garden\n• Juhu Beach\n• Mahalaxmi Temple\n• Siddhivinayak Temple\n• Elephant's Head Point\n• Mahabaleshwar Temple\n• Veena Lake\n• Aguada Fort\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n• Mangesh Temple\n• Santadurga Temple\n• Colva Beach",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "daywise",
          "tour plan",
          "travel plan",
          "daily plan",
          "plan",
        ],

        response:
          "Ajanta Ellora Mumbai Goa Tour – Day-wise Itinerary:\n\nDay 1: Howrah → Bhusaval\nBoard train 12262 from Howrah Railway Station for Bhusaval. Overnight stay in train.\n\nDay 2: Bhusaval → Ajanta\nArrive at Bhusaval and proceed to Ajanta Caves by road. Overnight stay at Ajanta.\n\nDay 3: Ajanta → Ellora\nProceed to Ellora via Girijamata Temple. Visit Grishneshwar Jyotirlinga and Ellora Caves. Overnight stay at Ellora.\n\nDay 4: Ellora → Aurangabad\nVisit Bibi Ka Maqbara, Panchakki and Chhatrapati Shivaji Maharaj Museum. Overnight stay at Aurangabad.\n\nDay 5: Aurangabad → Mumbai\nTransfer to Chhatrapati Sambhaji Nagar Railway Station and travel to Mumbai. Overnight stay at Mumbai.\n\nDay 6: Mumbai Sightseeing\nVisit Gateway of India, Marine Drive, Taraporewala Aquarium, Hanging Garden, Juhu Beach, Mahalaxmi Temple, Boot House and Siddhivinayak Temple.\n\nDay 7: Mumbai → Mahabaleshwar\nDrive to Mahabaleshwar. Overnight stay at Mahabaleshwar.\n\nDay 8: Mahabaleshwar → Pune → Goa\nVisit Elephant's Head Point, Mahabaleshwar Temple and Veena Lake. Later transfer to Pune Railway Station and board train for Goa.\n\nDay 9: Arrival at Goa\nArrive at Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.\n\nDay 10: North Goa Sightseeing\nVisit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach and Miramar Beach.\n\nDay 11: South Goa Sightseeing\nVisit St. Xavier's Church, Mangesh Temple, Santadurga Temple and Colva Beach.\n\nDay 12: Goa → Kolkata\nTransfer to Madgaon Railway Station and board train 18048 for Kolkata. Overnight stay in train.\n\nDay 13: Arrival at Kolkata\nArrive at Shalimar Railway Station.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "what is included",
          "package includes",
          "facilities",
        ],

        response:
          "The Ajanta Ellora Mumbai Goa package includes:\n\n• Deluxe room accommodation\n• Sleeper Class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per the tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "what is excluded",
          "package excludes",
        ],

        response:
          "The following are excluded from the package:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permit charges\n• Personal activities\n• Any ride or safari\n• Any item not specifically mentioned in the inclusions",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "hotel",
          "train",
          "transport",
          "meals",
          "accommodation",
        ],

        response:
          "Facilities available in the Ajanta Ellora Mumbai Goa package:\n\n• Train Included\n• Hotel Stay\n• Meals Included\n• Transport Included\n• Sightseeing\n• Tour Assistance",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "book this tour",
        ],

        response:
          "You can contact Riya Tours & Travels for booking and enquiry regarding the Ajanta Ellora Mumbai Goa Tour.\n\nPlease contact Riya Tours & Travels for:\n• Latest availability\n• Hotel options\n• Exact pricing\n• Booking confirmation\n• Tour-related queries",
      },
    },
  },
  {
    id: 2,

    topic: "Madhya Pradesh",

    keywords: [
      "madhya pradesh",
      "madhya pradesh tour",
      "madhya pradesh package",
      "madhya pradesh tour package",
      "mp tour",
      "mp package",
      "amarkantak",
      "jabalpur",
      "omkareshwar",
      "ujjain",
      "khajuraho",
      "bandhavgarh",
      "panchmarhi",
      "pachmarhi",
      "madhya pradesh price",
      "madhya pradesh cost",
      "madhya pradesh duration",
      "madhya pradesh itinerary",
      "madhya pradesh package details",
      "madhya pradesh sightseeing",
      "madhya pradesh inclusions",
      "madhya pradesh exclusions",
      "madhya pradesh train",
      "madhya pradesh hotel",
      "madhya pradesh accommodation",
      "madhya pradesh safari",
      "madhya pradesh temples",
      "madhya pradesh jyotirlinga",
      "omkareshwar jyotirlinga",
      "mahakaleshwar",
      "mahakaleshwar jyotirlinga",
      "dhuandhar falls",
      "bhedaghat",
      "marble rocks",
      "khajuraho temples",
      "bandhavgarh safari",
      "panchmarhi sightseeing",
    ],

    summary: {
      category: "Domestic Tour",

      packages: [
        {
          name: "Package 1",
          duration: "09 Nights / 10 Days",
          price: "₹22,900 per person",
          route:
            "Shalimar → Pendra Road → Amarkantak → Jabalpur → Omkareshwar → Ujjain → Howrah",
        },
        {
          name: "Package 2",
          duration: "10 Nights / 11 Days",
          price: "₹26,500 per person",
          route:
            "Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Panchmarhi → Jabalpur → Howrah",
        },
        {
          name: "Package 3",
          duration: "14 Nights / 15 Days",
          price: "₹35,000 per person",
          route:
            "Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Jabalpur → Panchmarhi → Omkareshwar → Ujjain → Howrah",
        },
      ],

      destinations:
        "Amarkantak • Jabalpur • Omkareshwar • Ujjain • Khajuraho • Bandhavgarh • Panchmarhi",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "price of madhya pradesh",
          "madhya pradesh price",
        ],

        response:
          "We have 3 Madhya Pradesh tour packages:\n\n" +
          "Package 1: 09 Nights / 10 Days – ₹22,900 per person\n" +
          "Package 2: 10 Nights / 11 Days – ₹26,500 per person\n" +
          "Package 3: 14 Nights / 15 Days – ₹35,000 per person\n\n" +
          "Please let me know which package you are interested in for more details.",
      },

      duration: {
        keywords: ["duration", "how many days", "how long", "days", "nights"],

        response:
          "Madhya Pradesh is available in 3 package durations:\n\n" +
          "Package 1: 09 Nights / 10 Days\n" +
          "Package 2: 10 Nights / 11 Days\n" +
          "Package 3: 14 Nights / 15 Days\n\n" +
          "You can choose the duration according to your travel plan.",
      },

      package: {
        keywords: [
          "package",
          "packages",
          "tour package",
          "package options",
          "available packages",
        ],

        response:
          "We currently have 3 Madhya Pradesh tour options:\n\n" +
          "1. Package 1 – 09 Nights / 10 Days – ₹22,900 per person\n" +
          "   Shalimar → Pendra Road → Amarkantak → Jabalpur → Omkareshwar → Ujjain → Howrah\n\n" +
          "2. Package 2 – 10 Nights / 11 Days – ₹26,500 per person\n" +
          "   Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Panchmarhi → Jabalpur → Howrah\n\n" +
          "3. Package 3 – 14 Nights / 15 Days – ₹35,000 per person\n" +
          "   Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Jabalpur → Panchmarhi → Omkareshwar → Ujjain → Howrah\n\n" +
          "Would you like the itinerary of any particular package?",
      },

      destinations: {
        keywords: [
          "destinations",
          "places",
          "locations",
          "where",
          "cities",
          "madhya pradesh places",
        ],

        response:
          "The Madhya Pradesh tour covers:\n\n" +
          "• Amarkantak\n" +
          "• Jabalpur\n" +
          "• Omkareshwar\n" +
          "• Ujjain\n" +
          "• Khajuraho\n" +
          "• Bandhavgarh\n" +
          "• Panchmarhi\n\n" +
          "The exact destinations depend on the package you choose.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "attractions",
          "places to visit",
          "tourist places",
          "what to see",
          "madhya pradesh sightseeing",
        ],

        response:
          "Major attractions covered across the Madhya Pradesh packages include:\n\n" +
          "• Dhuandhar Falls\n" +
          "• Bhedaghat\n" +
          "• Marble Rocks\n" +
          "• Omkareshwar Jyotirlinga\n" +
          "• Mahakaleshwar Jyotirlinga\n" +
          "• Kaal Bhairav Temple\n" +
          "• Ram Ghat\n" +
          "• Harsiddhi Mata Shaktipeeth\n" +
          "• Gadh Kalika Mata Temple\n" +
          "• Mangalnath Temple\n" +
          "• Khajuraho Temples\n" +
          "• Bandhavgarh National Park area\n" +
          "• Narmada Udgam\n" +
          "• Amarkantak temples and waterfalls\n" +
          "• Panchmarhi hill station",
      },

      temples: {
        keywords: [
          "temples",
          "temple",
          "jyotirlinga",
          "jyotirlingas",
          "omkareshwar temple",
          "mahakaleshwar temple",
          "u jjain temples",
        ],

        response:
          "The spiritual attractions include:\n\n" +
          "• Omkareshwar Jyotirlinga\n" +
          "• Mahakaleshwar Jyotirlinga\n" +
          "• Kaal Bhairav Temple\n" +
          "• Harsiddhi Mata Shaktipeeth\n" +
          "• Gadh Kalika Mata Temple\n" +
          "• Mangalnath Temple\n" +
          "• Narmada Udgam and Amarkantak temples",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day-wise",
          "day wise plan",
          "tour plan",
          "travel plan",
          "daily plan",
        ],

        response:
          "Madhya Pradesh has 3 different itineraries:\n\n" +
          "Package 1 – 09 Nights / 10 Days\n" +
          "Shalimar → Pendra Road → Amarkantak → Jabalpur → Omkareshwar → Ujjain → Howrah\n\n" +
          "Package 2 – 10 Nights / 11 Days\n" +
          "Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Panchmarhi → Jabalpur → Howrah\n\n" +
          "Package 3 – 14 Nights / 15 Days\n" +
          "Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Jabalpur → Panchmarhi → Omkareshwar → Ujjain → Howrah\n\n" +
          "Please specify Package 1, Package 2 or Package 3 if you want the complete day-wise itinerary.",
      },

      package1: {
        keywords: [
          "package 1",
          "package one",
          "first package",
          "22900 package",
          "9 nights 10 days",
          "9 nights",
          "10 days package",
        ],

        response:
          "Package 1 – Madhya Pradesh\n\n" +
          "Duration: 09 Nights / 10 Days\n" +
          "Price: ₹22,900 per person\n\n" +
          "Route:\n" +
          "Shalimar → Pendra Road → Amarkantak → Jabalpur → Omkareshwar → Ujjain → Howrah\n\n" +
          "Highlights:\n" +
          "• Amarkantak\n" +
          "• Dhuandhar Falls\n" +
          "• Bhedaghat\n" +
          "• Marble Rocks\n" +
          "• Omkareshwar Jyotirlinga\n" +
          "• Ujjain temple circuit\n" +
          "• Mahakaleshwar Jyotirlinga\n\n" +
          "Would you like the complete day-wise itinerary for Package 1?",
      },

      package1Itinerary: {
        keywords: [
          "package 1 itinerary",
          "package one itinerary",
          "first package itinerary",
          "22900 itinerary",
        ],

        response:
          "Package 1 – 09 Nights / 10 Days Itinerary\n\n" +
          "Day 1: Shalimar → Pendra Road\n" +
          "Board train for Pendra Road. Overnight stay in train.\n\n" +
          "Day 2: Pendra Road → Amarkantak\n" +
          "Transfer to Amarkantak and enjoy local sightseeing. Overnight stay at Amarkantak.\n\n" +
          "Day 3: Amarkantak → Jabalpur\n" +
          "Proceed to Jabalpur after breakfast. Overnight stay at Jabalpur.\n\n" +
          "Day 4: Jabalpur → Omkareshwar\n" +
          "Visit Dhuandhar Falls, Bhedaghat and Marble Rocks. Later proceed to Omkareshwar.\n\n" +
          "Day 5: Omkareshwar Sightseeing\n" +
          "Visit Omkareshwar Jyotirlinga and Narmada River.\n\n" +
          "Day 6: Omkareshwar → Ujjain\n" +
          "Proceed to Ujjain and check in to the hotel.\n\n" +
          "Day 7: Ujjain Temple Circuit\n" +
          "Visit Kaal Bhairav Temple, Ram Ghat, Harsiddhi Mata Temple, Gadh Kalika Mata Temple and Mangalnath Temple.\n\n" +
          "Day 8: Mahakaleshwar Darshan → Return Train\n" +
          "Visit Mahakaleshwar Jyotirlinga and board the return train.\n\n" +
          "Day 9: Train Journey\n" +
          "Continue the return journey.\n\n" +
          "Day 10: Arrival at Howrah\n" +
          "Arrive at Howrah Railway Station.",
      },

      package2: {
        keywords: [
          "package 2",
          "package two",
          "second package",
          "26500 package",
          "10 nights 11 days",
          "10 nights",
        ],

        response:
          "Package 2 – Madhya Pradesh\n\n" +
          "Duration: 10 Nights / 11 Days\n" +
          "Price: ₹26,500 per person\n\n" +
          "Route:\n" +
          "Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Panchmarhi → Jabalpur → Howrah\n\n" +
          "Highlights:\n" +
          "• Khajuraho Temples\n" +
          "• Bandhavgarh\n" +
          "• Amarkantak\n" +
          "• Panchmarhi\n" +
          "• Jabalpur\n" +
          "• Dhuandhar Falls\n" +
          "• Bhedaghat\n\n" +
          "Would you like the complete day-wise itinerary for Package 2?",
      },

      package2Itinerary: {
        keywords: [
          "package 2 itinerary",
          "package two itinerary",
          "second package itinerary",
          "26500 itinerary",
        ],

        response:
          "Package 2 – 10 Nights / 11 Days Itinerary\n\n" +
          "Day 1: Howrah → Satna\n" +
          "Board train for Satna. Overnight stay in train.\n\n" +
          "Day 2: Satna → Khajuraho\n" +
          "Transfer to Khajuraho. Overnight stay at Khajuraho.\n\n" +
          "Day 3: Khajuraho Sightseeing\n" +
          "Visit the famous Khajuraho Temples.\n\n" +
          "Day 4: Khajuraho → Bandhavgarh\n" +
          "Proceed to Bandhavgarh. En-route visit Pandav Gupha.\n\n" +
          "Day 5: Bandhavgarh → Amarkantak\n" +
          "Optional morning jungle safari at own cost. Later proceed to Amarkantak.\n\n" +
          "Day 6: Amarkantak Sightseeing\n" +
          "Explore temples, Narmada Udgam, waterfalls and local attractions.\n\n" +
          "Day 7: Amarkantak → Panchmarhi\n" +
          "Proceed to Panchmarhi after local sightseeing.\n\n" +
          "Day 8: Panchmarhi Sightseeing\n" +
          "Explore Panchmarhi. Optional safari and local vehicle at own cost.\n\n" +
          "Day 9: Panchmarhi → Jabalpur\n" +
          "Proceed to Jabalpur.\n\n" +
          "Day 10: Jabalpur Sightseeing → Return Train\n" +
          "Visit Dhuandhar Falls, Bhedaghat and Marble Rocks. Board return train.\n\n" +
          "Day 11: Arrival at Howrah\n" +
          "Arrive at Howrah Railway Station.",
      },

      package3: {
        keywords: [
          "package 3",
          "package three",
          "third package",
          "35000 package",
          "14 nights 15 days",
          "14 nights",
          "15 days package",
        ],

        response:
          "Package 3 – Madhya Pradesh\n\n" +
          "Duration: 14 Nights / 15 Days\n" +
          "Price: ₹35,000 per person\n\n" +
          "Route:\n" +
          "Howrah → Satna → Khajuraho → Bandhavgarh → Amarkantak → Jabalpur → Panchmarhi → Omkareshwar → Ujjain → Howrah\n\n" +
          "Highlights:\n" +
          "• Khajuraho\n" +
          "• Bandhavgarh\n" +
          "• Amarkantak\n" +
          "• Jabalpur\n" +
          "• Panchmarhi\n" +
          "• Omkareshwar Jyotirlinga\n" +
          "• Ujjain\n" +
          "• Mahakaleshwar Jyotirlinga\n\n" +
          "Would you like the complete day-wise itinerary for Package 3?",
      },

      package3Itinerary: {
        keywords: [
          "package 3 itinerary",
          "package three itinerary",
          "third package itinerary",
          "35000 itinerary",
        ],

        response:
          "Package 3 – 14 Nights / 15 Days Itinerary\n\n" +
          "Day 1: Howrah → Satna\n" +
          "Board train for Satna. Overnight stay in train.\n\n" +
          "Day 2: Satna → Khajuraho\n" +
          "Transfer to Khajuraho.\n\n" +
          "Day 3: Khajuraho Sightseeing\n" +
          "Visit Khajuraho Temples.\n\n" +
          "Day 4: Khajuraho → Bandhavgarh\n" +
          "Proceed to Bandhavgarh. En-route visit Pandav Gupha.\n\n" +
          "Day 5: Bandhavgarh → Amarkantak\n" +
          "Optional jungle safari. Later proceed to Amarkantak.\n\n" +
          "Day 6: Amarkantak Sightseeing\n" +
          "Explore temples, waterfalls and Narmada Udgam.\n\n" +
          "Day 7: Amarkantak → Jabalpur\n" +
          "Proceed to Jabalpur.\n\n" +
          "Day 8: Jabalpur → Panchmarhi\n" +
          "Visit Dhuandhar Falls, Bhedaghat and Marble Rocks. Later proceed to Panchmarhi.\n\n" +
          "Day 9: Panchmarhi Sightseeing\n" +
          "Explore Panchmarhi. Optional safari available at own cost.\n\n" +
          "Day 10: Panchmarhi → Omkareshwar\n" +
          "Proceed to Omkareshwar.\n\n" +
          "Day 11: Omkareshwar Sightseeing\n" +
          "Visit Omkareshwar Jyotirlinga and Narmada River.\n\n" +
          "Day 12: Omkareshwar → Ujjain\n" +
          "Proceed to Ujjain.\n\n" +
          "Day 13: Ujjain Sightseeing\n" +
          "Visit Mahakaleshwar Jyotirlinga and major temples.\n\n" +
          "Day 14: Ujjain → Return Train\n" +
          "Board the return train from Ujjain Railway Station.\n\n" +
          "Day 15: Arrival at Howrah\n" +
          "Arrive at Howrah Railway Station.",
      },

      included: {
        keywords: [
          "included",
          "inclusion",
          "inclusions",
          "what is included",
          "package includes",
          "facilities",
        ],

        response:
          "The Madhya Pradesh packages generally include:\n\n" +
          "• Deluxe room accommodation\n" +
          "• Up and down Sleeper Class train fare\n" +
          "• Train meals including lunch and dinner\n" +
          "• Breakfast\n" +
          "• Lunch\n" +
          "• Evening tea and snacks\n" +
          "• Dinner\n" +
          "• Transportation\n" +
          "• Parking and toll tax\n" +
          "• Pick-up and drop\n" +
          "• Sightseeing as per the tour schedule\n" +
          "• Tour assistance",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusion",
          "exclusions",
          "not included",
          "what is not included",
          "package excludes",
        ],

        response:
          "The following are generally excluded:\n\n" +
          "• Flight tickets\n" +
          "• Single supplement cost\n" +
          "• Mineral water, soft drinks and hard drinks\n" +
          "• Guide charges\n" +
          "• Porter charges\n" +
          "• Entry fees\n" +
          "• Camera charges\n" +
          "• Forest permits\n" +
          "• Personal activities\n" +
          "• Rides or safaris\n" +
          "• Any item not specifically mentioned in the inclusions",
      },

      safari: {
        keywords: [
          "safari",
          "jungle safari",
          "bandhavgarh safari",
          "wildlife",
          "forest safari",
        ],

        response:
          "Jungle safari is available during the Bandhavgarh and Panchmarhi portions of the tour, depending on the selected package.\n\n" +
          "Safari charges are not included in the package and are payable by the traveler directly.",
      },

      train: {
        keywords: [
          "train",
          "train included",
          "train ticket",
          "railway",
          "railway station",
          "train journey",
        ],

        response:
          "Train travel is included in the Madhya Pradesh packages.\n\n" +
          "• Package 1: Shalimar / Pendra Road route\n" +
          "• Package 2: Howrah / Satna route\n" +
          "• Package 3: Howrah / Satna route\n\n" +
          "Sleeper Class train fare is included as per the package.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reserve",
          "reservation",
        ],

        response:
          "For booking, availability, hotel options and the latest package pricing, please contact Riya Tours & Travels.\n\n" +
          "Our team can help you select the most suitable Madhya Pradesh package based on your preferred duration and budget.",
      },
    },
  },
  {
    id: 3,

    topic: "Andaman",

    keywords: [
      "andaman",
      "andaman tour",
      "andaman package",
      "andaman tour package",
      "andaman trip",
      "andaman holiday",
      "andaman vacation",
      "andaman package price",
      "andaman cost",
      "andaman duration",
      "andaman itinerary",
      "andaman package details",
      "andaman sightseeing",
      "andaman inclusions",
      "andaman exclusions",
      "andaman hotel",
      "andaman accommodation",
      "andaman cruise",
      "andaman boat",
      "port blair",
      "havelock",
      "havelock island",
      "neil island",
      "baratang",
      "baratang island",
      "ross island",
      "north bay",
      "north bay coral island",
      "radhanagar beach",
      "bharatpur beach",
      "natural bridge",
      "laxmanpur beach",
      "corbyns cove",
      "corbyn's cove",
      "cellular jail",
      "sound and light show",
      "andaman beaches",
      "andaman coral island",
      "andaman airport pickup",
      "andaman airport drop",
      "andaman boat tickets",
      "andaman cruise tickets",
      "andaman meals",
      "andaman transport",
    ],

    summary: {
      category: "Domestic Tour",

      duration: "06 Nights / 07 Days",

      price: "₹20,500 per person",

      route: "Port Blair → Havelock Island → Neil Island → Port Blair",

      destinations:
        "Port Blair • Havelock Island • Neil Island • Baratang Island • Ross Island • North Bay Coral Island",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "andaman price",
          "andaman cost",
          "package price",
        ],

        response:
          "Andaman Tour Package\n\n" +
          "Duration: 06 Nights / 07 Days\n" +
          "Price: ₹20,500 per person\n" +
          "Category: Domestic Tour\n\n" +
          "The package covers Port Blair, Havelock Island, Neil Island, Ross Island, North Bay Coral Island and Baratang Island.\n\n" +
          "For the latest availability and booking information, please contact Riya Tours & Travels.",
      },

      duration: {
        keywords: [
          "duration",
          "how many days",
          "how long",
          "days",
          "nights",
          "andaman duration",
        ],

        response:
          "The Andaman tour package is for 06 Nights / 07 Days.\n\n" +
          "Route:\n" +
          "Port Blair → Havelock Island → Neil Island → Port Blair",
      },

      package: {
        keywords: [
          "package",
          "packages",
          "tour package",
          "andaman package",
          "package details",
          "andaman tour package",
        ],

        response:
          "Andaman Tour Package\n\n" +
          "Duration: 06 Nights / 07 Days\n" +
          "Price: ₹20,500 per person\n\n" +
          "Route:\n" +
          "Port Blair → Havelock Island → Neil Island → Port Blair\n\n" +
          "Main Destinations:\n" +
          "• Port Blair\n" +
          "• Havelock Island\n" +
          "• Neil Island\n" +
          "• Baratang Island\n" +
          "• Ross Island\n" +
          "• North Bay Coral Island\n\n" +
          "Would you like to know about the itinerary, sightseeing, inclusions or exclusions?",
      },

      destinations: {
        keywords: [
          "destinations",
          "places",
          "locations",
          "places covered",
          "where",
          "island",
          "islands",
        ],

        response:
          "The Andaman tour covers:\n\n" +
          "• Port Blair\n" +
          "• Havelock Island\n" +
          "• Neil Island\n" +
          "• Baratang Island\n" +
          "• Ross Island\n" +
          "• North Bay Coral Island",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "attractions",
          "places to visit",
          "tourist places",
          "what to see",
          "andaman sightseeing",
          "andaman beaches",
          "beaches",
        ],

        response:
          "Major attractions covered in the Andaman tour include:\n\n" +
          "• Cellular Jail\n" +
          "• Cellular Jail Sound & Light Show\n" +
          "• Corbyn's Cove Beach\n" +
          "• Ross Island\n" +
          "• North Bay Coral Island\n" +
          "• Radhanagar Beach\n" +
          "• Bharatpur Beach\n" +
          "• Natural Bridge\n" +
          "• Laxmanpur Beach\n" +
          "• Baratang Island",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day-wise",
          "day wise plan",
          "tour plan",
          "travel plan",
          "daily plan",
        ],

        response:
          "Andaman Tour – 06 Nights / 07 Days\n\n" +
          "Day 1: Arrival at Port Blair\n" +
          "Airport pickup, hotel transfer, Cellular Jail, Corbyn's Cove Beach and Sound & Light Show.\n\n" +
          "Day 2: Ross Island & North Bay Coral Island\n" +
          "Visit Ross Island and North Bay Coral Island.\n\n" +
          "Day 3: Port Blair → Havelock Island\n" +
          "Transfer by cruise and visit Radhanagar Beach.\n\n" +
          "Day 4: Havelock → Neil Island\n" +
          "Visit Bharatpur Beach, Natural Bridge and Laxmanpur Beach.\n\n" +
          "Day 5: Neil Island → Port Blair\n" +
          "Return to Port Blair by cruise.\n\n" +
          "Day 6: Baratang Island Excursion\n" +
          "Full-day excursion to Baratang Island and return to Port Blair.\n\n" +
          "Day 7: Departure from Port Blair\n" +
          "Transfer to Port Blair Airport for onward journey.",
      },

      havelock: {
        keywords: [
          "havelock",
          "havelock island",
          "radhanagar",
          "radhanagar beach",
        ],

        response:
          "Havelock Island is included in the Andaman package.\n\n" +
          "The Havelock portion includes:\n" +
          "• Cruise transfer from Port Blair\n" +
          "• Radhanagar Beach\n" +
          "• Hotel stay at Havelock Island\n\n" +
          "Havelock Island is covered on Day 3 of the itinerary.",
      },

      neil: {
        keywords: [
          "neil",
          "neil island",
          "bharatpur beach",
          "natural bridge",
          "laxmanpur beach",
        ],

        response:
          "Neil Island is included in the Andaman package.\n\n" +
          "The Neil Island sightseeing includes:\n" +
          "• Bharatpur Beach\n" +
          "• Natural Bridge\n" +
          "• Laxmanpur Beach\n\n" +
          "Neil Island is covered on Day 4 of the itinerary.",
      },

      portBlair: {
        keywords: [
          "port blair",
          "port blair sightseeing",
          "port blair hotel",
          "port blair airport",
        ],

        response:
          "Port Blair is included at the beginning and end of the Andaman tour.\n\n" +
          "Port Blair attractions include:\n" +
          "• Cellular Jail\n" +
          "• Cellular Jail Sound & Light Show\n" +
          "• Corbyn's Cove Beach\n" +
          "• Ross Island\n" +
          "• North Bay Coral Island\n\n" +
          "Airport pick-up and drop are also included.",
      },

      baratang: {
        keywords: [
          "baratang",
          "baratang island",
          "baratang trip",
          "baratang excursion",
        ],

        response:
          "Yes, Baratang Island is included in the Andaman tour.\n\n" +
          "Day 6 is dedicated to the Baratang Island excursion. The tour includes transportation for the scheduled sightseeing and return to Port Blair.",
      },

      cellularJail: {
        keywords: [
          "cellular jail",
          "cellular jail show",
          "sound and light show",
          "sound light show",
        ],

        response:
          "Yes, Cellular Jail is included in the Andaman itinerary.\n\n" +
          "It is covered on Day 1 along with Corbyn's Cove Beach. The Cellular Jail Sound & Light Show is also included.",
      },

      cruise: {
        keywords: [
          "cruise",
          "cruise ticket",
          "cruise tickets",
          "andaman cruise",
          "boat",
          "boat ticket",
          "boat tickets",
          "andaman boat",
        ],

        response:
          "Yes, cruise and boat tickets are included in the Andaman package as per the tour itinerary.\n\n" +
          "Cruise transfers are used for:\n" +
          "• Port Blair → Havelock Island\n" +
          "• Havelock Island → Neil Island\n" +
          "• Neil Island → Port Blair",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "hotel stay",
          "andaman hotel",
          "andaman accommodation",
        ],

        response:
          "AC hotel accommodation is included in the Andaman package.\n\n" +
          "Hotel stays are arranged at the destinations mentioned in the itinerary, including Port Blair, Havelock Island and Neil Island.",
      },

      meals: {
        keywords: [
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "snacks",
          "andaman meals",
        ],

        response:
          "Meals are included in the Andaman package.\n\n" +
          "Included meals are:\n" +
          "• Breakfast\n" +
          "• Lunch\n" +
          "• Evening tea and snacks\n" +
          "• Dinner",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "ac transport",
          "andaman transport",
        ],

        response:
          "AC transportation is included in the Andaman package.\n\n" +
          "The package also includes airport pick-up and drop, sightseeing transportation, parking and toll tax as per the tour schedule.",
      },

      airport: {
        keywords: [
          "airport pickup",
          "airport pick up",
          "airport drop",
          "airport transfer",
          "andaman airport pickup",
          "andaman airport drop",
        ],

        response:
          "Yes. Airport pick-up and drop are included in the Andaman package.\n\n" +
          "Pick-up is provided from Port Blair Airport on arrival and airport transfer is provided on the departure day.",
      },

      included: {
        keywords: [
          "included",
          "inclusion",
          "inclusions",
          "what is included",
          "package includes",
          "facilities",
        ],

        response:
          "The Andaman package includes:\n\n" +
          "• AC accommodation\n" +
          "• Breakfast\n" +
          "• Lunch\n" +
          "• Evening tea and snacks\n" +
          "• Dinner\n" +
          "• AC transportation\n" +
          "• Boat tickets\n" +
          "• Cruise tickets\n" +
          "• Entry fees\n" +
          "• Parking and toll tax\n" +
          "• Airport pick-up and drop\n" +
          "• Sightseeing as per the tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusion",
          "exclusions",
          "not included",
          "what is not included",
          "package excludes",
        ],

        response:
          "The following are excluded from the Andaman package:\n\n" +
          "• Flight tickets\n" +
          "• Single supplement cost\n" +
          "• Mineral water\n" +
          "• Soft drinks and hard drinks\n" +
          "• Guide charges\n" +
          "• Porter charges\n" +
          "• Camera charges\n" +
          "• Personal activities\n" +
          "• Any ride or safari\n" +
          "• Any item not mentioned in the inclusions",
      },

      flight: {
        keywords: ["flight", "flight ticket", "air ticket", "airfare"],

        response:
          "Flight tickets are not included in the Andaman package.\n\n" +
          "The traveler needs to arrange the flight tickets separately.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reserve",
          "reservation",
        ],

        response:
          "For Andaman tour booking, availability, hotel options and the latest pricing, please contact Riya Tours & Travels.\n\n" +
          "Our team can help you with the booking and travel arrangements.",
      },
    },
  },
  {
    id: 4,

    topic: "Arunachal Pradesh & Kaziranga",

    keywords: [
      "arunachal",
      "arunachal pradesh",
      "arunachal tour",
      "arunachal package",
      "arunachal pradesh tour",
      "arunachal pradesh package",
      "arunachal tour package",
      "arunachal kaziranga",
      "arunachal kaziranga tour",
      "arunachal kaziranga package",
      "tawang",
      "tawang tour",
      "tawang package",
      "guwahati",
      "bhalukpong",
      "bomdila",
      "dirang",
      "kaziranga",
      "kaziranga national park",
    ],

    summary: {
      duration: "10 Nights / 11 Days",
      price: "₹28,500 per person",
      rating: "N/A",
      destinations:
        "Guwahati • Bhalukpong • Bomdila • Tawang • Dirang • Kaziranga",
    },

    route:
      "Howrah → Kamakhya → Guwahati → Bhalukpong → Bomdila → Tawang → Dirang → Kaziranga → Guwahati → Howrah / Sealdah",

    facilities: [
      "3 AC Train Included",
      "Hotel Stay",
      "Meals Included",
      "Transportation Included",
      "Sightseeing",
      "Arunachal Permit Included",
    ],

    attractions: [
      "Kamakhya Temple",
      "Tipi Orchidarium",
      "Jia Bharali River",
      "Bomdila Upper Monastery",
      "Hot Spring",
      "Sela Pass",
      "Sela Lake",
      "Jaswantgarh War Memorial",
      "Tawang Monastery",
      "Tawang Handicraft Centre",
      "Tawang War Memorial",
      "Bumla Pass",
      "Sangestar Lake",
      "P.T. Tso Lake",
      "Jung Falls",
      "Kaziranga National Park",
    ],

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "package price",
          "arunachal price",
          "arunachal cost",
        ],

        response:
          "The Arunachal Pradesh & Kaziranga package costs ₹28,500 per person.\n\nDuration: 10 Nights / 11 Days\nCategory: Domestic Tour\nDestinations: Guwahati, Bhalukpong, Bomdila, Tawang, Dirang and Kaziranga.",
      },

      duration: {
        keywords: ["duration", "how many days", "how long", "days", "nights"],

        response:
          "The Arunachal Pradesh & Kaziranga tour is for 10 Nights / 11 Days.",
      },

      destinations: {
        keywords: [
          "destinations",
          "places covered",
          "places included",
          "where does it cover",
          "which places",
          "places",
        ],

        response:
          "The tour covers:\n\n• Guwahati\n• Bhalukpong\n• Bomdila\n• Tawang\n• Dirang\n• Kaziranga",
      },

      route: {
        keywords: ["route", "tour route", "travel route", "route map"],

        response:
          "Main tour route:\n\nHowrah → Kamakhya → Guwahati → Bhalukpong → Bomdila → Tawang → Dirang → Kaziranga → Guwahati → Howrah / Sealdah",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day-wise",
          "day wise plan",
          "tour plan",
          "daily plan",
          "plan",
        ],

        response:
          "Arunachal Pradesh & Kaziranga Tour Itinerary\n\nDay 1: Howrah → Kamakhya\nBoard Vande Bharat train from Howrah Railway Station at 6:20 PM for Kamakhya. Overnight stay in train.\n\nDay 2: Arrival at Guwahati\nReach Kamakhya Railway Station and transfer to the hotel. Visit Kamakhya Temple. Overnight stay at Guwahati.\n\nDay 3: Guwahati → Bhalukpong\nDrive approximately 241 km to Bhalukpong. Overnight stay at Bhalukpong.\n\nDay 4: Bhalukpong → Bomdila\nProceed approximately 93 km via Tipi Orchidarium and Jia Bharali River. Visit Bomdila Upper Monastery. Overnight stay at Bomdila.\n\nDay 5: Bomdila → Tawang\nDrive approximately 170 km through Hot Spring, Sela Pass, Sela Lake and Jaswantgarh War Memorial. Overnight stay at Tawang.\n\nDay 6: Tawang Sightseeing\nVisit Tawang Monastery, Handicraft Centre and Tawang War Memorial. Overnight stay at Tawang.\n\nDay 7: Tawang Excursion\nOptional excursion to Bumla Pass, Sangestar Lake and P.T. Tso Lake, subject to army permission and additional charges. Overnight stay at Tawang.\n\nDay 8: Tawang → Dirang\nDrive approximately 140 km to Dirang via Jung Falls. Overnight stay at Dirang.\n\nDay 9: Dirang → Kaziranga\nProceed approximately 250 km to Kaziranga. Optional tribal dance program at own cost. Overnight stay at Kaziranga.\n\nDay 10: Kaziranga → Guwahati\nOptional morning jungle safari at own cost. Later proceed to Guwahati Railway Station and board the return train. Overnight stay in train.\n\nDay 11: Arrival at Howrah / Sealdah\nArrive at Howrah / Sealdah Railway Station.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places to visit",
          "attractions",
          "tourist places",
          "what will we see",
          "what to see",
        ],

        response:
          "Major sightseeing attractions include:\n\n• Kamakhya Temple\n• Tipi Orchidarium\n• Jia Bharali River\n• Bomdila Upper Monastery\n• Sela Pass\n• Sela Lake\n• Jaswantgarh War Memorial\n• Tawang Monastery\n• Tawang War Memorial\n• Jung Falls\n• Kaziranga National Park",
      },

      tawang: {
        keywords: [
          "tawang sightseeing",
          "tawang places",
          "tawang attractions",
          "what to see in tawang",
        ],

        response:
          "Tawang sightseeing includes:\n\n• Tawang Monastery\n• Tawang Handicraft Centre\n• Tawang War Memorial\n• Bumla Pass (optional)\n• Sangestar Lake (optional)\n• P.T. Tso Lake (optional)\n\nBumla Pass and the optional lake excursions are subject to army permission and additional charges.",
      },

      bumla: {
        keywords: [
          "bumla",
          "bumla pass",
          "bumla pass included",
          "bumla sightseeing",
        ],

        response:
          "Bumla Pass is an optional excursion on Day 7.\n\nThe sightseeing charge is not included in the package price and the visit is subject to army permission.",
      },

      madhuriLake: {
        keywords: ["madhuri lake", "madhuri lake included"],

        response:
          "Madhuri Lake sightseeing is not included in the package price. It can be visited as part of the optional Tawang excursion and is payable separately.",
      },

      sangestarLake: {
        keywords: ["sangestar lake", "sangestar lake included"],

        response:
          "Sangestar Lake is part of the optional Tawang excursion. The visit is subject to army permission and applicable additional charges.",
      },

      ptTsoLake: {
        keywords: [
          "pt tso lake",
          "p.t. tso lake",
          "pt tso",
          "pt tso lake included",
        ],

        response:
          "P.T. Tso Lake is part of the optional Tawang excursion. The visit is subject to army permission and applicable additional charges.",
      },

      kaziranga: {
        keywords: [
          "kaziranga",
          "kaziranga national park",
          "kaziranga safari",
          "kaziranga jungle safari",
          "jungle safari",
        ],

        response:
          "Kaziranga National Park is included in the tour.\n\nAn optional early morning jungle safari is available at the traveler's own cost.\n\nAn evening tribal dance program is also optional and payable separately.",
      },

      train: {
        keywords: [
          "train",
          "train included",
          "train ticket",
          "train fare",
          "3 ac train",
          "arunachal train",
        ],

        response:
          "Yes. Train travel is included in the package.\n\nTrain Class: 3 AC\nTrain meals including lunch and dinner are also included.",
      },

      hotel: {
        keywords: ["hotel", "hotels", "accommodation", "stay", "room"],

        response:
          "Hotel accommodation is included in the Arunachal Pradesh & Kaziranga package.",
      },

      meals: {
        keywords: [
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "snacks",
        ],

        response:
          "Meals are included in the package:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "travel",
          "road transfer",
        ],

        response:
          "Transportation is included throughout the tour according to the tour schedule, including pick-up and drop.",
      },

      permit: {
        keywords: [
          "permit",
          "arunachal permit",
          "permit included",
          "permit charges",
        ],

        response:
          "Yes. Arunachal permit fees are included in the package.\n\nHowever, visits to Bumla Pass and certain restricted areas are subject to army permission and applicable additional charges.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
        ],

        response:
          "Package inclusions:\n\n• Accommodation\n• 3 AC train ticket\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Arunachal permit fees\n• Parking and toll tax\n• Pick-up and drop\n• Sightseeing as per the tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
        ],

        response:
          "Package exclusions:\n\n• Single supplement cost\n• Mineral water, soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permit\n• Bumla Pass and Madhuri Lake sightseeing charges\n• Personal activities\n• Any ride or safari\n• Any item not mentioned in the inclusions",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reserve",
          "reservation",
        ],

        response:
          "For booking, current availability, hotel options, exact pricing and permit requirements, please contact Riya Tours & Travels.",
      },

      flight: {
        keywords: ["flight", "flight ticket", "air ticket"],

        response:
          "Flight tickets are not included in this package. The tour uses train travel.",
      },

      kamakhya: {
        keywords: ["kamakhya", "kamakhya temple"],

        response:
          "Kamakhya Temple is included in the itinerary on Day 2 during the Guwahati stay.",
      },

      selaPass: {
        keywords: ["sela pass", "sela lake"],

        response:
          "Sela Pass and Sela Lake are included on the route from Bomdila to Tawang, subject to road and weather conditions.",
      },

      tawangMonastery: {
        keywords: ["tawang monastery", "monastery"],

        response:
          "Tawang Monastery is included in the local sightseeing program on Day 6.",
      },

      jaswantgarh: {
        keywords: ["jaswantgarh", "jaswantgarh war memorial"],

        response:
          "Jaswantgarh War Memorial is included on the route from Bomdila to Tawang on Day 5.",
      },
    },
  },
  {
    id: 5,
    keywords: [
      "ayodhya",
      "ayodhya tour",
      "ayodhya package",
      "ayodhya prayagraj varanasi",
      "ayodhya prayagraj varanasi tour",
      "ayodhya package price",
      "ayodhya tour price",
      "ayodhya duration",
      "ayodhya itinerary",
      "ram janmabhoomi",
      "prayagraj",
      "triveni sangam",
      "varanasi",
      "kashi",
      "kashi vishwanath",
      "sarnath",
      "ganga aarti",
      "sarayu river",
      "hanuman garhi",
      "janki bhawan",
      "kanak bhawan",
      "khusro bagh",
      "akbar fort",
      "bade hanuman ji temple",
      "nagvasuki temple",
      "birla temple",
      "sankat mochan",
      "assi ghat",
      "manikarnika ghat",
      "tulsi manas temple",
      "batu bhairav temple",
      "boat ride",
      "ayodhya train",
      "ayodhya hotel",
      "ayodhya meals",
      "ayodhya transport",
      "ayodhya sightseeing",
    ],
    answer: `Ayodhya - Prayagraj - Varanasi Tour Package

Package Details:
Duration: 06 Nights / 07 Days
Price: Rs. 18,200 per person
Category: Domestic
Rating: 8.8
Destinations: Ayodhya, Prayagraj and Varanasi

Major Attractions:
- Ram Janmabhoomi
- Sarayu River
- Hanuman Garhi
- Janki Bhawan
- Kanak Bhawan
- Triveni Sangam
- Khusro Bagh
- Akbar Fort
- Bade Hanuman Ji Temple
- Nagvasuki Temple
- Kashi Vishwanath Temple
- Sarnath
- Birla Temple
- Assi Ghat
- Manikarnika Ghat
- Sankat Mochan Hanuman Temple
- Tulsi Manas Temple
- Batu Bhairav Temple
- Ganga Aarti

Day-wise Itinerary:

Day 1:
Kolkata to Ayodhya.
Board Jammu Tawi Express from Kolkata Railway Station at 11:45 AM. Overnight stay in train.

Day 2:
Arrival at Ayodhya.
Transfer to hotel and visit Ram Janmabhoomi. Overnight stay at Ayodhya.

Day 3:
Ayodhya Local Sightseeing.
Visit Janki Bhawan, Kanak Bhawan, Sarayu River and Hanuman Garhi. Overnight stay at Ayodhya.

Day 4:
Ayodhya to Prayagraj to Varanasi.
Drive to Varanasi via Prayagraj. Visit Triveni Sangam, Khusro Bagh, Akbar Fort, Bade Hanuman Ji Temple and Nagvasuki Temple. Continue to Varanasi. Overnight stay at Varanasi.

Day 5:
Varanasi Sightseeing and Ganga Aarti.
Visit Birla Temple, Sarnath and Kashi Vishwanath Temple. Enjoy an optional boat ride and attend the evening Ganga Aarti. Overnight stay at Varanasi.

Day 6:
Varanasi Local Sightseeing and Departure.
Visit Sankat Mochan Hanuman Temple, Assi Ghat, Manikarnika Ghat, Tulsi Manas Temple and Batu Bhairav Temple. After dinner transfer to Banaras Railway Station and board the train for Kolkata. Overnight stay in train.

Day 7:
Arrival at Kolkata.
Reach Sealdah / Howrah Railway Station with sweet memories of the tour.

Included:
- Deluxe accommodation
- 3 AC train ticket
- Train meals including lunch and dinner
- Breakfast
- Lunch
- Evening tea and snacks
- Dinner
- Varanasi boat ticket
- Transportation
- Parking and toll tax
- Pick-up and drop
- All possible sightseeing according to the tour schedule

Excluded:
- Single supplement cost
- Mineral water
- Soft drinks and hard drinks
- Guide charges
- Porter charges
- Entry fees
- Camera charges
- Forest permit
- Personal activities
- Any ride or safari
- Any item not mentioned above

For the latest availability and booking information, please contact Riya Tours & Travels.`,
  },
  {
    id: 6,

    topic: "Five Jyotirlinga",

    keywords: [
      "five jyotirlinga",
      "five joytirlinga",
      "panch jyotirlinga",
      "panch jyotirlinga tour",
      "five jyotirlinga tour",
      "jyotirlinga",
      "jyotirlinga tour",
      "jyotirlinga package",
      "jyotirlinga price",
      "jyotirlinga duration",
      "bhimashankar",
      "bhimashankar jyotirlinga",
      "trimbakeshwar",
      "trimbakeshwar jyotirlinga",
      "grishneshwar",
      "grishneshwar jyotirlinga",
      "mahakaleshwar",
      "mahakaleshwar jyotirlinga",
      "omkareshwar",
      "omkareshwar jyotirlinga",
      "pune",
      "nashik",
      "aurangabad",
      "ujjain",
      "maheshwar",
      "indore",
      "dagdusheth",
      "shaniwar wada",
      "aga khan palace",
      "lal mahal",
      "bibi ka maqbara",
      "ellora caves",
      "aurangabad caves",
      "daulatabad fort",
      "harsiddhi mata",
      "kal bhairav",
      "gadh kalika",
      "gopal mandir",
      "chintaman ganesh",
      "jantar mantar",
      "ram ghat",
      "triveni museum",
      "narmada river",
      "panch jyotirlinga itinerary",
      "jyotirlinga itinerary",
      "jyotirlinga package price",
      "jyotirlinga package duration",
      "train",
      "train ticket",
      "hotel",
      "meals",
      "transport",
      "sightseeing",
      "temple tour",
    ],

    summary: {
      duration: "14 Nights / 15 Days",
      price: "₹25,500 per person",
      rating: "9.1",
      category: "Domestic Tour",
      destinations:
        "Pune • Nashik • Aurangabad • Ujjain • Omkareshwar • Maheshwar • Indore",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "package price",
          "jyotirlinga price",
        ],

        response:
          "The Five Jyotirlinga Tour Package costs ₹25,500 per person.\n\nDuration: 14 Nights / 15 Days\nCategory: Domestic Tour\nRating: 9.1",
      },

      duration: {
        keywords: ["duration", "how many days", "how long", "days", "nights"],

        response:
          "The Five Jyotirlinga Tour Package is for 14 Nights / 15 Days.",
      },

      overview: {
        keywords: [
          "details",
          "package details",
          "about",
          "overview",
          "tell me about",
          "what is this tour",
        ],

        response:
          "Five Jyotirlinga Tour Package\n\nDuration: 14 Nights / 15 Days\nPrice: ₹25,500 per person\nRating: 9.1\n\nDestinations:\nPune • Nashik • Aurangabad • Ujjain • Omkareshwar • Maheshwar • Indore\n\nThe tour covers five major Jyotirlingas along with temples, historical attractions and local sightseeing.",
      },

      jyotirlingas: {
        keywords: [
          "which jyotirlingas",
          "five jyotirlingas",
          "jyotirlingas covered",
          "jyotirlinga covered",
          "temples covered",
          "which temples",
        ],

        response:
          "The Five Jyotirlingas covered in this tour are:\n\n1. Bhimashankar Jyotirlinga\n2. Trimbakeshwar Jyotirlinga\n3. Grishneshwar Jyotirlinga\n4. Mahakaleshwar Jyotirlinga\n5. Omkareshwar Jyotirlinga",
      },

      destinations: {
        keywords: [
          "destinations",
          "places covered",
          "places",
          "locations",
          "cities covered",
          "where do we go",
        ],

        response:
          "The main destinations covered are:\n\nPune\nNashik\nAurangabad\nUjjain\nOmkareshwar\nMaheshwar\nIndore",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places to visit",
          "attractions",
          "what will we see",
          "tourist places",
        ],

        response:
          "Major sightseeing attractions include:\n\n• Dagdusheth Halwai Ganpati Temple\n• Shaniwar Wada\n• Aga Khan Palace\n• Lal Mahal\n• Bhimashankar Jyotirlinga\n• Trimbakeshwar Jyotirlinga\n• Bibi Ka Maqbara\n• Ellora Caves\n• Aurangabad Caves\n• Daulatabad Fort\n• Mahakaleshwar Jyotirlinga\n• Harsiddhi Mata Temple\n• Kal Bhairav Temple\n• Gadh Kalika Temple\n• Gopal Mandir\n• Chintaman Ganesh Temple\n• Ram Ghat\n• Triveni Museum\n• Omkareshwar Jyotirlinga\n• Narmada River Ghats\n• Maheshwar",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day-wise",
          "tour plan",
          "travel plan",
          "daily plan",
        ],

        response:
          "Five Jyotirlinga Tour — Day-wise Itinerary\n\nDay 1: Howrah → Pune\nBoard Azad Hind Express from Howrah. Overnight in train.\n\nDay 2: Train Journey\nContinue journey towards Pune.\n\nDay 3: Pune\nArrival at Pune and sightseeing including Dagdusheth Ganpati, Shaniwar Wada, Aga Khan Palace and Lal Mahal.\n\nDay 4: Bhimashankar\nVisit Bhimashankar Jyotirlinga and return to Pune.\n\nDay 5: Pune → Nashik\nDrive to Nashik and local sightseeing.\n\nDay 6: Trimbakeshwar\nVisit Trimbakeshwar Jyotirlinga.\n\nDay 7: Nashik → Aurangabad\nVisit Bibi Ka Maqbara, Ellora Caves, Aurangabad Caves and Daulatabad Fort.\n\nDay 8: Grishneshwar → Ujjain\nVisit Grishneshwar Jyotirlinga and board the train to Ujjain.\n\nDay 9: Ujjain\nArrival and hotel check-in.\n\nDay 10: Ujjain Sightseeing\nVisit Mahakaleshwar Jyotirlinga and major Ujjain temples.\n\nDay 11: Ujjain → Omkareshwar\nDrive to Omkareshwar.\n\nDay 12: Omkareshwar\nVisit Omkareshwar Jyotirlinga and Narmada River ghats.\n\nDay 13: Omkareshwar → Maheshwar → Indore\nVisit Maheshwar and transfer to Indore Railway Station for the return journey.\n\nDay 14: Train Journey\nContinue journey towards Kolkata.\n\nDay 15: Arrival at Howrah.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "what is included",
          "package includes",
          "facilities",
          "meals included",
          "hotel included",
          "transport included",
        ],

        response:
          "The package includes:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• Sightseeing as per the tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "what is not included",
          "package excludes",
        ],

        response:
          "The package excludes:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permits\n• Any ride or safari\n• Personal activities\n• Any item not mentioned in the inclusions",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "train travel",
          "railway",
          "howrah to pune",
          "return train",
        ],

        response:
          "Train travel is included in the package.\n\nThe tour starts from Howrah and uses train travel for major long-distance transfers. Sleeper class train tickets are included.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "where will we stay",
        ],

        response:
          "Deluxe room accommodation is included in the package. Hotel stays are arranged at the major destinations according to the tour schedule.",
      },

      meals: {
        keywords: [
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "food included",
        ],

        response:
          "Meals are included in the package:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "car",
          "vehicle",
          "road travel",
          "pickup",
          "drop",
        ],

        response:
          "Transportation is included as per the tour schedule, along with parking, toll tax, pick-up and drop.",
      },

      bhimashankar: {
        keywords: ["bhimashankar", "bhimashankar jyotirlinga"],

        response:
          "Yes, Bhimashankar Jyotirlinga is included in the tour.\n\nIt is covered on Day 4 during the Pune stay.",
      },

      trimbakeshwar: {
        keywords: ["trimbakeshwar", "trimbakeshwar jyotirlinga"],

        response:
          "Yes, Trimbakeshwar Jyotirlinga is included.\n\nThe temple visit is scheduled on Day 6 during the Nashik stay.",
      },

      grishneshwar: {
        keywords: ["grishneshwar", "grishneshwar jyotirlinga"],

        response:
          "Yes, Grishneshwar Jyotirlinga is included.\n\nIt is visited on Day 8 before travelling to Ujjain.",
      },

      mahakaleshwar: {
        keywords: ["mahakaleshwar", "mahakaleshwar jyotirlinga"],

        response:
          "Yes, Mahakaleshwar Jyotirlinga is included.\n\nIt is covered during Ujjain sightseeing on Day 10.",
      },

      omkareshwar: {
        keywords: ["omkareshwar", "omkareshwar jyotirlinga"],

        response:
          "Yes, Omkareshwar Jyotirlinga is included.\n\nThe visit is scheduled on Day 12, along with the Narmada River ghats.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reserve",
          "reservation",
        ],

        response:
          "For booking, availability, hotel options and the latest package price, please contact Riya Tours & Travels.\n\nYou can ask me for the package price, itinerary, inclusions, exclusions or sightseeing details.",
      },
    },
  },
  {
    id: 7,

    topic: "Himachal Pradesh",

    keywords: [
      "himachal",
      "himachal pradesh",
      "himachal tour",
      "himachal package",
      "himachal pradesh tour",
      "himachal pradesh package",
      "shimla",
      "shimla tour",
      "shimla package",
      "manali",
      "manali tour",
      "manali package",
      "bhuntar",
      "bhuntar tour",
      "manikaran",
      "manikaran tour",
      "kufri",
      "fagu",
      "green valley",
      "mall road",
      "kali bari temple",
      "solang valley",
      "atal tunnel",
      "sisu village",
      "rohtang",
      "rohtang pass",
      "hadimba temple",
      "tibetan monastery",
      "handicraft centre",
      "vashisht village",
      "shimla manali",
      "shimla manali tour",
      "shimla manali package",
      "shimla manali bhuntar",
      "shimla manali bhuntar tour",
      "himachal price",
      "himachal package price",
      "shimla price",
      "manali price",
      "himachal duration",
      "himachal itinerary",
      "himachal package duration",
      "himachal sightseeing",
      "himachal hotel",
      "himachal meals",
      "himachal transport",
      "himachal train",
      "train ticket",
      "hill station",
      "hill station tour",
    ],

    summary: {
      duration: "10 Nights / 11 Days",
      price: "₹20,500 per person",
      rating: "8.8",
      category: "Domestic Tour",
      destinations: "Shimla • Manali • Bhuntar • Manikaran",
    },

    intents: {
      overview: {
        keywords: [
          "details",
          "package details",
          "about",
          "overview",
          "tell me about",
          "what is this tour",
          "himachal package",
        ],

        response:
          "Himachal Pradesh Tour Package\n\nDuration: 10 Nights / 11 Days\nPrice: ₹20,500 per person\nRating: 8.8\nCategory: Domestic Tour\n\nDestinations:\nShimla • Manali • Bhuntar • Manikaran\n\nThis tour combines beautiful hill stations, temples, valleys and scenic mountain destinations in Himachal Pradesh.",
      },

      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "package price",
          "himachal price",
          "shimla price",
          "manali price",
        ],

        response:
          "The Himachal Pradesh Tour Package costs ₹20,500 per person.\n\nDuration: 10 Nights / 11 Days\nRating: 8.8",
      },

      duration: {
        keywords: [
          "duration",
          "how many days",
          "how long",
          "days",
          "nights",
          "package duration",
        ],

        response:
          "The Himachal Pradesh Tour Package is for 10 Nights / 11 Days.",
      },

      destinations: {
        keywords: [
          "destinations",
          "places covered",
          "places",
          "locations",
          "cities covered",
          "where do we go",
        ],

        response:
          "The main destinations covered are:\n\n• Shimla\n• Manali\n• Bhuntar\n• Manikaran",
      },

      shimla: {
        keywords: [
          "shimla",
          "shimla tour",
          "shimla sightseeing",
          "shimla places",
        ],

        response:
          "Shimla is covered during the first part of the tour.\n\nShimla attractions include:\n• Mall Road\n• Kali Bari Temple\n• Kufri\n• Fagu\n• Green Valley\n\nShimla stay is covered on Days 3 and 4.",
      },

      manali: {
        keywords: [
          "manali",
          "manali tour",
          "manali sightseeing",
          "manali places",
        ],

        response:
          "Manali is one of the main destinations of the tour.\n\nManali attractions include:\n• Hadimba Temple\n• Tibetan Monastery\n• Handicraft Centre\n• Old Vashisht Village\n• Solang Valley\n• Atal Tunnel\n• Sisu Village\n\nManali stay is mainly covered from Days 5 to 7.",
      },

      manikaran: {
        keywords: ["manikaran", "manikaran tour", "manikaran sightseeing"],

        response:
          "Manikaran is covered towards the end of the tour.\n\nAfter the Manali stay, the tour proceeds towards Manikaran / Bhuntar on Day 8.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places to visit",
          "attractions",
          "what will we see",
          "tourist places",
          "himachal sightseeing",
        ],

        response:
          "Major sightseeing attractions include:\n\n• Mall Road\n• Kali Bari Temple\n• Kufri\n• Fagu\n• Green Valley\n• Hadimba Temple\n• Tibetan Monastery\n• Handicraft Centre\n• Old Vashisht Village\n• Solang Valley\n• Atal Tunnel\n• Sisu Village\n• Manikaran\n• Bhuntar",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day-wise",
          "tour plan",
          "travel plan",
          "daily plan",
        ],

        response:
          "Himachal Pradesh Tour — Day-wise Itinerary\n\nDay 1: Howrah → Chandigarh / Kalka\nBoard the train from Howrah. Overnight in train.\n\nDay 2: Train Journey\nContinue towards Himachal Pradesh.\n\nDay 3: Arrival at Shimla\nTransfer to Shimla hotel. Visit Mall Road and Kali Bari Temple.\n\nDay 4: Kufri Excursion\nVisit Kufri, Fagu and Green Valley. Return to Shimla.\n\nDay 5: Shimla → Manali\nProceed to Manali through the scenic mountain route.\n\nDay 6: Manali Local Sightseeing\nVisit Hadimba Temple, Tibetan Monastery, Handicraft Centre and Old Vashisht Village.\n\nDay 7: Solang Valley & Atal Tunnel\nVisit Solang Valley, Atal Tunnel and Sisu Village. Rohtang Pass is optional at own cost.\n\nDay 8: Manali → Manikaran / Bhuntar\nDrive to Manikaran / Bhuntar and check in at the hotel.\n\nDay 9: Bhuntar → Chandigarh / Kalka\nTransfer to the railway station and board the return train.\n\nDay 10: Train Journey\nContinue the journey towards Howrah.\n\nDay 11: Arrival at Howrah\nArrive at Howrah Railway Station.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "what is included",
          "package includes",
          "facilities",
          "meals included",
          "hotel included",
          "transport included",
        ],

        response:
          "The Himachal package includes:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• Sightseeing as per the tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "what is not included",
          "package excludes",
        ],

        response:
          "The package excludes:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permits\n• Rohtang Pass excursion\n• Personal activities\n• Any ride or safari\n• Any item not mentioned in the inclusions",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "where will we stay",
        ],

        response:
          "Deluxe room accommodation is included in the Himachal package.\n\nHotel stays are arranged at the major destinations according to the tour schedule, including Shimla, Manali and Manikaran / Bhuntar.",
      },

      meals: {
        keywords: [
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "food included",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "car",
          "vehicle",
          "road travel",
          "pickup",
          "drop",
        ],

        response:
          "Transportation is included according to the tour schedule.\n\nThe package also includes parking, toll tax, pick-up and drop.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "train travel",
          "railway",
          "howrah to chandigarh",
          "howrah to kalka",
          "return train",
        ],

        response:
          "Train travel is included in the package.\n\nSleeper class train tickets are included for the journey between Howrah and Chandigarh / Kalka, according to the tour schedule.",
      },

      rohtang: {
        keywords: ["rohtang", "rohtang pass"],

        response:
          "Rohtang Pass is an optional excursion during the Manali sightseeing program.\n\nThe Rohtang Pass excursion is not included in the package price and is payable separately.",
      },

      solang: {
        keywords: ["solang", "solang valley"],

        response:
          "Solang Valley is included in the Manali sightseeing program on Day 7, along with the Atal Tunnel and Sisu Village.",
      },

      atal_tunnel: {
        keywords: ["atal tunnel", "sisu", "sisu village"],

        response:
          "Atal Tunnel and Sisu Village are included in the Manali excursion on Day 7.",
      },

      kufri: {
        keywords: ["kufri", "fagu", "green valley"],

        response:
          "Kufri, Fagu and Green Valley are included in the Shimla sightseeing program on Day 4.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reserve",
          "reservation",
        ],

        response:
          "For booking, availability, hotel options and the latest package information, please contact Riya Tours & Travels.\n\nYou can also ask me about the price, itinerary, sightseeing, inclusions or exclusions.",
      },
    },
  },
  {
    id: 8,

    topic: "Koraput - Araku Valley - Visakhapatnam - Hyderabad",

    keywords: [
      "koraput",
      "koraput tour",
      "koraput package",
      "koraput tour package",
      "araku",
      "araku valley",
      "araku valley tour",
      "araku valley package",
      "visakhapatnam",
      "visakhapatnam tour",
      "vizag",
      "vizag tour",
      "vizag package",
      "hyderabad",
      "hyderabad tour",
      "hyderabad package",
      "koraput araku vizag hyderabad",
      "koraput vizag hyderabad",
      "koraput vizag",
      "koraput hyderabad",
    ],

    summary: {
      duration: "10 Nights / 11 Days",
      price: "₹29,500 per person",
      category: "Domestic Tour",
      rating: "8.6",
      destinations: "Koraput • Araku Valley • Visakhapatnam • Hyderabad",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "package price",
          "koraput price",
          "koraput package price",
        ],
        response:
          "The Koraput - Araku Valley - Visakhapatnam - Hyderabad tour package costs ₹29,500 per person.\n\nDuration: 10 Nights / 11 Days\nCategory: Domestic Tour\nRating: 8.6",
      },

      duration: {
        keywords: ["duration", "days", "nights", "how many days", "how long"],
        response:
          "The Koraput - Araku Valley - Visakhapatnam - Hyderabad tour is for 10 Nights / 11 Days.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day-wise",
          "plan",
          "tour plan",
        ],
        response: `Koraput - Araku Valley - Visakhapatnam - Hyderabad Itinerary

Day 1: Howrah → Koraput
Board Train 18005 from Howrah Railway Station for Koraput. Overnight journey.

Day 2: Arrival at Koraput
Arrive at Koraput Railway Station and transfer to the hotel.

Day 3: Koraput Sightseeing
Visit Duduma Waterfall and Gupteswar Cave.

Day 4: Koraput → Araku Valley
Visit Borra Cave, Tribal Museum, gardens and Chapurai.

Day 5: Araku Valley → Vizag
Visit Rushikonda Beach, Kailasagiri, Submarine Museum, Visakha Museum and Fishing Harbor.

Day 6: Vizag Sightseeing
Visit Simhachalam Hill, R.K. Beach and Yarada Beach.

Day 7: Vizag → Hyderabad
Transfer to Vizag Railway Station and board the train for Hyderabad. Overnight journey.

Day 8: Hyderabad Heritage Tour
Visit Charminar, Golconda Fort, Salar Jung Museum, Birla Temple, Lumbini Park, Chilkur Balaji Temple and Buddha Statue.

Day 9: Ramoji Film City
Full-day visit to Ramoji Film City.

Day 10: Hyderabad → Kolkata
Transfer to Hyderabad Railway Station and board the return train to Kolkata.

Day 11: Arrival at Howrah
Arrive at Howrah Railway Station.`,
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "tourist places",
          "what to see",
        ],
        response: `Major sightseeing covered in the tour:

Koraput:
• Duduma Waterfall
• Gupteswar Cave

Araku Valley:
• Araku Valley
• Borra Cave
• Tribal Museum
• Chapurai

Visakhapatnam:
• Rushikonda Beach
• Kailasagiri
• Submarine Museum
• Visakha Museum
• Fishing Harbor
• Simhachalam Hill
• R.K. Beach
• Yarada Beach

Hyderabad:
• Charminar
• Golconda Fort
• Salar Jung Museum
• Birla Temple
• Lumbini Park
• Chilkur Balaji Temple
• Buddha Statue
• Ramoji Film City`,
      },

      destinations: {
        keywords: [
          "destination",
          "destinations",
          "places covered",
          "which places",
          "where",
          "locations",
        ],
        response:
          "The tour covers four major destinations:\n\n• Koraput\n• Araku Valley\n• Visakhapatnam (Vizag)\n• Hyderabad",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
        ],
        response: `Package Inclusions:

• Deluxe room accommodation
• Sleeper class train tickets
• Train meals including lunch and dinner
• Breakfast
• Lunch
• Evening tea and snacks
• Dinner
• Transportation
• Parking and toll tax
• Pick-up and drop
• Sightseeing as per the tour schedule`,
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is excluded",
        ],
        response: `Package Exclusions:

• Flight tickets
• Single supplement cost
• Mineral water
• Soft drinks and hard drinks
• Guide charges
• Porter charges
• Entry fees
• Camera charges
• Permits
• Personal activities
• Any ride or safari
• Any item not specifically mentioned in the inclusions`,
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "railway",
          "train journey",
          "koraput train",
        ],
        response:
          "Train travel is included in the package. The tour starts from Howrah to Koraput by train and includes the return train journey from Hyderabad to Kolkata. Sleeper class train tickets are included.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "koraput hotel",
        ],
        response:
          "Deluxe room accommodation is included in the package. Hotel stays are provided at Koraput, Araku Valley, Visakhapatnam and Hyderabad as per the tour schedule.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
        ],
        response:
          "Meals are included in the package, including breakfast, lunch, evening tea and snacks, dinner, and train meals including lunch and dinner.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "pickup",
          "drop",
          "transfer",
        ],
        response:
          "Transportation is included throughout the tour according to the itinerary. Pick-up and drop services, parking and toll tax are also included.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "reservation",
          "how to book",
        ],
        response:
          "For booking, latest availability, hotel options and updated package details, please contact TravelX.",
      },
    },
  },
  {
    id: 9,

    topic: "Northeast Grand Tour",

    keywords: [
      "northeast",
      "northeast tour",
      "northeast package",
      "northeast tour package",
      "northeast grand tour",
      "northeast india",
      "nagaland",
      "nagaland tour",
      "nagaland package",
      "tripura",
      "tripura tour",
      "tripura package",
      "manipur",
      "manipur tour",
      "manipur package",
      "mizoram",
      "mizoram tour",
      "mizoram package",
      "dimapur",
      "dimapur tour",
      "kohima",
      "kohima tour",
      "imphal",
      "imphal tour",
      "silchar",
      "silchar tour",
      "aizawl",
      "aizawl tour",
      "agartala",
      "agartala tour",
      "northeast grand tour package",
    ],

    summary: {
      duration: "12 Nights / 13 Days",
      price: "₹35,500 per person",
      category: "Domestic Tour",
      rating: "8.8",
      destinations: "Dimapur • Kohima • Imphal • Silchar • Aizawl • Agartala",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "how much",
          "package price",
          "northeast price",
          "northeast package price",
        ],
        response:
          "The Northeast Grand Tour package costs ₹35,500 per person.\n\nDuration: 12 Nights / 13 Days\nCategory: Domestic Tour\nRating: 8.8",
      },

      duration: {
        keywords: ["duration", "days", "nights", "how many days", "how long"],
        response:
          "The Northeast Grand Tour package is for 12 Nights / 13 Days.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day-wise",
          "plan",
          "tour plan",
        ],
        response: `Northeast Grand Tour Itinerary

Day 1: Howrah → Dimapur
Board Train 15959 from Howrah Railway Station for Dimapur. Overnight journey.

Day 2: Arrival at Dimapur
Arrive at Dimapur Railway Station and transfer to the hotel.

Day 3: Dimapur → Kohima
Drive to Kohima and visit World War II Cemetery, Nagaland Museum and Kisama Heritage Village.

Day 4: Kohima → Imphal
Proceed to Imphal and, subject to available time, visit Loktak Lake, Kaibul Lamjao National Park and INA Museum.

Day 5: Imphal Sightseeing
Visit State Orchidarium, World War II Cemeteries, Manipur State Museum, Old Polo Ground and BT Park.

Day 6: Imphal → Silchar
Proceed to Silchar and check in to the hotel.

Day 7: Silchar → Aizawl
Transfer to Aizawl and check in to the hotel.

Day 8: Aizawl Sightseeing
Visit Bara Bazar, Luangmual Handicraft Centre, Mizoram State Museum, Durtlang Hills, Mini Zoo and Berawtlang Tourist Complex.

Day 9: Aizawl → Silchar
Return to Silchar and arrive in the late afternoon.

Day 10: Silchar → Agartala
Proceed to Agartala and visit major local attractions including Ujjayanta Palace, State Museum, Jagannath Temple, Heritage Park and Durgabari Tea Garden.

Day 11: Unakoti Excursion
Visit the famous Unakoti Archaeological Site and return to Agartala.

Day 12: Agartala → Kolkata
Transfer to Agartala Railway Station and board the return train to Kolkata.

Day 13: Arrival at Sealdah
Arrive at Sealdah Railway Station.`,
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "tourist places",
          "what to see",
        ],
        response: `Major Sightseeing:

Nagaland:
• World War II Cemetery
• Nagaland Museum
• Kisama Heritage Village

Manipur:
• Loktak Lake
• Kaibul Lamjao National Park
• INA Museum
• State Orchidarium
• Manipur State Museum
• Old Polo Ground
• BT Park

Mizoram:
• Bara Bazar
• Luangmual Handicraft Centre
• Mizoram State Museum
• Durtlang Hills
• Mini Zoo
• Berawtlang Tourist Complex

Tripura:
• State Museum
• Ujjayanta Palace
• MBB College
• Jagannath Temple
• Umamaheswari Temple
• Heritage Park
• Laxminarayan Temple
• Venuban Bihar
• Durgabari Tea Garden
• Unakoti Archaeological Site`,
      },

      destinations: {
        keywords: [
          "destination",
          "destinations",
          "places covered",
          "which places",
          "locations",
          "states covered",
          "which states",
        ],
        response:
          "The Northeast Grand Tour covers:\n\n• Dimapur\n• Kohima\n• Imphal\n• Silchar\n• Aizawl\n• Agartala\n\nThe tour covers major attractions across Nagaland, Manipur, Mizoram and Tripura.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
        ],
        response: `Package Inclusions:

• Deluxe room accommodation
• Sleeper class train tickets
• Train meals including lunch and dinner
• Breakfast
• Lunch
• Evening tea and snacks
• Dinner
• Transportation
• Parking and toll tax
• Pick-up and drop
• Sightseeing as per the tour schedule`,
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is excluded",
        ],
        response: `Package Exclusions:

• Flight tickets
• Single supplement cost
• Mineral water
• Soft drinks and hard drinks
• Guide charges
• Porter charges
• Entry fees
• Camera charges
• Forest permit charges
• Personal activities
• Any ride or safari
• Any item not specifically mentioned in the inclusions`,
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "railway",
          "train journey",
          "northeast train",
        ],
        response:
          "Train travel is included in the package. The tour starts from Howrah to Dimapur by train and the return journey is from Agartala to Kolkata. Sleeper class train tickets are included.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "northeast hotel",
        ],
        response:
          "Deluxe room accommodation is included in the package. Hotel stays are arranged according to the tour schedule at the respective destinations.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
        ],
        response:
          "Meals are included in the package, including breakfast, lunch, evening tea and snacks, dinner, and train meals including lunch and dinner.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "pickup",
          "drop",
          "transfer",
        ],
        response:
          "Transportation is included throughout the tour according to the itinerary. Pick-up and drop services, parking and toll tax are also included.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "reservation",
          "how to book",
        ],
        response:
          "For booking, latest availability, hotel options and updated package details, please contact TravelX.",
      },
    },
  },
  {
    id: 10,

    topic: "Offbeat Kashmir",

    keywords: [
      "kashmir",
      "kashmir tour",
      "kashmir package",
      "kashmir tour package",
      "offbeat kashmir",
      "offbeat kashmir tour",
      "offbeat kashmir package",
      "offbeat kashmir tour package",
      "srinagar",
      "srinagar tour",
      "srinagar package",
      "srinagar sightseeing",
      "gurez",
      "gurez valley",
      "gurez valley tour",
      "gurez valley package",
      "gurez sightseeing",
      "habba khatoon",
      "habba khatoon peak",
      "kishanganga river",
      "tulail valley",
      "lolab",
      "lolab valley",
      "lolab valley tour",
      "lolab valley package",
      "lolab sightseeing",
      "keran",
      "keran valley",
      "keran valley tour",
      "keran valley package",
      "keran sightseeing",
      "keran village",
      "doodhpathri",
      "doodhpathri tour",
      "doodhpathri sightseeing",
      "kashmir train",
      "kashmir hotel",
      "kashmir meals",
      "kashmir transport",
      "kashmir train ticket",
      "gurez lolab keran",
      "gurez lolab",
      "gurez keran",
      "lolab keran",
      "srinagar gurez",
      "srinagar gurez lolab keran",
      "kashmir valley tour",
      "kashmir valley package",
      "kashmir offbeat tour",
      "offbeat valley tour",
      "kashmir sightseeing package",
      "kashmir holiday package",
    ],

    summary: {
      duration: "12 Nights / 13 Days",
      price: "₹29,500 per person",
      rating: "8.9",
      category: "Domestic Tour",
      destinations: "Srinagar • Gurez Valley • Lolab Valley • Keran Valley",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "kashmir price",
          "kashmir package price",
          "offbeat kashmir price",
        ],

        response:
          "The Offbeat Kashmir - Gurez Valley - Lolab Valley - Keran Valley package costs ₹29,500 per person.\n\nDuration: 12 Nights / 13 Days\nCategory: Domestic Tour\nRating: 8.9\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "kashmir itinerary",
          "gurez itinerary",
          "kashmir trip plan",
        ],

        response:
          "Offbeat Kashmir - Gurez Valley - Lolab Valley - Keran Valley Itinerary\n\nDay 1: Kolkata → Jammu\nBoard Train 13151 Jammu Tawi Express from Kolkata Railway Station. Overnight stay in train.\n\nDay 2: Train Journey\nContinue the train journey towards Jammu. Overnight stay in train.\n\nDay 3: Jammu → Srinagar\nArrive at Jammu Railway Station and board Vande Bharat for Srinagar. Transfer to hotel on arrival. Overnight stay at Srinagar.\n\nDay 4: Srinagar → Gurez Valley\nDrive through scenic mountain roads to Gurez Valley. Check in to hotel and enjoy the valley surroundings. Overnight stay at Gurez Valley.\n\nDay 5: Gurez Valley Exploration\nVisit Habba Khatoon Peak and Kishanganga River. Tulail Valley excursion is optional and at own cost. Overnight stay at Gurez Valley.\n\nDay 6: Gurez Valley → Lolab Valley\nAfter breakfast proceed to the picturesque Lolab Valley surrounded by dense forests and mountains. Overnight stay at Lolab Valley.\n\nDay 7: Lolab Valley → Keran Valley\nDrive to the beautiful border valley of Keran and check in to hotel. Overnight stay at Keran Valley.\n\nDay 8: Keran Valley Sightseeing\nExplore Keran Village and enjoy the scenic surroundings of the valley. Optional activities are at own cost. Overnight stay at Keran Valley.\n\nDay 9: Keran Valley → Srinagar\nReturn to Srinagar after breakfast. Enjoy the evening at leisure. Overnight stay at Srinagar.\n\nDay 10: Doodhpathri Excursion\nFull-day excursion to Doodhpathri. Return to Srinagar for overnight stay.\n\nDay 11: Srinagar → Jammu\nAfter breakfast drive to Jammu Railway Station and board the return train for Kolkata. Overnight stay in train.\n\nDay 12: Train Journey\nContinue the return train journey towards Kolkata. Overnight stay in train.\n\nDay 13: Arrival at Kolkata / Howrah\nArrive at Howrah / Kolkata Railway Station with sweet memories of your Kashmir valley tour.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "kashmir sightseeing",
          "gurez sightseeing",
          "lolab sightseeing",
          "keran sightseeing",
          "doodhpathri sightseeing",
        ],

        response:
          "Major Attractions Covered:\n\n• Srinagar\n• Gurez Valley\n• Habba Khatoon Peak\n• Kishanganga River\n• Tulail Valley\n• Lolab Valley\n• Keran Valley\n• Keran Village\n• Doodhpathri\n• Scenic Himalayan landscapes\n• Kashmiri villages and valleys\n\nThe tour mainly focuses on the offbeat valleys and scenic landscapes of Kashmir.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "kashmir inclusions",
          "kashmir included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "kashmir exclusions",
          "kashmir excluded",
        ],

        response:
          "Package Exclusions:\n\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permits\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above\n\nOptional activities and additional personal expenses are payable separately.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "kashmir booking",
          "kashmir contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Offbeat Kashmir - Gurez Valley - Lolab Valley - Keran Valley\nDuration: 12 Nights / 13 Days\nPrice: ₹29,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "kashmir facilities",
          "hotel facilities",
          "transport facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe hotel accommodation\n• Train travel\n• Train meals including lunch and dinner\n• Daily breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Pick-up and drop\n• Parking and toll tax\n• Sightseeing as per schedule",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "kashmir destinations",
        ],

        response:
          "Destinations Covered:\n\n• Srinagar\n• Gurez Valley\n• Lolab Valley\n• Keran Valley\n• Doodhpathri\n\nThe journey also includes Jammu as the train transit point.",
      },

      gurez: {
        keywords: [
          "gurez",
          "gurez valley",
          "habba khatoon",
          "habba khatoon peak",
          "kishanganga river",
          "tulail valley",
        ],

        response:
          "Gurez Valley is one of the main highlights of the tour.\n\nThe itinerary includes:\n• Gurez Valley exploration\n• Habba Khatoon Peak\n• Kishanganga River\n\nTulail Valley is available as an optional excursion at the traveler's own cost.",
      },

      lolab: {
        keywords: [
          "lolab",
          "lolab valley",
          "lolab valley tour",
          "lolab sightseeing",
        ],

        response:
          "Lolab Valley is included in the package.\n\nOn Day 6, the tour travels from Gurez Valley to Lolab Valley. The valley is known for its scenic mountain landscapes, forests and peaceful surroundings.\n\nOvernight stay: Lolab Valley.",
      },

      keran: {
        keywords: [
          "keran",
          "keran valley",
          "keran village",
          "keran sightseeing",
          "keran valley tour",
        ],

        response:
          "Keran Valley is included in the tour.\n\nThe itinerary includes:\n• Keran Valley\n• Keran Village\n• Scenic valley surroundings\n\nOptional activities in Keran are available at the traveler's own cost.\n\nOvernight stay: Keran Valley.",
      },

      doodhpathri: {
        keywords: [
          "doodhpathri",
          "doodhpathri tour",
          "doodhpathri sightseeing",
        ],

        response:
          "Doodhpathri is included as a full-day excursion on Day 10.\n\nThe tour travels from Srinagar to Doodhpathri and returns to Srinagar for the overnight stay.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "kashmir hotel",
          "kashmir accommodation",
        ],

        response:
          "The package includes deluxe room accommodation at the destinations mentioned in the itinerary.\n\nFor the exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "kashmir transport",
        ],

        response:
          "Transportation is included as per the tour schedule.\n\nThe package also includes pick-up and drop, parking and toll tax, and transportation between the destinations.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "kashmir train",
          "kashmir train ticket",
          "railway",
          "jammu train",
        ],

        response:
          "Train travel is included in the package.\n\nDeparture:\nKolkata → Jammu by Train 13151 Jammu Tawi Express.\n\nReturn:\nJammu → Kolkata by train.\n\nThe package includes Sleeper Class train tickets and train meals including lunch and dinner.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "kashmir meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },
    },
  },
  {
    id: 11,

    topic: "Pelling - Ravangla - Darjeeling",

    keywords: [
      "pelling",
      "pelling tour",
      "pelling package",
      "pelling tour package",
      "pelling price",
      "pelling package price",
      "pelling duration",
      "pelling itinerary",
      "pelling sightseeing",

      "ravangla",
      "ravangla tour",
      "ravangla package",
      "ravangla tour package",
      "ravangla sightseeing",
      "buddha park",
      "namchi char dham",
      "sai temple",

      "darjeeling",
      "darjeeling tour",
      "darjeeling package",
      "darjeeling tour package",
      "darjeeling price",
      "darjeeling sightseeing",
      "darjeeling itinerary",
      "tiger hill",
      "batasia loop",
      "ghoom monastery",
      "padmaja naidu",
      "himalayan zoological park",
      "hmi",
      "himalayan mountaineering institute",
      "tenzing rock",
      "japanese temple",
      "darjeeling tea garden",
      "mall road",

      "kanchenjunga",
      "kanchenjunga view",
      "kanchenjunga viewpoint",
      "rimbi waterfalls",
      "rabdentse ruins",
      "pemayangtse monastery",
      "orange garden",
      "sky walk",

      "pelling ravangla",
      "pelling darjeeling",
      "ravangla darjeeling",
      "pelling ravangla darjeeling",
      "pelling ravangla darjeeling tour",
      "pelling ravangla darjeeling package",

      "sikkim tour",
      "sikkim package",
      "sikkim darjeeling tour",
      "darjeeling sikkim tour",

      "pelling train",
      "darjeeling train",
      "pelling hotel",
      "darjeeling hotel",
      "pelling meals",
      "darjeeling meals",
      "pelling transport",
      "darjeeling transport",
      "train ticket",
      "hill station tour",
    ],

    summary: {
      duration: "05 Nights / 06 Days",
      price: "₹15,700 per person",
      rating: "8.6",
      category: "Domestic Tour",
      destinations: "Pelling • Ravangla • Darjeeling",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "pelling price",
          "pelling package price",
          "darjeeling price",
          "sikkim price",
        ],

        response:
          "The Pelling - Ravangla - Darjeeling Tour Package costs ₹15,700 per person.\n\nDuration: 05 Nights / 06 Days\nCategory: Domestic Tour\nRating: 8.6\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "pelling itinerary",
          "darjeeling itinerary",
          "sikkim itinerary",
        ],

        response:
          "Pelling - Ravangla - Darjeeling Tour Itinerary\n\nDay 1: Sealdah → NJP\nBoard Train 12343 Darjeeling Mail from Sealdah Railway Station at night. Overnight stay in train.\n\nDay 2: NJP → Pelling\nArrive at NJP Railway Station in the morning and transfer to Pelling. Evening free for leisure. Overnight stay at Pelling.\n\nDay 3: Pelling Sightseeing\nVisit Kanchenjunga viewpoints, Rimbi Waterfalls, Rabdentse Ruins, Pemayangtse Monastery, Orange Garden and the famous Sky Walk. Overnight stay at Pelling.\n\nDay 4: Pelling → Ravangla\nDrive to Ravangla. En route visit Namchi Char Dham and Sai Temple. After lunch visit Buddha Park. Overnight stay at Ravangla.\n\nDay 5: Ravangla → Darjeeling\nAfter breakfast proceed to Darjeeling. Evening free for leisure and Mall Road exploration. Overnight stay at Darjeeling.\n\nDay 6: Darjeeling Sightseeing → NJP → Howrah\nEarly morning visit Tiger Hill, Batasia Loop and Ghoom Monastery. After breakfast visit Padmaja Naidu Himalayan Zoological Park, Himalayan Mountaineering Institute, Tenzing Rock, Japanese Temple and Tea Garden. Later transfer to NJP Railway Station and board Vande Bharat Express for Howrah.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "pelling sightseeing",
          "ravangla sightseeing",
          "darjeeling sightseeing",
        ],

        response:
          "Major Attractions Covered:\n\nPelling:\n• Kanchenjunga Viewpoints\n• Rimbi Waterfalls\n• Rabdentse Ruins\n• Pemayangtse Monastery\n• Orange Garden\n• Pelling Sky Walk\n\nRavangla / Namchi:\n• Namchi Char Dham\n• Sai Temple\n• Buddha Park\n\nDarjeeling:\n• Mall Road\n• Tiger Hill\n• Batasia Loop\n• Ghoom Monastery\n• Padmaja Naidu Himalayan Zoological Park\n• Himalayan Mountaineering Institute\n• Tenzing Rock\n• Japanese Temple\n• Darjeeling Tea Garden",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "pelling inclusions",
          "darjeeling inclusions",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe room accommodation\n• 3 AC train tickets\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "pelling exclusions",
          "darjeeling exclusions",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permit charges\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "pelling booking",
          "darjeeling booking",
          "sikkim booking",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Pelling - Ravangla - Darjeeling Tour\nDuration: 05 Nights / 06 Days\nPrice: ₹15,700 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "pelling destinations",
          "darjeeling destinations",
        ],

        response:
          "Destinations Covered:\n\n• Pelling\n• Ravangla\n• Darjeeling\n\nThe journey starts from Sealdah, travels through NJP and covers the major attractions of Pelling, Ravangla and Darjeeling before returning towards Howrah.",
      },

      pelling: {
        keywords: [
          "pelling",
          "pelling tour",
          "pelling sightseeing",
          "pelling attractions",
          "pelling places",
        ],

        response:
          "Pelling is one of the main destinations of the tour.\n\nPelling Attractions:\n• Kanchenjunga Viewpoints\n• Rimbi Waterfalls\n• Rabdentse Ruins\n• Pemayangtse Monastery\n• Orange Garden\n• Pelling Sky Walk\n\nOvernight stay at Pelling is included in the itinerary.",
      },

      ravangla: {
        keywords: [
          "ravangla",
          "ravangla tour",
          "ravangla sightseeing",
          "buddha park",
          "namchi char dham",
          "sai temple",
        ],

        response:
          "Ravangla is covered on Day 4 of the tour.\n\nThe itinerary includes:\n• Namchi Char Dham\n• Sai Temple\n• Buddha Park\n\nOvernight stay at Ravangla.",
      },

      darjeeling: {
        keywords: [
          "darjeeling",
          "darjeeling tour",
          "darjeeling sightseeing",
          "darjeeling attractions",
          "darjeeling places",
        ],

        response:
          "Darjeeling is covered on Days 5 and 6.\n\nMajor Attractions:\n• Mall Road\n• Tiger Hill\n• Batasia Loop\n• Ghoom Monastery\n• Padmaja Naidu Himalayan Zoological Park\n• Himalayan Mountaineering Institute\n• Tenzing Rock\n• Japanese Temple\n• Darjeeling Tea Garden\n\nOvernight stay at Darjeeling.",
      },

      kanchenjunga: {
        keywords: [
          "kanchenjunga",
          "kanchenjunga view",
          "kanchenjunga viewpoint",
          "mount kanchenjunga",
        ],

        response:
          "Kanchenjunga viewpoints are included during Pelling sightseeing on Day 3.\n\nPelling is known for its scenic views of the Himalayan mountains and Kanchenjunga.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "pelling train",
          "darjeeling train",
          "railway",
          "njp train",
          "sealdah train",
        ],

        response:
          "Train travel is included in the package.\n\nDeparture:\nSealdah → NJP by Train 12343 Darjeeling Mail.\n\nReturn:\nNJP → Howrah by Vande Bharat Express.\n\nThe package includes 3 AC train tickets.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "pelling hotel",
          "darjeeling hotel",
        ],

        response:
          "The package includes deluxe room accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Pelling\n• Ravangla\n• Darjeeling\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "pelling meals",
          "darjeeling meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n\nTrain meals are not separately mentioned in this package. Mineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "pelling transport",
          "darjeeling transport",
        ],

        response:
          "Transportation is included throughout the tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking and toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "travel facilities",
          "tour facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe room accommodation\n• 3 AC train tickets\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Pick-up and drop\n• Parking and toll tax\n• Sightseeing as per tour schedule",
      },
    },
  },
  {
    id: 12,

    topic: "Rajasthan Grand Tour",

    keywords: [
      "rajasthan",
      "rajasthan tour",
      "rajasthan package",
      "rajasthan tour package",
      "rajasthan price",
      "rajasthan package price",
      "rajasthan duration",
      "rajasthan itinerary",
      "rajasthan sightseeing",
      "rajasthan grand tour",
      "rajasthan grand tour package",

      "bikaner",
      "bikaner tour",
      "bikaner package",
      "bikaner sightseeing",
      "junagarh fort",
      "karni mata temple",

      "jaisalmer",
      "jaisalmer tour",
      "jaisalmer package",
      "jaisalmer sightseeing",
      "sonar kella",
      "sam sand dunes",
      "sam dunes",
      "desert safari",
      "camel ride",
      "tribal dance",

      "jodhpur",
      "jodhpur tour",
      "jodhpur package",
      "jodhpur sightseeing",
      "umaid bhawan palace",
      "mehrangarh fort",

      "mount abu",
      "mount abu tour",
      "mount abu package",
      "mount abu sightseeing",
      "nakki lake",
      "dilwara temples",
      "sunset point",

      "udaipur",
      "udaipur tour",
      "udaipur package",
      "udaipur sightseeing",
      "moti magri",
      "fateh sagar lake",
      "udaipur city palace",
      "city palace udaipur",

      "chittorgarh",
      "chittorgarh fort",
      "haldighati",

      "pushkar",
      "pushkar tour",
      "pushkar package",
      "pushkar sightseeing",
      "ajmer",
      "ajmer sharif",

      "jaipur",
      "jaipur tour",
      "jaipur package",
      "jaipur sightseeing",
      "amber fort",
      "jantar mantar",
      "hawa mahal",
      "jal mahal",
      "city palace jaipur",
      "nahargarh fort",

      "bikaner jaisalmer",
      "jaisalmer jodhpur",
      "jodhpur mount abu",
      "mount abu udaipur",
      "udaipur pushkar",
      "pushkar jaipur",
      "bikaner jaisalmer jodhpur",
      "jaisalmer jodhpur udaipur",
      "rajasthan circuit",
      "rajasthan holiday",
      "rajasthan holiday package",

      "rajasthan train",
      "rajasthan hotel",
      "rajasthan meals",
      "rajasthan transport",
      "rajasthan train ticket",
      "3 ac train",
      "ac transport",
      "forts and palaces",
      "desert tour",
      "royal rajasthan",
    ],

    summary: {
      duration: "12 Nights / 14 Days",
      price: "₹34,500 per person",
      rating: "8.8",
      category: "Domestic Tour",
      destinations:
        "Bikaner • Jaisalmer • Jodhpur • Mount Abu • Udaipur • Pushkar • Jaipur",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "rajasthan price",
          "rajasthan package price",
          "tour price",
        ],

        response:
          "The Rajasthan Grand Tour Package costs ₹34,500 per person.\n\nDuration: 12 Nights / 14 Days\nCategory: Domestic Tour\nRating: 8.8\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "rajasthan itinerary",
          "rajasthan tour plan",
          "rajasthan schedule",
        ],

        response:
          "Rajasthan Grand Tour Itinerary\n\nDay 1: Sealdah → Bikaner\nBoard 12259 Duronto Express from Sealdah Railway Station in the evening for Bikaner. Overnight stay in train.\n\nDay 2: Arrival at Bikaner\nArrive at Bikaner Railway Station and transfer to hotel. Evening free for leisure. Overnight stay at Bikaner.\n\nDay 3: Bikaner → Jaisalmer\nAfter breakfast visit Junagarh Fort and Karni Mata Temple. Later proceed to Jaisalmer. Overnight stay at Jaisalmer.\n\nDay 4: Jaisalmer Sightseeing and Sam Sand Dunes\nVisit Sonar Kella and other local attractions. In the evening visit Sam Sand Dunes for tribal dance performance and optional camel ride. Return to Jaisalmer for overnight stay.\n\nDay 5: Jaisalmer → Jodhpur\nAfter breakfast proceed to Jodhpur. Overnight stay at Jodhpur.\n\nDay 6: Jodhpur → Mount Abu\nVisit Umaid Bhawan Palace and Mehrangarh Fort in the morning. Later drive to Mount Abu. Overnight stay at Mount Abu.\n\nDay 7: Mount Abu Sightseeing\nVisit Nakki Lake, Dilwara Temples and Sunset Point. Overnight stay at Mount Abu.\n\nDay 8: Mount Abu → Udaipur via Chittorgarh\nDrive to Udaipur and visit Chittorgarh Fort en route. Overnight stay at Udaipur.\n\nDay 9: Udaipur Sightseeing\nVisit Moti Magri, Fateh Sagar Lake, Udaipur City Palace and other major attractions. Overnight stay at Udaipur.\n\nDay 10: Udaipur → Pushkar via Haldighati\nTravel to Pushkar via historic Haldighati. Overnight stay at Pushkar.\n\nDay 11: Pushkar and Ajmer → Jaipur\nEarly morning visit Pushkar and Ajmer Sharif. Auto charges are at own cost. Later proceed to Jaipur. Overnight stay at Jaipur.\n\nDay 12: Jaipur Sightseeing\nVisit Amber Fort, Jantar Mantar, Hawa Mahal, Jal Mahal, City Palace, Nahargarh Fort and other attractions. Evening free for personal activities. Overnight stay at Jaipur.\n\nDay 13: Jaipur → Sealdah\nAfter lunch transfer to Jaipur Railway Station and board 12988 train for the return journey. Overnight stay in train.\n\nDay 14: Arrival at Sealdah\nArrive at Sealdah Railway Station with sweet memories of your Rajasthan tour.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "rajasthan sightseeing",
          "rajasthan attractions",
          "forts",
          "palaces",
        ],

        response:
          "Major Attractions Covered:\n\nBikaner:\n• Junagarh Fort\n• Karni Mata Temple\n\nJaisalmer:\n• Sonar Kella\n• Sam Sand Dunes\n• Tribal Dance Performance\n• Desert experience\n\nJodhpur:\n• Umaid Bhawan Palace\n• Mehrangarh Fort\n\nMount Abu:\n• Nakki Lake\n• Dilwara Temples\n• Sunset Point\n\nUdaipur:\n• Moti Magri\n• Fateh Sagar Lake\n• Udaipur City Palace\n\nChittorgarh:\n• Chittorgarh Fort\n\nPushkar / Ajmer:\n• Pushkar\n• Ajmer Sharif\n\nJaipur:\n• Amber Fort\n• Jantar Mantar\n• Hawa Mahal\n• Jal Mahal\n• City Palace\n• Nahargarh Fort",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "rajasthan inclusions",
          "rajasthan included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe room accommodation\n• Up and down 3 AC train fare\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "rajasthan exclusions",
          "rajasthan excluded",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permit charges\n• Personal activities\n• Camel ride\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "rajasthan booking",
          "rajasthan contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Rajasthan Grand Tour\nDuration: 12 Nights / 14 Days\nPrice: ₹34,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "rajasthan destinations",
          "rajasthan route",
        ],

        response:
          "Destinations Covered:\n\n• Bikaner\n• Jaisalmer\n• Jodhpur\n• Mount Abu\n• Udaipur\n• Pushkar\n• Jaipur\n\nThe route also includes sightseeing at Chittorgarh, Haldighati and Ajmer.",
      },

      bikaner: {
        keywords: [
          "bikaner",
          "bikaner tour",
          "bikaner sightseeing",
          "junagarh fort",
          "karni mata temple",
        ],

        response:
          "Bikaner is the first major destination of the Rajasthan Grand Tour.\n\nMajor Attractions:\n• Junagarh Fort\n• Karni Mata Temple\n\nThe tour arrives at Bikaner on Day 2 and proceeds towards Jaisalmer on Day 3.",
      },

      jaisalmer: {
        keywords: [
          "jaisalmer",
          "jaisalmer tour",
          "jaisalmer sightseeing",
          "sonar kella",
          "sam sand dunes",
          "sam dunes",
          "desert tour",
        ],

        response:
          "Jaisalmer is one of the main highlights of the Rajasthan tour.\n\nMajor Attractions:\n• Sonar Kella\n• Sam Sand Dunes\n• Desert landscape\n• Tribal Dance Performance\n• Optional Camel Ride\n\nThe Sam Sand Dunes visit takes place on Day 4.",
      },

      desert: {
        keywords: [
          "desert",
          "desert safari",
          "camel ride",
          "sam sand dunes",
          "sam dunes",
          "tribal dance",
        ],

        response:
          "The desert experience is included during the Jaisalmer stay.\n\nSam Sand Dunes are visited on Day 4 along with a tribal dance performance.\n\nCamel ride is optional and is excluded from the package price.",
      },

      jodhpur: {
        keywords: [
          "jodhpur",
          "jodhpur tour",
          "jodhpur sightseeing",
          "umaid bhawan palace",
          "mehrangarh fort",
        ],

        response:
          "Jodhpur is covered on Day 6 of the Rajasthan tour.\n\nMajor Attractions:\n• Umaid Bhawan Palace\n• Mehrangarh Fort\n\nAfter sightseeing, the tour proceeds to Mount Abu.",
      },

      mountabu: {
        keywords: [
          "mount abu",
          "mount abu tour",
          "mount abu sightseeing",
          "nakki lake",
          "dilwara temples",
          "sunset point",
        ],

        response:
          "Mount Abu is covered on Days 6 and 7.\n\nMajor Attractions:\n• Nakki Lake\n• Dilwara Temples\n• Sunset Point\n\nOvernight stay is provided at Mount Abu.",
      },

      udaipur: {
        keywords: [
          "udaipur",
          "udaipur tour",
          "udaipur sightseeing",
          "moti magri",
          "fateh sagar lake",
          "udaipur city palace",
          "city palace udaipur",
        ],

        response:
          "Udaipur is covered on Days 8 and 9.\n\nMajor Attractions:\n• Chittorgarh Fort en route\n• Moti Magri\n• Fateh Sagar Lake\n• Udaipur City Palace\n\nOvernight stays are provided at Udaipur.",
      },

      pushkar: {
        keywords: [
          "pushkar",
          "pushkar tour",
          "pushkar sightseeing",
          "ajmer",
          "ajmer sharif",
        ],

        response:
          "Pushkar and Ajmer are covered on Day 11.\n\nThe itinerary includes:\n• Pushkar\n• Ajmer Sharif\n\nAuto charges during the Pushkar and Ajmer sightseeing are at the traveler's own cost.",
      },

      jaipur: {
        keywords: [
          "jaipur",
          "jaipur tour",
          "jaipur sightseeing",
          "amber fort",
          "jantar mantar",
          "hawa mahal",
          "jal mahal",
          "city palace jaipur",
          "nahargarh fort",
        ],

        response:
          "Jaipur is the final major destination of the Rajasthan Grand Tour.\n\nMajor Attractions:\n• Amber Fort\n• Jantar Mantar\n• Hawa Mahal\n• Jal Mahal\n• City Palace\n• Nahargarh Fort\n\nJaipur sightseeing takes place on Day 12.",
      },

      chittorgarh: {
        keywords: ["chittorgarh", "chittorgarh fort"],

        response:
          "Chittorgarh Fort is visited en route from Mount Abu to Udaipur on Day 8.",
      },

      haldighati: {
        keywords: ["haldighati", "haldighati tour"],

        response:
          "Haldighati is covered en route from Udaipur to Pushkar on Day 10.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "rajasthan train",
          "rajasthan train ticket",
          "3 ac train",
          "railway",
          "sealdah train",
          "jaipur train",
        ],

        response:
          "Train travel is included in the Rajasthan Grand Tour.\n\nDeparture:\nSealdah → Bikaner by 12259 Duronto Express.\n\nReturn:\nJaipur → Sealdah by Train 12988.\n\nThe package includes up and down 3 AC train fare and train meals including lunch and dinner.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "rajasthan hotel",
          "rajasthan accommodation",
        ],

        response:
          "The package includes deluxe room accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Bikaner\n• Jaisalmer\n• Jodhpur\n• Mount Abu\n• Udaipur\n• Pushkar\n• Jaipur\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "rajasthan meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "ac transport",
          "rajasthan transport",
        ],

        response:
          "AC transportation is included throughout the tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking and toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe room accommodation\n• Up and down 3 AC train fare\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Pick-up and drop\n• Parking and toll tax\n• Sightseeing as per tour schedule",
      },
    },
  },
  {
    id: 13,

    topic: "South India Temple Tour",

    keywords: [
      "south india",
      "south india tour",
      "south india package",
      "south india tour package",
      "south india price",
      "south india package price",
      "south india duration",
      "south india itinerary",
      "south india sightseeing",
      "south india temple tour",
      "south india temple package",
      "south india pilgrimage",

      "tirupati",
      "tirupati tour",
      "tirupati package",
      "tirupati sightseeing",
      "tirupati balaji",
      "tirupati balaji darshan",
      "balaji temple",
      "lord tirupati balaji",

      "chennai",
      "chennai tour",
      "chennai package",
      "chennai sightseeing",
      "marina beach",
      "gandhi ghat",
      "chennai local market",

      "puducherry",
      "pondicherry",
      "puducherry tour",
      "puducherry package",
      "puducherry sightseeing",
      "seaside promenade",
      "sri aurobindo ashram",
      "rock beach",
      "paradise beach",
      "manakula vinayagar temple",

      "madurai",
      "madurai tour",
      "madurai package",
      "madurai sightseeing",
      "meenakshi temple",
      "meenakshi amman temple",

      "rameshwaram",
      "rameshwaram tour",
      "rameshwaram package",
      "rameshwaram sightseeing",
      "ramanathaswamy temple",
      "dhanushkodi",

      "kanyakumari",
      "kanyakumari tour",
      "kanyakumari package",
      "kanyakumari sightseeing",
      "vivekananda rock memorial",
      "kanyakumari temple",

      "tirupati chennai",
      "chennai puducherry",
      "puducherry madurai",
      "madurai rameshwaram",
      "rameshwaram kanyakumari",

      "tirupati chennai puducherry",
      "tirupati madurai",
      "tirupati rameshwaram",
      "tirupati kanyakumari",
      "south india temple circuit",

      "south india train",
      "south india hotel",
      "south india meals",
      "south india transport",
      "south india train ticket",
      "temple tour",
      "temple package",
      "pilgrimage tour",
    ],

    summary: {
      duration: "10 Nights / 13 Days",
      price: "₹27,500 per person",
      rating: "8.7",
      category: "Domestic Tour",
      destinations:
        "Tirupati • Chennai • Puducherry • Madurai • Rameshwaram • Kanyakumari",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "south india price",
          "south india package price",
          "tour price",
          "south india tour cost",
        ],

        response:
          "The South India Temple Tour Package costs ₹27,500 per person.\n\nDuration: 10 Nights / 13 Days\nCategory: Domestic Tour\nRating: 8.7\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "south india itinerary",
          "south india tour plan",
          "south india schedule",
          "temple tour itinerary",
        ],

        response:
          "South India Temple Tour Itinerary\n\nDay 1: Howrah / Shalimar → Tirupati\nBoard train from Howrah / Shalimar Railway Station for Tirupati. Overnight stay in train.\n\nDay 2: Arrival at Tirupati\nArrive at Tirupati Railway Station and transfer to hotel. Overnight stay at Tirupati.\n\nDay 3: Tirupati Balaji Darshan\nEarly morning visit Lord Tirupati Balaji Temple for darshan and puja. Return to hotel. Overnight stay at Tirupati.\n\nDay 4: Tirupati → Chennai\nAfter breakfast proceed to Chennai. Overnight stay at Chennai.\n\nDay 5: Chennai Sightseeing\nVisit Marina Beach, Gandhi Ghat and Chennai local market. Overnight stay at Chennai.\n\nDay 6: Chennai → Puducherry\nTravel to Puducherry and visit Seaside Promenade, Sri Aurobindo Ashram, Rock Beach, Paradise Beach and Manakula Vinayagar Temple. Overnight stay at Puducherry.\n\nDay 7: Puducherry → Madurai\nAfter breakfast drive to Madurai. Evening visit Meenakshi Temple. Overnight stay at Madurai.\n\nDay 8: Madurai → Rameshwaram\nProceed to Rameshwaram and visit Ramanathaswamy Temple and Dhanushkodi. Overnight stay at Rameshwaram.\n\nDay 9: Rameshwaram → Kanyakumari\nAfter breakfast travel to Kanyakumari. Overnight stay at Kanyakumari.\n\nDay 10: Kanyakumari Sightseeing\nVisit Vivekananda Rock Memorial and Kanyakumari Temple. Overnight stay at Kanyakumari.\n\nDay 11: Kanyakumari / Nagercoil → Kolkata\nAfter breakfast transfer to Kanyakumari / Nagercoil Junction Railway Station and board train for Kolkata. Overnight stay in train.\n\nDay 12: Train Journey\nContinue the return train journey towards Kolkata. Overnight stay in train.\n\nDay 13: Arrival at Howrah / Shalimar\nArrive at Howrah / Shalimar Railway Station with sweet memories of your South India temple tour.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "south india sightseeing",
          "south india attractions",
          "temples",
          "temple sightseeing",
          "pilgrimage places",
        ],

        response:
          "Major Attractions Covered:\n\nTirupati:\n• Tirupati Balaji Temple\n\nChennai:\n• Marina Beach\n• Gandhi Ghat\n• Chennai Local Market\n\nPuducherry:\n• Seaside Promenade\n• Sri Aurobindo Ashram\n• Rock Beach\n• Paradise Beach\n• Manakula Vinayagar Temple\n\nMadurai:\n• Meenakshi Temple\n\nRameshwaram:\n• Ramanathaswamy Temple\n• Dhanushkodi\n\nKanyakumari:\n• Vivekananda Rock Memorial\n• Kanyakumari Temple",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "south india inclusions",
          "south india included",
          "package facilities",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "south india exclusions",
          "south india excluded",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permit charges\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "south india booking",
          "south india contact",
          "temple tour booking",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: South India Temple Tour\nDuration: 10 Nights / 13 Days\nPrice: ₹27,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "south india destinations",
          "south india route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Tirupati\n• Chennai\n• Puducherry\n• Madurai\n• Rameshwaram\n• Kanyakumari\n\nThe tour follows a South India temple and coastal circuit covering major pilgrimage sites and sightseeing destinations.",
      },

      tirupati: {
        keywords: [
          "tirupati",
          "tirupati tour",
          "tirupati package",
          "tirupati sightseeing",
          "tirupati balaji",
          "tirupati balaji darshan",
          "balaji temple",
          "lord tirupati balaji",
        ],

        response:
          "Tirupati is the first major destination of the South India Temple Tour.\n\nMajor Attraction:\n• Tirupati Balaji Temple\n\nThe tour arrives at Tirupati on Day 2. Tirupati Balaji Darshan is planned for Day 3 with an early morning visit for darshan and puja.",
      },

      chennai: {
        keywords: [
          "chennai",
          "chennai tour",
          "chennai package",
          "chennai sightseeing",
          "marina beach",
          "gandhi ghat",
          "chennai local market",
        ],

        response:
          "Chennai is covered on Days 4 and 5 of the South India Temple Tour.\n\nMajor Attractions:\n• Marina Beach\n• Gandhi Ghat\n• Chennai Local Market\n\nThe tour proceeds to Puducherry after Chennai sightseeing.",
      },

      puducherry: {
        keywords: [
          "puducherry",
          "pondicherry",
          "puducherry tour",
          "puducherry package",
          "puducherry sightseeing",
          "seaside promenade",
          "sri aurobindo ashram",
          "rock beach",
          "paradise beach",
          "manakula vinayagar temple",
        ],

        response:
          "Puducherry is covered on Day 6 of the South India Temple Tour.\n\nMajor Attractions:\n• Seaside Promenade\n• Sri Aurobindo Ashram\n• Rock Beach\n• Paradise Beach\n• Manakula Vinayagar Temple\n\nOvernight stay is provided at Puducherry.",
      },

      madurai: {
        keywords: [
          "madurai",
          "madurai tour",
          "madurai package",
          "madurai sightseeing",
          "meenakshi temple",
          "meenakshi amman temple",
        ],

        response:
          "Madurai is covered on Day 7 of the South India Temple Tour.\n\nMajor Attraction:\n• Meenakshi Temple\n\nThe tour travels from Puducherry to Madurai after breakfast. An evening visit to Meenakshi Temple is planned, followed by an overnight stay at Madurai.",
      },

      rameshwaram: {
        keywords: [
          "rameshwaram",
          "rameshwaram tour",
          "rameshwaram package",
          "rameshwaram sightseeing",
          "ramanathaswamy temple",
          "dhanushkodi",
        ],

        response:
          "Rameshwaram is covered on Day 8 of the South India Temple Tour.\n\nMajor Attractions:\n• Ramanathaswamy Temple\n• Dhanushkodi\n\nThe tour proceeds from Madurai to Rameshwaram and includes temple darshan and sightseeing.",
      },

      kanyakumari: {
        keywords: [
          "kanyakumari",
          "kanyakumari tour",
          "kanyakumari package",
          "kanyakumari sightseeing",
          "vivekananda rock memorial",
          "kanyakumari temple",
        ],

        response:
          "Kanyakumari is the final major sightseeing destination of the South India Temple Tour.\n\nMajor Attractions:\n• Vivekananda Rock Memorial\n• Kanyakumari Temple\n\nThe tour reaches Kanyakumari on Day 9 and sightseeing is planned for Day 10.",
      },

      temple: {
        keywords: [
          "temple",
          "temples",
          "temple tour",
          "temple package",
          "pilgrimage",
          "pilgrimage tour",
          "south india temple",
          "temple circuit",
          "south india temple circuit",
        ],

        response:
          "Major Temple and Pilgrimage Attractions:\n\n• Tirupati Balaji Temple\n• Meenakshi Temple\n• Ramanathaswamy Temple\n• Kanyakumari Temple\n• Manakula Vinayagar Temple\n\nThis package combines major South Indian pilgrimage destinations with coastal and cultural sightseeing.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "south india train",
          "south india train ticket",
          "railway",
          "howrah train",
          "shalimar train",
          "tirupati train",
          "nagercoil train",
        ],

        response:
          "Train travel is included in the South India Temple Tour.\n\nDeparture:\nHowrah / Shalimar → Tirupati by train.\n\nReturn:\nKanyakumari / Nagercoil Junction → Kolkata by train.\n\nThe package includes sleeper class train tickets and train meals including lunch and dinner.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "south india hotel",
          "south india accommodation",
        ],

        response:
          "The package includes deluxe room accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Tirupati\n• Chennai\n• Puducherry\n• Madurai\n• Rameshwaram\n• Kanyakumari\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "south india meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "south india transport",
        ],

        response:
          "Transportation is included throughout the tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking and toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Pick-up and drop\n• Parking and toll tax\n• Sightseeing as per tour schedule",
      },
    },
  },
  {
    id: 14,

    topic: "Valley of Leh Ladakh",

    keywords: [
      "ladakh",
      "ladakh tour",
      "ladakh package",
      "ladakh tour package",
      "ladakh price",
      "ladakh package price",
      "ladakh duration",
      "ladakh itinerary",
      "ladakh sightseeing",
      "leh ladakh",
      "leh ladakh tour",
      "leh ladakh package",
      "valley of leh ladakh",
      "ladakh expedition",
      "ladakh grand tour",

      "srinagar",
      "srinagar tour",
      "srinagar ladakh",
      "srinagar sightseeing",

      "kargil",
      "kargil tour",
      "kargil sightseeing",
      "kargil war memorial",

      "leh",
      "leh tour",
      "leh package",
      "leh sightseeing",
      "leh palace",
      "leh monastery",
      "zorawar fort",
      "shanti stupa",
      "hall of fame",
      "shey palace",
      "shey monastery",
      "rancho school",

      "nubra valley",
      "nubra valley tour",
      "nubra valley package",
      "nubra sightseeing",
      "khardung la",
      "khardung la pass",
      "camel ride",
      "turtuk",
      "turtuk village",

      "pangong",
      "pangong lake",
      "pangong lake tour",
      "pangong package",
      "chang la",
      "chang la pass",

      "hanle",
      "hanle tour",
      "hanle valley",
      "hanle observatory",

      "keylong",
      "keylong tour",
      "keylong sightseeing",
      "tanglang la",
      "baralacha la",

      "manali",
      "manali tour",
      "manali sightseeing",
      "atal tunnel",
      "sissu village",
      "hadimba temple",
      "tibetan monastery",
      "handicraft centre",
      "vashisht village",

      "srinagar kargil leh",
      "kargil leh",
      "leh nubra",
      "nubra pangong",
      "pangong hanle",
      "hanle leh",
      "leh keylong",
      "keylong manali",
      "srinagar ladakh manali",

      "ladakh train",
      "ladakh train ticket",
      "ladakh hotel",
      "ladakh accommodation",
      "ladakh meals",
      "ladakh transport",
      "ladakh sightseeing",
      "sleeper train",
      "himalayan tour",
      "mountain expedition",
    ],

    summary: {
      duration: "14 Nights / 17 Days",
      price: "₹42,500 per person",
      rating: "9.2",
      category: "Domestic Tour",
      destinations:
        "Srinagar • Kargil • Leh • Nubra Valley • Pangong • Hanle • Keylong • Manali",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "ladakh price",
          "ladakh package price",
          "leh ladakh price",
          "tour price",
        ],

        response:
          "The Valley of Leh Ladakh Package costs ₹42,500 per person.\n\nDuration: 14 Nights / 17 Days\nCategory: Domestic Tour\nRating: 9.2\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "ladakh itinerary",
          "ladakh tour plan",
          "ladakh schedule",
          "leh ladakh itinerary",
        ],

        response:
          "Valley of Leh Ladakh Itinerary\n\nDay 1: Kolkata → Jammu\nBoard Train 13151 Jammu Tawi Express from Kolkata Railway Station. Overnight stay in train.\n\nDay 2: Train Journey\nContinue train journey towards Jammu. Overnight stay in train.\n\nDay 3: Jammu → Srinagar\nArrive at Jammu Railway Station and board Vande Bharat for Srinagar. Transfer to hotel on arrival. Overnight stay at Srinagar.\n\nDay 4: Srinagar → Kargil\nDrive through Sonamarg, Zoji La Pass, Drass and Kargil War Memorial before reaching Kargil. Overnight stay at Kargil.\n\nDay 5: Kargil → Leh\nTravel via Mulbek, Lamayuru, Moonland and the confluence of Indus and Zanskar Rivers before reaching Leh. Overnight stay at Leh.\n\nDay 6: Leh Local Sightseeing\nVisit Leh Monastery, Leh Palace, Zorawar Fort, Shanti Stupa, Hall of Fame, Shey Palace, Shey Monastery and Rancho School. Overnight stay at Leh.\n\nDay 7: Leh → Nubra Valley\nCross the famous Khardung La Pass and enter Nubra Valley. Optional camel ride is available at own cost. Overnight stay at Nubra Valley.\n\nDay 8: Nubra Valley → Turtuk Excursion\nFull-day excursion to Turtuk village near the Indo-Pak border region. Return to Nubra Valley for overnight stay.\n\nDay 9: Nubra Valley → Pangong Lake\nDrive via Chang La Pass to Pangong Lake. Enjoy the lakeside scenery and overnight stay near Pangong.\n\nDay 10: Pangong Lake → Hanle\nProceed to the remote Hanle region known for its high-altitude plains and observatory area. Overnight stay at Hanle.\n\nDay 11: Hanle → Leh\nReturn to Leh through the scenic Ladakhi landscape. Overnight stay at Leh.\n\nDay 12: Leh → Keylong\nDrive via Tanglang La, Baralacha La and the high Himalayan passes to Keylong. Overnight stay at Keylong.\n\nDay 13: Keylong → Manali\nTravel through Atal Tunnel and Sissu Village before reaching Manali. Overnight stay at Manali.\n\nDay 14: Manali Local Sightseeing\nVisit Hadimba Temple, Tibetan Monastery, Handicraft Centre and Old Vashisht Village. Overnight stay at Manali.\n\nDay 15: Manali → Kalka / Chandigarh\nDrive to Kalka / Chandigarh Railway Station and board Netaji Express for Kolkata. Overnight stay in train.\n\nDay 16: Train Journey\nContinue return train journey towards Kolkata. Overnight stay in train.\n\nDay 17: Arrival at Howrah\nArrive at Howrah Railway Station with unforgettable memories of your Ladakh expedition.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "ladakh sightseeing",
          "ladakh attractions",
          "leh sightseeing",
          "leh attractions",
          "mountain sightseeing",
        ],

        response:
          "Major Attractions Covered:\n\nSrinagar / Kargil:\n• Sonamarg\n• Zoji La Pass\n• Drass\n• Kargil War Memorial\n\nLeh:\n• Leh Monastery\n• Leh Palace\n• Zorawar Fort\n• Shanti Stupa\n• Hall of Fame\n• Shey Palace\n• Shey Monastery\n• Rancho School\n\nNubra Valley:\n• Khardung La Pass\n• Nubra Valley\n• Turtuk Village\n• Optional Camel Ride\n\nPangong:\n• Pangong Lake\n• Chang La Pass\n\nHanle:\n• Hanle Valley\n• High-altitude plains\n• Observatory area\n\nKeylong:\n• Tanglang La\n• Baralacha La\n• Himalayan mountain landscapes\n\nManali:\n• Atal Tunnel\n• Sissu Village\n• Hadimba Temple\n• Tibetan Monastery\n• Handicraft Centre\n• Old Vashisht Village",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "ladakh inclusions",
          "ladakh included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "ladakh exclusions",
          "ladakh excluded",
        ],

        response:
          "Package Exclusions:\n\n• Single supplement cost\n• Mineral water, soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permits\n• Camel ride in Nubra Valley\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "ladakh booking",
          "ladakh contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Valley of Leh Ladakh\nDuration: 14 Nights / 17 Days\nPrice: ₹42,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "ladakh destinations",
          "ladakh route",
          "leh ladakh route",
        ],

        response:
          "Destinations Covered:\n\n• Srinagar\n• Kargil\n• Leh\n• Nubra Valley\n• Pangong Lake\n• Hanle\n• Keylong\n• Manali\n\nThe route also includes major sightseeing locations such as Sonamarg, Zoji La, Drass, Khardung La, Chang La, Turtuk, Atal Tunnel and Sissu Village.",
      },

      srinagar: {
        keywords: [
          "srinagar",
          "srinagar tour",
          "srinagar sightseeing",
          "srinagar ladakh",
        ],

        response:
          "Srinagar is the gateway to the Ladakh expedition.\n\nThe tour arrives in Srinagar on Day 3 after travelling from Jammu by Vande Bharat.\n\nOn Day 4, the journey continues towards Kargil through Sonamarg, Zoji La Pass and Drass.",
      },

      kargil: {
        keywords: [
          "kargil",
          "kargil tour",
          "kargil sightseeing",
          "kargil war memorial",
        ],

        response:
          "Kargil is covered on Day 4 of the Ladakh expedition.\n\nThe route includes:\n• Sonamarg\n• Zoji La Pass\n• Drass\n• Kargil War Memorial\n\nOvernight stay is provided at Kargil before continuing to Leh on Day 5.",
      },

      leh: {
        keywords: [
          "leh",
          "leh tour",
          "leh package",
          "leh sightseeing",
          "leh palace",
          "leh monastery",
          "zorawar fort",
          "shanti stupa",
          "hall of fame",
          "shey palace",
          "shey monastery",
          "rancho school",
        ],

        response:
          "Leh is one of the main highlights of the Valley of Leh Ladakh expedition.\n\nMajor Attractions:\n• Leh Monastery\n• Leh Palace\n• Zorawar Fort\n• Shanti Stupa\n• Hall of Fame\n• Shey Palace\n• Shey Monastery\n• Rancho School\n\nLeh sightseeing takes place on Day 6.",
      },

      nubra: {
        keywords: [
          "nubra",
          "nubra valley",
          "nubra valley tour",
          "nubra sightseeing",
          "khardung la",
          "khardung la pass",
          "camel ride",
          "turtuk",
          "turtuk village",
        ],

        response:
          "Nubra Valley is covered on Days 7 and 8.\n\nHighlights:\n• Khardung La Pass\n• Nubra Valley\n• Turtuk Village\n• Scenic Himalayan landscapes\n• Optional camel ride\n\nThe camel ride in Nubra Valley is optional and at the traveler's own cost.",
      },

      pangong: {
        keywords: [
          "pangong",
          "pangong lake",
          "pangong lake tour",
          "pangong package",
          "chang la",
          "chang la pass",
        ],

        response:
          "Pangong Lake is covered on Day 9.\n\nThe tour travels from Nubra Valley to Pangong Lake via Chang La Pass.\n\nGuests can enjoy the spectacular lakeside scenery and stay overnight near Pangong.",
      },

      hanle: {
        keywords: ["hanle", "hanle tour", "hanle valley", "hanle observatory"],

        response:
          "Hanle is covered on Day 10 of the Ladakh expedition.\n\nThe route continues from Pangong Lake to the remote Hanle region, known for its vast high-altitude plains and observatory area.\n\nOvernight stay is provided at Hanle.",
      },

      keylong: {
        keywords: [
          "keylong",
          "keylong tour",
          "keylong sightseeing",
          "tanglang la",
          "baralacha la",
        ],

        response:
          "Keylong is covered on Day 12.\n\nThe journey from Leh to Keylong passes through:\n• Tanglang La\n• Baralacha La\n• High Himalayan mountain passes\n\nOvernight stay is provided at Keylong.",
      },

      manali: {
        keywords: [
          "manali",
          "manali tour",
          "manali sightseeing",
          "atal tunnel",
          "sissu village",
          "hadimba temple",
          "tibetan monastery",
          "handicraft centre",
          "vashisht village",
        ],

        response:
          "Manali is the final major destination of the Ladakh expedition.\n\nDay 13:\nKeylong → Manali through Atal Tunnel and Sissu Village.\n\nDay 14 Manali Sightseeing:\n• Hadimba Temple\n• Tibetan Monastery\n• Handicraft Centre\n• Old Vashisht Village\n\nThe return journey begins on Day 15.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "ladakh train",
          "ladakh train ticket",
          "railway",
          "kolkata train",
          "jammu train",
          "manali train",
        ],

        response:
          "Train travel is included in the Valley of Leh Ladakh Package.\n\nDeparture:\nKolkata → Jammu by Train 13151 Jammu Tawi Express.\n\nJammu → Srinagar:\nVande Bharat train transfer.\n\nReturn:\nManali → Kalka / Chandigarh Railway Station, followed by Netaji Express towards Kolkata.\n\nThe package includes sleeper class train tickets and train meals including lunch and dinner.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "ladakh hotel",
          "ladakh accommodation",
        ],

        response:
          "The package includes deluxe room accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Srinagar\n• Kargil\n• Leh\n• Nubra Valley\n• Pangong\n• Hanle\n• Keylong\n• Manali\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "ladakh meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "ladakh transport",
        ],

        response:
          "Transportation is included throughout the Ladakh expedition as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking and toll tax\n• Transfers between destinations\n• Sightseeing transportation\n\nThe route covers Srinagar, Kargil, Leh, Nubra Valley, Pangong, Hanle, Keylong and Manali.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Pick-up and drop\n• Parking and toll tax\n• Sightseeing as per tour schedule\n• Tour assistance",
      },

      highlights: {
        keywords: [
          "highlights",
          "tour highlights",
          "ladakh highlights",
          "main highlights",
          "special attractions",
        ],

        response:
          "Major Highlights of the Valley of Leh Ladakh Expedition:\n\n• Scenic Srinagar to Kargil road journey\n• Zoji La Pass and Drass\n• Kargil War Memorial\n• Leh Palace and Shanti Stupa\n• Khardung La Pass\n• Nubra Valley\n• Turtuk Village\n• Pangong Lake\n• Chang La Pass\n• Remote Hanle region\n• Tanglang La and Baralacha La\n• Keylong\n• Atal Tunnel\n• Sissu Village\n• Manali sightseeing",
      },
    },
  },
  {
    id: 15,

    topic: "Vizag Hyderabad Mallikarjuna Tour",

    keywords: [
      "vizag",
      "vizag tour",
      "vizag package",
      "vizag tour package",
      "visakhapatnam",
      "visakhapatnam tour",
      "visakhapatnam package",
      "vizag price",
      "vizag package price",
      "vizag duration",
      "vizag itinerary",
      "vizag sightseeing",

      "araku",
      "araku valley",
      "araku valley tour",
      "araku valley package",
      "araku sightseeing",
      "borra caves",
      "borra cave",
      "tribal museum",
      "chaparai",
      "chapurai",

      "rushikonda beach",
      "kailashgiri",
      "kailasagiri",
      "submarine museum",
      "lighthouse",
      "ramanaidu studio",
      "simhachalam",
      "simhachalam hill",
      "simhachalam temple",
      "rk beach",
      "r.k. beach",
      "yarada beach",

      "hyderabad",
      "hyderabad tour",
      "hyderabad package",
      "hyderabad tour package",
      "hyderabad price",
      "hyderabad sightseeing",
      "charminar",
      "golconda fort",
      "salar jung museum",
      "birla temple",
      "lumbini park",
      "chilkur balaji temple",
      "buddha statue",
      "ramoji film city",
      "ramoji",

      "mallikarjuna",
      "mallikarjuna jyotirlinga",
      "mallikarjuna jyotirlinga tour",
      "mallikarjuna temple",
      "mallikarjuna temple tour",
      "jyotirlinga",
      "jyotirlinga tour",
      "jyotirlinga package",
      "mallikarjuna darshan",
      "mallikarjuna pilgrimage",
      "spiritual tour",

      "vizag araku hyderabad",
      "vizag hyderabad",
      "vizag hyderabad mallikarjuna",
      "araku hyderabad",
      "hyderabad mallikarjuna",
      "vizag araku",
      "vizag hyderabad tour",
      "south india tour",
      "south india package",
      "south india pilgrimage",

      "vizag train",
      "hyderabad train",
      "south india train",
      "train ticket",
      "sleeper train",
      "vizag hotel",
      "hyderabad hotel",
      "south india hotel",
      "vizag meals",
      "hyderabad meals",
      "south india meals",
      "vizag transport",
      "hyderabad transport",
      "south india transport",
    ],

    summary: {
      duration: "07 Nights / 11 Days",
      price: "₹30,500 per person",
      rating: "8.6",
      category: "Domestic Tour",
      destinations:
        "Visakhapatnam • Araku Valley • Hyderabad • Mallikarjuna Jyotirlinga",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "vizag price",
          "hyderabad price",
          "mallikarjuna price",
          "tour price",
          "package price",
        ],

        response:
          "The Vizag Hyderabad Mallikarjuna Tour Package costs ₹30,500 per person.\n\nDuration: 07 Nights / 11 Days\nCategory: Domestic Tour\nRating: 8.6\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "vizag itinerary",
          "hyderabad itinerary",
          "south india itinerary",
          "tour plan",
          "tour schedule",
        ],

        response:
          "Vizag Hyderabad Mallikarjuna Tour Itinerary\n\nDay 1: Howrah → Visakhapatnam\nBoard Train 12863 / 12839 from Howrah Railway Station for Visakhapatnam. Overnight stay in train.\n\nDay 2: Arrival at Vizag\nArrive at Visakhapatnam Railway Station and transfer to hotel. After lunch visit Rushikonda Beach, Kailashgiri, Submarine Museum, Lighthouse and Ramanaidu Studio. Overnight stay at Vizag.\n\nDay 3: Vizag Sightseeing\nVisit Simhachalam Hill Temple in the morning. After lunch explore R.K. Beach and Yarada Beach. Overnight stay at Vizag.\n\nDay 4: Araku Valley Excursion\nMorning excursion to Araku Valley by train or car. Visit Borra Caves, Tribal Museum, gardens and Chaparai. Return to Vizag for overnight stay.\n\nDay 5: Vizag → Hyderabad\nAfter lunch transfer to Visakhapatnam Railway Station and board train for Hyderabad. Overnight stay in train.\n\nDay 6: Hyderabad Sightseeing\nArrive at Hyderabad and transfer to hotel. Visit Charminar, Golconda Fort, Salar Jung Museum, Birla Temple, Lumbini Park, Chilkur Balaji Temple and Buddha Statue. Overnight stay at Hyderabad.\n\nDay 7: Hyderabad → Mallikarjuna Jyotirlinga\nAfter breakfast proceed to Mallikarjuna Jyotirlinga Temple for darshan. Overnight stay at Mallikarjuna.\n\nDay 8: Mallikarjuna → Hyderabad\nAfter breakfast return to Hyderabad. Overnight stay at Hyderabad.\n\nDay 9: Ramoji Film City\nFull-day excursion to the world-famous Ramoji Film City. Overnight stay at Hyderabad.\n\nDay 10: Hyderabad → Kolkata\nCheck out from hotel and transfer to Hyderabad Railway Station for the return train journey to Kolkata. Overnight stay in train.\n\nDay 11: Arrival at Howrah\nArrive at Howrah Railway Station with sweet memories of your South India tour.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "vizag sightseeing",
          "hyderabad sightseeing",
          "araku sightseeing",
          "south india attractions",
        ],

        response:
          "Major Attractions Covered:\n\nVisakhapatnam:\n• Rushikonda Beach\n• Kailashgiri\n• Submarine Museum\n• Lighthouse\n• Ramanaidu Studio\n• Simhachalam Hill Temple\n• R.K. Beach\n• Yarada Beach\n\nAraku Valley:\n• Borra Caves\n• Tribal Museum\n• Gardens\n• Chaparai\n\nHyderabad:\n• Charminar\n• Golconda Fort\n• Salar Jung Museum\n• Birla Temple\n• Lumbini Park\n• Chilkur Balaji Temple\n• Buddha Statue\n• Ramoji Film City\n\nMallikarjuna:\n• Mallikarjuna Jyotirlinga Temple\n• Temple Darshan",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "vizag inclusions",
          "hyderabad inclusions",
          "mallikarjuna included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "vizag exclusions",
          "hyderabad exclusions",
          "mallikarjuna exclusions",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water, soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permit charges\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "vizag booking",
          "hyderabad booking",
          "mallikarjuna booking",
          "tour booking",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Vizag Hyderabad Mallikarjuna Tour\nDuration: 07 Nights / 11 Days\nPrice: ₹30,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "vizag destinations",
          "hyderabad destinations",
          "tour route",
          "south india destinations",
        ],

        response:
          "Destinations Covered:\n\n• Visakhapatnam\n• Araku Valley\n• Hyderabad\n• Mallikarjuna Jyotirlinga\n\nThe tour also includes major sightseeing locations such as Rushikonda Beach, Simhachalam, Borra Caves, Charminar, Golconda Fort and Ramoji Film City.",
      },

      vizag: {
        keywords: [
          "vizag",
          "visakhapatnam",
          "vizag tour",
          "vizag sightseeing",
          "visakhapatnam tour",
          "visakhapatnam sightseeing",
          "rushikonda beach",
          "kailashgiri",
          "submarine museum",
          "lighthouse",
          "ramanaidu studio",
          "simhachalam",
          "rk beach",
          "r.k. beach",
          "yarada beach",
        ],

        response:
          "Visakhapatnam, also known as Vizag, is the first major destination of the tour.\n\nMajor Attractions:\n• Rushikonda Beach\n• Kailashgiri\n• Submarine Museum\n• Lighthouse\n• Ramanaidu Studio\n• Simhachalam Hill Temple\n• R.K. Beach\n• Yarada Beach\n\nVizag sightseeing is covered on Days 2 and 3.",
      },

      araku: {
        keywords: [
          "araku",
          "araku valley",
          "araku valley tour",
          "araku valley package",
          "araku sightseeing",
          "borra caves",
          "borra cave",
          "tribal museum",
          "chaparai",
          "chapurai",
        ],

        response:
          "Araku Valley is covered on Day 4 as a full-day excursion from Vizag.\n\nMajor Attractions:\n• Borra Caves\n• Tribal Museum\n• Gardens\n• Chaparai\n\nThe excursion can be done by train or car, and guests return to Vizag for overnight stay.",
      },

      hyderabad: {
        keywords: [
          "hyderabad",
          "hyderabad tour",
          "hyderabad package",
          "hyderabad sightseeing",
          "charminar",
          "golconda fort",
          "salar jung museum",
          "birla temple",
          "lumbini park",
          "chilkur balaji temple",
          "buddha statue",
        ],

        response:
          "Hyderabad is covered during Days 6, 8 and 9.\n\nMajor Attractions:\n• Charminar\n• Golconda Fort\n• Salar Jung Museum\n• Birla Temple\n• Lumbini Park\n• Chilkur Balaji Temple\n• Buddha Statue\n• Ramoji Film City\n\nThe tour stays in Hyderabad before and after the Mallikarjuna Jyotirlinga excursion.",
      },

      mallikarjuna: {
        keywords: [
          "mallikarjuna",
          "mallikarjuna jyotirlinga",
          "mallikarjuna jyotirlinga tour",
          "mallikarjuna temple",
          "mallikarjuna temple tour",
          "jyotirlinga",
          "jyotirlinga tour",
          "jyotirlinga package",
          "mallikarjuna darshan",
          "pilgrimage",
        ],

        response:
          "Mallikarjuna Jyotirlinga is the spiritual highlight of the tour.\n\nDay 7:\nAfter breakfast proceed from Hyderabad to Mallikarjuna Jyotirlinga Temple for darshan. Overnight stay at Mallikarjuna.\n\nDay 8:\nAfter breakfast return to Hyderabad.\n\nThe package combines sightseeing in Vizag and Hyderabad with a spiritual visit to the Mallikarjuna Jyotirlinga.",
      },

      ramojifilmcity: {
        keywords: [
          "ramoji",
          "ramoji film city",
          "ramoji film city tour",
          "ramoji sightseeing",
          "film city",
        ],

        response:
          "Ramoji Film City is covered on Day 9.\n\nThe tour includes a full-day excursion to the world-famous Ramoji Film City.\n\nAfter the excursion, return to Hyderabad for overnight stay.",
      },

      beach: {
        keywords: [
          "beach",
          "beaches",
          "rushikonda beach",
          "rk beach",
          "r.k. beach",
          "yarada beach",
        ],

        response:
          "The Vizag portion of the tour includes several popular beaches.\n\nBeach Attractions:\n• Rushikonda Beach\n• R.K. Beach\n• Yarada Beach\n\nRushikonda Beach is covered on Day 2, while R.K. Beach and Yarada Beach are covered on Day 3.",
      },

      temple: {
        keywords: [
          "temple",
          "temples",
          "temple tour",
          "temple package",
          "simhachalam temple",
          "mallikarjuna temple",
          "chilkur balaji temple",
          "jyotirlinga",
        ],

        response:
          "The tour includes several important religious attractions.\n\nMajor Temples:\n• Simhachalam Hill Temple\n• Chilkur Balaji Temple\n• Mallikarjuna Jyotirlinga Temple\n\nMallikarjuna Jyotirlinga is the main pilgrimage highlight and is visited on Day 7.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "vizag train",
          "hyderabad train",
          "south india train",
          "railway",
          "howrah train",
          "sleeper train",
        ],

        response:
          "Train travel is included in the Vizag Hyderabad Mallikarjuna Tour.\n\nDeparture:\nHowrah → Visakhapatnam by Train 12863 / 12839.\n\nVizag → Hyderabad:\nTransfer to Visakhapatnam Railway Station and board the train on Day 5.\n\nReturn:\nHyderabad → Kolkata by train on Day 10.\n\nThe package includes sleeper class train tickets and train meals including lunch and dinner.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "vizag hotel",
          "hyderabad hotel",
          "south india hotel",
        ],

        response:
          "The package includes deluxe room accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Vizag\n• Hyderabad\n• Mallikarjuna\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "vizag meals",
          "hyderabad meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "vizag transport",
          "hyderabad transport",
          "south india transport",
        ],

        response:
          "Transportation is included throughout the tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking and toll tax\n• Transfers between destinations\n• Sightseeing transportation\n• Road transfer to Mallikarjuna Jyotirlinga\n• Araku Valley excursion by train or car",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Pick-up and drop\n• Parking and toll tax\n• Sightseeing as per tour schedule\n• Tour assistance",
      },

      highlights: {
        keywords: [
          "highlights",
          "tour highlights",
          "vizag highlights",
          "hyderabad highlights",
          "mallikarjuna highlights",
          "main highlights",
          "special attractions",
        ],

        response:
          "Major Highlights of the Vizag Hyderabad Mallikarjuna Tour:\n\n• Rushikonda Beach\n• Kailashgiri\n• Submarine Museum\n• Simhachalam Hill Temple\n• R.K. Beach\n• Yarada Beach\n• Araku Valley\n• Borra Caves\n• Tribal Museum\n• Charminar\n• Golconda Fort\n• Salar Jung Museum\n• Chilkur Balaji Temple\n• Mallikarjuna Jyotirlinga Darshan\n• Ramoji Film City",
      },
    },
  },
  {
    id: 16,

    topic: "Kashmir Tour",

    keywords: [
      "kashmir",
      "kashmir tour",
      "kashmir package",
      "kashmir tour package",
      "kashmir price",
      "kashmir package price",
      "kashmir duration",
      "kashmir itinerary",
      "kashmir sightseeing",
      "kashmir holiday",
      "kashmir trip",

      "amritsar",
      "amritsar tour",
      "amritsar sightseeing",
      "golden temple",
      "jallianwala bagh",
      "wagah border",

      "katra",
      "katra tour",
      "katra sightseeing",
      "vaishno devi",
      "vaishno devi yatra",
      "vaishno devi darshan",

      "srinagar",
      "srinagar tour",
      "srinagar sightseeing",
      "dal lake",
      "shikara ride",
      "tulip garden",
      "mughal gardens",
      "chashme shahi garden",

      "sonamarg",
      "sonamarg tour",
      "sonamarg sightseeing",

      "gulmarg",
      "gulmarg tour",
      "gulmarg sightseeing",

      "pahalgam",
      "pahalgam tour",
      "pahalgam sightseeing",
      "chandanwari",
      "betab valley",
      "aru valley",

      "patnitop",
      "patnitop tour",
      "patnitop sightseeing",
      "natha top",
      "nag temple",

      "kashmir train",
      "kashmir train ticket",
      "kashmir hotel",
      "kashmir accommodation",
      "kashmir meals",
      "kashmir transport",
      "kashmir package 25500",
      "kashmir package 28500",

      "amritsar katra",
      "katra srinagar",
      "srinagar sonamarg",
      "srinagar gulmarg",
      "srinagar pahalgam",
      "pahalgam patnitop",
      "kashmir amritsar",
      "kashmir vaishno devi",
      "kashmir valley tour",
      "kashmir family tour",
      "kashmir sightseeing package",
    ],

    summary: {
      duration: "08 Nights / 13 Days or 10 Nights / 15 Days",
      price: "₹25,500 / ₹28,500 per person",
      rating: "9.1",
      category: "Domestic Tour",
      destinations:
        "Amritsar • Katra • Srinagar • Sonamarg • Gulmarg • Pahalgam • Patnitop",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "kashmir price",
          "kashmir package price",
          "tour price",
          "kashmir cost",
          "package cost",
        ],

        response:
          "Kashmir Tour Package has two options:\n\nPackage 1:\nPrice: ₹25,500 per person\nDuration: 08 Nights / 13 Days\n\nPackage 2:\nPrice: ₹28,500 per person\nDuration: 10 Nights / 15 Days\n\nRating: 9.1\nCategory: Domestic Tour\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "kashmir itinerary",
          "kashmir tour plan",
          "kashmir schedule",
          "tour itinerary",
        ],

        response:
          "Kashmir Tour Itinerary - Package 1\n\nDay 1: Kolkata → Jammu\nBoard Train 13151 from Kolkata Railway Station for Jammu. Overnight stay in train.\n\nDay 2: Train Journey\nContinue train journey towards Jammu. Overnight stay in train.\n\nDay 3: Jammu → Katra\nArrive at Jammu Railway Station and transfer to Katra. Evening Vaishno Devi yatra and darshan. Overnight stay at Katra.\n\nDay 4: Katra Leisure Day\nFull day rest and leisure at Katra. Overnight stay at Katra.\n\nDay 5: Katra → Srinagar\nDrive to Srinagar and transfer to hotel. Overnight stay at Srinagar.\n\nDay 6: Sonamarg Excursion\nFull-day excursion to Sonamarg. Return to Srinagar. Overnight stay at Srinagar.\n\nDay 7: Gulmarg Excursion\nVisit Gulmarg and return to Srinagar. Overnight stay at Srinagar.\n\nDay 8: Srinagar Sightseeing\nVisit Tulip Garden, Mughal Gardens, Chashme Shahi Garden and local attractions. Optional Shikara ride on Dal Lake at own cost. Overnight stay at Srinagar.\n\nDay 9: Srinagar → Pahalgam\nDrive to Pahalgam and enjoy the beautiful valley surroundings. Overnight stay at Pahalgam.\n\nDay 10: Pahalgam Sightseeing\nVisit Chandanwari, Betab Valley and Aru Valley. Aru Valley activities are optional and at own cost. Overnight stay at Pahalgam.\n\nDay 11: Pahalgam → Patnitop → Jammu\nVisit Patnitop, Natha Top and Nag Temple. Later proceed to Jammu Railway Station for the return train. Overnight stay in train.\n\nDay 12: Train Journey\nContinue return train journey towards Kolkata. Overnight stay in train.\n\nDay 13: Arrival at Howrah / Sealdah\nArrive at Howrah / Sealdah Railway Station with sweet memories of your Kashmir tour.\n\n\nKashmir Tour Itinerary - Package 2\n\nPackage 2 includes Amritsar and has a duration of 10 Nights / 15 Days.\n\nDay 1: Howrah → Amritsar\nBoard Train 13005 from Howrah Railway Station for Amritsar. Overnight stay in train.\n\nDay 2: Train Journey\nContinue train journey towards Amritsar. Overnight stay in train.\n\nDay 3: Amritsar Sightseeing\nVisit Golden Temple, Jallianwala Bagh and Wagah Border ceremony. Overnight stay at Amritsar.\n\nDay 4: Amritsar → Katra\nProceed to Katra and begin Vaishno Devi yatra in the evening. Overnight stay at Katra.\n\nDay 5: Katra Leisure Day\nFull day rest and leisure at Katra. Overnight stay at Katra.\n\nDay 6: Katra → Srinagar\nDrive to Srinagar. Overnight stay at Srinagar.\n\nDay 7: Sonamarg Excursion\nFull-day excursion to Sonamarg. Overnight stay at Srinagar.\n\nDay 8: Gulmarg Excursion\nVisit Gulmarg and return to Srinagar. Overnight stay at Srinagar.\n\nDay 9: Srinagar Sightseeing\nVisit Tulip Garden, Mughal Gardens, Chashme Shahi Garden and local attractions. Optional Shikara ride at own cost. Overnight stay at Srinagar.\n\nDay 10: Srinagar → Pahalgam\nDrive to Pahalgam. Overnight stay at Pahalgam.\n\nDay 11: Pahalgam Sightseeing\nVisit Chandanwari, Betab Valley and Aru Valley. Overnight stay at Pahalgam.\n\nDay 12: Pahalgam → Patnitop\nProceed to Patnitop. Overnight stay at Patnitop.\n\nDay 13: Patnitop → Jammu\nVisit Natha Top and Nag Temple before proceeding to Jammu Railway Station. Overnight stay in train.\n\nDay 14: Train Journey\nContinue return train journey towards Kolkata. Overnight stay in train.\n\nDay 15: Arrival at Howrah / Sealdah\nArrive at Howrah / Sealdah Railway Station with sweet memories of your Kashmir tour.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "kashmir sightseeing",
          "kashmir attractions",
          "tourist places",
          "kashmir places",
        ],

        response:
          "Major Attractions Covered:\n\nAmritsar:\n• Golden Temple\n• Jallianwala Bagh\n• Wagah Border\n\nKatra:\n• Vaishno Devi Yatra\n• Vaishno Devi Darshan\n\nSrinagar:\n• Dal Lake\n• Tulip Garden\n• Mughal Gardens\n• Chashme Shahi Garden\n• Local attractions\n\nSonamarg:\n• Sonamarg Valley\n• Scenic Himalayan landscapes\n\nGulmarg:\n• Gulmarg Valley\n• Scenic mountain surroundings\n\nPahalgam:\n• Chandanwari\n• Betab Valley\n• Aru Valley\n\nPatnitop:\n• Patnitop\n• Natha Top\n• Nag Temple",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "kashmir inclusions",
          "kashmir included",
          "package facilities",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking and toll tax\n• Pick-up and drop\n• All possible sightseeing as per tour schedule",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "kashmir exclusions",
          "kashmir excluded",
        ],

        response:
          "Package Exclusions:\n\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permits\n• Shikara ride on Dal Lake\n• Pahalgam local union sightseeing\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "kashmir booking",
          "kashmir contact",
          "reserve",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Kashmir Tour\n\nPackage 1:\nDuration: 08 Nights / 13 Days\nPrice: ₹25,500 per person\n\nPackage 2:\nDuration: 10 Nights / 15 Days\nPrice: ₹28,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "kashmir destinations",
          "kashmir route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Amritsar\n• Katra\n• Srinagar\n• Sonamarg\n• Gulmarg\n• Pahalgam\n• Patnitop\n\nPackage 1 covers Katra, Srinagar, Sonamarg, Gulmarg, Pahalgam and Patnitop.\n\nPackage 2 additionally includes Amritsar.",
      },

      amritsar: {
        keywords: [
          "amritsar",
          "amritsar tour",
          "amritsar sightseeing",
          "golden temple",
          "jallianwala bagh",
          "wagah border",
        ],

        response:
          "Amritsar is included in Kashmir Package 2.\n\nMajor Attractions:\n• Golden Temple\n• Jallianwala Bagh\n• Wagah Border ceremony\n\nAmritsar sightseeing takes place on Day 3 of Package 2.",
      },

      katra: {
        keywords: [
          "katra",
          "katra tour",
          "katra sightseeing",
          "vaishno devi",
          "vaishno devi yatra",
          "vaishno devi darshan",
          "vaishno devi temple",
        ],

        response:
          "Katra is included in both Kashmir packages.\n\nThe itinerary includes Vaishno Devi Yatra and Darshan.\n\nPackage 1:\nJammu → Katra on Day 3.\n\nPackage 2:\nAmritsar → Katra on Day 4.\n\nBoth packages also include a leisure day at Katra.",
      },

      srinagar: {
        keywords: [
          "srinagar",
          "srinagar tour",
          "srinagar sightseeing",
          "dal lake",
          "tulip garden",
          "mughal gardens",
          "chashme shahi garden",
        ],

        response:
          "Srinagar is one of the main destinations of the Kashmir tour.\n\nMajor Attractions:\n• Dal Lake\n• Tulip Garden\n• Mughal Gardens\n• Chashme Shahi Garden\n• Local attractions\n\nAn optional Shikara ride on Dal Lake is available at the traveler's own cost.",
      },

      sonamarg: {
        keywords: [
          "sonamarg",
          "sonamarg tour",
          "sonamarg sightseeing",
          "sonmarg",
          "sonamarg excursion",
        ],

        response:
          "Sonamarg is covered as a full-day excursion from Srinagar.\n\nThe tour visits the scenic Sonamarg region and returns to Srinagar for an overnight stay.",
      },

      gulmarg: {
        keywords: [
          "gulmarg",
          "gulmarg tour",
          "gulmarg sightseeing",
          "gulmarg excursion",
        ],

        response:
          "Gulmarg is covered as a full-day excursion from Srinagar.\n\nThe tour visits Gulmarg and returns to Srinagar in the evening for an overnight stay.",
      },

      pahalgam: {
        keywords: [
          "pahalgam",
          "pahalgam tour",
          "pahalgam sightseeing",
          "chandanwari",
          "betab valley",
          "aru valley",
        ],

        response:
          "Pahalgam is one of the major highlights of the Kashmir tour.\n\nMajor Attractions:\n• Chandanwari\n• Betab Valley\n• Aru Valley\n\nAru Valley sightseeing and activities are optional and at the traveler's own cost.\n\nPahalgam local union sightseeing is excluded from the package.",
      },

      patnitop: {
        keywords: [
          "patnitop",
          "patnitop tour",
          "patnitop sightseeing",
          "natha top",
          "nag temple",
        ],

        response:
          "Patnitop is covered towards the end of the Kashmir tour.\n\nMajor Attractions:\n• Patnitop\n• Natha Top\n• Nag Temple\n\nPackage 1 visits Patnitop on Day 11 before proceeding to Jammu.\n\nPackage 2 stays overnight at Patnitop on Day 12 and proceeds to Jammu on Day 13.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "kashmir train",
          "kashmir train ticket",
          "railway",
          "kolkata train",
          "jammu train",
          "amritsar train",
          "return train",
        ],

        response:
          "Train travel is included in the Kashmir Tour Package.\n\nPackage 1:\nKolkata → Jammu by Train 13151.\nJammu → Katra by road.\nReturn journey from Jammu Railway Station to Kolkata.\n\nPackage 2:\nHowrah → Amritsar by Train 13005.\nReturn journey from Jammu Railway Station to Kolkata.\n\nThe package includes sleeper class train tickets and train meals.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "kashmir hotel",
          "kashmir accommodation",
        ],

        response:
          "The package includes deluxe room accommodation at the destinations mentioned in the itinerary.\n\nPackage 1 overnight stays include:\n• Katra\n• Srinagar\n• Pahalgam\n\nPackage 2 overnight stays include:\n• Amritsar\n• Katra\n• Srinagar\n• Pahalgam\n• Patnitop\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "kashmir meals",
        ],

        response:
          "Meals included in the Kashmir package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "road transfer",
          "kashmir transport",
        ],

        response:
          "Transportation is included throughout the Kashmir tour as per the itinerary.\n\nThe package includes:\n• Pick-up and drop\n• Road transfers between destinations\n• Sightseeing transportation\n• Parking and toll tax\n\nTrain transportation is also included as specified in the package itinerary.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "kashmir facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe room accommodation\n• Sleeper class train tickets\n• Train meals\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Pick-up and drop\n• Parking and toll tax\n• Sightseeing as per tour schedule",
      },

      package1: {
        keywords: [
          "package 1",
          "package1",
          "first package",
          "first option",
          "25500",
          "25,500",
          "13 days",
          "8 nights",
          "8 nights 13 days",
        ],

        response:
          "Kashmir Tour Package 1\n\nPrice: ₹25,500 per person\nDuration: 08 Nights / 13 Days\n\nDestinations:\n• Katra\n• Srinagar\n• Sonamarg\n• Gulmarg\n• Pahalgam\n• Patnitop\n\nThis package does not include Amritsar.",
      },

      package2: {
        keywords: [
          "package 2",
          "package2",
          "second package",
          "second option",
          "28500",
          "28,500",
          "15 days",
          "10 nights",
          "10 nights 15 days",
        ],

        response:
          "Kashmir Tour Package 2\n\nPrice: ₹28,500 per person\nDuration: 10 Nights / 15 Days\n\nDestinations:\n• Amritsar\n• Katra\n• Srinagar\n• Sonamarg\n• Gulmarg\n• Pahalgam\n• Patnitop\n\nThis package additionally includes Amritsar sightseeing.",
      },

      shikara: {
        keywords: [
          "shikara",
          "shikara ride",
          "dal lake ride",
          "boat ride",
          "dal lake shikara",
        ],

        response:
          "Shikara ride on Dal Lake is available as an optional activity.\n\nThe Shikara ride is not included in the package price and must be paid by the traveler separately.",
      },
    },
  },
  {
    id: 17,

    topic: "Kinnaur La Hul Spiti",

    keywords: [
      "kinnaur",
      "kinnaur tour",
      "kinnaur package",
      "kinnaur tour package",
      "kinnaur price",
      "kinnaur duration",
      "kinnaur itinerary",
      "kinnaur sightseeing",

      "spiti",
      "spiti tour",
      "spiti package",
      "spiti tour package",
      "spiti valley",
      "spiti price",
      "spiti itinerary",
      "spiti sightseeing",

      "kinnaur spiti",
      "kinnaur spiti tour",
      "kinnaur spiti package",
      "kinnaur la hul spiti",
      "kinnaur la hul spiti tour",
      "kinnaur la hul spiti package",

      "shimla",
      "shimla tour",
      "shimla sightseeing",
      "mall road",
      "kali bari",

      "sarahan",
      "sarahan tour",
      "bhimakali temple",
      "rajbari",

      "sangla",
      "sangla tour",
      "sangla sightseeing",
      "karcham",

      "chitkul",
      "chitkul village",
      "chitkul tour",

      "kalpa",
      "kalpa tour",
      "kalpa sightseeing",
      "reckong peo",
      "roghi village",
      "chini village",
      "suicide point",

      "tabo",
      "tabo tour",
      "tabo monastery",
      "nako lake",

      "kaza",
      "kaza tour",
      "kaza sightseeing",
      "kaza monastery",
      "dhankar monastery",
      "key monastery",
      "kibber village",
      "hikkim",

      "chandratal",
      "chandratal lake",
      "chandratal tour",
      "kunzum pass",

      "manali",
      "manali tour",
      "manali sightseeing",
      "hidimba temple",
      "tibetan monastery",
      "handicraft centre",
      "old vashisht village",

      "shimla sarahan",
      "sarahan sangla",
      "sangla kalpa",
      "kalpa tabo",
      "tabo kaza",
      "kaza chandratal",
      "chandratal manali",

      "kinnaur circuit",
      "spiti circuit",
      "himachal tour",
      "himachal package",
      "himalayan circuit",
      "mountain tour",

      "kinnaur train",
      "spiti train",
      "kinnaur hotel",
      "spiti hotel",
      "kinnaur meals",
      "spiti meals",
      "kinnaur transport",
      "spiti transport",
      "train ticket",
      "sleeper train",
      "mountain circuit",
    ],

    summary: {
      duration: "12 Nights / 13 Days",
      price: "₹30,500 per person",
      rating: "9.2",
      category: "Domestic Tour",
      destinations:
        "Shimla • Sarahan • Sangla • Kalpa • Tabo • Kaza • Chandratal • Manali",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "kinnaur price",
          "spiti price",
          "kinnaur package price",
          "spiti package price",
          "tour price",
        ],

        response:
          "Kinnaur La Hul Spiti Package Details\n\nPackage 1:\nDuration: 12 Nights / 13 Days\nPrice: ₹30,500 per person\nRating: 9.2\n\nPackage 2:\nDuration: 14 Nights / 15 Days\nPrice: Not available currently.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "kinnaur itinerary",
          "spiti itinerary",
          "kinnaur tour plan",
          "spiti tour plan",
          "tour schedule",
        ],

        response:
          "Kinnaur La Hul Spiti Itinerary - Package 1\n\nDuration: 12 Nights / 13 Days\nPrice: ₹30,500 per person\n\nDay 1: Kolkata → Ambala\nBoard train from Kolkata Railway Station for Ambala. Overnight stay in train.\n\nDay 2: Ambala → Shimla\nArrive at Ambala and transfer to Shimla. Visit Mall Road and Kali Bari by walk. Overnight stay at Shimla.\n\nDay 3: Shimla → Sarahan\nAfter breakfast proceed to Sarahan. Overnight stay at Sarahan.\n\nDay 4: Sarahan → Sangla\nVisit Bhimakali Temple and Rajbari, then drive to Sangla via Karcham. Overnight stay at Sangla.\n\nDay 5: Sangla → Chitkul → Kalpa\nExcursion to Chitkul, then continue to Kalpa via Reckong Peo. Visit Roghi Village, Chini Village, and Suicide Point. Overnight stay at Kalpa.\n\nDay 6: Kalpa → Tabo\nDrive through the dramatic Spiti landscape via Nako Lake and reach Tabo. Overnight stay at Tabo.\n\nDay 7: Tabo → Kaza\nVisit Tabo Monastery, then proceed to Kaza via Dhankar Monastery and Kaza Monastery. Overnight stay at Kaza.\n\nDay 8: Kaza Local Sightseeing\nVisit Key Monastery and Kibber Village. Return to Kaza for overnight stay.\n\nDay 9: Kaza → Chandratal\nDrive via Kunzum Pass to Chandratal Lake. Overnight stay at Chandratal.\n\nDay 10: Chandratal → Manali\nProceed to Manali via Sissu Village and Atal Tunnel. Overnight stay at Manali.\n\nDay 11: Manali Sightseeing\nVisit Hidimba Temple, Tibetan Monastery, Handicraft Centre, and Old Vashisht Village. Overnight stay at Manali.\n\nDay 12: Manali → Ambala\nAfter breakfast transfer to Ambala Railway Station for return train journey. Overnight stay in train.\n\nDay 13: Arrival at Kolkata\nArrive at Howrah Railway Station with sweet memories of Kinnaur and Spiti.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "kinnaur sightseeing",
          "spiti sightseeing",
          "kinnaur attractions",
          "spiti attractions",
          "mountain places",
        ],

        response:
          "Major Attractions Covered:\n\nShimla:\n• Mall Road\n• Kali Bari\n\nSarahan:\n• Bhimakali Temple\n• Rajbari\n\nSangla:\n• Karcham\n• Sangla Valley\n\nChitkul:\n• Chitkul Village\n\nKalpa:\n• Reckong Peo\n• Roghi Village\n• Chini Village\n• Suicide Point\n\nTabo:\n• Nako Lake\n• Tabo Monastery\n\nKaza:\n• Dhankar Monastery\n• Kaza Monastery\n• Key Monastery\n• Kibber Village\n• Hikkim\n\nChandratal:\n• Chandratal Lake\n• Kunzum Pass\n\nManali:\n• Sissu Village\n• Atal Tunnel\n• Hidimba Temple\n• Tibetan Monastery\n• Handicraft Centre\n• Old Vashisht Village",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "kinnaur inclusions",
          "spiti inclusions",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe accommodation\n• Sleeper class train tickets\n• Train lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "kinnaur exclusions",
          "spiti exclusions",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water, soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permits\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "kinnaur booking",
          "spiti booking",
          "kinnaur contact",
          "spiti contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Kinnaur La Hul Spiti\nPackage 1: 12 Nights / 13 Days\nPrice: ₹30,500 per person\n\nPackage 2: 14 Nights / 15 Days\nPrice: Not available currently.\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "kinnaur destinations",
          "spiti destinations",
          "route",
        ],

        response:
          "Destinations Covered:\n\n• Shimla\n• Sarahan\n• Sangla\n• Chitkul\n• Kalpa\n• Tabo\n• Kaza\n• Chandratal\n• Manali\n\nThe tour also covers Nako Lake, Dhankar, Kibber, Hikkim, Kunzum Pass, Sissu and Atal Tunnel.",
      },

      shimla: {
        keywords: [
          "shimla",
          "shimla tour",
          "shimla sightseeing",
          "mall road",
          "kali bari",
        ],

        response:
          "Shimla is the first major destination of the Kinnaur La Hul Spiti tour.\n\nMajor Attractions:\n• Mall Road\n• Kali Bari\n\nIn Package 1, Shimla is covered on Day 2 and the tour proceeds to Sarahan on Day 3.\n\nPackage 2 includes additional Shimla sightseeing on Day 4 covering Kufri, Fagu and Green Valley.",
      },

      sarahan: {
        keywords: [
          "sarahan",
          "sarahan tour",
          "sarahan sightseeing",
          "bhimakali temple",
          "bhimakali",
          "rajbari",
        ],

        response:
          "Sarahan is covered during the Kinnaur circuit.\n\nMajor Attractions:\n• Bhimakali Temple\n• Rajbari\n\nThe tour proceeds from Sarahan to Sangla via Karcham.",
      },

      sangla: {
        keywords: [
          "sangla",
          "sangla tour",
          "sangla sightseeing",
          "karcham",
          "sangla valley",
        ],

        response:
          "Sangla is one of the major destinations of the Kinnaur circuit.\n\nThe tour reaches Sangla via Karcham.\n\nThe next major excursion is Chitkul, followed by the journey to Kalpa.",
      },

      chitkul: {
        keywords: [
          "chitkul",
          "chitkul village",
          "chitkul tour",
          "chitkul sightseeing",
        ],

        response:
          "Chitkul is covered as an excursion from Sangla.\n\nAfter visiting Chitkul, the tour continues towards Kalpa via Reckong Peo.",
      },

      kalpa: {
        keywords: [
          "kalpa",
          "kalpa tour",
          "kalpa sightseeing",
          "reckong peo",
          "roghi village",
          "chini village",
          "suicide point",
        ],

        response:
          "Kalpa is one of the highlights of the Kinnaur region.\n\nMajor Attractions:\n• Reckong Peo\n• Roghi Village\n• Chini Village\n• Suicide Point\n\nThe tour later proceeds from Kalpa towards Tabo through Nako Lake.",
      },

      tabo: {
        keywords: [
          "tabo",
          "tabo tour",
          "tabo sightseeing",
          "tabo monastery",
          "nako lake",
        ],

        response:
          "Tabo is an important destination in the Spiti Valley circuit.\n\nMajor Attractions:\n• Nako Lake\n• Tabo Monastery\n\nFrom Tabo, the tour proceeds towards Kaza via Dhankar Monastery.",
      },

      kaza: {
        keywords: [
          "kaza",
          "kaza tour",
          "kaza sightseeing",
          "kaza monastery",
          "dhankar monastery",
          "key monastery",
          "kibber village",
          "hikkim",
        ],

        response:
          "Kaza is the main base of the Spiti Valley portion of the tour.\n\nMajor Attractions:\n• Tabo Monastery\n• Dhankar Monastery\n• Kaza Monastery\n• Key Monastery\n• Kibber Village\n• Hikkim\n\nKaza sightseeing is included in the itinerary before proceeding to Chandratal.",
      },

      chandratal: {
        keywords: [
          "chandratal",
          "chandratal lake",
          "chandratal tour",
          "kunzum pass",
          "kunzum",
        ],

        response:
          "Chandratal Lake is one of the major highlights of the Spiti circuit.\n\nThe tour reaches Chandratal via Kunzum Pass.\n\nOvernight stay at Chandratal is included in the itinerary before proceeding towards Manali.",
      },

      manali: {
        keywords: [
          "manali",
          "manali tour",
          "manali sightseeing",
          "hidimba temple",
          "tibetan monastery",
          "handicraft centre",
          "old vashisht village",
          "sissu",
          "atal tunnel",
        ],

        response:
          "Manali is the final major destination of the Kinnaur La Hul Spiti circuit.\n\nMajor Attractions:\n• Sissu Village\n• Atal Tunnel\n• Hidimba Temple\n• Tibetan Monastery\n• Handicraft Centre\n• Old Vashisht Village\n\nManali sightseeing is included before the return journey towards Ambala / Chandigarh.",
      },

      package1: {
        keywords: [
          "package 1",
          "package one",
          "first package",
          "12 nights",
          "13 days",
          "30500",
          "30000",
          "kinnaur package 1",
          "spiti package 1",
        ],

        response:
          "Kinnaur La Hul Spiti - Package 1\n\nDuration: 12 Nights / 13 Days\nPrice: ₹30,500 per person\nRating: 9.2\n\nRoute:\nKolkata → Ambala → Shimla → Sarahan → Sangla → Chitkul → Kalpa → Tabo → Kaza → Chandratal → Manali → Ambala → Kolkata\n\nThis package covers the major Kinnaur, Spiti, Chandratal and Manali attractions.",
      },

      package2: {
        keywords: [
          "package 2",
          "package two",
          "second package",
          "14 nights",
          "15 days",
          "kinnaur package 2",
          "spiti package 2",
        ],

        response:
          "Kinnaur La Hul Spiti - Package 2\n\nDuration: 14 Nights / 15 Days\nPrice: Not available currently.\n\nPackage 2 includes additional Shimla sightseeing and an extended Himalayan circuit.\n\nMajor additional attractions include:\n• Kufri\n• Fagu\n• Green Valley\n• Hikkim\n• Kibber\n• Key Monastery\n• Chandratal\n• Manali\n\nFor the latest price and availability, please contact Riya Tours & Travels.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "kinnaur train",
          "spiti train",
          "railway",
          "sleeper train",
          "kolkata train",
          "ambala train",
          "chandigarh train",
          "kalka train",
        ],

        response:
          "Train travel is included in the Kinnaur La Hul Spiti tour.\n\nPackage 1:\nKolkata → Ambala by train.\nReturn journey from Ambala to Kolkata by train.\n\nPackage 2:\nHowrah → Chandigarh / Kalka by train.\nReturn journey from Chandigarh / Kalka to Kolkata by train.\n\nSleeper class train tickets are included in the package.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "kinnaur hotel",
          "spiti hotel",
          "kinnaur accommodation",
          "spiti accommodation",
        ],

        response:
          "The package includes deluxe accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Shimla\n• Sarahan\n• Sangla\n• Kalpa\n• Tabo\n• Kaza\n• Chandratal\n• Manali\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "kinnaur meals",
          "spiti meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "kinnaur transport",
          "spiti transport",
          "mountain transport",
        ],

        response:
          "Transportation is included throughout the Kinnaur La Hul Spiti tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe accommodation\n• Sleeper class train tickets\n• Train lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary",
      },

      route: {
        keywords: [
          "route",
          "tour route",
          "travel route",
          "kinnaur route",
          "spiti route",
          "himalayan route",
          "circuit",
        ],

        response:
          "Kinnaur La Hul Spiti Tour Route:\n\nKolkata → Ambala / Chandigarh / Kalka → Shimla → Sarahan → Sangla → Chitkul → Kalpa → Tabo → Kaza → Chandratal → Manali → Ambala / Chandigarh / Kalka → Kolkata\n\nThe circuit covers Kinnaur, Spiti Valley, Chandratal and Manali.",
      },
    },
  },
  {
    id: 18,

    topic: "Meghalaya",

    keywords: [
      "meghalaya",
      "meghalaya tour",
      "meghalaya package",
      "meghalaya tour package",
      "meghalaya price",
      "meghalaya package price",
      "meghalaya duration",
      "meghalaya itinerary",
      "meghalaya sightseeing",
      "meghalaya holiday",
      "meghalaya holiday package",
      "meghalaya nature tour",
      "meghalaya waterfall tour",
      "meghalaya northeast tour",

      "guwahati",
      "guwahati tour",
      "guwahati package",
      "guwahati sightseeing",
      "kamakhya temple",
      "kamakhya mandir",
      "vasistha ashram",
      "balaji temple guwahati",

      "shillong",
      "shillong tour",
      "shillong package",
      "shillong sightseeing",
      "shillong tourist places",
      "borapani lake",
      "umiam lake",
      "umiam",

      "cherrapunji",
      "cherapunji",
      "cherrapunji tour",
      "cherrapunji package",
      "cherrapunji sightseeing",
      "sohra",
      "nohkalikai falls",
      "seven sisters falls",
      "dainthlen falls",
      "thangkharang park",
      "elephanta falls",
      "living root bridge",
      "root bridge",
      "ramakrishna mission",

      "mawlynnong",
      "mawlynnong tour",
      "mawlynnong village",
      "mawlynnong sightseeing",
      "cleanest village",

      "dawki",
      "dawki tour",
      "dawki package",
      "dawki sightseeing",
      "dawki river",
      "crystal clear river",
      "bangladesh border",

      "kaziranga",
      "kaziranga tour",
      "kaziranga package",
      "kaziranga national park",
      "kaziranga sightseeing",
      "kaziranga safari",
      "jungle safari",
      "tribal dance",

      "guwahati shillong",
      "shillong cherrapunji",
      "cherrapunji dawki",
      "dawki mawlynnong",
      "shillong kaziranga",
      "kaziranga guwahati",
      "guwahati shillong cherrapunji",
      "meghalaya kaziranga",

      "meghalaya train",
      "meghalaya hotel",
      "meghalaya meals",
      "meghalaya transport",
      "meghalaya train ticket",
      "sleeper train",
      "3 ac train",
      "meghalaya accommodation",
      "meghalaya facilities",
      "northeast tour",
    ],

    summary: {
      duration: "07 Nights / 08 Days",
      price: "₹21,500 per person",
      rating: "9.1",
      category: "Domestic Tour",
      destinations:
        "Guwahati • Shillong • Cherrapunji • Dawki • Mawlynnong • Kaziranga",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "meghalaya price",
          "meghalaya package price",
          "tour price",
          "package cost",
          "meghalaya cost",
        ],

        response:
          "Meghalaya Tour Package Details\n\nPackage 1:\nDuration: 07 Nights / 08 Days\nPrice: ₹21,500 per person\nRating: 9.1\n\nPackage 2:\nDuration: 08 Nights / 09 Days\nPrice: ₹21,500 per person\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "meghalaya itinerary",
          "meghalaya tour plan",
          "meghalaya schedule",
          "tour plan",
        ],

        response:
          "Meghalaya Tour Itinerary - Package 1\n\nDuration: 07 Nights / 08 Days\nPrice: ₹21,500 per person\n\nDay 1: Kolkata → Guwahati\nBoard train from Howrah Railway Station for Guwahati. Overnight stay in train.\n\nDay 2: Arrival at Guwahati\nArrive at Guwahati and transfer to hotel. Visit Vasistha Ashram, Kamakhya Temple and Balaji Temple depending on arrival time. Overnight stay at Guwahati.\n\nDay 3: Guwahati → Shillong\nAfter breakfast transfer to Shillong via scenic Borapani (Umiam) Lake. Overnight stay at Shillong.\n\nDay 4: Cherrapunji Excursion\nVisit Nohkalikai Falls, Seven Sisters Falls, Dainthlen Falls, Thangkharang Park, Elephanta Falls, Living Root Bridge and Ramakrishna Mission. Return to Shillong for overnight stay.\n\nDay 5: Mawlynnong & Dawki\nExplore Mawlynnong village and enjoy the crystal-clear Dawki River. Overnight stay at Shillong.\n\nDay 6: Shillong → Guwahati\nAfter breakfast return to Guwahati. Overnight stay at Guwahati.\n\nDay 7: Departure from Guwahati\nAfter breakfast transfer to Guwahati Railway Station for return train journey. Overnight stay in train.\n\nDay 8: Arrival at Kolkata\nArrive at Howrah Railway Station with sweet memories of Meghalaya.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "meghalaya sightseeing",
          "meghalaya attractions",
          "tourist places",
          "waterfalls",
        ],

        response:
          "Major Attractions Covered:\n\nGuwahati:\n• Vasistha Ashram\n• Kamakhya Temple\n• Balaji Temple\n\nShillong:\n• Borapani / Umiam Lake\n\nCherrapunji:\n• Nohkalikai Falls\n• Seven Sisters Falls\n• Dainthlen Falls\n• Thangkharang Park\n• Elephanta Falls\n• Living Root Bridge\n• Ramakrishna Mission\n\nMawlynnong:\n• Mawlynnong Village\n\nDawki:\n• Dawki River\n• Crystal-clear river experience\n\nKaziranga:\n• Kaziranga National Park\n• Optional Jungle Safari\n• Optional Tribal Dance",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "meghalaya inclusions",
          "meghalaya included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe accommodation\n• Train ticket (Sleeper Class / 3 AC as per package)\n• Train lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "meghalaya exclusions",
          "meghalaya excluded",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water, soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permits\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "meghalaya booking",
          "meghalaya contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Meghalaya\nPackage 1: 07 Nights / 08 Days - ₹21,500 per person\nPackage 2: 08 Nights / 09 Days - ₹21,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "meghalaya destinations",
          "meghalaya route",
        ],

        response:
          "Destinations Covered:\n\n• Guwahati\n• Shillong\n• Cherrapunji\n• Dawki\n• Mawlynnong\n• Kaziranga\n\nPackage 1 mainly covers Guwahati, Shillong, Cherrapunji, Dawki and Mawlynnong.\n\nPackage 2 additionally includes Kaziranga National Park.",
      },

      guwahati: {
        keywords: [
          "guwahati",
          "guwahati tour",
          "guwahati sightseeing",
          "kamakhya temple",
          "kamakhya mandir",
          "vasistha ashram",
          "balaji temple",
        ],

        response:
          "Guwahati is the starting and ending point of the Meghalaya tour.\n\nMajor Attractions:\n• Vasistha Ashram\n• Kamakhya Temple\n• Balaji Temple\n\nSightseeing is subject to the arrival and departure schedule.",
      },

      shillong: {
        keywords: [
          "shillong",
          "shillong tour",
          "shillong sightseeing",
          "shillong package",
          "borapani lake",
          "umiam lake",
          "umiam",
        ],

        response:
          "Shillong is the main base of the Meghalaya tour.\n\nThe journey from Guwahati to Shillong passes through the scenic Borapani / Umiam Lake.\n\nShillong is also the base for excursions to Cherrapunji, Mawlynnong and Dawki.",
      },

      cherrapunji: {
        keywords: [
          "cherrapunji",
          "cherapunji",
          "sohra",
          "cherrapunji tour",
          "cherrapunji sightseeing",
          "nohkalikai falls",
          "seven sisters falls",
          "dainthlen falls",
          "thangkharang park",
          "elephanta falls",
          "living root bridge",
          "root bridge",
          "ramakrishna mission",
        ],

        response:
          "Cherrapunji is one of the major highlights of the Meghalaya tour.\n\nMajor Attractions:\n• Nohkalikai Falls\n• Seven Sisters Falls\n• Dainthlen Falls\n• Thangkharang Park\n• Elephanta Falls\n• Living Root Bridge\n• Ramakrishna Mission\n\nThe Cherrapunji excursion is scheduled on Day 4.",
      },

      mawlynnong: {
        keywords: [
          "mawlynnong",
          "mawlynnong tour",
          "mawlynnong village",
          "mawlynnong sightseeing",
          "cleanest village",
        ],

        response:
          "Mawlynnong is covered during the full-day excursion from Shillong.\n\nThe tour includes a visit to Mawlynnong Village along with Dawki River on Day 5.",
      },

      dawki: {
        keywords: [
          "dawki",
          "dawki tour",
          "dawki package",
          "dawki sightseeing",
          "dawki river",
          "crystal clear river",
          "bangladesh border",
        ],

        response:
          "Dawki is one of the most scenic destinations in Meghalaya.\n\nThe tour includes:\n• Dawki River\n• Crystal-clear river experience\n• Scenic surroundings near the border region\n\nDawki is covered along with Mawlynnong on Day 5.",
      },

      kaziranga: {
        keywords: [
          "kaziranga",
          "kaziranga tour",
          "kaziranga package",
          "kaziranga national park",
          "kaziranga sightseeing",
          "kaziranga safari",
          "jungle safari",
          "tribal dance",
        ],

        response:
          "Kaziranga National Park is included in Package 2 of the Meghalaya tour.\n\nPackage 2:\nDay 6: Shillong → Kaziranga\nDay 7: Kaziranga → Guwahati\n\nOptional activities include:\n• Jungle Safari\n• Tribal Dance Performance\n\nThese optional activities are at the traveler's own cost.",
      },

      package1: {
        keywords: [
          "package 1",
          "package one",
          "first package",
          "07 nights",
          "8 days",
          "8 day",
          "21500",
          "meghalaya package 1",
        ],

        response:
          "Meghalaya Tour - Package 1\n\nDuration: 07 Nights / 08 Days\nPrice: ₹21,500 per person\nRating: 9.1\n\nRoute:\nKolkata → Guwahati → Shillong → Cherrapunji → Mawlynnong → Dawki → Shillong → Guwahati → Kolkata\n\nThis package focuses on the major Meghalaya attractions including waterfalls, living root bridges, hills and crystal-clear rivers.",
      },

      package2: {
        keywords: [
          "package 2",
          "package two",
          "second package",
          "08 nights",
          "09 days",
          "9 days",
          "meghalaya package 2",
          "kaziranga package",
        ],

        response:
          "Meghalaya Tour - Package 2\n\nDuration: 08 Nights / 09 Days\nPrice: ₹21,500 per person\nRating: 9.1\n\nRoute:\nKolkata → Guwahati → Shillong → Cherrapunji → Mawlynnong → Dawki → Kaziranga → Guwahati → Kolkata\n\nThis package includes an additional Kaziranga National Park extension.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "meghalaya train",
          "railway",
          "sleeper train",
          "3 ac train",
          "kolkata train",
          "guwahati train",
        ],

        response:
          "Train travel is included in the Meghalaya tour.\n\nDeparture:\nKolkata / Howrah → Guwahati by train.\n\nReturn:\nGuwahati → Kolkata / Howrah by train.\n\nTrain tickets are provided in Sleeper Class or 3 AC depending on the package.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "meghalaya hotel",
          "meghalaya accommodation",
        ],

        response:
          "The package includes deluxe accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Guwahati\n• Shillong\n• Kaziranga for Package 2\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "meghalaya meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "meghalaya transport",
          "northeast transport",
        ],

        response:
          "Transportation is included throughout the Meghalaya tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "meghalaya facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe accommodation\n• Train tickets in Sleeper Class / 3 AC as per package\n• Train lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary",
      },

      waterfalls: {
        keywords: [
          "waterfall",
          "waterfalls",
          "meghalaya waterfalls",
          "nohkalikai",
          "seven sisters",
          "dainthlen falls",
          "elephanta falls",
        ],

        response:
          "Major Waterfalls Covered in the Meghalaya Tour:\n\n• Nohkalikai Falls\n• Seven Sisters Falls\n• Dainthlen Falls\n• Elephanta Falls\n\nThese waterfalls are covered during the Cherrapunji excursion.",
      },

      nature: {
        keywords: [
          "nature",
          "nature tour",
          "nature sightseeing",
          "living root bridge",
          "crystal clear water",
          "river",
          "hills",
          "waterfalls tour",
        ],

        response:
          "The Meghalaya tour is ideal for nature lovers.\n\nYou can experience:\n• Scenic hills\n• Waterfalls\n• Living Root Bridge\n• Crystal-clear Dawki River\n• Mawlynnong Village\n• Umiam / Borapani Lake\n• Cherrapunji landscapes\n\nIt combines nature, sightseeing and cultural experiences across Meghalaya.",
      },

      route: {
        keywords: [
          "route",
          "tour route",
          "travel route",
          "meghalaya route",
          "northeast route",
          "circuit",
        ],

        response:
          "Meghalaya Tour Route - Package 1:\n\nKolkata → Guwahati → Shillong → Cherrapunji → Mawlynnong → Dawki → Shillong → Guwahati → Kolkata\n\nMeghalaya Tour Route - Package 2:\n\nKolkata → Guwahati → Shillong → Cherrapunji → Mawlynnong → Dawki → Kaziranga → Guwahati → Kolkata",
      },
    },
  },
  {
    id: 19,

    topic: "North India Tour",

    keywords: [
      "north india",
      "north india tour",
      "north india package",
      "north india tour package",
      "north india price",
      "north india package price",
      "north india duration",
      "north india itinerary",
      "north india sightseeing",
      "north india holiday",
      "north india holiday package",
      "north india temple tour",
      "north india heritage tour",

      "agra",
      "agra tour",
      "agra package",
      "agra sightseeing",
      "taj mahal",
      "agra fort",
      "fatehpur sikri",

      "mathura",
      "mathura tour",
      "mathura package",
      "mathura sightseeing",
      "shri krishna janmabhoomi",
      "krishna janmabhoomi",

      "vrindavan",
      "vrindavan tour",
      "vrindavan package",
      "vrindavan sightseeing",
      "iskcon temple",
      "madan mohan temple",
      "shahji temple",
      "prem mandir",
      "banke bihari temple",
      "nidhivan",

      "barsana",
      "barsana tour",
      "govardhan",
      "govardhan hill",
      "radha kund",
      "shyam kund",
      "bharat mata temple",

      "delhi",
      "delhi tour",
      "delhi package",
      "delhi sightseeing",
      "rajghat",
      "qutub minar",
      "red fort",
      "indira museum",
      "lotus temple",
      "india gate",

      "haridwar",
      "haridwar tour",
      "haridwar package",
      "haridwar sightseeing",
      "ganga bath",
      "ganga aarti",

      "rishikesh",
      "rishikesh tour",
      "rishikesh package",
      "rishikesh sightseeing",
      "ram jhula",
      "laxman jhula",
      "lakshman jhula",

      "mussoorie",
      "mussoorie tour",
      "mussoorie package",
      "mussoorie sightseeing",
      "kempty falls",
      "sahastradhara",

      "varanasi",
      "varanasi tour",
      "varanasi package",
      "varanasi sightseeing",
      "kashi",
      "kashi vishwanath",
      "kashi vishwanath temple",
      "annapurna temple",
      "birla temple",
      "varanasi ganga aarti",
      "varanasi boat ride",

      "agra vrindavan",
      "mathura vrindavan",
      "vrindavan delhi",
      "delhi haridwar",
      "haridwar rishikesh",
      "rishikesh mussoorie",
      "haridwar mussoorie",
      "haridwar varanasi",

      "north india train",
      "north india hotel",
      "north india meals",
      "north india transport",
      "north india train ticket",
      "train journey",
      "sleeper class train",
      "temple tour",
      "heritage tour",
      "spiritual tour",
      "pilgrimage tour",
    ],

    summary: {
      duration: "10 Nights / 11 Days or 12 Nights / 13 Days",
      price: "₹21,500 per person onwards",
      rating: "9.0",
      category: "Domestic Tour",
      destinations:
        "Agra • Mathura • Vrindavan • Delhi • Haridwar • Rishikesh • Mussoorie • Varanasi",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "north india price",
          "north india package price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "North India Tour Package pricing starts from ₹21,500 per person.\n\nPackage 1:\nDuration: 10 Nights / 11 Days\nPrice: ₹21,500 per person\n\nPackage 2:\nDuration: 12 Nights / 13 Days\nPrice: ₹26,500 per person\n\nPackage 1 covers Agra, Mathura, Vrindavan, Delhi, Haridwar, Rishikesh and Mussoorie.\n\nPackage 2 additionally includes Varanasi and more sightseeing around Mathura and Vrindavan.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "north india itinerary",
          "north india tour plan",
          "north india schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "North India Tour Itinerary\n\nPackage 1: 10 Nights / 11 Days\nPrice: ₹21,500 per person\n\nDay 1: Kolkata → Agra\nBoard train from Howrah Railway Station for Agra. Overnight stay in train.\n\nDay 2: Arrival at Agra\nArrive at Agra Railway Station and transfer to hotel. Overnight stay at Agra.\n\nDay 3: Agra → Vrindavan\nVisit Taj Mahal, Agra Fort and Fatehpur Sikri. Later proceed to Vrindavan. Overnight stay at Vrindavan.\n\nDay 4: Mathura & Vrindavan\nVisit Shri Krishna Janmabhoomi, ISKCON Temple, Madan Mohan Temple and Shahji Temple. Overnight stay at Vrindavan.\n\nDay 5: Vrindavan → Delhi\nEarly morning transfer to Delhi. Check in to hotel. Overnight stay at Delhi.\n\nDay 6: Delhi Sightseeing\nVisit Rajghat, Qutub Minar, Red Fort, Indira Museum, Lotus Temple and India Gate. Overnight stay at Delhi.\n\nDay 7: Delhi → Haridwar\nTake morning train to Haridwar. Enjoy Ganga bath and evening Ganga Aarti. Overnight stay at Haridwar.\n\nDay 8: Rishikesh Excursion\nVisit Ram Jhula and Laxman Jhula in Rishikesh. Return to Haridwar. Overnight stay at Haridwar.\n\nDay 9: Mussoorie Excursion & Departure\nVisit Kempty Falls and Sahastradhara in Mussoorie. Return to Haridwar and board train for Kolkata. Overnight stay in train.\n\nDay 10: Train Journey\nContinue return train journey towards Kolkata. Overnight stay in train.\n\nDay 11: Arrival at Kolkata\nArrive at Howrah Railway Station with sweet memories of your North India tour.\n\nPackage 2: 12 Nights / 13 Days\n\nPackage 2 follows the same route with additional sightseeing at Barsana, Govardhan and Varanasi.\n\nDay 1: Kolkata → Agra\nBoard train from Howrah Railway Station for Agra. Overnight stay in train.\n\nDay 2: Arrival at Agra\nArrive at Agra Railway Station and transfer to hotel. Overnight stay at Agra.\n\nDay 3: Agra → Vrindavan\nVisit Taj Mahal, Agra Fort and Fatehpur Sikri. Later proceed to Vrindavan. Overnight stay at Vrindavan.\n\nDay 4: Mathura & Vrindavan Temples\nVisit Shri Krishna Janmabhoomi, ISKCON Temple, Madan Mohan Temple, Shahji Temple and Prem Mandir. Overnight stay at Vrindavan.\n\nDay 5: Barsana & Govardhan\nVisit Banke Bihari Temple, Nidhivan, Bharat Mata Temple, Barsana, Govardhan Hill, Radha Kund and Shyam Kund. Overnight stay at Vrindavan.\n\nDay 6: Vrindavan → Delhi\nTransfer to Delhi and check in to hotel. Overnight stay at Delhi.\n\nDay 7: Delhi Sightseeing\nVisit Rajghat, Qutub Minar, Red Fort, Indira Museum, Lotus Temple and India Gate. Overnight stay at Delhi.\n\nDay 8: Delhi → Haridwar\nTake morning train to Haridwar. Enjoy Ganga bath and evening Ganga Aarti. Overnight stay at Haridwar.\n\nDay 9: Rishikesh Excursion\nVisit Ram Jhula and Laxman Jhula. Return to Haridwar. Overnight stay at Haridwar.\n\nDay 10: Mussoorie Excursion → Varanasi\nVisit Kempty Falls and Sahastradhara. Return to Haridwar and board train for Varanasi. Overnight stay in train.\n\nDay 11: Varanasi Arrival & Ganga Aarti\nVisit Annapurna Temple, Birla Temple and Kashi Vishwanath Temple. Evening Ganga Aarti. Optional boat ride. Overnight stay at Varanasi.\n\nDay 12: Departure from Varanasi\nTransfer to Varanasi Railway Station for return train journey. Overnight stay in train.\n\nDay 13: Arrival at Kolkata\nArrive at Howrah / Sealdah Railway Station with sweet memories of North India.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "north india sightseeing",
          "north india attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nAgra:\n• Taj Mahal\n• Agra Fort\n• Fatehpur Sikri\n\nMathura / Vrindavan:\n• Shri Krishna Janmabhoomi\n• ISKCON Temple\n• Madan Mohan Temple\n• Shahji Temple\n• Prem Mandir\n• Banke Bihari Temple\n• Nidhivan\n\nBarsana / Govardhan:\n• Barsana\n• Govardhan Hill\n• Radha Kund\n• Shyam Kund\n• Bharat Mata Temple\n\nDelhi:\n• Rajghat\n• Qutub Minar\n• Red Fort\n• Indira Museum\n• Lotus Temple\n• India Gate\n\nHaridwar:\n• Ganga Bath\n• Ganga Aarti\n\nRishikesh:\n• Ram Jhula\n• Laxman Jhula\n\nMussoorie:\n• Kempty Falls\n• Sahastradhara\n\nVaranasi:\n• Annapurna Temple\n• Birla Temple\n• Kashi Vishwanath Temple\n• Ganga Aarti\n• Optional Boat Ride",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "north india inclusions",
          "north india included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Train meals including lunch and dinner for Package 1\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "north india exclusions",
          "north india excluded",
        ],

        response:
          "Package Exclusions:\n\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permits\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "north india booking",
          "north india contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: North India Tour\nPackage 1: 10 Nights / 11 Days — ₹21,500 per person\nPackage 2: 12 Nights / 13 Days — ₹26,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "north india destinations",
          "north india route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Agra\n• Mathura\n• Vrindavan\n• Delhi\n• Haridwar\n• Rishikesh\n• Mussoorie\n• Varanasi\n\nPackage 2 additionally covers Barsana, Govardhan, Radha Kund and Shyam Kund.",
      },

      agra: {
        keywords: [
          "agra",
          "agra tour",
          "agra sightseeing",
          "taj mahal",
          "agra fort",
          "fatehpur sikri",
        ],

        response:
          "Agra is the first major destination of the North India Tour.\n\nMajor Attractions:\n• Taj Mahal\n• Agra Fort\n• Fatehpur Sikri\n\nAgra sightseeing takes place on Day 3 before proceeding towards Vrindavan.",
      },

      mathura: {
        keywords: [
          "mathura",
          "mathura tour",
          "mathura sightseeing",
          "shri krishna janmabhoomi",
          "krishna janmabhoomi",
        ],

        response:
          "Mathura is covered as part of the spiritual and Krishna pilgrimage section of the tour.\n\nMajor Attraction:\n• Shri Krishna Janmabhoomi\n\nMathura and Vrindavan sightseeing takes place during the Vrindavan stay.",
      },

      vrindavan: {
        keywords: [
          "vrindavan",
          "vrindavan tour",
          "vrindavan sightseeing",
          "iskcon temple",
          "madan mohan temple",
          "shahji temple",
          "prem mandir",
          "banke bihari temple",
          "nidhivan",
        ],

        response:
          "Vrindavan is one of the major spiritual destinations covered in the North India Tour.\n\nMajor Attractions:\n• ISKCON Temple\n• Madan Mohan Temple\n• Shahji Temple\n• Prem Mandir\n• Banke Bihari Temple\n• Nidhivan\n\nPackage 1 covers major Mathura and Vrindavan temples.\n\nPackage 2 provides additional sightseeing around Barsana and Govardhan.",
      },

      barsana: {
        keywords: [
          "barsana",
          "barsana tour",
          "barsana sightseeing",
          "govardhan",
          "govardhan hill",
          "radha kund",
          "shyam kund",
        ],

        response:
          "Barsana and Govardhan are included in Package 2 of the North India Tour.\n\nMajor Attractions:\n• Barsana\n• Govardhan Hill\n• Radha Kund\n• Shyam Kund\n• Banke Bihari Temple\n• Nidhivan\n\nThis additional sightseeing takes place on Day 5.",
      },

      delhi: {
        keywords: [
          "delhi",
          "delhi tour",
          "delhi sightseeing",
          "rajghat",
          "qutub minar",
          "red fort",
          "indira museum",
          "lotus temple",
          "india gate",
        ],

        response:
          "Delhi is covered during the middle section of the North India Tour.\n\nMajor Attractions:\n• Rajghat\n• Qutub Minar\n• Red Fort\n• Indira Museum\n• Lotus Temple\n• India Gate\n\nDelhi sightseeing is scheduled on Day 6 of Package 1 and Day 7 of Package 2.",
      },

      haridwar: {
        keywords: [
          "haridwar",
          "haridwar tour",
          "haridwar sightseeing",
          "ganga bath",
          "ganga aarti",
          "haridwar temple",
        ],

        response:
          "Haridwar is an important spiritual destination of the North India Tour.\n\nActivities:\n• Ganga Bath\n• Evening Ganga Aarti\n\nThe tour travels from Delhi to Haridwar by train.",
      },

      rishikesh: {
        keywords: [
          "rishikesh",
          "rishikesh tour",
          "rishikesh sightseeing",
          "ram jhula",
          "laxman jhula",
          "lakshman jhula",
        ],

        response:
          "Rishikesh is covered as an excursion from Haridwar.\n\nMajor Attractions:\n• Ram Jhula\n• Laxman Jhula\n\nAfter sightseeing, the tour returns to Haridwar for an overnight stay.",
      },

      mussoorie: {
        keywords: [
          "mussoorie",
          "mussoorie tour",
          "mussoorie sightseeing",
          "kempty falls",
          "sahastradhara",
        ],

        response:
          "Mussoorie is covered as an excursion during the Haridwar stay.\n\nMajor Attractions:\n• Kempty Falls\n• Sahastradhara\n\nPackage 1 visits Mussoorie on Day 9 before the return journey to Kolkata.\n\nPackage 2 visits Mussoorie on Day 10 before proceeding towards Varanasi.",
      },

      varanasi: {
        keywords: [
          "varanasi",
          "varanasi tour",
          "varanasi sightseeing",
          "kashi",
          "kashi vishwanath",
          "kashi vishwanath temple",
          "annapurna temple",
          "birla temple",
          "varanasi ganga aarti",
          "varanasi boat ride",
        ],

        response:
          "Varanasi is included in Package 2 of the North India Tour.\n\nMajor Attractions:\n• Annapurna Temple\n• Birla Temple\n• Kashi Vishwanath Temple\n• Ganga Aarti\n• Optional Boat Ride on the Ganges\n\nVaranasi is covered on Day 11 of Package 2.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "north india train",
          "north india train ticket",
          "railway",
          "sleeper class train",
          "train journey",
          "kolkata train",
          "howrah train",
        ],

        response:
          "Train travel is included in the North India Tour.\n\nDeparture:\nKolkata / Howrah → Agra by train.\n\nDelhi → Haridwar:\nMorning train journey is included in the itinerary.\n\nReturn:\nHaridwar → Kolkata for Package 1.\n\nPackage 2:\nHaridwar → Varanasi and later Varanasi → Kolkata.\n\nThe package includes Sleeper Class train tickets.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "north india hotel",
          "north india accommodation",
        ],

        response:
          "The package includes deluxe accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Agra\n• Vrindavan\n• Delhi\n• Haridwar\n\nPackage 2 additionally includes an overnight stay at Varanasi.\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "north india meals",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals as specified in the package\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "north india transport",
        ],

        response:
          "Transportation is included throughout the North India Tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Train meals as specified\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "north india package 1",
          "11 days",
          "10 nights",
        ],

        response:
          "North India Tour Package 1:\n\nDuration: 10 Nights / 11 Days\nPrice: ₹21,500 per person\nRating: 9.0\n\nDestinations:\nAgra, Mathura, Vrindavan, Delhi, Haridwar, Rishikesh and Mussoorie.\n\nThis package does not include Varanasi.",
      },

      package2: {
        keywords: [
          "package 2",
          "second package",
          "option 2",
          "north india package 2",
          "13 days",
          "12 nights",
        ],

        response:
          "North India Tour Package 2:\n\nDuration: 12 Nights / 13 Days\nPrice: ₹26,500 per person\nRating: 9.0\n\nDestinations:\nAgra, Mathura, Vrindavan, Barsana, Govardhan, Delhi, Haridwar, Rishikesh, Mussoorie and Varanasi.\n\nPackage 2 provides additional spiritual sightseeing and includes Varanasi.",
      },
    },
  },
  {
    id: 20,

    topic: "North Sikkim Tour",

    keywords: [
      "north sikkim",
      "north sikkim tour",
      "north sikkim package",
      "north sikkim tour package",
      "north sikkim price",
      "north sikkim package price",
      "north sikkim duration",
      "north sikkim itinerary",
      "north sikkim sightseeing",
      "north sikkim holiday",
      "north sikkim holiday package",
      "sikkim tour",
      "sikkim package",
      "sikkim tour package",
      "sikkim holiday",

      "gangtok",
      "gangtok tour",
      "gangtok package",
      "gangtok sightseeing",
      "mg marg",
      "mall road",

      "lachen",
      "lachen tour",
      "lachen sightseeing",
      "lachen package",

      "gurudongmar lake",
      "gurudongmar",
      "gurudongmar lake tour",
      "gurudongmar sightseeing",
      "gurudongmar package",

      "lachung",
      "lachung tour",
      "lachung sightseeing",
      "lachung package",

      "yumthang valley",
      "yumthang",
      "yumthang valley tour",
      "yumthang sightseeing",
      "zero point",
      "zero point sikkim",

      "nathula",
      "nathula pass",
      "nathula tour",
      "nathula sightseeing",
      "baba mandir",
      "tsomgo lake",
      "changu lake",

      "pelling",
      "pelling tour",
      "pelling package",
      "pelling sightseeing",
      "singshore bridge",
      "pelling 5 points",
      "pelling five points",

      "njp",
      "njp railway station",
      "kolkata to njp",
      "howrah to njp",
      "sealdah to njp",
      "train to sikkim",

      "north sikkim train",
      "north sikkim hotel",
      "north sikkim meals",
      "north sikkim transport",
      "north sikkim train ticket",
      "train journey",
      "sleeper class train",
      "hotel stay",
      "mountain tour",
      "valley tour",
      "himalayan tour",
      "sikkim sightseeing",
    ],

    summary: {
      duration: "8 Nights / 9 Days",
      price: "Not available",
      rating: "9.2",
      category: "Domestic Tour",
      destinations:
        "Gangtok • Lachen • Gurudongmar Lake • Lachung • Yumthang Valley • Nathula • Pelling",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "north sikkim price",
          "north sikkim package price",
          "sikkim price",
          "sikkim package price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "North Sikkim Tour Package pricing is currently not available.\n\nPackage 1:\nDuration: 8 Nights / 9 Days\nPrice: Not available\nRating: 9.2\n\nThe package covers Gangtok, Lachen, Gurudongmar Lake, Lachung, Yumthang Valley, Nathula Pass and Pelling.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "north sikkim itinerary",
          "north sikkim tour plan",
          "north sikkim schedule",
          "sikkim itinerary",
          "sikkim tour plan",
          "package itinerary",
          "tour plan",
        ],

        response:
          "North Sikkim Tour Itinerary\n\nPackage 1: 8 Nights / 9 Days\nPrice: Not available\n\nDay 1: Kolkata → NJP\nBoard train from Howrah / Sealdah Railway Station for NJP. Overnight stay in train.\n\nDay 2: Arrival at Gangtok\nArrive at NJP Railway Station and transfer to Gangtok. Evening visit to MG Marg and Mall Road on foot. Overnight stay at Gangtok.\n\nDay 3: Gangtok → Lachen\nAfter breakfast proceed to Lachen with en-route sightseeing. Overnight stay at Lachen.\n\nDay 4: Lachen → Gurudongmar Lake → Lachung\nVisit Gurudongmar Lake in the morning and continue to Lachung. Overnight stay at Lachung.\n\nDay 5: Lachung → Yumthang Valley → Gangtok\nVisit Yumthang Valley and optional Zero Point. Return to Gangtok. Overnight stay at Gangtok.\n\nDay 6: Gangtok Excursion\nVisit Tsomgo Lake, Baba Mandir and Nathula Pass. Overnight stay at Gangtok.\n\nDay 7: Gangtok → Pelling\nAfter breakfast transfer to Pelling. Overnight stay at Pelling.\n\nDay 8: Pelling Sightseeing\nVisit Pelling local attractions including the 5 Points sightseeing circuit and Singshore Bridge. Overnight stay at Pelling.\n\nDay 9: Pelling → NJP → Kolkata\nTransfer to NJP Railway Station and board train for Kolkata. Overnight stay in train.\n\nDay 10: Arrival at Kolkata\nArrive at Howrah / Sealdah Railway Station with sweet memories of North Sikkim.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "north sikkim sightseeing",
          "sikkim sightseeing",
          "north sikkim attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nGangtok:\n• MG Marg\n• Mall Road\n• Tsomgo Lake\n• Baba Mandir\n• Nathula Pass\n\nLachen:\n• En-route Himalayan sightseeing\n• Gurudongmar Lake\n\nLachung:\n• Yumthang Valley\n• Optional Zero Point\n\nPelling:\n• Pelling 5 Points sightseeing circuit\n• Singshore Bridge\n\nThe tour combines Himalayan mountains, alpine valleys, high-altitude lakes, monasteries, scenic viewpoints and cultural attractions.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "north sikkim inclusions",
          "north sikkim included",
          "sikkim inclusions",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe accommodation\n• Sleeper Class train ticket\n• Train dinner on onward journey\n• Breakfast\n• Lunch\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "north sikkim exclusions",
          "north sikkim excluded",
          "sikkim exclusions",
        ],

        response:
          "Package Exclusions:\n\n• Flight ticket\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permits\n• Any ride\n• Personal activities\n• Any safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "north sikkim booking",
          "north sikkim contact",
          "sikkim booking",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: North Sikkim Tour\nDuration: 8 Nights / 9 Days\nPrice: Not available\nRating: 9.2\n\nPlease confirm the latest availability, permits and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "north sikkim destinations",
          "north sikkim route",
          "sikkim destinations",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Gangtok\n• Lachen\n• Gurudongmar Lake\n• Lachung\n• Yumthang Valley\n• Nathula Pass\n• Pelling\n\nThe route covers major Himalayan destinations across North and West Sikkim.",
      },

      gangtok: {
        keywords: [
          "gangtok",
          "gangtok tour",
          "gangtok package",
          "gangtok sightseeing",
          "mg marg",
          "mall road",
        ],

        response:
          "Gangtok is one of the major destinations of the North Sikkim Tour.\n\nMajor Attractions and Activities:\n• MG Marg\n• Mall Road\n• Tsomgo Lake\n• Baba Mandir\n• Nathula Pass\n\nGangtok is also used as the base for excursions to North Sikkim and surrounding attractions.",
      },

      lachen: {
        keywords: [
          "lachen",
          "lachen tour",
          "lachen sightseeing",
          "lachen package",
          "lachen sikkim",
        ],

        response:
          "Lachen is an important mountain destination on the North Sikkim route.\n\nThe itinerary includes:\n• Gangtok → Lachen transfer\n• En-route Himalayan sightseeing\n• Excursion towards Gurudongmar Lake\n\nAn overnight stay at Lachen is included in the itinerary.",
      },

      gurudongmar: {
        keywords: [
          "gurudongmar",
          "gurudongmar lake",
          "gurudongmar lake tour",
          "gurudongmar sightseeing",
          "gurudongmar package",
        ],

        response:
          "Gurudongmar Lake is one of the major highlights of the North Sikkim Tour.\n\nThe itinerary covers:\n• Lachen → Gurudongmar Lake\n• Morning visit to Gurudongmar Lake\n• Continue towards Lachung\n\nGurudongmar Lake is known for its spectacular high-altitude Himalayan surroundings.",
      },

      lachung: {
        keywords: [
          "lachung",
          "lachung tour",
          "lachung sightseeing",
          "lachung package",
          "lachung sikkim",
        ],

        response:
          "Lachung is covered as part of the North Sikkim mountain circuit.\n\nThe itinerary includes:\n• Gurudongmar Lake → Lachung\n• Overnight stay at Lachung\n• Lachung → Yumthang Valley excursion\n• Return to Gangtok",
      },

      yumthang: {
        keywords: [
          "yumthang",
          "yumthang valley",
          "yumthang valley tour",
          "yumthang sightseeing",
          "zero point",
          "zero point sikkim",
        ],

        response:
          "Yumthang Valley is one of the scenic highlights of the North Sikkim Tour.\n\nThe itinerary includes:\n• Lachung → Yumthang Valley\n• Scenic Himalayan valley sightseeing\n• Optional visit to Zero Point\n• Return to Gangtok\n\nZero Point is optional and may be subject to local conditions and accessibility.",
      },

      nathula: {
        keywords: [
          "nathula",
          "nathula pass",
          "nathula tour",
          "nathula sightseeing",
          "baba mandir",
          "tsomgo lake",
          "changu lake",
        ],

        response:
          "Nathula Pass is included in the Gangtok excursion.\n\nMajor Attractions:\n• Tsomgo Lake\n• Baba Mandir\n• Nathula Pass\n\nThe visit is planned on Day 6 of the itinerary. Entry and permit requirements may apply.",
      },

      pelling: {
        keywords: [
          "pelling",
          "pelling tour",
          "pelling package",
          "pelling sightseeing",
          "singshore bridge",
          "pelling 5 points",
          "pelling five points",
        ],

        response:
          "Pelling is the final major destination of the North Sikkim Tour.\n\nMajor Attractions:\n• Pelling 5 Points sightseeing circuit\n• Singshore Bridge\n• Local Pelling attractions\n\nThe tour transfers from Gangtok to Pelling on Day 7 and includes local sightseeing on Day 8.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "north sikkim train",
          "north sikkim train ticket",
          "railway",
          "sleeper class train",
          "train journey",
          "kolkata train",
          "howrah train",
          "njp train",
        ],

        response:
          "Train travel is included in the North Sikkim Tour.\n\nDeparture:\nKolkata / Howrah / Sealdah → NJP by train.\n\nTransfer:\nNJP Railway Station → Gangtok by road.\n\nReturn:\nPelling → NJP by road, followed by train to Kolkata.\n\nThe package includes a Sleeper Class train ticket.\n\nTrain dinner is included on the onward journey.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "north sikkim hotel",
          "north sikkim accommodation",
          "sikkim hotel",
        ],

        response:
          "The North Sikkim Tour includes deluxe accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Gangtok\n• Lachen\n• Lachung\n• Pelling\n\nFor exact hotel names, room categories and availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "north sikkim meals",
          "sikkim food",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Dinner\n• Train dinner on the onward journey\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "north sikkim transport",
          "sikkim transport",
        ],

        response:
          "Transportation is included throughout the North Sikkim Tour as per the itinerary.\n\nThe package also includes:\n• NJP Railway Station transfers\n• Pick-up and drop\n• Transportation between destinations\n• Sightseeing transportation\n• Parking charges\n• Toll tax",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe hotel accommodation\n• Sleeper Class train ticket\n• Train dinner on onward journey\n• Breakfast\n• Lunch\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "north sikkim package 1",
          "9 days",
          "8 nights",
        ],

        response:
          "North Sikkim Tour Package 1:\n\nDuration: 8 Nights / 9 Days\nPrice: Not available\nRating: 9.2\n\nDestinations:\nGangtok, Lachen, Gurudongmar Lake, Lachung, Yumthang Valley, Nathula Pass and Pelling.\n\nThe package includes train travel from Kolkata to NJP, road transportation, deluxe accommodation, meals and sightseeing as per the itinerary.",
      },

      permits: {
        keywords: [
          "permit",
          "permits",
          "nathula permit",
          "nathula pass permit",
          "forest permit",
          "sikkim permit",
          "north sikkim permit",
        ],

        response:
          "Some North Sikkim and border-area sightseeing locations may require permits.\n\nThe package excludes permit charges.\n\nNathula Pass and certain North Sikkim destinations are subject to local permit rules, weather conditions and accessibility.\n\nFor the latest permit requirements, please contact Riya Tours & Travels before booking.",
      },

      duration: {
        keywords: [
          "duration",
          "how many days",
          "how long",
          "number of days",
          "nights",
          "north sikkim duration",
          "sikkim duration",
        ],

        response:
          "North Sikkim Tour Duration:\n\n8 Nights / 9 Days package duration is listed in the package details.\n\nThe itinerary itself includes Day 1 through Day 10, with the final day being arrival at Kolkata after the return train journey.\n\nFor exact travel dates and schedule confirmation, please contact Riya Tours & Travels.",
      },
    },
  },
  {
    id: 21,

    topic: "Goa Tour",

    keywords: [
      "goa",
      "goa tour",
      "goa package",
      "goa tour package",
      "goa price",
      "goa package price",
      "goa duration",
      "goa itinerary",
      "goa sightseeing",
      "goa holiday",
      "goa holiday package",
      "goa beach tour",
      "goa trip",
      "goa travel",

      "north goa",
      "north goa tour",
      "north goa sightseeing",
      "north goa package",
      "dolphin point",
      "aguada fort",
      "baga beach",
      "calangute beach",
      "miramar beach",

      "south goa",
      "south goa tour",
      "south goa sightseeing",
      "south goa package",
      "st xavier's church",
      "st xaviers church",
      "mangesh temple",
      "santadurga temple",
      "colva beach",

      "madgaon",
      "madgaon railway station",
      "goa railway",
      "goa train",
      "goa train ticket",
      "shalimar goa train",
      "kolkata goa train",

      "goa hotel",
      "goa accommodation",
      "goa meals",
      "goa transport",
      "goa beach",
      "goa leisure",
      "goa water sports",
      "goa shopping",
      "goa cafes",

      "goa package 1",
      "goa package 2",
      "3 nights 8 days",
      "4 nights 8 days",
      "8 days goa",
      "goa 8 days",

      "goa booking",
      "goa reservation",
      "goa enquiry",
      "goa contact",
    ],

    summary: {
      duration: "3 Nights / 8 Days or 4 Nights / 8 Days",
      price: "₹12,500 per person onwards",
      rating: "9.0",
      category: "Domestic Tour",
      destinations: "North Goa • South Goa • Madgaon",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "goa price",
          "goa package price",
          "tour price",
          "package cost",
          "how much",
          "goa cost",
        ],

        response:
          "Goa Tour Package pricing starts from ₹12,500 per person.\n\nPackage 1:\nDuration: 3 Nights / 8 Days\nPrice: ₹12,500 per person\n\nPackage 2:\nDuration: 4 Nights / 8 Days\nPrice: ₹15,500 per person\n\nBoth packages include North Goa and South Goa sightseeing, hotel accommodation, meals, transportation and Sleeper Class train tickets.\n\nPackage 2 provides an additional leisure day in Goa.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "goa itinerary",
          "goa tour plan",
          "goa schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Goa Tour Itinerary\n\nPackage 1: 3 Nights / 8 Days\nPrice: ₹12,500 per person\n\nDay 1: Kolkata → Madgaon\nBoard train from Shalimar Railway Station for Madgaon. Overnight stay in train.\n\nDay 2: Train Journey\nFull day train journey towards Goa. Overnight stay in train.\n\nDay 3: Arrival at Goa\nArrive at Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.\n\nDay 4: North Goa Sightseeing\nVisit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach and Miramar Beach. Return to hotel for overnight stay.\n\nDay 5: South Goa Sightseeing\nVisit St. Xavier's Church, Mangesh Temple, Santadurga Temple and Colva Beach. Return to hotel for overnight stay.\n\nDay 6: Leisure Day\nFull day free for personal activities, shopping, beach time or optional water sports. Overnight stay at Goa.\n\nDay 7: Goa → Kolkata\nEarly morning check-out and transfer to Madgaon Railway Station. Board train for Kolkata. Overnight stay in train.\n\nDay 8: Arrival at Kolkata\nArrive at Shalimar Railway Station with sweet memories of Goa.\n\nPackage 2: 4 Nights / 8 Days\nPrice: ₹15,500 per person\n\nDay 1: Kolkata → Madgaon\nBoard train from Shalimar Railway Station for Madgaon. Overnight stay in train.\n\nDay 2: Train Journey\nFull day train journey. Overnight stay in train.\n\nDay 3: Arrival at Goa\nArrive at Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.\n\nDay 4: North Goa Sightseeing\nVisit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach and Miramar Beach. Return to hotel for overnight stay.\n\nDay 5: South Goa Sightseeing\nVisit St. Xavier's Church, Mangesh Temple, Santadurga Temple and Colva Beach. Return to hotel for overnight stay.\n\nDay 6: Leisure Day\nEnjoy a full day for personal activities, shopping, beach time or optional water sports. Overnight stay at Goa.\n\nDay 7: Extra Leisure Day\nEnjoy an additional full day in Goa for relaxation, beach activities, local markets, cafés or optional sightseeing. Overnight stay at Goa.\n\nDay 8: Goa → Kolkata\nEarly morning check-out and transfer to Madgaon Railway Station. Board train for Kolkata. Overnight stay in train.\n\nDay 9: Arrival at Kolkata\nArrive at Shalimar Railway Station with sweet memories of Goa.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "goa sightseeing",
          "goa attractions",
          "tourist places",
          "what will we see",
          "goa places to visit",
        ],

        response:
          "Major Attractions Covered in Goa:\n\nNorth Goa:\n• Dolphin Point\n• Aguada Fort\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n\nSouth Goa:\n• St. Xavier's Church\n• Mangesh Temple\n• Santadurga Temple\n• Colva Beach\n\nLeisure Activities:\n• Beach activities\n• Shopping\n• Local markets\n• Cafés\n• Optional water sports\n• Personal leisure time",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "goa inclusions",
          "goa included",
        ],

        response:
          "Goa Tour Package Inclusions:\n\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Train food including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "goa exclusions",
          "goa excluded",
        ],

        response:
          "Goa Tour Package Exclusions:\n\n• Flight ticket\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Any ride\n• Camera charges\n• Permits\n• Personal activities\n• Any safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "goa booking",
          "goa contact",
          "goa reservation",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Goa Tour\nPackage 1: 3 Nights / 8 Days — ₹12,500 per person\nPackage 2: 4 Nights / 8 Days — ₹15,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "goa destinations",
          "goa route",
          "tour route",
        ],

        response:
          "Goa Tour Destinations Covered:\n\n• North Goa\n• South Goa\n• Madgaon\n\nMajor sightseeing includes:\n• Dolphin Point\n• Aguada Fort\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n• St. Xavier's Church\n• Mangesh Temple\n• Santadurga Temple\n• Colva Beach",
      },

      northgoa: {
        keywords: [
          "north goa",
          "north goa tour",
          "north goa sightseeing",
          "north goa package",
          "dolphin point",
          "aguada fort",
          "baga beach",
          "calangute beach",
          "miramar beach",
        ],

        response:
          "North Goa is covered as one of the major sightseeing sections of the Goa Tour.\n\nMajor Attractions:\n• Dolphin Point\n• Aguada Fort\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n\nNorth Goa sightseeing is scheduled on Day 4 of both packages.",
      },

      southgoa: {
        keywords: [
          "south goa",
          "south goa tour",
          "south goa sightseeing",
          "south goa package",
          "st xavier's church",
          "st xaviers church",
          "mangesh temple",
          "santadurga temple",
          "colva beach",
        ],

        response:
          "South Goa is covered during the second major sightseeing day of the tour.\n\nMajor Attractions:\n• St. Xavier's Church\n• Mangesh Temple\n• Santadurga Temple\n• Colva Beach\n\nSouth Goa sightseeing is scheduled on Day 5 of both packages.",
      },

      beaches: {
        keywords: [
          "beach",
          "beaches",
          "goa beach",
          "goa beaches",
          "baga beach",
          "calangute beach",
          "miramar beach",
          "colva beach",
          "beach tour",
          "beach activities",
        ],

        response:
          "The Goa Tour includes several famous beaches.\n\nNorth Goa:\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n\nSouth Goa:\n• Colva Beach\n\nThe packages also provide leisure time for beach activities and relaxation. Optional water sports may be available at additional cost.",
      },

      madgaon: {
        keywords: [
          "madgaon",
          "madgaon railway station",
          "goa railway station",
          "madgaon train",
          "madgaon transfer",
        ],

        response:
          "Madgaon is the main railway arrival and departure point mentioned in the Goa Tour itinerary.\n\nArrival:\nKolkata → Madgaon by train.\n\nAfter arriving at Madgaon Railway Station, guests are transferred to the hotel in Goa.\n\nReturn:\nGoa → Madgaon Railway Station → Kolkata by train.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "goa train",
          "goa train ticket",
          "railway",
          "sleeper class train",
          "train journey",
          "kolkata goa train",
          "shalimar goa train",
          "madgaon train",
        ],

        response:
          "Train travel is included in the Goa Tour.\n\nDeparture:\nShalimar Railway Station → Madgaon by train.\n\nArrival:\nMadgaon Railway Station → Hotel in Goa by road transfer.\n\nReturn:\nGoa → Madgaon Railway Station → Kolkata by train.\n\nThe package includes Sleeper Class train tickets.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "goa hotel",
          "goa accommodation",
        ],

        response:
          "The Goa Tour package includes deluxe hotel accommodation.\n\nOvernight stays are planned at Goa during the sightseeing and leisure days.\n\nFor exact hotel names, room availability and hotel category, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "goa meals",
          "goa food",
        ],

        response:
          "Meals included in the Goa Tour are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train food including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "goa transport",
        ],

        response:
          "Transportation is included throughout the Goa Tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Madgaon Railway Station transfers\n• Transfers between sightseeing locations\n• Sightseeing transportation",
      },

      leisure: {
        keywords: [
          "leisure",
          "free day",
          "free time",
          "goa leisure",
          "personal activities",
          "shopping",
          "water sports",
          "goa shopping",
          "goa cafes",
        ],

        response:
          "The Goa Tour provides leisure time for relaxation and personal activities.\n\nPackage 1:\nDay 6 is a full leisure day.\n\nPackage 2:\nDay 6 is a leisure day and Day 7 provides an additional leisure day.\n\nYou can use this time for:\n• Beach activities\n• Shopping\n• Local markets\n• Cafés\n• Personal activities\n• Optional water sports\n\nOptional activities may be at additional cost.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe hotel accommodation\n• Sleeper Class train tickets\n• Train food\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary\n• Leisure time in Goa",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "goa package 1",
          "3 nights",
          "3 nights 8 days",
          "goa 3 nights",
          "12500",
          "12,500",
        ],

        response:
          "Goa Tour Package 1:\n\nDuration: 3 Nights / 8 Days\nPrice: ₹12,500 per person\nRating: 9.0\n\nDestinations:\nNorth Goa, South Goa and Madgaon.\n\nHighlights:\n• North Goa sightseeing\n• South Goa sightseeing\n• One full leisure day\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Meals\n• Transportation\n• Pick-up and drop\n\nPackage 1 is suitable for travellers looking for a shorter Goa holiday.",
      },

      package2: {
        keywords: [
          "package 2",
          "second package",
          "option 2",
          "goa package 2",
          "4 nights",
          "4 nights 8 days",
          "goa 4 nights",
          "15500",
          "15,500",
        ],

        response:
          "Goa Tour Package 2:\n\nDuration: 4 Nights / 8 Days\nPrice: ₹15,500 per person\nRating: 9.0\n\nDestinations:\nNorth Goa, South Goa and Madgaon.\n\nHighlights:\n• North Goa sightseeing\n• South Goa sightseeing\n• Leisure day\n• Additional leisure day\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Meals\n• Transportation\n• Pick-up and drop\n\nPackage 2 provides an additional leisure day compared with Package 1.",
      },

      comparison: {
        keywords: [
          "compare",
          "comparison",
          "difference",
          "package difference",
          "which package",
          "best package",
          "package 1 or 2",
          "goa package comparison",
        ],

        response:
          "Goa Tour Package Comparison:\n\nPackage 1:\n• Duration: 3 Nights / 8 Days\n• Price: ₹12,500 per person\n• North Goa sightseeing\n• South Goa sightseeing\n• 1 leisure day\n\nPackage 2:\n• Duration: 4 Nights / 8 Days\n• Price: ₹15,500 per person\n• North Goa sightseeing\n• South Goa sightseeing\n• 2 leisure days\n• Additional day for relaxation and optional activities\n\nIf you want a more budget-friendly trip, Package 1 is suitable. If you prefer more leisure time in Goa, Package 2 is the better option.",
      },
    },
  },
  {
    id: 22,

    topic: "Karnataka Tour",

    keywords: [
      "karnataka",
      "karnataka tour",
      "karnataka package",
      "karnataka tour package",
      "karnataka price",
      "karnataka package price",
      "karnataka duration",
      "karnataka itinerary",
      "karnataka sightseeing",
      "karnataka holiday",
      "karnataka holiday package",
      "karnataka temple tour",
      "karnataka heritage tour",
      "karnataka trip",
      "south india tour",

      "udupi",
      "udupi tour",
      "udupi package",
      "udupi sightseeing",
      "shri krishna math",
      "krishna math",
      "anantheshwara temple",
      "pajaka kshetra",
      "corporation bank heritage museum",
      "koodlutheertha falls",
      "indrani panchadurga parameshwari temple",

      "coorg",
      "coorg tour",
      "coorg package",
      "coorg sightseeing",
      "abbey falls",
      "namdroling monastery",
      "golden temple coorg",
      "iruppu falls",

      "mysuru",
      "mysore",
      "mysuru tour",
      "mysore tour",
      "mysuru package",
      "mysore package",
      "mysuru sightseeing",
      "mysore palace",
      "brindavan gardens",
      "chamundeshwari temple",

      "hampi",
      "hampi tour",
      "hampi package",
      "hampi sightseeing",
      "virupaksha temple",
      "stone chariot",
      "hampi archaeological museum",
      "tungabhadra dam",
      "huligemma devi temple",
      "hazara rama temple",
      "anjanadri betta",
      "tb dam zoo",
      "tb dam park",

      "hospet",
      "hospet tour",
      "hospet package",
      "hospet sightseeing",
      "hospet railway station",

      "badami",
      "badami tour",
      "badami package",
      "badami sightseeing",
      "badami cave temples",
      "badami fort",
      "agastya lake",

      "gokarna",
      "gokarna tour",
      "gokarna package",
      "gokarna sightseeing",
      "om beach",
      "gokarna main beach",
      "belekan beach",
      "gorabha shiva cave",

      "jog falls",
      "jog falls tour",

      "bengaluru",
      "bangalore",
      "bengaluru tour",
      "bangalore tour",
      "bengaluru package",
      "bangalore package",
      "bengaluru sightseeing",

      "karnataka train",
      "karnataka train ticket",
      "train journey",
      "sleeper class train",
      "kolkata karnataka train",
      "santragachi train",
      "shalimar karnataka train",

      "karnataka hotel",
      "karnataka accommodation",
      "karnataka meals",
      "karnataka transport",
      "ac transportation",
      "karnataka sightseeing transport",

      "karnataka package 1",
      "karnataka package 2",
      "11 nights 12 days",
      "14 nights 15 days",
      "12 days karnataka",
      "15 days karnataka",

      "karnataka booking",
      "karnataka reservation",
      "karnataka enquiry",
      "karnataka contact",
    ],

    summary: {
      duration: "11 Nights / 12 Days or 14 Nights / 15 Days",
      price: "₹28,500 per person onwards",
      rating: "9.1",
      category: "Domestic Tour",
      destinations:
        "Udupi • Coorg • Mysuru • Hampi • Hospet • Badami • Gokarna • Bengaluru",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "karnataka price",
          "karnataka package price",
          "tour price",
          "package cost",
          "how much",
          "karnataka cost",
        ],

        response:
          "Karnataka Tour Package pricing starts from ₹28,500 per person.\n\nPackage 1:\nDuration: 11 Nights / 12 Days\nPrice: ₹28,500 per person\n\nPackage 2:\nDuration: 14 Nights / 15 Days\nPrice: ₹35,500 per person\n\nPackage 1 covers Udupi, Coorg, Mysuru, Hampi, Hospet and Bengaluru.\n\nPackage 2 additionally includes Badami, Gokarna and Jog Falls, along with extended sightseeing.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "karnataka itinerary",
          "karnataka tour plan",
          "karnataka schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Karnataka Tour Itinerary\n\nPackage 1: 11 Nights / 12 Days\nPrice: ₹28,500 per person\n\nDay 1: Kolkata → Mangaluru\nBoard Train 22851 from Santragachi Railway Station for Mangaluru. Overnight stay in train.\n\nDay 2: Train Journey\nFull day train journey. Overnight stay in train.\n\nDay 3: Arrival at Udupi\nArrive at Mangaluru Railway Station and transfer to Udupi hotel. Overnight stay at Udupi.\n\nDay 4: Udupi Sightseeing\nVisit Shri Krishna Math, Shri Anantheshwara Temple, Pajaka Kshetra, Corporation Bank Heritage Museum, Koodlutheertha Falls and Shri Indrani Panchadurga Parameshwari Temple. Overnight stay at Udupi.\n\nDay 5: Udupi → Coorg\nProceed to Coorg after breakfast. Overnight stay at Coorg.\n\nDay 6: Coorg Sightseeing\nVisit Abbey Falls, Namdroling Monastery, Iruppu Falls and nearby attractions. Overnight stay at Coorg.\n\nDay 7: Coorg → Mysuru\nProceed to Mysuru via Buddhist Monastery and Brindavan Gardens. Visit Mysore Palace. Overnight stay at Mysuru.\n\nDay 8: Mysuru → Hospet\nDrive to Hospet. Overnight stay at Hospet.\n\nDay 9: Hampi Excursion\nExplore Virupaksha Temple, Hampi, Stone Chariot, Hampi Archaeological Museum, Tungabhadra Dam, Shri Huligemma Devi Temple, TB Dam Zoo & Park and Hazara Rama Temple. Overnight stay at Hospet.\n\nDay 10: Hospet → Bengaluru\nDrive to Bengaluru and check in to hotel. Evening free for leisure. Overnight stay at Bengaluru.\n\nDay 11: Bengaluru Departure\nTransfer to Bengaluru Railway Station and board train for Kolkata. Overnight stay in train.\n\nDay 12: Arrival at Kolkata\nArrive at Howrah Railway Station with sweet memories of Karnataka.\n\nPackage 2: 14 Nights / 15 Days\nPrice: ₹35,500 per person\n\nDay 1: Kolkata → Hospet\nBoard Amravati Express 18047 from Shalimar Railway Station for Hospet. Overnight stay in train.\n\nDay 2: Train Journey\nFull day train journey. Overnight stay in train.\n\nDay 3: Arrival at Hospet\nArrive at Hospet Railway Station and transfer to hotel. Overnight stay at Hospet.\n\nDay 4: Hampi Sightseeing\nVisit Virupaksha Temple, Hampi, Stone Chariot, Hampi Archaeological Museum, Tungabhadra Dam, Shri Huligemma Devi Temple, Anjanadri Betta, TB Dam Zoo & Park and Hazara Rama Temple. Overnight stay at Hospet.\n\nDay 5: Hospet → Badami\nDrive to Badami and visit Badami Cave Temples, Badami Fort and Agastya Lake. Overnight stay at Badami.\n\nDay 6: Badami → Gokarna\nProceed to Gokarna via Hubballi. Overnight stay at Gokarna.\n\nDay 7: Gokarna Sightseeing\nVisit Om Beach, Gokarna Main Beach, Belekan Beach and Gorabha Shiva Cave. Overnight stay at Gokarna.\n\nDay 8: Gokarna → Udupi via Jog Falls\nDrive to Udupi via Jog Falls. Overnight stay at Udupi.\n\nDay 9: Udupi Sightseeing\nVisit Shri Krishna Math, Shri Anantheshwara Temple, Pajaka Kshetra, Corporation Bank Heritage Museum, Koodlutheertha Falls and Shri Indrani Panchadurga Parameshwari Temple. Overnight stay at Udupi.\n\nDay 10: Udupi → Coorg\nProceed to Coorg. Overnight stay at Coorg.\n\nDay 11: Coorg Sightseeing\nVisit Abbey Falls, Namdroling Monastery, Iruppu Falls and nearby attractions. Overnight stay at Coorg.\n\nDay 12: Coorg → Mysuru\nDrive to Mysuru via Buddhist Monastery and Brindavan Gardens. Overnight stay at Mysuru.\n\nDay 13: Mysuru Sightseeing & Departure\nVisit Mysuru Palace and Chamundeshwari Temple. After lunch transfer to Mysuru Railway Station and board Train 22818 for Kolkata. Overnight stay in train.\n\nDay 14: Train Journey\nFull day train journey. Overnight stay in train.\n\nDay 15: Arrival at Kolkata\nArrive at Howrah Railway Station with sweet memories of Karnataka.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "karnataka sightseeing",
          "karnataka attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered in Karnataka Tour:\n\nUdupi:\n• Shri Krishna Math\n• Shri Anantheshwara Temple\n• Pajaka Kshetra\n• Corporation Bank Heritage Museum\n• Koodlutheertha Falls\n• Shri Indrani Panchadurga Parameshwari Temple\n\nCoorg:\n• Abbey Falls\n• Namdroling Monastery (Golden Temple)\n• Iruppu Falls\n\nMysuru:\n• Mysuru Palace\n• Brindavan Gardens\n• Chamundeshwari Temple\n\nHampi / Hospet:\n• Virupaksha Temple\n• Stone Chariot\n• Hampi Archaeological Museum\n• Tungabhadra Dam\n• Shri Huligemma Devi Temple\n• TB Dam Zoo & Park\n• Hazara Rama Temple\n• Anjanadri Betta\n\nBadami:\n• Badami Cave Temples\n• Badami Fort\n• Agastya Lake\n\nGokarna:\n• Om Beach\n• Gokarna Main Beach\n• Belekan Beach\n• Gorabha Shiva Cave\n\nOther Highlights:\n• Jog Falls\n• Bengaluru\n• Buddhist Monastery",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "karnataka inclusions",
          "karnataka included",
        ],

        response:
          "Karnataka Tour Package Inclusions:\n\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Train meals including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "karnataka exclusions",
          "karnataka excluded",
        ],

        response:
          "Karnataka Tour Package Exclusions:\n\n• Flight ticket\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permits\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "karnataka booking",
          "karnataka contact",
          "karnataka reservation",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Karnataka Tour\nPackage 1: 11 Nights / 12 Days — ₹28,500 per person\nPackage 2: 14 Nights / 15 Days — ₹35,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "karnataka destinations",
          "karnataka route",
          "tour route",
        ],

        response:
          "Karnataka Tour Destinations Covered:\n\n• Udupi\n• Coorg\n• Mysuru\n• Hampi\n• Hospet\n• Badami\n• Gokarna\n• Bengaluru\n\nPackage 2 additionally includes Badami, Gokarna and Jog Falls.",
      },

      udupi: {
        keywords: [
          "udupi",
          "udupi tour",
          "udupi sightseeing",
          "udupi package",
          "shri krishna math",
          "krishna math",
          "anantheshwara temple",
          "pajaka kshetra",
          "koodlutheertha falls",
          "indrani panchadurga parameshwari temple",
        ],

        response:
          "Udupi is one of the major spiritual and cultural destinations of the Karnataka Tour.\n\nMajor Attractions:\n• Shri Krishna Math\n• Shri Anantheshwara Temple\n• Pajaka Kshetra\n• Corporation Bank Heritage Museum\n• Koodlutheertha Falls\n• Shri Indrani Panchadurga Parameshwari Temple\n\nUdupi is included in both Karnataka Tour packages.",
      },

      coorg: {
        keywords: [
          "coorg",
          "coorg tour",
          "coorg sightseeing",
          "coorg package",
          "abbey falls",
          "namdroling monastery",
          "golden temple",
          "iruppu falls",
        ],

        response:
          "Coorg is known for its scenic hills, waterfalls and monasteries.\n\nMajor Attractions:\n• Abbey Falls\n• Namdroling Monastery (Golden Temple)\n• Iruppu Falls\n• Nearby scenic attractions\n\nCoorg is included in both Karnataka Tour packages.",
      },

      mysuru: {
        keywords: [
          "mysuru",
          "mysore",
          "mysuru tour",
          "mysore tour",
          "mysuru sightseeing",
          "mysore sightseeing",
          "mysore palace",
          "brindavan gardens",
          "chamundeshwari temple",
        ],

        response:
          "Mysuru is an important heritage destination in the Karnataka Tour.\n\nMajor Attractions:\n• Mysuru Palace\n• Brindavan Gardens\n• Chamundeshwari Temple\n• Buddhist Monastery\n\nMysuru is covered in both packages.",
      },

      hampi: {
        keywords: [
          "hampi",
          "hampi tour",
          "hampi sightseeing",
          "hampi package",
          "virupaksha temple",
          "stone chariot",
          "hampi archaeological museum",
          "tungabhadra dam",
          "huligemma devi temple",
          "hazara rama temple",
          "anjanadri betta",
          "tb dam zoo",
          "tb dam park",
        ],

        response:
          "Hampi is one of the major heritage highlights of the Karnataka Tour.\n\nMajor Attractions:\n• Virupaksha Temple\n• Stone Chariot\n• Hampi Archaeological Museum\n• Tungabhadra Dam\n• Shri Huligemma Devi Temple\n• Hazara Rama Temple\n• TB Dam Zoo & Park\n• Anjanadri Betta\n\nHampi sightseeing is included in both packages.",
      },

      hospet: {
        keywords: [
          "hospet",
          "hospet tour",
          "hospet sightseeing",
          "hospet package",
          "hospet railway station",
        ],

        response:
          "Hospet is used as an important base for exploring the Hampi region.\n\nPackage 1:\nHospet is visited after Mysuru and includes an Hampi excursion.\n\nPackage 2:\nThe tour starts with arrival at Hospet and includes extensive Hampi sightseeing.\n\nMajor nearby attractions include Virupaksha Temple, Stone Chariot and Tungabhadra Dam.",
      },

      badami: {
        keywords: [
          "badami",
          "badami tour",
          "badami sightseeing",
          "badami package",
          "badami cave temples",
          "badami fort",
          "agastya lake",
        ],

        response:
          "Badami is included in Package 2 of the Karnataka Tour.\n\nMajor Attractions:\n• Badami Cave Temples\n• Badami Fort\n• Agastya Lake\n\nBadami is visited on Day 5 of Package 2.",
      },

      gokarna: {
        keywords: [
          "gokarna",
          "gokarna tour",
          "gokarna sightseeing",
          "gokarna package",
          "om beach",
          "gokarna main beach",
          "belekan beach",
          "gorabha shiva cave",
        ],

        response:
          "Gokarna is included in Package 2 of the Karnataka Tour.\n\nMajor Attractions:\n• Om Beach\n• Gokarna Main Beach\n• Belekan Beach\n• Gorabha Shiva Cave\n\nGokarna sightseeing is scheduled on Day 7 of Package 2.",
      },

      jogfalls: {
        keywords: [
          "jog falls",
          "jog falls tour",
          "jog falls sightseeing",
          "jog waterfall",
        ],

        response:
          "Jog Falls is included in Package 2 of the Karnataka Tour.\n\nThe tour travels from Gokarna to Udupi via Jog Falls on Day 8.\n\nJog Falls provides an additional scenic highlight during the Karnataka journey.",
      },

      bengaluru: {
        keywords: [
          "bengaluru",
          "bangalore",
          "bengaluru tour",
          "bangalore tour",
          "bengaluru package",
          "bangalore package",
          "bengaluru sightseeing",
          "bangalore sightseeing",
        ],

        response:
          "Bengaluru is included in Package 1 of the Karnataka Tour.\n\nThe tour reaches Bengaluru from Hospet on Day 10.\n\nGuests check in to the hotel and have free time for leisure before departing for Kolkata by train on Day 11.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "karnataka train",
          "karnataka train ticket",
          "railway",
          "sleeper class train",
          "train journey",
          "kolkata karnataka train",
          "santragachi train",
          "shalimar karnataka train",
        ],

        response:
          "Train travel is included in the Karnataka Tour.\n\nPackage 1:\nKolkata / Santragachi → Mangaluru by Train 22851.\n\nPackage 2:\nShalimar → Hospet by Amravati Express 18047.\n\nReturn Journey:\nBengaluru / Mysuru → Kolkata by train as specified in the itinerary.\n\nThe package includes Sleeper Class train tickets and train meals including lunch and dinner.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "karnataka hotel",
          "karnataka accommodation",
        ],

        response:
          "The Karnataka Tour package includes deluxe hotel accommodation.\n\nOvernight stays are planned at destinations such as:\n• Udupi\n• Coorg\n• Mysuru\n• Hospet\n• Badami\n• Gokarna\n• Bengaluru\n\nExact overnight destinations depend on the selected package.\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "karnataka meals",
          "karnataka food",
        ],

        response:
          "Meals included in the Karnataka Tour are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "karnataka transport",
          "ac transportation",
        ],

        response:
          "AC transportation is included throughout the Karnataka Tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Transfers between destinations\n• Railway station transfers\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe hotel accommodation\n• Sleeper Class train tickets\n• Train meals\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "karnataka package 1",
          "11 nights",
          "11 nights 12 days",
          "12 days karnataka",
          "28500",
          "28,500",
        ],

        response:
          "Karnataka Tour Package 1:\n\nDuration: 11 Nights / 12 Days\nPrice: ₹28,500 per person\nRating: 9.1\n\nDestinations:\nUdupi, Coorg, Mysuru, Hospet, Hampi and Bengaluru.\n\nHighlights:\n• Udupi temple sightseeing\n• Coorg waterfalls and monastery\n• Mysuru Palace\n• Hampi heritage sightseeing\n• Tungabhadra Dam\n• Bengaluru leisure time\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Meals\n• AC transportation\n\nPackage 1 is suitable for travellers looking for a balanced Karnataka cultural, heritage and nature tour.",
      },

      package2: {
        keywords: [
          "package 2",
          "second package",
          "option 2",
          "karnataka package 2",
          "14 nights",
          "14 nights 15 days",
          "15 days karnataka",
          "35500",
          "35,500",
        ],

        response:
          "Karnataka Tour Package 2:\n\nDuration: 14 Nights / 15 Days\nPrice: ₹35,500 per person\nRating: 9.1\n\nDestinations:\nHospet, Hampi, Badami, Gokarna, Udupi, Coorg and Mysuru.\n\nHighlights:\n• Extensive Hampi sightseeing\n• Badami Cave Temples\n• Gokarna beaches\n• Jog Falls\n• Udupi temples\n• Coorg waterfalls and monastery\n• Mysuru Palace\n• Chamundeshwari Temple\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Meals\n• AC transportation\n\nPackage 2 is suitable for travellers who want a more extensive Karnataka circuit covering heritage sites, beaches, waterfalls and temples.",
      },

      comparison: {
        keywords: [
          "compare",
          "comparison",
          "difference",
          "package difference",
          "which package",
          "best package",
          "package 1 or 2",
          "karnataka package comparison",
        ],

        response:
          "Karnataka Tour Package Comparison:\n\nPackage 1:\n• Duration: 11 Nights / 12 Days\n• Price: ₹28,500 per person\n• Udupi\n• Coorg\n• Mysuru\n• Hospet\n• Hampi\n• Bengaluru\n• 1 main Hampi excursion\n\nPackage 2:\n• Duration: 14 Nights / 15 Days\n• Price: ₹35,500 per person\n• Hospet\n• Hampi\n• Badami\n• Gokarna\n• Jog Falls\n• Udupi\n• Coorg\n• Mysuru\n• More extensive sightseeing\n\nIf you want a shorter and more balanced Karnataka trip, Package 1 is suitable. If you want to explore more heritage sites, beaches and waterfalls, Package 2 is the better option.",
      },
    },
  },
  {
    id: 23,

    topic: "Goa with Lakshadweep",

    keywords: [
      "goa lakshadweep",
      "goa with lakshadweep",
      "goa lakshadweep tour",
      "goa lakshadweep package",
      "goa lakshadweep tour package",
      "goa lakshadweep price",
      "goa lakshadweep package price",
      "goa lakshadweep duration",
      "goa lakshadweep itinerary",
      "goa lakshadweep sightseeing",
      "goa lakshadweep holiday",
      "goa lakshadweep holiday package",
      "goa lakshadweep trip",
      "goa lakshadweep travel package",

      "goa",
      "goa tour",
      "goa package",
      "goa sightseeing",
      "north goa",
      "south goa",
      "dolphin point",
      "aguada fort",
      "baga beach",
      "calangute beach",
      "miramar beach",
      "st xavier's church",
      "mangesh temple",
      "santadurga temple",
      "colva beach",

      "lakshadweep",
      "lakshadweep tour",
      "lakshadweep package",
      "lakshadweep sightseeing",
      "lakshadweep price",
      "lakshadweep holiday",
      "lakshadweep island tour",
      "agatti",
      "agatti island",
      "agatti tour",
      "agatti package",
      "agatti lagoon",
      "bangaram",
      "bangaram island",
      "bangaram sandbank",
      "thinnakara",
      "thinnakara island",
      "kalpitty",
      "kalpitty island",
      "koch i",
      "kochi",
      "coral reef",
      "coral reefs",
      "turtle watching",
      "green turtle",
      "hawksbill turtle",
      "dolphin watching",
      "snorkeling",
      "scuba diving",
      "kayaking",
      "glass bottom boat",
      "glass-bottom boat",
      "lagoon",
      "beach resort",
      "island excursion",

      "goa kochi",
      "goa agatti",
      "kolkata goa",
      "goa lakshadweep flight",
      "goa island tour",
      "lakshadweep island package",
      "beach holiday",
      "island holiday",
      "tropical holiday",
      "beach tour",
      "island tour",
      "flight package",
    ],

    summary: {
      duration: "4 Nights / 5 Days or 6 Nights / 7 Days",
      price: "₹60,000 per person onwards",
      rating: "9.4",
      category: "Domestic Tour",
      destinations: "Goa • Kochi • Agatti • Bangaram • Thinnakara • Kalpitty",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "goa lakshadweep price",
          "goa lakshadweep package price",
          "lakshadweep price",
          "lakshadweep package price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Goa with Lakshadweep Tour Package pricing starts from ₹60,000 per person.\n\nPackage 1:\nDuration: 4 Nights / 5 Days\nPrice: ₹60,000 per person\n\nPackage 2:\nDuration: 6 Nights / 7 Days\nPrice: ₹70,000 per person\n\nPackage 1 focuses mainly on Agatti, Bangaram, Thinnakara and Kalpitty Island experiences.\n\nPackage 2 additionally includes Goa sightseeing covering North Goa and South Goa.\n\nFor the latest pricing, flight availability and island permissions, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "goa lakshadweep itinerary",
          "lakshadweep itinerary",
          "goa lakshadweep tour plan",
          "goa lakshadweep schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Goa with Lakshadweep Tour Itinerary\n\nPackage 1: 4 Nights / 5 Days\nPrice: ₹60,000 per person\n\nDay 1: Arrival at Goa / Kochi\nArrive at Goa or Kochi Airport and transfer to hotel. Overnight stay at Goa / Kochi.\n\nDay 2: Goa / Kochi → Agatti Island\nFly to Agatti Island. Receive a traditional welcome and transfer to the beach resort. Enjoy lunch and explore Agatti lagoon beaches, Andan Beach, Western Jetty and Eastern Jetty. Overnight stay at Agatti.\n\nDay 3: Bangaram & Thinnakara Excursion\nEnjoy a boat trip to Bangaram Island and Thinnakara Island. Activities include dolphin watching, sea turtle spotting, beach exploration and snorkeling at Bangaram Lagoon and the shipwreck site. Return to Agatti by evening.\n\nDay 4: Kalpitty Island & Lagoon Activities\nEnjoy lagoon kayaking. Optional scuba diving is available at extra cost. Later enjoy a glass-bottom boat ride to Kalpitty Island, coral viewing, turtle spotting and sunset viewing. Overnight stay at Agatti.\n\nDay 5: Departure from Agatti\nBreakfast at the resort, transfer to Agatti Airport and board the return flight.\n\nPackage 2: 6 Nights / 7 Days\n\nDay 1: Kolkata → Goa\nFly from Kolkata to Goa, transfer to hotel and enjoy an evening cruise program. Overnight stay at Goa.\n\nDay 2: North Goa Sightseeing\nVisit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach and Miramar Beach. Overnight stay at Goa.\n\nDay 3: South Goa Sightseeing\nVisit St. Xavier's Church, Mangesh Temple, Santadurga Temple and Colva Beach. Overnight stay at Goa.\n\nDay 4: Goa → Agatti Island\nTransfer to Goa Airport and fly to Agatti. Transfer to beach resort, enjoy lunch and explore Agatti lagoon beaches. Overnight stay at Agatti.\n\nDay 5: Bangaram & Thinnakara Excursion\nEnjoy a boat trip to Bangaram Sandbank and Thinnakara Island with dolphin watching, snorkeling, beach exploration and lunch on board.\n\nDay 6: Kalpitty Island & Lagoon Activities\nEnjoy kayaking, optional scuba diving, glass-bottom boat ride, coral viewing, turtle spotting and sunset at Kalpitty Island. Overnight stay at Agatti.\n\nDay 7: Agatti → Kolkata\nBreakfast at resort, transfer to Agatti Airport and take the return flight via Goa before arriving in Kolkata.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "goa lakshadweep sightseeing",
          "lakshadweep attractions",
          "goa attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nGoa:\n• Dolphin Point\n• Aguada Fort\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n• St. Xavier's Church\n• Mangesh Temple\n• Santadurga Temple\n• Colva Beach\n\nAgatti Island:\n• Agatti Lagoon Beaches\n• Andan Beach\n• Western Jetty\n• Eastern Jetty\n• Local Island Life\n\nBangaram:\n• Bangaram Sandbank\n• Bangaram Lagoon\n• Shipwreck Snorkeling Site\n• Dolphin Watching\n\nThinnakara:\n• Thinnakara Island\n• Beach Exploration\n• Snorkeling\n\nKalpitty:\n• Coral Viewing\n• Glass-bottom Boat Ride\n• Green Turtle Watching\n• Hawksbill Turtle Watching\n• Sunset Viewing\n\nActivities:\n• Snorkeling\n• Kayaking\n• Dolphin Watching\n• Turtle Watching\n• Optional Scuba Diving\n• Glass-bottom Boat Ride",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "goa lakshadweep inclusions",
          "lakshadweep included",
        ],

        response:
          "Package Inclusions:\n\n• Flight ticket as per selected package\n• AC beach resort accommodation\n• Welcome drink\n• Breakfast\n• Lunch\n• Evening tea\n• Dinner\n• Agatti Island sightseeing\n• Bangaram Sandbank excursion, subject to permission and weather\n• Thinnakara Island visit, subject to permission and weather\n• Glass-bottom boat ride\n• Kalpitty Island excursion\n• Turtle watching\n• Kayaking\n• Snorkeling\n• Airport pick-up and drop\n• Guide assistance throughout the trip",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "goa lakshadweep exclusions",
          "lakshadweep excluded",
        ],

        response:
          "Package Exclusions:\n\n• Scuba diving — ₹3,500 per person\n• Personal expenses\n• Additional beverages\n• Extra activities not mentioned in inclusions\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "goa lakshadweep booking",
          "lakshadweep booking",
          "goa lakshadweep contact",
        ],

        response:
          "For booking, availability, flight details, resort options and the latest package information, please contact Riya Tours & Travels.\n\nPackage: Goa with Lakshadweep\nPackage 1: 4 Nights / 5 Days — ₹60,000 per person\nPackage 2: 6 Nights / 7 Days — ₹70,000 per person\n\nPlease confirm the latest flight availability, island permissions and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "goa lakshadweep destinations",
          "lakshadweep destinations",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Goa\n• Kochi\n• Agatti Island\n• Bangaram Island\n• Thinnakara Island\n• Kalpitty Island\n\nPackage 2 additionally includes North Goa and South Goa sightseeing.",
      },

      goa: {
        keywords: [
          "goa",
          "goa tour",
          "goa sightseeing",
          "north goa",
          "south goa",
          "aguada fort",
          "baga beach",
          "calangute beach",
          "miramar beach",
          "colva beach",
        ],

        response:
          "Goa is included in the Goa with Lakshadweep Package 2.\n\nNorth Goa Attractions:\n• Dolphin Point\n• Aguada Fort\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n\nSouth Goa Attractions:\n• St. Xavier's Church\n• Mangesh Temple\n• Santadurga Temple\n• Colva Beach\n\nGoa sightseeing is covered on Days 2 and 3 of Package 2.",
      },

      agatti: {
        keywords: [
          "agatti",
          "agatti island",
          "agatti tour",
          "agatti package",
          "agatti sightseeing",
          "agatti lagoon",
          "agatti beach",
        ],

        response:
          "Agatti Island is the main island destination of the Lakshadweep portion of the tour.\n\nHighlights include:\n• Agatti Lagoon Beaches\n• Andan Beach\n• Western Jetty\n• Eastern Jetty\n• Lagoon activities\n• Kayaking\n• Snorkeling\n• Glass-bottom boat ride\n• Turtle watching\n\nAccommodation is provided at a beach resort in Agatti.",
      },

      bangaram: {
        keywords: [
          "bangaram",
          "bangaram island",
          "bangaram sandbank",
          "bangaram tour",
          "bangaram sightseeing",
          "bangaram lagoon",
          "bangaram snorkeling",
        ],

        response:
          "Bangaram Island is covered as part of the island excursion.\n\nActivities include:\n• Bangaram Sandbank visit\n• Bangaram Lagoon exploration\n• Dolphin watching\n• Beach exploration\n• Snorkeling\n• Shipwreck snorkeling site\n\nThe Bangaram excursion is subject to permission and weather conditions.",
      },

      thinnakara: {
        keywords: [
          "thinnakara",
          "thinnakara island",
          "thinnakara tour",
          "thinnakara sightseeing",
          "thinnakara beach",
        ],

        response:
          "Thinnakara Island is included in the Lakshadweep island excursion.\n\nActivities include:\n• Beach exploration\n• Dolphin watching\n• Sea turtle spotting\n• Snorkeling\n• Lagoon activities\n\nThe Thinnakara visit is subject to permission and weather conditions.",
      },

      kalpitty: {
        keywords: [
          "kalpitty",
          "kalpitty island",
          "kalpitty tour",
          "kalpitty sightseeing",
          "kalpitty boat ride",
        ],

        response:
          "Kalpitty Island is covered during the lagoon excursion.\n\nHighlights include:\n• Glass-bottom boat ride\n• Coral viewing\n• Marine life viewing\n• Green turtle spotting\n• Hawksbill turtle spotting\n• Sunset viewing\n\nKayaking is also available as part of the lagoon activities.",
      },

      activities: {
        keywords: [
          "activities",
          "water activities",
          "water sports",
          "things to do",
          "snorkeling",
          "kayaking",
          "scuba diving",
          "dolphin watching",
          "turtle watching",
          "boat ride",
        ],

        response:
          "Activities Available:\n\n• Snorkeling\n• Kayaking\n• Dolphin watching\n• Sea turtle spotting\n• Green turtle watching\n• Hawksbill turtle watching\n• Glass-bottom boat ride\n• Coral viewing\n• Lagoon exploration\n• Beach activities\n• Optional scuba diving\n\nScuba diving is available at an additional cost of ₹3,500 per person.",
      },

      scuba: {
        keywords: [
          "scuba",
          "scuba diving",
          "diving",
          "scuba cost",
          "diving price",
          "scuba price",
        ],

        response:
          "Scuba diving is available as an optional activity during the Lakshadweep portion of the tour.\n\nCost: ₹3,500 per person\n\nScuba diving is not included in the package price and must be paid separately.",
      },

      flights: {
        keywords: [
          "flight",
          "flights",
          "flight ticket",
          "air ticket",
          "airport",
          "goa lakshadweep flight",
          "lakshadweep flight",
        ],

        response:
          "Flight tickets are included as per the selected package.\n\nPackage 1:\nThe itinerary includes flight travel to Agatti Island from Goa or Kochi and return from Agatti.\n\nPackage 2:\nKolkata → Goa by flight, followed by Goa → Agatti and the return journey via Goa to Kolkata.\n\nExact flight schedules and availability should be confirmed before booking.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "resort",
          "beach resort",
          "goa lakshadweep hotel",
          "lakshadweep accommodation",
        ],

        response:
          "The package includes comfortable AC beach resort accommodation.\n\nPackage 1 includes accommodation at Goa / Kochi and Agatti as per the itinerary.\n\nPackage 2 includes accommodation at Goa and Agatti.\n\nFor exact resort names, room categories and availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "goa lakshadweep meals",
          "lakshadweep food",
        ],

        response:
          "Meals included in the package are:\n\n• Breakfast\n• Lunch\n• Evening tea\n• Dinner\n• Welcome drink\n\nAdditional beverages and personal food expenses are not included.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "airport transfer",
          "goa lakshadweep transport",
          "lakshadweep transport",
        ],

        response:
          "Transportation and transfers are included as per the itinerary.\n\nThe package includes:\n• Airport pick-up and drop\n• Airport transfers\n• Island transfers\n• Boat excursions\n• Agatti local transfers\n• Goa sightseeing transportation as applicable to Package 2",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• AC beach resort accommodation\n• Flight tickets as per selected package\n• Welcome drink\n• Breakfast\n• Lunch\n• Evening tea\n• Dinner\n• Airport pick-up and drop\n• Island excursions\n• Glass-bottom boat ride\n• Turtle watching\n• Kayaking\n• Snorkeling\n• Guide assistance",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "goa lakshadweep package 1",
          "5 days",
          "4 nights",
          "60,000",
          "60000",
        ],

        response:
          "Goa with Lakshadweep Package 1:\n\nDuration: 4 Nights / 5 Days\nPrice: ₹60,000 per person\nRating: 9.4\n\nDestinations:\nGoa / Kochi, Agatti, Bangaram, Thinnakara and Kalpitty.\n\nHighlights:\n• Agatti Island\n• Bangaram Island excursion\n• Thinnakara Island excursion\n• Kalpitty Island\n• Snorkeling\n• Kayaking\n• Turtle watching\n• Glass-bottom boat ride\n• Optional scuba diving",
      },

      package2: {
        keywords: [
          "package 2",
          "second package",
          "option 2",
          "goa lakshadweep package 2",
          "7 days",
          "6 nights",
          "70,000",
          "70000",
        ],

        response:
          "Goa with Lakshadweep Package 2:\n\nDuration: 6 Nights / 7 Days\nPrice: ₹70,000 per person\nRating: 9.4\n\nDestinations:\nGoa, Agatti, Bangaram, Thinnakara and Kalpitty.\n\nPackage 2 additionally includes:\n• North Goa sightseeing\n• South Goa sightseeing\n• Goa evening cruise program\n• Agatti Island\n• Bangaram Sandbank\n• Thinnakara Island\n• Kalpitty Island\n• Snorkeling\n• Kayaking\n• Turtle watching\n• Glass-bottom boat ride\n• Optional scuba diving",
      },

      permissions: {
        keywords: [
          "permission",
          "permissions",
          "island permission",
          "weather",
          "bangaram permission",
          "thinnakara permission",
          "lakshadweep permission",
        ],

        response:
          "Some Lakshadweep island excursions are subject to permission and weather conditions.\n\nBangaram Sandbank and Thinnakara Island visits may depend on local permissions and weather conditions.\n\nIf access is restricted, an alternative deep-sea snorkeling activity may operate depending on availability.\n\nPlease confirm the latest island access conditions before booking.",
      },
    },
  },
  {
    id: 24,

    topic: "Kerala with Kanyakumari Tour",

    keywords: [
      "kerala",
      "kerala tour",
      "kerala package",
      "kerala tour package",
      "kerala price",
      "kerala package price",
      "kerala duration",
      "kerala itinerary",
      "kerala sightseeing",
      "kerala holiday",
      "kerala holiday package",

      "kerala kanyakumari",
      "kerala with kanyakumari",
      "kerala kanyakumari tour",
      "kerala kanyakumari package",
      "kerala kanyakumari tour package",
      "kerala kanyakumari price",
      "kerala kanyakumari itinerary",
      "kerala kanyakumari sightseeing",

      "kanyakumari",
      "kanyakumari tour",
      "kanyakumari package",
      "kanyakumari sightseeing",
      "kanyakumari temple",
      "vivekananda rock memorial",
      "kanyakumari sunset",
      "kanyakumari sunrise",

      "kovalam",
      "kovalam tour",
      "kovalam sightseeing",
      "kovalam beach",
      "padmanabhaswamy temple",

      "alleppey",
      "alleppey tour",
      "alleppey package",
      "alleppey sightseeing",
      "alleppey backwater",
      "alleppey boat ride",
      "kerala backwater",

      "thekkady",
      "thekkady tour",
      "thekkady package",
      "thekkady sightseeing",
      "periyar lake",
      "periyar national park",
      "kadathanadan kalari",

      "munnar",
      "munnar tour",
      "munnar package",
      "munnar sightseeing",
      "munnar tea garden",
      "munnar tea plantation",
      "rajmalai",
      "eravikulam",
      "mattupetty dam",
      "spice garden",
      "coffee plantation",

      "kochi",
      "kochi tour",
      "kochi package",
      "kochi sightseeing",
      "ernakulam",
      "chinese fishing nets",
      "portuguese church",

      "kanyakumari kovalam",
      "kovalam alleppey",
      "alleppey thekkady",
      "thekkady munnar",
      "munnar kochi",
      "kerala train",
      "kerala train ticket",
      "sleeper class train",
      "train journey",
      "howrah kanyakumari train",

      "kerala hotel",
      "kerala accommodation",
      "kerala meals",
      "kerala transport",
      "kerala facilities",
      "kerala temple tour",
      "kerala hill tour",
      "kerala backwater tour",
      "kerala beach tour",
    ],

    summary: {
      duration: "11 Nights / 14 Days",
      price: "₹28,500 per person",
      rating: "9.1",
      category: "Domestic Tour",
      destinations:
        "Kanyakumari • Kovalam • Alleppey • Thekkady • Munnar • Kochi (Ernakulam)",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "kerala price",
          "kerala package price",
          "kerala kanyakumari price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Kerala with Kanyakumari Tour Package pricing starts from ₹28,500 per person.\n\nPackage 1:\nDuration: 11 Nights / 14 Days\nPrice: ₹28,500 per person\nRating: 9.1\n\nThe package covers Kanyakumari, Kovalam, Alleppey, Thekkady, Munnar and Kochi.\n\nFor the latest pricing, availability and travel dates, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "kerala itinerary",
          "kerala tour plan",
          "kerala schedule",
          "kerala kanyakumari itinerary",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Kerala with Kanyakumari Tour Itinerary\n\nDuration: 11 Nights / 14 Days\nPrice: ₹28,500 per person\n\nDay 1: Kolkata → Kanyakumari\nBoard Train 12665 from Howrah Railway Station at 4:15 PM for Kanyakumari. Overnight stay in train.\n\nDay 2: Train Journey\nFull day train journey towards Kanyakumari. Overnight stay in train.\n\nDay 3: Arrival at Kanyakumari\nArrive at Kanyakumari Railway Station and transfer to hotel. Overnight stay at Kanyakumari.\n\nDay 4: Kanyakumari Sightseeing\nVisit Kanyakumari Temple and Vivekananda Rock Memorial. Enjoy the famous sunset at the seashore. Overnight stay at Kanyakumari.\n\nDay 5: Kanyakumari → Kovalam\nProceed to Kovalam. Visit Padmanabhaswamy Temple and Kovalam Beach. Overnight stay at Kovalam.\n\nDay 6: Kovalam → Alleppey\nDrive to Alleppey. Optional backwater boat cruise is available at own cost. Overnight stay at Alleppey.\n\nDay 7: Alleppey → Thekkady\nTravel to Thekkady, famous for spice plantations and wildlife. Overnight stay at Thekkady.\n\nDay 8: Thekkady Sightseeing\nVisit Periyar Lake and Periyar National Park. Kadathanadan Kalari Centre is optional at own cost. Overnight stay at Thekkady.\n\nDay 9: Thekkady → Munnar\nProceed to Munnar through beautiful hill roads and tea plantations. Overnight stay at Munnar.\n\nDay 10: Munnar Sightseeing\nVisit Rajamalai / Eravikulam area, Mattupetty Dam, Spice Garden, coffee plantation and surrounding viewpoints. Overnight stay at Munnar.\n\nDay 11: Munnar → Kochi\nTravel to Kochi / Ernakulam and check in to hotel. Overnight stay at Kochi.\n\nDay 12: Kochi Sightseeing & Departure\nVisit Chinese Fishing Nets and Portuguese Church. Boat ride is optional at own cost. In the evening transfer to Ernakulam Railway Station and board train for Kolkata. Overnight stay in train.\n\nDay 13: Train Journey\nFull day train journey back to Kolkata. Overnight stay in train.\n\nDay 14: Arrival at Kolkata\nArrive at Howrah Railway Station with sweet memories of Kerala and Kanyakumari.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "kerala sightseeing",
          "kerala attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nKanyakumari:\n• Kanyakumari Temple\n• Vivekananda Rock Memorial\n• Sunset at the seashore\n\nKovalam:\n• Padmanabhaswamy Temple\n• Kovalam Beach\n\nAlleppey:\n• Kerala Backwaters\n• Optional Backwater Boat Cruise\n\nThekkady:\n• Periyar Lake\n• Periyar National Park\n• Kadathanadan Kalari Centre (optional)\n\nMunnar:\n• Rajamalai / Eravikulam area\n• Mattupetty Dam\n• Spice Garden\n• Coffee Plantation\n• Scenic viewpoints\n• Tea plantations\n\nKochi / Ernakulam:\n• Chinese Fishing Nets\n• Portuguese Church\n• Optional Boat Ride",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "kerala inclusions",
          "kerala included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe accommodation\n• Up & down Sleeper Class train fare\n• Train meals including Lunch & Dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "kerala exclusions",
          "kerala excluded",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permits\n• Backwater boat ride\n• Periyar boating charges\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "kerala booking",
          "kerala contact",
          "kerala kanyakumari booking",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Kerala with Kanyakumari Tour\nDuration: 11 Nights / 14 Days\nPrice: ₹28,500 per person\n\nDestinations: Kanyakumari, Kovalam, Alleppey, Thekkady, Munnar and Kochi.\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "kerala destinations",
          "kerala route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Kanyakumari\n• Kovalam\n• Alleppey\n• Thekkady\n• Munnar\n• Kochi / Ernakulam\n\nThe tour combines beaches, temples, backwaters, wildlife, tea plantations, hill stations and the cultural attractions of Kerala and Kanyakumari.",
      },

      kanyakumari: {
        keywords: [
          "kanyakumari",
          "kanyakumari tour",
          "kanyakumari sightseeing",
          "kanyakumari temple",
          "vivekananda rock memorial",
          "kanyakumari sunset",
          "kanyakumari sunrise",
        ],

        response:
          "Kanyakumari is the first major destination of the Kerala with Kanyakumari Tour.\n\nMajor Attractions:\n• Kanyakumari Temple\n• Vivekananda Rock Memorial\n• Sunset at the seashore\n\nKanyakumari sightseeing is scheduled on Day 4.",
      },

      kovalam: {
        keywords: [
          "kovalam",
          "kovalam tour",
          "kovalam sightseeing",
          "kovalam beach",
          "padmanabhaswamy temple",
        ],

        response:
          "Kovalam is covered after Kanyakumari.\n\nMajor Attractions:\n• Padmanabhaswamy Temple\n• Kovalam Beach\n\nThe tour proceeds from Kanyakumari to Kovalam on Day 5. Overnight stay is at Kovalam.",
      },

      alleppey: {
        keywords: [
          "alleppey",
          "alleppey tour",
          "alleppey package",
          "alleppey sightseeing",
          "alleppey backwater",
          "alleppey boat ride",
          "kerala backwater",
        ],

        response:
          "Alleppey is famous for its beautiful Kerala backwaters.\n\nActivities:\n• Backwater sightseeing\n• Optional backwater boat cruise\n\nThe boat cruise is available at own cost and is not included in the package. The tour reaches Alleppey on Day 6.",
      },

      thekkady: {
        keywords: [
          "thekkady",
          "thekkady tour",
          "thekkady package",
          "thekkady sightseeing",
          "periyar lake",
          "periyar national park",
          "kadathanadan kalari",
        ],

        response:
          "Thekkady is known for wildlife, forests, spice plantations and Periyar Lake.\n\nMajor Attractions:\n• Periyar Lake\n• Periyar National Park\n• Kadathanadan Kalari Centre\n\nKadathanadan Kalari Centre is optional and available at own cost.",
      },

      munnar: {
        keywords: [
          "munnar",
          "munnar tour",
          "munnar package",
          "munnar sightseeing",
          "munnar tea garden",
          "munnar tea plantation",
          "rajmalai",
          "eravikulam",
          "mattupetty dam",
          "spice garden",
          "coffee plantation",
        ],

        response:
          "Munnar is one of the main hill-station destinations of the Kerala Tour.\n\nMajor Attractions:\n• Rajamalai / Eravikulam area\n• Mattupetty Dam\n• Spice Garden\n• Coffee Plantation\n• Tea plantations\n• Scenic viewpoints\n\nMunnar sightseeing is scheduled on Day 10.",
      },

      kochi: {
        keywords: [
          "kochi",
          "kochi tour",
          "kochi package",
          "kochi sightseeing",
          "ernakulam",
          "chinese fishing nets",
          "portuguese church",
        ],

        response:
          "Kochi / Ernakulam is the final sightseeing destination of the Kerala with Kanyakumari Tour.\n\nMajor Attractions:\n• Chinese Fishing Nets\n• Portuguese Church\n• Optional Boat Ride\n\nThe tour reaches Kochi on Day 11 and sightseeing takes place on Day 12 before the return train journey to Kolkata.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "kerala train",
          "kerala train ticket",
          "railway",
          "sleeper class train",
          "train journey",
          "kolkata train",
          "howrah train",
          "kanyakumari train",
        ],

        response:
          "Train travel is included in the Kerala with Kanyakumari Tour.\n\nDeparture:\nHowrah Railway Station → Kanyakumari by Train 12665.\n\nReturn:\nErnakulam Railway Station → Kolkata by train.\n\nThe package includes up & down Sleeper Class train fare and train meals including Lunch & Dinner.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "kerala hotel",
          "kerala accommodation",
        ],

        response:
          "The package includes deluxe accommodation at the destinations mentioned in the itinerary.\n\nOvernight stays are planned at:\n• Kanyakumari\n• Kovalam\n• Alleppey\n• Thekkady\n• Munnar\n• Kochi\n\nFor exact hotel names and room availability, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "kerala meals",
        ],

        response:
          "Meals included in the Kerala with Kanyakumari Tour are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train meals including Lunch & Dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "transfer",
          "kerala transport",
        ],

        response:
          "AC transportation is included throughout the Kerala with Kanyakumari Tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe accommodation\n• Sleeper Class train fare\n• Train meals\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "kerala package 1",
          "14 days",
          "11 nights",
        ],

        response:
          "Kerala with Kanyakumari Tour Package 1:\n\nDuration: 11 Nights / 14 Days\nPrice: ₹28,500 per person\nRating: 9.1\n\nDestinations:\nKanyakumari, Kovalam, Alleppey, Thekkady, Munnar and Kochi.\n\nThe package includes accommodation, Sleeper Class train fare, meals, AC transportation and sightseeing as per the itinerary.",
      },

      backwater: {
        keywords: [
          "backwater",
          "backwaters",
          "kerala backwater",
          "alleppey backwater",
          "boat cruise",
          "houseboat",
          "backwater boat",
          "backwater ride",
        ],

        response:
          "Kerala backwater experience is available during the Alleppey stay.\n\nAn optional backwater boat cruise can be arranged on Day 6 at the traveller's own cost.\n\nThe backwater boat ride is not included in the package price.",
      },

      wildlife: {
        keywords: [
          "wildlife",
          "wildlife tour",
          "periyar",
          "periyar national park",
          "periyar lake",
          "forest",
          "safari",
        ],

        response:
          "Wildlife experiences are covered around Thekkady.\n\nMajor attractions include:\n• Periyar Lake\n• Periyar National Park\n• Spice plantations\n\nAny additional ride, safari or boating activity is subject to availability and may involve additional charges.",
      },
    },
  },
  {
    id: 25,

    topic: "Gujarat Tour",

    keywords: [
      "gujarat",
      "gujarat tour",
      "gujarat package",
      "gujarat tour package",
      "gujarat price",
      "gujarat package price",
      "gujarat duration",
      "gujarat itinerary",
      "gujarat sightseeing",
      "gujarat holiday",
      "gujarat holiday package",
      "gujarat temple tour",
      "gujarat heritage tour",

      "ahmedabad",
      "ahmedabad tour",
      "ahmedabad package",
      "ahmedabad sightseeing",
      "lothal",
      "lothal excursion",
      "statue of unity",

      "bhuj",
      "bhuj tour",
      "bhuj package",
      "bhuj sightseeing",
      "rann of kutch",
      "white rann",
      "great rann of kutch",

      "dwarka",
      "dwarka tour",
      "dwarka package",
      "dwarka sightseeing",
      "dwarkadhish temple",
      "bet dwarka",
      "nageshwar temple",

      "gir",
      "gir tour",
      "gir package",
      "gir sightseeing",
      "gir national park",
      "gir forest",
      "gir safari",
      "lion safari",

      "diu",
      "diu tour",
      "diu package",
      "diu sightseeing",
      "nagoa beach",
      "diu fort",
      "diu churches",

      "somnath",
      "somnath tour",
      "somnath package",
      "somnath sightseeing",
      "somnath temple",
      "prabhas patan",
      "gangeshwar mahadev",

      "veraval",
      "veraval tour",
      "veraval sightseeing",

      "ahmedabad bhuj",
      "bhuj dwarka",
      "dwarka gir",
      "gir diu",
      "diu somnath",
      "somnath veraval",

      "gujarat train",
      "gujarat hotel",
      "gujarat meals",
      "gujarat transport",
      "gujarat train ticket",
      "train journey",
      "sleeper class train",
      "temple tour",
      "heritage tour",
      "spiritual tour",
      "wildlife tour",
      "rann tour",
    ],

    summary: {
      duration: "12 Nights / 15 Days",
      price: "₹31,500 per person",
      rating: "9.0",
      category: "Domestic Tour",
      destinations:
        "Ahmedabad • Bhuj • Rann of Kutch • Dwarka • Gir • Diu • Somnath • Veraval",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "gujarat price",
          "gujarat package price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Gujarat Tour Package pricing starts from ₹31,500 per person.\n\nPackage 1:\nDuration: 12 Nights / 15 Days\nPrice: ₹31,500 per person\n\nPackage 2:\nDuration: 12 Nights / 15 Days\nPrice: ₹31,500 per person\n\nPackage 1 includes Lothal and Ahmedabad sightseeing.\n\nPackage 2 includes the Statue of Unity instead of the Lothal excursion.\n\nBoth packages cover Bhuj, Rann of Kutch, Dwarka, Gir, Diu, Somnath and Veraval.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "gujarat itinerary",
          "gujarat tour plan",
          "gujarat schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Gujarat Tour Itinerary\n\nPackage 1: 12 Nights / 15 Days\nPrice: ₹31,500 per person\n\nDay 1: Kolkata → Ahmedabad\nBoard train from Shalimar Railway Station for Ahmedabad. Overnight stay in train.\n\nDay 2: Train Journey\nFull day train journey towards Ahmedabad. Overnight stay in train.\n\nDay 3: Arrival at Ahmedabad\nArrive at Ahmedabad Railway Station and transfer to hotel. Overnight stay at Ahmedabad.\n\nDay 4: Lothal Excursion & Ahmedabad Sightseeing\nVisit Lothal, the rediscovered Harappan site, followed by local sightseeing in Ahmedabad. Overnight stay at Ahmedabad.\n\nDay 5: Ahmedabad → Bhuj\nProceed to Bhuj after breakfast. Overnight stay at Bhuj.\n\nDay 6: Rann of Kutch Excursion\nVisit the famous White Rann of Kutch and return to Bhuj. Overnight stay at Bhuj.\n\nDay 7: Bhuj → Dwarka\nProceed to Dwarka. Overnight stay at Dwarka.\n\nDay 8: Dwarka Sightseeing\nVisit Bet Dwarka, Nageshwar Temple and Dwarkadhish Temple. Overnight stay at Dwarka.\n\nDay 9: Dwarka → Gir\nProceed to Gir National Park region. Overnight stay at Gir.\n\nDay 10: Gir Safari → Diu\nOptional morning Gir Forest safari at own cost. Later proceed to Diu. Overnight stay at Diu.\n\nDay 11: Diu Sightseeing → Somnath\nVisit Nagoa Beach, Diu Fort and historic churches. Proceed to Somnath / Veraval. Overnight stay at Somnath / Veraval.\n\nDay 12: Somnath Sightseeing\nVisit Somnath Temple, Prabhas Patan and Gangeshwar Mahadev. Overnight stay at Somnath / Veraval.\n\nDay 13: Veraval → Ahmedabad → Kolkata\nTake train from Veraval to Ahmedabad and board onward train for Kolkata. Overnight stay in train.\n\nDay 14: Train Journey\nFull day train journey back to Kolkata. Overnight stay in train.\n\nDay 15: Arrival at Kolkata\nArrive at Shalimar / Howrah Railway Station with sweet memories of Gujarat.\n\nPackage 2 follows the same overall route.\n\nThe main difference is Day 4, where Package 2 includes a Statue of Unity excursion instead of the Lothal excursion and Ahmedabad sightseeing.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "gujarat sightseeing",
          "gujarat attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nAhmedabad:\n• Ahmedabad local sightseeing\n• Lothal in Package 1\n• Statue of Unity in Package 2\n\nBhuj / Kutch:\n• White Rann of Kutch\n• Rann of Kutch region\n\nDwarka:\n• Bet Dwarka\n• Nageshwar Temple\n• Dwarkadhish Temple\n\nGir:\n• Gir National Park region\n• Optional Gir Forest Safari\n\nDiu:\n• Nagoa Beach\n• Diu Fort\n• Historic Churches\n\nSomnath / Veraval:\n• Somnath Temple\n• Prabhas Patan\n• Gangeshwar Mahadev\n\nThe tour combines temple, heritage, wildlife, beach and desert attractions.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "gujarat inclusions",
          "gujarat included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Train food including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "gujarat exclusions",
          "gujarat excluded",
        ],

        response:
          "Package Exclusions:\n\n• Flight ticket\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Forest permits\n• Any ride\n• Personal activities\n• Any safari\n• Any item not mentioned above\n\nGir Forest Safari is optional and is available at additional cost.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "gujarat booking",
          "gujarat contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Gujarat Tour\nPackage 1: 12 Nights / 15 Days — ₹31,500 per person\nPackage 2: 12 Nights / 15 Days — ₹31,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "gujarat destinations",
          "gujarat route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Ahmedabad\n• Bhuj\n• Rann of Kutch\n• Dwarka\n• Gir\n• Diu\n• Somnath\n• Veraval\n\nPackage 1 additionally includes Lothal.\n\nPackage 2 additionally includes the Statue of Unity.",
      },

      ahmedabad: {
        keywords: [
          "ahmedabad",
          "ahmedabad tour",
          "ahmedabad sightseeing",
          "ahmedabad package",
          "lothal",
          "lothal excursion",
          "statue of unity",
        ],

        response:
          "Ahmedabad is the starting destination of the Gujarat Tour.\n\nPackage 1:\n• Lothal Excursion\n• Ahmedabad local sightseeing\n\nPackage 2:\n• Statue of Unity Excursion\n\nBoth packages arrive in Ahmedabad on Day 3 before continuing towards Bhuj.",
      },

      bhuj: {
        keywords: [
          "bhuj",
          "bhuj tour",
          "bhuj package",
          "bhuj sightseeing",
          "rann of kutch",
          "white rann",
          "great rann of kutch",
        ],

        response:
          "Bhuj is an important destination of the Gujarat Tour and the gateway to the Rann of Kutch.\n\nMajor Attraction:\n• White Rann of Kutch\n\nThe tour travels from Ahmedabad to Bhuj on Day 5 and visits the Rann of Kutch on Day 6.\n\nOvernight stays are planned at Bhuj.",
      },

      rann: {
        keywords: [
          "rann",
          "rann of kutch",
          "white rann",
          "great rann",
          "kutch",
          "kutch tour",
          "white desert",
        ],

        response:
          "The Rann of Kutch is one of the major attractions of the Gujarat Tour.\n\nThe tour includes an excursion to the famous White Rann of Kutch during the Bhuj stay.\n\nPackage 1 and Package 2 both include the Rann of Kutch excursion.",
      },

      dwarka: {
        keywords: [
          "dwarka",
          "dwarka tour",
          "dwarka package",
          "dwarka sightseeing",
          "dwarkadhish temple",
          "bet dwarka",
          "nageshwar temple",
        ],

        response:
          "Dwarka is an important spiritual destination of the Gujarat Tour.\n\nMajor Attractions:\n• Bet Dwarka\n• Nageshwar Temple\n• Dwarkadhish Temple\n\nThe tour travels from Bhuj to Dwarka on Day 7 and sightseeing is scheduled on Day 8.",
      },

      gir: {
        keywords: [
          "gir",
          "gir tour",
          "gir package",
          "gir sightseeing",
          "gir national park",
          "gir forest",
          "gir safari",
          "lion safari",
        ],

        response:
          "Gir is included as a wildlife destination in the Gujarat Tour.\n\nMajor Attraction:\n• Gir National Park region\n\nAn optional Gir Forest Safari is available on Day 10 at additional cost.\n\nSafari charges are not included in the package price.",
      },

      diu: {
        keywords: [
          "diu",
          "diu tour",
          "diu package",
          "diu sightseeing",
          "nagoa beach",
          "diu fort",
          "diu churches",
        ],

        response:
          "Diu is covered after the Gir visit.\n\nMajor Attractions:\n• Nagoa Beach\n• Diu Fort\n• Historic Churches\n\nThe tour proceeds from Gir to Diu on Day 10 and then continues towards Somnath on Day 11.",
      },

      somnath: {
        keywords: [
          "somnath",
          "somnath tour",
          "somnath package",
          "somnath sightseeing",
          "somnath temple",
          "prabhas patan",
          "gangeshwar mahadev",
        ],

        response:
          "Somnath is one of the major spiritual destinations of the Gujarat Tour.\n\nMajor Attractions:\n• Somnath Temple\n• Prabhas Patan\n• Gangeshwar Mahadev\n\nSomnath sightseeing is scheduled on Day 12 of the tour.\n\nOvernight stay is planned at Somnath / Veraval.",
      },

      veraval: {
        keywords: [
          "veraval",
          "veraval tour",
          "veraval sightseeing",
          "veraval package",
          "veraval railway station",
        ],

        response:
          "Veraval is the final major destination area of the Gujarat Tour.\n\nThe tour stays at Somnath / Veraval after Diu sightseeing and later departs from Veraval Railway Station towards Ahmedabad and Kolkata.\n\nThe return journey begins on Day 13.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "gujarat train",
          "gujarat train ticket",
          "railway",
          "sleeper class train",
          "train journey",
          "kolkata train",
          "howrah train",
          "shalimar train",
        ],

        response:
          "Train travel is included in the Gujarat Tour.\n\nDeparture:\nKolkata / Shalimar → Ahmedabad by train.\n\nLocal Route:\nAhmedabad → Bhuj → Dwarka → Gir → Diu → Somnath / Veraval.\n\nReturn:\nVeraval → Ahmedabad → Kolkata by train.\n\nThe package includes Sleeper Class train tickets.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "gujarat hotel",
          "gujarat accommodation",
        ],

        response:
          "The Gujarat Tour includes deluxe hotel accommodation.\n\nOvernight stays are planned at:\n• Ahmedabad\n• Bhuj\n• Dwarka\n• Gir\n• Diu\n• Somnath / Veraval\n\nFor exact hotel names, room availability and room category, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "gujarat meals",
        ],

        response:
          "Meals included in the Gujarat Tour are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train food including lunch and dinner\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "ac",
          "ac transport",
          "transfer",
          "gujarat transport",
        ],

        response:
          "AC transportation is included throughout the Gujarat Tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Transfers between destinations\n• Sightseeing transportation",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe accommodation\n• Sleeper Class train tickets\n• Train food including lunch and dinner\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "gujarat package 1",
          "15 days",
          "12 nights",
          "lothal package",
        ],

        response:
          "Gujarat Tour Package 1:\n\nDuration: 12 Nights / 15 Days\nPrice: ₹31,500 per person\nRating: 9.0\n\nDestinations:\nAhmedabad, Lothal, Bhuj, Rann of Kutch, Dwarka, Gir, Diu, Somnath and Veraval.\n\nPackage 1 includes Lothal and Ahmedabad sightseeing on Day 4.",
      },

      package2: {
        keywords: [
          "package 2",
          "second package",
          "option 2",
          "gujarat package 2",
          "statue of unity package",
        ],

        response:
          "Gujarat Tour Package 2:\n\nDuration: 12 Nights / 15 Days\nPrice: ₹31,500 per person\nRating: 9.0\n\nDestinations:\nAhmedabad, Statue of Unity, Bhuj, Rann of Kutch, Dwarka, Gir, Diu, Somnath and Veraval.\n\nPackage 2 includes a Statue of Unity excursion on Day 4 instead of the Lothal excursion.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "difference between packages",
          "package comparison",
          "which package",
          "which one is better",
          "package 1 or package 2",
        ],

        response:
          "Difference Between Gujarat Tour Packages:\n\nPackage 1:\n• 12 Nights / 15 Days\n• ₹31,500 per person\n• Includes Lothal Excursion\n• Includes Ahmedabad sightseeing\n\nPackage 2:\n• 12 Nights / 15 Days\n• ₹31,500 per person\n• Includes Statue of Unity Excursion\n• Same main Gujarat route\n\nThe primary difference is the Day 4 excursion.",
      },
    },
  },
  {
    id: 26,

    topic: "Nepal Tour",

    keywords: [
      "nepal",
      "nepal tour",
      "nepal package",
      "nepal tour package",
      "nepal price",
      "nepal package price",
      "nepal duration",
      "nepal itinerary",
      "nepal sightseeing",
      "nepal holiday",
      "nepal holiday package",
      "nepal temple tour",
      "nepal nature tour",
      "nepal spiritual tour",

      "kathmandu",
      "kathmandu tour",
      "kathmandu package",
      "kathmandu sightseeing",
      "kathmandu durbar square",
      "boudhanath",
      "boudhanath stupa",
      "swayambhunath",
      "monkey temple",
      "pashupatinath",
      "pashupatinath temple",
      "patan",

      "pokhara",
      "pokhara tour",
      "pokhara package",
      "pokhara sightseeing",
      "devis fall",
      "devi's fall",
      "gupteshwar cave",
      "gupteshwar temple",
      "mountaineering museum",
      "tal barahi temple",

      "muktinath",
      "muktinath tour",
      "muktinath package",
      "muktinath temple",
      "muktinath sightseeing",

      "chitwan",
      "chitwan tour",
      "chitwan package",
      "chitwan sightseeing",
      "chitwan safari",
      "jungle safari",
      "jungle safari nepal",

      "nagarkot",
      "nagarkot tour",
      "nagarkot sightseeing",

      "bhaktapur",
      "bhaktapur tour",
      "bhaktapur sightseeing",

      "raxaul",
      "raxaul tour",
      "raxaul railway",
      "raxaul nepal",
      "birgunj",
      "birgunj nepal",

      "manakamana",
      "manakamana temple",
      "manakamana ropeway",
      "ropeway",

      "kolkata nepal",
      "howrah nepal",
      "kolkata raxaul",
      "howrah raxaul",
      "nepal train",
      "nepal train ticket",
      "train journey",
      "sleeper class train",

      "nepal hotel",
      "nepal accommodation",
      "nepal meals",
      "nepal transport",
      "nepal sightseeing",
      "nepal package facilities",
      "nepal booking",
    ],

    summary: {
      duration: "08 Nights / 09 Days to 10 Nights / 11 Days",
      price: "₹24,500 to ₹35,500 per person",
      rating: "9.2",
      category: "International Tour",
      destinations:
        "Kathmandu • Pokhara • Muktinath • Chitwan • Nagarkot • Bhaktapur • Raxaul",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "nepal price",
          "nepal package price",
          "tour price",
          "package cost",
          "how much",
          "nepal cost",
        ],

        response:
          "Nepal Tour Package pricing starts from ₹24,500 per person.\n\nPackage 1:\nDuration: 08 Nights / 09 Days\nPrice: ₹26,500 per person\n\nPackage 2:\nDuration: 09 Nights / 10 Days\nPrice: ₹24,500 per person\n\nPackage 3:\nDuration: 10 Nights / 11 Days\nPrice: ₹35,500 per person\n\nThe packages cover different combinations of Kathmandu, Pokhara, Muktinath and Chitwan.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "nepal itinerary",
          "nepal tour plan",
          "nepal schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Nepal Tour Itinerary\n\nPackage 1: 08 Nights / 09 Days\nPrice: ₹26,500 per person\n\nDay 1: Kolkata → Raxaul\nBoard train from Howrah Railway Station for Raxaul. Overnight stay in train.\n\nDay 2: Raxaul → Kathmandu\nArrive at Raxaul and transfer to Kathmandu. Overnight stay at Kathmandu.\n\nDay 3: Kathmandu Sightseeing\nVisit Kathmandu Durbar Square, Boudhanath Stupa, Swayambhunath (Monkey Temple), Patan and Pashupatinath Temple. Overnight stay at Kathmandu.\n\nDay 4: Nagarkot & Bhaktapur\nVisit Nagarkot and Bhaktapur and return to Kathmandu. Overnight stay at Kathmandu.\n\nDay 5: Kathmandu → Pokhara\nDrive to Pokhara via Manakamana. Ropeway is available at own cost. Overnight stay at Pokhara.\n\nDay 6: Pokhara → Muktinath\nProceed to Muktinath and visit Muktinath Temple. Overnight stay at Muktinath.\n\nDay 7: Muktinath → Pokhara\nReturn to Pokhara after breakfast. Overnight stay at Pokhara.\n\nDay 8: Pokhara → Raxaul\nTransfer to Raxaul Railway Station and board train for Kolkata. Overnight stay in train.\n\nDay 9: Arrival at Kolkata\nArrive at Howrah Railway Station with sweet memories of Nepal.\n\nPackage 2: 09 Nights / 10 Days\n\nDay 1: Kolkata → Raxaul\nBoard train from Howrah Railway Station for Raxaul. Overnight stay in train.\n\nDay 2: Raxaul → Chitwan\nArrive at Raxaul and proceed to Chitwan. Overnight stay at Chitwan.\n\nDay 3: Chitwan → Pokhara\nEarly morning jungle safari followed by transfer to Pokhara. Overnight stay at Pokhara.\n\nDay 4: Pokhara Sightseeing\nVisit Devi’s Fall, Gupteshwar Cave & Temple, Mountaineering Museum and Tal Barahi Temple. Overnight stay at Pokhara.\n\nDay 5: Pokhara → Kathmandu\nDrive to Kathmandu via Manakamana. Ropeway is available at own cost. Overnight stay at Kathmandu.\n\nDay 6: Kathmandu Sightseeing\nVisit Kathmandu Durbar Square, Boudhanath Stupa, Monkey Temple, Patan and Pashupatinath Temple. Overnight stay at Kathmandu.\n\nDay 7: Nagarkot & Bhaktapur\nVisit Nagarkot and Bhaktapur and return to Kathmandu. Overnight stay at Kathmandu.\n\nDay 8: Kathmandu → Birgunj / Raxaul\nDrive to Birgunj / Raxaul. Overnight stay at Birgunj / Raxaul.\n\nDay 9: Raxaul → Kolkata\nBoard train from Raxaul for Kolkata. Overnight stay in train.\n\nDay 10: Arrival at Kolkata\nArrive at Howrah Railway Station.\n\nPackage 3: 10 Nights / 11 Days\n\nDay 1: Kolkata → Raxaul\nBoard train from Howrah Railway Station for Raxaul. Overnight stay in train.\n\nDay 2: Raxaul → Kathmandu\nTransfer to Kathmandu. Overnight stay at Kathmandu.\n\nDay 3: Kathmandu Sightseeing\nVisit Kathmandu Durbar Square, Boudhanath Stupa, Monkey Temple, Patan and Pashupatinath Temple. Overnight stay at Kathmandu.\n\nDay 4: Nagarkot & Bhaktapur\nVisit Nagarkot and Bhaktapur. Overnight stay at Kathmandu.\n\nDay 5: Kathmandu → Pokhara\nDrive to Pokhara via Manakamana. Overnight stay at Pokhara.\n\nDay 6: Pokhara → Muktinath\nProceed to Muktinath and visit Muktinath Temple. Overnight stay at Muktinath.\n\nDay 7: Muktinath → Pokhara\nReturn to Pokhara. Overnight stay at Pokhara.\n\nDay 8: Pokhara Sightseeing\nVisit Devi’s Fall, Gupteshwar Cave & Temple, Mountaineering Museum and Tal Barahi Temple. Overnight stay at Pokhara.\n\nDay 9: Pokhara → Chitwan\nProceed to Chitwan. Overnight stay at Chitwan.\n\nDay 10: Chitwan → Raxaul\nOptional jungle safari at own cost. Transfer to Raxaul Railway Station and board train for Kolkata. Overnight stay in train.\n\nDay 11: Arrival at Kolkata\nArrive at Howrah Railway Station.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "nepal sightseeing",
          "nepal attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nKathmandu:\n• Kathmandu Durbar Square\n• Boudhanath Stupa\n• Swayambhunath / Monkey Temple\n• Patan\n• Pashupatinath Temple\n\nNagarkot & Bhaktapur:\n• Nagarkot\n• Bhaktapur\n\nPokhara:\n• Devi’s Fall\n• Gupteshwar Cave & Temple\n• Mountaineering Museum\n• Tal Barahi Temple\n\nMuktinath:\n• Muktinath Temple\n\nChitwan:\n• Jungle Safari / Wildlife experience\n\nManakamana:\n• Manakamana Temple / Ropeway at own cost\n\nThe tour combines spiritual, cultural, Himalayan, nature and wildlife attractions.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "nepal inclusions",
          "nepal included",
        ],

        response:
          "Package Inclusions:\n\n• Deluxe accommodation\n• Train ticket (Sleeper / 3 AC as per package)\n• Train food\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• All possible sightseeing as per itinerary\n• Muktinath permit for Package 3",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "nepal exclusions",
          "nepal excluded",
        ],

        response:
          "Package Exclusions:\n\n• Flight tickets\n• Single supplement cost\n• Mineral water\n• Soft drinks and hard drinks\n• Guide charges\n• Porter charges\n• Entry fees\n• Camera charges\n• Permits not specifically mentioned\n• Manakamana Ropeway charges\n• Jungle Safari charges in Chitwan where optional\n• Personal activities\n• Any ride or safari\n• Any item not mentioned above\n\nOptional activities and additional services are available at extra cost.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "nepal booking",
          "nepal contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nNepal Tour Packages:\n\nPackage 1: 08 Nights / 09 Days — ₹26,500 per person\nPackage 2: 09 Nights / 10 Days — ₹24,500 per person\nPackage 3: 10 Nights / 11 Days — ₹35,500 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "nepal destinations",
          "nepal route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Kathmandu\n• Pokhara\n• Muktinath\n• Chitwan\n• Nagarkot\n• Bhaktapur\n• Raxaul\n• Birgunj\n\nPackage 1 focuses on Kathmandu, Pokhara and Muktinath.\n\nPackage 2 focuses on Chitwan, Pokhara and Kathmandu.\n\nPackage 3 combines Kathmandu, Pokhara, Muktinath and Chitwan.",
      },

      kathmandu: {
        keywords: [
          "kathmandu",
          "kathmandu tour",
          "kathmandu package",
          "kathmandu sightseeing",
          "kathmandu durbar square",
          "boudhanath",
          "boudhanath stupa",
          "swayambhunath",
          "monkey temple",
          "pashupatinath",
          "pashupatinath temple",
          "patan",
        ],

        response:
          "Kathmandu is one of the main destinations of the Nepal Tour.\n\nMajor Attractions:\n• Kathmandu Durbar Square\n• Boudhanath Stupa\n• Swayambhunath / Monkey Temple\n• Patan\n• Pashupatinath Temple\n\nKathmandu sightseeing is included in Package 1 and Package 3, while Package 2 visits Kathmandu after Pokhara.",
      },

      pokhara: {
        keywords: [
          "pokhara",
          "pokhara tour",
          "pokhara package",
          "pokhara sightseeing",
          "devi's fall",
          "devis fall",
          "gupteshwar cave",
          "gupteshwar temple",
          "mountaineering museum",
          "tal barahi temple",
        ],

        response:
          "Pokhara is one of the major scenic destinations of the Nepal Tour.\n\nMajor Attractions:\n• Devi’s Fall\n• Gupteshwar Cave & Temple\n• Mountaineering Museum\n• Tal Barahi Temple\n\nPokhara is included in all three packages.\n\nPackage 1 and Package 3 also include the Muktinath excursion from Pokhara.",
      },

      muktinath: {
        keywords: [
          "muktinath",
          "muktinath tour",
          "muktinath package",
          "muktinath temple",
          "muktinath sightseeing",
          "muktinath permit",
        ],

        response:
          "Muktinath is an important spiritual destination included in Package 1 and Package 3.\n\nThe itinerary includes:\n• Pokhara → Muktinath\n• Muktinath Temple visit\n• Overnight stay at Muktinath\n• Return to Pokhara\n\nMuktinath permit is specifically included in Package 3.",
      },

      chitwan: {
        keywords: [
          "chitwan",
          "chitwan tour",
          "chitwan package",
          "chitwan sightseeing",
          "chitwan safari",
          "jungle safari",
          "jungle safari nepal",
        ],

        response:
          "Chitwan is the wildlife destination of the Nepal Tour.\n\nPackage 2:\n• Raxaul → Chitwan\n• Early morning jungle safari\n• Chitwan → Pokhara\n\nPackage 3:\n• Pokhara → Chitwan\n• Overnight stay at Chitwan\n• Optional jungle safari\n• Chitwan → Raxaul\n\nJungle safari charges are not included where the safari is optional.",
      },

      nagarkot: {
        keywords: [
          "nagarkot",
          "nagarkot tour",
          "nagarkot sightseeing",
          "nagarkot nepal",
        ],

        response:
          "Nagarkot is included in Package 1 and Package 3.\n\nThe itinerary combines Nagarkot with Bhaktapur on a local excursion from Kathmandu.\n\nAfter sightseeing, guests return to Kathmandu for an overnight stay.",
      },

      bhaktapur: {
        keywords: [
          "bhaktapur",
          "bhaktapur tour",
          "bhaktapur sightseeing",
          "bhaktapur nepal",
        ],

        response:
          "Bhaktapur is included in Package 1 and Package 3.\n\nIt is covered together with Nagarkot as a local excursion from Kathmandu.\n\nGuests return to Kathmandu after the excursion.",
      },

      raxaul: {
        keywords: [
          "raxaul",
          "raxaul tour",
          "raxaul railway",
          "raxaul nepal",
          "kolkata raxaul",
          "howrah raxaul",
        ],

        response:
          "Raxaul is the main railway entry and exit point used for the Nepal Tour.\n\nThe journey begins with:\nKolkata / Howrah → Raxaul by train\n\nFrom Raxaul, guests transfer by road to destinations in Nepal.\n\nThe return journey includes transfer back to Raxaul Railway Station followed by train travel to Kolkata.",
      },

      manakamana: {
        keywords: [
          "manakamana",
          "manakamana temple",
          "manakamana ropeway",
          "ropeway",
          "ropeway nepal",
        ],

        response:
          "Manakamana is visited during the road journey between Kathmandu and Pokhara.\n\nThe itinerary mentions the Manakamana Ropeway as an optional activity.\n\nRopeway charges are not included in the package and must be paid separately.",
      },

      train: {
        keywords: [
          "train",
          "train ticket",
          "nepal train",
          "nepal train ticket",
          "railway",
          "sleeper class train",
          "train journey",
          "kolkata train",
          "howrah train",
          "raxaul train",
        ],

        response:
          "Train travel is included in the Nepal Tour.\n\nDeparture:\nKolkata / Howrah → Raxaul by train.\n\nNepal Travel:\nRaxaul → Kathmandu / Chitwan by road transportation.\n\nReturn:\nRaxaul → Kolkata by train.\n\nTrain tickets are provided in Sleeper Class / 3 AC as per the selected package.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "nepal hotel",
          "nepal accommodation",
        ],

        response:
          "The Nepal Tour includes deluxe hotel accommodation.\n\nOvernight stays may be planned at:\n• Kathmandu\n• Pokhara\n• Muktinath\n• Chitwan\n• Birgunj / Raxaul\n\nFor exact hotel names, room availability and room category, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "nepal meals",
        ],

        response:
          "Meals included in the Nepal Tour are:\n\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• Train food\n\nMineral water, soft drinks and hard drinks are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "ac",
          "ac transport",
          "transfer",
          "nepal transport",
        ],

        response:
          "AC transportation is included throughout the Nepal Tour as per the itinerary.\n\nThe package also includes:\n• Pick-up and drop\n• Parking charges\n• Toll tax\n• Transfers between destinations\n• Sightseeing transportation\n\nTrain travel between Kolkata and Raxaul is also included as per the selected package.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• Deluxe accommodation\n• Train tickets in Sleeper / 3 AC as per package\n• Train food\n• Breakfast\n• Lunch\n• Evening tea and snacks\n• Dinner\n• AC transportation\n• Parking charges\n• Toll tax\n• Pick-up and drop\n• Sightseeing as per itinerary\n• Muktinath permit in Package 3",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "nepal package 1",
          "9 days",
          "8 nights",
          "muktinath package",
          "kathmandu pokhara muktinath",
        ],

        response:
          "Nepal Tour Package 1:\n\nDuration: 08 Nights / 09 Days\nPrice: ₹26,500 per person\nRating: 9.2\n\nDestinations:\nRaxaul, Kathmandu, Nagarkot, Bhaktapur, Pokhara and Muktinath.\n\nHighlights:\n• Kathmandu sightseeing\n• Nagarkot & Bhaktapur excursion\n• Pokhara visit\n• Muktinath Temple visit\n• Train travel between Kolkata and Raxaul",
      },

      package2: {
        keywords: [
          "package 2",
          "second package",
          "option 2",
          "nepal package 2",
          "10 days",
          "9 nights",
          "chitwan package",
          "pokhara chitwan",
        ],

        response:
          "Nepal Tour Package 2:\n\nDuration: 09 Nights / 10 Days\nPrice: ₹24,500 per person\nRating: 9.2\n\nDestinations:\nRaxaul, Chitwan, Pokhara, Kathmandu, Nagarkot and Bhaktapur.\n\nHighlights:\n• Chitwan jungle safari\n• Pokhara sightseeing\n• Kathmandu sightseeing\n• Nagarkot & Bhaktapur excursion\n• Train travel between Kolkata and Raxaul",
      },

      package3: {
        keywords: [
          "package 3",
          "third package",
          "option 3",
          "nepal package 3",
          "11 days",
          "10 nights",
          "muktinath chitwan package",
        ],

        response:
          "Nepal Tour Package 3:\n\nDuration: 10 Nights / 11 Days\nPrice: ₹35,500 per person\nRating: 9.2\n\nDestinations:\nRaxaul, Kathmandu, Nagarkot, Bhaktapur, Pokhara, Muktinath and Chitwan.\n\nHighlights:\n• Kathmandu sightseeing\n• Nagarkot & Bhaktapur\n• Pokhara sightseeing\n• Muktinath Temple\n• Chitwan visit\n• Optional jungle safari\n• Muktinath permit included",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "difference between packages",
          "package comparison",
          "which package",
          "which one is better",
          "package 1 or package 2",
          "package 2 or package 3",
          "package 1 or package 3",
        ],

        response:
          "Difference Between Nepal Tour Packages:\n\nPackage 1:\n• 08 Nights / 09 Days\n• ₹26,500 per person\n• Kathmandu + Pokhara + Muktinath\n• Nagarkot & Bhaktapur\n\nPackage 2:\n• 09 Nights / 10 Days\n• ₹24,500 per person\n• Chitwan + Pokhara + Kathmandu\n• Nagarkot & Bhaktapur\n• Jungle safari experience\n\nPackage 3:\n• 10 Nights / 11 Days\n• ₹35,500 per person\n• Kathmandu + Pokhara + Muktinath + Chitwan\n• Nagarkot & Bhaktapur\n• Optional jungle safari\n• Muktinath permit included\n\nPackage 3 is the most comprehensive option because it combines Muktinath and Chitwan with Kathmandu and Pokhara.",
      },
    },
  },
  {
    id: 27,

    topic: "Bangkok Pattaya Phuket Tour",

    keywords: [
      "bangkok",
      "pattaya",
      "phuket",
      "bangkok pattaya phuket",
      "bangkok pattaya phuket tour",
      "thailand",
      "thailand tour",
      "thailand package",
      "thailand tour package",
      "bangkok package",
      "pattaya package",
      "phuket package",
      "bangkok tour",
      "pattaya tour",
      "phuket tour",
      "bangkok price",
      "thailand price",
      "thailand package price",
      "tour price",
      "package price",
      "thailand itinerary",
      "bangkok itinerary",
      "pattaya itinerary",
      "phuket itinerary",
      "thailand sightseeing",
      "thailand holiday",
      "thailand holiday package",
      "international tour",
      "international package",

      "coral island",
      "coral island tour",
      "coral island pattaya",
      "safari world",
      "safari world bangkok",
      "marine park",
      "chaophraya cruise",
      "chaophraya princess cruise",
      "cruise dinner",
      "phi phi island",
      "phi phi island tour",
      "phuket old town",
      "promthep cape",
      "chalong temple",
      "golden buddha temple",
      "marble temple",
      "gems gallery",
      "alcazar show",
      "walking street",
      "big buddha",
      "sriracha tiger zoo",

      "bangkok flight",
      "phuket flight",
      "thailand flight",
      "international flight",
      "domestic flight",
      "kolkata bangkok",
      "bangkok phuket",
      "phuket bangkok",
      "return flight",

      "thailand hotel",
      "bangkok hotel",
      "pattaya hotel",
      "phuket hotel",
      "4 star hotel",
      "thailand meals",
      "indian food",
      "indian buffet",
      "indian meals",
      "thailand transport",
      "ac transport",
      "tour manager",
      "english guide",
      "departure dates",
    ],

    summary: {
      duration: "6 Nights / 7 Days",
      price: "₹92,000 per person",
      rating: "9.3",
      category: "International Tour",
      destinations: "Bangkok • Pattaya • Phuket • Phi Phi Island",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "thailand price",
          "thailand package price",
          "bangkok price",
          "pattaya price",
          "phuket price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Bangkok Pattaya Phuket Tour Package price is ₹92,000 per person.\n\nDuration: 6 Nights / 7 Days\nPrice: ₹92,000 per person\nRating: 9.3\n\nThe package includes international return flights from Kolkata, domestic flights between Bangkok and Phuket, 4-star accommodation, meals, AC transportation, sightseeing, entry fees, tour manager and major activities.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "thailand itinerary",
          "thailand tour plan",
          "bangkok itinerary",
          "pattaya itinerary",
          "phuket itinerary",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Bangkok Pattaya Phuket Tour Itinerary\n\nDuration: 6 Nights / 7 Days\nPrice: ₹92,000 per person\n\nDay 1: Kolkata → Bangkok → Pattaya\nFly from Kolkata to Bangkok and transfer to Pattaya. Visit Sriracha Tiger Zoo and Big Buddha. Evening Alcazar Show and Walking Street. Overnight stay at Pattaya.\n\nDay 2: Coral Island Excursion\nVisit Coral Island by speed boat and enjoy beach activities. Lunch at Indian restaurant and local market visit. Overnight stay at Pattaya.\n\nDay 3: Pattaya → Bangkok\nTravel to Bangkok via Gems Gallery. Visit Golden Buddha Temple and Marble Temple. Overnight stay at Bangkok.\n\nDay 4: Safari World & Chaophraya Cruise\nEnjoy Safari World and Marine Park with buffet lunch. Evening Chaophraya Princess Cruise dinner. Overnight stay at Bangkok.\n\nDay 5: Bangkok → Phuket\nFly from Bangkok to Phuket and transfer to hotel. Overnight stay at Phuket.\n\nDay 6: Phi Phi Island Tour\nEnjoy a full-day Phi Phi Island tour with buffet lunch. Return to hotel and overnight stay at Phuket.\n\nDay 7: Phuket → Bangkok → Kolkata\nVisit Chalong Temple, Phuket Old Town and Promthep Cape. Fly to Bangkok and board the return flight to Kolkata.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "thailand sightseeing",
          "thailand attractions",
          "tourist places",
          "what will we see",
          "bangkok sightseeing",
          "pattaya sightseeing",
          "phuket sightseeing",
        ],

        response:
          "Major Attractions Covered:\n\nPattaya:\n• Sriracha Tiger Zoo\n• Big Buddha\n• Alcazar Show\n• Walking Street\n• Coral Island\n• Local market\n\nBangkok:\n• Gems Gallery\n• Golden Buddha Temple\n• Marble Temple\n• Safari World\n• Marine Park\n• Chaophraya Princess Cruise\n\nPhuket:\n• Phi Phi Island\n• Chalong Temple\n• Phuket Old Town\n• Promthep Cape\n\nThe tour combines beaches, islands, temples, wildlife, city sightseeing, entertainment and cruise experiences.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "thailand inclusions",
          "thailand included",
        ],

        response:
          "Package Inclusions:\n\n• 4-star accommodation\n• Breakfast\n• Lunch\n• Dinner\n• Indian buffet meals\n• AC luxury transportation\n• Drinking water bottle\n• Ex-Kolkata tour manager\n• Return international air ticket\n• Domestic flights between Bangkok and Phuket\n• English-speaking guide\n• Entry fees\n• Alcazar Show\n• Coral Island tour\n• Safari World & Marine Park\n• Chaophraya Princess Cruise dinner\n• Phi Phi Island tour",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "thailand exclusions",
          "thailand excluded",
        ],

        response:
          "Package Exclusions:\n\n• Personal expenses\n• Tips and porter charges\n• Travel insurance\n• Scuba diving\n• Optional water sports\n• Any activity not mentioned in the inclusions\n\nOptional activities and personal expenses will be charged separately.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "thailand booking",
          "thailand contact",
          "bangkok booking",
          "pattaya booking",
          "phuket booking",
        ],

        response:
          "For booking, availability, hotel options, departure dates and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Bangkok Pattaya Phuket Tour\nDuration: 6 Nights / 7 Days\nPrice: ₹92,000 per person\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "thailand destinations",
          "thailand route",
          "tour route",
          "bangkok pattaya",
          "pattaya phuket",
        ],

        response:
          "Destinations Covered:\n\n• Bangkok\n• Pattaya\n• Phuket\n• Phi Phi Island\n\nThe tour starts from Kolkata and travels to Bangkok, Pattaya and Phuket before returning to Kolkata.",
      },

      bangkok: {
        keywords: [
          "bangkok",
          "bangkok tour",
          "bangkok package",
          "bangkok sightseeing",
          "bangkok attractions",
          "bangkok places",
        ],

        response:
          "Bangkok is one of the main destinations of the Thailand Tour.\n\nMajor Attractions:\n• Gems Gallery\n• Golden Buddha Temple\n• Marble Temple\n• Safari World\n• Marine Park\n• Chaophraya Princess Cruise\n\nBangkok is covered on Days 3 and 4 before the tour continues to Phuket.",
      },

      pattaya: {
        keywords: [
          "pattaya",
          "pattaya tour",
          "pattaya package",
          "pattaya sightseeing",
          "pattaya attractions",
          "pattaya places",
        ],

        response:
          "Pattaya is covered during the first two days of the Thailand Tour.\n\nMajor Attractions:\n• Sriracha Tiger Zoo\n• Big Buddha\n• Alcazar Show\n• Walking Street\n• Coral Island\n• Local market\n\nOvernight stays are planned at Pattaya on Days 1 and 2.",
      },

      phuket: {
        keywords: [
          "phuket",
          "phuket tour",
          "phuket package",
          "phuket sightseeing",
          "phuket attractions",
          "phuket places",
        ],

        response:
          "Phuket is the final major destination of the Thailand Tour.\n\nMajor Attractions:\n• Phi Phi Island\n• Chalong Temple\n• Phuket Old Town\n• Promthep Cape\n\nThe tour reaches Phuket on Day 5 and includes Phi Phi Island on Day 6.",
      },

      coralIsland: {
        keywords: [
          "coral island",
          "coral island tour",
          "coral island pattaya",
          "coral island excursion",
          "speed boat",
          "pattaya island",
        ],

        response:
          "Coral Island is included on Day 2 of the Thailand Tour.\n\nThe excursion is conducted by speed boat and includes beach activities.\n\nLunch is provided at an Indian restaurant, followed by a local market visit.\n\nCoral Island tour is included in the package price.",
      },

      phiPhiIsland: {
        keywords: [
          "phi phi island",
          "phi phi",
          "phi phi island tour",
          "phi phi excursion",
          "phuket island tour",
        ],

        response:
          "Phi Phi Island is included as a full-day excursion from Phuket on Day 6.\n\nThe tour includes a boat excursion and buffet lunch.\n\nAfter the island tour, guests return to Phuket for an overnight stay.",
      },

      safariWorld: {
        keywords: [
          "safari world",
          "safari world bangkok",
          "marine park",
          "bangkok safari",
          "wildlife",
          "wildlife tour",
        ],

        response:
          "Safari World and Marine Park are included on Day 4 in Bangkok.\n\nThe visit includes sightseeing at Safari World and Marine Park along with buffet lunch.\n\nEntry fees are included in the package.",
      },

      cruise: {
        keywords: [
          "cruise",
          "chaophraya cruise",
          "chaophraya princess cruise",
          "cruise dinner",
          "dinner cruise",
          "bangkok cruise",
        ],

        response:
          "The Chaophraya Princess Cruise dinner is included on Day 4.\n\nGuests can enjoy an evening cruise experience along the Chao Phraya River with dinner.\n\nThe cruise dinner is included in the package price.",
      },

      temples: {
        keywords: [
          "temple",
          "temples",
          "bangkok temple",
          "golden buddha",
          "golden buddha temple",
          "marble temple",
          "chalong temple",
        ],

        response:
          "The Thailand Tour includes visits to several important temples.\n\nBangkok:\n• Golden Buddha Temple\n• Marble Temple\n\nPhuket:\n• Chalong Temple\n\nThese temple visits are included as part of the sightseeing itinerary.",
      },

      hotels: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "thailand hotel",
          "bangkok hotel",
          "pattaya hotel",
          "phuket hotel",
          "4 star hotel",
        ],

        response:
          "The Thailand Tour includes 4-star hotel accommodation.\n\nHotel Details:\n\nPattaya:\nThe Beverly Hotel Pattaya (4 Star)\n\nBangkok:\nBangkok Palace (4 Star)\n\nPhuket:\nThe Fishermen Harbour Beach Resort (4 Star)\n\nFor room availability and the latest hotel confirmation, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "indian food",
          "indian buffet",
          "indian meals",
          "thailand meals",
          "food included",
        ],

        response:
          "Meals included in the Thailand Tour are:\n\n• Breakfast\n• Lunch\n• Dinner\n• Indian buffet meals\n• Buffet lunch during selected excursions\n• Drinking water bottle\n\nPersonal food expenses outside the included meals are not covered.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "ac",
          "ac transport",
          "transfer",
          "thailand transport",
          "luxury transport",
        ],

        response:
          "AC luxury transportation is included throughout the Thailand Tour as per the itinerary.\n\nThe package also includes:\n• Airport transfers\n• Inter-city transfers\n• Local sightseeing transportation\n• Bangkok to Pattaya transfer\n• Pattaya to Bangkok transfer\n• Phuket airport transfers\n• Domestic flights between Bangkok and Phuket",
      },

      flights: {
        keywords: [
          "flight",
          "flights",
          "air ticket",
          "air ticket included",
          "international flight",
          "domestic flight",
          "kolkata bangkok",
          "bangkok phuket",
          "phuket bangkok",
          "return flight",
        ],

        response:
          "Flights are included in the Thailand Tour Package.\n\nInternational Flight:\n• Kolkata → Bangkok\n• Bangkok → Kolkata\n\nDomestic Flights:\n• Bangkok → Phuket\n• Phuket → Bangkok\n\nReturn international air tickets and domestic flights mentioned in the itinerary are included.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 4-star hotel accommodation\n• Indian buffet meals\n• AC luxury transportation\n• Return international air ticket\n• Domestic flights\n• English-speaking guide\n• Ex-Kolkata tour manager\n• Drinking water bottle\n• Entry fees\n• Coral Island tour\n• Safari World & Marine Park\n• Chaophraya Princess Cruise dinner\n• Phi Phi Island tour",
      },

      activities: {
        keywords: [
          "activities",
          "things to do",
          "adventure",
          "water sports",
          "scuba diving",
          "island activities",
          "thailand activities",
        ],

        response:
          "Major Activities Included:\n\n• Coral Island excursion\n• Speed boat ride\n• Alcazar Show\n• Safari World & Marine Park\n• Chaophraya Princess Cruise dinner\n• Phi Phi Island tour\n• Beach activities\n• City sightseeing\n• Temple visits\n\nScuba diving and optional water sports are available at additional cost.",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "thailand package 1",
          "bangkok package 1",
          "7 days",
          "6 nights",
        ],

        response:
          "Bangkok Pattaya Phuket Tour Package 1:\n\nDuration: 6 Nights / 7 Days\nPrice: ₹92,000 per person\nRating: 9.3\n\nDestinations:\nBangkok, Pattaya, Phuket and Phi Phi Island.\n\nThe package includes 4-star accommodation, international and domestic flights, Indian meals, AC transportation, sightseeing, tour manager, guide and major activities.",
      },

      departureDates: {
        keywords: [
          "departure date",
          "departure dates",
          "travel date",
          "travel dates",
          "thailand departure",
          "thailand departure dates",
          "when is the tour",
          "tour dates",
          "available dates",
        ],

        response:
          "Available Departure Dates for the Bangkok Pattaya Phuket Tour:\n\n• 16/08/2026\n• 17/09/2026\n• 18/09/2026\n• 19/10/2026\n• 27/10/2026\n• 14/11/2026\n• 21/11/2026\n• 12/12/2026\n• 22/12/2026\n• 22/01/2027\n\nPlease contact Riya Tours & Travels to confirm the latest availability before booking.",
      },

      tourManager: {
        keywords: [
          "tour manager",
          "manager",
          "tour leader",
          "escort",
          "kolkata tour manager",
          "guide",
        ],

        response:
          "An Ex-Kolkata tour manager is included in the Thailand Tour Package.\n\nThe package also includes an English-speaking guide throughout the scheduled sightseeing activities.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "difference between packages",
          "package comparison",
          "which package",
          "which one is better",
          "package 1 or package 2",
        ],

        response:
          "There is currently one package option available for the Bangkok Pattaya Phuket Tour.\n\nPackage 1:\n• 6 Nights / 7 Days\n• ₹92,000 per person\n• 4-star accommodation\n• Bangkok\n• Pattaya\n• Phuket\n• Phi Phi Island\n• International return flights\n• Domestic Bangkok–Phuket–Bangkok flights\n• Meals\n• AC transportation\n• Tour manager and English-speaking guide\n\nFor the latest package options, please contact Riya Tours & Travels.",
      },
    },
  },
  {
    id: 28,

    topic: "Bangkok Pattaya Phuket Krabi Tour",

    keywords: [
      "bangkok",
      "pattaya",
      "phuket",
      "krabi",
      "bangkok pattaya phuket krabi",
      "bangkok pattaya phuket krabi tour",
      "thailand",
      "thailand tour",
      "thailand package",
      "thailand tour package",
      "bangkok package",
      "pattaya package",
      "phuket package",
      "krabi package",
      "bangkok tour",
      "pattaya tour",
      "phuket tour",
      "krabi tour",
      "thailand price",
      "thailand package price",
      "tour price",
      "package price",
      "thailand itinerary",
      "bangkok itinerary",
      "pattaya itinerary",
      "phuket itinerary",
      "krabi itinerary",
      "thailand sightseeing",
      "thailand holiday",
      "thailand holiday package",
      "international tour",
      "international package",

      "coral island",
      "coral island tour",
      "coral island pattaya",
      "safari world",
      "safari world bangkok",
      "marine park",
      "chao phraya cruise",
      "chao phraya princess cruise",
      "chaophraya cruise",
      "dinner cruise",
      "phi phi island",
      "phi phi island tour",
      "krabi 4 island",
      "4 island tour",
      "krabi four island tour",
      "krabi sightseeing",
      "krabi beaches",
      "phuket old town",
      "promthep cape",
      "chalong temple",
      "golden temple",
      "golden buddha temple",
      "marble temple",
      "gems gallery",
      "alcazar show",
      "walking street",
      "big buddha",
      "sriracha tiger zoo",

      "bangkok flight",
      "phuket flight",
      "krabi flight",
      "thailand flight",
      "international flight",
      "kolkata bangkok",
      "bangkok phuket",
      "phuket krabi",
      "krabi kolkata",
      "return flight",
      "air ticket",

      "thailand hotel",
      "bangkok hotel",
      "pattaya hotel",
      "phuket hotel",
      "krabi hotel",
      "4 star hotel",
      "thailand meals",
      "indian food",
      "indian buffet",
      "indian meals",
      "thailand transport",
      "luxury ac transport",
      "ac transportation",
      "tour manager",
      "english guide",
      "departure date",
      "departure dates",
      "22 december 2026",
      "22/12/2026",
    ],

    summary: {
      duration: "7 Nights / 8 Days",
      price: "₹92,000 per person",
      rating: "9.2",
      category: "International Tour",
      destinations: "Bangkok • Pattaya • Phuket • Krabi",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "thailand price",
          "thailand package price",
          "tour price",
          "package cost",
          "how much",
          "krabi price",
          "krabi package price",
        ],

        response:
          "Bangkok Pattaya Phuket Krabi Tour Package price is ₹92,000 per person.\n\nDuration: 7 Nights / 8 Days\nPrice: ₹92,000 per person\nRating: 9.2\n\nThe package includes 4-star accommodation, meals, luxury AC transportation, up and down air tickets, airport transfers, English-speaking guide, tour manager, entry fees and sightseeing as per the itinerary.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "thailand itinerary",
          "thailand tour plan",
          "bangkok itinerary",
          "pattaya itinerary",
          "phuket itinerary",
          "krabi itinerary",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Bangkok Pattaya Phuket Krabi Tour Itinerary\n\nDuration: 7 Nights / 8 Days\nPrice: ₹92,000 per person\n\nDay 1: Kolkata → Pattaya\nFly from Kolkata to Bangkok and transfer to Pattaya. Visit Sriracha Tiger Zoo and Big Buddha. Enjoy Alcazar Show and Walking Street. Overnight stay at Pattaya.\n\nDay 2: Coral Island Excursion\nVisit Coral Island by speed boat and enjoy beach activities. Buffet lunch, local market sightseeing and dinner. Overnight stay at Pattaya.\n\nDay 3: Pattaya → Bangkok\nTravel to Bangkok via Gems Gallery. Enjoy Bangkok city tour covering Golden Temple and Marble Temple. Overnight stay at Bangkok.\n\nDay 4: Safari World & Chao Phraya Cruise\nVisit Safari World and Marine Park with buffet lunch. Evening Chao Phraya Princess Dinner Cruise. Overnight stay at Bangkok.\n\nDay 5: Bangkok → Phuket\nFly to Phuket and visit Chalong Temple, Phuket Old Town and Promthep Cape. Overnight stay at Phuket.\n\nDay 6: Phi Phi Island Tour\nEnjoy a full-day Phi Phi Island tour with buffet lunch on the boat. Return to Phuket for overnight stay.\n\nDay 7: Phuket → Krabi\nTransfer to Krabi by road and enjoy the Krabi 4 Island Tour with lunch. Overnight stay at Krabi.\n\nDay 8: Krabi → Kolkata\nVisit Krabi local sightseeing spots and transfer to Krabi International Airport for the return flight to India.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "thailand sightseeing",
          "thailand attractions",
          "tourist places",
          "what will we see",
          "bangkok sightseeing",
          "pattaya sightseeing",
          "phuket sightseeing",
          "krabi sightseeing",
        ],

        response:
          "Major Attractions Covered:\n\nPattaya:\n• Sriracha Tiger Zoo\n• Big Buddha\n• Alcazar Show\n• Walking Street\n• Coral Island\n• Local market\n\nBangkok:\n• Gems Gallery\n• Golden Temple\n• Marble Temple\n• Safari World\n• Marine Park\n• Chao Phraya Princess Dinner Cruise\n\nPhuket:\n• Chalong Temple\n• Phuket Old Town\n• Promthep Cape\n• Phi Phi Island\n\nKrabi:\n• Krabi 4 Island Tour\n• Krabi local sightseeing\n\nThe tour combines beaches, islands, temples, wildlife, city sightseeing, entertainment and tropical island experiences.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "thailand inclusions",
          "thailand included",
          "krabi inclusions",
        ],

        response:
          "Package Inclusions:\n\n• 4-star accommodation\n• Breakfast, lunch and dinner\n• Indian buffet meals\n• Luxury AC transportation\n• Water bottle\n• Tour manager from Kolkata\n• Up and down air tickets\n• English-speaking guide\n• Entry fees as per itinerary\n• Airport transfers\n• All sightseeing mentioned in the itinerary",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "thailand exclusions",
          "thailand excluded",
          "krabi exclusions",
        ],

        response:
          "Package Exclusions:\n\n• Personal expenses\n• Travel insurance\n• Tips and porter charges\n• Additional water sports\n• Extra meals not mentioned\n• Any item not mentioned in the inclusions\n\nAdditional activities and personal expenses will be charged separately.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "thailand booking",
          "thailand contact",
          "krabi booking",
          "bangkok booking",
          "pattaya booking",
          "phuket booking",
        ],

        response:
          "For booking, availability, hotel options, departure date and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Bangkok Pattaya Phuket Krabi Tour\nDuration: 7 Nights / 8 Days\nPrice: ₹92,000 per person\nDeparture Date: 22/12/2026\n\nPlease confirm the latest availability before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "thailand destinations",
          "thailand route",
          "tour route",
          "bangkok pattaya",
          "pattaya phuket",
          "phuket krabi",
        ],

        response:
          "Destinations Covered:\n\n• Bangkok\n• Pattaya\n• Phuket\n• Krabi\n\nMajor island destinations and excursions include:\n• Coral Island\n• Phi Phi Island\n• Krabi 4 Island Tour\n\nThe tour starts from Kolkata and covers Pattaya, Bangkok, Phuket and Krabi before returning to India.",
      },

      bangkok: {
        keywords: [
          "bangkok",
          "bangkok tour",
          "bangkok package",
          "bangkok sightseeing",
          "bangkok attractions",
          "bangkok places",
        ],

        response:
          "Bangkok is one of the main destinations of the Thailand Tour.\n\nMajor Attractions:\n• Gems Gallery\n• Golden Temple\n• Marble Temple\n• Safari World\n• Marine Park\n• Chao Phraya Princess Dinner Cruise\n\nBangkok is covered after the Pattaya portion of the tour and before continuing to Phuket.",
      },

      pattaya: {
        keywords: [
          "pattaya",
          "pattaya tour",
          "pattaya package",
          "pattaya sightseeing",
          "pattaya attractions",
          "pattaya places",
        ],

        response:
          "Pattaya is covered during the first two days of the Thailand Tour.\n\nMajor Attractions:\n• Sriracha Tiger Zoo\n• Big Buddha\n• Alcazar Show\n• Walking Street\n• Coral Island\n• Local market\n\nOvernight stays are planned at Pattaya on Days 1 and 2.",
      },

      phuket: {
        keywords: [
          "phuket",
          "phuket tour",
          "phuket package",
          "phuket sightseeing",
          "phuket attractions",
          "phuket places",
          "phuket old town",
          "promthep cape",
          "chalong temple",
        ],

        response:
          "Phuket is one of the major destinations of the Thailand Tour.\n\nMajor Attractions:\n• Chalong Temple\n• Phuket Old Town\n• Promthep Cape\n• Phi Phi Island\n\nThe tour reaches Phuket on Day 5 and includes a Phi Phi Island excursion on Day 6.",
      },

      krabi: {
        keywords: [
          "krabi",
          "krabi tour",
          "krabi package",
          "krabi sightseeing",
          "krabi attractions",
          "krabi places",
          "krabi 4 island",
          "4 island tour",
          "four island tour",
          "krabi island tour",
        ],

        response:
          "Krabi is the final major destination of the Thailand Tour.\n\nMajor Attractions:\n• Krabi 4 Island Tour\n• Krabi local sightseeing\n• Tropical beaches and islands\n\nThe tour travels from Phuket to Krabi on Day 7 and includes the 4 Island Tour with lunch. On Day 8, guests visit Krabi local sightseeing spots before transferring to Krabi International Airport.",
      },

      coralIsland: {
        keywords: [
          "coral island",
          "coral island tour",
          "coral island pattaya",
          "coral island excursion",
          "speed boat",
          "pattaya island",
        ],

        response:
          "Coral Island is included on Day 2 of the Thailand Tour.\n\nThe excursion is conducted by speed boat and includes beach activities and buffet lunch.\n\nLocal market sightseeing and dinner are also included on Day 2.\n\nCoral Island is included in the package price.",
      },

      phiPhiIsland: {
        keywords: [
          "phi phi island",
          "phi phi",
          "phi phi island tour",
          "phi phi excursion",
          "phuket island tour",
        ],

        response:
          "Phi Phi Island is included as a full-day excursion from Phuket on Day 6.\n\nThe tour includes a boat excursion and buffet lunch on the boat.\n\nAfter the island tour, guests return to Phuket for an overnight stay.",
      },

      fourIsland: {
        keywords: [
          "4 island",
          "4 islands",
          "four island",
          "four islands",
          "krabi 4 island",
          "krabi four island",
          "krabi 4 island tour",
          "krabi island tour",
        ],

        response:
          "The Krabi 4 Island Tour is included on Day 7.\n\nGuests travel from Phuket to Krabi and enjoy the 4 Island Tour with lunch.\n\nThe island excursion is included in the tour itinerary.",
      },

      safariWorld: {
        keywords: [
          "safari world",
          "safari world bangkok",
          "marine park",
          "bangkok safari",
          "wildlife",
          "wildlife tour",
        ],

        response:
          "Safari World and Marine Park are included on Day 4 in Bangkok.\n\nThe visit includes Safari World, Marine Park and buffet lunch.\n\nEntry fees as per the itinerary are included in the package.",
      },

      cruise: {
        keywords: [
          "cruise",
          "chao phraya cruise",
          "chao phraya princess cruise",
          "chaophraya cruise",
          "dinner cruise",
          "bangkok cruise",
        ],

        response:
          "The Chao Phraya Princess Dinner Cruise is included on Day 4.\n\nGuests can enjoy an evening cruise experience with dinner along the Chao Phraya River.\n\nThe cruise is included in the package itinerary.",
      },

      temples: {
        keywords: [
          "temple",
          "temples",
          "bangkok temple",
          "golden temple",
          "golden buddha",
          "golden buddha temple",
          "marble temple",
          "chalong temple",
        ],

        response:
          "The Thailand Tour includes visits to several important temples.\n\nBangkok:\n• Golden Temple\n• Marble Temple\n\nPhuket:\n• Chalong Temple\n\nThese temple visits are included as part of the sightseeing itinerary.",
      },

      hotels: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "thailand hotel",
          "bangkok hotel",
          "pattaya hotel",
          "phuket hotel",
          "krabi hotel",
          "4 star hotel",
        ],

        response:
          "The Thailand Tour includes 4-star hotel accommodation.\n\nHotel Details:\n\nPattaya:\nThe Beverly Hotel Pattaya (4 Star)\n\nBangkok:\nBangkok Palace (4 Star)\n\nPhuket:\nThe Fisherman's Harbour Beach Resort (4 Star)\n\nKrabi:\nIbis Styles Ao Nang (4 Star)\n\nFor room availability and the latest hotel confirmation, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "indian food",
          "indian buffet",
          "indian meals",
          "thailand meals",
          "food included",
        ],

        response:
          "Meals included in the Thailand Tour are:\n\n• Breakfast\n• Lunch\n• Dinner\n• Indian buffet meals\n• Buffet lunch during selected excursions\n• Water bottle\n\nExtra meals and personal food expenses outside the included meals are not covered.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "ac",
          "ac transport",
          "luxury transport",
          "transfer",
          "thailand transport",
        ],

        response:
          "Luxury AC transportation is included throughout the Thailand Tour as per the itinerary.\n\nThe package includes:\n• Airport transfers\n• Inter-city transfers\n• Local sightseeing transportation\n• Kolkata airport transfer as applicable\n• Pattaya transfers\n• Bangkok transfers\n• Phuket transfers\n• Phuket to Krabi road transfer\n• Krabi airport transfer",
      },

      flights: {
        keywords: [
          "flight",
          "flights",
          "air ticket",
          "air tickets",
          "international flight",
          "domestic flight",
          "kolkata bangkok",
          "bangkok flight",
          "phuket flight",
          "krabi flight",
          "return flight",
          "up and down ticket",
        ],

        response:
          "Air tickets are included in the Thailand Tour Package.\n\nThe package includes up and down air tickets as mentioned in the itinerary.\n\nThe tour starts with a flight from Kolkata to Bangkok and ends with a return flight from Krabi International Airport to India.\n\nFor exact flight routing and timings, please contact Riya Tours & Travels.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 4-star hotel accommodation\n• Indian buffet meals\n• Luxury AC transportation\n• Up and down air tickets\n• Airport transfers\n• English-speaking guide\n• Tour manager from Kolkata\n• Water bottle\n• Entry fees as per itinerary\n• Coral Island tour\n• Safari World & Marine Park\n• Chao Phraya Princess Dinner Cruise\n• Phi Phi Island tour\n• Krabi 4 Island Tour",
      },

      activities: {
        keywords: [
          "activities",
          "things to do",
          "adventure",
          "water sports",
          "island activities",
          "thailand activities",
          "krabi activities",
        ],

        response:
          "Major Activities Included:\n\n• Coral Island excursion\n• Speed boat ride\n• Alcazar Show\n• Safari World & Marine Park\n• Chao Phraya Princess Dinner Cruise\n• Phi Phi Island tour\n• Krabi 4 Island Tour\n• Beach activities\n• City sightseeing\n• Temple visits\n\nAdditional water sports are available at extra cost.",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "thailand package 1",
          "bangkok package 1",
          "8 days",
          "7 nights",
          "krabi package",
        ],

        response:
          "Bangkok Pattaya Phuket Krabi Tour Package 1:\n\nDuration: 7 Nights / 8 Days\nPrice: ₹92,000 per person\nRating: 9.2\n\nDestinations:\nBangkok, Pattaya, Phuket and Krabi.\n\nMajor attractions include Coral Island, Safari World, Chao Phraya Dinner Cruise, Phi Phi Island and Krabi 4 Island Tour.\n\nThe package includes 4-star accommodation, meals, luxury AC transportation, air tickets, airport transfers, English-speaking guide, tour manager and sightseeing.",
      },

      departureDates: {
        keywords: [
          "departure date",
          "departure dates",
          "travel date",
          "travel dates",
          "thailand departure",
          "thailand departure dates",
          "when is the tour",
          "tour dates",
          "available dates",
          "22 december 2026",
          "22/12/2026",
        ],

        response:
          "Available Departure Date for the Bangkok Pattaya Phuket Krabi Tour:\n\n• 22/12/2026\n\nPlease contact Riya Tours & Travels to confirm the latest availability before booking.",
      },

      tourManager: {
        keywords: [
          "tour manager",
          "manager",
          "tour leader",
          "escort",
          "kolkata tour manager",
          "guide",
          "english guide",
        ],

        response:
          "A tour manager from Kolkata is included in the Thailand Tour Package.\n\nThe package also includes an English-speaking guide for the scheduled sightseeing activities.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "difference between packages",
          "package comparison",
          "which package",
          "which one is better",
          "package 1 or package 2",
        ],

        response:
          "There is currently one package option available for the Bangkok Pattaya Phuket Krabi Tour.\n\nPackage 1:\n• 7 Nights / 8 Days\n• ₹92,000 per person\n• 4-star accommodation\n• Bangkok\n• Pattaya\n• Phuket\n• Krabi\n• Coral Island\n• Phi Phi Island\n• Krabi 4 Island Tour\n• Air tickets\n• Indian buffet meals\n• Luxury AC transportation\n• Tour manager and English-speaking guide\n\nFor the latest package options, please contact Riya Tours & Travels.",
      },
    },
  },
  {
    id: 29,

    topic: "Kazakhstan & Uzbekistan Tour",

    keywords: [
      "kazakhstan",
      "uzbekistan",
      "kazakhstan tour",
      "uzbekistan tour",
      "kazakhstan uzbekistan",
      "kazakhstan uzbekistan tour",
      "kazakhstan package",
      "uzbekistan package",
      "kazakhstan uzbekistan package",
      "kazakhstan price",
      "uzbekistan price",
      "kazakhstan package price",
      "uzbekistan package price",
      "kazakhstan duration",
      "uzbekistan duration",
      "kazakhstan itinerary",
      "uzbekistan itinerary",
      "central asia tour",
      "central asia package",
      "central asia holiday",

      "almaty",
      "almaty tour",
      "almaty package",
      "almaty sightseeing",
      "almaty city tour",
      "golden square",
      "28 panfilov guardsmen",
      "eternal flame",
      "ascension cathedral",
      "green bazaar",
      "arbat shopping street",
      "rakhat chocolate factory",

      "charyn canyon",
      "charyn canyon tour",
      "charyn canyon package",
      "valley of castles",
      "kolsai lake",
      "kolsai lake tour",
      "kolsai lake package",

      "kok tobe",
      "kok tobe cable car",
      "mede u",
      "medeu",
      "mede u ice skating rink",
      "shymbulak",
      "shymbulak mountain resort",
      "shymbulak cable car",

      "tashkent",
      "tashkent tour",
      "tashkent package",
      "tashkent sightseeing",
      "tashkent city tour",
      "magic city park",
      "hazrati imam",
      "barak khan madrasa",
      "minor mosque",
      "monument of courage",
      "tashkent metro",
      "tashkent tv tower",
      "repression memorial",
      "chorsu bazaar",
      "tashkent city mall",
      "tashkent city park",

      "amirsoy",
      "amirsoy mountain",
      "amirsoy mountain resort",
      "amirsoy tour",
      "amirsoy chair lift",
      "chimgan mountains",
      "charvak lake",

      "samarkand",
      "samarkand tour",
      "samarkand package",
      "samarkand sightseeing",
      "samarkand day trip",
      "registan square",
      "gur e amir",
      "gur-e-amir",
      "ulug beg madrasa",
      "sher dor madrasa",
      "tilla kari madrasa",
      "bibi khanum mosque",
      "siab bazaar",
      "konigil village",
      "shahi zinda",
      "hazrati hizir mosque",

      "kazakhstan hotel",
      "uzbekistan hotel",
      "kazakhstan meals",
      "uzbekistan meals",
      "kazakhstan transport",
      "uzbekistan transport",
      "kazakhstan flight",
      "uzbekistan flight",
      "airport transfer",
      "bullet train",
      "samarkand bullet train",
      "visa",
      "uzbekistan visa",
      "cable car",
      "mountain tour",
      "heritage tour",
      "silk route",
      "cultural tour",
      "central asia holiday",
    ],

    summary: {
      duration: "9 Nights / 10 Days",
      price: "₹1,88,000 per person",
      rating: "9.3",
      category: "International Tour",
      destinations:
        "Almaty • Charyn Canyon • Kolsai Lake • Kok Tobe • Medeu • Shymbulak • Tashkent • Amirsoy • Samarkand",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "kazakhstan price",
          "uzbekistan price",
          "kazakhstan package price",
          "uzbekistan package price",
          "tour price",
          "package cost",
          "how much",
          "central asia price",
        ],

        response:
          "Kazakhstan & Uzbekistan Tour Package pricing starts from ₹1,88,000 per person.\n\nPackage 1:\nDuration: 9 Nights / 10 Days\nPrice: ₹1,88,000 per person\nRating: 9.3\n\nThe package covers Kazakhstan and Uzbekistan with 4-star accommodation, all meals, flights, airport transfers, sightseeing, cable cars, Samarkand bullet train and Uzbekistan visa.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "kazakhstan itinerary",
          "uzbekistan itinerary",
          "kazakhstan tour plan",
          "uzbekistan tour plan",
          "package itinerary",
          "tour plan",
          "central asia itinerary",
        ],

        response:
          "Kazakhstan & Uzbekistan Tour Itinerary\n\nDuration: 9 Nights / 10 Days\nPrice: ₹1,88,000 per person\n\nDay 1: Kolkata → Almaty\nArrive at Almaty International Airport, transfer to hotel, check in and relax. Overnight stay at Almaty.\n\nDay 2: Almaty City Tour\nVisit Golden Square, Park of 28 Panfilov Guardsmen, Eternal Flame, Ascension Cathedral, Green Bazaar, Arbat Shopping Street and Rakhat Chocolate Factory. Overnight stay at Almaty.\n\nDay 3: Charyn Canyon & Kolsai Lake\nExplore Charyn Canyon, Valley of Castles and Kolsai Lake surrounded by beautiful mountain scenery. Overnight stay at Almaty.\n\nDay 4: Kok Tobe • Medeu • Shymbulak\nEnjoy Kok Tobe cable car, visit Medeu Ice Skating Rink and spend time at Shymbulak Mountain Resort. Overnight stay at Almaty.\n\nDay 5: Almaty → Tashkent\nFly to Tashkent and visit Magic City Park in the evening. Overnight stay at Tashkent.\n\nDay 6: Amirsoy Mountain Tour\nVisit Amirsoy Mountain Resort, Chimgan Mountains and Charvak Lake. Enjoy panoramic mountain views. Overnight stay at Tashkent.\n\nDay 7: Samarkand Day Excursion\nTravel by bullet train to Samarkand. Visit Gur-e-Amir Mausoleum, Registan Square, Ulug Beg Madrasa, Sher-Dor Madrasa, Tilla-Kari Madrasa, Bibi Khanum Mosque, Siab Bazaar, Konigil Village, Shahi Zinda and Hazrati Hizir Mosque. Return to Tashkent for overnight stay.\n\nDay 8: Tashkent City Tour\nVisit Hazrati Imam Complex, Barak Khan Madrasa, Minor Mosque, Monument of Courage, Tashkent Metro, TV Tower from outside and Memorial Complex of Repression. Overnight stay at Tashkent.\n\nDay 9: Tashkent Shopping Tour\nExplore Chorsu Bazaar, Tashkent City Mall and Tashkent City Park for shopping and leisure. Overnight stay at Tashkent.\n\nDay 10: Departure from Tashkent\nAfter breakfast transfer to the airport for your return flight with unforgettable memories of Kazakhstan and Uzbekistan.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "kazakhstan sightseeing",
          "uzbekistan sightseeing",
          "tourist places",
          "what will we see",
          "central asia sightseeing",
        ],

        response:
          "Major Attractions Covered:\n\nAlmaty:\n• Golden Square\n• Park of 28 Panfilov Guardsmen\n• Eternal Flame\n• Ascension Cathedral\n• Green Bazaar\n• Arbat Shopping Street\n• Rakhat Chocolate Factory\n\nCharyn Canyon & Kolsai:\n• Charyn Canyon\n• Valley of Castles\n• Kolsai Lake\n\nAlmaty Mountains:\n• Kok Tobe\n• Kok Tobe Cable Car\n• Medeu Ice Skating Rink\n• Shymbulak Mountain Resort\n• Shymbulak Cable Car\n\nTashkent:\n• Magic City Park\n• Hazrati Imam Complex\n• Barak Khan Madrasa\n• Minor Mosque\n• Monument of Courage\n• Tashkent Metro\n• Chorsu Bazaar\n• Tashkent City Mall\n• Tashkent City Park\n\nAmirsoy:\n• Amirsoy Mountain Resort\n• Chimgan Mountains\n• Charvak Lake\n• Amirsoy Chair Lift\n\nSamarkand:\n• Gur-e-Amir Mausoleum\n• Registan Square\n• Ulug Beg Madrasa\n• Sher-Dor Madrasa\n• Tilla-Kari Madrasa\n• Bibi Khanum Mosque\n• Siab Bazaar\n• Konigil Village\n• Shahi Zinda\n• Hazrati Hizir Mosque\n\nThe tour combines mountain landscapes, heritage sites, cultural attractions, shopping and Silk Route experiences.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "kazakhstan inclusions",
          "uzbekistan inclusions",
          "kazakhstan included",
          "uzbekistan included",
        ],

        response:
          "Package Inclusions:\n\n• 4 nights accommodation in Almaty in 4-star hotel\n• 5 nights accommodation in Tashkent in 4-star hotel\n• All meals throughout the tour\n• English-speaking guide\n• Airport transfers\n• Luxury coach transportation\n• Kok Tobe cable car\n• Shymbulak cable car\n• Charyn Canyon tour\n• Kolsai Lake tour\n• Amirsoy chair lift\n• Konigil Village entry\n• Registan entrance ticket\n• Samarkand bullet train ticket\n• Uzbekistan visa\n• Tips\n• 2 bottles of water per person per day",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "kazakhstan exclusions",
          "uzbekistan exclusions",
          "kazakhstan excluded",
          "uzbekistan excluded",
        ],

        response:
          "Package Exclusions:\n\n• Personal expenses\n• Travel insurance\n• Additional snacks and beverages\n• Optional activities not mentioned in the itinerary\n• Any item not specifically mentioned in the inclusions",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "kazakhstan booking",
          "uzbekistan booking",
          "kazakhstan contact",
          "uzbekistan contact",
        ],

        response:
          "For booking, availability, hotel options, visa details and the latest package information, please contact Riya Tours & Travels.\n\nPackage: Kazakhstan & Uzbekistan Tour\nDuration: 9 Nights / 10 Days\nPrice: ₹1,88,000 per person\nRating: 9.3\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "kazakhstan destinations",
          "uzbekistan destinations",
          "kazakhstan route",
          "uzbekistan route",
          "tour route",
          "central asia destinations",
        ],

        response:
          "Destinations Covered:\n\nKazakhstan:\n• Almaty\n• Charyn Canyon\n• Kolsai Lake\n• Kok Tobe\n• Medeu\n• Shymbulak\n\nUzbekistan:\n• Tashkent\n• Amirsoy\n• Chimgan Mountains\n• Charvak Lake\n• Samarkand\n\nThe tour combines mountain destinations, cultural landmarks, historic Silk Route attractions and modern city experiences.",
      },

      almaty: {
        keywords: [
          "almaty",
          "almaty tour",
          "almaty package",
          "almaty sightseeing",
          "almaty city tour",
          "golden square",
          "28 panfilov guardsmen",
          "eternal flame",
          "ascension cathedral",
          "green bazaar",
          "arbat shopping street",
          "rakhat chocolate factory",
        ],

        response:
          "Almaty is the main destination in Kazakhstan and is covered during the first four days of the tour.\n\nMajor Attractions:\n• Golden Square\n• Park of 28 Panfilov Guardsmen\n• Eternal Flame\n• Ascension Cathedral\n• Green Bazaar\n• Arbat Shopping Street\n• Rakhat Chocolate Factory\n• Kok Tobe\n• Medeu\n• Shymbulak\n\nThe package includes 4 nights of accommodation in Almaty in a 4-star hotel.",
      },

      charyn: {
        keywords: [
          "charyn",
          "charyn canyon",
          "charyn canyon tour",
          "charyn canyon package",
          "valley of castles",
          "canyon",
        ],

        response:
          "Charyn Canyon is one of the major natural attractions of the Kazakhstan & Uzbekistan Tour.\n\nThe tour includes:\n• Charyn Canyon\n• Valley of Castles\n\nCharyn Canyon is covered on Day 3 along with Kolsai Lake.\n\nTransportation and the Charyn Canyon tour are included in the package.",
      },

      kolsai: {
        keywords: [
          "kolsai",
          "kolsai lake",
          "kolsai lake tour",
          "kolsai lake package",
          "lake",
        ],

        response:
          "Kolsai Lake is included in the Kazakhstan portion of the tour.\n\nThe Kolsai Lake excursion is scheduled on Day 3 together with Charyn Canyon and the Valley of Castles.\n\nThe package includes transportation for the excursion.",
      },

      mountains: {
        keywords: [
          "mountain",
          "mountains",
          "mountain tour",
          "kok tobe",
          "kok tobe cable car",
          "medeu",
          "mede u",
          "mede u ice skating rink",
          "shymbulak",
          "shymbulak mountain resort",
          "shymbulak cable car",
        ],

        response:
          "The tour includes several mountain experiences in Kazakhstan.\n\nKok Tobe:\n• Kok Tobe Mountain\n• Kok Tobe Cable Car\n\nMedeu:\n• Medeu Ice Skating Rink\n\nShymbulak:\n• Shymbulak Mountain Resort\n• Shymbulak Cable Car\n\nIn Uzbekistan, the tour also includes Amirsoy Mountain Resort, Chimgan Mountains and Charvak Lake.",
      },

      tashkent: {
        keywords: [
          "tashkent",
          "tashkent tour",
          "tashkent package",
          "tashkent sightseeing",
          "tashkent city tour",
          "magic city",
          "hazrati imam",
          "barak khan madrasa",
          "minor mosque",
          "monument of courage",
          "tashkent metro",
          "tashkent tv tower",
          "repression memorial",
          "chorsu bazaar",
          "tashkent city mall",
          "tashkent city park",
        ],

        response:
          "Tashkent is the main destination in Uzbekistan and the tour includes 5 nights of accommodation here.\n\nMajor Attractions:\n• Magic City Park\n• Hazrati Imam Complex\n• Barak Khan Madrasa\n• Minor Mosque\n• Monument of Courage\n• Tashkent Metro\n• TV Tower from outside\n• Memorial Complex of Repression\n• Chorsu Bazaar\n• Tashkent City Mall\n• Tashkent City Park\n\nTashkent is covered from Day 5 until departure on Day 10.",
      },

      amirsoy: {
        keywords: [
          "amirsoy",
          "amirsoy mountain",
          "amirsoy mountain resort",
          "amirsoy tour",
          "amirsoy chair lift",
          "chimgan",
          "chimgan mountains",
          "charvak",
          "charvak lake",
        ],

        response:
          "Amirsoy is one of the major mountain attractions in Uzbekistan.\n\nThe Amirsoy Mountain Tour includes:\n• Amirsoy Mountain Resort\n• Amirsoy Chair Lift\n• Chimgan Mountains\n• Charvak Lake\n\nThis excursion is scheduled on Day 6 of the tour.\n\nThe Amirsoy chair lift is included in the package.",
      },

      samarkand: {
        keywords: [
          "samarkand",
          "samarkand tour",
          "samarkand package",
          "samarkand sightseeing",
          "samarkand day trip",
          "registan square",
          "gur e amir",
          "gur-e-amir",
          "ulug beg madrasa",
          "sher dor madrasa",
          "tilla kari madrasa",
          "bibi khanum mosque",
          "siab bazaar",
          "konigil village",
          "shahi zinda",
          "hazrati hizir mosque",
        ],

        response:
          "Samarkand is covered as a full-day excursion from Tashkent on Day 7.\n\nMajor Attractions:\n• Gur-e-Amir Mausoleum\n• Registan Square\n• Ulug Beg Madrasa\n• Sher-Dor Madrasa\n• Tilla-Kari Madrasa\n• Bibi Khanum Mosque\n• Siab Bazaar\n• Konigil Village\n• Shahi Zinda from outside\n• Hazrati Hizir Mosque\n\nThe tour includes Samarkand bullet train tickets and Registan entrance ticket.\n\nGuests return to Tashkent after the Samarkand excursion.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "kazakhstan hotel",
          "uzbekistan hotel",
          "kazakhstan accommodation",
          "uzbekistan accommodation",
          "4 star hotel",
        ],

        response:
          "The Kazakhstan & Uzbekistan Tour includes 4-star hotel accommodation.\n\nKazakhstan:\n• 4 nights in Almaty\n\nUzbekistan:\n• 5 nights in Tashkent\n\nThe package provides comfortable 4-star accommodation throughout the tour.\n\nFor exact hotel names, room availability and room category, please contact Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "tea",
          "kazakhstan meals",
          "uzbekistan meals",
          "all meals",
          "food included",
        ],

        response:
          "All meals are included throughout the Kazakhstan & Uzbekistan Tour.\n\nThe package includes:\n• Breakfast\n• Lunch\n• Dinner\n• All meals throughout the tour\n• 2 bottles of water per person per day\n\nAdditional snacks and beverages are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "coach",
          "luxury coach",
          "transfer",
          "airport transfer",
          "kazakhstan transport",
          "uzbekistan transport",
        ],

        response:
          "Luxury coach transportation is included throughout the Kazakhstan & Uzbekistan Tour.\n\nThe package also includes:\n• Airport transfers\n• Transfers between destinations\n• Luxury coach transportation\n• Sightseeing transportation\n\nThe tour also includes Samarkand bullet train transportation for the Day 7 excursion.",
      },

      flight: {
        keywords: [
          "flight",
          "flights",
          "air ticket",
          "air tickets",
          "plane",
          "airport",
          "kazakhstan flight",
          "uzbekistan flight",
          "international flight",
          "return flight",
        ],

        response:
          "The tour includes flight journeys between the destinations.\n\nDay 1:\nKolkata → Almaty\n\nDay 5:\nAlmaty → Tashkent\n\nDay 10:\nDeparture from Tashkent for the return journey.\n\nAirport transfers are included in the package.\n\nFor exact flight schedules, timings and airline details, please contact Riya Tours & Travels.",
      },

      visa: {
        keywords: [
          "visa",
          "uzbekistan visa",
          "kazakhstan visa",
          "visa included",
          "visa cost",
          "visa charges",
          "central asia visa",
        ],

        response:
          "Uzbekistan visa is included in the Kazakhstan & Uzbekistan Tour package.\n\nThe package specifically includes:\n• Uzbekistan visa\n\nFor current visa requirements, passport validity requirements and Kazakhstan entry formalities, please contact Riya Tours & Travels before booking.",
      },

      cablecar: {
        keywords: [
          "cable car",
          "cablecar",
          "kok tobe cable car",
          "shymbulak cable car",
          "chair lift",
          "amirsoy chair lift",
        ],

        response:
          "Cable car and chair lift experiences are included in the tour.\n\nIncluded:\n• Kok Tobe Cable Car\n• Shymbulak Cable Car\n• Amirsoy Chair Lift\n\nThese activities are part of the Kazakhstan and Uzbekistan mountain excursions.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 4-star hotel accommodation\n• All meals throughout the tour\n• English-speaking guide\n• Airport transfers\n• Luxury coach transportation\n• Kok Tobe cable car\n• Shymbulak cable car\n• Charyn Canyon tour\n• Kolsai Lake tour\n• Amirsoy chair lift\n• Konigil Village entry\n• Registan entrance ticket\n• Samarkand bullet train ticket\n• Uzbekistan visa\n• Tips\n• 2 bottles of water per person per day",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "kazakhstan package 1",
          "uzbekistan package 1",
          "10 days",
          "9 nights",
          "kazakhstan uzbekistan package 1",
        ],

        response:
          "Kazakhstan & Uzbekistan Tour Package 1:\n\nDuration: 9 Nights / 10 Days\nPrice: ₹1,88,000 per person\nRating: 9.3\n\nKazakhstan:\n• Almaty\n• Charyn Canyon\n• Kolsai Lake\n• Kok Tobe\n• Medeu\n• Shymbulak\n\nUzbekistan:\n• Tashkent\n• Amirsoy\n• Chimgan Mountains\n• Charvak Lake\n• Samarkand\n\nThe package includes 4-star accommodation, all meals, airport transfers, luxury coach transportation, cable cars, chair lift, sightseeing, Uzbekistan visa and Samarkand bullet train.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "difference between packages",
          "package comparison",
          "which package",
          "which one is better",
        ],

        response:
          "Currently, only one Kazakhstan & Uzbekistan Tour package is available.\n\nPackage 1:\n• 9 Nights / 10 Days\n• ₹1,88,000 per person\n• Rating: 9.3\n• Kazakhstan and Uzbekistan\n• 4-star accommodation\n• All meals\n• Mountain and heritage sightseeing\n• Uzbekistan visa included\n• Samarkand bullet train included\n\nFor other package options or customized itineraries, please contact Riya Tours & Travels.",
      },

      departure: {
        keywords: [
          "departure",
          "departure date",
          "travel date",
          "tour date",
          "dates",
          "available dates",
          "kazakhstan departure",
          "uzbekistan departure",
        ],

        response:
          "There are currently no fixed departure dates listed for the Kazakhstan & Uzbekistan Tour.\n\nDuration: 9 Nights / 10 Days\nPrice: ₹1,88,000 per person\n\nPlease contact Riya Tours & Travels for the latest departure dates, availability and booking information.",
      },
    },
  },
  {
    id: 30,

    topic: "Vietnam Tour",

    keywords: [
      "vietnam",
      "vietnam tour",
      "vietnam package",
      "vietnam tour package",
      "vietnam price",
      "vietnam package price",
      "vietnam duration",
      "vietnam itinerary",
      "vietnam sightseeing",
      "vietnam holiday",
      "vietnam holiday package",
      "vietnam travel",
      "vietnam trip",

      "hanoi",
      "hanoi tour",
      "hanoi sightseeing",
      "hanoi package",
      "hanoi old quarter",
      "hoan kiem lake",
      "hoa lo prison",

      "ninh binh",
      "ninh binh tour",
      "ninh binh sightseeing",
      "hoa lu",
      "hoa lu ancient capital",
      "trang an",
      "trang an boat ride",

      "halong bay",
      "ha long bay",
      "halong bay cruise",
      "halong cruise",
      "halong bay tour",
      "halong bay sightseeing",
      "halong cruise package",

      "danang",
      "da nang",
      "danang tour",
      "danang sightseeing",
      "danang package",
      "danang hotel",

      "hoi an",
      "hoi an tour",
      "hoi an sightseeing",
      "hoi an ancient town",
      "japanese bridge",
      "lantern boat ride",

      "ba na hills",
      "bana hills",
      "golden bridge",
      "ba na hills tour",
      "ba na hills cable car",
      "golden bridge vietnam",

      "ho chi minh city",
      "ho chi minh",
      "saigon",
      "ho chi minh tour",
      "ho chi minh sightseeing",
      "saigon tour",

      "cu chi tunnels",
      "cu chi tunnel",
      "cu chi tunnels tour",

      "mekong delta",
      "mekong delta tour",
      "mekong delta sightseeing",
      "my tho",
      "mekong boat ride",

      "vietnam flight",
      "vietnam visa",
      "vietnam hotel",
      "vietnam meals",
      "vietnam transport",
      "vietnam coach",
      "vietnam guide",
      "vietnam tour manager",
      "vietnam cruise",
      "vietnam cruise hotel",
      "vietnam cable car",
      "vietnam boat ride",
    ],

    summary: {
      duration: "7 Nights / 8 Days",
      price: "₹1,26,000 per person",
      rating: "9.4",
      category: "International Tour",
      destinations:
        "Hanoi • Ninh Binh • Halong Bay • Danang • Hoi An • Ba Na Hills • Ho Chi Minh City • Mekong Delta",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "vietnam price",
          "vietnam package price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Vietnam Tour Package pricing is ₹1,26,000 per person.\n\nPackage 1:\nDuration: 7 Nights / 8 Days\nPrice: ₹1,26,000 per person\nRating: 9.4\n\nThe package covers Hanoi, Ninh Binh, Halong Bay, Danang, Hoi An, Ba Na Hills, Ho Chi Minh City and Mekong Delta.\n\nThe package includes flights from Kolkata, Vietnam visa, hotels, meals, sightseeing, transportation, cruise and guided tours.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "vietnam itinerary",
          "vietnam tour plan",
          "vietnam schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Vietnam Tour Itinerary\n\nPackage 1: 7 Nights / 8 Days\nPrice: ₹1,26,000 per person\n\nDay 1: Kolkata → Hanoi\nBoard flight from Netaji Subhash Chandra Bose International Airport and arrive in Hanoi. Transfer to hotel. Overnight stay at Hanoi.\n\nDay 2: Ninh Binh • Hoa Lu • Trang An\nVisit Hoa Lu Ancient Capital, King Dinh Temple and King Le Temple. Enjoy a scenic Trang An boat ride through caves and limestone landscapes before returning to Hanoi.\n\nDay 3: Hanoi → Halong Bay Cruise\nTransfer to Halong Bay and board the cruise. Visit limestone caves and enjoy cruising through emerald waters. Overnight stay on the cruise with meals onboard.\n\nDay 4: Halong Bay → Hanoi City Tour\nEnjoy the morning at Halong Bay and return to Hanoi. Visit Hoa Lo Prison Museum, Hanoi Old Quarter, Hoan Kiem Lake and Turtle Tower. Overnight stay at Hanoi.\n\nDay 5: Hanoi → Danang → Hoi An\nFly to Danang and transfer to Hoi An. Explore Hoi An Ancient Town, Phuc Kien Assembly Hall, Japanese Bridge and traditional houses. Enjoy a lantern boat ride in the evening.\n\nDay 6: Ba Na Hills & Golden Bridge\nVisit Ba Na Hills by cable car. Explore Golden Bridge, Linh Ung Pagoda, French Village, Le Jardin D’amour and Fantasy Park. Return to Danang.\n\nDay 7: Danang → Ho Chi Minh City • Cu Chi Tunnels\nFly to Ho Chi Minh City and visit the historic Cu Chi Tunnels. Overnight stay at Ho Chi Minh City.\n\nDay 8: Mekong Delta • Ho Chi Minh City • Departure\nVisit My Tho and Mekong Delta. Enjoy a boat ride, local village experience, honey tea and coconut candy workshop. Complete city shopping before airport transfer for the return flight.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "vietnam sightseeing",
          "vietnam attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nHanoi:\n• Hanoi Old Quarter\n• Hoan Kiem Lake\n• Turtle Tower\n• Hoa Lo Prison Museum\n\nNinh Binh:\n• Hoa Lu Ancient Capital\n• King Dinh Temple\n• King Le Temple\n• Trang An boat ride\n\nHalong Bay:\n• Halong Bay cruise\n• Limestone caves\n• Emerald waters and scenic islands\n\nHoi An:\n• Hoi An Ancient Town\n• Phuc Kien Assembly Hall\n• Japanese Bridge\n• Traditional houses\n• Lantern boat ride\n\nBa Na Hills:\n• Golden Bridge\n• Linh Ung Pagoda\n• French Village\n• Le Jardin D’amour\n• Fantasy Park\n\nHo Chi Minh City:\n• Cu Chi Tunnels\n• City shopping\n\nMekong Delta:\n• My Tho\n• Mekong Delta boat ride\n• Local village experience\n• Honey tea experience\n• Coconut candy workshop\n\nThe tour combines heritage, culture, nature, cruise, mountain, island and city experiences.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "vietnam inclusions",
          "vietnam included",
        ],

        response:
          "Package Inclusions:\n\n• 4-star hotel accommodation on twin/double sharing basis\n• 1 night Halong Bay cruise accommodation\n• Airfare ex-Kolkata\n• Vietnam visa\n• Breakfast, lunch and dinner as per itinerary\n• AC coach transportation\n• English-speaking guide\n• Tour manager from Kolkata\n• Halong Bay cruise with meals\n• Trang An boat ride\n• Hoi An lantern boat ride\n• Ba Na Hills cable car\n• Cu Chi Tunnels excursion\n• Mekong Delta boat excursion\n• Entry fees as mentioned in itinerary\n• 2 bottles of water per person per day",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "vietnam exclusions",
          "vietnam excluded",
        ],

        response:
          "Package Exclusions:\n\n• Personal expenses\n• Travel insurance\n• Laundry charges\n• Telephone charges\n• Minibar charges\n• Optional activities not mentioned\n• Additional meals other than specified\n• Early check-in / late check-out charges\n• Expenses due to weather, flight delays, strikes, natural calamities or force majeure\n• Any item not mentioned under inclusions",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "vietnam booking",
          "vietnam contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Vietnam Tour\nDuration: 7 Nights / 8 Days\nPrice: ₹1,26,000 per person\nRating: 9.4\n\nThe package includes flights from Kolkata, Vietnam visa, accommodation, meals, sightseeing, transportation and guided tours.\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "vietnam destinations",
          "vietnam route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Hanoi\n• Ninh Binh\n• Halong Bay\n• Danang\n• Hoi An\n• Ba Na Hills\n• Ho Chi Minh City\n• Cu Chi Tunnels\n• Mekong Delta\n• My Tho\n\nThe tour covers northern, central and southern Vietnam.",
      },

      hanoi: {
        keywords: [
          "hanoi",
          "hanoi tour",
          "hanoi sightseeing",
          "hanoi package",
          "hanoi old quarter",
          "hoan kiem lake",
          "turtle tower",
          "hoa lo prison",
        ],

        response:
          "Hanoi is the starting destination of the Vietnam Tour.\n\nMajor Attractions:\n• Hanoi Old Quarter\n• Hoan Kiem Lake\n• Turtle Tower\n• Hoa Lo Prison Museum\n\nHanoi is covered on the arrival day and again during the Halong Bay return day.",
      },

      ninhbinh: {
        keywords: [
          "ninh binh",
          "ninhbinh",
          "ninh binh tour",
          "ninh binh sightseeing",
          "hoa lu",
          "hoa lu ancient capital",
          "trang an",
          "trang an boat",
          "trang an boat ride",
        ],

        response:
          "Ninh Binh is covered as a day excursion from Hanoi.\n\nMajor Attractions:\n• Hoa Lu Ancient Capital\n• King Dinh Temple\n• King Le Temple\n• Trang An boat ride\n\nThe excursion takes you through historic sites, caves and beautiful limestone landscapes before returning to Hanoi.",
      },

      halong: {
        keywords: [
          "halong",
          "halong bay",
          "ha long bay",
          "halong bay tour",
          "halong cruise",
          "halong bay cruise",
          "halong sightseeing",
          "halong bay hotel",
        ],

        response:
          "Halong Bay is one of the major highlights of the Vietnam Tour.\n\nThe package includes:\n• Halong Bay cruise\n• Limestone cave visit\n• Scenic cruising through emerald waters\n• Cruise accommodation for 1 night\n• Meals onboard the cruise\n\nThe Halong Bay cruise takes place on Day 3, followed by the return to Hanoi on Day 4.",
      },

      danang: {
        keywords: [
          "danang",
          "da nang",
          "danang tour",
          "danang package",
          "danang sightseeing",
          "danang hotel",
        ],

        response:
          "Danang is an important destination in central Vietnam.\n\nThe tour includes:\n• Danang arrival by flight from Hanoi\n• Transfer to Hoi An\n• Ba Na Hills excursion\n• Golden Bridge\n• Local sightseeing\n\nDanang is covered during Days 5 and 6 before continuing to Ho Chi Minh City.",
      },

      hoian: {
        keywords: [
          "hoi an",
          "hoi an tour",
          "hoi an package",
          "hoi an sightseeing",
          "hoi an ancient town",
          "japanese bridge",
          "phuc kien assembly hall",
          "lantern boat",
          "lantern boat ride",
        ],

        response:
          "Hoi An is known for its historic architecture and traditional atmosphere.\n\nMajor Attractions:\n• Hoi An Ancient Town\n• Phuc Kien Assembly Hall\n• Japanese Bridge\n• Traditional houses\n• Lantern boat ride\n\nHoi An is visited on Day 5 after arriving in Danang.",
      },

      bana: {
        keywords: [
          "ba na hills",
          "bana hills",
          "ba na",
          "ba na hills tour",
          "ba na hills cable car",
          "golden bridge",
          "golden bridge vietnam",
          "linh ung pagoda",
          "french village",
        ],

        response:
          "Ba Na Hills is one of the major attractions of the Vietnam Tour.\n\nMajor Attractions:\n• Golden Bridge\n• Ba Na Hills cable car\n• Linh Ung Pagoda\n• French Village\n• Le Jardin D’amour\n• Fantasy Park\n\nBa Na Hills sightseeing is scheduled on Day 6 from Danang.",
      },

      hochiminh: {
        keywords: [
          "ho chi minh",
          "ho chi minh city",
          "saigon",
          "saigon tour",
          "ho chi minh tour",
          "ho chi minh sightseeing",
          "ho chi minh package",
        ],

        response:
          "Ho Chi Minh City is the southern destination of the Vietnam Tour.\n\nThe tour includes:\n• Arrival from Danang by flight\n• Cu Chi Tunnels excursion\n• City shopping\n• Mekong Delta excursion\n\nHo Chi Minh City is covered during Days 7 and 8.",
      },

      cuchi: {
        keywords: [
          "cu chi",
          "cu chi tunnels",
          "cu chi tunnel",
          "cu chi tunnels tour",
          "cu chi sightseeing",
        ],

        response:
          "The Cu Chi Tunnels are a major historical attraction included in the Vietnam Tour.\n\nThe excursion takes place on Day 7 after arriving in Ho Chi Minh City.\n\nThe Cu Chi Tunnels provide an insight into Vietnam's wartime underground network and history.",
      },

      mekong: {
        keywords: [
          "mekong",
          "mekong delta",
          "mekong delta tour",
          "mekong delta sightseeing",
          "my tho",
          "mekong boat",
          "mekong boat ride",
        ],

        response:
          "The Mekong Delta excursion is included on the final day of the Vietnam Tour.\n\nMajor Experiences:\n• My Tho\n• Mekong Delta boat ride\n• Local village experience\n• Honey tea\n• Coconut candy workshop\n• Local shopping\n\nThe excursion is followed by airport transfer for the return flight.",
      },

      flight: {
        keywords: [
          "flight",
          "flight ticket",
          "vietnam flight",
          "air ticket",
          "airfare",
          "kolkata flight",
          "international flight",
          "domestic flight",
        ],

        response:
          "Flight travel is included in the Vietnam Tour.\n\nDeparture:\nKolkata → Hanoi by flight.\n\nDomestic Route:\nHanoi → Danang\nDanang → Ho Chi Minh City\n\nReturn:\nHo Chi Minh City → India by flight.\n\nAirfare ex-Kolkata is included in the package.",
      },

      visa: {
        keywords: [
          "visa",
          "vietnam visa",
          "visa included",
          "vietnam visa included",
          "visa cost",
        ],

        response:
          "Vietnam visa is included in the tour package.\n\nThe package includes:\n• Vietnam visa\n• Airfare ex-Kolkata\n• Airport transfers\n• Guided sightseeing\n\nPlease confirm the latest visa requirements and documentation with Riya Tours & Travels before departure.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "vietnam hotel",
          "vietnam accommodation",
        ],

        response:
          "The Vietnam Tour includes 4-star hotel accommodation on twin/double sharing basis.\n\nHotel Details:\n\nHanoi:\nMuong Thanh Grand Hanoi Centre Hotel / La Casa Hanoi Hotel\n\nHalong Bay:\nDragon Bay Cruise\n\nDanang:\nBluesun Hotel Danang\n\nHo Chi Minh City:\nRamana Hotel Saigon\n\nExact hotel allocation is subject to availability. Please confirm the final hotel details with Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "vietnam meals",
          "food included",
          "cruise meals",
        ],

        response:
          "Meals are included in the Vietnam Tour as per the itinerary.\n\nIncluded meals:\n• Breakfast\n• Lunch\n• Dinner\n• Halong Bay cruise meals\n\nAdditional meals outside the specified itinerary are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "coach",
          "ac",
          "ac coach",
          "transfer",
          "vietnam transport",
          "airport transfer",
        ],

        response:
          "AC coach transportation is included throughout the Vietnam Tour as per the itinerary.\n\nThe package also includes:\n• Airport transfers\n• Inter-city transfers\n• Sightseeing transportation\n• Tour manager from Kolkata\n• English-speaking guide\n\nFlight transfers between major destinations are also included as per the itinerary.",
      },

      cruise: {
        keywords: [
          "cruise",
          "halong cruise",
          "halong bay cruise",
          "cruise stay",
          "cruise hotel",
          "cruise accommodation",
          "cruise meals",
        ],

        response:
          "The Vietnam Tour includes 1 night of Halong Bay cruise accommodation.\n\nThe cruise includes:\n• Halong Bay sightseeing\n• Limestone cave visit\n• Scenic cruising\n• Cruise accommodation\n• Meals onboard\n\nThe Halong Bay cruise is scheduled on Day 3.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 4-star hotel accommodation\n• 1 night Halong Bay cruise accommodation\n• Airfare ex-Kolkata\n• Vietnam visa\n• Breakfast, lunch and dinner\n• AC coach transportation\n• English-speaking guide\n• Tour manager from Kolkata\n• Airport transfers\n• Trang An boat ride\n• Hoi An lantern boat ride\n• Ba Na Hills cable car\n• Cu Chi Tunnels excursion\n• Mekong Delta boat excursion\n• Entry fees as mentioned in itinerary\n• 2 bottles of water per person per day",
      },

      duration: {
        keywords: [
          "duration",
          "how many days",
          "how long",
          "days",
          "nights",
          "vietnam duration",
          "tour duration",
          "package duration",
        ],

        response:
          "Vietnam Tour Duration:\n\n7 Nights / 8 Days\n\nThe tour covers Hanoi, Ninh Binh, Halong Bay, Danang, Hoi An, Ba Na Hills, Ho Chi Minh City, Cu Chi Tunnels and Mekong Delta.",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "vietnam package 1",
          "8 days",
          "7 nights",
        ],

        response:
          "Vietnam Tour Package 1:\n\nDuration: 7 Nights / 8 Days\nPrice: ₹1,26,000 per person\nRating: 9.4\n\nDestinations:\nHanoi, Ninh Binh, Halong Bay, Danang, Hoi An, Ba Na Hills, Ho Chi Minh City, Cu Chi Tunnels and Mekong Delta.\n\nThe package includes flights, Vietnam visa, 4-star hotels, cruise accommodation, meals, transportation, sightseeing, guides and tour manager.",
      },

      water: {
        keywords: [
          "water",
          "drinking water",
          "bottle",
          "water bottle",
          "vietnam water",
        ],

        response:
          "The Vietnam Tour includes 2 bottles of water per person per day.\n\nAdditional beverages, snacks and personal drinks are not included in the package.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "package comparison",
          "which package",
          "which one is better",
        ],

        response:
          "There is currently one Vietnam Tour package available.\n\nPackage 1:\n• 7 Nights / 8 Days\n• ₹1,26,000 per person\n• Rating: 9.4\n• Hanoi\n• Ninh Binh\n• Halong Bay\n• Danang\n• Hoi An\n• Ba Na Hills\n• Ho Chi Minh City\n• Cu Chi Tunnels\n• Mekong Delta\n\nThe package includes flights, visa, 4-star accommodation, cruise stay, meals, transportation, sightseeing and guided tours.",
      },
    },
  },
  {
    id: 31,

    topic: "Vietnam Phu Quoc Tour",

    keywords: [
      "vietnam",
      "vietnam phu quoc",
      "phu quoc",
      "vietnam phu quoc tour",
      "vietnam phu quoc package",
      "phu quoc tour",
      "phu quoc package",
      "phu quoc tour package",
      "vietnam price",
      "vietnam package price",
      "phu quoc price",
      "phu quoc package price",
      "vietnam duration",
      "vietnam itinerary",
      "phu quoc itinerary",
      "vietnam sightseeing",
      "phu quoc sightseeing",
      "vietnam holiday",
      "vietnam holiday package",
      "vietnam travel",
      "vietnam trip",

      "hanoi",
      "hanoi tour",
      "hanoi sightseeing",
      "hanoi package",
      "hanoi hotel",
      "hanoi travel",

      "ninh binh",
      "ninh binh tour",
      "ninh binh sightseeing",
      "hoa lu",
      "hoa lu ancient capital",
      "king dinh temple",
      "king le temple",
      "trang an",
      "trang an boat ride",

      "halong bay",
      "ha long bay",
      "halong bay tour",
      "halong bay cruise",
      "halong day cruise",
      "sung sot cave",
      "luon cave",
      "titop island",
      "kayaking",
      "bamboo boat",
      "halong sightseeing",

      "danang",
      "da nang",
      "danang tour",
      "da nang tour",
      "danang sightseeing",
      "danang package",
      "danang hotel",

      "hoi an",
      "hoi an tour",
      "hoi an sightseeing",
      "hoi an ancient town",
      "japanese covered bridge",
      "pottery museum",
      "tam ky ancient house",
      "chua ong pagoda",
      "hoi an market",
      "lantern street",
      "lantern tour",

      "ba na hills",
      "bana hills",
      "ba na hills tour",
      "ba na hills cable car",
      "golden bridge",
      "golden bridge vietnam",
      "sun world ba na hills",
      "french village",
      "fantasy park",

      "phu quoc tour",
      "phu quoc sightseeing",
      "phu quoc island",
      "phu quoc island tour",
      "phu quoc island hopping",
      "phu quoc beaches",
      "phu quoc hotel",
      "phu quoc vacation",
      "vinpearl safari",
      "grand world",
      "coconut prison",
      "mong tay island",
      "gam ghi island",
      "may rut island",
      "hon thom",
      "hon thom island",
      "hon thom cable car",
      "sea cable car",
      "longest sea cable car",
      "aquatopia water park",
      "theme park",

      "vietnam flight",
      "vietnam flights",
      "phu quoc flight",
      "international airfare",
      "domestic flights",
      "vietnam visa",
      "vietnam hotel",
      "vietnam meals",
      "vietnam transport",
      "vietnam guide",
      "vietnam sightseeing",
      "vietnam boat ride",
      "vietnam cable car",
      "vietnam cruise",
      "vietnam island tour",
    ],

    summary: {
      duration: "7 Nights / 8 Days",
      price: "₹1,30,000 per person",
      rating: "9.5",
      category: "International Tour",
      destinations:
        "Hanoi • Ninh Binh • Halong Bay • Da Nang • Hoi An • Ba Na Hills • Phu Quoc",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "vietnam price",
          "vietnam package price",
          "phu quoc price",
          "phu quoc package price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Vietnam Phu Quoc Tour Package pricing is ₹1,30,000 per person.\n\nPackage 1:\nDuration: 7 Nights / 8 Days\nPrice: ₹1,30,000 per person\nRating: 9.5\n\nThe package covers Hanoi, Ninh Binh, Halong Bay, Da Nang, Hoi An, Ba Na Hills and Phu Quoc.\n\nThe package includes international airfare from Kolkata, domestic flights, Vietnam visa, 4-star accommodation, meals, transportation, sightseeing, Halong Bay cruise, Ba Na Hills cable car, Vinpearl Safari and Phu Quoc island tour.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "vietnam itinerary",
          "phu quoc itinerary",
          "vietnam tour plan",
          "phu quoc tour plan",
          "vietnam schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Vietnam Phu Quoc Tour Itinerary\n\nPackage 1: 7 Nights / 8 Days\nPrice: ₹1,30,000 per person\n\nDay 1: Kolkata → Hanoi\nBoard flight from Netaji Subhash Chandra Bose International Airport and arrive in Hanoi. Transfer to hotel. Overnight stay at Hanoi.\n\nDay 2: Ninh Binh Excursion\nVisit Hoa Lu Ancient Capital, King Dinh Temple and King Le Temple. Enjoy a scenic Trang An boat ride through limestone mountains, caves and rivers before returning to Hanoi.\n\nDay 3: Halong Bay Day Cruise\nEnjoy Halong Bay cruise with Sung Sot Cave, Luon Cave, kayaking or bamboo boat ride, Titop Island, swimming, hiking and sunset party. Buffet lunch included before returning to Hanoi.\n\nDay 4: Hanoi → Da Nang → Hoi An\nFly to Da Nang and visit Hoi An Ancient Town including Japanese Covered Bridge, Pottery Museum, Tam Ky Ancient House, Chua Ong Pagoda, local market and lantern streets. Return to Da Nang.\n\nDay 5: Ba Na Hills & Golden Bridge\nVisit Sun World Ba Na Hills by cable car. Explore Golden Bridge, French Village, Fantasy Park, mountain viewpoints and landscaped gardens before returning to Da Nang.\n\nDay 6: Da Nang → Phu Quoc\nFly to Phu Quoc and check in to hotel. Visit Vinpearl Safari and enjoy free time. Optional visit to Grand World in the evening.\n\nDay 7: Phu Quoc Island Tour & Hon Thom\nVisit Coconut Prison, Mong Tay Island, Gam Ghi Island, May Rut Island and Hon Thom Island. Enjoy the world's longest sea cable car ride, Aquatopia Water Park and theme park activities.\n\nDay 8: Phu Quoc Departure\nAfter breakfast, enjoy free time until transfer to Phu Quoc Airport for your onward flight. Tour ends with wonderful memories.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "vietnam sightseeing",
          "phu quoc sightseeing",
          "vietnam attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nHanoi:\n• Hanoi city\n• Hanoi hotel and local surroundings\n\nNinh Binh:\n• Hoa Lu Ancient Capital\n• King Dinh Temple\n• King Le Temple\n• Trang An boat ride\n\nHalong Bay:\n• Halong Bay\n• Sung Sot Cave\n• Luon Cave\n• Titop Island\n• Kayaking / bamboo boat ride\n• Swimming and hiking\n• Sunset party\n\nHoi An:\n• Hoi An Ancient Town\n• Japanese Covered Bridge\n• Pottery Museum\n• Tam Ky Ancient House\n• Chua Ong Pagoda\n• Local market\n• Lantern streets\n\nBa Na Hills:\n• Golden Bridge\n• Sun World Ba Na Hills\n• French Village\n• Fantasy Park\n• Mountain viewpoints\n• Landscaped gardens\n\nPhu Quoc:\n• Vinpearl Safari\n• Grand World optional visit\n• Coconut Prison\n• Mong Tay Island\n• Gam Ghi Island\n• May Rut Island\n• Hon Thom Island\n• Hon Thom cable car\n• Aquatopia Water Park\n• Theme park activities\n\nThe tour combines heritage, culture, cruise, mountains, beaches, islands and adventure experiences.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "vietnam inclusions",
          "phu quoc inclusions",
          "vietnam included",
        ],

        response:
          "Package Inclusions:\n\n• International airfare from Kolkata\n• Domestic flights within Vietnam\n• Vietnam visa\n• 7 nights accommodation in 4-star hotels\n• Daily breakfast\n• Daily lunch\n• Daily dinner\n• Private airport transfers\n• Private air-conditioned vehicle throughout the tour\n• English-speaking guide\n• All sightseeing as per itinerary\n• Halong Bay day cruise\n• Trang An boat ride\n• Hoi An lantern tour\n• Ba Na Hills cable car\n• Vinpearl Safari visit\n• Phu Quoc island hopping tour\n• Hon Thom cable car ride\n• Entrance fees as per itinerary\n• 2 bottles of mineral water per person per sightseeing day",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "vietnam exclusions",
          "phu quoc exclusions",
          "vietnam excluded",
        ],

        response:
          "Package Exclusions:\n\n• Personal expenses\n• Travel insurance\n• Laundry charges\n• Telephone charges\n• Minibar charges\n• Optional activities not mentioned\n• Additional meals other than specified\n• Early check-in / late check-out charges\n• Expenses due to weather, flight delays, strikes, natural calamities, political disturbances or force majeure\n• Any item not mentioned under inclusions",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "vietnam booking",
          "phu quoc booking",
          "vietnam contact",
          "phu quoc contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Vietnam Phu Quoc Tour\nDuration: 7 Nights / 8 Days\nPrice: ₹1,30,000 per person\nRating: 9.5\n\nThe package includes international airfare from Kolkata, domestic flights, Vietnam visa, accommodation, meals, transportation and sightseeing.\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "vietnam destinations",
          "phu quoc destinations",
          "vietnam route",
          "tour route",
        ],

        response:
          "Destinations Covered:\n\n• Hanoi\n• Ninh Binh\n• Halong Bay\n• Da Nang\n• Hoi An\n• Ba Na Hills\n• Phu Quoc\n• Hon Thom\n• Mong Tay Island\n• Gam Ghi Island\n• May Rut Island\n\nThe tour combines northern and central Vietnam with the tropical island destination of Phu Quoc.",
      },

      hanoi: {
        keywords: [
          "hanoi",
          "hanoi tour",
          "hanoi sightseeing",
          "hanoi package",
          "hanoi hotel",
          "hanoi travel",
        ],

        response:
          "Hanoi is the starting destination of the Vietnam Phu Quoc Tour.\n\nThe tour arrives in Hanoi on Day 1 and includes a Ninh Binh excursion on Day 2.\n\nHanoi is also the base for the Halong Bay day cruise on Day 3 before the tour continues to Da Nang.",
      },

      ninhbinh: {
        keywords: [
          "ninh binh",
          "ninhbinh",
          "ninh binh tour",
          "ninh binh sightseeing",
          "hoa lu",
          "hoa lu ancient capital",
          "king dinh temple",
          "king le temple",
          "trang an",
          "trang an boat",
          "trang an boat ride",
        ],

        response:
          "Ninh Binh is covered as a day excursion from Hanoi.\n\nMajor Attractions:\n• Hoa Lu Ancient Capital\n• King Dinh Temple\n• King Le Temple\n• Trang An boat ride\n\nThe excursion includes scenic limestone mountains, caves and rivers before returning to Hanoi.",
      },

      halong: {
        keywords: [
          "halong",
          "halong bay",
          "ha long bay",
          "halong bay tour",
          "halong bay cruise",
          "halong day cruise",
          "halong sightseeing",
          "sung sot cave",
          "luon cave",
          "titop island",
          "kayaking",
          "bamboo boat",
        ],

        response:
          "Halong Bay is one of the major highlights of the Vietnam Phu Quoc Tour.\n\nThe Day 3 excursion includes:\n• Halong Bay day cruise\n• Sung Sot Cave\n• Luon Cave\n• Titop Island\n• Kayaking or bamboo boat ride\n• Swimming\n• Hiking\n• Sunset party\n• Buffet lunch\n\nThe tour returns to Hanoi after the cruise.",
      },

      danang: {
        keywords: [
          "danang",
          "da nang",
          "danang tour",
          "da nang tour",
          "danang package",
          "danang sightseeing",
          "danang hotel",
        ],

        response:
          "Da Nang is the central Vietnam destination covered in the tour.\n\nThe package includes:\n• Flight from Hanoi to Da Nang\n• Hoi An excursion\n• Ba Na Hills excursion\n• Golden Bridge\n• Local transfers\n\nDa Nang is covered from Day 4 to Day 6 before the flight to Phu Quoc.",
      },

      hoian: {
        keywords: [
          "hoi an",
          "hoi an tour",
          "hoi an package",
          "hoi an sightseeing",
          "hoi an ancient town",
          "japanese covered bridge",
          "pottery museum",
          "tam ky ancient house",
          "chua ong pagoda",
          "hoi an market",
          "lantern street",
          "lantern tour",
        ],

        response:
          "Hoi An is a major heritage destination included in the Vietnam Phu Quoc Tour.\n\nMajor Attractions:\n• Hoi An Ancient Town\n• Japanese Covered Bridge\n• Pottery Museum\n• Tam Ky Ancient House\n• Chua Ong Pagoda\n• Local market\n• Lantern streets\n• Hoi An lantern tour\n\nHoi An sightseeing is scheduled on Day 4 after arriving in Da Nang.",
      },

      bana: {
        keywords: [
          "ba na hills",
          "bana hills",
          "ba na hills tour",
          "ba na hills cable car",
          "golden bridge",
          "golden bridge vietnam",
          "sun world ba na hills",
          "french village",
          "fantasy park",
          "mountain viewpoints",
        ],

        response:
          "Ba Na Hills is one of the major attractions of the Vietnam Tour.\n\nMajor Attractions:\n• Sun World Ba Na Hills\n• Golden Bridge\n• Ba Na Hills cable car\n• French Village\n• Fantasy Park\n• Mountain viewpoints\n• Landscaped gardens\n\nBa Na Hills sightseeing is scheduled on Day 5 from Da Nang.",
      },

      phuquoc: {
        keywords: [
          "phu quoc",
          "phu quoc tour",
          "phu quoc package",
          "phu quoc sightseeing",
          "phu quoc island",
          "phu quoc island tour",
          "phu quoc island hopping",
          "phu quoc beach",
          "phu quoc hotel",
          "phu quoc vacation",
          "vinpearl safari",
          "grand world",
          "coconut prison",
          "mong tay island",
          "gam ghi island",
          "may rut island",
          "hon thom",
          "hon thom island",
          "aquatopia",
        ],

        response:
          "Phu Quoc is the tropical island destination of the Vietnam Phu Quoc Tour.\n\nMajor Attractions:\n• Vinpearl Safari\n• Grand World optional visit\n• Coconut Prison\n• Mong Tay Island\n• Gam Ghi Island\n• May Rut Island\n• Hon Thom Island\n• Hon Thom cable car\n• Aquatopia Water Park\n• Theme park activities\n\nPhu Quoc is covered on Days 6, 7 and 8.",
      },

      island: {
        keywords: [
          "island",
          "islands",
          "island tour",
          "island hopping",
          "phu quoc island tour",
          "island sightseeing",
          "mong tay",
          "gam ghi",
          "may rut",
          "hon thom",
        ],

        response:
          "The Phu Quoc Island Tour is scheduled on Day 7.\n\nIslands and destinations covered:\n• Mong Tay Island\n• Gam Ghi Island\n• May Rut Island\n• Hon Thom Island\n\nThe tour also includes the Hon Thom cable car ride, Aquatopia Water Park and theme park activities.",
      },

      honthom: {
        keywords: [
          "hon thom",
          "hon thom island",
          "hon thom cable car",
          "sea cable car",
          "longest sea cable car",
          "hon thom tour",
        ],

        response:
          "Hon Thom is included in the Phu Quoc island excursion.\n\nThe package includes:\n• Hon Thom Island visit\n• Hon Thom cable car ride\n• Aquatopia Water Park\n• Theme park activities\n\nThe cable car experience is one of the highlights of the Phu Quoc tour.",
      },

      safari: {
        keywords: [
          "vinpearl safari",
          "safari",
          "phu quoc safari",
          "vinpearl",
          "safari tour",
        ],

        response:
          "Vinpearl Safari Phu Quoc is included in the package.\n\nThe safari visit is scheduled on Day 6 after arriving in Phu Quoc.\n\nThe package includes the Vinpearl Safari visit as part of the sightseeing itinerary.",
      },

      flight: {
        keywords: [
          "flight",
          "flight ticket",
          "vietnam flight",
          "phu quoc flight",
          "air ticket",
          "airfare",
          "international flight",
          "domestic flight",
          "domestic flights",
        ],

        response:
          "Flight travel is included in the Vietnam Phu Quoc Tour.\n\nInternational Route:\nKolkata → Hanoi\n\nDomestic Routes:\nHanoi → Da Nang\nDa Nang → Phu Quoc\n\nReturn:\nPhu Quoc → onward destination\n\nThe package includes international airfare from Kolkata and domestic flights within Vietnam.",
      },

      visa: {
        keywords: [
          "visa",
          "vietnam visa",
          "visa included",
          "vietnam visa included",
          "visa cost",
        ],

        response:
          "Vietnam visa is included in the tour package.\n\nThe package includes:\n• Vietnam visa\n• International airfare from Kolkata\n• Domestic flights within Vietnam\n• Airport transfers\n• Guided sightseeing\n\nPlease confirm the latest visa requirements and documentation with Riya Tours & Travels before departure.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "vietnam hotel",
          "phu quoc hotel",
          "vietnam accommodation",
        ],

        response:
          "The Vietnam Phu Quoc Tour includes 7 nights of 4-star hotel accommodation.\n\nHotel Details:\n\nHanoi:\nMuong Thanh Centre Hotel / Similar\n\nDa Nang:\nEden Ocean Hotel / Similar\n\nPhu Quoc:\nSunset Beach Resort & Spa / Similar\n\nExact hotel allocation is subject to availability. Please confirm the final hotel details with Riya Tours & Travels.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "vietnam meals",
          "phu quoc meals",
          "food included",
        ],

        response:
          "Meals are included in the Vietnam Phu Quoc Tour.\n\nIncluded meals:\n• Daily breakfast\n• Daily lunch\n• Daily dinner\n\nAdditional meals outside the specified itinerary are excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "coach",
          "ac",
          "ac vehicle",
          "ac transport",
          "transfer",
          "vietnam transport",
          "airport transfer",
          "private transfer",
        ],

        response:
          "Private air-conditioned transportation is included throughout the Vietnam Phu Quoc Tour.\n\nThe package also includes:\n• Private airport transfers\n• Inter-city transfers\n• Sightseeing transportation\n• English-speaking guide\n• Domestic flights between major destinations",
      },

      cruise: {
        keywords: [
          "cruise",
          "halong cruise",
          "halong bay cruise",
          "halong day cruise",
          "cruise tour",
          "boat cruise",
        ],

        response:
          "A Halong Bay day cruise is included in the Vietnam Phu Quoc Tour.\n\nThe cruise includes:\n• Halong Bay sightseeing\n• Sung Sot Cave\n• Luon Cave\n• Titop Island\n• Kayaking or bamboo boat ride\n• Swimming\n• Hiking\n• Sunset party\n• Buffet lunch\n\nThe cruise takes place on Day 3.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 4-star hotel accommodation\n• International airfare from Kolkata\n• Domestic flights within Vietnam\n• Vietnam visa\n• Daily breakfast\n• Daily lunch\n• Daily dinner\n• Private airport transfers\n• Private AC vehicle\n• English-speaking guide\n• All sightseeing as per itinerary\n• Halong Bay day cruise\n• Trang An boat ride\n• Hoi An lantern tour\n• Ba Na Hills cable car\n• Vinpearl Safari visit\n• Phu Quoc island hopping tour\n• Hon Thom cable car ride\n• Entrance fees as per itinerary\n• 2 bottles of mineral water per person per sightseeing day",
      },

      duration: {
        keywords: [
          "duration",
          "how many days",
          "how long",
          "days",
          "nights",
          "vietnam duration",
          "phu quoc duration",
          "tour duration",
          "package duration",
        ],

        response:
          "Vietnam Phu Quoc Tour Duration:\n\n7 Nights / 8 Days\n\nThe tour covers Hanoi, Ninh Binh, Halong Bay, Da Nang, Hoi An, Ba Na Hills and Phu Quoc.",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "vietnam package 1",
          "phu quoc package 1",
          "8 days",
          "7 nights",
        ],

        response:
          "Vietnam Phu Quoc Tour Package 1:\n\nDuration: 7 Nights / 8 Days\nPrice: ₹1,30,000 per person\nRating: 9.5\n\nDestinations:\nHanoi, Ninh Binh, Halong Bay, Da Nang, Hoi An, Ba Na Hills and Phu Quoc.\n\nThe package includes international airfare from Kolkata, domestic flights, Vietnam visa, 4-star hotels, meals, private AC transportation, sightseeing, Halong Bay cruise, Ba Na Hills cable car, Vinpearl Safari and Phu Quoc island tour.",
      },

      water: {
        keywords: [
          "water",
          "drinking water",
          "bottle",
          "water bottle",
          "mineral water",
          "vietnam water",
        ],

        response:
          "The Vietnam Phu Quoc Tour includes 2 bottles of mineral water per person per sightseeing day.\n\nAdditional beverages and personal drinks are not included in the package.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "package comparison",
          "which package",
          "which one is better",
        ],

        response:
          "There is currently one Vietnam Phu Quoc Tour package available.\n\nPackage 1:\n• 7 Nights / 8 Days\n• ₹1,30,000 per person\n• Rating: 9.5\n• Hanoi\n• Ninh Binh\n• Halong Bay\n• Da Nang\n• Hoi An\n• Ba Na Hills\n• Phu Quoc\n• Phu Quoc island hopping\n• Hon Thom cable car\n\nThe package includes flights, visa, 4-star accommodation, meals, transportation, sightseeing and major activities mentioned in the itinerary.",
      },
    },
  },
  {
    id: 32,

    topic: "Sri Lanka Tour",

    keywords: [
      "srilanka",
      "sri lanka",
      "sri lanka tour",
      "srilanka tour",
      "sri lanka package",
      "srilanka package",
      "sri lanka tour package",
      "sri lanka price",
      "sri lanka package price",
      "sri lanka duration",
      "sri lanka itinerary",
      "sri lanka sightseeing",
      "sri lanka holiday",
      "sri lanka holiday package",
      "sri lanka trip",

      "colombo",
      "colombo tour",
      "colombo sightseeing",
      "colombo package",
      "colombo city tour",
      "galle face green",
      "viharamahadevi park",
      "national museum",
      "independence square",
      "colombo fort",

      "pinnawala",
      "pinnawala tour",
      "pinnawala elephant orphanage",
      "elephant orphanage",
      "pinnawala sightseeing",

      "kandy",
      "kandy tour",
      "kandy sightseeing",
      "kandy package",
      "temple of tooth",
      "temple of the tooth relic",
      "gem museum",
      "kandy cultural show",

      "nuwara eliyaa",
      "nuwara eliya",
      "nuwara eliyaa tour",
      "nuwara eliya tour",
      "nuwara eliya sightseeing",
      "nuwara eliya package",
      "tea factory",
      "tea plantation",
      "ramboda waterfall",
      "hanuman temple",
      "gregory lake",
      "victoria park",
      "peradeniya botanical garden",

      "bentota",
      "bentota tour",
      "bentota package",
      "bentota sightseeing",
      "bentota beach",
      "madhu river",
      "madhu river boat safari",
      "turtle hatchery",

      "sri lanka train",
      "sri lanka flight",
      "sri lanka hotel",
      "sri lanka meals",
      "sri lanka transport",
      "sri lanka accommodation",
      "sri lanka visa",
      "sri lanka currency",
      "sri lanka time zone",
      "cultural tour",
      "nature tour",
      "beach tour",
      "elephant tour",
    ],

    summary: {
      duration: "6 Nights / 7 Days",
      price: "Not Available",
      rating: "9.2",
      category: "International Tour",
      destinations: "Colombo • Pinnawala • Kandy • Nuwara Eliya • Bentota",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "sri lanka price",
          "srilanka price",
          "sri lanka package price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Sri Lanka Tour Package pricing is currently not available.\n\nDuration: 6 Nights / 7 Days\nRating: 9.2\nCategory: International Tour\n\nThe package includes flights from Kolkata, 3-star hotel accommodation, meals, AC transportation, sightseeing and guided tours.\n\nFor the latest pricing, availability and travel dates, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "sri lanka itinerary",
          "srilanka itinerary",
          "sri lanka tour plan",
          "sri lanka schedule",
          "package itinerary",
          "tour plan",
        ],

        response:
          "Sri Lanka Tour Itinerary\n\nDuration: 6 Nights / 7 Days\nPrice: Not Available\n\nDay 1: Kolkata → Colombo\nBoard flight from Netaji Subhash Chandra Bose International Airport and arrive in Colombo. Transfer to hotel. Overnight stay at Colombo.\n\nDay 2: Colombo → Pinnawala → Kandy\nVisit Pinnawala Elephant Orphanage and continue to Kandy. Explore Kandy city including Temple of the Tooth Relic and Gem Museum. Enjoy a traditional cultural dance show. Overnight stay at Kandy.\n\nDay 3: Kandy → Nuwara Eliya\nVisit Peradeniya Botanical Garden, Ramboda Waterfall, Hanuman Temple and a tea factory. Proceed to Nuwara Eliya and enjoy sightseeing around Gregory Lake, Victoria Park, golf course area and tea plantations. Overnight stay at Nuwara Eliya.\n\nDay 4: Nuwara Eliya → Bentota\nDrive through the scenic hill country towards Bentota. Relax on the beach. Overnight stay at Bentota.\n\nDay 5: Bentota Sightseeing\nEnjoy a Madhu River boat safari through mangrove islands and visit a Turtle Hatchery. Overnight stay at Bentota.\n\nDay 6: Bentota → Colombo\nTransfer to Colombo and enjoy a city tour covering Galle Face Green, Viharamahadevi Park, National Museum, Independence Square, Fort area and shopping districts. Overnight stay at Colombo.\n\nDay 7: Colombo Departure\nAfter breakfast transfer to the airport for the return flight to India.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "sri lanka sightseeing",
          "srilanka sightseeing",
          "sri lanka attractions",
          "tourist places",
          "what will we see",
        ],

        response:
          "Major Attractions Covered:\n\nColombo:\n• Galle Face Green\n• Viharamahadevi Park\n• National Museum\n• Independence Square\n• Fort Area\n• Shopping Districts\n\nPinnawala:\n• Pinnawala Elephant Orphanage\n\nKandy:\n• Temple of the Tooth Relic\n• Gem Museum\n• Traditional Cultural Dance Show\n\nNuwara Eliya:\n• Peradeniya Botanical Garden\n• Ramboda Waterfall\n• Hanuman Temple\n• Tea Factory\n• Gregory Lake\n• Victoria Park\n• Tea Plantation Areas\n\nBentota:\n• Bentota Beach\n• Madhu River Boat Safari\n• Turtle Hatchery\n\nThe tour combines cultural, nature, wildlife, hill station and beach experiences.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "sri lanka inclusions",
          "sri lanka included",
          "srilanka inclusions",
        ],

        response:
          "Package Inclusions:\n\n• Flight fare from Kolkata\n• 3-star hotel accommodation on twin/double sharing basis\n• Daily breakfast\n• Lunch\n• Dinner\n• AC transportation throughout the tour\n• Airport transfers\n• English-speaking guide\n• Entrance fees as per itinerary\n• Colombo city tour\n• Pinnawala Elephant Orphanage visit\n• Kandy city tour and cultural show\n• Peradeniya Botanical Garden visit\n• Tea factory visit\n• Nuwara Eliya sightseeing\n• Madhu River boat ride\n• Turtle Hatchery visit",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "sri lanka exclusions",
          "sri lanka excluded",
          "srilanka exclusions",
        ],

        response:
          "Package Exclusions:\n\n• Optional excursions and activities\n• Meals other than mentioned\n• Beverages and drinks\n• Personal expenses\n• Laundry and telephone charges\n• Additional mineral water beyond supplied quantity\n• Travel insurance\n• Any item not mentioned under inclusions",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "sri lanka booking",
          "sri lanka contact",
          "srilanka booking",
        ],

        response:
          "For Sri Lanka Tour booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Sri Lanka Tour\nDuration: 6 Nights / 7 Days\nPrice: Not Available\n\nPlease confirm the latest price, availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "sri lanka destinations",
          "sri lanka route",
          "tour route",
          "srilanka destinations",
        ],

        response:
          "Destinations Covered:\n\n• Colombo\n• Pinnawala\n• Kandy\n• Nuwara Eliya\n• Bentota\n\nThe tour begins in Colombo and covers the cultural city of Kandy, the scenic hill station of Nuwara Eliya, the wildlife attraction of Pinnawala and the beach destination of Bentota.",
      },

      colombo: {
        keywords: [
          "colombo",
          "colombo tour",
          "colombo sightseeing",
          "colombo package",
          "colombo city tour",
          "galle face green",
          "viharamahadevi park",
          "national museum",
          "independence square",
          "colombo fort",
        ],

        response:
          "Colombo is the arrival and departure destination of the Sri Lanka Tour.\n\nMajor Attractions:\n• Galle Face Green\n• Viharamahadevi Park\n• National Museum\n• Independence Square\n• Fort Area\n• Shopping Districts\n\nColombo is covered on Day 1 and again during the city tour on Day 6.",
      },

      pinnawala: {
        keywords: [
          "pinnawala",
          "pinnawala tour",
          "pinnawala sightseeing",
          "pinnawala package",
          "pinnawala elephant orphanage",
          "elephant orphanage",
          "elephant",
        ],

        response:
          "Pinnawala is famous for the Pinnawala Elephant Orphanage.\n\nThe tour visits the elephant orphanage on Day 2 while travelling from Colombo towards Kandy.\n\nIt is one of the major wildlife experiences included in the Sri Lanka Tour.",
      },

      kandy: {
        keywords: [
          "kandy",
          "kandy tour",
          "kandy sightseeing",
          "kandy package",
          "temple of tooth",
          "temple of the tooth relic",
          "gem museum",
          "kandy cultural show",
          "cultural show",
        ],

        response:
          "Kandy is an important cultural destination in Sri Lanka.\n\nMajor Attractions:\n• Temple of the Tooth Relic\n• Gem Museum\n• Traditional Cultural Dance Show\n\nKandy is visited on Day 2 after the Pinnawala excursion.\n\nThe tour stays overnight in Kandy.",
      },

      nuwaraEliya: {
        keywords: [
          "nuwara eliya",
          "nuwara eliyaa",
          "nuwara eliya tour",
          "nuwara eliya sightseeing",
          "nuwara eliya package",
          "tea factory",
          "tea plantation",
          "ramboda waterfall",
          "hanuman temple",
          "gregory lake",
          "victoria park",
          "peradeniya botanical garden",
        ],

        response:
          "Nuwara Eliya is the scenic hill station of the Sri Lanka Tour.\n\nMajor Attractions:\n• Peradeniya Botanical Garden\n• Ramboda Waterfall\n• Hanuman Temple\n• Tea Factory\n• Gregory Lake\n• Victoria Park\n• Tea Plantation surroundings\n\nThe tour travels from Kandy to Nuwara Eliya on Day 3 and stays overnight there.",
      },

      bentota: {
        keywords: [
          "bentota",
          "bentota tour",
          "bentota package",
          "bentota sightseeing",
          "bentota beach",
          "madhu river",
          "madhu river boat safari",
          "turtle hatchery",
          "beach",
        ],

        response:
          "Bentota is the beach and nature destination of the Sri Lanka Tour.\n\nMajor Attractions:\n• Bentota Beach\n• Madhu River Boat Safari\n• Mangrove Islands\n• Turtle Hatchery\n\nThe tour reaches Bentota on Day 4 and enjoys sightseeing on Day 5.",
      },

      flight: {
        keywords: [
          "flight",
          "flight ticket",
          "sri lanka flight",
          "srilanka flight",
          "air ticket",
          "kolkata flight",
          "international flight",
          "airfare",
        ],

        response:
          "Flight travel is included in the Sri Lanka Tour.\n\nDeparture:\nKolkata → Colombo by flight.\n\nReturn:\nColombo → India by flight on Day 7.\n\nThe package includes flight fare from Kolkata.",
      },

      hotel: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "sri lanka hotel",
          "sri lanka accommodation",
          "srilanka hotel",
        ],

        response:
          "The Sri Lanka Tour includes 3-star hotel accommodation on a twin/double sharing basis.\n\nHotels mentioned in the package are:\n\nColombo:\n• Ocean Edge Suite / Courtyard by Marriott Colombo\n\nKandy:\n• Swiss Residence Kandy\n\nNuwara Eliya:\n• Ramboda Falls Hotel\n\nBentota:\n• Rockside Beach Hotel\n\nHotel availability and final hotel allocation should be confirmed before booking.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "sri lanka meals",
          "food included",
        ],

        response:
          "Meals included in the Sri Lanka Tour are:\n\n• Daily breakfast\n• Lunch\n• Dinner\n\nMeals other than those specifically mentioned are excluded.\n\nBeverages and drinks are also excluded.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "ac",
          "ac transport",
          "transfer",
          "sri lanka transport",
          "airport transfer",
        ],

        response:
          "AC transportation is included throughout the Sri Lanka Tour.\n\nThe package also includes:\n• Airport transfers\n• Transfers between destinations\n• Sightseeing transportation\n• AC vehicle throughout the tour\n\nTransportation is provided according to the itinerary.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 3-star hotel accommodation\n• Flight fare from Kolkata\n• Daily breakfast\n• Lunch\n• Dinner\n• AC transportation\n• Airport transfers\n• English-speaking guide\n• Entrance fees as per itinerary\n• Colombo city tour\n• Pinnawala Elephant Orphanage visit\n• Kandy cultural show\n• Tea factory visit\n• Madhu River boat ride\n• Turtle Hatchery visit",
      },

      currency: {
        keywords: [
          "currency",
          "sri lanka currency",
          "srilanka currency",
          "money",
          "lkr",
          "sri lankan rupee",
          "rupee",
          "payment currency",
        ],

        response:
          "The local currency of Sri Lanka is the Sri Lankan Rupee (LKR).\n\nCurrency: Sri Lankan Rupee\nCode: LKR\n\nIt is recommended to confirm current exchange rates and payment options before travelling.",
      },

      timezone: {
        keywords: [
          "time zone",
          "timezone",
          "sri lanka time",
          "srilanka time",
          "time difference",
          "india time",
          "gmt",
        ],

        response:
          "Sri Lanka follows GMT+5:30, which is the same time zone as India.\n\nTherefore, there is no time difference between India and Sri Lanka.",
      },

      duration: {
        keywords: [
          "duration",
          "how many days",
          "how long",
          "days",
          "nights",
          "6 nights",
          "7 days",
          "sri lanka duration",
        ],

        response:
          "Sri Lanka Tour Duration:\n\n6 Nights / 7 Days\n\nThe tour covers Colombo, Pinnawala, Kandy, Nuwara Eliya and Bentota.",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "sri lanka package 1",
          "srilanka package 1",
          "6 nights",
          "7 days",
        ],

        response:
          "Sri Lanka Tour Package:\n\nDuration: 6 Nights / 7 Days\nPrice: Not Available\nRating: 9.2\nCategory: International Tour\n\nDestinations:\nColombo, Pinnawala, Kandy, Nuwara Eliya and Bentota.\n\nThe package includes flights from Kolkata, 3-star accommodation, meals, AC transportation, sightseeing and guided tours.",
      },

      notes: {
        keywords: [
          "notes",
          "important notes",
          "things to know",
          "information",
          "important information",
          "sri lanka notes",
          "travel information",
          "travel notes",
        ],

        response:
          "Important Sri Lanka Tour Information:\n\n• Sri Lanka follows GMT+5:30, the same time zone as India.\n• The local currency is Sri Lankan Rupee (LKR).\n• The itinerary may change depending on road, traffic, weather or operational conditions.\n• Optional excursions and activities are not included unless specifically mentioned.\n• Hotel allocation may be subject to availability.\n• Please confirm the latest package price and travel details before booking.",
      },
    },
  },
  {
    id: 33,

    topic: "Singapore Malaysia Genting Tour",

    keywords: [
      "singapore",
      "singapore tour",
      "singapore package",
      "singapore tour package",
      "singapore price",
      "singapore package price",
      "singapore duration",
      "singapore itinerary",
      "singapore sightseeing",
      "singapore holiday",
      "singapore holiday package",

      "malaysia",
      "malaysia tour",
      "malaysia package",
      "malaysia tour package",
      "malaysia sightseeing",
      "malaysia holiday",

      "genting",
      "genting highlands",
      "genting tour",
      "genting package",
      "genting sightseeing",
      "genting cable car",
      "snow world",

      "sentosa",
      "sentosa island",
      "sentosa tour",
      "sentosa sightseeing",
      "universal studios",
      "universal studios singapore",
      "madame tussauds",
      "wings of time",
      "cable car",

      "kuala lumpur",
      "kuala lumpur tour",
      "kuala lumpur package",
      "kuala lumpur sightseeing",
      "petronas twin towers",
      "king palace",
      "national monument",
      "national mosque",
      "independence square",

      "batu caves",
      "batu caves tour",

      "night safari",
      "singapore flyer",
      "marina bay sands",

      "singapore malaysia",
      "singapore malaysia tour",
      "singapore malaysia package",
      "singapore genting",
      "singapore malaysia genting",

      "singapore hotel",
      "malaysia hotel",
      "genting hotel",
      "singapore meals",
      "malaysia meals",
      "singapore transport",
      "malaysia transport",
      "singapore flight",
      "malaysia flight",
      "singapore visa",
      "malaysia visa",
      "international tour",
      "theme park tour",
      "city tour",
    ],

    summary: {
      duration: "6 Nights / 7 Days",
      price: "₹1,20,000 per person",
      rating: "9.1",
      category: "International Tour",
      destinations:
        "Singapore • Sentosa • Universal Studios • Kuala Lumpur • Genting Highlands • Batu Caves",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "singapore price",
          "malaysia price",
          "singapore package price",
          "malaysia package price",
          "singapore malaysia price",
          "tour price",
          "package cost",
          "how much",
        ],

        response:
          "Singapore Malaysia Genting Tour Package pricing is ₹1,20,000 per person.\n\nPackage 1:\nDuration: 6 Nights / 7 Days\nPrice: ₹1,20,000 per person\nRating: 9.1\n\nThe package covers Singapore, Sentosa Island, Universal Studios, Kuala Lumpur, Genting Highlands and Batu Caves.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "singapore itinerary",
          "malaysia itinerary",
          "singapore malaysia itinerary",
          "tour plan",
          "package itinerary",
          "travel plan",
        ],

        response:
          "Singapore Malaysia Genting Tour Itinerary\n\nDuration: 6 Nights / 7 Days\nPrice: ₹1,20,000 per person\n\nDay 1: Arrival in Singapore – Night Safari\nArrive at Singapore Airport, transfer to hotel and visit Night Safari in the evening. Enjoy the Thumbuakar tribal performance, tram safari and Creatures of the Night show. Overnight stay at Singapore.\n\nDay 2: Singapore Flyer & Sentosa Island\nVisit Singapore Flyer photo point and Marina Bay Sands SkyPark area. Proceed to Sentosa Island for cable car ride, Images of Singapore LIVE, Madame Tussauds, Luge & Sky Ride and Wings of Time show. Overnight stay at Singapore.\n\nDay 3: Universal Studios Singapore\nEnjoy a full day at Universal Studios Singapore with thrilling rides, movie-themed attractions, entertainment zones and shows. Overnight stay at Singapore.\n\nDay 4: Singapore → Kuala Lumpur\nTravel by coach from Singapore to Kuala Lumpur. Check in to the hotel and spend the evening at leisure. Overnight stay at Kuala Lumpur.\n\nDay 5: Genting Highlands & Batu Caves\nVisit Genting Highlands with cable car ride, Snow World and entertainment complex. En-route visit Batu Caves. Overnight stay at Genting / Kuala Lumpur.\n\nDay 6: Kuala Lumpur City Tour\nVisit Petronas Twin Towers photo stop, Cocoa Centre, King's Palace photo stop, National Monument, National Mosque and Independence Square. Overnight stay at Kuala Lumpur.\n\nDay 7: Kuala Lumpur Departure\nAfter breakfast check out and enjoy free time for shopping and local markets. Lunch at Indian restaurant followed by transfer to Kuala Lumpur Airport for the return flight to India.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "singapore sightseeing",
          "malaysia sightseeing",
          "tourist places",
          "what will we see",
          "singapore attractions",
          "malaysia attractions",
        ],

        response:
          "Major Attractions Covered:\n\nSingapore:\n• Night Safari\n• Singapore Flyer photo point\n• Marina Bay Sands SkyPark area\n• Sentosa Island\n• Cable Car Ride\n• Images of Singapore LIVE\n• Madame Tussauds\n• Luge & Sky Ride\n• Wings of Time\n• Universal Studios Singapore\n\nMalaysia:\n• Kuala Lumpur\n• Petronas Twin Towers photo stop\n• Cocoa Centre\n• King's Palace photo stop\n• National Monument\n• National Mosque\n• Independence Square\n\nGenting Highlands:\n• Genting Cable Car\n• Snow World\n• Entertainment Complex\n\nOther Attraction:\n• Batu Caves\n\nThe tour combines city sightseeing, theme parks, entertainment, shopping, cable car experiences and cultural attractions.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "singapore inclusions",
          "malaysia inclusions",
          "singapore included",
        ],

        response:
          "Package Inclusions:\n\n• Return flight tickets\n• Singapore visa\n• Malaysia visa\n• 4★ hotel accommodation on twin sharing basis\n• Daily breakfast\n• Lunch\n• Dinner\n• AC push-back coach transportation\n• 2 bottles of water per person per day\n• Travel insurance\n• Experienced tour manager from Kolkata\n• English-speaking guide\n• Night Safari with tram ride\n• Sentosa Island tour\n• Cable car ride\n• Madame Tussauds Singapore\n• Wings of Time show\n• Universal Studios Singapore entry\n• Genting Highlands excursion\n• Snow World entry\n• Batu Caves visit\n• Kuala Lumpur city tour",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "singapore exclusions",
          "malaysia exclusions",
          "singapore excluded",
        ],

        response:
          "Package Exclusions:\n\n• Personal expenses\n• Laundry charges\n• Telephone charges\n• Additional beverages\n• Optional activities not mentioned\n• Tips not specified\n• Anything not mentioned in inclusions",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "singapore booking",
          "malaysia booking",
          "singapore contact",
          "malaysia contact",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Singapore Malaysia Genting Tour\nDuration: 6 Nights / 7 Days\nPrice: ₹1,20,000 per person\n\nAvailable departure dates include:\n• 17/10/2026\n• 27/10/2026\n• 20/11/2026\n• 22/12/2026\n• 22/01/2027\n\nPlease confirm the latest availability and travel dates before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "singapore destinations",
          "malaysia destinations",
          "singapore malaysia destinations",
          "tour route",
          "route",
        ],

        response:
          "Destinations Covered:\n\n• Singapore\n• Sentosa Island\n• Universal Studios Singapore\n• Kuala Lumpur\n• Genting Highlands\n• Batu Caves\n\nThe tour covers major attractions across Singapore and Malaysia with a combination of city tours, theme parks, entertainment, shopping and mountain experiences.",
      },

      singapore: {
        keywords: [
          "singapore",
          "singapore tour",
          "singapore package",
          "singapore sightseeing",
          "singapore attractions",
          "singapore holiday",
          "night safari",
          "singapore flyer",
          "marina bay sands",
        ],

        response:
          "Singapore is the first major destination of the tour.\n\nMajor Attractions:\n• Night Safari\n• Singapore Flyer photo point\n• Marina Bay Sands SkyPark area\n• Sentosa Island\n• Cable Car Ride\n• Images of Singapore LIVE\n• Madame Tussauds\n• Luge & Sky Ride\n• Wings of Time\n• Universal Studios Singapore\n\nThe first three nights are spent in Singapore.",
      },

      sentosa: {
        keywords: [
          "sentosa",
          "sentosa island",
          "sentosa tour",
          "sentosa sightseeing",
          "cable car",
          "madame tussauds",
          "wings of time",
          "luge",
          "images of singapore",
        ],

        response:
          "Sentosa Island is covered on Day 2 of the Singapore Malaysia Genting Tour.\n\nMajor Attractions:\n• Cable Car Ride\n• Images of Singapore LIVE\n• Madame Tussauds\n• Luge & Sky Ride\n• Wings of Time show\n\nSentosa provides a combination of entertainment, attractions, rides and island experiences.",
      },

      universal: {
        keywords: [
          "universal",
          "universal studios",
          "universal studios singapore",
          "theme park",
          "theme park singapore",
          "universal studios tour",
        ],

        response:
          "Universal Studios Singapore is covered on Day 3.\n\nGuests can enjoy:\n• Movie-themed attractions\n• Thrilling rides\n• Entertainment zones\n• Shows\n• Theme park experiences\n\nUniversal Studios Singapore entry is included in the package.",
      },

      malaysia: {
        keywords: [
          "malaysia",
          "malaysia tour",
          "malaysia package",
          "malaysia sightseeing",
          "malaysia holiday",
          "kuala lumpur",
          "genting",
          "batu caves",
        ],

        response:
          "Malaysia is covered from Day 4 onwards.\n\nMajor Destinations:\n• Kuala Lumpur\n• Genting Highlands\n• Batu Caves\n\nThe tour includes coach transfer from Singapore to Kuala Lumpur, Genting Highlands excursion, Batu Caves visit and Kuala Lumpur city sightseeing.",
      },

      kualalumpur: {
        keywords: [
          "kuala lumpur",
          "kuala lumpur tour",
          "kuala lumpur package",
          "kuala lumpur sightseeing",
          "kl",
          "petronas",
          "petronas twin towers",
          "national monument",
          "national mosque",
          "independence square",
          "king palace",
        ],

        response:
          "Kuala Lumpur is one of the main destinations of the Malaysia portion of the tour.\n\nMajor Attractions:\n• Petronas Twin Towers photo stop\n• Cocoa Centre\n• King's Palace photo stop\n• National Monument\n• National Mosque\n• Independence Square\n\nKuala Lumpur city sightseeing is scheduled on Day 6.",
      },

      genting: {
        keywords: [
          "genting",
          "genting highlands",
          "genting tour",
          "genting package",
          "genting sightseeing",
          "genting cable car",
          "snow world",
        ],

        response:
          "Genting Highlands is covered on Day 5.\n\nMajor Attractions:\n• Genting Cable Car\n• Snow World\n• Gaming and entertainment complex\n• Mountain resort experience\n\nBatu Caves is also visited en-route to Genting Highlands.\n\nGenting Highlands excursion and Snow World entry are included in the package.",
      },

      batu: {
        keywords: [
          "batu caves",
          "batu caves tour",
          "batu caves sightseeing",
          "batu cave",
        ],

        response:
          "Batu Caves is covered during the Genting Highlands excursion on Day 5.\n\nThe tour includes an en-route visit to Batu Caves before continuing towards Genting Highlands.",
      },

      hotels: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "singapore hotel",
          "malaysia hotel",
          "genting hotel",
        ],

        response:
          "The Singapore Malaysia Genting Tour includes 4★ hotel accommodation on twin sharing basis.\n\nPlanned Hotels:\n\nSingapore:\n• Hilton Garden Inn Singapore (4★)\n\nKuala Lumpur:\n• Ramada Kuala Lumpur (4★)\n\nGenting:\n• First World Hotel Genting Highlands\n\nHotel names are subject to availability and operational confirmation.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "singapore meals",
          "malaysia meals",
          "food included",
        ],

        response:
          "Meals included in the Singapore Malaysia Genting Tour are:\n\n• Daily breakfast\n• Lunch\n• Dinner\n\nThe package also provides 2 bottles of water per person per day.\n\nAdditional beverages are not included.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "coach",
          "ac",
          "ac transport",
          "transfer",
          "singapore transport",
          "malaysia transport",
        ],

        response:
          "AC push-back coach transportation is included in the Singapore Malaysia Genting Tour.\n\nTransportation includes:\n• Airport transfers\n• Singapore sightseeing transfers\n• Singapore → Kuala Lumpur coach transfer\n• Genting Highlands excursion\n• Kuala Lumpur sightseeing transportation\n\nTransfers are provided according to the tour itinerary.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 4★ hotel accommodation\n• Daily breakfast\n• Lunch\n• Dinner\n• AC push-back coach transportation\n• 2 bottles of water per person per day\n• Travel insurance\n• Experienced tour manager from Kolkata\n• English-speaking guide\n• Airport transfers\n• Sightseeing as per itinerary\n• Theme park and attraction entries as mentioned in the package",
      },

      visa: {
        keywords: [
          "visa",
          "singapore visa",
          "malaysia visa",
          "visa included",
          "international visa",
          "visa cost",
        ],

        response:
          "Visa assistance is included in the Singapore Malaysia Genting Tour.\n\nIncluded:\n• Singapore Visa\n• Malaysia Visa\n\nThe visa is included as part of the package inclusions.",
      },

      flight: {
        keywords: [
          "flight",
          "flights",
          "air ticket",
          "air ticket included",
          "return flight",
          "singapore flight",
          "malaysia flight",
        ],

        response:
          "Return flight tickets are included in the Singapore Malaysia Genting Tour.\n\nThe tour begins with arrival in Singapore and ends with departure from Kuala Lumpur.\n\nThe package includes return flight tickets as mentioned in the inclusions.",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "singapore package 1",
          "malaysia package 1",
          "7 days",
          "6 nights",
        ],

        response:
          "Singapore Malaysia Genting Tour Package 1:\n\nDuration: 6 Nights / 7 Days\nPrice: ₹1,20,000 per person\nRating: 9.1\n\nDestinations:\nSingapore, Sentosa Island, Universal Studios Singapore, Kuala Lumpur, Genting Highlands and Batu Caves.\n\nThe package includes flights, visas, 4★ accommodation, meals, transportation, sightseeing, theme park entries and a tour manager from Kolkata.",
      },

      departure: {
        keywords: [
          "departure",
          "departure date",
          "travel date",
          "dates",
          "available dates",
          "singapore departure",
          "malaysia departure",
          "tour dates",
        ],

        response:
          "Available Departure Dates for the Singapore Malaysia Genting Tour:\n\n• 17/10/2026\n• 27/10/2026\n• 20/11/2026\n• 22/12/2026\n• 22/01/2027\n\nPlease confirm seat availability and the latest departure schedule with Riya Tours & Travels before booking.",
      },

      insurance: {
        keywords: [
          "insurance",
          "travel insurance",
          "insurance included",
          "singapore insurance",
          "malaysia insurance",
        ],

        response:
          "Travel insurance is included in the Singapore Malaysia Genting Tour package.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "difference between packages",
          "package comparison",
          "which package",
          "which one is better",
        ],

        response:
          "Currently, one package option is available for the Singapore Malaysia Genting Tour.\n\nPackage 1:\n• 6 Nights / 7 Days\n• ₹1,20,000 per person\n• Singapore\n• Sentosa Island\n• Universal Studios Singapore\n• Kuala Lumpur\n• Genting Highlands\n• Batu Caves\n\nFor the latest package options and availability, please contact Riya Tours & Travels.",
      },

      notes: {
        keywords: [
          "notes",
          "important",
          "important information",
          "rules",
          "terms",
          "conditions",
          "tour notes",
        ],

        response:
          "Important Notes:\n\n• All sightseeing is subject to operational schedules and weather conditions.\n• Hotel check-in and check-out timings are as per hotel policy.\n• No hidden costs are applicable as per the listed package inclusions.\n• Optional activities are not included unless specifically mentioned.\n• Please confirm the latest departure dates and availability before booking.",
      },
    },
  },
  {
    id: 34,

    topic: "Thailand Singapore Malaysia Tour",

    keywords: [
      "thailand",
      "thailand tour",
      "thailand package",
      "thailand tour package",
      "thailand price",
      "thailand package price",
      "thailand itinerary",
      "thailand sightseeing",
      "thailand holiday",

      "singapore",
      "singapore tour",
      "singapore package",
      "singapore tour package",
      "singapore price",
      "singapore sightseeing",
      "singapore holiday",

      "malaysia",
      "malaysia tour",
      "malaysia package",
      "malaysia tour package",
      "malaysia sightseeing",
      "malaysia holiday",

      "bangkok",
      "bangkok tour",
      "bangkok package",
      "bangkok sightseeing",
      "golden temple",
      "marble temple",
      "safari world",
      "chao phraya cruise",
      "chao phraya princess cruise",

      "pattaya",
      "pattaya tour",
      "pattaya package",
      "pattaya sightseeing",
      "coral island",
      "pattaya beach",
      "alcazar show",
      "walking street",

      "phuket",
      "phuket tour",
      "phuket package",
      "phuket sightseeing",
      "phi phi island",
      "phi phi island tour",

      "kuala lumpur",
      "kuala lumpur tour",
      "kuala lumpur package",
      "kuala lumpur sightseeing",
      "petronas twin towers",
      "king palace",
      "national monument",
      "national mosque",
      "independence square",

      "genting",
      "genting highlands",
      "genting tour",
      "genting package",
      "genting cable car",
      "snow world",

      "batu caves",
      "batu caves tour",

      "sentosa",
      "sentosa island",
      "sentosa tour",
      "sentosa sightseeing",
      "night safari",
      "universal studios",
      "universal studios singapore",
      "marina bay",
      "merlion",
      "mount faber",
      "sky ride",

      "thailand singapore malaysia",
      "singapore malaysia thailand",
      "thailand malaysia singapore",
      "bangkok pattaya phuket",
      "bangkok pattaya phuket malaysia singapore",

      "international tour",
      "international holiday",
      "theme park tour",
      "island tour",
      "city tour",
      "beach tour",
      "thailand visa",
      "malaysia visa",
      "singapore visa",
      "international flight",
      "hotel",
      "meals",
      "transportation",
      "travel insurance",
      "departure date",
      "tour dates",
    ],

    summary: {
      duration: "12 Nights / 13 Days",
      price: "Not Available",
      rating: "9.3",
      category: "International Tour",
      destinations:
        "Bangkok • Pattaya • Phuket • Kuala Lumpur • Genting Highlands • Singapore",
    },

    intents: {
      price: {
        keywords: [
          "price",
          "cost",
          "rate",
          "budget",
          "thailand price",
          "singapore price",
          "malaysia price",
          "tour price",
          "package price",
          "package cost",
          "how much",
        ],

        response:
          "Thailand Singapore Malaysia Tour pricing is currently not available.\n\nDuration: 12 Nights / 13 Days\nRating: 9.3\n\nThe package covers Thailand, Malaysia and Singapore, including Bangkok, Pattaya, Phuket, Kuala Lumpur, Genting Highlands and Singapore.\n\nThe final package price depends on flight, hotel and availability at the time of booking.\n\nFor the latest pricing and availability, please contact Riya Tours & Travels.",
      },

      itinerary: {
        keywords: [
          "itinerary",
          "schedule",
          "day wise",
          "day wise plan",
          "plan",
          "thailand itinerary",
          "singapore itinerary",
          "malaysia itinerary",
          "tour plan",
          "package itinerary",
          "travel plan",
        ],

        response:
          "Thailand Singapore Malaysia Tour Itinerary\n\nDuration: 12 Nights / 13 Days\nPrice: Not Available\n\nDay 1: Arrival Bangkok → Pattaya\nArrive at Suvarnabhumi Airport and transfer to Pattaya. Visit Pattaya Beach area, enjoy Indian buffet lunch, Alcazar Show and Walking Street. Dinner and overnight stay at Pattaya.\n\nDay 2: Pattaya Coral Island Tour\nVisit Coral Island by speed boat and enjoy beach activities. Buffet lunch at Indian restaurant followed by Pattaya local market sightseeing. Dinner and overnight stay at Pattaya.\n\nDay 3: Pattaya → Bangkok City Tour\nTransfer to Bangkok and visit Golden Temple, Marble Temple and other city attractions. Enjoy shopping at Indira Market. Dinner and overnight stay at Bangkok.\n\nDay 4: Safari World & Chao Phraya Cruise\nVisit Safari World and Marine Park with buffet lunch. In the evening enjoy Chao Phraya Princess Cruise dinner. Overnight stay at Bangkok.\n\nDay 5: Bangkok → Phuket\nFly from Bangkok to Phuket. Transfer to hotel, enjoy buffet lunch at Indian restaurant and leisure time. Dinner and overnight stay at Phuket.\n\nDay 6: Phi Phi Island Excursion\nEnjoy a full-day Phi Phi Island tour with beach activities and buffet lunch. Return to Phuket for dinner and overnight stay.\n\nDay 7: Phuket → Kuala Lumpur\nFly to Kuala Lumpur, transfer to hotel and enjoy the evening at leisure. Overnight stay at Kuala Lumpur.\n\nDay 8: Genting Highlands & Batu Caves\nVisit Genting Highlands with cable car, Snow World and entertainment complex. Visit Batu Caves and enjoy photo stops. Dinner and overnight stay at Genting / Kuala Lumpur.\n\nDay 9: Kuala Lumpur City Tour\nVisit Petronas Twin Towers photo stop, Cocoa Centre, King's Palace, National Monument, National Mosque and Independence Square. Overnight stay at Kuala Lumpur.\n\nDay 10: Kuala Lumpur → Singapore & Night Safari\nTravel by road to Singapore. Check in to hotel and enjoy Night Safari with tram ride and wildlife experience in the evening. Overnight stay at Singapore.\n\nDay 11: Singapore City & Sentosa Island\nVisit Marina Bay, SkyPark area, Sentosa Island, Mount Faber, Merlion Tower, Sky Ride and light and sound show. Dinner and overnight stay at Singapore.\n\nDay 12: Singapore Leisure / Universal Studios\nEnjoy a free day for leisure and shopping or optionally visit Universal Studios Singapore. Overnight stay at Singapore.\n\nDay 13: Singapore Departure\nEarly morning check out and transfer to Singapore Airport for the return flight to India.\n\nFor the latest itinerary confirmation, please contact Riya Tours & Travels.",
      },

      sightseeing: {
        keywords: [
          "sightseeing",
          "places",
          "attractions",
          "places to visit",
          "tourist places",
          "what will we see",
          "thailand sightseeing",
          "malaysia sightseeing",
          "singapore sightseeing",
          "attractions",
        ],

        response:
          "Major Attractions Covered:\n\nThailand:\n• Pattaya Beach area\n• Coral Island\n• Alcazar Show\n• Walking Street\n• Golden Temple\n• Marble Temple\n• Indira Market\n• Safari World\n• Marine Park\n• Chao Phraya Princess Cruise\n• Phi Phi Island\n\nMalaysia:\n• Genting Highlands\n• Genting Cable Car\n• Snow World\n• Batu Caves\n• Petronas Twin Towers photo stop\n• Cocoa Centre\n• King's Palace\n• National Monument\n• National Mosque\n• Independence Square\n\nSingapore:\n• Night Safari\n• Marina Bay\n• SkyPark area\n• Sentosa Island\n• Mount Faber\n• Merlion Tower\n• Sky Ride\n• Light and sound show\n• Optional Universal Studios Singapore\n\nThe tour combines beaches, islands, wildlife, theme parks, city sightseeing, shopping and entertainment.",
      },

      included: {
        keywords: [
          "included",
          "inclusions",
          "includes",
          "package includes",
          "what is included",
          "thailand inclusions",
          "singapore inclusions",
          "malaysia inclusions",
        ],

        response:
          "Package Inclusions:\n\n• 4★ / 5★ hotel accommodation\n• Daily breakfast\n• Lunch\n• Dinner\n• Transportation throughout the tour\n• Parking charges\n• Toll tax\n• Thailand visa, if applicable as per package\n• Malaysia visa\n• Singapore visa\n• Experienced tour manager\n• Return air tickets\n• Sightseeing as per itinerary\n• English-speaking guide\n• Entry fees as per itinerary\n• Night Safari Singapore\n• Sentosa Island tour\n• Safari World Bangkok\n• Phi Phi Island tour\n• Genting Highlands excursion",
      },

      excluded: {
        keywords: [
          "excluded",
          "exclusions",
          "not included",
          "package excludes",
          "what is not included",
          "thailand exclusions",
          "singapore exclusions",
          "malaysia exclusions",
        ],

        response:
          "Package Exclusions:\n\n• Personal expenses\n• Laundry charges\n• Telephone charges\n• Additional beverages\n• Optional tours not mentioned\n• Travel insurance if not included by airline/package\n• Any item not mentioned under inclusions\n\nOptional activities should be confirmed separately before booking.",
      },

      booking: {
        keywords: [
          "book",
          "booking",
          "contact",
          "enquiry",
          "enquire",
          "reservation",
          "how to book",
          "thailand booking",
          "singapore booking",
          "malaysia booking",
        ],

        response:
          "For booking, availability, hotel options and the latest package details, please contact Riya Tours & Travels.\n\nPackage: Thailand Singapore Malaysia Tour\nDuration: 12 Nights / 13 Days\nPrice: Not Available\nRating: 9.3\n\nAvailable departure dates include:\n• 16/08/2026\n• 18/09/2026\n• 17/10/2026\n• 25/10/2026\n• 20/11/2026\n• 22/12/2026\n• 22/01/2027\n\nPlease confirm the latest availability and package price before booking.",
      },

      destinations: {
        keywords: [
          "destinations",
          "destination",
          "places covered",
          "where will we go",
          "which places",
          "tour route",
          "route",
          "thailand destinations",
          "malaysia destinations",
          "singapore destinations",
        ],

        response:
          "Destinations Covered:\n\nThailand:\n• Bangkok\n• Pattaya\n• Phuket\n• Coral Island\n• Phi Phi Island\n\nMalaysia:\n• Kuala Lumpur\n• Genting Highlands\n• Batu Caves\n\nSingapore:\n• Singapore City\n• Sentosa Island\n• Night Safari\n\nThe tour covers three countries and combines beaches, islands, mountains, wildlife, city attractions and entertainment.",
      },

      thailand: {
        keywords: [
          "thailand",
          "thailand tour",
          "thailand package",
          "thailand sightseeing",
          "thailand holiday",
          "bangkok",
          "pattaya",
          "phuket",
          "coral island",
          "phi phi island",
        ],

        response:
          "Thailand is the first destination section of the tour.\n\nMajor Destinations:\n• Pattaya\n• Bangkok\n• Phuket\n\nMajor Attractions:\n• Pattaya Beach\n• Coral Island\n• Alcazar Show\n• Walking Street\n• Golden Temple\n• Marble Temple\n• Safari World\n• Marine Park\n• Chao Phraya Princess Cruise\n• Phi Phi Island\n\nThailand sightseeing takes place from Day 1 to Day 6.",
      },

      bangkok: {
        keywords: [
          "bangkok",
          "bangkok tour",
          "bangkok package",
          "bangkok sightseeing",
          "golden temple",
          "marble temple",
          "safari world",
          "chao phraya",
          "chao phraya cruise",
          "princess cruise",
        ],

        response:
          "Bangkok is covered on Days 3 and 4.\n\nMajor Attractions:\n• Golden Temple\n• Marble Temple\n• Indira Market\n• Safari World\n• Marine Park\n• Chao Phraya Princess Cruise\n\nThe Bangkok portion combines temple sightseeing, shopping, wildlife experiences and a dinner cruise.",
      },

      pattaya: {
        keywords: [
          "pattaya",
          "pattaya tour",
          "pattaya package",
          "pattaya sightseeing",
          "pattaya beach",
          "coral island",
          "alcazar show",
          "walking street",
        ],

        response:
          "Pattaya is covered during the first two days of the tour.\n\nMajor Attractions:\n• Pattaya Beach area\n• Coral Island\n• Alcazar Show\n• Walking Street\n• Pattaya local market\n\nCoral Island is visited by speed boat on Day 2.",
      },

      phuket: {
        keywords: [
          "phuket",
          "phuket tour",
          "phuket package",
          "phuket sightseeing",
          "phi phi island",
          "phi phi",
          "phuket island",
        ],

        response:
          "Phuket is covered on Days 5 and 6.\n\nDay 5:\n• Bangkok → Phuket by flight\n• Hotel transfer\n• Leisure time\n\nDay 6:\n• Full-day Phi Phi Island excursion\n• Beach activities\n• Buffet lunch\n\nPhuket provides access to some of Thailand's famous island destinations.",
      },

      malaysia: {
        keywords: [
          "malaysia",
          "malaysia tour",
          "malaysia package",
          "malaysia sightseeing",
          "malaysia holiday",
          "kuala lumpur",
          "genting",
          "batu caves",
        ],

        response:
          "Malaysia is covered from Day 7 to Day 9.\n\nMajor Destinations:\n• Kuala Lumpur\n• Genting Highlands\n• Batu Caves\n\nThe tour includes a flight from Phuket to Kuala Lumpur, Genting Highlands excursion, Batu Caves visit and Kuala Lumpur city sightseeing.",
      },

      kualalumpur: {
        keywords: [
          "kuala lumpur",
          "kuala lumpur tour",
          "kuala lumpur package",
          "kuala lumpur sightseeing",
          "petronas",
          "petronas twin towers",
          "king palace",
          "national monument",
          "national mosque",
          "independence square",
        ],

        response:
          "Kuala Lumpur is covered on Days 7 and 9.\n\nMajor Attractions:\n• Petronas Twin Towers photo stop\n• Cocoa Centre\n• King's Palace\n• National Monument\n• National Mosque\n• Independence Square\n\nThe city tour is scheduled on Day 9.",
      },

      genting: {
        keywords: [
          "genting",
          "genting highlands",
          "genting tour",
          "genting package",
          "genting sightseeing",
          "genting cable car",
          "snow world",
        ],

        response:
          "Genting Highlands is covered on Day 8.\n\nMajor Attractions:\n• Genting Cable Car\n• Snow World\n• Gaming and entertainment complex\n• Mountain resort experience\n\nBatu Caves is also visited during the excursion.\n\nThe Genting Highlands excursion is included in the package.",
      },

      batu: {
        keywords: [
          "batu caves",
          "batu caves tour",
          "batu caves sightseeing",
          "batu cave",
        ],

        response:
          "Batu Caves is covered during the Genting Highlands excursion on Day 8.\n\nThe tour includes a visit to Batu Caves along with the Genting Highlands excursion.",
      },

      singapore: {
        keywords: [
          "singapore",
          "singapore tour",
          "singapore package",
          "singapore sightseeing",
          "singapore holiday",
          "night safari",
          "sentosa",
          "marina bay",
          "merlion",
        ],

        response:
          "Singapore is the final destination section of the tour and is covered from Day 10 to Day 13.\n\nMajor Attractions:\n• Night Safari\n• Marina Bay\n• SkyPark area\n• Sentosa Island\n• Mount Faber\n• Merlion Tower\n• Sky Ride\n• Light and sound show\n• Optional Universal Studios Singapore\n\nThe tour ends with departure from Singapore Airport on Day 13.",
      },

      sentosa: {
        keywords: [
          "sentosa",
          "sentosa island",
          "sentosa tour",
          "sentosa sightseeing",
          "mount faber",
          "sky ride",
          "merlion",
        ],

        response:
          "Sentosa Island is covered on Day 11.\n\nMajor Attractions:\n• Sentosa Island\n• Mount Faber\n• Merlion Tower\n• Sky Ride\n• Light and sound show\n\nSentosa provides an entertainment and island experience within the Singapore portion of the tour.",
      },

      universal: {
        keywords: [
          "universal",
          "universal studios",
          "universal studios singapore",
          "theme park",
          "theme park singapore",
        ],

        response:
          "Universal Studios Singapore is available as an optional activity on Day 12.\n\nDay 12 is primarily a free day for leisure and shopping. Guests may choose to visit Universal Studios Singapore at additional cost unless specifically included in their confirmed package.",
      },

      safari: {
        keywords: [
          "safari",
          "night safari",
          "safari world",
          "marine park",
          "wildlife",
          "wildlife tour",
        ],

        response:
          "The tour includes two major wildlife experiences.\n\nBangkok:\n• Safari World\n• Marine Park\n\nSingapore:\n• Night Safari with wildlife experience\n• Tram ride\n\nSafari World is scheduled on Day 4 and Night Safari is scheduled on Day 10.",
      },

      hotels: {
        keywords: [
          "hotel",
          "hotels",
          "accommodation",
          "stay",
          "room",
          "thailand hotel",
          "singapore hotel",
          "malaysia hotel",
          "bangkok hotel",
          "pattaya hotel",
          "phuket hotel",
          "genting hotel",
        ],

        response:
          "The Thailand Singapore Malaysia Tour includes 4★ / 5★ hotel accommodation.\n\nPlanned Hotels:\n\nBangkok:\n• Bangkok Palace Hotel (4★)\n\nPattaya:\n• Beverly Plaza Hotel (4★)\n\nPhuket:\n• The Fisherman Harbour Beach Resort (5★)\n\nSingapore:\n• Hilton Garden Inn Singapore (4★)\n\nKuala Lumpur:\n• Ramada Kuala Lumpur (4★)\n\nGenting Highlands:\n• First World Hotel\n\nHotel names are subject to availability and operational confirmation.",
      },

      meals: {
        keywords: [
          "meal",
          "meals",
          "food",
          "breakfast",
          "lunch",
          "dinner",
          "thailand meals",
          "singapore meals",
          "malaysia meals",
          "food included",
        ],

        response:
          "Meals included in the Thailand Singapore Malaysia Tour are:\n\n• Daily breakfast\n• Lunch\n• Dinner\n\nIndian buffet meals are provided at selected locations as per the itinerary.\n\nAdditional beverages are not included.",
      },

      transport: {
        keywords: [
          "transport",
          "transportation",
          "vehicle",
          "car",
          "coach",
          "ac",
          "transfer",
          "thailand transport",
          "malaysia transport",
          "singapore transport",
        ],

        response:
          "Transportation is included throughout the Thailand Singapore Malaysia Tour.\n\nTransport includes:\n• Airport transfers\n• Local sightseeing transfers\n• Pattaya → Bangkok transfer\n• Bangkok → Phuket flight transfer\n• Phuket → Kuala Lumpur flight transfer\n• Kuala Lumpur → Singapore road transfer\n• Singapore local transportation\n• Genting Highlands excursion\n\nParking charges and toll tax are also included.",
      },

      facilities: {
        keywords: [
          "facilities",
          "facility",
          "services",
          "tour facilities",
          "travel facilities",
          "package facilities",
        ],

        response:
          "Facilities Available:\n\n• 4★ / 5★ hotel accommodation\n• Daily breakfast\n• Lunch\n• Dinner\n• Transportation throughout the tour\n• Parking charges\n• Toll tax\n• Return air tickets\n• Visa support for Thailand, Malaysia and Singapore as applicable\n• Experienced tour manager\n• English-speaking guide\n• Sightseeing as per itinerary\n• Entry fees as per itinerary\n• Night Safari Singapore\n• Sentosa Island tour\n• Safari World Bangkok\n• Phi Phi Island tour\n• Genting Highlands excursion",
      },

      visa: {
        keywords: [
          "visa",
          "thailand visa",
          "malaysia visa",
          "singapore visa",
          "visa included",
          "visa cost",
          "international visa",
        ],

        response:
          "Visa arrangements included in the package are:\n\n• Thailand visa, if applicable as per package\n• Malaysia visa\n• Singapore visa\n\nVisa requirements and charges may depend on the applicable rules and package confirmation. Please confirm the latest visa requirements before booking.",
      },

      flight: {
        keywords: [
          "flight",
          "flights",
          "air ticket",
          "air tickets",
          "return flight",
          "international flight",
          "thailand flight",
          "singapore flight",
          "malaysia flight",
        ],

        response:
          "Return air tickets are included in the Thailand Singapore Malaysia Tour.\n\nFlight transfers within the itinerary include:\n• Bangkok → Phuket\n• Phuket → Kuala Lumpur\n\nThe tour ends with a return flight from Singapore to India.\n\nFlights are subject to availability at the time of booking.",
      },

      package1: {
        keywords: [
          "package 1",
          "first package",
          "option 1",
          "thailand package 1",
          "singapore package 1",
          "malaysia package 1",
          "13 days",
          "12 nights",
        ],

        response:
          "Thailand Singapore Malaysia Tour Package 1:\n\nDuration: 12 Nights / 13 Days\nPrice: Not Available\nRating: 9.3\n\nDestinations:\nBangkok, Pattaya, Phuket, Kuala Lumpur, Genting Highlands and Singapore.\n\nThe package includes hotels, meals, transportation, return air tickets, selected visas, sightseeing, tour manager, guides and major attractions mentioned in the itinerary.",
      },

      departure: {
        keywords: [
          "departure",
          "departure date",
          "travel date",
          "dates",
          "available dates",
          "thailand departure",
          "singapore departure",
          "malaysia departure",
          "tour dates",
        ],

        response:
          "Available Departure Dates for the Thailand Singapore Malaysia Tour:\n\n• 16/08/2026\n• 18/09/2026\n• 17/10/2026\n• 25/10/2026\n• 20/11/2026\n• 22/12/2026\n• 22/01/2027\n\nPlease confirm seat availability, flight schedules and the latest package price with Riya Tours & Travels before booking.",
      },

      insurance: {
        keywords: [
          "insurance",
          "travel insurance",
          "insurance included",
          "thailand insurance",
          "singapore insurance",
          "malaysia insurance",
        ],

        response:
          "Travel insurance is not guaranteed as a standard inclusion in this package.\n\nThe package specifically mentions travel insurance only if it is included by the airline or confirmed as part of the package.\n\nPlease confirm the insurance coverage before booking.",
      },

      difference: {
        keywords: [
          "difference",
          "package difference",
          "difference between packages",
          "package comparison",
          "which package",
          "which one is better",
        ],

        response:
          "Currently, one package option is available for the Thailand Singapore Malaysia Tour.\n\nPackage 1:\n• 12 Nights / 13 Days\n• Price: Not Available\n• Bangkok\n• Pattaya\n• Phuket\n• Kuala Lumpur\n• Genting Highlands\n• Singapore\n\nThe package combines three countries with beaches, islands, wildlife, mountain attractions, city tours and entertainment.\n\nFor the latest package options, please contact Riya Tours & Travels.",
      },

      notes: {
        keywords: [
          "notes",
          "important",
          "important information",
          "rules",
          "terms",
          "conditions",
          "tour notes",
        ],

        response:
          "Important Notes:\n\n• Flights, hotel rooms and transportation are subject to availability at the time of booking.\n• Tour schedules may change due to operational, weather or local conditions.\n• Package price will be confirmed at the time of booking.\n• Optional tours and activities are not included unless specifically mentioned.\n• Visa requirements may vary depending on applicable rules.\n• Please confirm all final arrangements before booking.",
      },
    },
  },
  // {
  //   id: 35,
  //   keywords: ["phu", "quoc", "vietnam", "vietnam phu quoc"],
  //   answer:
  //     " Vietnam Phu Quoc International Tour Package\n\n Explore Vietnam Phu Quoc with Riya Tours & Travels.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact Riya Tours & Travels for the latest package price and availability.",
  // },
  // {
  //   id: 36,
  //   keywords: ["srilanka"],
  //   answer:
  //     " Srilanka International Tour Package\n\n Explore Srilanka with Riya Tours & Travels.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact Riya Tours & Travels for the latest package price and availability.",
  // },
  // {
  //   id: 37,
  //   keywords: [
  //     "genting",
  //     "malaysia",
  //     "singapore",
  //     "singapore malaysia, genting",
  //   ],
  //   answer:
  //     " Singapore Malaysia, Genting International Tour Package\n\n Explore Singapore Malaysia, Genting with Riya Tours & Travels.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact Riya Tours & Travels for the latest package price and availability.",
  // },
  // {
  //   id: 38,
  //   keywords: [
  //     "malyasia",
  //     "singapore",
  //     "thailand",
  //     "thailand singapore malyasia",
  //   ],
  //   answer:
  //     " Thailand Singapore Malyasia International Tour Package\n\n Explore Thailand Singapore Malyasia with Riya Tours & Travels.\n Customized itinerary\n Hotel & resort options\n Sightseeing and transfers\n Flight assistance\n Visa/travel guidance where applicable\n\n Contact Riya Tours & Travels for the latest package price and availability.",
  // },
  // {
  //   id: 39,
  //   keywords: ["flight", "air", "plane", "airline", "flight booking"],
  //   answer:
  //     " Yes! We provide domestic and international flight booking assistance at competitive prices.",
  // },
  // {
  //   id: 40,
  //   keywords: ["hotel", "resort", "stay", "accommodation"],
  //   answer:
  //     " We provide Hotel & Resort booking from Budget to Luxury 5-Star properties across India and abroad.",
  // },
  // {
  //   id: 41,
  //   keywords: ["train", "rail", "railway"],
  //   answer:
  //     " We can assist you with train ticket booking and complete railway travel planning.",
  // },
  // {
  //   id: 42,
  //   keywords: ["bus", "car", "cab", "taxi", "transport"],
  //   answer:
  //     " We provide Bus Booking, Private Cab, Tempo Traveller and Luxury Car Rental services.",
  // },
  // {
  //   id: 43,
  //   keywords: ["price", "cost", "budget", "cheap", "affordable", "rate"],
  //   answer:
  //     " We have travel packages across different budgets. Please tell me your preferred destination, number of travelers and approximate budget.",
  // },
  // {
  //   id: 44,
  //   keywords: ["honeymoon", "couple", "romantic"],
  //   answer:
  //     " Popular honeymoon destinations include Kashmir, Manali, Bali, Maldives, Andaman and Switzerland.",
  // },
  // {
  //   id: 45,
  //   keywords: ["family", "family tour", "family trip"],
  //   answer:
  //     "‍‍‍ Family packages are available for Kerala, Darjeeling, Sikkim, Rajasthan, Kashmir, Meghalaya and many more destinations.",
  // },
  // {
  //   id: 46,
  //   keywords: [
  //     "adventure",
  //     "trek",
  //     "trekking",
  //     "camping",
  //     "rafting",
  //     "paragliding",
  //     "scuba",
  //   ],
  //   answer:
  //     " Adventure packages include trekking, river rafting, camping, paragliding, scuba diving and more.",
  // },
  // {
  //   id: 47,
  //   keywords: ["contact", "phone", "call", "number", "email"],
  //   answer:
  //     " Contact us:\n\nPhone: +91 9876543210\nEmail: support@Riya Tours & Travels.com",
  // },
  // {
  //   id: 48,
  //   keywords: ["office", "address", "location"],
  //   answer:
  //     " Our office is located in Kolkata, West Bengal. We also provide online travel consultation.",
  // },
  // {
  //   id: 49,
  //   keywords: ["payment", "pay", "upi", "card", "emi", "net banking"],
  //   answer:
  //     " We accept UPI, Credit Card, Debit Card, Net Banking and EMI options.",
  // },
  // {
  //   id: 50,
  //   keywords: ["refund", "cancel", "cancellation", "cancellation policy"],
  //   answer:
  //     " Cancellation and refund policies depend on the selected package. Please contact our support team for detailed information.",
  // },
  // {
  //   id: 51,
  //   keywords: ["visa", "passport"],
  //   answer:
  //     " Visa and passport guidance is available for applicable international destinations. Requirements depend on the destination and traveler profile.",
  // },
  // {
  //   id: 52,
  //   keywords: ["customized", "custom", "customize", "personalized"],
  //   answer:
  //     " Yes! We can create customized itineraries based on your destination, duration, budget, hotel preference and activities.",
  // },
  // {
  //   id: 53,
  //   keywords: ["best destination", "where to go", "travel destination"],
  //   answer:
  //     " Tell me your travel month, budget and whether you prefer mountains, beaches, nature, adventure or sightseeing, and I can suggest suitable destinations.",
  // },
  // {
  //   id: 54,
  //   keywords: ["thanks", "thank you", "thank"],
  //   answer:
  //     " You're most welcome! If you have any more questions, feel free to ask. Happy Travels! ",
  // },
  // {
  //   id: 55,
  //   keywords: ["bye", "goodbye", "see you"],
  //   answer:
  //     " Thank you for choosing Riya Tours & Travels. Have a wonderful journey! ",
  // },
];

export default chatBotData;
