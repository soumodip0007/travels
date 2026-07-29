import {
  Star,
  Clock3,
  MapPin,
  IndianRupee,
  Share2,
} from "lucide-react";

export default function PackageHero({
  tour,
  selectedPackage,
}) {
  // Current selected package
  const currentPackage = tour?.packages?.[selectedPackage];

  // Fallback to first available package if nothing is selected
  const firstAvailablePackage = Object.values(tour.packages || {}).find(
    (pkg) => pkg?.price
  );

  const displayPrice =
    currentPackage?.price ??
    firstAvailablePackage?.price ??
    0;

  const displayDuration =
    currentPackage?.duration ??
    firstAvailablePackage?.duration ??
    tour.duration;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: tour.title,
        text: tour.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Package link copied to clipboard!");
    }
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">

      {/* Background Image */}

      <img
        src={tour.image}
        alt={tour.title}
        className="h-full w-full object-cover"
      />

      {/* Content */}

      <div className="absolute inset-0 z-20 flex items-end">

        <div className="mx-auto flex w-[90%] max-w-7xl items-end justify-between pb-16">

          {/* Left */}

          <div className="max-w-3xl">

            {/* Rating */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-4 py-2 font-semibold text-white shadow-xl">

              <Star size={18} className="fill-white" />
              <span>{tour.rating} Superb</span>

            </div>

            {/* Title */}

            <h1 className="text-5xl font-black leading-tight text-white md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]">
              {tour.title}
            </h1>

            {/* Info */}

            <div className="mt-8 flex flex-wrap gap-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">

              {/* Price */}

              <div className="flex items-center gap-2">
                <IndianRupee size={22} className="text-white" />
                <span className="text-3xl font-black">
                  {displayPrice.toLocaleString()}
                </span>
                <span className="text-lg text-white/90">/ Per Person</span>
              </div>

              {/* Duration */}

              <div className="flex items-center gap-2">
                <Clock3 size={20} className="text-white" />
                <span>{displayDuration}</span>
              </div>

              {/* Location */}

              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-white" />
                <span>{tour.location}</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:block">

            <div className="rounded-3xl border border-white/30 bg-white/15 p-6 backdrop-blur-sm">

              <button
                onClick={handleShare}
                className="flex items-center gap-3 rounded-full bg-[#6957DF] px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#6957DF] hover:to-[#9F7AEA]"
              >
                <Share2 size={20} />
                Share Package
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}