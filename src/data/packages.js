import {
  Plane,
  Hotel,
  Utensils,
  Car,
  Camera,
  MapPinned,
  Train,
  Ship,
} from "lucide-react";

const packages = [
  // domestic
  {
    id: 1,

    category: "domestic",

    slug: "ajanta-ellora-mumbai-goa-tour",

    title: "Ajanta Ellora Mumbai Goa",

    image:
      "/images/ajanta-elora-mumbai-goa/banner.webp",

    gallery: [
      "/images/ajanta-elora-mumbai-goa/banner.webp",
      "/images/ajanta-elora-mumbai-goa/banner2.webp",
      "/images/ajanta-elora-mumbai-goa/day1_1.webp",
      "/images/ajanta-elora-mumbai-goa/day1.webp",
      "/images/ajanta-elora-mumbai-goa/day2_1.webp",
      "/images/ajanta-elora-mumbai-goa/day2_2.webp",
      "/images/ajanta-elora-mumbai-goa/day2.webp",
      "/images/ajanta-elora-mumbai-goa/day3_1.webp",
      "/images/ajanta-elora-mumbai-goa/day3_2.webp",
      "/images/ajanta-elora-mumbai-goa/day3_3.webp",
      "/images/ajanta-elora-mumbai-goa/day3_4.webp",
      "/images/ajanta-elora-mumbai-goa/day3.webp",
      "/images/ajanta-elora-mumbai-goa/day4_1.webp",
      "/images/ajanta-elora-mumbai-goa/day4_4.webp",
      "/images/ajanta-elora-mumbai-goa/day4.webp",
      "/images/ajanta-elora-mumbai-goa/day5_2.webp",
      "/images/ajanta-elora-mumbai-goa/day5_3.webp",
      "/images/ajanta-elora-mumbai-goa/day5_4.webp",
      "/images/ajanta-elora-mumbai-goa/day5.webp",
      "/images/ajanta-elora-mumbai-goa/day6_1.webp",
      "/images/ajanta-elora-mumbai-goa/day6_3.webp",
      "/images/ajanta-elora-mumbai-goa/day6.webp",
      "/images/ajanta-elora-mumbai-goa/day7_1.webp",
      "/images/ajanta-elora-mumbai-goa/day7.webp",
      "/images/ajanta-elora-mumbai-goa/day8_1.webp",
      "/images/ajanta-elora-mumbai-goa/day8_2.webp",
      "/images/ajanta-elora-mumbai-goa/day8.webp"
    ],

    perPerson: true,

    rating: 8.7,

    location: "Ajanta • Ellora • Aurangabad • Mumbai • Mahabaleshwar • Goa",

    facilities: [
      {
        id: 1,
        icon: Train,
        label: "Train Included",
      },
      {
        id: 2,
        icon: Hotel,
        label: "Hotel Stay",
      },
      {
        id: 3,
        icon: Utensils,
        label: "Meals Included",
      },
      {
        id: 4,
        icon: Car,
        label: "Transport Included",
      },
      {
        id: 5,
        icon: Camera,
        label: "Sightseeing",
      },
      {
        id: 6,
        icon: MapPinned,
        label: "Tour Assistance",
      },
    ],

    overview:
      "Explore the cultural and scenic wonders of Maharashtra and Goa with this exciting tour covering Ajanta Caves, Ellora Caves, Aurangabad, Mumbai, Mahabaleshwar, and the beaches of Goa. Enjoy heritage monuments, temples, hill stations, and coastal attractions in one memorable journey.",

    packages: {
      package1: {
        duration: "12 Nights / 13 Days",
        price: 33500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Bhusaval",
            distance: "Train journey",
            description:
              "Board train (12262) from Howrah Railway Station for Bhusaval. Overnight stay in train.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day1_1.webp",
              "/images/ajanta-elora-mumbai-goa/day1.webp",
            ],
          },

          {
            day: 2,
            title: "Arrival at Bhusaval → Ajanta",
            distance: "Road transfer",
            description:
              "Reach Bhusaval Railway Station and proceed to Ajanta Caves. Overnight stay at Ajanta.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day2_1.webp",
              "/images/ajanta-elora-mumbai-goa/day2_2.webp",
              "/images/ajanta-elora-mumbai-goa/day2.webp",
            ],
          },

          {
            day: 3,
            title: "Ajanta → Ellora",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Ellora via Girijamata Temple. Visit Grishneshwar Jyotirlinga and Ellora Caves. Overnight stay at Ellora.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day3_1.webp",
              "/images/ajanta-elora-mumbai-goa/day3_2.webp",
              "/images/ajanta-elora-mumbai-goa/day3_3.webp",
              "/images/ajanta-elora-mumbai-goa/day3_4.webp",
              "/images/ajanta-elora-mumbai-goa/day3.webp",
            ],
          },

          {
            day: 4,
            title: "Ellora → Aurangabad",
            distance: "Road transfer",
            description:
              "Visit Bibi Ka Maqbara, Panchakki, Chhatrapati Shivaji Maharaj Museum, and other local attractions. Overnight stay at Aurangabad.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day4_1.webp",
              "/images/ajanta-elora-mumbai-goa/day4_4.webp",
              "/images/ajanta-elora-mumbai-goa/day4.webp",
            ],
          },

          {
            day: 5,
            title: "Aurangabad → Mumbai",
            distance: "Train journey",
            description:
              "Transfer to Chhatrapati Sambhaji Nagar Railway Station and take train to Mumbai. Transfer to hotel on arrival. Overnight stay at Mumbai.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day5_2.webp",
              "/images/ajanta-elora-mumbai-goa/day5_3.webp",
              "/images/ajanta-elora-mumbai-goa/day5_4.webp",
              "/images/ajanta-elora-mumbai-goa/day5.webp",
            ],
          },

          {
            day: 6,
            title: "Mumbai Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Gateway of India, Marine Drive, Taraporewala Aquarium, Hanging Garden, Juhu Beach, Mahalaxmi Temple, Boot House, Siddhivinayak Temple, and more. Overnight stay at Mumbai.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day6_1.webp",
              "/images/ajanta-elora-mumbai-goa/day6_3.webp",
              "/images/ajanta-elora-mumbai-goa/day6.webp",
            ],
          },

          {
            day: 7,
            title: "Mumbai → Mahabaleshwar",
            distance: "Road transfer",
            description:
              "Drive to Mahabaleshwar and check in to the hotel. Overnight stay at Mahabaleshwar.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day7_1.webp",
              "/images/ajanta-elora-mumbai-goa/day7.webp",
            ],
          },

          {
            day: 8,
            title: "Mahabaleshwar Sightseeing → Pune → Goa",
            distance: "Road + Train transfer",
            description:
              "Visit Elephant's Head Point, Mahabaleshwar Temple, Veena Lake, and nearby attractions. Later transfer to Pune Railway Station and board train for Goa. Overnight stay in train.",
            images: [
              "/images/ajanta-elora-mumbai-goa/day8_1.webp",
              "/images/ajanta-elora-mumbai-goa/day8_2.webp",
              "/images/ajanta-elora-mumbai-goa/day8.webp",
            ],
          },

          {
            day: 9,
            title: "Arrival at Goa",
            distance: "Railway station transfer",
            description:
              "Reach Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.",
            images: [],
          },

          {
            day: 10,
            title: "North Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach, Miramar Beach, and nearby attractions. Overnight stay at Goa.",
            images: [],
          },

          {
            day: 11,
            title: "South Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit St. Xavier's Church, Mangesh Temple, Santadurga Temple, Colva Beach, and other attractions. Overnight stay at Goa.",
            images: [],
          },

          {
            day: 12,
            title: "Goa → Kolkata",
            distance: "Train journey",
            description:
              "Check out early morning and transfer to Madgaon Railway Station. Board train (18048) for Kolkata. Overnight stay in train.",
            images: [],
          },

          {
            day: 13,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar Railway Station with sweet memories of the tour.",
            images: [],
          },
        ],
      },
    },

    included: [
      "Accommodation (Deluxe Room)",
      "Train ticket (Sleeper Class)",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight ticket",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permit charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/ajanta-ellora-mumbai-goa-tour",
  },
  {
    id: 2,

    category: "domestic",

    slug: "madhya-pradesh-tour",

    title: "Madhya Pradesh",

    image: "/images/madhyapradesh/mp_banner.webp",

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.8,

    location:
      "Amarkantak • Jabalpur • Omkareshwar • Ujjain • Khajuraho • Bandhavgarh • Panchmarhi",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Discover the spiritual, historical, and natural wonders of Madhya Pradesh with this comprehensive tour covering Amarkantak, Jabalpur, Omkareshwar, Ujjain, Khajuraho, Bandhavgarh, and Panchmarhi. Enjoy Jyotirlinga darshan, waterfalls, marble rocks, temples, wildlife, and hill station beauty in one memorable journey.",

    packages: {
      package1: {
        duration: "09 Nights / 10 Days",
        price: 22900,
        itinerary: [
          {
            day: 1,
            title: "Shalimar → Pendra Road",
            distance: "Train journey",
            description:
              "Board train (22830 / 20972) from Shalimar Railway Station. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Pendra Road → Amarkantak",
            distance: "Road transfer",
            description:
              "Reach Pendra Road Railway Station and transfer to Amarkantak. Enjoy local sightseeing. Overnight stay at Amarkantak.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Amarkantak → Jabalpur",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Jabalpur and check in to the hotel. Overnight stay at Jabalpur.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Jabalpur Sightseeing → Omkareshwar",
            distance: "Road transfer",
            description:
              "Visit Dhuandhar Falls, Bhedaghat, Marble Rocks, and nearby attractions. Optional boat ride at own cost. Later proceed to Omkareshwar. Overnight stay at Omkareshwar.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Omkareshwar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Omkareshwar Jyotirlinga and the sacred Narmada River. Overnight stay at Omkareshwar.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Omkareshwar → Ujjain",
            distance: "Road transfer",
            description:
              "After breakfast drive to Ujjain and check in to the hotel. Overnight stay at Ujjain.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Ujjain Temple Circuit",
            distance: "Local sightseeing",
            description:
              "Visit Kaal Bhairav Temple, Maharshi Sandipani Ashram, Ram Ghat, Harsiddhi Mata Shaktipeeth, Gadh Kalika Mata Temple, and Mangalnath Temple. Overnight stay at Ujjain.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Mahakaleshwar Darshan → Return Train",
            distance: "Local sightseeing + train",
            description:
              "Visit Mahakaleshwar Jyotirlinga and return to the hotel. After dinner transfer to Ujjain Railway Station and board the return train. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue the return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of the Madhya Pradesh tour.",
            images: [null, null],
          },
        ],
      },

      package2: {
        duration: "10 Nights / 11 Days",
        price: 26500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Satna",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Satna. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Satna → Khajuraho",
            distance: "Road transfer",
            description:
              "Reach Satna Railway Station and transfer to Khajuraho. Overnight stay at Khajuraho.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Khajuraho Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit the famous Khajuraho Temples. Optional Light & Sound Show and cultural dance program at own cost. Overnight stay at Khajuraho.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Khajuraho → Bandhavgarh",
            distance: "Road transfer",
            description:
              "Proceed to Bandhavgarh with packed lunch. En route visit Pandav Gupha (entry fee at own cost). Overnight stay at Bandhavgarh.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Bandhavgarh → Amarkantak",
            distance: "Road transfer",
            description:
              "Optional morning jungle safari at own cost. After breakfast drive to Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Amarkantak Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore the sacred temples, Narmada Udgam, waterfalls, and local attractions of Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Amarkantak → Panchmarhi",
            distance: "Road transfer",
            description:
              "Enjoy additional local sightseeing in Amarkantak and later proceed to Panchmarhi. Overnight stay at Panchmarhi.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Panchmarhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Panchmarhi hill station. Optional jungle safari and local vehicle at own cost. Overnight stay at Panchmarhi.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Panchmarhi → Jabalpur",
            distance: "Road transfer",
            description:
              "After breakfast drive to Jabalpur and check in to the hotel. Overnight stay at Jabalpur.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Jabalpur Sightseeing → Return Train",
            distance: "Local sightseeing + train",
            description:
              "Visit Dhuandhar Falls, Bhedaghat, Marble Rocks, and nearby attractions. Optional boat ride at own cost. Later transfer to Jabalpur Railway Station and board the return train. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of the tour.",
            images: [null, null],
          },
        ],
      },

      package3: {
        duration: "14 Nights / 15 Days",
        price: 35000,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Satna",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Satna. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Satna → Khajuraho",
            distance: "Road transfer",
            description:
              "Reach Satna Railway Station and transfer to Khajuraho. Overnight stay at Khajuraho.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Khajuraho Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Khajuraho Temples. Optional Light & Sound Show and cultural dance program at own cost. Overnight stay at Khajuraho.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Khajuraho → Bandhavgarh",
            distance: "Road transfer",
            description:
              "Proceed to Bandhavgarh with packed lunch. En route visit Pandav Gupha (entry fee at own cost). Overnight stay at Bandhavgarh.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Bandhavgarh → Amarkantak",
            distance: "Road transfer",
            description:
              "Optional morning jungle safari at own cost. After breakfast drive to Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Amarkantak Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore the temples, waterfalls, and sacred Narmada Udgam area of Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Amarkantak → Jabalpur",
            distance: "Road transfer",
            description:
              "After breakfast enjoy additional sightseeing and later proceed to Jabalpur. Overnight stay at Jabalpur.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Jabalpur Sightseeing → Panchmarhi",
            distance: "Road transfer",
            description:
              "Visit Dhuandhar Falls, Bhedaghat, Marble Rocks, and nearby attractions. Optional boat ride at own cost. Later proceed to Panchmarhi. Overnight stay at Panchmarhi.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Panchmarhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Panchmarhi hill station. Optional jungle safari and local vehicle at own cost. Overnight stay at Panchmarhi.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Panchmarhi → Omkareshwar",
            distance: "Road transfer",
            description:
              "After breakfast drive to Omkareshwar and check in to the hotel. Overnight stay at Omkareshwar.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Omkareshwar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Omkareshwar Jyotirlinga and the banks of the Narmada River. Overnight stay at Omkareshwar.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Omkareshwar → Ujjain",
            distance: "Road transfer",
            description:
              "Proceed to Ujjain and check in to the hotel. Overnight stay at Ujjain.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Ujjain Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Mahakaleshwar Jyotirlinga and major temples of Ujjain. Overnight stay at Ujjain.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Ujjain → Return Train",
            distance: "Train journey",
            description:
              "After breakfast transfer to Ujjain Railway Station and board the return train. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 15,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of the complete Madhya Pradesh tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Accommodation (Deluxe Room)",
      "Up & down train fare (Sleeper Class)",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permit",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/madhya-pradesh-tour",
  },
  {
    id: 3,

    category: "domestic",

    slug: "andaman-tour",

    title: "Andaman",

    image: "/images/andaman/andamanbg.webp",

    gallery: ["/images/andaman/BARATANG.webp",
      "/images/andaman/BAY-ISLAND.webp",
      "/images/andaman/day-7-back-to-kolkata-airport.webp",
      "/images/andaman/Day-7-International-Airport-in-Port-Blair.webp",
      "/images/andaman/day-limestone.webp",
      "/images/andaman/Day1-Cellular_Jail.webp",
      "/images/andaman/Day1-corbyns-beach.webp",
      "/images/andaman/Day2-north-bay-andaman.webp",
      "/images/andaman/Day2-Ross-Island.webp",
      "/images/andaman/DENSE.webp",
      "/images/andaman/HAVELOCK.webp",
      "/images/andaman/JARAWA.webp",
      "/images/andaman/RADHANAGAR.webp",
      "/images/andaman/ROSS-ISLAND.webp",],

    perPerson: true,

    rating: 8.7,

    location: "Port Blair • Havelock • Neil Island",

    facilities: [
      { id: 1, icon: Plane, label: "Airport Pickup" },
      { id: 2, icon: Hotel, label: "AC Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "AC Transport" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Cruise & Boat Included" },
    ],

    overview:
      "Experience the tropical beauty of the Andaman Islands with this scenic tour covering Port Blair, Havelock Island, and Neil Island. Explore pristine beaches, coral islands, historic Cellular Jail, Baratang Island, and breathtaking island landscapes.",

    packages: {
      package1: {
        duration: "06 Nights / 07 Days",
        price: 20500,
        itinerary: [
          {
            day: 1,

            title: "Pick Up from Port Blair & Visit Cellular Jail",

            distance: "Airport transfer • Local sightseeing",

            description:
              "Pick up from Port Blair Airport and transfer to the hotel. Visit Cellular Jail and explore this historic landmark of the Andaman Islands. Cellular Jail, also known as Kala Pani (Black Water), is a colonial prison in Port Blair, Andaman and Nicobar Islands. Built by the British between 1896 and 1906, it was used to exile and isolate Indian freedom fighters in brutal solitary confinement. Today, it stands as a national memorial. Later attend the Sound & Light Show at Cellular Jail. Overnight stay at Port Blair.",

            images: ["/images/andaman/Day1-Cellular_Jail.webp", "/images/andaman/Day1-corbyns-beach.webp"],

            facilities: [
              {
                id: 1,
                icon: Car,
                label: "Airport Transfer",
              },
              {
                id: 2,
                icon: Hotel,
                label: "Hotel Stay",
              },
            ],
          },

          {
            day: 2,

            title: "Ross Island & North Bay Coral Island",

            distance: "Boat excursion • Island sightseeing",

            description:
              "After breakfast proceed for an island excursion covering Ross Island and North Bay Coral Island. The history of the Andaman Islands spans thousands of years of indigenous isolation, medieval maritime trade, and a turbulent colonial era as a British penal colony known as Kala Pani, before becoming a strategic Union Territory of India. Ross Island, officially renamed Netaji Subhas Chandra Bose Island, is a tiny historical island near Port Blair in the Andamans. Named after marine surveyor Daniel Ross, it served as the elite administrative headquarters for the British penal colony from 1858 until 1941, earning the moniker 'Paris of the East' before earthquakes, war, and creeping jungle roots left it abandoned. Continue the sightseeing and coral island experience at North Bay. Return to Port Blair. Overnight stay at Port Blair.",

            images: ["/images/andaman/Day2-north-bay-andaman.webp",
              "/images/andaman/Day2-Ross-Island.webp"],

            facilities: [
              {
                id: 1,
                icon: Utensils,
                label: "Breakfast",
              },
              {
                id: 2,
                icon: Ship,
                label: "Boat Excursion",
              },
              {
                id: 3,
                icon: Hotel,
                label: "Hotel Stay",
              },
            ],
          },

          {
            day: 3,

            title: "Way to Havelock Island",

            distance: "Cruise transfer • Beach sightseeing",

            description:
              "After breakfast proceed towards Havelock Island. Havelock Island, officially renamed Swaraj Dweep, lies 57 kilometers northeast of Port Blair. It was originally named after British General Sir Henry Havelock. Post-independence, the island was settled by Bengali refugees, and in December 2018, Prime Minister Narendra Modi renamed it to honor Subhas Chandra Bose's freedom movement legacy. On arrival visit the famous Radhanagar Beach. Radhanagar gained global fame in 2004 when TIME magazine named it Asia's best beach. In December 2018, the island was renamed Swaraj Dweep to honor Subhas Chandra Bose. Enjoy the scenic beauty of Radhanagar Beach. Overnight stay at Havelock Island.",

            images: ["/images/andaman/HAVELOCK.webp", "/images/andaman/RADHANAGAR.webp", "/images/andaman/BARATANG.webp"],

            facilities: [
              {
                id: 1,
                icon: Utensils,
                label: "Breakfast",
              },
              {
                id: 2,
                icon: Ship,
                label: "Cruise Transfer",
              },
              {
                id: 3,
                icon: Hotel,
                label: "Hotel Stay",
              },
            ],
          },

          {
            day: 4,

            title: "Havelock → Neil Island",

            distance: "Cruise transfer • Island sightseeing",

            description:
              "After breakfast check out from Havelock Island and proceed towards Neil Island by cruise. On arrival visit Bharatpur Beach, Natural Bridge, and Laxmanpur Beach. Explore the natural beauty and peaceful surroundings of Neil Island. Overnight stay at Neil Island.",

            images: ["/images/andaman/HAVELOCK.webp", "/images/andaman/ROSS-ISLAND.webp"],

            facilities: [
              {
                id: 1,
                icon: Utensils,
                label: "Breakfast",
              },
              {
                id: 2,
                icon: Ship,
                label: "Cruise Transfer",
              },
              {
                id: 3,
                icon: Hotel,
                label: "Hotel Stay",
              },
            ],
          },

          {
            day: 5,

            title: "Neil Island → Port Blair",

            distance: "Cruise transfer",

            description:
              "After breakfast check out from the hotel and return to Port Blair by cruise. Enjoy the scenic journey across the Andaman Sea. On arrival at Port Blair transfer to the hotel. Overnight stay at Port Blair.",

            images: ["/images/andaman/DENSE.webp", "/images/andaman/ROSS-ISLAND.webp"],

            facilities: [
              {
                id: 1,
                icon: Utensils,
                label: "Breakfast",
              },
              {
                id: 2,
                icon: Ship,
                label: "Cruise Transfer",
              },
              {
                id: 3,
                icon: Hotel,
                label: "Hotel Stay",
              },
            ],
          },

          {
            day: 6,

            title: "Baratang Island Excursion",

            distance: "Full day excursion • Road transfer",

            description:
              "After an early morning start, proceed for a full-day excursion to Baratang Island. Baratang has a rich history tied to indigenous tribes like the Jarawa, ancient archaeological sites dating back to 420 CE, and late 19th-century settlement by laborers from Ranchi sent by the British. It served as a historical hub for colonial timber logging and agriculture. The Jarawa are an indigenous hunter-gatherer tribe living in the South and Middle Andaman Islands. Their ancestors migrated from Africa tens of thousands of years ago. They lived in strict, self-imposed isolation and fiercely defended their forest territory from outsiders until making peaceful, voluntary first contact with modern society in October 1997. Historically shaped by indigenous isolation, British penal-colony exploitation, and post-independence timber management, these isolated jungles harbor high levels of endemic flora like the Andaman Padauk. Explore Baratang Island and its natural surroundings before returning to Port Blair in the evening. Overnight stay at Port Blair.",

            images: ["/images/andaman/BARATANG.webp", "/images/andaman/ROSS-ISLAND.webp"],

            facilities: [
              {
                id: 1,
                icon: Car,
                label: "Road Transfer",
              },
              {
                id: 2,
                icon: Hotel,
                label: "Hotel Stay",
              },
            ],
          },

          {
            day: 7,

            title: "Departure from Port Blair",

            distance: "Airport transfer",

            description:
              "After breakfast check out from the hotel and transfer to Port Blair Airport for your onward journey with sweet memories of the Andaman tour.",

            images: ["/images/andaman/day-7-back-to-kolkata-airport.webp",
              "/images/andaman/Day-7-International-Airport-in-Port-Blair.webp"],

            facilities: [
              {
                id: 1,
                icon: Utensils,
                label: "Breakfast",
              },
              {
                id: 2,
                icon: Car,
                label: "Airport Transfer",
              },
            ],
          },
        ],
      },
    },

    included: [
      "AC accommodation",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "AC transportation",
      "Boat tickets",
      "Cruise tickets",
      "Entry fees",
      "Parking & toll tax",
      "Airport pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Camera charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/andaman-tour",
  },
  {
    id: 4,

    category: "domestic",

    slug: "arunachal-kaziranga-tour",

    title: "Arunachal Pradesh",

    image: "/images/arunachal-pradesh/arunachal_banner.webp",

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.9,

    location: "Guwahati • Bhalukpong • Bomdila • Tawang • Dirang • Kaziranga",

    facilities: [
      { id: 1, icon: Train, label: "3 AC Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transportation Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Arunachal Permit Included" },
    ],

    overview:
      "Explore the breathtaking beauty of Arunachal Pradesh with this scenic tour covering Guwahati, Bhalukpong, Bomdila, Tawang, Dirang, and Kaziranga. Witness monasteries, high mountain passes, crystal lakes, waterfalls, tribal culture, and the famous Kaziranga National Park in one unforgettable journey.",

    packages: {
      package1: {
        duration: "10 Nights / 11 Days",
        price: 28500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Kamakhya",
            distance: "Train journey",
            description:
              "Board Vande Bharat train from Howrah Railway Station at 6:20 PM for Kamakhya. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Guwahati",
            distance: "Kamakhya → Guwahati",
            description:
              "Reach Kamakhya Railway Station, transfer to hotel, visit Kamakhya Temple, and overnight stay at Guwahati.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Guwahati → Bhalukpong",
            distance: "241 km",
            description:
              "Drive to Bhalukpong and enjoy the scenic foothills of Arunachal Pradesh. Overnight stay at Bhalukpong.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Bhalukpong → Bomdila",
            distance: "93 km",
            description:
              "Proceed to Bomdila via Tipi Orchidarium and Jia Bharali River. Visit Bomdila Upper Monastery. Overnight stay at Bomdila.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Bomdila → Tawang",
            distance: "170 km",
            description:
              "Drive through Hot Spring, Sela Pass, Sela Lake, and Jaswantgarh War Memorial before reaching Tawang. Overnight stay at Tawang.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Tawang Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Tawang Monastery, Handicraft Centre, and attend the Light & Sound Show at Tawang War Memorial. Overnight stay at Tawang.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Tawang Excursion",
            distance: "Optional excursion",
            description:
              "Optional excursion to Bumla Pass, Sangestar Lake, and P.T. Tso Lake (own cost and subject to army permission). Overnight stay at Tawang.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Tawang → Dirang",
            distance: "140 km",
            description:
              "Drive to Dirang via Jung Falls. Overnight stay at Dirang.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Dirang → Kaziranga",
            distance: "250 km",
            description:
              "Proceed to Kaziranga National Park. Optional evening tribal dance program at own cost. Overnight stay at Kaziranga.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Kaziranga → Guwahati",
            distance: "204 km",
            description:
              "Optional early morning jungle safari at Kaziranga (own cost). After breakfast drive to Guwahati Railway Station and board the return train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Arrival at Howrah / Sealdah",
            distance: "Train arrival",
            description:
              "Reach Howrah / Sealdah Railway Station with sweet memories of the Arunachal and Kaziranga tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Accommodation",
      "3 AC train ticket",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Arunachal permit fees",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permit",
      "Bumla Pass & Madhuri Lake sightseeing charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/arunachal-kaziranga-tour",
  },
  {
    id: 5,

    category: "domestic",

    slug: "ayodhya-prayagraj-varanasi-tour",

    title: "Ayodhya",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.8,

    location: "Ayodhya • Prayagraj • Varanasi",

    facilities: [
      { id: 1, icon: Train, label: "3 AC Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transportation Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Boat Ride Included" },
    ],

    overview:
      "Experience the spiritual heart of India with this sacred journey covering Ayodhya, Prayagraj, and Varanasi. Visit Ram Janmabhoomi, Sarayu River, Triveni Sangam, Kashi Vishwanath Temple, Sarnath, Assi Ghat, and witness the mesmerizing Ganga Aarti in Varanasi.",

    packages: {
      package1: {
        duration: "06 Nights / 07 Days",
        price: 18200,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Ayodhya",
            distance: "Train journey",
            description:
              "Board Jammu Tawi Express from Kolkata Railway Station at 11:45 AM for Ayodhya. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Ayodhya",
            distance: "Railway station transfer",
            description:
              "Reach Ayodhya Railway Station, transfer to hotel, and visit Ram Janmabhoomi, the birthplace of Lord Rama. Overnight stay at Ayodhya.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Ayodhya Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Janki Bhawan, Kanak Bhawan, Sarayu River, and Hanuman Garhi. Overnight stay at Ayodhya.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Ayodhya → Prayagraj → Varanasi",
            distance: "286 km",
            description:
              "Drive to Varanasi via Prayagraj. Visit Triveni Sangam, Khusro Bagh, Akbar Fort, Bade Hanuman Ji Temple, and Nagvasuki Temple before proceeding to Varanasi. Overnight stay at Varanasi.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Varanasi Sightseeing & Ganga Aarti",
            distance: "Local sightseeing",
            description:
              "Visit Birla Temple, Sarnath, and Kashi Vishwanath Temple. Enjoy an optional boat ride and attend the evening Ganga Aarti. Overnight stay at Varanasi.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Varanasi Local Sightseeing → Departure",
            distance: "Local sightseeing + train",
            description:
              "Visit Sankat Mochan Hanuman Temple, Assi Ghat, Manikarnika Ghat, Tulsi Manas Temple, and Batu Bhairav Temple. After dinner transfer to Banaras Railway Station and board the train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Reach Sealdah / Howrah Railway Station with sweet memories of the Ayodhya, Prayagraj, and Varanasi tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "3 AC train ticket",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Varanasi boat ticket",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permit",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/ayodhya-prayagraj-varanasi-tour",
  },
  {
    id: 6,

    category: "domestic",

    slug: "panch-jyotirlinga-tour",

    title: "Five Joytirlinga",

    image: "/images/five-jyotirlingya/day6.webp",

    gallery: [
      "/images/five-jyotirlingya/day3.webp",
      "/images/five-jyotirlingya/day31.webp",
      "/images/five-jyotirlingya/day32.webp",
      "/images/five-jyotirlingya/day4.webp",
      "/images/five-jyotirlingya/day6.webp",
      "/images/five-jyotirlingya/day7.webp",
      "/images/five-jyotirlingya/day71.webp",
      "/images/five-jyotirlingya/day72.webp",
      "/images/five-jyotirlingya/day8.webp",
      "/images/five-jyotirlingya/day9.webp",
      "/images/five-jyotirlingya/day91.webp",
      "/images/five-jyotirlingya/day92.webp",
      "/images/five-jyotirlingya/day93.webp",
      "/images/five-jyotirlingya/day94.webp",
      "/images/five-jyotirlingya/day95.webp",
      "/images/five-jyotirlingya/day96.webp",
      "/images/five-jyotirlingya/day97.webp",
      "/images/five-jyotirlingya/day98.webp",
      "/images/five-jyotirlingya/day11.webp",
      "/images/five-jyotirlingya/day112.webp",
    ],

    perPerson: true,

    rating: 9.1,

    location: "Pune • Nashik • Aurangabad • Ujjain • Omkareshwar",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Temple Tour" },
    ],

    overview:
      "Embark on a spiritual journey covering five sacred Jyotirlingas of India—Bhimashankar, Trimbakeshwar, Grishneshwar, Mahakaleshwar, and Omkareshwar. This pilgrimage tour also includes Pune, Nashik, Aurangabad, Ujjain, Maheshwar, and important religious and historical attractions across Maharashtra and Madhya Pradesh.",

    packages: {
      package1: {
        duration: "14 Nights / 15 Days",
        price: 25500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Pune",
            distance: "Train journey",
            description:
              "Board Azad Hind Express (12130) from Howrah Railway Station at 9:40 PM for Pune. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Enjoy the scenic train journey towards Pune. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 3,
            title: "Reach Pune",
            distance: "Railway station transfer + local sightseeing",
            description:
              "Reach Pune Railway Station and transfer to the hotel. Visit Shrimant Dagdusheth Halwai Ganpati Mandir, Shaniwar Wada, Lal Mahal, and nearby attractions. Shrimant Dagdusheth Halwai Ganpati Mandir was founded in 1893 by Dagdusheth Halwai and his wife Lakshmibai. Shaniwar Wada is a historic 18th-century fortification that served as the grand seat of the Peshwa rulers of the Maratha Empire. Lal Mahal is a historic red-brick monument associated with the childhood of Chhatrapati Shivaji Maharaj. Overnight stay at Pune.",
            images: [
              "/images/five-jyotirlingya/day3.webp",
              "/images/five-jyotirlingya/day31.webp",
              "/images/five-jyotirlingya/day32.webp",
            ],
          },

          {
            day: 4,
            title: "Pune Stay – Bhimashankar Jyotirlinga Darshan",
            distance: "Excursion from Pune",
            description:
              "After breakfast, visit Bhimashankar Jyotirlinga Temple, an ancient sacred shrine dedicated to Lord Shiva located in the Sahyadri hills of Pune district, Maharashtra. Return to Pune hotel. Overnight stay at Pune.",
            images: [
              "/images/five-jyotirlingya/day4.webp",
            ],
          },

          {
            day: 5,
            title: "Pune → Nashik",
            distance: "215 km",
            description:
              "Drive to Nashik and enjoy local sightseeing in the evening. Overnight stay at Nashik.",
            images: [null, null],
          },

          {
            day: 6,
            title: "Nashik Stay – Trimbakeshwar Jyotirlinga Darshan",
            distance: "Local excursion",
            description:
              "Visit Trimbakeshwar Jyotirlinga Temple and return to hotel. The Trimbakeshwar Temple in Nashik, Maharashtra, was built by Peshwa Balaji Baji Rao (Nana Saheb) between 1755 and 1786 AD on the site of an older shrine. Overnight stay at Nashik.",
            images: [
              "/images/five-jyotirlingya/day6.webp",
            ],
          },

          {
            day: 7,
            title: "Nashik → Aurangabad",
            distance: "180 km",
            description:
              "Proceed to Aurangabad (Chhatrapati Sambhaji Nagar) and visit Bibi Ka Maqbara, Ellora Caves, Daulatabad Fort, Aurangabad Caves, and nearby attractions depending on time. Bibi Ka Maqbara is a 17th-century mausoleum built by Prince Azam Shah in memory of his mother, Dilras Banu Begum. The Ellora Caves are a massive rock-cut temple and monastery complex built between the 6th and 10th centuries CE. Daulatabad Fort, originally known as Deogiri, is a 12th-century hilltop fortress renowned for its medieval military architecture and complex defense systems. Overnight stay at Aurangabad.",
            images: [
              "/images/five-jyotirlingya/day7.webp",
              "/images/five-jyotirlingya/day71.webp",
              "/images/five-jyotirlingya/day72.webp",
            ],
          },

          {
            day: 8,
            title: "Aurangabad → Ujjain",
            distance: "Temple visit + train journey",
            description:
              "Visit Grishneshwar Jyotirlinga Temple. Grishneshwar Jyotirlinga in Maharashtra is the twelfth and final sacred Jyotirlinga shrine of Lord Shiva. After dinner, transfer to Chhatrapati Sambhaji Nagar Railway Station and board Hisar Weekly Express (17020) for Ujjain. Overnight stay in train.",
            images: [
              "/images/five-jyotirlingya/day8.webp",
            ],
          },

          {
            day: 9,
            title: "Reach Ujjain – Sightseeing",
            distance: "Railway station transfer + local sightseeing",
            description:
              "Reach Ujjain Railway Station and transfer to the hotel. Visit Mahakaleshwar Jyotirlinga, Harsiddhi Mata Temple, Kal Bhairav Temple, Gadh Kalika Temple, Gopal Mandir, Chintaman Ganesh Temple, Jantar Mantar, Ram Ghat, Triveni Museum, and nearby attractions. Mahakaleshwar Jyotirlinga in Ujjain is one of the twelve sacred abodes of Lord Shiva. Harsiddhi Temple is an ancient shrine dedicated to Goddess Annapurna. Kal Bhairav Mandir is an ancient temple dedicated to Kal Bhairav. Gadh Kalika Temple is an ancient temple dedicated to Goddess Kali. Shri Dwarkadhish Gopal Mandir is a prominent shrine dedicated to Lord Krishna. Shree Chintaman Ganesh Temple is one of the oldest temples dedicated to Lord Ganesha in the region. Jantar Mantar is an 18th-century astronomical observatory. Ram Ghat is an ancient bathing place on the banks of the Kshipra River. Triveni Museum is a cultural and archaeological museum in Ujjain. Overnight stay at Ujjain.",
            images: [
              "/images/five-jyotirlingya/day9.webp",
              "/images/five-jyotirlingya/day91.webp",
              "/images/five-jyotirlingya/day92.webp",
              "/images/five-jyotirlingya/day93.webp",
              "/images/five-jyotirlingya/day94.webp",
              "/images/five-jyotirlingya/day95.webp",
              "/images/five-jyotirlingya/day96.webp",
              "/images/five-jyotirlingya/day97.webp",
              "/images/five-jyotirlingya/day98.webp",
            ],
          },

          {
            day: 10,
            title: "Mahakaleshwar & Ujjain Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Mahakaleshwar Jyotirlinga, Harsiddhi Mata Temple, Kal Bhairav Temple, Gadh Kalika Temple, Gopal Mandir, Chintaman Ganesh Temple, Jantar Mantar, Ram Ghat, Triveni Museum, and nearby attractions. Overnight stay at Ujjain.",
            images: [null, null],
          },

          {
            day: 11,
            title: "Ujjain → Omkareshwar",
            distance: "144 km",
            description:
              "Drive to Omkareshwar and check in at the hotel. Omkareshwar Jyotirlinga is an ancient Hindu shrine located on Mandhata Island in the Narmada River in Madhya Pradesh, famous for its natural Om shape and status as one of the twelve holy Jyotirlingas. Overnight stay at Omkareshwar.",
            images: [
              "/images/five-jyotirlingya/day11.webp",
              "/images/five-jyotirlingya/day112.webp",
            ],
          },

          {
            day: 12,
            title: "Omkareshwar Jyotirlinga Darshan",
            distance: "Local sightseeing",
            description:
              "Visit Omkareshwar Jyotirlinga Temple and Narmada River ghats. Overnight stay at Omkareshwar.",
            images: [null, null],
          },

          {
            day: 13,
            title: "Omkareshwar → Maheshwar → Indore → Train",
            distance: "80 km + train journey",
            description:
              "After breakfast drive via Maheshwar and transfer to Indore Railway Station. Board Shipra Express (22911) for Kolkata. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 14,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return journey towards Kolkata. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 15,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with divine memories of the Panch Jyotirlinga pilgrimage tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permits",
      "Any ride or safari",
      "Personal activities",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/panch-jyotirlinga-tour",
  },
  {
    id: 7,

    category: "domestic",

    slug: "shimla-manali-bhuntar-tour",

    title: "Himachal Pradesh",

    image: "/images/himachal-pradesh/day4.webp",

    gallery: [
      "/images/himachal-pradesh/day3.webp",
      "/images/himachal-pradesh/day4.webp",
      "/images/himachal-pradesh/day6.webp",
      "/images/himachal-pradesh/day7.webp",
      "/images/himachal-pradesh/day31.webp",
      "/images/himachal-pradesh/day41.webp",
      "/images/himachal-pradesh/day42.webp",
      "/images/himachal-pradesh/day61.webp",
      "/images/himachal-pradesh/day62.webp",
      "/images/himachal-pradesh/day71.webp",
    ],

    perPerson: true,

    rating: 8.8,

    location: "Shimla • Manali • Bhuntar • Manikaran",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Hill Station Tour" },
    ],

    overview:
      "Enjoy a scenic Himalayan holiday covering Shimla, Manali, Manikaran, and Bhuntar. Explore Kufri, Fagu, Solang Valley, Hadimba Temple, Vashisht Village, Atal Tunnel, and the breathtaking landscapes of Himachal Pradesh.",

    packages: {
      package1: {
        duration: "10 Nights / 11 Days",
        price: 20500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Chandigarh / Kalka",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Chandigarh / Kalka. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Himachal Pradesh. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 3,
            title: "Reach Chandigarh → Shimla",
            distance: "Railway station transfer + local sightseeing",
            description:
              "Reach Chandigarh / Kalka Railway Station and transfer to Shimla hotel. After arrival, visit Mall Road and Kali Bari Temple by walk. Mall Road was developed around 1880 as an exclusive British leisure promenade when Shimla served as the summer capital of British India. Also visit Kali Bari Temple, originally built in 1845 on Jakhu Hill by Bengali Brahmin and saint Ram Charan Brahmachari. Overnight stay at Shimla.",
            images: [
              "/images/himachal-pradesh/day3.webp",
              "/images/himachal-pradesh/day31.webp",
            ],
          },

          {
            day: 4,
            title: "Shimla Sightseeing – Kufri, Fagu & Green Valley",
            distance: "Local sightseeing",
            description:
              "After breakfast proceed for sightseeing at Shimla. Visit Kufri, a historic hill station located around 20 km from Shimla and explored by the British in 1819. Visit Fagu, a high-altitude hamlet known for its thick fog and mist, with the name believed to be derived from the local word for fog. Also visit Green Valley, a beautiful scenic viewpoint surrounded by dense and relatively untouched Himalayan forests, famous for its natural beauty. Return to Shimla hotel. Overnight stay at Shimla.",
            images: [
              "/images/himachal-pradesh/day4.webp",
              "/images/himachal-pradesh/day41.webp",
              "/images/himachal-pradesh/day42.webp",
            ],
          },

          {
            day: 5,
            title: "Shimla → Manali",
            distance: "Road transfer",
            description:
              "After breakfast move from Shimla to Manali through the scenic mountain route. Enjoy the beautiful Himalayan landscapes during the journey. On arrival, check in at the hotel. Overnight stay at Manali.",
            images: [
              "/images/himachal-pradesh/day6.webp",
            ],
          },

          {
            day: 6,
            title: "Manali Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "After breakfast proceed for local sightseeing at Manali. Visit Hidimba Devi Temple, located in Manali and built in 1553 CE by Maharaja Bahadur Singh. Visit Vashisht Village, an ancient village situated around 3 km from Manali, famous for the Vashisht Temple and natural hot sulfur springs. Also visit the Handicraft Centre and local attractions. The itinerary document also mentions Dorje Drak Monastery in Panthaghati, Shimla, founded in 1984 by Kyabje Taklung Tsetrul Rinpoche. Return to Manali hotel. Overnight stay at Manali.",
            images: [
              "/images/himachal-pradesh/day61.webp",
              "/images/himachal-pradesh/day62.webp",
            ],
          },

          {
            day: 7,
            title: "Manali Sightseeing – Rohtang Pass & Solang Valley",
            distance: "Excursion from Manali",
            description:
              "After breakfast proceed for sightseeing at Manali. Visit Rohtang Pass, a historic high mountain pass situated at approximately 3,978 metres in the Pir Panjal range, connecting the Kullu Valley with the Lahaul and Spiti Valleys. Also visit Solang Valley, a popular destination near Manali known for adventure activities and beautiful mountain scenery. Rohtang Pass excursion is subject to permission, weather conditions, and local regulations. Return to Manali hotel. Overnight stay at Manali.",
            images: [
              "/images/himachal-pradesh/day7.webp",
              "/images/himachal-pradesh/day71.webp",
            ],
          },

          {
            day: 8,
            title: "Manali → Manikaran / Bhuntar",
            distance: "Road transfer",
            description:
              "After breakfast drive to Manikaran / Bhuntar and check in at hotel. Enjoy the scenic surroundings and local atmosphere. Overnight stay at Manikaran / Bhuntar.",
            images: [null, null],
          },

          {
            day: 9,
            title: "Bhuntar → Chandigarh / Kalka → Train",
            distance: "Road transfer + train journey",
            description:
              "After breakfast move from Bhuntar towards Chandigarh / Kalka Railway Station for the return train journey. Board the train for Howrah. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 10,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue the return train journey towards Howrah. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of your Himachal tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permits",
      "Rohtang Pass excursion",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/shimla-manali-bhuntar-tour",
  },
  {
    id: 8,

    category: "domestic",

    slug: "koraput-vizag-hyderabad-tour",

    title: "Koraput",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.6,

    location: "Koraput • Araku Valley • Visakhapatnam • Hyderabad",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Explore the scenic beauty of Koraput, the lush Araku Valley, the beaches and attractions of Visakhapatnam, and the cultural heritage of Hyderabad including Charminar, Golconda Fort, Salar Jung Museum, and Ramoji Film City.",

    packages: {
      package1: {
        duration: "10 Nights / 11 Days",
        price: 29500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Koraput",
            distance: "Train journey",
            description:
              "Board Train 18005 from Howrah Railway Station for Koraput. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Koraput",
            distance: "Railway station transfer",
            description:
              "Reach Koraput Railway Station and transfer to hotel. Overnight stay at Koraput.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Koraput Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Duduma Waterfall and Gupteswar Cave. Return to Koraput for overnight stay.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Koraput → Araku Valley",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Araku Valley. Visit Borra Cave, Tribal Museum, gardens, and Chapurai. Overnight stay at Araku Valley.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Araku Valley → Vizag",
            distance: "Road transfer",
            description:
              "Drive to Visakhapatnam and visit Rushikonda Beach, Kailasagiri, Submarine Museum, Visakha Museum, and Fishing Harbor. Overnight stay at Vizag.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Vizag Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Simhachalam Hill. After lunch visit R.K. Beach and Yarada Beach. Overnight stay at Vizag.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Vizag → Hyderabad",
            distance: "Train transfer",
            description:
              "After lunch transfer to Vizag Railway Station and board train 12727 / 17015 for Hyderabad. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Hyderabad Heritage Tour",
            distance: "Local sightseeing",
            description:
              "Arrive at Hyderabad Railway Station and transfer to hotel. Visit Charminar, Golconda Fort, Salar Jung Museum, Birla Temple, Lumbini Park, Chilkur Balaji Temple, and Buddha Statue. Overnight stay at Hyderabad.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Ramoji Film City",
            distance: "Excursion",
            description:
              "Full-day visit to the world-famous Ramoji Film City. Overnight stay at Hyderabad.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Hyderabad → Kolkata",
            distance: "Train journey",
            description:
              "Check out from hotel and transfer to Hyderabad Railway Station for return train to Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of your South India tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permits",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/koraput-vizag-hyderabad-tour",
  },
  {
    id: 9,

    category: "domestic",

    slug: "northeast-grand-tour",

    title: "Nagaland Tripura",

    image: "/images/nagaland-tripura/day4_1.webp",

    gallery: [
      "/images/nagaland-tripura/day3_1.webp",
      "/images/nagaland-tripura/day3_2.webp",
      "/images/nagaland-tripura/day3_3.webp",
      "/images/nagaland-tripura/day3_4.webp",
      "/images/nagaland-tripura/day3.webp",
      "/images/nagaland-tripura/day4_1.webp",
      "/images/nagaland-tripura/day4_2.webp",
      "/images/nagaland-tripura/day4.webp",
      "/images/nagaland-tripura/day5_1.webp",
      "/images/nagaland-tripura/day5_2.webp",
      "/images/nagaland-tripura/day5.webp",
      "/images/nagaland-tripura/day8_1.webp",
      "/images/nagaland-tripura/day8_2.webp",
      "/images/nagaland-tripura/day8_3.webp",
      "/images/nagaland-tripura/day8.webp",
      "/images/nagaland-tripura/day10_1.webp",
      "/images/nagaland-tripura/day10_2.webp",
      "/images/nagaland-tripura/day10_3.webp",
      "/images/nagaland-tripura/day10_4.webp",
      "/images/nagaland-tripura/day10_5.webp",
      "/images/nagaland-tripura/day10_6.webp",
      "/images/nagaland-tripura/day10.webp",
      "/images/nagaland-tripura/day11.webp",
    ],

    perPerson: true,

    rating: 8.8,

    location: "Dimapur • Kohima • Imphal • Silchar • Aizawl • Agartala",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Discover the enchanting beauty and cultural diversity of Northeast India with this grand circuit covering Nagaland, Manipur, Mizoram, and Tripura. Explore Kohima’s heritage, Loktak Lake, Aizawl’s scenic hills, and Agartala’s royal landmarks in one unforgettable journey.",

    packages: {
      package1: {
        duration: "10 Nights / 11 Days",
        price: 35500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Dimapur",
            distance: "Train journey",
            description:
              "Board Train 15959 from Howrah Railway Station for Dimapur. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 2,
            title: "Arrival at Dimapur",
            distance: "Railway station transfer",
            description:
              "Reach Dimapur Railway Station and transfer to hotel. Overnight stay at Dimapur.",
            images: [null, null],
          },

          {
            day: 3,
            title: "Dimapur → Kohima",
            distance: "Road journey",
            description:
              "Move from Dimapur to Kohima and explore some of Kohima's most important historical and cultural attractions, including the Kohima War Cemetery, Nagaland State Museum, and Kisama Heritage Village.",
            images: [
              "/images/nagaland-tripura/day3_1.webp",
              "/images/nagaland-tripura/day3_2.webp",
              "/images/nagaland-tripura/day3_3.webp",
              "/images/nagaland-tripura/day3_4.webp",
              "/images/nagaland-tripura/day3.webp",
            ],
          },

          {
            day: 4,
            title: "Kohima → Imphal",
            distance: "Road journey",
            description:
              "Move from Kohima to Imphal. En route and around Imphal, visit Loktak Lake, Keibul Lamjao National Park, and the INA War Museum at Moirang, an important World War II and Indian National Army historical site.",
            images: [
              "/images/nagaland-tripura/day4_1.webp",
              "/images/nagaland-tripura/day4_2.webp",
              "/images/nagaland-tripura/day4.webp",
            ],
          },

          {
            day: 5,
            title: "Imphal Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Imphal's cultural and historical attractions, including the Khonghampat Orchidarium, Manipur State Museum, Mapal Kangjeibung (Imphal Polo Ground), and Bir Tikendrajit Park.",
            images: [
              "/images/nagaland-tripura/day5_1.webp",
              "/images/nagaland-tripura/day5_2.webp",
              "/images/nagaland-tripura/day5.webp",
            ],
          },

          {
            day: 6,
            title: "Imphal → Silchar",
            distance: "Road journey",
            description:
              "Depart from Imphal and travel towards Silchar. Enjoy the scenic journey through the landscapes of Northeast India and stay overnight in Silchar.",
            images: [null, null],
          },

          {
            day: 7,
            title: "Silchar → Aizawl",
            distance: "Road journey",
            description:
              "Continue the journey from Silchar to Aizawl, the capital of Mizoram. Upon arrival, check in to the hotel and relax.",
            images: [null, null],
          },

          {
            day: 8,
            title: "Aizawl Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Aizawl's cultural and scenic attractions, including the Luangmual Handicrafts Centre, Mizoram State Museum, Durtlang Hills, and Berawtlang Tourist Complex.",
            images: [
              "/images/nagaland-tripura/day8_1.webp",
              "/images/nagaland-tripura/day8_2.webp",
              "/images/nagaland-tripura/day8_3.webp",
              "/images/nagaland-tripura/day8.webp",
            ],
          },

          {
            day: 10,
            title: "Move to Agartala & Agartala Sightseeing",
            distance: "Road journey & local sightseeing",
            description:
              "Travel to Agartala and explore its historical, cultural, and religious attractions, including the Tripura State Museum, Ujjayanta Palace, Purbasha, Agartala Jagannath Mandir, Uma Maheshwar Temple, Heritage Park, and Durgabari Tea Estate.",
            images: [
              "/images/nagaland-tripura/day10_1.webp",
              "/images/nagaland-tripura/day10_2.webp",
              "/images/nagaland-tripura/day10_3.webp",
              "/images/nagaland-tripura/day10_4.webp",
              "/images/nagaland-tripura/day10_5.webp",
              "/images/nagaland-tripura/day10_6.webp",
              "/images/nagaland-tripura/day10.webp",
            ],
          },

          {
            day: 11,
            title: "Visit Unakoti Archaeological Site",
            distance: "Road journey & sightseeing",
            description:
              "Visit Unakoti, an ancient Shaivite archaeological site known for its massive rock-cut sculptures and reliefs. Located approximately 178 km northeast of Agartala, Unakoti is one of Tripura's most significant historical and cultural landmarks.",
            images: [
              "/images/nagaland-tripura/day11.webp", null
            ],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permit charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/northeast-grand-tour",
  },
  {
    id: 10,

    category: "domestic",

    slug: "kashmir-gurez-lolab-keran-tour",

    title: "Offbeat Kashmir",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.9,

    location: "Srinagar • Gurez Valley • Lolab Valley • Keran Valley",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Experience the untouched beauty of Kashmir with this offbeat valley tour covering Srinagar, the breathtaking Gurez Valley, the lush Lolab Valley, and the scenic border village of Keran. Enjoy mountains, rivers, meadows, and authentic Kashmiri culture away from the usual tourist trail.",

    packages: {
      package1: {
        duration: "12 Nights / 13 Days",
        price: 29500,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Jammu",
            distance: "Train journey",
            description:
              "Board Train 13151 Jammu Tawi Express from Kolkata Railway Station. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Jammu. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Jammu → Srinagar",
            distance: "Train transfer",
            description:
              "Arrive at Jammu Railway Station and board Vande Bharat for Srinagar. Transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Srinagar → Gurez Valley",
            distance: "126 km",
            description:
              "Drive through scenic mountain roads to Gurez Valley. Check in to hotel and enjoy the valley surroundings. Overnight stay at Gurez Valley.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Gurez Valley Exploration",
            distance: "Local sightseeing",
            description:
              "Visit Habba Khatoon Peak, Kishanganga River, and Tulail Valley (optional and at own cost). Overnight stay at Gurez Valley.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Gurez Valley → Lolab Valley",
            distance: "126 km",
            description:
              "After breakfast proceed to the picturesque Lolab Valley surrounded by dense forests and mountains. Overnight stay at Lolab Valley.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Lolab Valley → Keran Valley",
            distance: "100 km",
            description:
              "Drive to the beautiful border valley of Keran and check in to hotel. Overnight stay at Keran Valley.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Keran Valley Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Keran Village and witness the unique settlement located along the Line of Control where houses can be seen on both Indian and Pakistan-administered sides (optional and at own cost). Overnight stay at Keran Valley.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Keran Valley → Srinagar",
            distance: "140 km",
            description:
              "Return to Srinagar after breakfast. Enjoy the evening at leisure. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Doodhpathri Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to the beautiful meadow destination Doodhpathri. Return to Srinagar for overnight stay.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Srinagar → Jammu",
            distance: "270 km",
            description:
              "After breakfast drive to Jammu Railway Station and board return train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Arrival at Kolkata / Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Kolkata Railway Station with sweet memories of your Kashmir valley tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permits",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/kashmir-gurez-lolab-keran-tour",
  },
  {
    id: 11,

    category: "domestic",

    slug: "pelling-ravangla-darjeeling-tour",

    title: "Pelling Ravangla Darjeeling",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.6,

    location: "Pelling • Ravangla • Darjeeling",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Enjoy the scenic beauty of Sikkim and Darjeeling with this delightful hill tour covering Pelling, Ravangla, and Darjeeling. Witness Kanchenjunga views, monasteries, waterfalls, tea gardens, Buddha Park, and the famous sunrise from Tiger Hill.",

    packages: {
      package1: {
        duration: "05 Nights / 06 Days",
        price: 15700,

        itinerary: [
          {
            day: 1,
            title: "Sealdah → NJP (Darjeeling Mail)",
            distance: "Train journey",
            description:
              "Board Train 12343 Darjeeling Mail from Sealdah Railway Station at night. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "NJP → Pelling",
            distance: "Road transfer",
            description:
              "Arrive at NJP Railway Station in the morning and transfer to Pelling. Evening free for leisure. Overnight stay at Pelling.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Pelling Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kanchenjunga viewpoints, Rimbi Waterfalls, Rabdentse Ruins, Pemayangtse Monastery, Orange Garden, and the famous Sky Walk. Overnight stay at Pelling.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Pelling → Ravangla",
            distance: "Road transfer",
            description:
              "Drive to Ravangla. En route visit Namchi Char Dham and Sai Temple. After lunch visit Buddha Park. Overnight stay at Ravangla.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Ravangla → Darjeeling",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Darjeeling. Evening free for leisure and Mall Road exploration. Overnight stay at Darjeeling.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Darjeeling Sightseeing → NJP → Howrah",
            distance: "Local sightseeing + train journey",
            description:
              "Early morning visit Tiger Hill, Batasia Loop, and Ghoom Monastery. After breakfast visit Padmaja Naidu Himalayan Zoological Park, HMI, Tenzing Rock, Japanese Temple, and Tea Garden. Later transfer to NJP Railway Station and board Vande Bharat Express for Howrah, arriving at night with sweet memories.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "3 AC train tickets",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permit charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/pelling-ravangla-darjeeling-tour",
  },
  {
    id: 12,

    category: "domestic",

    slug: "rajasthan-grand-tour",

    title: "Rajasthan",

    image: "/images/rajasthan/day114.webp",

    gallery: [
      "/images/rajasthan/day3.webp",
      "/images/rajasthan/day4.webp",
      "/images/rajasthan/day5.webp",
      "/images/rajasthan/day6.webp",
      "/images/rajasthan/day7.webp",
      "/images/rajasthan/day8.webp",
      "/images/rajasthan/day9.webp",
      "/images/rajasthan/day10.webp",
      "/images/rajasthan/day11.webp",
      "/images/rajasthan/day31.webp",
      "/images/rajasthan/day41.webp",
      "/images/rajasthan/day42.webp",
      "/images/rajasthan/day61.webp",
      "/images/rajasthan/day62.webp",
      "/images/rajasthan/day71.webp",
      "/images/rajasthan/day81.webp",
      "/images/rajasthan/day91.webp",
      "/images/rajasthan/day92.webp",
      "/images/rajasthan/day111.webp",
      "/images/rajasthan/day112.webp",
      "/images/rajasthan/day113.webp",
      "/images/rajasthan/day114.webp",
      "/images/rajasthan/day115.webp",
      "/images/rajasthan/day116.webp",
    ],

    perPerson: true,

    rating: 8.8,

    location:
      "Bikaner • Jaisalmer • Jodhpur • Mount Abu • Udaipur • Pushkar • Jaipur",

    facilities: [
      { id: 1, icon: Train, label: "3 AC Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "AC Transport" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Explore the royal heritage of Rajasthan on this grand tour covering Bikaner, Jaisalmer, Jodhpur, Mount Abu, Udaipur, Pushkar, and Jaipur. Experience majestic forts, palaces, lakes, temples, desert landscapes, and vibrant Rajasthani culture.",

    packages: {
      package1: {
        duration: "12 Nights / 14 Days",
        price: 34500,

        itinerary: [
          {
            day: 1,
            title: "Sealdah → Bikaner",
            distance: "Train journey",
            description:
              "Board 12259 Duronto Express from Sealdah Railway Station in the evening for Bikaner. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 2,
            title: "Arrival at Bikaner",
            distance: "Railway station transfer",
            description:
              "Arrive at Bikaner Railway Station and transfer to hotel. Evening free for leisure. Overnight stay at Bikaner.",
            images: [null, null],
          },

          {
            day: 3,
            title: "Bikaner Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Junagarh Fort, one of Bikaner's historic landmarks, originally built between 1588 and 1593. Later visit Karni Mata Temple at Deshnoke, famous for its unique religious traditions and sacred rats. Overnight stay at Bikaner.",
            images: [
              "/images/rajasthan/day3.webp",
              "/images/rajasthan/day31.webp",
            ],
          },

          {
            day: 4,
            title: "Jaisalmer Sightseeing & Sam Sand Dunes",
            distance: "Local sightseeing",
            description:
              "Visit Jaisalmer Fort, famously known as Sonar Kella or the Golden Fortress. Later proceed to Sam Sand Dunes, located in the Thar Desert, and enjoy the desert surroundings with traditional Kalbelia and Ghoomar dance performances. Optional camel ride can also be enjoyed at the dunes. Overnight stay at Jaisalmer.",
            images: [
              "/images/rajasthan/day4.webp",
              "/images/rajasthan/day41.webp",
              "/images/rajasthan/day42.webp",
            ],
          },

          {
            day: 5,
            title: "Stay at Jodhpur",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Jodhpur. Explore the historic city of Jodhpur, founded in 1459 by Rao Jodha and historically associated with the Marwar kingdom. Overnight stay at Jodhpur.",
            images: [
              "/images/rajasthan/day5.webp",
            ],
          },

          {
            day: 6,
            title: "Jodhpur Sightseeing → Mount Abu",
            distance: "Road transfer",
            description:
              "Visit Umaid Bhawan Palace and Mehrangarh Fort in Jodhpur. Umaid Bhawan Palace was built between 1928 and 1943, while Mehrangarh Fort was built in 1459 by Rao Jodha and stands on a rocky hill above the city. Later drive to Mount Abu. Overnight stay at Mount Abu.",
            images: [
              "/images/rajasthan/day6.webp",
              "/images/rajasthan/day61.webp",
              "/images/rajasthan/day62.webp",
            ],
          },

          {
            day: 7,
            title: "Mount Abu Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Mount Abu, Rajasthan's only hill station. Visit Nakki Lake, famous for its legends and scenic surroundings, and the Dilwara Temples, a group of five renowned Svetambara Jain temples known for their intricate white-marble architecture. Overnight stay at Mount Abu.",
            images: [
              "/images/rajasthan/day7.webp",
              "/images/rajasthan/day71.webp",
            ],
          },

          {
            day: 8,
            title: "Mount Abu → Udaipur via Chittorgarh",
            distance: "Road transfer",
            description:
              "Drive towards Udaipur with a visit to the historic Chittorgarh Fort, one of India's largest fort complexes and the former capital of the Mewar Kingdom. Continue to Udaipur, founded in 1559 by Maharana Udai Singh II. Overnight stay at Udaipur.",
            images: [
              "/images/rajasthan/day8.webp",
              "/images/rajasthan/day81.webp",
            ],
          },

          {
            day: 9,
            title: "Udaipur Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Moti Magri, overlooking Fateh Sagar Lake and home to the Maharana Pratap Memorial. Explore Fateh Sagar Lake, originally built in 1678 and later rebuilt by Maharana Fateh Singh. Continue to Udaipur City Palace, founded in 1559 by Maharana Udai Singh II and developed over several generations of Mewar rulers. Overnight stay at Udaipur.",
            images: [
              "/images/rajasthan/day9.webp",
              "/images/rajasthan/day91.webp",
              "/images/rajasthan/day92.webp",
            ],
          },

          {
            day: 10,
            title: "Udaipur → Pushkar via Haldighati",
            distance: "Road transfer",
            description:
              "Travel towards Pushkar via historic Haldighati, a mountain pass in the Aravalli Range located approximately 40 km from Udaipur and known for the historic Battle of Haldighati. Continue to Pushkar for overnight stay.",
            images: [
              "/images/rajasthan/day10.webp",
            ],
          },

          {
            day: 11,
            title: "Pushkar & Ajmer → Jaipur",
            distance: "Road transfer",
            description:
              "Visit Pushkar, one of India's oldest cities, followed by Ajmer Sharif Dargah, the sacred Sufi shrine of Khwaja Moinuddin Chishti. After sightseeing, proceed towards Jaipur. Jaipur sightseeing includes Amer Fort, Jantar Mantar, Hawa Mahal and Jal Mahal. Amer Fort was built in 1592, Jantar Mantar contains a collection of large astronomical instruments, Hawa Mahal is famous for its 953 windows, and Jal Mahal is situated in Man Sagar Lake. Overnight stay at Jaipur.",
            images: [
              "/images/rajasthan/day11.webp",
              "/images/rajasthan/day111.webp",
              "/images/rajasthan/day112.webp",
              "/images/rajasthan/day113.webp",
              "/images/rajasthan/day114.webp",
              "/images/rajasthan/day115.webp",
              "/images/rajasthan/day116.webp",
            ],
          },

          {
            day: 12,
            title: "Jaipur Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Amber Fort, Jantar Mantar, Hawa Mahal, Jal Mahal, City Palace, Nahargarh Fort, and other attractions. Evening free for personal activities. Overnight stay at Jaipur.",
            images: [null, null],
          },

          {
            day: 13,
            title: "Jaipur → Sealdah",
            distance: "Train journey",
            description:
              "After lunch transfer to Jaipur Railway Station and board 12988 train for return journey. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 14,
            title: "Arrival at Sealdah",
            distance: "Train arrival",
            description:
              "Arrive at Sealdah Railway Station with sweet memories of your Rajasthan tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Up & down 3 AC train fare",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "AC transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permit charges",
      "Personal activities",
      "Camel ride",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/rajasthan-grand-tour",
  },
  {
    id: 13,

    category: "domestic",

    slug: "south-india-temple-tour",

    title: "South India",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.7,

    location:
      "Tirupati • Chennai • Puducherry • Madurai • Rameshwaram • Kanyakumari",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Discover the spiritual and cultural treasures of South India on this temple circuit covering Tirupati, Chennai, Puducherry, Madurai, Rameshwaram, and Kanyakumari. Experience sacred temples, beaches, heritage towns, and the southernmost tip of India.",

    packages: {
      package1: {
        duration: "10 Nights / 13 Days",
        price: 27500,

        itinerary: [
          {
            day: 1,
            title: "Howrah / Shalimar → Tirupati",
            distance: "Train journey",
            description:
              "Board train from Howrah / Shalimar Railway Station for Tirupati. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Tirupati",
            distance: "Railway station transfer",
            description:
              "Arrive at Tirupati Railway Station and transfer to hotel. Overnight stay at Tirupati.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Tirupati Balaji Darshan",
            distance: "Local visit",
            description:
              "Early morning visit to Lord Tirupati Balaji Temple for darshan and puja. Return to hotel. Overnight stay at Tirupati.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Tirupati → Chennai",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Chennai. Overnight stay at Chennai.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Chennai Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Marina Beach, Gandhi Ghat, and Chennai local market. Overnight stay at Chennai.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Chennai → Puducherry",
            distance: "Road transfer",
            description:
              "Travel to Puducherry and visit Seaside Promenade, Sri Aurobindo Ashram, Rock Beach, Paradise Beach, and Manakula Vinayagar Temple. Overnight stay at Puducherry.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Puducherry → Madurai",
            distance: "Road transfer",
            description:
              "After breakfast drive to Madurai. Evening visit to Meenakshi Temple. Overnight stay at Madurai.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Madurai → Rameshwaram",
            distance: "Road transfer",
            description:
              "Proceed to Rameshwaram and visit Ramanathaswamy Temple and Dhanushkodi. Overnight stay at Rameshwaram.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Rameshwaram → Kanyakumari",
            distance: "Road transfer",
            description:
              "After breakfast travel to Kanyakumari. Overnight stay at Kanyakumari.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Kanyakumari Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Vivekananda Rock Memorial and Kanyakumari Temple. Overnight stay at Kanyakumari.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Kanyakumari / Nagercoil → Kolkata",
            distance: "Train journey",
            description:
              "After breakfast transfer to Kanyakumari / Nagercoil Junction Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Arrival at Howrah / Shalimar",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Shalimar Railway Station with sweet memories of your South India tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permit charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/south-india-temple-tour",
  },
  {
    id: 14,

    category: "domestic",

    slug: "valley-of-leh-ladakh",

    title: "Valley of Leh Ladakh",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.2,

    location:
      "Srinagar • Kargil • Leh • Nubra Valley • Pangong • Hanle • Keylong • Manali",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Embark on an unforgettable Himalayan expedition through Kashmir and Ladakh covering Srinagar, Kargil, Leh, Nubra Valley, Pangong Lake, Hanle, Keylong, and Manali. Witness high mountain passes, monasteries, desert valleys, pristine lakes, war memorials, and dramatic landscapes across one of the world’s most spectacular road journeys.",

    packages: {
      package1: {
        duration: "14 Nights / 17 Days",
        price: 42500,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Jammu",
            distance: "Train journey",
            description:
              "Board Train 13151 Jammu Tawi Express from Kolkata Railway Station. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Jammu. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Jammu → Srinagar",
            distance: "Train transfer",
            description:
              "Arrive at Jammu Railway Station and board Vande Bharat for Srinagar. Transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Srinagar → Kargil",
            distance: "201 km",
            description:
              "Drive through Sonamarg, Zoji La Pass, Drass, and Kargil War Memorial before reaching Kargil. Overnight stay at Kargil.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Kargil → Leh",
            distance: "215 km",
            description:
              "Travel via Mulbek, Lamayuru, Moonland, and the confluence of Indus and Zanskar Rivers before reaching Leh. Overnight stay at Leh.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Leh Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Leh Monastery, Leh Palace, Zorawar Fort, Shanti Stupa, Hall of Fame, Shey Palace, Shey Monastery, and Rancho School. Overnight stay at Leh.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Leh → Nubra Valley",
            distance: "150 km",
            description:
              "Cross the famous Khardung La Pass and enter Nubra Valley. Optional camel ride available at own cost. Overnight stay at Nubra Valley.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Nubra Valley → Turtuk Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to Turtuk village near the Indo-Pak border region. Return to Nubra Valley for overnight stay.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Nubra Valley → Pangong Lake",
            distance: "274 km",
            description:
              "Drive via Chang La Pass to the spectacular Pangong Lake. Enjoy the lakeside scenery and overnight stay near Pangong.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Pangong Lake → Hanle",
            distance: "310 km",
            description:
              "Proceed to the remote Hanle region known for its vast high-altitude plains and observatory area. Overnight stay at Hanle.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Hanle → Leh",
            distance: "253 km",
            description:
              "Return to Leh through the scenic Ladakhi landscape. Overnight stay at Leh.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Leh → Keylong",
            distance: "356 km",
            description:
              "Drive via Tanglang La, Baralacha La, and the high Himalayan passes to Keylong. Overnight stay at Keylong.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Keylong → Manali",
            distance: "70 km",
            description:
              "Travel through Atal Tunnel and Sissu village before reaching Manali. Overnight stay at Manali.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Manali Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Hadimba Temple, Tibetan Monastery, Handicraft Centre, and Old Vashisht Village. Overnight stay at Manali.",
            images: [null, null],
          },
          {
            day: 15,
            title: "Manali → Kalka / Chandigarh",
            distance: "266 km",
            description:
              "Drive to Kalka / Chandigarh Railway Station and board Netaji Express for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 16,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 17,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with unforgettable memories of your Ladakh expedition.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permits",
      "Camel ride in Nubra Valley",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/ladakh-grand-expedition",
  },
  {
    id: 15,

    category: "domestic",

    slug: "vizag-hyderabad-mallikarjuna-tour",

    title: "Vizag Hyderabad",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.6,

    location:
      "Visakhapatnam • Araku Valley • Hyderabad • Mallikarjuna Jyotirlinga",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Explore the scenic coast of Visakhapatnam, the beautiful Araku Valley, the historic city of Hyderabad, and the sacred Mallikarjuna Jyotirlinga temple on this well-planned South India tour combining beaches, hills, heritage, and spirituality.",

    packages: {
      package1: {
        duration: "07 Nights / 11 Days",
        price: 30500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Visakhapatnam",
            distance: "Train journey",
            description:
              "Board Train 12863 / 12839 from Howrah Railway Station for Visakhapatnam. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Vizag",
            distance: "Railway station transfer",
            description:
              "Arrive at Visakhapatnam Railway Station and transfer to hotel. After lunch visit Rushikonda Beach, Kailashgiri, Submarine Museum, Lighthouse, and Ramanaidu Studio. Overnight stay at Vizag.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Vizag Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Simhachalam Hill Temple in the morning. After lunch explore R.K. Beach and Yarada Beach. Overnight stay at Vizag.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Araku Valley Excursion",
            distance: "Excursion by train / car",
            description:
              "Morning excursion to Araku Valley by train or car. Visit Borra Caves, Tribal Museum, gardens, and Chaparai. Return to Vizag for overnight stay.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Vizag → Hyderabad",
            distance: "Train journey",
            description:
              "After lunch transfer to Visakhapatnam Railway Station and board train for Hyderabad. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Hyderabad Sightseeing",
            distance: "Local sightseeing",
            description:
              "Arrive at Hyderabad and transfer to hotel. Visit Charminar, Golconda Fort, Salar Jung Museum, Birla Temple, Lumbini Park, Chilkur Balaji Temple, and Buddha Statue. Overnight stay at Hyderabad.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Hyderabad → Mallikarjuna Jyotirlinga",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Mallikarjuna Jyotirlinga temple for darshan. Overnight stay at Mallikarjuna.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Mallikarjuna → Hyderabad",
            distance: "Road transfer",
            description:
              "After breakfast return to Hyderabad. Overnight stay at Hyderabad.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Ramoji Film City",
            distance: "Excursion",
            description:
              "Full-day excursion to the world-famous Ramoji Film City. Overnight stay at Hyderabad.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Hyderabad → Kolkata",
            distance: "Train journey",
            description:
              "Check out from hotel and transfer to Hyderabad Railway Station for return train journey to Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of your South India tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals (lunch & dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permit charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/vizag-hyderabad-mallikarjuna-tour",
  },
  {
    id: 16,

    category: "domestic",

    slug: "kashmir-tour",

    title: "Kashmir",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.1,

    location:
      "Amritsar • Katra • Srinagar • Sonamarg • Gulmarg • Pahalgam • Patnitop",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
    ],

    overview:
      "Experience the breathtaking beauty of Kashmir with this scenic tour covering Srinagar, Sonamarg, Gulmarg, Pahalgam, Katra, and optionally Amritsar. Enjoy snow-capped mountains, lush valleys, Dal Lake, Mughal gardens, and the sacred Vaishno Devi pilgrimage.",

    packages: {
      package1: {
        duration: "08 Nights / 13 Days",
        price: 25500,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Jammu",
            distance: "Train journey",
            description:
              "Board Train 13151 from Kolkata Railway Station for Jammu. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Jammu. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Jammu → Katra (Vaishno Devi)",
            distance: "Road transfer",
            description:
              "Arrive at Jammu Railway Station and transfer to Katra. Evening Vaishno Devi yatra and darshan. Return to hotel. Overnight stay at Katra.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Katra Leisure Day",
            distance: "Leisure",
            description:
              "Full day rest and leisure at Katra. Overnight stay at Katra.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Katra → Srinagar",
            distance: "Road transfer",
            description:
              "Drive to Srinagar and transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Sonamarg Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to Sonamarg and return to Srinagar. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Gulmarg Excursion",
            distance: "Excursion",
            description:
              "Visit Gulmarg and return to Srinagar in the evening. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Srinagar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Tulip Garden, Mughal Gardens, Chashme Shahi Garden, and local attractions. Optional Shikara ride on Dal Lake at own cost. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Srinagar → Pahalgam",
            distance: "Road transfer",
            description:
              "Drive to Pahalgam and enjoy the beautiful valley surroundings. Overnight stay at Pahalgam.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Pahalgam Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Chandanwari, Betab Valley, and Aru Valley (optional and at own cost). Overnight stay at Pahalgam.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Pahalgam → Patnitop → Jammu",
            distance: "Road transfer",
            description:
              "Visit Patnitop, Natha Top, and Nag Temple, then proceed to Jammu Railway Station for return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Arrival at Howrah / Sealdah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of your Kashmir tour.",
            images: [null, null],
          },
        ],
      },

      package2: {
        duration: "10 Nights / 15 Days",
        price: 28500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Amritsar",
            distance: "Train journey",
            description:
              "Board Train 13005 from Howrah Railway Station for Amritsar. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Amritsar. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Amritsar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Golden Temple, Jallianwala Bagh, and Wagah Border ceremony. Overnight stay at Amritsar.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Amritsar → Katra (Vaishno Devi)",
            distance: "Road transfer",
            description:
              "Proceed to Katra and begin Vaishno Devi yatra in the evening. Return to hotel after darshan. Overnight stay at Katra.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Katra Leisure Day",
            distance: "Leisure",
            description:
              "Full day rest and leisure at Katra. Overnight stay at Katra.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Katra → Srinagar",
            distance: "Road transfer",
            description:
              "Drive to Srinagar and transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Sonamarg Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to Sonamarg and return to Srinagar. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Gulmarg Excursion",
            distance: "Excursion",
            description:
              "Visit Gulmarg and return to Srinagar in the evening. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Srinagar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Tulip Garden, Mughal Gardens, Chashme Shahi Garden, and local attractions. Optional Shikara ride on Dal Lake at own cost. Overnight stay at Srinagar.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Srinagar → Pahalgam",
            distance: "Road transfer",
            description:
              "Drive to Pahalgam and enjoy the beautiful valley surroundings. Overnight stay at Pahalgam.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Pahalgam Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Chandanwari, Betab Valley, and Aru Valley (optional and at own cost). Overnight stay at Pahalgam.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Pahalgam → Patnitop",
            distance: "Road transfer",
            description:
              "Proceed to Patnitop and enjoy the hill station surroundings. Overnight stay at Patnitop.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Patnitop → Jammu",
            distance: "Road transfer",
            description:
              "Visit Natha Top and Nag Temple before proceeding to Jammu Railway Station for return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 15,
            title: "Arrival at Howrah / Sealdah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of your Kashmir tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe room accommodation",
      "Sleeper class train tickets",
      "Train meals",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking & toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per tour schedule",
    ],

    excluded: [
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permits",
      "Shikara ride on Dal Lake",
      "Pahalgam local union sightseeing",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/kashmir-tour",
  },
  {
    id: 17,

    category: "domestic",

    slug: "kinnaur-la-hul-spiti",

    title: "Kinnaur La Hul Spiti",

    image: "/images/kinnaur-la-hul-spiti/day4_1.webp",

    gallery: ["/images/kinnaur-la-hul-spiti/day2.Fwebp",
      "/images/kinnaur-la-hul-spiti/day4_1.webp",
      "/images/kinnaur-la-hul-spiti/day4.webp",
      "/images/kinnaur-la-hul-spiti/day5_1.webp",
      "/images/kinnaur-la-hul-spiti/day5_2.webp",
      "/images/kinnaur-la-hul-spiti/day5_3.webp",
      "/images/kinnaur-la-hul-spiti/day5_4.webp",
      "/images/kinnaur-la-hul-spiti/day5_5.webp",
      "/images/kinnaur-la-hul-spiti/day5.webp",
      "/images/kinnaur-la-hul-spiti/day6_1.webp",
      "/images/kinnaur-la-hul-spiti/day6_2.webp",
      "/images/kinnaur-la-hul-spiti/day6_3.webp",
      "/images/kinnaur-la-hul-spiti/day6.webp",
      "/images/kinnaur-la-hul-spiti/day8.webp",
      "/images/kinnaur-la-hul-spiti/day9.webp",
      "/images/kinnaur-la-hul-spiti/day10_1.webp",
      "/images/kinnaur-la-hul-spiti/day10.webp",
      "/images/kinnaur-la-hul-spiti/day11_1.webp",
      "/images/kinnaur-la-hul-spiti/day11_2.webp",
      "/images/kinnaur-la-hul-spiti/day11_3.webp",
      "/images/kinnaur-la-hul-spiti/day11.webp"],

    perPerson: true,

    rating: 9.2,

    location:
      "Shimla • Sarahan • Sangla • Kalpa • Tabo • Kaza • Chandratal • Manali",

    facilities: [
      { id: 1, icon: Hotel, label: "Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Mountain Circuit" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Experience the breathtaking Himalayan circuit through Kinnaur, Spiti, Chandratal, and Manali. This adventurous journey covers monasteries, high-altitude villages, mountain passes, lakes, and spectacular valley landscapes across Himachal Pradesh.",

    packages: {
      package1: {
        duration: "10 Nights / 11 Days",
        price: 30500,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Ambala",
            distance: "Train journey",
            description:
              "Board train from Kolkata Railway Station for Ambala. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 2,
            title: "Ambala → Shimla",
            distance: "115 km",
            description:
              "Reach Ambala Railway Station and transfer to Shimla. Visit Kali Bari Temple and enjoy sightseeing in Shimla. The Kali Bari Temple was built in 1845 and is dedicated to Goddess Kali, also revered as Shyamala, from whose name the hill station of Shimla derives its title.",
            images: [
              "/images/kinnaur-la-hul-spiti/day2.webp",
              null,
            ],
          },

          {
            day: 3,
            title: "Shimla → Sarahan",
            distance: "170 km",
            description:
              "Move to Sarahan. Overnight stay at Sarahan.",
            images: [null, null],
          },

          {
            day: 4,
            title: "Sarahan → Sangla",
            distance: "95 km",
            description:
              "In the morning visit Bhimakali Temple and Rajbari, then proceed to Sangla via Karcham. The Bhimakali Temple in Sarahan is an ancient shrine dedicated to Goddess Durga as Bhimakali, the kuldevi of the former Bushahr princely state. Sangla Valley, located in the Kinnaur district of Himachal Pradesh, has a rich history tied to ancient trade routes, regional kingdoms, and its strategic proximity to the Indo-Tibetan border. Overnight stay at Sangla.",
            images: [
              "/images/kinnaur-la-hul-spiti/day4_1.webp",
              "/images/kinnaur-la-hul-spiti/day4.webp",
            ],
          },

          {
            day: 5,
            title: "Sangla → Chitkul → Kalpa",
            distance: "90 km",
            description:
              "Sightseeing at Chitkul. Chitkul's local folklore, mythology, and its role on ancient trade routes define its past. It is known as the last village in India. After sightseeing, move to Kalpa via Reckong Peo. Reckong Peo is the administrative headquarters of Kinnaur district. Visit Roghi Village, a traditional Kinnauri settlement known for its ancient heritage, wooden architecture, and cliffside location about 8 kilometers from Kalpa. Kinnaur Kailash, also known as Kinner Kailash, is a sacred mountain in Kinnaur district standing at roughly 6,050 meters.",
            images: [
              "/images/kinnaur-la-hul-spiti/day5_1.webp",
              "/images/kinnaur-la-hul-spiti/day5_2.webp",
              "/images/kinnaur-la-hul-spiti/day5_3.webp",
              "/images/kinnaur-la-hul-spiti/day5_4.webp",
              "/images/kinnaur-la-hul-spiti/day5_5.webp",
              "/images/kinnaur-la-hul-spiti/day5.webp",
            ],
          },

          {
            day: 6,
            title: "Kalpa → Tabo",
            distance: "150 km",
            description:
              "Move to Tabo. En route, visit Nako Lake, a high-altitude lake located at 3,662 meters above sea level in Nako village of Kinnaur district, Himachal Pradesh. Tabo Monastery was founded in 996 CE by the Tibetan king and royal lama Yeshe-Ö in the Spiti Valley of Himachal Pradesh.",
            images: [
              "/images/kinnaur-la-hul-spiti/day6_1.webp",
              "/images/kinnaur-la-hul-spiti/day6_2.webp",
              "/images/kinnaur-la-hul-spiti/day6_3.webp",
              "/images/kinnaur-la-hul-spiti/day6.webp",
            ],
          },

          {
            day: 7,
            title: "Tabo → Kaza",
            distance: "50 km",
            description:
              "Proceed to Kaza. Kaza is the administrative headquarters of the remote Spiti Valley in Himachal Pradesh, with a history deeply tied to Tibetan trade, Buddhist culture, and shifting colonial borders. Visit Dhankar Monastery, a nearly 1,000-year-old cliffside fort-monastery perched at 3,894 meters. Also visit Key Monastery, Kaza's primary historical Buddhist center, located 12 kilometers north of Kaza at an altitude of 4,166 meters. Overnight stay at Kaza.",
            images: [null, null],
          },

          {
            day: 8,
            title: "Kaza Local Sightseeing",
            distance: "Excursion",
            description:
              "Sightseeing of Kaza. Visit Kibber, an ancient Himalayan settlement located at 4,270 meters in the Spiti Valley of Himachal Pradesh. Return to Kaza for an overnight stay.",
            images: [
              "/images/kinnaur-la-hul-spiti/day8.webp",
              null,
            ],
          },

          {
            day: 9,
            title: "Kaza → Chandratal",
            distance: "95 km",
            description:
              "After breakfast move to Chandratal. Visit Chandratal Lake, also known as the Lake of the Moon, a high-altitude glacial lake at 14,100 feet in the Spiti and Lahaul district of Himachal Pradesh. Travel via Kunzum Pass, a high-altitude mountain pass at 4,551 meters that has historically served as a trade and pilgrimage route connecting the Kullu, Lahaul, and Spiti valleys.",
            images: [
              "/images/kinnaur-la-hul-spiti/day9.webp",
              null,
            ],
          },

          {
            day: 10,
            title: "Chandratal → Manali",
            distance: "130 km",
            description:
              "After breakfast move to Manali. En route, visit Sissu, also known as Khwaling, a historic village located in the Lahaul Valley at an altitude of 3,120 meters on the right bank of the Chandra River. Travel through the Atal Tunnel, a 9.02-kilometer road tunnel connecting Manali to the Lahaul-Spiti Valley and bypassing the snow-bound Rohtang Pass.",
            images: [
              "/images/kinnaur-la-hul-spiti/day10_1.webp",
              "/images/kinnaur-la-hul-spiti/day10.webp",
            ],
          },

          {
            day: 11,
            title: "Manali Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "After breakfast, enjoy Manali local sightseeing. Visit Hidimba Devi Temple, which was built in 1553 CE by Maharaja Bahadur Singh. Visit the main Tibetan monastery in Manali, Gadhan Thekchhokling Gompa, which was built in 1969 by Tibetan refugees. Also visit Old Vashisht Village, an ancient settlement located 3 kilometers from Manali, famous for its natural hot sulfur springs and the 4,000-year-old Vashisht Temple.",
            images: [
              "/images/kinnaur-la-hul-spiti/day11_1.webp",
              "/images/kinnaur-la-hul-spiti/day11_2.webp",
              "/images/kinnaur-la-hul-spiti/day11_3.webp",
              "/images/kinnaur-la-hul-spiti/day11.webp",
            ],
          },
        ],
      },

      package2: {
        duration: "14 Nights / 15 Days",
        price: null,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Chandigarh/Kalka",
            distance: "Train journey",
            description:
              "Board train from Howrah for Chandigarh/Kalka. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description: "Continue train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Chandigarh/Kalka → Shimla",
            distance: "115 km",
            description:
              "Transfer to Shimla and visit Mall Road and Kali Bari. Overnight stay at Shimla.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Shimla Local Sightseeing",
            distance: "Excursion",
            description:
              "Visit Kufri, Fagu, and Green Valley. Overnight stay at Shimla.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Shimla → Sarahan",
            distance: "170 km",
            description: "Proceed to Sarahan. Overnight stay at Sarahan.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Sarahan → Sangla",
            distance: "95 km",
            description:
              "Visit Bhimakali Temple and drive to Sangla via Karcham. Overnight stay at Sangla.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Sangla → Chitkul → Kalpa",
            distance: "90 km",
            description:
              "Visit Chitkul, then continue to Kalpa via Reckong Peo and local viewpoints. Overnight stay at Kalpa.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Kalpa → Tabo",
            distance: "150 km",
            description: "Drive to Tabo via Nako Lake. Overnight stay at Tabo.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Tabo → Kaza",
            distance: "50 km",
            description:
              "Visit Tabo Monastery, Dhankar Monastery, Key Monastery, Hikkim, and Kibber before reaching Kaza. Overnight stay at Kaza.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Kaza → Chandratal",
            distance: "95 km",
            description:
              "Travel via Kunzum Pass to Chandratal Lake. Overnight stay at Chandratal.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Chandratal → Manali",
            distance: "130 km",
            description:
              "Drive to Manali via Sissu Village and Atal Tunnel. Overnight stay at Manali.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Manali Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Hidimba Temple, Tibetan Monastery, Handicraft Centre, and Old Vashisht Village. Overnight stay at Manali.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Manali → Chandigarh/Kalka",
            distance: "300 km",
            description:
              "Transfer to Chandigarh/Kalka Railway Station for return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 15,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with unforgettable memories of the Himalayan circuit.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Sleeper class train tickets",
      "Train lunch & dinner",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permits",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/kinnaur-la-hul-spiti",
  },
  {
    id: 18,

    category: "domestic",

    slug: "meghalaya-tour",

    title: "Meghalaya",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.1,

    location:
      "Guwahati • Shillong • Cherrapunji • Dawki • Mawlynnong • Kaziranga",

    facilities: [
      { id: 1, icon: Hotel, label: "Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Nature & Waterfalls" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Explore the enchanting hills of Meghalaya with Shillong, Cherrapunji, Dawki, and Mawlynnong, along with an optional Kaziranga wildlife extension. Experience waterfalls, living root bridges, crystal-clear rivers, and the natural beauty of Northeast India.",

    packages: {
      package1: {
        duration: "07 Nights / 08 Days",
        price: 21500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Guwahati",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Guwahati. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Guwahati",
            distance: "Railway station transfer",
            description:
              "Arrive at Guwahati and transfer to hotel. Visit Vasistha Ashram, Kamakhya Temple, and Balaji Temple depending on arrival time. Overnight stay at Guwahati.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Guwahati → Shillong",
            distance: "100 km",
            description:
              "After breakfast transfer to Shillong via the scenic Borapani (Umiam) Lake. Overnight stay at Shillong.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Cherrapunji Excursion",
            distance: "Full day excursion",
            description:
              "Visit Nohkalikai Falls, Seven Sisters Falls, Dainthlen Falls, Thangkharang Park, Elephanta Falls, Living Root Bridge, and Ramakrishna Mission. Return to Shillong for overnight stay.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Mawlynnong & Dawki",
            distance: "Full day excursion",
            description:
              "Explore Mawlynnong village and enjoy the crystal-clear Dawki River. Overnight stay at Shillong.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Shillong → Guwahati",
            distance: "100 km",
            description:
              "After breakfast return to Guwahati. Overnight stay at Guwahati.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Departure from Guwahati",
            distance: "Railway station transfer",
            description:
              "After breakfast transfer to Guwahati Railway Station for return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Meghalaya.",
            images: [null, null],
          },
        ],
      },

      package2: {
        duration: "08 Nights / 09 Days",
        price: 21500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Guwahati",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Guwahati. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Guwahati",
            distance: "Railway station transfer",
            description:
              "Arrive at Guwahati and transfer to hotel. Visit Vasistha Ashram, Kamakhya Temple, and Balaji Temple depending on arrival time. Overnight stay at Guwahati.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Guwahati → Shillong",
            distance: "100 km",
            description:
              "After breakfast transfer to Shillong via Borapani Lake. Overnight stay at Shillong.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Cherrapunji Excursion",
            distance: "Full day excursion",
            description:
              "Visit Nohkalikai Falls, Seven Sisters Falls, Dainthlen Falls, Thangkharang Park, Elephanta Falls, Living Root Bridge, and Ramakrishna Mission. Return to Shillong for overnight stay.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Mawlynnong & Dawki",
            distance: "Full day excursion",
            description:
              "Explore Mawlynnong village and enjoy the beautiful Dawki River. Overnight stay at Shillong.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Shillong → Kaziranga",
            distance: "270 km",
            description:
              "Transfer to Kaziranga National Park. Evening tribal dance (optional & own cost). Overnight stay at Kaziranga.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Kaziranga → Guwahati",
            distance: "220 km",
            description:
              "Early morning jungle safari (optional & own cost). After breakfast return to Guwahati. Overnight stay at Guwahati.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Departure from Guwahati",
            distance: "Railway station transfer",
            description:
              "After breakfast transfer to Guwahati Railway Station for return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Meghalaya and Kaziranga.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Train ticket (Sleeper Class / 3 AC as per package)",
      "Train lunch & dinner",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permits",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/meghalaya-tour",
  },
  {
    id: 19,

    category: "domestic",

    slug: "north-india-tour",

    title: "North India",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.0,

    location:
      "Agra • Mathura • Vrindavan • Delhi • Haridwar • Rishikesh • Mussoorie • Varanasi",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Temple & Heritage Tour" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Discover the spiritual and cultural heart of North India with iconic destinations including Agra, Mathura, Vrindavan, Delhi, Haridwar, Rishikesh, Mussoorie, and Varanasi. Experience Mughal heritage, Krishna temples, Ganga Aarti, Himalayan foothills, and the timeless charm of Varanasi.",

    packages: {
      package1: {
        duration: "10 Nights / 11 Days",
        price: 21500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Agra",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Agra. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Agra",
            distance: "Railway station transfer",
            description:
              "Arrive at Agra Railway Station and transfer to hotel. Overnight stay at Agra.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Agra → Vrindavan",
            distance: "80 km",
            description:
              "Visit Taj Mahal, Agra Fort, and Fatehpur Sikri. Later proceed to Vrindavan. Overnight stay at Vrindavan.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Mathura & Vrindavan",
            distance: "Local sightseeing",
            description:
              "Visit Shri Krishna Janmabhoomi, ISKCON Temple, Madan Mohan Temple, and Shahji Temple. Overnight stay at Vrindavan.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Vrindavan → Delhi",
            distance: "180 km",
            description:
              "Early morning transfer to Delhi and check in to hotel. Overnight stay at Delhi.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Delhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Rajghat, Qutub Minar, Red Fort, Indira Museum, Lotus Temple, and India Gate. Overnight stay at Delhi.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Delhi → Haridwar",
            distance: "Train journey",
            description:
              "Take morning train to Haridwar. Enjoy Ganga bath and evening Ganga Aarti. Overnight stay at Haridwar.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Rishikesh Excursion",
            distance: "Local excursion",
            description:
              "Visit Ram Jhula and Laxman Jhula in Rishikesh. Return to Haridwar for overnight stay.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Mussoorie Excursion & Departure",
            distance: "Local excursion + train",
            description:
              "Visit Kempty Falls and Sahastradhara in Mussoorie. Return to Haridwar and board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey back to Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of North India.",
            images: [null, null],
          },
        ],
      },
      package2: {
        duration: "12 Nights / 13 Days",
        price: 26500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Agra",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Agra. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Agra",
            distance: "Railway station transfer",
            description:
              "Arrive at Agra Railway Station and transfer to hotel. Overnight stay at Agra.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Agra → Vrindavan",
            distance: "80 km",
            description:
              "Visit Taj Mahal, Agra Fort, and Fatehpur Sikri. Later proceed to Vrindavan. Overnight stay at Vrindavan.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Mathura & Vrindavan Temples",
            distance: "Local sightseeing",
            description:
              "Visit Shri Krishna Janmabhoomi, ISKCON Temple, Madan Mohan Temple, Shahji Temple, and Prem Mandir. Overnight stay at Vrindavan.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Barsana & Govardhan",
            distance: "Local sightseeing",
            description:
              "Visit Banke Bihari Temple, Nidhivan, Bharat Mata Temple, Barsana, Govardhan Hill, Radha Kund, and Shyam Kund. Overnight stay at Vrindavan.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Vrindavan → Delhi",
            distance: "180 km",
            description:
              "Early morning transfer to Delhi and check in to hotel. Overnight stay at Delhi.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Delhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Rajghat, Qutub Minar, Red Fort, Indira Museum, Lotus Temple, and India Gate. Overnight stay at Delhi.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Delhi → Haridwar",
            distance: "Train journey",
            description:
              "Take morning train to Haridwar. Enjoy Ganga bath and evening Ganga Aarti. Overnight stay at Haridwar.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Rishikesh Excursion",
            distance: "Local excursion",
            description:
              "Visit Ram Jhula and Laxman Jhula in Rishikesh. Return to Haridwar for overnight stay.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Mussoorie Excursion → Varanasi",
            distance: "Local excursion + train",
            description:
              "Visit Kempty Falls and Sahastradhara in Mussoorie. Return to Haridwar and board train for Varanasi. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Varanasi Arrival & Ganga Aarti",
            distance: "Railway station transfer",
            description:
              "Arrive at Varanasi and visit Annapurna Temple, Birla Temple, and Kashi Vishwanath Temple. Evening Ganga Aarti; boat ride optional. Overnight stay at Varanasi.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Departure from Varanasi",
            distance: "Railway station transfer",
            description:
              "After breakfast transfer to Varanasi Railway Station for return train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of North India.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Train ticket (Sleeper Class)",
      "Train meals (Lunch & Dinner) for Package 1",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permits",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/north-india-tour",
  },
  {
    id: 20,

    category: "domestic",

    slug: "north-sikkim-tour",

    title: "North Sikkim",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.2,

    location:
      "Gangtok • Lachen • Gurudongmar Lake • Lachung • Yumthang Valley • Nathula • Pelling",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Mountain & Valley Tour" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Experience the breathtaking beauty of North Sikkim with Gangtok, Lachen, Lachung, Yumthang Valley, Gurudongmar Lake, Nathula Pass, and Pelling. Enjoy snow-capped mountains, alpine valleys, monasteries, lakes, and scenic Himalayan landscapes on this unforgettable Sikkim tour.",

    packages: {
      package1: {
        duration: "8 Nights / 9 Days",
        price: "Not available",
        itinerary: [
          {
            day: 1,
            title: "Kolkata → NJP",
            distance: "Train journey",
            description:
              "Board train from Howrah / Sealdah Railway Station for NJP. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Gangtok",
            distance: "NJP → Gangtok",
            description:
              "Arrive at NJP Railway Station and transfer to Gangtok. Evening visit to MG Marg and Mall Road on foot. Overnight stay at Gangtok.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Gangtok → Lachen",
            distance: "Approx. 120 km",
            description:
              "After breakfast proceed to Lachen with en-route sightseeing. Overnight stay at Lachen.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Lachen → Gurudongmar Lake → Lachung",
            distance: "Approx. 130 km",
            description:
              "Visit Gurudongmar Lake in the morning and continue to Lachung. Overnight stay at Lachung.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Lachung → Yumthang Valley → Gangtok",
            distance: "Approx. 125 km",
            description:
              "Visit Yumthang Valley and optional Zero Point. Return to Gangtok. Overnight stay at Gangtok.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Gangtok Excursion",
            distance: "Local excursion",
            description:
              "Visit Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Gangtok → Pelling",
            distance: "Approx. 115 km",
            description:
              "After breakfast transfer to Pelling. Overnight stay at Pelling.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Pelling Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Pelling local attractions including the famous 5 Points sightseeing circuit and Singshore Bridge. Overnight stay at Pelling.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Pelling → NJP → Kolkata",
            distance: "Approx. 140 km + train",
            description:
              "Transfer to NJP Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of North Sikkim.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Train ticket (Sleeper Class)",
      "Train dinner on onward journey",
      "Breakfast",
      "Lunch",
      "Dinner",
      "Transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Flight ticket",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permits",
      "Any ride",
      "Personal activities",
      "Any safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/north-sikkim-tour",
  },
  {
    id: 21,

    category: "domestic",

    slug: "goa-tour",

    title: "Goa",

    image: "/images/goa/day43.webp",

    gallery: [
      "/images/goa/day3.webp",
      "/images/goa/day4.webp",
      "/images/goa/day5.webp",
      "/images/goa/day6.webp",
      "/images/goa/day41.webp",
      "/images/goa/day42.webp",
      "/images/goa/day43.webp",
      "/images/goa/day44.webp",
      "/images/goa/day51.webp",
      "/images/goa/day52.webp",
      "/images/goa/day53.webp",
    ],

    perPerson: true,

    rating: 9.0,

    location: "North Goa • South Goa • Madgaon",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Beach Tour" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Relax on the golden beaches of Goa and explore the vibrant charm of North and South Goa. Visit famous beaches, forts, churches, temples, and enjoy a perfect blend of leisure, culture, and coastal beauty.",

    packages: {
      package1: {
        duration: "3 Nights / 8 Days",
        price: 12500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Madgaon",
            distance: "Train journey",
            description:
              "Board train from Shalimar Railway Station for Madgaon. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 3,
            title: "Reach at Goa",
            distance: "Railway station transfer",
            description:
              "Arrive at Madgaon Railway Station and transfer to the hotel. Goa's recorded history spans over 2,000 years, evolving from ancient Hindu and Maurya rule to a vital Bijapur Sultanate port, a golden 16th-century Portuguese colonial capital, and finally its integration into India in 1961. Overnight stay at Goa.",
            images: [
              "/images/goa/day3.webp",
            ],
          },

          {
            day: 4,
            title: "North Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore North Goa starting with Dolphin Point, a popular coastal viewpoint and boat-trip staging area near Fort Aguada, known for its surrounding maritime scenery and dolphin sightings. Visit Fort Aguada, the historic Portuguese coastal fortress built between 1609 and 1612, followed by Baga Beach, known for its vibrant atmosphere and nightlife. Continue to Calangute Beach, historically a fishing village that developed into one of Goa's busiest tourist destinations. End the sightseeing at Miramar Beach, formerly known as Gaspar Dias Beach. Return to the hotel for overnight stay.",
            images: [
              "/images/goa/day4.webp",
              "/images/goa/day41.webp",
              "/images/goa/day42.webp",
              "/images/goa/day43.webp",
              "/images/goa/day44.webp",
            ],
          },

          {
            day: 5,
            title: "South Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore South Goa and Old Goa. Visit the Basilica of Bom Jesus, also known as St. Xavier's Church, famous for preserving the mortal remains of St. Francis Xavier. Continue to Mangeshi Temple in Priol, a historic shrine dedicated to Lord Shiva. Visit Shri Shantadurga Temple in Kavlem, Ponda, a major pilgrimage center dedicated to Goddess Shantadurga. Finally, visit Colva Beach, which developed from a quiet fishing village into a popular coastal destination. Return to the hotel for overnight stay.",
            images: [
              "/images/goa/day5.webp",
              "/images/goa/day51.webp",
              "/images/goa/day52.webp",
              "/images/goa/day53.webp",
            ],
          },

          {
            day: 6,
            title: "Free Day for Personal Activities",
            distance: "Free day / Optional activities",
            description:
              "Full day free for personal activities, shopping, beach time, or optional water sports. Guests can also enjoy a Goa cruise along the Mandovi River, offering scenic views, live music, and cultural performances. Overnight stay at Goa.",
            images: [
              "/images/goa/day6.webp",
            ],
          },

          {
            day: 7,
            title: "Goa → Kolkata",
            distance: "Train journey",
            description:
              "Early morning check-out and transfer to Madgaon Railway Station. Board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 8,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar Railway Station with sweet memories of Goa.",
            images: [null, null],
          },
        ],
      },

      package2: {
        duration: "4 Nights / 8 Days",
        price: 15500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Madgaon",
            distance: "Train journey",
            description:
              "Board train from Shalimar Railway Station for Madgaon. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description: "Full day train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Arrival at Goa",
            distance: "Railway station transfer",
            description:
              "Arrive at Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 4,
            title: "North Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach, and Miramar Beach. Return to hotel for overnight stay.",
            images: [null, null],
          },
          {
            day: 5,
            title: "South Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit St. Xavier's Church, Mangesh Temple, Santadurga Temple, and Colva Beach. Return to hotel for overnight stay.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Leisure Day",
            distance: "Free day",
            description:
              "Full day free for personal activities, shopping, beach time, or optional water sports. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Extra Leisure Day",
            distance: "Free day",
            description:
              "Enjoy an additional full day in Goa for relaxation, beach activities, local markets, cafés, or optional sightseeing. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Goa → Kolkata",
            distance: "Train journey",
            description:
              "Early morning check-out and transfer to Madgaon Railway Station. Board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar Railway Station with sweet memories of Goa.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Train ticket (Sleeper Class)",
      "Train food (Lunch & Dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Flight ticket",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Any ride",
      "Camera charges",
      "Permits",
      "Personal activities",
      "Any safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/goa-tour",
  },
  {
    id: 22,

    category: "domestic",

    slug: "karnataka-tour",

    title: "Karnataka",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.1,

    location:
      "Udupi • Coorg • Mysuru • Hampi • Hospet • Badami • Gokarna • Bengaluru",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "AC Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Temple & Heritage Tour" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Explore the cultural, spiritual, and scenic wonders of Karnataka including Udupi, Coorg, Mysuru, Hampi, Hospet, Badami, Gokarna, and Bengaluru. Experience ancient temples, UNESCO heritage sites, waterfalls, beaches, monasteries, palaces, and the timeless charm of South India.",

    packages: {
      package1: {
        duration: "11 Nights / 12 Days",
        price: 28500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Mangaluru",
            distance: "Train journey",
            description:
              "Board train (22851) from Santragachi Railway Station for Mangaluru. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description: "Full day train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Arrival at Udupi",
            distance: "Mangaluru → Udupi",
            description:
              "Arrive at Mangaluru Railway Station and transfer to Udupi hotel. Overnight stay at Udupi.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Udupi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Shri Krishna Math, Shri Anantheshwara Temple, Pajaka Kshetra, Corporation Bank Heritage Museum, Koodlutheertha Falls, and Shri Indrani Panchadurga Parameshwari Temple. Overnight stay at Udupi.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Udupi → Coorg",
            distance: "Approx. 190 km",
            description:
              "After breakfast proceed to Coorg. Overnight stay at Coorg.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Coorg Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Abbey Falls, Namdroling Monastery (Golden Temple), Iruppu Falls, and nearby attractions. Overnight stay at Coorg.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Coorg → Mysuru",
            distance: "Approx. 120 km",
            description:
              "Proceed to Mysuru via Buddhist Monastery and Brindavan Gardens. Visit Mysore Palace. Overnight stay at Mysuru.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Mysuru → Hospet",
            distance: "Approx. 340 km",
            description:
              "After breakfast drive to Hospet. Overnight stay at Hospet.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Hampi Excursion",
            distance: "Local excursion",
            description:
              "Explore Virupaksha Temple, Hampi, Stone Chariot, Hampi Archaeological Museum, Tungabhadra Dam, Shri Huligemma Devi Temple, TB Dam Zoo & Park, and Hazara Rama Temple. Overnight stay at Hospet.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Hospet → Bengaluru",
            distance: "Approx. 340 km",
            description:
              "Drive to Bengaluru and check in to hotel. Evening free for leisure. Overnight stay at Bengaluru.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Bengaluru Departure",
            distance: "Railway station transfer",
            description:
              "After breakfast transfer to Bengaluru Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Karnataka.",
            images: [null, null],
          },
        ],
      },

      package2: {
        duration: "14 Nights / 15 Days",
        price: 35500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Hospet",
            distance: "Train journey",
            description:
              "Board Amravati Express (18047) from Shalimar Railway Station for Hospet. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description: "Full day train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Arrival at Hospet",
            distance: "Railway station transfer",
            description:
              "Arrive at Hospet Railway Station and transfer to hotel. Overnight stay at Hospet.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Hampi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Virupaksha Temple, Hampi, Stone Chariot, Hampi Archaeological Museum, Tungabhadra Dam, Shri Huligemma Devi Temple, Anjanadri Betta, TB Dam Zoo & Park, and Hazara Rama Temple. Overnight stay at Hospet.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Hospet → Badami",
            distance: "Approx. 140 km",
            description:
              "Drive to Badami and visit Badami Cave Temples, Badami Fort, and Agastya Lake. Overnight stay at Badami.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Badami → Gokarna",
            distance: "Approx. 255 km",
            description:
              "Proceed to Gokarna via Hubballi. Overnight stay at Gokarna.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Gokarna Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Om Beach, Gokarna Main Beach, Belekan Beach, and Gorabha Shiva Cave. Overnight stay at Gokarna.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Gokarna → Udupi via Jog Falls",
            distance: "Approx. 280 km",
            description:
              "Drive to Udupi via Jog Falls. Overnight stay at Udupi.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Udupi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Shri Krishna Math, Shri Anantheshwara Temple, Pajaka Kshetra, Corporation Bank Heritage Museum, Koodlutheertha Falls, and Shri Indrani Panchadurga Parameshwari Temple. Overnight stay at Udupi.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Udupi → Coorg",
            distance: "Approx. 190 km",
            description: "Proceed to Coorg. Overnight stay at Coorg.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Coorg Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Abbey Falls, Namdroling Monastery (Golden Temple), Iruppu Falls, and nearby attractions. Overnight stay at Coorg.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Coorg → Mysuru",
            distance: "Approx. 120 km",
            description:
              "Drive to Mysuru via Buddhist Monastery and Brindavan Gardens. Overnight stay at Mysuru.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Mysuru Sightseeing & Departure",
            distance: "Local sightseeing + train",
            description:
              "Visit Mysuru Palace and Chamundeshwari Temple. After lunch transfer to Mysuru Railway Station and board train (22818) for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Train journey",
            description: "Full day train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 15,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Karnataka.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Train ticket (Sleeper Class)",
      "Train meals (Lunch & Dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "AC transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Flight ticket",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permits",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/karnataka-tour",
  },
  {
    id: 23,

    category: "domestic",

    slug: "goa-lakshadweep-tour",

    title: "Goa with Lakshadweep",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.4,

    location: "Goa • Kochi • Agatti • Bangaram • Thinnakara • Kalpitty",

    facilities: [
      { id: 1, icon: Hotel, label: "Beach Resort Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Airport Transfers" },
      { id: 4, icon: Camera, label: "Island Excursions" },
      { id: 5, icon: MapPinned, label: "Beach & Lagoon Tour" },
      { id: 6, icon: Plane, label: "Flight Included" },
    ],

    overview:
      "Experience a unique tropical getaway combining the beaches of Goa with the turquoise lagoons of Lakshadweep. Explore Agatti Island, Bangaram Sandbank, Thinnakara Island, Kalpitty Island, coral reefs, snorkeling spots, and breathtaking sunset views while enjoying comfortable beach resort stays and island hospitality.",

    packages: {
      package1: {
        duration: "4 Nights / 5 Days",
        price: 60000,
        itinerary: [
          {
            day: 1,
            title: "Arrival at Goa / Kochi",
            distance: "Airport transfer",
            description:
              "Arrive at Goa or Kochi Airport and transfer to hotel. Overnight stay at Goa / Kochi.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Goa / Kochi → Agatti Island",
            distance: "Flight + island transfer",
            description:
              "Fly to Agatti, receive a traditional welcome, transfer to beach resort, enjoy lunch, and explore Agatti lagoon beaches, Andan Beach, Western Jetty, Eastern Jetty, and local island life. Overnight stay at Agatti.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Bangaram & Thinnakara Excursion",
            distance: "Boat excursion",
            description:
              "Boat trip to Bangaram Island and Thinnakara Island. Enjoy dolphin watching, sea turtle spotting, beach exploration, snorkeling at Bangaram Lagoon and the shipwreck site, and lunch on board. Return to Agatti by evening. Alternative deep-sea snorkeling trip may operate if island access is restricted.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Kalpitty Island & Lagoon Activities",
            distance: "Local island excursion",
            description:
              "Enjoy lagoon kayaking in the morning. Optional scuba diving available at extra cost. Evening glass-bottom boat ride to Kalpitty Island to view corals, marine life, green turtles, and hawksbill turtles, followed by sunset viewing. Overnight stay at Agatti.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Departure from Agatti",
            distance: "Airport transfer",
            description:
              "Breakfast at resort, transfer to Agatti Airport, and board return flight with unforgettable Lakshadweep memories.",
            images: [null, null],
          },
        ],
      },

      package2: {
        duration: "6 Nights / 7 Days",
        price: 70000,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Goa",
            distance: "Flight journey",
            description:
              "Fly from Kolkata to Goa, transfer to hotel, enjoy an evening cruise program, and stay overnight in Goa.",
            images: [null, null],
          },
          {
            day: 2,
            title: "North Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach, and Miramar Beach. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 3,
            title: "South Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit St. Xavier's Church, Mangesh Temple, Santadurga Temple, and Colva Beach. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Goa → Agatti Island",
            distance: "Flight + island transfer",
            description:
              "Transfer to Goa Airport, fly to Agatti, receive welcome assistance, transfer to beach resort, enjoy lunch, and explore Agatti lagoon beaches and island attractions. Overnight stay at Agatti.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Bangaram & Thinnakara Excursion",
            distance: "Boat excursion",
            description:
              "Boat trip to Bangaram Sandbank and Thinnakara Island with dolphin watching, snorkeling, beach exploration, and lunch on board. Alternative deep-sea snorkeling trip may operate if island access is restricted.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Kalpitty Island & Lagoon Activities",
            distance: "Local island excursion",
            description:
              "Enjoy kayaking, optional scuba diving, glass-bottom boat ride, coral viewing, turtle spotting, and sunset at Kalpitty Island. Overnight stay at Agatti.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Agatti → Kolkata",
            distance: "Flight journey",
            description:
              "Breakfast at resort, transfer to Agatti Airport, take return flight via Goa, and arrive in Kolkata with beautiful island memories.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Flight ticket as per selected package",
      "Beach resort accommodation (AC)",
      "Welcome drink",
      "Breakfast",
      "Lunch",
      "Evening tea",
      "Dinner",
      "Agatti Island sightseeing",
      "Bangaram Sandbank excursion (subject to permission and weather)",
      "Thinnakara Island visit (subject to permission and weather)",
      "Glass-bottom boat ride",
      "Kalpitty Island excursion",
      "Turtle watching",
      "Kayaking",
      "Snorkeling",
      "Airport pick-up & drop",
      "Guide assistance throughout the trip",
    ],

    excluded: [
      "Scuba diving (₹3,500 per person)",
      "Personal expenses",
      "Additional beverages",
      "Extra activities not mentioned in inclusions",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/goa-lakshadweep-tour",
  },
  {
    id: 24,

    category: "domestic",

    slug: "kerala-kanyakumari-tour",

    title: "Kerala with Kanyakumari",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.1,

    location:
      "Kanyakumari • Kovalam • Alleppey • Thekkady • Munnar • Kochi (Ernakulam)",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Hill & Backwater Tour" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Explore the scenic beauty of South India with this Kerala and Kanyakumari tour covering Kanyakumari, Kovalam, Alleppey, Thekkady, Munnar, and Kochi. Experience sunrise and sunset at Kanyakumari, serene beaches, backwaters, wildlife, tea gardens, waterfalls, and the colonial charm of Kochi.",

    packages: {
      package1: {
        duration: "11 Nights / 14 Days",
        price: 28500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Kanyakumari",
            distance: "Train journey",
            description:
              "Board Train 12665 from Howrah Railway Station at 4:15 PM for Kanyakumari. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey towards Kanyakumari. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Arrival at Kanyakumari",
            distance: "Railway station transfer",
            description:
              "Arrive at Kanyakumari Railway Station and transfer to hotel. Overnight stay at Kanyakumari.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Kanyakumari Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kanyakumari Temple, Vivekananda Rock Memorial, and enjoy the famous sunset at the seashore. Overnight stay at Kanyakumari.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Kanyakumari → Kovalam",
            distance: "90 km",
            description:
              "Proceed to Kovalam. Visit Padmanabhaswamy Temple and Kovalam Beach. Overnight stay at Kovalam.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Kovalam → Alleppey",
            distance: "160 km",
            description:
              "Drive to Alleppey. Optional backwater boat cruise in the afternoon at own cost. Overnight stay at Alleppey.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Alleppey → Thekkady",
            distance: "140 km",
            description:
              "Travel to Thekkady, famous for spice plantations and wildlife. Overnight stay at Thekkady.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Thekkady Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Periyar Lake, Periyar National Park, and Kadathanadan Kalari Centre (optional, own cost). Overnight stay at Thekkady.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Thekkady → Munnar",
            distance: "95 km",
            description:
              "Proceed to Munnar through beautiful hill roads and tea plantations. Overnight stay at Munnar.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Munnar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Rajamalai (Eravikulam area), Mattupetty Dam, Spice Garden, coffee plantation, and surrounding viewpoints. Overnight stay at Munnar.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Munnar → Kochi (Ernakulam)",
            distance: "130 km",
            description:
              "Travel to Kochi / Ernakulam and check in to hotel. Overnight stay at Kochi.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Kochi Sightseeing & Departure",
            distance: "Local sightseeing + train",
            description:
              "After breakfast visit Chinese Fishing Nets and Portuguese Church (boat ride optional, own cost). In the evening transfer to Ernakulam Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey back to Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Kerala and Kanyakumari.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Up & down train fare (Sleeper Class)",
      "Train meals (Lunch & Dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "Transportation (AC)",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permits",
      "Backwater boat ride",
      "Periyar boating charges",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/kerala-kanyakumari-tour",
  },
  {
    id: 25,

    category: "domestic",

    slug: "gujarat-tour",

    title: "Gujarat",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.0,

    location: "Ahmedabad • Bhuj • Dwarka • Gir • Diu • Somnath • Veraval",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Temple & Heritage Tour" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Explore the rich cultural heritage and spiritual wonders of Gujarat with visits to Ahmedabad, Bhuj, Dwarka, Gir, Diu, and Somnath. Experience the White Rann of Kutch, ancient temples, wildlife, beaches, and historic monuments on this memorable western India journey.",

    packages: {
      package1: {
        duration: "12 Nights / 15 Days",
        price: 31500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Ahmedabad",
            distance: "Train journey",
            description:
              "Board train from Shalimar Railway Station for Ahmedabad. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description: "Full day train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Arrival at Ahmedabad",
            distance: "Railway station transfer",
            description:
              "Arrive at Ahmedabad Railway Station and transfer to hotel. Overnight stay at Ahmedabad.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Lothal Excursion & Ahmedabad Sightseeing",
            distance: "Local excursion",
            description:
              "Visit Lothal, the rediscovered Harappan site, followed by local sightseeing in Ahmedabad. Overnight stay at Ahmedabad.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Ahmedabad → Bhuj",
            distance: "330 km",
            description:
              "After breakfast proceed to Bhuj. Overnight stay at Bhuj.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Rann of Kutch Excursion",
            distance: "Local excursion",
            description:
              "Visit the famous White Rann of Kutch and return to Bhuj. Overnight stay at Bhuj.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Bhuj → Dwarka",
            distance: "450 km",
            description:
              "Proceed to the sacred city of Dwarka. Overnight stay at Dwarka.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Dwarka Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Bet Dwarka, Nageshwar Temple, and Dwarkadhish Temple. Overnight stay at Dwarka.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Dwarka → Gir",
            distance: "240 km",
            description:
              "Proceed to Gir National Park region. Overnight stay at Gir.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Gir Safari → Diu",
            distance: "100 km",
            description:
              "Optional morning Gir Forest safari (own cost). Later transfer to Diu. Overnight stay at Diu.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Diu Sightseeing → Somnath",
            distance: "90 km",
            description:
              "Visit Nagoa Beach, Diu Fort, and historic churches before proceeding to Somnath / Veraval. Overnight stay at Somnath / Veraval.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Somnath Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Somnath Temple, Prabhas Patan, and Gangeshwar Mahadev. Overnight stay at Somnath / Veraval.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Veraval → Ahmedabad → Kolkata",
            distance: "Train journey",
            description:
              "Take train from Veraval to Ahmedabad and board onward train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey back to Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 15,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar / Howrah Railway Station with sweet memories of Gujarat.",
            images: [null, null],
          },
        ],
      },

      package2: {
        duration: "12 Nights / 15 Days",
        price: 31500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Ahmedabad",
            distance: "Train journey",
            description:
              "Board train from Shalimar Railway Station for Ahmedabad. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description: "Full day train journey. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Arrival at Ahmedabad",
            distance: "Railway station transfer",
            description:
              "Arrive at Ahmedabad Railway Station and transfer to hotel. Overnight stay at Ahmedabad.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Statue of Unity Excursion",
            distance: "Local excursion",
            description:
              "Visit the world-famous Statue of Unity and return to Ahmedabad. Overnight stay at Ahmedabad.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Ahmedabad → Bhuj",
            distance: "330 km",
            description: "Proceed to Bhuj. Overnight stay at Bhuj.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Rann of Kutch Excursion",
            distance: "Local excursion",
            description:
              "Visit the White Rann of Kutch and return to Bhuj. Overnight stay at Bhuj.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Bhuj → Dwarka",
            distance: "450 km",
            description: "Proceed to Dwarka. Overnight stay at Dwarka.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Dwarka Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Bet Dwarka, Nageshwar Temple, and Dwarkadhish Temple. Overnight stay at Dwarka.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Dwarka → Gir",
            distance: "240 km",
            description:
              "Proceed to Gir National Park region. Overnight stay at Gir.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Gir Safari → Diu",
            distance: "100 km",
            description:
              "Optional morning Gir Forest safari (own cost). Later transfer to Diu. Overnight stay at Diu.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Diu Sightseeing → Somnath",
            distance: "90 km",
            description:
              "Visit Nagoa Beach, Diu Fort, and churches before proceeding to Somnath / Veraval. Overnight stay at Somnath / Veraval.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Somnath Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Somnath Temple, Prabhas Patan, and Gangeshwar Mahadev. Overnight stay at Somnath / Veraval.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Veraval → Ahmedabad → Kolkata",
            distance: "Train journey",
            description:
              "Take train from Veraval to Ahmedabad and board onward train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey back to Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 15,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar / Howrah Railway Station with sweet memories of Gujarat.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Train ticket (Sleeper Class)",
      "Train food (Lunch & Dinner)",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "AC transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
    ],

    excluded: [
      "Flight ticket",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Forest permits",
      "Any ride",
      "Personal activities",
      "Any safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/gujarat-tour",
  },

  // international
  {
    id: 100,

    category: "international",

    slug: "nepal-tour",

    title: "Nepal",

    image: "/images/nepal/nepal_banner.webp",

    gallery: ["/images/nepal/Day3.webp",
      "/images/nepal/Day4.webp",
      "/images/nepal/Day5.webp",
      "/images/nepal/Day6.webp",
      "/images/nepal/Day8.webp",
      "/images/nepal/Day10.webp",
      "/images/nepal/Day31.webp",
      "/images/nepal/Day32.webp",
      "/images/nepal/Day51.webp",
      "/images/nepal/Day81.webp",
      "/images/nepal/Day82.webp",
      "/images/nepal/Day83.webp"],

    perPerson: true,

    rating: 9.2,

    location: "Kathmandu • Pokhara • Muktinath • Chitwan • Raxaul",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Temple & Nature Tour" },
      { id: 6, icon: Plane, label: "Train Included" },
    ],

    overview:
      "Experience the spiritual, cultural, and scenic beauty of Nepal with Kathmandu, Pokhara, Muktinath, and Chitwan. Explore ancient temples, Himalayan valleys, lakes, waterfalls, monasteries, and wildlife landscapes in one unforgettable journey.",

    packages: {
      package1: {
        duration: "09 Nights / 10 Days",
        price: 26500,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Raxaul",
            distance: "Train journey",
            description:
              "Board train (13021) from Howrah Railway Station for Raxaul. Overnight stay in train.",
            images: [null, null],
          },

          {
            day: 2,
            title: "Raxaul → Kathmandu",
            distance: "Approx. 140 km",
            description:
              "Arrive at Raxaul Railway Station and transfer to Kathmandu. Proceed towards Kathmandu and check in at the hotel. Overnight stay at Kathmandu.",
            images: [null, null],
          },

          {
            day: 3,
            title: "Kathmandu Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kathmandu Durbar Square, a historic royal plaza featuring ancient palaces, courtyards, and temples. Visit Boudhanath Stupa, one of the largest spherical stupas and an important center of Tibetan Buddhism. Also visit Pashupatinath Temple, one of the most important Hindu temples in Kathmandu dedicated to Lord Shiva. Overnight stay at Kathmandu.",
            images: [
              "/images/nepal/Day3.webp",
              "/images/nepal/Day31.webp",
              "/images/nepal/Day32.webp",
            ],
          },

          {
            day: 4,
            title: "Sightseeing Nagarkot",
            distance: "Local excursion",
            description:
              "Visit Nagarkot, a scenic hill station overlooking the Kathmandu Valley. Nagarkot historically served as a strategic military watchtower and later developed into a royal summer retreat and popular tourism destination. Return to Kathmandu. Overnight stay at Kathmandu.",
            images: [
              "/images/nepal/Day4.webp",
            ],
          },

          {
            day: 5,
            title: "Kathmandu → Pokhara",
            distance: "Approx. 200 km",
            description:
              "Move to Pokhara via Manakamana. En route, enjoy the scenic Manakamana Cable Car ride, offering panoramic views of the green hills and Trishuli River. Visit Manakamana Temple, a sacred shrine dedicated to Goddess Bhagwati. Continue the journey to Pokhara. Overnight stay at Pokhara.",
            images: [
              "/images/nepal/Day5.webp",
              "/images/nepal/Day51.webp",
            ],
          },

          {
            day: 6,
            title: "Pokhara → Muktinath",
            distance: "Approx. 170 km",
            description:
              "Move to Muktinath through the scenic mountain roads of Nepal. Visit Muktinath Temple, an ancient sacred site situated at an altitude of approximately 3,800 meters and revered by both Hindus and Buddhists. Overnight stay at Muktinath.",
            images: [
              "/images/nepal/Day6.webp",
            ],
          },

          {
            day: 7,
            title: "Muktinath → Pokhara",
            distance: "Approx. 170 km",
            description:
              "After breakfast, return from Muktinath to Pokhara. Enjoy the scenic journey through the Himalayan landscape. Overnight stay at Pokhara.",
            images: [null, null],
          },

          {
            day: 8,
            title: "Pokhara Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "After breakfast, proceed for Pokhara local sightseeing. Visit David Falls, also known as Devi's Falls, a unique underground waterfall. Explore Gupteshwor Mahadev Cave, a sacred underground cave temple dedicated to Lord Shiva. Visit the International Mountain Museum, which documents the history of mountaineering and mountain communities. Finally, visit Tal Barahi Temple, a sacred pagoda shrine located on an island in Phewa Lake and accessible by boat. Overnight stay at Pokhara.",
            images: [
              "/images/nepal/Day8.webp",
              "/images/nepal/Day81.webp",
              "/images/nepal/Day82.webp",
              "/images/nepal/Day83.webp",
            ],
          },

          {
            day: 9,
            title: "Pokhara → Chitwan",
            distance: "Road transfer",
            description:
              "After breakfast, move to Chitwan. Enjoy the scenic road journey through the beautiful landscapes of Nepal. On arrival, check in at the hotel/resort and relax. Overnight stay at Chitwan.",
            images: [null, null],
          },

          {
            day: 10,
            title: "Jungle Safari",
            distance: "Chitwan National Park",
            description:
              "Enjoy a jungle safari in Chitwan National Park, exploring the dense Sal forests and natural surroundings of Nepal. Experience the wildlife, scenic beauty, and wilderness of the region before concluding the Nepal tour.",
            images: [
              "/images/nepal/Day10.webp",
            ],
          },
        ],
      },

      package2: {
        duration: "09 Nights / 10 Days",
        price: 24500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Raxaul",
            distance: "Train journey",
            description:
              "Board train from Howrah Railway Station for Raxaul. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Raxaul → Chitwan",
            distance: "Approx. 160 km",
            description:
              "Arrive at Raxaul and proceed to Chitwan. Overnight stay at Chitwan.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Chitwan → Pokhara",
            distance: "Approx. 150 km",
            description:
              "Early morning jungle safari, then proceed to Pokhara. Overnight stay at Pokhara.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Pokhara Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Devi’s Fall, Gupteshwar Cave & Temple, Mountaineering Museum, and Tal Barahi Temple. Overnight stay at Pokhara.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Pokhara → Kathmandu",
            distance: "Approx. 200 km",
            description:
              "Drive to Kathmandu via Manakamana (ropeway at own cost). Overnight stay at Kathmandu.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Kathmandu Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kathmandu Durbar Square, Boudhanath Stupa, Monkey Temple, Patan, and Pashupatinath Temple. Overnight stay at Kathmandu.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Nagarkot & Bhaktapur",
            distance: "Local excursion",
            description:
              "Visit Nagarkot and Bhaktapur and return to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Kathmandu → Birgunj / Raxaul",
            distance: "Approx. 140 km",
            description:
              "Drive to Birgunj / Raxaul. Overnight stay at Birgunj / Raxaul.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Raxaul → Kolkata",
            distance: "Train journey",
            description:
              "Board train from Raxaul for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Nepal.",
            images: [null, null],
          },
        ],
      },

      package3: {
        duration: "10 Nights / 11 Days",
        price: 35500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Raxaul",
            distance: "Train journey",
            description:
              "Board train (13021) from Howrah Railway Station for Raxaul. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Raxaul → Kathmandu",
            distance: "Approx. 140 km",
            description:
              "Arrive at Raxaul and transfer to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Kathmandu Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kathmandu Durbar Square, Boudhanath Stupa, Monkey Temple, Patan, and Pashupatinath Temple. Overnight stay at Kathmandu.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Nagarkot & Bhaktapur",
            distance: "Local excursion",
            description:
              "Visit Nagarkot and Bhaktapur and return to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Kathmandu → Pokhara",
            distance: "Approx. 200 km",
            description:
              "Drive to Pokhara via Manakamana (ropeway at own cost). Overnight stay at Pokhara.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Pokhara → Muktinath",
            distance: "Approx. 170 km",
            description:
              "Proceed to Muktinath and visit Muktinath Temple. Overnight stay at Muktinath.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Muktinath → Pokhara",
            distance: "Approx. 170 km",
            description:
              "Return to Pokhara after breakfast. Overnight stay at Pokhara.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Pokhara Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Devi’s Fall, Gupteshwar Cave & Temple, Mountaineering Museum, and Tal Barahi Temple. Overnight stay at Pokhara.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Pokhara → Chitwan",
            distance: "Approx. 150 km",
            description: "Proceed to Chitwan. Overnight stay at Chitwan.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Chitwan → Raxaul",
            distance: "Road transfer + train",
            description:
              "Early morning jungle safari (optional & own cost). After breakfast transfer to Raxaul Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Nepal.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Deluxe accommodation",
      "Train ticket (Sleeper / 3 AC as per package)",
      "Train food",
      "Breakfast",
      "Lunch",
      "Evening tea & snacks",
      "Dinner",
      "AC transportation",
      "Parking charges",
      "Toll tax",
      "Pick-up & drop",
      "All possible sightseeing as per itinerary",
      "Muktinath permit (Package 3)",
    ],

    excluded: [
      "Flight tickets",
      "Single supplement cost",
      "Mineral water / soft drinks / hard drinks",
      "Guide charges",
      "Porter charges",
      "Entry fees",
      "Camera charges",
      "Permits not specifically mentioned",
      "Ropeway charges at Manakamana",
      "Jungle safari charges in Chitwan (where optional)",
      "Personal activities",
      "Any ride or safari",
      "Any item not mentioned above",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/nepal-tour",
  },
  {
    id: 101,

    category: "international",

    slug: "bangkok-pattaya-phuket-tour",

    title: "Bangkok Pattaya Phuket",

    image: "/images/bangkok-pattaya-phuket/ban_banner.webp",

    gallery: ["/images/bangkok-pattaya-phuket/day1.webp",
      "/images/bangkok-pattaya-phuket/day2.webp",
      "/images/bangkok-pattaya-phuket/day3.webp",
      "/images/bangkok-pattaya-phuket/day12.webp",
      "/images/bangkok-pattaya-phuket/day13.webp",
      "/images/bangkok-pattaya-phuket/day14.webp",
      "/images/bangkok-pattaya-phuket/day15.webp",
      "/images/bangkok-pattaya-phuket/day21.webp",
      "/images/bangkok-pattaya-phuket/day31.webp",
      "/images/bangkok-pattaya-phuket/day32.webp",
      "/images/bangkok-pattaya-phuket/day33.webp",
      "/images/bangkok-pattaya-phuket/day34.webp"],

    perPerson: true,

    rating: 9.3,

    location: "Bangkok • Pattaya • Phuket • Phi Phi Island",

    facilities: [
      { id: 1, icon: Hotel, label: "4 Star Hotel Stay" },
      { id: 2, icon: Utensils, label: "Indian Meals Included" },
      { id: 3, icon: Car, label: "AC Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing Included" },
      { id: 5, icon: MapPinned, label: "Island & City Tour" },
      { id: 6, icon: Plane, label: "Flight Included" },
    ],

    overview:
      "Enjoy an exciting international holiday across Bangkok, Pattaya, and Phuket. Experience Coral Island, Safari World, Chaophraya Cruise Dinner, Phi Phi Island, temples, beaches, nightlife, and island adventures with flights, meals, accommodation, sightseeing, and tour manager included.",

    packages: {
      package1: {
        duration: "6 Nights / 7 Days",
        price: 92000,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Bangkok → Pattaya",
            distance: "Flight + road transfer",
            description:
              "Upon arrival at Suvarnabhumi Airport in Bangkok, transfer to Pattaya and proceed with sightseeing. Visit Sriracha Tiger Zoo, which operated from 1997 until its permanent closure in 2021. Enjoy a delicious Indian breakfast in Pattaya and visit the Big Buddha at Wat Phra Yai on Pratumnak Hill. In the evening, enjoy the spectacular Alcazar Cabaret Show, featuring high-energy choreography, glittering costumes, and state-of-the-art lighting. Overnight stay at Pattaya.",
            images: [
              "/images/bangkok-pattaya-phuket/day1.webp",
              "/images/bangkok-pattaya-phuket/day12.webp",
              "/images/bangkok-pattaya-phuket/day13.webp",
              "/images/bangkok-pattaya-phuket/day14.webp",
              "/images/bangkok-pattaya-phuket/day15.webp",
            ],
          },

          {
            day: 2,
            title: "Coral Island Excursion",
            distance: "Speed boat excursion",
            description:
              "After breakfast, proceed towards Coral Island (Koh Larn) by speedboat. Enjoy an exciting ride across clear blue waters and spend time on its beautiful white sandy beaches. Explore a local market in Pattaya and experience its vibrant street food, lively atmosphere, and rich Thai culture. Overnight stay at Pattaya.",
            images: [
              "/images/bangkok-pattaya-phuket/day21.webp",
            ],
          },

          {
            day: 3,
            title: "Pattaya → Bangkok",
            distance: "150 km",
            description:
              "After breakfast, check out from the Pattaya hotel and proceed towards Bangkok. En route, visit Gems Gallery, established in 1987 and known for its jewellery manufacturing and retail complex. Visit the Marble Temple, officially known as Wat Benchamabophit, built in Bangkok in 1899 during the reign of King Chulalongkorn (Rama V). Overnight stay at Bangkok.",
            images: [
              "/images/bangkok-pattaya-phuket/day31.webp",
              "/images/bangkok-pattaya-phuket/day32.webp",
              "/images/bangkok-pattaya-phuket/day33.webp",
              "/images/bangkok-pattaya-phuket/day34.webp",
            ],
          },

          {
            day: 4,
            title: "Safari World & Chaophraya Cruise",
            distance: "Local sightseeing",
            description:
              "Enjoy Safari World Bangkok, featuring an open-air drive-through safari and live entertainment shows across its two main sections. In the evening, enjoy a dinner cruise aboard the Chao Phraya Princess, with glittering nighttime views, delicious food, and soft music. Overnight stay at Bangkok.",
            images: [null, null],
          },

          {
            day: 5,
            title: "Bangkok → Phuket",
            distance: "Domestic flight",
            description:
              "Fly from Bangkok to Phuket and transfer to hotel. Overnight stay at Phuket.",
            images: [null, null],
          },

          {
            day: 6,
            title: "Phi Phi Island Tour",
            distance: "Boat excursion",
            description:
              "Full-day Phi Phi Island tour with buffet lunch. Return to hotel for overnight stay at Phuket.",
            images: [null, null],
          },

          {
            day: 7,
            title: "Phuket → Bangkok → Kolkata",
            distance: "Flight journey",
            description:
              "Visit Chalong Temple, officially known as Wat Chaiyathararam, one of the largest, most revered, and most visited Buddhist temples in Phuket, with origins dating back to around 1837. Continue to Phuket Old Town and Promthep Cape. Fly to Bangkok and board the return flight to Kolkata with wonderful memories.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "4-star accommodation",
      "Breakfast",
      "Lunch",
      "Dinner",
      "Indian buffet meals",
      "AC luxury transportation",
      "Drinking water bottle",
      "Ex-Kolkata tour manager",
      "Return international air ticket",
      "Domestic flights (Bangkok–Phuket–Bangkok)",
      "English-speaking guide",
      "Entry fees",
      "Alcazar Show",
      "Coral Island tour",
      "Safari World & Marine Park",
      "Chaophraya Princess Cruise dinner",
      "Phi Phi Island tour",
    ],

    excluded: [
      "Personal expenses",
      "Tips and porter charges",
      "Travel insurance",
      "Scuba diving or optional water sports",
      "Anything not mentioned in inclusions",
    ],

    hotelDetails: {
      Pattaya: "The Beverly Hotel Pattaya (4 Star)",
      Bangkok: "Bangkok Palace (4 Star)",
      Phuket: "The Fishermen Harbour Beach Resort (4 Star)",
    },

    departureDates: [
      "16/08/2026",
      "17/09/2026",
      "18/09/2026",
      "19/10/2026",
      "27/10/2026",
      "14/11/2026",
      "21/11/2026",
      "12/12/2026",
      "22/12/2026",
      "22/01/2027",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/bangkok-pattaya-phuket-tour",
  },
  {
    id: 102,

    category: "international",

    slug: "bangkok-pattaya-phuket-krabi-tour",

    title: "Bangkok, Pattaya, Phuket & Krabi",

    image: "/images/bangkok-pattaya-phuket-and-krabi/ban_banner3.webp",

    gallery: ["/images/bangkok-pattaya-phuket-and-krabi/day1.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day2.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day3.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day4.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day6.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day7.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day8.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day12.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day13.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day21.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day31.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day41.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day42.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day43.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day61.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day81.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day82.webp",
      "/images/bangkok-pattaya-phuket-and-krabi/day83.webp",],

    perPerson: true,

    rating: 9.2,

    location: "Bangkok • Pattaya • Phuket • Krabi",

    facilities: [
      { id: 1, icon: Hotel, label: "4 Star Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Luxury AC Transport" },
      { id: 4, icon: Camera, label: "Sightseeing Included" },
      { id: 5, icon: MapPinned, label: "Island & City Tour" },
      { id: 6, icon: Plane, label: "Flights Included" },
    ],

    overview:
      "Experience the best of Thailand with Bangkok, Pattaya, Phuket, and Krabi. Enjoy Coral Island, Phi Phi Island, Safari World, Chao Phraya Dinner Cruise, Phuket city tour, Krabi 4 Island tour, beaches, temples, nightlife, and tropical island beauty.",

    packages: {
      package1: {
        duration: "7 Nights / 8 Days",
        price: 92000,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Pattaya",
            distance: "Flight + road transfer",
            description:
              "After completing airport immigration, get picked up and transferred to Pattaya. Visit Sriracha Tiger Zoo for an exciting wildlife experience with close animal encounters and entertaining shows. Continue to Big Buddha Temple (Wat Phra Yai), offering cultural discovery and beautiful coastal views. In the evening, enjoy the Alcazar Cabaret Show, featuring dazzling costumes, vibrant music, and grand theatrical performances. Overnight stay at Pattaya.",
            images: [
              "/images/bangkok-pattaya-phuket-and-krabi/day1.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day12.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day13.webp",
            ],
          },

          {
            day: 2,
            title: "Coral Island & Pattaya Floating Market",
            distance: "Speed boat excursion",
            description:
              "Explore Coral Island, locally known as Koh Larn, a popular destination with a history rooted in traditional fishing and local communities. Enjoy the island's beautiful beaches and turquoise waters. Later, visit Pattaya Floating Market, established in 2008 to preserve and showcase traditional Thai riverside life and architecture. Overnight stay at Pattaya.",
            images: [
              "/images/bangkok-pattaya-phuket-and-krabi/day2.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day21.webp",
            ],
          },

          {
            day: 3,
            title: "Pattaya → Bangkok",
            distance: "150 km",
            description:
              "After breakfast, check out from the Pattaya hotel and proceed towards Bangkok. En route, visit Gems Gallery, established in 1987 and known for its global jewellery enterprise with operations in Bangkok, Chiang Mai, Phuket, and Pattaya. Also visit the famous Big Buddha Temple (Wat Phra Yai), located atop Pratumnak Hill in Pattaya. Overnight stay at Bangkok.",
            images: [
              "/images/bangkok-pattaya-phuket-and-krabi/day3.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day31.webp",
            ],
          },

          {
            day: 4,
            title: "Safari World & Marine Park",
            distance: "Local sightseeing",
            description:
              "After breakfast, visit Safari World and Marine Park in Bangkok. Enjoy the open-air zoo, drive past roaming lions and tigers, and watch entertaining dolphin and sea lion shows. Overnight stay at Bangkok.",
            images: [
              "/images/bangkok-pattaya-phuket-and-krabi/day4.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day41.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day42.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day43.webp",
            ],
          },

          {
            day: 5,
            title: "Bangkok → Phuket",
            distance: "Flight transfer",
            description:
              "Fly to Phuket and visit Chalong Temple (Wat Chaiyathararam), the largest and most revered Buddhist temple in Phuket. Explore the colorful, historic streets of Phuket Old Town, known for their vintage charm. Continue to Promthep Cape, a historic rocky headland at the southernmost tip of Phuket, long regarded as a sacred site and navigational landmark. Overnight stay at Phuket.",
            images: [null, null],
          },

          {
            day: 6,
            title: "Phi Phi Island Tour",
            distance: "Boat excursion",
            description:
              "After breakfast, proceed for a full-day excursion to Phi Phi Island. Enjoy its turquoise waters, dramatic limestone cliffs, and tropical scenery. Return to Phuket for an overnight stay.",
            images: [
              "/images/bangkok-pattaya-phuket-and-krabi/day6.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day61.webp",
            ],
          },

          {
            day: 7,
            title: "Phuket → Krabi",
            distance: "Approx. 160 km by road",
            description:
              "Proceed towards Krabi by road. Enjoy local sightseeing and explore vibrant markets, night bazaars, authentic southern Thai street food, and cultural attractions around Krabi Town and Ao Nang. Overnight stay at Krabi.",
            images: [null, null],
          },

          {
            day: 8,
            title: "Krabi 4 Island Tour → Kolkata",
            distance: "Island excursion + flight transfer",
            description:
              "After breakfast, proceed for the 4 Island tour in Krabi. Enjoy the beautiful islands and surrounding coastal scenery. Following the excursion, transfer to Krabi International Airport for your return flight to India.",
            images: [
              "/images/bangkok-pattaya-phuket-and-krabi/day8.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day81.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day82.webp",
              "/images/bangkok-pattaya-phuket-and-krabi/day83.webp",
            ],
          },
        ],
      },
    },

    hotels: [
      "Pattaya: The Beverly Hotel Pattaya (4 Star)",
      "Bangkok: Bangkok Palace (4 Star)",
      "Phuket: The Fisherman's Harbour Beach Resort (4 Star)",
      "Krabi: Ibis Styles Ao Nang (4 Star)",
    ],

    departureDates: ["22/12/2026"],

    included: [
      "4 Star accommodation",
      "Breakfast, lunch & dinner (Indian buffet meals)",
      "Luxury AC transportation",
      "Water bottle",
      "Tour manager from Kolkata",
      "Up & down air tickets",
      "English speaking guide",
      "Entry fees as per itinerary",
      "Airport transfers",
      "All sightseeing mentioned in itinerary",
    ],

    excluded: [
      "Personal expenses",
      "Travel insurance",
      "Tips & porter charges",
      "Additional water sports",
      "Extra meals not mentioned",
      "Anything not mentioned in inclusions",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/bangkok-pattaya-phuket-krabi-tour",
  },
  {
    id: 103,

    category: "international",

    slug: "kazakhstan-uzbekistan-tour",

    title: "Kazakhstan & Uzbekistan",

    image: "/images/kazakhstan-uzbekistan/k_banner.webp",

    gallery: ["/images/kazakhstan-uzbekistan/day2.webp",
      "/images/kazakhstan-uzbekistan/day3.webp",
      "/images/kazakhstan-uzbekistan/day4.webp",
      "/images/kazakhstan-uzbekistan/day5.webp",
      "/images/kazakhstan-uzbekistan/day6.webp",
      "/images/kazakhstan-uzbekistan/day7.webp",
      "/images/kazakhstan-uzbekistan/day8.webp",
      "/images/kazakhstan-uzbekistan/day9.webp",
      "/images/kazakhstan-uzbekistan/day21.webp",
      "/images/kazakhstan-uzbekistan/day23.webp",
      "/images/kazakhstan-uzbekistan/day24.webp",
      "/images/kazakhstan-uzbekistan/day25.webp",
      "/images/kazakhstan-uzbekistan/day26.webp",
      "/images/kazakhstan-uzbekistan/day31.webp",
      "/images/kazakhstan-uzbekistan/day32.webp",
      "/images/kazakhstan-uzbekistan/day41.webp",
      "/images/kazakhstan-uzbekistan/day42.webp",
      "/images/kazakhstan-uzbekistan/day51.webp",
      "/images/kazakhstan-uzbekistan/day52.webp",
      "/images/kazakhstan-uzbekistan/day53.webp",
      "/images/kazakhstan-uzbekistan/day54.webp",
      "/images/kazakhstan-uzbekistan/day61.webp",
      "/images/kazakhstan-uzbekistan/day62.webp",
      "/images/kazakhstan-uzbekistan/day71.webp",
      "/images/kazakhstan-uzbekistan/day72.webp",
      "/images/kazakhstan-uzbekistan/day73.webp",
      "/images/kazakhstan-uzbekistan/day74.webp",
      "/images/kazakhstan-uzbekistan/day75.webp",
      "/images/kazakhstan-uzbekistan/day81.webp",
      "/images/kazakhstan-uzbekistan/day82.webp",
      "/images/kazakhstan-uzbekistan/day83.webp",
      "/images/kazakhstan-uzbekistan/day84.webp",
      "/images/kazakhstan-uzbekistan/day91.webp",
      "/images/kazakhstan-uzbekistan/day92.webp",
    ],

    perPerson: true,

    rating: 9.3,

    location:
      "Almaty • Charyn Canyon • Kolsai Lake • Kok Tobe • Medeu • Shymbulak • Tashkent • Amirsoy • Samarkand",

    facilities: [
      { id: 1, icon: Hotel, label: "4 Star Hotel Stay" },
      { id: 2, icon: Utensils, label: "All Meals Included" },
      { id: 3, icon: Car, label: "Airport Transfers" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Mountain & Heritage Tour" },
      { id: 6, icon: Plane, label: "Flight Included" },
    ],

    overview:
      "Experience the best of Central Asia with this 10-day Kazakhstan & Uzbekistan tour covering Almaty, Charyn Canyon, Kolsai Lake, Tashkent, Amirsoy Mountains, and the historic city of Samarkand. Enjoy breathtaking mountain landscapes, Silk Route architecture, vibrant bazaars, cable car rides, and authentic cultural experiences with comfortable 4-star accommodation and all meals included.",

    packages: {
      package1: {
        duration: "9 Nights / 10 Days",
        price: 188000,

        itinerary: [
          {
            day: 1,
            title: "Kolkata → Almaty",
            distance: "Flight journey",
            description:
              "Arrive at Almaty International Airport, transfer to hotel, check in, and relax. Overnight stay at Almaty.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Almaty City Tour",
            distance: "Local sightseeing",
            description:
              "Visit Golden Square, a historic downtown neighborhood developed between 1930 and 1970 for Soviet elites, poets, politicians, and artists. Explore the 28 Panfilov Guardsmen Park, an 18-hectare green space dating back to the 1870s, and see the Eternal Flame, lit on May 8, 1975, to commemorate the 30th anniversary of the Soviet victory in World War II. Visit Ascension Cathedral, also known as Zenkov Cathedral, a 56-meter-tall Russian Orthodox church in Panfilov Park. Continue to Green Bazaar, one of Central Asia's oldest public markets with trading roots dating back to the 19th century, and stroll along Arbat Shopping Street, also known as Zhibek Zholy Street, the city's oldest trading route turned pedestrian zone. Overnight stay at Almaty.",
            images: [
              "/images/kazakhstan-uzbekistan/day2.webp",
              "/images/kazakhstan-uzbekistan/day21.webp",
              "/images/kazakhstan-uzbekistan/day23.webp",
              "/images/kazakhstan-uzbekistan/day24.webp",
              "/images/kazakhstan-uzbekistan/day25.webp",
              "/images/kazakhstan-uzbekistan/day26.webp",
            ],
          },
          {
            day: 3,
            title: "Charyn Canyon & Kolsai Lake",
            distance: "Excursion",
            description:
              "Explore Charyn Canyon, a natural geological wonder dating back approximately 12 million years and located about 200 km east of Almaty. Discover the Valley of Castles, a spectacular natural rock formation estimated to be 12–14 million years old. Continue to Kolsai Lake, a beautiful system of three alpine lakes in the Northern Tian Shan mountains within Kolsai Lakes National Park. Enjoy the stunning mountain scenery. Overnight stay at Almaty.",
            images: [
              "/images/kazakhstan-uzbekistan/day3.webp",
              "/images/kazakhstan-uzbekistan/day31.webp",
              "/images/kazakhstan-uzbekistan/day32.webp",
            ],
          },
          {
            day: 4,
            title: "Kok Tobe • Medeu • Shymbulak",
            distance: "Local sightseeing",
            description:
              "Enjoy a scenic cable car journey to Kok Tobe Hill, offering breathtaking views of Almaty and the surrounding mountains. Visit Medeu Ice Skating Rink, the world's highest Olympic-sized outdoor ice skating rink, situated at 1,691 meters above sea level. Continue to Shymbulak Mountain Resort for snow-capped mountain views, cable car adventures, and a memorable alpine experience. Overnight stay at Almaty.",
            images: [
              "/images/kazakhstan-uzbekistan/day4.webp",
              "/images/kazakhstan-uzbekistan/day41.webp",
              "/images/kazakhstan-uzbekistan/day42.webp",
            ],
          },
          {
            day: 5,
            title: "Almaty → Tashkent",
            distance: "Flight journey",
            description:
              "Fly to Tashkent and visit Magic City Park in the evening. Officially opened on June 1, 2021, to coincide with International Children's Day, the park offers an enjoyable leisure experience. Overnight stay at Tashkent.",
            images: [
              "/images/kazakhstan-uzbekistan/day5.webp",
              "/images/kazakhstan-uzbekistan/day51.webp",
              "/images/kazakhstan-uzbekistan/day52.webp",
              "/images/kazakhstan-uzbekistan/day53.webp",
              "/images/kazakhstan-uzbekistan/day54.webp",
            ],
          },
          {
            day: 6,
            title: "Amirsoy Mountain Tour",
            distance: "Excursion",
            description:
              "Visit Amirsoy Mountain Resort, which opened on December 21, 2019, and is the largest and most modern ski resort in Uzbekistan and Central Asia. Explore the Chimgan Mountains, known for their history as an ancient green valley, a tsarist-era retreat, and a Soviet-era mountaineering and ski destination. Continue to Lake Charvak, an artificial reservoir created in 1970 through the construction of a 168-meter-high rock-fill dam across the Chirchiq River. Enjoy panoramic mountain views. Overnight stay at Tashkent.",
            images: [
              "/images/kazakhstan-uzbekistan/day6.webp",
              "/images/kazakhstan-uzbekistan/day61.webp",
              "/images/kazakhstan-uzbekistan/day62.webp",
            ],
          },
          {
            day: 7,
            title: "Samarkand Day Excursion",
            distance: "Bullet train excursion",
            description:
              "Travel by bullet train to Samarkand and visit Gur-e-Amir Mausoleum, the final resting place of the 14th-century conqueror Timur, also known as Tamerlane. Explore Registan Square, the historic heart of the Timurid Empire and an important Silk Road hub. Visit Ulug Beg Madrasa, built between 1417 and 1421 by the Timurid ruler and astronomer Ulug Beg. Discover Siab Bazaar, famous for Samarkand non (traditional flatbread), fresh produce, dried fruits, and aromatic spices. Also visit Hazrat Khizr Mosque, an ancient Islamic landmark dating back to the 8th century. Other planned stops include Sher-Dor Madrasa, Tilla-Kari Madrasa, Bibi Khanum Mosque, Konigil Village, and Shahi Zinda (outside). Return to Tashkent for overnight stay.",
            images: [
              "/images/kazakhstan-uzbekistan/day7.webp",
              "/images/kazakhstan-uzbekistan/day71.webp",
              "/images/kazakhstan-uzbekistan/day72.webp",
              "/images/kazakhstan-uzbekistan/day73.webp",
              "/images/kazakhstan-uzbekistan/day74.webp",
              "/images/kazakhstan-uzbekistan/day75.webp",
            ],
          },
          {
            day: 8,
            title: "Tashkent City Tour",
            distance: "Local sightseeing",
            description:
              "Visit the Hazrati Imam Complex, a historic religious and architectural ensemble dating from the 10th to the 21st centuries. Explore Barak-Khan Madrasa, a 16th-century architectural monument located on Hast-Imam Square. Visit the Minor Mosque and Monument of Courage. Experience the Tashkent Metro, which opened on November 6, 1977, as the first underground rapid transit system in Central Asia. See the Tashkent TV Tower from outside and visit the State Museum of Memory of Victims of Repression, dedicated to honoring those who suffered under tsarist colonial rule and Soviet totalitarian regimes. Overnight stay at Tashkent.",
            images: [
              "/images/kazakhstan-uzbekistan/day8.webp",
              "/images/kazakhstan-uzbekistan/day81.webp",
              "/images/kazakhstan-uzbekistan/day82.webp",
              "/images/kazakhstan-uzbekistan/day83.webp",
              "/images/kazakhstan-uzbekistan/day84.webp",
            ],
          },
          {
            day: 9,
            title: "Tashkent Shopping Tour",
            distance: "Local sightseeing",
            description:
              "Explore Chorsu Bazaar, famous for its vibrant central food dome, traditional Uzbek flatbreads, and local delicacies such as shashlik and kazy. Continue to Tashkent City Mall, Uzbekistan's largest and most luxurious shopping center, featuring more than 250 global fashion brands, luxury retail, and international dining options. Finish your tour at Tashkent City Park, a modern 18-hectare urban oasis featuring musical fountains, green spaces, and contemporary architecture. Overnight stay at Tashkent.",
            images: [
              "/images/kazakhstan-uzbekistan/day9.webp",
              "/images/kazakhstan-uzbekistan/day91.webp",
              "/images/kazakhstan-uzbekistan/day92.webp",
            ],
          },
          {
            day: 10,
            title: "Departure from Tashkent",
            distance: "Airport transfer",
            description:
              "After breakfast transfer to the airport for your return flight with unforgettable memories of Kazakhstan and Uzbekistan.",
            images: [
              null, null
            ],
          },
        ],
      },
    },

    included: [
      "4 Nights accommodation in Almaty (4 Star)",
      "5 Nights accommodation in Tashkent (4 Star)",
      "All meals throughout the tour",
      "English-speaking guide",
      "Airport transfers",
      "Luxury coach transportation",
      "Kok Tobe cable car",
      "Shymbulak cable car",
      "Charyn Canyon tour",
      "Kolsai Lake tour",
      "Amirsoy chair lift",
      "Konigil Village entry",
      "Registan entrance ticket",
      "Samarkand bullet train ticket",
      "Uzbekistan visa",
      "Tips",
      "2 bottles of water per person per day",
    ],

    excluded: [
      "Personal expenses",
      "Travel insurance",
      "Additional snacks and beverages",
      "Optional activities not mentioned in the itinerary",
      "Any item not specifically mentioned in the inclusions",
    ],

    departureDates: [],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/kazakhstan-uzbekistan-tour",
  },
  {
    id: 104,

    category: "international",

    slug: "vietnam-tour",

    title: "Vietnam",

    image: "/images/vietnam/day61.webp",

    gallery: ["/images/vietnam/day1.webp",
      "/images/vietnam/day2.webp",
      "/images/vietnam/day3.webp",
      "/images/vietnam/day4.webp",
      "/images/vietnam/day5.webp",
      "/images/vietnam/day6.webp",
      "/images/vietnam/day6e4.webp",
      "/images/vietnam/day7.webp",
      "/images/vietnam/day8.webp",
      "/images/vietnam/day21.webp",
      "/images/vietnam/day22.webp",
      "/images/vietnam/day23.webp",
      "/images/vietnam/day24.webp",
      "/images/vietnam/day25.webp",
      "/images/vietnam/day26.webp",
      "/images/vietnam/day27.webp",
      "/images/vietnam/day28.webp",
      "/images/vietnam/day31.webp",
      "/images/vietnam/day41.webp",
      "/images/vietnam/day51.webp",
      "/images/vietnam/day52.webp",
      "/images/vietnam/day53.webp",
      "/images/vietnam/day61.webp",
      "/images/vietnam/day62.webp",
      "/images/vietnam/day63.webp",
      "/images/vietnam/day65.webp",
      "/images/vietnam/day81.webp",],

    perPerson: true,

    rating: 9.4,

    location:
      "Hanoi • Ninh Binh • Halong Bay • Danang • Hoi An • Ba Na Hills • Ho Chi Minh City • Mekong Delta",

    facilities: [
      { id: 1, icon: Hotel, label: "4★ Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "AC Coach Transfers" },
      { id: 4, icon: Camera, label: "Sightseeing Included" },
      { id: 5, icon: MapPinned, label: "Heritage & Island Tour" },
      { id: 6, icon: Plane, label: "Flights & Visa Included" },
    ],

    overview:
      "Experience the best of Vietnam with this 8-day journey covering Hanoi, Halong Bay cruise, Danang, Hoi An, Ba Na Hills, Ho Chi Minh City, Cu Chi Tunnels, and the Mekong Delta. Enjoy cultural landmarks, scenic mountains, island landscapes, historic sites, local markets, and Vietnamese hospitality with guided sightseeing throughout the tour.",

    packages: {
      package1: {
        duration: "7 Nights / 8 Days",
        price: 126000,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Hanoi",
            distance: "Flight journey",
            description:
              "Depart from Netaji Subhash Chandra Bose International Airport, Kolkata, and arrive at Hanoi Airport. Transfer to the hotel, complete check-in, and relax after your journey. Overnight stay in Hanoi.",
            images: ["/images/vietnam/day1.webp"],
          },
          {
            day: 2,
            title: "Ninh Binh • Hoa Lu • Trang An",
            distance: "Approx. 120 km excursion",
            description:
              "Explore Hoa Lu Ancient Capital, which served as Vietnam's political, economic, and cultural center for 42 years during the 10th and 11th centuries. Visit the sacred Dinh and Le Temples, dedicated to Vietnam's early independent imperial founders. Continue to the Trang An Scenic Landscape Complex, a UNESCO World Heritage Site recognized in 2014. Enjoy a scenic boat ride through spectacular limestone karsts and water-tunnel caves, including Nau Ruou Cave, also known as the Cooking Wine Cave. Return to Hanoi for an overnight stay.",
            images: [
              "/images/vietnam/day2.webp",
              "/images/vietnam/day21.webp",
              "/images/vietnam/day22.webp",
              "/images/vietnam/day23.webp",
              "/images/vietnam/day24.webp",
              "/images/vietnam/day25.webp",
              "/images/vietnam/day26.webp",
              "/images/vietnam/day27.webp",
              "/images/vietnam/day28.webp",
            ],
          },
          {
            day: 3,
            title: "Hanoi → Halong Bay Cruise",
            distance: "Road transfer to Halong Bay",
            description:
              "Travel from Hanoi to the magnificent Halong Bay, renowned for its geological history spanning more than 500 million years and its rich cultural heritage. Board your cruise and sail through emerald waters surrounded by spectacular limestone karsts formed through ancient marine deposition, tectonic uplift, and tropical erosion. Explore limestone caves and enjoy the breathtaking natural scenery. Dinner and overnight stay aboard the cruise.",
            images: [
              "/images/vietnam/day3.webp",
              "/images/vietnam/day31.webp",
            ],
          },
          {
            day: 4,
            title: "Halong Bay → Hanoi City Tour",
            distance: "Cruise + road transfer",
            description:
              "Enjoy the morning scenery of Halong Bay before returning to Hanoi. Visit the Hoa Lo Prison Museum, originally constructed by French colonial authorities and known as Maison Centrale. Discover its history through Vietnam's periods of colonial rule and wartime conflict. Continue to Hanoi's Old Quarter, whose origins date back to 1010, when Emperor Ly Thai To moved the capital to Thang Long and craft guilds developed outside the royal citadel. Explore the historic streets before returning to your hotel for an overnight stay in Hanoi.",
            images: [
              "/images/vietnam/day4.webp",
              "/images/vietnam/day41.webp",
            ],
          },
          {
            day: 5,
            title: "Hanoi → Danang → Hoi An",
            distance: "Flight + local transfer",
            description:
              "Fly from Hanoi to Danang and transfer to Hoi An, a historic trading port famous for its preserved architecture and cultural heritage. Visit the Phuc Kien Assembly Hall, established around 1697 by Chinese immigrants from Fujian Province. Explore the Japanese Covered Bridge, a historic landmark built by Japanese merchants around the late 16th or early 17th century, along with traditional houses and local art galleries reflecting centuries of craftsmanship. In the evening, enjoy a traditional wooden sampan boat ride on the Hoai River and release a glowing flower lantern, a beloved local tradition influenced by Buddhist spiritual practices and folklore. Overnight stay in the Hoi An/Danang area.",
            images: [
              "/images/vietnam/day5.webp",
              "/images/vietnam/day51.webp",
              "/images/vietnam/day52.webp",
              "/images/vietnam/day53.webp",
            ],
          },
          {
            day: 6,
            title: "Ba Na Hills & Golden Bridge",
            distance: "Excursion from Danang",
            description:
              "Visit Sun World Ba Na Hills, famous for its spectacular cable cars, cool mountain climate, French Village, and iconic Golden Bridge, which opened in June 2018. Explore the resort's French-style architectural attractions, inspired by colonial-era architecture found in Vietnam. Visit the Golden Bridge, admire the mountain scenery and gardens, and enjoy Fantasy Park, a large indoor amusement park spanning approximately 21,000 square metres across three underground levels. Explore the attractions and enjoy leisure time before returning to Danang for an overnight stay.",
            images: [
              "/images/vietnam/day6.webp",
              "/images/vietnam/day6e4.webp",
              "/images/vietnam/day61.webp",
              "/images/vietnam/day62.webp",
              "/images/vietnam/day63.webp",
              "/images/vietnam/day65.webp",
            ],
          },
          {
            day: 7,
            title: "Danang → Ho Chi Minh City • Cu Chi Tunnels",
            distance: "Flight + excursion",
            description:
              "Fly from Danang to Ho Chi Minh City and travel to the historic Cu Chi Tunnels. Discover the underground network used by Vietnamese soldiers during wartime as shelter and for movement and operations. Learn about the tunnels' role in Vietnam's wartime history before returning to Ho Chi Minh City for an overnight stay.",
            images: ["/images/vietnam/day7.webp"],
          },
          {
            day: 8,
            title: "Mekong Delta • Ho Chi Minh City • Departure",
            distance: "Day excursion + airport transfer",
            description:
              "Travel to My Tho and explore the scenic Mekong Delta. Enjoy a peaceful boat ride through waterways and visit Unicorn Island (Thoi Son Islet), where you can experience narrow village canals, taste fresh tropical fruits, listen to traditional folk music, and learn about local honey tea and coconut candy production. Depending on the final sightseeing arrangements, visit Tortoise Islet (Con Quy), one of the Delta's well-known islets. Return toward Ho Chi Minh City for the planned city sightseeing and shopping, then transfer to the airport for your return flight with wonderful memories of Vietnam.",
            images: [
              "/images/vietnam/day8.webp",
              "/images/vietnam/day81.webp",
            ],
          },
        ],
      },
    },

    included: [
      "4★ hotel accommodation on twin/double sharing basis",
      "1 night Halong Bay cruise accommodation",
      "Airfare ex-Kolkata",
      "Vietnam visa",
      "Breakfast, lunch & dinner as per itinerary",
      "AC coach transportation",
      "English-speaking guide",
      "Tour manager from Kolkata",
      "Halong Bay cruise with meals",
      "Trang An boat ride",
      "Hoi An lantern boat ride",
      "Ba Na Hills cable car",
      "Cu Chi Tunnels excursion",
      "Mekong Delta boat excursion",
      "Entry fees as mentioned in itinerary",
      "2 bottles of water per person per day",
    ],

    excluded: [
      "Personal expenses",
      "Travel insurance",
      "Laundry, telephone & minibar charges",
      "Optional activities not mentioned",
      "Additional meals other than specified",
      "Early check-in / late check-out charges",
      "Expenses due to weather, flight delays, strikes, natural calamities, or force majeure",
      "Any item not mentioned under inclusions",
    ],

    hotels: [
      "Hanoi: Muong Thanh Grand Hanoi Centre Hotel / La Casa Hanoi Hotel",
      "Halong Bay: Dragon Bay Cruise",
      "Danang: Bluesun Hotel Danang",
      "Ho Chi Minh City: Ramana Hotel Saigon",
    ],

    departureDates: [],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/vietnam-tour",
  },
  {
    id: 105,

    category: "international",

    slug: "vietnam-phu-quoc-tour",

    title: "Vietnam Phu Quoc",

    image: "/images/vietnam-phu-quoc/day61.webp",

    gallery: [
      "/images/vietnam-phu-quoc/day1.webp",
      "/images/vietnam-phu-quoc/day2.webp",
      "/images/vietnam-phu-quoc/day3.webp",
      "/images/vietnam-phu-quoc/day4.webp",
      "/images/vietnam-phu-quoc/day5.webp",
      "/images/vietnam-phu-quoc/day6.webp",
      "/images/vietnam-phu-quoc/day7.webp",
      "/images/vietnam-phu-quoc/day21.webp",
      "/images/vietnam-phu-quoc/day22.webp",
      "/images/vietnam-phu-quoc/day23.webp",
      "/images/vietnam-phu-quoc/day31.webp",
      "/images/vietnam-phu-quoc/day41.webp",
      "/images/vietnam-phu-quoc/day42.webp",
      "/images/vietnam-phu-quoc/day43.webp",
      "/images/vietnam-phu-quoc/day44.webp",
      "/images/vietnam-phu-quoc/day45.webp",
      "/images/vietnam-phu-quoc/day51.webp",
      "/images/vietnam-phu-quoc/day52.webp",
      "/images/vietnam-phu-quoc/day53.webp",
      "/images/vietnam-phu-quoc/day54.webp",
      "/images/vietnam-phu-quoc/day61.webp",
      "/images/vietnam-phu-quoc/day71.webp",
      "/images/vietnam-phu-quoc/day72.webp",
      "/images/vietnam-phu-quoc/day73.webp",
      "/images/vietnam-phu-quoc/day74.webp",
      "/images/vietnam-phu-quoc/day75.webp",
    ],

    perPerson: true,

    rating: 9.5,

    location:
      "Hanoi • Ninh Binh • Halong Bay • Da Nang • Hoi An • Ba Na Hills • Phu Quoc",

    facilities: [
      { id: 1, icon: Hotel, label: "4★ Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "AC Transfers" },
      { id: 4, icon: Camera, label: "Sightseeing Included" },
      { id: 5, icon: MapPinned, label: "Island & Heritage Tour" },
      { id: 6, icon: Plane, label: "Flights & Visa Included" },
    ],

    overview:
      "Explore the cultural and natural wonders of Vietnam on this 8-day journey covering Hanoi, Ninh Binh, Halong Bay, Da Nang, Hoi An, Ba Na Hills, and the tropical paradise of Phu Quoc. Enjoy scenic cruises, UNESCO heritage sites, mountain resorts, lantern streets, island hopping, cable car rides, and beachside relaxation with guided sightseeing throughout the tour.",

    packages: {
      package1: {
        duration: "7 Nights / 8 Days",
        price: 130000,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Hanoi",
            distance: "Flight journey",
            description:
              "Depart from Netaji Subhash Chandra Bose International Airport, Kolkata, and arrive at Noi Bai International Airport in Hanoi. Transfer to your hotel, complete check-in, and relax after your journey. Overnight stay in Hanoi.",
            images: ["/images/vietnam-phu-quoc/day1.webp"],
          },
          {
            day: 2,
            title: "Hanoi → Ninh Binh → Hanoi",
            distance: "Approx. 120 km excursion",
            description:
              "Visit Hoa Lu Ancient Capital, which served as Vietnam's political and economic capital from 968 to 1010 AD. Explore the Temple of King Dinh Tien Hoang, dedicated to the founder of the Dinh Dynasty, and the Temple of King Le Dai Hanh, honoring the founder of the Early Le Dynasty. Continue to the Trang An Scenic Landscape Complex and enjoy a peaceful boat ride through emerald waters, towering limestone karsts, and spectacular natural caves. Return to Hanoi for an overnight stay.",
            images: [
              "/images/vietnam-phu-quoc/day2.webp",
              "/images/vietnam-phu-quoc/day21.webp",
              "/images/vietnam-phu-quoc/day22.webp",
              "/images/vietnam-phu-quoc/day23.webp",
            ],
          },
          {
            day: 3,
            title: "Hanoi → Halong Bay Day Cruise → Hanoi",
            distance: "Day excursion from Hanoi",
            description:
              "Travel from Hanoi to the spectacular Halong Bay, renowned for its emerald waters and limestone karsts shaped by millions of years of geological activity. Enjoy a scenic day cruise through the bay, admire the dramatic rock formations, and explore the natural beauty of this famous coastal destination. Enjoy the cruise experience and buffet lunch before returning to Hanoi for an overnight stay.",
            images: [
              "/images/vietnam-phu-quoc/day3.webp",
              "/images/vietnam-phu-quoc/day31.webp",
            ],
          },
          {
            day: 4,
            title: "Hanoi → Da Nang → Hoi An",
            distance: "Flight + local transfer",
            description:
              "Fly from Hanoi to Da Nang and continue to Hoi An Ancient Town, a historic trading port celebrated for its preserved architecture and cultural heritage. Visit the Japanese Covered Bridge, a historic landmark built by Japanese merchants around the late 16th century. Explore the Pottery Museum, Tam Ky Ancient House, Chua Ong Pagoda, and the lively local market. Discover traditional architecture, local craftsmanship, and charming lantern-lit streets before returning to Da Nang for an overnight stay.",
            images: [
              "/images/vietnam-phu-quoc/day4.webp",
              "/images/vietnam-phu-quoc/day41.webp",
              "/images/vietnam-phu-quoc/day42.webp",
              "/images/vietnam-phu-quoc/day43.webp",
              "/images/vietnam-phu-quoc/day44.webp",
              "/images/vietnam-phu-quoc/day45.webp",
            ],
          },
          {
            day: 5,
            title: "Ba Na Hills & Golden Bridge",
            distance: "Excursion from Da Nang",
            description:
              "Visit Sun World Ba Na Hills and enjoy a spectacular cable car journey over lush forests and mist-covered mountains. Walk across the famous Golden Bridge, a 150-meter pedestrian walkway supported by enormous sculpted hands. Explore the French Village, admire the mountain viewpoints and landscaped gardens, and enjoy entertainment at Fantasy Park, one of Vietnam's largest indoor amusement parks. Return to Da Nang for an overnight stay.",
            images: [
              "/images/vietnam-phu-quoc/day5.webp",
              "/images/vietnam-phu-quoc/day51.webp",
              "/images/vietnam-phu-quoc/day52.webp",
              "/images/vietnam-phu-quoc/day53.webp",
              "/images/vietnam-phu-quoc/day54.webp",
            ],
          },
          {
            day: 6,
            title: "Da Nang → Phu Quoc",
            distance: "Flight + local transfer",
            description:
              "Fly from Da Nang to Phu Quoc Island and transfer to your hotel for check-in. Visit Vinpearl Safari, Vietnam's first and largest open-zoo wildlife conservation park, which officially opened on December 24, 2015. Later, enjoy free time or optionally visit Grand World Phu Quoc, an expansive entertainment and shopping complex known as the 'Sleepless City.' Overnight stay in Phu Quoc.",
            images: [
              "/images/vietnam-phu-quoc/day6.webp",
              "/images/vietnam-phu-quoc/day61.webp",
            ],
          },
          {
            day: 7,
            title: "Phu Quoc Island Tour – Hon Thom Island",
            distance: "Island hopping excursion",
            description:
              "Discover the beautiful islands of the An Thoi Archipelago, beginning with a speedboat excursion to Mong Tay Island, known for its pristine beaches and turquoise waters. Continue to Gam Ghi Island, celebrated for its natural coastal scenery and marine environment, followed by May Rut Island, a popular island destination with beautiful beaches and a relaxed tropical atmosphere. Visit Hon Thom Island via the spectacular sea-crossing cable car, measuring approximately 7,899.9 meters. Enjoy Aquatopia Water Park's exciting slides and water attractions, along with available theme park activities, before returning to your hotel for an overnight stay.",
            images: [
              "/images/vietnam-phu-quoc/day7.webp",
              "/images/vietnam-phu-quoc/day71.webp",
              "/images/vietnam-phu-quoc/day72.webp",
              "/images/vietnam-phu-quoc/day73.webp",
              "/images/vietnam-phu-quoc/day74.webp",
              "/images/vietnam-phu-quoc/day75.webp",
            ],
          },
          {
            day: 8,
            title: "Phu Quoc Departure",
            distance: "Airport transfer",
            description:
              "After breakfast, enjoy free time until your scheduled transfer to Phu Quoc Airport for your onward flight. Depart with wonderful memories of Vietnam's historic cities, spectacular limestone landscapes, cultural attractions, and beautiful tropical islands.",
            images: [],
          },
        ],
      },
    },

    included: [
      "International airfare from Kolkata",
      "Domestic flights within Vietnam",
      "Vietnam visa",
      "7 nights accommodation in 4★ hotels",
      "Daily breakfast",
      "Daily lunch",
      "Daily dinner",
      "Private airport transfers",
      "Private air-conditioned vehicle throughout the tour",
      "English-speaking guide",
      "All sightseeing as per itinerary",
      "Halong Bay day cruise",
      "Trang An boat ride",
      "Hoi An lantern tour",
      "Ba Na Hills cable car",
      "Vinpearl Safari visit",
      "Phu Quoc island hopping tour",
      "Hon Thom cable car ride",
      "Entrance fees as per itinerary",
      "2 bottles of mineral water per person per sightseeing day",
    ],

    excluded: [
      "Personal expenses",
      "Travel insurance",
      "Laundry, telephone & minibar charges",
      "Optional activities not mentioned",
      "Additional meals other than specified",
      "Early check-in / late check-out charges",
      "Expenses due to weather, flight delays, strikes, natural calamities, political disturbances, or force majeure",
      "Any item not mentioned under inclusions",
    ],

    hotels: [
      "Hanoi: Muong Thanh Centre Hotel / Similar",
      "Da Nang: Eden Ocean Hotel / Similar",
      "Phu Quoc: Sunset Beach Resort & Spa / Similar",
    ],

    departureDates: [],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/vietnam-phu-quoc-tour",
  },
  {
    id: 106,

    category: "international",

    slug: "srilanka-tour",

    title: "Srilanka",

    image: "/images/srilanka/day2.webp",

    gallery: ["/images/srilanka/day1.webp",
      "/images/srilanka/day2.webp",
      "/images/srilanka/day5.webp",
      "/images/srilanka/day6.webp",
      "/images/srilanka/day7.webp",
      "/images/srilanka/day12.webp",
      "/images/srilanka/day21.webp",
      "/images/srilanka/day22.webp",
      "/images/srilanka/day23.webp",
      "/images/srilanka/day24.webp",
      "/images/srilanka/day25.webp",
      "/images/srilanka/day26.webp",
      "/images/srilanka/day27.webp",
      "/images/srilanka/day28.webp",
      "/images/srilanka/day29.webp",
      "/images/srilanka/day61.webp",
      "/images/srilanka/day62.webp",
      "/images/srilanka/day71.webp",
      "/images/srilanka/day210.webp",
      "/images/srilanka/day211.webp",],

    perPerson: true,

    rating: 9.2,

    location: "Colombo • Pinnawala • Kandy • Nuwara Eliya • Bentota",

    facilities: [
      { id: 1, icon: Hotel, label: "3★ Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "AC Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing Included" },
      { id: 5, icon: MapPinned, label: "Cultural & Nature Tour" },
      { id: 6, icon: Plane, label: "Flight Included" },
    ],

    overview:
      "Discover the tropical beauty and cultural heritage of Sri Lanka with this 7-day journey covering Colombo, Pinnawala, Kandy, Nuwara Eliya, and Bentota. Experience ancient temples, tea plantations, waterfalls, elephant encounters, scenic hill stations, river cruises, and golden beaches with guided sightseeing throughout the tour.",

    packages: {

      package1: {
        duration: "6 Nights / 7 Days",
        price: "Not Available",
        itinerary: [
          {
            day: 1,
            title: "Arrival – Sigiriya",
            distance: "Flight journey",
            description:
              "Board your flight from Netaji Subhash Chandra Bose International Airport and arrive in Sri Lanka. Visit Pinnawala Elephant Orphanage, established in 1975 to protect and care for orphaned, abandoned, and injured wild baby elephants. Also visit Dambulla Cave Temple, the largest and best-preserved cave temple complex in Sri Lanka. Transfer to the hotel and enjoy an overnight stay.",
            images: [
              "/images/srilanka/day1.webp",
            ],
          },
          {
            day: 2,
            title: "Sigiriya – Kandy",
            distance: "Approx. 120 km",
            description:
              "Visit Sigiriya, a 5th-century palace and fortress built atop a massive granite rock. Explore Sri Lanka's traditional spice gardens and continue to Kandy. Visit the Temple of the Sacred Tooth Relic, which houses the left canine tooth of Gautama Buddha, and enjoy the panoramic views from Kandy View Point, also known as Arthur's Seat. Overnight stay at Kandy.",
            images: [
              "/images/srilanka/day2.webp",
              "/images/srilanka/day21.webp",
              "/images/srilanka/day22.webp",
              "/images/srilanka/day23.webp",
              "/images/srilanka/day24.webp",
              "/images/srilanka/day25.webp",
              "/images/srilanka/day26.webp",
              "/images/srilanka/day27.webp",
              "/images/srilanka/day28.webp",
              "/images/srilanka/day29.webp",
              "/images/srilanka/day210.webp",
              "/images/srilanka/day211.webp",
            ],
          },
          {
            day: 3,
            title: "Kandy – Nuwara Eliya",
            distance: "Approx. 80 km",
            description:
              "Visit the beautiful waterfalls of Sri Lanka and the Sri Bhakta Hanuman Temple in Ramboda, built in 1999 by the Chinmaya Mission of Sri Lanka. Explore a tea plantation and learn about Sri Lanka's tea industry, which began in 1867. Continue to Nuwara Eliya, a historic hill station founded during the British colonial period. Visit Hakgala Botanical Garden, Seetha Amman Temple, and Gregory Lake. Overnight stay at Nuwara Eliya.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Nuwara Eliya → Bentota",
            distance: "Approx. 210 km",
            description:
              "Drive through scenic hill country to Bentota and relax on its golden beaches, calm lagoons, and beautiful coastal surroundings. Overnight stay at Bentota.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Nuwara Eliya – Bentota",
            distance: "Approx. 210 km",
            description:
              "Travel from Nuwara Eliya to Bentota, enjoying the scenic landscapes along the way. Bentota is a coastal resort town known for its golden beaches, calm lagoons, and relaxing atmosphere. Overnight stay at Bentota.",
            images: [
              "/images/srilanka/day5.webp",
            ],
          },
          {
            day: 6,
            title: "Bentota Excursion",
            distance: "Local sightseeing",
            description:
              "Visit a sea turtle hatchery dedicated to protecting endangered marine species. Enjoy a relaxing Madu River boat safari through winding mangrove tunnels and explore the area's rich wildlife habitats. Spend your free time enjoying optional water sports at Bentota Beach. Overnight stay at Bentota.",
            images: [
              "/images/srilanka/day6.webp",
              "/images/srilanka/day61.webp",
              "/images/srilanka/day62.webp",
            ],
          },
          {
            day: 7,
            title: "Bentota – Colombo",
            distance: "Approx. 85 km",
            description:
              "Transfer from Bentota to Colombo for a guided city tour featuring the city's history, culture, and coastal beauty. Explore popular shopping destinations, including One Galle Face and Colombo City Centre, offering shopping, dining, and leisure experiences. After sightseeing, transfer to the airport for your return flight to India. Tour ends with sweet memories of Sri Lanka.",
            images: [
              "/images/srilanka/day7.webp",
              "/images/srilanka/day71.webp",
            ],
          },
        ],
      },

    },

    included: [
      "Flight fare from Kolkata",
      "3★ hotel accommodation on twin/double sharing basis",
      "Daily breakfast",
      "Lunch",
      "Dinner",
      "AC transportation throughout the tour",
      "Airport transfers",
      "English-speaking guide",
      "Entrance fees as per itinerary",
      "Colombo city tour",
      "Pinnawala Elephant Orphanage visit",
      "Kandy city tour & cultural show",
      "Peradeniya Botanical Garden visit",
      "Tea factory visit",
      "Nuwara Eliya sightseeing",
      "Madhu River boat ride",
      "Turtle Hatchery visit",
    ],

    excluded: [
      "Optional excursions and activities",
      "Meals other than mentioned",
      "Beverages and drinks",
      "Personal expenses",
      "Laundry and telephone charges",
      "Additional mineral water beyond supplied quantity",
      "Travel insurance",
      "Any item not mentioned under inclusions",
    ],

    hotels: [
      "Colombo: Ocean Edge Suite / Courtyard by Marriott Colombo",
      "Kandy: Swiss Residence Kandy",
      "Nuwara Eliya: Ramboda Falls Hotel",
      "Bentota: Rockside Beach Hotel",
    ],

    departureDates: [],

    notes: [
      "Sri Lanka follows GMT+5:30, the same time zone as India.",
      "Sri Lankan Rupee (LKR) is the local currency.",
      "Itinerary may change depending on road, traffic, weather, or operational conditions.",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/sri-lanka-tour",
  },
  {
    id: 107,

    category: "international",

    slug: "singapore-malaysia-tour",

    title: "Singapore Malaysia, Genting",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.1,

    location:
      "Singapore • Sentosa • Universal Studios • Kuala Lumpur • Genting Highlands • Batu Caves",

    facilities: [
      { id: 1, icon: Hotel, label: "4★ Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "AC Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing Included" },
      { id: 5, icon: MapPinned, label: "Theme Park & City Tour" },
      { id: 6, icon: Plane, label: "Flights Included" },
    ],

    overview:
      "Experience the best of Singapore and Malaysia with this exciting 7-day international holiday covering Singapore, Sentosa Island, Universal Studios, Kuala Lumpur, Genting Highlands, and Batu Caves. Enjoy iconic attractions, theme parks, cable cars, city tours, shopping, entertainment, and comfortable 4-star accommodation throughout the journey.",

    packages: {
      package1: {
        duration: "6 Nights / 7 Days",
        price: 120000,
        itinerary: [
          {
            day: 1,
            title: "Arrival in Singapore – Night Safari",
            distance: "Airport transfer",
            description:
              "Arrive at Singapore Airport, transfer to hotel, and in the evening visit Night Safari with Thumbuakar tribal performance, tram safari, and Creatures of the Night show. Overnight stay at Singapore.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Singapore Flyer & Sentosa Island",
            distance: "Local sightseeing",
            description:
              "Visit Singapore Flyer photo point and Marina Bay Sands SkyPark area, then proceed to Sentosa Island for cable car ride, Images of Singapore LIVE, Madame Tussauds, Luge & Sky Ride, and Wings of Time show. Overnight stay at Singapore.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Universal Studios Singapore",
            distance: "Local sightseeing",
            description:
              "After breakfast enjoy a full day at Universal Studios Singapore with thrilling rides, movie-themed attractions, entertainment zones, and shows. Overnight stay at Singapore.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Singapore → Kuala Lumpur",
            distance: "Coach transfer",
            description:
              "Travel by coach from Singapore to Kuala Lumpur, check in to hotel, and spend the evening at leisure. Overnight stay at Kuala Lumpur.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Genting Highlands & Batu Caves",
            distance: "Approx. 55 km",
            description:
              "Excursion to Genting Highlands with cable car ride, Snow World, gaming and entertainment complex, and en-route stop at Batu Caves. Overnight stay at Genting/Kuala Lumpur.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Kuala Lumpur City Tour",
            distance: "Local sightseeing",
            description:
              "Visit Petronas Twin Towers photo stop, Cocoa Centre, King’s Palace photo stop, National Monument, National Mosque, Independence Square, and enjoy local city attractions. Overnight stay at Kuala Lumpur.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Kuala Lumpur Departure",
            distance: "Airport transfer",
            description:
              "After breakfast check out, enjoy free time for shopping and local markets, lunch at Indian restaurant, and transfer to Kuala Lumpur Airport for your return flight to India.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "Return flight tickets",
      "Singapore visa",
      "Malaysia visa",
      "4★ hotel accommodation on twin sharing basis",
      "Daily breakfast",
      "Lunch",
      "Dinner",
      "AC push-back coach transportation",
      "2 bottles of water per person per day",
      "Travel insurance",
      "Experienced tour manager from Kolkata",
      "English-speaking guide",
      "Night Safari with tram ride",
      "Sentosa Island tour",
      "Cable car ride",
      "Madame Tussauds Singapore",
      "Wings of Time show",
      "Universal Studios Singapore entry",
      "Genting Highlands excursion",
      "Snow World entry",
      "Batu Caves visit",
      "Kuala Lumpur city tour",
    ],

    excluded: [
      "Personal expenses",
      "Laundry charges",
      "Telephone charges",
      "Additional beverages",
      "Optional activities not mentioned",
      "Tips not specified",
      "Anything not mentioned in inclusions",
    ],

    hotels: [
      "Singapore: Hilton Garden Inn Singapore (4★)",
      "Kuala Lumpur: Ramada Kuala Lumpur (4★)",
      "Genting: First World Hotel Genting Highlands",
    ],

    departureDates: [
      "17/10/2026",
      "27/10/2026",
      "20/11/2026",
      "22/12/2026",
      "22/01/2027",
    ],

    notes: [
      "All sightseeing is subject to operational schedules and weather conditions.",
      "Hotel check-in/check-out timings are as per hotel policy.",
      "No hidden costs as per package inclusions.",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/singapore-malaysia-tour",
  },
  {
    id: 108,

    category: "international",

    slug: "thailand-singapore-malyasia",

    title: "Thailand Singapore Malyasia",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.3,

    location:
      "Bangkok • Pattaya • Phuket • Kuala Lumpur • Genting Highlands • Singapore",

    facilities: [
      { id: 1, icon: Hotel, label: "4★ / 5★ Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation Included" },
      { id: 4, icon: Camera, label: "Sightseeing Included" },
      { id: 5, icon: MapPinned, label: "Theme Park & City Tour" },
      { id: 6, icon: Plane, label: "Flights Included" },
    ],

    overview:
      "Enjoy an unforgettable Southeast Asia holiday covering Thailand, Malaysia, and Singapore. Explore Pattaya beaches, Bangkok city attractions, Phuket islands, Genting Highlands, Kuala Lumpur landmarks, and Singapore’s iconic attractions including Sentosa Island and Night Safari.",

    packages: {
      package1: {
        duration: "12 Nights / 13 Days",
        price: "Not Available",
        itinerary: [
          {
            day: 1,
            title: "Arrival Bangkok → Pattaya",
            distance: "Airport transfer",
            description:
              "Arrive at Suvarnabhumi Airport, transfer to Pattaya hotel with guaranteed early check-in. Visit Pattaya Beach area, enjoy Indian buffet lunch, Alcazar Show, Walking Street, dinner, and overnight stay at Pattaya.",
            images: [null, null],
          },
          {
            day: 2,
            title: "Pattaya Coral Island Tour",
            distance: "Speed boat excursion",
            description:
              "Proceed to Coral Island by speed boat, enjoy beach activities, buffet lunch at Indian restaurant, Pattaya local market sightseeing, dinner, and overnight stay at Pattaya.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Pattaya → Bangkok City Tour",
            distance: "Approx. 150 km",
            description:
              "Check out and transfer to Bangkok. Visit Golden Temple, Marble Temple, and city attractions. Enjoy shopping at Indira Market, dinner, and overnight stay at Bangkok.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Safari World & Chao Phraya Cruise",
            distance: "Local sightseeing",
            description:
              "Visit Safari World with Marine Park including buffet lunch. In the evening enjoy Chao Phraya Princess Cruise dinner and overnight stay at Bangkok.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Bangkok → Phuket",
            distance: "Flight transfer",
            description:
              "Fly from Bangkok to Phuket, transfer to hotel, enjoy buffet lunch at Indian restaurant, leisure time, dinner, and overnight stay at Phuket.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Phi Phi Island Excursion",
            distance: "Boat excursion",
            description:
              "Full-day Phi Phi Island tour with beach visit and buffet lunch. Return to hotel for dinner and overnight stay at Phuket.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Phuket → Kuala Lumpur",
            distance: "Flight transfer",
            description:
              "Fly to Kuala Lumpur, transfer to hotel, leisure evening, and overnight stay at Kuala Lumpur.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Genting Highlands & Batu Caves",
            distance: "Approx. 55 km",
            description:
              "Excursion to Genting Highlands with cable car, Snow World, gaming complex, Batu Caves visit, photo stops, dinner, and overnight stay at Genting/Kuala Lumpur.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Kuala Lumpur City Tour",
            distance: "Local sightseeing",
            description:
              "Visit Petronas Twin Towers photo stop, Cocoa Centre, King’s Palace, National Monument, National Mosque, Independence Square, and overnight stay at Kuala Lumpur.",
            images: [null, null],
          },
          {
            day: 10,
            title: "Kuala Lumpur → Singapore & Night Safari",
            distance: "Road transfer",
            description:
              "Travel by road to Singapore, check in to hotel, and in the evening enjoy Night Safari with tram ride and wildlife experience. Overnight stay at Singapore.",
            images: [null, null],
          },
          {
            day: 11,
            title: "Singapore City & Sentosa Island",
            distance: "Local sightseeing",
            description:
              "Visit Marina Bay, SkyPark area, Sentosa Island, Mount Faber, Merlion Tower, Sky Ride, light and sound show, dinner, and overnight stay at Singapore.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Singapore Leisure / Universal Studios",
            distance: "Free day",
            description:
              "Free day for leisure, shopping, or optional Universal Studios Singapore visit. Overnight stay at Singapore.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Singapore Departure",
            distance: "Airport transfer",
            description:
              "Early morning check out and transfer to Singapore Airport for return flight to India with sweet memories of the tour.",
            images: [null, null],
          },
        ],
      },
    },

    included: [
      "4★ / 5★ hotel accommodation",
      "Daily breakfast",
      "Lunch",
      "Dinner",
      "Transportation throughout the tour",
      "Parking charges",
      "Toll tax",
      "Thailand visa (if applicable as per package)",
      "Malaysia visa",
      "Singapore visa",
      "Experienced tour manager",
      "Return air tickets",
      "Sightseeing as per itinerary",
      "English-speaking guide",
      "Entry fees as per itinerary",
      "Night Safari Singapore",
      "Sentosa Island tour",
      "Safari World Bangkok",
      "Phi Phi Island tour",
      "Genting Highlands excursion",
    ],

    excluded: [
      "Personal expenses",
      "Laundry charges",
      "Telephone charges",
      "Additional beverages",
      "Optional tours not mentioned",
      "Travel insurance if not included by airline/package",
      "Any item not mentioned under inclusions",
    ],

    hotels: [
      "Bangkok: Bangkok Palace Hotel (4★)",
      "Pattaya: Beverly Plaza Hotel (4★)",
      "Phuket: The Fisherman Harbour Beach Resort (5★)",
      "Singapore: Hilton Garden Inn Singapore (4★)",
      "Kuala Lumpur: Ramada Kuala Lumpur (4★)",
      "Genting Highlands: First World Hotel",
    ],

    departureDates: [
      "16/08/2026",
      "18/09/2026",
      "17/10/2026",
      "25/10/2026",
      "20/11/2026",
      "22/12/2026",
      "22/01/2027",
    ],

    notes: [
      "Flights, hotel rooms, and transportation are subject to availability at the time of booking.",
      "Tour schedule may change due to operational, weather, or local conditions.",
      "Package price to be confirmed at the time of booking.",
    ],

    whatsapp: "https://wa.me/919163569695",

    phone: "tel:+918820918250",

    enquiryLink: "#",

    detailsLink: "/packages/bangkok-pattaya-phuket-kuala-lumpur-singapore-tour",
  },
];

export default packages;
