import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import TourDayCard from "./TourDayCard";
import { CalendarDays, CheckCircle2, Clock3, ArrowRight } from "lucide-react";

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
      className="overflow-hidden rounded-[36px]
      border border-purple-100
      bg-gradient-to-br from-[#6957DF]/15 via-[#9F7AEA]/10 to-purple-100
      shadow-lg
      transition-all duration-300
      hover:shadow-2xl
      mt-12"
    >
      {/* Top — Heading band, matches TourDayCard's header */}
      <div className="border-b border-purple-50 bg-gradient-to-br from-[#7C3AED] via-purple-300 to-purple-400 p-8 md:p-10">
        <div className="mx-auto w-[92%] max-w-7xl text-center">
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6957DF]">
            Tour Itinerary
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Day Wise Tour Plan
          </h2>
        </div>
      </div>

      {/* Bottom — Content */}
      <div className="p-8 md:p-10">
        <div className="mx-auto w-[92%] max-w-7xl">

          {/* Current Package Details */}
          {currentPackage && (
            <div className="mb-8 flex flex-wrap justify-center gap-6">

              <div className="rounded-2xl bg-white px-8 py-5 shadow-sm border border-purple-100">
                <p className="text-sm text-gray-500">Duration</p>
                <h3 className="text-xl font-bold text-[#6957DF]">
                  {currentDuration}
                </h3>
              </div>

              <div className="rounded-2xl bg-white px-8 py-5 shadow-sm border border-purple-100">
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
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${isSelected
                    ? "bg-gradient-to-r from-[#462edf] to-[#7941eb] text-white shadow-lg"
                    : isAvailable
                      ? "bg-white text-[#6957DF] border border-purple-100 hover:bg-purple-50"
                      : "cursor-not-allowed bg-gray-200 text-gray-400 opacity-60"
                    }`}
                >
                  {pkg.label}
                </motion.button>
              );
            })}
          </div>

          {/* Departure Dates */}
          {tour?.departureDates?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-8 flex justify-center"
            >
              <div
                className="relative w-full max-w-4xl overflow-hidden rounded-[30px]
             border border-purple-100/70
             bg-gradient-to-br from-[#FCFAFF] via-[#F7F2FF] to-[#F3EDFF]
             px-6 py-6 backdrop-blur-xl md:px-8 md:py-7
             shadow-[0_12px_28px_rgba(109,40,217,0.10),0_28px_60px_rgba(109,40,217,0.16),inset_0_1px_0_rgba(255,255,255,0.75)]"
              >
                {/* soft decorative circles */}
                <div className="absolute -top-16 -left-16 h-44 w-44 rounded-full bg-[#8B5CF6]/8 blur-2xl" />
                <div className="absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-[#A78BFA]/10 blur-2xl" />

                <div className="relative z-10 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6D28D9]">
                    Departure Dates
                  </p>

                  <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]" />

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {tour.departureDates.map((date, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ y: -2, scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-full border border-purple-200/70
                           bg-white/80 px-5 py-2.5 text-sm font-semibold
                           text-[#6D28D9] shadow-sm backdrop-blur-sm
                           transition-all duration-300
                           hover:border-[#8B5CF6]/60
                           hover:bg-white
                           hover:shadow-[0_10px_24px_rgba(109,40,217,0.14)]"
                      >
                        {date}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

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
                  data-aos-delay={index * 10}
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
      </div>

    </section>
  );
}