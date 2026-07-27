import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import {
  IndianRupee,
  MapPin,
  Star,
  Clock3
} from "lucide-react";

export default function BookingCard({
  tour,
  selectedPackage, }) {

  const currentPackage = tour?.packages?.[selectedPackage];

  const displayPrice =
    currentPackage?.price ??
    Math.min(
      ...Object.values(tour.packages || {})
        .filter(pkg => pkg?.price)
        .map(pkg => pkg.price)
    );

  const displayDuration =
    currentPackage?.duration ||
    tour.duration;

  // Animated (counting) price
  const [animatedPrice, setAnimatedPrice] = useState(displayPrice);
  const previousPrice = useRef(displayPrice);

  useEffect(() => {
    const controls = animate(previousPrice.current, displayPrice, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (value) => setAnimatedPrice(Math.round(value)),
    });

    previousPrice.current = displayPrice;

    return () => controls.stop();
  }, [displayPrice]);

  return (
    <div>

      <div className="relative sticky top-28 overflow-hidden rounded-[32px] border border-purple-400/20 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#2E1065] p-7 shadow-[0_40px_80px_rgba(109,40,217,.35)]">

        {/* ================= BACKGROUND DESIGN ================= */}

        {/* Top Glow */}
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/40 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-violet-500/30 blur-[120px]" />

        {/* Bottom Glow */}
        <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-300/20 blur-[120px]" />

        {/* Large Wave */}
        <div className="absolute bottom-0 left-0 h-60 w-full rounded-t-[100%] bg-gradient-to-r from-fuchsia-500/25 via-purple-400/15 to-violet-500/25 blur-md" />

        {/* Second Wave */}
        <div className="absolute bottom-6 left-0 h-48 w-full rounded-t-[100%] border-t border-white/20 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-70" />

        {/* Third Wave */}
        <div className="absolute bottom-12 left-0 h-36 w-full rounded-t-[100%] border-t border-fuchsia-300/20 opacity-60" />

        {/* Thin Curve 1 */}
        <div className="absolute bottom-16 left-[-10%] h-52 w-[120%] rounded-t-[100%] border-t border-white/10" />

        {/* Thin Curve 2 */}
        <div className="absolute bottom-24 left-[-10%] h-64 w-[120%] rounded-t-[100%] border-t border-fuchsia-300/20" />

        {/* Thin Curve 3 */}
        <div className="absolute bottom-32 left-[-10%] h-80 w-[120%] rounded-t-[100%] border-t border-purple-300/10" />

        {/* Vertical Glow */}
        <div className="absolute left-1/2 top-10 h-60 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-fuchsia-300/80 to-transparent blur-sm" />

        {/* Shine */}
        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_35%,rgba(255,255,255,.12)_50%,transparent_65%)]" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* ================= CONTENT ================= */}

        <div className="relative z-10">

          {/* Rating */}
          <div className="mb-5 flex items-center justify-between">

            <span className="text-lg font-semibold text-white">
              Rating
            </span>

            <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 font-bold text-white border border-white/20">

              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              {tour.rating}

            </div>

          </div>

          {/* Price */}

          <div className="mb-6">

            <p className="text-purple-100">
              Starting From
            </p>

            <div className="mt-2 flex items-center">

              <IndianRupee
                size={28}
                className="text-white"
              />

              <span className="text-4xl font-black text-white">
                {animatedPrice.toLocaleString()}
              </span>

            </div>

            <p className="text-purple-200">
              / Per Person
            </p>

          </div>

          {/* Duration */}

          <div className="group mb-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 transition-all duration-500 hover:bg-white/15">

            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl
        bg-gradient-to-br from-[#8B5CF6] to-[#C084FC]
        text-white shadow-xl"
            >
              <Clock3 size={20} />
            </div>

            <div>

              <p className="text-purple-100 text-sm">
                Duration
              </p>

              <p className="font-semibold text-white">
                {displayDuration}
              </p>

            </div>

          </div>

          {/* Destination */}

          <div className="group mb-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 transition-all duration-500 hover:bg-white/15">

            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl
        bg-gradient-to-br from-[#8B5CF6] to-[#C084FC]
        text-white shadow-xl"
            >
              <MapPin size={20} />
            </div>

            <div>

              <p className="text-purple-100 text-sm">
                Destination
              </p>

              <p className="font-semibold text-white">
                {tour.location}
              </p>

            </div>

          </div>

          {/* Button */}

          <div className="flex justify-center">
            <button
              className="w-1/2 flex justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 py-4 text-lg font-bold text-white shadow-[0_20px_50px_rgba(168,85,247,.45)] transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_70px_rgba(168,85,247,.6)]"
            >
              Enquire Now
            </button>
          </div>

        </div>

      </div>

    </div>

  );
}