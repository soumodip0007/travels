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
    <section className="bg-white py-16">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Tour Itinerary
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Day Wise Tour Plan
          </h2>

          <p className="mt-3 text-gray-600">
            Explore every destination with our carefully designed itinerary.
          </p>
        </div>

        {/* Current Package Details */}
        {currentPackage && (
          <div className="mb-10 flex flex-wrap justify-center gap-6">

            <div className="rounded-2xl bg-sky-50 px-8 py-5 shadow">
              <p className="text-sm text-gray-500">
                Duration
              </p>

              <h3 className="text-xl font-bold text-sky-700">
                {currentDuration}
              </h3>
            </div>

            <div className="rounded-2xl bg-sky-50 px-8 py-5 shadow">
              <p className="text-sm text-gray-500">
                Starting From
              </p>

              <h3 className="text-xl font-bold text-sky-700">
                ₹{currentPrice?.toLocaleString()}
              </h3>
            </div>

          </div>
        )}

        {/* Package Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {packageOptions.map((pkg) => {

            const isAvailable =
              tour?.packages?.[pkg.key]?.itinerary?.length > 0;

            return (
              <button
                key={pkg.key}
                disabled={!isAvailable}
                onClick={() => setSelectedPackage(pkg.key)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  selectedPackage === pkg.key
                    ? "bg-sky-600 text-white shadow-lg"
                    : isAvailable
                    ? "bg-sky-100 text-sky-700 hover:bg-sky-200"
                    : "cursor-not-allowed bg-gray-200 text-gray-400 opacity-60"
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
              className="absolute left-8 hidden w-1 rounded-full bg-sky-100 md:block"
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
                data-aos-duration="900"
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