import { useMemo, useState } from "react";
import packages from "../data/packages";
import TourCard from "./TourCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_PER_PAGE = 4;

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

  const [showAllDomestic, setShowAllDomestic] = useState(false);
  const [showAllInternational, setShowAllInternational] = useState(false);



  const renderPagination = (page, totalPages, setPage) => (
    <div className="mt-14 flex items-center justify-center gap-5">

      {/* Previous */}

      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${page === 1
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-gradient-to-r from-[#0F6E66] to-[#14877D] text-white shadow-lg hover:scale-110"
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
            className={`transition-all duration-300 ${page === index + 1
                ? "h-3 w-14 rounded-full bg-gradient-to-r from-[#E3A23D] to-[#C2185B]"
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
        className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${page === totalPages
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-gradient-to-r from-[#E3A23D] to-[#C2185B] text-white shadow-lg hover:scale-110"
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
    showAll,
    setShowAll,
    color
  ) => {
    const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);

    const visiblePackages = showAll
      ? data
      : data.slice(0, CARDS_PER_PAGE);

    const handleToggle = () => {
      if (showAll) {
        // Collapsing back: reset to the first page of pagination
        setPage(1);
      }
      setShowAll(!showAll);
    };

    return (
      <div className="mb-24">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span
            className={`ts-eyebrow inline-block rounded-full px-5 py-2 text-sm font-semibold text-white ${color === "orange" ? "bg-[#E3A23D]" : "bg-[#0F6E66]"
              }`}
          >
            {subtitle}
          </span>

          <h3 className="ts-serif mt-5 text-4xl font-bold text-[#1E2A47]">
            {title}
          </h3>

        </div>

        {data.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 py-16 text-center text-lg text-slate-500">
            No Packages Available
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {visiblePackages.map((tour, index) => (
                <div
                  key={tour.id}
                  style={{ animationDelay: `${(index % CARDS_PER_PAGE) * 80}ms` }}
                  className="ts-card-in"
                >
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>

            {/* Pagination — only while collapsed */}
            {!showAll &&
              totalPages > 1 &&
              renderPagination(page, totalPages, setPage)}

            {/* View All / Show Less toggle */}
            {data.length > CARDS_PER_PAGE && (
              <div className="mt-10 flex justify-center">

                <button
                  onClick={handleToggle}
                  className="ts-cta rounded-full bg-gradient-to-r from-[#E3A23D] to-[#C2185B] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                >
                  {showAll ? "Show Less" : "View All Packages"}
                </button>

              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section className="ts-root relative overflow-hidden bg-gradient-to-b from-white via-[#FBF8F2] to-white py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .ts-root { font-family: 'Inter', sans-serif; }
        .ts-serif { font-family: 'Fraunces', serif; }

        @keyframes ts-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(15, 110, 102, 0.3); }
          50% { box-shadow: 0 0 0 6px rgba(15, 110, 102, 0); }
        }
        .ts-eyebrow { animation: ts-glow 2.6s ease-in-out infinite; }

        @keyframes ts-card-rise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ts-card-in { animation: ts-card-rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }

        .ts-cta {
          position: relative;
          overflow: hidden;
        }
        .ts-cta::after {
          content: "";
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }
        .ts-cta:hover::after { left: 130%; }
      `}</style>

      {/* Background */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#E3A23D]/15 blur-3xl"></div>

      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#C2185B]/15 blur-3xl"></div>

      <div className="relative mx-auto w-[96%] max-w-[1700px]">

        {/* Main Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <h2 className="ts-serif mt-6 whitespace-nowrap text-4xl font-bold leading-tight text-[#1E2A47] md:text-6xl">
            Our Popular{" "}
            <span className="bg-gradient-to-r from-[#E3A23D] to-[#C2185B] bg-clip-text text-transparent">
              Tour Packages
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
          showAllDomestic,
          setShowAllDomestic,
          "sky"
        )}

        {renderSection(
          "International Tour Packages",
          "Travel The World",
          internationalPackages,
          internationalPage,
          setInternationalPage,
          showAllInternational,
          setShowAllInternational,
          "orange"
        )}

      </div>

    </section>
  );
}