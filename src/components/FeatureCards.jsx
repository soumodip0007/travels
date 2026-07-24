import { Plane, Train, Bus, Globe, MapPin, Hotel } from "lucide-react";
import trapSVG from "../assets/trap.svg";

const features = [
  {
    title: "Flight Booking",
    icon: Plane,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Train Booking",
    icon: Train,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Bus & Car",
    icon: Bus,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "International Tour Plan",
    icon: Globe,
    color: "from-indigo-500 to-blue-700",
  },
  {
    title: "Domestic Tour Plan",
    icon: MapPin,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Hotel & Resort",
    icon: Hotel,
    color: "from-orange-500 to-amber-500",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-40 -mt-30 mb-20">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Main Card */}
        <div className="relative rounded-[38px] bg-white py-10 shadow-[0_30px_80px_rgba(0,0,0,.12)]">
          {/* Top Curve */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[44%] z-20">
            <div className="relative w-[360px]">
              {/* SVG */}
              <img src={trapSVG} alt="" className="w-full h-auto" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center -mt-2">
                <div className="mouse-scroll flex items-center justify-center">
                  <div className="relative h-12 w-7 rounded-full border-2 border-[#5D5FEF]">
                    <div className="mouse-wheel absolute left-1/2 top-2 h-2.5 w-1 -translate-x-1/2 rounded-full bg-[#5D5FEF]" />
                  </div>
                </div>

                <h4 className="mt-3 text-[18px] font-semibold text-[#5D5FEF]">
                  Scroll Down
                </h4>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 px-8 md:grid-cols-3 lg:grid-cols-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href="#"
                  className="group flex flex-col items-center rounded-3xl p-5 transition-all duration-500 hover:-translate-y-4 hover:bg-white hover:shadow-2xl"
                >
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color}
  text-white shadow-xl transition-all duration-500
  group-hover:-translate-y-2
  group-hover:scale-110
  group-hover:rotate-6
  group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.35)]`}
                  >
                    <Icon
                      size={34}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-5 flex h-12 items-center justify-center text-center text-lg font-bold leading-snug text-slate-800 transition-all duration-300 group-hover:text-blue-700">
                    {item.title}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-gray-400 transition-all duration-300 group-hover:gap-2 group-hover:text-orange-500">
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// import {
//   Plane,
//   Train,
//   Bus,
//   Globe,
//   MapPin,
//   Hotel,
//   ChevronDown,
// } from "lucide-react";

// const leftFeatures = [
//   {
//     title: "Flight Booking",
//     icon: Plane,
//     link: "#",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     title: "Train Booking",
//     icon: Train,
//     link: "#",
//     color: "from-orange-400 to-red-500",
//   },
//   {
//     title: "Bus & Car",
//     icon: Bus,
//     link: "#",
//     color: "from-cyan-500 to-blue-500",
//   },
// ];

// const rightFeatures = [
//   {
//     title: "International Tour Plan",
//     icon: Globe,
//     link: "#",
//     color: "from-indigo-500 to-blue-700",
//   },
//   {
//     title: "Domestic Tour Plan",
//     icon: MapPin,
//     link: "#",
//     color: "from-sky-500 to-blue-600",
//   },
//   {
//     title: "Hotel & Resort",
//     icon: Hotel,
//     link: "#",
//     color: "from-orange-500 to-amber-500",
//   },
// ];

// function FeatureItem({ item }) {
//   const Icon = item.icon;
//   return (
//     <a
//       href={item.link}
//       className="group flex flex-col items-center rounded-3xl p-5 transition-all duration-500 hover:-translate-y-4 hover:bg-white hover:shadow-2xl"
//     >
//       <div
//         className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
//       >
//         <Icon size={34} />
//       </div>
//       <h3 className="mt-5 flex h-12 items-center justify-center text-center text-lg font-bold leading-snug text-slate-800 transition group-hover:text-blue-700">
//         {item.title}
//       </h3>
//       <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-gray-400 transition-all duration-300 group-hover:gap-2 group-hover:text-orange-500">
//         Explore
//         <span className="transition-transform duration-300 group-hover:translate-x-1">
//           →
//         </span>
//       </span>
//     </a>
//   );
// }

// function ArrowDivider() {
//   return (
//     <div className="hidden h-56 w-16 shrink-0 items-center justify-center md:flex">
//       <style>{`
//         @keyframes chevronDrop {
//           0% { opacity: 0; transform: translateY(-10px); }
//           25% { opacity: 1; }
//           65% { opacity: 1; }
//           100% { opacity: 0; transform: translateY(10px); }
//         }
//         .chevron-1 { animation: chevronDrop 1.8s ease-in-out infinite; animation-delay: 0s; }
//         .chevron-2 { animation: chevronDrop 1.8s ease-in-out infinite; animation-delay: 0.3s; }
//         .chevron-3 { animation: chevronDrop 1.8s ease-in-out infinite; animation-delay: 0.6s; }
//       `}</style>
//       <div className="flex flex-col items-center gap-3">
//         <ChevronDown
//           className="chevron-1 h-14 w-14 text-indigo-500"
//           strokeWidth={2.5}
//         />
//         <ChevronDown
//           className="chevron-2 -mt-6 h-14 w-14 text-indigo-500"
//           strokeWidth={2.5}
//         />
//         <ChevronDown
//           className="chevron-3 -mt-6 h-14 w-14 text-indigo-500"
//           strokeWidth={2.5}
//         />
//       </div>
//     </div>
//   );
// }

