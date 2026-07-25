import { Link } from "react-router-dom";

import {
  Share2,
  Clock3,
  MapPin,
  IndianRupee,
  Eye,
  Send,
  Phone,
  Star,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function TourCard({ tour }) {
  // Find the cheapest available package
  const availablePackages = Object.values(tour.packages || {}).filter(
    (pkg) => pkg?.price
  );

  const cheapestPackage =
    availablePackages.length > 0
      ? availablePackages.reduce((prev, current) =>
          current.price < prev.price ? current : prev
        )
      : null;

  const startingPrice = cheapestPackage?.price || 0;

  const startingDuration =
    cheapestPackage?.duration || tour.duration || "";

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: tour.title,
      text: tour.title,
      url: `${window.location.origin}/packages/${tour.slug}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Package link copied!");
    }
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}

      <div className="relative overflow-hidden">

        <img
          src={tour.image}
          alt={tour.title}
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

        {/* Rating */}

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg">

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-bold">
            {tour.rating}
          </span>

        </div>

        {/* Category */}

        <div
          className={`absolute left-4 top-16 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg ${
            tour.category === "international"
              ? "bg-gradient-to-r from-purple-600 to-pink-600"
              : "bg-gradient-to-r from-sky-600 to-blue-700"
          }`}
        >
          {tour.category} Tour
        </div>

        {/* Share */}

        <button
          onClick={handleShare}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-700 shadow-lg transition-all duration-300 hover:rotate-12 hover:bg-sky-600 hover:text-white"
        >
          <Share2 size={18} />
        </button>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="flex flex-1 flex-col p-5">

        {/* Title */}

        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-sky-700 transition-colors duration-300 group-hover:text-orange-500">
          {tour.title}
        </h3>

        {/* Price */}

        <div className="mt-4">

          <div className="flex items-center">

            <IndianRupee
              size={18}
              className="mr-1 text-slate-900"
            />

            <span className="text-3xl font-black text-slate-900">
              {startingPrice.toLocaleString()}
            </span>

          </div>

          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
            Starting From / Person
          </p>

        </div>

        {/* Duration & Destination */}

        <div className="mt-5 space-y-3 text-sm">

          <div className="flex items-center gap-2">

            <Clock3
              size={16}
              className="text-orange-500"
            />

            <span className="font-medium text-slate-700">
              {startingDuration}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <MapPin
              size={16}
              className="flex-shrink-0 text-sky-600"
            />

            <span className="truncate font-medium text-slate-700">
              {tour.location}
            </span>

          </div>

        </div>

        {/* Divider */}

        <div className="my-5 h-px bg-slate-200"></div>

                {/* ================= Facilities ================= */}

        <div className="grid grid-cols-5 gap-2">

          {tour.facilities.slice(0, 5).map((facility) => {

            const Icon = facility.icon;

            return (
              <div
                key={facility.id}
                title={facility.label}
                className="group/icon flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-sky-50 text-sky-600 transition-all duration-300 hover:scale-110 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
              >
                <Icon size={20} />
              </div>
            );

          })}

        </div>

        {/* Push buttons to bottom */}

        {/* Buttons */}

<div className="mt-auto pt-6">

  <div className="flex items-center gap-2">

    {/* View Details */}

    <Link
      to={`/packages/${tour.slug}`}
      className="flex-[3] flex h-11 items-center justify-center gap-2 rounded-full border-2 border-orange-500 bg-white px-3 font-semibold text-orange-500 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-orange-500 hover:text-white hover:shadow-lg"
    >
      <Eye size={18} />
      <span className="whitespace-nowrap">View Details</span>
    </Link>

    {/* Enquiry */}

    <Link
      to={`/packages/${tour.slug}`}
      title="Enquiry"
      className="flex-1 flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-700 text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      <Send size={18} />
    </Link>

    {/* WhatsApp */}

    <a
      href={tour.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
      className="flex-1 flex h-11 items-center justify-center rounded-full bg-green-500 text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-lg"
    >
      <FaWhatsapp size={20} />
    </a>

    {/* Call */}

    <a
      href={tour.phone}
      title="Call"
      className="flex-1 flex h-11 items-center justify-center rounded-full bg-slate-800 text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-slate-900 hover:shadow-lg"
    >
      <Phone size={18} />
    </a>

  </div>

</div>

      </div>

    </div>
  );
}