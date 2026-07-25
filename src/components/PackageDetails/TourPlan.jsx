import { useLayoutEffect, useRef, useState } from "react";
import TourDayCard from "./TourDayCard";

const packageOptions = [
  { key: "3", label: "3 Day Package" },
  { key: "5", label: "5 Day Package" },
  { key: "7", label: "7 Day Package" },
  { key: "10", label: "10 Day Package" },
  { key: "13", label: "13 Day Package" },
];

export default function TourPlan({
  tour,
  selectedPackage,
  setSelectedPackage,
}) {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);

  const [lineStyle, setLineStyle] = useState({
    top: 0,
    height: 0,
  });

  const currentPackage = tour?.packages?.[selectedPackage];

  const currentItinerary = currentPackage?.itinerary || [];
  const currentPrice = currentPackage?.price;
  const currentDuration = currentPackage?.duration;

  useLayoutEffect(() => {
    const calculateLine = () => {
      if (!currentItinerary.length) return;

      const container = containerRef.current;
      const circles = circleRefs.current.filter(Boolean);

      if (!container || circles.length === 0) return;

      const containerTop = container.getBoundingClientRect().top;
      const first = circles[0].getBoundingClientRect();
      const last = circles[circles.length - 1].getBoundingClientRect();

      const top = first.top - containerTop + first.height / 2;
      const bottom = last.top - containerTop + last.height / 2;

      setLineStyle({
        top,
        height: bottom - top,
      });
    };

    setTimeout(calculateLine, 100);

    window.addEventListener("resize", calculateLine);

    return () =>
      window.removeEventListener("resize", calculateLine);
  }, [selectedPackage, currentItinerary]);

  return (
    <section className="tp-root bg-[#FBF8F2] py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .tp-root { font-family: 'Inter', sans-serif; }
        .tp-serif { font-family: 'Fraunces', serif; font-variant-numeric: tabular-nums; }

        @keyframes tp-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(15, 110, 102, 0.3); }
          50% { box-shadow: 0 0 0 6px rgba(15, 110, 102, 0); }
        }
        .tp-eyebrow { animation: tp-glow 2.6s ease-in-out infinite; }

        .tp-pkg-btn {
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }
        .tp-pkg-btn:not(:disabled):hover { transform: translateY(-2px); }

        .tp-stub {
          position: relative;
        }
        .tp-notch {
          background: #FBF8F2;
        }

        @keyframes tp-count-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tp-stat-value { animation: tp-count-fade 0.5s ease both; }

        .tp-timeline-track {
          background: repeating-linear-gradient(
            to bottom,
            #E3A23D 0px,
            #E3A23D 6px,
            transparent 6px,
            transparent 14px
          );
        }
      `}</style>

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="tp-eyebrow inline-flex items-center gap-2 rounded-full bg-[#0F6E66] px-4 py-2 text-sm font-semibold text-white">
            Tour Itinerary
          </span>

          <h2 className="tp-serif mt-5 text-4xl font-bold text-[#1E2A47] md:text-5xl">
            Day Wise Tour Plan
          </h2>

          <p className="mt-3 text-gray-600">
            Explore every destination with our carefully designed itinerary.
          </p>
        </div>

        {/* Current Package Details — ticket stub */}
        {currentPackage && (
          <div className="tp-stub mx-auto mb-12 flex max-w-xl overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_-16px_rgba(30,42,71,0.25)]">
            <div className="flex-1 px-8 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A9078]">
                Duration
              </p>
              <h3 className="tp-serif tp-stat-value mt-1 text-2xl font-bold text-[#1E2A47]">
                {currentDuration}
              </h3>
            </div>

            {/* perforated divider */}
            <div className="relative w-0 border-l-2 border-dashed border-[#E4DFD1]">
              <div className="tp-notch absolute -top-3.5 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full" />
              <div className="tp-notch absolute -bottom-3.5 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full" />
            </div>

            <div className="flex-1 px-8 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A9078]">
                Starting From
              </p>
              <h3 className="tp-serif tp-stat-value mt-1 text-2xl font-bold text-[#C2185B]">
                ₹{currentPrice?.toLocaleString()}
              </h3>
            </div>
          </div>
        )}

        {/* Package Buttons */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {packageOptions.map((pkg) => {

            const isAvailable =
              tour?.packages?.[pkg.key]?.itinerary?.length > 0;

            const isSelected = selectedPackage === pkg.key;

            return (
              <button
                key={pkg.key}
                disabled={!isAvailable}
                onClick={() => setSelectedPackage(pkg.key)}
                className={`tp-pkg-btn rounded-full px-6 py-3 text-sm font-semibold ${
                  isSelected
                    ? "bg-gradient-to-r from-[#E3A23D] to-[#C2185B] text-white shadow-lg shadow-[#C2185B]/25"
                    : isAvailable
                    ? "bg-[#F7F4EC] text-[#1E2A47] hover:bg-[#EFE9D8]"
                    : "cursor-not-allowed bg-gray-100 text-gray-400 opacity-60"
                }`}
              >
                {pkg.label}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        {currentItinerary.length > 0 && (
          <div ref={containerRef} className="relative">

            <div
              className="tp-timeline-track absolute left-8 hidden w-[3px] rounded-full md:block"
              style={{
                top: lineStyle.top,
                height: lineStyle.height,
              }}
            />

            {currentItinerary.map((day, index) => (
              <div
                key={day.day}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                data-aos-duration="600"
                data-aos-offset="120"
                data-aos-easing="ease-in-out"
              >
                <TourDayCard
                  day={day}
                  circleRef={(el) => (circleRefs.current[index] = el)}
                />
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}