// export default function FeatureCards() {
//   return (
//     <section className="relative -mt-50 z-40">
//       <svg width="0" height="0" className="absolute">
//         <defs>
//           <clipPath id="topHillClip" clipPathUnits="objectBoundingBox">
//             <path
//               d="
//                   M0.06,0.20
//                   C0.02,0.20 0,0.26 0,0.32
//                   L0,0.88
//                   C0,0.96 0.04,1 0.08,1
//                   L0.92,1
//                   C0.96,1 1,0.96 1,0.88
//                   L1,0.32
//                   C1,0.26 0.98,0.20 0.94,0.20
//                   L0.68,0.20
//                   C0.64,0.20 0.61,0.16 0.58,0.09
//                   C0.555,0.02 0.53,0 0.50,0
//                   C0.47,0 0.445,0.02 0.42,0.09
//                   C0.39,0.16 0.36,0.20 0.32,0.20
//                   Z
//     "
//             />
//           </clipPath>
//         </defs>
//       </svg>

//       <div className="mx-auto w-[92%] max-w-7xl">
//         <div
//           data-aos="zoom-in-up"
//           data-aos-duration="1200"
//           className="feature-card relative flex flex-col items-center gap-8 rounded-[100px] bg-purple-50 px-8 pb-8 pt-10 shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:flex-row md:gap-12 md:pt-32 lg:gap-20"
//         >
//           <span
//             data-aos="fade-down"
//             data-aos-duration="1000"
//             className="absolute left-1/2 mt-10 top-4 hidden -translate-x-1/2 text-xl font-semibold text-indigo-600 md:block lg:text-3xl"
//           >
//             Scroll Down
//           </span>

//           <div className="grid w-full grid-cols-3 gap-6 md:w-auto md:flex-1">
//             {leftFeatures.map((item, i) => (
//               <div
//                 key={i}
//                 data-aos="fade-right"
//                 data-aos-delay={i * 150}
//                 data-aos-duration="900"
//               >
//                 <FeatureItem item={item} />
//               </div>
//             ))}
//           </div>

//           <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
//             <ArrowDivider />
//           </div>

//           <div className="grid w-full grid-cols-3 gap-6 md:w-auto md:flex-1">
//             {rightFeatures.map((item, i) => (
//               <div
//                 key={i}
//                 data-aos="fade-left"
//                 data-aos-delay={i * 150}
//                 data-aos-duration="900"
//               >
//                 <FeatureItem item={item} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
