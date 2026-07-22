import {
  Plane,
  Hotel,
  Utensils,
  Car,
  Camera,
  MapPinned,
} from "lucide-react";

const packages = [
  {
    id: 1,

    category: "domestic",

    slug: "magical-meghalaya",

    title: "Magical Meghalaya",

    image: "...",

    gallery: [
      "...",
      "...",
      "...",
      "...",
      "..."
    ],

    price: 19499,

    perPerson: true,

    rating: 8.0,

    duration: "05 Days / 04 Nights",

    location: "Shillong • Guwahati • Cherrapunjee • Mawlynnong",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Cab Transfer" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Guide" },
    ],

    overview:
      "Magical Meghalaya, the 'Abode of Clouds' enchants visitors with lush green valleys, crystal-clear rivers, waterfalls, caves, and living root bridges. The package combines adventure, nature, local culture, and breathtaking landscapes for an unforgettable journey.",

    itinerary: [
      {
        day: 1,
        title: "Guwahati Airport → Shillong",
        distance: "100 kms / 3 hrs",
        description:
          "Arrive at Guwahati Airport and transfer to Shillong. Visit Umium Lake before checking into your hotel.",
        images: ["...", "...", "..."],
      },

      {
        day: 2,
        title: "Shillong → Cherrapunjee",
        distance: "60 kms / 3 hrs",
        description:
          "Visit Nohkalikai Falls, Mawsmai Cave and Seven Sisters Falls.",
        images: ["...", "...", "..."],
      },

      {
        day: 3,
        title: "Dawki & Mawlynnong",
        distance: "120 kms / 4 hrs",
        description:
          "Visit Umngot River, Living Root Bridge and Asia's Cleanest Village.",
        images: ["...", "...", "..."],
      },

      {
        day: 4,
        title: "Shillong Sightseeing",
        distance: "100 kms",
        description:
          "Visit Ward's Lake, Don Bosco Museum and Police Bazaar.",
        images: ["...", "...", "..."],
      },

      {
        day: 5,
        title: "Shillong → Guwahati Departure",
        distance: "100 kms",
        description:
          "Visit Kamakhya Temple and transfer to the airport.",
        images: ["...", "...", "..."],
      },
    ],

    included: [
      "Accommodation",
      "Breakfast",
      "Private Vehicle",
      "Sightseeing",
      "Hotel Taxes",
      "Driver Allowance",
    ],

    excluded: [
      "Air Fare",
      "Train Fare",
      "Personal Expenses",
      "Insurance",
      "Adventure Activities",
      "Entry Fees",
      "GST",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/magical-meghalaya",
  },
  {
    id: 2,

    category: "international",

    slug: "beautiful-bali",

    title: "Beautiful Bali",

    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",

    gallery: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
    ],

    price: 54999,

    perPerson: true,

    rating: 9.4,

    duration: "06 Days / 05 Nights",

    location: "Bali • Ubud • Kuta • Nusa Penida",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Luxury Hotel" },
      { id: 3, icon: Utensils, label: "Breakfast Included" },
      { id: 4, icon: Car, label: "Private Transfers" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Local Guide" },
    ],

    overview:
      "Experience the tropical paradise of Bali with pristine beaches, stunning temples, lush rice terraces, waterfalls, and vibrant nightlife. This carefully curated international package offers a perfect blend of relaxation, adventure, culture, and luxury.",

    itinerary: [
      {
        day: 1,
        title: "Arrival at Bali",
        distance: "Airport → Kuta",
        description:
          "Arrival at Ngurah Rai International Airport. Meet our representative and transfer to your hotel in Kuta. Evening free for leisure.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 2,
        title: "Kintamani & Ubud Tour",
        distance: "80 kms",
        description:
          "Visit Tegenungan Waterfall, Ubud Monkey Forest, Coffee Plantation, Tegallalang Rice Terrace and Mount Batur View Point.",
        images: [
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 3,
        title: "Nusa Penida Island Tour",
        distance: "Full Day",
        description:
          "Explore Kelingking Beach, Broken Beach, Angel's Billabong and Crystal Bay with speed boat transfers.",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 4,
        title: "Tanah Lot & Sunset Tour",
        distance: "60 kms",
        description:
          "Visit the famous Tanah Lot Temple, enjoy Bali Swing experience and witness the spectacular sunset over the Indian Ocean.",
        images: [
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        ],
      },

      {
        day: 5,
        title: "Leisure & Shopping",
        distance: "Local",
        description:
          "Spend the day at leisure exploring Bali's beaches, cafes and shopping markets. Optional water sports available.",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 6,
        title: "Departure",
        distance: "Hotel → Airport",
        description:
          "After breakfast, check out from the hotel and transfer to Ngurah Rai International Airport for your onward journey.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },
    ],

    included: [
      "Round Trip Flight",
      "5 Nights Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Private Sightseeing",
      "English Speaking Guide",
      "All Applicable Taxes",
    ],

    excluded: [
      "Visa Charges",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Water Sports",
      "Entry Fees (where applicable)",
      "GST & TCS",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/beautiful-bali",
  },
  {
    id: 1,

    category: "domestic",

    slug: "magical-meghalaya",

    title: "Magical Meghalaya",

    image: "...",

    gallery: [
      "...",
      "...",
      "...",
      "...",
      "..."
    ],

    price: 19499,

    perPerson: true,

    rating: 8.0,

    duration: "05 Days / 04 Nights",

    location: "Shillong • Guwahati • Cherrapunjee • Mawlynnong",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Cab Transfer" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Guide" },
    ],

    overview:
      "Magical Meghalaya, the 'Abode of Clouds' enchants visitors with lush green valleys, crystal-clear rivers, waterfalls, caves, and living root bridges. The package combines adventure, nature, local culture, and breathtaking landscapes for an unforgettable journey.",

    itinerary: [
      {
        day: 1,
        title: "Guwahati Airport → Shillong",
        distance: "100 kms / 3 hrs",
        description:
          "Arrive at Guwahati Airport and transfer to Shillong. Visit Umium Lake before checking into your hotel.",
        images: ["...", "...", "..."],
      },

      {
        day: 2,
        title: "Shillong → Cherrapunjee",
        distance: "60 kms / 3 hrs",
        description:
          "Visit Nohkalikai Falls, Mawsmai Cave and Seven Sisters Falls.",
        images: ["...", "...", "..."],
      },

      {
        day: 3,
        title: "Dawki & Mawlynnong",
        distance: "120 kms / 4 hrs",
        description:
          "Visit Umngot River, Living Root Bridge and Asia's Cleanest Village.",
        images: ["...", "...", "..."],
      },

      {
        day: 4,
        title: "Shillong Sightseeing",
        distance: "100 kms",
        description:
          "Visit Ward's Lake, Don Bosco Museum and Police Bazaar.",
        images: ["...", "...", "..."],
      },

      {
        day: 5,
        title: "Shillong → Guwahati Departure",
        distance: "100 kms",
        description:
          "Visit Kamakhya Temple and transfer to the airport.",
        images: ["...", "...", "..."],
      },
    ],

    included: [
      "Accommodation",
      "Breakfast",
      "Private Vehicle",
      "Sightseeing",
      "Hotel Taxes",
      "Driver Allowance",
    ],

    excluded: [
      "Air Fare",
      "Train Fare",
      "Personal Expenses",
      "Insurance",
      "Adventure Activities",
      "Entry Fees",
      "GST",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/magical-meghalaya",
  },
  {
    id: 1,

    category: "domestic",

    slug: "magical-meghalaya",

    title: "Magical Meghalaya",

    image: "...",

    gallery: [
      "...",
      "...",
      "...",
      "...",
      "..."
    ],

    price: 19499,

    perPerson: true,

    rating: 8.0,

    duration: "05 Days / 04 Nights",

    location: "Shillong • Guwahati • Cherrapunjee • Mawlynnong",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Cab Transfer" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Guide" },
    ],

    overview:
      "Magical Meghalaya, the 'Abode of Clouds' enchants visitors with lush green valleys, crystal-clear rivers, waterfalls, caves, and living root bridges. The package combines adventure, nature, local culture, and breathtaking landscapes for an unforgettable journey.",

    itinerary: [
      {
        day: 1,
        title: "Guwahati Airport → Shillong",
        distance: "100 kms / 3 hrs",
        description:
          "Arrive at Guwahati Airport and transfer to Shillong. Visit Umium Lake before checking into your hotel.",
        images: ["...", "...", "..."],
      },

      {
        day: 2,
        title: "Shillong → Cherrapunjee",
        distance: "60 kms / 3 hrs",
        description:
          "Visit Nohkalikai Falls, Mawsmai Cave and Seven Sisters Falls.",
        images: ["...", "...", "..."],
      },

      {
        day: 3,
        title: "Dawki & Mawlynnong",
        distance: "120 kms / 4 hrs",
        description:
          "Visit Umngot River, Living Root Bridge and Asia's Cleanest Village.",
        images: ["...", "...", "..."],
      },

      {
        day: 4,
        title: "Shillong Sightseeing",
        distance: "100 kms",
        description:
          "Visit Ward's Lake, Don Bosco Museum and Police Bazaar.",
        images: ["...", "...", "..."],
      },

      {
        day: 5,
        title: "Shillong → Guwahati Departure",
        distance: "100 kms",
        description:
          "Visit Kamakhya Temple and transfer to the airport.",
        images: ["...", "...", "..."],
      },
    ],

    included: [
      "Accommodation",
      "Breakfast",
      "Private Vehicle",
      "Sightseeing",
      "Hotel Taxes",
      "Driver Allowance",
    ],

    excluded: [
      "Air Fare",
      "Train Fare",
      "Personal Expenses",
      "Insurance",
      "Adventure Activities",
      "Entry Fees",
      "GST",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/magical-meghalaya",
  },
  {
    id: 1,

    category: "domestic",

    slug: "magical-meghalaya",

    title: "Magical Meghalaya",

    image: "...",

    gallery: [
      "...",
      "...",
      "...",
      "...",
      "..."
    ],

    price: 19499,

    perPerson: true,

    rating: 8.0,

    duration: "05 Days / 04 Nights",

    location: "Shillong • Guwahati • Cherrapunjee • Mawlynnong",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Cab Transfer" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Guide" },
    ],

    overview:
      "Magical Meghalaya, the 'Abode of Clouds' enchants visitors with lush green valleys, crystal-clear rivers, waterfalls, caves, and living root bridges. The package combines adventure, nature, local culture, and breathtaking landscapes for an unforgettable journey.",

    itinerary: [
      {
        day: 1,
        title: "Guwahati Airport → Shillong",
        distance: "100 kms / 3 hrs",
        description:
          "Arrive at Guwahati Airport and transfer to Shillong. Visit Umium Lake before checking into your hotel.",
        images: ["...", "...", "..."],
      },

      {
        day: 2,
        title: "Shillong → Cherrapunjee",
        distance: "60 kms / 3 hrs",
        description:
          "Visit Nohkalikai Falls, Mawsmai Cave and Seven Sisters Falls.",
        images: ["...", "...", "..."],
      },

      {
        day: 3,
        title: "Dawki & Mawlynnong",
        distance: "120 kms / 4 hrs",
        description:
          "Visit Umngot River, Living Root Bridge and Asia's Cleanest Village.",
        images: ["...", "...", "..."],
      },

      {
        day: 4,
        title: "Shillong Sightseeing",
        distance: "100 kms",
        description:
          "Visit Ward's Lake, Don Bosco Museum and Police Bazaar.",
        images: ["...", "...", "..."],
      },

      {
        day: 5,
        title: "Shillong → Guwahati Departure",
        distance: "100 kms",
        description:
          "Visit Kamakhya Temple and transfer to the airport.",
        images: ["...", "...", "..."],
      },
    ],

    included: [
      "Accommodation",
      "Breakfast",
      "Private Vehicle",
      "Sightseeing",
      "Hotel Taxes",
      "Driver Allowance",
    ],

    excluded: [
      "Air Fare",
      "Train Fare",
      "Personal Expenses",
      "Insurance",
      "Adventure Activities",
      "Entry Fees",
      "GST",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/magical-meghalaya",
  },
  {
    id: 1,

    category: "domestic",

    slug: "magical-meghalaya",

    title: "Magical Meghalaya",

    image: "...",

    gallery: [
      "...",
      "...",
      "...",
      "...",
      "..."
    ],

    price: 19499,

    perPerson: true,

    rating: 8.0,

    duration: "05 Days / 04 Nights",

    location: "Shillong • Guwahati • Cherrapunjee • Mawlynnong",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Hotel Stay" },
      { id: 3, icon: Utensils, label: "Meals Included" },
      { id: 4, icon: Car, label: "Cab Transfer" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Tour Guide" },
    ],

    overview:
      "Magical Meghalaya, the 'Abode of Clouds' enchants visitors with lush green valleys, crystal-clear rivers, waterfalls, caves, and living root bridges. The package combines adventure, nature, local culture, and breathtaking landscapes for an unforgettable journey.",

    itinerary: [
      {
        day: 1,
        title: "Guwahati Airport → Shillong",
        distance: "100 kms / 3 hrs",
        description:
          "Arrive at Guwahati Airport and transfer to Shillong. Visit Umium Lake before checking into your hotel.",
        images: ["...", "...", "..."],
      },

      {
        day: 2,
        title: "Shillong → Cherrapunjee",
        distance: "60 kms / 3 hrs",
        description:
          "Visit Nohkalikai Falls, Mawsmai Cave and Seven Sisters Falls.",
        images: ["...", "...", "..."],
      },

      {
        day: 3,
        title: "Dawki & Mawlynnong",
        distance: "120 kms / 4 hrs",
        description:
          "Visit Umngot River, Living Root Bridge and Asia's Cleanest Village.",
        images: ["...", "...", "..."],
      },

      {
        day: 4,
        title: "Shillong Sightseeing",
        distance: "100 kms",
        description:
          "Visit Ward's Lake, Don Bosco Museum and Police Bazaar.",
        images: ["...", "...", "..."],
      },

      {
        day: 5,
        title: "Shillong → Guwahati Departure",
        distance: "100 kms",
        description:
          "Visit Kamakhya Temple and transfer to the airport.",
        images: ["...", "...", "..."],
      },
    ],

    included: [
      "Accommodation",
      "Breakfast",
      "Private Vehicle",
      "Sightseeing",
      "Hotel Taxes",
      "Driver Allowance",
    ],

    excluded: [
      "Air Fare",
      "Train Fare",
      "Personal Expenses",
      "Insurance",
      "Adventure Activities",
      "Entry Fees",
      "GST",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/magical-meghalaya",
  },
   {
    id: 2,

    category: "international",

    slug: "beautiful-bali",

    title: "Beautiful Bali",

    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",

    gallery: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
    ],

    price: 54999,

    perPerson: true,

    rating: 9.4,

    duration: "06 Days / 05 Nights",

    location: "Bali • Ubud • Kuta • Nusa Penida",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Luxury Hotel" },
      { id: 3, icon: Utensils, label: "Breakfast Included" },
      { id: 4, icon: Car, label: "Private Transfers" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Local Guide" },
    ],

    overview:
      "Experience the tropical paradise of Bali with pristine beaches, stunning temples, lush rice terraces, waterfalls, and vibrant nightlife. This carefully curated international package offers a perfect blend of relaxation, adventure, culture, and luxury.",

    itinerary: [
      {
        day: 1,
        title: "Arrival at Bali",
        distance: "Airport → Kuta",
        description:
          "Arrival at Ngurah Rai International Airport. Meet our representative and transfer to your hotel in Kuta. Evening free for leisure.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 2,
        title: "Kintamani & Ubud Tour",
        distance: "80 kms",
        description:
          "Visit Tegenungan Waterfall, Ubud Monkey Forest, Coffee Plantation, Tegallalang Rice Terrace and Mount Batur View Point.",
        images: [
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 3,
        title: "Nusa Penida Island Tour",
        distance: "Full Day",
        description:
          "Explore Kelingking Beach, Broken Beach, Angel's Billabong and Crystal Bay with speed boat transfers.",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 4,
        title: "Tanah Lot & Sunset Tour",
        distance: "60 kms",
        description:
          "Visit the famous Tanah Lot Temple, enjoy Bali Swing experience and witness the spectacular sunset over the Indian Ocean.",
        images: [
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        ],
      },

      {
        day: 5,
        title: "Leisure & Shopping",
        distance: "Local",
        description:
          "Spend the day at leisure exploring Bali's beaches, cafes and shopping markets. Optional water sports available.",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 6,
        title: "Departure",
        distance: "Hotel → Airport",
        description:
          "After breakfast, check out from the hotel and transfer to Ngurah Rai International Airport for your onward journey.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },
    ],

    included: [
      "Round Trip Flight",
      "5 Nights Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Private Sightseeing",
      "English Speaking Guide",
      "All Applicable Taxes",
    ],

    excluded: [
      "Visa Charges",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Water Sports",
      "Entry Fees (where applicable)",
      "GST & TCS",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/beautiful-bali",
  },
   {
    id: 2,

    category: "international",

    slug: "beautiful-bali",

    title: "Beautiful Bali",

    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",

    gallery: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
    ],

    price: 54999,

    perPerson: true,

    rating: 9.4,

    duration: "06 Days / 05 Nights",

    location: "Bali • Ubud • Kuta • Nusa Penida",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Luxury Hotel" },
      { id: 3, icon: Utensils, label: "Breakfast Included" },
      { id: 4, icon: Car, label: "Private Transfers" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Local Guide" },
    ],

    overview:
      "Experience the tropical paradise of Bali with pristine beaches, stunning temples, lush rice terraces, waterfalls, and vibrant nightlife. This carefully curated international package offers a perfect blend of relaxation, adventure, culture, and luxury.",

    itinerary: [
      {
        day: 1,
        title: "Arrival at Bali",
        distance: "Airport → Kuta",
        description:
          "Arrival at Ngurah Rai International Airport. Meet our representative and transfer to your hotel in Kuta. Evening free for leisure.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 2,
        title: "Kintamani & Ubud Tour",
        distance: "80 kms",
        description:
          "Visit Tegenungan Waterfall, Ubud Monkey Forest, Coffee Plantation, Tegallalang Rice Terrace and Mount Batur View Point.",
        images: [
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 3,
        title: "Nusa Penida Island Tour",
        distance: "Full Day",
        description:
          "Explore Kelingking Beach, Broken Beach, Angel's Billabong and Crystal Bay with speed boat transfers.",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 4,
        title: "Tanah Lot & Sunset Tour",
        distance: "60 kms",
        description:
          "Visit the famous Tanah Lot Temple, enjoy Bali Swing experience and witness the spectacular sunset over the Indian Ocean.",
        images: [
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        ],
      },

      {
        day: 5,
        title: "Leisure & Shopping",
        distance: "Local",
        description:
          "Spend the day at leisure exploring Bali's beaches, cafes and shopping markets. Optional water sports available.",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 6,
        title: "Departure",
        distance: "Hotel → Airport",
        description:
          "After breakfast, check out from the hotel and transfer to Ngurah Rai International Airport for your onward journey.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },
    ],

    included: [
      "Round Trip Flight",
      "5 Nights Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Private Sightseeing",
      "English Speaking Guide",
      "All Applicable Taxes",
    ],

    excluded: [
      "Visa Charges",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Water Sports",
      "Entry Fees (where applicable)",
      "GST & TCS",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/beautiful-bali",
  },
   {
    id: 2,

    category: "international",

    slug: "beautiful-bali",

    title: "Beautiful Bali",

    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",

    gallery: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
    ],

    price: 54999,

    perPerson: true,

    rating: 9.4,

    duration: "06 Days / 05 Nights",

    location: "Bali • Ubud • Kuta • Nusa Penida",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Luxury Hotel" },
      { id: 3, icon: Utensils, label: "Breakfast Included" },
      { id: 4, icon: Car, label: "Private Transfers" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Local Guide" },
    ],

    overview:
      "Experience the tropical paradise of Bali with pristine beaches, stunning temples, lush rice terraces, waterfalls, and vibrant nightlife. This carefully curated international package offers a perfect blend of relaxation, adventure, culture, and luxury.",

    itinerary: [
      {
        day: 1,
        title: "Arrival at Bali",
        distance: "Airport → Kuta",
        description:
          "Arrival at Ngurah Rai International Airport. Meet our representative and transfer to your hotel in Kuta. Evening free for leisure.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 2,
        title: "Kintamani & Ubud Tour",
        distance: "80 kms",
        description:
          "Visit Tegenungan Waterfall, Ubud Monkey Forest, Coffee Plantation, Tegallalang Rice Terrace and Mount Batur View Point.",
        images: [
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 3,
        title: "Nusa Penida Island Tour",
        distance: "Full Day",
        description:
          "Explore Kelingking Beach, Broken Beach, Angel's Billabong and Crystal Bay with speed boat transfers.",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 4,
        title: "Tanah Lot & Sunset Tour",
        distance: "60 kms",
        description:
          "Visit the famous Tanah Lot Temple, enjoy Bali Swing experience and witness the spectacular sunset over the Indian Ocean.",
        images: [
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        ],
      },

      {
        day: 5,
        title: "Leisure & Shopping",
        distance: "Local",
        description:
          "Spend the day at leisure exploring Bali's beaches, cafes and shopping markets. Optional water sports available.",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 6,
        title: "Departure",
        distance: "Hotel → Airport",
        description:
          "After breakfast, check out from the hotel and transfer to Ngurah Rai International Airport for your onward journey.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },
    ],

    included: [
      "Round Trip Flight",
      "5 Nights Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Private Sightseeing",
      "English Speaking Guide",
      "All Applicable Taxes",
    ],

    excluded: [
      "Visa Charges",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Water Sports",
      "Entry Fees (where applicable)",
      "GST & TCS",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/beautiful-bali",
  },
   {
    id: 2,

    category: "international",

    slug: "beautiful-bali",

    title: "Beautiful Bali",

    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",

    gallery: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
    ],

    price: 54999,

    perPerson: true,

    rating: 9.4,

    duration: "06 Days / 05 Nights",

    location: "Bali • Ubud • Kuta • Nusa Penida",

    facilities: [
      { id: 1, icon: Plane, label: "Flight Included" },
      { id: 2, icon: Hotel, label: "Luxury Hotel" },
      { id: 3, icon: Utensils, label: "Breakfast Included" },
      { id: 4, icon: Car, label: "Private Transfers" },
      { id: 5, icon: Camera, label: "Sightseeing" },
      { id: 6, icon: MapPinned, label: "Local Guide" },
    ],

    overview:
      "Experience the tropical paradise of Bali with pristine beaches, stunning temples, lush rice terraces, waterfalls, and vibrant nightlife. This carefully curated international package offers a perfect blend of relaxation, adventure, culture, and luxury.",

    itinerary: [
      {
        day: 1,
        title: "Arrival at Bali",
        distance: "Airport → Kuta",
        description:
          "Arrival at Ngurah Rai International Airport. Meet our representative and transfer to your hotel in Kuta. Evening free for leisure.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 2,
        title: "Kintamani & Ubud Tour",
        distance: "80 kms",
        description:
          "Visit Tegenungan Waterfall, Ubud Monkey Forest, Coffee Plantation, Tegallalang Rice Terrace and Mount Batur View Point.",
        images: [
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },

      {
        day: 3,
        title: "Nusa Penida Island Tour",
        distance: "Full Day",
        description:
          "Explore Kelingking Beach, Broken Beach, Angel's Billabong and Crystal Bay with speed boat transfers.",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 4,
        title: "Tanah Lot & Sunset Tour",
        distance: "60 kms",
        description:
          "Visit the famous Tanah Lot Temple, enjoy Bali Swing experience and witness the spectacular sunset over the Indian Ocean.",
        images: [
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        ],
      },

      {
        day: 5,
        title: "Leisure & Shopping",
        distance: "Local",
        description:
          "Spend the day at leisure exploring Bali's beaches, cafes and shopping markets. Optional water sports available.",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
        ],
      },

      {
        day: 6,
        title: "Departure",
        distance: "Hotel → Airport",
        description:
          "After breakfast, check out from the hotel and transfer to Ngurah Rai International Airport for your onward journey.",
        images: [
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        ],
      },
    ],

    included: [
      "Round Trip Flight",
      "5 Nights Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Private Sightseeing",
      "English Speaking Guide",
      "All Applicable Taxes",
    ],

    excluded: [
      "Visa Charges",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Water Sports",
      "Entry Fees (where applicable)",
      "GST & TCS",
    ],

    whatsapp: "https://wa.me/919999999999",

    phone: "tel:+919999999999",

    enquiryLink: "#",

    detailsLink: "/packages/beautiful-bali",
  },
];

export default packages;