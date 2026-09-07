const reviews = [
  {
    type: "image",
    name: "Soumya Chatterjee",
    location: "Ajanta Ellora Mumbai Goa",
    rating: 5,
    avatar: null,
    text: "The entire trip was very well organized. We visited some incredible historical places and also enjoyed the beaches of Goa. Everything went smoothly."
  },
  {
    type: "image",
    name: "Moumita Ghosh",
    location: "Madhya Pradesh",
    rating: 5,
    avatar: null,
    text: "A wonderful experience exploring Madhya Pradesh. The sightseeing was excellent and the arrangements throughout the journey were comfortable."
  },
  {
    type: "image",
    name: "Sourav Das",
    location: "Andaman",
    rating: 5,
    avatar: null,
    text: "The Andaman trip was absolutely amazing. The beaches were beautiful and all the transfers and hotel arrangements were handled perfectly."
  },
  {
    type: "image",
    name: "Riya Chakraborty",
    location: "Arunachal Pradesh",
    rating: 5,
    avatar: null,
    text: "Arunachal Pradesh was breathtaking. The itinerary allowed us to enjoy the mountains, local culture and beautiful landscapes without feeling rushed."
  },
  {
    type: "image",
    name: "Abhishek Banerjee",
    location: "Ayodhya",
    rating: 4,
    avatar: null,
    text: "The Ayodhya trip was peaceful and memorable. The complete journey was properly planned and the sightseeing arrangements were very convenient."
  },
  {
    type: "image",
    name: "Debolina Roy",
    location: "Five Joytirlinga",
    rating: 5,
    avatar: null,
    text: "Everything was arranged beautifully for our pilgrimage tour. The hotels and transportation were comfortable and the overall experience was excellent."
  },
  {
    type: "image",
    name: "Sayan Mukherjee",
    location: "Himachal Pradesh",
    rating: 5,
    avatar: null,
    text: "We had an amazing Himachal trip. The mountain views were spectacular and the entire itinerary was planned perfectly for our family."
  },
  {
    type: "image",
    name: "Poulomi Sen",
    location: "Koraput",
    rating: 4,
    avatar: null,
    text: "Koraput was a beautiful offbeat destination. We really enjoyed the peaceful surroundings and the well-planned travel arrangements."
  },
  {
    type: "image",
    name: "Arindam Dutta",
    location: "Nagaland Tripura",
    rating: 5,
    avatar: null,
    text: "This was one of our most memorable trips. The Northeast was beautiful and the itinerary gave us a great opportunity to experience the local culture."
  },
  {
    type: "image",
    name: "Tiyasha Basu",
    location: "Offbeat Kashmir",
    rating: 5,
    avatar: null,
    text: "The offbeat Kashmir experience was fantastic. We discovered some beautiful places away from the usual tourist spots. Highly enjoyable trip."
  },
  {
    type: "image",
    name: "Ritwick Ghosh",
    location: "Pelling Ravangla Darjeeling",
    rating: 5,
    avatar: null,
    text: "The mountain destinations were stunning. Hotels were comfortable, transportation was smooth and the entire trip was managed professionally."
  },
  {
    type: "image",
    name: "Sohini Chatterjee",
    location: "Rajasthan",
    rating: 5,
    avatar: null,
    text: "Rajasthan was full of amazing forts, palaces and cultural experiences. The itinerary was excellent and we enjoyed every destination."
  },
  {
    type: "image",
    name: "Anirban Saha",
    location: "South India",
    rating: 4,
    avatar: null,
    text: "A lovely South India tour with a great combination of sightseeing and relaxation. The arrangements were smooth from beginning to end."
  },
  {
    type: "image",
    name: "Madhurima Das",
    location: "Valley of Leh Ladakh",
    rating: 5,
    avatar: null,
    text: "Ladakh was an unforgettable experience. The landscapes were incredible and the trip was planned carefully to make the journey comfortable."
  },
  {
    type: "image",
    name: "Abhijit Roy",
    location: "Vizag Hyderabad",
    rating: 4,
    avatar: null,
    text: "The Vizag and Hyderabad trip was enjoyable and well organized. We got to experience both the coastal beauty and the vibrant city life."
  },
  {
    type: "image",
    name: "Sreemoyee Bhattacharya",
    location: "Kashmir",
    rating: 5,
    avatar: null,
    text: "Kashmir was absolutely beautiful. The hotels were good, the driver was helpful and all the sightseeing arrangements were handled smoothly."
  },
  {
    type: "image",
    name: "Pradip Ghosh",
    location: "Kinnaur La Hul Spiti",
    rating: 5,
    avatar: null,
    text: "The Kinnaur and Spiti journey was an incredible adventure. The mountain scenery was unforgettable and the complete trip was well managed."
  },
  {
    type: "image",
    name: "Rupsa Majumdar",
    location: "Meghalaya",
    rating: 5,
    avatar: null,
    text: "Meghalaya was beautiful from start to finish. The waterfalls, hills and greenery were amazing and the itinerary covered all the important places."
  },
  {
    type: "image",
    name: "Kaushik Bhowmik",
    location: "North India",
    rating: 4,
    avatar: null,
    text: "A great way to explore North India. The destinations were interesting and the travel arrangements made the whole experience comfortable."
  },
  {
    type: "image",
    name: "Piyali Sarkar",
    location: "North Sikkim",
    rating: 5,
    avatar: null,
    text: "North Sikkim was absolutely stunning. The mountain views and peaceful surroundings made this one of our favorite holidays."
  },
  {
    type: "image",
    name: "Soumendu Paul",
    location: "Goa",
    rating: 5,
    avatar: null,
    text: "Goa was exactly what we needed for a relaxing holiday. The hotel was great and the complete trip was handled without any stress."
  },
  {
    type: "image",
    name: "Roshni Mukherjee",
    location: "Karnataka",
    rating: 4,
    avatar: null,
    text: "We really enjoyed exploring Karnataka. The combination of historical sites, nature and local food made the trip very memorable."
  },
  {
    type: "image",
    name: "Indranil Bose",
    location: "Goa with Lakshadweep",
    rating: 5,
    avatar: null,
    text: "Combining Goa and Lakshadweep was an excellent choice. The beaches were incredible and the complete itinerary was well balanced."
  },
  {
    type: "image",
    name: "Srabani Dey",
    location: "Kerala with Kanyakumari",
    rating: 5,
    avatar: null,
    text: "Kerala and Kanyakumari made a fantastic combination. The backwaters, temples and coastal views were all amazing."
  },
  {
    type: "image",
    name: "Rajdeep Chatterjee",
    location: "Gujarat",
    rating: 4,
    avatar: null,
    text: "Gujarat was a great experience. We visited several interesting places and enjoyed learning about the state's culture and history."
  },

  // International Reviews

  {
    type: "image",
    name: "Arnab Sengupta",
    location: "Nepal",
    rating: 5,
    avatar: null,
    text: "Our Nepal trip was wonderful. The mountain views were beautiful and the itinerary gave us enough time to explore the local attractions."
  },
  {
    type: "image",
    name: "Ritika Sen",
    location: "Bangkok Pattaya Phuket",
    rating: 5,
    avatar: null,
    text: "Thailand was an amazing experience. Bangkok, Pattaya and Phuket offered something different and the complete trip was very well planned."
  },
  {
    type: "image",
    name: "Sagnik Bhattacharya",
    location: "Bangkok, Pattaya, Phuket & Krabi",
    rating: 5,
    avatar: null,
    text: "The combination of destinations was perfect. We enjoyed the beaches, sightseeing and local experiences without having to worry about the arrangements."
  },
  {
    type: "image",
    name: "Ishani Roy",
    location: "Kazakhstan & Uzbekistan",
    rating: 4,
    avatar: null,
    text: "A unique and memorable international trip. The destinations were fascinating and the itinerary gave us a great introduction to both countries."
  },
  {
    type: "image",
    name: "Soumik Dhar",
    location: "Vietnam",
    rating: 5,
    avatar: null,
    text: "Vietnam was beautiful and full of amazing experiences. The hotels and transportation were excellent and the overall trip was very comfortable."
  },
  {
    type: "image",
    name: "Nabanita Ghosh",
    location: "Vietnam Phu Quoc",
    rating: 5,
    avatar: null,
    text: "We loved Vietnam and especially enjoyed our time in Phu Quoc. The beaches were beautiful and the trip was organized perfectly."
  },
  {
    type: "image",
    name: "Siddhartha Bose",
    location: "Srilanka",
    rating: 4,
    avatar: null,
    text: "Sri Lanka was an amazing destination. We enjoyed the beaches, sightseeing and local culture. Everything was arranged very smoothly."
  },
  {
    type: "image",
    name: "Anushka Iyer",
    location: "Singapore Malaysia, Genting",
    rating: 5,
    avatar: null,
    text: "Singapore and Malaysia were fantastic. The itinerary was well planned and we had plenty of time to enjoy sightseeing and shopping."
  },
  {
    type: "image",
    name: "Vivek Malhotra",
    location: "Thailand Singapore Malyasia",
    rating: 5,
    avatar: null,
    text: "An excellent combination of destinations for a family vacation. The hotels were comfortable and the complete journey was handled professionally."
  }
];

export default reviews;