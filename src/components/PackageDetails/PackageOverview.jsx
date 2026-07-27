import {
  Star,
  IndianRupee,
  Clock3,
  MapPin,
} from "lucide-react";

export default function PackageOverview({
  tour,
  selectedPackage,
}) {
  // Current selected package
  const currentPackage = tour?.packages?.[selectedPackage];

  // Fallback to first available package
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

  return (
    <section className="rounded-[36px]
              border
              border-white/70
              bg-white/80
              backdrop-blur-1xl
              shadow-[0_25px_60px_rgba(105,87,223,0.12)]
              p-8
              md:p-10
              ">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Section Heading */}
        <div className="mb-4">
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6957DF]">
            Tour Overview
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {tour.title}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-purple-100 bg-white px-8 py-4 shadow-sm">

              <h3 className=" text-2xl font-bold text-[#6957DF]">
                Overview
              </h3>

              <p className="leading-8 text-gray-600">
                {tour.overview}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}