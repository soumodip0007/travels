import packages from "../data/packages";
import TourCard from "./TourCard";

export default function TourSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-10">

      {/* Background Decorations */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-800 md:text-6xl">

            Our Popular Tours
            <span className="block text-sky-600">
              & Packages
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">

            Discover hand-picked travel experiences crafted with comfort,
            adventure, and unforgettable memories. Choose from our most
            popular domestic and international holiday packages.

          </p>

        </div>

        {/* Cards Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {packages.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))}

        </div>

        {/* Bottom Button */}

        <div className="mt-16 flex justify-center">

          <button className="rounded-full bg-gradient-to-r from-sky-600 to-orange-500 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">

            View All Packages

          </button>

        </div>

      </div>

    </section>
  );
}