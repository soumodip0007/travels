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
  const lineRecalcRef = useRef(() => {});

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

    // rough initial pass — covers instant/non-animated layouts
    const t = setTimeout(calculateLine, 100);

    window.addEventListener("resize", calculateLine);

    // expose the latest calc fn so TourDayCard can trigger a precise
    // recalculation once its entrance animation actually settles
    lineRecalcRef.current = calculateLine;

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", calculateLine);
    };
  }, [selectedPackage, currentItinerary]);

  return (
    <section
      className="relative mt-12 overflow-hidden rounded-[36px]
      border border-purple-400/20
      shadow-[0_40px_80px_rgba(109,40,217,.35)]
      backdrop-blur-xl
      transition-all duration-500
      hover:shadow-[0_45px_90px_rgba(109,40,217,.45)]"
    >
      {/* Top — Same style as Package Gallery */}
<div
  className="
    relative
    overflow-hidden
    border-b border-white/20
    bg-gradient-to-r
    from-[#6D28D9]
    via-[#9333EA]
    to-[#C026D3]
    px-8 py-7
    md:px-10 md:py-9
  "
>
  {/* Decorative Glow */}
  <div
    className="
      pointer-events-none
      absolute
      -right-16
      -top-24
      h-64
      w-64
      rounded-full
      bg-fuchsia-300/30
      blur-3xl
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-28
      left-1/3
      h-56
      w-56
      rounded-full
      bg-purple-300/30
      blur-3xl
    "
  />

  {/* Header Content */}
  <div className="relative mx-auto flex max-w-7xl items-center justify-between">
    
    <div>
      <span
        className="
          inline-block
          rounded-full
          border border-white/40
          bg-white/20
          px-4 py-2
          text-sm
          font-semibold
          text-white
          backdrop-blur-md
        "
      >
        Tour Itinerary
      </span>

      <h2
        className="
          mt-3
          text-4xl
          font-black
          tracking-tight
          text-white
          drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)]
          md:text-5xl
        "
      >
        Day Wise Tour Plan
      </h2>
    </div>

    {/* Package count / itinerary badge */}
    <div
      className="
        hidden
        rounded-full
        border border-white/40
        bg-white/95
        px-5 py-2.5
        text-sm
        font-bold
        text-[#7C3AED]
        shadow-lg
        md:block
      "
    >
      {currentItinerary.length} Days
    </div>

  </div>
</div>

      {/* Bottom — Content */}
      <div className="p-8 md:p-10">
        <div className="mx-auto w-[92%] max-w-7xl">

          {/* Current Package Details */}
          {currentPackage && (
            <div className="mb-8 flex flex-wrap justify-center gap-6">

              <div className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white via-purple-50 to-violet-100 px-8 py-5 shadow-[0_15px_35px_rgba(109,40,217,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(109,40,217,0.3)]">
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-fuchsia-300/30 blur-2xl" />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#A78BFA] via-[#8B5CF6] to-[#6D28D9] text-white shadow-[0_10px_18px_rgba(109,40,217,0.45),inset_0_2px_2px_rgba(255,255,255,0.65),inset_0_-4px_5px_rgba(76,29,149,0.6)]">
                  {/* glossy highlight */}
                  <div className="pointer-events-none absolute -top-3 left-1/2 h-8 w-10 -translate-x-1/2 rounded-full bg-white/50 blur-[6px]" />
                  <Clock3 size={22} className="relative z-10 drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.35)]" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-semibold text-purple-600">Duration</p>
                  <h3 className="text-xl font-black text-[#4C1D95]">
                    {currentDuration}
                  </h3>
                </div>
              </div>

              <div className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white via-violet-50 to-fuchsia-100 px-8 py-5 shadow-[0_15px_35px_rgba(109,40,217,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(109,40,217,0.3)]">
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-violet-300/30 blur-2xl" />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-violet-700 text-lg font-black text-white shadow-[0_10px_18px_rgba(168,85,247,0.5),inset_0_2px_2px_rgba(255,255,255,0.65),inset_0_-4px_5px_rgba(88,28,135,0.6)]">
                  {/* glossy highlight */}
                  <div className="pointer-events-none absolute -top-3 left-1/2 h-8 w-10 -translate-x-1/2 rounded-full bg-white/50 blur-[6px]" />
                  <span className="relative z-10 drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.35)]">₹</span>
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-semibold text-purple-600">Starting From</p>
                  <h3 className="text-xl font-black tabular-nums text-[#4C1D95]">
                    ₹{animatedPrice.toLocaleString()}
                  </h3>
                </div>
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
                  className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${isSelected
                    ? "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 text-white shadow-[0_15px_35px_rgba(168,85,247,.45)]"
                    : isAvailable
                      ? "border-2 border-transparent bg-white text-[#6957DF] shadow-md [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#C084FC,#8B5CF6)_border-box] hover:-translate-y-0.5 hover:shadow-lg"
                      : "cursor-not-allowed border border-purple-100 bg-purple-50/60 text-purple-300"
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
                className="absolute left-8 hidden w-1 rounded-full bg-purple-400 md:block"
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
                    onSettled={() => lineRecalcRef.current()}
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