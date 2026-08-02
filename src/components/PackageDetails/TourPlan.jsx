import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import TourDayCard from "./TourDayCard";

// Updated package keys
const packageOptions = [
  { key: "package1", label: "Package 1" },
  { key: "package2", label: "Package 2" },
  { key: "package3", label: "Package 3" },
  { key: "package4", label: "Package 4" },
  { key: "package5", label: "Package 5" },
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

  // Current package object
  const currentPackage = tour?.packages?.[selectedPackage];

  const currentItinerary = currentPackage?.itinerary || [];
  const currentPrice = currentPackage?.price;
  const currentDuration = currentPackage?.duration;

  // Animated price
  const [animatedPrice, setAnimatedPrice] = useState(currentPrice ?? 0);
  const previousPrice = useRef(currentPrice ?? 0);

  useEffect(() => {
    if (currentPrice == null) return;

    const controls = animate(previousPrice.current, currentPrice, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (value) => setAnimatedPrice(Math.round(value)),
    });

    previousPrice.current = currentPrice;

    return () => controls.stop();
  }, [currentPrice]);

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
    <section
      className="rounded-[36px]
      border border-white/70
      bg-white/80
      backdrop-blur-1xl
      shadow-[0_25px_60px_rgba(105,87,223,0.12)]
      mt-12"
    >
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}
        <div className="mt-8 text-center">
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6957DF]">
            Tour Itinerary
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Day Wise Tour Plan
          </h2>
        </div>

        {/* Current Package Details */}
        {currentPackage && (
          <div className="mb-8 mt-6 flex flex-wrap justify-center gap-6">

            <div className="rounded-2xl bg-purple-50 px-8 py-5 shadow">
              <p className="text-sm text-gray-500">Duration</p>
              <h3 className="text-xl font-bold text-[#6957DF]">
                {currentDuration}
              </h3>
            </div>

            <div className="rounded-2xl bg-purple-50 px-8 py-5 shadow">
              <p className="text-sm text-gray-500">Starting From</p>
              <h3 className="text-xl font-bold text-[#6957DF] tabular-nums">
                ₹{animatedPrice.toLocaleString()}
              </h3>
            </div>

          </div>
        )}

        {/* Package Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {packageOptions.map((pkg) => {

            const isAvailable =
              tour?.packages?.[pkg.key]?.itinerary?.length > 0;

            const isSelected = selectedPackage === pkg.key;

            return (
              <motion.button
                key={pkg.key}
                disabled={!isAvailable}
                onClick={() => setSelectedPackage(pkg.key)}
                whileHover={isAvailable ? { scale: 1.06, y: -2 } : {}}
                whileTap={isAvailable ? { scale: 0.96 } : {}}
                animate={
                  isSelected
                    ? { scale: [1, 1.08, 1] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] text-white shadow-lg"
                    : isAvailable
                    ? "bg-purple-100 text-[#6957DF] hover:bg-purple-200"
                    : "cursor-not-allowed bg-gray-200 text-gray-400 opacity-60"
                }`}
              >
                {pkg.label}
              </motion.button>
            );
          })}
        </div>

        {/* Timeline */}
        {currentItinerary.length > 0 && (
          <div ref={containerRef} className="relative">

            <div
              className="absolute left-8 hidden w-1 rounded-full bg-purple-300 md:block"
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