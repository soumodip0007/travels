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
          : "bg-gradient-to-r from-[#6957DF] to-[#8471F2] text-white shadow-lg hover:scale-110"
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
              ? "h-3 w-14 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]"
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
          : "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg hover:scale-110"
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
      <div className="mb-15">

        {/* Heading */}

        <div className="mb-12 text-center">

          {/* <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-500 md:text-xl">
            {subtitle}
          </p> */}

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
                  className="ts-cta rounded-full bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
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
    <section className="ts-root relative overflow-hidden bg-gradient-to-b from-white via-[#FBF8F2] to-white mt-20 py-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .ts-root { font-family: 'Inter', sans-serif; }
        .ts-serif { font-family: 'Fraunces', serif; }

        @keyframes ts-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.3); }
          50% { box-shadow: 0 0 0 6px rgba(124, 58, 237, 0); }
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

        @keyframes ts-drift-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -25px) rotate(8deg); }
        }
        @keyframes ts-drift-slow-rev {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-25px, 20px) rotate(-6deg); }
        }
        .ts-drift-a { animation: ts-drift-slow 14s ease-in-out infinite; }
        .ts-drift-b { animation: ts-drift-slow-rev 17s ease-in-out infinite; }
      `}</style>

      {/* ================= Background: large, prominent, color-themed shapes ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top-left mega blob */}
        <div className="ts-drift-a absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-[#8471F2]/50 to-[#6957DF]/25 blur-3xl"></div>

        {/* Top-right mega blob */}
        <div className="ts-drift-b absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-[#A855F7]/45 to-[#7C3AED]/20 blur-3xl"></div>

        {/* Mid-left accent blob */}
        <div className="ts-drift-b absolute left-[8%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#6E56E8]/35 blur-3xl"></div>

        {/* Center-bottom large blob */}
        <div className="ts-drift-a absolute bottom-[-6rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-t from-[#7C3AED]/40 to-transparent blur-3xl"></div>

        {/* Bottom-right mega blob */}
        <div className="ts-drift-a absolute -right-28 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tl from-[#C2185B]/35 to-[#E3A23D]/25 blur-3xl"></div>

        {/* Soft rotated square outline, top area */}
        <div className="ts-drift-b absolute right-[18%] top-16 h-40 w-40 rotate-12 rounded-[2rem] border-2 border-[#7C3AED]/25"></div>

        {/* Soft rotated ring, lower-left */}
        <div className="ts-drift-a absolute left-[6%] bottom-24 h-56 w-56 rounded-full border-2 border-[#A855F7]/20"></div>

        {/* Dot-grid texture over everything */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6957DF 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        ></div>

      </div>

      <div className="relative z-10 mx-auto w-[96%] max-w-[1700px]">

        {/* Main Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="ts-serif mt-6 whitespace-nowrap text-4xl font-bold leading-tight text-[#1E2A47] md:text-6xl">
            Our Popular{" "}
            <span className="bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
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