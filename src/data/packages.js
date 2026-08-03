import {
  Plane,
  Hotel,
  Utensils,
  Car,
  Camera,
  MapPinned,
  Train
} from "lucide-react";

const packages = [
  {
    id: 1,

    category: "domestic",

    slug: "ajanta-ellora-mumbai-goa-tour",

    title: "Ajanta Ellora Mumbai Goa",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.7,

    location:
      "Ajanta • Ellora • Aurangabad • Mumbai • Mahabaleshwar • Goa",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" },
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
            images: [null, null],
          },
          {
            day: 2,
            title: "Arrival at Bhusaval → Ajanta",
            distance: "Road transfer",
            description:
              "Reach Bhusaval Railway Station and proceed to Ajanta Caves. Overnight stay at Ajanta.",
            images: [null, null],
          },
          {
            day: 3,
            title: "Ajanta → Ellora",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Ellora via Girijamata Temple. Visit Grishneshwar Jyotirlinga and Ellora Caves. Overnight stay at Ellora.",
            images: [null, null],
          },
          {
            day: 4,
            title: "Ellora → Aurangabad",
            distance: "Road transfer",
            description:
              "Visit Bibi Ka Maqbara, Panchakki, Chhatrapati Shivaji Maharaj Museum, and other local attractions. Overnight stay at Aurangabad.",
            images: [null, null],
          },
          {
            day: 5,
            title: "Aurangabad → Mumbai",
            distance: "Train journey",
            description:
              "Transfer to Chhatrapati Sambhaji Nagar Railway Station and take train to Mumbai. Transfer to hotel on arrival. Overnight stay at Mumbai.",
            images: [null, null],
          },
          {
            day: 6,
            title: "Mumbai Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Gateway of India, Marine Drive, Taraporewala Aquarium, Hanging Garden, Juhu Beach, Mahalaxmi Temple, Boot House, Siddhivinayak Temple, and more. Overnight stay at Mumbai.",
            images: [null, null],
          },
          {
            day: 7,
            title: "Mumbai → Mahabaleshwar",
            distance: "Road transfer",
            description:
              "Drive to Mahabaleshwar and check in to the hotel. Overnight stay at Mahabaleshwar.",
            images: [null, null],
          },
          {
            day: 8,
            title: "Mahabaleshwar Sightseeing → Pune → Goa",
            distance: "Road + Train transfer",
            description:
              "Visit Elephant's Head Point, Mahabaleshwar Temple, Veena Lake, and nearby attractions. Later transfer to Pune Railway Station and board train for Goa. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 9,
            title: "Arrival at Goa",
            distance: "Railway station transfer",
            description:
              "Reach Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 10,
            title: "North Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach, Miramar Beach, and nearby attractions. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 11,
            title: "South Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit St. Xavier's Church, Mangesh Temple, Santadurga Temple, Colva Beach, and other attractions. Overnight stay at Goa.",
            images: [null, null],
          },
          {
            day: 12,
            title: "Goa → Kolkata",
            distance: "Train journey",
            description:
              "Check out early morning and transfer to Madgaon Railway Station. Board train (18048) for Kolkata. Overnight stay in train.",
            images: [null, null],
          },
          {
            day: 13,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar Railway Station with sweet memories of the tour.",
            images: [null, null],
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

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/ajanta-ellora-mumbai-goa-tour",
  },
  {
    id: 2,

    category: "domestic",

    slug: "madhya-pradesh-tour",

    title: "Madhya Pradesh",

    image: null,

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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Pendra Road → Amarkantak",
            distance: "Road transfer",
            description:
              "Reach Pendra Road Railway Station and transfer to Amarkantak. Enjoy local sightseeing. Overnight stay at Amarkantak.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Amarkantak → Jabalpur",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Jabalpur and check in to the hotel. Overnight stay at Jabalpur.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Jabalpur Sightseeing → Omkareshwar",
            distance: "Road transfer",
            description:
              "Visit Dhuandhar Falls, Bhedaghat, Marble Rocks, and nearby attractions. Optional boat ride at own cost. Later proceed to Omkareshwar. Overnight stay at Omkareshwar.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Omkareshwar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Omkareshwar Jyotirlinga and the sacred Narmada River. Overnight stay at Omkareshwar.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Omkareshwar → Ujjain",
            distance: "Road transfer",
            description:
              "After breakfast drive to Ujjain and check in to the hotel. Overnight stay at Ujjain.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Ujjain Temple Circuit",
            distance: "Local sightseeing",
            description:
              "Visit Kaal Bhairav Temple, Maharshi Sandipani Ashram, Ram Ghat, Harsiddhi Mata Shaktipeeth, Gadh Kalika Mata Temple, and Mangalnath Temple. Overnight stay at Ujjain.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Mahakaleshwar Darshan → Return Train",
            distance: "Local sightseeing + train",
            description:
              "Visit Mahakaleshwar Jyotirlinga and return to the hotel. After dinner transfer to Ujjain Railway Station and board the return train. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue the return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of the Madhya Pradesh tour.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Satna → Khajuraho",
            distance: "Road transfer",
            description:
              "Reach Satna Railway Station and transfer to Khajuraho. Overnight stay at Khajuraho.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Khajuraho Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit the famous Khajuraho Temples. Optional Light & Sound Show and cultural dance program at own cost. Overnight stay at Khajuraho.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Khajuraho → Bandhavgarh",
            distance: "Road transfer",
            description:
              "Proceed to Bandhavgarh with packed lunch. En route visit Pandav Gupha (entry fee at own cost). Overnight stay at Bandhavgarh.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Bandhavgarh → Amarkantak",
            distance: "Road transfer",
            description:
              "Optional morning jungle safari at own cost. After breakfast drive to Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Amarkantak Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore the sacred temples, Narmada Udgam, waterfalls, and local attractions of Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Amarkantak → Panchmarhi",
            distance: "Road transfer",
            description:
              "Enjoy additional local sightseeing in Amarkantak and later proceed to Panchmarhi. Overnight stay at Panchmarhi.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Panchmarhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Panchmarhi hill station. Optional jungle safari and local vehicle at own cost. Overnight stay at Panchmarhi.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Panchmarhi → Jabalpur",
            distance: "Road transfer",
            description:
              "After breakfast drive to Jabalpur and check in to the hotel. Overnight stay at Jabalpur.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Jabalpur Sightseeing → Return Train",
            distance: "Local sightseeing + train",
            description:
              "Visit Dhuandhar Falls, Bhedaghat, Marble Rocks, and nearby attractions. Optional boat ride at own cost. Later transfer to Jabalpur Railway Station and board the return train. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of the tour.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Satna → Khajuraho",
            distance: "Road transfer",
            description:
              "Reach Satna Railway Station and transfer to Khajuraho. Overnight stay at Khajuraho.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Khajuraho Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Khajuraho Temples. Optional Light & Sound Show and cultural dance program at own cost. Overnight stay at Khajuraho.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Khajuraho → Bandhavgarh",
            distance: "Road transfer",
            description:
              "Proceed to Bandhavgarh with packed lunch. En route visit Pandav Gupha (entry fee at own cost). Overnight stay at Bandhavgarh.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Bandhavgarh → Amarkantak",
            distance: "Road transfer",
            description:
              "Optional morning jungle safari at own cost. After breakfast drive to Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Amarkantak Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore the temples, waterfalls, and sacred Narmada Udgam area of Amarkantak. Overnight stay at Amarkantak.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Amarkantak → Jabalpur",
            distance: "Road transfer",
            description:
              "After breakfast enjoy additional sightseeing and later proceed to Jabalpur. Overnight stay at Jabalpur.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Jabalpur Sightseeing → Panchmarhi",
            distance: "Road transfer",
            description:
              "Visit Dhuandhar Falls, Bhedaghat, Marble Rocks, and nearby attractions. Optional boat ride at own cost. Later proceed to Panchmarhi. Overnight stay at Panchmarhi.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Panchmarhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Panchmarhi hill station. Optional jungle safari and local vehicle at own cost. Overnight stay at Panchmarhi.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Panchmarhi → Omkareshwar",
            distance: "Road transfer",
            description:
              "After breakfast drive to Omkareshwar and check in to the hotel. Overnight stay at Omkareshwar.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Omkareshwar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Omkareshwar Jyotirlinga and the banks of the Narmada River. Overnight stay at Omkareshwar.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Omkareshwar → Ujjain",
            distance: "Road transfer",
            description:
              "Proceed to Ujjain and check in to the hotel. Overnight stay at Ujjain.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Ujjain Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Mahakaleshwar Jyotirlinga and major temples of Ujjain. Overnight stay at Ujjain.",
            images: [null, null]
          },
          {
            day: 14,
            title: "Ujjain → Return Train",
            distance: "Train journey",
            description:
              "After breakfast transfer to Ujjain Railway Station and board the return train. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 15,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of the complete Madhya Pradesh tour.",
            images: [null, null]
          }
        ]
      }

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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/madhya-pradesh-tour"
  },
  {
    id: 3,

    category: "domestic",

    slug: "andaman-tour",

    title: "Andaman",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.7,

    location: "Port Blair • Havelock • Neil Island",

    facilities: [
      { id: 1, icon: Plane, label: "Airport Pickup" },
      { id: 2, icon: Hotel, label: "AC Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "AC Transport" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Cruise & Boat Included" }
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
            title: "Arrival at Port Blair",
            distance: "Airport transfer",
            description:
              "Pick up from Port Blair Airport and transfer to hotel. Visit Cellular Jail, Corbyn's Cove Beach, and attend the Sound & Light Show at Cellular Jail. Overnight stay at Port Blair.",
            images: [null, null]
          },
          {
            day: 2,
            title: "Ross Island & North Bay Coral Island",
            distance: "Boat excursion",
            description:
              "After breakfast visit Ross Island and North Bay Coral Island for sightseeing and coral experiences. Overnight stay at Port Blair.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Port Blair → Havelock Island",
            distance: "Cruise transfer",
            description:
              "Morning transfer to Havelock Island and visit the famous Radhanagar Beach. Overnight stay at Havelock Island.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Havelock → Neil Island",
            distance: "Cruise transfer",
            description:
              "Morning transfer to Neil Island and visit Bharatpur Beach, Natural Bridge, and Laxmanpur Beach. Overnight stay at Neil Island.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Neil Island → Port Blair",
            distance: "Cruise transfer",
            description:
              "After breakfast check out and return to Port Blair by cruise. Overnight stay at Port Blair.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Baratang Island Excursion",
            distance: "Full day excursion",
            description:
              "Early morning excursion to Baratang Island. Explore the island and return to Port Blair in the evening. Overnight stay at Port Blair.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Departure from Port Blair",
            distance: "Airport transfer",
            description:
              "After breakfast transfer to Port Blair Airport for your onward journey with sweet memories of the Andaman tour.",
            images: [null, null]
          }
        ]
      }

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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/andaman-tour"
  },
  {
    id: 4,

    category: "domestic",

    slug: "arunachal-kaziranga-tour",

    title: "Arunachal Pradesh",

    image: null,

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
      { id: 6, icon: MapPinned, label: "Arunachal Permit Included" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Guwahati",
            distance: "Kamakhya → Guwahati",
            description:
              "Reach Kamakhya Railway Station, transfer to hotel, visit Kamakhya Temple, and overnight stay at Guwahati.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Guwahati → Bhalukpong",
            distance: "241 km",
            description:
              "Drive to Bhalukpong and enjoy the scenic foothills of Arunachal Pradesh. Overnight stay at Bhalukpong.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Bhalukpong → Bomdila",
            distance: "93 km",
            description:
              "Proceed to Bomdila via Tipi Orchidarium and Jia Bharali River. Visit Bomdila Upper Monastery. Overnight stay at Bomdila.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Bomdila → Tawang",
            distance: "170 km",
            description:
              "Drive through Hot Spring, Sela Pass, Sela Lake, and Jaswantgarh War Memorial before reaching Tawang. Overnight stay at Tawang.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Tawang Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Tawang Monastery, Handicraft Centre, and attend the Light & Sound Show at Tawang War Memorial. Overnight stay at Tawang.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Tawang Excursion",
            distance: "Optional excursion",
            description:
              "Optional excursion to Bumla Pass, Sangestar Lake, and P.T. Tso Lake (own cost and subject to army permission). Overnight stay at Tawang.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Tawang → Dirang",
            distance: "140 km",
            description:
              "Drive to Dirang via Jung Falls. Overnight stay at Dirang.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Dirang → Kaziranga",
            distance: "250 km",
            description:
              "Proceed to Kaziranga National Park. Optional evening tribal dance program at own cost. Overnight stay at Kaziranga.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Kaziranga → Guwahati",
            distance: "204 km",
            description:
              "Optional early morning jungle safari at Kaziranga (own cost). After breakfast drive to Guwahati Railway Station and board the return train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Arrival at Howrah / Sealdah",
            distance: "Train arrival",
            description:
              "Reach Howrah / Sealdah Railway Station with sweet memories of the Arunachal and Kaziranga tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/arunachal-kaziranga-tour"
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
      { id: 6, icon: MapPinned, label: "Boat Ride Included" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Ayodhya",
            distance: "Railway station transfer",
            description:
              "Reach Ayodhya Railway Station, transfer to hotel, and visit Ram Janmabhoomi, the birthplace of Lord Rama. Overnight stay at Ayodhya.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Ayodhya Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Janki Bhawan, Kanak Bhawan, Sarayu River, and Hanuman Garhi. Overnight stay at Ayodhya.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Ayodhya → Prayagraj → Varanasi",
            distance: "286 km",
            description:
              "Drive to Varanasi via Prayagraj. Visit Triveni Sangam, Khusro Bagh, Akbar Fort, Bade Hanuman Ji Temple, and Nagvasuki Temple before proceeding to Varanasi. Overnight stay at Varanasi.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Varanasi Sightseeing & Ganga Aarti",
            distance: "Local sightseeing",
            description:
              "Visit Birla Temple, Sarnath, and Kashi Vishwanath Temple. Enjoy an optional boat ride and attend the evening Ganga Aarti. Overnight stay at Varanasi.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Varanasi Local Sightseeing → Departure",
            distance: "Local sightseeing + train",
            description:
              "Visit Sankat Mochan Hanuman Temple, Assi Ghat, Manikarnika Ghat, Tulsi Manas Temple, and Batu Bhairav Temple. After dinner transfer to Banaras Railway Station and board the train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Reach Sealdah / Howrah Railway Station with sweet memories of the Ayodhya, Prayagraj, and Varanasi tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/ayodhya-prayagraj-varanasi-tour"
  },
  {
    id: 6,

    category: "domestic",

    slug: "panch-jyotirlinga-tour",

    title:
      "Five Joytirlinga",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.1,

    location:
      "Pune • Nashik • Aurangabad • Ujjain • Omkareshwar",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Temple Tour" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Enjoy the scenic train journey towards Pune. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Arrival at Pune",
            distance: "Railway station transfer",
            description:
              "Reach Pune Railway Station and transfer to hotel. Visit Dagdusheth Halwai Ganpati Temple, Shaniwar Wada, Aga Khan Palace, Lal Mahal, and nearby attractions. Overnight stay at Pune.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Bhimashankar Jyotirlinga Darshan",
            distance: "Excursion from Pune",
            description:
              "After breakfast visit Bhimashankar Jyotirlinga Temple and return to Pune hotel. Overnight stay at Pune.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Pune → Nashik",
            distance: "215 km",
            description:
              "Drive to Nashik and enjoy local sightseeing in the evening. Overnight stay at Nashik.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Trimbakeshwar Jyotirlinga Darshan",
            distance: "Local excursion",
            description:
              "Visit Trimbakeshwar Jyotirlinga Temple and return to hotel. Overnight stay at Nashik.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Nashik → Aurangabad",
            distance: "180 km",
            description:
              "Proceed to Aurangabad and visit Bibi Ka Maqbara, Ellora Caves, Aurangabad Caves, Daulatabad Fort, and nearby attractions depending on time. Overnight stay at Aurangabad.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Grishneshwar Darshan → Train to Ujjain",
            distance: "Temple visit + train journey",
            description:
              "Visit Grishneshwar Jyotirlinga Temple. After dinner transfer to Chhatrapati Sambhaji Nagar Railway Station and board Hisar Weekly Express (17020) for Ujjain. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Arrival at Ujjain",
            distance: "Railway station transfer",
            description:
              "Reach Ujjain Railway Station and transfer to hotel. Overnight stay at Ujjain.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Mahakaleshwar & Ujjain Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Mahakaleshwar Jyotirlinga, Harsiddhi Mata Temple, Kal Bhairav Temple, Gadh Kalika Temple, Gopal Mandir, Chintaman Ganesh Temple, Jantar Mantar, Ram Ghat, Triveni Museum, and nearby attractions. Overnight stay at Ujjain.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Ujjain → Omkareshwar",
            distance: "144 km",
            description:
              "Drive to Omkareshwar and check in at hotel. Overnight stay at Omkareshwar.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Omkareshwar Jyotirlinga Darshan",
            distance: "Local sightseeing",
            description:
              "Visit Omkareshwar Jyotirlinga Temple and Narmada River ghats. Overnight stay at Omkareshwar.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Omkareshwar → Maheshwar → Indore → Train",
            distance: "80 km + train journey",
            description:
              "After breakfast drive via Maheshwar and transfer to Indore Railway Station. Board Shipra Express (22911) for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return journey towards Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 15,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with divine memories of the Panch Jyotirlinga pilgrimage tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/panch-jyotirlinga-tour"
  },
  {
    id: 7,

    category: "domestic",

    slug: "shimla-manali-bhuntar-tour",

    title: "Himachal Pradesh",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.8,

    location: "Shimla • Manali • Bhuntar • Manikaran",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Hill Station Tour" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Himachal Pradesh. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Arrival at Shimla",
            distance: "Railway station transfer",
            description:
              "Reach Chandigarh / Kalka Railway Station and transfer to Shimla hotel. Afternoon visit to Mall Road and Kali Bari Temple by walk. Overnight stay at Shimla.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Kufri Excursion",
            distance: "Local sightseeing",
            description:
              "After breakfast visit Kufri, Fagu, and Green Valley. Return to Shimla hotel. Overnight stay at Shimla.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Shimla → Manali",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Manali through the scenic mountain route. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Manali Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Hadimba Temple, Tibetan Monastery, Handicraft Centre, and Old Vashisht Village. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Solang Valley & Atal Tunnel Excursion",
            distance: "Excursion from Manali",
            description:
              "Visit Solang Valley and Atal Tunnel – Sisu Village. Rohtang Pass excursion is optional and at own cost. Return to Manali hotel. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Manali → Manikaran / Bhuntar",
            distance: "Road transfer",
            description:
              "After breakfast drive to Manikaran / Bhuntar and check in at hotel. Overnight stay at Manikaran / Bhuntar.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Bhuntar → Chandigarh / Kalka → Train",
            distance: "Road transfer + train journey",
            description:
              "After breakfast transfer to Chandigarh / Kalka Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return journey towards Howrah. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of your Himachal tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/shimla-manali-bhuntar-tour"
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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Koraput",
            distance: "Railway station transfer",
            description:
              "Reach Koraput Railway Station and transfer to hotel. Overnight stay at Koraput.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Koraput Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Duduma Waterfall and Gupteswar Cave. Return to Koraput for overnight stay.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Koraput → Araku Valley",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Araku Valley. Visit Borra Cave, Tribal Museum, gardens, and Chapurai. Overnight stay at Araku Valley.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Araku Valley → Vizag",
            distance: "Road transfer",
            description:
              "Drive to Visakhapatnam and visit Rushikonda Beach, Kailasagiri, Submarine Museum, Visakha Museum, and Fishing Harbor. Overnight stay at Vizag.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Vizag Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Simhachalam Hill. After lunch visit R.K. Beach and Yarada Beach. Overnight stay at Vizag.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Vizag → Hyderabad",
            distance: "Train transfer",
            description:
              "After lunch transfer to Vizag Railway Station and board train 12727 / 17015 for Hyderabad. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Hyderabad Heritage Tour",
            distance: "Local sightseeing",
            description:
              "Arrive at Hyderabad Railway Station and transfer to hotel. Visit Charminar, Golconda Fort, Salar Jung Museum, Birla Temple, Lumbini Park, Chilkur Balaji Temple, and Buddha Statue. Overnight stay at Hyderabad.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Ramoji Film City",
            distance: "Excursion",
            description:
              "Full-day visit to the world-famous Ramoji Film City. Overnight stay at Hyderabad.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Hyderabad → Kolkata",
            distance: "Train journey",
            description:
              "Check out from hotel and transfer to Hyderabad Railway Station for return train to Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of your South India tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/koraput-vizag-hyderabad-tour"
  },
  {
    id: 9,

    category: "domestic",

    slug: "northeast-grand-tour",

    title: "Nagaland Tripura",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 8.8,

    location: "Dimapur • Kohima • Imphal • Silchar • Aizawl • Agartala",

    facilities: [
      { id: 1, icon: Train, label: "Train Included" },
      { id: 2, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Transport Included" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
    ],

    overview:
      "Discover the enchanting beauty and cultural diversity of Northeast India with this grand circuit covering Nagaland, Manipur, Mizoram, and Tripura. Explore Kohima’s heritage, Loktak Lake, Aizawl’s scenic hills, and Agartala’s royal landmarks in one unforgettable journey.",

    packages: {
      package1: {
        duration: "12 Nights / 13 Days",
        price: 35500,

        itinerary: [
          {
            day: 1,
            title: "Howrah → Dimapur",
            distance: "Train journey",
            description:
              "Board Train 15959 from Howrah Railway Station for Dimapur. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Dimapur",
            distance: "Railway station transfer",
            description:
              "Reach Dimapur Railway Station and transfer to hotel. Overnight stay at Dimapur.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Dimapur → Kohima",
            distance: "Road transfer",
            description:
              "Drive to Kohima and visit World War II Cemetery, Nagaland Museum, and Kisama Heritage Village. Overnight stay at Kohima.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Kohima → Imphal",
            distance: "Road transfer",
            description:
              "Proceed to Imphal and, subject to time, visit Loktak Lake, Kaibul Lamjao National Park, and INA Museum. Overnight stay at Imphal.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Imphal Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit State Orchidarium, World War II Cemeteries at Dowlaland and Hatta, Manipur State Museum, Old Polo Ground, and BT Park. Overnight stay at Imphal.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Imphal → Silchar",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Silchar. Arrive in the late afternoon and check in to hotel. Overnight stay at Silchar.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Silchar → Aizawl",
            distance: "Road transfer",
            description:
              "Transfer to Aizawl and check in to hotel. Overnight stay at Aizawl.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Aizawl Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Bara Bazar, Luangmual Handicraft Centre, Mizoram State Museum, Durtlang Hills, Mini Zoo, and Berawtlang Tourist Complex. Overnight stay at Aizawl.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Aizawl → Silchar",
            distance: "Road transfer",
            description:
              "Return to Silchar and arrive in the late afternoon. Overnight stay at Silchar.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Silchar → Agartala",
            distance: "Road transfer",
            description:
              "Proceed to Agartala and visit State Museum, Ujjayanta Palace, MBB College, Jagannath Temple, Umamaheswari Temple, Heritage Park, Nagicherra Rubber Wood Processing Centre, Laxminarayan Temple, Venuban Bihar, and Durgabari Tea Garden. Overnight stay at Agartala.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Unakoti Excursion",
            distance: "Excursion",
            description:
              "After breakfast visit the famous Unakoti Archaeological Site. Return to Agartala for overnight stay.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Agartala → Kolkata",
            distance: "Train journey",
            description:
              "After breakfast transfer to Agartala Railway Station for return train to Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Arrival at Sealdah",
            distance: "Train arrival",
            description:
              "Arrive at Sealdah Railway Station with sweet memories of your Northeast Grand Tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/northeast-grand-tour"
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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Jammu. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Jammu → Srinagar",
            distance: "Train transfer",
            description:
              "Arrive at Jammu Railway Station and board Vande Bharat for Srinagar. Transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Srinagar → Gurez Valley",
            distance: "126 km",
            description:
              "Drive through scenic mountain roads to Gurez Valley. Check in to hotel and enjoy the valley surroundings. Overnight stay at Gurez Valley.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Gurez Valley Exploration",
            distance: "Local sightseeing",
            description:
              "Visit Habba Khatoon Peak, Kishanganga River, and Tulail Valley (optional and at own cost). Overnight stay at Gurez Valley.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Gurez Valley → Lolab Valley",
            distance: "126 km",
            description:
              "After breakfast proceed to the picturesque Lolab Valley surrounded by dense forests and mountains. Overnight stay at Lolab Valley.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Lolab Valley → Keran Valley",
            distance: "100 km",
            description:
              "Drive to the beautiful border valley of Keran and check in to hotel. Overnight stay at Keran Valley.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Keran Valley Sightseeing",
            distance: "Local sightseeing",
            description:
              "Explore Keran Village and witness the unique settlement located along the Line of Control where houses can be seen on both Indian and Pakistan-administered sides (optional and at own cost). Overnight stay at Keran Valley.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Keran Valley → Srinagar",
            distance: "140 km",
            description:
              "Return to Srinagar after breakfast. Enjoy the evening at leisure. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Doodhpathri Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to the beautiful meadow destination Doodhpathri. Return to Srinagar for overnight stay.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Srinagar → Jammu",
            distance: "270 km",
            description:
              "After breakfast drive to Jammu Railway Station and board return train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Arrival at Kolkata / Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Kolkata Railway Station with sweet memories of your Kashmir valley tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/kashmir-gurez-lolab-keran-tour"
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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "NJP → Pelling",
            distance: "Road transfer",
            description:
              "Arrive at NJP Railway Station in the morning and transfer to Pelling. Evening free for leisure. Overnight stay at Pelling.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Pelling Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kanchenjunga viewpoints, Rimbi Waterfalls, Rabdentse Ruins, Pemayangtse Monastery, Orange Garden, and the famous Sky Walk. Overnight stay at Pelling.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Pelling → Ravangla",
            distance: "Road transfer",
            description:
              "Drive to Ravangla. En route visit Namchi Char Dham and Sai Temple. After lunch visit Buddha Park. Overnight stay at Ravangla.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Ravangla → Darjeeling",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Darjeeling. Evening free for leisure and Mall Road exploration. Overnight stay at Darjeeling.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Darjeeling Sightseeing → NJP → Howrah",
            distance: "Local sightseeing + train journey",
            description:
              "Early morning visit Tiger Hill, Batasia Loop, and Ghoom Monastery. After breakfast visit Padmaja Naidu Himalayan Zoological Park, HMI, Tenzing Rock, Japanese Temple, and Tea Garden. Later transfer to NJP Railway Station and board Vande Bharat Express for Howrah, arriving at night with sweet memories.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/pelling-ravangla-darjeeling-tour"
  },
  {
    id: 12,

    category: "domestic",

    slug: "rajasthan-grand-tour",

    title: "Rajasthan",

    image: null,

    gallery: [null, null, null, null, null],

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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Bikaner",
            distance: "Railway station transfer",
            description:
              "Arrive at Bikaner Railway Station and transfer to hotel. Evening free for leisure. Overnight stay at Bikaner.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Bikaner → Jaisalmer",
            distance: "Road transfer",
            description:
              "Visit Junagarh Fort and Karni Mata Temple after breakfast. Later proceed to Jaisalmer. Overnight stay at Jaisalmer.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Jaisalmer Sightseeing & Sam Sand Dunes",
            distance: "Local sightseeing",
            description:
              "Visit Sonar Kella and other local attractions. In the evening excursion to Sam Sand Dunes for tribal dance performance and optional camel ride. Return to Jaisalmer for overnight stay.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Jaisalmer → Jodhpur",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Jodhpur. Overnight stay at Jodhpur.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Jodhpur → Mount Abu",
            distance: "Road transfer",
            description:
              "Visit Umaid Bhawan Palace and Mehrangarh Fort in the morning. Later drive to Mount Abu. Overnight stay at Mount Abu.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Mount Abu Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Nakki Lake, Dilwara Temples, and Sunset Point. Overnight stay at Mount Abu.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Mount Abu → Udaipur via Chittorgarh",
            distance: "Road transfer",
            description:
              "Drive to Udaipur en route visiting Chittorgarh Fort. Overnight stay at Udaipur.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Udaipur Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Moti Magri, Fateh Sagar Lake, Udaipur City Palace, and other major attractions. Overnight stay at Udaipur.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Udaipur → Pushkar via Haldighati",
            distance: "Road transfer",
            description:
              "Travel to Pushkar via historic Haldighati. Overnight stay at Pushkar.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Pushkar & Ajmer → Jaipur",
            distance: "Road transfer",
            description:
              "Early morning visit Pushkar and Ajmer Sharif (auto at own cost), then proceed to Jaipur. Overnight stay at Jaipur.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Jaipur Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Amber Fort, Jantar Mantar, Hawa Mahal, Jal Mahal, City Palace, Nahargarh Fort, and other attractions. Evening free for personal activities. Overnight stay at Jaipur.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Jaipur → Sealdah",
            distance: "Train journey",
            description:
              "After lunch transfer to Jaipur Railway Station and board 12988 train for return journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 14,
            title: "Arrival at Sealdah",
            distance: "Train arrival",
            description:
              "Arrive at Sealdah Railway Station with sweet memories of your Rajasthan tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/rajasthan-grand-tour"
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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Tirupati",
            distance: "Railway station transfer",
            description:
              "Arrive at Tirupati Railway Station and transfer to hotel. Overnight stay at Tirupati.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Tirupati Balaji Darshan",
            distance: "Local visit",
            description:
              "Early morning visit to Lord Tirupati Balaji Temple for darshan and puja. Return to hotel. Overnight stay at Tirupati.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Tirupati → Chennai",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Chennai. Overnight stay at Chennai.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Chennai Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Marina Beach, Gandhi Ghat, and Chennai local market. Overnight stay at Chennai.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Chennai → Puducherry",
            distance: "Road transfer",
            description:
              "Travel to Puducherry and visit Seaside Promenade, Sri Aurobindo Ashram, Rock Beach, Paradise Beach, and Manakula Vinayagar Temple. Overnight stay at Puducherry.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Puducherry → Madurai",
            distance: "Road transfer",
            description:
              "After breakfast drive to Madurai. Evening visit to Meenakshi Temple. Overnight stay at Madurai.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Madurai → Rameshwaram",
            distance: "Road transfer",
            description:
              "Proceed to Rameshwaram and visit Ramanathaswamy Temple and Dhanushkodi. Overnight stay at Rameshwaram.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Rameshwaram → Kanyakumari",
            distance: "Road transfer",
            description:
              "After breakfast travel to Kanyakumari. Overnight stay at Kanyakumari.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Kanyakumari Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Vivekananda Rock Memorial and Kanyakumari Temple. Overnight stay at Kanyakumari.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Kanyakumari / Nagercoil → Kolkata",
            distance: "Train journey",
            description:
              "After breakfast transfer to Kanyakumari / Nagercoil Junction Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Arrival at Howrah / Shalimar",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Shalimar Railway Station with sweet memories of your South India tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/south-india-temple-tour"
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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Jammu. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Jammu → Srinagar",
            distance: "Train transfer",
            description:
              "Arrive at Jammu Railway Station and board Vande Bharat for Srinagar. Transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Srinagar → Kargil",
            distance: "201 km",
            description:
              "Drive through Sonamarg, Zoji La Pass, Drass, and Kargil War Memorial before reaching Kargil. Overnight stay at Kargil.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Kargil → Leh",
            distance: "215 km",
            description:
              "Travel via Mulbek, Lamayuru, Moonland, and the confluence of Indus and Zanskar Rivers before reaching Leh. Overnight stay at Leh.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Leh Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Leh Monastery, Leh Palace, Zorawar Fort, Shanti Stupa, Hall of Fame, Shey Palace, Shey Monastery, and Rancho School. Overnight stay at Leh.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Leh → Nubra Valley",
            distance: "150 km",
            description:
              "Cross the famous Khardung La Pass and enter Nubra Valley. Optional camel ride available at own cost. Overnight stay at Nubra Valley.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Nubra Valley → Turtuk Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to Turtuk village near the Indo-Pak border region. Return to Nubra Valley for overnight stay.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Nubra Valley → Pangong Lake",
            distance: "274 km",
            description:
              "Drive via Chang La Pass to the spectacular Pangong Lake. Enjoy the lakeside scenery and overnight stay near Pangong.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Pangong Lake → Hanle",
            distance: "310 km",
            description:
              "Proceed to the remote Hanle region known for its vast high-altitude plains and observatory area. Overnight stay at Hanle.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Hanle → Leh",
            distance: "253 km",
            description:
              "Return to Leh through the scenic Ladakhi landscape. Overnight stay at Leh.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Leh → Keylong",
            distance: "356 km",
            description:
              "Drive via Tanglang La, Baralacha La, and the high Himalayan passes to Keylong. Overnight stay at Keylong.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Keylong → Manali",
            distance: "70 km",
            description:
              "Travel through Atal Tunnel and Sissu village before reaching Manali. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 14,
            title: "Manali Local Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Hadimba Temple, Tibetan Monastery, Handicraft Centre, and Old Vashisht Village. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 15,
            title: "Manali → Kalka / Chandigarh",
            distance: "266 km",
            description:
              "Drive to Kalka / Chandigarh Railway Station and board Netaji Express for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 16,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 17,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with unforgettable memories of your Ladakh expedition.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/ladakh-grand-expedition"
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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Vizag",
            distance: "Railway station transfer",
            description:
              "Arrive at Visakhapatnam Railway Station and transfer to hotel. After lunch visit Rushikonda Beach, Kailashgiri, Submarine Museum, Lighthouse, and Ramanaidu Studio. Overnight stay at Vizag.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Vizag Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Simhachalam Hill Temple in the morning. After lunch explore R.K. Beach and Yarada Beach. Overnight stay at Vizag.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Araku Valley Excursion",
            distance: "Excursion by train / car",
            description:
              "Morning excursion to Araku Valley by train or car. Visit Borra Caves, Tribal Museum, gardens, and Chaparai. Return to Vizag for overnight stay.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Vizag → Hyderabad",
            distance: "Train journey",
            description:
              "After lunch transfer to Visakhapatnam Railway Station and board train for Hyderabad. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Hyderabad Sightseeing",
            distance: "Local sightseeing",
            description:
              "Arrive at Hyderabad and transfer to hotel. Visit Charminar, Golconda Fort, Salar Jung Museum, Birla Temple, Lumbini Park, Chilkur Balaji Temple, and Buddha Statue. Overnight stay at Hyderabad.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Hyderabad → Mallikarjuna Jyotirlinga",
            distance: "Road transfer",
            description:
              "After breakfast proceed to Mallikarjuna Jyotirlinga temple for darshan. Overnight stay at Mallikarjuna.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Mallikarjuna → Hyderabad",
            distance: "Road transfer",
            description:
              "After breakfast return to Hyderabad. Overnight stay at Hyderabad.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Ramoji Film City",
            distance: "Excursion",
            description:
              "Full-day excursion to the world-famous Ramoji Film City. Overnight stay at Hyderabad.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Hyderabad → Kolkata",
            distance: "Train journey",
            description:
              "Check out from hotel and transfer to Hyderabad Railway Station for return train journey to Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Arrival at Howrah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of your South India tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/vizag-hyderabad-mallikarjuna-tour"
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
      { id: 6, icon: MapPinned, label: "Tour Assistance" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Jammu. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Jammu → Katra (Vaishno Devi)",
            distance: "Road transfer",
            description:
              "Arrive at Jammu Railway Station and transfer to Katra. Evening Vaishno Devi yatra and darshan. Return to hotel. Overnight stay at Katra.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Katra Leisure Day",
            distance: "Leisure",
            description:
              "Full day rest and leisure at Katra. Overnight stay at Katra.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Katra → Srinagar",
            distance: "Road transfer",
            description:
              "Drive to Srinagar and transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Sonamarg Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to Sonamarg and return to Srinagar. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Gulmarg Excursion",
            distance: "Excursion",
            description:
              "Visit Gulmarg and return to Srinagar in the evening. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Srinagar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Tulip Garden, Mughal Gardens, Chashme Shahi Garden, and local attractions. Optional Shikara ride on Dal Lake at own cost. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Srinagar → Pahalgam",
            distance: "Road transfer",
            description:
              "Drive to Pahalgam and enjoy the beautiful valley surroundings. Overnight stay at Pahalgam.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Pahalgam Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Chandanwari, Betab Valley, and Aru Valley (optional and at own cost). Overnight stay at Pahalgam.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Pahalgam → Patnitop → Jammu",
            distance: "Road transfer",
            description:
              "Visit Patnitop, Natha Top, and Nag Temple, then proceed to Jammu Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Arrival at Howrah / Sealdah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of your Kashmir tour.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey towards Amritsar. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Amritsar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Golden Temple, Jallianwala Bagh, and Wagah Border ceremony. Overnight stay at Amritsar.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Amritsar → Katra (Vaishno Devi)",
            distance: "Road transfer",
            description:
              "Proceed to Katra and begin Vaishno Devi yatra in the evening. Return to hotel after darshan. Overnight stay at Katra.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Katra Leisure Day",
            distance: "Leisure",
            description:
              "Full day rest and leisure at Katra. Overnight stay at Katra.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Katra → Srinagar",
            distance: "Road transfer",
            description:
              "Drive to Srinagar and transfer to hotel on arrival. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Sonamarg Excursion",
            distance: "Excursion",
            description:
              "Full-day excursion to Sonamarg and return to Srinagar. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Gulmarg Excursion",
            distance: "Excursion",
            description:
              "Visit Gulmarg and return to Srinagar in the evening. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Srinagar Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Tulip Garden, Mughal Gardens, Chashme Shahi Garden, and local attractions. Optional Shikara ride on Dal Lake at own cost. Overnight stay at Srinagar.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Srinagar → Pahalgam",
            distance: "Road transfer",
            description:
              "Drive to Pahalgam and enjoy the beautiful valley surroundings. Overnight stay at Pahalgam.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Pahalgam Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Chandanwari, Betab Valley, and Aru Valley (optional and at own cost). Overnight stay at Pahalgam.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Pahalgam → Patnitop",
            distance: "Road transfer",
            description:
              "Proceed to Patnitop and enjoy the hill station surroundings. Overnight stay at Patnitop.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Patnitop → Jammu",
            distance: "Road transfer",
            description:
              "Visit Natha Top and Nag Temple before proceeding to Jammu Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey towards Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 15,
            title: "Arrival at Howrah / Sealdah",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of your Kashmir tour.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per tour schedule"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/kashmir-tour"
  },
  {
    id: 17,

    category: "domestic",

    slug: "kinnaur-la-hul-spiti",

    title: "Kinnaur La Hul Spiti",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.2,

    location: "Shimla • Sarahan • Sangla • Kalpa • Tabo • Kaza • Chandratal • Manali",

    facilities: [
      { id: 1, icon: Hotel, label: "Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Mountain Circuit" },
      { id: 6, icon: Plane, label: "Train Included" }
    ],

    overview:
      "Experience the breathtaking Himalayan circuit through Kinnaur, Spiti, Chandratal, and Manali. This adventurous journey covers monasteries, high-altitude villages, mountain passes, lakes, and spectacular valley landscapes across Himachal Pradesh.",

    packages: {
      package1: {
        duration: "12 Nights / 13 Days",
        price: 30500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Ambala",
            distance: "Train journey",
            description:
              "Board train from Kolkata Railway Station for Ambala. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 2,
            title: "Ambala → Shimla",
            distance: "115 km",
            description:
              "Arrive at Ambala and transfer to Shimla. Visit Mall Road and Kali Bari by walk. Overnight stay at Shimla.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Shimla → Sarahan",
            distance: "170 km",
            description:
              "After breakfast proceed to Sarahan. Overnight stay at Sarahan.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Sarahan → Sangla",
            distance: "95 km",
            description:
              "Visit Bhimakali Temple and Rajbari, then drive to Sangla via Karcham. Overnight stay at Sangla.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Sangla → Chitkul → Kalpa",
            distance: "90 km",
            description:
              "Excursion to Chitkul, then continue to Kalpa via Reckong Peo. Visit Roghi Village, Chini Village, and Suicide Point. Overnight stay at Kalpa.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Kalpa → Tabo",
            distance: "150 km",
            description:
              "Drive through the dramatic Spiti landscape via Nako Lake and reach Tabo. Overnight stay at Tabo.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Tabo → Kaza",
            distance: "50 km",
            description:
              "Visit Tabo Monastery, then proceed to Kaza via Dhankar Monastery and Kaza Monastery. Overnight stay at Kaza.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Kaza Local Sightseeing",
            distance: "Excursion",
            description:
              "Visit Key Monastery and Kibber Village. Return to Kaza for overnight stay.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Kaza → Chandratal",
            distance: "95 km",
            description:
              "Drive via Kunzum Pass to Chandratal Lake. Overnight stay at Chandratal.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Chandratal → Manali",
            distance: "130 km",
            description:
              "Proceed to Manali via Sissu Village and Atal Tunnel. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Manali Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Hidimba Temple, Tibetan Monastery, Handicraft Centre, and Old Vashisht Village. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Manali → Ambala",
            distance: "300 km",
            description:
              "After breakfast transfer to Ambala Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Kinnaur and Spiti.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Chandigarh/Kalka → Shimla",
            distance: "115 km",
            description:
              "Transfer to Shimla and visit Mall Road and Kali Bari. Overnight stay at Shimla.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Shimla Local Sightseeing",
            distance: "Excursion",
            description:
              "Visit Kufri, Fagu, and Green Valley. Overnight stay at Shimla.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Shimla → Sarahan",
            distance: "170 km",
            description:
              "Proceed to Sarahan. Overnight stay at Sarahan.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Sarahan → Sangla",
            distance: "95 km",
            description:
              "Visit Bhimakali Temple and drive to Sangla via Karcham. Overnight stay at Sangla.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Sangla → Chitkul → Kalpa",
            distance: "90 km",
            description:
              "Visit Chitkul, then continue to Kalpa via Reckong Peo and local viewpoints. Overnight stay at Kalpa.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Kalpa → Tabo",
            distance: "150 km",
            description:
              "Drive to Tabo via Nako Lake. Overnight stay at Tabo.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Tabo → Kaza",
            distance: "50 km",
            description:
              "Visit Tabo Monastery, Dhankar Monastery, Key Monastery, Hikkim, and Kibber before reaching Kaza. Overnight stay at Kaza.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Kaza → Chandratal",
            distance: "95 km",
            description:
              "Travel via Kunzum Pass to Chandratal Lake. Overnight stay at Chandratal.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Chandratal → Manali",
            distance: "130 km",
            description:
              "Drive to Manali via Sissu Village and Atal Tunnel. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Manali Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Hidimba Temple, Tibetan Monastery, Handicraft Centre, and Old Vashisht Village. Overnight stay at Manali.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Manali → Chandigarh/Kalka",
            distance: "300 km",
            description:
              "Transfer to Chandigarh/Kalka Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 14,
            title: "Train Journey",
            distance: "Full day train journey",
            description:
              "Continue return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 15,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with unforgettable memories of the Himalayan circuit.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per itinerary"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/kinnaur-la-hul-spiti"
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

    location: "Guwahati • Shillong • Cherrapunji • Dawki • Mawlynnong • Kaziranga",

    facilities: [
      { id: 1, icon: Hotel, label: "Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Nature & Waterfalls" },
      { id: 6, icon: Plane, label: "Train Included" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Guwahati",
            distance: "Railway station transfer",
            description:
              "Arrive at Guwahati and transfer to hotel. Visit Vasistha Ashram, Kamakhya Temple, and Balaji Temple depending on arrival time. Overnight stay at Guwahati.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Guwahati → Shillong",
            distance: "100 km",
            description:
              "After breakfast transfer to Shillong via the scenic Borapani (Umiam) Lake. Overnight stay at Shillong.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Cherrapunji Excursion",
            distance: "Full day excursion",
            description:
              "Visit Nohkalikai Falls, Seven Sisters Falls, Dainthlen Falls, Thangkharang Park, Elephanta Falls, Living Root Bridge, and Ramakrishna Mission. Return to Shillong for overnight stay.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Mawlynnong & Dawki",
            distance: "Full day excursion",
            description:
              "Explore Mawlynnong village and enjoy the crystal-clear Dawki River. Overnight stay at Shillong.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Shillong → Guwahati",
            distance: "100 km",
            description:
              "After breakfast return to Guwahati. Overnight stay at Guwahati.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Departure from Guwahati",
            distance: "Railway station transfer",
            description:
              "After breakfast transfer to Guwahati Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Meghalaya.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Guwahati",
            distance: "Railway station transfer",
            description:
              "Arrive at Guwahati and transfer to hotel. Visit Vasistha Ashram, Kamakhya Temple, and Balaji Temple depending on arrival time. Overnight stay at Guwahati.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Guwahati → Shillong",
            distance: "100 km",
            description:
              "After breakfast transfer to Shillong via Borapani Lake. Overnight stay at Shillong.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Cherrapunji Excursion",
            distance: "Full day excursion",
            description:
              "Visit Nohkalikai Falls, Seven Sisters Falls, Dainthlen Falls, Thangkharang Park, Elephanta Falls, Living Root Bridge, and Ramakrishna Mission. Return to Shillong for overnight stay.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Mawlynnong & Dawki",
            distance: "Full day excursion",
            description:
              "Explore Mawlynnong village and enjoy the beautiful Dawki River. Overnight stay at Shillong.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Shillong → Kaziranga",
            distance: "270 km",
            description:
              "Transfer to Kaziranga National Park. Evening tribal dance (optional & own cost). Overnight stay at Kaziranga.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Kaziranga → Guwahati",
            distance: "220 km",
            description:
              "Early morning jungle safari (optional & own cost). After breakfast return to Guwahati. Overnight stay at Guwahati.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Departure from Guwahati",
            distance: "Railway station transfer",
            description:
              "After breakfast transfer to Guwahati Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Meghalaya and Kaziranga.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per itinerary"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/meghalaya-tour"
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

    location: "Agra • Mathura • Vrindavan • Delhi • Haridwar • Rishikesh • Mussoorie • Varanasi",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Temple & Heritage Tour" },
      { id: 6, icon: Plane, label: "Train Included" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Agra",
            distance: "Railway station transfer",
            description:
              "Arrive at Agra Railway Station and transfer to hotel. Overnight stay at Agra.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Agra → Vrindavan",
            distance: "80 km",
            description:
              "Visit Taj Mahal, Agra Fort, and Fatehpur Sikri. Later proceed to Vrindavan. Overnight stay at Vrindavan.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Mathura & Vrindavan",
            distance: "Local sightseeing",
            description:
              "Visit Shri Krishna Janmabhoomi, ISKCON Temple, Madan Mohan Temple, and Shahji Temple. Overnight stay at Vrindavan.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Vrindavan → Delhi",
            distance: "180 km",
            description:
              "Early morning transfer to Delhi and check in to hotel. Overnight stay at Delhi.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Delhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Rajghat, Qutub Minar, Red Fort, Indira Museum, Lotus Temple, and India Gate. Overnight stay at Delhi.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Delhi → Haridwar",
            distance: "Train journey",
            description:
              "Take morning train to Haridwar. Enjoy Ganga bath and evening Ganga Aarti. Overnight stay at Haridwar.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Rishikesh Excursion",
            distance: "Local excursion",
            description:
              "Visit Ram Jhula and Laxman Jhula in Rishikesh. Return to Haridwar for overnight stay.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Mussoorie Excursion & Departure",
            distance: "Local excursion + train",
            description:
              "Visit Kempty Falls and Sahastradhara in Mussoorie. Return to Haridwar and board train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey back to Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of North India.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Agra",
            distance: "Railway station transfer",
            description:
              "Arrive at Agra Railway Station and transfer to hotel. Overnight stay at Agra.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Agra → Vrindavan",
            distance: "80 km",
            description:
              "Visit Taj Mahal, Agra Fort, and Fatehpur Sikri. Later proceed to Vrindavan. Overnight stay at Vrindavan.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Mathura & Vrindavan Temples",
            distance: "Local sightseeing",
            description:
              "Visit Shri Krishna Janmabhoomi, ISKCON Temple, Madan Mohan Temple, Shahji Temple, and Prem Mandir. Overnight stay at Vrindavan.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Barsana & Govardhan",
            distance: "Local sightseeing",
            description:
              "Visit Banke Bihari Temple, Nidhivan, Bharat Mata Temple, Barsana, Govardhan Hill, Radha Kund, and Shyam Kund. Overnight stay at Vrindavan.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Vrindavan → Delhi",
            distance: "180 km",
            description:
              "Early morning transfer to Delhi and check in to hotel. Overnight stay at Delhi.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Delhi Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Rajghat, Qutub Minar, Red Fort, Indira Museum, Lotus Temple, and India Gate. Overnight stay at Delhi.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Delhi → Haridwar",
            distance: "Train journey",
            description:
              "Take morning train to Haridwar. Enjoy Ganga bath and evening Ganga Aarti. Overnight stay at Haridwar.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Rishikesh Excursion",
            distance: "Local excursion",
            description:
              "Visit Ram Jhula and Laxman Jhula in Rishikesh. Return to Haridwar for overnight stay.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Mussoorie Excursion → Varanasi",
            distance: "Local excursion + train",
            description:
              "Visit Kempty Falls and Sahastradhara in Mussoorie. Return to Haridwar and board train for Varanasi. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Varanasi Arrival & Ganga Aarti",
            distance: "Railway station transfer",
            description:
              "Arrive at Varanasi and visit Annapurna Temple, Birla Temple, and Kashi Vishwanath Temple. Evening Ganga Aarti; boat ride optional. Overnight stay at Varanasi.",
            images: [null, null]
          },
          {
            day: 12,
            title: "Departure from Varanasi",
            distance: "Railway station transfer",
            description:
              "After breakfast transfer to Varanasi Railway Station for return train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 13,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of North India.",
            images: [null, null]
          }
        ]
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
      "All possible sightseeing as per itinerary"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/north-india-tour"
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

    location: "Gangtok • Lachen • Gurudongmar Lake • Lachung • Yumthang Valley • Nathula • Pelling",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Mountain & Valley Tour" },
      { id: 6, icon: Plane, label: "Train Included" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Arrival at Gangtok",
            distance: "NJP → Gangtok",
            description:
              "Arrive at NJP Railway Station and transfer to Gangtok. Evening visit to MG Marg and Mall Road on foot. Overnight stay at Gangtok.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Gangtok → Lachen",
            distance: "Approx. 120 km",
            description:
              "After breakfast proceed to Lachen with en-route sightseeing. Overnight stay at Lachen.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Lachen → Gurudongmar Lake → Lachung",
            distance: "Approx. 130 km",
            description:
              "Visit Gurudongmar Lake in the morning and continue to Lachung. Overnight stay at Lachung.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Lachung → Yumthang Valley → Gangtok",
            distance: "Approx. 125 km",
            description:
              "Visit Yumthang Valley and optional Zero Point. Return to Gangtok. Overnight stay at Gangtok.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Gangtok Excursion",
            distance: "Local excursion",
            description:
              "Visit Tsomgo Lake, Baba Mandir, and Nathula Pass. Overnight stay at Gangtok.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Gangtok → Pelling",
            distance: "Approx. 115 km",
            description:
              "After breakfast transfer to Pelling. Overnight stay at Pelling.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Pelling Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Pelling local attractions including the famous 5 Points sightseeing circuit and Singshore Bridge. Overnight stay at Pelling.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Pelling → NJP → Kolkata",
            distance: "Approx. 140 km + train",
            description:
              "Transfer to NJP Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah / Sealdah Railway Station with sweet memories of North Sikkim.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per itinerary"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/north-sikkim-tour"
  },
  {
    id: 21,

    category: "domestic",

    slug: "goa-tour",

    title: "Goa",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.0,

    location: "North Goa • South Goa • Madgaon",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Beach Tour" },
      { id: 6, icon: Plane, label: "Train Included" }
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Arrival at Goa",
            distance: "Railway station transfer",
            description:
              "Arrive at Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.",
            images: [null, null]
          },
          {
            day: 4,
            title: "North Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach, and Miramar Beach. Return to hotel for overnight stay.",
            images: [null, null]
          },
          {
            day: 5,
            title: "South Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit St. Xavier's Church, Mangesh Temple, Santadurga Temple, and Colva Beach. Return to hotel for overnight stay.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Leisure Day",
            distance: "Free day",
            description:
              "Full day free for personal activities, shopping, beach time, or optional water sports. Overnight stay at Goa.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Goa → Kolkata",
            distance: "Train journey",
            description:
              "Early morning check-out and transfer to Madgaon Railway Station. Board train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar Railway Station with sweet memories of Goa.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Train Journey",
            distance: "Train journey",
            description:
              "Full day train journey. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Arrival at Goa",
            distance: "Railway station transfer",
            description:
              "Arrive at Madgaon Railway Station and transfer to hotel. Overnight stay at Goa.",
            images: [null, null]
          },
          {
            day: 4,
            title: "North Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Dolphin Point, Aguada Fort, Baga Beach, Calangute Beach, and Miramar Beach. Return to hotel for overnight stay.",
            images: [null, null]
          },
          {
            day: 5,
            title: "South Goa Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit St. Xavier's Church, Mangesh Temple, Santadurga Temple, and Colva Beach. Return to hotel for overnight stay.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Leisure Day",
            distance: "Free day",
            description:
              "Full day free for personal activities, shopping, beach time, or optional water sports. Overnight stay at Goa.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Extra Leisure Day",
            distance: "Free day",
            description:
              "Enjoy an additional full day in Goa for relaxation, beach activities, local markets, cafés, or optional sightseeing. Overnight stay at Goa.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Goa → Kolkata",
            distance: "Train journey",
            description:
              "Early morning check-out and transfer to Madgaon Railway Station. Board train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Shalimar Railway Station with sweet memories of Goa.",
            images: [null, null]
          }
        ]
      }
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
      "All possible sightseeing as per itinerary"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/goa-tour"
  },

  // international
  {
    id: 100,

    category: "international",

    slug: "nepal-tour",

    title: "Nepal",

    image: null,

    gallery: [null, null, null, null, null],

    perPerson: true,

    rating: 9.2,

    location: "Kathmandu • Pokhara • Muktinath • Chitwan • Raxaul",

    facilities: [
      { id: 1, icon: Hotel, label: "Deluxe Hotel Stay" },
      { id: 2, icon: Utensils, label: "Meals Included" },
      { id: 3, icon: Car, label: "Transportation" },
      { id: 4, icon: Camera, label: "Sightseeing" },
      { id: 5, icon: MapPinned, label: "Temple & Nature Tour" },
      { id: 6, icon: Plane, label: "Train Included" }
    ],

    overview:
      "Experience the spiritual, cultural, and scenic beauty of Nepal with Kathmandu, Pokhara, Muktinath, and Chitwan. Explore ancient temples, Himalayan valleys, lakes, waterfalls, monasteries, and wildlife landscapes in one unforgettable journey.",

    packages: {
      package1: {
        duration: "08 Nights / 09 Days",
        price: 26500,
        itinerary: [
          {
            day: 1,
            title: "Kolkata → Raxaul",
            distance: "Train journey",
            description:
              "Board train (13021) from Howrah Railway Station for Raxaul. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 2,
            title: "Raxaul → Kathmandu",
            distance: "Approx. 140 km",
            description:
              "Arrive at Raxaul and transfer to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Kathmandu Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kathmandu Durbar Square, Boudhanath Stupa, Swayambhunath (Monkey Temple), Patan, and Pashupatinath Temple. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Nagarkot & Bhaktapur",
            distance: "Local excursion",
            description:
              "Visit Nagarkot and Bhaktapur and return to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Kathmandu → Pokhara",
            distance: "Approx. 200 km",
            description:
              "Drive to Pokhara via Manakamana (ropeway at own cost). Overnight stay at Pokhara.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Pokhara → Muktinath",
            distance: "Approx. 170 km",
            description:
              "Proceed to Muktinath and visit Muktinath Temple. Overnight stay at Muktinath.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Muktinath → Pokhara",
            distance: "Approx. 170 km",
            description:
              "Return to Pokhara after breakfast. Overnight stay at Pokhara.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Pokhara → Raxaul",
            distance: "Road transfer + train",
            description:
              "Transfer to Raxaul Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Nepal.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Raxaul → Chitwan",
            distance: "Approx. 160 km",
            description:
              "Arrive at Raxaul and proceed to Chitwan. Overnight stay at Chitwan.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Chitwan → Pokhara",
            distance: "Approx. 150 km",
            description:
              "Early morning jungle safari, then proceed to Pokhara. Overnight stay at Pokhara.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Pokhara Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Devi’s Fall, Gupteshwar Cave & Temple, Mountaineering Museum, and Tal Barahi Temple. Overnight stay at Pokhara.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Pokhara → Kathmandu",
            distance: "Approx. 200 km",
            description:
              "Drive to Kathmandu via Manakamana (ropeway at own cost). Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Kathmandu Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kathmandu Durbar Square, Boudhanath Stupa, Monkey Temple, Patan, and Pashupatinath Temple. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Nagarkot & Bhaktapur",
            distance: "Local excursion",
            description:
              "Visit Nagarkot and Bhaktapur and return to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Kathmandu → Birgunj / Raxaul",
            distance: "Approx. 140 km",
            description:
              "Drive to Birgunj / Raxaul. Overnight stay at Birgunj / Raxaul.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Raxaul → Kolkata",
            distance: "Train journey",
            description:
              "Board train from Raxaul for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Nepal.",
            images: [null, null]
          }
        ]
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
            images: [null, null]
          },
          {
            day: 2,
            title: "Raxaul → Kathmandu",
            distance: "Approx. 140 km",
            description:
              "Arrive at Raxaul and transfer to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 3,
            title: "Kathmandu Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Kathmandu Durbar Square, Boudhanath Stupa, Monkey Temple, Patan, and Pashupatinath Temple. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 4,
            title: "Nagarkot & Bhaktapur",
            distance: "Local excursion",
            description:
              "Visit Nagarkot and Bhaktapur and return to Kathmandu. Overnight stay at Kathmandu.",
            images: [null, null]
          },
          {
            day: 5,
            title: "Kathmandu → Pokhara",
            distance: "Approx. 200 km",
            description:
              "Drive to Pokhara via Manakamana (ropeway at own cost). Overnight stay at Pokhara.",
            images: [null, null]
          },
          {
            day: 6,
            title: "Pokhara → Muktinath",
            distance: "Approx. 170 km",
            description:
              "Proceed to Muktinath and visit Muktinath Temple. Overnight stay at Muktinath.",
            images: [null, null]
          },
          {
            day: 7,
            title: "Muktinath → Pokhara",
            distance: "Approx. 170 km",
            description:
              "Return to Pokhara after breakfast. Overnight stay at Pokhara.",
            images: [null, null]
          },
          {
            day: 8,
            title: "Pokhara Sightseeing",
            distance: "Local sightseeing",
            description:
              "Visit Devi’s Fall, Gupteshwar Cave & Temple, Mountaineering Museum, and Tal Barahi Temple. Overnight stay at Pokhara.",
            images: [null, null]
          },
          {
            day: 9,
            title: "Pokhara → Chitwan",
            distance: "Approx. 150 km",
            description:
              "Proceed to Chitwan. Overnight stay at Chitwan.",
            images: [null, null]
          },
          {
            day: 10,
            title: "Chitwan → Raxaul",
            distance: "Road transfer + train",
            description:
              "Early morning jungle safari (optional & own cost). After breakfast transfer to Raxaul Railway Station and board train for Kolkata. Overnight stay in train.",
            images: [null, null]
          },
          {
            day: 11,
            title: "Arrival at Kolkata",
            distance: "Train arrival",
            description:
              "Arrive at Howrah Railway Station with sweet memories of Nepal.",
            images: [null, null]
          }
        ]
      }
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
      "Muktinath permit (Package 3)"
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
      "Any item not mentioned above"
    ],

    whatsapp: "https://wa.me/918910555711",

    phone: "tel:+918910555711",

    enquiryLink: "#",

    detailsLink: "/packages/nepal-tour"
  }

];

export default packages;