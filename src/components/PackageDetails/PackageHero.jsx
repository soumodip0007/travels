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
    <section className="ph-root relative h-[70vh] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .ph-root { font-family: 'Inter', sans-serif; }
        .ph-serif { font-family: 'Fraunces', serif; font-variant-numeric: tabular-nums; }

        @keyframes ph-rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ph-rise-1 { animation: ph-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both; }
        .ph-rise-2 { animation: ph-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.18s both; }
        .ph-rise-3 { animation: ph-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both; }

        @keyframes ph-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(227, 162, 61, 0.45); }
          50% { box-shadow: 0 0 0 8px rgba(227, 162, 61, 0); }
        }
        .ph-badge { animation: ph-glow 2.6s ease-in-out infinite; }

        .ph-share {
          position: relative;
          overflow: hidden;
        }
        .ph-share::after {
          content: "";
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }
        .ph-share:hover::after { left: 130%; }
      `}</style>

      {/* Background Image */}

      <img
        src={tour.image}
        alt={tour.title}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A47]/95 via-[#1E2A47]/60 to-black/40"></div>

      {/* Decorative Blur */}

      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#E3A23D]/20 blur-[120px]"></div>

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#C2185B]/20 blur-[120px]"></div>

      {/* Content */}

      <div className="absolute inset-0 z-20 flex items-end">

        <div className="mx-auto flex w-[90%] max-w-7xl items-end justify-between pb-16">

          {/* Left */}

          <div className="max-w-3xl">

            {/* Rating */}

            <div className="ph-badge ph-rise-1 mb-5 inline-flex items-center gap-2 rounded-full bg-[#E3A23D] px-4 py-2 font-semibold text-white shadow-xl">

              <Star
                size={18}
                className="fill-white"
              />

              <span>{tour.rating} Superb</span>

            </div>

            {/* Title */}

            <h1 className="ph-serif ph-rise-2 text-5xl font-bold leading-tight text-white md:text-6xl">

              {tour.title}

            </h1>

            {/* Info */}

            <div className="ph-rise-3 mt-8 flex flex-wrap gap-8 text-white">

              {/* Price */}

              <div className="flex items-center gap-2">

                <IndianRupee
                  size={22}
                  className="text-[#E3A23D]"
                />

                <span className="ph-serif text-3xl font-bold">

                  {displayPrice.toLocaleString()}

                </span>

                <span className="text-lg text-gray-300">

                  / Per Person

                </span>

              </div>

              {/* Duration */}

              <div className="flex items-center gap-2">

                <Clock3
                  size={20}
                  className="text-[#E3A23D]"
                />

                <span>{displayDuration}</span>

              </div>

              {/* Location */}

              <div className="flex items-center gap-2">

                <MapPin
                  size={20}
                  className="text-[#E3A23D]"
                />

                <span>{tour.location}</span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="ph-rise-3 hidden lg:block">

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">

              <button
                onClick={handleShare}
                className="ph-share flex items-center gap-3 rounded-full bg-gradient-to-r from-[#E3A23D] to-[#C2185B] px-6 py-4 font-semibold text-white transition-transform duration-300 hover:scale-105"
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