import { useMemo, useState } from "react";
import packages from "../data/packages";
import TourCard from "./TourCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_PER_PAGE = 3;

export default function TourSection() {
  const domesticPackages = useMemo(
    () => packages.filter((pkg) => pkg.category === "domestic"),
    []
  );

  const internationalPackages = useMemo(
    () => packages.filter((pkg) => pkg.category === "international"),
    []
  );

  const [domesticPage, setDomesticPage] = useState(1);
  const [internationalPage, setInternationalPage] = useState(1);

  const paginate = (data, page) => {
    const start = (page - 1) * CARDS_PER_PAGE;
    return data.slice(start, start + CARDS_PER_PAGE);
  };

  const renderPagination = (page, totalPages, setPage) => (
    <div className="mt-14 flex items-center justify-center gap-5">

      {/* Previous */}

      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
          page === 1
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-gradient-to-r from-sky-600 to-sky-500 text-white shadow-lg hover:scale-110"
        }`}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Pills */}

      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`transition-all duration-300 ${
              page === index + 1
                ? "h-3 w-14 rounded-full bg-gradient-to-r from-sky-600 to-orange-500"
                : "h-3 w-3 rounded-full bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* Next */}

      <button
        onClick={() =>
          setPage((prev) => Math.min(prev + 1, totalPages))
        }
        disabled={page === totalPages}
        className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
          page === totalPages
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:scale-110"
        }`}
      >
        <ChevronRight size={22} />
      </button>

    </div>
  );

  const renderSection = (
    title,
    subtitle,
    data,
    page,
    setPage,
    color
  ) => {
    const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);

    return (
      <div className="mb-24">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span
            className={`inline-block rounded-full ${
              color === "orange"
                ? "bg-orange-100 text-orange-600"
                : "bg-sky-100 text-sky-700"
            } px-5 py-2 text-sm font-semibold`}
          >
            {subtitle}
          </span>

          <h3 className="mt-5 text-4xl font-black text-slate-800">
            {title}
          </h3>

        </div>

        {data.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 py-16 text-center text-lg text-slate-500">
            No Packages Available
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginate(data, page).map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                />
              ))}
            </div>

            {totalPages > 1 &&
              renderPagination(page, totalPages, setPage)}
          </>
        )}
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-10">

      {/* Background */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Main Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-800 md:text-6xl">
            Our Popular Tours
            <span className="block text-sky-600">
              & Packages
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Discover hand-picked travel experiences crafted with comfort,
            adventure and unforgettable memories across India and the world.
          </p>

        </div>

        {renderSection(
          "Domestic Tour Packages",
          "Explore Incredible India",
          domesticPackages,
          domesticPage,
          setDomesticPage,
          "sky"
        )}

        {renderSection(
          "International Tour Packages",
          "Travel The World",
          internationalPackages,
          internationalPage,
          setInternationalPage,
          "orange"
        )}

        <div className="flex justify-center">

          <button className="rounded-full bg-gradient-to-r from-sky-600 to-orange-500 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
            View All Packages
          </button>

        </div>

      </div>

    </section>
  );
}