import { Link } from "react-router-dom";

import {
  Share2,
  Clock3,
  MapPin,
  IndianRupee,
  Send,
  Phone,
  Star,
  ArrowRight,
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
      } catch { }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Package link copied!");
    }
  };

  return (
    <div className="group flex h-full flex-col rounded-[28px] bg-gradient-to-br from-[#000] via-[#6D53E1] to-[#261B57] text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}

      <div className="relative overflow-hidden rounded-t-[28px]">

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

          <span className="text-sm font-bold text-slate-900">
            {tour.rating}
          </span>

        </div>

        {/* Category */}

        <div
          className={`absolute left-4 top-16 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg ${tour.category === "international"
            ? "bg-gradient-to-r from-purple-600 to-pink-600"
            : "bg-gradient-to-r from-sky-600 to-blue-700"
            }`}
        >
          {tour.category} Tour
        </div>

        {/* Share */}

        <button
          onClick={handleShare}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#5B4BD6] shadow-lg transition-all duration-300 hover:rotate-12 hover:bg-[#5B4BD6] hover:text-white"
        >
          <Share2 size={18} />
        </button>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative flex flex-1 flex-col overflow-hidden p-6">

        {/* Decorative background glows */}
        <div className="pointer-events-none absolute -right-14 -top-20 h-64 w-64 rounded-full bg-fuchsia-300/20 blur-1xl animate-[float-a_8s_ease-in-out_infinite]"></div>
        <div className="pointer-events-none absolute -bottom-4 left-14 h-116 w-116 rounded-full bg-indigo-900/50 blur-1xl animate-[float-b_10s_ease-in-out_infinite]"></div>
        <div className="pointer-events-none absolute -right-18 -top-20 bg-transparent h-44 w-44 rounded-full border-2 border-white/40 animate-[breathe_4s_ease-in-out_infinite]"></div>
        {/* <div className="bg-transparent pointer-events-none absolute -right-6 top-10 h-16 w-16 rounded-full border border-white/10"></div> */}
        {/* <div
  className="pointer-events-none absolute inset-0 opacity-[0.07]"
  style={{
    backgroundImage:
      "radial-gradient(circle, #ffffff 3px, transparent 1px)",
    backgroundSize: "18px 18px",
  }}
></div> */}

        <div className="relative z-10 flex flex-1 flex-col">
          {/* content */}
        </div>

        <style>{`
  @keyframes float-a {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-14px, 16px) scale(1.08); }
  }
  @keyframes float-b {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(12px, -14px) scale(1.05); }
  }
  @keyframes breathe {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.9; transform: scale(1.06); }
  }
  @keyframes sweep {
    0% { transform: translateX(-30%); }
    100% { transform: translateX(30%); }
  }
`}</style>

        <div className="relative z-10 flex flex-1 flex-col">

          {/* Title */}
          <h3 className="line-clamp-2 text-xl font-bold leading-snug text-white">
            {tour.title}
          </h3>

          {/* Price */}
          <div className="mt-3 flex items-center">
            <IndianRupee size={17} className="mr-1 text-white" />
            <span className="text-2xl font-black text-white">
              {startingPrice.toLocaleString()}
            </span>
            <span className="ml-2 text-xs font-medium uppercase tracking-wide text-white/90">
              / person
            </span>
          </div>

          {/* Duration & Destination */}
          <div className="mt-4 space-y-2.5 text-sm text-white/90">

            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-white/90" />
              <span className="font-medium">{startingDuration}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="flex-shrink-0 text-white/90" />
              <span className="truncate font-medium">{tour.location}</span>
            </div>

          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-white/45"></div>

          {/* ================= Facilities ================= */}

          <div className="grid grid-cols-5 gap-2">
            {tour.facilities.slice(0, 5).map((facility) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.id}
                  title={facility.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#5B4BD6]"
                >
                  <Icon size={18} />
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ================= FOOTER: actions ================= */}

      <div className="relative flex items-center justify-between gap-4 px-4 py-3">

        {/* View Details — primary text CTA */}
        <Link
          to={`/packages/${tour.slug}`}
          className="flex h-11 items-center gap-2 rounded-full border-2 border-white bg-white px-5 font-semibold text-[#5B4BD6] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-slate-50"
        >
          <span className="whitespace-nowrap">View Details</span>
        </Link>

        <div className="flex items-center gap-2">

          {/* Enquiry */}
          <Link
            to={`/packages/${tour.slug}`}
            title="Enquiry"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/15 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#5B4BD6]"
          >
            <Send size={17} />
          </Link>

          {/* WhatsApp */}
          <a
            href={tour.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/15 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-green-600"
          >
            <FaWhatsapp size={18} />
          </a>

          {/* Call */}
          <a
            href={tour.phone}
            title="Call"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/15 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#5B4BD6]"
          >
            <Phone size={16} />
          </a>

        </div>

      </div>

    </div>
  );
}
