import { Link } from "react-router-dom";
import { Clock3, MapPin, IndianRupee, Star } from "lucide-react";

import packages from "../../data/packages";

export default function SimilarPackages({ currentSlug }) {

  const similarPackages = packages.filter(
    (pkg) => pkg.slug !== currentSlug
  );

  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Explore More
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Similar Tour Packages
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Discover more exciting destinations you may love.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {similarPackages.map((tour) => (

            <div
              key={tour.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">

                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  {tour.rating}

                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-sky-700 transition group-hover:text-orange-500">
                  {tour.title}
                </h3>

                <div className="mt-4 flex items-end">

                  <IndianRupee
                    size={22}
                    className="mt-1"
                  />

                  <span className="text-3xl font-black">
                    {tour.price.toLocaleString()}
                  </span>

                  <span className="ml-2 text-gray-500">
                    / Per Person
                  </span>

                </div>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-2 text-gray-600">

                    <Clock3
                      size={18}
                      className="text-orange-500"
                    />

                    {tour.duration}

                  </div>

                  <div className="flex items-center gap-2 text-gray-600">

                    <MapPin
                      size={18}
                      className="text-sky-600"
                    />

                    <span className="truncate">
                      {tour.location}
                    </span>

                  </div>

                </div>

                <Link
                  to={`/packages/${tour.slug}`}
                  className="mt-8 flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-orange-500 font-semibold text-white transition duration-300 hover:scale-105"
                >
                  View Package
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}