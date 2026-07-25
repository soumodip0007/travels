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

      <div className="sticky top-28 rounded-3xl border border-purple-100 bg-white p-7 shadow-[0_30px_80px_rgba(105,87,223,0.14)]">

        {/* Rating */}
        <div className="mb-5 flex items-center justify-between">

          <span className="text-lg font-semibold text-slate-700">
            Rating
          </span>

          <div className="flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 font-bold text-[#6957DF]">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            {tour.rating}

          </div>

        </div>

        {/* Price */}
        <div className="mb-6">

          <p className="text-sm text-gray-500">
            Starting From
          </p>

          <div className="mt-2 flex items-center">

            <IndianRupee
              size={28}
              className="text-slate-900"
            />

            <span className="text-4xl font-black text-slate-900 tabular-nums">
              {animatedPrice.toLocaleString()}
            </span>

          </div>

          <p className="text-gray-500">
            / Per Person
          </p>

        </div>

        {/* Duration */}
        <div className="group mb-4 flex items-center gap-3 rounded-xl bg-purple-50 p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">

          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl
            border-2 border-[#6957DF]
            bg-white
            text-[#6957DF]
            shadow-sm
            transition-all duration-500
            group-hover:scale-110
            group-hover:rotate-6
            group-hover:border-transparent
            group-hover:bg-gradient-to-br
            group-hover:from-[#6957DF]
            group-hover:to-[#9F7AEA]
            group-hover:text-white"
          >
            <Clock3 size={20} />
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Duration
            </p>

            <p className="font-semibold text-slate-800">
              {displayDuration}
            </p>

          </div>

        </div>

        {/* Destination */}
        <div className="group mb-8 flex items-center gap-3 rounded-xl bg-purple-50 p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">

          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl
            border-2 border-[#6957DF]
            bg-white
            text-[#6957DF]
            shadow-sm
            transition-all duration-500
            group-hover:scale-110
            group-hover:rotate-6
            group-hover:border-transparent
            group-hover:bg-gradient-to-br
            group-hover:from-[#6957DF]
            group-hover:to-[#9F7AEA]
            group-hover:text-white"
          >
            <MapPin size={20} />
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Destination
            </p>

            <p className="font-semibold text-slate-800">
              {tour.location}
            </p>

          </div>

        </div>

        {/* CTA */}
        <button
          className="w-full rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] py-4 text-lg font-bold text-white shadow-[0_20px_40px_rgba(147,51,234,0.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_25px_50px_rgba(147,51,234,0.45)]"
        >
          Book Now
        </button>

      </div>

    </div>

  );
}