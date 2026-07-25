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
    <section className="po-root bg-white py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .po-root { font-family: 'Inter', sans-serif; }
        .po-serif { font-family: 'Fraunces', serif; }

        @keyframes po-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(15, 110, 102, 0.3); }
          50% { box-shadow: 0 0 0 6px rgba(15, 110, 102, 0); }
        }
        .po-eyebrow { animation: po-glow 2.6s ease-in-out infinite; }

        .po-corner {
          position: absolute;
          width: 26px;
          height: 26px;
          border-radius: 9999px;
          background: white;
        }
      `}</style>

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10">
          <span className="po-eyebrow inline-flex rounded-full bg-[#0F6E66] px-4 py-2 text-sm font-semibold text-white">
            Tour Overview
          </span>

          <h2 className="po-serif mt-5 text-4xl font-bold text-[#1E2A47]">
            {tour.title}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left */}
          <div className="lg:col-span-3">

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              {/* die-cut corners, echoing the ticket motif */}
              <span className="po-corner -left-3.5 -top-3.5" />
              <span className="po-corner -right-3.5 -top-3.5" />

              <h3 className="po-serif mb-3 text-2xl font-bold text-[#C2185B]">
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