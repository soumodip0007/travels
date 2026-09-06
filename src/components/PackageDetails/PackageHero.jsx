import { Star, Clock3, MapPin, IndianRupee, Share2 } from "lucide-react";

export default function PackageHero({ tour, selectedPackage }) {
  const currentPackage = tour?.packages?.[selectedPackage];

  const firstAvailablePackage = Object.values(tour.packages || {}).find(
    (pkg) => pkg?.price,
  );

  const displayPrice =
    currentPackage?.price ?? firstAvailablePackage?.price ?? 0;

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
    <section
      className="
        relative
        h-[75vh]
        min-h-[600px]
        overflow-hidden
        rounded-b-[40px]
        sm:h-[70vh]
        sm:min-h-[550px]
        md:rounded-b-[64px]
      "
    >
      {/* Background Image */}

      <img
        src={tour.image}
        alt={tour.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_center]
          sm:object-center
        "
      />

      {/* Mobile Image Overlay */}

      <div className="absolute inset-0 bg-black/20 md:bg-transparent" />

      {/* Content */}

      <div className="absolute inset-0 z-20 flex items-end">
        <div
          className="
            mx-auto
            flex
            w-[92%]
            max-w-7xl
            items-end
            justify-between
            pb-8
            sm:pb-10
            md:w-[90%]
            md:pb-16
          "
        >
          {/* Left */}

          <div
            className="
              relative
              w-full
              translate-y-4
              overflow-hidden
              rounded-[24px]
              border
              border-white/15
              bg-black/45
              shadow-[0_20px_50px_rgba(0,0,0,0.45)]
              backdrop-blur-md
              sm:translate-y-6
              sm:rounded-[28px]
              md:w-auto
              md:translate-y-8
            "
          >
            {/* Brand Color Wash */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6957DF]/25 via-transparent to-transparent" />

            <div className="relative p-5 sm:p-7 md:p-10">
              <div className="max-w-3xl">

                {/* Rating */}

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-4 py-2 font-semibold text-white shadow-lg sm:mb-5 sm:px-5">
                  <Star size={16} className="fill-white sm:h-[17px] sm:w-[17px]" />

                  <span className="text-xs tracking-wide sm:text-sm">
                    {tour.rating} Superb
                  </span>
                </div>

                {/* Title */}

                <h1
                  className="
                    text-3xl
                    font-black
                    leading-[1.1]
                    tracking-tight
                    text-white
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {tour.title}
                </h1>

                {/* Info */}

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-6 sm:gap-x-8 sm:gap-y-4">

                  {/* Price */}

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-9 sm:w-9">
                      <IndianRupee
                        size={15}
                        className="text-white sm:h-4 sm:w-4"
                      />
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-white sm:text-2xl">
                        {displayPrice.toLocaleString()}
                      </span>

                      <span className="text-xs text-white/70 sm:text-sm">
                        / Per Person
                      </span>
                    </div>
                  </div>

                  {/* Duration */}

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-9 sm:w-9">
                      <Clock3
                        size={15}
                        className="text-white sm:h-4 sm:w-4"
                      />
                    </div>

                    <span className="text-xs font-medium text-white/90 sm:text-sm">
                      {displayDuration}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right - Share */}

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

      {/* Bottom Line */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#A855F7] to-transparent shadow-[0_0_18px_rgba(168,85,247,0.85)]" />
    </section>
  );
}