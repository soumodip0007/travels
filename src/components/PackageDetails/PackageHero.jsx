import {
  Star,
  Clock3,
  MapPin,
  IndianRupee,
  Share2,
} from "lucide-react";

export default function PackageHero({ tour }) {
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

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-sky-900/60 to-black/40"></div>

      {/* Decorative Blur */}

      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]"></div>

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]"></div>

      {/* Content */}

      <div className="absolute inset-0 z-20 flex items-end">

        <div className="mx-auto flex w-[90%] max-w-7xl items-end justify-between pb-16">

          {/* Left */}

          <div className="max-w-3xl">

            {/* Rating */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 font-semibold text-white shadow-xl">

              <Star
                size={18}
                className="fill-white"
              />

              <span>{tour.rating} Superb</span>

            </div>

            {/* Title */}

            <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">

              {tour.title}

            </h1>

            {/* Info */}

            <div className="mt-8 flex flex-wrap gap-8 text-white">

              <div className="flex items-center gap-2">

                <IndianRupee
                  size={22}
                  className="text-orange-400"
                />

                <span className="text-3xl font-black">

                  {tour.price.toLocaleString()}

                </span>

                <span className="text-lg text-gray-300">

                  / Per Person

                </span>

              </div>

              <div className="flex items-center gap-2">

                <Clock3
                  size={20}
                  className="text-orange-400"
                />

                <span>{tour.duration}</span>

              </div>

              <div className="flex items-center gap-2">

                <MapPin
                  size={20}
                  className="text-orange-400"
                />

                <span>{tour.location}</span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:block">

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">

              <button
                onClick={handleShare}
                className="flex items-center gap-3 rounded-full bg-sky-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-500"
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