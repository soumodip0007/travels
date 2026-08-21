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
    <section className="overflow-hidden rounded-[36px]
          border
          border-purple-100
          bg-gradient-to-br
          from-[#6957DF]/15
          via-[#9F7AEA]/10
          to-purple-100
          shadow-lg
          transition-all
          duration-300
          hover:shadow-2xl
          ">

      {/* Top */}
      <div className="border-b border-purple-50 p-8 bg-gradient-to-br from-[#7C3AED] via-purple-300 to-purple-400 md:p-10">
        <div className="mx-auto w-[92%] max-w-7xl">

          <div>
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6957DF]">
              Tour Overview
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900 -mb-6">
              {tour.title}
            </h2>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="p-8 md:p-10">
        <div className="mx-auto w-[92%] max-w-7xl">

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
      </div>

    </section>
  );
}