import {
  IndianRupee,
  CalendarDays,
  MapPin,
  Star,
  Phone,
  MessageCircle,
  Clock3
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

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
  return (
    <div>

      <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">

        {/* Rating */}
        <div className="mb-5 flex items-center justify-between">

          <span className="text-lg font-semibold text-slate-700">
            Rating
          </span>

          <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-bold text-green-700">

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

            <span className="text-4xl font-black text-slate-900">
              {displayPrice.toLocaleString()}
            </span>

          </div>

          <p className="text-gray-500">
            / Per Person
          </p>

        </div>

        {/* Duration */}
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-slate-50 p-4">

          <Clock3 className="text-orange-500" />

          <div>

            <p className="text-sm text-gray-500">
              Duration
            </p>

            <p className="font-semibold">
              {displayDuration}
            </p>

          </div>

        </div>

        {/* Destination */}
        <div className="mb-8 flex items-center gap-3 rounded-xl bg-slate-50 p-4">

          <MapPin className="text-sky-600" />

          <div>

            <p className="text-sm text-gray-500">
              Destination
            </p>

            <p className="font-semibold">
              {tour.location}
            </p>

          </div>

        </div>

        {/* CTA */}
        <button className="w-full rounded-full bg-gradient-to-r from-sky-600 to-orange-500 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105">
          Book Now
        </button>

      </div>

    </div>

  );
}