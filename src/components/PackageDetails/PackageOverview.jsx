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
    <section className="bg-white py-6">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Tour Overview
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            {tour.title}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <h3 className="mb-3 text-2xl font-bold text-sky-700">
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