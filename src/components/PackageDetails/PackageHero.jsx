import { Star, Clock3, MapPin, IndianRupee, Share2 } from "lucide-react";

export default function PackageHero({ tour, selectedPackage }) {
  // Current selected package
  const currentPackage = tour?.packages?.[selectedPackage];

  // Fallback to first available package if nothing is selected
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
    <section className="relative h-[70vh] overflow-hidden rounded-b-[48px] md:rounded-b-[64px]">
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

          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-md">
            {/* Subtle brand-color wash, contained inside the card only */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6957DF]/25 via-transparent to-transparent" />

            <div className="relative p-8 md:p-10">
              <div className="max-w-3xl">
                {/* Rating */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-5 py-2 font-semibold text-white shadow-lg">
                  <Star size={17} className="fill-white" />
                  <span className="text-sm tracking-wide">
                    {tour.rating} Superb
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                  {tour.title}
                </h1>

                {/* Info */}
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                      <IndianRupee size={16} className="text-white" />
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-white">
                        {displayPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-white/70">
                        / Per Person
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                      <Clock3 size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-white/90">
                      {displayDuration}
                    </span>
                  </div>

                  {/* Location */}
                  {/* <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <MapPin size={16} className="text-white" />
          </div>
          <span className="text-sm font-medium text-white/90">
            {tour.location}
          </span>
        </div> */}
                </div>
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#A855F7] to-transparent shadow-[0_0_18px_rgba(168,85,247,0.85)]" />
    </section>
  );
}
