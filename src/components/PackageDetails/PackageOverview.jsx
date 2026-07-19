import {
  Star,
  IndianRupee,
  Clock3,
  MapPin,
} from "lucide-react";

export default function PackageOverview({ tour }) {
  return (
    <section className="bg-white py-14">
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

          {/* ================= Left ================= */}

          <div className="lg:col-span-2">

            {/* Overview */}

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold text-sky-700">
                Overview
              </h3>

              <p className="leading-8 text-gray-600">
                {tour.overview}
              </p>

            </div>

          </div>

          {/* ================= Right Card ================= */}

          <div>

            <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">

              {/* Rating */}

              <div className="mb-5 flex items-center justify-between">

                <span className="text-lg font-semibold text-slate-700">
                  Rating
                </span>

                <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-bold text-green-700">

                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  {tour.rating}

                </div>

              </div>

              {/* Price */}

              <div className="mb-6">

                <p className="text-sm text-gray-500">
                  Starting From
                </p>

                <div className="mt-2 flex items-center">

                  <IndianRupee
                    size={28}
                    className="text-slate-900"
                  />

                  <span className="text-4xl font-black text-slate-900">
                    {tour.price.toLocaleString()}
                  </span>

                </div>

                <p className="text-gray-500">
                  Per Person
                </p>

              </div>

              {/* Duration */}

              <div className="mb-4 flex items-center gap-3 rounded-xl bg-slate-50 p-4">

                <Clock3 className="text-orange-500" />

                <div>

                  <p className="text-sm text-gray-500">
                    Duration
                  </p>

                  <p className="font-semibold">
                    {tour.duration}
                  </p>

                </div>

              </div>

              {/* Destination */}

              <div className="mb-8 flex items-center gap-3 rounded-xl bg-slate-50 p-4">

                <MapPin className="text-sky-600" />

                <div>

                  <p className="text-sm text-gray-500">
                    Destination
                  </p>

                  <p className="font-semibold">
                    {tour.location}
                  </p>

                </div>

              </div>

              {/* CTA */}

              <button className="w-full rounded-full bg-gradient-to-r from-sky-600 to-orange-500 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105">
                Book Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}