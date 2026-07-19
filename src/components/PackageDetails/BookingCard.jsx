import {
  IndianRupee,
  CalendarDays,
  MapPin,
  Star,
  Phone,
  MessageCircle,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function BookingCard({ tour }) {
  return (
    <div className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-sky-600 to-orange-500 p-6 text-white">

        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-bold">
            Book This Tour
          </h3>

          <div className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1">

            <Star
              size={16}
              className="fill-yellow-300 text-yellow-300"
            />

            <span className="font-semibold">
              {tour.rating}
            </span>

          </div>

        </div>

        <div className="mt-5 flex items-end">

          <IndianRupee size={30} />

          <span className="text-4xl font-black">
            {tour.price.toLocaleString()}
          </span>

        </div>

        <p className="mt-1 text-white/90">
          Per Person
        </p>

      </div>

      {/* Details */}

      <div className="space-y-5 p-6">

        <div className="flex items-start gap-3">

          <CalendarDays
            size={20}
            className="mt-1 text-orange-500"
          />

          <div>

            <p className="text-sm text-gray-500">
              Duration
            </p>

            <h4 className="font-semibold text-slate-800">
              {tour.duration}
            </h4>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <MapPin
            size={20}
            className="mt-1 text-sky-600"
          />

          <div>

            <p className="text-sm text-gray-500">
              Destination
            </p>

            <h4 className="font-semibold text-slate-800">
              {tour.location}
            </h4>

          </div>

        </div>

        <hr className="border-slate-200" />

        {/* Buttons */}

        <a
          href={tour.enquiryLink}
          className="flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-orange-500 font-semibold text-white transition duration-300 hover:scale-[1.02]"
        >
          Enquire Now
        </a>

        <a
          href={tour.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 font-semibold text-white transition duration-300 hover:bg-green-600"
        >
          <FaWhatsapp size={22} />
          WhatsApp
        </a>

        <a
          href={tour.phone}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-sky-600 bg-white font-semibold text-sky-700 transition duration-300 hover:bg-sky-600 hover:text-white"
        >
          <Phone size={18} />
          Call Now
        </a>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 bg-slate-50 p-5">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">

            <MessageCircle
              className="text-orange-500"
              size={20}
            />

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Need Help?
            </p>

            <p className="font-semibold text-slate-800">
              Our travel expert is available 24×7.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}